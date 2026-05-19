import csv, re
from datetime import datetime
from collections import defaultdict

csv_path = r'D:\excel_dashboard07 月報\2026  1 2 3 月\FY26 微軟工作執行紀錄.csv'

CATEGORY_MAP = {
    '': 'Microsoft',
    'M365': 'Microsoft 365',
    'Security': 'Microsoft Security',
    'Github Copilot': 'GitHub Copilot',
    'Copilot for M365': 'Copilot for M365',
    'Copilot Studio': 'Copilot Studio',
    'Power BI': 'Power BI',
    'Azure': 'Azure',
}

ID_PREFIX = {'Aaron': 'A', 'Lucas': 'L', 'Nick': 'N'}

def parse_date(s):
    parts = s.split()
    return datetime.strptime(parts[0], '%Y/%m/%d').strftime('%Y-%m-%d')

def parse_amount(s):
    s = s.strip()
    if not s:
        return 0
    return int(s.replace(',', ''))

def extract_client(item):
    for delim in [' ', '-', '_']:
        idx = item.find(delim)
        if 2 <= idx <= 12:
            c = item[:idx].strip()
            if len(c) >= 2:
                return c
    return item.strip()[:10]

with open(csv_path, 'r', encoding='utf-8-sig') as f:
    rows = list(csv.reader(f))[1:]

records = []
counters = defaultdict(int)
for row in rows:
    item, date_str, note, person, dealer, _, cat_raw, fee_str, virt_str = row
    if not person.strip():
        continue
    person = person.strip()
    date = parse_date(date_str)
    month = date[5:7]
    category = CATEGORY_MAP.get(cat_raw, 'Microsoft')
    fee = parse_amount(fee_str)
    virtual = parse_amount(virt_str)
    client = extract_client(item)
    prefix = ID_PREFIX.get(person, person[0])
    counters[(person, month)] += 1
    idx = counters[(person, month)]
    case_id = f"{prefix}{str(idx).zfill(3)}"
    records.append({
        'id': case_id, 'date': date, 'client': client, 'service': item.strip(),
        'virtual': virtual, 'actual': fee, 'category': category,
        'note': note.strip(), 'person': person, 'month': month
    })

by_pm = defaultdict(list)
for r in records:
    by_pm[(r['person'], r['month'])].append(r)

def summarize(cases):
    return len(cases), sum(c['virtual'] for c in cases), sum(c['actual'] for c in cases)

def top_highlights(cases, n=3):
    scored = sorted(cases, key=lambda c: c['virtual'] + c['actual']*2, reverse=True)
    result = []
    for c in scored[:n]:
        svc = c['service']
        if c['actual'] > 0:
            line = f"{svc} (NT${c['actual']:,})"
        elif c['virtual'] > 0:
            line = f"{svc} (虛擬價值 NT${c['virtual']:,})"
        else:
            line = svc
        result.append(line)
    return result

def esc(s):
    return s.replace('\\', '\\\\').replace('"', '\\"')

def case_to_js(c, indent='      '):
    parts = [
        f'id:"{c["id"]}"',
        f'date:"{c["date"]}"',
        f'client:"{esc(c["client"])}"',
        f'service:"{esc(c["service"])}"',
        f'virtual:{c["virtual"]}',
        f'actual:{c["actual"]}',
        f'category:"{c["category"]}"',
    ]
    if c['note']:
        parts.append(f'note:"{esc(c["note"])}"')
    return f'{indent}{{{",".join(parts)}}}'

def cases_js(cases, indent='      '):
    if not cases:
        return ''
    lines = [case_to_js(c, indent) for c in cases]
    return '\n'.join(lines)

def highlights_js(hl_list):
    return ', '.join(f'"{esc(h)}"' for h in hl_list)

def update_month(path, month, is_var_name=None):
    a_n, a_v, a_a = summarize(by_pm[('Aaron', month)])
    l_n, l_v, l_a = summarize(by_pm[('Lucas', month)])
    n_n, n_v, n_a = summarize(by_pm[('Nick', month)])
    a_hl = top_highlights(by_pm[('Aaron', month)], 3)
    l_hl = top_highlights(by_pm[('Lucas', month)], 3)
    n_hl = top_highlights(by_pm[('Nick', month)], 3)

    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace Aaron member block summary+highlights
    old_aaron = (
        '    Aaron: {\n'
        '      name: "Aaron", role: "全能型雲端支援專家", color: "#3B82F6",\n'
        '      summary: { cases: 0, virtual: 0, actual: 0 },\n'
        '      highlights: ["Q1期間資料待補充"],'
    )
    new_aaron = (
        '    Aaron: {\n'
        '      name: "Aaron", role: "全能型雲端支援專家", color: "#3B82F6",\n'
        f'      summary: {{ cases: {a_n}, virtual: {a_v}, actual: {a_a} }},\n'
        f'      highlights: [{highlights_js(a_hl)}],'
    )
    content = content.replace(old_aaron, new_aaron)

    # Replace Lucas member block summary+highlights
    old_lucas = (
        '    Lucas: {\n'
        '      name: "Lucas", role: "Azure 雲端基礎架構手", color: "#F59E0B",\n'
        '      summary: { cases: 0, virtual: 0, actual: 0 },\n'
        '      highlights: ["Q1期間資料待補充"],'
    )
    new_lucas = (
        '    Lucas: {\n'
        '      name: "Lucas", role: "Azure 雲端基礎架構手", color: "#F59E0B",\n'
        f'      summary: {{ cases: {l_n}, virtual: {l_v}, actual: {l_a} }},\n'
        f'      highlights: [{highlights_js(l_hl)}],'
    )
    content = content.replace(old_lucas, new_lucas)

    # Insert Nick member block after Lucas block (after its closing "},")
    nick_member = (
        '    Nick: {\n'
        '      name: "Nick", role: "GitHub Copilot / 微軟雲端推廣", color: "#14B8A6",\n'
        f'      summary: {{ cases: {n_n}, virtual: {n_v}, actual: {n_a} }},\n'
        f'      highlights: [{highlights_js(n_hl)}],\n'
        '      nextMonth: []\n'
        '    },'
    )

    # Use regex to find Lucas block and insert Nick after it
    content = re.sub(
        r'(    Lucas: \{.*?nextMonth: \[.*?\]\n    \},)',
        lambda m: m.group(0) + '\n' + nick_member,
        content, flags=re.DOTALL
    )

    # Replace Aaron cases: [] with real cases
    a_cases_str = cases_js(by_pm[('Aaron', month)])
    content = content.replace(
        '    Aaron: [],\n    Denny:',
        '    Aaron: [\n' + a_cases_str + '\n    ],\n    Denny:'
    )

    # Replace Lucas cases: [] and add Nick cases block
    l_cases_str = cases_js(by_pm[('Lucas', month)])
    n_cases_str = cases_js(by_pm[('Nick', month)])
    nick_cases_block = '    Nick: [\n' + n_cases_str + '\n    ],'
    content = content.replace(
        '    Lucas: [],\n    Adobe:',
        '    Lucas: [\n' + l_cases_str + '\n    ],\n' + nick_cases_block + '\n    Adobe:'
    )

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'{path} updated: Aaron={a_n}cases/v{a_v}/a{a_a}, Lucas={l_n}cases/v{l_v}/a{l_a}, Nick={n_n}cases/v{n_v}/a{n_a}')

# Update Q1 files
update_month(r'D:\excel_dashboard07 月報\data-202601.js', '01')
update_month(r'D:\excel_dashboard07 月報\data-202602.js', '02')
update_month(r'D:\excel_dashboard07 月報\data-202603.js', '03')

# Update data-202604.js - add Nick with 0 cases
path04 = r'D:\excel_dashboard07 月報\data-202604.js'
with open(path04, 'r', encoding='utf-8') as f:
    content = f.read()

nick_member_04 = (
    '    Nick: {\n'
    '      name: "Nick", role: "GitHub Copilot / 微軟雲端推廣", color: "#14B8A6",\n'
    '      summary: { cases: 0, virtual: 0, actual: 0 },\n'
    '      highlights: ["2026年4月無案件紀錄"],\n'
    '      nextMonth: []\n'
    '    },'
)

content = content.replace(
    '    Adobe: {\n      name: "Jimmy"',
    nick_member_04 + '\n    Adobe: {\n      name: "Jimmy"'
)

content = content.replace(
    '    Adobe: [\n      {id:"AD001"',
    '    Nick: [],\n    Adobe: [\n      {id:"AD001"'
)

with open(path04, 'w', encoding='utf-8') as f:
    f.write(content)
print('data-202604.js updated: Nick added with 0 cases')

# Update index.html
html_path = r'D:\excel_dashboard07 月報\index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace(
    "MEMBER_NAMES = ['Aaron','Denny','William','Lucas','Adobe'];",
    "MEMBER_NAMES = ['Aaron','Denny','William','Lucas','Nick','Adobe'];"
)

html = html.replace(
    "const MEMBER_COLORS = {Aaron:'#3B82F6',Denny:'#22C55E',William:'#A855F7',Lucas:'#F59E0B',Adobe:'#EF4444'};",
    "const MEMBER_COLORS = {Aaron:'#3B82F6',Denny:'#22C55E',William:'#A855F7',Lucas:'#F59E0B',Nick:'#14B8A6',Adobe:'#EF4444'};"
)

html = html.replace(
    "const MEMBER_LABELS = {Aaron:'Aaron',Denny:'Denny',William:'William',Lucas:'Lucas',Adobe:'Jimmy'};",
    "const MEMBER_LABELS = {Aaron:'Aaron',Denny:'Denny',William:'William',Lucas:'Lucas',Nick:'Nick',Adobe:'Jimmy'};"
)

# KPI_COLORS - insert Nick before Jimmy
html = re.sub(
    r"(const KPI_COLORS\s*=\s*\{[^}]*?Lucas:'[^']*')",
    r"\1,Nick:'#14B8A6'",
    html
)

# KPI_ROLES - insert Nick before Jimmy
html = re.sub(
    r"(const KPI_ROLES\s*=\s*\{[^}]*?Lucas:'[^']*')",
    r"\1,Nick:'GitHub Copilot / 微軟雲端推廣'",
    html
)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)
print('index.html updated')
print('All done!')

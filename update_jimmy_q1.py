"""
Update data-202601/02/03.js with Jimmy (Adobe) Q1 actual case data.
Reads source Excel, applies 2025->2026 date correction, patches each JS file.
"""
import re, json

# ── Parse source Excel ──────────────────────────────────────────────────────
import openpyxl
wb = openpyxl.load_workbook(
    '2026  1 2 3 月/Jimmy Adobe 2026 1 2 3 月.xlsx', data_only=True)
ws = wb['Adobe案例優化']

rows = []
for r in ws.iter_rows(min_row=2, values_only=True):
    if not r[0]: continue
    idx, date_raw, client, product, service, value_note, svc_type, virtual, actual, note = r
    # Fix 2025 → 2026 (clearly typos)
    date_str = str(date_raw).replace('2025/', '2026/') if date_raw else ''
    # Normalize to YYYY-MM-DD
    date_str = date_str.replace('/', '-')
    rows.append({
        'date': date_str,
        'client': (client or '').strip(),
        'product': (product or '').strip(),
        'service': (service or '').strip(),
        'svc_type': (svc_type or '').strip(),
        'virtual': int(virtual) if isinstance(virtual, (int, float)) else 0,
        'actual': int(actual) if isinstance(actual, (int, float)) else 0,
        'note': (note or '').strip(),
    })

# ── Group by month ───────────────────────────────────────────────────────────
monthly = {'2026-01': [], '2026-02': [], '2026-03': []}
for row in rows:
    ym = row['date'][:7]   # "2026-01"
    if ym in monthly:
        monthly[ym].append(row)

# Category from product name
def category(product):
    if 'Firefly' in product or 'Express' in product or 'AI' in product:
        return 'Adobe Firefly'
    if 'Acrobat' in product:
        return 'Acrobat Sign'
    if 'Admin' in product:
        return 'Admin Console'
    return 'Adobe'

# ── Build JS fragments per month ─────────────────────────────────────────────
def build_member_js(period, cases_list):
    n = len(cases_list)
    total_v = sum(c['virtual'] for c in cases_list)
    total_a = sum(c['actual'] for c in cases_list)
    # Highlights: top cases by virtual desc
    sorted_cases = sorted(cases_list, key=lambda x: x['virtual'], reverse=True)
    highlights = []
    for c in sorted_cases[:4]:
        hl = f"{c['client']} {c['product']} {c['svc_type']}"
        if c['virtual'] > 0:
            hl += f"（估值 NT${c['virtual']:,}）"
        highlights.append(hl)

    hl_js = json.dumps(highlights, ensure_ascii=False)
    member_js = f"""    Adobe: {{
      name: "Jimmy", role: "Adobe / Corel 負責人", color: "#EF4444",
      summary: {{ cases: {n}, virtual: {total_v}, actual: {total_a} }},
      highlights: {hl_js},
      nextMonth: []
    }}"""
    return member_js

def build_cases_js(period, cases_list):
    lines = []
    for i, c in enumerate(sorted(cases_list, key=lambda x: x['date']), start=1):
        cid = f"J{i:03d}"
        cat = category(c['product'])
        note = c['note'].replace('"', '\\"')
        service = c['service'].replace('"', '\\"')
        lines.append(
            f'      {{id:"{cid}",date:"{c["date"]}",client:"{c["client"]}",'
            f'service:"{service}",virtual:{c["virtual"]},actual:{c["actual"]},'
            f'category:"{cat}",note:"{note}"}}'
        )
    cases_js = "    Adobe: [\n" + ",\n".join(lines) + "\n    ]"
    return cases_js

# ── Patch JS files ────────────────────────────────────────────────────────────
for period, cases_list in monthly.items():
    mm = period.replace('-', '')  # "202601"
    fname = f'data-{mm}.js'
    txt = open(fname, encoding='utf-8').read()

    # Replace Adobe member block — allow one level of nested braces (e.g. summary:{})
    member_new = build_member_js(period, cases_list)
    txt = re.sub(
        r'    Adobe: \{(?:[^{}]|\{[^{}]*\})*\}',
        member_new,
        txt,
        flags=re.DOTALL
    )

    # Replace Adobe cases: either "Adobe: []" or multiline
    cases_new = build_cases_js(period, cases_list)
    txt = re.sub(
        r'    Adobe: \[[^\]]*\]',
        cases_new,
        txt,
        flags=re.DOTALL
    )

    open(fname, 'w', encoding='utf-8').write(txt)

    n = len(cases_list)
    v = sum(c['virtual'] for c in cases_list)
    print(f"{fname}: Adobe {n} cases, virtual NT${v:,}")

print("\nDone. Verify with: python -c \"import json; ...\"")

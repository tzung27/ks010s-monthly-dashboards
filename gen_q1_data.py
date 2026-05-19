"""
Generate data-202601.js, data-202602.js, data-202603.js from Q1 Excel file.
"""

import json
import re
from collections import defaultdict
import openpyxl

XLSX_PATH = r"D:\excel_dashboard07 月報\2026  1 2 3 月\2026 Q1 工作項目彙整_William _ Denny_20260331.xlsx"
OUT_DIR = r"D:\excel_dashboard07 月報"

SHEET_NAMES = [
    "2026 Q1 Apple & Jamf",
    "2026 Q1 Trend Micro",
    "2026 Q1 Kaspersky & Teamviewer",
]

# ── helpers ──────────────────────────────────────────────────────────────────

def convert_date(raw):
    """'2026.01.02' → '2026-01-02'"""
    if not raw:
        return None
    return str(raw).replace(".", "-")

def to_num(val):
    if val is None or val == "-" or str(val).strip() == "-":
        return 0
    try:
        return int(float(str(val).replace(",", "")))
    except Exception:
        return 0

def categorise(sheet_name, service):
    s = service or ""
    if sheet_name == "2026 Q1 Apple & Jamf":
        if "TeamViewer" in s:
            return "TeamViewer"
        elif "Jamf" in s:
            return "Jamf"
        elif any(k in s for k in ("ABM", "ADE", "Apple", "DUNS", "WWDC")):
            return "Apple"
        else:
            return "Jamf"
    elif sheet_name == "2026 Q1 Trend Micro":
        return "Trend Micro"
    else:  # Kaspersky & Teamviewer
        if "TeamViewer" in s or "Teamviewer" in s:
            return "TeamViewer"
        else:
            return "Kaspersky"

def safe_str(s):
    """Escape backslash and double-quote for JS string embedding."""
    s = str(s).strip()
    s = s.replace("\\", "\\\\").replace('"', '\\"')
    return s

# ── parse all rows ────────────────────────────────────────────────────────────

wb = openpyxl.load_workbook(XLSX_PATH, data_only=True)

# Each entry: dict with keys date, client, service, handler, virtual, actual, note, category, collab
raw_cases = []

for sname in SHEET_NAMES:
    ws = wb[sname]
    for row in ws.iter_rows(min_row=3, values_only=True):
        seq, date_raw, client, service, handler, virtual_raw, actual_raw, note = (
            row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7]
        )
        # Skip empty rows
        if date_raw is None or str(date_raw).strip() == "":
            continue
        # Skip rows where seq is not numeric (summary/total rows)
        if not isinstance(seq, (int, float)):
            continue

        date = convert_date(date_raw)
        if date is None:
            continue
        month = date[5:7]  # "01", "02", "03"
        if month not in ("01", "02", "03"):
            continue

        client = (client or "").strip()
        service = (service or "").strip()
        handler = (handler or "").strip()
        note = (note or "").strip()
        virtual = to_num(virtual_raw)
        actual = to_num(actual_raw)
        category = categorise(sname, service)

        raw_cases.append({
            "date": date,
            "month": month,
            "client": client,
            "service": service,
            "handler": handler,
            "virtual": virtual,
            "actual": actual,
            "note": note,
            "category": category,
        })

# ── expand "William & Denny" cases ──────────────────────────────────────────
# Build per-member case lists

members_cases = defaultdict(list)  # month → {Denny: [...], William: [...]}
for m in ("01", "02", "03"):
    members_cases[m] = {"Denny": [], "William": []}

for c in raw_cases:
    month = c["month"]
    h = c["handler"]

    if h == "William & Denny":
        # Denny copy: half virtual, no actual, collab=true
        denny_virtual = c["virtual"] // 2
        members_cases[month]["Denny"].append({
            "date": c["date"],
            "client": c["client"],
            "service": c["service"],
            "virtual": denny_virtual,
            "actual": 0,
            "note": c["note"],
            "category": c["category"],
            "collab": True,
        })
        # William copy: half virtual, full actual, collab=true
        william_virtual = c["virtual"] - denny_virtual  # handles odd numbers
        members_cases[month]["William"].append({
            "date": c["date"],
            "client": c["client"],
            "service": c["service"],
            "virtual": william_virtual,
            "actual": c["actual"],
            "note": c["note"],
            "category": c["category"],
            "collab": True,
        })
    elif h == "Denny":
        members_cases[month]["Denny"].append({
            "date": c["date"],
            "client": c["client"],
            "service": c["service"],
            "virtual": c["virtual"],
            "actual": c["actual"],
            "note": c["note"],
            "category": c["category"],
            "collab": False,
        })
    elif h == "William":
        members_cases[month]["William"].append({
            "date": c["date"],
            "client": c["client"],
            "service": c["service"],
            "virtual": c["virtual"],
            "actual": c["actual"],
            "note": c["note"],
            "category": c["category"],
            "collab": False,
        })
    # else: skip unknown handlers

# ── highlight generation ─────────────────────────────────────────────────────

NOTABLE_CLIENTS = ["彰化銀行", "華航", "奇美醫院", "凱基人壽", "台灣半導體", "台設院", "展碁"]

def make_highlights(cases, member):
    """Pick top 3-5 highlights from cases."""
    highlights = []
    seen = set()

    def add(txt):
        if txt not in seen:
            seen.add(txt)
            highlights.append(txt)

    # Sort by actual desc, then virtual desc
    sorted_by_actual = sorted(
        [c for c in cases if c["actual"] > 0],
        key=lambda x: x["actual"],
        reverse=True,
    )
    sorted_by_virtual = sorted(
        [c for c in cases if c["virtual"] >= 3000],
        key=lambda x: x["virtual"],
        reverse=True,
    )
    notable = [
        c for c in cases
        if any(nc in c["client"] for nc in NOTABLE_CLIENTS) and c["virtual"] >= 1000
    ]

    for c in sorted_by_actual[:2]:
        fee_str = f"NT${c['actual']:,}"
        txt = f"{c['client']} {c['service']} ({fee_str})"
        add(txt)

    for c in sorted_by_virtual[:3]:
        if c["virtual"] >= 20000:
            txt = f"{c['client']} {c['service']} (虛擬價值 NT${c['virtual']:,})"
        elif c["actual"] > 0:
            txt = f"{c['client']} {c['service']} (NT${c['actual']:,})"
        else:
            txt = f"{c['client']} {c['service']}"
        add(txt)

    for c in notable[:3]:
        svc_short = c["service"][:20].rstrip()
        txt = f"{c['client']} {svc_short}"
        add(txt)

    result = list(highlights)[:5]
    if not result:
        result = [f"Q1 {member} 技術支援服務"]
    return result

# ── JS file generation ───────────────────────────────────────────────────────

MONTH_LABEL = {"01": "1", "02": "2", "03": "3"}

def case_to_js_obj(case_id, case):
    parts = []
    parts.append(f'id:"{safe_str(case_id)}"')
    parts.append(f'date:"{safe_str(case["date"])}"')
    parts.append(f'client:"{safe_str(case["client"])}"')
    parts.append(f'service:"{safe_str(case["service"])}"')
    parts.append(f'virtual:{case["virtual"]}')
    parts.append(f'actual:{case["actual"]}')
    parts.append(f'category:"{safe_str(case["category"])}"')
    if case["note"]:
        parts.append(f'note:"{safe_str(case["note"])}"')
    if case["collab"]:
        parts.append('collab:"William & Denny"')
    return "{" + ",".join(parts) + "}"

def generate_js(month):
    yyyymm = f"2026{month}"
    period = f"2026-{month}"
    label = f"2026年{MONTH_LABEL[month]}月"

    denny_cases = members_cases[month]["Denny"]
    william_cases = members_cases[month]["William"]

    # summaries
    denny_cases_n = len(denny_cases)
    denny_virtual = sum(c["virtual"] for c in denny_cases)
    denny_actual = sum(c["actual"] for c in denny_cases)

    william_cases_n = len(william_cases)
    william_virtual = sum(c["virtual"] for c in william_cases)
    william_actual = sum(c["actual"] for c in william_cases)

    denny_highlights = make_highlights(denny_cases, "Denny")
    william_highlights = make_highlights(william_cases, "William")

    # Build case JS strings
    def cases_js(cases, prefix):
        lines = []
        for i, c in enumerate(cases, 1):
            cid = f"{prefix}{i:03d}"
            lines.append("      " + case_to_js_obj(cid, c))
        return ",\n".join(lines)

    denny_js = cases_js(denny_cases, "D")
    william_js = cases_js(william_cases, "W")

    # highlights JS
    def highlights_js(lst):
        return "[" + ",".join(f'"{safe_str(h)}"' for h in lst) + "]"

    dh = highlights_js(denny_highlights)
    wh = highlights_js(william_highlights)

    q1_placeholder = '["Q1期間資料待補充"]'

    js = f"""// KS010S {label} 完整案件資料
const DATA_{yyyymm} = {{
  period: "{period}",
  label: "{label}",
  department: "KS010S",
  members: {{
    Aaron: {{
      name: "Aaron", role: "全能型雲端支援專家", color: "#3B82F6",
      summary: {{ cases: 0, virtual: 0, actual: 0 }},
      highlights: {q1_placeholder},
      nextMonth: []
    }},
    Denny: {{
      name: "Denny", role: "端點管理與資安主力", color: "#22C55E",
      summary: {{ cases: {denny_cases_n}, virtual: {denny_virtual}, actual: {denny_actual} }},
      highlights: {dh},
      nextMonth: []
    }},
    William: {{
      name: "William", role: "高價值服務與營收貢獻者", color: "#A855F7",
      summary: {{ cases: {william_cases_n}, virtual: {william_virtual}, actual: {william_actual} }},
      highlights: {wh},
      nextMonth: []
    }},
    Lucas: {{
      name: "Lucas", role: "Azure 雲端基礎架構手", color: "#F59E0B",
      summary: {{ cases: 0, virtual: 0, actual: 0 }},
      highlights: {q1_placeholder},
      nextMonth: []
    }},
    Adobe: {{
      name: "Jimmy", role: "Adobe / Corel 負責人", color: "#EF4444",
      summary: {{ cases: 0, virtual: null, actual: null }},
      highlights: {q1_placeholder},
      nextMonth: []
    }}
  }},
  cases: {{
    Aaron: [],
    Denny: [
{denny_js}
    ],
    William: [
{william_js}
    ],
    Lucas: [],
    Adobe: []
  }}
}};
"""
    return js

# ── write files & print summary ──────────────────────────────────────────────

print("=" * 60)
print("Q1 2026 Data Generation Summary")
print("=" * 60)

for month in ("01", "02", "03"):
    js_content = generate_js(month)
    out_path = f"{OUT_DIR}\\data-2026{month}.js"
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(js_content)

    denny_cases = members_cases[month]["Denny"]
    william_cases = members_cases[month]["William"]

    print(f"\n2026-{month}:")
    print(f"  Denny  : {len(denny_cases):3d} cases | virtual={sum(c['virtual'] for c in denny_cases):7,} | actual={sum(c['actual'] for c in denny_cases):7,}")
    print(f"  William: {len(william_cases):3d} cases | virtual={sum(c['virtual'] for c in william_cases):7,} | actual={sum(c['actual'] for c in william_cases):7,}")
    print(f"  → Written: {out_path}")

print("\nDone.")

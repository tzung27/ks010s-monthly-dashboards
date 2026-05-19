# KS010S 部門月報系統 — 開發規則

## 專案結構
- `index.html` — 單頁儀表板（Chart.js 4.4.0）
- `data-YYYYMM.js` — 每月資料檔，格式：`const DATA_YYYYMM = { period, label, members:{}, cases:{} }`
- `MEMBER_NAMES = ['Aaron','Denny','William','Lucas','Nick','Adobe']`

## ⚠️ 寫入資料檔時的強制規則

### 1. JS 陣列物件之間必須有逗號
```js
// ✅ 正確
cases: {
  Aaron: [
    {id:"A001", ...},   ← 逗號
    {id:"A002", ...},   ← 逗號
    {id:"A003", ...}    ← 最後一個不需要
  ]
}

// ❌ 錯誤（會導致頁面全白，且不報錯）
Aaron: [
  {id:"A001", ...}
  {id:"A002", ...}    ← 缺逗號 → SyntaxError → DATA_202601 undefined
]
```

### 2. 每次寫完資料後，必須執行驗證
```bash
python3 validate.py
```
看到全部 ✅ 才算完成。若有 ❌ 必須先修再交差。

### 3. 驗證通過後，告知使用者執行 Ctrl+Shift+R
瀏覽器可能有快取，強制 hard refresh 才能看到最新資料。

## members 物件結構（每人必填欄位）
```js
MemberName: {
  name: "顯示名稱", role: "職稱", color: "#HEX",
  summary: { cases: 0, virtual: 0, actual: 0 },
  highlights: ["亮點1", "亮點2"],
  nextMonth: ["下月計畫1", "下月計畫2"]
}
```

## cases 陣列結構（每筆必填欄位）
```js
{ id:"X001", date:"2026-MM-DD", client:"客戶名", service:"服務內容",
  virtual: 0, actual: 0, category:"分類", note:"備註" }
```

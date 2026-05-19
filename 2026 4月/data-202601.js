// KS010S 2026年1月 完整案件資料
const DATA_202601 = {
  period: "2026-01",
  label: "2026年1月",
  department: "KS010S",
  members: {
    Aaron: {
      name: "Aaron", role: "全能型雲端支援專家", color: "#3B82F6",
      summary: { cases: 0, virtual: 0, actual: 0 },
      highlights: ["Q1期間資料待補充"],
      nextMonth: ["M365 跨租戶遷移 (Cloudiway) POC 評估啟動","Microsoft Defender for Business 安全加固方案洽談","Azure AD / Entra ID 身份治理客戶深化","BC 升版需求追蹤與解決方案提案","Exchange Online 進階設定與問題處理"]
    },
    Denny: {
      name: "Denny", role: "端點管理與資安主力", color: "#22C55E",
      summary: { cases: 46, virtual: 45050, actual: 81000 },
      highlights: ["華航 Jamf-新舊iPad 資料移轉問題協助 (NT$75,000)","台灣半導體 Apex Central教育訓練 (NT$6,000)","華航TPEEZ & TPEOZ Jamf Protect onboarding","奇美醫院 Jamf-相關憑證更新","華航 Jamf-新舊iPad 資料移轉問題協助"],
      nextMonth: ["凱基人壽 macOS MDM 評估深化，目標 Q1 成約","台灣半導體 Apex Central 教育訓練後續建置驗收","Jamf Protect 推廣：鎖定金融與醫療客群","彰銀 Jamf 年度憑證更新前置作業啟動","AI 工具導入 SOP 草稿產出，提升案件處理效率"]
    },
    William: {
      name: "William", role: "高價值服務與營收貢獻者", color: "#A855F7",
      summary: { cases: 15, virtual: 102650, actual: 68000 },
      highlights: ["台設院 MA技術維護 - 安裝故障排除 (NT$60,000)","台設院 卡巴斯基建置及教育訓練 (NT$8,000)","台設院 MA技術維護 - 安裝故障排除 (虛擬價值 NT$60,000)","展碁線上 卡巴斯基線上教育訓練-基礎","華航TPEEZ & TPEOZ Jamf Protect onboard"],
      nextMonth: ["台設院 MA 技術維護驗收與後續年度合約洽談","Kaspersky EDR 新版授權推廣，鎖定製造業客群","展碁線上 Kaspersky 進階版本升級服務洽談","Jamf Protect 企業安全方案聯合推廣（與 Denny 協作）","整理 TeamViewer 現有客戶清單，推動合約更新"]
    },
    Lucas: {
      name: "Lucas", role: "Azure 雲端基礎架構手", color: "#F59E0B",
      summary: { cases: 0, virtual: 0, actual: 0 },
      highlights: ["Q1期間資料待補充"],
      nextMonth: ["Azure 備份機制標準化 SOP 建立（覆蓋 VM/SQL/Blob）","Sentinel POC 技術方案提案準備","雲端成本優化顧問初步報告產出","AI 工具（Copilot）導入試用，評估案件回覆效率提升","Azure 技術知識庫 Q1 第一批文章產出（≥5篇）"]
    },
    Adobe: {
      name: "Jimmy", role: "Adobe / Corel 負責人", color: "#EF4444",
      summary: { cases: 1, virtual: 12000, actual: 0 },
      highlights: ["義聯集團 Admin Console 企業導入/顧問（估值 NT$12,000）"],
      nextMonth: ["Acrobat Sign ETLA→VIP 轉授權客群擴展，推廣福斯汽車成功案例","新竹市教育局 Express & Firefly AI 導入後追蹤與成效評估","Firefly AI 教材內容產出：製作第一批教學影片腳本","Admin Console 企業授權管理顧問服務標準化報價","Adobe KB 技術文章：1月重點案例整理（月均≥5篇目標）"]
    }
  },
  cases: {
    Aaron: [],
    Denny: [
      {id:"D001",date:"2026-01-02",client:"華航",service:"Jamf-新舊iPad 資料移轉問題協助",virtual:1000,actual:75000,category:"Jamf",note:"$300,000/年"},
      {id:"D002",date:"2026-01-05",client:"長榮空廚",service:"Jamf-維護服務_憑證更新處理",virtual:1500,actual:0,category:"Jamf",collab:"William & Denny"},
      {id:"D003",date:"2026-01-06",client:"華航TPEEZ",service:"Jamf-多台iPad裝置未更新資產狀態之問題處理",virtual:1000,actual:0,category:"Jamf"},
      {id:"D004",date:"2026-01-06",client:"中華賓士",service:"Jamf-LDAP問題處理",virtual:2000,actual:0,category:"Jamf"},
      {id:"D005",date:"2026-01-07",client:"彰銀總部分行",service:"Jamf-iPad問題處理",virtual:300,actual:0,category:"Jamf"},
      {id:"D006",date:"2026-01-08",client:"聯新醫院",service:"iPad*1 手動ADE處理",virtual:500,actual:0,category:"Apple"},
      {id:"D007",date:"2026-01-12",client:"華航TPEEZ",service:"Jamf-APP排序處理",virtual:1000,actual:0,category:"Jamf"},
      {id:"D008",date:"2026-01-13",client:"華航TPEEZ",service:"Jamf-主畫面排序問題處理",virtual:1000,actual:0,category:"Jamf"},
      {id:"D009",date:"2026-01-13",client:"彰銀保代處",service:"Jamf-保誠人壽Web UAT建議書設置協助",virtual:500,actual:0,category:"Jamf"},
      {id:"D010",date:"2026-01-14",client:"中華賓士",service:"Jamf-工廠iPad專案(Weblink測試)",virtual:500,actual:0,category:"Jamf",collab:"William & Denny"},
      {id:"D011",date:"2026-01-14",client:"華航TPEEZ",service:"Jamf-VPP token更新協助",virtual:1000,actual:0,category:"Jamf"},
      {id:"D012",date:"2026-01-14",client:"華航TPEOZ",service:"Jamf Protect APP資料傳送問題處理",virtual:1000,actual:0,category:"Jamf"},
      {id:"D013",date:"2026-01-14",client:"台中市政府衛生局",service:"Jamf-iPad密碼忘記問題處理",virtual:500,actual:0,category:"Jamf"},
      {id:"D014",date:"2026-01-16",client:"彰銀岡山分行",service:"iPad DFU處理",virtual:1000,actual:0,category:"Jamf"},
      {id:"D015",date:"2026-01-16",client:"汎德",service:"Jamf-Jamf Account & License問題處理",virtual:250,actual:0,category:"Jamf",collab:"William & Denny"},
      {id:"D016",date:"2026-01-19",client:"奇美醫院",service:"Jamf-WiFi網路設置問題處理",virtual:500,actual:0,category:"Jamf"},
      {id:"D017",date:"2026-01-19",client:"彰銀內湖分行",service:"iPad DFU處理",virtual:1000,actual:0,category:"Jamf"},
      {id:"D018",date:"2026-01-19",client:"彰銀斗六分行",service:"Jamf-台壽APP無法使用問題處理",virtual:500,actual:0,category:"Jamf"},
      {id:"D019",date:"2026-01-19",client:"日藥本舖",service:"Jamf-APP部署設置",virtual:500,actual:0,category:"Jamf"},
      {id:"D020",date:"2026-01-20",client:"彰銀彰化分行",service:"Jamf-iPad問題處理",virtual:300,actual:0,category:"Jamf"},
      {id:"D021",date:"2026-01-21",client:"彰銀保代處",service:"Jamf-保誠人壽Web建議書正式上線設置",virtual:1000,actual:0,category:"Jamf"},
      {id:"D022",date:"2026-01-22",client:"中華賓士",service:"工廠iPad專案POC(到場測試)",virtual:1500,actual:0,category:"Jamf",collab:"William & Denny"},
      {id:"D023",date:"2026-01-23",client:"彰銀思源分行",service:"Jamf-iPad問題處理",virtual:300,actual:0,category:"Jamf"},
      {id:"D024",date:"2026-01-23",client:"彰銀建國分行",service:"Jamf-iPad問題處理",virtual:300,actual:0,category:"Jamf"},
      {id:"D025",date:"2026-01-23",client:"彰銀屏東分行",service:"Jamf-iPad問題處理",virtual:300,actual:0,category:"Jamf"},
      {id:"D026",date:"2026-01-26",client:"彰銀天母分行",service:"Jamf-iPad問題處理",virtual:300,actual:0,category:"Jamf"},
      {id:"D027",date:"2026-01-26",client:"彰銀鹽埕分行",service:"Jamf-iPad問題處理",virtual:300,actual:0,category:"Jamf"},
      {id:"D028",date:"2026-01-26",client:"彰銀立德分行",service:"Jamf-iPad問題處理",virtual:300,actual:0,category:"Jamf"},
      {id:"D029",date:"2026-01-28",client:"彰銀龍潭分行",service:"iPad DFU處理",virtual:1000,actual:0,category:"Jamf"},
      {id:"D030",date:"2026-01-28",client:"彰銀北中壢分行",service:"iPad DFU處理",virtual:1000,actual:0,category:"Jamf"},
      {id:"D031",date:"2026-01-28",client:"日藥本舖",service:"Jamf-App閃退問題處理",virtual:500,actual:0,category:"Jamf"},
      {id:"D032",date:"2026-01-29",client:"彰銀保代處",service:"Jamf-SKL New App部署協助",virtual:1000,actual:0,category:"Jamf"},
      {id:"D033",date:"2026-01-29",client:"華航TPEEZ & TPEOZ",service:"Jamf Protect Pre-call",virtual:0,actual:0,category:"Jamf",collab:"William & Denny"},
      {id:"D034",date:"2026-01-29",client:"奇美醫院",service:"Jamf-相關憑證更新",virtual:3000,actual:0,category:"Jamf"},
      {id:"D035",date:"2026-01-30",client:"華航TPEEZ & TPEOZ",service:"Jamf Protect onboarding",virtual:4000,actual:0,category:"Jamf",collab:"William & Denny"},
      {id:"D036",date:"2026-01-06",client:"新竹市地政事務所",service:"Apex One Server協助(Lab測試)",virtual:3000,actual:0,category:"Trend Micro"},
      {id:"D037",date:"2026-01-08",client:"弘塑科技",service:"Apex One問題處理",virtual:600,actual:0,category:"Trend Micro"},
      {id:"D038",date:"2026-01-12",client:"弘塑科技",service:"Apex Central問題處理",virtual:600,actual:0,category:"Trend Micro"},
      {id:"D039",date:"2026-01-15",client:"台灣半導體",service:"Apex Central教育訓練",virtual:6000,actual:6000,category:"Trend Micro"},
      {id:"D040",date:"2026-01-16",client:"新能量科技",service:"Apex One問題處理",virtual:600,actual:0,category:"Trend Micro"},
      {id:"D041",date:"2026-01-16",client:"林口長庚醫院",service:"IMSVA 移轉會議",virtual:600,actual:0,category:"Trend Micro"},
      {id:"D042",date:"2026-01-23",client:"金怡合企業",service:"WFBS-SVC & Apex One問題處理",virtual:600,actual:0,category:"Trend Micro"},
      {id:"D043",date:"2026-01-26",client:"決策資訊電腦",service:"WFBS 問題處理",virtual:600,actual:0,category:"Trend Micro"},
      {id:"D044",date:"2026-01-26",client:"旭立科技",service:"Apex One問題協助",virtual:600,actual:0,category:"Trend Micro"},
      {id:"D045",date:"2026-01-30",client:"群曜數位科技",service:"Trend Micro企業防毒問題處理",virtual:600,actual:0,category:"Trend Micro"},
      {id:"D046",date:"2026-01-30",client:"凌陽科技",service:"Apex One問題處理",virtual:600,actual:0,category:"Trend Micro"}
    ],
    William: [
      {id:"W001",date:"2026-01-05",client:"長榮空廚",service:"Jamf-維護服務_憑證更新處理",virtual:1500,actual:0,category:"Jamf",collab:"William & Denny"},
      {id:"W002",date:"2026-01-14",client:"中華賓士",service:"Jamf-工廠iPad專案(Weblink測試)",virtual:500,actual:0,category:"Jamf",collab:"William & Denny"},
      {id:"W003",date:"2026-01-16",client:"汎德",service:"Jamf-Jamf Account & License問題處理",virtual:250,actual:0,category:"Jamf",collab:"William & Denny"},
      {id:"W004",date:"2026-01-22",client:"中華賓士",service:"工廠iPad專案POC(到場測試)",virtual:1500,actual:0,category:"Jamf",collab:"William & Denny"},
      {id:"W005",date:"2026-01-27",client:"量趨",service:"Jamf-Mac 設定協助",virtual:2000,actual:0,category:"Jamf"},
      {id:"W006",date:"2026-01-29",client:"華航TPEEZ & TPEOZ",service:"Jamf Protect Pre-call",virtual:0,actual:0,category:"Jamf",collab:"William & Denny"},
      {id:"W007",date:"2026-01-30",client:"華航TPEEZ & TPEOZ",service:"Jamf Protect onboarding",virtual:4000,actual:0,category:"Jamf",collab:"William & Denny"},
      {id:"W008",date:"2026-01-09",client:"展碁線上",service:"卡巴斯基線上教育訓練-基礎",virtual:8000,actual:0,category:"Kaspersky"},
      {id:"W009",date:"2026-01-09",client:"鼎基資訊",service:"管理中心問題詢問",virtual:300,actual:0,category:"Kaspersky"},
      {id:"W010",date:"2026-01-19",client:"鼎基資訊",service:"管理中心問題詢問",virtual:300,actual:0,category:"Kaspersky"},
      {id:"W011",date:"2026-01-21",client:"台設院",service:"卡巴斯基建置及教育訓練",virtual:8000,actual:8000,category:"Kaspersky"},
      {id:"W012",date:"2026-01-24",client:"紅陽科技",service:"卡巴升級",virtual:8000,actual:0,category:"Kaspersky"},
      {id:"W013",date:"2026-01-26",client:"展碁線上",service:"卡巴斯基線上教育訓練-優選",virtual:8000,actual:0,category:"Kaspersky"},
      {id:"W014",date:"2026-01-27",client:"台設院",service:"MA技術維護 - 安裝故障排除",virtual:60000,actual:60000,category:"Kaspersky"},
      {id:"W015",date:"2026-01-29",client:"台達電",service:"卡巴斯基詢問",virtual:300,actual:0,category:"Kaspersky"}
    ],
    Lucas: [],
    Adobe: [
      {id:"J001",date:"2026-01-13",client:"義聯集團",service:"建立企業授權管理架構、權限分級與使用者指派流程",virtual:12000,actual:0,category:"Admin Console",note:"可延伸年度顧問"}
    ]
  }
};

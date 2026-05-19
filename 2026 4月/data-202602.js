// KS010S 2026年2月 完整案件資料
const DATA_202602 = {
  period: "2026-02",
  label: "2026年2月",
  department: "KS010S",
  members: {
    Aaron: {
      name: "Aaron", role: "全能型雲端支援專家", color: "#3B82F6",
      summary: { cases: 0, virtual: 0, actual: 0 },
      highlights: ["Q1期間資料待補充"],
      nextMonth: ["Entra ID 取代傳統 AD 客戶深化規劃，完成 3 家評估報告","Power Automate / SharePoint 整合需求開發啟動","M365 安全評估報告撰寫（涵蓋 MFA、條件式存取）","GWS 轉 M365 遷移案客戶跟進與時程確認","Azure 技術支援文章撰寫（CLM Website 每月目標達成）"]
    },
    Denny: {
      name: "Denny", role: "端點管理與資安主力", color: "#22C55E",
      summary: { cases: 26, virtual: 17600, actual: 0 },
      highlights: ["萬海航運 Jamf-相關憑證更新協助","華航TPEEZ Jamf Pro-Device name","華航TPEEZ Jamf-iPad關聯User資訊自動消","華航資訊處 Jamf Pro問題處理"],
      nextMonth: ["和雲行動服務 Apex One & Apex Central 安裝建置衝刺","台灣資生堂 Jamf Pro onboarding 深化服務","Apple SMB 研討會 Q1 議程準備與潛在商機追蹤","強茂 Jamf for Mobile POC 轉正式合約攻關","Trend Micro Vision One NAS 防護建置跟進驗收"]
    },
    William: {
      name: "William", role: "高價值服務與營收貢獻者", color: "#A855F7",
      summary: { cases: 17, virtual: 33200, actual: 0 },
      highlights: ["展碁線上 卡巴斯基線上教育訓練-基礎","展碁線上 卡巴斯基線上教育訓練-優選","台設院 Jamf Trust設定協助"],
      nextMonth: ["台灣資生堂 Jamf Pro 深化服務：進階培訓規劃","Apple SMB 活動資安主題講師備課與簡報製作","Kaspersky KES 升版服務推廣清單更新","強茂 MDM POC 轉正式合約協作（與 Denny 聯合推進）","華航 TPEEMO Jamf 多 iOS 設備 onboarding 收尾驗收"]
    },
    Lucas: {
      name: "Lucas", role: "Azure 雲端基礎架構手", color: "#F59E0B",
      summary: { cases: 0, virtual: 0, actual: 0 },
      highlights: ["Q1期間資料待補充"],
      nextMonth: ["Azure VM 效能優化分析報告交付（坤侑科技）","網際智慧資安強化方案提案簡報完成","Azure 雲端收費顧問服務第一件成交衝刺","Sentinel POC 方案正式提案遞交","Azure 技術知識庫 Q1 第二批文章產出（累計≥10篇）"]
    },
    Adobe: {
      name: "Jimmy", role: "Adobe / Corel 負責人", color: "#EF4444",
      summary: { cases: 2, virtual: 45000, actual: 0 },
      highlights: ["新竹市教育局 Express & Firefly AI導入/培訓（估值 NT$25,000）", "福斯汽車 Acrobat Sign 流程優化/導入（估值 NT$20,000）"],
      nextMonth: ["Honda 本田汽車 Acrobat Sign 導入深化與安全控管機制驗收","理工科技顧問技術顧問報告提交，推動年度合約","飛資得集團智慧工作流程方案設計完稿","九易宇軒 Admin Console 後台操作培訓執行","Firefly AI 教育市場 B2G 推廣：複製新竹市教育局成功模式"]
    }
  },
  cases: {
    Aaron: [],
    Denny: [
      {id:"D001",date:"2026-02-02",client:"彰銀城內分行",service:"iPad DFU處理",virtual:1000,actual:0,category:"Jamf"},
      {id:"D002",date:"2026-02-02",client:"彰銀資訊處",service:"iPad DFU處理",virtual:1000,actual:0,category:"Jamf"},
      {id:"D003",date:"2026-02-03",client:"兆賀",service:"Jamf-相關憑證更新協助",virtual:1500,actual:0,category:"Jamf",collab:"William & Denny"},
      {id:"D004",date:"2026-02-05",client:"彰銀楊梅分行",service:"Jamf-iPad問題處理",virtual:300,actual:0,category:"Jamf"},
      {id:"D005",date:"2026-02-05",client:"彰銀永樂分行",service:"Jamf-iPad問題處理",virtual:300,actual:0,category:"Jamf"},
      {id:"D006",date:"2026-02-09",client:"彰銀潮州分行",service:"Jamf-iPad問題處理",virtual:300,actual:0,category:"Jamf"},
      {id:"D007",date:"2026-02-09",client:"彰銀鹽埕分行",service:"Jamf-iPad問題處理",virtual:300,actual:0,category:"Jamf"},
      {id:"D008",date:"2026-02-10",client:"華航TPEEZ",service:"Jamf Pro-Device name問題處理",virtual:1000,actual:0,category:"Jamf"},
      {id:"D009",date:"2026-02-10",client:"華航TPEEZ",service:"Jamf Protect-指令pending問題處理",virtual:500,actual:0,category:"Jamf",collab:"William & Denny"},
      {id:"D010",date:"2026-02-12",client:"彰銀信義分行",service:"Jamf-iPad問題處理",virtual:300,actual:0,category:"Jamf"},
      {id:"D011",date:"2026-02-13",client:"寶健醫院",service:"Jamf-iPad脫管問題處理",virtual:300,actual:0,category:"Jamf"},
      {id:"D012",date:"2026-02-23",client:"彰銀資訊處",service:"Jamf-Web建議書部署資料提供",virtual:500,actual:0,category:"Jamf"},
      {id:"D013",date:"2026-02-23",client:"壽司郎",service:"Jamf Pro 討論會議",virtual:0,actual:0,category:"Jamf"},
      {id:"D014",date:"2026-02-23",client:"華航TPEEZ",service:"Jamf-iPad關聯User資訊自動消失問題處理",virtual:1000,actual:0,category:"Jamf"},
      {id:"D015",date:"2026-02-24",client:"彰銀大林分行",service:"Jamf-iPad問題處理",virtual:300,actual:0,category:"Jamf"},
      {id:"D016",date:"2026-02-24",client:"萬海航運",service:"Jamf-相關憑證更新協助",virtual:3000,actual:0,category:"Jamf"},
      {id:"D017",date:"2026-02-25",client:"華航資訊處",service:"Jamf Pro問題處理",virtual:1000,actual:0,category:"Jamf"},
      {id:"D018",date:"2026-02-25",client:"彰銀保代處",service:"Jamf-iPad問題處理",virtual:300,actual:0,category:"Jamf"},
      {id:"D019",date:"2026-02-26",client:"台中市政府衛生局",service:"Jamf Pro問題處理",virtual:500,actual:0,category:"Jamf"},
      {id:"D020",date:"2026-02-03",client:"台耘工業",service:"Apex One SaaS問題處理",virtual:600,actual:0,category:"Trend Micro"},
      {id:"D021",date:"2026-02-11",client:"弘塑科技",service:"Apex One問題處理",virtual:600,actual:0,category:"Trend Micro"},
      {id:"D022",date:"2026-02-11",client:"大甲永和機械工業",service:"WFBS-Svc問題處理",virtual:600,actual:0,category:"Trend Micro"},
      {id:"D023",date:"2026-02-12",client:"高傑信",service:"Apex One問題處理",virtual:600,actual:0,category:"Trend Micro"},
      {id:"D024",date:"2026-02-24",client:"桃園國際機場",service:"航空地面燈專案Apex One on-Premises問題處理",virtual:600,actual:0,category:"Trend Micro"},
      {id:"D025",date:"2026-02-25",client:"台中教育大學",service:"Apex One iDLP問題回覆",virtual:600,actual:0,category:"Trend Micro"},
      {id:"D026",date:"2026-02-26",client:"大甲永和機械工業",service:"WFBS-SVC問題處理",virtual:600,actual:0,category:"Trend Micro"}
    ],
    William: [
      {id:"W001",date:"2026-02-03",client:"兆賀",service:"Jamf-相關憑證更新協助",virtual:1500,actual:0,category:"Jamf",collab:"William & Denny"},
      {id:"W002",date:"2026-02-10",client:"華航TPEEZ",service:"Jamf Protect-指令pending問題處理",virtual:500,actual:0,category:"Jamf",collab:"William & Denny"},
      {id:"W003",date:"2026-02-12",client:"量趨",service:"Jamf-Mac 設定協助",virtual:2000,actual:0,category:"Jamf"},
      {id:"W004",date:"2026-02-12",client:"台設院",service:"Jamf Trust設定協助",virtual:3000,actual:0,category:"Jamf"},
      {id:"W005",date:"2026-02-13",client:"壽司郎",service:"DUNS & ABM 申請協助",virtual:3000,actual:0,category:"Apple"},
      {id:"W006",date:"2026-02-13",client:"日立永大電梯",service:"DUNS & ABM 申請協助",virtual:3000,actual:0,category:"Apple"},
      {id:"W007",date:"2026-02-13",client:"台灣資生堂",service:"DUNS & ABM 申請協助",virtual:3000,actual:0,category:"Apple"},
      {id:"W008",date:"2026-02-02",client:"台設院",service:"MA技術維護 - 安裝故障排除",virtual:0,actual:0,category:"Kaspersky"},
      {id:"W009",date:"2026-02-09",client:"台設院",service:"MA技術維護 - 安裝故障排除",virtual:0,actual:0,category:"Kaspersky"},
      {id:"W010",date:"2026-02-10",client:"鼎基資訊",service:"管理中心問題詢問",virtual:300,actual:0,category:"Kaspersky"},
      {id:"W011",date:"2026-02-11",client:"雅筑",service:"卡巴斯基詢問",virtual:300,actual:0,category:"Kaspersky"},
      {id:"W012",date:"2026-02-12",client:"達昇能源",service:"TeamViewer更新方法詢問",virtual:0,actual:0,category:"TeamViewer"},
      {id:"W013",date:"2026-02-12",client:"鼎基資訊",service:"管理中心問題詢問",virtual:300,actual:0,category:"Kaspersky"},
      {id:"W014",date:"2026-02-13",client:"展碁線上",service:"卡巴斯基線上教育訓練-基礎",virtual:8000,actual:0,category:"Kaspersky"},
      {id:"W015",date:"2026-02-13",client:"鼎基資訊",service:"管理中心問題詢問",virtual:300,actual:0,category:"Kaspersky"},
      {id:"W016",date:"2026-02-27",client:"台設院",service:"MA技術維護 - 安裝故障排除",virtual:0,actual:0,category:"Kaspersky"},
      {id:"W017",date:"2026-02-28",client:"展碁線上",service:"卡巴斯基線上教育訓練-優選",virtual:8000,actual:0,category:"Kaspersky"}
    ],
    Lucas: [],
    Adobe: [
      {id:"J001",date:"2026-02-10",client:"福斯汽車",service:"完成ETLA轉VIP授權並優化電子簽署流程",virtual:20000,actual:0,category:"Acrobat Sign",note:"高價值流程案"},
      {id:"J002",date:"2026-02-25",client:"新竹市教育局",service:"導入生成式AI應用於教材與內容製作",virtual:25000,actual:0,category:"Adobe Firefly",note:"教育市場"}
    ]
  }
};

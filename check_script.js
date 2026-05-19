
// ─────────────────────────────────────────────────────────────
// Constants & colour helpers
// ─────────────────────────────────────────────────────────────
const MEMBER_NAMES = ['Aaron','Denny','William','Lucas','Nick','Adobe'];
const MEMBER_COLORS = {Aaron:'#3B82F6',Denny:'#22C55E',William:'#A855F7',Lucas:'#F59E0B',Nick:'#14B8A6',Adobe:'#EF4444'};
const MEMBER_LABELS = {Aaron:'Aaron',Denny:'Denny',William:'William',Lucas:'Lucas',Nick:'Nick',Adobe:'Jimmy'};

// ─────────────────────────────────────────────────────────────
// Storage
// ─────────────────────────────────────────────────────────────
const STORAGE_KEY = 'ks010s_data';

function loadStorage(){
  try{const s=localStorage.getItem(STORAGE_KEY);return s?JSON.parse(s):{};}catch{return{};}
}
function saveStorage(data){localStorage.setItem(STORAGE_KEY,JSON.stringify(data));}

function getAllData(){
  const stored=loadStorage();
  stored['2026-01']=DATA_202601;
  stored['2026-02']=DATA_202602;
  stored['2026-03']=DATA_202603;
  stored['2026-04']=DATA_202604;
  return stored;
}

function getHighlightsAndImprovements(period){
  const map={
    '2026-01':{
      report:`2026年1月，部門主力成員 William 與 Denny 共同完成高價值客戶服務。Denny 處理 Apple & Jamf 裝置管理及 Trend Micro 資安案件合計 46 件，虛擬費用 NT$45,050，實際收費 NT$81,000（含華航 iPad 資料移轉 NT$75,000、台灣半導體 Apex Central 教育訓練 NT$6,000）。William 完成 Kaspersky 教育訓練及台設院建置維護共 15 件，虛擬費用 NT$102,650，實際收費 NT$68,000（台設院卡巴斯基建置 NT$8,000 及 MA 維護 NT$60,000）。`,
      highlights:[
        'Denny 完成華航 Jamf iPad 資料移轉，帶動本月最高單案實收 NT$75,000',
        'William 完成台設院 MA 技術維護，實收 NT$60,000，奠定長期服務合約基礎',
        'William 完成台設院卡巴斯基建置及教育訓練，實收 NT$8,000',
        'Denny 完成台灣半導體 Apex Central 教育訓練，實收 NT$6,000',
        '本月部門合計實際收費 NT$149,000，為 Q1 單月最高',
        'William & Denny 協作完成華航 Jamf Protect Onboarding，強化航空業服務能量'
      ],
      improvements:[
        'Aaron、Lucas、Jimmy 本月無資料可供比較，Q1 期間統計僅含 William 與 Denny',
        'Denny 案件以彰銀分行低單價 iPad 問題處理為主，建議建立自助 SOP 提升效率',
        '建議推動 William 台設院長期服務合約，避免依賴一次性 MA 維護案件'
      ]
    },
    '2026-02':{
      report:`2026年2月，受農曆春節影響工作天數縮短，Denny 與 William 合計完成 43 件服務案件。Denny 處理 Apple & Jamf 及 Trend Micro 案件 26 件，虛擬費用 NT$17,600；William 處理 Kaspersky、Jamf 等案件 17 件，虛擬費用 NT$33,200。本月無實際收費，但多件 DUNS/ABM 申請協助及 Jamf 憑證更新為後續收費服務奠定基礎。`,
      highlights:[
        'William 完成壽司郎、日立永大、台灣資生堂三家 DUNS & ABM 申請協助',
        'William & Denny 協作完成兆賀、萬海航運 Jamf 憑證更新，維護重要客戶關係',
        'William 完成展碁線上卡巴斯基教育訓練 x2，持續深化培訓服務量能',
        'Denny 維護彰銀多家分行 Jamf iPad 日常服務，維持高客戶黏著度',
        '台灣資生堂 Jamf Pro 導入前置會議完成，為 3 月大案鋪路'
      ],
      improvements:[
        '本月實際收費 NT$0，建議落實已完成服務項目的收費轉換',
        'DUNS/ABM 申請為低虛擬費用輔助性服務，應確認後續採購轉換率',
        '春節假期導致案件量下降，建議預先安排節前服務確認及節後跟進計畫'
      ]
    },
    '2026-03':{
      report:`2026年3月，部門迎來 Q1 最高產出月份。Denny 完成 Apple & Jamf 及 Trend Micro 案件 55 件，虛擬費用 NT$98,000，實際收費 NT$20,000（和雲行動服務 Apex One 建置）；William 完成 Kaspersky、Jamf 相關服務 51 件，虛擬費用 NT$90,500。William & Denny 協作完成台灣資生堂（NT$40,000）、華航 TPEEMO/CKSMX iOS Onboarding（各 NT$20,000）等多件高價值專案。`,
      highlights:[
        'William & Denny 協作完成台灣資生堂 Jamf Pro 全面導入培訓，虛擬估值 NT$40,000',
        'Denny 完成和雲行動服務 Apex One 建置，帶動本月實際收費 NT$20,000',
        'William & Denny 協作完成華航 TPEEMO、CKSMX iOS Onboarding，各估值 NT$20,000',
        'William 完成展碁線上卡巴斯基 x2 教育訓練，持續強化長期客戶服務',
        '凱基人壽、鐵道技術中心 Jamf 憑證更新完成，防範憑證過期風險',
        'William & Denny 參與 Apple WWDC25 教育訓練，持續維持原廠技術能量'
      ],
      improvements:[
        'William 本月 51 件 Kaspersky 案件中含多件零虛擬費用工作，建議評估收費門檻',
        '多件大型 Onboarding 專案完成後應積極推動後續年度維護合約',
        '資生堂、強茂 MDM POC 等新客戶應持續追蹤轉正式合約進度'
      ]
    },
    '2026-04':{
      report:`2026年4月，KS010S部門共處理379件案件（Aaron 96件、Denny 117件、William 43件、Lucas 51件、Adobe工程師72項），部門虛擬費用合計 NT$216,500，實際收費 NT$75,000（來自 William 承接之華航年度 Jamf 專案）。本月部門在端點管理、雲端架構、資安服務及培訓四大面向均有亮眼表現，Denny 主導彰銀全台分行 iPad 大規模更新，William 完成奇美醫院 Jamf iOS Training，Lucas 成功開通 Sentinel POC，Adobe工程師完成雲科大 Firefly AI 講座，整體服務品質維持高水準。`,
      highlights:[
        'Denny 以 117 件居部門最高，完成彰銀全台分行 iPad DFU 大量更新（超過 40 家分行）',
        'William 順利完成奇美醫院 Jamf Pro iOS Training，帶動部門最高虛擬費用單案 NT$20,000',
        'William 華航年度 Jamf 專案貢獻本月唯一實際收費 NT$75,000',
        'Lucas 成功開通中華資安國際 Sentinel 安全監控 POC，拓展資安業務版圖',
        'Aaron 推進多家客戶 Entra ID / Defender 方案，Cloudiway 遷移服務諮詢量增加',
        'Jimmy 完成雲科大 Firefly AI 應用講座及多篇技術專欄，提升部門對外能見度',
        '部門跨成員協作良好，William & Denny 共同完成多件華航高價值案件'
      ],
      improvements:[
        '虛擬費用 NT$216,500 vs 實際收費 NT$75,000，付費轉換率僅約 34.6%，需制定更積極的收費策略',
        'Aaron、Denny、Lucas 本月實際收費均為 $0，建議評估服務合約化與計費制度',
        'Denny 案件中「iPad 問題處理（NT$300）」佔大量比例，為低單價重複性工作，建議建立彰銀自助排除 SOP',
        'William 卡巴斯基案件多為相同問題（WSUS 設定、主控台登入），建議統一建立 KB 知識庫',
        'Jimmy 收費機制未建立，培訓與內容產出的 ROI 無法量化，建議規劃收費或績效指標',
        'Lucas 多件 GPU/VM 配額申請屬行政性工作，建議與 Azure 建立快速通道減少耗時',
        '部門整體對客戶的轉正式合約推進力不足，強茂 MDM POC、多家諮詢案件應追蹤後續轉換'
      ]
    }
  };
  return map[period]||{
    report:`${period} 部門工作報告（資料由各月份匯入資料生成）`,
    highlights:['請依實際情況填寫本月亮點'],
    improvements:['請依實際情況填寫檢討建議']
  };
}

// ─────────────────────────────────────────────────────────────
// State
// ─────────────────────────────────────────────────────────────
let selectedPeriods=['2026-04'];
let currentPeriod='2026-04'; // always = selectedPeriods last element
let filteredCases=[];
let currentPage=1;
const PAGE_SIZE=50;
let sortKey='date';
let sortDir=1;
let charts={};

// ─────────────────────────────────────────────────────────────
// Init
// ─────────────────────────────────────────────────────────────
function init(){
  buildPeriodPills();
  buildFilterMemberSelect();
  buildCompareMemberSelect();
  renderAll();
}

function buildPeriodPills(){
  const data=getAllData();
  const container=document.getElementById('period-pills');
  const hint=document.getElementById('period-pill-hint');
  const periods=Object.keys(data).sort();
  // short label: "1月" "2月" etc.
  const shortLbl=p=>(data[p].label||p).replace('2026年','');
  container.innerHTML=periods.map(p=>{
    const active=selectedPeriods.includes(p);
    return `<button class="period-pill${active?' active':''}" onclick="togglePeriod('${p}')">${shortLbl(p)}</button>`;
  }).join('');
  // hint text: "已選 1、2、3、4 月"
  const selLabels=selectedPeriods.map(p=>shortLbl(p).replace('月',''));
  hint.textContent=selectedPeriods.length>1?`已選 ${selLabels.join('、')} 月（合併顯示）`:'';
  // dynamic title: "KS010S 部門月報系統【範圍：1、2 月】" or just base title
  const titleEl=document.getElementById('site-title');
  if(titleEl){
    if(selectedPeriods.length>1){
      titleEl.textContent=`🏢 KS010S 部門月報系統【範圍：${selLabels.join('、')} 月】`;
    } else {
      titleEl.textContent=`🏢 KS010S 部門月報系統【${shortLbl(selectedPeriods[0])}】`;
    }
  }
}
function buildPeriodSelect(){buildPeriodPills();}

function buildFilterMemberSelect(){
  const sel=document.getElementById('f-member');
  sel.innerHTML='<option value="">全部成員</option>';
  MEMBER_NAMES.forEach(m=>{
    const o=document.createElement('option');
    o.value=m;o.textContent=MEMBER_LABELS[m];
    sel.appendChild(o);
  });
}

function buildCompareMemberSelect(){
  const sel=document.getElementById('compare-member');
  sel.innerHTML='<option value="">全部成員</option>';
  MEMBER_NAMES.forEach(m=>{
    const o=document.createElement('option');
    o.value=m;o.textContent=MEMBER_LABELS[m];
    sel.appendChild(o);
  });
}

function togglePeriod(p){
  if(selectedPeriods.includes(p)){
    if(selectedPeriods.length===1) return;
    selectedPeriods=selectedPeriods.filter(x=>x!==p);
  } else {
    selectedPeriods=[...selectedPeriods,p].sort();
  }
  currentPeriod=selectedPeriods[selectedPeriods.length-1];
  buildPeriodPills();
  renderAll();
}
function changePeriod(p){selectedPeriods=[p];currentPeriod=p;buildPeriodPills();renderAll();}

function getMergedData(periods){
  const data=getAllData();
  if(periods.length===1) return data[periods[0]]||{};
  const base=data[periods[0]]||{};
  const merged={
    period:periods.join(','),
    label:periods.map(p=>(data[p]?.label||p).replace('2026年','')).join('+')+'（合併）',
    department:'KS010S',
    members:{},cases:{}
  };
  MEMBER_NAMES.forEach(m=>{
    const ref=(base.members||{})[m]||{};
    merged.members[m]={
      name:ref.name||m,role:ref.role||'',color:ref.color||MEMBER_COLORS[m],
      summary:{cases:0,virtual:0,actual:0},
      highlights:[],nextMonth:ref.nextMonth||[]
    };
    merged.cases[m]=[];
  });
  periods.forEach(p=>{
    const pd=data[p]; if(!pd) return;
    MEMBER_NAMES.forEach(m=>{
      const s=(pd.members?.[m]?.summary)||{};
      merged.members[m].summary.cases+=(s.cases||0);
      if(s.virtual!=null) merged.members[m].summary.virtual+=(s.virtual||0);
      if(s.actual!=null)  merged.members[m].summary.actual +=(s.actual||0);
      const hl=(pd.members?.[m]?.highlights)||[];
      merged.members[m].highlights.push(...hl.slice(0,2));
      merged.cases[m]=[...merged.cases[m],...(pd.cases?.[m]||[])];
    });
  });
  return merged;
}

function renderAll(){
  const pd=getMergedData(selectedPeriods);
  if(!pd||!pd.members) return;
  buildCategoryFilter(pd);
  renderKPI(pd);
  renderOverviewCharts(pd);
  renderCategoryCharts(pd);
  renderTopClientCharts(pd);
  renderDeptReport(pd);
  renderMemberCards(pd);
  renderCaseTable(pd);
  renderNextMonth(pd);
}

// ─────────────────────────────────────────────────────────────
// KPI
// ─────────────────────────────────────────────────────────────
function renderKPI(pd){
  const members=pd.members||{};
  let totalCases=0,totalVirtual=0,totalActual=0,membersWithRevenue=0;
  MEMBER_NAMES.forEach(m=>{
    if(!members[m]) return;
    const s=members[m].summary||{};
    totalCases+=(s.cases||0);
    if(s.virtual!=null) totalVirtual+=(s.virtual||0);
    if(s.actual!=null&&s.actual>0){totalActual+=(s.actual||0);membersWithRevenue++;}
  });
  const kpiData=[
    {label:'部門總案件數',value:totalCases.toLocaleString()+'件',note:selectedPeriods.length>1?`${selectedPeriods.length}個月合計`:currentPeriod,color:'#3B82F6'},
    {label:'虛擬費用合計',value:'NT$'+totalVirtual.toLocaleString(),note:'未稅',color:'#22C55E'},
    {label:'實際收費合計',value:'NT$'+totalActual.toLocaleString(),note:'未稅',color:'#A855F7'},
    {label:'收費轉換率',value:totalVirtual>0?Math.round(totalActual/totalVirtual*100)+'%':'N/A',note:'實際/虛擬',color:'#F59E0B'},
    {label:'有效收費成員',value:membersWithRevenue+'人',note:'本月',color:'#EF4444'},
  ];
  document.getElementById('kpi-row').innerHTML=kpiData.map(k=>`
    <div class="kpi-card">
      <div class="label">${k.label}</div>
      <div class="value" style="color:${k.color}">${k.value}</div>
      <div class="note">${k.note}</div>
    </div>`).join('');
}

// ─────────────────────────────────────────────────────────────
// Overview Charts
// ─────────────────────────────────────────────────────────────
function destroyChart(id){if(charts[id]){charts[id].destroy();delete charts[id];}}

function renderOverviewCharts(pd){
  const members=pd.members||{};
  const labels=[],cases=[],virtual=[],actual=[],colors=[];
  MEMBER_NAMES.forEach(m=>{
    if(!members[m]) return;
    const s=members[m].summary||{};
    labels.push(MEMBER_LABELS[m]);
    cases.push(s.cases||0);
    virtual.push(s.virtual||0);
    actual.push(s.actual||0);
    colors.push(MEMBER_COLORS[m]);
  });
  const opts=(fmt)=>({responsive:true,layout:{padding:{top:24}},plugins:{legend:{display:false},datalabels:{anchor:'end',align:'end',clip:false,font:{size:11,weight:'bold'},color:'#1E293B',formatter:(v)=>fmt?'NT$'+v.toLocaleString():v.toLocaleString()},tooltip:{callbacks:{label:(c)=>`${c.dataset.label||''}: ${c.parsed.y!=null?c.parsed.y.toLocaleString():''}`}}},scales:{y:{beginAtZero:true,ticks:{font:{size:11}}},x:{ticks:{font:{size:11}}}}});
  destroyChart('cases');destroyChart('virtual');destroyChart('actual');
  charts.cases=new Chart(document.getElementById('chart-cases'),{type:'bar',data:{labels,datasets:[{label:'案件數',data:cases,backgroundColor:colors,borderRadius:6}]},options:opts(false),plugins:[ChartDataLabels]});
  charts.virtual=new Chart(document.getElementById('chart-virtual'),{type:'bar',data:{labels,datasets:[{label:'虛擬費用',data:virtual,backgroundColor:colors,borderRadius:6}]},options:opts(true),plugins:[ChartDataLabels]});
  charts.actual=new Chart(document.getElementById('chart-actual'),{type:'bar',data:{labels,datasets:[{label:'實際收費',data:actual,backgroundColor:colors,borderRadius:6}]},options:opts(true),plugins:[ChartDataLabels]});
}

// ─────────────────────────────────────────────────────────────
// Category charts (cases + virtual fee)
// ─────────────────────────────────────────────────────────────
function renderCategoryCharts(pd){
  const catCases={}, catVirtual={};
  MEMBER_NAMES.forEach(m=>{
    (pd.cases&&pd.cases[m]||[]).forEach(c=>{
      const cat=c.category||'其他';
      catCases[cat]=(catCases[cat]||0)+1;
      catVirtual[cat]=(catVirtual[cat]||0)+(c.virtual||0);
    });
  });
  const cats=Object.keys(catCases).sort((a,b)=>catCases[b]-catCases[a]);
  const palette=['#3B82F6','#22C55E','#A855F7','#F59E0B','#EF4444','#06B6D4','#F97316','#84CC16','#EC4899','#6366F1','#14B8A6','#FB923C'];
  const colors=cats.map((_,i)=>palette[i%palette.length]);
  const baseOpts=(fmt)=>({
    responsive:true,
    layout:{padding:{top:24}},
    plugins:{
      legend:{display:false},
      datalabels:{anchor:'end',align:'end',clip:false,font:{size:11,weight:'bold'},color:'#1E293B',formatter:(v)=>fmt?'NT$'+v.toLocaleString():v.toLocaleString()}
    },
    scales:{y:{beginAtZero:true,ticks:{font:{size:11}}},x:{ticks:{font:{size:11}}}}
  });
  destroyChart('cat-cases');destroyChart('cat-virtual');
  charts['cat-cases']=new Chart(document.getElementById('chart-cat-cases'),{type:'bar',data:{labels:cats,datasets:[{label:'案件數',data:cats.map(c=>catCases[c]),backgroundColor:colors,borderRadius:6}]},options:baseOpts(false),plugins:[ChartDataLabels]});
  charts['cat-virtual']=new Chart(document.getElementById('chart-cat-virtual'),{type:'bar',data:{labels:cats,datasets:[{label:'虛擬費用',data:cats.map(c=>catVirtual[c]),backgroundColor:colors,borderRadius:6}]},options:baseOpts(true),plugins:[ChartDataLabels]});
}

// ─────────────────────────────────────────────────────────────
// Top 20 client charts (horizontal bar)
// ─────────────────────────────────────────────────────────────
function renderTopClientCharts(pd){
  const cliCases={}, cliVirtual={};
  MEMBER_NAMES.forEach(m=>{
    (pd.cases&&pd.cases[m]||[]).forEach(c=>{
      const cli=c.client||'未知';
      cliCases[cli]=(cliCases[cli]||0)+1;
      cliVirtual[cli]=(cliVirtual[cli]||0)+(c.virtual||0);
    });
  });
  const top20Cases=Object.entries(cliCases).sort((a,b)=>b[1]-a[1]).slice(0,20);
  const top20Virtual=Object.entries(cliVirtual).sort((a,b)=>b[1]-a[1]).slice(0,20);
  const hOpts=(fmt)=>({
    indexAxis:'y',
    responsive:true,
    layout:{padding:{right:80}},
    plugins:{
      legend:{display:false},
      datalabels:{anchor:'end',align:'end',clip:false,font:{size:10,weight:'bold'},color:'#1E293B',formatter:(v)=>fmt?'NT$'+v.toLocaleString():v.toLocaleString()}
    },
    scales:{
      x:{beginAtZero:true,ticks:{font:{size:10}}},
      y:{ticks:{font:{size:11}}}
    }
  });
  destroyChart('top-cases');destroyChart('top-virtual');
  charts['top-cases']=new Chart(document.getElementById('chart-top-cases'),{type:'bar',data:{labels:top20Cases.map(e=>e[0]),datasets:[{label:'案件數',data:top20Cases.map(e=>e[1]),backgroundColor:'#3B82F6',borderRadius:4}]},options:hOpts(false),plugins:[ChartDataLabels]});
  charts['top-virtual']=new Chart(document.getElementById('chart-top-virtual'),{type:'bar',data:{labels:top20Virtual.map(e=>e[0]),datasets:[{label:'虛擬費用',data:top20Virtual.map(e=>e[1]),backgroundColor:'#22C55E',borderRadius:4}]},options:hOpts(true),plugins:[ChartDataLabels]});
}

// ─────────────────────────────────────────────────────────────
// Dept report & highlights
// ─────────────────────────────────────────────────────────────
function renderDeptReport(pd){
  if(selectedPeriods.length>1){
    const label=selectedPeriods.map(p=>getAllData()[p]?.label||p).join('、');
    let totalCases=0,totalVirtual=0,totalActual=0;
    MEMBER_NAMES.forEach(m=>{const s=pd.members?.[m]?.summary||{};totalCases+=(s.cases||0);totalVirtual+=(s.virtual||0);totalActual+=(s.actual||0);});
    document.getElementById('dept-report').innerHTML=`<ul class="bullet"><li>合併檢視期間：${label}</li><li>合計處理案件 ${totalCases} 件，虛擬費用 NT$${totalVirtual.toLocaleString()}，實際收費 NT$${totalActual.toLocaleString()}</li></ul>`;
    const allHL=[];const allIMP=[];
    selectedPeriods.forEach(p=>{const info=getHighlightsAndImprovements(p);allHL.push(...(info.highlights||[]).slice(0,3));allIMP.push(...(info.improvements||[]).slice(0,2));});
    document.getElementById('highlights-list').innerHTML=allHL.map(h=>`<li>${h}</li>`).join('');
    document.getElementById('improvements-list').innerHTML=allIMP.map(h=>`<li>${h}</li>`).join('');
  } else {
    const info=getHighlightsAndImprovements(currentPeriod);
    const reportLines=info.report.split(/[。；]/g).map(s=>s.trim()).filter(Boolean);
    document.getElementById('dept-report').innerHTML=`<ul class="bullet">${reportLines.map(l=>`<li>${l}</li>`).join('')}</ul>`;
    document.getElementById('highlights-list').innerHTML=info.highlights.map(h=>`<li>${h}</li>`).join('');
    document.getElementById('improvements-list').innerHTML=info.improvements.map(h=>`<li>${h}</li>`).join('');
  }
}

// ─────────────────────────────────────────────────────────────
// Member cards
// ─────────────────────────────────────────────────────────────
function renderMemberCards(pd){
  const members=pd.members||{};
  document.getElementById('member-grid').innerHTML=MEMBER_NAMES.filter(m=>members[m]).map(m=>{
    const mem=members[m];const s=mem.summary||{};const c=MEMBER_COLORS[m];
    const virtualStr=s.virtual!=null?'NT$'+s.virtual.toLocaleString():'N/A';
    const actualStr=s.actual!=null?'NT$'+s.actual.toLocaleString():'N/A';
    return`<div class="member-card">
      <div class="member-card-header" style="background:${c}">
        <div><div class="name">${mem.name}</div><div class="role">${mem.role}</div></div>
        <div class="badge">${s.cases||0} 件</div>
      </div>
      <div class="member-card-body">
        <div class="member-stat-row">
          <div class="member-stat"><div class="s-val" style="color:${c}">${virtualStr}</div><div class="s-lbl">虛擬費用</div></div>
          <div class="member-stat"><div class="s-val" style="color:${s.actual>0?'#16A34A':c}">${actualStr}</div><div class="s-lbl">實際收費</div></div>
        </div>
        <ul class="member-highlights">${(mem.highlights||[]).map(h=>`<li>${h}</li>`).join('')}</ul>
      </div>
    </div>`;
  }).join('');
}

// ─────────────────────────────────────────────────────────────
// Case table
// ─────────────────────────────────────────────────────────────
function buildCategoryFilter(pd){
  const cats=new Set();
  MEMBER_NAMES.forEach(m=>{(pd.cases&&pd.cases[m]||[]).forEach(c=>cats.add(c.category||''));});
  const sel=document.getElementById('f-category');
  const cur=sel.value;
  sel.innerHTML='<option value="">全部類別</option>';
  [...cats].filter(Boolean).sort().forEach(c=>{
    const o=document.createElement('option');o.value=c;o.textContent=c;
    if(c===cur) o.selected=true;
    sel.appendChild(o);
  });
}

function getAllCases(pd){
  const all=[];
  MEMBER_NAMES.forEach(m=>{
    (pd.cases&&pd.cases[m]||[]).forEach(c=>all.push({...c,member:m}));
  });
  return all.sort((a,b)=>a.date.localeCompare(b.date));
}

function applySortToCases(cases){
  return cases.sort((a,b)=>{
    let va=a[sortKey],vb=b[sortKey];
    if(typeof va==='number'||typeof vb==='number'){va=va||0;vb=vb||0;}
    else{va=(va||'').toString();vb=(vb||'').toString();}
    if(va<vb) return -sortDir;
    if(va>vb) return sortDir;
    return 0;
  });
}

function updateSortHeaders(){
  ['id','date','member','client','category','virtual','actual'].forEach(k=>{
    const el=document.getElementById('sh-'+k);
    if(!el) return;
    el.classList.remove('asc','desc');
    if(k===sortKey) el.classList.add(sortDir===1?'asc':'desc');
  });
}

function sortBy(key){
  if(sortKey===key) sortDir=-sortDir;
  else{sortKey=key;sortDir=1;}
  applySortToCases(filteredCases);
  updateSortHeaders();
  currentPage=1;
  renderCaseTablePage();
}

function applyFilters(){
  const pd=getMergedData(selectedPeriods);
  const member=document.getElementById('f-member').value;
  const category=document.getElementById('f-category').value;
  const search=document.getElementById('f-search').value.toLowerCase();
  let cases=getAllCases(pd);
  if(member) cases=cases.filter(c=>c.member===member);
  if(category) cases=cases.filter(c=>c.category===category);
  if(search) cases=cases.filter(c=>(c.client||'').toLowerCase().includes(search)||(c.service||'').toLowerCase().includes(search));
  filteredCases=applySortToCases(cases);
  currentPage=1;
  updateSortHeaders();
  renderCaseTablePage();
}

function renderCaseTable(pd){
  filteredCases=applySortToCases(getAllCases(pd));
  currentPage=1;
  updateSortHeaders();
  renderCaseTablePage();
}

function chipClass(cat){
  if(!cat) return '';
  if(cat.startsWith('Apple')||cat.startsWith('Jamf')) return 'chip-Apple';
  if(cat.startsWith('Trend')) return 'chip-Trend';
  if(cat.startsWith('Kaspersky')) return 'chip-Kaspersky';
  if(cat==='TeamViewer') return 'chip-TeamViewer';
  return 'chip-'+cat.split(' ')[0];
}

function renderCaseTablePage(){
  const start=(currentPage-1)*PAGE_SIZE;
  const page=filteredCases.slice(start,start+PAGE_SIZE);
  document.getElementById('case-count').textContent=`共 ${filteredCases.length} 筆案件（第 ${start+1}–${Math.min(start+PAGE_SIZE,filteredCases.length)} 筆）`;
  document.getElementById('case-tbody').innerHTML=page.map(c=>{
    const col=MEMBER_COLORS[c.member]||'#94A3B8';
    const vStr=c.virtual!=null?'NT$'+c.virtual.toLocaleString():'-';
    const aStr=c.actual!=null&&c.actual>0?`<strong style="color:#16A34A">NT$${c.actual.toLocaleString()}</strong>`:c.actual===0?'-':'-';
    return`<tr>
      <td style="color:var(--subtle);font-size:.75rem">${c.id}</td>
      <td style="white-space:nowrap">${c.date}</td>
      <td><span class="member-dot" style="background:${col}"></span>${MEMBER_LABELS[c.member]}</td>
      <td>${c.client||''}</td>
      <td>${c.service||''}</td>
      <td><span class="category-chip ${chipClass(c.category)}">${c.category||''}</span></td>
      <td class="num">${vStr}</td>
      <td class="num">${aStr}</td>
      <td>${c.collab?`<span class="collab-badge">協作</span>`:''}${c.note?`<span style="font-size:.75rem;color:var(--subtle)">${c.note}</span>`:''}</td>
    </tr>`;
  }).join('');
  renderPagination();
}

function renderPagination(){
  const total=Math.ceil(filteredCases.length/PAGE_SIZE);
  const pg=document.getElementById('pagination');
  if(total<=1){pg.innerHTML='';return;}
  let html=`<span class="page-info">第 ${currentPage}/${total} 頁</span>`;
  if(currentPage>1) html+=`<button onclick="goPage(${currentPage-1})">‹</button>`;
  const start=Math.max(1,currentPage-2),end=Math.min(total,currentPage+2);
  for(let i=start;i<=end;i++) html+=`<button class="${i===currentPage?'active':''}" onclick="goPage(${i})">${i}</button>`;
  if(currentPage<total) html+=`<button onclick="goPage(${currentPage+1})">›</button>`;
  pg.innerHTML=html;
}
function goPage(n){currentPage=n;renderCaseTablePage();}

// ─────────────────────────────────────────────────────────────
// Export CSV
// ─────────────────────────────────────────────────────────────
function exportCSV(){
  const header=['編號','日期','成員','客戶','服務項目','類別','虛擬費用(NT$)','實際收費(NT$)','備註'];
  const rows=filteredCases.map(c=>[
    c.id,c.date,MEMBER_LABELS[c.member],
    `"${(c.client||'').replace(/"/g,'""')}"`,
    `"${(c.service||'').replace(/"/g,'""')}"`,
    c.category||'',
    c.virtual!=null?c.virtual:'',
    c.actual!=null?c.actual:'',
    `"${(c.note||'')+(c.collab?'協作:'+c.collab:'')}"`
  ]);
  const csv='﻿'+[header,...rows].map(r=>r.join(',')).join('\n');
  const blob=new Blob([csv],{type:'text/csv;charset=utf-8'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;
  a.download=`KS010S_${selectedPeriods.join('_')}_案件明細.csv`;a.click();
  URL.revokeObjectURL(url);
}

// ─────────────────────────────────────────────────────────────
// Next month
// ─────────────────────────────────────────────────────────────
const NEXT_STRATEGY = {
  '2026-01': {
    title: '2026年Q1起點：奠基與突破',
    subtitle: '1月回顧 → 2月展望',
    overview: '1月部門以 Denny 的 Apple/Jamf 裝置管理（46件）與 William 的高價值企業合約（NT$102,650 虛擬費用）為主力，成功建立 Q1 服務基礎。Jimmy 首件 Adobe Admin Console 企業顧問案（義聯集團）亦完成破冰。',
    highlights: [
      '🏆 William 台設院 MA 技術維護收費達 NT$60,000，展現顧問型服務高單價潛力',
      '🚀 Jimmy Adobe 企業顧問服務首案完成，Q1 Adobe 收費目標正式啟動',
      '📊 Denny 單月 46 件案件奠定 Apple/Jamf 市場領先地位',
    ],
    strategy: [
      '【收費轉換衝刺】William 主導 Kaspersky EDR 升版推廣，Denny 強化 Jamf 顧問收費服務，Q1 合計目標各≥3件新收費成約',
      '【技術深化】Aaron 啟動 Cloudiway M365 跨租戶遷移與 Entra ID 身份治理評估，建立微軟產品線高價值服務能力',
      '【市場擴展】Jimmy 以福斯汽車 Acrobat Sign 與新竹市教育局 Firefly AI 為重點，搶攻企業簽署流程與教育 AI 雙市場',
      '【基礎建設】Lucas 啟動 Azure 備份標準化 SOP 與 Sentinel POC，為 Q2 雲端收費服務鋪路',
    ],
    outlook: 'Q1 全隊聚焦：將技術支援轉化為收費服務，每位成員均設立明確季度成交目標，以量換質、以案件深度帶動部門整體 ROI 提升。'
  },
  '2026-02': {
    title: '2026年Q1加速：深耕與擴張',
    subtitle: '2月回顧 → 3月展望',
    overview: '2月進入 Q1 攻堅期，Denny 持續推進多家企業 Jamf 服務、William 完成三場 Kaspersky 教育訓練，Jimmy 完成福斯汽車 Acrobat Sign 轉授權與新竹市教育局 Firefly AI 導入，合計 Adobe Q1 虛擬費用達 NT$45,000。',
    highlights: [
      '🎯 Jimmy 單月 2 件高價值 Adobe 案件（NT$45,000），Q1 最強單月貢獻',
      '📚 William 三場 Kaspersky 教育訓練完成，強化市場技術形象與客戶黏著度',
      '🔄 Denny 持續服務 5 大企業客戶（萬海、華航系列），Jamf 多案件並行處理能力卓越',
    ],
    strategy: [
      '【Q1收尾衝刺】3月為Q1最後一個月，全員聚焦既有機會單轉成交：強茂 Jamf POC 轉約、和雲 Apex 建置驗收、Honda Acrobat Sign 深化',
      '【AI整合推進】Jimmy 以飛資得集團智慧工作流程為旗艦案例，建立 Adobe AI + Document Cloud 整合解決方案範本',
      '【企業大客戶攻略】William 聯手 Denny 推進台灣資生堂 Jamf 完整服務，展現跨產品協作能力',
      '【雲端服務建立】Lucas 正式啟動 Azure 收費顧問服務提案，目標 Q2 前完成首件成交',
    ],
    outlook: '3月策略重心：完成 Q1 承諾、收割前兩月播種的商機，同時為 Q2 管線預先佈局，確保部門虛擬費用累計超越 NT$300,000 的季度里程碑。'
  },
  '2026-04': {
    title: '2026年Q2啟動：轉型與突破',
    subtitle: '4月回顧 → 5月展望',
    overview: '4月部門以 379 件案件創下單月新高，Aaron 96 件微軟雲端支援、Denny 117 件 Apple/Jamf 端點管理，William 以 NT$75,000 實際收費獨挑大樑。Jimmy 完成 Adobe CC 部署、雲科大 Firefly AI 講座等 72 件多元服務，Lucas 啟動 Azure Sentinel POC，部門全面進入 Q2 衝刺模式。',
    highlights: [
      '🏆 William NT$75,000 實際收費，創部門單月個人收費紀錄，顧問轉型路線驗證成功',
      '🚀 Denny 117 件 Apple/Jamf 案件，月均達成 KPI 目標，端點管理市場固守穩健',
      '🤖 Jimmy 雲科大 Firefly AI 講座＋技術專欄著作，Adobe AI 教育品牌正式建立',
      '☁️ Lucas Azure Sentinel POC 開通，雲端資安收費服務進入實質驗證階段',
      '📊 Aaron Cloudiway 郵件遷移諮詢，微軟高價值遷移案管線持續累積',
    ],
    strategy: [
      '【收費主軸深化】William 主攻華航 Jamf 年度續約（NT$75,000+）與奇美醫院進階培訓，目標 5 月實際收費維持並超越 4 月水準',
      '【端點管理升級】Denny 推進強茂 Jamf for Mobile POC 轉約、凱基人壽 macOS MDM 擴展，從量的積累轉向高單價合約突破',
      '【雲端收費元年】Lucas Sentinel POC 驗收＋坤侑科技 AWS→Azure 遷移提案，Q2 首件雲端收費專案成交目標明確',
      '【AI 品牌規模化】Jimmy Firefly AI 進階課程規劃＋Acrobat Sign 企業版推廣，建立可複製的 AI 導入服務範本',
      '【微軟大案卡位】Aaron Cloudiway Tenant-to-Tenant 遷移實作＋Defender for Business 部署，Q2 衝刺微軟高價值服務首件成交',
    ],
    outlook: 'Q2 宣言：4月已驗證「顧問收費服務」可行性（William NT$75,000），5月起全員複製此模式——Denny 攻 Jamf 大合約、Lucas 攻雲端收費、Jimmy 攻 Adobe AI 企業導入、Aaron 攻微軟遷移案。部門目標：5月實際收費突破 NT$150,000，虛擬費用維持 NT$200,000+ 水準。'
  },
  '2026-03': {
    title: '2026年Q1收尾：驗收與布局Q2',
    subtitle: '3月回顧 → 4月展望',
    overview: '3月為 Q1 最強月，Denny 55件（含 NT$20,000 實收）、William 51件，Jimmy 完成 4 件 Adobe 大客戶案（飛資得、Honda、理工科技、九易宇軒），Q1 整季 Adobe 虛擬費用達 NT$139,000。部門 Q1 總計 217 件案件，奠定全年基礎。',
    highlights: [
      '🏆 Q1 全季 217 件，部門服務能量持續提升，為 Q2 規模擴張建立信心',
      '💰 Denny Q1 NT$101,000 實際收費，William NT$143,000，雙主力合計超越季度目標',
      '🚀 Jimmy Q1 完成 7 件 Adobe 戰略性案件，Firefly AI + Acrobat Sign 雙線並進初見成效',
    ],
    strategy: [
      '【Q2主軸：規模化收費服務】Aaron 推進 Cloudiway 遷移大案驗收、William 攻下華航年度續約，Q2 目標部門實際收費突破 NT$100,000 單月',
      '【AI產品線全面落地】Jimmy 主導飛資得智慧工作流程落地與義聯集團年度顧問續約，打造 Adobe AI 企業服務標準化流程',
      '【雲端戰略深化】Lucas 多案並行（Sentinel、嘉龍、坤侑 Azure 遷移），Q2 正式進入雲端收費服務成長期',
      '【技術品牌建立】Aaron + Jimmy 各自主導 Microsoft / Adobe 技術知識庫擴建，強化公司在企業 IT 與創意工具市場的技術話語權',
    ],
    outlook: 'Q2 策略宣言：從「技術支援型部門」正式轉型為「顧問收費型部門」。以Q1的服務深度為基礎，Q2 每位成員均設定明確收費目標，部門整體虛擬費用目標突破 NT$800,000、實際收費突破 NT$300,000。'
  }
};

function renderNextMonth(pd){
  const members=pd.members||{};
  // Strategy section
  const stratEl=document.getElementById('next-strategy');
  if(selectedPeriods.length===1){
    const s=NEXT_STRATEGY[selectedPeriods[0]];
    if(s){
      stratEl.innerHTML=`
      <div style="background:linear-gradient(135deg,#1E3A5F 0%,#2563EB 100%);border-radius:14px;padding:28px 32px;margin-bottom:24px;color:#fff">
        <div style="font-size:.78rem;font-weight:600;letter-spacing:2px;opacity:.7;margin-bottom:6px">📋 部門策略彙整</div>
        <h2 style="font-size:1.35rem;font-weight:800;margin-bottom:4px">${s.title}</h2>
        <div style="font-size:.85rem;opacity:.75;margin-bottom:18px">${s.subtitle}</div>
        <p style="font-size:.95rem;line-height:1.8;opacity:.92;margin-bottom:20px">${s.overview}</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px">
          <div style="background:rgba(255,255,255,.1);border-radius:10px;padding:18px">
            <div style="font-size:.8rem;font-weight:700;letter-spacing:1px;opacity:.7;margin-bottom:12px">✨ 本月亮點</div>
            ${s.highlights.map(h=>`<div style="font-size:.88rem;line-height:1.7;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.1)">${h}</div>`).join('')}
          </div>
          <div style="background:rgba(255,255,255,.1);border-radius:10px;padding:18px">
            <div style="font-size:.8rem;font-weight:700;letter-spacing:1px;opacity:.7;margin-bottom:12px">🎯 策略方向</div>
            ${s.strategy.map(t=>`<div style="font-size:.85rem;line-height:1.7;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.1)">${t}</div>`).join('')}
          </div>
        </div>
        <div style="margin-top:18px;padding:14px 18px;background:rgba(255,255,255,.12);border-radius:8px;border-left:4px solid #F59E0B;font-size:.88rem;line-height:1.7">
          <strong style="color:#FCD34D">📌 前瞻展望</strong>　${s.outlook}
        </div>
      </div>`;
    } else { stratEl.innerHTML=''; }
  } else {
    // Multi-month: synthesized Q overview
    const periods=selectedPeriods;
    const labels=periods.map(p=>{const d=getAllData();return(d[p]?.label||p).replace('2026年','');});
    const allItems=[];
    periods.forEach(p=>{ const s=NEXT_STRATEGY[p]; if(s){ allItems.push(...s.strategy); }});
    const qLabel=labels.join('、')+'月';
    stratEl.innerHTML=`
    <div style="background:linear-gradient(135deg,#1E3A5F 0%,#2563EB 100%);border-radius:14px;padding:28px 32px;margin-bottom:24px;color:#fff">
      <div style="font-size:.78rem;font-weight:600;letter-spacing:2px;opacity:.7;margin-bottom:6px">📋 部門策略彙整（合併檢視：${qLabel}）</div>
      <h2 style="font-size:1.3rem;font-weight:800;margin-bottom:16px">🏢 KS010S 部門 2026年 ${qLabel} 策略全景</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:14px;margin-bottom:20px">
        <div style="background:rgba(255,255,255,.1);border-radius:10px;padding:16px">
          <div style="font-size:.8rem;font-weight:700;opacity:.7;margin-bottom:10px">🎯 核心戰略主軸</div>
          <div style="font-size:.88rem;line-height:1.8">技術支援 → 顧問收費服務轉型，以 Q1 深厚服務基礎為槓桿，Q2 全面進入收費成長期</div>
        </div>
        <div style="background:rgba(255,255,255,.1);border-radius:10px;padding:16px">
          <div style="font-size:.8rem;font-weight:700;opacity:.7;margin-bottom:10px">💡 產品線布局</div>
          <div style="font-size:.88rem;line-height:1.8">Apple/Jamf 端點管理（Denny）× 資安平台（William）× 微軟雲端（Aaron）× Azure 架構（Lucas）× Adobe AI（Jimmy）五線並進</div>
        </div>
        <div style="background:rgba(255,255,255,.1);border-radius:10px;padding:16px">
          <div style="font-size:.8rem;font-weight:700;opacity:.7;margin-bottom:10px">🤖 AI 自動化推進</div>
          <div style="font-size:.88rem;line-height:1.8">全員導入 AI 工具提升效率：Jimmy 主導 Firefly/Acrobat AI 客戶導入、Denny/William 以 AI 輔助 SOP 生成、Lucas 以 Copilot 縮短回應時間</div>
        </div>
      </div>
      <div style="background:rgba(255,255,255,.08);border-radius:10px;padding:18px;margin-bottom:16px">
        <div style="font-size:.8rem;font-weight:700;opacity:.7;margin-bottom:12px">📋 各期重點策略彙整</div>
        ${allItems.map(i=>`<div style="font-size:.85rem;line-height:1.7;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.08)">${i}</div>`).join('')}
      </div>
      <div style="padding:14px 18px;background:rgba(255,255,255,.12);border-radius:8px;border-left:4px solid #F59E0B;font-size:.88rem;line-height:1.8">
        <strong style="color:#FCD34D">📌 部門宣言</strong>　KS010S 以 2026 年為技術服務轉型元年：每位成員從「問題解決者」進化為「策略顧問」，以深度技術能力搭配 AI 工具效率，打造高毛利顧問型服務組合，目標全年虛擬費用超越 NT$3,000,000、實際收費突破 NT$1,200,000。
      </div>
    </div>`;
  }
  // Member cards
  const allNext=MEMBER_NAMES.filter(m=>members[m]).map(m=>{
    const mem=members[m];const c=MEMBER_COLORS[m];
    const items=mem.nextMonth||[];
    if(!items.length) return'';
    const label=selectedPeriods.length>1?'累積工作重點（各月彙整）':'下月工作重點';
    return`<div class="next-card">
      <div class="next-card-header" style="background:${c}">${mem.name}｜${mem.role}｜${label}</div>
      <div class="next-card-body"><ul style="list-style:none">${items.map(i=>`<li>${i}</li>`).join('')}</ul></div>
    </div>`;
  }).join('');
  document.getElementById('next-grid').innerHTML=allNext;
}

// ─────────────────────────────────────────────────────────────
// History
// ─────────────────────────────────────────────────────────────
function renderHistory(){
  const mode=document.getElementById('compare-mode').value;
  const memberSel=document.getElementById('compare-member');
  memberSel.style.display='none';
  const data=getAllData();
  const periods=Object.keys(data).sort();
  if(periods.length<1){
    document.getElementById('chart-hist-cases').parentElement.innerHTML='<div class="empty-msg"><div class="emoji">📭</div>目前只有一個月份資料，新增更多月份後即可比較</div>';
    return;
  }

  if(mode==='monthly'){
    document.getElementById('hist-chart1-title').textContent='案件數趨勢';
    document.getElementById('hist-chart2-title').textContent='虛擬費用趨勢 (NT$)';
    document.getElementById('hist-chart3-title').textContent='實際收費趨勢 (NT$)';
    const labels=periods.map(p=>data[p].label||p);
    const casesDS=MEMBER_NAMES.map(m=>({
      label:MEMBER_LABELS[m],
      data:periods.map(p=>(data[p].members&&data[p].members[m]?.summary?.cases)||0),
      borderColor:MEMBER_COLORS[m],backgroundColor:MEMBER_COLORS[m]+'DD',borderWidth:1
    }));
    const virtualDS=MEMBER_NAMES.map(m=>({
      label:MEMBER_LABELS[m],
      data:periods.map(p=>(data[p].members&&data[p].members[m]?.summary?.virtual)||0),
      borderColor:MEMBER_COLORS[m],backgroundColor:MEMBER_COLORS[m]+'DD',borderWidth:1
    }));
    const actualDS=MEMBER_NAMES.map(m=>({
      label:MEMBER_LABELS[m],
      data:periods.map(p=>(data[p].members&&data[p].members[m]?.summary?.actual)||0),
      borderColor:MEMBER_COLORS[m],backgroundColor:MEMBER_COLORS[m]+'DD',borderWidth:1
    }));
    const mOpts={responsive:true,plugins:{legend:{position:'bottom',labels:{font:{size:11}}}},scales:{y:{beginAtZero:true},x:{ticks:{font:{size:11}}}}};
    destroyChart('hc');destroyChart('hv');destroyChart('ha');
    charts.hc=new Chart(document.getElementById('chart-hist-cases'),{type:'bar',data:{labels,datasets:casesDS},options:mOpts});
    charts.hv=new Chart(document.getElementById('chart-hist-virtual'),{type:'bar',data:{labels,datasets:virtualDS},options:mOpts});
    charts.ha=new Chart(document.getElementById('chart-hist-actual'),{type:'bar',data:{labels,datasets:actualDS},options:mOpts});

  } else if(mode==='member'){
    // x-axis = members, each dataset = one month
    document.getElementById('hist-chart1-title').textContent='各成員案件數比較';
    document.getElementById('hist-chart2-title').textContent='各成員虛擬費用比較 (NT$)';
    document.getElementById('hist-chart3-title').textContent='各成員實際收費比較 (NT$)';
    const mLabels=MEMBER_NAMES.map(m=>MEMBER_LABELS[m]);
    const pColors=['#6366F1','#06B6D4','#10B981','#F59E0B','#EC4899','#8B5CF6'];
    const mkDS=(field)=>periods.map((p,i)=>({
      label:(data[p]?.label||p).replace('2026年',''),
      data:MEMBER_NAMES.map(m=>(data[p]?.members?.[m]?.summary?.[field])||0),
      backgroundColor:pColors[i%pColors.length]+'DD',
      borderColor:pColors[i%pColors.length],borderWidth:1
    }));
    const pOpts={responsive:true,plugins:{legend:{position:'bottom',labels:{font:{size:11}}}},scales:{y:{beginAtZero:true},x:{ticks:{font:{size:12,weight:'600'}}}}};
    destroyChart('hc');destroyChart('hv');destroyChart('ha');
    charts.hc=new Chart(document.getElementById('chart-hist-cases'),{type:'bar',data:{labels:mLabels,datasets:mkDS('cases')},options:pOpts});
    charts.hv=new Chart(document.getElementById('chart-hist-virtual'),{type:'bar',data:{labels:mLabels,datasets:mkDS('virtual')},options:pOpts});
    charts.ha=new Chart(document.getElementById('chart-hist-actual'),{type:'bar',data:{labels:mLabels,datasets:mkDS('actual')},options:pOpts});

  } else if(mode==='annual'){
    // YTD cumulative per member across all months
    const ytd={};
    MEMBER_NAMES.forEach(m=>{ytd[m]={cases:0,virtual:0,actual:0};});
    const ytdLabels=[];
    const ytdCases=MEMBER_NAMES.map(()=>[]);
    const ytdVirtual=MEMBER_NAMES.map(()=>[]);
    const ytdActual=MEMBER_NAMES.map(()=>[]);
    periods.forEach(p=>{
      ytdLabels.push(data[p].label||p);
      MEMBER_NAMES.forEach((m,mi)=>{
        const s=(data[p].members&&data[p].members[m]?.summary)||{};
        ytd[m].cases+=(s.cases||0);
        ytd[m].virtual+=(s.virtual||0);
        ytd[m].actual+=(s.actual||0);
        ytdCases[mi].push(ytd[m].cases);
        ytdVirtual[mi].push(ytd[m].virtual);
        ytdActual[mi].push(ytd[m].actual);
      });
    });
    const aOpts=(title)=>({responsive:true,plugins:{legend:{position:'bottom',labels:{font:{size:11}}},title:{display:true,text:title,font:{size:12}}},scales:{y:{beginAtZero:true},x:{ticks:{font:{size:11}}}}});
    document.getElementById('hist-chart1-title').textContent='案件數累計 (YTD)';
    document.getElementById('hist-chart2-title').textContent='虛擬費用累計 (YTD, NT$)';
    document.getElementById('hist-chart3-title').textContent='實際收費累計 (YTD, NT$)';
    destroyChart('hc');destroyChart('hv');destroyChart('ha');
    charts.hc=new Chart(document.getElementById('chart-hist-cases'),{type:'bar',data:{labels:ytdLabels,datasets:MEMBER_NAMES.map((m,mi)=>({label:MEMBER_LABELS[m],data:ytdCases[mi],backgroundColor:MEMBER_COLORS[m]+'CC',borderColor:MEMBER_COLORS[m],borderWidth:1}))},options:{...aOpts('年度累計案件數'),scales:{y:{beginAtZero:true,stacked:false},x:{stacked:false}}}});
    charts.hv=new Chart(document.getElementById('chart-hist-virtual'),{type:'bar',data:{labels:ytdLabels,datasets:MEMBER_NAMES.map((m,mi)=>({label:MEMBER_LABELS[m],data:ytdVirtual[mi],borderColor:MEMBER_COLORS[m],backgroundColor:MEMBER_COLORS[m]+'DD',fill:true,tension:.4}))},options:aOpts('年度累計虛擬費用')});
    charts.ha=new Chart(document.getElementById('chart-hist-actual'),{type:'bar',data:{labels:ytdLabels,datasets:MEMBER_NAMES.map((m,mi)=>({label:MEMBER_LABELS[m],data:ytdActual[mi],backgroundColor:MEMBER_COLORS[m]+'CC',borderColor:MEMBER_COLORS[m],borderWidth:1}))},options:{...aOpts('年度累計實際收費'),scales:{y:{beginAtZero:true,stacked:false},x:{stacked:false}}}});

  } else if(mode==='quarterly'){
    const quarters={};
    periods.forEach(p=>{
      const [y,mo]=p.split('-');const q=`${y} Q${Math.ceil(parseInt(mo)/3)}`;
      if(!quarters[q]) quarters[q]={label:q,cases:{},virtual:{},actual:{}};
      MEMBER_NAMES.forEach(m=>{
        const s=(data[p].members&&data[p].members[m]?.summary)||{};
        quarters[q].cases[m]=(quarters[q].cases[m]||0)+(s.cases||0);
        quarters[q].virtual[m]=(quarters[q].virtual[m]||0)+(s.virtual||0);
        quarters[q].actual[m]=(quarters[q].actual[m]||0)+(s.actual||0);
      });
    });
    const qlabels=Object.keys(quarters);
    const barOpts={responsive:true,plugins:{legend:{position:'bottom',labels:{font:{size:11}}}},scales:{y:{beginAtZero:true,stacked:true},x:{stacked:true,ticks:{font:{size:11}}}}};
    const casesDS=MEMBER_NAMES.map(m=>({label:MEMBER_LABELS[m],data:qlabels.map(q=>quarters[q].cases[m]||0),backgroundColor:MEMBER_COLORS[m]}));
    const virtualDS=MEMBER_NAMES.map(m=>({label:MEMBER_LABELS[m],data:qlabels.map(q=>quarters[q].virtual[m]||0),backgroundColor:MEMBER_COLORS[m]}));
    const actualDS=MEMBER_NAMES.map(m=>({label:MEMBER_LABELS[m],data:qlabels.map(q=>quarters[q].actual[m]||0),backgroundColor:MEMBER_COLORS[m]}));
    destroyChart('hc');destroyChart('hv');destroyChart('ha');
    charts.hc=new Chart(document.getElementById('chart-hist-cases'),{type:'bar',data:{labels:qlabels,datasets:casesDS},options:barOpts});
    charts.hv=new Chart(document.getElementById('chart-hist-virtual'),{type:'bar',data:{labels:qlabels,datasets:virtualDS},options:barOpts});
    charts.ha=new Chart(document.getElementById('chart-hist-actual'),{type:'bar',data:{labels:qlabels,datasets:actualDS},options:barOpts});
  }

  // YTD summary card
  const ytdTotals={cases:0,virtual:0,actual:0};
  const ytdByMember={};
  MEMBER_NAMES.forEach(m=>{ytdByMember[m]={cases:0,virtual:0,actual:0};});
  periods.forEach(p=>{
    MEMBER_NAMES.forEach(m=>{
      const s=(data[p].members&&data[p].members[m]?.summary)||{};
      ytdByMember[m].cases+=(s.cases||0);
      ytdByMember[m].virtual+=(s.virtual||0);
      ytdByMember[m].actual+=(s.actual||0);
      ytdTotals.cases+=(s.cases||0);
      ytdTotals.virtual+=(s.virtual||0);
      ytdTotals.actual+=(s.actual||0);
    });
  });
  const ytdEl=document.getElementById('ytd-summary-content');
  const ytdCards=[
    {label:'年度總案件數',value:ytdTotals.cases.toLocaleString()+'件',color:'#3B82F6',icon:'📋'},
    {label:'年度虛擬費用',value:'NT$'+ytdTotals.virtual.toLocaleString(),color:'#0891B2',icon:'💡'},
    {label:'年度實際收費',value:'NT$'+ytdTotals.actual.toLocaleString(),color:'#16A34A',icon:'💰'},
    {label:'付費轉換率',value:ytdTotals.virtual>0?(ytdTotals.actual/ytdTotals.virtual*100).toFixed(1)+'%':'—',color:'#D97706',icon:'📈'},
  ];
  const cardStyle=`background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:14px 16px;border-top:3px solid`;
  ytdEl.innerHTML=
    `<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:12px">`+
    ytdCards.map(c=>`<div style="${cardStyle} ${c.color}">
      <div style="font-size:1.1rem;margin-bottom:2px">${c.icon}</div>
      <div style="font-size:1.35rem;font-weight:700;color:${c.color}">${c.value}</div>
      <div style="font-size:.8rem;color:#64748B;margin-top:3px">${c.label}</div>
    </div>`).join('')+
    `</div>`+
    `<div style="display:grid;grid-template-columns:repeat(6,1fr);gap:12px">`+
    MEMBER_NAMES.map(m=>{
      const d=ytdByMember[m];const col=MEMBER_COLORS[m];
      if(!d||d.cases===0) return`<div style="${cardStyle} ${col};opacity:.45">
        <div style="font-size:.85rem;font-weight:700;color:${col};margin-bottom:4px"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${col};margin-right:5px"></span>${MEMBER_LABELS[m]}</div>
        <div style="font-size:1.1rem;font-weight:700;color:#94A3B8">0件</div>
        <div style="font-size:.78rem;color:#94A3B8">虛擬 NT$0</div>
      </div>`;
      return`<div style="${cardStyle} ${col}">
        <div style="font-size:.85rem;font-weight:700;color:${col};margin-bottom:4px"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${col};margin-right:5px"></span>${MEMBER_LABELS[m]}</div>
        <div style="font-size:1.1rem;font-weight:700;color:#0F172A">${d.cases}件</div>
        <div style="font-size:.78rem;color:#64748B">虛擬 NT$${d.virtual.toLocaleString()}</div>
        ${d.actual>0?`<div style="font-size:.78rem;color:#16A34A;font-weight:700">實收 NT$${d.actual.toLocaleString()}</div>`:''}
      </div>`;
    }).join('')+
    `</div>`;

  // Comparison table
  let tableHTML=`<table class="compare-table"><thead><tr><th>月份</th>`;
  MEMBER_NAMES.forEach(m=>tableHTML+=`<th>${MEMBER_LABELS[m]}</th>`);
  tableHTML+=`<th>合計</th></tr></thead><tbody>`;

  periods.forEach(p=>{
    const pd2=data[p];const isCurrent=selectedPeriods.includes(p);
    tableHTML+=`<tr style="${isCurrent?'background:#EFF6FF;font-weight:600':''}"><td>${pd2.label||p}<br><span style="font-size:.72rem;color:var(--subtle)">案件/虛擬/實際</span></td>`;
    let rowCases=0,rowVirtual=0,rowActual=0;
    MEMBER_NAMES.forEach(m=>{
      const s=(pd2.members&&pd2.members[m]?.summary)||{};
      rowCases+=(s.cases||0);rowVirtual+=(s.virtual||0);rowActual+=(s.actual||0);
      tableHTML+=`<td>${s.cases||0}件<br>`;
      tableHTML+=s.virtual!=null?`<span style="color:var(--subtle);font-size:.75rem">NT$${(s.virtual||0).toLocaleString()}</span><br>`:'<span style="color:var(--subtle);font-size:.75rem">-</span><br>';
      tableHTML+=s.actual>0?`<span style="color:#16A34A;font-size:.75rem;font-weight:700">NT$${s.actual.toLocaleString()}</span>`:'-';
      tableHTML+='</td>';
    });
    tableHTML+=`<td>${rowCases}件<br><span style="font-size:.75rem;color:var(--subtle)">NT$${rowVirtual.toLocaleString()}</span><br><span style="font-size:.75rem;font-weight:700;color:#16A34A">NT$${rowActual.toLocaleString()}</span></td></tr>`;
  });
  tableHTML+='</tbody></table>';
  document.getElementById('compare-table-wrap').innerHTML=tableHTML;
}

// ─────────────────────────────────────────────────────────────
// Add Month Modal
// ─────────────────────────────────────────────────────────────
function openAddMonthModal(){
  document.getElementById('add-month-modal').classList.add('open');
  const inp=document.getElementById('new-period');
  if(!inp.value){const d=new Date();inp.value=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;}
  buildMemberInputs();
}
function closeModal(){document.getElementById('add-month-modal').classList.remove('open');}

function buildMemberInputs(){
  document.getElementById('member-inputs').innerHTML=MEMBER_NAMES.map(m=>`
    <div style="border:1px solid var(--border);border-radius:8px;padding:12px;margin-bottom:10px">
      <div style="font-weight:600;margin-bottom:8px;color:${MEMBER_COLORS[m]}">${MEMBER_LABELS[m]}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
        <div class="form-group"><label>案件數</label><input type="number" id="inp-${m}-cases" min="0" value="0"></div>
        <div class="form-group"><label>虛擬費用(NT$)</label><input type="number" id="inp-${m}-virtual" min="0" value="0"></div>
        <div class="form-group"><label>實際收費(NT$)</label><input type="number" id="inp-${m}-actual" min="0" value="0"></div>
      </div>
    </div>`).join('');
}

function saveNewMonth(){
  const period=document.getElementById('new-period').value;
  if(!period){alert('請填寫月份');return;}
  const stored=loadStorage();
  if(!stored['2026-04']) stored['2026-04']=DATA_202604;
  const [y,mo]=period.split('-');
  const label=`${y}年${parseInt(mo)}月`;
  const members={};
  MEMBER_NAMES.forEach(m=>{
    const role=(DATA_202604.members[m]||{}).role||'';
    const color=(DATA_202604.members[m]||{}).color||MEMBER_COLORS[m];
    const highlights=(DATA_202604.members[m]||{}).highlights||[];
    const nextMonth=(DATA_202604.members[m]||{}).nextMonth||[];
    members[m]={name:m,role,color,highlights,nextMonth,
      summary:{
        cases:parseInt(document.getElementById(`inp-${m}-cases`).value)||0,
        virtual:parseInt(document.getElementById(`inp-${m}-virtual`).value)||0,
        actual:parseInt(document.getElementById(`inp-${m}-actual`).value)||0
      }
    };
  });
  stored[period]={period,label,department:'KS010S',members,cases:{}};
  saveStorage(stored);
  closeModal();
  selectedPeriods=[period];
  currentPeriod=period;
  buildPeriodPills();
  renderAll();
  if(document.querySelector('.tab-btn[onclick*="history"]').classList.contains('active')) renderHistory();
  alert(`已新增 ${label} 資料！可在「歷史比較」頁面查看趨勢。`);
}

// ─────────────────────────────────────────────────────────────
// Tab switching
// ─────────────────────────────────────────────────────────────
function switchTab(id,btn){
  document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('tab-'+id).classList.add('active');
  btn.classList.add('active');
  if(id==='history') renderHistory();
}

// ─────────────────────────────────────────────────────────────
// KPI 2026 Data
// ─────────────────────────────────────────────────────────────
const KPI_COLORS = {Allen:'#0891B2',Aaron:'#3B82F6',Denny:'#22C55E',William:'#A855F7',Lucas:'#F59E0B',Nick:'#14B8A6',Jimmy:'#EF4444'};
const KPI_ROLES  = {Allen:'部門主管',Aaron:'全能型雲端支援專家',Denny:'端點管理與資安主力',William:'高價值服務與營收貢獻者',Lucas:'Azure 雲端基礎架構手',Nick:'GitHub Copilot / 微軟雲端推廣',Jimmy:'Adobe / Corel 負責人'};

const KPI_2026 = {
  deptTargets:[
    {icon:'📞',label:'月均技術支援案件',value:'Denny ≥ 20 件 ／ William ≥ 50 件 ／ Lucas ≥ 20 件 ／ Jimmy ≥ 60 件'},
    {icon:'💰',label:'年度收費服務成交',value:'Denny 每季 ≥ 3 件 ／ William 每季 ≥ 3 件 ／ Lucas 年度 ≥ 3–5 件 ／ Jimmy 每季 ≥ 5 件'},
    {icon:'🎤',label:'對外 Workshop',value:'年度 ≥ 8 次'},
    {icon:'📚',label:'年度知識庫文件',value:'Denny／William 各每季 ≥ 10 篇 ／ Lucas 年度 ≥ 15 篇'},
    {icon:'🏆',label:'原廠認證更新',value:'全員完成各自代理商認證'},
    {icon:'🤖',label:'AI 工具導入',value:'Denny ≥ 2 項 ／ William ≥ 3 項 ／ Lucas 回應時間 ↓30%'},
    {icon:'📊',label:'部門月報呈報',value:'每月彙整並呈報'},
    {icon:'✅',label:'ASP 稽核通過',value:'年度 1 次'},
  ],
  members:{
    Allen:{categories:[
      {title:'策略規劃與目標管理',items:['制定部門年度目標與 KPI 架構，每季檢視進度並檢討','每年提出 ≥ 8 項新服務或解決方案，提交收費標準與推廣分析','每月彙整部門虛擬支援價值總估值與工作執行概況說明並呈報']},
      {title:'團隊培育與 AI 自動化推展',items:['每季與各員工進行績效面談，追蹤 KPI 進度並提供職涯發展建議','規劃年度教育訓練計畫，確保每位員工完成應取得之認證暨專業訓練','推動部門工作流程優化，每季彙整檢討員工 AI 自動化應用成果']},
      {title:'掌握原廠產品推廣方向，強化售後支援韌性',items:['定期召開產品策略會議，提前完備技術與協銷能力','每年 ≥ 8 次對外 Workshop 技術分享，提升公司技術形象與商業價值','主導技術售前支援與行銷內容方向，跨部門技術與行銷協作','維護知識庫與教育訓練 YouTube 頻道']},
      {title:'微軟產品支援',items:['重點產品技術支援與推廣策略擬定','各產品 Workshop 執行狀況追蹤','QBU 事項落實與執行狀況彙總呈報','撰寫年度 ASP 稽核文件與簡報並通過稽核','推動自動化作業流程落實','維護 M365 Renew Management Dashboard']},
    ]},
    Aaron:{categories:[
      {title:'技術支援與知識管理',items:['提供電話、Email 與遠端連線等技術支援服務','維護與更新公司內部技術知識庫']},
      {title:'協助產品推廣與測試',items:['配合 PM 及原廠對客戶進行產品介紹與測試工作','協助撰寫產品發表會、教育課程等活動講義資料']},
      {title:'行銷與教育訓練支援',items:['參與原廠產品活動（如產品介紹與教育訓練）','每月撰寫 CLM Website 技術與行銷相關文章']},
      {title:'雲端解決方案實施',items:['執行雲端方案相關之收費技術服務（Cloud Solution）']},
      {title:'專業認證與代理商資格',items:['既有微軟代理商所需之相關技術與銷售認證資格 renew','規劃並逐步取得 Microsoft Security Products 相關認證']},
    ]},
    Denny:{categories:[
      {title:'技術服務與客戶支援',items:['完善 Trend Micro、Apple、Jamf 產品例行技術支援，目標月均處理案件數達 20 件以上','配合處理 Trend Micro 收費服務項目（如安裝建置、更新升級、健檢），每季目標成交 3 件','建立 Jamf Onboarding 標準化作業流程與維護服務包，推動每季新增 3 件合約','利用 AI 工具自動生成技術支援 SOP 草稿與常見問題回覆範本，提升處理效率']},
      {title:'知識管理與文件製作',items:['強化 Trend Micro、Apple、Jamf 產品 KB 文件與教學影片，每季新增或更新至少 10 篇','彙整編修 Apple SMB 推廣活動所需簡報、KB 及教學影片，活動前 2 週完成備妥','利用 AI 工具輔助影片腳本撰寫與字幕生成，縮短影片製作週期']},
      {title:'產品推廣與活動支援',items:['配合參與 Apple SMB 研討會與 Workshop，每場活動追蹤潛在商機數與後續轉換率','協助業務推廣 Apple、Jamf 解決方案，每季協助促成 3 件新客戶評估或報價']},
      {title:'專業發展與認證',items:['取得或 renew Apple、Jamf 原廠技術與銷售認證，維持合規代理商資格','導入至少 2 項 AI 工具應用於技術支援或文件製作流程，記錄效率改善成果']},
    ]},
    William:{categories:[
      {title:'技術服務與客戶支援',items:['負責 Kaspersky、Jamf Pro/Connect、TeamViewer 三項產品之售後技術支援，月均處理案件數 ≥ 50 件','首次回應時間目標控制於 30 分鐘內；一般案件 1 工作日內結案，重大案件 4 小時內提供解決方案','規劃 Kaspersky 與 TeamViewer 資安健檢及部署顧問收費服務，每季成交 ≥ 3 件','導入 AI 工具自動彙整跨管道案件紀錄並產製週報，提升管理效率']},
      {title:'知識管理與文件製作',items:['持續撰寫並維護 Kaspersky、Jamf Pro/Connect、TeamViewer 技術文件，每季新增或更新 ≥ 10 篇','建置 KB 懶人包與 FAQ 專區，目標搜尋命中率較基線提升 25%','編撰網路釣魚與勒索病毒防治策略文件，作為客戶資安培訓教材','統籌 Apple SMB 推廣活動所需簡報、知識文件與教學影片，活動前 2 週完成備妥','運用 AI 工具輔助資安威脅情資摘要與文件初稿撰寫']},
      {title:'產品推廣與活動支援',items:['每季協助促成新客戶評估或報價案件 ≥ 5 件','參與 Apple SMB 研討會及 Workshop，擔任資安主題技術簡報講師或產品示範人員']},
      {title:'專業發展與認證',items:['取得或更新 Kaspersky、TeamViewer、Jamf 原廠專業認證，維持代理商合規資格','年度導入 ≥ 3 項 AI 工具應用於資安文件撰寫或威脅情資整理，記錄效率改善成果']},
    ]},
    Lucas:{categories:[
      {title:'技術服務與客戶支援',items:['提供 Azure 雲端技術支援（VM / Networking / Security / Backup / Identity），月均案件 ≥ 20 件，SLA 達成率 ≥ 95%，一次解決率 ≥ 90%','推動 Azure 雲端收費服務（Migration / Security / Cost Optimization / 架構顧問），年度目標 ≥ 3–5 件收費專案','導入 AI 工具（Copilot / ChatGPT）優化案件回覆流程，平均回應時間降低 ≥ 30%']},
      {title:'知識資產與文件製作',items:['建立與維護 Azure 技術知識庫（涵蓋 VM、網路、安全、備份、成本管理），每季 ≥ 5 篇，年度 ≥ 15 篇','整理常見問題並建立標準處理流程 Runbook，年度建立 ≥ 12 篇，Top 問題覆蓋率 ≥ 80%','運用 AI 工具提升文件產出效率 ≥ 40%']},
      {title:'產品推廣與業務貢獻',items:['協同 PM 與業務執行雲端架構評估與 POC，每季目標 ≥ 1–2 件，年度 ≥ 6 件，轉單率 ≥ 50%','提供 Azure 架構設計與報價建議，每月 ≥ 2 件，年度帶動 ≥ 5 件成交','協助客戶進行成本與安全優化，年度提出 ≥ 10 件建議，目標客戶成本降低 10–20%']},
      {title:'專業發展與認證',items:['年度取得 ≥ 2 張認證（建議：SC-200 / AI-103 / SC-500）','每季 ≥ 1 場技術訓練或技術分享（Training / Webinar）','研究並導入新技術（AOAI / Copilot / Automation / IaC），年度完成 ≥ 1 項應用案例']},
    ]},
    Jimmy:{categories:[
      {title:'技術服務與客戶支援',items:['提供 Adobe 全系列（CCT／CCE）與 Corel 全系列（CGS／CPP）深度技術支援，涵蓋安裝部署、環境除錯與授權異常排解，月均案件處理量達 60 件以上並維持高結案率','推動 Adobe Creative Cloud 與 Document Cloud 企業顧問式教學收費服務，針對企業與政府單位提供年度功能更新、合規審核及效能優化建議，每季目標成交 5 件','運用生成式 AI 工具（ChatGPT／Gemini）優化客戶常見問題回覆範本與 FAQ，提升案件處理效率，並協助客戶將 Adobe Firefly AI 整合至現有設計流程']},
      {title:'知識管理與文件製作',items:['策劃並維護 Adobe KB 技術知識庫，每月撰寫 5 篇前瞻性專題文章，聚焦 Firefly AI 應用、CG 跨領域趨勢及設計產業展望，強化公司技術品牌形象','每季產出至少 5 支高品質教學影音內容（上傳至 YouTube），涵蓋新功能解析、跨軟體協作流及企業級授權管理實務，提升客戶自助解決問題之能力']},
      {title:'產品推廣與活動支援',items:['協同 PM 及原廠針對重點客戶（企業、教育、政府）執行 POC 技術概念驗證，提供落地導入建議，每季目標協助 5 個客戶完成技術評估並進入採購階段','負責標準化講義與簡報開發，導入 Acrobat Studio／Adobe Express 模組化設計體系，提升教材產出效率與一致性，並藉由教材推廣自家產品與服務','擔任原廠研討會與 Workshop 講師，負責 Adobe／Corel 實機演示與場域應用分享，協助推廣 Adobe／Corel 未來技術藍圖']},
      {title:'專業發展與認證',items:['深化研究 Adobe Firefly Service 相關解決方案，針對客戶需求規劃自動化工作流轉型建議','取得至少 1 項進階技術認證（如 Adobe Certified Professional 或雲端資安相關認證），確保技術水準符合原廠合規代理標準']},
    ]},
  },
  checklist:[
    {item:'部門月均技術支援案件目標',owner:'全員',target:'Denny ≥ 20 件 ／ William ≥ 50 件 ／ Lucas ≥ 20 件',freq:'月'},
    {item:'Trend Micro 收費服務成交',owner:'Denny',target:'每季 ≥ 3 件',freq:'季'},
    {item:'Kaspersky / TeamViewer 收費服務成交',owner:'William',target:'每季 ≥ 3 件',freq:'季'},
    {item:'Azure 雲端收費專案',owner:'Lucas',target:'年度 ≥ 3–5 件',freq:'年'},
    {item:'新服務或解決方案提案',owner:'Allen',target:'年度 ≥ 8 項',freq:'年'},
    {item:'KB 文件新增／更新（Denny）',owner:'Denny',target:'每季 ≥ 10 篇',freq:'季'},
    {item:'KB 文件新增／更新（William）',owner:'William',target:'每季 ≥ 10 篇',freq:'季'},
    {item:'Azure 技術知識庫（Lucas）',owner:'Lucas',target:'年度 ≥ 15 篇（每季 ≥ 5 篇）',freq:'季'},
    {item:'CLM Website 技術文章撰寫',owner:'Aaron',target:'每月 ≥ 1 篇',freq:'月'},
    {item:'Azure POC 執行',owner:'Lucas',target:'每季 ≥ 1–2 件，年度 ≥ 6 件，轉單率 ≥ 50%',freq:'季'},
    {item:'新客戶評估／報價（Denny）',owner:'Denny',target:'每季 ≥ 3 件',freq:'季'},
    {item:'新客戶評估／報價（William）',owner:'William',target:'每季 ≥ 5 件',freq:'季'},
    {item:'Jamf Onboarding 服務合約新增',owner:'Denny',target:'每季新增 ≥ 3 件',freq:'季'},
    {item:'微軟原廠認證更新（Aaron）',owner:'Aaron',target:'既有代理商認證 renew，新增 Security 認證',freq:'年'},
    {item:'Apple／Jamf 原廠認證（Denny）',owner:'Denny',target:'維持合規代理商資格',freq:'年'},
    {item:'Kaspersky／TeamViewer／Jamf 認證（William）',owner:'William',target:'維持合規代理商資格',freq:'年'},
    {item:'Azure 認證取得（Lucas）',owner:'Lucas',target:'年度 ≥ 2 張（建議：SC-200 / AI-103 / SC-500）',freq:'年'},
    {item:'AI 工具導入（Denny）',owner:'Denny',target:'≥ 2 項，記錄效率改善成果',freq:'年'},
    {item:'AI 工具導入（William）',owner:'William',target:'≥ 3 項，記錄效率改善成果',freq:'年'},
    {item:'AI 輔助回應效率（Lucas）',owner:'Lucas',target:'平均回應時間降低 ≥ 30%',freq:'季'},
    {item:'Azure Cost Optimization 建議',owner:'Lucas',target:'年度 ≥ 10 件，目標客戶成本降低 10–20%',freq:'年'},
    {item:'對外 Workshop 舉辦',owner:'Allen',target:'年度 ≥ 8 次',freq:'年'},
    {item:'員工績效面談',owner:'Allen',target:'每季各員工 1 次',freq:'季'},
    {item:'部門月報彙整呈報',owner:'Allen',target:'每月 1 次',freq:'月'},
    {item:'Apple SMB 研討會參與（Denny）',owner:'Denny',target:'每場追蹤潛在商機數與後續轉換率',freq:'活動'},
    {item:'Apple SMB 研討會參與（William）',owner:'William',target:'每場擔任資安主題技術簡報講師',freq:'活動'},
    {item:'SLA 達成率（Lucas）',owner:'Lucas',target:'≥ 95%',freq:'月'},
    {item:'一次解決率（Lucas）',owner:'Lucas',target:'≥ 90%',freq:'月'},
    {item:'ASP 稽核文件通過',owner:'Allen',target:'年度 1 次通過',freq:'年'},
    {item:'QBU 事項落實彙報',owner:'Allen',target:'每季',freq:'季'},
    {item:'M365 Renew Dashboard 維護',owner:'Allen',target:'持續維護',freq:'月'},
    {item:'Adobe／Corel 技術支援案件數',owner:'Jimmy',target:'月均 ≥ 60 件，維持高結案率',freq:'月'},
    {item:'Adobe CC／DC 企業顧問教學收費成交',owner:'Jimmy',target:'每季 ≥ 5 件',freq:'季'},
    {item:'Adobe KB 技術知識庫文章撰寫',owner:'Jimmy',target:'每月 ≥ 5 篇（聚焦 Firefly AI 應用、CG 趨勢）',freq:'月'},
    {item:'教學影音內容產出（YouTube）',owner:'Jimmy',target:'每季 ≥ 5 支高品質教學影片',freq:'季'},
    {item:'客戶 POC 技術評估協助',owner:'Jimmy',target:'每季協助 ≥ 5 個客戶完成評估並進入採購',freq:'季'},
    {item:'Adobe Firefly AI 整合推廣',owner:'Jimmy',target:'協助客戶將 Firefly AI 整合至現有設計流程',freq:'年'},
    {item:'Adobe／Corel 原廠 Workshop 講師',owner:'Jimmy',target:'參與原廠研討會與 Workshop 並擔任講師',freq:'活動'},
    {item:'進階技術認證取得（Jimmy）',owner:'Jimmy',target:'年度取得 ≥ 1 項（Adobe Certified Professional 或雲端資安認證）',freq:'年'},
  ]
};

// ─────────────────────────────────────────────────────────────
// KPI Tab Render
// ─────────────────────────────────────────────────────────────
const STATUS_CYCLE=[
  {text:'進行中',bg:'#FEF3C7',color:'#92400E'},
  {text:'已達成',bg:'#D1FAE5',color:'#065F46'},
  {text:'待啟動',bg:'#F1F5F9',color:'#475569'},
  {text:'未達標',bg:'#FFE4E6',color:'#9F1239'},
];
function toggleStatus(el){
  const cur=el.textContent.trim();
  const idx=STATUS_CYCLE.findIndex(s=>s.text===cur);
  const next=STATUS_CYCLE[(idx+1)%STATUS_CYCLE.length];
  el.textContent=next.text;el.style.background=next.bg;el.style.color=next.color;
}

function renderKPITab(){
  const freqStyle={
    月:{bg:'#DBEAFE',color:'#1D4ED8'},
    季:{bg:'#D1FAE5',color:'#065F46'},
    年:{bg:'#FEF3C7',color:'#92400E'},
    活動:{bg:'#F3E8FF',color:'#7E22CE'},
  };

  // ── Dept summary ──
  let html=`<div class="section-card highlight" style="margin-bottom:20px">
  <h2>🏢 2026 年度部門彙總 KPI</h2>
  <div class="kpi-dept-grid">
    ${KPI_2026.deptTargets.map(t=>`
    <div class="kpi-dept-card">
      <div class="kd-icon">${t.icon}</div>
      <div class="kd-label">${t.label}</div>
      <div class="kd-value">${t.value}</div>
    </div>`).join('')}
  </div>
</div>`;

  // ── Individual KPI ──
  html+=`<h2 style="margin-bottom:14px">👤 個人年度 KPI</h2>`;
  ['Allen','Aaron','Denny','William','Lucas','Jimmy'].forEach(m=>{
    if(!KPI_2026.members[m]) return;
    const col=KPI_COLORS[m]||'#64748B';
    const cats=KPI_2026.members[m].categories;
    html+=`<div class="kpi-person-card">
      <div class="kpi-person-header" style="background:${col}">
        <span class="kpn-name">${m}</span>
        <span class="kpn-role">${KPI_ROLES[m]||''}</span>
      </div>
      <div class="kpi-person-body">
        ${cats.map((cat,i)=>`
        <div class="kpi-category">
          <div class="kpi-cat-title">
            <span class="kpi-cat-num" style="background:${col}">${i+1}</span>${cat.title}
          </div>
          <ul class="kpi-items">
            ${cat.items.map(it=>`<li>${it}</li>`).join('')}
          </ul>
        </div>`).join('')}
      </div>
    </div>`;
  });

  document.getElementById('kpi-tab-content').innerHTML=html;
}

// ─────────────────────────────────────────────────────────────
// Checklist Tab Render
// ─────────────────────────────────────────────────────────────
function renderChecklistTab(){
  const freqStyle={
    月:{bg:'#DBEAFE',color:'#1D4ED8'},
    季:{bg:'#D1FAE5',color:'#065F46'},
    年:{bg:'#FEF3C7',color:'#92400E'},
    活動:{bg:'#F3E8FF',color:'#7E22CE'},
  };
  const ownerOrder=['全員','Allen','Aaron','Denny','William','Lucas','Jimmy'];
  const ownerColor={'全員':'#475569',Allen:'#0891B2',Aaron:'#3B82F6',Denny:'#22C55E',William:'#A855F7',Lucas:'#F59E0B',Jimmy:'#EF4444'};
  const grouped={};
  ownerOrder.forEach(o=>grouped[o]=[]);
  KPI_2026.checklist.forEach(row=>{
    if(grouped[row.owner]!==undefined) grouped[row.owner].push(row);
  });

  const total=KPI_2026.checklist.length;
  let html=`<div style="margin-bottom:20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px">
    <div>
      <h2>☑️ KPI 查核項目表</h2>
      <div style="font-size:.85rem;color:var(--subtle);margin-top:4px">共 ${total} 項 ‧ 點擊「狀態」欄可切換進度</div>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      ${ownerOrder.map(o=>`<span style="display:inline-flex;align-items:center;gap:5px;font-size:.82rem;padding:4px 10px;border-radius:20px;background:#F1F5F9">
        <span style="width:8px;height:8px;border-radius:50%;background:${ownerColor[o]};display:inline-block"></span>${o}
        <strong>${(grouped[o]||[]).length}</strong>
      </span>`).join('')}
    </div>
  </div>
  <div style="display:flex;flex-direction:column;gap:16px">`;

  ownerOrder.forEach(owner=>{
    const rows=grouped[owner];
    if(!rows||rows.length===0) return;
    const col=ownerColor[owner]||'#64748B';
    html+=`<div style="border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow)">
      <div style="background:${col};color:#fff;padding:11px 18px;font-weight:700;font-size:.95rem;display:flex;align-items:center;gap:8px">
        <span style="width:10px;height:10px;border-radius:50%;background:rgba(255,255,255,.45);display:inline-block"></span>
        ${owner}
        <span style="font-size:.78rem;font-weight:400;opacity:.85;margin-left:4px">${rows.length} 項查核指標</span>
      </div>
      <div style="overflow-x:auto;background:#fff">
      <table style="width:100%;border-collapse:collapse">
        <thead style="background:#F8FAFC">
          <tr>
            <th class="checklist-th" style="width:32px">#</th>
            <th class="checklist-th">查核項目</th>
            <th class="checklist-th">目標值</th>
            <th class="checklist-th">查核頻率</th>
            <th class="checklist-th">狀態</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((row,i)=>{
            const fs=freqStyle[row.freq]||{bg:'#F1F5F9',color:'#475569'};
            const s=STATUS_CYCLE[0];
            return`<tr style="${i%2===0?'':'background:#F8FAFC'}">
              <td class="checklist-td" style="color:#94A3B8;font-size:.75rem">${i+1}</td>
              <td class="checklist-td" style="font-weight:500">${row.item}</td>
              <td class="checklist-td" style="color:#374151;line-height:1.5">${row.target}</td>
              <td class="checklist-td">
                <span style="display:inline-block;padding:2px 8px;border-radius:20px;font-size:.72rem;font-weight:600;background:${fs.bg};color:${fs.color}">${row.freq}</span>
              </td>
              <td class="checklist-td">
                <span class="status-badge" style="background:${s.bg};color:${s.color}" onclick="toggleStatus(this)">${s.text}</span>
              </td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
      </div>
    </div>`;
  });

  html+=`</div>`;
  document.getElementById('checklist-tab-content').innerHTML=html;
}

// Start
init();

const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();
const paths=['/','/services','/how-we-work','/insights','/about','/contact','/privacy','/terms','/insights/the-handshake-is-the-new-cold-email','/insights/why-pocs-fail','/insights/building-a-sales-pipeline-for-an-ai-startup','/insights/why-meddpicc-fails','/insights/points-based-sales-funnel','/nope'];
let bad=0;
for(const p of paths){for(const w of [1280,390,320]){
 const pg=await b.newPage({viewport:{width:w,height:900}});
 const r=await pg.goto('http://localhost:3100'+p,{waitUntil:'load'});
 const m=await pg.evaluate(()=>({sw:document.documentElement.scrollWidth,cw:document.documentElement.clientWidth,ph:(document.body.innerText.match(/\[[A-Z][^\]]*\]/g)||[]).slice(0,3),h1:(document.querySelector('h1')||{}).innerText}));
 const flag=(m.sw>m.cw)||m.ph.length;
 if(flag)bad++;
 console.log(p.padEnd(14),w,r.status(),'sw',m.sw,'cw',m.cw,flag?'<<< CHECK '+JSON.stringify(m.ph):'', w==1280?(m.h1||'').slice(0,50):'');
 if(['/','/insights','/insights/points-based-sales-funnel'].includes(p)&&w===390)await pg.screenshot({path:`/tmp/claude-0/-home-claude/2e7c84e1-4bc9-5934-a93d-b98113a1d390/scratchpad/tvlp-${p.replace(/\//g,'_')||'_home'}-390.png`,fullPage:true});
 await pg.close();}}
console.log('issues:',bad);await b.close()})();

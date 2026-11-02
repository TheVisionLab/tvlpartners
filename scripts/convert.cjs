const {htmlToJsx}=require('html-to-jsx-transform');const fs=require('fs');
const SRC='/tmp/claude-0/-home-claude/2e7c84e1-4bc9-5934-a93d-b98113a1d390/scratchpad/tvlp/project';
const pages={Home:'',Services:'services',HowWeWork:'how-we-work',About:'about',Contact:'contact',Insights:'insights'};
const routeByText={'Services':'/services','How we work':'/how-we-work','Insights':'/insights','About':'/about','Contact':'/contact','Privacy':'/privacy','Terms':'/terms'};
const CAL='https://calendly.com/trevormadigan';
for(const [name,route] of Object.entries(pages)){
  let s=fs.readFileSync(SRC+'/'+name+'.dc.html','utf8');
  const a=s.indexOf('</header>')+9, b=s.indexOf('<footer');
  let body=s.slice(a,b);
  // links
  body=body.replace(/<a href="#"([^>]*)>([\s\S]*?)<\/a>/g,(m,attrs,inner)=>{
    const t=inner.replace(/<[^>]+>/g,'').trim();
    if(/^Book a call$/.test(t)) return '<a href="'+CAL+'" target="_blank" rel="noopener noreferrer"'+attrs+'>'+inner+'</a>';
    if(routeByText[t]) return '<a href="'+routeByText[t]+'"'+attrs+'>'+inner+'</a>';
    return m;
  });
  body=body.replace(/<!--[\s\S]*?-->/g,'');
  fs.writeFileSync('/tmp/'+name+'.body.html',body);
  let jsx=htmlToJsx(body.trim());
  fs.writeFileSync('scripts/'+name+'.jsx.txt',jsx);
  console.log(name,body.length,jsx.length);
}

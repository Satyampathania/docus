import{d as l,a0 as i,r as u,b as e,c as d,K as m,Y as t,a2 as y}from"./entry.021567fa.js";const b=l({__name:"CopyButton",props:{content:{type:String,default:""}},setup(c){const a=c,{copy:s}=i(),o=u("init"),p=r=>{s(a.content).then(()=>{o.value="copied",setTimeout(()=>{o.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(r,f)=>{const n=y;return e(),d("button",{class:"copy rounded-lg bg-gray-800 px-2 py-2 font-mono text-xs font-semibold leading-none text-gray-400 focus:outline-none dark:bg-black",onClick:p},[m(o)==="copied"?(e(),t(n,{key:0,name:"fa-check",class:"h-4 w-4"})):(e(),t(n,{key:1,name:"fa-copy",class:"h-4 w-4"}))])}}});export{b as default};

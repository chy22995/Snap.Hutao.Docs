import{_ as f}from"./plugin-vue_export-helper-x3n3nnut.js";import{f as d,o as _,c as m,a as p}from"./app-kBV2pDE_.js";const g=p("p",null,"Redirecting to the correct locale...",-1),$=[g],z={__name:"index.html",setup(U){return d(()=>{const{languages:c}=window.navigator,{hash:l,origin:o}=window.location,e=l.substring(1),i={0:["/en/",["en-US","en-UK","en"]],1:["/zh/",["zh-CN","zh-TW","zh"]],2:["/ru/",["ru-RU","ru-KZ","ru-BY","ru-UA","ru-MD","ru-LV","tt-RU","ru"]],"/zh/":["zh-CN"],"/en/":["en-US"],"/ru/":["ru-RU"]},t=["/en/","/ru/","/zh/"],a=t.pop();let n=null;e:for(const u of c)for(const[s,h]of Object.entries(i))if(h.includes(u)){if(!t.includes(s))continue;n=s;break e}const r=a?`${o}${a}${e?`#${e}`:""}`:null;n&&t.includes(n)?location.href=`${o}${n}${e?`#${e}`:""}`:r?location.href=r:location.href=`${o}/404.html`}),(c,l)=>(_(),m("div",null,$))}},b=f(z,[["__file","index.html.vue"]]);export{b as default};
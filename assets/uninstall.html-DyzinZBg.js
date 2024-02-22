import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o as r,c as d,a as e,b as t,d as a,w as c,e as o}from"./app-Bk0SziEX.js";const u={},p=e("h1",{id:"uninstall-snap-hutao",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#uninstall-snap-hutao"},[e("span",null,"Uninstall Snap Hutao")])],-1),h=e("strong",null,"Method 1",-1),m=e("li",null,"Launch Snap Hutao, and go to settings page",-1),g=e("strong",null,"Delete All Scheduled Task",-1),f=e("strong",null,"Execute",-1),_=o(`<li><strong>Method 2</strong>： <ul><li>Execute the following PowerShell script<div class="language-PowerShell line-numbers-mode" data-ext="PowerShell" data-title="PowerShell"><pre class="language-PowerShell"><code>schtasks /delete /tn SnapHutaoDailyNoteRefreshTask
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><strong>Method 3</strong>： <ul><li>Open Windows Scheduled Task Manager</li><li>Find <code>SnapHutaoDailyNoteRefreshTask</code> task and delete it</li></ul></li><li><strong>Method 4</strong>： <ul><li>Upgrade to<code>1.5.1</code> version and open Real-time Notes</li><li>Close software and remove it</li></ul></li>`,3),S=o("<li>Remove the Software <ul><li>Open <code>Start Menu</code></li><li>Find or search <code>Snap Hutao</code></li><li>Right click on it, and select <code>Unstall</code></li></ul></li><li>Remove data folder (If you want remove it completely) <ul><li>Open and delete <code>%userprofile%/Documents/Hutao</code></li></ul></li>",2);function y(v,B){const i=n("RouteLink"),l=n("Badge");return r(),d("div",null,[p,e("ul",null,[e("li",null,[t("Clear Real-time Notes Scheduled Task "),e("ul",null,[e("li",null,[t("Before version 1.4.15, if not execute this step, scheduled task used to refresh real-time notes may not be deleted,and you may face "),a(i,{to:"/en/advanced/FAQ.html#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BC%9A%E5%BC%B9%E5%87%BA%E9%9C%80%E8%A6%81%E4%BD%BF%E7%94%A8%E6%96%B0%E5%BA%94%E7%94%A8%E4%BB%A5%E6%89%93%E5%BC%80%E7%9A%84%E5%AF%B9%E8%AF%9D%E6%A1%86"},{default:c(()=>[t("this issue")]),_:1}),e("ul",null,[e("li",null,[h,t(),a(l,{text:"For version <= 1.4.15",type:"tip"}),t("： "),e("ul",null,[m,e("li",null,[t("Find "),g,t(" field, and click on "),f,t(" Button "),a(l,{text:"Requires administrator privileges",type:"tip"})])])])])]),_])]),S])])}const x=s(u,[["render",y],["__file","uninstall.html.vue"]]),A=JSON.parse('{"path":"/en/advanced/uninstall.html","title":"Uninstall Snap Hutao","lang":"en-US","frontmatter":{"category":["FAQ"],"icon":"iconfont icon-delete","order":9,"comment":false,"description":"Uninstall Snap Hutao Clear Real-time Notes Scheduled Task Before version 1.4.15, if not execute this step, scheduled task used to refresh real-time notes may not be deleted,and ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://hut.ao/zh/advanced/uninstall.html"}],["link",{"rel":"alternate","hreflang":"id-id","href":"https://hut.ao/id/advanced/uninstall.html"}],["link",{"rel":"alternate","hreflang":"ru-ru","href":"https://hut.ao/ru/advanced/uninstall.html"}],["meta",{"property":"og:url","content":"https://hut.ao/en/advanced/uninstall.html"}],["meta",{"property":"og:site_name","content":"Snap Hutao"}],["meta",{"property":"og:title","content":"Uninstall Snap Hutao"}],["meta",{"property":"og:description","content":"Uninstall Snap Hutao Clear Real-time Notes Scheduled Task Before version 1.4.15, if not execute this step, scheduled task used to refresh real-time notes may not be deleted,and ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"id-ID"}],["meta",{"property":"og:locale:alternate","content":"ru-RU"}],["meta",{"property":"og:updated_time","content":"2023-10-12T16:19:24.000Z"}],["meta",{"property":"article:author","content":"DGP-Studio"}],["meta",{"property":"article:modified_time","content":"2023-10-12T16:19:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Uninstall Snap Hutao\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-12T16:19:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DGP-Studio\\",\\"url\\":\\"https://github.com/DGP-Studio\\"}]}"],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://hut.ao/en/rss.xml","title":"Snap Hutao RSS Feed"}]]},"headers":[],"git":{"createdTime":1679108741000,"updatedTime":1697127564000,"contributors":[{"name":"Masterain","email":"i@irain.in","commits":5},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":0.59,"words":176},"filePathRelative":"en/advanced/uninstall.md","localizedDate":"March 18, 2023","autoDesc":true}');export{x as comp,A as data};

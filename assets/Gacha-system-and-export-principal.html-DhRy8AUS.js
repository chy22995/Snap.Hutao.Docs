import{_ as t,c as a,f as i,o as n}from"./app-DNa4_-GM.js";const r={};function s(o,e){return n(),a("div",null,e[0]||(e[0]=[i('<h1 id="gacha-system-and-export-principle" tabindex="-1"><a class="header-anchor" href="#gacha-system-and-export-principle"><span>Gacha System and Export Principle</span></a></h1><p>Snap Hutao&#39;s Gacha system underwent an overhaul compared to Snap Genshin, experiencing a complete architectural redesign.</p><p>This article will explain the Genshin&#39;s wish logging mechanism and the technical principles behind the Gacha export feature in the Snap Hutao.</p><h2 id="obtaining-wishes" tabindex="-1"><a class="header-anchor" href="#obtaining-wishes"><span>Obtaining Wishes</span></a></h2><p>Acquiring wish records requires querying miHoYo&#39;s API.</p><p>Regarding this API, there are a few key points to note:</p><ul><li>Through miHoYo&#39;s server API, you can only access wish records from the past 6 months. <ul><li>This is also the source of wish records in the original Genshin client.</li></ul></li><li>The API has rate limits; too many requests too quickly can lead to subsequent failures, making it impossible to retrieve data.</li></ul><p>To request this API, we need four crucial parameters.</p><ul><li>Currently, several methods can obtain these parameters: <ul><li>Traversing Unity&#39;s log files to find URLs for wish records opened by the user</li><li>Proxying local traffic to filter wish record URLs</li><li>Looking through the CefBrowser&#39;s browser cache to find wish record URLs</li><li>For Cookies containing Stoken, calling the genAuthKey API to obtain parameters</li><li>Advanced users manually inputting relevant URLs</li></ul></li></ul><p>Upon requesting the API, you receive fragmented wish records. Concatenating them provides a complete wish record list.</p><h2 id="wish-storage" tabindex="-1"><a class="header-anchor" href="#wish-storage"><span>Wish Storage</span></a></h2><p>After obtaining the complete wish record list, you can easily serialize it into a local database. When necessary, deserialization from the database presents it to the user.</p><p>Subsequent requests to the server only need to compare new data requests against the database&#39;s existing data.</p><p>This way, users can permanently store their account&#39;s complete wish records.</p><h2 id="uigf-format" tabindex="-1"><a class="header-anchor" href="#uigf-format"><span>UIGF Format</span></a></h2><blockquote><p>Unified Interchangeable GachaLog Format</p></blockquote><p>UIGF is a unified wish record data exchange standard, advocated, launched, and <strong>persistently maintained</strong> by us in collaboration with other wish record applications.</p><p>Standardized data formats enable users to transfer wish records between different tools for Genshin, each leveraging its distinctive functionalities.</p><h3 id="importing-wishes" tabindex="-1"><a class="header-anchor" href="#importing-wishes"><span>Importing Wishes</span></a></h3><p>When utilizing the UIGF data format, you can import data previously stored in other applications.</p><p>Hutao, during import handling, compares the earliest index (ID) existing in local storage and only imports older data.</p><p>(This is because newer data of higher precision is always available from miHoYo&#39;s servers.)</p><h3 id="exporting-wishes" tabindex="-1"><a class="header-anchor" href="#exporting-wishes"><span>Exporting Wishes</span></a></h3><p>Snap Hutao exports wish records in the UIGF data format in Json file, allowing users to share their wish records with others or import them into other applications.</p>',24)]))}const l=t(r,[["render",s],["__file","Gacha-system-and-export-principal.html.vue"]]),p=JSON.parse(`{"path":"/en/advanced/Gacha-system-and-export-principal.html","title":"Gacha System and Export Principle","lang":"en-US","frontmatter":{"headerDepth":2,"category":["FAQ"],"icon":"iconfont icon-read","order":8,"comment":false,"description":"Snap Hutao utilizes various methods to obtain users' login information and combines it with the Genshin Impact API to retrieve gacha records.","banner":"https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/advanced/Gacha-system-and-export-principal.html&has_description=False","gitInclude":[],"head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://hut.ao/zh/advanced/Gacha-system-and-export-principal.html"}],["link",{"rel":"alternate","hreflang":"id-id","href":"https://hut.ao/id/advanced/Gacha-system-and-export-principal.html"}],["link",{"rel":"alternate","hreflang":"ru-ru","href":"https://hut.ao/ru/advanced/Gacha-system-and-export-principal.html"}],["meta",{"property":"og:url","content":"https://hut.ao/en/advanced/Gacha-system-and-export-principal.html"}],["meta",{"property":"og:site_name","content":"Snap Hutao"}],["meta",{"property":"og:title","content":"Gacha System and Export Principle"}],["meta",{"property":"og:description","content":"Snap Hutao utilizes various methods to obtain users' login information and combines it with the Genshin Impact API to retrieve gacha records."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/advanced/Gacha-system-and-export-principal.html&has_description=False"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"id-ID"}],["meta",{"property":"og:locale:alternate","content":"ru-RU"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/advanced/Gacha-system-and-export-principal.html&has_description=False"}],["meta",{"name":"twitter:image:alt","content":"Gacha System and Export Principle"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Gacha System and Export Principle\\",\\"image\\":[\\"https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/advanced/Gacha-system-and-export-principal.html&has_description=False\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DGP-Studio\\",\\"url\\":\\"https://github.com/DGP-Studio\\"}]}"],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://hut.ao/en/rss.xml","title":"Snap Hutao RSS Feed"}]]},"headers":[{"level":2,"title":"Obtaining Wishes","slug":"obtaining-wishes","link":"#obtaining-wishes","children":[]},{"level":2,"title":"Wish Storage","slug":"wish-storage","link":"#wish-storage","children":[]},{"level":2,"title":"UIGF Format","slug":"uigf-format","link":"#uigf-format","children":[{"level":3,"title":"Importing Wishes","slug":"importing-wishes","link":"#importing-wishes","children":[]},{"level":3,"title":"Exporting Wishes","slug":"exporting-wishes","link":"#exporting-wishes","children":[]}]}],"readingTime":{"minutes":1.45,"words":435},"filePathRelative":"en/advanced/Gacha-system-and-export-principal.md"}`);export{l as comp,p as data};

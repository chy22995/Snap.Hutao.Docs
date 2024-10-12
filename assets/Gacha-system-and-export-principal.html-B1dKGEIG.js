import{_ as a,c as t,f as n,o as p}from"./app-DNa4_-GM.js";const r={};function l(i,e){return p(),t("div",null,e[0]||(e[0]=[n('<h1 id="祈愿系统与导出原理" tabindex="-1"><a class="header-anchor" href="#祈愿系统与导出原理"><span>祈愿系统与导出原理</span></a></h1><blockquote><p>Gacha System and Principal</p></blockquote><p>胡桃的祈愿系统相较 Snap Genshin 进行了整体架构上的重新设计。</p><p>本文将解释原神的祈愿记录机制和胡桃工具箱祈愿导出功能的技术原理。</p><h2 id="祈愿的获取" tabindex="-1"><a class="header-anchor" href="#祈愿的获取"><span>祈愿的获取</span></a></h2><p>获取祈愿记录需要请求米哈游的 API</p><p>关于此 API, 有下列几个注意点</p><ul><li>通过米哈游服务器的 API，只能查询到过去一年内的祈愿记录 <ul><li>这也是原神客户端中祈愿记录的来源</li></ul></li><li>API 存在请求速率限制，过快的请求会导致后续的请求失败，无法正常获取数据</li></ul><p>为了请求此 API，我们需要四个关键参数</p><ul><li>目前有下列几种方法可以获取这些参数 <ul><li>遍历 Unity 的日志文件，查找用户打开的祈愿记录 URL</li><li>代理本机流量，筛选祈愿记录 URL</li><li>查找 CefBrowser 的浏览器缓存，找到祈愿记录 URL</li><li>对于包含了 Stoken 的 Cookie，调用 genAuthKey API,获取参数</li><li>高级用户手动输入相关 URL</li></ul></li></ul><p>在请求 API 后可以获取到零散的祈愿记录，在对其进行拼接后即可获得一份完整的祈愿记录列表</p><h2 id="祈愿的存储" tabindex="-1"><a class="header-anchor" href="#祈愿的存储"><span>祈愿的存储</span></a></h2><p>获得完整的祈愿记录列表后即可将其简单的序列化入本地数据库内，在需要时可从数据库中反序列化出来呈现给用户。</p><p>后续的对服务器的请求只需要对比数据库中的数据请求新增的部分即可。</p><p>这样，用户即可长期地保存帐号的完整祈愿记录</p><h2 id="uigf-格式" tabindex="-1"><a class="header-anchor" href="#uigf-格式"><span>UIGF 格式</span></a></h2><blockquote><p>统一可交换祈愿记录标准</p><p>Uniformed Interchangeable GachaLog Format standard</p></blockquote><p>UIGF 是由我们联合其他祈愿记录应用倡导、推出并<strong>持久维护</strong>的一个统一的祈愿记录数据交换标准</p><p>标准化的数据格式将允许用户将祈愿记录在不同的转移数据，以使用到不同原神工具中各自的特色功能</p><h3 id="祈愿的导入" tabindex="-1"><a class="header-anchor" href="#祈愿的导入"><span>祈愿的导入</span></a></h3><p>在使用 UIGF 数据格式的前提下，可以导入曾在其他应用中储存的数据</p><p>胡桃在处理导入时，会对比本地储存中存在的最早的索引（ID）并仅导入较老的数据</p><p>（因为始终可以从米哈游的服务器获取较新的数据，这种原始数据有更高的精确度）</p><h3 id="祈愿的导出" tabindex="-1"><a class="header-anchor" href="#祈愿的导出"><span>祈愿的导出</span></a></h3><p>胡桃可以将祈愿记录以 UIGF 数据格式保存为文件并输出到用户指定的文件夹中</p>',25)]))}const h=a(r,[["render",l],["__file","Gacha-system-and-export-principal.html.vue"]]),s=JSON.parse('{"path":"/zh/advanced/Gacha-system-and-export-principal.html","title":"祈愿系统与导出原理","lang":"zh-CN","frontmatter":{"headerDepth":2,"category":["FAQ"],"icon":"iconfont icon-read","order":8,"comment":false,"description":"Snap Hutao 使用多种方式获取用户的登录信息并配合原神 API 获取祈愿记录。","banner":"https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/Gacha-system-and-export-principal.html&has_description=False","gitInclude":[],"head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://hut.ao/en/advanced/Gacha-system-and-export-principal.html"}],["link",{"rel":"alternate","hreflang":"id-id","href":"https://hut.ao/id/advanced/Gacha-system-and-export-principal.html"}],["link",{"rel":"alternate","hreflang":"ru-ru","href":"https://hut.ao/ru/advanced/Gacha-system-and-export-principal.html"}],["meta",{"property":"og:url","content":"https://hut.ao/zh/advanced/Gacha-system-and-export-principal.html"}],["meta",{"property":"og:site_name","content":"胡桃工具箱"}],["meta",{"property":"og:title","content":"祈愿系统与导出原理"}],["meta",{"property":"og:description","content":"Snap Hutao 使用多种方式获取用户的登录信息并配合原神 API 获取祈愿记录。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/Gacha-system-and-export-principal.html&has_description=False"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"id-ID"}],["meta",{"property":"og:locale:alternate","content":"ru-RU"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/Gacha-system-and-export-principal.html&has_description=False"}],["meta",{"name":"twitter:image:alt","content":"祈愿系统与导出原理"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"祈愿系统与导出原理\\",\\"image\\":[\\"https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/Gacha-system-and-export-principal.html&has_description=False\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DGP-Studio\\",\\"url\\":\\"https://github.com/DGP-Studio\\"}]}"],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://hut.ao/zh/rss.xml","title":"胡桃工具箱 RSS Feed"}]]},"headers":[{"level":2,"title":"祈愿的获取","slug":"祈愿的获取","link":"#祈愿的获取","children":[]},{"level":2,"title":"祈愿的存储","slug":"祈愿的存储","link":"#祈愿的存储","children":[]},{"level":2,"title":"UIGF 格式","slug":"uigf-格式","link":"#uigf-格式","children":[{"level":3,"title":"祈愿的导入","slug":"祈愿的导入","link":"#祈愿的导入","children":[]},{"level":3,"title":"祈愿的导出","slug":"祈愿的导出","link":"#祈愿的导出","children":[]}]}],"readingTime":{"minutes":2.41,"words":724},"filePathRelative":"zh/advanced/Gacha-system-and-export-principal.md"}');export{h as comp,s as data};

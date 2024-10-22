import{_ as p,c as r,a,b as e,d as i,e as l,f as t,r as d,o}from"./app-BgofEdxK.js";const c={},m={class:"hint-container info"};function u(h,n){const s=d("RouteLink");return o(),r("div",null,[n[7]||(n[7]=a("h1",{id:"我的角色",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#我的角色"},[a("span",null,"我的角色")])],-1)),a("div",m,[n[2]||(n[2]=a("p",{class:"hint-container-title"},"前置要求",-1)),a("p",null,[n[1]||(n[1]=e("该功能需要你在胡桃工具箱中登录米游社账号，登录方法参见")),i(s,{to:"/zh/features/mhy-account-switch.html#%E7%B1%B3%E6%B8%B8%E7%A4%BE%E5%A4%9A%E8%B4%A6%E5%8F%B7%E5%88%87%E6%8D%A2"},{default:l(()=>n[0]||(n[0]=[e("米游社多账号切换")])),_:1})])]),n[8]||(n[8]=t('<p>“我的角色”功能可读取当前账号所拥有角色的具体数据，包括等级、命之座、武器、天赋、圣遗物等；并自动计算圣遗物评分和双爆评分</p><p><img src="https://img.alicdn.com/imgextra/i4/1797064093/O1CN01hK2R3O1g6e0qblXd2_!!1797064093.png_.webp" alt="属性统计示例图" loading="lazy"></p><h2 id="同步角色信息" tabindex="-1"><a class="header-anchor" href="#同步角色信息"><span>同步角色信息</span></a></h2><p>直接点击右上角的“同步角色信息”即可</p><ul><li>同步的数据内容包含： <ul><li>角色等级</li><li>角色命座</li><li>好感度</li><li>武器等级</li><li>武器精炼</li><li>天赋等级</li><li>衣装信息</li><li>圣遗物</li><li>圣遗物详情</li></ul></li></ul><h2 id="将当前选定角色加入养成计算" tabindex="-1"><a class="header-anchor" href="#将当前选定角色加入养成计算"><span>将当前选定角色加入养成计算</span></a></h2><ol><li>先同步一次角色数据</li><li>点击“我的角色”功能页面，切换至需要加入养成计算的角色</li><li>点击界面右上方的“养成计算-当前角色与武器”并填入等级信息 <ul><li><strong>已同步过的角色</strong>的当前角色等级、天赋等级和武器等级会<strong>预填</strong>入其中，目标等级可自由更改。</li><li>如果拉取数据中不包含相关数据则仍将按初始数据处理。</li></ul></li></ol><p><img src="https://img.alicdn.com/imgextra/i3/1797064093/O1CN01n3GYLI1g6e0zAVRM7_!!1797064093.png_.webp" alt="rolescal" loading="lazy"></p>',8)),a("ul",null,[a("li",null,[n[6]||(n[6]=e("添加完毕后，您可在“养成计划”功能中查看“已添加的养成目标” ")),a("ul",null,[a("li",null,[n[4]||(n[4]=e("关于养成计划功能的详细说明，请见")),i(s,{to:"/zh/features/develop-plan.html#%E5%85%BB%E6%88%90%E8%AE%A1%E5%88%92"},{default:l(()=>n[3]||(n[3]=[e("养成计划")])),_:1}),n[5]||(n[5]=e("文档"))])])])]),n[9]||(n[9]=t(`<h2 id="导出角色详情至剪贴板" tabindex="-1"><a class="header-anchor" href="#导出角色详情至剪贴板"><span>导出角色详情至剪贴板</span></a></h2><ul><li>在“我的角色”页面中，你可以选择一个角色后点击右上角的“导出文本到剪贴板”按钮以将角色数据转化为文本形式，这将有助于你分享你的角色信息</li><li>导出的数据储存在系统剪贴板中，你可以在合适的地方直接粘贴以获得该角色信息</li><li>导出文字的样式如下所示</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// =====================</span></span>
<span class="line"><span>// 那维莱特 [Lv.90, ☆5, C2] [Lv.10, Lv.10, Lv.10]</span></span>
<span class="line"><span>// ---------------------</span></span>
<span class="line"><span>// 万世流涌大典 [Lv.90, ☆5, R1]</span></span>
<span class="line"><span>// [基础攻击力: 542] [暴击伤害: 88.2%]</span></span>
<span class="line"><span>// ---------------------</span></span>
<span class="line"><span>// [生命值: 14695]</span></span>
<span class="line"><span>// [攻击力: 750]</span></span>
<span class="line"><span>// [防御力: 576]</span></span>
<span class="line"><span>// [元素精通: 114]</span></span>
<span class="line"><span>// [暴击率: 47.8%]</span></span>
<span class="line"><span>// [暴击伤害: 283.1%]</span></span>
<span class="line"><span>// [治疗加成: 0.0%]</span></span>
<span class="line"><span>// [受治疗加成: 0.0%]</span></span>
<span class="line"><span>// [元素充能效率: 123.3%]</span></span>
<span class="line"><span>// [水元素伤害加成: 0.0%]</span></span>
<span class="line"><span>// ---------------------</span></span>
<span class="line"><span>// 🌷 生命值: 4780 [☆5 +20 逐影猎人]</span></span>
<span class="line"><span>// [元素充能效率: 11.7%][防御力: 39][暴击伤害: 12.4%][暴击率: 7.8%]</span></span>
<span class="line"><span>// 🪶 攻击力: 311 [☆5 +20 逐影猎人]</span></span>
<span class="line"><span>// [暴击伤害: 13.2%][暴击率: 9.7%][防御力: 7.3%][元素精通: 68]</span></span>
<span class="line"><span>// ⏳ 生命值: 46.6% [☆5 +20 逐影猎人]</span></span>
<span class="line"><span>// [防御力: 39][暴击率: 12.8%][暴击伤害: 7.0%][元素精通: 47]</span></span>
<span class="line"><span>// 🍷 生命值: 46.6% [☆5 +20 烬城勇者绘卷]</span></span>
<span class="line"><span>// [暴击伤害: 11.7%][暴击率: 9.3%][攻击力: 5.3%][元素充能效率: 11.7%]</span></span>
<span class="line"><span>// 👑 暴击伤害: 62.2% [☆5 +20 逐影猎人]</span></span>
<span class="line"><span>// [暴击率: 3.1%][生命值: 5.8%][防御力: 83][防御力: 10.2%]</span></span>
<span class="line"><span>// =====================</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3))])}const g=p(c,[["render",u],["__file","character-data.html.vue"]]),b=JSON.parse('{"path":"/zh/features/character-data.html","title":"我的角色","lang":"zh-CN","frontmatter":{"headerDepth":2,"category":["功能","教程"],"tag":["数据统计","角色橱窗"],"order":8,"comment":false,"description":"胡桃工具箱的“我的角色”功能可以读取原神账号下所拥有的角色的具体数据并提供分析，包括等级、命之座、天赋和圣遗物评分等数据。","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://hut.ao/en/features/character-data.html"}],["link",{"rel":"alternate","hreflang":"id-id","href":"https://hut.ao/id/features/character-data.html"}],["link",{"rel":"alternate","hreflang":"ru-ru","href":"https://hut.ao/ru/features/character-data.html"}],["meta",{"property":"og:url","content":"https://hut.ao/zh/features/character-data.html"}],["meta",{"property":"og:site_name","content":"胡桃工具箱"}],["meta",{"property":"og:title","content":"我的角色"}],["meta",{"property":"og:description","content":"胡桃工具箱的“我的角色”功能可以读取原神账号下所拥有的角色的具体数据并提供分析，包括等级、命之座、天赋和圣遗物评分等数据。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.alicdn.com/imgextra/i4/1797064093/O1CN01hK2R3O1g6e0qblXd2_!!1797064093.png_.webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"id-ID"}],["meta",{"property":"og:locale:alternate","content":"ru-RU"}],["meta",{"property":"og:updated_time","content":"2024-09-25T18:43:14.000Z"}],["meta",{"property":"article:tag","content":"数据统计"}],["meta",{"property":"article:tag","content":"角色橱窗"}],["meta",{"property":"article:modified_time","content":"2024-09-25T18:43:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"我的角色\\",\\"image\\":[\\"https://img.alicdn.com/imgextra/i4/1797064093/O1CN01hK2R3O1g6e0qblXd2_!!1797064093.png_.webp\\",\\"https://img.alicdn.com/imgextra/i3/1797064093/O1CN01n3GYLI1g6e0zAVRM7_!!1797064093.png_.webp\\"],\\"dateModified\\":\\"2024-09-25T18:43:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DGP-Studio\\",\\"url\\":\\"https://github.com/DGP-Studio\\"}]}"],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://hut.ao/zh/rss.xml","title":"胡桃工具箱 RSS Feed"}]]},"headers":[{"level":2,"title":"同步角色信息","slug":"同步角色信息","link":"#同步角色信息","children":[]},{"level":2,"title":"将当前选定角色加入养成计算","slug":"将当前选定角色加入养成计算","link":"#将当前选定角色加入养成计算","children":[]},{"level":2,"title":"导出角色详情至剪贴板","slug":"导出角色详情至剪贴板","link":"#导出角色详情至剪贴板","children":[]}],"git":{"createdTime":1668051512000,"updatedTime":1727289794000,"contributors":[{"name":"Masterain","email":"i@irain.in","commits":14},{"name":"Mikachu2333","email":"mikachu.23333@zohomail.com","commits":4},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"qhy040404","email":"qhy040404@163.com","commits":1}]},"readingTime":{"minutes":2.75,"words":824},"filePathRelative":"zh/features/character-data.md","localizedDate":"2022年11月10日"}');export{g as comp,b as data};

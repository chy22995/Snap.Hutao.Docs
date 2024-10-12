import{_ as l,c as i,a as e,b as a,d as r,e as o,f as c,r as s,o as d}from"./app-DNa4_-GM.js";const h={},p={class:"hint-container info"};function g(m,t){const n=s("RouteLink");return d(),i("div",null,[t[7]||(t[7]=e("h1",{id:"my-characters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#my-characters"},[e("span",null,"My Characters")])],-1)),e("div",p,[t[3]||(t[3]=e("p",{class:"hint-container-title"},"Info",-1)),e("p",null,[t[1]||(t[1]=a("This features required sign in to MiHoYo BBS account, please refer to ")),r(n,{to:"/en/features/mhy-account-switch.html"},{default:o(()=>t[0]||(t[0]=[a("MiHoYo BBS Account Switch")])),_:1}),t[2]||(t[2]=a(" document for sign in tutorial"))])]),t[8]||(t[8]=c('<p>My characters is a character statistics feature that allows Snap Hutao to read character&#39;s statistics on the account, including level, constellation, weapon, talent and artifact set; we also provide artifacts rating and CRTI rating for each character.</p><p><img src="https://img.alicdn.com/imgextra/i2/1797064093/O1CN01SpkZag1g6e0sAYQKO_!!1797064093.png_.webp" alt="My Character Screenshot" loading="lazy"></p><h2 id="sync-character-data" tabindex="-1"><a class="header-anchor" href="#sync-character-data"><span>Sync Character Data</span></a></h2><p>Recommended usage:</p><ol><li>Use <code>Sync from MiHoYo BBS - Battle Chronicle</code></li><li>Use <code>Sync from MiHoYo BBS - Enhancement Progression Calculator</code></li><li>Edit the showcase in the game and then <code>Sync from Enka API</code></li></ol><h3 id="sync-from-enka-api" tabindex="-1"><a class="header-anchor" href="#sync-from-enka-api"><span>Sync from Enka API</span></a></h3><div class="hint-container info"><p class="hint-container-title">Synchronous Feature</p><ul><li>Enka API sync data from characters displayed in the in-game character showcase <ul><li>Data includes Artifacts detail data, weapon detail data, talent data</li><li>Character costume</li><li>This sync method only support 8 characters at a time</li></ul></li></ul></div><ul><li>In the game, put <strong>characters that you need detailed data</strong> into the showcase <ul><li>The character showcase allows up to 8 characters at the same time</li></ul></li><li>You need to wait for data sync to complete after editing the showcase configuration <ul><li>You may need up to 5 minutes after enable the showcase or re-config the showcase</li></ul></li><li>Enter <code>My Characters</code> page in the Snap Hutao, Click <code>Sync Character Data</code> button on the top-right</li><li>Select <code>Sync from Enka API</code></li></ul><h3 id="sync-from-mihoyo-bbs-battle-chronicle" tabindex="-1"><a class="header-anchor" href="#sync-from-mihoyo-bbs-battle-chronicle"><span>Sync from MiHoYo BBS - Battle Chronicle</span></a></h3><div class="hint-container info"><p class="hint-container-title">Synchronous Feature</p><ul><li>Data in this sync method comes from My Characters feature in MiHoYo official BSS <ul><li>This method does not contain any artifacts data</li><li>This method can sync all characters data at a time</li></ul></li></ul></div><ul><li>Enter <code>My Characters</code> page in the Snap Hutao, Click <code>Sync Character Data</code> button on the top-right</li><li>Select <code>Sync from MiHoYo BBS My Characters</code></li></ul><h3 id="sync-from-mihoyo-bbs-enhancement-progression-calculator" tabindex="-1"><a class="header-anchor" href="#sync-from-mihoyo-bbs-enhancement-progression-calculator"><span>Sync from MiHoYo BBS - Enhancement Progression Calculator</span></a></h3><div class="hint-container info"><p class="hint-container-title">Synchronous Feature</p><ul><li>Data in this method comes from <code>Enhancement Progression Calculator</code> feature in MiHoYo official BBS tool set <ul><li>This sync method contains talent level data</li><li>This sync method can sync all characters data at a time</li></ul></li></ul></div><ul><li>Enter <code>My Characters</code> page in the Snap Hutao, Click <code>Sync Character Data</code> button on the top-right</li><li>Select <code>Sync from MiHoYo BBS Developement Plan</code></li></ul><h2 id="comparison-of-synchronization-methods" tabindex="-1"><a class="header-anchor" href="#comparison-of-synchronization-methods"><span>Comparison of Synchronization Methods</span></a></h2><table><thead><tr><th style="text-align:center;"><strong>Comparison</strong></th><th style="text-align:center;"><strong>In-game Showcase (Enka API)</strong></th><th style="text-align:center;"><strong>Battle Chronicle</strong></th><th style="text-align:center;"><strong>Enhancement Progression Calculator</strong></th></tr></thead><tbody><tr><td style="text-align:center;"><strong>Number of Characters</strong></td><td style="text-align:center;">8</td><td style="text-align:center;">All</td><td style="text-align:center;">All</td></tr><tr><td style="text-align:center;"><strong>Character Level</strong></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:center;"><strong>Character Constellation</strong></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:center;"><strong>Character Friendship</strong></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:center;"><strong>Weapon Level</strong></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:center;"><strong>Weapon Refinement Rank</strong></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:center;"><strong>Talents</strong></td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td></tr><tr><td style="text-align:center;"><strong>Costume</strong></td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:center;"><strong>artifact</strong></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:center;"><strong>artifact details</strong></td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td></tr></tbody></table><h2 id="add-selected-character-to-development-plan" tabindex="-1"><a class="header-anchor" href="#add-selected-character-to-development-plan"><span>Add Selected Character to Development Plan</span></a></h2><ul><li>Enter <code>My Characters</code> page in the Snap Hutao, click on character you need to add to Enhancement Progression Calculator</li><li>Click on <code>Development Plan</code> and enter target level <ul><li><strong>Synchronized data of the character</strong> will be pre-filled into current level, and you can change the target level</li></ul></li></ul><p><img src="https://img.alicdn.com/imgextra/i4/1797064093/O1CN01Ynvyso1g6e0tMntA3_!!1797064093.png_.webp" alt="rolescal" loading="lazy"></p><ul><li>After adding successfully, you can find added Enhancement Progression Calculator in the <code>Dev Plan</code> page in Snap Hutao</li></ul>',20)),e("p",null,[t[5]||(t[5]=a("For tutorial of Dev Plan feature, please refer to ")),r(n,{to:"/en/features/develop-plan.html"},{default:o(()=>t[4]||(t[4]=[a("Dev Plan")])),_:1}),t[6]||(t[6]=a(" document"))]),t[9]||(t[9]=e("h2",{id:"export-as-image",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#export-as-image"},[e("span",null,"Export as Image")])],-1)),t[10]||(t[10]=e("ul",null,[e("li",null,[a("In "),e("code",null,"My Characters"),a(" page, you can select a character and then click "),e("code",null,"Export as Image"),a(" button to create image with your character's data, this will help you to share your character's data")]),e("li",null,"The exported image is stored in your clipboard, and you can paste it wherever you need"),e("li",null,"A sample exported image is shown below")],-1)),t[11]||(t[11]=e("p",null,[e("img",{src:"https://img.alicdn.com/imgextra/i1/1797064093/O1CN01qdWCvd1g6e0zFwB91_!!1797064093.png_.webp",alt:"sample-output-image",loading:"lazy"})],-1))])}const u=l(h,[["render",g],["__file","character-data.html.vue"]]),f=JSON.parse('{"path":"/en/features/character-data.html","title":"My Characters","lang":"en-US","frontmatter":{"headerDepth":2,"category":["Feature","Tutorial"],"tag":["Character showcase","Character statistics"],"order":8,"comment":false,"description":"The \\"My Characters\\" feature in Snap Hutao can retrieve and display specific data of the characters owned within a Genshin Impact account. It provides analytical data such as character level, constellations, talents, and artifact ratings.","gitInclude":[],"head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://hut.ao/zh/features/character-data.html"}],["link",{"rel":"alternate","hreflang":"id-id","href":"https://hut.ao/id/features/character-data.html"}],["link",{"rel":"alternate","hreflang":"ru-ru","href":"https://hut.ao/ru/features/character-data.html"}],["meta",{"property":"og:url","content":"https://hut.ao/en/features/character-data.html"}],["meta",{"property":"og:site_name","content":"Snap Hutao"}],["meta",{"property":"og:title","content":"My Characters"}],["meta",{"property":"og:description","content":"The \\"My Characters\\" feature in Snap Hutao can retrieve and display specific data of the characters owned within a Genshin Impact account. It provides analytical data such as character level, constellations, talents, and artifact ratings."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.alicdn.com/imgextra/i2/1797064093/O1CN01SpkZag1g6e0sAYQKO_!!1797064093.png_.webp"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"id-ID"}],["meta",{"property":"og:locale:alternate","content":"ru-RU"}],["meta",{"property":"article:tag","content":"Character showcase"}],["meta",{"property":"article:tag","content":"Character statistics"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"My Characters\\",\\"image\\":[\\"https://img.alicdn.com/imgextra/i2/1797064093/O1CN01SpkZag1g6e0sAYQKO_!!1797064093.png_.webp\\",\\"https://img.alicdn.com/imgextra/i4/1797064093/O1CN01Ynvyso1g6e0tMntA3_!!1797064093.png_.webp\\",\\"https://img.alicdn.com/imgextra/i1/1797064093/O1CN01qdWCvd1g6e0zFwB91_!!1797064093.png_.webp\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DGP-Studio\\",\\"url\\":\\"https://github.com/DGP-Studio\\"}]}"],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://hut.ao/en/rss.xml","title":"Snap Hutao RSS Feed"}]]},"headers":[{"level":2,"title":"Sync Character Data","slug":"sync-character-data","link":"#sync-character-data","children":[{"level":3,"title":"Sync from Enka API","slug":"sync-from-enka-api","link":"#sync-from-enka-api","children":[]},{"level":3,"title":"Sync from MiHoYo BBS - Battle Chronicle","slug":"sync-from-mihoyo-bbs-battle-chronicle","link":"#sync-from-mihoyo-bbs-battle-chronicle","children":[]},{"level":3,"title":"Sync from MiHoYo BBS - Enhancement Progression Calculator","slug":"sync-from-mihoyo-bbs-enhancement-progression-calculator","link":"#sync-from-mihoyo-bbs-enhancement-progression-calculator","children":[]}]},{"level":2,"title":"Comparison of Synchronization Methods","slug":"comparison-of-synchronization-methods","link":"#comparison-of-synchronization-methods","children":[]},{"level":2,"title":"Add Selected Character to Development Plan","slug":"add-selected-character-to-development-plan","link":"#add-selected-character-to-development-plan","children":[]},{"level":2,"title":"Export as Image","slug":"export-as-image","link":"#export-as-image","children":[]}],"readingTime":{"minutes":2,"words":599},"filePathRelative":"en/features/character-data.md"}');export{u as comp,f as data};

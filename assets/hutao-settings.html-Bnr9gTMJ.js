import{_ as h,r as n,o as c,c as u,a as e,b as t,d as a,w as r,e as l}from"./app-CkcpcBi1.js";const d={},p=l('<h1 id="software-settings" tabindex="-1"><a class="header-anchor" href="#software-settings"><span>Software Settings</span></a></h1><p><img src="https://img.alicdn.com/imgextra/i1/1797064093/O1CN01m1CSiq1g6e0utDIKD_!!1797064093.png" alt="settings" loading="lazy"> The following feature tutorials are introduced in-program order.</p><h2 id="about-snap-hutao" tabindex="-1"><a class="header-anchor" href="#about-snap-hutao"><span>About Snap Hutao</span></a></h2><p>This part has the following information:</p>',4),m={href:"https://space.bilibili.com/274422134",target:"_blank",rel:"noopener noreferrer"},g={class:"hint-container details"},f=e("summary",null,"Drawing Process",-1),y={href:"https://github.com/DGP-Studio",target:"_blank",rel:"noopener noreferrer"},b=e("h2",{id:"snap-hutao-account",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#snap-hutao-account"},[e("span",null,"Snap Hutao Account")])],-1),w=e("p",null,"You can sign up and sign in your Snap Hutao Account in settings page.",-1),S=l('<h2 id="administrator-mode-tools" tabindex="-1"><a class="header-anchor" href="#administrator-mode-tools"><span>Administrator Mode Tools</span></a></h2><p>On the right side of the settings page, the development team has set up an administrator mode tool for users who need it. Under this module, we provide two functions:</p><ol><li>Restart the program immediately as an administrator</li><li>Create a PowerShell shortcut on the desktop to start Hutao as administrator</li></ol><h2 id="captcha" tabindex="-1"><a class="header-anchor" href="#captcha"><span>CAPTCHA</span></a></h2><blockquote><p>This feature is most likely to be useful for CN server (MiYouShe) users</p></blockquote><p>If daily check-in and realtime notes functions are essential for you, then the <code>-1034</code> error from miHoYo&#39;s anti-bot verification will definitely be a major interference. This is because miHoYo uses Geetest to intercept requests directly executed by non-humans, and some requests from Snap Hutao will be judged by Geetest as robot behavior and cause request failure. If you use a third-party service to verify the Geetest captcha, you can pass the random data generated by Geetest to the verification service provider through this setting.</p><p>After successfully configuring this setting, Snap Hutao will directly call this verification service to pass the Geetest verification when performing real-time note automatic refresh and miHoYo community check-in, avoiding the generation of -1034 error by miHoYo.</p><h2 id="appearance" tabindex="-1"><a class="header-anchor" href="#appearance"><span>Appearance</span></a></h2><ul><li><p>Language</p><ul><li>Snap Hutao will following system language setting by default</li><li>You can force to change to another language in the settings page</li></ul></li><li><p>Backdrop Material</p><ul><li>In this option, you can change the backdrop material of the software to <ul><li>Acrylic</li><li>Mica (Windows 11 only)</li><li>MicaAlt (Windows 11 only)</li></ul></li><li>The setting will take effect immediately</li></ul></li></ul><h2 id="shortcut-keys" tabindex="-1"><a class="header-anchor" href="#shortcut-keys"><span>Shortcut Keys</span></a></h2><p>In this module, you can enable and change the setting of auto-click shortcut key</p><h2 id="home" tabindex="-1"><a class="header-anchor" href="#home"><span>Home</span></a></h2><ul><li>Dashboard Card <ul><li>You can click on this option to switch display of card on Home Dashboard <ul><li>Game Launcher</li><li>Wish History</li><li>Achievement</li><li>Realtime Notes</li></ul></li></ul></li><li>Announcement Server <ul><li>You can change source of in-game announcement in this field</li></ul></li></ul><h2 id="game" tabindex="-1"><a class="header-anchor" href="#game"><span>Game</span></a></h2><ul><li>Delete Game Embedded Browser Web Cache <ul><li>When you are using web cache refresh method in the wish history feature and receiving authkey expiration error, you can try this operation to fix the error</li><li>Click on this field to execute the operation</li></ul></li></ul><h2 id="wish-history" tabindex="-1"><a class="header-anchor" href="#wish-history"><span>Wish History</span></a></h2><ul><li>In this field, you can choose to hide wish event that you do not have any record in the period in the wish export feature</li></ul><h2 id="storage" tabindex="-1"><a class="header-anchor" href="#storage"><span>Storage</span></a></h2><ul><li>Data Folder <ul><li><code>Open Folder</code>: Click this field to open data folder that contains user data, log, and metadata</li><li><code>Change Data Directory</code>: This field allows you to change the data directory to path you want</li><li><code>Delete Server Conversion Cache</code>: This option allows user to delete server conversion cache file inside of data folder</li></ul></li><li>Cache Folder <ul><li><code>Open Folder</code>: Click this field will open cache folder that saves image assets used by Snap Hutao</li><li><code>Reset Image Resource</code>: This option allows user to reset image cache when there are too many image failed to load. The program will re-download images resource at next start-up</li></ul></li></ul><h2 id="dangerous-features" tabindex="-1"><a class="header-anchor" href="#dangerous-features"><span>Dangerous Features</span></a></h2><div class="hint-container important"><p class="hint-container-title">Important</p><p>Using any feature within the &quot;Dangerous Features&quot; will trigger a secondary confirmation prompt. You may be asked to enter the <strong>title name</strong> of the feature that is currently being requested to be enabled.</p></div>',21),_=e("li",null,[t("Debug Console "),e("ul",null,[e("li",null,"After enabling this feature, a command line window containing real-time logs will be enabled the next time you start the Hutao Toolbox. You can obtain error information that may be helpful to you through this window.")])],-1),v=e("p",null,"For reference：",-1),k={href:"https://ys.mihoyo.com/main/company/agreement",target:"_blank",rel:"noopener noreferrer"},H={href:"https://genshin.hoyoverse.com/en/company/terms",target:"_blank",rel:"noopener noreferrer"},x=e("li",null,[t("Delete All Users "),e("ul",null,[e("li",null,"Execute this operation will delete all user data in Snap Hutao"),e("li",null,"Click on the field to operate, you will be asked to confirm"),e("li",null,"In most scenario, you don't need to use this field")])],-1);function T(C,D){const i=n("RouteLink"),o=n("ExternalLinkIcon"),s=n("BiliBili");return c(),u("div",null,[p,e("ul",null,[e("li",null,[t("The icon of Snap Hutao：You can find the original image of the icon at the "),a(i,{to:"/"},{default:r(()=>[t("home page")]),_:1}),e("ul",null,[e("li",null,[t("The artist is "),e("a",m,[t("画画的芦苇 (BiliBili)"),a(o)]),e("details",g,[f,a(s,{bvid:"BV1UL411d7Py"})])]),e("li",null,[e("a",y,[t("DGP-Studio"),a(o)]),t(" is authorized by owner to use it for Snap Hutao Project")])])])]),b,w,e("p",null,[t("For more detail about this feature, please refer to "),a(i,{to:"/en/features/hutao-passport.html"},{default:r(()=>[t("Snap Hutao Account")]),_:1}),t(" document.")]),S,e("ul",null,[_,e("li",null,[t("Advanced Features "),e("ul",null,[e("li",null,[t("With Snap Hutao running as administrator, you can enable this field to enable advanced features in the game launcher "),e("blockquote",null,[v,e("p",null,[a(i,{to:"/en/statements/tos.html"},{default:r(()=>[t("Snap Hutao Terms of Service")]),_:1})]),e("p",null,[e("a",k,[t("Genshin Impact Terms of Service (CN server/Chinese)"),a(o)])]),e("p",null,[e("a",H,[t("Genshin Impact Terms of Service (Oversea servers/English)"),a(o)])])])])])]),x])])}const G=h(d,[["render",T],["__file","hutao-settings.html.vue"]]),I=JSON.parse('{"path":"/en/features/hutao-settings.html","title":"Software Settings","lang":"en-US","frontmatter":{"headerDepth":2,"category":["Feature","Tutorial"],"tag":["Snap Hutao Cloud","Geetest verification","Language settings","Advanced settings"],"order":15,"comment":false,"description":"Software Settings settings The following feature tutorials are introduced in-program order. About Snap Hutao This part has the following information: The icon of Snap Hutao：You ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://hut.ao/zh/features/hutao-settings.html"}],["link",{"rel":"alternate","hreflang":"id-id","href":"https://hut.ao/id/features/hutao-settings.html"}],["link",{"rel":"alternate","hreflang":"ru-ru","href":"https://hut.ao/ru/features/hutao-settings.html"}],["meta",{"property":"og:url","content":"https://hut.ao/en/features/hutao-settings.html"}],["meta",{"property":"og:site_name","content":"Snap Hutao"}],["meta",{"property":"og:title","content":"Software Settings"}],["meta",{"property":"og:description","content":"Software Settings settings The following feature tutorials are introduced in-program order. About Snap Hutao This part has the following information: The icon of Snap Hutao：You ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.alicdn.com/imgextra/i1/1797064093/O1CN01m1CSiq1g6e0utDIKD_!!1797064093.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"id-ID"}],["meta",{"property":"og:locale:alternate","content":"ru-RU"}],["meta",{"property":"og:updated_time","content":"2024-02-29T10:16:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Software Settings"}],["meta",{"property":"article:author","content":"DGP-Studio"}],["meta",{"property":"article:tag","content":"Snap Hutao Cloud"}],["meta",{"property":"article:tag","content":"Geetest verification"}],["meta",{"property":"article:tag","content":"Language settings"}],["meta",{"property":"article:tag","content":"Advanced settings"}],["meta",{"property":"article:modified_time","content":"2024-02-29T10:16:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Software Settings\\",\\"image\\":[\\"https://img.alicdn.com/imgextra/i1/1797064093/O1CN01m1CSiq1g6e0utDIKD_!!1797064093.png\\"],\\"dateModified\\":\\"2024-02-29T10:16:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DGP-Studio\\",\\"url\\":\\"https://github.com/DGP-Studio\\"}]}"],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://hut.ao/en/rss.xml","title":"Snap Hutao RSS Feed"}]]},"headers":[{"level":2,"title":"About Snap Hutao","slug":"about-snap-hutao","link":"#about-snap-hutao","children":[]},{"level":2,"title":"Snap Hutao Account","slug":"snap-hutao-account","link":"#snap-hutao-account","children":[]},{"level":2,"title":"Administrator Mode Tools","slug":"administrator-mode-tools","link":"#administrator-mode-tools","children":[]},{"level":2,"title":"CAPTCHA","slug":"captcha","link":"#captcha","children":[]},{"level":2,"title":"Appearance","slug":"appearance","link":"#appearance","children":[]},{"level":2,"title":"Shortcut Keys","slug":"shortcut-keys","link":"#shortcut-keys","children":[]},{"level":2,"title":"Home","slug":"home","link":"#home","children":[]},{"level":2,"title":"Game","slug":"game","link":"#game","children":[]},{"level":2,"title":"Wish History","slug":"wish-history","link":"#wish-history","children":[]},{"level":2,"title":"Storage","slug":"storage","link":"#storage","children":[]},{"level":2,"title":"Dangerous Features","slug":"dangerous-features","link":"#dangerous-features","children":[]}],"git":{"createdTime":1673484663000,"updatedTime":1709201804000,"contributors":[{"name":"Masterain","email":"i@irain.in","commits":11},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":2.54,"words":761},"filePathRelative":"en/features/hutao-settings.md","localizedDate":"January 12, 2023","autoDesc":true}');export{G as comp,I as data};
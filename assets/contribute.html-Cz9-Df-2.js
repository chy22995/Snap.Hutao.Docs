import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as i,c as s,a as e,b as t,d as o,e as c}from"./app-Bk0SziEX.js";const u={},d=e("h1",{id:"внесение-своего-вклада-в-код",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#внесение-своего-вклада-в-код"},[e("span",null,"Внесение своего вклада в код")])],-1),p=e("p",null,"Snap Hutao использует C# и .NET Framework для разработки клиента и сервера. Если вы хотите внести свой вклад в проект, ознакомьтесь с следующими рекомендациями.",-1),h={href:"https://github.com/DGP-Studio/Snap.Hutao/issues?q=is%3Aissue+is%3Aopen+-label%3A%E5%B7%B2%E4%BF%AE%E5%A4%8D+",target:"_blank",rel:"noopener noreferrer"},m={id:"настроика-проекта-snap-hutao",tabindex:"-1"},_={class:"header-anchor",href:"#настроика-проекта-snap-hutao"},g={href:"https://visualstudio.microsoft.com/downloads/",target:"_blank",rel:"noopener noreferrer"},f=c("<li>Откройте установщик Visual Studio, чтобы завершить установку. <ul><li>Вам нужно установить компоненты <code>.NET desktop development</code>, <code>Desktop development with C++</code> и <code>Universal Windows Platform development</code>.</li></ul></li><li>Установите <code>Single-project MSIX Packaging Tools for VS 2022</code>, предоставленный Microsoft в магазине расширений Visual Studio.</li><li>Используйте git, чтобы клонировать проект <code>https://github.com/DGP-Studio/Snap.Hutao.git</code> на свое устройство.</li><li>Переключитесь на ветку git <code>develop</code>.</li><li>Откройте решение проекта в Visual Studio, и теперь вы готовы начать.</li>",5),b={id:"включение-отладки",tabindex:"-1"},S={class:"header-anchor",href:"#включение-отладки"},k=e("code",null,"Sysinternals Suite",-1),v={href:"https://www.microsoft.com/store/productid/9P7KNL5RWT25",target:"_blank",rel:"noopener noreferrer"},y={href:"https://learn.microsoft.com/en-us/sysinternals/downloads/sysinternals-suite",target:"_blank",rel:"noopener noreferrer"},H=e("li",null,[t("Найдите и запустите программу "),e("code",null,"DebugView"),t(" в установленном списке приложений или распакованной папке.")],-1),w=e("li",null,"Запустите клиент Snap Hutao.",-1),x=e("li",null,"Проверьте вывод DebugView.",-1),P={id:"создание-запроса-на-внесение-изменении-pull-request",tabindex:"-1"},D={class:"header-anchor",href:"#создание-запроса-на-внесение-изменении-pull-request"},T=e("li",null,[t("Все изменения кода из веток авторов могут быть вливаемы только в ветку "),e("code",null,"develop"),t(".")],-1),E={href:"https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/using-keywords-in-issues-and-pull-requests",target:"_blank",rel:"noopener noreferrer"},G=e("code",null,"main",-1),N={id:"тестирование-двоичного-пакета",tabindex:"-1"},V={class:"header-anchor",href:"#тестирование-двоичного-пакета"},z=e("code",null,"develop",-1),C=e("code",null,"main",-1),q=e("code",null,"Snap Hutao Alpha",-1),I={href:"https://github.com/DGP-Studio/Snap.Hutao/releases",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/DGP-Studio/Snap.Hutao/releases/download/2023.10.3.1/Snap.Hutao.CI.cer",target:"_blank",rel:"noopener noreferrer"},R=e("p",null,"*Если последний релиз не содержит прикрепленного файла, это означает, что пакет все еще находится в процессе загрузки.",-1);function B(F,M){const n=r("ExternalLinkIcon"),l=r("HopeIcon");return i(),s("div",null,[d,p,e("p",null,[t("Вы можете найти все "),e("a",h,[t("нерешенные открытые задачи"),o(n)]),t(" на GitHub.")]),e("h2",m,[e("a",_,[e("span",null,[o(l,{icon:"iconfont icon-visual-studio",size:"1.5rem",color:"rgb(193,142,241)"}),t(" Настройка проекта Snap.Hutao")])])]),e("ol",null,[e("li",null,[t("Скачайте и установите "),e("a",g,[t("Visual Studio 2022 Community"),o(n)]),t(".")]),f]),e("h2",b,[e("a",S,[e("span",null,[o(l,{icon:"iconfont icon-debug",size:"1.5rem",color:"rgb(73,156,84)"}),t(" Включение отладки")])])]),e("ol",null,[e("li",null,[t("Скачайте и установите "),k,t(" из "),e("a",v,[t("Microsoft Store"),o(n)]),t(" или "),e("a",y,[t("сайта Microsoft"),o(n)]),t(".")]),H,w,x]),e("h2",P,[e("a",D,[e("span",null,[o(l,{icon:"iconfont icon-pull-request",size:"1.5rem",color:"rgb(130,80,223)"}),t(" Создание запроса на внесение изменений (Pull Request)")])])]),e("ul",null,[T,e("li",null,[t("Пожалуйста, используйте "),e("a",E,[t("ключевые слова"),o(n)]),t(" для связи ваших запросов на внесение изменений или коммитов с задачами, чтобы задачи автоматически закрывались после вливания коммитов в ветку "),G,t(".")])]),e("h2",N,[e("a",V,[e("span",null,[o(l,{icon:"iconfont icon-build-package",size:"1.5rem",color:"rgb(254,189,105)"}),t(" Тестирование двоичного пакета")])])]),e("p",null,[t("Как только код обновляется в ветках "),z,t(" и "),C,t(", скрипт Azure Pipeline CI соберет последний код в пакет "),q,t(". После построения пакета он будет выпущен на "),e("a",I,[t("странице релизов GitHub"),o(n)]),t(" в качестве предварительно выпущенного пакета.")]),e("p",null,[t("Вам нужно установить сертификат "),e("a",A,[t("Snap.Hutao.CI.cer"),o(n)]),t(" на свое устройство, а затем установить msix-пакет из релиза.")]),R])}const Z=a(u,[["render",B],["__file","contribute.html.vue"]]),j=JSON.parse('{"path":"/ru/development/contribute.html","title":"Внесение своего вклада в код","lang":"ru-RU","frontmatter":{"category":["open source","development"],"tag":["development","GitHub"],"icon":"iconfont icon-code","order":2,"description":"Внесение своего вклада в код Snap Hutao использует C# и .NET Framework для разработки клиента и сервера. Если вы хотите внести свой вклад в проект, ознакомьтесь с следующими рек...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://hut.ao/zh/development/contribute.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://hut.ao/en/development/contribute.html"}],["link",{"rel":"alternate","hreflang":"id-id","href":"https://hut.ao/id/development/contribute.html"}],["meta",{"property":"og:url","content":"https://hut.ao/ru/development/contribute.html"}],["meta",{"property":"og:site_name","content":"Snap Hutao"}],["meta",{"property":"og:title","content":"Внесение своего вклада в код"}],["meta",{"property":"og:description","content":"Внесение своего вклада в код Snap Hutao использует C# и .NET Framework для разработки клиента и сервера. Если вы хотите внести свой вклад в проект, ознакомьтесь с следующими рек..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ru-RU"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"id-ID"}],["meta",{"property":"og:updated_time","content":"2023-12-19T17:05:50.000Z"}],["meta",{"property":"article:author","content":"DGP-Studio"}],["meta",{"property":"article:tag","content":"development"}],["meta",{"property":"article:tag","content":"GitHub"}],["meta",{"property":"article:modified_time","content":"2023-12-19T17:05:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Внесение своего вклада в код\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-19T17:05:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DGP-Studio\\",\\"url\\":\\"https://github.com/DGP-Studio\\"}]}"],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://hut.ao/ru/rss.xml","title":"Snap Hutao RSS Feed"}]]},"headers":[{"level":2,"title":"Настройка проекта Snap.Hutao","slug":"настроика-проекта-snap-hutao","link":"#настроика-проекта-snap-hutao","children":[]},{"level":2,"title":"Включение отладки","slug":"включение-отладки","link":"#включение-отладки","children":[]},{"level":2,"title":"Создание запроса на внесение изменений (Pull Request)","slug":"создание-запроса-на-внесение-изменении-pull-request","link":"#создание-запроса-на-внесение-изменении-pull-request","children":[]},{"level":2,"title":"Тестирование двоичного пакета","slug":"тестирование-двоичного-пакета","link":"#тестирование-двоичного-пакета","children":[]}],"git":{"createdTime":1703005550000,"updatedTime":1703005550000,"contributors":[{"name":"QweRez","email":"xtoyougg@gmail.com","commits":1}]},"readingTime":{"minutes":1.31,"words":394},"filePathRelative":"ru/development/contribute.md","localizedDate":"19 декабря 2023 г.","autoDesc":true}');export{Z as comp,j as data};

import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as r,c as s,a as e,b as t,d as o,e as a}from"./app-Bk0SziEX.js";const p={},c=e("h1",{id:"общие-исключения-программы",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#общие-исключения-программы"},[e("span",null,"Общие исключения программы")])],-1),d=e("p",null,[t("Этот документ содержит решения "),e("strong",null,"предсказуемых ошибок клиента"),t(".")],-1),h=e("h2",{id:"ошибка-runtimeenvironmentexception",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ошибка-runtimeenvironmentexception"},[e("span",null,"Ошибка RuntimeEnvironmentException")])],-1),u=e("li",null,[t("Исключение: "),e("code",null,"RuntimeEnvironmentException"),e("ul",null,[e("li",null,[t("Подсказка: "),e("code",null,"Unable to set registry key without enabling long path")])])],-1),m=e("li",null,"Источник проблемы: Предел длины пути в Windows по умолчанию установлен на 256 символов.",-1),g={href:"https://d.hut.ao/d/tools/EnableLongPaths.zip",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,".reg",-1),f=a('<h2 id="код-возврата-10001" tabindex="-1"><a class="header-anchor" href="#код-возврата-10001"><span>Код возврата: -10001</span></a></h2><ul><li>Эта ошибка поступает напрямую из MiHoYo BBS, подсказки включают <ul><li><code>Return Code: -10001</code></li><li><code>Return Code: -100</code></li></ul></li><li>Источник проблемы <ol><li>Истек срок действия куки</li><li>Ошибка сети</li><li>Неточное системное время</li></ol></li><li>Решение <ol><li>В панели учетной записи выполните <code>Refresh Cookies</code></li><li>Удалите свою учетную запись и добавьте ее заново</li><li>Синхронизируйте системное время</li></ol></li></ul><h2 id="код-возврата-1034-проверка-не-удалась" tabindex="-1"><a class="header-anchor" href="#код-возврата-1034-проверка-не-удалась"><span>Код возврата: 1034 Проверка не удалась</span></a></h2><ul><li>Если Snap Hutao возвращает код состояния <code>1034</code> и указывает, что проверка не удалась (обычно во время операции Realtime Notes), это означает, что операция заблокирована системой MiHoYo BBS для борьбы с ботами</li><li>Решение: <ul><li>Зайдите в раздел <code>Realtime Notes</code></li><li>Нажмите кнопку <code>Verify Current User and Role</code></li><li>Следуйте инструкциям на сайте MiHoYo BBS для верификации</li><li>По завершении процесса верификации нажмите <code>Complete</code>, чтобы закрыть окно верификации</li><li>Теперь учетная запись должна вернуться к нормальному состоянию; Если нет, выполните шаги выше еще раз<div class="hint-container tip"><p class="hint-container-title">Совет</p></div></li></ul></li></ul><p>Если риск предупреждения слишком часто возникает, или верификация не может быть запущена вообще, это означает, что риск вашей учетной записи слишком велик; измените пароль, чтобы сбросить статус одновременного входа с нескольких устройств</p><p>:::</p><div class="hint-container warning"><p class="hint-container-title">Примечание</p><ul><li>Вы вряд ли сможете пройти незаметную верификацию, когда ваша учетная запись <strong>входит в другие удаленные инструменты Genshin</strong> или <strong>входит с нескольких устройств</strong>. Это функция безопасности MiHoYo BBS и не может быть обойдена</li><li>Если вы используете <strong>несколько учетных записей MiHoYo BBS на своем устройстве</strong>, <strong>частое использование с использованием API MiHoYo BBS</strong> приведет к блокировке вашего IP-адреса на определенное время (обычно не более 24 часов). Это функция безопасности MiHoYo BBS и не может быть обойдена</li></ul></div><h2 id="httprequestexception-metadata-download-failed" tabindex="-1"><a class="header-anchor" href="#httprequestexception-metadata-download-failed"><span>HttpRequestException Metadata Download Failed</span></a></h2><h3 id="_403-forbidden-404-not-found" tabindex="-1"><a class="header-anchor" href="#_403-forbidden-404-not-found"><span>403 (Forbidden) / 404 (Not Found)</span></a></h3><p>Решение: Обновите Snap Hutao до последней версии</p><h3 id="_502-bad-gateway" tabindex="-1"><a class="header-anchor" href="#_502-bad-gateway"><span>502 (Bad Gateway)</span></a></h3>',11),x={href:"https://github.com/DGP-Studio/Snap.Hutao/issues/100",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,"Это исключение HTTP возникает, когда Snap Hutao не может получить удаленный ресурс (обычно статическое изображение и конфигурацию)",-1),b=e("p",null,[e("img",{src:"https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Tb2RUm1g6du5YeNuy_!!1797064093.jpg",alt:"HttpRequestException",loading:"lazy"})],-1),v={href:"https://www.telerik.com/fiddler/add-ons",target:"_blank",rel:"noopener noreferrer"},y={href:"https://learn.microsoft.com/zh-CN/windows/iot-core/develop-your-app/loopback",target:"_blank",rel:"noopener noreferrer"},w=a(`<p>Вы также можете выполнить следующий сценарий PowerShell, чтобы удалить все ограничения контейнера loopback</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token keyword">FOR</span> <span class="token operator">/</span>F <span class="token string">&quot;tokens=11 delims=\\&quot;</span> <span class="token operator">%</span>p IN <span class="token punctuation">(</span><span class="token string">&#39;REG QUERY &quot;HKCU\\Software\\Classes\\Local Settings\\Software\\Microsoft\\Windows\\CurrentVersion\\AppContainer\\Mappings&quot;&#39;</span><span class="token punctuation">)</span> <span class="token keyword">DO</span> CheckNetIsolation<span class="token punctuation">.</span>exe LoopbackExempt <span class="token operator">-</span>a <span class="token operator">-</span>p=<span class="token operator">%</span>p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="ошибка-поиска-требуемых-модулеи" tabindex="-1"><a class="header-anchor" href="#ошибка-поиска-требуемых-модулеи"><span>Ошибка поиска требуемых модулей</span></a></h2><p>Когда пользователь запускает игру с включенной функцией разблокировки частоты кадров, игра может не запускаться, и появится следующая ошибка:</p><ol><li>Ошибка поиска требуемых модулей: не удалось прочитать ни одного модуля, драйвер защиты может быть загружен</li><li>Ошибка поиска требуемых модулей: тайм-аут</li></ol><p>Эта проблема возникает только тогда, когда модуль анти-чита Genshin Impact запускается раньше модуля разблокировки частоты кадров. Когда возникают эти ошибки, Snap Hutao завершит процесс игры, и вы можете перезапустить игру.</p>`,6);function S(R,E){const n=l("ExternalLinkIcon");return r(),s("div",null,[c,d,h,e("ul",null,[u,m,e("li",null,[t("Решение: Скачайте "),e("a",g,[t("EnableLongPaths.zip"),o(n)]),t(", извлеките его и запустите файл "),_,t(".")])]),f,e("blockquote",null,[e("p",null,[t("Связанная проблема: "),e("a",x,[t("https://github.com/DGP-Studio/Snap.Hutao/issues/100"),o(n)])])]),k,b,e("p",null,[t("Если вы используете программное обеспечение прокси, вам может потребоваться отключить его или использовать прокси-режим TUN; в противном случае вам нужно использовать "),e("a",v,[t("Windows 8 AppContainer Loopback Utility"),o(n)]),t(", чтобы удалить "),e("a",y,[t("Ограничения Windows APP Container Loopback"),o(n)]),t(".")]),w])}const B=i(p,[["render",S],["__file","exceptions.html.vue"]]),C=JSON.parse('{"path":"/ru/advanced/exceptions.html","title":"Общие исключения программы","lang":"ru-RU","frontmatter":{"headerDepth":2,"icon":"iconfont icon-warn","category":["FAQ"],"order":2,"comment":false,"description":"Общие исключения программы Этот документ содержит решения предсказуемых ошибок клиента. Ошибка RuntimeEnvironmentException Исключение: RuntimeEnvironmentException Подсказка: Una...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://hut.ao/zh/advanced/exceptions.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://hut.ao/en/advanced/exceptions.html"}],["link",{"rel":"alternate","hreflang":"id-id","href":"https://hut.ao/id/advanced/exceptions.html"}],["meta",{"property":"og:url","content":"https://hut.ao/ru/advanced/exceptions.html"}],["meta",{"property":"og:site_name","content":"Snap Hutao"}],["meta",{"property":"og:title","content":"Общие исключения программы"}],["meta",{"property":"og:description","content":"Общие исключения программы Этот документ содержит решения предсказуемых ошибок клиента. Ошибка RuntimeEnvironmentException Исключение: RuntimeEnvironmentException Подсказка: Una..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Tb2RUm1g6du5YeNuy_!!1797064093.jpg"}],["meta",{"property":"og:locale","content":"ru-RU"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"id-ID"}],["meta",{"property":"og:updated_time","content":"2024-01-01T11:52:09.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Общие исключения программы"}],["meta",{"property":"article:author","content":"DGP-Studio"}],["meta",{"property":"article:modified_time","content":"2024-01-01T11:52:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Общие исключения программы\\",\\"image\\":[\\"https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Tb2RUm1g6du5YeNuy_!!1797064093.jpg\\"],\\"dateModified\\":\\"2024-01-01T11:52:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DGP-Studio\\",\\"url\\":\\"https://github.com/DGP-Studio\\"}]}"],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://hut.ao/ru/rss.xml","title":"Snap Hutao RSS Feed"}]]},"headers":[{"level":2,"title":"Ошибка RuntimeEnvironmentException","slug":"ошибка-runtimeenvironmentexception","link":"#ошибка-runtimeenvironmentexception","children":[]},{"level":2,"title":"Код возврата: -10001","slug":"код-возврата-10001","link":"#код-возврата-10001","children":[]},{"level":2,"title":"Код возврата: 1034 Проверка не удалась","slug":"код-возврата-1034-проверка-не-удалась","link":"#код-возврата-1034-проверка-не-удалась","children":[]},{"level":2,"title":"HttpRequestException Metadata Download Failed","slug":"httprequestexception-metadata-download-failed","link":"#httprequestexception-metadata-download-failed","children":[{"level":3,"title":"403 (Forbidden) / 404 (Not Found)","slug":"_403-forbidden-404-not-found","link":"#_403-forbidden-404-not-found","children":[]},{"level":3,"title":"502 (Bad Gateway)","slug":"_502-bad-gateway","link":"#_502-bad-gateway","children":[]}]},{"level":2,"title":"Ошибка поиска требуемых модулей","slug":"ошибка-поиска-требуемых-модулеи","link":"#ошибка-поиска-требуемых-модулеи","children":[]}],"git":{"createdTime":1703005550000,"updatedTime":1704109929000,"contributors":[{"name":"Masterain","email":"i@irain.in","commits":1},{"name":"QweRez","email":"xtoyougg@gmail.com","commits":1}]},"readingTime":{"minutes":1.73,"words":518},"filePathRelative":"ru/advanced/exceptions.md","localizedDate":"19 декабря 2023 г.","autoDesc":true}');export{B as comp,C as data};

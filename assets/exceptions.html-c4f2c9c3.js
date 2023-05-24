import{_ as i,Y as l,Z as r,$ as e,a0 as t,a1 as o,a3 as a,F as s}from"./framework-8be3ab77.js";const d={},c=e("h1",{id:"常见的程序异常",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#常见的程序异常","aria-hidden":"true"},"#"),t(" 常见的程序异常")],-1),h=e("p",null,[t("该文档包含由"),e("strong",null,"用户端错误"),t("造成的问题")],-1),u=e("h2",{id:"runtimeenvironmentexception",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#runtimeenvironmentexception","aria-hidden":"true"},"#"),t(" RuntimeEnvironmentException")],-1),p=e("li",null,[t("异常："),e("code",null,"RuntimeEnvironmentException"),e("ul",null,[e("li",null,[t("提示："),e("code",null,"未开启长路径功能，无法设置注册表键值")])])],-1),_=e("li",null,"问题来源：没有解除 Windows 目录长度限制",-1),g={href:"https://d.hut.ao/d/tools/EnableLongPaths.zip",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,".reg",-1),b=a('<h2 id="return-code-10001" tabindex="-1"><a class="header-anchor" href="#return-code-10001" aria-hidden="true">#</a> Return Code: -10001</h2><ul><li>该异常实际上来源于米游社的返回信息，包括： <ul><li><code>Return Code: -10001</code></li><li><code>Return Code: -100</code></li></ul></li><li>问题来源： <ol><li>Cookie 过期或网络异常</li><li>系统时间错误</li></ol></li><li>解决方案： <ol><li>在帐号面板中，点击<code>刷新 Cookie</code></li><li>删除帐号后重新添加米游社帐号</li><li>在系统设置中启用自动同步时间并立刻同步时间</li></ol></li></ul><h2 id="状态-1034-验证失败" tabindex="-1"><a class="header-anchor" href="#状态-1034-验证失败" aria-hidden="true">#</a> 状态：1034 验证失败</h2><ul><li>当胡桃工具箱返回 <code>1034</code> 状态码并提示验证失败时（通常是实时便笺功能），代表当前的操作被米游社的验证系统所阻挡</li><li>解决方式： <ul><li>进入 <code>实时便笺</code> 功能</li><li>点击右上角的 <code>验证当前用户与角色</code>按钮</li><li>根据米游社提示进行验证</li><li>完成验证后点击<code>完成</code></li><li>此时，风控应当已被解除；若没有，可继续执行上述操作</li></ul></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>若风险提示过于频繁，或始终无法触发验证，代表您的账号风险已过高，请修改密码，使多个设备同时登录的状态被重置</li></ul></div><div class="hint-container warning"><p class="hint-container-title">注意</p><ul><li>若您<strong>已绑定并使用可提供原神查询的 Bot</strong>或<strong>同时有多个设备使用同一个米哈游通行证</strong>，则本条目所示的情况，尤其<strong>无感验证</strong>将基本无法成功，这是米游社后端的<strong>安全性</strong>设计，不可避免，无法绕过</li><li>若您本地有多个<strong>米哈游通行证</strong>同时频繁与<strong>米游社</strong>进行数据交互，则可能会被米游社在一定时间内封禁 IP 地址，这是米游社后端的<strong>安全性</strong>设计，不可避免，无法绕过</li></ul></div><h2 id="httprequestexception-元数据校验文件下载失败" tabindex="-1"><a class="header-anchor" href="#httprequestexception-元数据校验文件下载失败" aria-hidden="true">#</a> HttpRequestException 元数据校验文件下载失败</h2><h3 id="_403-forbidden-404-not-found" tabindex="-1"><a class="header-anchor" href="#_403-forbidden-404-not-found" aria-hidden="true">#</a> 403 (Forbidden)/ 404 (NOT FOUND)</h3>',8),m={href:"https://apps.microsoft.com/store/detail/snap-hutao/9PH4NXJ2JN52",target:"_blank",rel:"noopener noreferrer"},x=e("h3",{id:"_502-bad-gateway",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_502-bad-gateway","aria-hidden":"true"},"#"),t(" 502 (Bad Gateway)")],-1),k={href:"https://github.com/DGP-Studio/Snap.Hutao/issues/100",target:"_blank",rel:"noopener noreferrer"},w=e("p",null,[t("当胡桃工具箱无法从远程服务器获取到必要资源时（通常是配置文件和图片缓存），会在用户界面抛出如下图所示的 "),e("code",null,"HttpRequestException"),t(" 错误。")],-1),v=e("p",null,[e("img",{src:"https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Tb2RUm1g6du5YeNuy_!!1797064093.jpg_.webp",alt:"HttpRequestException",loading:"lazy"})],-1),E=e("p",null,"当你遇到该情况，且已经确定本地网络没有互联网连接问题时，请检查是否启用了系统代理程序。如果是，请关闭。胡桃工具箱的远程服务器在全世界范围内都有类似的体验效果， 你无需为了胡桃工具箱的网络连接而使用代理网络。",-1),N={href:"https://www.telerik.com/fiddler/add-ons",target:"_blank",rel:"noopener noreferrer"},C={href:"https://learn.microsoft.com/zh-CN/windows/iot-core/develop-your-app/loopback",target:"_blank",rel:"noopener noreferrer"},R=e("h2",{id:"_653366069-请求异常",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_653366069-请求异常","aria-hidden":"true"},"#"),t(),e("code",null,"653366069"),t(" 请求异常")],-1),P=e("ul",null,[e("li",null,[t("网络请求错误，请求异常前程序会说明具体哪一个功能的网络请求失败。 "),e("ul",null,[e("li",null,"如果仅是偶尔出现的问题，你可以考虑忽略该错误"),e("li",null,"如果持续该错误，请检查本地网络到目标服务器的连接是否正常")])])],-1);function y(q,H){const n=s("ExternalLinkIcon");return l(),r("div",null,[c,h,u,e("ul",null,[p,_,e("li",null,[t("解决方案：下载 "),e("a",g,[t("EnableLongPaths.zip"),o(n)]),t(" 后解压，以管理员身份运行解压后的 "),f,t(" 文件")])]),b,e("p",null,[t("解决方案：更新胡桃工具箱至"),e("a",m,[t("最新版本"),o(n)])]),x,e("blockquote",null,[e("p",null,[t("相关 Issue: "),e("a",k,[t("https://github.com/DGP-Studio/Snap.Hutao/issues/100"),o(n)])])]),w,v,E,e("p",null,[t("如果系统代理是你的网络必须选项，请关闭系统代理而使用 TUN 模式代理；或者也可以通过 "),e("a",N,[t("Windows 8 AppContainer Loopback Utility"),o(n)]),t(" 解除 "),e("a",C,[t("Windows APP Container Loopback 的限制"),o(n)]),t(" 。")]),R,P])}const B=i(d,[["render",y],["__file","exceptions.html.vue"]]);export{B as default};
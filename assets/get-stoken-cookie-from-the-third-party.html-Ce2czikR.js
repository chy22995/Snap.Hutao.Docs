import{_ as t,c as o,f as i,o as a}from"./app-IEy7Sejv.js";const r={};function n(l,e){return a(),o("div",null,e[0]||(e[0]=[i('<h1 id="使用第三方工具获取有-stoken-的-cookie" tabindex="-1"><a class="header-anchor" href="#使用第三方工具获取有-stoken-的-cookie"><span>使用第三方工具获取有 Stoken 的 cookie</span></a></h1><div class="hint-container warning"><p class="hint-container-title">注意</p><ul><li>以下步骤中涉及的软件、开源项目等资源均来源于互联网，与 DGP-Studio 无关</li><li>本说明文档仅提供有关的解决思路，仅供学习使用，具体操作与操作后果与本项目无关</li></ul></div><h2 id="android" tabindex="-1"><a class="header-anchor" href="#android"><span>Android</span></a></h2><p>Android 用户可以使用开源项目 GetToken 来获取包含 Stoken 字段的 cookie</p><div class="hint-container tip"><p class="hint-container-title">GetToken 开源项目</p><ul><li>GitHub：<a href="https://github.com/HolographicHat/GetToken" target="_blank" rel="noopener noreferrer">HolographicHat/GetToken</a></li></ul></div><ul><li>GetToken 项目的发布会包含两个 apk 文件，两者最终效果相同。根据你的设备情况选择适合你的版本即可。 <ul><li><code>app-release.apk</code> 是一个 LSPosed 插件，其允许用户在官方米游社中使用 GetToken 功能 <ul><li>需要 Root 权限</li></ul></li><li><code>miyoushe-361-lspatched.apk</code> 是一个已包含 GetToken 功能的修改版米游社程序 <ul><li>注意，你需要先卸载官方版米游社以安装该版本的米游社</li><li>本方法无须 Root</li></ul></li></ul></li><li>启用插件或安装修改版米游社后打开米游社，在底栏点击“我的”，然后登录</li><li>在右上角点击形如 🔑 形状的按钮</li><li>勾选 <code>Stoken</code> 选项</li><li>点击“复制登录信息”以获取 <code>Cookie</code></li><li>将复制到的 Stoken 发送到已经安装了胡桃工具箱的电脑</li><li>在“胡桃”中点击“账号登录-手动输入”</li><li>输入之前获取的 <code>Cookie</code> 即可完成登录</li></ul><h2 id="ios" tabindex="-1"><a class="header-anchor" href="#ios"><span>iOS</span></a></h2><p>iOS 用户可以在 App Store 下载抓包软件 <code>Stream</code> 来获取包含 Stoken 字段的 Cookie</p><ul><li>从 App Store 下载 <a href="https://apps.apple.com/cn/app/stream/id1312141691" target="_blank" rel="noopener noreferrer">Stream</a></li><li>对域名 <code>api-takumi.mihoyo.com</code> 进行抓包分析</li><li>找到并复制带有 <code>Stoken</code> 的数据 <ul><li>形如 <code>stuid=****;stoken=v2****;mid=****;</code></li></ul></li><li>将复制到的 Stoken 发送到已经安装了胡桃工具箱的电脑</li><li>在“胡桃”中账号登录的位置，点击“手动输入”</li><li>输入之前获取的 <code>Cookie</code> 即可完成登录</li></ul><h2 id="macos" tabindex="-1"><a class="header-anchor" href="#macos"><span>macOS</span></a></h2><p>macOS 用户可以通过 <a href="https://github.com/BTMuli/TeyvatGuide" target="_blank" rel="noopener noreferrer">TeyvatGuide</a> 应用来获取包含 Stoken 字段的 Cookie</p><ul><li>从 <a href="https://github.com/BTMuli/TeyvatGuide/releases/latest" target="_blank" rel="noopener noreferrer">Github Release</a> 下载 TeyvatGuide 对应的 macOS 包</li><li>参考 <a href="https://github.com/BTMuli/TeyvatGuide/blob/master/docs/macos-gatekeeper/README.md" target="_blank" rel="noopener noreferrer">TeyvatGuide 文档</a> 安装</li><li>设置页通过短信验证码登录账户</li><li>在用户 Badge 中选择Cookie复制按钮复制Cookie</li><li>在胡桃中账号登录的位置，点击“手动输入”</li><li>直接粘贴即可完成登录</li></ul>',12)]))}const h=t(r,[["render",n],["__file","get-stoken-cookie-from-the-third-party.html.vue"]]),s=JSON.parse('{"path":"/zh/advanced/get-stoken-cookie-from-the-third-party.html","title":"使用第三方工具获取有 Stoken 的 cookie","lang":"zh-CN","frontmatter":{"categories":["FAQ","第三方工具"],"icon":"iconfont icon-read","order":7,"comment":false,"description":"一些第三方工具可以帮助你获取到包含 Stoken 字段值的米游社 cookie 并将其用于胡桃工具箱。","banner":"https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/get-stoken-cookie-from-the-third-party.html&has_description=False","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://hut.ao/en/advanced/get-stoken-cookie-from-the-third-party.html"}],["link",{"rel":"alternate","hreflang":"id-id","href":"https://hut.ao/id/advanced/get-stoken-cookie-from-the-third-party.html"}],["link",{"rel":"alternate","hreflang":"ru-ru","href":"https://hut.ao/ru/advanced/get-stoken-cookie-from-the-third-party.html"}],["meta",{"property":"og:url","content":"https://hut.ao/zh/advanced/get-stoken-cookie-from-the-third-party.html"}],["meta",{"property":"og:site_name","content":"胡桃工具箱"}],["meta",{"property":"og:title","content":"使用第三方工具获取有 Stoken 的 cookie"}],["meta",{"property":"og:description","content":"一些第三方工具可以帮助你获取到包含 Stoken 字段值的米游社 cookie 并将其用于胡桃工具箱。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/get-stoken-cookie-from-the-third-party.html&has_description=False"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"id-ID"}],["meta",{"property":"og:locale:alternate","content":"ru-RU"}],["meta",{"property":"og:updated_time","content":"2024-12-15T11:03:51.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/get-stoken-cookie-from-the-third-party.html&has_description=False"}],["meta",{"name":"twitter:image:alt","content":"使用第三方工具获取有 Stoken 的 cookie"}],["meta",{"property":"article:modified_time","content":"2024-12-15T11:03:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用第三方工具获取有 Stoken 的 cookie\\",\\"image\\":[\\"https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/get-stoken-cookie-from-the-third-party.html&has_description=False\\"],\\"dateModified\\":\\"2024-12-15T11:03:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DGP-Studio\\",\\"url\\":\\"https://github.com/DGP-Studio\\"}]}"],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://hut.ao/zh/rss.xml","title":"胡桃工具箱 RSS Feed"}]]},"headers":[{"level":2,"title":"Android","slug":"android","link":"#android","children":[]},{"level":2,"title":"iOS","slug":"ios","link":"#ios","children":[]},{"level":2,"title":"macOS","slug":"macos","link":"#macos","children":[]}],"git":{"createdTime":1673349882000,"updatedTime":1734260631000,"contributors":[{"name":"Mister-Hope","username":"Mister-Hope","email":"mister-hope@outlook.com","commits":1,"url":"https://github.com/Mister-Hope"},{"name":"目棃","username":"目棃","email":"BT-Muli@outlook.com","commits":1,"url":"https://github.com/目棃"},{"name":"Mikachu2333","username":"Mikachu2333","email":"mikachu.23333@zohomail.com","commits":3,"url":"https://github.com/Mikachu2333"},{"name":"LinkChou","username":"LinkChou","email":"linkchou@yandex.com","commits":3,"url":"https://github.com/LinkChou"},{"name":"Masterain","username":"Masterain","email":"i@irain.in","commits":14,"url":"https://github.com/Masterain"},{"name":"Mr.Hope","username":"Mr.Hope","email":"mister-hope@outlook.com","commits":1,"url":"https://github.com/Mr.Hope"}]},"readingTime":{"minutes":2.09,"words":626},"filePathRelative":"zh/advanced/get-stoken-cookie-from-the-third-party.md","localizedDate":"2023年1月10日"}');export{h as comp,s as data};
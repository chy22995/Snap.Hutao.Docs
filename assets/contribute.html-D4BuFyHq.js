import{_ as i,r as a,o as r,c as s,a as e,b as t,d as o,e as c}from"./app-BPPDZygB.js";const u={},d=e("h1",{id:"贡献你的代码",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#贡献你的代码"},[e("span",null,"贡献你的代码")])],-1),h=e("p",null,[t("胡桃工具箱使用 "),e("code",null,"C#"),t(" 和 "),e("code",null,".NET 框架"),t(" 开发桌面客户端和服务端。我们广泛地接受来自开源社区的反馈，如果你愿意贡献你的代码，请阅读本页的指导文档。")],-1),p={href:"https://github.com/DGP-Studio/Snap.Hutao/issues?q=is%3Aissue+is%3Aopen+-label%3A%E5%B7%B2%E5%AE%8C%E6%88%90",target:"_blank",rel:"noopener noreferrer"},m={id:"设置-snap-hutao-项目",tabindex:"-1"},_={class:"header-anchor",href:"#设置-snap-hutao-项目"},g={href:"https://visualstudio.microsoft.com/downloads/",target:"_blank",rel:"noopener noreferrer"},b=c("<ul><li>你需要安装 <code>.NET desktop development</code>、<code>Desktop development with C++</code> 和 <code>Windows application development</code> 组件</li><li>它们的中文名分别是 <code>.NET 桌面开发</code>、<code>使用 C++ 的桌面开发</code> 和 <code>Windows 应用程序开发</code></li></ul>",1),f=e("li",null,[t("安装 Visual Studio 商店中由 Microsoft 提供的 "),e("code",null,"Single-project MSIX Packaging Tools for VS 2022"),t(" 插件")],-1),S=e("li",null,[t("使用 Git clone "),e("code",null,"https://github.com/DGP-Studio/Snap.Hutao.git"),t(" 到你的本地设备")],-1),k=e("li",null,[t("将分支切换为 "),e("code",null,"develop")],-1),v=e("li",null,"使用你的 Visual Studio 打开项目 Solution，接下来你就可以开始编辑代码了",-1),y={id:"开启-debug",tabindex:"-1"},w={class:"header-anchor",href:"#开启-debug"},P={href:"https://www.microsoft.com/store/productid/9P7KNL5RWT25",target:"_blank",rel:"noopener noreferrer"},z={href:"https://learn.microsoft.com/zh-cn/sysinternals/downloads/sysinternals-suite",target:"_blank",rel:"noopener noreferrer"},D=e("code",null,"Sysinternals Suite",-1),x=e("li",null,[t("从开始菜单或解压后的文件中找到 "),e("code",null,"DebugView"),t(" 并启动")],-1),G=e("li",null,"启动 Snap Hutao 主程序",-1),H=e("li",null,[t("观察 "),e("code",null,"DebugView"),t(" 的输出")],-1),T={id:"发起-pull-request",tabindex:"-1"},A={class:"header-anchor",href:"#发起-pull-request"},N=e("li",null,[t("所有不是从项目其它分支发起的 Pull Request 都只被允许合并进 "),e("code",null,"develop"),t(" 分支")],-1),E={href:"https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/using-keywords-in-issues-and-pull-requests",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"main",-1),q={id:"测试打包程序",tabindex:"-1"},R={class:"header-anchor",href:"#测试打包程序"},V={class:"hint-container warning"},I=e("p",{class:"hint-container-title"},"注意",-1),B={href:"https://github.com/DGP-Automation/Hutao-Auto-Release/releases/download/certificate-ca/DGP_Studio_CA.crt",target:"_blank",rel:"noopener noreferrer"},M=e("strong",null,"受信任的根证书颁发机构",-1),L=e("p",null,[t("一旦你进行了 "),e("code",null,"push"),t(" 操作，一个 GitHub Actions 脚本将自动运行以构建所在分支的最新解决方案。如果分支名称是 "),e("code",null,"main"),t("、"),e("code",null,"develop"),t(" 或 "),e("code",null,"feat"),t(" 类分支，脚本还将自动上传其构建的 "),e("code",null,"Snap Hutao Alpha"),t(" 压缩包以供测试；其他分支仅验证可构建性而不提供上传。")],-1),W={href:"https://github.com/DGP-Studio/Snap.Hutao/actions/workflows/alpha.yml",target:"_blank",rel:"noopener noreferrer"};function Z(j,U){const n=a("ExternalLinkIcon"),l=a("HopeIcon");return r(),s("div",null,[d,h,e("p",null,[t("你可以在 GitHub 上查看所有当前仍然"),e("a",p,[t("未解决的问题"),o(n)]),t("。")]),e("h2",m,[e("a",_,[e("span",null,[o(l,{icon:"iconfont icon-visual-studio",size:"1.5rem",color:"rgb(193,142,241)"}),t(" 设置 Snap.Hutao 项目")])])]),e("ol",null,[e("li",null,[t("下载并安装 "),e("a",g,[t("Visual Studio"),o(n)]),b]),f,S,k,v]),e("h2",y,[e("a",w,[e("span",null,[o(l,{icon:"iconfont icon-debug",size:"1.5rem",color:"rgb(73,156,84)"}),t(" 开启 Debug")])])]),e("ol",null,[e("li",null,[t("从 "),e("a",P,[t("微软商店"),o(n)]),t(" 或 "),e("a",z,[t("微软官网"),o(n)]),t(" 下载并安装 "),D]),x,G,H]),e("h2",T,[e("a",A,[e("span",null,[o(l,{icon:"iconfont icon-pull-request",size:"1.5rem",color:"rgb(130,80,223)"}),t(" 发起 Pull Request")])])]),e("ul",null,[N,e("li",null,[t("如果你提交的代码与已有的 issue 相关，请使用"),e("a",E,[t("关键词"),o(n)]),t("将你的 PR 与相关的 issue 关联起来。这样当你的 PR 最终被合并进 "),C,t(" 主分支时，这些 issue 将被自动关闭。")])]),e("h2",q,[e("a",R,[e("span",null,[o(l,{icon:"iconfont icon-build-package",size:"1.5rem",color:"rgb(254,189,105)"}),t(" 测试打包程序")])])]),e("div",V,[I,e("p",null,[t("如果你希望试用最新的 Alpha 版本，请先安装 "),e("strong",null,[e("a",B,[t("DGP_Studio_CA.crt"),o(n)])]),t(" 到 "),M,t(" 以安装测试版安装包")])]),L,e("p",null,[t("你可以在 "),e("a",W,[t("Alpha 流水线"),o(n)]),t(" 中找到全部的编译记录。")])])}const J=i(u,[["render",Z],["__file","contribute.html.vue"]]),K=JSON.parse('{"path":"/zh/development/contribute.html","title":"贡献你的代码","lang":"zh-CN","frontmatter":{"category":["开源","开发"],"tag":["开发","GitHub"],"icon":"iconfont icon-code","order":3,"description":"胡桃工具箱使用 C# 和 .NET 框架开发桌面客户端和服务端。我们广泛地接受来自开源社区的反馈，如果你愿意贡献你的代码，请阅读本页的指导文档。","banner":"https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/development/contribute.html","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://hut.ao/en/development/contribute.html"}],["link",{"rel":"alternate","hreflang":"id-id","href":"https://hut.ao/id/development/contribute.html"}],["link",{"rel":"alternate","hreflang":"ru-ru","href":"https://hut.ao/ru/development/contribute.html"}],["meta",{"property":"og:url","content":"https://hut.ao/zh/development/contribute.html"}],["meta",{"property":"og:site_name","content":"胡桃工具箱"}],["meta",{"property":"og:title","content":"贡献你的代码"}],["meta",{"property":"og:description","content":"胡桃工具箱使用 C# 和 .NET 框架开发桌面客户端和服务端。我们广泛地接受来自开源社区的反馈，如果你愿意贡献你的代码，请阅读本页的指导文档。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/development/contribute.html"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"id-ID"}],["meta",{"property":"og:locale:alternate","content":"ru-RU"}],["meta",{"property":"og:updated_time","content":"2024-06-29T07:18:14.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/development/contribute.html"}],["meta",{"name":"twitter:image:alt","content":"贡献你的代码"}],["meta",{"property":"article:author","content":"DGP-Studio"}],["meta",{"property":"article:tag","content":"开发"}],["meta",{"property":"article:tag","content":"GitHub"}],["meta",{"property":"article:modified_time","content":"2024-06-29T07:18:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"贡献你的代码\\",\\"image\\":[\\"https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/development/contribute.html\\"],\\"dateModified\\":\\"2024-06-29T07:18:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DGP-Studio\\",\\"url\\":\\"https://github.com/DGP-Studio\\"}]}"],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://hut.ao/zh/rss.xml","title":"胡桃工具箱 RSS Feed"}]]},"headers":[{"level":2,"title":"设置 Snap.Hutao 项目","slug":"设置-snap-hutao-项目","link":"#设置-snap-hutao-项目","children":[]},{"level":2,"title":"开启 Debug","slug":"开启-debug","link":"#开启-debug","children":[]},{"level":2,"title":"发起 Pull Request","slug":"发起-pull-request","link":"#发起-pull-request","children":[]},{"level":2,"title":"测试打包程序","slug":"测试打包程序","link":"#测试打包程序","children":[]}],"git":{"createdTime":1697095418000,"updatedTime":1719645494000,"contributors":[{"name":"Masterain","email":"i@irain.in","commits":8},{"name":"Mikachu2333","email":"mikachu.23333@zohomail.com","commits":2}]},"readingTime":{"minutes":2.35,"words":704},"filePathRelative":"zh/development/contribute.md","localizedDate":"2023年10月12日"}');export{J as comp,K as data};

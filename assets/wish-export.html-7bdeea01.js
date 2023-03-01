import{ac as h,H as r,I as _,F as e,V as o,O as t,ae as a,ad as n,Y as s}from"./framework-3390b3d8.js";const p={},u=e("h1",{id:"祈愿记录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#祈愿记录","aria-hidden":"true"},"#"),o(" 祈愿记录")],-1),f=e("p",null,[o("抽卡是原神的核心玩法之一，无论是出于纪念、炫耀的目的还是认真规划抽取计划，对历史抽卡进行统计分析都是非常重要的。 但是原神官方只为玩家提供了半年的抽卡记录，这是很不友好的（"),e("s",null,"但是他们还是统计了你一整年杀了多少提米的鸽子"),o("）。")],-1),x=e("p",null,"因此，我们需要利用这半年的抽卡记录调取窗口，将抽卡记录转移到我们自己手中，这就是胡桃工具箱中祈愿记录导出功能的目的所在。",-1),m=e("strong",null,"祈愿系统与导出原理",-1),g=n('<p><img src="https://img.alicdn.com/imgextra/i3/1797064093/O1CN01B2DDii1g6du87XIIG_!!1797064093.png" alt="祈愿导出" loading="lazy"></p><p><strong>如上图所示，从胡桃工具箱的祈愿导出功能，你可以清晰地获取到包括：抽卡总数、当前已垫抽数、不同稀有度获取的数量和百分比、 每次五星稀有度获取的抽数以及保底情况。</strong></p><div class="hint-container note"><p class="hint-container-title">原神抽卡记录的延迟性</p><p>胡桃工具箱获取抽卡记录的来源也为米哈游服务器，因此短时间内刚刚结束的抽卡无法被获取。 当你在游戏内抽卡历史记录中看到了最新的一批抽卡记录，则可以在胡桃中获取统计数据。</p></div><h2 id="视频指南" tabindex="-1"><a class="header-anchor" href="#视频指南" aria-hidden="true">#</a> 视频指南</h2><p>对于大多数人而言，遵循本页文档会有更高的效率。</p><p>但如果你对其中包含的操作不熟悉，也可以回到这里来跟着视频指南操作。</p>',6),k={class:"hint-container details"},b=e("summary",null,"胡桃工具箱指南 5 - 祈愿记录导出篇",-1),G=e("h2",{id:"获取祈愿数据",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#获取祈愿数据","aria-hidden":"true"},"#"),o(" 获取祈愿数据")],-1),I={id:"利用-stoken-从服务器获取最新的祈愿记录",tabindex:"-1"},B=e("a",{class:"header-anchor",href:"#利用-stoken-从服务器获取最新的祈愿记录","aria-hidden":"true"},"#",-1),U={class:"hint-container info"},v=e("p",{class:"hint-container-title"},"提示",-1),y=e("li",null,"Stoken 刷新方法暂不支持国际服",-1),S=e("ul",null,[e("li",null,"在胡桃工具箱中确保你需要获取记录的米游社帐号已登录"),e("li",null,[o("从左侧菜单栏进入"),e("code",null,"祈愿记录")]),e("li",null,[o("点击右上角的"),e("code",null,"刷新"),o("，并点击"),e("code",null,"Stoken刷新")]),e("li",null,"等待读取完毕，即可查看最新的祈愿记录")],-1),F={id:"从网页缓存获取最新的祈愿记录",tabindex:"-1"},V=e("a",{class:"header-anchor",href:"#从网页缓存获取最新的祈愿记录","aria-hidden":"true"},"#",-1),N=n('<ul><li>从左侧菜单栏进入<code>祈愿记录</code></li><li>启动游戏并登入游戏，打开游戏内的祈愿历史记录</li><li>回到胡桃工具箱，点击<code>刷新</code>按钮，在刷新菜单中点击<code>网页缓存刷新</code></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>若出现<code>网页缓存刷新</code>功能异常的情况：</p><ul><li>从胡桃工具箱的<code>设置</code></li><li>在<code>删除游戏内网页缓存</code>功能中执行删除操作</li></ul></div>',2),w={id:"通过输入-url-获取祈愿记录",tabindex:"-1"},C=e("a",{class:"header-anchor",href:"#通过输入-url-获取祈愿记录","aria-hidden":"true"},"#",-1),E=n('<ul><li>如果你通过其它工具获取到了你祈愿历史记录的 Url，可以选择<code>手动输入Url</code>并根据提示操作</li><li>但应注意此类 Url <strong>具有时效性</strong></li></ul><h3 id="对于全量刷新选项的补充说明" tabindex="-1"><a class="header-anchor" href="#对于全量刷新选项的补充说明" aria-hidden="true">#</a> 对于全量刷新选项的补充说明</h3><p>在默认情况下，胡桃工具箱会在匹配到本地已有记录的祈愿ID后停止导入。 但如果你希望完整地获取原神服务器中所有的历史记录（即使它已经存在于你的本地祈愿记录中），你可以勾选<code>全量刷新</code>。</p><p><strong>不勾选<code>全量刷新</code>不会使你丢失祈愿数据，勾选<code>全量刷新</code>也不会让你的本地记录错误地额外记录一次相同的祈愿数据。</strong></p>',4),J={id:"从其它祈愿导出程序导入祈愿数据",tabindex:"-1"},L=e("a",{class:"header-anchor",href:"#从其它祈愿导出程序导入祈愿数据","aria-hidden":"true"},"#",-1),D=n('<p>胡桃工具箱支持导入 <code>UIGF 数据格式</code> 的祈愿记录数据<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p>如果你希望导入这一类数据，可以：</p><ul><li>启动胡桃工具箱，从左侧菜单栏进入<code>祈愿记录</code></li><li>点击右上角的<code>导入</code></li><li>选择你的 UIGF Json 数据文件</li><li>根据界面确认导入数据</li></ul><h3 id="从-snap-genshin-转移祈愿记录数据" tabindex="-1"><a class="header-anchor" href="#从-snap-genshin-转移祈愿记录数据" aria-hidden="true">#</a> 从 Snap Genshin 转移祈愿记录数据</h3><p>如果你希望从 Snap Genshin 中转移祈愿数据至胡桃工具箱，你可以：</p><ul><li>升级 Snap Genshin 到最新版本</li><li>进入<code>祈愿记录</code>功能 <ul><li>如果你由于无法登录米游社而无法进入 Snap Genshin，可以在胡桃工具箱中登录米游社帐号并复制 Cookie 到 Snap Genshin</li></ul></li><li>点击右上角的功能菜单</li><li>通过<code>导出 UIGF Json 文件</code>导出 Json 格式的祈愿记录</li><li>在胡桃工具箱中导入该文件</li></ul>',6),O={id:"导出祈愿数据",tabindex:"-1"},R=e("a",{class:"header-anchor",href:"#导出祈愿数据","aria-hidden":"true"},"#",-1),z=n('<p>胡桃工具箱支持导出 <code>UIGF数据格式</code> 的 Json 文件格式的祈愿记录数据</p><p>如果你希望导出祈愿数据，可以：</p><ul><li>启动胡桃工具箱，从左侧菜单栏进入<code>祈愿记录</code></li><li>选择您要导出的祈愿记录存档</li><li>点击<code>导出</code>按钮 <ul><li>在弹出的界面选择您需要将此导出的祈愿记录数据文件存放的位置，并点击<code>导出</code></li></ul></li><li>导出完成</li></ul><hr class="footnotes-sep">',4),H={class:"footnotes"},Q={class:"footnotes-list"},T={id:"footnote1",class:"footnote-item"},X={href:"https://uigf.org/",target:"_blank",rel:"noopener noreferrer"},Y=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function j(q,A){const l=s("RouterLink"),c=s("BiliBili"),i=s("Badge"),d=s("ExternalLinkIcon");return r(),_("div",null,[u,f,x,e("p",null,[o("有关原神祈愿记录导出的技术原理，你可以参阅我们的"),t(l,{to:"/advanced/Gacha-system-and-export-principal.html"},{default:a(()=>[m]),_:1}),o("一文。")]),g,e("details",k,[b,t(c,{bvid:"BV1QR4y1z7bH"})]),G,e("h3",I,[B,o(" 利用 Stoken 从服务器获取最新的祈愿记录 "),t(i,{text:"推荐",type:"tip"})]),e("div",U,[v,e("ul",null,[e("li",null,[o("已登录的米游社帐号是使用 Stoken 刷新方法的前提，你可以参考"),t(l,{to:"/features/mhy-account-switch.html"},{default:a(()=>[o("米游社多帐号切换")]),_:1}),o("一文在胡桃工具箱中登录你的帐号")]),y])]),S,e("h3",F,[V,o(" 从网页缓存获取最新的祈愿记录 "),t(i,{text:"支持国际服",type:"tip"})]),N,e("h3",w,[C,o(" 通过输入 Url 获取祈愿记录 "),t(i,{text:"支持国际服",type:"tip"})]),E,e("h3",J,[L,o(" 从其它祈愿导出程序导入祈愿数据 "),t(i,{text:"UIGF",type:"info"})]),D,e("h2",O,[R,o(" 导出祈愿数据 "),t(i,{text:"UIGF",type:"info"})]),z,e("section",H,[e("ol",Q,[e("li",T,[e("p",null,[o("统一标准化的原神数据格式由 "),e("a",X,[o("UIGF-Org"),t(d)]),o(" 提供 "),Y])])])])])}const M=h(p,[["render",j],["__file","wish-export.html.vue"]]);export{M as default};

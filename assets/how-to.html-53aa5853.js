import{ab as t,H as o,I as s,F as e,V as a,O as i,ac as n,Y as r}from"./framework-2ba0305e.js";const d={},c=e("h1",{id:"如何",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何","aria-hidden":"true"},"#"),a(" 如何...")],-1),h=e("p",null,"这篇文档将会列出一些最常见的以“如何”开头的问题",-1),u=e("h2",{id:"如何创建胡桃的桌面快捷方式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何创建胡桃的桌面快捷方式","aria-hidden":"true"},"#"),a(" 如何创建胡桃的桌面快捷方式")],-1),p={class:"hint-container tip"},_=e("p",{class:"hint-container-title"},"社区力量",-1),g={href:"https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/12",target:"_blank",rel:"noopener noreferrer"},m=n(`<ul><li><code>Win+R</code> 呼出运行窗口，在窗口中输入<code>shell:AppsFolder</code><img src="https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Jj8c6i1g6du728e5A_!!1797064093.png" alt="Run" loading="lazy"></li><li>Windows 会弹出应用程序目录，找到胡桃工具箱</li><li>右键，点击<code>创建快捷方式</code></li><li>根据提示操作你就可以获得一个桌面快捷方式了</li></ul><h2 id="如何实现自动化管理员模式" tabindex="-1"><a class="header-anchor" href="#如何实现自动化管理员模式" aria-hidden="true">#</a> 如何实现自动化管理员模式</h2><p>请使用如下的 PowerShell 脚本启动胡桃</p><div class="language-PowerShell line-numbers-mode" data-ext="PowerShell"><pre class="language-PowerShell"><code>Start-Process shell:AppsFolder\\7f0db578-026f-4e0b-a75b-d5d06bb0a74d_7jfyf5536hdrr!App -verb runas
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="如何让胡桃工具箱开机自动启动" tabindex="-1"><a class="header-anchor" href="#如何让胡桃工具箱开机自动启动" aria-hidden="true">#</a> 如何让胡桃工具箱开机自动启动</h2>`,5),f={href:"https://github.com/DGP-Studio/Snap.Hutao/issues/184",target:"_blank",rel:"noopener noreferrer"},b=e("li",null,[a("设置一个"),e("strong",null,"计划任务程序"),a("令上述批处理文件开机自启，或将上述批处理文件加入"),e("strong",null,"启动项"),a("中")],-1),x=e("li",null,"或有其他令胡桃工具箱可开机自启的思路，可自行探索",-1),v=n('<h2 id="如何通过胡桃工具箱快速地启动游戏" tabindex="-1"><a class="header-anchor" href="#如何通过胡桃工具箱快速地启动游戏" aria-hidden="true">#</a> 如何通过胡桃工具箱快速地启动游戏</h2><ul><li><p>在主程序中正确设置高级启动器功能</p></li><li><p>将胡桃工具箱在系统中固定在快速启动栏中</p></li><li><p>在快速启动栏中右键胡桃应用程序</p><p><img src="https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Uu8QzN1g6du6MRp8h_!!1797064093.png" alt="quick-start" loading="lazy"></p></li><li><p>选择<code>启动游戏</code>即可</p></li></ul>',2);function S(k,w){const l=r("ExternalLinkIcon");return o(),s("div",null,[c,h,u,e("div",p,[_,e("p",null,[a("感谢 "),e("a",g,[a("CzHUV 提供的解决方案"),i(l)])])]),m,e("ul",null,[e("li",null,[a("请参考如下思路 "),e("ul",null,[e("li",null,[a("可以自行创建一个批处理文件，内容参考"),e("a",f,[a("此issue"),i(l)]),a("中，令胡桃以管理员模式直接运行的命令。")]),b])]),x]),v])}const P=t(d,[["render",S],["__file","how-to.html.vue"]]);export{P as default};

if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let d={};const t=e=>a(e,r),b={module:{uri:r},exports:d,require:t};s[r]=Promise.all(i.map((e=>b[e]||t(e)))).then((e=>(c(...e),d)))}}define(["./workbox-b584cb72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/1-8-5-installer-BiBVFR-v.js",revision:"cc13e2b00164710d0ed707ea46e4a8ef"},{url:"assets/404.html-WBbxHJ7b.js",revision:"b065d76b2cbdeac7c2314db8d46932e2"},{url:"assets/achievements.html-BisM_Pcj.js",revision:"dc9fbc050fd9afbf259bb4d39788033c"},{url:"assets/achievements.html-BTmxaMh2.js",revision:"835d956f60ebf1628114bb505992f8a8"},{url:"assets/achievements.html-BWkSo9jJ.js",revision:"0f16df84f9e92ae015e2233c894e717b"},{url:"assets/achievements.html-CPx6AO4-.js",revision:"f60457c7e61ce1eeac6e6a0c56a9cb04"},{url:"assets/app-CaX2Aptj.js",revision:"aa89bd6bcf9573c7c8f048b3c3ab74d4"},{url:"assets/archive.html-kutxcSGn.js",revision:"dd37ac50700d298779ea65bd5eae7d74"},{url:"assets/bug-report.html-B1wM9heV.js",revision:"0277892549a8a79e3f5c8bc668f39cc3"},{url:"assets/bug-report.html-CDtbDfaP.js",revision:"c14eeb9f5ee521fea0ef91ec2948a092"},{url:"assets/bug-report.html-DAlQxztF.js",revision:"66358740e762b77d4e405696332118ea"},{url:"assets/bug-report.html-DVny3nh7.js",revision:"ed7520f6803de2d10eafc1bb819e7709"},{url:"assets/character-data.html-BGxYS6we.js",revision:"89cc4174e23f1c7a685b48e056c938ff"},{url:"assets/character-data.html-DluD4DRd.js",revision:"02e90681196c685a8b9bc0ac0a3420f9"},{url:"assets/character-data.html-DlZWjjuF.js",revision:"2bf7974cb5da518b2914c425e249bfe7"},{url:"assets/character-data.html-gZkx41-u.js",revision:"b842fbc3a1862073764963c7ccc8ce8c"},{url:"assets/character-wiki.html-BGwx2rUv.js",revision:"00b17562c64f8831deef3f7104233dd5"},{url:"assets/character-wiki.html-BSooGwmH.js",revision:"3c483fdeb51a854b5b52a03083c44e7d"},{url:"assets/character-wiki.html-LyU-8KPe.js",revision:"00bcd08b37fb6850798fa59e740a4efe"},{url:"assets/character-wiki.html-obc9dyjU.js",revision:"dd3736bc37eb5a1ad2fe34063c7c3f98"},{url:"assets/community.html-BQhYr_Jj.js",revision:"365a8d7c3058d3d21856863f3e85a15a"},{url:"assets/community.html-CUD97w1D.js",revision:"333eb7c42144b19cf902042acaf831d4"},{url:"assets/community.html-CxymDqRw.js",revision:"8086352b063c3119327fcde3f5fe881e"},{url:"assets/community.html-iSPjk6Ax.js",revision:"ffd540e3e905251928831f8ef81bc3c0"},{url:"assets/contribute.html-BdKzhFh-.js",revision:"cecc6a8d94d62772c75d8a7e176bfe30"},{url:"assets/contribute.html-BSXivX0H.js",revision:"a585447694e828acdf5216712899a1c0"},{url:"assets/contribute.html-CNZzuqBS.js",revision:"6c015b5cea46d53c7429791eb913c19c"},{url:"assets/contribute.html-QC_hy0RG.js",revision:"ab58c8585cf618aef5ba01d00123815c"},{url:"assets/dashboard.html-BgN4QnvG.js",revision:"aae7eb988a9c425ef1e669e46cf82543"},{url:"assets/dashboard.html-BKnlrRbo.js",revision:"5d012e9b5f521e2470de96d7d4e65d59"},{url:"assets/dashboard.html-D7dcNUTN.js",revision:"4182d065a68e3c08bdc50972de60298c"},{url:"assets/dashboard.html-Dm7RAfUh.js",revision:"af58be81f81d1d7f2ebc02a8c318ba2d"},{url:"assets/dependency.html-Ca7epZQV.js",revision:"20190976dd00674065091e59511762c2"},{url:"assets/dependency.html-DScW4Y08.js",revision:"704955b0442af0cf5e67bb9c07fff0d1"},{url:"assets/develop-plan.html-abRzkc5A.js",revision:"20c304560f0ae4a9cc6e4ad6a034e837"},{url:"assets/develop-plan.html-BRJRPvkr.js",revision:"65efa8034b5f23f814daac19b90c9042"},{url:"assets/develop-plan.html-DGnokLTk.js",revision:"e8aaf434662578094c8aa58c4c1deb18"},{url:"assets/develop-plan.html-NrfmvGqW.js",revision:"c0acabc352f92beb0fcf66b3d203179c"},{url:"assets/exceptions.html-B4W1PogJ.js",revision:"4f80820440dbf2c4483c1b4bd2fdc4c2"},{url:"assets/exceptions.html-PHKhZJ32.js",revision:"8887683f1ecbecb7aaf49c392405735b"},{url:"assets/exceptions.html-sYSP5fn0.js",revision:"36ff76c96453ea95b0924003d9bd8035"},{url:"assets/exceptions.html-zWytWTqC.js",revision:"4703ed25d9ba208c9a89dde7f8fdb256"},{url:"assets/FAQ.html-Bw8ciQx8.js",revision:"4c4c3939ab67150f6410f7032f39e467"},{url:"assets/FAQ.html-cGPbgPP_.js",revision:"b2fcfcf9ec99f86a367e22dd96cfbfdb"},{url:"assets/FAQ.html-DKQPJiPN.js",revision:"911959294828e53b75cb234bf1347590"},{url:"assets/FAQ.html-E21vurVn.js",revision:"109c7266df432f726ec48daf2b7e6b2c"},{url:"assets/feedback-center.html-CCCJ0C7P.js",revision:"e45562e2fded30df0da7239b3ae8cd31"},{url:"assets/feedback-center.html-Dw5eX0wp.js",revision:"6dbdadd1fdd4badadd5e2aff850a2272"},{url:"assets/Gacha-system-and-export-principal.html-BrExh6N7.js",revision:"3c2dccbdc4565f79e3efa3cf44bcb732"},{url:"assets/Gacha-system-and-export-principal.html-CX4bezJI.js",revision:"eadc748d3d1dcab6a2f9c136b678572e"},{url:"assets/Gacha-system-and-export-principal.html-DXaL3rO9.js",revision:"4a50ee26fd6e9bd2e23d75a39567bdb2"},{url:"assets/Gacha-system-and-export-principal.html-Uz6_0LSd.js",revision:"d9f31941f27d2386b1cb1a22065d5cbf"},{url:"assets/game-launcher.html-Bp1d8c4S.js",revision:"38de2927293f61f4fdbe4608a1b55221"},{url:"assets/game-launcher.html-Ceb7jSjs.js",revision:"8c2312a32ae920b48f3dd1ae5f92dc4d"},{url:"assets/game-launcher.html-MMHM9NWR.js",revision:"0cbe26bf6c3d0b0714c6b62be2046529"},{url:"assets/game-launcher.html-nqGlr8N9.js",revision:"ab6dee86bf8101d39034922e46cbefb2"},{url:"assets/get-stoken-cookie-from-the-third-party.html-BIzbEjf6.js",revision:"f6e59aa5fdd7139345f2b33addeb8892"},{url:"assets/get-stoken-cookie-from-the-third-party.html-Cdthwmr9.js",revision:"3192e451a30bc5a3b57e8715c780eedf"},{url:"assets/get-stoken-cookie-from-the-third-party.html-D8HIM0R5.js",revision:"fabad3a2105b60184a32dc33354f0cb8"},{url:"assets/get-stoken-cookie-from-the-third-party.html-DadlJ7H3.js",revision:"d86067d105533200b2ffccfd8f226a39"},{url:"assets/giscus-BZxmVUME.js",revision:"1b050c6cfcaa1d2cf1aae34338c9f637"},{url:"assets/hutao-API.html-ChOC51hM.js",revision:"b1349374b316adf5b04cb2922e4fd95a"},{url:"assets/hutao-API.html-DPueUnMw.js",revision:"0b3124878cb2072e1119dfaeb724d355"},{url:"assets/hutao-API.html-DTFrDAmL.js",revision:"8570b05e2283adda73769231efa1746f"},{url:"assets/hutao-API.html-TuW2dEui.js",revision:"066f2cb4ab1077c2077187435ac52eb3"},{url:"assets/hutao-passport.html-D8Va68Oz.js",revision:"a45e2848dc1528d2ccae3d13b4b4f018"},{url:"assets/hutao-passport.html-DMDUivxT.js",revision:"8713d710929dbbb6996e02465b0a6436"},{url:"assets/hutao-settings.html-6GzJ0kCy.js",revision:"d52d33fb9e93515346a9b6bbb596fb01"},{url:"assets/hutao-settings.html-CJkG1sup.js",revision:"7591eb2c999938e64dd905fd1a383195"},{url:"assets/hutao-settings.html-Det5QqNz.js",revision:"19e8ed7b6a70816e89335603f828fef3"},{url:"assets/hutao-settings.html-DK9P8mgo.js",revision:"78d3da56b7cc955178849f467f7f717d"},{url:"assets/i18n.html-62yOmFKl.js",revision:"3b6325d1ebc6431f7b08ac17fb53c941"},{url:"assets/i18n.html-Co1o5w3O.js",revision:"d4eecbc4b08238d7a4aa9113391f715a"},{url:"assets/i18n.html-CQ-Fib16.js",revision:"6ac97f3b30a9ade276c7b0210239471d"},{url:"assets/i18n.html-vyzLi-4W.js",revision:"f11bbb1ac0dd532e59c3ffa94e2ed647"},{url:"assets/index-DCs6OeCW.js",revision:"b990dd0241ea9ef16614b01d0c6ad736"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-aGSNdgDt.js",revision:"fcd8564a581baed1233683e39d122d7f"},{url:"assets/index.html-B_z2H0cl.js",revision:"7fcaf7bd06d9931dc0ac8d8b47f45d62"},{url:"assets/index.html-B3Hx3GUY.js",revision:"26ca11d05432f404fc0aaa2c29367ff7"},{url:"assets/index.html-BCBWAfWc.js",revision:"aaedb2ac445c2500e339b67f79815abe"},{url:"assets/index.html-Byj4WBhR.js",revision:"395cc33308d15f55b51803bad66011b7"},{url:"assets/index.html-BywvA6vP.js",revision:"2d72c44bbc227c0cc1c80ee888adfb7c"},{url:"assets/index.html-C6Y-DENH.js",revision:"d50eba1adb8faf2a3291f3e4e42cd210"},{url:"assets/index.html-CBdBsvX2.js",revision:"7e20f7be3b28dd56cd996589602f38af"},{url:"assets/index.html-Cc443lRi.js",revision:"e455e1c47a7deedc76e83eb6bf33eb03"},{url:"assets/index.html-CgS-_dpM.js",revision:"59b2b75fee072cd084923b24d15cf6e9"},{url:"assets/index.html-CnmrTcAF.js",revision:"aeecf133c4caf0459aa1832ae22adde0"},{url:"assets/index.html-CoOLAUlm.js",revision:"9b0798c56f4b6f27a600a2ff1367f347"},{url:"assets/index.html-Ct5t5aht.js",revision:"ae407f77e4cd850dc4fa22e48e69701b"},{url:"assets/index.html-CYGwTRd4.js",revision:"cce5434207c866e64a54ef9d9a03e7fd"},{url:"assets/index.html-DCJRrNMg.js",revision:"f09a5978faa272950d225c6d01bf8c6d"},{url:"assets/index.html-DgpZr-7R.js",revision:"30d2828958b42e4fd2f0b9d68de32841"},{url:"assets/index.html-DnKMdP2V.js",revision:"b8563bfe236d4401850d120ac68cb919"},{url:"assets/index.html-dOmDISCp.js",revision:"377197afc59a36607f58e27c8350f43d"},{url:"assets/index.html-DwTIXfL5.js",revision:"0093fc23324f86016600745f9bd204b2"},{url:"assets/index.html-FRnEg7et.js",revision:"a6f3d7ae8ef3d0fac2dd61dfe6d164dc"},{url:"assets/index.html-nQT3sDHb.js",revision:"f338ccda8a3ff35cdcad8bb709604cf6"},{url:"assets/index.html-SGnlKlnH.js",revision:"56a0936d373f8f79d1eff5b04f20aaab"},{url:"assets/index.html-vHXxbX4S.js",revision:"e7863808becb3c8df9bc06525327b956"},{url:"assets/index.html-yNIPYslT.js",revision:"174582a3a1c56dc133d74fb4cc3c7ab7"},{url:"assets/join.html-B9w7vJCR.js",revision:"86eaa3e69d169bf4cf9dcb1399494fd3"},{url:"assets/join.html-Db-3Rf_C.js",revision:"c87cfd3eb667e67595f54f05fd91ea47"},{url:"assets/join.html-DyfXyVuc.js",revision:"29d271b09f05671a1e88ede2167f8811"},{url:"assets/known-issue.html-BSlM28wY.js",revision:"94cfa1680679c31976fc983f25bd0a0c"},{url:"assets/known-issue.html-CONQ6kt6.js",revision:"809d083814ab5401707e79244a6c9d20"},{url:"assets/known-issue.html-DXpz5Nx7.js",revision:"444288ab049c20621c5156a170614ab8"},{url:"assets/known-issue.html-NFLuPyXL.js",revision:"afcbf2d365ef0e4ec74e0f3b9fa194ed"},{url:"assets/latest.html-3Y2nqqy6.js",revision:"560ac6eb6b19fe07bd2622b2e56187a4"},{url:"assets/latest.html-Snt9xyPA.js",revision:"4a43e0a184a6e37753311555e269192b"},{url:"assets/menu.html-a2Klh7aD.js",revision:"a6a2f045db918c2f8c1d3a2e9c6ebc39"},{url:"assets/menu.html-BE5fu6JV.js",revision:"e4c56407b074a66f350e4d5719900da7"},{url:"assets/menu.html-Bn9r2mSR.js",revision:"8ba50871c2302b35f5880c992435500f"},{url:"assets/menu.html-DUK9eWrF.js",revision:"6dc655b9d88821d7a2b8426ab09c1fbf"},{url:"assets/mhy-account-switch.html-BR9MSNo6.js",revision:"92e3e863f15a1bd809c93395b1e51217"},{url:"assets/mhy-account-switch.html-C4FTkuq-.js",revision:"a4b36d3b07799cd41c034d84ab4c0f5c"},{url:"assets/mhy-account-switch.html-CD4iuxdk.js",revision:"f90dd6f78966f03a1010d79c38157448"},{url:"assets/mhy-account-switch.html-DsD8stlV.js",revision:"a02e829bb5af0dca73caee7de56296e7"},{url:"assets/monster-wiki.html--J36o3EF.js",revision:"d5c021be35d61b44771ffae323e9da2e"},{url:"assets/monster-wiki.html-Cq38C24i.js",revision:"a615bb5344dfc1c4e3c61ce1a5ce8f6e"},{url:"assets/monster-wiki.html-DosC3Jvs.js",revision:"986d7da9bea0e8f21a74192a27075d2e"},{url:"assets/monster-wiki.html-WudY4bRE.js",revision:"d97eb866efc1792b677454a41ff96460"},{url:"assets/MSEdge-Bvt55oa-.js",revision:"664a8be7f006b82a3d2eac682334d154"},{url:"assets/photoswipe.esm-GXRgw7eJ.js",revision:"9252721b01cd263ae52f9296614a7ddb"},{url:"assets/platform.html-9AqAQElq.js",revision:"1671efd16a66625d7233cd908978cb44"},{url:"assets/platform.html-BrL08EJQ.js",revision:"38e628d476db6da8700732ff87a97218"},{url:"assets/platform.html-CImwloW3.js",revision:"f65334dfc2d06c77676df5167a46b5b3"},{url:"assets/platform.html-JNd_FR9j.js",revision:"7421d92d79b861a8a20ffb59123af3c7"},{url:"assets/privacy-notice.html-B1cEm4Vn.js",revision:"14c3945f521839c1a00e32ac3297b541"},{url:"assets/privacy-notice.html-BcGsEScw.js",revision:"ea1500e4be2d9fd0782f109b7d09f9d4"},{url:"assets/privacy-notice.html-DCm7bsmo.js",revision:"41d8b346a0671cf98f04a269a65d31b7"},{url:"assets/privacy-notice.html-DO57Js0E.js",revision:"1053c0ecb14eceed1dbc65fb0606192a"},{url:"assets/project.html-B1_CD-yp.js",revision:"e18bb09a5d5303ad355e2d3c902b0ce0"},{url:"assets/project.html-BNgvUuYi.js",revision:"332bed3c4885b583b3bcf421a4f85ecf"},{url:"assets/project.html-d8ccD1Pa.js",revision:"fb1bed997e4c2cf0e483d28a2efbeb8d"},{url:"assets/project.html-SnM0bdJZ.js",revision:"bb3462b804f9de348465096055616dc5"},{url:"assets/quick-start.html-CGA4hncY.js",revision:"ea3e837fb6348576e9936a8b9d6c5795"},{url:"assets/quick-start.html-DHhSz95I.js",revision:"534c1b4ba28b1eb27d0bccb8bede8885"},{url:"assets/quick-start.html-DlzdQGhU.js",revision:"c7c29ad3f99c51272444b99fe6238940"},{url:"assets/quick-start.html-L7eCV__f.js",revision:"948266e22d9d1bb7d2187a9f1433edd4"},{url:"assets/real-time-notes.html-CFCnXefI.js",revision:"2b63cb7890f9b8729254a811d7c334be"},{url:"assets/real-time-notes.html-D4nfcZGC.js",revision:"63676db01927a53309263548b4ad4431"},{url:"assets/real-time-notes.html-UjmeyilE.js",revision:"93d9e5187cfc4b87458ace5a2058d0a9"},{url:"assets/real-time-notes.html-xZoH78bF.js",revision:"f8ff217e874bbd7741aea94e0c3fb725"},{url:"assets/setup.html-C8ch7QNm.js",revision:"9e9125f68f31b26ae9f5ec6eb58eba31"},{url:"assets/setup.html-CJ3B-fFn.js",revision:"470d40acfed0f4f5f2784cb5edcf8870"},{url:"assets/setup.html-DTq9Xy7k.js",revision:"08ec66a93647c9fab36c21469e7fe59f"},{url:"assets/setup.html-gyw1cf3K.js",revision:"1a00d3c1171939f38e1c2702a312b084"},{url:"assets/setupDevtools-7MC2TMWH-CEZr5Lgs.js",revision:"7314b998eed905343816a94cfc472a9e"},{url:"assets/side-load.html-CUfXtRy7.js",revision:"4f4aac04a54b8054d3d38a4b789c8314"},{url:"assets/side-load.html-DTRmqXBo.js",revision:"ba60e64b19e0d99198f26c0c09cf4438"},{url:"assets/star-request.html-BEVy9AE4.js",revision:"8375e9385347569bd676d3aab7c65081"},{url:"assets/star-request.html-CV51s0y0.js",revision:"3682bb9407998830d909605eff2d1df4"},{url:"assets/star-request.html-DDDK2i5t.js",revision:"00def74129c4f4a8867c8757d8ba1df6"},{url:"assets/star-request.html-DF2ktR5l.js",revision:"8b1f3b184cad8ab7185cdcf6f2c58994"},{url:"assets/style-WURWpnEA.css",revision:"0c72e5fb7fdcbce68dcf7a15b9e05fce"},{url:"assets/support-us.html-BP4fCfFs.js",revision:"860b67a3b6083bdf4c6747625f082289"},{url:"assets/support-us.html-C--swCXU.js",revision:"5c25dd35b38bf9471beb63b08e882267"},{url:"assets/support-us.html-C5goMgoO.js",revision:"6770004cd813b4420a8951c7cb43824d"},{url:"assets/support-us.html-DaVEb83O.js",revision:"c632a3cba21d6d387c0a8cb43683eb6e"},{url:"assets/symposium1.html-DuEZ5mbn.js",revision:"e707cb9cf7f9825a36f79d19c2bc1bbc"},{url:"assets/symposium2.html-QFD9w22i.js",revision:"32a517549b77d63337aad466f3c3863b"},{url:"assets/tos.html-CJfebQQ8.js",revision:"6008af27e5c3b097a1707289fe725046"},{url:"assets/tos.html-DgLlNdNI.js",revision:"14d2f83360eccebd9377bc62bbac9162"},{url:"assets/tos.html-pWxGE5ds.js",revision:"6b22a61eddd4dcb1993f680d246c8162"},{url:"assets/tos.html-rBrwLJxv.js",revision:"5f6e9a96949478d1f22e9c77dab2888d"},{url:"assets/uninstall.html-9H1wAUsd.js",revision:"635e7617c129d8fd6b1083a81e6330f9"},{url:"assets/uninstall.html-BP5dSHya.js",revision:"24428b395900da2d5ab229f16dfc286e"},{url:"assets/uninstall.html-C5Oj7tYT.js",revision:"59de4ae4cc60127e268312ace7cf3a26"},{url:"assets/uninstall.html-Dh0RBAzu.js",revision:"8a02bc48f64a1795b782c8fc2aafdbda"},{url:"assets/update-log.html-B1Z7kSRa.js",revision:"c5baa735d35538fe225eb1e1d58632b8"},{url:"assets/update-log.html-Dk54KX0Q.js",revision:"b980fadc751e5cdf44c04a60f8d602c7"},{url:"assets/update-log.html-Dz8JvOmo.js",revision:"5fda01b861a7e949a0a6f3bb0c2c0ee8"},{url:"assets/update-log.html-JNLuyJ_D.js",revision:"c5b572fc39a2eda141b01d0c2953c126"},{url:"assets/version-1-9-0-breaking-changes.html-_Ul_cGd8.js",revision:"be498b8f42c18e3310b41eea57926f3a"},{url:"assets/version-1-9-0-breaking-changes.html-DdD41MZl.js",revision:"99f12ac852f3a85882e661d50558f76c"},{url:"assets/version-1-9-0-breaking-changes.html-Dq6dBhNC.js",revision:"72feb3d6aac4eb87c833cfe0ff4efc99"},{url:"assets/version-1-9-0-breaking-changes.html-DuAjEFuu.js",revision:"97394b196562d5dd52e2c05a7e72bfb7"},{url:"assets/weapon-wiki.html-CMMSW1QK.js",revision:"68c9b041b7bb05515913dc3725248080"},{url:"assets/weapon-wiki.html-DijO68Da.js",revision:"ed421a55800118b93e7858d4be1523cb"},{url:"assets/weapon-wiki.html-DoEMApkK.js",revision:"d00729c112d42e500622c35921e882d2"},{url:"assets/weapon-wiki.html-wVJ97aBY.js",revision:"7025251db6369445dd303ab9e55cfba7"},{url:"assets/wish-export.html-94RK4lvP.js",revision:"e5199d9ef1ab00c89eb9a768af1e0d0a"},{url:"assets/wish-export.html-CGdB383p.js",revision:"8927d62f4fb7df8c8288f56b48f4c12b"},{url:"assets/wish-export.html-DhiJh_5e.js",revision:"9beb46b883216530fba0b027ed31f371"},{url:"assets/wish-export.html-n9pp4m0N.js",revision:"2f33f41e6fe006c75e4fedd2de56c9bb"},{url:"fontlist/demo.css",revision:"c470b271d96640b2d527d864d838d550"},{url:"fontlist/iconfont.css",revision:"47f9418c83e516e2f92fffa11e06ff9f"},{url:"fontlist/iconfont.js",revision:"787c135beed0ae93c145ae2de3cbfefe"},{url:"fontlist/iconfont.ttf",revision:"6d90ead1de012ad82077c2a898dcc136"},{url:"fontlist/iconfont.woff",revision:"c50542a321198d3a49a56ba9f50923f6"},{url:"fontlist/iconfont.woff2",revision:"a917e0d0985aaabe49b9bd5ad48bd270"},{url:"images/202312/C_sharp.svg",revision:"bdaccca278378c33d51a37613e6acd09"},{url:"images/202312/community.svg",revision:"a6416747c570bdf5443e2d03094adf2b"},{url:"images/202312/discord.svg",revision:"1e0d18bad882e0adf80fd212bf879243"},{url:"images/202312/documents.svg",revision:"6cdb5625f4c6bd4c0abb725dd0a3332b"},{url:"images/202312/github-mark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"images/202312/gitlab-logo.svg",revision:"d06c9d4a634d4f0345fe4e35add3f933"},{url:"images/202312/jihulab.svg",revision:"16fdc7c7a02de0bf63a48c0e498d30fb"},{url:"images/202312/tencent.svg",revision:"b18acecbd9c07541fd34d6f07645c6ed"},{url:"images/202312/uptime-kuma.svg",revision:"e4ed8e71ba8f67c89b305aab8f641790"},{url:"images/202312/uptimerobot-logo.svg",revision:"77e3e93be900d9d9b4d9ad69ce69662b"},{url:"images/202312/video-editing.svg",revision:"be4022972dace1067ae8218338311658"},{url:"images/202312/Vue.js.svg",revision:"9a45fc7689867939804c469bfcd17784"},{url:"images/202401/javascript.svg",revision:"891a71b9a98f1d58491e1b06c4d356a2"},{url:"images/202401/Microsoft_Office_OneDrive.svg",revision:"51d2a9bb48ab28ba3a2aadbaa7a69f52"},{url:"images/202402/ux-design.svg",revision:"540420913952ca6b97c2e6d3e0d1d4c8"},{url:"images/202409/Microsoft-logo.svg",revision:"490b9c67b69597ce119d75ec333273ae"},{url:"svg/1Password.svg",revision:"3c3324dd296cdc1fb1951ca3699d37d6"},{url:"svg/afdian.svg",revision:"22e22e64ee9da786e70d0ead0dc1ef26"},{url:"svg/crowdin-core-logo-cDark.svg",revision:"6f8bebc743eb7af8b08adde634ee8037"},{url:"svg/digitalocean.svg",revision:"733e9cc61d4dbe556b9c1a6b0d054db0"},{url:"svg/ducalis.svg",revision:"88f5f826aa65cc4cbc7b41e360958361"},{url:"svg/jetbrains.svg",revision:"0b8a56472a99e8981fef2ab59c3f438f"},{url:"svg/navicat.svg",revision:"b0e79310af6a25a7c6fde91914e86e9e"},{url:"svg/netlify.svg",revision:"aed9ee26eb7c6705596c0fc150dfa0d9"},{url:"svg/paypal.svg",revision:"1c4f7c36fe6bbed4976169bf2e4dab8a"},{url:"svg/signpath.svg",revision:"946a4c5a04a90f1f0d57cd890eb62454"},{url:"svg/termius-logo.svg",revision:"a3374a1b7b775239ff1b97e2e1d3425e"},{url:"upload-abyss-data.js",revision:"e3c5df0c4de06f2bd47d19d95f478c8e"},{url:"404.html",revision:"32524a38c000a07dbbd7a70601388d0a"},{url:"images/202209/Achievements.png",revision:"067cff70d53656b2e3e878df949823f6"},{url:"images/202209/HeroImageLogo.png",revision:"fb8507e3eaccbd6408874dcf10973d62"},{url:"images/202209/IndexIconAchievements.png",revision:"ea409f5a87b1c7666121ead606e323ef"},{url:"images/202209/IndexIconCharacters.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202209/IndexIconMihoyoBBS.png",revision:"b9c679888c01a50e6b126f9dae0d50d1"},{url:"images/202209/IndexIconWeapons.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202209/IndexIconWish.png",revision:"0b4e790c4cb1eeba7473ad8e1b14ac23"},{url:"images/202209/SGLogoUpgrade64.png",revision:"1b95d8969049e0b31c0d89eeface0b89"},{url:"images/202209/wish-export.png",revision:"ef07fa6499c22d00c78dc182ad3cbab5"},{url:"images/202210/1.1.7-Update-Error-Fix.png",revision:"1f1958198ca4510713648cff6c43fcd5"},{url:"images/202210/1.1.7-Update-Error.png",revision:"3e04317e974e1cec550096b7ea88d708"},{url:"images/202210/account-upgrade.png",revision:"52b1c5695109142c9496bb6e14a9c2d1"},{url:"images/202210/HttpRequestException.jpg",revision:"878a57ab9fe5de6b774d7e91776987ab"},{url:"images/202210/hutao-api-submit.png",revision:"6a201ae85f470f3bb70e868137524830"},{url:"images/202210/hutao-api.png",revision:"5bd260fe9b5c18a41765c1126cfd91ff"},{url:"images/202210/hutao-login.png",revision:"21af43587bacf56bf40cadc884381c49"},{url:"images/202211/character-data-display.png",revision:"0cd41e7a02ee864ff12f0f69c926b79f"},{url:"images/202211/character-data-logo.png",revision:"04cc28833ed4c2108ba215fbc33325bf"},{url:"images/202211/character-wiki-logo.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202211/character-wiki.png",revision:"002ee49f019709942ae1b3dc541d05e4"},{url:"images/202211/game-launcher-logo.png",revision:"a5a5d6d5a09926689f8a61db4b24c2df"},{url:"images/202211/hutao-api-logo.png",revision:"feb8ae3e6c4099e0b7804e3d7ebda7c2"},{url:"images/202211/wish-export.png",revision:"c695c558c514d9aa0d3903d5c41f63b9"},{url:"images/202301/achievement.png",revision:"42fd361ea1336daf7cd33bf187e62fa2"},{url:"images/202301/dev-plan-logo.png",revision:"5d69e71ecd6e1b553395e2306fff5f34"},{url:"images/202301/live-stat-tracking-logo.png",revision:"23a418c1d29dbbf0142085f2e8ad464d"},{url:"images/202301/spiral-abyss-record-logo.png",revision:"6d213b91803137c600bb27b973a7ee25"},{url:"images/202301/weapon-wiki-logo.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202308/Calculator_Icon.png",revision:"7fb5a148e1ae7f98c4848f3601a158fb"},{url:"images/202308/Character_WIKI_Icon.png",revision:"efb6186847a600de2a4a429052d1c77b"},{url:"images/202308/Game_Launcher_Icon.png",revision:"3d1f2ce60f927919a4120b9e2206dca1"},{url:"images/202308/head-back.png",revision:"627872a2d3a6e0a9175362a2bce9df75"},{url:"images/202308/highlights-head.png",revision:"95af9689fe9b2659f4e1e8c6ad365d87"},{url:"images/202308/hoyolab-miyoushe-Icon.png",revision:"e06a266f679fb74b6259579846410d8c"},{url:"images/202308/My_Character_Icon.png",revision:"394b9ce7a3f8d92109dac083c1e916c8"},{url:"images/202308/UI_BtnIcon_Gacha.png",revision:"912a76ce2d4579c72ada39c79237279d"},{url:"images/202308/UI_ChapterIcon_Hutao.png",revision:"86791e433554edf6652ee9dfd0d4ef69"},{url:"images/202308/Weapon_WIKI_Icon.png",revision:"3f20fdf346dafbd370054f04ec00b8cf"},{url:"images/202309/head-back2.png",revision:"68cab275f36686f7032e495c58cc47df"},{url:"images/202309/security.png",revision:"1853661345ceb924817aae9ebdd7ec1f"},{url:"images/202312/1-8-5-installer.png",revision:"aa697cf352e40598be53ffd543378a4f"},{url:"images/202312/DGP-v3.webp",revision:"b84981827cc8f401ddc5590049e09d8d"},{url:"images/202312/genshin-pizza-helper-logo.webp",revision:"ef87a086cb120946887220bb9d325cd7"},{url:"images/202312/miao-plugin-logo.webp",revision:"376109bfb0be20f6e6552a2faa6de961"},{url:"images/202312/MSEdge.webp",revision:"36c15ad3c07c5d30788df358be4de586"},{url:"images/202312/ysin-logo.png",revision:"8bf3e90190298fe08c6bf8001e29c6da"},{url:"images/202402/aifadian-qr.png",revision:"5808dc46c9eb723584137c75355e3cfc"},{url:"images/202402/github-sponsor.png",revision:"36e36d7440093bc067861599f1597d61"},{url:"images/202402/paypal-qr.png",revision:"e2ca9effe9b5862fa5508d941b17375a"},{url:"images/202403/en-default-social.webp",revision:"79e869a5b39c24a57963a1048495e4cd"},{url:"images/202403/zh-default-social.webp",revision:"5fdbfa1de3ffa7af198a4c9929eb188a"},{url:"images/202404/wish_import_zh-cn.webp",revision:"635c813900b584f25f2eca59db5a9573"},{url:"images/202409/navicat.png",revision:"da2e6b3cd228afb814f94a5fbc112e95"},{url:"pwa-icon/chrome-144.png",revision:"24dd1f208ca63bef5c104659ae25c0e8"},{url:"pwa-icon/chrome-192.png",revision:"984b2a8dfd5dfb1cecfb73bc940bf070"},{url:"pwa-icon/chrome-48.png",revision:"a424e2c1b597db8e320cb3184c78ae23"},{url:"pwa-icon/chrome-512.png",revision:"06ecfca5b4c625d580608e04850f9f29"},{url:"pwa-icon/chrome-72.png",revision:"b9c2449570f275fd5dd34b887aa04697"},{url:"pwa-icon/chrome-96.png",revision:"64e04325061a5fa6de31f4b52bb7498f"}],{}),e.cleanupOutdatedCaches()}));

if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const d=e=>a(e,r),f={module:{uri:r},exports:t,require:d};s[r]=Promise.all(i.map((e=>f[e]||d(e)))).then((e=>(c(...e),t)))}}define(["./workbox-dbb64b4e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-4gG-pjDc.js",revision:"603894850918e0d0424fa87be67b1b21"},{url:"assets/404.html-9bOnWycz.js",revision:"4acc33e0d1f7dbc04acf7ca9bfb02f70"},{url:"assets/achievements.html-EoJGkD1B.js",revision:"75eab6790f6d5e7f011445af2520df05"},{url:"assets/achievements.html-GpJsK2Tr.js",revision:"13a76d7e8cfcf1bd939c185ee15085f9"},{url:"assets/achievements.html-PsXaUylm.js",revision:"0792f5bf552b1529c932e33fd9d8417f"},{url:"assets/achievements.html-uTrKTBCK.js",revision:"a62993551b44574ed6a3ee41ac48a0b7"},{url:"assets/app-OuYodr6H.js",revision:"bbc2de6a059c4fe17972aa22555ff490"},{url:"assets/bug-report.html-_80jqb9N.js",revision:"dd4ff31e58e3beab214b2fbf04647530"},{url:"assets/bug-report.html-aY2x-FN5.js",revision:"cdc39d1ae597168004ffecbec46ca1aa"},{url:"assets/bug-report.html-CDoV5ws1.js",revision:"0b90cc93185ccd747c1d04a2ccf8210e"},{url:"assets/bug-report.html-KddOaxPw.js",revision:"21f581fe823757b840484f0b7e6fa8b6"},{url:"assets/character-data.html-88dznjTZ.js",revision:"26bb97d023b8bf081334042267a35385"},{url:"assets/character-data.html-F-yceWYK.js",revision:"f3941634724fcc4938079fa9c55a2b01"},{url:"assets/character-data.html-fPv_Cxwb.js",revision:"2a5f321f9f48cbf2c4d0977cc84a6e46"},{url:"assets/character-data.html-R50Bd7l_.js",revision:"014d6ce2399620175221ef822cad612f"},{url:"assets/character-wiki.html-42i6T7bY.js",revision:"8dfc2f275cfe6ccfc8159cc3ffbdb9bd"},{url:"assets/character-wiki.html-6kUoe_J6.js",revision:"c254c0d48e5fcdac79185e870835dbf0"},{url:"assets/character-wiki.html-h_ggFZua.js",revision:"29cbf61ad3bf016c6425e12780765ce7"},{url:"assets/character-wiki.html-uCbkLjsZ.js",revision:"096c5b97e6f97906e0c90e31c4719c0c"},{url:"assets/community.html-6Oezc6i1.js",revision:"c48941c57445f24f36d123a5f0077bf9"},{url:"assets/community.html-IQDSqnTj.js",revision:"71332606383c4e36a048b81bfbe02c31"},{url:"assets/community.html-V4bxY1Qh.js",revision:"044388d4b7b8152ac5df304c080d0cc7"},{url:"assets/community.html-Z6_5SOa3.js",revision:"a79cccf21e8e32b592de530b129be7c8"},{url:"assets/contribute.html-fC5H4A5G.js",revision:"204b515728553ce1d712a01e2c249605"},{url:"assets/contribute.html-HyF-FrCh.js",revision:"9163c0f07be8b8235d69e33beebf0822"},{url:"assets/contribute.html-IkMELxU5.js",revision:"6e4e468fa32ec1b936a526d776450438"},{url:"assets/contribute.html-QRBrzrly.js",revision:"18599b25749263485f64f72421a43ddf"},{url:"assets/dashboard.html-CsJaTyr9.js",revision:"4f61da7b47cc877825b939ca85ef9c21"},{url:"assets/dashboard.html-kx7Os7TX.js",revision:"949ef7ebf2187a4a5d91c0c1269509a1"},{url:"assets/dashboard.html-POIEwmob.js",revision:"6512b63d0ea551b1358d8a3c5138e96a"},{url:"assets/dashboard.html-WN_gXrkS.js",revision:"196a6ca2646b2292ace1ae77cee8b4d0"},{url:"assets/dependency.html-69RDkzrx.js",revision:"e669ebecaa985c9836b7cbbe1a3b7efa"},{url:"assets/dependency.html-9jlTIvFJ.js",revision:"e8577918470c24e6896599ffc443359e"},{url:"assets/dependency.html-N91mP0Ch.js",revision:"b5ee646dfd87c942f66045de53ff1a4f"},{url:"assets/dependency.html-t0sEA9jr.js",revision:"d3871ed09de25645e5e2649b134fda44"},{url:"assets/develop-plan.html-04MzMrFk.js",revision:"d7d555b4c059c30376517d82b2a94bb6"},{url:"assets/develop-plan.html-HvVcaqs8.js",revision:"0ea5475c971b1fa3c7eac3c95d82c901"},{url:"assets/develop-plan.html-uROCCxVw.js",revision:"9070fb1ed188e5fa1c8efa2619e90818"},{url:"assets/develop-plan.html-zsxK1YRD.js",revision:"3a6cdf54b903958ecfec7c5c7910e89f"},{url:"assets/digitalocean-horizontal-0PPkcH8N.js",revision:"eaa4cbd043bf24493eda53d39fbaf796"},{url:"assets/docsearch-w40geAFS.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/exceptions.html-_WLwsuja.js",revision:"7b64b629084985f8e23406500320f942"},{url:"assets/exceptions.html-7V3OyAoi.js",revision:"968828e74ee284108dd0e46d80800d01"},{url:"assets/exceptions.html-i4yo7ffa.js",revision:"fe972e8c932f2355356f8dcac9ffcbeb"},{url:"assets/exceptions.html-z6IKQBvK.js",revision:"58eee745027c51eb8c1343189525e100"},{url:"assets/FAQ.html-5R-1j01E.js",revision:"dee0c9854d3a79e051cc52f64d85107c"},{url:"assets/FAQ.html-Fs9XCHnh.js",revision:"d12d556b2aae8b7b74449991cb200631"},{url:"assets/FAQ.html-hEusPaZ8.js",revision:"d391ac65a916f12ba49d8c0dbcfd5bd1"},{url:"assets/FAQ.html-Xj9cy9x4.js",revision:"85d981c1081e1f75f102f9bbb86676f2"},{url:"assets/Gacha-system-and-export-principal.html-_QlA6oLx.js",revision:"ce641ab3fb44cf7d3c118e52e2e9e4b7"},{url:"assets/Gacha-system-and-export-principal.html-60JzGweW.js",revision:"385487b7f739df0364b3ba995d99ceee"},{url:"assets/Gacha-system-and-export-principal.html-FY10vDAg.js",revision:"c294c2c93b1030af939992f5cac028c5"},{url:"assets/Gacha-system-and-export-principal.html-vTL6FZ9w.js",revision:"385487b7f739df0364b3ba995d99ceee"},{url:"assets/game-launcher.html-L4t5Ilhv.js",revision:"cb6971a8f93096c1c6183f14fc9a1c43"},{url:"assets/game-launcher.html-Nk3X3Ojt.js",revision:"2635847e7dc605d14b514d6118fc8436"},{url:"assets/game-launcher.html-sRMmbXxi.js",revision:"71f1999059b8cd19b382618e3b19e93e"},{url:"assets/game-launcher.html-uweDAArh.js",revision:"12c080905636496b224757904fb3862a"},{url:"assets/get-stoken-cookie-from-the-third-party.html-3nVu0sK9.js",revision:"48059663f453f004ae4149f5c79744bb"},{url:"assets/get-stoken-cookie-from-the-third-party.html-7u1jPizL.js",revision:"9d3b2e8302175083b16b328261736269"},{url:"assets/get-stoken-cookie-from-the-third-party.html-le9Yn2AH.js",revision:"dc026647681da97901bf0668ea77dd31"},{url:"assets/get-stoken-cookie-from-the-third-party.html-TFi5vIff.js",revision:"108fd238dd056f653eff3358b423b9ea"},{url:"assets/giscus-08zh9c_o.js",revision:"7a355a6881a3c86839ddda0adf6c24cd"},{url:"assets/hutao-API.html-5AYyzGHC.js",revision:"62e473ac45365d093a8bd9452e67243c"},{url:"assets/hutao-API.html-PTVRVq_q.js",revision:"e2a0169cbaf36f999014092d8eeb674b"},{url:"assets/hutao-API.html-U6Jkgmv5.js",revision:"758919d365aca0c710fab12cd937c3b2"},{url:"assets/hutao-API.html-X9AJGEwq.js",revision:"03a37192b30ba370ddfe14248af95f7b"},{url:"assets/hutao-settings.html-7jYmDbJM.js",revision:"5a49038d6e41a095c6a58534b035b254"},{url:"assets/hutao-settings.html-CqUdLRT_.js",revision:"cb5fe502c022604c20df1164c9cb854c"},{url:"assets/hutao-settings.html-laxGKyc1.js",revision:"29de7358a493fa103b296575307f106f"},{url:"assets/hutao-settings.html-sPNSGYTd.js",revision:"1786224fc4c4895618bfc8b2941ffde6"},{url:"assets/i18n.html-_2gLw7kP.js",revision:"baa9fa66b31c0976d12bc702842da205"},{url:"assets/i18n.html-3SnW2h-6.js",revision:"c4b1d2626298dff9d345783c66c1b9a8"},{url:"assets/i18n.html-Hec3LytF.js",revision:"68e4d353b0aae53d2c5978b3e3628243"},{url:"assets/i18n.html-TpqEu2tK.js",revision:"44c803e238def948e9d07097288798c9"},{url:"assets/index-7SG8bi1h.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index-QOy62Fup.js",revision:"fa112b5cda5ee3c969c504c6a3080b4c"},{url:"assets/index.html-_yNKobu1.js",revision:"9ffe27a7615b40759ba7b028789663a7"},{url:"assets/index.html--tkGwtSA.js",revision:"a82564d933793e0affc68f107fc031b3"},{url:"assets/index.html-8R5L0P8n.js",revision:"0154327f01966e8f842d7338dbff256d"},{url:"assets/index.html-90ViKLwH.js",revision:"e27fc2726626f0d0742d91d4d1c9b646"},{url:"assets/index.html-eFKAasYZ.js",revision:"663a7aa0a7ed31e4f7592730b456d6cc"},{url:"assets/index.html-eiW-S-IJ.js",revision:"ba6b856e2f62721ca48ef98e73646f01"},{url:"assets/index.html-j67qWmUw.js",revision:"c7c0762d6dd77f71bca7b5bd08c2104e"},{url:"assets/index.html-JdXbSnNV.js",revision:"ac0281f125ea23190af1738bf37f961e"},{url:"assets/index.html-k-nn-t5G.js",revision:"dcd77d6179cb0617a6fc8724ed2af99c"},{url:"assets/index.html-lSsNbtWJ.js",revision:"c8ab57eab23c38f8de4524c447b0dc4f"},{url:"assets/index.html-NAHPO6bx.js",revision:"d03d1eecdb1985f917bd9740ad857ee6"},{url:"assets/index.html-Ofu1T4xE.js",revision:"c111f87513d877faf4b149a7395dafd9"},{url:"assets/index.html-oRVsEwog.js",revision:"bf3c1c35c8edfea73bfa5e16c1ceb897"},{url:"assets/index.html-Q3FktEOE.js",revision:"a77ba6e2587e6102c09149d664581e02"},{url:"assets/index.html-sP6536fq.js",revision:"7ce152f576a76d0b447d3714fd2e9626"},{url:"assets/index.html-U5zGR-ts.js",revision:"956146dde4e408716097fbc6c753bd3e"},{url:"assets/index.html-u7dhWj6K.js",revision:"8f665d0443744369b1cd04a7ef359754"},{url:"assets/index.html-uGG8YVVE.js",revision:"a76214f3370dad0346d8f52df1fb1b15"},{url:"assets/index.html-uobblBUZ.js",revision:"0f2aff1517d1bd036737ca042d8b5d04"},{url:"assets/index.html-UuFiAOfM.js",revision:"de8de7dab77f3d8beb7480ed2831da3a"},{url:"assets/index.html-v8VRsHvY.js",revision:"5be997695838b814c5d5d375d30ca68a"},{url:"assets/index.html-Y3XJotmy.js",revision:"8e6c6fcb231bb32e1edbab3d575b033f"},{url:"assets/known-issue.html-AsD45-6w.js",revision:"67ee4533cb4264ff960dead3eae34430"},{url:"assets/known-issue.html-myOW_DvZ.js",revision:"4569188ce53dc2a1e6fd547bcc4a5090"},{url:"assets/known-issue.html-xZhbmmtK.js",revision:"2477a2e8cec3fe145c1f586abdab2efe"},{url:"assets/known-issue.html-ZNNqz3Nl.js",revision:"4b305e4b0574680442561ab9abb1afb7"},{url:"assets/menu.html-CUTEFx4a.js",revision:"12c6556cc554ffc067947e32eb3ce445"},{url:"assets/menu.html-feN8OI51.js",revision:"8d95517f785516ed28c184c8443a8a10"},{url:"assets/menu.html-gYxTWwFt.js",revision:"4fadc5124afa57f279e16beb5da8f795"},{url:"assets/menu.html-Wsg8Gzx_.js",revision:"62ca76b6c2b49d2f3e581153cd6d246b"},{url:"assets/mhy-account-switch.html-dGOlSCF6.js",revision:"a45c9a4e648d4ac3d1a364b70eb0e61c"},{url:"assets/mhy-account-switch.html-MFeN_Lel.js",revision:"b204d9518c9336203ee3fdd2eb1a112b"},{url:"assets/mhy-account-switch.html-U67zBViz.js",revision:"cd64d7c7287848c2efae0443ba2db1f5"},{url:"assets/mhy-account-switch.html-YI7Ehmrv.js",revision:"a7b9508fbf561048c43b568df3ecd41c"},{url:"assets/monster-wiki.html-bDKI5-rV.js",revision:"7970433e2b9746f25307b2fa55a36772"},{url:"assets/monster-wiki.html-D_hoNSUP.js",revision:"90df65cf22ca3ca9a26b0f5b8b49f00e"},{url:"assets/monster-wiki.html-IU_oI1N6.js",revision:"16f8fda35bffa7a5ba4ba2c2f7c22cb7"},{url:"assets/monster-wiki.html-kWn4_Zeu.js",revision:"af8c7c509085611dd3e15e1da05190dc"},{url:"assets/MSEdge-7LOvFlfM.js",revision:"664a8be7f006b82a3d2eac682334d154"},{url:"assets/photoswipe.esm-i2ohwMnJ.js",revision:"e9ff503527474b1afe53a1ee900448a3"},{url:"assets/platform.html-3VeBGyC3.js",revision:"f4a3b4723af281c3c3146be834b362de"},{url:"assets/platform.html-5s55Y0s7.js",revision:"4e97bf3bd6f497942a65bd0ed69364c2"},{url:"assets/platform.html-Hh866Ukk.js",revision:"89a4ccb7922e5cb9670e02ecdd58b44f"},{url:"assets/platform.html-HsMgn5cb.js",revision:"2abcfd223a1a099e9c4490f8ff6fe13a"},{url:"assets/plugin-vue_export-helper-x3n3nnut.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/privacy-notice.html-GX1Wk8K5.js",revision:"ccbb4203331610ce1af193c2dd780239"},{url:"assets/privacy-notice.html-jRIeIaNo.js",revision:"1ca5e8aba6f0bef9e69c17c6319191b9"},{url:"assets/privacy-notice.html-kPPK6KHT.js",revision:"f218bd86899a01a26c5754c2c2abfb95"},{url:"assets/privacy-notice.html-rZuf-4AO.js",revision:"a2760af798972147096754cf017bfad9"},{url:"assets/project.html-3t0piSRJ.js",revision:"be5e870c6783d2d4d284dcc80ffe092c"},{url:"assets/project.html-AMmA342a.js",revision:"68aee7d84c6ed5c7798c52944a4cfef1"},{url:"assets/project.html-VFEpC0fh.js",revision:"8b7bd376d882e29ce9bd60798ba8b388"},{url:"assets/project.html-wniM9j5o.js",revision:"65dea2e16a2399d6c2dca5d3a885c47a"},{url:"assets/quick-start.html-B7luNFAp.js",revision:"1ecd9aa35c4b3f79b78d1006ea3195a3"},{url:"assets/quick-start.html-hphoj2yK.js",revision:"550b1fbbcece015a73e9f67b52a3b6b6"},{url:"assets/quick-start.html-NFdfOS1f.js",revision:"e39805a354723117f947d9af69850659"},{url:"assets/quick-start.html-TRdCXS5i.js",revision:"29cbe2c2fff3a455b10bdeb46ca78183"},{url:"assets/real-time-notes.html-HikgteO8.js",revision:"268e632752a2061a0b47d08e0d61b232"},{url:"assets/real-time-notes.html-lf8Wx1kg.js",revision:"8b78216f937b1bcab42706be284aef40"},{url:"assets/real-time-notes.html-Nehwqp3L.js",revision:"e65f142d514ee140637c5b27fef42581"},{url:"assets/real-time-notes.html-T_7b9koR.js",revision:"110c9a9e726a36cdf01f7495d8a9b3ea"},{url:"assets/setup.html-gcHxc8bf.js",revision:"1acb7f93d32f27467eb7d52f57389127"},{url:"assets/setup.html-i2Hqark2.js",revision:"29faf34d3d34b295983b32617e7e13d7"},{url:"assets/setup.html-J4NZfre0.js",revision:"6f53b9f1930e2cac3d641fc5ec228489"},{url:"assets/setup.html-SqaXhuS-.js",revision:"2551599bf1b0970b41ed38a3d4dd5263"},{url:"assets/side-load.html-555fTP7L.js",revision:"d3123e3e80faa5a4ba2f51acb5b018b3"},{url:"assets/side-load.html-jUD8AHAw.js",revision:"5d079b0ff680f62cf8b3a8a817ad1aea"},{url:"assets/side-load.html-nUdICzu_.js",revision:"0415aa8e51f3730757e450a47b30d441"},{url:"assets/side-load.html-u3uHQKPT.js",revision:"5d079b0ff680f62cf8b3a8a817ad1aea"},{url:"assets/star-request.html-GM5UBz3w.js",revision:"79801dfbfe99d5202323c4f6f246c0a1"},{url:"assets/star-request.html-MJtwkID4.js",revision:"b0e65f6dd8e79f8bfb2dfa5e2ec286e3"},{url:"assets/star-request.html-Ne14YgV5.js",revision:"f390290f0b8b745aaae3aa40be565669"},{url:"assets/star-request.html-UqW8JDHF.js",revision:"27dfdc170327f7658b49d86d88cff1c4"},{url:"assets/style-w40geAFS.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/style-Y82TrPoN.css",revision:"6d54363781d167962c3d37136131a353"},{url:"assets/symposium1.html-HaoKbAlP.js",revision:"9e38d23bebd819ee8112e2306c0f6999"},{url:"assets/symposium1.html-iRoH9hdB.js",revision:"38c04b3a4a672954595ba7fd472c7be6"},{url:"assets/symposium2.html-dPv_x3Zr.js",revision:"83bd7a8365c087dc8c91a082b7cfb0a4"},{url:"assets/symposium2.html-pI_wmYA-.js",revision:"4737a434d776df0d0bee1391970bb013"},{url:"assets/tos.html-imZGNnIr.js",revision:"8e7d85d0312d23148ae83eab4b552adc"},{url:"assets/tos.html-lQ3y51rp.js",revision:"c3e5ffb4474234d29eae417e887bf134"},{url:"assets/tos.html-Npo571VG.js",revision:"668d37e9508582d680a270647bc68159"},{url:"assets/tos.html-X4eCKDPQ.js",revision:"a5509330b39e17b8587d6bf82fbca7a9"},{url:"assets/uninstall.html-eRRpPhpC.js",revision:"79bdca9323776fd73ad0d21f21437fa9"},{url:"assets/uninstall.html-H4tUyCnN.js",revision:"a4d27d8eb36ac36ae4c92b4f25674223"},{url:"assets/uninstall.html-pBUbqmrR.js",revision:"2dd52933f384e55cb10f07a2d65f9c61"},{url:"assets/uninstall.html-VhcO2EYU.js",revision:"f55bc67150df32515bdc68c1690ca6be"},{url:"assets/update-log.html-l6gQYbkd.js",revision:"6e85bcdf87c9146b75cc3486c3070583"},{url:"assets/update-log.html-PEQOj0XS.js",revision:"81c5fd09b2055fd5198fbd857e8c46c9"},{url:"assets/update-log.html-QtZhkSXB.js",revision:"908a162c506ed3fc6dcf7dd8336fbcd6"},{url:"assets/update-log.html-XtzwP5wL.js",revision:"5df9919bcf81ddafc60c1098e73ef143"},{url:"assets/weapon-wiki.html--dRRFXmW.js",revision:"a961e03b74a6d19cbf69601f91f2a27c"},{url:"assets/weapon-wiki.html-Dwp9GhFA.js",revision:"49f602a411138efd8ce35cfa6c50886c"},{url:"assets/weapon-wiki.html-iSvBdjB0.js",revision:"f66296240e5529f2ac48e19a0075f2cd"},{url:"assets/weapon-wiki.html-NhaQV8xn.js",revision:"9fcc3412dd2c6e3c6585e894b6fae4d8"},{url:"assets/wish-export.html-dEaB7WrD.js",revision:"f961f4036bbda46f45cf89a51565dd70"},{url:"assets/wish-export.html-pj_7F9pg.js",revision:"db3db35df312e25eee7c23fc40338f57"},{url:"assets/wish-export.html-S4lUDaG5.js",revision:"e94740d52a7512ddfd9df61af8db93dd"},{url:"assets/wish-export.html-XyT0PGAh.js",revision:"2d0cac968845f5bc436e697f71a0739c"},{url:"fontlist/demo.css",revision:"c470b271d96640b2d527d864d838d550"},{url:"fontlist/iconfont.css",revision:"47f9418c83e516e2f92fffa11e06ff9f"},{url:"fontlist/iconfont.js",revision:"787c135beed0ae93c145ae2de3cbfefe"},{url:"fontlist/iconfont.ttf",revision:"6d90ead1de012ad82077c2a898dcc136"},{url:"fontlist/iconfont.woff",revision:"c50542a321198d3a49a56ba9f50923f6"},{url:"fontlist/iconfont.woff2",revision:"a917e0d0985aaabe49b9bd5ad48bd270"},{url:"images/202312/1Password-logo.svg",revision:"70b83e6026ab134a2f7836d315201592"},{url:"images/202312/digitalocean-horizontal.svg",revision:"cc43a74e8c264d19bfd6575d9fd4e67d"},{url:"images/202312/gitlab-logo.svg",revision:"d06c9d4a634d4f0345fe4e35add3f933"},{url:"images/202312/uptime-kuma.svg",revision:"e4ed8e71ba8f67c89b305aab8f641790"},{url:"images/202312/uptimerobot-logo.svg",revision:"77e3e93be900d9d9b4d9ad69ce69662b"},{url:"upload-abyss-data.js",revision:"e3c5df0c4de06f2bd47d19d95f478c8e"},{url:"index.html",revision:"9efa460a6147f40a52fbdb8b04ce87c5"},{url:"404.html",revision:"e02b4867f4dde0a8af1fa5ccaf7f8ad9"},{url:"images/202209/Achievements.png",revision:"067cff70d53656b2e3e878df949823f6"},{url:"images/202209/HeroImageLogo.png",revision:"fb8507e3eaccbd6408874dcf10973d62"},{url:"images/202209/IndexIconAchievements.png",revision:"ea409f5a87b1c7666121ead606e323ef"},{url:"images/202209/IndexIconCharacters.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202209/IndexIconMihoyoBBS.png",revision:"b9c679888c01a50e6b126f9dae0d50d1"},{url:"images/202209/IndexIconWeapons.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202209/IndexIconWish.png",revision:"0b4e790c4cb1eeba7473ad8e1b14ac23"},{url:"images/202209/SGLogoUpgrade64.png",revision:"1b95d8969049e0b31c0d89eeface0b89"},{url:"images/202209/wish-export.png",revision:"ef07fa6499c22d00c78dc182ad3cbab5"},{url:"images/202210/1.1.7-Update-Error-Fix.png",revision:"1f1958198ca4510713648cff6c43fcd5"},{url:"images/202210/1.1.7-Update-Error.png",revision:"3e04317e974e1cec550096b7ea88d708"},{url:"images/202210/account-upgrade.png",revision:"52b1c5695109142c9496bb6e14a9c2d1"},{url:"images/202210/HttpRequestException.jpg",revision:"878a57ab9fe5de6b774d7e91776987ab"},{url:"images/202210/hutao-api-submit.png",revision:"6a201ae85f470f3bb70e868137524830"},{url:"images/202210/hutao-api.png",revision:"5bd260fe9b5c18a41765c1126cfd91ff"},{url:"images/202210/hutao-login.png",revision:"21af43587bacf56bf40cadc884381c49"},{url:"images/202211/character-data-display.png",revision:"0cd41e7a02ee864ff12f0f69c926b79f"},{url:"images/202211/character-data-logo.png",revision:"04cc28833ed4c2108ba215fbc33325bf"},{url:"images/202211/character-wiki-logo.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202211/character-wiki.png",revision:"002ee49f019709942ae1b3dc541d05e4"},{url:"images/202211/game-launcher-logo.png",revision:"a5a5d6d5a09926689f8a61db4b24c2df"},{url:"images/202211/hutao-api-logo.png",revision:"feb8ae3e6c4099e0b7804e3d7ebda7c2"},{url:"images/202211/wish-export.png",revision:"c695c558c514d9aa0d3903d5c41f63b9"},{url:"images/202301/achievement.png",revision:"42fd361ea1336daf7cd33bf187e62fa2"},{url:"images/202301/dev-plan-logo.png",revision:"5d69e71ecd6e1b553395e2306fff5f34"},{url:"images/202301/live-stat-tracking-logo.png",revision:"23a418c1d29dbbf0142085f2e8ad464d"},{url:"images/202301/spiral-abyss-record-logo.png",revision:"6d213b91803137c600bb27b973a7ee25"},{url:"images/202301/weapon-wiki-logo.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202308/Calculator_Icon.png",revision:"7fb5a148e1ae7f98c4848f3601a158fb"},{url:"images/202308/Character_WIKI_Icon.png",revision:"efb6186847a600de2a4a429052d1c77b"},{url:"images/202308/Game_Launcher_Icon.png",revision:"3d1f2ce60f927919a4120b9e2206dca1"},{url:"images/202308/head-back.png",revision:"627872a2d3a6e0a9175362a2bce9df75"},{url:"images/202308/highlights-head.png",revision:"95af9689fe9b2659f4e1e8c6ad365d87"},{url:"images/202308/hoyolab-miyoushe-Icon.png",revision:"e06a266f679fb74b6259579846410d8c"},{url:"images/202308/My_Character_Icon.png",revision:"394b9ce7a3f8d92109dac083c1e916c8"},{url:"images/202308/UI_BtnIcon_Gacha.png",revision:"912a76ce2d4579c72ada39c79237279d"},{url:"images/202308/UI_ChapterIcon_Hutao.png",revision:"86791e433554edf6652ee9dfd0d4ef69"},{url:"images/202308/Weapon_WIKI_Icon.png",revision:"3f20fdf346dafbd370054f04ec00b8cf"},{url:"images/202309/head-back2.png",revision:"68cab275f36686f7032e495c58cc47df"},{url:"images/202309/security.png",revision:"1853661345ceb924817aae9ebdd7ec1f"},{url:"images/202312/genshin-pizza-helper-logo.webp",revision:"ef87a086cb120946887220bb9d325cd7"},{url:"images/202312/miao-plugin-logo.webp",revision:"376109bfb0be20f6e6552a2faa6de961"},{url:"images/202312/MSEdge.webp",revision:"36c15ad3c07c5d30788df358be4de586"},{url:"images/202312/signpath-logo.png",revision:"b60b1d15de8d94117e1e1bd504951589"},{url:"images/202312/ysin-logo.png",revision:"8bf3e90190298fe08c6bf8001e29c6da"},{url:"pwa-icon/chrome-144.png",revision:"24dd1f208ca63bef5c104659ae25c0e8"},{url:"pwa-icon/chrome-192.png",revision:"984b2a8dfd5dfb1cecfb73bc940bf070"},{url:"pwa-icon/chrome-48.png",revision:"a424e2c1b597db8e320cb3184c78ae23"},{url:"pwa-icon/chrome-512.png",revision:"06ecfca5b4c625d580608e04850f9f29"},{url:"pwa-icon/chrome-72.png",revision:"b9c2449570f275fd5dd34b887aa04697"},{url:"pwa-icon/chrome-96.png",revision:"64e04325061a5fa6de31f4b52bb7498f"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map

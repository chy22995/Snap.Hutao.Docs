if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let d={};const t=e=>a(e,r),f={module:{uri:r},exports:d,require:t};s[r]=Promise.all(i.map((e=>f[e]||t(e)))).then((e=>(c(...e),d)))}}define(["./workbox-dbb64b4e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/1-8-5-installer-BiBVFR-v.js",revision:"cc13e2b00164710d0ed707ea46e4a8ef"},{url:"assets/404.html-GZf2BAPX.js",revision:"0afea664d29d2a6903c4ab15bf0e352a"},{url:"assets/achievements.html-B-uIaHxV.js",revision:"c8cf408bc7a3f7e370e26a346dbdb0dc"},{url:"assets/achievements.html-CgxtZev3.js",revision:"6073d685ea53d00f290af0018828aa4c"},{url:"assets/achievements.html-DWAs9dDl.js",revision:"29191891a27ce838997704c012d37c3a"},{url:"assets/achievements.html-DXiz4ipk.js",revision:"08fd9f16e2a3ae825eec3cd400c833f8"},{url:"assets/app-CkcpcBi1.js",revision:"4bc4084bb99eb04732010acfee7b734d"},{url:"assets/bug-report.html-BY6T86-M.js",revision:"2e19b49d8541b740010db00329e627a6"},{url:"assets/bug-report.html-CmYHSorM.js",revision:"9cf7246cf51d62830b7eb66e5ce5b32e"},{url:"assets/bug-report.html-CVAAVqmT.js",revision:"5070446120a211eb0ac1cbcc68419ac1"},{url:"assets/bug-report.html-D5yV6wcF.js",revision:"0b73767eacd16ecbadc605117f230edd"},{url:"assets/character-data.html-Bi5zVCsN.js",revision:"30aa1d6b16a84a3ceaf55c875fb51d14"},{url:"assets/character-data.html-ChWYQakg.js",revision:"6f723db53eed3bcc00790bbf317a676c"},{url:"assets/character-data.html-DGscWPLH.js",revision:"c634d1285d631e42fb03227e7a329a2c"},{url:"assets/character-data.html-wh7yBnWv.js",revision:"0fd9d032abab3063a0a3df7ceef2d83f"},{url:"assets/character-wiki.html-1qn6Fyvn.js",revision:"34ca28f6a62ec8dccfd5b63e678a2c98"},{url:"assets/character-wiki.html-BR8ilnFt.js",revision:"4f563bced07610c1d9185221cd89f83a"},{url:"assets/character-wiki.html-Cags_A0F.js",revision:"bfab2e03bc368a6fd1aa78310054b124"},{url:"assets/character-wiki.html-pDY_vz18.js",revision:"07ebe795a86014a9e5cdd82f2c5493d4"},{url:"assets/community.html-BbimQ026.js",revision:"1d7ae783f12e1352a099d4175acd263d"},{url:"assets/community.html-BuMgh-Nt.js",revision:"82a6debfdda3495f22d0913b32bed0d2"},{url:"assets/community.html-CMww4pcH.js",revision:"3b8fe0a8ec3ba37975968da5d6868d0b"},{url:"assets/community.html-DollzE-d.js",revision:"19368f0fc560427eb6c22729c30e43c7"},{url:"assets/contribute.html-B8n3Zf08.js",revision:"01260cb86b90fbd6ef71463708ce98ec"},{url:"assets/contribute.html-Bn6x9z-h.js",revision:"1ec96fc79f475b004a789381533c8697"},{url:"assets/contribute.html-s2lp7Dz8.js",revision:"e81b438051d310770854e06a07e5b51e"},{url:"assets/contribute.html-sqJU6gzl.js",revision:"b359e59f97ef93210497120d8b6e4155"},{url:"assets/dashboard.html-BFEnRgn4.js",revision:"371af6f0e6742cfef47d1478bcc04961"},{url:"assets/dashboard.html-Bz7EwYOF.js",revision:"d3f55e9bbc071c02fae408c60dd3282c"},{url:"assets/dashboard.html-C0_b0Prq.js",revision:"24c542b5cbc8d2bd9ff0c94043f0af5c"},{url:"assets/dashboard.html-CWqUmeKz.js",revision:"f444306f71a61d9943169c4051913b57"},{url:"assets/dependency.html-BkK1EW-g.js",revision:"0faf610b56536b98a2038757436e0e36"},{url:"assets/dependency.html-DrWWeayA.js",revision:"ffd2c42101748ea08cc7ba742a1b9d62"},{url:"assets/develop-plan.html-BMsW48wj.js",revision:"eb47d1617882f325e3a86acb06cfaa87"},{url:"assets/develop-plan.html-DYwrz21V.js",revision:"a09be49a4441d0c2a46e1bd12a0a3a3d"},{url:"assets/develop-plan.html-sfAzbEkM.js",revision:"cd9645ee98a0fd1c20bbbad25f730942"},{url:"assets/develop-plan.html-z9y4bc2u.js",revision:"30601b0eca66983a10f5a9c137c8d5a4"},{url:"assets/digitalocean-horizontal-Nm6MkYI3.js",revision:"eaa4cbd043bf24493eda53d39fbaf796"},{url:"assets/docsearch-l0sNRNKZ.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/exceptions.html-BLkQQMVQ.js",revision:"acaa04cbd743b15d74a9a1aa70db5405"},{url:"assets/exceptions.html-BoLG6-cL.js",revision:"df81b8b30edddb5a0327e258dc842db9"},{url:"assets/exceptions.html-CSNsrRMz.js",revision:"39d8bbc819ab51d783baad7fa9db6a30"},{url:"assets/exceptions.html-Cy9Whg_Q.js",revision:"0d432d832ff3772dbaef2ec9d0626321"},{url:"assets/FAQ.html-Bd1dtq57.js",revision:"7dc2ca49e165472c15ec5dfee188b8ed"},{url:"assets/FAQ.html-DD39EI8t.js",revision:"ea59c712db5cf3752d51f5d15d426a23"},{url:"assets/FAQ.html-DGt4W4of.js",revision:"cdff13706e59502ce8e0d0443371de00"},{url:"assets/FAQ.html-DY6kpkWX.js",revision:"77518d4436bba42f9f5eb9ed9b984d73"},{url:"assets/feedback-center.html-BfoO-SCK.js",revision:"9028b27f64338ac342905925f93c3f51"},{url:"assets/feedback-center.html-Dc71dqZK.js",revision:"e11d06a1704cacfbae5b4bdf29e0da13"},{url:"assets/Gacha-system-and-export-principal.html-2ILWMhTx.js",revision:"92bca2c814b34b83c8431fb4471cf5c4"},{url:"assets/Gacha-system-and-export-principal.html-BUTqS3Kk.js",revision:"98b838c1d85f92bfa9f70c0dbbf36a26"},{url:"assets/Gacha-system-and-export-principal.html-PP1uL_tO.js",revision:"114a0937ba23481a2049a2d1434dc395"},{url:"assets/Gacha-system-and-export-principal.html-xMis1MHC.js",revision:"d724a99e2073d0fe7197873598d15a44"},{url:"assets/game-launcher.html-1rUd2eH0.js",revision:"db4da20e95766279156e7cf84d553646"},{url:"assets/game-launcher.html-CGjCpvdX.js",revision:"1e967a81e410e32e18bea7c09ba307a1"},{url:"assets/game-launcher.html-DaIATv0B.js",revision:"b85f51b13528808d84fab5f2f0d1fa10"},{url:"assets/game-launcher.html-hMjFGlNg.js",revision:"24a53b4e49f4cc6ab353ace3ec8d624e"},{url:"assets/get-stoken-cookie-from-the-third-party.html-Bme4uURc.js",revision:"87c0c5433e1a77aad969c6c042287ea0"},{url:"assets/get-stoken-cookie-from-the-third-party.html-BRQr6wiS.js",revision:"433b0125185c685aa4ef09b3926f991e"},{url:"assets/get-stoken-cookie-from-the-third-party.html-CG7nA0Zb.js",revision:"2fb6d7cac13c5a5db2715469083bb760"},{url:"assets/get-stoken-cookie-from-the-third-party.html-Cv0RQfCs.js",revision:"9be795bc645071fda32c5b07d947a172"},{url:"assets/giscus-7BMGhbDA.js",revision:"dae7c2db562e417dc4bde3be5134780b"},{url:"assets/hutao-API.html-BK1-EBF7.js",revision:"b2598d69b5a2ed3b59b27ffa36df2d4b"},{url:"assets/hutao-API.html-bRkNWsf-.js",revision:"dce112b2f903e43145ac048d933f64ec"},{url:"assets/hutao-API.html-CCstPqCR.js",revision:"a4fda58072940d27a5ec71c731e8721d"},{url:"assets/hutao-API.html-EhhN2m62.js",revision:"edbb056e7f11e43f33526ffded14841a"},{url:"assets/hutao-passport.html-Bl_t21Lp.js",revision:"47fc88a5be559b1a1dddce8f89a74e25"},{url:"assets/hutao-passport.html-DulotX4n.js",revision:"3a81981917445072af25726541ce9419"},{url:"assets/hutao-settings.html-B44ECafU.js",revision:"ada61cada12b68dea67f6fb7c3ea2843"},{url:"assets/hutao-settings.html-BD5LZZ__.js",revision:"416a27cd9c93263cc5802ab0d7d0d29b"},{url:"assets/hutao-settings.html-Bnr9gTMJ.js",revision:"501a4b203659d1abfbfc13cae335641d"},{url:"assets/hutao-settings.html-FbWe2ngt.js",revision:"2002c5acd1484c7f2707413c69908898"},{url:"assets/i18n.html-BKHAmTTe.js",revision:"46d3ea36a761b496aac7403dbd4c29e3"},{url:"assets/i18n.html-Cy0IBXhP.js",revision:"8522412fefa1a5956198b63b2d6cd378"},{url:"assets/i18n.html-e_LO0c2x.js",revision:"1fc78223085868889f16b5693ccefe3a"},{url:"assets/i18n.html-K2t2iMkA.js",revision:"24c1f89a6a3fdebe6859e948dce3690e"},{url:"assets/index-DiZEX-Ml.js",revision:"fa112b5cda5ee3c969c504c6a3080b4c"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-AKvRpUCa.js",revision:"3bb2d4dd3861c858118109e6521f0aed"},{url:"assets/index.html-aWo1ksAG.js",revision:"e357ce30479b20b6afcff112f083c55f"},{url:"assets/index.html-B-1aZrXQ.js",revision:"cc8f0a0ff4f36d44fa8886ea2f1eb3f1"},{url:"assets/index.html-B86yxk_9.js",revision:"a8071fc390bd0d70882e14b17557f86f"},{url:"assets/index.html-B9D4fwCS.js",revision:"3625ce771b0438ab03169c303b0061a0"},{url:"assets/index.html-BkU7iiCi.js",revision:"5aa7f6816704564be67d5bf22c0cdd5d"},{url:"assets/index.html-Bol53Ej3.js",revision:"170b6512d52e49223ffc51a1aa76610e"},{url:"assets/index.html-BpNQEP45.js",revision:"9ea56ee28395d2846810484ea426fffb"},{url:"assets/index.html-Bq_4nzUm.js",revision:"47ddacdd13f3167e965dbfaf5d1e1c2c"},{url:"assets/index.html-C43rNfdC.js",revision:"0014e17f4e0978f220c86c918a37582e"},{url:"assets/index.html-CeUxw5IL.js",revision:"472d001c49179122878afc1e86f0c458"},{url:"assets/index.html-Ckt-fldK.js",revision:"669de61411b3985bea9fef98a55bd4c3"},{url:"assets/index.html-CNDCW8d_.js",revision:"a6427869f5345ad8f9d13115f10fbbd9"},{url:"assets/index.html-CvPCVxzR.js",revision:"65d64b7869e5a784b92a9a148b98651b"},{url:"assets/index.html-DAxOSawp.js",revision:"0d3c7884d69af8da3893ba48e14c6200"},{url:"assets/index.html-Dg3_B1ya.js",revision:"0caf7c23c1aa7c801b46c57c2cd5f0d8"},{url:"assets/index.html-DRrpd-Nf.js",revision:"76335e4e19a1d3cd2c37f6b8aeea763e"},{url:"assets/index.html-DTQaoYWJ.js",revision:"9bd3a41a4f8bd7f31bc774058c318fbe"},{url:"assets/index.html-DupZlmAU.js",revision:"8fec80655947e21ccff76447aa7766c7"},{url:"assets/index.html-jFb9090f.js",revision:"ac7c2a5b960e48c11a1b6f5359161559"},{url:"assets/index.html-PV5d9zRT.js",revision:"564dfeab7e1f93e782e95289a976d605"},{url:"assets/index.html-TamSwxcB.js",revision:"1ffd6b29952d264649901b53a340aec6"},{url:"assets/index.html-wPbrGdjj.js",revision:"97a04dff530ec106f911a0f66576c217"},{url:"assets/index.html-ZeHH6Zk_.js",revision:"ae8b0ee8cd3419b0c42302301524c6d8"},{url:"assets/join.html-B9ldx_11.js",revision:"c78b132cc9fb19dc1352430e09332061"},{url:"assets/join.html-BMYJw9OR.js",revision:"97ce4ffb80ef579f9e59bf296abac458"},{url:"assets/join.html-DjdAhoX_.js",revision:"cf9c4aac1e8cffabf4c3d90aef8d3bad"},{url:"assets/known-issue.html-3wQ7G_Lz.js",revision:"d308900304251afe172c08221f1f8d20"},{url:"assets/known-issue.html-BHaSikWd.js",revision:"81b601e1f2b66ed0dd3f790324c0e5d4"},{url:"assets/known-issue.html-CCgg-LEv.js",revision:"fb09fd2f5be458f2f0855475570c4602"},{url:"assets/known-issue.html-CHtI1JN5.js",revision:"396de6782242fce9758c2426dc575da5"},{url:"assets/menu.html-BWw8Aryw.js",revision:"6215535d74a9db9a3d3425b66fdf89b1"},{url:"assets/menu.html-CizB1uHQ.js",revision:"1e2c8fd297e776d39721909f2c071e2e"},{url:"assets/menu.html-Dw4-r05F.js",revision:"36497770f2769aba1c87b32005cdee72"},{url:"assets/menu.html-Yb-yk2au.js",revision:"3932519147fe86eec65baca8037e355f"},{url:"assets/mhy-account-switch.html-BshcBTuE.js",revision:"303255a8c2c372142aecb5ad75d078bf"},{url:"assets/mhy-account-switch.html-C9yT_txb.js",revision:"ac9b4fc9b0cfecf8117403177a04b92e"},{url:"assets/mhy-account-switch.html-CxWnJ_sM.js",revision:"d333014dd15b0006882145759322decc"},{url:"assets/mhy-account-switch.html-DTr22IEb.js",revision:"ed0a934b03cbb89934ed5880cd7d0deb"},{url:"assets/monster-wiki.html-DEucTH0n.js",revision:"69d174e7685569ff9540c26420bcae60"},{url:"assets/monster-wiki.html-DsTLm9rZ.js",revision:"65e8ac03c2bb09cef453214fb308d54d"},{url:"assets/monster-wiki.html-LZ05GeGM.js",revision:"1bfca078ffee8ce7a19fe5768fb1837b"},{url:"assets/monster-wiki.html-QlvFg7F_.js",revision:"3dfc9e047c56d6b7d86738f3a0996e11"},{url:"assets/MSEdge-Bvt55oa-.js",revision:"664a8be7f006b82a3d2eac682334d154"},{url:"assets/photoswipe.esm-SzV8tJDW.js",revision:"481d5342d9bb799640b63b15b698dcd4"},{url:"assets/platform.html-A8VzNNTm.js",revision:"f23e378e1dd0d8266e5fc587d9cc606b"},{url:"assets/platform.html-BgDzIS9V.js",revision:"17bce02d95582f531c904e9c71fc9667"},{url:"assets/platform.html-CE3x2Rq2.js",revision:"ab84d40997eb2cb97831549174240da0"},{url:"assets/platform.html-WMA8ACoq.js",revision:"98baf7a306cc9389b37c64eb75097b66"},{url:"assets/privacy-notice.html-BSi1Ss-l.js",revision:"311c20707ae32e3cef6cff385d43627f"},{url:"assets/privacy-notice.html-BZj4y-0H.js",revision:"1cc2ce2774a4c2ef576bb6500eaa9957"},{url:"assets/privacy-notice.html-DlfpxQqk.js",revision:"4d3eb9e91fb0773ab0ce8f34b81f2c88"},{url:"assets/privacy-notice.html-kQPXGXkv.js",revision:"c9029b177d2b1309e05a381c5b562636"},{url:"assets/project.html-BiV6R39R.js",revision:"bb3673a7e04a255e7a79dc39ff20d7a9"},{url:"assets/project.html-BZCLBAWF.js",revision:"be3914dfb0e523005bca3f5d6e97bc0c"},{url:"assets/project.html-CRZma6-f.js",revision:"74bf8b3db5f9d5ee5bd895abeafc3648"},{url:"assets/project.html-Cw60Mx-G.js",revision:"ba2b72c70aae377a1df5d89cc0ffd399"},{url:"assets/quick-start.html-BPKcNzGG.js",revision:"1198b96755755b092a047187ed2b1ab8"},{url:"assets/quick-start.html-Bwc3T1pp.js",revision:"830d72137866e2d0b052c90944d2c673"},{url:"assets/quick-start.html-DrKroRTH.js",revision:"0931d8e079826bf2f202954ef1605f3f"},{url:"assets/quick-start.html-DX34h-XH.js",revision:"8dee1c7ed962d788d661b7caff4d30a4"},{url:"assets/real-time-notes.html-BX7BTUUI.js",revision:"01e7894db42be94da0d36ea422fefc8d"},{url:"assets/real-time-notes.html-CwOWfs5h.js",revision:"906d2ae1b2dceaf4f2213790a5ed8c56"},{url:"assets/real-time-notes.html-Dqz_1xMB.js",revision:"51a19cfd5cf995217a5ec0bb6201b7e3"},{url:"assets/real-time-notes.html-DRwVoJXp.js",revision:"350c1960e36250f85cce2f4dd74499cd"},{url:"assets/setup.html-BcZzJ9QO.js",revision:"afe5ed8fb87c5a92a7075410eaf6402d"},{url:"assets/setup.html-BMbZ91j1.js",revision:"4c8d9455df5a1c6220cc4f9e2acb9631"},{url:"assets/setup.html-CafO7uKa.js",revision:"12b7d3d62c756877eb5383ec511f88d7"},{url:"assets/setup.html-CvLExVxK.js",revision:"e590b6923bd2cbdda2a3c0065bc01b1e"},{url:"assets/side-load.html-B8z6SQl0.js",revision:"5f3f854cff9fc574474207c56f525003"},{url:"assets/side-load.html-BUEpj2PB.js",revision:"3909ccf7d2ef96e0a32f4e165045986f"},{url:"assets/side-load.html-BwR2j-qR.js",revision:"09531642d1f79cc0d2eb258f39c5c067"},{url:"assets/side-load.html-DHLmBduJ.js",revision:"1e6ece3b76f0ea28fb1b2be1d9870fa4"},{url:"assets/star-request.html-B4tQRqEh.js",revision:"946c7e0c5a3113da4578a8fab8537c0a"},{url:"assets/star-request.html-D3hFYYt8.js",revision:"2d50c6553037b3895beeebbcbc504bf9"},{url:"assets/star-request.html-DoFmglnN.js",revision:"3585c20e3aac43a835b1af71a5b95ee6"},{url:"assets/star-request.html-foKsVm40.js",revision:"5ddf280c23b1e780810df4b0e408f1f7"},{url:"assets/style-Bfg3L92y.css",revision:"4124a2fd3673053d48924fa107e34905"},{url:"assets/style-l0sNRNKZ.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/support-us.html-BgALBtdA.js",revision:"500b1aeaabf74e313c7f3c38be36fac3"},{url:"assets/support-us.html-cT_we1yS.js",revision:"7292b060f7c41e18e44ccff9d91ba014"},{url:"assets/support-us.html-DK7Mst4P.js",revision:"995764a68c00a9fc51ae3c97d77531d3"},{url:"assets/support-us.html-Zj1oC_q9.js",revision:"47549863d906e9af91cc991e27b68139"},{url:"assets/symposium1.html-C5HgXCik.js",revision:"26b8d102dd8b86737a43a3062cca6ca4"},{url:"assets/symposium2.html-CJZJjL8s.js",revision:"e13c0e3c40d38b27e0516885f607199c"},{url:"assets/tos.html-Bj7oKfeA.js",revision:"0259c6eeb7c87ee911ff06f0378f9f02"},{url:"assets/tos.html-BJWgElP3.js",revision:"a810fb7f9e08bb676819e3e2eb52f6ad"},{url:"assets/tos.html-DimhG1NX.js",revision:"3bf38028c09ffb3ae8e8d5cb9fa901ef"},{url:"assets/tos.html-DZ0F-vXE.js",revision:"246142c001a2853460ce53532ba39fc1"},{url:"assets/uninstall.html-AaQFfUEB.js",revision:"1046bd089c206cc652a6d99be3f92425"},{url:"assets/uninstall.html-B0noCrKH.js",revision:"b757d245558230ed2ff8448d88837e38"},{url:"assets/uninstall.html-BAsGCKDL.js",revision:"e25c8fab9a95dbf697b2d1c0621e24fb"},{url:"assets/uninstall.html-f1DW_Bfr.js",revision:"8b1b1ade23115d4202e751d4b4555cc4"},{url:"assets/update-log.html-CaKWEuSj.js",revision:"0c50f4a47341c09c0f170d3a6fa33934"},{url:"assets/update-log.html-CVGaFcYh.js",revision:"28d43ce3f1892dbd27c83a1525d051ae"},{url:"assets/update-log.html-DSX9-mRT.js",revision:"46e01662eb6f1c91d413302613f1db72"},{url:"assets/update-log.html-U3HvJhw8.js",revision:"dbf8f4a168172af6baac4a141283b807"},{url:"assets/version-1-9-0-breaking-changes.html-C-2_Zkc_.js",revision:"512b95663f5da369a2930d8cb535a771"},{url:"assets/version-1-9-0-breaking-changes.html-CiQ5XIdF.js",revision:"b0636bfe99531e7a211be8d6d9252c13"},{url:"assets/version-1-9-0-breaking-changes.html-D0ITKInf.js",revision:"cb2938be79e0a11fa9c5af082c9be8b7"},{url:"assets/version-1-9-0-breaking-changes.html-DDovsvug.js",revision:"a620547ba74217665d3a3ffc2f14cbac"},{url:"assets/weapon-wiki.html-B3m1jmsh.js",revision:"19599a1f073d076389a5c7ab1b8d028e"},{url:"assets/weapon-wiki.html-C9E6v3Yk.js",revision:"0c9193f1747a60c54252a0c50f2ebec8"},{url:"assets/weapon-wiki.html-CiYIyShR.js",revision:"3ee1f53f1a450059ea47ae957f90bc6d"},{url:"assets/weapon-wiki.html-FUnl1OGY.js",revision:"164ecd175b9a52ff0a9e05731bdaab33"},{url:"assets/wish-export.html-BbeM-efi.js",revision:"54a594450773d5092b7d82d5046fc86f"},{url:"assets/wish-export.html-BBXwK1Wh.js",revision:"d256202c0093e492a9c3a5ae73cc0300"},{url:"assets/wish-export.html-ByIlwqbd.js",revision:"fd15317945a8ffb77a44daf95ec8af2a"},{url:"assets/wish-export.html-Iitfnjr-.js",revision:"a11fa4204f3502981caa76ca99626e8a"},{url:"fontlist/demo.css",revision:"c470b271d96640b2d527d864d838d550"},{url:"fontlist/iconfont.css",revision:"47f9418c83e516e2f92fffa11e06ff9f"},{url:"fontlist/iconfont.js",revision:"787c135beed0ae93c145ae2de3cbfefe"},{url:"fontlist/iconfont.ttf",revision:"6d90ead1de012ad82077c2a898dcc136"},{url:"fontlist/iconfont.woff",revision:"c50542a321198d3a49a56ba9f50923f6"},{url:"fontlist/iconfont.woff2",revision:"a917e0d0985aaabe49b9bd5ad48bd270"},{url:"images/202312/1Password-logo.svg",revision:"70b83e6026ab134a2f7836d315201592"},{url:"images/202312/C_sharp.svg",revision:"bdaccca278378c33d51a37613e6acd09"},{url:"images/202312/community.svg",revision:"a6416747c570bdf5443e2d03094adf2b"},{url:"images/202312/digitalocean-horizontal.svg",revision:"cc43a74e8c264d19bfd6575d9fd4e67d"},{url:"images/202312/discord.svg",revision:"1e0d18bad882e0adf80fd212bf879243"},{url:"images/202312/documents.svg",revision:"6cdb5625f4c6bd4c0abb725dd0a3332b"},{url:"images/202312/github-mark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"images/202312/gitlab-logo.svg",revision:"d06c9d4a634d4f0345fe4e35add3f933"},{url:"images/202312/jihulab.svg",revision:"16fdc7c7a02de0bf63a48c0e498d30fb"},{url:"images/202312/tencent.svg",revision:"b18acecbd9c07541fd34d6f07645c6ed"},{url:"images/202312/uptime-kuma.svg",revision:"e4ed8e71ba8f67c89b305aab8f641790"},{url:"images/202312/uptimerobot-logo.svg",revision:"77e3e93be900d9d9b4d9ad69ce69662b"},{url:"images/202312/video-editing.svg",revision:"be4022972dace1067ae8218338311658"},{url:"images/202312/Vue.js.svg",revision:"9a45fc7689867939804c469bfcd17784"},{url:"images/202401/javascript.svg",revision:"891a71b9a98f1d58491e1b06c4d356a2"},{url:"images/202401/Microsoft_Office_OneDrive.svg",revision:"51d2a9bb48ab28ba3a2aadbaa7a69f52"},{url:"images/202402/ux-design.svg",revision:"540420913952ca6b97c2e6d3e0d1d4c8"},{url:"svg/afd-official.svg",revision:"bec79d5731d1c28c509746469eaafd0c"},{url:"svg/afdian.svg",revision:"22e22e64ee9da786e70d0ead0dc1ef26"},{url:"svg/paypal.svg",revision:"1c4f7c36fe6bbed4976169bf2e4dab8a"},{url:"upload-abyss-data.js",revision:"e3c5df0c4de06f2bd47d19d95f478c8e"},{url:"404.html",revision:"01531dda7d1681a3d5692b05f16d91f7"},{url:"images/202209/Achievements.png",revision:"067cff70d53656b2e3e878df949823f6"},{url:"images/202209/HeroImageLogo.png",revision:"fb8507e3eaccbd6408874dcf10973d62"},{url:"images/202209/IndexIconAchievements.png",revision:"ea409f5a87b1c7666121ead606e323ef"},{url:"images/202209/IndexIconCharacters.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202209/IndexIconMihoyoBBS.png",revision:"b9c679888c01a50e6b126f9dae0d50d1"},{url:"images/202209/IndexIconWeapons.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202209/IndexIconWish.png",revision:"0b4e790c4cb1eeba7473ad8e1b14ac23"},{url:"images/202209/SGLogoUpgrade64.png",revision:"1b95d8969049e0b31c0d89eeface0b89"},{url:"images/202209/wish-export.png",revision:"ef07fa6499c22d00c78dc182ad3cbab5"},{url:"images/202210/1.1.7-Update-Error-Fix.png",revision:"1f1958198ca4510713648cff6c43fcd5"},{url:"images/202210/1.1.7-Update-Error.png",revision:"3e04317e974e1cec550096b7ea88d708"},{url:"images/202210/account-upgrade.png",revision:"52b1c5695109142c9496bb6e14a9c2d1"},{url:"images/202210/HttpRequestException.jpg",revision:"878a57ab9fe5de6b774d7e91776987ab"},{url:"images/202210/hutao-api-submit.png",revision:"6a201ae85f470f3bb70e868137524830"},{url:"images/202210/hutao-api.png",revision:"5bd260fe9b5c18a41765c1126cfd91ff"},{url:"images/202210/hutao-login.png",revision:"21af43587bacf56bf40cadc884381c49"},{url:"images/202211/character-data-display.png",revision:"0cd41e7a02ee864ff12f0f69c926b79f"},{url:"images/202211/character-data-logo.png",revision:"04cc28833ed4c2108ba215fbc33325bf"},{url:"images/202211/character-wiki-logo.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202211/character-wiki.png",revision:"002ee49f019709942ae1b3dc541d05e4"},{url:"images/202211/game-launcher-logo.png",revision:"a5a5d6d5a09926689f8a61db4b24c2df"},{url:"images/202211/hutao-api-logo.png",revision:"feb8ae3e6c4099e0b7804e3d7ebda7c2"},{url:"images/202211/wish-export.png",revision:"c695c558c514d9aa0d3903d5c41f63b9"},{url:"images/202301/achievement.png",revision:"42fd361ea1336daf7cd33bf187e62fa2"},{url:"images/202301/dev-plan-logo.png",revision:"5d69e71ecd6e1b553395e2306fff5f34"},{url:"images/202301/live-stat-tracking-logo.png",revision:"23a418c1d29dbbf0142085f2e8ad464d"},{url:"images/202301/spiral-abyss-record-logo.png",revision:"6d213b91803137c600bb27b973a7ee25"},{url:"images/202301/weapon-wiki-logo.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202308/Calculator_Icon.png",revision:"7fb5a148e1ae7f98c4848f3601a158fb"},{url:"images/202308/Character_WIKI_Icon.png",revision:"efb6186847a600de2a4a429052d1c77b"},{url:"images/202308/Game_Launcher_Icon.png",revision:"3d1f2ce60f927919a4120b9e2206dca1"},{url:"images/202308/head-back.png",revision:"627872a2d3a6e0a9175362a2bce9df75"},{url:"images/202308/highlights-head.png",revision:"95af9689fe9b2659f4e1e8c6ad365d87"},{url:"images/202308/hoyolab-miyoushe-Icon.png",revision:"e06a266f679fb74b6259579846410d8c"},{url:"images/202308/My_Character_Icon.png",revision:"394b9ce7a3f8d92109dac083c1e916c8"},{url:"images/202308/UI_BtnIcon_Gacha.png",revision:"912a76ce2d4579c72ada39c79237279d"},{url:"images/202308/UI_ChapterIcon_Hutao.png",revision:"86791e433554edf6652ee9dfd0d4ef69"},{url:"images/202308/Weapon_WIKI_Icon.png",revision:"3f20fdf346dafbd370054f04ec00b8cf"},{url:"images/202309/head-back2.png",revision:"68cab275f36686f7032e495c58cc47df"},{url:"images/202309/security.png",revision:"1853661345ceb924817aae9ebdd7ec1f"},{url:"images/202312/1-8-5-installer.png",revision:"aa697cf352e40598be53ffd543378a4f"},{url:"images/202312/DGP-v3.webp",revision:"b84981827cc8f401ddc5590049e09d8d"},{url:"images/202312/genshin-pizza-helper-logo.webp",revision:"ef87a086cb120946887220bb9d325cd7"},{url:"images/202312/miao-plugin-logo.webp",revision:"376109bfb0be20f6e6552a2faa6de961"},{url:"images/202312/MSEdge.webp",revision:"36c15ad3c07c5d30788df358be4de586"},{url:"images/202312/signpath-logo.png",revision:"b60b1d15de8d94117e1e1bd504951589"},{url:"images/202312/ysin-logo.png",revision:"8bf3e90190298fe08c6bf8001e29c6da"},{url:"images/202402/aifadian-qr.png",revision:"5808dc46c9eb723584137c75355e3cfc"},{url:"images/202402/github-sponsor.png",revision:"36e36d7440093bc067861599f1597d61"},{url:"images/202402/paypal-qr.png",revision:"e2ca9effe9b5862fa5508d941b17375a"},{url:"pwa-icon/chrome-144.png",revision:"24dd1f208ca63bef5c104659ae25c0e8"},{url:"pwa-icon/chrome-192.png",revision:"984b2a8dfd5dfb1cecfb73bc940bf070"},{url:"pwa-icon/chrome-48.png",revision:"a424e2c1b597db8e320cb3184c78ae23"},{url:"pwa-icon/chrome-512.png",revision:"06ecfca5b4c625d580608e04850f9f29"},{url:"pwa-icon/chrome-72.png",revision:"b9c2449570f275fd5dd34b887aa04697"},{url:"pwa-icon/chrome-96.png",revision:"64e04325061a5fa6de31f4b52bb7498f"}],{}),e.cleanupOutdatedCaches()}));

if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let d={};const t=e=>a(e,c),b={module:{uri:c},exports:d,require:t};s[c]=Promise.all(i.map((e=>b[e]||t(e)))).then((e=>(r(...e),d)))}}define(["./workbox-b584cb72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/1-8-5-installer-BiBVFR-v.js",revision:"cc13e2b00164710d0ed707ea46e4a8ef"},{url:"assets/404.html-C9c_F0tD.js",revision:"cfaea47c37c97ea440c09da2275ef998"},{url:"assets/achievements.html-0tkX-tQ2.js",revision:"9dfe2e59c8d8271bd7d29f96e7a5d131"},{url:"assets/achievements.html-BwCT0ejJ.js",revision:"f4c7dda67abfaee1671fc026231d074f"},{url:"assets/achievements.html-C74e0l5l.js",revision:"277b1cf4106cb54600fc7d66d1316eb7"},{url:"assets/achievements.html-TflzIn9U.js",revision:"9cf04c1c34a6aa001f79719986e3298d"},{url:"assets/app-CVcgL_mD.js",revision:"2e9e66f1819331bc7990851a07e9fbd7"},{url:"assets/archive.html--6vR6k6Y.js",revision:"1662ea22429fb28aa08ef6509b2a3902"},{url:"assets/bug-report.html-CNDhyR3-.js",revision:"26959c284c66c2a70a0e47d32f0f5d13"},{url:"assets/bug-report.html-DTMaUycA.js",revision:"9f08aa43b7166f66b94778674ddf24cf"},{url:"assets/bug-report.html-VtZXA8jx.js",revision:"0cd28a993a944957b93826cccbd06650"},{url:"assets/bug-report.html-Vw9_ZQcO.js",revision:"63bcfdb8ad8f70b603d3ae27763beb42"},{url:"assets/character-data.html-BRHfZCbD.js",revision:"81e1d41401a09b47e8e6b62fa79e8af3"},{url:"assets/character-data.html-CyUonlfX.js",revision:"6465b58de7d541cf22938658997eb183"},{url:"assets/character-data.html-uBweBMSh.js",revision:"ffcdf6785cb4f5239f2d584db0cd8727"},{url:"assets/character-data.html-Yk6v_Fe4.js",revision:"5374af4b342396002bcd1e14b93020aa"},{url:"assets/character-wiki.html-B1i5TNPM.js",revision:"dc95fedbe4b53c9a8bb4bdc7d8083738"},{url:"assets/character-wiki.html-CDZK-LLw.js",revision:"af47ddedf4d3e052226aa530acc73094"},{url:"assets/character-wiki.html-DEdHahX8.js",revision:"78e72693f97555d75bd26aa7d43b98e1"},{url:"assets/character-wiki.html-lH7qvLGd.js",revision:"1b8abea9498fe8c52be60664f89fff9a"},{url:"assets/community.html-BsK3MvvP.js",revision:"307b7e3bef43221768f4c5c391d5515d"},{url:"assets/community.html-CPGO4K6a.js",revision:"10a13449ab52bc554e89c53cfe4f73f5"},{url:"assets/community.html-CSWpR_ni.js",revision:"7c950b760c4d306116ae3f5217a5d088"},{url:"assets/community.html-k2twsy2h.js",revision:"6c1f2ab2ba7efdb30937532a5e505161"},{url:"assets/contribute.html-BoFzSSug.js",revision:"8d27a0161f535375f63210c34cfd3694"},{url:"assets/contribute.html-DbwGmu44.js",revision:"92a7944a314f005fb2256feef4b35292"},{url:"assets/contribute.html-DgMGDDlk.js",revision:"d5589e5b957d093e1f1f0a9f06c30dcf"},{url:"assets/contribute.html-nJF0T9aA.js",revision:"2b8f6400057d87bab1a6562cadc9a3b0"},{url:"assets/dashboard.html-cOK3wbYx.js",revision:"14703cc67c49a6dafe0bb4264aa31708"},{url:"assets/dashboard.html-CwceLJD_.js",revision:"3e6908709891b3eb6d6957e9470dfdc1"},{url:"assets/dashboard.html-DCA66avG.js",revision:"a8f912362f1b3c4e4e8253f9df28eeb8"},{url:"assets/dashboard.html-syNnGXh3.js",revision:"c14a3c2a4ee22e5e34644af40cba0a10"},{url:"assets/dependency.html-DaZh9xEE.js",revision:"c258cd07d1621ab2c0e3d966031549ae"},{url:"assets/dependency.html-DPDbFCEA.js",revision:"2a34d9f734a5f5783fed98af8d694584"},{url:"assets/develop-plan.html-BuafOgrJ.js",revision:"b8a4b14d538152408fd241e08abd3522"},{url:"assets/develop-plan.html-Csk5BpuL.js",revision:"befc4e323e175f46a5efcbda3995ea43"},{url:"assets/develop-plan.html-DM0S46Jy.js",revision:"a8132f58ceebb09b3e69fe6289ad6eb5"},{url:"assets/develop-plan.html-XcZOyWLl.js",revision:"42138023182b6fd941654c03dbdab921"},{url:"assets/exceptions.html-9eWyx2vU.js",revision:"e432a6401dce2edd7ca9b3acf87cab95"},{url:"assets/exceptions.html-B43q-93j.js",revision:"2ae4238a5a219c72f5dbca4efb51353d"},{url:"assets/exceptions.html-CgyRkOTx.js",revision:"18c6f9386ad5ee63642f903de443bb60"},{url:"assets/exceptions.html-DUmkljVY.js",revision:"fff7001eac634d4edab5770493604815"},{url:"assets/FAQ.html-BP24FZHX.js",revision:"848c34ebab84ad6bb92e0cadfec08ade"},{url:"assets/FAQ.html-BtZUWUgX.js",revision:"1838eea27e5ecfe4709ec3efdde5c11b"},{url:"assets/FAQ.html-CYsfPsft.js",revision:"38731d6de2ecc3e9b39cdca35ddaaa8d"},{url:"assets/FAQ.html-gavTShKh.js",revision:"42dd974ed9ce655597094e80ac7dac89"},{url:"assets/feedback-center.html-DKvqYCSw.js",revision:"9bbcd5dc7347948930fc07a5d83cd38d"},{url:"assets/feedback-center.html-yvAv0mcT.js",revision:"7fe305825678b68019e03249a2fa26b3"},{url:"assets/Gacha-system-and-export-principal.html-BixziFEO.js",revision:"ae485f898010766d99e6608ddeb428f3"},{url:"assets/Gacha-system-and-export-principal.html-BNXyrpiA.js",revision:"77512c6b53753fd1949e314f5da6b66a"},{url:"assets/Gacha-system-and-export-principal.html-Db14B1FF.js",revision:"86d0974a2b42bfd85ccf10aa91a2ac5b"},{url:"assets/Gacha-system-and-export-principal.html-DJwKBZVT.js",revision:"0162539061e5b8b2ee86b6b95d7d9709"},{url:"assets/game-launcher.html-347xDP5L.js",revision:"be169781c5d97d352ef447c01ffc3476"},{url:"assets/game-launcher.html-Bd_e0s30.js",revision:"690897b02f6cb0a85bd71ba29dbf25f3"},{url:"assets/game-launcher.html-BjnAgj2f.js",revision:"264a2a97cdab442e2785a12bf09f3a90"},{url:"assets/game-launcher.html-CwvVlyGF.js",revision:"8b4a0dc25d8dfa0c199c85ca8bec5a57"},{url:"assets/get-stoken-cookie-from-the-third-party.html-_AI-oEQN.js",revision:"4944bad5dbf905d37fa154bfecf9d9e9"},{url:"assets/get-stoken-cookie-from-the-third-party.html-B0cK2P4B.js",revision:"e0e3184a3f676b0aa8f27b3143cdb97e"},{url:"assets/get-stoken-cookie-from-the-third-party.html-CbJQcrOX.js",revision:"3f20ce56f34332b90aff12cc8b1ff5bb"},{url:"assets/get-stoken-cookie-from-the-third-party.html-DmxPYe1N.js",revision:"821ce620913892dff742b32bba4336c9"},{url:"assets/giscus-BZxmVUME.js",revision:"1b050c6cfcaa1d2cf1aae34338c9f637"},{url:"assets/hutao-API.html-0QLcB2Zn.js",revision:"e8f15b9d2f782e1d5fe15a01b99cdca1"},{url:"assets/hutao-API.html-3c-3_Kc5.js",revision:"eb8775090ddff7d6a759fa777e848153"},{url:"assets/hutao-API.html-C0UPmiLO.js",revision:"ddc7f5a1668a566d0d908a868f6414f5"},{url:"assets/hutao-API.html-S1mMcYJZ.js",revision:"9558c52c99aa91e4e29da4b9af7bb32c"},{url:"assets/hutao-passport.html-ClWh7kho.js",revision:"70681ed6d49b7595ae68cd6efcdd390e"},{url:"assets/hutao-passport.html-CyCV_G8w.js",revision:"05f0b01415e95844ca3079a43df16d44"},{url:"assets/hutao-settings.html-D671D5lf.js",revision:"cdf2ba98b7d1eba3aef6a69dfa41b089"},{url:"assets/hutao-settings.html-Dn6e1r6z.js",revision:"212b6e6516b8a2683b549bf4db929f32"},{url:"assets/hutao-settings.html-DZGq7s6_.js",revision:"3722df1be5526c3ccb657105965f504f"},{url:"assets/hutao-settings.html-LydIS2Zz.js",revision:"bae5a00fc18d472a8fcf3a67f168dbe9"},{url:"assets/i18n.html-BHwJjAbH.js",revision:"f0df4be99d0b25e72747c41ecf7d9d47"},{url:"assets/i18n.html-BN6jvbmr.js",revision:"2059bfb7a50ba13bdf2cf7ec99d7c9e7"},{url:"assets/i18n.html-DS50Kzj4.js",revision:"4d815baa4c7e0354cf8772e670eaecfa"},{url:"assets/i18n.html-RJ7X1Z5l.js",revision:"81624f79b4357b250b0c384d5aaae8a6"},{url:"assets/index-DCs6OeCW.js",revision:"b990dd0241ea9ef16614b01d0c6ad736"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-_GYeOEmn.js",revision:"c8b8e50ba51aaa084c7dfd7695f4e329"},{url:"assets/index.html-9bw0Y5N4.js",revision:"d7436860f6e33470de929ae849edc20f"},{url:"assets/index.html-B-IaDJSu.js",revision:"bcbeee06ff10b1a729cc55b680f75d9d"},{url:"assets/index.html-B1ZWD8PF.js",revision:"0c3baaae86ed60cb18846b08648e8f4f"},{url:"assets/index.html-BLlV_zd4.js",revision:"e12790ad03e35349c745cb56fe7c2a67"},{url:"assets/index.html-BrNHaNHs.js",revision:"953f895c4891036e9162e6d9634aa0f6"},{url:"assets/index.html-C4t7tKTZ.js",revision:"77092746bda458c034eb5998349cbbb0"},{url:"assets/index.html-CdKDNC4l.js",revision:"a82d829f7d217a0a870b3a527a471430"},{url:"assets/index.html-CE2hvBZo.js",revision:"43c22820a5298d96f7d4b4cd495304a6"},{url:"assets/index.html-Cte8StVg.js",revision:"410ec02c84334c802cc36217520acc6e"},{url:"assets/index.html-CZb02X-P.js",revision:"f540c7ae6524836ba8a9673cd46679cd"},{url:"assets/index.html-D1veHLZy.js",revision:"50ee4c4a86bfcba85884075e22526dbc"},{url:"assets/index.html-D5Uqis5T.js",revision:"af59ee0ebfc5d04a5590c31767a4d522"},{url:"assets/index.html-Dd23VgJM.js",revision:"3632d539f0955e7e6057ad7493fca7ff"},{url:"assets/index.html-De7oaF6s.js",revision:"a79368067cec952ea3c3950429121c6c"},{url:"assets/index.html-DmYraPrC.js",revision:"a752b209a9780bf2ccb24590f7618ee7"},{url:"assets/index.html-DnKqYDS_.js",revision:"4558d210ea4311d38b479ba3defa0ac3"},{url:"assets/index.html-DrNnD5ly.js",revision:"016a91e5f1e1430dc9baf1e1b8dbf1f4"},{url:"assets/index.html-DsJdvamv.js",revision:"f5e70e49ba49727a4e662c97cb373a27"},{url:"assets/index.html-Dsx3jxEq.js",revision:"a3dd8b5f000ae20fb6beabd15420803b"},{url:"assets/index.html-g1VlMtx_.js",revision:"7ffddcf3e5fec65ba3d4b8aa5afb29e1"},{url:"assets/index.html-mVN8W5PY.js",revision:"73c0fb0c22c13aec1956a978a657434c"},{url:"assets/index.html-ylidebIs.js",revision:"48ece8578d1e477f41efc42b1a633ac2"},{url:"assets/index.html-yrydro4Q.js",revision:"304fdc9b6111064c21a034b2f947f164"},{url:"assets/join.html-BEe937bN.js",revision:"ecd2736921435afabb3bf927cc4924b2"},{url:"assets/join.html-BmHdFWfD.js",revision:"1eb616291a2c831d116c620dbd8845d0"},{url:"assets/join.html-BNxpe89X.js",revision:"d1c305435e9a024b7303a9c001ddca57"},{url:"assets/known-issue.html-BZ-4aCcf.js",revision:"eaf896289b079d47c16418f5dedb32f4"},{url:"assets/known-issue.html-CMrZoPwX.js",revision:"e83fca8230f6c591df32bd04bad715a7"},{url:"assets/known-issue.html-D9CEQg-m.js",revision:"8c59f05b989b1a31db1e436fd3ede786"},{url:"assets/known-issue.html-DTP-RlL8.js",revision:"d5628090922dbb96e078252fa4dadb1d"},{url:"assets/latest.html-D8kkNM2e.js",revision:"d2aa45d7a52917f6f1ead73ba80b9b11"},{url:"assets/latest.html-ZfMMCNxW.js",revision:"1998933991982f51969a6c5ab189f368"},{url:"assets/menu.html-Big25bAj.js",revision:"4b2e514194e6ec31781a52d5b64386e2"},{url:"assets/menu.html-Co8YDAsj.js",revision:"aba99d479b3a4c153c47d3185d73e32b"},{url:"assets/menu.html-CzgiZIOd.js",revision:"7b773d70bc7b8cd118138c7c0e6e6e8b"},{url:"assets/menu.html-p6VzptHL.js",revision:"e03fe40f5985c64e6df4e16a6955c72a"},{url:"assets/mhy-account-switch.html-BSaM7W-0.js",revision:"a35db58e0759a1c788caaed816584eb4"},{url:"assets/mhy-account-switch.html-C1CK6bNz.js",revision:"caee5029a22c4a126650db9e81a67c2e"},{url:"assets/mhy-account-switch.html-CGNiAC2S.js",revision:"3603cdfa37cd27f7f80be0cd0bbd20ef"},{url:"assets/mhy-account-switch.html-D1qQBqLg.js",revision:"dedbc6c527b5269ffa5d767adf61119d"},{url:"assets/monster-wiki.html-Bso-_zP7.js",revision:"3455c555c0f87f1ce1001b0a8fce1a68"},{url:"assets/monster-wiki.html-CmGUO7ng.js",revision:"b21f3fb957553f8ef3418d059157271b"},{url:"assets/monster-wiki.html-CutrYmVB.js",revision:"093aaabde3d9f817b0deeb10d02f139e"},{url:"assets/monster-wiki.html-QwFVLdYK.js",revision:"3327df93f937d8528d9224df8c0d3031"},{url:"assets/MSEdge-Bvt55oa-.js",revision:"664a8be7f006b82a3d2eac682334d154"},{url:"assets/photoswipe.esm-GXRgw7eJ.js",revision:"9252721b01cd263ae52f9296614a7ddb"},{url:"assets/platform.html-BJm9C7LC.js",revision:"9852819cf2fabb352b1844b79dcfd562"},{url:"assets/platform.html-CLYJmP9h.js",revision:"5dae7ae107b477244befd2b7db6b78d3"},{url:"assets/platform.html-DCp06D7j.js",revision:"da0125139ce37c129e088b8dbccc4e2d"},{url:"assets/platform.html-Dpv4cm8f.js",revision:"af7ac902c85518e284362cebc67065c7"},{url:"assets/privacy-notice.html-B0LRDLjo.js",revision:"2d80520a86229d8c1e1d50962ced2a42"},{url:"assets/privacy-notice.html-BKfvDJ7X.js",revision:"fa97c083705f9b3fc933d58cecaffcb7"},{url:"assets/privacy-notice.html-hxC1SSbL.js",revision:"334c416da688b4e2286859698afcbb24"},{url:"assets/privacy-notice.html-WUyQbMos.js",revision:"64df358a4a5aef79ac5b3fc43d8cb529"},{url:"assets/project.html-BnPxxmG0.js",revision:"d2ac004ed4c0bf8363a8adac5420a4e5"},{url:"assets/project.html-BuArCVTn.js",revision:"10ab00a6bb1b6dc170bc04eefc20d787"},{url:"assets/project.html-CMMz-9tX.js",revision:"a989d5bcf87e8e22b01e0001463e1499"},{url:"assets/project.html-DG6xmZ7W.js",revision:"d3960f6b5bcd899916f3314350f1f822"},{url:"assets/quick-start.html-BzIbVlDA.js",revision:"5c50400293569614d6b5bd6a9def1a5c"},{url:"assets/quick-start.html-CuJoCY-Z.js",revision:"39db6fd4afd2f1494fd8e7e1a8415889"},{url:"assets/quick-start.html-CW6F9Eoe.js",revision:"9a04a5855cb753425f5655e375fba5a2"},{url:"assets/quick-start.html-Cxtux7GN.js",revision:"e6eccb696dc6c599fad360107b0c1a0e"},{url:"assets/real-time-notes.html-BoRFw87L.js",revision:"5afa532a6c918b33c47f202e79896515"},{url:"assets/real-time-notes.html-CjlTw-oW.js",revision:"2942bddeded2170abbda7e247d48c825"},{url:"assets/real-time-notes.html-D2uTYgrJ.js",revision:"d1e654dedf2113bd3a9d78930e90d01a"},{url:"assets/real-time-notes.html-W34p7QF1.js",revision:"3a28f5f4b648838916955842ef0e9acf"},{url:"assets/setup.html-BwQoXNk1.js",revision:"37e7117126b737a686cc66176a72e6fb"},{url:"assets/setup.html-CecDwCfE.js",revision:"af733c342323d9d099b8a95ba48b2cfd"},{url:"assets/setup.html-CQ-ogf1T.js",revision:"73b13fcecb74eb41d531dfa7afc4b500"},{url:"assets/setup.html-DJw4vcuC.js",revision:"8b561a03a88df27e1973ad28fa33006a"},{url:"assets/setupDevtools-7MC2TMWH-Dy2cJ8C6.js",revision:"b1cb5647d42bdc8b6fdd3641d98c6f7d"},{url:"assets/side-load.html-CollXrul.js",revision:"3d25d4adb07b27aa21346e66ad6d54cd"},{url:"assets/side-load.html-CPXXanPt.js",revision:"fd0e0cb5278d6b04e6af8115c072eb4d"},{url:"assets/star-request.html-Bxujw-jw.js",revision:"d32efc7e2d3f13b4eec1a434d2733e54"},{url:"assets/star-request.html-Ch1_alA1.js",revision:"70e9ec7539dac4b535457b0709c0580f"},{url:"assets/star-request.html-DpampSKT.js",revision:"a40d593b2fe44da16d6a86ced96bb7d7"},{url:"assets/star-request.html-JWu_tF-v.js",revision:"1cc3018f4a6a1fd3de790a394a261b7b"},{url:"assets/style-BH5Bz0jX.css",revision:"a28bcd04407280389603dc5cf89a0c59"},{url:"assets/support-us.html-BTyH7Soe.js",revision:"3293c832d4e4588fb72bde5c7fd66605"},{url:"assets/support-us.html-CujsA6Oh.js",revision:"1adb2ac0c11db1f319528dafe6298b32"},{url:"assets/support-us.html-CvsXOYbV.js",revision:"884b100a14a1cc454ed95289658f6905"},{url:"assets/support-us.html-jWsD22KN.js",revision:"344060a64096d0b1eaef757cfb329654"},{url:"assets/symposium1.html-C7mHhzkB.js",revision:"181443fd9e95af264a2ff95bbd4c5b74"},{url:"assets/symposium2.html-DtJ3MEMI.js",revision:"0e9a66ff292550af35444f67b5a0025a"},{url:"assets/tos.html-Cd3Ktm6o.js",revision:"35c47fb4e92aa228316f564af243bfd9"},{url:"assets/tos.html-CS-TUCF6.js",revision:"21d33fccf572435a5d6f51689a210104"},{url:"assets/tos.html-CTiHUarM.js",revision:"7407112237c59c479c68b5ba7da6617a"},{url:"assets/tos.html-DbGwov5f.js",revision:"41c465d591512d2244a0b070c04cfa46"},{url:"assets/uninstall.html-BYNO0WAG.js",revision:"bfe7f6b68e216ca05c96d2a7fb98bf25"},{url:"assets/uninstall.html-C8sL4mMN.js",revision:"81eaada94884ddb75e1b6265e7c2e14b"},{url:"assets/uninstall.html-DFAcq7K1.js",revision:"ce5efd358cbd40b960421f6a0512febc"},{url:"assets/uninstall.html-DrzWljwx.js",revision:"37e035179d5a91a787ac00eaec403f9f"},{url:"assets/update-log.html-8MjmV2oq.js",revision:"f2546d597781643b9c0b66cc7d68228e"},{url:"assets/update-log.html-Hgl5YaNT.js",revision:"2296d31b4d8bd3aa7ac5d03c2b5900b4"},{url:"assets/update-log.html-Ke58kMbA.js",revision:"c3961b6506d10492b84a5345a9b46dd0"},{url:"assets/update-log.html-Wl3nFKeF.js",revision:"e34c7839e53e695454a442268c437b69"},{url:"assets/version-1-9-0-breaking-changes.html-BFnaltFS.js",revision:"9d76007c4acfb9fb1786057a496d6b24"},{url:"assets/version-1-9-0-breaking-changes.html-C02tVAsr.js",revision:"09b61cc8a5cdb5a188330d7984cfdba4"},{url:"assets/version-1-9-0-breaking-changes.html-CQxCetpX.js",revision:"ee317fecb7bc9e5cec8988d256715c71"},{url:"assets/version-1-9-0-breaking-changes.html-D_AAsjGp.js",revision:"5bf8b0ca0bfaf41d0e8e04a4a3a6ad45"},{url:"assets/weapon-wiki.html-BAOY0U6a.js",revision:"cb5be7976c5ac49915e9e60def835c96"},{url:"assets/weapon-wiki.html-BsNs52D-.js",revision:"c2fe5ba0af0edc292a3000f25e363530"},{url:"assets/weapon-wiki.html-CU8oBSpG.js",revision:"c1ee061c0d40c3a7186e8308f7c5cfa8"},{url:"assets/weapon-wiki.html-xhFX2VZc.js",revision:"3fad3ff50960d58cf197fa607eb07a55"},{url:"assets/wish-export.html-BU5hUgMg.js",revision:"1cc66247731d94a62b9493b2eeec5746"},{url:"assets/wish-export.html-BxMw1-Ry.js",revision:"854ac963d42ae881cfc184861030cc2c"},{url:"assets/wish-export.html-Cclx2rfD.js",revision:"8433f60ba3584cc32f4c26ca860354d0"},{url:"assets/wish-export.html-DSprOirT.js",revision:"98199a9ef76fe7bfb19e6b75ddcdcd9b"},{url:"fontlist/demo.css",revision:"c470b271d96640b2d527d864d838d550"},{url:"fontlist/iconfont.css",revision:"47f9418c83e516e2f92fffa11e06ff9f"},{url:"fontlist/iconfont.js",revision:"787c135beed0ae93c145ae2de3cbfefe"},{url:"fontlist/iconfont.ttf",revision:"6d90ead1de012ad82077c2a898dcc136"},{url:"fontlist/iconfont.woff",revision:"c50542a321198d3a49a56ba9f50923f6"},{url:"fontlist/iconfont.woff2",revision:"a917e0d0985aaabe49b9bd5ad48bd270"},{url:"images/202312/C_sharp.svg",revision:"bdaccca278378c33d51a37613e6acd09"},{url:"images/202312/community.svg",revision:"a6416747c570bdf5443e2d03094adf2b"},{url:"images/202312/discord.svg",revision:"1e0d18bad882e0adf80fd212bf879243"},{url:"images/202312/documents.svg",revision:"6cdb5625f4c6bd4c0abb725dd0a3332b"},{url:"images/202312/github-mark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"images/202312/gitlab-logo.svg",revision:"d06c9d4a634d4f0345fe4e35add3f933"},{url:"images/202312/jihulab.svg",revision:"16fdc7c7a02de0bf63a48c0e498d30fb"},{url:"images/202312/tencent.svg",revision:"b18acecbd9c07541fd34d6f07645c6ed"},{url:"images/202312/uptime-kuma.svg",revision:"e4ed8e71ba8f67c89b305aab8f641790"},{url:"images/202312/uptimerobot-logo.svg",revision:"77e3e93be900d9d9b4d9ad69ce69662b"},{url:"images/202312/video-editing.svg",revision:"be4022972dace1067ae8218338311658"},{url:"images/202312/Vue.js.svg",revision:"9a45fc7689867939804c469bfcd17784"},{url:"images/202401/javascript.svg",revision:"891a71b9a98f1d58491e1b06c4d356a2"},{url:"images/202401/Microsoft_Office_OneDrive.svg",revision:"51d2a9bb48ab28ba3a2aadbaa7a69f52"},{url:"images/202402/ux-design.svg",revision:"540420913952ca6b97c2e6d3e0d1d4c8"},{url:"images/202409/Microsoft-logo.svg",revision:"4bd10316a77909a97d1f9853280406af"},{url:"svg/1Password.svg",revision:"5708d25efe8505cbc5e96c6d449f5642"},{url:"svg/afdian.svg",revision:"9da2c7d94a0313ac9706232c4b369a65"},{url:"svg/crowdin-core-logo-cDark.svg",revision:"f1f4a4fbdf0119336d8e75dc3c58d05d"},{url:"svg/digitalocean.svg",revision:"6dbae847fcc27d550bfa9f3539edee35"},{url:"svg/ducalis.svg",revision:"bbddb1f37e1206c0c742e22f5b609655"},{url:"svg/jetbrains.svg",revision:"95586e76f74896d783521d805f6c2881"},{url:"svg/navicat.svg",revision:"95ef31a69da150b3beba396d966ddfea"},{url:"svg/netlify.svg",revision:"cbedb0c756eb93467ce9282e89698571"},{url:"svg/paypal.svg",revision:"1c4f7c36fe6bbed4976169bf2e4dab8a"},{url:"svg/signpath.svg",revision:"9f952c652256a50fda86d0daddd03798"},{url:"svg/termius-logo.svg",revision:"4be8e7ad6c86ae83a3bf3b87ccc44c34"},{url:"upload-abyss-data.js",revision:"e3c5df0c4de06f2bd47d19d95f478c8e"},{url:"404.html",revision:"47367abed1931b3c356a8cfacfd6b2dd"},{url:"images/202209/Achievements.png",revision:"067cff70d53656b2e3e878df949823f6"},{url:"images/202209/HeroImageLogo.png",revision:"fb8507e3eaccbd6408874dcf10973d62"},{url:"images/202209/IndexIconAchievements.png",revision:"ea409f5a87b1c7666121ead606e323ef"},{url:"images/202209/IndexIconCharacters.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202209/IndexIconMihoyoBBS.png",revision:"b9c679888c01a50e6b126f9dae0d50d1"},{url:"images/202209/IndexIconWeapons.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202209/IndexIconWish.png",revision:"0b4e790c4cb1eeba7473ad8e1b14ac23"},{url:"images/202209/SGLogoUpgrade64.png",revision:"1b95d8969049e0b31c0d89eeface0b89"},{url:"images/202209/wish-export.png",revision:"ef07fa6499c22d00c78dc182ad3cbab5"},{url:"images/202210/1.1.7-Update-Error-Fix.png",revision:"1f1958198ca4510713648cff6c43fcd5"},{url:"images/202210/1.1.7-Update-Error.png",revision:"3e04317e974e1cec550096b7ea88d708"},{url:"images/202210/account-upgrade.png",revision:"52b1c5695109142c9496bb6e14a9c2d1"},{url:"images/202210/HttpRequestException.jpg",revision:"878a57ab9fe5de6b774d7e91776987ab"},{url:"images/202210/hutao-api-submit.png",revision:"6a201ae85f470f3bb70e868137524830"},{url:"images/202210/hutao-api.png",revision:"5bd260fe9b5c18a41765c1126cfd91ff"},{url:"images/202210/hutao-login.png",revision:"21af43587bacf56bf40cadc884381c49"},{url:"images/202211/character-data-display.png",revision:"0cd41e7a02ee864ff12f0f69c926b79f"},{url:"images/202211/character-data-logo.png",revision:"04cc28833ed4c2108ba215fbc33325bf"},{url:"images/202211/character-wiki-logo.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202211/character-wiki.png",revision:"002ee49f019709942ae1b3dc541d05e4"},{url:"images/202211/game-launcher-logo.png",revision:"a5a5d6d5a09926689f8a61db4b24c2df"},{url:"images/202211/hutao-api-logo.png",revision:"feb8ae3e6c4099e0b7804e3d7ebda7c2"},{url:"images/202211/wish-export.png",revision:"c695c558c514d9aa0d3903d5c41f63b9"},{url:"images/202301/achievement.png",revision:"42fd361ea1336daf7cd33bf187e62fa2"},{url:"images/202301/dev-plan-logo.png",revision:"5d69e71ecd6e1b553395e2306fff5f34"},{url:"images/202301/live-stat-tracking-logo.png",revision:"23a418c1d29dbbf0142085f2e8ad464d"},{url:"images/202301/spiral-abyss-record-logo.png",revision:"6d213b91803137c600bb27b973a7ee25"},{url:"images/202301/weapon-wiki-logo.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202308/Calculator_Icon.png",revision:"7fb5a148e1ae7f98c4848f3601a158fb"},{url:"images/202308/Character_WIKI_Icon.png",revision:"efb6186847a600de2a4a429052d1c77b"},{url:"images/202308/Game_Launcher_Icon.png",revision:"3d1f2ce60f927919a4120b9e2206dca1"},{url:"images/202308/head-back.png",revision:"627872a2d3a6e0a9175362a2bce9df75"},{url:"images/202308/highlights-head.png",revision:"95af9689fe9b2659f4e1e8c6ad365d87"},{url:"images/202308/hoyolab-miyoushe-Icon.png",revision:"e06a266f679fb74b6259579846410d8c"},{url:"images/202308/My_Character_Icon.png",revision:"394b9ce7a3f8d92109dac083c1e916c8"},{url:"images/202308/UI_BtnIcon_Gacha.png",revision:"912a76ce2d4579c72ada39c79237279d"},{url:"images/202308/UI_ChapterIcon_Hutao.png",revision:"86791e433554edf6652ee9dfd0d4ef69"},{url:"images/202308/Weapon_WIKI_Icon.png",revision:"3f20fdf346dafbd370054f04ec00b8cf"},{url:"images/202309/head-back2.png",revision:"68cab275f36686f7032e495c58cc47df"},{url:"images/202309/security.png",revision:"1853661345ceb924817aae9ebdd7ec1f"},{url:"images/202312/1-8-5-installer.png",revision:"aa697cf352e40598be53ffd543378a4f"},{url:"images/202312/DGP-v3.webp",revision:"b84981827cc8f401ddc5590049e09d8d"},{url:"images/202312/genshin-pizza-helper-logo.webp",revision:"ef87a086cb120946887220bb9d325cd7"},{url:"images/202312/miao-plugin-logo.webp",revision:"376109bfb0be20f6e6552a2faa6de961"},{url:"images/202312/MSEdge.webp",revision:"36c15ad3c07c5d30788df358be4de586"},{url:"images/202312/ysin-logo.png",revision:"8bf3e90190298fe08c6bf8001e29c6da"},{url:"images/202402/aifadian-qr.png",revision:"5808dc46c9eb723584137c75355e3cfc"},{url:"images/202402/github-sponsor.png",revision:"36e36d7440093bc067861599f1597d61"},{url:"images/202402/paypal-qr.png",revision:"e2ca9effe9b5862fa5508d941b17375a"},{url:"images/202403/en-default-social.webp",revision:"79e869a5b39c24a57963a1048495e4cd"},{url:"images/202403/zh-default-social.webp",revision:"5fdbfa1de3ffa7af198a4c9929eb188a"},{url:"images/202404/wish_import_zh-cn.webp",revision:"635c813900b584f25f2eca59db5a9573"},{url:"images/202409/navicat.png",revision:"da2e6b3cd228afb814f94a5fbc112e95"},{url:"pwa-icon/chrome-144.png",revision:"24dd1f208ca63bef5c104659ae25c0e8"},{url:"pwa-icon/chrome-192.png",revision:"984b2a8dfd5dfb1cecfb73bc940bf070"},{url:"pwa-icon/chrome-48.png",revision:"a424e2c1b597db8e320cb3184c78ae23"},{url:"pwa-icon/chrome-512.png",revision:"06ecfca5b4c625d580608e04850f9f29"},{url:"pwa-icon/chrome-72.png",revision:"b9c2449570f275fd5dd34b887aa04697"},{url:"pwa-icon/chrome-96.png",revision:"64e04325061a5fa6de31f4b52bb7498f"}],{}),e.cleanupOutdatedCaches()}));

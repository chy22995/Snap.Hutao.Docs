if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(a[f])return;let r={};const d=e=>s(e,f),t={module:{uri:f},exports:r,require:d};a[f]=Promise.all(i.map((e=>t[e]||d(e)))).then((e=>(c(...e),r)))}}define(["./workbox-cbd5c79e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-16a766b7.js",revision:"e2c5d252338df295c4b0d96861c90346"},{url:"assets/404.html-32d5d192.js",revision:"767836dc23b8d2228d857260ce64e683"},{url:"assets/achievements.html-27f51021.js",revision:"03e8c69508505f64c8469e018e4af963"},{url:"assets/achievements.html-45b07921.js",revision:"0e34bfabe0d33b5aa6a510bf23a4a026"},{url:"assets/achievements.html-5e80e4ae.js",revision:"44f48c8e90293f17fc68f61720d52834"},{url:"assets/achievements.html-76199197.js",revision:"44f48c8e90293f17fc68f61720d52834"},{url:"assets/app-ed89f092.js",revision:"710f14954b563d95dae60ff5ef4cf6c2"},{url:"assets/artifact-rating-rules.html-2550311a.js",revision:"fe6d5b20b24fc6cef45ced11b6d3371b"},{url:"assets/artifact-rating-rules.html-4a903cc3.js",revision:"6b00e126cee54287f549e696ec5aaa45"},{url:"assets/artifact-rating-rules.html-5f0404b1.js",revision:"6b00e126cee54287f549e696ec5aaa45"},{url:"assets/artifact-rating-rules.html-6f9d5a47.js",revision:"a99a01284dd6a4c2c84c34c0585a71f6"},{url:"assets/auto-d78e464f.js",revision:"8bda88b090b6d8b957cc045297ef11c1"},{url:"assets/bug-report.html-8005758c.js",revision:"6b308e0f45b58b6388511d42ed7fddce"},{url:"assets/bug-report.html-b552c51c.js",revision:"b0ab472e2cf5a752e93b9d8cc1252701"},{url:"assets/bug-report.html-b888ab18.js",revision:"52e2c84ec7561585c99ddd0dc70ce32b"},{url:"assets/bug-report.html-f69951f4.js",revision:"3274c4af5177fd78bee641bfd34c8f28"},{url:"assets/character-data.html-1c1cfa19.js",revision:"abf0ecd175396bfd101e1b0525be9f34"},{url:"assets/character-data.html-82865b71.js",revision:"937b319a3b3f5beb486bd7ae3ab76b23"},{url:"assets/character-data.html-a4db5b4e.js",revision:"2d898450a7a5759335faddba316878aa"},{url:"assets/character-data.html-f3422aa1.js",revision:"5bb5f8ef2be74136752a195ae720cfe6"},{url:"assets/character-wiki.html-509d6ec0.js",revision:"1cffb97865c2e8f1f9ad6c44aa61957d"},{url:"assets/character-wiki.html-8f26f5ab.js",revision:"402f79fa9c77e356031a63372bc6dc93"},{url:"assets/character-wiki.html-9cf95bee.js",revision:"736916353dd6757dece32845993d91ac"},{url:"assets/character-wiki.html-a15edc72.js",revision:"d18f2723e5806166f7a86a49b2f90e6c"},{url:"assets/community.html-4259ed5c.js",revision:"78d9fed5197844c2c2e29e4845bdd846"},{url:"assets/community.html-53fe549d.js",revision:"49c3a4699b0762ebbdb5de8aaf010728"},{url:"assets/daily-notes.html-010f2176.js",revision:"9a40b86e3ffc280b207c3179469c9fdc"},{url:"assets/daily-notes.html-29eff528.js",revision:"f7d90f1498ae1fbd17d32be2fbf00a30"},{url:"assets/daily-notes.html-97754985.js",revision:"aec5ad7254ceadc09360354c4d8e2033"},{url:"assets/daily-notes.html-ef706e3e.js",revision:"8bb32e8362d99dc9b8722592ee0f62d4"},{url:"assets/develop-plan.html-18770f6f.js",revision:"ba5c558de46b034e041e7cc40ef54ab6"},{url:"assets/develop-plan.html-4cbccf68.js",revision:"71b8c245829e4f10166a9900b7999766"},{url:"assets/develop-plan.html-5365831e.js",revision:"f958237044ad8984d5e04e02cf5ec2a4"},{url:"assets/develop-plan.html-c6ac2429.js",revision:"b7419b2cd53c5216dc69800c20c6b29a"},{url:"assets/diagram-definition.0faef4c2-4dda171c.js",revision:"a60e9e560547fcf23096d6233149cdab"},{url:"assets/flowchart.parse-0007e96c.js",revision:"5fce68ee48d56167c2948760a4066c2d"},{url:"assets/framework-2ba0305e.js",revision:"5a3eced9620bbb97af1c0eda68f55587"},{url:"assets/Gacha-system-and-export-principal.html-3b5455ce.js",revision:"ad498c162d111c173538f5cfed475db6"},{url:"assets/Gacha-system-and-export-principal.html-8d0fa850.js",revision:"5b2642bee3b1bb1b6a75be8039bfd438"},{url:"assets/Gacha-system-and-export-principal.html-97d86c4b.js",revision:"ad498c162d111c173538f5cfed475db6"},{url:"assets/Gacha-system-and-export-principal.html-cd4faf5f.js",revision:"5fae7d3affb63fedee766a9266d25263"},{url:"assets/game-launcher.html-08956561.js",revision:"e63051e0d466a39edc5e8d81f55df784"},{url:"assets/game-launcher.html-1ba6056b.js",revision:"e670c5893ab201d065a25b27f81ddf1c"},{url:"assets/game-launcher.html-532f25ae.js",revision:"21e223f9cfb10e8291df7676754cffc2"},{url:"assets/game-launcher.html-d367bfe6.js",revision:"abe62f1ee82facb66b2445e18f224130"},{url:"assets/get-stoken-cookie-from-the-third-party.html-703bb4a1.js",revision:"fe1c3a448504625f5e9895c2e4b83f1f"},{url:"assets/get-stoken-cookie-from-the-third-party.html-9c810150.js",revision:"4e1537e3ec5abe5dfca3ffcec4852d66"},{url:"assets/get-stoken-cookie-from-the-third-party.html-a069d9e6.js",revision:"ae6717b78f93a31fdd8496133bcd0a17"},{url:"assets/get-stoken-cookie-from-the-third-party.html-f336e33e.js",revision:"84b656aa4b520f1971ef5caef21ceb88"},{url:"assets/highlight.esm-a794bb63.js",revision:"0949b348e0e7d26440159b7c6c417cad"},{url:"assets/how-to.html-437f0776.js",revision:"d682270a5c98a09107e40924eadeaad0"},{url:"assets/how-to.html-6bd4a98b.js",revision:"8d6f93d375e3ec0cafeb5dc401830705"},{url:"assets/how-to.html-98740b56.js",revision:"8d6f93d375e3ec0cafeb5dc401830705"},{url:"assets/how-to.html-cd746f31.js",revision:"80d3d06625f8393fb859f15e6c8d73ff"},{url:"assets/HttpRequestException.html-30830cd8.js",revision:"e44a79fe3ec4a119bc63ce4bf296c684"},{url:"assets/HttpRequestException.html-eec3d65c.js",revision:"47d7e866976b1a0a9a8c0f6329ae4c44"},{url:"assets/HttpRequestException.html-f63fd0af.js",revision:"53856f061a0c2df0020ece84f4fdbda7"},{url:"assets/HttpRequestException.html-fe1fbda0.js",revision:"53856f061a0c2df0020ece84f4fdbda7"},{url:"assets/hutao-API.html-4a5274dd.js",revision:"e1aeb182dbe85908c7283414dbb0f4fe"},{url:"assets/hutao-API.html-6d61b1a5.js",revision:"0e20479350591dc072988c00433ca31f"},{url:"assets/hutao-API.html-d894b7e4.js",revision:"be4a722e7f89c4e06e540819802966fe"},{url:"assets/hutao-API.html-f638b185.js",revision:"bc63866997154cf39ce5f9f546e125bc"},{url:"assets/hutao-settings.html-17dd4e4e.js",revision:"516054867b7dcc29778ba85c623c0eaf"},{url:"assets/hutao-settings.html-ecc905c0.js",revision:"9176d2e52237be4a9fd3ce75882a2fd5"},{url:"assets/hutao-settings.html-f04f126d.js",revision:"b854f340ce581b45cd0b8d47f655efd4"},{url:"assets/hutao-settings.html-f54a9bdd.js",revision:"0e62bf8d0faa94b51bc1d6f92679f595"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index-8764208e.js",revision:"42b6232acbe6be5d6ef5707e7f046345"},{url:"assets/index.html-00b54548.js",revision:"289da15ad33f2f1167362c60d126e8ef"},{url:"assets/index.html-03f9fecb.js",revision:"33f045cce152e734b2a82e2cfd98773f"},{url:"assets/index.html-06a53882.js",revision:"118fff41781c29007ea57035adbaca5d"},{url:"assets/index.html-211bc65b.js",revision:"118fff41781c29007ea57035adbaca5d"},{url:"assets/index.html-2b92dc30.js",revision:"8ea8cea8ac4d5e59e7798093bc8677f7"},{url:"assets/index.html-2bc60034.js",revision:"ce207c465f671f6bf09b6747c4351118"},{url:"assets/index.html-318a4b43.js",revision:"fc60f4e715ee94d2b2ff1be6c6032ea0"},{url:"assets/index.html-4f0d6788.js",revision:"57e712e4ca15d31bfc1f6cba9b54c883"},{url:"assets/index.html-534cbddc.js",revision:"155d89b1b295a149a383d2a1a8f90d66"},{url:"assets/index.html-59219388.js",revision:"d6dd7b2735dcfc66bc1d5f6993d169a3"},{url:"assets/index.html-60c96614.js",revision:"18d82e7c24d6435c807cfed62bd41066"},{url:"assets/index.html-70bd87c1.js",revision:"118fff41781c29007ea57035adbaca5d"},{url:"assets/index.html-711efad7.js",revision:"118fff41781c29007ea57035adbaca5d"},{url:"assets/index.html-79b9b84e.js",revision:"2898d55fa0b6dabfeffe7d9aabfee175"},{url:"assets/index.html-980d6677.js",revision:"118fff41781c29007ea57035adbaca5d"},{url:"assets/index.html-9a5db4e1.js",revision:"118fff41781c29007ea57035adbaca5d"},{url:"assets/index.html-9f224ff0.js",revision:"5f3abd874c2117baf7ce0aa56e318054"},{url:"assets/index.html-b99ea40b.js",revision:"8ea8cea8ac4d5e59e7798093bc8677f7"},{url:"assets/index.html-bade9fc8.js",revision:"5f3abd874c2117baf7ce0aa56e318054"},{url:"assets/index.html-c8b6cf82.js",revision:"f18219a783a1cdd1c4a9e6ef003b3431"},{url:"assets/KaTeX_AMS-Regular-0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular-30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular-68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold-07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold-1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold-de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular-3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular-5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular-ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold-74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold-9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold-9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular-1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular-51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular-5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold-0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold-138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold-c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic-70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic-99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic-a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic-0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic-97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic-f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular-c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular-c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular-d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic-850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic-dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic-f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic-08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic-7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic-8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold-1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold-e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold-ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic-00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic-3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic-91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular-11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular-68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular-f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular-036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular-1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular-d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular-6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular-95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular-c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular-2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular-a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular-d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular-500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular-6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular-99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular-a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular-c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular-71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular-e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular-f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm-d92a2fc9.js",revision:"2782fb14c80757ca6a815363b87defce"},{url:"assets/markmap.html-0f0f34c6.js",revision:"5e8ae701e7f5764c10d55096c2a2fd1b"},{url:"assets/markmap.html-2fff53c7.js",revision:"3233a666316a557e389cbc563a15fc83"},{url:"assets/markmap.html-d05a696f.js",revision:"3233a666316a557e389cbc563a15fc83"},{url:"assets/markmap.html-f4ccea80.js",revision:"0086885c383084d2b3780e3dc111ec64"},{url:"assets/math.esm-70a288c8.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/mermaid-mindmap.esm.min-1827c704.js",revision:"91e16ba87aa57043f79aa00a10b8ff49"},{url:"assets/mermaid.esm.min-bc08675d.js",revision:"e0d3e0388f4fdfd93ab5b9a67d2ab92b"},{url:"assets/mhy-account-switch.html-3780dc72.js",revision:"0b1ca2bcd24bedaab43e54239bdc093b"},{url:"assets/mhy-account-switch.html-96cfdf54.js",revision:"2741d8c4a11772862f8a18a7b630b438"},{url:"assets/mhy-account-switch.html-b6e2ae33.js",revision:"aa8f4f204d3d576c45029b3a10c35310"},{url:"assets/mhy-account-switch.html-d713d3a7.js",revision:"41b8279a296100065c92746da196e3f5"},{url:"assets/mihoyo-risk-tip.html-0cc42bbd.js",revision:"c67ac88f7a12ffaac543367c8ad382d3"},{url:"assets/mihoyo-risk-tip.html-5db21af5.js",revision:"2881c74b3875a9097fdbf21a132dd719"},{url:"assets/mihoyo-risk-tip.html-b6dfe79e.js",revision:"dc531981f40eac608d447c7140de0c49"},{url:"assets/mihoyo-risk-tip.html-c0a58fdc.js",revision:"02d1be8bca2ba52faf6515dfeea31b6a"},{url:"assets/notes.esm-224f94d9.js",revision:"fbad6b0fa80d99a444266ec8836ab70c"},{url:"assets/photoswipe.esm-a9093b7c.js",revision:"e5f2011f608af205681b3a6e1023fab7"},{url:"assets/privacy-notice.html-578ecec2.js",revision:"a7fc450c62b648fa76698bdc6be8de83"},{url:"assets/privacy-notice.html-5a03dba8.js",revision:"a7fc450c62b648fa76698bdc6be8de83"},{url:"assets/privacy-notice.html-63f617f2.js",revision:"38a637900f0e1130d87ffac7c377d5a4"},{url:"assets/privacy-notice.html-7a160e19.js",revision:"049d9eda61455a3765aad9e8fe119b8d"},{url:"assets/project.html-2a1f2691.js",revision:"0d49135f62020f05fb607b9454742d73"},{url:"assets/project.html-d154f424.js",revision:"944765a7f1425fc87d1435083a9cf97f"},{url:"assets/project.html-de9a7276.js",revision:"fd6680718d3beadb4984732cd3ae06ab"},{url:"assets/project.html-e3f817ae.js",revision:"f5d6cc428834b92dd960cd3c37d146b4"},{url:"assets/quick-start.html-2987c27c.js",revision:"0d4c62ad99362d1fcaba387da566796a"},{url:"assets/quick-start.html-46ae5ee6.js",revision:"9b421dcfca650a71864e70eaba5d3e7b"},{url:"assets/quick-start.html-7ec59c0d.js",revision:"5276d6de9e7cc145dd55a8080cddd944"},{url:"assets/quick-start.html-f867c09e.js",revision:"ef43e70df9631f49da16a369200053b9"},{url:"assets/reveal.esm-e5069ce0.js",revision:"383acd58551019bedc482d68f9eaddef"},{url:"assets/search.esm-2c3fba7d.js",revision:"7c1ff9e9285b9354b44c719f60e1cfd0"},{url:"assets/SearchResult-bd570ee8.js",revision:"a01b430b0a6e77b766ef2756ad2186c7"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/star-request.html-051c9af3.js",revision:"4f82fd619321da69e248378775dc0336"},{url:"assets/star-request.html-0a6171e5.js",revision:"d751def7b0811479bf86b588130edbd2"},{url:"assets/style-d3adc386.css",revision:"318fa3170ddda3972ab6c3a36e01560d"},{url:"assets/symposium1.html-23cc368c.js",revision:"38d31bac64bf66d9d5d2e38f0ed00cce"},{url:"assets/symposium1.html-65b03e83.js",revision:"a9f35bc86f4a2bf37ea516d24ce8f99e"},{url:"assets/symposium1.html-b33e3d7f.js",revision:"a11645898900eabe3d5170160927d8ef"},{url:"assets/symposium1.html-c000658a.js",revision:"a9f35bc86f4a2bf37ea516d24ce8f99e"},{url:"assets/symposium2.html-86329c7b.js",revision:"c526862aaf9aa1d4afa1288b6291124c"},{url:"assets/symposium2.html-88b5f7fe.js",revision:"35a27af31c85bb525f87cd448b7daa6b"},{url:"assets/symposium2.html-adeb2b55.js",revision:"35a27af31c85bb525f87cd448b7daa6b"},{url:"assets/symposium2.html-b5df9842.js",revision:"7d41971ac678bbe94ac2195d84012636"},{url:"assets/tos.html-6a9f1d6e.js",revision:"2f7fc3fad15967d8880fdb169bd7949e"},{url:"assets/tos.html-6b7ced98.js",revision:"daf6c879670d09f40a2bbe5237e04b11"},{url:"assets/tos.html-7c664e93.js",revision:"9030e8757806126f447d3c086524cac1"},{url:"assets/tos.html-a967a60f.js",revision:"9030e8757806126f447d3c086524cac1"},{url:"assets/vue-repl-e31cbbab.js",revision:"93a33449e713c6704cf9f42eedf9de01"},{url:"assets/VuePlayground-54ca2329.js",revision:"499ceea4cbfce178cdc9471262f12572"},{url:"assets/waline-meta-a31b78ed.js",revision:"4003eee21f800e7d4662bda5f1875047"},{url:"assets/weapon-wiki.html-39644c93.js",revision:"2099b42c4f1b54ac622ccc15f881cb59"},{url:"assets/weapon-wiki.html-8bf6bc7b.js",revision:"8be48f9f36b0a79ecbde417891ae23ee"},{url:"assets/weapon-wiki.html-bce79b7c.js",revision:"8be48f9f36b0a79ecbde417891ae23ee"},{url:"assets/weapon-wiki.html-d9fd70e8.js",revision:"d49f3d98ba48841b539744a7d710e81f"},{url:"assets/why.html-683f4f8f.js",revision:"1774f61c2031c3c63fecc3782a40cce7"},{url:"assets/why.html-6c589158.js",revision:"c3d82e405081271638af56ef72a7371c"},{url:"assets/why.html-aea04eb3.js",revision:"baf7e6911f2079fb829805d701dd233c"},{url:"assets/why.html-bca0c68d.js",revision:"595165df9291e59af8bafa68d9bb9ce3"},{url:"assets/wish-export.html-39e255dc.js",revision:"717b641e11bbc872b7620ad6ec9dd089"},{url:"assets/wish-export.html-9a746c0c.js",revision:"a5bd1d1defb96169b9421f480ffc3de9"},{url:"assets/wish-export.html-9ddfd78a.js",revision:"28137b8020df00b160885aa012d6a13b"},{url:"assets/wish-export.html-a631d689.js",revision:"de7081fe1e4132ce1a6b64756671e82c"},{url:"assets/zoom.esm-b83b91d0.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"fontlist/demo.css",revision:"c470b271d96640b2d527d864d838d550"},{url:"fontlist/iconfont.css",revision:"47f9418c83e516e2f92fffa11e06ff9f"},{url:"fontlist/iconfont.js",revision:"787c135beed0ae93c145ae2de3cbfefe"},{url:"fontlist/iconfont.ttf",revision:"6d90ead1de012ad82077c2a898dcc136"},{url:"fontlist/iconfont.woff",revision:"c50542a321198d3a49a56ba9f50923f6"},{url:"fontlist/iconfont.woff2",revision:"a917e0d0985aaabe49b9bd5ad48bd270"},{url:"404.html",revision:"c8e974284b5d181c6403badd8d5d50c2"},{url:"community.html",revision:"6a9ba0c513ef2aa6de823a76699b3583"},{url:"development-log/index.html",revision:"9eb67e134c3e4b48e3897501774110ec"},{url:"development-log/symposium1.html",revision:"68f0f6d1d977a4e5c97557765f3145fc"},{url:"development-log/symposium2.html",revision:"2af09dd864245fdfff1c50928b8ac240"},{url:"en/development-log/index.html",revision:"901544c535bbf6f7ea08e1607742538f"},{url:"en/development-log/symposium1.html",revision:"ff1e29540229c38791d640cf85728b9c"},{url:"en/development-log/symposium2.html",revision:"f6c64278f0cc9d8432fbf8420007f49c"},{url:"en/FAQ/artifact-rating-rules.html",revision:"cf748f7106c81650ebc4f76b57dbc38a"},{url:"en/FAQ/Gacha-system-and-export-principal.html",revision:"fee027682bd5f0c59db81aa9918ed242"},{url:"en/FAQ/get-stoken-cookie-from-the-third-party.html",revision:"56b0d3ab75605f798966d42f6e47b1a6"},{url:"en/FAQ/how-to.html",revision:"6f7cfc1f7ebb2076ddc8c32c106b3785"},{url:"en/FAQ/HttpRequestException.html",revision:"5de3af4b3dff507fe04d94d3cd84b83b"},{url:"en/FAQ/index.html",revision:"7e338b5f48f5218fe2786d62eeb633c6"},{url:"en/FAQ/mihoyo-risk-tip.html",revision:"0c13eade2da3643aef6177b044c84bf2"},{url:"en/FAQ/why.html",revision:"bdadc7ebf51f246667778e693558cdaf"},{url:"en/features/achievements.html",revision:"4f9139bb458bcb97f30d0b9610493255"},{url:"en/features/character-data.html",revision:"e9087504126faa6f81f4a92735d73941"},{url:"en/features/character-wiki.html",revision:"b45b82a6a423f10ba700f53983236e76"},{url:"en/features/daily-notes.html",revision:"51e80d0051656fad734b2a04b136e311"},{url:"en/features/develop-plan.html",revision:"86ace5af186229cb9aae6dce4107f18a"},{url:"en/features/game-launcher.html",revision:"a402068c091c7c5a93bc40ac252460b3"},{url:"en/features/hutao-API.html",revision:"56b1bd4cab6d2831b3c570a0724005a2"},{url:"en/features/hutao-settings.html",revision:"a3ce5b8b39fb5e20e2f9ac03036a928c"},{url:"en/features/index.html",revision:"1e673242aafecb7ec21aa4355984ade0"},{url:"en/features/mhy-account-switch.html",revision:"5d65c1c82c3a7af3530153ea7fa57cf6"},{url:"en/features/weapon-wiki.html",revision:"2a8a6443c143e0f0f6413c945f120ee9"},{url:"en/features/wish-export.html",revision:"cda132b6e088060a0713e339b0dff213"},{url:"en/index.html",revision:"9b12c7cd9d1dce0bbeab704a151a6a51"},{url:"en/markmap.html",revision:"5f835fde8c40ff2e0d9e2003e002da06"},{url:"en/project.html",revision:"54f8d4b9b5e9303ac213468964b0c619"},{url:"en/quick-start.html",revision:"6ace14070294e3e67567022ef2a3ccea"},{url:"en/statements/bug-report.html",revision:"3a20281d64c2bba716d6eb63c07b58f0"},{url:"en/statements/index.html",revision:"02fe9f1652e583ecd2887ed6e791a880"},{url:"en/statements/privacy-notice.html",revision:"0cab43b5f459f9b99724f35fe56a51e2"},{url:"en/statements/tos.html",revision:"ac2ef07819d7362bca5a8ed16af13367"},{url:"FAQ/artifact-rating-rules.html",revision:"d97971840730aad17ba7bb5498c0e264"},{url:"FAQ/Gacha-system-and-export-principal.html",revision:"3b35abadd0c7a19233a95c5e3401bb46"},{url:"FAQ/get-stoken-cookie-from-the-third-party.html",revision:"62cc3facc520f3117b8eda953ed8a968"},{url:"FAQ/how-to.html",revision:"ef651d8b8d5ab04a70a64281979f56d8"},{url:"FAQ/HttpRequestException.html",revision:"7450521536fdfcbca938ba8f93d8c810"},{url:"FAQ/index.html",revision:"2204d8e656ac8ce3261d7223a6106a0b"},{url:"FAQ/mihoyo-risk-tip.html",revision:"fc378260a15576493db638e3d507ea7d"},{url:"FAQ/why.html",revision:"858c4bed44bcee77aaf90a4758ad73ad"},{url:"features/achievements.html",revision:"c121a51a0f0a905224ae3768a8ae441a"},{url:"features/character-data.html",revision:"06923f66f26a83bee89ea21e84985029"},{url:"features/character-wiki.html",revision:"21536b818377045ac0c01f5400bf323e"},{url:"features/daily-notes.html",revision:"604e41da1db495529aa1daa363d3e867"},{url:"features/develop-plan.html",revision:"705a9b5557ff087c2d9de61d9a299876"},{url:"features/game-launcher.html",revision:"2bc9389da4cc19958e642b0f704f9e13"},{url:"features/hutao-API.html",revision:"ebf0b8960077d555e1867b572c0e5575"},{url:"features/hutao-settings.html",revision:"87015f512ac603eb476cf59c9d8f751e"},{url:"features/index.html",revision:"95ee0b3ec700425035897362c8e3791d"},{url:"features/mhy-account-switch.html",revision:"9a8362c3ac56cc31828885ee58db2437"},{url:"features/weapon-wiki.html",revision:"a785d85cdc6fdebb84b55d9bebb94e7e"},{url:"features/wish-export.html",revision:"171b8a639d6407d224069438708b8724"},{url:"fontlist/demo_index.html",revision:"925b49536eec61049492bf64fe28a9e6"},{url:"index.html",revision:"1c93c9a4683bec79b5d6080d22fb1fe6"},{url:"markmap.html",revision:"b8eeb3a583d0091d904d9e950ab9ebc7"},{url:"markmap/zh.html",revision:"b35a18f015a5cd1b4ae885e560b2caaa"},{url:"project.html",revision:"44f708487c692af585b2428eef74e4e8"},{url:"quick-start.html",revision:"4ff72285abc0005c90a0d191f3d7925b"},{url:"star-request.html",revision:"df313940b44888b7b67dca4c7a9ba272"},{url:"statements/bug-report.html",revision:"b4d9d39b2af07dd89349f616a7a56168"},{url:"statements/index.html",revision:"bf0f3fb14a4033a8924d281629ebe0ab"},{url:"statements/privacy-notice.html",revision:"d321d53f49701a88f04a43aece97f2b6"},{url:"statements/tos.html",revision:"c162812e2579f7415980a789a34f5de4"},{url:"images/202209/Achievements.png",revision:"067cff70d53656b2e3e878df949823f6"},{url:"images/202209/HeroImageLogo.png",revision:"fb8507e3eaccbd6408874dcf10973d62"},{url:"images/202209/IndexIconAchievements.png",revision:"ea409f5a87b1c7666121ead606e323ef"},{url:"images/202209/IndexIconCharacters.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202209/IndexIconMihoyoBBS.png",revision:"b9c679888c01a50e6b126f9dae0d50d1"},{url:"images/202209/IndexIconWeapons.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202209/IndexIconWish.png",revision:"0b4e790c4cb1eeba7473ad8e1b14ac23"},{url:"images/202209/SGLogoUpgrade64.png",revision:"1b95d8969049e0b31c0d89eeface0b89"},{url:"images/202209/wish-export.png",revision:"ef07fa6499c22d00c78dc182ad3cbab5"},{url:"images/202210/1.1.7-Update-Error-Fix.png",revision:"1f1958198ca4510713648cff6c43fcd5"},{url:"images/202210/1.1.7-Update-Error.png",revision:"3e04317e974e1cec550096b7ea88d708"},{url:"images/202210/account-upgrade.png",revision:"52b1c5695109142c9496bb6e14a9c2d1"},{url:"images/202210/HttpRequestException.jpg",revision:"878a57ab9fe5de6b774d7e91776987ab"},{url:"images/202210/hutao-api-submit.png",revision:"6a201ae85f470f3bb70e868137524830"},{url:"images/202210/hutao-api.png",revision:"5bd260fe9b5c18a41765c1126cfd91ff"},{url:"images/202210/hutao-login.png",revision:"21af43587bacf56bf40cadc884381c49"},{url:"images/202211/character-data-display.png",revision:"0cd41e7a02ee864ff12f0f69c926b79f"},{url:"images/202211/character-data-logo.png",revision:"04cc28833ed4c2108ba215fbc33325bf"},{url:"images/202211/character-wiki-logo.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202211/character-wiki.png",revision:"002ee49f019709942ae1b3dc541d05e4"},{url:"images/202211/game-launcher-logo.png",revision:"a5a5d6d5a09926689f8a61db4b24c2df"},{url:"images/202211/hutao-api-logo.png",revision:"feb8ae3e6c4099e0b7804e3d7ebda7c2"},{url:"images/202211/wish-export.png",revision:"c695c558c514d9aa0d3903d5c41f63b9"},{url:"images/202301/achievement.png",revision:"42fd361ea1336daf7cd33bf187e62fa2"},{url:"images/202301/dev-plan-logo.png",revision:"5d69e71ecd6e1b553395e2306fff5f34"},{url:"images/202301/live-stat-tracking-logo.png",revision:"23a418c1d29dbbf0142085f2e8ad464d"},{url:"images/202301/spiral-abyss-record-logo.png",revision:"6d213b91803137c600bb27b973a7ee25"},{url:"images/202301/weapon-wiki-logo.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"pwa-icon/chrome-192.png",revision:"6d30f6750b36f3a261ad989d26feb899"},{url:"pwa-icon/chrome-512.png",revision:"920fa62caa82087b012351242dcc46c0"},{url:"pwa-icon/ios-152.png",revision:"b51617947bc9724dad89fa357624a671"},{url:"pwa-icon/ios-192.png",revision:"6d30f6750b36f3a261ad989d26feb899"},{url:"pwa-icon/ios-512.png",revision:"920fa62caa82087b012351242dcc46c0"},{url:"pwa-icon/ms-256.png",revision:"f877e44d42504adaac6f558be4d93b3a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map

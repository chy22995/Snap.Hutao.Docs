import{_ as m,c as p,a,b as e,d as s,e as i,f as r,r as u,o as k}from"./app-BgofEdxK.js";const g={};function h(c,n){const d=u("RouteLink"),o=u("Tabs");return k(),p("div",null,[n[9]||(n[9]=a("h1",{id:"pertanyaan-umum",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#pertanyaan-umum"},[a("span",null,"Pertanyaan Umum")])],-1)),a("p",null,[n[1]||(n[1]=e("If the following answers can not solve your issue, feel free to ")),s(d,{to:"/id/statements/bug-report.html"},{default:i(()=>n[0]||(n[0]=[e("report bug to us")])),_:1}),n[2]||(n[2]=e("!"))]),n[10]||(n[10]=r('<h2 id="cara-membuat-pintasan-desktop-tanpa-hak-admin" tabindex="-1"><a class="header-anchor" href="#cara-membuat-pintasan-desktop-tanpa-hak-admin"><span>Cara membuat pintasan desktop (tanpa hak admin)</span></a></h2><div class="hint-container tip"><p class="hint-container-title">Kekuatan Komunitas</p><p>Terima kasih kepada <a href="https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/12" target="_blank" rel="noopener noreferrer">solusi diberikan oleh CzHUV</a>.</p></div><ul><li>Gunakan <code>Win+R</code> untuk membuka <code>run</code>, di dalam jendela masukkan <code>shell:AppsFolder</code> <img src="https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Jj8c6i1g6du728e5A_!!1797064093.png" alt="Run" loading="lazy"></li><li>Pada jendela pop-up baru, temukan Snap Hutao</li><li>Klik kanan, lalu klik <code>Buat pintasan</code></li><li>Konfirmasikan operasi dan Anda akan mendapatkan pintasan desktop</li></ul><h2 id="cara-membuat-pintasan-desktop-dengan-hak-admin" tabindex="-1"><a class="header-anchor" href="#cara-membuat-pintasan-desktop-dengan-hak-admin"><span>Cara membuat pintasan desktop dengan hak Admin</span></a></h2><p>Mulai dari Snap Hutao 1.7.4, Anda dapat membuat pintasan desktop dengan hak Admin dengan mengklik <code>Buat Pintasan Desktop</code> di halaman pengaturan.</p><p>Anda dapat memindahkan pintasan ini ke tempat yang Anda butuhkan.</p><h2 id="cara-menjalankan-snap-hutao-saat-windows-dijalankan" tabindex="-1"><a class="header-anchor" href="#cara-menjalankan-snap-hutao-saat-windows-dijalankan"><span>Cara menjalankan Snap Hutao saat Windows dijalankan</span></a></h2><p><strong>Ini adalah solusi sementara</strong></p><ul><li>Buat file <code>.bat</code>, kontennya mengacu pada <a href="https://github.com/DGP-Studio/Snap.Hutao/issues/184" target="_blank" rel="noopener noreferrer">Issue ini</a>, ini memungkinkan <code>.bat</code> untuk menjalankan Snap Hutao dengan hak Admin</li><li>Buat <code>Scheduled Tasj</code>, jalankan <code>.bat</code> saat Windows startup, atau seret ke folder start Windows</li></ul><h2 id="menggunakan-snap-hutao-untuk-memulai-game-dengan-cepat" tabindex="-1"><a class="header-anchor" href="#menggunakan-snap-hutao-untuk-memulai-game-dengan-cepat"><span>Menggunakan Snap Hutao untuk memulai game dengan cepat</span></a></h2><ul><li><p>Konfigurasi peluncur game di pengaturan</p></li><li><p>Pin Snap Hutao di taskbar</p></li><li><p>Klik kanan pada Snap Hutao dan Anda akan melihat <code>quick launcher</code></p><p><img src="https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Uu8QzN1g6du6MRp8h_!!1797064093.png" alt="quick-start" loading="lazy"></p></li><li><p>Pilih <code>Lauch Game</code>, Anda akan diminta memilih akun untuk memulai game</p></li></ul><h2 id="menggunakan-snap-hutao-dengan-proxy-jaringan" tabindex="-1"><a class="header-anchor" href="#menggunakan-snap-hutao-dengan-proxy-jaringan"><span>Menggunakan Snap Hutao dengan Proxy Jaringan</span></a></h2>',12)),a("p",null,[n[4]||(n[4]=e("Lihat dokumen ")),s(d,{to:"/id/advanced/exceptions.html#_502-bad-gateway"},{default:i(()=>n[3]||(n[3]=[e("Kesalahan HttpRequestException (502)")])),_:1})]),n[11]||(n[11]=r('<h2 id="mojibake-di-snap-hutao" tabindex="-1"><a class="header-anchor" href="#mojibake-di-snap-hutao"><span>Mojibake di Snap Hutao</span></a></h2><ul><li>Jika Anda menggunakan Windows 10 dan melihat beberapa tombol tidak ditampilkan dengan benar <ul><li>Anda dapat mengunduh font <code>Segoe Fluent Icons</code></li><li>Anda perlu menginstalnya untuk semua pengguna</li></ul></li><li>Anda dapat menemukan font ini dari <a href="https://aka.ms/SegoeFluentIcons" target="_blank" rel="noopener noreferrer">Microsoft</a></li></ul><h2 id="akun-mihoyo-bbs-sering-kehilangan-status-login" tabindex="-1"><a class="header-anchor" href="#akun-mihoyo-bbs-sering-kehilangan-status-login"><span>Akun MiHoYo BBS Sering Kehilangan Status Login</span></a></h2><p>Snap Hutao menggunakan cookie MiHoYo BBS yang disimpan untuk mempertahankan status login. Jika Anda <strong>keluar</strong> dari akun Anda di browser atau perangkat lain, cookie akan menjadi tidak valid, dan Snap Hutao juga akan dipaksa keluar, akun akan secara otomatis dihapus.</p><p>Masalah ini juga dapat disebabkan oleh kesalahan jaringan, Anda harus memeriksa ini terlebih dahulu; Jika bukan karena masalah jaringan, Anda dapat menggunakan <code>Refresh Cookie</code> di panel akun; Anda juga dapat menghapus akun Anda secara manual dan menambahkannya kembali.</p><p>Sejak Oktober 2022, MiYouShe (BBS Tiongkok) dengan cepat meningkatkan deteksi bot dan mungkin mengatur status risiko pada akun pengguna, ini dapat menyebabkan Snap Hutao gagal memeriksa validasi cookie</p><h2 id="akun-game-kehilangan-status-login-di-launcher" tabindex="-1"><a class="header-anchor" href="#akun-game-kehilangan-status-login-di-launcher"><span>Akun Game Kehilangan Status Login di Launcher</span></a></h2><ul><li>Ada dua faktor yang terkait dengan status login akun game: jaringan dan ID perangkat</li><li>Masalah ini biasanya disebabkan oleh: <ul><li>Perubahan alamat IP publik</li><li>Perubahan adapter jaringan atau alamat MAC adapter jaringan</li><li>Operasi penyimpanan gagal, tidak ada status login yang sebenarnya yang disimpan (Snap Hutao tidak dapat mendeteksi jika statusnya benar-benar valid) <ul><li>Pastikan untuk masuk ke game setelah masuk</li><li>Pastikan proses game sudah berhenti setelah menutup game</li><li>Deteksi akun lagi untuk menyimpan status login Anda</li></ul></li></ul></li></ul><h2 id="snap-hutao-melempar-pesan-gagal-menambahkan-scheduled-task" tabindex="-1"><a class="header-anchor" href="#snap-hutao-melempar-pesan-gagal-menambahkan-scheduled-task"><span>Snap Hutao Melempar Pesan Gagal menambahkan Scheduled Task</span></a></h2><p>Jika Anda menggunakan hak Admin untuk memulai fitur catatan real-time, tugas terjadwal Snap Hutao akan dibuat sebagai peran Administrator. Saat Anda mengedit pengaturan catatan real-time tanpa hak Admin, program akan kekurangan hak untuk mengedit pengaturan dan akan melemparkan galat ini.</p><p>Jalankan Snap Hutao sebagai Administrator untuk mengedit pengaturan Anda untuk memecahkan masalah ini.</p><h2 id="terjebak-di-menginstal-kerangka-yang-diperlukan-saat-menggunakan-paket-msix-untuk-menginstal" tabindex="-1"><a class="header-anchor" href="#terjebak-di-menginstal-kerangka-yang-diperlukan-saat-menggunakan-paket-msix-untuk-menginstal"><span>Terjebak di <code>Menginstal Kerangka yang Diperlukan</code> saat Menggunakan Paket MSIX untuk Menginstal</span></a></h2><ul><li>Ketika sistem pengguna kekurangan <code>framework dependency</code> yang diperlukan, Windows akan mengunduh dan menginstalnya secara otomatis. Namun, jika pengguna menonaktifkan Windows Update atau memiliki jaringan buruk, sistem tidak dapat memproses instalasi ini. <ul><li>Pastikan Windows Update diaktifkan; pembaruan Snap Hutao juga mengandalkannya</li><li>Anda juga dapat mengunduh dan menginstal <a href="ttps://d.hut.ao/releases/Dependency" target="_blank" rel="noopener noreferrer">dependensi</a> secara manual</li></ul></li></ul><h2 id="tidak-dapat-menjalankan-snap-hutao-sebagai-administrator" tabindex="-1"><a class="header-anchor" href="#tidak-dapat-menjalankan-snap-hutao-sebagai-administrator"><span>Tidak Dapat Menjalankan Snap Hutao sebagai Administrator</span></a></h2><blockquote><p>Masalah ini hanya terjadi pada Windows 10 yang lebih lama dari versi 22H2</p></blockquote><ul><li>Ketika versi OS pengguna lebih lama dari <code>Windows Build 19045</code> (alias Windows 10 22H2), Snap Hutao tidak dapat dijalankan ketika dijalankan sebagai Administrator <ul><li>Masalah ini berasal dari kernel Windows, dan sulit untuk dilokalisasi, jadi kami menyarankan Anda untuk memperbarui OS Anda ke versi terbaru</li></ul></li></ul><h2 id="cara-memulihkan-berkas-konfigurasi-config-ini" tabindex="-1"><a class="header-anchor" href="#cara-memulihkan-berkas-konfigurasi-config-ini"><span>Cara Memulihkan Berkas Konfigurasi <code>config.ini</code></span></a></h2><p>Dalam kondisi tertentu tertentu (seperti izin folder game yang salah), <code>config.ini</code> dapat hilang setelah konversi server. Ini akan menyebabkan pengguna tidak dapat masuk ke halaman peluncur lanjutan dan meluncurkan game.</p><p>Setelah mengidentifikasi versi server di perangkat Anda, Anda dapat secara manual membuat dan mengisi file konfigurasi dengan benar. Berikut adalah konfigurasi umum</p><p>.</p>',20)),s(o,{id:"250",data:[{id:"Server Resmi CN"},{id:"Server Resmi Global"}],"tab-id":"game_config_samples"},{title0:i(({value:t,isActive:l})=>n[5]||(n[5]=[e("Server Resmi CN")])),title1:i(({value:t,isActive:l})=>n[6]||(n[6]=[e("Server Resmi Global")])),tab0:i(({value:t,isActive:l})=>n[7]||(n[7]=[a("div",{class:"language- line-numbers-mode","data-highlighter":"shiki","data-ext":"","data-title":"",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[a("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[a("code",null,[a("span",{class:"line"},[a("span",null,"[General]")]),e(`
`),a("span",{class:"line"},[a("span",null,"channel=1")]),e(`
`),a("span",{class:"line"},[a("span",null,"cps=mihoyo")]),e(`
`),a("span",{class:"line"},[a("span",null,"game_version=4.1.0")]),e(`
`),a("span",{class:"line"},[a("span",null,"sub_channel=1")]),e(`
`),a("span",{class:"line"},[a("span",null,"plugin_7_version=1.0.0")])])]),a("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1)])),tab1:i(({value:t,isActive:l})=>n[8]||(n[8]=[a("div",{class:"language- line-numbers-mode","data-highlighter":"shiki","data-ext":"","data-title":"",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[a("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[a("code",null,[a("span",{class:"line"},[a("span",null,"[General]")]),e(`
`),a("span",{class:"line"},[a("span",null,"channel=1")]),e(`
`),a("span",{class:"line"},[a("span",null,"cps=mihoyo")]),e(`
`),a("span",{class:"line"},[a("span",null,"game_version=4.1.0")]),e(`
`),a("span",{class:"line"},[a("span",null,"sub_channel=0")]),e(`
`),a("span",{class:"line"},[a("span",null,"plugin_7_version=1.0.0")])])]),a("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1)])),_:1}),n[12]||(n[12]=a("h2",{id:"cara-cadangan-pemulihan-data-klien-secara-penuh",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#cara-cadangan-pemulihan-data-klien-secara-penuh"},[a("span",null,"Cara Cadangan/Pemulihan Data Klien Secara Penuh")])],-1)),n[13]||(n[13]=a("div",{class:"hint-container warning"},[a("p",{class:"hint-container-title"},"Peringatan Keamanan Data"),a("p",null,[a("code",null,"Userdata.db"),e(" berisi semua data klien, termasuk Cookie MiHoYO BBS, harap simpan file data dengan baik dan JANGAN DIBAGIKAN KEPADA SIAPAPUN.")])],-1)),n[14]||(n[14]=a("p",null,[e("Salin "),a("code",null,"Userdata.db"),e(" dari folder data Snap Hutao ("),a("code",null,"%userprofile%/Documents/Hutao"),e(" secara default) ke lokasi cadangan Anda, file ini berisi seluruh data klien.")],-1))])}const f=m(g,[["render",h],["__file","FAQ.html.vue"]]),y=JSON.parse('{"path":"/id/advanced/FAQ.html","title":"Pertanyaan Umum","lang":"id-ID","frontmatter":{"headerDepth":2,"icon":"iconfont icon-ask","category":["FAQ"],"order":1,"description":"Pertanyaan Umum If the following answers can not solve your issue, feel free to ! Cara membuat pintasan desktop (tanpa hak admin) Kekuatan Komunitas Terima kasih kepada solusi d...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://hut.ao/zh/advanced/FAQ.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://hut.ao/en/advanced/FAQ.html"}],["link",{"rel":"alternate","hreflang":"ru-ru","href":"https://hut.ao/ru/advanced/FAQ.html"}],["meta",{"property":"og:url","content":"https://hut.ao/id/advanced/FAQ.html"}],["meta",{"property":"og:site_name","content":"Snap Hutao"}],["meta",{"property":"og:title","content":"Pertanyaan Umum"}],["meta",{"property":"og:description","content":"Pertanyaan Umum If the following answers can not solve your issue, feel free to ! Cara membuat pintasan desktop (tanpa hak admin) Kekuatan Komunitas Terima kasih kepada solusi d..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Jj8c6i1g6du728e5A_!!1797064093.png"}],["meta",{"property":"og:locale","content":"id-ID"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ru-RU"}],["meta",{"property":"og:updated_time","content":"2024-01-07T06:52:49.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-07T06:52:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Pertanyaan Umum\\",\\"image\\":[\\"https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Jj8c6i1g6du728e5A_!!1797064093.png\\",\\"https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Uu8QzN1g6du6MRp8h_!!1797064093.png\\"],\\"dateModified\\":\\"2024-01-07T06:52:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DGP-Studio\\",\\"url\\":\\"https://github.com/DGP-Studio\\"}]}"],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://hut.ao/id/rss.xml","title":"Snap Hutao RSS Feed"}]]},"headers":[{"level":2,"title":"Cara membuat pintasan desktop (tanpa hak admin)","slug":"cara-membuat-pintasan-desktop-tanpa-hak-admin","link":"#cara-membuat-pintasan-desktop-tanpa-hak-admin","children":[]},{"level":2,"title":"Cara membuat pintasan desktop dengan hak Admin","slug":"cara-membuat-pintasan-desktop-dengan-hak-admin","link":"#cara-membuat-pintasan-desktop-dengan-hak-admin","children":[]},{"level":2,"title":"Cara menjalankan Snap Hutao saat Windows dijalankan","slug":"cara-menjalankan-snap-hutao-saat-windows-dijalankan","link":"#cara-menjalankan-snap-hutao-saat-windows-dijalankan","children":[]},{"level":2,"title":"Menggunakan Snap Hutao untuk memulai game dengan cepat","slug":"menggunakan-snap-hutao-untuk-memulai-game-dengan-cepat","link":"#menggunakan-snap-hutao-untuk-memulai-game-dengan-cepat","children":[]},{"level":2,"title":"Menggunakan Snap Hutao dengan Proxy Jaringan","slug":"menggunakan-snap-hutao-dengan-proxy-jaringan","link":"#menggunakan-snap-hutao-dengan-proxy-jaringan","children":[]},{"level":2,"title":"Mojibake di Snap Hutao","slug":"mojibake-di-snap-hutao","link":"#mojibake-di-snap-hutao","children":[]},{"level":2,"title":"Akun MiHoYo BBS Sering Kehilangan Status Login","slug":"akun-mihoyo-bbs-sering-kehilangan-status-login","link":"#akun-mihoyo-bbs-sering-kehilangan-status-login","children":[]},{"level":2,"title":"Akun Game Kehilangan Status Login di Launcher","slug":"akun-game-kehilangan-status-login-di-launcher","link":"#akun-game-kehilangan-status-login-di-launcher","children":[]},{"level":2,"title":"Snap Hutao Melempar Pesan Gagal menambahkan Scheduled Task","slug":"snap-hutao-melempar-pesan-gagal-menambahkan-scheduled-task","link":"#snap-hutao-melempar-pesan-gagal-menambahkan-scheduled-task","children":[]},{"level":2,"title":"Terjebak di Menginstal Kerangka yang Diperlukan saat Menggunakan Paket MSIX untuk Menginstal","slug":"terjebak-di-menginstal-kerangka-yang-diperlukan-saat-menggunakan-paket-msix-untuk-menginstal","link":"#terjebak-di-menginstal-kerangka-yang-diperlukan-saat-menggunakan-paket-msix-untuk-menginstal","children":[]},{"level":2,"title":"Tidak Dapat Menjalankan Snap Hutao sebagai Administrator","slug":"tidak-dapat-menjalankan-snap-hutao-sebagai-administrator","link":"#tidak-dapat-menjalankan-snap-hutao-sebagai-administrator","children":[]},{"level":2,"title":"Cara Memulihkan Berkas Konfigurasi config.ini","slug":"cara-memulihkan-berkas-konfigurasi-config-ini","link":"#cara-memulihkan-berkas-konfigurasi-config-ini","children":[]},{"level":2,"title":"Cara Cadangan/Pemulihan Data Klien Secara Penuh","slug":"cara-cadangan-pemulihan-data-klien-secara-penuh","link":"#cara-cadangan-pemulihan-data-klien-secara-penuh","children":[]}],"git":{"createdTime":1703269314000,"updatedTime":1704610369000,"contributors":[{"name":"Natsume","email":"wardanadm2@gmail.com","commits":2},{"name":"Masterain","email":"i@irain.in","commits":1}]},"readingTime":{"minutes":2.66,"words":798},"filePathRelative":"id/advanced/FAQ.md","localizedDate":"22 Desember 2023","autoDesc":true}');export{f as comp,y as data};

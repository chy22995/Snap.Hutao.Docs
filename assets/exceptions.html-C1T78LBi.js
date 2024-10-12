import{_ as e,c as n,f as i,o as t}from"./app-DNa4_-GM.js";const l={};function r(s,a){return t(),n("div",null,a[0]||(a[0]=[i('<h1 id="kesalahan-umum-program" tabindex="-1"><a class="header-anchor" href="#kesalahan-umum-program"><span>Kesalahan Umum Program</span></a></h1><p>Dokumen ini mencakup solusi untuk <strong>kesalahan klien yang dapat diprediksi</strong></p><h2 id="runtimeenvironmentexception" tabindex="-1"><a class="header-anchor" href="#runtimeenvironmentexception"><span>RuntimeEnvironmentException</span></a></h2><ul><li>Exception: <code>RuntimeEnvironmentException</code><ul><li>Hint: <code>Tidak dapat menyetel kunci registri tanpa mengaktifkan Path panjang</code></li></ul></li><li>Sumber masalah: Batas jalur panjang Windows diatur secara default menjadi terbatas pada 256 karakter</li><li>Solusi: Unduh <a href="https://d.hut.ao/d/tools/EnableLongPaths.zip" target="_blank" rel="noopener noreferrer">EnableLongPaths.zip</a>, ekstrak, lalu jalankan berkas <code>.reg</code></li></ul><h2 id="kode-return-10001" tabindex="-1"><a class="header-anchor" href="#kode-return-10001"><span>Kode Return: -10001</span></a></h2><ul><li>Kesalahan ini berasal langsung dari MiHoYo BBS, dengan petunjuk: <ul><li><code>Return Code: -10001</code></li><li><code>Return Code: -100</code></li></ul></li><li>Sumber masalah <ol><li>Cookie kedaluwarsa</li><li>Kesalahan jaringan</li><li>Waktu sistem tidak akurat</li></ol></li><li>Solusi <ol><li>Di panel akun, jalankan <code>Refresh Cookies</code></li><li>Hapus akun Anda dan tambahkan kembali</li><li>Sinkronkan waktu sistem Anda</li></ol></li></ul><h2 id="kode-return-1034-verifikasi-gagal" tabindex="-1"><a class="header-anchor" href="#kode-return-1034-verifikasi-gagal"><span>Kode Return: 1034 Verifikasi Gagal</span></a></h2><ul><li>Jika Snap Hutao mengembalikan kode status <code>1034</code> dan mengindikasikan kegagalan verifikasi (biasanya selama operasi Catatan Langsung), itu berarti operasi diblokir oleh sistem anti-bot MiHoYo BBS</li><li>Solusi: <ul><li>Masuk ke <code>Catatan Realtime</code></li><li>Klik tombol <code>Verify Current User and Role</code></li><li>Ikuti instruksi di MiHoYo BBS untuk melakukan verifikasi</li><li>Setelah menyelesaikan proses verifikasi, klik <code>Selesai</code> untuk menutup jendela verifikasi</li><li>Sekarang, akun seharusnya kembali normal; Jika tidak, ulangi langkah di atas<div class="hint-container tip"><p class="hint-container-title">Tips</p></div></li></ul></li></ul><p>Jika peringatan risiko terlalu sering, atau verifikasi tidak dapat dipicu sama sekali, ini berarti risiko akun Anda terlalu tinggi, silakan ubah kata sandi, sehingga status login simultan dari beberapa perangkat akan diatur ulang</p><p>:::</p><div class="hint-container warning"><p class="hint-container-title">Penting</p><ul><li>Anda hampir tidak dapat melewati verifikasi yang tidak terlihat saat akun Anda <strong>login pada alat Genshin lain yang jarak jauh</strong> atau <strong>login di beberapa perangkat</strong>. Ini adalah desain keamanan dari MiHoYo BBS, dan tidak dapat dilewati</li><li>Jika Anda menggunakan <strong>beberapa akun MiHoYo BBS di perangkat Anda</strong>, <strong>penggunaan sering dengan API MiHoYo BBS</strong> akan mengakibatkan alamat IP Anda diblokir untuk jangka waktu tertentu (biasanya tidak lebih dari 24 jam). Ini adalah desain keamanan dari MiHoYo BBS, dan tidak dapat dilewati</li></ul></div><h2 id="httprequestexception-metadata-download-failed" tabindex="-1"><a class="header-anchor" href="#httprequestexception-metadata-download-failed"><span>HttpRequestException Metadata Download Failed</span></a></h2><h3 id="_403-terlarang-404-tidak-ditemukan" tabindex="-1"><a class="header-anchor" href="#_403-terlarang-404-tidak-ditemukan"><span>403 (Terlarang) / 404 (Tidak Ditemukan)</span></a></h3><p>Solusi: Perbarui Snap Hutao Anda ke versi terbaru</p><h3 id="_502-gerbang-buruk" tabindex="-1"><a class="header-anchor" href="#_502-gerbang-buruk"><span>502 (Gerbang Buruk)</span></a></h3><blockquote><p>Masalah Terkait: <a href="https://github.com/DGP-Studio/Snap.Hutao/issues/100" target="_blank" rel="noopener noreferrer">https://github.com/DGP-Studio/Snap.Hutao/issues/100</a></p></blockquote><p>Exception HTTP ini terjadi ketika Snap Hutao gagal mengambil sumber daya remote (biasanya gambar statis dan konfigurasi)</p><p><img src="https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Tb2RUm1g6du5YeNuy_!!1797064093.jpg" alt="HttpRequestException" loading="lazy"></p><p>Jika Anda menggunakan perangkat lunak proxy, Anda mungkin perlu mematikannya atau menggunakan proxy mode TUN; jika tidak, Anda perlu menggunakan <a href="https://www.telerik.com/fiddler/add-ons" target="_blank" rel="noopener noreferrer">Utilitas Batasan Loopback Kontainer APP Windows 8</a> untuk menghapus <a href="https://learn.microsoft.com/zh-CN/windows/iot-core/develop-your-app/loopback" target="_blank" rel="noopener noreferrer">batasan loopback aplikasi Windows APP</a>.</p><p>Anda juga dapat menjalankan skrip PowerShell berikut untuk menghapus semua batasan loopback kontainer</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FOR</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> /</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">F </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;tokens=11 delims=\\&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> %</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">p </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">IN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;REG QUERY &quot;HKCU\\Software\\Classes\\Local Settings\\Software\\Microsoft\\Windows\\CurrentVersion\\AppContainer\\Mappings&quot;&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">DO</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> CheckNetIsolation.exe</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> LoopbackExempt </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">a </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">p</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="kesalahan-menemukan-modul-yang-diperlukan" tabindex="-1"><a class="header-anchor" href="#kesalahan-menemukan-modul-yang-diperlukan"><span>Kesalahan Menemukan Modul yang Diperlukan</span></a></h2><p>Ketika pengguna meluncurkan game dengan fitur <code>unlock frame-rate limit</code>, game mungkin akan gagal diluncurkan dengan munculnya kesalahan berikut:</p><ol><li>Kesalahan menemukan modul yang diperlukan: tidak dapat membaca modul apa pun, driver perlindungan mungkin telah dimuat</li><li>Kesalahan menemukan modul yang diperlukan: timeout</li></ol><p>Masalah ini hanya terjadi ketika modul anti-cheat Genshin Impact mulai lebih awal daripada modul <code>frame-rate-unlocker</code>. Ketika kesalahan ini terjadi, Snap Hutao akan keluar dari proses game, dan Anda dapat luncurkan ulang gamenya.</p>',25)]))}const d=e(l,[["render",r],["__file","exceptions.html.vue"]]),k=JSON.parse('{"path":"/id/advanced/exceptions.html","title":"Kesalahan Umum Program","lang":"id-ID","frontmatter":{"headerDepth":2,"icon":"iconfont icon-warn","category":["FAQ"],"order":2,"comment":false,"description":"Kesalahan Umum Program Dokumen ini mencakup solusi untuk kesalahan klien yang dapat diprediksi RuntimeEnvironmentException Exception: RuntimeEnvironmentException Hint: Tidak dap...","gitInclude":[],"head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://hut.ao/zh/advanced/exceptions.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://hut.ao/en/advanced/exceptions.html"}],["link",{"rel":"alternate","hreflang":"ru-ru","href":"https://hut.ao/ru/advanced/exceptions.html"}],["meta",{"property":"og:url","content":"https://hut.ao/id/advanced/exceptions.html"}],["meta",{"property":"og:site_name","content":"Snap Hutao"}],["meta",{"property":"og:title","content":"Kesalahan Umum Program"}],["meta",{"property":"og:description","content":"Kesalahan Umum Program Dokumen ini mencakup solusi untuk kesalahan klien yang dapat diprediksi RuntimeEnvironmentException Exception: RuntimeEnvironmentException Hint: Tidak dap..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Tb2RUm1g6du5YeNuy_!!1797064093.jpg"}],["meta",{"property":"og:locale","content":"id-ID"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ru-RU"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Kesalahan Umum Program\\",\\"image\\":[\\"https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Tb2RUm1g6du5YeNuy_!!1797064093.jpg\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DGP-Studio\\",\\"url\\":\\"https://github.com/DGP-Studio\\"}]}"],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://hut.ao/id/rss.xml","title":"Snap Hutao RSS Feed"}]]},"headers":[{"level":2,"title":"RuntimeEnvironmentException","slug":"runtimeenvironmentexception","link":"#runtimeenvironmentexception","children":[]},{"level":2,"title":"Kode Return: -10001","slug":"kode-return-10001","link":"#kode-return-10001","children":[]},{"level":2,"title":"Kode Return: 1034 Verifikasi Gagal","slug":"kode-return-1034-verifikasi-gagal","link":"#kode-return-1034-verifikasi-gagal","children":[]},{"level":2,"title":"HttpRequestException Metadata Download Failed","slug":"httprequestexception-metadata-download-failed","link":"#httprequestexception-metadata-download-failed","children":[{"level":3,"title":"403 (Terlarang) / 404 (Tidak Ditemukan)","slug":"_403-terlarang-404-tidak-ditemukan","link":"#_403-terlarang-404-tidak-ditemukan","children":[]},{"level":3,"title":"502 (Gerbang Buruk)","slug":"_502-gerbang-buruk","link":"#_502-gerbang-buruk","children":[]}]},{"level":2,"title":"Kesalahan Menemukan Modul yang Diperlukan","slug":"kesalahan-menemukan-modul-yang-diperlukan","link":"#kesalahan-menemukan-modul-yang-diperlukan","children":[]}],"readingTime":{"minutes":1.73,"words":519},"filePathRelative":"id/advanced/exceptions.md","autoDesc":true}');export{d as comp,k as data};

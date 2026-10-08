---
title: "Status HTTP dan JavaScript: 6 Cek Googlebot"
description: "Periksa status HTTP, soft 404, redirect, dan fallback JavaScript agar halaman valid serta halaman error mengirim sinyal yang tepat kepada Googlebot."
pubDate: "2026-10-08"
date: "2026-10-08"
excerpt: "Halaman terlihat normal belum tentu mengirim status yang benar. Enam cek untuk membedakan error, redirect, dan konten yang layak diproses Googlebot."
category: "SEO Teknis"
tags: ["Googlebot", "JavaScript SEO", "HTTP", "Soft 404", "Astro"]
author: "Rafiq"
coverImage: ""
heroImage: ""
---

Halaman yang terlihat normal di browser belum tentu mengirim respons yang tepat kepada Googlebot. Browser bisa menjalankan JavaScript lalu menampilkan konten pemulihan, sementara respons pertama dari server sudah menunjukkan bahwa halaman tidak ditemukan atau server bermasalah. Karena itu, pemeriksaan SEO perlu dimulai dari status HTTP, bukan hanya tangkapan layar.

**Google menyatakan bahwa halaman berstatus 200 masuk antrean rendering; pada respons non-200, rendering mungkin dilewati.** Kata “mungkin” penting: dokumentasi tidak memberikan dasar untuk menganggap semua respons non-200 selalu mengikuti satu jalur identik. Jangan membuat konten utama atau petunjuk pemulihan bergantung pada eksekusi JavaScript di halaman error. Rujukannya adalah [panduan JavaScript SEO Google](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).

Dalam pemeriksaan sumber pada 8 Oktober 2026, [changelog Search Central](https://developers.google.com/search/updates) mencatat pembaruan panduan konten generatif pada 1 Oktober, masih dalam tujuh hari terakhir. Namun, klarifikasi rendering non-200 tercatat pada **18 Desember 2025**, bukan pembaruan baru minggu ini. Artikel ini menerapkan aturan yang sudah ada pada pengujian website, bukan mengumumkan perubahan perilaku Googlebot yang baru.

Panduan ini khusus membahas hubungan antara respons server dan konten JavaScript. Untuk persoalan perpindahan CMS secara menyeluruh, gunakan [checklist migrasi WordPress ke Astro](/blog/migrasi-wordpress-ke-astro-seo/). Untuk pemeriksaan penyebab website tidak muncul, baca [panduan diagnosis indeks](/blog/website-tidak-muncul-di-google/).

## 1. Bandingkan URL valid dengan URL yang memang tidak ada

Mulai dari empat contoh: homepage, artikel yang diterbitkan, slug artikel acak yang tidak ada, dan alamat lama yang sudah dipindahkan. Jangan menguji ratusan URL sebelum memahami bagaimana satu template merespons. Simpan tanggal pemeriksaan, URL persis, status pertama, serta tujuan akhir jika ada redirect.

Gunakan permintaan GET agar memeriksa jalur yang benar-benar mengirim halaman. Permintaan HEAD berguna untuk diagnosis awal, tetapi sebagian aplikasi atau lapisan cache menangani HEAD berbeda. Contoh berikut membuang isi respons dan hanya menampilkan status serta target redirect pertama:

```bash
curl -sS -o /dev/null -w "%{http_code} %{redirect_url}\n" https://example.com/blog/artikel-valid/
curl -sS -o /dev/null -w "%{http_code} %{redirect_url}\n" https://example.com/blog/slug-yang-tidak-ada/
```

Domain dalam contoh adalah domain ilustrasi, bukan hasil pengujian situs tertentu. Halaman valid yang dapat diakses umumnya mengirim 200. URL yang tidak pernah ada semestinya mengirim respons tidak ditemukan, bukan halaman utama berstatus sukses. Jika slug acak selalu mengembalikan 200, selidiki router, fallback aplikasi, dan konfigurasi penyajian sebelum menuduh adanya masalah indeks.

## 2. Kenali soft 404 tanpa menganggap semua halaman pendek salah

Soft 404 adalah keadaan ketika isi terlihat seperti error atau tidak memberikan konten yang diharapkan, tetapi server mengirim respons sukses. Tulisan “halaman tidak ditemukan” dengan status 200 adalah contoh yang mudah dipahami. Google bisa menganggap respons tersebut sebagai soft 404, meskipun browser membukanya tanpa peringatan jaringan.

Halaman singkat tidak otomatis menjadi soft 404. Konfirmasi dulu apakah URL memang memiliki objek konten yang valid dan apakah pengguna mendapat jawaban sesuai tujuan halaman. Halaman konfirmasi permintaan, misalnya, punya kebutuhan berbeda dari halaman layanan yang diharapkan tersedia di pencarian.

Google menjelaskan bahwa respons 2xx tidak menjamin pengindeksan; konten kosong atau pesan error bisa menghasilkan soft 404. Untuk URL yang benar-benar hilang, gunakan status yang sesuai. Untuk konten yang seharusnya masih tersedia, pulihkan kontennya dan respons suksesnya. Jangan mengganti semua error menjadi 200 demi membuat laporan tampak bersih. Lihat [dokumentasi status HTTP Google](https://developers.google.com/crawling/docs/troubleshooting/http-status-codes).

## 3. Jangan menyelamatkan halaman error hanya lewat JavaScript

Bayangkan server mengirim 404, lalu skrip mengambil artikel dari API dan mengganti layar error menjadi artikel lengkap. Pengunjung mungkin akhirnya membaca artikel, tetapi respons pertama tidak sesuai keberadaan konten tersebut. Mengandalkan tahap rendering untuk memperbaikinya berisiko karena rendering non-200 bisa dilewati.

Jika artikel memang ada, perbaiki pencarian data dan respons server sehingga HTML awal sudah memuat konten yang relevan dengan status sukses. Jika artikel tidak ada, pertahankan status error yang benar. Menampilkan navigasi bantuan bukan alasan untuk mengubah status menjadi 200.

Pada Astro SSR, penetapan status dapat dilakukan dalam halaman error:

```astro
---
Astro.response.status = 404;
---
<h1>Halaman tidak ditemukan</h1>
<a href="/blog/">Lihat artikel yang tersedia</a>
```

Cuplikan ini hanya menggambarkan respons halaman error. Ia bukan pengganti pengaturan route atau validasi slug. Setelah menerapkannya, uji slug yang tidak ada melalui HTTP dan pastikan link bantuan hadir dalam HTML awal. Hindari klaim selesai hanya karena desain halaman 404 terlihat rapi.

## 4. Bedakan konten hilang, konten pindah, dan gangguan sementara

Ketiga keadaan tersebut membutuhkan tindakan berbeda. Konten tidak ditemukan dapat mengirim 404. Konten yang benar-benar pindah memiliki URL pengganti yang setara dan membutuhkan redirect permanen yang sesuai. Gangguan server sementara membutuhkan penanganan error server, bukan respons seolah-olah seluruh konten sudah dihapus.

Jangan mengarahkan setiap alamat salah ke homepage. Redirect seharusnya membantu pengguna menemukan pengganti yang relevan. Jika tidak ada pengganti, halaman tidak ditemukan yang jelas lebih jujur daripada perpindahan ke halaman yang tidak menjawab kebutuhan awal.

Untuk maintenance yang memang membuat layanan tidak tersedia, evaluasi respons 503 pada lapisan yang menangani gangguan tersebut. Google menyebut 5xx dan 429 sebagai sinyal untuk sementara memperlambat crawling; URL yang sudah diindeks dapat dipertahankan dahulu, tetapi akhirnya bisa dikeluarkan jika kegagalan berlanjut. Ini bukan alasan untuk membiarkan downtime: catat penyebab, waktu pemulihan, dan hasil pemeriksaan ulang dari [referensi HTTP resmi](https://developers.google.com/crawling/docs/troubleshooting/http-status-codes).

## 5. Periksa metadata sebelum menjalankan browser

Ambil HTML awal dan cari title, canonical, robots, serta structured data yang relevan. Untuk halaman valid, metadata tersebut harus menggambarkan halaman yang benar, bukan layar loading atau placeholder. Jika JavaScript kemudian mengganti canonical dengan alamat berbeda, Anda membuat sinyal yang berpotensi membingungkan.

Perhatikan khusus `noindex`. Google menjelaskan bahwa menemukan noindex dapat membuat rendering dilewati. Menghapusnya belakangan lewat JavaScript bukan cara yang dapat diandalkan untuk membuat halaman terindeks. Halaman yang ingin diindeks harus mengirim pengaturan yang benar sejak respons awal, sebagaimana dijelaskan dalam [panduan JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).

Pisahkan pengujian halaman publik dari halaman akun. Konten yang memang privat membutuhkan autentikasi dan otorisasi server; noindex bukan mekanisme keamanan. Jangan membuat halaman login mengirim konten rahasia hanya supaya bot mendapat HTML lengkap. Kemudahan crawling tidak boleh mengalahkan batas akses pengguna.

## 6. Verifikasi hasil dengan bukti yang sesuai

Susun catatan uji sederhana: URL valid mengirim status yang benar dan konten utama tersedia; URL hilang mengirim error yang benar; URL pindah menuju pengganti relevan; gangguan sementara tidak disamarkan sebagai halaman sukses kosong. Jalankan lagi setelah build, setelah deploy, serta setelah perubahan cache atau router yang relevan.

Jika mempunyai akses Search Console, gunakan laporan pengindeksan untuk melihat pola masalah dan URL Inspection untuk memeriksa URL tertentu. Bedakan hasil pengujian langsung dari informasi halaman yang sebelumnya diketahui Google. Hasil curl membuktikan respons saat diperiksa, bukan membuktikan Google sudah memilih canonical atau memasukkan URL ke indeks.

Rekomendasi dianggap gagal jika pengujian produksi masih menunjukkan slug hilang berstatus 200, halaman valid berstatus error, atau konten utama hanya muncul setelah skrip memperbaiki respons yang salah. Indikator awal yang bisa dipantau adalah log 4xx dan 5xx, kegagalan route, serta respons sampel URL setelah deploy. Jangan menyamakan semua kenaikan 404 dengan regresi: crawling ke alamat yang memang tidak ada tetap perlu dibedakan dari kehilangan halaman aktif.

## Kapan perlu tindakan sekarang?

Perbaiki segera jika halaman layanan yang seharusnya tersedia mengirim error atau slug hilang selalu disajikan sebagai halaman sukses. Sebelum perubahan struktur, identifikasi lapisan penyebab: data konten, router, adapter hosting, atau cache. Mengubah template tanpa bukti dapat memindahkan masalah, bukan menyelesaikannya.

Pada 8 Oktober 2026, September spam update dinyatakan selesai dalam [dashboard status Google Search](https://status.search.google.com/incidents/XhUDXP7A67iHCD2kmbVu). Itu bukan bukti bahwa semua perubahan trafik hari ini berasal dari status HTTP. Dalam masa observasi setelah rollout, simpan bukti teknis dan hindari keputusan besar berdasarkan fluktuasi sesaat.

Jika membutuhkan [audit SEO teknis](/jasa-seo/), mulai dengan satu URL bermasalah dan satu pembanding yang sehat. Respons yang dapat diuji lebih berguna daripada daftar dugaan panjang. Tujuannya sederhana: halaman valid mengirim konten yang benar; halaman error mengakui error; pengguna tetap mendapat jalur bantuan yang masuk akal.

---
title: "Migrasi WordPress ke Astro: 8 Checklist SEO"
description: "Panduan migrasi WordPress ke Astro: inventaris URL, pemetaan redirect, konten, canonical, formulir, dan pengujian agar perpindahan bisa diaudit dengan jelas."
pubDate: "2026-10-04"
date: "2026-10-04"
excerpt: "Delapan checklist migrasi WordPress ke Astro: pertahankan URL, uji redirect, pindahkan konten, dan verifikasi SEO tanpa menjanjikan ranking tetap."
category: "Web Development"
tags: ["Astro", "WordPress", "Migrasi Website", "Redirect 301", "SEO Teknis"]
author: "Rafiq"
coverImage: ""
heroImage: ""
---

Migrasi WordPress ke Astro bukan sekadar mengganti tema dengan komponen baru. Yang dipindahkan adalah konten, alamat halaman, aset, fungsi bisnis, dan kebiasaan kerja editor. Cara paling sederhana mengurangi risiko SEO adalah mempertahankan URL yang masih relevan, menyajikan konten utama dalam HTML, dan menguji setiap alamat yang berubah sebelum website baru dibuka.

Panduan ini membahas persiapan dan pemeriksaan migrasi, bukan janji bahwa ranking akan tetap sama. Google menjelaskan bahwa perubahan besar pada situs bisa disertai fluktuasi sementara ketika halaman diproses ulang. Rujukan teknisnya adalah [panduan perpindahan situs dengan perubahan URL dari Google](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes).

Ada konteks waktu yang penting. Pada 4 Oktober 2026, [September 2026 spam update](https://status.search.google.com/incidents/XhUDXP7A67iHCD2kmbVu), yang dimulai 24 September, belum ditandai selesai. [Semrush dalam tulisan 29 September 2026](https://www.semrush.com/blog/google-spam-update-september-2026/) menekankan sulitnya atribusi selama rollout. Untuk situs yang tidak sedang mengalami keadaan darurat, gunakan periode ini untuk menyiapkan staging dan baseline; jangan menumpuk migrasi besar di atas volatilitas lalu menyimpulkan penyebab perubahan trafik.

## 1. Pastikan migrasi memang diperlukan

Astro cocok dipertimbangkan untuk situs berbasis konten yang ingin memisahkan tampilan dari sistem pengelolaan konten. Namun, memilih framework baru tidak otomatis memperbaiki konten tipis, penawaran yang tidak jelas, atau tracking yang keliru. Kalau masalah utama hanya foto terlalu berat dan plugin yang tidak dipakai, perbaikan WordPress mungkin sudah cukup.

[Dokumentasi migrasi resmi Astro](https://docs.astro.build/en/guides/migrate-to-astro/from-wordpress/) menjelaskan perbedaan alur kerja: WordPress menyediakan dashboard dan ekosistem plugin, sedangkan proyek Astro umumnya dikelola melalui kode dan dapat memakai file konten atau CMS. WordPress juga bisa dipertahankan sebagai headless CMS. Jadi, pindah ke Astro tidak harus berarti membuang dashboard yang sudah dipahami klien.

Tulis alasan migrasi yang dapat diuji. Contohnya, tim ingin mengurangi JavaScript di halaman layanan atau membutuhkan komponen yang lebih mudah dipelihara. Tentukan cara mengukurnya pada halaman yang sama. Hindari alasan kabur seperti “lebih modern” atau “pasti lebih bagus untuk SEO”.

## 2. Inventaris URL sebelum mendesain ulang

Ambil daftar URL dari beberapa tempat: sitemap lama, ekspor konten WordPress, laporan halaman Search Console, analytics, dan hasil crawl. Sitemap saja belum tentu memuat semua alamat yang pernah memperoleh kunjungan atau tautan. Periksa juga lampiran gambar, PDF, kategori, tag, pagination, dan halaman yang sudah tidak ditautkan oleh menu.

Buat lembar kerja dengan kolom berikut:

- URL lama dan status HTTP saat ini;
- jenis halaman serta topik yang dijawab;
- URL tujuan yang diusulkan;
- tindakan: tetap, redirect, atau tidak dipindahkan;
- alasan tindakan dan hasil pengujian;
- pemilik keputusan, khususnya untuk konten bisnis yang penting.

Jangan menyalin semua URL ke situs baru secara otomatis. Halaman yang masih relevan perlu dipertahankan. Duplikasi atau konten usang perlu keputusan editorial. Akan tetapi, jangan memakai migrasi sebagai alasan untuk membuang halaman bernilai tanpa memeriksa trafik, tautan, serta kebutuhan pelanggan.

## 3. Pertahankan permalink ketika memungkinkan

Pergantian CMS tidak mewajibkan pergantian alamat. Jika artikel lama memakai `/blog/nama-artikel/`, Astro bisa tetap menyajikan pola tersebut. Menjaga alamat yang sama menghilangkan kebutuhan redirect untuk halaman itu, meskipun konten dan metadata tetap perlu diperiksa.

Perhatikan detail yang sering terlewat: trailing slash, huruf besar, karakter khusus, tanggal dalam permalink, serta awalan kategori. Dua alamat yang terlihat hampir sama di lembar kerja belum tentu diperlakukan sama oleh server. Pastikan variasi yang memang duplikat diarahkan ke satu versi utama.

### Jangan ganti domain tanpa kebutuhan bisnis

Migrasi platform, penggantian domain, redesign, dan penulisan ulang konten adalah perubahan berbeda. Menggabungkannya membuat diagnosis lebih sulit ketika hasil tidak sesuai harapan. Rekomendasi praktisnya: pertahankan sebanyak mungkin variabel yang tidak perlu diubah. Jika domain tetap sama, perubahan WordPress ke Astro bukan alasan memakai alat Change of Address Search Console.

## 4. Petakan redirect ke halaman yang benar-benar relevan

Jika URL harus berubah, buat pemetaan satu per satu. Google menyarankan redirect permanen di sisi server, seperti 301 atau 308, ketika halaman berpindah permanen. Jangan mengandalkan tombol “halaman sudah pindah” yang harus diklik pengunjung agar mencapai tujuan.

Contoh ilustratif: artikel lama tentang biaya website harus menuju artikel pengganti yang membahas biaya website, bukan beranda. Google memperingatkan bahwa mengarahkan banyak URL ke tujuan yang tidak relevan dapat diperlakukan sebagai soft 404. Bila beberapa artikel benar-benar digabung menjadi satu panduan yang menjawab semuanya, tujuan gabungan itu bisa masuk akal. [Sumber: panduan Google](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes).

Uji tiga hal untuk setiap aturan: status URL lama, nilai `Location`, dan status tujuan akhir. Arahkan langsung ke tujuan final supaya tidak membentuk rantai. Google menyarankan mempertahankan redirect selama mungkin, umumnya setidaknya satu tahun; jangan menghapusnya segera setelah sitemap baru dikirim.

## 5. Pindahkan konten, media, dan metadata sebagai satu paket

Ekspor teks saja belum menyelesaikan migrasi. Gambar bisa masih menunjuk ke domain staging, shortcode bisa muncul sebagai teks mentah, dan embed yang bergantung pada plugin dapat berhenti bekerja. Buka sampel halaman dari setiap template, lalu bandingkan isi lama dengan hasil baru.

Periksa judul, deskripsi, heading, tanggal publikasi, penulis, alt gambar, caption, serta tautan di dalam artikel. Pertahankan tanggal publikasi sebenarnya. Jangan mengganti tanggal seluruh arsip menjadi tanggal migrasi untuk menciptakan kesan baru.

Canonical harus menunjuk ke URL publik yang diinginkan. Pada artikel, pastikan data terstruktur seperti `BlogPosting` menggambarkan informasi yang benar-benar terlihat. Jangan mengarang kredensial penulis, ulasan, atau organisasi penerbit. Bila satu field tidak memiliki data yang dapat dibuktikan, lebih baik tidak menambahkannya daripada mengisi dengan klaim pemasaran.

## 6. Uji HTML awal dan fungsi bisnis

Website yang tampil baik di browser developer belum tentu mengirim konten penting dalam HTML awal. Periksa sumber respons, bukan hanya DOM setelah JavaScript berjalan. Judul, isi utama, canonical, dan data terstruktur sebaiknya sudah tersedia tanpa menunggu interaksi pengguna.

Astro menyediakan beberapa cara membangun halaman; hasilnya tergantung implementasi. Jangan menganggap semua komponen otomatis ringan hanya karena memakai Astro. Komponen interaktif dapat membawa JavaScript tambahan. Bandingkan payload dan perilaku halaman yang benar-benar digunakan pelanggan.

Selain SEO, uji formulir, tombol WhatsApp, pencarian, dan email notifikasi. Gunakan data tes, pastikan pesan sampai ke penerima yang benar, lalu hapus data tes sesuai prosedur. Situs yang lebih cepat tetapi tidak mengirim lead bukan migrasi yang berhasil.

Untuk performa, bedakan Lighthouse sebagai pengukuran laboratorium dan Core Web Vitals sebagai data pengguna nyata. Gunakan LCP, INP, dan CLS. Jangan menyimpulkan peningkatan konversi dari skor Lighthouse saja. Jika masalahnya respons klik, [panduan memecah tugas JavaScript untuk INP](/blog/optimasi-inp-scheduler-yield/) membahas pendekatan yang lebih spesifik.

## 7. Buat gerbang sebelum cutover

Staging perlu dicegah agar tidak menjadi versi publik yang bersaing dengan situs utama. Tetapi proteksi staging harus dilepas dengan sengaja saat produksi dibuka. Catatan cutover harus menyebut apa yang berubah, siapa yang memeriksa, dan bagaimana kembali ke versi sebelumnya jika ada masalah.

Checklist sebelum membuka produksi:

1. Backup konten, database yang masih dibutuhkan, dan aset tersedia serta bisa dipulihkan.
2. URL penting memberikan status yang tepat; halaman hilang tidak menjadi soft 404 berstatus 200.
3. Redirect perubahan alamat menuju tujuan relevan tanpa loop.
4. Canonical tidak menunjuk staging atau domain lama yang salah.
5. Tidak ada `noindex` atau larangan crawl yang tertinggal pada halaman publik.
6. Sitemap memuat URL canonical yang ingin diindeks, bukan URL redirect.
7. Tautan internal sudah diperbarui ke tujuan final.
8. Formulir, analytics, dan notifikasi telah diuji.

Daftar ini adalah gerbang teknis, bukan jaminan ranking. Simpan hasil tes agar keputusan membuka produksi memiliki bukti. Untuk pembagian tanggung jawab setelah peluncuran, gunakan [checklist handover website](/blog/checklist-handover-website-klien/).

## 8. Monitor setelah peluncuran, jangan buru-buru menyalahkan Astro

Setelah cutover, pantau respons server, error halaman, pengiriman formulir, dan status URL penting di Search Console. Sitemap membantu penemuan URL, tetapi keberadaan alamat di sitemap bukan bukti bahwa Google sudah mengindeksnya. Pemeriksaan URL diperlukan untuk melihat status halaman tertentu.

Jika trafik berubah, mulai dari kesalahan yang bisa dibuktikan: redirect salah, konten hilang, canonical keliru, server gagal, atau tracking berhenti. Perbaiki itu dahulu. Jangan melakukan perubahan massal kedua hanya karena grafik bergerak selama rollout Google.

Catat tanggal migrasi dan perubahan lain dalam laporan. Bandingkan periode yang masuk akal, pisahkan data teknis dari dugaan dampak algoritma, dan jelaskan batas kesimpulan kepada klien. Migrasi yang bisa diaudit mempunyai daftar URL, pemetaan, hasil tes, serta prosedur rollback. Itulah fondasi yang lebih berguna daripada janji “SEO aman seratus persen”.

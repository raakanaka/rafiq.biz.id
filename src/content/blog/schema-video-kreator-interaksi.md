---
title: "Schema Video: 7 Cek Kreator dan Interaksi yang Benar"
description: "Google memperbarui VideoObject pada 24 September 2026. Periksa kreator, thumbnail, tanggal, URL video, dan statistik tanpa mengarang engagement."
pubDate: "2026-10-06"
date: "2026-10-06"
excerpt: "Google memperbarui VideoObject. Tujuh cek untuk menandai kreator dan interaksi video sesuai fakta, lalu memvalidasi hasilnya sebelum laporan klien."
category: "SEO Teknis"
tags: ["Schema", "VideoObject", "Video SEO", "Structured Data"]
author: "Rafiq"
coverImage: ""
heroImage: ""
---

Video tutorial, demo produk, dan presentasi layanan sering sudah tersedia di website bisnis, tetapi metadata di belakangnya belum dirawat. Nama pembuat tidak jelas, thumbnail gagal diakses, atau angka penonton disalin dari sumber yang berbeda. Menambah schema tidak menyelesaikan masalah tersebut jika informasi dasarnya masih salah.

Pada **24 September 2026**, Google memperbarui dokumentasi VideoObject dengan properti `creator`, mencatat dukungan `author`, serta memperjelas jenis interaksi yang didukung dalam `interactionStatistic`. Alasannya adalah mendokumentasikan dukungan properti tersebut dan menjelaskan statistik interaksi, bukan mengumumkan jaminan ranking baru. Perubahan ini tercatat di [changelog resmi Google Search Central](https://developers.google.com/search/updates/).

Artikel ini berfokus pada pemeriksaan markup video yang memang sudah ada di halaman. Bukan panduan membuat artikel AI, bukan strategi mengejar jumlah views, dan bukan ajakan menambahkan video pada setiap landing page. Jika belum punya video yang relevan, kebutuhan pelanggan tetap lebih penting daripada kelengkapan schema.

## 1. Pastikan ada video nyata yang dapat ditonton

Mulai dari pengalaman pengunjung. Buka halaman menggunakan perangkat mobile, cari player, lalu putar videonya. Periksa apakah video yang tampil memang sesuai judul dan penjelasan halaman. Jangan menandai sebuah halaman sebagai memiliki video hanya karena ada gambar dengan ikon play yang sebenarnya membuka formulir konsultasi.

Pisahkan tiga pertanyaan: apakah player berfungsi, apakah halaman dapat diakses crawler, dan apakah file atau embed video dapat ditemukan. Ketiganya berbeda. Halaman yang terbuka normal belum membuktikan file videonya dapat diambil Google. Sebaliknya, schema yang lolos pemeriksaan sintaks belum membuktikan pengunjung bisa menonton tanpa login.

Gunakan [panduan praktik terbaik video Google](https://developers.google.com/search/docs/appearance/video) untuk menilai penempatan video dan akses teknis. Jika video hanya pelengkap kecil pada halaman layanan, jangan menjanjikan bahwa halaman tersebut akan diperlakukan sama dengan halaman khusus menonton video. Tujuan markup adalah menjelaskan konten yang tersedia, bukan mengubah fungsi halaman lewat label.

## 2. Periksa properti wajib sebelum menambah statistik

Dalam [dokumentasi VideoObject](https://developers.google.com/search/docs/appearance/structured-data/video), properti wajib yang dicantumkan adalah `name`, `thumbnailUrl`, dan `uploadDate`. Gunakan judul yang mewakili video tertentu, URL thumbnail yang benar, serta tanggal pertama kali video dipublikasikan. Jangan menggunakan tanggal artikel diperbarui sebagai pengganti tanggal publikasi video.

Google merekomendasikan informasi zona waktu pada `uploadDate`. Ini berguna ketika tim berada di lokasi berbeda atau publikasi dijadwalkan mendekati pergantian hari. Catat tanggal dari sumber penerbitan video, lalu pertahankan konsistensinya antara halaman dan metadata.

Untuk thumbnail, buka URL langsung tanpa sesi login. Pastikan responsnya benar-benar gambar, bukan halaman HTML kesalahan atau gambar placeholder. Thumbnail sebaiknya membantu orang mengenali isi video. Jangan menggunakan foto produk lain atau tangkapan layar yang menjanjikan sesuatu yang tidak dibahas dalam video.

Checklist wajib ini lebih bernilai daripada menambahkan banyak properti opsional sekaligus. Jika tanggal belum diketahui, cari catatan penerbitannya. Jangan mengisi hari ini sekadar agar validator berhenti mengeluh.

## 3. Bedakan kreator video dari pemilik website

Pembaruan September memperjelas `creator` dan dukungan alternatif `author`. Nilainya dapat berupa `Person` atau `Organization`. Jika memakai entitas tersebut, dokumentasi meminta `name` atau `alternateName`; `url` dapat mengarah ke halaman yang mengidentifikasi orang atau organisasi itu secara unik. [Sumber properti kreator](https://developers.google.com/search/docs/appearance/structured-data/video).

Untuk tutorial yang dibuat sendiri, identitas kreator bisa merujuk kepada pembuatnya. Untuk video dari mitra yang di-embed, jangan otomatis mengganti kreator menjadi pemilik website. Periksa siapa yang membuat atau menerbitkan video dan bagaimana atribusi ditampilkan. Nama publisher artikel tidak selalu sama dengan pembuat video.

Catat keputusan tersebut di dokumentasi konten: judul video, penerbit, halaman profil, serta sumber informasi. Bila identitas tidak dapat diverifikasi, tahan properti opsional tersebut sampai jelas. Tidak perlu mengarang profil profesional, gelar, atau afiliasi agar schema terlihat lebih meyakinkan.

## 4. Gunakan URL file dan URL embed pada tempatnya

`contentUrl` bukan alamat artikel. Properti itu menunjuk ke bytes file video yang sebenarnya. Google merekomendasikannya sebagai cara paling efektif untuk mengambil konten video; jika tidak tersedia, `embedUrl` dapat menjadi alternatif. `embedUrl` menunjuk player untuk video tertentu, bukan halaman utama platform hosting. [Penjelasan URL video](https://developers.google.com/search/docs/appearance/structured-data/video).

Kesalahan umum adalah memasukkan URL halaman yang sedang diaudit ke seluruh kolom URL. Format JSON tetap sah, tetapi maknanya keliru. Bandingkan alamat file, player, thumbnail, dan halaman; masing-masing punya fungsi sendiri.

Jika memakai penyimpanan dengan URL bertanda tangan yang cepat kedaluwarsa, periksa apakah akses crawler tetap memungkinkan. Jangan menurunkan perlindungan file privat hanya untuk SEO. Video yang memang dibatasi pelanggan harus tetap mengikuti kebijakan aksesnya; diskusikan kelayakan distribusi publik terlebih dahulu.

## 5. Jangan menyatukan views, likes, komentar, dan shares

Google kini mendokumentasikan empat jenis interaksi yang didukung: `WatchAction` untuk jumlah tontonan, `LikeAction` untuk likes atau upvotes, `CommentAction` untuk komentar, dan `ShareAction` untuk reshares. Jumlahnya ditempatkan pada `userInteractionCount` dalam `InteractionCounter`. Perinciannya tersedia di [bagian interactionStatistic](https://developers.google.com/search/docs/appearance/structured-data/video).

Jumlah kunjungan halaman tidak otomatis menjadi jumlah tontonan video. Klik tombol play belum tentu sama dengan definisi view dari platform hosting. Demikian pula, jumlah komentar artikel tidak boleh dipindahkan menjadi jumlah komentar video jika keduanya berasal dari sistem berbeda.

Tentukan sumber statistik sebelum implementasi. Catat platform, video yang dihitung, metrik, serta waktu pengambilan data. Bila tidak punya statistik yang bisa dipertanggungjawabkan, lewati `interactionStatistic`. Properti itu direkomendasikan ketika relevan, bukan alasan untuk mengisi angka perkiraan.

Jangan menjumlahkan views lintas platform tanpa penjelasan. Orang yang sama dapat menonton di beberapa tempat; definisi view juga dapat berbeda. Angka gabungan yang tampak besar bukan pengganti metadata yang benar. Hindari seluruh bentuk engagement buatan.

## 6. Validasi markup dan halaman setelah deployment

Uji JSON-LD terlebih dahulu, kemudian gunakan [Rich Results Test](https://search.google.com/test/rich-results). Bedakan error properti wajib, peringatan properti rekomendasi, serta masalah akses resource. Hasil eligible berarti memenuhi pemeriksaan tertentu, bukan kepastian ditampilkan dalam rich result.

Sesudah deploy, buka sumber HTML URL produksi. Pastikan VideoObject menunjuk video yang benar dan tidak tertinggal pada data versi sebelumnya. Periksa halaman mobile juga: player, atribusi, thumbnail, dan informasi utama tidak boleh hilang hanya karena ukuran layar berubah.

Untuk tim yang melakukan [handover website](/blog/checklist-handover-website-klien/), tambahkan pemeriksaan ini ke daftar penerimaan. Catat URL produksi yang diuji, hasil validasi, serta masalah yang belum selesai. Jangan menyerahkan screenshot validator dari localhost sebagai bukti deployment berhasil.

## 7. Laporkan keterbatasan, bukan janji ranking

Laporan yang berguna menjelaskan apa yang diperbaiki: misalnya tanggal publikasi dikoreksi, URL thumbnail dapat diakses, atau kreator kini sesuai sumber aslinya. Sertakan bukti sebelum dan sesudah. Hindari kesimpulan bahwa penambahan `creator` langsung menaikkan ranking atau menjamin sitasi AI.

Dokumentasi Google menyarankan pemantauan lewat Search Console setelah markup diterapkan atau template diperbarui. Amati item valid dan masalah yang muncul setelah Google memproses halaman. Waktu perayapan dan pemrosesan tidak identik dengan waktu commit kode. Perubahan yang belum terlihat segera belum membuktikan implementasi gagal.

Jika sedang ada update Search yang rollout, jangan menafsirkan fluktuasi trafik sebagai dampak satu properti schema. Catat tanggal implementasi, lingkup perubahan, serta kondisi update. Pisahkan koreksi teknis dari eksperimen pemasaran yang lebih besar.

## Checklist penerimaan untuk developer dan pemilik bisnis

- Video nyata tersedia; player dapat dipakai pengunjung.
- Judul, thumbnail, dan tanggal publikasi sesuai video.
- Kreator dapat diverifikasi; atribusi tidak mengambil kredit pihak lain.
- `contentUrl` mengarah ke file; `embedUrl` mengarah ke player yang tepat.
- Statistik berasal dari metrik video yang sesuai, bukan traffic halaman.
- Markup produksi diuji; resource tidak bergantung pada sesi login.
- Laporan mencatat hasil dan keterbatasan tanpa janji ranking.

Urutan paling aman adalah membenahi akses dan metadata wajib, kemudian atribusi, baru statistik opsional. Jika satu informasi belum tersedia, dokumentasikan kekurangannya. Schema video yang sedikit tetapi benar lebih berguna daripada objek lengkap berisi asumsi. Untuk bantuan audit implementasi, lingkup [jasa SEO](/jasa-seo/) sebaiknya dimulai dari halaman video yang benar-benar dipakai pelanggan, bukan seluruh situs sekaligus.

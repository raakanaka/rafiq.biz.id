---
title: "Dashboard Visibilitas AI untuk Klien: 6 Aturan Prompt dan GSC"
description: "Cara menyusun laporan visibilitas AI untuk klien: prompt tetap, brand dan non-brand dipisah, data Semrush dan Search Console dibandingkan, bukan digabung."
pubDate: "2026-10-22"
date: "2026-10-22"
excerpt: "Enam aturan menyusun dashboard visibilitas AI untuk klien: prompt tetap, non-brand dipisah, Semrush dan Search Console tidak digabung jadi satu skor."
category: "Digital Marketing"
tags: ["AI Visibility", "Search Console", "Laporan SEO", "Semrush"]
author: "Rafiq"
coverImage: ""
heroImage: ""
---

Klien mulai bertanya, "Bisnis saya muncul di jawaban AI atau tidak?" Jawaban jujur butuh dua jenis data yang berbeda sifatnya: seberapa sering merek disebut di jawaban AI, dan bagaimana halaman situs bekerja di Google. Semrush menerbitkan panduan membangun dashboard yang menaruh keduanya berdampingan ([Semrush, 12 Oktober 2026](https://www.semrush.com/blog/how-to-build-an-ai-visibility-dashboard-semrush/)). Artikel ini mengambil prinsip kerjanya untuk freelancer yang melapor ke klien kecil, tanpa wajib memakai tool tertentu.

Bukan panduan membaca laporan AI di Search Console (sudah dibahas di [cara membaca laporan AI Search Console](/blog/cara-baca-laporan-ai-search-console/)), dan bukan soal trafik ChatGPT yang tidak terlacak (lihat [atribusi trafik ChatGPT](/blog/chatgpt-traffic-turun-masalah-atribusi/)). Fokusnya satu: cara menyusun laporan bulanan agar angka AI tidak menyesatkan.

## 1. Tentukan dulu apa yang diukur

Sebelum membuka tool apa pun, tulis lima hal: domain beserta variasi nama merek yang mungkin dipakai AI, platform yang dilacak, lokasi dan bahasa, kumpulan prompt tetap, serta periode laporan. Panduan Semrush menyebut Prompt Tracking-nya mendukung ChatGPT, Google AI Mode, dan Gemini, sedangkan Claude dan Perplexity belum didukung saat artikel itu terbit. Jadi pilih platform sesuai kemampuan tool, lalu catat batasannya di laporan. Jangan menulis "visibilitas di semua AI" bila hanya dua platform yang dipantau.

## 2. Kunci prompt minimal sebulan

Seluruh garis tren bergantung pada prompt yang konstan. Mengganti prompt di tengah jalan merusak perbandingan. Semrush menyarankan prompt yang meniru bahasa calon pembeli, tersebar di lima kelompok: masalah pelanggan, penemuan produk atau kategori, perbandingan, pemilihan produk, dan pertanyaan bermerek. Sumber ide terbaik adalah tiket dukungan, percakapan penjualan, dan forum, bukan tebakan kata kunci.

Untuk klien jasa lokal, contoh hipotetisnya: "bagaimana cara memilih jasa pembuatan website untuk klinik di Medan?" lebih berguna daripada "jasa website terbaik". Itu hanya ilustrasi format prompt, bukan hasil pengujian.

## 3. Pisahkan prompt bermerek dari non-bermerek

Prompt bermerek, misalnya "apakah [merek] terpercaya?", hampir selalu menyebut merek itu sendiri sehingga mengangkat angka keseluruhan. Semrush menyarankan melaporkan dua angka: semua prompt dan non-bermerek saja. Angka non-bermerek menjawab pertanyaan yang sebenarnya penting bagi klien: apakah AI merekomendasikan bisnis ini kepada orang yang belum mengenalnya?

## 4. Jangan percaya angka per kelompok yang kecil

Dalam contoh Semrush dengan enam prompt per kelompok, satu prompt yang berubah menggeser tingkat visibilitas kelompok itu 17 poin. Perlakukan perubahan di level kelompok sebagai petunjuk untuk diselidiki, bukan kesimpulan. Bila klien menginginkan angka kelompok yang stabil, tambah prompt hingga 15 atau lebih per kelompok secara bertahap, dan hanya prompt yang benar-benar mirip bahasa pelanggan.

Ingat juga bahwa pelacakan prompt mulai merekam sejak kampanye dibuat tanpa backfill. Panduan itu menyebut perbandingan 28 hari terakhir dengan 28 hari sebelumnya baru lengkap setelah sekitar delapan minggu. Beri tahu klien bahwa beberapa minggu pertama hanyalah baseline.

## 5. Bandingkan data AI dan Search Console, jangan digabung

Laporan Generative AI di Search Console, menurut panduan yang sama, saat ini hanya menyediakan impresi. Tidak ada kueri, klik, atau CTR, dan tidak ada atribusi dari prompt ke klik. Sementara data pelacakan prompt berasal dari alat pihak ketiga dengan metodologinya sendiri. Dua pengukuran ini menjawab pertanyaan berbeda, sehingga menggabungkannya menjadi satu skor akan menyembunyikan perbedaan itu. Susun sebagai dua kolom berdampingan.

Laporan Generative AI baru terisi bila halaman mendapat cukup impresi di AI Overviews dan AI Mode. Jika kosong, pakai laporan hasil penelusuran standar dan beri label jelas: itu performa Google Search secara umum, bukan visibilitas AI. Akhiri jendela ekspor 2–3 hari sebelum hari ini karena data terbaru belum lengkap.

## 6. Baca polanya, lalu putuskan tindakan

Dari uji coba situsnya, Semrush melaporkan tiga temuan yang langsung masuk rencana konten: halaman yang dikutip AI untuk 50 prompt tetapi nol klik Google, kompetitor yang berulang kali dikutip untuk prompt tertentu, dan satu kelompok prompt tanpa kemunculan sama sekali. Itu data situs uji mereka, bukan tolok ukur industri. Polanya yang bisa dipakai:

- Halaman sering dikutip tetapi tanpa klik: kerjakan sisi Google, yaitu kata kunci yang realistis, penyegaran halaman, dan tautan masuk.
- Kompetitor dikutip, kamu tidak: buka prompt-nya dan baca apa yang dikutip. Itu daftar konten perbandingan atau kategori yang perlu dibuat.
- Satu kelompok prompt kosong: biasanya menandakan konten yang memang belum ada, bukan satu halaman lemah.

## Batas yang perlu dinyatakan ke klien

Panduan Semrush membangun dashboard-nya lewat Google Sheets dan artefak Claude berbayar, dan menyebut Prompt Tracking mulai di 25 prompt pada paket dasar (30 prompt butuh paket lebih tinggi atau tambahan). Artinya ada biaya alat yang harus dihitung sebelum menawarkan layanan ini. Untuk klien kecil, spreadsheet manual dengan 15–20 prompt yang dicek berkala bisa cukup, selama jadwal dan prompt tidak berubah. Itu saran praktis, bukan klaim dari sumber.

Dokumentasi Google tentang fitur AI juga menyatakan tidak ada markup khusus yang perlu ditambahkan untuk tampil di AI Overviews maupun AI Mode ([Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)). Jadi laporan visibilitas AI sebaiknya berujung pada perbaikan konten dan fakta, bukan janji kemunculan.

## Cara memakainya di laporan bulanan

Masukkan satu halaman ringkas ke laporan yang sudah ada: tabel prompt tetap, angka semua prompt dan non-bermerek, impresi Generative AI dari Search Console, serta tiga tindakan bulan depan. Bagian leads tetap diukur terpisah lewat [validasi lead formulir GA4](/blog/ukur-lead-formulir-ga4/), dan ruang lingkupnya dicantumkan di [proposal SEO bulanan](/blog/proposal-seo-bulanan-deliverable-kpi/). Bila klien memakai GA4 untuk pantauan rutin, [dashboard kustom GA4](/blog/dashboard-kustom-ga4-panduan-praktis/) cukup untuk sisi situs.

Ukuran keberhasilannya: setelah tiga bulan, apakah ada keputusan konten yang lahir dari data ini? Bila tidak, hentikan pelacakan dan hemat biayanya. Selama rollout update Google, catat saja perubahan, jangan menyimpulkan sebab ranking dari satu bulan data.

---
title: "Form Approval Indexing API Hilang: Bukan Izin Index Instan"
description: "Google menghapus form approval Indexing API dari dokumentasi pada 16 Oktober 2026. Ini artinya untuk klien non-lowongan kerja dan non-livestream."
pubDate: "2026-10-19"
date: "2026-10-19"
excerpt: "Form approval Indexing API hilang dari dokumen Google. API tetap hanya untuk JobPosting dan livestream; situs biasa jangan memakainya."
category: "SEO Teknis"
tags: ["SEO", "Indexing API", "Google Search", "Klien", "Sitemap"]
author: "Rafiq"
coverImage: ""
heroImage: ""
---

"Kak, bisa pakai Indexing API supaya artikel kami langsung terindeks?" Pertanyaan seperti ini perlu dijawab hati-hati saat klien membaca tutorial lama atau melihat plugin WordPress yang menawarkan "instant indexing". Ada perubahan dokumentasi Google yang pas dijadikan bahan jawaban.

## Apa yang berubah

Menurut [laporan Search Engine Journal](https://www.searchenginejournal.com/google-indexing-api-docs-approval-form-removed/593292/), Google menghapus form approval Indexing API dari dokumentasinya pada 16 Oktober 2026. Instruksi untuk meminta approval juga ikut hilang. Sebelumnya, halaman kuota menyebut bahwa API menyediakan kuota awal untuk pengujian dan membutuhkan persetujuan tambahan untuk penggunaan lebih lanjut.

Changelog Google menyebut halaman kuota diperbarui untuk "mencerminkan batas kuota dan proses saat ini" serta "menghapus form yang usang". Perlu dicatat: changelog tidak menyatakan apakah syarat approval itu sendiri berubah. Jadi jangan menyimpulkan bahwa kini semua orang otomatis disetujui.

Halaman quickstart juga tidak lagi memuat langkah "Request approval and quota", dan halaman penggunaan tidak lagi mengulang catatan bahwa kuota default hanya untuk pengujian. Saya mengecek halaman [kuota resmi](https://developers.google.com/search/apis/indexing-api/v3/quota-pricing) dan [panduan penggunaan](https://developers.google.com/search/apis/indexing-api/v3/using-api); isinya sesuai dengan laporan tersebut.

## Yang tidak berubah

Bagian terpenting untuk klien justru yang tetap sama. Dokumentasi Google masih menyatakan:

- Indexing API hanya bisa dipakai untuk halaman dengan `JobPosting`, atau `BroadcastEvent` yang ditanam dalam `VideoObject`.
- Kuota default per project: 200 permintaan publish per hari (update dan penghapusan dihitung bersama), 180 permintaan metadata per menit, dan 380 permintaan total per menit.
- Kuota harian direset tengah malam waktu Pasifik.
- Kebijakan spam Google berlaku untuk URL yang dikirim, dan pengiriman tidak boleh menyiasati batas dengan banyak akun.
- Batch maksimal 100 permintaan per HTTP request, tetapi kuota tetap dihitung per URL.

Artinya, penghapusan form tidak membuka pintu bagi blog, toko online, atau company profile. Kategori halaman yang didukung tidak diperluas.

## Kenapa ini penting untuk klien non-lowongan

Berikut tiga skenario untuk menentukan respons sesuai jenis situs.

**1. Klien blog atau company profile.** Jawabannya: tidak perlu dan tidak didukung. Pakai sitemap XML yang rapi, tautan internal yang jelas, dan [laporan Search Console](https://rafiq.biz.id/blog/cara-baca-laporan-ai-search-console/) untuk memantau status. Untuk topik crawling, baca juga [status HTTP dan JavaScript untuk Googlebot](https://rafiq.biz.id/blog/status-http-javascript-googlebot/).

**2. Klien toko online.** Halaman produk bukan `JobPosting`. Mengirim URL produk lewat Indexing API tidak sesuai dokumentasi. Tidak ada janji dari Google bahwa itu bekerja, dan risiko menyalahi kebijakan tetap ada. Gunakan sitemap dengan `lastmod` yang jujur, seperti dibahas di [artikel sitemap lastmod](https://rafiq.biz.id/blog/sitemap-lastmod-priority-changefreq/).

**3. Klien portal lowongan atau penyelenggara livestream.** Di sini API relevan. Namun SEJ mencatat sebelumnya pemilik job board menunggu berbulan-bulan tanpa respons atas permintaan approval, dan dokumen baru tidak menjelaskan nasib permintaan lama. Karena itu cek langsung kuota project di Google API Console sebelum menjanjikan apa pun kepada klien.

## Cara menjawab klien dengan singkat

Skrip jawaban yang bisa dipakai:

1. Indexing API resmi hanya untuk lowongan kerja dan siaran langsung.
2. Untuk situs Anda, jalur resmi adalah sitemap, tautan internal, dan kualitas konten.
3. Mempercepat indeks tidak bisa dipaksa; yang bisa kita lakukan adalah memastikan tidak ada hambatan teknis.

Kalau klien tetap ingin "cepat", tawarkan pekerjaan yang terukur: audit status indeks halaman penting, perbaikan canonical, pembersihan sitemap, dan penautan internal dari halaman yang sudah sering di-crawl.

## Checklist teknis sebelum menyentuh API

Jika klien memang pemilik portal lowongan, periksa dulu:

- Halaman lowongan punya markup `JobPosting` valid dan dirender di HTML awal (lihat panduan Google tentang [JobPosting](https://developers.google.com/search/docs/appearance/structured-data/job-posting)).
- Lowongan kedaluwarsa mengembalikan 404 atau 410, atau memakai `noindex`, sebelum mengirim `URL_DELETED`. Syarat ini tertulis di dokumentasi penggunaan.
- Sistem tidak mengirim ulang URL yang tidak berubah. Kuota 200 per hari cepat habis pada situs dengan ribuan lowongan.
- Sitemap tetap dipertahankan. Panduan JobPosting Google masih menyarankan sitemap untuk cakupan seluruh situs, sementara Indexing API untuk URL lowongan.
- Ada pemantauan error 429 dan pencatatan jumlah permintaan harian.

## Yang belum diketahui

Dua hal belum jelas dari sumber yang ada. Pertama, apakah project tanpa approval sekarang boleh memakai kuota default untuk lowongan live. Kedua, apakah akan ada jalur baru untuk meminta kuota lebih tinggi. Google belum menjelaskan keduanya. Pantau halaman kuota dan [changelog dokumentasi Search](https://developers.google.com/search/updates) sebelum membuat keputusan arsitektur.

## Kesimpulan

Perubahan ini kecil secara dokumentasi tetapi berguna sebagai momen mengoreksi mitos "instant indexing". Batasan jenis halaman tetap sama. Untuk mayoritas klien web dan SEO, fokus tetap pada sitemap bersih, struktur tautan, dan konten yang layak diindeks. Untuk klien lowongan kerja, cek kuota di API Console dulu, lalu catat bahwa nasib approval lama belum dijelaskan Google.

### Alternatif aman jika klien merasa halaman lambat terindeks

Jika halaman non-lowongan terasa lama muncul di Google, ada jalur yang jauh lebih aman daripada memaksa API:

1. Periksa URL Inspection di Google Search Console. Lihat apakah Googlebot sudah menemukan URL tersebut, apa status canonical-nya, dan apakah ada kendala render.
2. Tambahkan tautan internal dari halaman utama atau artikel pilar yang sudah berstatus indeks dan relevan dengan halaman tujuan. Googlebot mengikuti tautan tersebut secara alami.
3. Hindari memblokir aset CSS atau JavaScript kritis di robots.txt, karena rendering yang gagal dapat menunda evaluasi konten.
4. Pastikan sitemap diperbarui hanya saat konten benar-benar berubah, bukan di-regenerate massal tiap hari dengan tanggal palsu.

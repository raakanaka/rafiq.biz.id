---
title: "Sitemap 2026: lastmod Jujur, Priority Dibuang"
date: "2026-10-10"
pubDate: "2026-10-10"
description: "Google hanya memakai URL dan lastmod dari sitemap. Ini cara merapikan sitemap Astro atau CMS agar jujur, kanonis, dan tidak membuang crawl."
excerpt: "Google hanya memakai URL dan lastmod dari sitemap. Ini cara merapikan sitemap Astro atau CMS agar jujur, kanonis, dan tidak membuang crawl."
category: "SEO Teknis"
tags: ["Sitemap", "lastmod", "Crawl Budget", "Search Console", "Astro"]
author: "Rafiq"
coverImage: ""
heroImage: ""
---

Banyak sitemap website bisnis berisi tiga hal yang sebenarnya tidak dipakai Google: `priority`, `changefreq`, dan tanggal `lastmod` yang sama di semua URL. **Yang dipakai Google dari sitemap adalah alamat URL dan `lastmod`, itu pun hanya jika tanggalnya terbukti akurat.** Artinya, merapikan sitemap bukan soal menambah tag, tetapi memastikan setiap tag yang tersisa jujur.

## Apa kata Google soal isi sitemap

[Panduan sitemap Google Search Central](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) menyebut bahwa Google mengabaikan nilai `priority` dan `changefreq`, dan memakai `lastmod` jika nilainya konsisten dan dapat diverifikasi, misalnya dengan membandingkannya dengan waktu perubahan terakhir halaman. Pada [panduan crawl budget](https://developers.google.com/crawling/docs/crawl-budget), Google juga menyarankan agar sitemap selalu diperbarui dan menyertakan `lastmod` untuk konten yang berubah.

Topik ini kembali ramai setelah [episode 114 Search Off the Record, "Do sitemaps still matter?"](https://podcasts.apple.com/us/podcast/do-sitemaps-still-matter/id1512522198?i=1000792542652). Ringkasan [Relevant Audience](https://www.relevantaudience.com/seo/google-search-off-the-record-do-sitemaps-still-matter/) atas episode itu menyebut beberapa poin dari John Mueller:

- `priority` dan `changefreq` sudah tidak dipakai karena banyak situs menandai semua URL dengan nilai maksimum.
- `lastmod` dipakai bila tanggal dalam satu file terlihat masuk akal.
- Mengisi semua URL dengan tanggal hari ini tidak dianggap spam, tetapi Google akan berhenti mempercayai tanggal tersebut.
- Status "Couldn't fetch" pada sitemap valid bisa berasal dari beban host atau rendahnya crawl demand, yang menurut Mueller sering berkaitan dengan persepsi kualitas situs.

Poin terakhir mengubah urutan diagnosis: jika file valid dan bisa diakses tetapi tetap "Couldn't fetch", jangan hanya validasi ulang XML. Periksa juga laporan Crawl Stats dan kualitas halaman, terutama halaman tipis atau mirip satu sama lain.

## 1. Cek tanggal lastmod, bukan hanya jumlah URL

Ambil 10 URL dari sitemap, lalu bandingkan tanggal `lastmod` dengan riwayat perubahan sebenarnya. Perubahan konten utama, data terstruktur, atau tautan dianggap signifikan menurut dokumentasi Google. Mengganti tahun hak cipta di footer bukan perubahan signifikan.

Tanda bahaya yang paling mudah dikenali: ratusan URL berbagi satu tanggal yang sama. Itu hampir selalu berarti tanggal dibuat dari waktu build atau konstanta di kode, bukan dari perubahan konten.

Di situs saya sendiri pola ini terlihat jelas. Sitemap live berisi 503 URL dengan `lastmod` identik 2026-08-30, karena tanggal itu sengaja dibuat tetap agar rute SSR tidak mengklaim semua halaman berubah setiap kali dirayapi. Itu lebih aman daripada tanggal hari ini, tetapi tetap bukan tanggal per halaman. Langkah perbaikan yang masuk akal adalah mengambil tanggal dari frontmatter artikel dan membiarkan halaman lain tanpa `lastmod` sampai tanggal aslinya diketahui.

## 2. Lebih baik tanpa lastmod daripada lastmod salah

Dokumentasi Google tidak mewajibkan `lastmod`. Menurut [Digital Applied](https://www.digitalapplied.com/blog/xml-sitemap-lastmod-hygiene-illyes-directive-seo-2026), Gary Illyes pada 16 Juli 2026 menjawab di Bluesky bahwa situs dengan tanggal yang tidak sengaja salah "probably better off without the lastmods". Itu bukan aturan baru, melainkan penegasan prinsip lama: tag opsional, jadi menghilangkannya sah.

Praktiknya:

1. Artikel blog: pakai tanggal `date` atau `updated` dari frontmatter, hanya jika memang direvisi secara berarti.
2. Halaman layanan: isi tanggal hanya saat Anda mengubah isi, harga, atau portofolio di dalamnya.
3. Halaman yang tanggal aslinya tidak diketahui: hilangkan `lastmod`.

## 3. Buang priority dan changefreq

Kedua tag ini tidak merugikan, tetapi tidak berguna bagi Google. Menghapusnya memperkecil file dan mengurangi bagian yang harus dirawat. Untuk situs kecil, selisihnya tidak terasa di ranking. Alasan utamanya kebersihan: sitemap yang hanya berisi hal yang dipakai lebih mudah diaudit.

## 4. Daftarkan hanya URL kanonis berstatus 200

Sitemap adalah daftar URL yang Anda ingin dirayapi dan diindeks. Pastikan isinya:

- URL kanonis, tanpa parameter pelacakan atau stempel waktu.
- Status 200, bukan redirect. Jika server memaksa trailing slash, tulis versi bergaris miring di sitemap.
- Tidak mengandung halaman `noindex` atau halaman yang kanonisnya mengarah ke URL lain.

Hal ini sejalan dengan [catatan Google bahwa `noindex` tetap membuat URL dirayapi](https://developers.google.com/crawling/docs/myths-about-crawling), karena Google harus mengambil halaman untuk membaca aturannya. Memasukkan URL `noindex` ke sitemap justru mengirim sinyal yang bertentangan.

## 5. Jangan berharap sitemap menaikkan crawl budget

Sitemap tidak menambah kapasitas crawl. Ia hanya membantu Google menemukan URL dan memprioritaskan yang berubah. Google juga menyatakan bahwa jika situs tidak punya banyak halaman yang sering berubah, atau halaman baru sudah dirayapi pada hari yang sama, panduan crawl budget tidak perlu dibaca. Untuk website company profile dengan puluhan atau ratusan halaman, fokus lebih berguna ada pada kualitas dan keunikan halaman, bukan pada pengaturan crawl.

Soal ukuran, batas teknisnya 50.000 URL dan 50 MB tanpa kompresi per file. Situs jasa lokal hampir tidak pernah menyentuh batas ini. Jika jumlah URL terasa membengkak, penyebabnya biasanya halaman varian kota atau niche yang mirip, bukan keterbatasan sitemap. Pembahasan itu ada di artikel [crawl budget dan URL sprawl](/blog/crawl-budget-url-sprawl-ai-bot/).

## 6. RSS dan llms.txt bukan pengganti

Menurut ringkasan episode di atas, feed RSS bisa dikirim ke Search Console sebagai sitemap untuk pembaruan terbaru, sedangkan `llms.txt` tidak bisa dipakai sebagai sitemap di sistem Google. Jika blog Anda sudah punya `feed.xml`, mengirimkannya adalah langkah murah. Namun tanggal di feed tetap harus jujur, dengan aturan yang sama seperti `lastmod`.

## Checklist 15 menit

1. Buka `/sitemap.xml` dan hitung berapa tanggal `lastmod` yang unik.
2. Bandingkan 10 URL dengan riwayat perubahan atau commit.
3. Hapus `priority` dan `changefreq` dari generator.
4. Keluarkan URL redirect, `noindex`, dan non-kanonis.
5. Kirim sitemap di Search Console, lalu catat status serta jumlah URL terdeteksi.
6. Jika muncul "Couldn't fetch", cek Crawl Stats dan kualitas halaman sebelum mengubah XML.

## Cara tahu perbaikan ini gagal

Jangan menilai hasilnya dari ranking dalam beberapa hari, apalagi saat Google baru menyelesaikan update besar. Indikator yang lebih tepat: waktu artikel baru muncul di laporan indexing Search Console, jumlah URL "Discovered - currently not indexed", dan apakah status sitemap berubah dari "Couldn't fetch" menjadi sukses. Jika setelah beberapa minggu tidak ada perubahan, masalahnya kemungkinan bukan di sitemap, melainkan di kualitas atau keunikan halaman.

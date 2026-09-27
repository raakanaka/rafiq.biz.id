---
title: "Crawl Budget 2027: Rapikan URL Sprawl dan AI Bot"
description: "Crawl budget bukan isu site besar saja. Ini cara cek URL sprawl, doorway, dan AI bot tanpa mengacaukan indeks saat spam update."
pubDate: "2026-09-27"
heroImage: ""
date: "2026-09-27"
excerpt: "Crawl budget bukan isu site besar saja. Ini cara cek URL sprawl, doorway, dan AI bot tanpa mengacaukan indeks saat spam update."
category: "SEO Teknis"
tags: ["Technical SEO", "Crawl Budget", "AI Crawler", "Indexing", "SEO 2027"]
author: "Rafiq"
coverImage: ""
---

Crawl budget sering dibahas seolah-olah cuma masalah marketplace, publisher besar, atau website dengan jutaan halaman. Untuk website jasa, portfolio, dan blog kecil, kalimat yang sering muncul adalah: “tenang, Google pasti crawl semua.” Itu benar untuk banyak kasus, tapi tidak selalu aman.

Masalahnya bukan cuma jumlah halaman. Masalahnya adalah **halaman yang salah ikut menghabiskan perhatian crawler**: parameter, variasi kota, slug keyword yang isinya sama, redirect chain, halaman 200 yang seharusnya 404, dan sekarang ditambah crawler AI yang makin aktif. Saat Google sedang menjalankan spam update, seperti September 2026 spam update yang mulai 24 September dan masih rollout, perubahan besar ke struktur URL sebaiknya ditunda. Tapi audit dan perbaikan teknis yang jelas tetap boleh dilakukan.

Google sendiri menjelaskan crawl budget sebagai gabungan antara kemampuan server melayani crawl dan demand Google untuk merayapi URL tertentu. Panduan resmi Google menyebut crawl budget terutama relevan untuk site besar, site yang sering berubah, atau site yang punya banyak status “Discovered - currently not indexed” di Search Console [Source](https://developers.google.com/crawling/docs/crawl-budget). Search Engine Land pada 22 September 2026 juga menyorot hal yang sama dengan tambahan konteks baru: faceted navigation, URL sprawl, server error, dan AI crawler sekarang perlu masuk checklist technical SEO [Source](https://searchengineland.com/crawl-budget-what-you-need-to-know-448961).

## Apa Itu Crawl Budget, Versi Praktis

Crawl budget adalah berapa banyak URL yang crawler bisa dan mau ambil dari sebuah host dalam periode tertentu. Ada dua sisi:

1. **Crawl capacity**: seberapa kuat server merespons tanpa lambat atau error.
2. **Crawl demand**: seberapa bernilai, populer, fresh, dan unik URL tersebut menurut sistem crawler.

Kalau server cepat tapi isi halaman duplikat, demand rendah. Kalau konten penting tapi server sering 5xx atau terlalu lambat, capacity turun. Google menyebut crawl capacity bisa turun ketika site lambat atau banyak server error, lalu crawler akan mengurangi koneksi dan frekuensi crawl [Source](https://developers.google.com/crawling/docs/crawl-budget).

Untuk website kecil, ini bukan alasan panik. Tapi ini alasan untuk tidak membiarkan URL inventory liar. Satu website jasa bisa terlihat kecil dari menu navigasi, tapi dari sudut crawler bisa punya ratusan atau ribuan URL karena kombinasi slug layanan, lokasi, parameter, dan halaman lama yang masih 200.

## URL Sprawl Lebih Berbahaya Daripada Jumlah Artikel

URL sprawl terjadi saat jumlah URL yang bisa diakses crawler jauh lebih besar daripada jumlah halaman yang benar-benar bernilai. Penyebab umum:

- Halaman kota yang isinya sama, cuma ganti nama daerah.
- Halaman keyword variant seperti `/jasa-seo-murah`, `/pakar-seo`, `/konsultan-seo` dengan konten hampir identik.
- Filter dan parameter seperti `?sort=`, `?page=`, `?utm=` yang bisa ditemukan internal link.
- Arsip tag, kategori, atau kalender yang tidak punya batas.
- Halaman 404 yang tetap mengembalikan status 200 atau soft 404.

Untuk bisnis jasa lokal, pola paling sering adalah doorway page: “Jasa X di Kota Y” dibuat massal tanpa portofolio lokal, tanpa konteks pasar lokal, tanpa data kecamatan yang faktual. Ini bukan cuma boros crawl. Ini juga mendekati area spam policy kalau skalanya besar dan tujuannya menangkap variasi query lokasi tanpa nilai unik.

Google dalam panduan crawl budget menyarankan pengelolaan URL inventory: konsolidasikan duplikat, block URL tidak penting bila perlu, return 404/410 untuk halaman yang benar-benar hilang, hindari soft 404, update sitemap, dan hindari redirect chain panjang [Source](https://developers.google.com/crawling/docs/crawl-budget). Prinsipnya sederhana: jangan minta Google merayapi URL yang kamu sendiri tidak ingin ranking.

## AI Bot Membuat Crawl Audit Lebih Penting

Technical SEO 2027 tidak bisa hanya melihat Googlebot. AI crawler ikut membaca web untuk search, browsing, training, atau agentic browsing. Search Engine Land menulis bahwa AI agents dan bots sekarang bagian dari gambar besar crawl management [Source](https://searchengineland.com/crawl-budget-what-you-need-to-know-448961).

Dampaknya ada dua.

Pertama, server bandwidth bisa dipakai bot yang tidak menghasilkan traffic bernilai. Untuk site kecil ini jarang jadi krisis, tapi tetap perlu terlihat di log. Kedua, banyak AI crawler tidak mengeksekusi JavaScript seperti browser penuh. Kalau konten utama hanya muncul setelah client-side rendering, crawler bisa melihat halaman kosong atau miskin konteks.

Astro SSR, Next.js SSR, atau static HTML memberi posisi lebih aman karena konten utama langsung ada di HTML awal. Untuk halaman jasa, blog, pricing, dan kontak, tidak ada alasan menyembunyikan konten penting di balik JavaScript berat.

## 2MB HTML Limit: Jangan Kubur Konten Penting

Google pada Maret 2026 menjelaskan detail byte limit Googlebot: untuk URL HTML biasa, Googlebot mengambil sampai 2MB pertama; untuk PDF, 64MB. Byte setelah batas itu tidak diambil, tidak dirender, dan tidak diindeks [Source](https://developers.google.com/search/blog/2026/03/crawler-blog-post).

Mayoritas website tidak akan menyentuh 2MB HTML. Tapi masalah bisa muncul kalau HTML diisi base64 image, inline CSS/JS besar, mega menu panjang, atau JSON besar sebelum konten utama. Google menyarankan elemen penting seperti title, meta, canonical, link tag, dan structured data ditempatkan tinggi di HTML [Source](https://developers.google.com/search/blog/2026/03/crawler-blog-post).

Checklist praktis:

- Canonical ada di `<head>` awal.
- Structured data JSON-LD tidak diletakkan setelah blok script besar.
- Konten utama muncul sebelum elemen dekoratif panjang.
- CSS/JS berat dipindah ke file eksternal bila masuk akal.
- Navigasi tidak menghasilkan ratusan link duplikat di tiap halaman.

Ini bukan optimasi mikro. Ini memastikan crawler memahami halaman sebelum timeout, error, atau limit internal lain mengganggu.

## Cara Audit Crawl Budget Tanpa Tool Mahal

Mulai dari inventory, bukan opini.

### 1. Bandingkan sitemap dengan halaman bernilai

Ambil jumlah URL sitemap. Lalu kelompokkan berdasarkan jenis:

- Homepage dan halaman brand.
- Service utama.
- Service + kota.
- Blog.
- Project/case study.
- Niche landing page.
- URL redirect.

Kalau sitemap berisi URL redirect, noindex, canonical ke URL lain, atau halaman doorway yang belum unik, itu sinyal boros crawl. Sitemap harus berisi URL yang ingin di-crawl dan di-index, bukan semua URL yang bisa diakses.

### 2. Cari pola konten 90% identik

Untuk halaman kota, ambil 5 sampai 10 contoh. Bandingkan struktur heading, paragraf, CTA, FAQ, testimoni, dan daftar area. Kalau bedanya hanya nama kota, itu bukan halaman lokal. Itu template doorway.

Halaman lokal layak berdiri kalau punya minimal salah satu dari ini:

- Portofolio atau klien nyata di kota tersebut.
- Konteks pasar lokal yang spesifik dan faktual.
- Area/kecamatan faktual, bukan daftar karangan.
- Foto, studi kasus, atau pengalaman proyek lokal.
- Penawaran atau proses yang memang beda untuk kota itu.

Tanpa itu, konsolidasi ke halaman layanan induk biasanya lebih sehat.

### 3. Cek status code dan redirect chain

Setiap URL penting harus 200. URL lama yang digabung harus 301 satu hop ke halaman paling relevan, bukan homepage. Jangan bikin chain seperti A ke B, B ke C, C ke D. Google menyebut redirect chain panjang berdampak negatif pada crawling [Source](https://developers.google.com/crawling/docs/crawl-budget).

### 4. Pantau Search Console setelah rollout selesai

Saat spam update masih rollout, jangan menilai ranking atau traffic sebagai hasil final. Catat saja. Setelah rollout selesai + 7 hari, cek:

- Page Indexing: Discovered - currently not indexed.
- Crawled - currently not indexed.
- Crawl Stats.
- Status sitemap untuk URL yang dikirim; URL Inspection untuk memastikan indeksasi URL tertentu.
- Halaman canonical pilihan Google.

Status Discovered berarti URL diketahui tetapi belum dirayapi; status Crawled berarti sudah dirayapi tetapi belum diindeks. Keduanya tidak otomatis membuktikan crawl budget habis. Cocokkan dengan log, respons server, canonical, dan kualitas konten sebelum menentukan penyebab.

## Yang Sebaiknya Dilakukan Saat Spam Update Masih Rollout

Mode aman:

- Boleh publish satu artikel berkualitas dengan sumber jelas.
- Boleh perbaiki bug teknis yang jelas: 404 salah, canonical konflik, schema invalid, broken internal link.
- Boleh audit sitemap dan doorway.
- Jangan lakukan perubahan struktural besar seperti rename massal, 301 puluhan URL, ubah robots.txt besar-besaran, atau hapus banyak halaman sekaligus.

Untuk pengelolaan situs ini, semua konsolidasi doorway ditunda sampai rollout selesai ditambah tujuh hari. Bahkan redirect satu atau dua URL tetap ditunda. Ini aturan operasional untuk menjaga perubahan tetap terukur, bukan masa tunggu wajib dari Google.

## Kesimpulan

Crawl budget bukan sekadar isu site besar. Untuk website jasa, isu sebenarnya adalah URL inventory: halaman mana yang pantas minta perhatian crawler, dan halaman mana yang cuma variasi keyword tanpa nilai unik.

Teknisnya sederhana: sitemap bersih, canonical konsisten, redirect satu hop, konten utama ada di HTML awal, structured data tidak terkubur, dan halaman lokal hanya dibuat kalau benar-benar punya konteks lokal. Di era AI bot, prinsip ini makin penting karena tidak semua crawler membaca web seperti browser manusia.

Kalau harus memilih satu aksi minggu ini: audit sitemap dan cari pola halaman yang 90% identik. Jangan buru-buru ubah besar saat spam update masih rollout. Catat kandidat, konsolidasikan bertahap, dan pastikan setiap URL yang tersisa memang pantas dirayapi.

Untuk diagnosis indeksasi yang lebih umum, baca [kenapa website tidak muncul di Google](/blog/website-tidak-muncul-di-google/). Jika masalahnya respons dan pengalaman pengguna, lanjut ke [panduan website lambat di HP](/blog/website-lambat-di-hp/). Butuh pemeriksaan inventory URL situs bisnis? [Diskusikan kebutuhan audit](/contact/) sebelum mengubah struktur situs.

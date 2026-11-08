---
title: "Redirect 301, 302, 307, 308: Pilih Mana untuk Klien? (Panduan 2026)"
description: "Google membedah 301, 302, 307, dan 308 di seri Non-Canonical Cabinet. Tabel keputusan, kasus klien, dan cara verifikasi redirect dengan curl."
pubDate: "2026-11-08"
date: "2026-11-08"
excerpt: "301 dan 308 jadi sinyal canonical, 302 dan 307 tidak. Panduan memilih kode redirect untuk migrasi, promo, dan perawatan situs klien."
category: "SEO Teknis"
tags: ["Redirect", "301", "302", "Canonicalization", "SEO Teknis", "Klien"]
author: "Rafiq"
coverImage: ""
heroImage: ""
---

Pertanyaan klien yang sering muncul saat migrasi: "Kak, redirect-nya pakai yang mana? Ada 301, 302, kok ada 307 dan 308 juga?" Jawaban asalnya "301 saja", dan sering benar. Tapi ada kasus yang membuat jawaban itu salah, dan akibatnya baru terasa berminggu-minggu kemudian: URL lama tetap bertahan di hasil pencarian, atau URL baru tak kunjung menggantikannya.

Awal November 2026 Google Search Central merilis episode ke-4 seri video *The Non-Canonical Cabinet* yang membahas persis ini: 301, 302, 307, 308, dan hubungannya dengan canonicalization. Episode itu tercatat di [halaman News Google Search Central](https://developers.google.com/search/news). Detail teknisnya ada di dokumentasi resmi [Redirects and Google Search](https://developers.google.com/search/docs/crawling-indexing/301-redirects), dan itu yang saya jadikan pegangan di bawah.

## Apa kata dokumentasi Google

Dokumentasi Google membagi redirect menurut efeknya pada indeks:

- **301 (moved permanently) dan 308 (moved permanently):** Googlebot mengikuti redirect, dan pipeline indexing memakainya sebagai sinyal bahwa **target redirect sebaiknya menjadi canonical**.
- **302 (found) dan 307 (temporary redirect):** Googlebot tetap mengikuti redirect, tetapi pipeline indexing **tidak** memakainya sebagai sinyal canonical. Halaman target mungkin tetap terindeks bila ada sinyal canonical lain.

Dokumentasi yang sama menyebut: jika kamu ingin mengubah URL yang tampil di hasil pencarian, gunakan redirect permanen sisi server bila memungkinkan. Sebaliknya, redirect sementara cocok bila URL asal memang sebaiknya tetap tampil, misalnya layanan yang sedang tidak tersedia dan pengunjung dialihkan ke halaman penjelasan.

Satu hal yang perlu diluruskan: perbedaan 301 vs 308 dan 302 vs 307 **bukan** soal Google, melainkan soal metode HTTP. Kode 307 dan 308 mempertahankan metode request (POST tetap POST), sedangkan 301 dan 302 secara historis boleh diubah browser menjadi GET. Dari sisi canonical di Google Search, 301 setara 308, dan 302 setara 307.

## Tabel keputusan cepat

- **Pindah domain, ganti struktur URL, gabung dua artikel:** 301. Permanen, dan kamu ingin URL baru menggantikan yang lama di indeks.
- **HTTP ke HTTPS, www ke non-www:** 301 (atau 308). Sifatnya permanen.
- **Halaman layanan sedang dirombak, mau dialihkan sebentar:** 302. URL asli tetap jadi kandidat tampil.
- **Uji A/B yang mengirim sebagian pengunjung ke varian:** 302, karena sifatnya sementara.
- **Endpoint form atau API yang dipindah dan harus mempertahankan POST:** 308 (permanen) atau 307 (sementara).
- **Halaman benar-benar dihapus tanpa pengganti:** bukan redirect. Biarkan 404 atau 410, seperti yang saya bahas di [404 Bukan Penalti](/blog/404-410-redirect-url-dihapus-klien-seo/).

## Tiga kesalahan yang saya temui di proyek klien

### 1. 302 yang tidak pernah diganti

Developer sebelumnya memakai redirect sementara saat membuat situs baru, lalu lupa mengubahnya. Dokumentasi Google jelas: 302 tidak menjadi sinyal canonical, sehingga URL lama bisa lama bertahan. Ini bukan penalti, hanya sinyal yang salah. Obatnya mengganti ke 301, lalu memantau lewat Search Console.

Perubahan sinyal canonical tidak instan. Jangan menyimpulkan perbaikan gagal beberapa hari setelah redirect diganti; pantau Search Console selama beberapa minggu.

### 2. Redirect massal ke homepage

Ini bukan soal kode status, tapi relevansi tujuan. Redirect yang mengarah ke halaman yang tidak menjawab kebutuhan sama mudah diperlakukan seperti soft 404. Arahkan ke padanan terdekat, atau biarkan 404.

### 3. JavaScript redirect untuk migrasi

Dokumentasi Google menyatakan JavaScript location redirect hanya dipakai bila redirect sisi server maupun meta refresh tidak mungkin. Alasannya, Google mengeksekusi JavaScript lewat Web Rendering Service setelah crawling selesai, dan rendering bisa gagal sehingga redirect tidak pernah terlihat. Meta refresh pun punya aturan sendiri: yang langsung (0 detik) dibaca sebagai permanen, yang tertunda dibaca sebagai sementara.

## Contoh nyata: redirect di situs ini

Di situs rafiq.biz.id, halaman layanan per kota yang tidak punya konten unik saya alihkan ke halaman induk layanannya. Verifikasinya satu baris:

```bash
curl -sI https://rafiq.biz.id/jasa-seo/surabaya/ | grep -iE '^HTTP|^location'
```

Hasil per 8 November 2026: `HTTP/2 301` dengan `location: /jasa-seo/`. Itu permanen dan mengarah ke padanan yang relevan, bukan homepage. Pemicunya kebijakan spam Google soal doorway page: halaman yang hanya beda nama kota tidak layak diindeks sebagai halaman terpisah.

## Cara audit redirect untuk klien

1. **Daftar URL lama.** Ambil dari sitemap lama, ekspor Search Console, atau log server.
2. **Cek kode status dan lokasi** dengan `curl -sIL <url>`. Pastikan satu lompatan, bukan rantai.
3. **Cek tujuan relevan.** Buka tujuannya sendiri. Apakah isinya menjawab maksud URL lama?
4. **Cek canonical di halaman target** menunjuk ke dirinya sendiri, bukan kembali ke URL lama.
5. **Perbarui sitemap** hanya dengan URL final. Sitemap berisi URL yang ter-redirect membuang kuota crawl dan mengaburkan sinyal.
6. **Perbarui internal link** ke URL final. Redirect itu jaring pengaman, bukan pengganti link yang benar.
7. **Pantau di Search Console** selama beberapa minggu, bukan beberapa hari.

## Cara menjelaskannya ke klien non-teknis

Pakai analogi pindah alamat kantor. 301 itu surat pindah resmi ke kantor pos: semua kiriman dan buku telepon diperbarui. 302 itu papan "tutup sementara, kunjungi cabang sebelah": alamat lama tetap tercatat. Klien biasanya langsung paham kenapa jenisnya penting.

Untuk laporan, tulis satu kalimat per perubahan: URL mana, kode berapa, alasannya, dan tanggal cek ulang. Itu lebih berguna daripada daftar ratusan baris. Kalau migrasimu menyangkut platform baru, lihat juga [catatan migrasi WordPress ke Astro](/blog/migrasi-wordpress-ke-astro-seo/).

## Yang belum bisa dipastikan

Saya belum menemukan angka resmi dari Google tentang seberapa cepat 301 menggantikan URL lama. Dokumentasi hanya menjelaskan sinyalnya, bukan durasinya. Jadi jangan menjanjikan tanggal ke klien. Janjikan prosedur dan jadwal pengecekan.

## Ringkasan

- 301/308 = sinyal canonical ke target. Pakai untuk perpindahan permanen.
- 302/307 = sementara, URL asal tetap jadi kandidat. Pakai hanya bila memang sementara.
- 307/308 menjaga metode request. Relevan untuk form dan API, bukan faktor ranking.
- Hindari JavaScript redirect untuk migrasi, dan jangan arahkan semua ke homepage.
- Verifikasi dengan `curl`, bukan asumsi.

Butuh audit redirect sebelum atau sesudah migrasi? Lihat [jasa SEO](/jasa-seo) saya atau hubungi lewat halaman kontak.

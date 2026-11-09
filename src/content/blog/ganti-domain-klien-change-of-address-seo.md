---
title: "Ganti Domain Klien: Checklist Change of Address dan Varian www (2026)"
description: "Panduan pindah domain klien menurut Google: Change of Address untuk semua varian subdomain, redirect 301, verifikasi Search Console, dan hal yang jangan digabung."
pubDate: "2026-11-09"
date: "2026-11-09"
excerpt: "Pindah domain klien? Google kini menegaskan Change of Address berlaku untuk semua varian, termasuk www. Ini checklist langkahnya."
category: "SEO Teknis"
tags: ["Ganti Domain", "Change of Address", "Site Move", "Search Console", "Redirect", "Klien"]
author: "Rafiq"
coverImage: ""
heroImage: ""
---

Klien tiba-tiba bilang, "Kita ganti nama brand, domainnya juga ganti ya." Kalau kamu pegang SEO-nya, itu bukan sekadar urusan DNS. Salah satu varian terlewat, sebagian sinyal bisa tertinggal di domain lama.

Pada Juni 2026, Google menambahkan penjelasan soal varian domain di panduan pindah situs. Di [changelog Search Central](https://developers.google.com/search/updates) tertulis bahwa panduan site move sekarang memuat informasi menggunakan Change of Address untuk semua varian subdomain, termasuk www dan non-www, saat migrasi domain. Alasannya, migrasi domain berjalan paling baik kalau semua varian ikut dipindahkan dengan benar.

Artikel ini merangkum cara menerapkannya di proyek klien. Isinya berdasarkan dokumentasi Google, bukan pengalaman satu kasus tertentu.

## Kapan Change of Address dipakai, kapan tidak

Menurut [dokumentasi Change of Address](https://support.google.com/webmasters/answer/9370220), alat ini dipakai saat situs pindah dari satu domain atau subdomain ke domain atau subdomain lain. Alat ini dijalankan setelah situs dipindah dan diredirect.

Google menyebut empat kasus yang tidak perlu alat ini:

- Pindah dari http ke https.
- Memindah sebagian halaman di dalam situs yang sama, misalnya `/oldpath/` ke `/newpath/`. Cukup redirect dan perbarui sitemap.
- Pindah antara www dan non-www di domain yang sama. Pakai canonical dan/atau redirect.
- Pindah hosting atau CDN tanpa perubahan URL yang terlihat pengguna.

Jadi aturan praktisnya: ganti hosting atau ganti CMS saja tidak butuh alat ini. Ganti nama domain, ya.

## Varian: poin yang sering terlewat

Dokumentasi menyebut alat ini hanya memindahkan properti di level domain. Subdomain di bawahnya, termasuk www, tidak ikut otomatis. Kalau kamu memasukkan `example.com`, `www.example.com` dan `m.example.com` tidak ikut pindah.

Jadi untuk pindah domain, Google meminta alat dipakai untuk semua varian subdomain domain lama, termasuk www dan non-www, meski varian itu sedang tidak dipakai. Semua varian harus sudah terverifikasi di Search Console.

Contoh dari dokumentasi: `en.example.com`, `www.example.com`, dan `example.com` ke `new-example.net`.

Alat ini juga memindahkan semua protokol dari properti sumber. Jika kamu memilih `http://example.com`, `https://example.com` ikut dipindah.

## Checklist sebelum hari H

Panduan [How to move a site](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) menyebut langkah persiapan berikut:

1. **Verifikasi semua varian domain lama dan baru** di Search Console: www, non-www, serta HTTP dan HTTPS bila dipakai.
2. **Cek metode verifikasi.** Token bisa berbeda saat URL berubah. Jika memakai file HTML, ikutkan file verifikasi di salinan situs baru. Jika memakai meta tag atau Google Analytics, pastikan keduanya ada di situs baru.
3. **Siapkan robots.txt dan aturan noindex** untuk situs baru. Banyak situs staging memblokir crawling. Catat apa yang harus dibuka saat pindah.
4. **Buat pemetaan URL lama ke baru.** Mulai dari URL penting: sitemap, URL dengan trafik tertinggi di log atau analytics, dan halaman yang punya tautan di laporan Links Search Console. Sertakan gambar, video, JavaScript, dan CSS.
5. **Perbarui anotasi di situs baru:** setiap URL baru punya `rel="canonical"` yang menunjuk ke dirinya sendiri, dan hreflang (jika ada) memakai URL baru.
6. **Perbarui tautan internal** ke URL baru.
7. **Pastikan server sanggup.** Google menyebut crawling akan sementara lebih berat karena crawl situs lama juga diarahkan ke situs baru.
8. **Konten yang tidak dipindah** harus mengembalikan 404 atau 410 di situs baru. Lihat juga [404, 410, atau redirect untuk URL yang dihapus](/blog/404-410-redirect-url-dihapus-klien-seo/).

Untuk domain bekas pakai, Google juga meminta cek manual action peninggalan pemilik lama dan penghapusan URL (Removals) yang tersisa.

## Redirect: apa yang direkomendasikan Google

Pada langkah redirect, Google merekomendasikan redirect permanen sisi server dari URL lama ke URL baru, misalnya 301 dan 308. Redirect sisi klien hanya dipakai sebagai pilihan terakhir.

Dua catatan penting dari dokumen yang sama:

- **Hindari rantai redirect.** Googlebot bisa mengikuti sampai 10 lompatan, tetapi Google menyarankan langsung ke tujuan akhir. Bila tidak bisa, jaga rantai tetap pendek, idealnya tidak lebih dari 3 dan kurang dari 5.
- **Kredit tautan.** Google menyatakan 301 dan redirect permanen lain tidak menyebabkan kehilangan PageRank.

Perbedaan kode redirect dibahas di [Redirect 301, 302, 307, 308: pilih mana untuk klien](/blog/redirect-301-302-307-308-pilih-mana-klien-seo/).

Untuk situs kecil dan menengah, Google menyarankan memindahkan semua URL sekaligus, bukan per bagian. Situs besar boleh dipindah per bagian supaya masalah lebih mudah dipantau.

## Jangan gabung beberapa perubahan

Ini bagian yang paling relevan untuk freelancer, karena klien sering minta semuanya sekaligus. Menurut panduan Google:

- **Ubah satu hal dalam satu waktu.** Contohnya: pindah domain dulu, baru ganti layout atau CMS.
- **Jaga arsitektur situs sama** di lokasi baru. Google menulis bahwa kalau pindah digabung dengan redesign struktur URL dan konten, kemungkinan terjadi penurunan trafik karena Google perlu mempelajari ulang halaman.
- **Jangan rantai pindah domain.** Setelah mengirim Change of Address dari A ke B, kamu tidak bisa langsung mengirim lagi dari B ke C.
- **Jangan satukan banyak domain ke satu tujuan sekaligus.** Memindah A, B, dan C ke D bersamaan bisa membingungkan dan merugikan trafik. Pindahkan satu per satu, tunggu stabil.

Kalau klien ingin ganti domain sekaligus migrasi ke stack baru, jadwalkan terpisah. Tentang migrasi platform, lihat [migrasi WordPress ke Astro tanpa kehilangan SEO](/blog/migrasi-wordpress-ke-astro-seo/).

## Setelah pindah: apa yang dipantau

Google menyatakan peringkat bisa berfluktuasi sementara. Untuk situs menengah, mungkin butuh beberapa minggu atau lebih sampai URL baru gradual menggantikan yang lama, dan lebih lama untuk situs besar. Pindahan dianggap selesai setelah Googlebot mengunjungi setiap URL lama dan baru minimal sekali, dan prosesnya berjalan per URL.

Pantau dua properti secara terpisah:

- Laporan **Sitemaps** untuk melihat berapa URL sitemap yang terindeks.
- **Index Status** untuk gambaran besar di domain lama dan baru.
- Analytics untuk membandingkan trafik kedua situs.

Sampaikan ke klien sejak awal: fluktuasi di minggu pertama itu normal, dan laporan harian tidak banyak gunanya. Sepakati jadwal cek, misalnya mingguan.

## Prasyarat Change of Address yang sering menjegal

Dari dokumentasi alat:

- Kamu harus **owner** properti lama dan baru, dengan akun Google yang sama.
- Properti harus level domain, bukan path seperti `example.com/petstore/`.
- Lakukan pre-work: redirect 301 dari homepage lama ke homepage baru, dan sebaiknya juga 301 untuk halaman kanonis di situs lama.
- Alat menjalankan pemeriksaan sebelum pindah. Kegagalan kritis harus diperbaiki dulu.

Praktisnya, urus akses Search Console sebelum proyek dimulai. Klien yang menjadi owner dengan akun berbeda sering jadi penghambat di hari H. Panduan [onboarding akses aman](/blog/onboarding-klien-seo-akses-aman/) membahas cara meminta akses tanpa berbagi password.

## Ringkasan untuk kamu bawa ke klien

- Ganti domain: pakai Change of Address, untuk semua varian (www, non-www, subdomain aktif).
- Ganti www ke non-www, atau http ke https: tidak perlu alat ini.
- Redirect 301 atau 308 langsung ke tujuan akhir, tanpa rantai panjang.
- Satu perubahan besar per waktu. Jangan gabung dengan redesign.
- Siapkan ekspektasi: fluktuasi sementara itu wajar.

Butuh pendampingan migrasi domain atau audit sebelum pindah? Lihat [jasa SEO](/jasa-seo) dan kirim detail situsnya.

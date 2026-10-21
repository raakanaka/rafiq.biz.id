---
title: "Header Keamanan Situs Klien: 5 Header, Mana yang Aman Dipasang Dulu"
description: "Panduan 5 header keamanan HTTP untuk situs klien: HSTS, nosniff, Referrer-Policy, X-Frame-Options, CSP. Urutan aman dan hubungannya dengan SEO."
pubDate: "2026-10-21"
date: "2026-10-21"
excerpt: "HSTS, nosniff, Referrer-Policy, X-Frame-Options, dan CSP: urutan aman memasangnya di situs klien, dan batas hubungannya dengan SEO."
category: "SEO Teknis"
tags: ["header keamanan", "HSTS", "CSP", "SEO teknis", "klien"]
author: "Rafiq"
coverImage: ""
heroImage: ""
---

Audit teknis sering berakhir dengan satu temuan yang sama: situs klien tidak mengirim header keamanan. Sebagian orang langsung memasang semuanya sekaligus. Itu risikonya. Satu header yang salah bisa memblokir skrip pelacakan, form pembayaran, atau embed peta, dan klien baru sadar saat leads turun.

Artikel ini membahas lima header, urutan pemasangan yang aman, dan seberapa jauh hubungannya dengan SEO. Rujukan utamanya dokumentasi MDN, dokumentasi Cloudflare, dan panduan page experience Google.

## Apakah header keamanan memengaruhi ranking?

Sebatas yang didokumentasikan Google, dan jangan dilebihkan. Panduan Google tentang page experience menyebut sistem ranking inti berusaha memberi reward pada konten dengan page experience yang baik, dan salah satu pertanyaan swa-penilaiannya adalah apakah halaman disajikan secara aman. Google juga menegaskan tidak ada satu "sinyal page experience" tunggal ([Understanding page experience](https://developers.google.com/search/docs/appearance/page-experience)).

Panduan itu menunjuk laporan HTTPS di Search Console sebagai alat cek. Ia tidak menyebut CSP, X-Frame-Options, atau header lain sebagai faktor ranking. Jadi di laporan klien, tulis header keamanan sebagai perbaikan keamanan dan kepercayaan, bukan trik naik peringkat. Janji "pasang header, ranking naik" tidak punya dasar.

Alasan lain tetap kuat: situs yang bisa di-embed sembarang pihak atau dibajak lewat skrip injeksi bisa menimbulkan masalah yang jauh lebih mahal daripada soal ranking.

## Lima header dan fungsinya

### 1. Strict-Transport-Security (HSTS)

Header ini memberi tahu browser bahwa host hanya boleh diakses lewat HTTPS. Setelah diterima, browser mengubah permintaan `http` menjadi `https` sendiri. MDN mencatat header ini hanya dihormati bila dikirim lewat HTTPS ([MDN: Strict-Transport-Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)).

Contoh dari MDN: `Strict-Transport-Security: max-age=31536000; includeSubDomains`.

Hati-hati pada dua hal:
- `includeSubDomains` berlaku untuk semua subdomain. Jika klien punya subdomain lama yang masih HTTP, subdomain itu akan putus. Inventaris subdomain dulu.
- Opsi `preload` mensyaratkan `max-age` minimal 31536000 dan `includeSubDomains`, menurut MDN. Jangan ikut preload tanpa persetujuan eksplisit klien.

Mulailah dengan `max-age` pendek (misalnya satu hari), pantau, lalu naikkan.

### 2. X-Content-Type-Options: nosniff

Header ini membuat browser memakai `Content-Type` apa adanya, tanpa menebak isi file. MDN menjelaskan untuk permintaan skrip dan stylesheet, browser memblokir respons jika tipe MIME tidak sesuai ([MDN: X-Content-Type-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options)).

Risiko rendah, kecuali server mengirim `Content-Type` yang salah untuk file JS atau CSS. Cek dulu, lalu pasang.

### 3. Referrer-Policy

Mengatur seberapa banyak informasi URL asal dikirim ke situs lain. Nilai `strict-origin-when-cross-origin` adalah salah satu opsi yang didaftar MDN ([MDN: Referrer-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Referrer-Policy)).

Catatan untuk analytics: nilai yang terlalu ketat seperti `no-referrer` memengaruhi data referrer di situs tujuan, misalnya saat klien mengirim traffic ke platform booking atau pembayaran milik pihak lain. Diskusikan dengan tim yang membaca laporan atribusi.

### 4. X-Frame-Options

Mengontrol apakah halaman boleh dirender dalam `<frame>`, `<iframe>`, `<embed>`, atau `<object>`, untuk menghindari clickjacking. Nilainya `DENY` atau `SAMEORIGIN`. MDN menyebut `frame-ancestors` pada CSP sebagai opsi yang lebih lengkap ([MDN: X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Frame-Options)).

Kalau situs klien memang dipasang sebagai embed di situs lain (widget, katalog), `DENY` merusaknya. Tanyakan dulu.

### 5. Content-Security-Policy (CSP)

Yang paling kuat dan paling mudah merusak. CSP membatasi dari mana skrip, gambar, dan sumber lain boleh dimuat. Situs klien biasanya memuat Google Tag Manager, pixel iklan, widget chat, font, dan peta, dan semuanya harus masuk daftar izin.

MDN menyediakan `Content-Security-Policy-Report-Only`, yang memantau pelanggaran tanpa memblokir apa pun. Header itu mensyaratkan direktif `report-to` agar laporan terkirim ([MDN: CSP Report-Only](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only)). Selalu mulai dari mode ini.

## Urutan pemasangan yang aman

1. Pastikan HTTPS penuh dan redirect `http` ke `https` berjalan, tanpa mixed content.
2. Pasang `X-Content-Type-Options: nosniff` dan `Referrer-Policy`. Uji form, checkout, dan tag analytics.
3. Pasang `X-Frame-Options` setelah menanyakan apakah ada embed yang sah.
4. Pasang HSTS dengan `max-age` pendek, lalu naikkan bertahap.
5. Jalankan CSP dalam mode Report-Only sampai laporan bersih, baru ubah menjadi enforce.

Setiap langkah dites di staging atau di jam sepi, dengan rencana rollback tertulis.

## Jika klien memakai Cloudflare

Dokumentasi Cloudflare memuat Managed Transform "Add security headers". Menurut dokumentasi itu, ia menambahkan `x-content-type-options: nosniff`, `x-xss-protection: 1; mode=block`, `x-frame-options: SAMEORIGIN`, `referrer-policy: same-origin`, dan `expect-ct: max-age=86400, enforce`. Dokumen yang sama memberi catatan: header ini bisa memblokir resource atau memicu error sertifikat, dan HSTS perlu diaktifkan terpisah ([Cloudflare Managed Transforms](https://developers.cloudflare.com/rules/transform/managed-transforms/reference/)).

Dua hal yang perlu diperiksa sebelum menyalakannya:
- `referrer-policy: same-origin` lebih ketat daripada `strict-origin-when-cross-origin`, jadi referrer ke situs lain hilang.
- Transform itu tidak mencakup CSP. CSP tetap pekerjaan terpisah.

## Cara melaporkannya ke klien

Gunakan format yang jujur dan bisa diverifikasi:

- Temuan: header mana yang tidak terdeteksi di respons halaman utama (cek dengan `curl -I`).
- Dampak: keamanan dan kepercayaan, bukan janji ranking.
- Risiko pemasangan: apa yang bisa rusak (embed, tag, subdomain).
- Rencana: urutan lima langkah di atas, dengan penanggung jawab dan jendela uji.
- Bukti sesudah: hasil `curl -I` yang menunjukkan header terkirim, plus uji form dan analytics.

Jika akses infrastruktur belum jelas, selesaikan dulu di tahap [onboarding akses aman](/blog/onboarding-klien-seo-akses-aman/). Kalau situs klien bermasalah di indeks, urutan prioritasnya tetap [masalah dasar tidak muncul di Google](/blog/website-tidak-muncul-di-google/) lebih dulu, baru header.

## Ringkasan

Header keamanan layak dipasang, tetapi sebagai pekerjaan keamanan yang bertahap. Mulai dari yang risikonya rendah, uji tiap langkah, dan jalankan CSP dalam mode Report-Only lebih dulu. Jangan menjual header sebagai faktor ranking: dokumentasi Google hanya menyebut HTTPS dan page experience secara umum, bukan daftar header.

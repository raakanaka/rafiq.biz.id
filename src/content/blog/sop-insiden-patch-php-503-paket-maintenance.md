---
title: "SOP Patch Darurat PHP untuk Klien: Kapan Pakai 503 dan Apa Isi Paket Maintenance"
date: "2026-10-23"
pubDate: "2026-10-23"
excerpt: "PHP rilis patch darurat 21 Okt 2026. Ini SOP freelancer: 503 dari luar PHP, robots.txt tetap hidup, batas 1-2 hari, dan komunikasi ke klien."
description: "PHP rilis patch darurat 21 Okt 2026. Ini SOP freelancer: 503 dari luar PHP, robots.txt tetap hidup, batas 1-2 hari, dan komunikasi ke klien."
category: "Handle Client"
tags: ["Maintenance", "PHP", "HTTP 503", "SOP Klien", "Keamanan Website"]
author: "Rafiq"
coverImage: ""
heroImage: ""
---

Tanggal 21 Oktober 2026 tim keamanan PHP merilis perbaikan darurat untuk dua celah kritis yang memungkinkan penyerang menjalankan kode di server tanpa login. Hari yang sama, Google Search Central dan John Mueller mengingatkan satu hal untuk situs yang harus dimatikan sementara: sajikan HTTP 503, bukan 404, 500, atau timeout.

Kalau kamu mengelola situs WordPress atau PHP lain untuk klien, ini bahan SOP nyata. Artikel ini merangkum fakta dari sumber, lalu menyusunnya menjadi prosedur yang bisa kamu masukkan ke paket maintenance. Untuk dasar teknis 503 dan `Retry-After`, lihat juga [panduan Retry-After 503/429](/blog/retry-after-503-429-crawl-rate-googlebot/).

## Fakta yang perlu kamu pegang

Menurut [laporan Search Engine Journal soal celah PHP](https://www.searchenginejournal.com/critical-php-core-security-flaws-affect-websites-including-wordpress/593812/):

- Versi yang memuat perbaikan: PHP 8.5.12, 8.4.27, 8.3.36, dan 8.2.35.
- PHP menyatakan semua instalasi yang melayani request web berisiko. Server Apache dengan `mod_php` paling berisiko.
- Memperbarui WordPress atau plugin tidak memperbarui PHP. Hosting yang harus memasang perbaikannya.
- PHP 8.1 dan yang lebih lama sudah end-of-life. Ada perbaikan sumber terbatas untuk 7.4, 8.0, dan 8.1, tetapi itu bukan dukungan jangka panjang.
- Firewall seperti Cloudflare mungkin memblokir sebagian serangan, tetapi bukan pengganti patch.
- Setelah patch, periksa web shell, akun admin asing, dan perubahan file PHP yang tidak dikenal. Patch tidak menghapus kompromi yang sudah terjadi.

Dari sisi Google, [SEJ mengutip Search Central](https://www.searchenginejournal.com/google-reminds-sites-to-serve-503s-during-server-downtime/593873/): status 503 menjaga URL yang sudah terindeks tetap ada selama pekerjaan berlangsung, dan setelah 200 kembali, keadaan pulih sendiri. Google juga memperingatkan agar tidak memakai 404 generik atau halaman error berstatus 200 saat downtime.

## Keputusan pertama: patch sekarang atau matikan dulu?

Ini keputusan yang harus ada di SOP, bukan diputuskan saat panik.

1. **Bisa dipatch dalam hitungan jam.** Minta hosting memasang versi yang diperbaiki. Situs tidak perlu dimatikan, cukup jadwalkan jendela singkat.
2. **Tidak bisa dipatch segera.** Diskusikan dengan klien dan hosting apakah situs dimatikan sementara. Ini keputusan bisnis, jadi tulis persetujuannya.
3. **PHP 8.1 atau lebih lama.** Minta konfirmasi hosting soal perbaikan vendor, lalu rencanakan upgrade versi. Jangan menjanjikan klien bahwa "sudah aman" hanya karena ada WAF.

Catatan: laporan SEJ juga menyebut beberapa situs pemerintah dan universitas di Eropa dimatikan sebagai tindakan pencegahan sebelum rilis. Itu contoh, bukan standar yang wajib ditiru untuk situs company profile klien.

## Cara menyajikan 503 kalau PHP sedang mati

Inilah jebakannya. Contoh kode 503 di PHP di dokumentasi lama Google tidak membantu kalau PHP-nya yang dimatikan. Mueller menulis bahwa 503 bisa diberikan dari luar PHP, lewat DNS yang diarahkan ke tempat lain atau lewat CDN.

Opsi praktis untuk situs klien:

- **Aturan di CDN atau WAF** yang membalas 503 dengan halaman maintenance statis.
- **Server sementara** berisi satu halaman statis, dengan DNS diarahkan ke sana selama jendela patch.
- **Konfigurasi web server** (Nginx/Apache) yang membalas 503 tanpa memanggil PHP. Hanya kalau kamu punya aksesnya.

Contoh respons yang benar:

```http
HTTP/1.1 503 Service Unavailable
Retry-After: 3600
Content-Type: text/html; charset=utf-8
```

Isi halaman cukup pesan singkat dan kontak klien. Jangan kirim halaman yang sama dengan status 200 karena Google bisa mengindeks isi pesan error sebagai konten halaman.

## Tiga aturan yang sering terlewat

**1. Biarkan `robots.txt` tetap bisa diakses.** Panduan Google tentang menjeda situs, seperti dikutip SEJ, menyatakan jangan mengembalikan 503 untuk file `robots.txt` karena itu menghentikan seluruh crawling. Pastikan aturan 503 di CDN mengecualikan path `/robots.txt`.

**2. Batasi durasi.** Dokumentasi crawl rate Google tidak menyarankan 503 lebih dari 1-2 hari. Kalau Googlebot melihat status itu di URL yang sama berhari-hari, URL bisa terlepas dari indeks. Untuk penutupan yang lebih lama, panduan Google menyarankan halaman utama yang dapat diindeks dengan status 200 sebagai placeholder.

**3. Jangan mengandalkan urutan "mati terbaik".** Di Bluesky, seorang pengguna mengurutkan respons dari yang terbaik ke terburuk: 503, 500, 403, 404, 200. Mueller menyebutnya "model yang bagus". Itu bukan aturan resmi, tetapi arahnya jelas: 503 dulu, 200 dengan halaman error paling buruk.

## Template isi paket maintenance

Dari kasus ini, paket maintenance bulanan sebaiknya memuat hal yang bisa diverifikasi, bukan janji kabur:

- Pengecekan versi PHP (di WordPress: Tools > Site Health > Info > Server) dan laporan ke klien.
- Siapa yang menghubungi hosting saat ada patch darurat, dan target waktu respons yang kamu sanggupi.
- Prosedur 503: siapa yang punya akses CDN/DNS, siapa yang menyalakan dan mematikan.
- Batas maksimal status darurat aktif (maksimal 1-2 hari sesuai panduan Google).
- Pemeriksaan pasca-patch: web shell, akun admin, file yang berubah.
- Cadangan sebelum patch, termasuk database.
- Pemantauan Search Console (Crawl Stats dan laporan indeks) selama beberapa hari setelah pulih.

Jangan memasukkan jaminan "situs pasti aman" atau "ranking pasti tidak turun". Kamu tidak bisa menjamin keduanya.

## Komunikasi ke klien: contoh pesan

Klien non-teknis butuh tiga hal: apa yang terjadi, apa yang kamu lakukan, kapan selesai.

> Ada celah keamanan kritis di PHP yang dirilis 21 Oktober. Kami sudah minta hosting memasang versi yang diperbaiki. Selama proses (perkiraan [X jam], sesuai konfirmasi hosting), situs menampilkan halaman maintenance dengan kode 503 supaya Google tahu ini sementara. Setelah selesai, kami cek file dan akun admin, lalu pantau Search Console beberapa hari.

Isi bagian `[X jam]` dengan angka dari hosting, bukan tebakan.

## Checklist ringkas

1. Cek versi PHP semua situs klien yang kamu kelola.
2. Hubungi hosting, minta versi yang memuat perbaikan.
3. Putuskan bersama klien: patch langsung atau matikan sementara.
4. Kalau dimatikan, sajikan 503 dari luar PHP dengan `robots.txt` tetap hidup.
5. Pulihkan 200 secepatnya, jangan lebih dari 1-2 hari.
6. Audit pasca-patch: web shell, admin asing, file berubah.
7. Pantau Search Console dan catat insiden di laporan bulanan.

Untuk lapisan lain di sisi keamanan, [header keamanan situs klien](/blog/header-keamanan-situs-klien-seo/) dan [checklist handover website](/blog/checklist-handover-website-klien/) bisa melengkapi SOP ini.

## Kesimpulan

Patch PHP 21 Oktober 2026 mengingatkan bahwa maintenance bukan sekadar update plugin. Prosedur darurat harus ditulis sebelum kejadian: siapa memutuskan, bagaimana 503 disajikan tanpa PHP, `robots.txt` tetap terbuka, dan batas 1-2 hari. Sertakan itu di paket maintenance, dan klien tahu persis apa yang mereka bayar.

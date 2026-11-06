---
title: "Favicon dan Snippet Hilang? Cek Status 4xx dulu, Pelajaran dari Kasus VLC"
date: "2026-11-06"
pubDate: "2026-11-06"
excerpt: "Gary Illyes jelaskan kenapa situs VLC kehilangan favicon dan snippet: halaman sempat mengirim status 4xx. Ini cara mengeceknya di situs klien."
description: "Gary Illyes jelaskan kenapa situs VLC kehilangan favicon dan snippet: halaman sempat mengirim status 4xx. Ini cara mengeceknya di situs klien."
category: "SEO Teknis"
tags: ["Status Code", "4xx", "Favicon", "Snippet", "Indexing", "Audit Teknis"]
author: "Rafiq"
coverImage: ""
---

Klien bertanya: "Kenapa hasil Google kami tidak ada logo dan deskripsinya? Cuma judul dan link." Kebanyakan orang langsung menyalahkan file favicon atau tag meta description. Kasus terbaru situs VLC menunjukkan penyebabnya bisa lebih mendasar: halaman sempat mengirim status code 4xx.

## Apa yang terjadi pada VLC

Menurut [laporan Search Engine Roundtable (5 November 2026)](https://www.seroundtable.com/google-protected-important-urls-index-42464.html), Gary Illyes dari Google menjawab di LinkedIn soal favicon VLC yang tidak muncul di hasil pencarian. Penyebabnya, situs VLC ternyata sempat menyajikan status code 418 ("I'm a teapot"). Google memperlakukannya seperti kebanyakan error 4xx lain, yaitu pada dasarnya "not found".

Biasanya URL yang konsisten mengirim 4xx akan gugur dari indeks. Dalam kasus ini, kata Gary, karena VLC termasuk situs yang sangat penting, Search "temporarily protected the URL from falling out of the index right away". Artinya URL itu masih ditampilkan untuk sementara.

Efek sampingnya jelas. Google tidak lagi tahu isi halaman, sehingga tidak ada yang bisa ditampilkan. Kutipan Gary: tidak ada snippet, tidak ada favicon, hanya link dan judul terakhir yang pernah valid. Situs VLC sudah kembali mengirim 200 OK dengan konten, jadi tampilannya diperkirakan pulih sendiri.

## Apa artinya untuk situs klien

Situs klien Anda hampir pasti bukan "salah satu halaman terpenting di internet". Perlindungan sementara semacam itu tidak bisa diandalkan. Dari kasus ini ada dua pelajaran praktis:

1. **Gejala snippet dan favicon kosong adalah alarm status code.** Jangan langsung mengutak-atik meta tag. Periksa dulu apa yang sebenarnya dikirim server ke Googlebot.
2. **Halaman 4xx bisa tampak normal di browser.** Server atau plugin keamanan kadang menampilkan halaman yang tampak biasa, tetapi header-nya memakai status lain. Mata manusia tidak bisa membedakannya.

Catatan: laporan itu hanya membahas satu kasus. Sumbernya tidak menyebut daftar lengkap status code yang memicu perilaku ini, jadi jangan menyimpulkan lebih dari yang dikatakan Google.

## Checklist audit 10 menit

### 1. Cek status code dari sisi server

Jalankan dari terminal:

```bash
curl -sI https://domain-klien.com/halaman-penting | head -5
```

Pastikan baris pertama `HTTP/2 200`. Ulangi dengan user agent Googlebot untuk melihat apakah firewall memperlakukan crawler berbeda:

```bash
curl -sI -A "Googlebot" https://domain-klien.com/halaman-penting | head -5
```

Hati-hati: user agent palsu bisa diperlakukan berbeda oleh WAF, sehingga hasilnya hanya petunjuk, bukan bukti bahwa Googlebot asli ditolak. Bukti paling kuat tetap Inspeksi URL di Search Console.

### 2. Pakai URL Inspection di Search Console

Buka URL Inspection, lalu lihat bagian "Page fetch" pada hasil uji langsung. Jika statusnya gagal atau bukan 200, di situlah masalahnya. Cek juga apakah file favicon dapat diambil, karena favicon di-crawl terpisah.

### 3. Periksa lapisan yang sering mengubah status

- Plugin keamanan atau WAF (misalnya aturan bot di CDN).
- Mode maintenance yang tidak mengirim 503 dengan benar.
- Aturan redirect atau rewrite yang salah di server.
- Halaman custom error yang malah mengirim 200 atau 4xx pada URL aktif.

Untuk pembahasan penanganan URL yang sengaja dihapus, lihat [404 Bukan Penalti: 3 Langkah Tangani URL yang Dihapus](/blog/404-410-redirect-url-dihapus-klien-seo).

### 4. Pastikan favicon bisa diakses crawler

Buka URL favicon langsung dan pastikan mengembalikan 200, bukan redirect panjang atau halaman login. Jangan blokir file tersebut di robots.txt.

### 5. Setelah diperbaiki, beri waktu

Dalam kasus VLC, Gary hanya bilang situasi "should sort itself out soon" setelah status kembali 200. Dia tidak memberi angka hari. Jangan menjanjikan tenggat ke klien. Catat tanggal perbaikan, lalu pantau ulang tampilan hasil pencarian secara berkala.

## Cara menjelaskan ke klien

Ringkas saja:

- "Tampilan hasil Google bergantung pada isi halaman yang bisa diambil Google. Kalau server sempat mengirim kode error, Google tidak punya bahan untuk menampilkan deskripsi dan logo."
- "Halaman Anda bisa tetap muncul sementara, tetapi itu bukan jaminan. Jika error bertahan, halaman bisa gugur dari indeks."
- "Kami sudah mengecek status code dan memperbaiki sumbernya. Pemulihan tampilan butuh waktu yang tidak bisa dipastikan."

## Pencegahan: monitor status halaman penting

Daftarkan 5 sampai 10 URL yang menghasilkan lead (beranda, halaman layanan, kontak) ke uptime monitor yang memeriksa **status code**, bukan sekadar "situs hidup". Tambahkan peringatan jika status selain 200 muncul. Setelah update plugin, perubahan CDN, atau migrasi hosting, jalankan lagi checklist di atas.

## Ringkasan

- Snippet dan favicon kosong bisa menjadi gejala halaman mengirim status 4xx.
- Google dapat melindungi URL penting sementara dari penghapusan indeks, tetapi tidak ada jaminan untuk situs biasa.
- Verifikasi dengan `curl -sI` dan URL Inspection sebelum mengubah meta tag.
- Pasang monitor status code di halaman yang menghasilkan lead.

Sumber utama: [Search Engine Roundtable, "Google Can Temporarily Protect Important URLs From Being Deindexed"](https://www.seroundtable.com/google-protected-important-urls-index-42464.html), merujuk komentar Gary Illyes di LinkedIn.

---
title: "Server Klien Kewalahan Dicrawl Googlebot? Cara Pakai 503, 429, dan Retry-After"
description: "Panduan Google soal menurunkan crawl rate darurat: kapan pakai 503/429, header Retry-After, dan batas 1-2 hari agar URL tidak lepas dari indeks."
pubDate: "2026-10-19"
date: "2026-10-19"
excerpt: "Panduan resmi Google soal menurunkan crawl rate darurat: kapan pakai 503/429, header Retry-After, dan batas 1-2 hari agar URL tidak terlepas dari indeks."
category: "SEO Teknis"
tags: ["crawl rate", "Googlebot", "Retry-After", "SEO teknis", "hosting"]
author: "Rafiq"
coverImage: ""
heroImage: ""
---

Server klien tiba-tiba lambat, CPU hosting penuh, dan di log akses Googlebot muncul ribuan kali. Reaksi umum: blokir Googlebot di firewall atau `robots.txt`. Itu langkah yang bisa merugikan klien lebih besar daripada masalah servernya.

Google memperbarui dokumentasi [Reduce the Google crawl rate](https://developers.google.com/crawling/docs/crawlers-fetchers/reduce-crawl-rate) (terakhir diperbarui 6 Oktober 2026). Isinya jelas, dan relevan untuk freelancer yang mengelola situs klien. Artikel ini merangkum apa yang perlu kamu lakukan, dan apa yang jangan.

## Apa yang berubah di dokumentasi

Menurut [changelog dokumentasi crawling Google](https://developers.google.com/crawling/docs/changelog), bagian pengurangan crawl rate darurat disusun ulang. Contoh penggunaan header `Retry-After` ditambahkan langsung ke panduan itu.

Google menulis bahwa dukungan `Retry-After` bukan hal baru. Sebelumnya sudah ada di panduan "Temporarily pause or disable a website". Perubahannya hanya soal letak: informasinya kini ada di tempat yang paling dicari saat situasi darurat.

Jadi ini bukan fitur baru. Ini perbaikan dokumentasi yang membuat prosedur resminya lebih mudah ditemukan.

## Cari penyebabnya dulu

Google menyebut lonjakan crawl biasanya berasal dari struktur URL yang tidak efisien. Penyebab yang paling sering dilaporkan, menurut dokumen itu:

- Navigasi berfaset atau fitur sorting dan filter.
- Kalender dengan banyak URL per tanggal.
- Target Dynamic Search Ad.

Google menyarankan memeriksa log akses server bersama penyedia hosting, lalu membaca panduan tentang navigasi berfaset dan efisiensi crawling. Kalau penyebabnya filter produk yang menghasilkan ribuan kombinasi URL, memperlambat Googlebot hanya menunda masalah. Perbaikan sebenarnya ada di struktur URL. Topik ini sudah dibahas di [crawl budget dan URL sprawl](/blog/crawl-budget-url-sprawl-ai-bot/).

## Cara menurunkan crawl rate darurat

Untuk jangka pendek (beberapa jam sampai 1-2 hari), Google menyatakan: kembalikan status HTTP `500`, `503`, atau `429`, bukan `200`, pada permintaan crawl.

Ketika Google menemukan banyak URL dengan status itu:

- Crawl rate turun untuk **seluruh hostname** (misalnya `sub.contoh.com`), termasuk URL yang normal.
- Crawl rate naik lagi otomatis setelah jumlah error berkurang.

Untuk `503` atau `429`, kamu bisa menambah header `Retry-After`, memakai jeda dalam detik atau tanggal UTC absolut:

```http
HTTP/1.1 503 Service Unavailable
Retry-After: 120
```

```http
HTTP/1.1 503 Service Unavailable
Retry-After: Wed, 21 Oct 2026 07:28:00 GMT
```

Format ini mengikuti RFC 9110 seperti yang dirujuk Google.

## Batas yang tidak boleh dilewati

Google memberi dua peringatan eksplisit.

Pertama, menurunkan crawl rate berdampak luas. Untuk Search, Googlebot menemukan lebih sedikit halaman baru, halaman lama diperbarui lebih jarang (harga dan stok bisa terlambat tampil), dan halaman yang sudah dihapus bisa bertahan lebih lama di indeks. Untuk Google Ads, kampanye bisa dibatalkan atau dijeda dan iklan bisa tidak tayang.

Kedua, jangan lakukan lebih dari 1-2 hari. Kalau Googlebot melihat status itu di URL yang sama selama beberapa hari, URL tersebut dapat dihapus dari indeks Google.

Artinya `503` bukan solusi permanen. Ini rem darurat.

## Kalau tidak bisa menyajikan error

Beberapa infrastruktur tidak memungkinkan mengirim `503` selektif, misalnya shared hosting tanpa akses konfigurasi. Google menyediakan jalur lain: ajukan permintaan khusus untuk melaporkan crawl rate yang tidak wajar tinggi, sambil menyebut rate optimal untuk situsmu.

Catatan dari dokumen:

- Kamu tidak bisa meminta crawl rate dinaikkan.
- Evaluasi permintaan bisa memakan waktu beberapa hari.

Jadi jalur ini tidak cocok untuk insiden yang sedang terjadi sekarang.

## Checklist untuk situs klien

1. **Baca log dulu.** Pastikan lonjakan memang Googlebot asli, bukan bot yang menyamar. Verifikasi lewat IP resmi Google sebelum bertindak.
2. **Identifikasi pola URL.** Cari parameter filter, sorting, atau tanggal yang berulang.
3. **Perbaiki sumbernya.** Rapikan navigasi berfaset dan URL yang tidak perlu diindeks.
4. **Gunakan 503/429 hanya sebagai jeda singkat.** Sertakan `Retry-After`, dan catat jam mulai serta jam berhenti.
5. **Pulihkan `200` dalam 1-2 hari.** Pantau laporan Crawl Stats di Search Console sampai normal.
6. **Jangan blokir Googlebot lewat `robots.txt` untuk "menyelamatkan" server.** Itu mengubah apa yang boleh diindeks, bukan sekadar kecepatan crawl.
7. **Komunikasikan ke klien.** Jelaskan bahwa halaman baru dan update harga bisa terlambat tampil selama periode pembatasan.

Untuk catatan: saya tidak menemukan di dokumen ini angka berapa banyak error yang dianggap "signifikan". Google hanya menulis "a significant number of URLs", jadi jangan menjanjikan klien durasi atau ambang tertentu.

## Kesalahan yang sering terjadi

Beberapa pola yang perlu dihindari saat server klien kewalahan:

- **Mengembalikan `200` dengan halaman error.** Googlebot melihatnya sebagai konten normal, bukan sinyal untuk melambat. Halaman kosong atau pesan "server sibuk" bisa ikut terindeks.
- **Status darurat dibiarkan menyala.** Rule firewall atau mode maintenance sering lupa dimatikan setelah insiden selesai. Ini yang paling berisiko karena batas 1-2 hari terlewati tanpa disadari.
- **Membatasi semua bot secara rata.** Pengunjung manusia ikut menerima error. Batasi hanya lalu lintas crawler yang terverifikasi bila infrastruktur memungkinkan.

## Dampak ke pekerjaan freelance

Bagi penyedia jasa website dan SEO, ini bahan SOP insiden yang bisa dimasukkan ke paket maintenance:

- Siapa yang punya akses mengubah respons server.
- Berapa lama maksimum status darurat aktif.
- Siapa yang memantau Crawl Stats dan memulihkan `200`.

Dengan prosedur tertulis, keputusan saat server panik tidak lagi diambil asal. Dan klien paham bahwa SEO teknis juga menyangkut stabilitas hosting, bukan hanya konten.

## Kesimpulan

Dokumentasi Google yang diperbarui 6 Oktober 2026 menegaskan satu hal: untuk lonjakan crawl darurat, `503` atau `429` dengan `Retry-After` adalah cara resmi, tetapi hanya untuk 1-2 hari. Penyebab jangka panjang, biasanya URL berlebih, harus dibereskan di struktur situs. Simpan prosedurnya sebelum insiden terjadi, bukan sesudahnya.

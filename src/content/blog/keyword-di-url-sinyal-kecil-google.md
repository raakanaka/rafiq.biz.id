---
title: "Keyword di URL Hanya Sinyal Kecil: Apa Artinya untuk Klien SEO"
description: "Gary Illyes menyebut keyword di URL sinyal sangat kecil. Ini dampaknya untuk permintaan klien, migrasi slug, emoji, dan underscore."
pubDate: "2026-10-18"
date: "2026-10-18"
excerpt: "Google menyebut keyword di URL sinyal sangat kecil. Jangan ubah slug massal; fokus pada konten, struktur, dan hyphen."
category: "SEO Teknis"
tags: ["SEO", "URL", "Google Search", "Slug", "Klien"]
author: "Rafiq"
coverImage: ""
heroImage: ""
---

Klien sering minta satu hal: "Slug-nya dimasukkan semua keyword ya, biar naik." Pertanyaan ini baru dijawab langsung oleh Google. Pada 14 Oktober 2026, Google merilis episode pertama seri Search Central bernama "The Non-Canonical Cabinet", yang membahas pertanyaan teknis SEO yang tidak lazim. Gary Illyes dan Cherry Prommawin menjadi pembawanya. Laporan lengkapnya ada di [Search Engine Journal](https://www.searchenginejournal.com/google-launches-a-video-series-for-odd-technical-seo-questions/592952/).

Tulisan ini merangkum isi episode tersebut dan cara memakainya saat berbicara dengan klien.

## Apa yang dikatakan Google

Menurut laporan SEJ, episode pertama membahas tiga hal: karakter yang boleh ada di nama domain dan path URL (termasuk emoji dan karakter non-Inggris), pengaruh keyword di URL terhadap ranking, dan pemisah kata.

Poin yang paling relevan untuk pekerjaan sehari-hari:

- **Keyword di URL adalah "incredibly small signal".** Illyes mengatakan sinyal ini baru berarti ketika Google tidak punya hal lain untuk dijadikan pegangan, misalnya situs yang baru berumur hitungan detik dan belum punya konten.
- **Setelah Google melihat konten, keyword di domain dan URL menjadi "basically irrelevant".**
- **Underscore dianggap penyambung.** Kata yang dihubungkan underscore diperlakukan sebagai satu kata panjang. Google tetap merekomendasikan hyphen sebagai pemisah, sesuai [dokumentasi struktur URL Google](https://developers.google.com/search/docs/crawling-indexing/url-structure).
- **Emoji di path bisa di-crawl dan diproses.** Browser meng-encode karakter itu dengan percent-encoding, sehingga emoji ayam dalam contoh episode menjadi `%F0%9F%90%94`.

SEJ juga mencatat bahwa John Mueller pernah menyebut keyword di URL sebagai faktor ranking yang "sangat kecil" pada 2016 dan "sangat ringan" pada 2021. Jadi ini bukan perubahan sikap, melainkan konfirmasi ulang.

## Yang tidak dikatakan Google

Episode ini tidak berarti URL boleh asal. Dua hal tetap berlaku:

1. URL tetap dipakai sebagai identitas halaman. Slug yang jelas membantu pengguna membaca tujuan tautan dan membantu Anda sendiri saat mengaudit laporan.
2. Dokumentasi Google tetap menyarankan struktur URL yang sederhana dan konsisten.

Artinya, jangan membaca episode ini sebagai izin membuat slug acak. Bacalah sebagai penurunan prioritas: slug bukan tuas untuk menaikkan ranking.

## Cara menjawab klien

Berikut pendekatan yang saya pakai ketika klien menuntut slug penuh keyword.

### 1. Pisahkan "rapi" dari "berpengaruh"

Slug pendek dan deskriptif tetap baik untuk pembacaan manusia, misalnya `/jasa-seo` atau `/blog/keyword-di-url-sinyal-kecil-google`. Tetapi jangan janjikan kenaikan ranking dari slug. Janjikan keterbacaan dan kemudahan pengelolaan.

### 2. Tolak migrasi slug massal tanpa alasan kuat

Mengubah URL berarti redirect 301, risiko rantai redirect, dan laporan yang terputus. Jika alasan satu-satunya adalah "menambah keyword", biayanya lebih besar daripada manfaatnya, apalagi dengan pernyataan Illyes bahwa sinyalnya hampir tidak relevan setelah konten dikenali. Migrasi baru masuk akal jika URL lama memang rusak: parameter berantakan, underscore, huruf kapital tidak konsisten, atau struktur folder yang menyesatkan.

### 3. Perbaiki yang memang disebut Google

Kalau menemukan underscore di slug lama, itu kandidat perbaikan yang sah karena Google memperlakukannya sebagai satu kata panjang. Untuk situs baru, cukup pakai hyphen dari awal. Untuk situs lama, nilai dulu: jika halaman sudah punya trafik dan backlink, pertimbangkan apakah perubahan sebanding dengan risikonya.

### 4. Jangan memaksakan emoji atau karakter aneh

Walaupun Googlebot bisa memproses emoji di path, itu tidak menambah nilai bisnis. Link yang ditempel di WhatsApp atau email bisa tampil sebagai deretan `%F0%9F...` yang tidak enak dibaca. Teknis boleh, praktis belum tentu.

### 5. Alihkan percakapan ke hal yang berpengaruh

Gunakan momen ini untuk membawa klien ke prioritas yang lebih besar:

- Apakah halaman menjawab maksud pencarian yang spesifik?
- Apakah ada bukti kerja, data, atau pengalaman nyata di halaman?
- Apakah halaman bisa di-crawl, dirender, dan masuk indeks?
- Apakah internal link mengarah ke halaman yang penting?

Semua itu lebih menentukan daripada tiga kata tambahan di slug.

## Checklist audit URL yang masuk akal

Untuk audit cepat, cukup cek poin berikut:

- Pemisah kata memakai hyphen, bukan underscore.
- Huruf kecil konsisten, tanpa varian huruf kapital yang menghasilkan duplikat.
- Satu versi canonical per halaman, dengan trailing slash yang konsisten.
- Tidak ada parameter acak untuk konten utama.
- Redirect hanya satu hop dari URL lama ke URL final.
- Slug mudah dibaca manusia dan sesuai isi halaman.

Jika semua poin ini sudah terpenuhi, berhenti mengutak-atik URL. Waktu Anda lebih baik dipakai memperbaiki konten dan bukti kredibilitas halaman.

## Catatan untuk pemilik bisnis

Jika Anda pemilik bisnis dan agensi atau freelancer menawarkan "optimasi URL" sebagai paket utama, tanyakan apa tujuan konkretnya. Berdasarkan pernyataan Google di atas, optimasi URL yang baik itu murah dan cepat, bukan proyek besar. Ia layak masuk daftar hal kecil yang dibereskan di awal, bukan alasan untuk menaikkan harga.

Satu catatan jujur: episode ini adalah pernyataan Google tentang cara kerja sistemnya, bukan hasil uji coba independen. Saya tidak punya data A/B sendiri tentang slug, jadi kesimpulan di atas bersandar pada pernyataan resmi dan dokumentasi Google, bukan klaim hasil.

## Kesimpulan

Keyword di URL hampir tidak berpengaruh setelah Google memahami isi halaman. Pakai hyphen, jaga slug singkat dan jelas, hindari migrasi massal tanpa alasan kuat, lalu arahkan energi ke konten dan struktur situs. Jika klien masih bertanya, tunjukkan [laporan SEJ tentang episode ini](https://www.searchenginejournal.com/google-launches-a-video-series-for-odd-technical-seo-questions/592952/) dan dokumentasi Google di atas sebagai rujukan.

Butuh audit struktur URL dan indexing yang realistis, tanpa janji berlebihan? Lihat [jasa SEO](/jasa-seo) atau hubungi saya untuk konsultasi.

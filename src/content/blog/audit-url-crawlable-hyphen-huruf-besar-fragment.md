---
title: "Audit URL Crawlable: Hyphen, Huruf Besar, Fragment, dan Parameter"
date: "2026-10-25"
pubDate: "2026-10-25"
excerpt: "Google memperbarui panduan struktur URL pada 23 Okt 2026. Pakai 6 cek ini untuk audit hyphen, huruf besar, fragment, dan parameter situs klien."
description: "Google memperbarui panduan struktur URL pada 23 Okt 2026. Pakai 6 cek ini untuk audit hyphen, huruf besar, fragment, dan parameter situs klien."
category: "SEO Teknis"
tags: ["URL", "Crawlability", "Google Search", "Audit SEO", "Parameter"]
author: "Rafiq"
coverImage: ""
heroImage: ""
---

Banyak audit SEO berhenti di pertanyaan "keyword ada di URL atau tidak". Pertanyaan yang lebih berguna: **apakah URL situs ini bisa di-crawl dengan efisien?** Pada 23 Oktober 2026, Google memperbarui panduan struktur URL untuk menjelaskan pemisah kata dengan hyphen dan underscore. Menurut [catatan pembaruan dokumentasi Google Search](https://developers.google.com/search/updates), alasannya menyelaraskan dokumentasi dengan seri video "The Non-Canonical Cabinet".

Tulisan ini mengubah halaman [URL structure best practices](https://developers.google.com/search/docs/crawling-indexing/url-structure) menjadi checklist audit yang bisa Anda pakai ke situs klien. Ini bukan pembahasan ulang soal pengaruh keyword di URL; itu sudah saya bahas di [artikel tentang keyword di URL sebagai sinyal kecil](/blog/keyword-di-url-sinyal-kecil-google/).

## Mengapa ini penting: crawl yang boros

Dokumen Google membuka dengan peringatan: jika URL tidak memenuhi kriteria, Google Search kemungkinan meng-crawl situs dengan tidak efisien, termasuk crawl rate yang sangat tinggi, atau tidak ter-crawl sama sekali. Bagian "Avoid common issues" menjelaskan penyebabnya: URL yang terlalu kompleks menghasilkan banyak URL berbeda untuk konten yang sama atau mirip, sehingga Googlebot memakai bandwidth lebih dari perlu dan bisa gagal mengindeks seluruh konten.

Contoh penyebab yang disebut Google: filter yang bisa digabung tanpa batas, parameter referral, parameter pengurutan, dan session ID. Jadi audit URL bukan soal estetika slug, melainkan soal jumlah URL yang tercipta.

## 6 cek audit URL

### 1. Pemisah kata: hyphen, bukan underscore

Google merekomendasikan hyphen (`-`) untuk memisahkan kata. Alasannya, underscore lazim dipakai untuk menyatukan konsep, misalnya nama fungsi seperti `format_date`, sedangkan hyphen jelas menandai batas kata. Dokumen juga mencantumkan kata yang digabung tanpa pemisah, seperti `greendress`, sebagai pola yang tidak direkomendasikan.

Cara cek: ekspor daftar URL dari crawler atau sitemap, lalu cari karakter `_` di path.

Cara bertindak: jangan ubah massal hanya karena ini. Slug lama yang sudah terindeks dan punya tautan masuk lebih aman dibiarkan. Terapkan hyphen untuk URL baru, dan ubah yang lama hanya bila ada alasan lain serta 301 yang rapi.

### 2. Huruf besar dan kecil

Menurut dokumen yang sama, penanganan URL oleh Google Search bersifat case sensitive. `/APPLE` dan `/apple` diperlakukan sebagai dua URL dengan konten masing-masing. Jika server Anda menampilkan halaman yang sama untuk keduanya, Google menyarankan menyeragamkan semuanya ke satu bentuk huruf agar lebih mudah menentukan bahwa keduanya halaman yang sama.

Cara cek: buka satu URL dengan variasi huruf besar, lalu lihat apakah server membalas 200 untuk keduanya.

Cara bertindak: pilih huruf kecil sebagai bentuk standar, arahkan variasi lain dengan 301, dan pastikan canonical menunjuk ke bentuk standar.

### 3. Fragment tidak boleh mengubah konten

Google menyatakan fragment (bagian setelah `#`) umumnya tidak didukung Search. Contoh dalam dokumen: `https://example.com/#/potatoes`. Jika JavaScript mengubah konten, dokumen menyarankan memakai History API.

Cara cek: pada situs single-page, klik menu lalu lihat apakah URL berubah hanya setelah tanda `#`.

Cara bertindak: minta developer memakai routing berbasis path dan memastikan setiap path mengembalikan HTML yang bermakna. Soal pengecekan status dan render, lihat [status HTTP dan JavaScript untuk Googlebot](/blog/status-http-javascript-googlebot/).

### 4. Format parameter yang umum

Untuk parameter, Google menyarankan tanda sama dengan (`=`) antara kunci dan nilai, serta ampersand (`&`) untuk parameter tambahan. Beberapa nilai untuk satu kunci boleh dipisah koma. Contoh yang tidak direkomendasikan di dokumen: pemisah titik dua dan kurung siku, atau koma ganda sebagai pemisah parameter.

Cara cek: cari URL berparameter di Search Console, log server, atau crawl, lalu lihat apakah polanya non-standar. Ini sering muncul di filter e-commerce buatan sendiri.

### 5. Kurangi parameter yang tidak mengubah konten

Dokumen menyarankan memangkas parameter yang tidak mengubah isi halaman. Contoh yang disebut: parameter referral, urutan, dan session ID. Parameter pelacakan kampanye termasuk kelompok ini: pastikan tautan internal tidak membawa parameter itu, karena tautan internal akan ikut meng-crawl-kan variasi URL.

Cara bertindak: bersihkan tautan internal dari parameter pelacakan, dan simpan parameter itu hanya di tautan kampanye eksternal. Untuk standar penamaannya, lihat [standar UTM GA4](/blog/standar-utm-ga4-paid-organic/).

### 6. Percent encoding untuk karakter non-ASCII

Saat menautkan halaman sendiri, dokumen menyarankan memakai percent encoding pada atribut `href` bila perlu. Karakter ASCII yang tidak dicadangkan boleh ditulis apa adanya; karakter di luar ASCII sebaiknya di-encode. Contohnya `gem%C3%BCse`, bukan `gemüse`.

Cara cek: cari `href` yang berisi karakter non-ASCII atau emoji. Dokumen juga menyarankan memakai bahasa audiens di URL, jadi slug berbahasa Indonesia sudah tepat.

## Urutan kerja yang masuk akal

1. Hitung dulu jumlah URL unik per pola (path, parameter, huruf besar/kecil). Temuan terbesar biasanya di parameter dan filter, bukan di underscore.
2. Perbaiki sumber URL duplikat: tautan internal, sitemap, canonical.
3. Untuk URL lama yang bermasalah, gunakan 301 satu langkah, bukan rantai.
4. Pantau laporan Crawl Stats di Search Console untuk melihat apakah permintaan crawl menjadi lebih terarah.

Gagal atau tidaknya perbaikan terlihat dari dua hal: jumlah URL berparameter yang di-crawl tidak turun, dan URL standar tidak lagi muncul dalam banyak varian di laporan indeks. Perubahan ini tidak menjanjikan kenaikan ranking; tujuannya crawl yang lebih bersih.

## Yang tidak perlu diubah

- Keyword di slug bukan tuas ranking. Menurut [laporan Search Engine Journal tentang episode pertama seri tersebut](https://www.searchenginejournal.com/google-launches-a-video-series-for-odd-technical-seo-questions/592952/), Gary Illyes menyebut keyword di URL sebagai sinyal yang sangat kecil.
- URL yang stabil, sudah terindeks, dan tidak menimbulkan duplikat tidak perlu direstrukturisasi hanya agar sesuai dokumen.

## Template laporan untuk klien

Cukup satu halaman: jumlah pola URL bermasalah, contoh tiga URL per pola, penyebab, perbaikan yang disarankan, dan risiko. Pisahkan "wajib" (duplikasi, fragment pada konten, parameter tak berguna) dari "opsional" (underscore pada URL lama). Dengan begitu klien tidak menyetujui migrasi besar untuk masalah yang kecil.

Jika Anda butuh audit semacam ini, lihat [jasa SEO Rafiq](/jasa-seo/).

---
title: "Gemini Berhenti Menambah UTM: 4 Cara Baca Trafik AI di GA4 (2026)"
description: "Gemini berhenti menambah utm_source ke URL kutipan sejak sekitar 28 September 2026. Ini dampaknya ke GA4 dan cara melaporkannya ke klien tanpa klaim berlebihan."
pubDate: "2026-11-03"
date: "2026-11-03"
excerpt: "Gemini berhenti menempel utm_source pada tautan kutipan. Ini cara membaca trafik AI di GA4 tanpa menebak, dan apa yang jujur dilaporkan ke klien."
category: "Digital Marketing"
tags: ["GA4", "Gemini", "Atribusi", "UTM", "Trafik AI"]
author: "Rafiq"
coverImage: ""
heroImage: ""
---

Kalau laporan GA4 klien menunjukkan trafik dari Gemini naik pada September lalu lalu tiba-tiba datar, jangan buru-buru menyimpulkan minat orang turun. Ada kemungkinan yang berubah adalah cara tautannya ditandai, bukan jumlah pengunjungnya.

## Apa yang dilaporkan

Menurut [Search Engine Roundtable (30 Oktober 2026)](https://www.seroundtable.com/gemini-utm-parameters-42399.html), Google tampaknya sudah berhenti menambahkan parameter UTM pada URL yang dikutip di jawaban Gemini. Parameternya `utm_source=gemini`, mulai muncul awal September, lalu hilang sekitar 28 September. Analis Natzir menunjukkan grafik pertumbuhan tag itu selama tiga minggu sebelum lenyap dalam semalam. John Mueller juga disebut pernah melihat parameter itu di tautan Gemini sekitar sebulan sebelumnya.

Ini laporan pihak ketiga yang diamati dari luar. Saya tidak menemukan pengumuman resmi Google soal alasannya. Perlakukan sebagai pengamatan, bukan kebijakan yang sudah dikonfirmasi.

Dua detail yang penting untuk atribusi, dari sumber yang sama:

- Kunjungan dengan referrer `gemini.google.com` tetap stabil selama periode itu. Di versi web, referrer masih diteruskan.
- Dari aplikasi iOS, link dibuka di WebView sendiri tanpa referrer, sehingga di GA4 masuk ke Direct. Satu-satunya jejak yang disebut adalah user agent `GeminiiOS` di log server.

## Kenapa ini mengubah laporan klien

UTM adalah label yang ditempel pada URL, bukan bukti perilaku. Begitu label hilang, GA4 harus menebak sumber dari referrer. Kalau referrer juga kosong, kunjungan jatuh ke Direct.

Akibatnya, kenaikan atau penurunan "Gemini" di laporan bisa dipengaruhi tiga hal sekaligus: perubahan perilaku pengguna, perubahan penandaan, dan perubahan cara aplikasi membuka tautan. Dari satu angka di GA4, ketiganya tidak bisa dipisahkan.

GA4 sendiri punya channel bawaan **AI Assistant** (`medium=ai-assistant`) yang mencakup sumber seperti ChatGPT, Gemini, Deepseek, Copilot, dan Grok, tetapi tidak mencakup AI Overviews maupun AI Mode, yang tetap masuk Organic Search. Detailnya ada di [Google Analytics Help: Default channel group](https://support.google.com/analytics/answer/9756891?hl=en). Channel ini bergantung pada sumber yang dikenali, jadi kunjungan tanpa referrer tidak akan masuk ke sana.

## 4 langkah membaca trafik AI di GA4

### 1. Tandai tanggal perubahan, jangan bandingkan mentah

Catat 28 September 2026 sebagai titik perubahan penandaan yang dilaporkan. Saat membandingkan bulan, beri catatan pada grafik. Tren sebelum dan sesudah tanggal itu tidak sepenuhnya setara.

### 2. Cek sumber dan medium, bukan hanya channel

Buka laporan Traffic acquisition, lalu lihat kombinasi session source/medium. Cari `gemini.google.com / referral` dan `ai-assistant`. Catat juga apakah ada sesi lama dengan `utm_source=gemini` agar bisa dipisahkan dari periode sesudahnya.

### 3. Pantau Direct secara terpisah

Kalau Direct naik tanpa kampanye apa pun, tulis sebagai kemungkinan campuran dari sumber tanpa referrer, termasuk aplikasi. Jangan tulis angka "sekian persen Direct berasal dari Gemini". Datanya tidak ada.

### 4. Pakai log server bila tersedia

Untuk situs yang punya akses log, cari user agent yang disebut dalam laporan di atas sebagai petunjuk tambahan. Ini bukti pelengkap, bukan pengganti GA4, dan perlu diverifikasi dulu pada situs masing-masing sebelum dipakai sebagai metrik.

## Yang boleh dan tidak boleh ditulis ke klien

Boleh:

- "Sumber Gemini di GA4 hanya mencakup kunjungan yang membawa referrer atau tag. Sebagian kunjungan dari aplikasi tidak terlacak sebagai Gemini."
- "Ada perubahan penandaan yang dilaporkan sekitar 28 September, jadi perbandingan bulan Oktober dengan Agustus perlu catatan."
- "Kami melihat sinyal, bukan total."

Tidak boleh:

- Menyebut total trafik Gemini sebagai angka pasti.
- Menyimpulkan visibilitas di Gemini turun hanya karena angka sesi turun.
- Membuat target KPI berbasis sesi Gemini dari satu platform saja.

Pendekatan yang lebih sehat adalah memasangkan sesi AI dengan hasil bisnis: formulir terkirim, klik WhatsApp, atau permintaan penawaran, lalu menyebut kualitas lead, bukan jumlah kunjungan. Panduan pengukuran lead sudah ada di [ukur lead formulir GA4](/blog/ukur-lead-formulir-ga4/) dan [atribusi lead WhatsApp vs formulir](/blog/atribusi-lead-whatsapp-vs-formulir/).

## Jangan membuat UTM sendiri untuk tautan yang tidak Anda kendalikan

Godaan umum: menambahkan UTM manual ke semua URL supaya "kelihatan" di laporan. Untuk tautan yang Anda pasang sendiri di iklan, email, atau profil, itu sah. Untuk URL yang dikutip platform AI, Anda tidak mengendalikan tautan itu, dan menambahkan parameter sembarang lewat redirect justru berisiko membuat URL ganda. Standar penamaan UTM yang rapi ada di [standar UTM GA4 paid dan organic](/blog/standar-utm-ga4-paid-organic/).

## Template catatan bulanan untuk dashboard

Agar konsisten tiap bulan, saya menambahkan blok catatan kecil di dashboard klien. Isinya tiga baris:

1. **Perubahan penandaan yang diketahui**: tanggal, platform, sumber laporan. Contoh: "Gemini berhenti menambah utm_source sekitar 28 September 2026, menurut Search Engine Roundtable."
2. **Sumber yang dilacak**: daftar source/medium yang dihitung sebagai trafik AI bulan ini, termasuk channel AI Assistant.
3. **Batasan**: kunjungan dari aplikasi tanpa referrer tidak terlihat sebagai AI dan kemungkinan masuk Direct.

Catatan ini terlihat sepele, tetapi menyelamatkan diskusi tiga bulan kemudian ketika klien bertanya kenapa grafik berubah. Pola yang sama juga saya pakai untuk anomali data Search Console, seperti dibahas di [cara membaca laporan AI di Search Console](/blog/cara-baca-laporan-ai-search-console/).

## Catatan penutup

Perubahan seperti ini mengingatkan bahwa angka atribusi AI masih rapuh. Laporkan sebagai indikasi, tulis tanggal perubahan, dan hubungkan ke hasil bisnis. Sampai Google atau platform lain mengonfirmasi perilaku penandaan secara resmi, anggap pengamatan komunitas sebagai petunjuk yang bisa berubah lagi.

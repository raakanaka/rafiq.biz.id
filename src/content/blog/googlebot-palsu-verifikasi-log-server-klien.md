---
title: "Googlebot Palsu di Log Server Klien: Cara Verifikasi Tanpa Salah Blokir (2026)"
date: "2026-11-06"
pubDate: "2026-11-06"
excerpt: "Gary Illyes bilang AI bikin peniruan Googlebot makin parah. Ini cara cek log klien dengan reverse DNS sebelum Anda memblokir bot yang salah."
description: "Gary Illyes bilang AI bikin peniruan Googlebot makin parah. Ini cara cek log klien dengan reverse DNS sebelum Anda memblokir bot yang salah."
category: "SEO Teknis"
tags: ["Googlebot", "Log Server", "Bot Impersonation", "WAF", "Crawl", "Audit Teknis"]
author: "Rafiq"
coverImage: ""
---

Kalau Anda mengaudit log server klien, hampir pasti ada baris dengan user-agent `Googlebot`. Pertanyaannya: apakah itu benar Googlebot?

Pada 30 Oktober 2026, Search Engine Roundtable [melaporkan](https://www.seroundtable.com/google-ai-made-bot-impersonation-worse-42422.html) wawancara Gary Illyes (Google) di Odys Podcast. Intinya: peniruan bot, termasuk yang mengaku Googlebot, makin parah, dan Illyes menyebut AI sebagai penyebabnya. Artikel ini membahas apa artinya untuk pekerjaan SEO teknis Anda dan bagaimana memverifikasi bot tanpa menebak.

## Apa yang dikatakan Gary Illyes

Merujuk [ringkasan Relevant Audience](https://www.relevantaudience.com/seo/gary-illyes-ai-scraping-fake-googlebot-verification/) atas laporan Search Engine Roundtable (bukan transkrip penuh), poin utamanya:

- Mengubah header user-agent itu mudah. Illyes menyebut sekitar 30 detik.
- Honeypot miliknya mencatat permintaan yang mengaku Googlebot dari alamat IP yang tidak terkait Google.
- Motifnya: pihak yang mengumpulkan data untuk melatih model, atau scraper biasa, mengaku Googlebot supaya lolos dari situs yang sebenarnya memblokir mereka.
- Firewall dan CDN makin baik mengenali crawler, tetapi menurut Illyes tidak sempurna.
- robots.txt disebut sebagai saran, bukan penegakan. Untuk menegakkan, butuh alat tingkat jaringan seperti WAF.
- Web Bot Auth (permintaan HTTP bertanda tangan kriptografis) dibahas sebagai cara verifikasi yang lebih andal. Skor reputasi crawler baru ide awal.
- Untuk situs kecil: cek dulu apakah lalu lintas bot benar-benar menimbulkan masalah sebelum berinvestasi di proteksi.

## Kenapa ini urusan SEO, bukan cuma urusan server

Ada dua risiko yang berlawanan, dan keduanya merugikan klien.

**Risiko 1: data crawl Anda tercemar.** Laporan "Googlebot crawl 40.000 request per hari" yang dibuat dari log mentah bisa dipenuhi bot palsu. Anda lalu mendiagnosis crawl budget yang sebenarnya tidak ada. Pembahasan terkait ada di [crawl budget, URL sprawl, dan bot AI](/blog/crawl-budget-url-sprawl-ai-bot).

**Risiko 2: salah blokir bot asli.** Menganggap semua trafik "Googlebot" mencurigakan lalu memblokirnya di WAF bisa memutus crawler Google yang asli. Dampaknya ke indeks jauh lebih mahal daripada beban server dari bot palsu. Hal serupa berlaku untuk sinyal server seperti 503/429, yang dibahas di [Retry-After 503/429 dan crawl rate Googlebot](/blog/retry-after-503-429-crawl-rate-googlebot).

Jadi aturannya: verifikasi dulu, baru tindak.

## Cara verifikasi manual (resmi dari Google)

Dokumentasi [Verify requests from Google crawlers and fetchers](https://developers.google.com/crawling/docs/crawlers-fetchers/verify-google-requests) (terakhir diperbarui 20 Maret 2026) menjelaskan dua langkah manual yang menurut Google cukup untuk sebagian besar kasus:

1. Jalankan reverse DNS pada IP dari log dengan perintah `host`. Pastikan nama domainnya `googlebot.com`, `google.com`, atau `googleusercontent.com`.
2. Jalankan forward DNS pada nama domain hasil langkah 1. Pastikan hasilnya sama dengan IP asli di log.

Contoh dari dokumen Google:

```bash
host 66.249.66.1
# 1.66.249.66.in-addr.arpa domain name pointer crawl-66-249-66-1.googlebot.com.

host crawl-66-249-66-1.googlebot.com
# crawl-66-249-66-1.googlebot.com has address 66.249.66.1
```

Kedua langkah wajib. Pemilik blok IP mengendalikan reverse DNS-nya, jadi bisa saja mengembalikan nama yang tampak seperti milik Google. Forward lookup pada domain Google itulah yang mengonfirmasi bahwa nama dan alamat memang berpasangan.

## Cara verifikasi otomatis untuk log besar

Untuk volume besar, Google menyediakan daftar rentang IP dalam format JSON (CIDR) untuk crawler umum seperti Googlebot, crawler khusus seperti AdsBot, dan pengambil yang dipicu pengguna. Cocokkan IP di log dengan daftar itu. Dokumentasi Google juga menyebut ada daftar IP umum Google untuk kasus seperti Apps Script.

Catatan praktis: unduh daftar secara berkala, jangan hardcode. Rentang IP bisa berubah, dan daftar basi akan menandai Googlebot asli sebagai palsu.

## Alur kerja audit log untuk klien

Berikut urutan yang saya pakai untuk klien jasa kecil:

1. **Ekspor log** minimal 7 hari. Ambil IP, user-agent, path, dan status code.
2. **Filter** baris dengan user-agent yang mengaku Googlebot.
3. **Verifikasi** IP unik, bukan setiap baris. Ratusan ribu baris biasanya hanya berasal dari puluhan atau ratusan IP.
4. **Pisahkan** hasilnya menjadi dua kelompok: terverifikasi dan tidak terverifikasi.
5. **Laporkan** tren crawl hanya dari kelompok terverifikasi.
6. **Ukur dampak** kelompok tidak terverifikasi: apakah mereka membebani server, mengakses path sensitif, atau hanya noise.
7. **Putuskan tindakan** bersama klien. Jangan blokir sebelum langkah 6 jelas.

Cross-check ke Google Search Console tetap perlu. Laporan statistik crawl di GSC dibuat oleh Google, jadi tidak tercemar bot palsu. Selisih besar antara angka GSC dan log mentah adalah petunjuk adanya trafik tiruan.

## Apa yang boleh dan tidak boleh Anda lakukan

**Boleh:**
- Menjalankan rate limit di CDN atau WAF untuk IP yang gagal verifikasi tetapi mengaku Googlebot.
- Menyaring bot tidak terverifikasi dari laporan crawl.
- Menyarankan bot management di CDN sebagai langkah awal. Ini juga yang disebut Illyes untuk situs kecil.

**Jangan:**
- Memblokir berdasarkan user-agent saja, atau sebaliknya mengizinkan berdasarkan user-agent saja. Keduanya bisa dipalsukan.
- Mengandalkan robots.txt untuk menghentikan scraper. Itu hanya dihormati bot yang patuh.
- Menjanjikan klien bahwa blokir bot palsu akan menaikkan peringkat. Tidak ada sumber resmi yang menyatakan itu.

Kontrol penggunaan konten untuk pelatihan AI adalah topik terpisah. Token seperti `Google-Extended` hanya bekerja pada crawler yang jujur. Bacaan lanjutan: [kontrol training AI bersama robots.txt Google](/blog/kontrol-training-ai-bersama-robots-txt-google).

## Apa yang belum diketahui

Beberapa hal tidak dijelaskan sumber yang saya baca, jadi jangan diklaim ke klien:

- Seberapa besar proporsi trafik "Googlebot" palsu di situs kecil di Indonesia. Tidak ada data publik yang saya temukan.
- Kapan atau apakah Google akan menerapkan Web Bot Auth untuk Googlebot. Illyes hanya membahasnya sebagai arah.
- Detail lengkap wawancara. Saya bergantung pada ringkasan Search Engine Roundtable dan laporan turunan, bukan transkrip.

## Checklist ringkas

- [ ] Log server bisa diekspor (cek akses hosting atau CDN lebih dulu).
- [ ] IP "Googlebot" diverifikasi dengan reverse DNS + forward DNS atau daftar JSON resmi.
- [ ] Laporan crawl hanya memakai trafik terverifikasi.
- [ ] Tidak ada blokir WAF berbasis user-agent semata.
- [ ] Keputusan blokir didokumentasikan dan disetujui klien.
- [ ] Angka log dibandingkan dengan laporan statistik crawl di GSC.

## Penutup

Pernyataan Illyes mengingatkan satu hal sederhana: user-agent adalah klaim, bukan bukti. Sebelum memakai log untuk diagnosis crawl atau memutuskan blokir, verifikasi dulu siapa yang sebenarnya mengetuk pintu. Dua perintah `host` sudah cukup untuk memulai.

---
title: "Standar UTM GA4: Pisahkan Iklan dan Organik"
description: "Panduan standar UTM untuk GA4: aturan source, medium, campaign, cara memisahkan iklan dari kanal organik, dan cara mengecek traffic yang masuk Unassigned."
pubDate: "2026-10-07"
date: "2026-10-07"
excerpt: "Satu salah ketik UTM bisa memindahkan iklan ke kanal organik. Buat kamus UTM, cocokkan dengan aturan channel GA4, lalu uji sebelum kampanye jalan."
category: "Digital Marketing"
tags: ["GA4", "UTM", "Google Analytics", "Digital Marketing", "Attribution"]
author: "Rafiq"
coverImage: ""
heroImage: ""
---

UTM adalah parameter di akhir URL yang memberi tahu Google Analytics dari mana sebuah kunjungan berasal. Masalahnya, GA4 tidak membaca maksud Anda. GA4 membaca nilai teks yang Anda kirim. Jika posting Instagram berbayar diberi `utm_medium=social`, kunjungan itu bisa terbaca sebagai sosial organik. Jika tim menulis `Meta` di satu link dan `meta` di link lain, laporan akan memecahnya menjadi dua baris.

Artikel ini fokus pada satu pekerjaan: **membuat standar UTM agar trafik iklan dan trafik organik terpisah dengan benar di GA4**. Untuk mengukur formulir sebagai lead, baca [7 cek mengukur lead formulir di GA4](/blog/ukur-lead-formulir-ga4/). Untuk merangkum metrik setelah data rapi, baca [panduan dashboard kustom GA4](/blog/dashboard-kustom-ga4-panduan-praktis/).

Riset pembaruan resmi pada 7 Oktober 2026 menemukan perubahan panduan konten generatif Google tertanggal 1 Oktober, tercatat di [changelog Search Central](https://developers.google.com/search/updates). Pembaruan itu menyelaraskan panduan dengan Search Quality Raters guidelines; **bukan pengumuman perubahan UTM atau atribusi GA4**. Karena itu, panduan tagging di bawah bersandar pada dokumentasi Analytics yang diperiksa langsung, bukan klaim bahwa ada fitur UTM baru dalam dua pekan terakhir.

## Kenapa standar UTM perlu ditulis

Google menyarankan agar setiap link kampanye selalu memakai tiga parameter: `utm_source`, `utm_medium`, dan `utm_campaign` ([Google Analytics Help: URL builders](https://support.google.com/analytics/answer/10917952?hl=en)). Dokumen yang sama menjelaskan bahwa parameter yang hilang dapat memunculkan nilai `(not set)` di laporan.

Nilai parameter juga peka huruf besar-kecil. Google memberi contoh `utm_source=google` dianggap berbeda dari `utm_source=Google`, dan `SpringSale` berbeda dari `Spring_Sale`. Karena itu Google menyarankan konvensi nama yang ketat dan huruf kecil sebagai standar ([Google Analytics Help: URL builders](https://support.google.com/analytics/answer/10917952?hl=en)).

Jadi, standar UTM bukan urusan kerapian semata. Tanpa standar, satu kampanye bisa tersebar ke beberapa baris, dan keputusan anggaran dibuat dari angka yang terpecah.

## 1. Pahami peran setiap parameter

Gunakan definisi resmi berikut sebagai dasar kamus internal ([Google Analytics Help: URL builders](https://support.google.com/analytics/answer/10917952?hl=en)):

- `utm_source`: asal rujukan, misalnya `google`, `newsletter4`, atau `billboard`.
- `utm_medium`: medium pemasaran, misalnya `cpc`, `banner`, atau `email`.
- `utm_campaign`: nama produk, promo, atau kampanye.
- `utm_content`: pembeda materi kreatif atau posisi tautan.
- `utm_term`: kata kunci berbayar.
- `utm_id`: ID kampanye.
- `utm_source_platform`: platform yang mengarahkan trafik, misalnya platform pembelian iklan.

Google juga mencatat bahwa `utm_creative_format` dan `utm_marketing_tactic` saat ini belum dilaporkan di properti Google Analytics. Jangan menjadikan dua parameter itu dasar laporan klien sebelum ada perubahan resmi.

Aturan praktisnya sederhana: **source menjawab "dari mana", medium menjawab "jenis kanal", campaign menjawab "untuk kampanye apa"**. Jangan memasukkan nama kampanye ke source, atau nama platform ke medium.

## 2. Pisahkan medium iklan dan organik

Medium adalah kunci pemisahan iklan dan organik. Dalam definisi Default channel group, GA4 memasukkan trafik manual ke **Paid Social** jika source cocok dengan daftar situs sosial dan medium cocok dengan pola `^(.*cp.*|ppc|retargeting|paid.*)$` ([Google Analytics Help: Default channel group](https://support.google.com/analytics/answer/9756891?hl=en)). Pola medium yang sama juga dipakai untuk Paid Search dan Paid Video, dengan daftar source yang berbeda.

Sebaliknya, **Organic Social** mencakup source yang cocok dengan daftar situs sosial, atau medium seperti `social`, `social-network`, `social-media`, dan `sm` ([Google Analytics Help: Default channel group](https://support.google.com/analytics/answer/9756891?hl=en)).

Contoh standar yang aman:

| Aktivitas | utm_source | utm_medium |
|---|---|---|
| Iklan Instagram | `instagram` | `paid_social` |
| Posting Instagram organik | `instagram` | `social` |
| Newsletter | `newsletter` | `email` |
| Artikel tamu di situs mitra | nama domain mitra | `referral` |

`paid_social` sejalan dengan contoh praktik terbaik Google yang memisahkan medium seperti `paid_social` dan `organic_search` ([Google Analytics Help: URL builders](https://support.google.com/analytics/answer/10917952?hl=en)). Nilai itu juga cocok dengan pola `paid.*` di aturan channel berbayar.

Satu catatan penting: nama source tetap harus dikenali dalam daftar sumber GA4 agar channel sosial terbaca. Karena isi daftar bisa berubah, uji satu klik terlebih dahulu sebelum menyebarkan link ke seluruh kampanye.

## 3. Jangan pakai UTM untuk menyamarkan trafik organik search

Organic Search di GA4 mencakup kunjungan dari tautan non-iklan di hasil pencarian, termasuk AI Overviews dan AI Mode Google ([Google Analytics Help: Default channel group](https://support.google.com/analytics/answer/9756891?hl=en)). Ini berbeda dari channel **AI Assistant**, yang mencakup sumber seperti ChatGPT, Gemini, Deepseek, Copilot, atau Grok, dan tidak mencakup AI Overviews maupun AI Mode.

Untuk channel AI Assistant, Google menjelaskan bahwa medium diset `ai-assistant` jika referrer cocok dengan daftar AI Assistant. Artinya, tim tidak perlu membuat UTM buatan untuk menebak trafik AI. Biarkan aturan bawaan bekerja, lalu catat batasannya saat membaca laporan.

UTM paling berguna pada link yang Anda kontrol: iklan, email, bio sosial, QR code cetak, kerja sama mitra, atau pesan broadcast. Google menjelaskan UTM sebagai parameter pada URL tujuan untuk link rujukan dan kampanye iklan ([Google Analytics Help: URL builders](https://support.google.com/analytics/answer/10917952?hl=en)).

## 4. Buat kamus UTM satu halaman

Kamus UTM cukup berupa spreadsheet bersama dengan kolom berikut:

1. Nilai `utm_source` yang diizinkan.
2. Nilai `utm_medium` yang diizinkan.
3. Pola `utm_campaign`, misalnya `2026-10_audit-website`.
4. Aturan `utm_content`, misalnya `story_a` atau `cta_footer`.
5. Pemilik kampanye dan tanggal mulai.
6. URL final yang sudah dites.

Gunakan huruf kecil. Pilih satu pemisah, misalnya tanda hubung untuk campaign dan garis bawah untuk medium. Setelah dipilih, jangan diganti di tengah kampanye.

Google menyarankan satu `utm_source` unik untuk setiap platform dan satu `utm_medium` unik untuk setiap kanal. Untuk campaign, Google menyarankan satu nama unik yang sama persis dengan nama kampanye, agar satu upaya pemasaran tidak terpecah ke beberapa baris ([Google Analytics Help: URL builders](https://support.google.com/analytics/answer/10917952?hl=en)).

Jika platform iklan mendukung parameter dinamis, Google juga menyarankan memakainya untuk mengurangi kesalahan input manual. Tetap cek hasilnya, karena format parameter dinamis berbeda di setiap platform.

## 5. Uji link sebelum kampanye tayang

Proses uji yang ringan:

1. Buat URL dengan Campaign URL Builder atau tulis manual sesuai kamus.
2. Buka link di browser yang bersih.
3. Pastikan halaman tujuan memuat normal dan parameter tidak hilang karena redirect.
4. Cek Realtime atau laporan **Acquisition > Traffic acquisition** setelah data tersedia.
5. Pastikan Session source/medium dan Session campaign sesuai rencana ([Google Analytics Help: URL builders](https://support.google.com/analytics/answer/10917952?hl=en)).

Perhatikan satu detail yang sering membuat bingung. Google menyebut informasi UTM tidak dimasukkan ke dimensi **Landing page + query string** dan **Page path + query string**. Informasinya diisi di dimensi **Page location**. Jika Anda mencari parameter UTM di laporan landing page dan tidak menemukannya, itu belum tentu berarti tagging gagal.

## 6. Audit trafik Unassigned dan (not set)

GA4 memakai nilai **Unassigned** ketika data tidak cocok dengan aturan channel mana pun ([Google Analytics Help: Default channel group](https://support.google.com/analytics/answer/9756891?hl=en)). Saat Unassigned naik, cek kombinasi source/medium yang paling banyak muncul.

Penyebab yang patut dicurigai:

- Medium buatan yang tidak dikenali, misalnya `ig_ads` atau `whatsapp_blast`.
- Parameter tidak lengkap sehingga muncul `(not set)`.
- Variasi huruf besar-kecil yang memecah source atau campaign.
- Medium organik dipakai untuk iklan, atau sebaliknya.

Default channel group tidak bisa diedit, tetapi Anda bisa membuat custom channel group dengan aturan sendiri ([Google Analytics Help: Default channel group](https://support.google.com/analytics/answer/9756891?hl=en)). Gunakan custom channel group untuk kebutuhan laporan internal. Namun, perbaiki penamaan UTM terlebih dahulu. Custom channel group tidak menggantikan disiplin input.

## Checklist sebelum laporan ke klien

- Semua link kampanye memakai `utm_source`, `utm_medium`, dan `utm_campaign`.
- Semua nilai memakai huruf kecil dan sesuai kamus.
- Iklan memakai medium yang cocok dengan aturan paid, misalnya `paid_social` atau `cpc`.
- Posting organik tidak memakai medium berawalan `paid`.
- Satu link sudah diuji dan terbaca di Traffic acquisition.
- Unassigned dan `(not set)` diperiksa sebelum angka kanal disimpulkan.
- Laporan menjelaskan bahwa AI Overviews dan AI Mode masuk Organic Search, bukan AI Assistant.

Standar UTM yang baik terasa membosankan, dan itu bagus. Tujuannya membuat data kampanye bisa dibandingkan dari bulan ke bulan tanpa debat tentang salah ketik. Jika Anda butuh audit tracking sebelum menjalankan kampanye website atau SEO, mulai dari halaman [jasa SEO](/jasa-seo/) dan siapkan daftar link kampanye yang sedang aktif.

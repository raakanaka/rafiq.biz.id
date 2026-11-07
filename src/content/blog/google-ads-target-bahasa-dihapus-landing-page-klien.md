---
title: "Target Bahasa Google Ads Dihapus: 5 Cek Landing Page Klien (2026)"
description: "Google Ads menghapus pengaturan bahasa tingkat kampanye di Search. Lima cek untuk klien dengan situs dua bahasa: bahasa iklan, landing page, dan struktur ad group."
pubDate: "2026-11-07"
date: "2026-11-07"
excerpt: "Setelan bahasa kampanye Search kini hilang. Iklan dicocokkan lewat bahasa iklan dan landing page. Lima cek untuk klien dengan situs dua bahasa."
category: "Digital Marketing"
tags: ["Google Ads", "Performance Max", "Language Targeting", "Landing Page", "Klien"]
author: "Rafiq"
coverImage: ""
heroImage: ""
---

Pekan ini pengelola akun Google Ads mulai melihat kampanye Search tanpa opsi **Languages**. Editor PPC Times membagikan tangkapan layar kampanye seperti itu pada 3 November 2026, menurut [PPC Times](https://ppctimes.com/news/google-ads-search-language-targeting-removed). Bagi freelancer web dan SEO yang mengelola landing page klien, perubahan ini menggeser tanggung jawab: bahasa yang dilayani ditentukan oleh isi iklan dan halaman tujuan, bukan lagi oleh kotak centang.

Artikel ini merangkum apa yang Google nyatakan, lalu lima cek yang bisa dikerjakan sebelum klien bertanya kenapa iklannya muncul ke audiens yang "salah".

## Apa yang berubah

Menurut [halaman bantuan Google Ads tentang language targeting](https://support.google.com/google-ads/answer/1722078?hl=en-AU):

- Pada kampanye Search, setelan bahasa tingkat kampanye dihapus. Iklan dicocokkan otomatis berdasarkan bahasa iklan.
- Pada Performance Max, setelan bahasa tidak lagi berlaku untuk iklan di Google Search Network. Perilakunya sama dengan kampanye Search biasa.
- Untuk channel lain di Performance Max (YouTube, Display, Discover, Gmail), pilihan bahasa tetap berlaku.
- Iklan Shopping di dalam Performance Max tidak terpengaruh.
- Google menyatakan tidak ada tindakan wajib dari pengiklan.

[Search Engine Land](https://searchengineland.com/google-ads-is-removing-language-targeting-from-search-campaigns-484831) menambahkan bahwa sinyal yang dipakai mencakup bahasa kata kunci pencarian, pengaturan bahasa pengguna, dan preferensi lain. Bila ada beberapa kampanye atau ad group yang memenuhi syarat, prioritisasi ad group berbasis AI memilih kandidat dengan bahasa paling relevan.

Soal waktu: halaman bantuan Google menyebut perubahan dimulai September 2026 dan tidak memberi tanggal selesai. Karena itu wajar jika sebagian akun belum terlihat berubah. Menurut [PPC Times](https://ppctimes.com/news/google-ads-search-language-targeting-removed), Google tidak menerjemahkan materi iklan, dan kampanye satu bahasa tetap berjalan seperti sebelumnya.

Untuk pengguna API, Search Engine Land mencatat Google menyarankan berhenti memakai kriteria bahasa saat membuat atau memperbarui kampanye Search. Upaya menambah atau mengubah `CampaignCriterion.language` pada kampanye Search akan mengembalikan error `ContextError.OPERATION_NOT_PERMITTED_FOR_CONTEXT`. Kriteria lama boleh tetap ada tetapi tidak lagi memengaruhi penargetan.

## Kenapa ini penting untuk klien lokal

Banyak klien di Indonesia punya situs Indonesia dengan sebagian halaman berbahasa Inggris: hotel, klinik, properti, ekspor, kursus. Pola umum sebelum ini: satu kampanye dipasang "Indonesia" dan bahasa tertentu, lalu kata kunci campuran dibiarkan.

Tanpa setelan bahasa, sistem melihat bahasa iklan, bahasa landing page, dan bahasa kueri. Kampanye yang disusun rapi per bahasa tidak terdampak. Kampanye yang mencampur bahasa dalam satu ad group paling rentan, sebab [MediaPost](https://www.mediapost.com/publications/article/417817/google-ads-to-eliminate-language-targeting-in-late.html) mengutip Ginny Marvin dari Google yang menyarankan pengiklan memastikan materi iklan dan landing page tersusun jelas dalam bahasa yang dituju.

Ini bukan alasan panik. Ini alasan merapikan.

## Lima cek sebelum laporan bulanan

### 1. Satu ad group, satu bahasa

Buka akun klien. Cari ad group yang headline-nya sebagian Indonesia dan sebagian Inggris. Pisahkan menjadi ad group (atau kampanye) per bahasa, masing-masing dengan kata kunci dan landing page yang sebahasa.

### 2. Landing page sebahasa dengan iklannya

Iklan Indonesia yang mengarah ke halaman Inggris, atau sebaliknya, adalah sumber ketidakcocokan paling mudah dicek. Pastikan URL akhir mengikuti bahasa iklan. Jika situs punya versi dua bahasa, tautkan ke halaman versi yang benar, bukan ke beranda yang beralih bahasa lewat skrip.

### 3. Atribut bahasa di HTML

Periksa `<html lang="id">` atau `lang="en"` di tiap templat, dan hreflang bila halaman punya padanan. Ini perbaikan SEO biasa, tetapi sekarang juga membantu kejelasan sinyal bahasa halaman tujuan. Google tidak menyebut atribut ini sebagai input khusus untuk iklan, jadi anggap ini praktik baik, bukan jaminan.

### 4. Kata kunci brand dan kueri tanpa bahasa jelas

Halaman bantuan Google menyebut untuk pencarian tanpa bahasa yang jelas, seperti nama merek, sistem memprioritaskan bahasa pilihan pengguna. Artinya pencarian brand klien bisa menayangkan iklan dalam bahasa yang tidak Anda duga. Siapkan iklan brand untuk tiap bahasa yang memang dilayani, atau terima bahwa satu bahasa akan dominan.

### 5. Catat baseline sebelum membandingkan

Ekspor laporan kata kunci pencarian dan laporan geografis 30 hari terakhir ke berkas. Jika bulan depan klik, biaya per konversi, atau istilah pencarian bergeser, Anda punya pembanding. Jangan menyimpulkan penyebab dari satu minggu data: perubahan ini bergulir bertahap, dan faktor musiman ikut bermain.

## Yang belum diketahui

Beberapa hal belum terjawab dari sumber yang dikutip di atas:

- Tanggal pasti perubahan selesai untuk semua akun.
- Seberapa besar pergeseran tayang iklan pada kampanye campuran bahasa.
- Apakah akan ada kontrol pengganti. Google belum menyebutkannya dalam dokumen yang dikutip.

Kalau ada klaim "iklan Anda akan turun X persen", anggap itu karangan. Belum ada data publik yang saya temukan untuk angka seperti itu.

## Cara menjelaskan ke klien

Pesan singkat yang bisa dipakai: "Google menghapus setelan bahasa di kampanye Search. Sekarang bahasa iklan dan halaman tujuan yang menentukan. Kampanye Anda sudah dipisah per bahasa, jadi tidak ada tindakan darurat. Saya cek tiga hal minggu ini dan lapor hasilnya."

Jika kampanye klien belum rapi, jadikan ini kesempatan menawarkan audit struktur akun sebagai pekerjaan kecil dengan lingkup jelas, bukan perbaikan tanpa batas. Tetapkan dulu apa yang diperiksa dan apa yang tidak, supaya tidak berubah menjadi pekerjaan tambahan yang tidak dibayar.

## Ringkasan

- Setelan bahasa kampanye Search dihapus; bahasa iklan dan landing page jadi penentu.
- Performance Max: setelan hanya berlaku di channel non-Search.
- Tidak ada tindakan wajib dari Google, tetapi struktur bahasa yang kacau lebih berisiko.
- Lima cek: ad group per bahasa, landing page sebahasa, atribut `lang`, iklan brand per bahasa, baseline data.

Untuk topik terkait, lihat [prioritas channel Display di Google Ads](/blog/google-ads-prioritas-channel-display-februari-2027/) dan [promosi otomatis Google Ads dari website](/blog/google-ads-promosi-otomatis-website/).

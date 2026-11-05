---
title: "Filter Multi-Select Negara dan Perangkat di Search Console: Cara Pakai untuk Laporan Klien"
date: "2026-11-05"
pubDate: "2026-11-05"
excerpt: "Search Console kini bisa pilih beberapa negara dan perangkat sekaligus. Begini cara memakainya agar laporan klien lebih rapi dan tidak menyesatkan."
description: "Search Console kini bisa pilih beberapa negara dan perangkat sekaligus. Begini cara memakainya agar laporan klien lebih rapi dan tidak menyesatkan."
category: "SEO Teknis"
tags: ["Search Console", "Laporan Klien", "Performance Report", "Filter", "Analytics"]
author: "Rafiq"
coverImage: ""
---

Search Console punya dua perubahan kecil di laporan Performance. Keduanya bisa menghemat waktu saat menyusun laporan bulanan klien. Filter negara sekarang bisa multi-select. Filter perangkat menyusul pada 4 November 2026.

Tidak ada update algoritma di sini. Ini murni perubahan antarmuka. Tetapi cara Anda memakainya menentukan apakah laporan klien jadi lebih jelas atau malah menyesatkan.

## Apa yang berubah

Dua perubahan, dua tanggal:

- **Negara, 6 Oktober 2026.** Google memungkinkan beberapa negara dicentang sekaligus di filter negara laporan Performance. Menurut [Search Engine Roundtable](https://www.seroundtable.com/google-search-console-performance-report-country-filters-42241.html), Google menulis di LinkedIn bahwa pembaruan ini mempermudah analisis pola traffic lintas negara dan perangkat. Kutipan Google: "If you operate in multiple countries, you can now view their combined Google Search traffic."
- **Perangkat, 4 November 2026.** Search Console kini bisa memilih lebih dari satu jenis perangkat. Pilihannya Desktop, Mobile, dan Tablet. Detailnya ada di [laporan Search Engine Roundtable](https://www.seroundtable.com/google-performance-report-multi-select-device-filters-42457.html). Penulisnya mengonfirmasi opsi itu muncul di akunnya sendiri.

Sebelumnya, filter hanya menerima satu nilai. Kalau ingin melihat Indonesia dan Malaysia bersama, Anda harus menjumlahkan dua tampilan secara manual. Itu lambat dan gampang salah hitung.

## Kenapa ini relevan untuk freelancer web dan SEO

Sebagian besar klien lokal tidak butuh filter negara. Traffic mereka hampir semua dari Indonesia. Tetapi ada beberapa kasus di mana fitur ini berguna:

1. **Klien dengan target regional.** Misalnya jasa ekspor atau wisata yang menarget Indonesia, Malaysia, dan Singapura. Sekarang ketiganya bisa digabung menjadi satu angka "pasar target".
2. **Memisahkan traffic yang bukan target.** Pilih hanya negara yang relevan, lalu bandingkan dengan seluruh dunia. Selisihnya menunjukkan seberapa besar impresi datang dari luar pasar klien.
3. **Laporan mobile vs non-mobile.** Pilih Desktop dan Tablet bersamaan, lalu bandingkan dengan Mobile saja. Cara ini membantu saat klien bertanya apakah halaman layanan mereka lebih sering dicari lewat ponsel.

Poin ketiga adalah pendapat saya, bukan klaim Google. Pengelompokan perangkat itu cuma cara membaca data. Tidak ada aturan bahwa Desktop plus Tablet harus dibandingkan dengan Mobile.

## Cara memakainya, langkah demi langkah

1. Buka Search Console dan pilih properti klien.
2. Masuk ke laporan **Performance** (Search results).
3. Klik chip filter **Country** atau **Device**.
4. Centang beberapa nilai, lalu klik **Update** atau **Apply**.
5. Catat filter yang dipakai di laporan. Ini langkah yang paling sering terlewat.

Poin kelima penting. Angka klik dan impresi dengan filter negara tertentu tidak bisa dibandingkan dengan angka bulan lalu yang tanpa filter. Tulis di setiap grafik filter apa yang aktif.

## Tiga jebakan yang perlu dihindari

**Pertama, jangan mengandalkan filter tersimpan.** Saya tidak menemukan keterangan resmi bahwa kombinasi filter tersimpan antar sesi. Anggap saja tidak. Ambil tangkapan layar atau ekspor data sebelum menutup halaman, lengkap dengan filter yang aktif.

**Kedua, jangan campur periode dan filter tanpa catatan.** Kalau bulan Oktober memakai filter satu negara dan bulan November memakai tiga negara, tren klik akan tampak naik padahal tidak ada perbaikan apa pun. Pakai definisi filter yang sama dari bulan ke bulan.

**Ketiga, jangan menjumlahkan impresi lintas tampilan secara manual.** Satu query bisa muncul di beberapa negara. Gunakan filter multi-select agar Search Console yang menghitung, bukan spreadsheet Anda. Hasilnya lebih konsisten.

## Cara menjelaskannya ke klien

Klien biasanya tidak peduli soal filter. Mereka ingin tahu apakah pencarian di area mereka naik. Format yang saya pakai:

- **Satu kalimat ringkasan.** Contoh: "Klik dari Indonesia dan Malaysia naik atau turun dibanding periode sebelumnya."
- **Satu baris definisi.** Contoh: "Filter: negara Indonesia + Malaysia, perangkat semua, 28 hari terakhir."
- **Satu tindakan.** Contoh: "Halaman layanan A mendapat impresi tinggi tapi klik rendah. Judul dan deskripsi akan diperbaiki."

Hindari menyebut angka tanpa definisi filter. Angka tanpa konteks mengundang pertanyaan yang sulit dijawab bulan depan.

## Yang belum berubah

Fitur ini tidak menambah data baru. Search Console tetap hanya menampilkan data pencarian Google, bukan GA4. Perubahan ini juga tidak memberi data klik untuk laporan AI. Penulis Search Engine Roundtable menutup artikel soal filter negara dengan catatan bahwa yang benar-benar ditunggu adalah data klik di laporan performa AI. Saya sependapat. Impresi saja belum cukup untuk laporan yang berbicara soal ROI.

Kalau Anda ingin tahu cara membaca laporan AI yang tersedia sekarang, lihat artikel saya soal [cara baca laporan AI di Search Console](/blog/cara-baca-laporan-ai-search-console) dan [laporan multimodal](/blog/laporan-multimodal-search-console).

## Ringkasan praktis

- Filter negara multi-select tersedia sejak 6 Oktober 2026, filter perangkat sejak 4 November 2026.
- Gunakan untuk klien dengan beberapa pasar target atau saat membandingkan kelompok perangkat.
- Selalu tulis filter yang aktif di setiap tabel dan grafik laporan.
- Jangan membandingkan angka berfilter dengan angka tanpa filter.
- Fitur ini mempermudah pembacaan data. Ia tidak mengubah ranking dan tidak menjadi bukti perbaikan.

Update antarmuka seperti ini mudah dilewatkan, tapi menghemat jam kerja bulanan. Cek akun Search Console klien Anda hari ini dan lihat apakah opsi multi-select sudah muncul. Google biasanya meluncurkan fitur bertahap, jadi akun yang berbeda bisa mendapat opsi pada waktu berbeda.

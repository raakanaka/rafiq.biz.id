---
title: "Berapa Lama Google Memproses Perubahan SEO? Data Oktober 2026"
description: "Rentang waktu crawling, indexing, site move, dan pemulihan core update yang dipaparkan Gary Illyes, plus cara memakainya untuk ekspektasi klien SEO."
pubDate: "2026-10-17"
date: "2026-10-17"
excerpt: "Data waktu proses Google dari Search Central Live Barcelona: indexing, canonical, site move, pemulihan core update, dan cara menjelaskannya ke klien."
category: "SEO Teknis"
tags: ["Crawling", "Indexing", "Site Move", "Core Update", "Manajemen Klien"]
author: "Rafiq"
coverImage: ""
heroImage: ""
---

Pertanyaan yang paling sering muncul setelah perbaikan SEO selesai dikerjakan: "Kapan hasilnya kelihatan?" Selama ini jawabannya sering mengambang. Pada 2 Oktober 2026, Gary Illyes dari Google memaparkan rentang waktu untuk proses crawling, indexing, dan serving di Search Central Live Deep Dive Europe, Barcelona. Angka ini memberi titik acuan yang lebih jelas, asalkan dipakai dengan hati-hati.

Artikel ini merangkum angka tersebut, batasannya, dan cara memakainya untuk menyusun ekspektasi bersama klien.

## Dari mana angka ini berasal?

Datanya bukan dokumen resmi Google. Angka-angka ini berasal dari recap peserta, terutama John Campbell dari agensi ROAST, yang lalu dikutip oleh [Search Engine Roundtable](https://www.seroundtable.com/google-crawling-indexing-serving-data-42225.html) dan [Search Engine Journal](https://www.searchenginejournal.com/google-crawling-indexing-recovery-timing-ranges/591829/). Menurut recap itu, setiap proses punya waktu tercepat, tipikal, dan terlambat, berdasarkan analisis internal Google.

Ada tiga batasan yang perlu disampaikan ke klien sejak awal:

- Slide belum muncul di halaman acara Search Central saat SEJ menulis laporannya. [Source](https://www.searchenginejournal.com/google-crawling-indexing-recovery-timing-ranges/591829/)
- Illyes sendiri menyebut slide itu sebagai latihan untuk melihat apakah audiens bisa mengaitkan angka internal dengan pengalaman mereka. [Source](https://www.seroundtable.com/google-crawling-indexing-serving-data-42225.html)
- Recap tidak menyebut ukuran sampel atau periode data. [Source](https://www.searchenginejournal.com/seo-pulse-google-spam-update-crawl-timing-ranges/592469/)

Jadi angka ini adalah rentang acuan, bukan tenggat. Jangan memasukkannya ke kontrak sebagai janji.

## Tabel ringkas: crawling

Berikut angka tahap crawling menurut tabel yang dimuat [Search Engine Roundtable](https://www.seroundtable.com/google-crawling-indexing-serving-data-42225.html):

| Proses | Tipikal | Paling lambat |
| --- | --- | --- |
| Penemuan URL baru | ~20 jam | Mingguan sampai tidak pernah |
| Refresh URL lama | ~30 hari | Mingguan sampai tidak pernah |
| Pemrosesan sitemap | ~24 jam | Hingga 14 hari, atau tidak pernah (kualitas) |
| Update robots.txt | ~24 jam | 25 jam |
| Update crawl demand | ~20 jam | Mingguan sampai bulanan |

Catatan penting dari recap: kapasitas crawl bisa turun dalam hitungan detik saat Google mengurangi crawl karena server kesulitan merespons. Pulihnya butuh lebih lama. Artinya, server yang sering timeout bisa memperlambat semua tahap berikutnya.

## Tabel ringkas: indexing

| Proses | Tipikal | Paling lambat |
| --- | --- | --- |
| Indexing end-to-end | ~1,5 jam | Bulanan atau tidak pernah (kualitas) |
| Perubahan canonical | 1–3 minggu | Bulanan (sinyal bertentangan) |
| Site move | 1–3 bulan | 6 bulan sampai lebih dari 1 tahun |
| Update structured data | Beberapa jam sampai 1–2 minggu | Mingguan atau tidak pernah (kualitas) |
| Rendering | Detik untuk render, jam di antrean | Hari sampai minggu |

Sumber: [Search Engine Roundtable](https://www.seroundtable.com/google-crawling-indexing-serving-data-42225.html). Recap juga mencatat site move kecil bisa selesai dalam beberapa minggu. Ini sejalan dengan [dokumentasi site move Google](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) yang menyebut situs kecil sampai menengah umumnya butuh beberapa minggu untuk sebagian besar halaman.

Perhatikan kata "end-to-end" pada indexing. Angka 1,5 jam berlaku setelah semua proses penting berhasil, bukan sejak artikel diterbitkan. URL tetap harus ditemukan dan di-crawl dulu.

## Tabel ringkas: serving dan pemulihan

| Proses | Tipikal | Paling lambat |
| --- | --- | --- |
| Update title dan snippet | 1–2 hari | Beberapa minggu sampai bulan |
| Penghapusan via Search Console (pemilik) | ~2 jam | 24 jam |
| Pencabutan manual action | 1–2 minggu | 4–6 minggu, lebih lama untuk situs tidak aktif |
| Dampak spam update | 1–2 minggu (berkelanjutan) | Bulanan |
| Pemulihan core update | 3–6 bulan | 6 bulan–1 tahun (core update berikutnya) |

Sumber: [Search Engine Roundtable](https://www.seroundtable.com/google-crawling-indexing-serving-data-42225.html).

## Pola yang paling berguna: delay menumpuk

Illyes mengingatkan bahwa proses-proses ini saling terhubung. Halaman tidak bisa diindeks sebelum di-crawl, jadi keterlambatan di satu tahap ikut terbawa ke tahap berikutnya. [Source](https://www.searchenginejournal.com/google-crawling-indexing-recovery-timing-ranges/591829/)

Contoh praktis. Kamu memperbaiki canonical pada 30 halaman produk:

1. Google harus menjadwalkan refresh halaman itu. Tipikalnya sekitar 30 hari untuk URL yang sudah dikenal.
2. Setelah di-crawl, perubahan canonical tipikalnya butuh 1–3 minggu.
3. Dokumentasi Google juga menyebut halaman bisa bertahan di cluster duplikat hingga dua minggu setelah konten diperbaiki. [Source](https://www.searchenginejournal.com/google-crawling-indexing-recovery-timing-ranges/591829/)

Jadi laporan "canonical belum berubah" pada minggu kedua belum tentu tanda perbaikan gagal.

## Kolom "tidak pernah" hampir selalu soal kualitas

Banyak baris di tabel punya ujung "tidak pernah", dan alasannya sering ditandai kualitas. Ini konsisten dengan pesan sesi lain di acara yang sama: kualitas menjadi penentu akhir saat retrieval, menurut kutipan recap ROAST yang dirangkum [Algo Blueprints](https://algoblueprints.com/search-central-live-barcelona-2026/).

Implikasinya untuk situs jasa: jika halaman baru tidak terindeks setelah berminggu-minggu, jangan buru-buru menyalahkan sitemap atau meminta indexing berulang kali. Cek dulu apakah halaman itu menjawab kebutuhan yang belum dijawab halaman lain. Halaman kota yang isinya sama dan hanya mengganti nama lokasi adalah contoh klasik yang bisa berakhir di kolom "tidak pernah".

## Cara memakai angka ini dengan klien

### 1. Tulis rentang di dokumen kerja, bukan tanggal

Contoh kalimat untuk proposal: "Perubahan title biasanya terlihat dalam hitungan hari, tapi bisa beberapa minggu. Kami cek ulang pada hari ke-7 dan ke-21." Sebutkan sumbernya sebagai paparan Google yang dilaporkan peserta, bukan janji.

### 2. Pisahkan pekerjaan cepat dan lambat

Kelompokkan pekerjaan berdasarkan tabel di atas:

- **Cepat (hari):** title, meta description, robots.txt, sitemap.
- **Menengah (minggu):** canonical, structured data, konsolidasi halaman duplikat.
- **Lambat (bulan):** migrasi domain, pemulihan setelah core update.

Laporan bulanan jadi lebih jujur karena klien tahu pekerjaan mana yang belum waktunya dinilai.

### 3. Tetapkan titik cek, bukan vonis

Untuk migrasi, angka tipikal 1–3 bulan berarti evaluasi pertama yang masuk akal ada di bulan ketiga. Menurut SEJ, migrasi yang belum beres di bulan ketiga sudah berada di ujung atas rentang tipikal. [Source](https://www.searchenginejournal.com/seo-pulse-google-spam-update-crawl-timing-ranges/592469/) Di titik itu baru wajar menggali penyebab: redirect berantai, sinyal canonical bertentangan, atau server lambat.

### 4. Jangan bereaksi saat update sedang berjalan

September 2026 spam update berjalan 24 September sampai 8 Oktober 2026. [Source](https://www.searchenginejournal.com/google-september-2026-spam-update-complete/592283/) Penurunan selama periode seperti itu belum tentu disebabkan update. Catat, bandingkan data Search Console sebelum, selama, dan sesudah, lalu putuskan setelah pola bertahan beberapa hari.

## Ringkasan

- Angka Illyes berasal dari recap peserta, bukan publikasi resmi Google. Pakai sebagai acuan.
- Penemuan URL baru tipikalnya sekitar 20 jam. Refresh URL lama sekitar 30 hari.
- Perubahan canonical 1–3 minggu, site move 1–3 bulan, pemulihan core update 3–6 bulan.
- Delay menumpuk antar tahap. Server yang sehat mempercepat semuanya.
- Ujung "tidak pernah" biasanya soal kualitas, bukan soal teknis.

Kalau kamu sedang menyiapkan migrasi atau perbaikan teknis dan butuh jadwal cek yang realistis, [hubungi saya untuk konsultasi](/contact/).

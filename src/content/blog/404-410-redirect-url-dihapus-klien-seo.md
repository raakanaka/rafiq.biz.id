---
title: "404 Bukan Penalti: 3 Langkah Tangani URL yang Dihapus (Panduan 2026)"
date: "2026-11-03"
pubDate: "2026-11-03"
excerpt: "Klien panik lihat daftar 404 di Search Console? Google menegaskan 404 bukan penalti. Pakai 3 langkah ini: redirect relevan, 404/410, perbaiki halaman 404."
description: "Klien panik lihat daftar 404 di Search Console? Google menegaskan 404 bukan penalti. Pakai 3 langkah ini: redirect relevan, 404/410, perbaiki halaman 404."
category: "SEO Teknis"
tags: ["404", "410", "Redirect", "Search Console", "Crawl Budget", "Laporan Klien"]
author: "Rafiq"
coverImage: ""
---

Salah satu pesan klien yang paling sering saya terima: "Kak, di Search Console ada 87 error 404. Itu bahaya, kan?" Biasanya disusul permintaan: "Redirect semuanya ke homepage saja."

Dua-duanya reaksi yang wajar, dan dua-duanya keliru. Akhir Oktober 2026 Google merilis video baru di seri *The Non-Canonical Cabinet* yang khusus membahas 404. Menurut [rangkuman Search Engine Roundtable](https://www.seroundtable.com/google-404-errors-42405.html), isinya bukan hal baru, tetapi ringkasan yang rapi untuk meluruskan mitos. Artikel ini menerjemahkannya jadi prosedur yang bisa kamu pakai saat menangani klien.

## Apa yang Google tegaskan soal 404

Berdasarkan rangkuman di atas, poin utamanya:

- **404 tidak menyebabkan penalti.** Artinya halaman tidak ditemukan. Google mengharapkan halaman hilang dari web dan akan menghapusnya dari indeks seiring waktu. 404 tidak merugikan halaman lain yang sehat di situs yang sama.
- **Tidak semua 404 harus diperbaiki.** Memperbaikinya adalah keputusan bisnis dan pengalaman pengguna, bukan kewajiban SEO.
- **Jangan redirect semua 404 ke homepage.** Redirect harus mengarah ke tujuan yang benar-benar relevan.
- **404 tidak menguras crawl budget.** Respons 404 normal tidak memakan kapasitas crawl sampai menurunkan perayapan sisa situs.
- **500 dan 429 yang berbahaya.** Error server dan "Too Many Requests" bisa menandakan server kewalahan, dan Google dapat memperlambat crawling sebagai respons.

Poin terakhir sejalan dengan [panduan crawl budget Google](https://developers.google.com/crawling/docs/crawl-budget) yang menyarankan mengembalikan 404/410 untuk halaman yang memang hilang dan menghindari soft 404.

## 3 langkah menangani URL yang dihapus

Video itu menawarkan kerangka tiga langkah. Saya tambahkan konteks kerja freelance.

### 1. Ada pengganti yang relevan? Redirect 301

Contoh: produk lama diganti versi baru, atau artikel digabung ke artikel yang lebih lengkap. Arahkan 301 ke halaman pengganti yang menjawab kebutuhan yang sama.

Uji sederhananya: jika pengunjung yang mengklik URL lama sampai di halaman tujuan, apakah dia merasa "ya, ini yang saya cari"? Jika tidak, jangan redirect.

### 2. Tidak ada pengganti? Biarkan 404 atau pakai 410

Halaman yang memang sudah tidak relevan, tidak punya padanan, ya dibiarkan hilang. Status 404 atau 410 sama-sama sah. Jangan memaksa redirect hanya demi "membersihkan" laporan.

### 3. Perbaiki halaman 404-nya

Halaman 404 yang baik tetap mengembalikan status HTTP 404, lalu memberi pesan jelas, kolom pencarian, dan tautan ke kategori atau konten utama. Ini murni untuk pengguna, dan di situs jasa bisa menyelamatkan calon klien yang nyasar.

## Kenapa redirect massal ke homepage merugikan

Ada tiga alasan praktis:

1. **Menyesatkan pengunjung.** Orang mencari artikel A, mendarat di homepage, lalu pergi.
2. **Data jadi kotor.** Di analytics, kunjungan ke URL lama tampak sebagai kunjungan homepage, jadi laporan tidak mencerminkan perilaku sebenarnya.
3. **Berpotensi dianggap soft 404.** Redirect ke halaman yang tidak relevan memberi sinyal bahwa tujuan tidak sepadan. Ini asumsi dari praktik umum, bukan pernyataan resmi dalam video tersebut, jadi perlakukan sebagai alasan tambahan, bukan alasan utama.

Sebaliknya, kasus soft 404 justru yang perlu diwaspadai. Search Engine Land pernah memuat [studi kasus soft 404 dan masalah indexing yang berujung kehilangan trafik besar](https://searchengineland.com/soft-404s-indexing-issues-traffic-collapse-477116). Perbaikannya: halaman yang memang tidak ada dikembalikan dengan status 404 atau 410 yang benar.

## Cara memilah daftar 404 di Search Console

Jangan menilai dari jumlah. Pilah berdasarkan nilai:

- **Punya trafik atau backlink?** Prioritas tinggi. Cari pengganti relevan lalu 301.
- **URL hasil ketikan, bot, atau parameter sampah?** Abaikan. Itu normal untuk situs apa pun.
- **Ada link internal yang masih mengarah ke sana?** Perbaiki link sumbernya. Ini kesalahan di situsmu sendiri.
- **Ada di sitemap?** Keluarkan dari sitemap. Sitemap sebaiknya hanya berisi URL yang berstatus 200 dan ingin diindeks.
- **Bukan 404 tapi 5xx atau 429?** Ini yang perlu diprioritaskan karena menyangkut kesehatan server.

## Template pesan ke klien

Saya pakai kalimat seperti ini saat klien khawatir:

> "Daftar 404 itu normal. Google sendiri menyatakan 404 tidak menyebabkan penalti dan tidak menguras crawl budget. Kami sudah memilah: X URL punya trafik dan sudah kami redirect ke halaman pengganti yang relevan, Y URL memang sudah tidak ada padanan dan kami biarkan, Z link internal yang rusak sudah diperbaiki."

Kalimat itu menunjukkan kamu tidak mengabaikan, tetapi juga tidak membuang waktu klien untuk hal yang bukan masalah.

## Kesalahan yang sering terjadi

- **Mengejar angka nol di laporan 404.** Targetnya bukan nol, melainkan tidak ada halaman bernilai yang hilang tanpa penanganan.
- **Mengubah 404 jadi 200 dengan pesan "halaman tidak ditemukan".** Itu soft 404. Status HTTP harus jujur.
- **Redirect chain.** Saat merapikan URL lama, arahkan langsung ke tujuan akhir, satu lompatan saja.
- **Menghapus banyak halaman saat Google sedang volatil tanpa pencatatan.** Catat tanggal dan daftar URL agar mudah ditelusuri jika trafik bergeser.

## Checklist singkat

1. Ekspor daftar 404 dari Search Console.
2. Kelompokkan: bernilai (trafik/backlink), link internal rusak, sampah.
3. Redirect 301 hanya jika ada pengganti relevan.
4. Perbaiki link internal dan bersihkan sitemap.
5. Pastikan halaman 404 mengembalikan status 404 dan punya navigasi bantu.
6. Pantau 5xx dan 429 di log server.
7. Laporkan ke klien dengan ringkasan tiga kelompok di atas.

## Penutup

404 bukan musuh. Yang merusak adalah redirect asal, soft 404, dan error server yang dibiarkan. Dengan kerangka tiga langkah dari Google, kamu bisa menjawab klien dengan tenang dan fokus pada perbaikan yang benar-benar berdampak.

Mau audit status HTTP dan struktur URL situsmu? Lihat [jasa SEO](/jasa-seo/) atau [hubungi saya](/contact/) untuk konsultasi.

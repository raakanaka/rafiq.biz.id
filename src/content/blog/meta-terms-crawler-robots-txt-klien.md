---
title: "Syarat Baru Meta 30 Oktober 2026: Cek robots.txt Situs Klien"
description: "Syarat Komersial Meta berlaku 30 Oktober 2026 dan memuat izin crawl situs bisnis. Ini crawler Meta, bedanya, dan cara memutuskan robots.txt klien."
pubDate: "2026-10-20"
date: "2026-10-20"
excerpt: "Syarat Komersial Meta berlaku 30 Oktober 2026. Pahami lima crawler Meta dan putuskan aturan robots.txt tiap klien."
category: "SEO Teknis"
tags: ["robots.txt", "Meta", "crawler AI", "SEO teknis", "klien"]
author: "Rafiq"
coverImage: ""
heroImage: ""
---

Syarat Komersial Meta yang baru dijadwalkan berlaku 30 Oktober 2026 bagi penggunaan bisnis, termasuk iklan dan pengelolaan Page. Menurut laporan Unite.AI, melanjutkan penggunaan setelah pemberitahuan pembaruan dianggap sebagai persetujuan. Salah satu klausulnya memberi Meta izin merayapi situs yang terkait dengan akun bisnis itu. Beberapa klien pasti bertanya: "Kak, data website kami dipakai melatih AI Meta, nggak?"

Jawaban jujurnya: teks syaratnya sendiri belum menyelesaikan pertanyaan itu. Yang bisa kamu kerjakan sebagai pengelola situs adalah memahami crawler Meta dan memutuskan aturan `robots.txt` per klien. Artikel ini merangkum fakta yang bisa diverifikasi, lalu memberi cara kerja yang aman.

## Apa yang sebenarnya berubah

Menurut [Search Engine Journal](https://www.searchenginejournal.com/metas-new-terms-expand-crawling-rights-beyond-advertisers/593217/), syarat baru Meta memperluas hak crawl ke situs yang terkait dengan pengguna bisnis, bukan hanya pengiklan. Rincian klausul saya ambil dari laporan [Unite.AI, 17 Oktober 2026](https://www.unite.ai/meta-rewrites-web-crawling-clause-in-pending-commercial-terms/):

- Syarat baru berlaku 30 Oktober 2026.
- Pengguna bisnis memberi izin kepada Meta untuk memakai bot, crawler, dan user agent untuk mengakses, mengindeks, men-cache, dan menarik pembaruan dari domain atau URL yang terkait dengan produk atau layanan mereka.
- Versi 16 Oktober memuat kalimat bahwa konten itu boleh dipakai untuk "train" produk Meta. Versi 17 Oktober tidak lagi memuat kata tersebut. Tujuannya kini ditulis sebagai menyediakan dan mengembangkan produk iklan dan bisnis serta menjaga integritas dan keamanan.

[Relevant Audience](https://www.relevantaudience.com/meta/meta-commercial-terms-crawling-ai-training-october-30-2026/) mencatat dua bacaan yang saling berlawanan. Pakar hukum yang dikutip Nieman Lab menilai redaksi awal cukup luas untuk mencakup situs penerbit. Juru bicara Meta menyebut praktik crawling tidak berubah dan pemilik konten tetap bisa mengatur akses lewat `robots.txt`. Relevant Audience juga mencatat bahwa teks pratinjau syarat itu sendiri tidak memuat komitmen `robots.txt` tersebut.

Artinya, ada janji lisan dan ada teks kontrak. Keduanya belum tentu sama. Saya bukan penasihat hukum. Kalau situs klien menjual konten sebagai produk utama (berita, kursus, riset), minta klien berkonsultasi dengan penasihat hukumnya.

## Lima crawler Meta yang perlu kamu bedakan

Dokumentasi resmi [Meta Web Crawlers](https://developers.facebook.com/documentation/sharing/webmasters/web-crawlers/) menjelaskan beberapa user agent dengan fungsi berbeda:

| Crawler | Fungsi menurut Meta | Patuh robots.txt? |
|---|---|---|
| `facebookexternalhit` | Mengambil judul, deskripsi, dan thumbnail saat tautan dibagikan | Bisa melewati robots.txt untuk cek keamanan atau integritas |
| `Meta-WebIndexer` | Meningkatkan kualitas hasil pencarian Meta AI; mengizinkannya membantu Meta mengutip dan menautkan konten | Ya |
| `Meta-ExternalAds` | Meningkatkan produk iklan dan bisnis | Ya |
| `Meta-ExternalAgent` | Melatih model AI fondasi atau mengindeks konten untuk produk Meta | Ya |
| `Meta-ExternalFetcher` | Mengambil tautan atas permintaan pengguna, termasuk kemampuan agen AI | Dapat melewati robots.txt |

Dua baris terakhir penting. `Meta-ExternalFetcher` dan sebagian perilaku `facebookexternalhit` tidak bisa kamu kendalikan hanya dengan `robots.txt`. Kalau klien ingin pembatasan nyata, itu perlu kontrol di sisi server atau CDN.

## Jangan blokir sembarangan

Jangan asal copy daftar "blokir semua crawler AI". Ada dua akibat buruk yang sering terjadi:

1. Memblokir `facebookexternalhit` merusak pratinjau tautan di Facebook, Instagram, dan Messenger. Padahal klien yang beriklan di Meta justru butuh pratinjau itu rapi. Dokumentasi Meta juga menyebut properti Open Graph harus berada dalam 1 MB pertama halaman, jadi periksa itu sebelum menyalahkan robots.txt.
2. Memblokir `Meta-WebIndexer` berarti kamu menolak kemungkinan dikutip di jawaban Meta AI. Untuk bisnis lokal yang ingin ditemukan, itu keputusan bisnis, bukan keputusan teknis.

Pola yang biasanya masuk akal untuk klien yang tidak menjual konten sebagai produk:

```
User-agent: meta-externalagent
Disallow: /

User-agent: *
Allow: /
```

Satu catatan: aturan di atas hanya mencegah `Meta-ExternalAgent`, yang menurut Meta dipakai untuk pelatihan model dan pengindeksan. Itu tidak memblokir crawler Meta lain, tidak memengaruhi Googlebot, dan tidak mengubah apa yang sudah terlanjur diambil. Menurut laporan Relevant Audience, Meta menyatakan perubahan `robots.txt` bisa memerlukan waktu hingga 24 jam karena crawler men-cache file ini.

Untuk klien yang justru ingin tampil di Meta AI, biarkan `Meta-WebIndexer` boleh akses dan hanya putuskan soal `Meta-ExternalAgent`. Sama seperti kontrol Google, ini bukan soal satu aturan untuk semua. Bahasan kontrol cuplikan di sisi Google ada di [kontrol cuplikan AI Google](/blog/kontrol-cuplikan-ai-google/).

## Alur kerja 15 menit per klien

1. **Daftar produk Meta yang dipakai klien.** Beriklan, Page bisnis, katalog produk, atau hanya tombol WhatsApp? Syarat baru menyebut penggunaan bisnis termasuk mengelola Page dan memakai katalog, bukan hanya iklan.
2. **Buka `robots.txt` live.** Pastikan file itu ada, dapat dibuka, dan tidak memblokir halaman yang butuh pratinjau tautan.
3. **Tanyakan posisi klien.** Apakah konten situs boleh dipakai pelatihan AI pihak ketiga? Catat jawabannya tertulis.
4. **Terapkan aturan per crawler**, bukan satu aturan massal. Uji dengan `curl` memakai user agent crawler terkait, lalu cek log server beberapa hari kemudian.
5. **Cek halaman di balik login atau paywall.** Teks syarat menyebut pembuatan kredensial uji. Meta menolak menjawab apakah kredensial itu dapat melewati paywall, menurut laporan Nieman Lab yang dikutip Relevant Audience. Jangan simpulkan dari sini, tapi pastikan konten berbayar benar-benar dilindungi di server, bukan hanya disembunyikan lewat CSS.
6. **Catat tanggal keputusan** di dokumen handover klien supaya perubahan kebijakan berikutnya mudah dilacak.

## Hubungannya dengan crawl budget

Crawler tambahan berarti beban server tambahan, terutama di hosting murah. Kalau situs klien sering lambat saat jam crawl, baca juga [crawl budget, URL sprawl, dan bot AI](/blog/crawl-budget-url-sprawl-ai-bot/). Ukur dulu dari log, jangan menebak: berapa permintaan dari user agent Meta per hari, dan apakah itu memicu error 5xx.

## Cara tahu kebijakanmu gagal

- Log server masih menampilkan user agent `meta-externalagent` mengakses halaman setelah masa cache yang disebut Meta. Periksa respons robots.txt dan cache CDN; user agent juga bisa dipalsukan, jadi cocokkan identitas crawler sebelum menyimpulkan pelanggaran.
- Pratinjau tautan di Facebook rusak setelah perubahan. Uji dengan Sharing Debugger dari Meta.
- Klien mendapat pertanyaan hukum yang tidak bisa kamu jawab. Itu tanda perlu penasihat hukum, bukan tambahan baris di `robots.txt`.

## Kesimpulan

Syarat baru Meta menambah satu agenda rutin: mengaudit `robots.txt` per klien sebelum 30 Oktober 2026. Pegang tiga hal. Pahami fungsi tiap crawler, putuskan per klien, dan jangan menjanjikan bahwa `robots.txt` menyelesaikan masalah kontraktual atau mengendalikan crawler yang memang dapat melewatinya. Teks syarat dan klaim Meta masih berbeda, jadi tulis batas ini di laporan ke klien.

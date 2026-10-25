---
title: "Pilot Cloudflare–OpenAI: 5 Hal yang Perlu Dicek di Situs Jasa Agar Mudah Ditemukan ChatGPT Search"
pubDate: "2026-10-25"
heroImage: ""
date: "2026-10-25"
description: "Cloudflare dan OpenAI melaporkan hasil awal pilot discovery. Ini artinya bagi situs jasa kecil: 404 jujur, tanpa duplikat, dan kontrol crawler."
excerpt: "Cloudflare dan OpenAI melaporkan hasil awal pilot discovery. Ini artinya bagi situs jasa kecil: 404 jujur, tanpa duplikat, dan kontrol crawler."
category: "AI & SEO"
tags: ["ChatGPT Search", "OAI-SearchBot", "Cloudflare", "Crawler", "SEO Teknis"]
author: "Rafiq"
coverImage: ""
---

Pada 15 Oktober 2026, Cloudflare dan OpenAI membagikan hasil awal dari riset pilot yang berjalan sejak Juli. Intinya: sinyal dari jaringan Cloudflare membantu crawler pencarian OpenAI menemukan halaman yang sebelumnya tidak diketahui. Menurut [postingan Cloudflare](https://blog.cloudflare.com/cloudflare-openai-discovery-agentic-web/), pilot ini memakai kohort sekitar 1% dari seluruh jaringan Cloudflare dan membuat OpenAI "menemukan dan mengindeks ratusan juta halaman baru".

Angka itu klaim kedua perusahaan sendiri. [Search Engine Journal](https://www.searchenginejournal.com/chatgpt-search-can-draw-on-more-pages-after-a-cloudflare-pilot/593720/) mencatat bahwa postingan tersebut tidak melaporkan seberapa sering halaman baru itu benar-benar dikutip di ChatGPT, dan tidak melaporkan jumlah kunjungan yang dihasilkan. Jadi jangan baca ini sebagai janji trafik.

Yang berguna untuk pemilik situs jasa bukan angkanya. Yang berguna adalah **apa yang dipelajari kedua perusahaan tentang halaman yang layak ditemukan**. Dari situ saya turunkan lima pengecekan praktis.

## Apa yang Sebenarnya Diumumkan

Ringkasnya, menurut postingan Cloudflare:

- Jaringan Cloudflare memberi sinyal yang membantu crawler pencarian OpenAI menemukan halaman baru.
- OpenAI tetap menilai dan meranking halaman itu sendiri berdasarkan relevansi dan manfaat.
- Sinyal tentang sebuah halaman "tidak memberi izin" untuk mengaksesnya. Pengaturan akses pemilik domain tetap berlaku.
- Riset ini memakai metadata web untuk pencarian dan penemuan, bukan membagikan isi halaman untuk training model.
- Menemukan halaman baru bisa lebih dulu menaikkan aktivitas crawling, sebelum akhirnya dikurangi lewat filtering.

Jadi pilot ini tentang **discovery** (halaman ditemukan), bukan tentang ranking atau jaminan dikutip.

## Pelajaran yang Relevan: Crawler Belajar Membuang Halaman Sampah

Bagian paling berguna ada di penjelasan tentang kualitas halaman. Kedua perusahaan menulis bahwa mereka belajar betapa mudahnya lalu lintas otomatis membuat halaman yang tidak ada tampak menarik:

1. Bot berulang kali meminta file yang tidak ada.
2. Sebagian situs mengalihkan hampir semua alamat ke homepage.
3. Sebagian alamat mengarah ke salinan konten yang sama.

Mengenali pola ini memungkinkan crawler memangkas pekerjaan sia-sia sebelum mengambil halamannya. Filtering "menjauhkan crawler dari halaman yang tidak ada atau yang dialihkan ke tempat lain".

Untuk situs jasa kecil, ini terjemahannya ke daftar cek sederhana.

## Cek 1: URL Ngawur Harus Mengembalikan 404 Asli

Buka alamat acak di situs Anda, misalnya `/halaman-tidak-ada-xyz/`, lalu lihat status HTTP-nya:

```bash
curl -sI https://domain-anda.com/halaman-tidak-ada-xyz/ | head -n 1
```

Hasil yang benar adalah `404`. Dua hasil yang salah:

- **200** dengan halaman "tidak ditemukan" (soft 404). Crawler mengira halaman itu ada.
- **301/302 ke homepage**. Persis pola yang disebut Cloudflare dan OpenAI sebagai sinyal kualitas rendah.

Panduan Google soal status HTTP juga membedakan error sungguhan dari halaman yang terlihat normal. Kalau Anda belum membacanya, lihat dokumentasi [HTTP status code dan masalah jaringan](https://developers.google.com/search/docs/crawling-indexing/http-network-errors).

## Cek 2: Jangan Alihkan Semua ke Homepage

Redirect memang benar dipakai untuk halaman yang sudah pindah. Tapi redirect massal ke homepage untuk URL yang tidak relevan adalah kebiasaan lama dari migrasi yang malas. Pindahkan halaman lama ke halaman pengganti yang **topiknya sama**. Kalau tidak ada padanannya, biarkan 404 atau 410.

## Cek 3: Satu Konten, Satu URL

Pilot ini menyebut alamat yang mengarah ke salinan konten yang sama sebagai masalah. Di situs jasa, sumbernya biasanya:

- Versi dengan dan tanpa trailing slash.
- Parameter pelacakan (`?utm_source=...`) yang ikut terindeks.
- Halaman per kota atau per layanan yang isinya hanya berganti nama kota.

Untuk poin ketiga, jangan menambah halaman demi menangkap lebih banyak query. Halaman per area hanya layak ada kalau memuat isi yang benar-benar berbeda, misalnya proyek lokal, konteks pasar setempat, atau data faktual wilayah. Selebihnya cukup satu halaman layanan yang kuat. Soal URL sprawl sudah saya bahas di [artikel crawl budget dan AI bot](/blog/crawl-budget-url-sprawl-ai-bot/).

Pasang `rel="canonical"` yang konsisten ke versi utama, dan masukkan hanya versi utama ke sitemap.

## Cek 4: Putuskan Sikap ke Crawler OpenAI, Per Fungsi

OpenAI mendokumentasikan beberapa crawler dengan fungsi berbeda di [halaman bots-nya](https://platform.openai.com/docs/bots). Dua yang paling sering tercampur:

- `OAI-SearchBot`: berkaitan dengan kemunculan di ChatGPT Search.
- `GPTBot`: berkaitan dengan training model.

Memblokir `GPTBot` tidak sama dengan memblokir `OAI-SearchBot`. Kalau tujuan Anda lead generation, tanyakan dulu: apakah saya ingin halaman layanan bisa muncul sebagai sumber di ChatGPT Search? Kalau ya, jangan blokir `OAI-SearchBot` hanya karena ingin menolak training. Contoh `robots.txt` yang memisahkan keduanya:

```txt
User-agent: OAI-SearchBot
Allow: /

User-agent: GPTBot
Disallow: /

User-agent: *
Allow: /
```

Ini contoh, bukan rekomendasi universal. Kebijakan training adalah keputusan pemilik situs. Yang penting, keputusan itu sadar dan tercatat, bukan hasil bawaan plugin keamanan.

Kalau situs Anda lewat Cloudflare, cek juga fitur [AI Crawl Control](https://developers.cloudflare.com/ai-crawl-control/) yang disebut Cloudflare di postingannya untuk melihat dan mengatur akses sistem AI. Pastikan aturan WAF atau bot fight tidak tanpa sengaja menolak crawler yang Anda izinkan di `robots.txt`.

## Cek 5: Halaman Penting Harus Bisa Dibaca Tanpa JavaScript

Crawler pencarian lebih mudah memproses halaman yang isinya sudah ada di HTML awal. Cek cepat:

```bash
curl -s https://domain-anda.com/jasa-seo/ | grep -c "<h1"
```

Kalau judul dan isi utama tidak muncul di respons mentah, perbaiki rendering sebelum memikirkan hal lain. Situs Astro dengan output server atau statis biasanya aman di poin ini. Situs yang mengisi konten lewat JavaScript di klien perlu dicek ulang.

## Apa yang Tidak Perlu Dilakukan

- **Tidak perlu daftar atau membayar apa pun** untuk "masuk ke pilot". Postingan tidak menjelaskan mekanisme opt-in atau opt-out, dan peserta tidak disebutkan.
- **Tidak perlu membuat ratusan halaman baru** supaya banyak yang "ditemukan". Postingan justru menekankan penyaringan halaman yang tidak punya nilai khas.
- **Tidak perlu berjanji ke klien** bahwa ChatGPT akan mengirim trafik. Datanya belum ada.

## Cara Mengukur Tanpa Mengarang Hasil

Karena belum ada data publik tentang dampaknya, ukur sendiri:

1. Lihat log server atau dashboard Cloudflare untuk permintaan dari `OAI-SearchBot`. Catat apakah volumenya naik setelah halaman baru terbit.
2. Di GA4, perhatikan channel AI Assistants (diluncurkan Mei 2026). Saluran ini hanya menghitung kunjungan yang membawa referrer, jadi pasti mengecilkan angka sebenarnya.
3. Tanyakan ke lead baru: "Tahu kami dari mana?" Jawaban "dari ChatGPT" sering tidak terlihat di analytics.

Tanda bahwa perbaikan berhasil: respons 404 benar untuk URL acak, tidak ada URL duplikat di sitemap, dan halaman layanan inti terbaca di HTML mentah. Tanda gagal: crawler AI tetap menerima banyak 200 atau redirect untuk URL yang tidak ada.

## Ringkasan

Pilot Cloudflare dan OpenAI adalah hasil awal yang dilaporkan sendiri oleh perusahaan, tanpa data kutipan atau kunjungan. Pelajarannya untuk situs jasa kecil tetap praktis: 404 yang jujur, redirect yang relevan, satu konten satu URL, sikap yang jelas per crawler, dan konten yang bisa dibaca tanpa JavaScript. Semua itu murah dicek, dan tidak bergantung pada keputusan platform mana pun.

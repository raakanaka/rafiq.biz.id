---
title: "Laporan Multimodal Search Console: Panduan 2026"
description: "Search Console kini melaporkan pencarian lewat gambar: Lens, Circle to Search, upload gambar. Cara membaca datanya dan apa yang perlu dibenahi di website."
pubDate: "2026-09-26"
heroImage: ""
tags: ["Search Console", "Google Lens", "Multimodal Search", "Image SEO", "SEO 2026"]
---

Sampai minggu lalu, kalau ada orang memotret produk Anda dengan Google Lens lalu menemukan website Anda, Search Console tidak mencatatnya secara terpisah. Sekarang sudah. Pada 24 September 2026 Google mengumumkan pelaporan **web multimodal search** di Search Console — di laporan Performance untuk hasil Search dan di laporan Generative AI features ([Google Search Central Blog](https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc)).

Artikel ini merangkum apa yang benar-benar diumumkan, apa yang tidak ada di datanya, dan langkah praktis untuk website bisnis di Indonesia — terutama toko online, katalog produk, dan website jasa yang banyak menampilkan foto.

## Apa itu pencarian multimodal di Search Console?

Pencarian multimodal adalah pencarian web di mana **gambar dipakai sebagai bagian dari query**. Menurut pengumuman Google, datanya mencakup empat sumber ([Google Search Central Blog](https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc)):

1. Pencarian dengan **Google Lens**.
2. **Circle to Search** di Android.
3. **Upload gambar** ke Google Search.
4. Klik kanan **"Search this image"** di Chrome.

Dokumentasi Performance report sekarang membagi search type "Web" menjadi dua: **Web: text-based** (query teks biasa di kotak pencarian) dan **Web: multimodal** (hasil web di mana gambar dipakai dalam pencarian) ([Google Search Console Help](https://support.google.com/webmasters/answer/7576553)).

Satu poin penting: John Mueller mengonfirmasi bahwa data ini sebelumnya tidak dilacak atau ditampilkan di Search Console, jadi ini **data baru**, bukan potongan dari angka lama yang diberi label ulang — seperti dilaporkan [Productrise](https://productrise.app/blog/google-search-console-multimodal-search-data) merujuk liputan [Search Engine Roundtable](https://www.seroundtable.com/google-search-console-multimodal-search-type-filter-42156.html).

## Data apa yang tersedia — dan apa yang tidak

### Yang tersedia

Metrik standar Performance report tetap ada: **clicks, impressions, CTR, dan average position**, bisa dipecah per halaman, negara, device, dan tanggal ([Productrise](https://productrise.app/blog/google-search-console-multimodal-search-data)). Data bisa diekspor lewat tombol Export ([Google Search Central Blog](https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc)).

### Yang tidak tersedia

**Tidak ada data query.** Karena pencarian berawal dari gambar, dimensi Queries dihapus untuk search type ini ([Google Search Console Help — dimensions](https://support.google.com/webmasters/answer/17011259)). Anda tahu *halaman mana* yang muncul, tapi tidak tahu *apa* yang difoto atau ditanyakan pengguna.

### Kapan data muncul

Rollout global dimulai 24 September 2026. Metrik muncul kalau situs Anda memang mendapat traffic dari pencarian jenis ini ([Google Search Central Blog](https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc)). Kalau filter multimodal kosong, artinya belum ada impression — bukan error.

## Cara membuka laporannya (4 langkah)

1. Buka **Search Console → Performance → Search results**.
2. Klik filter **Search type** di atas grafik.
3. Pilih **Web: multimodal**.
4. Ganti tab tabel ke **Pages**, lalu urutkan berdasarkan Impressions.

Untuk laporan AI, ulangi di **Generative AI features** report — Google menyebut filter multimodal juga tersedia di sana ([Google Search Central Blog](https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc)).

Tips: gunakan fitur **Compare** di filter search type untuk membandingkan text-based vs multimodal pada halaman yang sama. Halaman dengan impression multimodal tinggi tapi CTR rendah adalah kandidat perbaikan pertama.

## Kenapa ini relevan untuk bisnis di Indonesia

Tidak ada angka resmi Google tentang porsi pencarian gambar di Indonesia, jadi saya tidak akan mengarang persentase. Yang bisa dipastikan: sebelum laporan ini, pemilik website **tidak punya data first-party sama sekali** untuk menilai apakah foto produk mereka ditemukan lewat kamera. Sekarang ada.

Jenis website yang paling layak memeriksa laporan ini:

- **Toko online dan UMKM retail** — produk fisik yang mudah difoto (fesyen, sepatu, suku cadang, peralatan).
- **Katalog B2B dan eksportir** — pembeli sering tidak tahu nama teknis barang, jadi mencari lewat foto.
- **Travel dan properti** — foto tempat dan bangunan.
- **Website portofolio** — desain, interior, arsitektur.

Website jasa murni tanpa gambar produk kemungkinan hanya akan melihat angka kecil. Itu wajar.

## Cara Google mencocokkan foto dengan produk

Productrise menjelaskan bahwa ketika seseorang mencari dengan foto, Google perlu mencocokkannya dengan produk yang ia kenal di **Shopping Graph** — database produk, penjual, harga, ulasan, dan gambar. Data itu diambil antara lain dari **feed Merchant Center** dan **structured data** di halaman produk, dan keduanya harus konsisten ([Productrise](https://productrise.app/blog/google-search-console-multimodal-search-data)). Ini klaim analis pihak ketiga, bukan dokumentasi resmi mekanisme Lens — perlakukan sebagai hipotesis yang layak diuji dengan data Anda sendiri.

Yang resmi dari Google: praktik terbaik gambar ada di [panduan Google Images SEO](https://developers.google.com/search/docs/appearance/google-images), dan properti `image` termasuk dalam [structured data Product](https://developers.google.com/search/docs/appearance/structured-data/product).

## Catatan: Search Console bisa lebih rendah dari Merchant Center

Search Console menghitung impression di level URL: impression baru tercatat saat URL situs Anda benar-benar tampil. Untuk listing produk, sering kali pengguna harus mengklik listing dulu sebelum daftar penjual muncul. Merchant Center menghitung di level produk dan mencakup surface lain di luar Search, sehingga angkanya bisa lebih besar. Kesimpulan Productrise: laporan multimodal **mungkin menampilkan angka lebih kecil** dari kemunculan produk sebenarnya ([Productrise](https://productrise.app/blog/google-search-console-multimodal-search-data)). Jangan panik kalau angkanya tidak cocok antar-tool.

## Checklist tindakan

| Prioritas | Aksi | Alasan |
|-----------|------|--------|
| Tinggi | Buka filter **Web: multimodal**, ekspor 28 hari terakhir | Baseline sebelum mengubah apa pun |
| Tinggi | Bandingkan 10 halaman impression tertinggi vs halaman produk sejenis yang nyaris nol | Cari pola: jumlah, kualitas, dan variasi sudut foto |
| Tinggi | Validasi **Product structured data** (`image`, `offers`, nama produk) dengan Rich Results Test | Data produk di halaman harus konsisten dengan feed |
| Sedang | Cek alt text dan nama file gambar sesuai [panduan Google Images](https://developers.google.com/search/docs/appearance/google-images) | Konteks teks membantu Google memahami gambar |
| Sedang | Pastikan gambar penting ada di sitemap — lihat [image sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps) | Mempercepat penemuan gambar baru |
| Rendah | Cek ulang laporan tiap 2–4 minggu | Data baru butuh waktu terkumpul |

## Cara tahu perubahan Anda berhasil

Tanpa data query, ukurannya adalah **impression dan klik multimodal per halaman**. Setelah menambah foto atau membenahi structured data pada sekelompok halaman, bandingkan periode 28 hari sebelum dan sesudah pada halaman yang sama. Kalau angka tidak bergerak setelah 4–6 minggu, perubahan itu bukan faktor penentu — pindah ke hipotesis berikutnya. Jangan simpulkan dari satu minggu data.

## Kesimpulan

Laporan multimodal tidak mengubah cara ranking bekerja; ia membuka data yang sebelumnya tidak terlihat. Nilainya ada di perbandingan antar-halaman: halaman mana yang ditemukan lewat kamera, dan apa bedanya dengan yang tidak. Mulai dari baseline hari ini, perbaiki gambar dan data produk di halaman yang paling berpotensi, lalu ukur.

Butuh bantuan audit gambar produk dan structured data website Anda? [Hubungi saya](/contact/) untuk konsultasi SEO teknis.

---

**Sumber:**

- [Google Search Central Blog — Announcing web multimodal Search performance reporting in Search Console (24 Sep 2026)](https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc)
- [Google Search Console Help — Performance report overview](https://support.google.com/webmasters/answer/7576553)
- [Google Search Console Help — Dimensions and data groupings](https://support.google.com/webmasters/answer/17011259)
- [Productrise — Google Search Console now shows multimodal search data](https://productrise.app/blog/google-search-console-multimodal-search-data)
- [Search Engine Roundtable — multimodal search type filter](https://www.seroundtable.com/google-search-console-multimodal-search-type-filter-42156.html)
- [Google Search Central — Google Images SEO best practices](https://developers.google.com/search/docs/appearance/google-images)

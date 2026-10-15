---
title: "Bing Topics Portfolio: Cara Membaca Celah Sitasi AI untuk Konten Anda"
description: "Bing Webmaster Tools menambah Topics Portfolio di laporan AI Performance. Begini cara membacanya, apa batasnya, dan cara mengubahnya jadi daftar kerja konten."
pubDate: "2026-10-15"
date: "2026-10-15"
excerpt: "Topics Portfolio di Bing Webmaster Tools menunjukkan topik tempat situs Anda dikutip AI dan query yang dikutip untuk situs lain. Ini cara memakainya."
category: "AI & SEO"
tags: ["Bing Webmaster Tools", "AI Performance", "Copilot", "GEO", "Konten"]
author: "Rafiq"
coverImage: ""
heroImage: ""
---

Selama ini kita hanya bisa melihat satu sisi: di mana situs kita sudah dikutip AI. Bing baru menambah sisi lainnya. Microsoft meluncurkan fitur beta bernama **Topics Portfolio** di laporan AI Performance dalam Bing Webmaster Tools. Fitur ini mengelompokkan query yang membuat situs Anda dikutip jawaban AI ke dalam topik yang lebih luas, lalu menampilkan query di topik itu di mana situs lain dikutip tetapi situs Anda tidak ([Search Engine Journal, 13 Oktober 2026](https://www.searchenginejournal.com/bing-webmaster-tools-topics-portfolio-ai-performance/592874/)).

Tulisan ini merangkum apa yang dilaporkan, apa batasnya, dan bagaimana saya akan memakainya untuk perencanaan konten. Semua detail fitur di bawah mengacu pada laporan SEJ tersebut dan [pengumuman Bing](https://blogs.bing.com/webmaster/2026/10/introducing-topics-portfolio-beta-in-ai-performance/) yang ditautkannya. Saya belum mencoba fitur ini langsung di akun Webmaster Tools, jadi bagian "cara memakai" adalah pendapat saya, bukan hasil uji.

## Apa itu Topics Portfolio?

Topics Portfolio adalah tab baru di bagian AI Performance, di sebelah kanan tab Citations & Pages. Isinya berbasis **grounding queries**, yaitu istilah pencarian yang dipakai AI Bing untuk menemukan konten dan mengutipnya. Menurut SEJ, ini berlaku untuk Copilot, ringkasan AI Bing, dan sejumlah integrasi mitra.

Layar pertama menampilkan topik di mana Bing menilai situs Anda punya kehadiran yang "meaningful". Tiap topik membawa tiga metrik:

- **Topic Size**: estimasi total sitasi dari semua situs untuk topik itu pada rentang waktu yang dipilih. Bing menggambarkannya sebagai gambaran permintaan di pencarian AI.
- **Sites Cited**: perkiraan jumlah situs yang muncul untuk query dalam topik tersebut.
- **Queries**: perkiraan jumlah grounding query berbeda dalam topik.

Di bawah tabel ada daftar **Top Opportunity Queries**: query lintas topik di mana situs lain dikutip tetapi situs Anda tidak. Angka sitasi di daftar ini ditampilkan dalam bentuk rentang, bukan angka pasti.

Klik satu topik dan Anda masuk ke halaman detail dengan ukuran topik, jumlah sitasi Anda, dan jumlah query. Ada dua tabel: query yang sudah mengutip situs Anda, dan query peluang. Rentang data bisa satu, dua, atau tiga bulan.

## Apa yang berbeda dari rilis Juni?

AI Performance masuk public preview pada Februari. Pembaruan Juni menambah Topics, Intents, Citation Share, dan Compare, tetapi label topik waktu itu hanya mengelompokkan query tempat situs Anda sudah dikutip. Menurut SEJ, yang baru sekarang adalah:

1. Total sitasi tingkat topik untuk semua situs.
2. Daftar query yang **belum** mengutip situs Anda.
3. Konteks ekosistem: ukuran topik dan jumlah situs lain.

Itu tiga hal yang sebelumnya tidak bisa dilihat dari laporan.

## Batasan yang perlu Anda tahu

Jangan baca fitur ini seperti laporan ranking. Beberapa catatan dari laporan SEJ:

- **Tidak semua situs akan melihatnya.** Tampilan ini hanya muncul jika Bing punya cukup data tentang situs Anda. Topik dengan kehadiran situs atau aktivitas ekosistem terlalu kecil tidak ditampilkan. Situs kecil bisa melihat lebih sedikit item, atau tidak melihat fitur ini sama sekali.
- **Topik dibuat oleh AI.** Sebuah query bisa masuk label yang berbeda dari yang Anda bayangkan.
- **Query brand kompetitor bisa muncul sebagai peluang.** Contoh dari Microsoft: situs sepatu yang melihat pencarian merek pesaing sebagai peluang di topik Running Shoes. Itu bukan celah konten yang layak dikejar.
- **Angka berbentuk estimasi dan rentang.** Microsoft sendiri menulis: "Treat the numbers as directional signals for planning, not as a precise ledger."
- **Masih beta, tanpa tanggal keluar beta.** Halaman bantuan AI Performance Bing belum membahas Topics Portfolio saat SEJ menulis laporannya.
- **Citation Share tidak membuka nama pesaing.** Bing menyatakan metrik itu hanya menunjukkan porsi Anda relatif terhadap yang lain, tanpa data domain lain.

## Cara saya memakainya untuk perencanaan konten

Bagian ini pendapat saya, bukan klaim Bing.

**1. Mulai dari topik, bukan dari query.** Lihat topik di mana Topic Size besar dan sitasi Anda kecil. Itu tempat permintaan ada, tetapi Anda belum jadi rujukan.

**2. Saring query peluang secara manual.** Buang query merek pesaing, query yang di luar layanan Anda, dan query yang niatnya tidak cocok dengan bisnis Anda. Sisanya baru jadi kandidat.

**3. Cek dulu apakah Anda sudah punya halamannya.** Sebelum menulis artikel baru, cari di situs sendiri. Sering kali jawabannya sudah ada tetapi terkubur, terlalu umum, atau tidak menjawab pertanyaan secara langsung. Memperbaiki halaman lama lebih murah daripada membuat halaman baru yang bersaing dengan halaman sendiri.

**4. Tulis hanya jika Anda punya sesuatu yang belum ada.** Pengalaman proyek, data sendiri, atau langkah kerja yang bisa diverifikasi. Menulis ulang apa yang sudah dikutip situs lain tidak memberi alasan bagi AI untuk memilih Anda.

**5. Gunakan tombol feedback.** Tiap baris punya jempol atas dan bawah. Menurut SEJ, penilaian itu masuk ke tim yang menangani klasifikasi dan pemilihan peluang. Menandai query brand pesaing sebagai tidak relevan membantu memperbaiki daftar.

## Apakah ini penting untuk Google?

Tidak langsung. Ini data Bing, bukan Google. Google sendiri menyatakan dalam [panduan optimasi fitur AI generatif](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) bahwa tidak perlu file, markup, atau penulisan ulang khusus untuk fitur AI, dan bahwa hal ini tetap SEO yang sama. Karena itu, saya memperlakukan data Bing sebagai **sinyal tambahan untuk menemukan celah topik**, bukan alasan untuk mengubah struktur situs. Untuk membaca data AI di sisi Google, lihat tulisan saya tentang [cara baca laporan AI di Search Console](/blog/cara-baca-laporan-ai-search-console/).

Bing tetap relevan karena Copilot dan ringkasan AI-nya memakai indeks Bing. Kalau situs Anda belum diverifikasi di Bing Webmaster Tools, verifikasi adalah langkah pertama. Tanpa itu Anda tidak punya data apa pun untuk dibaca.

## Contoh alur kerja untuk situs jasa

Misalkan Anda penyedia jasa web atau SEO di kota Anda. Alur sederhananya:

1. Buka AI Performance, tab Topics Portfolio, rentang tiga bulan agar data lebih stabil.
2. Catat tiga topik dengan Topic Size terbesar yang relevan dengan layanan Anda.
3. Di tiap topik, ambil maksimal lima query peluang yang benar-benar sesuai jasa Anda.
4. Cocokkan dengan halaman yang sudah ada. Tandai: sudah menjawab, menjawab sebagian, atau belum ada.
5. Perbaiki yang "sebagian" dulu. Tambahkan jawaban langsung di awal, bukti pengalaman, dan tautan internal.
6. Buat halaman baru hanya untuk yang "belum ada" dan punya maksud pencarian yang berbeda dari halaman lain.
7. Cek lagi bulan depan. Perhatikan arah, bukan angka persisnya, karena datanya berbentuk rentang.

Dengan cara ini Anda tidak membuat puluhan halaman tipis hanya karena sebuah daftar menyebut query tertentu. Itu bisa berujung pada konten massal yang melanggar kebijakan spam Google.

## Yang masih belum diketahui

- Apakah fitur ini akan tersedia untuk situs kecil. Bing sendiri menyebut data bisa tidak cukup.
- Kapan keluar dari beta.
- Seberapa akurat pengelompokan topik untuk bahasa Indonesia. Laporan SEJ tidak membahas dukungan bahasa, jadi saya tidak berani mengklaim apa pun.

## Kesimpulan

Topics Portfolio memberi satu hal yang sebelumnya tidak ada: gambaran kasar tentang topik tempat AI Bing mengutip situs lain tetapi tidak Anda. Pakai sebagai daftar awal untuk audit celah konten, saring dengan penilaian sendiri, dan jangan mengejar angka. Kalau situs Anda belum terverifikasi di Bing Webmaster Tools, mulai dari situ.

Butuh bantuan menyusun audit celah konten untuk situs bisnis Anda? [Hubungi saya untuk konsultasi](/contact/).

---
title: "Server Islands vs HTML Statis: Mana yang Menekan TBT?"
date: "2026-10-11"
pubDate: "2026-10-11"
description: "Server Islands Astro tidak otomatis memangkas Total Blocking Time. Pahami kapan HTML statis, server:defer, atau client directive yang tepat untuk ponsel."
excerpt: "Server Islands Astro tidak otomatis memangkas TBT. Pahami kapan HTML statis, server:defer, atau client directive yang tepat untuk ponsel."
category: "Web Development"
tags: ["Astro", "Server Islands", "Total Blocking Time", "INP", "Web Performance"]
author: "Rafiq"
coverImage: ""
heroImage: ""
---

Banyak orang mengira Server Islands di Astro adalah tombol ajaib untuk menurunkan Total Blocking Time (TBT). Anggapan itu keliru. **Server Islands memindahkan waktu render komponen dinamis dari server keluar dari respons halaman utama, tetapi tidak mengurangi JavaScript yang dieksekusi browser.** TBT dihitung di browser, jadi yang menurunkannya adalah berkurangnya tugas JavaScript panjang, bukan lokasi render HTML. Tulisan ini membantu memilih antara HTML statis, `server:defer`, dan client directive untuk situs bisnis.

## Apa yang sebenarnya diukur TBT

Menurut [dokumentasi Lighthouse tentang TBT](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time), TBT mengukur total waktu halaman terblokir sehingga tidak bisa merespons input seperti klik, ketukan, atau keyboard. Angkanya dihitung dengan menjumlahkan porsi pemblokiran dari semua long task antara First Contentful Paint dan Time to Interactive. Long task adalah tugas yang berjalan lebih dari 50 ms; hanya waktu di atas 50 ms yang dihitung. Contohnya, tugas 70 ms menyumbang 20 ms.

Ambang bawaan Lighthouse untuk skor hijau di ponsel adalah 0 sampai 200 ms, sedangkan di desktop 0 sampai 150 ms (sumber yang sama).

TBT adalah metrik lab. [Panduan web.dev tentang diagnosis interaksi lambat](https://web.dev/articles/manually-diagnose-slow-interactions-in-the-lab) menyebut TBT berkorelasi baik dengan INP, sehingga TBT tinggi bisa menjadi sinyal bahwa halaman kurang responsif selama pemuatan. Namun TBT bukan pengganti data lapangan. Untuk keputusan SEO, tetap pantau INP dari data pengguna nyata di Search Console atau CrUX.

## Apa yang dilakukan Server Islands

[Dokumentasi Astro](https://docs.astro.build/en/guides/server-islands/) menjelaskan bahwa dengan adapter terpasang, direktif `server:defer` mengubah komponen menjadi island sendiri. Komponen itu dirender belakangan di server dan boleh melakukan hal yang biasa dilakukan halaman on-demand, misalnya mengambil data atau membaca cookie. Dokumentasi juga menyebut prop yang dikirim ke server island dienkripsi dengan kunci acak yang dibuat pada setiap build.

Artinya, manfaat utamanya adalah memisahkan bagian yang lambat atau personal dari bagian yang bisa di-cache. Halaman utama bisa terkirim cepat, sementara bagian dinamis menyusul. Server Islands menyelesaikan masalah waktu respons server dan caching, bukan masalah eksekusi JavaScript.

## Tiga pilihan, tiga masalah berbeda

**1. HTML statis biasa.** Cocok untuk teks penawaran, harga, FAQ, daftar layanan, dan artikel. Tidak ada JavaScript yang perlu dieksekusi, jadi kontribusi ke TBT nol. Konten juga langsung ada di HTML awal, yang paling aman untuk crawler.

**2. `server:defer`.** Cocok untuk blok yang berbeda per pengunjung atau yang datanya lambat diambil, seperti ringkasan akun, stok, atau rekomendasi. Fallback bisa ditampilkan sambil menunggu. Jangan taruh konten SEO utama di sini, karena tidak ada di respons pertama.

**3. Client directive (`client:visible`, `client:idle`, `client:load`).** Cocok untuk interaksi yang memang butuh JavaScript di browser: kalkulator, slider, animasi, atau adegan 3D. Inilah yang menambah beban main thread, sehingga inilah yang memengaruhi TBT.

## Contoh dari situs ini

Situs ini memakai komponen `EditorialScene` berbasis React dan Three.js di beberapa halaman dengan `client:visible`, dan di beranda dengan `client:idle`. Beban eksekusi di browser berasal dari komponen itu. Memindahkannya ke `server:defer` tidak membantu, karena adegan 3D tetap harus dijalankan di browser. Opsi yang relevan adalah mengurangi kapan dan di mana komponen itu dimuat, atau menggantinya dengan gambar statis di halaman yang tidak membutuhkannya.

Ini saya tulis sebagai pengamatan arsitektur, bukan klaim hasil ukur. Angka TBT sebelum dan sesudah harus diuji di perangkat dan profil jaringan yang sama.

## Cara memilih dalam lima pertanyaan

1. **Apakah pengunjung butuh interaksi di bagian ini?** Jika tidak, gunakan HTML statis.
2. **Apakah isinya berbeda per pengunjung atau lambat diambil?** Jika ya, pertimbangkan `server:defer`.
3. **Apakah isinya penting untuk pencarian?** Jika ya, jaga agar ada di HTML awal.
4. **Apakah komponen butuh JavaScript browser?** Jika ya, pilih directive paling malas yang masih masuk akal: `client:visible` untuk bagian di bawah layar, `client:idle` untuk yang tidak mendesak.
5. **Apakah ada alternatif tanpa JavaScript?** Dokumentasi Lighthouse menyebut cara memperbaiki TBT adalah mengurangi pemuatan, parsing, dan eksekusi JavaScript yang tidak perlu, memakai code splitting, menghapus kode tidak terpakai, dan memuat skrip pihak ketiga dengan efisien. Mulai dari sana.

## Langkah uji sebelum dan sesudah perubahan

- Jalankan Lighthouse mode ponsel pada halaman yang sama minimal tiga kali dan catat nilai tengah TBT, supaya satu hasil acak tidak menyesatkan.
- Buka panel Performance di Chrome DevTools dengan CPU throttling, lalu cari long task bertanda segitiga merah. Panduan web.dev menyarankan throttling agar long task terlihat lebih jelas.
- Catat ukuran JavaScript di tab Network sebelum dan sesudah.
- Periksa halaman di ponsel nyata: tombol harus merespons begitu muncul di layar.
- Bandingkan INP lapangan di Search Console setelah beberapa minggu. Data lab dan data lapangan bisa berbeda.

## Kesalahan yang sering terjadi

Kesalahan pertama adalah memakai `server:defer` untuk konten yang seharusnya statis hanya karena terdengar modern. Hasilnya permintaan tambahan ke server tanpa manfaat. Kesalahan kedua adalah menaruh teks layanan atau harga di island yang dirender belakangan, lalu bertanya mengapa cuplikan Google tidak menampilkannya. Kesalahan ketiga adalah mengejar skor Lighthouse 100 sambil mengabaikan pengalaman nyata. TBT hanya proksi; tujuan akhirnya adalah halaman yang terasa responsif.

## Kesimpulan

Untuk menekan TBT, kurangi JavaScript yang berjalan di browser. HTML statis memberi hasil terbaik untuk konten yang tidak butuh interaksi, `server:defer` membantu konten dinamis tanpa memperlambat respons halaman, dan client directive hanya untuk interaksi yang benar-benar perlu. Perubahan arsitektur tidak menjamin kenaikan ranking Google; ia memperbaiki pengalaman, dan itu harus dibuktikan dengan pengukuran.

Butuh audit performa untuk situs Astro Anda? [Hubungi saya](/contact/) dan bawa URL halaman yang paling lambat di ponsel.

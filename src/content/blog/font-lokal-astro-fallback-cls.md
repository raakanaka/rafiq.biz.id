---
title: "Font Lokal Astro: 7 Cek untuk Mengurangi CLS"
description: "Panduan mengaudit font Astro: cek request, format WOFF2, font-display, fallback, preload, lisensi, dan ukur CLS sebelum mengubah website produksi."
pubDate: "2026-10-06"
date: "2026-10-06"
excerpt: "Font lokal belum tentu menghilangkan layout shift. Periksa fallback, preload, lisensi, dan hasil pengukuran sebelum mengganti font di Astro."
category: "Web Development"
tags: ["Astro", "Web Font", "CLS", "Performance"]
author: "Rafiq"
coverImage: ""
heroImage: ""
---

Font lokal dapat mengurangi ketergantungan pada server pihak ketiga, tetapi tidak otomatis membuat halaman stabil. Jika ukuran huruf fallback berbeda dari font utama, judul bisa berpindah baris ketika font selesai dimuat. Tombol di bawahnya ikut bergeser. Masalahnya bukan sekadar asal file, melainkan waktu pemuatan dan perbedaan metrik huruf.

Panduan ini membantu pemilik website dan developer Astro memisahkan tiga keputusan: apakah font khusus diperlukan, bagaimana file dikirim, dan bagaimana ruang teks dipertahankan. Fokusnya pemeriksaan yang bisa diulang, bukan janji bahwa satu pengaturan langsung menghasilkan skor sempurna.

Riset artikel ini mencakup [changelog Google Search Central](https://developers.google.com/search/updates/) yang diperiksa pada 6 Oktober 2026. Pembaruan 1 Oktober membahas panduan konten generative AI, **bukan perubahan aturan font atau CLS**. Karena tidak ada pengumuman font baru di changelog tersebut, rekomendasi teknis di bawah memakai dokumentasi resmi Astro, Google, dan MDN yang sudah berlaku. Tanggal artikel tidak berarti fitur ini baru dirilis minggu ini.

## 1. Buktikan font memang menjadi penyebab pergeseran

Mulai dari rekaman halaman, bukan mengganti konfigurasi. Buka DevTools, jalankan rekaman Performance saat memuat ulang halaman dengan cache dimatikan, lalu periksa kejadian layout shift. Cari hubungan antara selesai dimuatnya font, berubahnya lebar teks, dan berpindahnya elemen di sekitar judul atau tombol.

Bandingkan dengan penyebab lain: gambar tanpa dimensi, iframe yang baru muncul, banner, atau konten yang disisipkan setelah halaman tampil. Jika gambar hero yang bergeser, mengganti font tidak menyelesaikan akar masalah. Perbaikan harus mengikuti elemen yang benar-benar tercatat berpindah.

Simpan kondisi pengujian: URL, ukuran viewport, pembatasan jaringan, status cache, dan interaksi yang dilakukan. Tanpa catatan tersebut, dua hasil yang tampak berbeda bisa berasal dari koneksi berbeda, bukan perubahan kode. Untuk website klien, rekaman lebih berguna daripada sekadar screenshot angka skor.

## 2. Kurangi kebutuhan sebelum memindahkan file

Hitung keluarga font, gaya, dan ketebalan yang benar-benar terlihat. Website dengan judul, paragraf, dan tombol sederhana belum tentu membutuhkan beberapa keluarga font sekaligus. Jika font dekoratif hanya dipakai untuk satu label kecil, pertimbangkan apakah nilai visualnya sebanding dengan request tambahan dan pekerjaan pemeliharaannya.

Pilihan paling ringan bisa berupa system font. Jika identitas merek memerlukan font khusus, gunakan variasi yang memang terpakai. Jangan menghapus italic jika konten editorial menggunakannya; jangan mengasumsikan browser selalu menyintesis ketebalan dengan tampilan yang sesuai desain.

Periksa juga lisensi. File yang dapat diunduh belum tentu bebas didistribusikan ulang di domain klien. Catat sumber font dan ketentuan self-hosting. Audit ini mendahului perubahan teknis karena optimasi tidak boleh menciptakan masalah penggunaan aset.

## 3. Self-hosting tetap perlu pengiriman yang benar

Font lokal berarti file disajikan dari infrastruktur website, bukan berarti ukuran file menjadi kecil. Gunakan format yang sesuai browser target, lazimnya WOFF2, dan pastikan respons benar-benar berisi font. Request berstatus sukses yang ternyata mengembalikan halaman HTML bukan pengiriman font yang valid.

Periksa ukuran transfer, cache, URL aset, dan apakah build produksi menunjuk file yang ada. Subset karakter dapat mengurangi file, tetapi harus tetap mencakup bahasa dan simbol yang dipakai. Nama pelanggan, tanda baca, simbol mata uang, dan karakter dalam artikel perlu ikut diuji. Penghematan yang memunculkan huruf hilang justru menambah pekerjaan.

Bandingkan kondisi sebelum dan sesudah menggunakan URL serta jaringan yang sama. Self-hosting memberi kontrol lebih besar atas file dan cache, tetapi bukan alasan untuk berasumsi hasilnya selalu lebih cepat daripada semua penyedia eksternal.

## 4. Pilih font-display berdasarkan kebutuhan pembaca

[MDN menjelaskan font-display](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/font-display) melalui periode block, swap, dan failure. Nilai `swap` memberi periode block yang sangat singkat lalu periode swap tanpa batas. Pembaca bisa segera melihat fallback, tetapi pergantian ke font utama masih dapat mengubah ukuran blok teks. Jadi, `swap` bukan obat otomatis untuk CLS.

Nilai `optional` memberi periode block sangat singkat tanpa periode swap. Jika font utama terlambat, pengguna dapat tetap melihat fallback pada tampilan tersebut. Ini trade-off yang masuk akal untuk sebagian website informasi, tetapi perlu persetujuan desain jika merek menuntut tipografi tertentu.

Nilai `block` membuat teks tidak terlihat untuk sementara. Ruang tata letak tetap perlu diuji ketika font utama akhirnya dipakai. Pilih kebijakan setelah menguji keterbacaan, kecepatan tampil, dan konsistensi desain, bukan karena mengikuti template proyek lain.

## 5. Samakan metrik fallback, jangan mengarang persentase

Metrik huruf memengaruhi lebar teks, baseline, serta tinggi baris. CSS menyediakan [`size-adjust`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/size-adjust), `ascent-override`, `descent-override`, dan `line-gap-override` untuk membantu mendekatkan fallback dengan font utama. Nilainya harus berasal dari font yang dipakai atau proses pengukuran, bukan menyalin angka dari proyek lain.

Dalam [dokumentasi font Astro](https://docs.astro.build/en/guides/fonts/), Astro menjelaskan bahwa fallback yang berbeda jauh dapat menyebabkan layout shift. Astro dapat membuat optimized fallback dari fallback terakhir jika itu keluarga generik, dan default-nya `sans-serif`. Pastikan dokumentasi serta API sesuai versi proyek; fitur pada dokumentasi terbaru tidak selalu dapat ditempel langsung ke konfigurasi versi lama.

Uji kalimat pendek dan panjang, judul artikel, menu, serta tombol konsultasi. Fallback yang terlihat pas pada satu judul bisa berbeda pada judul lain. Sertakan viewport sempit karena perpindahan satu kata ke baris berikutnya lebih mudah memengaruhi tinggi header di layar kecil.

## 6. Preload hanya font yang kritis

Preload membantu browser menemukan aset lebih awal. Namun, memprioritaskan semua font justru membuat aset lain berebut jaringan. Identifikasi font yang dipakai pada konten awal, lalu pastikan preload menunjuk URL yang sama dengan deklarasi font sebenarnya.

Perhatikan ketebalan, gaya, tipe file, dan pengaturan lintas asal yang dibutuhkan. Lihat tab Network untuk mendeteksi download ganda. Jangan menganggap sebuah tag preload berhasil hanya karena build tidak menampilkan error: browser tetap dapat memperingatkan aset tidak dipakai atau mengambil URL lain.

Astro memiliki bagian preloading dalam [dokumentasi font resminya](https://docs.astro.build/en/guides/fonts/). Jika proyek sudah memakai fasilitas tersebut, hindari menambahkan tag manual yang menggandakan perilaku otomatis. Perubahan paling kecil yang terbukti bekerja lebih mudah dirawat daripada beberapa lapisan optimasi sekaligus.

## 7. Ukur hasil tanpa menjanjikan eliminasi CLS

Ulangi pengujian dengan cache dingin dan hangat. Bandingkan kejadian shift, waktu tampilnya teks, dan apakah seluruh karakter tetap terbaca. Periksa desktop serta ponsel, termasuk menu terbuka dan halaman artikel panjang. Jangan berhenti pada homepage jika template layanan memakai font berbeda.

Untuk data lapangan, [Google menjelaskan Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals) melalui LCP, INP, dan CLS. Target pengalaman baik menurut dokumen itu: LCP dalam 2,5 detik pertama, INP kurang dari 200 milidetik, dan CLS kurang dari 0,1. Satu pengujian lokal bukan bukti seluruh pengunjung sudah memperoleh pengalaman tersebut.

Jika data lapangan belum tersedia, laporkan keterbatasannya. Rekaman lab tetap berguna untuk membuktikan bug tertentu berkurang, tetapi tidak boleh disebut peningkatan trafik atau ranking. Saat update Google sedang rollout, pisahkan pekerjaan pengalaman pengguna dari interpretasi performa pencarian.

## Checklist sebelum meminta persetujuan klien

- Penyebab shift tercatat dalam rekaman, bukan dugaan.
- Lisensi self-hosting dan karakter yang dibutuhkan sudah diperiksa.
- Jumlah font dan variasi sesuai penggunaan nyata.
- Fallback serta font-display diuji pada jaringan lambat.
- Preload tidak menyebabkan request ganda.
- Build produksi lulus; aset font tidak mengalami error.
- Hasil lab dibedakan dari data pengguna lapangan.

Untuk konteks migrasi, baca [panduan WordPress ke Astro tanpa mengabaikan SEO](/blog/migrasi-wordpress-ke-astro-seo/). Jika masalah utama justru interaksi lambat, lanjutkan ke [optimasi INP dengan scheduler.yield](/blog/optimasi-inp-scheduler-yield/). Font bukan pengganti audit seluruh pengalaman halaman.

Perlu bantuan memeriksa template dan aset website? Jelaskan URL serta gejala yang terlihat melalui [layanan pembuatan website](/jasa-pembuatan-website/). Lingkup pekerjaan sebaiknya berangkat dari bukti: elemen mana yang bergeser, perubahan apa yang diperlukan, dan pemeriksaan apa yang menentukan perbaikan berhasil.

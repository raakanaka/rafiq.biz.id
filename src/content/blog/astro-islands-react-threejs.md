---
title: "Astro Islands: 7 Cek React dan Three.js"
date: "2026-10-09"
pubDate: "2026-10-09"
description: "Panduan memilih hydration React dan Three.js di Astro: kurangi JavaScript awal, pertahankan konten HTML, lalu uji interaksi dan layout di ponsel."
excerpt: "Panduan memilih hydration React dan Three.js di Astro: kurangi JavaScript awal, pertahankan konten HTML, lalu uji interaksi dan layout di ponsel."
category: "Web Development"
tags: ["Astro", "React", "Three.js", "Web Performance", "INP"]
author: "Rafiq"
coverImage: ""
heroImage: ""
---

Website Astro bisa tetap lambat ketika halaman marketing memuat komponen React, animasi rumit, dan adegan Three.js yang sebenarnya tidak dibutuhkan pengunjung untuk membaca penawaran. **Arsitektur Astro Islands memberi kendali penuh untuk memilih komponen mana yang mengirim JavaScript ke browser, serta kapan komponen tersebut mulai aktif.** Mulailah dengan menghapus interaktivitas yang berlebihan, memastikan informasi bisnis tetap hadir sebagai HTML, lalu menguji responsivitasnya secara terukur. Mengganti directive bukan jalan pintas otomatis agar ranking Google naik.

Pembahasan ini berangkat dari dua perkembangan web terkini. [Ahrefs merilis analisis teknis SEO untuk static sites pada 1 Oktober 2026](https://ahrefs.com/blog/seo-for-static-sites/), yang menegaskan bahwa framework statis tetap berisiko mengalami masalah performa jika memuat JavaScript berlebihan atau membundel kode secara tidak efisien. Di sisi lain, [pembaruan resmi Astro edisi September 2026](https://astro.build/blog/whats-new-september-2026/) menyoroti dukungan compiler React serta perbaikan performa dan aksesibilitas Starlight. Bacaan tersebut menjadi konteks terbaru; perilaku hydration dalam panduan ini mengikuti dokumentasi resmi Astro, bukan klaim adanya fitur islands baru bulan ini.

## 1. Pisahkan informasi bisnis dari efek interaktif

Dalam [arsitektur islands Astro](https://docs.astro.build/en/concepts/islands/), setiap komponen framework seperti React, Vue, atau Svelte secara default dirender menjadi HTML murni tanpa membawa runtime JavaScript ke browser. Komponen yang membutuhkan interaksi pengguna diisolasi sebagai "island" terpisah di tengah lautan HTML statis. Ini berarti Anda tidak perlu mengubah seluruh halaman portofolio atau jasa menjadi Single Page Application (SPA) hanya karena ingin menampilkan satu animasi 3D atau formulir kontak.

Untuk halaman penawaran jasa, komponen penting seperti judul layanan, daftar harga, studi kasus, testimoni, dan tombol tautan WhatsApp dapat disajikan sepenuhnya sebagai HTML dan CSS statis. Pengunjung tidak memerlukan megabyte runtime React hanya untuk membaca keunggulan jasa Anda. Adegan visual atau kanvas interaktif dapat ditempatkan berdampingan sebagai ornamen visual pendukung tanpa menghalangi pengunjung menghubungi Anda saat skrip visual masih diunduh.

Sebelum menambahkan directive interaktif pada komponen, evaluasi fungsi bisnisnya. Apakah pengunjung benar-benar berinteraksi dengan elemen tersebut? Apakah animasi itu membantu prospek mengambil keputusan, atau hanya estetika pengembang? Jika elemen tersebut hanya menampilkan data tanpa interaksi dinamis, ubah menjadi komponen `.astro` biasa untuk menghemat biaya pemrosesan browser secara permanen.

## 2. Pahami perbedaan directive hydration

Astro menyediakan beberapa directive klien yang menentukan kapan bundel JavaScript komponen diunduh dan dieksekusi oleh browser. Mengutip [referensi resmi Client Directives Astro](https://docs.astro.build/en/reference/directives-reference/#client-directives), pemilihan directive harus disesuaikan dengan prioritas interaksi:

- **`client:load`**: Mengunduh dan menghidrasi JavaScript segera saat halaman dimuat. Gunakan hanya untuk elemen penting di atas lipatan layar (*above-the-fold*) yang wajib segera aktif, seperti tombol navigasi utama atau kolom pencarian cepat.
- **`client:idle`**: Menunggu hingga halaman selesai memuat dan browser memasuki status siaga melalui `requestIdleCallback`. Pilihan ini tepat untuk widget pendukung seperti kotak live chat atau pelacak interaksi sekunder.
- **`client:visible`**: Menghidrasi komponen hanya ketika elemen tersebut mulai masuk ke dalam area pandang (*viewport*) pengguna menggunakan `IntersectionObserver`. Ini merupakan pilihan yang patut diuji untuk komponen berat di bawah lipatan layar (*below-the-fold*), seperti visualisasi 3D, carousel portofolio, atau kolom komentar.

Menggunakan `client:load` secara serampangan untuk adegan Three.js yang posisinya di tengah atau bawah halaman adalah pemborosan besar. Skrip 3D yang aktif saat pemuatan awal dapat bersaing memperebutkan sumber daya dan memperlambat rendering. Dampaknya terhadap Largest Contentful Paint (LCP) perlu diukur, bukan diasumsikan.

### Contoh penerapan pada komponen portofolio

```astro
---
import PortfolioShowcase from "../components/PortfolioShowcase.jsx";
---
<section aria-labelledby="portfolio-heading">
  <h2 id="portfolio-heading">Portofolio Proyek Unggulan</h2>
  <PortfolioShowcase client:visible />
</section>
```

Contoh ini mengasumsikan komponen mendukung render server dan berada di bawah lipatan awal. Hydration dipicu ketika elemen masuk viewport; jika sudah terlihat saat halaman dibuka, pemuatannya juga bisa langsung dimulai. Dependency bersama yang digunakan island lain mungkin sudah dimuat lebih dulu. Hasilnya, pengunjung di koneksi seluler dapat membaca ringkasan penawaran awal tanpa terbebani unduhan skrip berat.

## 3. Tangani komponen Three.js yang bergantung pada browser

Banyak developer pemula di ekosistem Astro tergoda menggunakan `client:only="react"` untuk komponen Three.js atau React Three Fiber demi menghindari galat render server. Namun, [dokumentasi Astro](https://docs.astro.build/en/reference/directives-reference/#clientonly) menegaskan bahwa `client:only` tidak menunda pemuatan; directive ini justru mengunduh JavaScript segera saat halaman dibuka sambil mematikan render HTML awal di server.

Jika komponen Three.js mengakses objek browser seperti `window`, `document`, atau konteks WebGL, jangan langsung menyembunyikannya di balik `client:only` tanpa pertimbangan. Pisahkan logika rendering kanvas dari kontainer tata letak. Sediakan fallback HTML yang bermakna menggunakan atribut `slot="fallback"` agar pengguna tidak melihat ruang kosong saat kanvas sedang diinisialisasi.

Pastikan pula inisialisasi kanvas Three.js dibungkus dalam *effect hook* yang hanya berjalan di sisi klien setelah komponen terpasang di DOM. Dengan cara ini, struktur HTML pembungkus tetap terdaftar di browser, tata letak tidak berantakan, dan beban WebGL hanya diproses saat benar-benar dibutuhkan.

## 4. Cegah layout shift dengan dimensi kontainer yang stabil

Komponen visual yang dihidrasi belakangan rentan menimbulkan masalah Cumulative Layout Shift (CLS) jika kontainer pembungkusnya tidak memiliki dimensi tinggi dan lebar yang pasti. Ketika bundel JavaScript akhirnya selesai diunduh dan kanvas 3D mengembang, konten teks di bawahnya akan terdorong secara mendadak. Pengalaman melompat seperti ini sangat mengganggu kenyamanan membaca di perangkat seluler.

Astro menyediakan parameter tambahan `rootMargin` pada directive `client:visible`. Berdasarkan [dokumentasi directive Astro](https://docs.astro.build/en/reference/directives-reference/#clientvisible), Anda dapat menulis `client:visible={{rootMargin: "200px"}}` agar browser mulai mengunduh dan menghidrasi komponen sebelum elemen tersebut benar-benar menyentuh batas layar. Margin 200 pixel ini adalah contoh, bukan nilai universal atau jaminan bebas pergeseran. Pilih berdasarkan biaya komponen dan pola scroll yang diuji.

Selain itu, selalu tetapkan aspek rasio CSS (`aspect-ratio: 16/9` atau tinggi minimum tetap) pada elemen pembungkus canvas. Dengan menyediakan ruang fisik terlebih dahulu pada tata letak CSS, halaman web tetap kokoh dan stabil meskipun adegan 3D baru muncul beberapa detik kemudian.

## 5. Audit permintaan JavaScript di Network tab

Keberhasilan membagi website menjadi beberapa island harus dibuktikan dengan data nyata, bukan sekadar asumsi kode. Jangan hanya melihat ukuran berkas di folder hasil build; periksa apa yang sebenarnya diminta oleh browser pengguna.

Buka DevTools pada peramban Anda, pilih tab **Network**, saring berdasarkan filter **JS**, lalu muat ulang halaman dengan simulasi jaringan seluler (*Fast 3G* atau *Slow 4G*). Perhatikan urutan dan ukuran berkas:
1. Saat halaman pertama kali terbuka, pastikan berkas JavaScript berukuran ratusan kilobyte milik Three.js atau React Three Fiber belum terunduh.
2. Gulir layar ke bawah menuju bagian island yang diatur dengan `client:visible`. Perhatikan apakah berkas skrip baru mulai masuk hanya ketika mendekati batas area pandang.
3. Catat total transfer data. Bandingkan ukuran transfer sebelum dan sesudah pada kondisi yang sama. Penurunan transfer belum membuktikan penurunan waktu parsing; cocokkan dengan rekaman Performance. Tidak ada hasil benchmark proyek yang diklaim dalam contoh ini.

Pemeriksaan ini memastikan bahwa directive Astro Anda bekerja sesuai rencana dan tidak ada impor komponen bocor yang memicu pemuatan pustaka pihak ketiga tanpa disengaja.

## 6. Uji responsivitas interaksi untuk menjaga INP

Mengurangi beban JavaScript di awal halaman tidak hanya mempercepat waktu muat, tetapi juga melindungi metrik **Interaction to Next Paint (INP)**. Mengurangi pekerjaan awal dapat menyediakan ruang untuk respons interaksi. Namun, penundaan hydration juga dapat memindahkan pekerjaan berat ke saat pengguna mengeklik; uji klik pertama, scroll, dan formulir ketika island mulai aktif.

Jika sebuah halaman menjalankan adegan Three.js yang terus-menerus memutar animasi perulangan (*render loop*), pastikan loop tersebut tidak memblokir interaksi pengguna lain. Hentikan render loop saat kanvas berada di luar layar menggunakan *visibility change* atau *intersection observer*. Anda juga dapat memecah komputasi latar belakang menggunakan teknik penjadwalan browser; lihat pembahasan lebih dalam di [panduan optimasi INP dengan pemecahan tugas JavaScript](/blog/optimasi-inp-scheduler-yield/).

Lakukan pengujian interaksi langsung: buka halaman di ponsel, ketuk menu navigasi saat kanvas 3D sedang memuat, dan rasakan apakah ada jeda respons. Catat rekaman interaksi sebelum dan sesudah, jangan hanya mengandalkan rasa cepat. Data lab bukan INP pengguna nyata; evaluasi data CrUX persentil ke-75 jika tersedia.

## 7. Amankan konten SEO dan aksesibilitas

Kelebihan utama Astro dibanding SPA tradisional adalah kemampuannya menghasilkan HTML ramah mesin pencari. Namun, keunggulan ini bisa hilang jika Anda memasukkan konten teks penting ke dalam komponen yang hanya dirender di sisi browser. Robot perayap mesin pencari memang dapat menjalankan JavaScript, tetapi konten dalam respons HTML server mengurangi ketergantungan pada rendering JavaScript. Ini tidak menjamin waktu maupun keberhasilan indeksasi.

Pastikan seluruh heading (H1, H2, H3), paragraf penjelasan produk, daftar tautan internal, tag canonical, serta schema markup terpasang di level template Astro atau komponen statis. Komponen React atau Three.js hanya bertindak sebagai pengaya visual, bukan wadah tunggal informasi esensial.

Dari sisi aksesibilitas, pastikan kanvas visual memiliki deskripsi tekstual yang memadai (`aria-label` atau teks alternatif) dan tidak menghalangi fokus navigasi keyboard. Jika pengunjung menggunakan fitur pembaca layar atau mengaktifkan preferensi pengurangan animasi (*prefers-reduced-motion*), sediakan opsi atau tampilan visual statis yang tetap informatif.

## Kesimpulan

Astro Islands bukan sekadar fitur teknis, melainkan strategi cerdas untuk menyajikan website modern dengan performa tinggi. Anda tidak perlu mengorbankan estetika 3D yang memukau demi mengejar skor kecepatan; kuncinya adalah mengisolasi komponen berat dengan directive seperti `client:visible`, mengunci dimensi kontainer agar tidak terjadi pergeseran layout, dan membiarkan konten penawaran bisnis tetap berdiri di atas fondasi HTML yang ringan.

Pada masa pasca-rollout update Google yang sering kali diwarnai fluktuasi data pencarian, perbaikan performa website harus diposisikan sebagai investasi jangka panjang bagi pengalaman pengguna nyata. Ujilah setiap perubahan secara objektif di perangkat nyata. Dengan arsitektur yang rapi, website portofolio maupun bisnis Anda dapat tampil memikat tanpa mengorbankan kecepatan, aksesibilitas, dan konversi prospek.

Keberhasilan perubahan harus punya batas yang jelas: konten utama tetap tersedia tanpa hydration, tautan konsultasi bekerja sejak awal, dan layout stabil. Jika kontrol menjadi lebih lambat atau konten penting menghilang, batalkan perubahan lalu periksa batas komponen. Untuk pekerjaan yang lebih luas, baca [checklist migrasi WordPress ke Astro](/blog/migrasi-wordpress-ke-astro-seo/); tidak perlu mengganti platform hanya untuk memperbaiki satu island.

---
title: "Kontrol Training AI Bersama di robots.txt: 5 Hal yang Perlu Dicek Klien"
description: "Google berencana mendukung kontrol training AI bersama di robots.txt pada 2027. Ini isi pengumumannya, apa yang belum jelas, dan checklist aman untuk situs klien."
pubDate: "2026-10-31"
date: "2026-10-31"
excerpt: "Google umumkan rencana dukung sinyal training AI bersama di robots.txt, target 2027. Ini yang sudah pasti, yang belum, dan checklist untuk situs klien."
category: "SEO Teknis"
tags: ["robots.txt", "Google-Extended", "AI Training", "IETF", "SEO teknis"]
author: "Rafiq"
coverImage: ""
heroImage: ""
---

Pada **30 Oktober 2026**, Google lewat John Mueller mengumumkan rencana mendukung satu kontrol training AI bersama di `robots.txt`. Idenya: pemilik situs cukup menulis satu preferensi, lalu penyedia AI yang berpartisipasi membacanya, tanpa harus menambah aturan untuk tiap bot. Sumber: [Google Search Central Blog](https://developers.google.com/search/blog/2026/10/ai-training-control).

Ini pengumuman rencana, bukan fitur yang sudah aktif. Google sendiri menulis targetnya mulai mendukung kontrol ini **bersama penyedia AI lain pada 2027**. Jadi hari ini tidak ada yang perlu kamu ubah di situs klien karena pengumuman ini. Tetapi ada beberapa hal yang layak dicatat sekarang supaya keputusan robots.txt klien tidak berantakan saat fitur itu tiba.

## Apa yang diumumkan Google

Menurut posting tersebut:

- Kontrol baru berupa **policy token** bersama di `robots.txt`, berbasis kerja kelompok kerja **AIPREF** di IETF.
- Pemilik situs bisa menyatakan preferensi training AI untuk banyak penyedia sekaligus.
- Jika situs memakai token itu untuk menolak training **dan** `Google-Extended` tidak disebut eksplisit, Google berencana menafsirkannya seolah-olah situs men-disallow `Google-Extended`.
- Penyedia AI lain bisa menanganinya serupa.
- Kontrol khusus perusahaan, seperti `Google-Extended`, tetap berfungsi berdampingan dengan sinyal bersama ini.
- Situs yang secara spesifik mengizinkan `Google-Extended` memenuhi syarat muncul di respons dan menerima klik lewat grounding di Gemini Apps.

Google juga menyebut ini draft proposal dan mengaitkannya dengan EU Code of Practice untuk penyedia model AI tujuan umum, yang mengakui robots.txt sebagai cara utama penerbit menyatakan preferensi yang bisa dibaca mesin.

## Yang belum jelas

Artikel resmi tidak menyebut nama atau sintaks tokennya. Jadi jangan menulis aturan robots.txt apa pun berdasarkan tebakan atau cuplikan dari blog lain sebelum ada dokumentasi resmi. Beberapa hal lain juga belum dijawab di sumber:

- Penyedia AI mana saja yang akan ikut, dan kapan masing-masing mulai membaca token itu.
- Apakah sinyal ini berlaku untuk crawler yang sudah mengambil konten sebelumnya.
- Bagaimana vocabulary AIPREF lainnya akan diputuskan; Google hanya menyebut diskusi multipihak masih berlangsung.

Kalau klien bertanya "jadi konten kami aman dari AI?", jawaban jujurnya: ini baru preferensi yang bisa dibaca penyedia yang memilih mematuhi, dan belum ada tanggal berlaku.

## Satu hal yang sering tertukar

`Google-Extended` mengatur penggunaan untuk Gemini dan training model, **bukan** inklusi di Google Search. Search tetap ditangani Googlebot. Untuk penjelasan resmi tentang kontrol tampilan AI di Search, baca juga [kontrol cuplikan AI Google](/blog/kontrol-cuplikan-ai-google/). Memblokir training bukan berarti hilang dari hasil pencarian.

Kalau kamu sedang menyusun daftar crawler per klien, artikel [syarat baru Meta dan robots.txt situs klien](/blog/meta-terms-crawler-robots-txt-klien/) sudah membahas cara memilah crawler berdasarkan tujuan. Artikel ini melengkapinya dari sisi Google dan standar bersama.

## 5 hal yang perlu dicek di situs klien

### 1. Audit robots.txt yang sekarang

Buka `https://domain-klien.com/robots.txt` dan catat: apakah ada aturan untuk `Google-Extended`, apakah ada `User-agent: *` yang terlalu longgar atau terlalu ketat, dan apakah file mengembalikan status 200. Banyak situs klien memakai robots.txt bawaan plugin yang tidak pernah ditinjau.

### 2. Tanyakan preferensi training ke klien, jangan putuskan sendiri

Preferensi training adalah keputusan bisnis dan kadang hukum. Klien media atau penerbit mungkin ingin menolak. Klien jasa lokal yang ingin tampil di jawaban AI mungkin ingin mengizinkan. Catat jawabannya secara tertulis di dokumen handover supaya ada dasar saat aturan berubah.

### 3. Pisahkan training dari pencarian di laporan

Saat menulis rekomendasi, jangan gabungkan "blokir AI" dalam satu baris. Pisahkan: training (misalnya `Google-Extended`), pencarian Google (Googlebot), dan crawler pihak lain. Ini mencegah klien salah mengira pemblokiran training akan menurunkan atau menaikkan ranking.

### 4. Jangan tulis token yang belum didokumentasikan

Karena sintaks belum diumumkan, biarkan aturan `Google-Extended` yang sudah ada tetap berjalan. Google menyatakan kontrol khusus perusahaan akan terus berfungsi. Menambahkan baris tidak dikenal hari ini tidak memberi manfaat terukur.

### 5. Jadwalkan tinjauan ulang, bukan perubahan sekarang

Tambahkan catatan di kalender atau tiket pemeliharaan: tinjau robots.txt klien ketika Google atau penyedia AI lain merilis dokumentasi dukungan. Google sendiri menyebut akan memberi pembaruan progres.

## Cara menyampaikannya ke klien

Contoh kalimat yang bisa dipakai: "Google berencana mendukung satu pengaturan di robots.txt untuk menyatakan preferensi training AI ke banyak penyedia. Rencananya mulai 2027. Saat ini pengaturan yang ada tetap berlaku. Kami catat preferensi Bapak/Ibu sekarang dan memperbarui file saat dokumentasi resminya terbit."

Kalimat ini tidak menjanjikan perlindungan penuh dan tidak menakut-nakuti. Hindari klaim seperti "konten Anda akan sepenuhnya aman dari AI". Sumbernya tidak mengatakan itu, dan robots.txt pada dasarnya adalah permintaan yang dipatuhi crawler yang memilih patuh.

## Jebakan yang perlu dihindari

- **Menganggap robots.txt sebagai keamanan.** File ini bukan kontrol akses. Konten sensitif harus dilindungi autentikasi.
- **Menyalin aturan dari artikel lain.** Banyak daftar bot AI beredar dengan nama yang salah atau usang. Rujuk dokumentasi resmi masing-masing penyedia.
- **Mengubah robots.txt tanpa uji.** Satu baris `Disallow: /` di grup yang salah bisa memblokir pencarian. Selalu uji setelah perubahan dan cek di Search Console.
- **Lupa mencatat versi.** Simpan salinan robots.txt sebelum dan sesudah perubahan di repositori klien.

## Ringkasan

Pengumuman 30 Oktober 2026 menunjukkan arah: satu sinyal training AI di robots.txt, berbasis standar IETF, mulai didukung Google dan penyedia lain pada 2027. Untuk sekarang, tugas praktisnya sederhana: audit robots.txt klien, minta preferensi training secara tertulis, pisahkan training dari pencarian dalam laporan, dan tunda penulisan token sampai dokumentasinya ada.

Kalau kamu butuh bantuan menyusun audit robots.txt dan kebijakan crawler untuk beberapa situs klien, mulai dari checklist di atas lalu catat hasilnya per domain.

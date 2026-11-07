---
title: "Clarity Agentic Analytics: Cara Cek Agen AI Bisa Isi Form Lead Klien (2026)"
date: "2026-11-07"
pubDate: "2026-11-07"
excerpt: "Microsoft Clarity kini menampilkan aktivitas agen AI di situs. Ini cara memakainya untuk audit form kontak dan booking di website jasa klien."
description: "Microsoft Clarity kini menampilkan aktivitas agen AI di situs. Ini cara memakainya untuk audit form kontak dan booking di website jasa klien."
category: "Digital Marketing"
tags: ["Microsoft Clarity", "Agen AI", "Analytics", "Lead Generation", "Form", "Conversion Rate"]
author: "Rafiq"
coverImage: ""
---

Kebanyakan laporan analytics untuk klien masih berasumsi satu hal: yang mengisi form adalah manusia. Asumsi itu mulai goyah. Pada 4 November 2026 Microsoft merilis **Agentic Analytics** di Microsoft Clarity, fitur yang menunjukkan agen AI mana yang masuk ke situs dan apa yang mereka lakukan di sana ([Microsoft Clarity Blog](https://clarity.microsoft.com/blog/clarity-connects-agents-llms-people/)).

Untuk website jasa seperti klinik, kontraktor, konsultan, atau agen travel, yang dijual ke klien adalah lead lewat form dan booking. Kalau agen AI mulai mengisi form atas nama calon pelanggan, ada dua pertanyaan baru: apakah form kita bisa dipakai agen, dan apakah lead yang masuk lewat agen tercatat dengan benar.

## Apa yang Sebenarnya Dirilis Microsoft

Pengumuman 4 November berisi tiga fitur ([Search Engine Land](https://searchengineland.com/microsoft-clarity-gains-agentic-analytics-brand-agents-and-ask-clarity-500515)):

- **Agentic Analytics.** Dashboard *Agent Activity* menampilkan tren trafik agen, agen mana yang datang, dan aksi yang terjadi: pencarian, submit form, login, download, booking janji temu, sampai checkout.
- **Brand Agents.** Produk merchant Shopify dan WooCommerce yang memenuhi syarat bisa muncul di Copilot, Bing, dan MSN. Ada juga asisten AI di situs untuk bisnis lokal.
- **Ask Clarity.** Bertanya ke data dalam bahasa biasa, jawabannya disertai rekaman sesi. Saat ini masih *closed beta* untuk retailer.

Dashboard Agent Activity sendiri sudah dinyatakan tersedia umum sejak 29 Oktober untuk project yang menerima trafik agen ([Microsoft Clarity Blog](https://clarity.microsoft.com/blog/agentic-analytics-what-agents-do-on-websites/)). Rilis 4 November menambahkan nama "Agentic Analytics" dan fitur **simulation assessment**: menguji apakah agen bisa menyelesaikan tugas penting di situs, berapa lama, berapa interaksi, dan di mana macetnya.

## Batasan yang Harus Dijelaskan ke Klien

Sebelum menawarkan fitur ini ke klien, pahami batasannya. Bagian ini paling sering dilewatkan di berita.

1. **Agen yang dikenali baru dari tiga operator**: Google, OpenAI, dan Anthropic. Copilot milik Microsoft sendiri, Perplexity, dan Meta tidak disebut ([PPC Land](https://ppc.land/microsoft-clarity-puts-shopify-and-woocommerce-products-in-copilot-and-bing/)). Angka di dashboard adalah batas bawah, bukan total trafik agen.
2. **Simulasi dimulai dari skenario commerce dan travel.** Untuk website jasa non-travel, simulasi belum tentu relevan. Microsoft bilang cakupannya akan diperluas, tanpa tanggal.
3. **Sesi agen bisa bercampur dengan manusia.** Clarity menyatakan sesi yang diklasifikasi agentic bisa mencakup *human handoff* dan belum bisa dipisah. Submit form di sesi agen belum tentu dilakukan agen sepenuhnya ([Microsoft Clarity Blog](https://clarity.microsoft.com/blog/agentic-analytics-what-agents-do-on-websites/)).
4. **Ask Clarity belum terbuka umum.** Jangan janjikan fitur ini di proposal.

## Data yang Ada: Submit Form Bukan Aksi Pinggiran

Studi Clarity menganalisis lebih dari 5,2 juta sesi agentic di 230.511 project pada 13 Agustus sampai 9 September 2026. Angka yang relevan untuk website jasa:

- **Submit form** tercatat di 19,85% sesi agentic, hampir sama dengan porsinya di aksi manusia (18,56%).
- **Book appointment** tercatat di 8,42% sesi agentic.
- **Checkout** paling sering: 25,21% sesi agentic, dibanding 14,65% di aksi manusia.

Sumbernya [studi Clarity 29 Oktober 2026](https://clarity.microsoft.com/blog/agentic-analytics-what-agents-do-on-websites/). Microsoft sendiri mengingatkan angka ini bukan funnel dan bukan bukti agen menyelesaikan tugas sendiri. Ini juga data dari pengguna Clarity, bukan estimasi seluruh web. Pakai sebagai sinyal arah, jangan sebagai proyeksi lead untuk klien.

Poin pentingnya: form dan booking, dua hal yang jadi KPI website jasa, termasuk aksi yang muncul dalam sesi agen. Kalau form klien rusak untuk agen, lead itu hilang tanpa jejak di laporan biasa.

## Cara Audit Form Lead Klien dengan Clarity

Langkah praktis yang bisa dijalankan minggu ini.

### 1. Pasang atau cek Clarity di situs klien

Clarity gratis. Kalau klien sudah memakai GA4, Clarity tetap berguna sebagai pelengkap karena ada rekaman sesi. Pastikan pemasangan sesuai kebijakan privasi klien dan banner consent yang berlaku. Rekaman sesi bisa menangkap interaksi form, jadi aktifkan masking untuk field sensitif seperti nomor telepon dan email.

### 2. Pastikan Smart Events terbaca

Dashboard agen membaca aksi lewat Smart Events. Cek apakah *Submit form* dan *Book appointment* terdeteksi pada form utama klien. Kalau form memakai iframe pihak ketiga, misalnya widget booking eksternal, cek apakah event-nya terbaca. Kalau tidak, catat sebagai keterbatasan di laporan.

### 3. Baca dashboard Agent Activity, lalu tonton rekamannya

Angka saja tidak cukup. Buka rekaman sesi agen yang berhenti di halaman form. Pola masalah yang sering muncul pada form website jasa:

- Tombol kirim tanpa label teks (ikon saja).
- Field wajib yang hanya ditandai warna merah, tanpa teks.
- CAPTCHA yang memblokir sebelum submit.
- Pilihan tanggal booking yang hanya bisa lewat kalender custom tanpa input teks.
- Pesan sukses yang hilang dalam satu detik, atau tidak ada sama sekali.

Hampir semua ini juga masalah aksesibilitas untuk manusia. Memperbaikinya tidak butuh "optimasi khusus AI".

### 4. Perbaiki dasar aksesibilitas form

Agen yang mengoperasikan browser membaca struktur halaman mirip pembaca layar. Checklist minimal:

- Setiap input punya `<label>` yang terhubung.
- Tombol submit berupa `<button type="submit">` dengan teks jelas, misalnya "Kirim permintaan konsultasi".
- Pesan error dan sukses berupa teks yang tetap terlihat, bukan toast yang hilang.
- Form tetap bisa dikirim tanpa hover atau drag.

### 5. Pisahkan lead agen di laporan

Tambahkan satu baris di laporan bulanan: jumlah sesi agentic dan submit form di sesi itu, dengan catatan bahwa angka bisa mencakup handoff manusia dan hanya tiga operator yang dikenali. Catatan ini mencegah klien bingung kenapa lead di CRM tidak cocok dengan GA4.

## Kaitannya dengan GA4

GA4 punya channel *AI Assistants* untuk sesi yang dirujuk asisten AI, tapi itu soal **rujukan**: pengunjung yang datang dari ChatGPT atau Gemini. Agentic Analytics di Clarity soal **perilaku** agen yang beroperasi di situs. Keduanya menjawab pertanyaan berbeda. Sisi rujukan sudah saya bahas di artikel [trafik Gemini tanpa UTM yang masuk Direct](/blog/trafik-gemini-tanpa-utm-ga4-direct-atribusi/), dan pengukuran dasarnya di [ukur lead formulir di GA4](/blog/ukur-lead-formulir-ga4/).

## Yang Jangan Dijanjikan

- Jangan janjikan lead naik karena situs "siap agen". Belum ada data publik yang menunjukkan itu untuk website jasa.
- Jangan sebut angka Clarity sebagai pangsa trafik agen di Indonesia. Sampelnya global dan terbatas pada pengguna Clarity.
- Jangan bilang Brand Agents tersedia untuk semua bisnis. Distribusi produk ke Copilot dan Bing baru untuk merchant Shopify dan WooCommerce yang memenuhi syarat.

## Ringkasnya

Agentic Analytics memberi cara gratis pertama untuk melihat apakah agen AI menyentuh form lead klien. Nilainya untuk website jasa ada di audit: tonton rekaman sesi agen di halaman form, perbaiki label, tombol, dan pesan konfirmasi, lalu laporkan angkanya dengan batasan yang jujur. Kalau form klien belum pernah diuji dari sisi aksesibilitas, mulai dari situ. Hasilnya berguna untuk manusia maupun agen.

Butuh audit form dan tracking lead untuk website bisnis Anda? [Hubungi saya](/contact) untuk konsultasi.

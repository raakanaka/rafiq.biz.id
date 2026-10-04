---
title: "Handover Website: Akses, Backup, Dokumentasi"
description: "Checklist handover website untuk freelancer: pindahkan akses, siapkan backup, dokumentasikan sistem, dan verifikasi SEO agar klien bisa mengelola situs dengan aman."
pubDate: "2026-10-04"
date: "2026-10-04"
excerpt: "Checklist serah terima website: akses akun, backup, dokumentasi, verifikasi SEO, dan pencabutan akses lama tanpa risiko kehilangan data."
category: "Handle Client"
tags: ["Handover Website", "Klien Freelance", "Search Console", "Backup", "Dokumentasi"]
author: "Rafiq"
coverImage: ""
heroImage: ""
---

Handover website adalah proses menyerahkan kendali situs, data, dan cara pengelolaannya kepada klien. Proyek belum benar-benar selesai ketika halaman sudah tampil. Klien perlu memegang akun penting, tahu lokasi backup, memahami cara mengubah konten, dan bisa memeriksa apakah situs tetap dapat ditemukan di Google.

Artikel ini membahas tahap akhir proyek. Tahap awal, seperti meminta akses dengan aman, sudah dibahas dalam [onboarding klien SEO](/blog/onboarding-klien-seo-akses-aman/). Batas pekerjaan dan revisi dibahas dalam [panduan scope creep kontrak freelance](/blog/scope-creep-kontrak-freelance-web/). Fokus di sini adalah memastikan klien tidak bergantung pada akun atau ingatan Anda setelah proyek ditutup.

## Mengapa handover perlu checklist tertulis?

Masalah handover biasanya baru terlihat beberapa minggu kemudian. Domain hampir habis, tetapi email tagihan masuk ke akun developer. Akses Google Search Console hilang karena pemilik yang terverifikasi hanya developer. Backup memang ada, tetapi tidak ada yang tahu cara memulihkannya.

Checklist tertulis membuat tanggung jawab bisa diperiksa. Klien tahu apa yang sudah diterima. Freelancer juga punya catatan jelas bahwa akses, file, dan instruksi telah diserahkan. Jika muncul masalah, kedua pihak bisa melihat titik yang terlewat tanpa saling menebak.

Untuk proyek SEO, waktu handover juga perlu diperhatikan. Status resmi Google menunjukkan [September 2026 spam update](https://status.search.google.com/incidents/XhUDXP7A67iHCD2kmbVu) dimulai 24 September dan belum selesai saat artikel ini disusun. [Liputan Semrush pada 29 September 2026](https://www.semrush.com/blog/google-spam-update-september-2026/) menyarankan agar periode rollout diperlakukan sebagai masa pengamatan. Karena itu, laporan handover sebaiknya mencatat kondisi situs, bukan menyimpulkan penyebab naik turunnya ranking.

## 1. Inventaris semua akun dan pemiliknya

Mulailah dengan daftar sistem yang dibutuhkan agar website tetap berjalan. Untuk tiap sistem, tulis nama layanan, email pemilik, pihak penagih, tanggal perpanjangan, dan siapa yang masih mempunyai akses.

Daftar minimal biasanya mencakup:

- registrar domain dan pengelola DNS;
- hosting, Cloudflare, atau platform deploy;
- repository kode;
- CMS dan akun administrator;
- Google Search Console;
- Google Analytics 4;
- Google Business Profile jika bisnis memakai profil lokal;
- layanan formulir, email transaksional, chat, atau integrasi pihak ketiga;
- lisensi tema, plugin, font, foto, atau layanan berbayar lain.

Pastikan akun bisnis didaftarkan atas nama organisasi klien. Hindari menyerahkan kata sandi pribadi lewat chat. Gunakan fitur undangan pengguna, transfer kepemilikan, atau pengelola kata sandi tim yang disetujui klien.

## 2. Pindahkan kepemilikan Search Console dengan benar

Search Console perlu pengecekan khusus. Dalam [dokumentasi Google tentang owner dan permission](https://support.google.com/webmasters/answer/7687615?hl=en), Google menjelaskan bahwa properti harus memiliki setidaknya satu verified owner. Ada pula delegated owner, yaitu owner yang ditambahkan tanpa token verifikasi.

Perbedaan ini penting. Menurut dokumentasi yang sama, verified owner ditambahkan atau dihapus melalui token di situs. Jika developer lama adalah verified owner, menghapus namanya dari layar pengguna mungkin belum cukup. Token verifikasi miliknya juga perlu dihapus agar akses tidak bisa dipulihkan.

Urutan yang aman:

1. Klien memverifikasi properti dengan akun bisnisnya.
2. Klien memastikan dapat membuka laporan dan pengaturan.
3. Developer menurunkan atau menghapus aksesnya sesuai kesepakatan.
4. Token verifikasi milik developer dihapus jika tidak lagi digunakan.
5. Klien mengecek kembali daftar owner dan user.

Jangan hapus token lama sebelum klien berhasil masuk sebagai owner. Langkah ini mencegah properti kehilangan pemilik.

## 3. Atur peran Google Analytics 4

Untuk Google Analytics, gunakan peran sesuai tugas. [Panduan Google Analytics tentang user management](https://support.google.com/analytics/answer/9305788?hl=en) menyebut bahwa menambah, mengubah, atau menghapus pengguna membutuhkan peran Administrator pada level akun atau properti.

Pastikan minimal satu orang di pihak klien memegang Administrator. Developer cukup mendapatkan Editor atau Viewer jika masih memberi dukungan. Jika kontrak selesai, hapus akses developer setelah klien mengonfirmasi bahwa Administrator dapat masuk.

Simpan juga daftar event penting, misalnya klik WhatsApp atau pengiriman formulir. Catatan ini membantu tim berikutnya memahami data tanpa membongkar ulang konfigurasi.

## 4. Siapkan backup yang bisa dipulihkan

Backup tidak cukup diberi label “ada”. Klien perlu tahu apa yang dicadangkan, lokasi penyimpanan, pemegang aksesnya, dan cara memulihkannya.

Untuk situs berbasis CMS, backup biasanya meliputi database dan file unggahan. Untuk situs berbasis repository, pastikan kode sumber, aset, konfigurasi non-rahasia, serta langkah build tersimpan. Rahasia seperti API key jangan ditulis di dokumen handover biasa. Cukup catat nama variabel lingkungan, fungsinya, dan tempat nilai tersebut dikelola.

Lakukan uji pemulihan jika memungkinkan, misalnya ke staging. Jika belum diuji, tulis secara jujur dalam dokumen. Kalimat “backup tersedia, restore belum diuji” lebih berguna daripada klaim aman tanpa bukti.

## 5. Buat dokumentasi yang dapat dipakai orang lain

Dokumentasi handover tidak perlu panjang. Yang penting, orang lain dapat menjalankan tugas dasar tanpa menghubungi Anda.

Isi minimal:

- URL produksi dan staging;
- teknologi utama yang dipakai;
- cara login ke CMS atau dashboard;
- cara menambah halaman, artikel, atau produk;
- cara deploy dan rollback jika memakai repository;
- daftar plugin atau integrasi penting;
- lokasi backup dan prosedur restore;
- kontak penyedia layanan pihak ketiga;
- batas garansi atau dukungan setelah proyek selesai.

Tambahkan rekaman layar singkat untuk tugas yang sering dilakukan klien. Untuk tugas berisiko, seperti mengubah DNS atau redirect, berikan peringatan jelas agar klien berkonsultasi dulu.

## 6. Verifikasi SEO teknis sebelum menutup proyek

Bagian ini memastikan klien menerima situs yang dapat dirayapi dan dipahami mesin pencari. Periksa beberapa halaman utama, bukan hanya beranda.

Checklist singkat:

- halaman penting mengembalikan status HTTP 200;
- canonical mengarah ke URL yang benar;
- robots.txt tidak memblokir halaman yang ingin diindeks;
- sitemap dapat diakses dan berisi URL final;
- title dan meta description tidak kosong atau duplikat secara massal;
- formulir, tombol WhatsApp, dan link kontak berfungsi;
- redirect lama menuju halaman yang relevan.

Jika proyek melibatkan perubahan URL, pastikan pemetaan URL lama ke URL baru diserahkan kepada klien. [Panduan Google tentang pemindahan situs](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) menyarankan mempertahankan redirect selama mungkin, umumnya setidaknya satu tahun. Catatan ini mencegah redirect dihapus terlalu cepat oleh tim berikutnya.

## 7. Tutup akses lama dan minta konfirmasi

Langkah terakhir adalah membersihkan akses yang tidak lagi diperlukan. Cabut akses hosting, repository, CMS, analytics, dan layanan lain sesuai kesepakatan. Jika masih ada masa dukungan, tetapkan tanggal pencabutan akses di dokumen.

Kirim ringkasan handover berisi daftar akun yang telah dipindahkan, lokasi dokumentasi, status backup, hasil pengecekan teknis, akses developer yang masih tersisa, dan tanggal berakhirnya dukungan. Minta klien membalas setelah memeriksa ringkasan tersebut. Konfirmasi tertulis lebih mudah ditelusuri daripada persetujuan lisan.

## Template singkat checklist handover

Gunakan format ini sebagai lampiran penutupan proyek:

| Area | Bukti selesai | Pemilik setelah handover |
| --- | --- | --- |
| Domain dan DNS | Login klien berhasil, tanggal perpanjangan tercatat | Klien |
| Hosting atau deploy | Akses owner atau admin dipindahkan | Klien |
| Repository | Klien atau tim teknisnya punya akses admin | Klien |
| Search Console | Klien verified owner; token lama ditinjau | Klien |
| GA4 | Klien punya peran Administrator | Klien |
| Backup | Lokasi dan prosedur restore tercatat | Klien |
| Dokumentasi | File dan video panduan diserahkan | Klien |
| SEO teknis | Canonical, robots, sitemap, dan halaman inti dicek | Klien dan pengelola berikutnya |

## Penutup

Handover yang baik membuat klien mampu mengelola situs tanpa bergantung pada satu orang. Pindahkan akun ke pemilik bisnis, siapkan backup yang jelas, dokumentasikan langkah penting, lalu verifikasi kondisi teknis sebelum menutup proyek.

Jika website Anda masih bergantung pada akun developer lama atau belum memiliki dokumentasi akses, mulai dari inventaris akun. Butuh bantuan memeriksa kondisi teknis dan SEO situs? [Konsultasikan website Anda](/contact/).

---
title: "CrUX Mulai Ukur Soft Navigation: Apa Artinya untuk Website SPA dan Non-SPA?"
description: "Chrome menambah metrik eksperimental soft navigation di CrUX. Cek apakah situs Anda terdampak, cara membandingkan angkanya, dan apa yang tidak perlu diubah."
pubDate: "2026-10-14"
date: "2026-10-14"
excerpt: "CrUX kini punya LCP, INP, dan CLS eksperimental yang menghitung soft navigation. Begini cara membacanya tanpa panik dan tanpa mengubah situs berlebihan."
category: "SEO Teknis"
tags: ["Core Web Vitals", "CrUX", "INP", "SPA", "Soft Navigation"]
author: "Rafiq"
coverImage: ""
heroImage: ""
---

Situs Anda dibangun dengan React atau framework SPA lain, dan skor Core Web Vitals terasa lebih jelek daripada pengalaman nyata pengunjung? Ada kabar yang relevan. Chrome menambahkan metrik **eksperimental** ke Chrome UX Report (CrUX) yang menghitung *soft navigation*, yaitu perpindahan halaman di dalam aplikasi tanpa reload penuh ([Search Engine Journal, 13 Oktober 2026](https://www.searchenginejournal.com/google-experimental-soft-navigation-metrics-crux/592820/)).

Singkatnya: untuk sebagian besar situs, tidak ada yang berubah. Untuk situs SPA berat, angka eksperimental bisa tampil lebih baik. Dan skor stabil yang dipakai Google saat ini tidak diubah.

## Status Google Search saat artikel ini ditulis

Per 14 Oktober 2026, [Google Search Status Dashboard](https://status.search.google.com/incidents.json) tidak mencatat update yang sedang rollout. *September 2026 spam update* selesai 8 Oktober 2026, jadi periode ini masih bisa volatil. Berita CrUX ini tidak berkaitan dengan update ranking, dan artikel ini tidak memprediksi pergerakan posisi.

## Apa itu soft navigation?

Soft navigation terjadi ketika klik pengguna mengubah konten sekaligus URL, tanpa browser memuat ulang halaman. Contohnya situs SPA yang berpindah dari `/produk` ke `/produk/sepatu` lewat JavaScript. Chrome menjelaskan fiturnya di [dokumentasi soft navigations](https://developer.chrome.com/docs/web-platform/soft-navigations).

Sebelumnya, CrUX hanya mengukur pemuatan pertama sebuah SPA. Perpindahan berikutnya dikumpulkan bersama pemuatan awal itu, sehingga semua interaksi dan layout shift dibebankan ke URL pendaratan (landing URL) ([SEJ](https://www.searchenginejournal.com/google-experimental-soft-navigation-metrics-crux/592820/)).

Sekarang setiap soft navigation yang terdeteksi dicatat sendiri, dan metriknya dilaporkan di bawah URL tujuan, dengan syarat kelayakan CrUX yang biasa.

## Apa yang ditambahkan ke CrUX?

Ada tiga field baru. Menurut SEJ, ketiganya mengukur hal yang sama seperti versi stabil, tetapi menghitung pemuatan penuh dan soft navigation:

- `experimental_largest_contentful_paint_with_softnavs`
- satu field untuk INP
- satu field untuk CLS

Detail teknis dari Chrome ada di [web.dev](https://web.dev/blog/crux-experimental-soft-navs) dan [catatan rilis CrUX](https://developer.chrome.com/docs/crux/release-notes).

## Siapa yang terdampak?

Tidak banyak situs. Menurut kutipan SEJ dari postingan Chrome, sekitar 70% origin di CrUX punya sedikit atau tanpa trafik soft navigation. Antara 66% dan 75% origin punya soft navigation di bawah 5% dari page view, tergantung platform. Hanya 7,0% origin di Android dan 10,6% di desktop yang soft navigation-nya lebih dari separuh page view.

Pengecualiannya situs besar: di 1.000 situs teratas, 35% di Android dan 42% di desktop bergantung pada soft navigation untuk lebih dari separuh page view.

Annie Sullivan, penulis postingan Chrome, menyatakan:

> "If your site doesn't use JavaScript to dynamically swap out page content and update the URL without a full browser reload, you shouldn't expect to see any changes in your metrics."

Artinya jelas. Website company profile, blog, atau landing page biasa yang memuat ulang halaman di setiap klik tidak akan melihat perbedaan.

## Apa yang berubah di angka eksperimental?

Untuk origin dengan soft navigation 75% sampai 100% di Android, SEJ melaporkan porsi LCP "good" naik dari 26% (metrik stabil) menjadi 87% (metrik eksperimental). Sullivan menjelaskan bahwa ini bukan karena SPA lebih cepat daripada situs multi-halaman, melainkan karena klik lanjutan memang lebih cepat di situs mana pun.

Ringkasan dampak per metrik menurut SEJ:

- **INP**: dihitung per page view, bukan interaksi paling lambat dalam satu sesi. Pass rate di Android untuk situs soft navigation berat kira-kira berlipat dua. Situs SPA berat tetap tertinggal dari situs multi-halaman, jadi JavaScript berat saat pindah halaman masih bisa memengaruhi INP.
- **CLS**: layout shift dikelompokkan per view, bukan per sesi. Situs SPA berat di desktop jadi setara dengan situs multi-halaman. Android masih sedikit tertinggal.
- **LCP**: ikut membaik karena perpindahan lanjutan dihitung terpisah dari pemuatan pertama.

## Apakah ini memengaruhi penilaian Google?

Belum. Menurut SEJ, skor stabil Google tidak berubah saat ini. Chrome menargetkan mengakhiri status eksperimental pada Mei 2027, bergantung pada umpan balik, dan Search Console akan memakai data baru itu setelahnya.

Jadi jangan mengubah arsitektur karena berita ini. Tidak ada janji kenaikan ranking, dan Chrome sendiri menyarankan pembaca "expect some shifts from month to month as the measurement improves", yaitu angka bisa bergeser dari bulan ke bulan selama pengukuran disempurnakan.

## Cara memeriksa situs Anda

Langkah praktis yang aman:

1. **Tentukan tipe situs.** Apakah klik menu memuat ulang halaman penuh? Jika ya, abaikan perubahan ini.
2. **Kalau SPA, buka CrUX Vis.** SEJ menyebut ada toggle baru "Include soft navigations" untuk membandingkan versi stabil dan eksperimental berdampingan.
3. **Catat angka stabil sebagai patokan.** Metrik inilah yang masih dipakai Google saat ini.
4. **Lihat metrik mana yang paling bergeser.** Jika INP eksperimental jauh lebih baik, berarti sebagian masalah ada pada cara pengukuran, bukan interaksi tertentu.
5. **Jangan laporkan angka eksperimental sebagai skor resmi ke klien.** Beri label jelas "eksperimental, belum dipakai Search Console".

## Untuk freelancer dan agensi: cara menjelaskan ke klien

Klien yang melihat dua set angka bisa bingung. Pegangan sederhana yang bisa dipakai:

- Angka stabil = yang dipakai saat ini.
- Angka eksperimental = gambaran tambahan untuk SPA, bisa berubah.
- Perbaikan performa tetap diukur dengan INP, LCP, dan CLS pada data lapangan (field data), bukan hanya skor lab.

Kalau situs klien bukan SPA, cukup sampaikan bahwa berita ini tidak berdampak dan tidak perlu ada pekerjaan tambahan. Ini juga contoh baik untuk tidak menjual "optimasi" yang tidak ada dasarnya.

Kalau Anda masih menyelesaikan masalah INP lebih dulu, lihat juga [panduan memecah tugas JavaScript dengan scheduler.yield()](/blog/optimasi-inp-scheduler-yield/) dan [cara menghindari CLS dari font](/blog/font-lokal-astro-fallback-cls/).

## Yang belum diketahui

- Kapan Search Console akan menampilkan data ini. Chrome hanya menyatakan akan mengadopsinya setelah status eksperimental berakhir.
- Apakah ambang batas (threshold) akan berubah. Postingan yang dirujuk tidak menyebutkannya.
- Seberapa besar angka akan bergeser sebelum final. Chrome sendiri mengakui pengukurannya masih disempurnakan.

Sampai ada pengumuman resmi, perlakukan ini sebagai bahan pemantauan, bukan alasan mengubah situs. Prioritas tetap sama: pengalaman pengguna yang cepat, stabil, dan mudah dipakai.

## Ringkasan

- CrUX menambah LCP, INP, dan CLS eksperimental yang menghitung soft navigation.
- Hanya situs yang banyak memakai JavaScript routing yang akan melihat perbedaan nyata.
- Angka stabil tidak berubah, dan target akhir status eksperimental adalah Mei 2027.
- Situs non-SPA tidak perlu berbuat apa-apa.

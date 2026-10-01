---
title: "INP Website Lambat Saat Diklik? Coba Pecah Tugas JavaScript"
description: "Panduan praktis membaca INP, memisahkan kerja JavaScript dengan scheduler.yield(), dan menguji dampaknya tanpa menjanjikan kenaikan ranking."
pubDate: "2026-10-01"
date: "2026-10-01"
excerpt: "Panduan praktis membaca INP, memisahkan kerja JavaScript dengan scheduler.yield(), dan menguji dampaknya tanpa menjanjikan kenaikan ranking."
category: "Web Development"
tags: ["Core Web Vitals", "INP", "JavaScript", "Web Performance"]
author: "Rafiq"
coverImage: ""
heroImage: ""
---

Tombol menu terasa lambat merespons meski halaman sudah tampil? Jangan langsung mengecilkan semua gambar. Masalahnya bisa ada pada JavaScript yang masih mengerjakan tugas panjang di *main thread* ketika pengunjung mengeklik. Ukur dulu **Interaction to Next Paint (INP)**, temukan interaksi yang lambat, lalu kurangi pekerjaan yang tidak perlu atau pecah pekerjaan yang memang harus dilakukan. `scheduler.yield()` membantu memberi browser kesempatan memproses input, tetapi bukan tombol ajaib untuk setiap masalah performa ([web.dev: Optimize Interaction to Next Paint](https://web.dev/articles/optimize-inp)).

Per 1 Oktober 2026, [Google Search Status Dashboard](https://status.search.google.com/incidents.json) masih mencatat *September 2026 spam update* yang mulai 24 September dan belum ditandai selesai. Karena itu, jangan mengaitkan perubahan ranking selama periode ini dengan satu perbaikan INP. Artikel ini membahas pengalaman interaksi, bukan prediksi posisi Google.

## Apa yang diukur INP?

INP merangkum respons halaman terhadap interaksi seperti klik, ketuk, dan input keyboard sepanjang kunjungan. Nilainya memperhitungkan jeda sebelum kode merespons, waktu pemrosesan *event handler*, hingga kesempatan browser menampilkan hasil visual. Menurut [dokumentasi INP web.dev](https://web.dev/articles/inp), nilai **200 milidetik atau kurang** tergolong baik; **lebih dari 200 hingga 500 milidetik** perlu perbaikan; **lebih dari 500 milidetik** buruk. Penilaian pengalaman nyata menggunakan persentil ke-75, terpisah antara perangkat seluler dan desktop. Angka ini ambang pengalaman, bukan janji konversi atau ranking.

Ada perbedaan penting: halaman yang cepat *muncul* belum tentu cepat *dipakai*. Gambar hero dapat tampil cepat, tetapi tombol filter masih menunggu skrip analitik, widget chat, atau kalkulasi daftar produk. Sebaliknya, INP baik tidak otomatis berarti seluruh website cepat: Anda tetap perlu menilai pemuatan dan stabilitas tata letak secara terpisah. Mulailah dari interaksi nyata yang dikeluhkan pengguna, bukan mengejar satu angka laboratorium tanpa konteks.

## Kapan `scheduler.yield()` berguna?

Browser menjalankan satu tugas pada *main thread* dalam satu waktu. [web.dev menjelaskan tugas di atas 50 milidetik](https://web.dev/articles/optimize-long-tasks) sebagai *long task*: pekerjaan berikutnya, termasuk respons klik, dapat tertahan. Jika suatu pekerjaan harus mengolah banyak item, membaginya menjadi bagian lebih kecil memberi browser kesempatan menjalankan pekerjaan yang lebih mendesak. `scheduler.yield()` mengembalikan `Promise`; setelah `await`, kelanjutan pekerjaan dijadwalkan sebagai tugas baru dengan prioritas kelanjutan, berbeda dari menaruhnya begitu saja di belakang antrean melalui `setTimeout(0)`.

Gunakan ini untuk antrean pekerjaan yang dapat dipecah, misalnya memproses banyak baris hasil pencarian lokal setelah UI sudah menerima input. Jangan menaruhnya secara buta di tengah perhitungan tunggal yang tidak bisa dipotong, atau menganggap `await Promise.resolve()` setara dengan memberi browser kesempatan menggambar: kelanjutan *microtask* bukan pemecahan tugas yang sama. Lebih baik lagi, hapus komputasi yang tidak dibutuhkan sebelum menambah titik *yield*.

### Contoh minimal dengan fallback

```js
function yieldToMain() {
  if (globalThis.scheduler?.yield) return scheduler.yield();
  return new Promise(resolve => setTimeout(resolve, 0));
}

async function processRows(rows, updateRow) {
  let lastYield = performance.now();
  for (const row of rows) {
    updateRow(row);
    if (performance.now() - lastYield >= 50) {
      await yieldToMain();
      lastYield = performance.now();
    }
  }
}
```

Contoh tersebut mengikuti pendekatan waktu dari [panduan pemecahan long task web.dev](https://web.dev/articles/optimize-long-tasks). `updateRow` di sini mewakili pekerjaan sinkron kecil per item; ia tidak aman untuk pekerjaan yang wajib selesai serentak sebelum langkah lain berjalan. Pemanggil harus menunggu `processRows` selesai bila hasil akhir dibutuhkan. Jika tiap item sendiri memakan waktu terlalu lama, potong item itu atau pindahkan komputasi murni ke Web Worker. Jangan *yield* setelah setiap item yang sangat kecil: jeda dan pemulihan tugas juga punya biaya. Angka 50 milidetik adalah titik awal pemeriksaan, bukan jaminan tiap tugas akan selalu selesai di bawah batas tersebut.

Fallback `setTimeout` menjaga kode tetap berjalan ketika `scheduler.yield()` tidak tersedia. Ia memang memberi kesempatan browser mengerjakan tugas lain, tetapi **tidak** menjamin kelanjutan berprioritas seperti API utama. Uji pada browser yang dipakai pelanggan Anda. Jika operasi harus berjalan secara atomik, jangan pecah hanya demi skor; ubah alur agar pekerjaan berat dilakukan di luar jalur interaksi.

## Cara menemukan masalah sebelum mengubah kode

1. Buka laporan **Core Web Vitals** di Search Console untuk melihat kelompok URL yang perlu perhatian. Lalu cek halaman dan perangkat yang relevan di PageSpeed Insights; perhatikan apakah ada data pengguna nyata. Tanpa data lapangan yang cukup, jangan mengklaim website telah mencapai ambang INP tertentu.
2. Reproduksi klik atau ketukan yang terasa lambat di Chrome DevTools Performance, terutama pada perangkat atau *throttling* yang masuk akal. Cari jeda input, *event handler* yang lama, dan pekerjaan rendering setelah handler. [web.dev: Optimize INP](https://web.dev/articles/optimize-inp) membedakan sumber keterlambatan ini; tidak semuanya dapat diselesaikan dengan `scheduler.yield()`.
3. Periksa pekerjaan pihak ketiga. Widget yang tidak penting saat pertama kali mengklik dapat ditunda; daftar yang dirender ulang seluruhnya dapat dipersempit. Hindari menambah skrip pengukur berat hanya untuk mengukur satu masalah.
4. Ubah satu penyebab pada satu waktu. Bandingkan *trace* sebelum dan sesudah pada interaksi sama; pastikan fungsi dan aksesibilitas tombol tetap utuh. Pantau data lapangan berikutnya, jangan menganggap satu tes desktop sebagai bukti pengalaman semua pengguna ponsel.

### Contoh keputusan pada website bisnis

Bayangkan formulir konsultasi yang ketika dikirim harus segera menampilkan status “Sedang dikirim”, lalu menjalankan validasi ringan dan mengirim data. Bila skrip justru melakukan penyaringan ribuan entri atau pekerjaan analitik sebelum status tampil, pengunjung bisa merasa tombolnya mati. Tampilkan umpan balik yang benar, kurangi pekerjaan sinkron, dan pindahkan bagian yang tidak memblokir tindakan utama. Jangan menjanjikan “berhasil” sebelum server mengonfirmasi; status UI harus mengikuti hasil sebenarnya.

Jika hambatannya justru tata letak yang sangat berat setelah klik, *yield* pada loop JavaScript mungkin tidak membantu. Kurangi elemen yang harus dihitung ulang, hindari pembaruan DOM berulang, atau kelompokkan perubahan tampilan. Bila hambatannya permintaan jaringan, ukur waktu server dan desain status pemuatan yang jelas. Memilih obat berdasarkan penyebab menghindari optimasi semu.

## Apa hasil yang masuk akal?

Hasil yang bisa diverifikasi adalah interaksi target lebih responsif dalam pengujian berulang, tanpa fungsi rusak; kemudian data pengguna nyata memperlihatkan perbaikan ketika cukup sampel terkumpul. [Studi kasus Trendyol di web.dev](https://web.dev/case-studies/trendyol-inp) menunjukkan bahwa penelusuran tugas panjang dan pemecahan pekerjaan dapat membantu pada aplikasi mereka, tetapi hasil satu perusahaan bukan estimasi untuk website lain. Prioritaskan kenyamanan pengunjung dan jalur prospek yang bisa dipakai; jangan menjual angka peningkatan ranking dari satu baris kode.

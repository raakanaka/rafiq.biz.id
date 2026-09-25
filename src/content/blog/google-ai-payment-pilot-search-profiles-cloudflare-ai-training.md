---
title: "Google AI Payment Pilot, Search Profiles 10.000 Follower, & Cloudflare Kontrol AI Training — Apa Artinya untuk Website Indonesia"
description: "Google uji coba bayar publisher konten AI, Search Profiles buka akses 10.000 follower, Cloudflare pisahkan AI training dari search crawling. Dampak praktis untuk SEO dan pemilik website Indonesia."
pubDate: "2026-09-25"
heroImage: ""
tags: ["SEO", "AI Search", "Google", "Cloudflare", "Publisher"]
---
Google minggu ini (pekan 14–20 September 2026) merilis tiga update yang mengubah aturan main bagi publisher dan pemilik website. Ringkasnya:

1. **Google uji coba bayar publisher** saat konten mereka dipakai menjawab di Gemini, AI Overviews, dan AI Mode.
2. **Search Profiles** sekarang bisa diakses publisher dengan **10.000 follower** (turun dari 100.000 di Juni, 35.000 di Agustus).
3. **Cloudflare** luncurkan pengaturan **"Disallow AI Training"** yang memblokir *training* tapi tetap biarkan Googlebot, Applebot, Bingbot crawl untuk search.

Ketiganya datang bersamaan. Bukan kebetulan — ini gerakan industri menuju **transparansi dan kontrol** atas konten Anda di era AI search.

---

## 1. Google AI Payment Pilot: Dibayar Kontribusi, Bukan Cuma Terindeks

Menurut [Digiday](https://digiday.com/media/google-rolls-out-pay-value-ai-licensing-program-to-publishers/), Google konfirmasi program pilot tahap awal. Puluhan publisher sudah diundang.

**Mekaniknya:**
- Bayaran terpicu saat konten Anda **"kontribusi signifikan"** saat pembuatan jawaban (answer creation).
- Konten yang cuma **verifikasi fakta** atau ditambahkan *setelah* jawaban utama **tidak kena bayar**.
- Publisher terpilih dapat panel di **Search Console** dengan earning bulanan dan riwayat, bisa *opt-out* lewat settings.

**Yang jadi pertanyaan praktis:**
- Panel bayar **tidak transparan** — tidak pecah *kontribusi apa* yang dibayar. Satu eksekutif publishing menyebutnya *"quite black box"*.
- Menerima bayaran ini **melemahkan posisi negosiasi** ke depan — Google bisaunjuk pilot ini sebagai kompensasi yang sudah diberikan.
- Laporan di samping panel *tracking impressions*, bukan klik.

**Sumber:** [SEJ — Google Tests Paying Publishers For AI Answers Via Search Console](https://www.searchenginejournal.com/google-tests-paying-publishers-for-ai-answers-via-search-console/589414/), [SEJ — SEO Pulse 19 Sep 2026](https://www.searchenginejournal.com/seo-pulse-google-ai-payment-pilot-search-profiles-at-10000/589849/)

---

## 2. Search Console Generative AI Report: Impressions Tanpa Posisi

Report **Generative AI Performance** (diluncurkan global 31 Agustus 2026) sekarang ada di Search Console.

**Batasan kunci (dari John Mueller di Reddit):**
- **Tidak ada data posisi** untuk AI Overviews / AI Mode. Posisi tradisional (1–10) tidak cocok untuk format AI.
- Impression dicatat saat fitur muncul di halaman, **tanpa peduli user scroll**.
- Link di balik tombol *"Show More"* **baru dihitung impression saat di-expand**.
- Report ini **mengandalkan data Web Search yang sudah ada**, bukan data baru.

**Artinya:** Anda tahu *berapa sering* konten muncul di AI Overview, tapi **tidak tahu di urutan ke berapa** di dalam block AI itu. Untuk optimasi, ini berarti: **fokus jadi citable passage**, bukan mengejar "posisi 1 di AI".

**Sumber:** [SEJ — Google Admits Search Console Reporting For AI Search Is Inadequate](https://www.searchenginejournal.com/google-admits-search-console-reporting-for-ai-search-is-inadequate/589236/), [Mueller Reddit](https://www.reddit.com/r/SEO/comments/1wamz5g/comment/p8jutoo/)

---

## 3. Search Profiles: 10.000 Follower, Multi-Brand, Artikel Lebih Panjang

Ibrahim Badr (PM Google Search) [umumkan](https://blog.google/products-and-platforms/products/search/3-new-ways-were-improving-search-profiles-for-publishers/) 16 September 2026:

| Fitur | Detail |
|-------|--------|
| **Threshold follower** | 10.000 (YouTube, Instagram, X, TikTok — gabungan) |
| **Multi-account** | Satu login kelola banyak sub-brand/media |
| **Tampilan artikel** | Thumbnail dioptimasi, headline lebih panjang |
| **Wilayah** | **Hanya US** saat ini |

**Penting:** Google Help Page jelas — **Search Profile tidak langsung mempengaruhi ranking**. Fungsinya di **Discover**: follower bisa lihat lebih banyak konten dari source tersebut di feed mereka.

**Strategi Indonesia:** Kalau Anda punya channel YouTube/IG/X dengan 10k+ follower, **claim Search Profile sekarang**. Ini gratis, memperkuat *entity signal* brand di Knowledge Graph, dan menyiapkan infra kalau fitur ini buka ke Indonesia.

**Sumber:** [Google Blog — 3 New Ways](https://blog.google/products-and-platforms/products/search/3-new-ways-were-improving-search-profiles-for-publishers/), [SEJ — Google Search Profiles Now Available At 10,000 Followers](https://www.searchenginejournal.com/google-search-profiles-10000-followers/589635/)

---

## 4. Cloudflare "Disallow AI Training": Pisahkan Training dari Search

Cloudflare [luncurkan](https://blog.cloudflare.com/accountable-mixed-use-ai-crawlers/) setting baru di Security Settings zona Anda:

| Opsi | Efek |
|------|------|
| **Block AI Bots** (lama) | Blokir *semua* — search + training + agent. **Deprecated**. |
| **Disallow AI Training** (baru) | Blokir *training only*. Googlebot, Applebot, Bingbot **tetap crawl untuk search**. |
| **Managed Robots.txt** | Otomatis sinkron preferensi ke robots.txt. |

**Crawler mixed-use yang dihormati:**
- **Google**: `Google-Extended` (training opt-out) — **tidak mempengaruhi AI Overviews/AI Mode**.
- **Apple**: `Applebot-Extended`.
- **Microsoft**: Belum dukung robots.txt no-training (target awal 2027).

**Label "Accountable"** — Cloudflare memberi label ini pada operator yang:
1. Punya mekanisme opt-out training (robots.txt / standar serupa).
2. Punya mekanisme opt-out AI summaries (langsung / via Cloudflare tahun depan).
3. **URL-level visibility** — halaman mana yang tersedia untuk training + metrik search.
4. **Jaminan** opt-out training **tidak mempengaruhi search results**.

Apple, Google, Microsoft **memenuhi** kualifikasi Accountable.

**Tindakan untuk Anda (hosting Cloudflare):**
1. Buka **Security → Settings** di dashboard Cloudflare.
2. Pilih **"Disallow AI Training"** (bukan "Block AI Bots").
3. Cek **Radar → AI Insights → AI Bot Transparency** untuk lihat perilaku crawler nyata.

**Sumber:** [Cloudflare Blog — Accountable Mixed-Use AI Crawlers](https://blog.cloudflare.com/accountable-mixed-use-ai-crawlers/), [SEJ — Cloudflare Lets Sites Disallow AI Training Without Blocking Googlebot](https://www.searchenginejournal.com/cloudflare-lets-sites-disallow-ai-training-without-blocking-googlebot/589559/)

---

## 5. Apa Yang Harus Dilakukan Pekan Ini (Checklist Praktis)

| Prioritas | Aksi | Alasan |
|-----------|------|--------|
| **Tinggi** | Cek Cloudflare zone → Security Settings → pilih **Disallow AI Training** | Lindungi konten dari training, biarkan search indexing jalan |
| **Tinggi** | Buka Search Console → **Generative AI Performance** → catat URL yang paling sering appear di AI Overview | Identifikasi *citable passage* yang sudah kerja, replikasi pola ke halaman lain |
| **Sedang** | Kalau brand punya 10k+ follower (YouTube/IG/X/TikTok) → **claim Search Profile** di [search.google.com/search-console/search-profiles](https://search.google.com/search-console/search-profiles) | Gratis entity signal, siap kalau fitur buka ke ID |
| **Sedang** | Audit **robots.txt** — pastikan `Google-Extended` di-allow atau di-block sesuai strategi AI Anda | `Google-Extended` = training opt-out saja, **tidak** blokir AI Overviews |
| **Rendah** | Monitor perkembangan **Google AI Payment Pilot** — jangan buru-buru daftar sampai transparansi kontribusi jelas | Hindari lock-in kompensasi "black box" yang melemahkan negosiasi masa depan |

---

## 6. Konteks Lebih Luas: Dua Mesin Sitasi Google, Bukan Satu

Studi Ahrefs (540K query pairs, 2026) temukan:
- AI Overviews & AI Mode **kesimpulan sama ~86%** tapi **URL yang dikutip sama hanya 13.7%**.
- AI Mode mengutip **~9 domain per query** (lebih lebar dari AI Overviews).
- AI Mode lebih berat ke **freshness** dan **entity authority**, bukan raw ranking position.

**Implikasi:** Optimasi untuk AI Overviews ≠ optimasi untuk AI Mode. Anda butuh **passage citable (134–167 kata)**, **entity clarity (Person/Organization schema)**, dan **kesegaran konten (<3 bulan)** untuk keduanya.

---

## Kesimpulan

Minggu ini menandai pergeseran: **dari "apakah AI crawl saya?" ke "bagaimana saya kontrol kontribusi & kompensasinya?"**.

Tiga gerakan sekaligus (Payment Pilot, Search Profiles terbuka, Cloudflare granular control) mengirim sinyal jelas: **pemilik konten punya leverage**. Tapi leverage itu hanya berguna kalau Anda **memahami mekanisme, membaca fine print, dan bertindak selektif**.

Untuk website Indonesia: **mulai dari Cloudflare Disallow AI Training + Search Console Generative AI report**. Itu gratis, risiko nol, dan memberi Anda data nyata — bukan spekulasi.

---

**Sumber primer dikutip:**
- [SEJ SEO Pulse 19 Sep 2026](https://www.searchenginejournal.com/seo-pulse-google-ai-payment-pilot-search-profiles-at-10000/589849/)
- [Google Blog Search Profiles 16 Sep 2026](https://blog.google/products-and-platforms/products/search/3-new-ways-were-improving-search-profiles-for-publishers/)
- [Cloudflare Blog Accountable AI Crawlers](https://blog.cloudflare.com/accountable-mixed-use-ai-crawlers/)
- [Digiday Google AI Licensing Pilot](https://digiday.com/media/google-rolls-out-pay-value-ai-licensing-program-to-publishers/)
- [SEJ Google Admits SC AI Reporting Inadequate](https://www.searchenginejournal.com/google-admits-search-console-reporting-for-ai-search-is-inadequate/589236/)
- [SEJ Cloudflare Disallow AI Training](https://www.searchenginejournal.com/cloudflare-lets-sites-disallow-ai-training-without-blocking-googlebot/589559/)
- [Mueller Reddit AI Position](https://www.reddit.com/r/SEO/comments/1wamz5g/comment/p8jutoo/)

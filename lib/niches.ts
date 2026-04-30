// ================================================================
// MASTER NICHE DEFINITIONS — 48 Niches × 10 Kategori (A–J)
// Each niche provides content templates for landing pages.
// [KOTA] placeholders are replaced at runtime with the target city.
// ================================================================

export interface NicheTestimonial {
  name: string;
  role: string;
  text: string;
}

export interface NicheFeature {
  title: string;
  description: string;
  emoji: string;
}

export interface NicheFAQ {
  q: string;
  a: string;
}

export interface NicheDefinition {
  slug: string;
  category: string;
  categoryName: string;
  title: string;
  description: string;
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
    badge: string;
  };
  problem: string;
  features: NicheFeature[];
  usp: NicheFeature[];
  testimonials: NicheTestimonial[];
  faq: NicheFAQ[];
}

// Helper to build niche definitions concisely
function niche(
  slug: string,
  category: string,
  categoryName: string,
  title: string,
  description: string,
  hero: NicheDefinition["hero"],
  problem: string,
  features: NicheFeature[],
  usp: NicheFeature[],
  testimonials: NicheTestimonial[],
  faq: NicheFAQ[]
): NicheDefinition {
  return { slug, category, categoryName, title, description, hero, problem, features, usp, testimonials, faq };
}

export const NICHES: NicheDefinition[] = [
  // E-COMMERCE UMKM (SPECIAL PRICING)
  niche(
    "ecommerce-umkm", "A", "Teknologi",
    "Jasa Pembuatan Website E-commerce UMKM [KOTA] | Jualan Online Mudah",
    "Jasa pembuatan website e-commerce khusus UMKM di [KOTA]. Fitur lengkap, harga terjangkau mulai 3.5 Juta, siap tingkatkan penjualan Anda seluruh Indonesia.",
    {
      headline: "Website E-commerce Profesional untuk UMKM di [KOTA]",
      subheadline: "Bawa produk lokal Anda ke pasar nasional dengan toko online mandiri yang terintegrasi pembayaran otomatis dan kurir pengiriman.",
      cta: "Konsultasi Toko Online",
      badge: "🛒 Spesialis E-commerce UMKM"
    },
    "Banyak UMKM di [KOTA] masih bergantung pada marketplace dengan potongan admin yang tinggi dan persaingan harga berdarah. Tanpa toko online sendiri, brand Anda sulit berkembang dan membangun loyalitas pelanggan jangka panjang.",
    [
      { title: "Katalog Produk Tak Terbatas", description: "Upload ribuan produk tanpa batas, lengkap dengan variasi warna, ukuran, dan harga grosir untuk agen atau reseller.", emoji: "📦" },
      { title: "Integrasi Payment Gateway", description: "Terima pembayaran otomatis via Virtual Account, QRIS, e-Wallet, dan Kartu Kredit tanpa konfirmasi manual.", emoji: "💳" },
      { title: "Cek Ongkir & Resi Otomatis", description: "Terhubung langsung dengan JNE, J&T, SiCepat, dll. Pelanggan bisa cek ongkir dan lacak resi langsung di website.", emoji: "🚚" },
      { title: "Manajemen Reseller / Dropship", description: "Fitur khusus untuk pendaftaran reseller dengan sistem diskon bertingkat yang memudahkan ekspansi jaringan.", emoji: "👥" }
    ],
    [
      { title: "Bebas Potongan Admin", description: "100% keuntungan masuk ke rekening Anda tanpa potongan platform pihak ketiga.", emoji: "💰" },
      { title: "Aset Digital Milik Sendiri", description: "Bangun database pelanggan Anda sendiri untuk retargeting dan promosi di masa depan.", emoji: "🔒" },
      { title: "SEO Friendly & Cepat", description: "Website dioptimasi agar produk Anda mudah ditemukan di Google oleh pembeli di seluruh Indonesia.", emoji: "⚡" }
    ],
    [
      { name: "Siti Nurhaliza", role: "Owner Batik Nusantara", text: "Sejak beralih dari marketplace ke website e-commerce sendiri, margin keuntungan kami naik 20% karena tidak ada potongan admin lagi!" },
      { name: "Budi Santoso", role: "Distributor Snack Lokal", text: "Fitur reseller-nya sangat membantu. Sekarang kami punya ratusan agen di seluruh Indonesia yang order langsung via website." },
      { name: "Hendra Wijaya", role: "Pemilik Toko Gadget", text: "Integrasi ongkir otomatis membuat admin kami tidak perlu repot cek tarif satu-satu. Proses packing dan pengiriman jadi super cepat." }
    ],
    [
      { q: "Berapa biaya pembuatan website e-commerce UMKM?", a: "Harga paket mulai dari Rp 3.500.000 untuk Paket Basic, Rp 5.500.000 untuk Paket Advanced, dan harga Custom untuk fitur Enterprise." },
      { q: "Apakah sudah termasuk domain dan hosting?", a: "Ya, semua paket sudah termasuk gratis nama domain (.com dan.id ( Untuk Paket Teratas)) dan cloud hosting super cepat selama 1 tahun pertama." },
      { q: "Bisa integrasi dengan pembayaran QRIS dan Virtual Account?", a: "Tentu! Pembeli bisa membayar menggunakan QRIS, Transfer Bank (VA), atau e-Wallet favorit mereka." },
      { q: "Bagaimana cara menghitung ongkos kirim?", a: "Sistem toko online kami terintegrasi dengan API kurir nasional. Ongkir akan dihitung otomatis sesuai kecamatan tujuan pembeli." },
      { q: "Apakah ada batasan jumlah produk?", a: "Tidak ada batasan jumlah produk. Anda bisa mengunggah sebanyak apapun produk sesuai kapasitas hosting yang tersedia." }
    ]
  ),

  // ================================================================
  // KATEGORI A — EXISTING (3 NICHE)
  // ================================================================

  // A1. EKSPORTIR / UMKM
  niche(
    "eksportir", "A", "Existing",
    "Jasa Website Eksportir [KOTA] | Profesional & SEO Friendly",
    "Jasa pembuatan website eksportir dan UMKM terbaik di [KOTA]. Tampil profesional di mata buyer luar negeri. Hubungi kami sekarang!",
    {
      headline: "Jasa Website Eksportir & UMKM Terpercaya di [KOTA]",
      subheadline: "Jangkau buyer mancanegara dengan website profesional yang membangun kepercayaan dan kredibilitas bisnis ekspor Anda di pasar global.",
      cta: "Konsultasi Gratis",
      badge: "🌍 Spesialis Website Ekspor & UMKM"
    },
    "UMKM dan eksportir di [KOTA] kesulitan menembus pasar ekspor tanpa kehadiran digital yang profesional. Buyer luar negeri menilai kredibilitas dari tampilan website — tanpa website, peluang besar terlewatkan begitu saja.",
    [
      { title: "Website Company Profile Eksportir", description: "Desain profesional yang memenuhi standar buyer internasional, dengan informasi perusahaan lengkap dalam bahasa Inggris dan Indonesia.", emoji: "🏢" },
      { title: "Katalog Produk Ekspor", description: "Tampilkan produk unggulan dengan foto berkualitas tinggi, spesifikasi teknis, dan informasi MOQ untuk memudahkan buyer.", emoji: "📦" },
      { title: "Landing Page UMKM", description: "Halaman khusus yang dirancang untuk mengkonversi pengunjung menjadi leads bisnis dengan copywriting persuasif.", emoji: "🎯" },
      { title: "Integrasi WhatsApp Business", description: "Tombol kontak langsung yang memudahkan buyer menghubungi Anda kapanpun untuk inquiry dan negosiasi.", emoji: "📱" }
    ],
    [
      { title: "Desain Profesional Standar Ekspor", description: "Layout modern yang memenuhi ekspektasi buyer internasional, membangun first impression yang kuat.", emoji: "✨" },
      { title: "SEO Keyword Ekspor [KOTA]", description: "Optimasi mesin pencari untuk kata kunci ekspor lokal agar mudah ditemukan buyer yang mencari supplier di [KOTA].", emoji: "🔍" },
      { title: "Selesai dalam 7 Hari", description: "Proses pengerjaan cepat dan efisien tanpa mengorbankan kualitas, sehingga bisnis Anda segera go digital.", emoji: "⚡" }
    ],
    [
      { name: "Budi Santoso", role: "Eksportir Kerajinan Rotan", text: "Website kami sekarang tampil profesional dan buyer dari Eropa langsung percaya. Order meningkat 40% dalam 3 bulan." },
      { name: "Siti Rahayu", role: "Pemilik UMKM Batik", text: "Dulu hanya jualan di marketplace, sekarang punya website sendiri yang tampil elegan. Buyer Jepang langsung tertarik!" },
      { name: "Hendra Wijaya", role: "Supplier Rempah-rempah", text: "Investasi website ini luar biasa worth it. Dalam 2 bulan sudah ada 5 inquiry dari buyer baru di Timur Tengah." }
    ],
    [
      { q: "Berapa biaya pembuatan website eksportir?", a: "Harga mulai dari Rp 1.600.000 untuk paket dasar hingga Rp 2.900.000 untuk paket premium dengan fitur katalog lengkap dan multi-bahasa." },
      { q: "Berapa lama proses pengerjaan?", a: "Rata-rata 5-7 hari kerja tergantung kompleksitas dan kelengkapan materi yang Anda siapkan." },
      { q: "Apakah website bisa diakses buyer luar negeri?", a: "Tentu! Website dihosting di server global dengan CDN, sehingga loading cepat diakses dari negara manapun." },
      { q: "Bisa dalam bahasa Inggris?", a: "Ya, kami menyediakan opsi bilingual (Indonesia & Inggris) agar buyer internasional mudah memahami produk Anda." },
      { q: "Apakah sudah termasuk SEO?", a: "Semua paket sudah termasuk optimasi SEO dasar untuk keyword ekspor dan nama kota agar mudah ditemukan di Google." }
    ]
  ),

  // A2. TRAVEL
  niche(
    "travel", "A", "Existing",
    "Jasa Website Travel Agent [KOTA] | Booking Online Profesional",
    "Jasa website travel agent terbaik di [KOTA]. Tampil profesional, mudah dikelola, optimalkan pencarian Google. Hubungi kami!",
    {
      headline: "Jasa Website Travel Agent Profesional di [KOTA]",
      subheadline: "Hadirkan pengalaman booking online yang mudah dan profesional untuk pelanggan agen perjalanan Anda.",
      cta: "Dapatkan Demo Gratis",
      badge: "✈️ Spesialis Website Travel & Wisata"
    },
    "Agen travel di [KOTA] kehilangan banyak pelanggan potensial karena calon wisatawan mencari paket wisata di Google. Tanpa website profesional, bisnis travel Anda tidak terlihat di era digital.",
    [
      { title: "Halaman Paket Wisata", description: "Tampilkan paket perjalanan lengkap dengan itinerary, harga, dan foto destinasi yang memukau calon wisatawan.", emoji: "🗺️" },
      { title: "Form Booking Online", description: "Sistem pemesanan yang memudahkan pelanggan memilih paket, tanggal, dan jumlah peserta langsung dari website.", emoji: "📋" },
      { title: "Integrasi WhatsApp & Medsos", description: "Hubungkan website dengan WhatsApp Business dan akun media sosial untuk komunikasi multi-channel.", emoji: "📱" },
      { title: "Galeri Destinasi & Blog SEO", description: "Foto-foto destinasi berkualitas tinggi dan artikel wisata untuk menarik traffic organik dari Google.", emoji: "📸" }
    ],
    [
      { title: "Desain Visual Menarik", description: "Tampilan website yang menginspirasi wisatawan dengan foto destinasi full-width dan layout modern.", emoji: "🎨" },
      { title: "SEO Keyword Travel [KOTA]", description: "Optimasi untuk kata kunci travel dan wisata lokal agar agen Anda muncul di halaman pertama Google.", emoji: "🔍" },
      { title: "Manajemen Konten Mudah", description: "Panel admin intuitif untuk update paket wisata, harga, dan jadwal keberangkatan kapanpun.", emoji: "⚙️" }
    ],
    [
      { name: "Ahmad Fauzi", role: "Owner Travel Mandiri", text: "Sejak punya website, booking online meningkat drastis. Customer bisa lihat paket dan langsung pesan tanpa harus ke kantor." },
      { name: "Diana Putri", role: "Manager Duta Wisata Tour", text: "Website kami tampil sangat profesional. Banyak pelanggan baru yang bilang menemukan kami lewat Google." },
      { name: "Rizki Aditya", role: "Founder Backpacker Tour", text: "Desainnya keren dan SEO-nya jalan. Sekarang kami di halaman 1 Google untuk keyword travel di kota kami." }
    ],
    [
      { q: "Berapa biaya pembuatan website travel agent?", a: "Mulai dari Rp 1.600.000 untuk paket dasar dengan halaman paket wisata, hingga Rp 2.900.000 untuk fitur booking online lengkap." },
      { q: "Bisa kelola paket wisata sendiri?", a: "Tentu! Anda mendapat akses admin untuk menambah, mengedit, atau menghapus paket wisata dengan mudah." },
      { q: "Apakah ada sistem pembayaran online?", a: "Kami bisa mengintegrasikan berbagai metode pembayaran termasuk transfer bank dan e-wallet sesuai kebutuhan." },
      { q: "Berapa lama proses pengerjaan?", a: "Rata-rata 5-10 hari kerja tergantung kompleksitas fitur dan kelengkapan materi wisata Anda." },
      { q: "Apakah sudah mobile-friendly?", a: "Ya, semua website kami responsif dan optimal di semua perangkat, dari smartphone hingga desktop." }
    ]
  ),

  // A3. UMROH
  niche(
    "umroh", "A", "Existing",
    "Jasa Website Umroh [KOTA] | Biro Perjalanan Umroh Terpercaya",
    "Jasa website biro umroh profesional di [KOTA]. Desain Islami, SEO optimal, mudah dikelola. Konsultasi gratis!",
    {
      headline: "Jasa Website Umroh Profesional di [KOTA]",
      subheadline: "Bangun kepercayaan calon jamaah dengan website biro umroh yang profesional, elegan, dan bernuansa Islami.",
      cta: "Konsultasi Sekarang",
      badge: "🕋 Spesialis Website Biro Umroh"
    },
    "Biro umroh di [KOTA] kesulitan menjangkau calon jamaah secara online. Di era digital, jamaah mencari dan membandingkan biro umroh melalui Google sebelum memutuskan mendaftar.",
    [
      { title: "Paket Umroh Reguler/Plus/VIP", description: "Tampilkan berbagai paket umroh dengan detail fasilitas, hotel, maskapai, dan harga secara transparan.", emoji: "📦" },
      { title: "Jadwal Keberangkatan", description: "Kalender keberangkatan interaktif yang memudahkan jamaah memilih waktu yang sesuai.", emoji: "📅" },
      { title: "Form Pendaftaran Online", description: "Formulir pendaftaran digital yang memudahkan jamaah mendaftar dari mana saja tanpa harus ke kantor.", emoji: "📝" },
      { title: "Konten Islami & Testimoni Jamaah", description: "Artikel manasik, tips umroh, dan testimoni jamaah sebelumnya untuk membangun kepercayaan.", emoji: "🕌" }
    ],
    [
      { title: "Desain Islami Elegan", description: "Tampilan website bernuansa Islami yang elegan dan menenangkan, sesuai dengan karakter bisnis umroh.", emoji: "✨" },
      { title: "SEO Keyword Umroh [KOTA]", description: "Optimasi pencarian untuk kata kunci umroh di kota Anda agar mudah ditemukan calon jamaah.", emoji: "🔍" },
      { title: "Membangun Kepercayaan", description: "Website profesional meningkatkan kredibilitas biro umroh Anda di mata calon jamaah dan keluarganya.", emoji: "🤝" }
    ],
    [
      { name: "H. Muhammad Ridwan", role: "Direktur Alhijrah Tour", text: "Alhamdulillah, website kami sekarang tampil profesional. Jamaah dari luar kota pun mendaftar karena menemukan kami di Google." },
      { name: "Ustadzah Fatimah", role: "Owner Safira Umroh", text: "Desain Islami-nya sangat cantik dan elegan. Banyak jamaah yang merasa yakin mendaftar setelah melihat website kami." },
      { name: "Pak Darmawan", role: "Manager Baitul Haramain", text: "Form pendaftaran online sangat memudahkan. Jamaah bisa daftar 24 jam dan kami tinggal follow up via WhatsApp." }
    ],
    [
      { q: "Berapa biaya pembuatan website umroh?", a: "Mulai dari Rp 1.600.000 untuk paket basic hingga Rp 2.900.000 untuk paket premium dengan fitur pendaftaran online lengkap." },
      { q: "Bisa tambah paket umroh sendiri?", a: "Tentu, Anda mendapat akses admin untuk update paket, harga, dan jadwal keberangkatan kapanpun." },
      { q: "Apakah website aman untuk data jamaah?", a: "Ya, website dilengkapi SSL certificate dan keamanan standar industri untuk melindungi data pribadi jamaah." },
      { q: "Berapa lama website selesai?", a: "Rata-rata 5-7 hari kerja setelah materi lengkap diterima oleh tim kami." },
      { q: "Apakah bisa integrasi WhatsApp?", a: "Ya, tombol WhatsApp otomatis terpasang di setiap halaman untuk memudahkan jamaah menghubungi Anda." }
    ]
  ),

  // ================================================================
  // KATEGORI B — KESEHATAN & KECANTIKAN (5 NICHE)
  // ================================================================

  // B1. DOKTER & KLINIK
  niche(
    "klinik", "B", "Kesehatan & Kecantikan",
    "Jasa Website Klinik & Dokter [KOTA] | Profesional & Terpercaya",
    "Jasa website klinik dan dokter profesional di [KOTA]. Mudah ditemukan pasien di Google. Konsultasi gratis sekarang!",
    {
      headline: "Jasa Website Klinik & Dokter Terpercaya di [KOTA]",
      subheadline: "Mudahkan pasien menemukan klinik Anda di Google dengan website medis yang profesional dan terpercaya.",
      cta: "Konsultasi Gratis",
      badge: "🏥 Spesialis Website Klinik & Dokter"
    },
    "Klinik dan praktik dokter di [KOTA] kehilangan banyak pasien baru karena tidak terindeks di Google. Saat ini, 80% pasien mencari dokter dan klinik terdekat melalui pencarian online.",
    [
      { title: "Profil Dokter & Spesialisasi", description: "Halaman profil lengkap untuk setiap dokter dengan latar belakang pendidikan, spesialisasi, dan pengalaman praktik.", emoji: "👨‍⚕️" },
      { title: "Jadwal Praktik Online", description: "Jadwal praktik real-time yang memudahkan pasien mengetahui kapan dokter tersedia tanpa harus menelepon.", emoji: "📅" },
      { title: "Form Pendaftaran Pasien", description: "Formulir pendaftaran online yang mempersingkat waktu tunggu dan memudahkan administrasi klinik.", emoji: "📋" },
      { title: "Artikel Kesehatan untuk SEO", description: "Konten edukatif kesehatan yang meningkatkan traffic organik dan memposisikan klinik sebagai sumber terpercaya.", emoji: "📰" }
    ],
    [
      { title: "Desain Medis Profesional", description: "Tampilan bersih, modern, dan profesional yang mencerminkan standar kesehatan tinggi klinik Anda.", emoji: "✨" },
      { title: "SEO Lokal Klinik [KOTA]", description: "Optimasi pencarian lokal agar klinik Anda muncul saat pasien mencari dokter terdekat di [KOTA].", emoji: "🔍" },
      { title: "Mobile-Friendly & Cepat", description: "Website responsif yang cepat diakses dari smartphone, penting bagi pasien yang mencari klinik darurat.", emoji: "📱" }
    ],
    [
      { name: "dr. Anisa Putri", role: "Dokter Umum, Klinik Sehat Sentosa", text: "Pasien baru meningkat signifikan sejak punya website. Mereka bilang menemukan klinik kami lewat Google." },
      { name: "drg. Bambang Suryanto", role: "Dokter Gigi, Klinik Senyum Cerah", text: "Website sangat membantu pasien melihat jadwal praktik. Antrian lebih teratur dan pasien lebih puas." },
      { name: "dr. Citra Dewi, Sp.A", role: "Dokter Anak, Klinik Buah Hati", text: "Desain website sangat profesional dan meyakinkan. Orang tua jadi lebih percaya membawa anaknya ke klinik kami." }
    ],
    [
      { q: "Berapa biaya pembuatan website klinik?", a: "Mulai dari Rp 1.600.000 untuk profil klinik dasar hingga Rp 2.900.000 untuk fitur pendaftaran online dan multi-dokter." },
      { q: "Berapa lama proses pengerjaan?", a: "Rata-rata 5-7 hari kerja. Kami membutuhkan data dokter, jadwal, dan foto klinik dari Anda." },
      { q: "Bisa update jadwal dokter sendiri?", a: "Ya, panel admin kami sangat mudah digunakan untuk update jadwal, tambah dokter baru, atau edit informasi klinik." },
      { q: "Apakah data pasien aman?", a: "Website dilengkapi SSL dan standar keamanan yang sesuai untuk melindungi data pasien." },
      { q: "Bisa integrasi Google Maps?", a: "Ya, peta lokasi klinik otomatis tertampil agar pasien mudah menemukan alamat Anda." }
    ]
  ),

  // B2. SALON & BARBERSHOP
  niche(
    "salon", "B", "Kesehatan & Kecantikan",
    "Jasa Website Salon & Barbershop [KOTA] | Booking Online Mudah",
    "Jasa website salon dan barbershop profesional di [KOTA]. Sistem booking online, tampil menarik di Google. Hubungi kami!",
    {
      headline: "Jasa Website Salon & Barbershop Modern di [KOTA]",
      subheadline: "Hadirkan sistem booking online dan tampilan stylish yang memikat pelanggan baru untuk salon Anda.",
      cta: "Lihat Demo",
      badge: "💇 Spesialis Website Salon & Barbershop"
    },
    "Salon dan barbershop di [KOTA] masih mengandalkan booking manual via chat yang tidak efisien. Pelanggan era digital mengharapkan kemudahan reservasi online yang profesional.",
    [
      { title: "Katalog Layanan & Harga", description: "Daftar lengkap layanan salon dengan harga transparan, dari potong rambut hingga treatment warna.", emoji: "💈" },
      { title: "Sistem Reservasi Online", description: "Booking appointment langsung dari website dengan pilihan stylist, tanggal, dan jam yang tersedia.", emoji: "📅" },
      { title: "Galeri Hasil Kerja", description: "Showcase portofolio gaya rambut dan treatment terbaik untuk meyakinkan calon pelanggan.", emoji: "📸" },
      { title: "Integrasi Instagram & WhatsApp", description: "Feed Instagram terintegrasi dan tombol WhatsApp untuk komunikasi real-time dengan pelanggan.", emoji: "📱" }
    ],
    [
      { title: "Desain Modern & Estetik", description: "Website dengan tampilan stylish dan kekinian yang mencerminkan kualitas salon Anda.", emoji: "✨" },
      { title: "SEO Keyword Salon [KOTA]", description: "Optimasi pencarian lokal untuk kata kunci salon dan barbershop di area [KOTA].", emoji: "🔍" },
      { title: "Notifikasi Booking Otomatis", description: "Sistem notifikasi otomatis via email/WA saat ada booking baru masuk.", emoji: "🔔" }
    ],
    [
      { name: "Yuni Marlina", role: "Owner Beauty Studio", text: "Booking online sangat mengubah cara kami kerja. Pelanggan happy karena tidak perlu antri lama." },
      { name: "Kevin Pratama", role: "Owner The Barber Co.", text: "Website kami keren banget! Banyak pelanggan baru yang datang karena lihat portofolio online kami." },
      { name: "Lisa Anggraini", role: "Manager Salon Cantik", text: "Sekarang jadwal stylist lebih teratur dan efisien. Revenue naik 30% sejak pakai booking online." }
    ],
    [
      { q: "Berapa biaya pembuatan website salon?", a: "Mulai dari Rp 1.600.000 untuk katalog layanan dasar hingga Rp 2.900.000 dengan sistem booking online terintegrasi." },
      { q: "Bagaimana fitur booking online bekerja?", a: "Pelanggan memilih layanan, stylist, tanggal & jam, lalu konfirmasi. Anda mendapat notifikasi otomatis di WhatsApp." },
      { q: "Bisa update harga layanan sendiri?", a: "Ya, panel admin memungkinkan Anda mengubah harga, menambah layanan baru, atau mengatur promo dengan mudah." },
      { q: "Apakah bisa tampilkan galeri dari Instagram?", a: "Bisa! Kami mengintegrasikan feed Instagram Anda langsung di website untuk menampilkan karya terbaru." },
      { q: "Berapa lama website selesai?", a: "Rata-rata 5-7 hari kerja setelah semua materi (foto, daftar layanan, harga) diterima." }
    ]
  ),

  // B3. SPA & REFLEKSI
  niche(
    "spa", "B", "Kesehatan & Kecantikan",
    "Jasa Website Spa & Refleksi [KOTA] | Elegan & Profesional",
    "Jasa website spa dan refleksi profesional di [KOTA]. Tampil elegan, mudah ditemukan di Google. Konsultasi gratis!",
    {
      headline: "Jasa Website Spa & Refleksi Elegan di [KOTA]",
      subheadline: "Hadirkan kesan mewah dan menenangkan lewat website spa yang memanjakan mata calon tamu Anda.",
      cta: "Konsultasi Gratis",
      badge: "🧖 Spesialis Website Spa & Wellness"
    },
    "Spa dan refleksi di [KOTA] kesulitan menarik tamu baru tanpa kehadiran online yang kuat. Calon pengunjung mencari spa terdekat dengan suasana terbaik melalui Google.",
    [
      { title: "Menu Treatment & Harga", description: "Daftar treatment lengkap mulai dari massage, facial, body scrub hingga refleksi dengan harga transparan.", emoji: "🧴" },
      { title: "Sistem Reservasi Online", description: "Booking treatment dengan pilihan terapis, ruangan, dan waktu yang tersedia.", emoji: "📅" },
      { title: "Galeri Suasana Spa", description: "Foto-foto suasana spa yang menenangkan untuk meyakinkan calon tamu akan pengalaman premium.", emoji: "📸" },
      { title: "Voucher Digital & Artikel", description: "Jual voucher gift secara online dan artikel relaksasi untuk SEO organik.", emoji: "🎁" }
    ],
    [
      { title: "Desain Elegan & Menenangkan", description: "Tampilan website yang mewah dengan palette warna calm yang mencerminkan suasana spa.", emoji: "✨" },
      { title: "SEO Keyword Spa [KOTA]", description: "Optimalkan pencarian lokal agar spa Anda muncul pertama saat tamu mencari spa di [KOTA].", emoji: "🔍" },
      { title: "Loading Cepat & Mobile-Friendly", description: "Website responsif yang cepat, penting untuk tamu yang mencari spa saat sedang mobile.", emoji: "⚡" }
    ],
    [
      { name: "Dewi Kusuma", role: "Owner Serenity Spa", text: "Website elegan kami membuat tamu merasa yakin sebelum datang. Reservasi online meningkat 50% dalam sebulan." },
      { name: "Maya Sari", role: "Manager Refresh Reflexology", text: "Desainnya mewah dan menenangkan persis seperti spa kami. Tamu baru berdatangan lewat Google." },
      { name: "Ratna Dewi", role: "Founder Aura Wellness", text: "Voucher digital jadi revenue stream baru. Banyak yang beli voucher untuk hadiah, semua lewat website." }
    ],
    [
      { q: "Berapa biaya website spa?", a: "Mulai dari Rp 1.600.000 untuk profil spa dasar hingga Rp 2.900.000 dengan reservasi online dan voucher digital." },
      { q: "Bisa sistem reservasi online?", a: "Ya, fitur booking tersedia di paket Pro ke atas, lengkap dengan notifikasi otomatis ke WhatsApp Anda." },
      { q: "Bisa update menu treatment sendiri?", a: "Tentu, panel admin intuitif memudahkan Anda mengubah treatment, harga, dan promo kapan saja." },
      { q: "Apakah desainnya bisa disesuaikan?", a: "Ya, desain disesuaikan dengan branding spa Anda termasuk warna, logo, dan gaya visual." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 5-7 hari kerja setelah brief lengkap dan materi foto diterima." }
    ]
  ),

  // B4. KLINIK KECANTIKAN & SKINCARE
  niche(
    "klinik-kecantikan", "B", "Kesehatan & Kecantikan",
    "Jasa Website Klinik Kecantikan [KOTA] | Skincare & Aesthetic",
    "Jasa website klinik kecantikan dan skincare profesional di [KOTA]. SEO optimal, tampil premium. Hubungi kami sekarang!",
    {
      headline: "Jasa Website Klinik Kecantikan & Skincare di [KOTA]",
      subheadline: "Tampil premium dan profesional di mata calon pasien kecantikan dengan website aesthetic yang memukau.",
      cta: "Dapatkan Demo",
      badge: "💎 Spesialis Website Klinik Kecantikan"
    },
    "Klinik kecantikan di [KOTA] kalah bersaing karena tidak punya website profesional. Calon pasien membandingkan klinik lewat Google dan memilih yang tampilannya paling meyakinkan.",
    [
      { title: "Daftar Treatment Aesthetic", description: "Katalog treatment kecantikan lengkap mulai dari facial, laser, filler, botox hingga peeling.", emoji: "💉" },
      { title: "Galeri Before-After", description: "Showcase hasil treatment nyata dengan foto before-after yang meningkatkan kepercayaan calon pasien.", emoji: "📸" },
      { title: "Profil Dokter Kecantikan", description: "Profil lengkap dokter estetika dengan sertifikasi dan pengalaman untuk membangun kredibilitas.", emoji: "👩‍⚕️" },
      { title: "Promo & Blog Skincare", description: "Halaman promo bulanan dan blog tips skincare untuk meningkatkan traffic dan engagement.", emoji: "📰" }
    ],
    [
      { title: "Desain Premium & Feminine", description: "Tampilan website mewah dengan estetika yang sesuai industri kecantikan.", emoji: "✨" },
      { title: "SEO Klinik Kecantikan [KOTA]", description: "Optimasi pencarian untuk keyword klinik kecantikan dan skincare di [KOTA].", emoji: "🔍" },
      { title: "Kepercayaan Pasien Meningkat", description: "Website profesional meningkatkan confidence calon pasien untuk melakukan treatment.", emoji: "💯" }
    ],
    [
      { name: "dr. Putri Ayu, Sp.KK", role: "Dermatolog, Glow Aesthetic Clinic", text: "Galeri before-after di website sangat efektif. Calon pasien datang sudah yakin dengan hasil treatment kami." },
      { name: "Nadia Safitri", role: "Owner NS Beauty Clinic", text: "Website premium kami membuat klinik tampil berbeda dari kompetitor. Pasien baru meningkat drastis." },
      { name: "dr. Felicia", role: "Founder Luminous Skin Clinic", text: "Blog skincare kami mendatangkan traffic organik yang luar biasa. Banyak pembaca yang akhirnya jadi pasien." }
    ],
    [
      { q: "Berapa biaya website klinik kecantikan?", a: "Mulai dari Rp 1.600.000 untuk profil klinik dasar hingga Rp 2.900.000 dengan galeri before-after dan sistem promo." },
      { q: "Bisa tampilkan galeri before-after?", a: "Ya, fitur galeri before-after tersedia lengkap dengan kategorisasi jenis treatment." },
      { q: "Bagaimana cara kelola promo?", a: "Panel admin memudahkan Anda membuat, mengedit, dan mengatur jadwal promo dengan visual yang menarik." },
      { q: "Apakah desain bisa custom?", a: "Ya, desain disesuaikan dengan branding klinik Anda termasuk color scheme dan style visual." },
      { q: "Berapa lama proses pengerjaan?", a: "Rata-rata 5-10 hari kerja tergantung kompleksitas fitur dan materi yang Anda siapkan." }
    ]
  ),

  // B5. BIDAN & KLINIK IBU ANAK
  niche(
    "bidan", "B", "Kesehatan & Kecantikan",
    "Jasa Website Bidan & Klinik Ibu Anak [KOTA] | Terpercaya",
    "Jasa website bidan dan klinik ibu anak profesional di [KOTA]. Mudah ditemukan pasien, tampil terpercaya. Hubungi kami!",
    {
      headline: "Jasa Website Bidan & Klinik Ibu Anak Terpercaya di [KOTA]",
      subheadline: "Mudahkan ibu hamil menemukan layanan kebidanan terbaik Anda melalui kehadiran online yang profesional.",
      cta: "Konsultasi Gratis",
      badge: "👶 Spesialis Website Bidan & Klinik Ibu Anak"
    },
    "Bidan dan klinik ibu anak di [KOTA] sulit dijangkau oleh ibu hamil baru yang mencari layanan kebidanan di Google. Tanpa website, Anda kehilangan potensi pasien yang sangat besar.",
    [
      { title: "Layanan Kebidanan & Persalinan", description: "Informasi lengkap layanan dari pemeriksaan kehamilan, persalinan, hingga perawatan pasca melahirkan.", emoji: "🤱" },
      { title: "Jadwal Periksa Online", description: "Jadwal praktik bidan yang bisa dilihat pasien kapanpun, memudahkan perencanaan kunjungan.", emoji: "📅" },
      { title: "Artikel Parenting untuk SEO", description: "Konten edukatif tentang kehamilan dan parenting yang mendatangkan traffic organik.", emoji: "📰" },
      { title: "Form Konsultasi & Galeri Fasilitas", description: "Formulir konsultasi online dan foto fasilitas klinik yang meyakinkan calon pasien.", emoji: "🏥" }
    ],
    [
      { title: "Desain Hangat & Bersahabat", description: "Tampilan website yang warm dan friendly sesuai dengan karakter layanan ibu dan anak.", emoji: "💛" },
      { title: "SEO Keyword Bidan [KOTA]", description: "Optimasi pencarian lokal agar ibu hamil mudah menemukan praktik Anda di Google.", emoji: "🔍" },
      { title: "Membangun Kepercayaan", description: "Website profesional meningkatkan rasa aman ibu hamil untuk memilih layanan Anda.", emoji: "🤝" }
    ],
    [
      { name: "Bidan Rina Wati", role: "Klinik Bunda Sehat", text: "Sejak punya website, ibu hamil dari berbagai penjuru kota datang ke klinik kami. Google sangat membantu." },
      { name: "Bidan Nur Aisyah", role: "Praktik Mandiri Bidan Nur", text: "Website membuat praktik saya tampil profesional. Ibu hamil merasa yakin dan nyaman datang ke sini." },
      { name: "dr. Indah, Sp.OG", role: "Klinik Ibu & Anak Sayang Bunda", text: "Artikel parenting di website kami mendatangkan banyak pembaca yang kemudian menjadi pasien tetap." }
    ],
    [
      { q: "Berapa biaya website bidan?", a: "Mulai dari Rp 1.600.000 untuk profil praktik bidan hingga Rp 2.900.000 untuk klinik ibu anak dengan fitur lengkap." },
      { q: "Bisa tampilkan layanan lengkap?", a: "Ya, semua layanan dari pemeriksaan kehamilan, persalinan, imunisasi hingga konsultasi laktasi bisa ditampilkan." },
      { q: "Bagaimana cara update jadwal?", a: "Panel admin sangat mudah digunakan untuk update jadwal praktik, menambah layanan, atau mengubah informasi." },
      { q: "Apakah data pasien aman?", a: "Website dilengkapi SSL dan enkripsi standar untuk melindungi data pasien yang masuk melalui form." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 5-7 hari kerja setelah brief dan materi lengkap diterima." }
    ]
  ),

  // ================================================================
  // KATEGORI C — KULINER & F&B (5 NICHE)
  // ================================================================

  // C1. RESTORAN & RUMAH MAKAN
  niche(
    "restoran", "C", "Kuliner & F&B",
    "Jasa Website Restoran & Rumah Makan [KOTA] | Menu Online",
    "Jasa website restoran dan rumah makan profesional di [KOTA]. Tampilkan menu online, reservasi meja, optimalkan Google. Hubungi kami!",
    {
      headline: "Jasa Website Restoran & Rumah Makan Profesional di [KOTA]",
      subheadline: "Tampilkan menu dan reservasi meja secara online untuk meningkatkan kunjungan restoran Anda.",
      cta: "Lihat Demo",
      badge: "🍽️ Spesialis Website Restoran"
    },
    "Restoran di [KOTA] kehilangan tamu potensial yang mencari rekomendasi tempat makan di Google. Tanpa website, restoran Anda tidak terlihat di pencarian online.",
    [
      { title: "Menu Digital dengan Foto", description: "Tampilan menu lengkap dengan foto makanan yang menggugah selera dan harga transparan.", emoji: "📋" },
      { title: "Sistem Reservasi Meja", description: "Pemesanan meja online yang memudahkan tamu memastikan tempat sebelum datang.", emoji: "🪑" },
      { title: "Integrasi Google Maps", description: "Lokasi restoran tertampil di peta agar tamu mudah menemukan alamat Anda.", emoji: "📍" },
      { title: "Galeri & Ulasan Pelanggan", description: "Showcase suasana restoran dan ulasan positif untuk meyakinkan calon pengunjung.", emoji: "📸" }
    ],
    [
      { title: "Desain Appetizing & Visual", description: "Tampilan yang menggugah selera dengan foto makanan full-width dan warna hangat.", emoji: "🎨" },
      { title: "SEO Keyword Restoran [KOTA]", description: "Optimasi pencarian untuk kata kunci kuliner dan restoran di area [KOTA].", emoji: "🔍" },
      { title: "Mudah Update Menu", description: "Panel admin untuk mengubah menu, harga, dan promo tanpa bantuan developer.", emoji: "⚙️" }
    ],
    [
      { name: "Chef Andi Prasetyo", role: "Owner Warung Nusantara", text: "Menu digital di website sangat membantu. Tamu bisa lihat menu sebelum datang dan langsung pesan favorit mereka." },
      { name: "Ibu Murni", role: "Pemilik RM Padang Sederhana", text: "Reservasi online membuat antrian lebih teratur. Weekend tidak lagi kacau karena tamu sudah booking meja." },
      { name: "David Susanto", role: "Manager Sakura Japanese Restaurant", text: "Sejak punya website, pelanggan dari hotel dan kantor sekitar banyak yang datang. Mereka menemukan kami lewat Google." }
    ],
    [
      { q: "Berapa biaya website restoran?", a: "Mulai dari Rp 1.600.000 untuk menu digital dasar hingga Rp 2.900.000 dengan reservasi online dan galeri lengkap." },
      { q: "Bisa update menu sendiri?", a: "Ya, Anda bisa menambah, mengubah, atau menghapus menu beserta foto dan harga dari panel admin." },
      { q: "Apakah ada fitur reservasi?", a: "Ya, sistem reservasi tersedia di paket Pro ke atas dengan notifikasi otomatis ke WhatsApp Anda." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 5-7 hari kerja setelah foto makanan dan data menu lengkap diterima." },
      { q: "Bisa tampilkan promo?", a: "Tentu! Ada halaman khusus promo yang bisa Anda update sesuai event atau hari besar." }
    ]
  ),

  // C2. CATERING
  niche(
    "catering", "C", "Kuliner & F&B",
    "Jasa Website Catering [KOTA] | Order Online Profesional",
    "Jasa website catering profesional di [KOTA]. Tampilkan paket, harga, dan form order online. Hubungi kami sekarang!",
    {
      headline: "Jasa Website Catering Profesional di [KOTA]",
      subheadline: "Tingkatkan pesanan catering Anda lewat sistem order online yang profesional dan mudah digunakan.",
      cta: "Konsultasi Gratis",
      badge: "🍱 Spesialis Website Catering"
    },
    "Usaha catering di [KOTA] masih banyak mengandalkan dari mulut ke mulut, kehilangan order potensial dari pelanggan yang mencari jasa catering lewat internet.",
    [
      { title: "Paket Menu & Harga", description: "Tampilkan berbagai paket catering dari nasi kotak, prasmanan, hingga paket pernikahan dengan harga jelas.", emoji: "📦" },
      { title: "Form Order Online", description: "Formulir pemesanan yang memudahkan klien menentukan tanggal, jumlah porsi, dan menu pilihan.", emoji: "📝" },
      { title: "Galeri Masakan & Event", description: "Foto-foto hidangan dan dokumentasi event yang meyakinkan calon klien akan kualitas Anda.", emoji: "📸" },
      { title: "Area Layanan & Testimoni", description: "Informasi area delivery dan testimoni dari klien korporat serta pernikahan.", emoji: "🗺️" }
    ],
    [
      { title: "Desain Menarik & Profesional", description: "Website yang menampilkan makanan dengan visual menggiurkan dan tata letak terorganisir.", emoji: "✨" },
      { title: "SEO Keyword Catering [KOTA]", description: "Optimasi pencarian agar usaha catering Anda muncul saat orang mencari catering di [KOTA].", emoji: "🔍" },
      { title: "Mudah Tambah Paket Baru", description: "Admin panel untuk menambah menu baru, update harga, dan kelola order masuk.", emoji: "⚙️" }
    ],
    [
      { name: "Ibu Kartini", role: "Owner Catering Berkah Rasa", text: "Order meningkat 60% sejak punya website. Klien korporat bisa lihat menu dan langsung order online." },
      { name: "Pak Sugiarto", role: "Catering Pesta Mulia", text: "Dulu hanya mengandalkan kenalan, sekarang banyak order dari Google. Website benar-benar game changer." },
      { name: "Mbak Lina", role: "Owner Dapur Mama Catering", text: "Form order online sangat membantu. Tidak perlu bolak-balik chat untuk konfirmasi detail pesanan." }
    ],
    [
      { q: "Berapa biaya website catering?", a: "Mulai dari Rp 1.600.000 untuk katalog menu dasar hingga Rp 2.900.000 dengan form order online dan galeri lengkap." },
      { q: "Berapa minimum order?", a: "Minimum order bisa Anda atur sendiri di panel admin sesuai kebijakan catering Anda." },
      { q: "Apakah ada area delivery?", a: "Ya, Anda bisa menampilkan peta area delivery dan menginformasikan jangkauan layanan pengiriman." },
      { q: "Bisa customisasi menu per event?", a: "Tentu, form order bisa disesuaikan untuk menerima request menu khusus dari pelanggan." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 5-7 hari kerja setelah foto menu dan data paket catering lengkap diterima." }
    ]
  ),

  // C3. KEDAI KOPI & CAFE
  niche(
    "cafe", "C", "Kuliner & F&B",
    "Jasa Website Cafe & Kedai Kopi [KOTA] | Estetik & Modern",
    "Jasa website cafe dan kedai kopi profesional di [KOTA]. Desain estetik, menu digital, optimalkan Google Maps. Hubungi kami!",
    {
      headline: "Jasa Website Cafe & Kedai Kopi Estetik di [KOTA]",
      subheadline: "Tampil kekinian dan tarik lebih banyak pengunjung dengan website cafe yang aesthetic dan Instagramable.",
      cta: "Lihat Demo",
      badge: "☕ Spesialis Website Cafe & Coffee Shop"
    },
    "Cafe di [KOTA] banyak yang hanya mengandalkan media sosial untuk promosi. Tanpa website sendiri, identitas brand Anda tidak lengkap dan sulit ditemukan di Google Maps.",
    [
      { title: "Menu Digital & Harga", description: "Tampilkan menu kopi, minuman, dan makanan dengan desain yang sesuai vibes cafe Anda.", emoji: "☕" },
      { title: "Galeri Estetik Cafe", description: "Foto-foto suasana cafe yang Instagramable untuk menarik pengunjung datang.", emoji: "📸" },
      { title: "Event & Promo", description: "Halaman khusus untuk acara live music, workshop, dan promo seasonal.", emoji: "🎶" },
      { title: "Google Maps & Form Reservasi", description: "Integrasi peta lokasi dan formulir reservasi tempat untuk group atau event.", emoji: "📍" }
    ],
    [
      { title: "Desain Kekinian & Aesthetic", description: "Website yang mencerminkan vibes cafe Anda — minimalis, industrial, atau cozy.", emoji: "🎨" },
      { title: "SEO Keyword Cafe [KOTA]", description: "Optimasi pencarian saat orang mencari coffee shop atau nongkrong di [KOTA].", emoji: "🔍" },
      { title: "Optimalkan Google Business", description: "Integrasi Google Business Profile untuk meningkatkan visibilitas di Google Maps.", emoji: "📍" }
    ],
    [
      { name: "Rangga Aditya", role: "Owner Kopi Nusantara", text: "Website cafe kami desainnya keren dan sesuai branding. Pengunjung baru banyak yang datang karena lihat di Google." },
      { name: "Sarah Lestari", role: "Founder Boemi Coffee", text: "Galeri di website membuat orang penasaran datang. Review Google kami juga naik karena visibility website." },
      { name: "Irfan Hakim", role: "Manager Kopitektur", text: "Event booking via website sangat membantu. Weekend selalu penuh karena orang sudah reservasi tempat online." }
    ],
    [
      { q: "Berapa biaya website cafe?", a: "Mulai dari Rp 1.600.000 untuk menu digital dasar hingga Rp 2.900.000 dengan reservasi online dan event page." },
      { q: "Bisa integrasi Instagram?", a: "Ya, feed Instagram cafe Anda bisa ditampilkan langsung di website untuk konten yang selalu fresh." },
      { q: "Bisa update menu sendiri?", a: "Tentu, panel admin memudahkan Anda update menu, harga, dan promo kapanpun." },
      { q: "Apakah desain bisa sesuai branding?", a: "Ya, kami menyesuaikan desain dengan identitas visual dan vibes cafe Anda." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 5-7 hari kerja. Makin cepat jika foto dan materi sudah tersedia." }
    ]
  ),

  // C4. TOKO KUE & BAKERY
  niche(
    "bakery", "C", "Kuliner & F&B",
    "Jasa Website Toko Kue & Bakery [KOTA] | Katalog Online",
    "Jasa website toko kue dan bakery profesional di [KOTA]. Katalog produk cantik, order online mudah. Hubungi kami!",
    {
      headline: "Jasa Website Toko Kue & Bakery Profesional di [KOTA]",
      subheadline: "Tampilkan produk kue yang cantik dan terima order online untuk meningkatkan penjualan bakery Anda.",
      cta: "Dapatkan Demo",
      badge: "🎂 Spesialis Website Bakery & Kue"
    },
    "Bakery di [KOTA] kehilangan banyak pembeli yang mencari custom cake dan kue spesial di Google. Tanpa katalog online, produk terbaik Anda tidak terlihat.",
    [
      { title: "Katalog Kue & Harga", description: "Tampilkan koleksi kue dengan foto cantik, varian rasa, ukuran, dan harga transparan.", emoji: "🍰" },
      { title: "Form Order Custom", description: "Formulir pesanan custom cake untuk ulang tahun, pernikahan, dan event spesial.", emoji: "📝" },
      { title: "Galeri Produk Cantik", description: "Foto-foto kue berkualitas tinggi yang membuat pengunjung ingin langsung order.", emoji: "📸" },
      { title: "Promo Hari Raya & WhatsApp", description: "Halaman promo musiman dan integrasi WhatsApp untuk konfirmasi order cepat.", emoji: "🎉" }
    ],
    [
      { title: "Desain Manis & Menggiurkan", description: "Website dengan tampilan visual yang cantik dan sweet, sesuai karakter bisnis bakery.", emoji: "🎨" },
      { title: "SEO Keyword Bakery [KOTA]", description: "Optimasi pencarian untuk kata kunci toko kue dan bakery di [KOTA].", emoji: "🔍" },
      { title: "Mudah Tambah Produk Baru", description: "Upload produk baru, atur kategori, dan set harga dengan mudah dari admin panel.", emoji: "⚙️" }
    ],
    [
      { name: "Ci Mei Ling", role: "Owner Sweet Dream Bakery", text: "Katalog online kami cantik sekali. Pelanggan suka browsing produk di website sebelum pesan via WhatsApp." },
      { name: "Pak Bowo", role: "Founder Roti Makmur", text: "Order custom cake meningkat 2x lipat sejak punya website. Pelanggan dari luar kota pun memesan." },
      { name: "Tante Nina", role: "Owner Kue Nina Homemade", text: "Promo Lebaran di website langsung viral. Order membludak dan kami kewalahan — dalam arti baik!" }
    ],
    [
      { q: "Berapa biaya website bakery?", a: "Mulai dari Rp 1.600.000 untuk katalog dasar hingga Rp 2.900.000 dengan form order custom dan galeri premium." },
      { q: "Bisa terima order custom cake?", a: "Ya, form order custom tersedia untuk pelanggan menentukan rasa, ukuran, desain, dan tanggal pengambilan." },
      { q: "Berapa minimum order?", a: "Kebijakan minimum order bisa Anda atur sendiri sesuai ketentuan bakery Anda." },
      { q: "Apakah ada area delivery?", a: "Ya, Anda bisa menampilkan informasi area pengiriman dan ongkir di website." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 5-7 hari kerja setelah foto produk dan data katalog lengkap diterima." }
    ]
  ),

  // C5. FRANCHISE MAKANAN
  niche(
    "franchise-makanan", "C", "Kuliner & F&B",
    "Jasa Website Franchise Makanan [KOTA] | Profesional & SEO",
    "Jasa website franchise makanan profesional di [KOTA]. Tampilkan peluang kemitraan, menu, dan lokasi outlet. Hubungi kami!",
    {
      headline: "Jasa Website Franchise Makanan Profesional di [KOTA]",
      subheadline: "Tarik mitra franchise dan pelanggan baru sekaligus dengan website yang membangun kepercayaan brand.",
      cta: "Konsultasi Gratis",
      badge: "🍔 Spesialis Website Franchise F&B"
    },
    "Brand franchise makanan di [KOTA] sulit melakukan ekspansi karena tidak punya digital presence yang kuat untuk menarik calon mitra dan investor.",
    [
      { title: "Halaman Peluang Kemitraan", description: "Informasi lengkap paket franchise, modal, ROI estimasi, dan keuntungan bergabung.", emoji: "🤝" },
      { title: "Menu & Konsep Brand", description: "Tampilkan menu unggulan dan keunikan konsep brand franchise Anda.", emoji: "📋" },
      { title: "Lokasi Outlet & Form Mitra", description: "Peta seluruh outlet dan formulir pendaftaran mitra baru yang mudah diisi.", emoji: "📍" },
      { title: "Galeri Outlet", description: "Dokumentasi outlet yang sudah berjalan untuk membuktikan kredibilitas franchise Anda.", emoji: "📸" }
    ],
    [
      { title: "Desain Brand-Consistent", description: "Website yang konsisten dengan identitas visual brand franchise Anda.", emoji: "🎨" },
      { title: "SEO Keyword Franchise [KOTA]", description: "Optimasi pencarian untuk calon mitra yang mencari peluang franchise di [KOTA].", emoji: "🔍" },
      { title: "Menarik Investor & Pelanggan", description: "Website yang efektif menjangkau dua audiens: calon mitra franchise dan end customer.", emoji: "💰" }
    ],
    [
      { name: "Pak Agus Salim", role: "CEO Ayam Goreng Nusantara", text: "Website sangat membantu ekspansi. 10 mitra baru bergabung dalam 6 bulan setelah kami punya website profesional." },
      { name: "Ryan Hidayat", role: "Founder Kebab Istimewa", text: "Calon mitra bisa lihat semua info franchise di website. Kami tidak perlu lagi kirim proposal manual." },
      { name: "Ibu Santi", role: "Director Bakso Malang Sejati", text: "Form pendaftaran mitra online sangat efisien. Lead masuk dari berbagai kota tanpa harus roadshow." }
    ],
    [
      { q: "Berapa biaya website franchise?", a: "Mulai dari Rp 1.600.000 untuk profil franchise dasar hingga Rp 2.900.000 dengan halaman kemitraan dan galeri outlet." },
      { q: "Berapa modal franchise yang ditampilkan?", a: "Anda yang menentukan informasi modal dan paket franchise yang ingin ditampilkan di website." },
      { q: "Bisa update lokasi outlet?", a: "Ya, Anda bisa menambah outlet baru di peta seiring ekspansi bisnis franchise Anda." },
      { q: "Apakah ada support dari pusat?", a: "Informasi support dan training dari pusat bisa ditampilkan untuk meyakinkan calon mitra." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 7-10 hari kerja karena melibatkan dua sisi (franchise owner & customer)." }
    ]
  ),

  // ================================================================
  // KATEGORI D — PENDIDIKAN (5 NICHE)
  // ================================================================

  // D1. BIMBEL & LES PRIVAT
  niche(
    "bimbel", "D", "Pendidikan",
    "Jasa Website Bimbingan Belajar [KOTA] | Daftar Online Mudah",
    "Jasa website bimbel dan les privat profesional di [KOTA]. Form pendaftaran online, jadwal kelas, tampil di Google. Hubungi kami!",
    {
      headline: "Jasa Website Bimbel & Les Privat Terpercaya di [KOTA]",
      subheadline: "Mudahkan orang tua menemukan bimbel terbaik untuk anak mereka melalui kehadiran online yang profesional.",
      cta: "Konsultasi Gratis",
      badge: "📚 Spesialis Website Bimbel & Les Privat"
    },
    "Bimbel dan les privat di [KOTA] kehilangan murid baru yang mencari tempat belajar di Google. Orang tua masa kini membandingkan bimbel lewat internet sebelum mendaftarkan anak.",
    [
      { title: "Program & Jadwal Kelas", description: "Informasi lengkap program belajar, mata pelajaran, jadwal, dan level kelas yang tersedia.", emoji: "📅" },
      { title: "Profil Pengajar", description: "Profil tutor dengan latar belakang pendidikan dan pengalaman mengajar.", emoji: "👩‍🏫" },
      { title: "Pendaftaran Online", description: "Form pendaftaran murid baru yang memudahkan orang tua mendaftar kapanpun.", emoji: "📝" },
      { title: "Blog Tips Belajar", description: "Artikel edukatif tentang tips belajar dan persiapan ujian untuk SEO organik.", emoji: "📰" }
    ],
    [
      { title: "Desain Edukatif & Terpercaya", description: "Tampilan profesional yang membangun kepercayaan orang tua terhadap kualitas bimbel.", emoji: "✨" },
      { title: "SEO Keyword Bimbel [KOTA]", description: "Optimasi pencarian lokal agar bimbel Anda muncul saat orang tua mencari di Google.", emoji: "🔍" },
      { title: "Konversi Pendaftar Tinggi", description: "Layout dan copywriting yang dirancang untuk mengkonversi pengunjung menjadi pendaftar.", emoji: "📈" }
    ],
    [
      { name: "Pak Haryono", role: "Founder Bimbel Cerdas Mandiri", text: "Pendaftaran online sangat membantu. Orang tua bisa daftar malam hari setelah diskusi dengan keluarga." },
      { name: "Bu Ratih", role: "Owner Privat Juara", text: "Website membuat bimbel kami tampil berbeda. Murid baru terus bertambah setiap semester." },
      { name: "Kak Deni", role: "Tutor Les Matematika", text: "Blog tips belajar mendatangkan traffic luar biasa. Banyak orang tua yang baca lalu mendaftarkan anaknya." }
    ],
    [
      { q: "Berapa biaya website bimbel?", a: "Mulai dari Rp 1.600.000 untuk profil bimbel dasar hingga Rp 2.900.000 dengan pendaftaran online dan blog." },
      { q: "Mata pelajaran apa saja yang bisa ditampilkan?", a: "Semua mata pelajaran dan level kelas bisa ditampilkan sesuai program bimbel Anda." },
      { q: "Bisa kelas online dan offline?", a: "Ya, website bisa menampilkan informasi untuk kedua format belajar beserta jadwalnya." },
      { q: "Apakah ada fitur blog?", a: "Ya, fitur blog tersedia untuk membagikan tips belajar dan menarik traffic organik." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 5-7 hari kerja setelah data program dan materi lengkap diterima." }
    ]
  ),

  // D2. KURSUS BAHASA INGGRIS
  niche(
    "kursus-bahasa-inggris", "D", "Pendidikan",
    "Jasa Website Kursus Bahasa Inggris [KOTA] | Daftar Online",
    "Jasa website kursus bahasa Inggris profesional di [KOTA]. Tampilkan program, jadwal, dan daftar online. Hubungi kami!",
    {
      headline: "Jasa Website Kursus Bahasa Inggris Profesional di [KOTA]",
      subheadline: "Jangkau lebih banyak murid dengan kehadiran online yang modern dan internasional.",
      cta: "Lihat Demo",
      badge: "🌐 Spesialis Website Kursus Bahasa"
    },
    "Lembaga kursus bahasa Inggris di [KOTA] kehilangan calon murid yang mencari kursus bahasa melalui internet. Tanpa website, Anda tidak terlihat di pencarian Google.",
    [
      { title: "Program Kursus Lengkap", description: "Daftar program dari kelas anak, dewasa, conversation, IELTS, hingga TOEFL preparation.", emoji: "📚" },
      { title: "Jadwal & Pendaftaran", description: "Jadwal kelas terbaru dan form pendaftaran online yang mudah diakses.", emoji: "📅" },
      { title: "Profil Pengajar", description: "Profil instructor native speaker dan pengajar lokal bersertifikat.", emoji: "👨‍🏫" },
      { title: "Blog Tips Bahasa Inggris", description: "Artikel tips dan trik belajar bahasa Inggris untuk menarik traffic organik.", emoji: "📰" }
    ],
    [
      { title: "Desain Modern & Internasional", description: "Tampilan website yang profesional dan berkesan internasional.", emoji: "🌍" },
      { title: "SEO Kursus Bahasa Inggris [KOTA]", description: "Optimasi pencarian untuk keyword kursus bahasa Inggris di [KOTA].", emoji: "🔍" },
      { title: "Konversi Pendaftar Tinggi", description: "Desain yang mendorong pengunjung untuk langsung mendaftar program kursus.", emoji: "📈" }
    ],
    [
      { name: "Mr. John Smith", role: "Head Instructor, English First Academy", text: "Our new website perfectly represents our brand. Student inquiries have tripled since launch." },
      { name: "Bu Hartini", role: "Director, Brilliant English Course", text: "Website membuat kursus kami tampil setara dengan lembaga internasional. Pendaftar meningkat pesat." },
      { name: "Kak Anisa", role: "Founder, Speak Up English", text: "Blog bahasa Inggris di website kami mendatangkan ribuan visitor per bulan. Banyak yang akhirnya mendaftar." }
    ],
    [
      { q: "Berapa biaya website kursus bahasa?", a: "Mulai dari Rp 1.600.000 untuk profil program dasar hingga Rp 2.900.000 dengan pendaftaran online dan blog." },
      { q: "Program apa saja yang bisa ditampilkan?", a: "Semua program dari General English, IELTS, TOEFL, Business English hingga kids class." },
      { q: "Bisa kelas online dan offline?", a: "Ya, website bisa menampilkan kedua format dengan jadwal dan harga masing-masing." },
      { q: "Apakah bisa multi-bahasa?", a: "Ya, paket premium menyediakan opsi bilingual untuk website dalam bahasa Indonesia dan Inggris." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 5-7 hari kerja setelah brief dan materi lengkap diterima." }
    ]
  ),

  // D3. DAYCARE & PAUD
  niche(
    "daycare", "D", "Pendidikan",
    "Jasa Website Daycare & PAUD [KOTA] | Terpercaya & Ramah Anak",
    "Jasa website daycare dan PAUD profesional di [KOTA]. Tampil terpercaya, mudah ditemukan orang tua. Hubungi kami!",
    {
      headline: "Jasa Website Daycare & PAUD Terpercaya di [KOTA]",
      subheadline: "Bangun kepercayaan orang tua dengan website daycare yang profesional dan meyakinkan.",
      cta: "Konsultasi Gratis",
      badge: "🧒 Spesialis Website Daycare & PAUD"
    },
    "Daycare dan PAUD di [KOTA] sulit menjangkau orang tua baru yang mencari penitipan anak terpercaya melalui internet. Kepercayaan adalah segalanya di bisnis ini.",
    [
      { title: "Program Belajar & Aktivitas", description: "Kurikulum dan aktivitas harian yang menunjukkan pendekatan edukatif daycare Anda.", emoji: "🎨" },
      { title: "Fasilitas & Keamanan", description: "Informasi lengkap fasilitas termasuk CCTV, area bermain aman, dan protokol keselamatan.", emoji: "🛡️" },
      { title: "Profil Pengasuh Bersertifikat", description: "Profil caregiver dengan sertifikasi dan pengalaman dalam perawatan anak.", emoji: "👩‍👧" },
      { title: "Galeri & Form Pendaftaran", description: "Foto-foto kegiatan anak yang ceria dan formulir pendaftaran online.", emoji: "📸" }
    ],
    [
      { title: "Desain Ramah Anak & Meyakinkan", description: "Tampilan colorful namun profesional yang membuat orang tua merasa aman.", emoji: "🌈" },
      { title: "SEO Keyword Daycare [KOTA]", description: "Optimasi pencarian lokal agar daycare Anda muncul pertama di Google.", emoji: "🔍" },
      { title: "Membangun Kepercayaan", description: "Website profesional meningkatkan rasa percaya orang tua untuk menitipkan buah hati.", emoji: "💛" }
    ],
    [
      { name: "Bunda Ani", role: "Founder, Happy Kids Daycare", text: "Website membuat orang tua percaya sebelum survei langsung. Pendaftaran meningkat signifikan setiap semester." },
      { name: "Ibu Wulan", role: "Director, Little Stars PAUD", text: "Galeri kegiatan di website sangat efektif. Orang tua bisa lihat anaknya happy dan aman di sini." },
      { name: "Bu Sari", role: "Owner, Pelangi Daycare", text: "CCTV dan informasi keamanan di website membuat orang tua langsung yakin mendaftar." }
    ],
    [
      { q: "Berapa biaya website daycare?", a: "Mulai dari Rp 1.600.000 untuk profil dasar hingga Rp 2.900.000 dengan galeri, form pendaftaran, dan blog parenting." },
      { q: "Apakah ada jam operasional?", a: "Ya, informasi jam operasional, hari libur, dan jadwal pickup-dropoff bisa ditampilkan jelas." },
      { q: "Bagaimana protokol keamanan ditampilkan?", a: "Kami membuat halaman khusus yang menjelaskan seluruh protokol keamanan dan fasilitas keselamatan." },
      { q: "Bisa update galeri kegiatan?", a: "Tentu, Anda bisa upload foto kegiatan terbaru dari admin panel kapanpun." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 5-7 hari kerja setelah brief dan foto fasilitas lengkap diterima." }
    ]
  ),

  // D4. LPK & LEMBAGA PELATIHAN
  niche(
    "lpk", "D", "Pendidikan",
    "Jasa Website LPK & Lembaga Pelatihan [KOTA] | Profesional",
    "Jasa website LPK dan lembaga pelatihan kerja profesional di [KOTA]. Tampil kredibel, rekrut peserta lebih mudah. Hubungi kami!",
    {
      headline: "Jasa Website LPK & Lembaga Pelatihan Profesional di [KOTA]",
      subheadline: "Tingkatkan kepercayaan dan jangkauan peserta pelatihan dengan kehadiran digital yang kredibel.",
      cta: "Konsultasi Gratis",
      badge: "🎓 Spesialis Website LPK & Pelatihan"
    },
    "LPK dan lembaga pelatihan di [KOTA] kesulitan merekrut peserta karena tidak dikenal secara online. Calon peserta mencari informasi pelatihan dan sertifikasi lewat Google.",
    [
      { title: "Program Pelatihan & Sertifikasi", description: "Daftar lengkap program pelatihan, kurikulum, dan sertifikasi yang ditawarkan.", emoji: "📜" },
      { title: "Jadwal & Biaya", description: "Informasi jadwal batch, durasi pelatihan, dan biaya yang transparan.", emoji: "📅" },
      { title: "Track Record Penempatan Kerja", description: "Data alumni yang berhasil ditempatkan kerja sebagai bukti kualitas pelatihan.", emoji: "📊" },
      { title: "Profil Instruktur & Form Daftar", description: "Profil instruktur berpengalaman dan formulir pendaftaran peserta online.", emoji: "👨‍🏫" }
    ],
    [
      { title: "Desain Kredibel & Resmi", description: "Tampilan profesional yang mencerminkan legalitas dan kredibilitas lembaga.", emoji: "🏛️" },
      { title: "SEO Keyword LPK [KOTA]", description: "Optimasi pencarian untuk calon peserta yang mencari pelatihan kerja di [KOTA].", emoji: "🔍" },
      { title: "Memudahkan Rekrutmen", description: "Form pendaftaran online mengurangi administrasi manual dan mempercepat proses.", emoji: "⚡" }
    ],
    [
      { name: "Pak Tono", role: "Direktur LPK Mandiri Terampil", text: "Pendaftaran peserta meningkat 3x setelah punya website. Calon peserta dari luar kota pun mendaftar." },
      { name: "Bu Endang", role: "Manager LPK Maju Bersama", text: "Track record alumni di website sangat meyakinkan. Calon peserta langsung tahu prospek kerja setelah lulus." },
      { name: "Pak Darmadi", role: "Founder, Pusat Pelatihan Profesional", text: "Website resmi membuat kami dipercaya instansi pemerintah untuk program pelatihan kerjasama." }
    ],
    [
      { q: "Berapa biaya website LPK?", a: "Mulai dari Rp 1.600.000 untuk profil lembaga dasar hingga Rp 2.900.000 dengan form pendaftaran dan tracking alumni." },
      { q: "Apakah sertifikasi bisa ditampilkan?", a: "Ya, semua sertifikasi, akreditasi, dan izin operasional bisa ditampilkan untuk membangun kepercayaan." },
      { q: "Bagaimana peluang kerja setelah lulus?", a: "Halaman khusus menampilkan data penempatan kerja alumni dan mitra perusahaan yang bekerjasama." },
      { q: "Bisa tambah program pelatihan baru?", a: "Tentu, admin panel memudahkan penambahan program, jadwal, dan batch baru kapanpun." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 5-7 hari kerja setelah seluruh data program dan materi diterima." }
    ]
  ),

  // D5. SEKOLAH & PESANTREN
  niche(
    "sekolah", "D", "Pendidikan",
    "Jasa Website Sekolah & Pesantren [KOTA] | PPDB Online",
    "Jasa website sekolah dan pesantren profesional di [KOTA]. PPDB online, profil lembaga, tampil di Google. Hubungi kami!",
    {
      headline: "Jasa Website Sekolah & Pesantren Profesional di [KOTA]",
      subheadline: "Hadirkan PPDB online dan profil lembaga pendidikan yang modern untuk menjangkau calon siswa lebih luas.",
      cta: "Konsultasi Gratis",
      badge: "🏫 Spesialis Website Sekolah & Pesantren"
    },
    "Sekolah dan pesantren di [KOTA] kehilangan calon siswa potensial karena informasi lengkap tidak tersedia secara online. Orang tua milenial mencari sekolah lewat internet.",
    [
      { title: "Profil & Visi Misi", description: "Halaman profil lengkap dengan sejarah, visi misi, dan keunggulan lembaga pendidikan.", emoji: "🏛️" },
      { title: "PPDB Online", description: "Sistem Penerimaan Peserta Didik Baru secara online yang memudahkan pendaftaran.", emoji: "📝" },
      { title: "Ekstrakulikuler & Prestasi", description: "Daftar kegiatan ekskul dan prestasi siswa yang membanggakan.", emoji: "🏆" },
      { title: "Galeri & Berita Sekolah", description: "Dokumentasi kegiatan dan pengumuman terbaru untuk orang tua dan siswa.", emoji: "📰" }
    ],
    [
      { title: "Desain Resmi & Terpercaya", description: "Tampilan website yang resmi dan profesional sesuai citra lembaga pendidikan.", emoji: "✨" },
      { title: "SEO Keyword Sekolah [KOTA]", description: "Optimasi pencarian agar sekolah muncul saat orang tua mencari di [KOTA].", emoji: "🔍" },
      { title: "Mudah Dikelola Admin", description: "Panel admin untuk update berita, galeri, pengumuman, dan data PPDB.", emoji: "⚙️" }
    ],
    [
      { name: "Ustadz Ahmad", role: "Mudir Pesantren Al-Ikhlas", text: "PPDB online meningkatkan pendaftar dari luar kota. Banyak santri baru yang menemukan kami lewat Google." },
      { name: "Ibu Kepala Sekolah Tuti", role: "SDN 01 Maju Jaya", text: "Website sekolah membuat komunikasi dengan orang tua jauh lebih mudah. Pengumuman bisa langsung diakses." },
      { name: "Pak Guno", role: "Ketua Yayasan Pendidikan Harapan", text: "Citra sekolah kami naik drastis sejak punya website profesional. Orang tua lebih percaya mendaftarkan anaknya." }
    ],
    [
      { q: "Berapa biaya website sekolah?", a: "Mulai dari Rp 1.600.000 untuk profil sekolah dasar hingga Rp 2.900.000 dengan PPDB online dan portal berita." },
      { q: "Bagaimana PPDB online bekerja?", a: "Calon siswa mengisi form pendaftaran online, upload berkas, dan mendapat konfirmasi otomatis." },
      { q: "Apakah bisa tampilkan akreditasi?", a: "Ya, informasi akreditasi, sertifikat, dan prestasi sekolah bisa ditampilkan di halaman khusus." },
      { q: "Bisa update berita sendiri?", a: "Tentu, panel admin memudahkan posting berita, pengumuman, dan update galeri kegiatan." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 7-10 hari kerja karena biasanya melibatkan banyak konten dan halaman." }
    ]
  ),

  // ================================================================
  // KATEGORI E — PROPERTI & KONSTRUKSI (5 NICHE)
  // ================================================================

  // E1. AGEN PROPERTI
  niche(
    "properti", "E", "Properti & Konstruksi",
    "Jasa Website Agen Properti [KOTA] | Listing Online Profesional",
    "Jasa website agen properti profesional di [KOTA]. Tampilkan listing properti, menarik pembeli & penjual. Hubungi kami!",
    {
      headline: "Jasa Website Agen Properti Profesional di [KOTA]",
      subheadline: "Tampilkan listing properti dan jangkau lebih banyak pembeli dengan website real estate yang profesional.",
      cta: "Lihat Demo",
      badge: "🏠 Spesialis Website Properti"
    },
    "Agen properti di [KOTA] kehilangan banyak prospek yang mencari rumah, kavling, atau ruko di Google. Website profesional adalah kunci memenangkan persaingan.",
    [
      { title: "Listing Properti dengan Foto & Harga", description: "Katalog properti lengkap dengan foto berkualitas, spesifikasi, harga, dan lokasi.", emoji: "🏘️" },
      { title: "Filter Pencarian Properti", description: "Fitur pencarian dengan filter tipe, harga, luas, dan lokasi untuk memudahkan pembeli.", emoji: "🔎" },
      { title: "Profil Agen & Form Konsultasi", description: "Profil agen properti dan formulir konsultasi untuk inquiry dari calon pembeli.", emoji: "👤" },
      { title: "Peta Lokasi Properti", description: "Integrasi Google Maps untuk menunjukkan lokasi exact setiap listing properti.", emoji: "📍" }
    ],
    [
      { title: "Desain Profesional & Terpercaya", description: "Tampilan website real estate yang premium dan membangun kepercayaan pembeli.", emoji: "✨" },
      { title: "SEO Keyword Properti [KOTA]", description: "Optimasi pencarian untuk kata kunci properti, rumah dijual di area [KOTA].", emoji: "🔍" },
      { title: "Mudah Tambah Listing Baru", description: "Admin panel untuk upload listing baru, update status (tersedia/terjual), dan kelola inquiry.", emoji: "⚙️" }
    ],
    [
      { name: "Pak Joko", role: "Agen Properti Senior, Graha Properti", text: "Website listing kami sangat profesional. Pembeli dari luar kota pun tertarik karena foto dan informasi lengkap." },
      { name: "Mbak Rina", role: "Owner, Prima Property", text: "Inquiry dari Google meningkat 5x lipat. Website ini investasi terbaik untuk bisnis properti saya." },
      { name: "Mr. Anderson", role: "Director, Indo Realty Group", text: "Filter pencarian di website sangat membantu pembeli menemukan properti yang sesuai budget mereka." }
    ],
    [
      { q: "Berapa biaya website properti?", a: "Mulai dari Rp 1.600.000 untuk listing dasar hingga Rp 2.900.000 dengan filter pencarian dan peta interaktif." },
      { q: "Bisa tambah listing sendiri?", a: "Ya, admin panel sangat mudah untuk upload properti baru lengkap dengan foto, harga, dan detail." },
      { q: "Apakah ada fitur pencarian?", a: "Ya, tersedia filter pencarian berdasarkan tipe, harga, lokasi, dan luas bangunan/tanah." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 7-10 hari kerja untuk website properti dengan fitur listing lengkap." },
      { q: "Bisa update status properti?", a: "Ya, Anda bisa menandai properti sebagai tersedia, reserved, atau sold langsung dari panel admin." }
    ]
  ),

  // E2. DEVELOPER PERUMAHAN
  niche(
    "developer-perumahan", "E", "Properti & Konstruksi",
    "Jasa Website Developer Perumahan [KOTA] | Marketing Online",
    "Jasa website developer perumahan profesional di [KOTA]. Tampilkan unit, harga, dan cicilan secara online. Hubungi kami!",
    {
      headline: "Jasa Website Developer Perumahan Profesional di [KOTA]",
      subheadline: "Jual lebih banyak unit perumahan lewat marketing digital yang menjangkau pembeli milenial.",
      cta: "Konsultasi Gratis",
      badge: "🏗️ Spesialis Website Developer Perumahan"
    },
    "Developer perumahan di [KOTA] masih banyak mengandalkan brosur fisik, kehilangan pembeli milenial yang mencari rumah impian secara online.",
    [
      { title: "Tipe Unit & Harga", description: "Katalog lengkap tipe rumah dengan denah, spesifikasi, dan harga transaksi.", emoji: "🏠" },
      { title: "Simulasi KPR/Cicilan", description: "Kalkulator cicilan KPR interaktif untuk membantu calon pembeli menghitung kemampuan.", emoji: "💰" },
      { title: "Denah & Siteplan", description: "Siteplan perumahan dan denah rumah per tipe untuk visualisasi yang jelas.", emoji: "🗺️" },
      { title: "Galeri & Form Booking", description: "Foto progress pembangunan dan formulir booking unit atau konsultasi.", emoji: "📸" }
    ],
    [
      { title: "Desain Premium & Meyakinkan", description: "Website yang mencerminkan kualitas developer dan membangun trust pembeli.", emoji: "✨" },
      { title: "SEO Keyword Perumahan [KOTA]", description: "Optimasi pencarian untuk calon pembeli yang mencari rumah di [KOTA].", emoji: "🔍" },
      { title: "Tingkatkan Konversi Leads", description: "Desain yang mengarahkan pengunjung untuk menghubungi sales atau booking unit.", emoji: "📈" }
    ],
    [
      { name: "Pak Susilo", role: "Director, Graha Indah Land", text: "Website sangat membantu penjualan. Pembeli bisa lihat tipe rumah dan simulasi KPR sebelum visit showroom." },
      { name: "Mr. Tanaka", role: "Marketing Manager, Sunrise Residence", text: "Leads dari website berkualitas tinggi — mereka sudah tahu tipe dan harga, tinggal closing." },
      { name: "Ibu Dewi", role: "Owner, Permata Asri Developer", text: "Progress pembangunan yang di-update di website membuat pembeli merasa aman dan percaya." }
    ],
    [
      { q: "Berapa biaya website developer?", a: "Mulai dari Rp 1.600.000 untuk profil perumahan dasar hingga Rp 2.900.000 dengan simulasi KPR dan booking online." },
      { q: "Apakah ada simulasi KPR?", a: "Ya, kalkulator KPR interaktif tersedia untuk membantu calon pembeli menghitung cicilan bulanan." },
      { q: "Bisa update progress pembangunan?", a: "Tentu, galeri foto progress bisa di-update berkala dari admin panel." },
      { q: "Bagaimana lokasi strategisnya?", a: "Halaman khusus menampilkan keunggulan lokasi, akses jalan, fasilitas sekitar, dan peta." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 7-10 hari kerja untuk website developer dengan fitur lengkap." }
    ]
  ),

  // E3. KONTRAKTOR BANGUNAN
  niche(
    "kontraktor", "E", "Properti & Konstruksi",
    "Jasa Website Kontraktor Bangunan [KOTA] | Portofolio Online",
    "Jasa website kontraktor dan renovasi bangunan profesional di [KOTA]. Tampilkan portofolio, harga, dan dapatkan leads. Hubungi kami!",
    {
      headline: "Jasa Website Kontraktor Bangunan Profesional di [KOTA]",
      subheadline: "Tampilkan portofolio proyek terbaik dan menarik klien baru yang mencari kontraktor terpercaya.",
      cta: "Konsultasi Gratis",
      badge: "🔨 Spesialis Website Kontraktor"
    },
    "Kontraktor di [KOTA] sulit mendapat proyek baru karena tidak punya portofolio online yang profesional. Calon klien membandingkan kontraktor lewat Google.",
    [
      { title: "Portofolio Proyek Before-After", description: "Galeri foto before-after proyek pembangunan dan renovasi yang menunjukkan kualitas kerja.", emoji: "📸" },
      { title: "Layanan & Spesialisasi", description: "Daftar layanan lengkap dari bangun rumah, renovasi, hingga konstruksi komersial.", emoji: "🏗️" },
      { title: "Estimasi Biaya Online", description: "Kalkulator estimasi biaya sederhana berdasarkan luas bangunan dan jenis pekerjaan.", emoji: "💰" },
      { title: "Sertifikasi & Legalitas", description: "Informasi izin usaha, sertifikasi, dan legalitas perusahaan kontraktor.", emoji: "📜" }
    ],
    [
      { title: "Desain Profesional & Meyakinkan", description: "Website yang membangun kepercayaan klien terhadap kemampuan kontraktor.", emoji: "✨" },
      { title: "SEO Keyword Kontraktor [KOTA]", description: "Optimasi pencarian untuk calon klien yang mencari kontraktor di [KOTA].", emoji: "🔍" },
      { title: "Kepercayaan Klien Meningkat", description: "Portofolio visual dan legalitas di website meningkatkan trust klien.", emoji: "🤝" }
    ],
    [
      { name: "Pak Bambang", role: "Direktur, CV Bangunan Sejahtera", text: "Portofolio before-after di website sangat meyakinkan. Klien baru datang sudah percaya dengan kualitas kami." },
      { name: "Ir. Agung", role: "Owner, Graha Konstruksi", text: "Website profesional membuat kami dipercaya untuk proyek-proyek besar dari perusahaan dan instansi." },
      { name: "Pak Djoni", role: "Kontraktor Mandiri", text: "Estimasi biaya online di website membantu filter klien yang serius. Leads jadi lebih berkualitas." }
    ],
    [
      { q: "Berapa biaya website kontraktor?", a: "Mulai dari Rp 1.600.000 untuk portofolio dasar hingga Rp 2.900.000 dengan kalkulator biaya dan CRM leads." },
      { q: "Berapa estimasi waktu proyek?", a: "Website menampilkan informasi estimasi waktu berdasarkan jenis dan skala proyek Anda." },
      { q: "Apakah ada garansi pekerjaan?", a: "Informasi garansi dan kebijakan after-service bisa ditampilkan di halaman khusus." },
      { q: "Bisa tambah portofolio proyek baru?", a: "Ya, upload foto proyek terbaru dan detail pekerjaan langsung dari admin panel." },
      { q: "Berapa lama pengerjaan website?", a: "Rata-rata 5-7 hari kerja setelah foto portofolio dan data perusahaan lengkap diterima." }
    ]
  ),

  // E4. INTERIOR DESAIN
  niche(
    "interior", "E", "Properti & Konstruksi",
    "Jasa Website Desain Interior [KOTA] | Portofolio Elegan",
    "Jasa website desain interior profesional di [KOTA]. Portofolio visual menawan, tampil di Google. Hubungi kami sekarang!",
    {
      headline: "Jasa Website Desain Interior Profesional di [KOTA]",
      subheadline: "Tampilkan karya desain terbaik Anda dan tarik klien premium dengan portofolio visual yang elegan.",
      cta: "Lihat Demo",
      badge: "🛋️ Spesialis Website Interior Design"
    },
    "Desainer interior di [KOTA] kehilangan klien potensial karena portofolio hanya ada di Instagram. Website profesional membangun reputasi yang lebih kuat dan menjangkau klien korporat.",
    [
      { title: "Galeri Portofolio per Kategori", description: "Showcase karya desain terbaik dikategorikan: minimalis, modern, klasik, industrial, dll.", emoji: "🖼️" },
      { title: "Profil Tim Desainer", description: "Profil lengkap tim desainer interior dengan portfolio personal dan keahlian.", emoji: "👨‍🎨" },
      { title: "Paket Layanan & Harga", description: "Daftar paket desain interior dari konsultasi hingga full design and build.", emoji: "📦" },
      { title: "Proses Kerja & Form Konsultasi", description: "Penjelasan workflow desain dan form konsultasi awal untuk calon klien.", emoji: "📋" }
    ],
    [
      { title: "Desain Website Elegan & Visual", description: "Website yang menonjolkan keindahan visual karya interior Anda.", emoji: "✨" },
      { title: "SEO Keyword Interior [KOTA]", description: "Optimasi pencarian untuk calon klien yang mencari desainer interior di [KOTA].", emoji: "🔍" },
      { title: "Reputasi Profesional", description: "Membangun reputasi yang lebih kredibel dibanding hanya portofolio social media.", emoji: "🏆" }
    ],
    [
      { name: "Arsitek Dinda", role: "Principal Designer, Studio Elegan", text: "Website portofolio kami membuat klien korporat dan hotel langsung percaya dengan kemampuan kami." },
      { name: "Mas Ferry", role: "Founder, Urban Design Studio", text: "Client inquiry meningkat 3x lipat. Website lebih efektif dari Instagram untuk menarik klien premium." },
      { name: "Bu Lastri", role: "Interior Designer, Home Sweet Design", text: "Kategorisasi portofolio di website memudahkan klien melihat style yang mereka inginkan." }
    ],
    [
      { q: "Berapa biaya website desain interior?", a: "Mulai dari Rp 1.600.000 untuk portofolio dasar hingga Rp 2.900.000 dengan galeri premium dan form konsultasi." },
      { q: "Berapa revisi desain?", a: "Kebijakan revisi Anda bisa ditampilkan di halaman layanan agar klien tahu sejak awal." },
      { q: "Bagaimana timeline proyek interior?", a: "Halaman proses kerja menjelaskan tahapan dari konsultasi hingga handover lengkap dengan estimasi waktu." },
      { q: "Bisa update portofolio sendiri?", a: "Ya, upload proyek baru dengan foto-foto dan deskripsi langsung dari admin panel." },
      { q: "Berapa lama pengerjaan website?", a: "Rata-rata 5-7 hari kerja setelah foto portofolio berkualitas tinggi diterima." }
    ]
  ),

  // E5. ARSITEK
  niche(
    "arsitek", "E", "Properti & Konstruksi",
    "Jasa Website Arsitek [KOTA] | Portofolio Profesional Online",
    "Jasa website arsitek profesional di [KOTA]. Portofolio desain, profil tim, dan form konsultasi online. Hubungi kami!",
    {
      headline: "Jasa Website Arsitek Profesional di [KOTA]",
      subheadline: "Bangun reputasi dan portofolio online yang kuat untuk menjangkau klien yang membutuhkan jasa arsitektur.",
      cta: "Konsultasi Gratis",
      badge: "📐 Spesialis Website Arsitek"
    },
    "Arsitek di [KOTA] sulit menjangkau klien baru tanpa kehadiran digital yang profesional. Klien potensial mencari arsitek berpengalaman melalui Google.",
    [
      { title: "Portofolio Proyek Arsitektur", description: "Galeri karya arsitektur lengkap dengan konsep, foto, dan detail proyek.", emoji: "🏛️" },
      { title: "Profil & Background Arsitek", description: "Latar belakang pendidikan, sertifikasi IAI, dan pengalaman arsitek.", emoji: "👤" },
      { title: "Layanan Arsitektur", description: "Daftar layanan dari desain rumah, komersial, lansekap hingga renovasi.", emoji: "📋" },
      { title: "Proses Kerja & Konsultasi", description: "Penjelasan tahapan kerja dan form konsultasi arsitektur online.", emoji: "📝" }
    ],
    [
      { title: "Desain Prestisius", description: "Website yang mencerminkan kreativitas dan profesionalisme arsitek.", emoji: "✨" },
      { title: "SEO Keyword Arsitek [KOTA]", description: "Optimasi pencarian untuk kata kunci arsitek dan desain rumah di [KOTA].", emoji: "🔍" },
      { title: "Menonjolkan Keahlian", description: "Website yang efektif menampilkan keahlian dan kreativitas desain arsitektur.", emoji: "💎" }
    ],
    [
      { name: "Ir. Budi Hartono, IAI", role: "Principal Architect, Karya Arsitektur", text: "Website portofolio membuat klien datang sudah kagum dengan karya kami. Proses negosiasi jadi lebih mudah." },
      { name: "Arsitek Nia", role: "Founder, Niadesign Studio", text: "Klien dari luar kota banyak datang karena melihat portofolio di website. Jangkauan pasar kami meluas." },
      { name: "Pak Wahyu, S.T.", role: "Arsitek Perumahan, Wahyu Arsitektur", text: "Form konsultasi online sangat membantu screening project awal. Kami bisa fokus pada klien yang serius." }
    ],
    [
      { q: "Berapa biaya website arsitek?", a: "Mulai dari Rp 1.600.000 untuk portofolio dasar hingga Rp 2.900.000 dengan galeri proyek lengkap dan form konsultasi." },
      { q: "Apakah termasuk desain gambar IMB?", a: "Website menampilkan layanan Anda termasuk desain rumah dan gambar IMB — Anda yang menentukan layanan." },
      { q: "Bagaimana timeline proyek arsitektur?", a: "Halaman proses kerja menjelaskan tahapan lengkap dari konsultasi hingga pengawasan pembangunan." },
      { q: "Bisa update portofolio?", a: "Ya, upload proyek baru lengkap dengan render 3D, foto, dan detail dari admin panel." },
      { q: "Berapa lama pengerjaan website?", a: "Rata-rata 5-7 hari kerja setelah foto portofolio dan data profil lengkap diterima." }
    ]
  ),

  // ================================================================
  // KATEGORI F — OTOMOTIF (5 NICHE)
  // ================================================================

  // F1. BENGKEL MOTOR & MOBIL
  niche(
    "bengkel", "F", "Otomotif",
    "Jasa Website Bengkel Motor & Mobil [KOTA] | Booking Online",
    "Jasa website bengkel motor dan mobil profesional di [KOTA]. Booking servis online, tampil di Google Maps. Hubungi kami!",
    {
      headline: "Jasa Website Bengkel Motor & Mobil di [KOTA]",
      subheadline: "Booking servis online dan tampil di pencarian Google Maps untuk menarik pelanggan bengkel baru.",
      cta: "Lihat Demo",
      badge: "🔧 Spesialis Website Bengkel Otomotif"
    },
    "Bengkel di [KOTA] kehilangan pelanggan yang mencari bengkel terdekat di Google Maps. Pelanggan era digital mengharapkan informasi online sebelum datang ke bengkel.",
    [
      { title: "Daftar Layanan & Harga", description: "Katalog layanan servis lengkap dari tune-up, ganti oli, hingga overhaul dengan harga transparan.", emoji: "🛠️" },
      { title: "Booking Servis Online", description: "Formulir booking appointment untuk menghindari antrian panjang di bengkel.", emoji: "📅" },
      { title: "Galeri Bengkel & Peralatan", description: "Foto fasilitas bengkel, peralatan modern, dan area kerja yang bersih.", emoji: "📸" },
      { title: "Profil Mekanik & Google Maps", description: "Profil mekanik bersertifikat dan lokasi bengkel di peta Google.", emoji: "📍" }
    ],
    [
      { title: "Desain Profesional & Terpercaya", description: "Website yang meningkatkan kepercayaan pelanggan terhadap kualitas bengkel.", emoji: "✨" },
      { title: "SEO Lokal Bengkel [KOTA]", description: "Optimasi pencarian lokal agar bengkel muncul di Google Maps dan pencarian.", emoji: "🔍" },
      { title: "Notifikasi Booking Otomatis", description: "Sistem notifikasi otomatis saat ada booking servis baru masuk.", emoji: "🔔" }
    ],
    [
      { name: "Pak Karjo", role: "Owner, Karjo Motor Service", text: "Booking online mengurangi antrian sampai 50%. Pelanggan happy karena tidak perlu tunggu berjam-jam." },
      { name: "Mas Deni", role: "Kepala Mekanik, Deni Bengkel", text: "Sejak muncul di Google Maps lewat website, pelanggan baru berdatangan setiap hari." },
      { name: "Pak Hendry", role: "Owner, Hendry Auto Service", text: "Website membuat bengkel kami tampil profesional. Pelanggan corporate dan fleet management pun datang." }
    ],
    [
      { q: "Berapa biaya website bengkel?", a: "Mulai dari Rp 1.600.000 untuk profil bengkel dasar hingga Rp 2.900.000 dengan booking online dan integrasi Maps." },
      { q: "Berapa estimasi waktu servis?", a: "Website bisa menampilkan estimasi waktu per jenis servis untuk informasi pelanggan." },
      { q: "Apakah ada garansi servis?", a: "Informasi garansi dan kebijakan servis bisa ditampilkan di halaman khusus." },
      { q: "Bisa update harga sendiri?", a: "Ya, panel admin memudahkan update daftar layanan, harga, dan promo kapanpun." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 5-7 hari kerja setelah data layanan dan foto bengkel diterima." }
    ]
  ),

  // F2. RENTAL MOBIL
  niche(
    "rental-mobil", "F", "Otomotif",
    "Jasa Website Rental Mobil [KOTA] | Booking Online 24 Jam",
    "Jasa website rental mobil profesional di [KOTA]. Booking online mudah, armada lengkap, tampil di Google. Hubungi kami!",
    {
      headline: "Jasa Website Rental Mobil Profesional di [KOTA]",
      subheadline: "Terima booking rental 24 jam dan tampil di halaman pertama Google untuk menjangkau lebih banyak penyewa.",
      cta: "Konsultasi Gratis",
      badge: "🚗 Spesialis Website Rental Mobil"
    },
    "Rental mobil di [KOTA] kehilangan banyak penyewa yang mencari sewa mobil lewat Google. Tanpa website booking online, Anda ketinggalan dari kompetitor.",
    [
      { title: "Katalog Armada & Harga Sewa", description: "Daftar mobil tersedia lengkap dengan foto, spesifikasi, dan tarif sewa harian/mingguan.", emoji: "🚗" },
      { title: "Form Booking Online", description: "Sistem reservasi online dengan pilihan tanggal, durasi, dan opsi supir/lepas kunci.", emoji: "📋" },
      { title: "Syarat & Ketentuan", description: "Halaman persyaratan sewa yang jelas untuk menghindari miskomunikasi.", emoji: "📜" },
      { title: "Area Layanan & Galeri", description: "Informasi area delivery dan galeri armada yang terawat baik.", emoji: "📍" }
    ],
    [
      { title: "Desain Terpercaya & Profesional", description: "Website yang membangun kepercayaan penyewa terhadap kualitas armada.", emoji: "✨" },
      { title: "SEO Keyword Rental Mobil [KOTA]", description: "Optimasi pencarian agar rental Anda muncul saat orang mencari sewa mobil di [KOTA].", emoji: "🔍" },
      { title: "Sistem Booking Mudah", description: "Proses booking sederhana yang mengkonversi pengunjung menjadi penyewa.", emoji: "⚡" }
    ],
    [
      { name: "Pak Wahid", role: "Owner, Wahid Rent Car", text: "Booking online 24 jam meningkatkan sewa 40%. Penyewa dari luar kota bisa pesan sebelum tiba." },
      { name: "Mas Eko", role: "Manager, Eko Transport", text: "Website profesional membuat kami dipercaya perusahaan untuk kontrak sewa jangka panjang." },
      { name: "Bu Linda", role: "Owner, Linda Car Rental", text: "Katalog armada di website sangat membantu. Penyewa bisa pilih mobil dan langsung booking." }
    ],
    [
      { q: "Berapa biaya website rental mobil?", a: "Mulai dari Rp 1.600.000 untuk katalog armada dasar hingga Rp 2.900.000 dengan booking online terintegrasi." },
      { q: "Berapa DP/uang muka sewa?", a: "Kebijakan DP bisa ditampilkan di halaman syarat ketentuan sesuai ketentuan rental Anda." },
      { q: "Apakah ada opsi supir?", a: "Ya, opsi sewa dengan supir atau lepas kunci bisa ditampilkan di setiap armada." },
      { q: "Bisa update armada sendiri?", a: "Tentu, tambah atau hapus armada, update ketersediaan dan harga dari admin panel." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 5-7 hari kerja setelah foto armada dan data lengkap diterima." }
    ]
  ),

  // F3. DEALER MOTOR BEKAS
  niche(
    "dealer-motor", "F", "Otomotif",
    "Jasa Website Dealer Motor Bekas [KOTA] | Stok Online",
    "Jasa website dealer motor bekas profesional di [KOTA]. Tampilkan stok, harga, dan beli online. Hubungi kami sekarang!",
    {
      headline: "Jasa Website Dealer Motor Bekas di [KOTA]",
      subheadline: "Tampilkan stok motor bekas berkualitas dan jangkau lebih banyak pembeli secara online.",
      cta: "Lihat Demo",
      badge: "🏍️ Spesialis Website Dealer Motor"
    },
    "Dealer motor di [KOTA] kehilangan pembeli yang mencari motor bekas berkualitas di internet. Tanpa katalog online, stok bagus Anda tidak terlihat.",
    [
      { title: "Katalog Stok Motor", description: "Daftar motor tersedia dengan foto detail, spesifikasi, tahun, dan harga transparan.", emoji: "🏍️" },
      { title: "Filter Tahun & Merk", description: "Fitur pencarian dengan filter merk, tahun, tipe, dan rentang harga.", emoji: "🔎" },
      { title: "Simulasi Kredit", description: "Kalkulator cicilan untuk pembeli yang ingin membeli dengan kredit.", emoji: "💰" },
      { title: "Form Test Drive & Profil Dealer", description: "Formulir jadwal test drive dan informasi legalitas dealer.", emoji: "📋" }
    ],
    [
      { title: "Desain Profesional & Terpercaya", description: "Website yang meningkatkan kepercayaan pembeli terhadap kualitas motor bekas.", emoji: "✨" },
      { title: "SEO Keyword Dealer Motor [KOTA]", description: "Optimasi pencarian untuk pembeli yang mencari motor bekas di [KOTA].", emoji: "🔍" },
      { title: "Update Stok Mudah", description: "Admin panel untuk update stok masuk, stok terjual, dan harga secara real-time.", emoji: "⚡" }
    ],
    [
      { name: "Pak Darto", role: "Owner, Darto Motor", text: "Pembeli dari luar kota banyak datang karena lihat stok di website. Penjualan naik 2x lipat." },
      { name: "Mas Yanto", role: "Dealer Motor Jaya Abadi", text: "Website dengan foto detail dan harga transparan membuat pembeli lebih percaya. Closing rate naik." },
      { name: "Pak Herman", role: "Owner, Herman Motor Sport", text: "Simulasi kredit di website sangat membantu. Pembeli datang sudah tahu cicilan per bulannya." }
    ],
    [
      { q: "Berapa biaya website dealer motor?", a: "Mulai dari Rp 1.600.000 untuk katalog stok dasar hingga Rp 2.900.000 dengan filter pencarian dan simulasi kredit." },
      { q: "Apakah bisa kredit?", a: "Website menampilkan opsi kredit dan simulasi cicilan sesuai leasing yang Anda kerjasama." },
      { q: "Ada garansi motor bekas?", a: "Informasi garansi dan kebijakan purna jual bisa ditampilkan di halaman khusus." },
      { q: "Bisa tukar tambah?", a: "Ya, informasi program tukar tambah dan syaratnya bisa ditampilkan di website." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 5-7 hari kerja setelah foto stok dan data motor lengkap diterima." }
    ]
  ),

  // F4. JASA CUCI MOBIL & MOTOR
  niche(
    "cuci-mobil", "F", "Otomotif",
    "Jasa Website Cuci Mobil & Motor [KOTA] | Booking Online",
    "Jasa website cuci mobil dan motor profesional di [KOTA]. Booking antrean online, harga transparan. Hubungi kami!",
    {
      headline: "Jasa Website Cuci Mobil & Motor di [KOTA]",
      subheadline: "Hemat waktu pelanggan dengan booking antrean online dan tampil profesional di Google Maps.",
      cta: "Lihat Demo",
      badge: "🚿 Spesialis Website Cuci Kendaraan"
    },
    "Tempat cuci kendaraan di [KOTA] sering antrian tidak teratur dan kehilangan pelanggan baru yang mencari cuci mobil terdekat di Google.",
    [
      { title: "Paket Cuci & Harga", description: "Daftar paket cuci dari express wash hingga detailing premium dengan harga jelas.", emoji: "🧽" },
      { title: "Booking Antrean Online", description: "Sistem antrian digital agar pelanggan tidak perlu menunggu lama di lokasi.", emoji: "📅" },
      { title: "Galeri Fasilitas", description: "Foto fasilitas cuci profesional yang bersih dan berstandar tinggi.", emoji: "📸" },
      { title: "Promo Member & Area Layanan", description: "Program loyalitas member dan informasi area layanan cuci panggilan.", emoji: "🎁" }
    ],
    [
      { title: "Desain Bersih & Profesional", description: "Website yang mencerminkan kebersihan dan kualitas layanan cuci Anda.", emoji: "✨" },
      { title: "SEO Keyword Cuci Mobil [KOTA]", description: "Optimasi pencarian agar muncul saat pelanggan cari cuci mobil di [KOTA].", emoji: "🔍" },
      { title: "Sistem Booking Mudah", description: "Proses booking simpel yang mengurangi waktu tunggu pelanggan.", emoji: "⚡" }
    ],
    [
      { name: "Pak Rudi", role: "Owner, Rudi Car Wash", text: "Booking online bikin antrian teratur. Pelanggan happy tidak perlu nunggu berjam-jam lagi." },
      { name: "Mas Fajar", role: "Manager, Shine Car & Motor", text: "Promo member lewat website berhasil lock 200+ pelanggan tetap dalam 3 bulan." },
      { name: "Kak Doni", role: "Owner, Doni Auto Detailing", text: "Website profesional membuat layanan detailing kami tampil premium. Pelanggan rela bayar lebih." }
    ],
    [
      { q: "Berapa biaya website cuci mobil?", a: "Mulai dari Rp 1.600.000 untuk katalog layanan dasar hingga Rp 2.900.000 dengan booking online dan member system." },
      { q: "Berapa waktu pengerjaan cuci?", a: "Estimasi waktu per paket cuci bisa ditampilkan agar pelanggan tahu sebelum booking." },
      { q: "Apakah ada layanan antar jemput?", a: "Informasi layanan cuci panggilan atau antar jemput bisa ditampilkan di website." },
      { q: "Bisa update harga sendiri?", a: "Ya, panel admin memudahkan update paket, harga, dan promo kapanpun." },
      { q: "Berapa lama pengerjaan website?", a: "Rata-rata 5-7 hari kerja setelah data layanan dan foto fasilitas diterima." }
    ]
  ),

  // F5. VARIASI & AKSESORI OTOMOTIF
  niche(
    "aksesori-otomotif", "F", "Otomotif",
    "Jasa Website Aksesori Otomotif [KOTA] | Toko Online Modern",
    "Jasa website toko aksesori otomotif profesional di [KOTA]. Katalog produk, order online, tampil di Google. Hubungi kami!",
    {
      headline: "Jasa Website Toko Aksesori Otomotif di [KOTA]",
      subheadline: "Jual lebih banyak produk aksesori kendaraan lewat katalog online profesional yang mudah diakses.",
      cta: "Konsultasi Gratis",
      badge: "🔩 Spesialis Website Aksesori Otomotif"
    },
    "Toko aksesori otomotif di [KOTA] kehilangan pembeli yang mencari produk variasi dan modifikasi kendaraan lewat internet.",
    [
      { title: "Katalog Produk & Harga", description: "Daftar produk aksesori lengkap dengan foto, spesifikasi, dan harga transparan.", emoji: "📦" },
      { title: "Kategori Produk", description: "Organisasi produk per kategori: audio, velg, body kit, interior, lighting, dll.", emoji: "🗂️" },
      { title: "Form Order & Konsultasi", description: "Formulir pemesanan dan konsultasi modifikasi untuk pelanggan.", emoji: "📝" },
      { title: "Galeri Hasil Modifikasi", description: "Showcase hasil modifikasi kendaraan pelanggan sebagai referensi.", emoji: "📸" }
    ],
    [
      { title: "Desain Dinamis & Otomotif", description: "Website dengan feel otomotif yang menarik penggemar modifikasi.", emoji: "🎨" },
      { title: "SEO Keyword Aksesori [KOTA]", description: "Optimasi pencarian untuk kata kunci aksesori dan variasi mobil di [KOTA].", emoji: "🔍" },
      { title: "Mudah Update Produk", description: "Panel admin untuk menambah produk baru, update stok, dan atur kategori.", emoji: "⚙️" }
    ],
    [
      { name: "Mas Riko", role: "Owner, Riko Variasi", text: "Katalog online membuat pelanggan bisa lihat produk sebelum datang. Penjualan meningkat signifikan." },
      { name: "Pak Tony", role: "Owner, TK Auto Accessories", text: "Website profesional membuat toko kami tampil selevel dealer. Klien korporat fleet pun datang." },
      { name: "Kak Bimo", role: "Founder, Bimotif Custom", text: "Galeri hasil modifikasi di website sangat efektif. Customer datang sudah punya referensi jelas." }
    ],
    [
      { q: "Berapa biaya website toko aksesori?", a: "Mulai dari Rp 1.600.000 untuk katalog produk dasar hingga Rp 2.900.000 dengan toko online dan galeri." },
      { q: "Berapa harga pemasangan?", a: "Harga produk dan jasa pemasangan bisa ditampilkan terpisah di setiap produk." },
      { q: "Apakah ada garansi produk?", a: "Informasi garansi dan kebijakan retur bisa ditampilkan di halaman syarat ketentuan." },
      { q: "Bisa update stok sendiri?", a: "Ya, sangat mudah menambah produk baru, update stok, dan mengatur harga dari admin panel." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 5-7 hari kerja setelah foto produk dan data katalog lengkap diterima." }
    ]
  ),

  // ================================================================
  // KATEGORI G — HUKUM & KEUANGAN (5 NICHE)
  // ================================================================

  // G1. NOTARIS & PPAT
  niche(
    "notaris", "G", "Hukum & Keuangan",
    "Jasa Website Notaris & PPAT [KOTA] | Profesional & Terpercaya",
    "Jasa website notaris dan PPAT profesional di [KOTA]. Tampil kredibel di Google, mudah dihubungi klien. Hubungi kami!",
    {
      headline: "Jasa Website Notaris & PPAT Profesional di [KOTA]",
      subheadline: "Bangun kepercayaan klien dengan kehadiran digital yang resmi dan profesional.",
      cta: "Konsultasi Gratis",
      badge: "⚖️ Spesialis Website Notaris & PPAT"
    },
    "Notaris dan PPAT di [KOTA] kehilangan klien potensial yang mencari layanan notaris lewat Google. Klien membutuhkan informasi jelas sebelum menghubungi.",
    [
      { title: "Daftar Layanan Notaris", description: "Layanan lengkap: AJB, akta perusahaan, wasiat, legalisasi, dan layanan PPAT.", emoji: "📜" },
      { title: "Profil & Latar Belakang", description: "Profil notaris dengan pendidikan hukum, pengalaman, dan nomor SK pengangkatan.", emoji: "👤" },
      { title: "Area Kerja & FAQ Hukum", description: "Wilayah kerja notaris dan artikel FAQ hukum untuk edukasi klien.", emoji: "📍" },
      { title: "Form Konsultasi Online", description: "Formulir konsultasi awal untuk inquiry layanan notaris secara online.", emoji: "📝" }
    ],
    [
      { title: "Desain Resmi & Terpercaya", description: "Website dengan tampilan formal yang membangun kredibilitas notaris.", emoji: "🏛️" },
      { title: "SEO Keyword Notaris [KOTA]", description: "Optimasi pencarian agar kantor notaris mudah ditemukan di Google.", emoji: "🔍" },
      { title: "Otoritas Online", description: "Membangun otoritas sebagai notaris terpercaya di wilayah [KOTA].", emoji: "🤝" }
    ],
    [
      { name: "Notaris Hendra, S.H., M.Kn.", role: "Notaris & PPAT", text: "Klien baru berdatangan dari Google. Website membuat kantor notaris kami mudah ditemukan dan dipercaya." },
      { name: "PPAT Siti Aminah", role: "Notaris & PPAT Senior", text: "FAQ hukum di website mengurangi pertanyaan berulang. Klien datang sudah paham prosedur dasar." },
      { name: "Notaris Dimas, S.H.", role: "Notaris Muda", text: "Website profesional membantu saya membangun reputasi meskipun baru membuka kantor sendiri." }
    ],
    [
      { q: "Layanan apa saja yang tersedia?", a: "Mulai dari pembuatan akta, legalisasi, AJB, balik nama, hingga konsultasi hukum perdata." },
      { q: "Berapa biaya jasa notaris?", a: "Biaya bervariasi sesuai jenis layanan. Halaman layanan di website menampilkan estimasi biaya per jenis akta." },
      { q: "Apa wilayah kerja notaris ini?", a: "Informasi wilayah kerja notaris ditampilkan jelas di website sesuai SK pengangkatan." },
      { q: "Berapa biaya website notaris?", a: "Mulai dari Rp 1.600.000 untuk profil kantor dasar hingga Rp 2.900.000 dengan form konsultasi dan blog." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 5-7 hari kerja setelah data profil dan layanan notaris lengkap diterima." }
    ]
  ),

  // G2. PENGACARA / LAW FIRM
  niche(
    "pengacara", "G", "Hukum & Keuangan",
    "Jasa Website Pengacara & Law Firm [KOTA] | Profesional",
    "Jasa website pengacara dan law firm profesional di [KOTA]. Tampil kredibel, menarik klien baru. Hubungi kami sekarang!",
    {
      headline: "Jasa Website Pengacara & Law Firm Profesional di [KOTA]",
      subheadline: "Perkuat reputasi hukum dengan kehadiran digital yang berwibawa dan profesional.",
      cta: "Konsultasi Gratis",
      badge: "⚖️ Spesialis Website Law Firm"
    },
    "Firma hukum di [KOTA] sulit menjangkau klien baru tanpa website profesional. Calon klien mencari pengacara berpengalaman melalui Google.",
    [
      { title: "Bidang Hukum yang Ditangani", description: "Daftar spesialisasi: pidana, perdata, bisnis, keluarga, properti, dan lainnya.", emoji: "📚" },
      { title: "Profil Advokat & Track Record", description: "Profil lengkap pengacara dengan pengalaman dan kasus yang ditangani.", emoji: "👨‍⚖️" },
      { title: "Konsultasi & Artikel Hukum", description: "Form konsultasi online dan artikel hukum untuk SEO dan edukasi.", emoji: "📰" },
      { title: "Form Konsultasi Online", description: "Formulir konsultasi awal yang memudahkan calon klien menghubungi.", emoji: "📝" }
    ],
    [
      { title: "Desain Formal & Berwibawa", description: "Website yang memancarkan profesionalisme dan otoritas di bidang hukum.", emoji: "🏛️" },
      { title: "SEO Keyword Pengacara [KOTA]", description: "Optimasi pencarian untuk klien yang mencari pengacara di [KOTA].", emoji: "🔍" },
      { title: "Kepercayaan Calon Klien", description: "Website profesional meningkatkan confidence klien untuk menggunakan jasa Anda.", emoji: "🤝" }
    ],
    [
      { name: "Dr. Anton, S.H., M.H.", role: "Senior Partner, Anton & Partners", text: "Website profesional membuat law firm kami tampil selevel firma internasional. Klien korporat besar pun datang." },
      { name: "Advokat Ratna, S.H.", role: "Founder, Ratna Law Office", text: "Artikel hukum di website mendatangkan traffic organik luar biasa. Banyak pembaca jadi klien konsultasi." },
      { name: "Pengacara Dede", role: "Associate, Keadilan Law Firm", text: "Form konsultasi online sangat efisien. Kami bisa screening kasus sebelum meeting pertama." }
    ],
    [
      { q: "Berapa biaya konsultasi awal?", a: "Informasi tarif konsultasi bisa ditampilkan di website sesuai kebijakan kantor hukum Anda." },
      { q: "Bidang hukum apa yang ditangani?", a: "Semua bidang spesialisasi Anda bisa ditampilkan detail di halaman practice area." },
      { q: "Bagaimana proses hukumnya?", a: "Halaman khusus menjelaskan alur kerja dari konsultasi awal hingga penyelesaian kasus." },
      { q: "Berapa biaya website law firm?", a: "Mulai dari Rp 1.600.000 untuk profil dasar hingga Rp 2.900.000 dengan blog hukum dan CRM klien." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 5-7 hari kerja setelah data profil dan layanan hukum lengkap diterima." }
    ]
  ),

  // G3. KONSULTAN PAJAK
  niche(
    "konsultan-pajak", "G", "Hukum & Keuangan",
    "Jasa Website Konsultan Pajak [KOTA] | Profesional & Terpercaya",
    "Jasa website konsultan pajak profesional di [KOTA]. Tampil terpercaya, mudah ditemukan klien bisnis. Hubungi kami!",
    {
      headline: "Jasa Website Konsultan Pajak Terpercaya di [KOTA]",
      subheadline: "Bantu bisnis dan individu mengurus pajak dengan lebih mudah melalui kehadiran online profesional.",
      cta: "Konsultasi Gratis",
      badge: "📊 Spesialis Website Konsultan Pajak"
    },
    "Konsultan pajak di [KOTA] sulit mendapatkan klien baru tanpa kehadiran digital yang profesional. Klien bisnis mencari konsultan pajak terpercaya lewat Google.",
    [
      { title: "Layanan Perpajakan", description: "Daftar layanan: SPT, PKP, audit pajak, tax planning, restitusi, dan konsultasi.", emoji: "📋" },
      { title: "Profil & Sertifikasi", description: "Profil konsultan dengan sertifikasi resmi dan pengalaman di bidang perpajakan.", emoji: "📜" },
      { title: "Kalkulator Pajak", description: "Kalkulator pajak sederhana untuk estimasi kewajiban pajak calon klien.", emoji: "🧮" },
      { title: "Artikel & Form Konsultasi", description: "Artikel perpajakan terkini untuk SEO dan form konsultasi online.", emoji: "📰" }
    ],
    [
      { title: "Desain Profesional & Terpercaya", description: "Website yang memancarkan keahlian dan kredibilitas di bidang pajak.", emoji: "✨" },
      { title: "SEO Konsultan Pajak [KOTA]", description: "Optimasi pencarian untuk klien yang mencari konsultan pajak di [KOTA].", emoji: "🔍" },
      { title: "Konversi Leads Tinggi", description: "Desain yang mendorong klien bisnis untuk segera konsultasi.", emoji: "📈" }
    ],
    [
      { name: "Pak Surya, BKP", role: "Konsultan Pajak Bersertifikat", text: "Website profesional membuat klien bisnis besar percaya. Revenue konsultasi naik 3x dalam setahun." },
      { name: "Bu Indri, S.E., M.Ak.", role: "Tax Consultant, Indri & Partners", text: "Artikel pajak di website mendatangkan banyak pembaca yang akhirnya menjadi klien tetap." },
      { name: "Pak Arifin", role: "Founder, Arifin Tax Advisory", text: "Kalkulator pajak di website sangat populer. Banyak pengusaha yang akhirnya konsultasi langsung." }
    ],
    [
      { q: "Berapa biaya konsultasi pajak?", a: "Tarif konsultasi bervariasi sesuai layanan. Website menampilkan estimasi biaya untuk transparansi." },
      { q: "Jenis pajak apa yang ditangani?", a: "Semua jenis pajak: PPh, PPN, PBB, pajak daerah, dan konsultasi tax planning." },
      { q: "Kapan deadline SPT?", a: "Halaman khusus menampilkan kalender deadline pajak penting per tahun." },
      { q: "Berapa biaya website konsultan pajak?", a: "Mulai dari Rp 1.600.000 untuk profil dasar hingga Rp 2.900.000 dengan kalkulator pajak dan blog." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 5-7 hari kerja setelah data layanan dan profil lengkap diterima." }
    ]
  ),

  // G4. KOPERASI SIMPAN PINJAM
  niche(
    "koperasi", "G", "Hukum & Keuangan",
    "Jasa Website Koperasi Simpan Pinjam [KOTA] | Profesional",
    "Jasa website koperasi simpan pinjam profesional di [KOTA]. Tampil resmi, menarik anggota baru. Hubungi kami!",
    {
      headline: "Jasa Website Koperasi Simpan Pinjam di [KOTA]",
      subheadline: "Tampil resmi dan modern untuk menarik anggota baru dan meningkatkan kepercayaan masyarakat.",
      cta: "Konsultasi Gratis",
      badge: "🏦 Spesialis Website Koperasi"
    },
    "Koperasi di [KOTA] kesulitan menarik anggota baru karena image yang kurang modern dan terpercaya. Website profesional mengubah persepsi tersebut.",
    [
      { title: "Produk Simpan & Pinjam", description: "Daftar produk simpanan dan pinjaman lengkap dengan suku bunga dan syarat.", emoji: "💰" },
      { title: "Syarat & Prosedur Keanggotaan", description: "Informasi lengkap cara bergabung dan persyaratan menjadi anggota.", emoji: "📋" },
      { title: "Legalitas & Izin OJK", description: "Informasi legalitas, izin OJK, dan laporan keuangan untuk transparansi.", emoji: "📜" },
      { title: "Profil Pengurus & Form Daftar", description: "Profil pengurus koperasi dan formulir pendaftaran anggota baru online.", emoji: "👥" }
    ],
    [
      { title: "Desain Resmi & Modern", description: "Website yang membangun image modern dan terpercaya untuk koperasi.", emoji: "✨" },
      { title: "SEO Keyword Koperasi [KOTA]", description: "Optimasi pencarian agar koperasi mudah ditemukan masyarakat di [KOTA].", emoji: "🔍" },
      { title: "Kepercayaan Calon Anggota", description: "Transparansi informasi di website meningkatkan trust calon anggota.", emoji: "🤝" }
    ],
    [
      { name: "Pak Suroto", role: "Ketua Koperasi Makmur Sejahtera", text: "Website membuat koperasi tampil modern. Anggota baru dari kalangan anak muda meningkat pesat." },
      { name: "Bu Marni", role: "Sekretaris Koperasi Harapan Bersama", text: "Formulir pendaftaran online mempercepat proses registrasi anggota baru secara signifikan." },
      { name: "Pak Darmanto", role: "Manajer KSP Maju Bersama", text: "Transparansi informasi di website membuat masyarakat lebih percaya dan mau bergabung." }
    ],
    [
      { q: "Berapa bunga simpanan/pinjaman?", a: "Informasi suku bunga dan produk keuangan bisa ditampilkan transparan di website." },
      { q: "Apa syarat menjadi anggota?", a: "Halaman khusus menampilkan persyaratan dan procedure keanggotaan secara detail." },
      { q: "Bagaimana cara bergabung?", a: "Form pendaftaran online tersedia agar calon anggota bisa mendaftar dari mana saja." },
      { q: "Berapa biaya website koperasi?", a: "Mulai dari Rp 1.600.000 untuk profil dasar hingga Rp 2.900.000 dengan form pendaftaran dan informasi produk." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 5-7 hari kerja setelah data koperasi dan produk keuangan lengkap diterima." }
    ]
  ),

  // G5. AGEN ASURANSI
  niche(
    "asuransi", "G", "Hukum & Keuangan",
    "Jasa Website Agen Asuransi [KOTA] | Profesional & Terpercaya",
    "Jasa website agen asuransi profesional di [KOTA]. Tampil terpercaya, menarik nasabah baru. Hubungi kami sekarang!",
    {
      headline: "Jasa Website Agen Asuransi Profesional di [KOTA]",
      subheadline: "Jangkau lebih banyak nasabah dengan kehadiran online profesional yang membangun kepercayaan.",
      cta: "Konsultasi Gratis",
      badge: "🛡️ Spesialis Website Agen Asuransi"
    },
    "Agen asuransi di [KOTA] terlalu bergantung pada referral personal. Tanpa digital presence, sulit untuk scale up dan menjangkau nasabah baru di era digital.",
    [
      { title: "Produk Asuransi", description: "Daftar produk: asuransi jiwa, kesehatan, kendaraan, properti, dan pendidikan.", emoji: "📋" },
      { title: "Kalkulator Premi", description: "Kalkulator premi sederhana untuk estimasi biaya asuransi calon nasabah.", emoji: "🧮" },
      { title: "Profil Agen & Lisensi", description: "Profil agen dengan nomor lisensi resmi dan pengalaman di industri asuransi.", emoji: "👤" },
      { title: "Artikel & Form Konsultasi", description: "Artikel literasi keuangan dan form konsultasi produk asuransi.", emoji: "📰" }
    ],
    [
      { title: "Desain Profesional & Terpercaya", description: "Website yang membangun kredibilitas agen asuransi di mata calon nasabah.", emoji: "✨" },
      { title: "SEO Keyword Asuransi [KOTA]", description: "Optimasi pencarian untuk nasabah yang mencari agen asuransi di [KOTA].", emoji: "🔍" },
      { title: "Konversi Leads Tinggi", description: "Desain yang mendorong calon nasabah untuk konsultasi dan mendaftar.", emoji: "📈" }
    ],
    [
      { name: "Pak Agung, LUTCF", role: "Financial Advisor Bersertifikat", text: "Website profesional membuat nasabah potensial lebih percaya. Closing rate saya meningkat signifikan." },
      { name: "Bu Nia", role: "Insurance Agent, Top Performer", text: "Kalkulator premi di website sangat membantu. Nasabah datang sudah tahu estimasi biaya premi." },
      { name: "Mas Dicky", role: "Agen Asuransi Independen", text: "Artikel literasi keuangan mendatangkan traffic organik luar biasa. Banyak pembaca jadi nasabah baru." }
    ],
    [
      { q: "Berapa premi asuransi?", a: "Premi bervariasi sesuai produk dan profil nasabah. Kalkulator premi di website membantu estimasi." },
      { q: "Bagaimana proses klaim?", a: "Halaman khusus menjelaskan prosedur klaim step-by-step untuk kemudahan nasabah." },
      { q: "Jenis produk apa yang tersedia?", a: "Daftar lengkap produk asuransi dari jiwa, kesehatan, kendaraan, hingga investasi bisa dilihat di website." },
      { q: "Berapa biaya website asuransi?", a: "Mulai dari Rp 1.600.000 untuk profil agen dasar hingga Rp 2.900.000 dengan kalkulator premi dan blog." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 5-7 hari kerja setelah data produk dan profil lengkap diterima." }
    ]
  ),

  // ================================================================
  // KATEGORI H — INDUSTRI & B2B (5 NICHE)
  // ================================================================

  // H1. DISTRIBUTOR & SUPPLIER
  niche(
    "distributor", "H", "Industri & B2B",
    "Jasa Website Distributor & Supplier [KOTA] | Katalog B2B",
    "Jasa website distributor dan supplier profesional di [KOTA]. Katalog produk B2B, menarik reseller & mitra. Hubungi kami!",
    {
      headline: "Jasa Website Distributor & Supplier Profesional di [KOTA]",
      subheadline: "Tampilkan katalog produk B2B dan jangkau reseller serta mitra bisnis baru secara online.",
      cta: "Konsultasi Gratis",
      badge: "📦 Spesialis Website Distributor B2B"
    },
    "Distributor dan supplier di [KOTA] kesulitan menjangkau reseller baru tanpa katalog online yang profesional. Mitra bisnis saat ini mencari supplier lewat internet.",
    [
      { title: "Katalog Produk & Harga Grosir", description: "Daftar produk lengkap dengan foto, spesifikasi, dan harga khusus reseller.", emoji: "📦" },
      { title: "Syarat Keagenan/Reseller", description: "Informasi persyaratan, deposit, dan benefit menjadi agen atau reseller.", emoji: "📋" },
      { title: "Area Distribusi", description: "Peta area distribusi dan daftar wilayah yang sudah dan belum tercover.", emoji: "🗺️" },
      { title: "Profil & Form Kemitraan", description: "Profil perusahaan dengan legalitas dan formulir pendaftaran mitra baru.", emoji: "🤝" }
    ],
    [
      { title: "Desain B2B Profesional", description: "Website yang sesuai standar bisnis B2B dan meyakinkan calon mitra.", emoji: "✨" },
      { title: "SEO Keyword Distributor [KOTA]", description: "Optimasi pencarian untuk calon reseller yang mencari supplier di [KOTA].", emoji: "🔍" },
      { title: "Memudahkan Rekrutmen Mitra", description: "Form online mempercepat proses screening dan onboarding mitra baru.", emoji: "⚡" }
    ],
    [
      { name: "Pak Hartono", role: "Direktur, PT Sumber Makmur Distribusi", text: "Website B2B kami menarik 20+ reseller baru dalam 3 bulan. Ekspansi distribusi jadi lebih cepat." },
      { name: "Bu Yuni", role: "GM, CV Supplier Utama", text: "Katalog harga grosir online mengurangi waktu negosiasi. Mitra baru bisa lihat harga langsung." },
      { name: "Pak Doni", role: "Owner, Doni Supply Chain", text: "Form kemitraan online sangat efisien. Kami bisa filter calon mitra yang serius dari yang hanya bertanya." }
    ],
    [
      { q: "Berapa MOQ (Minimum Order Quantity)?", a: "Informasi MOQ per produk bisa ditampilkan jelas di katalog untuk transparansi." },
      { q: "Sistem pembayaran apa yang tersedia?", a: "Halaman khusus menampilkan opsi pembayaran: transfer, COD, atau term of payment." },
      { q: "Bagaimana area distribusi?", a: "Peta interaktif menampilkan area yang sudah tercover dan yang masih open territory." },
      { q: "Berapa biaya website distributor?", a: "Mulai dari Rp 1.600.000 untuk katalog B2B dasar hingga Rp 2.900.000 dengan form kemitraan dan CRM." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 7-10 hari kerja untuk website B2B dengan katalog dan area distribusi lengkap." }
    ]
  ),

  // H2. JASA PERCETAKAN
  niche(
    "percetakan", "H", "Industri & B2B",
    "Jasa Website Percetakan [KOTA] | Order Online Profesional",
    "Jasa website percetakan profesional di [KOTA]. Katalog produk cetak, order online, harga transparan. Hubungi kami!",
    {
      headline: "Jasa Website Percetakan Profesional di [KOTA]",
      subheadline: "Terima order cetak online dan jangkau lebih banyak klien dengan katalog produk yang lengkap.",
      cta: "Lihat Demo",
      badge: "🖨️ Spesialis Website Percetakan"
    },
    "Percetakan di [KOTA] kehilangan banyak order dari klien yang mencari jasa cetak profesional lewat Google.",
    [
      { title: "Katalog Produk Cetak", description: "Daftar layanan cetak: brosur, banner, kartu nama, undangan, packaging, dll.", emoji: "📄" },
      { title: "Harga & Spesifikasi", description: "Harga transparan per jenis produk dengan opsi bahan, ukuran, dan finishing.", emoji: "💰" },
      { title: "Kalkulator Harga Cetak", description: "Kalkulasi harga otomatis berdasarkan jumlah, bahan, dan ukuran pesanan.", emoji: "🧮" },
      { title: "Form Order & Galeri", description: "Formulir order online lengkap dengan upload file desain dan galeri hasil cetak.", emoji: "📝" }
    ],
    [
      { title: "Desain Profesional & Kreatif", description: "Website yang menampilkan kualitas cetak dengan visual yang menarik.", emoji: "🎨" },
      { title: "SEO Keyword Percetakan [KOTA]", description: "Optimasi pencarian untuk klien yang mencari percetakan di [KOTA].", emoji: "🔍" },
      { title: "Sistem Order Mudah", description: "Proses order yang simpel dari pilih produk, upload desain, hingga bayar.", emoji: "⚡" }
    ],
    [
      { name: "Pak Farid", role: "Owner, Farid Printing", text: "Order online meningkatkan revenue 50%. Klien tidak perlu datang ke toko untuk memesan." },
      { name: "Bu Santi", role: "Manager, Mega Print House", text: "Kalkulator harga online sangat efisien. Klien bisa tahu harga sebelum menghubungi kami." },
      { name: "Mas Rizal", role: "Founder, Digital Print Lab", text: "Website profesional membuat kami dipercaya perusahaan besar untuk order corporate printing." }
    ],
    [
      { q: "Format file apa yang diterima?", a: "Informasi format file (PDF, AI, CDR) dan panduan desain bisa ditampilkan di website." },
      { q: "Berapa waktu pengerjaan?", a: "Estimasi waktu per jenis cetak ditampilkan transparan agar klien tahu jadwal selesai." },
      { q: "Apakah ada area pengiriman?", a: "Informasi area pengiriman dan ongkir bisa ditampilkan di halaman khusus." },
      { q: "Berapa biaya website percetakan?", a: "Mulai dari Rp 1.600.000 untuk katalog produk cetak hingga Rp 2.900.000 dengan kalkulator harga dan order online." },
      { q: "Berapa lama pengerjaan website?", a: "Rata-rata 5-7 hari kerja setelah data produk dan contoh hasil cetak diterima." }
    ]
  ),

  // H3. KONVEKSI & GARMEN
  niche(
    "konveksi", "H", "Industri & B2B",
    "Jasa Website Konveksi & Garmen [KOTA] | Order Seragam Online",
    "Jasa website konveksi dan garmen profesional di [KOTA]. Katalog seragam, order custom online. Hubungi kami sekarang!",
    {
      headline: "Jasa Website Konveksi & Garmen Profesional di [KOTA]",
      subheadline: "Terima order seragam dan kaos custom dari seluruh Indonesia dengan katalog online profesional.",
      cta: "Konsultasi Gratis",
      badge: "👔 Spesialis Website Konveksi"
    },
    "Konveksi di [KOTA] sulit menjangkau klien korporat dan instansi tanpa website profesional yang menampilkan kapasitas produksi dan katalog produk.",
    [
      { title: "Katalog Produk Konveksi", description: "Daftar produk: seragam kantor, kaos, jaket, toga, kemeja, dan lainnya.", emoji: "👕" },
      { title: "Harga per Lusin/Satuan", description: "Tabel harga transparan berdasarkan jenis produk, bahan, dan jumlah order.", emoji: "💰" },
      { title: "Form Order & Konsultasi", description: "Formulir Order custom dengan upload logo dan referensi desain.", emoji: "📝" },
      { title: "Galeri & Kapasitas Produksi", description: "Foto mesin, workshop, dan informasi kapasitas produksi per bulan.", emoji: "🏭" }
    ],
    [
      { title: "Desain Profesional & Industrial", description: "Website yang menampilkan kemampuan produksi garmen secara meyakinkan.", emoji: "✨" },
      { title: "SEO Keyword Konveksi [KOTA]", description: "Optimasi pencarian untuk klien korporat yang mencari konveksi di [KOTA].", emoji: "🔍" },
      { title: "Menarik Klien Korporat", description: "Website profesional membangun kepercayaan instansi dan perusahaan.", emoji: "🏢" }
    ],
    [
      { name: "Pak Joko", role: "Owner, Joko Garment", text: "Klien korporat besar datang karena melihat kapasitas produksi kami di website. Order melonjak." },
      { name: "Bu Yanti", role: "Manager, Yanti Konveksi", text: "Form order custom sangat membantu. Klien upload desain dan kami langsung bisa estimasi harga." },
      { name: "Mas Dedi", role: "Founder, Dedi Fashion Production", text: "Website profesional membuat kami dipercaya instansi pemerintah untuk tender seragam." }
    ],
    [
      { q: "Berapa MOQ?", a: "Minimum order bervariasi per produk. Biasanya mulai dari 1-2 lusin untuk produksi custom." },
      { q: "Berapa waktu produksi?", a: "Estimasi 2-4 minggu tergantung jumlah order dan kompleksitas desain." },
      { q: "Bahan apa saja tersedia?", a: "Halaman khusus menampilkan katalog bahan dengan sample warna dan spesifikasi." },
      { q: "Berapa biaya website konveksi?", a: "Mulai dari Rp 1.600.000 untuk katalog produk dasar hingga Rp 2.900.000 dengan form order custom dan galeri." },
      { q: "Berapa lama pengerjaan website?", a: "Rata-rata 5-7 hari kerja setelah foto produk dan data lengkap diterima." }
    ]
  ),

  // H4. JASA SECURITY & OUTSOURCING
  niche(
    "security", "H", "Industri & B2B",
    "Jasa Website Security & Outsourcing [KOTA] | Profesional",
    "Jasa website security dan outsourcing profesional di [KOTA]. Tampil kredibel, menarik klien korporat. Hubungi kami!",
    {
      headline: "Jasa Website Security & Outsourcing Profesional di [KOTA]",
      subheadline: "Tampil kredibel dan profesional untuk memenangkan tender keamanan dari klien korporat.",
      cta: "Konsultasi Gratis",
      badge: "🛡️ Spesialis Website Security Service"
    },
    "Perusahaan security di [KOTA] sering kalah tender karena tidak punya digital presence yang profesional. Klien korporat menilai kredibilitas lewat website.",
    [
      { title: "Profil Perusahaan & Legalitas", description: "Profil lengkap: SIUP, izin Polda, sertifikasi personel, dan sejarah perusahaan.", emoji: "📜" },
      { title: "Layanan Jasa Security", description: "Daftar layanan: satpam, resepsionis, office boy, driver, dan manpower outsourcing.", emoji: "🛡️" },
      { title: "Klien & Portofolio", description: "Daftar klien korporat yang sudah dilayani dan area penempatan personel.", emoji: "🏢" },
      { title: "Sertifikasi & Form Penawaran", description: "Sertifikasi gada pratama/madya dan formulir permintaan penawaran.", emoji: "📋" }
    ],
    [
      { title: "Desain Resmi & Profesional", description: "Website yang memancarkan kedisiplinan dan profesionalisme perusahaan security.", emoji: "✨" },
      { title: "SEO Jasa Security [KOTA]", description: "Optimasi pencarian untuk klien korporat yang mencari jasa keamanan di [KOTA].", emoji: "🔍" },
      { title: "Kepercayaan Klien Korporat", description: "Website resmi meningkatkan peluang memenangkan tender pengadaan.", emoji: "🏆" }
    ],
    [
      { name: "Pak Komandan Sugeng", role: "Direktur, PT Baskara Security", text: "Sejak punya website resmi, tender dari perusahaan besar dan mall banyak masuk. Kredibilitas kami naik." },
      { name: "Bu Lilis", role: "Manager HRD, CV Satria Jaya Security", text: "Website memudahkan rekrutmen. Calon personel bisa lihat info dan mendaftar online." },
      { name: "Pak Hartanto", role: "CEO, Setia Guard Services", text: "Portofolio klien di website sangat meyakinkan. Klien baru tinggal lihat track record kami." }
    ],
    [
      { q: "Berapa biaya jasa security?", a: "Tarif per personel per bulan bisa ditampilkan atau berdasarkan penawaran custom." },
      { q: "Bagaimana rekrutmen personel?", a: "Informasi proses seleksi, training, dan sertifikasi personel bisa ditampilkan di website." },
      { q: "Apakah ada training?", a: "Halaman khusus menampilkan program pelatihan dan sertifikasi untuk semua personel." },
      { q: "Berapa biaya website security?", a: "Mulai dari Rp 1.600.000 untuk profil dasar hingga Rp 2.900.000 dengan portofolio klien dan form penawaran." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 5-7 hari kerja setelah data perusahaan dan legalitas lengkap diterima." }
    ]
  ),

  // H5. JASA CLEANING SERVICE
  niche(
    "cleaning-service", "H", "Industri & B2B",
    "Jasa Website Cleaning Service [KOTA] | Booking Online Mudah",
    "Jasa website cleaning service profesional di [KOTA]. Booking pembersihan online, harga transparan. Hubungi kami!",
    {
      headline: "Jasa Website Cleaning Service Profesional di [KOTA]",
      subheadline: "Terima order kebersihan rumah dan kantor secara online dengan sistem booking yang mudah.",
      cta: "Lihat Demo",
      badge: "🧹 Spesialis Website Cleaning Service"
    },
    "Jasa kebersihan di [KOTA] kehilangan klien potensial yang mencari cleaning service profesional lewat Google.",
    [
      { title: "Paket Layanan Kebersihan", description: "Daftar paket: deep cleaning rumah, pembersihan kantor, dan cleaning industri.", emoji: "🧽" },
      { title: "Harga per Sesi/Kontrak", description: "Harga transparan per sesi atau kontrak bulanan untuk klien korporat.", emoji: "💰" },
      { title: "Form Booking Online", description: "Formulir pemesanan layanan kebersihan dengan pilihan tanggal dan paket.", emoji: "📅" },
      { title: "Galeri & Profil Tim", description: "Foto hasil kerja dan profil tim cleaning bersertifikat.", emoji: "📸" }
    ],
    [
      { title: "Desain Bersih & Terpercaya", description: "Website yang mencerminkan kebersihan dan profesionalisme layanan.", emoji: "✨" },
      { title: "SEO Cleaning Service [KOTA]", description: "Optimasi pencarian untuk klien rumah tangga dan kantor di [KOTA].", emoji: "🔍" },
      { title: "Sistem Booking Mudah", description: "Proses booking yang simpel untuk meningkatkan konversi order.", emoji: "⚡" }
    ],
    [
      { name: "Bu Ratna", role: "Owner, Sparkle Clean Service", text: "Booking online meningkatkan order 60%. Klien rumah bisa pesan jadwal rutin setiap minggu." },
      { name: "Pak Andi", role: "Manager, Pro Clean Solutions", text: "Website profesional membuat kami dipercaya gedung perkantoran untuk kontrak kebersihan." },
      { name: "Mbak Fitri", role: "Founder, Bersih Cemerlang", text: "Galeri before-after di website sangat meyakinkan. Klien langsung percaya kualitas kerja kami." }
    ],
    [
      { q: "Berapa biaya cleaning?", a: "Harga mulai dari Rp 150.000 per sesi untuk rumah. Harga kontrak kantor berdasarkan luas area." },
      { q: "Apakah peralatan disediakan?", a: "Ya, tim kami datang dengan peralatan dan bahan cleaning profesional lengkap." },
      { q: "Bagaimana area layanan?", a: "Informasi area layanan ditampilkan di website beserta tambahan biaya transportasi jika di luar area." },
      { q: "Berapa biaya website cleaning service?", a: "Mulai dari Rp 1.600.000 untuk profil dasar hingga Rp 2.900.000 dengan booking online dan galeri." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 5-7 hari kerja setelah data layanan dan foto hasil kerja diterima." }
    ]
  ),

  // ================================================================
  // KATEGORI I — LIFESTYLE & HIBURAN (5 NICHE)
  // ================================================================

  // I1. GYM & FITNESS CENTER
  niche(
    "gym", "I", "Lifestyle & Hiburan",
    "Jasa Website Gym & Fitness Center [KOTA] | Member Online",
    "Jasa website gym dan fitness center profesional di [KOTA]. Daftar member online, jadwal kelas, tampil di Google. Hubungi kami!",
    {
      headline: "Jasa Website Gym & Fitness Center di [KOTA]",
      subheadline: "Rekrut member baru lewat sistem pendaftaran online dan tampil energik di Google.",
      cta: "Lihat Demo",
      badge: "💪 Spesialis Website Gym & Fitness"
    },
    "Gym di [KOTA] kehilangan calon member yang mencari tempat olahraga terdekat lewat Google. Website profesional menarik member yang serius.",
    [
      { title: "Paket Membership & Harga", description: "Daftar paket member: harian, bulanan, tahunan, dengan benefit masing-masing.", emoji: "💳" },
      { title: "Jadwal Kelas Group", description: "Jadwal kelas: yoga, zumba, body combat, spinning, dan personal training.", emoji: "📅" },
      { title: "Profil Trainer", description: "Profil personal trainer bersertifikat dengan spesialisasi dan pengalaman.", emoji: "🏋️" },
      { title: "Galeri & Form Daftar", description: "Foto fasilitas gym dan form pendaftaran member online.", emoji: "📸" }
    ],
    [
      { title: "Desain Energik & Motivasional", description: "Website yang memotivasi pengunjung untuk mulai hidup sehat.", emoji: "🔥" },
      { title: "SEO Keyword Gym [KOTA]", description: "Optimasi pencarian untuk calon member yang cari gym terbaik di [KOTA].", emoji: "🔍" },
      { title: "Sistem Member Mudah", description: "Pendaftaran member dan pemilihan paket langsung dari website.", emoji: "⚡" }
    ],
    [
      { name: "Coach Reza", role: "Owner, PowerFit Gym", text: "Member baru meningkat 40% setelah punya website. Pendaftaran online sangat praktis bagi calon member." },
      { name: "Mbak Shinta", role: "Manager, FemFit Studio", text: "Jadwal kelas di website sangat membantu. Member bisa cek jadwal dan langsung booking spot." },
      { name: "Pak Benny", role: "Founder, Iron Paradise Gym", text: "Galeri fasilitas di website membuat calon member kagum sebelum trial. Konversi meningkat drastis." }
    ],
    [
      { q: "Berapa biaya membership?", a: "Harga paket member bisa ditampilkan transparan di website sesuai kebijakan gym Anda." },
      { q: "Fasilitas apa saja?", a: "Halaman khusus menampilkan semua fasilitas: alat fitness, locker, shower, sauna, dll." },
      { q: "Kapan jadwal kelas group?", a: "Jadwal kelas terbaru selalu terupdate di website agar member bisa merencanakan latihan." },
      { q: "Berapa biaya website gym?", a: "Mulai dari Rp 1.600.000 untuk profil gym dasar hingga Rp 2.900.000 dengan member system dan jadwal." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 5-7 hari kerja setelah foto fasilitas dan data lengkap diterima." }
    ]
  ),

  // I2. STUDIO FOTO & VIDEOGRAFI
  niche(
    "studio-foto", "I", "Lifestyle & Hiburan",
    "Jasa Website Studio Foto & Videografi [KOTA] | Portofolio",
    "Jasa website studio foto dan videografi profesional di [KOTA]. Portofolio visual memukau, booking online. Hubungi kami!",
    {
      headline: "Jasa Website Studio Foto & Videografi di [KOTA]",
      subheadline: "Tampilkan karya terbaik Anda dan terima booking online untuk menarik lebih banyak klien.",
      cta: "Lihat Portofolio",
      badge: "📷 Spesialis Website Fotografer"
    },
    "Fotografer dan videografer di [KOTA] terlalu bergantung pada Instagram untuk portofolio. Website profesional diperlukan untuk menarik klien korporat dan wedding.",
    [
      { title: "Galeri Portofolio per Kategori", description: "Showcase karya: wedding, produk, event, portrait, fashion, dan corporate.", emoji: "🖼️" },
      { title: "Paket & Harga", description: "Daftar paket foto/video dengan detail layanan dan harga transparan.", emoji: "💰" },
      { title: "Form Booking & Profil", description: "Formulir booking tanggal dan profil fotografer dengan equipment list.", emoji: "📋" },
      { title: "Video Showreel", description: "Video compilation karya terbaik yang menampilkan gaya dan kualitas kerja.", emoji: "🎥" }
    ],
    [
      { title: "Desain Visual & Premium", description: "Website yang menonjolkan kualitas visual karya fotografi Anda.", emoji: "✨" },
      { title: "SEO Keyword Fotografer [KOTA]", description: "Optimasi pencarian untuk klien yang mencari jasa foto/video di [KOTA].", emoji: "🔍" },
      { title: "Reputasi Profesional", description: "Portfolio website membangun reputasi lebih kuat dari social media saja.", emoji: "🏆" }
    ],
    [
      { name: "Kak Andi", role: "Founder, Andi Photography Studio", text: "Website portofolio membuat booking wedding meningkat drastis. Klien datang sudah yakin dengan style kami." },
      { name: "Mas Ricky", role: "Videographer, MotionCraft Studios", text: "Showreel di website sangat efektif. Klien korporat langsung impressed dan deal." },
      { name: "Mbak Dewi", role: "Product Photographer, Dewi Studio", text: "Website membuat saya dipercaya brand-brand besar untuk product photography. Level up banget!" }
    ],
    [
      { q: "Berapa biaya jasa foto?", a: "Paket bervariasi mulai dari foto personal hingga full wedding. Detail harga di halaman paket." },
      { q: "Bagaimana hak cipta foto?", a: "Informasi hak cipta dan penggunaan foto bisa dijelaskan di halaman syarat ketentuan." },
      { q: "Berapa revisi yang didapat?", a: "Jumlah foto edit dan revisi per paket bisa ditampilkan transparan di website." },
      { q: "Berapa biaya website fotografer?", a: "Mulai dari Rp 1.600.000 untuk galeri portofolio hingga Rp 2.900.000 dengan booking dan showreel." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 5-7 hari kerja setelah portofolio dan data lengkap diterima." }
    ]
  ),

  // I3. WEDDING ORGANIZER
  niche(
    "wedding-organizer", "I", "Lifestyle & Hiburan",
    "Jasa Website Wedding Organizer [KOTA] | Portofolio Pernikahan",
    "Jasa website wedding organizer profesional di [KOTA]. Tampilkan paket, portofolio, dan booking konsultasi. Hubungi kami!",
    {
      headline: "Jasa Website Wedding Organizer Profesional di [KOTA]",
      subheadline: "Wujudkan pernikahan impian calon pengantin dengan website yang memukau dan meyakinkan.",
      cta: "Konsultasi Gratis",
      badge: "💒 Spesialis Website Wedding Organizer"
    },
    "Wedding organizer di [KOTA] kehilangan calon pengantin yang mencari WO terpercaya di Google. Pasangan milenial membandingkan WO lewat internet.",
    [
      { title: "Paket Pernikahan", description: "Paket lengkap: intimate wedding, regular, premium, hingga luxury package.", emoji: "💍" },
      { title: "Galeri Pernikahan", description: "Dokumentasi pernikahan yang sudah ditangani dengan foto dan video berkualitas.", emoji: "📸" },
      { title: "Vendor Partner", description: "Daftar vendor partner: venue, catering, dekorasi, entertainment, dll.", emoji: "🤝" },
      { title: "Timeline & Form Konsultasi", description: "Timeline persiapan pernikahan dan form booking konsultasi awal.", emoji: "📅" }
    ],
    [
      { title: "Desain Romantis & Elegan", description: "Website yang memancarkan kesan romantis dan mewah sesuai industry wedding.", emoji: "💝" },
      { title: "SEO Wedding Organizer [KOTA]", description: "Optimasi pencarian untuk calon pengantin yang mencari WO di [KOTA].", emoji: "🔍" },
      { title: "Mengkonversi Pengantin", description: "Desain yang mendorong calon pengantin untuk langsung booking konsultasi.", emoji: "💐" }
    ],
    [
      { name: "Mbak Della", role: "Founder, Della Wedding Planner", text: "Portofolio pernikahan di website sangat memukau. Calon pengantin langsung jatuh cinta dan booking." },
      { name: "Kak Nana", role: "CEO, Nana Wedding Organizer", text: "Website membuat kami tampil premium. Calon pengantin dari luar kota pun datang." },
      { name: "Bu Lina", role: "Director, Lina's One Stop Wedding", text: "Form konsultasi online mempermudah kami menjadwalkan meeting dengan calon pengantin." }
    ],
    [
      { q: "Berapa biaya paket WO?", a: "Paket bervariasi dari intimate wedding hingga luxury. Detail harga di halaman paket." },
      { q: "Bagaimana area layanan?", a: "Informasi area layanan ditampilkan beserta biaya tambahan untuk lokasi di luar kota." },
      { q: "Apakah bisa pilih vendor sendiri?", a: "Ya, website menampilkan opsi paket all-in atau pilihan vendor sesuai keinginan." },
      { q: "Berapa biaya website WO?", a: "Mulai dari Rp 1.600.000 untuk galeri dasar hingga Rp 2.900.000 dengan booking dan vendor listing." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 5-7 hari kerja setelah portofolio pernikahan dan data lengkap diterima." }
    ]
  ),

  // I4. TOKO BUNGA & FLORIST
  niche(
    "florist", "I", "Lifestyle & Hiburan",
    "Jasa Website Toko Bunga & Florist [KOTA] | Order Online",
    "Jasa website toko bunga dan florist profesional di [KOTA]. Katalog buket cantik, order online mudah. Hubungi kami!",
    {
      headline: "Jasa Website Toko Bunga & Florist di [KOTA]",
      subheadline: "Tampilkan buket cantik dan terima order online untuk meningkatkan penjualan toko bunga Anda.",
      cta: "Lihat Demo",
      badge: "🌸 Spesialis Website Florist"
    },
    "Florist di [KOTA] kehilangan pembeli yang mencari buket bunga untuk hadiah, wisuda, dan pernikahan lewat Google.",
    [
      { title: "Katalog Buket & Harga", description: "Koleksi buket cantik dengan foto, deskripsi, dan harga transparan.", emoji: "💐" },
      { title: "Kategori Buket", description: "Kategori lengkap: wisuda, pernikahan, ulang tahun, duka cita, dan custom.", emoji: "🗂️" },
      { title: "Form Order & Pengiriman", description: "Formulir order dengan pilihan tanggal kirim, kartu ucapan, dan alamat penerima.", emoji: "📦" },
      { title: "Custom Order & Galeri", description: "Opsi buket custom sesuai budget dan galeri produk terbaru.", emoji: "🎨" }
    ],
    [
      { title: "Desain Floral & Estetik", description: "Website cantik yang mencerminkan keindahan produk bunga Anda.", emoji: "🌺" },
      { title: "SEO Keyword Florist [KOTA]", description: "Optimasi pencarian untuk pembeli yang mencari toko bunga di [KOTA].", emoji: "🔍" },
      { title: "Mudah Update Produk", description: "Panel admin untuk update buket terbaru, harga seasonal, dan promo.", emoji: "⚙️" }
    ],
    [
      { name: "Ci Lily", role: "Owner, Lily's Blooms", text: "Order online sangat meningkatkan penjualan. Pelanggan bisa pesan buket cantik tanpa datang ke toko." },
      { name: "Bu Rosa", role: "Founder, Rosa Florist", text: "Katalog online membuat pelanggan tinggal pilih dan bayar. Proses jadi sangat efisien." },
      { name: "Mbak Daisy", role: "Owner, Daisy Floral Design", text: "Custom order meningkat drastis. Pelanggan suka bisa request desain lewat form di website." }
    ],
    [
      { q: "Berapa harga buket bunga?", a: "Harga mulai dari Rp 150.000 untuk buket mini. Detail harga per produk ada di katalog." },
      { q: "Bagaimana area pengiriman?", a: "Informasi area delivery dan estimasi ongkir ditampilkan saat proses order." },
      { q: "Bisa custom order?", a: "Ya, form custom order tersedia untuk request buket sesuai tema, warna, dan budget." },
      { q: "Berapa biaya website florist?", a: "Mulai dari Rp 1.600.000 untuk katalog buket hingga Rp 2.900.000 dengan order online dan delivery tracking." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 5-7 hari kerja setelah foto produk berkualitas tinggi diterima." }
    ]
  ),

  // I5. PET SHOP & GROOMING
  niche(
    "petshop", "I", "Lifestyle & Hiburan",
    "Jasa Website Pet Shop & Grooming [KOTA] | Booking Online",
    "Jasa website pet shop dan grooming hewan profesional di [KOTA]. Booking grooming online, katalog produk. Hubungi kami!",
    {
      headline: "Jasa Website Pet Shop & Grooming di [KOTA]",
      subheadline: "Terima booking grooming online dan tampilkan produk hewan peliharaan untuk pecinta hewan di [KOTA].",
      cta: "Lihat Demo",
      badge: "🐾 Spesialis Website Pet Shop"
    },
    "Pet shop di [KOTA] kehilangan pelanggan yang mencari grooming atau produk hewan peliharaan lewat Google.",
    [
      { title: "Katalog Produk Pet", description: "Daftar produk: makanan, aksesoris, kandang, mainan, dan suplemen hewan.", emoji: "🛒" },
      { title: "Paket Grooming & Harga", description: "Paket grooming: basic, premium, full service, dengan harga per jenis hewan.", emoji: "🛁" },
      { title: "Booking Grooming Online", description: "Formulir booking grooming dengan pilihan tanggal, jenis hewan, dan layanan.", emoji: "📅" },
      { title: "Artikel Perawatan Hewan", description: "Blog tips perawatan anjing, kucing, dan hewan lainnya untuk SEO.", emoji: "📰" }
    ],
    [
      { title: "Desain Cute & Menarik", description: "Website yang lucu dan menarik bagi pecinta hewan peliharaan.", emoji: "🐶" },
      { title: "SEO Keyword Pet Shop [KOTA]", description: "Optimasi pencarian untuk pemilik hewan yang mencari pet shop di [KOTA].", emoji: "🔍" },
      { title: "Sistem Booking Mudah", description: "Proses booking grooming yang simpel dan cepat.", emoji: "⚡" }
    ],
    [
      { name: "Kak Mira", role: "Owner, Mira's Paw Shop", text: "Booking grooming online sangat membantu. Pelanggan tinggal pilih jadwal dan datang on time." },
      { name: "Mas Budi", role: "Founder, Happy Paws Pet Store", text: "Katalog online meningkatkan penjualan produk. Pelanggan bisa browsing dan pesan via WhatsApp." },
      { name: "Mbak Tari", role: "Groomer Profesional, TariPet Salon", text: "Blog perawatan hewan mendatangkan banyak pembaca. Banyak yang kemudian booking grooming dan beli produk." }
    ],
    [
      { q: "Berapa biaya grooming?", a: "Harga bervariasi per jenis dan ukuran hewan. Detail harga ada di halaman paket grooming." },
      { q: "Jenis hewan apa yang dilayani?", a: "Grooming tersedia untuk anjing, kucing, dan hewan peliharaan lainnya sesuai layanan." },
      { q: "Produk apa saja tersedia?", a: "Katalog lengkap dari makanan premium, aksesori, hingga suplemen untuk berbagai jenis hewan." },
      { q: "Berapa biaya website pet shop?", a: "Mulai dari Rp 1.600.000 untuk katalog dasar hingga Rp 2.900.000 dengan booking online dan blog." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 5-7 hari kerja setelah foto produk dan data layanan diterima." }
    ]
  ),

  // ================================================================
  // KATEGORI J — LOGISTIK & JASA RUMAH TANGGA (5 NICHE)
  // ================================================================

  // J1. EKSPEDISI & KURIR LOKAL
  niche(
    "ekspedisi", "J", "Logistik & Jasa Rumah Tangga",
    "Jasa Website Ekspedisi & Kurir Lokal [KOTA] | Tracking Online",
    "Jasa website ekspedisi dan kurir lokal profesional di [KOTA]. Cek tarif online, tracking paket. Hubungi kami sekarang!",
    {
      headline: "Jasa Website Ekspedisi & Kurir Lokal di [KOTA]",
      subheadline: "Tampil profesional dan terima order pengiriman online untuk bersaing dengan pemain besar.",
      cta: "Lihat Demo",
      badge: "📬 Spesialis Website Ekspedisi"
    },
    "Jasa ekspedisi lokal di [KOTA] sering kalah dari kompetitor besar karena tidak punya kehadiran digital yang profesional.",
    [
      { title: "Kalkulator Tarif Pengiriman", description: "Hitung tarif ongkir otomatis berdasarkan berat, dimensi, dan tujuan.", emoji: "🧮" },
      { title: "Area Layanan", description: "Peta area delivery dan daftar rute pengiriman yang dilayani.", emoji: "🗺️" },
      { title: "Form Order Pickup", description: "Formulir order penjemputan paket untuk pengiriman dari alamat pengirim.", emoji: "📦" },
      { title: "Tracking & Profil", description: "Fitur tracking status paket dan profil perusahaan beserta armada.", emoji: "📍" }
    ],
    [
      { title: "Desain Profesional & Logistik", description: "Website yang memancarkan kepercayaan dan kecepatan layanan ekspedisi.", emoji: "✨" },
      { title: "SEO Keyword Ekspedisi [KOTA]", description: "Optimasi pencarian untuk pengirim yang mencari jasa ekspedisi di [KOTA].", emoji: "🔍" },
      { title: "Kepercayaan Pengirim", description: "Website resmi meningkatkan kepercayaan dari konsumen dan bisnis.", emoji: "🤝" }
    ],
    [
      { name: "Pak Mulyana", role: "Owner, Cepat Express", text: "Website dengan kalkulator tarif membuat pelanggan bisa cek harga sendiri. Inquiry lebih berkualitas." },
      { name: "Mas Rio", role: "Manager, Rio Kurir", text: "Form order pickup online sangat efisien. Pelanggan pesan, kurir datang ambil. Simple!" },
      { name: "Bu Wiwik", role: "Director, WiGo Logistics", text: "Website profesional membuat kami dipercaya e-commerce dan UMKM untuk pengiriman rutin." }
    ],
    [
      { q: "Berapa tarif pengiriman?", a: "Tarif bervariasi berdasarkan berat dan tujuan. Kalkulator otomatis tersedia di website." },
      { q: "Berapa batas berat maksimal?", a: "Informasi batas berat dan dimensi per jenis layanan ditampilkan jelas di website." },
      { q: "Bagaimana area layanan?", a: "Peta area delivery menampilkan seluruh wilayah yang sudah dilayani." },
      { q: "Berapa biaya website ekspedisi?", a: "Mulai dari Rp 1.600.000 untuk profil dasar hingga Rp 2.900.000 dengan kalkulator tarif dan tracking." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 5-7 hari kerja setelah data tarif dan rute pengiriman lengkap diterima." }
    ]
  ),

  // J2. JASA LAUNDRY
  niche(
    "laundry", "J", "Logistik & Jasa Rumah Tangga",
    "Jasa Website Laundry [KOTA] | Order Antar Jemput Online",
    "Jasa website laundry profesional di [KOTA]. Order antar jemput online, harga transparan. Hubungi kami!",
    {
      headline: "Jasa Website Laundry di [KOTA]",
      subheadline: "Terima order laundry antar jemput online dan jangkau lebih banyak pelanggan di [KOTA].",
      cta: "Lihat Demo",
      badge: "👔 Spesialis Website Laundry"
    },
    "Laundry di [KOTA] kehilangan pelanggan yang mencari laundry terdekat di Google. Layanan antar jemput menjadi keunggulan kompetitif.",
    [
      { title: "Paket & Harga per Kg", description: "Daftar paket laundry: reguler, express, dry clean, setrika saja, dengan harga per kg.", emoji: "⚖️" },
      { title: "Layanan Express & Reguler", description: "Opsi layanan sesuai kebutuhan: 6 jam express atau 2 hari reguler.", emoji: "⚡" },
      { title: "Area Antar Jemput", description: "Peta area layanan antar jemput dan estimasi waktu pickup.", emoji: "🚚" },
      { title: "Form Order & Tracking", description: "Formulir order online dan sistem tracking status cucian.", emoji: "📋" }
    ],
    [
      { title: "Desain Bersih & Segar", description: "Website yang mencerminkan kebersihan dan kesegaran layanan laundry.", emoji: "✨" },
      { title: "SEO Keyword Laundry [KOTA]", description: "Optimasi pencarian untuk pelanggan yang cari laundry terdekat di [KOTA].", emoji: "🔍" },
      { title: "Sistem Order Mudah", description: "Proses order yang simpel dari pesan, dijemput, dicuci, diantar.", emoji: "📱" }
    ],
    [
      { name: "Bu Tini", role: "Owner, Tini Laundry Express", text: "Order antar jemput online meningkat 3x lipat. Pelanggan suka karena tidak perlu bawa cucian sendiri." },
      { name: "Mas Lukman", role: "Founder, Fresh & Clean Laundry", text: "Website membuat laundry kami tampil profesional. Pelanggan dari perumahan elite banyak yang datang." },
      { name: "Mbak Ayu", role: "Manager, Ayu Laundry", text: "Tracking cucian di website bikin pelanggan happy. Mereka bisa lihat kapan cucian selesai." }
    ],
    [
      { q: "Berapa biaya laundry per kg?", a: "Harga mulai dari Rp 7.000/kg reguler. Detail harga per jenis layanan ada di website." },
      { q: "Berapa lama waktu selesai?", a: "Reguler 2-3 hari, Express 6-8 jam. Estimasi ditampilkan di website." },
      { q: "Bagaimana area antar jemput?", a: "Peta area layanan ditampilkan beserta jadwal pickup dan minimum order." },
      { q: "Berapa biaya website laundry?", a: "Mulai dari Rp 1.600.000 untuk profil dasar hingga Rp 2.900.000 dengan order online dan tracking." },
      { q: "Berapa lama pengerjaan website?", a: "Rata-rata 5-7 hari kerja setelah data layanan dan harga lengkap diterima." }
    ]
  ),

  // J3. JASA PEST CONTROL
  niche(
    "pest-control", "J", "Logistik & Jasa Rumah Tangga",
    "Jasa Website Pest Control [KOTA] | Pembasmi Hama Profesional",
    "Jasa website pest control profesional di [KOTA]. Tampil terpercaya, booking pembasmian online. Hubungi kami!",
    {
      headline: "Jasa Website Pest Control Profesional di [KOTA]",
      subheadline: "Jangkau lebih banyak rumah tangga dan perusahaan yang membutuhkan pembasmi hama profesional.",
      cta: "Konsultasi Gratis",
      badge: "🐛 Spesialis Website Pest Control"
    },
    "Jasa pest control di [KOTA] kehilangan klien yang mencari solusi hama profesional via Google. Banyak pemilik rumah dan bisnis yang butuh jasa ini.",
    [
      { title: "Jenis Hama yang Ditangani", description: "Layanan untuk: rayap, tikus, kecoa, semut, nyamuk, lalat, dan hama gudang.", emoji: "🐀" },
      { title: "Metode & Bahan Aman", description: "Informasi metode pembasmian yang ramah lingkungan dan aman untuk keluarga.", emoji: "🧪" },
      { title: "Sertifikasi & Paket Harga", description: "Sertifikasi Kemenkes dan paket harga berdasarkan luas area treatment.", emoji: "📜" },
      { title: "Form Booking Survey", description: "Formulir booking survey gratis untuk identifikasi masalah hama di lokasi.", emoji: "📋" }
    ],
    [
      { title: "Desain Terpercaya & Profesional", description: "Website yang membangun kepercayaan terhadap keahlian pest control.", emoji: "✨" },
      { title: "SEO Keyword Pest Control [KOTA]", description: "Optimasi pencarian untuk pemilik rumah yang mencari jasa anti hama di [KOTA].", emoji: "🔍" },
      { title: "Konversi Survey Tinggi", description: "Desain yang mendorong pengunjung untuk booking survey gratis.", emoji: "📈" }
    ],
    [
      { name: "Pak Hasan", role: "Director, Hasan Pest Control", text: "Website profesional membuat kami dipercaya hotel dan restoran besar di kota. Kontrak rutin meningkat." },
      { name: "Bu Endah", role: "Owner, SafeHome Anti Pest", text: "Form booking survey online sangat efisien. Klien tinggal isi form dan teknisi datang survey." },
      { name: "Pak Joko", role: "Manager, Joko Pest Solutions", text: "Informasi sertifikasi di website membuat klien yakin kami menggunakan bahan yang aman." }
    ],
    [
      { q: "Apakah bahan kimia aman?", a: "Ya, kami menggunakan bahan berstandar WHO dan Kemenkes yang aman untuk keluarga dan hewan peliharaan." },
      { q: "Berapa lama garansi?", a: "Garansi treatment bervariasi 3-12 bulan tergantung jenis hama dan paket layanan." },
      { q: "Berapa waktu pengerjaan?", a: "Treatment biasanya selesai 2-4 jam tergantung luas area dan jenis hama." },
      { q: "Berapa biaya website pest control?", a: "Mulai dari Rp 1.600.000 untuk profil dasar hingga Rp 2.900.000 dengan booking survey dan blog." },
      { q: "Berapa lama pengerjaan website?", a: "Rata-rata 5-7 hari kerja setelah data layanan dan sertifikasi diterima." }
    ]
  ),

  // J4. JASA PENGIRIMAN AIR GALON & GAS
  niche(
    "agen-gas-air", "J", "Logistik & Jasa Rumah Tangga",
    "Jasa Website Agen Gas & Air Galon [KOTA] | Order Online",
    "Jasa website agen gas dan air galon profesional di [KOTA]. Pesan antar online, harga kompetitif. Hubungi kami!",
    {
      headline: "Jasa Website Agen Gas & Air Galon di [KOTA]",
      subheadline: "Terima order antar online dan tingkatkan jumlah pelanggan tetap dengan website profesional.",
      cta: "Lihat Demo",
      badge: "💧 Spesialis Website Agen Gas & Air"
    },
    "Agen gas dan air galon di [KOTA] kehilangan pelanggan baru yang mencari agen terdekat secara online. Layanan cepat dan order mudah menjadi kunci.",
    [
      { title: "Daftar Produk & Harga", description: "Katalog lengkap: gas LPG 3kg/12kg, air galon refill, air mineral, dll.", emoji: "💧" },
      { title: "Area Layanan Antar", description: "Peta area delivery dan estimasi waktu pengiriman.", emoji: "🗺️" },
      { title: "Form Order Antar", description: "Formulir order simpel untuk pesan gas dan air dengan konfirmasi cepat.", emoji: "📝" },
      { title: "Langganan & Nomor Darurat", description: "Program langganan bulanan dan nomor darurat order.", emoji: "📞" }
    ],
    [
      { title: "Desain Simpel & Terpercaya", description: "Website yang clean dan mudah digunakan semua kalangan.", emoji: "✨" },
      { title: "SEO Agen Gas/Air [KOTA]", description: "Optimasi agar muncul saat warga mencari agen gas atau air terdekat.", emoji: "🔍" },
      { title: "Order Mudah Kapanpun", description: "Proses order yang simpel dan cepat, cocok untuk kebutuhan mendesak.", emoji: "⚡" }
    ],
    [
      { name: "Pak Joni", role: "Agen Gas & Air, Joni Delivery", text: "Order online meningkatkan pelanggan tetap 2x lipat. Warga RT satu kelurahan jadi langganan." },
      { name: "Bu Warni", role: "Agen Air Galon Warni", text: "Website simpel tapi sangat efektif. Pelanggan bisa order pagi, siang sudah diantar." },
      { name: "Mas Dadang", role: "Owner, Dadang Gas Express", text: "Langganan bulanan lewat website membuat pendapatan lebih stabil dan terencana." }
    ],
    [
      { q: "Berapa harga gas dan air galon?", a: "Harga update harian/mingguan dan ditampilkan transparan di website." },
      { q: "Bagaimana area pengiriman?", a: "Peta area delivery menampilkan wilayah yang dilayani dan estimasi waktu antar." },
      { q: "Berapa minimum order?", a: "Kebijakan minimum order dan free delivery bisa ditampilkan sesuai ketentuan agen." },
      { q: "Berapa biaya website agen gas/air?", a: "Mulai dari Rp 1.600.000 untuk profil dasar hingga Rp 2.900.000 dengan order online dan langganan." },
      { q: "Berapa lama pengerjaan?", a: "Rata-rata 3-5 hari kerja karena struktur website relatif sederhana." }
    ]
  ),

  // J5. BENGKEL LAS & FABRIKASI
  niche(
    "bengkel-las", "J", "Logistik & Jasa Rumah Tangga",
    "Jasa Website Bengkel Las & Fabrikasi [KOTA] | Portofolio",
    "Jasa website bengkel las dan fabrikasi profesional di [KOTA]. Tampilkan portofolio, menarik klien industri. Hubungi kami!",
    {
      headline: "Jasa Website Bengkel Las & Fabrikasi di [KOTA]",
      subheadline: "Tampilkan kemampuan fabrikasi dan tarik klien proyek besar dengan portofolio online profesional.",
      cta: "Konsultasi Gratis",
      badge: "⚙️ Spesialis Website Bengkel Las"
    },
    "Bengkel las di [KOTA] kehilangan proyek besar dari korporat dan developer karena tidak punya portofolio digital yang menunjukkan kapasitas dan kualitas kerja.",
    [
      { title: "Portofolio Proyek Fabrikasi", description: "Galeri foto proyek: pagar, kanopi, railing, konstruksi baja, teralis, dll.", emoji: "📸" },
      { title: "Jenis Pekerjaan Las", description: "Daftar layanan: pagar besi, kanopi, konstruksi baja ringan & berat, custom furniture besi.", emoji: "🔧" },
      { title: "Bahan & Spesifikasi", description: "Informasi jenis bahan: besi, stainless steel, aluminium, dan spesifikasi teknis.", emoji: "📋" },
      { title: "Profil & Form Penawaran", description: "Profil bengkel dengan peralatan dan formulir permintaan penawaran proyek.", emoji: "📝" }
    ],
    [
      { title: "Desain Industrial & Profesional", description: "Website yang mencerminkan kekuatan dan presisi industri metalworking.", emoji: "⚙️" },
      { title: "SEO Keyword Bengkel Las [KOTA]", description: "Optimasi agar muncul saat orang mencari jasa las dan fabrikasi di [KOTA].", emoji: "🔍" },
      { title: "Menarik Proyek Besar", description: "Portofolio visual meyakinkan klien developer dan kontraktor.", emoji: "🏗️" }
    ],
    [
      { name: "Pak Sarman", role: "Owner, Sarman Las & Fabrikasi", text: "Portofolio di website membuat developer perumahan percaya dan kasih proyek pagar 100 unit." },
      { name: "Mas Wawan", role: "Bengkel Las Wawan Jaya", text: "Dulu klien hanya dari sekitar, sekarang dari se-kabupaten. Website sangat membantu." },
      { name: "Pak Udin", role: "Founder, Udin Steel Works", text: "Form penawaran online mempercepat proses quotation. Klien kirim spek, kami langsung hitung." }
    ],
    [
      { q: "Berapa biaya jasa las?", a: "Biaya bervariasi per jenis pekerjaan dan material. Estimasi bisa dihitung lewat form penawaran." },
      { q: "Berapa waktu pengerjaan?", a: "Tergantung skala proyek, biasanya 3-14 hari untuk proyek residensial." },
      { q: "Material apa yang tersedia?", a: "Besi hollow, pipa, plat, stainless steel, aluminium — sesuai spesifikasi proyek." },
      { q: "Berapa biaya website bengkel las?", a: "Mulai dari Rp 1.600.000 untuk portofolio dasar hingga Rp 2.900.000 dengan galeri dan form penawaran." },
      { q: "Berapa lama pengerjaan website?", a: "Rata-rata 5-7 hari kerja setelah foto portofolio dan data bengkel diterima." }
    ]
  ),
];

// Quick lookup map: slug -> niche definition
export const NICHE_MAP = new Map<string, NicheDefinition>(
  NICHES.map(n => [n.slug, n])
);

// All niche slugs for validation
export const NICHE_SLUGS: string[] = NICHES.map(n => n.slug);

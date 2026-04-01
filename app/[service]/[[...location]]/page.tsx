import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2, MapPin } from "lucide-react";
import Link from "next/link";

type Props = {
  params: Promise<{ service: string; location?: string[] }>;
};

import { ALLOWED_SERVICES, TARGET_CITIES } from "@/lib/constants";

// --- UTILS ---
function formatString(str: string): string {
  return str.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}

// --- METADATA ---
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;

  if (!ALLOWED_SERVICES.includes(resolvedParams.service)) {
    return { title: "Not Found" };
  }

  const serviceName = formatString(resolvedParams.service);
  const locationName = resolvedParams.location && resolvedParams.location.length > 0
    ? formatString(resolvedParams.location.join(" "))
    : "";

  const locationSuffix = locationName ? ` di ${locationName}` : "";

  const title = `Jasa ${serviceName}${locationSuffix} | Web Developer Bergaransi`;
  const description = `Mencari jasa pembuatan website${locationSuffix}? Kami adalah web developer profesional yang berfokus pada desain web responsif, company profile, dan toko online dengan optimasi SEO tingkat lanjut. Mulai Rp 1.6 Juta.`;

  return {
    title,
    description,
    keywords: [
      `Jasa ${serviceName}`,
      `${serviceName.toLowerCase()}${locationSuffix}`,
      "Buat Website Murah",
      "Developer Website",
      "SEO Friendly",
      "Website Bisnis",
      "Jasa bikin web",
      "Jasa pembuatan website",
      "Buat website perusahaan",
      "Web developer murah",
      "Jasa SEO website",
      "Desain web e-commerce",
      "Toko online",
      "Company profile",
      "Website bisnis",
      "Pembuatan landing page",
    ],
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

// --- COMPONENT ---
export default async function ProgrammaticLandingPage({ params }: Props) {
  const resolvedParams = await params;

  if (!ALLOWED_SERVICES.includes(resolvedParams.service)) {
    notFound();
  }

  const serviceSlug = resolvedParams.service;
  const serviceName = formatString(serviceSlug);
  const locationName = resolvedParams.location && resolvedParams.location.length > 0
    ? formatString(resolvedParams.location.join(" "))
    : "";
  const displayLocation = locationName ? ` di ${locationName}` : "";

  const whatsappNumber = "6282160731800";
  const waMessage = `Halo, saya tertarik dengan ${serviceName.toLowerCase()}${displayLocation}. Boleh info lebih lanjut?`;
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waMessage)}`;

  // JSON-LD Structured Data for Service, LocalBusiness/Organization, and FAQ
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": serviceName,
        "provider": {
          "@type": "Organization",
          "name": "Rafiq Web Developer",
        },
        "areaServed": locationName
          ? {
            "@type": "Place",
            "name": locationName,
          }
          : {
            "@type": "Country",
            "name": "Indonesia",
          },
        "offers": [
          {
            "@type": "Offer",
            "name": "Paket Starter",
            "price": "1600000",
            "priceCurrency": "IDR",
          },
          {
            "@type": "Offer",
            "name": "Paket Pro",
            "price": "2200000",
            "priceCurrency": "IDR",
          },
          {
            "@type": "Offer",
            "name": "Paket Premium",
            "price": "2900000",
            "priceCurrency": "IDR",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Berapa lama proses pembuatan website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Proses pembuatan rata-rata memakan waktu 3-14 hari kerja, tergantung pada kompleksitas fitur dan kesiapan materi dari Anda.",
            },
          },
          {
            "@type": "Question",
            "name": "Apakah website sudah termasuk optimasi SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ya, semua paket pembuatan website kami sudah disetting SEO On-page dasar dan diregistrasikan di Google Search Console agar mudah terindeks.",
            },
          },
          {
            "@type": "Question",
            "name": "Apakah saya harus bayar perpanjangan tahunan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tentu. Setiap website membutuhkan domain dan layanan hosting (server) yang perlu diperpanjang setiap tahun agar website tetap aktif.",
            },
          },
          {
            "@type": "Question",
            "name": "Bisa untuk Google AI Overview?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Website dirancang dengan standar semantik HTML yang bersih serta snippet microdata/JSON-LD, yang sangat membantu agar konten Anda bisa mudah dikutip oleh Google AI Overview (SGE).",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen flex flex-col bg-background font-body">
        {/* Navigation placeholder for isolated landing page */}
        <header className="w-full p-6 flex justify-center items-center">
          <Link href="/" className="text-xl font-bold font-heading text-foreground" style={{ textDecoration: 'none' }}>
            Rafiq<span className="text-accent-pop">.</span>
          </Link>
        </header>

        {/* HERO SECTION */}
        <section className="section pt-6 lg:pt-16 pb-12 lg:pb-24 flex-1 flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <div className="badge-brutal mb-6 mx-auto inline-flex">
              <span>🎯</span> Web Developer Spesialis Keuntungan Bisnis
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 text-foreground leading-tight" style={{ letterSpacing: "-0.02em" }}>
              Jasa {serviceName} <span className="text-accent-pop">{displayLocation}</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
              Bukan sekadar website biasa. Kami membangun ekosistem digital (<strong>Company Profile, Toko Online, Landing Page</strong>) yang dirancang secara saintifik untuk mendominasi <em>Semantic Search</em>, tampil presisi di <em>Google AI Overview (SGE)</em>, dan mengubah trafik organik menjadi klien potensial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-kirim w-full sm:w-auto text-lg py-4 px-8">
                Konsultasi Gratis <ArrowUpRight size={20} />
              </a>
              <a href="#harga" className="btn-outline-brutal w-full sm:w-auto text-lg py-4 px-8">
                Lihat Harga
              </a>
            </div>
          </div>
        </section>

        {/* MENGAPA MEMILIH KAMI */}
        <section className="section" style={{ background: "var(--card-bg)" }}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">
                Kenapa Bisnis Anda Butuh Layanan Kami?
              </h2>
              <p className="text-text-secondary text-lg">Solusi nyata dari ekspert {serviceName.toLowerCase()} yang memahami niat pencarian (Search Intent) pelanggan Anda.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Dominasi AI Overview & GEO", desc: "Website diinjeksi dengan Semantic HTML dan JSON-LD terstruktur. Hasilnya? Bisnis Anda berpeluang besar dikutip langsung oleh AI Google saat prospek mencari layanan lokal.", emoji: "🤖" },
                { title: "Desain Berbasis Psikologi Konversi", desc: "Kami tidak sekadar membuat desain web yang cantik. Tata letak, copywriting, dan posisi tombol dirancang khusus untuk menuntun pengunjung menghubungi WhatsApp Anda.", emoji: "🎯" },
                { title: "Performa Kilat (Core Web Vitals)", desc: "Kecepatan muat di bawah 2 detik. Dibangun tanpa framework usang, menjamin ranking SEO tinggi dan menekan batas pantulan (Bounce Rate) calon pelanggan Anda.", emoji: "⚡" },
              ].map((feature, i) => (
                <div key={i} className="card-brutal p-8">
                  <div className="icon-circle mb-6 bg-accent-light border-accent-dark">
                    <span className="text-2xl">{feature.emoji}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIVIDER BAND */}
        <div className="divider-band" />

        {/* PRICING SECTION */}
        <section id="harga" className="section bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">
                Paket <span className="text-accent-pop">Harga</span> Terbaik
              </h2>
              <p className="text-text-secondary text-lg">Pilih paket yang paling sesuai dengan kebutuhan bisnis Anda.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {/* Paket 1 : 1.6 Juta */}
              <div className="card-hard flex flex-col p-8 bg-white">
                <div className="mb-4">
                  <span className="badge-brutal text-xs mb-4">UMKM / Personal</span>
                  <h3 className="text-2xl font-bold text-foreground">Paket Starter</h3>
                </div>
                <div className="mb-6 flex items-baseline">
                  <span className="text-3xl font-extrabold text-foreground">Rp1,6 Juta</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {["Custom Tema Responsif", "Domain & Hosting (1 Tahun)", "SEO On-Page Dasar", "Bandwidth Unmetered", "Integrasi Tombol WhatsApp", "Maks. 5 Halaman Dasar"].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary">
                      <CheckCircle2 className="text-accent flex-shrink-0" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-outline-brutal w-full justify-center">Pilih Paket</a>
              </div>

              {/* Paket 2 : 2.2 Juta */}
              <div className="card-hard flex flex-col p-8 transform md:-translate-y-4" style={{ background: "var(--accent-light)", borderColor: "var(--accent-dark)" }}>
                <div className="mb-4 relative">
                  <div className="absolute -top-4 -right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full border border-border-dark shadow-[2px_2px_0px_#0f172a] transform rotate-3">
                    TERLARIS
                  </div>
                  <span className="badge-brutal text-xs mb-4 bg-white">Perusahaan / CV</span>
                  <h3 className="text-2xl font-bold text-foreground">Paket Pro</h3>
                </div>
                <div className="mb-6 flex items-baseline">
                  <span className="text-3xl font-extrabold text-foreground">Rp2,2 Juta</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {["Semua Fitur Paket Starter", "Desain Halaman Khusus Premium", "Email Bisnis Profesional", "Setup Schema Markup / AI Overview", "Maks. 10 Halaman", "Gratis Setup Google My Business"].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary font-medium">
                      <CheckCircle2 className="text-accent flex-shrink-0" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-kirim w-full justify-center text-center">Pilih Paket Kami</a>
              </div>

              {/* Paket 3 : 2.9 Juta */}
              <div className="card-hard flex flex-col p-8 bg-white">
                <div className="mb-4">
                  <span className="badge-brutal text-xs mb-4">Corporate VIP</span>
                  <h3 className="text-2xl font-bold text-foreground">Paket Premium</h3>
                </div>
                <div className="mb-6 flex items-baseline">
                  <span className="text-3xl font-extrabold text-foreground">Rp2,9 Juta</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {["Semua Fitur Paket Pro", "Server Hosting Premium Spesifikasi Tinggi", "Katalog Produk Lanjut/LMS", "Fitur Bilingual (Dua Bahasa)", "Analisis Konversi Tahapan", "Revisi Minor Selama Masa Aktif"].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary">
                      <CheckCircle2 className="text-accent flex-shrink-0" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-outline-brutal w-full justify-center">Pilih Paket</a>
              </div>
            </div>
          </div>
        </section>

        {/* DIVIDER BAND */}
        <div className="divider-band" />

        {/* FAQ SECTION */}
        <section className="section pb-12" style={{ background: "var(--card-bg)" }}>
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">
                Pertanyaan<span className="text-accent-pop"> Umum</span>
              </h2>
              <p className="text-text-secondary text-lg">FAQ seputar layanan {serviceName.toLowerCase()}.</p>
            </div>

            <div className="space-y-4">
              {[
                { q: "Berapa biaya jasa pembuatan website profesional?", a: "Harga jasa freelancer / web developer sangat bervariasi. Kami menawarkan paket transparan mulai dari Rp1.600.000 untuk kelas UMKM hingga Rp2.900.000 untuk Corporate VIP dengan fitur katalog dan optimasi SGE tingkat lanjut." },
                { q: "Apa bedanya website biasa dengan website hasil optimasi AIO/SEO?", a: "Website biasa hanya menampilkan informasi statis. Website hasil optimasi kami dirancang secara 'Semantic', memakai arsitektur Data Terstruktur, sehingga kecerdasan buatan Google (AI Overview) memahami secara instan bahwa Anda adalah layanan terbaik di wilayah sasaran." },
                { q: "Apakah layanan pembuatan web ini mencakup toko online (E-commerce)?", a: "Tentu. Pada Paket Premium, kami mencakup pembuatan katalog produk atau sistem toko online yang memudahkan pembeli melakukan checkout dan mendongkrak niat pembelian (buying intent)." },
                { q: "Pentingkah menyewa Jasa Bikin Web jika bisa buat sendiri?", a: "Membuat web sendiri mungkin murah, namun tanpa pemahaman kuat di bidang UX Konversi dan Teknikal SEO, web tersebut akan sulit ditemukan di halaman pertama Google. Jasa ahli kami memastikan investasi Anda kembali melalui traffic murni." },
              ].map((faq, i) => (
                <div key={i} className="card-hard p-6">
                  <h3 className="text-lg font-bold mb-2 text-foreground flex items-center gap-2">
                    <span className="text-accent">Q:</span> {faq.q}
                  </h3>
                  <p className="text-text-secondary pl-6 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERNAL LINKING DIRECTORY (ENTERPRISE SEO CRAWLER) */}
        {/* Helps SEO by linking crawler to the infinite navigational state tree */}
        <section className="bg-background pt-12 pb-24 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-6 flex items-center justify-center gap-2">
              <MapPin className="text-accent" size={32} />
              <h2 className="text-3xl font-extrabold text-foreground">Area Layanan Terluas</h2>
            </div>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed max-w-2xl mx-auto">
              Dari pusat kota hingga pelosok desa, layanan {serviceName.toLowerCase()} kami mencakup komprehensif seluruh penjuru Indonesia. Mari domimasi pencarian lokal di area spesifik Anda!
            </p>
            <Link
              href={`/${serviceSlug}/area`}
              className="btn-outline-brutal text-lg py-4 px-8 inline-flex bg-white"
            >
              Lihat Direktori 38 Provinsi & 83.000+ Desa <ArrowUpRight size={20} />
            </Link>
          </div>
        </section>

        {/* FOOTER KHUSUS LANDING PAGE */}
        <footer className="w-full py-8 text-center bg-border-dark text-white text-sm">
          <p className="mb-2 opacity-80">
            &copy; {new Date().getFullYear()} Rafiq Web Developer. All rights reserved.
          </p>
          <p className="opacity-60 text-xs">{serviceName} Terbaik{displayLocation}</p>
        </footer>

      </main>
    </>
  );
}

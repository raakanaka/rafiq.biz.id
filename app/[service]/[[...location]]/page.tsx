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

  const title = `${serviceName}${locationSuffix} Profesional | Mulai 1.6 Jt`;
  const description = `Butuh ${serviceName.toLowerCase()}${locationSuffix}? Kami spesialis buat web konversi tinggi, SEO friendly, dan siap AI Overview. Harga mulai Rp 1.6 Juta.`;

  return {
    title,
    description,
    keywords: [
      serviceName,
      `${serviceName.toLowerCase()}${locationSuffix}`,
      "Buat Website Murah",
      "Developer Website",
      "SEO Friendly",
      "Website Bisnis",
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
              <span>🚀</span> Solusi Jitu untuk Bisnis Anda
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 text-foreground leading-tight" style={{ letterSpacing: "-0.02em" }}>
              {serviceName} Profesional <span className="text-accent-pop">{displayLocation}</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
              Tingkatkan konversi penjualan Anda dengan website yang cepat, ramah SEO, dan dioptimasi secara struktural untuk dapat dirayapi Google AI Overview & GEO secara sempurna.
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
                        Keunggulan Kami
                    </h2>
                    <p className="text-text-secondary text-lg">Mengapa percayakan {serviceName.toLowerCase()} pada kami?</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Desain High Conversion", desc: "Website dioptimasi khusus untuk mengubah setiap pengunjung menjadi prospek yang menghubungi Anda.", emoji: "🎯" },
                        { title: "SEO & AI Overview Ready", desc: "Didukung standar schema terbaru sehingga Google gampang merayapi dan mencuplik konten website Anda.", emoji: "🤖" },
                        { title: "Respon Kilat & Ringan", desc: "Dibangun menggunakan stack teknologi modern. Akses sangat cepat yang disukai pengunjung dan mesin pencari.", emoji: "⚡" },
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
                    <div className="card-hard flex flex-col p-8 transform md:-translate-y-4" style={{ background: "var(--accent-light)", borderColor: "var(--accent-dark)"}}>
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
                        { q: "Berapa lama proses pembuatan website?", a: "Proses pembuatan rata-rata memakan waktu 3-14 hari kerja, tergantung pada kompleksitas fitur dan kesiapan materi yang digunakan dalam website tersebut." },
                        { q: "Apakah website sudah termasuk optimasi SEO?", a: "Ya, semua paket pembuatan website kami sudah disetting SEO On-page dasar dan diregistrasikan ke alat perayapan sehingga website Anda optimal di mata algoritma mesin pencari seperti Google." },
                        { q: "Apakah saya harus bayar perpanjangan tahunan?", a: "Hal ini wajib, karena setiap website yang mengudara di internet membutuhkan sewa nama domain (alamat web) dan layanan server (hosting) yang harus dibayarkan setiap tahun." },
                        { q: "Bisa dioptimasi untuk AI Overview?", a: "Kami menggunakan standar pengkodean modern yang semantik, dikombinasikan dengan JSON-LD (Schema Markup) sehingga robot kecerdasan buatan dan mesin perayap sangat mudah mengenali topik halaman Anda." },
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

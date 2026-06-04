import React, { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function LeadMagnet() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !url) return;

    const waNumber = "6282160731800";
    const baseMessage = `Halo Rafiq, saya ingin mengajukan Audit Website & SEO Gratis.

Nama: ${name}
Website: ${url}
Kebutuhan: ${note || "Audit umum (kecepatan & performa SEO)"}`;

    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(baseMessage)}`;
    window.open(waLink, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="section bg-white" id="free-audit" style={{ borderTop: "2px solid var(--border-dark)" }}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="card-hard p-8 md:p-12" style={{ background: "var(--accent-light)", borderColor: "var(--accent-dark)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            
            {/* Left side text */}
            <div>
              <span className="badge-brutal bg-white mb-4">
                <Sparkles size={14} className="text-accent" />
                Penawaran Terbatas
              </span>
              <h2 className="text-2xl md:text-3.5xl font-extrabold text-foreground mb-4 leading-tight" style={{ letterSpacing: "-0.02em" }}>
                Dapatkan <span className="text-accent-pop" style={{ color: "var(--accent-dark)" }}>Audit Website</span> Gratis!
              </h2>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6">
                Ingin tahu mengapa website Anda lambat atau sepi pengunjung? Kirim URL website Anda sekarang. Saya akan buatkan **video analisis singkat (3 menit) secara gratis** mengenai performa kecepatan dan celah SEO situs Anda.
              </p>
              <ul className="space-y-2 text-xs md:text-sm font-semibold text-text-secondary">
                <li className="flex items-center gap-2">
                  <span>✅</span> 100% Gratis & Tanpa Komitmen
                </li>
                <li className="flex items-center gap-2">
                  <span>✅</span> Rekomendasi Langkah Perbaikan Taktis
                </li>
                <li className="flex items-center gap-2">
                  <span>✅</span> Dikirim Langsung ke WhatsApp Anda
                </li>
              </ul>
            </div>

            {/* Right side form */}
            <form onSubmit={handleSubmit} className="card-hard p-6 bg-white flex flex-col gap-4">
              <div>
                <label className="block text-xs font-extrabold mb-1 uppercase text-text-secondary">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  placeholder="Nama Anda"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-sm border-2 border-border-dark rounded-md focus:outline-none focus:ring-1 focus:ring-accent"
                  style={{ borderRadius: "var(--radius-sm)" }}
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold mb-1 uppercase text-text-secondary">URL Website</label>
                <input
                  type="url"
                  required
                  placeholder="https://websiteanda.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full px-3 py-2 text-sm border-2 border-border-dark rounded-md focus:outline-none focus:ring-1 focus:ring-accent"
                  style={{ borderRadius: "var(--radius-sm)" }}
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold mb-1 uppercase text-text-secondary">Catatan Khusus (Opsional)</label>
                <textarea
                  placeholder="Misal: Web lemot saat dibuka di HP"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full px-3 py-2 text-sm border-2 border-border-dark rounded-md focus:outline-none focus:ring-1 focus:ring-accent resize-none h-16"
                  style={{ borderRadius: "var(--radius-sm)" }}
                />
              </div>

              <button
                type="submit"
                className="btn-kirim w-full mt-2"
                style={{ padding: "0.6rem" }}
              >
                Kirim Permintaan Audit <ArrowRight size={16} />
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}

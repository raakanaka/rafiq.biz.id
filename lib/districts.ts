// ================================================================
// KECAMATAN / AREA PER KOTA PRIORITAS
//
// Data faktual, diverifikasi dari Wikipedia (daftar kecamatan resmi
// per Kemendagri). Sebelumnya halaman kota memakai pola karangan
// `${Kota} Pusat, ${Kota} Utara, ...` yang untuk banyak kota salah
// secara faktual — konten palsu di halaman yang menargetkan
// pencarian lokal.
//
// Aturan: kota hanya boleh masuk PRIORITY_CITIES kalau kecamatannya
// terdaftar di sini. Tanpa data asli, halaman kotanya tidak layak ada.
// ================================================================

export const CITY_DISTRICTS: Record<string, string[]> = {
  jakarta: [
    "Gambir",
    "Menteng",
    "Kebayoran Baru",
    "Tanah Abang",
    "Setiabudi",
    "Kelapa Gading",
    "Cilandak",
    "Kembangan",
  ],
  medan: [
    "Medan Baru",
    "Medan Selayang",
    "Medan Sunggal",
    "Medan Petisah",
    "Medan Helvetia",
    "Medan Kota",
    "Medan Johor",
    "Medan Timur",
  ],
  bandung: [
    "Coblong",
    "Sukajadi",
    "Bandung Wetan",
    "Cidadap",
    "Lengkong",
    "Buahbatu",
    "Andir",
    "Gedebage",
  ],
  denpasar: [
    "Denpasar Barat",
    "Denpasar Timur",
    "Denpasar Selatan",
    "Denpasar Utara",
  ],
  badung: [
    "Kuta",
    "Kuta Selatan",
    "Kuta Utara",
    "Mengwi",
    "Abiansemal",
    "Petang",
  ],
  batam: [
    "Batam Kota",
    "Batu Ampar",
    "Bengkong",
    "Sekupang",
    "Nongsa",
    "Lubuk Baja",
    "Batu Aji",
    "Sagulung",
  ],
  makassar: [
    "Ujung Pandang",
    "Mariso",
    "Panakkukang",
    "Rappocini",
    "Tamalate",
    "Biringkanaya",
    "Manggala",
    "Tamalanrea",
  ],
  balikpapan: [
    "Balikpapan Kota",
    "Balikpapan Selatan",
    "Balikpapan Tengah",
    "Balikpapan Utara",
    "Balikpapan Timur",
    "Balikpapan Barat",
  ],
  palembang: [
    "Ilir Barat I",
    "Ilir Timur I",
    "Bukit Kecil",
    "Kemuning",
    "Sukarami",
    "Alang-alang Lebar",
    "Kalidoni",
    "Plaju",
  ],
};

/**
 * Kalimat jangkauan layanan untuk sebuah kota.
 * Mengembalikan null kalau kotanya tidak punya data kecamatan asli —
 * pemanggil harus menyembunyikan bagian ini, bukan mengarang isinya.
 */
export function districtSentence(citySlug: string): string | null {
  const districts = CITY_DISTRICTS[citySlug];
  if (!districts || districts.length === 0) return null;
  return `${districts.join(", ")}, dan sekitarnya.`;
}

// ================================================================
// PROFIL EKONOMI KOTA PRIORITAS
//
// Fakta lokal terverifikasi untuk halaman landing per kota. Sebelumnya
// setiap halaman kota hanya berbeda nama kota dan daftar kecamatan —
// 98% teksnya identik, yang persis definisi doorway page.
//
// Aturan sama seperti districts.ts: hanya fakta yang punya sumber.
// Kalau sebuah klaim tidak bisa ditelusuri, klaim itu tidak masuk.
// Setiap entri mencantumkan sumbernya supaya bisa diperiksa ulang.
// ================================================================

export interface CityProfile {
  /** Kalimat ekonomi kota. Dipakai di paragraf pembuka bagian lokal. */
  economy: string;
  /** Kawasan bisnis/perdagangan nyata di kota tersebut. */
  districts: string[];
  /** Satu fakta khas yang relevan untuk UMKM setempat. */
  note: string;
  /** Sumber untuk klaim di atas. */
  sources: string[];
}

export const CITY_PROFILES: Record<string, CityProfile> = {
  jakarta: {
    economy:
      "pusat bisnis dan keuangan nasional, dengan perdagangan grosir skala besar dan logistik pelabuhan lewat Tanjung Priok",
    districts: [
      "Segitiga Emas Sudirman–Thamrin–Kuningan",
      "Pasar Tanah Abang",
      "kawasan grosir Mangga Dua",
    ],
    note: "Pasar Tanah Abang dikenal sebagai pusat grosir tekstil terbesar di Asia Tenggara, tumpuan ribuan pedagang dan UMKM fesyen yang memasok ke seluruh Indonesia.",
    sources: [
      "https://id.wikipedia.org/wiki/Daerah_Khusus_Ibukota_Jakarta",
      "https://asiatoday.id/read/hari-hari-terakhir-pasar-tanah-abang-pusat-dagang-tekstil-terbesar-di-asia-tenggara",
    ],
  },

  medan: {
    economy:
      "kota perdagangan dan industri terbesar di Sumatra, pintu gerbang Indonesia bagian barat lewat Pelabuhan Belawan dan Bandara Kualanamu",
    districts: ["Kota Lama Kesawan", "Pasar Petisah", "Pusat Pasar Medan"],
    note: "Kesawan adalah distrik bisnis bersejarah Medan; setelah revitalisasi kawasan Kota Lama, Pemkot Medan mencatat omzet pelaku usaha di sana meningkat.",
    sources: [
      "https://id.wikipedia.org/wiki/Kota_Medan",
      "https://portal.medan.go.id/berita/pasca-revitalisasi-kawasan-kota-lama-kesawan-omzet-pelaku-usaha-meningkat__read4714.html",
    ],
  },

  bandung: {
    economy:
      "perdagangan ritel dan fesyen, industri kreatif, serta pariwisata kuliner, ditopang posisinya sebagai kota pendidikan tinggi",
    districts: [
      "Sentra Sepatu Cibaduyut",
      "Pasar Baru Trade Center",
      "kawasan belanja Cihampelas",
    ],
    note: "Sentra Sepatu Cibaduyut terbentuk sejak sekitar 1920 dan sampai kini berupa kampung produksi sepatu berbasis usaha rumahan turun-temurun.",
    sources: [
      "https://id.wikipedia.org/wiki/Kota_Bandung",
      "https://journals.itb.ac.id/index.php/sostek/article/view/22147/6585",
    ],
  },

  denpasar: {
    economy:
      "pusat pemerintahan dan perekonomian Bali, dengan pendapatan per kapita tertinggi di provinsinya berkat industri pariwisata dan perdagangan pasar tradisional",
    districts: ["Pasar Badung", "Pasar Kumbasari", "kawasan Sanur"],
    note: "Pasar Badung adalah pasar tradisional terbesar di Bali dan setelah revitalisasi diposisikan Pemkot Denpasar sebagai warisan budaya sekaligus destinasi wisata.",
    sources: [
      "https://id.wikipedia.org/wiki/Kota_Denpasar",
      "https://www.setda.denpasarkota.go.id/berita/pasar-badung-pasar-tradisonal-terbesar-di-bali",
    ],
  },

  badung: {
    economy:
      "kabupaten yang bertumpu pada pariwisata — wilayahnya mencakup Kuta, Legian, Seminyak, Jimbaran, Canggu, dan Nusa Dua",
    districts: [
      "kawasan ITDC Nusa Dua",
      "kawasan internasional Legian",
      "koridor bisnis Sunset Road, Kuta",
    ],
    note: "Badung adalah kabupaten, bukan kota, dengan ibu kota di Mangupura. Pasar UMKM di sini sangat berorientasi wisatawan asing, dan Pendapatan Asli Daerahnya tercatat Rp5,70 triliun (data 2020) — luar biasa besar untuk ukuran kabupaten.",
    sources: ["https://id.wikipedia.org/wiki/Kabupaten_Badung"],
  },

  batam: {
    economy:
      "Kawasan Perdagangan Bebas dan Pelabuhan Bebas dengan industri manufaktur berorientasi ekspor, ditopang kedekatannya dengan Singapura",
    districts: [
      "kawasan Nagoya",
      "Kawasan Industri Batamindo di Mukakuning",
      "Nagoya Hill",
    ],
    note: "Batam berstatus kawasan perdagangan bebas dengan pemerintahan ganda — Pemko Batam bersama Badan Pengusahaan Batam — dan Kawasan Industri Batamindo di Mukakuning adalah kawasan industri pertama di kota ini.",
    sources: [
      "https://id.wikipedia.org/wiki/Kota_Batam",
      "https://batamindoindustrial.com/batamindo/",
    ],
  },

  makassar: {
    economy:
      "kota terbesar di Indonesia Timur sekaligus pusat perdagangan dan distribusi kawasan timur",
    districts: [
      "Pasar Sentral Makassar",
      "kawasan pertokoan Jalan Somba Opu",
      "kawasan Panakkukang",
    ],
    note: "Jalan Somba Opu dibuka sejak 1970 dan menjadi ikon kota sebagai sentra toko emas serta oleh-oleh khas Makassar — kawasan UMKM ritel yang mapan lintas generasi.",
    sources: [
      "https://travel.kompas.com/read/2016/11/17/170300127/somba.opu.ikon.tua.yang.berkilau?page=all",
      "https://www.detik.com/sulsel/bisnis/d-7036867/pasar-sentral-makassar-profil-lokasi-dan-jam-operasional",
    ],
  },

  balikpapan: {
    economy:
      "pusat bisnis dan industri dengan perekonomian terbesar di Kalimantan, bertumpu pada minyak dan gas serta logistik pelabuhan dan penerbangan",
    districts: [
      "Pasar Klandasan",
      "kawasan Pelabuhan Semayang",
      "kawasan Bandara Sultan Aji Muhammad Sulaiman",
    ],
    note: "Balikpapan adalah salah satu gerbang menuju Ibu Kota Nusantara, dan Pemkot sedang merevitalisasi Pasar Klandasan sebagai pusat ekonomi baru bagi pedagang kota.",
    sources: [
      "https://id.wikipedia.org/wiki/Kota_Balikpapan",
      "https://beritakaltim.co/2025/10/22/revitalisasi-pasar-klandasan-dikebut-pemkot-balikpapan-optimistis-jadi-pusat-ekonomi-baru-akhir-tahun/",
    ],
  },

  palembang: {
    economy:
      "kota terbesar kedua di Sumatra dan pusat perdagangan Sumatera Selatan, dengan perdagangan sungai di tepian Musi yang secara historis merupakan jalur rempah",
    districts: [
      "kawasan Pasar 16 Ilir",
      "kawasan Jakabaring",
      "kawasan Jembatan Ampera",
    ],
    note: "Pasar 16 Ilir adalah pusat perdagangan tertua di Palembang sejak masa kolonial dan sampai kini menjadi sentra pedagang kecil serta grosir kota.",
    sources: [
      "https://id.wikipedia.org/wiki/Kota_Palembang",
      "https://palembang.tribunnews.com/metro/1308994/menelusuri-sejarah-pasar-16-ilir-palembang-pusat-perdagangan-tertua-sejak-masa-kolonial-belanda",
    ],
  },
};

/** Profil kota, atau null kalau kota itu tidak punya data terverifikasi. */
export function cityProfile(slug: string): CityProfile | null {
  return CITY_PROFILES[slug] ?? null;
}

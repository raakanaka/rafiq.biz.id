export const WEB_DEV_SERVICES = [
  "jasa-pembuatan-website",
  "bikin-website",
  "jasa-web",
  "pembuatan-web-murah",
  "jasa-bikin-web",
  "developer-website",
  "buat-website"
];

export const SEO_SERVICES = [
  "jasa-seo",
  "jasa-optimasi-website",
  "jasa-seo-lokal",
  "jasa-seo-murah",
  "jasa-seo-bergaransi",
  "pakar-seo",
  "konsultan-seo"
];

export const ALLOWED_SERVICES = [...WEB_DEV_SERVICES, ...SEO_SERVICES];

export const TARGET_CITIES = [
  "jakarta", "surabaya", "bandung", "medan", "bekasi",
  "tangerang", "depok", "semarang", "palembang", "makassar",
  "tangerang-selatan", "batam", "bogor", "pekanbaru", "bandar-lampung",
  "padang", "malang", "balikpapan", "samarinda", "tasikmalaya",
  "pontianak", "banjarmasin", "denpasar", "serang", "jambi",
  "surakarta", "manado", "cimahi", "kupang", "jayapura",
  "yogyakarta", "mataram", "cilegon", "tanjung-balai", "tebing-tinggi", "pematang-siantar", "binjai", "lhokseumawe",
];

// ================================================================
// 98 KOTA TARGET — untuk landing page niche × kota
// ================================================================
export const TARGET_CITIES_98: string[] = [
  "jakarta", "surabaya", "medan", "bandung", "semarang",
  "makassar", "palembang", "tangerang", "depok", "bekasi",
  "bogor", "pekanbaru", "batam", "bandar-lampung", "padang",
  "malang", "yogyakarta", "denpasar", "samarinda", "banjarmasin",
  "balikpapan", "pontianak", "manado", "palu", "kendari",
  "kupang", "ambon", "jayapura", "sorong", "mataram",
  "serang", "cilegon", "tasikmalaya", "cirebon", "sukabumi",
  "karawang", "purwakarta", "subang", "garut", "majalengka",
  "sumedang", "kuningan", "indramayu", "purwokerto", "cilacap",
  "tegal", "pekalongan", "kudus", "jepara", "solo",
  "magelang", "salatiga", "blora", "rembang", "mojokerto",
  "pasuruan", "probolinggo", "jember", "banyuwangi", "kediri",
  "blitar", "madiun", "tuban", "lamongan", "gresik",
  "sidoarjo", "bangkalan", "pamekasan", "sumenep", "binjai",
  "pematangsiantar", "tebing-tinggi", "langsa", "lhokseumawe", "banda-aceh",
  "sabang", "bukittinggi", "payakumbuh", "jambi", "bengkulu",
  "pangkalpinang", "tanjungpinang", "bontang", "tarakan", "palangkaraya",
  "banjarbaru", "gorontalo", "poso", "bitung", "tomohon",
  "parepare", "palopo", "baubau", "ende", "maumere",
  "ternate", "manokwari", "sorong",
];

// Display name mapping for cities that need special formatting
export const CITY_DISPLAY_NAMES: Record<string, string> = {
  "bandar-lampung": "Bandar Lampung",
  "banda-aceh": "Banda Aceh",
  "tebing-tinggi": "Tebing Tinggi",
  "tanjung-balai": "Tanjung Balai",
  "pematang-siantar": "Pematang Siantar",
};

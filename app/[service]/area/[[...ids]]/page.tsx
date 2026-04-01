import { notFound } from "next/navigation";
import Link from "next/link";
import { ALLOWED_SERVICES } from "@/lib/constants";
import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";

type Props = {
  params: Promise<{ service: string; ids?: string[] }>;
};

type Region = {
  id: string;
  name: string;
};

// --- DATA FETCHING ---
async function fetchRegions(level: 'provinces' | 'regencies' | 'districts' | 'villages', parentId?: string): Promise<Region[]> {
  try {
    let url = `https://emsifa.github.io/api-wilayah-indonesia/api/${level}.json`;
    if (parentId && level !== 'provinces') {
      url = `https://emsifa.github.io/api-wilayah-indonesia/api/${level}/${parentId}.json`;
    }
    const res = await fetch(url, { cache: 'force-cache' });
    if (!res.ok) return [];
    return await res.json();
  } catch (err) {
    return [];
  }
}

// --- UTILS ---
function formatString(str: string): string {
  return str.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}

function slugify(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// --- METADATA ---
export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  if (!ALLOWED_SERVICES.includes(resolvedParams.service)) return { title: "Not Found" };
  
  const serviceName = formatString(resolvedParams.service);
  const pathNames = resolvedParams.ids ? resolvedParams.ids.map(formatString).join(", ") : "Seluruh Indonesia";
  
  return {
    title: `Area Layanan ${serviceName} di ${pathNames} | Direktori Lokasi`,
    description: `Temukan layanan ${serviceName.toLowerCase()} profesional berekspansi hingga ke wilayah ${pathNames}.`,
  };
}

// --- COMPONENT ---
export default async function LocationDirectoryPage({ params }: Props) {
  const resolvedParams = await params;
  const { service, ids = [] } = resolvedParams;

  if (!ALLOWED_SERVICES.includes(service)) {
    notFound();
  }

  const serviceName = formatString(service);

  let currentLevelName = "Seluruh Indonesia";
  let items: Region[] = [];
  let nextLevelPath = `/${service}/area`;
  
  // Depth Analysis
  if (ids.length === 0) {
    // Show Provinces
    items = await fetchRegions('provinces');
  } else if (ids.length === 1) {
    const provinces = await fetchRegions('provinces');
    const province = provinces.find(p => slugify(p.name) === ids[0]);
    if (!province) notFound();
    currentLevelName = province.name;
    items = await fetchRegions('regencies', province.id);
    nextLevelPath = `/${service}/area/${ids[0]}`;
  } else if (ids.length === 2) {
    const provinces = await fetchRegions('provinces');
    const province = provinces.find(p => slugify(p.name) === ids[0]);
    if (!province) notFound();
    const regencies = await fetchRegions('regencies', province.id);
    const regency = regencies.find(r => slugify(r.name) === ids[1]);
    if (!regency) notFound();
    currentLevelName = regency.name;
    items = await fetchRegions('districts', regency.id);
    nextLevelPath = `/${service}/area/${ids[0]}/${ids[1]}`;
  } else if (ids.length === 3) {
    const provinces = await fetchRegions('provinces');
    const province = provinces.find(p => slugify(p.name) === ids[0]);
    if (!province) notFound();
    const regencies = await fetchRegions('regencies', province.id);
    const regency = regencies.find(r => slugify(r.name) === ids[1]);
    if (!regency) notFound();
    const districts = await fetchRegions('districts', regency.id);
    const district = districts.find(d => slugify(d.name) === ids[2]);
    if (!district) notFound();
    currentLevelName = district.name;
    items = await fetchRegions('villages', district.id);
    nextLevelPath = `/${service}/area/${ids[0]}/${ids[1]}/${ids[2]}`;
  } else if (ids.length === 4) {
    const provinces = await fetchRegions('provinces');
    const province = provinces.find(p => slugify(p.name) === ids[0]);
    if (!province) notFound();
    const regencies = await fetchRegions('regencies', province.id);
    const regency = regencies.find(r => slugify(r.name) === ids[1]);
    if (!regency) notFound();
    const districts = await fetchRegions('districts', regency.id);
    const district = districts.find(d => slugify(d.name) === ids[2]);
    if (!district) notFound();
    const villages = await fetchRegions('villages', district.id);
    const village = villages.find(v => slugify(v.name) === ids[3]);
    if (!village) notFound();
    
    // We are at village level, no deeper children. Provide just the village info.
    currentLevelName = village.name;
    items = [];
  } else {
    notFound();
  }

  // Back Link Logic
  let backLink = "";
  if (ids.length > 0) {
    const backSegments = [...ids];
    backSegments.pop();
    backLink = `/${service}/area${backSegments.length > 0 ? '/' + backSegments.join('/') : ''}`;
  }

  // Location Hierarchy string for CTA
  const fullLocationName = ids.map(formatString).join(", ");
  const ctaLink = `/${service}${ids.length > 0 ? '/' + ids.join('/') : ''}`;

  return (
    <main className="min-h-screen flex flex-col bg-background font-body">
      <header className="w-full p-6 border-b border-gray-200 bg-white shadow-sm flex items-center justify-between">
          <Link href={`/${service}`} className="text-xl font-bold font-heading text-foreground" style={{ textDecoration: 'none' }}>
              Rafiq<span className="text-accent-pop">.</span>
          </Link>
          <div className="text-sm font-semibold text-text-secondary">
              Direktori {serviceName}
          </div>
      </header>

      <section className="section py-16 flex-1">
        <div className="max-w-5xl mx-auto px-4">
          
          <div className="mb-12">
            {backLink && (
              <Link href={backLink} className="inline-flex items-center gap-2 text-accent-dark hover:underline mb-6 font-semibold">
                <ArrowLeft size={16} /> Kembali
              </Link>
            )}
            
            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              Cakupan Layanan di <span className="text-accent">{formatString(currentLevelName)}</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
              Jelajahi hierarki layanan kami atau pesan langsung {serviceName.toLowerCase()} khusus untuk wilayah ini agar mendapatkan peringkat lokal terbaik di mesin pencari.
            </p>
          </div>

          <div className="card-hard p-8 bg-white mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MapPin className="text-accent" /> Daftar Sub-Wilayah
            </h2>

            {items.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map((item) => (
                  <Link 
                    key={item.id} 
                    href={`${nextLevelPath}/${slugify(item.name)}`}
                    className="p-3 border border-gray-200 rounded-md hover:border-accent hover:bg-accent-light transition-colors font-medium text-foreground text-sm"
                  >
                    {formatString(item.name.toLowerCase())}
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-text-secondary italic">Tidak ada pembagian sub-wilayah lebih lanjut.</p>
            )}
          </div>

          <div className="text-center bg-accent-light border-2 border-accent-dark p-8 rounded-2xl shadow-[4px_4px_0px_#0f172a]">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">
              Siap mendominasi pasar digital di {fullLocationName || "Seluruh Indonesia"}?
            </h3>
            <p className="mb-8 text-text-secondary">Pesan paket web yang langsung disesuaikan dengan parameter SEO untuk area ini.</p>
            <Link href={ctaLink} className="btn-kirim text-lg py-4 px-8 inline-flex">
              Lihat Penawaran <ArrowUpRight size={20} />
            </Link>
          </div>

        </div>
      </section>

      <footer className="w-full py-6 text-center bg-border-dark text-white text-sm">
          <p className="opacity-80">
              &copy; {new Date().getFullYear()} Rafiq Web Developer.
          </p>
      </footer>
    </main>
  );
}

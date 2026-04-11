globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_BDQLFbuj.mjs";
import { k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from "./worker-entry_C3X8gKDK.mjs";
import { c as createLucideIcon, $ as $$Layout } from "./createLucideIcon_Bp2E0FbM.mjs";
import { A as ALLOWED_SERVICES } from "./constants_CXIdmYgm.mjs";
import { M as MapPin } from "./map-pin_SU6FhInq.mjs";
import { A as ArrowUpRight } from "./arrow-up-right_BKp41FND.mjs";
const __iconNode = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode);
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const { service, ids } = Astro2.params;
  const resolvedService = service;
  const idsArray = ids ? ids.split("/") : [];
  if (!ALLOWED_SERVICES.includes(resolvedService)) {
    return Astro2.redirect("/404");
  }
  async function fetchRegions(level, parentId) {
    try {
      let url = `https://emsifa.github.io/api-wilayah-indonesia/api/${level}.json`;
      if (parentId && level !== "provinces") {
        url = `https://emsifa.github.io/api-wilayah-indonesia/api/${level}/${parentId}.json`;
      }
      const res = await fetch(url);
      if (!res.ok) return [];
      return await res.json();
    } catch (err) {
      return [];
    }
  }
  function formatString(str) {
    return str.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  }
  function slugify(str) {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }
  const serviceName = formatString(resolvedService);
  const pathNames = idsArray.length > 0 ? idsArray.map(formatString).join(", ") : "Seluruh Indonesia";
  let currentLevelName = "Seluruh Indonesia";
  let items = [];
  let nextLevelPath = `/${resolvedService}/area`;
  if (idsArray.length === 0) {
    items = await fetchRegions("provinces");
  } else if (idsArray.length === 1) {
    const provinces = await fetchRegions("provinces");
    const province = provinces.find((p) => slugify(p.name) === idsArray[0]);
    if (!province) return Astro2.redirect("/404");
    currentLevelName = province.name;
    items = await fetchRegions("regencies", province.id);
    nextLevelPath = `/${resolvedService}/area/${idsArray[0]}`;
  } else if (idsArray.length === 2) {
    const provinces = await fetchRegions("provinces");
    const province = provinces.find((p) => slugify(p.name) === idsArray[0]);
    if (!province) return Astro2.redirect("/404");
    const regencies = await fetchRegions("regencies", province.id);
    const regency = regencies.find((r) => slugify(r.name) === idsArray[1]);
    if (!regency) return Astro2.redirect("/404");
    currentLevelName = regency.name;
    items = await fetchRegions("districts", regency.id);
    nextLevelPath = `/${resolvedService}/area/${idsArray[0]}/${idsArray[1]}`;
  } else if (idsArray.length === 3) {
    const provinces = await fetchRegions("provinces");
    const province = provinces.find((p) => slugify(p.name) === idsArray[0]);
    if (!province) return Astro2.redirect("/404");
    const regencies = await fetchRegions("regencies", province.id);
    const regency = regencies.find((r) => slugify(r.name) === idsArray[1]);
    if (!regency) return Astro2.redirect("/404");
    const districts = await fetchRegions("districts", regency.id);
    const district = districts.find((d) => slugify(d.name) === idsArray[2]);
    if (!district) return Astro2.redirect("/404");
    currentLevelName = district.name;
    items = await fetchRegions("villages", district.id);
    nextLevelPath = `/${resolvedService}/area/${idsArray[0]}/${idsArray[1]}/${idsArray[2]}`;
  } else if (idsArray.length === 4) {
    const provinces = await fetchRegions("provinces");
    const province = provinces.find((p) => slugify(p.name) === idsArray[0]);
    if (!province) return Astro2.redirect("/404");
    const regencies = await fetchRegions("regencies", province.id);
    const regency = regencies.find((r) => slugify(r.name) === idsArray[1]);
    if (!regency) return Astro2.redirect("/404");
    const districts = await fetchRegions("districts", regency.id);
    const district = districts.find((d) => slugify(d.name) === idsArray[2]);
    if (!district) return Astro2.redirect("/404");
    const villages = await fetchRegions("villages", district.id);
    const village = villages.find((v) => slugify(v.name) === idsArray[3]);
    if (!village) return Astro2.redirect("/404");
    currentLevelName = village.name;
    items = [];
  } else {
    return Astro2.redirect("/404");
  }
  let backLink = "";
  if (idsArray.length > 0) {
    const backSegments = [...idsArray];
    backSegments.pop();
    backLink = `/${resolvedService}/area${backSegments.length > 0 ? "/" + backSegments.join("/") : ""}`;
  }
  const fullLocationName = idsArray.map(formatString).join(", ");
  const ctaLink = `/${resolvedService}${idsArray.length > 0 ? "/" + idsArray.join("/") : ""}`;
  const titleContent = `Area Layanan ${serviceName} di ${pathNames} | Direktori Lokasi`;
  const descriptionContent = `Temukan layanan ${serviceName.toLowerCase()} profesional berekspansi hingga ke wilayah ${pathNames}.`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": titleContent, "description": descriptionContent }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen flex flex-col bg-background font-body"> <header class="w-full p-6 border-b border-gray-200 bg-white shadow-sm flex items-center justify-between"> <a${addAttribute(`/${resolvedService}`, "href")} class="text-xl font-bold font-heading text-foreground" style="text-decoration: none;">
Rafiq<span class="text-accent-pop">.</span> </a> <div class="text-sm font-semibold text-text-secondary">
Direktori ${serviceName} </div> </header> <section class="section py-16 flex-1"> <div class="max-w-5xl mx-auto px-4"> <div class="mb-12"> ${backLink && renderTemplate`<a${addAttribute(backLink, "href")} class="inline-flex items-center gap-2 text-accent-dark hover:underline mb-6 font-semibold"> ${renderComponent($$result2, "ArrowLeft", ArrowLeft, { "size": 16 })} Kembali
</a>`} <h1 class="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
Cakupan Layanan Web Developer di <span class="text-accent">${formatString(currentLevelName.toLowerCase())}</span> </h1> <p class="text-lg text-text-secondary max-w-2xl leading-relaxed">
Kami siap membantu bisnis Anda di wilayah ini mendominasi pencarian Google. Eksplorasi hierarki area spesifik Anda, atau klik di bawah untuk melihat penawaran pembuatan Website Company Profile dan Toko Online.
</p> </div> <div class="card-hard p-8 bg-white mb-12"> <h2 class="text-2xl font-bold mb-6 flex items-center gap-2"> ${renderComponent($$result2, "MapPin", MapPin, { "className": "text-accent" })} Daftar Sub-Wilayah
</h2> ${items.length > 0 ? renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> ${items.map((item) => renderTemplate`<a${addAttribute(`${nextLevelPath}/${slugify(item.name)}`, "href")} class="p-3 border border-gray-200 rounded-md hover:border-accent hover:bg-accent-light transition-colors font-medium text-foreground text-sm flex items-center"> ${formatString(item.name.toLowerCase())} </a>`)} </div>` : renderTemplate`<p class="text-text-secondary italic">Tidak ada pembagian sub-wilayah lebih lanjut.</p>`} </div> <div class="text-center bg-accent-light border-2 border-accent-dark p-8 rounded-2xl shadow-[4px_4px_0px_#0f172a]"> <h3 class="text-2xl font-bold text-foreground mb-4 font-heading">
Siap mendominasi pasar digital di ${fullLocationName || "Seluruh Indonesia"}?
</h3> <p class="mb-8 text-text-secondary">Pesan paket web yang langsung disesuaikan dengan parameter SEO untuk area ini.</p> <a${addAttribute(ctaLink, "href")} class="btn-kirim text-lg py-4 px-8 inline-flex hover:-translate-y-1 transition-transform">
Lihat Penawaran ${renderComponent($$result2, "ArrowUpRight", ArrowUpRight, { "className": "ml-2 inline-block", "size": 20 })} </a> </div> </div> </section> <footer class="w-full py-6 text-center bg-border-dark text-white text-sm"> <p class="opacity-80">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Rafiq Web Developer.
</p> </footer> </main> ` })}`;
}, "/home/malaka/Documents/rafiq/src/pages/[service]/area/[...ids].astro", void 0);
const $$file = "/home/malaka/Documents/rafiq/src/pages/[service]/area/[...ids].astro";
const $$url = "/[service]/area/[...ids]";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};

// SEO regression check. Run against a running server:
//   npm run dev -- --port 4331   then   node scripts/seo-check.mjs
//   or against prod:              BASE=https://rafiq.biz.id node scripts/seo-check.mjs
// Exits non-zero on the first failure, so it works as a pre-deploy gate.

const BASE = process.env.BASE || 'http://127.0.0.1:4331';
let failed = 0;

async function check(name, fn) {
  try {
    await fn();
    console.log(`  ok   ${name}`);
  } catch (err) {
    failed++;
    console.log(`  FAIL ${name}\n       ${err.message}`);
  }
}

const get = (path) => fetch(`${BASE}${path}`, { redirect: 'manual' });
const text = async (path) => (await fetch(`${BASE}${path}`)).text();
const meta = (html, re) => (html.match(re) || [])[1];

function eq(actual, expected, label) {
  if (actual !== expected) throw new Error(`${label}: got ${actual}, want ${expected}`);
}

console.log(`SEO checks against ${BASE}\n`);

// Real 404s, not soft-404 redirects.
for (const path of [
  '/zzz-nope',
  '/jasa-pembuatan-website/kota-yang-tidak-ada',
  '/jasa-pembuatan-website/area/zzz',
  '/jasa-website-bengkel-las-kotapalsu',
]) {
  await check(`404 for ${path}`, async () => {
    eq((await get(path)).status, 404, 'status');
  });
}

// Real pages still resolve.
for (const path of [
  '/',
  '/about',
  '/projects',
  '/blog',
  '/contact',
  '/jasa-pembuatan-website',
  '/jasa-pembuatan-website/medan',
  '/jasa-seo/makassar',
  '/jasa-website-bengkel-las-medan',
  '/sitemap.xml',
  '/robots.txt',
  '/feed.xml',
  '/favicon.ico',
  '/og-image.jpg',
]) {
  await check(`200 for ${path}`, async () => {
    eq((await get(path)).status, 200, 'status');
  });
}

// Canonicals are absolute, https, trailing-slash, and query-free.
await check('canonical is normalised', async () => {
  const html = await text('/about/?utm_source=test');
  eq(meta(html, /canonical" href="([^"]+)"/), 'https://rafiq.biz.id/about/', 'canonical');
});

// Duplicate service slugs consolidate onto one primary and stay out of the index.
await check('variant slug canonicalises to primary + noindex', async () => {
  const html = await text('/bikin-website/medan');
  eq(meta(html, /canonical" href="([^"]+)"/), 'https://rafiq.biz.id/jasa-pembuatan-website/medan/', 'canonical');
  eq(meta(html, /name="robots" content="([^"]+)"/), 'noindex, follow', 'robots');
});

await check('primary slug stays indexable', async () => {
  const html = await text('/jasa-pembuatan-website/medan');
  eq(meta(html, /name="robots" content="([^"]+)"/), 'index, follow', 'robots');
});

// A sitemap full of redirects wastes crawl budget.
await check('sitemap has no redirecting or noindexed URLs', async () => {
  const xml = await text('/sitemap.xml');
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (locs.length === 0) throw new Error('sitemap is empty');
  const noSlash = locs.filter((u) => !u.endsWith('/'));
  if (noSlash.length) throw new Error(`${noSlash.length} URLs lack a trailing slash, e.g. ${noSlash[0]}`);
  const variants = /\/(bikin-website|jasa-web|buat-website|jasa-bikin-web|developer-website|pembuatan-web-murah|jasa-optimasi-website|jasa-seo-lokal|jasa-seo-murah|jasa-seo-bergaransi|pakar-seo|konsultan-seo)\//;
  const bad = locs.filter((u) => variants.test(u));
  if (bad.length) throw new Error(`${bad.length} noindexed variant URLs in sitemap, e.g. ${bad[0]}`);
  console.log(`       (${locs.length} URLs)`);
});

await check('no meta keywords (dead signal)', async () => {
  const html = await text('/');
  if (/name="keywords"/.test(html)) throw new Error('meta keywords still present');
});

await check('schema has a real phone number', async () => {
  const html = await text('/');
  if (html.includes('+628****1800')) throw new Error('masked placeholder phone in JSON-LD');
});

// Doorway-page pruning: only priority cities keep their own page.
const PRIORITY_CITIES = ['jakarta', 'medan', 'bandung', 'denpasar', 'badung', 'batam', 'makassar', 'balikpapan', 'palembang'];
const PRUNED_CITIES = ['kupang', 'binjai', 'surabaya', 'jayapura', 'tegal', 'sorong'];

for (const city of PRIORITY_CITIES) {
  await check(`priority city page /jasa-website-bengkel-las-${city}`, async () => {
    eq((await get(`/jasa-website-bengkel-las-${city}`)).status, 200, 'status');
  });
}

for (const city of PRUNED_CITIES) {
  await check(`pruned city 301s to niche parent (${city})`, async () => {
    const res = await get(`/jasa-website-bengkel-las-${city}`);
    eq(res.status, 301, 'status');
    eq(res.headers.get('location'), '/jasa-website-bengkel-las/', 'location');
  });
  await check(`pruned service city 301s (${city})`, async () => {
    const res = await get(`/jasa-pembuatan-website/${city}`);
    eq(res.status, 301, 'status');
    eq(res.headers.get('location'), '/jasa-pembuatan-website/', 'location');
  });
}

await check('national niche page is the 301 target and self-canonical', async () => {
  eq((await get('/jasa-website-bengkel-las')).status, 200, 'status');
  const html = await text('/jasa-website-bengkel-las');
  eq(meta(html, /canonical" href="([^"]+)"/), 'https://rafiq.biz.id/jasa-website-bengkel-las/', 'canonical');
});

// District names must be real, never fabricated from the city name.
await check('district lists are factual, not generated', async () => {
  const expected = {
    denpasar: 'Denpasar Barat',
    badung: 'Kuta',
    batam: 'Batam Kota',
    palembang: 'Ilir Barat I',
    makassar: 'Ujung Pandang',
    balikpapan: 'Balikpapan Kota',
  };
  for (const [city, sample] of Object.entries(expected)) {
    const html = await text(`/jasa-website-bengkel-las-${city}`);
    if (!html.includes(sample)) throw new Error(`${city}: missing real district "${sample}"`);
    const display = city.charAt(0).toUpperCase() + city.slice(1);
    if (html.includes(`${display} Pusat, ${display} Utara`)) {
      throw new Error(`${city}: still emitting fabricated district list`);
    }
  }
});

// Every priority city must carry its own verified local content, and no two
// cities may share a meta description — identical snippets across hundreds of
// pages is exactly the doorway pattern this site already had to unwind.
await check('city pages carry unique, sourced local content', async () => {
  const marker = {
    medan: 'Kesawan',
    makassar: 'Somba Opu',
    batam: 'Batamindo',
    palembang: 'Pasar 16 Ilir',
    balikpapan: 'Klandasan',
    bandung: 'Cibaduyut',
    denpasar: 'Pasar Badung',
    badung: 'Nusa Dua',
    jakarta: 'Tanah Abang',
  };
  const seen = new Map();
  for (const [city, sample] of Object.entries(marker)) {
    const html = await text(`/jasa-website-bengkel-las-${city}`);
    if (!html.includes(sample)) throw new Error(`${city}: missing local fact "${sample}"`);

    const desc = meta(html, /name="description" content="([^"]+)"/);
    if (!desc) throw new Error(`${city}: no meta description`);
    if (seen.has(desc)) throw new Error(`${city}: meta description identical to ${seen.get(desc)}`);
    seen.set(desc, city);

    // Claims about a city must be checkable.
    if (!/Sumber data kota/.test(html)) throw new Error(`${city}: local claims have no sources`);
  }
});

console.log(failed ? `\n${failed} check(s) failed` : '\nall checks passed');
process.exit(failed ? 1 : 0);

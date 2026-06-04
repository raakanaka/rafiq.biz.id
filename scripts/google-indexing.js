const fs = require('fs');
const path = require('path');

// Target paths
const KEY_FILE = path.join(__dirname, '../service-account.json');
const LOG_FILE = path.join(__dirname, '../submitted-urls.json');
const SITEMAP_URL = 'https://rafiq.biz.id/sitemap.xml';

// Daily Google Indexing API limit
const DAILY_LIMIT = 200;

async function run() {
  console.log('🚀 Memulai otomatisasi Google Indexing API...');

  // 1. Check if service account key exists
  if (!fs.existsSync(KEY_FILE)) {
    console.log('⚠️ File "service-account.json" tidak ditemukan di root proyek.');
    console.log('Langkah ini dilewati. Silakan ikuti instruksi untuk membuat file credentials.');
    return;
  }

  // 2. Load google-auth-library dynamically
  let GoogleAuth;
  try {
    const authLib = require('google-auth-library');
    GoogleAuth = authLib.GoogleAuth;
  } catch (err) {
    console.log('❌ Modul "google-auth-library" belum diinstal.');
    console.log('Silakan jalankan: npm install google-auth-library');
    return;
  }

  // 3. Authenticate with Google
  const auth = new GoogleAuth({
    keyFile: KEY_FILE,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });
  const client = await auth.getClient();

  // 4. Load previously submitted URLs
  let submittedUrls = [];
  if (fs.existsSync(LOG_FILE)) {
    try {
      submittedUrls = JSON.parse(fs.readFileSync(LOG_FILE, 'utf8'));
    } catch (e) {
      submittedUrls = [];
    }
  }

  // 5. Fetch Sitemap
  console.log(`📡 Mengunduh sitemap dari ${SITEMAP_URL}...`);
  let sitemapXml;
  try {
    const response = await fetch(SITEMAP_URL);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    sitemapXml = await response.text();
  } catch (error) {
    console.error('❌ Gagal mengunduh sitemap:', error.message);
    return;
  }

  // 6. Parse URLs from sitemap
  const urlRegex = /<loc>(https?:\/\/[^\s<]+)<\/loc>/g;
  let match;
  const sitemapUrls = [];
  while ((match = urlRegex.exec(sitemapXml)) !== null) {
    sitemapUrls.push(match[1]);
  }

  console.log(`✓ Menemukan ${sitemapUrls.length} URL di sitemap.`);

  // 7. Filter for new URLs
  const newUrls = sitemapUrls.filter(url => !submittedUrls.includes(url));
  console.log(`✓ Menemukan ${newUrls.length} URL baru yang belum terindeks.`);

  if (newUrls.length === 0) {
    console.log('🎉 Semua URL sudah pernah disubmit. Selesai!');
    return;
  }

  // 8. Submit to Indexing API (Up to Daily Limit)
  const urlsToSubmit = newUrls.slice(0, DAILY_LIMIT);
  console.log(`📤 Mengirim ${urlsToSubmit.length} URL ke Google Indexing API...`);

  for (const url of urlsToSubmit) {
    try {
      const apiResponse = await client.request({
        url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
        method: 'POST',
        data: {
          url: url,
          type: 'URL_UPDATED',
        },
      });

      if (apiResponse.status === 200) {
        console.log(`✅ Sukses disubmit: ${url}`);
        submittedUrls.push(url);
      }
    } catch (apiError) {
      console.error(`❌ Gagal mensubmit ${url}:`, apiError.message);
      // Stop loop if quota is reached or invalid credentials
      if (apiError.message.includes('429') || apiError.message.includes('quota')) {
        console.log('⚠️ Batas kuota harian tercapai. Menghentikan proses.');
        break;
      }
    }
  }

  // 9. Save log file
  fs.writeFileSync(LOG_FILE, JSON.stringify(submittedUrls, null, 2), 'utf8');
  console.log('✓ Status pengiriman tersimpan di "submitted-urls.json". Selesai!');
}

run().catch(err => {
  console.error('❌ Terjadi kesalahan fatal:', err);
});

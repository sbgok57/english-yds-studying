// ============================================================
// DUMAN TESTİ — kritik noktalar yaşıyor mu? (30 saniye)
// Kullanım:
//   node scripts/smoke-test.mjs https://senin-siten.vercel.app
//   node --env-file=.env.local scripts/smoke-test.mjs   (default: http://localhost:3000)
// Deploy sonrası, cron'da ve hata avında İLK koşulacak komut.
// ============================================================
const BASE = process.argv[2] ?? 'http://localhost:3000';
const CRON_SECRET = process.env.CRON_SECRET;

const results = [];
async function check(name, fn) {
  const t0 = Date.now();
  try {
    const detail = await fn();
    results.push({ name, ok: true, ms: Date.now() - t0, detail });
    console.log(`✅ ${name} (${Date.now() - t0}ms) ${detail ?? ''}`);
  } catch (e) {
    results.push({ name, ok: false, ms: Date.now() - t0, detail: e.message });
    console.log(`❌ ${name} → ${e.message}`);
  }
}

const get = (path, opts = {}) =>
  fetch(`${BASE}${path}`, { redirect: 'manual', ...opts }).catch((e) => {
    throw new Error(`bağlantı yok: ${e.message}`);
  });

console.log(`🔥 Duman testi → ${BASE}\n`);

await check('Ana sayfa 200/307 dönüyor', async () => {
  const r = await get('/');
  if (![200, 307, 308].includes(r.status)) throw new Error(`HTTP ${r.status}`);
});

await check('Health endpoint yaşıyor', async () => {
  const r = await get('/api/health');
  const j = await r.json().catch(() => null);
  if (![200, 503].includes(r.status)) throw new Error(`HTTP ${r.status}`);
  return `ok=${j?.ok}`;
});

await check('PWA manifest yayında', async () => {
  const r = await get('/manifest.json');
  if (r.status !== 200) throw new Error(`HTTP ${r.status}`);
});

await check('Service Worker yayında', async () => {
  const r = await get('/sw.js');
  if (r.status !== 200) throw new Error(`HTTP ${r.status}`);
});

await check('Cron endpoint yetkisiz isteği REDDEDİYOR (401)', async () => {
  const r = await get('/api/push/send');
  if (r.status !== 401) throw new Error(`beklenen 401, gelen ${r.status}`);
});

if (CRON_SECRET) {
  await check('Cron endpoint doğru secret ile 200 dönüyor', async () => {
    const r = await get('/api/push/send', { headers: { Authorization: `Bearer ${CRON_SECRET}` } });
    if (r.status !== 200) throw new Error(`HTTP ${r.status}`);
    const j = await r.json().catch(() => null);
    return JSON.stringify(j);
  });
}

await check('Olmayan sayfa 404 yönetimi', async () => {
  const r = await get('/bu-sayfa-olmamali-xyz');
  if (r.status !== 404) throw new Error(`beklenen 404, gelen ${r.status}`);
});

const failed = results.filter((r) => !r.ok);
console.log(`\n${results.length - failed.length}/${results.length} kontrol geçti.`);
if (failed.length) {
  console.log('🚨 BAŞARISIZ kontroller:', failed.map((f) => f.name).join(' | '));
  process.exit(1);
}
console.log('🎉 Sistem ayakta.');

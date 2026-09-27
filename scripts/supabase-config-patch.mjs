// ============================================================
// Supabase Management API — Auth/SMTP konfigürasyon otomasyonu
// Şema-bağımsız çalışır: ÖNCE gerçek config'i indirir (dump),
// sen ilgili alanları doldurursun, SONRA patch ile uygularsın.
//
// Kullanım:
//   node scripts/supabase-config-patch.mjs dump
//   node scripts/supabase-config-patch.mjs patch supabase-auth-config.json
//
// Gerekli env (.env.local):
//   SUPABASE_ACCESS_TOKEN   (dashboard → Account → Access Tokens)
//   SUPABASE_PROJECT_REF    (proje URL'sindeki ref, ör. abcdefghijklmnop)
// ============================================================
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const API = 'https://api.supabase.com/v1';
const token = process.env.SUPABASE_ACCESS_TOKEN;
const ref = process.env.SUPABASE_PROJECT_REF;

if (!token || !ref) {
  console.error('SUPABASE_ACCESS_TOKEN ve SUPABASE_PROJECT_REF (.env.local) gerekli.');
  console.error('Örnek: node --env-file=.env.local scripts/supabase-config-patch.mjs dump');
  process.exit(1);
}

const mode = process.argv[2];
const target = process.argv[3];

async function req(method, urlPath, body) {
  const res = await fetch(`${API}${urlPath}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(body ? { 'Content-Type': 'application/json' } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  if (!res.ok) {
    console.error(`API hatası ${res.status}:`, text.slice(0, 500));
    process.exit(1);
  }
  return text ? JSON.parse(text) : null;
}

if (mode === 'dump') {
  const cfg = await req('GET', `/projects/${ref}/config/auth`);
  const outFile = target ?? 'supabase-auth-config.json';
  await writeFile(path.resolve(outFile), JSON.stringify(cfg, null, 2) + '\n');
  console.log(`✔ Auth config indirildi → ${outFile}`);
  console.log('');
  console.log('Şimdi bu dosyada SMTP alanlarını bul ve doldur, örneğin:');
  console.log('  "external": { "email": { "enabled": true } }');
  console.log('  SMTP host/port/user/pass/sender alanları (şemadaki adlarıyla)');
  console.log('Sonra: node scripts/supabase-config-patch.mjs patch', outFile);
  // İpucu: dosyada 'smtp', 'mailer', 'sender' geçen anahtarları listele
  const hits = Object.keys(cfg ?? {}).filter((k) => /smtp|mailer|sender|email/i.test(k));
  if (hits.length) console.log('\nSMTP ile ilgili görünen anahtarlar:', hits.join(', '));
} else if (mode === 'patch') {
  if (!target) {
    console.error('Kullanım: supabase-config-patch.mjs patch <dosya.json>');
    process.exit(1);
  }
  const body = JSON.parse(await readFile(path.resolve(target), 'utf8'));
  await req('PATCH', `/projects/${ref}/config/auth`, body);
  console.log('✔ Auth config güncellendi.');
  console.log('Kontrol: Dashboard → Authentication → Emails → SMTP Settings');
  console.log('E2E test: /signup ile yeni kayıt → e-postaya 6 haneli kod gelmeli.');
} else {
  console.error('Mod seç: dump | patch <dosya.json>');
  process.exit(1);
}

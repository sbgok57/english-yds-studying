// ============================================================
// SIFIR HATA DENETÇİSİ — kod tabanındaki "hata tohumlarını" bulur.
// CI'da (zero-error.yml) ve yerelde çalışır:
//   node scripts/zero-error-check.mjs
// İhlal varsa exit 1 döner → merge/deploy DURUR.
// ============================================================
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const ROOTS = ['src', 'app', 'lib', 'components', 'public', 'scripts'];
const SKIP_DIRS = new Set(['node_modules', '.next', '.git', 'dist', 'build', 'audio-out', 'test']);
const EXTS = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.json', '.css']);

// KURAL LİSTESİ — level 'error' kapıyı durdurur, 'warn' raporlar
const RULES = [
  {
    id: 'empty-catch',
    re: /catch\s*(?:\([^)]*\))?\s*\{\s*\}/g,
    level: 'error',
    msg: 'Boş catch bloğu: hata sessize alınamaz (log ya da Result ile ele al)',
  },
  {
    id: 'ts-ignore',
    re: /@ts-(ignore|nocheck)/g,
    level: 'error',
    msg: '@ts-ignore/@ts-nocheck: tip hatası bastırılamaz (gerekçeli istisna için kuralı elle aş)',
  },
  {
    id: 'secret-in-client',
    re: /(SUPABASE_SERVICE_ROLE_KEY|VAPID_PRIVATE_KEY|OPENAI_API_KEY|ELEVENLABS_API_KEY|SUPABASE_ACCESS_TOKEN)(?!['"`])/g,
    level: 'error',
    onlyIn: ['app', 'components', 'public', 'src/app', 'src/components'],
    // Exception for api routes inside app
    excludeIn: ['/api/'],
    msg: 'Sunucu-only anahtar istemci klasöründe görülüyor (yalnız lib/ + api/ + scripts/ kullanabilir)',
  },
  {
    id: 'hardcoded-secret',
    re: /(eyJ[A-Za-z0-9_-]{30,}|sk-[A-Za-z0-9_-]{25,}|SUPABASE[A-Za-z0-9._-]{35,})/g,
    level: 'error',
    // Exception for safe patterns like redaction regexes
    excludeFiles: ['logger.ts', 'zero-error-check.mjs', 'supabase-config-patch.mjs'],
    msg: 'Koda gömülü anahtar şüphesi — tüm anahtarlar .env.local / secret store içinde olmalı',
  },
  {
    id: 'max-duration',
    re: /maxDuration\s*[=:]\s*\d+/g,
    level: 'error',
    msg: 'maxDuration Hobby planda Pro ister (10 sn limiti) — kaldır',
  },
  {
    id: 'hourly-cron',
    re: /"schedule"\s*:\s*"[^"]*\*\s*\*/g,
    level: 'error',
    msg: 'vercel.json saatten sık cron içeriyor (Hobby günde 1 izin verir)',
  },
  {
    id: 'console-log',
    re: /\bconsole\.log\(/g,
    level: 'warn',
    msg: 'console.log kaldı mı? (logger kullan)',
  },
  {
    id: 'todo',
    re: /\b(TODO|FIXME)\b/g,
    level: 'warn',
    msg: 'Tamamlanmamış iş işareti',
  },
];

async function* walk(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const e of entries) {
    if (e.isDirectory()) {
      if (!SKIP_DIRS.has(e.name)) yield* walk(path.join(dir, e.name));
    } else if (EXTS.has(path.extname(e.name))) {
      yield path.join(dir, e.name);
    }
  }
}

const findings = [];

for (const root of ROOTS) {
  const p = path.resolve(root);
  try {
    await stat(p);
  } catch {
    continue;
  }
  for await (const file of walk(p)) {
    const rel = path.relative(process.cwd(), file);
    if (rel.replace(/\\/g, '/') === 'scripts/zero-error-check.mjs') continue;
    const fileName = path.basename(file);
    const content = await readFile(file, 'utf8');
    for (const rule of RULES) {
      if (rule.onlyIn && !rule.onlyIn.some((d) => rel.startsWith(d + path.sep) || rel.startsWith(d + '/'))) continue;
      if (rule.excludeIn && rule.excludeIn.some((d) => rel.includes(d))) continue;
      if (rule.excludeFiles && rule.excludeFiles.some((f) => fileName === f)) continue;

      rule.re.lastIndex = 0;
      let m;
      while ((m = rule.re.exec(content)) !== null) {
        const line = content.slice(0, m.index).split('\n').length;
        findings.push({ level: rule.level, id: rule.id, file: `${rel}:${line}`, msg: rule.msg });
        if (!rule.re.global) break;
      }
    }
  }
}

// .env.local .gitignore'da mı?
try {
  const gi = await readFile('.gitignore', 'utf8');
  if (!/\.env/m.test(gi)) {
    findings.push({ level: 'error', id: 'env-not-ignored', file: '.gitignore', msg: '.env.local gitignore listesine eklenmeli' });
  }
} catch (e) {
  void e;
}

// ── Rapor ──
const errors = findings.filter((f) => f.level === 'error');
const warns = findings.filter((f) => f.level === 'warn');

console.log('\n🛡️  SIFIR HATA DENETİM RAPORU');
console.log('────────────────────────────────────────');
if (findings.length === 0) {
  console.log('✅ Hiç ihlal bulunamadı. Kod tabanı temiz.');
} else {
  for (const f of errors) console.log(`❌ [${f.id}] ${f.file}\n   ${f.msg}`);
  for (const f of warns) console.log(`⚠️  [${f.id}] ${f.file}\n   ${f.msg}`);
  console.log('────────────────────────────────────────');
}
console.log(`Toplam: ${errors.length} hata tohumu, ${warns.length} uyarı`);

if (errors.length > 0) {
  console.log('\n🚫 Kapı KAPALI: yukarıdaki hatalar düzeltilmeden merge/deploy yapılmaz.');
  process.exit(1);
}
console.log('\n✅ Kapı AÇIK: deploy güvenli.');

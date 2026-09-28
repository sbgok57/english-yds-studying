// ============================================================
// GET /api/health — canlılık kontrolü
// cron-job.org / uptime servisi bunu izler; 503 dönüyorsa alarm kur.
// Secret KULLANMAZ (anon seviye kontroller) — public kalabilir.
// ============================================================
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const started = Date.now();
  const checks: Record<string, { ok: boolean; detail?: string }> = {};

  // 1. Kritik env değişkenleri tanımlı mı?
  const required = [
    'NEXT_PUBLIC_SUPABASE_URL',
    'NEXT_PUBLIC_SUPABASE_ANON_KEY',
    'NEXT_PUBLIC_VAPID_PUBLIC_KEY',
  ];
  const missing = required.filter((k) => {
    return !process.env[k] && !process.env[`englishydsstudying_${k}`] && !process.env[`NEXT_PUBLIC_englishydsstudying_${k.replace('NEXT_PUBLIC_', '')}`];
  });
  if (!process.env.CRON_SECRET && !process.env.NEXT_PUBLIC_CRON_SECRET) {
    missing.push('CRON_SECRET');
  }

  checks.env = missing.length
    ? { ok: false, detail: `eksik: ${missing.join(', ')}` }
    : { ok: true };

  // 2. Supabase'e ulaşılabiliyor mu? (RLS boş döndürse bile bağlantı kanıtıdır)
  try {
    const { createClient } = await import('@supabase/supabase-js');
    const url =
      process.env.NEXT_PUBLIC_SUPABASE_URL ||
      process.env.NEXT_PUBLIC_englishydsstudying_SUPABASE_URL;
    const key =
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
      process.env.englishydsstudying_SUPABASE_ANON_KEY ||
      process.env.NEXT_PUBLIC_englishydsstudying_SUPABASE_PUBLISHABLE_KEY;

    if (!url || !key) {
      checks.supabase = { ok: false, detail: 'env eksik' };
    } else {
      const supabase = createClient(url, key, { auth: { persistSession: false } });
      const { error } = await supabase.from('user_stats').select('user_id').limit(1);
      // RLS nedeniyle veri gelmeyebilir; ağ hatası yoksa bağlantı sağlıklıdır
      const networkFail = error && /fetch|network|ECONN|ENOTFOUND/i.test(error.message);
      checks.supabase = networkFail
        ? { ok: false, detail: error?.message || 'network error' }
        : { ok: true };
    }
  } catch (e) {
    checks.supabase = { ok: false, detail: (e as Error).message };
  }

  // 3. Ses dosyaları erişilebilir mi? (manifest varsa ilk parçayı kontrol et)
  try {
    const base = (process.env.NEXT_PUBLIC_AUDIO_BASE_URL ?? '/audio').replace(/\/$/, '');
    const res = await fetch(`${base}/manifest.json`, { cache: 'no-store' }).catch(() => null);
    checks.audio = res
      ? { ok: res.ok || res.status === 404, detail: `manifest HTTP ${res.status}` } // 404 = henüz yüklenmedi, çökme nedeni değil
      : { ok: true, detail: 'manifest yerel modda' };
  } catch (e) {
    checks.audio = { ok: false, detail: (e as Error).message };
  }

  const allOk = Object.values(checks).every((c) => c.ok);

  return NextResponse.json(
    {
      ok: allOk,
      service: 'yds-exam',
      checks,
      latencyMs: Date.now() - started,
      ts: new Date().toISOString(),
    },
    { status: allOk ? 200 : 503 }
  );
}

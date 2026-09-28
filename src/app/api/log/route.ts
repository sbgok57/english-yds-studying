// ============================================================
// POST /api/log — istemci hata raporlarını toplar.
// • IP bazlı basit rate limit (10 rapor/dk)
// • Gizli anahtar sansürü (redact)
// • Supabase error_reports tablosuna yazar (service role)
// ============================================================
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const SECRET_RE = /(eyJ[A-Za-z0-9_-]{10,}|sk-[A-Za-z0-9_-]{12,}|Bearer\s+[A-Za-z0-9._-]+)/g;
const rateBuckets = new Map<string, { count: number; resetAt: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const b = rateBuckets.get(ip);
  if (!b || b.resetAt < now) {
    rateBuckets.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  b.count++;
  return b.count > 10;
}

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: { message: 'rate_limited' } }, { status: 429 });
  }

  const body = await req.json().catch(() => null);
  if (!body?.message) {
    return NextResponse.json({ ok: false, error: { message: 'message gerekli' } }, { status: 400 });
  }

  const clean = (s: unknown, max: number) =>
    typeof s === 'string' ? s.replace(SECRET_RE, '[REDACTED]').slice(0, max) : null;

  const row = {
    message: clean(body.message, 2000),
    stack: clean(body.stack, 8000),
    url: clean(body.url, 500),
    context: (body.context ?? {}) as Record<string, unknown>,
  };

  // Sunucu tarafı log (Vercel Logs'ta görünür)
  console.error('[client-report]', JSON.stringify({ ...row, ip }));

  // Supabase'e kalıcı yaz (anahtar varsa; yoksa yalnız console)
  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    process.env.NEXT_PUBLIC_englishydsstudying_SUPABASE_URL;
  const serviceKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.englishydsstudying_SUPABASE_SERVICE_ROLE_KEY;

  if (supabaseUrl && serviceKey) {
    try {
      const { createClient } = await import('@supabase/supabase-js');
      const admin = createClient(
        supabaseUrl,
        serviceKey,
        { auth: { persistSession: false } }
      );
      // Oturum varsa rapora bağla (anon olabilir, sorun değil)
      let userId: string | null = null;
      try {
        const authHeader = req.headers.get('authorization');
        if (authHeader?.startsWith('Bearer ')) {
          const { data } = await admin.auth.getUser(authHeader.slice(7));
          userId = data.user?.id ?? null;
        }
      } catch (authErr) {
        void authErr;
      }
      await admin.from('error_reports').insert({
        ...row,
        user_id: userId,
        user_agent: (req.headers.get('user-agent') ?? '').slice(0, 300),
      });
    } catch (e) {
      console.warn('[client-report] supabase yazılamadı:', (e as Error).message);
    }
  }

  return NextResponse.json({ ok: true });
}

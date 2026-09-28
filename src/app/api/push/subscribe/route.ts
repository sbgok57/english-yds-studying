// ============================================================
// POST /api/push/subscribe
// Tarayıcının push aboneliğini Supabase'e kaydeder.
// Body: { endpoint, keys: { p256dh, auth }, userAgent? }
// ============================================================
import { withApiHandler, jsonOk } from '@/lib/error/with-api-handler';
import { AppError } from '@/lib/error/app-error';
import { fromQuery } from '@/lib/supabase/safe-client';
import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/push/supabase-admin';
import { cookies } from 'next/headers';
import { verifySessionToken, SESSION_COOKIE_NAME } from '@/lib/server-auth';

export const dynamic = 'force-dynamic';

export const POST = withApiHandler('push.subscribe', async (req) => {
  let userId: string | null = null;

  // 1. Supabase Auth Kontrolü
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user?.id) userId = user.id;
  } catch {
    // Supabase auth fallback
  }

  // 2. YDS Session Token (Custom Auth) Kontrolü
  if (!userId) {
    try {
      const cookieStore = await cookies();
      const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
      if (token) {
        const payload = await verifySessionToken(token);
        if (payload?.userId) userId = payload.userId;
      }
    } catch {
      // Session fallback
    }
  }

  if (!userId) {
    throw new AppError('AUTH_REQUIRED', 'Bildirim için önce oturum açmalısın.', { status: 401 });
  }

  const body = await req.json().catch(() => null);
  if (!body?.endpoint || !body?.keys?.p256dh || !body?.keys?.auth) {
    throw new AppError('VALIDATION_FAILED', 'Abonelik verisi eksik. Sayfayı yenileyip tekrar dene.');
  }

  const admin = createAdminClient();

  // Aboneliği kaydet (aynı cihaz tekrar abone olursa çakışma yaratma)
  const r = fromQuery(
    await admin.from('push_subscriptions').upsert(
      {
        user_id: userId,
        endpoint: body.endpoint,
        p256dh: body.keys.p256dh,
        auth_key: body.keys.auth,
        user_agent: typeof body.userAgent === 'string' ? body.userAgent.slice(0, 300) : null,
        last_success_at: new Date().toISOString(),
        fail_count: 0,
      },
      { onConflict: 'user_id,endpoint' }
    ),
    { route: 'push.subscribe' }
  );

  if (!r.ok) throw r.error;

  // İlk kez abone olan kullanıcıya varsayılan tercih satırı aç
  await admin
    .from('notification_settings')
    .upsert({ user_id: userId }, { onConflict: 'user_id', ignoreDuplicates: true });

  return jsonOk({ subscribed: true });
});

// ============================================================
// POST /api/push/test
// Giriş yapmış kullanıcının kayıtlı tüm cihazlarına anında test bildirimi yollar.
// ============================================================
import { withApiHandler, jsonOk } from '@/lib/error/with-api-handler';
import { AppError } from '@/lib/error/app-error';
import { fromQuery } from '@/lib/supabase/safe-client';
import { createAdminClient } from '@/lib/push/supabase-admin';
import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { verifySessionToken, SESSION_COOKIE_NAME } from '@/lib/server-auth';
import { sendToSubscription } from '@/lib/push/vapid';

export const dynamic = 'force-dynamic';

export const POST = withApiHandler('push.test', async (req) => {
  let userId: string | null = null;

  // 1. Supabase Auth
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user?.id) userId = user.id;
  } catch {
    // Supabase auth fallback
  }

  // 2. YDS Session Token (Custom Auth)
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
    throw new AppError('AUTH_REQUIRED', 'Test bildirimi göndermek için önce oturum açmalısın.', { status: 401 });
  }

  const admin = createAdminClient();

  // Kullanıcının kayıtlı tüm aboneliklerini çek
  const res = await admin
    .from('push_subscriptions')
    .select('id, endpoint, p256dh, auth_key, fail_count')
    .eq('user_id', userId);

  const r = fromQuery(res, { route: 'push.test' });
  if (!r.ok) throw r.error;

  const subs = r.data || [];
  if (subs.length === 0) {
    throw new AppError(
      'PUSH_UNSUPPORTED',
      'Kayıtlı aktif bildirim aboneliği bulunamadı. Lütfen önce bu cihazda bildirim butonunu açın.',
      { status: 404 }
    );
  }

  const body = await req.json().catch(() => ({}));
  const payload = {
    title: body?.title || '🔔 YDS Koç Test Bildirimi',
    body:
      body?.body ||
      'Harika! Cihazın bildirimleri başarıyla alıyor. Günlük kelime ve taktikler zamanında cebinde olacak! 🚀',
    url: body?.url || '/dashboard',
    tag: 'yds-test',
  };

  let sent = 0;
  let removed = 0;

  for (const sub of subs) {
    const result = await sendToSubscription(sub, payload);
    if (result === 'ok') {
      sent++;
      await admin
        .from('push_subscriptions')
        .update({ last_success_at: new Date().toISOString(), fail_count: 0 })
        .eq('id', sub.id);
    } else if (result === 'gone') {
      removed++;
      await admin.from('push_subscriptions').delete().eq('id', sub.id);
    } else {
      const nextFail = (sub.fail_count || 0) + 1;
      if (nextFail >= 3) {
        removed++;
        await admin.from('push_subscriptions').delete().eq('id', sub.id);
      } else {
        await admin
          .from('push_subscriptions')
          .update({ fail_count: nextFail })
          .eq('id', sub.id);
      }
    }
  }

  return jsonOk({
    message: `${sent} cihaza test bildirimi başarıyla iletildi.`,
    sent,
    removed,
    total: subs.length,
  });
});

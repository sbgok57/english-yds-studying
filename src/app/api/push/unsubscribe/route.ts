// ============================================================
// POST /api/push/unsubscribe
// Tarayıcının push aboneliğini siler.
// Body: { endpoint: string }
// ============================================================
import { withApiHandler, jsonOk } from '@/lib/error/with-api-handler';
import { AppError } from '@/lib/error/app-error';
import { fromQuery } from '@/lib/supabase/safe-client';
import { createAdminClient } from '@/lib/push/supabase-admin';
import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { verifySessionToken, SESSION_COOKIE_NAME } from '@/lib/server-auth';

export const dynamic = 'force-dynamic';

export const POST = withApiHandler('push.unsubscribe', async (req) => {
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

  const body = await req.json().catch(() => null);
  if (!body?.endpoint || typeof body.endpoint !== 'string') {
    throw new AppError('VALIDATION_FAILED', 'Geçersiz abonelik sonlandırma verisi.');
  }

  const admin = createAdminClient();

  let query = admin.from('push_subscriptions').delete().eq('endpoint', body.endpoint);
  if (userId) {
    query = query.eq('user_id', userId);
  }

  const r = fromQuery(await query, { route: 'push.unsubscribe' });
  if (!r.ok) throw r.error;

  return jsonOk({ unsubscribed: true });
});

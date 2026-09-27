// ============================================================
// POST /api/push/unsubscribe
// Tarayıcının push aboneliğini siler.
// Body: { endpoint: string }
// ============================================================
import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/push/supabase-admin';
import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { verifySessionToken, SESSION_COOKIE_NAME } from '@/lib/server-auth';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
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
    return NextResponse.json({ error: 'Geçersiz endpoint.' }, { status: 400 });
  }

  try {
    const admin = createAdminClient();

    let query = admin.from('push_subscriptions').delete().eq('endpoint', body.endpoint);
    if (userId) {
      query = query.eq('user_id', userId);
    }

    const { error } = await query;
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || 'Abonelik iptal edilemedi.' },
      { status: 500 }
    );
  }
}

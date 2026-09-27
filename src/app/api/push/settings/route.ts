// ============================================================
// /api/push/settings
// GET: Kullanıcının bildirim tercihlerini döner.
// POST / PATCH: Bildirim tercihlerini (saat, sınav tarihi, kategoriler) günceller.
// ============================================================
import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/push/supabase-admin';
import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { verifySessionToken, SESSION_COOKIE_NAME } from '@/lib/server-auth';

export const dynamic = 'force-dynamic';

async function getUserId(): Promise<string | null> {
  // 1. Supabase Auth
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user?.id) return user.id;
  } catch {
    // fallback
  }

  // 2. YDS Session Token (Custom Auth)
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    if (token) {
      const payload = await verifySessionToken(token);
      if (payload?.userId) return payload.userId;
    }
  } catch {
    // fallback
  }

  return null;
}

const DEFAULT_SETTINGS = {
  enabled: true,
  reminders: true,
  motivation: true,
  funny: true,
  reminder_time: '20:00',
  exam_date: null,
  timezone: 'Europe/Istanbul',
};

export async function GET() {
  const userId = await getUserId();
  if (!userId) {
    return NextResponse.json(
      { error: 'Oturum açmalısınız.' },
      { status: 401 }
    );
  }

  try {
    const admin = createAdminClient();
    const { data, error } = await admin
      .from('notification_settings')
      .select('*')
      .eq('user_id', userId)
      .maybeSingle();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!data) {
      // Varsayılan kayıt oluştur
      const initial = { user_id: userId, ...DEFAULT_SETTINGS };
      await admin.from('notification_settings').insert(initial);
      return NextResponse.json({ settings: initial });
    }

    return NextResponse.json({ settings: data });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || 'Ayarlar yüklenemedi.' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const userId = await getUserId();
  if (!userId) {
    return NextResponse.json(
      { error: 'Oturum açmalısınız.' },
      { status: 401 }
    );
  }

  const body = await req.json().catch(() => ({}));
  const updates: Record<string, any> = {
    updated_at: new Date().toISOString(),
  };

  if (typeof body.enabled === 'boolean') updates.enabled = body.enabled;
  if (typeof body.reminders === 'boolean') updates.reminders = body.reminders;
  if (typeof body.motivation === 'boolean') updates.motivation = body.motivation;
  if (typeof body.funny === 'boolean') updates.funny = body.funny;

  if (typeof body.reminder_time === 'string') {
    const cleanTime = body.reminder_time.trim().slice(0, 5);
    if (/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(cleanTime)) {
      updates.reminder_time = cleanTime;
    }
  }

  if (body.exam_date === null || typeof body.exam_date === 'string') {
    if (!body.exam_date) {
      updates.exam_date = null;
    } else if (/^\d{4}-\d{2}-\d{2}$/.test(body.exam_date)) {
      updates.exam_date = body.exam_date;
    }
  }

  try {
    const admin = createAdminClient();
    const { data, error } = await admin
      .from('notification_settings')
      .upsert(
        { user_id: userId, ...updates },
        { onConflict: 'user_id' }
      )
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, settings: data });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || 'Ayarlar kaydedilemedi.' },
      { status: 500 }
    );
  }
}

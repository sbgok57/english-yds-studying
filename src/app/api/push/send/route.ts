// ============================================================
// /api/push/send
// Vercel Cron (Saatlik) veya Güvenli Webhook Tetikleyicisi
// GET / POST: Authorization: Bearer CRON_SECRET
// ============================================================
import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/push/supabase-admin';
import { sendToSubscription, StoredSubscription } from '@/lib/push/vapid';
import {
  reminderPayload,
  motivationPayload,
  funnyPayload,
  personalizedReminder,
  PushPayload,
} from '@/lib/push/content';
import { getProgressDigestForUser } from '@/lib/progress/stats';

export const dynamic = 'force-dynamic';
export const maxDuration = 60; // 60 saniye limit

// // PERF: Eşzamanlı istek patlamasını önlemek için sınırlı concurrency havuzu (max 5)
async function sendBatchLimited(
  items: Array<{ sub: StoredSubscription; payload: PushPayload }>,
  concurrency = 5
) {
  const results: Array<{ subId: string; result: 'ok' | 'gone' | 'error' }> = [];
  for (let i = 0; i < items.length; i += concurrency) {
    const chunk = items.slice(i, i + concurrency);
    const chunkResults = await Promise.all(
      chunk.map(async ({ sub, payload }) => {
        const res = await sendToSubscription(sub, payload);
        return { subId: sub.id, result: res };
      })
    );
    results.push(...chunkResults);
  }
  return results;
}

export async function GET(req: Request) {
  return handleCron(req);
}

export async function POST(req: Request) {
  return handleCron(req);
}

async function handleCron(req: Request) {
  // 1. Yetki Kontrolü
  const authHeader = req.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;

  // Güvenlik: CRON_SECRET tanımlıysa tam eşleşme aranır
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    // Vercel cron dışında manuel çağrıları engelle
    return NextResponse.json({ error: 'Yetkisiz erişim.' }, { status: 401 });
  }

  try {
    const admin = createAdminClient();

    // 2. Türkiye Yerel Saatini Hesapla
    const now = new Date();
    const istanbulDateStr = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Europe/Istanbul',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(now); // 'YYYY-MM-DD'

    const istanbulHourStr = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Istanbul',
      hour: '2-digit',
      hour12: false,
    }).format(now); // '00' - '23'

    const currentHour = parseInt(istanbulHourStr, 10);

    // 3. Bildirimleri Açık Olan Kullanıcıları Çek
    const { data: users, error: userError } = await admin
      .from('notification_settings')
      .select('*')
      .eq('enabled', true)
      .limit(500); // // SAFETY: Bounded limit

    if (userError) {
      return NextResponse.json({ error: userError.message }, { status: 500 });
    }

    if (!users || users.length === 0) {
      return NextResponse.json({ ok: true, message: 'Aktif kullanıcı bulunamadı.', sent: 0 });
    }

    // 4. Bu saatte hangi kullanıcılara hangi bildirim gidecek belirle
    const userPayloadMap = new Map<string, { payload: PushPayload; type: 'reminder' | 'motivation' | 'funny' }>();

    for (const u of users) {
      // A) Hatırlatıcı (Kullanıcının belirlediği saatte, örn: '20:00' - Modül 5 kişiselleştirmeli)
      const userReminderHour = u.reminder_time ? parseInt(u.reminder_time.slice(0, 2), 10) : 20;
      if (
        u.reminders &&
        userReminderHour === currentHour &&
        u.last_reminder_on !== istanbulDateStr
      ) {
        const digest = await getProgressDigestForUser(u.user_id).catch(() => null);
        const payload = digest
          ? personalizedReminder(digest, u.exam_date)
          : reminderPayload(u.exam_date);

        userPayloadMap.set(u.user_id, {
          payload,
          type: 'reminder',
        });
        continue;
      }

      // B) Motivasyon (Saat 09:00'da)
      if (
        u.motivation &&
        currentHour === 9 &&
        u.last_motivation_on !== istanbulDateStr
      ) {
        userPayloadMap.set(u.user_id, {
          payload: motivationPayload(),
          type: 'motivation',
        });
        continue;
      }

      // C) Komik / Mizah (Saat 15:00'da)
      if (
        u.funny &&
        currentHour === 15 &&
        u.last_funny_on !== istanbulDateStr
      ) {
        userPayloadMap.set(u.user_id, {
          payload: funnyPayload(),
          type: 'funny',
        });
        continue;
      }
    }

    if (userPayloadMap.size === 0) {
      return NextResponse.json({
        ok: true,
        message: `Saat ${istanbulHourStr}:00 için gönderilecek bekleyen bildirim yok.`,
        sent: 0,
      });
    }

    const targetUserIds = Array.from(userPayloadMap.keys());

    // 5. Hedef kullanıcıların abonelik cihazlarını çek
    const { data: subs, error: subError } = await admin
      .from('push_subscriptions')
      .select('id, user_id, endpoint, p256dh, auth_key, fail_count')
      .in('user_id', targetUserIds);

    if (subError) {
      return NextResponse.json({ error: subError.message }, { status: 500 });
    }

    if (!subs || subs.length === 0) {
      return NextResponse.json({
        ok: true,
        message: 'Hedef kullanıcılara ait aktif cihaz aboneliği bulunamadı.',
        sent: 0,
      });
    }

    // 6. Gönderim paketlerini hazırla
    const dispatchItems: Array<{ sub: StoredSubscription; payload: PushPayload }> = [];
    for (const sub of subs) {
      const task = userPayloadMap.get(sub.user_id);
      if (task) {
        dispatchItems.push({ sub, payload: task.payload });
      }
    }

    // 7. Kontrollü concurrency ile push gönder
    const results = await sendBatchLimited(dispatchItems, 5);

    // 8. Sonuçları işle: Başarılıları kaydet, ölüleri temizle
    let sentCount = 0;
    let goneCount = 0;
    const toDeleteIds: string[] = [];
    const successfulUserIds = new Set<string>();

    for (const r of results) {
      const sub = subs.find((s) => s.id === r.subId);
      if (!sub) continue;

      if (r.result === 'ok') {
        sentCount++;
        successfulUserIds.add(sub.user_id);
        await admin
          .from('push_subscriptions')
          .update({ last_success_at: new Date().toISOString(), fail_count: 0 })
          .eq('id', sub.id);
      } else if (r.result === 'gone') {
        goneCount++;
        toDeleteIds.push(sub.id);
      } else {
        const nextFail = (sub.fail_count || 0) + 1;
        if (nextFail >= 3) {
          toDeleteIds.push(sub.id);
        } else {
          await admin
            .from('push_subscriptions')
            .update({ fail_count: nextFail })
            .eq('id', sub.id);
        }
      }
    }

    // Ölü veya 3 defa hata veren abonelikleri temizle
    if (toDeleteIds.length > 0) {
      await admin.from('push_subscriptions').delete().in('id', toDeleteIds);
    }

    // Bildirimi alan kullanıcıların `last_*_on` sütununu güncelle (aynı gün tekrar atmasın)
    for (const userId of successfulUserIds) {
      const task = userPayloadMap.get(userId);
      if (task) {
        const updateField =
          task.type === 'reminder'
            ? { last_reminder_on: istanbulDateStr }
            : task.type === 'motivation'
            ? { last_motivation_on: istanbulDateStr }
            : { last_funny_on: istanbulDateStr };

        await admin
          .from('notification_settings')
          .update(updateField)
          .eq('user_id', userId);
      }
    }

    return NextResponse.json({
      ok: true,
      hour: `${istanbulHourStr}:00`,
      targetedUsers: userPayloadMap.size,
      sentSubscriptions: sentCount,
      cleanedSubscriptions: toDeleteIds.length,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || 'Push gönderim döngüsü hatası.' },
      { status: 500 }
    );
  }
}

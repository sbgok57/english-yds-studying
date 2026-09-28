// ============================================================
// GET / POST /api/push/send — CRON uç noktası (VERCEL HOBBY UYUMLU SÜRÜM)
//
// Hobby değişiklikleri:
//  • maxDuration YOK (Hobby fonksiyon limiti 10 sn; 60 yazmak Pro ister).
//  • 8.5 sn'lik yumuşak zaman bütçesi: süre dolarsa durur; KALAN
//    kullanıcılar bir sonraki çağrıda işlenir. Çünkü her kullanıcının
//    last_*_on alanı ANCAK gönderim başarılıyken güncellenir →
//    yarıda kesilen tur, sonraki turda kendiliğinden devam eder.
//  • Tetikleyici: GitHub Actions (saatlik, ücretsiz) veya cron-job.org.
//
// Mantık (Europe/Istanbul):
//  • reminder_time saati şu anki saate uyanlara 📚 hatırlatıcı
//  • Saat 09:00 → 💪 motivasyon; Saat 15:00 → 😄 komik
//  • ?full=1 ile saat koşulları ATLANIR (tüm kategoriler tek turda;
//    günde tek çağrı yapan servisler için)
// Güvenlik: Authorization: Bearer <CRON_SECRET> zorunlu.
// ============================================================
import { withApiHandler, jsonOk } from '@/lib/error/with-api-handler';
import { AppError } from '@/lib/error/app-error';
import { fromQuery } from '@/lib/supabase/safe-client';
import { createAdminClient } from '@/lib/push/supabase-admin';
import { sendToSubscription } from '@/lib/push/vapid';
import {
  reminderPayload,
  motivationPayload,
  funnyPayload,
  type PushPayload,
} from '@/lib/push/content';

export const dynamic = 'force-dynamic';

const TIME_BUDGET_MS = 8500; // Hobby'nin 10 sn limitinin altında güvenli pay

function istanbulNow(): { hour: number; today: string } {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Istanbul',
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '0';
  return {
    hour: parseInt(get('hour'), 10) % 24,
    today: `${get('year')}-${get('month')}-${get('day')}`,
  };
}

interface Sub {
  id: string;
  endpoint: string;
  p256dh: string;
  auth_key: string;
}

async function handlePush(req: Request) {
  // --- 1. Yetki kontrolü ---
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.get('authorization') !== `Bearer ${secret}`) {
    throw new AppError('CRON_UNAUTHORIZED', 'Yetkisiz istek.', { status: 401 });
  }

  const url = new URL(req.url);
  const fullMode = url.searchParams.get('full') === '1'; // saat koşullarını atla

  const { hour, today } = istanbulNow();
  const hh = String(hour).padStart(2, '0');
  const admin = createAdminClient();

  const summary = {
    hour,
    today,
    fullMode,
    usersScanned: 0,
    usersProcessed: 0,
    reminderSent: 0,
    motivationSent: 0,
    funnySent: 0,
    goneDeleted: 0,
    failed: 0,
    budgetExceeded: false,
  };

  // --- 2. Bildirimi açık + en az 1 aboneliği olan kullanıcılar ---
  const res = await admin
    .from('notification_settings')
    .select(
      `user_id, reminders, motivation, funny, reminder_time, exam_date,
       last_reminder_on, last_motivation_on, last_funny_on,
       push_subscriptions!inner(id, endpoint, p256dh, auth_key)`
    )
    .eq('enabled', true);

  const r = fromQuery(res, { route: 'push.send' });
  if (!r.ok) throw r.error;

  const deadline = Date.now() + TIME_BUDGET_MS;
  const list = (r.data ?? []) as any[];

  // --- 3. Kullanıcı bazında gönderim (zaman bütçeli + devam edilebilir) ---
  for (const u of list) {
    summary.usersScanned++;

    // Bütçe dolduysa DUR — bu kullanıcı sonraki turda işlenir
    if (Date.now() > deadline) {
      summary.budgetExceeded = true;
      break;
    }

    const subs: Sub[] = u.push_subscriptions;

    const deliver = async (
      category: 'reminder' | 'motivation' | 'funny',
      payload: PushPayload,
      lastField: string
    ) => {
      let ok = 0;
      for (const s of subs) {
        const sendRes = await sendToSubscription(s, payload);
        if (sendRes === 'ok') {
          ok++;
          await admin
            .from('push_subscriptions')
            .update({ last_success_at: new Date().toISOString(), fail_count: 0 })
            .eq('id', s.id);
        } else if (sendRes === 'gone') {
          await admin.from('push_subscriptions').delete().eq('id', s.id);
          summary.goneDeleted++;
        } else {
          const { data: row } = await admin
            .from('push_subscriptions')
            .select('fail_count')
            .eq('id', s.id)
            .single();
          const fc = ((row?.fail_count as number) ?? 0) + 1;
          if (fc >= 3) {
            await admin.from('push_subscriptions').delete().eq('id', s.id);
            summary.goneDeleted++;
          } else {
            await admin.from('push_subscriptions').update({ fail_count: fc }).eq('id', s.id);
          }
          summary.failed++;
        }
      }
      if (ok > 0) {
        await admin
          .from('notification_settings')
          .update({ [lastField]: today })
          .eq('user_id', u.user_id);
        if (category === 'reminder') summary.reminderSent++;
        if (category === 'motivation') summary.motivationSent++;
        if (category === 'funny') summary.funnySent++;
      }
    };

    // 📚 Hatırlatıcı: kullanıcının saati şu an mı? (fullMode'da herkese)
    const reminderHourMatch =
      typeof u.reminder_time === 'string' && u.reminder_time.startsWith(hh);
    if (u.reminders && (fullMode || reminderHourMatch) && u.last_reminder_on !== today) {
      await deliver('reminder', reminderPayload(u.exam_date), 'last_reminder_on');
    }

    // 💪 Motivasyon: 09:00 Türkiye saati (fullMode'da her saat)
    if ((fullMode || hour === 9) && u.motivation && u.last_motivation_on !== today) {
      await deliver('motivation', motivationPayload(), 'last_motivation_on');
    }

    // 😄 Komik: 15:00 Türkiye saati (fullMode'da her saat)
    if ((fullMode || hour === 15) && u.funny && u.last_funny_on !== today) {
      await deliver('funny', funnyPayload(), 'last_funny_on');
    }

    summary.usersProcessed++;
  }

  return jsonOk(summary);
}

export const GET = withApiHandler('push.send.get', handlePush);
export const POST = withApiHandler('push.send.post', handlePush);

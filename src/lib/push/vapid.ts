// ============================================================
// Sunucu tarafı Web Push (VAPID) kurulumu — YALNIZCA server'da import et!
// ============================================================
import webpush from 'web-push';

if (typeof window !== 'undefined') {
  throw new Error('[push/vapid] Client bundle içinde asla import edilmemelidir!');
}

let initialized = false;

export function getWebPush() {
  if (!initialized) {
    const publicKey = process.env.VAPID_PUBLIC_KEY;
    const privateKey = process.env.VAPID_PRIVATE_KEY;
    if (!publicKey || !privateKey) {
      throw new Error(
        'VAPID_PUBLIC_KEY / VAPID_PRIVATE_KEY eksik. `npx web-push generate-vapid-keys` ile üret ve .env.local dosyasına ekle.'
      );
    }
    webpush.setVapidDetails(
      `mailto:${process.env.VAPID_CONTACT_EMAIL ?? 'destek@ydsexam.example.com'}`,
      publicKey,
      privateKey
    );
    initialized = true;
  }
  return webpush;
}

export interface StoredSubscription {
  id: string;
  endpoint: string;
  p256dh: string;
  auth_key: string;
  user_id?: string;
  fail_count?: number;
}

export type SendResult = 'ok' | 'gone' | 'error';

/**
 * Tek bir aboneliğe push gönderir.
 * 'gone'  → abonelik ölü (404/410), silinmeli
 * 'error' → geçici hata, fail_count artırılmalı
 */
export async function sendToSubscription(
  sub: Pick<StoredSubscription, 'endpoint' | 'p256dh' | 'auth_key'>,
  payload: object
): Promise<SendResult> {
  const wp = getWebPush();
  try {
    await wp.sendNotification(
      {
        endpoint: sub.endpoint,
        keys: { p256dh: sub.p256dh, auth: sub.auth_key },
      },
      JSON.stringify(payload),
      { TTL: 60 } // 60 sn içinde teslim edilemezse servis çöpe atsın
    );
    return 'ok';
  } catch (err: unknown) {
    const statusCode = (err as { statusCode?: number })?.statusCode;
    if (statusCode === 404 || statusCode === 410) return 'gone';
    return 'error';
  }
}

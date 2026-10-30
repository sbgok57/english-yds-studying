/* ============================================================
   DİL MASTER (YDS · YDT · YÖKDİL) – Service Worker
   public/sw.js
   Güvenlik Standartları: P0 Reliability & PWA/Offline Zırhı
   - Sadece public app shell ve izinli statik varlıklar önbelleklenir.
   - /api, auth, token, cookie ve kişisel veriler ASLA Cache Storage'a girmez.
   ============================================================ */

const SW_VERSION = 'dil-master-offline-v2026.10.30-joyful-brand-v2';
const APP_SHELL_CACHE = `${SW_VERSION}-shell`;

const PUBLIC_APP_SHELL = [
  '/',
  '/manifest.json',
  '/favicon.ico',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/apple-touch-icon.png',
];

// 1. Kurulum (Install): Statik Public App Shell'i önbelleğe al
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(APP_SHELL_CACHE).then((cache) => {
      return cache.addAll(PUBLIC_APP_SHELL).catch((err) => {
        console.warn('[SW_INSTALL_WARN] Partial shell precache:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// 2. Aktivasyon (Activate): Eski sürümleri temizle ve istemcileri devral
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      caches.keys().then((keys) =>
        Promise.all(
          keys.filter((k) => !k.startsWith(SW_VERSION)).map((k) => caches.delete(k))
        )
      ),
    ])
  );
});

// 3. İstek Yakalama (Fetch): Güvenli Cache & Network-First Stratejisi
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (!url.protocol.startsWith('http')) return;

  // GÜVENLİK ZIRHI: /api, auth, token, çerez ve hassas istekler asla Cache Storage'a GİRMEZ!
  if (
    url.pathname.startsWith('/api/') ||
    url.pathname.includes('/auth/') ||
    url.pathname.includes('session') ||
    url.pathname.includes('login') ||
    url.pathname.includes('logout')
  ) {
    return; // Doğrudan ağa bırak, Service Worker cache'lemesin
  }

  // Statik Varlıklar ve App Shell: Network-First with Cache Fallback
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Yalnızca başarılı public GET yanıtlarını cache'e al
        if (
          networkResponse.status === 200 &&
          (url.pathname.startsWith('/_next/static/') ||
            url.pathname.startsWith('/icons/') ||
            url.pathname.endsWith('.svg') ||
            url.pathname.endsWith('.png') ||
            url.pathname.endsWith('.ico'))
        ) {
          const responseClone = networkResponse.clone();
          caches.open(APP_SHELL_CACHE).then((cache) => {
            cache.put(event.request, responseClone).catch(() => {});
          });
        }
        return networkResponse;
      })
      .catch(async () => {
        // Çevrimdışı modu: Önbellekteki kopyayı dene
        const cached = await caches.match(event.request);
        if (cached) return cached;

        // Sayfa navigasyonu ise ana sayfayı veya HTML çevrimdışı sayfasını sun (asla düz metin döndürme)
        if (event.request.mode === 'navigate') {
          const cachedHome = await caches.match('/');
          if (cachedHome) return cachedHome;

          return new Response(
            '<!DOCTYPE html><html lang="tr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>DİL MASTER — Çevrimdışı Mod</title><style>body{font-family:system-ui,-apple-system,sans-serif;background:#0f172a;color:#f8fafc;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;padding:24px;text-align:center}.card{max-width:460px;background:#1e293b;border:1px solid #334155;border-radius:16px;padding:28px}h1{font-size:1.35rem;margin:0 0 12px;color:#38bdf8}p{font-size:0.95rem;line-height:1.6;color:#cbd5e1;margin:0 0 20px}a{display:inline-block;background:#2563eb;color:#fff;text-decoration:none;padding:10px 20px;border-radius:10px;font-weight:600}</style></head><body><div class="card"><h1>DİL MASTER — Çevrimdışı Mod</h1><p>İnternet bağlantınız şu anda yok. Daha önce önbelleğe alınan kelime ve gramer modüllerine ana sayfadan ulaşabilirsiniz.</p><a href="/">Ana Sayfayı Dene</a></div></body></html>',
            {
              headers: { 'Content-Type': 'text/html; charset=utf-8' },
              status: 503,
            }
          );
        }

        return new Response(
          JSON.stringify({ ok: false, offline: true, message: 'Offline resource unavailable' }),
          {
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            status: 503,
          }
        );
      })
  );
});

// 4. Push Bildirimleri
self.addEventListener('push', (event) => {
  let payload = {
    title: 'DİL MASTER Koçun',
    body: 'Çalışma zamanı geldi! 📚',
    url: '/',
    tag: 'dil-master-bildirim',
  };

  if (event.data) {
    try {
      payload = { ...payload, ...event.data.json() };
    } catch {
      payload.body = event.data.text();
    }
  }

  event.waitUntil(
    self.registration.showNotification(payload.title, {
      body: payload.body,
      icon: '/icons/icon-192.png',
      badge: '/icons/icon-192.png',
      data: { url: payload.url || '/' },
      tag: payload.tag || 'yds-bildirim',
      renotify: true,
      vibrate: [120, 60, 120],
      requireInteraction: false,
      lang: 'tr',
    })
  );
});

// 5. Bildirim Tıklaması
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = (event.notification.data && event.notification.data.url) || '/grammar';

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if ('focus' in client) {
          if ('navigate' in client) client.navigate(targetUrl);
          return client.focus();
        }
      }
      return self.clients.openWindow(targetUrl);
    })
  );
});

// 6. İstemciden Gelen Akıllı Bildirim İstekleri (TRIGGER_NOTIFICATION)
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'TRIGGER_NOTIFICATION') {
    const payload = event.data.payload || {};
    self.registration.showNotification(payload.title || '🚀 DİL MASTER', {
      body: payload.body || 'Günün YDS hap bilgisi ve kelimeleri seni bekliyor!',
      icon: payload.icon || '/icons/icon-192.png',
      badge: '/icons/icon-192.png',
      vibrate: [100, 50, 100],
      data: { url: payload.url || '/grammar' },
    });
  }
});


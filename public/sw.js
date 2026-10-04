/* ============================================================
   DİL MASTER (YDS · YDT · YÖKDİL) – Service Worker
   public/sw.js
   Desteklenen platformlar: Masaüstü PWA, Android Chrome,
   Samsung Internet, iOS Safari PWA (16.4+).
   ============================================================ */

const SW_VERSION = 'dil-master-v2026.10.04-r2';

// Güncellemeler anında devreye girsin (skipWaiting + clients.claim)
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      // PERF: Eski cache sürümlerini temizle
      caches.keys().then((keys) =>
        Promise.all(
          keys.filter((k) => k !== SW_VERSION).map((k) => caches.delete(k))
        )
      ),
    ])
  );
});

// PWA Uyumluluğu: Çevrimdışı önbellek ve ağ yönlendirmesi
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return
  const url = new URL(event.request.url)
  if (!url.protocol.startsWith('http')) return

  event.respondWith(
    fetch(event.request).catch(async () => {
      const cached = await caches.match(event.request)
      if (cached) return cached
      return new Response('YDS Master çevrimdışı mod', {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
        status: 200,
      })
    })
  )
})

// Sunucudan gelen push mesajını bildirime çevir
self.addEventListener('push', (event) => {
  let payload = {
    title: 'YDS Koçun',
    body: 'Çalışma zamanı geldi! 📚',
    url: '/',
    tag: 'yds-bildirim',
  }

  if (event.data) {
    try {
      payload = { ...payload, ...event.data.json() }
    } catch (e) {
      payload.body = event.data.text()
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
  )
})

// Bildirime tıklanınca siteyi aç (açık sekme varsa ona odaklan)
self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  const targetUrl = (event.notification.data && event.notification.data.url) || '/'

  event.waitUntil(
    self.clients
      .matchAll({ type: 'window', includeUncontrolled: true })
      .then((clientList) => {
        for (const client of clientList) {
          if ('focus' in client) {
            if ('navigate' in client) client.navigate(targetUrl)
            return client.focus()
          }
        }
        return self.clients.openWindow(targetUrl)
      })
  )
})

// Abonelik tarayıcı tarafından yenilenirse (nadir durum: token rotasyonu / izin yenileme)
self.addEventListener('pushsubscriptionchange', (event) => {
  // SAFETY: event.waitUntil ile Service Worker'ın işlem bitene kadar sonlandırılması engellenir
  event.waitUntil(
    (event.newSubscription
      ? Promise.resolve(event.newSubscription)
      : self.registration.pushManager.subscribe(
          event.oldSubscription ? event.oldSubscription.options : { userVisibleOnly: true }
        )
    )
      .then((subscription) => {
        if (!subscription) return null
        const subJson = subscription.toJSON()
        return fetch('/api/push/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({
            endpoint: subJson.endpoint,
            keys: subJson.keys,
            userAgent: 'ServiceWorker-AutoRenewal',
          }),
        })
      })
      .catch((err) => {
        // PERF: Ağ veya sunucu geçici olarak ulaşılamazsa sessizce kurtul, worker çökmesini engelle
        if (typeof console !== 'undefined' && console.warn) {
          console.warn('[SW] pushsubscriptionchange renewal failed:', err)
        }
      })
  )
})

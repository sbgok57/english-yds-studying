/* ============================================================
   YDS EXAM – Push Bildirim Service Worker'ı
   public/sw.js
   Desteklenen tarayıcılar: Chrome (masaüstü + Android),
   Samsung Internet, Edge, Safari (iOS 16.4+, PWA olarak).
   ============================================================ */

// Güncellemeler anında devreye girsin (özellikle Samsung Internet'te önemli)
self.addEventListener('install', () => {
  self.skipWaiting()
})
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
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

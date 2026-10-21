/**
 * DİL MASTER - SAAT BAĞIMSIZ AKILLI MOBİL BİLDİRİM YÖNETİCİSİ
 */

export class SmartNotificationManager {
  private static timerId: any = null;
  private static tips = [
    { title: "🎯 Günün YDS Gramer İpucu", body: "Although / Even though zıtlık bağlaçlarından sonra tam cümle gelir; Despite ise isim alır!" },
    { title: "⚡ Akademik Kelime Hatırlatması", body: "Compensate for = Make up for (Telafi etmek). Çıkmış sınavlarda 14 kez soruldu!" },
    { title: "🔥 Sınava Hazırlık Motivasyonu", body: "Günde 15 dakika tekrar seni hedefine ulaştırır. Gramer laboratuvarında yeni testin hazır." },
    { title: "🎧 Dinleme Zamanı", body: "Tane tane sesli gramer anlatımı hazır. Kulaklığını tak ve ekranı kilitleyip dinle." }
  ];

  public static async requestPermissionAndStart(): Promise<boolean> {
    if (typeof window === 'undefined' || !('Notification' in window)) return false;

    let permission = Notification.permission;
    if (permission === 'default') {
      try {
        permission = await Notification.requestPermission();
      } catch {
        return false;
      }
    }

    if (permission === 'granted') {
      this.startSmartPings();
      return true;
    }
    return false;
  }

  private static startSmartPings() {
    // İlk açılışta tebrik bildirimi
    this.sendNotification(this.tips[0]);

    if (this.timerId) {
      clearInterval(this.timerId);
    }

    // Kullanıcı sitede gezinirken veya uygulamayı arka plana aldığında periyodik hap bilgi
    this.timerId = setInterval(() => {
      const randomTip = this.tips[Math.floor(Math.random() * this.tips.length)];
      this.sendNotification(randomTip);
    }, 1000 * 60 * 180); // 3 saatte bir akıllı hatırlatma
  }

  private static sendNotification(tip: { title: string; body: string }) {
    if (typeof window === 'undefined') return;

    if (navigator.serviceWorker && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: 'TRIGGER_NOTIFICATION',
        payload: {
          title: tip.title,
          body: tip.body,
        }
      });
    } else if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
      try {
        new Notification(tip.title, { body: tip.body, icon: '/icons/icon-192.png' });
      } catch {
        // Tarayıcı kısıtı durumunda sessiz kal
      }
    }
  }

  public static getTips() {
    return this.tips;
  }

  public static stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
}

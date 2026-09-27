"use client";

import { useEffect, useState, useCallback } from "react";

// VAPID public key helper
function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

interface NotificationSettings {
  enabled: boolean;
  reminders: boolean;
  motivation: boolean;
  funny: boolean;
  reminder_time: string;
  exam_date: string | null;
}

export default function PushManager() {
  const [isSupported, setIsSupported] = useState<boolean>(true);
  const [permission, setPermission] = useState<NotificationPermission>("default");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [savingSettings, setSavingSettings] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error" | "info"; msg: string } | null>(null);

  // Platform detection
  const [isIOS, setIsIOS] = useState(false);
  const [isSamsung, setIsSamsung] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  // User preferences
  const [settings, setSettings] = useState<NotificationSettings>({
    enabled: true,
    reminders: true,
    motivation: true,
    funny: true,
    reminder_time: "20:00",
    exam_date: "",
  });

  // 1. Tarayıcı ve PWA Yeteneklerini Tespit Et
  useEffect(() => {
    if (typeof window === "undefined") return;

    const ua = navigator.userAgent;
    const isIosDevice = /iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream;
    const isSamsungBrowser = /SamsungBrowser/i.test(ua);
    const standaloneMode =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true;

    setIsIOS(isIosDevice);
    setIsSamsung(isSamsungBrowser);
    setIsStandalone(standaloneMode);

    if (!("serviceWorker" in navigator) || !("PushManager" in window) || !("Notification" in window)) {
      setIsSupported(false);
      return;
    }

    setPermission(Notification.permission);

    // Aktif abonelik kontrolü
    navigator.serviceWorker.ready
      .then((reg) => reg.pushManager.getSubscription())
      .then((sub) => {
        setIsSubscribed(!!sub);
      })
      .catch(() => {
        setIsSubscribed(false);
      });

    // PWA yükleme tetikleyicisi
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () => window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
  }, []);

  // 2. Tercihleri Sunucudan Getir
  const fetchSettings = useCallback(async () => {
    try {
      const res = await fetch("/api/push/settings");
      if (res.ok) {
        const data = await res.json();
        if (data.settings) {
          setSettings({
            enabled: data.settings.enabled ?? true,
            reminders: data.settings.reminders ?? true,
            motivation: data.settings.motivation ?? true,
            funny: data.settings.funny ?? true,
            reminder_time: data.settings.reminder_time?.slice(0, 5) || "20:00",
            exam_date: data.settings.exam_date || "",
          });
        }
      }
    } catch {
      // Sessiz fallback
    }
  }, []);

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  // 3. PWA Kurulum Butonu
  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setDeferredPrompt(null);
    }
  };

  // 4. Push Bildirimine Abone Ol
  const subscribeToPush = async () => {
    setLoading(true);
    setFeedback(null);

    try {
      const perm = await Notification.requestPermission();
      setPermission(perm);

      if (perm !== "granted") {
        setFeedback({
          type: "error",
          msg: "Bildirim izni verilmedi. Tarayıcı ayarlarınızdan izin vermelisiniz.",
        });
        setLoading(false);
        return;
      }

      const reg = await navigator.serviceWorker.register("/sw.js");
      await navigator.serviceWorker.ready;

      const vapidPublicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
      if (!vapidPublicKey) {
        throw new Error("VAPID genel anahtarı yapılandırılmamış.");
      }

      const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);

      const subscription = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: convertedVapidKey,
      });

      // Sunucuya kaydet
      const subJson = subscription.toJSON();
      const res = await fetch("/api/push/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          endpoint: subJson.endpoint,
          keys: subJson.keys,
          userAgent: navigator.userAgent,
        }),
      });

      const resData = await res.json();
      if (!res.ok) {
        throw new Error(resData.error || "Abonelik sunucuya kaydedilemedi.");
      }

      setIsSubscribed(true);
      setFeedback({
        type: "success",
        msg: "🎉 Bildirimler başarıyla açıldı! YDS koçunuz artık zamanında cebinizde.",
      });
    } catch (err: any) {
      setFeedback({
        type: "error",
        msg: err?.message || "Bildirim aboneliği başlatılırken bir hata oluştu.",
      });
    } finally {
      setLoading(false);
    }
  };

  // 5. Abonelikten Çık
  const unsubscribeFromPush = async () => {
    setLoading(true);
    setFeedback(null);

    try {
      const reg = await navigator.serviceWorker.ready;
      const sub = await reg.pushManager.getSubscription();

      if (sub) {
        const endpoint = sub.endpoint;
        await sub.unsubscribe();

        // Sunucudan sil
        await fetch("/api/push/unsubscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ endpoint }),
        });
      }

      setIsSubscribed(false);
      setFeedback({
        type: "info",
        msg: "Bildirim aboneliği iptal edildi.",
      });
    } catch (err: any) {
      setFeedback({
        type: "error",
        msg: err?.message || "Abonelik iptal edilirken bir sorun çıktı.",
      });
    } finally {
      setLoading(false);
    }
  };

  // 6. Test Bildirimi Gönder
  const handleSendTestPush = async () => {
    setLoading(true);
    setFeedback(null);

    try {
      const res = await fetch("/api/push/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "🔔 YDS Koç Test Bildirimi",
          body: "Harika! Bildirim sistemi telefonunda ve tarayıcında kusursuz çalışıyor. 🚀",
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Test bildirimi gönderilemedi.");
      }

      setFeedback({
        type: "success",
        msg: "✅ Test bildirimi cihazınıza gönderildi! Birkaç saniye içinde belirecektir.",
      });
    } catch (err: any) {
      setFeedback({
        type: "error",
        msg: err?.message || "Test bildirimi gönderilemedi.",
      });
    } finally {
      setLoading(false);
    }
  };

  // 7. Ayarları Kaydet
  const handleSaveSettings = async (newSettings?: Partial<NotificationSettings>) => {
    setSavingSettings(true);
    setFeedback(null);

    const payload = { ...settings, ...newSettings };
    if (newSettings) setSettings(payload);

    try {
      const res = await fetch("/api/push/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Ayarlar kaydedilemedi.");
      }

      setFeedback({
        type: "success",
        msg: "✅ Bildirim saat ve tercihleriniz güncellendi.",
      });
    } catch (err: any) {
      setFeedback({
        type: "error",
        msg: err?.message || "Ayarlar kaydedilirken hata oluştu.",
      });
    } finally {
      setSavingSettings(false);
    }
  };

  if (!isSupported) {
    return (
      <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 text-amber-200 text-sm">
        ⚠️ Tarayıcınız Web Push bildirimlerini desteklemiyor. Güncel bir Chrome, Edge veya mobil tarayıcı kullanmanızı öneririz.
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/90 backdrop-blur-xl p-6 sm:p-8 space-y-6 shadow-2xl">
      {/* Başlık ve Durum */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">📲</span>
            <h3 className="text-xl font-black text-white">Akıllı Telefon & Web Bildirimleri</h3>
            <span
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider ${
                isSubscribed
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                  : "bg-white/10 text-white/50 border border-white/10"
              }`}
            >
              {isSubscribed ? "Aktif" : "Kapalı"}
            </span>
          </div>
          <p className="text-xs text-white/60 mt-1">
            Günde 3 kez planlanan YDS hatırlatıcıları, sabah motivasyonu ve öğleden sonra mizah molaları doğrudan telefonunuza gelsin.
          </p>
        </div>

        {/* Ana Açma/Kapatma Butonu */}
        <div>
          {isSubscribed ? (
            <button
              onClick={unsubscribeFromPush}
              disabled={loading}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-300 font-bold text-xs hover:bg-rose-500/20 transition-all disabled:opacity-50"
            >
              {loading ? "İşleniyor..." : "🔕 Bildirimleri Kapat"}
            </button>
          ) : (
            <button
              onClick={subscribeToPush}
              disabled={loading}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-xs text-white shadow-lg shadow-cyan-500/25 hover:scale-105 transition-all disabled:opacity-50"
            >
              {loading ? "Bağlanıyor..." : "🔔 Bildirimleri Aç"}
            </button>
          )}
        </div>
      </div>

      {/* Geri Bildirim Mesajı */}
      {feedback && (
        <div
          className={`p-4 rounded-2xl text-xs font-semibold flex items-center justify-between ${
            feedback.type === "success"
              ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-300"
              : feedback.type === "error"
              ? "bg-rose-500/15 border border-rose-500/30 text-rose-300"
              : "bg-cyan-500/15 border border-cyan-500/30 text-cyan-300"
          }`}
        >
          <span>{feedback.msg}</span>
          <button
            onClick={() => setFeedback(null)}
            className="text-white/40 hover:text-white ml-2 text-sm"
          >
            ✕
          </button>
        </div>
      )}

      {/* PWA Yükleme & Cihaz Özel Yönergeleri */}
      <div className="space-y-3">
        {/* Android / Desktop Install Prompt */}
        {deferredPrompt && !isStandalone && (
          <div className="flex items-center justify-between p-4 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 to-blue-950/40">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📱</span>
              <div>
                <h4 className="text-xs font-bold text-white">YDS Master'ı Uygulama Olarak Yükleyin</h4>
                <p className="text-[11px] text-white/60">Tek dokunuşla ana ekrandan açın ve bildirimleri kaçırmayın.</p>
              </div>
            </div>
            <button
              onClick={handleInstallClick}
              className="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-md"
            >
              Yükle
            </button>
          </div>
        )}

        {/* iOS Safari Rehberi */}
        {isIOS && !isStandalone && (
          <div className="p-4 rounded-2xl border border-purple-500/30 bg-purple-950/20 space-y-2">
            <div className="flex items-center gap-2 text-purple-300 text-xs font-bold">
              <span>🍎</span>
              <span>iPhone / iPad Kullanıcıları İçin Web Push Kurulumu:</span>
            </div>
            <ol className="text-[11px] text-white/70 list-decimal list-inside space-y-1">
              <li>Safari'de alttaki <strong>Paylaş (📤)</strong> butonuna dokunun.</li>
              <li>Açılan menüde <strong>"Ana Ekrana Ekle" (➕)</strong> seçeneğini seçin.</li>
              <li>Ana ekrandaki YDS Master ikonundan uygulamayı açıp bu ekrandan bildirimleri etkinleştirin.</li>
            </ol>
          </div>
        )}

        {/* Samsung Internet Pil Uyarısı */}
        {isSamsung && (
          <div className="p-4 rounded-2xl border border-amber-500/30 bg-amber-950/20 text-xs text-amber-200/90 space-y-1">
            <p className="font-bold flex items-center gap-1.5">
              <span>⚡</span> Samsung Pil Kısıtlaması Uyarısı:
            </p>
            <p className="text-[11px] text-white/70">
              Bildirimlerin zamanında iletilmesi için telefonunuzun <strong>Ayarlar &gt; Uygulamalar &gt; YDS Master &gt; Pil</strong> bölümünden <em>"Kısıtlanmamış"</em> seçeneğini işaretleyin.
            </p>
          </div>
        )}
      </div>

      {/* Tercihler ve Saat Ayarları */}
      <div className="space-y-4 pt-2">
        <h4 className="text-xs font-black uppercase tracking-wider text-cyan-400">
          ⚙️ Bildirim Kategorileri & Saat Tercihleri
        </h4>

        {/* Kategori 1: Hatırlatıcı & Saat Ayarı */}
        <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.03] space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xl">📚</span>
              <div>
                <p className="text-sm font-bold text-white">Günlük Çalışma & Görev Hatırlatıcısı</p>
                <p className="text-[11px] text-white/50">
                  Günün kelime ve reading hedeflerini hatırlatır, sınav geri sayımını iletir.
                </p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={settings.reminders}
              onChange={(e) => handleSaveSettings({ reminders: e.target.checked })}
              className="w-5 h-5 accent-cyan-500 rounded cursor-pointer"
            />
          </div>

          {/* Hatırlatıcı Saati Seçimi (Kullanıcı İstediği Saati Belirleyebilir) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/10">
            <div>
              <label className="block text-[11px] font-bold text-white/70 mb-1">
                ⏰ Hatırlatıcı Saati (Türkiye Saati)
              </label>
              <input
                type="time"
                value={settings.reminder_time}
                onChange={(e) => {
                  const val = e.target.value;
                  setSettings((prev) => ({ ...prev, reminder_time: val }));
                  handleSaveSettings({ reminder_time: val });
                }}
                className="w-full bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-white/70 mb-1">
                🎯 Hedef YDS Sınav Tarihi (Geri Sayım İçin)
              </label>
              <input
                type="date"
                value={settings.exam_date || ""}
                onChange={(e) => {
                  const val = e.target.value;
                  setSettings((prev) => ({ ...prev, exam_date: val }));
                  handleSaveSettings({ exam_date: val });
                }}
                className="w-full bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>
        </div>

        {/* Kategori 2: Sabah Motivasyonu */}
        <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl">💪</span>
            <div>
              <p className="text-sm font-bold text-white">Sabah Motivasyonu (09:00)</p>
              <p className="text-[11px] text-white/50">
                Güne enerjik başlaman için her sabah saat 09:00'da stratejik motivasyon mesajları.
              </p>
            </div>
          </div>
          <input
            type="checkbox"
            checked={settings.motivation}
            onChange={(e) => handleSaveSettings({ motivation: e.target.checked })}
            className="w-5 h-5 accent-cyan-500 rounded cursor-pointer"
          />
        </div>

        {/* Kategori 3: Öğleden Sonra YDS Mizahı */}
        <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl">😄</span>
            <div>
              <p className="text-sm font-bold text-white">YDS Mizah Molası (15:00)</p>
              <p className="text-[11px] text-white/50">
                Sınav stresini azaltan, bağlaç ve gramer esprileri içeren eğlenceli bildirimler.
              </p>
            </div>
          </div>
          <input
            type="checkbox"
            checked={settings.funny}
            onChange={(e) => handleSaveSettings({ funny: e.target.checked })}
            className="w-5 h-5 accent-cyan-500 rounded cursor-pointer"
          />
        </div>
      </div>

      {/* Alt Aksiyonlar & Test Butonu */}
      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div className="text-[11px] text-white/40">
          {savingSettings ? "⏳ Ayarlar kaydediliyor..." : "✨ Değişiklikler otomatik olarak kaydedilir."}
        </div>

        <div className="flex items-center gap-2">
          {isSubscribed && (
            <button
              onClick={handleSendTestPush}
              disabled={loading}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all flex items-center gap-1.5"
            >
              <span>🚀</span>
              <span>Test Bildirimi Gönder</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

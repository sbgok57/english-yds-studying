"use client";

import React, { useState, useEffect, useRef } from "react";
import { Download, X, Share2, PlusSquare, Smartphone, CheckCircle2 } from "lucide-react";

export default function PwaInstaller() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const [showIosGuide, setShowIosGuide] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // 1. Standalone / Yüklü Kontrolü
    const checkStandalone = () => {
      const isMediaStandalone = window.matchMedia("(display-mode: standalone)").matches;
      const isNavStandalone = (window.navigator as any).standalone === true;
      return isMediaStandalone || isNavStandalone;
    };

    if (checkStandalone()) {
      setIsStandalone(true);
      return;
    }

    // 2. Service Worker Kaydı (Tüm sayfalarda küresel PWA desteği)
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then(() => {
          // Worker başarıyla bağlandı
        })
        .catch((err) => {
          console.warn("[PWA] ServiceWorker register notice:", err);
        });
    }

    // 3. iOS Tespiti
    const ua = window.navigator.userAgent;
    const isIosDevice = /iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream;
    setIsIos(isIosDevice);

    // 4. Android / Chrome beforeinstallprompt dinleyicisi
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // 5. Uygulama yüklendiğinde gizle
    const handleAppInstalled = () => {
      setIsStandalone(true);
      setDeferredPrompt(null);
    };
    window.addEventListener("appinstalled", handleAppInstalled);

    // 6. Dışarıdan tetiklenebilir açılış sinyali
    const handleExternalTrigger = () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult: any) => {
          if (choiceResult.outcome === "accepted") {
            setIsStandalone(true);
          }
          setDeferredPrompt(null);
        });
      } else {
        setShowIosGuide(true);
      }
    };
    window.addEventListener("yds:open-install-modal", handleExternalTrigger);

    // Daha önce kapatıldı mı?
    try {
      const dismissed = sessionStorage.getItem("yds_pwa_banner_dismissed");
      if (dismissed === "true") {
        setBannerDismissed(true);
      }
    } catch {
      // Storage failover
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
      window.removeEventListener("yds:open-install-modal", handleExternalTrigger);
    };
  }, [deferredPrompt]);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === "accepted") {
        setIsStandalone(true);
      }
      setDeferredPrompt(null);
    } else if (isIos) {
      setShowIosGuide(true);
    } else {
      setShowIosGuide(true);
    }
  };

  const handleDismiss = () => {
    setBannerDismissed(true);
    try {
      sessionStorage.setItem("yds_pwa_banner_dismissed", "true");
    } catch {
      /* ignore */
    }
  };

  if (!mounted || isStandalone) return null;

  return (
    <>
      {/* 1. Alt Kısımda Sabit Yükleme Çubuğu (Mobil & Masaüstü) */}
      {!bannerDismissed && (
        <aside
          role="region"
          aria-label="Uygulama yükleme bildirimi"
          className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm z-30 bg-slate-900/95 backdrop-blur-xl border border-purple-500/40 rounded-2xl p-3 shadow-2xl shadow-purple-950/80 flex items-center justify-between gap-3 animate-fade-in"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-600 to-cyan-400 p-[1.5px] shrink-0 shadow-md">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-lg">
                🧠
              </div>
            </div>
            <div className="min-w-0">
              <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                YDS Master Uygulamasını Yükle
              </h4>
              <p className="text-[11px] text-white/60 truncate">
                Hızlı açılış, tam ekran ve offline çalışma
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={handleInstallClick}
              className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-slate-950 text-xs font-black shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Yükle</span>
            </button>
            <button
              onClick={handleDismiss}
              aria-label="Kapat"
              className="w-7 h-7 rounded-lg text-white/40 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </aside>
      )}

      {/* 2. iOS Safari & Genel Kurulum Rehberi Modalı */}
      {showIosGuide && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="pwa-install-guide-title"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center p-3 sm:p-4"
          onClick={() => setShowIosGuide(false)}
        >
          <div
            className="w-full max-w-sm bg-slate-900 border border-white/15 rounded-3xl p-6 shadow-2xl text-white space-y-5 animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-600 to-cyan-400 flex items-center justify-center text-xl shadow-lg">
                  🧠
                </div>
                <div>
                  <h3 id="pwa-install-guide-title" className="font-black text-base">Telefona Yükle</h3>
                  <p className="text-xs text-white/50">YDS Master Mobil Kurulumu</p>
                </div>
              </div>
              <button
                onClick={() => setShowIosGuide(false)}
                aria-label="Kapat"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <div className="w-7 h-7 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 font-black">
                  1
                </div>
                <div className="space-y-0.5">
                  <p className="font-bold text-white flex items-center gap-1.5">
                    <span>Paylaş Düğmesine Dokun</span>
                    <Share2 className="w-3.5 h-3.5 text-cyan-400" />
                  </p>
                  <p className="text-white/60">
                    Safari veya tarayıcınızın alt çubuğundaki <strong>Paylaş</strong> (kare ve yukarı ok) simgesine dokunun.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <div className="w-7 h-7 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 font-black">
                  2
                </div>
                <div className="space-y-0.5">
                  <p className="font-bold text-white flex items-center gap-1.5">
                    <span>Ana Ekrana Ekle</span>
                    <PlusSquare className="w-3.5 h-3.5 text-pink-400" />
                  </p>
                  <p className="text-white/60">
                    Açılan menüyü aşağı kaydırıp <strong>&quot;Ana Ekrana Ekle&quot;</strong> seçeneğini seçin.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <div className="w-7 h-7 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-black">
                  3
                </div>
                <div className="space-y-0.5">
                  <p className="font-bold text-white flex items-center gap-1.5">
                    <span>Ekle Butonuna Bas</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </p>
                  <p className="text-white/60">
                    Sağ üstteki <strong>&quot;Ekle&quot;</strong> butonuna dokunun. YDS Master artık telefonunuzda tam ekran bir uygulama olarak çalışır!
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowIosGuide(false)}
              className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs transition-colors"
            >
              Anladım, Kapat
            </button>
          </div>
        </div>
      )}
    </>
  );
}

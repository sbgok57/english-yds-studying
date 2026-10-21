"use client";

import React, { useEffect, useState, useRef } from 'react';

// ============================================================================
// 1. HAZIR DOĞAL GRAMER DERSLERİ (TANE TANE ANLATIM SCRIPT'LERİ)
// ============================================================================
export interface GrammarLesson {
  id: string;
  title: string;
  level: string;
  description: string;
  script: string;
}

export const GRAMMAR_LESSONS: GrammarLesson[] = [
  {
    id: 'tenses',
    title: 'Zamanlar (Tenses) & YDS Soru Çözüm Mantığı',
    level: 'YDS · YÖKDİL',
    description: 'Since, By the time ve For kalıplarının zaman uyumu.',
    script: 'Merhaba DİL MASTER öğrencisi. Şimdi seninle YDS ve YÖKDİL sınavlarının bel kemiği olan zaman uyumunu tane tane inceliyoruz. Kural bir: Cümlede "since" bağlacı gördüğünde, since olan taraf Simple Past Tense, ana cümle ise Present Perfect Tense olmalıdır. Örnek: Since he graduated, he has achieved great success. Kural iki: "By the time" kalıbı arkasından past bir fiil alırsa, ana cümlede Past Perfect yani had verb 3 aramalısın. Ekranını kilitlesen bile bu kuralları zihninde tekrarla.'
  },
  {
    id: 'passive',
    title: 'Passive Voice (Edilgen Çatı) & By İpuçları',
    level: 'YDT · YDS',
    description: 'Nesne almayan geçişsiz fiiller ve edilgen yapılar.',
    script: 'Edilgen çatı dersimize hoş geldin. YDS ve YDT sınavlarında boşluktan sonra bir nesne yani bir isim gelmiyorsa, yüksek ihtimalle passive yani be artı verb 3 yapısı aranır. Ancak dikkat: Happen, occur, disappear gibi geçişsiz fiiller asla edilgen yapılamaz. Sorularda was happened görürsen doğrudan ele.'
  },
  {
    id: 'clauses',
    title: 'Zıtlık Bağlaçları: Although, Despite, However',
    level: 'YÖKDİL · YDS',
    description: 'Tam cümle alanlar ile isim alan bağlaçların ayrımı.',
    script: 'Bağlaç sorularında altın kural: Boşluktan sonra tam cümle mi var yoksa isim öbeği mi? Although, even though ve though tam cümle alır. Despite ve in spite of ise arkasından sadece isim veya fiilimsi alır. However ise iki bağımsız cümlenin arasında noktalamayla kullanılır.'
  }
];

// ============================================================================
// 2. iOS MASTER BİLEŞENİ (HEPSİ TEK BİR ARADA)
// ============================================================================
export const DilMasterIosMaster: React.FC = () => {
  // Durum Yönetimi
  const [isIos, setIsIos] = useState<boolean>(false);
  const [isStandalone, setIsStandalone] = useState<boolean>(false);
  const [showIosBanner, setShowIosBanner] = useState<boolean>(false);
  const [activeLesson, setActiveLesson] = useState<GrammarLesson>(GRAMMAR_LESSONS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audioProgress, setAudioProgress] = useState<number>(0);
  const [notificationStatus, setNotificationStatus] = useState<string>('default');

  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const notificationIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // --------------------------------------------------------------------------
  // A. iOS TESPİTİ, META ETİKETLERİ VE GÜVENLİ MOBİL GÖRÜNÜM
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 1. iOS Cihaz Kontrolü
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isAppleDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIos(isAppleDevice);

    // 2. Ana Ekrana Eklenmiş mi (Standalone PWA) Kontrolü
    const isInStandaloneMode =
      ('standalone' in window.navigator && (window.navigator as any).standalone === true) ||
      window.matchMedia('(display-mode: standalone)').matches;
    setIsStandalone(isInStandaloneMode);

    if (isAppleDevice && !isInStandaloneMode) {
      setShowIosBanner(true);
    }

    // 3. iOS Safari Çentik & Tam Ekran Meta Etiketleri Enjeksiyonu
    const injectMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    injectMeta('apple-mobile-web-app-capable', 'yes');
    injectMeta('apple-mobile-web-app-status-bar-style', 'black-translucent');
    injectMeta('apple-mobile-web-app-title', 'DİL MASTER');
    injectMeta('viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover');

    // 4. iOS Safari Giriş Alanlarında İstenmeyen Otomatik Yakınlaştırmayı Önleme (16px Base Korunur)
    const styleId = 'dilmaster-ios-typography-shield';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        input, select, textarea { font-size: 16px; }
      `;
      document.head.appendChild(style);
    }

    // 5. Ses Öğesini Başlat
    const audio = new Audio();
    (audio as any).playsInline = true; // iOS Safari tam ekrana geçmeden çalsın
    audio.preload = 'auto';

    audio.ontimeupdate = () => {
      if (audio.duration) {
        setAudioProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.onended = () => {
      setIsPlaying(false);
      setAudioProgress(0);
    };

    audioElementRef.current = audio;

    // 6. MediaSession API (Kilit Ekranı Kumanda Paneli)
    if ('mediaSession' in navigator) {
      navigator.mediaSession.setActionHandler('play', () => handlePlayRef.current?.());
      navigator.mediaSession.setActionHandler('pause', () => handlePauseRef.current?.());
      navigator.mediaSession.setActionHandler('seekbackward', () => {
        if (audioElementRef.current) {
          audioElementRef.current.currentTime = Math.max(audioElementRef.current.currentTime - 10, 0);
        }
      });
      navigator.mediaSession.setActionHandler('seekforward', () => {
        if (audioElementRef.current) {
          audioElementRef.current.currentTime = Math.min(
            audioElementRef.current.currentTime + 10,
            audioElementRef.current.duration || 0
          );
        }
      });
    }

    // 7. Akıllı Bildirim Kontrolü
    if ('Notification' in window) {
      setNotificationStatus(Notification.permission);
    }

    return () => {
      // PERF & SAFETY: Ses ve kaynak temizliği
      if (audio) {
        audio.pause();
        audio.src = '';
      }
      if (notificationIntervalRef.current) {
        clearInterval(notificationIntervalRef.current);
        notificationIntervalRef.current = null;
      }
    };
  }, []);

  const handlePlayRef = useRef<((lessonToPlay?: GrammarLesson) => Promise<void>) | null>(null);
  const handlePauseRef = useRef<(() => void) | null>(null);

  // --------------------------------------------------------------------------
  // B. KİLİTLİ EKRANDA ÇALMA GARANTİLİ SES FONKSİYONLARI
  // --------------------------------------------------------------------------
  const handlePlay = async (lessonToPlay = activeLesson) => {
    const audio = audioElementRef.current;
    if (!audio) return;

    // Kilit ekranına ders adını ve rozetini bas
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: lessonToPlay.title,
        artist: 'DİL MASTER (Tane Tane İnsan Anlatımı)',
        album: `${lessonToPlay.level} Gramer Laboratuvarı`,
        artwork: [
          { src: '/favicon.ico', sizes: '192x192', type: 'image/png' }
        ]
      });
      navigator.mediaSession.playbackState = 'playing';
    }

    // Tane Tane Doğal Anlatım Akışı (/api/tts Neural Ses Motoru Üzerinden)
    const encoded = encodeURIComponent(lessonToPlay.script);
    const audioSrc = `/api/tts?text=${encoded}&voiceId=tr-TR-female-emel&rate=0.94&pitch=0`;

    if (audio.src !== audioSrc) {
      audio.src = audioSrc;
    }

    audio.playbackRate = 1.0;

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      // iOS Safari ilk dokunuşta ses kilitlerse kullanıcı etkileşimiyle aç
      const unlockAndPlay = () => {
        audio.play().catch(() => {});
        setIsPlaying(true);
        window.removeEventListener('click', unlockAndPlay);
      };
      window.addEventListener('click', unlockAndPlay, { once: true });
    }
  };

  const handlePause = () => {
    const audio = audioElementRef.current;
    if (audio) {
      audio.pause();
      setIsPlaying(false);
      if ('mediaSession' in navigator) {
        navigator.mediaSession.playbackState = 'paused';
      }
    }
  };

  handlePlayRef.current = handlePlay;
  handlePauseRef.current = handlePause;

  // --------------------------------------------------------------------------
  // C. SAAT GEREKTİRMEYEN AKILLI BİLDİRİM İZNİ
  // --------------------------------------------------------------------------
  const enableSmartNotifications = async () => {
    if (!('Notification' in window)) return;

    const permission = await Notification.requestPermission();
    setNotificationStatus(permission);

    if (permission === 'granted') {
      try {
        new Notification('🚀 DİL MASTER Bildirimleri Aktif!', {
          body: 'Gramer tüyoları ve YDS kelimeleri gün içinde telefonunuza gelecek.',
          icon: '/favicon.ico',
        });
      } catch {
        // Tarayıcı kısıtı
      }

      // PERF: Clear any existing interval before starting a new 2-hour loop
      if (notificationIntervalRef.current) {
        clearInterval(notificationIntervalRef.current);
      }

      // 2 saatte bir otomatik hap bilgi döngüsü
      notificationIntervalRef.current = setInterval(() => {
        const tips = [
          '🎯 YDS Tüyosu: "No sooner ... than" kalıbı devrik cümle yapar!',
          '⚡ Kelime: Reluctant = Unwilling (İsteksiz). YÖKDİL Sağlıkta sık çıkar.',
          '🎧 Kulaklığını tak ve ekranı kilitle; Gramer laboratuvarında yeni dersin hazır.'
        ];
        const randomTip = tips[Math.floor(Math.random() * tips.length)];
        try {
          new Notification('DİL MASTER Hatırlatıcı', { body: randomTip, icon: '/favicon.ico' });
        } catch {
          // Tarayıcı kısıtı
        }
      }, 1000 * 60 * 120);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 font-sans">
      {/* 1. iOS Safari Kullanıcıları İçin "Ana Ekrana Ekle" Yönlendirme Kartı */}
      {showIosBanner && !isStandalone && (
        <div className="bg-sky-50 dark:bg-sky-950/60 border-2 border-sky-300 dark:border-sky-800 rounded-2xl p-5 mb-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <span className="text-3xl">📲</span>
            <div>
              <h4 className="font-bold text-slate-800 dark:text-slate-100 text-lg">
                iPhone / iPad'de Uygulama Olarak Kullanın
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
                Safari altındaki <strong>Paylaş</strong> simgesine (<span className="text-sky-600 dark:text-sky-400 font-bold">⎋</span>) dokunup <strong>"Ana Ekrana Ekle"</strong> deyin. Böylece adres çubuğu kaybolur ve ekran kapalıyken sesler kesilmez.
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowIosBanner(false)}
            className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 font-bold text-sm px-3 py-1 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"
          >
            Tamam
          </button>
        </div>
      )}

      {/* 2. Saat Sınırsız Akıllı Bildirim Butonu */}
      <div className="flex items-center justify-between bg-slate-100 dark:bg-slate-800/60 rounded-xl p-4 mb-6 border border-slate-200 dark:border-slate-700/60">
        <div>
          <span className="font-semibold text-slate-800 dark:text-slate-100">📱 Akıllı Telefon Bildirimleri</span>
          <p className="text-xs text-slate-500 dark:text-slate-400">Saat kurmadan gün boyu hap YDS/YÖKDİL bilgileri gelsin.</p>
        </div>
        <button
          onClick={enableSmartNotifications}
          className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${
            notificationStatus === 'granted'
              ? 'bg-emerald-600 text-white'
              : 'bg-sky-600 hover:bg-sky-700 text-white shadow'
          }`}
        >
          {notificationStatus === 'granted' ? '✔ Bildirimler Açık' : 'Bildirimleri Aç'}
        </button>
      </div>

      {/* 3. Tane Tane Gramer Ses Çalıcısı (Kilitli Ekran Destekli) */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
            {activeLesson.level} · TANE TANE DOĞAL ANLATIM
          </span>
          <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Ekranı kilitleseniz de çalmaya devam eder
          </span>
        </div>

        {/* Ders Seçici Sekmeler */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {GRAMMAR_LESSONS.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => {
                setActiveLesson(lesson);
                if (isPlaying) {
                  handlePlay(lesson);
                }
              }}
              className={`p-3 rounded-xl text-left border transition-all ${
                activeLesson.id === lesson.id
                  ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/50 shadow-sm'
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900'
              }`}
            >
              <p className="font-bold text-slate-800 dark:text-slate-100 text-sm line-clamp-1">{lesson.title}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">{lesson.description}</p>
            </button>
          ))}
        </div>

        {/* Aktif Ders Detayı ve Oynatıcı Kontrolleri */}
        <div className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-6 border border-slate-200/60 dark:border-slate-800">
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">{activeLesson.title}</h3>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            "{activeLesson.script}"
          </p>

          {/* İlerleme Çubuğu */}
          <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full mb-6 overflow-hidden">
            <div
              className="bg-sky-600 h-full transition-all duration-300"
              style={{ width: `${audioProgress}%` }}
            ></div>
          </div>

          {/* Oynat / Durdur Butonu */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => (isPlaying ? handlePause() : handlePlay())}
              className={`px-10 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 transition-all transform active:scale-95 ${
                isPlaying
                  ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-md'
                  : 'bg-sky-600 hover:bg-sky-700 text-white shadow-xl'
              }`}
            >
              <span className="text-2xl">{isPlaying ? '⏸' : '🎧'}</span>
              <span>{isPlaying ? 'Dersi Duraklat' : 'Tane Tane Dinle (Kilit Ekranda Çal)'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DilMasterIosMaster;

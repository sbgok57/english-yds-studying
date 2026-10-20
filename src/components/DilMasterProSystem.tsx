"use client";

import React, { useEffect, useState, useCallback } from "react";

// ============================================================================
// 1. DESENLİ TEMA KÜTÜPHANESİ (WHATSAPP, TELEGRAM, HEARTS, DOTS, EMOJIS VB.)
// ============================================================================
export interface ThemePattern {
  id: string;
  name: string;
  category: string;
  bg: string;
  card: string;
  primary: string;
  text: string;
  size: string;
  svg: string;
}

const toDataUri = (svg: string) =>
  `url("data:image/svg+xml,${encodeURIComponent(svg.trim())}")`;

export const PRO_PATTERNS: ThemePattern[] = [
  {
    id: "whatsapp-doodle",
    name: "WhatsApp Klasik Doodle",
    category: "💬 WhatsApp",
    bg: "#0b141a",
    card: "#111b21",
    primary: "#00a884",
    text: "#f8fafc",
    size: "120px 120px",
    svg: toDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
        <g fill="none" stroke="rgba(255,255,255,0.11)" stroke-width="1.8" stroke-linecap="round">
          <rect x="16" y="20" width="26" height="32" rx="4"/>
          <line x1="21" y1="28" x2="37" y2="28"/>
          <line x1="21" y1="35" x2="33" y2="35"/>
          <circle cx="86" cy="32" r="14"/>
          <polyline points="86,24 86,32 92,36"/>
          <path d="M22 88l14-22 14 22H22z"/>
          <rect x="72" y="74" width="30" height="22" rx="3"/>
          <polyline points="72,78 87,87 102,78"/>
        </g>
      </svg>
    `),
  },
  {
    id: "telegram-aurora",
    name: "Telegram Yıldızlı Gece",
    category: "✈️ Telegram",
    bg: "#0f172a",
    card: "#1e293b",
    primary: "#38bdf8",
    text: "#f8fafc",
    size: "96px 96px",
    svg: toDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">
        <g fill="rgba(56,189,248,0.18)">
          <polygon points="24,10 27,18 35,18 29,23 31,31 24,26 17,31 19,23 13,18 21,18"/>
          <polygon points="76,54 78,60 84,60 79,64 81,70 76,66 71,70 73,64 68,60 74,60"/>
          <circle cx="68" cy="20" r="3"/>
          <circle cx="20" cy="72" r="3.5"/>
          <path d="M46 72l16-8-4 17-5-5-7-4z"/>
        </g>
      </svg>
    `),
  },
  {
    id: "hearts-pattern",
    name: "Kalpler (Soft Hearts)",
    category: "💖 Hearts",
    bg: "#1a0b16",
    card: "#291224",
    primary: "#f43f5e",
    text: "#ffe4e6",
    size: "70px 70px",
    svg: toDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
        <path fill="rgba(244,63,94,0.20)" d="M22 18c-4 0-7 3-7 7 0 8 11 14 11 14s11-6 11-14c0-4-3-7-7-7-2 0-3.5 1-4 2.5-.5-1.5-2-2.5-4-2.5zm30 26c-3 0-5.5 2.2-5.5 5.2 0 6 8.5 10.8 8.5 10.8s8.5-4.8 8.5-10.8c0-3-2.5-5.2-5.5-5.2-1.5 0-2.6.8-3 1.9-.4-1.1-1.5-1.9-3-1.9z"/>
      </svg>
    `),
  },
  {
    id: "polka-dots",
    name: "Modern Puantiye (Dots)",
    category: "⚪ Dots",
    bg: "#090d16",
    card: "#131c2e",
    primary: "#a855f7",
    text: "#f3e8ff",
    size: "36px 36px",
    svg: toDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
        <circle cx="9" cy="9" r="3" fill="rgba(168,85,247,0.26)"/>
        <circle cx="27" cy="27" r="3" fill="rgba(56,189,248,0.26)"/>
      </svg>
    `),
  },
  {
    id: "academic-emojis",
    name: "Akademik Başarı Emojileri",
    category: "📚🚀 Emojis",
    bg: "#0c1322",
    card: "#162038",
    primary: "#f59e0b",
    text: "#fef3c7",
    size: "110px 110px",
    svg: toDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" width="110" height="110" viewBox="0 0 110 110">
        <style>text { font-size: 20px; opacity: 0.24; font-family: sans-serif; }</style>
        <text x="12" y="30">📚</text>
        <text x="68" y="34">🎯</text>
        <text x="20" y="84">🎓</text>
        <text x="72" y="86">✨</text>
      </svg>
    `),
  },
  {
    id: "coffee-books-emoji",
    name: "Kahve & Kelime Kampı",
    category: "☕📖 Coffee",
    bg: "#1c130e",
    card: "#291d16",
    primary: "#d97706",
    text: "#fef3c7",
    size: "110px 110px",
    svg: toDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" width="110" height="110" viewBox="0 0 110 110">
        <style>text { font-size: 20px; opacity: 0.25; font-family: sans-serif; }</style>
        <text x="15" y="32">☕</text>
        <text x="65" y="36">📖</text>
        <text x="22" y="86">🧠</text>
        <text x="70" y="85">💡</text>
      </svg>
    `),
  },
  {
    id: "emerald-hexagons",
    name: "Zümrüt Altıgen (Hexagon)",
    category: "⬡ Geometric",
    bg: "#06141b",
    card: "#11212d",
    primary: "#10b981",
    text: "#ecfdf5",
    size: "56px 98px",
    svg: toDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="98" viewBox="0 0 56 98">
        <path fill="none" stroke="rgba(16,185,129,0.18)" stroke-width="1.6" d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100"/>
      </svg>
    `),
  },
  {
    id: "sakura-waves",
    name: "Japon Dalgaları & Sakura",
    category: "🌸 Waves",
    bg: "#170f1c",
    card: "#24182c",
    primary: "#ec4899",
    text: "#fce7f3",
    size: "80px 40px",
    svg: toDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="40" viewBox="0 0 80 40">
        <path fill="none" stroke="rgba(236,72,153,0.22)" stroke-width="2" d="M0 20 Q 20 0, 40 20 T 80 20"/>
        <circle cx="40" cy="20" r="3" fill="rgba(236,72,153,0.25)"/>
      </svg>
    `),
  },
];

// ============================================================================
// 2. YÜKSEK FREKANSLI ÖSYM (YDS / YDT / YÖKDİL) EŞ ANLAMLI KELİME KARTLARI
// ============================================================================
export interface SynonymCard {
  word: string;
  synonyms: string;
  tr: string;
  sentence: string;
  examTip: string;
}

export const OSYM_SYNONYM_PACK: SynonymCard[] = [
  {
    word: "Crucial",
    synonyms: "Vital · Essential · Indispensable · Imperative",
    tr: "Hayati, Çok Önemli",
    sentence: "Regular vocabulary revision is crucial for achieving a high score in YDS.",
    examTip: "YDS ve YÖKDİL'de 'It is crucial that...' kalıbı sonrasında 'should + V1' kullanımı sıkça yoklanır.",
  },
  {
    word: "Mitigate",
    synonyms: "Alleviate · Ease · Relieve · Diminish",
    tr: "Hafifletmek, Azaltmak, Yatıştırmak",
    sentence: "New environmental policies aim to mitigate the adverse effects of climate change.",
    examTip: "Özellikle YÖKDİL Sağlık ve Fen bilimlerinde 'mitigate symptoms / risks' eşleşmesiyle doğrudan sorulur.",
  },
  {
    word: "Abundant",
    synonyms: "Plentiful · Ample · Copious · Bountiful",
    tr: "Bol, Bereketli, Çok",
    sentence: "The region is known for its abundant natural resources and fertile soil.",
    examTip: "Zıt anlamlısı olan 'Scarce / Sparse' (Kıt, seyrek) ile birlikte bağlaç sorularında karşılaştırma yapılır.",
  },
  {
    word: "Inevitable",
    synonyms: "Unavoidable · Inescapable · Certain",
    tr: "Kaçınılmaz",
    sentence: "Technological transformation has become an inevitable part of modern education.",
    examTip: "Paragraf tamamlama sorularında sonuç cümlelerinde (Consequently, Therefore) sıkça yer alır.",
  },
  {
    word: "Reluctant",
    synonyms: "Unwilling · Hesitant · Disinclined · Averse",
    tr: "İsteksiz, Gönülsüz",
    sentence: "Many institutions were reluctant to adopt the new digital regulations at first.",
    examTip: "Genellikle 'reluctant to do something' şeklinde to-infinitive yapısıyla birlikte kullanılır.",
  },
  {
    word: "Plausible",
    synonyms: "Reasonable · Believable · Credible · Feasible",
    tr: "Makul, Mantıklı, Olası",
    sentence: "The research team provided a plausible explanation for the sudden atmospheric changes.",
    examTip: "Zıt anlamlısı 'Implausible / Far-fetched' olarak seçeneklerde sıkça çeldirici olarak karşımıza çıkar.",
  },
];

// ============================================================================
// 3. ANA KOMPONENT
// ============================================================================
export const DilMasterProSystem: React.FC = () => {
  const [panelOpen, setPanelOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"themes" | "synonyms" | "pomodoro">("themes");
  const [selectedPattern, setSelectedPattern] = useState<string>("whatsapp-doodle");
  const [fontSizePx, setFontSizePx] = useState<number>(20);
  const [synonymIndex, setSynonymIndex] = useState<number>(0);
  const [pomodoroSeconds, setPomodoroSeconds] = useState<number>(25 * 60);
  const [pomodoroRunning, setPomodoroRunning] = useState<boolean>(false);

  // --------------------------------------------------------------------------
  // A. GERÇEK SİTE TEMİZLEYİCİ, DOM DENETİMİ & ESKİ DOMAIN / SW TEMİZLİĞİ
  // --------------------------------------------------------------------------
  const applyPattern = useCallback((preset: ThemePattern) => {
    setSelectedPattern(preset.id);
    if (typeof window !== "undefined") {
      localStorage.setItem("dm_pro_pattern", preset.id);
      localStorage.setItem("dilmaster_active_pattern", preset.id);

      const root = document.documentElement;
      root.style.setProperty("--theme-bg", preset.bg);
      root.style.setProperty("--theme-card", preset.card);
      root.style.setProperty("--theme-primary", preset.primary);
      root.style.setProperty("--theme-text", preset.text);
      root.style.setProperty("--theme-pattern", preset.svg);
      root.style.setProperty("--theme-pattern-size", preset.size);

      document.body.style.backgroundColor = preset.bg;
      document.body.style.color = preset.text;
    }
  }, []);

  const applyFontSize = useCallback((size: number) => {
    const validSize = Math.max(16, Math.min(25, size));
    setFontSizePx(validSize);
    if (typeof window !== "undefined") {
      localStorage.setItem("dm_pro_fontsize", String(validSize));
      localStorage.setItem("dilmaster_font_scale", String(validSize));
      document.documentElement.style.setProperty("--base-scale", `${validSize}px`);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Tek Domain Kalkanı: Eski domain tespit edilirse dil-master.vercel.app'ye yönlendir
    if (window.location.hostname.includes("english-yds-studying")) {
      window.location.replace(`https://dil-master.vercel.app${window.location.pathname}${window.location.search}`);
      return;
    }

    // 2. Eski Service Worker kalıntılarını temizle
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (const registration of registrations) {
          if (registration.active?.scriptURL.includes("english-yds")) {
            registration.unregister();
          }
        }
      }).catch(() => {});
    }

    // 3. Canlı DOM Temizleyici
    const sanitizeDom = () => {
      const inputs = document.querySelectorAll("input");
      inputs.forEach((input) => {
        if (input.placeholder && (input.placeholder.includes("yagoo_x") || input.placeholder.includes("sinembi"))) {
          input.placeholder = "E-posta adresiniz veya kullanıcı adınız";
        }
      });

      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let node: Node | null;
      while ((node = walker.nextNode())) {
        if (!node.nodeValue) continue;
        let text = node.nodeValue;
        let changed = false;

        if (text.includes("DENSENİ")) {
          text = text.replace(/DENSENİ/g, "DENEYİMİ");
          changed = true;
        }
        if (/\(Kayıt #\d+\)/.test(text)) {
          text = text.replace(/\s*\(Kayıt #\d+\)/g, "");
          changed = true;
        }
        if (text.includes("IndexedDB 2.048 MB")) {
          text = text.replace(/Genişletilmiş Hafıza Devrede \(IndexedDB[^)]+\)/g, "Akıllı Çevrimdışı Senkronizasyon Aktif");
          changed = true;
        }
        if (text.includes("İşaretsiz: Siteye her girdiğinde")) {
          text = "Oturumumu bu cihazda açık tut";
          changed = true;
        }

        if (changed) {
          node.nodeValue = text;
        }
      }
    };

    sanitizeDom();
    const observer = new MutationObserver(() => sanitizeDom());
    observer.observe(document.body, { childList: true, subtree: true });

    // Kayıtlı tema ve yazı boyutunu yükle
    const savedTheme = localStorage.getItem("dm_pro_pattern") || localStorage.getItem("dilmaster_active_pattern") || "whatsapp-doodle";
    const savedFont = Number(localStorage.getItem("dm_pro_fontsize") || localStorage.getItem("dilmaster_font_scale")) || 20;

    const preset = PRO_PATTERNS.find((p) => p.id === savedTheme) || PRO_PATTERNS[0];
    applyPattern(preset);
    applyFontSize(savedFont);

    return () => observer.disconnect();
  }, [applyPattern, applyFontSize]);

  // Pomodoro Sayacı
  useEffect(() => {
    if (!pomodoroRunning) return;
    const timer = setInterval(() => {
      setPomodoroSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [pomodoroRunning]);

  const speakWord = (text: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = "en-GB";
      utter.rate = 0.92;
      window.speechSynthesis.speak(utter);
    }
  };

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const currentCard = OSYM_SYNONYM_PACK[synonymIndex];

  return (
    <div className="fixed bottom-4 left-4 z-[9990] font-sans">
      {panelOpen && (
        <div
          className="w-[350px] sm:w-[420px] max-h-[85vh] overflow-y-auto rounded-3xl p-5 mb-3 shadow-2xl border border-white/20 text-white"
          style={{ backgroundColor: "#0f172a" }}
        >
          {/* Üst Başlık */}
          <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-sky-500 flex items-center justify-center font-black text-slate-950 text-sm">
                DM
              </span>
              <div>
                <h4 className="font-extrabold text-base text-white leading-tight">
                  DİL MASTER Stüdyo
                </h4>
                <p className="text-xs text-sky-400">Desenler · Punto · ÖSYM Kartları · Pomodoro</p>
              </div>
            </div>
            <button
              onClick={() => setPanelOpen(false)}
              className="px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20 font-bold text-sm"
              aria-label="Kapat"
            >
              ✕
            </button>
          </div>

          {/* Sekme Seçici */}
          <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-900 rounded-2xl mb-4 border border-white/10">
            <button
              onClick={() => setActiveTab("themes")}
              className={`py-2 rounded-xl font-bold text-xs transition-all ${
                activeTab === "themes" ? "bg-sky-600 text-white shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              🎨 Desen & Punto
            </button>
            <button
              onClick={() => setActiveTab("synonyms")}
              className={`py-2 rounded-xl font-bold text-xs transition-all ${
                activeTab === "synonyms" ? "bg-sky-600 text-white shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              ⚡ Eş Anlamlılar
            </button>
            <button
              onClick={() => setActiveTab("pomodoro")}
              className={`py-2 rounded-xl font-bold text-xs transition-all ${
                activeTab === "pomodoro" ? "bg-sky-600 text-white shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              ⏱ Pomodoro
            </button>
          </div>

          {activeTab === "themes" && (
            <>
              {/* Yazı Boyutu Ayarı */}
              <div className="bg-slate-900/90 rounded-2xl p-3.5 mb-4 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm">🔍 Genel Yazı Büyüklüğü</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 font-extrabold text-sm">
                    {fontSizePx}px
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => applyFontSize(fontSizePx - 1)}
                    className="flex-1 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 font-bold text-sm"
                  >
                    A- Küçült
                  </button>
                  <button
                    onClick={() => applyFontSize(20)}
                    className="px-3 py-2 rounded-xl bg-sky-900/60 text-sky-300 font-bold text-sm"
                  >
                    Standart (20px)
                  </button>
                  <button
                    onClick={() => applyFontSize(fontSizePx + 1)}
                    className="flex-1 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 font-bold text-sm"
                  >
                    A+ Büyüt
                  </button>
                </div>
              </div>

              {/* Desenli Tema Listesi */}
              <div className="space-y-2 max-h-[260px] overflow-y-auto pr-1">
                {PRO_PATTERNS.map((item) => {
                  const active = selectedPattern === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => applyPattern(item)}
                      className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all ${
                        active
                          ? "border-sky-400 bg-sky-950/60"
                          : "border-white/10 bg-slate-900/60 hover:border-white/25"
                      }`}
                    >
                      <div>
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-white/10 mr-2 text-sky-300">
                          {item.category}
                        </span>
                        <span className="font-bold text-sm text-white">{item.name}</span>
                      </div>
                      {active && <span className="text-sky-400 font-extrabold text-sm">✔</span>}
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {activeTab === "synonyms" && (
            /* ÖSYM Eş Anlamlı Kelime ve Telaffuz Kartı */
            <div className="bg-slate-900 rounded-2xl p-4 border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  YDS · YDT · YÖKDİL Kilit Kelime #{synonymIndex + 1}
                </span>
                <button
                  onClick={() => speakWord(`${currentCard.word}. ${currentCard.sentence}`)}
                  className="px-3 py-1 rounded-lg bg-sky-600 hover:bg-sky-500 text-xs font-bold"
                >
                  🔊 Sesli Dinle
                </button>
              </div>
              <h5 className="text-2xl font-black text-white">{currentCard.word}</h5>
              <p className="text-sm font-bold text-emerald-400 mt-0.5">{currentCard.tr}</p>
              <div className="mt-3 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <p className="text-xs text-slate-300 font-semibold">Eş Anlamlıları (Synonyms):</p>
                <p className="text-sm font-bold text-sky-300 mt-0.5">{currentCard.synonyms}</p>
              </div>
              <p className="text-sm text-slate-200 mt-3 italic bg-slate-950/60 p-3 rounded-xl">
                &ldquo;{currentCard.sentence}&rdquo;
              </p>
              <p className="text-xs text-amber-300/90 mt-2 font-medium">
                💡 {currentCard.examTip}
              </p>
              <div className="flex justify-between mt-4 pt-3 border-t border-white/10">
                <button
                  onClick={() =>
                    setSynonymIndex((prev) => (prev === 0 ? OSYM_SYNONYM_PACK.length - 1 : prev - 1))
                  }
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 font-bold text-xs"
                >
                  ← Önceki
                </button>
                <button
                  onClick={() =>
                    setSynonymIndex((prev) => (prev + 1) % OSYM_SYNONYM_PACK.length)
                  }
                  className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 font-bold text-xs"
                >
                  Sonraki →
                </button>
              </div>
            </div>
          )}

          {activeTab === "pomodoro" && (
            /* YDS Odak Pomodoro Sayacı */
            <div className="bg-slate-900 rounded-2xl p-5 border border-white/10 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                🎯 YDS · YDT 25 Dakika Odak Bloğu
              </span>
              <div className="my-5">
                <span className="text-5xl font-black tracking-widest font-mono text-white">
                  {formatTime(pomodoroSeconds)}
                </span>
              </div>
              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => setPomodoroRunning(!pomodoroRunning)}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm transition-all"
                >
                  {pomodoroRunning ? "⏸ Duraklat" : "▶ Başlat"}
                </button>
                <button
                  onClick={() => {
                    setPomodoroRunning(false);
                    setPomodoroSeconds(25 * 60);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 font-bold text-sm transition-all"
                >
                  🔄 Sıfırla
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <button
        onClick={() => setPanelOpen(!panelOpen)}
        className="px-5 py-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-extrabold shadow-2xl border-2 border-white/20 flex items-center gap-2 hover:scale-105 transition-transform"
      >
        <span>🎨 Desenler · Punto · ÖSYM Kartları</span>
      </button>
    </div>
  );
};

export default DilMasterProSystem;

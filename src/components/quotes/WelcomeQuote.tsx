"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, X } from "lucide-react";

interface QuoteData {
  text: string;
  author?: string | null;
  category: string;
  animation?: string;
}

const CATEGORY_THEMES: Record<string, { bg: string; badge: string; label: string; emoji: string }> = {
  OZLU: {
    bg: "from-indigo-900 via-purple-900 to-fuchsia-950",
    badge: "bg-purple-500/30 text-purple-200 border-purple-400/40",
    label: "Günün Özlü Sözü",
    emoji: "🏛️",
  },
  MOTIVASYON: {
    bg: "from-rose-900 via-red-950 to-orange-950",
    badge: "bg-red-500/30 text-red-200 border-red-400/40",
    label: "YDS Zirve Motivasyonu",
    emoji: "🚀",
  },
  KOMIK: {
    bg: "from-emerald-950 via-teal-900 to-cyan-950",
    badge: "bg-emerald-500/30 text-emerald-200 border-emerald-400/40",
    label: "Günün YDS Neşesi",
    emoji: "😂",
  },
  ESPIRILI: {
    bg: "from-amber-950 via-yellow-950 to-stone-900",
    badge: "bg-amber-500/30 text-amber-200 border-amber-400/40",
    label: "Zeka & Mizah",
    emoji: "🃏",
  },
};

export default function WelcomeQuote() {
  const [quote, setQuote] = useState<QuoteData | null>(null);
  const [visible, setVisible] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Sayfada daha önce bu oturumda gösterildi mi?
    const hasSeen = sessionStorage.getItem("yds_welcome_seen");
    if (hasSeen) return;

    fetch("/api/quotes/random")
      .then((res) => res.json())
      .then((data: QuoteData) => {
        setQuote(data);
        setVisible(true);
        sessionStorage.setItem("yds_welcome_seen", "true");
      })
      .catch(() => {
        setQuote({
          text: "A1'den başlayan sen değil misin? Bak nerelere geldin, YDS'ye az kaldı! 🚀",
          category: "MOTIVASYON",
          author: "YDS Master",
        });
        setVisible(true);
      });

    // 3 saniye sonra "Derse Başla" butonu belirir (kullanıcı kuralı)
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible || !quote) return null;

  const theme = CATEGORY_THEMES[quote.category] || CATEGORY_THEMES.MOTIVASYON;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      >
        <motion.div
          initial={{ scale: 0.8, y: 30, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.8, y: 20, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
          className={`relative max-w-2xl w-full rounded-3xl p-8 md:p-12 text-center text-white bg-gradient-to-br ${theme.bg} border-2 border-white/20 shadow-2xl overflow-hidden`}
        >
          {/* Kapat ikonu */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
            aria-label="Kapat"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Kategori Rozeti */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider mb-6 shadow-md backdrop-blur-md">
            <span>{theme.emoji}</span>
            <span>{theme.label}</span>
          </div>

          {/* Söz Metni */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-snug tracking-tight drop-shadow-xl mb-4">
            “{quote.text}”
          </h2>

          {quote.author && (
            <p className="text-sm md:text-base text-yellow-300 font-semibold mb-8">
              — {quote.author}
            </p>
          )}

          {/* 3 Saniye Sonra Beliren Buton */}
          <div className="min-h-[56px] flex items-center justify-center">
            {showButton ? (
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClose}
                className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-300 text-slate-950 font-black text-lg shadow-xl hover:shadow-pink-500/50 transition-all"
              >
                <span>🚀 Derse Başla</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            ) : (
              <div className="flex items-center gap-2 text-white/60 text-xs font-mono animate-pulse">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>Görsel hafızan hazırlanıyor (3 sn)...</span>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

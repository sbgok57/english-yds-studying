"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Info, RotateCcw, Check, X, Sparkles, Volume2 } from "lucide-react";
import TTSPlayer, { ACCENT_OPTIONS, type AccentCode, type GenderCode } from "@/components/tts/TTSPlayer";
import Word3DScene from "./Word3DScene";
import WordPronunciationBar from "./WordPronunciationBar";
import { clientAudio } from "@/lib/tts/audio-client";
import { cn } from "@/lib/utils";

export interface WordCardData {
  id: string;
  english: string;
  turkish: string;
  definitionEn?: string;
  examples?: string[];
  synonyms?: string[];
  level?: string;
  type?: string;
  imageUrl?: string;
  funnyImageUrl?: string;
}

interface FlashcardProps {
  word: WordCardData;
  onKnow: (wordId: string, quality: number) => void;
  onDontKnow: (wordId: string) => void;
  totalCards?: number;
  currentIndex?: number;
}

const MOTIVATION_FEEDBACK_WRONG = [
  "Buna çok yaklaştın, bir dahakine kesin senindir! 💪",
  "Her deneme beyninde yeni bir sinaps oluşturuyor. Harikasın!",
  "Görsel hafızan bu kelimeyi kaydetti bile. Tekrar gördüğünde şaşıracaksın!",
  "Sorun değil, şampiyonlar da yanlış yaparak zirveye çıktı!",
];

export default function Flashcard({
  word,
  onKnow,
  onDontKnow,
  totalCards,
  currentIndex,
}: FlashcardProps) {
  const [flipped, setFlipped] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [mode, setMode] = useState<"2d" | "3d" | "4d">("2d");
  const [accent, setAccent] = useState<AccentCode>("en-GB");
  const [gender, setGender] = useState<GenderCode>("female");
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [feedbackType, setFeedbackType] = useState<"correct" | "wrong" | null>(null);
  const feedbackTimerRef = useRef<NodeJS.Timeout | null>(null);

  // SAFETY: Stop audio and clear pending feedback timer on card transition/unmount
  useEffect(() => {
    clientAudio.stopAll();
    setFlipped(false);
    return () => {
      if (feedbackTimerRef.current) {
        clearTimeout(feedbackTimerRef.current);
        feedbackTimerRef.current = null;
      }
    };
  }, [word.id]);

  // SAFETY: Parse stringified arrays with try/catch to prevent unhandled syntax error crashes
  const examplesList: string[] = (() => {
    const raw: unknown = word.examples;
    if (Array.isArray(raw)) return raw.filter((x): x is string => typeof x === "string");
    if (typeof raw === "string") {
      try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === "string") : [raw];
      } catch {
        return raw.trim() ? [raw] : [];
      }
    }
    return [];
  })();

  const synonymsList: string[] = (() => {
    const raw: unknown = word.synonyms;
    if (Array.isArray(raw)) return raw.filter((x): x is string => typeof x === "string");
    if (typeof raw === "string") {
      try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === "string") : [raw];
      } catch {
        return raw.trim() ? [raw] : [];
      }
    }
    return [];
  })();

  const handleFlip = () => {
    setFlipped(!flipped);
    if (navigator.vibrate) navigator.vibrate(20);
  };

  const handleKnowClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (feedbackType !== null) return;
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#00f0ff", "#ff00aa", "#ffff00", "#00ff88"],
    });
    setFeedbackType("correct");
    setFeedbackMessage("Harikasın! Beynin bu kelimeyi görsel olarak kodladı 🔥");
    if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);
    feedbackTimerRef.current = setTimeout(() => {
      setFeedbackType(null);
      setFeedbackMessage(null);
      setFlipped(false);
      onKnow(word.id, 5);
    }, 1200);
  };

  const handleDontKnowClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (feedbackType !== null) return;
    const randomEncourage =
      MOTIVATION_FEEDBACK_WRONG[Math.floor(Math.random() * MOTIVATION_FEEDBACK_WRONG.length)];
    setFeedbackType("wrong");
    setFeedbackMessage(randomEncourage);
    if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);
    feedbackTimerRef.current = setTimeout(() => {
      setFeedbackType(null);
      setFeedbackMessage(null);
      setFlipped(false);
      onDontKnow(word.id);
    }, 1800);
  };

  return (
    <div className="w-full max-w-md mx-auto relative select-none">
      {/* İlerleme ve Mod Seçici */}
      <div className="flex items-center justify-between mb-4">
        {totalCards !== undefined && currentIndex !== undefined && (
          <span className="glass-pill text-xs font-mono">
            {currentIndex + 1} / {totalCards}
          </span>
        )}

        <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md p-1 rounded-full border border-white/20">
          {(["2d", "3d", "4d"] as const).map((m) => (
            <button
              key={m}
              onClick={() => {
                setMode(m);
                if (m === "4d" && navigator.vibrate) navigator.vibrate([30, 50, 30]);
              }}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-black transition-all",
                mode === m
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow"
                  : "text-white/60 hover:text-white"
              )}
            >
              {m.toUpperCase()} {m === "4d" && "⚡"}
            </button>
          ))}
        </div>
      </div>

      {/* 3D WebGL Sahnesi Modu */}
      {mode === "3d" ? (
        <div className="space-y-4">
          <Word3DScene english={word.english} turkish={word.turkish} />
          <WordPronunciationBar word={word.english} sentence={examplesList[0]} />
          <div className="flex justify-center gap-3">
            <button
              onClick={handleKnowClick}
              className="flex-1 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 font-extrabold text-white shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              <Check className="w-5 h-5" /> Biliyorum
            </button>
            <button
              onClick={handleDontKnowClick}
              className="flex-1 py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 to-red-600 font-extrabold text-white shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              <X className="w-5 h-5" /> Tekrar Et
            </button>
          </div>
        </div>
      ) : (
        /* Standart 2D / 4D 3D Çevirmeli Kart */
        <div className="relative w-full h-[450px]" style={{ perspective: 1200 }}>
          {/* ====== ÜSTTE VE ŞEFFAF DETAY BUTONU (Kullanıcı Kuralı) ====== */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowDetail(true);
            }}
            className="absolute top-3 right-3 z-30 bg-white/20 backdrop-blur-md hover:bg-white/40 border border-white/40 text-yellow-300 font-bold px-3.5 py-1.5 rounded-full text-xs shadow-lg transition-all flex items-center gap-1.5"
            aria-label="Detay"
          >
            <Info className="w-4 h-4" />
            <span>Detay</span>
          </button>

          {/* 3D Çevrilen Kart Gövdesi */}
          <motion.div
            onClick={handleFlip}
            className="relative w-full h-full cursor-pointer"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 90, damping: 14 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* ÖN YÜZ (İngilizce Kelime) */}
            <div
              className={cn(
                "absolute inset-0 rounded-3xl p-6 flex flex-col items-center justify-between shadow-2xl overflow-hidden border-2 border-white/30",
                mode === "4d"
                  ? "bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 animate-glow"
                  : "bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500"
              )}
              style={{ backfaceVisibility: "hidden" }}
            >
              {/* Üst Rozetler */}
              <div className="w-full flex items-center justify-start gap-2">
                <span className="glass-pill text-[11px] font-bold">
                  {word.level || "YDS"}
                </span>
                <span className="glass-pill text-[11px] uppercase">
                  {word.type || "Kelime"}
                </span>
              </div>

              {/* Merkez Kelime ve Görsel */}
              <div className="text-center space-y-3 my-auto">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-4xl shadow-inner border border-white/20">
                  🎯
                </div>
                <h2 className="text-4xl font-black text-white drop-shadow-lg tracking-tight">
                  {word.english}
                </h2>
                {word.definitionEn && (
                  <p className="text-white/90 text-sm italic max-w-xs px-2 line-clamp-2">
                    "{word.definitionEn}"
                  </p>
                )}
              </div>

              {/* Alt Bilgi & Çevir İpucu */}
              <div className="w-full flex items-center justify-between text-xs text-white/80 border-t border-white/20 pt-3">
                <span className="flex items-center gap-1">
                  <RotateCcw className="w-3.5 h-3.5" /> Anlamı görmek için dokun
                </span>
                <div onClick={(e) => e.stopPropagation()}>
                  <TTSPlayer text={word.english} size="sm" showControls={false} />
                </div>
              </div>
            </div>

            {/* ARKA YÜZ (Türkçe Anlam + Örnekler) */}
            <div
              className="absolute inset-0 rounded-3xl p-6 flex flex-col items-center justify-between shadow-2xl overflow-hidden border-2 border-white/30 bg-gradient-to-br from-purple-700 via-fuchsia-700 to-indigo-800"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <div className="w-full flex items-center justify-between">
                <span className="glass-pill text-xs font-bold text-yellow-300">
                  Türkçe Anlamı
                </span>
                <span className="text-xs text-white/60">Tekrar çevirmek için tıkla</span>
              </div>

              {/* Türkçe Anlamı */}
              <div className="text-center my-auto space-y-3 w-full">
                <h3 className="text-3xl font-black text-yellow-300 drop-shadow-md">
                  {word.turkish}
                </h3>

                {examplesList.length > 0 && (
                  <div className="bg-black/30 rounded-2xl p-3 border border-white/10 text-left text-xs text-white/90">
                    <p className="font-semibold text-cyan-300 mb-1">📝 Örnek Cümle:</p>
                    <p className="italic leading-relaxed">{examplesList[0]}</p>
                  </div>
                )}
              </div>

              {/* Değerlendirme Butonları */}
              <div className="w-full flex gap-2 pt-3 border-t border-white/20" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={handleKnowClick}
                  className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black text-sm shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-1.5"
                >
                  <Check className="w-4 h-4" /> Biliyorum
                </button>
                <button
                  onClick={handleDontKnowClick}
                  className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-red-600 text-white font-black text-sm shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-1.5"
                >
                  <X className="w-4 h-4" /> Tekrar Et
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Aksan ve Cinsiyet Seçici TTS Çubuğu */}
      <div className="mt-4 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setGender("female")}
            className={cn(
              "px-2.5 py-1 rounded-full text-xs font-bold transition-all",
              gender === "female" ? "bg-pink-500 text-white shadow" : "text-white/60 hover:text-white"
            )}
          >
            👩 Kadın
          </button>
          <button
            onClick={() => setGender("male")}
            className={cn(
              "px-2.5 py-1 rounded-full text-xs font-bold transition-all",
              gender === "male" ? "bg-blue-500 text-white shadow" : "text-white/60 hover:text-white"
            )}
          >
            👨 Erkek
          </button>
        </div>

        <div className="flex items-center gap-1">
          {ACCENT_OPTIONS.map((a) => (
            <button
              key={a.code}
              onClick={() => setAccent(a.code)}
              className={cn(
                "p-1 rounded-lg text-base transition-transform",
                accent === a.code ? "bg-white/30 scale-110 shadow" : "opacity-60 hover:opacity-100"
              )}
              title={a.label}
            >
              {a.flag}
            </button>
          ))}
          <TTSPlayer text={word.english} accent={accent} gender={gender} size="sm" />
        </div>
      </div>

      {/* Geri Bildirim Toast / Overlay */}
      <AnimatePresence>
        {feedbackMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={cn(
              "absolute inset-x-4 top-1/3 z-40 p-6 rounded-3xl text-center shadow-2xl backdrop-blur-xl border border-white/30 text-white",
              feedbackType === "correct"
                ? "bg-gradient-to-br from-emerald-600/95 to-teal-700/95"
                : "bg-gradient-to-br from-amber-600/95 to-orange-700/95"
            )}
          >
            <p className="text-3xl mb-2">{feedbackType === "correct" ? "🎉" : "💡"}</p>
            <p className="font-extrabold text-lg leading-snug">{feedbackMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ====== ŞEFFAF DETAY MODALI (Üstten Açılır) ====== */}
      <AnimatePresence>
        {showDetail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDetail(false)}
            className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ y: -50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-indigo-950/90 via-purple-950/90 to-slate-950/90 backdrop-blur-2xl border-2 border-white/30 rounded-3xl p-6 md:p-8 max-w-lg w-full text-white shadow-2xl overflow-y-auto max-h-[80vh]"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-400">
                    {word.english}
                  </h3>
                  <p className="text-xl text-cyan-200 font-bold mt-1">{word.turkish}</p>
                </div>
                <button
                  onClick={() => setShowDetail(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {word.definitionEn && (
                <div className="mb-4 bg-white/10 p-4 rounded-2xl border border-white/10">
                  <p className="text-xs uppercase font-mono tracking-widest text-cyan-300 mb-1">
                    İngilizce Tanım
                  </p>
                  <p className="italic text-white/90">"{word.definitionEn}"</p>
                </div>
              )}

              {examplesList.length > 0 && (
                <div className="mb-4">
                  <p className="text-xs uppercase font-mono tracking-widest text-pink-300 mb-2 font-bold">
                    Örnek Cümleler
                  </p>
                  <ul className="space-y-2">
                    {examplesList.map((ex: string, idx: number) => (
                      <li
                        key={idx}
                        className="bg-black/30 p-3 rounded-xl border border-white/10 text-sm leading-relaxed"
                      >
                        • {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {synonymsList.length > 0 && (
                <div className="mb-6">
                  <p className="text-xs uppercase font-mono tracking-widest text-emerald-300 mb-2 font-bold">
                    Eş Anlamlılar (Synonyms)
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {synonymsList.map((syn: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold"
                      >
                        {syn}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Görsel Hafıza Kodu */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-200 text-xs">
                <p className="font-bold flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                  🧠 Görsel Hafıza İpucu:
                </p>
                <p>
                  Bu kelimeyi zihninde canlandırırken Türkçe anlamıyla komik veya çarpıcı bir zihinsel sahne eşleştir!
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { RotateCcw, Trophy, Sparkles } from "lucide-react";

export interface Pair {
  id: string;
  english: string;
  turkish: string;
  imageUrl?: string;
}

type Card = {
  key: string;
  pairId: string;
  face: "word" | "image";
  label: string;
  img?: string;
};

const triggerConfetti = (opts: any) => {
  try {
    if (typeof window !== "undefined") confetti(opts);
  } catch (err) {
    console.warn("Confetti error:", err);
  }
};

export default function MatchingGame({ pairs }: { pairs: Pair[] }) {
  // 6 çift = 12 kart; kelime kartı + anlam/resim kartı eşleşir (görsel hafıza!)
  const cards = useMemo<Card[]>(() => {
    const list = pairs.slice(0, 6).flatMap((p) => [
      { key: `${p.id}-w`, pairId: p.id, face: "word" as const, label: p.english },
      { key: `${p.id}-i`, pairId: p.id, face: "image" as const, label: p.turkish, img: p.imageUrl },
    ]);
    return list.sort(() => Math.random() - 0.5);
  }, [pairs]);

  const [flipped, setFlipped] = useState<string[]>([]);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [moves, setMoves] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // SAFETY: Clear timeouts on unmount to prevent leaks and setState on unmounted component
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const flip = (card: Card) => {
    if (flipped.length === 2 || flipped.includes(card.key) || matched.has(card.pairId)) return;
    const next = [...flipped, card.key];
    setFlipped(next);

    if (next.length === 2) {
      setMoves((m) => m + 1);
      const [a, b] = next.map((k) => cards.find((c) => c.key === k)!);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      if (a && b && a.pairId === b.pairId) {
        timeoutRef.current = setTimeout(() => {
          setMatched((prev) => {
            const s = new Set(prev).add(a.pairId);
            if (s.size === Math.min(6, pairs.length)) {
              triggerConfetti({ particleCount: 250, spread: 110, origin: { y: 0.5 } });
            }
            return s;
          });
          setFlipped([]);
          if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(50);
        }, 500);
      } else {
        timeoutRef.current = setTimeout(() => setFlipped([]), 900);
      }
    }
  };

  const isCompleted = matched.size === Math.min(6, pairs.length) && matched.size > 0;

  const restartGame = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setFlipped([]);
    setMatched(new Set());
    setMoves(0);
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      {/* Skor ve Hamle Paneli */}
      <div className="flex items-center justify-between bg-slate-900/80 border border-white/10 rounded-2xl p-4 font-black text-white text-xs md:text-sm">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-yellow-300" /> 3D Kart Eşleştirme
        </span>
        <div className="flex items-center gap-4">
          <span>Hamle: <strong className="text-cyan-300 font-mono">{moves}</strong></span>
          <span>Eşleşen: <strong className="text-emerald-300 font-mono">{matched.size}/{Math.min(6, pairs.length)}</strong></span>
          <button
            onClick={restartGame}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Sıfırla"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {isCompleted && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="rounded-2xl p-6 bg-gradient-to-r from-emerald-600 to-teal-700 text-center text-white space-y-2 shadow-2xl"
        >
          <Trophy className="w-12 h-12 text-yellow-300 mx-auto" />
          <h3 className="text-xl font-black">Tebrikler! Tüm Kartları Eşleştirdiniz! 🎉</h3>
          <p className="text-xs text-white/90">
            Toplam {moves} hamlede harika bir görsel hafıza performansı sergilediniz.
          </p>
          <button
            onClick={restartGame}
            className="mt-3 px-6 py-2.5 rounded-full bg-white text-slate-950 font-extrabold text-xs shadow-lg hover:scale-105 transition-transform"
          >
            Tekrar Oyna 🔄
          </button>
        </motion.div>
      )}

      {/* 3D Kart Izgarası (4x3) */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        {cards.map((c) => {
          const isOpen = flipped.includes(c.key) || matched.has(c.pairId);
          const isCardMatched = matched.has(c.pairId);

          return (
            <div key={c.key} style={{ perspective: 1000 }} className="aspect-square">
              <motion.div
                onClick={() => flip(c)}
                animate={{
                  rotateY: isOpen ? 180 : 0,
                  scale: isCardMatched ? 0.95 : 1,
                }}
                transition={{ duration: 0.45 }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative w-full h-full cursor-pointer select-none"
              >
                {/* Kapalı Yüz */}
                <div
                  style={{ backfaceVisibility: "hidden" }}
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-700 to-purple-800 flex items-center justify-center text-3xl shadow-xl border-2 border-white/20 hover:border-yellow-300/60 transition-colors"
                >
                  <span className="filter drop-shadow">❓</span>
                </div>

                {/* Açık Yüz */}
                <div
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                  className={`absolute inset-0 rounded-2xl flex flex-col items-center justify-center p-2 shadow-xl text-center border-2 transition-all ${
                    isCardMatched
                      ? "bg-emerald-900/90 border-emerald-400 text-emerald-100"
                      : "bg-slate-900 border-white/20 text-white"
                  }`}
                >
                  {c.face === "image" && c.img ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={c.img}
                      alt={c.label}
                      loading="lazy"
                      className="w-full h-1/2 object-cover rounded-lg mb-1"
                    />
                  ) : null}
                  <span
                    className={`font-black tracking-tight leading-tight line-clamp-3 ${
                      c.face === "word" ? "text-sm text-yellow-300" : "text-xs text-cyan-200"
                    }`}
                  >
                    {c.label}
                  </span>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

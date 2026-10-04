"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Heart, Trophy, RotateCcw } from "lucide-react";
import { logGameComplete } from "@/lib/activity-logger";

export interface BalloonQuestion {
  prompt: string;          // "carry out = ?" veya "She ___ since 2015. (live)"
  choices: string[];       // 4 balon
  answerIndex: number;
}

const COLORS = [
  "from-red-400 to-rose-600",
  "from-blue-400 to-indigo-600",
  "from-emerald-400 to-teal-600",
  "from-amber-400 to-orange-600",
];

const triggerConfetti = (opts: any) => {
  try {
    if (typeof window !== "undefined") confetti(opts);
  } catch (err) {
    console.warn("Confetti error:", err);
  }
};

export default function BalloonPop({ questions }: { questions: BalloonQuestion[] }) {
  const [qi, setQi] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [popped, setPopped] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const safeQuestions = questions && questions.length > 0 ? questions : [
    {
      prompt: "carry out = ?",
      choices: ["yürütmek / uygulamak", "iptal etmek", "ertelemek", "vazgeçmek"],
      answerIndex: 0,
    },
    {
      prompt: "mitigate = ?",
      choices: ["hafifletmek / azaltmak", "kötüleştirmek", "hızlandırmak", "ortaya çıkarmak"],
      answerIndex: 0,
    },
    {
      prompt: "She _____ in Ankara since 2015.",
      choices: ["has lived", "lived", "is living", "had lived"],
      answerIndex: 0,
    },
  ];

  const q = safeQuestions[qi] || safeQuestions[0];

  const pop = (i: number) => {
    if (popped !== null || gameOver) return;
    setPopped(i);
    const correct = i === q.answerIndex;

    if (correct) {
      setScore((s) => s + 10);
      triggerConfetti({ particleCount: 45, spread: 55, scalar: 0.65, origin: { y: 0.4 } });
      if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(40);
    } else {
      setLives((l) => l - 1);
      if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate([80, 40, 80]);
    }

    timeoutRef.current = setTimeout(() => {
      setPopped(null);
      if (!correct && lives - 1 <= 0) {
        setGameOver(true);
        void logGameComplete({
          gameId: "balloon-pop",
          gameTitle: "Balon Patlatma",
          score,
          streak: 0,
          timeSpentMinutes: 3,
          details: `Balon Patlatma tamamlandı: ${score} Puan`,
        });
        return;
      }
      if (qi + 1 >= safeQuestions.length) {
        setGameOver(true);
        const finalScore = score + (correct ? 10 : 0);
        void logGameComplete({
          gameId: "balloon-pop",
          gameTitle: "Balon Patlatma",
          score: finalScore,
          streak: Math.round(finalScore / 10),
          timeSpentMinutes: 3,
          wordsPlayed: safeQuestions.length,
          details: `Tüm Balonlar Tamamlandı: ${finalScore} Puan`,
        });
        return;
      }
      setQi((n) => n + 1);
    }, 900);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (gameOver) {
    const isWinner = score >= safeQuestions.length * 6;
    return (
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-md mx-auto mt-6 rounded-3xl p-8 text-center text-white bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-950 border-2 border-purple-500/40 shadow-2xl space-y-4"
      >
        <p className="text-5xl">{isWinner ? "🏆" : "💪"}</p>
        <h3 className="text-3xl font-black">Toplam Skor: {score}</h3>
        <p className="text-sm text-white/85">
          {isWinner
            ? "Mükemmel refleksler! Balonları tek tek avladınız!"
            : "Her patlayan balon yeni bir bilgi! Tekrar oynayıp rekorunuzu kırın!"}
        </p>
        <button
          onClick={() => {
            setQi(0);
            setScore(0);
            setLives(3);
            setGameOver(false);
          }}
          className="mt-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-950 font-black px-8 py-3.5 rounded-full shadow-lg hover:scale-105 transition-transform text-sm inline-flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" /> Tekrar Oyna
        </button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-lg mx-auto p-4 min-h-[500px] bg-gradient-to-b from-sky-950 via-slate-900 to-indigo-950 border border-white/15 rounded-3xl overflow-hidden relative shadow-2xl flex flex-col justify-between">
      {/* Üst Skor & Can Barı */}
      <div className="flex justify-between items-center font-black text-xs md:text-sm text-white bg-black/30 backdrop-blur rounded-2xl p-3 border border-white/10 mb-3">
        <span className="text-yellow-300">⭐ Skor: {score}</span>
        <div className="flex items-center gap-1 text-base">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className={i < lives ? "text-rose-400" : "text-white/20"}>
              ❤️
            </span>
          ))}
        </div>
        <span className="text-cyan-300 font-mono">
          {qi + 1} / {safeQuestions.length}
        </span>
      </div>

      {/* Soru / İpucu Kutusu */}
      <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-4 text-center font-extrabold text-base md:text-lg text-white shadow-md my-2">
        {q.prompt}
      </div>

      {/* Uçuşan Balonlar (2x2) */}
      <div className="grid grid-cols-2 gap-4 px-2 my-auto">
        <AnimatePresence mode="wait">
          {q.choices.map((c, i) => (
            <motion.button
              key={`${qi}-${i}`}
              initial={{ y: 150, opacity: 0 }}
              animate={{
                y: popped === i ? -30 : [0, -10, 0],
                opacity: 1,
                scale: popped === i ? [1, 1.4, 0] : 1, // Patlama animasyonu!
              }}
              transition={
                popped === i
                  ? { duration: 0.45 }
                  : {
                      y: { repeat: Infinity, duration: 2.2 + i * 0.3 },
                      opacity: { duration: 0.35 },
                    }
              }
              onClick={() => pop(i)}
              className={`relative h-28 rounded-3xl bg-gradient-to-br ${COLORS[i % COLORS.length]} shadow-xl flex items-center justify-center p-3 text-white font-extrabold text-xs md:text-sm text-center leading-tight hover:scale-105 transition-transform border-2 border-white/30 ${
                popped !== null && i === q.answerIndex
                  ? "ring-4 ring-yellow-300 shadow-yellow-500/50"
                  : ""
              }`}
            >
              <span className="relative z-10 drop-shadow">{c}</span>
              {/* Balon Düğümü ve İpi */}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/60" />
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-white/40" />
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {/* Patlama Geri Bildirim Metni */}
      {popped !== null && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`text-center font-black text-sm py-2.5 px-4 rounded-2xl shadow-xl mt-2 ${
            popped === q.answerIndex
              ? "bg-emerald-500/90 text-white"
              : "bg-rose-500/90 text-white"
          }`}
        >
          {popped === q.answerIndex ? "🎉 Patlattın! Doğru Cevap!" : "💨 Kaçtı! Doğru şık parlıyor 👆"}
        </motion.div>
      )}
    </div>
  );
}

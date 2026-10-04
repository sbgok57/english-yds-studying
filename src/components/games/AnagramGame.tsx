"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { RotateCcw, Check, Sparkles } from "lucide-react";
import { logGameComplete } from "@/lib/activity-logger";

interface AnagramItem {
  word: string;
  meaning: string;
  hint: string;
}

const WORDS: AnagramItem[] = [
  { word: "MITIGATE", meaning: "hafifletmek, azaltmak", hint: "M ile başlayan ve riski düşüren fiil" },
  { word: "PIONEER", meaning: "öncü, yol açan", hint: "İlk adımı atan yenilikçi lider" },
  { word: "DRASTIC", meaning: "ciddi, köklü", hint: "Sert ve derin etkili değişim" },
  { word: "PREVALENT", meaning: "yaygın, hâkim", hint: "Toplumda sıkça görülen durum" },
];

export default function AnagramGame() {
  const [index, setIndex] = useState(0);
  const [currentGuess, setCurrentGuess] = useState<string[]>([]);
  const [solved, setSolved] = useState(false);
  const [score, setScore] = useState(0);

  const item = WORDS[index];
  const targetLetters = item.word.split("");

  // Karıştırılmış harfler
  const [scrambled, setScrambled] = useState<string[]>(() =>
    [...targetLetters].sort(() => Math.random() - 0.5)
  );

  const pickLetter = (letter: string, i: number) => {
    if (solved) return;
    const newScrambled = [...scrambled];
    newScrambled.splice(i, 1);
    setScrambled(newScrambled);

    const nextGuess = [...currentGuess, letter];
    setCurrentGuess(nextGuess);

    if (nextGuess.join("") === item.word) {
      setSolved(true);
      const nextScore = score + 20;
      setScore(nextScore);
      void logGameComplete({
        gameId: "anagram-game",
        gameTitle: "Anagram Harf Dizme",
        score: nextScore,
        streak: 1,
        timeSpentMinutes: 2,
        wordsPlayed: 1,
        details: `Doğru harf dizilimi: ${item.word} = ${item.meaning}`,
      });
      try {
        confetti({ particleCount: 80, spread: 70 });
      } catch (err) {
        // PERF: Confetti is optional visual enhancement
        void err;
      }
      if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate([40, 40, 40]);
    }
  };

  const resetWord = () => {
    setCurrentGuess([]);
    setScrambled([...targetLetters].sort(() => Math.random() - 0.5));
    setSolved(false);
  };

  const nextWord = () => {
    const nextIdx = (index + 1) % WORDS.length;
    setIndex(nextIdx);
    const nextItem = WORDS[nextIdx];
    setCurrentGuess([]);
    setScrambled([...nextItem.word.split("")].sort(() => Math.random() - 0.5));
    setSolved(false);
  };

  return (
    <div className="max-w-md mx-auto p-4 text-center space-y-5">
      {/* Skor ve İpucu */}
      <div className="flex justify-between items-center bg-slate-900/80 rounded-2xl p-3 border border-white/10 text-xs font-bold text-white">
        <span className="text-yellow-300">⭐ Skor: {score}</span>
        <span className="text-cyan-300 font-mono">Kelime: {index + 1}/{WORDS.length}</span>
      </div>

      <div className="card-vibrant p-5 space-y-2">
        <span className="glass-pill text-[10px] text-pink-300 font-mono">Türkçe Anlamı</span>
        <h4 className="text-xl font-black text-cyan-200">🇹🇷 {item.meaning}</h4>
        <p className="text-xs text-white/70 italic">💡 İpucu: {item.hint}</p>
      </div>

      {/* Tahmin Edilen Harf Kutuları */}
      <div className="flex justify-center gap-1.5 flex-wrap min-h-[50px]">
        {targetLetters.map((_, i) => (
          <div
            key={i}
            className={`w-10 h-12 rounded-xl border-2 flex items-center justify-center font-black text-lg ${
              currentGuess[i]
                ? "border-cyan-400 bg-cyan-500/20 text-white"
                : "border-dashed border-white/30 bg-white/5 text-transparent"
            }`}
          >
            {currentGuess[i] || "_"}
          </div>
        ))}
      </div>

      {/* Seçilebilir Karışık Harfler */}
      <div className="flex justify-center gap-2 flex-wrap pt-2">
        {scrambled.map((l, i) => (
          <motion.button
            key={i}
            whileTap={{ scale: 0.9 }}
            onClick={() => pickLetter(l, i)}
            className="w-11 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white font-black text-lg shadow-lg hover:scale-110 transition-transform border border-white/20"
          >
            {l}
          </motion.button>
        ))}
      </div>

      {/* Kontrol Butonları */}
      <div className="flex justify-center gap-3 pt-3">
        <button
          onClick={resetWord}
          className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white flex items-center gap-1.5"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Temizle
        </button>
        {solved && (
          <button
            onClick={nextWord}
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-xs font-black text-white shadow-lg flex items-center gap-1.5 hover:scale-105 transition-transform"
          >
            <Check className="w-4 h-4" /> Sonraki Kelime &rarr;
          </button>
        )}
      </div>
    </div>
  );
}

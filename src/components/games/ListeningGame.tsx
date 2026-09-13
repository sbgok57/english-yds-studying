"use client";

import { useEffect, useState, useCallback } from "react";
import { WORDS } from "@/lib/data-vocabulary";
import Celebration from "@/components/Celebration";

export default function ListeningGame() {
  const [targetWord, setTargetWord] = useState<{ word: string; tr: string; type: string; example: string } | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [celebrate, setCelebrate] = useState(false);

  const speak = useCallback((word: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    utterance.rate = 0.85;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  }, []);

  const loadQuestion = useCallback(() => {
    if (!WORDS.length) return;
    const target = WORDS[Math.floor(Math.random() * WORDS.length)];
    setTargetWord({ word: target.word, tr: target.tr, type: target.type, example: target.example });
    setSelected(null);

    // Pick 3 distractors
    const distractors = WORDS.filter((w) => w.word !== target.word)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map((w) => w.tr);

    const allOpts = [target.tr, ...distractors].sort(() => 0.5 - Math.random());
    setOptions(allOpts);

    // Play word audio
    setTimeout(() => {
      speak(target.word);
    }, 200);
  }, [speak]);

  useEffect(() => {
    loadQuestion();
  }, [loadQuestion]);

  const handleSelect = (idx: number) => {
    if (selected !== null || !targetWord) return;
    setSelected(idx);

    const isCorrect = options[idx] === targetWord.tr;
    if (isCorrect) {
      const nextStreak = streak + 1;
      setScore((s) => s + 10);
      setStreak(nextStreak);
      if (nextStreak > 0 && nextStreak % 5 === 0) {
        setCelebrate(true);
      }
    } else {
      setStreak(0);
    }
  };

  return (
    <div className="card-vibrant p-6 sm:p-10 max-w-2xl mx-auto text-center space-y-6">
      <Celebration
        show={celebrate}
        onDone={() => setCelebrate(false)}
        message={`${streak} Doğru Seri! 🎧👑`}
        sub="Kulağın YDS'ye tam alıştı kanka!"
        short
      />

      <div className="flex items-center justify-between border-b border-white/10 pb-4 flex-wrap gap-3">
        <div className="text-left">
          <span className="text-xs font-mono text-white/50">İşitsel Hafıza</span>
          <h2 className="text-2xl font-black">🎧 Dinle & Seç</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-3 py-1.5 rounded-xl bg-purple-500/20 border border-purple-400/30 text-xs font-bold text-purple-300">
            🔥 Seri: {streak}
          </div>
          <div className="px-3 py-1.5 rounded-xl bg-cyan-500/20 border border-cyan-400/30 text-xs font-bold text-cyan-300">
            ⭐ Puan: {score}
          </div>
        </div>
      </div>

      {/* Ses Butonu ve Dalga */}
      {targetWord && (
        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col items-center justify-center space-y-4">
          <button
            onClick={() => speak(targetWord.word)}
            className={`w-24 h-24 rounded-full flex items-center justify-center text-4xl shadow-2xl transition-all transform hover:scale-110 active:scale-95 ${
              isPlaying
                ? "bg-gradient-to-tr from-cyan-400 to-blue-500 text-white animate-pulse shadow-cyan-500/50"
                : "bg-gradient-to-tr from-pink-500 via-purple-600 to-cyan-400 text-white shadow-purple-500/30"
            }`}
            title="Kelimeyi Dinle"
          >
            {isPlaying ? "🔊" : "🔈"}
          </button>
          <div className="space-y-1">
            <p className="text-sm font-bold text-white/80">
              {isPlaying ? "Dinleniyor..." : "Tekrar Dinlemek İçin Tıkla"}
            </p>
            <p className="text-xs text-white/40">
              Duyduğun kelimenin doğru Türkçe karşılığını seç.
            </p>
          </div>

          {selected !== null && (
            <div className="pt-2 text-xl font-black text-cyan-300 anim-pop">
              "{targetWord.word}"
            </div>
          )}
        </div>
      )}

      {/* Seçenekler */}
      <div className="grid sm:grid-cols-2 gap-3 max-w-lg mx-auto">
        {options.map((opt, i) => {
          const isChosen = selected === i;
          const isCorrect = targetWord && opt === targetWord.tr;
          let btnCls = "bg-white/5 border-white/15 hover:bg-white/10 text-white/85";

          if (selected !== null) {
            if (isCorrect) {
              btnCls = "bg-emerald-500/20 border-emerald-400 text-emerald-200 font-bold shadow-lg shadow-emerald-500/20";
            } else if (isChosen) {
              btnCls = "bg-rose-500/20 border-rose-400 text-rose-200";
            } else {
              btnCls = "bg-white/5 border-white/5 text-white/30";
            }
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={selected !== null}
              className={`p-4 rounded-2xl border text-left text-sm font-medium transition-all ${btnCls}`}
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-xl bg-white/10 text-xs font-bold flex items-center justify-center shrink-0">
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="line-clamp-2">{opt}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Sonuç & Sonraki */}
      {selected !== null && targetWord && (
        <div className="space-y-4 anim-pop pt-2">
          {targetWord.example && (
            <p className="text-xs text-white/60 italic max-w-md mx-auto">
              Örnek: "{targetWord.example}"
            </p>
          )}
          <button
            onClick={loadQuestion}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold hover:scale-105 transition-transform shadow-lg shadow-cyan-500/30"
          >
            Sonraki Soru →
          </button>
        </div>
      )}
    </div>
  );
}

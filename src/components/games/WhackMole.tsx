"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { WORDS } from "@/lib/data-vocabulary";
import Celebration from "@/components/Celebration";

interface Mole {
  id: number;
  wordTr: string;
  isTarget: boolean;
  active: boolean;
}

export default function WhackMole() {
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [targetWord, setTargetWord] = useState<{ word: string; tr: string; type: string } | null>(null);
  const [moles, setMoles] = useState<Mole[]>(() =>
    Array.from({ length: 9 }, (_, i) => ({ id: i, wordTr: "", isTarget: false, active: false }))
  );
  const [feedback, setFeedback] = useState<string | null>(null);
  const [celebrate, setCelebrate] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startNewRound = useCallback(() => {
    if (!WORDS.length) return;
    const target = WORDS[Math.floor(Math.random() * WORDS.length)];
    setTargetWord({ word: target.word, tr: target.tr, type: target.type });

    // Pick 2-3 random holes to activate
    const availableHoles = [0, 1, 2, 3, 4, 5, 6, 7, 8].sort(() => 0.5 - Math.random());
    const targetHole = availableHoles[0];
    const decoyHoles = availableHoles.slice(1, 3);

    // Pick distractors
    const distractors = WORDS.filter((w) => w.word !== target.word)
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);

    setMoles((prev) =>
      prev.map((m) => {
        if (m.id === targetHole) {
          return { id: m.id, wordTr: target.tr, isTarget: true, active: true };
        }
        if (decoyHoles.includes(m.id)) {
          const decoyIndex = decoyHoles.indexOf(m.id);
          return { id: m.id, wordTr: distractors[decoyIndex]?.tr || "başka anlam", isTarget: false, active: true };
        }
        return { id: m.id, wordTr: "", isTarget: false, active: false };
      })
    );
  }, []);

  useEffect(() => {
    startNewRound();
    const timer = timerRef;
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [startNewRound]);

  const whack = (mole: Mole) => {
    if (!mole.active) return;

    if (mole.isTarget) {
      const nextScore = score + 10;
      const nextStreak = streak + 1;
      setScore(nextScore);
      setStreak(nextStreak);
      setFeedback("🎯 Tam İsabet!");

      if (nextStreak > 0 && nextStreak % 5 === 0) {
        setCelebrate(true);
      }
    } else {
      setStreak(0);
      setFeedback("❌ Yanlış Köstebek!");
    }

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setFeedback(null);
      startNewRound();
    }, 450);
  };

  return (
    <div className="card-vibrant p-6 sm:p-10 max-w-2xl mx-auto text-center space-y-6">
      <Celebration
        show={celebrate}
        onDone={() => setCelebrate(false)}
        message={`${streak} Seri Yaptın Kral! 🐹🔨`}
        sub="Köstebekler senden kaçamaz!"
        short
      />

      <div className="flex items-center justify-between border-b border-white/10 pb-4 flex-wrap gap-3">
        <div className="text-left">
          <span className="text-xs font-mono text-white/50">Oyun Modu</span>
          <h2 className="text-2xl font-black">🐹 Köstebek Vur</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-3 py-1.5 rounded-xl bg-purple-500/20 border border-purple-400/30 text-xs font-bold text-purple-300">
            🔥 Seri: {streak}
          </div>
          <div className="px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-xs font-bold text-emerald-300">
            ⭐ Puan: {score}
          </div>
        </div>
      </div>

      {/* Hedef Kelime */}
      {targetWord && (
        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-pink-500/20 to-purple-500/20 border border-white/15">
          <div className="text-xs font-mono text-amber-300 uppercase tracking-widest mb-1">
            Hedef Kelimeyi Vur:
          </div>
          <div className="text-3xl font-black text-white flex items-center justify-center gap-2">
            <span>{targetWord.word}</span>
            <span className="text-xs font-normal text-white/50 px-2 py-0.5 rounded-md bg-white/10">
              {targetWord.type}
            </span>
          </div>
          <p className="text-xs text-white/60 mt-1">
            Bu kelimenin Türkçe karşılığını taşıyan köstebeğe hızlıca tıkla! 🔨
          </p>
        </div>
      )}

      {feedback && (
        <div className="text-sm font-bold text-cyan-300 anim-pop">{feedback}</div>
      )}

      {/* 3x3 Delik Izgarası */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto pt-2">
        {moles.map((mole) => (
          <button
            key={mole.id}
            onClick={() => whack(mole)}
            className={`h-28 rounded-2xl border transition-all relative overflow-hidden flex flex-col items-center justify-center p-2 text-center select-none ${
              mole.active
                ? "bg-gradient-to-b from-slate-700 to-slate-800 border-amber-400/40 hover:scale-105 active:scale-95 shadow-lg shadow-black/40 cursor-pointer"
                : "bg-slate-900/60 border-white/5 cursor-default opacity-40"
            }`}
          >
            {mole.active ? (
              <div className="anim-pop space-y-1">
                <div className="text-3xl animate-bounce">🐹</div>
                <div className="text-[11px] sm:text-xs font-bold text-white line-clamp-2 leading-tight">
                  {mole.wordTr}
                </div>
              </div>
            ) : (
              <div className="w-8 h-3 rounded-full bg-black/40 mx-auto" />
            )}
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-3 pt-2">
        <button
          onClick={startNewRound}
          className="px-5 py-2 rounded-full border border-white/20 text-xs font-bold text-white/70 hover:text-white hover:bg-white/10 transition-all"
        >
          ⏭️ Başka Kelimeye Geç
        </button>
      </div>
    </div>
  );
}

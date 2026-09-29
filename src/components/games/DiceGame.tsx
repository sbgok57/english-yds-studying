"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import { WORDS } from "@/lib/data-vocabulary";
import Celebration from "@/components/Celebration";

const FACES = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

function shuffle<T>(a: T[]): T[] {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

export default function DiceGame() {
  const [face, setFace] = useState(0);
  const [rolling, setRolling] = useState(false);
  const [phase, setPhase] = useState<"roll" | "ask">("roll");
  const [word, setWord] = useState<(typeof WORDS)[number] | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [picked, setPicked] = useState<number | null>(null);
  const [points, setPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  const [celebrate, setCelebrate] = useState(false);
  const [msg, setMsg] = useState("");
  const [sub, setSub] = useState("");
  const [used, setUsed] = useState<number[]>([]);
  const rollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // SAFETY: Clear interval timer on unmount to prevent leaks and setState on unmounted component
  useEffect(() => {
    return () => {
      if (rollIntervalRef.current) {
        clearInterval(rollIntervalRef.current);
        rollIntervalRef.current = null;
      }
    };
  }, []);

  const available = useMemo(() => WORDS.filter((w) => !used.includes(w.id)), [used]);

  const roll = () => {
    if (rolling) return;
    if (rollIntervalRef.current) {
      clearInterval(rollIntervalRef.current);
      rollIntervalRef.current = null;
    }
    setRolling(true);
    setPicked(null);
    setPhase("roll");
    // zar animasyonu
    let ticks = 0;
    rollIntervalRef.current = setInterval(() => {
      ticks++;
      setFace(Math.floor(Math.random() * 6));
      if (ticks >= 10) {
        if (rollIntervalRef.current) {
          clearInterval(rollIntervalRef.current);
          rollIntervalRef.current = null;
        }
        const final = Math.floor(Math.random() * 6);
        setFace(final);
        setRolling(false);
        // kelime seç
        const pool = available.length > 0 ? available : WORDS;
        const w = pool[Math.floor(Math.random() * pool.length)];
        const distract = shuffle(WORDS.filter((x) => x.word !== w.word))
          .slice(0, 3)
          .map((x) => x.tr);
        setWord(w);
        setOptions(shuffle([w.tr, ...distract]));
        setUsed((u) => [...u, w.id]);
        setPhase("ask");
      }
    }, 90);
  };

  const choose = (i: number) => {
    if (picked !== null || !word) return;
    setPicked(i);
    if (options[i] === word.tr) {
      const gain = face + 1;
      setPoints((p) => p + gain);
      setStreak((s) => s + 1);
      setMsg(`Doğru kanka! +${gain} puan 🎆`);
      setSub(`${word.word} = ${word.tr}`);
      setCelebrate(true);
    } else {
      setStreak(0);
      setMsg("Olmadı kanka! 💪");
      setSub(`Doğrusu: ${word.word} = ${word.tr}`);
    }
  };

  const reset = () => {
    setPoints(0);
    setStreak(0);
    setUsed([]);
    setPhase("roll");
    setPicked(null);
    setWord(null);
    setFace(0);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Celebration show={celebrate} onDone={() => setCelebrate(false)} message={msg} sub={sub} short />

      <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
        <div className="text-sm text-white/60">
          Puan: <b className="text-emerald-300">{points}</b> · Seri: <b className="text-orange-300">{streak}</b>
        </div>
        <button
          onClick={reset}
          className="px-4 py-2 rounded-full text-sm font-bold border border-white/20 hover:bg-white/10 transition-all"
        >
          🔄 Sıfırla
        </button>
      </div>

      <div className="card-vibrant p-8 text-center">
        {/* Zar */}
        <button
          onClick={roll}
          disabled={rolling}
          className={`text-8xl transition-transform select-none ${rolling ? "animate-pulse scale-95" : "hover:scale-110"}`}
          title="Zarı at!"
        >
          {FACES[face]}
        </button>
        <p className="text-xs text-white/50 mt-1">
          {phase === "roll" ? "🎲 Zarı at, kelime gelsin!" : `Zar ${face + 1} gösterdi — ${face + 1} puan kapıda!`}
        </p>

        {!rolling && phase === "roll" && (
          <button
            onClick={roll}
            className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 font-black shadow-lg shadow-yellow-500/30 hover:scale-105 transition-transform"
          >
            🎲 Zarı At!
          </button>
        )}

        {phase === "ask" && word && (
          <div className="mt-6 anim-pop">
            <p className="text-xs text-white/50 mb-1">Bu kelimenin anlamı ne?</p>
            <p className="text-3xl font-black gradient-text mb-4">{word.word}</p>
            <div className="grid grid-cols-2 gap-2">
              {options.map((o, i) => {
                const answered = picked !== null;
                const isAnswer = o === word.tr;
                const isChosen = i === picked;
                let cls = "border-white/15 bg-white/[0.04] hover:border-white/35 text-white/85";
                if (answered) {
                  if (isAnswer) cls = "border-emerald-400/70 bg-emerald-500/20 text-emerald-200 font-bold";
                  else if (isChosen) cls = "border-rose-400/70 bg-rose-500/20 anim-shake text-rose-200";
                  else cls = "border-white/10 opacity-50 text-white/40";
                }
                return (
                  <button
                    key={i}
                    onClick={() => choose(i)}
                    disabled={answered}
                    className={`rounded-xl border px-4 py-3 font-bold transition-all ${cls}`}
                  >
                    {o}
                    {answered && isAnswer && " ✅"}
                  </button>
                );
              })}
            </div>
            {picked !== null && (
              <button
                onClick={roll}
                className="mt-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 font-bold hover:scale-105 transition-transform text-white"
              >
                🎲 Tekrar Zar At →
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

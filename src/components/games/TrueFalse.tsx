"use client";

import { useMemo, useState } from "react";
import Celebration from "@/components/Celebration";
import { logGameComplete } from "@/lib/activity-logger";

interface TF {
  s: string;
  correct: boolean;
  why: string;
}

const STATEMENTS: TF[] = [
  { s: "'ago' her zaman Simple Past ister.", correct: true, why: "'two days ago' → V2. Kanka, ago geldi mi V2'ye sarıl!" },
  { s: "'since' cümlede ana fiili Simple Past yapar.", correct: false, why: "since → Present Perfect ister: since 2015 → has/have + V3." },
  { s: "Geçişsiz fiiller (happen, occur) edilgen yapılabilir.", correct: false, why: "happen, occur, exist pasif OLAMAZ kanka!" },
  { s: "'must have + V3' geçmişte kesin çıkarım bildirir.", correct: true, why: "Güçlü kanıt → must have done. Kral gibi bildin!" },
  { s: "Type 3 koşul cümlesi 'If + had V3, would have V3' kalıbını kullanır.", correct: true, why: "Geçmişin hayali: had known → would have gone." },
  { s: "Virgüllü relative cümlede 'that' kullanılabilir.", correct: false, why: "Non-defining clause'ta that YASAK kanka!" },
  { s: "'look forward to' fiilinden sonra gerund (-ing) gelir.", correct: true, why: "looking forward to seeing — 'to' burada edat!" },
  { s: "'No sooner' yapısı 'when' ile eşleşir.", correct: false, why: "No sooner → THAN; Hardly → WHEN. Tersini yapma!" },
  { s: "'neither' tekil fiil alır.", correct: true, why: "Neither of them IS... Tekil, kanka!" },
  { s: "'the more ... the more' kalıbında iki taraf da superlative olur.", correct: false, why: "İki taraf da comparative: the more ... the better." },
  { s: "'a number of' çoğul fiil alır, 'the number of' tekil alır.", correct: true, why: "Klasik YDS tuzağı — a number of people ARE." },
  { s: "'had better' fiilinden sonra 'to' gelir.", correct: false, why: "had better + yalın fiil: had better go (to YOK)." },
];

export default function TrueFalse() {
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [picked, setPicked] = useState<boolean | null>(null);
  const [celebrate, setCelebrate] = useState(false);
  const [done, setDone] = useState(false);

  const list = useMemo(() => {
    const r = [...STATEMENTS];
    for (let i = r.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [r[i], r[j]] = [r[j], r[i]];
    }
    return r;
  }, []);

  const q = list[idx];

  const answer = (v: boolean) => {
    if (picked !== null) return;
    setPicked(v);
    if (v === q.correct) {
      setScore((s) => s + 1);
      setStreak((s) => s + 1);
      setCelebrate(true);
    } else {
      setStreak(0);
    }
  };

  const next = () => {
    setPicked(null);
    if (idx + 1 >= list.length) {
      setDone(true);
      void logGameComplete({
        gameId: "true-false",
        gameTitle: "Gramer Doğru / Yanlış",
        score: score * 10,
        streak,
        timeSpentMinutes: 3,
        wordsPlayed: list.length,
        details: `${score}/${list.length} Gramer Kuralı Doğru Bilindi`,
      });
    } else {
      setIdx(idx + 1);
    }
  };

  if (done) {
    return (
      <div className="max-w-2xl mx-auto text-center anim-pop">
        <div className="text-6xl mb-3">🏆</div>
        <p className="text-3xl font-black gradient-text">Bitti kanka!</p>
        <p className="text-white/70 mt-2">
          Doğru: <b className="text-emerald-300">{score}/{list.length}</b>
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-5 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 font-bold hover:scale-105 transition-transform"
        >
          🔄 Tekrar Oyna
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Celebration show={celebrate} onDone={() => setCelebrate(false)} message="Doğru kanka! 🎆" sub={q.why} short />

      <div className="flex items-center justify-between mb-4 text-sm text-white/60">
        <span>Soru {idx + 1}/{list.length}</span>
        <span>Skor: <b className="text-emerald-300">{score}</b> · Seri: <b className="text-orange-300">{streak}</b></span>
      </div>

      <div className="card-vibrant p-8 text-center">
        <p className="text-xl leading-relaxed text-white/90">{q.s}</p>
        <p className="text-sm text-white/50 mt-2">Doğru mu, yanlış mı kanka?</p>

        <div className="flex gap-3 justify-center mt-6">
          <button
            onClick={() => answer(true)}
            disabled={picked !== null}
            className={`px-8 py-3 rounded-xl font-black transition-all ${
              picked === true
                ? q.correct
                  ? "bg-emerald-500 text-white"
                  : "bg-rose-500 text-white anim-shake"
                : "bg-emerald-500/20 border border-emerald-400/50 text-emerald-200 hover:bg-emerald-500/30"
            }`}
          >
            ✔ DOĞRU
          </button>
          <button
            onClick={() => answer(false)}
            disabled={picked !== null}
            className={`px-8 py-3 rounded-xl font-black transition-all ${
              picked === false
                ? q.correct
                  ? "bg-rose-500 text-white anim-shake"
                  : "bg-emerald-500 text-white"
                : "bg-rose-500/20 border border-rose-400/50 text-rose-200 hover:bg-rose-500/30"
            }`}
          >
            ✘ YANLIŞ
          </button>
        </div>

        {picked !== null && (
          <div className="mt-6 anim-pop">
            <p className={`text-sm font-bold ${picked === q.correct ? "text-emerald-300" : "text-rose-300"}`}>
              {picked === q.correct ? "Aynen öyle kral! 👑" : "Kaçtı bu kanka! 💪"}
            </p>
            <p className="text-sm text-white/70 mt-2 leading-relaxed">{q.why}</p>
            <button
              onClick={next}
              className="mt-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 font-bold hover:scale-105 transition-transform"
            >
              Sonraki →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

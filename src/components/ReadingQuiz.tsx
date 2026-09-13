"use client";

import { useMemo, useState } from "react";
import { BANK } from "@/lib/data-bank";
import Celebration from "@/components/Celebration";

/** Bankadaki okuma sorularını pasaj bazında gruplar, mini test sunar. Havai fişekli! */
export default function ReadingQuiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [celebrate, setCelebrate] = useState(false);
  const [msg, setMsg] = useState("");

  const quiz = useMemo(() => {
    const groups = new Map<string, typeof BANK>();
    BANK.filter((q) => q.t === "reading").forEach((q) => {
      const key = q.p || "";
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key)!.push(q);
    });
    return Array.from(groups.values())[0] || [];
  }, []);

  const passage = quiz[0]?.p || "";
  const done = quiz.length > 0 && Object.keys(answers).length === quiz.length;
  const correctCount = quiz.filter((q, i) => answers[i] === q.a).length;

  const choose = (i: number, opt: number) => {
    if (answers[i] !== undefined) return;
    const next = { ...answers, [i]: opt };
    setAnswers(next);
    if (opt === quiz[i].a) {
      setMsg("Doğru kanka! 🎆 Okuma neti cebinde!");
      setCelebrate(true);
    }
  };

  if (quiz.length === 0) {
    return <p className="text-sm text-white/50 text-center">Henüz soru yok kanka.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Celebration show={celebrate} onDone={() => setCelebrate(false)} message={msg} sub="Reading'de de havai fişek bizden!" short />

      <div className="card-vibrant p-6 mb-6">
        <p className="text-xs font-mono uppercase tracking-wider text-amber-300 mb-2">📄 Reading Passage</p>
        <p className="text-sm text-white/75 leading-relaxed">{passage}</p>
      </div>

      {quiz.map((q, i) => {
        const a = answers[i];
        return (
          <div key={i} className="card-vibrant p-5 mb-4">
            <p className="text-sm text-white/85 leading-relaxed mb-3">
              <span className="font-black text-cyan-300 mr-2">{i + 1}.</span>
              {q.s}
            </p>
            <div className="space-y-2">
              {q.o.map((o, j) => {
                const answered = a !== undefined;
                const isAnswer = j === q.a;
                const isChosen = j === a;
                let cls = "border-white/12 bg-white/[0.03] hover:border-white/30";
                if (answered) {
                  if (isAnswer) cls = "border-emerald-400/60 bg-emerald-500/15";
                  else if (isChosen) cls = "border-rose-400/60 bg-rose-500/15 anim-shake";
                  else cls = "border-white/10 opacity-50";
                }
                return (
                  <button
                    key={j}
                    onClick={() => choose(i, j)}
                    disabled={answered}
                    className={`block w-full text-left rounded-lg border px-3 py-2 text-xs text-white/80 transition-all ${cls}`}
                  >
                    <span className="font-black text-white/50 mr-1.5">{String.fromCharCode(65 + j)})</span>
                    {o}
                    {answered && isAnswer && " ✅"}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      {done && (
        <div className="text-center anim-pop mt-6">
          <p className="text-2xl font-black gradient-text">
            {correctCount}/{quiz.length} doğru kanka! {correctCount === quiz.length ? "👑" : "💪"}
          </p>
          <button
            onClick={() => {
              setAnswers({});
            }}
            className="mt-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 font-bold hover:scale-105 transition-transform"
          >
            🔄 Tekrar Çöz
          </button>
        </div>
      )}
    </div>
  );
}

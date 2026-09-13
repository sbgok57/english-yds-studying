"use client";

import { useState } from "react";
import Link from "next/link";
import type { Tactic } from "@/lib/data-tactics";
import Celebration from "@/components/Celebration";
import RichText from "@/components/RichText";
import Tip from "@/components/Tip";
import { recordTacticView, useUsage } from "@/lib/store";

export default function TacticView({ tactic }: { tactic: Tactic }) {
  const { update } = useUsage();
  const [choice, setChoice] = useState<number | null>(null);
  const [celebrate, setCelebrate] = useState(false);
  const [logged, setLogged] = useState(false);
  const answered = choice !== null;
  const isCorrect = answered && choice === tactic.example.options.indexOf(tactic.example.answer);

  if (!logged) {
    setLogged(true);
    recordTacticView(update, tactic.slug);
  }

  const choose = (i: number) => {
    if (answered) return;
    setChoice(i);
    if (i === tactic.example.options.indexOf(tactic.example.answer)) setCelebrate(true);
  };

  const yt = (q: string) =>
    `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Celebration
        show={celebrate}
        onDone={() => setCelebrate(false)}
        message="Doğru bildin kral! 🎆"
        sub="Taktik kafana oturdu, netleri topla! 👑"
      />

      <Link href="/tactics" className="text-sm text-white/50 hover:text-white mb-6 inline-block">
        ← Tüm taktikler
      </Link>

      <div className="card-vibrant p-8 mb-8 bg-gradient-to-br from-white/[0.06] to-transparent">
        <div className="flex items-center gap-4 flex-wrap">
          <div className={`w-16 h-16 rounded-3xl bg-gradient-to-tr ${tactic.color} flex items-center justify-center text-4xl shadow-xl anim-float`}>
            {tactic.emoji}
          </div>
          <div>
            <span className="text-xs font-mono text-white/50">{tactic.minutes} · adım algoritması</span>
            <h1 className="text-3xl sm:text-4xl font-black">{tactic.title}</h1>
          </div>
        </div>
        <p className="mt-4 text-white/65 leading-relaxed">
          <RichText text={tactic.intro} />
        </p>
        <div className="flex flex-wrap gap-2 mt-5">
          <a href={yt(`${tactic.title} yds taktik`)} target="_blank" rel="noreferrer" className="text-xs font-bold px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/70 hover:text-white hover:border-cyan-400/50 transition-all" title="Bu soru tipi için video anlatımı">
            📺 Kanka Anlatımı ↗
          </a>
          <a href={yt(`yds ${tactic.title} soru çözümü`)} target="_blank" rel="noreferrer" className="text-xs font-bold px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/70 hover:text-white hover:border-cyan-400/50 transition-all" title="Gerçek sınav sorularıyla çözüm videosu">
            🎬 Örnek Çözüm ↗
          </a>
        </div>
      </div>

      {/* Kodlamalar */}
      <section className="card-vibrant p-8 mb-8 border-l-4 border-l-amber-400/60">
        <h2 className="text-xl font-black mb-4">🎵 Hafıza Kodlamaları</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {tactic.kodlama.map((k, i) => (
            <div key={i} className="rounded-xl bg-amber-400/10 border border-amber-300/20 p-3 text-sm text-amber-100 leading-relaxed">
              <RichText text={k} />
            </div>
          ))}
        </div>
      </section>

      {/* Algoritma */}
      <section className="card-vibrant p-8 mb-8">
        <h2 className="text-xl font-black mb-6">🧭 Adım Adım Çözüm Algoritması</h2>
        <ol className="space-y-4">
          {tactic.steps.map((s) => (
            <li key={s.n} className="flex gap-4 items-start">
              <div className="relative flex flex-col items-center">
                <span className="w-9 h-9 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center font-black text-sm shadow-lg shadow-pink-500/30">
                  {s.n}
                </span>
                {s.n < tactic.steps.length && (
                  <span className="w-px flex-1 bg-gradient-to-b from-pink-500/50 to-transparent my-1" />
                )}
              </div>
              <div className="pb-2">
                <p className="font-bold text-white/90">{s.title}</p>
                <p className="text-sm text-white/60 leading-relaxed">
                  <RichText text={s.detail} />
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Örnek soru */}
      <section className="card-vibrant p-8 mb-8">
        <h2 className="text-xl font-black mb-5">🧪 Örnek Soru ile Taktik</h2>
        <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-5">
          <p className="text-white/90 whitespace-pre-line leading-relaxed">{tactic.example.question}</p>
          <div className="mt-4 space-y-2">
            {tactic.example.options.map((o, i) => {
              const isAnswer = i === tactic.example.options.indexOf(tactic.example.answer);
              const isChosen = i === choice;
              let cls = "border-white/15 bg-white/[0.04] hover:border-white/35";
              if (answered) {
                if (isAnswer) cls = "border-emerald-400/70 bg-emerald-500/20";
                else if (isChosen) cls = "border-rose-400/70 bg-rose-500/20 anim-shake";
                else cls = "border-white/10 bg-white/[0.02] opacity-50";
              }
              return (
                <button
                  key={i}
                  disabled={answered}
                  onClick={() => choose(i)}
                  className={`block w-full text-left rounded-xl border px-4 py-2.5 transition-all ${cls}`}
                >
                  <span className="font-black text-white/60 mr-2">{String.fromCharCode(65 + i)})</span>
                  <span className="text-white/85 text-sm">{o}</span>
                  {answered && isAnswer && <span className="ml-2">✅</span>}
                  {answered && isChosen && !isAnswer && <span className="ml-2">❌</span>}
                </button>
              );
            })}
          </div>

          {answered && (
            <div className="mt-5 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-5 anim-pop">
              <p className="font-black text-emerald-300 mb-2">
                Doğru cevap: <span className="font-mono">{tactic.example.answer}</span>
                {isCorrect ? " — Tebrikler kral! 🎉" : " — Kanka, taktikleri tekrar süz! 💪"}
              </p>
              <p className="text-sm text-white/75 leading-relaxed">
                <RichText text={tactic.example.reason} />
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Bonus */}
      <section className="rounded-3xl border border-cyan-400/30 bg-cyan-500/10 p-6 flex gap-3">
        <span className="text-2xl">💡</span>
        <div>
          <p className="font-black text-cyan-300 mb-1">Usta İpucu</p>
          <p className="text-sm text-white/75 leading-relaxed">
            <RichText text={tactic.bonusTip} />
          </p>
        </div>
      </section>
    </div>
  );
}

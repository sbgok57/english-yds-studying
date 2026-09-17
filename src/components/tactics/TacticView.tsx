"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Tactic } from "@/lib/data-tactics";
import Celebration from "@/components/Celebration";
import RichText from "@/components/RichText";
import Tip from "@/components/Tip";
import { recordTacticView, useUsage, toggleBookmark } from "@/lib/store";
import {
  TACTIC_LEVELS_MAP,
  TACTIC_LEVEL_LIST,
  type TacticLevel,
  type TacticLevelBlock,
} from "@/lib/data-tactic-levels";
import {
  IMPORTANT_TACTIC_QUESTIONS,
  type TacticQuestion,
} from "@/lib/data-tactic-questions";

const LEVEL_BADGE_COLORS: Record<TacticLevel, string> = {
  A1: "from-emerald-500 to-teal-600 border-emerald-400/40 text-emerald-300",
  A2: "from-teal-500 to-cyan-600 border-teal-400/40 text-teal-300",
  B1: "from-cyan-500 to-blue-600 border-cyan-400/40 text-cyan-300",
  B2: "from-blue-600 to-indigo-600 border-blue-400/40 text-blue-300",
  C1: "from-purple-600 to-fuchsia-600 border-purple-400/40 text-purple-300",
  C2: "from-pink-600 to-rose-600 border-pink-400/40 text-pink-300",
  YDS: "from-amber-500 to-yellow-600 border-amber-400/40 text-amber-300",
};

export default function TacticView({ tactic }: { tactic: Tactic }) {
  const { usage, update } = useUsage();
  const [choice, setChoice] = useState<number | null>(null);
  const [celebrate, setCelebrate] = useState(false);
  const [logged, setLogged] = useState(false);

  // 7 Seviye tab yonetimi (A1..C2, YDS)
  const [activeLevel, setActiveLevel] = useState<TacticLevel>("YDS");
  const [levelChoice, setLevelChoice] = useState<number | null>(null);

  // ⭐ Onemli sorular filtre yonetimi
  const [selectedImpQuestion, setSelectedImpQuestion] = useState<TacticQuestion | null>(null);
  const [impChoice, setImpChoice] = useState<number | null>(null);

  const answered = choice !== null;
  const isCorrect = answered && choice === tactic.example.options.indexOf(tactic.example.answer);

  if (!logged) {
    setLogged(true);
    recordTacticView(update, tactic.slug);
  }

  // Seviye bloklari
  const levelBlocks: TacticLevelBlock[] = TACTIC_LEVELS_MAP[tactic.slug] || [];
  const currentLevelBlock = useMemo(() => {
    return levelBlocks.find((b) => b.level === activeLevel) || levelBlocks[0] || null;
  }, [levelBlocks, activeLevel]);

  // Bu soru tipine ait ⭐ 100 Onemli Sorular
  const importantQuestions: TacticQuestion[] = useMemo(() => {
    return IMPORTANT_TACTIC_QUESTIONS.filter((q) => q.tacticSlug === tactic.slug);
  }, [tactic.slug]);

  const choose = (i: number) => {
    if (answered) return;
    setChoice(i);
    if (i === tactic.example.options.indexOf(tactic.example.answer)) setCelebrate(true);
  };

  const chooseLevelExample = (i: number, correctText: string, options: string[]) => {
    if (levelChoice !== null) return;
    setLevelChoice(i);
    const correctIdx = options.findIndex((opt) => opt === correctText || opt.startsWith(correctText));
    if (i === correctIdx || options[i] === correctText) {
      setCelebrate(true);
    }
  };

  const yt = (q: string) =>
    `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Celebration
        show={celebrate}
        onDone={() => setCelebrate(false)}
        message="Dogru bildin kral! 🎆"
        sub="Taktik kafana oturdu, netleri topla! 👑"
      />

      {/* Navigasyon & Aksiyon Bari */}
      <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
        <Link href="/tactics" className="text-sm text-white/50 hover:text-white inline-flex items-center gap-1.5 transition-colors">
          <span>←</span> Tum Taktikler
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href={`/tactics/practice?type=${tactic.slug}`}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2"
          >
            <span>🎯</span>
            <span>Bu Tipi Pratik Et (600 Soru)</span>
          </Link>
          <button
            onClick={() => {
              if (importantQuestions.length > 0) {
                setSelectedImpQuestion(importantQuestions[0]);
                setImpChoice(null);
                const el = document.getElementById("important-questions-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-3.5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 text-amber-300 font-bold text-xs transition-all flex items-center gap-1.5"
          >
            <span>⭐</span>
            <span>{importantQuestions.length} Onemli Soru</span>
          </button>
        </div>
      </div>

      {/* Hero Karti */}
      <div className="card-vibrant p-8 mb-8 bg-gradient-to-br from-white/[0.06] to-transparent">
        <div className="flex items-center gap-4 flex-wrap">
          <div className={`w-16 h-16 rounded-3xl bg-gradient-to-tr ${tactic.color} flex items-center justify-center text-4xl shadow-xl anim-float`}>
            {tactic.emoji}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono text-white/50">{tactic.minutes} · algoritma</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                A1–C2 & YDS Tam Kapsam
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black">{tactic.title}</h1>
          </div>
        </div>
        <p className="mt-4 text-white/65 leading-relaxed text-base sm:text-lg">
          <RichText text={tactic.intro} />
        </p>
        <div className="flex flex-wrap gap-2 mt-5">
          <a href={yt(`${tactic.title} yds taktik`)} target="_blank" rel="noreferrer" className="text-xs font-bold px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/70 hover:text-white hover:border-cyan-400/50 transition-all" title="Bu soru tipi icin video anlatimi">
            📺 Kanka Anlatimi ↗
          </a>
          <a href={yt(`yds ${tactic.title} soru cozumu`)} target="_blank" rel="noreferrer" className="text-xs font-bold px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/70 hover:text-white hover:border-cyan-400/50 transition-all" title="Gercek sinav sorulariyla cozum videosu">
            🎬 Ornek Cozum ↗
          </a>
          <Link
            href={`/tactics/practice?type=${tactic.slug}&star=1`}
            className="text-xs font-bold px-3 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 hover:bg-amber-400/20 transition-all"
          >
            ⭐ Onemli Sinav Kaliplari ({importantQuestions.length} Soru)
          </Link>
        </div>
      </div>

      {/* 7 CEFR/YDS SEVIYE REHBERI (A1, A2, B1, B2, C1, C2, YDS) */}
      <section className="card-vibrant p-6 sm:p-8 mb-8 border-t-4 border-t-cyan-400/60">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🏆</span>
              <h2 className="text-2xl font-black">7 Seviyeli Taktik & Algoritma Rehberi</h2>
            </div>
            <p className="text-xs text-white/50 mt-1">
              Baslangictan (A1) sampiyonluk sinavina (YDS) kadar her basamakta soruyu nasil cozecegini gor!
            </p>
          </div>
          {/* Seviye Tab Butonlari */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-black/30 border border-white/10">
            {TACTIC_LEVEL_LIST.map((lvl) => {
              const active = activeLevel === lvl;
              return (
                <button
                  key={lvl}
                  onClick={() => {
                    setActiveLevel(lvl);
                    setLevelChoice(null);
                  }}
                  className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                    active
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {lvl}
                </button>
              );
            })}
          </div>
        </div>

        {currentLevelBlock && (
          <div className="space-y-6">
            {/* Seviye Karti Basligi */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start justify-between flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-2.5 py-0.5 rounded-lg text-xs font-mono font-black border bg-gradient-to-r ${LEVEL_BADGE_COLORS[currentLevelBlock.level]}`}>
                    {currentLevelBlock.level} SEVIYESI
                  </span>
                  <span className="text-sm font-bold text-white/90">{currentLevelBlock.title}</span>
                </div>
                <p className="text-xs text-white/60 mt-1 leading-relaxed">{currentLevelBlock.meaning}</p>
                <div className="mt-2 text-xs text-cyan-300 font-medium">
                  🎯 Hedef Yeterlilik: <span className="text-white/80">{currentLevelBlock.requirements}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-mono text-amber-300 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-lg inline-block">
                  ⏳ {currentLevelBlock.timeManagement}
                </span>
              </div>
            </div>

            {/* Adim Adim Yontem ve Celdirici Taktigi */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900/50 border border-white/10">
                <h3 className="text-sm font-black text-cyan-300 mb-3 flex items-center gap-2">
                  <span>🧭</span> Cozum Yontemi & Adimlar
                </h3>
                <p className="text-xs text-white/70 mb-3 leading-relaxed">{currentLevelBlock.method}</p>
                <ul className="space-y-2">
                  {currentLevelBlock.steps.map((st, sIdx) => (
                    <li key={sIdx} className="text-xs text-white/80 flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 flex items-center justify-center text-[10px] font-mono shrink-0 mt-0.5">
                        {sIdx + 1}
                      </span>
                      <span className="leading-relaxed">{st}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/50 border border-white/10">
                <h3 className="text-sm font-black text-rose-300 mb-3 flex items-center gap-2">
                  <span>🛡️</span> Celdirici Eleme & Tuzaklar
                </h3>
                <div className="mb-3 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-200 leading-relaxed">
                  <strong>Celdirici Taktigi:</strong> {currentLevelBlock.distractorTactic}
                </div>
                <div className="space-y-2">
                  <p className="text-[11px] font-bold text-white/50 uppercase tracking-wider">Dikkat Edilecek Tuzaklar:</p>
                  {currentLevelBlock.pitfalls.map((pf, pIdx) => (
                    <div key={pIdx} className="text-xs text-white/75 flex items-start gap-2">
                      <span className="text-rose-400 shrink-0">⚠️</span>
                      <span className="leading-relaxed">{pf}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hafiza Kodu ve Altin Ipuclari */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-amber-400/10 border border-amber-400/20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🎵</span>
                  <span className="text-xs font-black text-amber-300 uppercase tracking-wider">Hafiza Kodu & Formul</span>
                </div>
                <p className="text-xs text-amber-100/90 font-medium leading-relaxed">
                  <RichText text={currentLevelBlock.memoryCode} />
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">💡</span>
                  <span className="text-xs font-black text-emerald-300 uppercase tracking-wider">Altin Ipuclari</span>
                </div>
                <ul className="space-y-1">
                  {currentLevelBlock.tips.map((tp, tIdx) => (
                    <li key={tIdx} className="text-xs text-emerald-100/90 flex items-start gap-1.5">
                      <span className="text-emerald-400">✓</span>
                      <span>{tp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Seviyenin Cozumlu Interaktif Ornek Sorusu */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-cyan-400/30">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🧪</span>
                  <h4 className="text-sm font-black text-white">{currentLevelBlock.level} Seviyesi Interaktif Ornek Soru</h4>
                </div>
                <span className="text-[11px] font-mono text-cyan-300">{currentLevelBlock.ydsExamFormat}</span>
              </div>
              <p className="text-sm text-white/90 whitespace-pre-line leading-relaxed mb-4 p-3 rounded-xl bg-black/40 border border-white/5 font-mono">
                {currentLevelBlock.solvedExample.question}
              </p>

              {/* Secenekler */}
              <div className="space-y-2">
                {currentLevelBlock.solvedExample.options.map((opt, oIdx) => {
                  const isCorrectAnswer =
                    opt === currentLevelBlock.solvedExample.answer ||
                    opt.startsWith(currentLevelBlock.solvedExample.answer);
                  const isChosen = levelChoice === oIdx;
                  let btnCls = "border-white/10 bg-white/[0.03] hover:border-white/30 text-white/80";
                  if (levelChoice !== null) {
                    if (isCorrectAnswer) btnCls = "border-emerald-400/70 bg-emerald-500/20 text-emerald-200 font-bold";
                    else if (isChosen) btnCls = "border-rose-400/70 bg-rose-500/20 text-rose-200 anim-shake";
                    else btnCls = "border-white/5 bg-white/[0.01] opacity-40 text-white/40";
                  }
                  return (
                    <button
                      key={oIdx}
                      disabled={levelChoice !== null}
                      onClick={() =>
                        chooseLevelExample(
                          oIdx,
                          currentLevelBlock.solvedExample.answer,
                          currentLevelBlock.solvedExample.options
                        )
                      }
                      className={`w-full text-left rounded-xl border px-4 py-2.5 text-xs transition-all flex items-center justify-between ${btnCls}`}
                    >
                      <span className="leading-relaxed">{opt}</span>
                      {levelChoice !== null && isCorrectAnswer && <span className="ml-2">✅</span>}
                      {levelChoice !== null && isChosen && !isCorrectAnswer && <span className="ml-2">❌</span>}
                    </button>
                  );
                })}
              </div>

              {/* Cozum Aciklamasi */}
              {levelChoice !== null && (
                <div className="mt-4 p-4 rounded-xl border border-emerald-400/30 bg-emerald-500/10 anim-pop">
                  <div className="flex items-center gap-2 mb-2 font-bold text-xs text-emerald-300">
                    <span>🎉 Dogru Cevap:</span>
                    <span className="font-mono">{currentLevelBlock.solvedExample.answer}</span>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    <RichText text={currentLevelBlock.solvedExample.explanation} />
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </section>

      {/* Orijinal Hafiza Kodlamalari */}
      <section className="card-vibrant p-8 mb-8 border-l-4 border-l-amber-400/60">
        <h2 className="text-xl font-black mb-4">🎵 Hafiza Kodlamalari</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {tactic.kodlama.map((k, i) => (
            <div key={i} className="rounded-xl bg-amber-400/10 border border-amber-300/20 p-3 text-sm text-amber-100 leading-relaxed">
              <RichText text={k} />
            </div>
          ))}
        </div>
      </section>

      {/* Orijinal Algoritma Adimlari */}
      <section className="card-vibrant p-8 mb-8">
        <h2 className="text-xl font-black mb-6">🧭 Adim Adim Cozum Algoritmasi</h2>
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

      {/* Ana Ornek Soru */}
      <section className="card-vibrant p-8 mb-8">
        <h2 className="text-xl font-black mb-5">🧪 Klasik Ornek Soru ile Taktik</h2>
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
                Dogru cevap: <span className="font-mono">{tactic.example.answer}</span>
                {isCorrect ? " — Tebrikler kral! 🎉" : " — Kanka, taktikleri tekrar suz! 💪"}
              </p>
              <p className="text-sm text-white/75 leading-relaxed">
                <RichText text={tactic.example.reason} />
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ⭐ 100 Onemli Cozumlu Soru — Bu Soru Tipi Icin Bolum */}
      {importantQuestions.length > 0 && (
        <section id="important-questions-section" className="card-vibrant p-8 mb-8 border-2 border-amber-400/40 bg-gradient-to-br from-amber-500/[0.06] to-transparent">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <h2 className="text-2xl font-black text-amber-200">
                  {importantQuestions.length} Onemli Cozumlu Soru & 5 Secenek Analizi
                </h2>
              </div>
              <p className="text-xs text-white/60 mt-1">
                OSYM nin en cok sordugu kaliplar ve A–E siklarinin tek tek elenme nedenleri.
              </p>
            </div>
            <Link
              href={`/tactics/practice?type=${tactic.slug}&star=1`}
              className="px-4 py-2 rounded-xl bg-amber-400/20 hover:bg-amber-400/30 border border-amber-400/40 text-amber-200 font-bold text-xs transition-all"
            >
              Test Modunda Basla →
            </Link>
          </div>

          {/* Soru Secici Tablar */}
          <div className="flex flex-wrap gap-2 mb-6">
            {importantQuestions.map((q, idx) => {
              const active = (selectedImpQuestion?.id || importantQuestions[0].id) === q.id;
              const isBookmarked = (usage.bookmarks || []).includes(q.id);
              return (
                <button
                  key={q.id}
                  onClick={() => {
                    setSelectedImpQuestion(q);
                    setImpChoice(null);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-1.5 ${
                    active
                      ? "bg-amber-400 text-slate-900 shadow-md shadow-amber-400/30"
                      : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10"
                  }`}
                >
                  <span>Soru {idx + 1}</span>
                  {isBookmarked && <span>📌</span>}
                </button>
              );
            })}
          </div>

          {/* Secili Soru Karti */}
          {(() => {
            const currentQ = selectedImpQuestion || importantQuestions[0];
            const hasChosen = impChoice !== null;
            const isCorrectImp = hasChosen && impChoice === currentQ.answer;
            const isBookmarked = (usage.bookmarks || []).includes(currentQ.id);

            return (
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/15 space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-lg bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-bold">
                      ⭐ {currentQ.importantTag || "Onemli Soru"}
                    </span>
                    <span className="text-xs font-mono text-white/50">{currentQ.level} · {currentQ.difficulty}</span>
                    {currentQ.ydsFrequency && (
                      <span className="text-[11px] text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-400/20">
                        {currentQ.ydsFrequency}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => toggleBookmark(update, currentQ.id)}
                    className="text-xs text-white/60 hover:text-white flex items-center gap-1 px-2 py-1 rounded bg-white/5"
                  >
                    <span>{isBookmarked ? "📌 Kaydedildi" : "☆ Kaydet"}</span>
                  </button>
                </div>

                {/* Paragraf veya metin varsa */}
                {currentQ.passage && (
                  <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs text-white/80 leading-relaxed font-serif italic whitespace-pre-line">
                    {currentQ.passage}
                  </div>
                )}

                {/* Soru Koku */}
                <p className="text-sm sm:text-base font-semibold text-white/90 whitespace-pre-line leading-relaxed">
                  {currentQ.stem}
                </p>

                {/* 5 Secenek */}
                <div className="space-y-2">
                  {currentQ.options.map((opt, oIdx) => {
                    const isAnswer = oIdx === currentQ.answer;
                    const isUserChoice = impChoice === oIdx;
                    let optStyle = "border-white/10 bg-white/[0.02] hover:border-white/25 text-white/85";
                    if (hasChosen) {
                      if (isAnswer) optStyle = "border-emerald-400/80 bg-emerald-500/20 text-emerald-200 font-bold";
                      else if (isUserChoice) optStyle = "border-rose-400/80 bg-rose-500/20 text-rose-200 anim-shake";
                      else optStyle = "border-white/5 bg-white/[0.01] opacity-40 text-white/40";
                    }

                    return (
                      <button
                        key={oIdx}
                        disabled={hasChosen}
                        onClick={() => {
                          setImpChoice(oIdx);
                          if (oIdx === currentQ.answer) setCelebrate(true);
                        }}
                        className={`w-full text-left rounded-xl border px-4 py-3 text-xs sm:text-sm transition-all flex items-start gap-3 ${optStyle}`}
                      >
                        <span className="font-mono font-bold text-white/60 shrink-0">
                          {String.fromCharCode(65 + oIdx)})
                        </span>
                        <span className="leading-relaxed">{opt}</span>
                        {hasChosen && isAnswer && <span className="ml-auto shrink-0">✅</span>}
                        {hasChosen && isUserChoice && !isAnswer && <span className="ml-auto shrink-0">❌</span>}
                      </button>
                    );
                  })}
                </div>

                {/* Detayli 5 Sik Cozum Analizi */}
                {hasChosen && (
                  <div className="mt-5 p-5 rounded-2xl border border-amber-400/30 bg-amber-500/10 space-y-4 anim-pop">
                    <div className="flex items-center gap-2 text-sm font-black text-amber-300">
                      <span>{isCorrectImp ? "🎉 Mukemmel! Dogru Cevap:" : "💡 Dogru Cevap:"}</span>
                      <span className="font-mono">{String.fromCharCode(65 + currentQ.answer)}</span>
                    </div>

                    <p className="text-xs text-white/85 leading-relaxed">
                      <strong>Aciklama:</strong> {currentQ.explanation}
                    </p>

                    {/* A..E Celdirici Analizleri */}
                    {currentQ.distractorAnalysis && (
                      <div className="space-y-2 pt-2 border-t border-white/10">
                        <p className="text-xs font-mono uppercase tracking-wider text-amber-200 font-bold">
                          🔍 Sik Sik Celdirici & Eleme Analizi:
                        </p>
                        <div className="grid sm:grid-cols-1 gap-1.5">
                          {Object.entries(currentQ.distractorAnalysis).map(([optLetter, reason]) => {
                            const isCorrectLetter = optLetter === String.fromCharCode(65 + currentQ.answer);
                            return (
                              <div
                                key={optLetter}
                                className={`text-xs p-2.5 rounded-lg leading-relaxed flex items-start gap-2 ${
                                  isCorrectLetter
                                    ? "bg-emerald-500/15 border border-emerald-400/30 text-emerald-200"
                                    : "bg-black/30 border border-white/5 text-white/70"
                                }`}
                              >
                                <span className="font-mono font-black shrink-0">{optLetter}:</span>
                                <span>{reason}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    <div className="p-3 rounded-xl bg-black/40 border border-amber-400/20 text-xs text-amber-200 flex items-start gap-2">
                      <span className="text-base shrink-0">🎯</span>
                      <div>
                        <strong>Usta Taktigi:</strong> {currentQ.tactic}
                        {currentQ.memoryCode && (
                          <div className="mt-1 text-cyan-300">🎵 {currentQ.memoryCode}</div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })()}
        </section>
      )}

      {/* Bonus Ipucu */}
      <section className="rounded-3xl border border-cyan-400/30 bg-cyan-500/10 p-6 flex gap-3 mb-8">
        <span className="text-2xl">💡</span>
        <div>
          <p className="font-black text-cyan-300 mb-1">Usta Ipucu</p>
          <p className="text-sm text-white/75 leading-relaxed">
            <RichText text={tactic.bonusTip} />
          </p>
        </div>
      </section>

      {/* Alt Eylemler */}
      <div className="flex items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/60 border border-white/10 flex-wrap">
        <div>
          <h3 className="font-black text-white text-base">Bu Soru Tipinde Usta Ol</h3>
          <p className="text-xs text-white/60 mt-0.5">
            100 Onemli Cozumlu Soru ve 500 Seviyeli Pratik Soru seni bekliyor!
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={`/tactics/practice?type=${tactic.slug}`}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 font-bold text-sm text-white shadow-lg shadow-emerald-500/20 transition-all"
          >
            🚀 Pratik Testini Baslat
          </Link>
          <Link
            href="/tactics"
            className="px-4 py-2.5 rounded-xl border border-white/20 hover:bg-white/10 text-xs font-bold text-white transition-all"
          >
            Tum Soru Tipleri
          </Link>
        </div>
      </div>
    </div>
  );
}

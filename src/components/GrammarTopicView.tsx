"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { GrammarTopic } from "@/lib/data-grammar";
import { StepTimeline } from "@/components/animations";
import Celebration from "@/components/Celebration";
import RichText from "@/components/RichText";
import Tip from "@/components/Tip";
import VideoModal, { type VideoOption } from "@/components/VideoModal";
import SceneAnim from "@/components/SceneAnim";
import { MEDIA_SOURCE_TIP } from "@/lib/media-source";
import { GRAMMAR_ALIASES, GRAMMAR_EXAMPLES2 } from "@/lib/grammar-extras";
import {
  GRAMMAR_LEVELS_7_MAP,
  GRAMMAR_LEVEL7_LIST,
  type GrammarLevel7,
  type GrammarLevel7Block,
} from "@/lib/data-grammar-levels-7";
import { recordGrammar, useUsage } from "@/lib/store";

const LEVEL_COLORS_7: Record<GrammarLevel7, string> = {
  A1: "from-emerald-500 to-teal-600",
  A2: "from-teal-500 to-cyan-600",
  B1: "from-cyan-500 to-blue-600",
  B2: "from-blue-600 to-indigo-600",
  C1: "from-purple-600 to-fuchsia-600",
  C2: "from-pink-600 to-rose-600",
  YDS: "from-amber-500 to-yellow-600",
};

function mediaOptions(title: string): VideoOption[] {
  const base = title.toLowerCase();
  return [
    { label: "Dizi/Film Sahnesi", emoji: "🎬", query: `${base} grammar in movies and tv series`, tip: "Konunun dizi ve filmlerde nasil kullanildigini gor" },
    { label: "Telaffuz", emoji: "🗣️", query: `${base} english pronunciation`, tip: "Dogal telaffuzu dinle" },
    { label: "Kanka Anlatimi", emoji: "📺", query: `${base} konu anlatimi turkce`, tip: "Turkce konu anlatim videosu" },
  ];
}

export default function GrammarTopicView({ topic }: { topic: GrammarTopic }) {
  const { update } = useUsage();
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [choice, setChoice] = useState<string | null>(null);
  const [choice2, setChoice2] = useState<string | null>(null);
  const [celebrate, setCelebrate] = useState(false);
  const [video, setVideo] = useState<VideoOption | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  // 7 Seviye Rehberi State
  const [activeLevel7, setActiveLevel7] = useState<GrammarLevel7>("A1");
  const [miniExChoice, setMiniExChoice] = useState<number | null>(null);

  const media = mediaOptions(topic.title);
  const aliases = GRAMMAR_ALIASES[topic.slug] || [];
  const example2 = GRAMMAR_EXAMPLES2[topic.slug];

  // 7 Seviye verisi
  const levelBlocks7 = useMemo<GrammarLevel7Block[]>(() => {
    return GRAMMAR_LEVELS_7_MAP[topic.slug] || [];
  }, [topic.slug]);

  const activeBlock7 = useMemo(() => {
    return levelBlocks7.find((b) => b.level === activeLevel7) || levelBlocks7[0] || null;
  }, [levelBlocks7, activeLevel7]);

  const highlighted = useMemo(() => {
    if (step < 0 || step >= topic.anim.length) return topic.example.sentence;
    const hl = topic.anim[step].highlight;
    if (!hl || hl === "✓" || hl === "✗") return topic.example.sentence;
    const idx = topic.example.sentence.toLowerCase().indexOf(hl.toLowerCase());
    if (idx === -1) return topic.example.sentence;
    const before = topic.example.sentence.slice(0, idx);
    const match = topic.example.sentence.slice(idx, idx + hl.length);
    const after = topic.example.sentence.slice(idx + hl.length);
    return (
      <>
        {before}
        <span className="bg-yellow-300 text-slate-900 font-bold px-1 rounded anim-pop inline-block">
          {match}
        </span>
        {after}
      </>
    );
  }, [step, topic]);

  const togglePlay = () => {
    if (playing) {
      setPlaying(false);
      return;
    }
    setPlaying(true);
    setStep(0);
    let i = 0;
    const iv = setInterval(() => {
      i += 1;
      if (i >= topic.anim.length) {
        clearInterval(iv);
        setPlaying(false);
      } else {
        setStep(i);
      }
    }, 1800);
  };

  const answered = choice !== null;
  const isCorrect = choice === topic.example.answer;

  const choose = (id: string) => {
    if (answered) return;
    setChoice(id);
    recordGrammar(update, topic.slug, id === topic.example.answer);
    if (id === topic.example.answer) setCelebrate(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {videoOpen && (
        <VideoModal
          title={`${topic.title} — Mini Video`}
          options={media}
          active={video}
          onClose={() => setVideoOpen(false)}
          onSelect={(o) => setVideo(o)}
        />
      )}
      <Celebration
        show={celebrate}
        onDone={() => setCelebrate(false)}
        message="Dogru bildin kral! 🎆"
        sub="Bu net senin, cebine koy! 👑"
      />

      {/* Navigasyon & Test Butonlari */}
      <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
        <Link href="/grammar" className="text-sm text-white/50 hover:text-white inline-flex items-center gap-1.5 transition-colors">
          <span>←</span> Tum Gramer Konulari
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href={`/grammar/${topic.slug}/practice`}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2"
          >
            <span>🎯</span>
            <span>100 Soruluk Konu Testi</span>
          </Link>
          <Link
            href="/grammar/mixed-tests"
            className="px-3.5 py-2 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/40 text-purple-300 font-bold text-xs transition-all flex items-center gap-1.5"
          >
            <span>🔀</span>
            <span>500 Karisik Soru</span>
          </Link>
        </div>
      </div>

      {/* Baslik Kartı */}
      <div className="card-vibrant p-8 mb-8 bg-gradient-to-br from-white/[0.06] to-transparent">
        <div className="flex items-center gap-4 flex-wrap">
          <div className={`w-16 h-16 rounded-3xl bg-gradient-to-tr ${topic.color} flex items-center justify-center text-4xl shadow-xl anim-float`}>
            {topic.emoji}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-white/50">{topic.level}</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                100 Ozel Soru Hazir
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black">{topic.title}</h1>
          </div>
        </div>

        {aliases.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 self-center">
              Diger adlari:
            </span>
            {aliases.slice(0, 8).map((a) => (
              <span
                key={a}
                className="text-[11px] font-bold px-2 py-0.5 rounded-full border border-white/10 bg-white/[0.04] text-white/60"
              >
                {a}
              </span>
            ))}
          </div>
        )}

        <p className="mt-4 text-white/65 leading-relaxed text-base sm:text-lg">
          <RichText text={topic.summary} />
        </p>

        {/* Formuller */}
        <div className="flex flex-wrap gap-2 mt-5">
          {topic.formula.map((f) => (
            <Tip marker key={f.label} tip={`${f.label} kalibi: **${f.text}** — kanka, uzerinde bekle, sana detayini fisildayayim.`}>
              <div className={`rounded-xl px-3 py-2 ${f.color} border border-white/10 cursor-help`}>
                <div className="text-[10px] font-mono uppercase tracking-wider opacity-70">{f.label}</div>
                <div className="font-mono font-bold text-sm">{f.text}</div>
              </div>
            </Tip>
          ))}
        </div>

        {/* Media linkleri */}
        <div className="flex flex-wrap items-center gap-2 mt-5">
          {media.map((m) => (
            <button
              key={m.label}
              onClick={() => {
                setVideo(m);
                setVideoOpen(true);
              }}
              className="text-xs font-bold px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/70 hover:text-white hover:border-cyan-400/50 transition-all"
              title={m.tip}
            >
              {m.emoji} {m.label} ▶
            </button>
          ))}
          <Tip tip={MEDIA_SOURCE_TIP} marker>
            <button className="text-xs font-bold px-2.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/70 hover:text-white transition-all">
              ℹ️
            </button>
          </Tip>
        </div>
      </div>

      {/* Gorsel hafiza sahnesi + gercek GIF linkleri */}
      <section className="card-vibrant p-6 mb-8">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-2">
          <h2 className="text-lg font-black">🎞️ Gorsel Hafiza Kosesi</h2>
          <div className="flex gap-2">
            <a
              href={`https://giphy.com/search/${encodeURIComponent(topic.title)}`}
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-bold px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/70 hover:text-white hover:border-pink-400/50 transition-all"
              title="Bu konuyla ilgili gercek GIF ler (Giphy)"
            >
              🎬 Gercek GIF ler ↗
            </a>
            <a
              href={`https://tenor.com/search/${encodeURIComponent(topic.title)}-gifs`}
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-bold px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/70 hover:text-white hover:border-pink-400/50 transition-all"
              title="Tenor da dizi/film GIF leri"
            >
              🍿 Dizi GIF leri ↗
            </a>
          </div>
        </div>
        <SceneAnim slug={topic.slug} size="text-4xl" />
        <p className="text-xs text-white/40 mt-1">
          Kanka, konuyu bu gorsellerle kodla. Gercek dizi/film GIF leri icin yukaridaki butonlar!
        </p>
      </section>

      {/* 7 CEFR / YDS SEVIYELI INTERAKTIF REHBER (A1, A2, B1, B2, C1, C2, YDS) */}
      <section className="card-vibrant p-6 sm:p-8 mb-8 border-t-4 border-t-cyan-400/60">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📶</span>
              <h2 className="text-2xl font-black">7 Seviyeli Gramer & Zaman Belirteci Rehberi</h2>
            </div>
            <p className="text-xs text-white/50 mt-1">
              A1 den C2 ye ve YDS ustalik duzeyine kadar kurallar, zaman tablolari ve mini testler!
            </p>
          </div>

          {/* Seviye Butonlari */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-black/30 border border-white/10">
            {GRAMMAR_LEVEL7_LIST.map((lvl) => {
              const active = activeLevel7 === lvl;
              return (
                <button
                  key={lvl}
                  onClick={() => {
                    setActiveLevel7(lvl);
                    setMiniExChoice(null);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                    active
                      ? `bg-gradient-to-r ${LEVEL_COLORS_7[lvl]} text-white shadow-md`
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {lvl}
                </button>
              );
            })}
          </div>
        </div>

        {activeBlock7 && (
          <div className="space-y-6">
            {/* Seviye Basligi ve Tanimi */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-2.5 mb-2">
                <span className={`px-2.5 py-0.5 rounded-lg text-xs font-mono font-black text-white bg-gradient-to-r ${LEVEL_COLORS_7[activeBlock7.level]}`}>
                  {activeBlock7.level}
                </span>
                <h3 className="text-base sm:text-lg font-black text-white">{activeBlock7.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">{activeBlock7.definition}</p>
              <p className="text-xs text-cyan-300 mt-2">
                <strong>Kullanim Amaci:</strong> {activeBlock7.usage}
              </p>
            </div>

            {/* Cumle Yapisi (+, -, ?) ve Formul */}
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs">
                <span className="font-bold text-emerald-300 block mb-1">➕ Olumlu Yapisi</span>
                <code className="font-mono text-emerald-100 text-[11px] block">{activeBlock7.positiveStructure}</code>
              </div>
              <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs">
                <span className="font-bold text-rose-300 block mb-1">➖ Olumsuz Yapisi</span>
                <code className="font-mono text-rose-100 text-[11px] block">{activeBlock7.negativeStructure}</code>
              </div>
              <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs">
                <span className="font-bold text-cyan-300 block mb-1">❓ Soru Yapisi</span>
                <code className="font-mono text-cyan-100 text-[11px] block">{activeBlock7.questionStructure}</code>
              </div>
            </div>

            {/* Zaman Belirtecleri Tablosu (Time Markers) */}
            {activeBlock7.timeMarkers && activeBlock7.timeMarkers.length > 0 && (
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                    <span>⏰</span> {activeBlock7.level} Seviyesi Zaman Belirtecleri & Ipuclari
                  </h4>
                  <span className="text-[10px] font-mono text-white/40">
                    {activeBlock7.timeMarkers.length} Belirtec
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-white/10 text-white/50 font-mono text-[11px]">
                        <th className="py-2 px-3">Zaman Belirteci</th>
                        <th className="py-2 px-3">Turkce Anlami</th>
                        <th className="py-2 px-3">Ornek Cumle</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {activeBlock7.timeMarkers.map((tm, tmIdx) => (
                        <tr key={tmIdx} className="hover:bg-white/[0.02]">
                          <td className="py-2.5 px-3 font-mono font-bold text-cyan-300 whitespace-nowrap">
                            {tm.marker}
                          </td>
                          <td className="py-2.5 px-3 text-white/70 whitespace-nowrap">
                            {tm.turkish}
                          </td>
                          <td className="py-2.5 px-3 text-white/80 italic font-mono text-[11px]">
                            {tm.exampleEn}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Hafiza Kodu & Gorsel Sahne */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-amber-400/10 border border-amber-400/20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🎵</span>
                  <span className="text-xs font-black text-amber-300 uppercase tracking-wider">Hafiza Formulu</span>
                </div>
                <p className="text-xs text-amber-100/90 leading-relaxed font-medium">
                  <RichText text={activeBlock7.memoryCode} />
                </p>
                {activeBlock7.visualMemoryScene && (
                  <p className="text-[11px] text-amber-200/70 mt-2 italic">
                    🎬 Zihninde canlandir: {activeBlock7.visualMemoryScene}
                  </p>
                )}
              </div>

              <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🎯</span>
                  <span className="text-xs font-black text-indigo-300 uppercase tracking-wider">Seviye Taktiği & Tuzak</span>
                </div>
                <p className="text-xs text-indigo-100/90 leading-relaxed mb-2">
                  {activeBlock7.levelTactic}
                </p>
                {activeBlock7.commonMistake && (
                  <p className="text-[11px] text-rose-300 border-t border-white/10 pt-2">
                    ⚠️ <strong>Tuzak:</strong> {activeBlock7.commonMistake}
                  </p>
                )}
              </div>
            </div>

            {/* Karsilastirmali Cumleler (Contrast Sentences) */}
            {activeBlock7.contrastSentences && (
              <div className="p-4 rounded-2xl bg-slate-900/70 border border-white/10">
                <span className="text-xs font-black text-cyan-300 uppercase tracking-wider block mb-2">
                  ⚖️ Iki Cumle Arasindaki Ince Fark
                </span>
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20">
                    <span className="font-bold text-rose-300 block mb-0.5">❌ Yanlis / Tuzak Kullanim:</span>
                    <p className="font-mono text-rose-200">{activeBlock7.contrastSentences.wrong}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <span className="font-bold text-emerald-300 block mb-0.5">✅ Dogru / YDS Formu:</span>
                    <p className="font-mono text-emerald-200">{activeBlock7.contrastSentences.correct}</p>
                  </div>
                </div>
                <p className="text-xs text-white/70 mt-2 leading-relaxed">
                  🔍 <strong>Fark:</strong> {activeBlock7.contrastSentences.explanation}
                </p>
              </div>
            )}

            {/* Mini Egzersiz */}
            {activeBlock7.miniExercise && (
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-cyan-400/30">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-black text-cyan-300 uppercase tracking-wider">
                    🧪 {activeBlock7.level} Seviyesi Mini Pekiştirme Sorusu
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-white/90 mb-3 font-mono">
                  {activeBlock7.miniExercise.question}
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {activeBlock7.miniExercise.options.map((opt, oIdx) => {
                    const hasAnswered = miniExChoice !== null;
                    const isAnswer = oIdx === activeBlock7.miniExercise.answer;
                    const isUserChoice = miniExChoice === oIdx;

                    let btnCls = "border-white/10 bg-white/[0.03] hover:border-white/30 text-white/85";
                    if (hasAnswered) {
                      if (isAnswer) btnCls = "border-emerald-400/80 bg-emerald-500/20 text-emerald-200 font-bold";
                      else if (isUserChoice) btnCls = "border-rose-400/80 bg-rose-500/20 text-rose-200 anim-shake";
                      else btnCls = "border-white/5 bg-white/[0.01] opacity-40 text-white/40";
                    }

                    return (
                      <button
                        key={oIdx}
                        disabled={hasAnswered}
                        onClick={() => {
                          setMiniExChoice(oIdx);
                          if (isAnswer) setCelebrate(true);
                        }}
                        className={`text-left p-2.5 rounded-xl border text-xs transition-all flex items-center justify-between ${btnCls}`}
                      >
                        <span>{opt}</span>
                        {hasAnswered && isAnswer && <span>✅</span>}
                        {hasAnswered && isUserChoice && !isAnswer && <span>❌</span>}
                      </button>
                    );
                  })}
                </div>

                {miniExChoice !== null && (
                  <div className="mt-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-400/30 text-xs text-emerald-200 anim-pop">
                    <strong>Cozum:</strong> {activeBlock7.miniExercise.explanation}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </section>

      {/* Kurallar */}
      <section className="card-vibrant p-8 mb-8">
        <h2 className="text-xl font-black mb-4">📌 Altin Kurallar</h2>
        <ul className="space-y-3">
          {topic.rules.map((r, i) => (
            <li key={i} className="flex gap-3 items-start anim-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <span className="w-6 h-6 shrink-0 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-xs font-black">
                {i + 1}
              </span>
              <span className="text-white/75 leading-relaxed">
                <RichText text={r} />
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Kodlamalar */}
      <section className="card-vibrant p-8 mb-8 border-l-4 border-l-amber-400/60">
        <h2 className="text-xl font-black mb-4">🎵 Hafiza Kodlamalari</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {topic.coding.map((c, i) => (
            <div key={i} className="rounded-xl bg-amber-400/10 border border-amber-300/20 p-3 text-sm text-amber-100 leading-relaxed">
              {c}
            </div>
          ))}
        </div>
      </section>

      {/* Tuzaklar */}
      <section className="card-vibrant p-8 mb-8">
        <h2 className="text-xl font-black mb-4">⚠️ Sik Yapilan Hatalar & Tuzaklar</h2>
        <div className="space-y-3">
          {topic.traps.map((t, i) => (
            <div key={i} className="rounded-xl bg-rose-500/10 border border-rose-400/20 p-4">
              <div className="flex gap-2 items-start">
                <span className="text-lg">❌</span>
                <div>
                  <p className="text-sm text-rose-200 font-semibold">
                    <RichText text={`^^${t.trap}^^`} />
                  </p>
                  <p className="text-sm text-emerald-300 mt-1">
                    <RichText text={`✅ ${t.fix}`} />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Animasyonlu ornek soru */}
      <section className="card-vibrant p-8 mb-8">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
          <h2 className="text-xl font-black">🧪 Animasyonlu Ornek Soru</h2>
          <Tip marker tip="Adimlari tek tek izler; cumlede ipucu veren kelimeler sariyla parlar. Kanka modu: ▶ Oynat a bas!">
            <button
              onClick={togglePlay}
              className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${
                playing
                  ? "bg-rose-500 text-white"
                  : "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/30 hover:scale-105"
              }`}
            >
              {playing ? "⏸ Durdur" : "▶ Adim Adim Oynat"}
            </button>
          </Tip>
        </div>

        <p className="font-mono text-sm text-cyan-200 bg-slate-900/60 rounded-xl p-4 leading-relaxed">
          {highlighted}
        </p>
        <p className="text-xs text-white/40 mt-2 italic">{topic.example.translation}</p>

        <div className="mt-6">
          <StepTimeline
            steps={topic.anim.map((s) => ({ label: s.label, detail: s.detail, highlight: s.highlight }))}
            current={step}
            onSelect={(i) => {
              setPlaying(false);
              setStep(i);
            }}
          />
        </div>

        {/* Secenekler */}
        <div className="mt-6">
          <p className="text-sm font-bold text-white/70 mb-3">
            Cevabini sec kanka:
            <Tip tip="Dogru bilirsen havai fisek patlar, yanlista uzulme — taktik tekrar izle!">
              <span className="ml-2 cursor-help">🎇</span>
            </Tip>
          </p>
          <div className="grid sm:grid-cols-2 gap-2">
            {topic.example.options.map((o) => {
              const isAnswer = o.id === topic.example.answer;
              const isChosen = o.id === choice;
              let cls = "border-white/15 bg-white/[0.04] hover:border-white/35 text-white/85";
              if (answered) {
                if (isAnswer) cls = "border-emerald-400/70 bg-emerald-500/20 text-emerald-200 font-bold";
                else if (isChosen) cls = "border-rose-400/70 bg-rose-500/20 anim-shake text-rose-200";
                else cls = "border-white/10 bg-white/[0.02] opacity-50 text-white/40";
              }
              return (
                <button
                  key={o.id}
                  disabled={answered}
                  onClick={() => choose(o.id)}
                  className={`text-left rounded-xl border px-4 py-3 transition-all ${cls}`}
                >
                  <span className="font-black text-white/60 mr-2">{o.id})</span>
                  <span className="text-white/85 text-sm font-mono">{o.text}</span>
                  {answered && isAnswer && <span className="ml-2">✅</span>}
                  {answered && isChosen && !isAnswer && <span className="ml-2">❌</span>}
                </button>
              );
            })}
          </div>

          {answered && (
            <div className="mt-5 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-5 anim-pop">
              <p className="font-black text-emerald-300 mb-2">
                Dogru cevap: {topic.example.answer}
                {isCorrect
                  ? " — Tebrikler kral! 🎉 Net cebinde!"
                  : " — Olsun kanka, her yanlis bir netin provasi. 💪"}
              </p>
              <p className="text-sm text-white/75 leading-relaxed mb-3">
                <RichText text={topic.example.explanation} />
              </p>
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-cyan-300 mb-1">🎯 Cozum Taktikleri</p>
                <p className="text-sm text-white/80 leading-relaxed">
                  <RichText text={topic.example.tactic} />
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Ikinci ornek soru — ekstra pratik */}
      {example2 && (
        <section className="card-vibrant p-8 mb-8 border-t-4 border-t-cyan-400/50">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-xl font-black">🧪 Ikinci Ornek Soru</h2>
            <Tip marker tip="Konuyu pekistirmek icin ikinci bir soru. Once kendin coz, sonra cevabi gor!">
              <span className="cursor-help text-white/40 text-sm">ℹ️</span>
            </Tip>
          </div>
          <p className="text-xs text-white/40 mb-5">Bir net daha kanka — hadi bu da senin olsun! 💪</p>

          <p className="font-mono text-sm text-cyan-200 bg-slate-900/60 rounded-xl p-4 leading-relaxed">
            {example2.sentence}
          </p>
          <p className="text-xs text-white/40 mt-2 italic">{example2.translation}</p>

          <div className="grid sm:grid-cols-2 gap-2 mt-5">
            {example2.options.map((o) => {
              const isAnswer = o.id === example2.answer;
              const isChosen = o.id === choice2;
              const answered2 = choice2 !== null;
              let cls = "border-white/15 bg-white/[0.04] hover:border-white/35 text-white/85";
              if (answered2) {
                if (isAnswer) cls = "border-emerald-400/70 bg-emerald-500/20 text-emerald-200 font-bold";
                else if (isChosen) cls = "border-rose-400/70 bg-rose-500/20 anim-shake text-rose-200";
                else cls = "border-white/10 bg-white/[0.02] opacity-50 text-white/40";
              }
              return (
                <button
                  key={o.id}
                  disabled={answered2}
                  onClick={() => {
                    setChoice2(o.id);
                    recordGrammar(update, topic.slug + "-2", o.id === example2.answer);
                    if (o.id === example2.answer) setCelebrate(true);
                  }}
                  className={`text-left rounded-xl border px-4 py-3 transition-all ${cls}`}
                >
                  <span className="font-black text-white/60 mr-2">{o.id})</span>
                  <span className="text-white/85 text-sm font-mono">{o.text}</span>
                  {answered2 && isAnswer && <span className="ml-2">✅</span>}
                  {answered2 && isChosen && !isAnswer && <span className="ml-2">❌</span>}
                </button>
              );
            })}
          </div>

          {choice2 !== null && (
            <div className="mt-5 rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-5 anim-pop">
              <p className="font-black text-cyan-300 mb-2">
                Dogru cevap: {example2.answer}
                {choice2 === example2.answer
                  ? " — Kanka sen bir efsanesin! 🎉"
                  : " — Sorun degil kanka, taktigi asagida oku, tekrar dene! 💪"}
              </p>
              <p className="text-sm text-white/75 leading-relaxed mb-3">
                <RichText text={example2.explanation} />
              </p>
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-amber-300 mb-1">🎯 Hizli Taktik</p>
                <p className="text-sm text-white/80 leading-relaxed">
                  <RichText text={example2.tactic} />
                </p>
              </div>
            </div>
          )}
        </section>
      )}

      {/* Alt Aksiyon Bari */}
      <div className="flex items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/60 border border-white/10 flex-wrap">
        <div>
          <h3 className="font-black text-white text-base">Bu Konuda Usta Ol ({topic.title})</h3>
          <p className="text-xs text-white/60 mt-0.5">
            100 ozel soru ve 500 karmasik soruyla netlerini zirveye tasi!
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={`/grammar/${topic.slug}/practice`}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 font-bold text-sm text-white shadow-lg shadow-emerald-500/20 transition-all"
          >
            🚀 100 Soruluk Konu Testini Baslat
          </Link>
          <Link
            href="/grammar/mixed-tests"
            className="px-4 py-2.5 rounded-xl border border-white/20 hover:bg-white/10 text-xs font-bold text-white transition-all"
          >
            500 Karisik Test
          </Link>
        </div>
      </div>
    </div>
  );
}

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
import { recordGrammar, useUsage } from "@/lib/store";

function mediaOptions(title: string): VideoOption[] {
  const base = title.toLowerCase();
  return [
    { label: "Dizi/Film Sahnesi", emoji: "🎬", query: `${base} grammar in movies and tv series`, tip: "Konunun dizi ve filmlerde nasıl kullanıldığını gör" },
    { label: "Telaffuz", emoji: "🗣️", query: `${base} english pronunciation`, tip: "Doğal telaffuzu dinle" },
    { label: "Kanka Anlatımı", emoji: "📺", query: `${base} konu anlatımı türkçe`, tip: "Türkçe konu anlatım videosu" },
  ];
}

export default function GrammarTopicView({ topic }: { topic: GrammarTopic }) {
  const { update } = useUsage();
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [choice, setChoice] = useState<string | null>(null);
  const [celebrate, setCelebrate] = useState(false);
  const [video, setVideo] = useState<VideoOption | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const media = mediaOptions(topic.title);

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
        message="Doğru bildin kral! 🎆"
        sub="Bu net senin, cebine koy! 👑"
      />

      <Link href="/grammar" className="text-sm text-white/50 hover:text-white mb-6 inline-block">
        ← Tüm gramer konuları
      </Link>

      {/* Başlık */}
      <div className="card-vibrant p-8 mb-8 bg-gradient-to-br from-white/[0.06] to-transparent">
        <div className="flex items-center gap-4 flex-wrap">
          <div className={`w-16 h-16 rounded-3xl bg-gradient-to-tr ${topic.color} flex items-center justify-center text-4xl shadow-xl anim-float`}>
            {topic.emoji}
          </div>
          <div>
            <span className="text-xs font-mono text-white/50">{topic.level}</span>
            <h1 className="text-3xl sm:text-4xl font-black">{topic.title}</h1>
          </div>
        </div>
        <p className="mt-4 text-white/65 leading-relaxed">
          <RichText text={topic.summary} />
        </p>

        {/* Formüller */}
        <div className="flex flex-wrap gap-2 mt-5">
          {topic.formula.map((f) => (
            <Tip marker key={f.label} tip={`${f.label} kalıbı: **${f.text}** — kanka, üzerinde bekle, sana detayını fısıldayayım.`}>
              <div className={`rounded-xl px-3 py-2 ${f.color} border border-white/10 cursor-help`}>
                <div className="text-[10px] font-mono uppercase tracking-wider opacity-70">{f.label}</div>
                <div className="font-mono font-bold text-sm">{f.text}</div>
              </div>
            </Tip>
          ))}
        </div>

        {/* Media linkleri */}
        <div className="flex flex-wrap gap-2 mt-5">
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
        </div>
      </div>

      {/* Görsel hafıza sahnesi + gerçek GIF linkleri */}
      <section className="card-vibrant p-6 mb-8">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-2">
          <h2 className="text-lg font-black">🎞️ Görsel Hafıza Köşesi</h2>
          <div className="flex gap-2">
            <a
              href={`https://giphy.com/search/${encodeURIComponent(topic.title)}`}
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-bold px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/70 hover:text-white hover:border-pink-400/50 transition-all"
              title="Bu konuyla ilgili gerçek GIF'ler (Giphy)"
            >
              🎬 Gerçek GIF'ler ↗
            </a>
            <a
              href={`https://tenor.com/search/${encodeURIComponent(topic.title)}-gifs`}
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-bold px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/70 hover:text-white hover:border-pink-400/50 transition-all"
              title="Tenor'da dizi/film GIF'leri"
            >
              🍿 Dizi GIF'leri ↗
            </a>
          </div>
        </div>
        <SceneAnim slug={topic.slug} size="text-4xl" />
        <p className="text-xs text-white/40 mt-1">
          Kanka, konuyu bu görsellerle kodla. Gerçek dizi/film GIF'leri için yukarıdaki butonlar!
        </p>
      </section>

      {/* Kurallar */}
      <section className="card-vibrant p-8 mb-8">
        <h2 className="text-xl font-black mb-4">📌 Altın Kurallar</h2>
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
        <h2 className="text-xl font-black mb-4">🎵 Hafıza Kodlamaları</h2>
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
        <h2 className="text-xl font-black mb-4">⚠️ Sık Yapılan Hatalar & Tuzaklar</h2>
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

      {/* Animasyonlu örnek soru */}
      <section className="card-vibrant p-8 mb-8">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
          <h2 className="text-xl font-black">🧪 Animasyonlu Örnek Soru</h2>
          <Tip marker tip="Adımları tek tek izler; cümlede ipucu veren kelimeler sarıyla parlar. Kanka modu: ▶ Oynat'a bas!">
            <button
              onClick={togglePlay}
              className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${
                playing
                  ? "bg-rose-500 text-white"
                  : "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/30 hover:scale-105"
              }`}
            >
              {playing ? "⏸ Durdur" : "▶ Adım Adım Oynat"}
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

        {/* Seçenekler */}
        <div className="mt-6">
          <p className="text-sm font-bold text-white/70 mb-3">
            Cevabını seç kanka:
            <Tip tip="Doğru bilirsen havai fişek patlar, yanlışta üzülme — taktik tekrar izle!">
              <span className="ml-2 cursor-help">🎇</span>
            </Tip>
          </p>
          <div className="grid sm:grid-cols-2 gap-2">
            {topic.example.options.map((o) => {
              const isAnswer = o.id === topic.example.answer;
              const isChosen = o.id === choice;
              let cls = "border-white/15 bg-white/[0.04] hover:border-white/35";
              if (answered) {
                if (isAnswer) cls = "border-emerald-400/70 bg-emerald-500/20";
                else if (isChosen) cls = "border-rose-400/70 bg-rose-500/20 anim-shake";
                else cls = "border-white/10 bg-white/[0.02] opacity-50";
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
                Doğru cevap: {topic.example.answer}
                {isCorrect
                  ? " — Tebrikler kral! 🎉 Net cebinde!"
                  : " — Olsun kanka, her yanlış bir netin provası. 💪"}
              </p>
              <p className="text-sm text-white/75 leading-relaxed mb-3">
                <RichText text={topic.example.explanation} />
              </p>
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-cyan-300 mb-1">🎯 Çözüm Taktikleri</p>
                <p className="text-sm text-white/80 leading-relaxed">
                  <RichText text={topic.example.tactic} />
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

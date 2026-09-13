"use client";

import { useEffect, useMemo, useState } from "react";
import { WORDS } from "@/lib/data-vocabulary";
import Cube from "@/components/Cube";
import Celebration from "@/components/Celebration";
import Tip from "@/components/Tip";
import VideoModal, { type VideoOption } from "@/components/VideoModal";
import SceneAnim from "@/components/SceneAnim";
import AccentBar from "@/components/AccentBar";
import { MEDIA_SOURCE_TIP } from "@/lib/media-source";
import { recordWord, useUsage, wordScore } from "@/lib/store";

const GRADIENTS = [
  "linear-gradient(135deg,#7c3aed,#06b6d4)",
  "linear-gradient(135deg,#db2777,#f59e0b)",
  "linear-gradient(135deg,#059669,#0ea5e9)",
  "linear-gradient(135deg,#e11d48,#8b5cf6)",
  "linear-gradient(135deg,#2563eb,#22d3ee)",
];

function correctLastStreak(streak: number): string {
  if (streak > 0 && streak % 5 === 0) return "Kral gibi gidiyorsun, hız kesme! 👑";
  return "Kaydını aldık, sana göre ilerliyoruz kanka.";
}

export default function FlashcardsPage() {
  const { usage, update } = useUsage();
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [streak, setStreak] = useState(0);
  const [celebrate, setCelebrate] = useState(false);
  const [celebrateMsg, setCelebrateMsg] = useState("");
  const [video, setVideo] = useState<VideoOption | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  // Kullanıma göre sırala: en zayıf (çok yanlış, az doğru) kelimeler önce gelir.
  const ordered = useMemo(() => {
    return [...WORDS].sort((a, b) => wordScore(usage.words[String(a.id)]) - wordScore(usage.words[String(b.id)]));
  }, [usage.words]);

  const word = ordered[idx] || WORDS[0];
  const total = ordered.length;
  const stat = usage.words[String(word.id)];

  useEffect(() => {
    setFlipped(false);
  }, [idx]);

  const go = (delta: number) => setIdx((i) => (i + delta + total) % total);

  const mark = (correct: boolean) => {
    recordWord(update, word.id, correct);
    if (correct) {
      const ns = streak + 1;
      setStreak(ns);
      if (ns % 5 === 0) {
        setCelebrateMsg(`Seri ${ns} kanka! 🔥 Zincirleme netler geliyor!`);
        setCelebrate(true);
      }
    } else {
      setStreak(0);
      setCelebrateMsg("Olsun kanka, bu kelime artık öncelik listende! 💪");
      setCelebrate(true);
    }
    go(1);
  };

  const videoOptions = useMemo<VideoOption[]>(
    () => [
      { label: "Dizi/Film Sahnesi", emoji: "🎬", query: `${word.word} in movies and tv series`, tip: "Bu kelimenin dizi/filmlerdeki gerçek kullanımı" },
      { label: "Telaffuz", emoji: "🗣️", query: `${word.word} pronunciation`, tip: "Kelimenin doğru telaffuzu" },
      { label: "Cümlede Kullanım", emoji: "📝", query: `${word.word} example sentence`, tip: "Örnek cümlelerde nasıl geçtiği" },
    ],
    [word.word]
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {videoOpen && (
        <VideoModal
          title={`${word.word} — Mini Video`}
          options={videoOptions}
          active={video}
          onClose={() => setVideoOpen(false)}
          onSelect={(o) => setVideo(o)}
        />
      )}
      <Celebration show={celebrate} onDone={() => setCelebrate(false)} message={celebrateMsg} sub={correctLastStreak(streak)} />

      <header className="text-center mb-8">
        <h1 className="text-4xl font-black mb-2">
          🃏 <span className="gradient-text">3D Flashcards</span>
        </h1>
        <p className="text-white/60">
          Kanka, kartı çevir, küpü döndür, kelimeyi kodla. En zayıf kelimelerin önce gelir — öğren, ilerle! 🔥
        </p>
      </header>

      {/* Seri göstergesi */}
      {streak >= 2 && (
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-400/40 text-orange-300 font-black text-sm anim-pop">
            🔥 {streak} seri! Böyle devam kral!
          </span>
        </div>
      )}

      {/* Progress */}
      <div className="max-w-md mx-auto mb-8">
        <div className="flex justify-between text-xs text-white/50 mb-1">
          <span>
            Kelime {idx + 1}/{total}
          </span>
          <span>{stat ? `Bu kelime: ${stat.c}✓ ${stat.w}✗` : "Yeni kelime ✨"}</span>
        </div>
        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-pink-500 to-cyan-400 transition-all duration-500"
            style={{ width: `${Math.round(((idx + 1) / total) * 100)}%` }}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* 3D küp */}
        <div className="order-2 md:order-1 flex flex-col items-center gap-3">
          <Cube front={word.word} back={word.tr} color={GRADIENTS[idx % GRADIENTS.length]} />
          <p className="text-xs text-white/40 font-mono">🖱️ Küpü sürükleyerek döndür</p>
          <SceneAnim slug={word.category} size="text-2xl" />
          <a
            href={`https://giphy.com/search/${encodeURIComponent(word.word)}`}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] font-bold px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/60 hover:text-white hover:border-pink-400/50 transition-all"
          >
            🎬 Bu kelimeyle ilgili GIF'ler ↗
          </a>
        </div>

        {/* Kart */}
        <div className="order-1 md:order-2">
          <div className="flip-scene h-72 cursor-pointer" onClick={() => setFlipped(!flipped)}>
            <div className={`flip-card relative w-full h-full ${flipped ? "flipped" : ""}`}>
              {/* Ön yüz */}
              <div className="flip-face card-vibrant p-8 flex flex-col items-center justify-center text-center">
                <span className="text-xs font-mono px-2 py-1 rounded-full bg-white/10 text-white/60 mb-3">
                  {word.category} · {word.type}
                </span>
                <div className="text-6xl mb-3">{word.emoji}</div>
                <div className="text-3xl font-black gradient-text">{word.word}</div>
                <p className="text-xs text-white/40 mt-4">Kartı çevirmek için tıkla 👆</p>
              </div>
              {/* Arka yüz */}
              <div className="flip-face flip-back card-vibrant p-8 flex flex-col justify-center">
                <div className="text-2xl font-black mb-1">{word.tr}</div>
                <p className="text-xs text-white/50 italic mb-4">💡 {word.hint}</p>
                <p className="text-sm text-white/80 leading-relaxed font-mono">{word.example}</p>
                <p className="text-xs text-white/50 mt-2">{word.exampleTr}</p>
              </div>
            </div>
          </div>

          {/* Media linkleri */}
          <div className="flex flex-wrap items-center gap-2 mt-4">
            {videoOptions.map((o) => (
              <button
                key={o.label}
                onClick={() => {
                  setVideo(o);
                  setVideoOpen(true);
                }}
                className="text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/15 bg-white/5 text-white/60 hover:text-white hover:border-cyan-400/50 transition-all"
                title={o.tip}
              >
                {o.emoji} {o.label} ▶
              </button>
            ))}
            <Tip tip={MEDIA_SOURCE_TIP} marker>
              <button className="text-[11px] font-bold px-2 py-1 rounded-full border border-white/15 bg-white/5 text-white/60 hover:text-white transition-all">
                ℹ️
              </button>
            </Tip>
          </div>

          {/* 5 aksanda telaffuz */}
          <div className="mt-3">
            <p className="text-[10px] font-mono uppercase tracking-wider text-white/40 mb-1.5">
              🗣️ Aksanlar — ayrı ayrı dinle
            </p>
            <AccentBar text={word.word} />
          </div>

          {/* Kontroller */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={() => go(-1)}
              className="px-4 py-3 rounded-xl border border-white/20 font-bold hover:bg-white/10 transition-all"
              aria-label="Önceki"
            >
              ←
            </button>
            <Tip marker tip="Bu kelime 'tekrar listesine' girer; sonraki turda önce o gelir. Kanka, yanlış yapmak öğrenmenin yarısı!">
              <button
                onClick={() => mark(false)}
                className="flex-1 px-4 py-3 rounded-xl bg-rose-500/20 border border-rose-400/40 font-bold text-rose-200 hover:bg-rose-500/30 transition-all"
              >
                🔁 Tekrar Et
              </button>
            </Tip>
            <Tip marker tip="Doğru bilirsen kaydını güçlendirirsin; 5 seride havai fişek patlar! 🎆">
              <button
                onClick={() => mark(true)}
                className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 font-bold hover:scale-105 transition-transform text-white"
              >
                ✓ Bildim
              </button>
            </Tip>
          </div>
        </div>
      </div>
    </div>
  );
}

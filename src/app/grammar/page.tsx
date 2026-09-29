"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Sparkles, ArrowRight, Key, AlertTriangle, Layers } from "lucide-react";
import { GRAMMAR_TOPICS } from "@/lib/grammar-data";
import { GRAMMAR_CURRICULUM } from "@/lib/grammar-curriculum";
import { cn } from "@/lib/utils";
import GrammarStarter from "@/components/grammar/GrammarStarter";

// 27 resmi konuyu sırasıyla getir
const CURRICULUM_TOPICS = GRAMMAR_CURRICULUM.map((c) => {
  const fullData = GRAMMAR_TOPICS.find((t) => t.slug === c.slug);
  return {
    slug: c.slug,
    title: c.title,
    emoji: c.emoji,
    category: c.category,
    level: c.level,
    summary: fullData?.simpleSummary || c.summary,
    colorTheme: fullData?.colorTheme || "from-indigo-600 to-purple-700",
    signalWords: fullData?.signalWords || ["YDS", "Grammar", "Taktik"],
  };
});

const CATEGORIES = [
  { id: "all", label: "Tüm Müfredat (27)" },
  { id: "starter", label: "🌱 Sıfırdan A1/A2 Temeller (24)" },
  { id: "tenses", label: "12 Tense Zamanlar (12)" },
  { id: "clauses", label: "Cümlecikler & Bağlaçlar (5)" },
  { id: "structures", label: "Yapılar & Edatlar (9)" },
  { id: "advanced", label: "İleri Düzey (1)" },
];

export default function GrammarPage() {
  const [activeCat, setActiveCat] = useState("all");

  const filteredTopics = activeCat === "all"
    ? CURRICULUM_TOPICS
    : CURRICULUM_TOPICS.filter((t) => t.category === activeCat);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Üst Banner */}
      <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-r from-purple-950 via-indigo-950 to-pink-950 border-2 border-purple-500/30 shadow-2xl space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-xs font-bold text-purple-300">
          <BookOpen className="w-4 h-4" />
          <span>27 Tam YDS Gramer Konusu • 12 Ayrı Tense • İnteraktif Animasyonlar</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          YDS Gramerini Formüllerle & Görsel Hafızayla Çözün
        </h1>
        <p className="text-xs md:text-sm text-white/80 max-w-2xl leading-relaxed">
          A1 seviyesinin anlayacağı sadelikte Türkçe anlatım, interaktif zaman çizelgesi animasyonları (TenseTimeline), YDS tuzak uyarıları ve her konu için 100'er soruluk optik test şablonu.
        </p>

        {/* Karışık Test & Pratik Butonları */}
        <div className="flex flex-wrap gap-2.5 pt-2">
          <Link
            href="/grammar/starter"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-black text-xs shadow-lg shadow-teal-500/25 transition-all flex items-center gap-2"
          >
            <span>🌱</span>
            <span>Sıfırdan A1/A2 Temel Gramer (Sesli & Doğal Aksanlar)</span>
          </Link>
          <Link
            href="/grammar/audio"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-xs shadow-lg shadow-orange-500/20 transition-all flex items-center gap-2"
          >
            <span>🎧</span>
            <span>Sesli Gramer & Hafıza Kodları</span>
          </Link>
          <Link
            href="/grammar/mixed-tests"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-black text-xs shadow-lg shadow-purple-500/30 transition-all flex items-center gap-2"
          >
            <span>🔀</span>
            <span>500 Karışık Gramer Sınavı (Zayıf Konu Analizli)</span>
          </Link>
          <Link
            href="/tactics/practice"
            className="px-4 py-2.5 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 font-bold text-xs transition-all flex items-center gap-1.5"
          >
            <span>🎯</span>
            <span>600 Taktik Sorusu</span>
          </Link>
        </div>

        {/* Kategori Filtresi */}
        <div className="flex flex-wrap gap-2 pt-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-bold transition-all border",
                activeCat === cat.id
                  ? "bg-yellow-300 text-slate-950 border-yellow-300 shadow-lg scale-105"
                  : "bg-white/10 hover:bg-white/20 text-white/80 border-white/10"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Sıfırdan Temel Modu veya 27 Konu Izgarası */}
      {activeCat === "starter" ? (
        <GrammarStarter />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTopics.map((topic, idx) => (
          <div
            key={topic.slug}
            className="card-vibrant p-6 space-y-4 flex flex-col justify-between hover:border-purple-400/50 group transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-4xl">{topic.emoji}</span>
                <div className="flex items-center gap-1.5">
                  <span className="glass-pill text-[10px] text-cyan-300 font-bold">
                    {topic.level}
                  </span>
                  <span className="glass-pill text-[10px] font-mono text-yellow-300">
                    Konu #{idx + 1}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-black text-white group-hover:text-yellow-300 transition-colors">
                {topic.title}
              </h3>

              <p className="text-xs text-white/75 leading-relaxed bg-black/20 p-3 rounded-2xl border border-white/10">
                💡 {topic.summary}
              </p>

              <div className="flex flex-wrap gap-1 pt-1">
                {topic.signalWords.slice(0, 4).map((w, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-full bg-white/5 text-[10px] font-mono text-cyan-300 border border-white/10"
                  >
                    {w}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <Link
                href={`/grammar/${topic.slug}`}
                className={cn(
                  "py-2.5 px-3 rounded-xl text-white font-extrabold text-[11px] shadow-md hover:scale-[1.02] transition-transform flex items-center justify-center gap-1 bg-gradient-to-r text-center",
                  topic.colorTheme
                )}
              >
                <span>Konuyu Aç</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
              <Link
                href={`/grammar/${topic.slug}/practice`}
                className="py-2.5 px-3 rounded-xl text-cyan-200 border border-cyan-400/40 bg-cyan-950/40 hover:bg-cyan-900/50 font-extrabold text-[11px] transition-all flex items-center justify-center gap-1 text-center"
              >
                <span>🎯 100 Soru</span>
              </Link>
            </div>
          </div>
        ))}
        </div>
      )}
    </div>
  );
}

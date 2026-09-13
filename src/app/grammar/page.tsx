import Link from "next/link";
import { BookOpen, Sparkles, ArrowRight, Key, AlertTriangle } from "lucide-react";
import { GRAMMAR_TOPICS } from "@/lib/grammar-data";
import { cn } from "@/lib/utils";

export default function GrammarPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Üst Banner */}
      <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-r from-purple-950 via-indigo-950 to-pink-950 border-2 border-purple-500/30 shadow-2xl space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-xs font-bold text-purple-300">
          <BookOpen className="w-4 h-4" />
          <span>15 Temel YDS Gramer Konusu • Renk Kodlu Formüller</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          YDS Gramerini Formüllerle & Kafada Kodlayarak Çözün
        </h1>
        <p className="text-xs md:text-sm text-white/80 max-w-2xl leading-relaxed">
          A1 seviyesinin anlayacağı sadelikte Türkçe anlatım, renk kodlu zaman çizelgeleri, YDS tuzak uyarıları ve her konu için 100'er soruluk optik test şablonu.
        </p>
      </div>

      {/* 15 Konu Izgarası */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GRAMMAR_TOPICS.map((topic, idx) => (
          <div
            key={topic.slug}
            className="card-vibrant p-6 space-y-4 flex flex-col justify-between hover:border-purple-400/50 group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-4xl">{topic.emoji}</span>
                <span className="glass-pill text-[10px] font-mono text-yellow-300">
                  Konu #{idx + 1}
                </span>
              </div>

              <h3 className="text-xl font-black text-white group-hover:text-yellow-300 transition-colors">
                {topic.title}
              </h3>

              <p className="text-xs text-white/75 leading-relaxed bg-black/20 p-3 rounded-2xl border border-white/10">
                💡 {topic.simpleSummary}
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

            <Link
              href={`/grammar/${topic.slug}`}
              className={cn(
                "w-full py-3 rounded-xl text-white font-extrabold text-xs shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-1.5 bg-gradient-to-r",
                topic.colorTheme
              )}
            >
              <span>Konuyu & 100 Soruyu Aç</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

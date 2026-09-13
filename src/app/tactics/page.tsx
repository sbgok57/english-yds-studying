import { Compass, Sparkles, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import { YDS_QUESTION_TYPES } from "@/lib/yds-constants";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function TacticsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Üst Banner */}
      <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-r from-cyan-950 via-blue-950 to-indigo-950 border-2 border-cyan-500/30 shadow-2xl space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-xs font-bold text-cyan-300">
          <Compass className="w-4 h-4" />
          <span>11 Soru Tipi • Adım Adım Çözüm Algoritmaları</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          YDS'nin 11 Soru Tipini Çözme Rehberi
        </h1>
        <p className="text-xs md:text-sm text-white/80 max-w-2xl leading-relaxed">
          Her soru tipinin kendine özgü bir şifresi vardır. Çeviri sorularından restatement'a, cümle tamamlamadan akışı bozan cümlelere kadar sınavda zaman kazandıran kesin stratejiler.
        </p>
      </div>

      {/* 11 Soru Tipi Kartları */}
      <div className="space-y-6">
        {YDS_QUESTION_TYPES.map((type, idx) => (
          <div
            key={type.id}
            className="card-vibrant p-6 md:p-8 space-y-4 hover:border-cyan-400/40 transition-all"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{type.icon}</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-white">
                    {idx + 1}. {type.nameTr}
                  </h3>
                  <span className="text-xs text-cyan-300 font-mono">
                    {type.nameEn} • Soru Aralığı: {type.questionRange} ({type.count} Soru)
                  </span>
                </div>
              </div>

              <Link
                href="/exams/yds-2024-ilkbahar"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white flex items-center gap-1"
              >
                <span>Örnek Soru Çöz</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* Taktik Özeti */}
              <div className="bg-black/30 p-4 rounded-2xl border border-white/10 space-y-1.5">
                <p className="font-bold text-yellow-300 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                  Temel Çözüm Algoritması
                </p>
                <p className="text-white/80 leading-relaxed">
                  {type.tacticSummary}
                </p>
              </div>

              {/* Altın Strateji */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-4 rounded-2xl border border-cyan-500/30 space-y-1.5">
                <p className="font-bold text-cyan-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Sınav Kazandıran Altın Kural
                </p>
                <p className="text-white/90 leading-relaxed">
                  {type.keyStrategy}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

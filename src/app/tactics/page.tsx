"use client";

import { useState } from "react";
import { Compass, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, Clock, ShieldCheck } from "lucide-react";
import { YDS_QUESTION_TYPES, type YdsQuestionType } from "@/lib/yds-constants";
import WorkedExamplePlayer from "@/components/tactics/WorkedExamplePlayer";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function TacticsPage() {
  const [selectedTypeId, setSelectedTypeId] = useState<string>("vocabulary");

  const currentType = YDS_QUESTION_TYPES.find((t) => t.id === selectedTypeId) || YDS_QUESTION_TYPES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Üst Banner */}
      <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-r from-cyan-950 via-blue-950 to-indigo-950 border-2 border-cyan-500/30 shadow-2xl space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-xs font-bold text-cyan-300">
          <Compass className="w-4 h-4" />
          <span>YDS · YDT · YÖKDİL • 11 Soru Tipi • Adım Adım Çözüm & Çeldirici Eleme</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          DİL MASTER Soru Çözme Rehberi & Taktik Laboratuvarı
        </h1>
        <p className="text-xs md:text-sm text-white/80 max-w-2xl leading-relaxed">
          YDS, YDT ve YÖKDİL sınavlarında soru tiplerinin stratejik şifreleri, zaman yönetimi (YDT: 120 dk, YDS/YÖKDİL: 180 dk) ve şık eleme sanatını adım adım keşfedin.
        </p>

        {/* 600 Soru ve 100 Önemli Soru Eylemleri */}
        <div className="flex flex-wrap gap-2.5 pt-2">
          <Link
            href="/tactics/practice"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black text-xs shadow-lg shadow-emerald-500/30 transition-all flex items-center gap-2"
          >
            <span>🎯</span>
            <span>600 Soruluk Taktik Pratik Bankasını Başlat</span>
          </Link>
          <Link
            href="/tactics/practice?star=1"
            className="px-4 py-2.5 rounded-full bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 text-amber-300 font-bold text-xs transition-all flex items-center gap-1.5"
          >
            <span>⭐</span>
            <span>100 Önemli Çözümlü Soru</span>
          </Link>
        </div>

        {/* Soru Tipi Seçici Hap Butonlar */}
        <div className="flex flex-wrap gap-2 pt-2">
          {YDS_QUESTION_TYPES.map((type, idx) => (
            <button
              key={type.id}
              onClick={() => setSelectedTypeId(type.id)}
              className={cn(
                "px-3.5 py-2 rounded-full text-xs font-bold transition-all border flex items-center gap-1.5",
                selectedTypeId === type.id
                  ? "bg-cyan-400 text-slate-950 border-cyan-400 shadow-lg scale-105"
                  : "bg-white/10 hover:bg-white/20 text-white/80 border-white/10"
              )}
            >
              <span>{type.icon}</span>
              <span>{idx + 1}. {type.nameEn}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Seçilen Soru Tipi Detay Kartı */}
      <div className="card-vibrant p-6 md:p-8 space-y-6">
        {/* Başlık ve Hedef Süre */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div className="flex items-center gap-3.5">
            <span className="text-4xl">{currentType.icon}</span>
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white">
                {currentType.nameTr}
              </h2>
              <span className="text-xs text-cyan-300 font-mono">
                {currentType.nameEn} • Soru Aralığı: {currentType.questionRange} ({currentType.count} Soru)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-2 bg-yellow-400/15 border border-yellow-400/40 text-yellow-300 px-4 py-2 rounded-2xl text-xs font-bold">
              <Clock className="w-4 h-4" />
              <span>Hedef Süre: {currentType.timeTarget}</span>
            </div>
            <Link
              href={`/tactics/${currentType.id}`}
              className="px-4 py-2 rounded-2xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 font-bold text-xs transition-all flex items-center gap-1.5"
            >
              <span>🏆</span>
              <span>7 Seviye Rehberi & 100 Soru →</span>
            </Link>
            <Link
              href={`/tactics/practice?type=${currentType.id}`}
              className="px-4 py-2 rounded-2xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/40 text-emerald-300 font-bold text-xs transition-all flex items-center gap-1.5"
            >
              <span>🎯</span>
              <span>Bu Tipi Test Et →</span>
            </Link>
          </div>
        </div>

        {/* 2 Kolonlu Temel Taktik ve Şık Eleme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Temel Çözüm Algoritması */}
          <div className="bg-black/30 p-5 rounded-2xl border border-white/10 space-y-3">
            <h3 className="font-bold text-yellow-300 flex items-center gap-2 text-sm">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              Temel Çözüm Algoritması & Mantık
            </h3>
            <p className="text-white/85 text-xs md:text-sm leading-relaxed">
              {currentType.tacticSummary}
            </p>
            <div className="pt-2 border-t border-white/10 text-xs text-cyan-200">
              <strong>💡 Altın Kural:</strong> {currentType.keyStrategy}
            </div>
          </div>

          {/* Şık Eleme Sanatı */}
          <div className="bg-gradient-to-br from-indigo-950/40 to-slate-900/60 p-5 rounded-2xl border border-indigo-500/30 space-y-3">
            <h3 className="font-bold text-cyan-300 flex items-center gap-2 text-sm">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              Şık Eleme Sanatı (Elimination Tactics)
            </h3>
            <ul className="space-y-2 text-xs text-white/80">
              {currentType.eliminationTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* İnteraktif Worked Example Oynatıcıları */}
        {currentType.workedExamples && currentType.workedExamples.length > 0 && (
          <div className="space-y-4 pt-4 border-t border-white/10">
            <h3 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-400">
              🎬 Adım Adım Çözümlü Örnekler ({currentType.workedExamples.length} Örnek)
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {currentType.workedExamples.map((ex, idx) => (
                <WorkedExamplePlayer key={idx} ex={ex} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

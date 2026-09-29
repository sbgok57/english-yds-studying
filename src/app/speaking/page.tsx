"use client";

import React from "react";
import Link from "next/link";
import { SpeakingLab } from "@/components/speaking/SpeakingLab";

export default function SpeakingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-6 px-3 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-5">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
          <Link href="/" className="hover:text-cyan-400 transition-colors">
            Ana Sayfa
          </Link>
          <span>/</span>
          <span className="text-cyan-300 font-semibold">AI Speaking Lab</span>
        </div>

        {/* Header Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-cyan-950/60 via-slate-900 to-indigo-950/60 border border-cyan-800/30 p-5 rounded-3xl shadow-xl">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-2">
              <span>🎙️</span> Canlı Ses & Yazı Destekli Konuşma Koçu
            </div>
            <h1 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
              YDS Master AI Speaking Lab
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Hem mikrofona konuşarak hem de yazarak pratik yap. Cümlelerin üzerine tıkladığında doğal Türkçe çevirisini ve akademik kullanım ipuçlarını anında öğren!
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/reading"
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all flex items-center gap-1.5"
            >
              <span>🔬</span> Reading Lab
            </Link>
            <Link
              href="/sertifikalar"
              className="px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-bold border border-amber-500/40 transition-all flex items-center gap-1.5"
            >
              <span>🏅</span> Sertifikalarım
            </Link>
          </div>
        </div>

        {/* Speaking Lab Core Component */}
        <SpeakingLab />
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RotateCcw, ArrowLeft, ShieldAlert } from "lucide-react";

export default function ExamError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Exam page error caught by boundary:", error);
  }, [error]);

  return (
    <div className="min-h-[75vh] flex items-center justify-center p-4">
      <div className="bg-slate-900 border-2 border-rose-500/40 rounded-3xl shadow-2xl p-8 max-w-lg text-center space-y-5 text-white">
        <div className="w-16 h-16 rounded-2xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center mx-auto text-3xl">
          🔧
        </div>
        <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300">
          Sınav Yüklenirken Bir Sorun Oluştu
        </h1>
        <p className="text-sm text-white/80">
          Merak etme — işaretlediğin cevaplar tarayıcı hafızasında güvende, hiçbir verin kaybolmadı! 💾
        </p>
        {error.message && (
          <div className="text-xs text-rose-300 font-mono bg-black/40 rounded-xl p-3 border border-rose-500/20 text-left overflow-x-auto max-h-24">
            {error.message}
          </div>
        )}
        <div className="flex flex-wrap gap-3 justify-center pt-2">
          <button
            onClick={() => reset()}
            className="flex items-center gap-2 px-6 py-3 rounded-full font-black text-white bg-gradient-to-r from-indigo-600 to-violet-600 shadow-lg hover:scale-105 transition-transform text-sm"
          >
            <RotateCcw className="w-4 h-4" /> Tekrar Dene
          </button>
          <Link
            href="/exams"
            className="flex items-center gap-2 px-6 py-3 rounded-full font-bold bg-white/10 hover:bg-white/20 text-white text-sm transition-colors border border-white/20"
          >
            <ArrowLeft className="w-4 h-4" /> Sınav Arşivi
          </Link>
        </div>
      </div>
    </div>
  );
}

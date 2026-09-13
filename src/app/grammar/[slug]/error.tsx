"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RotateCcw, ArrowLeft, BookOpen } from "lucide-react";

export default function GrammarError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Grammar topic page error caught by boundary:", error);
  }, [error]);

  return (
    <div className="min-h-[75vh] flex items-center justify-center p-4">
      <div className="bg-slate-900 border-2 border-purple-500/40 rounded-3xl shadow-2xl p-8 max-w-lg text-center space-y-5 text-white">
        <div className="w-16 h-16 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mx-auto text-3xl">
          📖
        </div>
        <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
          Gramer Konusu Yüklenemedi
        </h1>
        <p className="text-sm text-white/80">
          Konu içeriği hazırlanırken geçici bir aksaklık oluştu. Lütfen sayfayı yenilemeyi deneyin.
        </p>
        {error.message && (
          <div className="text-xs text-purple-300 font-mono bg-black/40 rounded-xl p-3 border border-purple-500/20 text-left overflow-x-auto max-h-24">
            {error.message}
          </div>
        )}
        <div className="flex flex-wrap gap-3 justify-center pt-2">
          <button
            onClick={() => reset()}
            className="flex items-center gap-2 px-6 py-3 rounded-full font-black text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg hover:scale-105 transition-transform text-sm"
          >
            <RotateCcw className="w-4 h-4" /> Tekrar Dene
          </button>
          <Link
            href="/grammar"
            className="flex items-center gap-2 px-6 py-3 rounded-full font-bold bg-white/10 hover:bg-white/20 text-white text-sm transition-colors border border-white/20"
          >
            <ArrowLeft className="w-4 h-4" /> Tüm Gramer Konuları
          </Link>
        </div>
      </div>
    </div>
  );
}

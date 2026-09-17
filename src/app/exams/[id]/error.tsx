"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import { RotateCcw, ArrowLeft, ShieldAlert, Copy, Check } from "lucide-react";

export default function ExamError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // SECTION G TELEMETRY: Structured logging without PII
    console.error("[TELEMETRY: Exam Runner Error]", {
      name: error.name,
      message: error.message,
      digest: error.digest,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      pathname: typeof window !== "undefined" ? window.location.pathname : "/exams/[id]",
      componentLabel: "ExamRunnerBoundary",
      timestamp: new Date().toISOString(),
    });
  }, [error]);

  const copyErrorCode = () => {
    const code = `[${error.name}] ${error.message} (Digest: ${error.digest || "none"})`;
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

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
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-black text-white bg-gradient-to-r from-indigo-600 to-violet-600 shadow-lg hover:scale-105 transition-transform text-xs sm:text-sm"
          >
            <RotateCcw className="w-4 h-4" /> Sınava Yeniden Başla
          </button>
          <Link
            href="/exams"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm transition-colors border border-white/20"
          >
            <ArrowLeft className="w-4 h-4" /> Sınav Salonuna Dön
          </Link>
          <button
            onClick={copyErrorCode}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold bg-white/5 hover:bg-white/10 text-white/80 text-xs transition-colors border border-white/15"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? "Kopyalandı" : "Hata Kodunu Kopyala"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

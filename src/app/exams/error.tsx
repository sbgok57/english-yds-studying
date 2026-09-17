"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { RotateCcw, ArrowLeft, Copy, Check, ShieldAlert } from "lucide-react";

export default function ExamsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // SECTION G TELEMETRY: Structured logging without PII
    console.error("[TELEMETRY: Exams Error]", {
      name: error.name,
      message: error.message,
      digest: error.digest,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      pathname: typeof window !== "undefined" ? window.location.pathname : "/exams",
      componentLabel: "ExamsDirectory",
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
      <div className="card-vibrant max-w-lg w-full text-center p-8 space-y-5 bg-slate-900/90 border-2 border-rose-500/40">
        <div className="w-16 h-16 rounded-2xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center mx-auto text-3xl">
          🧯
        </div>
        <h1 className="text-2xl font-black text-white">Sınav Salonu Yüklenemedi</h1>
        <p className="text-sm text-white/70">
          Sınav listesi hazırlanırken geçici bir aksaklık oluştu. Kayıtların ve çözdüğün sorular tarayıcında güvende.
        </p>

        {error.message && (
          <div className="text-xs text-rose-300 font-mono bg-black/40 rounded-xl p-3 border border-rose-500/20 text-left overflow-x-auto max-h-28">
            {error.message}
          </div>
        )}

        <div className="flex flex-wrap gap-3 justify-center pt-2">
          <button
            onClick={() => reset()}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:scale-105 transition-transform text-xs sm:text-sm"
          >
            <RotateCcw className="w-4 h-4" /> Tekrar Dene
          </button>
          <Link
            href="/"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm transition-colors border border-white/20"
          >
            <ArrowLeft className="w-4 h-4" /> Ana Sayfaya Dön
          </Link>
          <button
            onClick={copyErrorCode}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold bg-white/5 hover:bg-white/10 text-white/80 text-xs transition-colors border border-white/15"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? "Kopyalandı" : "Hata Kodunu Kopyala"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

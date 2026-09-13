"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html lang="tr">
      <body className="bg-slate-950 text-white min-h-screen flex items-center justify-center p-4">
        <div className="bg-slate-900 border-2 border-indigo-500/40 rounded-3xl shadow-2xl p-8 max-w-md text-center space-y-5">
          <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mx-auto text-3xl">
            ⚡
          </div>
          <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-400">
            YDS Master
          </h1>
          <p className="text-sm text-white/80">
            Beklenmeyen bir hata oluştu. Verileriniz koruma altındadır.
          </p>
          {error.message && (
            <p className="text-xs font-mono text-indigo-300 bg-black/40 p-3 rounded-xl border border-white/10 text-left">
              {error.message}
            </p>
          )}
          <div className="flex gap-3 justify-center pt-2">
            <button
              onClick={() => reset()}
              className="px-6 py-3 rounded-full font-black text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg hover:scale-105 transition-transform text-sm"
            >
              Yeniden Başlat 🔄
            </button>
            <a
              href="/"
              className="px-6 py-3 rounded-full font-bold bg-white/10 hover:bg-white/20 text-white text-sm transition-colors border border-white/20 inline-block"
            >
              Ana Sayfa 🏠
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}

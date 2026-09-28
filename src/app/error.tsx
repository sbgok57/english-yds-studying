// ============================================================
// Segment hata sınırı — hiçbir sayfa beyaz ekranla ölmez.
// Next.js bunu otomatik yakalar; kullanıcıya Türkçe kart + retry.
// ============================================================
'use client';

import React, { useEffect } from 'react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Üretimde izleme servisi için
    console.error('[hata-kalkan]', error.digest, error.message);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 text-center">
      <p className="text-5xl">😵💫</p>
      <h1 className="mt-4 text-xl font-extrabold text-white">Bir şeyler ters gitti</h1>
      <p className="mt-2 text-sm text-slate-400">
        Sorun bizden kaynaklanıyor, sende değil. Ekranı yenilemeyi dene; düzelmezse
        aşağıdaki kodla bize bildir, hemen çözeriz.
      </p>
      {error.digest && (
        <p className="mt-3 rounded-lg bg-slate-800 px-3 py-1 font-mono text-xs text-slate-400">
          Hata kodu: {error.digest}
        </p>
      )}
      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition"
        >
          🔄 Tekrar dene
        </button>
        <a
          href="/"
          className="rounded-xl bg-slate-800 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-700 transition"
        >
          Ana sayfa
        </a>
      </div>
    </main>
  );
}

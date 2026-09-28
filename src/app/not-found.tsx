// ============================================================
// 404 sayfası — yanlış link bile kullanıcıyı kaybetmez
// ============================================================
import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 text-center">
      <p className="text-5xl">🧭</p>
      <h1 className="mt-4 text-xl font-extrabold text-white">Sayfa bulunamadı</h1>
      <p className="mt-2 text-sm text-slate-400">
        Aradığın sayfa taşınmış ya da kaldırılmış olabilir. Çalışma planına geri dönelim!
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition"
        >
          Ana sayfa
        </Link>
        <Link
          href="/grammar/audio"
          className="rounded-xl bg-slate-800 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-700 transition"
        >
          🎧 Sesli gramer
        </Link>
      </div>
    </main>
  );
}

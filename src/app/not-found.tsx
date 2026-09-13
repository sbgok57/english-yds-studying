import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="card-vibrant p-8 md:p-12 text-center max-w-lg w-full space-y-5">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-4xl shadow-xl">
          🧭
        </div>
        <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-300">
          404 — Sayfa Bulunamadı
        </h1>
        <p className="text-sm text-white/70 leading-relaxed">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir. Merak etmeyin, YDS hazırlık yolculuğunuza ana sayfadan devam edebilirsiniz.
        </p>
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 font-black text-sm text-white shadow-lg hover:scale-105 transition-transform"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Ana Sayfaya Dön</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

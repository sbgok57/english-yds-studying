import Link from "next/link";

const QUICK = [
  { href: "/grammar", label: "Gramer", emoji: "📖" },
  { href: "/tactics", label: "Taktikler", emoji: "🎯" },
  { href: "/games", label: "Oyunlar", emoji: "🎮" },
  { href: "/exams", label: "Sınavlar", emoji: "⏱️" },
  { href: "/arsiv", label: "Arşiv", emoji: "🗄️" },
  { href: "/kilavuz", label: "Kılavuz", emoji: "📘" },
];

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6">
      <div className="card-vibrant p-10 text-center max-w-lg w-full space-y-5">
        <div className="text-5xl">🧭</div>
        <h1 className="text-3xl font-black gradient-text">404</h1>
        <p className="text-sm text-white/70">
          Kanka, aradığın sayfa taşınmış ya da hiç olmamış olabilir. Panik yok — şuradan devam et:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {QUICK.map((q) => (
            <Link
              key={q.href}
              href={q.href}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm font-bold text-white/80 hover:border-cyan-400/50 hover:text-white transition-all"
            >
              {q.emoji} {q.label}
            </Link>
          ))}
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 font-bold hover:scale-105 transition-transform"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}

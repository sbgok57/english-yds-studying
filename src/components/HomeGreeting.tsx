"use client";

import { useUsage } from "@/lib/store";

const LINES = [
  "Kanka, bugün çalıştığın her kelime, yarınki netinin teminatıdır. ✨",
  "Kral, geri döndün! Devam et, netler uçuşa geçecek. 🚀",
  "YDS'yi fethetmek maraton kanka, sen koşmaya devam et. 🏃",
  "Bugün 10 kelime + 1 konu = yarının altın netleri. 👑",
  "Kanka, ezber yok, kodla! Görsel hafıza devrimi başladı. 🧠",
];

export default function HomeGreeting() {
  const { usage } = useUsage();
  const sessions = usage.sessions || 1;
  const line = LINES[(sessions - 1) % LINES.length];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      <div className="card-vibrant px-5 py-3 flex items-center gap-3 border-l-4 border-l-cyan-400/60">
        <span className="text-2xl">👋</span>
        <p className="text-sm text-white/80">
          <span className="font-black text-cyan-300">Kanka, tekrar hoş geldin!</span>{" "}
          Bu senin <span className="font-black text-amber-300">{sessions}. ziyaretin</span>. {line}
        </p>
      </div>
    </div>
  );
}

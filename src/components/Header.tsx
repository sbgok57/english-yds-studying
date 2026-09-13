"use client";

import Link from "next/link";
import { useState } from "react";

const NAV = [
  { href: "/vocabulary/flashcards", label: "Kartlar", emoji: "🃏" },
  { href: "/grammar", label: "Gramer", emoji: "📖" },
  { href: "/tactics", label: "Taktikler", emoji: "🎯" },
  { href: "/games", label: "Oyunlar", emoji: "🎮" },
  { href: "/exams", label: "Sınavlar", emoji: "⏱️" },
  { href: "/arsiv", label: "Arşiv", emoji: "🗄️" },
  { href: "/reading", label: "Reading", emoji: "🔬" },
  { href: "/kilavuz", label: "Kılavuz", emoji: "📘" },
  { href: "/avatars", label: "Avatarlar", emoji: "👤" },
  { href: "/import", label: "İçe Aktar", emoji: "📤" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-2xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-600 to-cyan-400 flex items-center justify-center text-xl shadow-lg shadow-purple-500/30 group-hover:scale-105 transition-transform">
            🧠
          </div>
          <div>
            <span className="text-xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-300">
              YDS Master
            </span>
            <span className="block text-[10px] font-mono tracking-widest text-cyan-300 uppercase -mt-1">
              Görsel Hafıza Platformu
            </span>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-0.5">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="flex items-center gap-1 px-2.5 py-2 rounded-xl text-[11px] font-bold transition-all text-white/70 hover:text-white hover:bg-white/10"
            >
              <span>{n.emoji}</span>
              {n.label}
            </Link>
          ))}
        </nav>

        <button
          className="xl:hidden w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-xl"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="xl:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-2xl p-3 grid grid-cols-2 gap-2">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-bold text-white/80 hover:bg-white/10"
            >
              <span>{n.emoji}</span>
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import SearchBox from "@/components/SearchBox";
import MenuDrawer from "@/components/MenuDrawer";
import StreakBadge from "@/components/StreakBadge";
import ThemeToggle from "@/components/ThemeToggle";

const QUICK = [
  { href: "/vocabulary", label: "Kelimeler", emoji: "📚" },
  { href: "/import", label: "PDF / Ekle", emoji: "⚡" },
  { href: "/vocabulary/flashcards", label: "Kartlar", emoji: "🃏" },
  { href: "/exams", label: "Sınavlar", emoji: "⏱️" },
  { href: "/grammar", label: "Gramer", emoji: "📖" },
  { href: "/tactics", label: "Taktikler", emoji: "🎯" },
  { href: "/avatars", label: "Avatarlar", emoji: "🎨" },
  { href: "/speaking", label: "Speaking", emoji: "🎙️" },
  { href: "/haberler", label: "Haberler", emoji: "📰" },
  { href: "/sertifikalar", label: "Sertifikalar", emoji: "🏅" },
];

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full left-0 right-0 bg-slate-950/90 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/20" style={{ width: "100%", maxWidth: "100vw" }}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 via-orange-500 via-yellow-400 to-cyan-400 flex items-center justify-center text-xl shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              🧠
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-300">
                YDS Master
              </span>
              <span className="block text-[10px] font-mono tracking-widest text-cyan-300 uppercase -mt-1">
                Görsel Hafıza Platformu
              </span>
            </div>
          </Link>

          <div className="hidden md:flex flex-1 max-w-xs lg:max-w-sm justify-center">
            <SearchBox />
          </div>

          {/* Masaüstü Hızlı Menü */}
          <nav className="hidden xl:flex items-center gap-1">
            {QUICK.slice(0, 6).map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all text-white/70 hover:text-white hover:bg-white/10 shrink-0"
              >
                <span>{n.emoji}</span>
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <ThemeToggle />
            <StreakBadge />
            
            {/* HER EKRANDA VE TAM EKRANDA KESİNTİSİZ GÖRÜNEN 3 NOKTA (⋮) YANA AÇILAN MENÜ BUTONU */}
            <button
              id="global-menu-trigger"
              onClick={() => setMenu(true)}
              aria-expanded={menu}
              className="flex items-center gap-1.5 px-3 sm:px-3.5 h-10 rounded-xl border-2 border-cyan-400/50 bg-gradient-to-r from-pink-500/10 via-amber-500/10 to-cyan-500/10 hover:border-yellow-300 hover:scale-105 active:scale-95 transition-all text-white shadow-md shadow-cyan-500/20 group cursor-pointer shrink-0"
              aria-label="Tüm Bölümleri ve Menüyü Aç"
              title="Tüm Bölümler, Taktikler, Sınavlar ve Seçenekler (Yana Açılır Panel)"
            >
              {/* 3 Nokta İkonu - Dikey Üç Nokta SVG */}
              <svg
                className="w-5 h-5 text-cyan-300 group-hover:text-yellow-300 transition-colors shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <circle cx="12" cy="5" r="2.5" />
                <circle cx="12" cy="12" r="2.5" />
                <circle cx="12" cy="19" r="2.5" />
              </svg>
              {/* 3 Çizgi Hamburger İkonu */}
              <span className="text-sm font-black text-amber-300 group-hover:text-white transition-colors">☰</span>
              <span className="text-xs font-black tracking-wide text-white ml-0.5 hidden sm:inline">Menü</span>
            </button>
          </div>
        </div>
      </header>

      <MenuDrawer open={menu} onClose={() => setMenu(false)} />
    </>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import SearchBox from "@/components/SearchBox";
import MenuDrawer from "@/components/MenuDrawer";
import StreakBadge from "@/components/StreakBadge";
import ThemeToggle from "@/components/ThemeToggle";

const QUICK = [
  { href: "/speaking", label: "Speaking", emoji: "🎙️" },
  { href: "/haberler", label: "Haberler", emoji: "📰" },
  { href: "/sertifikalar", label: "Sertifikalar", emoji: "🏅" },
  { href: "/vocabulary/inventory", label: "Envanter", emoji: "📦" },
  { href: "/study-plans", label: "Planlar", emoji: "📅" },
  { href: "/level-test", label: "Seviye Testi", emoji: "📊" },
  { href: "/vocabulary/flashcards", label: "Kartlar", emoji: "🃏" },
  { href: "/grammar", label: "Gramer", emoji: "📖" },
  { href: "/exams", label: "Sınavlar", emoji: "⏱️" },
];

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full left-0 right-0 bg-slate-950/90 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/20" style={{ width: "100%", maxWidth: "100vw" }}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-600 to-cyan-400 flex items-center justify-center text-xl shadow-lg shadow-purple-500/30 group-hover:scale-105 transition-transform">
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

          <div className="hidden sm:flex flex-1 justify-center">
            <SearchBox />
          </div>

          {/* Masaüstü Hızlı Menü (Büyük ekranlarda aşırı kalabalık olmaması için en popülerler) */}
          <nav className="hidden 2xl:flex items-center gap-0.5 ml-auto">
            {QUICK.slice(0, 6).map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-[11px] font-bold transition-all text-white/70 hover:text-white hover:bg-white/10 shrink-0"
              >
                <span>{n.emoji}</span>
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-1.5 sm:gap-2 shrink-0">
            <ThemeToggle />
            <StreakBadge />
            
            {/* HER EKRANDA VE TAM EKRANDA KESİNTİSİZ GÖRÜNEN 3 NOKTA (⋮) YANA AÇILAN MENÜ BUTONU */}
            <button
              id="global-menu-trigger"
              onClick={() => setMenu(true)}
              className="flex items-center gap-1.5 px-3 sm:px-3.5 h-10 rounded-xl border border-cyan-400/40 bg-gradient-to-r from-cyan-500/15 to-purple-500/15 hover:from-cyan-500/25 hover:to-purple-500/25 active:scale-95 transition-all text-cyan-200 hover:text-white shadow-sm shadow-cyan-500/10 group cursor-pointer"
              aria-label="Tüm Bölümleri ve Menüyü Aç"
              title="Tüm Bölümler, Taktikler, Sınavlar ve Seçenekler (Yana Açılır Panel)"
            >
              {/* 3 Nokta İkonu - Dikey Üç Nokta */}
              <span className="text-xl leading-none font-black text-cyan-300 group-hover:scale-110 transition-transform tracking-tight">⋮</span>
              {/* 3 Çizgi Hamburger İkonu */}
              <span className="text-base leading-none text-white/80 group-hover:text-white">☰</span>
              <span className="text-xs font-black tracking-wide text-white ml-0.5 hidden sm:inline">Menü</span>
            </button>
          </div>
        </div>
      </header>

      <MenuDrawer open={menu} onClose={() => setMenu(false)} />
    </>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import SearchBox from "@/components/SearchBox";
import MenuDrawer from "@/components/MenuDrawer";
import StreakBadge from "@/components/StreakBadge";
import ThemeToggle from "@/components/ThemeToggle";
import ExamModeSwitcher from "@/components/ExamModeSwitcher";
import ThemeQuickModal from "@/components/theme/ThemeQuickModal";

const EXAM_HUBS = [
  { href: "/yds", label: "YDS", emoji: "🎯", color: "text-cyan-300 hover:text-cyan-200" },
  { href: "/ydt", label: "YDT", emoji: "🎓", color: "text-amber-300 hover:text-amber-200" },
  { href: "/yokdil", label: "YÖKDİL", emoji: "🔬", color: "text-pink-300 hover:text-pink-200" },
];

const SKILL_LINKS = [
  { href: "/vocabulary", label: "Kelimeler", emoji: "📚" },
  { href: "/grammar", label: "Gramer", emoji: "📖" },
  { href: "/reading", label: "Reading", emoji: "🔬" },
  { href: "/listening", label: "Listening", emoji: "🎧" },
  { href: "/writing", label: "Writing", emoji: "✍️" },
  { href: "/speaking", label: "Speaking", emoji: "🎙️" },
  { href: "/exams", label: "Denemeler", emoji: "⏱️" },
];

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [themeModal, setThemeModal] = useState(false);

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full left-0 right-0 bg-slate-900/80 dark:bg-slate-950/80 light:bg-white/95 backdrop-blur-xl border-b border-white/15 light:border-slate-200 shadow-lg shadow-black/10 transition-colors"
        style={{ width: "100%", maxWidth: "100vw" }}
      >
        <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-3">
          {/* Logo & Platform İsmi */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-pink-500 via-orange-500 via-yellow-400 to-cyan-400 flex items-center justify-center text-lg sm:text-xl shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              🧠
            </div>
            <div>
              <span className="text-lg sm:text-xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-300 block leading-tight">
                DİL MASTER
              </span>
              <span className="block text-[9px] sm:text-[10px] font-mono tracking-wider text-cyan-300 uppercase font-bold">
                YDS · YDT · YÖKDİL
              </span>
            </div>
          </Link>

          {/* Sınav Modu Seçici (Hızlı Hap Bar) */}
          <div className="hidden lg:flex shrink-0">
            <ExamModeSwitcher compact />
          </div>

          {/* 3 Büyük Sınav Doğrudan Kısayolları (Masaüstü & Tablet) */}
          <div className="hidden md:flex items-center gap-1 shrink-0 bg-white/5 p-1 rounded-2xl border border-white/10">
            {EXAM_HUBS.map((hub) => (
              <Link
                key={hub.href}
                href={hub.href}
                className="flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-black transition-all hover:bg-white/10 text-white/90"
              >
                <span>{hub.emoji}</span>
                <span className={hub.color}>{hub.label}</span>
              </Link>
            ))}
          </div>

          {/* Hızlı Arama */}
          <div className="hidden xl:flex flex-1 max-w-xs justify-center">
            <SearchBox />
          </div>

          {/* Beceri Modülleri (Gramer, Writing, Reading vb.) */}
          <nav className="hidden 2xl:flex items-center gap-1">
            {SKILL_LINKS.slice(0, 5).map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all text-white/70 hover:text-white hover:bg-white/10 shrink-0"
              >
                <span>{n.emoji}</span>
                <span>{n.label}</span>
              </Link>
            ))}
          </nav>

          {/* Sağ Kontroller: Admin, Hesabım, Karanlık Mod, Seri & Menü Açıcı */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {/* 👑 Yönetici Paneli */}
            <Link
              href="/admin"
              className="flex items-center gap-1.5 px-2.5 sm:px-3 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/25 text-purple-200 text-xs font-black transition-all shadow-sm shrink-0 group"
              title="👑 Yönetici Paneli (Öğrenci & Çalışma Takibi)"
            >
              <span className="text-sm group-hover:scale-110 transition-transform">👑</span>
              <span className="hidden sm:inline font-bold">Admin</span>
            </Link>

            {/* 👤 Hesabım */}
            <Link
              href="/hesap"
              className="flex items-center gap-1.5 px-2.5 sm:px-3 h-10 rounded-xl bg-white/5 border border-white/15 hover:border-cyan-400 hover:bg-white/10 text-white text-xs font-black transition-all shadow-sm shrink-0 group"
              title="👤 Hesabım & Profil Bilgileri"
            >
              <span className="text-sm group-hover:scale-110 transition-transform">👤</span>
              <span className="hidden sm:inline font-bold">Hesabım</span>
            </Link>

            {/* 🎨 1.000+ Tema Seçici Butonu */}
            <button
              onClick={() => setThemeModal(true)}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 h-10 rounded-xl bg-gradient-to-r from-pink-500/15 to-cyan-500/15 border border-cyan-400/40 hover:border-cyan-300 text-white text-xs font-black transition-all shadow-sm shrink-0 group"
              title="🎨 1.000+ Renk ve Tema Seçici"
            >
              <span className="text-sm group-hover:scale-110 transition-transform">🎨</span>
              <span className="hidden md:inline font-bold">Temalar</span>
              <span className="text-[9px] px-1 py-0.5 rounded bg-cyan-400/20 text-cyan-300 font-mono hidden lg:inline">1000+</span>
            </button>

            {/* Karanlık/Aydınlık Mod Butonu */}
            <ThemeToggle compact className="sm:!px-2.5" />

            {/* Çalışma Serisi Rozeti */}
            <StreakBadge />

            {/* HER EKRANDA VE TAM EKRANDA KESİNTİSİZ GÖRÜNEN 3 NOKTA (⋮) VE ☰ MENÜ BUTONU */}
            <button
              id="global-menu-trigger"
              onClick={() => setMenu(true)}
              aria-expanded={menu}
              className="flex items-center gap-1.5 px-2.5 sm:px-3.5 h-10 rounded-xl border-2 border-cyan-400/50 bg-gradient-to-r from-pink-500/10 via-amber-500/10 to-cyan-500/10 hover:border-yellow-300 hover:scale-105 active:scale-95 transition-all text-white shadow-md shadow-cyan-500/20 group cursor-pointer shrink-0"
              aria-label="Tüm Bölümleri ve Menüyü Aç"
              title="Tüm Bölümler, Sınavlar (YDS, YDT, YÖKDİL), Beceriler ve Ayarlar"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300 group-hover:text-yellow-300 transition-colors shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <circle cx="12" cy="5" r="2.5" />
                <circle cx="12" cy="12" r="2.5" />
                <circle cx="12" cy="19" r="2.5" />
              </svg>
              <span className="text-sm font-black text-amber-300 group-hover:text-white transition-colors">☰</span>
              <span className="text-xs font-black tracking-wide text-white ml-0.5 hidden sm:inline">Menü</span>
            </button>
          </div>
        </div>
      </header>

      {/* Yana Açılır Kapsamlı Menü */}
      <MenuDrawer open={menu} onClose={() => setMenu(false)} />

      {/* 1.000+ Hızlı Tema Seçici Modal */}
      <ThemeQuickModal open={themeModal} onClose={() => setThemeModal(false)} />
    </>
  );
}

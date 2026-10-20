"use client";

import Link from "next/link";
import { useState } from "react";
import SearchBox from "@/components/SearchBox";
import MenuDrawer from "@/components/MenuDrawer";
import StreakBadge from "@/components/StreakBadge";
import ThemeToggle from "@/components/ThemeToggle";
import ExamModeSwitcher from "@/components/ExamModeSwitcher";
import ThemeQuickModal from "@/components/theme/ThemeQuickModal";
import { ScrollableToolbar } from "@/components/navigation/ScrollableToolbar";

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
  { href: "/study-plans", label: "Planlar", emoji: "📅" },
  { href: "/tactics", label: "Taktikler", emoji: "⚡" },
  { href: "/games", label: "Oyunlar", emoji: "🎮" },
  { href: "/temalar", label: "Temalar", emoji: "🎨" },
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
        <div className="w-full px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-3">
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
          <div className="hidden xl:flex shrink-0">
            <ExamModeSwitcher compact />
          </div>

          {/* 3 Büyük Sınav Doğrudan Kısayolları (Masaüstü & Tablet) */}
          <div className="hidden lg:flex items-center gap-1 shrink-0 bg-white/5 p-1 rounded-2xl border border-white/10">
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
          <div className="hidden 2xl:flex flex-1 max-w-xs justify-center">
            <SearchBox />
          </div>

          {/* Sağ Kontroller: Admin, Hesabım, Karanlık Mod, Seri & HER ZAMAN GÖRÜNÜR Menü Butonu */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 ml-auto">
            {/* 👑 Yönetici Paneli */}
            <Link
              href="/admin"
              className="hidden md:flex items-center gap-1.5 px-2.5 sm:px-3 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/25 text-purple-200 text-xs font-black transition-all shadow-sm shrink-0 group"
              title="👑 Yönetici Paneli (Öğrenci & Çalışma Takibi)"
            >
              <span className="text-sm group-hover:scale-110 transition-transform">👑</span>
              <span className="hidden lg:inline font-bold">Admin</span>
            </Link>

            {/* 👤 Hesabım */}
            <Link
              href="/hesap"
              className="hidden sm:flex items-center gap-1.5 px-2.5 sm:px-3 h-10 rounded-xl bg-white/5 border border-white/15 hover:border-cyan-400 hover:bg-white/10 text-white text-xs font-black transition-all shadow-sm shrink-0 group"
              title="👤 Hesabım & Profil Bilgileri"
            >
              <span className="text-sm group-hover:scale-110 transition-transform">👤</span>
              <span className="hidden lg:inline font-bold">Hesabım</span>
            </Link>

            {/* 📅 Çalışma Planları */}
            <Link
              href="/study-plans"
              className="hidden lg:flex items-center gap-1.5 px-2.5 sm:px-3 h-10 rounded-xl bg-cyan-500/15 border border-cyan-400/30 hover:border-cyan-300 hover:bg-cyan-500/25 text-cyan-300 text-xs font-black transition-all shadow-sm shrink-0 group"
              title="📅 Sınav Çalışma Planları (Gün / Ay / Yıl Takvimi)"
            >
              <span className="text-sm group-hover:scale-110 transition-transform">📅</span>
              <span className="hidden xl:inline font-bold">Planlar</span>
            </Link>

            {/* 🎨 1.000+ Tema Stüdyosu Bölümü */}
            <Link
              href="/temalar"
              className="hidden sm:flex items-center gap-1.5 px-2.5 sm:px-3 h-10 rounded-xl bg-gradient-to-r from-pink-500/15 to-cyan-500/15 border border-cyan-400/40 hover:border-cyan-300 text-white text-xs font-black transition-all shadow-sm shrink-0 group"
              title="🎨 1.000+ Renk ve Desenli Tema Stüdyosu"
            >
              <span className="text-sm group-hover:scale-110 transition-transform">🎨</span>
              <span className="font-bold">Temalar</span>
              <span className="text-[9px] px-1 py-0.5 rounded bg-cyan-400/20 text-cyan-300 font-mono hidden md:inline">1000+</span>
            </Link>

            {/* Karanlık/Aydınlık Mod Butonu */}
            <ThemeToggle compact className="sm:!px-2" />

            {/* Çalışma Serisi Rozeti */}
            <StreakBadge />

            {/* HER EKRANDA VE TAM EKRANDA %100 KESİNTİSİZ GÖRÜNEN ☰ MENÜ BUTONU */}
            <button
              id="global-menu-trigger"
              onClick={() => setMenu(true)}
              aria-expanded={menu}
              className="flex items-center gap-2 px-3.5 sm:px-4 h-10 sm:h-11 rounded-2xl border-2 border-cyan-400/80 bg-gradient-to-r from-pink-500/20 via-purple-600/20 to-cyan-500/20 hover:border-yellow-300 hover:scale-105 active:scale-95 transition-all text-white shadow-lg shadow-cyan-500/25 group cursor-pointer shrink-0 z-30"
              aria-label="Tüm Bölümleri ve Menüyü Aç"
              title="Tüm Bölümler, Sınavlar (YDS, YDT, YÖKDİL), Beceriler ve Ayarlar"
            >
              <span className="text-base text-yellow-300 group-hover:scale-110 transition-transform font-black">☰</span>
              <span className="text-xs sm:text-sm font-black tracking-wide text-white">Menü</span>
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-300 group-hover:text-yellow-300 transition-colors shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <circle cx="12" cy="5" r="2.5" />
                <circle cx="12" cy="12" r="2.5" />
                <circle cx="12" cy="19" r="2.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Yatay Kaydırılabilir Hızlı Navigasyon Barı (Mobil, Tablet & Masaüstü) */}
        <div className="w-full px-2 sm:px-6 lg:px-8 py-1.5 border-t border-white/10 bg-slate-950/60">
          <ScrollableToolbar label="Main navigation">
            {EXAM_HUBS.map((hub) => (
              <Link
                key={hub.href}
                href={hub.href}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-extrabold transition-colors shrink-0"
              >
                <span aria-hidden="true">{hub.emoji}</span>
                <span className={hub.color}>{hub.label}</span>
              </Link>
            ))}
            {SKILL_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-bold text-slate-100 transition-colors shrink-0"
              >
                <span aria-hidden="true">{item.emoji}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </ScrollableToolbar>
        </div>
      </header>

      {/* Yana Açılır Kapsamlı Menü */}
      <MenuDrawer open={menu} onClose={() => setMenu(false)} />

      {/* 1.000+ Hızlı Tema Seçici Modal */}
      <ThemeQuickModal open={themeModal} onClose={() => setThemeModal(false)} />
    </>
  );
}

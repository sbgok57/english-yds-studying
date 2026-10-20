"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Palette, User, Shield, Calendar } from "lucide-react";
import SearchBox from "@/components/SearchBox";
import MenuDrawer from "@/components/MenuDrawer";
import StreakBadge from "@/components/StreakBadge";
import ThemeToggle from "@/components/ThemeToggle";
import ExamModeSwitcher from "@/components/ExamModeSwitcher";
import ThemeQuickModal from "@/components/theme/ThemeQuickModal";
import { ScrollableToolbar } from "@/components/navigation/ScrollableToolbar";
import { QUICK_TOOLBAR_ITEMS } from "@/components/navigation/navigation-config";

const EXAM_HUBS = [
  { href: "/yds", label: "YDS", color: "text-cyan-300 hover:text-cyan-200" },
  { href: "/ydt", label: "YDT", color: "text-amber-300 hover:text-amber-200" },
  { href: "/yokdil", label: "YÖKDİL", color: "text-pink-300 hover:text-pink-200" },
];

export default function Header() {
  const pathname = usePathname() || "/";
  const [menu, setMenu] = useState(false);
  const [themeModal, setThemeModal] = useState(false);

  // Mobil alt bar veya diğer bileşenlerden gelen menü açma isteğini dinle
  useEffect(() => {
    const handleOpenDrawer = () => setMenu(true);
    window.addEventListener("yds:open-menu-drawer", handleOpenDrawer);
    return () => window.removeEventListener("yds:open-menu-drawer", handleOpenDrawer);
  }, []);

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full left-0 right-0 bg-slate-900/90 dark:bg-slate-950/90 light:bg-white/95 backdrop-blur-xl border-b border-white/15 light:border-slate-200 shadow-lg shadow-black/10 transition-colors"
        style={{ width: "100%", maxWidth: "100vw" }}
      >
        <div className="w-full max-w-[1920px] mx-auto px-3 sm:px-5 lg:px-8 h-16 flex items-center justify-between gap-2 min-w-0">
          {/* Sol: Marka & Logo (min-w-0 ile taşma korumalı) */}
          <Link
            href="/"
            className="flex items-center gap-2 group shrink-0 min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-xl"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-pink-500 via-amber-400 to-cyan-400 flex items-center justify-center text-slate-950 font-black text-sm sm:text-base shadow-md shrink-0 group-hover:scale-105 transition-transform">
              DM
            </div>
            <div className="min-w-0">
              <span className="text-base sm:text-lg font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-300 block leading-tight truncate">
                DİL MASTER
              </span>
              <span className="block text-[10px] font-mono tracking-wider text-cyan-300 light:text-cyan-700 uppercase font-bold truncate">
                YDS · YDT · YÖKDİL
              </span>
            </div>
          </Link>

          {/* Orta: Sınav Modu Seçici & Hızlı Arama (Geniş ekranlarda görünür, dar ekranlarda hamburger menüye alan açar) */}
          <div className="hidden 2xl:flex items-center gap-3 min-w-0 shrink">
            <ExamModeSwitcher compact />
          </div>

          <div className="hidden xl:flex items-center gap-1 shrink-0 bg-white/5 light:bg-slate-100 p-1 rounded-2xl border border-white/10 light:border-slate-200">
            {EXAM_HUBS.map((hub) => (
              <Link
                key={hub.href}
                href={hub.href}
                className="flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-black transition-all hover:bg-white/10 text-white/90 light:text-slate-800"
              >
                <span className={hub.color}>{hub.label}</span>
              </Link>
            ))}
          </div>

          <div className="hidden 2xl:flex flex-1 max-w-xs justify-center min-w-0">
            <SearchBox />
          </div>

          {/* Sağ Kontroller ve HER EKRANDA (%80-%125 zoom, tam ekran, mobil, masaüstü) GÖRÜNÜR ÜÇ ÇİZGİLİ HAMBURGER DÜĞMESİ */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 ml-auto">
            <Link
              href="/admin"
              className="hidden lg:flex items-center gap-1.5 px-2.5 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 hover:border-purple-400 text-purple-200 light:text-purple-800 text-xs font-bold transition-all shrink-0"
              title="Yönetici Paneli"
            >
              <Shield className="w-3.5 h-3.5" aria-hidden="true" />
              <span className="hidden xl:inline">Admin</span>
            </Link>

            <Link
              href="/hesap"
              className="hidden md:flex items-center gap-1.5 px-2.5 h-10 rounded-xl bg-white/5 light:bg-slate-100 border border-white/15 light:border-slate-300 hover:border-cyan-400 text-white light:text-slate-800 text-xs font-bold transition-all shrink-0"
              title="Hesabım & Profil"
            >
              <User className="w-3.5 h-3.5" aria-hidden="true" />
              <span className="hidden xl:inline">Hesabım</span>
            </Link>

            <Link
              href="/study-plans"
              className="hidden xl:flex items-center gap-1.5 px-2.5 h-10 rounded-xl bg-cyan-500/15 border border-cyan-400/30 hover:border-cyan-300 text-cyan-300 light:text-cyan-800 text-xs font-bold transition-all shrink-0"
              title="Çalışma Planları"
            >
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Planlar</span>
            </Link>

            <Link
              href="/temalar"
              className="hidden sm:flex items-center gap-1.5 px-2.5 h-10 rounded-xl bg-gradient-to-r from-pink-500/15 to-cyan-500/15 border border-cyan-400/40 hover:border-cyan-300 text-white light:text-slate-900 text-xs font-bold transition-all shrink-0"
              title="Desenli Tema Galerisi"
            >
              <Palette className="w-3.5 h-3.5 text-cyan-300 light:text-cyan-700" aria-hidden="true" />
              <span>Temalar</span>
            </Link>

            <ThemeToggle compact className="sm:!px-2 shrink-0" />

            <div className="hidden sm:block shrink-0">
              <StreakBadge />
            </div>

            {/* ZORUNLU ÜÇ ÇİZGİLİ HAMBURGER MENÜ DÜĞMESİ — HİÇBİR BREAKPOINT VEYA TAM EKRANDA GİZLENMEZ */}
            <button
              type="button"
              id="global-menu-trigger"
              data-testid="global-menu-trigger"
              onClick={() => setMenu((prev) => !prev)}
              aria-label="Ana menüyü aç"
              aria-expanded={menu}
              aria-controls="global-menu-drawer"
              title="Ana menüyü aç (Tüm bölümler, kelimeler, gramer, reading ve ayarlar)"
              className="inline-flex items-center justify-center gap-2 min-w-[44px] min-h-[44px] px-3 sm:px-3.5 h-11 rounded-2xl border-2 border-cyan-400 bg-slate-900/95 light:bg-slate-900 hover:bg-slate-800 hover:border-yellow-300 active:scale-95 transition-all text-white shadow-lg shadow-cyan-500/20 cursor-pointer shrink-0 z-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
            >
              <Menu className="w-5 h-5 text-cyan-300 shrink-0" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-extrabold tracking-wide text-white">
                Menü
              </span>
            </button>
          </div>
        </div>

        {/* Yatay Kaydırılabilir Hızlı Navigasyon Şeridi (Tekil ScrollableToolbar) */}
        <div className="w-full px-2 sm:px-5 lg:px-8 py-1.5 border-t border-white/10 light:border-slate-200 bg-slate-950/70 light:bg-slate-100/90">
          <ScrollableToolbar label="Hızlı bölüm gezinme çubuğu">
            {EXAM_HUBS.map((hub) => {
              const isActive = pathname === hub.href || pathname.startsWith(`${hub.href}/`);
              return (
                <Link
                  key={hub.href}
                  href={hub.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-extrabold transition-colors shrink-0 ${
                    isActive
                      ? "bg-cyan-500/25 border-cyan-400 text-white light:bg-cyan-100 light:text-slate-950"
                      : "bg-white/5 light:bg-white hover:bg-white/15 border-white/10 light:border-slate-300"
                  }`}
                >
                  <span className={hub.color}>{hub.label}</span>
                </Link>
              );
            })}
            {QUICK_TOOLBAR_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-colors shrink-0 ${
                    isActive
                      ? "bg-cyan-500/25 border-cyan-400 text-white light:bg-cyan-100 light:text-slate-950"
                      : "bg-white/5 light:bg-white hover:bg-white/15 border-white/10 light:border-slate-300 text-slate-100 light:text-slate-800"
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </ScrollableToolbar>
        </div>
      </header>

      {/* Portal Tabanlı Ana Menü Çekmecesi */}
      <MenuDrawer open={menu} onClose={() => setMenu(false)} />

      {/* Hızlı Tema Seçici Modal */}
      <ThemeQuickModal open={themeModal} onClose={() => setThemeModal(false)} />
    </>
  );
}

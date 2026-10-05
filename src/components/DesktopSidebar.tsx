"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import MenuDrawer from "./MenuDrawer";
import ThemeQuickModal from "./theme/ThemeQuickModal";
import {
  BookOpen,
  GraduationCap,
  Microscope,
  Headphones,
  PenTool,
  Mic,
  Clock,
  Palette,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  FileUp,
  Sparkles,
  ShieldCheck,
  Compass,
} from "lucide-react";

interface NavItem {
  href: string;
  label: string;
  shortLabel: string;
  emoji: string;
  icon?: React.ComponentType<{ className?: string }>;
  badge?: string;
  highlight?: boolean;
}

const EXAM_ITEMS: NavItem[] = [
  { href: "/yds", label: "YDS Sınav Merkezi", shortLabel: "YDS", emoji: "🎯", badge: "180 dk" },
  { href: "/ydt", label: "YDT / LYS-5 Merkezi", shortLabel: "YDT", emoji: "🎓", badge: "120 dk" },
  { href: "/yokdil", label: "YÖKDİL (Sağlık·Fen·Sosyal)", shortLabel: "YÖKDİL", emoji: "🔬", badge: "3 Alan" },
];

const SKILL_ITEMS: NavItem[] = [
  { href: "/vocabulary", label: "Kelime Çalışmaları", shortLabel: "Kelime", emoji: "📚", badge: "3D Kartlar" },
  { href: "/grammar", label: "Gramer Konuları", shortLabel: "Gramer", emoji: "📖", badge: "27 Konu" },
  { href: "/reading", label: "Reading & Paragraf", shortLabel: "Reading", emoji: "🔬", badge: "Sözlüklü" },
  { href: "/listening", label: "Listening & Aksan", shortLabel: "Listening", emoji: "🎧", badge: "12 Ses" },
  { href: "/writing", label: "Writing & Cümle Kurma", shortLabel: "Writing", emoji: "✍️", badge: "Lab" },
  { href: "/speaking", label: "AI Speaking Lab", shortLabel: "Speaking", emoji: "🎙️", badge: "Sesli" },
  { href: "/exams", label: "Denemeler & Çıkmışlar", shortLabel: "Deneme", emoji: "⏱️", badge: "80 Soru" },
];

const MANAGEMENT_ITEMS: NavItem[] = [
  { href: "/admin", label: "👑 Yönetici Paneli", shortLabel: "Admin", emoji: "👑", badge: "VIP" },
  { href: "/hesap", label: "👤 Hesabım & Profil", shortLabel: "Hesap", emoji: "👤", badge: "Profil" },
];

const TOOL_ITEMS: NavItem[] = [
  { href: "/study-plans", label: "📅 Çalışma Planları", shortLabel: "Planlar", emoji: "📅", badge: "Takvim" },
  { href: "/ilerleme", label: "İlerleme & Başarı", shortLabel: "İlerleme", emoji: "📈" },
  { href: "/kelime-ekle", label: "PDF Kelime Yükle", shortLabel: "PDF", emoji: "📤" },
  { href: "/temalar", label: "🎨 1.000+ Tema & Desen", shortLabel: "Temalar", emoji: "🎨", badge: "250+ Desen" },
];

export default function DesktopSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [themeModalOpen, setThemeModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("dilmaster_sidebar_collapsed");
      if (saved === "true") {
        setCollapsed(true);
      }
    } catch {
      // storage failover
    }
  }, []);

  const toggleCollapsed = () => {
    const next = !collapsed;
    setCollapsed(next);
    try {
      localStorage.setItem("dilmaster_sidebar_collapsed", next ? "true" : "false");
    } catch {
      // storage failover
    }
  };

  if (!mounted) return null;

  return (
    <>
      <aside
        aria-label="Sol Yan Navigasyon Menüsü"
        className={`fixed left-0 top-16 bottom-0 z-40 hidden xl:flex flex-col justify-between bg-slate-900/90 dark:bg-slate-950/92 light:bg-white/95 light:text-slate-900 backdrop-blur-2xl border-r border-white/15 light:border-slate-200 shadow-xl transition-all duration-300 ${
          collapsed ? "w-[72px]" : "w-64"
        }`}
      >
        {/* Üst Kısım: Menü Daraltma & Başlık */}
        <div className="p-3 border-b border-white/10 flex items-center justify-between shrink-0">
          {!collapsed ? (
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-xl">🧭</span>
              <div className="min-w-0">
                <span className="text-xs font-black text-white block truncate uppercase tracking-wider">
                  DİL MASTER MENÜ
                </span>
                <span className="text-[10px] text-cyan-300 font-mono block truncate">
                  YDS · YDT · YÖKDİL
                </span>
              </div>
            </div>
          ) : (
            <span className="text-xl mx-auto" title="DİL MASTER Menü">🧭</span>
          )}

          <button
            onClick={toggleCollapsed}
            className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/15 text-white/80 hover:text-white flex items-center justify-center transition-colors shrink-0"
            title={collapsed ? "Menüyü Genişlet" : "Menüyü Daralt"}
            aria-label={collapsed ? "Menüyü Genişlet" : "Menüyü Daralt"}
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Kaydırılabilir Menü Maddeleri */}
        <div className="flex-1 overflow-y-auto px-2 py-3 space-y-4 scrollbar-thin">
          {/* 1. Üç Büyük Sınav */}
          <div>
            {!collapsed && (
              <span className="text-[10px] font-black font-mono uppercase tracking-widest text-cyan-400/80 px-2 block mb-1.5">
                Sınav Merkezleri
              </span>
            )}
            <div className="space-y-1">
              {EXAM_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-xs font-bold transition-all group relative ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                    title={collapsed ? `${item.shortLabel} - ${item.label}` : undefined}
                  >
                    <span className="text-base shrink-0">{item.emoji}</span>
                    {!collapsed && (
                      <div className="flex-1 flex items-center justify-between min-w-0">
                        <span className="truncate">{item.label}</span>
                        {item.badge && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-cyan-300 font-mono shrink-0">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* 2. 7 Temel Dil Becerisi */}
          <div>
            {!collapsed && (
              <span className="text-[10px] font-black font-mono uppercase tracking-widest text-purple-400/80 px-2 block mb-1.5">
                7 Dil Becerisi
              </span>
            )}
            <div className="space-y-1">
              {SKILL_ITEMS.map((item) => {
                const isActive = pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-xs font-bold transition-all group relative ${
                      isActive
                        ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-400/40 shadow-sm"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                    title={collapsed ? `${item.shortLabel} - ${item.label}` : undefined}
                  >
                    <span className="text-base shrink-0">{item.emoji}</span>
                    {!collapsed && (
                      <div className="flex-1 flex items-center justify-between min-w-0">
                        <span className="truncate">{item.label}</span>
                        {item.badge && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-purple-300 font-mono shrink-0">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* 3. Yönetici Paneli & Hesabım */}
          <div>
            {!collapsed && (
              <span className="text-[10px] font-black font-mono uppercase tracking-widest text-purple-400/90 px-2 block mb-1.5">
                Yönetim & Hesap
              </span>
            )}
            <div className="space-y-1">
              {MANAGEMENT_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-xs font-bold transition-all group relative ${
                      isActive
                        ? "bg-gradient-to-r from-purple-500/25 to-pink-500/25 text-purple-200 border border-purple-400/40 shadow-sm"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                    title={collapsed ? `${item.shortLabel} - ${item.label}` : undefined}
                  >
                    <span className="text-base shrink-0">{item.emoji}</span>
                    {!collapsed && (
                      <div className="flex items-center justify-between flex-1 min-w-0">
                        <span className="truncate">{item.label}</span>
                        {item.badge && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono shrink-0 border border-purple-400/30">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* 4. Araçlar ve Kişiselleştirme */}
          <div>
            {!collapsed && (
              <span className="text-[10px] font-black font-mono uppercase tracking-widest text-amber-400/80 px-2 block mb-1.5">
                Ek Araçlar
              </span>
            )}
            <div className="space-y-1">
              {TOOL_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-xs font-bold transition-all group relative ${
                      isActive
                        ? "bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border border-amber-400/40 shadow-sm"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                    title={collapsed ? `${item.shortLabel} - ${item.label}` : undefined}
                  >
                    <span className="text-base shrink-0">{item.emoji}</span>
                    {!collapsed && (
                      <span className="truncate">{item.label}</span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Alt Sabit Kısım: Tema Değiştirici & Tüm Çekmece */}
        <div className="p-2.5 border-t border-white/10 bg-slate-950/90 space-y-2 shrink-0">
          {/* 500+ Canlı Tema Seçici Butonu */}
          <button
            onClick={() => setThemeModalOpen(true)}
            className={`w-full py-2 rounded-xl bg-gradient-to-r from-pink-500/15 via-purple-500/15 to-cyan-500/15 hover:from-pink-500/25 hover:to-cyan-500/25 text-white/90 hover:text-white border border-cyan-400/40 text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer ${
              collapsed ? "!px-0" : "px-3"
            }`}
            title="🎨 500+ Canlı Renk ve Tema Seçici"
          >
            <Palette className="w-4 h-4 text-cyan-300 shrink-0" />
            {!collapsed && <span>500+ Tema (🎨)</span>}
          </button>

          {/* Karanlık/Aydınlık Mod Butonu */}
          <div className="flex items-center justify-center">
            <ThemeToggle compact={collapsed} className={collapsed ? "!w-10 !h-10 !px-0 rounded-xl" : "w-full justify-center"} />
          </div>

          {/* Tüm Menüyü Aç Butonu */}
          <button
            onClick={() => setDrawerOpen(true)}
            className={`w-full py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              collapsed ? "!px-0" : "px-3"
            }`}
            title="Tüm Sayfalar ve Bölümler Çekmecesi"
          >
            <Compass className="w-4 h-4 text-cyan-400 shrink-0" />
            {!collapsed && <span>Tüm Bölümler (☰)</span>}
          </button>
        </div>
      </aside>

      {/* Yana Açılır Çekmece Modalı */}
      <MenuDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      {/* 500+ Hızlı Tema Seçici Modalı */}
      <ThemeQuickModal open={themeModalOpen} onClose={() => setThemeModalOpen(false)} />
    </>
  );
}

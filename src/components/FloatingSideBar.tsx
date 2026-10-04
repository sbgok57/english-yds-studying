"use client";

import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import MenuDrawer from "./MenuDrawer";
import { ArrowUp, Menu } from "lucide-react";

export default function FloatingSideBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Yan Sabit Hızlı Erişim Dok/Çubuğu (Her Zaman Erişilebilir) */}
      <aside
        aria-label="Hızlı Erişim ve Menü Çubuğu"
        className="fixed right-3 bottom-24 z-40 flex flex-col items-center gap-2 p-1.5 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/50 anim-fade"
      >
        {/* Karanlık / Aydınlık Mod Geçiş Butonu */}
        <ThemeToggle compact className="!w-9 !h-9 !px-0 rounded-xl" />

        {/* Yan Menü (Sidebar) Açma Butonu */}
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 text-cyan-300 hover:text-white hover:border-cyan-300 hover:scale-105 active:scale-95 transition-all shadow-md group"
          title="Tüm Dersler, Sınavlar ve Bölümler Menüsünü Aç"
          aria-label="Tüm Menüyü Aç"
        >
          <Menu className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Sayfa Başına Dön Butonu (Gerektiğinde Görünür) */}
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/10 border border-white/15 text-white/70 hover:text-white hover:bg-white/20 hover:scale-105 active:scale-95 transition-all"
            title="Sayfa Başına Dön"
            aria-label="Sayfa Başına Dön"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </aside>

      {/* Yan Çekmece Menüsü */}
      <MenuDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}

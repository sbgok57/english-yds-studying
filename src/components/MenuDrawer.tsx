"use client";

import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { PAGES } from "@/lib/site-index";
import SearchBox from "@/components/SearchBox";
import ThemeToggle from "@/components/ThemeToggle";
import ThemeQuickModal from "@/components/theme/ThemeQuickModal";
import MenuPortal from "@/components/navigation/MenuPortal";
import NavigationSectionIcon from "@/components/navigation/NavigationSectionIcon";
import {
  getFilteredNavigationGroups,
  type NavigationIconId,
} from "@/components/navigation/navigation-config";
import { useUsage } from "@/lib/store";
import { calculateStudentProgress } from "@/lib/progress/calculator";
import {
  X,
  ChevronRight,
  Search,
  Palette,
} from "lucide-react";

interface MenuDrawerProps {
  open: boolean;
  onClose: () => void;
}

function renderCategoryItemIcon(icon: NavigationIconId) {
  return (
    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-100 via-cyan-100 to-amber-100 shadow-sm ring-1 ring-white/70 dark:ring-white/20">
      <NavigationSectionIcon icon={icon} className="h-5 w-5" />
    </span>
  );
}

export default function MenuDrawer({ open, onClose }: MenuDrawerProps) {
  const pathname = usePathname() || "/";
  const [themeModal, setThemeModal] = useState(false);
  const [menuQuery, setMenuQuery] = useState("");
  const drawerRef = useRef<HTMLElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const previousOverflowRef = useRef<string>("");

  const { usage } = useUsage();
  const wordsLearned = Object.values(usage.words || {}).filter((w) => w.c > w.w).length;
  const grammarCount = Object.keys(usage.grammar || {}).length;
  const tacticsCount = Object.keys(usage.tactics || {}).length;

  const progress = calculateStudentProgress({
    wordsLearned,
    grammarCompleted: grammarCount,
    tacticsCompleted: tacticsCount,
    questionsSolved: usage.exams?.totalQuestions || 0,
    examsTaken: usage.exams?.taken || 0,
  });

  const filteredGroups = useMemo(
    () => getFilteredNavigationGroups(menuQuery),
    [menuQuery]
  );

  const restoreBodyAndFocus = useCallback(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = previousOverflowRef.current || "";
      const trigger = document.getElementById("global-menu-trigger");
      if (trigger instanceof HTMLElement) {
        trigger.focus({ preventScroll: true });
      }
    }
  }, []);

  const handleSafeClose = useCallback(() => {
    try {
      restoreBodyAndFocus();
      onClose();
    } catch (e) {
      console.error("[MenuDrawer] Close error suppressed:", e);
      onClose();
    }
  }, [onClose, restoreBodyAndFocus]);

  // 🛡️ useOnClickOutside: Dışarı tıklandığında menüyü hatasız ve bellek sızıntısız kapat (alt modal açıkken devre dışı)
  useOnClickOutside(drawerRef, handleSafeClose, open && !themeModal);

  useEffect(() => {
    if (!open || typeof document === "undefined") return;

    previousOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Menü açıldığında arama kutusuna odaklan
    const focusTimer = setTimeout(() => {
      searchInputRef.current?.focus({ preventScroll: true });
    }, 30);

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        if (themeModal) {
          setThemeModal(false);
          return;
        }
        handleSafeClose();
        return;
      }

      // Focus trap (Tab / Shift+Tab)
      if (e.key === "Tab" && drawerRef.current && !themeModal) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflowRef.current || "";
    };
  }, [open, themeModal, handleSafeClose]);

  if (!open) return null;

  return (
    <MenuPortal>
      <div
        id="global-menu-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Ana Navigasyon Menüsü"
        className="fixed inset-0 z-[9999] transition-opacity duration-200 pointer-events-auto"
      >
        {/* Backdrop */}
        <div
          aria-hidden="true"
          data-testid="menu-drawer-backdrop"
          className="absolute inset-0 bg-slate-950/60 light:bg-slate-900/30 backdrop-blur-sm"
          onClick={handleSafeClose}
        />

        {/* Yan Menü Kutusu (Drawer) — 100dvh, safe-area ve bağımsız dikey kaydırma */}
        <aside
          ref={drawerRef}
          tabIndex={-1}
          style={{
            height: "100dvh",
            maxHeight: "100dvh",
            paddingTop: "env(safe-area-inset-top, 0px)",
            paddingBottom: "env(safe-area-inset-bottom, 0px)",
          }}
          className="absolute right-0 top-0 w-full sm:w-[460px] max-w-full bg-slate-900/98 dark:bg-slate-950/98 light:bg-white/98 light:text-slate-900 backdrop-blur-2xl border-l border-white/20 light:border-slate-300 shadow-2xl flex flex-col overflow-hidden z-[10000]"
        >
          {/* Üst Sabit Çubuk: Başlık, Tema Kısayolu, Koyu/Açık Mod ve Kapatma Düğmesi */}
          <div className="sticky top-0 z-20 bg-slate-900/95 dark:bg-slate-950/95 light:bg-white/95 backdrop-blur-xl border-b border-white/15 light:border-slate-200 px-4 sm:px-5 py-3.5 space-y-3 shrink-0">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5 min-w-0">
                <Image
                  src="/icons/icon-192.png"
                  alt="DİL MASTER logosu"
                  width={48}
                  height={48}
                  className="h-12 w-12 shrink-0 rounded-2xl object-cover shadow-lg shadow-cyan-950/35 ring-2 ring-white/15"
                  priority
                />
                <div className="min-w-0">
                  <span className="font-black text-base text-white light:text-slate-900 block leading-tight truncate">
                    Menü · DİL MASTER
                  </span>
                  <span className="text-[11px] text-cyan-300/90 light:text-cyan-700 font-mono block truncate">
                    YDS · YDT · YÖKDİL yol arkadaşın
                  </span>
                  <span className="text-[11px] text-amber-300 font-semibold block truncate">
                    Hadi bugün bir adım daha atalım!
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => setThemeModal(true)}
                  className="min-h-11 px-3 rounded-2xl border border-cyan-300/50 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 hover:border-cyan-300 text-white light:text-slate-900 flex items-center gap-2 text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  title="Desenli Tema Galerisi"
                >
                  <Palette className="w-5 h-5 text-cyan-200 light:text-cyan-700" aria-hidden="true" />
                  <span className="font-semibold hidden sm:inline">Temalar</span>
                </button>
                <ThemeToggle compact className="!w-10 !h-10 !px-0 rounded-xl" />
                <button
                  type="button"
                  id="global-menu-close"
                  onClick={handleSafeClose}
                  className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-xl border border-white/15 light:border-slate-300 bg-white/5 light:bg-slate-100 hover:bg-white/15 text-white light:text-slate-800 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  aria-label="Menüyü Kapat"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Menü İçi Bölüm Arama Alanı */}
            <div className="relative">
              <label htmlFor="menu-section-search" className="sr-only">
                Menü içinde bölüm veya modül ara
              </label>
              <Search
                className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                ref={searchInputRef}
                id="menu-section-search"
                type="search"
                value={menuQuery}
                onChange={(e) => setMenuQuery(e.target.value)}
                placeholder="Bölüm ara: kelime, envanter, gramer, reading, sesli gramer..."
                aria-label="Menü içinde bölüm veya modül ara"
                className="w-full pl-11 pr-8 py-3 rounded-2xl bg-slate-950/90 light:bg-slate-100 border border-white/15 light:border-slate-300 text-sm sm:text-base text-white light:text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              {menuQuery && (
                <button
                  type="button"
                  onClick={() => setMenuQuery("")}
                  aria-label="Aramayı temizle"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white px-1.5 py-0.5 rounded"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Kaydırılabilir İçerik Alanı (min-height: 0 ile tam dikey scroll) */}
          <div
            data-testid="menu-drawer-content"
            className="flex-1 min-h-0 px-4 sm:px-5 py-4 space-y-6 overflow-y-auto overscroll-contain"
          >
            {/* Hızlı İlerleme & Durum Özeti */}
            {!menuQuery && (
              <div className="grid grid-cols-3 gap-2">
                <Link
                  href="/ilerleme"
                  onClick={handleSafeClose}
                  className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/25 hover:border-cyan-400 transition-all text-center"
                >
                  <span className="text-xs font-black text-cyan-300 light:text-cyan-700 font-mono block">
                    %{progress.overallPercent}
                  </span>
                  <span className="text-[11px] font-semibold text-white/80 light:text-slate-700">
                    Genel İlerleme
                  </span>
                </Link>
                <Link
                  href="/vocabulary/inventory"
                  onClick={handleSafeClose}
                  className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 hover:border-emerald-400 transition-all text-center"
                >
                  <span className="text-xs font-black text-emerald-300 light:text-emerald-700 font-mono block">
                    {wordsLearned}
                  </span>
                  <span className="text-[11px] font-semibold text-white/80 light:text-slate-700">
                    Öğrenilen Kelime
                  </span>
                </Link>
                <Link
                  href="/temalar"
                  onClick={handleSafeClose}
                  className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/25 hover:border-purple-400 transition-all text-center"
                >
                  <span className="text-xs font-black text-purple-300 light:text-purple-700 font-mono block">
                    36 Desen
                  </span>
                  <span className="text-[11px] font-semibold text-white/80 light:text-slate-700">
                    Tema Galerisi
                  </span>
                </Link>
              </div>
            )}

            {/* Merkezi Navigasyon Kategorileri (A–H) */}
            {filteredGroups.length > 0 ? (
              <div className="space-y-5">
                {filteredGroups.map((group) => (
                  <section key={group.id} aria-label={group.title} className="space-y-2">
                    <div className="border-b border-white/10 light:border-slate-200 pb-1.5">
                      <h3 className="text-xs font-black uppercase tracking-wider text-cyan-300 light:text-cyan-800">
                        {group.title}
                      </h3>
                      <p className="text-[11px] text-white/50 light:text-slate-500">
                        {group.subtitle}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-1.5">
                      {group.items.map((item) => {
                        const isActive =
                          item.href === "/"
                            ? pathname === "/"
                            : pathname === item.href || pathname.startsWith(`${item.href}/`);

                        return (
                          <Link
                            key={item.id}
                            href={item.href}
                            onClick={handleSafeClose}
                            aria-current={isActive ? "page" : undefined}
                            className={`menu-nav-item p-3.5 rounded-2xl border flex items-center justify-between gap-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                              isActive
                                ? "bg-cyan-500/20 border-cyan-400 text-white light:bg-cyan-50 light:border-cyan-600 light:text-slate-950 shadow-sm"
                                : "bg-white/[0.03] light:bg-slate-50 border-white/10 light:border-slate-200 hover:border-cyan-400/50 hover:bg-white/[0.06] text-white light:text-slate-900"
                            }`}
                          >
                            <div className="flex items-start gap-3 min-w-0">
                              <div className="menu-nav-icon mt-0.5 p-2.5 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-violet-400/15 to-pink-400/20 light:bg-cyan-100 shrink-0 shadow-inner">
                                {renderCategoryItemIcon(item.icon)}
                              </div>
                              <div className="min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="text-sm sm:text-base font-bold leading-snug">
                                    {item.label}
                                  </span>
                                  {item.badge && (
                                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-200 light:bg-cyan-100 light:text-cyan-800">
                                      {item.badge}
                                    </span>
                                  )}
                                  {isActive && (
                                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/25 text-emerald-300 light:bg-emerald-100 light:text-emerald-800">
                                      Aktif
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-white/60 light:text-slate-600 mt-0.5 line-clamp-2">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                            <ChevronRight
                              className="w-4 h-4 text-slate-400 shrink-0"
                              aria-hidden="true"
                            />
                          </Link>
                        );
                      })}
                    </div>
                  </section>
                ))}
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2">
                <p className="text-sm font-bold text-white light:text-slate-900">
                  &ldquo;{menuQuery}&rdquo; ile eşleşen menü bölümü bulunamadı.
                </p>
                <p className="text-xs text-white/60 light:text-slate-600">
                  &ldquo;kelime&rdquo;, &ldquo;envanter&rdquo;, &ldquo;gramer&rdquo;, &ldquo;reading&rdquo; veya &ldquo;tema&rdquo; yazarak arayabilirsiniz.
                </p>
                <button
                  type="button"
                  onClick={() => setMenuQuery("")}
                  className="px-3 py-1.5 rounded-xl bg-cyan-500/20 text-cyan-300 text-xs font-bold"
                >
                  Tüm Bölümleri Göster
                </button>
              </div>
            )}

            {/* Kelime & Konu Sözlük Araması */}
            <div className="pt-3 border-t border-white/10 light:border-slate-200 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-white/60 light:text-slate-600 block">
                Sözlük & İçerik Araması
              </span>
              <SearchBox />
            </div>

            {/* Ek Yardımcı Sayfalar */}
            {!menuQuery && (
              <div className="pt-2 border-t border-white/10 light:border-slate-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/50 light:text-slate-500 block mb-2">
                  Hızlı Bağlantılar
                </span>
                <div className="grid grid-cols-2 gap-1.5">
                  {PAGES.slice(0, 8).map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={handleSafeClose}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-white/75 light:text-slate-700 hover:bg-white/10 hover:text-white transition-colors truncate"
                    >
                      <span className="truncate">{p.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Hızlı Tema Seçici Modal */}
        <ThemeQuickModal open={themeModal} onClose={() => setThemeModal(false)} />
      </div>
    </MenuPortal>
  );
}

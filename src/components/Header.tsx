"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

// Keep the large navigation drawer out of the shared first-load bundle. It is
// downloaded only after the user asks to open the menu.
const MenuDrawer = dynamic(() => import("@/components/MenuDrawer"), { ssr: false });

export default function Header() {
  const pathname = usePathname() || "/";
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleOpenDrawer = () => setMenu(true);
    window.addEventListener("yds:open-menu-drawer", handleOpenDrawer);
    return () => window.removeEventListener("yds:open-menu-drawer", handleOpenDrawer);
  }, []);

  useEffect(() => setMenu(false), [pathname]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/15 bg-slate-950/95 shadow-sm transition-colors light:border-slate-200 light:bg-white/95">
        <div className="mx-auto flex h-14 w-full max-w-[1920px] items-center px-3 sm:px-5 lg:px-8">
          <button
            type="button"
            id="global-menu-trigger"
            data-testid="global-menu-trigger"
            onClick={() => setMenu((previous) => !previous)}
            aria-label={menu ? "Ana menüyü kapat" : "Ana menüyü aç"}
            aria-expanded={menu}
            aria-controls="global-menu-drawer"
            title="Tüm site bölümleri ve ayarlar"
            className="global-menu-trigger inline-flex min-h-12 min-w-12 items-center justify-center gap-2.5 rounded-2xl border-2 border-cyan-300 bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-500 px-4 text-white shadow-lg shadow-violet-950/40 transition hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-cyan-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 active:scale-95"
          >
            <Menu className="h-6 w-6 text-white" aria-hidden="true" />
            <span className="text-lg font-extrabold tracking-wide">Menü</span>
          </button>
        </div>
      </header>

      {menu && <MenuDrawer open={menu} onClose={() => setMenu(false)} />}
    </>
  );
}

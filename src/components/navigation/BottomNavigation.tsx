"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import NavigationSectionIcon from "./NavigationSectionIcon";
import { MOBILE_BOTTOM_NAV_ITEMS } from "./navigation-config";

export default function BottomNavigation() {
  const pathname = usePathname() || "/";

  const openMenuDrawer = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("yds:open-menu-drawer"));
    }
  };

  return (
    <nav
      aria-label="Mobil alt hızlı gezinme çubuğu"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 light:bg-white/95 backdrop-blur-xl border-t border-white/15 light:border-slate-200 shadow-2xl"
      style={{
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      <div className="grid grid-cols-5 h-16 max-w-lg mx-auto px-1">
        {MOBILE_BOTTOM_NAV_ITEMS.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.id}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`flex flex-col items-center justify-center gap-1 min-h-[44px] rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                isActive
                  ? "text-cyan-300 light:text-cyan-700 font-extrabold"
                  : "text-slate-300 light:text-slate-600 hover:text-white font-semibold"
              }`}
            >
              <NavigationSectionIcon
                icon={item.icon}
                className={`h-5 w-5 transition-transform ${isActive ? "scale-110" : ""}`}
              />
              <span className="text-[11px] leading-none truncate max-w-[68px]">{item.label}</span>
            </Link>
          );
        })}

        <button
          type="button"
          onClick={openMenuDrawer}
          aria-label="Ana menüyü aç"
          aria-controls="global-menu-drawer"
          className="flex flex-col items-center justify-center gap-1 min-h-[44px] rounded-xl text-cyan-300 light:text-cyan-700 font-extrabold hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <Menu className="w-5 h-5 text-cyan-300 light:text-cyan-700" aria-hidden="true" />
          <span className="text-[11px] leading-none">Menü</span>
        </button>
      </div>
    </nav>
  );
}

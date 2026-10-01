"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Determine current theme from DOM
    const isLight = document.documentElement.classList.contains("light");
    setTheme(isLight ? "light" : "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);

    // Apply temporary transition class for smooth visual shift
    document.documentElement.classList.add("theme-transition");

    if (nextTheme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      try {
        localStorage.setItem("yds_theme", "light");
        localStorage.setItem("yds_theme_mode", "light");
        const savedId = parseInt(localStorage.getItem("yds_theme_id") || "1", 10);
        import("@/lib/themes/engine").then(({ applyTheme }) => applyTheme(savedId, "light"));
      } catch {
        // SAFETY: localStorage failover
      }
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      try {
        localStorage.setItem("yds_theme", "dark");
        localStorage.setItem("yds_theme_mode", "dark");
        const savedId = parseInt(localStorage.getItem("yds_theme_id") || "1", 10);
        import("@/lib/themes/engine").then(({ applyTheme }) => applyTheme(savedId, "dark"));
      } catch {
        // SAFETY: localStorage failover
      }
    }

    // Clean up transition class after animation completes
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 300);
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 opacity-50" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`group relative flex items-center gap-1.5 px-2.5 h-10 rounded-xl border transition-all duration-300 active:scale-95 shadow-sm ${
        isDark
          ? "border-amber-400/30 bg-amber-400/10 text-amber-300 hover:bg-amber-400/20 hover:border-amber-400/50 shadow-amber-500/10"
          : "border-indigo-400/30 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:border-indigo-400/50 shadow-indigo-500/10"
      }`}
      title={isDark ? "Açık moda geç (Göz dostu aydınlık)" : "Karanlık moda geç (Canlı neon karanlık)"}
      aria-label={isDark ? "Açık moda geç" : "Karanlık moda geç"}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-300 transition-transform group-hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-indigo-600 transition-transform group-hover:-rotate-12" />
        )}
      </div>
      <span className="hidden md:inline text-xs font-bold font-mono">
        {isDark ? "Açık Mod" : "Koyu Mod"}
      </span>
    </button>
  );
}

"use client";

import { useEffect } from "react";
import { getSavedTheme, applyTheme } from "@/lib/themes/engine";

export default function ThemeInitializer() {
  useEffect(() => {
    // Apply saved theme immediately on mount
    try {
      const { theme, mode } = getSavedTheme();
      applyTheme(theme.id, mode);
    } catch {
      // Safe fallback
    }

    const handleThemeChange = (e: any) => {
      if (e.detail?.theme) {
        applyTheme(e.detail.theme.id, e.detail.mode);
      }
    };

    window.addEventListener("yds:theme-changed", handleThemeChange);
    return () => window.removeEventListener("yds:theme-changed", handleThemeChange);
  }, []);

  return null;
}

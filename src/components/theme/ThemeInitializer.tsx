"use client";

import { useEffect } from "react";
import { getSavedTheme, applyTheme } from "@/lib/themes/engine";

export default function ThemeInitializer() {
  useEffect(() => {
    // // SAFETY: Apply saved theme once on client hydration
    try {
      const { theme, mode } = getSavedTheme();
      applyTheme(theme.id, mode);
    } catch {
      // Safe fallback
    }

    // // SAFETY: Cross-tab theme sync without re-entrant recursion
    const handleStorage = (e: StorageEvent) => {
      if (e.key === "yds_theme_id" || e.key === "yds_theme_mode") {
        try {
          const { theme, mode } = getSavedTheme();
          applyTheme(theme.id, mode);
        } catch {
          // Safe fallback
        }
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return null;
}

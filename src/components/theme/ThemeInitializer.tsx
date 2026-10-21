"use client";

import { useEffect } from "react";
import { getSavedTheme, applyTheme } from "@/lib/themes/engine";
import { getSavedPatternPreference, applyPatternToDocument } from "@/lib/themes/pattern-registry";

export default function ThemeInitializer() {
  useEffect(() => {
    // SAFETY: Apply saved theme and saved SVG pattern once on client hydration
    try {
      const { theme, mode } = getSavedTheme();
      applyTheme(theme.id, mode);

      const savedPattern = getSavedPatternPreference();
      if (savedPattern.patternId) {
        applyPatternToDocument(savedPattern.patternId, savedPattern.opacity, savedPattern.scale);
      }
    } catch {
      // Safe fallback
    }

    // SAFETY: Cross-tab theme & pattern sync without re-entrant recursion
    const handleStorage = (e: StorageEvent) => {
      if (e.key === "yds_theme_id" || e.key === "yds_theme_mode") {
        try {
          const { theme, mode } = getSavedTheme();
          applyTheme(theme.id, mode);
        } catch {
          // Safe fallback
        }
      }
      if (e.key === "yds_custom_pattern_id" || e.key === "yds_custom_pattern_opacity") {
        try {
          const savedPattern = getSavedPatternPreference();
          if (savedPattern.patternId) {
            applyPatternToDocument(
              savedPattern.patternId,
              savedPattern.opacity,
              savedPattern.scale
            );
          }
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

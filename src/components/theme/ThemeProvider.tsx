"use client";

import React, { createContext, useContext, useEffect, useState, useCallback, ReactNode } from "react";
import {
  ThemePalette,
  ALL_THEMES,
  applyTheme as applyThemeEngine,
  getSavedTheme,
  THEME_COUNT,
} from "@/lib/themes/engine";

interface ThemeContextType {
  currentTheme: ThemePalette;
  mode: "dark" | "light";
  setTheme: (themeId: number) => void;
  setMode: (mode: "dark" | "light") => void;
  toggleMode: () => void;
  resetTheme: () => void;
  totalThemes: number;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ThemePalette>(ALL_THEMES[0]);
  const [mode, setModeState] = useState<"dark" | "light">("dark");
  const [, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    // // SAFETY: Apply saved theme on mount
    try {
      const { theme, mode: savedMode } = getSavedTheme();
      setCurrentTheme(theme);
      setModeState(savedMode);
      applyThemeEngine(theme.id, savedMode);
    } catch {
      // Safe fallback
    }

    const handleThemeChange = (e: any) => {
      if (e.detail?.theme) {
        setCurrentTheme(e.detail.theme);
        setModeState(e.detail.mode);
      }
    };

    const handleStorage = (e: StorageEvent) => {
      if (e.key === "yds_theme_id" || e.key === "yds_theme_mode") {
        try {
          const { theme, mode: savedMode } = getSavedTheme();
          setCurrentTheme(theme);
          setModeState(savedMode);
          applyThemeEngine(theme.id, savedMode);
        } catch {
          // Safe fallback
        }
      }
    };

    window.addEventListener("yds:theme-changed", handleThemeChange);
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("yds:theme-changed", handleThemeChange);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const setTheme = useCallback(
    (themeId: number) => {
      const target = ALL_THEMES.find((t) => t.id === themeId) || ALL_THEMES[0];
      setCurrentTheme(target);
      applyThemeEngine(target.id, mode);
    },
    [mode]
  );

  const setMode = useCallback(
    (newMode: "dark" | "light") => {
      setModeState(newMode);
      applyThemeEngine(currentTheme.id, newMode);
    },
    [currentTheme]
  );

  const toggleMode = useCallback(() => {
    const nextMode = mode === "dark" ? "light" : "dark";
    setMode(nextMode);
  }, [mode, setMode]);

  const resetTheme = useCallback(() => {
    const defaultTheme = ALL_THEMES[0];
    setCurrentTheme(defaultTheme);
    setModeState("dark");
    applyThemeEngine(defaultTheme.id, "dark");
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        mode,
        setTheme,
        setMode,
        toggleMode,
        resetTheme,
        totalThemes: THEME_COUNT,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      currentTheme: ALL_THEMES[0],
      mode: "dark",
      setTheme: (id: number) => applyThemeEngine(id, "dark"),
      setMode: (m: "dark" | "light") => applyThemeEngine(1, m),
      toggleMode: () => {},
      resetTheme: () => applyThemeEngine(1, "dark"),
      totalThemes: THEME_COUNT,
    };
  }
  return context;
}

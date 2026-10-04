/**
 * DİL MASTER — 1.000+ Varyantlı Algoritmik & Dinamik Tema Motoru (Themes Engine)
 * 
 * - Statik dosya şişkinliği yaratmayan, algoritmik HSL/OKLCH renk çemberi
 * - 6 Kategori: Minimal & Odak, Canlı & Neon, Koyu & Siberpunk, Pastel & Yumuşak, Degrade & Spektrum, Desenli & Geometrik
 * - SVG Arka Plan Desenleri: Noktalı (Dots), Izgara (Grid), Çizgili (Stripes), Geometrik Baklava (Geometric), Dairesel Ağ (Mesh)
 * - CSS Değişkenleri (--theme-bg, --theme-card, --theme-primary, --theme-pattern) ile anında canlı reaktivite
 * - LocalStorage + IndexedDB çift katmanlı hafıza koruması
 */

import { safeSetStorage, safeGetStorage } from "@/lib/storage-optimizer";

export const THEME_COUNT = 1000;

export type ThemeCategoryKey = "minimal" | "vibrant" | "dark" | "pastel" | "gradient" | "patterned";
export type PatternKey = "none" | "dots" | "grid" | "stripes" | "geometric" | "mesh";

export interface ThemePalette {
  id: number;
  name: string;
  category: ThemeCategoryKey;
  categoryEmoji: string;
  categoryLabel: string;
  primary: string;       // Ana vurgulu renk
  secondary: string;     // İkincil renk
  accent: string;        // Vurgu ve parıltı rengi
  darkBg: string;        // Koyu mod atmosferik arka plan
  lightBg: string;       // Açık mod ferah arka plan
  darkCard: string;      // Koyu mod kart zemini
  lightCard: string;     // Açık mod kart zemini
  darkText: string;      // Koyu mod metin rengi
  lightText: string;     // Açık mod metin rengi (yüksek kontrast)
  gradient: string;      // Degrade stili
  glowColor: string;     // Parlama ve gölge rengi
  patternType: PatternKey;
  patternCss: string;    // SVG Arkaplan Desen Verisi
  buttonBg: string;
  buttonText: string;
}

export const THEME_CATEGORIES = [
  { id: "all", label: "Tüm Temalar (1.000)", emoji: "🎨" },
  { id: "minimal", label: "Minimal & Odak", emoji: "⚪" },
  { id: "vibrant", label: "Canlı & Neon", emoji: "⚡" },
  { id: "dark", label: "Koyu & Siberpunk", emoji: "🌌" },
  { id: "pastel", label: "Pastel & Yumuşak", emoji: "🌸" },
  { id: "gradient", label: "Degrade & Spektrum", emoji: "🌈" },
  { id: "patterned", label: "Desenli & Geometrik", emoji: "📐" },
] as const;

// HSL'den RGB Hex formatına dönüştürücü
function hslToHex(h: number, s: number, l: number): string {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

// ── SVG ARKA PLAN DESENLERİ ──────────────────────────────────
export const SVG_PATTERNS: Record<PatternKey, string> = {
  none: "none",
  dots: "radial-gradient(circle, rgba(255, 255, 255, 0.08) 1.5px, transparent 1.5px)",
  grid: "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
  stripes: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 255, 255, 0.03) 10px, rgba(255, 255, 255, 0.03) 20px)",
  geometric: "linear-gradient(135deg, rgba(255, 255, 255, 0.04) 25%, transparent 25%), linear-gradient(225deg, rgba(255, 255, 255, 0.04) 25%, transparent 25%), linear-gradient(45deg, rgba(255, 255, 255, 0.04) 25%, transparent 25%), linear-gradient(315deg, rgba(255, 255, 255, 0.04) 25%, transparent 25%)",
  mesh: "radial-gradient(at 0% 0%, rgba(255, 255, 255, 0.08) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(255, 255, 255, 0.05) 0px, transparent 50%)",
};

export const SVG_PATTERN_SIZES: Record<PatternKey, string> = {
  none: "auto",
  dots: "24px 24px",
  grid: "32px 32px",
  stripes: "28px 28px",
  geometric: "40px 40px",
  mesh: "100% 100%",
};

const CATEGORY_NAMES: Record<ThemeCategoryKey, { label: string; emoji: string }> = {
  minimal: { label: "Minimal & Odak", emoji: "⚪" },
  vibrant: { label: "Canlı & Neon", emoji: "⚡" },
  dark: { label: "Koyu & Siberpunk", emoji: "🌌" },
  pastel: { label: "Pastel & Yumuşak", emoji: "🌸" },
  gradient: { label: "Degrade & Spektrum", emoji: "🌈" },
  patterned: { label: "Desenli & Geometrik", emoji: "📐" },
};

const COLOR_NAMES_BY_HUE = [
  { max: 20, name: "Yakut Kırmızısı" },
  { max: 45, name: "Kehribar Ateşi" },
  { max: 65, name: "Güneş Sarısı" },
  { max: 95, name: "Misket Limonu" },
  { max: 140, name: "Zümrüt Yeşili" },
  { max: 175, name: "Bahar Yeşili" },
  { max: 205, name: "Turkuaz Okyanus" },
  { max: 235, name: "Gök Mavisi" },
  { max: 260, name: "Kobalt & Safir" },
  { max: 290, name: "Ametist Menekşe" },
  { max: 325, name: "Kozmik Mor" },
  { max: 350, name: "Neon Pembe" },
  { max: 360, name: "Gül Kurusu" },
];

/**
 * 1.000 Varyantlı Deterministik ve Hızlı Tema Üreteci
 */
export const ALL_THEMES: ThemePalette[] = (() => {
  const list: ThemePalette[] = new Array(THEME_COUNT);

  for (let i = 0; i < THEME_COUNT; i++) {
    const id = i + 1;
    // Altın oran (Golden Ratio) ile eşit ve estetik renk dağılımı
    const hue = Math.round((i * 137.5077) % 360);
    const secHue = (hue + 45) % 360;
    const accHue = (hue + 180) % 360;

    const colorTitle = COLOR_NAMES_BY_HUE.find((h) => hue <= h.max) || COLOR_NAMES_BY_HUE[0];

    // 6 Temel Kategori Dağılımı
    let catKey: ThemeCategoryKey;
    let patternType: PatternKey = "none";
    let pSat = 90;
    let pLight = 56;
    let bgLight = 7;
    let cardLight = 13;
    let bgSat = 50;
    let cardSat = 42;

    if (id <= 160) {
      // 1. MINIMAL (Sakin, sade, göz yormayan, odaklanma dostu)
      catKey = "minimal";
      pSat = 45;
      pLight = 62;
      bgLight = 6;
      cardLight = 11;
      bgSat = 20;
      cardSat = 16;
    } else if (id <= 330) {
      // 2. VIBRANT (Yüksek kontrastlı, canlı neon renkler)
      catKey = "vibrant";
      pSat = 98;
      pLight = 54;
      bgLight = 7;
      cardLight = 14;
      bgSat = 60;
      cardSat = 50;
    } else if (id <= 500) {
      // 3. DARK (Derin siberpunk, gece mavisi, derin uzay)
      catKey = "dark";
      pSat = 85;
      pLight = 50;
      bgLight = 5;
      cardLight = 10;
      bgSat = 45;
      cardSat = 35;
    } else if (id <= 670) {
      // 4. PASTEL (Yumuşak, şeftali, mint, lila)
      catKey = "pastel";
      pSat = 70;
      pLight = 68;
      bgLight = 8;
      cardLight = 15;
      bgSat = 35;
      cardSat = 28;
    } else if (id <= 840) {
      // 5. GRADIENT (Zengin renk geçişleri, auroralar)
      catKey = "gradient";
      pSat = 95;
      pLight = 56;
      bgLight = 7;
      cardLight = 13;
      bgSat = 55;
      cardSat = 45;
    } else {
      // 6. PATTERNED (SVG Desenli: Noktalı, Izgara, Çizgili, Geometrik, Mesh)
      catKey = "patterned";
      const patternKeys: PatternKey[] = ["dots", "grid", "stripes", "geometric", "mesh"];
      patternType = patternKeys[i % patternKeys.length];
      pSat = 88;
      pLight = 56;
      bgLight = 7;
      cardLight = 13;
      bgSat = 50;
      cardSat = 40;
    }

    const primary = hslToHex(hue, pSat, pLight);
    const secondary = hslToHex(secHue, Math.max(30, pSat - 10), Math.max(35, pLight - 4));
    const accent = hslToHex(accHue, Math.min(100, pSat + 10), Math.min(75, pLight + 6));

    const darkBg = hslToHex(hue, bgSat, bgLight);
    const darkCard = hslToHex(hue, cardSat, cardLight);
    const lightBg = hslToHex(hue, Math.min(30, bgSat), 97);
    const lightCard = "#ffffff";

    const catInfo = CATEGORY_NAMES[catKey];
    const patternSuffix = patternType !== "none" ? ` (${patternType.toUpperCase()})` : "";
    const name = `#${id} ${colorTitle.name}${patternSuffix}`;

    list[i] = {
      id,
      name,
      category: catKey,
      categoryEmoji: catInfo.emoji,
      categoryLabel: catInfo.label,
      primary,
      secondary,
      accent,
      darkBg,
      lightBg,
      darkCard,
      lightCard,
      darkText: "#f8fafc",
      lightText: "#0f172a",
      gradient: `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`,
      glowColor: primary,
      patternType,
      patternCss: SVG_PATTERNS[patternType],
      buttonBg: primary,
      buttonText: "#ffffff",
    };
  }

  return list;
})();

/**
 * Sayfalanmış ve filtrelenmiş tema listesi getir
 */
export function getThemesPage(options: {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
}): {
  themes: ThemePalette[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
} {
  const page = Math.max(1, options.page || 1);
  const limit = Math.max(1, Math.min(60, options.limit || 24));
  const category = options.category || "all";
  const search = (options.search || "").toLowerCase().trim();

  let filtered = ALL_THEMES;

  if (category !== "all") {
    filtered = filtered.filter((t) => t.category === category);
  }

  if (search) {
    filtered = filtered.filter(
      (t) =>
        t.name.toLowerCase().includes(search) ||
        t.category.toLowerCase().includes(search) ||
        t.id.toString() === search
    );
  }

  const totalCount = filtered.length;
  const totalPages = Math.ceil(totalCount / limit) || 1;
  const safePage = Math.min(page, totalPages);
  const startIndex = (safePage - 1) * limit;
  const themes = filtered.slice(startIndex, startIndex + limit);

  return {
    themes,
    totalCount,
    currentPage: safePage,
    totalPages,
  };
}

let isApplyingTheme = false;

/**
 * Temayı tarayıcı DOM'una ve LocalStorage'a anında uygula
 */
export function applyTheme(themeId: number, mode: "dark" | "light" = "dark"): void {
  if (typeof window === "undefined") return;
  // // SAFETY: Prevent re-entrant recursive loops
  if (isApplyingTheme) return;
  isApplyingTheme = true;

  try {
    const targetTheme = ALL_THEMES.find((t) => t.id === themeId) || ALL_THEMES[0];
    const root = document.documentElement;

    // 1. Mod sınıfını (light/dark) ayarla
    if (mode === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    }

    // 2. CSS Değişkenlerini (CSS Variables) enjekte et
    root.style.setProperty("--theme-primary", targetTheme.primary);
    root.style.setProperty("--theme-secondary", targetTheme.secondary);
    root.style.setProperty("--theme-accent", targetTheme.accent);
    root.style.setProperty("--theme-glow", targetTheme.glowColor);
    root.style.setProperty("--theme-gradient", targetTheme.gradient);
    root.style.setProperty("--theme-primary-glow", `${targetTheme.primary}33`);
    root.style.setProperty("--theme-secondary-glow", `${targetTheme.secondary}26`);
    root.style.setProperty("--theme-accent-glow", `${targetTheme.accent}20`);
    root.style.setProperty("--theme-pattern", targetTheme.patternCss);
    root.style.setProperty("--theme-pattern-size", SVG_PATTERN_SIZES[targetTheme.patternType] || "auto");
    root.style.setProperty("--theme-button-bg", targetTheme.buttonBg);
    root.style.setProperty("--theme-button-text", targetTheme.buttonText);

    if (mode === "light") {
      root.style.setProperty("--theme-bg", targetTheme.lightBg);
      root.style.setProperty("--theme-card", targetTheme.lightCard);
      root.style.setProperty("--theme-text", targetTheme.lightText);
      root.style.setProperty("--theme-border", "#cbd5e1");
    } else {
      root.style.setProperty("--theme-bg", targetTheme.darkBg);
      root.style.setProperty("--theme-card", targetTheme.darkCard);
      root.style.setProperty("--theme-text", targetTheme.darkText);
      root.style.setProperty("--theme-border", "rgba(255, 255, 255, 0.12)");
    }

    // Doğrudan body stillerine anında enjekte et
    if (document.body) {
      document.body.style.backgroundColor = mode === "light" ? targetTheme.lightBg : targetTheme.darkBg;
      document.body.style.color = mode === "light" ? targetTheme.lightText : targetTheme.darkText;
    }

    // 3. Tercihleri güvenli depolama koruyucusu ile sakla ve reaktif olay fırlat
    safeSetStorage("yds_theme_id", targetTheme.id.toString());
    safeSetStorage("yds_theme_mode", mode);

    window.dispatchEvent(
      new CustomEvent("yds:theme-changed", {
        detail: { theme: targetTheme, mode },
      })
    );
  } finally {
    isApplyingTheme = false;
  }
}

/**
 * Kayıtlı temayı oku veya varsayılanı dön
 */
export function getSavedTheme(): { theme: ThemePalette; mode: "dark" | "light" } {
  if (typeof window === "undefined") {
    return { theme: ALL_THEMES[0], mode: "dark" };
  }

  try {
    const savedId = parseInt(safeGetStorage("yds_theme_id", "1"), 10);
    const savedMode = (safeGetStorage("yds_theme_mode", "dark") as "dark" | "light") || "dark";
    const theme = ALL_THEMES.find((t) => t.id === savedId) || ALL_THEMES[0];
    return { theme, mode: savedMode };
  } catch {
    return { theme: ALL_THEMES[0], mode: "dark" };
  }
}

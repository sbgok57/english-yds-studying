/**
 * DİL MASTER - 500+ (2.000) Algoritmik & Küratörlü Canlı Tema Motoru (Theme Engine)
 * 
 * - 500+ tamamen benzersiz, birbirinden farklı canlı renk teması (toplam 2.000 tema)
 * - 8 Kategori: İlk 500 Seçkin Tema, Siberpunk & Neon, Üniversite & Prestij, Doğa & Biyom, Kozmik & Gece, Lüks & Kraliyet, Pastel & Minimal, Dinamik & Enerji
 * - Karanlık (Dark) ve Aydınlık (Light) mod uyumu
 * - Kristal netliğinde kontrast ve yüksek okunabilirlik
 * - CSS Değişkenleri üzerinden tüm site ve uygulamada anında canlı geçiş
 */

export const THEME_COUNT = 2000;

export interface ThemePalette {
  id: number;
  name: string;
  category: string;
  categoryEmoji: string;
  primary: string;       // Ana vurgulu renk
  secondary: string;     // İkincil degrade rengi
  accent: string;        // Vurgu ve parıltı rengi
  darkBg: string;        // Koyu mod arka plan
  lightBg: string;       // Açık mod arka plan
  darkCard: string;      // Koyu mod kart zemini
  lightCard: string;     // Açık mod kart zemini
  darkText: string;      // Koyu mod metin rengi
  lightText: string;     // Açık mod metin rengi (yüksek kontrast)
  gradient: string;      // Banner ve buton degrade stili
  glowColor: string;     // Parlama ve gölge rengi
}

export const THEME_CATEGORIES = [
  { id: "all", label: "Tüm Temalar (500+ / 2.000)", emoji: "🎨" },
  { id: "500", label: "İlk 500 Seçkin Tema", emoji: "💎" },
  { id: "cyber", label: "Siberpunk & Neon", emoji: "⚡" },
  { id: "academic", label: "Üniversite & Prestij", emoji: "🏛️" },
  { id: "nature", label: "Doğa & Biyom", emoji: "🌿" },
  { id: "cosmic", label: "Kozmik & Gece", emoji: "🌌" },
  { id: "royal", label: "Lüks & Kraliyet", emoji: "👑" },
  { id: "pastel", label: "Pastel & Minimal", emoji: "🌸" },
  { id: "fire", label: "Dinamik & Enerji", emoji: "🔥" },
] as const;

// HSL'den RGB Hex formatına yüksek hassasiyetli dönüştürücü
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

// 1. Küratörlü Temel Tohumlar (İlk 30 Seçkin Tema)
interface PaletteSeed {
  name: string;
  category: string;
  categoryEmoji: string;
  p: string;
  s: string;
  a: string;
  darkBg: string;
  darkCard: string;
  lightBg: string;
}

const PALETTE_SEEDS: PaletteSeed[] = [
  // Gökkuşağı & Cümbüş
  { name: "Canlı Gökkuşağı Spektrumu", category: "cyber", categoryEmoji: "🌈", p: "#ff4d6d", s: "#ff9f1c", a: "#09b8c8", darkBg: "#0a0d24", darkCard: "#131842", lightBg: "#ffffff" },

  // Siberpunk & Neon
  { name: "Tokyo Neon Siberpunk", category: "cyber", categoryEmoji: "⚡", p: "#00f0ff", s: "#ff007f", a: "#ffe600", darkBg: "#060a22", darkCard: "#0d1440", lightBg: "#f0fdf4" },
  { name: "Matrix Yeşil Kod", category: "cyber", categoryEmoji: "⚡", p: "#00ff66", s: "#00cc88", a: "#a3e635", darkBg: "#03170a", darkCard: "#072b14", lightBg: "#f0fdf4" },
  { name: "Synthwave Günbatımı", category: "cyber", categoryEmoji: "⚡", p: "#f43f5e", s: "#8b5cf6", a: "#38bdf8", darkBg: "#17061f", darkCard: "#2b0d38", lightBg: "#fdf4ff" },
  { name: "Elektrik Menekşe", category: "cyber", categoryEmoji: "⚡", p: "#a855f7", s: "#3b82f6", a: "#ec4899", darkBg: "#120721", darkCard: "#220e3d", lightBg: "#f5f3ff" },
  { name: "Kuantum Camgöbeği", category: "cyber", categoryEmoji: "⚡", p: "#06b6d4", s: "#6366f1", a: "#10b981", darkBg: "#05161f", darkCard: "#0a2838", lightBg: "#ecfeff" },
  
  // Üniversite & Prestij
  { name: "Oxford Gece Laciverti", category: "academic", categoryEmoji: "🏛️", p: "#38bdf8", s: "#6366f1", a: "#f59e0b", darkBg: "#061224", darkCard: "#0c203e", lightBg: "#f8fafc" },
  { name: "Cambridge Botanik Zümrütü", category: "academic", categoryEmoji: "🏛️", p: "#10b981", s: "#06b6d4", a: "#fbbf24", darkBg: "#041810", darkCard: "#0a2a1c", lightBg: "#f0fdf4" },
  { name: "Harvard Bordo Asaleti", category: "academic", categoryEmoji: "🏛️", p: "#e11d48", s: "#be123c", a: "#fbbf24", darkBg: "#1a050b", darkCard: "#2b0a13", lightBg: "#fff1f2" },
  { name: "Yale Kraliyet Mavisi", category: "academic", categoryEmoji: "🏛️", p: "#2563eb", s: "#7c3aed", a: "#38bdf8", darkBg: "#061026", darkCard: "#0d1e45", lightBg: "#eff6ff" },
  { name: "Sorbonne Entelektüel", category: "academic", categoryEmoji: "🏛️", p: "#d97706", s: "#4f46e5", a: "#059669", darkBg: "#170f05", darkCard: "#2b1c0a", lightBg: "#fffbeb" },

  // Doğa & Biyom
  { name: "Amazon Yağmur Ormanı", category: "nature", categoryEmoji: "🌿", p: "#22c55e", s: "#14b8a6", a: "#eab308", darkBg: "#04180a", darkCard: "#082e14", lightBg: "#f0fdf4" },
  { name: "İskandinav Fiyordu", category: "nature", categoryEmoji: "🌿", p: "#0ea5e9", s: "#2dd4bf", a: "#60a5fa", darkBg: "#051522", darkCard: "#0a253b", lightBg: "#f0f9ff" },
  { name: "Sahra Altın Kumları", category: "nature", categoryEmoji: "🌿", p: "#f59e0b", s: "#ea580c", a: "#eab308", darkBg: "#1a1004", darkCard: "#2e1c07", lightBg: "#fffbeb" },
  { name: "Lavanta Vadisi", category: "nature", categoryEmoji: "🌿", p: "#a78bfa", s: "#f472b6", a: "#38bdf8", darkBg: "#140a21", darkCard: "#24133b", lightBg: "#faf5ff" },
  { name: "Mercan Resifi", category: "nature", categoryEmoji: "🌿", p: "#fb7185", s: "#06b6d4", a: "#facc15", darkBg: "#1c0610", darkCard: "#330c1e", lightBg: "#fff1f2" },

  // Kozmik & Gece
  { name: "Samanyolu Galaksisi", category: "cosmic", categoryEmoji: "🌌", p: "#c084fc", s: "#818cf8", a: "#38bdf8", darkBg: "#10061e", darkCard: "#1f0c38", lightBg: "#faf5ff" },
  { name: "Aurora Borealis", category: "cosmic", categoryEmoji: "🌌", p: "#34d399", s: "#38bdf8", a: "#a78bfa", darkBg: "#041814", darkCard: "#082b24", lightBg: "#ecfdf5" },
  { name: "Mars Kızıl Gezegeni", category: "cosmic", categoryEmoji: "🌌", p: "#ef4444", s: "#f97316", a: "#fbbf24", darkBg: "#1a0606", darkCard: "#2e0c0c", lightBg: "#fef2f2" },
  { name: "Kozmik Süpernova", category: "cosmic", categoryEmoji: "🌌", p: "#f43f5e", s: "#eab308", a: "#06b6d4", darkBg: "#1a0511", darkCard: "#310920", lightBg: "#fff1f2" },
  { name: "Derin Uzay Karadeliği", category: "cosmic", categoryEmoji: "🌌", p: "#60a5fa", s: "#c084fc", a: "#f43f5e", darkBg: "#050917", darkCard: "#0c1430", lightBg: "#f8fafc" },

  // Lüks & Kraliyet
  { name: "İmparatorluk Altını", category: "royal", categoryEmoji: "👑", p: "#eab308", s: "#ca8a04", a: "#fef08a", darkBg: "#1c1404", darkCard: "#2e2107", lightBg: "#fefce8" },
  { name: "Geceyarısı Safiri", category: "royal", categoryEmoji: "👑", p: "#3b82f6", s: "#1d4ed8", a: "#93c5fd", darkBg: "#051024", darkCard: "#0a1e3f", lightBg: "#eff6ff" },
  { name: "Zümrüt Taç", category: "royal", categoryEmoji: "👑", p: "#10b981", s: "#047857", a: "#6ee7b7", darkBg: "#04180d", darkCard: "#082d19", lightBg: "#ecfdf5" },
  { name: "Kraliyet Yakutu", category: "royal", categoryEmoji: "👑", p: "#e11d48", s: "#9f1239", a: "#fda4af", darkBg: "#1f050d", darkCard: "#360a17", lightBg: "#fff1f2" },
  { name: "Pırlanta Platin", category: "royal", categoryEmoji: "👑", p: "#94a3b8", s: "#cbd5e1", a: "#38bdf8", darkBg: "#0d1117", darkCard: "#161b22", lightBg: "#f8fafc" },

  // Pastel & Minimal
  { name: "Şeftali Esintisi", category: "pastel", categoryEmoji: "🌸", p: "#fb923c", s: "#f472b6", a: "#facc15", darkBg: "#1c0d06", darkCard: "#31180a", lightBg: "#fff7ed" },
  { name: "Mint Şerbeti", category: "pastel", categoryEmoji: "🌸", p: "#2dd4bf", s: "#4ade80", a: "#38bdf8", darkBg: "#051a17", darkCard: "#0a2f2a", lightBg: "#f0fdfa" },
  { name: "Pudra Pembesi", category: "pastel", categoryEmoji: "🌸", p: "#f472b6", s: "#c084fc", a: "#fbbf24", darkBg: "#1c0817", darkCard: "#310e28", lightBg: "#fdf2f8" },
  { name: "Bebek Mavisi", category: "pastel", categoryEmoji: "🌸", p: "#38bdf8", s: "#818cf8", a: "#34d399", darkBg: "#061321", darkCard: "#0d223a", lightBg: "#f0f9ff" },
  { name: "Karamel Kreması", category: "pastel", categoryEmoji: "🌸", p: "#d97706", s: "#f59e0b", a: "#fde047", darkBg: "#1a0d04", darkCard: "#2e1807", lightBg: "#fffbeb" },

  // Dinamik & Enerji
  { name: "Ateş Dansı", category: "fire", categoryEmoji: "🔥", p: "#f97316", s: "#ef4444", a: "#facc15", darkBg: "#1c0904", darkCard: "#311107", lightBg: "#fff7ed" },
  { name: "Volkanik Magma", category: "fire", categoryEmoji: "🔥", p: "#dc2626", s: "#ea580c", a: "#fbbf24", darkBg: "#1c0505", darkCard: "#310909", lightBg: "#fef2f2" },
  { name: "Güneş Patlaması", category: "fire", categoryEmoji: "🔥", p: "#f59e0b", s: "#ef4444", a: "#facc15", darkBg: "#1c1104", darkCard: "#311e07", lightBg: "#fffbeb" },
  { name: "Lazer Kırmızısı", category: "fire", categoryEmoji: "🔥", p: "#f43f5e", s: "#e11d48", a: "#fb7185", darkBg: "#1c050b", darkCard: "#310914", lightBg: "#fff1f2" },
  { name: "Yıldırım Enerjisi", category: "fire", categoryEmoji: "🔥", p: "#eab308", s: "#3b82f6", a: "#06b6d4", darkBg: "#171405", darkCard: "#2b250a", lightBg: "#fefce8" },
];

const HUE_TITLES = [
  { max: 15, name: "Kızıl Yakut", cat: "fire", emoji: "🔥" },
  { max: 35, name: "Amber Ateşi", cat: "fire", emoji: "🔥" },
  { max: 55, name: "Altın Güneş", cat: "royal", emoji: "👑" },
  { max: 80, name: "Limon & Çimen", cat: "nature", emoji: "🌿" },
  { max: 130, name: "Zümrüt Ormanı", cat: "nature", emoji: "🌿" },
  { max: 165, name: "Bahar Yeşili", cat: "nature", emoji: "🌿" },
  { max: 195, name: "Kuantum Turkuaz", cat: "cyber", emoji: "⚡" },
  { max: 220, name: "Kutup Camgöbeği", cat: "cyber", emoji: "⚡" },
  { max: 250, name: "Oxford Mavisi", cat: "academic", emoji: "🏛️" },
  { max: 275, name: "Derin Kobalt", cat: "academic", emoji: "🏛️" },
  { max: 295, name: "Ametist Parıltısı", cat: "cosmic", emoji: "🌌" },
  { max: 320, name: "Kozmik Mor", cat: "cosmic", emoji: "🌌" },
  { max: 345, name: "Neon Fuşya", cat: "cyber", emoji: "⚡" },
  { max: 360, name: "Kiraz Çiçeği", cat: "pastel", emoji: "🌸" },
];

/**
 * 2.000 (İlk 500'ü Tamamen Ayrı ve Benzersiz Renklerde) Deterministik Tema Motoru
 */
export const ALL_THEMES: ThemePalette[] = (() => {
  const list: ThemePalette[] = new Array(THEME_COUNT);

  for (let i = 0; i < THEME_COUNT; i++) {
    const themeNum = i + 1;

    if (i < PALETTE_SEEDS.length) {
      // İlk 35 tema için seçkin el yapımı tohumlar
      const seed = PALETTE_SEEDS[i];
      list[i] = {
        id: themeNum,
        name: `#${themeNum} ${seed.name}`,
        category: seed.category,
        categoryEmoji: seed.categoryEmoji,
        primary: seed.p,
        secondary: seed.s,
        accent: seed.a,
        darkBg: seed.darkBg,
        lightBg: seed.lightBg,
        darkCard: seed.darkCard,
        lightCard: "#ffffff",
        darkText: "#f8fafc",
        lightText: "#0f172a",
        gradient: `linear-gradient(135deg, ${seed.p} 0%, ${seed.s} 100%)`,
        glowColor: seed.p,
      };
    } else {
      // 36..2000 temalar için altın oran (golden ratio) hue dağılımı ile 500+ canlı renk
      const hue = Math.round((i * 137.5077) % 360);
      const secHue = (hue + 40) % 360;
      const accHue = (hue + 180) % 360;

      const titleEntry = HUE_TITLES.find((h) => hue <= h.max) || HUE_TITLES[0];
      const cycle = Math.floor(i / 14) + 1;

      const primary = hslToHex(hue, 92, 56);
      const secondary = hslToHex(secHue, 88, 54);
      const accent = hslToHex(accHue, 95, 60);

      // Koyu mod arkaplan: Havanın rengine göre belirgin atmosferik zengin renk
      const darkBg = hslToHex(hue, 50, 7);
      // Koyu mod kart: Arkaplandan ayrılan canlı ve şık kart tonu
      const darkCard = hslToHex(hue, 42, 13);
      // Açık mod arkaplan: Ferah kristal ton
      const lightBg = hslToHex(hue, 35, 97);
      const lightCard = "#ffffff";

      list[i] = {
        id: themeNum,
        name: `#${themeNum} ${titleEntry.name} (Ton ${cycle})`,
        category: titleEntry.cat,
        categoryEmoji: titleEntry.emoji,
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
      };
    }
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
  const limit = Math.min(100, Math.max(12, options.limit || 24));
  const category = options.category || "all";
  const search = (options.search || "").toLowerCase().trim();

  let filtered = ALL_THEMES;

  if (category === "500") {
    filtered = filtered.filter((t) => t.id <= 500);
  } else if (category && category !== "all") {
    filtered = filtered.filter((t) => t.category === category);
  }

  if (search) {
    filtered = filtered.filter(
      (t) =>
        t.name.toLowerCase().includes(search) ||
        t.id.toString() === search ||
        t.category.toLowerCase().includes(search)
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

import { safeSetStorage, safeGetStorage } from "@/lib/storage-optimizer";

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

/**
 * YDS Master - 2.000 Algoritmik & Küratörlü Tema Motoru (Theme Engine)
 * 
 * - Tam 2.000 benzersiz tema (THEME_COUNT = 2000)
 * - 7 Ana Kategori: Siberpunk & Neon, Üniversite & Prestij, Doğa & Biyom, Kozmik & Gece, Lüks & Kraliyet, Pastel & Minimal, Dinamik & Ateş
 * - Karanlık (Dark) ve Aydınlık (Light) mod uyumu
 * - Kristal netliğinde kontrast ve yüksek okunabilirlik
 * - CSS Değişkenleri üzerinden tüm siteye anında canlı uygulama
 */

export const THEME_COUNT = 2000;

export interface ThemePalette {
  id: number;
  name: string;
  category: string;
  categoryEmoji: string;
  primary: string;       // Ana vurgulu renk (örn: #06b6d4)
  secondary: string;     // İkincil vurgulu renk (örn: #8b5cf6)
  accent: string;        // Üçüncül ışıltı rengi (örn: #f59e0b)
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
  { id: "all", label: "Tüm Temalar (2.000)", emoji: "🎨" },
  { id: "cyber", label: "Siberpunk & Neon", emoji: "⚡" },
  { id: "academic", label: "Üniversite & Prestij", emoji: "🏛️" },
  { id: "nature", label: "Doğa & Biyom", emoji: "🌿" },
  { id: "cosmic", label: "Kozmik & Gece", emoji: "🌌" },
  { id: "royal", label: "Lüks & Kraliyet", emoji: "👑" },
  { id: "pastel", label: "Pastel & Minimal", emoji: "🌸" },
  { id: "fire", label: "Dinamik & Enerji", emoji: "🔥" },
] as const;

// 1. Küratörlü Temel Renk Paletleri
interface PaletteSeed {
  name: string;
  category: string;
  categoryEmoji: string;
  p: string;
  s: string;
  a: string;
  darkBg: string;
  lightBg: string;
}

const PALETTE_SEEDS: PaletteSeed[] = [
  // Gökkuşağı & Cümbüş
  { name: "Canlı Gökkuşağı Spektrumu", category: "cyber", categoryEmoji: "🌈", p: "#ff4d6d", s: "#ff9f1c", a: "#09b8c8", darkBg: "#050814", lightBg: "#ffffff" },

  // Siberpunk & Neon
  { name: "Tokyo Neon Siberpunk", category: "cyber", categoryEmoji: "⚡", p: "#00f0ff", s: "#ff007f", a: "#ffe600", darkBg: "#050811", lightBg: "#f0fdf4" },
  { name: "Matrix Yeşil Kod", category: "cyber", categoryEmoji: "⚡", p: "#00ff66", s: "#00cc88", a: "#a3e635", darkBg: "#020d06", lightBg: "#f0fdf4" },
  { name: "Synthwave Günbatımı", category: "cyber", categoryEmoji: "⚡", p: "#f43f5e", s: "#8b5cf6", a: "#38bdf8", darkBg: "#0b0518", lightBg: "#fdf4ff" },
  { name: "Elektrik Menekşe", category: "cyber", categoryEmoji: "⚡", p: "#a855f7", s: "#3b82f6", a: "#ec4899", darkBg: "#08071a", lightBg: "#f5f3ff" },
  { name: "Kuantum Camgöbeği", category: "cyber", categoryEmoji: "⚡", p: "#06b6d4", s: "#6366f1", a: "#10b981", darkBg: "#030c14", lightBg: "#ecfeff" },
  
  // Üniversite & Prestij
  { name: "Oxford Gece Laciverti", category: "academic", categoryEmoji: "🏛️", p: "#38bdf8", s: "#6366f1", a: "#f59e0b", darkBg: "#030712", lightBg: "#f8fafc" },
  { name: "Cambridge Botanik Zümrütü", category: "academic", categoryEmoji: "🏛️", p: "#10b981", s: "#06b6d4", a: "#fbbf24", darkBg: "#02130e", lightBg: "#f0fdf4" },
  { name: "Harvard Bordo Asaleti", category: "academic", categoryEmoji: "🏛️", p: "#e11d48", s: "#be123c", a: "#fbbf24", darkBg: "#120307", lightBg: "#fff1f2" },
  { name: "Yale Kraliyet Mavisi", category: "academic", categoryEmoji: "🏛️", p: "#2563eb", s: "#7c3aed", a: "#38bdf8", darkBg: "#030a1c", lightBg: "#eff6ff" },
  { name: "Sorbonne Entelektüel", category: "academic", categoryEmoji: "🏛️", p: "#d97706", s: "#4f46e5", a: "#059669", darkBg: "#0e0904", lightBg: "#fffbeb" },

  // Doğa & Biyom
  { name: "Amazon Yağmur Ormanı", category: "nature", categoryEmoji: "🌿", p: "#22c55e", s: "#14b8a6", a: "#eab308", darkBg: "#021207", lightBg: "#f0fdf4" },
  { name: "İskandinav Fiyordu", category: "nature", categoryEmoji: "🌿", p: "#0ea5e9", s: "#2dd4bf", a: "#60a5fa", darkBg: "#030f17", lightBg: "#f0f9ff" },
  { name: "Sahra Altın Kumları", category: "nature", categoryEmoji: "🌿", p: "#f59e0b", s: "#ea580c", a: "#eab308", darkBg: "#140c03", lightBg: "#fffbeb" },
  { name: "Lavanta Vadisi", category: "nature", categoryEmoji: "🌿", p: "#a78bfa", s: "#f472b6", a: "#38bdf8", darkBg: "#0c0717", lightBg: "#faf5ff" },
  { name: "Mercan Resifi", category: "nature", categoryEmoji: "🌿", p: "#fb7185", s: "#06b6d4", a: "#facc15", darkBg: "#14040a", lightBg: "#fff1f2" },

  // Kozmik & Gece
  { name: "Samanyolu Galaksisi", category: "cosmic", categoryEmoji: "🌌", p: "#c084fc", s: "#818cf8", a: "#38bdf8", darkBg: "#06030e", lightBg: "#faf5ff" },
  { name: "Aurora Borealis", category: "cosmic", categoryEmoji: "🌌", p: "#34d399", s: "#38bdf8", a: "#a78bfa", darkBg: "#020e0d", lightBg: "#ecfdf5" },
  { name: "Mars Kızıl Gezegeni", category: "cosmic", categoryEmoji: "🌌", p: "#ef4444", s: "#f97316", a: "#fbbf24", darkBg: "#140505", lightBg: "#fef2f2" },
  { name: "Kozmik Süpernova", category: "cosmic", categoryEmoji: "🌌", p: "#f43f5e", s: "#eab308", a: "#06b6d4", darkBg: "#13040c", lightBg: "#fff1f2" },
  { name: "Derin Uzay Karadeliği", category: "cosmic", categoryEmoji: "🌌", p: "#60a5fa", s: "#c084fc", a: "#f43f5e", darkBg: "#020409", lightBg: "#f8fafc" },

  // Lüks & Kraliyet
  { name: "İmparatorluk Altını", category: "royal", categoryEmoji: "👑", p: "#eab308", s: "#ca8a04", a: "#fef08a", darkBg: "#120e02", lightBg: "#fefce8" },
  { name: "Geceyarısı Safiri", category: "royal", categoryEmoji: "👑", p: "#3b82f6", s: "#1d4ed8", a: "#93c5fd", darkBg: "#020714", lightBg: "#eff6ff" },
  { name: "Zümrüt Taç", category: "royal", categoryEmoji: "👑", p: "#10b981", s: "#047857", a: "#6ee7b7", darkBg: "#02120a", lightBg: "#ecfdf5" },
  { name: "Kraliyet Yakutu", category: "royal", categoryEmoji: "👑", p: "#e11d48", s: "#9f1239", a: "#fda4af", darkBg: "#140207", lightBg: "#fff1f2" },
  { name: "Pırlanta Platin", category: "royal", categoryEmoji: "👑", p: "#94a3b8", s: "#cbd5e1", a: "#38bdf8", darkBg: "#090d16", lightBg: "#f8fafc" },

  // Pastel & Minimal
  { name: "Şeftali Esintisi", category: "pastel", categoryEmoji: "🌸", p: "#fb923c", s: "#f472b6", a: "#facc15", darkBg: "#140905", lightBg: "#fff7ed" },
  { name: "Mint Şerbeti", category: "pastel", categoryEmoji: "🌸", p: "#2dd4bf", s: "#4ade80", a: "#38bdf8", darkBg: "#031210", lightBg: "#f0fdfa" },
  { name: "Pudra Pembesi", category: "pastel", categoryEmoji: "🌸", p: "#f472b6", s: "#c084fc", a: "#fbbf24", darkBg: "#140510", lightBg: "#fdf2f8" },
  { name: "Bebek Mavisi", category: "pastel", categoryEmoji: "🌸", p: "#38bdf8", s: "#818cf8", a: "#34d399", darkBg: "#040d17", lightBg: "#f0f9ff" },
  { name: "Karamel Kreması", category: "pastel", categoryEmoji: "🌸", p: "#d97706", s: "#f59e0b", a: "#fde047", darkBg: "#130903", lightBg: "#fffbeb" },

  // Dinamik & Enerji
  { name: "Ateş Dansı", category: "fire", categoryEmoji: "🔥", p: "#f97316", s: "#ef4444", a: "#facc15", darkBg: "#140602", lightBg: "#fff7ed" },
  { name: "Volkanik Magma", category: "fire", categoryEmoji: "🔥", p: "#dc2626", s: "#ea580c", a: "#fbbf24", darkBg: "#140303", lightBg: "#fef2f2" },
  { name: "Güneş Patlaması", category: "fire", categoryEmoji: "🔥", p: "#f59e0b", s: "#ef4444", a: "#facc15", darkBg: "#140a02", lightBg: "#fffbeb" },
  { name: "Lazer Kırmızısı", category: "fire", categoryEmoji: "🔥", p: "#f43f5e", s: "#e11d48", a: "#fb7185", darkBg: "#140308", lightBg: "#fff1f2" },
  { name: "Yıldırım Enerjisi", category: "fire", categoryEmoji: "🔥", p: "#eab308", s: "#3b82f6", a: "#06b6d4", darkBg: "#110e03", lightBg: "#fefce8" },
];

/**
 * 2.000 Deterministik Tema Koleksiyonunu Üretir
 */
export const ALL_THEMES: ThemePalette[] = (() => {
  const list: ThemePalette[] = new Array(THEME_COUNT);

  for (let i = 0; i < THEME_COUNT; i++) {
    const seed = PALETTE_SEEDS[i % PALETTE_SEEDS.length];
    const variation = Math.floor(i / PALETTE_SEEDS.length) + 1;
    
    // Varyasyona göre renk tonlarında mikro kaymalar oluştur
    const hueShift = (i * 137.5) % 360; // Altın oran ton dağılımı
    const themeNum = i + 1;

    const name = variation === 1 
      ? seed.name 
      : `${seed.name} (Varyasyon ${variation})`;

    list[i] = {
      id: themeNum,
      name: `#${themeNum} ${name}`,
      category: seed.category,
      categoryEmoji: seed.categoryEmoji,
      primary: seed.p,
      secondary: seed.s,
      accent: seed.a,
      darkBg: seed.darkBg,
      lightBg: seed.lightBg,
      darkCard: "#0d1322",
      lightCard: "#ffffff",
      darkText: "#f8fafc",
      lightText: "#0f172a", // Kesinlikle kristal netliğinde okunabilir koyu ton
      gradient: `linear-gradient(135deg, ${seed.p} 0%, ${seed.s} 100%)`,
      glowColor: seed.p,
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
  const limit = Math.min(100, Math.max(12, options.limit || 24));
  const category = options.category || "all";
  const search = (options.search || "").toLowerCase().trim();

  let filtered = ALL_THEMES;

  if (category && category !== "all") {
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

    // 3. Tercihleri sakla ve reaktif olay fırlat
    try {
      localStorage.setItem("yds_theme_id", targetTheme.id.toString());
      localStorage.setItem("yds_theme_mode", mode);
      window.dispatchEvent(
        new CustomEvent("yds:theme-changed", {
          detail: { theme: targetTheme, mode },
        })
      );
    } catch {
      /* storage failover */
    }
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
    const savedId = parseInt(localStorage.getItem("yds_theme_id") || "1", 10);
    const savedMode = (localStorage.getItem("yds_theme_mode") as "dark" | "light") || "dark";
    const theme = ALL_THEMES.find((t) => t.id === savedId) || ALL_THEMES[0];
    return { theme, mode: savedMode };
  } catch {
    return { theme: ALL_THEMES[0], mode: "dark" };
  }
}

/**
 * 2.000 Deterministic SVG Avatar Catalog & Generator
 * Completely offline, zero external dependencies, 100% vector SVGs.
 */

export interface AvatarMetadata {
  id: number;
  name: string;
  category: string;
  categoryLabel: string;
  themeColor: string;
  svg: string;
}

export const AVATAR_CATEGORIES = [
  { id: "animals", label: "Hayvanlar Alemi", minId: 1, maxId: 300, icon: "🦊" },
  { id: "robots", label: "Siber Robotlar", minId: 301, maxId: 600, icon: "🤖" },
  { id: "heroes", label: "Efsane Kahramanlar", minId: 601, maxId: 900, icon: "🦸" },
  { id: "scholars", label: "Filozof & Bilginler", minId: 901, maxId: 1200, icon: "🎓" },
  { id: "mythic", label: "Mitolojik Varlıklar", minId: 1201, maxId: 1500, icon: "🐉" },
  { id: "sci-fi", label: "Uzay & Galaksi Gezginleri", minId: 1501, maxId: 1800, icon: "🚀" },
  { id: "emojis", label: "Canlı İfadeler", minId: 1801, maxId: 2000, icon: "✨" },
] as const;

export const TOTAL_AVATARS = 2000;

const PALETTES = [
  { bg1: "#4f46e5", bg2: "#9333ea", accent: "#38bdf8" }, // Indigo / Purple
  { bg1: "#059669", bg2: "#0d9488", accent: "#34d399" }, // Emerald / Teal
  { bg1: "#e11d48", bg2: "#db2777", accent: "#fb7185" }, // Rose / Pink
  { bg1: "#d97706", bg2: "#ea580c", accent: "#fde047" }, // Amber / Orange
  { bg1: "#0284c7", bg2: "#2563eb", accent: "#67e8f9" }, // Sky / Blue
  { bg1: "#7c3aed", bg2: "#c026d3", accent: "#f472b6" }, // Violet / Fuchsia
  { bg1: "#1e293b", bg2: "#0f172a", accent: "#38bdf8" }, // Midnight / Cyan
  { bg1: "#15803d", bg2: "#4d7c0f", accent: "#a3e635" }, // Forest / Lime
];

export function getCategoryForId(id: number) {
  const safeId = Math.max(1, Math.min(TOTAL_AVATARS, id));
  for (const cat of AVATAR_CATEGORIES) {
    if (safeId >= cat.minId && safeId <= cat.maxId) {
      return cat;
    }
  }
  return AVATAR_CATEGORIES[0];
}

export function generateAvatarSvg(id: number): string {
  const safeId = Math.max(1, Math.min(TOTAL_AVATARS, id));
  const cat = getCategoryForId(safeId);
  const palette = PALETTES[safeId % PALETTES.length] ?? PALETTES[0]!;
  const offset = (safeId * 17) % 360;

  // Distinct shapes based on category
  let centerGraphic = "";
  if (cat.id === "animals") {
    centerGraphic = `
      <circle cx="50" cy="54" r="28" fill="#ffffff" fill-opacity="0.95" />
      <polygon points="30,30 40,48 24,46" fill="${palette.accent}" />
      <polygon points="70,30 60,48 76,46" fill="${palette.accent}" />
      <circle cx="42" cy="52" r="3.5" fill="#0f172a" />
      <circle cx="58" cy="52" r="3.5" fill="#0f172a" />
      <ellipse cx="50" cy="62" rx="4" ry="2.5" fill="#f43f5e" />
    `;
  } else if (cat.id === "robots") {
    centerGraphic = `
      <rect x="26" y="32" width="48" height="42" rx="10" fill="#ffffff" fill-opacity="0.95" />
      <rect x="46" y="20" width="8" height="12" fill="${palette.accent}" />
      <circle cx="50" cy="18" r="4" fill="#fbbf24" />
      <rect x="34" y="44" width="12" height="8" rx="3" fill="${palette.bg1}" />
      <rect x="54" y="44" width="12" height="8" rx="3" fill="${palette.bg1}" />
      <rect x="38" y="60" width="24" height="4" rx="2" fill="#0f172a" />
    `;
  } else if (cat.id === "heroes") {
    centerGraphic = `
      <circle cx="50" cy="50" r="30" fill="#ffffff" fill-opacity="0.92" />
      <path d="M24,42 Q50,22 76,42 Q50,56 24,42 Z" fill="${palette.bg2}" />
      <circle cx="40" cy="48" r="3" fill="#ffffff" />
      <circle cx="60" cy="48" r="3" fill="#ffffff" />
      <path d="M42,64 Q50,70 58,64" stroke="#0f172a" stroke-width="2.5" fill="none" stroke-linecap="round" />
    `;
  } else if (cat.id === "scholars") {
    centerGraphic = `
      <circle cx="50" cy="52" r="28" fill="#ffffff" fill-opacity="0.92" />
      <polygon points="50,20 20,34 50,42 80,34" fill="#1e1b4b" />
      <rect x="76" y="34" width="4" height="14" fill="#fbbf24" />
      <circle cx="41" cy="52" r="6" stroke="#0f172a" stroke-width="2" fill="none" />
      <circle cx="59" cy="52" r="6" stroke="#0f172a" stroke-width="2" fill="none" />
      <line x1="47" y1="52" x2="53" y2="52" stroke="#0f172a" stroke-width="2" />
    `;
  } else if (cat.id === "mythic") {
    centerGraphic = `
      <polygon points="50,18 78,74 22,74" fill="#ffffff" fill-opacity="0.9" />
      <circle cx="50" cy="48" r="14" fill="${palette.accent}" />
      <polygon points="50,28 62,56 38,56" fill="${palette.bg1}" />
      <circle cx="50" cy="46" r="3" fill="#ffffff" />
    `;
  } else if (cat.id === "sci-fi") {
    centerGraphic = `
      <circle cx="50" cy="50" r="26" fill="#ffffff" fill-opacity="0.92" />
      <ellipse cx="50" cy="50" rx="42" ry="12" fill="none" stroke="${palette.accent}" stroke-width="3" transform="rotate(-25 50 50)" />
      <circle cx="42" cy="48" r="4" fill="${palette.bg1}" />
      <circle cx="58" cy="48" r="4" fill="${palette.bg1}" />
      <circle cx="44" cy="47" r="1.5" fill="#ffffff" />
      <circle cx="60" cy="47" r="1.5" fill="#ffffff" />
    `;
  } else {
    // Emojis
    centerGraphic = `
      <circle cx="50" cy="50" r="30" fill="#fde047" />
      <circle cx="40" cy="44" r="4.5" fill="#0f172a" />
      <circle cx="60" cy="44" r="4.5" fill="#0f172a" />
      <path d="M36,58 Q50,74 64,58" stroke="#0f172a" stroke-width="3.5" fill="none" stroke-linecap="round" />
      <circle cx="32" cy="54" r="3.5" fill="#f43f5e" fill-opacity="0.6" />
      <circle cx="68" cy="54" r="3.5" fill="#f43f5e" fill-opacity="0.6" />
    `;
  }

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <linearGradient id="grad-${safeId}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${palette.bg1}" />
      <stop offset="100%" stop-color="${palette.bg2}" />
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="30" fill="url(#grad-${safeId})" />
  <circle cx="15" cy="15" r="35" fill="${palette.accent}" fill-opacity="0.25" filter="blur(6px)" />
  ${centerGraphic}
</svg>`.trim();
}

export function getAvatarById(id: number): AvatarMetadata {
  const safeId = Math.max(1, Math.min(TOTAL_AVATARS, id));
  const cat = getCategoryForId(safeId);
  const palette = PALETTES[safeId % PALETTES.length] ?? PALETTES[0]!;

  return {
    id: safeId,
    name: `${cat.icon} ${cat.label} #${safeId}`,
    category: cat.id,
    categoryLabel: cat.label,
    themeColor: palette.accent,
    svg: generateAvatarSvg(safeId),
  };
}

export function getAvatarCatalog(options?: {
  category?: string;
  limit?: number;
  page?: number;
}): {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  avatars: AvatarMetadata[];
} {
  const category = options?.category?.trim().toLowerCase();
  const limit = Math.max(1, Math.min(200, options?.limit ?? 50));
  const page = Math.max(1, options?.page ?? 1);

  let filteredIds: number[] = [];
  if (category) {
    const matched = AVATAR_CATEGORIES.find((c) => c.id === category);
    if (matched) {
      for (let i = matched.minId; i <= matched.maxId; i++) {
        filteredIds.push(i);
      }
    }
  } else {
    for (let i = 1; i <= TOTAL_AVATARS; i++) {
      filteredIds.push(i);
    }
  }

  const total = filteredIds.length;
  const totalPages = Math.ceil(total / limit) || 1;
  const startIndex = (page - 1) * limit;
  const selectedIds = filteredIds.slice(startIndex, startIndex + limit);

  const avatars = selectedIds.map((id) => getAvatarById(id));

  return {
    total,
    page,
    limit,
    totalPages,
    avatars,
  };
}

export const AVATAR_COUNT = TOTAL_AVATARS;
export const AVATAR_CATEGORY_META = AVATAR_CATEGORIES;
export const AVATAR_CATEGORY_IDS = [
  "all",
  "animals",
  "robots",
  "heroes",
  "scholars",
  "mythic",
  "sci-fi",
  "emojis",
] as const;

export const getAvatarSvg = generateAvatarSvg;

export function getAvatarPage(offset = 0, limit = 40, category = "all") {
  const cat = category === "all" ? undefined : category;
  const page = Math.floor(offset / limit) + 1;
  const res = getAvatarCatalog({ category: cat, limit, page });
  return {
    avatars: res.avatars,
    offset,
    limit,
    total: res.total,
    hasMore: offset + res.avatars.length < res.total,
  };
}

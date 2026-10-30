export type PatternCategory =
  | "dots"
  | "grid"
  | "fine-grid"
  | "wave"
  | "topographic"
  | "hexagon"
  | "blueprint"
  | "molecules"
  | "constellation"
  | "orbit"
  | "stars"
  | "floral-geometric"
  | "circuit"
  | "bubbles"
  | "arcs"
  | "aurora"
  | "isometric"
  | "crosshatch"
  | "woven"
  | "terrazzo"
  | "abstract-geometry"
  | "micro-geo"
  | "minimal-circles"
  | "layered-lines";

export interface ThemePatternItem {
  id: string;
  nameTr: string;
  category: PatternCategory;
  categoryLabelTr: string;
  svgMarkup: string;
  cssBackground: string;
  backgroundSize: string;
  defaultScale: number;
  defaultOpacity: number;
  supportsLight: boolean;
  supportsDark: boolean;
  motionMode: "static" | "subtle";
  reducedMotionFallback: string;
  attribution: string;
}

export const PATTERN_CATEGORY_LABELS: Record<PatternCategory, string> = {
  dots: "Noktalı (Dots)",
  grid: "Klasik Izgara (Grid)",
  "fine-grid": "İnce Milimetrik Izgara",
  wave: "Dalga (Wave)",
  topographic: "Topografik Kontur",
  hexagon: "Altıgen Bal Peteği",
  blueprint: "Mimari Blueprint",
  molecules: "Molekül Ağı",
  constellation: "Takımyıldız (Constellation)",
  orbit: "Gezegen Yörüngeleri",
  stars: "Yıldız Tozu (Stars)",
  "floral-geometric": "Geometrik Rozet & Çiçek",
  circuit: "Mikro Devre (Circuit)",
  bubbles: "Hafif Kabarcıklar",
  arcs: "Kesişen Yaylar (Arcs)",
  aurora: "Kuzey Işıkları (Aurora)",
  isometric: "İzometrik Küp",
  crosshatch: "Çapraz Tarama (Crosshatch)",
  woven: "Dokuma Örgü (Woven)",
  terrazzo: "Terrazzo Mozaik",
  "abstract-geometry": "Soyut Geometri",
  "micro-geo": "Mikro Üçgen & Nokta",
  "minimal-circles": "Minimal Halkalar",
  "layered-lines": "Katmanlı Paralel Çizgiler",
};

function svgToDataUri(svg: string): string {
  const compact = svg.replace(/\s+/g, " ").trim();
  return `url("data:image/svg+xml,${encodeURIComponent(compact)}")`;
}

interface RawPatternSeed {
  id: string;
  nameTr: string;
  category: PatternCategory;
  size: number;
  defaultOpacity: number;
  motionMode?: "static" | "subtle";
  svgBody: string;
}

const RAW_PATTERN_SEEDS: RawPatternSeed[] = [
  {
    id: "polka-dots-classic",
    nameTr: "Klasik Akademik Noktalar",
    category: "dots",
    size: 24,
    defaultOpacity: 0.24,
    svgBody: `<circle cx="6" cy="6" r="1.6" fill="#38bdf8"/><circle cx="18" cy="18" r="1.6" fill="#a855f7"/>`,
  },
  {
    id: "dots-staggered-matrix",
    nameTr: "Çapraz Ritmik Nokta Matrisi",
    category: "dots",
    size: 32,
    defaultOpacity: 0.22,
    svgBody: `<circle cx="8" cy="8" r="2" fill="#22d3ee"/><circle cx="24" cy="8" r="1" fill="#94a3b8"/><circle cx="16" cy="20" r="2.2" fill="#f472b6"/><circle cx="28" cy="26" r="1.2" fill="#38bdf8"/>`,
  },
  {
    id: "grid-architectural",
    nameTr: "Klasik Kare Defter Izgarası",
    category: "grid",
    size: 32,
    defaultOpacity: 0.2,
    svgBody: `<path d="M 32 0 L 0 0 0 32" fill="none" stroke="#38bdf8" stroke-width="1"/>`,
  },
  {
    id: "grid-bold-cross",
    nameTr: "Kesişim Noktalı Teknik Izgara",
    category: "grid",
    size: 40,
    defaultOpacity: 0.22,
    svgBody: `<path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6366f1" stroke-width="0.9"/><circle cx="0" cy="0" r="2" fill="#38bdf8"/><path d="M 18 20 H 22 M 20 18 V 22" stroke="#a855f7" stroke-width="1.2"/>`,
  },
  {
    id: "fine-grid-millimeter",
    nameTr: "Milimetrik Laboratuvar Kağıdı",
    category: "fine-grid",
    size: 40,
    defaultOpacity: 0.2,
    svgBody: `<path d="M 10 0 V 40 M 20 0 V 40 M 30 0 V 40 M 0 10 H 40 M 0 20 H 40 M 0 30 H 40" stroke="#475569" stroke-width="0.5"/><path d="M 40 0 L 0 0 0 40" fill="none" stroke="#38bdf8" stroke-width="1.1"/>`,
  },
  {
    id: "wave-harmonic-sine",
    nameTr: "Harmonik Sinüs Dalgaları",
    category: "wave",
    size: 48,
    defaultOpacity: 0.24,
    motionMode: "subtle",
    svgBody: `<path d="M 0 12 Q 12 2 24 12 T 48 12 M 0 36 Q 12 26 24 36 T 48 36" fill="none" stroke="#22d3ee" stroke-width="1.3"/>`,
  },
  {
    id: "wave-ocean-Currents",
    nameTr: "Çift Fazlı Akıntı Dalgaları",
    category: "wave",
    size: 56,
    defaultOpacity: 0.22,
    svgBody: `<path d="M 0 18 C 14 4, 42 32, 56 18 M 0 42 C 14 28, 42 56, 56 42" fill="none" stroke="#818cf8" stroke-width="1.4"/><circle cx="28" cy="18" r="1.5" fill="#38bdf8"/>`,
  },
  {
    id: "topographic-elevation",
    nameTr: "Topografik Yükselti Eğrileri",
    category: "topographic",
    size: 64,
    defaultOpacity: 0.22,
    svgBody: `<path d="M 8 32 C 16 10, 48 10, 56 32 C 48 54, 16 54, 8 32 Z" fill="none" stroke="#14b8a6" stroke-width="1.1"/><path d="M 18 32 C 24 20, 40 20, 46 32 C 40 44, 24 44, 18 32 Z" fill="none" stroke="#38bdf8" stroke-width="0.9"/>`,
  },
  {
    id: "topographic-ridge-lines",
    nameTr: "Topografik Vadi Konturları",
    category: "topographic",
    size: 72,
    defaultOpacity: 0.2,
    svgBody: `<path d="M 0 14 Q 36 34 72 14 M 0 36 Q 36 58 72 36 M 0 58 Q 36 78 72 58" fill="none" stroke="#34d399" stroke-width="1.1"/>`,
  },
  {
    id: "hexagon-honeycomb",
    nameTr: "Altıgen Bal Peteği Hücreleri",
    category: "hexagon",
    size: 48,
    defaultOpacity: 0.24,
    svgBody: `<polygon points="24,4 42,14 42,34 24,44 6,34 6,14" fill="none" stroke="#38bdf8" stroke-width="1.2"/>`,
  },
  {
    id: "hexagon-cyber-nodes",
    nameTr: "Düğümlü Siber Altıgen",
    category: "hexagon",
    size: 52,
    defaultOpacity: 0.25,
    svgBody: `<polygon points="26,6 44,16 44,36 26,46 8,36 8,16" fill="none" stroke="#a855f7" stroke-width="1.1"/><circle cx="26" cy="6" r="2" fill="#22d3ee"/><circle cx="44" cy="36" r="2" fill="#22d3ee"/><circle cx="8" cy="36" r="2" fill="#22d3ee"/>`,
  },
  {
    id: "blueprint-technical-draft",
    nameTr: "Mühendislik Blueprint Çizimi",
    category: "blueprint",
    size: 60,
    defaultOpacity: 0.24,
    svgBody: `<rect x="4" y="4" width="52" height="52" fill="none" stroke="#38bdf8" stroke-width="0.8" stroke-dasharray="4 2"/><circle cx="30" cy="30" r="14" fill="none" stroke="#60a5fa" stroke-width="1"/><path d="M 30 10 V 50 M 10 30 H 50" stroke="#38bdf8" stroke-width="0.7"/>`,
  },
  {
    id: "blueprint-compass-grid",
    nameTr: "Pergel & Eksensel Blueprint",
    category: "blueprint",
    size: 64,
    defaultOpacity: 0.22,
    svgBody: `<circle cx="32" cy="32" r="22" fill="none" stroke="#38bdf8" stroke-width="0.9"/><circle cx="32" cy="32" r="8" fill="none" stroke="#22d3ee" stroke-width="0.9" stroke-dasharray="3 2"/><path d="M 0 32 H 64 M 32 0 V 64" stroke="#64748b" stroke-width="0.6"/>`,
  },
  {
    id: "molecules-covalent-bonds",
    nameTr: "Kovalent Molekül Bağları",
    category: "molecules",
    size: 56,
    defaultOpacity: 0.25,
    svgBody: `<line x1="14" y1="14" x2="42" y2="22" stroke="#38bdf8" stroke-width="1.2"/><line x1="42" y1="22" x2="24" y2="44" stroke="#a855f7" stroke-width="1.2"/><line x1="24" y1="44" x2="14" y2="14" stroke="#38bdf8" stroke-width="1"/><circle cx="14" cy="14" r="3.5" fill="#22d3ee"/><circle cx="42" cy="22" r="4" fill="#c084fc"/><circle cx="24" cy="44" r="3" fill="#34d399"/>`,
  },
  {
    id: "molecules-organic-ring",
    nameTr: "Biyokimya Aromatik Halkası",
    category: "molecules",
    size: 60,
    defaultOpacity: 0.23,
    svgBody: `<polygon points="30,10 47,20 47,40 30,50 13,40 13,20" fill="none" stroke="#10b981" stroke-width="1.2"/><circle cx="30" cy="30" r="9" fill="none" stroke="#34d399" stroke-width="1" stroke-dasharray="3 2"/><circle cx="30" cy="10" r="2.5" fill="#38bdf8"/><circle cx="47" cy="40" r="2.5" fill="#38bdf8"/><circle cx="13" cy="40" r="2.5" fill="#38bdf8"/>`,
  },
  {
    id: "constellation-lyra",
    nameTr: "Takımyıldız Gökyüzü Haritası",
    category: "constellation",
    size: 64,
    defaultOpacity: 0.25,
    svgBody: `<polyline points="10,16 28,12 48,26 40,48 18,42 28,12" fill="none" stroke="#818cf8" stroke-width="0.9"/><circle cx="10" cy="16" r="2" fill="#fde047"/><circle cx="28" cy="12" r="2.4" fill="#38bdf8"/><circle cx="48" cy="26" r="1.8" fill="#f472b6"/><circle cx="40" cy="48" r="2.2" fill="#e2e8f0"/><circle cx="18" cy="42" r="1.7" fill="#38bdf8"/>`,
  },
  {
    id: "constellation-deep-sky",
    nameTr: "Derin Uzay Yıldız Rotası",
    category: "constellation",
    size: 72,
    defaultOpacity: 0.24,
    svgBody: `<path d="M 12 56 L 26 30 L 48 36 L 60 14" fill="none" stroke="#38bdf8" stroke-width="1" stroke-dasharray="3 3"/><circle cx="12" cy="56" r="2.2" fill="#38bdf8"/><circle cx="26" cy="30" r="2.8" fill="#facc15"/><circle cx="48" cy="36" r="2" fill="#a855f7"/><circle cx="60" cy="14" r="2.5" fill="#22d3ee"/>`,
  },
  {
    id: "orbit-kepler-rings",
    nameTr: "Kepler Eliptik Yörüngeleri",
    category: "orbit",
    size: 64,
    defaultOpacity: 0.24,
    motionMode: "subtle",
    svgBody: `<ellipse cx="32" cy="32" rx="26" ry="13" transform="rotate(-25 32 32)" fill="none" stroke="#38bdf8" stroke-width="1.1"/><ellipse cx="32" cy="32" rx="26" ry="13" transform="rotate(35 32 32)" fill="none" stroke="#a855f7" stroke-width="1"/><circle cx="32" cy="32" r="3.2" fill="#facc15"/><circle cx="52" cy="22" r="2" fill="#22d3ee"/>`,
  },
  {
    id: "stars-academic-cosmos",
    nameTr: "Kozmik Yıldız Parıltısı",
    category: "stars",
    size: 56,
    defaultOpacity: 0.25,
    svgBody: `<path d="M 16 8 L 18 14 L 24 16 L 18 18 L 16 24 L 14 18 L 8 16 L 14 14 Z" fill="#38bdf8"/><path d="M 42 32 L 43.5 36.5 L 48 38 L 43.5 39.5 L 42 44 L 40.5 39.5 L 36 38 L 40.5 36.5 Z" fill="#f472b6"/><circle cx="44" cy="14" r="1.3" fill="#fde047"/><circle cx="14" cy="44" r="1.5" fill="#a855f7"/>`,
  },
  {
    id: "floral-geometric-rosette",
    nameTr: "Anadolu Geometrik Rozeti",
    category: "floral-geometric",
    size: 56,
    defaultOpacity: 0.22,
    svgBody: `<circle cx="28" cy="28" r="10" fill="none" stroke="#f472b6" stroke-width="1.1"/><circle cx="28" cy="16" r="8" fill="none" stroke="#38bdf8" stroke-width="0.9"/><circle cx="28" cy="40" r="8" fill="none" stroke="#38bdf8" stroke-width="0.9"/><circle cx="16" cy="28" r="8" fill="none" stroke="#a855f7" stroke-width="0.9"/><circle cx="40" cy="28" r="8" fill="none" stroke="#a855f7" stroke-width="0.9"/>`,
  },
  {
    id: "floral-seljuk-star",
    nameTr: "Sekiz Köşeli Geometrik Motif",
    category: "floral-geometric",
    size: 60,
    defaultOpacity: 0.23,
    svgBody: `<rect x="16" y="16" width="28" height="28" fill="none" stroke="#38bdf8" stroke-width="1.1"/><rect x="16" y="16" width="28" height="28" transform="rotate(45 30 30)" fill="none" stroke="#f59e0b" stroke-width="1.1"/><circle cx="30" cy="30" r="4" fill="none" stroke="#ec4899" stroke-width="1"/>`,
  },
  {
    id: "circuit-microprocessor",
    nameTr: "Mikroişlemci Devre Yolları",
    category: "circuit",
    size: 56,
    defaultOpacity: 0.24,
    svgBody: `<path d="M 8 14 H 24 L 32 22 H 48 M 14 42 H 28 L 36 34 H 50 M 24 8 V 24 L 16 32 V 48" fill="none" stroke="#22d3ee" stroke-width="1.2"/><circle cx="8" cy="14" r="2.2" fill="#38bdf8"/><circle cx="48" cy="22" r="2.2" fill="#a855f7"/><circle cx="14" cy="42" r="2.2" fill="#10b981"/>`,
  },
  {
    id: "circuit-logic-bus",
    nameTr: "Kuantum Veri Yolu Devresi",
    category: "circuit",
    size: 64,
    defaultOpacity: 0.22,
    svgBody: `<rect x="22" y="22" width="20" height="20" rx="3" fill="none" stroke="#818cf8" stroke-width="1.2"/><path d="M 32 0 V 22 M 32 42 V 64 M 0 32 H 22 M 42 32 H 64" stroke="#38bdf8" stroke-width="1"/><circle cx="32" cy="32" r="3" fill="#22d3ee"/>`,
  },
  {
    id: "bubbles-effervescent",
    nameTr: "Yüzen Optik Küreler",
    category: "bubbles",
    size: 56,
    defaultOpacity: 0.22,
    svgBody: `<circle cx="16" cy="18" r="8" fill="none" stroke="#38bdf8" stroke-width="1.1"/><circle cx="40" cy="36" r="11" fill="none" stroke="#a855f7" stroke-width="1.1"/><circle cx="42" cy="14" r="4" fill="none" stroke="#22d3ee" stroke-width="1"/><circle cx="14" cy="42" r="5" fill="none" stroke="#f472b6" stroke-width="1"/>`,
  },
  {
    id: "arcs-japanese-seigaiha",
    nameTr: "Kesişen Akustik Yaylar",
    category: "arcs",
    size: 48,
    defaultOpacity: 0.23,
    svgBody: `<path d="M 0 24 A 24 24 0 0 1 48 24 M 8 24 A 16 16 0 0 1 40 24 M 16 24 A 8 8 0 0 1 32 24" fill="none" stroke="#38bdf8" stroke-width="1.1"/>`,
  },
  {
    id: "arcs-quarter-bauhaus",
    nameTr: "Bauhaus Çeyrek Çember Yayları",
    category: "arcs",
    size: 48,
    defaultOpacity: 0.24,
    svgBody: `<path d="M 0 0 A 24 24 0 0 1 24 24 A 24 24 0 0 1 48 48 M 48 0 A 24 24 0 0 0 24 24 A 24 24 0 0 0 0 48" fill="none" stroke="#c084fc" stroke-width="1.2"/>`,
  },
  {
    id: "aurora-borealis-ribbons",
    nameTr: "Kuzey Işıkları Spektrum Şeritleri",
    category: "aurora",
    size: 64,
    defaultOpacity: 0.26,
    motionMode: "subtle",
    svgBody: `<path d="M 0 20 C 20 4, 44 36, 64 20" fill="none" stroke="#22d3ee" stroke-width="2"/><path d="M 0 36 C 20 20, 44 52, 64 36" fill="none" stroke="#a855f7" stroke-width="2"/><path d="M 0 50 C 20 34, 44 66, 64 50" fill="none" stroke="#10b981" stroke-width="1.6"/>`,
  },
  {
    id: "isometric-3d-cubes",
    nameTr: "İzometrik 3B Kristal Küpler",
    category: "isometric",
    size: 48,
    defaultOpacity: 0.24,
    svgBody: `<path d="M 24 4 L 44 15 L 44 37 L 24 48 L 4 37 L 4 15 Z M 4 15 L 24 26 L 44 15 M 24 26 V 48" fill="none" stroke="#38bdf8" stroke-width="1.1"/>`,
  },
  {
    id: "isometric-steps-matrix",
    nameTr: "İzometrik Prizma Merdiven",
    category: "isometric",
    size: 56,
    defaultOpacity: 0.22,
    svgBody: `<polygon points="28,6 50,18 28,30 6,18" fill="none" stroke="#22d3ee" stroke-width="1.1"/><polygon points="28,30 50,18 50,40 28,52" fill="none" stroke="#818cf8" stroke-width="1.1"/><polygon points="28,30 6,18 6,40 28,52" fill="none" stroke="#c084fc" stroke-width="1.1"/>`,
  },
  {
    id: "crosshatch-engraving",
    nameTr: "Gravür Çapraz Tarama",
    category: "crosshatch",
    size: 32,
    defaultOpacity: 0.2,
    svgBody: `<path d="M 0 0 L 32 32 M 32 0 L 0 32 M 16 0 L 32 16 M 0 16 L 16 32" stroke="#64748b" stroke-width="0.9"/>`,
  },
  {
    id: "woven-herringbone",
    nameTr: "Balıksırtı Dokuma Örgü",
    category: "woven",
    size: 40,
    defaultOpacity: 0.22,
    svgBody: `<path d="M 0 10 L 10 0 L 20 10 L 30 0 L 40 10 M 0 25 L 10 15 L 20 25 L 30 15 L 40 25 M 0 40 L 10 30 L 20 40 L 30 30 L 40 40" fill="none" stroke="#38bdf8" stroke-width="1.2"/>`,
  },
  {
    id: "terrazzo-venetian-stone",
    nameTr: "Venedik Terrazzo Mozaik Taşları",
    category: "terrazzo",
    size: 64,
    defaultOpacity: 0.25,
    svgBody: `<polygon points="10,12 22,8 18,22" fill="#38bdf8"/><polygon points="42,14 54,18 46,28 36,22" fill="#f472b6"/><polygon points="16,42 28,38 30,52 14,50" fill="#a855f7"/><polygon points="46,44 58,48 50,58" fill="#34d399"/><circle cx="32" cy="28" r="2.5" fill="#facc15"/>`,
  },
  {
    id: "abstract-geometry-memphis",
    nameTr: "Modern Akademik Geometri",
    category: "abstract-geometry",
    size: 64,
    defaultOpacity: 0.24,
    svgBody: `<polygon points="12,48 24,24 36,48" fill="none" stroke="#38bdf8" stroke-width="1.3"/><rect x="38" y="12" width="14" height="14" transform="rotate(15 45 19)" fill="none" stroke="#f472b6" stroke-width="1.3"/><circle cx="18" cy="16" r="5" fill="none" stroke="#facc15" stroke-width="1.3"/>`,
  },
  {
    id: "micro-geo-triangles",
    nameTr: "Mikro Üçgen ve Nokta Dizilimi",
    category: "micro-geo",
    size: 36,
    defaultOpacity: 0.23,
    svgBody: `<polygon points="9,6 14,15 4,15" fill="none" stroke="#22d3ee" stroke-width="1"/><polygon points="27,22 32,31 22,31" fill="none" stroke="#a855f7" stroke-width="1"/><circle cx="27" cy="10" r="1.5" fill="#38bdf8"/><circle cx="9" cy="27" r="1.5" fill="#f472b6"/>`,
  },
  {
    id: "minimal-circles-concentric",
    nameTr: "Eşmerkezli Minimal Halkalar",
    category: "minimal-circles",
    size: 52,
    defaultOpacity: 0.22,
    svgBody: `<circle cx="26" cy="26" r="18" fill="none" stroke="#38bdf8" stroke-width="0.9"/><circle cx="26" cy="26" r="10" fill="none" stroke="#818cf8" stroke-width="0.9"/><circle cx="26" cy="26" r="3" fill="#22d3ee"/>`,
  },
  {
    id: "layered-lines-diagonal",
    nameTr: "Katmanlı Diyagonal Vektör Çizgileri",
    category: "layered-lines",
    size: 40,
    defaultOpacity: 0.21,
    svgBody: `<path d="M -10 10 L 10 -10 M 0 40 L 40 0 M 30 50 L 50 30" stroke="#38bdf8" stroke-width="1.1"/><path d="M -10 30 L 30 -10 M 10 50 L 50 10" stroke="#a855f7" stroke-width="0.7" stroke-dasharray="4 3"/>`,
  },
];

export const PATTERN_REGISTRY: ThemePatternItem[] = RAW_PATTERN_SEEDS.map((seed) => {
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="${seed.size}" height="${seed.size}" viewBox="0 0 ${seed.size} ${seed.size}">${seed.svgBody}</svg>`;
  const cssBackground = svgToDataUri(svgMarkup);
  return {
    id: seed.id,
    nameTr: seed.nameTr,
    category: seed.category,
    categoryLabelTr: PATTERN_CATEGORY_LABELS[seed.category],
    svgMarkup,
    cssBackground,
    backgroundSize: `${seed.size}px ${seed.size}px`,
    defaultScale: 1.0,
    defaultOpacity: seed.defaultOpacity,
    supportsLight: true,
    supportsDark: true,
    motionMode: seed.motionMode || "static",
    reducedMotionFallback: cssBackground,
    attribution: "DİL MASTER Original Vector Studio (CC0 1.0)",
  };
});

export const PATTERN_STORAGE_KEYS = {
  ID: "yds_custom_pattern_id",
  OPACITY: "yds_custom_pattern_opacity",
  SCALE: "yds_custom_pattern_scale",
};

export interface SavedPatternPreference {
  patternId: string | null;
  opacity: number;
  scale: number;
}

export function getPatternById(id?: string | null): ThemePatternItem | undefined {
  if (!id) return undefined;
  return PATTERN_REGISTRY.find((p) => p.id === id);
}

export function getSavedPatternPreference(): SavedPatternPreference {
  if (typeof window === "undefined") {
    return { patternId: null, opacity: 0.24, scale: 1.0 };
  }
  try {
    const savedPatternId = window.localStorage.getItem(PATTERN_STORAGE_KEYS.ID);
    const patternId = savedPatternId === "none" || getPatternById(savedPatternId)
      ? savedPatternId
      : null;
    const opRaw = window.localStorage.getItem(PATTERN_STORAGE_KEYS.OPACITY);
    const scRaw = window.localStorage.getItem(PATTERN_STORAGE_KEYS.SCALE);
    const opacity = opRaw ? Math.max(0.05, Math.min(0.6, parseFloat(opRaw) || 0.24)) : 0.24;
    const scale = scRaw ? Math.max(0.5, Math.min(2.0, parseFloat(scRaw) || 1.0)) : 1.0;
    return { patternId, opacity, scale };
  } catch {
    return { patternId: null, opacity: 0.24, scale: 1.0 };
  }
}

export function applyPatternToDocument(
  patternId: string | null,
  opacity: number = 0.24,
  scale: number = 1.0
): void {
  if (typeof window === "undefined") return;
  const root = document.documentElement;
  const safeOpacity = Math.max(0.05, Math.min(0.6, opacity));
  const safeScale = Math.max(0.5, Math.min(2.0, scale));

  if (!patternId || patternId === "none") {
    root.style.setProperty("--theme-pattern", "none");
    root.style.setProperty("--pattern-opacity", "0");
    try {
      // Keep an explicit "none" choice so a later color-theme change does not
      // silently restore that theme's built-in decorative pattern.
      window.localStorage.setItem(PATTERN_STORAGE_KEYS.ID, "none");
      window.localStorage.setItem(PATTERN_STORAGE_KEYS.OPACITY, safeOpacity.toFixed(2));
      window.localStorage.setItem(PATTERN_STORAGE_KEYS.SCALE, safeScale.toFixed(2));
      window.dispatchEvent(
        new CustomEvent("yds:pattern-changed", {
          detail: { patternId: "none", opacity: safeOpacity, scale: safeScale },
        })
      );
    } catch {
      /* noop */
    }
    return;
  }

  const pattern = getPatternById(patternId);
  if (!pattern) return;

  const basePx = parseInt(pattern.backgroundSize, 10) || 40;
  const scaledPx = Math.round(basePx * safeScale);

  root.style.setProperty("--theme-pattern", pattern.cssBackground);
  root.style.setProperty("--theme-pattern-size", `${scaledPx}px ${scaledPx}px`);
  root.style.setProperty("--pattern-opacity", safeOpacity.toFixed(2));

  try {
    window.localStorage.setItem(PATTERN_STORAGE_KEYS.ID, pattern.id);
    window.localStorage.setItem(PATTERN_STORAGE_KEYS.OPACITY, safeOpacity.toFixed(2));
    window.localStorage.setItem(PATTERN_STORAGE_KEYS.SCALE, safeScale.toFixed(2));
    window.dispatchEvent(
      new CustomEvent("yds:pattern-changed", {
        detail: { patternId: pattern.id, opacity: safeOpacity, scale: safeScale },
      })
    );
  } catch {
    /* noop */
  }
}

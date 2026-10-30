import assert from "assert";
import {
  PATTERN_REGISTRY,
  PATTERN_CATEGORY_LABELS,
  getPatternById,
  getSavedPatternPreference,
} from "../src/lib/themes/pattern-registry";
import { ALL_THEMES, applyTheme } from "../src/lib/themes/engine";

console.log("▶ Starting Theme Pattern Registry & Uniqueness Verification Tests...\n");

// 1. En az 30+ (Tam 36) Benzersiz SVG Deseni Kontrolü
assert.ok(
  PATTERN_REGISTRY.length >= 30,
  `Desen galerisinde en az 30 benzersiz desen olmalıdır; mevcut: ${PATTERN_REGISTRY.length}`
);
console.log(`  ✅ PASS: Pattern registry contains ${PATTERN_REGISTRY.length} patterns (>= 30 required).\n`);

// 2. ID, İsim ve SVG İçeriği Benzersizliği (Kopya Desen Yasağı)
const ids = new Set<string>();
const names = new Set<string>();
const svgs = new Set<string>();

for (const item of PATTERN_REGISTRY) {
  assert.ok(!ids.has(item.id), `Tekrarlanan desen ID: ${item.id}`);
  assert.ok(!names.has(item.nameTr), `Tekrarlanan desen adı: ${item.nameTr}`);
  assert.ok(!svgs.has(item.svgMarkup), `Tekrarlanan SVG içeriği: ${item.id}`);

  ids.add(item.id);
  names.add(item.nameTr);
  svgs.add(item.svgMarkup);

  // Güvenlik ve Metadata Kontrolleri
  assert.ok(item.cssBackground.startsWith('url("data:image/svg+xml,'), `${item.id} geçerli SVG data URI içermelidir.`);
  assert.ok(item.defaultOpacity >= 0.08 && item.defaultOpacity <= 0.5, `${item.id} opaklık değeri güvenli aralıkta olmalıdır.`);
  assert.strictEqual(item.supportsLight, true);
  assert.strictEqual(item.supportsDark, true);
  assert.ok(item.reducedMotionFallback.length > 10);
  assert.ok(item.attribution.length > 5);
}
console.log("  ✅ PASS: All 36 patterns have unique IDs, Turkish names, and distinct SVG vector geometry.\n");

// 3. Zorunlu Kategorilerin Kapsanması
const requiredCategories = [
  "dots",
  "grid",
  "fine-grid",
  "wave",
  "topographic",
  "hexagon",
  "blueprint",
  "molecules",
  "constellation",
  "orbit",
  "stars",
  "floral-geometric",
  "circuit",
  "bubbles",
  "arcs",
  "aurora",
  "isometric",
  "crosshatch",
  "woven",
  "terrazzo",
  "abstract-geometry",
  "micro-geo",
  "minimal-circles",
  "layered-lines",
];

for (const cat of requiredCategories) {
  const found = PATTERN_REGISTRY.some((p) => p.category === cat);
  assert.strictEqual(found, true, `Zorunlu desen kategorisi eksik: ${cat}`);
  assert.ok(PATTERN_CATEGORY_LABELS[cat as keyof typeof PATTERN_CATEGORY_LABELS], `${cat} Türkçe kategori etiketi eksik`);
}
console.log("  ✅ PASS: All 24 required pattern categories are represented in PATTERN_REGISTRY.\n");

// Explicitly selected pattern (including none) must remain independent from
// the currently selected color theme.
const originalWindowDescriptor = Object.getOwnPropertyDescriptor(globalThis, "window");
const originalDocumentDescriptor = Object.getOwnPropertyDescriptor(globalThis, "document");
const patternStorage = new Map<string, string>([["yds_custom_pattern_id", "none"]]);
const cssValues = new Map<string, string>();
const classNames = new Set<string>();
const root = {
  classList: {
    add: (name: string) => classNames.add(name),
    remove: (name: string) => classNames.delete(name),
  },
  style: {
    colorScheme: "",
    setProperty: (name: string, value: string) => cssValues.set(name, value),
  },
};
Object.defineProperty(globalThis, "window", {
  configurable: true,
  value: {
    localStorage: {
      getItem: (key: string) => patternStorage.get(key) ?? null,
      setItem: (key: string, value: string) => patternStorage.set(key, value),
    },
    dispatchEvent: () => true,
  },
});
Object.defineProperty(globalThis, "document", {
  configurable: true,
  value: { documentElement: root, body: { style: {} } },
});

assert.strictEqual(getSavedPatternPreference().patternId, "none");
patternStorage.set("yds_custom_pattern_id", "polka-dots-classic");
assert.strictEqual(getSavedPatternPreference().patternId, "polka-dots-classic");
patternStorage.set("yds_custom_pattern_id", "unregistered-pattern");
assert.strictEqual(getSavedPatternPreference().patternId, null);

// Switching to light/dark color palettes must preserve the chosen gallery
// pattern and keep its own light-mode foreground color.
patternStorage.set("yds_custom_pattern_id", "polka-dots-classic");
patternStorage.set("yds_custom_pattern_opacity", "0.31");
patternStorage.set("yds_custom_pattern_scale", "1.25");
applyTheme(42, "light");
const selectedPattern = getPatternById("polka-dots-classic");
assert.ok(selectedPattern);
assert.strictEqual(cssValues.get("--theme-pattern"), selectedPattern.cssBackground);
assert.strictEqual(cssValues.get("--pattern-opacity"), "0.31");
assert.strictEqual(classNames.has("light"), true);
assert.strictEqual(cssValues.get("--theme-pattern-fg"), expectRgba(ALL_THEMES[41].primary, 0.2));
applyTheme(42, "dark");
assert.strictEqual(cssValues.get("--theme-pattern"), selectedPattern.cssBackground);
assert.strictEqual(cssValues.get("--pattern-opacity"), "0.31");
assert.strictEqual(classNames.has("dark"), true);

function expectRgba(hex: string, alpha: number): string {
  const normalized = hex.replace("#", "");
  const value = Number.parseInt(normalized, 16);
  return `rgba(${(value >> 16) & 255}, ${(value >> 8) & 255}, ${value & 255}, ${alpha})`;
}

if (originalWindowDescriptor) {
  Object.defineProperty(globalThis, "window", originalWindowDescriptor);
} else {
  Reflect.deleteProperty(globalThis, "window");
}
if (originalDocumentDescriptor) {
  Object.defineProperty(globalThis, "document", originalDocumentDescriptor);
} else {
  Reflect.deleteProperty(globalThis, "document");
}
console.log("  ✅ PASS: Gallery pattern selection and light/dark palette stay synchronized.\n");
console.log("  ✅ PASS: Explicit none/custom pattern preferences survive validation independently.\n");

// 4. Tekil Sorgu Fonksiyonu
const blueprint = getPatternById("blueprint-technical-draft");
assert.ok(blueprint);
assert.strictEqual(blueprint.category, "blueprint");

console.log("🎉 ALL THEME PATTERN REGISTRY TESTS PASSED!\n");

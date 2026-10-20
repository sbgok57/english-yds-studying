import assert from "assert";
import {
  PATTERN_REGISTRY,
  PATTERN_CATEGORY_LABELS,
  getPatternById,
} from "../src/lib/themes/pattern-registry";

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

// 4. Tekil Sorgu Fonksiyonu
const blueprint = getPatternById("blueprint-technical-draft");
assert.ok(blueprint);
assert.strictEqual(blueprint.category, "blueprint");

console.log("🎉 ALL THEME PATTERN REGISTRY TESTS PASSED!\n");

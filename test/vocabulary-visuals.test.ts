import assert from "assert";
import fs from "fs";
import path from "path";
import {
  VISUAL_ASSET_REGISTRY,
  resolveWordVisualManifest,
} from "../src/lib/media/visual-asset-registry";

console.log("▶ Starting Vocabulary Visual Asset Registry & Integrity Tests...\n");

// 1. Somut ve Süreç Kelimelerinde Doğrulanmış Fotoğraf & Lisans Kontrolü
const pioneer = resolveWordVisualManifest({
  english: "pioneer",
  turkish: "öncü, yol açan kimse",
  partOfSpeech: "isim",
  level: "B2",
});
assert.strictEqual(pioneer.hasVerifiedPhoto, true);
assert.ok(pioneer.availableModes.includes("photo"));
assert.ok(pioneer.photo, "Pioneer photo nesnesi tanımlı olmalıdır.");
assert.ok(pioneer.photo.url.startsWith("https://"));
assert.ok(pioneer.photo.altTr.length > 10);
assert.ok(pioneer.photo.license.length > 3);
assert.ok(pioneer.photo.attribution.length > 3);

// 2. Soyut / Akademik Kelimelerde Sahte Fotoğraf Gösterilmemesi (Dürüst Mod Seçimi)
const ubiquitous = resolveWordVisualManifest({
  english: "ubiquitous",
  turkish: "her yerde bulunan, yaygın",
  partOfSpeech: "sıfat",
  level: "C1",
});
assert.strictEqual(ubiquitous.hasVerifiedPhoto, false);
assert.strictEqual(
  ubiquitous.availableModes.includes("photo"),
  false,
  "Doğrulanmış fotoğrafı olmayan soyut kelimelerde 'photo' modu gösterilmemelidir!"
);
assert.ok(ubiquitous.availableModes.includes("animation"));
assert.ok(ubiquitous.availableModes.includes("3d"));
assert.ok(ubiquitous.availableModes.includes("card"));

// 3. Katalog Dışı Herhangi Bir Envanter Kelimesi İçin Güvenli Fallback
const dynamicAcademicWord = resolveWordVisualManifest({
  english: "unprecedented",
  turkish: "eşi benzeri görülmemiş",
  partOfSpeech: "adjective",
  level: "C1",
});
assert.strictEqual(dynamicAcademicWord.hasVerifiedPhoto, false);
assert.strictEqual(dynamicAcademicWord.availableModes.includes("photo"), false);
assert.deepStrictEqual(dynamicAcademicWord.availableModes, ["animation", "3d", "card"]);
assert.ok(dynamicAcademicWord.animation.reducedMotionFallbackTextTr.length > 10);
assert.strictEqual(dynamicAcademicWord.visualKey, "unprecedented");

// 3b. Sense-aware semantic topologies must not collapse to one generic diagram
const conceptSamples = [
  resolveWordVisualManifest({ english: "abate", turkish: "azalmak, yatışmak", partOfSpeech: "verb" }),
  resolveWordVisualManifest({ english: "mitigate", turkish: "hafifletmek, azaltmak", partOfSpeech: "verb" }),
  resolveWordVisualManifest({ english: "ubiquitous", turkish: "her yerde bulunan", partOfSpeech: "adjective" }),
  resolveWordVisualManifest({ english: "carry out", turkish: "yürütmek, uygulamak", partOfSpeech: "phrasal verb" }),
  resolveWordVisualManifest({ english: "deteriorate", turkish: "kötüleşmek, bozulmak", partOfSpeech: "verb" }),
  resolveWordVisualManifest({ english: "scrutinize", turkish: "dikkatle incelemek", partOfSpeech: "verb" }),
];
assert.strictEqual(
  new Set(conceptSamples.filter((item) => item.english !== "mitigate").map((item) => item.animation.motionType)).size,
  5,
  "Anlamca farklı örnek kelimeler aynı generic semantik diyagrama düşmemelidir."
);
assert.strictEqual(
  new Set(conceptSamples.map((item) => item.visualKey)).size,
  conceptSamples.length,
  "Her kelimenin semantik görsel anahtarı benzersiz olmalıdır."
);

const riverBank = resolveWordVisualManifest({
  english: "bank",
  turkish: "nehir kıyısı",
  definitionEn: "the land beside a river",
});
const financeBank = resolveWordVisualManifest({
  english: "bank",
  turkish: "banka, finans kurumu",
  definitionEn: "a financial institution that lends money",
});
assert.notStrictEqual(
  riverBank.animation.motionType,
  financeBank.animation.motionType,
  "Çok anlamlı kelimelerin farklı sense'leri farklı semantik şema seçmelidir."
);

const unknownSamples = ["aberrant", "candid", "deem", "elusive", "foster", "grievous", "hence", "impose"];
const unknownTypes = unknownSamples.map((english) =>
  resolveWordVisualManifest({ english, turkish: "akademik anlam", partOfSpeech: "adjective" }).animation.motionType
);
assert.ok(
  new Set(unknownTypes).size > 1,
  "Katalog dışı kelimeler rastgele olmayan ama tek tip olmayan fallback şemaları almalıdır."
);
assert.strictEqual(
  resolveWordVisualManifest({ english: "aberrant", turkish: "akademik anlam" }).animation.motionType,
  unknownTypes[0],
  "Aynı kelimenin fallback şeması her yüklemede deterministik kalmalıdır."
);

// 4. Yerel SVG Varlıklarının Disk Üzerinde Mevcudiyeti
const requiredLocalAssets = [
  "public/media/vocabulary/mitigate-diagram.svg",
  "public/media/vocabulary/carry-out-motion.svg",
  "public/media/vocabulary/ubiquitous-network.svg",
  "public/media/vocabulary/deteriorate-decay.svg",
  "public/media/grammar/tense-timeline.svg",
];

for (const relPath of requiredLocalAssets) {
  const absPath = path.resolve(process.cwd(), relPath);
  assert.strictEqual(fs.existsSync(absPath), true, `Yerel görsel varlık eksik: ${relPath}`);
  const content = fs.readFileSync(absPath, "utf8");
  assert.ok(content.includes("<svg"), `${relPath} geçerli bir SVG dosyası olmalıdır.`);
}

// 5. Tüm Kayıtlı Varlıklarda Lisans, Attribution ve Reduced-Motion Alanları
const registryEntries = Object.entries(VISUAL_ASSET_REGISTRY);
assert.strictEqual(registryEntries.length, 12, "VISUAL_ASSET_REGISTRY 12 küratörlü kayıt içermelidir.");

const verifiedPhotoSlugs = registryEntries
  .filter(([, item]) => item.hasVerifiedPhoto)
  .map(([slug]) => slug)
  .sort();

assert.deepStrictEqual(
  verifiedPhotoSlugs,
  ["deteriorate", "pioneer", "scrutinize"],
  "Yalnızca HTTP-200 doğrulamalı 3 gerçek fotoğraf (deteriorate, pioneer, scrutinize) hasVerifiedPhoto=true olmalıdır."
);
assert.strictEqual(
  VISUAL_ASSET_REGISTRY["carry-out"].hasVerifiedPhoto,
  false,
  "carry-out kırık fotoğraf URL'si içermemeli ve hasVerifiedPhoto=false olmalıdır."
);

for (const [slug, item] of registryEntries) {
  assert.ok(item.animation.license, `${slug} animasyon lisansı eksik`);
  assert.ok(item.animation.attribution, `${slug} animasyon attribution eksik`);
  assert.ok(item.animation.reducedMotionFallbackTextTr, `${slug} reduced-motion açıklaması eksik`);
  if (item.hasVerifiedPhoto) {
    assert.ok(item.photo, `${slug} hasVerifiedPhoto=true ama photo nesnesi yok`);
    assert.ok(item.photo.altTr, `${slug} photo altTr eksik`);
    assert.ok(item.photo.license, `${slug} photo license eksik`);
  }
}

console.log("🎉 ALL VOCABULARY VISUAL ASSET TESTS PASSED!\n");

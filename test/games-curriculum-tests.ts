import { getCurriculumGames, getGameById } from "../src/lib/games/curriculum-games-generator";
import { GAME_MODES } from "../src/lib/games/types";

console.log("🎮 ========================================================");
console.log("🎮 240+ DİL MASTER MÜFREDAT OYUNLARI TEST SÜİTİ");
console.log("🎮 ========================================================\n");

let passed = 0;
let failed = 0;

function assert(cond: boolean, msg: string) {
  if (cond) {
    console.log(`  ✓ PASS: ${msg}`);
    passed++;
  } else {
    console.error(`  ✗ FAIL: ${msg}`);
    failed++;
  }
}

const games = getCurriculumGames();

// 1. Toplam Oyun Sayısı
assert(games.length >= 240, `Toplam en az 240 oyun üretilmeli (Bulunan: ${games.length})`);
assert(games.length === 240, `Tam 24 ders × 10 mekanik = 240 oyun eşleşmesi doğrulanmalı`);

// 2. 10 Farklı Mekanik Varlığı
const uniqueModes = new Set(games.map((g) => g.mode));
assert(uniqueModes.size === 10, `Tam 10 farklı pedagojik oyun mekaniği bulunmalı (Bulunan: ${uniqueModes.size})`);

for (const mode of GAME_MODES) {
  const countInMode = games.filter((g) => g.mode === mode.id).length;
  assert(countInMode === 24, `${mode.label} mekaniğinde 24 dersin tamamı için oyun üretilmeli (Bulunan: ${countInMode})`);
}

// 3. Benzersiz ID Kontrolü
const idSet = new Set<string>();
let duplicateIds = 0;
for (const g of games) {
  if (idSet.has(g.id)) duplicateIds++;
  idSet.add(g.id);
}
assert(duplicateIds === 0, `Tüm 240 oyun benzersiz ve kararlı ID'ye sahip olmalı (Çakışma: ${duplicateIds})`);

// 4. İçerik ve Cevap Anahtarı Doğrulaması
let emptyPrompts = 0;
let missingAnswers = 0;
let missingExplanations = 0;
let invalidChoices = 0;

for (const g of games) {
  if (!g.prompt || g.prompt.trim().length === 0) emptyPrompts++;
  if (!g.correctAnswer || String(g.correctAnswer).trim().length === 0) missingAnswers++;
  if (!g.explanation || g.explanation.trim().length === 0) missingExplanations++;
  if (g.choices && g.choices.length < 2) invalidChoices++;
}

assert(emptyPrompts === 0, `Hiçbir oyunda boş soru/görev metni olmamalı (Hatalı: ${emptyPrompts})`);
assert(missingAnswers === 0, `Hiçbir oyunda eksik doğru cevap olmamalı (Hatalı: ${missingAnswers})`);
assert(missingExplanations === 0, `Hiçbir oyunda eksik açıklama olmamalı (Hatalı: ${missingExplanations})`);
assert(invalidChoices === 0, `Çoktan seçmeli oyunlarda en az 2 geçerli seçenek bulunmalı (Hatalı: ${invalidChoices})`);

// 5. getGameById Fonksiyon Doğrulaması
const sample = games[0];
const fetched = getGameById(sample.id);
assert(fetched?.id === sample.id, `getGameById("${sample.id}") doğru oyunu döndürmeli`);

console.log("\n========================================================");
if (failed === 0) {
  console.log(`✅ TÜM ${passed}/${passed} MÜFREDAT OYUNLARI TESTİ BAŞARIYLA GEÇTİ!`);
  process.exit(0);
} else {
  console.error(`❌ ${failed} TEST BAŞARISIZ OLDU!`);
  process.exit(1);
}

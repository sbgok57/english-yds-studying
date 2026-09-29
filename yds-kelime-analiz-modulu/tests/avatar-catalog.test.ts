import assert from "node:assert/strict";
import test from "node:test";
import {
  AVATAR_CATEGORIES,
  getAvatarById,
  getAvatarCatalog,
  getCategoryForId,
  TOTAL_AVATARS,
} from "../src/avatar-catalog";
import {
  avatarCatalogQuerySchema,
  avatarSelectionSchema,
  userWordMemoryInputSchema,
} from "../src/validation";

test("2.000 avatar kataloğu ve 7 kategori dağılımı doğrulanır", () => {
  assert.equal(TOTAL_AVATARS, 2000);
  assert.equal(AVATAR_CATEGORIES.length, 7);

  // Kategori sınırları kontrolü
  const catAnimals = getCategoryForId(1);
  assert.equal(catAnimals.id, "animals");

  const catRobots = getCategoryForId(350);
  assert.equal(catRobots.id, "robots");

  const catHeroes = getCategoryForId(650);
  assert.equal(catHeroes.id, "heroes");

  const catScholars = getCategoryForId(950);
  assert.equal(catScholars.id, "scholars");

  const catMythic = getCategoryForId(1250);
  assert.equal(catMythic.id, "mythic");

  const catSciFi = getCategoryForId(1550);
  assert.equal(catSciFi.id, "sci-fi");

  const catEmojis = getCategoryForId(1950);
  assert.equal(catEmojis.id, "emojis");
});

test("tekil avatar SVG ve metadata üretimi deterministiktir", () => {
  const avatar1 = getAvatarById(42);
  assert.equal(avatar1.id, 42);
  assert.equal(avatar1.category, "animals");
  assert.match(avatar1.svg, /^<svg/);
  assert.match(avatar1.svg, /<\/svg>$/);
  assert.ok(avatar1.themeColor);

  // Sınır koruması: <1 ve >2000 güvenli aralığa kelepçelenir
  const clampedLow = getAvatarById(-5);
  assert.equal(clampedLow.id, 1);

  const clampedHigh = getAvatarById(9999);
  assert.equal(clampedHigh.id, 2000);
});

test("avatar katalog sorgulama ve sayfalama doğru çalışır", () => {
  const catalogDefault = getAvatarCatalog();
  assert.equal(catalogDefault.total, 2000);
  assert.equal(catalogDefault.page, 1);
  assert.equal(catalogDefault.limit, 50);
  assert.equal(catalogDefault.avatars.length, 50);
  assert.equal(catalogDefault.avatars[0].id, 1);
  assert.equal(catalogDefault.avatars[49].id, 50);

  // Kategori filtreleme
  const robotsCatalog = getAvatarCatalog({ category: "robots", limit: 20, page: 2 });
  assert.equal(robotsCatalog.total, 300);
  assert.equal(robotsCatalog.totalPages, 15);
  assert.equal(robotsCatalog.avatars.length, 20);
  assert.equal(robotsCatalog.avatars[0].id, 321); // (page 2 starts at 301 + 20 = 321)
});

test("avatar ve kelime hafıza doğrulama şemaları sınırları korur", () => {
  // avatarSelectionSchema
  const validSelection = avatarSelectionSchema.parse({ avatarId: 100 });
  assert.equal(validSelection.avatarId, 100);

  const numParsed = avatarSelectionSchema.parse({ avatarId: 500 });
  assert.equal(numParsed.avatarId, 500);

  assert.throws(() => avatarSelectionSchema.parse({ avatarId: -1 }));
  assert.throws(() => avatarSelectionSchema.parse({ avatarId: 2000 }));

  // userWordMemoryInputSchema
  const validMemory = userWordMemoryInputSchema.parse({
    mnemonic: "Abundant -> Bol miktarda, 'ab-ı hayat bol akar' kodlaması.",
    personalNote: "2024 ilkbahar sınavında soru 14'te çıktı.",
    personalExample: "The region has abundant natural resources.",
    tags: ["akademik", "yds"],
  });
  assert.equal(validMemory.personalNote, "2024 ilkbahar sınavında soru 14'te çıktı.");
  assert.deepEqual(validMemory.tags, ["akademik", "yds"]);

  // max sınır kontrolleri
  assert.throws(() =>
    userWordMemoryInputSchema.parse({
      mnemonic: "a".repeat(501),
      personalNote: null,
      personalExample: null,
      tags: [],
    }),
  );
  assert.throws(() =>
    userWordMemoryInputSchema.parse({
      mnemonic: null,
      personalNote: "a".repeat(2001),
      personalExample: null,
      tags: [],
    }),
  );
  assert.throws(() =>
    userWordMemoryInputSchema.parse({
      mnemonic: null,
      personalNote: null,
      personalExample: null,
      tags: ["duplicate", "DUPLICATE"],
    }),
  );

  // avatarCatalogQuerySchema
  const query = avatarCatalogQuerySchema.parse({
    category: "heroes",
    limit: "25",
    offset: "40",
  });
  assert.equal(query.category, "heroes");
  assert.equal(query.limit, 25);
  assert.equal(query.offset, 40);
});

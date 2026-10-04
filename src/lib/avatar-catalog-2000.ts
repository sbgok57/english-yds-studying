// 2.000 Yaratıcı Deterministik SVG Avatar Kataloğu
// 5 Aile (Emoji, Canavarlar, Hayvan Dostlar, Uzay & Hayal, Kitap & Çıkartma)
// x 20 Palet x 20 Motif = Tam 2.000 Benzersiz Avatar
// Çevrimdışı saf SVG üretimi, sıfır çökme, animasyonlu & kristal netlik.

export const AVATAR_2000_COUNT = 2000;
export const AVATARS_PER_CATEGORY = 400;
export const AVATAR_PAGE_MAX = 80;

export const AVATAR_2000_CATEGORY_IDS = [
  "all",
  "emoji",
  "monster",
  "animal",
  "space",
  "sticker",
] as const;

export type Avatar2000Category = (typeof AVATAR_2000_CATEGORY_IDS)[number];
export type Avatar2000ArtCategory = Exclude<Avatar2000Category, "all">;

export const AVATAR_2000_CATEGORY_META: ReadonlyArray<{
  id: Avatar2000Category;
  label: string;
  emoji: string;
  count: number;
}> = [
  { id: "all", label: "Hepsi", emoji: "🌈", count: AVATAR_2000_COUNT },
  { id: "emoji", label: "Emojiler", emoji: "🤩", count: AVATARS_PER_CATEGORY },
  { id: "monster", label: "Tatlış Canavarlar", emoji: "👾", count: AVATARS_PER_CATEGORY },
  { id: "animal", label: "Hayvan Dostlar", emoji: "🦊", count: AVATARS_PER_CATEGORY },
  { id: "space", label: "Uzay ve Hayal", emoji: "🚀", count: AVATARS_PER_CATEGORY },
  { id: "sticker", label: "Kitap ve Çıkartma", emoji: "🎨", count: AVATARS_PER_CATEGORY },
];

const palettes = [
  { name: "Karpuz", first: "#ff5263", second: "#ffd166", ink: "#612b3d" },
  { name: "Portakal", first: "#ff6b35", second: "#ffe66d", ink: "#633018" },
  { name: "Limon", first: "#e8c547", second: "#f7ff70", ink: "#49400c" },
  { name: "Elma", first: "#77b84a", second: "#e4f778", ink: "#25461e" },
  { name: "Nane", first: "#21a179", second: "#a7f3c9", ink: "#143d35" },
  { name: "Lagün", first: "#00a6a6", second: "#9bf6ff", ink: "#104d5b" },
  { name: "Aqua", first: "#168aad", second: "#b9f2ff", ink: "#103d65" },
  { name: "Gökyüzü", first: "#3282b8", second: "#a9def9", ink: "#17345e" },
  { name: "Deniz", first: "#2563eb", second: "#67e8f9", ink: "#172554" },
  { name: "Çivit", first: "#3f51b5", second: "#b8c0ff", ink: "#25245b" },
  { name: "Lavanta", first: "#7950a1", second: "#e2cfea", ink: "#3c2759" },
  { name: "Üzüm", first: "#8a3ffc", second: "#ff8fab", ink: "#351b5c" },
  { name: "Menekşe", first: "#bc4b9b", second: "#e0aaff", ink: "#55204a" },
  { name: "Şeker", first: "#e64980", second: "#ffc2d1", ink: "#641f46" },
  { name: "Gül", first: "#f04f78", second: "#ffb3c6", ink: "#65203d" },
  { name: "Mercan", first: "#f25c54", second: "#ffcfb3", ink: "#632c27" },
  { name: "Gün batımı", first: "#e76f51", second: "#f4a261", ink: "#552c1e" },
  { name: "Altın", first: "#d89b00", second: "#ffe169", ink: "#59400c" },
  { name: "Tropik", first: "#06a77d", second: "#f0f66e", ink: "#164835" },
  { name: "Gökkuşağı", first: "#ff4d6d", second: "#09b8c8", ink: "#17233c" },
] as const;

const emojiSubjects = [
  ["Işıltı", "🤩"],
  ["Göz kırpan", "😉"],
  ["Neşeli", "😄"],
  ["Bilgin", "🤓"],
  ["Güneş gözlüklü", "😎"],
  ["Kutlama", "🥳"],
  ["Kitap kurdu", "📖"],
  ["Kalp gözlü", "😍"],
  ["Rahat", "😌"],
  ["Meraklı", "🧐"],
  ["Gülen yıldız", "🌟"],
  ["Çiçek", "🌼"],
  ["Gökkuşağı", "🌈"],
  ["Kahve", "☕"],
  ["Gülen bulut", "🌤️"],
  ["Uğur böceği", "🐞"],
  ["Mini balina", "🐳"],
  ["Renkli kelebek", "🦋"],
  ["Dost robot", "🤖"],
  ["Hayalperest", "🦄"],
] as const;

const monsterSubjects = [
  ["Ponpon", "round"],
  ["Boynuzcuk", "horns"],
  ["Tekgöz", "cyclops"],
  ["Üçgöz", "triple"],
  ["Minik kanat", "wings"],
  ["Benekli", "spots"],
  ["Kıvırcık", "curly"],
  ["Kulaklı", "ears"],
  ["Dişlek", "fangs"],
  ["Uyku canavarı", "sleepy"],
  ["Kahkaha", "laugh"],
  ["Deniz canavarı", "sea"],
  ["Kuyruklu", "tail"],
  ["Pofuduk", "fluffy"],
  ["Küçük ejder", "dragon"],
  ["Yıldız toplayan", "star"],
  ["Şaşkın", "surprised"],
  ["Gözlüklü", "glasses"],
  ["Minik anten", "antenna"],
  ["Sakız baloncuğu", "bubble"],
] as const;

const animalSubjects = [
  ["Kedi", "🐱"],
  ["Köpek", "🐶"],
  ["Tilki", "🦊"],
  ["Panda", "🐼"],
  ["Kurbağa", "🐸"],
  ["Penguen", "🐧"],
  ["Koala", "🐨"],
  ["Aslan", "🦁"],
  ["Kaplan", "🐯"],
  ["Tavşan", "🐰"],
  ["Ayı", "🐻"],
  ["Kirpi", "🦔"],
  ["Baykuş", "🦉"],
  ["Arı", "🐝"],
  ["Kaplumbağa", "🐢"],
  ["Ahtapot", "🐙"],
  ["Lama", "🦙"],
  ["Dinozor", "🦕"],
  ["Rakun", "🦝"],
  ["Mavi Balina", "🐋"],
] as const;

const spaceSubjects = [
  ["Astronot", "👩‍🚀"],
  ["Roket", "🚀"],
  ["Satürn", "🪐"],
  ["Hilal Ay", "🌙"],
  ["Güneş", "☀️"],
  ["Meteor", "☄️"],
  ["Yıldız", "⭐"],
  ["Uzaylı Dost", "👽"],
  ["Robot", "🤖"],
  ["Galaksi", "🌌"],
  ["Kristal", "💎"],
  ["Sihirli Asa", "🪄"],
  ["Deniz Kızı", "🧜‍♀️"],
  ["Peri", "🧚"],
  ["Ejderha", "🐉"],
  ["Denizatı", "🪸"],
  ["Uçan Daire", "🛸"],
  ["Yıldız Tozu", "✨"],
  ["Bulut", "☁️"],
  ["Dünya", "🌍"],
] as const;

const stickerSubjects = [
  ["Açık Kitap", "📖"],
  ["Not Defteri", "📒"],
  ["Kalem", "✏️"],
  ["Ampul", "💡"],
  ["Beyin", "🧠"],
  ["Kulaklık", "🎧"],
  ["Müzik", "🎵"],
  ["Renk Paleti", "🎨"],
  ["Sıcak Kupa", "🍵"],
  ["Karpuz Dilimi", "🍉"],
  ["Çilek", "🍓"],
  ["Kurabiye", "🍪"],
  ["Papatya", "🌻"],
  ["Lale", "🌷"],
  ["Kaktüs", "🌵"],
  ["Uçurtma", "🪁"],
  ["Uçan Balon", "🎈"],
  ["Hediye Kutusu", "🎁"],
  ["Altın Madalyon", "🏅"],
  ["Pırıl Kalp", "💖"],
] as const;

const artSubjects = [
  emojiSubjects,
  monsterSubjects,
  animalSubjects,
  spaceSubjects,
  stickerSubjects,
] as const;

const artCategories = ["emoji", "monster", "animal", "space", "sticker"] as const;

const artCategoryLabels: Record<Avatar2000ArtCategory, string> = {
  emoji: "Emoji",
  monster: "Tatlış Canavar",
  animal: "Hayvan Dost",
  space: "Uzay ve Hayal",
  sticker: "Kitap ve Çıkartma",
};

export type Avatar2000CatalogItem = {
  id: number;
  label: string;
  category: Avatar2000ArtCategory;
  animated: boolean;
  svg: string;
};

function safeIndex(id: number): boolean {
  return Number.isInteger(id) && id >= 0 && id < AVATAR_2000_COUNT;
}

function commonSvgStart(id: number, first: string, second: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" role="img" class="w-full h-full"><defs><linearGradient id="g2k_${id}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${first}"/><stop offset="1" stop-color="${second}"/></linearGradient></defs>`;
}

function monsterArtwork(
  id: number,
  variant: number,
  first: string,
  second: string,
  ink: string
): string {
  const bodyColor = variant % 2 === 0 ? first : second;
  const hasHorns = variant % 3 !== 0;
  const eyeCount = variant % 5 === 2 ? 3 : variant % 7 === 4 ? 1 : 2;
  const eyeXs = eyeCount === 1 ? [64] : eyeCount === 3 ? [48, 64, 80] : [49, 79];
  const eyes = eyeXs
    .map((x, index) => {
      const y = eyeCount === 3 ? 52 : 57 + (variant % 3 === 0 ? 3 : 0);
      const radius = eyeCount === 1 ? 13 : 10;
      return `<ellipse cx="${x}" cy="${y}" rx="${radius}" ry="${
        radius + 3
      }" fill="white"/><circle cx="${x + ((variant + index) % 3) - 1}" cy="${
        y + 1
      }" r="4.5" fill="${ink}"/>`;
    })
    .join("");

  const horns = hasHorns
    ? `<path d="M39 39 30 ${variant % 2 ? 17 : 22} 51 34M76 34 98 ${
        variant % 2 ? 17 : 22
      } 88 41" fill="${second}" stroke="${ink}" stroke-width="3" stroke-linejoin="round"/>`
    : `<path d="M58 32V18M70 32V18" stroke="${ink}" stroke-width="4" stroke-linecap="round"/>`;

  const mouth =
    variant % 4 === 0
      ? `<path d="M50 79 Q64 94 79 78" fill="none" stroke="${ink}" stroke-width="4" stroke-linecap="round"/>`
      : variant % 4 === 1
      ? `<rect x="53" y="76" width="23" height="13" rx="6" fill="${ink}"/><path d="M59 77v6m10-6v6" stroke="white" stroke-width="2"/>`
      : variant % 4 === 2
      ? `<path d="M53 80 Q64 72 76 80 Q64 95 53 80Z" fill="${ink}"/><path d="M59 81h10" stroke="#ffb3c6" stroke-width="4"/>`
      : `<path d="M53 80 Q64 87 76 80" fill="none" stroke="${ink}" stroke-width="4" stroke-linecap="round"/>`;

  const spots =
    variant % 3 === 1
      ? `<circle cx="35" cy="65" r="4" fill="${second}"/><circle cx="92" cy="67" r="5" fill="${second}"/><circle cx="42" cy="83" r="3" fill="${second}"/>`
      : "";

  const accessory =
    variant % 6 === 3
      ? `<path d="M37 55h22m10 0h22M59 55a7 7 0 0 0 10 0" fill="none" stroke="${ink}" stroke-width="4"/>`
      : variant % 6 === 5
      ? `<path d="m93 28 2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6Z" fill="#fff"/>`
      : "";

  return `${commonSvgStart(id, first, second)}<circle cx="64" cy="64" r="59" fill="url(#g2k_${id})"/><circle cx="64" cy="66" r="43" fill="white" fill-opacity=".2"/>${horns}<path d="M28 68c0-24 15-39 36-39s36 15 36 39c0 27-17 44-36 44S28 95 28 68Z" fill="${bodyColor}" stroke="${ink}" stroke-width="3"/>${spots}${eyes}${mouth}${accessory}<circle cx="25" cy="43" r="3" fill="white"/><circle cx="103" cy="91" r="4" fill="white"/><path d="m22 82 2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" fill="white"/></svg>`;
}

export function getAvatar2000Svg(id: number): string | null {
  if (!safeIndex(id)) return null;
  const categoryIndex = Math.floor(id / AVATARS_PER_CATEGORY);
  const local = id % AVATARS_PER_CATEGORY;
  const palette = palettes[Math.floor(local / 20)]!;
  const variant = local % 20;
  const category = artCategories[categoryIndex]!;

  if (category === "monster") {
    return monsterArtwork(id, variant, palette.first, palette.second, palette.ink);
  }

  const subject = artSubjects[categoryIndex]![variant]!;
  const glyph = subject[1];
  const sparkle = `<path d="m25 29 2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Zm77 62 1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5 1.5-4Z" fill="white" fill-opacity=".9"/>`;

  let artwork = "";
  if (category === "emoji") {
    artwork = `<circle cx="64" cy="64" r="57" fill="url(#g2k_${id})"/><circle cx="64" cy="64" r="44" fill="white" fill-opacity=".22"/><circle cx="64" cy="64" r="50" fill="none" stroke="white" stroke-opacity=".65" stroke-width="3"/><text x="64" y="84" text-anchor="middle" font-size="57" font-family="Apple Color Emoji,Segoe UI Emoji,sans-serif">${glyph}</text>${sparkle}`;
  } else if (category === "animal") {
    artwork = `<path d="M28 43 23 18q21 3 31 19m46 6 5-25Q84 21 74 37" fill="${palette.first}" stroke="${palette.ink}" stroke-width="4" stroke-linejoin="round"/><circle cx="64" cy="67" r="47" fill="url(#g2k_${id})" stroke="white" stroke-width="5"/><circle cx="64" cy="66" r="38" fill="white" fill-opacity=".28"/><text x="64" y="85" text-anchor="middle" font-size="55" font-family="Apple Color Emoji,Segoe UI Emoji,sans-serif">${glyph}</text>${sparkle}`;
  } else if (category === "space") {
    artwork = `<circle cx="64" cy="64" r="58" fill="url(#g2k_${id})"/><ellipse cx="64" cy="66" rx="49" ry="20" transform="rotate(-25 64 66)" fill="none" stroke="white" stroke-width="5" stroke-opacity=".8"/><circle cx="64" cy="64" r="27" fill="${palette.second}" stroke="${palette.ink}" stroke-width="3"/><text x="64" y="75" text-anchor="middle" font-size="35" font-family="Apple Color Emoji,Segoe UI Emoji,sans-serif">${glyph}</text><circle cx="25" cy="75" r="8" fill="${palette.first}" stroke="white" stroke-width="3"/>${sparkle}`;
  } else {
    artwork = `<rect x="7" y="7" width="114" height="114" rx="32" fill="url(#g2k_${id})"/><path d="M21 78 63 24l44 54-44 30-42-30Z" fill="white" fill-opacity=".2"/><circle cx="64" cy="64" r="38" fill="white" stroke="${palette.ink}" stroke-opacity=".25" stroke-width="3"/><text x="64" y="83" text-anchor="middle" font-size="52" font-family="Apple Color Emoji,Segoe UI Emoji,sans-serif">${glyph}</text>${sparkle}`;
  }

  return `${commonSvgStart(id, palette.first, palette.second)}${artwork}</svg>`;
}

export function getAvatar2000Page(
  offset: number,
  limit: number,
  category: Avatar2000Category,
  search = ""
): { total: number; offset: number; limit: number; items: Avatar2000CatalogItem[] } {
  const safeLimit = Math.max(1, Math.min(AVATAR_PAGE_MAX, Math.floor(limit) || 1));
  const categoryIndex = category === "all" ? -1 : artCategories.indexOf(category);
  const q = search.trim().toLowerCase();

  let pool: number[] = [];
  if (categoryIndex < 0) {
    pool = Array.from({ length: AVATAR_2000_COUNT }, (_, i) => i);
  } else {
    const start = categoryIndex * AVATARS_PER_CATEGORY;
    pool = Array.from({ length: AVATARS_PER_CATEGORY }, (_, i) => start + i);
  }

  const items: Avatar2000CatalogItem[] = [];

  for (const id of pool) {
    const catIdx = Math.floor(id / AVATARS_PER_CATEGORY);
    const local = id % AVATARS_PER_CATEGORY;
    const variant = local % 20;
    const subject = artSubjects[catIdx]![variant]!;
    const categoryId = artCategories[catIdx]!;
    const palette = palettes[Math.floor(local / 20)]!;
    const label = `${artCategoryLabels[categoryId]}: ${subject[0]} (${palette.name})`;

    if (q && !label.toLowerCase().includes(q)) {
      continue;
    }

    items.push({
      id,
      label,
      category: categoryId,
      animated: id % 17 === 0,
      svg: getAvatar2000Svg(id) || "",
    });
  }

  const total = items.length;
  const safeOffset = Math.max(0, Math.min(total, Math.floor(offset) || 0));
  const paged = items.slice(safeOffset, safeOffset + safeLimit);

  return { total, offset: safeOffset, limit: safeLimit, items: paged };
}

export const CUSTOM_AVATAR_OPTIONS = {
  skin: [
    { id: "porcelain", label: "Açık", color: "#f6d4bf" },
    { id: "peach", label: "Şeftali", color: "#e9b899" },
    { id: "honey", label: "Bal", color: "#cf916b" },
    { id: "copper", label: "Bakır", color: "#a9674d" },
    { id: "cocoa", label: "Kakao", color: "#784c3d" },
    { id: "espresso", label: "Espresso", color: "#51352e" },
  ],
  face: [
    { id: "oval", label: "Oval" },
    { id: "round", label: "Yuvarlak" },
    { id: "heart", label: "Kalp" },
    { id: "soft-square", label: "Yumuşak kare" },
  ],
  hair: [
    { id: "short", label: "Kısa" },
    { id: "curly", label: "Kıvırcık" },
    { id: "long", label: "Uzun" },
    { id: "bun", label: "Topuz" },
    { id: "wavy", label: "Dalgalı" },
  ],
  hairColor: [
    { id: "midnight", label: "Gece siyahı", color: "#25212b" },
    { id: "chestnut", label: "Kestane", color: "#633b2d" },
    { id: "caramel", label: "Karamel", color: "#a86436" },
    { id: "gold", label: "Bal sarısı", color: "#d9a943" },
    { id: "rose", label: "Gül kurusu", color: "#9b5365" },
    { id: "silver", label: "Gümüş", color: "#8c98aa" },
  ],
  eyes: [
    { id: "brown", label: "Kahverengi", color: "#68422f" },
    { id: "hazel", label: "Ela", color: "#8b7142" },
    { id: "blue", label: "Mavi", color: "#447da4" },
    { id: "green", label: "Yeşil", color: "#4c8065" },
    { id: "violet", label: "Menekşe", color: "#77609c" },
  ],
  expression: [
    { id: "smile", label: "Gülümseme" },
    { id: "bright", label: "Neşeli" },
    { id: "calm", label: "Sakin" },
    { id: "focused", label: "Odaklı" },
  ],
  headwear: [
    { id: "none", label: "Yok" },
    { id: "scarf", label: "Şal" },
    { id: "cap", label: "Bere" },
  ],
  outfit: [
    { id: "hoodie", label: "Kapüşonlu" },
    { id: "jacket", label: "Ceket" },
    { id: "sweater", label: "Kazak" },
    { id: "shirt", label: "Gömlek" },
    { id: "uniform", label: "Akademi ceketi" },
  ],
  outfitColor: [
    { id: "coral", label: "Mercan", color: "#ed6b68" },
    { id: "teal", label: "Turkuaz", color: "#168f91" },
    { id: "violet", label: "Menekşe", color: "#7653b7" },
    { id: "blue", label: "Okyanus", color: "#3973bf" },
    { id: "green", label: "Nane", color: "#43856d" },
    { id: "amber", label: "Kehribar", color: "#cc8735" },
    { id: "rose", label: "Pembe", color: "#c64f83" },
    { id: "navy", label: "Lacivert", color: "#394765" },
  ],
  accessory: [
    { id: "none", label: "Yok" },
    { id: "glasses", label: "Gözlük" },
    { id: "earrings", label: "Küpe" },
    { id: "both", label: "Gözlük ve küpe" },
  ],
  background: [
    { id: "sky", label: "Gökyüzü", color: "#d9f2ff", accent: "#87d4ee" },
    { id: "peach", label: "Şeftali", color: "#fff0dc", accent: "#ffc27b" },
    { id: "mint", label: "Nane", color: "#ddf5e8", accent: "#7ed1ad" },
    { id: "lilac", label: "Lila", color: "#eee5ff", accent: "#b59ce9" },
    { id: "rose", label: "Gül", color: "#ffe3ed", accent: "#ef9bb9" },
    { id: "lemon", label: "Limon", color: "#fff6ce", accent: "#f4cf59" },
  ],
} as const;

type OptionId<T extends readonly { id: string }[]> = T[number]["id"];

export type CustomAvatarConfig = {
  skin: OptionId<typeof CUSTOM_AVATAR_OPTIONS.skin>;
  face: OptionId<typeof CUSTOM_AVATAR_OPTIONS.face>;
  hair: OptionId<typeof CUSTOM_AVATAR_OPTIONS.hair>;
  hairColor: OptionId<typeof CUSTOM_AVATAR_OPTIONS.hairColor>;
  eyes: OptionId<typeof CUSTOM_AVATAR_OPTIONS.eyes>;
  expression: OptionId<typeof CUSTOM_AVATAR_OPTIONS.expression>;
  headwear: OptionId<typeof CUSTOM_AVATAR_OPTIONS.headwear>;
  outfit: OptionId<typeof CUSTOM_AVATAR_OPTIONS.outfit>;
  outfitColor: OptionId<typeof CUSTOM_AVATAR_OPTIONS.outfitColor>;
  accessory: OptionId<typeof CUSTOM_AVATAR_OPTIONS.accessory>;
  background: OptionId<typeof CUSTOM_AVATAR_OPTIONS.background>;
};

export const DEFAULT_CUSTOM_AVATAR: CustomAvatarConfig = {
  skin: "honey",
  face: "oval",
  hair: "wavy",
  hairColor: "chestnut",
  eyes: "brown",
  expression: "smile",
  headwear: "none",
  outfit: "jacket",
  outfitColor: "teal",
  accessory: "none",
  background: "sky",
};

const optionColor = <T extends readonly { id: string; color: string }[]>(
  options: T,
  selectedId: string
): string => options.find((option) => option.id === selectedId)?.color ?? options[0].color;

export function normalizeCustomAvatarConfig(value: unknown): CustomAvatarConfig {
  if (typeof value !== "object" || value === null) return DEFAULT_CUSTOM_AVATAR;
  const raw = value as Record<string, unknown>;
  const normalize = <T extends readonly { id: string }[]>(options: T, key: string): OptionId<T> => {
    const selected = raw[key];
    return (typeof selected === "string" && options.some((option) => option.id === selected)
      ? selected
      : options[0].id) as OptionId<T>;
  };
  return {
    skin: normalize(CUSTOM_AVATAR_OPTIONS.skin, "skin"),
    face: normalize(CUSTOM_AVATAR_OPTIONS.face, "face"),
    hair: normalize(CUSTOM_AVATAR_OPTIONS.hair, "hair"),
    hairColor: normalize(CUSTOM_AVATAR_OPTIONS.hairColor, "hairColor"),
    eyes: normalize(CUSTOM_AVATAR_OPTIONS.eyes, "eyes"),
    expression: normalize(CUSTOM_AVATAR_OPTIONS.expression, "expression"),
    headwear: normalize(CUSTOM_AVATAR_OPTIONS.headwear, "headwear"),
    outfit: normalize(CUSTOM_AVATAR_OPTIONS.outfit, "outfit"),
    outfitColor: normalize(CUSTOM_AVATAR_OPTIONS.outfitColor, "outfitColor"),
    accessory: normalize(CUSTOM_AVATAR_OPTIONS.accessory, "accessory"),
    background: normalize(CUSTOM_AVATAR_OPTIONS.background, "background"),
  };
}

export function renderCustomAvatar(config: CustomAvatarConfig): string {
  const skin = optionColor(CUSTOM_AVATAR_OPTIONS.skin, config.skin);
  const hair = optionColor(CUSTOM_AVATAR_OPTIONS.hairColor, config.hairColor);
  const eye = optionColor(CUSTOM_AVATAR_OPTIONS.eyes, config.eyes);
  const outfit = optionColor(CUSTOM_AVATAR_OPTIONS.outfitColor, config.outfitColor);
  const backdrop = CUSTOM_AVATAR_OPTIONS.background.find((item) => item.id === config.background) ?? CUSTOM_AVATAR_OPTIONS.background[0];
  const faceGeometry: Record<CustomAvatarConfig["face"], string> = {
    oval: '<ellipse cx="100" cy="88" rx="48" ry="55"/>',
    round: '<ellipse cx="100" cy="88" rx="53" ry="52"/>',
    heart: '<path d="M100 142C88 132 51 105 51 78c0-20 15-34 33-34 8 0 13 4 16 10 3-6 8-10 16-10 18 0 33 14 33 34 0 27-37 54-49 64Z"/>',
    "soft-square": '<path d="M52 57Q52 34 76 34h48q24 0 24 24v46q0 39-48 45-48-6-48-45Z"/>',
  };
  const hairGeometry: Record<CustomAvatarConfig["hair"], string> = {
    short: '<path d="M51 81Q45 31 100 27q57 4 49 55-18-19-30-39-26 22-68 38Z"/>',
    curly: '<path d="M50 83Q39 24 100 27q61-2 50 56l-12-4-2-18-12 12-9-17-13 16-13-17-9 16-13-10-5 16Z"/>',
    long: '<path d="M51 78Q43 23 100 26q58-1 50 54l-3 68-21 13-2-78q-24 11-48 0l-3 78-21-13Z"/>',
    bun: '<circle cx="100" cy="24" r="23"/><path d="M52 82Q45 29 100 29q55 0 48 53l-14-10-3-19-13 13-10-18-12 16-13-17-10 17-15-12-3 18Z"/>',
    wavy: '<path d="M50 83Q42 25 100 28q59-2 50 58l-15-13-10 14-12-19-12 18-12-18-12 16-12-12-10 17Z"/>',
  };
  const expressionMouth: Record<CustomAvatarConfig["expression"], string> = {
    smile: "M82 119Q100 137 118 119",
    bright: "M80 116Q100 143 120 116",
    calm: "M84 122Q100 127 116 122",
    focused: "M86 123H114",
  };
  const outfitShape: Record<CustomAvatarConfig["outfit"], string> = {
    hoodie: '<path d="M37 180q4-48 39-52l24 19 24-19q35 4 39 52Z"/><path d="M76 130q24 27 48 0" fill="none" stroke="#fff" stroke-opacity=".72" stroke-width="5"/>',
    jacket: '<path d="M37 180q4-48 39-52l24 19 24-19q35 4 39 52Z"/><path d="m76 130 24 17 24-17-11 50H87Z" fill="#fff" fill-opacity=".8"/>',
    sweater: '<path d="M37 180q4-48 39-52l24 17 24-17q35 4 39 52Z"/><path d="M78 137h44" stroke="#fff" stroke-opacity=".7" stroke-width="4"/>',
    shirt: '<path d="M37 180q4-48 39-52l24 18 24-18q35 4 39 52Z"/><path d="m76 130 24 16 24-16-13 20-11-9-11 9Z" fill="#fff"/>',
    uniform: '<path d="M37 180q4-48 39-52l24 17 24-17q35 4 39 52Z"/><path d="m76 130 24 15 24-15-11 50H87Z" fill="#f8fafc"/><path d="m100 146 8 7-8 27-8-27Z" fill="#f4b942"/>',
  };
  const glasses = config.accessory === "glasses" || config.accessory === "both"
    ? '<g fill="none" stroke="#34435b" stroke-width="4"><rect x="60" y="78" width="31" height="21" rx="9"/><rect x="109" y="78" width="31" height="21" rx="9"/><path d="M91 87h18"/></g>'
    : "";
  const earrings = config.accessory === "earrings" || config.accessory === "both"
    ? '<g fill="#f4bf58" stroke="#fff4c2" stroke-width="1"><circle cx="47" cy="102" r="5"/><circle cx="153" cy="102" r="5"/></g>'
    : "";
  const headwear = config.headwear === "scarf"
    ? '<path d="M48 79Q45 29 100 24q55 5 52 55l-10 57q-10-7-19-6l7-65q-28 17-60 0l7 65q-9-1-19 6Z" fill="#7653b7"/><path d="M55 72Q100 99 145 72" fill="none" stroke="#d7c6ff" stroke-width="4" opacity=".9"/>'
    : config.headwear === "cap"
      ? '<path d="M48 71q9-44 52-44t52 44q-48 13-104 0Z" fill="#f4b942"/><path d="M49 72q52-9 102 0-13 17-52 17t-50-17Z" fill="#d59031"/>'
      : "";
  const visibleHair = config.headwear === "scarf" ? "" : hairGeometry[config.hair];
  const mouthFill = config.expression === "bright" ? "#a83f55" : "none";

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Özelleştirilmiş avatar">
    <defs>
      <linearGradient id="avatar-bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${backdrop.color}"/><stop offset="1" stop-color="${backdrop.accent}"/></linearGradient>
      <radialGradient id="avatar-skin" cx=".32" cy=".2" r=".9"><stop stop-color="#fff" stop-opacity=".46"/><stop offset="1" stop-color="${skin}"/></radialGradient>
      <linearGradient id="avatar-clothes" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${outfit}"/><stop offset="1" stop-color="#1f2937" stop-opacity=".22"/></linearGradient>
    </defs>
    <rect width="200" height="200" rx="42" fill="url(#avatar-bg)"/>
    <circle cx="100" cy="91" r="77" fill="#fff" opacity=".2"/>
    <path d="M35 190q8-48 43-60l22 18 22-18q35 12 43 60" fill="url(#avatar-clothes)"/>
    <path d="M84 125h32v28q-16 15-32 0Z" fill="${skin}"/>
    <g fill="${hair}" opacity=".34"><circle cx="59" cy="87" r="10"/><circle cx="141" cy="87" r="10"/></g>
    <g fill="url(#avatar-skin)" stroke="#593d37" stroke-opacity=".16" stroke-width="2">${faceGeometry[config.face]}</g>
    <g fill="${hair}">${visibleHair}</g>
    <path d="M72 83q10-8 21 0M107 83q11-8 21 0" fill="none" stroke="${hair}" stroke-width="4" stroke-linecap="round"/>
    <g><ellipse cx="81" cy="94" rx="7" ry="9" fill="#fff"/><ellipse cx="119" cy="94" rx="7" ry="9" fill="#fff"/><circle cx="82" cy="95" r="4.5" fill="${eye}"/><circle cx="120" cy="95" r="4.5" fill="${eye}"/><circle cx="83" cy="93" r="1.5" fill="#fff"/><circle cx="121" cy="93" r="1.5" fill="#fff"/></g>
    <path d="M99 97q-5 12 3 13" fill="none" stroke="#9a6554" stroke-width="3" stroke-linecap="round"/>
    <path d="${expressionMouth[config.expression]}" fill="${mouthFill}" stroke="#a83f55" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="68" cy="109" rx="9" ry="4" fill="#f27e83" opacity=".35"/><ellipse cx="132" cy="109" rx="9" ry="4" fill="#f27e83" opacity=".35"/>
    ${earrings}${glasses}${headwear}${outfitShape[config.outfit]}
    <path d="M53 167q47 17 94 0" fill="none" stroke="#fff" stroke-opacity=".34" stroke-width="2"/>
    <circle cx="151" cy="47" r="8" fill="#fff" opacity=".5"/>
  </svg>`;
}

export function customAvatarDataUrl(config: CustomAvatarConfig): string {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(renderCustomAvatar(config))}`;
}

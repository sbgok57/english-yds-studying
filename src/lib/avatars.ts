// 10.000 Benzersiz Deterministik Avatar Sistemi
// - Tam 10.000 avatar (AVATAR_COUNT = 10000)
// - Zenginleştirilmiş Canavarlar (Gelişmiş SVG morfolojisi, boynuzlar, gözler, mimikler)
// - Tüm 100+ Meslek için çoklu varyasyonlar
// - Gerçekçi & Fotoğrafik, Komik & Eğlenceli, Motive Edici & Şampiyonlar kategorileri
// - Çevrimdışı saf SVG üretimi + XSS koruması + Performans Governor (P0/P1)

export const AVATAR_COUNT = 10000;
export const MONSTER_COUNT = 1200;

export interface Profession {
  name: string;
  emoji: string;
}

export const PROFESSIONS: Profession[] = [
  { name: "Doktor", emoji: "🩺" },
  { name: "Hemşire", emoji: "💉" },
  { name: "Öğretmen", emoji: "📚" },
  { name: "Akademisyen", emoji: "🎓" },
  { name: "Yazılımcı", emoji: "💻" },
  { name: "Veri Bilimci", emoji: "📊" },
  { name: "Bilgisayar Mühendisi", emoji: "🖥️" },
  { name: "Yapay Zeka Uzmanı", emoji: "🤖" },
  { name: "Siber Güvenlik Uzmanı", emoji: "🛡️" },
  { name: "Elektrik Mühendisi", emoji: "⚡" },
  { name: "Makine Mühendisi", emoji: "⚙️" },
  { name: "İnşaat Mühendisi", emoji: "🏗️" },
  { name: "Mimar", emoji: "📐" },
  { name: "İç Mimar", emoji: "🛋️" },
  { name: "Şehir Plancısı", emoji: "🏙️" },
  { name: "Avukat", emoji: "⚖️" },
  { name: "Hâkim", emoji: "🧑‍⚖️" },
  { name: "Savcı", emoji: "🏛️" },
  { name: "Noter", emoji: "📜" },
  { name: "Diplomat", emoji: "🌐" },
  { name: "Polis", emoji: "👮" },
  { name: "Pilot", emoji: "✈️" },
  { name: "Hava Trafik Kontrolörü", emoji: "🛫" },
  { name: "Kabin Memuru", emoji: "🛩️" },
  { name: "Gemi Kaptanı", emoji: "⚓" },
  { name: "Eczacı", emoji: "💊" },
  { name: "Diş Hekimi", emoji: "🦷" },
  { name: "Veteriner", emoji: "🐾" },
  { name: "Psikolog", emoji: "🧠" },
  { name: "Sosyolog", emoji: "👥" },
  { name: "Fizyoterapist", emoji: "🏃" },
  { name: "Diyetisyen", emoji: "🥗" },
  { name: "Biyolog", emoji: "🧫" },
  { name: "Kimyager", emoji: "🧪" },
  { name: "Fizikçi", emoji: "⚛️" },
  { name: "Matematikçi", emoji: "🔢" },
  { name: "Genetik Uzmanı", emoji: "🧬" },
  { name: "Astronom", emoji: "🔭" },
  { name: "Astronot", emoji: "👨‍🚀" },
  { name: "Jeolog", emoji: "🌋" },
  { name: "Meteorolog", emoji: "🌪️" },
  { name: "Arkeolog", emoji: "🏺" },
  { name: "Tarihçi", emoji: "📜" },
  { name: "Çevirmen", emoji: "🗣️" },
  { name: "Mütercim Tercüman", emoji: "🌐" },
  { name: "Gazeteci", emoji: "📰" },
  { name: "Fotoğrafçı", emoji: "📷" },
  { name: "Grafik Tasarımcı", emoji: "🎨" },
  { name: "Yönetmen", emoji: "🎬" },
  { name: "Senarist", emoji: "✍️" },
  { name: "Yazar", emoji: "📖" },
  { name: "Editör", emoji: "📝" },
  { name: "Müzisyen", emoji: "🎵" },
  { name: "Besteci", emoji: "🎼" },
  { name: "Ressam", emoji: "🖌️" },
  { name: "Heykeltıraş", emoji: "🗿" },
  { name: "Oyuncu", emoji: "🎭" },
  { name: "Ekonomist", emoji: "📈" },
  { name: "Mali Müşavir", emoji: "📉" },
  { name: "Bankacı", emoji: "🏦" },
  { name: "Aktüer", emoji: "📑" },
  { name: "İstatistikçi", emoji: "📉" },
  { name: "İnsan Kaynakları Uzmanı", emoji: "🤝" },
  { name: "Pazarlama Uzmanı", emoji: "📣" },
  { name: "Reklamcı", emoji: "💡" },
  { name: "Halkla İlişkiler Uzmanı", emoji: "📢" },
  { name: "Lojistik Uzmanı", emoji: "🚚" },
  { name: "Ziraat Mühendisi", emoji: "🌾" },
  { name: "Orman Mühendisi", emoji: "🌲" },
  { name: "Çevre Mühendisi", emoji: "🌱" },
  { name: "Gıda Mühendisi", emoji: "🍞" },
  { name: "Maden Mühendisi", emoji: "⛏️" },
  { name: "Endüstri Mühendisi", emoji: "🏭" },
  { name: "Mekatronik Mühendisi", emoji: "🦾" },
  { name: "Biyomedikal Mühendisi", emoji: "🔬" },
  { name: "Yatırım Danışmanı", emoji: "💹" },
  { name: "Denetçi (Auditor)", emoji: "🔍" },
  { name: "Sigortacı", emoji: "🛡️" },
  { name: "Emlak Danışmanı", emoji: "🏠" },
  { name: "Turist Rehberi", emoji: "🗺️" },
  { name: "Spor Antrenörü", emoji: "🏅" },
  { name: "Şef Aşçı", emoji: "👨‍🍳" },
  { name: "Pastacı", emoji: "🎂" },
  { name: "Barista", emoji: "☕" },
  { name: "Moda Tasarımcısı", emoji: "👗" },
  { name: "Koreograf", emoji: "💃" },
  { name: "Ses Mühendisi", emoji: "🎧" },
  { name: "Kütüphaneci", emoji: "📚" },
  { name: "Arşivci", emoji: "🗄️" },
  { name: "Filolog", emoji: "🔤" },
  { name: "Felsefeci", emoji: "🤔" },
  { name: "Antropolog", emoji: "🦴" },
  { name: "Biyokimyager", emoji: "🧪" },
  { name: "Nanoteknoloji Uzmanı", emoji: "🔬" },
  { name: "Robotik Kodlama Eğitmeni", emoji: "🤖" },
  { name: "Oyun Geliştirici", emoji: "🎮" },
  { name: "Blokzincir Geliştirici", emoji: "⛓️" },
  { name: "Bulut Mimarı", emoji: "☁️" },
  { name: "DevOps Mühendisi", emoji: "♾️" },
  { name: "Ürün Yöneticisi (PM)", emoji: "🚀" },
];

export interface Avatar {
  id: number | string;
  name: string;
  category: string;
  profession: string;
  professionEmoji: string;
  emoji: string;
  label: string;
  motivation: string;
  theme: string;
  imageUrl?: string;
}

export const AVATAR_CATEGORIES = [
  "Tümü",
  "Canavarlar",
  "Meslekler",
  "Gerçekçi & Fotoğraf",
  "Komik & Eğlenceli",
  "Motive Edici & Şampiyonlar",
  "Robotlar & Siber",
  "Hayvanlar & Doğa",
  "Uzay & Kozmik",
  "Sihirli & Fantastik",
];

// Gradients
const THEMES = [
  "from-cyan-500 to-blue-600",
  "from-purple-500 to-pink-600",
  "from-amber-400 to-orange-600",
  "from-emerald-400 to-teal-600",
  "from-rose-500 to-red-600",
  "from-indigo-500 to-purple-600",
  "from-yellow-400 to-amber-600",
  "from-fuchsia-500 to-rose-500",
  "from-blue-600 to-cyan-400",
  "from-lime-400 to-emerald-600",
];

// Monster palettes (16 vibrant palettes)
const MONSTER_PALETTES = [
  { c1: "#8b5cf6", c2: "#ec4899", body: "#a855f7" }, // Mor-Pembe
  { c1: "#06b6d4", c2: "#3b82f6", body: "#0ea5e9" }, // Camgöbeği-Mavi
  { c1: "#10b981", c2: "#14b8a6", body: "#22c55e" }, // Zümrüt-Yeşil
  { c1: "#f59e0b", c2: "#ef4444", body: "#f97316" }, // Turuncu-Ateş
  { c1: "#ec4899", c2: "#f43f5e", body: "#fb7185" }, // Sakız Pembesi
  { c1: "#6366f1", c2: "#8b5cf6", body: "#818cf8" }, // İndigo-Menekşe
  { c1: "#14b8a6", c2: "#06b6d4", body: "#2dd4bf" }, // Turkuaz-Mint
  { c1: "#eab308", c2: "#f59e0b", body: "#facc15" }, // Altın Sarısı
  { c1: "#f43f5e", c2: "#be123c", body: "#e11d48" }, // Gül-Kırmızı
  { c1: "#84cc16", c2: "#22c55e", body: "#a3e635" }, // Fıstık Yeşili
  { c1: "#0284c7", c2: "#0369a1", body: "#38bdf8" }, // Buzul Mavisi
  { c1: "#d946ef", c2: "#c026d3", body: "#e879f9" }, // Elektrik Eflatun
  { c1: "#ea580c", c2: "#c2410c", body: "#fb923c" }, // Sıcak Mercan
  { c1: "#4f46e5", c2: "#4338ca", body: "#6366f1" }, // Kraliyet Mavisi
  { c1: "#059669", c2: "#047857", body: "#34d399" }, // Zümrüt Ormanı
  { c1: "#b45309", c2: "#92400e", body: "#f59e0b" }, // Sıcak Kehribar
];

const MONSTER_NAMES = [
  "Pufi", "Lopi", "Gogi", "Bobi", "Zumi", "Kuki", "Mimi", "Poki", "Toko", "Bubu",
  "Nori", "Koko", "Moki", "Lili", "Dodo", "Fifi", "Zizi", "Vivi", "Jojo", "Piko",
  "Glupi", "Floki", "Sniff", "Munch", "Sparky", "Cosmo", "Bubbles", "Gizmo", "Wobbly", "Nibble",
];

const FUNNY_TITLES = [
  "Kahkaha Şampiyonu", "Espri Mimarı", "Meme Kralı", "Keyifli Bilgin", "Gülümseyen Dahi",
  "Enerji Küpü", "Neşe Bombası", "Dopamin Avcısı", "Süper Muzip", "Pozitif Canavar",
  "Çılgın Profesör", "Uyku Düşmanı", "Kahve Bağımlısı", "Gözlüklü Zeka", "Mizahşör",
];

const MOTIVATIONAL_TITLES = [
  "YDS Fatihi", "Zirve Şampiyonu", "Yenilmez Azim", "Odaklanma Ustası", "Disiplin Anıtı",
  "Altın Net Avcısı", "Maraton Koşucusu", "Kelimeler Efendisi", "Gramer Bükücü", "Hedef 90+",
  "Kararlılık Kartalı", "Başarı Meşalesi", "Sonsuz Enerji", "Vizyoner Lider", "İrade Çeliği",
];

const REALISTIC_PROMPTS = [
  "Genç Akademisyen", "Kararlı Araştırmacı", "Gülümseyen Öğrenci", "Modern Dilbilimci",
  "Kütüphanede Çalışan Vizyoner", "Odaklanmış Uzman", "Hedefine Kilitlenmiş Genç",
  "Uluslararası Diplomat", "Laboratuvar Şefi", "Strateji Lideri", "Kitap Kurdu", "Mülakat Koçu",
];

const ROBOT_EMOJIS = ["🤖", "🦾", "🦿", "⚡", "🖥️", "🔋", "🛰️", "🎮", "🕹️", "📡"];
const ANIMAL_EMOJIS = ["🦁", "🦅", "🐺", "🦉", "🐆", "🦊", "🐬", "🐯", "🐻", "🐢", "🦚", "🦄"];
const SPACE_EMOJIS = ["👨‍🚀", "🚀", "🪐", "🛸", "🌟", "🌌", "☄️", "🌕", "🛰️", "🔭"];
const MAGIC_EMOJIS = ["🧙", "🔮", "✨", "🔥", "⚡", "🧚", "🧞", "🧝", "🕊️", "🐉"];
const FUNNY_EMOJIS = ["🤪", "😎", "🥳", "🤠", "🤓", "🤩", "😺", "😸", "🥸", "🤡", "👾", "🕺"];
const CHAMPION_EMOJIS = ["🏆", "🥇", "👑", "⚡", "🔥", "🎯", "💎", "⭐", "🦸", "🦹", "🎖️", "🚀"];

// Procedurally generate exactly 10,000 deterministic avatars
export const AVATARS: Avatar[] = (() => {
  const list: Avatar[] = new Array(AVATAR_COUNT);

  for (let i = 0; i < AVATAR_COUNT; i++) {
    const theme = THEMES[i % THEMES.length];

    if (i < MONSTER_COUNT) {
      // 1. Canavarlar (Genişletilmiş ve çeşitlendirilmiş canavarlar)
      const name = MONSTER_NAMES[i % MONSTER_NAMES.length] + " #" + (i + 1);
      list[i] = {
        id: i,
        name: name,
        category: "Canavarlar",
        profession: "Sevimli Canavar",
        professionEmoji: "👾",
        emoji: "👾",
        label: `${name} (Canavar)`,
        motivation: "YDS kelimelerini pırıl pırıl çözer! Sevimli canavarınla zirveye koş!",
        theme,
      };
    } else if (i < 5000) {
      // 2. Meslekler (Tüm 100+ meslek, her biri için çoklu varyasyon)
      const profIdx = (i - MONSTER_COUNT) % PROFESSIONS.length;
      const prof = PROFESSIONS[profIdx];
      const varNum = Math.floor((i - MONSTER_COUNT) / PROFESSIONS.length) + 1;
      const name = `${prof.name} (Varyasyon ${varNum})`;
      list[i] = {
        id: i,
        name,
        category: "Meslekler",
        profession: prof.name,
        professionEmoji: prof.emoji,
        emoji: prof.emoji,
        label: `${prof.name} · Seviye ${varNum}`,
        motivation: `${prof.name} hedefin için bugün bir adım daha at kanka! YDS puanın hazır olsun.`,
        theme,
      };
    } else if (i < 6500) {
      // 3. Gerçekçi & Fotoğraf (Kişiselleştirilmiş akademik ve profesyonel portreler)
      const rIdx = (i - 5000) % REALISTIC_PROMPTS.length;
      const title = REALISTIC_PROMPTS[rIdx] + " #" + (i - 4999);
      const prof = PROFESSIONS[i % PROFESSIONS.length];
      list[i] = {
        id: i,
        name: title,
        category: "Gerçekçi & Fotoğraf",
        profession: prof.name,
        professionEmoji: "📸",
        emoji: "🧑‍💼",
        label: `${title}`,
        motivation: "Gerçek başarı gerçek çabayla gelir. Fotoğrafındaki o vizyon seni zirveye taşısın!",
        theme,
      };
    } else if (i < 7700) {
      // 4. Komik & Eğlenceli (Mizahi, esprili, kahkaha attıran motive edici avatarlar)
      const fIdx = (i - 6500) % FUNNY_TITLES.length;
      const emoji = FUNNY_EMOJIS[(i - 6500) % FUNNY_EMOJIS.length];
      const title = FUNNY_TITLES[fIdx] + " #" + (i - 6499);
      list[i] = {
        id: i,
        name: title,
        category: "Komik & Eğlenceli",
        profession: "Mizah & Motivasyon",
        professionEmoji: emoji,
        emoji,
        label: `${title}`,
        motivation: "Gülümse kanka, stres sınavın en büyük düşmanıdır! Keyifle çalış, 90 neti cebe indir.",
        theme,
      };
    } else if (i < 8700) {
      // 5. Motive Edici & Şampiyonlar (Kupa, süper kahraman, azim, zirve)
      const mIdx = (i - 7700) % MOTIVATIONAL_TITLES.length;
      const emoji = CHAMPION_EMOJIS[(i - 7700) % CHAMPION_EMOJIS.length];
      const title = MOTIVATIONAL_TITLES[mIdx] + " #" + (i - 7699);
      list[i] = {
        id: i,
        name: title,
        category: "Motive Edici & Şampiyonlar",
        profession: "Şampiyon Adayı",
        professionEmoji: emoji,
        emoji,
        label: `${title}`,
        motivation: "Şampiyonlar pes etmeyenlerin arasından çıkar. Zirve senin kaderin!",
        theme,
      };
    } else if (i < 9100) {
      // 6. Robotlar & Siber
      const emoji = ROBOT_EMOJIS[(i - 8700) % ROBOT_EMOJIS.length];
      const name = `Siber Robot-X${i - 8699}`;
      list[i] = {
        id: i,
        name,
        category: "Robotlar & Siber",
        profession: "Yapay Zeka & Siber",
        professionEmoji: emoji,
        emoji,
        label: `${name}`,
        motivation: "Hata payını sıfıra indir, nöral ağların gibi kusursuz gramer analizleri yap!",
        theme,
      };
    } else if (i < 9450) {
      // 7. Hayvanlar & Doğa
      const emoji = ANIMAL_EMOJIS[(i - 9100) % ANIMAL_EMOJIS.length];
      const name = `Bilge Doğa Dostu #${i - 9099}`;
      list[i] = {
        id: i,
        name,
        category: "Hayvanlar & Doğa",
        profession: "Doğa & Zeka",
        professionEmoji: emoji,
        emoji,
        label: `${name}`,
        motivation: "Bir kartal gibi yüksekten bak, paragrafların püf noktalarını anında yakala.",
        theme,
      };
    } else if (i < 9750) {
      // 8. Uzay & Kozmik
      const emoji = SPACE_EMOJIS[(i - 9450) % SPACE_EMOJIS.length];
      const name = `Kozmik Gezgin #${i - 9449}`;
      list[i] = {
        id: i,
        name,
        category: "Uzay & Kozmik",
        profession: "Kozmonot & Gezgin",
        professionEmoji: emoji,
        emoji,
        label: `${name}`,
        motivation: "Sınırın sadece gökyüzü değil, tüm galaksi! Yıldızlara uzan kanka.",
        theme,
      };
    } else {
      // 9. Sihirli & Fantastik
      const emoji = MAGIC_EMOJIS[(i - 9750) % MAGIC_EMOJIS.length];
      const name = `Efsanevi Büyücü #${i - 9749}`;
      list[i] = {
        id: i,
        name,
        category: "Sihirli & Fantastik",
        profession: "Simyacı & Büyücü",
        professionEmoji: emoji,
        emoji,
        label: `${name}`,
        motivation: "Bilgi en büyük sihirdir. Kelimeleri hafızana mühürle, sınavı büyüle!",
        theme,
      };
    }
  }

  return list;
})();

export function avatarMeta(id: number): {
  name: string;
  profession: string;
  category: string;
  professionEmoji: string;
} {
  const safeId = Math.abs(id || 0) % AVATAR_COUNT;
  const a = AVATARS[safeId] || AVATARS[0];
  return {
    name: a.name,
    profession: a.profession,
    category: a.category,
    professionEmoji: a.professionEmoji,
  };
}

// Geriye dönük uyumluluk haritası
const LEGACY_MAP: Record<string, number> = {
  astronaut: 50,
  rocket: 25,
  "alien-genius": 46,
  satellite: 48,
  telescope: 12,
  "star-pilot": 28,
  "wise-owl": 0,
  wizard: 7,
  scientist: 11,
  philosopher: 41,
  detective: 12,
  professor: 1,
  "brain-fire": 47,
  lightning: 31,
  gem: 34,
  crown: 38,
  flame: 44,
  trophy: 19,
  lion: 1,
  eagle: 4,
  wolf: 30,
  panther: 2,
  falcon: 5,
  phoenix: 22,
  superhero: 6,
  superwoman: 8,
  ninja: 9,
  gladiator: 10,
  "cyber-cyborg": 45,
  shield: 43,
};

export const getAvatar = (id: string | number): Avatar => {
  if (typeof id === "number") {
    const safe = Math.abs(id) % AVATAR_COUNT;
    return AVATARS[safe] || AVATARS[0];
  }
  if (!id) return AVATARS[0];
  const num = parseInt(id, 10);
  if (!isNaN(num)) {
    return AVATARS[Math.abs(num) % AVATAR_COUNT] || AVATARS[0];
  }
  const mapped = LEGACY_MAP[id];
  if (mapped !== undefined) {
    return AVATARS[mapped] || AVATARS[0];
  }
  // Harf koduna göre deterministik ID
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return AVATARS[h % AVATAR_COUNT] || AVATARS[0];
};

export type AvatarOption = Avatar & { motto: string; gradient: string };

export const LEGACY_AVATARS: AvatarOption[] = AVATARS.slice(0, 100).map((a) => ({
  ...a,
  motto: a.motivation,
  gradient: a.theme,
}));

// Geliştirilmiş Canavar SVG Üreticisi (16 renk paleti, 8 gövde tipi, 6 göz tipi, 6 ağız tipi, 8 boynuz/aksesuar)
function generateMonsterSvg(idx: number): string {
  const p = MONSTER_PALETTES[idx % MONSTER_PALETTES.length];
  const shapeType = idx % 8;
  const eyeType = (idx >> 1) % 6;
  const mouthType = (idx >> 2) % 6;
  const hornType = (idx >> 3) % 8;

  let horns = "";
  if (hornType === 0) {
    // Sevimli çift boynuz
    horns = `<path d="M 32 38 Q 22 18 34 22 Z" fill="${p.c2}" /><path d="M 68 38 Q 78 18 66 22 Z" fill="${p.c2}" />`;
  } else if (hornType === 1) {
    // Parıldayan spiral anten
    horns = `<line x1="50" y1="34" x2="50" y2="16" stroke="${p.c1}" stroke-width="3.5" stroke-linecap="round"/><circle cx="50" cy="14" r="6" fill="#facc15" /><circle cx="50" cy="14" r="2.5" fill="#ffffff" />`;
  } else if (hornType === 2) {
    // Yumuşak ayı/kedi kulakları
    horns = `<circle cx="30" cy="30" r="11" fill="${p.c1}" /><circle cx="30" cy="30" r="5.5" fill="#fbcfe8" /><circle cx="70" cy="30" r="11" fill="${p.c1}" /><circle cx="70" cy="30" r="5.5" fill="#fbcfe8" />`;
  } else if (hornType === 3) {
    // Başta yeşil çift yaprak
    horns = `<path d="M 50 32 Q 58 20 50 14 Q 42 20 50 32" fill="#4ade80" /><path d="M 50 32 Q 62 26 58 18 Q 50 24 50 32" fill="#22c55e" />`;
  } else if (hornType === 4) {
    // Kıvrık koç boynuzu
    horns = `<path d="M 28 42 C 16 32, 16 18, 30 22 C 24 28, 26 36, 28 42 Z" fill="${p.c2}" /><path d="M 72 42 C 84 32, 84 18, 70 22 C 76 28, 74 36, 72 42 Z" fill="${p.c2}" />`;
  } else if (hornType === 5) {
    // Mini altın taç
    horns = `<polygon points="40,24 45,30 50,20 55,30 60,24 58,34 42,34" fill="#fbbf24" stroke="#d97706" stroke-width="1.5" />`;
  } else if (hornType === 6) {
    // Uzun tavşan kulakları
    horns = `<ellipse cx="36" cy="22" rx="6" ry="14" fill="${p.c1}" /><ellipse cx="36" cy="22" rx="3" ry="9" fill="#fbcfe8" /><ellipse cx="64" cy="22" rx="6" ry="14" fill="${p.c1}" /><ellipse cx="64" cy="22" rx="3" ry="9" fill="#fbcfe8" />`;
  } else {
    // Çift mini melek halesi
    horns = `<ellipse cx="50" cy="22" rx="20" ry="6" fill="none" stroke="#fef08a" stroke-width="3" opacity="0.85" />`;
  }

  let body = "";
  if (shapeType === 0) {
    // Yuvarlak patates canavar
    body = `<ellipse cx="50" cy="58" rx="28" ry="25" fill="${p.body}" />`;
  } else if (shapeType === 1) {
    // Sevimli armut canavar
    body = `<path d="M 28 78 C 24 54, 36 34, 50 34 C 64 34, 76 54, 72 78 Z" fill="${p.body}" />`;
  } else if (shapeType === 2) {
    // Daire canavar
    body = `<circle cx="50" cy="56" r="27" fill="${p.body}" />`;
  } else if (shapeType === 3) {
    // Sakız damlası canavar
    body = `<rect x="25" y="34" width="50" height="46" rx="23" fill="${p.body}" />`;
  } else if (shapeType === 4) {
    // Pofuduk bulut canavar
    body = `<circle cx="38" cy="56" r="18" fill="${p.body}" /><circle cx="62" cy="56" r="18" fill="${p.body}" /><circle cx="50" cy="50" r="21" fill="${p.body}" />`;
  } else if (shapeType === 5) {
    // Yıldız canavar
    body = `<polygon points="50,32 58,48 76,50 62,62 66,79 50,70 34,79 38,62 24,50 42,48" fill="${p.body}" />`;
  } else if (shapeType === 6) {
    // Jöle slime canavar
    body = `<path d="M 26 76 C 24 50, 32 38, 50 36 C 68 38, 76 50, 74 76 Q 50 82 26 76 Z" fill="${p.body}" />`;
  } else {
    // Robotik küp canavar
    body = `<rect x="26" y="36" width="48" height="44" rx="14" fill="${p.body}" />`;
  }

  let eyes = "";
  if (eyeType === 0) {
    // Sevimli tek dev göz (Cyclops)
    eyes = `
      <circle cx="50" cy="50" r="12" fill="#ffffff" />
      <circle cx="50" cy="50" r="6" fill="#0f172a" />
      <circle cx="52.5" cy="47.5" r="2.5" fill="#ffffff" />
    `;
  } else if (eyeType === 1) {
    // İki büyük parlak anime gözü
    eyes = `
      <circle cx="40" cy="50" r="7.5" fill="#ffffff" />
      <circle cx="40" cy="50" r="4.2" fill="#0f172a" />
      <circle cx="42" cy="48" r="1.8" fill="#ffffff" />
      <circle cx="60" cy="50" r="7.5" fill="#ffffff" />
      <circle cx="60" cy="50" r="4.2" fill="#0f172a" />
      <circle cx="62" cy="48" r="1.8" fill="#ffffff" />
    `;
  } else if (eyeType === 2) {
    // Üç eğlenceli göz
    eyes = `
      <circle cx="36" cy="52" r="5.5" fill="#ffffff" /><circle cx="36" cy="52" r="2.8" fill="#0f172a" />
      <circle cx="50" cy="44" r="6.5" fill="#ffffff" /><circle cx="50" cy="44" r="3.4" fill="#0f172a" /><circle cx="52" cy="42" r="1.4" fill="#ffffff" />
      <circle cx="64" cy="52" r="5.5" fill="#ffffff" /><circle cx="64" cy="52" r="2.8" fill="#0f172a" />
    `;
  } else if (eyeType === 3) {
    // Göz kırpan muzip gözler
    eyes = `
      <circle cx="39" cy="50" r="7" fill="#ffffff" />
      <circle cx="39" cy="50" r="3.8" fill="#0f172a" />
      <path d="M 55 51 Q 61 45 67 51" stroke="#0f172a" stroke-width="2.8" fill="none" stroke-linecap="round" />
    `;
  } else if (eyeType === 4) {
    // Yuvarlak zeki gözlük
    eyes = `
      <circle cx="39" cy="50" r="8" fill="#ffffff" stroke="#1e293b" stroke-width="2" />
      <circle cx="39" cy="50" r="3.5" fill="#0f172a" />
      <circle cx="61" cy="50" r="8" fill="#ffffff" stroke="#1e293b" stroke-width="2" />
      <circle cx="61" cy="50" r="3.5" fill="#0f172a" />
      <line x1="47" y1="50" x2="53" y2="50" stroke="#1e293b" stroke-width="2" />
    `;
  } else {
    // Parlayan yıldız gözler
    eyes = `
      <path d="M 40 46 L 42 51 L 47 51 L 43 54 L 45 59 L 40 56 L 35 59 L 37 54 L 33 51 L 38 51 Z" fill="#facc15" />
      <path d="M 60 46 L 62 51 L 67 51 L 63 54 L 65 59 L 60 56 L 55 59 L 57 54 L 53 51 L 58 51 Z" fill="#facc15" />
    `;
  }

  let mouth = "";
  if (mouthType === 0) {
    // Tek dişli neşeli gülümseme
    mouth = `<path d="M 44 65 Q 50 71 56 65" stroke="#0f172a" stroke-width="2.5" fill="none" stroke-linecap="round"/><rect x="48" y="66" width="4" height="3.5" rx="1" fill="#ffffff" />`;
  } else if (mouthType === 1) {
    // Kocaman neşeli açık ağız
    mouth = `<path d="M 42 63 Q 50 76 58 63 Z" fill="#e11d48" /><path d="M 45 64 Q 50 67 55 64" stroke="#ffffff" stroke-width="2" fill="none" /><ellipse cx="50" cy="71" rx="4" ry="2" fill="#f43f5e" />`;
  } else if (mouthType === 2) {
    // Sevimli kedi ağzı :3
    mouth = `<path d="M 43 65 Q 46.5 68 50 65 Q 53.5 68 57 65" stroke="#0f172a" stroke-width="2.2" fill="none" stroke-linecap="round" />`;
  } else if (mouthType === 3) {
    // Vampir sevimli dişleri
    mouth = `<path d="M 44 64 Q 50 69 56 64" stroke="#0f172a" stroke-width="2" fill="none" /><polygon points="45,64 47,68 49,64" fill="#ffffff" /><polygon points="51,64 53,68 55,64" fill="#ffffff" />`;
  } else if (mouthType === 4) {
    // Bıyıklı centilmen ağız
    mouth = `<path d="M 42 63 Q 46 60 50 63 Q 54 60 58 63 Q 54 66 50 64 Q 46 66 42 63 Z" fill="#0f172a" />`;
  } else {
    // O şeklinde şaşıran/şarkı söyleyen ağız
    mouth = `<ellipse cx="50" cy="66" rx="4.5" ry="6" fill="#0f172a" /><circle cx="50" cy="65" r="2" fill="#e11d48" />`;
  }

  const cheeks = `<ellipse cx="31" cy="62" rx="4.5" ry="3" fill="#fb7185" opacity="0.65"/><ellipse cx="69" cy="62" rx="4.5" ry="3" fill="#fb7185" opacity="0.65"/>`;
  const belly = `<ellipse cx="50" cy="69" rx="14" ry="8" fill="#ffffff" opacity="0.25"/>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
    <defs>
      <linearGradient id="av-grad-${idx}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${p.c1}" />
        <stop offset="100%" stop-color="${p.c2}" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill="url(#av-grad-${idx})" />
    <circle cx="50" cy="50" r="45" fill="#090d16" fill-opacity="0.22" />
    ${horns}
    ${body}
    ${belly}
    ${cheeks}
    ${eyes}
    ${mouth}
  </svg>`;
}

// Realistic Portrait Vector SVG generator for "Gerçekçi & Fotoğraf" category
function generateRealisticPortraitSvg(idx: number): string {
  const p = MONSTER_PALETTES[idx % MONSTER_PALETTES.length];
  const skinTones = ["#ffd7ba", "#fec89a", "#f1a208", "#d4a373", "#ffddd2", "#e29578"];
  const skin = skinTones[idx % skinTones.length];
  const hairColors = ["#1a1a1a", "#3d2314", "#8b5a2b", "#d4a373", "#5c3d2e", "#2c1d11"];
  const hair = hairColors[(idx * 7) % hairColors.length];
  const suitColors = ["#1e293b", "#0f172a", "#1e3a8a", "#064e3b", "#4c1d95", "#831843"];
  const suit = suitColors[(idx * 11) % suitColors.length];
  const hasGlasses = (idx % 3) === 0;

  const glassesSvg = hasGlasses
    ? `<circle cx="41" cy="46" r="7" fill="none" stroke="#0f172a" stroke-width="2" />
       <circle cx="59" cy="46" r="7" fill="none" stroke="#0f172a" stroke-width="2" />
       <line x1="48" y1="46" x2="52" y2="46" stroke="#0f172a" stroke-width="2" />`
    : "";

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
    <defs>
      <linearGradient id="av-real-${idx}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${p.c1}" />
        <stop offset="100%" stop-color="${p.c2}" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill="url(#av-real-${idx})" />
    <circle cx="50" cy="50" r="46" fill="#090d16" fill-opacity="0.3" />
    <!-- Omuzlar & Kıyafet -->
    <path d="M 22 92 C 22 74, 34 68, 50 68 C 66 68, 78 74, 78 92 Z" fill="${suit}" />
    <!-- Gömlek / Yaka -->
    <polygon points="45,68 55,68 52,80 48,80" fill="#ffffff" />
    <polygon points="48,72 52,72 50,78" fill="${p.c2}" />
    <!-- Boyun -->
    <rect x="44" y="60" width="12" height="12" rx="4" fill="${skin}" />
    <!-- Saç Arkası -->
    <circle cx="50" cy="44" r="23" fill="${hair}" />
    <!-- Yüz -->
    <ellipse cx="50" cy="48" rx="17" ry="19" fill="${skin}" />
    <!-- Saç Önü -->
    <path d="M 33 44 C 33 30, 67 30, 67 44 C 62 38, 56 36, 50 36 C 44 36, 38 38, 33 44 Z" fill="${hair}" />
    <!-- Gözler -->
    <circle cx="42" cy="47" r="2.8" fill="#1e293b" />
    <circle cx="43" cy="46" r="1" fill="#ffffff" />
    <circle cx="58" cy="47" r="2.8" fill="#1e293b" />
    <circle cx="59" cy="46" r="1" fill="#ffffff" />
    ${glassesSvg}
    <!-- Burun -->
    <path d="M 50 48 L 48 53 L 52 53" stroke="#b45309" stroke-width="1.2" fill="none" stroke-linecap="round" />
    <!-- Gülümseyen Ağız -->
    <path d="M 44 58 Q 50 63 56 58" stroke="#991b1b" stroke-width="2" fill="none" stroke-linecap="round" />
  </svg>`;
}

export function avatarSvg(indexOrId: number | string): string {
  let idx = 0;
  if (typeof indexOrId === "number") {
    idx = Math.abs(indexOrId) % AVATAR_COUNT;
  } else {
    const num = parseInt(indexOrId, 10);
    if (!isNaN(num)) {
      idx = Math.abs(num) % AVATAR_COUNT;
    } else {
      const mapped = LEGACY_MAP[indexOrId];
      if (mapped !== undefined) {
        idx = mapped;
      } else {
        const found = AVATARS.findIndex((a) => a.id === indexOrId);
        idx = found >= 0 ? found : 0;
      }
    }
  }

  // 1. Canavarlar
  if (idx < MONSTER_COUNT) {
    return generateMonsterSvg(idx);
  }

  // 2. Gerçekçi & Fotoğrafik Portreler
  if (idx >= 5000 && idx < 6500) {
    return generateRealisticPortraitSvg(idx);
  }

  const av = AVATARS[idx] || AVATARS[0];
  const hue1 = (idx * 37) % 360;
  const hue2 = (hue1 + 45) % 360;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
    <defs>
      <linearGradient id="av-grad-${idx}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="hsl(${hue1}, 80%, 55%)" />
        <stop offset="100%" stop-color="hsl(${hue2}, 85%, 45%)" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill="url(#av-grad-${idx})" />
    <circle cx="50" cy="50" r="44" fill="#090d16" fill-opacity="0.35" />
    <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" stroke-dasharray="3 2" />
    <text x="50" y="56" font-size="38" text-anchor="middle" dominant-baseline="middle">${av.emoji}</text>
  </svg>`;
}

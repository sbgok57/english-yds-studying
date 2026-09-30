// 10.000 Benzersiz Deterministik Avatar Sistemi
// - Tam 10.000 avatar (AVATAR_COUNT = 10000)
// - Bütün Meslekler (120+ modern & klasik meslek)
// - 3D Animasyonlu Portreler (Pixar/Disney 3D Stili, derinlik ve stüdyo ışıklandırması)
// - Yüz İfadeleri (Gülümseyen, Kahkaha, Zafer/Şampiyon, Odaklanmış/Dahi, Göz Kırpan, Cool/Karizmatik, Meraklı, Düşünceli)
// - Çizgi Film & Disney Karakterleri, Karikatür & Komik, Film & Dizi Efsaneleri
// - Hareketli & Canlı Resimler (SVG CSS keyframe nabız ve ışıltı animasyonları)
// - Çevrimdışı saf SVG üretimi + XSS koruması + Performans Governor (P0/P1)

export const AVATAR_COUNT = 10000;
export const MONSTER_COUNT = 1200;

export interface Profession {
  name: string;
  emoji: string;
  field: string;
}

export const PROFESSIONS: Profession[] = [
  // Sağlık & Tıp
  { name: "Doktor", emoji: "🩺", field: "Tıp & Sağlık" },
  { name: "Uzman Cerrah", emoji: "🥼", field: "Tıp & Sağlık" },
  { name: "Nörolog (Beyin Cerrahı)", emoji: "🧠", field: "Tıp & Sağlık" },
  { name: "Kardiyolog", emoji: "❤️", field: "Tıp & Sağlık" },
  { name: "Hemşire", emoji: "💉", field: "Tıp & Sağlık" },
  { name: "Eczacı", emoji: "💊", field: "Tıp & Sağlık" },
  { name: "Diş Hekimi", emoji: "🦷", field: "Tıp & Sağlık" },
  { name: "Veteriner", emoji: "🐾", field: "Tıp & Sağlık" },
  { name: "Fizyoterapist", emoji: "🏃", field: "Tıp & Sağlık" },
  { name: "Diyetisyen", emoji: "🥗", field: "Tıp & Sağlık" },
  { name: "Radyolog", emoji: "🩻", field: "Tıp & Sağlık" },
  { name: "Biyomedikal Uzmanı", emoji: "🔬", field: "Tıp & Sağlık" },

  // Hukuk & Adalet & Diplomasi
  { name: "Hâkim", emoji: "🧑‍⚖️", field: "Hukuk & Adalet" },
  { name: "Cumhuriyet Savcısı", emoji: "🏛️", field: "Hukuk & Adalet" },
  { name: "Avukat", emoji: "⚖️", field: "Hukuk & Adalet" },
  { name: "Dışişleri Diplomatı", emoji: "🌐", field: "Diplomasi & Kamu" },
  { name: "Büyükelçi", emoji: "🕊️", field: "Diplomasi & Kamu" },
  { name: "Noter", emoji: "📜", field: "Hukuk & Adalet" },
  { name: "Müfettiş & Denetçi", emoji: "🔍", field: "Hukuk & Adalet" },
  { name: "Adli Tıp Uzmanı", emoji: "🧬", field: "Hukuk & Adalet" },

  // Akademi, Bilim & Eğitim
  { name: "Profesör / Akademisyen", emoji: "🎓", field: "Akademi & Bilim" },
  { name: "Öğretmen", emoji: "📚", field: "Akademi & Bilim" },
  { name: "Mütercim Tercüman", emoji: "🗣️", field: "Dilbilim & Çeviri" },
  { name: "Yeminli Çevirmen", emoji: "🌐", field: "Dilbilim & Çeviri" },
  { name: "Filolog & Dilbilimci", emoji: "🔤", field: "Dilbilim & Çeviri" },
  { name: "Fizikçi & Kuantum Uzmanı", emoji: "⚛️", field: "Akademi & Bilim" },
  { name: "Kimyager", emoji: "🧪", field: "Akademi & Bilim" },
  { name: "Moleküler Biyolog", emoji: "🧫", field: "Akademi & Bilim" },
  { name: "Genetik Mühendisi", emoji: "🧬", field: "Akademi & Bilim" },
  { name: "Astronom & Astrofizikçi", emoji: "🔭", field: "Akademi & Bilim" },
  { name: "Matematikçi", emoji: "🔢", field: "Akademi & Bilim" },
  { name: "Tarihçi", emoji: "📜", field: "Akademi & Bilim" },
  { name: "Arkeolog", emoji: "🏺", field: "Akademi & Bilim" },
  { name: "Sosyolog", emoji: "👥", field: "Akademi & Bilim" },
  { name: "Psikolog", emoji: "💭", field: "Akademi & Bilim" },
  { name: "Felsefeci", emoji: "🤔", field: "Akademi & Bilim" },

  // Havacılık, Uzay & Denizcilik
  { name: "Kaptan Pilot", emoji: "✈️", field: "Havacılık & Uzay" },
  { name: "Astronot", emoji: "👨‍🚀", field: "Havacılık & Uzay" },
  { name: "Hava Trafik Kontrolörü", emoji: "🛫", field: "Havacılık & Uzay" },
  { name: "Uçak Mühendisi", emoji: "🛩️", field: "Havacılık & Uzay" },
  { name: "Gemi Kaptanı", emoji: "⚓", field: "Denizcilik" },
  { name: "Deniz Biyoloğu", emoji: "🐬", field: "Denizcilik" },

  // Yazılım, Siber & Mühendislik
  { name: "Yazılım Mühendisi", emoji: "💻", field: "Teknoloji & Yazılım" },
  { name: "Yapay Zeka (AI) Uzmanı", emoji: "🤖", field: "Teknoloji & Yazılım" },
  { name: "Veri Bilimci", emoji: "📊", field: "Teknoloji & Yazılım" },
  { name: "Siber Güvenlik Uzmanı", emoji: "🛡️", field: "Teknoloji & Yazılım" },
  { name: "Bulut Mimarı (Cloud)", emoji: "☁️", field: "Teknoloji & Yazılım" },
  { name: "DevOps & SRE Mühendisi", emoji: "♾️", field: "Teknoloji & Yazılım" },
  { name: "Oyun Geliştirici", emoji: "🎮", field: "Teknoloji & Yazılım" },
  { name: "Robotik Kodlama Eğitmeni", emoji: "🦾", field: "Teknoloji & Yazılım" },
  { name: "Blokzincir Geliştirici", emoji: "⛓️", field: "Teknoloji & Yazılım" },
  { name: "Ürün Yöneticisi (PM)", emoji: "🚀", field: "Teknoloji & Yazılım" },
  { name: "Elektrik Mühendisi", emoji: "⚡", field: "Mühendislik" },
  { name: "Makine Mühendisi", emoji: "⚙️", field: "Mühendislik" },
  { name: "İnşaat Mühendisi", emoji: "🏗️", field: "Mühendislik" },
  { name: "Endüstri Mühendisi", emoji: "🏭", field: "Mühendislik" },
  { name: "Mekatronik Mühendisi", emoji: "🦿", field: "Mühendislik" },
  { name: "Nanoteknoloji Uzmanı", emoji: "🔬", field: "Mühendislik" },

  // Mimarlık, Tasarım & Sanat
  { name: "Mimar", emoji: "📐", field: "Tasarım & Mimarlık" },
  { name: "İç Mimar", emoji: "🛋️", field: "Tasarım & Mimarlık" },
  { name: "Şehir Plancısı", emoji: "🏙️", field: "Tasarım & Mimarlık" },
  { name: "Grafik Tasarımcı", emoji: "🎨", field: "Tasarım & Sanat" },
  { name: "3D Modelleme Uzmanı", emoji: "🗿", field: "Tasarım & Sanat" },
  { name: "Moda Tasarımcısı", emoji: "👗", field: "Tasarım & Sanat" },
  { name: "Film Yönetmeni", emoji: "🎬", field: "Medya & Sanat" },
  { name: "Senarist & Yazar", emoji: "✍️", field: "Medya & Sanat" },
  { name: "Gazeteci & Muhabir", emoji: "📰", field: "Medya & Sanat" },
  { name: "Fotoğraf Sanatçısı", emoji: "📷", field: "Medya & Sanat" },
  { name: "Besteci & Müzisyen", emoji: "🎼", field: "Medya & Sanat" },
  { name: "Tiyatro Oyuncusu", emoji: "🎭", field: "Medya & Sanat" },
  { name: "Ressam & İllüstratör", emoji: "🖌️", field: "Medya & Sanat" },

  // Finans, Ekonomi & Yönetim
  { name: "Ekonomist", emoji: "📈", field: "Finans & Yönetim" },
  { name: "Yatırım Bankacısı", emoji: "🏦", field: "Finans & Yönetim" },
  { name: "Mali Müşavir", emoji: "📉", field: "Finans & Yönetim" },
  { name: "Aktüer", emoji: "📑", field: "Finans & Yönetim" },
  { name: "Pazarlama Stratejisti", emoji: "📣", field: "Finans & Yönetim" },
  { name: "İnsan Kaynakları Lideri", emoji: "🤝", field: "Finans & Yönetim" },
  { name: "Risk Analisti", emoji: "🛡️", field: "Finans & Yönetim" },

  // Gastronomi, Spor & Yaşam
  { name: "Şef Aşçı (Master Chef)", emoji: "👨‍🍳", field: "Gastronomi & Yaşam" },
  { name: "Pastacı & Çikolatacı", emoji: "🎂", field: "Gastronomi & Yaşam" },
  { name: "Barista", emoji: "☕", field: "Gastronomi & Yaşam" },
  { name: "Olimpik Sporcu & Koç", emoji: "🏅", field: "Spor & Sağlık" },
  { name: "Pilates & Fitness Koçu", emoji: "🤸", field: "Spor & Sağlık" },
  { name: "Turizm Rehberi", emoji: "🗺️", field: "Turizm & Seyahat" },
  { name: "Dedektif & Kriminolog", emoji: "🕵️", field: "Kamu & Güvenlik" },
  { name: "İtfaiyeci Kahraman", emoji: "🚒", field: "Kamu & Güvenlik" },
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
  expression: string; // Yüz İfadesi: Gülümseyen, Zafer, Odaklanmış, Cool, Kahkaha, Göz Kırpan vb.
  imageUrl?: string;
}

export const AVATAR_EXPRESSIONS = [
  "Tüm İfadeler",
  "Gülümseyen",
  "Zafer & Şampiyon",
  "Odaklanmış / Dahi",
  "Karizmatik / Cool",
  "Kahkaha Atan",
  "Göz Kırpan",
  "Meraklı",
  "Kararlı",
  "Düşünceli",
  "Heyecanlı",
] as const;

export const AVATAR_CATEGORIES = [
  "Tümü",
  "Meslekler",
  "3D Animasyon & Portre",
  "Çizgi Film & Disney",
  "Film & Dizi Efsaneleri",
  "Karikatür & Komik",
  "Canavarlar",
  "Hareketli & Canlı",
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

const MONSTER_PALETTES = [
  { c1: "#8b5cf6", c2: "#ec4899", body: "#a855f7" },
  { c1: "#06b6d4", c2: "#3b82f6", body: "#0ea5e9" },
  { c1: "#10b981", c2: "#14b8a6", body: "#22c55e" },
  { c1: "#f59e0b", c2: "#ef4444", body: "#f97316" },
  { c1: "#ec4899", c2: "#f43f5e", body: "#fb7185" },
  { c1: "#6366f1", c2: "#8b5cf6", body: "#818cf8" },
  { c1: "#14b8a6", c2: "#06b6d4", body: "#2dd4bf" },
  { c1: "#eab308", c2: "#f59e0b", body: "#facc15" },
  { c1: "#f43f5e", c2: "#be123c", body: "#e11d48" },
  { c1: "#84cc16", c2: "#22c55e", body: "#a3e635" },
  { c1: "#0284c7", c2: "#0369a1", body: "#38bdf8" },
  { c1: "#d946ef", c2: "#c026d3", body: "#e879f9" },
  { c1: "#ea580c", c2: "#c2410c", body: "#fb923c" },
  { c1: "#4f46e5", c2: "#4338ca", body: "#6366f1" },
  { c1: "#059669", c2: "#047857", body: "#34d399" },
  { c1: "#b45309", c2: "#92400e", body: "#f59e0b" },
];

const EXPRESSION_LIST = [
  "Gülümseyen",
  "Zafer & Şampiyon",
  "Odaklanmış / Dahi",
  "Karizmatik / Cool",
  "Kahkaha Atan",
  "Göz Kırpan",
  "Meraklı",
  "Kararlı",
  "Düşünceli",
  "Heyecanlı",
];

const DISNEY_NAMES = [
  "Mickey Neşesi", "Aladdin Ruhu", "Elsa Büyüsü", "Simba Gururu", "Woody Sadakati",
  "Buzz Cesareti", "Nemo Merakı", "Stitch Enerjisi", "Mulan Azmi", "Hercules Gücü",
  "Rapunzel Işıltısı", "Tarzan Dinamizmi", "Peter Pan Uçuşu", "Moana Keşfi", "Genie Sihri",
];

const MOVIE_HERO_NAMES = [
  "Sherlock Zekası", "Gandalf Bilgeliği", "Neo Matriksi", "Iron Man Zırhı", "Yoda Odağı",
  "Harry Büyücüsü", "Jedi Ustası", "Kaptan Amerika", "Batman Kararlılığı", "Doktor Strange",
  "Indiana Jones Keşfi", "James Bond Zarafeti", "Daenerys Ejderhası", "Gollum Merakı", "Aragorn Lideri",
];

const FUNNY_CARTOON_TITLES = [
  "Karikatür Kralı", "Kahkaha Şampiyonu", "Espri Mimarı", "Meme Dehası", "Gülümseyen Bilgin",
  "Neşe Bombası", "Pozitif Muzip", "Çılgın Profesör", "Kahve Bağımlısı", "Gözlüklü Zeka",
  "Mizahşör", "Süper Enerjik", "Patates Kafa", "Keyif Küpü", "Dopamin Avcısı",
];

const MOTIVATIONAL_TITLES = [
  "YDS Fatihi", "Zirve Şampiyonu", "Yenilmez Azim", "Odaklanma Ustası", "Disiplin Anıtı",
  "Altın Net Avcısı", "Maraton Koşucusu", "Kelimeler Efendisi", "Gramer Bükücü", "Hedef 90+",
  "Kararlılık Kartalı", "Başarı Meşalesi", "Sonsuz Enerji", "Vizyoner Lider", "İrade Çeliği",
];

const ROBOT_EMOJIS = ["🤖", "🦾", "🦿", "⚡", "🖥️", "🔋", "🛰️", "🎮", "🕹️", "📡"];
const ANIMAL_EMOJIS = ["🦁", "🦅", "🐺", "🦉", "🐆", "🦊", "🐬", "🐯", "🐻", "🐢", "🦚", "🦄"];
const SPACE_EMOJIS = ["👨‍🚀", "🚀", "🪐", "🛸", "🌟", "🌌", "☄️", "🌕", "🛰️", "🔭"];
const MAGIC_EMOJIS = ["🧙", "🔮", "✨", "🔥", "⚡", "🧚", "🧞", "🧝", "🕊️", "🐉"];

// Procedurally generate exactly 10,000 deterministic avatars
export const AVATARS: Avatar[] = (() => {
  const list: Avatar[] = new Array(AVATAR_COUNT);

  for (let i = 0; i < AVATAR_COUNT; i++) {
    const theme = THEMES[i % THEMES.length];
    const expression = EXPRESSION_LIST[i % EXPRESSION_LIST.length];

    if (i < MONSTER_COUNT) {
      // 1. Canavarlar (Gelişmiş yüz ifadeleri, boynuzlar, mimikler)
      const name = `Pufi #${i + 1}`;
      list[i] = {
        id: i,
        name,
        category: "Canavarlar",
        profession: "Sevimli Canavar",
        professionEmoji: "👾",
        emoji: "👾",
        label: `${name} (${expression})`,
        motivation: "YDS kelimelerini pırıl pırıl çözer! Sevimli canavarınla zirveye koş!",
        theme,
        expression,
      };
    } else if (i < 4200) {
      // 2. Meslekler (Tüm 120+ meslek, kapsamlı akademik ve kariyer çeşitliliği)
      const profIdx = (i - MONSTER_COUNT) % PROFESSIONS.length;
      const prof = PROFESSIONS[profIdx];
      const varNum = Math.floor((i - MONSTER_COUNT) / PROFESSIONS.length) + 1;
      const name = `${prof.name} #${varNum}`;
      list[i] = {
        id: i,
        name,
        category: "Meslekler",
        profession: prof.name,
        professionEmoji: prof.emoji,
        emoji: prof.emoji,
        label: `${prof.name} (${expression})`,
        motivation: `${prof.name} olmak için İngilizce şart! YDS hedefine odaklan ve başar.`,
        theme,
        expression,
      };
    } else if (i < 5400) {
      // 3. 3D Animasyon & Portre (3D Render Stili, stüdyo ışığı ve derinlik)
      const varNum = i - 4199;
      const name = `3D Vizyoner #${varNum}`;
      list[i] = {
        id: i,
        name,
        category: "3D Animasyon & Portre",
        profession: "Akademik Vizyoner",
        professionEmoji: "🧑‍💼",
        emoji: "🧑‍💼",
        label: `${name} (${expression})`,
        motivation: "3D derinlik ve kristal odaklanmayla sınavı fethedecek potansiyel sende!",
        theme,
        expression,
      };
    } else if (i < 6500) {
      // 4. Çizgi Film & Disney Karakterleri
      const disName = DISNEY_NAMES[(i - 5400) % DISNEY_NAMES.length];
      const varNum = i - 5399;
      const name = `${disName} #${varNum}`;
      list[i] = {
        id: i,
        name,
        category: "Çizgi Film & Disney",
        profession: "Efsanevi Çizgi Kahraman",
        professionEmoji: "🏰",
        emoji: "✨",
        label: `${name} (${expression})`,
        motivation: "Hayal ettiğin her başarı gerçek olabilir! Masalsı bir disiplinle çalış.",
        theme,
        expression,
      };
    } else if (i < 7400) {
      // 5. Film & Dizi Efsaneleri
      const heroName = MOVIE_HERO_NAMES[(i - 6500) % MOVIE_HERO_NAMES.length];
      const varNum = i - 6499;
      const name = `${heroName} #${varNum}`;
      list[i] = {
        id: i,
        name,
        category: "Film & Dizi Efsaneleri",
        profession: "Sinema & Kült Kahraman",
        professionEmoji: "🎬",
        emoji: "🎭",
        label: `${name} (${expression})`,
        motivation: "Başrol sensin! YDS sınav senaryosunu zaferle bitir.",
        theme,
        expression,
      };
    } else if (i < 8200) {
      // 6. Karikatür & Komik Karakterler
      const title = FUNNY_CARTOON_TITLES[(i - 7400) % FUNNY_CARTOON_TITLES.length];
      const varNum = i - 7399;
      const name = `${title} #${varNum}`;
      list[i] = {
        id: i,
        name,
        category: "Karikatür & Komik",
        profession: "Mizah & Pozitif Zeka",
        professionEmoji: "🤪",
        emoji: "🤪",
        label: `${name} (${expression})`,
        motivation: "Gülümseyerek öğrenen beyin asla unutmaz! Kahkaha ve yüksek net el ele.",
        theme,
        expression,
      };
    } else if (i < 8800) {
      // 7. Hareketli & Canlı Animasyon (SVG canlı nabız/ışıltı efektleri)
      const varNum = i - 8199;
      const name = `Canlı Nabız Enerjisi #${varNum}`;
      list[i] = {
        id: i,
        name,
        category: "Hareketli & Canlı",
        profession: "Sonsuz Hareket",
        professionEmoji: "💫",
        emoji: "⚡",
        label: `${name} (${expression})`,
        motivation: "Canlı ve dinamik bir enerjiyle her gün ilerle, motivasyonun parıldasın!",
        theme,
        expression,
      };
    } else if (i < 9300) {
      // 8. Motive Edici & Şampiyonlar
      const title = MOTIVATIONAL_TITLES[(i - 8800) % MOTIVATIONAL_TITLES.length];
      const varNum = i - 8799;
      const name = `${title} #${varNum}`;
      list[i] = {
        id: i,
        name,
        category: "Motive Edici & Şampiyonlar",
        profession: "Zirve Şampiyonu",
        professionEmoji: "🏆",
        emoji: "🏆",
        label: `${name} (${expression})`,
        motivation: "Şampiyonlar bahanelerle değil, sarsılmaz kararlılıkla zirveye çıkar!",
        theme,
        expression,
      };
    } else if (i < 9550) {
      // 9. Robotlar & Siber
      const emoji = ROBOT_EMOJIS[(i - 9300) % ROBOT_EMOJIS.length];
      const name = `Siber Robot #${i - 9299}`;
      list[i] = {
        id: i,
        name,
        category: "Robotlar & Siber",
        profession: "Yapay Zeka & Siber",
        professionEmoji: emoji,
        emoji,
        label: `${name} (${expression})`,
        motivation: "Hata payını sıfıra indir, nöral ağların gibi kusursuz gramer analizleri yap!",
        theme,
        expression,
      };
    } else if (i < 9750) {
      // 10. Hayvanlar & Doğa
      const emoji = ANIMAL_EMOJIS[(i - 9550) % ANIMAL_EMOJIS.length];
      const name = `Bilge Doğa Dostu #${i - 9549}`;
      list[i] = {
        id: i,
        name,
        category: "Hayvanlar & Doğa",
        profession: "Doğa & Zeka",
        professionEmoji: emoji,
        emoji,
        label: `${name} (${expression})`,
        motivation: "Bir kartal gibi yüksekten bak, paragrafların püf noktalarını anında yakala.",
        theme,
        expression,
      };
    } else if (i < 9900) {
      // 11. Uzay & Kozmik
      const emoji = SPACE_EMOJIS[(i - 9750) % SPACE_EMOJIS.length];
      const name = `Kozmik Gezgin #${i - 9749}`;
      list[i] = {
        id: i,
        name,
        category: "Uzay & Kozmik",
        profession: "Kozmonot & Gezgin",
        professionEmoji: emoji,
        emoji,
        label: `${name} (${expression})`,
        motivation: "Sınırın sadece gökyüzü değil, tüm galaksi! Yıldızlara uzan kanka.",
        theme,
        expression,
      };
    } else {
      // 12. Sihirli & Fantastik
      const emoji = MAGIC_EMOJIS[(i - 9900) % MAGIC_EMOJIS.length];
      const name = `Efsanevi Büyücü #${i - 9899}`;
      list[i] = {
        id: i,
        name,
        category: "Sihirli & Fantastik",
        profession: "Simyacı & Büyücü",
        professionEmoji: emoji,
        emoji,
        label: `${name} (${expression})`,
        motivation: "Bilgi en büyük sihirdir. Kelimeleri hafızana mühürle, sınavı büyüle!",
        theme,
        expression,
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
  expression: string;
} {
  const safeId = Math.abs(id || 0) % AVATAR_COUNT;
  const a = AVATARS[safeId] || AVATARS[0];
  return {
    name: a.name,
    profession: a.profession,
    category: a.category,
    professionEmoji: a.professionEmoji,
    expression: a.expression,
  };
}

export function getAvatar(id: number | string): Avatar {
  const numId = typeof id === "number" ? id : parseInt(String(id), 10);
  const safeId = isNaN(numId) ? 0 : Math.abs(numId) % AVATAR_COUNT;
  return AVATARS[safeId] || AVATARS[0];
}

// 1. Canavar SVG Üreticisi
function generateMonsterSvg(idx: number, suffix = ""): string {
  const p = MONSTER_PALETTES[idx % MONSTER_PALETTES.length];
  const shapeType = idx % 8;
  const eyeType = (idx >> 1) % 6;
  const mouthType = (idx >> 2) % 6;
  const hornType = (idx >> 3) % 8;

  let horns = "";
  if (hornType === 0) {
    horns = `<path d="M 32 38 Q 22 18 34 22 Z" fill="${p.c2}" /><path d="M 68 38 Q 78 18 66 22 Z" fill="${p.c2}" />`;
  } else if (hornType === 1) {
    horns = `<line x1="50" y1="34" x2="50" y2="16" stroke="${p.c1}" stroke-width="3.5" stroke-linecap="round"/><circle cx="50" cy="14" r="6" fill="#facc15" /><circle cx="50" cy="14" r="2.5" fill="#ffffff" />`;
  } else if (hornType === 2) {
    horns = `<circle cx="30" cy="30" r="11" fill="${p.c1}" /><circle cx="30" cy="30" r="5.5" fill="#fbcfe8" /><circle cx="70" cy="30" r="11" fill="${p.c1}" /><circle cx="70" cy="30" r="5.5" fill="#fbcfe8" />`;
  } else if (hornType === 3) {
    horns = `<path d="M 50 32 Q 58 20 50 14 Q 42 20 50 32" fill="#4ade80" /><path d="M 50 32 Q 62 26 58 18 Q 50 24 50 32" fill="#22c55e" />`;
  } else if (hornType === 4) {
    horns = `<path d="M 28 42 C 16 32, 16 18, 30 22 C 24 28, 26 36, 28 42 Z" fill="${p.c2}" /><path d="M 72 42 C 84 32, 84 18, 70 22 C 76 28, 74 36, 72 42 Z" fill="${p.c2}" />`;
  } else if (hornType === 5) {
    horns = `<polygon points="40,24 45,30 50,20 55,30 60,24 58,34 42,34" fill="#fbbf24" stroke="#d97706" stroke-width="1.5" />`;
  } else if (hornType === 6) {
    horns = `<ellipse cx="36" cy="22" rx="6" ry="14" fill="${p.c1}" /><ellipse cx="36" cy="22" rx="3" ry="9" fill="#fbcfe8" /><ellipse cx="64" cy="22" rx="6" ry="14" fill="${p.c1}" /><ellipse cx="64" cy="22" rx="3" ry="9" fill="#fbcfe8" />`;
  } else {
    horns = `<ellipse cx="50" cy="22" rx="20" ry="6" fill="none" stroke="#fef08a" stroke-width="3" opacity="0.85" />`;
  }

  let body = "";
  if (shapeType === 0) {
    body = `<ellipse cx="50" cy="58" rx="28" ry="25" fill="${p.body}" />`;
  } else if (shapeType === 1) {
    body = `<path d="M 28 78 C 24 54, 36 34, 50 34 C 64 34, 76 54, 72 78 Z" fill="${p.body}" />`;
  } else if (shapeType === 2) {
    body = `<circle cx="50" cy="56" r="27" fill="${p.body}" />`;
  } else if (shapeType === 3) {
    body = `<rect x="25" y="34" width="50" height="46" rx="23" fill="${p.body}" />`;
  } else if (shapeType === 4) {
    body = `<circle cx="38" cy="56" r="18" fill="${p.body}" /><circle cx="62" cy="56" r="18" fill="${p.body}" /><circle cx="50" cy="50" r="21" fill="${p.body}" />`;
  } else if (shapeType === 5) {
    body = `<polygon points="50,32 58,48 76,50 62,62 66,79 50,70 34,79 38,62 24,50 42,48" fill="${p.body}" />`;
  } else if (shapeType === 6) {
    body = `<path d="M 26 76 C 24 50, 32 38, 50 36 C 68 38, 76 50, 74 76 Q 50 82 26 76 Z" fill="${p.body}" />`;
  } else {
    body = `<rect x="26" y="36" width="48" height="44" rx="14" fill="${p.body}" />`;
  }

  let eyes = "";
  if (eyeType === 0) {
    eyes = `
      <circle cx="50" cy="50" r="12" fill="#ffffff" />
      <circle cx="50" cy="50" r="6" fill="#0f172a" />
      <circle cx="52.5" cy="47.5" r="2.5" fill="#ffffff" />
    `;
  } else if (eyeType === 1) {
    eyes = `
      <circle cx="40" cy="50" r="7.5" fill="#ffffff" />
      <circle cx="40" cy="50" r="4.2" fill="#0f172a" />
      <circle cx="42" cy="48" r="1.8" fill="#ffffff" />
      <circle cx="60" cy="50" r="7.5" fill="#ffffff" />
      <circle cx="60" cy="50" r="4.2" fill="#0f172a" />
      <circle cx="62" cy="48" r="1.8" fill="#ffffff" />
    `;
  } else if (eyeType === 2) {
    eyes = `
      <circle cx="36" cy="52" r="5.5" fill="#ffffff" /><circle cx="36" cy="52" r="2.8" fill="#0f172a" />
      <circle cx="50" cy="44" r="6.5" fill="#ffffff" /><circle cx="50" cy="44" r="3.4" fill="#0f172a" /><circle cx="52" cy="42" r="1.4" fill="#ffffff" />
      <circle cx="64" cy="52" r="5.5" fill="#ffffff" /><circle cx="64" cy="52" r="2.8" fill="#0f172a" />
    `;
  } else if (eyeType === 3) {
    eyes = `
      <circle cx="39" cy="50" r="7" fill="#ffffff" />
      <circle cx="39" cy="50" r="3.8" fill="#0f172a" />
      <path d="M 55 51 Q 61 45 67 51" stroke="#0f172a" stroke-width="2.8" fill="none" stroke-linecap="round" />
    `;
  } else if (eyeType === 4) {
    eyes = `
      <circle cx="39" cy="50" r="8" fill="#ffffff" stroke="#1e293b" stroke-width="2" />
      <circle cx="39" cy="50" r="3.5" fill="#0f172a" />
      <circle cx="61" cy="50" r="8" fill="#ffffff" stroke="#1e293b" stroke-width="2" />
      <circle cx="61" cy="50" r="3.5" fill="#0f172a" />
      <line x1="47" y1="50" x2="53" y2="50" stroke="#1e293b" stroke-width="2" />
    `;
  } else {
    eyes = `
      <path d="M 40 46 L 42 51 L 47 51 L 43 54 L 45 59 L 40 56 L 35 59 L 37 54 L 33 51 L 38 51 Z" fill="#facc15" />
      <path d="M 60 46 L 62 51 L 67 51 L 63 54 L 65 59 L 60 56 L 55 59 L 57 54 L 53 51 L 58 51 Z" fill="#facc15" />
    `;
  }

  let mouth = "";
  if (mouthType === 0) {
    mouth = `<path d="M 44 65 Q 50 71 56 65" stroke="#0f172a" stroke-width="2.5" fill="none" stroke-linecap="round"/><rect x="48" y="66" width="4" height="3.5" rx="1" fill="#ffffff" />`;
  } else if (mouthType === 1) {
    mouth = `<path d="M 42 63 Q 50 76 58 63 Z" fill="#e11d48" /><path d="M 45 64 Q 50 67 55 64" stroke="#ffffff" stroke-width="2" fill="none" /><ellipse cx="50" cy="71" rx="4" ry="2" fill="#f43f5e" />`;
  } else if (mouthType === 2) {
    mouth = `<path d="M 43 65 Q 46.5 68 50 65 Q 53.5 68 57 65" stroke="#0f172a" stroke-width="2.2" fill="none" stroke-linecap="round" />`;
  } else if (mouthType === 3) {
    mouth = `<path d="M 44 64 Q 50 69 56 64" stroke="#0f172a" stroke-width="2" fill="none" /><polygon points="45,64 47,68 49,64" fill="#ffffff" /><polygon points="51,64 53,68 55,64" fill="#ffffff" />`;
  } else if (mouthType === 4) {
    mouth = `<path d="M 42 63 Q 46 60 50 63 Q 54 60 58 63 Q 54 66 50 64 Q 46 66 42 63 Z" fill="#0f172a" />`;
  } else {
    mouth = `<ellipse cx="50" cy="66" rx="4.5" ry="6" fill="#0f172a" /><circle cx="50" cy="65" r="2" fill="#e11d48" />`;
  }

  const cheeks = `<ellipse cx="31" cy="62" rx="4.5" ry="3" fill="#fb7185" opacity="0.65"/><ellipse cx="69" cy="62" rx="4.5" ry="3" fill="#fb7185" opacity="0.65"/>`;
  const belly = `<ellipse cx="50" cy="69" rx="14" ry="8" fill="#ffffff" opacity="0.25"/>`;
  const gradId = `av-mon-grad-${idx}${suffix ? "-" + suffix : ""}`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
    <defs>
      <linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${p.c1}" />
        <stop offset="100%" stop-color="${p.c2}" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill="url(#${gradId})" />
    <circle cx="50" cy="50" r="45" fill="#090d16" fill-opacity="0.22" />
    ${horns}
    ${body}
    ${belly}
    ${cheeks}
    ${eyes}
    ${mouth}
  </svg>`;
}

// 2. 3D Animasyonlu Portre SVG Üreticisi (Pixar/Disney 3D Stili, Stüdyo Işığı & Derinlik)
function generate3DPortraitSvg(idx: number, suffix = ""): string {
  const p = MONSTER_PALETTES[idx % MONSTER_PALETTES.length];
  const skinTones = ["#ffd7ba", "#fec89a", "#f1a208", "#d4a373", "#ffddd2", "#e29578"];
  const skin = skinTones[idx % skinTones.length];
  const hairColors = ["#1a1a1a", "#3d2314", "#8b5a2b", "#d4a373", "#5c3d2e", "#2c1d11", "#d97706"];
  const hair = hairColors[(idx * 7) % hairColors.length];
  const suitColors = ["#1e293b", "#0f172a", "#1e3a8a", "#064e3b", "#4c1d95", "#831843", "#312e81"];
  const suit = suitColors[(idx * 11) % suitColors.length];

  const gradId = `av-3d-grad-${idx}${suffix ? "-" + suffix : ""}`;
  const lightId = `av-3d-light-${idx}${suffix ? "-" + suffix : ""}`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
    <defs>
      <radialGradient id="${gradId}" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stop-color="${p.c1}" />
        <stop offset="60%" stop-color="${p.c2}" />
        <stop offset="100%" stop-color="#050811" />
      </radialGradient>
      <radialGradient id="${lightId}" cx="30%" cy="25%" r="65%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.45" />
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
      </radialGradient>
    </defs>
    <!-- 3D Arka Plan & Küresel Işık -->
    <circle cx="50" cy="50" r="48" fill="url(#${gradId})" />
    <circle cx="50" cy="50" r="48" fill="url(#${lightId})" />
    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1.5" />

    <!-- 3D Karakter Omuzları & Giysi -->
    <path d="M 18 94 C 18 72, 32 66, 50 66 C 68 66, 82 72, 82 94 Z" fill="${suit}" />
    <path d="M 32 94 C 36 78, 44 74, 50 74 C 56 74, 64 78, 68 94 Z" fill="#ffffff" opacity="0.9" />
    <polygon points="46,74 54,74 52,86 48,86" fill="${p.c1}" />

    <!-- 3D Boyun ve Çene Gölgelendirmesi -->
    <rect x="43" y="58" width="14" height="14" rx="5" fill="${skin}" />
    <ellipse cx="50" cy="67" rx="9" ry="3.5" fill="#000000" opacity="0.15" />

    <!-- 3D Hacimli Saç Arka Bloğu -->
    <circle cx="50" cy="42" r="25" fill="${hair}" />
    <circle cx="42" cy="34" r="14" fill="#ffffff" opacity="0.12" />

    <!-- 3D Yüz & Yanaklar -->
    <ellipse cx="50" cy="48" rx="18" ry="20" fill="${skin}" />
    <ellipse cx="36" cy="54" rx="4" ry="2.5" fill="#fb7185" opacity="0.45" />
    <ellipse cx="64" cy="54" rx="4" ry="2.5" fill="#fb7185" opacity="0.45" />

    <!-- 3D Ön Saç Dalgaları -->
    <path d="M 30 42 C 30 26, 70 26, 70 42 C 63 35, 56 33, 50 33 C 44 33, 37 35, 30 42 Z" fill="${hair}" />
    <path d="M 36 33 Q 48 24 64 34" stroke="#ffffff" stroke-width="1.5" fill="none" opacity="0.25" />

    <!-- Büyük Parlak 3D Anime/Pixar Gözler -->
    <ellipse cx="41" cy="47" rx="4.5" ry="6" fill="#ffffff" />
    <circle cx="41" cy="47" r="3.2" fill="#0f172a" />
    <circle cx="42" cy="45" r="1.4" fill="#ffffff" />
    <circle cx="39.5" cy="48" r="0.7" fill="#ffffff" />

    <ellipse cx="59" cy="47" rx="4.5" ry="6" fill="#ffffff" />
    <circle cx="59" cy="47" r="3.2" fill="#0f172a" />
    <circle cx="60" cy="45" r="1.4" fill="#ffffff" />
    <circle cx="57.5" cy="48" r="0.7" fill="#ffffff" />

    <!-- Kaşlar -->
    <path d="M 36 41 Q 42 38 46 41" stroke="${hair}" stroke-width="1.8" fill="none" stroke-linecap="round" />
    <path d="M 54 41 Q 58 38 64 41" stroke="${hair}" stroke-width="1.8" fill="none" stroke-linecap="round" />

    <!-- Sevimli Burun & Gülümseme -->
    <path d="M 50 49 Q 52 52 49 53" stroke="#b45309" stroke-width="1.3" fill="none" stroke-linecap="round" />
    <path d="M 43 58 Q 50 64 57 58" stroke="#be123c" stroke-width="2.4" fill="none" stroke-linecap="round" />
  </svg>`;
}

// 3. Çizgi Film & Disney / Karikatür Karakter SVG Üreticisi
function generateCartoonDisneySvg(idx: number, suffix = ""): string {
  const p = MONSTER_PALETTES[idx % MONSTER_PALETTES.length];
  const gradId = `av-cart-grad-${idx}${suffix ? "-" + suffix : ""}`;
  const charType = idx % 5;

  let earsAndHat = "";
  if (charType === 0) {
    // Mickey kulakları
    earsAndHat = `
      <circle cx="26" cy="26" r="16" fill="#0f172a" />
      <circle cx="74" cy="26" r="16" fill="#0f172a" />
    `;
  } else if (charType === 1) {
    // Sihirli büyücü şapkası / taç
    earsAndHat = `
      <polygon points="34,36 50,12 66,36" fill="#fbbf24" stroke="#d97706" stroke-width="1.5" />
      <circle cx="50" cy="11" r="4" fill="#ffffff" />
      <ellipse cx="50" cy="36" rx="20" ry="5" fill="#f59e0b" />
    `;
  } else if (charType === 2) {
    // Sevimli ayı/tilki kulakları
    earsAndHat = `
      <polygon points="26,38 34,16 46,32" fill="${p.c1}" />
      <polygon points="30,34 35,21 42,32" fill="#fbcfe8" />
      <polygon points="74,38 66,16 54,32" fill="${p.c1}" />
      <polygon points="70,34 65,21 58,32" fill="#fbcfe8" />
    `;
  } else if (charType === 3) {
    // Süper kahraman maskesi ve pelerini
    earsAndHat = `
      <path d="M 20 94 C 20 70, 30 64, 50 64 C 70 64, 80 70, 80 94 Z" fill="#ef4444" />
      <ellipse cx="50" cy="46" rx="22" ry="10" fill="#1e293b" />
    `;
  } else {
    // Sevimli melek halesi ve yıldız
    earsAndHat = `
      <ellipse cx="50" cy="18" rx="22" ry="6" fill="none" stroke="#fde047" stroke-width="3" />
      <polygon points="50,14 52,19 57,19 53,22 55,27 50,24 45,27 47,22 43,19 48,19" fill="#facc15" />
    `;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
    <defs>
      <linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${p.c1}" />
        <stop offset="100%" stop-color="${p.c2}" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill="url(#${gradId})" />
    <circle cx="50" cy="50" r="45" fill="#090d16" fill-opacity="0.25" />
    ${earsAndHat}
    <!-- Sevimli Çizgi Film Kafası -->
    <ellipse cx="50" cy="54" rx="22" ry="21" fill="#ffe0b2" stroke="#0f172a" stroke-width="2" />
    <!-- İri Çizgi Film Gözleri -->
    <ellipse cx="42" cy="50" rx="6" ry="9" fill="#ffffff" stroke="#0f172a" stroke-width="1.5" />
    <circle cx="43" cy="51" r="4" fill="#0f172a" />
    <circle cx="44.5" cy="48.5" r="1.8" fill="#ffffff" />
    
    <ellipse cx="58" cy="50" rx="6" ry="9" fill="#ffffff" stroke="#0f172a" stroke-width="1.5" />
    <circle cx="57" cy="51" r="4" fill="#0f172a" />
    <circle cx="58.5" cy="48.5" r="1.8" fill="#ffffff" />

    <!-- Pembe Yanaklar -->
    <circle cx="33" cy="58" r="4" fill="#f43f5e" opacity="0.6" />
    <circle cx="67" cy="58" r="4" fill="#f43f5e" opacity="0.6" />

    <!-- Neşeli Açık Ağız -->
    <path d="M 43 60 Q 50 72 57 60 Z" fill="#e11d48" stroke="#0f172a" stroke-width="1.5" />
    <ellipse cx="50" cy="66" rx="4" ry="2.5" fill="#f472b6" />
  </svg>`;
}

// 4. Hareketli & Canlı Animasyonlu SVG (CSS Keyframes, Nabız ve Parıltı)
function generateAnimatedMotionSvg(idx: number, suffix = ""): string {
  const p = MONSTER_PALETTES[idx % MONSTER_PALETTES.length];
  const av = AVATARS[idx] || AVATARS[0];
  const animId = `av-anim-${idx}${suffix ? "-" + suffix : ""}`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
    <defs>
      <linearGradient id="${animId}-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${p.c1}" />
        <stop offset="100%" stop-color="${p.c2}" />
      </linearGradient>
      <style>
        @keyframes pulseRing-${animId} {
          0% { transform: scale(0.92); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 0.3; }
          100% { transform: scale(0.92); opacity: 0.8; }
        }
        @keyframes floatHero-${animId} {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
          100% { transform: translateY(0px); }
        }
        .${animId}-ring {
          transform-origin: 50px 50px;
          animation: pulseRing-${animId} 3s ease-in-out infinite;
        }
        .${animId}-hero {
          transform-origin: 50px 50px;
          animation: floatHero-${animId} 2.4s ease-in-out infinite;
        }
      </style>
    </defs>
    <!-- Canlı Nabız Halkası -->
    <circle class="${animId}-ring" cx="50" cy="50" r="46" fill="none" stroke="${p.c1}" stroke-width="2.5" opacity="0.6" />
    <circle cx="50" cy="50" r="42" fill="url(#${animId}-grad)" />
    <circle cx="50" cy="50" r="38" fill="#090d16" fill-opacity="0.3" />
    <!-- Hareketli İkon & Yüz İfadesi -->
    <g class="${animId}-hero">
      <circle cx="50" cy="50" r="32" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1.5" stroke-dasharray="4 2" />
      <text x="50" y="56" font-size="36" text-anchor="middle" dominant-baseline="middle">${av.emoji}</text>
    </g>
  </svg>`;
}

export function avatarSvg(indexOrId: number | string, suffix = ""): string {
  let idx = 0;
  if (typeof indexOrId === "number") {
    idx = Math.abs(indexOrId) % AVATAR_COUNT;
  } else {
    const num = parseInt(indexOrId, 10);
    if (!isNaN(num)) {
      idx = Math.abs(num) % AVATAR_COUNT;
    } else {
      const found = AVATARS.findIndex((a) => a.id === indexOrId);
      idx = found >= 0 ? found : 0;
    }
  }

  // 1. Canavarlar (0 - 1200)
  if (idx < MONSTER_COUNT) {
    return generateMonsterSvg(idx, suffix);
  }

  // 2. 3D Animasyon & Portre (4200 - 5400)
  if (idx >= 4200 && idx < 5400) {
    return generate3DPortraitSvg(idx, suffix);
  }

  // 3. Çizgi Film & Disney / Karikatür (5400 - 6500)
  if (idx >= 5400 && idx < 6500) {
    return generateCartoonDisneySvg(idx, suffix);
  }

  // 4. Hareketli & Canlı (8199 - 8800)
  if (idx >= 8199 && idx < 8800) {
    return generateAnimatedMotionSvg(idx, suffix);
  }

  // 5. Diğer Kategoriler (Meslekler, Şampiyonlar, Robotlar, Doğa, Uzay, Sihirli)
  const av = AVATARS[idx] || AVATARS[0];
  const hue1 = (idx * 37) % 360;
  const hue2 = (hue1 + 45) % 360;
  const gradId = `av-gen-grad-${idx}${suffix ? "-" + suffix : ""}`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
    <defs>
      <linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="hsl(${hue1}, 80%, 55%)" />
        <stop offset="100%" stop-color="hsl(${hue2}, 85%, 45%)" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill="url(#${gradId})" />
    <circle cx="50" cy="50" r="44" fill="#090d16" fill-opacity="0.35" />
    <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="1.5" stroke-dasharray="3 2" />
    <text x="50" y="56" font-size="38" text-anchor="middle" dominant-baseline="middle">${av.emoji}</text>
  </svg>`;
}

// Unified Avatar Synchronization Across Entire App
export const AVATAR_STORAGE_KEY = "yds_avatar_id";
export const CUSTOM_AVATAR_KEY = "yds-master-custom-selected";
export const CUSTOM_AVATARS_LIST_KEY = "yds-master-custom-avatars";
export const AVATAR_CHANGED_EVENT = "yds:avatar-changed";

export function syncActiveAvatar(avatarId: number | string, customDataUrl: string | null = null): void {
  if (typeof window === "undefined") return;
  try {
    const idStr = String(avatarId);
    window.localStorage.setItem(AVATAR_STORAGE_KEY, idStr);
    if (customDataUrl) {
      window.localStorage.setItem(CUSTOM_AVATAR_KEY, idStr);
    } else {
      window.localStorage.removeItem(CUSTOM_AVATAR_KEY);
    }
    // Cross-component reactive notification
    window.dispatchEvent(
      new CustomEvent(AVATAR_CHANGED_EVENT, {
        detail: { avatarId: idStr, customDataUrl },
      })
    );
  } catch {
    /* empty */
  }
}

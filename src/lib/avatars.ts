export interface Avatar {
  id: string;
  emoji: string;
  label: string;
  motivation: string;
  theme: string;
  category: string;
}

// 50 Karakter (10 Kategori × 5)
const CHARACTERS: { emoji: string; label: string; motivation: string; category: string }[] = [
  // 1. HAYVANLAR
  { emoji: "🦉", label: "Bilge Baykuş", motivation: "Gece gündüz kelime ve gramer peşindesin!", category: "Hayvanlar" },
  { emoji: "🦁", label: "Cesur Aslan", motivation: "80 soru mu? Avın hazır, krallar pes etmez!", category: "Hayvanlar" },
  { emoji: "🦊", label: "Kurnaz Tilki", motivation: "Tuzak şıklar sana asla sökmez!", category: "Hayvanlar" },
  { emoji: "🐼", label: "Sakin Panda", motivation: "Sakin kafa, odaklanmış zihin, sağlam net!", category: "Hayvanlar" },
  { emoji: "🦅", label: "Gözü Pek Kartal", motivation: "Sorunun ana fikrini kilometrelerce uzaktan görürsün!", category: "Hayvanlar" },

  // 2. KAHRAMANLAR
  { emoji: "🦸", label: "Süper Kahraman", motivation: "Süper gücün: disiplin ve sarsılmaz azim!", category: "Kahramanlar" },
  { emoji: "🥷", label: "Gramer Ninjası", motivation: "Sessizce çalış, sınav günü puanınla konuş!", category: "Kahramanlar" },
  { emoji: "🧙", label: "Kelime Büyücüsü", motivation: "Akademik sözcükler senin büyü kitabın!", category: "Kahramanlar" },
  { emoji: "⚔️", label: "Yenilmez Şövalye", motivation: "Kalkanın taktikler, kılıcın zengin kelime hazinen!", category: "Kahramanlar" },
  { emoji: "🏴‍☠️", label: "Deniz Korsanı", motivation: "Hedefteki hazinen 90+ YDS puanı!", category: "Kahramanlar" },

  // 3. MESLEKLER
  { emoji: "🧑‍🚀", label: "Kozmik Astronot", motivation: "YDS semalarında sınır tanımayan dil kâşifi!", category: "Meslekler" },
  { emoji: "🧑‍🔬", label: "Laboratuvar Dâhisi", motivation: "Her cümle çözülecek bilimsel bir deney!", category: "Meslekler" },
  { emoji: "🕵️", label: "İpucu Dedektifi", motivation: "Her paragrafta doğru cevabın izini sürersin!", category: "Meslekler" },
  { emoji: "🧑‍✈️", label: "Jet Pilotu", motivation: "Rotan belli: yüksek irtifa ve zirve başarı!", category: "Meslekler" },
  { emoji: "🧑‍🎨", label: "Zihin Sanatçısı", motivation: "Her akademik metin zihninde canlanan bir tablo!", category: "Meslekler" },

  // 4. SPORCULAR
  { emoji: "🏃", label: "Maraton Koşucusu", motivation: "180 dakikalık uzun yarış senin uzmanlık alanın!", category: "Sporcular" },
  { emoji: "🏹", label: "Hedef Okçusu", motivation: "On ikiden vur: Tek atış, doğru şık!", category: "Sporcular" },
  { emoji: "🏊", label: "Derin Su Dalgıcı", motivation: "En derin ve karmaşık metinlerden inciler çıkarırsın!", category: "Sporcular" },
  { emoji: "🥊", label: "Boks Şampiyonu", motivation: "Zorlu çeldiricileri nakavt etmeye hazırsın!", category: "Sporcular" },
  { emoji: "🧗", label: "Zirve Tırmanışçısı", motivation: "Her gün yeni bir adım, hedef 100 tam puan!", category: "Sporcular" },

  // 5. FANTASTİK
  { emoji: "🐉", label: "Ejderha Binicisi", motivation: "Zor soruların alevini bilgiyle söndürürsün!", category: "Fantastik" },
  { emoji: "🧝", label: "Orman Elfi", motivation: "Dillerin kadim bilgeliği seninle akıyor!", category: "Fantastik" },
  { emoji: "🪶", label: "Zümrüdüanka", motivation: "Her denemede daha güçlü ve bilge doğarsın!", category: "Fantastik" },
  { emoji: "⏳", label: "Zaman Gezgini", motivation: "12 Tense'in geçmişi ve geleceği parmaklarının ucunda!", category: "Fantastik" },
  { emoji: "🔮", label: "Kahin Simyacı", motivation: "Soru kökünü okur okumaz doğru cevabı öngörürsün!", category: "Fantastik" },

  // 6. UZAY
  { emoji: "🚀", label: "Roket Kaptanı", motivation: "Yerçekimini kır: Hızla yükselen başarı grafiği!", category: "Uzay" },
  { emoji: "🌌", label: "Nebula Bekçisi", motivation: "Kozmik düzen gibi kusursuz gramer hakimiyeti!", category: "Uzay" },
  { emoji: "🛸", label: "Galaksi Elçisi", motivation: "Farklı kültürlerin ve dillerin ortak frekansı!", category: "Uzay" },
  { emoji: "⭐", label: "Yıldız Yolcusu", motivation: "Işığınla karanlık paragrafları aydınlat!", category: "Uzay" },
  { emoji: "🪐", label: "Satürn Kaşifi", motivation: "Halkalar gibi kusursuz cümle tamamlama becerisi!", category: "Uzay" },

  // 7. DOĞA
  { emoji: "🐺", label: "Bozkır Kurdu", motivation: "Disiplinli, yalnız çalışan ve asla pes etmeyen güç!", category: "Doğa" },
  { emoji: "⚡", label: "Fırtına Şimşeği", motivation: "Aniden çakan ilham ve şimşek hızında çözüm!", category: "Doğa" },
  { emoji: "🌋", label: "Volkanik Güç", motivation: "İçinde biriken çalışma enerjisi başarıyla püskürecek!", category: "Doğa" },
  { emoji: "🌲", label: "Asırlık Çınar", motivation: "Kökleri sağlam kelime bilgisi, fırtınada yıkılmaz!", category: "Doğa" },
  { emoji: "💎", label: "Kusursuz Elmas", motivation: "Yoğun çalışma baskısı altında parlayan cevher!", category: "Doğa" },

  // 8. DENİZ
  { emoji: "🐬", label: "Zeki Yunus", motivation: "Kelimeler arasında kıvrak ve akıcı yüzüş!", category: "Deniz" },
  { emoji: "🦈", label: "Kutup Köpekbalığı", motivation: "Soru denizinde kararlı ve odaklanmış avcı!", category: "Deniz" },
  { emoji: "🐙", label: "Ahtapot Zeka", motivation: "Aynı anda tüm şıkları analiz edebilen çok yönlü akıl!", category: "Deniz" },
  { emoji: "🚢", label: "Kutup Kaptanı", motivation: "Buzulları kırıp geçen istikrarlı çalışma temposu!", category: "Deniz" },
  { emoji: "⚓", label: "Sağlam Çapa", motivation: "Temel gramer kurallarına sarsılmaz bağlılık!", category: "Deniz" },

  // 9. MİTOLOJİ
  { emoji: "🦄", label: "Kutsal Unicorn", motivation: "Eşsiz görsel hafıza ve zihinsel berraklık!", category: "Mitoloji" },
  { emoji: "🏛️", label: "Athena Bilgesi", motivation: "Stratejik akıl ve sınav taktiklerinin ustası!", category: "Mitoloji" },
  { emoji: "⚡", label: "Zeus Yıldırımı", motivation: "Optik formu sarsacak net patlaması!", category: "Mitoloji" },
  { emoji: "🛡️", label: "Sparta Muhafızı", motivation: "Hiçbir çeldirici kalkanını delip geçemez!", category: "Mitoloji" },
  { emoji: "🔥", label: "Prometheus Ateşi", motivation: "Öğrendiğin her kelime zihnini aydınlatan meşale!", category: "Mitoloji" },

  // 10. TEKNOLOJİ
  { emoji: "🤖", label: "Siber Android", motivation: "Hata payı sıfıra yakın mantıksal işlem gücü!", category: "Teknoloji" },
  { emoji: "💻", label: "Kuantum Çekirdek", motivation: "Paragrafları nanosaniyede deşifre eden zihin!", category: "Teknoloji" },
  { emoji: "🧠", label: "Ateşli Nöron", motivation: "Görsel hafıza sinapsları ışık hızında bağlı!", category: "Teknoloji" },
  { emoji: "📡", label: "Derin Radar", motivation: "Cümledeki en küçük bağlaç sinyalini yakalar!", category: "Teknoloji" },
  { emoji: "🔋", label: "Bitmeyen Batarya", motivation: "180 dakika boyunca tükenmeyen odaklanma!", category: "Teknoloji" },
];

// 10 Renk Teması — Her karaktere 10 farklı "kostüm"
const THEMES: { id: string; name: string; gradient: string }[] = [
  { id: "ates", name: "Ateş", gradient: "from-red-500 to-orange-600" },
  { id: "okyanus", name: "Okyanus", gradient: "from-blue-500 to-cyan-600" },
  { id: "orman", name: "Orman", gradient: "from-emerald-500 to-green-700" },
  { id: "gunbatimi", name: "Günbatımı", gradient: "from-orange-400 to-pink-600" },
  { id: "gece", name: "Gece", gradient: "from-indigo-700 to-purple-900" },
  { id: "altin", name: "Altın", gradient: "from-amber-400 to-yellow-600" },
  { id: "seker", name: "Şeker", gradient: "from-pink-400 to-fuchsia-500" },
  { id: "buz", name: "Buz", gradient: "from-cyan-300 to-sky-500" },
  { id: "volkan", name: "Volkan", gradient: "from-rose-600 to-red-800" },
  { id: "galaksi", name: "Galaksi", gradient: "from-violet-600 to-fuchsia-800" },
];

// 50 × 10 = 500 avatar — Prosedürel üretim garantisi
export const AVATARS: Avatar[] = CHARACTERS.flatMap((c, ci) =>
  THEMES.map((t) => ({
    id: `${ci}-${t.id}`,
    emoji: c.emoji,
    label: `${t.name} ${c.label}`,
    motivation: c.motivation,
    theme: t.gradient,
    category: c.category,
  }))
);

// Geriye dönük uyumluluk haritası (eski ID'ler asla çökertmez)
const LEGACY_MAP: Record<string, string> = {
  "astronaut": "10-galaksi",
  "rocket": "25-ates",
  "alien-genius": "46-okyanus",
  "satellite": "48-buz",
  "telescope": "12-gece",
  "star-pilot": "28-altin",
  "wise-owl": "0-altin",
  "wizard": "7-galaksi",
  "scientist": "11-okyanus",
  "philosopher": "41-gece",
  "detective": "12-gunbatimi",
  "professor": "1-altin",
  "brain-fire": "47-ates",
  "lightning": "31-altin",
  "gem": "34-buz",
  "crown": "38-altin",
  "flame": "44-volkan",
  "trophy": "19-altin",
  "lion": "1-ates",
  "eagle": "4-gunbatimi",
  "wolf": "30-gece",
  "panther": "1-gece",
  "falcon": "4-buz",
  "phoenix": "22-volkan",
  "superhero": "5-okyanus",
  "superwoman": "5-seker",
  "ninja": "6-gece",
  "gladiator": "8-volkan",
  "cyber-cyborg": "45-okyanus",
  "shield": "43-okyanus",
};

export const AVATAR_CATEGORIES = ["Hepsi", ...new Set(CHARACTERS.map((c) => c.category))];

export const getAvatar = (id: string): Avatar => {
  if (!id) return AVATARS[0];
  const found = AVATARS.find((a) => a.id === id);
  if (found) return found;

  const legacyTargetId = LEGACY_MAP[id];
  if (legacyTargetId) {
    const legacyFound = AVATARS.find((a) => a.id === legacyTargetId);
    if (legacyFound) return legacyFound;
  }

  return AVATARS[0];
};

// Eski kodlar için arayüz uyumluluğu
export type AvatarOption = Avatar & { name: string; motto: string; gradient: string };

export const LEGACY_AVATARS: AvatarOption[] = AVATARS.map((a) => ({
  ...a,
  name: a.label,
  motto: a.motivation,
  gradient: a.theme,
}));

export function avatarSvg(indexOrId: number | string): string {
  let idx = 0;
  if (typeof indexOrId === "number") {
    idx = Math.abs(indexOrId) % AVATARS.length;
  } else {
    const foundIdx = AVATARS.findIndex((a) => a.id === indexOrId);
    idx = foundIdx >= 0 ? foundIdx : 0;
  }
  const av = AVATARS[idx] || AVATARS[0];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
    <defs>
      <linearGradient id="av-grad-${idx}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ec4899" />
        <stop offset="50%" stop-color="#8b5cf6" />
        <stop offset="100%" stop-color="#06b6d4" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill="url(#av-grad-${idx})" />
    <circle cx="50" cy="50" r="44" fill="#090d16" fill-opacity="0.3" />
    <text x="50" y="56" font-size="44" text-anchor="middle" dominant-baseline="middle">${av.emoji}</text>
  </svg>`;
}

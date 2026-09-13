export interface AvatarOption {
  id: string;
  name: string;
  category: "hero" | "scholar" | "animal" | "power" | "explorer";
  emoji: string;
  motto: string;
  gradient: string;
}

export const AVATARS: AvatarOption[] = [
  // Explorer / Uzay
  { id: "astronaut", name: "Kozmik Astronot", category: "explorer", emoji: "👨‍🚀", motto: "YDS semalarında sınır tanımayan dil kâşifi!", gradient: "from-blue-600 to-indigo-900" },
  { id: "rocket", name: "Roket Pilotu", category: "explorer", emoji: "🚀", motto: "Hedef 90+ puan, rotamız başarı!", gradient: "from-red-500 to-amber-600" },
  { id: "alien-genius", name: "Galaktik Deha", category: "explorer", emoji: "👽", motto: "Dünya dilleri bana vız gelir!", gradient: "from-emerald-500 to-teal-800" },
  { id: "satellite", name: "Sinyal Avcısı", category: "explorer", emoji: "🛰️", motto: "En gizli phrasal verb'leri bile yakalarım.", gradient: "from-cyan-600 to-blue-900" },
  { id: "telescope", name: "Derin Gözlemci", category: "explorer", emoji: "🔭", motto: "Paragraftaki en ince ayrıntıyı kaçırmam.", gradient: "from-purple-700 to-indigo-950" },
  { id: "star-pilot", name: "Yıldız Yolcusu", category: "explorer", emoji: "✨", motto: "Her gün parlayan bir başarı hikayesi.", gradient: "from-yellow-400 to-amber-600" },

  // Scholar / Bilgin
  { id: "wise-owl", name: "Bilge Baykuş", category: "scholar", emoji: "🦉", motto: "Geceleri gramer kurallarını avlarım.", gradient: "from-amber-600 to-stone-800" },
  { id: "wizard", name: "Kelime Büyücüsü", category: "scholar", emoji: "🧙‍♂️", motto: "Eş anlamlıları havada uçuran usta!", gradient: "from-purple-600 to-pink-700" },
  { id: "scientist", name: "Laboratuvar Dâhisi", category: "scholar", emoji: "🔬", motto: "YDS sorularını formüllerle çözerim.", gradient: "from-teal-500 to-cyan-800" },
  { id: "philosopher", name: "Sokratik Zihin", category: "scholar", emoji: "🏛️", motto: "Düşünürüm, o halde 80 soruyu da işaretlerim.", gradient: "from-stone-500 to-zinc-800" },
  { id: "detective", name: "İpucu Dedektifi", category: "scholar", emoji: "🕵️", motto: "Soru kökündeki gizli sinyalleri çözen göz.", gradient: "from-orange-700 to-stone-900" },
  { id: "professor", name: "Oxford Profesörü", category: "scholar", emoji: "👨‍🏫", motto: "Akademik metinlerin korkulu rüyası!", gradient: "from-indigo-600 to-slate-900" },

  // Power / Güç & Zeka
  { id: "brain-fire", name: "Ateşli Beyin", category: "power", emoji: "🧠", motto: "Görsel hafıza nöronları alev alev!", gradient: "from-rose-500 to-pink-600" },
  { id: "lightning", name: "Yıldırım Hızı", category: "power", emoji: "⚡", motto: "180 dakikayı 120 dakikada fetheden güç.", gradient: "from-yellow-400 to-amber-500" },
  { id: "gem", name: "Kusursuz Elmas", category: "power", emoji: "💎", motto: "Baskı altında parlayan azim.", gradient: "from-cyan-400 to-blue-600" },
  { id: "crown", name: "Sınav Fatihi", category: "power", emoji: "👑", motto: "Optik formun mutlak hükümdarı.", gradient: "from-amber-500 to-yellow-600" },
  { id: "flame", name: "Tükenmez Meşale", category: "power", emoji: "🔥", motto: "Streak serisi asla sönmez!", gradient: "from-red-600 to-orange-500" },
  { id: "trophy", name: "Şampiyonlar Ligi", category: "power", emoji: "🏆", motto: "Hedef kürsünün en tepesi!", gradient: "from-yellow-500 to-orange-600" },

  // Animal / Güçlü Ruhlar
  { id: "lion", name: "Cesur Aslan", category: "animal", emoji: "🦁", motto: "Zorlu paragraflara kükreyen lider!", gradient: "from-amber-600 to-red-700" },
  { id: "eagle", name: "Kartal Bakışı", category: "animal", emoji: "🦅", motto: "Doğru şıkkı kilometrelerce uzaktan görürüm.", gradient: "from-amber-700 to-stone-900" },
  { id: "wolf", name: "Yalnız Kurt", category: "animal", emoji: "🐺", motto: "Hedefine odaklı, disiplinli ve durdurulamaz.", gradient: "from-slate-600 to-zinc-900" },
  { id: "panther", name: "Gece Panteri", category: "animal", emoji: "🐆", motto: "Sessizce çalışır, sınav günü rekor kırar.", gradient: "from-zinc-700 to-black" },
  { id: "falcon", name: "Şahin Refleksi", category: "animal", emoji: "⚡", motto: "Tuzak şıkları tek hamlede eler!", gradient: "from-blue-700 to-indigo-950" },
  { id: "phoenix", name: "Zümrüdüanka", category: "animal", emoji: "🪶", motto: "Her yanlışta küllerinden daha güçlü doğar.", gradient: "from-red-500 to-fuchsia-600" },

  // Hero / Süper Kahramanlar
  { id: "superhero", name: "YDS Kahramanı", category: "hero", emoji: "🦸‍♂️", motto: "Zor soruların kurtarıcısı pelerinli dostun!", gradient: "from-blue-600 to-red-600" },
  { id: "superwoman", name: "Süper Kadın", category: "hero", emoji: "🦸‍♀️", motto: "İngilizce engellerini tek yumrukta yıkar.", gradient: "from-fuchsia-600 to-pink-500" },
  { id: "ninja", name: "Gramer Ninjası", category: "hero", emoji: "🥷", motto: "Inversion ve participle kurallarını gizlice avlar.", gradient: "from-stone-700 to-black" },
  { id: "gladiator", name: "Arenanın Yenilmezi", category: "hero", emoji: "⚔️", motto: "100 denemeyi deviren yılmaz savaşçı.", gradient: "from-red-700 to-amber-900" },
  { id: "cyber-cyborg", name: "Siber Algoritma", category: "hero", emoji: "🤖", motto: "Bilişsel kapasitesi %100 YDS uyumlu.", gradient: "from-emerald-500 to-cyan-600" },
  { id: "shield", name: "Çelik Muhafız", category: "hero", emoji: "🛡️", motto: "Puanımı hiçbir çeldirici düşüremez!", gradient: "from-blue-500 to-indigo-800" },
];

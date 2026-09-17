// 1000 Benzersiz Deterministik Avatar Sistemi
// - Tam 1000 avatar (AVATAR_COUNT = 1000)
// - Tam 50 özgün sevimli canavar avatar (DOJO_COUNT = 50)
// - En az 100 meslek (PROFESSIONS.length >= 100)
// - Çevrimdışı saf SVG üretimi + XSS koruması

export const AVATAR_COUNT = 1000;
export const DOJO_COUNT = 50;

export interface Profession {
  name: string;
  emoji: string;
}

export const PROFESSIONS: Profession[] = [
  {
    "name": "Doktor",
    "emoji": "🩺"
  },
  {
    "name": "Hemşire",
    "emoji": "💉"
  },
  {
    "name": "Öğretmen",
    "emoji": "📚"
  },
  {
    "name": "Akademisyen",
    "emoji": "🎓"
  },
  {
    "name": "Yazılımcı",
    "emoji": "💻"
  },
  {
    "name": "Veri Bilimci",
    "emoji": "📊"
  },
  {
    "name": "Bilgisayar Mühendisi",
    "emoji": "🖥️"
  },
  {
    "name": "Yapay Zeka Uzmanı",
    "emoji": "🤖"
  },
  {
    "name": "Siber Güvenlik Uzmanı",
    "emoji": "🛡️"
  },
  {
    "name": "Elektrik Mühendisi",
    "emoji": "⚡"
  },
  {
    "name": "Makine Mühendisi",
    "emoji": "⚙️"
  },
  {
    "name": "İnşaat Mühendisi",
    "emoji": "🏗️"
  },
  {
    "name": "Mimar",
    "emoji": "📐"
  },
  {
    "name": "İç Mimar",
    "emoji": "🛋️"
  },
  {
    "name": "Şehir Plancısı",
    "emoji": "🏙️"
  },
  {
    "name": "Avukat",
    "emoji": "⚖️"
  },
  {
    "name": "Hâkim",
    "emoji": "🧑‍⚖️"
  },
  {
    "name": "Savcı",
    "emoji": "🏛️"
  },
  {
    "name": "Noter",
    "emoji": "📜"
  },
  {
    "name": "Diplomat",
    "emoji": "🌐"
  },
  {
    "name": "Polis",
    "emoji": "👮"
  },
  {
    "name": "Asker",
    "emoji": "🪖"
  },
  {
    "name": "İtfaiyeci",
    "emoji": "👨‍🚒"
  },
  {
    "name": "Pilot",
    "emoji": "👨‍✈️"
  },
  {
    "name": "Kabin Memuru",
    "emoji": "🛫"
  },
  {
    "name": "Kaptan",
    "emoji": "⚓"
  },
  {
    "name": "Makinist",
    "emoji": "🚆"
  },
  {
    "name": "Şoför",
    "emoji": "🚌"
  },
  {
    "name": "Lojistik Uzmanı",
    "emoji": "📦"
  },
  {
    "name": "Hava Trafik Kontrolörü",
    "emoji": "🛰️"
  },
  {
    "name": "Aşçı",
    "emoji": "👨‍🍳"
  },
  {
    "name": "Pastacı",
    "emoji": "🎂"
  },
  {
    "name": "Fırıncı",
    "emoji": "🥖"
  },
  {
    "name": "Barista",
    "emoji": "☕"
  },
  {
    "name": "Garson",
    "emoji": "🍽️"
  },
  {
    "name": "Çiftçi",
    "emoji": "🚜"
  },
  {
    "name": "Ziraat Mühendisi",
    "emoji": "🌾"
  },
  {
    "name": "Bahçıvan",
    "emoji": "🌻"
  },
  {
    "name": "Veteriner",
    "emoji": "🐾"
  },
  {
    "name": "Diş Hekimi",
    "emoji": "🦷"
  },
  {
    "name": "Eczacı",
    "emoji": "💊"
  },
  {
    "name": "Psikolog",
    "emoji": "🧠"
  },
  {
    "name": "Psikiyatrist",
    "emoji": "🛋️"
  },
  {
    "name": "Diyetisyen",
    "emoji": "🥗"
  },
  {
    "name": "Fizyoterapist",
    "emoji": "🏃"
  },
  {
    "name": "Radyolog",
    "emoji": "🩻"
  },
  {
    "name": "Biyolog",
    "emoji": "🔬"
  },
  {
    "name": "Kimyager",
    "emoji": "🧪"
  },
  {
    "name": "Fizikçi",
    "emoji": "⚛️"
  },
  {
    "name": "Astronom",
    "emoji": "🔭"
  },
  {
    "name": "Astronot",
    "emoji": "🧑‍🚀"
  },
  {
    "name": "Genetik Mühendisi",
    "emoji": "🧬"
  },
  {
    "name": "Jeolog",
    "emoji": "🌋"
  },
  {
    "name": "Meteorolog",
    "emoji": "🌦️"
  },
  {
    "name": "Arkeolog",
    "emoji": "🏺"
  },
  {
    "name": "Antropolog",
    "emoji": "🗿"
  },
  {
    "name": "Tarihçi",
    "emoji": "📜"
  },
  {
    "name": "Sosyolog",
    "emoji": "👥"
  },
  {
    "name": "Felsefeci",
    "emoji": "💭"
  },
  {
    "name": "Dilbilimci",
    "emoji": "🗣️"
  },
  {
    "name": "Çevirmen",
    "emoji": "🌐"
  },
  {
    "name": "Mütercim Tercüman",
    "emoji": "📖"
  },
  {
    "name": "Gazeteci",
    "emoji": "📰"
  },
  {
    "name": "Muhabir",
    "emoji": "🎙️"
  },
  {
    "name": "Editör",
    "emoji": "✍️"
  },
  {
    "name": "Yazar",
    "emoji": "🖋️"
  },
  {
    "name": "Şair",
    "emoji": "📜"
  },
  {
    "name": "Fotoğrafçı",
    "emoji": "📷"
  },
  {
    "name": "Kameraman",
    "emoji": "🎥"
  },
  {
    "name": "Yönetmen",
    "emoji": "🎬"
  },
  {
    "name": "Senarist",
    "emoji": "📑"
  },
  {
    "name": "Oyuncu",
    "emoji": "🎭"
  },
  {
    "name": "Ses Sanatçısı",
    "emoji": "🎤"
  },
  {
    "name": "Müzisyen",
    "emoji": "🎵"
  },
  {
    "name": "Besteci",
    "emoji": "🎼"
  },
  {
    "name": "Ressam",
    "emoji": "🎨"
  },
  {
    "name": "Heykeltıraş",
    "emoji": "🗿"
  },
  {
    "name": "Grafik Tasarımcı",
    "emoji": "🖌️"
  },
  {
    "name": "Moda Tasarımcısı",
    "emoji": "👗"
  },
  {
    "name": "Animasyon Sanatçısı",
    "emoji": "🎞️"
  },
  {
    "name": "Ses Mühendisi",
    "emoji": "🎚️"
  },
  {
    "name": "Elektrikçi",
    "emoji": "💡"
  },
  {
    "name": "Tesisatçı",
    "emoji": "🔧"
  },
  {
    "name": "Marangoz",
    "emoji": "🪚"
  },
  {
    "name": "Kaynakçı",
    "emoji": "👨‍🏭"
  },
  {
    "name": "Oto Tamircisi",
    "emoji": "🚗"
  },
  {
    "name": "İnşaat Ustası",
    "emoji": "🧱"
  },
  {
    "name": "Boyacı",
    "emoji": "🖌️"
  },
  {
    "name": "Çilingir",
    "emoji": "🗝️"
  },
  {
    "name": "Terzi",
    "emoji": "🧵"
  },
  {
    "name": "Ayakkabıcı",
    "emoji": "👞"
  },
  {
    "name": "Saatçi",
    "emoji": "⌚"
  },
  {
    "name": "Kuyumcu",
    "emoji": "💍"
  },
  {
    "name": "Mali Müşavir",
    "emoji": "📈"
  },
  {
    "name": "Muhasebeci",
    "emoji": "🧾"
  },
  {
    "name": "İktisatçı",
    "emoji": "💹"
  },
  {
    "name": "Pazarlama Uzmanı",
    "emoji": "📣"
  },
  {
    "name": "İnsan Kaynakları Uzmanı",
    "emoji": "🤝"
  },
  {
    "name": "Bankacı",
    "emoji": "🏦"
  },
  {
    "name": "Girişimci",
    "emoji": "🚀"
  },
  {
    "name": "Proje Yöneticisi",
    "emoji": "📋"
  },
  {
    "name": "Ürün Yöneticisi",
    "emoji": "📱"
  },
  {
    "name": "Deniz Biyoloğu",
    "emoji": "🐬"
  },
  {
    "name": "Ekolojist",
    "emoji": "🌿"
  },
  {
    "name": "Kütüphaneci",
    "emoji": "📖"
  },
  {
    "name": "Arşivci",
    "emoji": "🗃️"
  },
  {
    "name": "Turist Rehberi",
    "emoji": "🗺️"
  },
  {
    "name": "Spor Antrenörü",
    "emoji": "🏅"
  }
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
}

export const AVATARS: Avatar[] = [
  {
    "id": 0,
    "name": "Pufi Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Pufi (Canavar)",
    "motivation": "Pufi seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 1,
    "name": "Bobo Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Bobo (Canavar)",
    "motivation": "Bobo seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 2,
    "name": "Zıpzıp Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Zıpzıp (Canavar)",
    "motivation": "Zıpzıp seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 3,
    "name": "Şipşak Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Şipşak (Canavar)",
    "motivation": "Şipşak seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 4,
    "name": "Pıtır Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Pıtır (Canavar)",
    "motivation": "Pıtır seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 5,
    "name": "Mini Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Mini (Canavar)",
    "motivation": "Mini seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 6,
    "name": "Çotuk Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Çotuk (Canavar)",
    "motivation": "Çotuk seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 7,
    "name": "Bıdık Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Bıdık (Canavar)",
    "motivation": "Bıdık seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 8,
    "name": "Lokum Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Lokum (Canavar)",
    "motivation": "Lokum seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 9,
    "name": "Maviş Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Maviş (Canavar)",
    "motivation": "Maviş seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 10,
    "name": "Cırcır Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Cırcır (Canavar)",
    "motivation": "Cırcır seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 11,
    "name": "Pofuduk Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Pofuduk (Canavar)",
    "motivation": "Pofuduk seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 12,
    "name": "Zıpır Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Zıpır (Canavar)",
    "motivation": "Zıpır seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 13,
    "name": "Tombiş Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Tombiş (Canavar)",
    "motivation": "Tombiş seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 14,
    "name": "Tontiş Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Tontiş (Canavar)",
    "motivation": "Tontiş seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 15,
    "name": "Şapşal Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Şapşal (Canavar)",
    "motivation": "Şapşal seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 16,
    "name": "Boncuk Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Boncuk (Canavar)",
    "motivation": "Boncuk seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 17,
    "name": "Fıstık Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Fıstık (Canavar)",
    "motivation": "Fıstık seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 18,
    "name": "Çilek Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Çilek (Canavar)",
    "motivation": "Çilek seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 19,
    "name": "Şıpır Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Şıpır (Canavar)",
    "motivation": "Şıpır seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 20,
    "name": "Cincon Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Cincon (Canavar)",
    "motivation": "Cincon seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 21,
    "name": "Gofret Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Gofret (Canavar)",
    "motivation": "Gofret seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 22,
    "name": "Buble Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Buble (Canavar)",
    "motivation": "Buble seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 23,
    "name": "Pofidik Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Pofidik (Canavar)",
    "motivation": "Pofidik seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 24,
    "name": "Cimcime Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Cimcime (Canavar)",
    "motivation": "Cimcime seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 25,
    "name": "Pırpır Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Pırpır (Canavar)",
    "motivation": "Pırpır seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 26,
    "name": "Kıvırcık Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Kıvırcık (Canavar)",
    "motivation": "Kıvırcık seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 27,
    "name": "Çimen Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Çimen (Canavar)",
    "motivation": "Çimen seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 28,
    "name": "Güneş Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Güneş (Canavar)",
    "motivation": "Güneş seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 29,
    "name": "Yıldız Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Yıldız (Canavar)",
    "motivation": "Yıldız seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 30,
    "name": "Bulut Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Bulut (Canavar)",
    "motivation": "Bulut seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 31,
    "name": "Kıvılcım Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Kıvılcım (Canavar)",
    "motivation": "Kıvılcım seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 32,
    "name": "Çakıl Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Çakıl (Canavar)",
    "motivation": "Çakıl seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 33,
    "name": "Pamuk Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Pamuk (Canavar)",
    "motivation": "Pamuk seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 34,
    "name": "Şeker Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Şeker (Canavar)",
    "motivation": "Şeker seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 35,
    "name": "Cipsi Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Cipsi (Canavar)",
    "motivation": "Cipsi seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 36,
    "name": "Fındık Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Fındık (Canavar)",
    "motivation": "Fındık seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 37,
    "name": "Ceviz Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Ceviz (Canavar)",
    "motivation": "Ceviz seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 38,
    "name": "Badem Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Badem (Canavar)",
    "motivation": "Badem seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 39,
    "name": "Pişi Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Pişi (Canavar)",
    "motivation": "Pişi seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 40,
    "name": "Tatlış Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Tatlış (Canavar)",
    "motivation": "Tatlış seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 41,
    "name": "Tonton Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Tonton (Canavar)",
    "motivation": "Tonton seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 42,
    "name": "Afacan Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Afacan (Canavar)",
    "motivation": "Afacan seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 43,
    "name": "Yumurcak Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Yumurcak (Canavar)",
    "motivation": "Yumurcak seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 44,
    "name": "Bambam Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Bambam (Canavar)",
    "motivation": "Bambam seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 45,
    "name": "Çakır Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Çakır (Canavar)",
    "motivation": "Çakır seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 46,
    "name": "Minik Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Minik (Canavar)",
    "motivation": "Minik seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 47,
    "name": "Şirin Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Şirin (Canavar)",
    "motivation": "Şirin seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 48,
    "name": "Mırmır Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Mırmır (Canavar)",
    "motivation": "Mırmır seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 49,
    "name": "Kanka Canavar",
    "category": "ClassDojo Canavarı",
    "profession": "Sevimli Maskot",
    "professionEmoji": "👾",
    "emoji": "👾",
    "label": "Kanka (Canavar)",
    "motivation": "Kanka seninle sınava hazırlanıyor! Gülümse ve devam et!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 50,
    "name": "Bilge Doktor",
    "category": "Meslekler",
    "profession": "Doktor",
    "professionEmoji": "🩺",
    "emoji": "🩺",
    "label": "#51 Bilge Doktor",
    "motivation": "Öğrenme azmin hiç tükenmez! Doktor hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 51,
    "name": "Siber Hemşire Bot",
    "category": "Robot",
    "profession": "Hemşire",
    "professionEmoji": "💉",
    "emoji": "🤖",
    "label": "#52 Siber Hemşire Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! Hemşire hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 52,
    "name": "Usta Öğretmen",
    "category": "Hayvan",
    "profession": "Öğretmen",
    "professionEmoji": "📚",
    "emoji": "🦊",
    "label": "#53 Usta Öğretmen",
    "motivation": "Detayları gözünden kaçırmaz! Öğretmen hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 53,
    "name": "Kozmik Akademisyen",
    "category": "Uzaylı",
    "profession": "Akademisyen",
    "professionEmoji": "🎓",
    "emoji": "👽",
    "label": "#54 Kozmik Akademisyen",
    "motivation": "Hedefin gökyüzü ve ötesi! Akademisyen hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 54,
    "name": "Büyülü Yazılımcı",
    "category": "Sihirli",
    "profession": "Yazılımcı",
    "professionEmoji": "💻",
    "emoji": "🧙",
    "label": "#55 Büyülü Yazılımcı",
    "motivation": "Taktikleri hızla kavrar! Yazılımcı hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 55,
    "name": "Afacan Veri Bilimci",
    "category": "Canavar",
    "profession": "Veri Bilimci",
    "professionEmoji": "📊",
    "emoji": "👾",
    "label": "#56 Afacan Veri Bilimci",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Veri Bilimci hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 56,
    "name": "Şampiyon Bilgisayar Mühendisi",
    "category": "Meslekler",
    "profession": "Bilgisayar Mühendisi",
    "professionEmoji": "🖥️",
    "emoji": "🖥️",
    "label": "#57 Şampiyon Bilgisayar Mühendisi",
    "motivation": "Her denemede yeni bir zirve! Bilgisayar Mühendisi hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 57,
    "name": "Siber Yapay Zeka Uzmanı Bot",
    "category": "Robot",
    "profession": "Yapay Zeka Uzmanı",
    "professionEmoji": "🤖",
    "emoji": "🤖",
    "label": "#58 Siber Yapay Zeka Uzmanı Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! Yapay Zeka Uzmanı hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 58,
    "name": "Efsane Siber Güvenlik Uzmanı",
    "category": "Hayvan",
    "profession": "Siber Güvenlik Uzmanı",
    "professionEmoji": "🛡️",
    "emoji": "🦁",
    "label": "#59 Efsane Siber Güvenlik Uzmanı",
    "motivation": "Kelime hazinesi zengin ve güçlü! Siber Güvenlik Uzmanı hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 59,
    "name": "Kozmik Elektrik Mühendisi",
    "category": "Uzaylı",
    "profession": "Elektrik Mühendisi",
    "professionEmoji": "⚡",
    "emoji": "👽",
    "label": "#60 Kozmik Elektrik Mühendisi",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Elektrik Mühendisi hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 60,
    "name": "Büyülü Makine Mühendisi",
    "category": "Sihirli",
    "profession": "Makine Mühendisi",
    "professionEmoji": "⚙️",
    "emoji": "🧙",
    "label": "#61 Büyülü Makine Mühendisi",
    "motivation": "Öğrenme azmin hiç tükenmez! Makine Mühendisi hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 61,
    "name": "Afacan İnşaat Mühendisi",
    "category": "Canavar",
    "profession": "İnşaat Mühendisi",
    "professionEmoji": "🏗️",
    "emoji": "👾",
    "label": "#62 Afacan İnşaat Mühendisi",
    "motivation": "Zorlu sorulardan asla korkmaz! İnşaat Mühendisi hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 62,
    "name": "Usta Mimar",
    "category": "Meslekler",
    "profession": "Mimar",
    "professionEmoji": "📐",
    "emoji": "📐",
    "label": "#63 Usta Mimar",
    "motivation": "Detayları gözünden kaçırmaz! Mimar hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 63,
    "name": "Siber İç Mimar Bot",
    "category": "Robot",
    "profession": "İç Mimar",
    "professionEmoji": "🛋️",
    "emoji": "🤖",
    "label": "#64 Siber İç Mimar Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! İç Mimar hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 64,
    "name": "Kıvrak Şehir Plancısı",
    "category": "Hayvan",
    "profession": "Şehir Plancısı",
    "professionEmoji": "🏙️",
    "emoji": "🐬",
    "label": "#65 Kıvrak Şehir Plancısı",
    "motivation": "Taktikleri hızla kavrar! Şehir Plancısı hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 65,
    "name": "Kozmik Avukat",
    "category": "Uzaylı",
    "profession": "Avukat",
    "professionEmoji": "⚖️",
    "emoji": "👽",
    "label": "#66 Kozmik Avukat",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Avukat hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 66,
    "name": "Büyülü Hâkim",
    "category": "Sihirli",
    "profession": "Hâkim",
    "professionEmoji": "🧑‍⚖️",
    "emoji": "🧙",
    "label": "#67 Büyülü Hâkim",
    "motivation": "Her denemede yeni bir zirve! Hâkim hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 67,
    "name": "Afacan Savcı",
    "category": "Canavar",
    "profession": "Savcı",
    "professionEmoji": "🏛️",
    "emoji": "👾",
    "label": "#68 Afacan Savcı",
    "motivation": "Çalışırken enerjisi hiç bitmez! Savcı hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 68,
    "name": "Efsane Noter",
    "category": "Meslekler",
    "profession": "Noter",
    "professionEmoji": "📜",
    "emoji": "📜",
    "label": "#69 Efsane Noter",
    "motivation": "Kelime hazinesi zengin ve güçlü! Noter hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 69,
    "name": "Siber Diplomat Bot",
    "category": "Robot",
    "profession": "Diplomat",
    "professionEmoji": "🌐",
    "emoji": "🤖",
    "label": "#70 Siber Diplomat Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Diplomat hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 70,
    "name": "Bilge Polis",
    "category": "Hayvan",
    "profession": "Polis",
    "professionEmoji": "👮",
    "emoji": "🦅",
    "label": "#71 Bilge Polis",
    "motivation": "Öğrenme azmin hiç tükenmez! Polis hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 71,
    "name": "Kozmik Asker",
    "category": "Uzaylı",
    "profession": "Asker",
    "professionEmoji": "🪖",
    "emoji": "👽",
    "label": "#72 Kozmik Asker",
    "motivation": "Zorlu sorulardan asla korkmaz! Asker hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 72,
    "name": "Büyülü İtfaiyeci",
    "category": "Sihirli",
    "profession": "İtfaiyeci",
    "professionEmoji": "👨‍🚒",
    "emoji": "🧙",
    "label": "#73 Büyülü İtfaiyeci",
    "motivation": "Detayları gözünden kaçırmaz! İtfaiyeci hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 73,
    "name": "Afacan Pilot",
    "category": "Canavar",
    "profession": "Pilot",
    "professionEmoji": "👨‍✈️",
    "emoji": "👾",
    "label": "#74 Afacan Pilot",
    "motivation": "Hedefin gökyüzü ve ötesi! Pilot hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 74,
    "name": "Kıvrak Kabin Memuru",
    "category": "Meslekler",
    "profession": "Kabin Memuru",
    "professionEmoji": "🛫",
    "emoji": "🛫",
    "label": "#75 Kıvrak Kabin Memuru",
    "motivation": "Taktikleri hızla kavrar! Kabin Memuru hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 75,
    "name": "Siber Kaptan Bot",
    "category": "Robot",
    "profession": "Kaptan",
    "professionEmoji": "⚓",
    "emoji": "🤖",
    "label": "#76 Siber Kaptan Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Kaptan hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 76,
    "name": "Şampiyon Makinist",
    "category": "Hayvan",
    "profession": "Makinist",
    "professionEmoji": "🚆",
    "emoji": "🦊",
    "label": "#77 Şampiyon Makinist",
    "motivation": "Her denemede yeni bir zirve! Makinist hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 77,
    "name": "Kozmik Şoför",
    "category": "Uzaylı",
    "profession": "Şoför",
    "professionEmoji": "🚌",
    "emoji": "👽",
    "label": "#78 Kozmik Şoför",
    "motivation": "Çalışırken enerjisi hiç bitmez! Şoför hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 78,
    "name": "Büyülü Lojistik Uzmanı",
    "category": "Sihirli",
    "profession": "Lojistik Uzmanı",
    "professionEmoji": "📦",
    "emoji": "🧙",
    "label": "#79 Büyülü Lojistik Uzmanı",
    "motivation": "Kelime hazinesi zengin ve güçlü! Lojistik Uzmanı hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 79,
    "name": "Afacan Hava Trafik Kontrolörü",
    "category": "Canavar",
    "profession": "Hava Trafik Kontrolörü",
    "professionEmoji": "🛰️",
    "emoji": "👾",
    "label": "#80 Afacan Hava Trafik Kontrolörü",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Hava Trafik Kontrolörü hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 80,
    "name": "Bilge Aşçı",
    "category": "Meslekler",
    "profession": "Aşçı",
    "professionEmoji": "👨‍🍳",
    "emoji": "👨‍🍳",
    "label": "#81 Bilge Aşçı",
    "motivation": "Öğrenme azmin hiç tükenmez! Aşçı hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 81,
    "name": "Siber Pastacı Bot",
    "category": "Robot",
    "profession": "Pastacı",
    "professionEmoji": "🎂",
    "emoji": "🤖",
    "label": "#82 Siber Pastacı Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! Pastacı hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 82,
    "name": "Usta Fırıncı",
    "category": "Hayvan",
    "profession": "Fırıncı",
    "professionEmoji": "🥖",
    "emoji": "🦁",
    "label": "#83 Usta Fırıncı",
    "motivation": "Detayları gözünden kaçırmaz! Fırıncı hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 83,
    "name": "Kozmik Barista",
    "category": "Uzaylı",
    "profession": "Barista",
    "professionEmoji": "☕",
    "emoji": "👽",
    "label": "#84 Kozmik Barista",
    "motivation": "Hedefin gökyüzü ve ötesi! Barista hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 84,
    "name": "Büyülü Garson",
    "category": "Sihirli",
    "profession": "Garson",
    "professionEmoji": "🍽️",
    "emoji": "🧙",
    "label": "#85 Büyülü Garson",
    "motivation": "Taktikleri hızla kavrar! Garson hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 85,
    "name": "Afacan Çiftçi",
    "category": "Canavar",
    "profession": "Çiftçi",
    "professionEmoji": "🚜",
    "emoji": "👾",
    "label": "#86 Afacan Çiftçi",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Çiftçi hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 86,
    "name": "Şampiyon Ziraat Mühendisi",
    "category": "Meslekler",
    "profession": "Ziraat Mühendisi",
    "professionEmoji": "🌾",
    "emoji": "🌾",
    "label": "#87 Şampiyon Ziraat Mühendisi",
    "motivation": "Her denemede yeni bir zirve! Ziraat Mühendisi hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 87,
    "name": "Siber Bahçıvan Bot",
    "category": "Robot",
    "profession": "Bahçıvan",
    "professionEmoji": "🌻",
    "emoji": "🤖",
    "label": "#88 Siber Bahçıvan Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! Bahçıvan hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 88,
    "name": "Efsane Veteriner",
    "category": "Hayvan",
    "profession": "Veteriner",
    "professionEmoji": "🐾",
    "emoji": "🐬",
    "label": "#89 Efsane Veteriner",
    "motivation": "Kelime hazinesi zengin ve güçlü! Veteriner hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 89,
    "name": "Kozmik Diş Hekimi",
    "category": "Uzaylı",
    "profession": "Diş Hekimi",
    "professionEmoji": "🦷",
    "emoji": "👽",
    "label": "#90 Kozmik Diş Hekimi",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Diş Hekimi hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 90,
    "name": "Büyülü Eczacı",
    "category": "Sihirli",
    "profession": "Eczacı",
    "professionEmoji": "💊",
    "emoji": "🧙",
    "label": "#91 Büyülü Eczacı",
    "motivation": "Öğrenme azmin hiç tükenmez! Eczacı hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 91,
    "name": "Afacan Psikolog",
    "category": "Canavar",
    "profession": "Psikolog",
    "professionEmoji": "🧠",
    "emoji": "👾",
    "label": "#92 Afacan Psikolog",
    "motivation": "Zorlu sorulardan asla korkmaz! Psikolog hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 92,
    "name": "Usta Psikiyatrist",
    "category": "Meslekler",
    "profession": "Psikiyatrist",
    "professionEmoji": "🛋️",
    "emoji": "🛋️",
    "label": "#93 Usta Psikiyatrist",
    "motivation": "Detayları gözünden kaçırmaz! Psikiyatrist hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 93,
    "name": "Siber Diyetisyen Bot",
    "category": "Robot",
    "profession": "Diyetisyen",
    "professionEmoji": "🥗",
    "emoji": "🤖",
    "label": "#94 Siber Diyetisyen Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! Diyetisyen hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 94,
    "name": "Kıvrak Fizyoterapist",
    "category": "Hayvan",
    "profession": "Fizyoterapist",
    "professionEmoji": "🏃",
    "emoji": "🦅",
    "label": "#95 Kıvrak Fizyoterapist",
    "motivation": "Taktikleri hızla kavrar! Fizyoterapist hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 95,
    "name": "Kozmik Radyolog",
    "category": "Uzaylı",
    "profession": "Radyolog",
    "professionEmoji": "🩻",
    "emoji": "👽",
    "label": "#96 Kozmik Radyolog",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Radyolog hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 96,
    "name": "Büyülü Biyolog",
    "category": "Sihirli",
    "profession": "Biyolog",
    "professionEmoji": "🔬",
    "emoji": "🧙",
    "label": "#97 Büyülü Biyolog",
    "motivation": "Her denemede yeni bir zirve! Biyolog hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 97,
    "name": "Afacan Kimyager",
    "category": "Canavar",
    "profession": "Kimyager",
    "professionEmoji": "🧪",
    "emoji": "👾",
    "label": "#98 Afacan Kimyager",
    "motivation": "Çalışırken enerjisi hiç bitmez! Kimyager hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 98,
    "name": "Efsane Fizikçi",
    "category": "Meslekler",
    "profession": "Fizikçi",
    "professionEmoji": "⚛️",
    "emoji": "⚛️",
    "label": "#99 Efsane Fizikçi",
    "motivation": "Kelime hazinesi zengin ve güçlü! Fizikçi hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 99,
    "name": "Siber Astronom Bot",
    "category": "Robot",
    "profession": "Astronom",
    "professionEmoji": "🔭",
    "emoji": "🤖",
    "label": "#100 Siber Astronom Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Astronom hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 100,
    "name": "Bilge Astronot",
    "category": "Hayvan",
    "profession": "Astronot",
    "professionEmoji": "🧑‍🚀",
    "emoji": "🦊",
    "label": "#101 Bilge Astronot",
    "motivation": "Öğrenme azmin hiç tükenmez! Astronot hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 101,
    "name": "Kozmik Genetik Mühendisi",
    "category": "Uzaylı",
    "profession": "Genetik Mühendisi",
    "professionEmoji": "🧬",
    "emoji": "👽",
    "label": "#102 Kozmik Genetik Mühendisi",
    "motivation": "Zorlu sorulardan asla korkmaz! Genetik Mühendisi hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 102,
    "name": "Büyülü Jeolog",
    "category": "Sihirli",
    "profession": "Jeolog",
    "professionEmoji": "🌋",
    "emoji": "🧙",
    "label": "#103 Büyülü Jeolog",
    "motivation": "Detayları gözünden kaçırmaz! Jeolog hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 103,
    "name": "Afacan Meteorolog",
    "category": "Canavar",
    "profession": "Meteorolog",
    "professionEmoji": "🌦️",
    "emoji": "👾",
    "label": "#104 Afacan Meteorolog",
    "motivation": "Hedefin gökyüzü ve ötesi! Meteorolog hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 104,
    "name": "Kıvrak Arkeolog",
    "category": "Meslekler",
    "profession": "Arkeolog",
    "professionEmoji": "🏺",
    "emoji": "🏺",
    "label": "#105 Kıvrak Arkeolog",
    "motivation": "Taktikleri hızla kavrar! Arkeolog hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 105,
    "name": "Siber Antropolog Bot",
    "category": "Robot",
    "profession": "Antropolog",
    "professionEmoji": "🗿",
    "emoji": "🤖",
    "label": "#106 Siber Antropolog Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Antropolog hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 106,
    "name": "Şampiyon Tarihçi",
    "category": "Hayvan",
    "profession": "Tarihçi",
    "professionEmoji": "📜",
    "emoji": "🦁",
    "label": "#107 Şampiyon Tarihçi",
    "motivation": "Her denemede yeni bir zirve! Tarihçi hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 107,
    "name": "Kozmik Sosyolog",
    "category": "Uzaylı",
    "profession": "Sosyolog",
    "professionEmoji": "👥",
    "emoji": "👽",
    "label": "#108 Kozmik Sosyolog",
    "motivation": "Çalışırken enerjisi hiç bitmez! Sosyolog hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 108,
    "name": "Büyülü Felsefeci",
    "category": "Sihirli",
    "profession": "Felsefeci",
    "professionEmoji": "💭",
    "emoji": "🧙",
    "label": "#109 Büyülü Felsefeci",
    "motivation": "Kelime hazinesi zengin ve güçlü! Felsefeci hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 109,
    "name": "Afacan Dilbilimci",
    "category": "Canavar",
    "profession": "Dilbilimci",
    "professionEmoji": "🗣️",
    "emoji": "👾",
    "label": "#110 Afacan Dilbilimci",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Dilbilimci hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 110,
    "name": "Bilge Çevirmen",
    "category": "Meslekler",
    "profession": "Çevirmen",
    "professionEmoji": "🌐",
    "emoji": "🌐",
    "label": "#111 Bilge Çevirmen",
    "motivation": "Öğrenme azmin hiç tükenmez! Çevirmen hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 111,
    "name": "Siber Mütercim Tercüman Bot",
    "category": "Robot",
    "profession": "Mütercim Tercüman",
    "professionEmoji": "📖",
    "emoji": "🤖",
    "label": "#112 Siber Mütercim Tercüman Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! Mütercim Tercüman hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 112,
    "name": "Usta Gazeteci",
    "category": "Hayvan",
    "profession": "Gazeteci",
    "professionEmoji": "📰",
    "emoji": "🐬",
    "label": "#113 Usta Gazeteci",
    "motivation": "Detayları gözünden kaçırmaz! Gazeteci hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 113,
    "name": "Kozmik Muhabir",
    "category": "Uzaylı",
    "profession": "Muhabir",
    "professionEmoji": "🎙️",
    "emoji": "👽",
    "label": "#114 Kozmik Muhabir",
    "motivation": "Hedefin gökyüzü ve ötesi! Muhabir hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 114,
    "name": "Büyülü Editör",
    "category": "Sihirli",
    "profession": "Editör",
    "professionEmoji": "✍️",
    "emoji": "🧙",
    "label": "#115 Büyülü Editör",
    "motivation": "Taktikleri hızla kavrar! Editör hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 115,
    "name": "Afacan Yazar",
    "category": "Canavar",
    "profession": "Yazar",
    "professionEmoji": "🖋️",
    "emoji": "👾",
    "label": "#116 Afacan Yazar",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Yazar hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 116,
    "name": "Şampiyon Şair",
    "category": "Meslekler",
    "profession": "Şair",
    "professionEmoji": "📜",
    "emoji": "📜",
    "label": "#117 Şampiyon Şair",
    "motivation": "Her denemede yeni bir zirve! Şair hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 117,
    "name": "Siber Fotoğrafçı Bot",
    "category": "Robot",
    "profession": "Fotoğrafçı",
    "professionEmoji": "📷",
    "emoji": "🤖",
    "label": "#118 Siber Fotoğrafçı Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! Fotoğrafçı hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 118,
    "name": "Efsane Kameraman",
    "category": "Hayvan",
    "profession": "Kameraman",
    "professionEmoji": "🎥",
    "emoji": "🦅",
    "label": "#119 Efsane Kameraman",
    "motivation": "Kelime hazinesi zengin ve güçlü! Kameraman hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 119,
    "name": "Kozmik Yönetmen",
    "category": "Uzaylı",
    "profession": "Yönetmen",
    "professionEmoji": "🎬",
    "emoji": "👽",
    "label": "#120 Kozmik Yönetmen",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Yönetmen hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 120,
    "name": "Büyülü Senarist",
    "category": "Sihirli",
    "profession": "Senarist",
    "professionEmoji": "📑",
    "emoji": "🧙",
    "label": "#121 Büyülü Senarist",
    "motivation": "Öğrenme azmin hiç tükenmez! Senarist hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 121,
    "name": "Afacan Oyuncu",
    "category": "Canavar",
    "profession": "Oyuncu",
    "professionEmoji": "🎭",
    "emoji": "👾",
    "label": "#122 Afacan Oyuncu",
    "motivation": "Zorlu sorulardan asla korkmaz! Oyuncu hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 122,
    "name": "Usta Ses Sanatçısı",
    "category": "Meslekler",
    "profession": "Ses Sanatçısı",
    "professionEmoji": "🎤",
    "emoji": "🎤",
    "label": "#123 Usta Ses Sanatçısı",
    "motivation": "Detayları gözünden kaçırmaz! Ses Sanatçısı hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 123,
    "name": "Siber Müzisyen Bot",
    "category": "Robot",
    "profession": "Müzisyen",
    "professionEmoji": "🎵",
    "emoji": "🤖",
    "label": "#124 Siber Müzisyen Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! Müzisyen hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 124,
    "name": "Kıvrak Besteci",
    "category": "Hayvan",
    "profession": "Besteci",
    "professionEmoji": "🎼",
    "emoji": "🦊",
    "label": "#125 Kıvrak Besteci",
    "motivation": "Taktikleri hızla kavrar! Besteci hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 125,
    "name": "Kozmik Ressam",
    "category": "Uzaylı",
    "profession": "Ressam",
    "professionEmoji": "🎨",
    "emoji": "👽",
    "label": "#126 Kozmik Ressam",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Ressam hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 126,
    "name": "Büyülü Heykeltıraş",
    "category": "Sihirli",
    "profession": "Heykeltıraş",
    "professionEmoji": "🗿",
    "emoji": "🧙",
    "label": "#127 Büyülü Heykeltıraş",
    "motivation": "Her denemede yeni bir zirve! Heykeltıraş hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 127,
    "name": "Afacan Grafik Tasarımcı",
    "category": "Canavar",
    "profession": "Grafik Tasarımcı",
    "professionEmoji": "🖌️",
    "emoji": "👾",
    "label": "#128 Afacan Grafik Tasarımcı",
    "motivation": "Çalışırken enerjisi hiç bitmez! Grafik Tasarımcı hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 128,
    "name": "Efsane Moda Tasarımcısı",
    "category": "Meslekler",
    "profession": "Moda Tasarımcısı",
    "professionEmoji": "👗",
    "emoji": "👗",
    "label": "#129 Efsane Moda Tasarımcısı",
    "motivation": "Kelime hazinesi zengin ve güçlü! Moda Tasarımcısı hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 129,
    "name": "Siber Animasyon Sanatçısı Bot",
    "category": "Robot",
    "profession": "Animasyon Sanatçısı",
    "professionEmoji": "🎞️",
    "emoji": "🤖",
    "label": "#130 Siber Animasyon Sanatçısı Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Animasyon Sanatçısı hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 130,
    "name": "Bilge Ses Mühendisi",
    "category": "Hayvan",
    "profession": "Ses Mühendisi",
    "professionEmoji": "🎚️",
    "emoji": "🦁",
    "label": "#131 Bilge Ses Mühendisi",
    "motivation": "Öğrenme azmin hiç tükenmez! Ses Mühendisi hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 131,
    "name": "Kozmik Elektrikçi",
    "category": "Uzaylı",
    "profession": "Elektrikçi",
    "professionEmoji": "💡",
    "emoji": "👽",
    "label": "#132 Kozmik Elektrikçi",
    "motivation": "Zorlu sorulardan asla korkmaz! Elektrikçi hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 132,
    "name": "Büyülü Tesisatçı",
    "category": "Sihirli",
    "profession": "Tesisatçı",
    "professionEmoji": "🔧",
    "emoji": "🧙",
    "label": "#133 Büyülü Tesisatçı",
    "motivation": "Detayları gözünden kaçırmaz! Tesisatçı hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 133,
    "name": "Afacan Marangoz",
    "category": "Canavar",
    "profession": "Marangoz",
    "professionEmoji": "🪚",
    "emoji": "👾",
    "label": "#134 Afacan Marangoz",
    "motivation": "Hedefin gökyüzü ve ötesi! Marangoz hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 134,
    "name": "Kıvrak Kaynakçı",
    "category": "Meslekler",
    "profession": "Kaynakçı",
    "professionEmoji": "👨‍🏭",
    "emoji": "👨‍🏭",
    "label": "#135 Kıvrak Kaynakçı",
    "motivation": "Taktikleri hızla kavrar! Kaynakçı hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 135,
    "name": "Siber Oto Tamircisi Bot",
    "category": "Robot",
    "profession": "Oto Tamircisi",
    "professionEmoji": "🚗",
    "emoji": "🤖",
    "label": "#136 Siber Oto Tamircisi Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Oto Tamircisi hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 136,
    "name": "Şampiyon İnşaat Ustası",
    "category": "Hayvan",
    "profession": "İnşaat Ustası",
    "professionEmoji": "🧱",
    "emoji": "🐬",
    "label": "#137 Şampiyon İnşaat Ustası",
    "motivation": "Her denemede yeni bir zirve! İnşaat Ustası hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 137,
    "name": "Kozmik Boyacı",
    "category": "Uzaylı",
    "profession": "Boyacı",
    "professionEmoji": "🖌️",
    "emoji": "👽",
    "label": "#138 Kozmik Boyacı",
    "motivation": "Çalışırken enerjisi hiç bitmez! Boyacı hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 138,
    "name": "Büyülü Çilingir",
    "category": "Sihirli",
    "profession": "Çilingir",
    "professionEmoji": "🗝️",
    "emoji": "🧙",
    "label": "#139 Büyülü Çilingir",
    "motivation": "Kelime hazinesi zengin ve güçlü! Çilingir hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 139,
    "name": "Afacan Terzi",
    "category": "Canavar",
    "profession": "Terzi",
    "professionEmoji": "🧵",
    "emoji": "👾",
    "label": "#140 Afacan Terzi",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Terzi hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 140,
    "name": "Bilge Ayakkabıcı",
    "category": "Meslekler",
    "profession": "Ayakkabıcı",
    "professionEmoji": "👞",
    "emoji": "👞",
    "label": "#141 Bilge Ayakkabıcı",
    "motivation": "Öğrenme azmin hiç tükenmez! Ayakkabıcı hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 141,
    "name": "Siber Saatçi Bot",
    "category": "Robot",
    "profession": "Saatçi",
    "professionEmoji": "⌚",
    "emoji": "🤖",
    "label": "#142 Siber Saatçi Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! Saatçi hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 142,
    "name": "Usta Kuyumcu",
    "category": "Hayvan",
    "profession": "Kuyumcu",
    "professionEmoji": "💍",
    "emoji": "🦅",
    "label": "#143 Usta Kuyumcu",
    "motivation": "Detayları gözünden kaçırmaz! Kuyumcu hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 143,
    "name": "Kozmik Mali Müşavir",
    "category": "Uzaylı",
    "profession": "Mali Müşavir",
    "professionEmoji": "📈",
    "emoji": "👽",
    "label": "#144 Kozmik Mali Müşavir",
    "motivation": "Hedefin gökyüzü ve ötesi! Mali Müşavir hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 144,
    "name": "Büyülü Muhasebeci",
    "category": "Sihirli",
    "profession": "Muhasebeci",
    "professionEmoji": "🧾",
    "emoji": "🧙",
    "label": "#145 Büyülü Muhasebeci",
    "motivation": "Taktikleri hızla kavrar! Muhasebeci hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 145,
    "name": "Afacan İktisatçı",
    "category": "Canavar",
    "profession": "İktisatçı",
    "professionEmoji": "💹",
    "emoji": "👾",
    "label": "#146 Afacan İktisatçı",
    "motivation": "180 dakika boyunca dikkati dağılmaz! İktisatçı hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 146,
    "name": "Şampiyon Pazarlama Uzmanı",
    "category": "Meslekler",
    "profession": "Pazarlama Uzmanı",
    "professionEmoji": "📣",
    "emoji": "📣",
    "label": "#147 Şampiyon Pazarlama Uzmanı",
    "motivation": "Her denemede yeni bir zirve! Pazarlama Uzmanı hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 147,
    "name": "Siber İnsan Kaynakları Uzmanı Bot",
    "category": "Robot",
    "profession": "İnsan Kaynakları Uzmanı",
    "professionEmoji": "🤝",
    "emoji": "🤖",
    "label": "#148 Siber İnsan Kaynakları Uzmanı Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! İnsan Kaynakları Uzmanı hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 148,
    "name": "Efsane Bankacı",
    "category": "Hayvan",
    "profession": "Bankacı",
    "professionEmoji": "🏦",
    "emoji": "🦊",
    "label": "#149 Efsane Bankacı",
    "motivation": "Kelime hazinesi zengin ve güçlü! Bankacı hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 149,
    "name": "Kozmik Girişimci",
    "category": "Uzaylı",
    "profession": "Girişimci",
    "professionEmoji": "🚀",
    "emoji": "👽",
    "label": "#150 Kozmik Girişimci",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Girişimci hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 150,
    "name": "Büyülü Proje Yöneticisi",
    "category": "Sihirli",
    "profession": "Proje Yöneticisi",
    "professionEmoji": "📋",
    "emoji": "🧙",
    "label": "#151 Büyülü Proje Yöneticisi",
    "motivation": "Öğrenme azmin hiç tükenmez! Proje Yöneticisi hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 151,
    "name": "Afacan Ürün Yöneticisi",
    "category": "Canavar",
    "profession": "Ürün Yöneticisi",
    "professionEmoji": "📱",
    "emoji": "👾",
    "label": "#152 Afacan Ürün Yöneticisi",
    "motivation": "Zorlu sorulardan asla korkmaz! Ürün Yöneticisi hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 152,
    "name": "Usta Deniz Biyoloğu",
    "category": "Meslekler",
    "profession": "Deniz Biyoloğu",
    "professionEmoji": "🐬",
    "emoji": "🐬",
    "label": "#153 Usta Deniz Biyoloğu",
    "motivation": "Detayları gözünden kaçırmaz! Deniz Biyoloğu hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 153,
    "name": "Siber Ekolojist Bot",
    "category": "Robot",
    "profession": "Ekolojist",
    "professionEmoji": "🌿",
    "emoji": "🤖",
    "label": "#154 Siber Ekolojist Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! Ekolojist hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 154,
    "name": "Kıvrak Kütüphaneci",
    "category": "Hayvan",
    "profession": "Kütüphaneci",
    "professionEmoji": "📖",
    "emoji": "🦁",
    "label": "#155 Kıvrak Kütüphaneci",
    "motivation": "Taktikleri hızla kavrar! Kütüphaneci hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 155,
    "name": "Kozmik Arşivci",
    "category": "Uzaylı",
    "profession": "Arşivci",
    "professionEmoji": "🗃️",
    "emoji": "👽",
    "label": "#156 Kozmik Arşivci",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Arşivci hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 156,
    "name": "Büyülü Turist Rehberi",
    "category": "Sihirli",
    "profession": "Turist Rehberi",
    "professionEmoji": "🗺️",
    "emoji": "🧙",
    "label": "#157 Büyülü Turist Rehberi",
    "motivation": "Her denemede yeni bir zirve! Turist Rehberi hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 157,
    "name": "Afacan Spor Antrenörü",
    "category": "Canavar",
    "profession": "Spor Antrenörü",
    "professionEmoji": "🏅",
    "emoji": "👾",
    "label": "#158 Afacan Spor Antrenörü",
    "motivation": "Çalışırken enerjisi hiç bitmez! Spor Antrenörü hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 158,
    "name": "Efsane Doktor",
    "category": "Meslekler",
    "profession": "Doktor",
    "professionEmoji": "🩺",
    "emoji": "🩺",
    "label": "#159 Efsane Doktor",
    "motivation": "Kelime hazinesi zengin ve güçlü! Doktor hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 159,
    "name": "Siber Hemşire Bot",
    "category": "Robot",
    "profession": "Hemşire",
    "professionEmoji": "💉",
    "emoji": "🤖",
    "label": "#160 Siber Hemşire Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Hemşire hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 160,
    "name": "Bilge Öğretmen",
    "category": "Hayvan",
    "profession": "Öğretmen",
    "professionEmoji": "📚",
    "emoji": "🐬",
    "label": "#161 Bilge Öğretmen",
    "motivation": "Öğrenme azmin hiç tükenmez! Öğretmen hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 161,
    "name": "Kozmik Akademisyen",
    "category": "Uzaylı",
    "profession": "Akademisyen",
    "professionEmoji": "🎓",
    "emoji": "👽",
    "label": "#162 Kozmik Akademisyen",
    "motivation": "Zorlu sorulardan asla korkmaz! Akademisyen hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 162,
    "name": "Büyülü Yazılımcı",
    "category": "Sihirli",
    "profession": "Yazılımcı",
    "professionEmoji": "💻",
    "emoji": "🧙",
    "label": "#163 Büyülü Yazılımcı",
    "motivation": "Detayları gözünden kaçırmaz! Yazılımcı hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 163,
    "name": "Afacan Veri Bilimci",
    "category": "Canavar",
    "profession": "Veri Bilimci",
    "professionEmoji": "📊",
    "emoji": "👾",
    "label": "#164 Afacan Veri Bilimci",
    "motivation": "Hedefin gökyüzü ve ötesi! Veri Bilimci hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 164,
    "name": "Kıvrak Bilgisayar Mühendisi",
    "category": "Meslekler",
    "profession": "Bilgisayar Mühendisi",
    "professionEmoji": "🖥️",
    "emoji": "🖥️",
    "label": "#165 Kıvrak Bilgisayar Mühendisi",
    "motivation": "Taktikleri hızla kavrar! Bilgisayar Mühendisi hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 165,
    "name": "Siber Yapay Zeka Uzmanı Bot",
    "category": "Robot",
    "profession": "Yapay Zeka Uzmanı",
    "professionEmoji": "🤖",
    "emoji": "🤖",
    "label": "#166 Siber Yapay Zeka Uzmanı Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Yapay Zeka Uzmanı hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 166,
    "name": "Şampiyon Siber Güvenlik Uzmanı",
    "category": "Hayvan",
    "profession": "Siber Güvenlik Uzmanı",
    "professionEmoji": "🛡️",
    "emoji": "🦅",
    "label": "#167 Şampiyon Siber Güvenlik Uzmanı",
    "motivation": "Her denemede yeni bir zirve! Siber Güvenlik Uzmanı hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 167,
    "name": "Kozmik Elektrik Mühendisi",
    "category": "Uzaylı",
    "profession": "Elektrik Mühendisi",
    "professionEmoji": "⚡",
    "emoji": "👽",
    "label": "#168 Kozmik Elektrik Mühendisi",
    "motivation": "Çalışırken enerjisi hiç bitmez! Elektrik Mühendisi hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 168,
    "name": "Büyülü Makine Mühendisi",
    "category": "Sihirli",
    "profession": "Makine Mühendisi",
    "professionEmoji": "⚙️",
    "emoji": "🧙",
    "label": "#169 Büyülü Makine Mühendisi",
    "motivation": "Kelime hazinesi zengin ve güçlü! Makine Mühendisi hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 169,
    "name": "Afacan İnşaat Mühendisi",
    "category": "Canavar",
    "profession": "İnşaat Mühendisi",
    "professionEmoji": "🏗️",
    "emoji": "👾",
    "label": "#170 Afacan İnşaat Mühendisi",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! İnşaat Mühendisi hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 170,
    "name": "Bilge Mimar",
    "category": "Meslekler",
    "profession": "Mimar",
    "professionEmoji": "📐",
    "emoji": "📐",
    "label": "#171 Bilge Mimar",
    "motivation": "Öğrenme azmin hiç tükenmez! Mimar hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 171,
    "name": "Siber İç Mimar Bot",
    "category": "Robot",
    "profession": "İç Mimar",
    "professionEmoji": "🛋️",
    "emoji": "🤖",
    "label": "#172 Siber İç Mimar Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! İç Mimar hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 172,
    "name": "Usta Şehir Plancısı",
    "category": "Hayvan",
    "profession": "Şehir Plancısı",
    "professionEmoji": "🏙️",
    "emoji": "🦊",
    "label": "#173 Usta Şehir Plancısı",
    "motivation": "Detayları gözünden kaçırmaz! Şehir Plancısı hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 173,
    "name": "Kozmik Avukat",
    "category": "Uzaylı",
    "profession": "Avukat",
    "professionEmoji": "⚖️",
    "emoji": "👽",
    "label": "#174 Kozmik Avukat",
    "motivation": "Hedefin gökyüzü ve ötesi! Avukat hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 174,
    "name": "Büyülü Hâkim",
    "category": "Sihirli",
    "profession": "Hâkim",
    "professionEmoji": "🧑‍⚖️",
    "emoji": "🧙",
    "label": "#175 Büyülü Hâkim",
    "motivation": "Taktikleri hızla kavrar! Hâkim hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 175,
    "name": "Afacan Savcı",
    "category": "Canavar",
    "profession": "Savcı",
    "professionEmoji": "🏛️",
    "emoji": "👾",
    "label": "#176 Afacan Savcı",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Savcı hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 176,
    "name": "Şampiyon Noter",
    "category": "Meslekler",
    "profession": "Noter",
    "professionEmoji": "📜",
    "emoji": "📜",
    "label": "#177 Şampiyon Noter",
    "motivation": "Her denemede yeni bir zirve! Noter hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 177,
    "name": "Siber Diplomat Bot",
    "category": "Robot",
    "profession": "Diplomat",
    "professionEmoji": "🌐",
    "emoji": "🤖",
    "label": "#178 Siber Diplomat Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! Diplomat hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 178,
    "name": "Efsane Polis",
    "category": "Hayvan",
    "profession": "Polis",
    "professionEmoji": "👮",
    "emoji": "🦁",
    "label": "#179 Efsane Polis",
    "motivation": "Kelime hazinesi zengin ve güçlü! Polis hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 179,
    "name": "Kozmik Asker",
    "category": "Uzaylı",
    "profession": "Asker",
    "professionEmoji": "🪖",
    "emoji": "👽",
    "label": "#180 Kozmik Asker",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Asker hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 180,
    "name": "Büyülü İtfaiyeci",
    "category": "Sihirli",
    "profession": "İtfaiyeci",
    "professionEmoji": "👨‍🚒",
    "emoji": "🧙",
    "label": "#181 Büyülü İtfaiyeci",
    "motivation": "Öğrenme azmin hiç tükenmez! İtfaiyeci hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 181,
    "name": "Afacan Pilot",
    "category": "Canavar",
    "profession": "Pilot",
    "professionEmoji": "👨‍✈️",
    "emoji": "👾",
    "label": "#182 Afacan Pilot",
    "motivation": "Zorlu sorulardan asla korkmaz! Pilot hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 182,
    "name": "Usta Kabin Memuru",
    "category": "Meslekler",
    "profession": "Kabin Memuru",
    "professionEmoji": "🛫",
    "emoji": "🛫",
    "label": "#183 Usta Kabin Memuru",
    "motivation": "Detayları gözünden kaçırmaz! Kabin Memuru hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 183,
    "name": "Siber Kaptan Bot",
    "category": "Robot",
    "profession": "Kaptan",
    "professionEmoji": "⚓",
    "emoji": "🤖",
    "label": "#184 Siber Kaptan Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! Kaptan hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 184,
    "name": "Kıvrak Makinist",
    "category": "Hayvan",
    "profession": "Makinist",
    "professionEmoji": "🚆",
    "emoji": "🐬",
    "label": "#185 Kıvrak Makinist",
    "motivation": "Taktikleri hızla kavrar! Makinist hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 185,
    "name": "Kozmik Şoför",
    "category": "Uzaylı",
    "profession": "Şoför",
    "professionEmoji": "🚌",
    "emoji": "👽",
    "label": "#186 Kozmik Şoför",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Şoför hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 186,
    "name": "Büyülü Lojistik Uzmanı",
    "category": "Sihirli",
    "profession": "Lojistik Uzmanı",
    "professionEmoji": "📦",
    "emoji": "🧙",
    "label": "#187 Büyülü Lojistik Uzmanı",
    "motivation": "Her denemede yeni bir zirve! Lojistik Uzmanı hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 187,
    "name": "Afacan Hava Trafik Kontrolörü",
    "category": "Canavar",
    "profession": "Hava Trafik Kontrolörü",
    "professionEmoji": "🛰️",
    "emoji": "👾",
    "label": "#188 Afacan Hava Trafik Kontrolörü",
    "motivation": "Çalışırken enerjisi hiç bitmez! Hava Trafik Kontrolörü hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 188,
    "name": "Efsane Aşçı",
    "category": "Meslekler",
    "profession": "Aşçı",
    "professionEmoji": "👨‍🍳",
    "emoji": "👨‍🍳",
    "label": "#189 Efsane Aşçı",
    "motivation": "Kelime hazinesi zengin ve güçlü! Aşçı hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 189,
    "name": "Siber Pastacı Bot",
    "category": "Robot",
    "profession": "Pastacı",
    "professionEmoji": "🎂",
    "emoji": "🤖",
    "label": "#190 Siber Pastacı Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Pastacı hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 190,
    "name": "Bilge Fırıncı",
    "category": "Hayvan",
    "profession": "Fırıncı",
    "professionEmoji": "🥖",
    "emoji": "🦅",
    "label": "#191 Bilge Fırıncı",
    "motivation": "Öğrenme azmin hiç tükenmez! Fırıncı hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 191,
    "name": "Kozmik Barista",
    "category": "Uzaylı",
    "profession": "Barista",
    "professionEmoji": "☕",
    "emoji": "👽",
    "label": "#192 Kozmik Barista",
    "motivation": "Zorlu sorulardan asla korkmaz! Barista hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 192,
    "name": "Büyülü Garson",
    "category": "Sihirli",
    "profession": "Garson",
    "professionEmoji": "🍽️",
    "emoji": "🧙",
    "label": "#193 Büyülü Garson",
    "motivation": "Detayları gözünden kaçırmaz! Garson hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 193,
    "name": "Afacan Çiftçi",
    "category": "Canavar",
    "profession": "Çiftçi",
    "professionEmoji": "🚜",
    "emoji": "👾",
    "label": "#194 Afacan Çiftçi",
    "motivation": "Hedefin gökyüzü ve ötesi! Çiftçi hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 194,
    "name": "Kıvrak Ziraat Mühendisi",
    "category": "Meslekler",
    "profession": "Ziraat Mühendisi",
    "professionEmoji": "🌾",
    "emoji": "🌾",
    "label": "#195 Kıvrak Ziraat Mühendisi",
    "motivation": "Taktikleri hızla kavrar! Ziraat Mühendisi hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 195,
    "name": "Siber Bahçıvan Bot",
    "category": "Robot",
    "profession": "Bahçıvan",
    "professionEmoji": "🌻",
    "emoji": "🤖",
    "label": "#196 Siber Bahçıvan Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Bahçıvan hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 196,
    "name": "Şampiyon Veteriner",
    "category": "Hayvan",
    "profession": "Veteriner",
    "professionEmoji": "🐾",
    "emoji": "🦊",
    "label": "#197 Şampiyon Veteriner",
    "motivation": "Her denemede yeni bir zirve! Veteriner hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 197,
    "name": "Kozmik Diş Hekimi",
    "category": "Uzaylı",
    "profession": "Diş Hekimi",
    "professionEmoji": "🦷",
    "emoji": "👽",
    "label": "#198 Kozmik Diş Hekimi",
    "motivation": "Çalışırken enerjisi hiç bitmez! Diş Hekimi hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 198,
    "name": "Büyülü Eczacı",
    "category": "Sihirli",
    "profession": "Eczacı",
    "professionEmoji": "💊",
    "emoji": "🧙",
    "label": "#199 Büyülü Eczacı",
    "motivation": "Kelime hazinesi zengin ve güçlü! Eczacı hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 199,
    "name": "Afacan Psikolog",
    "category": "Canavar",
    "profession": "Psikolog",
    "professionEmoji": "🧠",
    "emoji": "👾",
    "label": "#200 Afacan Psikolog",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Psikolog hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 200,
    "name": "Bilge Psikiyatrist",
    "category": "Meslekler",
    "profession": "Psikiyatrist",
    "professionEmoji": "🛋️",
    "emoji": "🛋️",
    "label": "#201 Bilge Psikiyatrist",
    "motivation": "Öğrenme azmin hiç tükenmez! Psikiyatrist hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 201,
    "name": "Siber Diyetisyen Bot",
    "category": "Robot",
    "profession": "Diyetisyen",
    "professionEmoji": "🥗",
    "emoji": "🤖",
    "label": "#202 Siber Diyetisyen Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! Diyetisyen hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 202,
    "name": "Usta Fizyoterapist",
    "category": "Hayvan",
    "profession": "Fizyoterapist",
    "professionEmoji": "🏃",
    "emoji": "🦁",
    "label": "#203 Usta Fizyoterapist",
    "motivation": "Detayları gözünden kaçırmaz! Fizyoterapist hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 203,
    "name": "Kozmik Radyolog",
    "category": "Uzaylı",
    "profession": "Radyolog",
    "professionEmoji": "🩻",
    "emoji": "👽",
    "label": "#204 Kozmik Radyolog",
    "motivation": "Hedefin gökyüzü ve ötesi! Radyolog hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 204,
    "name": "Büyülü Biyolog",
    "category": "Sihirli",
    "profession": "Biyolog",
    "professionEmoji": "🔬",
    "emoji": "🧙",
    "label": "#205 Büyülü Biyolog",
    "motivation": "Taktikleri hızla kavrar! Biyolog hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 205,
    "name": "Afacan Kimyager",
    "category": "Canavar",
    "profession": "Kimyager",
    "professionEmoji": "🧪",
    "emoji": "👾",
    "label": "#206 Afacan Kimyager",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Kimyager hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 206,
    "name": "Şampiyon Fizikçi",
    "category": "Meslekler",
    "profession": "Fizikçi",
    "professionEmoji": "⚛️",
    "emoji": "⚛️",
    "label": "#207 Şampiyon Fizikçi",
    "motivation": "Her denemede yeni bir zirve! Fizikçi hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 207,
    "name": "Siber Astronom Bot",
    "category": "Robot",
    "profession": "Astronom",
    "professionEmoji": "🔭",
    "emoji": "🤖",
    "label": "#208 Siber Astronom Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! Astronom hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 208,
    "name": "Efsane Astronot",
    "category": "Hayvan",
    "profession": "Astronot",
    "professionEmoji": "🧑‍🚀",
    "emoji": "🐬",
    "label": "#209 Efsane Astronot",
    "motivation": "Kelime hazinesi zengin ve güçlü! Astronot hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 209,
    "name": "Kozmik Genetik Mühendisi",
    "category": "Uzaylı",
    "profession": "Genetik Mühendisi",
    "professionEmoji": "🧬",
    "emoji": "👽",
    "label": "#210 Kozmik Genetik Mühendisi",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Genetik Mühendisi hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 210,
    "name": "Büyülü Jeolog",
    "category": "Sihirli",
    "profession": "Jeolog",
    "professionEmoji": "🌋",
    "emoji": "🧙",
    "label": "#211 Büyülü Jeolog",
    "motivation": "Öğrenme azmin hiç tükenmez! Jeolog hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 211,
    "name": "Afacan Meteorolog",
    "category": "Canavar",
    "profession": "Meteorolog",
    "professionEmoji": "🌦️",
    "emoji": "👾",
    "label": "#212 Afacan Meteorolog",
    "motivation": "Zorlu sorulardan asla korkmaz! Meteorolog hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 212,
    "name": "Usta Arkeolog",
    "category": "Meslekler",
    "profession": "Arkeolog",
    "professionEmoji": "🏺",
    "emoji": "🏺",
    "label": "#213 Usta Arkeolog",
    "motivation": "Detayları gözünden kaçırmaz! Arkeolog hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 213,
    "name": "Siber Antropolog Bot",
    "category": "Robot",
    "profession": "Antropolog",
    "professionEmoji": "🗿",
    "emoji": "🤖",
    "label": "#214 Siber Antropolog Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! Antropolog hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 214,
    "name": "Kıvrak Tarihçi",
    "category": "Hayvan",
    "profession": "Tarihçi",
    "professionEmoji": "📜",
    "emoji": "🦅",
    "label": "#215 Kıvrak Tarihçi",
    "motivation": "Taktikleri hızla kavrar! Tarihçi hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 215,
    "name": "Kozmik Sosyolog",
    "category": "Uzaylı",
    "profession": "Sosyolog",
    "professionEmoji": "👥",
    "emoji": "👽",
    "label": "#216 Kozmik Sosyolog",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Sosyolog hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 216,
    "name": "Büyülü Felsefeci",
    "category": "Sihirli",
    "profession": "Felsefeci",
    "professionEmoji": "💭",
    "emoji": "🧙",
    "label": "#217 Büyülü Felsefeci",
    "motivation": "Her denemede yeni bir zirve! Felsefeci hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 217,
    "name": "Afacan Dilbilimci",
    "category": "Canavar",
    "profession": "Dilbilimci",
    "professionEmoji": "🗣️",
    "emoji": "👾",
    "label": "#218 Afacan Dilbilimci",
    "motivation": "Çalışırken enerjisi hiç bitmez! Dilbilimci hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 218,
    "name": "Efsane Çevirmen",
    "category": "Meslekler",
    "profession": "Çevirmen",
    "professionEmoji": "🌐",
    "emoji": "🌐",
    "label": "#219 Efsane Çevirmen",
    "motivation": "Kelime hazinesi zengin ve güçlü! Çevirmen hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 219,
    "name": "Siber Mütercim Tercüman Bot",
    "category": "Robot",
    "profession": "Mütercim Tercüman",
    "professionEmoji": "📖",
    "emoji": "🤖",
    "label": "#220 Siber Mütercim Tercüman Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Mütercim Tercüman hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 220,
    "name": "Bilge Gazeteci",
    "category": "Hayvan",
    "profession": "Gazeteci",
    "professionEmoji": "📰",
    "emoji": "🦊",
    "label": "#221 Bilge Gazeteci",
    "motivation": "Öğrenme azmin hiç tükenmez! Gazeteci hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 221,
    "name": "Kozmik Muhabir",
    "category": "Uzaylı",
    "profession": "Muhabir",
    "professionEmoji": "🎙️",
    "emoji": "👽",
    "label": "#222 Kozmik Muhabir",
    "motivation": "Zorlu sorulardan asla korkmaz! Muhabir hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 222,
    "name": "Büyülü Editör",
    "category": "Sihirli",
    "profession": "Editör",
    "professionEmoji": "✍️",
    "emoji": "🧙",
    "label": "#223 Büyülü Editör",
    "motivation": "Detayları gözünden kaçırmaz! Editör hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 223,
    "name": "Afacan Yazar",
    "category": "Canavar",
    "profession": "Yazar",
    "professionEmoji": "🖋️",
    "emoji": "👾",
    "label": "#224 Afacan Yazar",
    "motivation": "Hedefin gökyüzü ve ötesi! Yazar hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 224,
    "name": "Kıvrak Şair",
    "category": "Meslekler",
    "profession": "Şair",
    "professionEmoji": "📜",
    "emoji": "📜",
    "label": "#225 Kıvrak Şair",
    "motivation": "Taktikleri hızla kavrar! Şair hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 225,
    "name": "Siber Fotoğrafçı Bot",
    "category": "Robot",
    "profession": "Fotoğrafçı",
    "professionEmoji": "📷",
    "emoji": "🤖",
    "label": "#226 Siber Fotoğrafçı Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Fotoğrafçı hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 226,
    "name": "Şampiyon Kameraman",
    "category": "Hayvan",
    "profession": "Kameraman",
    "professionEmoji": "🎥",
    "emoji": "🦁",
    "label": "#227 Şampiyon Kameraman",
    "motivation": "Her denemede yeni bir zirve! Kameraman hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 227,
    "name": "Kozmik Yönetmen",
    "category": "Uzaylı",
    "profession": "Yönetmen",
    "professionEmoji": "🎬",
    "emoji": "👽",
    "label": "#228 Kozmik Yönetmen",
    "motivation": "Çalışırken enerjisi hiç bitmez! Yönetmen hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 228,
    "name": "Büyülü Senarist",
    "category": "Sihirli",
    "profession": "Senarist",
    "professionEmoji": "📑",
    "emoji": "🧙",
    "label": "#229 Büyülü Senarist",
    "motivation": "Kelime hazinesi zengin ve güçlü! Senarist hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 229,
    "name": "Afacan Oyuncu",
    "category": "Canavar",
    "profession": "Oyuncu",
    "professionEmoji": "🎭",
    "emoji": "👾",
    "label": "#230 Afacan Oyuncu",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Oyuncu hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 230,
    "name": "Bilge Ses Sanatçısı",
    "category": "Meslekler",
    "profession": "Ses Sanatçısı",
    "professionEmoji": "🎤",
    "emoji": "🎤",
    "label": "#231 Bilge Ses Sanatçısı",
    "motivation": "Öğrenme azmin hiç tükenmez! Ses Sanatçısı hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 231,
    "name": "Siber Müzisyen Bot",
    "category": "Robot",
    "profession": "Müzisyen",
    "professionEmoji": "🎵",
    "emoji": "🤖",
    "label": "#232 Siber Müzisyen Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! Müzisyen hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 232,
    "name": "Usta Besteci",
    "category": "Hayvan",
    "profession": "Besteci",
    "professionEmoji": "🎼",
    "emoji": "🐬",
    "label": "#233 Usta Besteci",
    "motivation": "Detayları gözünden kaçırmaz! Besteci hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 233,
    "name": "Kozmik Ressam",
    "category": "Uzaylı",
    "profession": "Ressam",
    "professionEmoji": "🎨",
    "emoji": "👽",
    "label": "#234 Kozmik Ressam",
    "motivation": "Hedefin gökyüzü ve ötesi! Ressam hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 234,
    "name": "Büyülü Heykeltıraş",
    "category": "Sihirli",
    "profession": "Heykeltıraş",
    "professionEmoji": "🗿",
    "emoji": "🧙",
    "label": "#235 Büyülü Heykeltıraş",
    "motivation": "Taktikleri hızla kavrar! Heykeltıraş hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 235,
    "name": "Afacan Grafik Tasarımcı",
    "category": "Canavar",
    "profession": "Grafik Tasarımcı",
    "professionEmoji": "🖌️",
    "emoji": "👾",
    "label": "#236 Afacan Grafik Tasarımcı",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Grafik Tasarımcı hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 236,
    "name": "Şampiyon Moda Tasarımcısı",
    "category": "Meslekler",
    "profession": "Moda Tasarımcısı",
    "professionEmoji": "👗",
    "emoji": "👗",
    "label": "#237 Şampiyon Moda Tasarımcısı",
    "motivation": "Her denemede yeni bir zirve! Moda Tasarımcısı hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 237,
    "name": "Siber Animasyon Sanatçısı Bot",
    "category": "Robot",
    "profession": "Animasyon Sanatçısı",
    "professionEmoji": "🎞️",
    "emoji": "🤖",
    "label": "#238 Siber Animasyon Sanatçısı Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! Animasyon Sanatçısı hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 238,
    "name": "Efsane Ses Mühendisi",
    "category": "Hayvan",
    "profession": "Ses Mühendisi",
    "professionEmoji": "🎚️",
    "emoji": "🦅",
    "label": "#239 Efsane Ses Mühendisi",
    "motivation": "Kelime hazinesi zengin ve güçlü! Ses Mühendisi hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 239,
    "name": "Kozmik Elektrikçi",
    "category": "Uzaylı",
    "profession": "Elektrikçi",
    "professionEmoji": "💡",
    "emoji": "👽",
    "label": "#240 Kozmik Elektrikçi",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Elektrikçi hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 240,
    "name": "Büyülü Tesisatçı",
    "category": "Sihirli",
    "profession": "Tesisatçı",
    "professionEmoji": "🔧",
    "emoji": "🧙",
    "label": "#241 Büyülü Tesisatçı",
    "motivation": "Öğrenme azmin hiç tükenmez! Tesisatçı hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 241,
    "name": "Afacan Marangoz",
    "category": "Canavar",
    "profession": "Marangoz",
    "professionEmoji": "🪚",
    "emoji": "👾",
    "label": "#242 Afacan Marangoz",
    "motivation": "Zorlu sorulardan asla korkmaz! Marangoz hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 242,
    "name": "Usta Kaynakçı",
    "category": "Meslekler",
    "profession": "Kaynakçı",
    "professionEmoji": "👨‍🏭",
    "emoji": "👨‍🏭",
    "label": "#243 Usta Kaynakçı",
    "motivation": "Detayları gözünden kaçırmaz! Kaynakçı hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 243,
    "name": "Siber Oto Tamircisi Bot",
    "category": "Robot",
    "profession": "Oto Tamircisi",
    "professionEmoji": "🚗",
    "emoji": "🤖",
    "label": "#244 Siber Oto Tamircisi Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! Oto Tamircisi hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 244,
    "name": "Kıvrak İnşaat Ustası",
    "category": "Hayvan",
    "profession": "İnşaat Ustası",
    "professionEmoji": "🧱",
    "emoji": "🦊",
    "label": "#245 Kıvrak İnşaat Ustası",
    "motivation": "Taktikleri hızla kavrar! İnşaat Ustası hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 245,
    "name": "Kozmik Boyacı",
    "category": "Uzaylı",
    "profession": "Boyacı",
    "professionEmoji": "🖌️",
    "emoji": "👽",
    "label": "#246 Kozmik Boyacı",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Boyacı hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 246,
    "name": "Büyülü Çilingir",
    "category": "Sihirli",
    "profession": "Çilingir",
    "professionEmoji": "🗝️",
    "emoji": "🧙",
    "label": "#247 Büyülü Çilingir",
    "motivation": "Her denemede yeni bir zirve! Çilingir hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 247,
    "name": "Afacan Terzi",
    "category": "Canavar",
    "profession": "Terzi",
    "professionEmoji": "🧵",
    "emoji": "👾",
    "label": "#248 Afacan Terzi",
    "motivation": "Çalışırken enerjisi hiç bitmez! Terzi hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 248,
    "name": "Efsane Ayakkabıcı",
    "category": "Meslekler",
    "profession": "Ayakkabıcı",
    "professionEmoji": "👞",
    "emoji": "👞",
    "label": "#249 Efsane Ayakkabıcı",
    "motivation": "Kelime hazinesi zengin ve güçlü! Ayakkabıcı hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 249,
    "name": "Siber Saatçi Bot",
    "category": "Robot",
    "profession": "Saatçi",
    "professionEmoji": "⌚",
    "emoji": "🤖",
    "label": "#250 Siber Saatçi Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Saatçi hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 250,
    "name": "Bilge Kuyumcu",
    "category": "Hayvan",
    "profession": "Kuyumcu",
    "professionEmoji": "💍",
    "emoji": "🦁",
    "label": "#251 Bilge Kuyumcu",
    "motivation": "Öğrenme azmin hiç tükenmez! Kuyumcu hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 251,
    "name": "Kozmik Mali Müşavir",
    "category": "Uzaylı",
    "profession": "Mali Müşavir",
    "professionEmoji": "📈",
    "emoji": "👽",
    "label": "#252 Kozmik Mali Müşavir",
    "motivation": "Zorlu sorulardan asla korkmaz! Mali Müşavir hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 252,
    "name": "Büyülü Muhasebeci",
    "category": "Sihirli",
    "profession": "Muhasebeci",
    "professionEmoji": "🧾",
    "emoji": "🧙",
    "label": "#253 Büyülü Muhasebeci",
    "motivation": "Detayları gözünden kaçırmaz! Muhasebeci hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 253,
    "name": "Afacan İktisatçı",
    "category": "Canavar",
    "profession": "İktisatçı",
    "professionEmoji": "💹",
    "emoji": "👾",
    "label": "#254 Afacan İktisatçı",
    "motivation": "Hedefin gökyüzü ve ötesi! İktisatçı hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 254,
    "name": "Kıvrak Pazarlama Uzmanı",
    "category": "Meslekler",
    "profession": "Pazarlama Uzmanı",
    "professionEmoji": "📣",
    "emoji": "📣",
    "label": "#255 Kıvrak Pazarlama Uzmanı",
    "motivation": "Taktikleri hızla kavrar! Pazarlama Uzmanı hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 255,
    "name": "Siber İnsan Kaynakları Uzmanı Bot",
    "category": "Robot",
    "profession": "İnsan Kaynakları Uzmanı",
    "professionEmoji": "🤝",
    "emoji": "🤖",
    "label": "#256 Siber İnsan Kaynakları Uzmanı Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! İnsan Kaynakları Uzmanı hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 256,
    "name": "Şampiyon Bankacı",
    "category": "Hayvan",
    "profession": "Bankacı",
    "professionEmoji": "🏦",
    "emoji": "🐬",
    "label": "#257 Şampiyon Bankacı",
    "motivation": "Her denemede yeni bir zirve! Bankacı hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 257,
    "name": "Kozmik Girişimci",
    "category": "Uzaylı",
    "profession": "Girişimci",
    "professionEmoji": "🚀",
    "emoji": "👽",
    "label": "#258 Kozmik Girişimci",
    "motivation": "Çalışırken enerjisi hiç bitmez! Girişimci hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 258,
    "name": "Büyülü Proje Yöneticisi",
    "category": "Sihirli",
    "profession": "Proje Yöneticisi",
    "professionEmoji": "📋",
    "emoji": "🧙",
    "label": "#259 Büyülü Proje Yöneticisi",
    "motivation": "Kelime hazinesi zengin ve güçlü! Proje Yöneticisi hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 259,
    "name": "Afacan Ürün Yöneticisi",
    "category": "Canavar",
    "profession": "Ürün Yöneticisi",
    "professionEmoji": "📱",
    "emoji": "👾",
    "label": "#260 Afacan Ürün Yöneticisi",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Ürün Yöneticisi hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 260,
    "name": "Bilge Deniz Biyoloğu",
    "category": "Meslekler",
    "profession": "Deniz Biyoloğu",
    "professionEmoji": "🐬",
    "emoji": "🐬",
    "label": "#261 Bilge Deniz Biyoloğu",
    "motivation": "Öğrenme azmin hiç tükenmez! Deniz Biyoloğu hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 261,
    "name": "Siber Ekolojist Bot",
    "category": "Robot",
    "profession": "Ekolojist",
    "professionEmoji": "🌿",
    "emoji": "🤖",
    "label": "#262 Siber Ekolojist Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! Ekolojist hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 262,
    "name": "Usta Kütüphaneci",
    "category": "Hayvan",
    "profession": "Kütüphaneci",
    "professionEmoji": "📖",
    "emoji": "🦅",
    "label": "#263 Usta Kütüphaneci",
    "motivation": "Detayları gözünden kaçırmaz! Kütüphaneci hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 263,
    "name": "Kozmik Arşivci",
    "category": "Uzaylı",
    "profession": "Arşivci",
    "professionEmoji": "🗃️",
    "emoji": "👽",
    "label": "#264 Kozmik Arşivci",
    "motivation": "Hedefin gökyüzü ve ötesi! Arşivci hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 264,
    "name": "Büyülü Turist Rehberi",
    "category": "Sihirli",
    "profession": "Turist Rehberi",
    "professionEmoji": "🗺️",
    "emoji": "🧙",
    "label": "#265 Büyülü Turist Rehberi",
    "motivation": "Taktikleri hızla kavrar! Turist Rehberi hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 265,
    "name": "Afacan Spor Antrenörü",
    "category": "Canavar",
    "profession": "Spor Antrenörü",
    "professionEmoji": "🏅",
    "emoji": "👾",
    "label": "#266 Afacan Spor Antrenörü",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Spor Antrenörü hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 266,
    "name": "Şampiyon Doktor",
    "category": "Meslekler",
    "profession": "Doktor",
    "professionEmoji": "🩺",
    "emoji": "🩺",
    "label": "#267 Şampiyon Doktor",
    "motivation": "Her denemede yeni bir zirve! Doktor hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 267,
    "name": "Siber Hemşire Bot",
    "category": "Robot",
    "profession": "Hemşire",
    "professionEmoji": "💉",
    "emoji": "🤖",
    "label": "#268 Siber Hemşire Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! Hemşire hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 268,
    "name": "Efsane Öğretmen",
    "category": "Hayvan",
    "profession": "Öğretmen",
    "professionEmoji": "📚",
    "emoji": "🦊",
    "label": "#269 Efsane Öğretmen",
    "motivation": "Kelime hazinesi zengin ve güçlü! Öğretmen hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 269,
    "name": "Kozmik Akademisyen",
    "category": "Uzaylı",
    "profession": "Akademisyen",
    "professionEmoji": "🎓",
    "emoji": "👽",
    "label": "#270 Kozmik Akademisyen",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Akademisyen hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 270,
    "name": "Büyülü Yazılımcı",
    "category": "Sihirli",
    "profession": "Yazılımcı",
    "professionEmoji": "💻",
    "emoji": "🧙",
    "label": "#271 Büyülü Yazılımcı",
    "motivation": "Öğrenme azmin hiç tükenmez! Yazılımcı hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 271,
    "name": "Afacan Veri Bilimci",
    "category": "Canavar",
    "profession": "Veri Bilimci",
    "professionEmoji": "📊",
    "emoji": "👾",
    "label": "#272 Afacan Veri Bilimci",
    "motivation": "Zorlu sorulardan asla korkmaz! Veri Bilimci hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 272,
    "name": "Usta Bilgisayar Mühendisi",
    "category": "Meslekler",
    "profession": "Bilgisayar Mühendisi",
    "professionEmoji": "🖥️",
    "emoji": "🖥️",
    "label": "#273 Usta Bilgisayar Mühendisi",
    "motivation": "Detayları gözünden kaçırmaz! Bilgisayar Mühendisi hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 273,
    "name": "Siber Yapay Zeka Uzmanı Bot",
    "category": "Robot",
    "profession": "Yapay Zeka Uzmanı",
    "professionEmoji": "🤖",
    "emoji": "🤖",
    "label": "#274 Siber Yapay Zeka Uzmanı Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! Yapay Zeka Uzmanı hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 274,
    "name": "Kıvrak Siber Güvenlik Uzmanı",
    "category": "Hayvan",
    "profession": "Siber Güvenlik Uzmanı",
    "professionEmoji": "🛡️",
    "emoji": "🦁",
    "label": "#275 Kıvrak Siber Güvenlik Uzmanı",
    "motivation": "Taktikleri hızla kavrar! Siber Güvenlik Uzmanı hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 275,
    "name": "Kozmik Elektrik Mühendisi",
    "category": "Uzaylı",
    "profession": "Elektrik Mühendisi",
    "professionEmoji": "⚡",
    "emoji": "👽",
    "label": "#276 Kozmik Elektrik Mühendisi",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Elektrik Mühendisi hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 276,
    "name": "Büyülü Makine Mühendisi",
    "category": "Sihirli",
    "profession": "Makine Mühendisi",
    "professionEmoji": "⚙️",
    "emoji": "🧙",
    "label": "#277 Büyülü Makine Mühendisi",
    "motivation": "Her denemede yeni bir zirve! Makine Mühendisi hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 277,
    "name": "Afacan İnşaat Mühendisi",
    "category": "Canavar",
    "profession": "İnşaat Mühendisi",
    "professionEmoji": "🏗️",
    "emoji": "👾",
    "label": "#278 Afacan İnşaat Mühendisi",
    "motivation": "Çalışırken enerjisi hiç bitmez! İnşaat Mühendisi hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 278,
    "name": "Efsane Mimar",
    "category": "Meslekler",
    "profession": "Mimar",
    "professionEmoji": "📐",
    "emoji": "📐",
    "label": "#279 Efsane Mimar",
    "motivation": "Kelime hazinesi zengin ve güçlü! Mimar hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 279,
    "name": "Siber İç Mimar Bot",
    "category": "Robot",
    "profession": "İç Mimar",
    "professionEmoji": "🛋️",
    "emoji": "🤖",
    "label": "#280 Siber İç Mimar Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! İç Mimar hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 280,
    "name": "Bilge Şehir Plancısı",
    "category": "Hayvan",
    "profession": "Şehir Plancısı",
    "professionEmoji": "🏙️",
    "emoji": "🐬",
    "label": "#281 Bilge Şehir Plancısı",
    "motivation": "Öğrenme azmin hiç tükenmez! Şehir Plancısı hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 281,
    "name": "Kozmik Avukat",
    "category": "Uzaylı",
    "profession": "Avukat",
    "professionEmoji": "⚖️",
    "emoji": "👽",
    "label": "#282 Kozmik Avukat",
    "motivation": "Zorlu sorulardan asla korkmaz! Avukat hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 282,
    "name": "Büyülü Hâkim",
    "category": "Sihirli",
    "profession": "Hâkim",
    "professionEmoji": "🧑‍⚖️",
    "emoji": "🧙",
    "label": "#283 Büyülü Hâkim",
    "motivation": "Detayları gözünden kaçırmaz! Hâkim hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 283,
    "name": "Afacan Savcı",
    "category": "Canavar",
    "profession": "Savcı",
    "professionEmoji": "🏛️",
    "emoji": "👾",
    "label": "#284 Afacan Savcı",
    "motivation": "Hedefin gökyüzü ve ötesi! Savcı hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 284,
    "name": "Kıvrak Noter",
    "category": "Meslekler",
    "profession": "Noter",
    "professionEmoji": "📜",
    "emoji": "📜",
    "label": "#285 Kıvrak Noter",
    "motivation": "Taktikleri hızla kavrar! Noter hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 285,
    "name": "Siber Diplomat Bot",
    "category": "Robot",
    "profession": "Diplomat",
    "professionEmoji": "🌐",
    "emoji": "🤖",
    "label": "#286 Siber Diplomat Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Diplomat hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 286,
    "name": "Şampiyon Polis",
    "category": "Hayvan",
    "profession": "Polis",
    "professionEmoji": "👮",
    "emoji": "🦅",
    "label": "#287 Şampiyon Polis",
    "motivation": "Her denemede yeni bir zirve! Polis hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 287,
    "name": "Kozmik Asker",
    "category": "Uzaylı",
    "profession": "Asker",
    "professionEmoji": "🪖",
    "emoji": "👽",
    "label": "#288 Kozmik Asker",
    "motivation": "Çalışırken enerjisi hiç bitmez! Asker hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 288,
    "name": "Büyülü İtfaiyeci",
    "category": "Sihirli",
    "profession": "İtfaiyeci",
    "professionEmoji": "👨‍🚒",
    "emoji": "🧙",
    "label": "#289 Büyülü İtfaiyeci",
    "motivation": "Kelime hazinesi zengin ve güçlü! İtfaiyeci hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 289,
    "name": "Afacan Pilot",
    "category": "Canavar",
    "profession": "Pilot",
    "professionEmoji": "👨‍✈️",
    "emoji": "👾",
    "label": "#290 Afacan Pilot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Pilot hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 290,
    "name": "Bilge Kabin Memuru",
    "category": "Meslekler",
    "profession": "Kabin Memuru",
    "professionEmoji": "🛫",
    "emoji": "🛫",
    "label": "#291 Bilge Kabin Memuru",
    "motivation": "Öğrenme azmin hiç tükenmez! Kabin Memuru hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 291,
    "name": "Siber Kaptan Bot",
    "category": "Robot",
    "profession": "Kaptan",
    "professionEmoji": "⚓",
    "emoji": "🤖",
    "label": "#292 Siber Kaptan Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! Kaptan hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 292,
    "name": "Usta Makinist",
    "category": "Hayvan",
    "profession": "Makinist",
    "professionEmoji": "🚆",
    "emoji": "🦊",
    "label": "#293 Usta Makinist",
    "motivation": "Detayları gözünden kaçırmaz! Makinist hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 293,
    "name": "Kozmik Şoför",
    "category": "Uzaylı",
    "profession": "Şoför",
    "professionEmoji": "🚌",
    "emoji": "👽",
    "label": "#294 Kozmik Şoför",
    "motivation": "Hedefin gökyüzü ve ötesi! Şoför hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 294,
    "name": "Büyülü Lojistik Uzmanı",
    "category": "Sihirli",
    "profession": "Lojistik Uzmanı",
    "professionEmoji": "📦",
    "emoji": "🧙",
    "label": "#295 Büyülü Lojistik Uzmanı",
    "motivation": "Taktikleri hızla kavrar! Lojistik Uzmanı hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 295,
    "name": "Afacan Hava Trafik Kontrolörü",
    "category": "Canavar",
    "profession": "Hava Trafik Kontrolörü",
    "professionEmoji": "🛰️",
    "emoji": "👾",
    "label": "#296 Afacan Hava Trafik Kontrolörü",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Hava Trafik Kontrolörü hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 296,
    "name": "Şampiyon Aşçı",
    "category": "Meslekler",
    "profession": "Aşçı",
    "professionEmoji": "👨‍🍳",
    "emoji": "👨‍🍳",
    "label": "#297 Şampiyon Aşçı",
    "motivation": "Her denemede yeni bir zirve! Aşçı hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 297,
    "name": "Siber Pastacı Bot",
    "category": "Robot",
    "profession": "Pastacı",
    "professionEmoji": "🎂",
    "emoji": "🤖",
    "label": "#298 Siber Pastacı Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! Pastacı hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 298,
    "name": "Efsane Fırıncı",
    "category": "Hayvan",
    "profession": "Fırıncı",
    "professionEmoji": "🥖",
    "emoji": "🦁",
    "label": "#299 Efsane Fırıncı",
    "motivation": "Kelime hazinesi zengin ve güçlü! Fırıncı hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 299,
    "name": "Kozmik Barista",
    "category": "Uzaylı",
    "profession": "Barista",
    "professionEmoji": "☕",
    "emoji": "👽",
    "label": "#300 Kozmik Barista",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Barista hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 300,
    "name": "Büyülü Garson",
    "category": "Sihirli",
    "profession": "Garson",
    "professionEmoji": "🍽️",
    "emoji": "🧙",
    "label": "#301 Büyülü Garson",
    "motivation": "Öğrenme azmin hiç tükenmez! Garson hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 301,
    "name": "Afacan Çiftçi",
    "category": "Canavar",
    "profession": "Çiftçi",
    "professionEmoji": "🚜",
    "emoji": "👾",
    "label": "#302 Afacan Çiftçi",
    "motivation": "Zorlu sorulardan asla korkmaz! Çiftçi hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 302,
    "name": "Usta Ziraat Mühendisi",
    "category": "Meslekler",
    "profession": "Ziraat Mühendisi",
    "professionEmoji": "🌾",
    "emoji": "🌾",
    "label": "#303 Usta Ziraat Mühendisi",
    "motivation": "Detayları gözünden kaçırmaz! Ziraat Mühendisi hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 303,
    "name": "Siber Bahçıvan Bot",
    "category": "Robot",
    "profession": "Bahçıvan",
    "professionEmoji": "🌻",
    "emoji": "🤖",
    "label": "#304 Siber Bahçıvan Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! Bahçıvan hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 304,
    "name": "Kıvrak Veteriner",
    "category": "Hayvan",
    "profession": "Veteriner",
    "professionEmoji": "🐾",
    "emoji": "🐬",
    "label": "#305 Kıvrak Veteriner",
    "motivation": "Taktikleri hızla kavrar! Veteriner hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 305,
    "name": "Kozmik Diş Hekimi",
    "category": "Uzaylı",
    "profession": "Diş Hekimi",
    "professionEmoji": "🦷",
    "emoji": "👽",
    "label": "#306 Kozmik Diş Hekimi",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Diş Hekimi hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 306,
    "name": "Büyülü Eczacı",
    "category": "Sihirli",
    "profession": "Eczacı",
    "professionEmoji": "💊",
    "emoji": "🧙",
    "label": "#307 Büyülü Eczacı",
    "motivation": "Her denemede yeni bir zirve! Eczacı hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 307,
    "name": "Afacan Psikolog",
    "category": "Canavar",
    "profession": "Psikolog",
    "professionEmoji": "🧠",
    "emoji": "👾",
    "label": "#308 Afacan Psikolog",
    "motivation": "Çalışırken enerjisi hiç bitmez! Psikolog hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 308,
    "name": "Efsane Psikiyatrist",
    "category": "Meslekler",
    "profession": "Psikiyatrist",
    "professionEmoji": "🛋️",
    "emoji": "🛋️",
    "label": "#309 Efsane Psikiyatrist",
    "motivation": "Kelime hazinesi zengin ve güçlü! Psikiyatrist hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 309,
    "name": "Siber Diyetisyen Bot",
    "category": "Robot",
    "profession": "Diyetisyen",
    "professionEmoji": "🥗",
    "emoji": "🤖",
    "label": "#310 Siber Diyetisyen Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Diyetisyen hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 310,
    "name": "Bilge Fizyoterapist",
    "category": "Hayvan",
    "profession": "Fizyoterapist",
    "professionEmoji": "🏃",
    "emoji": "🦅",
    "label": "#311 Bilge Fizyoterapist",
    "motivation": "Öğrenme azmin hiç tükenmez! Fizyoterapist hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 311,
    "name": "Kozmik Radyolog",
    "category": "Uzaylı",
    "profession": "Radyolog",
    "professionEmoji": "🩻",
    "emoji": "👽",
    "label": "#312 Kozmik Radyolog",
    "motivation": "Zorlu sorulardan asla korkmaz! Radyolog hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 312,
    "name": "Büyülü Biyolog",
    "category": "Sihirli",
    "profession": "Biyolog",
    "professionEmoji": "🔬",
    "emoji": "🧙",
    "label": "#313 Büyülü Biyolog",
    "motivation": "Detayları gözünden kaçırmaz! Biyolog hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 313,
    "name": "Afacan Kimyager",
    "category": "Canavar",
    "profession": "Kimyager",
    "professionEmoji": "🧪",
    "emoji": "👾",
    "label": "#314 Afacan Kimyager",
    "motivation": "Hedefin gökyüzü ve ötesi! Kimyager hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 314,
    "name": "Kıvrak Fizikçi",
    "category": "Meslekler",
    "profession": "Fizikçi",
    "professionEmoji": "⚛️",
    "emoji": "⚛️",
    "label": "#315 Kıvrak Fizikçi",
    "motivation": "Taktikleri hızla kavrar! Fizikçi hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 315,
    "name": "Siber Astronom Bot",
    "category": "Robot",
    "profession": "Astronom",
    "professionEmoji": "🔭",
    "emoji": "🤖",
    "label": "#316 Siber Astronom Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Astronom hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 316,
    "name": "Şampiyon Astronot",
    "category": "Hayvan",
    "profession": "Astronot",
    "professionEmoji": "🧑‍🚀",
    "emoji": "🦊",
    "label": "#317 Şampiyon Astronot",
    "motivation": "Her denemede yeni bir zirve! Astronot hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 317,
    "name": "Kozmik Genetik Mühendisi",
    "category": "Uzaylı",
    "profession": "Genetik Mühendisi",
    "professionEmoji": "🧬",
    "emoji": "👽",
    "label": "#318 Kozmik Genetik Mühendisi",
    "motivation": "Çalışırken enerjisi hiç bitmez! Genetik Mühendisi hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 318,
    "name": "Büyülü Jeolog",
    "category": "Sihirli",
    "profession": "Jeolog",
    "professionEmoji": "🌋",
    "emoji": "🧙",
    "label": "#319 Büyülü Jeolog",
    "motivation": "Kelime hazinesi zengin ve güçlü! Jeolog hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 319,
    "name": "Afacan Meteorolog",
    "category": "Canavar",
    "profession": "Meteorolog",
    "professionEmoji": "🌦️",
    "emoji": "👾",
    "label": "#320 Afacan Meteorolog",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Meteorolog hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 320,
    "name": "Bilge Arkeolog",
    "category": "Meslekler",
    "profession": "Arkeolog",
    "professionEmoji": "🏺",
    "emoji": "🏺",
    "label": "#321 Bilge Arkeolog",
    "motivation": "Öğrenme azmin hiç tükenmez! Arkeolog hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 321,
    "name": "Siber Antropolog Bot",
    "category": "Robot",
    "profession": "Antropolog",
    "professionEmoji": "🗿",
    "emoji": "🤖",
    "label": "#322 Siber Antropolog Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! Antropolog hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 322,
    "name": "Usta Tarihçi",
    "category": "Hayvan",
    "profession": "Tarihçi",
    "professionEmoji": "📜",
    "emoji": "🦁",
    "label": "#323 Usta Tarihçi",
    "motivation": "Detayları gözünden kaçırmaz! Tarihçi hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 323,
    "name": "Kozmik Sosyolog",
    "category": "Uzaylı",
    "profession": "Sosyolog",
    "professionEmoji": "👥",
    "emoji": "👽",
    "label": "#324 Kozmik Sosyolog",
    "motivation": "Hedefin gökyüzü ve ötesi! Sosyolog hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 324,
    "name": "Büyülü Felsefeci",
    "category": "Sihirli",
    "profession": "Felsefeci",
    "professionEmoji": "💭",
    "emoji": "🧙",
    "label": "#325 Büyülü Felsefeci",
    "motivation": "Taktikleri hızla kavrar! Felsefeci hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 325,
    "name": "Afacan Dilbilimci",
    "category": "Canavar",
    "profession": "Dilbilimci",
    "professionEmoji": "🗣️",
    "emoji": "👾",
    "label": "#326 Afacan Dilbilimci",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Dilbilimci hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 326,
    "name": "Şampiyon Çevirmen",
    "category": "Meslekler",
    "profession": "Çevirmen",
    "professionEmoji": "🌐",
    "emoji": "🌐",
    "label": "#327 Şampiyon Çevirmen",
    "motivation": "Her denemede yeni bir zirve! Çevirmen hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 327,
    "name": "Siber Mütercim Tercüman Bot",
    "category": "Robot",
    "profession": "Mütercim Tercüman",
    "professionEmoji": "📖",
    "emoji": "🤖",
    "label": "#328 Siber Mütercim Tercüman Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! Mütercim Tercüman hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 328,
    "name": "Efsane Gazeteci",
    "category": "Hayvan",
    "profession": "Gazeteci",
    "professionEmoji": "📰",
    "emoji": "🐬",
    "label": "#329 Efsane Gazeteci",
    "motivation": "Kelime hazinesi zengin ve güçlü! Gazeteci hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 329,
    "name": "Kozmik Muhabir",
    "category": "Uzaylı",
    "profession": "Muhabir",
    "professionEmoji": "🎙️",
    "emoji": "👽",
    "label": "#330 Kozmik Muhabir",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Muhabir hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 330,
    "name": "Büyülü Editör",
    "category": "Sihirli",
    "profession": "Editör",
    "professionEmoji": "✍️",
    "emoji": "🧙",
    "label": "#331 Büyülü Editör",
    "motivation": "Öğrenme azmin hiç tükenmez! Editör hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 331,
    "name": "Afacan Yazar",
    "category": "Canavar",
    "profession": "Yazar",
    "professionEmoji": "🖋️",
    "emoji": "👾",
    "label": "#332 Afacan Yazar",
    "motivation": "Zorlu sorulardan asla korkmaz! Yazar hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 332,
    "name": "Usta Şair",
    "category": "Meslekler",
    "profession": "Şair",
    "professionEmoji": "📜",
    "emoji": "📜",
    "label": "#333 Usta Şair",
    "motivation": "Detayları gözünden kaçırmaz! Şair hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 333,
    "name": "Siber Fotoğrafçı Bot",
    "category": "Robot",
    "profession": "Fotoğrafçı",
    "professionEmoji": "📷",
    "emoji": "🤖",
    "label": "#334 Siber Fotoğrafçı Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! Fotoğrafçı hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 334,
    "name": "Kıvrak Kameraman",
    "category": "Hayvan",
    "profession": "Kameraman",
    "professionEmoji": "🎥",
    "emoji": "🦅",
    "label": "#335 Kıvrak Kameraman",
    "motivation": "Taktikleri hızla kavrar! Kameraman hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 335,
    "name": "Kozmik Yönetmen",
    "category": "Uzaylı",
    "profession": "Yönetmen",
    "professionEmoji": "🎬",
    "emoji": "👽",
    "label": "#336 Kozmik Yönetmen",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Yönetmen hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 336,
    "name": "Büyülü Senarist",
    "category": "Sihirli",
    "profession": "Senarist",
    "professionEmoji": "📑",
    "emoji": "🧙",
    "label": "#337 Büyülü Senarist",
    "motivation": "Her denemede yeni bir zirve! Senarist hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 337,
    "name": "Afacan Oyuncu",
    "category": "Canavar",
    "profession": "Oyuncu",
    "professionEmoji": "🎭",
    "emoji": "👾",
    "label": "#338 Afacan Oyuncu",
    "motivation": "Çalışırken enerjisi hiç bitmez! Oyuncu hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 338,
    "name": "Efsane Ses Sanatçısı",
    "category": "Meslekler",
    "profession": "Ses Sanatçısı",
    "professionEmoji": "🎤",
    "emoji": "🎤",
    "label": "#339 Efsane Ses Sanatçısı",
    "motivation": "Kelime hazinesi zengin ve güçlü! Ses Sanatçısı hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 339,
    "name": "Siber Müzisyen Bot",
    "category": "Robot",
    "profession": "Müzisyen",
    "professionEmoji": "🎵",
    "emoji": "🤖",
    "label": "#340 Siber Müzisyen Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Müzisyen hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 340,
    "name": "Bilge Besteci",
    "category": "Hayvan",
    "profession": "Besteci",
    "professionEmoji": "🎼",
    "emoji": "🦊",
    "label": "#341 Bilge Besteci",
    "motivation": "Öğrenme azmin hiç tükenmez! Besteci hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 341,
    "name": "Kozmik Ressam",
    "category": "Uzaylı",
    "profession": "Ressam",
    "professionEmoji": "🎨",
    "emoji": "👽",
    "label": "#342 Kozmik Ressam",
    "motivation": "Zorlu sorulardan asla korkmaz! Ressam hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 342,
    "name": "Büyülü Heykeltıraş",
    "category": "Sihirli",
    "profession": "Heykeltıraş",
    "professionEmoji": "🗿",
    "emoji": "🧙",
    "label": "#343 Büyülü Heykeltıraş",
    "motivation": "Detayları gözünden kaçırmaz! Heykeltıraş hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 343,
    "name": "Afacan Grafik Tasarımcı",
    "category": "Canavar",
    "profession": "Grafik Tasarımcı",
    "professionEmoji": "🖌️",
    "emoji": "👾",
    "label": "#344 Afacan Grafik Tasarımcı",
    "motivation": "Hedefin gökyüzü ve ötesi! Grafik Tasarımcı hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 344,
    "name": "Kıvrak Moda Tasarımcısı",
    "category": "Meslekler",
    "profession": "Moda Tasarımcısı",
    "professionEmoji": "👗",
    "emoji": "👗",
    "label": "#345 Kıvrak Moda Tasarımcısı",
    "motivation": "Taktikleri hızla kavrar! Moda Tasarımcısı hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 345,
    "name": "Siber Animasyon Sanatçısı Bot",
    "category": "Robot",
    "profession": "Animasyon Sanatçısı",
    "professionEmoji": "🎞️",
    "emoji": "🤖",
    "label": "#346 Siber Animasyon Sanatçısı Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Animasyon Sanatçısı hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 346,
    "name": "Şampiyon Ses Mühendisi",
    "category": "Hayvan",
    "profession": "Ses Mühendisi",
    "professionEmoji": "🎚️",
    "emoji": "🦁",
    "label": "#347 Şampiyon Ses Mühendisi",
    "motivation": "Her denemede yeni bir zirve! Ses Mühendisi hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 347,
    "name": "Kozmik Elektrikçi",
    "category": "Uzaylı",
    "profession": "Elektrikçi",
    "professionEmoji": "💡",
    "emoji": "👽",
    "label": "#348 Kozmik Elektrikçi",
    "motivation": "Çalışırken enerjisi hiç bitmez! Elektrikçi hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 348,
    "name": "Büyülü Tesisatçı",
    "category": "Sihirli",
    "profession": "Tesisatçı",
    "professionEmoji": "🔧",
    "emoji": "🧙",
    "label": "#349 Büyülü Tesisatçı",
    "motivation": "Kelime hazinesi zengin ve güçlü! Tesisatçı hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 349,
    "name": "Afacan Marangoz",
    "category": "Canavar",
    "profession": "Marangoz",
    "professionEmoji": "🪚",
    "emoji": "👾",
    "label": "#350 Afacan Marangoz",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Marangoz hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 350,
    "name": "Bilge Kaynakçı",
    "category": "Meslekler",
    "profession": "Kaynakçı",
    "professionEmoji": "👨‍🏭",
    "emoji": "👨‍🏭",
    "label": "#351 Bilge Kaynakçı",
    "motivation": "Öğrenme azmin hiç tükenmez! Kaynakçı hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 351,
    "name": "Siber Oto Tamircisi Bot",
    "category": "Robot",
    "profession": "Oto Tamircisi",
    "professionEmoji": "🚗",
    "emoji": "🤖",
    "label": "#352 Siber Oto Tamircisi Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! Oto Tamircisi hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 352,
    "name": "Usta İnşaat Ustası",
    "category": "Hayvan",
    "profession": "İnşaat Ustası",
    "professionEmoji": "🧱",
    "emoji": "🐬",
    "label": "#353 Usta İnşaat Ustası",
    "motivation": "Detayları gözünden kaçırmaz! İnşaat Ustası hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 353,
    "name": "Kozmik Boyacı",
    "category": "Uzaylı",
    "profession": "Boyacı",
    "professionEmoji": "🖌️",
    "emoji": "👽",
    "label": "#354 Kozmik Boyacı",
    "motivation": "Hedefin gökyüzü ve ötesi! Boyacı hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 354,
    "name": "Büyülü Çilingir",
    "category": "Sihirli",
    "profession": "Çilingir",
    "professionEmoji": "🗝️",
    "emoji": "🧙",
    "label": "#355 Büyülü Çilingir",
    "motivation": "Taktikleri hızla kavrar! Çilingir hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 355,
    "name": "Afacan Terzi",
    "category": "Canavar",
    "profession": "Terzi",
    "professionEmoji": "🧵",
    "emoji": "👾",
    "label": "#356 Afacan Terzi",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Terzi hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 356,
    "name": "Şampiyon Ayakkabıcı",
    "category": "Meslekler",
    "profession": "Ayakkabıcı",
    "professionEmoji": "👞",
    "emoji": "👞",
    "label": "#357 Şampiyon Ayakkabıcı",
    "motivation": "Her denemede yeni bir zirve! Ayakkabıcı hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 357,
    "name": "Siber Saatçi Bot",
    "category": "Robot",
    "profession": "Saatçi",
    "professionEmoji": "⌚",
    "emoji": "🤖",
    "label": "#358 Siber Saatçi Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! Saatçi hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 358,
    "name": "Efsane Kuyumcu",
    "category": "Hayvan",
    "profession": "Kuyumcu",
    "professionEmoji": "💍",
    "emoji": "🦅",
    "label": "#359 Efsane Kuyumcu",
    "motivation": "Kelime hazinesi zengin ve güçlü! Kuyumcu hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 359,
    "name": "Kozmik Mali Müşavir",
    "category": "Uzaylı",
    "profession": "Mali Müşavir",
    "professionEmoji": "📈",
    "emoji": "👽",
    "label": "#360 Kozmik Mali Müşavir",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Mali Müşavir hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 360,
    "name": "Büyülü Muhasebeci",
    "category": "Sihirli",
    "profession": "Muhasebeci",
    "professionEmoji": "🧾",
    "emoji": "🧙",
    "label": "#361 Büyülü Muhasebeci",
    "motivation": "Öğrenme azmin hiç tükenmez! Muhasebeci hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 361,
    "name": "Afacan İktisatçı",
    "category": "Canavar",
    "profession": "İktisatçı",
    "professionEmoji": "💹",
    "emoji": "👾",
    "label": "#362 Afacan İktisatçı",
    "motivation": "Zorlu sorulardan asla korkmaz! İktisatçı hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 362,
    "name": "Usta Pazarlama Uzmanı",
    "category": "Meslekler",
    "profession": "Pazarlama Uzmanı",
    "professionEmoji": "📣",
    "emoji": "📣",
    "label": "#363 Usta Pazarlama Uzmanı",
    "motivation": "Detayları gözünden kaçırmaz! Pazarlama Uzmanı hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 363,
    "name": "Siber İnsan Kaynakları Uzmanı Bot",
    "category": "Robot",
    "profession": "İnsan Kaynakları Uzmanı",
    "professionEmoji": "🤝",
    "emoji": "🤖",
    "label": "#364 Siber İnsan Kaynakları Uzmanı Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! İnsan Kaynakları Uzmanı hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 364,
    "name": "Kıvrak Bankacı",
    "category": "Hayvan",
    "profession": "Bankacı",
    "professionEmoji": "🏦",
    "emoji": "🦊",
    "label": "#365 Kıvrak Bankacı",
    "motivation": "Taktikleri hızla kavrar! Bankacı hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 365,
    "name": "Kozmik Girişimci",
    "category": "Uzaylı",
    "profession": "Girişimci",
    "professionEmoji": "🚀",
    "emoji": "👽",
    "label": "#366 Kozmik Girişimci",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Girişimci hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 366,
    "name": "Büyülü Proje Yöneticisi",
    "category": "Sihirli",
    "profession": "Proje Yöneticisi",
    "professionEmoji": "📋",
    "emoji": "🧙",
    "label": "#367 Büyülü Proje Yöneticisi",
    "motivation": "Her denemede yeni bir zirve! Proje Yöneticisi hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 367,
    "name": "Afacan Ürün Yöneticisi",
    "category": "Canavar",
    "profession": "Ürün Yöneticisi",
    "professionEmoji": "📱",
    "emoji": "👾",
    "label": "#368 Afacan Ürün Yöneticisi",
    "motivation": "Çalışırken enerjisi hiç bitmez! Ürün Yöneticisi hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 368,
    "name": "Efsane Deniz Biyoloğu",
    "category": "Meslekler",
    "profession": "Deniz Biyoloğu",
    "professionEmoji": "🐬",
    "emoji": "🐬",
    "label": "#369 Efsane Deniz Biyoloğu",
    "motivation": "Kelime hazinesi zengin ve güçlü! Deniz Biyoloğu hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 369,
    "name": "Siber Ekolojist Bot",
    "category": "Robot",
    "profession": "Ekolojist",
    "professionEmoji": "🌿",
    "emoji": "🤖",
    "label": "#370 Siber Ekolojist Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Ekolojist hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 370,
    "name": "Bilge Kütüphaneci",
    "category": "Hayvan",
    "profession": "Kütüphaneci",
    "professionEmoji": "📖",
    "emoji": "🦁",
    "label": "#371 Bilge Kütüphaneci",
    "motivation": "Öğrenme azmin hiç tükenmez! Kütüphaneci hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 371,
    "name": "Kozmik Arşivci",
    "category": "Uzaylı",
    "profession": "Arşivci",
    "professionEmoji": "🗃️",
    "emoji": "👽",
    "label": "#372 Kozmik Arşivci",
    "motivation": "Zorlu sorulardan asla korkmaz! Arşivci hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 372,
    "name": "Büyülü Turist Rehberi",
    "category": "Sihirli",
    "profession": "Turist Rehberi",
    "professionEmoji": "🗺️",
    "emoji": "🧙",
    "label": "#373 Büyülü Turist Rehberi",
    "motivation": "Detayları gözünden kaçırmaz! Turist Rehberi hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 373,
    "name": "Afacan Spor Antrenörü",
    "category": "Canavar",
    "profession": "Spor Antrenörü",
    "professionEmoji": "🏅",
    "emoji": "👾",
    "label": "#374 Afacan Spor Antrenörü",
    "motivation": "Hedefin gökyüzü ve ötesi! Spor Antrenörü hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 374,
    "name": "Kıvrak Doktor",
    "category": "Meslekler",
    "profession": "Doktor",
    "professionEmoji": "🩺",
    "emoji": "🩺",
    "label": "#375 Kıvrak Doktor",
    "motivation": "Taktikleri hızla kavrar! Doktor hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 375,
    "name": "Siber Hemşire Bot",
    "category": "Robot",
    "profession": "Hemşire",
    "professionEmoji": "💉",
    "emoji": "🤖",
    "label": "#376 Siber Hemşire Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Hemşire hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 376,
    "name": "Şampiyon Öğretmen",
    "category": "Hayvan",
    "profession": "Öğretmen",
    "professionEmoji": "📚",
    "emoji": "🐬",
    "label": "#377 Şampiyon Öğretmen",
    "motivation": "Her denemede yeni bir zirve! Öğretmen hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 377,
    "name": "Kozmik Akademisyen",
    "category": "Uzaylı",
    "profession": "Akademisyen",
    "professionEmoji": "🎓",
    "emoji": "👽",
    "label": "#378 Kozmik Akademisyen",
    "motivation": "Çalışırken enerjisi hiç bitmez! Akademisyen hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 378,
    "name": "Büyülü Yazılımcı",
    "category": "Sihirli",
    "profession": "Yazılımcı",
    "professionEmoji": "💻",
    "emoji": "🧙",
    "label": "#379 Büyülü Yazılımcı",
    "motivation": "Kelime hazinesi zengin ve güçlü! Yazılımcı hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 379,
    "name": "Afacan Veri Bilimci",
    "category": "Canavar",
    "profession": "Veri Bilimci",
    "professionEmoji": "📊",
    "emoji": "👾",
    "label": "#380 Afacan Veri Bilimci",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Veri Bilimci hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 380,
    "name": "Bilge Bilgisayar Mühendisi",
    "category": "Meslekler",
    "profession": "Bilgisayar Mühendisi",
    "professionEmoji": "🖥️",
    "emoji": "🖥️",
    "label": "#381 Bilge Bilgisayar Mühendisi",
    "motivation": "Öğrenme azmin hiç tükenmez! Bilgisayar Mühendisi hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 381,
    "name": "Siber Yapay Zeka Uzmanı Bot",
    "category": "Robot",
    "profession": "Yapay Zeka Uzmanı",
    "professionEmoji": "🤖",
    "emoji": "🤖",
    "label": "#382 Siber Yapay Zeka Uzmanı Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! Yapay Zeka Uzmanı hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 382,
    "name": "Usta Siber Güvenlik Uzmanı",
    "category": "Hayvan",
    "profession": "Siber Güvenlik Uzmanı",
    "professionEmoji": "🛡️",
    "emoji": "🦅",
    "label": "#383 Usta Siber Güvenlik Uzmanı",
    "motivation": "Detayları gözünden kaçırmaz! Siber Güvenlik Uzmanı hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 383,
    "name": "Kozmik Elektrik Mühendisi",
    "category": "Uzaylı",
    "profession": "Elektrik Mühendisi",
    "professionEmoji": "⚡",
    "emoji": "👽",
    "label": "#384 Kozmik Elektrik Mühendisi",
    "motivation": "Hedefin gökyüzü ve ötesi! Elektrik Mühendisi hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 384,
    "name": "Büyülü Makine Mühendisi",
    "category": "Sihirli",
    "profession": "Makine Mühendisi",
    "professionEmoji": "⚙️",
    "emoji": "🧙",
    "label": "#385 Büyülü Makine Mühendisi",
    "motivation": "Taktikleri hızla kavrar! Makine Mühendisi hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 385,
    "name": "Afacan İnşaat Mühendisi",
    "category": "Canavar",
    "profession": "İnşaat Mühendisi",
    "professionEmoji": "🏗️",
    "emoji": "👾",
    "label": "#386 Afacan İnşaat Mühendisi",
    "motivation": "180 dakika boyunca dikkati dağılmaz! İnşaat Mühendisi hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 386,
    "name": "Şampiyon Mimar",
    "category": "Meslekler",
    "profession": "Mimar",
    "professionEmoji": "📐",
    "emoji": "📐",
    "label": "#387 Şampiyon Mimar",
    "motivation": "Her denemede yeni bir zirve! Mimar hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 387,
    "name": "Siber İç Mimar Bot",
    "category": "Robot",
    "profession": "İç Mimar",
    "professionEmoji": "🛋️",
    "emoji": "🤖",
    "label": "#388 Siber İç Mimar Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! İç Mimar hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 388,
    "name": "Efsane Şehir Plancısı",
    "category": "Hayvan",
    "profession": "Şehir Plancısı",
    "professionEmoji": "🏙️",
    "emoji": "🦊",
    "label": "#389 Efsane Şehir Plancısı",
    "motivation": "Kelime hazinesi zengin ve güçlü! Şehir Plancısı hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 389,
    "name": "Kozmik Avukat",
    "category": "Uzaylı",
    "profession": "Avukat",
    "professionEmoji": "⚖️",
    "emoji": "👽",
    "label": "#390 Kozmik Avukat",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Avukat hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 390,
    "name": "Büyülü Hâkim",
    "category": "Sihirli",
    "profession": "Hâkim",
    "professionEmoji": "🧑‍⚖️",
    "emoji": "🧙",
    "label": "#391 Büyülü Hâkim",
    "motivation": "Öğrenme azmin hiç tükenmez! Hâkim hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 391,
    "name": "Afacan Savcı",
    "category": "Canavar",
    "profession": "Savcı",
    "professionEmoji": "🏛️",
    "emoji": "👾",
    "label": "#392 Afacan Savcı",
    "motivation": "Zorlu sorulardan asla korkmaz! Savcı hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 392,
    "name": "Usta Noter",
    "category": "Meslekler",
    "profession": "Noter",
    "professionEmoji": "📜",
    "emoji": "📜",
    "label": "#393 Usta Noter",
    "motivation": "Detayları gözünden kaçırmaz! Noter hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 393,
    "name": "Siber Diplomat Bot",
    "category": "Robot",
    "profession": "Diplomat",
    "professionEmoji": "🌐",
    "emoji": "🤖",
    "label": "#394 Siber Diplomat Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! Diplomat hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 394,
    "name": "Kıvrak Polis",
    "category": "Hayvan",
    "profession": "Polis",
    "professionEmoji": "👮",
    "emoji": "🦁",
    "label": "#395 Kıvrak Polis",
    "motivation": "Taktikleri hızla kavrar! Polis hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 395,
    "name": "Kozmik Asker",
    "category": "Uzaylı",
    "profession": "Asker",
    "professionEmoji": "🪖",
    "emoji": "👽",
    "label": "#396 Kozmik Asker",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Asker hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 396,
    "name": "Büyülü İtfaiyeci",
    "category": "Sihirli",
    "profession": "İtfaiyeci",
    "professionEmoji": "👨‍🚒",
    "emoji": "🧙",
    "label": "#397 Büyülü İtfaiyeci",
    "motivation": "Her denemede yeni bir zirve! İtfaiyeci hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 397,
    "name": "Afacan Pilot",
    "category": "Canavar",
    "profession": "Pilot",
    "professionEmoji": "👨‍✈️",
    "emoji": "👾",
    "label": "#398 Afacan Pilot",
    "motivation": "Çalışırken enerjisi hiç bitmez! Pilot hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 398,
    "name": "Efsane Kabin Memuru",
    "category": "Meslekler",
    "profession": "Kabin Memuru",
    "professionEmoji": "🛫",
    "emoji": "🛫",
    "label": "#399 Efsane Kabin Memuru",
    "motivation": "Kelime hazinesi zengin ve güçlü! Kabin Memuru hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 399,
    "name": "Siber Kaptan Bot",
    "category": "Robot",
    "profession": "Kaptan",
    "professionEmoji": "⚓",
    "emoji": "🤖",
    "label": "#400 Siber Kaptan Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Kaptan hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 400,
    "name": "Bilge Makinist",
    "category": "Hayvan",
    "profession": "Makinist",
    "professionEmoji": "🚆",
    "emoji": "🐬",
    "label": "#401 Bilge Makinist",
    "motivation": "Öğrenme azmin hiç tükenmez! Makinist hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 401,
    "name": "Kozmik Şoför",
    "category": "Uzaylı",
    "profession": "Şoför",
    "professionEmoji": "🚌",
    "emoji": "👽",
    "label": "#402 Kozmik Şoför",
    "motivation": "Zorlu sorulardan asla korkmaz! Şoför hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 402,
    "name": "Büyülü Lojistik Uzmanı",
    "category": "Sihirli",
    "profession": "Lojistik Uzmanı",
    "professionEmoji": "📦",
    "emoji": "🧙",
    "label": "#403 Büyülü Lojistik Uzmanı",
    "motivation": "Detayları gözünden kaçırmaz! Lojistik Uzmanı hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 403,
    "name": "Afacan Hava Trafik Kontrolörü",
    "category": "Canavar",
    "profession": "Hava Trafik Kontrolörü",
    "professionEmoji": "🛰️",
    "emoji": "👾",
    "label": "#404 Afacan Hava Trafik Kontrolörü",
    "motivation": "Hedefin gökyüzü ve ötesi! Hava Trafik Kontrolörü hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 404,
    "name": "Kıvrak Aşçı",
    "category": "Meslekler",
    "profession": "Aşçı",
    "professionEmoji": "👨‍🍳",
    "emoji": "👨‍🍳",
    "label": "#405 Kıvrak Aşçı",
    "motivation": "Taktikleri hızla kavrar! Aşçı hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 405,
    "name": "Siber Pastacı Bot",
    "category": "Robot",
    "profession": "Pastacı",
    "professionEmoji": "🎂",
    "emoji": "🤖",
    "label": "#406 Siber Pastacı Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Pastacı hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 406,
    "name": "Şampiyon Fırıncı",
    "category": "Hayvan",
    "profession": "Fırıncı",
    "professionEmoji": "🥖",
    "emoji": "🦅",
    "label": "#407 Şampiyon Fırıncı",
    "motivation": "Her denemede yeni bir zirve! Fırıncı hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 407,
    "name": "Kozmik Barista",
    "category": "Uzaylı",
    "profession": "Barista",
    "professionEmoji": "☕",
    "emoji": "👽",
    "label": "#408 Kozmik Barista",
    "motivation": "Çalışırken enerjisi hiç bitmez! Barista hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 408,
    "name": "Büyülü Garson",
    "category": "Sihirli",
    "profession": "Garson",
    "professionEmoji": "🍽️",
    "emoji": "🧙",
    "label": "#409 Büyülü Garson",
    "motivation": "Kelime hazinesi zengin ve güçlü! Garson hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 409,
    "name": "Afacan Çiftçi",
    "category": "Canavar",
    "profession": "Çiftçi",
    "professionEmoji": "🚜",
    "emoji": "👾",
    "label": "#410 Afacan Çiftçi",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Çiftçi hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 410,
    "name": "Bilge Ziraat Mühendisi",
    "category": "Meslekler",
    "profession": "Ziraat Mühendisi",
    "professionEmoji": "🌾",
    "emoji": "🌾",
    "label": "#411 Bilge Ziraat Mühendisi",
    "motivation": "Öğrenme azmin hiç tükenmez! Ziraat Mühendisi hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 411,
    "name": "Siber Bahçıvan Bot",
    "category": "Robot",
    "profession": "Bahçıvan",
    "professionEmoji": "🌻",
    "emoji": "🤖",
    "label": "#412 Siber Bahçıvan Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! Bahçıvan hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 412,
    "name": "Usta Veteriner",
    "category": "Hayvan",
    "profession": "Veteriner",
    "professionEmoji": "🐾",
    "emoji": "🦊",
    "label": "#413 Usta Veteriner",
    "motivation": "Detayları gözünden kaçırmaz! Veteriner hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 413,
    "name": "Kozmik Diş Hekimi",
    "category": "Uzaylı",
    "profession": "Diş Hekimi",
    "professionEmoji": "🦷",
    "emoji": "👽",
    "label": "#414 Kozmik Diş Hekimi",
    "motivation": "Hedefin gökyüzü ve ötesi! Diş Hekimi hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 414,
    "name": "Büyülü Eczacı",
    "category": "Sihirli",
    "profession": "Eczacı",
    "professionEmoji": "💊",
    "emoji": "🧙",
    "label": "#415 Büyülü Eczacı",
    "motivation": "Taktikleri hızla kavrar! Eczacı hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 415,
    "name": "Afacan Psikolog",
    "category": "Canavar",
    "profession": "Psikolog",
    "professionEmoji": "🧠",
    "emoji": "👾",
    "label": "#416 Afacan Psikolog",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Psikolog hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 416,
    "name": "Şampiyon Psikiyatrist",
    "category": "Meslekler",
    "profession": "Psikiyatrist",
    "professionEmoji": "🛋️",
    "emoji": "🛋️",
    "label": "#417 Şampiyon Psikiyatrist",
    "motivation": "Her denemede yeni bir zirve! Psikiyatrist hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 417,
    "name": "Siber Diyetisyen Bot",
    "category": "Robot",
    "profession": "Diyetisyen",
    "professionEmoji": "🥗",
    "emoji": "🤖",
    "label": "#418 Siber Diyetisyen Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! Diyetisyen hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 418,
    "name": "Efsane Fizyoterapist",
    "category": "Hayvan",
    "profession": "Fizyoterapist",
    "professionEmoji": "🏃",
    "emoji": "🦁",
    "label": "#419 Efsane Fizyoterapist",
    "motivation": "Kelime hazinesi zengin ve güçlü! Fizyoterapist hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 419,
    "name": "Kozmik Radyolog",
    "category": "Uzaylı",
    "profession": "Radyolog",
    "professionEmoji": "🩻",
    "emoji": "👽",
    "label": "#420 Kozmik Radyolog",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Radyolog hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 420,
    "name": "Büyülü Biyolog",
    "category": "Sihirli",
    "profession": "Biyolog",
    "professionEmoji": "🔬",
    "emoji": "🧙",
    "label": "#421 Büyülü Biyolog",
    "motivation": "Öğrenme azmin hiç tükenmez! Biyolog hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 421,
    "name": "Afacan Kimyager",
    "category": "Canavar",
    "profession": "Kimyager",
    "professionEmoji": "🧪",
    "emoji": "👾",
    "label": "#422 Afacan Kimyager",
    "motivation": "Zorlu sorulardan asla korkmaz! Kimyager hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 422,
    "name": "Usta Fizikçi",
    "category": "Meslekler",
    "profession": "Fizikçi",
    "professionEmoji": "⚛️",
    "emoji": "⚛️",
    "label": "#423 Usta Fizikçi",
    "motivation": "Detayları gözünden kaçırmaz! Fizikçi hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 423,
    "name": "Siber Astronom Bot",
    "category": "Robot",
    "profession": "Astronom",
    "professionEmoji": "🔭",
    "emoji": "🤖",
    "label": "#424 Siber Astronom Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! Astronom hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 424,
    "name": "Kıvrak Astronot",
    "category": "Hayvan",
    "profession": "Astronot",
    "professionEmoji": "🧑‍🚀",
    "emoji": "🐬",
    "label": "#425 Kıvrak Astronot",
    "motivation": "Taktikleri hızla kavrar! Astronot hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 425,
    "name": "Kozmik Genetik Mühendisi",
    "category": "Uzaylı",
    "profession": "Genetik Mühendisi",
    "professionEmoji": "🧬",
    "emoji": "👽",
    "label": "#426 Kozmik Genetik Mühendisi",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Genetik Mühendisi hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 426,
    "name": "Büyülü Jeolog",
    "category": "Sihirli",
    "profession": "Jeolog",
    "professionEmoji": "🌋",
    "emoji": "🧙",
    "label": "#427 Büyülü Jeolog",
    "motivation": "Her denemede yeni bir zirve! Jeolog hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 427,
    "name": "Afacan Meteorolog",
    "category": "Canavar",
    "profession": "Meteorolog",
    "professionEmoji": "🌦️",
    "emoji": "👾",
    "label": "#428 Afacan Meteorolog",
    "motivation": "Çalışırken enerjisi hiç bitmez! Meteorolog hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 428,
    "name": "Efsane Arkeolog",
    "category": "Meslekler",
    "profession": "Arkeolog",
    "professionEmoji": "🏺",
    "emoji": "🏺",
    "label": "#429 Efsane Arkeolog",
    "motivation": "Kelime hazinesi zengin ve güçlü! Arkeolog hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 429,
    "name": "Siber Antropolog Bot",
    "category": "Robot",
    "profession": "Antropolog",
    "professionEmoji": "🗿",
    "emoji": "🤖",
    "label": "#430 Siber Antropolog Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Antropolog hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 430,
    "name": "Bilge Tarihçi",
    "category": "Hayvan",
    "profession": "Tarihçi",
    "professionEmoji": "📜",
    "emoji": "🦅",
    "label": "#431 Bilge Tarihçi",
    "motivation": "Öğrenme azmin hiç tükenmez! Tarihçi hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 431,
    "name": "Kozmik Sosyolog",
    "category": "Uzaylı",
    "profession": "Sosyolog",
    "professionEmoji": "👥",
    "emoji": "👽",
    "label": "#432 Kozmik Sosyolog",
    "motivation": "Zorlu sorulardan asla korkmaz! Sosyolog hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 432,
    "name": "Büyülü Felsefeci",
    "category": "Sihirli",
    "profession": "Felsefeci",
    "professionEmoji": "💭",
    "emoji": "🧙",
    "label": "#433 Büyülü Felsefeci",
    "motivation": "Detayları gözünden kaçırmaz! Felsefeci hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 433,
    "name": "Afacan Dilbilimci",
    "category": "Canavar",
    "profession": "Dilbilimci",
    "professionEmoji": "🗣️",
    "emoji": "👾",
    "label": "#434 Afacan Dilbilimci",
    "motivation": "Hedefin gökyüzü ve ötesi! Dilbilimci hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 434,
    "name": "Kıvrak Çevirmen",
    "category": "Meslekler",
    "profession": "Çevirmen",
    "professionEmoji": "🌐",
    "emoji": "🌐",
    "label": "#435 Kıvrak Çevirmen",
    "motivation": "Taktikleri hızla kavrar! Çevirmen hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 435,
    "name": "Siber Mütercim Tercüman Bot",
    "category": "Robot",
    "profession": "Mütercim Tercüman",
    "professionEmoji": "📖",
    "emoji": "🤖",
    "label": "#436 Siber Mütercim Tercüman Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Mütercim Tercüman hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 436,
    "name": "Şampiyon Gazeteci",
    "category": "Hayvan",
    "profession": "Gazeteci",
    "professionEmoji": "📰",
    "emoji": "🦊",
    "label": "#437 Şampiyon Gazeteci",
    "motivation": "Her denemede yeni bir zirve! Gazeteci hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 437,
    "name": "Kozmik Muhabir",
    "category": "Uzaylı",
    "profession": "Muhabir",
    "professionEmoji": "🎙️",
    "emoji": "👽",
    "label": "#438 Kozmik Muhabir",
    "motivation": "Çalışırken enerjisi hiç bitmez! Muhabir hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 438,
    "name": "Büyülü Editör",
    "category": "Sihirli",
    "profession": "Editör",
    "professionEmoji": "✍️",
    "emoji": "🧙",
    "label": "#439 Büyülü Editör",
    "motivation": "Kelime hazinesi zengin ve güçlü! Editör hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 439,
    "name": "Afacan Yazar",
    "category": "Canavar",
    "profession": "Yazar",
    "professionEmoji": "🖋️",
    "emoji": "👾",
    "label": "#440 Afacan Yazar",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Yazar hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 440,
    "name": "Bilge Şair",
    "category": "Meslekler",
    "profession": "Şair",
    "professionEmoji": "📜",
    "emoji": "📜",
    "label": "#441 Bilge Şair",
    "motivation": "Öğrenme azmin hiç tükenmez! Şair hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 441,
    "name": "Siber Fotoğrafçı Bot",
    "category": "Robot",
    "profession": "Fotoğrafçı",
    "professionEmoji": "📷",
    "emoji": "🤖",
    "label": "#442 Siber Fotoğrafçı Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! Fotoğrafçı hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 442,
    "name": "Usta Kameraman",
    "category": "Hayvan",
    "profession": "Kameraman",
    "professionEmoji": "🎥",
    "emoji": "🦁",
    "label": "#443 Usta Kameraman",
    "motivation": "Detayları gözünden kaçırmaz! Kameraman hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 443,
    "name": "Kozmik Yönetmen",
    "category": "Uzaylı",
    "profession": "Yönetmen",
    "professionEmoji": "🎬",
    "emoji": "👽",
    "label": "#444 Kozmik Yönetmen",
    "motivation": "Hedefin gökyüzü ve ötesi! Yönetmen hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 444,
    "name": "Büyülü Senarist",
    "category": "Sihirli",
    "profession": "Senarist",
    "professionEmoji": "📑",
    "emoji": "🧙",
    "label": "#445 Büyülü Senarist",
    "motivation": "Taktikleri hızla kavrar! Senarist hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 445,
    "name": "Afacan Oyuncu",
    "category": "Canavar",
    "profession": "Oyuncu",
    "professionEmoji": "🎭",
    "emoji": "👾",
    "label": "#446 Afacan Oyuncu",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Oyuncu hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 446,
    "name": "Şampiyon Ses Sanatçısı",
    "category": "Meslekler",
    "profession": "Ses Sanatçısı",
    "professionEmoji": "🎤",
    "emoji": "🎤",
    "label": "#447 Şampiyon Ses Sanatçısı",
    "motivation": "Her denemede yeni bir zirve! Ses Sanatçısı hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 447,
    "name": "Siber Müzisyen Bot",
    "category": "Robot",
    "profession": "Müzisyen",
    "professionEmoji": "🎵",
    "emoji": "🤖",
    "label": "#448 Siber Müzisyen Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! Müzisyen hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 448,
    "name": "Efsane Besteci",
    "category": "Hayvan",
    "profession": "Besteci",
    "professionEmoji": "🎼",
    "emoji": "🐬",
    "label": "#449 Efsane Besteci",
    "motivation": "Kelime hazinesi zengin ve güçlü! Besteci hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 449,
    "name": "Kozmik Ressam",
    "category": "Uzaylı",
    "profession": "Ressam",
    "professionEmoji": "🎨",
    "emoji": "👽",
    "label": "#450 Kozmik Ressam",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Ressam hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 450,
    "name": "Büyülü Heykeltıraş",
    "category": "Sihirli",
    "profession": "Heykeltıraş",
    "professionEmoji": "🗿",
    "emoji": "🧙",
    "label": "#451 Büyülü Heykeltıraş",
    "motivation": "Öğrenme azmin hiç tükenmez! Heykeltıraş hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 451,
    "name": "Afacan Grafik Tasarımcı",
    "category": "Canavar",
    "profession": "Grafik Tasarımcı",
    "professionEmoji": "🖌️",
    "emoji": "👾",
    "label": "#452 Afacan Grafik Tasarımcı",
    "motivation": "Zorlu sorulardan asla korkmaz! Grafik Tasarımcı hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 452,
    "name": "Usta Moda Tasarımcısı",
    "category": "Meslekler",
    "profession": "Moda Tasarımcısı",
    "professionEmoji": "👗",
    "emoji": "👗",
    "label": "#453 Usta Moda Tasarımcısı",
    "motivation": "Detayları gözünden kaçırmaz! Moda Tasarımcısı hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 453,
    "name": "Siber Animasyon Sanatçısı Bot",
    "category": "Robot",
    "profession": "Animasyon Sanatçısı",
    "professionEmoji": "🎞️",
    "emoji": "🤖",
    "label": "#454 Siber Animasyon Sanatçısı Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! Animasyon Sanatçısı hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 454,
    "name": "Kıvrak Ses Mühendisi",
    "category": "Hayvan",
    "profession": "Ses Mühendisi",
    "professionEmoji": "🎚️",
    "emoji": "🦅",
    "label": "#455 Kıvrak Ses Mühendisi",
    "motivation": "Taktikleri hızla kavrar! Ses Mühendisi hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 455,
    "name": "Kozmik Elektrikçi",
    "category": "Uzaylı",
    "profession": "Elektrikçi",
    "professionEmoji": "💡",
    "emoji": "👽",
    "label": "#456 Kozmik Elektrikçi",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Elektrikçi hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 456,
    "name": "Büyülü Tesisatçı",
    "category": "Sihirli",
    "profession": "Tesisatçı",
    "professionEmoji": "🔧",
    "emoji": "🧙",
    "label": "#457 Büyülü Tesisatçı",
    "motivation": "Her denemede yeni bir zirve! Tesisatçı hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 457,
    "name": "Afacan Marangoz",
    "category": "Canavar",
    "profession": "Marangoz",
    "professionEmoji": "🪚",
    "emoji": "👾",
    "label": "#458 Afacan Marangoz",
    "motivation": "Çalışırken enerjisi hiç bitmez! Marangoz hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 458,
    "name": "Efsane Kaynakçı",
    "category": "Meslekler",
    "profession": "Kaynakçı",
    "professionEmoji": "👨‍🏭",
    "emoji": "👨‍🏭",
    "label": "#459 Efsane Kaynakçı",
    "motivation": "Kelime hazinesi zengin ve güçlü! Kaynakçı hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 459,
    "name": "Siber Oto Tamircisi Bot",
    "category": "Robot",
    "profession": "Oto Tamircisi",
    "professionEmoji": "🚗",
    "emoji": "🤖",
    "label": "#460 Siber Oto Tamircisi Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Oto Tamircisi hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 460,
    "name": "Bilge İnşaat Ustası",
    "category": "Hayvan",
    "profession": "İnşaat Ustası",
    "professionEmoji": "🧱",
    "emoji": "🦊",
    "label": "#461 Bilge İnşaat Ustası",
    "motivation": "Öğrenme azmin hiç tükenmez! İnşaat Ustası hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 461,
    "name": "Kozmik Boyacı",
    "category": "Uzaylı",
    "profession": "Boyacı",
    "professionEmoji": "🖌️",
    "emoji": "👽",
    "label": "#462 Kozmik Boyacı",
    "motivation": "Zorlu sorulardan asla korkmaz! Boyacı hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 462,
    "name": "Büyülü Çilingir",
    "category": "Sihirli",
    "profession": "Çilingir",
    "professionEmoji": "🗝️",
    "emoji": "🧙",
    "label": "#463 Büyülü Çilingir",
    "motivation": "Detayları gözünden kaçırmaz! Çilingir hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 463,
    "name": "Afacan Terzi",
    "category": "Canavar",
    "profession": "Terzi",
    "professionEmoji": "🧵",
    "emoji": "👾",
    "label": "#464 Afacan Terzi",
    "motivation": "Hedefin gökyüzü ve ötesi! Terzi hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 464,
    "name": "Kıvrak Ayakkabıcı",
    "category": "Meslekler",
    "profession": "Ayakkabıcı",
    "professionEmoji": "👞",
    "emoji": "👞",
    "label": "#465 Kıvrak Ayakkabıcı",
    "motivation": "Taktikleri hızla kavrar! Ayakkabıcı hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 465,
    "name": "Siber Saatçi Bot",
    "category": "Robot",
    "profession": "Saatçi",
    "professionEmoji": "⌚",
    "emoji": "🤖",
    "label": "#466 Siber Saatçi Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Saatçi hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 466,
    "name": "Şampiyon Kuyumcu",
    "category": "Hayvan",
    "profession": "Kuyumcu",
    "professionEmoji": "💍",
    "emoji": "🦁",
    "label": "#467 Şampiyon Kuyumcu",
    "motivation": "Her denemede yeni bir zirve! Kuyumcu hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 467,
    "name": "Kozmik Mali Müşavir",
    "category": "Uzaylı",
    "profession": "Mali Müşavir",
    "professionEmoji": "📈",
    "emoji": "👽",
    "label": "#468 Kozmik Mali Müşavir",
    "motivation": "Çalışırken enerjisi hiç bitmez! Mali Müşavir hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 468,
    "name": "Büyülü Muhasebeci",
    "category": "Sihirli",
    "profession": "Muhasebeci",
    "professionEmoji": "🧾",
    "emoji": "🧙",
    "label": "#469 Büyülü Muhasebeci",
    "motivation": "Kelime hazinesi zengin ve güçlü! Muhasebeci hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 469,
    "name": "Afacan İktisatçı",
    "category": "Canavar",
    "profession": "İktisatçı",
    "professionEmoji": "💹",
    "emoji": "👾",
    "label": "#470 Afacan İktisatçı",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! İktisatçı hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 470,
    "name": "Bilge Pazarlama Uzmanı",
    "category": "Meslekler",
    "profession": "Pazarlama Uzmanı",
    "professionEmoji": "📣",
    "emoji": "📣",
    "label": "#471 Bilge Pazarlama Uzmanı",
    "motivation": "Öğrenme azmin hiç tükenmez! Pazarlama Uzmanı hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 471,
    "name": "Siber İnsan Kaynakları Uzmanı Bot",
    "category": "Robot",
    "profession": "İnsan Kaynakları Uzmanı",
    "professionEmoji": "🤝",
    "emoji": "🤖",
    "label": "#472 Siber İnsan Kaynakları Uzmanı Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! İnsan Kaynakları Uzmanı hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 472,
    "name": "Usta Bankacı",
    "category": "Hayvan",
    "profession": "Bankacı",
    "professionEmoji": "🏦",
    "emoji": "🐬",
    "label": "#473 Usta Bankacı",
    "motivation": "Detayları gözünden kaçırmaz! Bankacı hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 473,
    "name": "Kozmik Girişimci",
    "category": "Uzaylı",
    "profession": "Girişimci",
    "professionEmoji": "🚀",
    "emoji": "👽",
    "label": "#474 Kozmik Girişimci",
    "motivation": "Hedefin gökyüzü ve ötesi! Girişimci hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 474,
    "name": "Büyülü Proje Yöneticisi",
    "category": "Sihirli",
    "profession": "Proje Yöneticisi",
    "professionEmoji": "📋",
    "emoji": "🧙",
    "label": "#475 Büyülü Proje Yöneticisi",
    "motivation": "Taktikleri hızla kavrar! Proje Yöneticisi hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 475,
    "name": "Afacan Ürün Yöneticisi",
    "category": "Canavar",
    "profession": "Ürün Yöneticisi",
    "professionEmoji": "📱",
    "emoji": "👾",
    "label": "#476 Afacan Ürün Yöneticisi",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Ürün Yöneticisi hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 476,
    "name": "Şampiyon Deniz Biyoloğu",
    "category": "Meslekler",
    "profession": "Deniz Biyoloğu",
    "professionEmoji": "🐬",
    "emoji": "🐬",
    "label": "#477 Şampiyon Deniz Biyoloğu",
    "motivation": "Her denemede yeni bir zirve! Deniz Biyoloğu hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 477,
    "name": "Siber Ekolojist Bot",
    "category": "Robot",
    "profession": "Ekolojist",
    "professionEmoji": "🌿",
    "emoji": "🤖",
    "label": "#478 Siber Ekolojist Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! Ekolojist hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 478,
    "name": "Efsane Kütüphaneci",
    "category": "Hayvan",
    "profession": "Kütüphaneci",
    "professionEmoji": "📖",
    "emoji": "🦅",
    "label": "#479 Efsane Kütüphaneci",
    "motivation": "Kelime hazinesi zengin ve güçlü! Kütüphaneci hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 479,
    "name": "Kozmik Arşivci",
    "category": "Uzaylı",
    "profession": "Arşivci",
    "professionEmoji": "🗃️",
    "emoji": "👽",
    "label": "#480 Kozmik Arşivci",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Arşivci hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 480,
    "name": "Büyülü Turist Rehberi",
    "category": "Sihirli",
    "profession": "Turist Rehberi",
    "professionEmoji": "🗺️",
    "emoji": "🧙",
    "label": "#481 Büyülü Turist Rehberi",
    "motivation": "Öğrenme azmin hiç tükenmez! Turist Rehberi hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 481,
    "name": "Afacan Spor Antrenörü",
    "category": "Canavar",
    "profession": "Spor Antrenörü",
    "professionEmoji": "🏅",
    "emoji": "👾",
    "label": "#482 Afacan Spor Antrenörü",
    "motivation": "Zorlu sorulardan asla korkmaz! Spor Antrenörü hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 482,
    "name": "Usta Doktor",
    "category": "Meslekler",
    "profession": "Doktor",
    "professionEmoji": "🩺",
    "emoji": "🩺",
    "label": "#483 Usta Doktor",
    "motivation": "Detayları gözünden kaçırmaz! Doktor hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 483,
    "name": "Siber Hemşire Bot",
    "category": "Robot",
    "profession": "Hemşire",
    "professionEmoji": "💉",
    "emoji": "🤖",
    "label": "#484 Siber Hemşire Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! Hemşire hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 484,
    "name": "Kıvrak Öğretmen",
    "category": "Hayvan",
    "profession": "Öğretmen",
    "professionEmoji": "📚",
    "emoji": "🦊",
    "label": "#485 Kıvrak Öğretmen",
    "motivation": "Taktikleri hızla kavrar! Öğretmen hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 485,
    "name": "Kozmik Akademisyen",
    "category": "Uzaylı",
    "profession": "Akademisyen",
    "professionEmoji": "🎓",
    "emoji": "👽",
    "label": "#486 Kozmik Akademisyen",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Akademisyen hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 486,
    "name": "Büyülü Yazılımcı",
    "category": "Sihirli",
    "profession": "Yazılımcı",
    "professionEmoji": "💻",
    "emoji": "🧙",
    "label": "#487 Büyülü Yazılımcı",
    "motivation": "Her denemede yeni bir zirve! Yazılımcı hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 487,
    "name": "Afacan Veri Bilimci",
    "category": "Canavar",
    "profession": "Veri Bilimci",
    "professionEmoji": "📊",
    "emoji": "👾",
    "label": "#488 Afacan Veri Bilimci",
    "motivation": "Çalışırken enerjisi hiç bitmez! Veri Bilimci hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 488,
    "name": "Efsane Bilgisayar Mühendisi",
    "category": "Meslekler",
    "profession": "Bilgisayar Mühendisi",
    "professionEmoji": "🖥️",
    "emoji": "🖥️",
    "label": "#489 Efsane Bilgisayar Mühendisi",
    "motivation": "Kelime hazinesi zengin ve güçlü! Bilgisayar Mühendisi hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 489,
    "name": "Siber Yapay Zeka Uzmanı Bot",
    "category": "Robot",
    "profession": "Yapay Zeka Uzmanı",
    "professionEmoji": "🤖",
    "emoji": "🤖",
    "label": "#490 Siber Yapay Zeka Uzmanı Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Yapay Zeka Uzmanı hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 490,
    "name": "Bilge Siber Güvenlik Uzmanı",
    "category": "Hayvan",
    "profession": "Siber Güvenlik Uzmanı",
    "professionEmoji": "🛡️",
    "emoji": "🦁",
    "label": "#491 Bilge Siber Güvenlik Uzmanı",
    "motivation": "Öğrenme azmin hiç tükenmez! Siber Güvenlik Uzmanı hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 491,
    "name": "Kozmik Elektrik Mühendisi",
    "category": "Uzaylı",
    "profession": "Elektrik Mühendisi",
    "professionEmoji": "⚡",
    "emoji": "👽",
    "label": "#492 Kozmik Elektrik Mühendisi",
    "motivation": "Zorlu sorulardan asla korkmaz! Elektrik Mühendisi hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 492,
    "name": "Büyülü Makine Mühendisi",
    "category": "Sihirli",
    "profession": "Makine Mühendisi",
    "professionEmoji": "⚙️",
    "emoji": "🧙",
    "label": "#493 Büyülü Makine Mühendisi",
    "motivation": "Detayları gözünden kaçırmaz! Makine Mühendisi hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 493,
    "name": "Afacan İnşaat Mühendisi",
    "category": "Canavar",
    "profession": "İnşaat Mühendisi",
    "professionEmoji": "🏗️",
    "emoji": "👾",
    "label": "#494 Afacan İnşaat Mühendisi",
    "motivation": "Hedefin gökyüzü ve ötesi! İnşaat Mühendisi hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 494,
    "name": "Kıvrak Mimar",
    "category": "Meslekler",
    "profession": "Mimar",
    "professionEmoji": "📐",
    "emoji": "📐",
    "label": "#495 Kıvrak Mimar",
    "motivation": "Taktikleri hızla kavrar! Mimar hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 495,
    "name": "Siber İç Mimar Bot",
    "category": "Robot",
    "profession": "İç Mimar",
    "professionEmoji": "🛋️",
    "emoji": "🤖",
    "label": "#496 Siber İç Mimar Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! İç Mimar hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 496,
    "name": "Şampiyon Şehir Plancısı",
    "category": "Hayvan",
    "profession": "Şehir Plancısı",
    "professionEmoji": "🏙️",
    "emoji": "🐬",
    "label": "#497 Şampiyon Şehir Plancısı",
    "motivation": "Her denemede yeni bir zirve! Şehir Plancısı hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 497,
    "name": "Kozmik Avukat",
    "category": "Uzaylı",
    "profession": "Avukat",
    "professionEmoji": "⚖️",
    "emoji": "👽",
    "label": "#498 Kozmik Avukat",
    "motivation": "Çalışırken enerjisi hiç bitmez! Avukat hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 498,
    "name": "Büyülü Hâkim",
    "category": "Sihirli",
    "profession": "Hâkim",
    "professionEmoji": "🧑‍⚖️",
    "emoji": "🧙",
    "label": "#499 Büyülü Hâkim",
    "motivation": "Kelime hazinesi zengin ve güçlü! Hâkim hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 499,
    "name": "Afacan Savcı",
    "category": "Canavar",
    "profession": "Savcı",
    "professionEmoji": "🏛️",
    "emoji": "👾",
    "label": "#500 Afacan Savcı",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Savcı hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 500,
    "name": "Bilge Noter",
    "category": "Meslekler",
    "profession": "Noter",
    "professionEmoji": "📜",
    "emoji": "📜",
    "label": "#501 Bilge Noter",
    "motivation": "Öğrenme azmin hiç tükenmez! Noter hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 501,
    "name": "Siber Diplomat Bot",
    "category": "Robot",
    "profession": "Diplomat",
    "professionEmoji": "🌐",
    "emoji": "🤖",
    "label": "#502 Siber Diplomat Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! Diplomat hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 502,
    "name": "Usta Polis",
    "category": "Hayvan",
    "profession": "Polis",
    "professionEmoji": "👮",
    "emoji": "🦅",
    "label": "#503 Usta Polis",
    "motivation": "Detayları gözünden kaçırmaz! Polis hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 503,
    "name": "Kozmik Asker",
    "category": "Uzaylı",
    "profession": "Asker",
    "professionEmoji": "🪖",
    "emoji": "👽",
    "label": "#504 Kozmik Asker",
    "motivation": "Hedefin gökyüzü ve ötesi! Asker hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 504,
    "name": "Büyülü İtfaiyeci",
    "category": "Sihirli",
    "profession": "İtfaiyeci",
    "professionEmoji": "👨‍🚒",
    "emoji": "🧙",
    "label": "#505 Büyülü İtfaiyeci",
    "motivation": "Taktikleri hızla kavrar! İtfaiyeci hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 505,
    "name": "Afacan Pilot",
    "category": "Canavar",
    "profession": "Pilot",
    "professionEmoji": "👨‍✈️",
    "emoji": "👾",
    "label": "#506 Afacan Pilot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Pilot hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 506,
    "name": "Şampiyon Kabin Memuru",
    "category": "Meslekler",
    "profession": "Kabin Memuru",
    "professionEmoji": "🛫",
    "emoji": "🛫",
    "label": "#507 Şampiyon Kabin Memuru",
    "motivation": "Her denemede yeni bir zirve! Kabin Memuru hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 507,
    "name": "Siber Kaptan Bot",
    "category": "Robot",
    "profession": "Kaptan",
    "professionEmoji": "⚓",
    "emoji": "🤖",
    "label": "#508 Siber Kaptan Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! Kaptan hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 508,
    "name": "Efsane Makinist",
    "category": "Hayvan",
    "profession": "Makinist",
    "professionEmoji": "🚆",
    "emoji": "🦊",
    "label": "#509 Efsane Makinist",
    "motivation": "Kelime hazinesi zengin ve güçlü! Makinist hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 509,
    "name": "Kozmik Şoför",
    "category": "Uzaylı",
    "profession": "Şoför",
    "professionEmoji": "🚌",
    "emoji": "👽",
    "label": "#510 Kozmik Şoför",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Şoför hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 510,
    "name": "Büyülü Lojistik Uzmanı",
    "category": "Sihirli",
    "profession": "Lojistik Uzmanı",
    "professionEmoji": "📦",
    "emoji": "🧙",
    "label": "#511 Büyülü Lojistik Uzmanı",
    "motivation": "Öğrenme azmin hiç tükenmez! Lojistik Uzmanı hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 511,
    "name": "Afacan Hava Trafik Kontrolörü",
    "category": "Canavar",
    "profession": "Hava Trafik Kontrolörü",
    "professionEmoji": "🛰️",
    "emoji": "👾",
    "label": "#512 Afacan Hava Trafik Kontrolörü",
    "motivation": "Zorlu sorulardan asla korkmaz! Hava Trafik Kontrolörü hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 512,
    "name": "Usta Aşçı",
    "category": "Meslekler",
    "profession": "Aşçı",
    "professionEmoji": "👨‍🍳",
    "emoji": "👨‍🍳",
    "label": "#513 Usta Aşçı",
    "motivation": "Detayları gözünden kaçırmaz! Aşçı hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 513,
    "name": "Siber Pastacı Bot",
    "category": "Robot",
    "profession": "Pastacı",
    "professionEmoji": "🎂",
    "emoji": "🤖",
    "label": "#514 Siber Pastacı Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! Pastacı hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 514,
    "name": "Kıvrak Fırıncı",
    "category": "Hayvan",
    "profession": "Fırıncı",
    "professionEmoji": "🥖",
    "emoji": "🦁",
    "label": "#515 Kıvrak Fırıncı",
    "motivation": "Taktikleri hızla kavrar! Fırıncı hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 515,
    "name": "Kozmik Barista",
    "category": "Uzaylı",
    "profession": "Barista",
    "professionEmoji": "☕",
    "emoji": "👽",
    "label": "#516 Kozmik Barista",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Barista hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 516,
    "name": "Büyülü Garson",
    "category": "Sihirli",
    "profession": "Garson",
    "professionEmoji": "🍽️",
    "emoji": "🧙",
    "label": "#517 Büyülü Garson",
    "motivation": "Her denemede yeni bir zirve! Garson hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 517,
    "name": "Afacan Çiftçi",
    "category": "Canavar",
    "profession": "Çiftçi",
    "professionEmoji": "🚜",
    "emoji": "👾",
    "label": "#518 Afacan Çiftçi",
    "motivation": "Çalışırken enerjisi hiç bitmez! Çiftçi hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 518,
    "name": "Efsane Ziraat Mühendisi",
    "category": "Meslekler",
    "profession": "Ziraat Mühendisi",
    "professionEmoji": "🌾",
    "emoji": "🌾",
    "label": "#519 Efsane Ziraat Mühendisi",
    "motivation": "Kelime hazinesi zengin ve güçlü! Ziraat Mühendisi hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 519,
    "name": "Siber Bahçıvan Bot",
    "category": "Robot",
    "profession": "Bahçıvan",
    "professionEmoji": "🌻",
    "emoji": "🤖",
    "label": "#520 Siber Bahçıvan Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Bahçıvan hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 520,
    "name": "Bilge Veteriner",
    "category": "Hayvan",
    "profession": "Veteriner",
    "professionEmoji": "🐾",
    "emoji": "🐬",
    "label": "#521 Bilge Veteriner",
    "motivation": "Öğrenme azmin hiç tükenmez! Veteriner hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 521,
    "name": "Kozmik Diş Hekimi",
    "category": "Uzaylı",
    "profession": "Diş Hekimi",
    "professionEmoji": "🦷",
    "emoji": "👽",
    "label": "#522 Kozmik Diş Hekimi",
    "motivation": "Zorlu sorulardan asla korkmaz! Diş Hekimi hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 522,
    "name": "Büyülü Eczacı",
    "category": "Sihirli",
    "profession": "Eczacı",
    "professionEmoji": "💊",
    "emoji": "🧙",
    "label": "#523 Büyülü Eczacı",
    "motivation": "Detayları gözünden kaçırmaz! Eczacı hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 523,
    "name": "Afacan Psikolog",
    "category": "Canavar",
    "profession": "Psikolog",
    "professionEmoji": "🧠",
    "emoji": "👾",
    "label": "#524 Afacan Psikolog",
    "motivation": "Hedefin gökyüzü ve ötesi! Psikolog hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 524,
    "name": "Kıvrak Psikiyatrist",
    "category": "Meslekler",
    "profession": "Psikiyatrist",
    "professionEmoji": "🛋️",
    "emoji": "🛋️",
    "label": "#525 Kıvrak Psikiyatrist",
    "motivation": "Taktikleri hızla kavrar! Psikiyatrist hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 525,
    "name": "Siber Diyetisyen Bot",
    "category": "Robot",
    "profession": "Diyetisyen",
    "professionEmoji": "🥗",
    "emoji": "🤖",
    "label": "#526 Siber Diyetisyen Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Diyetisyen hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 526,
    "name": "Şampiyon Fizyoterapist",
    "category": "Hayvan",
    "profession": "Fizyoterapist",
    "professionEmoji": "🏃",
    "emoji": "🦅",
    "label": "#527 Şampiyon Fizyoterapist",
    "motivation": "Her denemede yeni bir zirve! Fizyoterapist hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 527,
    "name": "Kozmik Radyolog",
    "category": "Uzaylı",
    "profession": "Radyolog",
    "professionEmoji": "🩻",
    "emoji": "👽",
    "label": "#528 Kozmik Radyolog",
    "motivation": "Çalışırken enerjisi hiç bitmez! Radyolog hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 528,
    "name": "Büyülü Biyolog",
    "category": "Sihirli",
    "profession": "Biyolog",
    "professionEmoji": "🔬",
    "emoji": "🧙",
    "label": "#529 Büyülü Biyolog",
    "motivation": "Kelime hazinesi zengin ve güçlü! Biyolog hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 529,
    "name": "Afacan Kimyager",
    "category": "Canavar",
    "profession": "Kimyager",
    "professionEmoji": "🧪",
    "emoji": "👾",
    "label": "#530 Afacan Kimyager",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Kimyager hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 530,
    "name": "Bilge Fizikçi",
    "category": "Meslekler",
    "profession": "Fizikçi",
    "professionEmoji": "⚛️",
    "emoji": "⚛️",
    "label": "#531 Bilge Fizikçi",
    "motivation": "Öğrenme azmin hiç tükenmez! Fizikçi hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 531,
    "name": "Siber Astronom Bot",
    "category": "Robot",
    "profession": "Astronom",
    "professionEmoji": "🔭",
    "emoji": "🤖",
    "label": "#532 Siber Astronom Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! Astronom hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 532,
    "name": "Usta Astronot",
    "category": "Hayvan",
    "profession": "Astronot",
    "professionEmoji": "🧑‍🚀",
    "emoji": "🦊",
    "label": "#533 Usta Astronot",
    "motivation": "Detayları gözünden kaçırmaz! Astronot hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 533,
    "name": "Kozmik Genetik Mühendisi",
    "category": "Uzaylı",
    "profession": "Genetik Mühendisi",
    "professionEmoji": "🧬",
    "emoji": "👽",
    "label": "#534 Kozmik Genetik Mühendisi",
    "motivation": "Hedefin gökyüzü ve ötesi! Genetik Mühendisi hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 534,
    "name": "Büyülü Jeolog",
    "category": "Sihirli",
    "profession": "Jeolog",
    "professionEmoji": "🌋",
    "emoji": "🧙",
    "label": "#535 Büyülü Jeolog",
    "motivation": "Taktikleri hızla kavrar! Jeolog hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 535,
    "name": "Afacan Meteorolog",
    "category": "Canavar",
    "profession": "Meteorolog",
    "professionEmoji": "🌦️",
    "emoji": "👾",
    "label": "#536 Afacan Meteorolog",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Meteorolog hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 536,
    "name": "Şampiyon Arkeolog",
    "category": "Meslekler",
    "profession": "Arkeolog",
    "professionEmoji": "🏺",
    "emoji": "🏺",
    "label": "#537 Şampiyon Arkeolog",
    "motivation": "Her denemede yeni bir zirve! Arkeolog hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 537,
    "name": "Siber Antropolog Bot",
    "category": "Robot",
    "profession": "Antropolog",
    "professionEmoji": "🗿",
    "emoji": "🤖",
    "label": "#538 Siber Antropolog Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! Antropolog hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 538,
    "name": "Efsane Tarihçi",
    "category": "Hayvan",
    "profession": "Tarihçi",
    "professionEmoji": "📜",
    "emoji": "🦁",
    "label": "#539 Efsane Tarihçi",
    "motivation": "Kelime hazinesi zengin ve güçlü! Tarihçi hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 539,
    "name": "Kozmik Sosyolog",
    "category": "Uzaylı",
    "profession": "Sosyolog",
    "professionEmoji": "👥",
    "emoji": "👽",
    "label": "#540 Kozmik Sosyolog",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Sosyolog hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 540,
    "name": "Büyülü Felsefeci",
    "category": "Sihirli",
    "profession": "Felsefeci",
    "professionEmoji": "💭",
    "emoji": "🧙",
    "label": "#541 Büyülü Felsefeci",
    "motivation": "Öğrenme azmin hiç tükenmez! Felsefeci hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 541,
    "name": "Afacan Dilbilimci",
    "category": "Canavar",
    "profession": "Dilbilimci",
    "professionEmoji": "🗣️",
    "emoji": "👾",
    "label": "#542 Afacan Dilbilimci",
    "motivation": "Zorlu sorulardan asla korkmaz! Dilbilimci hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 542,
    "name": "Usta Çevirmen",
    "category": "Meslekler",
    "profession": "Çevirmen",
    "professionEmoji": "🌐",
    "emoji": "🌐",
    "label": "#543 Usta Çevirmen",
    "motivation": "Detayları gözünden kaçırmaz! Çevirmen hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 543,
    "name": "Siber Mütercim Tercüman Bot",
    "category": "Robot",
    "profession": "Mütercim Tercüman",
    "professionEmoji": "📖",
    "emoji": "🤖",
    "label": "#544 Siber Mütercim Tercüman Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! Mütercim Tercüman hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 544,
    "name": "Kıvrak Gazeteci",
    "category": "Hayvan",
    "profession": "Gazeteci",
    "professionEmoji": "📰",
    "emoji": "🐬",
    "label": "#545 Kıvrak Gazeteci",
    "motivation": "Taktikleri hızla kavrar! Gazeteci hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 545,
    "name": "Kozmik Muhabir",
    "category": "Uzaylı",
    "profession": "Muhabir",
    "professionEmoji": "🎙️",
    "emoji": "👽",
    "label": "#546 Kozmik Muhabir",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Muhabir hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 546,
    "name": "Büyülü Editör",
    "category": "Sihirli",
    "profession": "Editör",
    "professionEmoji": "✍️",
    "emoji": "🧙",
    "label": "#547 Büyülü Editör",
    "motivation": "Her denemede yeni bir zirve! Editör hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 547,
    "name": "Afacan Yazar",
    "category": "Canavar",
    "profession": "Yazar",
    "professionEmoji": "🖋️",
    "emoji": "👾",
    "label": "#548 Afacan Yazar",
    "motivation": "Çalışırken enerjisi hiç bitmez! Yazar hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 548,
    "name": "Efsane Şair",
    "category": "Meslekler",
    "profession": "Şair",
    "professionEmoji": "📜",
    "emoji": "📜",
    "label": "#549 Efsane Şair",
    "motivation": "Kelime hazinesi zengin ve güçlü! Şair hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 549,
    "name": "Siber Fotoğrafçı Bot",
    "category": "Robot",
    "profession": "Fotoğrafçı",
    "professionEmoji": "📷",
    "emoji": "🤖",
    "label": "#550 Siber Fotoğrafçı Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Fotoğrafçı hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 550,
    "name": "Bilge Kameraman",
    "category": "Hayvan",
    "profession": "Kameraman",
    "professionEmoji": "🎥",
    "emoji": "🦅",
    "label": "#551 Bilge Kameraman",
    "motivation": "Öğrenme azmin hiç tükenmez! Kameraman hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 551,
    "name": "Kozmik Yönetmen",
    "category": "Uzaylı",
    "profession": "Yönetmen",
    "professionEmoji": "🎬",
    "emoji": "👽",
    "label": "#552 Kozmik Yönetmen",
    "motivation": "Zorlu sorulardan asla korkmaz! Yönetmen hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 552,
    "name": "Büyülü Senarist",
    "category": "Sihirli",
    "profession": "Senarist",
    "professionEmoji": "📑",
    "emoji": "🧙",
    "label": "#553 Büyülü Senarist",
    "motivation": "Detayları gözünden kaçırmaz! Senarist hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 553,
    "name": "Afacan Oyuncu",
    "category": "Canavar",
    "profession": "Oyuncu",
    "professionEmoji": "🎭",
    "emoji": "👾",
    "label": "#554 Afacan Oyuncu",
    "motivation": "Hedefin gökyüzü ve ötesi! Oyuncu hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 554,
    "name": "Kıvrak Ses Sanatçısı",
    "category": "Meslekler",
    "profession": "Ses Sanatçısı",
    "professionEmoji": "🎤",
    "emoji": "🎤",
    "label": "#555 Kıvrak Ses Sanatçısı",
    "motivation": "Taktikleri hızla kavrar! Ses Sanatçısı hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 555,
    "name": "Siber Müzisyen Bot",
    "category": "Robot",
    "profession": "Müzisyen",
    "professionEmoji": "🎵",
    "emoji": "🤖",
    "label": "#556 Siber Müzisyen Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Müzisyen hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 556,
    "name": "Şampiyon Besteci",
    "category": "Hayvan",
    "profession": "Besteci",
    "professionEmoji": "🎼",
    "emoji": "🦊",
    "label": "#557 Şampiyon Besteci",
    "motivation": "Her denemede yeni bir zirve! Besteci hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 557,
    "name": "Kozmik Ressam",
    "category": "Uzaylı",
    "profession": "Ressam",
    "professionEmoji": "🎨",
    "emoji": "👽",
    "label": "#558 Kozmik Ressam",
    "motivation": "Çalışırken enerjisi hiç bitmez! Ressam hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 558,
    "name": "Büyülü Heykeltıraş",
    "category": "Sihirli",
    "profession": "Heykeltıraş",
    "professionEmoji": "🗿",
    "emoji": "🧙",
    "label": "#559 Büyülü Heykeltıraş",
    "motivation": "Kelime hazinesi zengin ve güçlü! Heykeltıraş hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 559,
    "name": "Afacan Grafik Tasarımcı",
    "category": "Canavar",
    "profession": "Grafik Tasarımcı",
    "professionEmoji": "🖌️",
    "emoji": "👾",
    "label": "#560 Afacan Grafik Tasarımcı",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Grafik Tasarımcı hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 560,
    "name": "Bilge Moda Tasarımcısı",
    "category": "Meslekler",
    "profession": "Moda Tasarımcısı",
    "professionEmoji": "👗",
    "emoji": "👗",
    "label": "#561 Bilge Moda Tasarımcısı",
    "motivation": "Öğrenme azmin hiç tükenmez! Moda Tasarımcısı hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 561,
    "name": "Siber Animasyon Sanatçısı Bot",
    "category": "Robot",
    "profession": "Animasyon Sanatçısı",
    "professionEmoji": "🎞️",
    "emoji": "🤖",
    "label": "#562 Siber Animasyon Sanatçısı Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! Animasyon Sanatçısı hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 562,
    "name": "Usta Ses Mühendisi",
    "category": "Hayvan",
    "profession": "Ses Mühendisi",
    "professionEmoji": "🎚️",
    "emoji": "🦁",
    "label": "#563 Usta Ses Mühendisi",
    "motivation": "Detayları gözünden kaçırmaz! Ses Mühendisi hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 563,
    "name": "Kozmik Elektrikçi",
    "category": "Uzaylı",
    "profession": "Elektrikçi",
    "professionEmoji": "💡",
    "emoji": "👽",
    "label": "#564 Kozmik Elektrikçi",
    "motivation": "Hedefin gökyüzü ve ötesi! Elektrikçi hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 564,
    "name": "Büyülü Tesisatçı",
    "category": "Sihirli",
    "profession": "Tesisatçı",
    "professionEmoji": "🔧",
    "emoji": "🧙",
    "label": "#565 Büyülü Tesisatçı",
    "motivation": "Taktikleri hızla kavrar! Tesisatçı hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 565,
    "name": "Afacan Marangoz",
    "category": "Canavar",
    "profession": "Marangoz",
    "professionEmoji": "🪚",
    "emoji": "👾",
    "label": "#566 Afacan Marangoz",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Marangoz hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 566,
    "name": "Şampiyon Kaynakçı",
    "category": "Meslekler",
    "profession": "Kaynakçı",
    "professionEmoji": "👨‍🏭",
    "emoji": "👨‍🏭",
    "label": "#567 Şampiyon Kaynakçı",
    "motivation": "Her denemede yeni bir zirve! Kaynakçı hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 567,
    "name": "Siber Oto Tamircisi Bot",
    "category": "Robot",
    "profession": "Oto Tamircisi",
    "professionEmoji": "🚗",
    "emoji": "🤖",
    "label": "#568 Siber Oto Tamircisi Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! Oto Tamircisi hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 568,
    "name": "Efsane İnşaat Ustası",
    "category": "Hayvan",
    "profession": "İnşaat Ustası",
    "professionEmoji": "🧱",
    "emoji": "🐬",
    "label": "#569 Efsane İnşaat Ustası",
    "motivation": "Kelime hazinesi zengin ve güçlü! İnşaat Ustası hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 569,
    "name": "Kozmik Boyacı",
    "category": "Uzaylı",
    "profession": "Boyacı",
    "professionEmoji": "🖌️",
    "emoji": "👽",
    "label": "#570 Kozmik Boyacı",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Boyacı hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 570,
    "name": "Büyülü Çilingir",
    "category": "Sihirli",
    "profession": "Çilingir",
    "professionEmoji": "🗝️",
    "emoji": "🧙",
    "label": "#571 Büyülü Çilingir",
    "motivation": "Öğrenme azmin hiç tükenmez! Çilingir hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 571,
    "name": "Afacan Terzi",
    "category": "Canavar",
    "profession": "Terzi",
    "professionEmoji": "🧵",
    "emoji": "👾",
    "label": "#572 Afacan Terzi",
    "motivation": "Zorlu sorulardan asla korkmaz! Terzi hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 572,
    "name": "Usta Ayakkabıcı",
    "category": "Meslekler",
    "profession": "Ayakkabıcı",
    "professionEmoji": "👞",
    "emoji": "👞",
    "label": "#573 Usta Ayakkabıcı",
    "motivation": "Detayları gözünden kaçırmaz! Ayakkabıcı hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 573,
    "name": "Siber Saatçi Bot",
    "category": "Robot",
    "profession": "Saatçi",
    "professionEmoji": "⌚",
    "emoji": "🤖",
    "label": "#574 Siber Saatçi Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! Saatçi hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 574,
    "name": "Kıvrak Kuyumcu",
    "category": "Hayvan",
    "profession": "Kuyumcu",
    "professionEmoji": "💍",
    "emoji": "🦅",
    "label": "#575 Kıvrak Kuyumcu",
    "motivation": "Taktikleri hızla kavrar! Kuyumcu hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 575,
    "name": "Kozmik Mali Müşavir",
    "category": "Uzaylı",
    "profession": "Mali Müşavir",
    "professionEmoji": "📈",
    "emoji": "👽",
    "label": "#576 Kozmik Mali Müşavir",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Mali Müşavir hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 576,
    "name": "Büyülü Muhasebeci",
    "category": "Sihirli",
    "profession": "Muhasebeci",
    "professionEmoji": "🧾",
    "emoji": "🧙",
    "label": "#577 Büyülü Muhasebeci",
    "motivation": "Her denemede yeni bir zirve! Muhasebeci hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 577,
    "name": "Afacan İktisatçı",
    "category": "Canavar",
    "profession": "İktisatçı",
    "professionEmoji": "💹",
    "emoji": "👾",
    "label": "#578 Afacan İktisatçı",
    "motivation": "Çalışırken enerjisi hiç bitmez! İktisatçı hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 578,
    "name": "Efsane Pazarlama Uzmanı",
    "category": "Meslekler",
    "profession": "Pazarlama Uzmanı",
    "professionEmoji": "📣",
    "emoji": "📣",
    "label": "#579 Efsane Pazarlama Uzmanı",
    "motivation": "Kelime hazinesi zengin ve güçlü! Pazarlama Uzmanı hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 579,
    "name": "Siber İnsan Kaynakları Uzmanı Bot",
    "category": "Robot",
    "profession": "İnsan Kaynakları Uzmanı",
    "professionEmoji": "🤝",
    "emoji": "🤖",
    "label": "#580 Siber İnsan Kaynakları Uzmanı Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! İnsan Kaynakları Uzmanı hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 580,
    "name": "Bilge Bankacı",
    "category": "Hayvan",
    "profession": "Bankacı",
    "professionEmoji": "🏦",
    "emoji": "🦊",
    "label": "#581 Bilge Bankacı",
    "motivation": "Öğrenme azmin hiç tükenmez! Bankacı hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 581,
    "name": "Kozmik Girişimci",
    "category": "Uzaylı",
    "profession": "Girişimci",
    "professionEmoji": "🚀",
    "emoji": "👽",
    "label": "#582 Kozmik Girişimci",
    "motivation": "Zorlu sorulardan asla korkmaz! Girişimci hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 582,
    "name": "Büyülü Proje Yöneticisi",
    "category": "Sihirli",
    "profession": "Proje Yöneticisi",
    "professionEmoji": "📋",
    "emoji": "🧙",
    "label": "#583 Büyülü Proje Yöneticisi",
    "motivation": "Detayları gözünden kaçırmaz! Proje Yöneticisi hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 583,
    "name": "Afacan Ürün Yöneticisi",
    "category": "Canavar",
    "profession": "Ürün Yöneticisi",
    "professionEmoji": "📱",
    "emoji": "👾",
    "label": "#584 Afacan Ürün Yöneticisi",
    "motivation": "Hedefin gökyüzü ve ötesi! Ürün Yöneticisi hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 584,
    "name": "Kıvrak Deniz Biyoloğu",
    "category": "Meslekler",
    "profession": "Deniz Biyoloğu",
    "professionEmoji": "🐬",
    "emoji": "🐬",
    "label": "#585 Kıvrak Deniz Biyoloğu",
    "motivation": "Taktikleri hızla kavrar! Deniz Biyoloğu hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 585,
    "name": "Siber Ekolojist Bot",
    "category": "Robot",
    "profession": "Ekolojist",
    "professionEmoji": "🌿",
    "emoji": "🤖",
    "label": "#586 Siber Ekolojist Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Ekolojist hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 586,
    "name": "Şampiyon Kütüphaneci",
    "category": "Hayvan",
    "profession": "Kütüphaneci",
    "professionEmoji": "📖",
    "emoji": "🦁",
    "label": "#587 Şampiyon Kütüphaneci",
    "motivation": "Her denemede yeni bir zirve! Kütüphaneci hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 587,
    "name": "Kozmik Arşivci",
    "category": "Uzaylı",
    "profession": "Arşivci",
    "professionEmoji": "🗃️",
    "emoji": "👽",
    "label": "#588 Kozmik Arşivci",
    "motivation": "Çalışırken enerjisi hiç bitmez! Arşivci hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 588,
    "name": "Büyülü Turist Rehberi",
    "category": "Sihirli",
    "profession": "Turist Rehberi",
    "professionEmoji": "🗺️",
    "emoji": "🧙",
    "label": "#589 Büyülü Turist Rehberi",
    "motivation": "Kelime hazinesi zengin ve güçlü! Turist Rehberi hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 589,
    "name": "Afacan Spor Antrenörü",
    "category": "Canavar",
    "profession": "Spor Antrenörü",
    "professionEmoji": "🏅",
    "emoji": "👾",
    "label": "#590 Afacan Spor Antrenörü",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Spor Antrenörü hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 590,
    "name": "Bilge Doktor",
    "category": "Meslekler",
    "profession": "Doktor",
    "professionEmoji": "🩺",
    "emoji": "🩺",
    "label": "#591 Bilge Doktor",
    "motivation": "Öğrenme azmin hiç tükenmez! Doktor hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 591,
    "name": "Siber Hemşire Bot",
    "category": "Robot",
    "profession": "Hemşire",
    "professionEmoji": "💉",
    "emoji": "🤖",
    "label": "#592 Siber Hemşire Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! Hemşire hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 592,
    "name": "Usta Öğretmen",
    "category": "Hayvan",
    "profession": "Öğretmen",
    "professionEmoji": "📚",
    "emoji": "🐬",
    "label": "#593 Usta Öğretmen",
    "motivation": "Detayları gözünden kaçırmaz! Öğretmen hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 593,
    "name": "Kozmik Akademisyen",
    "category": "Uzaylı",
    "profession": "Akademisyen",
    "professionEmoji": "🎓",
    "emoji": "👽",
    "label": "#594 Kozmik Akademisyen",
    "motivation": "Hedefin gökyüzü ve ötesi! Akademisyen hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 594,
    "name": "Büyülü Yazılımcı",
    "category": "Sihirli",
    "profession": "Yazılımcı",
    "professionEmoji": "💻",
    "emoji": "🧙",
    "label": "#595 Büyülü Yazılımcı",
    "motivation": "Taktikleri hızla kavrar! Yazılımcı hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 595,
    "name": "Afacan Veri Bilimci",
    "category": "Canavar",
    "profession": "Veri Bilimci",
    "professionEmoji": "📊",
    "emoji": "👾",
    "label": "#596 Afacan Veri Bilimci",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Veri Bilimci hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 596,
    "name": "Şampiyon Bilgisayar Mühendisi",
    "category": "Meslekler",
    "profession": "Bilgisayar Mühendisi",
    "professionEmoji": "🖥️",
    "emoji": "🖥️",
    "label": "#597 Şampiyon Bilgisayar Mühendisi",
    "motivation": "Her denemede yeni bir zirve! Bilgisayar Mühendisi hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 597,
    "name": "Siber Yapay Zeka Uzmanı Bot",
    "category": "Robot",
    "profession": "Yapay Zeka Uzmanı",
    "professionEmoji": "🤖",
    "emoji": "🤖",
    "label": "#598 Siber Yapay Zeka Uzmanı Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! Yapay Zeka Uzmanı hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 598,
    "name": "Efsane Siber Güvenlik Uzmanı",
    "category": "Hayvan",
    "profession": "Siber Güvenlik Uzmanı",
    "professionEmoji": "🛡️",
    "emoji": "🦅",
    "label": "#599 Efsane Siber Güvenlik Uzmanı",
    "motivation": "Kelime hazinesi zengin ve güçlü! Siber Güvenlik Uzmanı hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 599,
    "name": "Kozmik Elektrik Mühendisi",
    "category": "Uzaylı",
    "profession": "Elektrik Mühendisi",
    "professionEmoji": "⚡",
    "emoji": "👽",
    "label": "#600 Kozmik Elektrik Mühendisi",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Elektrik Mühendisi hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 600,
    "name": "Büyülü Makine Mühendisi",
    "category": "Sihirli",
    "profession": "Makine Mühendisi",
    "professionEmoji": "⚙️",
    "emoji": "🧙",
    "label": "#601 Büyülü Makine Mühendisi",
    "motivation": "Öğrenme azmin hiç tükenmez! Makine Mühendisi hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 601,
    "name": "Afacan İnşaat Mühendisi",
    "category": "Canavar",
    "profession": "İnşaat Mühendisi",
    "professionEmoji": "🏗️",
    "emoji": "👾",
    "label": "#602 Afacan İnşaat Mühendisi",
    "motivation": "Zorlu sorulardan asla korkmaz! İnşaat Mühendisi hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 602,
    "name": "Usta Mimar",
    "category": "Meslekler",
    "profession": "Mimar",
    "professionEmoji": "📐",
    "emoji": "📐",
    "label": "#603 Usta Mimar",
    "motivation": "Detayları gözünden kaçırmaz! Mimar hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 603,
    "name": "Siber İç Mimar Bot",
    "category": "Robot",
    "profession": "İç Mimar",
    "professionEmoji": "🛋️",
    "emoji": "🤖",
    "label": "#604 Siber İç Mimar Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! İç Mimar hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 604,
    "name": "Kıvrak Şehir Plancısı",
    "category": "Hayvan",
    "profession": "Şehir Plancısı",
    "professionEmoji": "🏙️",
    "emoji": "🦊",
    "label": "#605 Kıvrak Şehir Plancısı",
    "motivation": "Taktikleri hızla kavrar! Şehir Plancısı hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 605,
    "name": "Kozmik Avukat",
    "category": "Uzaylı",
    "profession": "Avukat",
    "professionEmoji": "⚖️",
    "emoji": "👽",
    "label": "#606 Kozmik Avukat",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Avukat hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 606,
    "name": "Büyülü Hâkim",
    "category": "Sihirli",
    "profession": "Hâkim",
    "professionEmoji": "🧑‍⚖️",
    "emoji": "🧙",
    "label": "#607 Büyülü Hâkim",
    "motivation": "Her denemede yeni bir zirve! Hâkim hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 607,
    "name": "Afacan Savcı",
    "category": "Canavar",
    "profession": "Savcı",
    "professionEmoji": "🏛️",
    "emoji": "👾",
    "label": "#608 Afacan Savcı",
    "motivation": "Çalışırken enerjisi hiç bitmez! Savcı hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 608,
    "name": "Efsane Noter",
    "category": "Meslekler",
    "profession": "Noter",
    "professionEmoji": "📜",
    "emoji": "📜",
    "label": "#609 Efsane Noter",
    "motivation": "Kelime hazinesi zengin ve güçlü! Noter hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 609,
    "name": "Siber Diplomat Bot",
    "category": "Robot",
    "profession": "Diplomat",
    "professionEmoji": "🌐",
    "emoji": "🤖",
    "label": "#610 Siber Diplomat Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Diplomat hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 610,
    "name": "Bilge Polis",
    "category": "Hayvan",
    "profession": "Polis",
    "professionEmoji": "👮",
    "emoji": "🦁",
    "label": "#611 Bilge Polis",
    "motivation": "Öğrenme azmin hiç tükenmez! Polis hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 611,
    "name": "Kozmik Asker",
    "category": "Uzaylı",
    "profession": "Asker",
    "professionEmoji": "🪖",
    "emoji": "👽",
    "label": "#612 Kozmik Asker",
    "motivation": "Zorlu sorulardan asla korkmaz! Asker hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 612,
    "name": "Büyülü İtfaiyeci",
    "category": "Sihirli",
    "profession": "İtfaiyeci",
    "professionEmoji": "👨‍🚒",
    "emoji": "🧙",
    "label": "#613 Büyülü İtfaiyeci",
    "motivation": "Detayları gözünden kaçırmaz! İtfaiyeci hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 613,
    "name": "Afacan Pilot",
    "category": "Canavar",
    "profession": "Pilot",
    "professionEmoji": "👨‍✈️",
    "emoji": "👾",
    "label": "#614 Afacan Pilot",
    "motivation": "Hedefin gökyüzü ve ötesi! Pilot hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 614,
    "name": "Kıvrak Kabin Memuru",
    "category": "Meslekler",
    "profession": "Kabin Memuru",
    "professionEmoji": "🛫",
    "emoji": "🛫",
    "label": "#615 Kıvrak Kabin Memuru",
    "motivation": "Taktikleri hızla kavrar! Kabin Memuru hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 615,
    "name": "Siber Kaptan Bot",
    "category": "Robot",
    "profession": "Kaptan",
    "professionEmoji": "⚓",
    "emoji": "🤖",
    "label": "#616 Siber Kaptan Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Kaptan hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 616,
    "name": "Şampiyon Makinist",
    "category": "Hayvan",
    "profession": "Makinist",
    "professionEmoji": "🚆",
    "emoji": "🐬",
    "label": "#617 Şampiyon Makinist",
    "motivation": "Her denemede yeni bir zirve! Makinist hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 617,
    "name": "Kozmik Şoför",
    "category": "Uzaylı",
    "profession": "Şoför",
    "professionEmoji": "🚌",
    "emoji": "👽",
    "label": "#618 Kozmik Şoför",
    "motivation": "Çalışırken enerjisi hiç bitmez! Şoför hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 618,
    "name": "Büyülü Lojistik Uzmanı",
    "category": "Sihirli",
    "profession": "Lojistik Uzmanı",
    "professionEmoji": "📦",
    "emoji": "🧙",
    "label": "#619 Büyülü Lojistik Uzmanı",
    "motivation": "Kelime hazinesi zengin ve güçlü! Lojistik Uzmanı hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 619,
    "name": "Afacan Hava Trafik Kontrolörü",
    "category": "Canavar",
    "profession": "Hava Trafik Kontrolörü",
    "professionEmoji": "🛰️",
    "emoji": "👾",
    "label": "#620 Afacan Hava Trafik Kontrolörü",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Hava Trafik Kontrolörü hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 620,
    "name": "Bilge Aşçı",
    "category": "Meslekler",
    "profession": "Aşçı",
    "professionEmoji": "👨‍🍳",
    "emoji": "👨‍🍳",
    "label": "#621 Bilge Aşçı",
    "motivation": "Öğrenme azmin hiç tükenmez! Aşçı hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 621,
    "name": "Siber Pastacı Bot",
    "category": "Robot",
    "profession": "Pastacı",
    "professionEmoji": "🎂",
    "emoji": "🤖",
    "label": "#622 Siber Pastacı Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! Pastacı hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 622,
    "name": "Usta Fırıncı",
    "category": "Hayvan",
    "profession": "Fırıncı",
    "professionEmoji": "🥖",
    "emoji": "🦅",
    "label": "#623 Usta Fırıncı",
    "motivation": "Detayları gözünden kaçırmaz! Fırıncı hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 623,
    "name": "Kozmik Barista",
    "category": "Uzaylı",
    "profession": "Barista",
    "professionEmoji": "☕",
    "emoji": "👽",
    "label": "#624 Kozmik Barista",
    "motivation": "Hedefin gökyüzü ve ötesi! Barista hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 624,
    "name": "Büyülü Garson",
    "category": "Sihirli",
    "profession": "Garson",
    "professionEmoji": "🍽️",
    "emoji": "🧙",
    "label": "#625 Büyülü Garson",
    "motivation": "Taktikleri hızla kavrar! Garson hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 625,
    "name": "Afacan Çiftçi",
    "category": "Canavar",
    "profession": "Çiftçi",
    "professionEmoji": "🚜",
    "emoji": "👾",
    "label": "#626 Afacan Çiftçi",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Çiftçi hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 626,
    "name": "Şampiyon Ziraat Mühendisi",
    "category": "Meslekler",
    "profession": "Ziraat Mühendisi",
    "professionEmoji": "🌾",
    "emoji": "🌾",
    "label": "#627 Şampiyon Ziraat Mühendisi",
    "motivation": "Her denemede yeni bir zirve! Ziraat Mühendisi hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 627,
    "name": "Siber Bahçıvan Bot",
    "category": "Robot",
    "profession": "Bahçıvan",
    "professionEmoji": "🌻",
    "emoji": "🤖",
    "label": "#628 Siber Bahçıvan Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! Bahçıvan hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 628,
    "name": "Efsane Veteriner",
    "category": "Hayvan",
    "profession": "Veteriner",
    "professionEmoji": "🐾",
    "emoji": "🦊",
    "label": "#629 Efsane Veteriner",
    "motivation": "Kelime hazinesi zengin ve güçlü! Veteriner hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 629,
    "name": "Kozmik Diş Hekimi",
    "category": "Uzaylı",
    "profession": "Diş Hekimi",
    "professionEmoji": "🦷",
    "emoji": "👽",
    "label": "#630 Kozmik Diş Hekimi",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Diş Hekimi hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 630,
    "name": "Büyülü Eczacı",
    "category": "Sihirli",
    "profession": "Eczacı",
    "professionEmoji": "💊",
    "emoji": "🧙",
    "label": "#631 Büyülü Eczacı",
    "motivation": "Öğrenme azmin hiç tükenmez! Eczacı hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 631,
    "name": "Afacan Psikolog",
    "category": "Canavar",
    "profession": "Psikolog",
    "professionEmoji": "🧠",
    "emoji": "👾",
    "label": "#632 Afacan Psikolog",
    "motivation": "Zorlu sorulardan asla korkmaz! Psikolog hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 632,
    "name": "Usta Psikiyatrist",
    "category": "Meslekler",
    "profession": "Psikiyatrist",
    "professionEmoji": "🛋️",
    "emoji": "🛋️",
    "label": "#633 Usta Psikiyatrist",
    "motivation": "Detayları gözünden kaçırmaz! Psikiyatrist hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 633,
    "name": "Siber Diyetisyen Bot",
    "category": "Robot",
    "profession": "Diyetisyen",
    "professionEmoji": "🥗",
    "emoji": "🤖",
    "label": "#634 Siber Diyetisyen Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! Diyetisyen hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 634,
    "name": "Kıvrak Fizyoterapist",
    "category": "Hayvan",
    "profession": "Fizyoterapist",
    "professionEmoji": "🏃",
    "emoji": "🦁",
    "label": "#635 Kıvrak Fizyoterapist",
    "motivation": "Taktikleri hızla kavrar! Fizyoterapist hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 635,
    "name": "Kozmik Radyolog",
    "category": "Uzaylı",
    "profession": "Radyolog",
    "professionEmoji": "🩻",
    "emoji": "👽",
    "label": "#636 Kozmik Radyolog",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Radyolog hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 636,
    "name": "Büyülü Biyolog",
    "category": "Sihirli",
    "profession": "Biyolog",
    "professionEmoji": "🔬",
    "emoji": "🧙",
    "label": "#637 Büyülü Biyolog",
    "motivation": "Her denemede yeni bir zirve! Biyolog hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 637,
    "name": "Afacan Kimyager",
    "category": "Canavar",
    "profession": "Kimyager",
    "professionEmoji": "🧪",
    "emoji": "👾",
    "label": "#638 Afacan Kimyager",
    "motivation": "Çalışırken enerjisi hiç bitmez! Kimyager hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 638,
    "name": "Efsane Fizikçi",
    "category": "Meslekler",
    "profession": "Fizikçi",
    "professionEmoji": "⚛️",
    "emoji": "⚛️",
    "label": "#639 Efsane Fizikçi",
    "motivation": "Kelime hazinesi zengin ve güçlü! Fizikçi hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 639,
    "name": "Siber Astronom Bot",
    "category": "Robot",
    "profession": "Astronom",
    "professionEmoji": "🔭",
    "emoji": "🤖",
    "label": "#640 Siber Astronom Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Astronom hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 640,
    "name": "Bilge Astronot",
    "category": "Hayvan",
    "profession": "Astronot",
    "professionEmoji": "🧑‍🚀",
    "emoji": "🐬",
    "label": "#641 Bilge Astronot",
    "motivation": "Öğrenme azmin hiç tükenmez! Astronot hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 641,
    "name": "Kozmik Genetik Mühendisi",
    "category": "Uzaylı",
    "profession": "Genetik Mühendisi",
    "professionEmoji": "🧬",
    "emoji": "👽",
    "label": "#642 Kozmik Genetik Mühendisi",
    "motivation": "Zorlu sorulardan asla korkmaz! Genetik Mühendisi hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 642,
    "name": "Büyülü Jeolog",
    "category": "Sihirli",
    "profession": "Jeolog",
    "professionEmoji": "🌋",
    "emoji": "🧙",
    "label": "#643 Büyülü Jeolog",
    "motivation": "Detayları gözünden kaçırmaz! Jeolog hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 643,
    "name": "Afacan Meteorolog",
    "category": "Canavar",
    "profession": "Meteorolog",
    "professionEmoji": "🌦️",
    "emoji": "👾",
    "label": "#644 Afacan Meteorolog",
    "motivation": "Hedefin gökyüzü ve ötesi! Meteorolog hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 644,
    "name": "Kıvrak Arkeolog",
    "category": "Meslekler",
    "profession": "Arkeolog",
    "professionEmoji": "🏺",
    "emoji": "🏺",
    "label": "#645 Kıvrak Arkeolog",
    "motivation": "Taktikleri hızla kavrar! Arkeolog hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 645,
    "name": "Siber Antropolog Bot",
    "category": "Robot",
    "profession": "Antropolog",
    "professionEmoji": "🗿",
    "emoji": "🤖",
    "label": "#646 Siber Antropolog Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Antropolog hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 646,
    "name": "Şampiyon Tarihçi",
    "category": "Hayvan",
    "profession": "Tarihçi",
    "professionEmoji": "📜",
    "emoji": "🦅",
    "label": "#647 Şampiyon Tarihçi",
    "motivation": "Her denemede yeni bir zirve! Tarihçi hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 647,
    "name": "Kozmik Sosyolog",
    "category": "Uzaylı",
    "profession": "Sosyolog",
    "professionEmoji": "👥",
    "emoji": "👽",
    "label": "#648 Kozmik Sosyolog",
    "motivation": "Çalışırken enerjisi hiç bitmez! Sosyolog hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 648,
    "name": "Büyülü Felsefeci",
    "category": "Sihirli",
    "profession": "Felsefeci",
    "professionEmoji": "💭",
    "emoji": "🧙",
    "label": "#649 Büyülü Felsefeci",
    "motivation": "Kelime hazinesi zengin ve güçlü! Felsefeci hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 649,
    "name": "Afacan Dilbilimci",
    "category": "Canavar",
    "profession": "Dilbilimci",
    "professionEmoji": "🗣️",
    "emoji": "👾",
    "label": "#650 Afacan Dilbilimci",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Dilbilimci hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 650,
    "name": "Bilge Çevirmen",
    "category": "Meslekler",
    "profession": "Çevirmen",
    "professionEmoji": "🌐",
    "emoji": "🌐",
    "label": "#651 Bilge Çevirmen",
    "motivation": "Öğrenme azmin hiç tükenmez! Çevirmen hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 651,
    "name": "Siber Mütercim Tercüman Bot",
    "category": "Robot",
    "profession": "Mütercim Tercüman",
    "professionEmoji": "📖",
    "emoji": "🤖",
    "label": "#652 Siber Mütercim Tercüman Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! Mütercim Tercüman hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 652,
    "name": "Usta Gazeteci",
    "category": "Hayvan",
    "profession": "Gazeteci",
    "professionEmoji": "📰",
    "emoji": "🦊",
    "label": "#653 Usta Gazeteci",
    "motivation": "Detayları gözünden kaçırmaz! Gazeteci hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 653,
    "name": "Kozmik Muhabir",
    "category": "Uzaylı",
    "profession": "Muhabir",
    "professionEmoji": "🎙️",
    "emoji": "👽",
    "label": "#654 Kozmik Muhabir",
    "motivation": "Hedefin gökyüzü ve ötesi! Muhabir hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 654,
    "name": "Büyülü Editör",
    "category": "Sihirli",
    "profession": "Editör",
    "professionEmoji": "✍️",
    "emoji": "🧙",
    "label": "#655 Büyülü Editör",
    "motivation": "Taktikleri hızla kavrar! Editör hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 655,
    "name": "Afacan Yazar",
    "category": "Canavar",
    "profession": "Yazar",
    "professionEmoji": "🖋️",
    "emoji": "👾",
    "label": "#656 Afacan Yazar",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Yazar hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 656,
    "name": "Şampiyon Şair",
    "category": "Meslekler",
    "profession": "Şair",
    "professionEmoji": "📜",
    "emoji": "📜",
    "label": "#657 Şampiyon Şair",
    "motivation": "Her denemede yeni bir zirve! Şair hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 657,
    "name": "Siber Fotoğrafçı Bot",
    "category": "Robot",
    "profession": "Fotoğrafçı",
    "professionEmoji": "📷",
    "emoji": "🤖",
    "label": "#658 Siber Fotoğrafçı Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! Fotoğrafçı hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 658,
    "name": "Efsane Kameraman",
    "category": "Hayvan",
    "profession": "Kameraman",
    "professionEmoji": "🎥",
    "emoji": "🦁",
    "label": "#659 Efsane Kameraman",
    "motivation": "Kelime hazinesi zengin ve güçlü! Kameraman hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 659,
    "name": "Kozmik Yönetmen",
    "category": "Uzaylı",
    "profession": "Yönetmen",
    "professionEmoji": "🎬",
    "emoji": "👽",
    "label": "#660 Kozmik Yönetmen",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Yönetmen hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 660,
    "name": "Büyülü Senarist",
    "category": "Sihirli",
    "profession": "Senarist",
    "professionEmoji": "📑",
    "emoji": "🧙",
    "label": "#661 Büyülü Senarist",
    "motivation": "Öğrenme azmin hiç tükenmez! Senarist hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 661,
    "name": "Afacan Oyuncu",
    "category": "Canavar",
    "profession": "Oyuncu",
    "professionEmoji": "🎭",
    "emoji": "👾",
    "label": "#662 Afacan Oyuncu",
    "motivation": "Zorlu sorulardan asla korkmaz! Oyuncu hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 662,
    "name": "Usta Ses Sanatçısı",
    "category": "Meslekler",
    "profession": "Ses Sanatçısı",
    "professionEmoji": "🎤",
    "emoji": "🎤",
    "label": "#663 Usta Ses Sanatçısı",
    "motivation": "Detayları gözünden kaçırmaz! Ses Sanatçısı hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 663,
    "name": "Siber Müzisyen Bot",
    "category": "Robot",
    "profession": "Müzisyen",
    "professionEmoji": "🎵",
    "emoji": "🤖",
    "label": "#664 Siber Müzisyen Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! Müzisyen hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 664,
    "name": "Kıvrak Besteci",
    "category": "Hayvan",
    "profession": "Besteci",
    "professionEmoji": "🎼",
    "emoji": "🐬",
    "label": "#665 Kıvrak Besteci",
    "motivation": "Taktikleri hızla kavrar! Besteci hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 665,
    "name": "Kozmik Ressam",
    "category": "Uzaylı",
    "profession": "Ressam",
    "professionEmoji": "🎨",
    "emoji": "👽",
    "label": "#666 Kozmik Ressam",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Ressam hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 666,
    "name": "Büyülü Heykeltıraş",
    "category": "Sihirli",
    "profession": "Heykeltıraş",
    "professionEmoji": "🗿",
    "emoji": "🧙",
    "label": "#667 Büyülü Heykeltıraş",
    "motivation": "Her denemede yeni bir zirve! Heykeltıraş hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 667,
    "name": "Afacan Grafik Tasarımcı",
    "category": "Canavar",
    "profession": "Grafik Tasarımcı",
    "professionEmoji": "🖌️",
    "emoji": "👾",
    "label": "#668 Afacan Grafik Tasarımcı",
    "motivation": "Çalışırken enerjisi hiç bitmez! Grafik Tasarımcı hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 668,
    "name": "Efsane Moda Tasarımcısı",
    "category": "Meslekler",
    "profession": "Moda Tasarımcısı",
    "professionEmoji": "👗",
    "emoji": "👗",
    "label": "#669 Efsane Moda Tasarımcısı",
    "motivation": "Kelime hazinesi zengin ve güçlü! Moda Tasarımcısı hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 669,
    "name": "Siber Animasyon Sanatçısı Bot",
    "category": "Robot",
    "profession": "Animasyon Sanatçısı",
    "professionEmoji": "🎞️",
    "emoji": "🤖",
    "label": "#670 Siber Animasyon Sanatçısı Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Animasyon Sanatçısı hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 670,
    "name": "Bilge Ses Mühendisi",
    "category": "Hayvan",
    "profession": "Ses Mühendisi",
    "professionEmoji": "🎚️",
    "emoji": "🦅",
    "label": "#671 Bilge Ses Mühendisi",
    "motivation": "Öğrenme azmin hiç tükenmez! Ses Mühendisi hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 671,
    "name": "Kozmik Elektrikçi",
    "category": "Uzaylı",
    "profession": "Elektrikçi",
    "professionEmoji": "💡",
    "emoji": "👽",
    "label": "#672 Kozmik Elektrikçi",
    "motivation": "Zorlu sorulardan asla korkmaz! Elektrikçi hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 672,
    "name": "Büyülü Tesisatçı",
    "category": "Sihirli",
    "profession": "Tesisatçı",
    "professionEmoji": "🔧",
    "emoji": "🧙",
    "label": "#673 Büyülü Tesisatçı",
    "motivation": "Detayları gözünden kaçırmaz! Tesisatçı hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 673,
    "name": "Afacan Marangoz",
    "category": "Canavar",
    "profession": "Marangoz",
    "professionEmoji": "🪚",
    "emoji": "👾",
    "label": "#674 Afacan Marangoz",
    "motivation": "Hedefin gökyüzü ve ötesi! Marangoz hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 674,
    "name": "Kıvrak Kaynakçı",
    "category": "Meslekler",
    "profession": "Kaynakçı",
    "professionEmoji": "👨‍🏭",
    "emoji": "👨‍🏭",
    "label": "#675 Kıvrak Kaynakçı",
    "motivation": "Taktikleri hızla kavrar! Kaynakçı hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 675,
    "name": "Siber Oto Tamircisi Bot",
    "category": "Robot",
    "profession": "Oto Tamircisi",
    "professionEmoji": "🚗",
    "emoji": "🤖",
    "label": "#676 Siber Oto Tamircisi Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Oto Tamircisi hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 676,
    "name": "Şampiyon İnşaat Ustası",
    "category": "Hayvan",
    "profession": "İnşaat Ustası",
    "professionEmoji": "🧱",
    "emoji": "🦊",
    "label": "#677 Şampiyon İnşaat Ustası",
    "motivation": "Her denemede yeni bir zirve! İnşaat Ustası hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 677,
    "name": "Kozmik Boyacı",
    "category": "Uzaylı",
    "profession": "Boyacı",
    "professionEmoji": "🖌️",
    "emoji": "👽",
    "label": "#678 Kozmik Boyacı",
    "motivation": "Çalışırken enerjisi hiç bitmez! Boyacı hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 678,
    "name": "Büyülü Çilingir",
    "category": "Sihirli",
    "profession": "Çilingir",
    "professionEmoji": "🗝️",
    "emoji": "🧙",
    "label": "#679 Büyülü Çilingir",
    "motivation": "Kelime hazinesi zengin ve güçlü! Çilingir hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 679,
    "name": "Afacan Terzi",
    "category": "Canavar",
    "profession": "Terzi",
    "professionEmoji": "🧵",
    "emoji": "👾",
    "label": "#680 Afacan Terzi",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Terzi hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 680,
    "name": "Bilge Ayakkabıcı",
    "category": "Meslekler",
    "profession": "Ayakkabıcı",
    "professionEmoji": "👞",
    "emoji": "👞",
    "label": "#681 Bilge Ayakkabıcı",
    "motivation": "Öğrenme azmin hiç tükenmez! Ayakkabıcı hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 681,
    "name": "Siber Saatçi Bot",
    "category": "Robot",
    "profession": "Saatçi",
    "professionEmoji": "⌚",
    "emoji": "🤖",
    "label": "#682 Siber Saatçi Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! Saatçi hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 682,
    "name": "Usta Kuyumcu",
    "category": "Hayvan",
    "profession": "Kuyumcu",
    "professionEmoji": "💍",
    "emoji": "🦁",
    "label": "#683 Usta Kuyumcu",
    "motivation": "Detayları gözünden kaçırmaz! Kuyumcu hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 683,
    "name": "Kozmik Mali Müşavir",
    "category": "Uzaylı",
    "profession": "Mali Müşavir",
    "professionEmoji": "📈",
    "emoji": "👽",
    "label": "#684 Kozmik Mali Müşavir",
    "motivation": "Hedefin gökyüzü ve ötesi! Mali Müşavir hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 684,
    "name": "Büyülü Muhasebeci",
    "category": "Sihirli",
    "profession": "Muhasebeci",
    "professionEmoji": "🧾",
    "emoji": "🧙",
    "label": "#685 Büyülü Muhasebeci",
    "motivation": "Taktikleri hızla kavrar! Muhasebeci hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 685,
    "name": "Afacan İktisatçı",
    "category": "Canavar",
    "profession": "İktisatçı",
    "professionEmoji": "💹",
    "emoji": "👾",
    "label": "#686 Afacan İktisatçı",
    "motivation": "180 dakika boyunca dikkati dağılmaz! İktisatçı hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 686,
    "name": "Şampiyon Pazarlama Uzmanı",
    "category": "Meslekler",
    "profession": "Pazarlama Uzmanı",
    "professionEmoji": "📣",
    "emoji": "📣",
    "label": "#687 Şampiyon Pazarlama Uzmanı",
    "motivation": "Her denemede yeni bir zirve! Pazarlama Uzmanı hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 687,
    "name": "Siber İnsan Kaynakları Uzmanı Bot",
    "category": "Robot",
    "profession": "İnsan Kaynakları Uzmanı",
    "professionEmoji": "🤝",
    "emoji": "🤖",
    "label": "#688 Siber İnsan Kaynakları Uzmanı Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! İnsan Kaynakları Uzmanı hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 688,
    "name": "Efsane Bankacı",
    "category": "Hayvan",
    "profession": "Bankacı",
    "professionEmoji": "🏦",
    "emoji": "🐬",
    "label": "#689 Efsane Bankacı",
    "motivation": "Kelime hazinesi zengin ve güçlü! Bankacı hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 689,
    "name": "Kozmik Girişimci",
    "category": "Uzaylı",
    "profession": "Girişimci",
    "professionEmoji": "🚀",
    "emoji": "👽",
    "label": "#690 Kozmik Girişimci",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Girişimci hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 690,
    "name": "Büyülü Proje Yöneticisi",
    "category": "Sihirli",
    "profession": "Proje Yöneticisi",
    "professionEmoji": "📋",
    "emoji": "🧙",
    "label": "#691 Büyülü Proje Yöneticisi",
    "motivation": "Öğrenme azmin hiç tükenmez! Proje Yöneticisi hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 691,
    "name": "Afacan Ürün Yöneticisi",
    "category": "Canavar",
    "profession": "Ürün Yöneticisi",
    "professionEmoji": "📱",
    "emoji": "👾",
    "label": "#692 Afacan Ürün Yöneticisi",
    "motivation": "Zorlu sorulardan asla korkmaz! Ürün Yöneticisi hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 692,
    "name": "Usta Deniz Biyoloğu",
    "category": "Meslekler",
    "profession": "Deniz Biyoloğu",
    "professionEmoji": "🐬",
    "emoji": "🐬",
    "label": "#693 Usta Deniz Biyoloğu",
    "motivation": "Detayları gözünden kaçırmaz! Deniz Biyoloğu hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 693,
    "name": "Siber Ekolojist Bot",
    "category": "Robot",
    "profession": "Ekolojist",
    "professionEmoji": "🌿",
    "emoji": "🤖",
    "label": "#694 Siber Ekolojist Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! Ekolojist hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 694,
    "name": "Kıvrak Kütüphaneci",
    "category": "Hayvan",
    "profession": "Kütüphaneci",
    "professionEmoji": "📖",
    "emoji": "🦅",
    "label": "#695 Kıvrak Kütüphaneci",
    "motivation": "Taktikleri hızla kavrar! Kütüphaneci hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 695,
    "name": "Kozmik Arşivci",
    "category": "Uzaylı",
    "profession": "Arşivci",
    "professionEmoji": "🗃️",
    "emoji": "👽",
    "label": "#696 Kozmik Arşivci",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Arşivci hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 696,
    "name": "Büyülü Turist Rehberi",
    "category": "Sihirli",
    "profession": "Turist Rehberi",
    "professionEmoji": "🗺️",
    "emoji": "🧙",
    "label": "#697 Büyülü Turist Rehberi",
    "motivation": "Her denemede yeni bir zirve! Turist Rehberi hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 697,
    "name": "Afacan Spor Antrenörü",
    "category": "Canavar",
    "profession": "Spor Antrenörü",
    "professionEmoji": "🏅",
    "emoji": "👾",
    "label": "#698 Afacan Spor Antrenörü",
    "motivation": "Çalışırken enerjisi hiç bitmez! Spor Antrenörü hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 698,
    "name": "Efsane Doktor",
    "category": "Meslekler",
    "profession": "Doktor",
    "professionEmoji": "🩺",
    "emoji": "🩺",
    "label": "#699 Efsane Doktor",
    "motivation": "Kelime hazinesi zengin ve güçlü! Doktor hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 699,
    "name": "Siber Hemşire Bot",
    "category": "Robot",
    "profession": "Hemşire",
    "professionEmoji": "💉",
    "emoji": "🤖",
    "label": "#700 Siber Hemşire Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Hemşire hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 700,
    "name": "Bilge Öğretmen",
    "category": "Hayvan",
    "profession": "Öğretmen",
    "professionEmoji": "📚",
    "emoji": "🦊",
    "label": "#701 Bilge Öğretmen",
    "motivation": "Öğrenme azmin hiç tükenmez! Öğretmen hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 701,
    "name": "Kozmik Akademisyen",
    "category": "Uzaylı",
    "profession": "Akademisyen",
    "professionEmoji": "🎓",
    "emoji": "👽",
    "label": "#702 Kozmik Akademisyen",
    "motivation": "Zorlu sorulardan asla korkmaz! Akademisyen hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 702,
    "name": "Büyülü Yazılımcı",
    "category": "Sihirli",
    "profession": "Yazılımcı",
    "professionEmoji": "💻",
    "emoji": "🧙",
    "label": "#703 Büyülü Yazılımcı",
    "motivation": "Detayları gözünden kaçırmaz! Yazılımcı hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 703,
    "name": "Afacan Veri Bilimci",
    "category": "Canavar",
    "profession": "Veri Bilimci",
    "professionEmoji": "📊",
    "emoji": "👾",
    "label": "#704 Afacan Veri Bilimci",
    "motivation": "Hedefin gökyüzü ve ötesi! Veri Bilimci hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 704,
    "name": "Kıvrak Bilgisayar Mühendisi",
    "category": "Meslekler",
    "profession": "Bilgisayar Mühendisi",
    "professionEmoji": "🖥️",
    "emoji": "🖥️",
    "label": "#705 Kıvrak Bilgisayar Mühendisi",
    "motivation": "Taktikleri hızla kavrar! Bilgisayar Mühendisi hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 705,
    "name": "Siber Yapay Zeka Uzmanı Bot",
    "category": "Robot",
    "profession": "Yapay Zeka Uzmanı",
    "professionEmoji": "🤖",
    "emoji": "🤖",
    "label": "#706 Siber Yapay Zeka Uzmanı Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Yapay Zeka Uzmanı hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 706,
    "name": "Şampiyon Siber Güvenlik Uzmanı",
    "category": "Hayvan",
    "profession": "Siber Güvenlik Uzmanı",
    "professionEmoji": "🛡️",
    "emoji": "🦁",
    "label": "#707 Şampiyon Siber Güvenlik Uzmanı",
    "motivation": "Her denemede yeni bir zirve! Siber Güvenlik Uzmanı hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 707,
    "name": "Kozmik Elektrik Mühendisi",
    "category": "Uzaylı",
    "profession": "Elektrik Mühendisi",
    "professionEmoji": "⚡",
    "emoji": "👽",
    "label": "#708 Kozmik Elektrik Mühendisi",
    "motivation": "Çalışırken enerjisi hiç bitmez! Elektrik Mühendisi hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 708,
    "name": "Büyülü Makine Mühendisi",
    "category": "Sihirli",
    "profession": "Makine Mühendisi",
    "professionEmoji": "⚙️",
    "emoji": "🧙",
    "label": "#709 Büyülü Makine Mühendisi",
    "motivation": "Kelime hazinesi zengin ve güçlü! Makine Mühendisi hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 709,
    "name": "Afacan İnşaat Mühendisi",
    "category": "Canavar",
    "profession": "İnşaat Mühendisi",
    "professionEmoji": "🏗️",
    "emoji": "👾",
    "label": "#710 Afacan İnşaat Mühendisi",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! İnşaat Mühendisi hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 710,
    "name": "Bilge Mimar",
    "category": "Meslekler",
    "profession": "Mimar",
    "professionEmoji": "📐",
    "emoji": "📐",
    "label": "#711 Bilge Mimar",
    "motivation": "Öğrenme azmin hiç tükenmez! Mimar hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 711,
    "name": "Siber İç Mimar Bot",
    "category": "Robot",
    "profession": "İç Mimar",
    "professionEmoji": "🛋️",
    "emoji": "🤖",
    "label": "#712 Siber İç Mimar Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! İç Mimar hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 712,
    "name": "Usta Şehir Plancısı",
    "category": "Hayvan",
    "profession": "Şehir Plancısı",
    "professionEmoji": "🏙️",
    "emoji": "🐬",
    "label": "#713 Usta Şehir Plancısı",
    "motivation": "Detayları gözünden kaçırmaz! Şehir Plancısı hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 713,
    "name": "Kozmik Avukat",
    "category": "Uzaylı",
    "profession": "Avukat",
    "professionEmoji": "⚖️",
    "emoji": "👽",
    "label": "#714 Kozmik Avukat",
    "motivation": "Hedefin gökyüzü ve ötesi! Avukat hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 714,
    "name": "Büyülü Hâkim",
    "category": "Sihirli",
    "profession": "Hâkim",
    "professionEmoji": "🧑‍⚖️",
    "emoji": "🧙",
    "label": "#715 Büyülü Hâkim",
    "motivation": "Taktikleri hızla kavrar! Hâkim hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 715,
    "name": "Afacan Savcı",
    "category": "Canavar",
    "profession": "Savcı",
    "professionEmoji": "🏛️",
    "emoji": "👾",
    "label": "#716 Afacan Savcı",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Savcı hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 716,
    "name": "Şampiyon Noter",
    "category": "Meslekler",
    "profession": "Noter",
    "professionEmoji": "📜",
    "emoji": "📜",
    "label": "#717 Şampiyon Noter",
    "motivation": "Her denemede yeni bir zirve! Noter hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 717,
    "name": "Siber Diplomat Bot",
    "category": "Robot",
    "profession": "Diplomat",
    "professionEmoji": "🌐",
    "emoji": "🤖",
    "label": "#718 Siber Diplomat Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! Diplomat hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 718,
    "name": "Efsane Polis",
    "category": "Hayvan",
    "profession": "Polis",
    "professionEmoji": "👮",
    "emoji": "🦅",
    "label": "#719 Efsane Polis",
    "motivation": "Kelime hazinesi zengin ve güçlü! Polis hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 719,
    "name": "Kozmik Asker",
    "category": "Uzaylı",
    "profession": "Asker",
    "professionEmoji": "🪖",
    "emoji": "👽",
    "label": "#720 Kozmik Asker",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Asker hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 720,
    "name": "Büyülü İtfaiyeci",
    "category": "Sihirli",
    "profession": "İtfaiyeci",
    "professionEmoji": "👨‍🚒",
    "emoji": "🧙",
    "label": "#721 Büyülü İtfaiyeci",
    "motivation": "Öğrenme azmin hiç tükenmez! İtfaiyeci hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 721,
    "name": "Afacan Pilot",
    "category": "Canavar",
    "profession": "Pilot",
    "professionEmoji": "👨‍✈️",
    "emoji": "👾",
    "label": "#722 Afacan Pilot",
    "motivation": "Zorlu sorulardan asla korkmaz! Pilot hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 722,
    "name": "Usta Kabin Memuru",
    "category": "Meslekler",
    "profession": "Kabin Memuru",
    "professionEmoji": "🛫",
    "emoji": "🛫",
    "label": "#723 Usta Kabin Memuru",
    "motivation": "Detayları gözünden kaçırmaz! Kabin Memuru hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 723,
    "name": "Siber Kaptan Bot",
    "category": "Robot",
    "profession": "Kaptan",
    "professionEmoji": "⚓",
    "emoji": "🤖",
    "label": "#724 Siber Kaptan Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! Kaptan hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 724,
    "name": "Kıvrak Makinist",
    "category": "Hayvan",
    "profession": "Makinist",
    "professionEmoji": "🚆",
    "emoji": "🦊",
    "label": "#725 Kıvrak Makinist",
    "motivation": "Taktikleri hızla kavrar! Makinist hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 725,
    "name": "Kozmik Şoför",
    "category": "Uzaylı",
    "profession": "Şoför",
    "professionEmoji": "🚌",
    "emoji": "👽",
    "label": "#726 Kozmik Şoför",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Şoför hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 726,
    "name": "Büyülü Lojistik Uzmanı",
    "category": "Sihirli",
    "profession": "Lojistik Uzmanı",
    "professionEmoji": "📦",
    "emoji": "🧙",
    "label": "#727 Büyülü Lojistik Uzmanı",
    "motivation": "Her denemede yeni bir zirve! Lojistik Uzmanı hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 727,
    "name": "Afacan Hava Trafik Kontrolörü",
    "category": "Canavar",
    "profession": "Hava Trafik Kontrolörü",
    "professionEmoji": "🛰️",
    "emoji": "👾",
    "label": "#728 Afacan Hava Trafik Kontrolörü",
    "motivation": "Çalışırken enerjisi hiç bitmez! Hava Trafik Kontrolörü hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 728,
    "name": "Efsane Aşçı",
    "category": "Meslekler",
    "profession": "Aşçı",
    "professionEmoji": "👨‍🍳",
    "emoji": "👨‍🍳",
    "label": "#729 Efsane Aşçı",
    "motivation": "Kelime hazinesi zengin ve güçlü! Aşçı hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 729,
    "name": "Siber Pastacı Bot",
    "category": "Robot",
    "profession": "Pastacı",
    "professionEmoji": "🎂",
    "emoji": "🤖",
    "label": "#730 Siber Pastacı Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Pastacı hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 730,
    "name": "Bilge Fırıncı",
    "category": "Hayvan",
    "profession": "Fırıncı",
    "professionEmoji": "🥖",
    "emoji": "🦁",
    "label": "#731 Bilge Fırıncı",
    "motivation": "Öğrenme azmin hiç tükenmez! Fırıncı hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 731,
    "name": "Kozmik Barista",
    "category": "Uzaylı",
    "profession": "Barista",
    "professionEmoji": "☕",
    "emoji": "👽",
    "label": "#732 Kozmik Barista",
    "motivation": "Zorlu sorulardan asla korkmaz! Barista hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 732,
    "name": "Büyülü Garson",
    "category": "Sihirli",
    "profession": "Garson",
    "professionEmoji": "🍽️",
    "emoji": "🧙",
    "label": "#733 Büyülü Garson",
    "motivation": "Detayları gözünden kaçırmaz! Garson hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 733,
    "name": "Afacan Çiftçi",
    "category": "Canavar",
    "profession": "Çiftçi",
    "professionEmoji": "🚜",
    "emoji": "👾",
    "label": "#734 Afacan Çiftçi",
    "motivation": "Hedefin gökyüzü ve ötesi! Çiftçi hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 734,
    "name": "Kıvrak Ziraat Mühendisi",
    "category": "Meslekler",
    "profession": "Ziraat Mühendisi",
    "professionEmoji": "🌾",
    "emoji": "🌾",
    "label": "#735 Kıvrak Ziraat Mühendisi",
    "motivation": "Taktikleri hızla kavrar! Ziraat Mühendisi hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 735,
    "name": "Siber Bahçıvan Bot",
    "category": "Robot",
    "profession": "Bahçıvan",
    "professionEmoji": "🌻",
    "emoji": "🤖",
    "label": "#736 Siber Bahçıvan Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Bahçıvan hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 736,
    "name": "Şampiyon Veteriner",
    "category": "Hayvan",
    "profession": "Veteriner",
    "professionEmoji": "🐾",
    "emoji": "🐬",
    "label": "#737 Şampiyon Veteriner",
    "motivation": "Her denemede yeni bir zirve! Veteriner hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 737,
    "name": "Kozmik Diş Hekimi",
    "category": "Uzaylı",
    "profession": "Diş Hekimi",
    "professionEmoji": "🦷",
    "emoji": "👽",
    "label": "#738 Kozmik Diş Hekimi",
    "motivation": "Çalışırken enerjisi hiç bitmez! Diş Hekimi hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 738,
    "name": "Büyülü Eczacı",
    "category": "Sihirli",
    "profession": "Eczacı",
    "professionEmoji": "💊",
    "emoji": "🧙",
    "label": "#739 Büyülü Eczacı",
    "motivation": "Kelime hazinesi zengin ve güçlü! Eczacı hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 739,
    "name": "Afacan Psikolog",
    "category": "Canavar",
    "profession": "Psikolog",
    "professionEmoji": "🧠",
    "emoji": "👾",
    "label": "#740 Afacan Psikolog",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Psikolog hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 740,
    "name": "Bilge Psikiyatrist",
    "category": "Meslekler",
    "profession": "Psikiyatrist",
    "professionEmoji": "🛋️",
    "emoji": "🛋️",
    "label": "#741 Bilge Psikiyatrist",
    "motivation": "Öğrenme azmin hiç tükenmez! Psikiyatrist hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 741,
    "name": "Siber Diyetisyen Bot",
    "category": "Robot",
    "profession": "Diyetisyen",
    "professionEmoji": "🥗",
    "emoji": "🤖",
    "label": "#742 Siber Diyetisyen Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! Diyetisyen hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 742,
    "name": "Usta Fizyoterapist",
    "category": "Hayvan",
    "profession": "Fizyoterapist",
    "professionEmoji": "🏃",
    "emoji": "🦅",
    "label": "#743 Usta Fizyoterapist",
    "motivation": "Detayları gözünden kaçırmaz! Fizyoterapist hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 743,
    "name": "Kozmik Radyolog",
    "category": "Uzaylı",
    "profession": "Radyolog",
    "professionEmoji": "🩻",
    "emoji": "👽",
    "label": "#744 Kozmik Radyolog",
    "motivation": "Hedefin gökyüzü ve ötesi! Radyolog hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 744,
    "name": "Büyülü Biyolog",
    "category": "Sihirli",
    "profession": "Biyolog",
    "professionEmoji": "🔬",
    "emoji": "🧙",
    "label": "#745 Büyülü Biyolog",
    "motivation": "Taktikleri hızla kavrar! Biyolog hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 745,
    "name": "Afacan Kimyager",
    "category": "Canavar",
    "profession": "Kimyager",
    "professionEmoji": "🧪",
    "emoji": "👾",
    "label": "#746 Afacan Kimyager",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Kimyager hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 746,
    "name": "Şampiyon Fizikçi",
    "category": "Meslekler",
    "profession": "Fizikçi",
    "professionEmoji": "⚛️",
    "emoji": "⚛️",
    "label": "#747 Şampiyon Fizikçi",
    "motivation": "Her denemede yeni bir zirve! Fizikçi hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 747,
    "name": "Siber Astronom Bot",
    "category": "Robot",
    "profession": "Astronom",
    "professionEmoji": "🔭",
    "emoji": "🤖",
    "label": "#748 Siber Astronom Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! Astronom hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 748,
    "name": "Efsane Astronot",
    "category": "Hayvan",
    "profession": "Astronot",
    "professionEmoji": "🧑‍🚀",
    "emoji": "🦊",
    "label": "#749 Efsane Astronot",
    "motivation": "Kelime hazinesi zengin ve güçlü! Astronot hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 749,
    "name": "Kozmik Genetik Mühendisi",
    "category": "Uzaylı",
    "profession": "Genetik Mühendisi",
    "professionEmoji": "🧬",
    "emoji": "👽",
    "label": "#750 Kozmik Genetik Mühendisi",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Genetik Mühendisi hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 750,
    "name": "Büyülü Jeolog",
    "category": "Sihirli",
    "profession": "Jeolog",
    "professionEmoji": "🌋",
    "emoji": "🧙",
    "label": "#751 Büyülü Jeolog",
    "motivation": "Öğrenme azmin hiç tükenmez! Jeolog hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 751,
    "name": "Afacan Meteorolog",
    "category": "Canavar",
    "profession": "Meteorolog",
    "professionEmoji": "🌦️",
    "emoji": "👾",
    "label": "#752 Afacan Meteorolog",
    "motivation": "Zorlu sorulardan asla korkmaz! Meteorolog hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 752,
    "name": "Usta Arkeolog",
    "category": "Meslekler",
    "profession": "Arkeolog",
    "professionEmoji": "🏺",
    "emoji": "🏺",
    "label": "#753 Usta Arkeolog",
    "motivation": "Detayları gözünden kaçırmaz! Arkeolog hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 753,
    "name": "Siber Antropolog Bot",
    "category": "Robot",
    "profession": "Antropolog",
    "professionEmoji": "🗿",
    "emoji": "🤖",
    "label": "#754 Siber Antropolog Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! Antropolog hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 754,
    "name": "Kıvrak Tarihçi",
    "category": "Hayvan",
    "profession": "Tarihçi",
    "professionEmoji": "📜",
    "emoji": "🦁",
    "label": "#755 Kıvrak Tarihçi",
    "motivation": "Taktikleri hızla kavrar! Tarihçi hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 755,
    "name": "Kozmik Sosyolog",
    "category": "Uzaylı",
    "profession": "Sosyolog",
    "professionEmoji": "👥",
    "emoji": "👽",
    "label": "#756 Kozmik Sosyolog",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Sosyolog hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 756,
    "name": "Büyülü Felsefeci",
    "category": "Sihirli",
    "profession": "Felsefeci",
    "professionEmoji": "💭",
    "emoji": "🧙",
    "label": "#757 Büyülü Felsefeci",
    "motivation": "Her denemede yeni bir zirve! Felsefeci hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 757,
    "name": "Afacan Dilbilimci",
    "category": "Canavar",
    "profession": "Dilbilimci",
    "professionEmoji": "🗣️",
    "emoji": "👾",
    "label": "#758 Afacan Dilbilimci",
    "motivation": "Çalışırken enerjisi hiç bitmez! Dilbilimci hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 758,
    "name": "Efsane Çevirmen",
    "category": "Meslekler",
    "profession": "Çevirmen",
    "professionEmoji": "🌐",
    "emoji": "🌐",
    "label": "#759 Efsane Çevirmen",
    "motivation": "Kelime hazinesi zengin ve güçlü! Çevirmen hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 759,
    "name": "Siber Mütercim Tercüman Bot",
    "category": "Robot",
    "profession": "Mütercim Tercüman",
    "professionEmoji": "📖",
    "emoji": "🤖",
    "label": "#760 Siber Mütercim Tercüman Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Mütercim Tercüman hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 760,
    "name": "Bilge Gazeteci",
    "category": "Hayvan",
    "profession": "Gazeteci",
    "professionEmoji": "📰",
    "emoji": "🐬",
    "label": "#761 Bilge Gazeteci",
    "motivation": "Öğrenme azmin hiç tükenmez! Gazeteci hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 761,
    "name": "Kozmik Muhabir",
    "category": "Uzaylı",
    "profession": "Muhabir",
    "professionEmoji": "🎙️",
    "emoji": "👽",
    "label": "#762 Kozmik Muhabir",
    "motivation": "Zorlu sorulardan asla korkmaz! Muhabir hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 762,
    "name": "Büyülü Editör",
    "category": "Sihirli",
    "profession": "Editör",
    "professionEmoji": "✍️",
    "emoji": "🧙",
    "label": "#763 Büyülü Editör",
    "motivation": "Detayları gözünden kaçırmaz! Editör hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 763,
    "name": "Afacan Yazar",
    "category": "Canavar",
    "profession": "Yazar",
    "professionEmoji": "🖋️",
    "emoji": "👾",
    "label": "#764 Afacan Yazar",
    "motivation": "Hedefin gökyüzü ve ötesi! Yazar hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 764,
    "name": "Kıvrak Şair",
    "category": "Meslekler",
    "profession": "Şair",
    "professionEmoji": "📜",
    "emoji": "📜",
    "label": "#765 Kıvrak Şair",
    "motivation": "Taktikleri hızla kavrar! Şair hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 765,
    "name": "Siber Fotoğrafçı Bot",
    "category": "Robot",
    "profession": "Fotoğrafçı",
    "professionEmoji": "📷",
    "emoji": "🤖",
    "label": "#766 Siber Fotoğrafçı Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Fotoğrafçı hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 766,
    "name": "Şampiyon Kameraman",
    "category": "Hayvan",
    "profession": "Kameraman",
    "professionEmoji": "🎥",
    "emoji": "🦅",
    "label": "#767 Şampiyon Kameraman",
    "motivation": "Her denemede yeni bir zirve! Kameraman hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 767,
    "name": "Kozmik Yönetmen",
    "category": "Uzaylı",
    "profession": "Yönetmen",
    "professionEmoji": "🎬",
    "emoji": "👽",
    "label": "#768 Kozmik Yönetmen",
    "motivation": "Çalışırken enerjisi hiç bitmez! Yönetmen hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 768,
    "name": "Büyülü Senarist",
    "category": "Sihirli",
    "profession": "Senarist",
    "professionEmoji": "📑",
    "emoji": "🧙",
    "label": "#769 Büyülü Senarist",
    "motivation": "Kelime hazinesi zengin ve güçlü! Senarist hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 769,
    "name": "Afacan Oyuncu",
    "category": "Canavar",
    "profession": "Oyuncu",
    "professionEmoji": "🎭",
    "emoji": "👾",
    "label": "#770 Afacan Oyuncu",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Oyuncu hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 770,
    "name": "Bilge Ses Sanatçısı",
    "category": "Meslekler",
    "profession": "Ses Sanatçısı",
    "professionEmoji": "🎤",
    "emoji": "🎤",
    "label": "#771 Bilge Ses Sanatçısı",
    "motivation": "Öğrenme azmin hiç tükenmez! Ses Sanatçısı hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 771,
    "name": "Siber Müzisyen Bot",
    "category": "Robot",
    "profession": "Müzisyen",
    "professionEmoji": "🎵",
    "emoji": "🤖",
    "label": "#772 Siber Müzisyen Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! Müzisyen hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 772,
    "name": "Usta Besteci",
    "category": "Hayvan",
    "profession": "Besteci",
    "professionEmoji": "🎼",
    "emoji": "🦊",
    "label": "#773 Usta Besteci",
    "motivation": "Detayları gözünden kaçırmaz! Besteci hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 773,
    "name": "Kozmik Ressam",
    "category": "Uzaylı",
    "profession": "Ressam",
    "professionEmoji": "🎨",
    "emoji": "👽",
    "label": "#774 Kozmik Ressam",
    "motivation": "Hedefin gökyüzü ve ötesi! Ressam hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 774,
    "name": "Büyülü Heykeltıraş",
    "category": "Sihirli",
    "profession": "Heykeltıraş",
    "professionEmoji": "🗿",
    "emoji": "🧙",
    "label": "#775 Büyülü Heykeltıraş",
    "motivation": "Taktikleri hızla kavrar! Heykeltıraş hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 775,
    "name": "Afacan Grafik Tasarımcı",
    "category": "Canavar",
    "profession": "Grafik Tasarımcı",
    "professionEmoji": "🖌️",
    "emoji": "👾",
    "label": "#776 Afacan Grafik Tasarımcı",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Grafik Tasarımcı hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 776,
    "name": "Şampiyon Moda Tasarımcısı",
    "category": "Meslekler",
    "profession": "Moda Tasarımcısı",
    "professionEmoji": "👗",
    "emoji": "👗",
    "label": "#777 Şampiyon Moda Tasarımcısı",
    "motivation": "Her denemede yeni bir zirve! Moda Tasarımcısı hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 777,
    "name": "Siber Animasyon Sanatçısı Bot",
    "category": "Robot",
    "profession": "Animasyon Sanatçısı",
    "professionEmoji": "🎞️",
    "emoji": "🤖",
    "label": "#778 Siber Animasyon Sanatçısı Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! Animasyon Sanatçısı hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 778,
    "name": "Efsane Ses Mühendisi",
    "category": "Hayvan",
    "profession": "Ses Mühendisi",
    "professionEmoji": "🎚️",
    "emoji": "🦁",
    "label": "#779 Efsane Ses Mühendisi",
    "motivation": "Kelime hazinesi zengin ve güçlü! Ses Mühendisi hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 779,
    "name": "Kozmik Elektrikçi",
    "category": "Uzaylı",
    "profession": "Elektrikçi",
    "professionEmoji": "💡",
    "emoji": "👽",
    "label": "#780 Kozmik Elektrikçi",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Elektrikçi hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 780,
    "name": "Büyülü Tesisatçı",
    "category": "Sihirli",
    "profession": "Tesisatçı",
    "professionEmoji": "🔧",
    "emoji": "🧙",
    "label": "#781 Büyülü Tesisatçı",
    "motivation": "Öğrenme azmin hiç tükenmez! Tesisatçı hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 781,
    "name": "Afacan Marangoz",
    "category": "Canavar",
    "profession": "Marangoz",
    "professionEmoji": "🪚",
    "emoji": "👾",
    "label": "#782 Afacan Marangoz",
    "motivation": "Zorlu sorulardan asla korkmaz! Marangoz hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 782,
    "name": "Usta Kaynakçı",
    "category": "Meslekler",
    "profession": "Kaynakçı",
    "professionEmoji": "👨‍🏭",
    "emoji": "👨‍🏭",
    "label": "#783 Usta Kaynakçı",
    "motivation": "Detayları gözünden kaçırmaz! Kaynakçı hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 783,
    "name": "Siber Oto Tamircisi Bot",
    "category": "Robot",
    "profession": "Oto Tamircisi",
    "professionEmoji": "🚗",
    "emoji": "🤖",
    "label": "#784 Siber Oto Tamircisi Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! Oto Tamircisi hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 784,
    "name": "Kıvrak İnşaat Ustası",
    "category": "Hayvan",
    "profession": "İnşaat Ustası",
    "professionEmoji": "🧱",
    "emoji": "🐬",
    "label": "#785 Kıvrak İnşaat Ustası",
    "motivation": "Taktikleri hızla kavrar! İnşaat Ustası hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 785,
    "name": "Kozmik Boyacı",
    "category": "Uzaylı",
    "profession": "Boyacı",
    "professionEmoji": "🖌️",
    "emoji": "👽",
    "label": "#786 Kozmik Boyacı",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Boyacı hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 786,
    "name": "Büyülü Çilingir",
    "category": "Sihirli",
    "profession": "Çilingir",
    "professionEmoji": "🗝️",
    "emoji": "🧙",
    "label": "#787 Büyülü Çilingir",
    "motivation": "Her denemede yeni bir zirve! Çilingir hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 787,
    "name": "Afacan Terzi",
    "category": "Canavar",
    "profession": "Terzi",
    "professionEmoji": "🧵",
    "emoji": "👾",
    "label": "#788 Afacan Terzi",
    "motivation": "Çalışırken enerjisi hiç bitmez! Terzi hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 788,
    "name": "Efsane Ayakkabıcı",
    "category": "Meslekler",
    "profession": "Ayakkabıcı",
    "professionEmoji": "👞",
    "emoji": "👞",
    "label": "#789 Efsane Ayakkabıcı",
    "motivation": "Kelime hazinesi zengin ve güçlü! Ayakkabıcı hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 789,
    "name": "Siber Saatçi Bot",
    "category": "Robot",
    "profession": "Saatçi",
    "professionEmoji": "⌚",
    "emoji": "🤖",
    "label": "#790 Siber Saatçi Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Saatçi hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 790,
    "name": "Bilge Kuyumcu",
    "category": "Hayvan",
    "profession": "Kuyumcu",
    "professionEmoji": "💍",
    "emoji": "🦅",
    "label": "#791 Bilge Kuyumcu",
    "motivation": "Öğrenme azmin hiç tükenmez! Kuyumcu hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 791,
    "name": "Kozmik Mali Müşavir",
    "category": "Uzaylı",
    "profession": "Mali Müşavir",
    "professionEmoji": "📈",
    "emoji": "👽",
    "label": "#792 Kozmik Mali Müşavir",
    "motivation": "Zorlu sorulardan asla korkmaz! Mali Müşavir hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 792,
    "name": "Büyülü Muhasebeci",
    "category": "Sihirli",
    "profession": "Muhasebeci",
    "professionEmoji": "🧾",
    "emoji": "🧙",
    "label": "#793 Büyülü Muhasebeci",
    "motivation": "Detayları gözünden kaçırmaz! Muhasebeci hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 793,
    "name": "Afacan İktisatçı",
    "category": "Canavar",
    "profession": "İktisatçı",
    "professionEmoji": "💹",
    "emoji": "👾",
    "label": "#794 Afacan İktisatçı",
    "motivation": "Hedefin gökyüzü ve ötesi! İktisatçı hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 794,
    "name": "Kıvrak Pazarlama Uzmanı",
    "category": "Meslekler",
    "profession": "Pazarlama Uzmanı",
    "professionEmoji": "📣",
    "emoji": "📣",
    "label": "#795 Kıvrak Pazarlama Uzmanı",
    "motivation": "Taktikleri hızla kavrar! Pazarlama Uzmanı hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 795,
    "name": "Siber İnsan Kaynakları Uzmanı Bot",
    "category": "Robot",
    "profession": "İnsan Kaynakları Uzmanı",
    "professionEmoji": "🤝",
    "emoji": "🤖",
    "label": "#796 Siber İnsan Kaynakları Uzmanı Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! İnsan Kaynakları Uzmanı hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 796,
    "name": "Şampiyon Bankacı",
    "category": "Hayvan",
    "profession": "Bankacı",
    "professionEmoji": "🏦",
    "emoji": "🦊",
    "label": "#797 Şampiyon Bankacı",
    "motivation": "Her denemede yeni bir zirve! Bankacı hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 797,
    "name": "Kozmik Girişimci",
    "category": "Uzaylı",
    "profession": "Girişimci",
    "professionEmoji": "🚀",
    "emoji": "👽",
    "label": "#798 Kozmik Girişimci",
    "motivation": "Çalışırken enerjisi hiç bitmez! Girişimci hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 798,
    "name": "Büyülü Proje Yöneticisi",
    "category": "Sihirli",
    "profession": "Proje Yöneticisi",
    "professionEmoji": "📋",
    "emoji": "🧙",
    "label": "#799 Büyülü Proje Yöneticisi",
    "motivation": "Kelime hazinesi zengin ve güçlü! Proje Yöneticisi hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 799,
    "name": "Afacan Ürün Yöneticisi",
    "category": "Canavar",
    "profession": "Ürün Yöneticisi",
    "professionEmoji": "📱",
    "emoji": "👾",
    "label": "#800 Afacan Ürün Yöneticisi",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Ürün Yöneticisi hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 800,
    "name": "Bilge Deniz Biyoloğu",
    "category": "Meslekler",
    "profession": "Deniz Biyoloğu",
    "professionEmoji": "🐬",
    "emoji": "🐬",
    "label": "#801 Bilge Deniz Biyoloğu",
    "motivation": "Öğrenme azmin hiç tükenmez! Deniz Biyoloğu hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 801,
    "name": "Siber Ekolojist Bot",
    "category": "Robot",
    "profession": "Ekolojist",
    "professionEmoji": "🌿",
    "emoji": "🤖",
    "label": "#802 Siber Ekolojist Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! Ekolojist hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 802,
    "name": "Usta Kütüphaneci",
    "category": "Hayvan",
    "profession": "Kütüphaneci",
    "professionEmoji": "📖",
    "emoji": "🦁",
    "label": "#803 Usta Kütüphaneci",
    "motivation": "Detayları gözünden kaçırmaz! Kütüphaneci hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 803,
    "name": "Kozmik Arşivci",
    "category": "Uzaylı",
    "profession": "Arşivci",
    "professionEmoji": "🗃️",
    "emoji": "👽",
    "label": "#804 Kozmik Arşivci",
    "motivation": "Hedefin gökyüzü ve ötesi! Arşivci hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 804,
    "name": "Büyülü Turist Rehberi",
    "category": "Sihirli",
    "profession": "Turist Rehberi",
    "professionEmoji": "🗺️",
    "emoji": "🧙",
    "label": "#805 Büyülü Turist Rehberi",
    "motivation": "Taktikleri hızla kavrar! Turist Rehberi hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 805,
    "name": "Afacan Spor Antrenörü",
    "category": "Canavar",
    "profession": "Spor Antrenörü",
    "professionEmoji": "🏅",
    "emoji": "👾",
    "label": "#806 Afacan Spor Antrenörü",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Spor Antrenörü hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 806,
    "name": "Şampiyon Doktor",
    "category": "Meslekler",
    "profession": "Doktor",
    "professionEmoji": "🩺",
    "emoji": "🩺",
    "label": "#807 Şampiyon Doktor",
    "motivation": "Her denemede yeni bir zirve! Doktor hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 807,
    "name": "Siber Hemşire Bot",
    "category": "Robot",
    "profession": "Hemşire",
    "professionEmoji": "💉",
    "emoji": "🤖",
    "label": "#808 Siber Hemşire Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! Hemşire hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 808,
    "name": "Efsane Öğretmen",
    "category": "Hayvan",
    "profession": "Öğretmen",
    "professionEmoji": "📚",
    "emoji": "🐬",
    "label": "#809 Efsane Öğretmen",
    "motivation": "Kelime hazinesi zengin ve güçlü! Öğretmen hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 809,
    "name": "Kozmik Akademisyen",
    "category": "Uzaylı",
    "profession": "Akademisyen",
    "professionEmoji": "🎓",
    "emoji": "👽",
    "label": "#810 Kozmik Akademisyen",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Akademisyen hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 810,
    "name": "Büyülü Yazılımcı",
    "category": "Sihirli",
    "profession": "Yazılımcı",
    "professionEmoji": "💻",
    "emoji": "🧙",
    "label": "#811 Büyülü Yazılımcı",
    "motivation": "Öğrenme azmin hiç tükenmez! Yazılımcı hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 811,
    "name": "Afacan Veri Bilimci",
    "category": "Canavar",
    "profession": "Veri Bilimci",
    "professionEmoji": "📊",
    "emoji": "👾",
    "label": "#812 Afacan Veri Bilimci",
    "motivation": "Zorlu sorulardan asla korkmaz! Veri Bilimci hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 812,
    "name": "Usta Bilgisayar Mühendisi",
    "category": "Meslekler",
    "profession": "Bilgisayar Mühendisi",
    "professionEmoji": "🖥️",
    "emoji": "🖥️",
    "label": "#813 Usta Bilgisayar Mühendisi",
    "motivation": "Detayları gözünden kaçırmaz! Bilgisayar Mühendisi hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 813,
    "name": "Siber Yapay Zeka Uzmanı Bot",
    "category": "Robot",
    "profession": "Yapay Zeka Uzmanı",
    "professionEmoji": "🤖",
    "emoji": "🤖",
    "label": "#814 Siber Yapay Zeka Uzmanı Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! Yapay Zeka Uzmanı hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 814,
    "name": "Kıvrak Siber Güvenlik Uzmanı",
    "category": "Hayvan",
    "profession": "Siber Güvenlik Uzmanı",
    "professionEmoji": "🛡️",
    "emoji": "🦅",
    "label": "#815 Kıvrak Siber Güvenlik Uzmanı",
    "motivation": "Taktikleri hızla kavrar! Siber Güvenlik Uzmanı hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 815,
    "name": "Kozmik Elektrik Mühendisi",
    "category": "Uzaylı",
    "profession": "Elektrik Mühendisi",
    "professionEmoji": "⚡",
    "emoji": "👽",
    "label": "#816 Kozmik Elektrik Mühendisi",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Elektrik Mühendisi hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 816,
    "name": "Büyülü Makine Mühendisi",
    "category": "Sihirli",
    "profession": "Makine Mühendisi",
    "professionEmoji": "⚙️",
    "emoji": "🧙",
    "label": "#817 Büyülü Makine Mühendisi",
    "motivation": "Her denemede yeni bir zirve! Makine Mühendisi hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 817,
    "name": "Afacan İnşaat Mühendisi",
    "category": "Canavar",
    "profession": "İnşaat Mühendisi",
    "professionEmoji": "🏗️",
    "emoji": "👾",
    "label": "#818 Afacan İnşaat Mühendisi",
    "motivation": "Çalışırken enerjisi hiç bitmez! İnşaat Mühendisi hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 818,
    "name": "Efsane Mimar",
    "category": "Meslekler",
    "profession": "Mimar",
    "professionEmoji": "📐",
    "emoji": "📐",
    "label": "#819 Efsane Mimar",
    "motivation": "Kelime hazinesi zengin ve güçlü! Mimar hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 819,
    "name": "Siber İç Mimar Bot",
    "category": "Robot",
    "profession": "İç Mimar",
    "professionEmoji": "🛋️",
    "emoji": "🤖",
    "label": "#820 Siber İç Mimar Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! İç Mimar hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 820,
    "name": "Bilge Şehir Plancısı",
    "category": "Hayvan",
    "profession": "Şehir Plancısı",
    "professionEmoji": "🏙️",
    "emoji": "🦊",
    "label": "#821 Bilge Şehir Plancısı",
    "motivation": "Öğrenme azmin hiç tükenmez! Şehir Plancısı hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 821,
    "name": "Kozmik Avukat",
    "category": "Uzaylı",
    "profession": "Avukat",
    "professionEmoji": "⚖️",
    "emoji": "👽",
    "label": "#822 Kozmik Avukat",
    "motivation": "Zorlu sorulardan asla korkmaz! Avukat hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 822,
    "name": "Büyülü Hâkim",
    "category": "Sihirli",
    "profession": "Hâkim",
    "professionEmoji": "🧑‍⚖️",
    "emoji": "🧙",
    "label": "#823 Büyülü Hâkim",
    "motivation": "Detayları gözünden kaçırmaz! Hâkim hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 823,
    "name": "Afacan Savcı",
    "category": "Canavar",
    "profession": "Savcı",
    "professionEmoji": "🏛️",
    "emoji": "👾",
    "label": "#824 Afacan Savcı",
    "motivation": "Hedefin gökyüzü ve ötesi! Savcı hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 824,
    "name": "Kıvrak Noter",
    "category": "Meslekler",
    "profession": "Noter",
    "professionEmoji": "📜",
    "emoji": "📜",
    "label": "#825 Kıvrak Noter",
    "motivation": "Taktikleri hızla kavrar! Noter hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 825,
    "name": "Siber Diplomat Bot",
    "category": "Robot",
    "profession": "Diplomat",
    "professionEmoji": "🌐",
    "emoji": "🤖",
    "label": "#826 Siber Diplomat Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Diplomat hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 826,
    "name": "Şampiyon Polis",
    "category": "Hayvan",
    "profession": "Polis",
    "professionEmoji": "👮",
    "emoji": "🦁",
    "label": "#827 Şampiyon Polis",
    "motivation": "Her denemede yeni bir zirve! Polis hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 827,
    "name": "Kozmik Asker",
    "category": "Uzaylı",
    "profession": "Asker",
    "professionEmoji": "🪖",
    "emoji": "👽",
    "label": "#828 Kozmik Asker",
    "motivation": "Çalışırken enerjisi hiç bitmez! Asker hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 828,
    "name": "Büyülü İtfaiyeci",
    "category": "Sihirli",
    "profession": "İtfaiyeci",
    "professionEmoji": "👨‍🚒",
    "emoji": "🧙",
    "label": "#829 Büyülü İtfaiyeci",
    "motivation": "Kelime hazinesi zengin ve güçlü! İtfaiyeci hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 829,
    "name": "Afacan Pilot",
    "category": "Canavar",
    "profession": "Pilot",
    "professionEmoji": "👨‍✈️",
    "emoji": "👾",
    "label": "#830 Afacan Pilot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Pilot hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 830,
    "name": "Bilge Kabin Memuru",
    "category": "Meslekler",
    "profession": "Kabin Memuru",
    "professionEmoji": "🛫",
    "emoji": "🛫",
    "label": "#831 Bilge Kabin Memuru",
    "motivation": "Öğrenme azmin hiç tükenmez! Kabin Memuru hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 831,
    "name": "Siber Kaptan Bot",
    "category": "Robot",
    "profession": "Kaptan",
    "professionEmoji": "⚓",
    "emoji": "🤖",
    "label": "#832 Siber Kaptan Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! Kaptan hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 832,
    "name": "Usta Makinist",
    "category": "Hayvan",
    "profession": "Makinist",
    "professionEmoji": "🚆",
    "emoji": "🐬",
    "label": "#833 Usta Makinist",
    "motivation": "Detayları gözünden kaçırmaz! Makinist hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 833,
    "name": "Kozmik Şoför",
    "category": "Uzaylı",
    "profession": "Şoför",
    "professionEmoji": "🚌",
    "emoji": "👽",
    "label": "#834 Kozmik Şoför",
    "motivation": "Hedefin gökyüzü ve ötesi! Şoför hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 834,
    "name": "Büyülü Lojistik Uzmanı",
    "category": "Sihirli",
    "profession": "Lojistik Uzmanı",
    "professionEmoji": "📦",
    "emoji": "🧙",
    "label": "#835 Büyülü Lojistik Uzmanı",
    "motivation": "Taktikleri hızla kavrar! Lojistik Uzmanı hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 835,
    "name": "Afacan Hava Trafik Kontrolörü",
    "category": "Canavar",
    "profession": "Hava Trafik Kontrolörü",
    "professionEmoji": "🛰️",
    "emoji": "👾",
    "label": "#836 Afacan Hava Trafik Kontrolörü",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Hava Trafik Kontrolörü hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 836,
    "name": "Şampiyon Aşçı",
    "category": "Meslekler",
    "profession": "Aşçı",
    "professionEmoji": "👨‍🍳",
    "emoji": "👨‍🍳",
    "label": "#837 Şampiyon Aşçı",
    "motivation": "Her denemede yeni bir zirve! Aşçı hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 837,
    "name": "Siber Pastacı Bot",
    "category": "Robot",
    "profession": "Pastacı",
    "professionEmoji": "🎂",
    "emoji": "🤖",
    "label": "#838 Siber Pastacı Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! Pastacı hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 838,
    "name": "Efsane Fırıncı",
    "category": "Hayvan",
    "profession": "Fırıncı",
    "professionEmoji": "🥖",
    "emoji": "🦅",
    "label": "#839 Efsane Fırıncı",
    "motivation": "Kelime hazinesi zengin ve güçlü! Fırıncı hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 839,
    "name": "Kozmik Barista",
    "category": "Uzaylı",
    "profession": "Barista",
    "professionEmoji": "☕",
    "emoji": "👽",
    "label": "#840 Kozmik Barista",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Barista hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 840,
    "name": "Büyülü Garson",
    "category": "Sihirli",
    "profession": "Garson",
    "professionEmoji": "🍽️",
    "emoji": "🧙",
    "label": "#841 Büyülü Garson",
    "motivation": "Öğrenme azmin hiç tükenmez! Garson hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 841,
    "name": "Afacan Çiftçi",
    "category": "Canavar",
    "profession": "Çiftçi",
    "professionEmoji": "🚜",
    "emoji": "👾",
    "label": "#842 Afacan Çiftçi",
    "motivation": "Zorlu sorulardan asla korkmaz! Çiftçi hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 842,
    "name": "Usta Ziraat Mühendisi",
    "category": "Meslekler",
    "profession": "Ziraat Mühendisi",
    "professionEmoji": "🌾",
    "emoji": "🌾",
    "label": "#843 Usta Ziraat Mühendisi",
    "motivation": "Detayları gözünden kaçırmaz! Ziraat Mühendisi hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 843,
    "name": "Siber Bahçıvan Bot",
    "category": "Robot",
    "profession": "Bahçıvan",
    "professionEmoji": "🌻",
    "emoji": "🤖",
    "label": "#844 Siber Bahçıvan Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! Bahçıvan hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 844,
    "name": "Kıvrak Veteriner",
    "category": "Hayvan",
    "profession": "Veteriner",
    "professionEmoji": "🐾",
    "emoji": "🦊",
    "label": "#845 Kıvrak Veteriner",
    "motivation": "Taktikleri hızla kavrar! Veteriner hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 845,
    "name": "Kozmik Diş Hekimi",
    "category": "Uzaylı",
    "profession": "Diş Hekimi",
    "professionEmoji": "🦷",
    "emoji": "👽",
    "label": "#846 Kozmik Diş Hekimi",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Diş Hekimi hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 846,
    "name": "Büyülü Eczacı",
    "category": "Sihirli",
    "profession": "Eczacı",
    "professionEmoji": "💊",
    "emoji": "🧙",
    "label": "#847 Büyülü Eczacı",
    "motivation": "Her denemede yeni bir zirve! Eczacı hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 847,
    "name": "Afacan Psikolog",
    "category": "Canavar",
    "profession": "Psikolog",
    "professionEmoji": "🧠",
    "emoji": "👾",
    "label": "#848 Afacan Psikolog",
    "motivation": "Çalışırken enerjisi hiç bitmez! Psikolog hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 848,
    "name": "Efsane Psikiyatrist",
    "category": "Meslekler",
    "profession": "Psikiyatrist",
    "professionEmoji": "🛋️",
    "emoji": "🛋️",
    "label": "#849 Efsane Psikiyatrist",
    "motivation": "Kelime hazinesi zengin ve güçlü! Psikiyatrist hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 849,
    "name": "Siber Diyetisyen Bot",
    "category": "Robot",
    "profession": "Diyetisyen",
    "professionEmoji": "🥗",
    "emoji": "🤖",
    "label": "#850 Siber Diyetisyen Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Diyetisyen hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 850,
    "name": "Bilge Fizyoterapist",
    "category": "Hayvan",
    "profession": "Fizyoterapist",
    "professionEmoji": "🏃",
    "emoji": "🦁",
    "label": "#851 Bilge Fizyoterapist",
    "motivation": "Öğrenme azmin hiç tükenmez! Fizyoterapist hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 851,
    "name": "Kozmik Radyolog",
    "category": "Uzaylı",
    "profession": "Radyolog",
    "professionEmoji": "🩻",
    "emoji": "👽",
    "label": "#852 Kozmik Radyolog",
    "motivation": "Zorlu sorulardan asla korkmaz! Radyolog hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 852,
    "name": "Büyülü Biyolog",
    "category": "Sihirli",
    "profession": "Biyolog",
    "professionEmoji": "🔬",
    "emoji": "🧙",
    "label": "#853 Büyülü Biyolog",
    "motivation": "Detayları gözünden kaçırmaz! Biyolog hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 853,
    "name": "Afacan Kimyager",
    "category": "Canavar",
    "profession": "Kimyager",
    "professionEmoji": "🧪",
    "emoji": "👾",
    "label": "#854 Afacan Kimyager",
    "motivation": "Hedefin gökyüzü ve ötesi! Kimyager hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 854,
    "name": "Kıvrak Fizikçi",
    "category": "Meslekler",
    "profession": "Fizikçi",
    "professionEmoji": "⚛️",
    "emoji": "⚛️",
    "label": "#855 Kıvrak Fizikçi",
    "motivation": "Taktikleri hızla kavrar! Fizikçi hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 855,
    "name": "Siber Astronom Bot",
    "category": "Robot",
    "profession": "Astronom",
    "professionEmoji": "🔭",
    "emoji": "🤖",
    "label": "#856 Siber Astronom Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Astronom hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 856,
    "name": "Şampiyon Astronot",
    "category": "Hayvan",
    "profession": "Astronot",
    "professionEmoji": "🧑‍🚀",
    "emoji": "🐬",
    "label": "#857 Şampiyon Astronot",
    "motivation": "Her denemede yeni bir zirve! Astronot hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 857,
    "name": "Kozmik Genetik Mühendisi",
    "category": "Uzaylı",
    "profession": "Genetik Mühendisi",
    "professionEmoji": "🧬",
    "emoji": "👽",
    "label": "#858 Kozmik Genetik Mühendisi",
    "motivation": "Çalışırken enerjisi hiç bitmez! Genetik Mühendisi hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 858,
    "name": "Büyülü Jeolog",
    "category": "Sihirli",
    "profession": "Jeolog",
    "professionEmoji": "🌋",
    "emoji": "🧙",
    "label": "#859 Büyülü Jeolog",
    "motivation": "Kelime hazinesi zengin ve güçlü! Jeolog hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 859,
    "name": "Afacan Meteorolog",
    "category": "Canavar",
    "profession": "Meteorolog",
    "professionEmoji": "🌦️",
    "emoji": "👾",
    "label": "#860 Afacan Meteorolog",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Meteorolog hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 860,
    "name": "Bilge Arkeolog",
    "category": "Meslekler",
    "profession": "Arkeolog",
    "professionEmoji": "🏺",
    "emoji": "🏺",
    "label": "#861 Bilge Arkeolog",
    "motivation": "Öğrenme azmin hiç tükenmez! Arkeolog hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 861,
    "name": "Siber Antropolog Bot",
    "category": "Robot",
    "profession": "Antropolog",
    "professionEmoji": "🗿",
    "emoji": "🤖",
    "label": "#862 Siber Antropolog Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! Antropolog hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 862,
    "name": "Usta Tarihçi",
    "category": "Hayvan",
    "profession": "Tarihçi",
    "professionEmoji": "📜",
    "emoji": "🦅",
    "label": "#863 Usta Tarihçi",
    "motivation": "Detayları gözünden kaçırmaz! Tarihçi hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 863,
    "name": "Kozmik Sosyolog",
    "category": "Uzaylı",
    "profession": "Sosyolog",
    "professionEmoji": "👥",
    "emoji": "👽",
    "label": "#864 Kozmik Sosyolog",
    "motivation": "Hedefin gökyüzü ve ötesi! Sosyolog hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 864,
    "name": "Büyülü Felsefeci",
    "category": "Sihirli",
    "profession": "Felsefeci",
    "professionEmoji": "💭",
    "emoji": "🧙",
    "label": "#865 Büyülü Felsefeci",
    "motivation": "Taktikleri hızla kavrar! Felsefeci hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 865,
    "name": "Afacan Dilbilimci",
    "category": "Canavar",
    "profession": "Dilbilimci",
    "professionEmoji": "🗣️",
    "emoji": "👾",
    "label": "#866 Afacan Dilbilimci",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Dilbilimci hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 866,
    "name": "Şampiyon Çevirmen",
    "category": "Meslekler",
    "profession": "Çevirmen",
    "professionEmoji": "🌐",
    "emoji": "🌐",
    "label": "#867 Şampiyon Çevirmen",
    "motivation": "Her denemede yeni bir zirve! Çevirmen hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 867,
    "name": "Siber Mütercim Tercüman Bot",
    "category": "Robot",
    "profession": "Mütercim Tercüman",
    "professionEmoji": "📖",
    "emoji": "🤖",
    "label": "#868 Siber Mütercim Tercüman Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! Mütercim Tercüman hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 868,
    "name": "Efsane Gazeteci",
    "category": "Hayvan",
    "profession": "Gazeteci",
    "professionEmoji": "📰",
    "emoji": "🦊",
    "label": "#869 Efsane Gazeteci",
    "motivation": "Kelime hazinesi zengin ve güçlü! Gazeteci hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 869,
    "name": "Kozmik Muhabir",
    "category": "Uzaylı",
    "profession": "Muhabir",
    "professionEmoji": "🎙️",
    "emoji": "👽",
    "label": "#870 Kozmik Muhabir",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Muhabir hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 870,
    "name": "Büyülü Editör",
    "category": "Sihirli",
    "profession": "Editör",
    "professionEmoji": "✍️",
    "emoji": "🧙",
    "label": "#871 Büyülü Editör",
    "motivation": "Öğrenme azmin hiç tükenmez! Editör hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 871,
    "name": "Afacan Yazar",
    "category": "Canavar",
    "profession": "Yazar",
    "professionEmoji": "🖋️",
    "emoji": "👾",
    "label": "#872 Afacan Yazar",
    "motivation": "Zorlu sorulardan asla korkmaz! Yazar hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 872,
    "name": "Usta Şair",
    "category": "Meslekler",
    "profession": "Şair",
    "professionEmoji": "📜",
    "emoji": "📜",
    "label": "#873 Usta Şair",
    "motivation": "Detayları gözünden kaçırmaz! Şair hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 873,
    "name": "Siber Fotoğrafçı Bot",
    "category": "Robot",
    "profession": "Fotoğrafçı",
    "professionEmoji": "📷",
    "emoji": "🤖",
    "label": "#874 Siber Fotoğrafçı Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! Fotoğrafçı hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 874,
    "name": "Kıvrak Kameraman",
    "category": "Hayvan",
    "profession": "Kameraman",
    "professionEmoji": "🎥",
    "emoji": "🦁",
    "label": "#875 Kıvrak Kameraman",
    "motivation": "Taktikleri hızla kavrar! Kameraman hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 875,
    "name": "Kozmik Yönetmen",
    "category": "Uzaylı",
    "profession": "Yönetmen",
    "professionEmoji": "🎬",
    "emoji": "👽",
    "label": "#876 Kozmik Yönetmen",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Yönetmen hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 876,
    "name": "Büyülü Senarist",
    "category": "Sihirli",
    "profession": "Senarist",
    "professionEmoji": "📑",
    "emoji": "🧙",
    "label": "#877 Büyülü Senarist",
    "motivation": "Her denemede yeni bir zirve! Senarist hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 877,
    "name": "Afacan Oyuncu",
    "category": "Canavar",
    "profession": "Oyuncu",
    "professionEmoji": "🎭",
    "emoji": "👾",
    "label": "#878 Afacan Oyuncu",
    "motivation": "Çalışırken enerjisi hiç bitmez! Oyuncu hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 878,
    "name": "Efsane Ses Sanatçısı",
    "category": "Meslekler",
    "profession": "Ses Sanatçısı",
    "professionEmoji": "🎤",
    "emoji": "🎤",
    "label": "#879 Efsane Ses Sanatçısı",
    "motivation": "Kelime hazinesi zengin ve güçlü! Ses Sanatçısı hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 879,
    "name": "Siber Müzisyen Bot",
    "category": "Robot",
    "profession": "Müzisyen",
    "professionEmoji": "🎵",
    "emoji": "🤖",
    "label": "#880 Siber Müzisyen Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Müzisyen hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 880,
    "name": "Bilge Besteci",
    "category": "Hayvan",
    "profession": "Besteci",
    "professionEmoji": "🎼",
    "emoji": "🐬",
    "label": "#881 Bilge Besteci",
    "motivation": "Öğrenme azmin hiç tükenmez! Besteci hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 881,
    "name": "Kozmik Ressam",
    "category": "Uzaylı",
    "profession": "Ressam",
    "professionEmoji": "🎨",
    "emoji": "👽",
    "label": "#882 Kozmik Ressam",
    "motivation": "Zorlu sorulardan asla korkmaz! Ressam hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 882,
    "name": "Büyülü Heykeltıraş",
    "category": "Sihirli",
    "profession": "Heykeltıraş",
    "professionEmoji": "🗿",
    "emoji": "🧙",
    "label": "#883 Büyülü Heykeltıraş",
    "motivation": "Detayları gözünden kaçırmaz! Heykeltıraş hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 883,
    "name": "Afacan Grafik Tasarımcı",
    "category": "Canavar",
    "profession": "Grafik Tasarımcı",
    "professionEmoji": "🖌️",
    "emoji": "👾",
    "label": "#884 Afacan Grafik Tasarımcı",
    "motivation": "Hedefin gökyüzü ve ötesi! Grafik Tasarımcı hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 884,
    "name": "Kıvrak Moda Tasarımcısı",
    "category": "Meslekler",
    "profession": "Moda Tasarımcısı",
    "professionEmoji": "👗",
    "emoji": "👗",
    "label": "#885 Kıvrak Moda Tasarımcısı",
    "motivation": "Taktikleri hızla kavrar! Moda Tasarımcısı hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 885,
    "name": "Siber Animasyon Sanatçısı Bot",
    "category": "Robot",
    "profession": "Animasyon Sanatçısı",
    "professionEmoji": "🎞️",
    "emoji": "🤖",
    "label": "#886 Siber Animasyon Sanatçısı Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Animasyon Sanatçısı hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 886,
    "name": "Şampiyon Ses Mühendisi",
    "category": "Hayvan",
    "profession": "Ses Mühendisi",
    "professionEmoji": "🎚️",
    "emoji": "🦅",
    "label": "#887 Şampiyon Ses Mühendisi",
    "motivation": "Her denemede yeni bir zirve! Ses Mühendisi hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 887,
    "name": "Kozmik Elektrikçi",
    "category": "Uzaylı",
    "profession": "Elektrikçi",
    "professionEmoji": "💡",
    "emoji": "👽",
    "label": "#888 Kozmik Elektrikçi",
    "motivation": "Çalışırken enerjisi hiç bitmez! Elektrikçi hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 888,
    "name": "Büyülü Tesisatçı",
    "category": "Sihirli",
    "profession": "Tesisatçı",
    "professionEmoji": "🔧",
    "emoji": "🧙",
    "label": "#889 Büyülü Tesisatçı",
    "motivation": "Kelime hazinesi zengin ve güçlü! Tesisatçı hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 889,
    "name": "Afacan Marangoz",
    "category": "Canavar",
    "profession": "Marangoz",
    "professionEmoji": "🪚",
    "emoji": "👾",
    "label": "#890 Afacan Marangoz",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Marangoz hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 890,
    "name": "Bilge Kaynakçı",
    "category": "Meslekler",
    "profession": "Kaynakçı",
    "professionEmoji": "👨‍🏭",
    "emoji": "👨‍🏭",
    "label": "#891 Bilge Kaynakçı",
    "motivation": "Öğrenme azmin hiç tükenmez! Kaynakçı hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 891,
    "name": "Siber Oto Tamircisi Bot",
    "category": "Robot",
    "profession": "Oto Tamircisi",
    "professionEmoji": "🚗",
    "emoji": "🤖",
    "label": "#892 Siber Oto Tamircisi Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! Oto Tamircisi hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 892,
    "name": "Usta İnşaat Ustası",
    "category": "Hayvan",
    "profession": "İnşaat Ustası",
    "professionEmoji": "🧱",
    "emoji": "🦊",
    "label": "#893 Usta İnşaat Ustası",
    "motivation": "Detayları gözünden kaçırmaz! İnşaat Ustası hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 893,
    "name": "Kozmik Boyacı",
    "category": "Uzaylı",
    "profession": "Boyacı",
    "professionEmoji": "🖌️",
    "emoji": "👽",
    "label": "#894 Kozmik Boyacı",
    "motivation": "Hedefin gökyüzü ve ötesi! Boyacı hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 894,
    "name": "Büyülü Çilingir",
    "category": "Sihirli",
    "profession": "Çilingir",
    "professionEmoji": "🗝️",
    "emoji": "🧙",
    "label": "#895 Büyülü Çilingir",
    "motivation": "Taktikleri hızla kavrar! Çilingir hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 895,
    "name": "Afacan Terzi",
    "category": "Canavar",
    "profession": "Terzi",
    "professionEmoji": "🧵",
    "emoji": "👾",
    "label": "#896 Afacan Terzi",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Terzi hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 896,
    "name": "Şampiyon Ayakkabıcı",
    "category": "Meslekler",
    "profession": "Ayakkabıcı",
    "professionEmoji": "👞",
    "emoji": "👞",
    "label": "#897 Şampiyon Ayakkabıcı",
    "motivation": "Her denemede yeni bir zirve! Ayakkabıcı hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 897,
    "name": "Siber Saatçi Bot",
    "category": "Robot",
    "profession": "Saatçi",
    "professionEmoji": "⌚",
    "emoji": "🤖",
    "label": "#898 Siber Saatçi Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! Saatçi hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 898,
    "name": "Efsane Kuyumcu",
    "category": "Hayvan",
    "profession": "Kuyumcu",
    "professionEmoji": "💍",
    "emoji": "🦁",
    "label": "#899 Efsane Kuyumcu",
    "motivation": "Kelime hazinesi zengin ve güçlü! Kuyumcu hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 899,
    "name": "Kozmik Mali Müşavir",
    "category": "Uzaylı",
    "profession": "Mali Müşavir",
    "professionEmoji": "📈",
    "emoji": "👽",
    "label": "#900 Kozmik Mali Müşavir",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Mali Müşavir hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 900,
    "name": "Büyülü Muhasebeci",
    "category": "Sihirli",
    "profession": "Muhasebeci",
    "professionEmoji": "🧾",
    "emoji": "🧙",
    "label": "#901 Büyülü Muhasebeci",
    "motivation": "Öğrenme azmin hiç tükenmez! Muhasebeci hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 901,
    "name": "Afacan İktisatçı",
    "category": "Canavar",
    "profession": "İktisatçı",
    "professionEmoji": "💹",
    "emoji": "👾",
    "label": "#902 Afacan İktisatçı",
    "motivation": "Zorlu sorulardan asla korkmaz! İktisatçı hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 902,
    "name": "Usta Pazarlama Uzmanı",
    "category": "Meslekler",
    "profession": "Pazarlama Uzmanı",
    "professionEmoji": "📣",
    "emoji": "📣",
    "label": "#903 Usta Pazarlama Uzmanı",
    "motivation": "Detayları gözünden kaçırmaz! Pazarlama Uzmanı hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 903,
    "name": "Siber İnsan Kaynakları Uzmanı Bot",
    "category": "Robot",
    "profession": "İnsan Kaynakları Uzmanı",
    "professionEmoji": "🤝",
    "emoji": "🤖",
    "label": "#904 Siber İnsan Kaynakları Uzmanı Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! İnsan Kaynakları Uzmanı hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 904,
    "name": "Kıvrak Bankacı",
    "category": "Hayvan",
    "profession": "Bankacı",
    "professionEmoji": "🏦",
    "emoji": "🐬",
    "label": "#905 Kıvrak Bankacı",
    "motivation": "Taktikleri hızla kavrar! Bankacı hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 905,
    "name": "Kozmik Girişimci",
    "category": "Uzaylı",
    "profession": "Girişimci",
    "professionEmoji": "🚀",
    "emoji": "👽",
    "label": "#906 Kozmik Girişimci",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Girişimci hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 906,
    "name": "Büyülü Proje Yöneticisi",
    "category": "Sihirli",
    "profession": "Proje Yöneticisi",
    "professionEmoji": "📋",
    "emoji": "🧙",
    "label": "#907 Büyülü Proje Yöneticisi",
    "motivation": "Her denemede yeni bir zirve! Proje Yöneticisi hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 907,
    "name": "Afacan Ürün Yöneticisi",
    "category": "Canavar",
    "profession": "Ürün Yöneticisi",
    "professionEmoji": "📱",
    "emoji": "👾",
    "label": "#908 Afacan Ürün Yöneticisi",
    "motivation": "Çalışırken enerjisi hiç bitmez! Ürün Yöneticisi hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 908,
    "name": "Efsane Deniz Biyoloğu",
    "category": "Meslekler",
    "profession": "Deniz Biyoloğu",
    "professionEmoji": "🐬",
    "emoji": "🐬",
    "label": "#909 Efsane Deniz Biyoloğu",
    "motivation": "Kelime hazinesi zengin ve güçlü! Deniz Biyoloğu hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 909,
    "name": "Siber Ekolojist Bot",
    "category": "Robot",
    "profession": "Ekolojist",
    "professionEmoji": "🌿",
    "emoji": "🤖",
    "label": "#910 Siber Ekolojist Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Ekolojist hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 910,
    "name": "Bilge Kütüphaneci",
    "category": "Hayvan",
    "profession": "Kütüphaneci",
    "professionEmoji": "📖",
    "emoji": "🦅",
    "label": "#911 Bilge Kütüphaneci",
    "motivation": "Öğrenme azmin hiç tükenmez! Kütüphaneci hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 911,
    "name": "Kozmik Arşivci",
    "category": "Uzaylı",
    "profession": "Arşivci",
    "professionEmoji": "🗃️",
    "emoji": "👽",
    "label": "#912 Kozmik Arşivci",
    "motivation": "Zorlu sorulardan asla korkmaz! Arşivci hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 912,
    "name": "Büyülü Turist Rehberi",
    "category": "Sihirli",
    "profession": "Turist Rehberi",
    "professionEmoji": "🗺️",
    "emoji": "🧙",
    "label": "#913 Büyülü Turist Rehberi",
    "motivation": "Detayları gözünden kaçırmaz! Turist Rehberi hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 913,
    "name": "Afacan Spor Antrenörü",
    "category": "Canavar",
    "profession": "Spor Antrenörü",
    "professionEmoji": "🏅",
    "emoji": "👾",
    "label": "#914 Afacan Spor Antrenörü",
    "motivation": "Hedefin gökyüzü ve ötesi! Spor Antrenörü hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 914,
    "name": "Kıvrak Doktor",
    "category": "Meslekler",
    "profession": "Doktor",
    "professionEmoji": "🩺",
    "emoji": "🩺",
    "label": "#915 Kıvrak Doktor",
    "motivation": "Taktikleri hızla kavrar! Doktor hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 915,
    "name": "Siber Hemşire Bot",
    "category": "Robot",
    "profession": "Hemşire",
    "professionEmoji": "💉",
    "emoji": "🤖",
    "label": "#916 Siber Hemşire Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Hemşire hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 916,
    "name": "Şampiyon Öğretmen",
    "category": "Hayvan",
    "profession": "Öğretmen",
    "professionEmoji": "📚",
    "emoji": "🦊",
    "label": "#917 Şampiyon Öğretmen",
    "motivation": "Her denemede yeni bir zirve! Öğretmen hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 917,
    "name": "Kozmik Akademisyen",
    "category": "Uzaylı",
    "profession": "Akademisyen",
    "professionEmoji": "🎓",
    "emoji": "👽",
    "label": "#918 Kozmik Akademisyen",
    "motivation": "Çalışırken enerjisi hiç bitmez! Akademisyen hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 918,
    "name": "Büyülü Yazılımcı",
    "category": "Sihirli",
    "profession": "Yazılımcı",
    "professionEmoji": "💻",
    "emoji": "🧙",
    "label": "#919 Büyülü Yazılımcı",
    "motivation": "Kelime hazinesi zengin ve güçlü! Yazılımcı hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 919,
    "name": "Afacan Veri Bilimci",
    "category": "Canavar",
    "profession": "Veri Bilimci",
    "professionEmoji": "📊",
    "emoji": "👾",
    "label": "#920 Afacan Veri Bilimci",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Veri Bilimci hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 920,
    "name": "Bilge Bilgisayar Mühendisi",
    "category": "Meslekler",
    "profession": "Bilgisayar Mühendisi",
    "professionEmoji": "🖥️",
    "emoji": "🖥️",
    "label": "#921 Bilge Bilgisayar Mühendisi",
    "motivation": "Öğrenme azmin hiç tükenmez! Bilgisayar Mühendisi hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 921,
    "name": "Siber Yapay Zeka Uzmanı Bot",
    "category": "Robot",
    "profession": "Yapay Zeka Uzmanı",
    "professionEmoji": "🤖",
    "emoji": "🤖",
    "label": "#922 Siber Yapay Zeka Uzmanı Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! Yapay Zeka Uzmanı hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 922,
    "name": "Usta Siber Güvenlik Uzmanı",
    "category": "Hayvan",
    "profession": "Siber Güvenlik Uzmanı",
    "professionEmoji": "🛡️",
    "emoji": "🦁",
    "label": "#923 Usta Siber Güvenlik Uzmanı",
    "motivation": "Detayları gözünden kaçırmaz! Siber Güvenlik Uzmanı hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 923,
    "name": "Kozmik Elektrik Mühendisi",
    "category": "Uzaylı",
    "profession": "Elektrik Mühendisi",
    "professionEmoji": "⚡",
    "emoji": "👽",
    "label": "#924 Kozmik Elektrik Mühendisi",
    "motivation": "Hedefin gökyüzü ve ötesi! Elektrik Mühendisi hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 924,
    "name": "Büyülü Makine Mühendisi",
    "category": "Sihirli",
    "profession": "Makine Mühendisi",
    "professionEmoji": "⚙️",
    "emoji": "🧙",
    "label": "#925 Büyülü Makine Mühendisi",
    "motivation": "Taktikleri hızla kavrar! Makine Mühendisi hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 925,
    "name": "Afacan İnşaat Mühendisi",
    "category": "Canavar",
    "profession": "İnşaat Mühendisi",
    "professionEmoji": "🏗️",
    "emoji": "👾",
    "label": "#926 Afacan İnşaat Mühendisi",
    "motivation": "180 dakika boyunca dikkati dağılmaz! İnşaat Mühendisi hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 926,
    "name": "Şampiyon Mimar",
    "category": "Meslekler",
    "profession": "Mimar",
    "professionEmoji": "📐",
    "emoji": "📐",
    "label": "#927 Şampiyon Mimar",
    "motivation": "Her denemede yeni bir zirve! Mimar hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 927,
    "name": "Siber İç Mimar Bot",
    "category": "Robot",
    "profession": "İç Mimar",
    "professionEmoji": "🛋️",
    "emoji": "🤖",
    "label": "#928 Siber İç Mimar Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! İç Mimar hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 928,
    "name": "Efsane Şehir Plancısı",
    "category": "Hayvan",
    "profession": "Şehir Plancısı",
    "professionEmoji": "🏙️",
    "emoji": "🐬",
    "label": "#929 Efsane Şehir Plancısı",
    "motivation": "Kelime hazinesi zengin ve güçlü! Şehir Plancısı hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 929,
    "name": "Kozmik Avukat",
    "category": "Uzaylı",
    "profession": "Avukat",
    "professionEmoji": "⚖️",
    "emoji": "👽",
    "label": "#930 Kozmik Avukat",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Avukat hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 930,
    "name": "Büyülü Hâkim",
    "category": "Sihirli",
    "profession": "Hâkim",
    "professionEmoji": "🧑‍⚖️",
    "emoji": "🧙",
    "label": "#931 Büyülü Hâkim",
    "motivation": "Öğrenme azmin hiç tükenmez! Hâkim hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 931,
    "name": "Afacan Savcı",
    "category": "Canavar",
    "profession": "Savcı",
    "professionEmoji": "🏛️",
    "emoji": "👾",
    "label": "#932 Afacan Savcı",
    "motivation": "Zorlu sorulardan asla korkmaz! Savcı hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 932,
    "name": "Usta Noter",
    "category": "Meslekler",
    "profession": "Noter",
    "professionEmoji": "📜",
    "emoji": "📜",
    "label": "#933 Usta Noter",
    "motivation": "Detayları gözünden kaçırmaz! Noter hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 933,
    "name": "Siber Diplomat Bot",
    "category": "Robot",
    "profession": "Diplomat",
    "professionEmoji": "🌐",
    "emoji": "🤖",
    "label": "#934 Siber Diplomat Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! Diplomat hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 934,
    "name": "Kıvrak Polis",
    "category": "Hayvan",
    "profession": "Polis",
    "professionEmoji": "👮",
    "emoji": "🦅",
    "label": "#935 Kıvrak Polis",
    "motivation": "Taktikleri hızla kavrar! Polis hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 935,
    "name": "Kozmik Asker",
    "category": "Uzaylı",
    "profession": "Asker",
    "professionEmoji": "🪖",
    "emoji": "👽",
    "label": "#936 Kozmik Asker",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Asker hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 936,
    "name": "Büyülü İtfaiyeci",
    "category": "Sihirli",
    "profession": "İtfaiyeci",
    "professionEmoji": "👨‍🚒",
    "emoji": "🧙",
    "label": "#937 Büyülü İtfaiyeci",
    "motivation": "Her denemede yeni bir zirve! İtfaiyeci hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 937,
    "name": "Afacan Pilot",
    "category": "Canavar",
    "profession": "Pilot",
    "professionEmoji": "👨‍✈️",
    "emoji": "👾",
    "label": "#938 Afacan Pilot",
    "motivation": "Çalışırken enerjisi hiç bitmez! Pilot hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 938,
    "name": "Efsane Kabin Memuru",
    "category": "Meslekler",
    "profession": "Kabin Memuru",
    "professionEmoji": "🛫",
    "emoji": "🛫",
    "label": "#939 Efsane Kabin Memuru",
    "motivation": "Kelime hazinesi zengin ve güçlü! Kabin Memuru hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 939,
    "name": "Siber Kaptan Bot",
    "category": "Robot",
    "profession": "Kaptan",
    "professionEmoji": "⚓",
    "emoji": "🤖",
    "label": "#940 Siber Kaptan Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Kaptan hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 940,
    "name": "Bilge Makinist",
    "category": "Hayvan",
    "profession": "Makinist",
    "professionEmoji": "🚆",
    "emoji": "🦊",
    "label": "#941 Bilge Makinist",
    "motivation": "Öğrenme azmin hiç tükenmez! Makinist hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 941,
    "name": "Kozmik Şoför",
    "category": "Uzaylı",
    "profession": "Şoför",
    "professionEmoji": "🚌",
    "emoji": "👽",
    "label": "#942 Kozmik Şoför",
    "motivation": "Zorlu sorulardan asla korkmaz! Şoför hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 942,
    "name": "Büyülü Lojistik Uzmanı",
    "category": "Sihirli",
    "profession": "Lojistik Uzmanı",
    "professionEmoji": "📦",
    "emoji": "🧙",
    "label": "#943 Büyülü Lojistik Uzmanı",
    "motivation": "Detayları gözünden kaçırmaz! Lojistik Uzmanı hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 943,
    "name": "Afacan Hava Trafik Kontrolörü",
    "category": "Canavar",
    "profession": "Hava Trafik Kontrolörü",
    "professionEmoji": "🛰️",
    "emoji": "👾",
    "label": "#944 Afacan Hava Trafik Kontrolörü",
    "motivation": "Hedefin gökyüzü ve ötesi! Hava Trafik Kontrolörü hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 944,
    "name": "Kıvrak Aşçı",
    "category": "Meslekler",
    "profession": "Aşçı",
    "professionEmoji": "👨‍🍳",
    "emoji": "👨‍🍳",
    "label": "#945 Kıvrak Aşçı",
    "motivation": "Taktikleri hızla kavrar! Aşçı hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 945,
    "name": "Siber Pastacı Bot",
    "category": "Robot",
    "profession": "Pastacı",
    "professionEmoji": "🎂",
    "emoji": "🤖",
    "label": "#946 Siber Pastacı Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Pastacı hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 946,
    "name": "Şampiyon Fırıncı",
    "category": "Hayvan",
    "profession": "Fırıncı",
    "professionEmoji": "🥖",
    "emoji": "🦁",
    "label": "#947 Şampiyon Fırıncı",
    "motivation": "Her denemede yeni bir zirve! Fırıncı hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 947,
    "name": "Kozmik Barista",
    "category": "Uzaylı",
    "profession": "Barista",
    "professionEmoji": "☕",
    "emoji": "👽",
    "label": "#948 Kozmik Barista",
    "motivation": "Çalışırken enerjisi hiç bitmez! Barista hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 948,
    "name": "Büyülü Garson",
    "category": "Sihirli",
    "profession": "Garson",
    "professionEmoji": "🍽️",
    "emoji": "🧙",
    "label": "#949 Büyülü Garson",
    "motivation": "Kelime hazinesi zengin ve güçlü! Garson hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 949,
    "name": "Afacan Çiftçi",
    "category": "Canavar",
    "profession": "Çiftçi",
    "professionEmoji": "🚜",
    "emoji": "👾",
    "label": "#950 Afacan Çiftçi",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Çiftçi hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 950,
    "name": "Bilge Ziraat Mühendisi",
    "category": "Meslekler",
    "profession": "Ziraat Mühendisi",
    "professionEmoji": "🌾",
    "emoji": "🌾",
    "label": "#951 Bilge Ziraat Mühendisi",
    "motivation": "Öğrenme azmin hiç tükenmez! Ziraat Mühendisi hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 951,
    "name": "Siber Bahçıvan Bot",
    "category": "Robot",
    "profession": "Bahçıvan",
    "professionEmoji": "🌻",
    "emoji": "🤖",
    "label": "#952 Siber Bahçıvan Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! Bahçıvan hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 952,
    "name": "Usta Veteriner",
    "category": "Hayvan",
    "profession": "Veteriner",
    "professionEmoji": "🐾",
    "emoji": "🐬",
    "label": "#953 Usta Veteriner",
    "motivation": "Detayları gözünden kaçırmaz! Veteriner hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 953,
    "name": "Kozmik Diş Hekimi",
    "category": "Uzaylı",
    "profession": "Diş Hekimi",
    "professionEmoji": "🦷",
    "emoji": "👽",
    "label": "#954 Kozmik Diş Hekimi",
    "motivation": "Hedefin gökyüzü ve ötesi! Diş Hekimi hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 954,
    "name": "Büyülü Eczacı",
    "category": "Sihirli",
    "profession": "Eczacı",
    "professionEmoji": "💊",
    "emoji": "🧙",
    "label": "#955 Büyülü Eczacı",
    "motivation": "Taktikleri hızla kavrar! Eczacı hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 955,
    "name": "Afacan Psikolog",
    "category": "Canavar",
    "profession": "Psikolog",
    "professionEmoji": "🧠",
    "emoji": "👾",
    "label": "#956 Afacan Psikolog",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Psikolog hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 956,
    "name": "Şampiyon Psikiyatrist",
    "category": "Meslekler",
    "profession": "Psikiyatrist",
    "professionEmoji": "🛋️",
    "emoji": "🛋️",
    "label": "#957 Şampiyon Psikiyatrist",
    "motivation": "Her denemede yeni bir zirve! Psikiyatrist hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 957,
    "name": "Siber Diyetisyen Bot",
    "category": "Robot",
    "profession": "Diyetisyen",
    "professionEmoji": "🥗",
    "emoji": "🤖",
    "label": "#958 Siber Diyetisyen Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! Diyetisyen hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 958,
    "name": "Efsane Fizyoterapist",
    "category": "Hayvan",
    "profession": "Fizyoterapist",
    "professionEmoji": "🏃",
    "emoji": "🦅",
    "label": "#959 Efsane Fizyoterapist",
    "motivation": "Kelime hazinesi zengin ve güçlü! Fizyoterapist hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 959,
    "name": "Kozmik Radyolog",
    "category": "Uzaylı",
    "profession": "Radyolog",
    "professionEmoji": "🩻",
    "emoji": "👽",
    "label": "#960 Kozmik Radyolog",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Radyolog hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 960,
    "name": "Büyülü Biyolog",
    "category": "Sihirli",
    "profession": "Biyolog",
    "professionEmoji": "🔬",
    "emoji": "🧙",
    "label": "#961 Büyülü Biyolog",
    "motivation": "Öğrenme azmin hiç tükenmez! Biyolog hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 961,
    "name": "Afacan Kimyager",
    "category": "Canavar",
    "profession": "Kimyager",
    "professionEmoji": "🧪",
    "emoji": "👾",
    "label": "#962 Afacan Kimyager",
    "motivation": "Zorlu sorulardan asla korkmaz! Kimyager hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 962,
    "name": "Usta Fizikçi",
    "category": "Meslekler",
    "profession": "Fizikçi",
    "professionEmoji": "⚛️",
    "emoji": "⚛️",
    "label": "#963 Usta Fizikçi",
    "motivation": "Detayları gözünden kaçırmaz! Fizikçi hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 963,
    "name": "Siber Astronom Bot",
    "category": "Robot",
    "profession": "Astronom",
    "professionEmoji": "🔭",
    "emoji": "🤖",
    "label": "#964 Siber Astronom Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! Astronom hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 964,
    "name": "Kıvrak Astronot",
    "category": "Hayvan",
    "profession": "Astronot",
    "professionEmoji": "🧑‍🚀",
    "emoji": "🦊",
    "label": "#965 Kıvrak Astronot",
    "motivation": "Taktikleri hızla kavrar! Astronot hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 965,
    "name": "Kozmik Genetik Mühendisi",
    "category": "Uzaylı",
    "profession": "Genetik Mühendisi",
    "professionEmoji": "🧬",
    "emoji": "👽",
    "label": "#966 Kozmik Genetik Mühendisi",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Genetik Mühendisi hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 966,
    "name": "Büyülü Jeolog",
    "category": "Sihirli",
    "profession": "Jeolog",
    "professionEmoji": "🌋",
    "emoji": "🧙",
    "label": "#967 Büyülü Jeolog",
    "motivation": "Her denemede yeni bir zirve! Jeolog hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 967,
    "name": "Afacan Meteorolog",
    "category": "Canavar",
    "profession": "Meteorolog",
    "professionEmoji": "🌦️",
    "emoji": "👾",
    "label": "#968 Afacan Meteorolog",
    "motivation": "Çalışırken enerjisi hiç bitmez! Meteorolog hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 968,
    "name": "Efsane Arkeolog",
    "category": "Meslekler",
    "profession": "Arkeolog",
    "professionEmoji": "🏺",
    "emoji": "🏺",
    "label": "#969 Efsane Arkeolog",
    "motivation": "Kelime hazinesi zengin ve güçlü! Arkeolog hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 969,
    "name": "Siber Antropolog Bot",
    "category": "Robot",
    "profession": "Antropolog",
    "professionEmoji": "🗿",
    "emoji": "🤖",
    "label": "#970 Siber Antropolog Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Antropolog hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 970,
    "name": "Bilge Tarihçi",
    "category": "Hayvan",
    "profession": "Tarihçi",
    "professionEmoji": "📜",
    "emoji": "🦁",
    "label": "#971 Bilge Tarihçi",
    "motivation": "Öğrenme azmin hiç tükenmez! Tarihçi hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 971,
    "name": "Kozmik Sosyolog",
    "category": "Uzaylı",
    "profession": "Sosyolog",
    "professionEmoji": "👥",
    "emoji": "👽",
    "label": "#972 Kozmik Sosyolog",
    "motivation": "Zorlu sorulardan asla korkmaz! Sosyolog hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 972,
    "name": "Büyülü Felsefeci",
    "category": "Sihirli",
    "profession": "Felsefeci",
    "professionEmoji": "💭",
    "emoji": "🧙",
    "label": "#973 Büyülü Felsefeci",
    "motivation": "Detayları gözünden kaçırmaz! Felsefeci hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 973,
    "name": "Afacan Dilbilimci",
    "category": "Canavar",
    "profession": "Dilbilimci",
    "professionEmoji": "🗣️",
    "emoji": "👾",
    "label": "#974 Afacan Dilbilimci",
    "motivation": "Hedefin gökyüzü ve ötesi! Dilbilimci hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 974,
    "name": "Kıvrak Çevirmen",
    "category": "Meslekler",
    "profession": "Çevirmen",
    "professionEmoji": "🌐",
    "emoji": "🌐",
    "label": "#975 Kıvrak Çevirmen",
    "motivation": "Taktikleri hızla kavrar! Çevirmen hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 975,
    "name": "Siber Mütercim Tercüman Bot",
    "category": "Robot",
    "profession": "Mütercim Tercüman",
    "professionEmoji": "📖",
    "emoji": "🤖",
    "label": "#976 Siber Mütercim Tercüman Bot",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Mütercim Tercüman hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 976,
    "name": "Şampiyon Gazeteci",
    "category": "Hayvan",
    "profession": "Gazeteci",
    "professionEmoji": "📰",
    "emoji": "🐬",
    "label": "#977 Şampiyon Gazeteci",
    "motivation": "Her denemede yeni bir zirve! Gazeteci hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 977,
    "name": "Kozmik Muhabir",
    "category": "Uzaylı",
    "profession": "Muhabir",
    "professionEmoji": "🎙️",
    "emoji": "👽",
    "label": "#978 Kozmik Muhabir",
    "motivation": "Çalışırken enerjisi hiç bitmez! Muhabir hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 978,
    "name": "Büyülü Editör",
    "category": "Sihirli",
    "profession": "Editör",
    "professionEmoji": "✍️",
    "emoji": "🧙",
    "label": "#979 Büyülü Editör",
    "motivation": "Kelime hazinesi zengin ve güçlü! Editör hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 979,
    "name": "Afacan Yazar",
    "category": "Canavar",
    "profession": "Yazar",
    "professionEmoji": "🖋️",
    "emoji": "👾",
    "label": "#980 Afacan Yazar",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Yazar hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 980,
    "name": "Bilge Şair",
    "category": "Meslekler",
    "profession": "Şair",
    "professionEmoji": "📜",
    "emoji": "📜",
    "label": "#981 Bilge Şair",
    "motivation": "Öğrenme azmin hiç tükenmez! Şair hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 981,
    "name": "Siber Fotoğrafçı Bot",
    "category": "Robot",
    "profession": "Fotoğrafçı",
    "professionEmoji": "📷",
    "emoji": "🤖",
    "label": "#982 Siber Fotoğrafçı Bot",
    "motivation": "Zorlu sorulardan asla korkmaz! Fotoğrafçı hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 982,
    "name": "Usta Kameraman",
    "category": "Hayvan",
    "profession": "Kameraman",
    "professionEmoji": "🎥",
    "emoji": "🦅",
    "label": "#983 Usta Kameraman",
    "motivation": "Detayları gözünden kaçırmaz! Kameraman hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 983,
    "name": "Kozmik Yönetmen",
    "category": "Uzaylı",
    "profession": "Yönetmen",
    "professionEmoji": "🎬",
    "emoji": "👽",
    "label": "#984 Kozmik Yönetmen",
    "motivation": "Hedefin gökyüzü ve ötesi! Yönetmen hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 984,
    "name": "Büyülü Senarist",
    "category": "Sihirli",
    "profession": "Senarist",
    "professionEmoji": "📑",
    "emoji": "🧙",
    "label": "#985 Büyülü Senarist",
    "motivation": "Taktikleri hızla kavrar! Senarist hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 985,
    "name": "Afacan Oyuncu",
    "category": "Canavar",
    "profession": "Oyuncu",
    "professionEmoji": "🎭",
    "emoji": "👾",
    "label": "#986 Afacan Oyuncu",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Oyuncu hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 986,
    "name": "Şampiyon Ses Sanatçısı",
    "category": "Meslekler",
    "profession": "Ses Sanatçısı",
    "professionEmoji": "🎤",
    "emoji": "🎤",
    "label": "#987 Şampiyon Ses Sanatçısı",
    "motivation": "Her denemede yeni bir zirve! Ses Sanatçısı hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 987,
    "name": "Siber Müzisyen Bot",
    "category": "Robot",
    "profession": "Müzisyen",
    "professionEmoji": "🎵",
    "emoji": "🤖",
    "label": "#988 Siber Müzisyen Bot",
    "motivation": "Çalışırken enerjisi hiç bitmez! Müzisyen hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 988,
    "name": "Efsane Besteci",
    "category": "Hayvan",
    "profession": "Besteci",
    "professionEmoji": "🎼",
    "emoji": "🦊",
    "label": "#989 Efsane Besteci",
    "motivation": "Kelime hazinesi zengin ve güçlü! Besteci hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 989,
    "name": "Kozmik Ressam",
    "category": "Uzaylı",
    "profession": "Ressam",
    "professionEmoji": "🎨",
    "emoji": "👽",
    "label": "#990 Kozmik Ressam",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Ressam hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 990,
    "name": "Büyülü Heykeltıraş",
    "category": "Sihirli",
    "profession": "Heykeltıraş",
    "professionEmoji": "🗿",
    "emoji": "🧙",
    "label": "#991 Büyülü Heykeltıraş",
    "motivation": "Öğrenme azmin hiç tükenmez! Heykeltıraş hedefin için yola devam!",
    "theme": "from-blue-500 to-indigo-600"
  },
  {
    "id": 991,
    "name": "Afacan Grafik Tasarımcı",
    "category": "Canavar",
    "profession": "Grafik Tasarımcı",
    "professionEmoji": "🖌️",
    "emoji": "👾",
    "label": "#992 Afacan Grafik Tasarımcı",
    "motivation": "Zorlu sorulardan asla korkmaz! Grafik Tasarımcı hedefin için yola devam!",
    "theme": "from-red-500 to-amber-600"
  },
  {
    "id": 992,
    "name": "Usta Moda Tasarımcısı",
    "category": "Meslekler",
    "profession": "Moda Tasarımcısı",
    "professionEmoji": "👗",
    "emoji": "👗",
    "label": "#993 Usta Moda Tasarımcısı",
    "motivation": "Detayları gözünden kaçırmaz! Moda Tasarımcısı hedefin için yola devam!",
    "theme": "from-emerald-500 to-teal-600"
  },
  {
    "id": 993,
    "name": "Siber Animasyon Sanatçısı Bot",
    "category": "Robot",
    "profession": "Animasyon Sanatçısı",
    "professionEmoji": "🎞️",
    "emoji": "🤖",
    "label": "#994 Siber Animasyon Sanatçısı Bot",
    "motivation": "Hedefin gökyüzü ve ötesi! Animasyon Sanatçısı hedefin için yola devam!",
    "theme": "from-purple-500 to-pink-600"
  },
  {
    "id": 994,
    "name": "Kıvrak Ses Mühendisi",
    "category": "Hayvan",
    "profession": "Ses Mühendisi",
    "professionEmoji": "🎚️",
    "emoji": "🦁",
    "label": "#995 Kıvrak Ses Mühendisi",
    "motivation": "Taktikleri hızla kavrar! Ses Mühendisi hedefin için yola devam!",
    "theme": "from-cyan-500 to-blue-600"
  },
  {
    "id": 995,
    "name": "Kozmik Elektrikçi",
    "category": "Uzaylı",
    "profession": "Elektrikçi",
    "professionEmoji": "💡",
    "emoji": "👽",
    "label": "#996 Kozmik Elektrikçi",
    "motivation": "180 dakika boyunca dikkati dağılmaz! Elektrikçi hedefin için yola devam!",
    "theme": "from-amber-500 to-orange-600"
  },
  {
    "id": 996,
    "name": "Büyülü Tesisatçı",
    "category": "Sihirli",
    "profession": "Tesisatçı",
    "professionEmoji": "🔧",
    "emoji": "🧙",
    "label": "#997 Büyülü Tesisatçı",
    "motivation": "Her denemede yeni bir zirve! Tesisatçı hedefin için yola devam!",
    "theme": "from-pink-500 to-rose-600"
  },
  {
    "id": 997,
    "name": "Afacan Marangoz",
    "category": "Canavar",
    "profession": "Marangoz",
    "professionEmoji": "🪚",
    "emoji": "👾",
    "label": "#998 Afacan Marangoz",
    "motivation": "Çalışırken enerjisi hiç bitmez! Marangoz hedefin için yola devam!",
    "theme": "from-teal-500 to-emerald-600"
  },
  {
    "id": 998,
    "name": "Efsane Kaynakçı",
    "category": "Meslekler",
    "profession": "Kaynakçı",
    "professionEmoji": "👨‍🏭",
    "emoji": "👨‍🏭",
    "label": "#999 Efsane Kaynakçı",
    "motivation": "Kelime hazinesi zengin ve güçlü! Kaynakçı hedefin için yola devam!",
    "theme": "from-violet-500 to-purple-700"
  },
  {
    "id": 999,
    "name": "Siber Oto Tamircisi Bot",
    "category": "Robot",
    "profession": "Oto Tamircisi",
    "professionEmoji": "🚗",
    "emoji": "🤖",
    "label": "#1000 Siber Oto Tamircisi Bot",
    "motivation": "Gramer kurallarını pırıl pırıl çözer! Oto Tamircisi hedefin için yola devam!",
    "theme": "from-yellow-400 to-amber-600"
  }
];

export const AVATAR_CATEGORIES = [
  "Hepsi",
  "Tümü",
  "ClassDojo Canavarı",
  "Canavarlar",
  "Canavar",
  "Meslekler",
  "Robot",
  "Robotlar",
  "Hayvan",
  "Hayvanlar",
  "Uzaylı",
  "Uzaylılar",
  "Sihirli",
];

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

export const LEGACY_AVATARS: AvatarOption[] = AVATARS.map((a) => ({
  ...a,
  motto: a.motivation,
  gradient: a.theme,
}));

// Canavar renk paletleri (10 canlı gradyan)
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
];

function generateMonsterSvg(idx: number): string {
  const p = MONSTER_PALETTES[idx % MONSTER_PALETTES.length];
  const shapeType = idx % 5;
  const eyeType = (idx >> 1) % 3;
  const mouthType = (idx >> 2) % 3;
  const hornType = (idx >> 3) % 4;

  let horns = "";
  if (hornType === 0) {
    // Sevimli çift boynuz
    horns = `<path d="M 32 38 Q 22 20 34 22 Z" fill="${p.c2}" /><path d="M 68 38 Q 78 20 66 22 Z" fill="${p.c2}" />`;
  } else if (hornType === 1) {
    // Parıldayan anten
    horns = `<line x1="50" y1="34" x2="50" y2="18" stroke="${p.c1}" stroke-width="3" stroke-linecap="round"/><circle cx="50" cy="16" r="6" fill="#facc15" />`;
  } else if (hornType === 2) {
    // Yumuşak ayı/kedi kulakları
    horns = `<circle cx="32" cy="32" r="10" fill="${p.c1}" /><circle cx="32" cy="32" r="5" fill="#fbcfe8" /><circle cx="68" cy="32" r="10" fill="${p.c1}" /><circle cx="68" cy="32" r="5" fill="#fbcfe8" />`;
  } else {
    // Başta yeşil filiz
    horns = `<path d="M 50 32 Q 58 22 50 16 Q 42 22 50 32" fill="#4ade80" />`;
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
  } else {
    // Pofuduk bulut canavar
    body = `<circle cx="38" cy="56" r="18" fill="${p.body}" /><circle cx="62" cy="56" r="18" fill="${p.body}" /><circle cx="50" cy="50" r="21" fill="${p.body}" />`;
  }

  let eyes = "";
  if (eyeType === 0) {
    // Sevimli tek dev göz (Cyclops)
    eyes = `
      <circle cx="50" cy="50" r="11" fill="#ffffff" />
      <circle cx="50" cy="50" r="5.5" fill="#0f172a" />
      <circle cx="52.5" cy="47.5" r="2.2" fill="#ffffff" />
    `;
  } else if (eyeType === 1) {
    // İki büyük parlak anime gözü
    eyes = `
      <circle cx="41" cy="50" r="7" fill="#ffffff" />
      <circle cx="41" cy="50" r="3.8" fill="#0f172a" />
      <circle cx="42.5" cy="48" r="1.5" fill="#ffffff" />
      <circle cx="59" cy="50" r="7" fill="#ffffff" />
      <circle cx="59" cy="50" r="3.8" fill="#0f172a" />
      <circle cx="60.5" cy="48" r="1.5" fill="#ffffff" />
    `;
  } else {
    // Üç eğlenceli göz
    eyes = `
      <circle cx="37" cy="52" r="5" fill="#ffffff" /><circle cx="37" cy="52" r="2.5" fill="#0f172a" />
      <circle cx="50" cy="45" r="6" fill="#ffffff" /><circle cx="50" cy="45" r="3" fill="#0f172a" /><circle cx="51.5" cy="43.5" r="1.2" fill="#ffffff" />
      <circle cx="63" cy="52" r="5" fill="#ffffff" /><circle cx="63" cy="52" r="2.5" fill="#0f172a" />
    `;
  }

  let mouth = "";
  if (mouthType === 0) {
    // Tek dişli neşeli gülümseme
    mouth = `<path d="M 44 65 Q 50 71 56 65" stroke="#0f172a" stroke-width="2.5" fill="none" stroke-linecap="round"/><rect x="48" y="66" width="4" height="3.5" rx="1" fill="#ffffff" />`;
  } else if (mouthType === 1) {
    // Kocaman neşeli açık ağız
    mouth = `<path d="M 43 64 Q 50 75 57 64 Z" fill="#e11d48" /><path d="M 46 64 Q 50 67 54 64" stroke="#ffffff" stroke-width="2" fill="none" />`;
  } else {
    // Kedi ağzı :3
    mouth = `<path d="M 43 65 Q 46.5 68 50 65 Q 53.5 68 57 65" stroke="#0f172a" stroke-width="2.2" fill="none" stroke-linecap="round" />`;
  }

  const cheeks = `<ellipse cx="32" cy="62" rx="4" ry="2.5" fill="#fb7185" opacity="0.6"/><ellipse cx="68" cy="62" rx="4" ry="2.5" fill="#fb7185" opacity="0.6"/>`;
  const belly = `<ellipse cx="50" cy="69" rx="14" ry="8" fill="#ffffff" opacity="0.25"/>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
    <defs>
      <linearGradient id="av-grad-${idx}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${p.c1}" />
        <stop offset="100%" stop-color="${p.c2}" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill="url(#av-grad-${idx})" />
    <circle cx="50" cy="50" r="45" fill="#090d16" fill-opacity="0.25" />
    ${horns}
    ${body}
    ${belly}
    ${cheeks}
    ${eyes}
    ${mouth}
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

  if (idx < DOJO_COUNT) {
    return generateMonsterSvg(idx);
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

// ============================================================
// src/lib/news/categories.ts
// YDS Master — Haber Kategorileri Listesi ve Meta Bilgileri
// ============================================================

import { NewsCategory, NewsCategoryMeta } from "./types";

export const NEWS_CATEGORIES: NewsCategoryMeta[] = [
  {
    id: "technology",
    labelTr: "Yapay Zeka, Uzay & Teknoloji",
    labelEn: "Artificial Intelligence, Space & Technology",
    emoji: "🤖",
    descriptionTr: "Yapay zeka modelleri, uzay teleskopları, kuantum bilişim ve siber güvenlik gelişmeleri.",
    gradient: "from-cyan-500/20 to-blue-600/20 border-cyan-500/40 text-cyan-300",
  },
  {
    id: "world",
    labelTr: "Dünya Gündemi & Diplomasi",
    labelEn: "World Affairs, Diplomacy & Geopolitics",
    emoji: "🌐",
    descriptionTr: "Uluslararası antlaşmalar, Birleşmiş Milletler zirveleri, küresel barış ve insani yardımlar.",
    gradient: "from-blue-500/20 to-indigo-600/20 border-blue-500/40 text-blue-300",
  },
  {
    id: "economy",
    labelTr: "Ekonomi, Finans & Küresel Ticaret",
    labelEn: "Global Economy, Finance & Markets",
    emoji: "📈",
    descriptionTr: "Merkez bankası faiz kararları, enflasyon trendleri, teknoloji yatırımları ve yeşil fonlar.",
    gradient: "from-amber-500/20 to-yellow-600/20 border-amber-500/40 text-amber-300",
  },
  {
    id: "environment",
    labelTr: "Çevre, İklim & Biyoçeşitlilik",
    labelEn: "Climate Change, Ecology & Renewable Energy",
    emoji: "🌿",
    descriptionTr: "Okyanus temizleme projeleri, yenilenebilir enerji rekorları ve nesli tükenmekte olan canlılar.",
    gradient: "from-emerald-500/20 to-teal-600/20 border-emerald-500/40 text-emerald-300",
  },
  {
    id: "health",
    labelTr: "Tıp, Sağlık & Biyobilim",
    labelEn: "Medicine, Healthcare & Neuroscience",
    emoji: "🧬",
    descriptionTr: "Kanser aşıları, sinirbilim ve hafıza araştırmaları, uzun ömür ve beslenme bilimi.",
    gradient: "from-rose-500/20 to-pink-600/20 border-rose-500/40 text-rose-300",
  },
  {
    id: "culture",
    labelTr: "Kültür, Sanat & Arkeoloji",
    labelEn: "Culture, Heritage & Archaeology",
    emoji: "🏛️",
    descriptionTr: "Göbeklitepe ve antik kazılar, UNESCO mirası, edebiyat ödülleri ve modern mimari.",
    gradient: "from-purple-500/20 to-violet-600/20 border-purple-500/40 text-purple-300",
  },
  {
    id: "education",
    labelTr: "Eğitim, Akademi & Dilbilim",
    labelEn: "Higher Education & Cognitive Linguistics",
    emoji: "🎓",
    descriptionTr: "Yabancı dil öğrenim metodolojileri, küresel üniversite sıralamaları ve akademik tezler.",
    gradient: "from-indigo-500/20 to-sky-600/20 border-indigo-500/40 text-indigo-300",
  },
  {
    id: "lifestyle",
    labelTr: "Toplum, Yaşam & Psikoloji",
    labelEn: "Society, Psychology & Well-being",
    emoji: "☕",
    descriptionTr: "İş-yaşam dengesi, uyku kalitesi, dijital detoks ve insan psikolojisi üzerine araştırmalar.",
    gradient: "from-teal-500/20 to-emerald-600/20 border-teal-500/40 text-teal-300",
  },
];

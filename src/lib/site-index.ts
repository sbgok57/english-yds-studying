// Site geneli arama + hamburger menü verisi.
// NOT: Ağır soru bankası (data-bank) buraya İÇE AKTARILMAZ.
// Menü/arama için gereken hafif etiket listeleri burada tutulur (bundle küçük kalır).

export interface NavLink {
  label: string;
  href: string;
  emoji: string;
}

// ---------- Sayfalar ----------
export const PAGES: NavLink[] = [
  { label: "Ana Sayfa", href: "/", emoji: "🏠" },
  { label: "Kelime Envanteri", href: "/vocabulary/inventory", emoji: "📦" },
  { label: "Çalışma Programları", href: "/study-plans", emoji: "📅" },
  { label: "Seviye Tespit Sınavı", href: "/level-test", emoji: "📊" },
  { label: "Kelime Kartları", href: "/vocabulary/flashcards", emoji: "🃏" },
  { label: "Gramer", href: "/grammar", emoji: "📖" },
  { label: "Taktikler", href: "/tactics", emoji: "🎯" },
  { label: "Oyunlar", href: "/games", emoji: "🎮" },
  { label: "Sınavlar & Denemeler", href: "/exams", emoji: "⏱️" },
  { label: "YDS Arşivi", href: "/arsiv", emoji: "🗄️" },
  { label: "Reading Lab", href: "/reading", emoji: "🔬" },
  { label: "Avatarlar", href: "/avatars", emoji: "👤" },
  { label: "Sesli Gramer", href: "/grammar/audio", emoji: "🎧" },
  { label: "AI Speaking Lab", href: "/speaking", emoji: "🎙️" },
  { label: "Gündem Haberleri", href: "/haberler", emoji: "📰" },
  { label: "Sertifikalarım", href: "/sertifikalar", emoji: "🏅" },
  { label: "İlerlemem", href: "/ilerleme", emoji: "📈" },
  { label: "Hesap", href: "/hesap", emoji: "🔑" },
  { label: "Bildirim & Ayarlar", href: "/ayarlar", emoji: "⚙️" },
  { label: "İçe Aktar", href: "/import", emoji: "📤" },
  { label: "Kılavuz", href: "/kilavuz", emoji: "📘" },
];

// ---------- Gramer konuları ----------
export const GRAMMAR_LINKS: NavLink[] = [
  { label: "Zamanlar (Tenses)", href: "/grammar/tenses", emoji: "⏳" },
  { label: "Edilgen Çatı (Passive Voice)", href: "/grammar/passive-voice", emoji: "🔄" },
  { label: "Kipler (Modals)", href: "/grammar/modals", emoji: "🎛️" },
  { label: "Koşul Cümleleri & Wish", href: "/grammar/conditionals", emoji: "🔀" },
  { label: "İlgi Cümlecikleri (Relative Clauses)", href: "/grammar/relative-clauses", emoji: "🔗" },
  { label: "İsim Cümlecikleri (Noun Clauses)", href: "/grammar/noun-clauses", emoji: "🧩" },
  { label: "Gerund & Infinitive", href: "/grammar/gerunds-infinitives", emoji: "⚙️" },
  { label: "Partisipler & Kısaltma (Reduction)", href: "/grammar/participles", emoji: "✂️" },
  { label: "Ettirgen Yapılar (Causatives)", href: "/grammar/causatives", emoji: "🛠️" },
  { label: "Bağlaçlar & Geçiş İfadeleri", href: "/grammar/conjunctions", emoji: "🔀" },
  { label: "Edatlar (Prepositions)", href: "/grammar/prepositions", emoji: "📍" },
  { label: "Öbek Fiiller (Phrasal Verbs)", href: "/grammar/phrasal-verbs", emoji: "🧗" },
  { label: "Belirteçler & Miktar", href: "/grammar/determiners", emoji: "🔢" },
  { label: "Sıfat/Zarf & Karşılaştırma", href: "/grammar/comparatives", emoji: "⚖️" },
  { label: "Devrik Yapı (Inversion)", href: "/grammar/inversion", emoji: "🔃" },
];

// ---------- Taktikler ----------
export const TACTICS_LINKS: NavLink[] = [
  { label: "Kelime Bilgisi", href: "/tactics/vocabulary", emoji: "📚" },
  { label: "Dilbilgisi (Grammar)", href: "/tactics/grammar", emoji: "🧩" },
  { label: "Cloze Test (Boşluk Doldurma)", href: "/tactics/cloze-test", emoji: "🕳️" },
  { label: "Cümle Tamamlama", href: "/tactics/sentence-completion", emoji: "🧱" },
  { label: "İngilizce → Türkçe Çeviri", href: "/tactics/translation-en-tr", emoji: "🇬🇧" },
  { label: "Türkçe → İngilizce Çeviri", href: "/tactics/translation-tr-en", emoji: "🇹🇷" },
  { label: "Paragraf Tamamlama", href: "/tactics/paragraph-completion", emoji: "📄" },
  { label: "Anlamca En Yakın Cümle", href: "/tactics/restatement", emoji: "🪞" },
  { label: "Akışı Bozan Cümle", href: "/tactics/irrelevant-sentence", emoji: "✂️" },
  { label: "Diyalog Tamamlama", href: "/tactics/dialogue", emoji: "💬" },
  { label: "Okuma Parçası (Reading)", href: "/tactics/reading", emoji: "📖" },
];

// ---------- Oyunlar ----------
export const GAME_LINKS: NavLink[] = [
  { label: "Eşleştirme", href: "/games", emoji: "🧩" },
  { label: "Köstebek Vur", href: "/games", emoji: "🐹" },
  { label: "Zar At", href: "/games", emoji: "🎲" },
  { label: "Çarkıfelek", href: "/games", emoji: "🎡" },
  { label: "Doğru / Yanlış", href: "/games", emoji: "⚖️" },
  { label: "Dinle & Seç", href: "/games", emoji: "🎧" },
];

// ---------- YDS 2013–2026 gerçek sınavları ----------
const YEARS = [
  "2013", "2014", "2015", "2016", "2017", "2018", "2019",
  "2020", "2021", "2022", "2023", "2024", "2025", "2026",
];
const SESSIONS = [
  { key: "ilkbahar", label: "İlkbahar" },
  { key: "sonbahar", label: "Sonbahar" },
];

export interface ExamLink extends NavLink {
  year: string;
  session: string;
}

export const REAL_EXAMS: ExamLink[] = YEARS.flatMap((y) =>
  SESSIONS.map((s) => ({
    label: `YDS ${y} ${s.label}`,
    href: `/exams/yds-${y}-${s.key}`,
    emoji: "📝",
    year: y,
    session: s.label,
  }))
);

export const DENEME_COUNT = 72;

// ---------- Arama ----------
export interface SiteEntry {
  label: string;
  sub: string;
  href: string;
  type: string;
  emoji: string;
  /** Ek aranabilir metin (örn. İngilizce konu adları) — görüntülenmez. */
  search?: string;
}

function tNorm(s: string): string {
  return s
    .toLowerCase()
    .replace(/[ıİ]/g, "i")
    .replace(/şŞ/g, "s")
    .replace(/ğĞ/g, "g")
    .replace(/üÜ/g, "u")
    .replace(/öÖ/g, "o")
    .replace(/çÇ/g, "c")
    .replace(/â/g, "a")
    .replace(/î/g, "i")
    .replace(/û/g, "u")
    .replace(/[-_/]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Kelime ve ekstra veriler:
import { WORDS } from "./data-vocabulary";
import { ARCHIVE_WORDS } from "./data-archive-vocab";
import { GRAMMAR_ALIASES } from "./grammar-extras";

function buildIndex(): SiteEntry[] {
  const entries: SiteEntry[] = [];

  PAGES.forEach((p) =>
    entries.push({ label: p.label, sub: "Sayfa", href: p.href, type: "Sayfa", emoji: p.emoji })
  );
  GRAMMAR_LINKS.forEach((g) =>
    entries.push({
      label: g.label,
      sub: "Gramer konusu",
      href: g.href,
      type: "Gramer",
      emoji: g.emoji,
      search: GRAMMAR_ALIASES[g.href.replace("/grammar/", "")]?.join(", "),
    })
  );
  TACTICS_LINKS.forEach((t) =>
    entries.push({ label: t.label, sub: "Soru taktiği", href: t.href, type: "Taktik", emoji: t.emoji })
  );
  GAME_LINKS.forEach((g) =>
    entries.push({ label: g.label, sub: "Oyun", href: g.href, type: "Oyun", emoji: g.emoji })
  );
  REAL_EXAMS.forEach((e) =>
    entries.push({ label: e.label, sub: `Gerçek YDS sınavı (${e.session})`, href: e.href, type: "Sınav", emoji: e.emoji })
  );
  for (let d = 1; d <= DENEME_COUNT; d++) {
    entries.push({
      label: `Özgün Deneme ${d}`,
      sub: "Deneme sınavı",
      href: `/exams/deneme-${d}`,
      type: "Deneme",
      emoji: "🎲",
    });
  }

  return entries;
}

const wordEntries: SiteEntry[] = WORDS.map((w) => ({
  label: w.word,
  sub: `${w.tr} (${w.type})`,
  href: "/vocabulary/flashcards",
  type: "Kelime",
  emoji: "🃏",
}));

const archiveEntries: SiteEntry[] = ARCHIVE_WORDS.map((w) => ({
  label: w.w,
  sub: `${w.tr} (${w.type})`,
  href: "/arsiv",
  type: "Çıkmış Kelime",
  emoji: "🗄️",
}));

export const SEARCH_INDEX: SiteEntry[] = [...buildIndex(), ...wordEntries, ...archiveEntries];

export function searchSite(q: string, limit = 8): SiteEntry[] {
  const tokens = tNorm(q).split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return [];

  const scored: { e: SiteEntry; score: number }[] = [];
  for (const e of SEARCH_INDEX) {
    const hay = tNorm(`${e.label} ${e.sub} ${e.type} ${e.search || ""}`);
    if (!tokens.every((t) => hay.includes(t))) continue;
    const nl = tNorm(e.label);
    let score = 0;
    for (const t of tokens) {
      if (nl.startsWith(t)) score += 5;
      else if (nl.includes(t)) score += 3;
      else score += 1;
    }
    score += Math.max(0, 24 - nl.length) * 0.01; // kısa etiket hafif avantaj
    scored.push({ e, score });
  }

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.e);
}

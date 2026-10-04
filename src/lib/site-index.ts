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
  { label: "YDS Sınav Akademisi (180 dk)", href: "/yds", emoji: "🎯" },
  { label: "YDT (LYS-5) Sınav Akademisi (120 dk)", href: "/ydt", emoji: "🎓" },
  { label: "YÖKDİL Alan Akademisi (Sağlık/Fen/Sosyal)", href: "/yokdil", emoji: "🔬" },
  { label: "DİL MASTER Kelimeleri", href: "/vocabulary", emoji: "📚" },
  { label: "PDF / Akıllı Kelime Ekle", href: "/import", emoji: "⚡" },
  { label: "3D Flashcards (Çoklu Sınav)", href: "/vocabulary/flashcards", emoji: "🃏" },
  { label: "Reading Lab (Okuma & Sözlük)", href: "/reading", emoji: "🔬" },
  { label: "Listening Lab (Dinleme & Aksan)", href: "/listening", emoji: "🎧" },
  { label: "Writing Lab (Cümle Kurma & Çeviri)", href: "/writing", emoji: "✍️" },
  { label: "AI Speaking Lab (Konuşma)", href: "/speaking", emoji: "🎙️" },
  { label: "Sınav Merkezi (Tüm Denemeler)", href: "/exams", emoji: "⏱️" },
  { label: "2.000 Avatar", href: "/avatars", emoji: "🎨" },
  { label: "Gramer Akademisi (27 Konu)", href: "/grammar", emoji: "📖" },
  { label: "Sesli Gramer (12 Parça)", href: "/grammar/audio", emoji: "🎧" },
  { label: "Soru Taktikleri (YDS/YDT/YÖKDİL)", href: "/tactics", emoji: "🎯" },
  { label: "Eğlenceli Oyunlar", href: "/games", emoji: "🎮" },
  { label: "Çalışma Programları", href: "/study-plans", emoji: "📅" },
  { label: "Seviye Tespit Sınavı", href: "/level-test", emoji: "📊" },
  { label: "AI Speaking Lab", href: "/speaking", emoji: "🎙️" },
  { label: "Gündem Haberleri", href: "/haberler", emoji: "📰" },
  { label: "Reading Lab", href: "/reading", emoji: "🔬" },
  { label: "Sertifikalarım", href: "/sertifikalar", emoji: "🏅" },
  { label: "Kişisel İlerlemem", href: "/ilerleme", emoji: "📈" },
  { label: "YDS/YDT Arşivi", href: "/arsiv", emoji: "🗄️" },
  { label: "Hesap & Profil", href: "/hesap", emoji: "👤" },
  { label: "Bildirim & Ayarlar", href: "/ayarlar", emoji: "⚙️" },
  { label: "Kılavuz & Yardım", href: "/kilavuz", emoji: "📘" },
  { label: "Admin & Öğrenci Takibi", href: "/admin", emoji: "🛡️" },
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
  { label: "Kelime Bilgisi Taktikleri", href: "/tactics/vocabulary", emoji: "📚" },
  { label: "Dilbilgisi (Grammar) Taktikleri", href: "/tactics/grammar", emoji: "🧩" },
  { label: "Cloze Test Taktikleri", href: "/tactics/cloze-test", emoji: "🕳️" },
  { label: "Cümle Tamamlama Taktikleri", href: "/tactics/sentence-completion", emoji: "🧱" },
  { label: "İngilizce → Türkçe Çeviri Taktikleri", href: "/tactics/translation-en-tr", emoji: "🇬🇧" },
  { label: "Türkçe → İngilizce Çeviri Taktikleri", href: "/tactics/translation-tr-en", emoji: "🇹🇷" },
  { label: "Paragraf Tamamlama Taktikleri", href: "/tactics/paragraph-completion", emoji: "📄" },
  { label: "Anlamca En Yakın Cümle Taktikleri", href: "/tactics/restatement", emoji: "🪞" },
  { label: "Akışı Bozan Cümle Taktikleri", href: "/tactics/irrelevant-sentence", emoji: "✂️" },
  { label: "Diyalog Tamamlama Taktikleri", href: "/tactics/dialogue", emoji: "💬" },
  { label: "Okuma Parçası (Reading) Taktikleri", href: "/tactics/reading", emoji: "📖" },
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

// ---------- Arama Modeli ----------
export interface SiteEntry {
  label: string;
  sub: string;
  href: string;
  type: string;
  emoji: string;
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

// Harici hafif kaynaklar
import { WORDS } from "./data-vocabulary";
import { ARCHIVE_WORDS } from "./data-archive-vocab";
import { GRAMMAR_ALIASES } from "./grammar-extras";
import { getPracticeExamIds } from "./data-exams";
import { AUDIO_TRACKS } from "./audio/tracks";
import { YDS_PUBLICATIONS_MASTER_CORPUS } from "./vocabulary/publications-master-corpus";

function buildIndex(): SiteEntry[] {
  const entries: SiteEntry[] = [];

  // 1. Sayfalar
  PAGES.forEach((p) =>
    entries.push({ label: p.label, sub: "DİL MASTER Sayfası", href: p.href, type: "Sayfa", emoji: p.emoji })
  );

  // 2. Gramer Konuları
  GRAMMAR_LINKS.forEach((g) =>
    entries.push({
      label: g.label,
      sub: "Gramer Akademisi",
      href: g.href,
      type: "Gramer",
      emoji: g.emoji,
      search: GRAMMAR_ALIASES[g.href.replace("/grammar/", "")]?.join(", "),
    })
  );

  // 3. Soru Taktikleri
  TACTICS_LINKS.forEach((t) =>
    entries.push({ label: t.label, sub: "Soru Çözüm Taktiği", href: t.href, type: "Taktik", emoji: t.emoji })
  );

  // 4. Oyunlar
  GAME_LINKS.forEach((g) =>
    entries.push({ label: g.label, sub: "Eğitici Oyun", href: g.href, type: "Oyun", emoji: g.emoji })
  );

  // 5. YDS · YDT · YÖKDİL Tüm Çıkmış & Özgün Denemeler (data-exams)
  const examIds = getPracticeExamIds();
  examIds.forEach((e) => {
    const isYdt = e.category === "YDT";
    const isYokdil = e.category === "YÖKDİL";
    const emoji = isYdt ? "🎓" : isYokdil ? "🔬" : "📝";
    entries.push({
      label: e.title,
      sub: `${e.category} Sınavı (${e.session}) • ${e.durationMin} dk`,
      href: `/exams/${e.id}`,
      type: `${e.category} Sınavı`,
      emoji,
      search: `${e.category} ${e.year} ${e.session} deneme cikmis soru`,
    });
  });

  // 6. Sesli Gramer Parçaları (12 Audio Track)
  AUDIO_TRACKS.forEach((track) => {
    entries.push({
      label: track.title,
      sub: `Sesli Gramer (${Math.round(track.duration / 60)} dk) • ${track.memoryCode}`,
      href: `/grammar/audio?track=${track.id}`,
      type: "Sesli Gramer",
      emoji: "🎧",
      search: `${track.subtitle} ${track.memoryCode} ${track.summary} ${track.examTarget?.join(" ")}`,
    });
  });

  return entries;
}

// 7. Kelime Envanteri ve Yayınlar (Tüm Yayınlar Korpusu ve Temel Kelimeler)
const wordEntries: SiteEntry[] = WORDS.map((w) => ({
  label: w.word,
  sub: `${w.tr} (${w.type})`,
  href: `/vocabulary/flashcards?word=${encodeURIComponent(w.word)}`,
  type: "Kelime",
  emoji: "🃏",
  search: `${w.hint} ${w.exampleTr}`,
}));

const publicationEntries: SiteEntry[] = YDS_PUBLICATIONS_MASTER_CORPUS.map((p) => ({
  label: p.term,
  sub: `${p.meaningsTr.join(", ")} (${p.type}) • ${p.sourceCategory}`,
  href: `/vocabulary/flashcards?word=${encodeURIComponent(p.term)}`,
  type: "Yayınlar Kelimesi",
  emoji: "🏛️",
  search: `${p.definitionEn} ${p.synonyms?.join(" ")} ${p.sourceCategory} ${p.meaningsTr.join(" ")} ${p.exampleEn}`,
}));

const archiveEntries: SiteEntry[] = ARCHIVE_WORDS.map((w) => ({
  label: w.w,
  sub: `${w.tr} (${w.type})`,
  href: "/arsiv",
  type: "Çıkmış Kelime",
  emoji: "🗄️",
}));

export const SEARCH_INDEX: SiteEntry[] = [
  ...buildIndex(),
  ...wordEntries,
  ...publicationEntries,
  ...archiveEntries,
];

export function searchSite(q: string, limit = 10): SiteEntry[] {
  const tokens = tNorm(q).split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return [];

  const scored: { e: SiteEntry; score: number }[] = [];
  for (const e of SEARCH_INDEX) {
    const hay = tNorm(`${e.label} ${e.sub} ${e.type} ${e.search || ""}`);
    if (!tokens.every((t) => hay.includes(t))) continue;
    const nl = tNorm(e.label);
    let score = 0;
    for (const t of tokens) {
      if (nl.startsWith(t)) score += 6;
      else if (nl.includes(t)) score += 3;
      else score += 1;
    }
    score += Math.max(0, 24 - nl.length) * 0.01;
    scored.push({ e, score });
  }

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.e);
}

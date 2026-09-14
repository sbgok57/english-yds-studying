// Gramer konuları için İngilizce/Türkçe takma adlar (alias) + ikinci örnek sorular.
// Amaç: "simple-present" gibi aramalar/URL'ler doğru konuya eşlensin ve her konu
// birden fazla çözümlü örnek + taktikle anlatılsın.

export interface Example2 {
  sentence: string;
  translation: string;
  options: { id: string; text: string; correct: boolean }[];
  answer: string;
  explanation: string;
  tactic: string;
}

export const GRAMMAR_ALIASES: Record<string, string[]> = {
  tenses: [
    "simple present", "present simple", "present continuous", "present perfect",
    "past simple", "simple past", "past continuous", "past perfect", "past perfect continuous",
    "present perfect continuous", "future tense", "future perfect", "will", "going to",
    "tense agreement", "tense", "tenses", "zamanlar", "zaman uyumu",
  ],
  "passive-voice": [
    "passive", "passive voice", "edilgen", "edilgen çatı", "be done", "active passive", "aktif pasif",
  ],
  modals: [
    "modals", "modal verbs", "modal", "kipler", "kip", "can", "could", "may", "might",
    "must", "should", "would", "shall", "need", "have to", "ought to",
  ],
  conditionals: [
    "conditionals", "if clauses", "if clause", "if type 0", "if type 1", "if type 2", "if type 3",
    "first conditional", "second conditional", "third conditional", "mixed conditionals",
    "wish clauses", "if only", "koşul cümleleri", "koşul cümlesi", "kosul",
  ],
  "relative-clauses": [
    "relative clauses", "relative clause", "relative pronouns", "who", "which", "that", "whose", "whom",
    "ilgi cümlecikleri", "ilgi cümleciği", "relative",
  ],
  "noun-clauses": [
    "noun clauses", "noun clause", "that clause", "wh clause", "whether", "if", "indirect question",
    "isim cümlecikleri", "isim cümleciği", "dolaylı soru",
  ],
  "gerunds-infinitives": [
    "gerund", "gerunds", "infinitive", "infinitives", "gerund infinitive", "verb ing", "to infinitive",
    "ing", "to v1",
  ],
  participles: [
    "participles", "participle", "reduction", "reduced relative clause", "reduced", "v3", "v ing",
    "kısaltma", "kisaltma", "ortaç",
  ],
  causatives: [
    "causatives", "causative", "have something done", "get something done", "make", "let", "have",
    "ettirgen", "ettirgen yapılar", "ettirgen yapı",
  ],
  conjunctions: [
    "conjunctions", "conjunction", "linking words", "transitional", "transition words", "however",
    "therefore", "although", "even though", "though", "despite", "in spite of", "whereas", "while",
    "bağlaçlar", "geçiş ifadeleri", "baglaclar",
  ],
  prepositions: [
    "prepositions", "preposition", "at in on", "edatlar", "edat", "prepositional",
  ],
  "phrasal-verbs": [
    "phrasal verbs", "phrasal verb", "take off", "look after", "give up", "put off", "put out",
    "öbek fiiller", "obek fiiller", "phrasal",
  ],
  determiners: [
    "determiners", "determiner", "quantifiers", "quantifier", "some any", "much many", "a lot of",
    "few", "little", "each every", "belirteçler", "belirtecler", "miktar",
  ],
  comparatives: [
    "comparatives", "comparative", "superlatives", "superlative", "comparative superlative", "as as",
    "adjectives", "adverbs", "sıfat zarflar", "karşılaştırma", "karsilastirma",
  ],
  inversion: [
    "inversion", "inverted", "devrik yapı", "devrik yapi", "never have i", "not only", "no sooner",
    "hardly", "barely", "scarcely", "only when",
  ],
};

export const GRAMMAR_EXAMPLES2: Record<string, Example2> = {
  tenses: {
    sentence: "She ---- in this city for over a decade, so she ---- almost every street here.",
    translation: "On yılı aşkın süredir bu şehirde yaşıyor, bu yüzden buradaki hemen her sokağı biliyor.",
    options: [
      { id: "A", text: "has lived / knows", correct: true },
      { id: "B", text: "lived / has known", correct: false },
      { id: "C", text: "lives / knew", correct: false },
      { id: "D", text: "is living / is knowing", correct: false },
    ],
    answer: "A",
    explanation:
      "'for over a decade' → Present Perfect (has lived). İkinci boşluk genel bir durum → Simple Present (knows). 'know' durum fiilidir, süreklilik almaz (is knowing olmaz).",
    tactic: "1) İşaretçiyi yakala: for over a decade → has/have + V3. 2) Durum fiilleri (know, love, believe) -ing almaz → knows.",
  },
  "passive-voice": {
    sentence: "The new library ---- next year, and it ---- by a famous architect.",
    translation: "Yeni kütüphane gelecek yıl inşa edilecek ve ünlü bir mimar tarafından tasarlanıyor.",
    options: [
      { id: "A", text: "will build / designs", correct: false },
      { id: "B", text: "will be built / is being designed", correct: true },
      { id: "C", text: "is building / is designed", correct: false },
      { id: "D", text: "built / will design", correct: false },
    ],
    answer: "B",
    explanation:
      "Kütüphane kendini inşa edemez → edilgen gerekir. Gelecek edilgen: will be built; şu an süren edilgen: is being designed.",
    tactic: "1) Özne işi 'yapan' değil 'yapılan' mı? → edilgen. 2) be + V3 kalıbını kur; zamanı işaretçiden al (next year → will).",
  },
  modals: {
    sentence: "You ---- have taken your umbrella; it didn't rain at all.",
    translation: "Şemsiyeni almana hiç gerek yokmuş; hiç yağmur yağmadı.",
    options: [
      { id: "A", text: "must", correct: false },
      { id: "B", text: "needn't", correct: true },
      { id: "C", text: "can't", correct: false },
      { id: "D", text: "shouldn't", correct: false },
    ],
    answer: "B",
    explanation:
      "Gerek yoktu ama yaptı → needn't have + V3 (boşuna yaptı). 'it didn't rain' ipucunu verir.",
    tactic: "1) 'didn't rain' → şemsiye gereksizmiş. 2) Geçmişte gereksiz yapılan iş → needn't have + V3.",
  },
  conditionals: {
    sentence: "If I ---- you, I ---- that job offer without hesitation.",
    translation: "Yerinde olsam, o iş teklifini hiç tereddüt etmeden kabul ederdim.",
    options: [
      { id: "A", text: "am / will accept", correct: false },
      { id: "B", text: "were / would accept", correct: true },
      { id: "C", text: "had been / would accept", correct: false },
      { id: "D", text: "were / accepted", correct: false },
    ],
    answer: "B",
    explanation: "Şimdiki zamana dair gerçek dışı tavsiye → Type 2: If I were you, I would accept.",
    tactic: "'Yerinde olsam' → If I were you + would + V1 kalıbı sabittir, şaşmaz.",
  },
  "relative-clauses": {
    sentence: "The scientist ---- research changed the world was awarded the Nobel Prize.",
    translation: "Araştırması dünyayı değiştiren bilim insanı Nobel Ödülü'ne layık görüldü.",
    options: [
      { id: "A", text: "who", correct: false },
      { id: "B", text: "which", correct: false },
      { id: "C", text: "whose", correct: true },
      { id: "D", text: "whom", correct: false },
    ],
    answer: "C",
    explanation: "Araştırması (onun) → sahiplik ilişkisi → whose + isim (whose research).",
    tactic: "1) İki isim arasında 'onun' anlamı var mı? → whose. 2) who/which özneyi, whose sahipliği bağlar.",
  },
  "noun-clauses": {
    sentence: "---- the meeting will be held has not been decided yet.",
    translation: "Toplantının nerede yapılacağı henüz kararlaştırılmadı.",
    options: [
      { id: "A", text: "That", correct: false },
      { id: "B", text: "Whether", correct: false },
      { id: "C", text: "Where", correct: true },
      { id: "D", text: "Which", correct: false },
    ],
    answer: "C",
    explanation: "'Toplantının nerede yapılacağı' → yer bildiren isim cümleciği → Where. That/Whether anlamı tamamlamaz.",
    tactic: "1) Boşluk cümlenin başında ve özne görevinde. 2) Anlamı tamamlayan soru kelimesini seç: where (yer), when (zaman), why (sebep).",
  },
  "gerunds-infinitives": {
    sentence: "She regrets ---- him about the incident; now he is upset.",
    translation: "Ona olayı anlattığı için pişman; şimdi çok üzgün.",
    options: [
      { id: "A", text: "to tell", correct: false },
      { id: "B", text: "telling", correct: true },
      { id: "C", text: "tell", correct: false },
      { id: "D", text: "to telling", correct: false },
    ],
    answer: "B",
    explanation:
      "Yapılmış bir şey için pişmanlık → regret + Ving. (regret to tell = üzülerek bildirmek, bambaşka anlam.)",
    tactic: "1) Pişmanlık geçmişteki eylem için → Ving. 2) Yeni/gelecek bildirim için → to V1. Anlam farkına dikkat!",
  },
  participles: {
    sentence: "---- by the noise, the baby woke up and started crying.",
    translation: "Gürültüden rahatsız olan bebek uyandı ve ağlamaya başladı.",
    options: [
      { id: "A", text: "Disturbing", correct: false },
      { id: "B", text: "Disturbed", correct: true },
      { id: "C", text: "To disturb", correct: false },
      { id: "D", text: "Disturbs", correct: false },
    ],
    answer: "B",
    explanation: "Bebek rahatsız EDİLDİ → edilgen kısaltma → V3 (Disturbed). Disturbing = rahatsız eden (etken).",
    tactic: "1) Özne 'edilen' mi yoksa 'eden' mi? → edilen = V3, eden = Ving. 2) Anlamı özneye göre belirle.",
  },
  causatives: {
    sentence: "I'm going to have my car ---- at the garage this afternoon.",
    translation: "Bu öğleden sonra arabamı garajda tamir ettireceğim.",
    options: [
      { id: "A", text: "repair", correct: false },
      { id: "B", text: "repairing", correct: false },
      { id: "C", text: "repaired", correct: true },
      { id: "D", text: "to repair", correct: false },
    ],
    answer: "C",
    explanation: "have + nesne + V3 = başkasına yaptırmak (araba tamir EDİLECEK).",
    tactic: "1) 'Yaptırmak' anlamı → have/get + nesne + V3. 2) Araba kendini tamir etmez kanka!",
  },
  conjunctions: {
    sentence: "---- the heavy rain, the match continued without interruption.",
    translation: "Şiddetli yağmura rağmen maç kesintisiz devam etti.",
    options: [
      { id: "A", text: "Although", correct: false },
      { id: "B", text: "Despite", correct: true },
      { id: "C", text: "However", correct: false },
      { id: "D", text: "Because", correct: false },
    ],
    answer: "B",
    explanation: "'Ağır yağmura rağmen' → Despite + isim (the heavy rain). Although + cümle ister.",
    tactic: "1) Ardında isim/tamlam mı var? → Despite / In spite of. 2) Ardında özne + fiil mi var? → Although / Even though.",
  },
  prepositions: {
    sentence: "He has been working in this company ---- 2015.",
    translation: "2015'ten beri bu şirkette çalışıyor.",
    options: [
      { id: "A", text: "for", correct: false },
      { id: "B", text: "since", correct: true },
      { id: "C", text: "during", correct: false },
      { id: "D", text: "ago", correct: false },
    ],
    answer: "B",
    explanation: "since + nokta zaman (2015). for + süre ister (for ten years).",
    tactic: "1) Nokta zaman (yıl/tarih/saat) → since. 2) Süre (10 yıl, 2 saat) → for.",
  },
  "phrasal-verbs": {
    sentence: "The firemen managed to ---- the fire before it spread.",
    translation: "İtfaiyeciler yangın yayılmadan önce onu söndürmeyi başardı.",
    options: [
      { id: "A", text: "put off", correct: false },
      { id: "B", text: "put out", correct: true },
      { id: "C", text: "put up", correct: false },
      { id: "D", text: "put away", correct: false },
    ],
    answer: "B",
    explanation: "put out = söndürmek (yangın). put off = ertelemek; put up = asmak; put away = kaldırmak.",
    tactic: "1) Öbek fiillerde edat anlamı değiştirir. 2) Çiftleri ezberle: put out (söndür) / put off (ertelet).",
  },
  determiners: {
    sentence: "There is very ---- water left in the bottle; we should buy some more.",
    translation: "Şişede çok az su kaldı; biraz daha almalıyız.",
    options: [
      { id: "A", text: "few", correct: false },
      { id: "B", text: "little", correct: true },
      { id: "C", text: "many", correct: false },
      { id: "D", text: "a few", correct: false },
    ],
    answer: "B",
    explanation: "Su sayılamaz → little (az). few = sayılabilir çoğul isimler için. 'very little water' doğrudur.",
    tactic: "1) İsim sayılamaz mı (water, money, time) → little/much. 2) Sayılabilir mi → few/many.",
  },
  comparatives: {
    sentence: "This exam was ---- than the one we took last month.",
    translation: "Bu sınav geçen ay girdiğimizden daha zordu.",
    options: [
      { id: "A", text: "more difficult", correct: true },
      { id: "B", text: "the most difficult", correct: false },
      { id: "C", text: "as difficult", correct: false },
      { id: "D", text: "too difficult", correct: false },
    ],
    answer: "A",
    explanation: "'than' → karşılaştırma → more difficult (uzun sıfatlarda more + sıfat).",
    tactic: "1) 'than' görünce comparative kur. 2) Tek heceli → -er; uzun sıfat → more + sıfat.",
  },
  inversion: {
    sentence: "---- have I seen such a brilliant performance before.",
    translation: "Daha önce hiç bu kadar parlak bir performans görmemiştim.",
    options: [
      { id: "A", text: "Never", correct: true },
      { id: "B", text: "Rarely", correct: false },
      { id: "C", text: "Not", correct: false },
      { id: "D", text: "Seldom", correct: false },
    ],
    answer: "A",
    explanation:
      "'Daha önce hiç böyle görmedim' → Never + devrik (have I seen). Olumsuz zarf başa gelince yardımcı fiil öznenin önüne geçer.",
    tactic: "1) Olumsuz zarf (never, hardly, no sooner) cümle başında mı? → devrik yap. 2) Dizilim: zarf + yardımcı fiil + özne + fiil.",
  },
};

export function normalizeKey(s: string): string {
  return s
    .toLowerCase()
    .replace(/[ıİ]/g, "i")
    .replace(/şŞ/g, "s")
    .replace(/ğĞ/g, "g")
    .replace(/üÜ/g, "u")
    .replace(/öÖ/g, "o")
    .replace(/çÇ/g, "c")
    .replace(/[-_/]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Verilen slug veya takma adı, kanonik gramer slug'ına çevirir; bulamazsa null. */
export function findGrammarByAlias(slugOrAlias: string): string | null {
  const n = normalizeKey(slugOrAlias);
  if (!n) return null;
  for (const [slug, aliases] of Object.entries(GRAMMAR_ALIASES)) {
    if (normalizeKey(slug) === n) return slug;
    if (aliases.some((a) => normalizeKey(a) === n)) return slug;
  }
  return null;
}

// "YDS Kanka AI" — yerleşik, çevrimdışı, kural tabanlı asistan.
// Harici API yok; veri katmanımızdaki gramer/taktik/kelime bilgisini kullanarak
// soruları kanka diliyle detaylandırır.

import { GRAMMAR_TOPICS, type GrammarTopic } from "./data-grammar";
import { TACTICS, type Tactic } from "./data-tactics";
import { WORDS, type VocabWord } from "./data-vocabulary";

function topicDetail(t: GrammarTopic): string {
  return [
    `📖 **${t.title}** (${t.level})`,
    `Kanka, şöyle düşün: ${t.summary}`,
    `🧩 Formüller: ${t.formula.map((f) => `${f.label} → ${f.text}`).join("  ·  ")}`,
    `📌 Altın kurallar:\n${t.rules.map((r, i) => `${i + 1}) ${r}`).join("\n")}`,
    `🎵 Kafa kodlaması: ${t.coding[0] ?? "—"}`,
    `⚠️ En sık düşülen tuzak: ${t.traps[0]?.trap ?? "—"} → Doğrusu: ${t.traps[0]?.fix ?? "—"}`,
    `🧪 Mini örnek: "${t.example.sentence}" (Cevap: ${t.example.answer})`,
  ].join("\n\n");
}

function tacticDetail(tc: Tactic): string {
  return [
    `🎯 **${tc.title}** (${tc.minutes})`,
    `Kanka, bu tipin mantığı: ${tc.intro}`,
    `🎵 Kodlamalar:\n${tc.kodlama.map((k) => `• ${k}`).join("\n")}`,
    `🧭 Algoritma:\n${tc.steps.map((s) => `${s.n}) ${s.title} — ${s.detail}`).join("\n")}`,
    `💡 Usta ipucu: ${tc.bonusTip}`,
  ].join("\n\n");
}

function wordDetail(w: VocabWord): string {
  const yt = (q: string) =>
    `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
  return [
    `🔤 **${w.word}** (${w.type})`,
    `🇹🇷 Anlamı: ${w.tr}`,
    `💡 Görsel kodlama: ${w.hint}`,
    `📝 Örnek cümle: ${w.example}`,
    `🇹🇷 Çeviri: ${w.exampleTr}`,
    `🎬 Film/dizide nasıl kullanılıyor? Bu linke bak kanka:\n${yt(`${w.word} in movies and tv series`)}`,
    `🗣️ Telaffuz videosu: ${yt(`${w.word} pronunciation`)}`,
  ].join("\n\n");
}

const GRAMMAR_KEYS: Record<string, string[]> = {
  tenses: ["tense", "tenses", "zaman", "kip", "past", "present", "perfect", "future", "çekim"],
  "passive-voice": ["passive", "pasif", "edilgen"],
  modals: ["modal", "kipler", "kipleri", "must", "should", "can't", "çıkarım"],
  conditionals: ["conditional", "koşul", "şart", "if clause", "wish"],
  "relative-clauses": ["relative", "ilgi", "who", "which", "whose", "sıfat cümle"],
  "noun-clauses": ["noun clause", "isim cümle", "whether", "that clause"],
  "gerunds-infinitives": ["gerund", "infinitive", "mastar", "ing", "to do"],
  participles: ["participle", "kısaltma", "reduction", "partisip"],
  causatives: ["causative", "ettirgen", "yaptırma", "have done", "get someone"],
  conjunctions: ["bağlaç", "conjunction", "however", "although", "therefore", "geçiş"],
  prepositions: ["edat", "preposition", "preposizyon", "in on at"],
  "phrasal-verbs": ["phrasal", "öbek fiil", "phrasal verb"],
  determiners: ["belirteç", "determiner", "quantifier", "miktar", "few", "little", "neither"],
  comparatives: ["karşılaştırma", "comparative", "superlative", "sıfat", "daha"],
  inversion: ["devrik", "inversion", "never have", "no sooner", "not only"],
};

const TACTIC_KEYS: Record<string, string[]> = {
  vocabulary: ["kelime", "vocabulary", "sözcük", "word"],
  grammar: ["dilbilgisi", "gramer sorusu", "grammar sorusu"],
  "cloze-test": ["cloze", "boşluk doldur", "cloze test"],
  "sentence-completion": ["cümle tamamlama", "sentence completion", "tamamlama"],
  "translation-en-tr": ["çeviri", "translation", "ingilizce türkçe", "en tr"],
  "translation-tr-en": ["türkçe ingilizce", "tr en", "çeviri türkçe"],
  "paragraph-completion": ["paragraf tamamlama", "paragraph completion"],
  restatement: ["restatement", "anlamca en yakın", "en yakın cümle"],
  "irrelevant-sentence": ["akışı bozan", "irrelevant", "bozan cümle", "uygunsuz cümle"],
  dialogue: ["diyalog", "dialogue", "konuşma tamamlama"],
  reading: ["okuma", "reading", "paragraf sorusu", "passage"],
};

export function answerAi(raw: string): string {
  const q = (raw || "").toLowerCase().trim();

  // ---- selamlama / hal hatır ----
  if (/^(selam|merhaba|hey|naber|nasılsın|günaydın|iyi akşamlar|slm|sa)\b/.test(q) || q.length < 4) {
    return [
      "Selam kanka! 👋 Ben YDS Kanka AI — senin kankabotun.",
      "Bana şunları sorabilirsin:",
      "📖 Bir gramer konusunu açıklamamı (örn. 'tenses nedir', 'passive nasıl anlaşılır')",
      "🎯 Soru tipi taktikleri ('cloze test taktiği', 'çeviri nasıl çözülür')",
      "🔤 Bir kelimenin anlamı ve film/dizi kullanımı ('abundant ne demek')",
      "📅 Çalışma planı ('30 günlük plan ver')",
      "🧮 Net hesabı ('net nasıl hesaplanır')",
      "Hadi kanka, neyi kafaya taktın? 😎",
    ].join("\n\n");
  }

  // ---- teşekkür / veda ----
  if (/(teşekkür|sağol|eyvallah|tesekkur)/.test(q)) {
    return "Rica ederim kral! 👊 Başka bir şey takılırsa buradayım. Unutma: bugün çalıştığın her kelime, yarınki netinin teminatıdır. ✨";
  }

  // ---- net / puan hesabı ----
  if (/(net|puan|hesap|doğru yanlış)/.test(q)) {
    return [
      "🧮 Net hesabı kanka, çok basit:",
      "YDS'de **4 yanlış 1 doğruyu götürür**.",
      `Net = Doğru − (Yanlış ÷ 4)`,
      "Örnek: 60 doğru, 20 yanlış → 60 − (20÷4) = 60 − 5 = **55 net**.",
      "Boş bırakmak yanlıştan iyidir kanka: emin değilsen işaretleme, netini koru. 🎯",
    ].join("\n\n");
  }

  // ---- çalışma planı ----
  if (/(plan|program|nasıl çalış|çalışma|başla|başlangıç|kaç ay|yol haritası|tavsiye|öner)/.test(q)) {
    return [
      "📅 Kanka, sana 30 günlük kral planı:",
      "**Hafta 1-2 (Temel):** Her gün 20 kelime (flashcards) + Tenses & Passive & Modals konuları. Günde 30-40 dk.",
      "**Hafta 3-4 (Yapı):** Gerund/Infinitive, Relative, Noun Clause, Conditionals. Her konuda 1 örnek soru çöz. Kelime tekrarına devam.",
      "**Hafta 5-6 (Taktik):** 11 soru tipi taktiğini sırayla oku; her gün 1 cloze + 1 paragraf + 1 çeviri çöz.",
      "**Hafta 7-8 (Deneme):** Haftada 2-3 optik deneme (180 dk). Yanlışlarını not al, o konulara geri dön.",
      "Altın kural kanka: **az ama her gün** çalış. Netler her hafta tırmanır, göreceksin! 🚀",
    ].join("\n\n");
  }

  // ---- kelime arama (en uzun eşleşme) ----
  const matchedWords = WORDS.filter((w) => {
    const wl = w.word.toLowerCase();
    return new RegExp(`\\b${wl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`).test(q);
  });
  if (matchedWords.length > 0) {
    const w = matchedWords.sort((a, b) => b.word.length - a.word.length)[0];
    return wordDetail(w);
  }

  // ---- gramer konusu arama ----
  for (const slug of Object.keys(GRAMMAR_KEYS)) {
    if (GRAMMAR_KEYS[slug].some((k) => q.includes(k))) {
      const t = GRAMMAR_TOPICS.find((x) => x.slug === slug);
      if (t) return topicDetail(t);
    }
  }

  // ---- taktik arama ----
  for (const slug of Object.keys(TACTIC_KEYS)) {
    if (TACTIC_KEYS[slug].some((k) => q.includes(k))) {
      const tc = TACTICS.find((x) => x.slug === slug);
      if (tc) return tacticDetail(tc);
    }
  }

  // ---- genel kelime/taktik isteği ----
  if (/(kelime|vocab)/.test(q)) {
    return `Kanka, kelime mi arıyorsun? Bana İngilizce kelimeyi yaz (örn. "abundant ne demek"), sana anlamını, kodlamasını ve film/dizi linkini vereyim. 📚\n\nŞu an listemizde ${WORDS.length} YDS hedef kelimesi var. Flashcard'lardan da çalışabilirsin: /vocabulary/flashcards`;
  }

  // ---- fallback ----
  return [
    "Kanka, bunu tam çözemedim ama panik yok! 🤔",
    "Şunları deneyebilirsin:",
    "• 'tenses nedir' / 'passive nasıl anlaşılır' gibi gramer soruları",
    "• 'cloze test taktiği' / 'çeviri nasıl çözülür' gibi taktik soruları",
    "• 'abundant ne demek' gibi kelime soruları",
    "• 'net nasıl hesaplanır' veya '30 günlük plan ver'",
    `İpucu kanka: ${GRAMMAR_TOPICS.length} gramer konusu ve ${TACTICS.length} soru tipi taktiği sitede seni bekliyor. Bir konu adı yaz, hemen detaylandırayım. 🎯`,
  ].join("\n\n");
}

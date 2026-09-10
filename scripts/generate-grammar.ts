// Script to build the complete comprehensive grammar lessons and 25 activities per topic for all 28 topics.

const topics = [
  // Foundation (1-7)
  { id: 'topic-be', title: 'Verb "To Be"', titleTr: '"To Be" Fiili (Am/Is/Are/Was/Were)', level: 'FOUNDATION', keyVerb: 'be' },
  { id: 'topic-pronouns', title: 'Pronouns & Determiners', titleTr: 'Zamirler ve Belirteçler', level: 'FOUNDATION', keyVerb: 'refer' },
  { id: 'topic-articles', title: 'Articles & Countability', titleTr: 'Artikeller (A, An, The)', level: 'FOUNDATION', keyVerb: 'specify' },
  { id: 'topic-present-simple', title: 'Present Simple Tense', titleTr: 'Geniş Zaman', level: 'FOUNDATION', keyVerb: 'state' },
  { id: 'topic-present-continuous', title: 'Present Continuous Tense', titleTr: 'Şimdiki Zaman', level: 'FOUNDATION', keyVerb: 'progress' },
  { id: 'topic-past-simple', title: 'Past Simple Tense', titleTr: 'Geçmiş Zaman', level: 'FOUNDATION', keyVerb: 'complete' },
  { id: 'topic-future', title: 'Future Forms', titleTr: 'Gelecek Zaman Formları', level: 'FOUNDATION', keyVerb: 'predict' },

  // Core (8-13)
  { id: 'topic-present-perfect', title: 'Present Perfect Tense', titleTr: 'Yakın Geçmiş Zaman', level: 'CORE', keyVerb: 'connect' },
  { id: 'topic-past-perfect', title: 'Past Perfect Tense', titleTr: 'Öncelikli Geçmiş Zaman', level: 'CORE', keyVerb: 'precede' },
  { id: 'topic-modals', title: 'Modals & Semi-Modals', titleTr: 'Kip Belirteçleri (Modals)', level: 'CORE', keyVerb: 'deduce' },
  { id: 'topic-comparatives', title: 'Comparatives & Superlatives', titleTr: 'Karşılaştırma Yapıları', level: 'CORE', keyVerb: 'compare' },
  { id: 'topic-quantifiers', title: 'Quantifiers & Determiners', titleTr: 'Miktar Belirteçleri', level: 'CORE', keyVerb: 'quantify' },
  { id: 'topic-gerunds-infinitives', title: 'Gerunds & Infinitives', titleTr: 'Fiilimsiler (Gerund / Infinitive)', level: 'CORE', keyVerb: 'nominalize' },

  // Intermediate (14-20)
  { id: 'topic-passive-voice', title: 'Passive Voice & Causatives', titleTr: 'Edilgen Çatı ve Ettirgenlik', level: 'INTERMEDIATE', keyVerb: 'emphasize' },
  { id: 'topic-conditionals', title: 'Conditionals & Wishes', titleTr: 'Koşul Cümleleri ve Dilek Kipleri', level: 'INTERMEDIATE', keyVerb: 'hypothesize' },
  { id: 'topic-relative-clauses', title: 'Relative Clauses', titleTr: 'Sıfat Cümlecikleri', level: 'INTERMEDIATE', keyVerb: 'qualify' },
  { id: 'topic-noun-clauses', title: 'Noun Clauses & Subjunctive', titleTr: 'İsim Cümlecikleri', level: 'INTERMEDIATE', keyVerb: 'embed' },
  { id: 'topic-adverb-clauses', title: 'Adverbial Clauses', titleTr: 'Zarf Cümlecikleri', level: 'INTERMEDIATE', keyVerb: 'relate' },
  { id: 'topic-reported-speech', title: 'Reported Speech', titleTr: 'Dolaylı Anlatım', level: 'INTERMEDIATE', keyVerb: 'report' },
  { id: 'topic-linking-words', title: 'Transitions & Discourse Markers', titleTr: 'Metin Bağlaçları', level: 'INTERMEDIATE', keyVerb: 'transition' },

  // YDS Grammar (21-28)
  { id: 'topic-advanced-tenses', title: 'Advanced Tense Harmony & Aspect', titleTr: 'İleri Seviye Zaman Uyumu', level: 'YDS_GRAMMAR', keyVerb: 'coordinate' },
  { id: 'topic-inversion', title: 'Inversion & Negative Adverbials', titleTr: 'Devrik Cümle Yapıları', level: 'YDS_GRAMMAR', keyVerb: 'invert' },
  { id: 'topic-participles', title: 'Participle Clauses', titleTr: 'Ortaç Cümlecikleri (-ing/-ed)', level: 'YDS_GRAMMAR', keyVerb: 'abbreviate' },
  { id: 'topic-reduced-clauses', title: 'Clause Reduction', titleTr: 'Cümlecik İndirgemeleri', level: 'YDS_GRAMMAR', keyVerb: 'condense' },
  { id: 'topic-advanced-connectors', title: 'Advanced Connectors', titleTr: 'İleri Düzey Akademik Bağlaçlar', level: 'YDS_GRAMMAR', keyVerb: 'contrast' },
  { id: 'topic-sentence-completion', title: 'Sentence Completion Logic', titleTr: 'Cümle Tamamlama Mantığı', level: 'YDS_GRAMMAR', keyVerb: 'synthesize' },
  { id: 'topic-cloze-grammar', title: 'Cloze Test Grammar Tactics', titleTr: 'Cloze Test Gramer Taktikleri', level: 'YDS_GRAMMAR', keyVerb: 'integrate' },
  { id: 'topic-yds-mixed-grammar', title: 'YDS Mixed Grammar Synthesis', titleTr: 'YDS Karışık Gramer Sentezi', level: 'YDS_GRAMMAR', keyVerb: 'evaluate' }
];

console.log(`Loaded ${topics.length} grammar topics.`);

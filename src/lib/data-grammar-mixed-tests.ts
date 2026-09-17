// 500 Karışık Gramer Testi Sorusu (Tüm Konuları Kapsayan Karma Soru Bankası)
// A1-C2 Seviyeleri, 5 Seçenekli, Açıklamalı, Taktikli ve Önemli Soru Etiketli

export interface GrammarMixedQuestion {
  id: string;
  topicSlug: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  difficulty: "Kolay" | "Orta" | "İleri" | "YDS";
  stem: string;
  options: string[];
  answer: number;
  explanation: string;
  distractorAnalysis?: Record<string, string>;
  tactic: string;
  memoryCode: string;
  isImportant: boolean;
  questionType: string;
}

export const GRAMMAR_MIXED_QUESTIONS: GrammarMixedQuestion[] = [
  {
    "id": "gq-mix-1",
    "topicSlug": "tenses",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Although the committee members ------- the proposal thoroughly yesterday, they decided ------- their final vote until next week.",
    "options": [
      "were reviewing / postponed",
      "had reviewed / postponing",
      "reviewed / to postpone",
      "have reviewed / to postpone",
      "review / postpone"
    ],
    "answer": 2,
    "explanation": "'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
    "distractorAnalysis": {
      "A": "'were reviewing / postponed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'had reviewed / postponing' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
      "D": "'have reviewed / to postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'review / postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Yesterday -> V2; decide -> to V1.",
    "memoryCode": "🎵 [Karma Gramer]: Yesterday -> V2; decide -> to V1.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-2",
    "topicSlug": "passive-voice",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The ancient temple, ------- by archaeologists last year, is widely believed ------- by a powerful volcanic eruption.",
    "options": [
      "discovered / to have been destroyed",
      "discovered / destroying",
      "was discovered / to be destroyed",
      "discovering / to destroy",
      "having discovered / destroyed"
    ],
    "answer": 0,
    "explanation": "İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
    "distractorAnalysis": {
      "A": "DOĞRU: İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
      "B": "'discovered / destroying' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'was discovered / to be destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'discovering / to destroy' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'having discovered / destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "V3 niteleme + is believed to have been V3.",
    "memoryCode": "🎵 [Karma Gramer]: V3 niteleme + is believed to have been V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-3",
    "topicSlug": "conjunctions",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "------- the torrential storm damaged the transmission towers, technicians managed to restore power ------- a few hours.",
    "options": [
      "Because / at",
      "Since / on",
      "Even though / within",
      "In case / through",
      "Unless / for"
    ],
    "answer": 2,
    "explanation": "Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
    "distractorAnalysis": {
      "A": "'Because / at' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Since / on' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
      "D": "'In case / through' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Unless / for' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "memoryCode": "🎵 [Karma Gramer]: Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-4",
    "topicSlug": "conditionals",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Had the emergency medical team ------- immediately, the patient's critical condition ------- so drastically.",
    "options": [
      "been arrived / was not deteriorated",
      "arrived / had not deteriorated",
      "had arrived / would not deteriorate",
      "arrive / did not deteriorate",
      "arrived / would not have deteriorated"
    ],
    "answer": 4,
    "explanation": "Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
    "distractorAnalysis": {
      "A": "'been arrived / was not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'arrived / had not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'had arrived / would not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'arrive / did not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir."
    },
    "tactic": "Had + S + V3 -> would have V3.",
    "memoryCode": "🎵 [Karma Gramer]: Had + S + V3 -> would have V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-5",
    "topicSlug": "gerunds-infinitives",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The laboratory supervisor insisted on ------- the chemical containers carefully ------- any toxic leakage should occur.",
    "options": [
      "to inspect / so that",
      "inspecting / lest",
      "having inspected / provided that",
      "inspected / unless",
      "inspect / in order that"
    ],
    "answer": 1,
    "explanation": "'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
    "distractorAnalysis": {
      "A": "'to inspect / so that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
      "C": "'having inspected / provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'inspected / unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'inspect / in order that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Insist on + V-ing; lest + should/yalın fiil.",
    "memoryCode": "🎵 [Karma Gramer]: Insist on + V-ing; lest + should/yalın fiil.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-6",
    "topicSlug": "inversion",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "------- had the international peace treaty been signed ------- border skirmishes erupted once again.",
    "options": [
      "Scarcely / when",
      "Not only / but also",
      "Neither / nor",
      "No sooner / than",
      "Hardly / than"
    ],
    "answer": 0,
    "explanation": "'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
      "B": "'Not only / but also' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Neither / nor' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'No sooner / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Hardly / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Scarcely ... WHEN! (No sooner ... THAN).",
    "memoryCode": "🎵 [Karma Gramer]: Scarcely ... WHEN! (No sooner ... THAN).",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-7",
    "topicSlug": "relative-clauses",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The distinguished astrophysicist, ------- research into dark matter revolutionized cosmology, received ------- award yesterday.",
    "options": [
      "that / Ø",
      "who / the",
      "whom / an",
      "which / a",
      "whose / an"
    ],
    "answer": 4,
    "explanation": "Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
    "distractorAnalysis": {
      "A": "'that / Ø' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'who / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'whom / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'which / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir."
    },
    "tactic": "İsim + whose + isim; an award.",
    "memoryCode": "🎵 [Karma Gramer]: İsim + whose + isim; an award.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-8",
    "topicSlug": "perfect-modals",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "You ------- all that heavy reference material to class this morning; the teacher uploaded digital copies -------.",
    "options": [
      "would rather bring / therefore",
      "must not bring / furthermore",
      "could not bring / nevertheless",
      "should have brought / otherwise",
      "needn't have brought / instead"
    ],
    "answer": 4,
    "explanation": "Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
    "distractorAnalysis": {
      "A": "'would rather bring / therefore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'must not bring / furthermore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'could not bring / nevertheless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'should have brought / otherwise' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır."
    },
    "tactic": "Needn't have V3 = Gerek yoktu ama yaptın.",
    "memoryCode": "🎵 [Karma Gramer]: Needn't have V3 = Gerek yoktu ama yaptın.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-9",
    "topicSlug": "conditionals",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "------- the global financial market recovers, investors will continue to seek refuge in ------- gold and silver.",
    "options": [
      "Although / the",
      "Because / a",
      "Unless / Ø",
      "In case / the",
      "As long as / an"
    ],
    "answer": 2,
    "explanation": "Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
    "distractorAnalysis": {
      "A": "'Although / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Because / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
      "D": "'In case / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'As long as / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "memoryCode": "🎵 [Karma Gramer]: Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-10",
    "topicSlug": "comparatives",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The new high-speed electric locomotive runs far ------- than older diesel models, consuming ------- energy per passenger.",
    "options": [
      "more quietly / less",
      "more quiet / least",
      "quiet / much",
      "most quietly / little",
      "quietly / fewer"
    ],
    "answer": 0,
    "explanation": "Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
    "distractorAnalysis": {
      "A": "DOĞRU: Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
      "B": "'more quiet / least' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'quiet / much' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'most quietly / little' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'quietly / fewer' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Run + more quietly than; less energy.",
    "memoryCode": "🎵 [Karma Gramer]: Run + more quietly than; less energy.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-11",
    "topicSlug": "noun-clauses",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The clinical panel investigated ------- the sudden surge in neurological diagnoses was ------- environmental pollutants.",
    "options": [
      "that / in spite of",
      "what / rather than",
      "how / contrary to",
      "whether / due to",
      "which / as well as"
    ],
    "answer": 3,
    "explanation": "Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
    "distractorAnalysis": {
      "A": "'that / in spite of' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'what / rather than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'how / contrary to' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
      "E": "'which / as well as' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Investigate + whether; due to = -den kaynaklanan.",
    "memoryCode": "🎵 [Karma Gramer]: Investigate + whether; due to = -den kaynaklanan.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-12",
    "topicSlug": "inversion",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Under no circumstances ------- researchers modify experimental datasets without ------- formal written authorization.",
    "options": [
      "have / having obtained",
      "ought / to obtain",
      "would / obtain",
      "should / obtaining",
      "must have / obtained"
    ],
    "answer": 3,
    "explanation": "'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
    "distractorAnalysis": {
      "A": "'have / having obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'ought / to obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'would / obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
      "E": "'must have / obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Under no circumstances + should + S + V1; without + V-ing.",
    "memoryCode": "🎵 [Karma Gramer]: Under no circumstances + should + S + V1; without + V-ing.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-13",
    "topicSlug": "causatives",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The university had the entire library archive ------- by specialized digital technicians to ------- rare manuscripts.",
    "options": [
      "digitized / preserve",
      "digitizing / to preserve",
      "being digitized / preserve",
      "digitize / preserving",
      "to digitize / preserved"
    ],
    "answer": 0,
    "explanation": "'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
      "B": "'digitizing / to preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'being digitized / preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'digitize / preserving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'to digitize / preserved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Have + nesne + V3; to V1 (amaç).",
    "memoryCode": "🎵 [Karma Gramer]: Have + nesne + V3; to V1 (amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-14",
    "topicSlug": "determiners",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "------- many students registered for the introductory chemistry course that the department had to open an extra section.",
    "options": [
      "So",
      "Too",
      "Very",
      "As",
      "Such"
    ],
    "answer": 0,
    "explanation": "'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
    "distractorAnalysis": {
      "A": "DOĞRU: 'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
      "B": "'Too' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Very' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'As' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Such' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "So many / so much ... THAT! (Such a lot of).",
    "memoryCode": "🎵 [Karma Gramer]: So many / so much ... THAT! (Such a lot of).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-15",
    "topicSlug": "phrasal-verbs",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The company decided to ------- several inefficient regional branches in order to ------- operating costs during the crisis.",
    "options": [
      "look into / enhance",
      "carry out / elevate",
      "close down / curtail",
      "put up with / maximize",
      "bring about / augment"
    ],
    "answer": 2,
    "explanation": "Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
    "distractorAnalysis": {
      "A": "'look into / enhance' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'carry out / elevate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
      "D": "'put up with / maximize' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'bring about / augment' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Close down a branch; curtail costs.",
    "memoryCode": "🎵 [Karma Gramer]: Close down a branch; curtail costs.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-16",
    "topicSlug": "articles",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The Amazon basin is ------- home to thousands of indigenous tribes, ------- language and customs are completely unique.",
    "options": [
      "the / where",
      "a / that",
      "an / whom",
      "Ø / whose",
      "the / which"
    ],
    "answer": 3,
    "explanation": "'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
    "distractorAnalysis": {
      "A": "'the / where' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'a / that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'an / whom' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
      "E": "'the / which' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Be home to (Ø); tribes whose language...",
    "memoryCode": "🎵 [Karma Gramer]: Be home to (Ø); tribes whose language...",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-17",
    "topicSlug": "adverbial-clauses",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "------- progress has been made in quantum computing, several foundational hardware bottlenecks remain -------.",
    "options": [
      "Since / solving",
      "Because / resolved",
      "In case / to resolve",
      "Although / unresolved",
      "Unless / resolution"
    ],
    "answer": 3,
    "explanation": "İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
    "distractorAnalysis": {
      "A": "'Since / solving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Because / resolved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'In case / to resolve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
      "E": "'Unless / resolution' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "memoryCode": "🎵 [Karma Gramer]: Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-18",
    "topicSlug": "perfect-modals",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The criminal suspect ------- the theft because reliable airport security cameras recorded him in Berlin at that exact moment.",
    "options": [
      "might have committed",
      "needn't commit",
      "cannot have committed",
      "must have committed",
      "should commit"
    ],
    "answer": 2,
    "explanation": "Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
    "distractorAnalysis": {
      "A": "'might have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'needn't commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
      "D": "'must have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'should commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Cannot / Couldn't have V3 = Yapmış olamaz.",
    "memoryCode": "🎵 [Karma Gramer]: Cannot / Couldn't have V3 = Yapmış olamaz.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-19",
    "topicSlug": "conjunctions",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The local municipality decided to construct a bypass road ------- heavy freight trucks would not congest residential streets.",
    "options": [
      "so that",
      "lest",
      "provided that",
      "unless",
      "in case"
    ],
    "answer": 0,
    "explanation": "Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
    "distractorAnalysis": {
      "A": "DOĞRU: Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
      "B": "'lest' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'in case' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "So that + modal = -sın diye (Amaç).",
    "memoryCode": "🎵 [Karma Gramer]: So that + modal = -sın diye (Amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-20",
    "topicSlug": "inversion",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Rarely ------- an author capture the psychological complexities of wartime trauma with such profound sensitivity.",
    "options": [
      "did",
      "is",
      "was",
      "does",
      "has"
    ],
    "answer": 3,
    "explanation": "'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
    "distractorAnalysis": {
      "A": "'did' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
      "E": "'has' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Rarely + does + S + V1.",
    "memoryCode": "🎵 [Karma Gramer]: Rarely + does + S + V1.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-21",
    "topicSlug": "tenses",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "By the end of this decade, marine renewable energy technologies ------- into mainstream commercial grids across Europe.",
    "options": [
      "were integrated",
      "will have been integrated",
      "are integrated",
      "have been integrated",
      "will integrate"
    ],
    "answer": 1,
    "explanation": "'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
    "distractorAnalysis": {
      "A": "'were integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
      "C": "'are integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'have been integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'will integrate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "By + Gelecek zaman + Pasif = will have been + V3.",
    "memoryCode": "🎵 [Karma Gramer]: By + Gelecek zaman + Pasif = will have been + V3.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-22",
    "topicSlug": "gerunds-infinitives",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The research team succeeded in ------- the rare enzyme after ------- multiple biochemical assays in the laboratory.",
    "options": [
      "having synthesized / conduct",
      "to synthesize / conduct",
      "synthesize / to conduct",
      "synthesized / conducted",
      "synthesizing / conducting"
    ],
    "answer": 4,
    "explanation": "Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
    "distractorAnalysis": {
      "A": "'having synthesized / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'to synthesize / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'synthesize / to conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'synthesized / conducted' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur."
    },
    "tactic": "Preposition + V-ing kuralı.",
    "memoryCode": "🎵 [Karma Gramer]: Preposition + V-ing kuralı.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-23",
    "topicSlug": "determiners",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Neither the university chancellor nor the faculty deans ------- prepared to compromise on the revised academic standards.",
    "options": [
      "be",
      "were",
      "is",
      "was",
      "has been"
    ],
    "answer": 1,
    "explanation": "'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
    "distractorAnalysis": {
      "A": "'be' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
      "C": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'has been' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Neither ... nor en yakın özneye bakar!",
    "memoryCode": "🎵 [Karma Gramer]: Neither ... nor en yakın özneye bakar!",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-24",
    "topicSlug": "adverbial-clauses",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "------- the economic inflation continued to soar, the central bank decided to raise benchmark lending rates.",
    "options": [
      "Even if",
      "Whereas",
      "Unless",
      "As",
      "Although"
    ],
    "answer": 3,
    "explanation": "Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
    "distractorAnalysis": {
      "A": "'Even if' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Whereas' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
      "E": "'Although' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "As = -dıkça / çünkü.",
    "memoryCode": "🎵 [Karma Gramer]: As = -dıkça / çünkü.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-25",
    "topicSlug": "determiners",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The government launched a public campaign to ensure that ------- citizen had equal access to high-speed digital infrastructure.",
    "options": [
      "every",
      "several",
      "all",
      "many",
      "both"
    ],
    "answer": 0,
    "explanation": "Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
    "distractorAnalysis": {
      "A": "DOĞRU: Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
      "B": "'several' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'all' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'many' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'both' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Every + Tekil isim.",
    "memoryCode": "🎵 [Karma Gramer]: Every + Tekil isim.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-26",
    "topicSlug": "tenses",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Although the committee members ------- the proposal thoroughly yesterday, they decided ------- their final vote until next week.",
    "options": [
      "review / postpone",
      "were reviewing / postponed",
      "have reviewed / to postpone",
      "reviewed / to postpone",
      "had reviewed / postponing"
    ],
    "answer": 3,
    "explanation": "'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
    "distractorAnalysis": {
      "A": "'review / postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'were reviewing / postponed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'have reviewed / to postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
      "E": "'had reviewed / postponing' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Yesterday -> V2; decide -> to V1.",
    "memoryCode": "🎵 [Karma Gramer]: Yesterday -> V2; decide -> to V1.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-27",
    "topicSlug": "passive-voice",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The ancient temple, ------- by archaeologists last year, is widely believed ------- by a powerful volcanic eruption.",
    "options": [
      "discovered / destroying",
      "was discovered / to be destroyed",
      "discovered / to have been destroyed",
      "having discovered / destroyed",
      "discovering / to destroy"
    ],
    "answer": 2,
    "explanation": "İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
    "distractorAnalysis": {
      "A": "'discovered / destroying' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'was discovered / to be destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
      "D": "'having discovered / destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'discovering / to destroy' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "V3 niteleme + is believed to have been V3.",
    "memoryCode": "🎵 [Karma Gramer]: V3 niteleme + is believed to have been V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-28",
    "topicSlug": "conjunctions",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "------- the torrential storm damaged the transmission towers, technicians managed to restore power ------- a few hours.",
    "options": [
      "Because / at",
      "Since / on",
      "In case / through",
      "Unless / for",
      "Even though / within"
    ],
    "answer": 4,
    "explanation": "Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
    "distractorAnalysis": {
      "A": "'Because / at' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Since / on' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'In case / through' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Unless / for' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur."
    },
    "tactic": "Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "memoryCode": "🎵 [Karma Gramer]: Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-29",
    "topicSlug": "conditionals",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Had the emergency medical team ------- immediately, the patient's critical condition ------- so drastically.",
    "options": [
      "arrive / did not deteriorate",
      "arrived / would not have deteriorated",
      "been arrived / was not deteriorated",
      "arrived / had not deteriorated",
      "had arrived / would not deteriorate"
    ],
    "answer": 1,
    "explanation": "Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
    "distractorAnalysis": {
      "A": "'arrive / did not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
      "C": "'been arrived / was not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'arrived / had not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'had arrived / would not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Had + S + V3 -> would have V3.",
    "memoryCode": "🎵 [Karma Gramer]: Had + S + V3 -> would have V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-30",
    "topicSlug": "gerunds-infinitives",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The laboratory supervisor insisted on ------- the chemical containers carefully ------- any toxic leakage should occur.",
    "options": [
      "to inspect / so that",
      "having inspected / provided that",
      "inspecting / lest",
      "inspected / unless",
      "inspect / in order that"
    ],
    "answer": 2,
    "explanation": "'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
    "distractorAnalysis": {
      "A": "'to inspect / so that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'having inspected / provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
      "D": "'inspected / unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'inspect / in order that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Insist on + V-ing; lest + should/yalın fiil.",
    "memoryCode": "🎵 [Karma Gramer]: Insist on + V-ing; lest + should/yalın fiil.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-31",
    "topicSlug": "inversion",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "------- had the international peace treaty been signed ------- border skirmishes erupted once again.",
    "options": [
      "Not only / but also",
      "No sooner / than",
      "Hardly / than",
      "Neither / nor",
      "Scarcely / when"
    ],
    "answer": 4,
    "explanation": "'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
    "distractorAnalysis": {
      "A": "'Not only / but also' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'No sooner / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Hardly / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Neither / nor' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır."
    },
    "tactic": "Scarcely ... WHEN! (No sooner ... THAN).",
    "memoryCode": "🎵 [Karma Gramer]: Scarcely ... WHEN! (No sooner ... THAN).",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-32",
    "topicSlug": "relative-clauses",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The distinguished astrophysicist, ------- research into dark matter revolutionized cosmology, received ------- award yesterday.",
    "options": [
      "that / Ø",
      "whom / an",
      "who / the",
      "which / a",
      "whose / an"
    ],
    "answer": 4,
    "explanation": "Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
    "distractorAnalysis": {
      "A": "'that / Ø' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'whom / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'who / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'which / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir."
    },
    "tactic": "İsim + whose + isim; an award.",
    "memoryCode": "🎵 [Karma Gramer]: İsim + whose + isim; an award.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-33",
    "topicSlug": "perfect-modals",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "You ------- all that heavy reference material to class this morning; the teacher uploaded digital copies -------.",
    "options": [
      "should have brought / otherwise",
      "could not bring / nevertheless",
      "would rather bring / therefore",
      "must not bring / furthermore",
      "needn't have brought / instead"
    ],
    "answer": 4,
    "explanation": "Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
    "distractorAnalysis": {
      "A": "'should have brought / otherwise' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'could not bring / nevertheless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'would rather bring / therefore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'must not bring / furthermore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır."
    },
    "tactic": "Needn't have V3 = Gerek yoktu ama yaptın.",
    "memoryCode": "🎵 [Karma Gramer]: Needn't have V3 = Gerek yoktu ama yaptın.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-34",
    "topicSlug": "conditionals",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "------- the global financial market recovers, investors will continue to seek refuge in ------- gold and silver.",
    "options": [
      "As long as / an",
      "Because / a",
      "In case / the",
      "Although / the",
      "Unless / Ø"
    ],
    "answer": 4,
    "explanation": "Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
    "distractorAnalysis": {
      "A": "'As long as / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Because / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'In case / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Although / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø)."
    },
    "tactic": "Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "memoryCode": "🎵 [Karma Gramer]: Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-35",
    "topicSlug": "comparatives",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The new high-speed electric locomotive runs far ------- than older diesel models, consuming ------- energy per passenger.",
    "options": [
      "quietly / fewer",
      "quiet / much",
      "most quietly / little",
      "more quietly / less",
      "more quiet / least"
    ],
    "answer": 3,
    "explanation": "Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
    "distractorAnalysis": {
      "A": "'quietly / fewer' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'quiet / much' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'most quietly / little' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
      "E": "'more quiet / least' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Run + more quietly than; less energy.",
    "memoryCode": "🎵 [Karma Gramer]: Run + more quietly than; less energy.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-36",
    "topicSlug": "noun-clauses",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The clinical panel investigated ------- the sudden surge in neurological diagnoses was ------- environmental pollutants.",
    "options": [
      "whether / due to",
      "which / as well as",
      "that / in spite of",
      "how / contrary to",
      "what / rather than"
    ],
    "answer": 0,
    "explanation": "Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
    "distractorAnalysis": {
      "A": "DOĞRU: Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
      "B": "'which / as well as' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'that / in spite of' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'how / contrary to' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'what / rather than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Investigate + whether; due to = -den kaynaklanan.",
    "memoryCode": "🎵 [Karma Gramer]: Investigate + whether; due to = -den kaynaklanan.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-37",
    "topicSlug": "inversion",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Under no circumstances ------- researchers modify experimental datasets without ------- formal written authorization.",
    "options": [
      "should / obtaining",
      "must have / obtained",
      "ought / to obtain",
      "would / obtain",
      "have / having obtained"
    ],
    "answer": 0,
    "explanation": "'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
      "B": "'must have / obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'ought / to obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'would / obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'have / having obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Under no circumstances + should + S + V1; without + V-ing.",
    "memoryCode": "🎵 [Karma Gramer]: Under no circumstances + should + S + V1; without + V-ing.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-38",
    "topicSlug": "causatives",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The university had the entire library archive ------- by specialized digital technicians to ------- rare manuscripts.",
    "options": [
      "being digitized / preserve",
      "digitizing / to preserve",
      "digitize / preserving",
      "to digitize / preserved",
      "digitized / preserve"
    ],
    "answer": 4,
    "explanation": "'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
    "distractorAnalysis": {
      "A": "'being digitized / preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'digitizing / to preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'digitize / preserving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'to digitize / preserved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için)."
    },
    "tactic": "Have + nesne + V3; to V1 (amaç).",
    "memoryCode": "🎵 [Karma Gramer]: Have + nesne + V3; to V1 (amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-39",
    "topicSlug": "determiners",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "------- many students registered for the introductory chemistry course that the department had to open an extra section.",
    "options": [
      "Such",
      "Too",
      "As",
      "So",
      "Very"
    ],
    "answer": 3,
    "explanation": "'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
    "distractorAnalysis": {
      "A": "'Such' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Too' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'As' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
      "E": "'Very' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "So many / so much ... THAT! (Such a lot of).",
    "memoryCode": "🎵 [Karma Gramer]: So many / so much ... THAT! (Such a lot of).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-40",
    "topicSlug": "phrasal-verbs",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The company decided to ------- several inefficient regional branches in order to ------- operating costs during the crisis.",
    "options": [
      "close down / curtail",
      "look into / enhance",
      "carry out / elevate",
      "put up with / maximize",
      "bring about / augment"
    ],
    "answer": 0,
    "explanation": "Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
    "distractorAnalysis": {
      "A": "DOĞRU: Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
      "B": "'look into / enhance' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'carry out / elevate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'put up with / maximize' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'bring about / augment' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Close down a branch; curtail costs.",
    "memoryCode": "🎵 [Karma Gramer]: Close down a branch; curtail costs.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-41",
    "topicSlug": "articles",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The Amazon basin is ------- home to thousands of indigenous tribes, ------- language and customs are completely unique.",
    "options": [
      "a / that",
      "the / where",
      "Ø / whose",
      "an / whom",
      "the / which"
    ],
    "answer": 2,
    "explanation": "'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
    "distractorAnalysis": {
      "A": "'a / that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'the / where' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
      "D": "'an / whom' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'the / which' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Be home to (Ø); tribes whose language...",
    "memoryCode": "🎵 [Karma Gramer]: Be home to (Ø); tribes whose language...",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-42",
    "topicSlug": "adverbial-clauses",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "------- progress has been made in quantum computing, several foundational hardware bottlenecks remain -------.",
    "options": [
      "Because / resolved",
      "Since / solving",
      "Unless / resolution",
      "In case / to resolve",
      "Although / unresolved"
    ],
    "answer": 4,
    "explanation": "İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
    "distractorAnalysis": {
      "A": "'Because / resolved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Since / solving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Unless / resolution' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'In case / to resolve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır."
    },
    "tactic": "Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "memoryCode": "🎵 [Karma Gramer]: Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-43",
    "topicSlug": "perfect-modals",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The criminal suspect ------- the theft because reliable airport security cameras recorded him in Berlin at that exact moment.",
    "options": [
      "should commit",
      "needn't commit",
      "cannot have committed",
      "might have committed",
      "must have committed"
    ],
    "answer": 2,
    "explanation": "Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
    "distractorAnalysis": {
      "A": "'should commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'needn't commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
      "D": "'might have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'must have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Cannot / Couldn't have V3 = Yapmış olamaz.",
    "memoryCode": "🎵 [Karma Gramer]: Cannot / Couldn't have V3 = Yapmış olamaz.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-44",
    "topicSlug": "conjunctions",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The local municipality decided to construct a bypass road ------- heavy freight trucks would not congest residential streets.",
    "options": [
      "so that",
      "provided that",
      "in case",
      "unless",
      "lest"
    ],
    "answer": 0,
    "explanation": "Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
    "distractorAnalysis": {
      "A": "DOĞRU: Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
      "B": "'provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'in case' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'lest' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "So that + modal = -sın diye (Amaç).",
    "memoryCode": "🎵 [Karma Gramer]: So that + modal = -sın diye (Amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-45",
    "topicSlug": "inversion",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Rarely ------- an author capture the psychological complexities of wartime trauma with such profound sensitivity.",
    "options": [
      "has",
      "did",
      "is",
      "does",
      "was"
    ],
    "answer": 3,
    "explanation": "'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
    "distractorAnalysis": {
      "A": "'has' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'did' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
      "E": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Rarely + does + S + V1.",
    "memoryCode": "🎵 [Karma Gramer]: Rarely + does + S + V1.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-46",
    "topicSlug": "tenses",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "By the end of this decade, marine renewable energy technologies ------- into mainstream commercial grids across Europe.",
    "options": [
      "will have been integrated",
      "have been integrated",
      "will integrate",
      "were integrated",
      "are integrated"
    ],
    "answer": 0,
    "explanation": "'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
      "B": "'have been integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'will integrate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'were integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'are integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "By + Gelecek zaman + Pasif = will have been + V3.",
    "memoryCode": "🎵 [Karma Gramer]: By + Gelecek zaman + Pasif = will have been + V3.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-47",
    "topicSlug": "gerunds-infinitives",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The research team succeeded in ------- the rare enzyme after ------- multiple biochemical assays in the laboratory.",
    "options": [
      "synthesizing / conducting",
      "synthesized / conducted",
      "synthesize / to conduct",
      "having synthesized / conduct",
      "to synthesize / conduct"
    ],
    "answer": 0,
    "explanation": "Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
    "distractorAnalysis": {
      "A": "DOĞRU: Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
      "B": "'synthesized / conducted' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'synthesize / to conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'having synthesized / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'to synthesize / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Preposition + V-ing kuralı.",
    "memoryCode": "🎵 [Karma Gramer]: Preposition + V-ing kuralı.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-48",
    "topicSlug": "determiners",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Neither the university chancellor nor the faculty deans ------- prepared to compromise on the revised academic standards.",
    "options": [
      "was",
      "be",
      "is",
      "has been",
      "were"
    ],
    "answer": 4,
    "explanation": "'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
    "distractorAnalysis": {
      "A": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'be' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'has been' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were')."
    },
    "tactic": "Neither ... nor en yakın özneye bakar!",
    "memoryCode": "🎵 [Karma Gramer]: Neither ... nor en yakın özneye bakar!",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-49",
    "topicSlug": "adverbial-clauses",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "------- the economic inflation continued to soar, the central bank decided to raise benchmark lending rates.",
    "options": [
      "As",
      "Although",
      "Even if",
      "Unless",
      "Whereas"
    ],
    "answer": 0,
    "explanation": "Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
    "distractorAnalysis": {
      "A": "DOĞRU: Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
      "B": "'Although' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Even if' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Whereas' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "As = -dıkça / çünkü.",
    "memoryCode": "🎵 [Karma Gramer]: As = -dıkça / çünkü.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-50",
    "topicSlug": "determiners",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The government launched a public campaign to ensure that ------- citizen had equal access to high-speed digital infrastructure.",
    "options": [
      "every",
      "many",
      "both",
      "all",
      "several"
    ],
    "answer": 0,
    "explanation": "Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
    "distractorAnalysis": {
      "A": "DOĞRU: Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
      "B": "'many' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'both' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'all' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'several' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Every + Tekil isim.",
    "memoryCode": "🎵 [Karma Gramer]: Every + Tekil isim.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-51",
    "topicSlug": "tenses",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Although the committee members ------- the proposal thoroughly yesterday, they decided ------- their final vote until next week.",
    "options": [
      "had reviewed / postponing",
      "were reviewing / postponed",
      "have reviewed / to postpone",
      "review / postpone",
      "reviewed / to postpone"
    ],
    "answer": 4,
    "explanation": "'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
    "distractorAnalysis": {
      "A": "'had reviewed / postponing' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'were reviewing / postponed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'have reviewed / to postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'review / postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir."
    },
    "tactic": "Yesterday -> V2; decide -> to V1.",
    "memoryCode": "🎵 [Karma Gramer]: Yesterday -> V2; decide -> to V1.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-52",
    "topicSlug": "passive-voice",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The ancient temple, ------- by archaeologists last year, is widely believed ------- by a powerful volcanic eruption.",
    "options": [
      "having discovered / destroyed",
      "discovered / to have been destroyed",
      "was discovered / to be destroyed",
      "discovered / destroying",
      "discovering / to destroy"
    ],
    "answer": 1,
    "explanation": "İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
    "distractorAnalysis": {
      "A": "'having discovered / destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
      "C": "'was discovered / to be destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'discovered / destroying' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'discovering / to destroy' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "V3 niteleme + is believed to have been V3.",
    "memoryCode": "🎵 [Karma Gramer]: V3 niteleme + is believed to have been V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-53",
    "topicSlug": "conjunctions",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "------- the torrential storm damaged the transmission towers, technicians managed to restore power ------- a few hours.",
    "options": [
      "In case / through",
      "Even though / within",
      "Because / at",
      "Unless / for",
      "Since / on"
    ],
    "answer": 1,
    "explanation": "Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
    "distractorAnalysis": {
      "A": "'In case / through' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
      "C": "'Because / at' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Unless / for' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Since / on' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "memoryCode": "🎵 [Karma Gramer]: Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-54",
    "topicSlug": "conditionals",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Had the emergency medical team ------- immediately, the patient's critical condition ------- so drastically.",
    "options": [
      "arrived / had not deteriorated",
      "had arrived / would not deteriorate",
      "arrived / would not have deteriorated",
      "arrive / did not deteriorate",
      "been arrived / was not deteriorated"
    ],
    "answer": 2,
    "explanation": "Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
    "distractorAnalysis": {
      "A": "'arrived / had not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'had arrived / would not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
      "D": "'arrive / did not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'been arrived / was not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Had + S + V3 -> would have V3.",
    "memoryCode": "🎵 [Karma Gramer]: Had + S + V3 -> would have V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-55",
    "topicSlug": "gerunds-infinitives",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The laboratory supervisor insisted on ------- the chemical containers carefully ------- any toxic leakage should occur.",
    "options": [
      "inspecting / lest",
      "having inspected / provided that",
      "inspected / unless",
      "inspect / in order that",
      "to inspect / so that"
    ],
    "answer": 0,
    "explanation": "'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
      "B": "'having inspected / provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'inspected / unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'inspect / in order that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'to inspect / so that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Insist on + V-ing; lest + should/yalın fiil.",
    "memoryCode": "🎵 [Karma Gramer]: Insist on + V-ing; lest + should/yalın fiil.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-56",
    "topicSlug": "inversion",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "------- had the international peace treaty been signed ------- border skirmishes erupted once again.",
    "options": [
      "Neither / nor",
      "Scarcely / when",
      "Not only / but also",
      "Hardly / than",
      "No sooner / than"
    ],
    "answer": 1,
    "explanation": "'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
    "distractorAnalysis": {
      "A": "'Neither / nor' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
      "C": "'Not only / but also' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Hardly / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'No sooner / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Scarcely ... WHEN! (No sooner ... THAN).",
    "memoryCode": "🎵 [Karma Gramer]: Scarcely ... WHEN! (No sooner ... THAN).",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-57",
    "topicSlug": "relative-clauses",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The distinguished astrophysicist, ------- research into dark matter revolutionized cosmology, received ------- award yesterday.",
    "options": [
      "whose / an",
      "who / the",
      "which / a",
      "that / Ø",
      "whom / an"
    ],
    "answer": 0,
    "explanation": "Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
    "distractorAnalysis": {
      "A": "DOĞRU: Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
      "B": "'who / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'which / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'that / Ø' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'whom / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "İsim + whose + isim; an award.",
    "memoryCode": "🎵 [Karma Gramer]: İsim + whose + isim; an award.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-58",
    "topicSlug": "perfect-modals",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "You ------- all that heavy reference material to class this morning; the teacher uploaded digital copies -------.",
    "options": [
      "would rather bring / therefore",
      "needn't have brought / instead",
      "must not bring / furthermore",
      "should have brought / otherwise",
      "could not bring / nevertheless"
    ],
    "answer": 1,
    "explanation": "Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
    "distractorAnalysis": {
      "A": "'would rather bring / therefore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
      "C": "'must not bring / furthermore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'should have brought / otherwise' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'could not bring / nevertheless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Needn't have V3 = Gerek yoktu ama yaptın.",
    "memoryCode": "🎵 [Karma Gramer]: Needn't have V3 = Gerek yoktu ama yaptın.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-59",
    "topicSlug": "conditionals",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "------- the global financial market recovers, investors will continue to seek refuge in ------- gold and silver.",
    "options": [
      "Although / the",
      "As long as / an",
      "In case / the",
      "Unless / Ø",
      "Because / a"
    ],
    "answer": 3,
    "explanation": "Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
    "distractorAnalysis": {
      "A": "'Although / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'As long as / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'In case / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
      "E": "'Because / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "memoryCode": "🎵 [Karma Gramer]: Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-60",
    "topicSlug": "comparatives",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The new high-speed electric locomotive runs far ------- than older diesel models, consuming ------- energy per passenger.",
    "options": [
      "more quiet / least",
      "quietly / fewer",
      "most quietly / little",
      "more quietly / less",
      "quiet / much"
    ],
    "answer": 3,
    "explanation": "Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
    "distractorAnalysis": {
      "A": "'more quiet / least' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'quietly / fewer' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'most quietly / little' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
      "E": "'quiet / much' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Run + more quietly than; less energy.",
    "memoryCode": "🎵 [Karma Gramer]: Run + more quietly than; less energy.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-61",
    "topicSlug": "noun-clauses",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The clinical panel investigated ------- the sudden surge in neurological diagnoses was ------- environmental pollutants.",
    "options": [
      "which / as well as",
      "whether / due to",
      "how / contrary to",
      "that / in spite of",
      "what / rather than"
    ],
    "answer": 1,
    "explanation": "Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
    "distractorAnalysis": {
      "A": "'which / as well as' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
      "C": "'how / contrary to' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'that / in spite of' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'what / rather than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Investigate + whether; due to = -den kaynaklanan.",
    "memoryCode": "🎵 [Karma Gramer]: Investigate + whether; due to = -den kaynaklanan.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-62",
    "topicSlug": "inversion",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Under no circumstances ------- researchers modify experimental datasets without ------- formal written authorization.",
    "options": [
      "must have / obtained",
      "have / having obtained",
      "should / obtaining",
      "ought / to obtain",
      "would / obtain"
    ],
    "answer": 2,
    "explanation": "'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
    "distractorAnalysis": {
      "A": "'must have / obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'have / having obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
      "D": "'ought / to obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'would / obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Under no circumstances + should + S + V1; without + V-ing.",
    "memoryCode": "🎵 [Karma Gramer]: Under no circumstances + should + S + V1; without + V-ing.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-63",
    "topicSlug": "causatives",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The university had the entire library archive ------- by specialized digital technicians to ------- rare manuscripts.",
    "options": [
      "digitize / preserving",
      "digitizing / to preserve",
      "to digitize / preserved",
      "digitized / preserve",
      "being digitized / preserve"
    ],
    "answer": 3,
    "explanation": "'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
    "distractorAnalysis": {
      "A": "'digitize / preserving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'digitizing / to preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'to digitize / preserved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
      "E": "'being digitized / preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Have + nesne + V3; to V1 (amaç).",
    "memoryCode": "🎵 [Karma Gramer]: Have + nesne + V3; to V1 (amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-64",
    "topicSlug": "determiners",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "------- many students registered for the introductory chemistry course that the department had to open an extra section.",
    "options": [
      "So",
      "Such",
      "As",
      "Too",
      "Very"
    ],
    "answer": 0,
    "explanation": "'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
    "distractorAnalysis": {
      "A": "DOĞRU: 'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
      "B": "'Such' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'As' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Too' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Very' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "So many / so much ... THAT! (Such a lot of).",
    "memoryCode": "🎵 [Karma Gramer]: So many / so much ... THAT! (Such a lot of).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-65",
    "topicSlug": "phrasal-verbs",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The company decided to ------- several inefficient regional branches in order to ------- operating costs during the crisis.",
    "options": [
      "put up with / maximize",
      "bring about / augment",
      "look into / enhance",
      "close down / curtail",
      "carry out / elevate"
    ],
    "answer": 3,
    "explanation": "Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
    "distractorAnalysis": {
      "A": "'put up with / maximize' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'bring about / augment' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'look into / enhance' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
      "E": "'carry out / elevate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Close down a branch; curtail costs.",
    "memoryCode": "🎵 [Karma Gramer]: Close down a branch; curtail costs.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-66",
    "topicSlug": "articles",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The Amazon basin is ------- home to thousands of indigenous tribes, ------- language and customs are completely unique.",
    "options": [
      "the / which",
      "an / whom",
      "Ø / whose",
      "a / that",
      "the / where"
    ],
    "answer": 2,
    "explanation": "'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
    "distractorAnalysis": {
      "A": "'the / which' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'an / whom' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
      "D": "'a / that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'the / where' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Be home to (Ø); tribes whose language...",
    "memoryCode": "🎵 [Karma Gramer]: Be home to (Ø); tribes whose language...",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-67",
    "topicSlug": "adverbial-clauses",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "------- progress has been made in quantum computing, several foundational hardware bottlenecks remain -------.",
    "options": [
      "Although / unresolved",
      "Because / resolved",
      "In case / to resolve",
      "Unless / resolution",
      "Since / solving"
    ],
    "answer": 0,
    "explanation": "İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
    "distractorAnalysis": {
      "A": "DOĞRU: İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
      "B": "'Because / resolved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'In case / to resolve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Unless / resolution' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Since / solving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "memoryCode": "🎵 [Karma Gramer]: Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-68",
    "topicSlug": "perfect-modals",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The criminal suspect ------- the theft because reliable airport security cameras recorded him in Berlin at that exact moment.",
    "options": [
      "must have committed",
      "should commit",
      "might have committed",
      "cannot have committed",
      "needn't commit"
    ],
    "answer": 3,
    "explanation": "Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
    "distractorAnalysis": {
      "A": "'must have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'should commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'might have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
      "E": "'needn't commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Cannot / Couldn't have V3 = Yapmış olamaz.",
    "memoryCode": "🎵 [Karma Gramer]: Cannot / Couldn't have V3 = Yapmış olamaz.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-69",
    "topicSlug": "conjunctions",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The local municipality decided to construct a bypass road ------- heavy freight trucks would not congest residential streets.",
    "options": [
      "lest",
      "so that",
      "in case",
      "unless",
      "provided that"
    ],
    "answer": 1,
    "explanation": "Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
    "distractorAnalysis": {
      "A": "'lest' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
      "C": "'in case' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "So that + modal = -sın diye (Amaç).",
    "memoryCode": "🎵 [Karma Gramer]: So that + modal = -sın diye (Amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-70",
    "topicSlug": "inversion",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Rarely ------- an author capture the psychological complexities of wartime trauma with such profound sensitivity.",
    "options": [
      "has",
      "did",
      "does",
      "was",
      "is"
    ],
    "answer": 2,
    "explanation": "'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
    "distractorAnalysis": {
      "A": "'has' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'did' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
      "D": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Rarely + does + S + V1.",
    "memoryCode": "🎵 [Karma Gramer]: Rarely + does + S + V1.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-71",
    "topicSlug": "tenses",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "By the end of this decade, marine renewable energy technologies ------- into mainstream commercial grids across Europe.",
    "options": [
      "will have been integrated",
      "were integrated",
      "are integrated",
      "will integrate",
      "have been integrated"
    ],
    "answer": 0,
    "explanation": "'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
      "B": "'were integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'are integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'will integrate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'have been integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "By + Gelecek zaman + Pasif = will have been + V3.",
    "memoryCode": "🎵 [Karma Gramer]: By + Gelecek zaman + Pasif = will have been + V3.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-72",
    "topicSlug": "gerunds-infinitives",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The research team succeeded in ------- the rare enzyme after ------- multiple biochemical assays in the laboratory.",
    "options": [
      "synthesize / to conduct",
      "to synthesize / conduct",
      "synthesizing / conducting",
      "synthesized / conducted",
      "having synthesized / conduct"
    ],
    "answer": 2,
    "explanation": "Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
    "distractorAnalysis": {
      "A": "'synthesize / to conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'to synthesize / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
      "D": "'synthesized / conducted' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'having synthesized / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Preposition + V-ing kuralı.",
    "memoryCode": "🎵 [Karma Gramer]: Preposition + V-ing kuralı.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-73",
    "topicSlug": "determiners",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Neither the university chancellor nor the faculty deans ------- prepared to compromise on the revised academic standards.",
    "options": [
      "were",
      "has been",
      "is",
      "be",
      "was"
    ],
    "answer": 0,
    "explanation": "'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
      "B": "'has been' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'be' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Neither ... nor en yakın özneye bakar!",
    "memoryCode": "🎵 [Karma Gramer]: Neither ... nor en yakın özneye bakar!",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-74",
    "topicSlug": "adverbial-clauses",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "------- the economic inflation continued to soar, the central bank decided to raise benchmark lending rates.",
    "options": [
      "Even if",
      "Unless",
      "Although",
      "Whereas",
      "As"
    ],
    "answer": 4,
    "explanation": "Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
    "distractorAnalysis": {
      "A": "'Even if' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Although' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Whereas' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir."
    },
    "tactic": "As = -dıkça / çünkü.",
    "memoryCode": "🎵 [Karma Gramer]: As = -dıkça / çünkü.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-75",
    "topicSlug": "determiners",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The government launched a public campaign to ensure that ------- citizen had equal access to high-speed digital infrastructure.",
    "options": [
      "several",
      "both",
      "every",
      "all",
      "many"
    ],
    "answer": 2,
    "explanation": "Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
    "distractorAnalysis": {
      "A": "'several' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'both' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
      "D": "'all' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'many' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Every + Tekil isim.",
    "memoryCode": "🎵 [Karma Gramer]: Every + Tekil isim.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-76",
    "topicSlug": "tenses",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Although the committee members ------- the proposal thoroughly yesterday, they decided ------- their final vote until next week.",
    "options": [
      "reviewed / to postpone",
      "have reviewed / to postpone",
      "were reviewing / postponed",
      "review / postpone",
      "had reviewed / postponing"
    ],
    "answer": 0,
    "explanation": "'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
      "B": "'have reviewed / to postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'were reviewing / postponed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'review / postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'had reviewed / postponing' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Yesterday -> V2; decide -> to V1.",
    "memoryCode": "🎵 [Karma Gramer]: Yesterday -> V2; decide -> to V1.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-77",
    "topicSlug": "passive-voice",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The ancient temple, ------- by archaeologists last year, is widely believed ------- by a powerful volcanic eruption.",
    "options": [
      "having discovered / destroyed",
      "discovered / destroying",
      "discovered / to have been destroyed",
      "discovering / to destroy",
      "was discovered / to be destroyed"
    ],
    "answer": 2,
    "explanation": "İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
    "distractorAnalysis": {
      "A": "'having discovered / destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'discovered / destroying' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
      "D": "'discovering / to destroy' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'was discovered / to be destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "V3 niteleme + is believed to have been V3.",
    "memoryCode": "🎵 [Karma Gramer]: V3 niteleme + is believed to have been V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-78",
    "topicSlug": "conjunctions",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "------- the torrential storm damaged the transmission towers, technicians managed to restore power ------- a few hours.",
    "options": [
      "Unless / for",
      "Because / at",
      "Since / on",
      "Even though / within",
      "In case / through"
    ],
    "answer": 3,
    "explanation": "Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
    "distractorAnalysis": {
      "A": "'Unless / for' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Because / at' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Since / on' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
      "E": "'In case / through' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "memoryCode": "🎵 [Karma Gramer]: Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-79",
    "topicSlug": "conditionals",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Had the emergency medical team ------- immediately, the patient's critical condition ------- so drastically.",
    "options": [
      "arrive / did not deteriorate",
      "arrived / would not have deteriorated",
      "had arrived / would not deteriorate",
      "arrived / had not deteriorated",
      "been arrived / was not deteriorated"
    ],
    "answer": 1,
    "explanation": "Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
    "distractorAnalysis": {
      "A": "'arrive / did not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
      "C": "'had arrived / would not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'arrived / had not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'been arrived / was not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Had + S + V3 -> would have V3.",
    "memoryCode": "🎵 [Karma Gramer]: Had + S + V3 -> would have V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-80",
    "topicSlug": "gerunds-infinitives",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The laboratory supervisor insisted on ------- the chemical containers carefully ------- any toxic leakage should occur.",
    "options": [
      "having inspected / provided that",
      "to inspect / so that",
      "inspect / in order that",
      "inspected / unless",
      "inspecting / lest"
    ],
    "answer": 4,
    "explanation": "'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
    "distractorAnalysis": {
      "A": "'having inspected / provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'to inspect / so that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'inspect / in order that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'inspected / unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır."
    },
    "tactic": "Insist on + V-ing; lest + should/yalın fiil.",
    "memoryCode": "🎵 [Karma Gramer]: Insist on + V-ing; lest + should/yalın fiil.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-81",
    "topicSlug": "inversion",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "------- had the international peace treaty been signed ------- border skirmishes erupted once again.",
    "options": [
      "Not only / but also",
      "Scarcely / when",
      "Hardly / than",
      "Neither / nor",
      "No sooner / than"
    ],
    "answer": 1,
    "explanation": "'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
    "distractorAnalysis": {
      "A": "'Not only / but also' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
      "C": "'Hardly / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Neither / nor' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'No sooner / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Scarcely ... WHEN! (No sooner ... THAN).",
    "memoryCode": "🎵 [Karma Gramer]: Scarcely ... WHEN! (No sooner ... THAN).",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-82",
    "topicSlug": "relative-clauses",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The distinguished astrophysicist, ------- research into dark matter revolutionized cosmology, received ------- award yesterday.",
    "options": [
      "that / Ø",
      "whose / an",
      "whom / an",
      "who / the",
      "which / a"
    ],
    "answer": 1,
    "explanation": "Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
    "distractorAnalysis": {
      "A": "'that / Ø' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
      "C": "'whom / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'who / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'which / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "İsim + whose + isim; an award.",
    "memoryCode": "🎵 [Karma Gramer]: İsim + whose + isim; an award.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-83",
    "topicSlug": "perfect-modals",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "You ------- all that heavy reference material to class this morning; the teacher uploaded digital copies -------.",
    "options": [
      "could not bring / nevertheless",
      "should have brought / otherwise",
      "would rather bring / therefore",
      "must not bring / furthermore",
      "needn't have brought / instead"
    ],
    "answer": 4,
    "explanation": "Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
    "distractorAnalysis": {
      "A": "'could not bring / nevertheless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'should have brought / otherwise' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'would rather bring / therefore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'must not bring / furthermore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır."
    },
    "tactic": "Needn't have V3 = Gerek yoktu ama yaptın.",
    "memoryCode": "🎵 [Karma Gramer]: Needn't have V3 = Gerek yoktu ama yaptın.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-84",
    "topicSlug": "conditionals",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "------- the global financial market recovers, investors will continue to seek refuge in ------- gold and silver.",
    "options": [
      "In case / the",
      "Although / the",
      "As long as / an",
      "Unless / Ø",
      "Because / a"
    ],
    "answer": 3,
    "explanation": "Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
    "distractorAnalysis": {
      "A": "'In case / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Although / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'As long as / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
      "E": "'Because / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "memoryCode": "🎵 [Karma Gramer]: Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-85",
    "topicSlug": "comparatives",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The new high-speed electric locomotive runs far ------- than older diesel models, consuming ------- energy per passenger.",
    "options": [
      "more quietly / less",
      "quiet / much",
      "quietly / fewer",
      "most quietly / little",
      "more quiet / least"
    ],
    "answer": 0,
    "explanation": "Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
    "distractorAnalysis": {
      "A": "DOĞRU: Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
      "B": "'quiet / much' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'quietly / fewer' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'most quietly / little' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'more quiet / least' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Run + more quietly than; less energy.",
    "memoryCode": "🎵 [Karma Gramer]: Run + more quietly than; less energy.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-86",
    "topicSlug": "noun-clauses",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The clinical panel investigated ------- the sudden surge in neurological diagnoses was ------- environmental pollutants.",
    "options": [
      "which / as well as",
      "how / contrary to",
      "that / in spite of",
      "what / rather than",
      "whether / due to"
    ],
    "answer": 4,
    "explanation": "Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
    "distractorAnalysis": {
      "A": "'which / as well as' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'how / contrary to' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'that / in spite of' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'what / rather than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar."
    },
    "tactic": "Investigate + whether; due to = -den kaynaklanan.",
    "memoryCode": "🎵 [Karma Gramer]: Investigate + whether; due to = -den kaynaklanan.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-87",
    "topicSlug": "inversion",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Under no circumstances ------- researchers modify experimental datasets without ------- formal written authorization.",
    "options": [
      "ought / to obtain",
      "have / having obtained",
      "would / obtain",
      "should / obtaining",
      "must have / obtained"
    ],
    "answer": 3,
    "explanation": "'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
    "distractorAnalysis": {
      "A": "'ought / to obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'have / having obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'would / obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
      "E": "'must have / obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Under no circumstances + should + S + V1; without + V-ing.",
    "memoryCode": "🎵 [Karma Gramer]: Under no circumstances + should + S + V1; without + V-ing.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-88",
    "topicSlug": "causatives",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The university had the entire library archive ------- by specialized digital technicians to ------- rare manuscripts.",
    "options": [
      "being digitized / preserve",
      "digitized / preserve",
      "digitize / preserving",
      "to digitize / preserved",
      "digitizing / to preserve"
    ],
    "answer": 1,
    "explanation": "'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
    "distractorAnalysis": {
      "A": "'being digitized / preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
      "C": "'digitize / preserving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'to digitize / preserved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'digitizing / to preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Have + nesne + V3; to V1 (amaç).",
    "memoryCode": "🎵 [Karma Gramer]: Have + nesne + V3; to V1 (amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-89",
    "topicSlug": "determiners",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "------- many students registered for the introductory chemistry course that the department had to open an extra section.",
    "options": [
      "Too",
      "Very",
      "Such",
      "As",
      "So"
    ],
    "answer": 4,
    "explanation": "'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
    "distractorAnalysis": {
      "A": "'Too' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Very' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Such' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'As' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...)."
    },
    "tactic": "So many / so much ... THAT! (Such a lot of).",
    "memoryCode": "🎵 [Karma Gramer]: So many / so much ... THAT! (Such a lot of).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-90",
    "topicSlug": "phrasal-verbs",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The company decided to ------- several inefficient regional branches in order to ------- operating costs during the crisis.",
    "options": [
      "carry out / elevate",
      "close down / curtail",
      "bring about / augment",
      "put up with / maximize",
      "look into / enhance"
    ],
    "answer": 1,
    "explanation": "Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
    "distractorAnalysis": {
      "A": "'carry out / elevate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
      "C": "'bring about / augment' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'put up with / maximize' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'look into / enhance' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Close down a branch; curtail costs.",
    "memoryCode": "🎵 [Karma Gramer]: Close down a branch; curtail costs.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-91",
    "topicSlug": "articles",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The Amazon basin is ------- home to thousands of indigenous tribes, ------- language and customs are completely unique.",
    "options": [
      "a / that",
      "the / where",
      "an / whom",
      "Ø / whose",
      "the / which"
    ],
    "answer": 3,
    "explanation": "'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
    "distractorAnalysis": {
      "A": "'a / that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'the / where' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'an / whom' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
      "E": "'the / which' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Be home to (Ø); tribes whose language...",
    "memoryCode": "🎵 [Karma Gramer]: Be home to (Ø); tribes whose language...",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-92",
    "topicSlug": "adverbial-clauses",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "------- progress has been made in quantum computing, several foundational hardware bottlenecks remain -------.",
    "options": [
      "In case / to resolve",
      "Since / solving",
      "Because / resolved",
      "Although / unresolved",
      "Unless / resolution"
    ],
    "answer": 3,
    "explanation": "İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
    "distractorAnalysis": {
      "A": "'In case / to resolve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Since / solving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Because / resolved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
      "E": "'Unless / resolution' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "memoryCode": "🎵 [Karma Gramer]: Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-93",
    "topicSlug": "perfect-modals",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The criminal suspect ------- the theft because reliable airport security cameras recorded him in Berlin at that exact moment.",
    "options": [
      "might have committed",
      "needn't commit",
      "should commit",
      "cannot have committed",
      "must have committed"
    ],
    "answer": 3,
    "explanation": "Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
    "distractorAnalysis": {
      "A": "'might have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'needn't commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'should commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
      "E": "'must have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Cannot / Couldn't have V3 = Yapmış olamaz.",
    "memoryCode": "🎵 [Karma Gramer]: Cannot / Couldn't have V3 = Yapmış olamaz.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-94",
    "topicSlug": "conjunctions",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The local municipality decided to construct a bypass road ------- heavy freight trucks would not congest residential streets.",
    "options": [
      "so that",
      "provided that",
      "unless",
      "in case",
      "lest"
    ],
    "answer": 0,
    "explanation": "Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
    "distractorAnalysis": {
      "A": "DOĞRU: Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
      "B": "'provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'in case' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'lest' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "So that + modal = -sın diye (Amaç).",
    "memoryCode": "🎵 [Karma Gramer]: So that + modal = -sın diye (Amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-95",
    "topicSlug": "inversion",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Rarely ------- an author capture the psychological complexities of wartime trauma with such profound sensitivity.",
    "options": [
      "does",
      "has",
      "did",
      "was",
      "is"
    ],
    "answer": 0,
    "explanation": "'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
      "B": "'has' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'did' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Rarely + does + S + V1.",
    "memoryCode": "🎵 [Karma Gramer]: Rarely + does + S + V1.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-96",
    "topicSlug": "tenses",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "By the end of this decade, marine renewable energy technologies ------- into mainstream commercial grids across Europe.",
    "options": [
      "will have been integrated",
      "are integrated",
      "have been integrated",
      "were integrated",
      "will integrate"
    ],
    "answer": 0,
    "explanation": "'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
      "B": "'are integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'have been integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'were integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'will integrate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "By + Gelecek zaman + Pasif = will have been + V3.",
    "memoryCode": "🎵 [Karma Gramer]: By + Gelecek zaman + Pasif = will have been + V3.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-97",
    "topicSlug": "gerunds-infinitives",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The research team succeeded in ------- the rare enzyme after ------- multiple biochemical assays in the laboratory.",
    "options": [
      "synthesize / to conduct",
      "synthesizing / conducting",
      "to synthesize / conduct",
      "synthesized / conducted",
      "having synthesized / conduct"
    ],
    "answer": 1,
    "explanation": "Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
    "distractorAnalysis": {
      "A": "'synthesize / to conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
      "C": "'to synthesize / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'synthesized / conducted' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'having synthesized / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Preposition + V-ing kuralı.",
    "memoryCode": "🎵 [Karma Gramer]: Preposition + V-ing kuralı.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-98",
    "topicSlug": "determiners",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Neither the university chancellor nor the faculty deans ------- prepared to compromise on the revised academic standards.",
    "options": [
      "were",
      "was",
      "be",
      "is",
      "has been"
    ],
    "answer": 0,
    "explanation": "'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
      "B": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'be' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'has been' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Neither ... nor en yakın özneye bakar!",
    "memoryCode": "🎵 [Karma Gramer]: Neither ... nor en yakın özneye bakar!",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-99",
    "topicSlug": "adverbial-clauses",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "------- the economic inflation continued to soar, the central bank decided to raise benchmark lending rates.",
    "options": [
      "As",
      "Although",
      "Unless",
      "Whereas",
      "Even if"
    ],
    "answer": 0,
    "explanation": "Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
    "distractorAnalysis": {
      "A": "DOĞRU: Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
      "B": "'Although' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Whereas' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Even if' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "As = -dıkça / çünkü.",
    "memoryCode": "🎵 [Karma Gramer]: As = -dıkça / çünkü.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-100",
    "topicSlug": "determiners",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The government launched a public campaign to ensure that ------- citizen had equal access to high-speed digital infrastructure.",
    "options": [
      "all",
      "both",
      "several",
      "every",
      "many"
    ],
    "answer": 3,
    "explanation": "Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
    "distractorAnalysis": {
      "A": "'all' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'both' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'several' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
      "E": "'many' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Every + Tekil isim.",
    "memoryCode": "🎵 [Karma Gramer]: Every + Tekil isim.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-101",
    "topicSlug": "tenses",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Although the committee members ------- the proposal thoroughly yesterday, they decided ------- their final vote until next week.",
    "options": [
      "reviewed / to postpone",
      "had reviewed / postponing",
      "review / postpone",
      "have reviewed / to postpone",
      "were reviewing / postponed"
    ],
    "answer": 0,
    "explanation": "'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
      "B": "'had reviewed / postponing' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'review / postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'have reviewed / to postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'were reviewing / postponed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Yesterday -> V2; decide -> to V1.",
    "memoryCode": "🎵 [Karma Gramer]: Yesterday -> V2; decide -> to V1.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-102",
    "topicSlug": "passive-voice",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The ancient temple, ------- by archaeologists last year, is widely believed ------- by a powerful volcanic eruption.",
    "options": [
      "discovered / to have been destroyed",
      "discovering / to destroy",
      "was discovered / to be destroyed",
      "discovered / destroying",
      "having discovered / destroyed"
    ],
    "answer": 0,
    "explanation": "İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
    "distractorAnalysis": {
      "A": "DOĞRU: İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
      "B": "'discovering / to destroy' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'was discovered / to be destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'discovered / destroying' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'having discovered / destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "V3 niteleme + is believed to have been V3.",
    "memoryCode": "🎵 [Karma Gramer]: V3 niteleme + is believed to have been V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-103",
    "topicSlug": "conjunctions",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "------- the torrential storm damaged the transmission towers, technicians managed to restore power ------- a few hours.",
    "options": [
      "Because / at",
      "In case / through",
      "Even though / within",
      "Since / on",
      "Unless / for"
    ],
    "answer": 2,
    "explanation": "Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
    "distractorAnalysis": {
      "A": "'Because / at' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'In case / through' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
      "D": "'Since / on' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Unless / for' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "memoryCode": "🎵 [Karma Gramer]: Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-104",
    "topicSlug": "conditionals",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Had the emergency medical team ------- immediately, the patient's critical condition ------- so drastically.",
    "options": [
      "had arrived / would not deteriorate",
      "arrived / had not deteriorated",
      "arrived / would not have deteriorated",
      "been arrived / was not deteriorated",
      "arrive / did not deteriorate"
    ],
    "answer": 2,
    "explanation": "Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
    "distractorAnalysis": {
      "A": "'had arrived / would not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'arrived / had not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
      "D": "'been arrived / was not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'arrive / did not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Had + S + V3 -> would have V3.",
    "memoryCode": "🎵 [Karma Gramer]: Had + S + V3 -> would have V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-105",
    "topicSlug": "gerunds-infinitives",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The laboratory supervisor insisted on ------- the chemical containers carefully ------- any toxic leakage should occur.",
    "options": [
      "having inspected / provided that",
      "inspected / unless",
      "inspect / in order that",
      "to inspect / so that",
      "inspecting / lest"
    ],
    "answer": 4,
    "explanation": "'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
    "distractorAnalysis": {
      "A": "'having inspected / provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'inspected / unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'inspect / in order that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'to inspect / so that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır."
    },
    "tactic": "Insist on + V-ing; lest + should/yalın fiil.",
    "memoryCode": "🎵 [Karma Gramer]: Insist on + V-ing; lest + should/yalın fiil.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-106",
    "topicSlug": "inversion",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "------- had the international peace treaty been signed ------- border skirmishes erupted once again.",
    "options": [
      "Neither / nor",
      "No sooner / than",
      "Hardly / than",
      "Not only / but also",
      "Scarcely / when"
    ],
    "answer": 4,
    "explanation": "'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
    "distractorAnalysis": {
      "A": "'Neither / nor' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'No sooner / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Hardly / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Not only / but also' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır."
    },
    "tactic": "Scarcely ... WHEN! (No sooner ... THAN).",
    "memoryCode": "🎵 [Karma Gramer]: Scarcely ... WHEN! (No sooner ... THAN).",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-107",
    "topicSlug": "relative-clauses",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The distinguished astrophysicist, ------- research into dark matter revolutionized cosmology, received ------- award yesterday.",
    "options": [
      "whose / an",
      "which / a",
      "who / the",
      "whom / an",
      "that / Ø"
    ],
    "answer": 0,
    "explanation": "Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
    "distractorAnalysis": {
      "A": "DOĞRU: Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
      "B": "'which / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'who / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'whom / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'that / Ø' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "İsim + whose + isim; an award.",
    "memoryCode": "🎵 [Karma Gramer]: İsim + whose + isim; an award.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-108",
    "topicSlug": "perfect-modals",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "You ------- all that heavy reference material to class this morning; the teacher uploaded digital copies -------.",
    "options": [
      "needn't have brought / instead",
      "would rather bring / therefore",
      "must not bring / furthermore",
      "should have brought / otherwise",
      "could not bring / nevertheless"
    ],
    "answer": 0,
    "explanation": "Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
    "distractorAnalysis": {
      "A": "DOĞRU: Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
      "B": "'would rather bring / therefore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'must not bring / furthermore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'should have brought / otherwise' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'could not bring / nevertheless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Needn't have V3 = Gerek yoktu ama yaptın.",
    "memoryCode": "🎵 [Karma Gramer]: Needn't have V3 = Gerek yoktu ama yaptın.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-109",
    "topicSlug": "conditionals",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "------- the global financial market recovers, investors will continue to seek refuge in ------- gold and silver.",
    "options": [
      "As long as / an",
      "Although / the",
      "Unless / Ø",
      "Because / a",
      "In case / the"
    ],
    "answer": 2,
    "explanation": "Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
    "distractorAnalysis": {
      "A": "'As long as / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Although / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
      "D": "'Because / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'In case / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "memoryCode": "🎵 [Karma Gramer]: Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-110",
    "topicSlug": "comparatives",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The new high-speed electric locomotive runs far ------- than older diesel models, consuming ------- energy per passenger.",
    "options": [
      "most quietly / little",
      "quietly / fewer",
      "more quietly / less",
      "quiet / much",
      "more quiet / least"
    ],
    "answer": 2,
    "explanation": "Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
    "distractorAnalysis": {
      "A": "'most quietly / little' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'quietly / fewer' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
      "D": "'quiet / much' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'more quiet / least' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Run + more quietly than; less energy.",
    "memoryCode": "🎵 [Karma Gramer]: Run + more quietly than; less energy.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-111",
    "topicSlug": "noun-clauses",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The clinical panel investigated ------- the sudden surge in neurological diagnoses was ------- environmental pollutants.",
    "options": [
      "which / as well as",
      "what / rather than",
      "that / in spite of",
      "how / contrary to",
      "whether / due to"
    ],
    "answer": 4,
    "explanation": "Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
    "distractorAnalysis": {
      "A": "'which / as well as' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'what / rather than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'that / in spite of' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'how / contrary to' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar."
    },
    "tactic": "Investigate + whether; due to = -den kaynaklanan.",
    "memoryCode": "🎵 [Karma Gramer]: Investigate + whether; due to = -den kaynaklanan.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-112",
    "topicSlug": "inversion",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Under no circumstances ------- researchers modify experimental datasets without ------- formal written authorization.",
    "options": [
      "must have / obtained",
      "should / obtaining",
      "ought / to obtain",
      "have / having obtained",
      "would / obtain"
    ],
    "answer": 1,
    "explanation": "'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
    "distractorAnalysis": {
      "A": "'must have / obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
      "C": "'ought / to obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'have / having obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'would / obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Under no circumstances + should + S + V1; without + V-ing.",
    "memoryCode": "🎵 [Karma Gramer]: Under no circumstances + should + S + V1; without + V-ing.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-113",
    "topicSlug": "causatives",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The university had the entire library archive ------- by specialized digital technicians to ------- rare manuscripts.",
    "options": [
      "digitized / preserve",
      "being digitized / preserve",
      "digitizing / to preserve",
      "digitize / preserving",
      "to digitize / preserved"
    ],
    "answer": 0,
    "explanation": "'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
      "B": "'being digitized / preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'digitizing / to preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'digitize / preserving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'to digitize / preserved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Have + nesne + V3; to V1 (amaç).",
    "memoryCode": "🎵 [Karma Gramer]: Have + nesne + V3; to V1 (amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-114",
    "topicSlug": "determiners",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "------- many students registered for the introductory chemistry course that the department had to open an extra section.",
    "options": [
      "As",
      "Such",
      "Too",
      "Very",
      "So"
    ],
    "answer": 4,
    "explanation": "'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
    "distractorAnalysis": {
      "A": "'As' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Such' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Too' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Very' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...)."
    },
    "tactic": "So many / so much ... THAT! (Such a lot of).",
    "memoryCode": "🎵 [Karma Gramer]: So many / so much ... THAT! (Such a lot of).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-115",
    "topicSlug": "phrasal-verbs",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The company decided to ------- several inefficient regional branches in order to ------- operating costs during the crisis.",
    "options": [
      "put up with / maximize",
      "carry out / elevate",
      "look into / enhance",
      "close down / curtail",
      "bring about / augment"
    ],
    "answer": 3,
    "explanation": "Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
    "distractorAnalysis": {
      "A": "'put up with / maximize' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'carry out / elevate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'look into / enhance' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
      "E": "'bring about / augment' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Close down a branch; curtail costs.",
    "memoryCode": "🎵 [Karma Gramer]: Close down a branch; curtail costs.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-116",
    "topicSlug": "articles",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The Amazon basin is ------- home to thousands of indigenous tribes, ------- language and customs are completely unique.",
    "options": [
      "the / which",
      "Ø / whose",
      "a / that",
      "the / where",
      "an / whom"
    ],
    "answer": 1,
    "explanation": "'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
    "distractorAnalysis": {
      "A": "'the / which' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
      "C": "'a / that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'the / where' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'an / whom' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Be home to (Ø); tribes whose language...",
    "memoryCode": "🎵 [Karma Gramer]: Be home to (Ø); tribes whose language...",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-117",
    "topicSlug": "adverbial-clauses",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "------- progress has been made in quantum computing, several foundational hardware bottlenecks remain -------.",
    "options": [
      "Although / unresolved",
      "In case / to resolve",
      "Since / solving",
      "Because / resolved",
      "Unless / resolution"
    ],
    "answer": 0,
    "explanation": "İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
    "distractorAnalysis": {
      "A": "DOĞRU: İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
      "B": "'In case / to resolve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Since / solving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Because / resolved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Unless / resolution' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "memoryCode": "🎵 [Karma Gramer]: Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-118",
    "topicSlug": "perfect-modals",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The criminal suspect ------- the theft because reliable airport security cameras recorded him in Berlin at that exact moment.",
    "options": [
      "cannot have committed",
      "might have committed",
      "needn't commit",
      "must have committed",
      "should commit"
    ],
    "answer": 0,
    "explanation": "Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
    "distractorAnalysis": {
      "A": "DOĞRU: Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
      "B": "'might have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'needn't commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'must have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'should commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Cannot / Couldn't have V3 = Yapmış olamaz.",
    "memoryCode": "🎵 [Karma Gramer]: Cannot / Couldn't have V3 = Yapmış olamaz.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-119",
    "topicSlug": "conjunctions",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The local municipality decided to construct a bypass road ------- heavy freight trucks would not congest residential streets.",
    "options": [
      "unless",
      "lest",
      "provided that",
      "in case",
      "so that"
    ],
    "answer": 4,
    "explanation": "Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
    "distractorAnalysis": {
      "A": "'unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'lest' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'in case' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar."
    },
    "tactic": "So that + modal = -sın diye (Amaç).",
    "memoryCode": "🎵 [Karma Gramer]: So that + modal = -sın diye (Amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-120",
    "topicSlug": "inversion",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Rarely ------- an author capture the psychological complexities of wartime trauma with such profound sensitivity.",
    "options": [
      "has",
      "does",
      "is",
      "was",
      "did"
    ],
    "answer": 1,
    "explanation": "'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
    "distractorAnalysis": {
      "A": "'has' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
      "C": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'did' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Rarely + does + S + V1.",
    "memoryCode": "🎵 [Karma Gramer]: Rarely + does + S + V1.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-121",
    "topicSlug": "tenses",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "By the end of this decade, marine renewable energy technologies ------- into mainstream commercial grids across Europe.",
    "options": [
      "have been integrated",
      "will integrate",
      "are integrated",
      "will have been integrated",
      "were integrated"
    ],
    "answer": 3,
    "explanation": "'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
    "distractorAnalysis": {
      "A": "'have been integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'will integrate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'are integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
      "E": "'were integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "By + Gelecek zaman + Pasif = will have been + V3.",
    "memoryCode": "🎵 [Karma Gramer]: By + Gelecek zaman + Pasif = will have been + V3.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-122",
    "topicSlug": "gerunds-infinitives",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The research team succeeded in ------- the rare enzyme after ------- multiple biochemical assays in the laboratory.",
    "options": [
      "synthesized / conducted",
      "to synthesize / conduct",
      "synthesizing / conducting",
      "having synthesized / conduct",
      "synthesize / to conduct"
    ],
    "answer": 2,
    "explanation": "Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
    "distractorAnalysis": {
      "A": "'synthesized / conducted' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'to synthesize / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
      "D": "'having synthesized / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'synthesize / to conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Preposition + V-ing kuralı.",
    "memoryCode": "🎵 [Karma Gramer]: Preposition + V-ing kuralı.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-123",
    "topicSlug": "determiners",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Neither the university chancellor nor the faculty deans ------- prepared to compromise on the revised academic standards.",
    "options": [
      "has been",
      "be",
      "is",
      "was",
      "were"
    ],
    "answer": 4,
    "explanation": "'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
    "distractorAnalysis": {
      "A": "'has been' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'be' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were')."
    },
    "tactic": "Neither ... nor en yakın özneye bakar!",
    "memoryCode": "🎵 [Karma Gramer]: Neither ... nor en yakın özneye bakar!",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-124",
    "topicSlug": "adverbial-clauses",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "------- the economic inflation continued to soar, the central bank decided to raise benchmark lending rates.",
    "options": [
      "Whereas",
      "Although",
      "As",
      "Even if",
      "Unless"
    ],
    "answer": 2,
    "explanation": "Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
    "distractorAnalysis": {
      "A": "'Whereas' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Although' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
      "D": "'Even if' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "As = -dıkça / çünkü.",
    "memoryCode": "🎵 [Karma Gramer]: As = -dıkça / çünkü.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-125",
    "topicSlug": "determiners",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The government launched a public campaign to ensure that ------- citizen had equal access to high-speed digital infrastructure.",
    "options": [
      "many",
      "all",
      "every",
      "both",
      "several"
    ],
    "answer": 2,
    "explanation": "Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
    "distractorAnalysis": {
      "A": "'many' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'all' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
      "D": "'both' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'several' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Every + Tekil isim.",
    "memoryCode": "🎵 [Karma Gramer]: Every + Tekil isim.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-126",
    "topicSlug": "tenses",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Although the committee members ------- the proposal thoroughly yesterday, they decided ------- their final vote until next week.",
    "options": [
      "were reviewing / postponed",
      "have reviewed / to postpone",
      "had reviewed / postponing",
      "review / postpone",
      "reviewed / to postpone"
    ],
    "answer": 4,
    "explanation": "'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
    "distractorAnalysis": {
      "A": "'were reviewing / postponed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'have reviewed / to postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'had reviewed / postponing' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'review / postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir."
    },
    "tactic": "Yesterday -> V2; decide -> to V1.",
    "memoryCode": "🎵 [Karma Gramer]: Yesterday -> V2; decide -> to V1.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-127",
    "topicSlug": "passive-voice",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The ancient temple, ------- by archaeologists last year, is widely believed ------- by a powerful volcanic eruption.",
    "options": [
      "discovering / to destroy",
      "was discovered / to be destroyed",
      "having discovered / destroyed",
      "discovered / destroying",
      "discovered / to have been destroyed"
    ],
    "answer": 4,
    "explanation": "İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
    "distractorAnalysis": {
      "A": "'discovering / to destroy' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'was discovered / to be destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'having discovered / destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'discovered / destroying' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur."
    },
    "tactic": "V3 niteleme + is believed to have been V3.",
    "memoryCode": "🎵 [Karma Gramer]: V3 niteleme + is believed to have been V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-128",
    "topicSlug": "conjunctions",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "------- the torrential storm damaged the transmission towers, technicians managed to restore power ------- a few hours.",
    "options": [
      "In case / through",
      "Even though / within",
      "Because / at",
      "Since / on",
      "Unless / for"
    ],
    "answer": 1,
    "explanation": "Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
    "distractorAnalysis": {
      "A": "'In case / through' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
      "C": "'Because / at' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Since / on' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Unless / for' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "memoryCode": "🎵 [Karma Gramer]: Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-129",
    "topicSlug": "conditionals",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Had the emergency medical team ------- immediately, the patient's critical condition ------- so drastically.",
    "options": [
      "arrived / would not have deteriorated",
      "arrived / had not deteriorated",
      "had arrived / would not deteriorate",
      "arrive / did not deteriorate",
      "been arrived / was not deteriorated"
    ],
    "answer": 0,
    "explanation": "Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
    "distractorAnalysis": {
      "A": "DOĞRU: Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
      "B": "'arrived / had not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'had arrived / would not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'arrive / did not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'been arrived / was not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Had + S + V3 -> would have V3.",
    "memoryCode": "🎵 [Karma Gramer]: Had + S + V3 -> would have V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-130",
    "topicSlug": "gerunds-infinitives",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The laboratory supervisor insisted on ------- the chemical containers carefully ------- any toxic leakage should occur.",
    "options": [
      "inspect / in order that",
      "inspecting / lest",
      "having inspected / provided that",
      "inspected / unless",
      "to inspect / so that"
    ],
    "answer": 1,
    "explanation": "'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
    "distractorAnalysis": {
      "A": "'inspect / in order that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
      "C": "'having inspected / provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'inspected / unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'to inspect / so that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Insist on + V-ing; lest + should/yalın fiil.",
    "memoryCode": "🎵 [Karma Gramer]: Insist on + V-ing; lest + should/yalın fiil.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-131",
    "topicSlug": "inversion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "------- had the international peace treaty been signed ------- border skirmishes erupted once again.",
    "options": [
      "Hardly / than",
      "Scarcely / when",
      "Neither / nor",
      "Not only / but also",
      "No sooner / than"
    ],
    "answer": 1,
    "explanation": "'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
    "distractorAnalysis": {
      "A": "'Hardly / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
      "C": "'Neither / nor' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Not only / but also' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'No sooner / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Scarcely ... WHEN! (No sooner ... THAN).",
    "memoryCode": "🎵 [Karma Gramer]: Scarcely ... WHEN! (No sooner ... THAN).",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-132",
    "topicSlug": "relative-clauses",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The distinguished astrophysicist, ------- research into dark matter revolutionized cosmology, received ------- award yesterday.",
    "options": [
      "that / Ø",
      "whose / an",
      "which / a",
      "who / the",
      "whom / an"
    ],
    "answer": 1,
    "explanation": "Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
    "distractorAnalysis": {
      "A": "'that / Ø' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
      "C": "'which / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'who / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'whom / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "İsim + whose + isim; an award.",
    "memoryCode": "🎵 [Karma Gramer]: İsim + whose + isim; an award.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-133",
    "topicSlug": "perfect-modals",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "You ------- all that heavy reference material to class this morning; the teacher uploaded digital copies -------.",
    "options": [
      "would rather bring / therefore",
      "could not bring / nevertheless",
      "must not bring / furthermore",
      "needn't have brought / instead",
      "should have brought / otherwise"
    ],
    "answer": 3,
    "explanation": "Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
    "distractorAnalysis": {
      "A": "'would rather bring / therefore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'could not bring / nevertheless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'must not bring / furthermore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
      "E": "'should have brought / otherwise' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Needn't have V3 = Gerek yoktu ama yaptın.",
    "memoryCode": "🎵 [Karma Gramer]: Needn't have V3 = Gerek yoktu ama yaptın.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-134",
    "topicSlug": "conditionals",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "------- the global financial market recovers, investors will continue to seek refuge in ------- gold and silver.",
    "options": [
      "Although / the",
      "As long as / an",
      "In case / the",
      "Because / a",
      "Unless / Ø"
    ],
    "answer": 4,
    "explanation": "Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
    "distractorAnalysis": {
      "A": "'Although / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'As long as / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'In case / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Because / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø)."
    },
    "tactic": "Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "memoryCode": "🎵 [Karma Gramer]: Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-135",
    "topicSlug": "comparatives",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The new high-speed electric locomotive runs far ------- than older diesel models, consuming ------- energy per passenger.",
    "options": [
      "quiet / much",
      "quietly / fewer",
      "more quietly / less",
      "most quietly / little",
      "more quiet / least"
    ],
    "answer": 2,
    "explanation": "Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
    "distractorAnalysis": {
      "A": "'quiet / much' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'quietly / fewer' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
      "D": "'most quietly / little' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'more quiet / least' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Run + more quietly than; less energy.",
    "memoryCode": "🎵 [Karma Gramer]: Run + more quietly than; less energy.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-136",
    "topicSlug": "noun-clauses",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The clinical panel investigated ------- the sudden surge in neurological diagnoses was ------- environmental pollutants.",
    "options": [
      "how / contrary to",
      "whether / due to",
      "what / rather than",
      "that / in spite of",
      "which / as well as"
    ],
    "answer": 1,
    "explanation": "Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
    "distractorAnalysis": {
      "A": "'how / contrary to' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
      "C": "'what / rather than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'that / in spite of' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'which / as well as' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Investigate + whether; due to = -den kaynaklanan.",
    "memoryCode": "🎵 [Karma Gramer]: Investigate + whether; due to = -den kaynaklanan.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-137",
    "topicSlug": "inversion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Under no circumstances ------- researchers modify experimental datasets without ------- formal written authorization.",
    "options": [
      "have / having obtained",
      "would / obtain",
      "must have / obtained",
      "ought / to obtain",
      "should / obtaining"
    ],
    "answer": 4,
    "explanation": "'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
    "distractorAnalysis": {
      "A": "'have / having obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'would / obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'must have / obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'ought / to obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir."
    },
    "tactic": "Under no circumstances + should + S + V1; without + V-ing.",
    "memoryCode": "🎵 [Karma Gramer]: Under no circumstances + should + S + V1; without + V-ing.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-138",
    "topicSlug": "causatives",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The university had the entire library archive ------- by specialized digital technicians to ------- rare manuscripts.",
    "options": [
      "digitized / preserve",
      "digitize / preserving",
      "digitizing / to preserve",
      "being digitized / preserve",
      "to digitize / preserved"
    ],
    "answer": 0,
    "explanation": "'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
      "B": "'digitize / preserving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'digitizing / to preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'being digitized / preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'to digitize / preserved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Have + nesne + V3; to V1 (amaç).",
    "memoryCode": "🎵 [Karma Gramer]: Have + nesne + V3; to V1 (amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-139",
    "topicSlug": "determiners",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "------- many students registered for the introductory chemistry course that the department had to open an extra section.",
    "options": [
      "Such",
      "Very",
      "Too",
      "So",
      "As"
    ],
    "answer": 3,
    "explanation": "'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
    "distractorAnalysis": {
      "A": "'Such' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Very' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Too' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
      "E": "'As' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "So many / so much ... THAT! (Such a lot of).",
    "memoryCode": "🎵 [Karma Gramer]: So many / so much ... THAT! (Such a lot of).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-140",
    "topicSlug": "phrasal-verbs",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The company decided to ------- several inefficient regional branches in order to ------- operating costs during the crisis.",
    "options": [
      "look into / enhance",
      "carry out / elevate",
      "close down / curtail",
      "bring about / augment",
      "put up with / maximize"
    ],
    "answer": 2,
    "explanation": "Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
    "distractorAnalysis": {
      "A": "'look into / enhance' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'carry out / elevate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
      "D": "'bring about / augment' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'put up with / maximize' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Close down a branch; curtail costs.",
    "memoryCode": "🎵 [Karma Gramer]: Close down a branch; curtail costs.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-141",
    "topicSlug": "articles",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The Amazon basin is ------- home to thousands of indigenous tribes, ------- language and customs are completely unique.",
    "options": [
      "Ø / whose",
      "the / where",
      "the / which",
      "an / whom",
      "a / that"
    ],
    "answer": 0,
    "explanation": "'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
      "B": "'the / where' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'the / which' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'an / whom' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'a / that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Be home to (Ø); tribes whose language...",
    "memoryCode": "🎵 [Karma Gramer]: Be home to (Ø); tribes whose language...",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-142",
    "topicSlug": "adverbial-clauses",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "------- progress has been made in quantum computing, several foundational hardware bottlenecks remain -------.",
    "options": [
      "Because / resolved",
      "Unless / resolution",
      "Although / unresolved",
      "In case / to resolve",
      "Since / solving"
    ],
    "answer": 2,
    "explanation": "İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
    "distractorAnalysis": {
      "A": "'Because / resolved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Unless / resolution' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
      "D": "'In case / to resolve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Since / solving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "memoryCode": "🎵 [Karma Gramer]: Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-143",
    "topicSlug": "perfect-modals",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The criminal suspect ------- the theft because reliable airport security cameras recorded him in Berlin at that exact moment.",
    "options": [
      "cannot have committed",
      "might have committed",
      "should commit",
      "needn't commit",
      "must have committed"
    ],
    "answer": 0,
    "explanation": "Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
    "distractorAnalysis": {
      "A": "DOĞRU: Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
      "B": "'might have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'should commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'needn't commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'must have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Cannot / Couldn't have V3 = Yapmış olamaz.",
    "memoryCode": "🎵 [Karma Gramer]: Cannot / Couldn't have V3 = Yapmış olamaz.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-144",
    "topicSlug": "conjunctions",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The local municipality decided to construct a bypass road ------- heavy freight trucks would not congest residential streets.",
    "options": [
      "so that",
      "lest",
      "unless",
      "in case",
      "provided that"
    ],
    "answer": 0,
    "explanation": "Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
    "distractorAnalysis": {
      "A": "DOĞRU: Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
      "B": "'lest' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'in case' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "So that + modal = -sın diye (Amaç).",
    "memoryCode": "🎵 [Karma Gramer]: So that + modal = -sın diye (Amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-145",
    "topicSlug": "inversion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Rarely ------- an author capture the psychological complexities of wartime trauma with such profound sensitivity.",
    "options": [
      "did",
      "does",
      "is",
      "was",
      "has"
    ],
    "answer": 1,
    "explanation": "'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
    "distractorAnalysis": {
      "A": "'did' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
      "C": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'has' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Rarely + does + S + V1.",
    "memoryCode": "🎵 [Karma Gramer]: Rarely + does + S + V1.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-146",
    "topicSlug": "tenses",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "By the end of this decade, marine renewable energy technologies ------- into mainstream commercial grids across Europe.",
    "options": [
      "have been integrated",
      "are integrated",
      "will integrate",
      "will have been integrated",
      "were integrated"
    ],
    "answer": 3,
    "explanation": "'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
    "distractorAnalysis": {
      "A": "'have been integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'are integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'will integrate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
      "E": "'were integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "By + Gelecek zaman + Pasif = will have been + V3.",
    "memoryCode": "🎵 [Karma Gramer]: By + Gelecek zaman + Pasif = will have been + V3.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-147",
    "topicSlug": "gerunds-infinitives",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The research team succeeded in ------- the rare enzyme after ------- multiple biochemical assays in the laboratory.",
    "options": [
      "synthesized / conducted",
      "synthesizing / conducting",
      "to synthesize / conduct",
      "having synthesized / conduct",
      "synthesize / to conduct"
    ],
    "answer": 1,
    "explanation": "Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
    "distractorAnalysis": {
      "A": "'synthesized / conducted' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
      "C": "'to synthesize / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'having synthesized / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'synthesize / to conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Preposition + V-ing kuralı.",
    "memoryCode": "🎵 [Karma Gramer]: Preposition + V-ing kuralı.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-148",
    "topicSlug": "determiners",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Neither the university chancellor nor the faculty deans ------- prepared to compromise on the revised academic standards.",
    "options": [
      "was",
      "were",
      "be",
      "is",
      "has been"
    ],
    "answer": 1,
    "explanation": "'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
    "distractorAnalysis": {
      "A": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
      "C": "'be' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'has been' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Neither ... nor en yakın özneye bakar!",
    "memoryCode": "🎵 [Karma Gramer]: Neither ... nor en yakın özneye bakar!",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-149",
    "topicSlug": "adverbial-clauses",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "------- the economic inflation continued to soar, the central bank decided to raise benchmark lending rates.",
    "options": [
      "Whereas",
      "As",
      "Although",
      "Even if",
      "Unless"
    ],
    "answer": 1,
    "explanation": "Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
    "distractorAnalysis": {
      "A": "'Whereas' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
      "C": "'Although' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Even if' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "As = -dıkça / çünkü.",
    "memoryCode": "🎵 [Karma Gramer]: As = -dıkça / çünkü.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-150",
    "topicSlug": "determiners",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The government launched a public campaign to ensure that ------- citizen had equal access to high-speed digital infrastructure.",
    "options": [
      "all",
      "several",
      "many",
      "every",
      "both"
    ],
    "answer": 3,
    "explanation": "Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
    "distractorAnalysis": {
      "A": "'all' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'several' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'many' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
      "E": "'both' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Every + Tekil isim.",
    "memoryCode": "🎵 [Karma Gramer]: Every + Tekil isim.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-151",
    "topicSlug": "tenses",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Although the committee members ------- the proposal thoroughly yesterday, they decided ------- their final vote until next week.",
    "options": [
      "have reviewed / to postpone",
      "review / postpone",
      "had reviewed / postponing",
      "reviewed / to postpone",
      "were reviewing / postponed"
    ],
    "answer": 3,
    "explanation": "'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
    "distractorAnalysis": {
      "A": "'have reviewed / to postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'review / postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'had reviewed / postponing' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
      "E": "'were reviewing / postponed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Yesterday -> V2; decide -> to V1.",
    "memoryCode": "🎵 [Karma Gramer]: Yesterday -> V2; decide -> to V1.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-152",
    "topicSlug": "passive-voice",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The ancient temple, ------- by archaeologists last year, is widely believed ------- by a powerful volcanic eruption.",
    "options": [
      "discovered / to have been destroyed",
      "discovering / to destroy",
      "was discovered / to be destroyed",
      "discovered / destroying",
      "having discovered / destroyed"
    ],
    "answer": 0,
    "explanation": "İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
    "distractorAnalysis": {
      "A": "DOĞRU: İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
      "B": "'discovering / to destroy' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'was discovered / to be destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'discovered / destroying' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'having discovered / destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "V3 niteleme + is believed to have been V3.",
    "memoryCode": "🎵 [Karma Gramer]: V3 niteleme + is believed to have been V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-153",
    "topicSlug": "conjunctions",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "------- the torrential storm damaged the transmission towers, technicians managed to restore power ------- a few hours.",
    "options": [
      "Because / at",
      "Unless / for",
      "In case / through",
      "Since / on",
      "Even though / within"
    ],
    "answer": 4,
    "explanation": "Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
    "distractorAnalysis": {
      "A": "'Because / at' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Unless / for' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'In case / through' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Since / on' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur."
    },
    "tactic": "Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "memoryCode": "🎵 [Karma Gramer]: Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-154",
    "topicSlug": "conditionals",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Had the emergency medical team ------- immediately, the patient's critical condition ------- so drastically.",
    "options": [
      "arrived / had not deteriorated",
      "been arrived / was not deteriorated",
      "arrive / did not deteriorate",
      "had arrived / would not deteriorate",
      "arrived / would not have deteriorated"
    ],
    "answer": 4,
    "explanation": "Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
    "distractorAnalysis": {
      "A": "'arrived / had not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'been arrived / was not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'arrive / did not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'had arrived / would not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir."
    },
    "tactic": "Had + S + V3 -> would have V3.",
    "memoryCode": "🎵 [Karma Gramer]: Had + S + V3 -> would have V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-155",
    "topicSlug": "gerunds-infinitives",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The laboratory supervisor insisted on ------- the chemical containers carefully ------- any toxic leakage should occur.",
    "options": [
      "having inspected / provided that",
      "inspect / in order that",
      "inspected / unless",
      "to inspect / so that",
      "inspecting / lest"
    ],
    "answer": 4,
    "explanation": "'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
    "distractorAnalysis": {
      "A": "'having inspected / provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'inspect / in order that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'inspected / unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'to inspect / so that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır."
    },
    "tactic": "Insist on + V-ing; lest + should/yalın fiil.",
    "memoryCode": "🎵 [Karma Gramer]: Insist on + V-ing; lest + should/yalın fiil.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-156",
    "topicSlug": "inversion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "------- had the international peace treaty been signed ------- border skirmishes erupted once again.",
    "options": [
      "Not only / but also",
      "Neither / nor",
      "Hardly / than",
      "No sooner / than",
      "Scarcely / when"
    ],
    "answer": 4,
    "explanation": "'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
    "distractorAnalysis": {
      "A": "'Not only / but also' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Neither / nor' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Hardly / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'No sooner / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır."
    },
    "tactic": "Scarcely ... WHEN! (No sooner ... THAN).",
    "memoryCode": "🎵 [Karma Gramer]: Scarcely ... WHEN! (No sooner ... THAN).",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-157",
    "topicSlug": "relative-clauses",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The distinguished astrophysicist, ------- research into dark matter revolutionized cosmology, received ------- award yesterday.",
    "options": [
      "who / the",
      "that / Ø",
      "which / a",
      "whom / an",
      "whose / an"
    ],
    "answer": 4,
    "explanation": "Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
    "distractorAnalysis": {
      "A": "'who / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'that / Ø' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'which / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'whom / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir."
    },
    "tactic": "İsim + whose + isim; an award.",
    "memoryCode": "🎵 [Karma Gramer]: İsim + whose + isim; an award.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-158",
    "topicSlug": "perfect-modals",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "You ------- all that heavy reference material to class this morning; the teacher uploaded digital copies -------.",
    "options": [
      "would rather bring / therefore",
      "could not bring / nevertheless",
      "should have brought / otherwise",
      "needn't have brought / instead",
      "must not bring / furthermore"
    ],
    "answer": 3,
    "explanation": "Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
    "distractorAnalysis": {
      "A": "'would rather bring / therefore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'could not bring / nevertheless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'should have brought / otherwise' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
      "E": "'must not bring / furthermore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Needn't have V3 = Gerek yoktu ama yaptın.",
    "memoryCode": "🎵 [Karma Gramer]: Needn't have V3 = Gerek yoktu ama yaptın.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-159",
    "topicSlug": "conditionals",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "------- the global financial market recovers, investors will continue to seek refuge in ------- gold and silver.",
    "options": [
      "In case / the",
      "Because / a",
      "As long as / an",
      "Although / the",
      "Unless / Ø"
    ],
    "answer": 4,
    "explanation": "Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
    "distractorAnalysis": {
      "A": "'In case / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Because / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'As long as / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Although / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø)."
    },
    "tactic": "Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "memoryCode": "🎵 [Karma Gramer]: Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-160",
    "topicSlug": "comparatives",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The new high-speed electric locomotive runs far ------- than older diesel models, consuming ------- energy per passenger.",
    "options": [
      "quietly / fewer",
      "most quietly / little",
      "more quietly / less",
      "quiet / much",
      "more quiet / least"
    ],
    "answer": 2,
    "explanation": "Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
    "distractorAnalysis": {
      "A": "'quietly / fewer' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'most quietly / little' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
      "D": "'quiet / much' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'more quiet / least' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Run + more quietly than; less energy.",
    "memoryCode": "🎵 [Karma Gramer]: Run + more quietly than; less energy.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-161",
    "topicSlug": "noun-clauses",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The clinical panel investigated ------- the sudden surge in neurological diagnoses was ------- environmental pollutants.",
    "options": [
      "whether / due to",
      "that / in spite of",
      "which / as well as",
      "how / contrary to",
      "what / rather than"
    ],
    "answer": 0,
    "explanation": "Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
    "distractorAnalysis": {
      "A": "DOĞRU: Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
      "B": "'that / in spite of' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'which / as well as' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'how / contrary to' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'what / rather than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Investigate + whether; due to = -den kaynaklanan.",
    "memoryCode": "🎵 [Karma Gramer]: Investigate + whether; due to = -den kaynaklanan.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-162",
    "topicSlug": "inversion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Under no circumstances ------- researchers modify experimental datasets without ------- formal written authorization.",
    "options": [
      "would / obtain",
      "have / having obtained",
      "ought / to obtain",
      "must have / obtained",
      "should / obtaining"
    ],
    "answer": 4,
    "explanation": "'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
    "distractorAnalysis": {
      "A": "'would / obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'have / having obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'ought / to obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'must have / obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir."
    },
    "tactic": "Under no circumstances + should + S + V1; without + V-ing.",
    "memoryCode": "🎵 [Karma Gramer]: Under no circumstances + should + S + V1; without + V-ing.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-163",
    "topicSlug": "causatives",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The university had the entire library archive ------- by specialized digital technicians to ------- rare manuscripts.",
    "options": [
      "being digitized / preserve",
      "digitizing / to preserve",
      "digitized / preserve",
      "digitize / preserving",
      "to digitize / preserved"
    ],
    "answer": 2,
    "explanation": "'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
    "distractorAnalysis": {
      "A": "'being digitized / preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'digitizing / to preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
      "D": "'digitize / preserving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'to digitize / preserved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Have + nesne + V3; to V1 (amaç).",
    "memoryCode": "🎵 [Karma Gramer]: Have + nesne + V3; to V1 (amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-164",
    "topicSlug": "determiners",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "------- many students registered for the introductory chemistry course that the department had to open an extra section.",
    "options": [
      "Such",
      "So",
      "Too",
      "As",
      "Very"
    ],
    "answer": 1,
    "explanation": "'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
    "distractorAnalysis": {
      "A": "'Such' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
      "C": "'Too' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'As' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Very' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "So many / so much ... THAT! (Such a lot of).",
    "memoryCode": "🎵 [Karma Gramer]: So many / so much ... THAT! (Such a lot of).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-165",
    "topicSlug": "phrasal-verbs",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The company decided to ------- several inefficient regional branches in order to ------- operating costs during the crisis.",
    "options": [
      "carry out / elevate",
      "put up with / maximize",
      "bring about / augment",
      "look into / enhance",
      "close down / curtail"
    ],
    "answer": 4,
    "explanation": "Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
    "distractorAnalysis": {
      "A": "'carry out / elevate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'put up with / maximize' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'bring about / augment' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'look into / enhance' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail)."
    },
    "tactic": "Close down a branch; curtail costs.",
    "memoryCode": "🎵 [Karma Gramer]: Close down a branch; curtail costs.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-166",
    "topicSlug": "articles",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The Amazon basin is ------- home to thousands of indigenous tribes, ------- language and customs are completely unique.",
    "options": [
      "a / that",
      "Ø / whose",
      "an / whom",
      "the / where",
      "the / which"
    ],
    "answer": 1,
    "explanation": "'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
    "distractorAnalysis": {
      "A": "'a / that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
      "C": "'an / whom' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'the / where' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'the / which' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Be home to (Ø); tribes whose language...",
    "memoryCode": "🎵 [Karma Gramer]: Be home to (Ø); tribes whose language...",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-167",
    "topicSlug": "adverbial-clauses",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "------- progress has been made in quantum computing, several foundational hardware bottlenecks remain -------.",
    "options": [
      "Because / resolved",
      "Since / solving",
      "In case / to resolve",
      "Unless / resolution",
      "Although / unresolved"
    ],
    "answer": 4,
    "explanation": "İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
    "distractorAnalysis": {
      "A": "'Because / resolved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Since / solving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'In case / to resolve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Unless / resolution' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır."
    },
    "tactic": "Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "memoryCode": "🎵 [Karma Gramer]: Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-168",
    "topicSlug": "perfect-modals",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The criminal suspect ------- the theft because reliable airport security cameras recorded him in Berlin at that exact moment.",
    "options": [
      "must have committed",
      "might have committed",
      "should commit",
      "needn't commit",
      "cannot have committed"
    ],
    "answer": 4,
    "explanation": "Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
    "distractorAnalysis": {
      "A": "'must have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'might have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'should commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'needn't commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir."
    },
    "tactic": "Cannot / Couldn't have V3 = Yapmış olamaz.",
    "memoryCode": "🎵 [Karma Gramer]: Cannot / Couldn't have V3 = Yapmış olamaz.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-169",
    "topicSlug": "conjunctions",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The local municipality decided to construct a bypass road ------- heavy freight trucks would not congest residential streets.",
    "options": [
      "in case",
      "provided that",
      "so that",
      "lest",
      "unless"
    ],
    "answer": 2,
    "explanation": "Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
    "distractorAnalysis": {
      "A": "'in case' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
      "D": "'lest' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "So that + modal = -sın diye (Amaç).",
    "memoryCode": "🎵 [Karma Gramer]: So that + modal = -sın diye (Amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-170",
    "topicSlug": "inversion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Rarely ------- an author capture the psychological complexities of wartime trauma with such profound sensitivity.",
    "options": [
      "was",
      "did",
      "does",
      "is",
      "has"
    ],
    "answer": 2,
    "explanation": "'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
    "distractorAnalysis": {
      "A": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'did' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
      "D": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'has' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Rarely + does + S + V1.",
    "memoryCode": "🎵 [Karma Gramer]: Rarely + does + S + V1.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-171",
    "topicSlug": "tenses",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "By the end of this decade, marine renewable energy technologies ------- into mainstream commercial grids across Europe.",
    "options": [
      "are integrated",
      "will have been integrated",
      "have been integrated",
      "will integrate",
      "were integrated"
    ],
    "answer": 1,
    "explanation": "'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
    "distractorAnalysis": {
      "A": "'are integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
      "C": "'have been integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'will integrate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'were integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "By + Gelecek zaman + Pasif = will have been + V3.",
    "memoryCode": "🎵 [Karma Gramer]: By + Gelecek zaman + Pasif = will have been + V3.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-172",
    "topicSlug": "gerunds-infinitives",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The research team succeeded in ------- the rare enzyme after ------- multiple biochemical assays in the laboratory.",
    "options": [
      "having synthesized / conduct",
      "synthesized / conducted",
      "synthesizing / conducting",
      "synthesize / to conduct",
      "to synthesize / conduct"
    ],
    "answer": 2,
    "explanation": "Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
    "distractorAnalysis": {
      "A": "'having synthesized / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'synthesized / conducted' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
      "D": "'synthesize / to conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'to synthesize / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Preposition + V-ing kuralı.",
    "memoryCode": "🎵 [Karma Gramer]: Preposition + V-ing kuralı.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-173",
    "topicSlug": "determiners",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Neither the university chancellor nor the faculty deans ------- prepared to compromise on the revised academic standards.",
    "options": [
      "were",
      "is",
      "be",
      "was",
      "has been"
    ],
    "answer": 0,
    "explanation": "'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
      "B": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'be' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'has been' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Neither ... nor en yakın özneye bakar!",
    "memoryCode": "🎵 [Karma Gramer]: Neither ... nor en yakın özneye bakar!",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-174",
    "topicSlug": "adverbial-clauses",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "------- the economic inflation continued to soar, the central bank decided to raise benchmark lending rates.",
    "options": [
      "Whereas",
      "Unless",
      "As",
      "Even if",
      "Although"
    ],
    "answer": 2,
    "explanation": "Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
    "distractorAnalysis": {
      "A": "'Whereas' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
      "D": "'Even if' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Although' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "As = -dıkça / çünkü.",
    "memoryCode": "🎵 [Karma Gramer]: As = -dıkça / çünkü.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-175",
    "topicSlug": "determiners",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The government launched a public campaign to ensure that ------- citizen had equal access to high-speed digital infrastructure.",
    "options": [
      "many",
      "both",
      "all",
      "several",
      "every"
    ],
    "answer": 4,
    "explanation": "Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
    "distractorAnalysis": {
      "A": "'many' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'both' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'all' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'several' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır."
    },
    "tactic": "Every + Tekil isim.",
    "memoryCode": "🎵 [Karma Gramer]: Every + Tekil isim.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-176",
    "topicSlug": "tenses",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Although the committee members ------- the proposal thoroughly yesterday, they decided ------- their final vote until next week.",
    "options": [
      "were reviewing / postponed",
      "review / postpone",
      "had reviewed / postponing",
      "reviewed / to postpone",
      "have reviewed / to postpone"
    ],
    "answer": 3,
    "explanation": "'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
    "distractorAnalysis": {
      "A": "'were reviewing / postponed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'review / postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'had reviewed / postponing' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
      "E": "'have reviewed / to postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Yesterday -> V2; decide -> to V1.",
    "memoryCode": "🎵 [Karma Gramer]: Yesterday -> V2; decide -> to V1.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-177",
    "topicSlug": "passive-voice",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The ancient temple, ------- by archaeologists last year, is widely believed ------- by a powerful volcanic eruption.",
    "options": [
      "was discovered / to be destroyed",
      "discovered / destroying",
      "having discovered / destroyed",
      "discovered / to have been destroyed",
      "discovering / to destroy"
    ],
    "answer": 3,
    "explanation": "İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
    "distractorAnalysis": {
      "A": "'was discovered / to be destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'discovered / destroying' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'having discovered / destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
      "E": "'discovering / to destroy' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "V3 niteleme + is believed to have been V3.",
    "memoryCode": "🎵 [Karma Gramer]: V3 niteleme + is believed to have been V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-178",
    "topicSlug": "conjunctions",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "------- the torrential storm damaged the transmission towers, technicians managed to restore power ------- a few hours.",
    "options": [
      "Even though / within",
      "In case / through",
      "Unless / for",
      "Since / on",
      "Because / at"
    ],
    "answer": 0,
    "explanation": "Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
    "distractorAnalysis": {
      "A": "DOĞRU: Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
      "B": "'In case / through' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Unless / for' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Since / on' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Because / at' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "memoryCode": "🎵 [Karma Gramer]: Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-179",
    "topicSlug": "conditionals",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Had the emergency medical team ------- immediately, the patient's critical condition ------- so drastically.",
    "options": [
      "had arrived / would not deteriorate",
      "arrive / did not deteriorate",
      "arrived / had not deteriorated",
      "arrived / would not have deteriorated",
      "been arrived / was not deteriorated"
    ],
    "answer": 3,
    "explanation": "Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
    "distractorAnalysis": {
      "A": "'had arrived / would not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'arrive / did not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'arrived / had not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
      "E": "'been arrived / was not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Had + S + V3 -> would have V3.",
    "memoryCode": "🎵 [Karma Gramer]: Had + S + V3 -> would have V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-180",
    "topicSlug": "gerunds-infinitives",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The laboratory supervisor insisted on ------- the chemical containers carefully ------- any toxic leakage should occur.",
    "options": [
      "inspecting / lest",
      "inspect / in order that",
      "inspected / unless",
      "to inspect / so that",
      "having inspected / provided that"
    ],
    "answer": 0,
    "explanation": "'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
      "B": "'inspect / in order that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'inspected / unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'to inspect / so that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'having inspected / provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Insist on + V-ing; lest + should/yalın fiil.",
    "memoryCode": "🎵 [Karma Gramer]: Insist on + V-ing; lest + should/yalın fiil.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-181",
    "topicSlug": "inversion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "------- had the international peace treaty been signed ------- border skirmishes erupted once again.",
    "options": [
      "Hardly / than",
      "No sooner / than",
      "Not only / but also",
      "Scarcely / when",
      "Neither / nor"
    ],
    "answer": 3,
    "explanation": "'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
    "distractorAnalysis": {
      "A": "'Hardly / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'No sooner / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Not only / but also' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
      "E": "'Neither / nor' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Scarcely ... WHEN! (No sooner ... THAN).",
    "memoryCode": "🎵 [Karma Gramer]: Scarcely ... WHEN! (No sooner ... THAN).",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-182",
    "topicSlug": "relative-clauses",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The distinguished astrophysicist, ------- research into dark matter revolutionized cosmology, received ------- award yesterday.",
    "options": [
      "that / Ø",
      "who / the",
      "whom / an",
      "which / a",
      "whose / an"
    ],
    "answer": 4,
    "explanation": "Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
    "distractorAnalysis": {
      "A": "'that / Ø' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'who / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'whom / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'which / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir."
    },
    "tactic": "İsim + whose + isim; an award.",
    "memoryCode": "🎵 [Karma Gramer]: İsim + whose + isim; an award.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-183",
    "topicSlug": "perfect-modals",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "You ------- all that heavy reference material to class this morning; the teacher uploaded digital copies -------.",
    "options": [
      "should have brought / otherwise",
      "needn't have brought / instead",
      "would rather bring / therefore",
      "must not bring / furthermore",
      "could not bring / nevertheless"
    ],
    "answer": 1,
    "explanation": "Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
    "distractorAnalysis": {
      "A": "'should have brought / otherwise' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
      "C": "'would rather bring / therefore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'must not bring / furthermore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'could not bring / nevertheless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Needn't have V3 = Gerek yoktu ama yaptın.",
    "memoryCode": "🎵 [Karma Gramer]: Needn't have V3 = Gerek yoktu ama yaptın.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-184",
    "topicSlug": "conditionals",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "------- the global financial market recovers, investors will continue to seek refuge in ------- gold and silver.",
    "options": [
      "Although / the",
      "As long as / an",
      "Unless / Ø",
      "In case / the",
      "Because / a"
    ],
    "answer": 2,
    "explanation": "Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
    "distractorAnalysis": {
      "A": "'Although / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'As long as / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
      "D": "'In case / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Because / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "memoryCode": "🎵 [Karma Gramer]: Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-185",
    "topicSlug": "comparatives",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The new high-speed electric locomotive runs far ------- than older diesel models, consuming ------- energy per passenger.",
    "options": [
      "quietly / fewer",
      "most quietly / little",
      "more quiet / least",
      "quiet / much",
      "more quietly / less"
    ],
    "answer": 4,
    "explanation": "Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
    "distractorAnalysis": {
      "A": "'quietly / fewer' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'most quietly / little' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'more quiet / least' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'quiet / much' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır."
    },
    "tactic": "Run + more quietly than; less energy.",
    "memoryCode": "🎵 [Karma Gramer]: Run + more quietly than; less energy.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-186",
    "topicSlug": "noun-clauses",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The clinical panel investigated ------- the sudden surge in neurological diagnoses was ------- environmental pollutants.",
    "options": [
      "which / as well as",
      "what / rather than",
      "that / in spite of",
      "how / contrary to",
      "whether / due to"
    ],
    "answer": 4,
    "explanation": "Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
    "distractorAnalysis": {
      "A": "'which / as well as' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'what / rather than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'that / in spite of' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'how / contrary to' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar."
    },
    "tactic": "Investigate + whether; due to = -den kaynaklanan.",
    "memoryCode": "🎵 [Karma Gramer]: Investigate + whether; due to = -den kaynaklanan.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-187",
    "topicSlug": "inversion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Under no circumstances ------- researchers modify experimental datasets without ------- formal written authorization.",
    "options": [
      "have / having obtained",
      "would / obtain",
      "should / obtaining",
      "ought / to obtain",
      "must have / obtained"
    ],
    "answer": 2,
    "explanation": "'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
    "distractorAnalysis": {
      "A": "'have / having obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'would / obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
      "D": "'ought / to obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'must have / obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Under no circumstances + should + S + V1; without + V-ing.",
    "memoryCode": "🎵 [Karma Gramer]: Under no circumstances + should + S + V1; without + V-ing.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-188",
    "topicSlug": "causatives",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The university had the entire library archive ------- by specialized digital technicians to ------- rare manuscripts.",
    "options": [
      "being digitized / preserve",
      "digitizing / to preserve",
      "to digitize / preserved",
      "digitized / preserve",
      "digitize / preserving"
    ],
    "answer": 3,
    "explanation": "'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
    "distractorAnalysis": {
      "A": "'being digitized / preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'digitizing / to preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'to digitize / preserved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
      "E": "'digitize / preserving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Have + nesne + V3; to V1 (amaç).",
    "memoryCode": "🎵 [Karma Gramer]: Have + nesne + V3; to V1 (amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-189",
    "topicSlug": "determiners",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "------- many students registered for the introductory chemistry course that the department had to open an extra section.",
    "options": [
      "Too",
      "As",
      "Such",
      "Very",
      "So"
    ],
    "answer": 4,
    "explanation": "'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
    "distractorAnalysis": {
      "A": "'Too' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'As' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Such' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Very' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...)."
    },
    "tactic": "So many / so much ... THAT! (Such a lot of).",
    "memoryCode": "🎵 [Karma Gramer]: So many / so much ... THAT! (Such a lot of).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-190",
    "topicSlug": "phrasal-verbs",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The company decided to ------- several inefficient regional branches in order to ------- operating costs during the crisis.",
    "options": [
      "carry out / elevate",
      "look into / enhance",
      "bring about / augment",
      "close down / curtail",
      "put up with / maximize"
    ],
    "answer": 3,
    "explanation": "Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
    "distractorAnalysis": {
      "A": "'carry out / elevate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'look into / enhance' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'bring about / augment' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
      "E": "'put up with / maximize' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Close down a branch; curtail costs.",
    "memoryCode": "🎵 [Karma Gramer]: Close down a branch; curtail costs.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-191",
    "topicSlug": "articles",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The Amazon basin is ------- home to thousands of indigenous tribes, ------- language and customs are completely unique.",
    "options": [
      "the / which",
      "Ø / whose",
      "an / whom",
      "a / that",
      "the / where"
    ],
    "answer": 1,
    "explanation": "'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
    "distractorAnalysis": {
      "A": "'the / which' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
      "C": "'an / whom' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'a / that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'the / where' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Be home to (Ø); tribes whose language...",
    "memoryCode": "🎵 [Karma Gramer]: Be home to (Ø); tribes whose language...",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-192",
    "topicSlug": "adverbial-clauses",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "------- progress has been made in quantum computing, several foundational hardware bottlenecks remain -------.",
    "options": [
      "In case / to resolve",
      "Unless / resolution",
      "Since / solving",
      "Because / resolved",
      "Although / unresolved"
    ],
    "answer": 4,
    "explanation": "İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
    "distractorAnalysis": {
      "A": "'In case / to resolve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Unless / resolution' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Since / solving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Because / resolved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır."
    },
    "tactic": "Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "memoryCode": "🎵 [Karma Gramer]: Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-193",
    "topicSlug": "perfect-modals",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The criminal suspect ------- the theft because reliable airport security cameras recorded him in Berlin at that exact moment.",
    "options": [
      "cannot have committed",
      "must have committed",
      "needn't commit",
      "might have committed",
      "should commit"
    ],
    "answer": 0,
    "explanation": "Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
    "distractorAnalysis": {
      "A": "DOĞRU: Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
      "B": "'must have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'needn't commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'might have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'should commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Cannot / Couldn't have V3 = Yapmış olamaz.",
    "memoryCode": "🎵 [Karma Gramer]: Cannot / Couldn't have V3 = Yapmış olamaz.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-194",
    "topicSlug": "conjunctions",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The local municipality decided to construct a bypass road ------- heavy freight trucks would not congest residential streets.",
    "options": [
      "so that",
      "lest",
      "in case",
      "provided that",
      "unless"
    ],
    "answer": 0,
    "explanation": "Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
    "distractorAnalysis": {
      "A": "DOĞRU: Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
      "B": "'lest' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'in case' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "So that + modal = -sın diye (Amaç).",
    "memoryCode": "🎵 [Karma Gramer]: So that + modal = -sın diye (Amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-195",
    "topicSlug": "inversion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Rarely ------- an author capture the psychological complexities of wartime trauma with such profound sensitivity.",
    "options": [
      "did",
      "was",
      "is",
      "has",
      "does"
    ],
    "answer": 4,
    "explanation": "'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
    "distractorAnalysis": {
      "A": "'did' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'has' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur."
    },
    "tactic": "Rarely + does + S + V1.",
    "memoryCode": "🎵 [Karma Gramer]: Rarely + does + S + V1.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-196",
    "topicSlug": "tenses",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "By the end of this decade, marine renewable energy technologies ------- into mainstream commercial grids across Europe.",
    "options": [
      "will have been integrated",
      "will integrate",
      "have been integrated",
      "were integrated",
      "are integrated"
    ],
    "answer": 0,
    "explanation": "'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
      "B": "'will integrate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'have been integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'were integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'are integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "By + Gelecek zaman + Pasif = will have been + V3.",
    "memoryCode": "🎵 [Karma Gramer]: By + Gelecek zaman + Pasif = will have been + V3.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-197",
    "topicSlug": "gerunds-infinitives",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The research team succeeded in ------- the rare enzyme after ------- multiple biochemical assays in the laboratory.",
    "options": [
      "synthesizing / conducting",
      "to synthesize / conduct",
      "synthesize / to conduct",
      "having synthesized / conduct",
      "synthesized / conducted"
    ],
    "answer": 0,
    "explanation": "Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
    "distractorAnalysis": {
      "A": "DOĞRU: Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
      "B": "'to synthesize / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'synthesize / to conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'having synthesized / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'synthesized / conducted' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Preposition + V-ing kuralı.",
    "memoryCode": "🎵 [Karma Gramer]: Preposition + V-ing kuralı.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-198",
    "topicSlug": "determiners",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Neither the university chancellor nor the faculty deans ------- prepared to compromise on the revised academic standards.",
    "options": [
      "is",
      "were",
      "be",
      "has been",
      "was"
    ],
    "answer": 1,
    "explanation": "'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
    "distractorAnalysis": {
      "A": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
      "C": "'be' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'has been' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Neither ... nor en yakın özneye bakar!",
    "memoryCode": "🎵 [Karma Gramer]: Neither ... nor en yakın özneye bakar!",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-199",
    "topicSlug": "adverbial-clauses",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "------- the economic inflation continued to soar, the central bank decided to raise benchmark lending rates.",
    "options": [
      "As",
      "Although",
      "Whereas",
      "Even if",
      "Unless"
    ],
    "answer": 0,
    "explanation": "Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
    "distractorAnalysis": {
      "A": "DOĞRU: Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
      "B": "'Although' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Whereas' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Even if' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "As = -dıkça / çünkü.",
    "memoryCode": "🎵 [Karma Gramer]: As = -dıkça / çünkü.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-200",
    "topicSlug": "determiners",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The government launched a public campaign to ensure that ------- citizen had equal access to high-speed digital infrastructure.",
    "options": [
      "both",
      "every",
      "all",
      "several",
      "many"
    ],
    "answer": 1,
    "explanation": "Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
    "distractorAnalysis": {
      "A": "'both' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
      "C": "'all' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'several' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'many' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Every + Tekil isim.",
    "memoryCode": "🎵 [Karma Gramer]: Every + Tekil isim.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-201",
    "topicSlug": "tenses",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Although the committee members ------- the proposal thoroughly yesterday, they decided ------- their final vote until next week.",
    "options": [
      "were reviewing / postponed",
      "had reviewed / postponing",
      "reviewed / to postpone",
      "have reviewed / to postpone",
      "review / postpone"
    ],
    "answer": 2,
    "explanation": "'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
    "distractorAnalysis": {
      "A": "'were reviewing / postponed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'had reviewed / postponing' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
      "D": "'have reviewed / to postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'review / postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Yesterday -> V2; decide -> to V1.",
    "memoryCode": "🎵 [Karma Gramer]: Yesterday -> V2; decide -> to V1.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-202",
    "topicSlug": "passive-voice",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The ancient temple, ------- by archaeologists last year, is widely believed ------- by a powerful volcanic eruption.",
    "options": [
      "having discovered / destroyed",
      "discovered / to have been destroyed",
      "discovered / destroying",
      "was discovered / to be destroyed",
      "discovering / to destroy"
    ],
    "answer": 1,
    "explanation": "İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
    "distractorAnalysis": {
      "A": "'having discovered / destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
      "C": "'discovered / destroying' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'was discovered / to be destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'discovering / to destroy' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "V3 niteleme + is believed to have been V3.",
    "memoryCode": "🎵 [Karma Gramer]: V3 niteleme + is believed to have been V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-203",
    "topicSlug": "conjunctions",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "------- the torrential storm damaged the transmission towers, technicians managed to restore power ------- a few hours.",
    "options": [
      "Unless / for",
      "Even though / within",
      "Since / on",
      "In case / through",
      "Because / at"
    ],
    "answer": 1,
    "explanation": "Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
    "distractorAnalysis": {
      "A": "'Unless / for' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
      "C": "'Since / on' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'In case / through' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Because / at' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "memoryCode": "🎵 [Karma Gramer]: Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-204",
    "topicSlug": "conditionals",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Had the emergency medical team ------- immediately, the patient's critical condition ------- so drastically.",
    "options": [
      "had arrived / would not deteriorate",
      "arrived / would not have deteriorated",
      "arrived / had not deteriorated",
      "arrive / did not deteriorate",
      "been arrived / was not deteriorated"
    ],
    "answer": 1,
    "explanation": "Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
    "distractorAnalysis": {
      "A": "'had arrived / would not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
      "C": "'arrived / had not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'arrive / did not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'been arrived / was not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Had + S + V3 -> would have V3.",
    "memoryCode": "🎵 [Karma Gramer]: Had + S + V3 -> would have V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-205",
    "topicSlug": "gerunds-infinitives",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The laboratory supervisor insisted on ------- the chemical containers carefully ------- any toxic leakage should occur.",
    "options": [
      "inspecting / lest",
      "inspected / unless",
      "to inspect / so that",
      "inspect / in order that",
      "having inspected / provided that"
    ],
    "answer": 0,
    "explanation": "'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
      "B": "'inspected / unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'to inspect / so that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'inspect / in order that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'having inspected / provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Insist on + V-ing; lest + should/yalın fiil.",
    "memoryCode": "🎵 [Karma Gramer]: Insist on + V-ing; lest + should/yalın fiil.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-206",
    "topicSlug": "inversion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "------- had the international peace treaty been signed ------- border skirmishes erupted once again.",
    "options": [
      "Hardly / than",
      "Neither / nor",
      "Scarcely / when",
      "Not only / but also",
      "No sooner / than"
    ],
    "answer": 2,
    "explanation": "'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
    "distractorAnalysis": {
      "A": "'Hardly / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Neither / nor' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
      "D": "'Not only / but also' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'No sooner / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Scarcely ... WHEN! (No sooner ... THAN).",
    "memoryCode": "🎵 [Karma Gramer]: Scarcely ... WHEN! (No sooner ... THAN).",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-207",
    "topicSlug": "relative-clauses",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The distinguished astrophysicist, ------- research into dark matter revolutionized cosmology, received ------- award yesterday.",
    "options": [
      "whom / an",
      "that / Ø",
      "which / a",
      "whose / an",
      "who / the"
    ],
    "answer": 3,
    "explanation": "Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
    "distractorAnalysis": {
      "A": "'whom / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'that / Ø' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'which / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
      "E": "'who / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "İsim + whose + isim; an award.",
    "memoryCode": "🎵 [Karma Gramer]: İsim + whose + isim; an award.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-208",
    "topicSlug": "perfect-modals",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "You ------- all that heavy reference material to class this morning; the teacher uploaded digital copies -------.",
    "options": [
      "must not bring / furthermore",
      "should have brought / otherwise",
      "would rather bring / therefore",
      "needn't have brought / instead",
      "could not bring / nevertheless"
    ],
    "answer": 3,
    "explanation": "Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
    "distractorAnalysis": {
      "A": "'must not bring / furthermore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'should have brought / otherwise' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'would rather bring / therefore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
      "E": "'could not bring / nevertheless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Needn't have V3 = Gerek yoktu ama yaptın.",
    "memoryCode": "🎵 [Karma Gramer]: Needn't have V3 = Gerek yoktu ama yaptın.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-209",
    "topicSlug": "conditionals",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "------- the global financial market recovers, investors will continue to seek refuge in ------- gold and silver.",
    "options": [
      "As long as / an",
      "Although / the",
      "Because / a",
      "Unless / Ø",
      "In case / the"
    ],
    "answer": 3,
    "explanation": "Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
    "distractorAnalysis": {
      "A": "'As long as / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Although / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Because / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
      "E": "'In case / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "memoryCode": "🎵 [Karma Gramer]: Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-210",
    "topicSlug": "comparatives",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The new high-speed electric locomotive runs far ------- than older diesel models, consuming ------- energy per passenger.",
    "options": [
      "more quietly / less",
      "most quietly / little",
      "quiet / much",
      "quietly / fewer",
      "more quiet / least"
    ],
    "answer": 0,
    "explanation": "Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
    "distractorAnalysis": {
      "A": "DOĞRU: Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
      "B": "'most quietly / little' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'quiet / much' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'quietly / fewer' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'more quiet / least' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Run + more quietly than; less energy.",
    "memoryCode": "🎵 [Karma Gramer]: Run + more quietly than; less energy.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-211",
    "topicSlug": "noun-clauses",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The clinical panel investigated ------- the sudden surge in neurological diagnoses was ------- environmental pollutants.",
    "options": [
      "how / contrary to",
      "what / rather than",
      "whether / due to",
      "that / in spite of",
      "which / as well as"
    ],
    "answer": 2,
    "explanation": "Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
    "distractorAnalysis": {
      "A": "'how / contrary to' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'what / rather than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
      "D": "'that / in spite of' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'which / as well as' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Investigate + whether; due to = -den kaynaklanan.",
    "memoryCode": "🎵 [Karma Gramer]: Investigate + whether; due to = -den kaynaklanan.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-212",
    "topicSlug": "inversion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Under no circumstances ------- researchers modify experimental datasets without ------- formal written authorization.",
    "options": [
      "ought / to obtain",
      "have / having obtained",
      "would / obtain",
      "should / obtaining",
      "must have / obtained"
    ],
    "answer": 3,
    "explanation": "'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
    "distractorAnalysis": {
      "A": "'ought / to obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'have / having obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'would / obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
      "E": "'must have / obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Under no circumstances + should + S + V1; without + V-ing.",
    "memoryCode": "🎵 [Karma Gramer]: Under no circumstances + should + S + V1; without + V-ing.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-213",
    "topicSlug": "causatives",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The university had the entire library archive ------- by specialized digital technicians to ------- rare manuscripts.",
    "options": [
      "being digitized / preserve",
      "digitize / preserving",
      "to digitize / preserved",
      "digitizing / to preserve",
      "digitized / preserve"
    ],
    "answer": 4,
    "explanation": "'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
    "distractorAnalysis": {
      "A": "'being digitized / preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'digitize / preserving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'to digitize / preserved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'digitizing / to preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için)."
    },
    "tactic": "Have + nesne + V3; to V1 (amaç).",
    "memoryCode": "🎵 [Karma Gramer]: Have + nesne + V3; to V1 (amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-214",
    "topicSlug": "determiners",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "------- many students registered for the introductory chemistry course that the department had to open an extra section.",
    "options": [
      "Such",
      "Too",
      "Very",
      "As",
      "So"
    ],
    "answer": 4,
    "explanation": "'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
    "distractorAnalysis": {
      "A": "'Such' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Too' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Very' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'As' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...)."
    },
    "tactic": "So many / so much ... THAT! (Such a lot of).",
    "memoryCode": "🎵 [Karma Gramer]: So many / so much ... THAT! (Such a lot of).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-215",
    "topicSlug": "phrasal-verbs",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The company decided to ------- several inefficient regional branches in order to ------- operating costs during the crisis.",
    "options": [
      "put up with / maximize",
      "carry out / elevate",
      "look into / enhance",
      "bring about / augment",
      "close down / curtail"
    ],
    "answer": 4,
    "explanation": "Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
    "distractorAnalysis": {
      "A": "'put up with / maximize' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'carry out / elevate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'look into / enhance' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'bring about / augment' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail)."
    },
    "tactic": "Close down a branch; curtail costs.",
    "memoryCode": "🎵 [Karma Gramer]: Close down a branch; curtail costs.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-216",
    "topicSlug": "articles",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The Amazon basin is ------- home to thousands of indigenous tribes, ------- language and customs are completely unique.",
    "options": [
      "an / whom",
      "the / which",
      "Ø / whose",
      "the / where",
      "a / that"
    ],
    "answer": 2,
    "explanation": "'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
    "distractorAnalysis": {
      "A": "'an / whom' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'the / which' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
      "D": "'the / where' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'a / that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Be home to (Ø); tribes whose language...",
    "memoryCode": "🎵 [Karma Gramer]: Be home to (Ø); tribes whose language...",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-217",
    "topicSlug": "adverbial-clauses",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "------- progress has been made in quantum computing, several foundational hardware bottlenecks remain -------.",
    "options": [
      "In case / to resolve",
      "Since / solving",
      "Although / unresolved",
      "Because / resolved",
      "Unless / resolution"
    ],
    "answer": 2,
    "explanation": "İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
    "distractorAnalysis": {
      "A": "'In case / to resolve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Since / solving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
      "D": "'Because / resolved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Unless / resolution' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "memoryCode": "🎵 [Karma Gramer]: Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-218",
    "topicSlug": "perfect-modals",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The criminal suspect ------- the theft because reliable airport security cameras recorded him in Berlin at that exact moment.",
    "options": [
      "cannot have committed",
      "should commit",
      "must have committed",
      "needn't commit",
      "might have committed"
    ],
    "answer": 0,
    "explanation": "Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
    "distractorAnalysis": {
      "A": "DOĞRU: Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
      "B": "'should commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'must have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'needn't commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'might have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Cannot / Couldn't have V3 = Yapmış olamaz.",
    "memoryCode": "🎵 [Karma Gramer]: Cannot / Couldn't have V3 = Yapmış olamaz.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-219",
    "topicSlug": "conjunctions",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The local municipality decided to construct a bypass road ------- heavy freight trucks would not congest residential streets.",
    "options": [
      "unless",
      "so that",
      "lest",
      "provided that",
      "in case"
    ],
    "answer": 1,
    "explanation": "Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
    "distractorAnalysis": {
      "A": "'unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
      "C": "'lest' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'in case' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "So that + modal = -sın diye (Amaç).",
    "memoryCode": "🎵 [Karma Gramer]: So that + modal = -sın diye (Amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-220",
    "topicSlug": "inversion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Rarely ------- an author capture the psychological complexities of wartime trauma with such profound sensitivity.",
    "options": [
      "is",
      "has",
      "was",
      "did",
      "does"
    ],
    "answer": 4,
    "explanation": "'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
    "distractorAnalysis": {
      "A": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'has' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'did' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur."
    },
    "tactic": "Rarely + does + S + V1.",
    "memoryCode": "🎵 [Karma Gramer]: Rarely + does + S + V1.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-221",
    "topicSlug": "tenses",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "By the end of this decade, marine renewable energy technologies ------- into mainstream commercial grids across Europe.",
    "options": [
      "will integrate",
      "were integrated",
      "will have been integrated",
      "have been integrated",
      "are integrated"
    ],
    "answer": 2,
    "explanation": "'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
    "distractorAnalysis": {
      "A": "'will integrate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'were integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
      "D": "'have been integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'are integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "By + Gelecek zaman + Pasif = will have been + V3.",
    "memoryCode": "🎵 [Karma Gramer]: By + Gelecek zaman + Pasif = will have been + V3.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-222",
    "topicSlug": "gerunds-infinitives",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The research team succeeded in ------- the rare enzyme after ------- multiple biochemical assays in the laboratory.",
    "options": [
      "having synthesized / conduct",
      "synthesize / to conduct",
      "to synthesize / conduct",
      "synthesized / conducted",
      "synthesizing / conducting"
    ],
    "answer": 4,
    "explanation": "Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
    "distractorAnalysis": {
      "A": "'having synthesized / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'synthesize / to conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'to synthesize / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'synthesized / conducted' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur."
    },
    "tactic": "Preposition + V-ing kuralı.",
    "memoryCode": "🎵 [Karma Gramer]: Preposition + V-ing kuralı.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-223",
    "topicSlug": "determiners",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Neither the university chancellor nor the faculty deans ------- prepared to compromise on the revised academic standards.",
    "options": [
      "be",
      "is",
      "were",
      "was",
      "has been"
    ],
    "answer": 2,
    "explanation": "'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
    "distractorAnalysis": {
      "A": "'be' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
      "D": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'has been' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Neither ... nor en yakın özneye bakar!",
    "memoryCode": "🎵 [Karma Gramer]: Neither ... nor en yakın özneye bakar!",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-224",
    "topicSlug": "adverbial-clauses",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "------- the economic inflation continued to soar, the central bank decided to raise benchmark lending rates.",
    "options": [
      "Whereas",
      "Unless",
      "Although",
      "Even if",
      "As"
    ],
    "answer": 4,
    "explanation": "Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
    "distractorAnalysis": {
      "A": "'Whereas' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Although' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Even if' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir."
    },
    "tactic": "As = -dıkça / çünkü.",
    "memoryCode": "🎵 [Karma Gramer]: As = -dıkça / çünkü.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-225",
    "topicSlug": "determiners",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The government launched a public campaign to ensure that ------- citizen had equal access to high-speed digital infrastructure.",
    "options": [
      "several",
      "every",
      "both",
      "all",
      "many"
    ],
    "answer": 1,
    "explanation": "Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
    "distractorAnalysis": {
      "A": "'several' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
      "C": "'both' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'all' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'many' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Every + Tekil isim.",
    "memoryCode": "🎵 [Karma Gramer]: Every + Tekil isim.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-226",
    "topicSlug": "tenses",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Although the committee members ------- the proposal thoroughly yesterday, they decided ------- their final vote until next week.",
    "options": [
      "were reviewing / postponed",
      "have reviewed / to postpone",
      "review / postpone",
      "had reviewed / postponing",
      "reviewed / to postpone"
    ],
    "answer": 4,
    "explanation": "'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
    "distractorAnalysis": {
      "A": "'were reviewing / postponed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'have reviewed / to postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'review / postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'had reviewed / postponing' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir."
    },
    "tactic": "Yesterday -> V2; decide -> to V1.",
    "memoryCode": "🎵 [Karma Gramer]: Yesterday -> V2; decide -> to V1.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-227",
    "topicSlug": "passive-voice",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The ancient temple, ------- by archaeologists last year, is widely believed ------- by a powerful volcanic eruption.",
    "options": [
      "discovering / to destroy",
      "discovered / destroying",
      "having discovered / destroyed",
      "discovered / to have been destroyed",
      "was discovered / to be destroyed"
    ],
    "answer": 3,
    "explanation": "İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
    "distractorAnalysis": {
      "A": "'discovering / to destroy' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'discovered / destroying' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'having discovered / destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
      "E": "'was discovered / to be destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "V3 niteleme + is believed to have been V3.",
    "memoryCode": "🎵 [Karma Gramer]: V3 niteleme + is believed to have been V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-228",
    "topicSlug": "conjunctions",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "------- the torrential storm damaged the transmission towers, technicians managed to restore power ------- a few hours.",
    "options": [
      "Unless / for",
      "Since / on",
      "Even though / within",
      "In case / through",
      "Because / at"
    ],
    "answer": 2,
    "explanation": "Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
    "distractorAnalysis": {
      "A": "'Unless / for' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Since / on' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
      "D": "'In case / through' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Because / at' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "memoryCode": "🎵 [Karma Gramer]: Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-229",
    "topicSlug": "conditionals",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Had the emergency medical team ------- immediately, the patient's critical condition ------- so drastically.",
    "options": [
      "arrived / would not have deteriorated",
      "arrive / did not deteriorate",
      "arrived / had not deteriorated",
      "had arrived / would not deteriorate",
      "been arrived / was not deteriorated"
    ],
    "answer": 0,
    "explanation": "Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
    "distractorAnalysis": {
      "A": "DOĞRU: Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
      "B": "'arrive / did not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'arrived / had not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'had arrived / would not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'been arrived / was not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Had + S + V3 -> would have V3.",
    "memoryCode": "🎵 [Karma Gramer]: Had + S + V3 -> would have V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-230",
    "topicSlug": "gerunds-infinitives",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The laboratory supervisor insisted on ------- the chemical containers carefully ------- any toxic leakage should occur.",
    "options": [
      "having inspected / provided that",
      "inspecting / lest",
      "to inspect / so that",
      "inspected / unless",
      "inspect / in order that"
    ],
    "answer": 1,
    "explanation": "'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
    "distractorAnalysis": {
      "A": "'having inspected / provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
      "C": "'to inspect / so that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'inspected / unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'inspect / in order that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Insist on + V-ing; lest + should/yalın fiil.",
    "memoryCode": "🎵 [Karma Gramer]: Insist on + V-ing; lest + should/yalın fiil.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-231",
    "topicSlug": "inversion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "------- had the international peace treaty been signed ------- border skirmishes erupted once again.",
    "options": [
      "Scarcely / when",
      "No sooner / than",
      "Hardly / than",
      "Not only / but also",
      "Neither / nor"
    ],
    "answer": 0,
    "explanation": "'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
      "B": "'No sooner / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Hardly / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Not only / but also' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Neither / nor' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Scarcely ... WHEN! (No sooner ... THAN).",
    "memoryCode": "🎵 [Karma Gramer]: Scarcely ... WHEN! (No sooner ... THAN).",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-232",
    "topicSlug": "relative-clauses",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The distinguished astrophysicist, ------- research into dark matter revolutionized cosmology, received ------- award yesterday.",
    "options": [
      "whom / an",
      "that / Ø",
      "who / the",
      "whose / an",
      "which / a"
    ],
    "answer": 3,
    "explanation": "Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
    "distractorAnalysis": {
      "A": "'whom / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'that / Ø' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'who / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
      "E": "'which / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "İsim + whose + isim; an award.",
    "memoryCode": "🎵 [Karma Gramer]: İsim + whose + isim; an award.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-233",
    "topicSlug": "perfect-modals",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "You ------- all that heavy reference material to class this morning; the teacher uploaded digital copies -------.",
    "options": [
      "must not bring / furthermore",
      "could not bring / nevertheless",
      "needn't have brought / instead",
      "would rather bring / therefore",
      "should have brought / otherwise"
    ],
    "answer": 2,
    "explanation": "Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
    "distractorAnalysis": {
      "A": "'must not bring / furthermore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'could not bring / nevertheless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
      "D": "'would rather bring / therefore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'should have brought / otherwise' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Needn't have V3 = Gerek yoktu ama yaptın.",
    "memoryCode": "🎵 [Karma Gramer]: Needn't have V3 = Gerek yoktu ama yaptın.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-234",
    "topicSlug": "conditionals",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "------- the global financial market recovers, investors will continue to seek refuge in ------- gold and silver.",
    "options": [
      "In case / the",
      "As long as / an",
      "Although / the",
      "Unless / Ø",
      "Because / a"
    ],
    "answer": 3,
    "explanation": "Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
    "distractorAnalysis": {
      "A": "'In case / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'As long as / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Although / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
      "E": "'Because / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "memoryCode": "🎵 [Karma Gramer]: Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-235",
    "topicSlug": "comparatives",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The new high-speed electric locomotive runs far ------- than older diesel models, consuming ------- energy per passenger.",
    "options": [
      "quiet / much",
      "more quietly / less",
      "most quietly / little",
      "more quiet / least",
      "quietly / fewer"
    ],
    "answer": 1,
    "explanation": "Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
    "distractorAnalysis": {
      "A": "'quiet / much' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
      "C": "'most quietly / little' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'more quiet / least' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'quietly / fewer' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Run + more quietly than; less energy.",
    "memoryCode": "🎵 [Karma Gramer]: Run + more quietly than; less energy.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-236",
    "topicSlug": "noun-clauses",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The clinical panel investigated ------- the sudden surge in neurological diagnoses was ------- environmental pollutants.",
    "options": [
      "what / rather than",
      "how / contrary to",
      "that / in spite of",
      "whether / due to",
      "which / as well as"
    ],
    "answer": 3,
    "explanation": "Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
    "distractorAnalysis": {
      "A": "'what / rather than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'how / contrary to' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'that / in spite of' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
      "E": "'which / as well as' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Investigate + whether; due to = -den kaynaklanan.",
    "memoryCode": "🎵 [Karma Gramer]: Investigate + whether; due to = -den kaynaklanan.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-237",
    "topicSlug": "inversion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Under no circumstances ------- researchers modify experimental datasets without ------- formal written authorization.",
    "options": [
      "should / obtaining",
      "ought / to obtain",
      "would / obtain",
      "have / having obtained",
      "must have / obtained"
    ],
    "answer": 0,
    "explanation": "'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
      "B": "'ought / to obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'would / obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'have / having obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'must have / obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Under no circumstances + should + S + V1; without + V-ing.",
    "memoryCode": "🎵 [Karma Gramer]: Under no circumstances + should + S + V1; without + V-ing.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-238",
    "topicSlug": "causatives",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The university had the entire library archive ------- by specialized digital technicians to ------- rare manuscripts.",
    "options": [
      "to digitize / preserved",
      "digitizing / to preserve",
      "being digitized / preserve",
      "digitize / preserving",
      "digitized / preserve"
    ],
    "answer": 4,
    "explanation": "'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
    "distractorAnalysis": {
      "A": "'to digitize / preserved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'digitizing / to preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'being digitized / preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'digitize / preserving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için)."
    },
    "tactic": "Have + nesne + V3; to V1 (amaç).",
    "memoryCode": "🎵 [Karma Gramer]: Have + nesne + V3; to V1 (amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-239",
    "topicSlug": "determiners",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "------- many students registered for the introductory chemistry course that the department had to open an extra section.",
    "options": [
      "Too",
      "Very",
      "So",
      "As",
      "Such"
    ],
    "answer": 2,
    "explanation": "'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
    "distractorAnalysis": {
      "A": "'Too' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Very' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
      "D": "'As' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Such' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "So many / so much ... THAT! (Such a lot of).",
    "memoryCode": "🎵 [Karma Gramer]: So many / so much ... THAT! (Such a lot of).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-240",
    "topicSlug": "phrasal-verbs",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The company decided to ------- several inefficient regional branches in order to ------- operating costs during the crisis.",
    "options": [
      "bring about / augment",
      "carry out / elevate",
      "close down / curtail",
      "put up with / maximize",
      "look into / enhance"
    ],
    "answer": 2,
    "explanation": "Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
    "distractorAnalysis": {
      "A": "'bring about / augment' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'carry out / elevate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
      "D": "'put up with / maximize' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'look into / enhance' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Close down a branch; curtail costs.",
    "memoryCode": "🎵 [Karma Gramer]: Close down a branch; curtail costs.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-241",
    "topicSlug": "articles",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The Amazon basin is ------- home to thousands of indigenous tribes, ------- language and customs are completely unique.",
    "options": [
      "the / which",
      "Ø / whose",
      "the / where",
      "an / whom",
      "a / that"
    ],
    "answer": 1,
    "explanation": "'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
    "distractorAnalysis": {
      "A": "'the / which' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
      "C": "'the / where' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'an / whom' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'a / that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Be home to (Ø); tribes whose language...",
    "memoryCode": "🎵 [Karma Gramer]: Be home to (Ø); tribes whose language...",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-242",
    "topicSlug": "adverbial-clauses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- progress has been made in quantum computing, several foundational hardware bottlenecks remain -------.",
    "options": [
      "Unless / resolution",
      "Since / solving",
      "In case / to resolve",
      "Although / unresolved",
      "Because / resolved"
    ],
    "answer": 3,
    "explanation": "İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
    "distractorAnalysis": {
      "A": "'Unless / resolution' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Since / solving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'In case / to resolve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
      "E": "'Because / resolved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "memoryCode": "🎵 [Karma Gramer]: Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-243",
    "topicSlug": "perfect-modals",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The criminal suspect ------- the theft because reliable airport security cameras recorded him in Berlin at that exact moment.",
    "options": [
      "must have committed",
      "should commit",
      "cannot have committed",
      "needn't commit",
      "might have committed"
    ],
    "answer": 2,
    "explanation": "Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
    "distractorAnalysis": {
      "A": "'must have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'should commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
      "D": "'needn't commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'might have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Cannot / Couldn't have V3 = Yapmış olamaz.",
    "memoryCode": "🎵 [Karma Gramer]: Cannot / Couldn't have V3 = Yapmış olamaz.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-244",
    "topicSlug": "conjunctions",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The local municipality decided to construct a bypass road ------- heavy freight trucks would not congest residential streets.",
    "options": [
      "unless",
      "so that",
      "provided that",
      "in case",
      "lest"
    ],
    "answer": 1,
    "explanation": "Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
    "distractorAnalysis": {
      "A": "'unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
      "C": "'provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'in case' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'lest' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "So that + modal = -sın diye (Amaç).",
    "memoryCode": "🎵 [Karma Gramer]: So that + modal = -sın diye (Amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-245",
    "topicSlug": "inversion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Rarely ------- an author capture the psychological complexities of wartime trauma with such profound sensitivity.",
    "options": [
      "has",
      "was",
      "is",
      "did",
      "does"
    ],
    "answer": 4,
    "explanation": "'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
    "distractorAnalysis": {
      "A": "'has' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'did' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur."
    },
    "tactic": "Rarely + does + S + V1.",
    "memoryCode": "🎵 [Karma Gramer]: Rarely + does + S + V1.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-246",
    "topicSlug": "tenses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "By the end of this decade, marine renewable energy technologies ------- into mainstream commercial grids across Europe.",
    "options": [
      "will integrate",
      "will have been integrated",
      "were integrated",
      "have been integrated",
      "are integrated"
    ],
    "answer": 1,
    "explanation": "'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
    "distractorAnalysis": {
      "A": "'will integrate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
      "C": "'were integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'have been integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'are integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "By + Gelecek zaman + Pasif = will have been + V3.",
    "memoryCode": "🎵 [Karma Gramer]: By + Gelecek zaman + Pasif = will have been + V3.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-247",
    "topicSlug": "gerunds-infinitives",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The research team succeeded in ------- the rare enzyme after ------- multiple biochemical assays in the laboratory.",
    "options": [
      "synthesized / conducted",
      "to synthesize / conduct",
      "synthesizing / conducting",
      "synthesize / to conduct",
      "having synthesized / conduct"
    ],
    "answer": 2,
    "explanation": "Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
    "distractorAnalysis": {
      "A": "'synthesized / conducted' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'to synthesize / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
      "D": "'synthesize / to conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'having synthesized / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Preposition + V-ing kuralı.",
    "memoryCode": "🎵 [Karma Gramer]: Preposition + V-ing kuralı.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-248",
    "topicSlug": "determiners",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Neither the university chancellor nor the faculty deans ------- prepared to compromise on the revised academic standards.",
    "options": [
      "were",
      "was",
      "is",
      "has been",
      "be"
    ],
    "answer": 0,
    "explanation": "'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
      "B": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'has been' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'be' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Neither ... nor en yakın özneye bakar!",
    "memoryCode": "🎵 [Karma Gramer]: Neither ... nor en yakın özneye bakar!",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-249",
    "topicSlug": "adverbial-clauses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- the economic inflation continued to soar, the central bank decided to raise benchmark lending rates.",
    "options": [
      "As",
      "Although",
      "Even if",
      "Whereas",
      "Unless"
    ],
    "answer": 0,
    "explanation": "Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
    "distractorAnalysis": {
      "A": "DOĞRU: Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
      "B": "'Although' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Even if' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Whereas' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "As = -dıkça / çünkü.",
    "memoryCode": "🎵 [Karma Gramer]: As = -dıkça / çünkü.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-250",
    "topicSlug": "determiners",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The government launched a public campaign to ensure that ------- citizen had equal access to high-speed digital infrastructure.",
    "options": [
      "every",
      "several",
      "all",
      "both",
      "many"
    ],
    "answer": 0,
    "explanation": "Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
    "distractorAnalysis": {
      "A": "DOĞRU: Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
      "B": "'several' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'all' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'both' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'many' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Every + Tekil isim.",
    "memoryCode": "🎵 [Karma Gramer]: Every + Tekil isim.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-251",
    "topicSlug": "tenses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Although the committee members ------- the proposal thoroughly yesterday, they decided ------- their final vote until next week.",
    "options": [
      "have reviewed / to postpone",
      "review / postpone",
      "had reviewed / postponing",
      "reviewed / to postpone",
      "were reviewing / postponed"
    ],
    "answer": 3,
    "explanation": "'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
    "distractorAnalysis": {
      "A": "'have reviewed / to postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'review / postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'had reviewed / postponing' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
      "E": "'were reviewing / postponed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Yesterday -> V2; decide -> to V1.",
    "memoryCode": "🎵 [Karma Gramer]: Yesterday -> V2; decide -> to V1.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-252",
    "topicSlug": "passive-voice",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The ancient temple, ------- by archaeologists last year, is widely believed ------- by a powerful volcanic eruption.",
    "options": [
      "discovered / destroying",
      "discovering / to destroy",
      "discovered / to have been destroyed",
      "was discovered / to be destroyed",
      "having discovered / destroyed"
    ],
    "answer": 2,
    "explanation": "İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
    "distractorAnalysis": {
      "A": "'discovered / destroying' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'discovering / to destroy' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
      "D": "'was discovered / to be destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'having discovered / destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "V3 niteleme + is believed to have been V3.",
    "memoryCode": "🎵 [Karma Gramer]: V3 niteleme + is believed to have been V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-253",
    "topicSlug": "conjunctions",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- the torrential storm damaged the transmission towers, technicians managed to restore power ------- a few hours.",
    "options": [
      "Even though / within",
      "Unless / for",
      "In case / through",
      "Since / on",
      "Because / at"
    ],
    "answer": 0,
    "explanation": "Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
    "distractorAnalysis": {
      "A": "DOĞRU: Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
      "B": "'Unless / for' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'In case / through' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Since / on' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Because / at' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "memoryCode": "🎵 [Karma Gramer]: Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-254",
    "topicSlug": "conditionals",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Had the emergency medical team ------- immediately, the patient's critical condition ------- so drastically.",
    "options": [
      "arrived / would not have deteriorated",
      "had arrived / would not deteriorate",
      "arrived / had not deteriorated",
      "arrive / did not deteriorate",
      "been arrived / was not deteriorated"
    ],
    "answer": 0,
    "explanation": "Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
    "distractorAnalysis": {
      "A": "DOĞRU: Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
      "B": "'had arrived / would not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'arrived / had not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'arrive / did not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'been arrived / was not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Had + S + V3 -> would have V3.",
    "memoryCode": "🎵 [Karma Gramer]: Had + S + V3 -> would have V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-255",
    "topicSlug": "gerunds-infinitives",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The laboratory supervisor insisted on ------- the chemical containers carefully ------- any toxic leakage should occur.",
    "options": [
      "to inspect / so that",
      "inspecting / lest",
      "inspect / in order that",
      "having inspected / provided that",
      "inspected / unless"
    ],
    "answer": 1,
    "explanation": "'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
    "distractorAnalysis": {
      "A": "'to inspect / so that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
      "C": "'inspect / in order that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'having inspected / provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'inspected / unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Insist on + V-ing; lest + should/yalın fiil.",
    "memoryCode": "🎵 [Karma Gramer]: Insist on + V-ing; lest + should/yalın fiil.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-256",
    "topicSlug": "inversion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- had the international peace treaty been signed ------- border skirmishes erupted once again.",
    "options": [
      "Hardly / than",
      "No sooner / than",
      "Not only / but also",
      "Scarcely / when",
      "Neither / nor"
    ],
    "answer": 3,
    "explanation": "'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
    "distractorAnalysis": {
      "A": "'Hardly / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'No sooner / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Not only / but also' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
      "E": "'Neither / nor' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Scarcely ... WHEN! (No sooner ... THAN).",
    "memoryCode": "🎵 [Karma Gramer]: Scarcely ... WHEN! (No sooner ... THAN).",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-257",
    "topicSlug": "relative-clauses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The distinguished astrophysicist, ------- research into dark matter revolutionized cosmology, received ------- award yesterday.",
    "options": [
      "who / the",
      "that / Ø",
      "whom / an",
      "which / a",
      "whose / an"
    ],
    "answer": 4,
    "explanation": "Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
    "distractorAnalysis": {
      "A": "'who / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'that / Ø' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'whom / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'which / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir."
    },
    "tactic": "İsim + whose + isim; an award.",
    "memoryCode": "🎵 [Karma Gramer]: İsim + whose + isim; an award.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-258",
    "topicSlug": "perfect-modals",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "You ------- all that heavy reference material to class this morning; the teacher uploaded digital copies -------.",
    "options": [
      "must not bring / furthermore",
      "needn't have brought / instead",
      "could not bring / nevertheless",
      "should have brought / otherwise",
      "would rather bring / therefore"
    ],
    "answer": 1,
    "explanation": "Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
    "distractorAnalysis": {
      "A": "'must not bring / furthermore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
      "C": "'could not bring / nevertheless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'should have brought / otherwise' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'would rather bring / therefore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Needn't have V3 = Gerek yoktu ama yaptın.",
    "memoryCode": "🎵 [Karma Gramer]: Needn't have V3 = Gerek yoktu ama yaptın.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-259",
    "topicSlug": "conditionals",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- the global financial market recovers, investors will continue to seek refuge in ------- gold and silver.",
    "options": [
      "Although / the",
      "Unless / Ø",
      "In case / the",
      "As long as / an",
      "Because / a"
    ],
    "answer": 1,
    "explanation": "Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
    "distractorAnalysis": {
      "A": "'Although / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
      "C": "'In case / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'As long as / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Because / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "memoryCode": "🎵 [Karma Gramer]: Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-260",
    "topicSlug": "comparatives",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The new high-speed electric locomotive runs far ------- than older diesel models, consuming ------- energy per passenger.",
    "options": [
      "most quietly / little",
      "quietly / fewer",
      "quiet / much",
      "more quiet / least",
      "more quietly / less"
    ],
    "answer": 4,
    "explanation": "Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
    "distractorAnalysis": {
      "A": "'most quietly / little' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'quietly / fewer' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'quiet / much' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'more quiet / least' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır."
    },
    "tactic": "Run + more quietly than; less energy.",
    "memoryCode": "🎵 [Karma Gramer]: Run + more quietly than; less energy.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-261",
    "topicSlug": "noun-clauses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The clinical panel investigated ------- the sudden surge in neurological diagnoses was ------- environmental pollutants.",
    "options": [
      "which / as well as",
      "that / in spite of",
      "whether / due to",
      "what / rather than",
      "how / contrary to"
    ],
    "answer": 2,
    "explanation": "Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
    "distractorAnalysis": {
      "A": "'which / as well as' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'that / in spite of' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
      "D": "'what / rather than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'how / contrary to' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Investigate + whether; due to = -den kaynaklanan.",
    "memoryCode": "🎵 [Karma Gramer]: Investigate + whether; due to = -den kaynaklanan.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-262",
    "topicSlug": "inversion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Under no circumstances ------- researchers modify experimental datasets without ------- formal written authorization.",
    "options": [
      "should / obtaining",
      "have / having obtained",
      "ought / to obtain",
      "must have / obtained",
      "would / obtain"
    ],
    "answer": 0,
    "explanation": "'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
      "B": "'have / having obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'ought / to obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'must have / obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'would / obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Under no circumstances + should + S + V1; without + V-ing.",
    "memoryCode": "🎵 [Karma Gramer]: Under no circumstances + should + S + V1; without + V-ing.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-263",
    "topicSlug": "causatives",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The university had the entire library archive ------- by specialized digital technicians to ------- rare manuscripts.",
    "options": [
      "being digitized / preserve",
      "to digitize / preserved",
      "digitizing / to preserve",
      "digitized / preserve",
      "digitize / preserving"
    ],
    "answer": 3,
    "explanation": "'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
    "distractorAnalysis": {
      "A": "'being digitized / preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'to digitize / preserved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'digitizing / to preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
      "E": "'digitize / preserving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Have + nesne + V3; to V1 (amaç).",
    "memoryCode": "🎵 [Karma Gramer]: Have + nesne + V3; to V1 (amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-264",
    "topicSlug": "determiners",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- many students registered for the introductory chemistry course that the department had to open an extra section.",
    "options": [
      "As",
      "So",
      "Very",
      "Too",
      "Such"
    ],
    "answer": 1,
    "explanation": "'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
    "distractorAnalysis": {
      "A": "'As' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
      "C": "'Very' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Too' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Such' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "So many / so much ... THAT! (Such a lot of).",
    "memoryCode": "🎵 [Karma Gramer]: So many / so much ... THAT! (Such a lot of).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-265",
    "topicSlug": "phrasal-verbs",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The company decided to ------- several inefficient regional branches in order to ------- operating costs during the crisis.",
    "options": [
      "look into / enhance",
      "carry out / elevate",
      "bring about / augment",
      "close down / curtail",
      "put up with / maximize"
    ],
    "answer": 3,
    "explanation": "Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
    "distractorAnalysis": {
      "A": "'look into / enhance' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'carry out / elevate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'bring about / augment' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
      "E": "'put up with / maximize' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Close down a branch; curtail costs.",
    "memoryCode": "🎵 [Karma Gramer]: Close down a branch; curtail costs.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-266",
    "topicSlug": "articles",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The Amazon basin is ------- home to thousands of indigenous tribes, ------- language and customs are completely unique.",
    "options": [
      "the / which",
      "Ø / whose",
      "a / that",
      "an / whom",
      "the / where"
    ],
    "answer": 1,
    "explanation": "'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
    "distractorAnalysis": {
      "A": "'the / which' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
      "C": "'a / that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'an / whom' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'the / where' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Be home to (Ø); tribes whose language...",
    "memoryCode": "🎵 [Karma Gramer]: Be home to (Ø); tribes whose language...",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-267",
    "topicSlug": "adverbial-clauses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- progress has been made in quantum computing, several foundational hardware bottlenecks remain -------.",
    "options": [
      "Unless / resolution",
      "In case / to resolve",
      "Since / solving",
      "Although / unresolved",
      "Because / resolved"
    ],
    "answer": 3,
    "explanation": "İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
    "distractorAnalysis": {
      "A": "'Unless / resolution' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'In case / to resolve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Since / solving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
      "E": "'Because / resolved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "memoryCode": "🎵 [Karma Gramer]: Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-268",
    "topicSlug": "perfect-modals",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The criminal suspect ------- the theft because reliable airport security cameras recorded him in Berlin at that exact moment.",
    "options": [
      "needn't commit",
      "should commit",
      "cannot have committed",
      "might have committed",
      "must have committed"
    ],
    "answer": 2,
    "explanation": "Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
    "distractorAnalysis": {
      "A": "'needn't commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'should commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
      "D": "'might have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'must have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Cannot / Couldn't have V3 = Yapmış olamaz.",
    "memoryCode": "🎵 [Karma Gramer]: Cannot / Couldn't have V3 = Yapmış olamaz.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-269",
    "topicSlug": "conjunctions",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The local municipality decided to construct a bypass road ------- heavy freight trucks would not congest residential streets.",
    "options": [
      "unless",
      "provided that",
      "lest",
      "in case",
      "so that"
    ],
    "answer": 4,
    "explanation": "Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
    "distractorAnalysis": {
      "A": "'unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'lest' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'in case' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar."
    },
    "tactic": "So that + modal = -sın diye (Amaç).",
    "memoryCode": "🎵 [Karma Gramer]: So that + modal = -sın diye (Amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-270",
    "topicSlug": "inversion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Rarely ------- an author capture the psychological complexities of wartime trauma with such profound sensitivity.",
    "options": [
      "does",
      "is",
      "did",
      "has",
      "was"
    ],
    "answer": 0,
    "explanation": "'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
      "B": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'did' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'has' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Rarely + does + S + V1.",
    "memoryCode": "🎵 [Karma Gramer]: Rarely + does + S + V1.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-271",
    "topicSlug": "tenses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "By the end of this decade, marine renewable energy technologies ------- into mainstream commercial grids across Europe.",
    "options": [
      "were integrated",
      "will have been integrated",
      "are integrated",
      "have been integrated",
      "will integrate"
    ],
    "answer": 1,
    "explanation": "'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
    "distractorAnalysis": {
      "A": "'were integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
      "C": "'are integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'have been integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'will integrate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "By + Gelecek zaman + Pasif = will have been + V3.",
    "memoryCode": "🎵 [Karma Gramer]: By + Gelecek zaman + Pasif = will have been + V3.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-272",
    "topicSlug": "gerunds-infinitives",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The research team succeeded in ------- the rare enzyme after ------- multiple biochemical assays in the laboratory.",
    "options": [
      "synthesize / to conduct",
      "to synthesize / conduct",
      "synthesized / conducted",
      "having synthesized / conduct",
      "synthesizing / conducting"
    ],
    "answer": 4,
    "explanation": "Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
    "distractorAnalysis": {
      "A": "'synthesize / to conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'to synthesize / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'synthesized / conducted' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'having synthesized / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur."
    },
    "tactic": "Preposition + V-ing kuralı.",
    "memoryCode": "🎵 [Karma Gramer]: Preposition + V-ing kuralı.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-273",
    "topicSlug": "determiners",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Neither the university chancellor nor the faculty deans ------- prepared to compromise on the revised academic standards.",
    "options": [
      "be",
      "has been",
      "were",
      "was",
      "is"
    ],
    "answer": 2,
    "explanation": "'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
    "distractorAnalysis": {
      "A": "'be' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'has been' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
      "D": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Neither ... nor en yakın özneye bakar!",
    "memoryCode": "🎵 [Karma Gramer]: Neither ... nor en yakın özneye bakar!",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-274",
    "topicSlug": "adverbial-clauses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- the economic inflation continued to soar, the central bank decided to raise benchmark lending rates.",
    "options": [
      "As",
      "Whereas",
      "Although",
      "Unless",
      "Even if"
    ],
    "answer": 0,
    "explanation": "Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
    "distractorAnalysis": {
      "A": "DOĞRU: Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
      "B": "'Whereas' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Although' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Even if' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "As = -dıkça / çünkü.",
    "memoryCode": "🎵 [Karma Gramer]: As = -dıkça / çünkü.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-275",
    "topicSlug": "determiners",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The government launched a public campaign to ensure that ------- citizen had equal access to high-speed digital infrastructure.",
    "options": [
      "every",
      "all",
      "many",
      "both",
      "several"
    ],
    "answer": 0,
    "explanation": "Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
    "distractorAnalysis": {
      "A": "DOĞRU: Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
      "B": "'all' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'many' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'both' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'several' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Every + Tekil isim.",
    "memoryCode": "🎵 [Karma Gramer]: Every + Tekil isim.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-276",
    "topicSlug": "tenses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Although the committee members ------- the proposal thoroughly yesterday, they decided ------- their final vote until next week.",
    "options": [
      "reviewed / to postpone",
      "have reviewed / to postpone",
      "were reviewing / postponed",
      "had reviewed / postponing",
      "review / postpone"
    ],
    "answer": 0,
    "explanation": "'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
      "B": "'have reviewed / to postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'were reviewing / postponed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'had reviewed / postponing' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'review / postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Yesterday -> V2; decide -> to V1.",
    "memoryCode": "🎵 [Karma Gramer]: Yesterday -> V2; decide -> to V1.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-277",
    "topicSlug": "passive-voice",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The ancient temple, ------- by archaeologists last year, is widely believed ------- by a powerful volcanic eruption.",
    "options": [
      "was discovered / to be destroyed",
      "discovering / to destroy",
      "having discovered / destroyed",
      "discovered / to have been destroyed",
      "discovered / destroying"
    ],
    "answer": 3,
    "explanation": "İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
    "distractorAnalysis": {
      "A": "'was discovered / to be destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'discovering / to destroy' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'having discovered / destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
      "E": "'discovered / destroying' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "V3 niteleme + is believed to have been V3.",
    "memoryCode": "🎵 [Karma Gramer]: V3 niteleme + is believed to have been V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-278",
    "topicSlug": "conjunctions",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- the torrential storm damaged the transmission towers, technicians managed to restore power ------- a few hours.",
    "options": [
      "In case / through",
      "Since / on",
      "Because / at",
      "Even though / within",
      "Unless / for"
    ],
    "answer": 3,
    "explanation": "Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
    "distractorAnalysis": {
      "A": "'In case / through' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Since / on' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Because / at' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
      "E": "'Unless / for' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "memoryCode": "🎵 [Karma Gramer]: Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-279",
    "topicSlug": "conditionals",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Had the emergency medical team ------- immediately, the patient's critical condition ------- so drastically.",
    "options": [
      "arrive / did not deteriorate",
      "been arrived / was not deteriorated",
      "arrived / had not deteriorated",
      "had arrived / would not deteriorate",
      "arrived / would not have deteriorated"
    ],
    "answer": 4,
    "explanation": "Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
    "distractorAnalysis": {
      "A": "'arrive / did not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'been arrived / was not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'arrived / had not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'had arrived / would not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir."
    },
    "tactic": "Had + S + V3 -> would have V3.",
    "memoryCode": "🎵 [Karma Gramer]: Had + S + V3 -> would have V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-280",
    "topicSlug": "gerunds-infinitives",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The laboratory supervisor insisted on ------- the chemical containers carefully ------- any toxic leakage should occur.",
    "options": [
      "inspecting / lest",
      "inspected / unless",
      "having inspected / provided that",
      "to inspect / so that",
      "inspect / in order that"
    ],
    "answer": 0,
    "explanation": "'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
      "B": "'inspected / unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'having inspected / provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'to inspect / so that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'inspect / in order that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Insist on + V-ing; lest + should/yalın fiil.",
    "memoryCode": "🎵 [Karma Gramer]: Insist on + V-ing; lest + should/yalın fiil.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-281",
    "topicSlug": "inversion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- had the international peace treaty been signed ------- border skirmishes erupted once again.",
    "options": [
      "Not only / but also",
      "Scarcely / when",
      "Hardly / than",
      "No sooner / than",
      "Neither / nor"
    ],
    "answer": 1,
    "explanation": "'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
    "distractorAnalysis": {
      "A": "'Not only / but also' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
      "C": "'Hardly / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'No sooner / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Neither / nor' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Scarcely ... WHEN! (No sooner ... THAN).",
    "memoryCode": "🎵 [Karma Gramer]: Scarcely ... WHEN! (No sooner ... THAN).",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-282",
    "topicSlug": "relative-clauses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The distinguished astrophysicist, ------- research into dark matter revolutionized cosmology, received ------- award yesterday.",
    "options": [
      "whose / an",
      "who / the",
      "which / a",
      "that / Ø",
      "whom / an"
    ],
    "answer": 0,
    "explanation": "Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
    "distractorAnalysis": {
      "A": "DOĞRU: Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
      "B": "'who / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'which / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'that / Ø' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'whom / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "İsim + whose + isim; an award.",
    "memoryCode": "🎵 [Karma Gramer]: İsim + whose + isim; an award.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-283",
    "topicSlug": "perfect-modals",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "You ------- all that heavy reference material to class this morning; the teacher uploaded digital copies -------.",
    "options": [
      "must not bring / furthermore",
      "would rather bring / therefore",
      "needn't have brought / instead",
      "could not bring / nevertheless",
      "should have brought / otherwise"
    ],
    "answer": 2,
    "explanation": "Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
    "distractorAnalysis": {
      "A": "'must not bring / furthermore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'would rather bring / therefore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
      "D": "'could not bring / nevertheless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'should have brought / otherwise' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Needn't have V3 = Gerek yoktu ama yaptın.",
    "memoryCode": "🎵 [Karma Gramer]: Needn't have V3 = Gerek yoktu ama yaptın.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-284",
    "topicSlug": "conditionals",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- the global financial market recovers, investors will continue to seek refuge in ------- gold and silver.",
    "options": [
      "Although / the",
      "In case / the",
      "Because / a",
      "As long as / an",
      "Unless / Ø"
    ],
    "answer": 4,
    "explanation": "Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
    "distractorAnalysis": {
      "A": "'Although / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'In case / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Because / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'As long as / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø)."
    },
    "tactic": "Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "memoryCode": "🎵 [Karma Gramer]: Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-285",
    "topicSlug": "comparatives",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The new high-speed electric locomotive runs far ------- than older diesel models, consuming ------- energy per passenger.",
    "options": [
      "more quiet / least",
      "more quietly / less",
      "most quietly / little",
      "quiet / much",
      "quietly / fewer"
    ],
    "answer": 1,
    "explanation": "Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
    "distractorAnalysis": {
      "A": "'more quiet / least' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
      "C": "'most quietly / little' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'quiet / much' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'quietly / fewer' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Run + more quietly than; less energy.",
    "memoryCode": "🎵 [Karma Gramer]: Run + more quietly than; less energy.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-286",
    "topicSlug": "noun-clauses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The clinical panel investigated ------- the sudden surge in neurological diagnoses was ------- environmental pollutants.",
    "options": [
      "which / as well as",
      "what / rather than",
      "how / contrary to",
      "that / in spite of",
      "whether / due to"
    ],
    "answer": 4,
    "explanation": "Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
    "distractorAnalysis": {
      "A": "'which / as well as' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'what / rather than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'how / contrary to' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'that / in spite of' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar."
    },
    "tactic": "Investigate + whether; due to = -den kaynaklanan.",
    "memoryCode": "🎵 [Karma Gramer]: Investigate + whether; due to = -den kaynaklanan.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-287",
    "topicSlug": "inversion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Under no circumstances ------- researchers modify experimental datasets without ------- formal written authorization.",
    "options": [
      "have / having obtained",
      "must have / obtained",
      "should / obtaining",
      "ought / to obtain",
      "would / obtain"
    ],
    "answer": 2,
    "explanation": "'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
    "distractorAnalysis": {
      "A": "'have / having obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'must have / obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
      "D": "'ought / to obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'would / obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Under no circumstances + should + S + V1; without + V-ing.",
    "memoryCode": "🎵 [Karma Gramer]: Under no circumstances + should + S + V1; without + V-ing.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-288",
    "topicSlug": "causatives",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The university had the entire library archive ------- by specialized digital technicians to ------- rare manuscripts.",
    "options": [
      "digitize / preserving",
      "being digitized / preserve",
      "to digitize / preserved",
      "digitizing / to preserve",
      "digitized / preserve"
    ],
    "answer": 4,
    "explanation": "'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
    "distractorAnalysis": {
      "A": "'digitize / preserving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'being digitized / preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'to digitize / preserved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'digitizing / to preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için)."
    },
    "tactic": "Have + nesne + V3; to V1 (amaç).",
    "memoryCode": "🎵 [Karma Gramer]: Have + nesne + V3; to V1 (amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-289",
    "topicSlug": "determiners",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- many students registered for the introductory chemistry course that the department had to open an extra section.",
    "options": [
      "Such",
      "Very",
      "Too",
      "As",
      "So"
    ],
    "answer": 4,
    "explanation": "'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
    "distractorAnalysis": {
      "A": "'Such' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Very' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Too' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'As' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...)."
    },
    "tactic": "So many / so much ... THAT! (Such a lot of).",
    "memoryCode": "🎵 [Karma Gramer]: So many / so much ... THAT! (Such a lot of).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-290",
    "topicSlug": "phrasal-verbs",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The company decided to ------- several inefficient regional branches in order to ------- operating costs during the crisis.",
    "options": [
      "bring about / augment",
      "close down / curtail",
      "carry out / elevate",
      "look into / enhance",
      "put up with / maximize"
    ],
    "answer": 1,
    "explanation": "Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
    "distractorAnalysis": {
      "A": "'bring about / augment' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
      "C": "'carry out / elevate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'look into / enhance' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'put up with / maximize' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Close down a branch; curtail costs.",
    "memoryCode": "🎵 [Karma Gramer]: Close down a branch; curtail costs.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-291",
    "topicSlug": "articles",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The Amazon basin is ------- home to thousands of indigenous tribes, ------- language and customs are completely unique.",
    "options": [
      "the / which",
      "the / where",
      "Ø / whose",
      "an / whom",
      "a / that"
    ],
    "answer": 2,
    "explanation": "'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
    "distractorAnalysis": {
      "A": "'the / which' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'the / where' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
      "D": "'an / whom' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'a / that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Be home to (Ø); tribes whose language...",
    "memoryCode": "🎵 [Karma Gramer]: Be home to (Ø); tribes whose language...",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-292",
    "topicSlug": "adverbial-clauses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- progress has been made in quantum computing, several foundational hardware bottlenecks remain -------.",
    "options": [
      "In case / to resolve",
      "Because / resolved",
      "Since / solving",
      "Unless / resolution",
      "Although / unresolved"
    ],
    "answer": 4,
    "explanation": "İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
    "distractorAnalysis": {
      "A": "'In case / to resolve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Because / resolved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Since / solving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Unless / resolution' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır."
    },
    "tactic": "Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "memoryCode": "🎵 [Karma Gramer]: Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-293",
    "topicSlug": "perfect-modals",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The criminal suspect ------- the theft because reliable airport security cameras recorded him in Berlin at that exact moment.",
    "options": [
      "must have committed",
      "should commit",
      "might have committed",
      "cannot have committed",
      "needn't commit"
    ],
    "answer": 3,
    "explanation": "Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
    "distractorAnalysis": {
      "A": "'must have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'should commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'might have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
      "E": "'needn't commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Cannot / Couldn't have V3 = Yapmış olamaz.",
    "memoryCode": "🎵 [Karma Gramer]: Cannot / Couldn't have V3 = Yapmış olamaz.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-294",
    "topicSlug": "conjunctions",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The local municipality decided to construct a bypass road ------- heavy freight trucks would not congest residential streets.",
    "options": [
      "provided that",
      "in case",
      "unless",
      "lest",
      "so that"
    ],
    "answer": 4,
    "explanation": "Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
    "distractorAnalysis": {
      "A": "'provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'in case' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'lest' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar."
    },
    "tactic": "So that + modal = -sın diye (Amaç).",
    "memoryCode": "🎵 [Karma Gramer]: So that + modal = -sın diye (Amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-295",
    "topicSlug": "inversion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Rarely ------- an author capture the psychological complexities of wartime trauma with such profound sensitivity.",
    "options": [
      "did",
      "was",
      "does",
      "has",
      "is"
    ],
    "answer": 2,
    "explanation": "'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
    "distractorAnalysis": {
      "A": "'did' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
      "D": "'has' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Rarely + does + S + V1.",
    "memoryCode": "🎵 [Karma Gramer]: Rarely + does + S + V1.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-296",
    "topicSlug": "tenses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "By the end of this decade, marine renewable energy technologies ------- into mainstream commercial grids across Europe.",
    "options": [
      "have been integrated",
      "will have been integrated",
      "were integrated",
      "are integrated",
      "will integrate"
    ],
    "answer": 1,
    "explanation": "'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
    "distractorAnalysis": {
      "A": "'have been integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
      "C": "'were integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'are integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'will integrate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "By + Gelecek zaman + Pasif = will have been + V3.",
    "memoryCode": "🎵 [Karma Gramer]: By + Gelecek zaman + Pasif = will have been + V3.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-297",
    "topicSlug": "gerunds-infinitives",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The research team succeeded in ------- the rare enzyme after ------- multiple biochemical assays in the laboratory.",
    "options": [
      "synthesized / conducted",
      "synthesizing / conducting",
      "to synthesize / conduct",
      "having synthesized / conduct",
      "synthesize / to conduct"
    ],
    "answer": 1,
    "explanation": "Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
    "distractorAnalysis": {
      "A": "'synthesized / conducted' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
      "C": "'to synthesize / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'having synthesized / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'synthesize / to conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Preposition + V-ing kuralı.",
    "memoryCode": "🎵 [Karma Gramer]: Preposition + V-ing kuralı.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-298",
    "topicSlug": "determiners",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Neither the university chancellor nor the faculty deans ------- prepared to compromise on the revised academic standards.",
    "options": [
      "is",
      "were",
      "has been",
      "was",
      "be"
    ],
    "answer": 1,
    "explanation": "'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
    "distractorAnalysis": {
      "A": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
      "C": "'has been' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'be' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Neither ... nor en yakın özneye bakar!",
    "memoryCode": "🎵 [Karma Gramer]: Neither ... nor en yakın özneye bakar!",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-299",
    "topicSlug": "adverbial-clauses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- the economic inflation continued to soar, the central bank decided to raise benchmark lending rates.",
    "options": [
      "As",
      "Whereas",
      "Even if",
      "Although",
      "Unless"
    ],
    "answer": 0,
    "explanation": "Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
    "distractorAnalysis": {
      "A": "DOĞRU: Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
      "B": "'Whereas' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Even if' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Although' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "As = -dıkça / çünkü.",
    "memoryCode": "🎵 [Karma Gramer]: As = -dıkça / çünkü.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-300",
    "topicSlug": "determiners",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The government launched a public campaign to ensure that ------- citizen had equal access to high-speed digital infrastructure.",
    "options": [
      "every",
      "many",
      "several",
      "all",
      "both"
    ],
    "answer": 0,
    "explanation": "Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
    "distractorAnalysis": {
      "A": "DOĞRU: Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
      "B": "'many' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'several' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'all' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'both' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Every + Tekil isim.",
    "memoryCode": "🎵 [Karma Gramer]: Every + Tekil isim.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-301",
    "topicSlug": "tenses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Although the committee members ------- the proposal thoroughly yesterday, they decided ------- their final vote until next week.",
    "options": [
      "review / postpone",
      "reviewed / to postpone",
      "have reviewed / to postpone",
      "were reviewing / postponed",
      "had reviewed / postponing"
    ],
    "answer": 1,
    "explanation": "'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
    "distractorAnalysis": {
      "A": "'review / postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
      "C": "'have reviewed / to postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'were reviewing / postponed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'had reviewed / postponing' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Yesterday -> V2; decide -> to V1.",
    "memoryCode": "🎵 [Karma Gramer]: Yesterday -> V2; decide -> to V1.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-302",
    "topicSlug": "passive-voice",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The ancient temple, ------- by archaeologists last year, is widely believed ------- by a powerful volcanic eruption.",
    "options": [
      "discovered / to have been destroyed",
      "discovering / to destroy",
      "discovered / destroying",
      "was discovered / to be destroyed",
      "having discovered / destroyed"
    ],
    "answer": 0,
    "explanation": "İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
    "distractorAnalysis": {
      "A": "DOĞRU: İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
      "B": "'discovering / to destroy' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'discovered / destroying' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'was discovered / to be destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'having discovered / destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "V3 niteleme + is believed to have been V3.",
    "memoryCode": "🎵 [Karma Gramer]: V3 niteleme + is believed to have been V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-303",
    "topicSlug": "conjunctions",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- the torrential storm damaged the transmission towers, technicians managed to restore power ------- a few hours.",
    "options": [
      "Because / at",
      "Since / on",
      "Unless / for",
      "Even though / within",
      "In case / through"
    ],
    "answer": 3,
    "explanation": "Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
    "distractorAnalysis": {
      "A": "'Because / at' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Since / on' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Unless / for' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
      "E": "'In case / through' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "memoryCode": "🎵 [Karma Gramer]: Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-304",
    "topicSlug": "conditionals",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Had the emergency medical team ------- immediately, the patient's critical condition ------- so drastically.",
    "options": [
      "arrive / did not deteriorate",
      "had arrived / would not deteriorate",
      "been arrived / was not deteriorated",
      "arrived / had not deteriorated",
      "arrived / would not have deteriorated"
    ],
    "answer": 4,
    "explanation": "Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
    "distractorAnalysis": {
      "A": "'arrive / did not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'had arrived / would not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'been arrived / was not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'arrived / had not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir."
    },
    "tactic": "Had + S + V3 -> would have V3.",
    "memoryCode": "🎵 [Karma Gramer]: Had + S + V3 -> would have V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-305",
    "topicSlug": "gerunds-infinitives",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The laboratory supervisor insisted on ------- the chemical containers carefully ------- any toxic leakage should occur.",
    "options": [
      "to inspect / so that",
      "having inspected / provided that",
      "inspecting / lest",
      "inspect / in order that",
      "inspected / unless"
    ],
    "answer": 2,
    "explanation": "'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
    "distractorAnalysis": {
      "A": "'to inspect / so that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'having inspected / provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
      "D": "'inspect / in order that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'inspected / unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Insist on + V-ing; lest + should/yalın fiil.",
    "memoryCode": "🎵 [Karma Gramer]: Insist on + V-ing; lest + should/yalın fiil.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-306",
    "topicSlug": "inversion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- had the international peace treaty been signed ------- border skirmishes erupted once again.",
    "options": [
      "No sooner / than",
      "Hardly / than",
      "Scarcely / when",
      "Not only / but also",
      "Neither / nor"
    ],
    "answer": 2,
    "explanation": "'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
    "distractorAnalysis": {
      "A": "'No sooner / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Hardly / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
      "D": "'Not only / but also' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Neither / nor' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Scarcely ... WHEN! (No sooner ... THAN).",
    "memoryCode": "🎵 [Karma Gramer]: Scarcely ... WHEN! (No sooner ... THAN).",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-307",
    "topicSlug": "relative-clauses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The distinguished astrophysicist, ------- research into dark matter revolutionized cosmology, received ------- award yesterday.",
    "options": [
      "that / Ø",
      "whose / an",
      "whom / an",
      "which / a",
      "who / the"
    ],
    "answer": 1,
    "explanation": "Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
    "distractorAnalysis": {
      "A": "'that / Ø' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
      "C": "'whom / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'which / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'who / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "İsim + whose + isim; an award.",
    "memoryCode": "🎵 [Karma Gramer]: İsim + whose + isim; an award.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-308",
    "topicSlug": "perfect-modals",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "You ------- all that heavy reference material to class this morning; the teacher uploaded digital copies -------.",
    "options": [
      "must not bring / furthermore",
      "could not bring / nevertheless",
      "needn't have brought / instead",
      "should have brought / otherwise",
      "would rather bring / therefore"
    ],
    "answer": 2,
    "explanation": "Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
    "distractorAnalysis": {
      "A": "'must not bring / furthermore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'could not bring / nevertheless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
      "D": "'should have brought / otherwise' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'would rather bring / therefore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Needn't have V3 = Gerek yoktu ama yaptın.",
    "memoryCode": "🎵 [Karma Gramer]: Needn't have V3 = Gerek yoktu ama yaptın.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-309",
    "topicSlug": "conditionals",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- the global financial market recovers, investors will continue to seek refuge in ------- gold and silver.",
    "options": [
      "As long as / an",
      "Although / the",
      "In case / the",
      "Unless / Ø",
      "Because / a"
    ],
    "answer": 3,
    "explanation": "Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
    "distractorAnalysis": {
      "A": "'As long as / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Although / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'In case / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
      "E": "'Because / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "memoryCode": "🎵 [Karma Gramer]: Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-310",
    "topicSlug": "comparatives",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The new high-speed electric locomotive runs far ------- than older diesel models, consuming ------- energy per passenger.",
    "options": [
      "quiet / much",
      "quietly / fewer",
      "more quietly / less",
      "most quietly / little",
      "more quiet / least"
    ],
    "answer": 2,
    "explanation": "Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
    "distractorAnalysis": {
      "A": "'quiet / much' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'quietly / fewer' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
      "D": "'most quietly / little' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'more quiet / least' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Run + more quietly than; less energy.",
    "memoryCode": "🎵 [Karma Gramer]: Run + more quietly than; less energy.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-311",
    "topicSlug": "noun-clauses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The clinical panel investigated ------- the sudden surge in neurological diagnoses was ------- environmental pollutants.",
    "options": [
      "which / as well as",
      "whether / due to",
      "that / in spite of",
      "what / rather than",
      "how / contrary to"
    ],
    "answer": 1,
    "explanation": "Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
    "distractorAnalysis": {
      "A": "'which / as well as' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
      "C": "'that / in spite of' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'what / rather than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'how / contrary to' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Investigate + whether; due to = -den kaynaklanan.",
    "memoryCode": "🎵 [Karma Gramer]: Investigate + whether; due to = -den kaynaklanan.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-312",
    "topicSlug": "inversion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Under no circumstances ------- researchers modify experimental datasets without ------- formal written authorization.",
    "options": [
      "must have / obtained",
      "ought / to obtain",
      "have / having obtained",
      "would / obtain",
      "should / obtaining"
    ],
    "answer": 4,
    "explanation": "'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
    "distractorAnalysis": {
      "A": "'must have / obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'ought / to obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'have / having obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'would / obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir."
    },
    "tactic": "Under no circumstances + should + S + V1; without + V-ing.",
    "memoryCode": "🎵 [Karma Gramer]: Under no circumstances + should + S + V1; without + V-ing.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-313",
    "topicSlug": "causatives",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The university had the entire library archive ------- by specialized digital technicians to ------- rare manuscripts.",
    "options": [
      "to digitize / preserved",
      "being digitized / preserve",
      "digitized / preserve",
      "digitizing / to preserve",
      "digitize / preserving"
    ],
    "answer": 2,
    "explanation": "'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
    "distractorAnalysis": {
      "A": "'to digitize / preserved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'being digitized / preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
      "D": "'digitizing / to preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'digitize / preserving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Have + nesne + V3; to V1 (amaç).",
    "memoryCode": "🎵 [Karma Gramer]: Have + nesne + V3; to V1 (amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-314",
    "topicSlug": "determiners",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- many students registered for the introductory chemistry course that the department had to open an extra section.",
    "options": [
      "Very",
      "Too",
      "So",
      "As",
      "Such"
    ],
    "answer": 2,
    "explanation": "'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
    "distractorAnalysis": {
      "A": "'Very' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Too' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
      "D": "'As' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Such' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "So many / so much ... THAT! (Such a lot of).",
    "memoryCode": "🎵 [Karma Gramer]: So many / so much ... THAT! (Such a lot of).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-315",
    "topicSlug": "phrasal-verbs",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The company decided to ------- several inefficient regional branches in order to ------- operating costs during the crisis.",
    "options": [
      "bring about / augment",
      "carry out / elevate",
      "close down / curtail",
      "put up with / maximize",
      "look into / enhance"
    ],
    "answer": 2,
    "explanation": "Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
    "distractorAnalysis": {
      "A": "'bring about / augment' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'carry out / elevate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
      "D": "'put up with / maximize' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'look into / enhance' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Close down a branch; curtail costs.",
    "memoryCode": "🎵 [Karma Gramer]: Close down a branch; curtail costs.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-316",
    "topicSlug": "articles",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The Amazon basin is ------- home to thousands of indigenous tribes, ------- language and customs are completely unique.",
    "options": [
      "the / where",
      "the / which",
      "an / whom",
      "a / that",
      "Ø / whose"
    ],
    "answer": 4,
    "explanation": "'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
    "distractorAnalysis": {
      "A": "'the / where' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'the / which' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'an / whom' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'a / that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur."
    },
    "tactic": "Be home to (Ø); tribes whose language...",
    "memoryCode": "🎵 [Karma Gramer]: Be home to (Ø); tribes whose language...",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-317",
    "topicSlug": "adverbial-clauses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- progress has been made in quantum computing, several foundational hardware bottlenecks remain -------.",
    "options": [
      "In case / to resolve",
      "Unless / resolution",
      "Since / solving",
      "Although / unresolved",
      "Because / resolved"
    ],
    "answer": 3,
    "explanation": "İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
    "distractorAnalysis": {
      "A": "'In case / to resolve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Unless / resolution' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Since / solving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
      "E": "'Because / resolved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "memoryCode": "🎵 [Karma Gramer]: Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-318",
    "topicSlug": "perfect-modals",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The criminal suspect ------- the theft because reliable airport security cameras recorded him in Berlin at that exact moment.",
    "options": [
      "must have committed",
      "needn't commit",
      "cannot have committed",
      "might have committed",
      "should commit"
    ],
    "answer": 2,
    "explanation": "Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
    "distractorAnalysis": {
      "A": "'must have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'needn't commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
      "D": "'might have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'should commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Cannot / Couldn't have V3 = Yapmış olamaz.",
    "memoryCode": "🎵 [Karma Gramer]: Cannot / Couldn't have V3 = Yapmış olamaz.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-319",
    "topicSlug": "conjunctions",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The local municipality decided to construct a bypass road ------- heavy freight trucks would not congest residential streets.",
    "options": [
      "unless",
      "lest",
      "provided that",
      "in case",
      "so that"
    ],
    "answer": 4,
    "explanation": "Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
    "distractorAnalysis": {
      "A": "'unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'lest' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'in case' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar."
    },
    "tactic": "So that + modal = -sın diye (Amaç).",
    "memoryCode": "🎵 [Karma Gramer]: So that + modal = -sın diye (Amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-320",
    "topicSlug": "inversion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Rarely ------- an author capture the psychological complexities of wartime trauma with such profound sensitivity.",
    "options": [
      "has",
      "does",
      "did",
      "is",
      "was"
    ],
    "answer": 1,
    "explanation": "'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
    "distractorAnalysis": {
      "A": "'has' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
      "C": "'did' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Rarely + does + S + V1.",
    "memoryCode": "🎵 [Karma Gramer]: Rarely + does + S + V1.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-321",
    "topicSlug": "tenses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "By the end of this decade, marine renewable energy technologies ------- into mainstream commercial grids across Europe.",
    "options": [
      "were integrated",
      "are integrated",
      "will integrate",
      "have been integrated",
      "will have been integrated"
    ],
    "answer": 4,
    "explanation": "'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
    "distractorAnalysis": {
      "A": "'were integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'are integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'will integrate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'have been integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir."
    },
    "tactic": "By + Gelecek zaman + Pasif = will have been + V3.",
    "memoryCode": "🎵 [Karma Gramer]: By + Gelecek zaman + Pasif = will have been + V3.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-322",
    "topicSlug": "gerunds-infinitives",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The research team succeeded in ------- the rare enzyme after ------- multiple biochemical assays in the laboratory.",
    "options": [
      "synthesizing / conducting",
      "to synthesize / conduct",
      "synthesize / to conduct",
      "synthesized / conducted",
      "having synthesized / conduct"
    ],
    "answer": 0,
    "explanation": "Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
    "distractorAnalysis": {
      "A": "DOĞRU: Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
      "B": "'to synthesize / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'synthesize / to conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'synthesized / conducted' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'having synthesized / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Preposition + V-ing kuralı.",
    "memoryCode": "🎵 [Karma Gramer]: Preposition + V-ing kuralı.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-323",
    "topicSlug": "determiners",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Neither the university chancellor nor the faculty deans ------- prepared to compromise on the revised academic standards.",
    "options": [
      "is",
      "be",
      "has been",
      "was",
      "were"
    ],
    "answer": 4,
    "explanation": "'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
    "distractorAnalysis": {
      "A": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'be' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'has been' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were')."
    },
    "tactic": "Neither ... nor en yakın özneye bakar!",
    "memoryCode": "🎵 [Karma Gramer]: Neither ... nor en yakın özneye bakar!",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-324",
    "topicSlug": "adverbial-clauses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- the economic inflation continued to soar, the central bank decided to raise benchmark lending rates.",
    "options": [
      "Even if",
      "Whereas",
      "As",
      "Unless",
      "Although"
    ],
    "answer": 2,
    "explanation": "Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
    "distractorAnalysis": {
      "A": "'Even if' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Whereas' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
      "D": "'Unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Although' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "As = -dıkça / çünkü.",
    "memoryCode": "🎵 [Karma Gramer]: As = -dıkça / çünkü.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-325",
    "topicSlug": "determiners",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The government launched a public campaign to ensure that ------- citizen had equal access to high-speed digital infrastructure.",
    "options": [
      "all",
      "every",
      "both",
      "many",
      "several"
    ],
    "answer": 1,
    "explanation": "Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
    "distractorAnalysis": {
      "A": "'all' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
      "C": "'both' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'many' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'several' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Every + Tekil isim.",
    "memoryCode": "🎵 [Karma Gramer]: Every + Tekil isim.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-326",
    "topicSlug": "tenses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Although the committee members ------- the proposal thoroughly yesterday, they decided ------- their final vote until next week.",
    "options": [
      "reviewed / to postpone",
      "review / postpone",
      "have reviewed / to postpone",
      "had reviewed / postponing",
      "were reviewing / postponed"
    ],
    "answer": 0,
    "explanation": "'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
      "B": "'review / postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'have reviewed / to postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'had reviewed / postponing' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'were reviewing / postponed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Yesterday -> V2; decide -> to V1.",
    "memoryCode": "🎵 [Karma Gramer]: Yesterday -> V2; decide -> to V1.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-327",
    "topicSlug": "passive-voice",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The ancient temple, ------- by archaeologists last year, is widely believed ------- by a powerful volcanic eruption.",
    "options": [
      "discovered / to have been destroyed",
      "discovered / destroying",
      "discovering / to destroy",
      "having discovered / destroyed",
      "was discovered / to be destroyed"
    ],
    "answer": 0,
    "explanation": "İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
    "distractorAnalysis": {
      "A": "DOĞRU: İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
      "B": "'discovered / destroying' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'discovering / to destroy' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'having discovered / destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'was discovered / to be destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "V3 niteleme + is believed to have been V3.",
    "memoryCode": "🎵 [Karma Gramer]: V3 niteleme + is believed to have been V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-328",
    "topicSlug": "conjunctions",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- the torrential storm damaged the transmission towers, technicians managed to restore power ------- a few hours.",
    "options": [
      "Unless / for",
      "Since / on",
      "Because / at",
      "Even though / within",
      "In case / through"
    ],
    "answer": 3,
    "explanation": "Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
    "distractorAnalysis": {
      "A": "'Unless / for' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Since / on' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Because / at' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
      "E": "'In case / through' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "memoryCode": "🎵 [Karma Gramer]: Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-329",
    "topicSlug": "conditionals",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Had the emergency medical team ------- immediately, the patient's critical condition ------- so drastically.",
    "options": [
      "been arrived / was not deteriorated",
      "arrive / did not deteriorate",
      "arrived / had not deteriorated",
      "had arrived / would not deteriorate",
      "arrived / would not have deteriorated"
    ],
    "answer": 4,
    "explanation": "Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
    "distractorAnalysis": {
      "A": "'been arrived / was not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'arrive / did not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'arrived / had not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'had arrived / would not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir."
    },
    "tactic": "Had + S + V3 -> would have V3.",
    "memoryCode": "🎵 [Karma Gramer]: Had + S + V3 -> would have V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-330",
    "topicSlug": "gerunds-infinitives",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The laboratory supervisor insisted on ------- the chemical containers carefully ------- any toxic leakage should occur.",
    "options": [
      "inspecting / lest",
      "having inspected / provided that",
      "inspected / unless",
      "to inspect / so that",
      "inspect / in order that"
    ],
    "answer": 0,
    "explanation": "'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
      "B": "'having inspected / provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'inspected / unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'to inspect / so that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'inspect / in order that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Insist on + V-ing; lest + should/yalın fiil.",
    "memoryCode": "🎵 [Karma Gramer]: Insist on + V-ing; lest + should/yalın fiil.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-331",
    "topicSlug": "inversion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- had the international peace treaty been signed ------- border skirmishes erupted once again.",
    "options": [
      "Neither / nor",
      "Hardly / than",
      "No sooner / than",
      "Scarcely / when",
      "Not only / but also"
    ],
    "answer": 3,
    "explanation": "'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
    "distractorAnalysis": {
      "A": "'Neither / nor' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Hardly / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'No sooner / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
      "E": "'Not only / but also' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Scarcely ... WHEN! (No sooner ... THAN).",
    "memoryCode": "🎵 [Karma Gramer]: Scarcely ... WHEN! (No sooner ... THAN).",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-332",
    "topicSlug": "relative-clauses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The distinguished astrophysicist, ------- research into dark matter revolutionized cosmology, received ------- award yesterday.",
    "options": [
      "that / Ø",
      "whom / an",
      "which / a",
      "whose / an",
      "who / the"
    ],
    "answer": 3,
    "explanation": "Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
    "distractorAnalysis": {
      "A": "'that / Ø' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'whom / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'which / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
      "E": "'who / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "İsim + whose + isim; an award.",
    "memoryCode": "🎵 [Karma Gramer]: İsim + whose + isim; an award.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-333",
    "topicSlug": "perfect-modals",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "You ------- all that heavy reference material to class this morning; the teacher uploaded digital copies -------.",
    "options": [
      "would rather bring / therefore",
      "needn't have brought / instead",
      "must not bring / furthermore",
      "could not bring / nevertheless",
      "should have brought / otherwise"
    ],
    "answer": 1,
    "explanation": "Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
    "distractorAnalysis": {
      "A": "'would rather bring / therefore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
      "C": "'must not bring / furthermore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'could not bring / nevertheless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'should have brought / otherwise' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Needn't have V3 = Gerek yoktu ama yaptın.",
    "memoryCode": "🎵 [Karma Gramer]: Needn't have V3 = Gerek yoktu ama yaptın.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-334",
    "topicSlug": "conditionals",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- the global financial market recovers, investors will continue to seek refuge in ------- gold and silver.",
    "options": [
      "Unless / Ø",
      "As long as / an",
      "Although / the",
      "In case / the",
      "Because / a"
    ],
    "answer": 0,
    "explanation": "Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
    "distractorAnalysis": {
      "A": "DOĞRU: Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
      "B": "'As long as / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Although / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'In case / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Because / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "memoryCode": "🎵 [Karma Gramer]: Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-335",
    "topicSlug": "comparatives",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The new high-speed electric locomotive runs far ------- than older diesel models, consuming ------- energy per passenger.",
    "options": [
      "most quietly / little",
      "quiet / much",
      "more quiet / least",
      "quietly / fewer",
      "more quietly / less"
    ],
    "answer": 4,
    "explanation": "Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
    "distractorAnalysis": {
      "A": "'most quietly / little' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'quiet / much' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'more quiet / least' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'quietly / fewer' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır."
    },
    "tactic": "Run + more quietly than; less energy.",
    "memoryCode": "🎵 [Karma Gramer]: Run + more quietly than; less energy.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-336",
    "topicSlug": "noun-clauses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The clinical panel investigated ------- the sudden surge in neurological diagnoses was ------- environmental pollutants.",
    "options": [
      "that / in spite of",
      "what / rather than",
      "which / as well as",
      "how / contrary to",
      "whether / due to"
    ],
    "answer": 4,
    "explanation": "Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
    "distractorAnalysis": {
      "A": "'that / in spite of' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'what / rather than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'which / as well as' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'how / contrary to' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar."
    },
    "tactic": "Investigate + whether; due to = -den kaynaklanan.",
    "memoryCode": "🎵 [Karma Gramer]: Investigate + whether; due to = -den kaynaklanan.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-337",
    "topicSlug": "inversion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Under no circumstances ------- researchers modify experimental datasets without ------- formal written authorization.",
    "options": [
      "would / obtain",
      "ought / to obtain",
      "should / obtaining",
      "have / having obtained",
      "must have / obtained"
    ],
    "answer": 2,
    "explanation": "'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
    "distractorAnalysis": {
      "A": "'would / obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'ought / to obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
      "D": "'have / having obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'must have / obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Under no circumstances + should + S + V1; without + V-ing.",
    "memoryCode": "🎵 [Karma Gramer]: Under no circumstances + should + S + V1; without + V-ing.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-338",
    "topicSlug": "causatives",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The university had the entire library archive ------- by specialized digital technicians to ------- rare manuscripts.",
    "options": [
      "digitizing / to preserve",
      "digitized / preserve",
      "digitize / preserving",
      "being digitized / preserve",
      "to digitize / preserved"
    ],
    "answer": 1,
    "explanation": "'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
    "distractorAnalysis": {
      "A": "'digitizing / to preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
      "C": "'digitize / preserving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'being digitized / preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'to digitize / preserved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Have + nesne + V3; to V1 (amaç).",
    "memoryCode": "🎵 [Karma Gramer]: Have + nesne + V3; to V1 (amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-339",
    "topicSlug": "determiners",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- many students registered for the introductory chemistry course that the department had to open an extra section.",
    "options": [
      "Such",
      "Very",
      "As",
      "So",
      "Too"
    ],
    "answer": 3,
    "explanation": "'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
    "distractorAnalysis": {
      "A": "'Such' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Very' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'As' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
      "E": "'Too' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "So many / so much ... THAT! (Such a lot of).",
    "memoryCode": "🎵 [Karma Gramer]: So many / so much ... THAT! (Such a lot of).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-340",
    "topicSlug": "phrasal-verbs",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The company decided to ------- several inefficient regional branches in order to ------- operating costs during the crisis.",
    "options": [
      "put up with / maximize",
      "look into / enhance",
      "bring about / augment",
      "close down / curtail",
      "carry out / elevate"
    ],
    "answer": 3,
    "explanation": "Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
    "distractorAnalysis": {
      "A": "'put up with / maximize' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'look into / enhance' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'bring about / augment' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
      "E": "'carry out / elevate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Close down a branch; curtail costs.",
    "memoryCode": "🎵 [Karma Gramer]: Close down a branch; curtail costs.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-341",
    "topicSlug": "articles",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The Amazon basin is ------- home to thousands of indigenous tribes, ------- language and customs are completely unique.",
    "options": [
      "the / which",
      "an / whom",
      "Ø / whose",
      "a / that",
      "the / where"
    ],
    "answer": 2,
    "explanation": "'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
    "distractorAnalysis": {
      "A": "'the / which' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'an / whom' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
      "D": "'a / that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'the / where' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Be home to (Ø); tribes whose language...",
    "memoryCode": "🎵 [Karma Gramer]: Be home to (Ø); tribes whose language...",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-342",
    "topicSlug": "adverbial-clauses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- progress has been made in quantum computing, several foundational hardware bottlenecks remain -------.",
    "options": [
      "Because / resolved",
      "In case / to resolve",
      "Although / unresolved",
      "Unless / resolution",
      "Since / solving"
    ],
    "answer": 2,
    "explanation": "İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
    "distractorAnalysis": {
      "A": "'Because / resolved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'In case / to resolve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
      "D": "'Unless / resolution' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Since / solving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "memoryCode": "🎵 [Karma Gramer]: Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-343",
    "topicSlug": "perfect-modals",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The criminal suspect ------- the theft because reliable airport security cameras recorded him in Berlin at that exact moment.",
    "options": [
      "might have committed",
      "should commit",
      "must have committed",
      "needn't commit",
      "cannot have committed"
    ],
    "answer": 4,
    "explanation": "Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
    "distractorAnalysis": {
      "A": "'might have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'should commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'must have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'needn't commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir."
    },
    "tactic": "Cannot / Couldn't have V3 = Yapmış olamaz.",
    "memoryCode": "🎵 [Karma Gramer]: Cannot / Couldn't have V3 = Yapmış olamaz.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-344",
    "topicSlug": "conjunctions",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The local municipality decided to construct a bypass road ------- heavy freight trucks would not congest residential streets.",
    "options": [
      "lest",
      "provided that",
      "so that",
      "unless",
      "in case"
    ],
    "answer": 2,
    "explanation": "Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
    "distractorAnalysis": {
      "A": "'lest' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
      "D": "'unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'in case' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "So that + modal = -sın diye (Amaç).",
    "memoryCode": "🎵 [Karma Gramer]: So that + modal = -sın diye (Amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-345",
    "topicSlug": "inversion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Rarely ------- an author capture the psychological complexities of wartime trauma with such profound sensitivity.",
    "options": [
      "does",
      "was",
      "has",
      "did",
      "is"
    ],
    "answer": 0,
    "explanation": "'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
      "B": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'has' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'did' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Rarely + does + S + V1.",
    "memoryCode": "🎵 [Karma Gramer]: Rarely + does + S + V1.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-346",
    "topicSlug": "tenses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "By the end of this decade, marine renewable energy technologies ------- into mainstream commercial grids across Europe.",
    "options": [
      "have been integrated",
      "are integrated",
      "will have been integrated",
      "were integrated",
      "will integrate"
    ],
    "answer": 2,
    "explanation": "'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
    "distractorAnalysis": {
      "A": "'have been integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'are integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
      "D": "'were integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'will integrate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "By + Gelecek zaman + Pasif = will have been + V3.",
    "memoryCode": "🎵 [Karma Gramer]: By + Gelecek zaman + Pasif = will have been + V3.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-347",
    "topicSlug": "gerunds-infinitives",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The research team succeeded in ------- the rare enzyme after ------- multiple biochemical assays in the laboratory.",
    "options": [
      "synthesize / to conduct",
      "having synthesized / conduct",
      "synthesized / conducted",
      "synthesizing / conducting",
      "to synthesize / conduct"
    ],
    "answer": 3,
    "explanation": "Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
    "distractorAnalysis": {
      "A": "'synthesize / to conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'having synthesized / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'synthesized / conducted' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
      "E": "'to synthesize / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Preposition + V-ing kuralı.",
    "memoryCode": "🎵 [Karma Gramer]: Preposition + V-ing kuralı.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-348",
    "topicSlug": "determiners",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Neither the university chancellor nor the faculty deans ------- prepared to compromise on the revised academic standards.",
    "options": [
      "is",
      "be",
      "was",
      "were",
      "has been"
    ],
    "answer": 3,
    "explanation": "'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
    "distractorAnalysis": {
      "A": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'be' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
      "E": "'has been' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Neither ... nor en yakın özneye bakar!",
    "memoryCode": "🎵 [Karma Gramer]: Neither ... nor en yakın özneye bakar!",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-349",
    "topicSlug": "adverbial-clauses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- the economic inflation continued to soar, the central bank decided to raise benchmark lending rates.",
    "options": [
      "As",
      "Although",
      "Even if",
      "Unless",
      "Whereas"
    ],
    "answer": 0,
    "explanation": "Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
    "distractorAnalysis": {
      "A": "DOĞRU: Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
      "B": "'Although' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Even if' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Whereas' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "As = -dıkça / çünkü.",
    "memoryCode": "🎵 [Karma Gramer]: As = -dıkça / çünkü.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-350",
    "topicSlug": "determiners",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The government launched a public campaign to ensure that ------- citizen had equal access to high-speed digital infrastructure.",
    "options": [
      "several",
      "every",
      "all",
      "many",
      "both"
    ],
    "answer": 1,
    "explanation": "Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
    "distractorAnalysis": {
      "A": "'several' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
      "C": "'all' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'many' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'both' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Every + Tekil isim.",
    "memoryCode": "🎵 [Karma Gramer]: Every + Tekil isim.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-351",
    "topicSlug": "tenses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Although the committee members ------- the proposal thoroughly yesterday, they decided ------- their final vote until next week.",
    "options": [
      "have reviewed / to postpone",
      "reviewed / to postpone",
      "were reviewing / postponed",
      "review / postpone",
      "had reviewed / postponing"
    ],
    "answer": 1,
    "explanation": "'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
    "distractorAnalysis": {
      "A": "'have reviewed / to postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
      "C": "'were reviewing / postponed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'review / postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'had reviewed / postponing' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Yesterday -> V2; decide -> to V1.",
    "memoryCode": "🎵 [Karma Gramer]: Yesterday -> V2; decide -> to V1.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-352",
    "topicSlug": "passive-voice",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The ancient temple, ------- by archaeologists last year, is widely believed ------- by a powerful volcanic eruption.",
    "options": [
      "discovered / destroying",
      "discovering / to destroy",
      "discovered / to have been destroyed",
      "having discovered / destroyed",
      "was discovered / to be destroyed"
    ],
    "answer": 2,
    "explanation": "İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
    "distractorAnalysis": {
      "A": "'discovered / destroying' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'discovering / to destroy' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
      "D": "'having discovered / destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'was discovered / to be destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "V3 niteleme + is believed to have been V3.",
    "memoryCode": "🎵 [Karma Gramer]: V3 niteleme + is believed to have been V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-353",
    "topicSlug": "conjunctions",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- the torrential storm damaged the transmission towers, technicians managed to restore power ------- a few hours.",
    "options": [
      "Unless / for",
      "Because / at",
      "In case / through",
      "Even though / within",
      "Since / on"
    ],
    "answer": 3,
    "explanation": "Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
    "distractorAnalysis": {
      "A": "'Unless / for' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Because / at' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'In case / through' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
      "E": "'Since / on' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "memoryCode": "🎵 [Karma Gramer]: Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-354",
    "topicSlug": "conditionals",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Had the emergency medical team ------- immediately, the patient's critical condition ------- so drastically.",
    "options": [
      "arrive / did not deteriorate",
      "arrived / had not deteriorated",
      "been arrived / was not deteriorated",
      "arrived / would not have deteriorated",
      "had arrived / would not deteriorate"
    ],
    "answer": 3,
    "explanation": "Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
    "distractorAnalysis": {
      "A": "'arrive / did not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'arrived / had not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'been arrived / was not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
      "E": "'had arrived / would not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Had + S + V3 -> would have V3.",
    "memoryCode": "🎵 [Karma Gramer]: Had + S + V3 -> would have V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-355",
    "topicSlug": "gerunds-infinitives",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The laboratory supervisor insisted on ------- the chemical containers carefully ------- any toxic leakage should occur.",
    "options": [
      "inspecting / lest",
      "inspect / in order that",
      "having inspected / provided that",
      "to inspect / so that",
      "inspected / unless"
    ],
    "answer": 0,
    "explanation": "'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
      "B": "'inspect / in order that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'having inspected / provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'to inspect / so that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'inspected / unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Insist on + V-ing; lest + should/yalın fiil.",
    "memoryCode": "🎵 [Karma Gramer]: Insist on + V-ing; lest + should/yalın fiil.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-356",
    "topicSlug": "inversion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- had the international peace treaty been signed ------- border skirmishes erupted once again.",
    "options": [
      "Hardly / than",
      "Neither / nor",
      "Not only / but also",
      "No sooner / than",
      "Scarcely / when"
    ],
    "answer": 4,
    "explanation": "'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
    "distractorAnalysis": {
      "A": "'Hardly / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Neither / nor' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Not only / but also' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'No sooner / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır."
    },
    "tactic": "Scarcely ... WHEN! (No sooner ... THAN).",
    "memoryCode": "🎵 [Karma Gramer]: Scarcely ... WHEN! (No sooner ... THAN).",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-357",
    "topicSlug": "relative-clauses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The distinguished astrophysicist, ------- research into dark matter revolutionized cosmology, received ------- award yesterday.",
    "options": [
      "whom / an",
      "that / Ø",
      "which / a",
      "who / the",
      "whose / an"
    ],
    "answer": 4,
    "explanation": "Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
    "distractorAnalysis": {
      "A": "'whom / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'that / Ø' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'which / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'who / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir."
    },
    "tactic": "İsim + whose + isim; an award.",
    "memoryCode": "🎵 [Karma Gramer]: İsim + whose + isim; an award.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-358",
    "topicSlug": "perfect-modals",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "You ------- all that heavy reference material to class this morning; the teacher uploaded digital copies -------.",
    "options": [
      "needn't have brought / instead",
      "could not bring / nevertheless",
      "should have brought / otherwise",
      "must not bring / furthermore",
      "would rather bring / therefore"
    ],
    "answer": 0,
    "explanation": "Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
    "distractorAnalysis": {
      "A": "DOĞRU: Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
      "B": "'could not bring / nevertheless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'should have brought / otherwise' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'must not bring / furthermore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'would rather bring / therefore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Needn't have V3 = Gerek yoktu ama yaptın.",
    "memoryCode": "🎵 [Karma Gramer]: Needn't have V3 = Gerek yoktu ama yaptın.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-359",
    "topicSlug": "conditionals",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- the global financial market recovers, investors will continue to seek refuge in ------- gold and silver.",
    "options": [
      "Because / a",
      "As long as / an",
      "Unless / Ø",
      "Although / the",
      "In case / the"
    ],
    "answer": 2,
    "explanation": "Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
    "distractorAnalysis": {
      "A": "'Because / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'As long as / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
      "D": "'Although / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'In case / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "memoryCode": "🎵 [Karma Gramer]: Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-360",
    "topicSlug": "comparatives",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The new high-speed electric locomotive runs far ------- than older diesel models, consuming ------- energy per passenger.",
    "options": [
      "quietly / fewer",
      "more quiet / least",
      "more quietly / less",
      "quiet / much",
      "most quietly / little"
    ],
    "answer": 2,
    "explanation": "Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
    "distractorAnalysis": {
      "A": "'quietly / fewer' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'more quiet / least' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
      "D": "'quiet / much' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'most quietly / little' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Run + more quietly than; less energy.",
    "memoryCode": "🎵 [Karma Gramer]: Run + more quietly than; less energy.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-361",
    "topicSlug": "noun-clauses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The clinical panel investigated ------- the sudden surge in neurological diagnoses was ------- environmental pollutants.",
    "options": [
      "which / as well as",
      "whether / due to",
      "what / rather than",
      "how / contrary to",
      "that / in spite of"
    ],
    "answer": 1,
    "explanation": "Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
    "distractorAnalysis": {
      "A": "'which / as well as' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
      "C": "'what / rather than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'how / contrary to' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'that / in spite of' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Investigate + whether; due to = -den kaynaklanan.",
    "memoryCode": "🎵 [Karma Gramer]: Investigate + whether; due to = -den kaynaklanan.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-362",
    "topicSlug": "inversion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Under no circumstances ------- researchers modify experimental datasets without ------- formal written authorization.",
    "options": [
      "have / having obtained",
      "should / obtaining",
      "would / obtain",
      "must have / obtained",
      "ought / to obtain"
    ],
    "answer": 1,
    "explanation": "'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
    "distractorAnalysis": {
      "A": "'have / having obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
      "C": "'would / obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'must have / obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'ought / to obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Under no circumstances + should + S + V1; without + V-ing.",
    "memoryCode": "🎵 [Karma Gramer]: Under no circumstances + should + S + V1; without + V-ing.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-363",
    "topicSlug": "causatives",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The university had the entire library archive ------- by specialized digital technicians to ------- rare manuscripts.",
    "options": [
      "being digitized / preserve",
      "digitizing / to preserve",
      "to digitize / preserved",
      "digitized / preserve",
      "digitize / preserving"
    ],
    "answer": 3,
    "explanation": "'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
    "distractorAnalysis": {
      "A": "'being digitized / preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'digitizing / to preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'to digitize / preserved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
      "E": "'digitize / preserving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Have + nesne + V3; to V1 (amaç).",
    "memoryCode": "🎵 [Karma Gramer]: Have + nesne + V3; to V1 (amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-364",
    "topicSlug": "determiners",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- many students registered for the introductory chemistry course that the department had to open an extra section.",
    "options": [
      "Very",
      "Too",
      "Such",
      "As",
      "So"
    ],
    "answer": 4,
    "explanation": "'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
    "distractorAnalysis": {
      "A": "'Very' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Too' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Such' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'As' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...)."
    },
    "tactic": "So many / so much ... THAT! (Such a lot of).",
    "memoryCode": "🎵 [Karma Gramer]: So many / so much ... THAT! (Such a lot of).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-365",
    "topicSlug": "phrasal-verbs",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The company decided to ------- several inefficient regional branches in order to ------- operating costs during the crisis.",
    "options": [
      "close down / curtail",
      "put up with / maximize",
      "carry out / elevate",
      "look into / enhance",
      "bring about / augment"
    ],
    "answer": 0,
    "explanation": "Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
    "distractorAnalysis": {
      "A": "DOĞRU: Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
      "B": "'put up with / maximize' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'carry out / elevate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'look into / enhance' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'bring about / augment' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Close down a branch; curtail costs.",
    "memoryCode": "🎵 [Karma Gramer]: Close down a branch; curtail costs.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-366",
    "topicSlug": "articles",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The Amazon basin is ------- home to thousands of indigenous tribes, ------- language and customs are completely unique.",
    "options": [
      "the / where",
      "an / whom",
      "the / which",
      "Ø / whose",
      "a / that"
    ],
    "answer": 3,
    "explanation": "'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
    "distractorAnalysis": {
      "A": "'the / where' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'an / whom' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'the / which' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
      "E": "'a / that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Be home to (Ø); tribes whose language...",
    "memoryCode": "🎵 [Karma Gramer]: Be home to (Ø); tribes whose language...",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-367",
    "topicSlug": "adverbial-clauses",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- progress has been made in quantum computing, several foundational hardware bottlenecks remain -------.",
    "options": [
      "In case / to resolve",
      "Since / solving",
      "Because / resolved",
      "Unless / resolution",
      "Although / unresolved"
    ],
    "answer": 4,
    "explanation": "İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
    "distractorAnalysis": {
      "A": "'In case / to resolve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Since / solving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Because / resolved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Unless / resolution' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır."
    },
    "tactic": "Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "memoryCode": "🎵 [Karma Gramer]: Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-368",
    "topicSlug": "perfect-modals",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The criminal suspect ------- the theft because reliable airport security cameras recorded him in Berlin at that exact moment.",
    "options": [
      "should commit",
      "must have committed",
      "needn't commit",
      "might have committed",
      "cannot have committed"
    ],
    "answer": 4,
    "explanation": "Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
    "distractorAnalysis": {
      "A": "'should commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'must have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'needn't commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'might have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir."
    },
    "tactic": "Cannot / Couldn't have V3 = Yapmış olamaz.",
    "memoryCode": "🎵 [Karma Gramer]: Cannot / Couldn't have V3 = Yapmış olamaz.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-369",
    "topicSlug": "conjunctions",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The local municipality decided to construct a bypass road ------- heavy freight trucks would not congest residential streets.",
    "options": [
      "lest",
      "provided that",
      "in case",
      "so that",
      "unless"
    ],
    "answer": 3,
    "explanation": "Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
    "distractorAnalysis": {
      "A": "'lest' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'in case' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
      "E": "'unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "So that + modal = -sın diye (Amaç).",
    "memoryCode": "🎵 [Karma Gramer]: So that + modal = -sın diye (Amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-370",
    "topicSlug": "inversion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Rarely ------- an author capture the psychological complexities of wartime trauma with such profound sensitivity.",
    "options": [
      "was",
      "has",
      "does",
      "did",
      "is"
    ],
    "answer": 2,
    "explanation": "'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
    "distractorAnalysis": {
      "A": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'has' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
      "D": "'did' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Rarely + does + S + V1.",
    "memoryCode": "🎵 [Karma Gramer]: Rarely + does + S + V1.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-371",
    "topicSlug": "tenses",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "By the end of this decade, marine renewable energy technologies ------- into mainstream commercial grids across Europe.",
    "options": [
      "have been integrated",
      "are integrated",
      "were integrated",
      "will have been integrated",
      "will integrate"
    ],
    "answer": 3,
    "explanation": "'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
    "distractorAnalysis": {
      "A": "'have been integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'are integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'were integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
      "E": "'will integrate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "By + Gelecek zaman + Pasif = will have been + V3.",
    "memoryCode": "🎵 [Karma Gramer]: By + Gelecek zaman + Pasif = will have been + V3.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-372",
    "topicSlug": "gerunds-infinitives",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The research team succeeded in ------- the rare enzyme after ------- multiple biochemical assays in the laboratory.",
    "options": [
      "synthesized / conducted",
      "synthesize / to conduct",
      "to synthesize / conduct",
      "synthesizing / conducting",
      "having synthesized / conduct"
    ],
    "answer": 3,
    "explanation": "Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
    "distractorAnalysis": {
      "A": "'synthesized / conducted' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'synthesize / to conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'to synthesize / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
      "E": "'having synthesized / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Preposition + V-ing kuralı.",
    "memoryCode": "🎵 [Karma Gramer]: Preposition + V-ing kuralı.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-373",
    "topicSlug": "determiners",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Neither the university chancellor nor the faculty deans ------- prepared to compromise on the revised academic standards.",
    "options": [
      "be",
      "was",
      "has been",
      "is",
      "were"
    ],
    "answer": 4,
    "explanation": "'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
    "distractorAnalysis": {
      "A": "'be' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'has been' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were')."
    },
    "tactic": "Neither ... nor en yakın özneye bakar!",
    "memoryCode": "🎵 [Karma Gramer]: Neither ... nor en yakın özneye bakar!",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-374",
    "topicSlug": "adverbial-clauses",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "------- the economic inflation continued to soar, the central bank decided to raise benchmark lending rates.",
    "options": [
      "Although",
      "Whereas",
      "Unless",
      "As",
      "Even if"
    ],
    "answer": 3,
    "explanation": "Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
    "distractorAnalysis": {
      "A": "'Although' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Whereas' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
      "E": "'Even if' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "As = -dıkça / çünkü.",
    "memoryCode": "🎵 [Karma Gramer]: As = -dıkça / çünkü.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-375",
    "topicSlug": "determiners",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The government launched a public campaign to ensure that ------- citizen had equal access to high-speed digital infrastructure.",
    "options": [
      "all",
      "every",
      "both",
      "several",
      "many"
    ],
    "answer": 1,
    "explanation": "Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
    "distractorAnalysis": {
      "A": "'all' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
      "C": "'both' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'several' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'many' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Every + Tekil isim.",
    "memoryCode": "🎵 [Karma Gramer]: Every + Tekil isim.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-376",
    "topicSlug": "tenses",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Although the committee members ------- the proposal thoroughly yesterday, they decided ------- their final vote until next week.",
    "options": [
      "reviewed / to postpone",
      "had reviewed / postponing",
      "have reviewed / to postpone",
      "review / postpone",
      "were reviewing / postponed"
    ],
    "answer": 0,
    "explanation": "'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
      "B": "'had reviewed / postponing' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'have reviewed / to postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'review / postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'were reviewing / postponed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Yesterday -> V2; decide -> to V1.",
    "memoryCode": "🎵 [Karma Gramer]: Yesterday -> V2; decide -> to V1.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-377",
    "topicSlug": "passive-voice",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The ancient temple, ------- by archaeologists last year, is widely believed ------- by a powerful volcanic eruption.",
    "options": [
      "discovered / to have been destroyed",
      "having discovered / destroyed",
      "was discovered / to be destroyed",
      "discovering / to destroy",
      "discovered / destroying"
    ],
    "answer": 0,
    "explanation": "İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
    "distractorAnalysis": {
      "A": "DOĞRU: İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
      "B": "'having discovered / destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'was discovered / to be destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'discovering / to destroy' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'discovered / destroying' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "V3 niteleme + is believed to have been V3.",
    "memoryCode": "🎵 [Karma Gramer]: V3 niteleme + is believed to have been V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-378",
    "topicSlug": "conjunctions",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "------- the torrential storm damaged the transmission towers, technicians managed to restore power ------- a few hours.",
    "options": [
      "Since / on",
      "Even though / within",
      "In case / through",
      "Because / at",
      "Unless / for"
    ],
    "answer": 1,
    "explanation": "Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
    "distractorAnalysis": {
      "A": "'Since / on' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
      "C": "'In case / through' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Because / at' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Unless / for' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "memoryCode": "🎵 [Karma Gramer]: Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-379",
    "topicSlug": "conditionals",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Had the emergency medical team ------- immediately, the patient's critical condition ------- so drastically.",
    "options": [
      "arrived / would not have deteriorated",
      "arrive / did not deteriorate",
      "arrived / had not deteriorated",
      "been arrived / was not deteriorated",
      "had arrived / would not deteriorate"
    ],
    "answer": 0,
    "explanation": "Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
    "distractorAnalysis": {
      "A": "DOĞRU: Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
      "B": "'arrive / did not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'arrived / had not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'been arrived / was not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'had arrived / would not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Had + S + V3 -> would have V3.",
    "memoryCode": "🎵 [Karma Gramer]: Had + S + V3 -> would have V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-380",
    "topicSlug": "gerunds-infinitives",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The laboratory supervisor insisted on ------- the chemical containers carefully ------- any toxic leakage should occur.",
    "options": [
      "inspect / in order that",
      "having inspected / provided that",
      "inspected / unless",
      "inspecting / lest",
      "to inspect / so that"
    ],
    "answer": 3,
    "explanation": "'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
    "distractorAnalysis": {
      "A": "'inspect / in order that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'having inspected / provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'inspected / unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
      "E": "'to inspect / so that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Insist on + V-ing; lest + should/yalın fiil.",
    "memoryCode": "🎵 [Karma Gramer]: Insist on + V-ing; lest + should/yalın fiil.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-381",
    "topicSlug": "inversion",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "------- had the international peace treaty been signed ------- border skirmishes erupted once again.",
    "options": [
      "Scarcely / when",
      "Hardly / than",
      "No sooner / than",
      "Neither / nor",
      "Not only / but also"
    ],
    "answer": 0,
    "explanation": "'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
      "B": "'Hardly / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'No sooner / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Neither / nor' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Not only / but also' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Scarcely ... WHEN! (No sooner ... THAN).",
    "memoryCode": "🎵 [Karma Gramer]: Scarcely ... WHEN! (No sooner ... THAN).",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-382",
    "topicSlug": "relative-clauses",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The distinguished astrophysicist, ------- research into dark matter revolutionized cosmology, received ------- award yesterday.",
    "options": [
      "which / a",
      "that / Ø",
      "whose / an",
      "who / the",
      "whom / an"
    ],
    "answer": 2,
    "explanation": "Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
    "distractorAnalysis": {
      "A": "'which / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'that / Ø' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
      "D": "'who / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'whom / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "İsim + whose + isim; an award.",
    "memoryCode": "🎵 [Karma Gramer]: İsim + whose + isim; an award.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-383",
    "topicSlug": "perfect-modals",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "You ------- all that heavy reference material to class this morning; the teacher uploaded digital copies -------.",
    "options": [
      "must not bring / furthermore",
      "could not bring / nevertheless",
      "would rather bring / therefore",
      "needn't have brought / instead",
      "should have brought / otherwise"
    ],
    "answer": 3,
    "explanation": "Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
    "distractorAnalysis": {
      "A": "'must not bring / furthermore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'could not bring / nevertheless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'would rather bring / therefore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
      "E": "'should have brought / otherwise' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Needn't have V3 = Gerek yoktu ama yaptın.",
    "memoryCode": "🎵 [Karma Gramer]: Needn't have V3 = Gerek yoktu ama yaptın.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-384",
    "topicSlug": "conditionals",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "------- the global financial market recovers, investors will continue to seek refuge in ------- gold and silver.",
    "options": [
      "As long as / an",
      "Although / the",
      "Unless / Ø",
      "In case / the",
      "Because / a"
    ],
    "answer": 2,
    "explanation": "Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
    "distractorAnalysis": {
      "A": "'As long as / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Although / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
      "D": "'In case / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Because / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "memoryCode": "🎵 [Karma Gramer]: Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-385",
    "topicSlug": "comparatives",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The new high-speed electric locomotive runs far ------- than older diesel models, consuming ------- energy per passenger.",
    "options": [
      "quiet / much",
      "quietly / fewer",
      "more quiet / least",
      "most quietly / little",
      "more quietly / less"
    ],
    "answer": 4,
    "explanation": "Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
    "distractorAnalysis": {
      "A": "'quiet / much' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'quietly / fewer' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'more quiet / least' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'most quietly / little' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır."
    },
    "tactic": "Run + more quietly than; less energy.",
    "memoryCode": "🎵 [Karma Gramer]: Run + more quietly than; less energy.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-386",
    "topicSlug": "noun-clauses",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The clinical panel investigated ------- the sudden surge in neurological diagnoses was ------- environmental pollutants.",
    "options": [
      "what / rather than",
      "whether / due to",
      "how / contrary to",
      "which / as well as",
      "that / in spite of"
    ],
    "answer": 1,
    "explanation": "Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
    "distractorAnalysis": {
      "A": "'what / rather than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
      "C": "'how / contrary to' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'which / as well as' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'that / in spite of' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Investigate + whether; due to = -den kaynaklanan.",
    "memoryCode": "🎵 [Karma Gramer]: Investigate + whether; due to = -den kaynaklanan.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-387",
    "topicSlug": "inversion",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Under no circumstances ------- researchers modify experimental datasets without ------- formal written authorization.",
    "options": [
      "ought / to obtain",
      "would / obtain",
      "should / obtaining",
      "must have / obtained",
      "have / having obtained"
    ],
    "answer": 2,
    "explanation": "'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
    "distractorAnalysis": {
      "A": "'ought / to obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'would / obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
      "D": "'must have / obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'have / having obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Under no circumstances + should + S + V1; without + V-ing.",
    "memoryCode": "🎵 [Karma Gramer]: Under no circumstances + should + S + V1; without + V-ing.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-388",
    "topicSlug": "causatives",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The university had the entire library archive ------- by specialized digital technicians to ------- rare manuscripts.",
    "options": [
      "digitized / preserve",
      "being digitized / preserve",
      "digitizing / to preserve",
      "digitize / preserving",
      "to digitize / preserved"
    ],
    "answer": 0,
    "explanation": "'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
      "B": "'being digitized / preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'digitizing / to preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'digitize / preserving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'to digitize / preserved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Have + nesne + V3; to V1 (amaç).",
    "memoryCode": "🎵 [Karma Gramer]: Have + nesne + V3; to V1 (amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-389",
    "topicSlug": "determiners",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "------- many students registered for the introductory chemistry course that the department had to open an extra section.",
    "options": [
      "Such",
      "Too",
      "As",
      "Very",
      "So"
    ],
    "answer": 4,
    "explanation": "'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
    "distractorAnalysis": {
      "A": "'Such' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Too' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'As' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Very' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...)."
    },
    "tactic": "So many / so much ... THAT! (Such a lot of).",
    "memoryCode": "🎵 [Karma Gramer]: So many / so much ... THAT! (Such a lot of).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-390",
    "topicSlug": "phrasal-verbs",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The company decided to ------- several inefficient regional branches in order to ------- operating costs during the crisis.",
    "options": [
      "bring about / augment",
      "carry out / elevate",
      "close down / curtail",
      "look into / enhance",
      "put up with / maximize"
    ],
    "answer": 2,
    "explanation": "Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
    "distractorAnalysis": {
      "A": "'bring about / augment' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'carry out / elevate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
      "D": "'look into / enhance' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'put up with / maximize' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Close down a branch; curtail costs.",
    "memoryCode": "🎵 [Karma Gramer]: Close down a branch; curtail costs.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-391",
    "topicSlug": "articles",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The Amazon basin is ------- home to thousands of indigenous tribes, ------- language and customs are completely unique.",
    "options": [
      "Ø / whose",
      "the / where",
      "the / which",
      "an / whom",
      "a / that"
    ],
    "answer": 0,
    "explanation": "'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
      "B": "'the / where' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'the / which' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'an / whom' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'a / that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Be home to (Ø); tribes whose language...",
    "memoryCode": "🎵 [Karma Gramer]: Be home to (Ø); tribes whose language...",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-392",
    "topicSlug": "adverbial-clauses",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "------- progress has been made in quantum computing, several foundational hardware bottlenecks remain -------.",
    "options": [
      "In case / to resolve",
      "Unless / resolution",
      "Although / unresolved",
      "Since / solving",
      "Because / resolved"
    ],
    "answer": 2,
    "explanation": "İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
    "distractorAnalysis": {
      "A": "'In case / to resolve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Unless / resolution' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
      "D": "'Since / solving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Because / resolved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "memoryCode": "🎵 [Karma Gramer]: Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-393",
    "topicSlug": "perfect-modals",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The criminal suspect ------- the theft because reliable airport security cameras recorded him in Berlin at that exact moment.",
    "options": [
      "might have committed",
      "cannot have committed",
      "must have committed",
      "needn't commit",
      "should commit"
    ],
    "answer": 1,
    "explanation": "Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
    "distractorAnalysis": {
      "A": "'might have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
      "C": "'must have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'needn't commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'should commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Cannot / Couldn't have V3 = Yapmış olamaz.",
    "memoryCode": "🎵 [Karma Gramer]: Cannot / Couldn't have V3 = Yapmış olamaz.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-394",
    "topicSlug": "conjunctions",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The local municipality decided to construct a bypass road ------- heavy freight trucks would not congest residential streets.",
    "options": [
      "unless",
      "provided that",
      "so that",
      "lest",
      "in case"
    ],
    "answer": 2,
    "explanation": "Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
    "distractorAnalysis": {
      "A": "'unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
      "D": "'lest' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'in case' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "So that + modal = -sın diye (Amaç).",
    "memoryCode": "🎵 [Karma Gramer]: So that + modal = -sın diye (Amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-395",
    "topicSlug": "inversion",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Rarely ------- an author capture the psychological complexities of wartime trauma with such profound sensitivity.",
    "options": [
      "does",
      "was",
      "has",
      "did",
      "is"
    ],
    "answer": 0,
    "explanation": "'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
      "B": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'has' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'did' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Rarely + does + S + V1.",
    "memoryCode": "🎵 [Karma Gramer]: Rarely + does + S + V1.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-396",
    "topicSlug": "tenses",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "By the end of this decade, marine renewable energy technologies ------- into mainstream commercial grids across Europe.",
    "options": [
      "were integrated",
      "will have been integrated",
      "will integrate",
      "are integrated",
      "have been integrated"
    ],
    "answer": 1,
    "explanation": "'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
    "distractorAnalysis": {
      "A": "'were integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
      "C": "'will integrate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'are integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'have been integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "By + Gelecek zaman + Pasif = will have been + V3.",
    "memoryCode": "🎵 [Karma Gramer]: By + Gelecek zaman + Pasif = will have been + V3.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-397",
    "topicSlug": "gerunds-infinitives",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The research team succeeded in ------- the rare enzyme after ------- multiple biochemical assays in the laboratory.",
    "options": [
      "synthesizing / conducting",
      "to synthesize / conduct",
      "having synthesized / conduct",
      "synthesize / to conduct",
      "synthesized / conducted"
    ],
    "answer": 0,
    "explanation": "Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
    "distractorAnalysis": {
      "A": "DOĞRU: Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
      "B": "'to synthesize / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'having synthesized / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'synthesize / to conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'synthesized / conducted' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Preposition + V-ing kuralı.",
    "memoryCode": "🎵 [Karma Gramer]: Preposition + V-ing kuralı.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-398",
    "topicSlug": "determiners",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Neither the university chancellor nor the faculty deans ------- prepared to compromise on the revised academic standards.",
    "options": [
      "were",
      "was",
      "has been",
      "is",
      "be"
    ],
    "answer": 0,
    "explanation": "'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
      "B": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'has been' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'be' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Neither ... nor en yakın özneye bakar!",
    "memoryCode": "🎵 [Karma Gramer]: Neither ... nor en yakın özneye bakar!",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-399",
    "topicSlug": "adverbial-clauses",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "------- the economic inflation continued to soar, the central bank decided to raise benchmark lending rates.",
    "options": [
      "As",
      "Although",
      "Even if",
      "Unless",
      "Whereas"
    ],
    "answer": 0,
    "explanation": "Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
    "distractorAnalysis": {
      "A": "DOĞRU: Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
      "B": "'Although' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Even if' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Whereas' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "As = -dıkça / çünkü.",
    "memoryCode": "🎵 [Karma Gramer]: As = -dıkça / çünkü.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-400",
    "topicSlug": "determiners",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The government launched a public campaign to ensure that ------- citizen had equal access to high-speed digital infrastructure.",
    "options": [
      "every",
      "both",
      "many",
      "several",
      "all"
    ],
    "answer": 0,
    "explanation": "Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
    "distractorAnalysis": {
      "A": "DOĞRU: Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
      "B": "'both' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'many' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'several' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'all' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Every + Tekil isim.",
    "memoryCode": "🎵 [Karma Gramer]: Every + Tekil isim.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-401",
    "topicSlug": "tenses",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Although the committee members ------- the proposal thoroughly yesterday, they decided ------- their final vote until next week.",
    "options": [
      "review / postpone",
      "reviewed / to postpone",
      "had reviewed / postponing",
      "were reviewing / postponed",
      "have reviewed / to postpone"
    ],
    "answer": 1,
    "explanation": "'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
    "distractorAnalysis": {
      "A": "'review / postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
      "C": "'had reviewed / postponing' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'were reviewing / postponed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'have reviewed / to postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Yesterday -> V2; decide -> to V1.",
    "memoryCode": "🎵 [Karma Gramer]: Yesterday -> V2; decide -> to V1.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-402",
    "topicSlug": "passive-voice",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The ancient temple, ------- by archaeologists last year, is widely believed ------- by a powerful volcanic eruption.",
    "options": [
      "discovered / destroying",
      "discovering / to destroy",
      "discovered / to have been destroyed",
      "having discovered / destroyed",
      "was discovered / to be destroyed"
    ],
    "answer": 2,
    "explanation": "İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
    "distractorAnalysis": {
      "A": "'discovered / destroying' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'discovering / to destroy' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
      "D": "'having discovered / destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'was discovered / to be destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "V3 niteleme + is believed to have been V3.",
    "memoryCode": "🎵 [Karma Gramer]: V3 niteleme + is believed to have been V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-403",
    "topicSlug": "conjunctions",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "------- the torrential storm damaged the transmission towers, technicians managed to restore power ------- a few hours.",
    "options": [
      "Because / at",
      "Even though / within",
      "In case / through",
      "Unless / for",
      "Since / on"
    ],
    "answer": 1,
    "explanation": "Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
    "distractorAnalysis": {
      "A": "'Because / at' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
      "C": "'In case / through' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Unless / for' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Since / on' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "memoryCode": "🎵 [Karma Gramer]: Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-404",
    "topicSlug": "conditionals",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Had the emergency medical team ------- immediately, the patient's critical condition ------- so drastically.",
    "options": [
      "been arrived / was not deteriorated",
      "arrived / had not deteriorated",
      "arrive / did not deteriorate",
      "had arrived / would not deteriorate",
      "arrived / would not have deteriorated"
    ],
    "answer": 4,
    "explanation": "Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
    "distractorAnalysis": {
      "A": "'been arrived / was not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'arrived / had not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'arrive / did not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'had arrived / would not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir."
    },
    "tactic": "Had + S + V3 -> would have V3.",
    "memoryCode": "🎵 [Karma Gramer]: Had + S + V3 -> would have V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-405",
    "topicSlug": "gerunds-infinitives",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The laboratory supervisor insisted on ------- the chemical containers carefully ------- any toxic leakage should occur.",
    "options": [
      "to inspect / so that",
      "inspecting / lest",
      "inspected / unless",
      "having inspected / provided that",
      "inspect / in order that"
    ],
    "answer": 1,
    "explanation": "'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
    "distractorAnalysis": {
      "A": "'to inspect / so that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
      "C": "'inspected / unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'having inspected / provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'inspect / in order that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Insist on + V-ing; lest + should/yalın fiil.",
    "memoryCode": "🎵 [Karma Gramer]: Insist on + V-ing; lest + should/yalın fiil.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-406",
    "topicSlug": "inversion",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "------- had the international peace treaty been signed ------- border skirmishes erupted once again.",
    "options": [
      "No sooner / than",
      "Neither / nor",
      "Not only / but also",
      "Hardly / than",
      "Scarcely / when"
    ],
    "answer": 4,
    "explanation": "'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
    "distractorAnalysis": {
      "A": "'No sooner / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Neither / nor' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Not only / but also' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Hardly / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır."
    },
    "tactic": "Scarcely ... WHEN! (No sooner ... THAN).",
    "memoryCode": "🎵 [Karma Gramer]: Scarcely ... WHEN! (No sooner ... THAN).",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-407",
    "topicSlug": "relative-clauses",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The distinguished astrophysicist, ------- research into dark matter revolutionized cosmology, received ------- award yesterday.",
    "options": [
      "who / the",
      "which / a",
      "whom / an",
      "that / Ø",
      "whose / an"
    ],
    "answer": 4,
    "explanation": "Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
    "distractorAnalysis": {
      "A": "'who / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'which / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'whom / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'that / Ø' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir."
    },
    "tactic": "İsim + whose + isim; an award.",
    "memoryCode": "🎵 [Karma Gramer]: İsim + whose + isim; an award.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-408",
    "topicSlug": "perfect-modals",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "You ------- all that heavy reference material to class this morning; the teacher uploaded digital copies -------.",
    "options": [
      "must not bring / furthermore",
      "needn't have brought / instead",
      "would rather bring / therefore",
      "could not bring / nevertheless",
      "should have brought / otherwise"
    ],
    "answer": 1,
    "explanation": "Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
    "distractorAnalysis": {
      "A": "'must not bring / furthermore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
      "C": "'would rather bring / therefore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'could not bring / nevertheless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'should have brought / otherwise' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Needn't have V3 = Gerek yoktu ama yaptın.",
    "memoryCode": "🎵 [Karma Gramer]: Needn't have V3 = Gerek yoktu ama yaptın.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-409",
    "topicSlug": "conditionals",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "------- the global financial market recovers, investors will continue to seek refuge in ------- gold and silver.",
    "options": [
      "As long as / an",
      "Because / a",
      "In case / the",
      "Although / the",
      "Unless / Ø"
    ],
    "answer": 4,
    "explanation": "Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
    "distractorAnalysis": {
      "A": "'As long as / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Because / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'In case / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Although / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø)."
    },
    "tactic": "Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "memoryCode": "🎵 [Karma Gramer]: Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-410",
    "topicSlug": "comparatives",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The new high-speed electric locomotive runs far ------- than older diesel models, consuming ------- energy per passenger.",
    "options": [
      "more quiet / least",
      "more quietly / less",
      "quiet / much",
      "quietly / fewer",
      "most quietly / little"
    ],
    "answer": 1,
    "explanation": "Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
    "distractorAnalysis": {
      "A": "'more quiet / least' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
      "C": "'quiet / much' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'quietly / fewer' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'most quietly / little' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Run + more quietly than; less energy.",
    "memoryCode": "🎵 [Karma Gramer]: Run + more quietly than; less energy.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-411",
    "topicSlug": "noun-clauses",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The clinical panel investigated ------- the sudden surge in neurological diagnoses was ------- environmental pollutants.",
    "options": [
      "how / contrary to",
      "which / as well as",
      "what / rather than",
      "whether / due to",
      "that / in spite of"
    ],
    "answer": 3,
    "explanation": "Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
    "distractorAnalysis": {
      "A": "'how / contrary to' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'which / as well as' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'what / rather than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
      "E": "'that / in spite of' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Investigate + whether; due to = -den kaynaklanan.",
    "memoryCode": "🎵 [Karma Gramer]: Investigate + whether; due to = -den kaynaklanan.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-412",
    "topicSlug": "inversion",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Under no circumstances ------- researchers modify experimental datasets without ------- formal written authorization.",
    "options": [
      "ought / to obtain",
      "have / having obtained",
      "should / obtaining",
      "would / obtain",
      "must have / obtained"
    ],
    "answer": 2,
    "explanation": "'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
    "distractorAnalysis": {
      "A": "'ought / to obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'have / having obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
      "D": "'would / obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'must have / obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Under no circumstances + should + S + V1; without + V-ing.",
    "memoryCode": "🎵 [Karma Gramer]: Under no circumstances + should + S + V1; without + V-ing.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-413",
    "topicSlug": "causatives",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The university had the entire library archive ------- by specialized digital technicians to ------- rare manuscripts.",
    "options": [
      "digitized / preserve",
      "to digitize / preserved",
      "digitize / preserving",
      "digitizing / to preserve",
      "being digitized / preserve"
    ],
    "answer": 0,
    "explanation": "'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
      "B": "'to digitize / preserved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'digitize / preserving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'digitizing / to preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'being digitized / preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Have + nesne + V3; to V1 (amaç).",
    "memoryCode": "🎵 [Karma Gramer]: Have + nesne + V3; to V1 (amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-414",
    "topicSlug": "determiners",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "------- many students registered for the introductory chemistry course that the department had to open an extra section.",
    "options": [
      "Such",
      "So",
      "As",
      "Too",
      "Very"
    ],
    "answer": 1,
    "explanation": "'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
    "distractorAnalysis": {
      "A": "'Such' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
      "C": "'As' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Too' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Very' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "So many / so much ... THAT! (Such a lot of).",
    "memoryCode": "🎵 [Karma Gramer]: So many / so much ... THAT! (Such a lot of).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-415",
    "topicSlug": "phrasal-verbs",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The company decided to ------- several inefficient regional branches in order to ------- operating costs during the crisis.",
    "options": [
      "put up with / maximize",
      "carry out / elevate",
      "bring about / augment",
      "close down / curtail",
      "look into / enhance"
    ],
    "answer": 3,
    "explanation": "Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
    "distractorAnalysis": {
      "A": "'put up with / maximize' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'carry out / elevate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'bring about / augment' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
      "E": "'look into / enhance' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Close down a branch; curtail costs.",
    "memoryCode": "🎵 [Karma Gramer]: Close down a branch; curtail costs.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-416",
    "topicSlug": "articles",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The Amazon basin is ------- home to thousands of indigenous tribes, ------- language and customs are completely unique.",
    "options": [
      "an / whom",
      "the / which",
      "a / that",
      "the / where",
      "Ø / whose"
    ],
    "answer": 4,
    "explanation": "'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
    "distractorAnalysis": {
      "A": "'an / whom' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'the / which' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'a / that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'the / where' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur."
    },
    "tactic": "Be home to (Ø); tribes whose language...",
    "memoryCode": "🎵 [Karma Gramer]: Be home to (Ø); tribes whose language...",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-417",
    "topicSlug": "adverbial-clauses",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "------- progress has been made in quantum computing, several foundational hardware bottlenecks remain -------.",
    "options": [
      "In case / to resolve",
      "Unless / resolution",
      "Because / resolved",
      "Although / unresolved",
      "Since / solving"
    ],
    "answer": 3,
    "explanation": "İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
    "distractorAnalysis": {
      "A": "'In case / to resolve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Unless / resolution' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Because / resolved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
      "E": "'Since / solving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "memoryCode": "🎵 [Karma Gramer]: Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-418",
    "topicSlug": "perfect-modals",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The criminal suspect ------- the theft because reliable airport security cameras recorded him in Berlin at that exact moment.",
    "options": [
      "might have committed",
      "should commit",
      "needn't commit",
      "must have committed",
      "cannot have committed"
    ],
    "answer": 4,
    "explanation": "Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
    "distractorAnalysis": {
      "A": "'might have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'should commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'needn't commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'must have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir."
    },
    "tactic": "Cannot / Couldn't have V3 = Yapmış olamaz.",
    "memoryCode": "🎵 [Karma Gramer]: Cannot / Couldn't have V3 = Yapmış olamaz.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-419",
    "topicSlug": "conjunctions",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The local municipality decided to construct a bypass road ------- heavy freight trucks would not congest residential streets.",
    "options": [
      "provided that",
      "in case",
      "so that",
      "unless",
      "lest"
    ],
    "answer": 2,
    "explanation": "Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
    "distractorAnalysis": {
      "A": "'provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'in case' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
      "D": "'unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'lest' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "So that + modal = -sın diye (Amaç).",
    "memoryCode": "🎵 [Karma Gramer]: So that + modal = -sın diye (Amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-420",
    "topicSlug": "inversion",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Rarely ------- an author capture the psychological complexities of wartime trauma with such profound sensitivity.",
    "options": [
      "has",
      "did",
      "was",
      "is",
      "does"
    ],
    "answer": 4,
    "explanation": "'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
    "distractorAnalysis": {
      "A": "'has' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'did' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur."
    },
    "tactic": "Rarely + does + S + V1.",
    "memoryCode": "🎵 [Karma Gramer]: Rarely + does + S + V1.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-421",
    "topicSlug": "tenses",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "By the end of this decade, marine renewable energy technologies ------- into mainstream commercial grids across Europe.",
    "options": [
      "will have been integrated",
      "will integrate",
      "are integrated",
      "were integrated",
      "have been integrated"
    ],
    "answer": 0,
    "explanation": "'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
      "B": "'will integrate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'are integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'were integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'have been integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "By + Gelecek zaman + Pasif = will have been + V3.",
    "memoryCode": "🎵 [Karma Gramer]: By + Gelecek zaman + Pasif = will have been + V3.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-422",
    "topicSlug": "gerunds-infinitives",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The research team succeeded in ------- the rare enzyme after ------- multiple biochemical assays in the laboratory.",
    "options": [
      "synthesized / conducted",
      "synthesize / to conduct",
      "having synthesized / conduct",
      "to synthesize / conduct",
      "synthesizing / conducting"
    ],
    "answer": 4,
    "explanation": "Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
    "distractorAnalysis": {
      "A": "'synthesized / conducted' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'synthesize / to conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'having synthesized / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'to synthesize / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur."
    },
    "tactic": "Preposition + V-ing kuralı.",
    "memoryCode": "🎵 [Karma Gramer]: Preposition + V-ing kuralı.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-423",
    "topicSlug": "determiners",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Neither the university chancellor nor the faculty deans ------- prepared to compromise on the revised academic standards.",
    "options": [
      "has been",
      "is",
      "was",
      "were",
      "be"
    ],
    "answer": 3,
    "explanation": "'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
    "distractorAnalysis": {
      "A": "'has been' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
      "E": "'be' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Neither ... nor en yakın özneye bakar!",
    "memoryCode": "🎵 [Karma Gramer]: Neither ... nor en yakın özneye bakar!",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-424",
    "topicSlug": "adverbial-clauses",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "------- the economic inflation continued to soar, the central bank decided to raise benchmark lending rates.",
    "options": [
      "Whereas",
      "Although",
      "Even if",
      "As",
      "Unless"
    ],
    "answer": 3,
    "explanation": "Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
    "distractorAnalysis": {
      "A": "'Whereas' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Although' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Even if' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
      "E": "'Unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "As = -dıkça / çünkü.",
    "memoryCode": "🎵 [Karma Gramer]: As = -dıkça / çünkü.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-425",
    "topicSlug": "determiners",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The government launched a public campaign to ensure that ------- citizen had equal access to high-speed digital infrastructure.",
    "options": [
      "several",
      "every",
      "both",
      "many",
      "all"
    ],
    "answer": 1,
    "explanation": "Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
    "distractorAnalysis": {
      "A": "'several' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
      "C": "'both' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'many' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'all' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Every + Tekil isim.",
    "memoryCode": "🎵 [Karma Gramer]: Every + Tekil isim.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-426",
    "topicSlug": "tenses",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Although the committee members ------- the proposal thoroughly yesterday, they decided ------- their final vote until next week.",
    "options": [
      "have reviewed / to postpone",
      "review / postpone",
      "reviewed / to postpone",
      "had reviewed / postponing",
      "were reviewing / postponed"
    ],
    "answer": 2,
    "explanation": "'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
    "distractorAnalysis": {
      "A": "'have reviewed / to postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'review / postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
      "D": "'had reviewed / postponing' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'were reviewing / postponed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Yesterday -> V2; decide -> to V1.",
    "memoryCode": "🎵 [Karma Gramer]: Yesterday -> V2; decide -> to V1.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-427",
    "topicSlug": "passive-voice",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The ancient temple, ------- by archaeologists last year, is widely believed ------- by a powerful volcanic eruption.",
    "options": [
      "discovering / to destroy",
      "was discovered / to be destroyed",
      "having discovered / destroyed",
      "discovered / destroying",
      "discovered / to have been destroyed"
    ],
    "answer": 4,
    "explanation": "İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
    "distractorAnalysis": {
      "A": "'discovering / to destroy' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'was discovered / to be destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'having discovered / destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'discovered / destroying' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur."
    },
    "tactic": "V3 niteleme + is believed to have been V3.",
    "memoryCode": "🎵 [Karma Gramer]: V3 niteleme + is believed to have been V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-428",
    "topicSlug": "conjunctions",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "------- the torrential storm damaged the transmission towers, technicians managed to restore power ------- a few hours.",
    "options": [
      "Because / at",
      "Even though / within",
      "Since / on",
      "Unless / for",
      "In case / through"
    ],
    "answer": 1,
    "explanation": "Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
    "distractorAnalysis": {
      "A": "'Because / at' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
      "C": "'Since / on' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Unless / for' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'In case / through' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "memoryCode": "🎵 [Karma Gramer]: Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-429",
    "topicSlug": "conditionals",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Had the emergency medical team ------- immediately, the patient's critical condition ------- so drastically.",
    "options": [
      "arrived / would not have deteriorated",
      "had arrived / would not deteriorate",
      "arrive / did not deteriorate",
      "arrived / had not deteriorated",
      "been arrived / was not deteriorated"
    ],
    "answer": 0,
    "explanation": "Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
    "distractorAnalysis": {
      "A": "DOĞRU: Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
      "B": "'had arrived / would not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'arrive / did not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'arrived / had not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'been arrived / was not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Had + S + V3 -> would have V3.",
    "memoryCode": "🎵 [Karma Gramer]: Had + S + V3 -> would have V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-430",
    "topicSlug": "gerunds-infinitives",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The laboratory supervisor insisted on ------- the chemical containers carefully ------- any toxic leakage should occur.",
    "options": [
      "inspecting / lest",
      "inspected / unless",
      "to inspect / so that",
      "having inspected / provided that",
      "inspect / in order that"
    ],
    "answer": 0,
    "explanation": "'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
      "B": "'inspected / unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'to inspect / so that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'having inspected / provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'inspect / in order that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Insist on + V-ing; lest + should/yalın fiil.",
    "memoryCode": "🎵 [Karma Gramer]: Insist on + V-ing; lest + should/yalın fiil.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-431",
    "topicSlug": "inversion",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "------- had the international peace treaty been signed ------- border skirmishes erupted once again.",
    "options": [
      "Not only / but also",
      "No sooner / than",
      "Neither / nor",
      "Scarcely / when",
      "Hardly / than"
    ],
    "answer": 3,
    "explanation": "'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
    "distractorAnalysis": {
      "A": "'Not only / but also' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'No sooner / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Neither / nor' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
      "E": "'Hardly / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Scarcely ... WHEN! (No sooner ... THAN).",
    "memoryCode": "🎵 [Karma Gramer]: Scarcely ... WHEN! (No sooner ... THAN).",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-432",
    "topicSlug": "relative-clauses",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The distinguished astrophysicist, ------- research into dark matter revolutionized cosmology, received ------- award yesterday.",
    "options": [
      "which / a",
      "whose / an",
      "that / Ø",
      "whom / an",
      "who / the"
    ],
    "answer": 1,
    "explanation": "Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
    "distractorAnalysis": {
      "A": "'which / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
      "C": "'that / Ø' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'whom / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'who / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "İsim + whose + isim; an award.",
    "memoryCode": "🎵 [Karma Gramer]: İsim + whose + isim; an award.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-433",
    "topicSlug": "perfect-modals",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "You ------- all that heavy reference material to class this morning; the teacher uploaded digital copies -------.",
    "options": [
      "would rather bring / therefore",
      "needn't have brought / instead",
      "must not bring / furthermore",
      "could not bring / nevertheless",
      "should have brought / otherwise"
    ],
    "answer": 1,
    "explanation": "Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
    "distractorAnalysis": {
      "A": "'would rather bring / therefore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
      "C": "'must not bring / furthermore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'could not bring / nevertheless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'should have brought / otherwise' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Needn't have V3 = Gerek yoktu ama yaptın.",
    "memoryCode": "🎵 [Karma Gramer]: Needn't have V3 = Gerek yoktu ama yaptın.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-434",
    "topicSlug": "conditionals",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "------- the global financial market recovers, investors will continue to seek refuge in ------- gold and silver.",
    "options": [
      "Unless / Ø",
      "Although / the",
      "In case / the",
      "As long as / an",
      "Because / a"
    ],
    "answer": 0,
    "explanation": "Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
    "distractorAnalysis": {
      "A": "DOĞRU: Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
      "B": "'Although / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'In case / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'As long as / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Because / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "memoryCode": "🎵 [Karma Gramer]: Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-435",
    "topicSlug": "comparatives",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The new high-speed electric locomotive runs far ------- than older diesel models, consuming ------- energy per passenger.",
    "options": [
      "quietly / fewer",
      "more quietly / less",
      "quiet / much",
      "most quietly / little",
      "more quiet / least"
    ],
    "answer": 1,
    "explanation": "Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
    "distractorAnalysis": {
      "A": "'quietly / fewer' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
      "C": "'quiet / much' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'most quietly / little' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'more quiet / least' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Run + more quietly than; less energy.",
    "memoryCode": "🎵 [Karma Gramer]: Run + more quietly than; less energy.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-436",
    "topicSlug": "noun-clauses",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The clinical panel investigated ------- the sudden surge in neurological diagnoses was ------- environmental pollutants.",
    "options": [
      "what / rather than",
      "that / in spite of",
      "whether / due to",
      "which / as well as",
      "how / contrary to"
    ],
    "answer": 2,
    "explanation": "Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
    "distractorAnalysis": {
      "A": "'what / rather than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'that / in spite of' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
      "D": "'which / as well as' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'how / contrary to' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Investigate + whether; due to = -den kaynaklanan.",
    "memoryCode": "🎵 [Karma Gramer]: Investigate + whether; due to = -den kaynaklanan.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-437",
    "topicSlug": "inversion",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Under no circumstances ------- researchers modify experimental datasets without ------- formal written authorization.",
    "options": [
      "would / obtain",
      "have / having obtained",
      "should / obtaining",
      "ought / to obtain",
      "must have / obtained"
    ],
    "answer": 2,
    "explanation": "'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
    "distractorAnalysis": {
      "A": "'would / obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'have / having obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
      "D": "'ought / to obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'must have / obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Under no circumstances + should + S + V1; without + V-ing.",
    "memoryCode": "🎵 [Karma Gramer]: Under no circumstances + should + S + V1; without + V-ing.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-438",
    "topicSlug": "causatives",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The university had the entire library archive ------- by specialized digital technicians to ------- rare manuscripts.",
    "options": [
      "digitize / preserving",
      "to digitize / preserved",
      "digitizing / to preserve",
      "being digitized / preserve",
      "digitized / preserve"
    ],
    "answer": 4,
    "explanation": "'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
    "distractorAnalysis": {
      "A": "'digitize / preserving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'to digitize / preserved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'digitizing / to preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'being digitized / preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için)."
    },
    "tactic": "Have + nesne + V3; to V1 (amaç).",
    "memoryCode": "🎵 [Karma Gramer]: Have + nesne + V3; to V1 (amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-439",
    "topicSlug": "determiners",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "------- many students registered for the introductory chemistry course that the department had to open an extra section.",
    "options": [
      "So",
      "Such",
      "As",
      "Very",
      "Too"
    ],
    "answer": 0,
    "explanation": "'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
    "distractorAnalysis": {
      "A": "DOĞRU: 'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
      "B": "'Such' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'As' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Very' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Too' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "So many / so much ... THAT! (Such a lot of).",
    "memoryCode": "🎵 [Karma Gramer]: So many / so much ... THAT! (Such a lot of).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-440",
    "topicSlug": "phrasal-verbs",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The company decided to ------- several inefficient regional branches in order to ------- operating costs during the crisis.",
    "options": [
      "put up with / maximize",
      "carry out / elevate",
      "look into / enhance",
      "close down / curtail",
      "bring about / augment"
    ],
    "answer": 3,
    "explanation": "Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
    "distractorAnalysis": {
      "A": "'put up with / maximize' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'carry out / elevate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'look into / enhance' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
      "E": "'bring about / augment' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Close down a branch; curtail costs.",
    "memoryCode": "🎵 [Karma Gramer]: Close down a branch; curtail costs.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-441",
    "topicSlug": "articles",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The Amazon basin is ------- home to thousands of indigenous tribes, ------- language and customs are completely unique.",
    "options": [
      "an / whom",
      "the / which",
      "the / where",
      "Ø / whose",
      "a / that"
    ],
    "answer": 3,
    "explanation": "'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
    "distractorAnalysis": {
      "A": "'an / whom' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'the / which' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'the / where' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
      "E": "'a / that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Be home to (Ø); tribes whose language...",
    "memoryCode": "🎵 [Karma Gramer]: Be home to (Ø); tribes whose language...",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-442",
    "topicSlug": "adverbial-clauses",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "------- progress has been made in quantum computing, several foundational hardware bottlenecks remain -------.",
    "options": [
      "Although / unresolved",
      "Since / solving",
      "Because / resolved",
      "Unless / resolution",
      "In case / to resolve"
    ],
    "answer": 0,
    "explanation": "İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
    "distractorAnalysis": {
      "A": "DOĞRU: İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
      "B": "'Since / solving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Because / resolved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Unless / resolution' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'In case / to resolve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "memoryCode": "🎵 [Karma Gramer]: Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-443",
    "topicSlug": "perfect-modals",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The criminal suspect ------- the theft because reliable airport security cameras recorded him in Berlin at that exact moment.",
    "options": [
      "might have committed",
      "needn't commit",
      "cannot have committed",
      "should commit",
      "must have committed"
    ],
    "answer": 2,
    "explanation": "Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
    "distractorAnalysis": {
      "A": "'might have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'needn't commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
      "D": "'should commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'must have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Cannot / Couldn't have V3 = Yapmış olamaz.",
    "memoryCode": "🎵 [Karma Gramer]: Cannot / Couldn't have V3 = Yapmış olamaz.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-444",
    "topicSlug": "conjunctions",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The local municipality decided to construct a bypass road ------- heavy freight trucks would not congest residential streets.",
    "options": [
      "so that",
      "unless",
      "provided that",
      "lest",
      "in case"
    ],
    "answer": 0,
    "explanation": "Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
    "distractorAnalysis": {
      "A": "DOĞRU: Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
      "B": "'unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'lest' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'in case' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "So that + modal = -sın diye (Amaç).",
    "memoryCode": "🎵 [Karma Gramer]: So that + modal = -sın diye (Amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-445",
    "topicSlug": "inversion",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Rarely ------- an author capture the psychological complexities of wartime trauma with such profound sensitivity.",
    "options": [
      "is",
      "did",
      "was",
      "does",
      "has"
    ],
    "answer": 3,
    "explanation": "'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
    "distractorAnalysis": {
      "A": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'did' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
      "E": "'has' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Rarely + does + S + V1.",
    "memoryCode": "🎵 [Karma Gramer]: Rarely + does + S + V1.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-446",
    "topicSlug": "tenses",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "By the end of this decade, marine renewable energy technologies ------- into mainstream commercial grids across Europe.",
    "options": [
      "will integrate",
      "have been integrated",
      "were integrated",
      "will have been integrated",
      "are integrated"
    ],
    "answer": 3,
    "explanation": "'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
    "distractorAnalysis": {
      "A": "'will integrate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'have been integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'were integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
      "E": "'are integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "By + Gelecek zaman + Pasif = will have been + V3.",
    "memoryCode": "🎵 [Karma Gramer]: By + Gelecek zaman + Pasif = will have been + V3.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-447",
    "topicSlug": "gerunds-infinitives",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The research team succeeded in ------- the rare enzyme after ------- multiple biochemical assays in the laboratory.",
    "options": [
      "synthesize / to conduct",
      "synthesizing / conducting",
      "to synthesize / conduct",
      "synthesized / conducted",
      "having synthesized / conduct"
    ],
    "answer": 1,
    "explanation": "Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
    "distractorAnalysis": {
      "A": "'synthesize / to conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
      "C": "'to synthesize / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'synthesized / conducted' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'having synthesized / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Preposition + V-ing kuralı.",
    "memoryCode": "🎵 [Karma Gramer]: Preposition + V-ing kuralı.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-448",
    "topicSlug": "determiners",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Neither the university chancellor nor the faculty deans ------- prepared to compromise on the revised academic standards.",
    "options": [
      "has been",
      "be",
      "is",
      "were",
      "was"
    ],
    "answer": 3,
    "explanation": "'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
    "distractorAnalysis": {
      "A": "'has been' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'be' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
      "E": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Neither ... nor en yakın özneye bakar!",
    "memoryCode": "🎵 [Karma Gramer]: Neither ... nor en yakın özneye bakar!",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-449",
    "topicSlug": "adverbial-clauses",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "------- the economic inflation continued to soar, the central bank decided to raise benchmark lending rates.",
    "options": [
      "Even if",
      "Whereas",
      "As",
      "Although",
      "Unless"
    ],
    "answer": 2,
    "explanation": "Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
    "distractorAnalysis": {
      "A": "'Even if' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Whereas' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
      "D": "'Although' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "As = -dıkça / çünkü.",
    "memoryCode": "🎵 [Karma Gramer]: As = -dıkça / çünkü.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-450",
    "topicSlug": "determiners",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The government launched a public campaign to ensure that ------- citizen had equal access to high-speed digital infrastructure.",
    "options": [
      "both",
      "every",
      "all",
      "many",
      "several"
    ],
    "answer": 1,
    "explanation": "Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
    "distractorAnalysis": {
      "A": "'both' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
      "C": "'all' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'many' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'several' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Every + Tekil isim.",
    "memoryCode": "🎵 [Karma Gramer]: Every + Tekil isim.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-451",
    "topicSlug": "tenses",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Although the committee members ------- the proposal thoroughly yesterday, they decided ------- their final vote until next week.",
    "options": [
      "had reviewed / postponing",
      "have reviewed / to postpone",
      "review / postpone",
      "reviewed / to postpone",
      "were reviewing / postponed"
    ],
    "answer": 3,
    "explanation": "'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
    "distractorAnalysis": {
      "A": "'had reviewed / postponing' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'have reviewed / to postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'review / postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
      "E": "'were reviewing / postponed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Yesterday -> V2; decide -> to V1.",
    "memoryCode": "🎵 [Karma Gramer]: Yesterday -> V2; decide -> to V1.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-452",
    "topicSlug": "passive-voice",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The ancient temple, ------- by archaeologists last year, is widely believed ------- by a powerful volcanic eruption.",
    "options": [
      "discovering / to destroy",
      "having discovered / destroyed",
      "discovered / destroying",
      "was discovered / to be destroyed",
      "discovered / to have been destroyed"
    ],
    "answer": 4,
    "explanation": "İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
    "distractorAnalysis": {
      "A": "'discovering / to destroy' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'having discovered / destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'discovered / destroying' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'was discovered / to be destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur."
    },
    "tactic": "V3 niteleme + is believed to have been V3.",
    "memoryCode": "🎵 [Karma Gramer]: V3 niteleme + is believed to have been V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-453",
    "topicSlug": "conjunctions",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "------- the torrential storm damaged the transmission towers, technicians managed to restore power ------- a few hours.",
    "options": [
      "Since / on",
      "Unless / for",
      "Because / at",
      "Even though / within",
      "In case / through"
    ],
    "answer": 3,
    "explanation": "Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
    "distractorAnalysis": {
      "A": "'Since / on' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Unless / for' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Because / at' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
      "E": "'In case / through' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "memoryCode": "🎵 [Karma Gramer]: Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-454",
    "topicSlug": "conditionals",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Had the emergency medical team ------- immediately, the patient's critical condition ------- so drastically.",
    "options": [
      "arrived / had not deteriorated",
      "arrive / did not deteriorate",
      "arrived / would not have deteriorated",
      "been arrived / was not deteriorated",
      "had arrived / would not deteriorate"
    ],
    "answer": 2,
    "explanation": "Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
    "distractorAnalysis": {
      "A": "'arrived / had not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'arrive / did not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
      "D": "'been arrived / was not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'had arrived / would not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Had + S + V3 -> would have V3.",
    "memoryCode": "🎵 [Karma Gramer]: Had + S + V3 -> would have V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-455",
    "topicSlug": "gerunds-infinitives",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The laboratory supervisor insisted on ------- the chemical containers carefully ------- any toxic leakage should occur.",
    "options": [
      "having inspected / provided that",
      "inspected / unless",
      "inspecting / lest",
      "to inspect / so that",
      "inspect / in order that"
    ],
    "answer": 2,
    "explanation": "'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
    "distractorAnalysis": {
      "A": "'having inspected / provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'inspected / unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
      "D": "'to inspect / so that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'inspect / in order that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Insist on + V-ing; lest + should/yalın fiil.",
    "memoryCode": "🎵 [Karma Gramer]: Insist on + V-ing; lest + should/yalın fiil.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-456",
    "topicSlug": "inversion",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "------- had the international peace treaty been signed ------- border skirmishes erupted once again.",
    "options": [
      "Not only / but also",
      "Hardly / than",
      "Neither / nor",
      "Scarcely / when",
      "No sooner / than"
    ],
    "answer": 3,
    "explanation": "'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
    "distractorAnalysis": {
      "A": "'Not only / but also' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Hardly / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Neither / nor' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
      "E": "'No sooner / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Scarcely ... WHEN! (No sooner ... THAN).",
    "memoryCode": "🎵 [Karma Gramer]: Scarcely ... WHEN! (No sooner ... THAN).",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-457",
    "topicSlug": "relative-clauses",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The distinguished astrophysicist, ------- research into dark matter revolutionized cosmology, received ------- award yesterday.",
    "options": [
      "whose / an",
      "who / the",
      "that / Ø",
      "which / a",
      "whom / an"
    ],
    "answer": 0,
    "explanation": "Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
    "distractorAnalysis": {
      "A": "DOĞRU: Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
      "B": "'who / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'that / Ø' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'which / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'whom / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "İsim + whose + isim; an award.",
    "memoryCode": "🎵 [Karma Gramer]: İsim + whose + isim; an award.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-458",
    "topicSlug": "perfect-modals",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "You ------- all that heavy reference material to class this morning; the teacher uploaded digital copies -------.",
    "options": [
      "must not bring / furthermore",
      "would rather bring / therefore",
      "should have brought / otherwise",
      "could not bring / nevertheless",
      "needn't have brought / instead"
    ],
    "answer": 4,
    "explanation": "Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
    "distractorAnalysis": {
      "A": "'must not bring / furthermore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'would rather bring / therefore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'should have brought / otherwise' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'could not bring / nevertheless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır."
    },
    "tactic": "Needn't have V3 = Gerek yoktu ama yaptın.",
    "memoryCode": "🎵 [Karma Gramer]: Needn't have V3 = Gerek yoktu ama yaptın.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-459",
    "topicSlug": "conditionals",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "------- the global financial market recovers, investors will continue to seek refuge in ------- gold and silver.",
    "options": [
      "As long as / an",
      "In case / the",
      "Unless / Ø",
      "Because / a",
      "Although / the"
    ],
    "answer": 2,
    "explanation": "Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
    "distractorAnalysis": {
      "A": "'As long as / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'In case / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
      "D": "'Because / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Although / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "memoryCode": "🎵 [Karma Gramer]: Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-460",
    "topicSlug": "comparatives",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The new high-speed electric locomotive runs far ------- than older diesel models, consuming ------- energy per passenger.",
    "options": [
      "most quietly / little",
      "quiet / much",
      "more quiet / least",
      "quietly / fewer",
      "more quietly / less"
    ],
    "answer": 4,
    "explanation": "Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
    "distractorAnalysis": {
      "A": "'most quietly / little' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'quiet / much' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'more quiet / least' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'quietly / fewer' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır."
    },
    "tactic": "Run + more quietly than; less energy.",
    "memoryCode": "🎵 [Karma Gramer]: Run + more quietly than; less energy.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-461",
    "topicSlug": "noun-clauses",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The clinical panel investigated ------- the sudden surge in neurological diagnoses was ------- environmental pollutants.",
    "options": [
      "that / in spite of",
      "what / rather than",
      "how / contrary to",
      "which / as well as",
      "whether / due to"
    ],
    "answer": 4,
    "explanation": "Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
    "distractorAnalysis": {
      "A": "'that / in spite of' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'what / rather than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'how / contrary to' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'which / as well as' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar."
    },
    "tactic": "Investigate + whether; due to = -den kaynaklanan.",
    "memoryCode": "🎵 [Karma Gramer]: Investigate + whether; due to = -den kaynaklanan.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-462",
    "topicSlug": "inversion",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Under no circumstances ------- researchers modify experimental datasets without ------- formal written authorization.",
    "options": [
      "would / obtain",
      "have / having obtained",
      "must have / obtained",
      "should / obtaining",
      "ought / to obtain"
    ],
    "answer": 3,
    "explanation": "'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
    "distractorAnalysis": {
      "A": "'would / obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'have / having obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'must have / obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
      "E": "'ought / to obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Under no circumstances + should + S + V1; without + V-ing.",
    "memoryCode": "🎵 [Karma Gramer]: Under no circumstances + should + S + V1; without + V-ing.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-463",
    "topicSlug": "causatives",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The university had the entire library archive ------- by specialized digital technicians to ------- rare manuscripts.",
    "options": [
      "digitize / preserving",
      "to digitize / preserved",
      "digitized / preserve",
      "digitizing / to preserve",
      "being digitized / preserve"
    ],
    "answer": 2,
    "explanation": "'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
    "distractorAnalysis": {
      "A": "'digitize / preserving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'to digitize / preserved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
      "D": "'digitizing / to preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'being digitized / preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Have + nesne + V3; to V1 (amaç).",
    "memoryCode": "🎵 [Karma Gramer]: Have + nesne + V3; to V1 (amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-464",
    "topicSlug": "determiners",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "------- many students registered for the introductory chemistry course that the department had to open an extra section.",
    "options": [
      "As",
      "Such",
      "Too",
      "Very",
      "So"
    ],
    "answer": 4,
    "explanation": "'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
    "distractorAnalysis": {
      "A": "'As' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Such' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Too' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Very' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: 'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...)."
    },
    "tactic": "So many / so much ... THAT! (Such a lot of).",
    "memoryCode": "🎵 [Karma Gramer]: So many / so much ... THAT! (Such a lot of).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-465",
    "topicSlug": "phrasal-verbs",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The company decided to ------- several inefficient regional branches in order to ------- operating costs during the crisis.",
    "options": [
      "bring about / augment",
      "look into / enhance",
      "carry out / elevate",
      "close down / curtail",
      "put up with / maximize"
    ],
    "answer": 3,
    "explanation": "Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
    "distractorAnalysis": {
      "A": "'bring about / augment' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'look into / enhance' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'carry out / elevate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
      "E": "'put up with / maximize' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Close down a branch; curtail costs.",
    "memoryCode": "🎵 [Karma Gramer]: Close down a branch; curtail costs.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-466",
    "topicSlug": "articles",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The Amazon basin is ------- home to thousands of indigenous tribes, ------- language and customs are completely unique.",
    "options": [
      "the / where",
      "an / whom",
      "Ø / whose",
      "a / that",
      "the / which"
    ],
    "answer": 2,
    "explanation": "'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
    "distractorAnalysis": {
      "A": "'the / where' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'an / whom' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
      "D": "'a / that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'the / which' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Be home to (Ø); tribes whose language...",
    "memoryCode": "🎵 [Karma Gramer]: Be home to (Ø); tribes whose language...",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-467",
    "topicSlug": "adverbial-clauses",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "------- progress has been made in quantum computing, several foundational hardware bottlenecks remain -------.",
    "options": [
      "Since / solving",
      "Unless / resolution",
      "Because / resolved",
      "Although / unresolved",
      "In case / to resolve"
    ],
    "answer": 3,
    "explanation": "İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
    "distractorAnalysis": {
      "A": "'Since / solving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Unless / resolution' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Because / resolved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
      "E": "'In case / to resolve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "memoryCode": "🎵 [Karma Gramer]: Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-468",
    "topicSlug": "perfect-modals",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The criminal suspect ------- the theft because reliable airport security cameras recorded him in Berlin at that exact moment.",
    "options": [
      "needn't commit",
      "might have committed",
      "cannot have committed",
      "must have committed",
      "should commit"
    ],
    "answer": 2,
    "explanation": "Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
    "distractorAnalysis": {
      "A": "'needn't commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'might have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
      "D": "'must have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'should commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Cannot / Couldn't have V3 = Yapmış olamaz.",
    "memoryCode": "🎵 [Karma Gramer]: Cannot / Couldn't have V3 = Yapmış olamaz.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-469",
    "topicSlug": "conjunctions",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The local municipality decided to construct a bypass road ------- heavy freight trucks would not congest residential streets.",
    "options": [
      "in case",
      "so that",
      "lest",
      "unless",
      "provided that"
    ],
    "answer": 1,
    "explanation": "Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
    "distractorAnalysis": {
      "A": "'in case' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
      "C": "'lest' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "So that + modal = -sın diye (Amaç).",
    "memoryCode": "🎵 [Karma Gramer]: So that + modal = -sın diye (Amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-470",
    "topicSlug": "inversion",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Rarely ------- an author capture the psychological complexities of wartime trauma with such profound sensitivity.",
    "options": [
      "was",
      "has",
      "is",
      "does",
      "did"
    ],
    "answer": 3,
    "explanation": "'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
    "distractorAnalysis": {
      "A": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'has' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: 'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
      "E": "'did' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Rarely + does + S + V1.",
    "memoryCode": "🎵 [Karma Gramer]: Rarely + does + S + V1.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-471",
    "topicSlug": "tenses",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "By the end of this decade, marine renewable energy technologies ------- into mainstream commercial grids across Europe.",
    "options": [
      "have been integrated",
      "will have been integrated",
      "will integrate",
      "were integrated",
      "are integrated"
    ],
    "answer": 1,
    "explanation": "'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
    "distractorAnalysis": {
      "A": "'have been integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
      "C": "'will integrate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'were integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'are integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "By + Gelecek zaman + Pasif = will have been + V3.",
    "memoryCode": "🎵 [Karma Gramer]: By + Gelecek zaman + Pasif = will have been + V3.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-472",
    "topicSlug": "gerunds-infinitives",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The research team succeeded in ------- the rare enzyme after ------- multiple biochemical assays in the laboratory.",
    "options": [
      "synthesizing / conducting",
      "synthesized / conducted",
      "having synthesized / conduct",
      "to synthesize / conduct",
      "synthesize / to conduct"
    ],
    "answer": 0,
    "explanation": "Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
    "distractorAnalysis": {
      "A": "DOĞRU: Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
      "B": "'synthesized / conducted' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'having synthesized / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'to synthesize / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'synthesize / to conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Preposition + V-ing kuralı.",
    "memoryCode": "🎵 [Karma Gramer]: Preposition + V-ing kuralı.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-473",
    "topicSlug": "determiners",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Neither the university chancellor nor the faculty deans ------- prepared to compromise on the revised academic standards.",
    "options": [
      "has been",
      "were",
      "was",
      "is",
      "be"
    ],
    "answer": 1,
    "explanation": "'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
    "distractorAnalysis": {
      "A": "'has been' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
      "C": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'be' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Neither ... nor en yakın özneye bakar!",
    "memoryCode": "🎵 [Karma Gramer]: Neither ... nor en yakın özneye bakar!",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-474",
    "topicSlug": "adverbial-clauses",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "------- the economic inflation continued to soar, the central bank decided to raise benchmark lending rates.",
    "options": [
      "Whereas",
      "Even if",
      "Although",
      "Unless",
      "As"
    ],
    "answer": 4,
    "explanation": "Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
    "distractorAnalysis": {
      "A": "'Whereas' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Even if' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Although' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir."
    },
    "tactic": "As = -dıkça / çünkü.",
    "memoryCode": "🎵 [Karma Gramer]: As = -dıkça / çünkü.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-475",
    "topicSlug": "determiners",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The government launched a public campaign to ensure that ------- citizen had equal access to high-speed digital infrastructure.",
    "options": [
      "all",
      "every",
      "many",
      "both",
      "several"
    ],
    "answer": 1,
    "explanation": "Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
    "distractorAnalysis": {
      "A": "'all' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
      "C": "'many' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'both' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'several' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Every + Tekil isim.",
    "memoryCode": "🎵 [Karma Gramer]: Every + Tekil isim.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-476",
    "topicSlug": "tenses",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Although the committee members ------- the proposal thoroughly yesterday, they decided ------- their final vote until next week.",
    "options": [
      "review / postpone",
      "reviewed / to postpone",
      "were reviewing / postponed",
      "had reviewed / postponing",
      "have reviewed / to postpone"
    ],
    "answer": 1,
    "explanation": "'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
    "distractorAnalysis": {
      "A": "'review / postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Yesterday' zaman zarfı Simple Past (reviewed), 'decide' fiili ise to-infinitive (to postpone) gerektirir.",
      "C": "'were reviewing / postponed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'had reviewed / postponing' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'have reviewed / to postpone' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Yesterday -> V2; decide -> to V1.",
    "memoryCode": "🎵 [Karma Gramer]: Yesterday -> V2; decide -> to V1.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-477",
    "topicSlug": "passive-voice",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The ancient temple, ------- by archaeologists last year, is widely believed ------- by a powerful volcanic eruption.",
    "options": [
      "discovered / destroying",
      "discovered / to have been destroyed",
      "having discovered / destroyed",
      "was discovered / to be destroyed",
      "discovering / to destroy"
    ],
    "answer": 1,
    "explanation": "İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
    "distractorAnalysis": {
      "A": "'discovered / destroying' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: İsmi niteleyen pasif kısaltma 'discovered', geçmişteki yıkılışı anlatan yapı ise 'to have been destroyed'dur.",
      "C": "'having discovered / destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'was discovered / to be destroyed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'discovering / to destroy' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "V3 niteleme + is believed to have been V3.",
    "memoryCode": "🎵 [Karma Gramer]: V3 niteleme + is believed to have been V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-478",
    "topicSlug": "conjunctions",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "------- the torrential storm damaged the transmission towers, technicians managed to restore power ------- a few hours.",
    "options": [
      "Unless / for",
      "Even though / within",
      "Because / at",
      "In case / through",
      "Since / on"
    ],
    "answer": 1,
    "explanation": "Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
    "distractorAnalysis": {
      "A": "'Unless / for' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Fırtınaya rağmen elektriğin hızla gelmesi zıtlıktır (Even though); süre zarfı 'within a few hours'dur.",
      "C": "'Because / at' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'In case / through' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Since / on' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "memoryCode": "🎵 [Karma Gramer]: Even though + zıtlık; within a few hours = birkaç saat içinde.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-479",
    "topicSlug": "conditionals",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Had the emergency medical team ------- immediately, the patient's critical condition ------- so drastically.",
    "options": [
      "been arrived / was not deteriorated",
      "arrived / would not have deteriorated",
      "arrived / had not deteriorated",
      "had arrived / would not deteriorate",
      "arrive / did not deteriorate"
    ],
    "answer": 1,
    "explanation": "Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
    "distractorAnalysis": {
      "A": "'been arrived / was not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Cümle başında 'Had + S + V3' devrik Type 3 geçmiş şart yapısıdır; ana cümlede 'would have V3' gerekir.",
      "C": "'arrived / had not deteriorated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'had arrived / would not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'arrive / did not deteriorate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Had + S + V3 -> would have V3.",
    "memoryCode": "🎵 [Karma Gramer]: Had + S + V3 -> would have V3.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-480",
    "topicSlug": "gerunds-infinitives",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The laboratory supervisor insisted on ------- the chemical containers carefully ------- any toxic leakage should occur.",
    "options": [
      "to inspect / so that",
      "inspected / unless",
      "inspecting / lest",
      "having inspected / provided that",
      "inspect / in order that"
    ],
    "answer": 2,
    "explanation": "'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
    "distractorAnalysis": {
      "A": "'to inspect / so that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'inspected / unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Insist on' edatından sonra gerund (inspecting), 'olmasın diye' korkusuyla anlamında ise 'lest' kullanılır.",
      "D": "'having inspected / provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'inspect / in order that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Insist on + V-ing; lest + should/yalın fiil.",
    "memoryCode": "🎵 [Karma Gramer]: Insist on + V-ing; lest + should/yalın fiil.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-481",
    "topicSlug": "inversion",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "------- had the international peace treaty been signed ------- border skirmishes erupted once again.",
    "options": [
      "Not only / but also",
      "Scarcely / when",
      "No sooner / than",
      "Neither / nor",
      "Hardly / than"
    ],
    "answer": 1,
    "explanation": "'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
    "distractorAnalysis": {
      "A": "'Not only / but also' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'Scarcely had + S + V3 ... when' kalıbı -er -mez anlamında değişmez bir devrik yapıdır.",
      "C": "'No sooner / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Neither / nor' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Hardly / than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Scarcely ... WHEN! (No sooner ... THAN).",
    "memoryCode": "🎵 [Karma Gramer]: Scarcely ... WHEN! (No sooner ... THAN).",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-482",
    "topicSlug": "relative-clauses",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The distinguished astrophysicist, ------- research into dark matter revolutionized cosmology, received ------- award yesterday.",
    "options": [
      "that / Ø",
      "whom / an",
      "which / a",
      "whose / an",
      "who / the"
    ],
    "answer": 3,
    "explanation": "Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
    "distractorAnalysis": {
      "A": "'that / Ø' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'whom / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'which / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Bilim insanı ile araştırması arasındaki sahiplik bağı 'whose', sesli harfle başlayan 'award' önü 'an' gerektirir.",
      "E": "'who / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "İsim + whose + isim; an award.",
    "memoryCode": "🎵 [Karma Gramer]: İsim + whose + isim; an award.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-483",
    "topicSlug": "perfect-modals",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "You ------- all that heavy reference material to class this morning; the teacher uploaded digital copies -------.",
    "options": [
      "would rather bring / therefore",
      "must not bring / furthermore",
      "could not bring / nevertheless",
      "needn't have brought / instead",
      "should have brought / otherwise"
    ],
    "answer": 3,
    "explanation": "Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
    "distractorAnalysis": {
      "A": "'would rather bring / therefore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'must not bring / furthermore' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'could not bring / nevertheless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Gerek yokken boş yere yapılan geçmiş eylemler için 'needn't have brought' kullanılır.",
      "E": "'should have brought / otherwise' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Needn't have V3 = Gerek yoktu ama yaptın.",
    "memoryCode": "🎵 [Karma Gramer]: Needn't have V3 = Gerek yoktu ama yaptın.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-484",
    "topicSlug": "conditionals",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "------- the global financial market recovers, investors will continue to seek refuge in ------- gold and silver.",
    "options": [
      "Although / the",
      "As long as / an",
      "Because / a",
      "Unless / Ø",
      "In case / the"
    ],
    "answer": 3,
    "explanation": "Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
    "distractorAnalysis": {
      "A": "'Although / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'As long as / an' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Because / a' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Piyasa toparlanmadıkça (Unless); genel emtia isimleri (gold and silver) önünde article almaz (Ø).",
      "E": "'In case / the' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "memoryCode": "🎵 [Karma Gramer]: Unless + V1 -> Future; emtia/maden adları = Sıfır Belirteç.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-485",
    "topicSlug": "comparatives",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The new high-speed electric locomotive runs far ------- than older diesel models, consuming ------- energy per passenger.",
    "options": [
      "more quietly / less",
      "quiet / much",
      "more quiet / least",
      "most quietly / little",
      "quietly / fewer"
    ],
    "answer": 0,
    "explanation": "Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
    "distractorAnalysis": {
      "A": "DOĞRU: Fiili niteleyen zarf karşılaştırması 'more quietly', sayılamayan 'energy' ile 'less' kullanılır.",
      "B": "'quiet / much' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'more quiet / least' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'most quietly / little' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'quietly / fewer' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Run + more quietly than; less energy.",
    "memoryCode": "🎵 [Karma Gramer]: Run + more quietly than; less energy.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-486",
    "topicSlug": "noun-clauses",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The clinical panel investigated ------- the sudden surge in neurological diagnoses was ------- environmental pollutants.",
    "options": [
      "that / in spite of",
      "what / rather than",
      "whether / due to",
      "how / contrary to",
      "which / as well as"
    ],
    "answer": 2,
    "explanation": "Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
    "distractorAnalysis": {
      "A": "'that / in spite of' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'what / rather than' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Belirsizlik araştırılırken 'whether ... was due to' (çevre kirliliğinden kaynaklanıp kaynaklanmadığı) tam uyar.",
      "D": "'how / contrary to' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'which / as well as' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Investigate + whether; due to = -den kaynaklanan.",
    "memoryCode": "🎵 [Karma Gramer]: Investigate + whether; due to = -den kaynaklanan.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-487",
    "topicSlug": "inversion",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Under no circumstances ------- researchers modify experimental datasets without ------- formal written authorization.",
    "options": [
      "should / obtaining",
      "have / having obtained",
      "ought / to obtain",
      "must have / obtained",
      "would / obtain"
    ],
    "answer": 0,
    "explanation": "'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Under no circumstances' devrik modal (should) ister; 'without' edatından sonra gerund (obtaining) gelir.",
      "B": "'have / having obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'ought / to obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'must have / obtained' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'would / obtain' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Under no circumstances + should + S + V1; without + V-ing.",
    "memoryCode": "🎵 [Karma Gramer]: Under no circumstances + should + S + V1; without + V-ing.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-488",
    "topicSlug": "causatives",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The university had the entire library archive ------- by specialized digital technicians to ------- rare manuscripts.",
    "options": [
      "digitize / preserving",
      "digitizing / to preserve",
      "digitized / preserve",
      "being digitized / preserve",
      "to digitize / preserved"
    ],
    "answer": 2,
    "explanation": "'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
    "distractorAnalysis": {
      "A": "'digitize / preserving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'digitizing / to preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Have the archive digitized' (arşivi dijitalleştirtmek) ve amaç bildiren 'to preserve' (korumak için).",
      "D": "'being digitized / preserve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'to digitize / preserved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Have + nesne + V3; to V1 (amaç).",
    "memoryCode": "🎵 [Karma Gramer]: Have + nesne + V3; to V1 (amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-489",
    "topicSlug": "determiners",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "------- many students registered for the introductory chemistry course that the department had to open an extra section.",
    "options": [
      "So",
      "Too",
      "As",
      "Such",
      "Very"
    ],
    "answer": 0,
    "explanation": "'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
    "distractorAnalysis": {
      "A": "DOĞRU: 'So many + çoğul isim + that' kalıbı sonuç bildirir (O kadar çok öğrenci kaydoldu ki...).",
      "B": "'Too' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'As' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Such' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Very' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "So many / so much ... THAT! (Such a lot of).",
    "memoryCode": "🎵 [Karma Gramer]: So many / so much ... THAT! (Such a lot of).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-490",
    "topicSlug": "phrasal-verbs",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The company decided to ------- several inefficient regional branches in order to ------- operating costs during the crisis.",
    "options": [
      "put up with / maximize",
      "close down / curtail",
      "bring about / augment",
      "look into / enhance",
      "carry out / elevate"
    ],
    "answer": 1,
    "explanation": "Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
    "distractorAnalysis": {
      "A": "'put up with / maximize' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Verimsiz şubeleri 'kapatmak' (close down) ve maliyetleri 'kısmak/azaltmak' (curtail).",
      "C": "'bring about / augment' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'look into / enhance' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'carry out / elevate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Close down a branch; curtail costs.",
    "memoryCode": "🎵 [Karma Gramer]: Close down a branch; curtail costs.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-491",
    "topicSlug": "articles",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The Amazon basin is ------- home to thousands of indigenous tribes, ------- language and customs are completely unique.",
    "options": [
      "the / where",
      "a / that",
      "Ø / whose",
      "an / whom",
      "the / which"
    ],
    "answer": 2,
    "explanation": "'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
    "distractorAnalysis": {
      "A": "'the / where' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'a / that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Is home to' deyiminde article kullanılmaz (Ø); kabilelerin dilleri arasındaki aitlik bağı 'whose'dur.",
      "D": "'an / whom' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'the / which' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Be home to (Ø); tribes whose language...",
    "memoryCode": "🎵 [Karma Gramer]: Be home to (Ø); tribes whose language...",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-492",
    "topicSlug": "adverbial-clauses",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "------- progress has been made in quantum computing, several foundational hardware bottlenecks remain -------.",
    "options": [
      "Since / solving",
      "Unless / resolution",
      "Because / resolved",
      "Although / unresolved",
      "In case / to resolve"
    ],
    "answer": 3,
    "explanation": "İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
    "distractorAnalysis": {
      "A": "'Since / solving' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'Unless / resolution' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'Because / resolved' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: İlerleme kaydedilmesine rağmen (Although) darboğazlar çözülememiş (unresolved) kalmaktadır.",
      "E": "'In case / to resolve' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "memoryCode": "🎵 [Karma Gramer]: Although + olumlu ilerleme -> olumsuz çözümsüzlük.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-493",
    "topicSlug": "perfect-modals",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The criminal suspect ------- the theft because reliable airport security cameras recorded him in Berlin at that exact moment.",
    "options": [
      "needn't commit",
      "cannot have committed",
      "should commit",
      "might have committed",
      "must have committed"
    ],
    "answer": 1,
    "explanation": "Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
    "distractorAnalysis": {
      "A": "'needn't commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Başka bir şehirde olduğuna dair kesin kanıt geçmiş imkansızlığı 'cannot have committed' ile ifade ettirir.",
      "C": "'should commit' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'might have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'must have committed' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Cannot / Couldn't have V3 = Yapmış olamaz.",
    "memoryCode": "🎵 [Karma Gramer]: Cannot / Couldn't have V3 = Yapmış olamaz.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-494",
    "topicSlug": "conjunctions",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The local municipality decided to construct a bypass road ------- heavy freight trucks would not congest residential streets.",
    "options": [
      "provided that",
      "unless",
      "in case",
      "so that",
      "lest"
    ],
    "answer": 3,
    "explanation": "Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
    "distractorAnalysis": {
      "A": "'provided that' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'in case' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "DOĞRU: Kamyonlar sokakları tıkamasın diye amaç bildirir; 'so that + would not' tam uyar.",
      "E": "'lest' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "So that + modal = -sın diye (Amaç).",
    "memoryCode": "🎵 [Karma Gramer]: So that + modal = -sın diye (Amaç).",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-495",
    "topicSlug": "inversion",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Rarely ------- an author capture the psychological complexities of wartime trauma with such profound sensitivity.",
    "options": [
      "has",
      "was",
      "does",
      "did",
      "is"
    ],
    "answer": 2,
    "explanation": "'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
    "distractorAnalysis": {
      "A": "'has' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Rarely' olumsuz zarfı geniş zamanda 'does + özne + V1 (capture)' biçiminde devrik kurulur.",
      "D": "'did' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Rarely + does + S + V1.",
    "memoryCode": "🎵 [Karma Gramer]: Rarely + does + S + V1.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-496",
    "topicSlug": "tenses",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "By the end of this decade, marine renewable energy technologies ------- into mainstream commercial grids across Europe.",
    "options": [
      "were integrated",
      "will have been integrated",
      "have been integrated",
      "are integrated",
      "will integrate"
    ],
    "answer": 1,
    "explanation": "'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
    "distractorAnalysis": {
      "A": "'were integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: 'By the end of this decade' (bu on yılın sonuna kadar) Future Perfect Pasif (will have been integrated) gerektirir.",
      "C": "'have been integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'are integrated' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'will integrate' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "By + Gelecek zaman + Pasif = will have been + V3.",
    "memoryCode": "🎵 [Karma Gramer]: By + Gelecek zaman + Pasif = will have been + V3.",
    "isImportant": true,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-497",
    "topicSlug": "gerunds-infinitives",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The research team succeeded in ------- the rare enzyme after ------- multiple biochemical assays in the laboratory.",
    "options": [
      "synthesized / conducted",
      "synthesize / to conduct",
      "synthesizing / conducting",
      "having synthesized / conduct",
      "to synthesize / conduct"
    ],
    "answer": 2,
    "explanation": "Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
    "distractorAnalysis": {
      "A": "'synthesized / conducted' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'synthesize / to conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: Hem 'in' hem de 'after' edattır; her ikisinden sonra gerund (-ing: synthesizing / conducting) zorunludur.",
      "D": "'having synthesized / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'to synthesize / conduct' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Preposition + V-ing kuralı.",
    "memoryCode": "🎵 [Karma Gramer]: Preposition + V-ing kuralı.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-498",
    "topicSlug": "determiners",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Neither the university chancellor nor the faculty deans ------- prepared to compromise on the revised academic standards.",
    "options": [
      "is",
      "be",
      "were",
      "was",
      "has been"
    ],
    "answer": 2,
    "explanation": "'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
    "distractorAnalysis": {
      "A": "'is' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'be' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "DOĞRU: 'Neither ... nor' yapısında fiil en yakın özneye ('faculty deans' çoğul) uyar ('were').",
      "D": "'was' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'has been' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "Neither ... nor en yakın özneye bakar!",
    "memoryCode": "🎵 [Karma Gramer]: Neither ... nor en yakın özneye bakar!",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-499",
    "topicSlug": "adverbial-clauses",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "------- the economic inflation continued to soar, the central bank decided to raise benchmark lending rates.",
    "options": [
      "Unless",
      "As",
      "Whereas",
      "Even if",
      "Although"
    ],
    "answer": 1,
    "explanation": "Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
    "distractorAnalysis": {
      "A": "'Unless' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "DOĞRU: Enflasyon yükseldikçe / yükseldiği için (As) faiz artırımı olağan paralel süreç ve sebep ilişkisidir.",
      "C": "'Whereas' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'Even if' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "'Although' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır."
    },
    "tactic": "As = -dıkça / çünkü.",
    "memoryCode": "🎵 [Karma Gramer]: As = -dıkça / çünkü.",
    "isImportant": false,
    "questionType": "yds"
  },
  {
    "id": "gq-mix-500",
    "topicSlug": "determiners",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The government launched a public campaign to ensure that ------- citizen had equal access to high-speed digital infrastructure.",
    "options": [
      "many",
      "all",
      "several",
      "both",
      "every"
    ],
    "answer": 4,
    "explanation": "Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır.",
    "distractorAnalysis": {
      "A": "'many' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "B": "'all' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "C": "'several' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "D": "'both' seçeneği zaman, bağlaç veya sözdizimi açısından hatalıdır.",
      "E": "DOĞRU: Tekil sayılabilen isim (citizen) ve tekil fiil (had) ile 'every' kullanılır."
    },
    "tactic": "Every + Tekil isim.",
    "memoryCode": "🎵 [Karma Gramer]: Every + Tekil isim.",
    "isImportant": false,
    "questionType": "yds"
  }
];

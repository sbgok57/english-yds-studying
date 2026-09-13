export interface GrammarFormula {
  label: string;
  text: string;
  color: string;
}

export interface GrammarTrap {
  trap: string;
  fix: string;
}

export interface GrammarAnimStep {
  label: string;
  detail: string;
  highlight?: string;
}

export interface GrammarTopic {
  slug: string;
  title: string;
  level: string;
  color: string;
  emoji: string;
  summary: string;
  formula: GrammarFormula[];
  rules: string[];
  coding: string[];
  traps: GrammarTrap[];
  example: {
    sentence: string;
    translation: string;
    options: { id: string; text: string }[];
    answer: string;
    reason: string;
    explanation: string;
    tactic: string;
  };
  anim: GrammarAnimStep[];
}

export const GRAMMAR_TOPICS: GrammarTopic[] = [
  {
    "slug": "tenses",
    "title": "Tenses & Zaman Uyumu",
    "level": "B1 - B2",
    "color": "from-amber-500 to-orange-600",
    "emoji": "⏳",
    "summary": "YDS'de zaman soruları 'Present-Present' ve 'Past-Past' uyumu kuralına dayanır. Cümlede 'by the time', 'since', 'until' gibi zaman zarları doğru zamanın şifresidir.",
    "formula": [
      {
        "label": "Past Harmony",
        "text": "Past + When/While + Past",
        "color": "bg-amber-500/20 text-amber-300"
      },
      {
        "label": "Since Rule",
        "text": "Present Perfect + SINCE + Simple Past",
        "color": "bg-rose-500/20 text-rose-300"
      },
      {
        "label": "By the time",
        "text": "By the time + V2, S + had V3",
        "color": "bg-blue-500/20 text-blue-300"
      }
    ],
    "rules": [
      "Zaman bağlaçlarının bulunduğu yan cümlede ASLA 'will' veya 'would' kullanılmaz.",
      "'Since' bağlacından sonra daima Simple Past (V2), ana cümlede Present Perfect (have/has V3) gelir.",
      "'By the time + V1/V_s' görürsen ana cümlede 'will have V3' ara; 'By the time + V2' görürsen 'had V3' ara.",
      "Tarihsel bir geçmiş zaman ifadesi (in 1923, ancient times, during WW2) net Simple Past (V2) gerektirir."
    ],
    "coding": [
      "SINCE kuralı: 'S' geçmişe çivi çakar (V2), ana bina göğe yükselir (have/has V3).",
      "By the time: 'Zaman gelene kadar iş çoktan bitti' -> Had V3."
    ],
    "traps": [
      {
        "trap": "When/After/Before yan cümlesine 'will' koymak en yaygın ÖSYM çeldiricisidir.",
        "fix": "Zaman bağlacı olan cümlede 'will/would' elenir, Present Simple veya Past Simple seçilir."
      }
    ],
    "example": {
      "sentence": "By the time the rescue team arrived at the isolated village, the villagers had already cleared most of the road.",
      "translation": "Kurtarma ekibi izole köye vardığında, köylüler yolun çoğunu çoktan temizlemişti.",
      "options": [
        {
          "id": "A",
          "text": "have already cleared"
        },
        {
          "id": "B",
          "text": "had already cleared"
        },
        {
          "id": "C",
          "text": "will clear"
        },
        {
          "id": "D",
          "text": "cleared"
        }
      ],
      "answer": "B",
      "reason": "'By the time + arrived (V2)' geçmişte bir referans noktasıdır. O andan önce tamamlanan eylem için Past Perfect ('had already cleared') zorunludur.",
      "tactic": "By the time + V2 kalıbını gördüğün an şıklarda doğrudan 'had V3' ara ve diğerlerini ele.",
      "explanation": "'By the time + arrived (V2)' geçmişte bir referans noktasıdır. O andan önce tamamlanan eylem için Past Perfect ('had already cleared') zorunludur."
    },
    "anim": [
      {
        "label": "1. Zaman Zarını Bul",
        "detail": "'By the time' zaman bağlacı ve 'arrived' (V2) geçmiş zaman zarfı tespit edilir.",
        "highlight": "By the time"
      },
      {
        "label": "2. Zaman Çizgisine Yerleştir",
        "detail": "Geçmişte iki olay var: önce yol temizlendi, sonra ekip vardı.",
        "highlight": "arrived"
      },
      {
        "label": "3. Had V3 Eşlemesi Yap",
        "detail": "Daha önce gerçekleşen eylem Past Perfect ('had cleared') ile ifade edilir.",
        "highlight": "had already cleared"
      }
    ]
  },
  {
    "slug": "passive-voice",
    "title": "Passive Voice & Edilgen Yapı",
    "level": "B1 - B2",
    "color": "from-purple-500 to-indigo-600",
    "emoji": "🔄",
    "summary": "Öznenin eylemi yapan değil, eylemden etkilenen olduğu durumlarda kullanılır. 'BE + V3' kalıbı passive çatının kalbidir.",
    "formula": [
      {
        "label": "Temel Passive",
        "text": "Object + BE + V3 (+ by Agent)",
        "color": "bg-purple-500/20 text-purple-300"
      },
      {
        "label": "Modal Passive",
        "text": "Modal + be + V3",
        "color": "bg-cyan-500/20 text-cyan-300"
      },
      {
        "label": "Perfect Passive",
        "text": "have/has/had + been + V3",
        "color": "bg-emerald-500/20 text-emerald-300"
      }
    ],
    "rules": [
      "Boşluktan sonra nesne (isim) yoksa ve fiil geçişli ise o fiil büyük olasılıkla Passive'dir.",
      "Cümlede 'by + yapan' veya 'widely believed that' gibi kalıplar doğrudan passive işaretidir.",
      "Nesne alamayan (geçişsiz) fiiller (die, happen, occur, consist of, exist) ASLA passive yapılamaz."
    ],
    "coding": [
      "'BE + V3' ikilisi ayrılmaz nikahlıdır; biri yoksa passive yoktur!",
      "Geçişsiz fiil kodlaması: 'Happen/Occur/Die asla edilgen olmaz, kendi kendine olur!'"
    ],
    "traps": [
      {
        "trap": "'The accident was occurred' gibi geçişsiz fiillerin passive yapılması.",
        "fix": "'Occur' geçişsizdir; 'The accident occurred' doğrusudur."
      }
    ],
    "example": {
      "sentence": "The ancient manuscripts were discovered by archaeologists during the excavation last summer.",
      "translation": "Antik el yazmaları geçen yaz yapılan kazı sırasında arkeologlar tarafından keşfedildi.",
      "options": [
        {
          "id": "A",
          "text": "discovered"
        },
        {
          "id": "B",
          "text": "were discovered"
        },
        {
          "id": "C",
          "text": "have discovered"
        },
        {
          "id": "D",
          "text": "were discovering"
        }
      ],
      "answer": "B",
      "reason": "El yazmaları keşfetmez, keşfedilir. Ayrıca 'last summer' geçmiş zaman zarfı olduğundan Simple Past Passive ('were discovered') tek doğru cevaptır.",
      "tactic": "Öznenin eylemi yapıp yapamayacağını test et. El yazması keşfedileceği için passive şıkları işaretle.",
      "explanation": "El yazmaları keşfetmez, keşfedilir. Ayrıca 'last summer' geçmiş zaman zarfı olduğundan Simple Past Passive ('were discovered') tek doğru cevaptır."
    },
    "anim": [
      {
        "label": "1. Özneyi İncele",
        "detail": "'The ancient manuscripts' insan dışı ve eylemi yapamayacak bir varlıktır.",
        "highlight": "The ancient manuscripts"
      },
      {
        "label": "2. Faili ve Zamanı Kontrol Et",
        "detail": "'by archaeologists' faili, 'last summer' ise geçmiş zamanı gösterir.",
        "highlight": "by archaeologists"
      },
      {
        "label": "3. Be + V3 Şıkkını Seç",
        "detail": "Past + Passive = 'were discovered'.",
        "highlight": "were discovered"
      }
    ]
  },
  {
    "slug": "modals",
    "title": "Modals & Çıkarım Kipleri",
    "level": "B1 - C1",
    "color": "from-sky-500 to-blue-600",
    "emoji": "🎯",
    "summary": "Zorunluluk, olasılık, tavsiye ve geçmişe yönelik çıkarımlar (Modal + have V3) YDS'nin en çok puan kazandıran alanıdır.",
    "formula": [
      {
        "label": "Geçmiş Kesin Çıkarım",
        "text": "must have V3 (yapmış olmalı)",
        "color": "bg-emerald-500/20 text-emerald-300"
      },
      {
        "label": "Geçmiş İmkânsızlık",
        "text": "can't / couldn't have V3 (yapmış olamaz)",
        "color": "bg-rose-500/20 text-rose-300"
      },
      {
        "label": "Geçmiş Pişmanlık",
        "text": "should have V3 (yapmalıydı ama yapmadı)",
        "color": "bg-amber-500/20 text-amber-300"
      }
    ],
    "rules": [
      "Şimdiki çıkarımlarda: 'must be' (%95 kesin), 'might/may/could be' (%50 ihtimal), 'can't be' (imkansız).",
      "Geçmiş çıkarımlarda mutlaka 'HAVE + V3' eki eklenir (must have done, couldn't have known).",
      "'Needn't have V3' boşuna yaptı demektir; 'didn't need to' yapmaya gerek yoktu ve yapmadı demektir."
    ],
    "coding": [
      "HAVE V3 = Zamanda geriye yolculuk bileti! Modalın yanına 'have V3' gelirse olay geçmiştedir."
    ],
    "traps": [
      {
        "trap": "'Must' fiilinin geçmiş hali 'had to'dur; çıkarım geçmiş hali ise 'must have V3'tür, ikisini karıştırma!",
        "fix": "Zorunluluk geçmişi = had to; Güçlü tahmin geçmişi = must have V3."
      }
    ],
    "example": {
      "sentence": "The streets are completely soaked this morning; it must have rained heavily during the night.",
      "translation": "Bu sabah sokaklar sırılsıklam; gece çok şiddetli yağmış olmalı.",
      "options": [
        {
          "id": "A",
          "text": "must rain"
        },
        {
          "id": "B",
          "text": "must have rained"
        },
        {
          "id": "C",
          "text": "should rain"
        },
        {
          "id": "D",
          "text": "can rain"
        }
      ],
      "answer": "B",
      "reason": "Sabah sokakların ıslak olması güçlü bir kanıttır. Geceki yağmur geçmişte kaldığı için geçmişe yönelik güçlü çıkarım 'must have rained' gerektirir.",
      "tactic": "Güçlü kanıt (soaked streets) + geçmiş zaman (during the night) = 'must have V3'.",
      "explanation": "Sabah sokakların ıslak olması güçlü bir kanıttır. Geceki yağmur geçmişte kaldığı için geçmişe yönelik güçlü çıkarım 'must have rained' gerektirir."
    },
    "anim": [
      {
        "label": "1. Mevcut İpucunu Yakala",
        "detail": "'The streets are completely soaked' net bir fiziksel kanıt sunar.",
        "highlight": "streets are completely soaked"
      },
      {
        "label": "2. Zaman Boyutunu Sına",
        "detail": "'during the night' ifadesi olayın dün gece bittiğini kanıtlar.",
        "highlight": "during the night"
      },
      {
        "label": "3. Çıkarım Formülünü Uygula",
        "detail": "Güçlü geçmiş çıkarımı: 'must have rained'.",
        "highlight": "must have rained"
      }
    ]
  },
  {
    "slug": "conditionals",
    "title": "Conditionals & If Clauses",
    "level": "B1 - C1",
    "color": "from-teal-500 to-emerald-600",
    "emoji": "🔀",
    "summary": "Gerçek, hayali ve geçmiş durumları şartlara bağlayan If yapıları, devrik koşul cümleleri (Inverted Conditionals) ile sınavda kilit rol oynar.",
    "formula": [
      {
        "label": "Type 1",
        "text": "If + Present, will / can + V1",
        "color": "bg-teal-500/20 text-teal-300"
      },
      {
        "label": "Type 2",
        "text": "If + Past (V2), would / could + V1",
        "color": "bg-blue-500/20 text-blue-300"
      },
      {
        "label": "Type 3",
        "text": "If + had V3, would have V3",
        "color": "bg-purple-500/20 text-purple-300"
      }
    ],
    "rules": [
      "If cümlesi içine ASLA 'will' veya 'would' girmez.",
      "Devrik Type 1: 'Should you need...'; Devrik Type 2: 'Were I you...'; Devrik Type 3: 'Had he known...'.",
      "Mixed Conditionals: Geçmişteki sebep (Type 3: had V3), şimdiki sonuçla (Type 2: would V1 + now/today) birleşir."
    ],
    "coding": [
      "Had V3 görürsen ana cümlede 'would have V3' bekle; eğer sonda 'now' varsa 'would V1'e geç!",
      "If'siz devrik kodlama: 'Had / Were / Should' cümlenin başına gelirse gizli If vardır!"
    ],
    "traps": [
      {
        "trap": "'If I will see him' demek. If yan cümlesine kesinlikle will gelmez.",
        "fix": "'If I see him' şeklinde geniş zaman kullanılır."
      }
    ],
    "example": {
      "sentence": "If the government had taken strict measures earlier, the epidemic would not have spread so rapidly.",
      "translation": "Hükümet önlemleri daha önce almış olsaydı, salgın bu kadar hızlı yayılmazdı.",
      "options": [
        {
          "id": "A",
          "text": "would not spread"
        },
        {
          "id": "B",
          "text": "would not have spread"
        },
        {
          "id": "C",
          "text": "will not spread"
        },
        {
          "id": "D",
          "text": "did not spread"
        }
      ],
      "answer": "B",
      "reason": "If tarafında 'had taken' (Past Perfect) var ve olay tamamen geçmiştedir (Type 3). Ana cümle 'would have V3' olmalıdır.",
      "tactic": "If + had V3 eşittir ana cümlede would have V3!",
      "explanation": "If tarafında 'had taken' (Past Perfect) var ve olay tamamen geçmiştedir (Type 3). Ana cümle 'would have V3' olmalıdır."
    },
    "anim": [
      {
        "label": "1. If Koşulunu Teşhis Et",
        "detail": "'had taken' geçmişte gerçekleşmemiş bir durumu bildirir.",
        "highlight": "had taken"
      },
      {
        "label": "2. Zaman Uyumu Testi",
        "detail": "Geçmiş koşulun geçmiş sonucu aranır (Type 3).",
        "highlight": "earlier"
      },
      {
        "label": "3. Sonuç Cümlesini Tamamla",
        "detail": "'would not have spread' doğru kalıptır.",
        "highlight": "would not have spread"
      }
    ]
  },
  {
    "slug": "relative-clauses",
    "title": "Relative Clauses & Sıfat Cümlecikleri",
    "level": "B1 - B2",
    "color": "from-pink-500 to-rose-600",
    "emoji": "🔗",
    "summary": "İsimleri niteleyen bağlaçlar: who, which, that, whose, where, when. Virgülden sonra 'that' gelmez altın kuralı YDS'nin vazgeçilmezidir.",
    "formula": [
      {
        "label": "Person / Thing",
        "text": "who (insan) / which (nesne) / that",
        "color": "bg-pink-500/20 text-pink-300"
      },
      {
        "label": "Possession",
        "text": "Noun + WHOSE + Noun",
        "color": "bg-yellow-500/20 text-yellow-300"
      },
      {
        "label": "Preposition + Relative",
        "text": "in which (=where), on which (=when), of which",
        "color": "bg-cyan-500/20 text-cyan-300"
      }
    ],
    "rules": [
      "Virgülden sonra (Non-defining) ve edattan sonra (in, on, at) ASLA 'that' kullanılmaz.",
      "'Whose' bağlacının sağında ve solunda yalın isim (artıkelsiz) bulunmak zorundadır: 'the scientist whose research...'",
      "'Where' tam bir cümle ister; eğer devamında özne veya nesne eksikse 'which' kullanılır."
    ],
    "coding": [
      "Virgül ve Edat, 'THAT'e düşmandır! Asla yan yana gelemezler.",
      "Whose formülü: [İSİM] whose [İSİM] = Aidiyet köprüsü."
    ],
    "traps": [
      {
        "trap": "Virgülden sonra 'that' işaretlemek en klasik tuzaktır.",
        "fix": "Virgül varsa 'which' veya 'who' seçilir, 'that' derhal elenir."
      }
    ],
    "example": {
      "sentence": "The laboratory, which was founded in 1995, has made groundbreaking discoveries in genetics.",
      "translation": "1995 yılında kurulan laboratuvar, genetikte çığır açan keşifler yapmıştır.",
      "options": [
        {
          "id": "A",
          "text": "that"
        },
        {
          "id": "B",
          "text": "which"
        },
        {
          "id": "C",
          "text": "where"
        },
        {
          "id": "D",
          "text": "whose"
        }
      ],
      "answer": "B",
      "reason": "Virgülden sonra 'that' gelemez. Cümle bir fiille ('was founded') başladığı için yer belirten 'where' gelemez. Cansız nesne için 'which' zorunludur.",
      "tactic": "Virgül gördün -> 'that'i ele. Fiille başlıyor -> 'where'i ele. Cevap 'which'!",
      "explanation": "Virgülden sonra 'that' gelemez. Cümle bir fiille ('was founded') başladığı için yer belirten 'where' gelemez. Cansız nesne için 'which' zorunludur."
    },
    "anim": [
      {
        "label": "1. Virgülü Gör",
        "detail": "Özneden hemen sonra virgül gelmiş (Non-defining relative clause).",
        "highlight": "The laboratory,"
      },
      {
        "label": "2. Şıklardan That'i Ele",
        "detail": "Virgülden sonra 'that' gelmesi gramer kuralı gereği imkânsızdır.",
        "highlight": "which"
      },
      {
        "label": "3. Fiil ile Başlayan Yapıyı Tanı",
        "detail": "'was founded' bir fiildir, özne konumunda 'which' kullanılır.",
        "highlight": "was founded"
      }
    ]
  },
  {
    "slug": "noun-clauses",
    "title": "Noun Clauses & İsim Cümlecikleri",
    "level": "B2 - C1",
    "color": "from-violet-500 to-purple-700",
    "emoji": "📦",
    "summary": "Cümlede özne veya nesne görevini üstlenen yapılar: that, whether or not, what, how, why.",
    "formula": [
      {
        "label": "Fact",
        "text": "THAT + tam cümle (bir olgu bildirir)",
        "color": "bg-violet-500/20 text-violet-300"
      },
      {
        "label": "Doubt / Choice",
        "text": "WHETHER ... (OR NOT) (olup olmadığı)",
        "color": "bg-amber-500/20 text-amber-300"
      },
      {
        "label": "Missing Element",
        "text": "WHAT + eksik cümle (= the thing that)",
        "color": "bg-cyan-500/20 text-cyan-300"
      }
    ],
    "rules": [
      "'That' tam bir cümle alır ve cümleden hiçbir öğe eksik olamaz.",
      "'What' ise nesnesi veya öznesi eksik olan cümlecik ister: 'I know what you did'.",
      "Edatlardan sonra (about, in, of) 'that' gelmez, 'whether' veya 'what' gelir."
    ],
    "coding": [
      "THAT tam sever, WHAT eksik sever! Cümle tamsa 'that', bir şeyler eksikse 'what'!",
      "Edat + whether: 'He is uncertain about whether to invest.'"
    ],
    "traps": [
      {
        "trap": "Tam cümlenin başına 'what' koymak.",
        "fix": "Cümle özne+fiil+nesne tam ise 'that' seçilmelidir."
      }
    ],
    "example": {
      "sentence": "Scientists are debating whether the newly discovered planet can sustain human life or not.",
      "translation": "Bilim insanları yeni keşfedilen gezegenin insan yaşamını destekleyip destekleyemeyeceğini tartışıyorlar.",
      "options": [
        {
          "id": "A",
          "text": "that"
        },
        {
          "id": "B",
          "text": "whether"
        },
        {
          "id": "C",
          "text": "what"
        },
        {
          "id": "D",
          "text": "which"
        }
      ],
      "answer": "B",
      "reason": "Cümlenin devamında 'or not' bulunmaktadır ve bir belirsizlik/tartışma vardır. Bu yapıyı kuran tek bağlaç 'whether'dır.",
      "tactic": "Cümlenin sonunda veya başında 'or not' gördüğün an 'whether' şıkkına yönel.",
      "explanation": "Cümlenin devamında 'or not' bulunmaktadır ve bir belirsizlik/tartışma vardır. Bu yapıyı kuran tek bağlaç 'whether'dır."
    },
    "anim": [
      {
        "label": "1. Yüklemin Anlamını Çöz",
        "detail": "'are debating' bir belirsizlik ve ikilem işaret eder.",
        "highlight": "debating"
      },
      {
        "label": "2. Cümle Sonundaki 'or not'ı Gör",
        "detail": "'whether ... or not' ayrılmaz bir kalıptır.",
        "highlight": "or not"
      },
      {
        "label": "3. Whether Bağlacını Onayla",
        "detail": "Doğru şık: 'whether'.",
        "highlight": "whether"
      }
    ]
  },
  {
    "slug": "gerunds-infinitives",
    "title": "Gerunds & Infinitives (-ing vs to-)",
    "level": "B1 - B2",
    "color": "from-orange-500 to-amber-600",
    "emoji": "🤹",
    "summary": "Hangi fiilden sonra '-ing' (Gerund), hangisinden sonra 'to V1' (Infinitive) gelir? Edatlardan sonra mutlaka Gerund gelir!",
    "formula": [
      {
        "label": "Preposition + V-ing",
        "text": "in / on / at / about + V-ing",
        "color": "bg-orange-500/20 text-orange-300"
      },
      {
        "label": "Common Gerund Verbs",
        "text": "avoid, suggest, admit, deny + V-ing",
        "color": "bg-pink-500/20 text-pink-300"
      },
      {
        "label": "Common Infinitive",
        "text": "decide, hope, refuse, manage + to V1",
        "color": "bg-emerald-500/20 text-emerald-300"
      }
    ],
    "rules": [
      "İstisnasız tüm edatlardan (preposition) sonra fiil gelirse sonuna '-ing' alır.",
      "'Look forward to', 'be accustomed to', 'object to' kalıplarındaki 'to' bir edattır, dolayısıyla arkasından V-ing gelir.",
      "Amaç bildiren 'in order to', 'so as to' arkasından yalın fiil (V1) alır."
    ],
    "coding": [
      "Edat gör V-ing yapıştır! Preposition + ING kuralı asla şaşmaz.",
      "Tuzak 'to': 'look forward to SEEING you' (buradaki to edattır!)."
    ],
    "traps": [
      {
        "trap": "'Look forward to meet you' demek.",
        "fix": "'Look forward to meeting you' doğrusudur."
      }
    ],
    "example": {
      "sentence": "The committee decided to postpone the annual conference due to unforeseen logistical issues.",
      "translation": "Komite, öngörülemeyen lojistik sorunlar nedeniyle yıllık konferansı ertelemeye karar verdi.",
      "options": [
        {
          "id": "A",
          "text": "postponing"
        },
        {
          "id": "B",
          "text": "to postpone"
        },
        {
          "id": "C",
          "text": "postpone"
        },
        {
          "id": "D",
          "text": "postponed"
        }
      ],
      "answer": "B",
      "reason": "'Decide' fiili kendisinden sonra daima bir Infinitive ('to V1') talep eder.",
      "tactic": "Decide, plan, hope, promise fiilleri daima 'to + V1' ile bağlanır.",
      "explanation": "'Decide' fiili kendisinden sonra daima bir Infinitive ('to V1') talep eder."
    },
    "anim": [
      {
        "label": "1. Ana Fiili Belirle",
        "detail": "'decided' fiili bir gelecek niyeti ve karar bildirir.",
        "highlight": "decided"
      },
      {
        "label": "2. Fiilin Alacağı Yapıyı Eşle",
        "detail": "Decide + to + infinitive kuralı uygulanır.",
        "highlight": "to postpone"
      },
      {
        "label": "3. Doğru Şıkkı İşaretle",
        "detail": "'to postpone' doğru tercihtir.",
        "highlight": "to postpone"
      }
    ]
  },
  {
    "slug": "participles",
    "title": "Participles & Cümle Kısaltmaları (Reductions)",
    "level": "B2 - C1",
    "color": "from-cyan-500 to-blue-600",
    "emoji": "✂️",
    "summary": "Relative ve zarf cümlelerinin V-ing (etken) veya V3 (edilgen) ile kısaltılması. Boşlukla başlayan cümlelerde ortak özne kuralı!",
    "formula": [
      {
        "label": "Active Reduction",
        "text": "V-ing ... , Subject + Verb (etken)",
        "color": "bg-cyan-500/20 text-cyan-300"
      },
      {
        "label": "Passive Reduction",
        "text": "V3 (Having been V3) ... , Subject + Verb",
        "color": "bg-purple-500/20 text-purple-300"
      },
      {
        "label": "Prior Action",
        "text": "Having V3 ... , Subject + Verb (öncelik)",
        "color": "bg-emerald-500/20 text-emerald-300"
      }
    ],
    "rules": [
      "Virgüle kadar olan kısaltmanın öznesi, virgülden sonraki ana cümlenin öznesi ile AYNI olmak zorundadır.",
      "Kısaltılan eylem ana eylemden daha önce olmuşsa 'HAVING V3' (active) veya 'HAVING BEEN V3' (passive) kullanılır.",
      "Kısaltma nesne almışsa active (V-ing), almamışsa passive (V3) aranır."
    ],
    "coding": [
      "Kısaltmanın can simidi: 'Virgülden sonraki ilk kelimeye bak, eylemi o mu yapıyor, ona mı yapılıyor?'"
    ],
    "traps": [
      {
        "trap": "Öznesi uyuşmayan 'Dangling Participle' şıklarına kanmak.",
        "fix": "Virgülden sonraki özne ile kısaltmayı yapan varlığı mutlaka eşleştir."
      }
    ],
    "example": {
      "sentence": "Having completed the comprehensive study, the researchers submitted their findings to an international journal.",
      "translation": "Kapsamlı çalışmayı tamamladıktan sonra araştırmacılar bulgularını uluslararası bir dergiye sundular.",
      "options": [
        {
          "id": "A",
          "text": "Completing"
        },
        {
          "id": "B",
          "text": "Having completed"
        },
        {
          "id": "C",
          "text": "Completed"
        },
        {
          "id": "D",
          "text": "To complete"
        }
      ],
      "answer": "B",
      "reason": "Çalışmayı tamamlama işi dergiye sunmadan önce bitmiştir (öncelik ilişkisi). Bu yüzden 'Having V3' active öncelik kısaltması doğru cevaptır.",
      "tactic": "İki geçmiş eylem arasında açık bir öncelik-sonralık sırası varsa 'Having V3' şıkkına öncelik ver.",
      "explanation": "Çalışmayı tamamlama işi dergiye sunmadan önce bitmiştir (öncelik ilişkisi). Bu yüzden 'Having V3' active öncelik kısaltması doğru cevaptır."
    },
    "anim": [
      {
        "label": "1. Virgülden Sonraki Özneyi Bul",
        "detail": "'the researchers' eylemi yapan aktif öznedir.",
        "highlight": "the researchers"
      },
      {
        "label": "2. Zaman Önceliğini İncele",
        "detail": "Önce araştırma bitti, sonra dergiye yollandı.",
        "highlight": "submitted"
      },
      {
        "label": "3. Having V3 Yapısını Seç",
        "detail": "Öncelikli etken kısaltma: 'Having completed'.",
        "highlight": "Having completed"
      }
    ]
  },
  {
    "slug": "causatives",
    "title": "Causatives & Ettirgen Çatılar",
    "level": "B1 - B2",
    "color": "from-emerald-500 to-green-600",
    "emoji": "🛠️",
    "summary": "Bir işi başkasına yaptırmak: have someone do, get someone to do, have something done.",
    "formula": [
      {
        "label": "Have / Make Active",
        "text": "have / make + someone + V1 (yalın)",
        "color": "bg-emerald-500/20 text-emerald-300"
      },
      {
        "label": "Get Active",
        "text": "get + someone + TO + V1",
        "color": "bg-teal-500/20 text-teal-300"
      },
      {
        "label": "Passive Causative",
        "text": "have / get + SOMETHING + V3",
        "color": "bg-purple-500/20 text-purple-300"
      }
    ],
    "rules": [
      "'Have/Make someone' arkasından yalın fiil (V1) ister, 'to' almaz.",
      "'Get someone' ise 'to + V1' ister: 'I got him to fix the car'.",
      "Aradaki nesne cansız ise 'Have/Get something DONE (V3)' kuralı çalışır."
    ],
    "coding": [
      "GET 'to' sever, HAVE yalın gezer!",
      "Cansız nesne girerse araya, fiil bürünür V3 zırhına!"
    ],
    "traps": [
      {
        "trap": "'I had my brother to clean my room' demek.",
        "fix": "'Have' ettirgeninde kişi varsa yalın fiil gelir: 'I had my brother clean'."
      }
    ],
    "example": {
      "sentence": "The manager had the technical team prepare a detailed breakdown of the server downtime.",
      "translation": "Müdür, teknik ekibe sunucu kesintisinin ayrıntılı bir dökümünü hazırlattı.",
      "options": [
        {
          "id": "A",
          "text": "to prepare"
        },
        {
          "id": "B",
          "text": "prepare"
        },
        {
          "id": "C",
          "text": "prepared"
        },
        {
          "id": "D",
          "text": "preparing"
        }
      ],
      "answer": "B",
      "reason": "'Had + person (the technical team)' yapısında fiil yalın halde (V1) kullanılır.",
      "tactic": "Have + insan = V1 yalın fiil!",
      "explanation": "'Had + person (the technical team)' yapısında fiil yalın halde (V1) kullanılır."
    },
    "anim": [
      {
        "label": "1. Ettirgen Fiili Gör",
        "detail": "'The manager had' yapısı bir başkasına iş yaptırıldığını gösterir.",
        "highlight": "had"
      },
      {
        "label": "2. Nesneyi Analiz Et",
        "detail": "'the technical team' canlı bir aktördür.",
        "highlight": "the technical team"
      },
      {
        "label": "3. Yalın Fiili Seç",
        "detail": "Have + canlı = 'prepare' (V1).",
        "highlight": "prepare"
      }
    ]
  },
  {
    "slug": "conjunctions",
    "title": "Conjunctions & Bağlaçlar",
    "level": "B1 - C1",
    "color": "from-red-500 to-rose-600",
    "emoji": "🌉",
    "summary": "Zıtlık (Although, However), Sebep (Because, Due to), Koşul ve Paralellik bildiren YDS'nin 1 numaralı soru kaynağı.",
    "formula": [
      {
        "label": "Zıtlık + Cümle",
        "text": "Although / Even though / While + S + V",
        "color": "bg-rose-500/20 text-rose-300"
      },
      {
        "label": "Zıtlık + İsim/Öbek",
        "text": "Despite / In spite of + Noun / V-ing",
        "color": "bg-amber-500/20 text-amber-300"
      },
      {
        "label": "Geçiş Zarfı",
        "text": "; however, / ; therefore, / ; nevertheless,",
        "color": "bg-blue-500/20 text-blue-300"
      }
    ],
    "rules": [
      "Boşluktan sonra tam cümle mi (S+V) yoksa sadece isim/öbek mi var? Bu kontrol şıkların %50'sini eler!",
      "'Although' tam cümle alır; 'Despite' isim öbeği alır.",
      "'Due to / Owing to / Because of' isim alır; 'Because / As / Since' cümle alır."
    ],
    "coding": [
      "+ / - analizi yap! Cümlenin ilk tarafı olumlu, ikinci tarafı olumsuzsa ZITLIK bağlacı tek çaredir."
    ],
    "traps": [
      {
        "trap": "'Despite of' demek. Despite edat almaz, 'In spite of' ise 'of' ile yazılır.",
        "fix": "Despite + Noun veya In spite of + Noun."
      }
    ],
    "example": {
      "sentence": "Despite severe economic sanctions, the country managed to maintain its technological investments.",
      "translation": "Ağır ekonomik yaptırımlara rağmen ülke teknolojik yatırımlarını sürdürmeyi başardı.",
      "options": [
        {
          "id": "A",
          "text": "Although"
        },
        {
          "id": "B",
          "text": "Despite"
        },
        {
          "id": "C",
          "text": "Because"
        },
        {
          "id": "D",
          "text": "Unless"
        }
      ],
      "answer": "B",
      "reason": "'severe economic sanctions' bir isim öbeğidir (fiil içermez). İsim öbeği ile kullanılan zıtlık bağlacı 'Despite'dır.",
      "tactic": "Boşluktan sonra fiil yoksa 'Although' elenir, 'Despite' seçilir!",
      "explanation": "'severe economic sanctions' bir isim öbeğidir (fiil içermez). İsim öbeği ile kullanılan zıtlık bağlacı 'Despite'dır."
    },
    "anim": [
      {
        "label": "1. Boşluktan Sonrasını Sına",
        "detail": "'severe economic sanctions' yapısında çekimli bir fiil yoktur, isim tamlamasıdır.",
        "highlight": "severe economic sanctions"
      },
      {
        "label": "2. Anlam İlişkisini Kur",
        "detail": "Yaptırım kötü (-), yatırım sürdürmek iyi (+). Zıtlık var.",
        "highlight": "managed to maintain"
      },
      {
        "label": "3. İsim Alan Zıtlık Bağlacı",
        "detail": "Doğru seçenek: 'Despite'.",
        "highlight": "Despite"
      }
    ]
  },
  {
    "slug": "prepositions",
    "title": "Prepositions & Edat Öbekleri",
    "level": "B1 - B2",
    "color": "from-yellow-500 to-amber-600",
    "emoji": "📍",
    "summary": "Fiil + Edat, Sıfat + Edat ve İsim + Edat kalıpları (depend on, participate in, responsible for).",
    "formula": [
      {
        "label": "Verb + Prep",
        "text": "rely on, contribute to, result in, cope with",
        "color": "bg-yellow-500/20 text-yellow-300"
      },
      {
        "label": "Adj + Prep",
        "text": "capable of, prone to, susceptible to",
        "color": "bg-cyan-500/20 text-cyan-300"
      },
      {
        "label": "Noun + Prep",
        "text": "impact on, increase in, demand for",
        "color": "bg-purple-500/20 text-purple-300"
      }
    ],
    "rules": [
      "Edat soruları ezbere değil, kalıplaşmış collocation (eşdizimlilik) bilgisine dayanır.",
      "'Result in' = yol açmak (sonuç); 'Result from' = -den kaynaklanmak (sebep).",
      "Artış ve azalış bildiren kelimeler (increase, decrease, rise, drop) miktar için 'by', alan için 'in' alır."
    ],
    "coding": [
      "Result IN -> İçine sokar (sonuç doğurur). Result FROM -> Oradan çıkar (kaynaklanır)!"
    ],
    "traps": [
      {
        "trap": "'Discuss about' veya 'emphasize on' demek. Bu fiiller doğrudan nesne alır, edat almaz.",
        "fix": "Discuss the topic, emphasize the importance."
      }
    ],
    "example": {
      "sentence": "Lack of adequate sleep can contribute to significant cognitive decline in elderly individuals.",
      "translation": "Yetersiz uyku, yaşlı bireylerde önemli bilişsel gerilemeye katkıda bulunabilir / yol açabilir.",
      "options": [
        {
          "id": "A",
          "text": "in"
        },
        {
          "id": "B",
          "text": "to"
        },
        {
          "id": "C",
          "text": "with"
        },
        {
          "id": "D",
          "text": "for"
        }
      ],
      "answer": "B",
      "reason": "'Contribute' fiili istisnasız 'to' edatıyla birlikte kullanılır (contribute to something).",
      "tactic": "Contribute fiilini görür görmez şıklarda 'to' ara.",
      "explanation": "'Contribute' fiili istisnasız 'to' edatıyla birlikte kullanılır (contribute to something)."
    },
    "anim": [
      {
        "label": "1. Fiili Yakala",
        "detail": "'contribute' fiilinin kalıplaşmış edatı aranıyor.",
        "highlight": "contribute"
      },
      {
        "label": "2. Eşdizimi Hatırla",
        "detail": "Contribute daima 'to' edatı ile bir hedefe yönelir.",
        "highlight": "to significant cognitive decline"
      },
      {
        "label": "3. Şıkkı Tamamla",
        "detail": "'to' doğru cevaptır.",
        "highlight": "to"
      }
    ]
  },
  {
    "slug": "phrasal-verbs",
    "title": "Phrasal Verbs (Öbek Fiiller)",
    "level": "B2 - C1",
    "color": "from-lime-500 to-green-600",
    "emoji": "⚡",
    "summary": "YDS ilk 6 sorusunun banko 1 sorusu phrasal verb'dür: call off, put off, bring about, carry out.",
    "formula": [
      {
        "label": "Aptalca Erteleme",
        "text": "put off = postpone / delay",
        "color": "bg-lime-500/20 text-lime-300"
      },
      {
        "label": "İptal Etmek",
        "text": "call off = cancel",
        "color": "bg-rose-500/20 text-rose-300"
      },
      {
        "label": "Yürütmek / Yapmak",
        "text": "carry out = conduct / perform / execute",
        "color": "bg-blue-500/20 text-blue-300"
      }
    ],
    "rules": [
      "Nesnesine bak: 'carry out' arkasından araştırma (research, experiment, study) alır.",
      "'Bring about' daima bir değişim veya sonuç (change, disaster, revolution) doğurur.",
      "'Give up' bırakmak/vazgeçmek, 'Give in' teslim olmak/boyun eğmektir."
    ],
    "coding": [
      "Carry OUT: Çantayı aldın, laboratuvarda deneyi YÜRÜTTÜN!",
      "Bring ABOUT: Etrafta (about) yeni bir şey DOĞURDU!"
    ],
    "traps": [
      {
        "trap": "'Put off' (ertelemek) ile 'call off' (iptal etmek) anlamlarını karıştırmak.",
        "fix": "Put off = postpone; Call off = cancel."
      }
    ],
    "example": {
      "sentence": "Medical researchers are going to carry out a series of clinical trials to evaluate the new vaccine.",
      "translation": "Tıp araştırmacıları yeni aşıyı değerlendirmek için bir dizi klinik deney yürütecekler.",
      "options": [
        {
          "id": "A",
          "text": "call off"
        },
        {
          "id": "B",
          "text": "carry out"
        },
        {
          "id": "C",
          "text": "put out"
        },
        {
          "id": "D",
          "text": "turn down"
        }
      ],
      "answer": "B",
      "reason": "'clinical trials' (klinik deneyler) ile birlikte deney yürütmek anlamında 'carry out' kullanılır.",
      "tactic": "Research, study, experiment, survey, trial kelimelerinin yanında 'carry out' veya 'conduct' gelir.",
      "explanation": "'clinical trials' (klinik deneyler) ile birlikte deney yürütmek anlamında 'carry out' kullanılır."
    },
    "anim": [
      {
        "label": "1. Nesneye Odaklan",
        "detail": "'a series of clinical trials' bir bilimsel araştırma faaliyetidir.",
        "highlight": "a series of clinical trials"
      },
      {
        "label": "2. Eşdizimsel Fiili Hatırla",
        "detail": "Deney ve test 'yürütülür' (carry out).",
        "highlight": "carry out"
      },
      {
        "label": "3. Doğru Şıkkı Seç",
        "detail": "'carry out' tam uyum sağlar.",
        "highlight": "carry out"
      }
    ]
  },
  {
    "slug": "determiners",
    "title": "Determiners & Miktar Belirteçleri",
    "level": "B1 - B2",
    "color": "from-teal-600 to-cyan-700",
    "emoji": "⚖️",
    "summary": "Sayılabilen ve sayılamayan isimlerle miktar uyumu: few vs little, many vs much, each, every, neither, either.",
    "formula": [
      {
        "label": "Sayılamayan",
        "text": "little / much / an amount of (+ singular noun)",
        "color": "bg-teal-500/20 text-teal-300"
      },
      {
        "label": "Çoğul Sayılabilen",
        "text": "few / many / a number of (+ plural noun)",
        "color": "bg-amber-500/20 text-amber-300"
      },
      {
        "label": "Olumsuzluk Anlamı",
        "text": "'few' ve 'little' a'sız gelirse 'neredeyse hiç' demektir",
        "color": "bg-rose-500/20 text-rose-300"
      }
    ],
    "rules": [
      "'A few' olumlu (birkaç tane var yeterli), 'few' olumsuzdur (neredeyse hiç yok).",
      "'Neither of' ve 'Either of' tekil fiille çekimlenir.",
      "'Each' ve 'Every' tekil sayılabilen isim ister: 'every student'."
    ],
    "coding": [
      "'A' harfi can verir! 'A few / A little' = var, olumlu. 'Few / Little' = yok, olumsuz!"
    ],
    "traps": [
      {
        "trap": "'Information' veya 'advice' gibi sayılamayan isimlerin önüne 'many' koymak.",
        "fix": "Sayılamayan isimlerde 'much' veya 'a lot of' kullanılır."
      }
    ],
    "example": {
      "sentence": "Unfortunately, very few students passed the rigorous exam because of its unprecedented difficulty.",
      "translation": "Ne yazık ki, benzeri görülmemiş zorluğu nedeniyle çok az öğrenci zorlu sınavı geçti.",
      "options": [
        {
          "id": "A",
          "text": "little"
        },
        {
          "id": "B",
          "text": "few"
        },
        {
          "id": "C",
          "text": "much"
        },
        {
          "id": "D",
          "text": "every"
        }
      ],
      "answer": "B",
      "reason": "'students' sayılabilen çoğul bir isimdir (little ve much elenir). 'Unfortunately' (ne yazık ki) olumsuzluk kattığı için 'few' doğru cevaptır.",
      "tactic": "İsim çoğulsa 'little'ı hemen ele. Olumsuz bir bağlam varsa 'few' seç.",
      "explanation": "'students' sayılabilen çoğul bir isimdir (little ve much elenir). 'Unfortunately' (ne yazık ki) olumsuzluk kattığı için 'few' doğru cevaptır."
    },
    "anim": [
      {
        "label": "1. İsmin Tipini Kontrol Et",
        "detail": "'students' sayılabilen ve çoğul eki (-s) almış bir isimdir.",
        "highlight": "students"
      },
      {
        "label": "2. Cümlenin Tonunu Hisset",
        "detail": "'Unfortunately' olumsuz bir neticeye işaret eder.",
        "highlight": "Unfortunately,"
      },
      {
        "label": "3. Çoğul ve Olumsuz Belirteç",
        "detail": "Doğru cevap 'few'.",
        "highlight": "few"
      }
    ]
  },
  {
    "slug": "comparatives",
    "title": "Comparatives & Superlatives",
    "level": "A2 - B1",
    "color": "from-indigo-500 to-blue-700",
    "emoji": "📈",
    "summary": "Kıyaslama ve üstünlük yapıları: 'the more ... the more', 'as ... as', 'so ... that', 'such ... that'.",
    "formula": [
      {
        "label": "Ne kadar ... O kadar",
        "text": "The + comparative ... , the + comparative ...",
        "color": "bg-indigo-500/20 text-indigo-300"
      },
      {
        "label": "Eşitlik Kıyası",
        "text": "as + ADJ / ADV + as (kadar)",
        "color": "bg-emerald-500/20 text-emerald-300"
      },
      {
        "label": "Kuvvetlendiriciler",
        "text": "much / far / significantly + MORE / -ER",
        "color": "bg-amber-500/20 text-amber-300"
      }
    ],
    "rules": [
      "Comparative önünde 'very' kullanılmaz! 'Much more' veya 'far better' denir.",
      "'The more you practice, the higher your score will be' kalıbı YDS'de sıkça sorulur.",
      "'As ... as' arasına sıfat veya zarf YALIN girer (as fast as, asla as faster as değil)."
    ],
    "coding": [
      "THE ... THE ikilisi kardeş gibidir: 'The more ... the better!'",
      "Very değil MUCH! 'Very bigger' yasaktır, 'Much bigger' haktır!"
    ],
    "traps": [
      {
        "trap": "'More better' demek. Çift kıyaslama yapılmaz.",
        "fix": "Ya 'better' ya da 'much better'."
      }
    ],
    "example": {
      "sentence": "The more consistently you review YDS vocabulary, the more confident you will feel during the actual exam.",
      "translation": "YDS kelimelerini ne kadar düzenli tekrar ederseniz, gerçek sınav sırasında kendinizi o kadar güvende hissedersiniz.",
      "options": [
        {
          "id": "A",
          "text": "The more"
        },
        {
          "id": "B",
          "text": "The most"
        },
        {
          "id": "C",
          "text": "As much"
        },
        {
          "id": "D",
          "text": "More than"
        }
      ],
      "answer": "A",
      "reason": "İkinci cümlecikte 'the more confident' kalıbı vardır. Paralel 'The + comparative ... , the + comparative' yapısı gereği 'The more' doğru cevaptır.",
      "tactic": "Virgülden sonra 'the + comparative' gördüğün an başa da 'the + comparative' koy.",
      "explanation": "İkinci cümlecikte 'the more confident' kalıbı vardır. Paralel 'The + comparative ... , the + comparative' yapısı gereği 'The more' doğru cevaptır."
    },
    "anim": [
      {
        "label": "1. İkinci Cümleciği Tara",
        "detail": "'the more confident' yapısı dikkat çeker.",
        "highlight": "the more confident"
      },
      {
        "label": "2. Paralel Yapıyı Kur",
        "detail": "'The comparative ... the comparative' dengesi aranır.",
        "highlight": "The more consistently"
      },
      {
        "label": "3. Doğru Şıkkı Belirle",
        "detail": "Doğru şık: 'The more'.",
        "highlight": "The more"
      }
    ]
  },
  {
    "slug": "inversion",
    "title": "Inversion & Devrik Cümleler",
    "level": "C1",
    "color": "from-fuchsia-600 to-purple-800",
    "emoji": "🙃",
    "summary": "Olumsuzluk veya kısıtlama zarfı başa gelirse cümle soru cümlesi gibi devrilir: Not only ... but also, Scarcely ... when, Never have I seen.",
    "formula": [
      {
        "label": "Not Only Devriği",
        "text": "Not only + DID / HAD + S + V ... but also",
        "color": "bg-fuchsia-500/20 text-fuchsia-300"
      },
      {
        "label": "Hardly ... When",
        "text": "Hardly / Scarcely + had S V3 + WHEN + S V2",
        "color": "bg-purple-500/20 text-purple-300"
      },
      {
        "label": "No Sooner ... Than",
        "text": "No sooner + had S V3 + THAN + S V2",
        "color": "bg-pink-500/20 text-pink-300"
      }
    ],
    "rules": [
      "Cümle başında 'Never, Seldom, Rarely, Scarcely, Hardly, Little, Not only' varsa arkasından YARDIMCI FİİL gelir.",
      "'Hardly' ve 'Scarcely' bağlaç olarak 'WHEN' ile eşleşir.",
      "'No sooner' bağlacı ise 'THAN' ile eşleşir."
    ],
    "coding": [
      "NO SOONER ... THAN (İkisi de 'N' ile biter/ilişkilidir!).",
      "HARDLY ... WHEN (Hardly 'W' sesine aşık!).",
      "Devrik = Soru kalıbı: Başa yardımcı fiili al!"
    ],
    "traps": [
      {
        "trap": "'Hardly had he arrived than...' demek. Hardly 'than' değil 'when' alır.",
        "fix": "Hardly ... when / No sooner ... than."
      }
    ],
    "example": {
      "sentence": "Not only did the new policy reduce carbon emissions significantly, but it also stimulated renewable energy investments.",
      "translation": "Yeni politika sadece karbon emisyonlarını önemli ölçüde azaltmakla kalmadı, aynı zamanda yenilenebilir enerji yatırımlarını da teşvik etti.",
      "options": [
        {
          "id": "A",
          "text": "the new policy reduced"
        },
        {
          "id": "B",
          "text": "did the new policy reduce"
        },
        {
          "id": "C",
          "text": "the new policy had reduced"
        },
        {
          "id": "D",
          "text": "reduced the new policy"
        }
      ],
      "answer": "B",
      "reason": "Cümle 'Not only' ile başladığı için devrik yapı zorunludur. Simple Past zamanda devrik yapı yardımcı fiil 'did' başa alınarak kurulur.",
      "tactic": "Not only cümlenin başındaysa 'did + S + V1' ara!",
      "explanation": "Cümle 'Not only' ile başladığı için devrik yapı zorunludur. Simple Past zamanda devrik yapı yardımcı fiil 'did' başa alınarak kurulur."
    },
    "anim": [
      {
        "label": "1. Cümlenin Girişine Bak",
        "detail": "'Not only' cümlenin en başında yer almaktadır.",
        "highlight": "Not only"
      },
      {
        "label": "2. Devrik Kuralını Çağır",
        "detail": "Cümle soru formu gibi yardımcı fiil ile devam etmelidir.",
        "highlight": "did the new policy reduce"
      },
      {
        "label": "3. Doğru Seçimi Yap",
        "detail": "'did the new policy reduce' kurala tam uyar.",
        "highlight": "did the new policy reduce"
      }
    ]
  }
];

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
    "summary": "YDS'de zaman soruları 'Present-Present' ve 'Past-Past' uyumu temelinde çözülür. Simple Future (will), Be Going To ve Future Continuous arasındaki anlamsal ayrımlar ve 'by the time', 'since', 'until' gibi zaman bağlaçları doğru zamanın şifresidir.",
    "formula": [
      {
        "label": "Simple Future",
        "text": "will + V1 (Anlık karar, söz, teklif, kanıtsız tahmin)",
        "color": "bg-amber-500/20 text-amber-300"
      },
      {
        "label": "Be Going To",
        "text": "am/is/are + going to + V1 (Önceden niyet veya somut kanıt)",
        "color": "bg-emerald-500/20 text-emerald-300"
      },
      {
        "label": "Future Continuous",
        "text": "will be + Ving (Gelecekte o anda süreçte olacak eylem)",
        "color": "bg-cyan-500/20 text-cyan-300"
      },
      {
        "label": "Past Harmony",
        "text": "Past + When/While + Past",
        "color": "bg-indigo-500/20 text-indigo-300"
      },
      {
        "label": "Since Rule",
        "text": "Present Perfect + SINCE + Simple Past",
        "color": "bg-rose-500/20 text-rose-300"
      },
      {
        "label": "By the time",
        "text": "By the time + V2 -> had V3 | By the time + V1 -> will have V3",
        "color": "bg-blue-500/20 text-blue-300"
      }
    ],
    "rules": [
      "Simple Future (will + V1): Konuşma anında verilen anlık kararlar ('The phone is ringing, I'll answer it'), söz verme, teklif, gönüllülük ve mevcut kanıta dayanmayan tahminlerde ('I think it will snow') kullanılır; her gelecek planı için zorunlu değildir.",
      "Be Going To: Konuşma anından önce kararlaştırılmış niyetlerde ('She is going to study medicine') ve mevcut gözle görülür kanıta dayanan tahminlerde ('Look at those dark clouds! It is going to rain') kullanılır. Randevulu, kesin planlarda Present Continuous tercih edilir.",
      "Future Continuous (will be + Ving): Gelecekte belirli bir anda devam ediyor olacak eylemleri ('This time tomorrow, I will be flying over the Alps'), kibarca plan sormayı ('Will you be using the car tonight?') ve olayların doğal akışını anlatır. 'at + saat' ifadesi tek başına bu zamanı zorunlu kılmaz.",
      "Shall Kullanımı: 1. tekil/çoğul (I, We) öznelerle resmî teklif/öneri ('Shall we begin?') ve hukuki/resmî antlaşma yükümlülüklerinde ('The tenant shall pay the rent on time') kullanılır.",
      "Zaman ve koşul yan cümlelerinde (when, before, after, as soon as, if, unless) geleceğe gönderme yapılırken 'will' yerine Simple Present (V1) kullanılır ('When he arrives, we will start').",
      "Since kuralı: 'Since' bağlacından sonra daima Simple Past (V2), ana cümlede Present Perfect (have/has + V3) gelir.",
      "By the time kuralı: 'By the time + V2' gelirse ana cümlede 'had V3'; 'By the time + V1' gelirse 'will have V3' aranır."
    ],
    "coding": [
      "Gözle kanıt = going to | Anlık karar & söz = will | Gelecekte süreç = will be + Ving",
      "Zaman zarfı yan cümlesinde ASLA will olmaz: When + V1, will + V1.",
      "SINCE kuralı: 'S' geçmişe çivi çakar (V2), ana bina göğe yükselir (have/has V3).",
      "By the time + V2 -> had V3 (O ana kadar iş çoktan bitti)."
    ],
    "traps": [
      {
        "trap": "'at 5 PM' ifadesini görünce her zaman Future Continuous zorunlu sanmak.",
        "fix": "Saat ifadesi tek başına süreci zorunlu kılmaz; anlık başlangıçlarda Simple Future ('The lecture will start at 5 PM'), o anda sürecek eylemlerde Future Continuous ('At 5 PM, I will be working') kullanılır."
      },
      {
        "trap": "Planlı her geleceğe yalnızca 'going to' demek.",
        "fix": "Tarihi, yeri ve kişileri netleşmiş kesin randevulu planlarda Present Continuous ('I am flying to Paris tomorrow morning') tercih edilir."
      },
      {
        "trap": "When/After/Before/If yan cümlesine 'will' koymak.",
        "fix": "Zaman ve koşul yan cümlelerinde gelecek anlamı için Simple Present (V1) kullanılır."
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
    "summary": "Modallar ve Perfect Modals (Modal + have + V3), YDS'de geçmişe dönük çıkarım, olasılık, eleştiri ve pişmanlık ifade eder. 'must have V3' ile 'can't have V3' geçmiş çıkarımın iki zıt kutbudur.",
    "formula": [
      {
        "label": "Must Have V3",
        "text": "must have + V3 (Geçmiş çıkarım: Yapmış olmalı)",
        "color": "bg-emerald-500/20 text-emerald-300"
      },
      {
        "label": "Can't/Couldn't Have V3",
        "text": "can't / couldn't have + V3 (Geçmiş çıkarım: Yapmış olamaz)",
        "color": "bg-rose-500/20 text-rose-300"
      },
      {
        "label": "May/Might/Could Have V3",
        "text": "may / might / could have + V3 (Geçmiş zayıf olasılık: Yapmış olabilir)",
        "color": "bg-amber-500/20 text-amber-300"
      },
      {
        "label": "Should Have V3",
        "text": "should / ought to have + V3 (Eleştiri: Yapmalıydı ama yapmadı)",
        "color": "bg-blue-500/20 text-blue-300"
      },
      {
        "label": "Needn't Have V3",
        "text": "needn't have + V3 (Boşa çaba: Yapmasına gerek yoktu ama yaptı)",
        "color": "bg-purple-500/20 text-purple-300"
      },
      {
        "label": "Continuous Perfect",
        "text": "must have been + Ving (Geçmiş süreç çıkarımı: Yapıyor olmalıydı)",
        "color": "bg-cyan-500/20 text-cyan-300"
      }
    ],
    "rules": [
      "must have + V3: Geçmişe yönelik kuvvetli olumlu çıkarım ('The ground is soaked; it must have rained heavily last night').",
      "can't / couldn't have + V3: Geçmişe yönelik kuvvetli olumsuz çıkarım ('He was in Istanbul yesterday; he can't have committed the crime in London').",
      "may / might / could have + V3: Geçmişe yönelik zayıf olasılık ('I cannot find my keys; I might have left them at the office').",
      "should / ought to have + V3: Geçmişte yapılması gerekip de yapılmayan eylemler için eleştiri ve pişmanlık ('You should have studied harder for the exam').",
      "shouldn't have + V3: Geçmişte yapılmaması gerekirken yapılan hatalı eylemler ('You shouldn't have driven so fast in the dense fog').",
      "needn't have + V3: Yapılmasına gerek olmadığı halde boş yere yapılan eylemler ('You needn't have brought your own towels; the hotel provides them').",
      "would have + V3: Geçmişte gerçekleşmemiş şartlı durumlar veya niyetler ('If I had known the truth, I would have warned you').",
      "could have + V3: Bağlama göre geçmiş olasılık ('olabilirdi') veya gerçekleşmemiş fırsat/yetenek ('yapabilirdi ama yapmadı') bildirir.",
      "must have been + Ving: Geçmişte eylemin o esnada devam ediyor olduğuna dair süreç çıkarımı ('She didn't hear the knock; she must have been taking a shower')."
    ],
    "coding": [
      "MUST HAVE V3 = %99 Yapmış olmalı | CAN'T HAVE V3 = %99 Yapmış olamaz",
      "SHOULD HAVE V3 = Yapmalıydın ama yapmadın (Ah keşke!)",
      "NEEDN'T HAVE V3 = Gerek yoktu ama boşuna yaptın",
      "COULD HAVE V3 = Yapabilirdi ama yapmadı (Kaçan fırsat)"
    ],
    "traps": [
      {
        "trap": "Geçmiş olumsuz çıkarım için 'mustn't have V3' aramak.",
        "fix": "İngilizcede geçmiş olumsuz çıkarım kalıbı 'can't have V3' veya 'couldn't have V3'tür; mustn't have V3 çıkarım için kullanılmaz."
      },
      {
        "trap": "'didn't need to V1' ile 'needn't have V3' kalıbını eşanlamlı sanmak.",
        "fix": "didn't need to = gerek yoktu ve yapılmadı; needn't have V3 = gerek yoktu ama gereksiz yere yapıldı."
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
    "summary": "İsim cümlecikleri (Noun Clauses) cümlede özne veya nesne görevinde kullanılır. Dolaylı anlatımda (Reported Speech) say/tell farkı, backshift kuralları ve soru cümlelerinde düz kelime sırası esastır.",
    "formula": [
      {
        "label": "Say vs Tell",
        "text": "say (that) / say to sb vs tell sb (that) [Kişi nesnesi zorunlu]",
        "color": "bg-indigo-500/20 text-indigo-300"
      },
      {
        "label": "Reported Question",
        "text": "He asked + Wh- / If / Whether + S + V [Düz cümle sırası]",
        "color": "bg-cyan-500/20 text-cyan-300"
      },
      {
        "label": "Imperative Shift",
        "text": "tell / ask / advise + object + to V1 (olumsuz: not to V1)",
        "color": "bg-amber-500/20 text-amber-300"
      },
      {
        "label": "Backshift",
        "text": "Present -> Past | Past/Perf -> Past Perfect | will -> would",
        "color": "bg-purple-500/20 text-purple-300"
      }
    ],
    "rules": [
      "say ve tell farkı: tell mutlaka doğrudan kişi nesnesi alır ('He told me that...', 'She told us...'). say ise nesne almaz veya 'to' ile kullanılır ('He said to me that...'). 'He said me' kesinlikle hatalıdır.",
      "Backshift (Zaman Kayması): Aktarma fiili geçmiş zamandaysa (said, told, asked) aktarılan cümlenin zamanı bir derece geçmişe kayar: Present Simple -> Past Simple, Present Continuous -> Past Continuous, Past Simple & Present Perfect -> Past Perfect, will -> would, can -> could, may -> might, must/have to -> had to.",
      "Backshift İstisnaları: Aktarma fiili şimdiki/geniş zamandaysa ('He says...') zaman kaymaz. Ayrıca evrensel gerçekler, bilimsel kurallar ve geçerliliğini koruyan durumlarda da backshift zorunlu değildir ('The teacher explained that water boils at 100°C').",
      "Reported Questions: Dolaylı sorularda DAİMA düz cümle kelime sırası (Özne + Fiil) kullanılır: 'He asked where I lived' (asla 'where did I live' değil!).",
      "Yes/No Soruları: Evet/hayır soruları aktarılırken bağlaç olarak 'if' veya 'whether' kullanılır ('She asked if/whether I was ready').",
      "Emir ve Ricalar: tell / ask / order / advise + nesne + to V1 (olumsuzda 'not to V1') kalıbıyla aktarılır ('The doctor advised me to rest').",
      "Zaman ve Yer Dönüşümleri: Bakış açısı değiştiğinde dönüşür: tomorrow -> the next/following day, yesterday -> the day before, ago -> before, now -> then, here -> there, this -> that."
    ],
    "coding": [
      "TELL = MUTLAKA KİME (tell ME, tell US) | SAY = Direkt cümle (say that)",
      "Dolaylı soru kuralı: Soru biter, düz cümle başlar (Wh- + ÖZNE + FİİL)",
      "EVET/HAYIR sorusu aktarımı: IF / WHETHER + Özne + Fiil"
    ],
    "traps": [
      {
        "trap": "Dolaylı soruda devrik kelime sırası kurmak ('He asked where was the hotel').",
        "fix": "Doğru sıra düz cümledir: 'He asked where the hotel was'."
      },
      {
        "trap": "'He said me' veya 'He told that' kullanımı.",
        "fix": "tell nesne ister ('He told me'); say doğrudan cümle alır ('He said that')."
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
    "summary": "Participles (Kısaltmalar), Relative Clause ve Adverbial Clause yapılarının sadeleştirilmesidir. Ving aktif, V3 pasif, having V3 ise öncelik-tamamlanmışlık bildirir. Dangling participle mantık hatasıdır.",
    "formula": [
      {
        "label": "Aktif Kısaltma",
        "text": "Ving (Aynı anda veya sebep bildiren aktif eylem)",
        "color": "bg-emerald-500/20 text-emerald-300"
      },
      {
        "label": "Pasif Kısaltma",
        "text": "V3 (Edilgen kısaltma: Yapılan / Edilen)",
        "color": "bg-rose-500/20 text-rose-300"
      },
      {
        "label": "Öncelikli Aktif",
        "text": "Having + V3 (Daha önce tamamlanmış aktif eylem)",
        "color": "bg-cyan-500/20 text-cyan-300"
      },
      {
        "label": "Öncelikli Pasif",
        "text": "Having been + V3 (Daha önce tamamlanmış edilgen eylem)",
        "color": "bg-purple-500/20 text-purple-300"
      }
    ],
    "rules": [
      "Present Participle (Ving) etken (aktif) anlam taşır: 'Hearing the alarm, the employees evacuated the building' (= When they heard the alarm...).",
      "Past Participle (V3) edilgen (pasif) anlam taşır: 'Written in 1890, the novel still fascinates readers' (= Which was written...).",
      "Perfect Participle (Having + V3) eylemin ana cümledeki eylemden daha önce tamamlandığını vurgular: 'Having submitted the report, she turned off her computer' (= After she had submitted...).",
      "Passive Perfect Participle (Having been + V3) eylemin daha önce gerçekleştiğini ve edilgen olduğunu gösterir: 'Having been warned several times, the company took security measures'.",
      "Dangling Participle (Sallantılı Kısaltma): Kısaltılan yan cümlenin mantıksal öznesi ile ana cümlenin öznesi mutlaka aynı olmalıdır. 'Walking down the road, the trees were beautiful' hatalıdır çünkü ağaçlar yürüyemez!",
      "Having yapısının yalnızca V3 ile kullanılacağı aşırı genellemesi yanlıştır; 'having + isim' kalıbı isim-fiil (gerund) olarak pek çok cümlede yer alır ('Having enough sleep is vital for health').",
      "Relative Clause Kısaltmaları: Aktif sıfat cümlecikleri Ving ile ('The man who lives next door' -> 'The man living next door'); pasif sıfat cümlecikleri V3 ile ('The car that was repaired' -> 'The car repaired') kısaltılır."
    ],
    "coding": [
      "ÖZNE İŞİ YAPIYORSA = Ving | ÖZNEYE İŞ YAPILIYORSA = V3",
      "ÖNCE BİTTİ + AKTİF = HAVING + V3 | ÖNCE BİTTİ + PASİF = HAVING BEEN + V3",
      "Virgülden sonraki özneye sor: 'Bu işi sen mi yaptın, sana mı yapıldı?'"
    ],
    "traps": [
      {
        "trap": "Virgülden sonraki özneye bakmadan doğrudan ezbere şık işaretlemek.",
        "fix": "Kısaltılan cümlenin mantıksal öznesi virgülden hemen sonra gelen öznedir; aktif/pasif kontrolü bu özneye göre yapılır."
      },
      {
        "trap": "'Having' sözcüğünün yalnızca V3 ile kullanılabileceğini sanmak.",
        "fix": "'Having + V3' perfect participle yapısıdır, ancak 'Having + isim' isim-fiil (gerund) yapısı olarak da kullanılabilir ('Having patience is key')."
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
    "summary": "YDS'nin en çok soru çıkan alanıdır. Adverbial Clauses 8 ana grupta incelenir. Cümle alan bağlaçlar ile isim/öbek alan bağlaçların ayrımı soru çözümünün anahtarıdır.",
    "formula": [
      {
        "label": "Zıtlık Zarf Tümleçleri",
        "text": "although / even though + Cümle vs despite / in spite of + İsim / Ving",
        "color": "bg-rose-500/20 text-rose-300"
      },
      {
        "label": "Sebep Zarf Tümleçleri",
        "text": "because / since / as + Cümle vs because of / due to + İsim / Ving",
        "color": "bg-emerald-500/20 text-emerald-300"
      },
      {
        "label": "Amaç Zarf Tümleçleri",
        "text": "so that + Cümle vs in order to / so as to + V1",
        "color": "bg-blue-500/20 text-blue-300"
      },
      {
        "label": "Sonuç Zarf Tümleçleri",
        "text": "so + adj/adv + that vs such + (a/an) noun phrase + that",
        "color": "bg-amber-500/20 text-amber-300"
      },
      {
        "label": "Koşul Zarf Tümleçleri",
        "text": "unless (= if not) + Olumlu Cümle | provided that + Cümle",
        "color": "bg-purple-500/20 text-purple-300"
      }
    ],
    "rules": [
      "Adverbial Clauses 8 ana gruptur: 1) Zaman (when, while, as, before, after, until, as soon as, once, since, by the time), 2) Sebep (because, since, as, seeing that, now that), 3) Amaç (so that, in order that), 4) Sonuç (so...that, such...that), 5) Zıtlık (although, even though, though, whereas, while), 6) Koşul (if, unless, provided that, as long as, in case), 7) Yer (where, wherever), 8) Tarz (as, as if, as though).",
      "although / even though arkasından tam cümle (özne + fiil) alırken; despite / in spite of arkasından isim, zamir veya Ving alır.",
      "because / since / as arkasından tam cümle alırken; because of / due to / owing to arkasından isim veya Ving alır.",
      "so that cümle alarak amaç bildirir ('He studied hard so that he could pass'); in order to ise yalın fiille bağlanır ('He studied hard in order to pass').",
      "so + sıfat/zarf + that ('The book was so gripping that I read it in one sitting'); such + isim tamlaması + that ('It was such a gripping book that...').",
      "unless (= if not) bağlacı kendi içinde olumsuzluk barındırdığı için unless'in yan cümlesinde ikinci bir olumsuzluk eki ('not') genellikle kullanılmaz.",
      "Geleceğe gönderme yapan zaman ve koşul yan cümlelerinde Simple Present (V1) kullanılır ('When he arrives, we will start').",
      "İstisna: will bağlaç cümlesinde ancak istek, rica veya inatçı ısrar bağlamında istisnai olarak yer alabilir ('If you will kindly wait a moment...')."
    ],
    "coding": [
      "DESPITE / IN SPITE OF = İsim veya Ving | ALTHOUGH = Cümle (Özne + Fiil)",
      "BECAUSE OF = İsim / Ving | BECAUSE = Cümle",
      "SO + Sıfat + THAT | SUCH + (a/an) İsim Tamlaması + THAT",
      "UNLESS = İçi olumlu, anlamı olumsuz (Yapmadıkça / If not)"
    ],
    "traps": [
      {
        "trap": "Despite'tan sonra tam cümle getirmek veya although'dan sonra sadece isim koymak.",
        "fix": "Boşluktan sonra özne + fiil varsa although/even though; sadece isim/Ving varsa despite/in spite of seçilir."
      },
      {
        "trap": "Unless bulunan yan cümleye 'not' eklemek.",
        "fix": "Unless zaten olumsuzluk içerir; yan cümlede fazladan 'not' kullanılmaz."
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
    "summary": "Belirteçler (Determiners) ve tanımlıklar (Articles: a/an/the/zero article), sayılabilen ve sayılamayan isimlerle kullanılan miktar belirteçleri YDS'de soru kökünün belirleyicisidir.",
    "formula": [
      {
        "label": "Ses Esaslı A/An",
        "text": "a + ünsüz ses (a university, a European) | an + ünlü ses (an hour, an honest man)",
        "color": "bg-emerald-500/20 text-emerald-300"
      },
      {
        "label": "A number of vs The number of",
        "text": "a number of + Çoğul İsim + Çoğul Fiil | the number of + Çoğul İsim + Tekil Fiil",
        "color": "bg-cyan-500/20 text-cyan-300"
      },
      {
        "label": "Miktar Uyumu",
        "text": "many/few + Çoğul | much/little + Sayılamayan | all/some/most + İkisi de",
        "color": "bg-amber-500/20 text-amber-300"
      },
      {
        "label": "The + Sıfat Grubu",
        "text": "the + Sıfat = Çoğul İnsan Grubu (the rich, the elderly -> Çoğul Fiil)",
        "color": "bg-purple-500/20 text-purple-300"
      }
    ],
    "rules": [
      "a / an seçimi yazılışa değil telaffuz edilen ilk sesin fonetiğine bağlıdır: 'a university' (/juː/ ünsüz sesi), 'a European' (/j/ ünsüz sesi), 'an hour' (okunmayan h, ünlü sesi), 'an honest person' (okunmayan h).",
      "Zero Article (Tanımlıksız): Genel anlamdaki çoğul isimler ('Books provide knowledge') ve genel sayılamayan isimler ('Water is vital for life') tanımlık almaz.",
      "Coğrafi İsimler Kuralı: Tekil dağlar (Mount Everest) ve tek adalar zero article alır; dağ sıraları (The Alps) ve ada grupları (The Bahamas) 'the' alır. Nehirler (The Nile), denizler (The Black Sea) ve okyanuslar (The Atlantic) 'the' alır. Tekil ülkeler (Turkey, Germany) zero article; çoğul veya federasyon ülkeler (The United States, The Netherlands, The United Kingdom) 'the' alır.",
      "Kurum İşlevi vs Bina: Kuruma temel işlevi için gidildiğinde zero article ('go to school' = öğrenci olarak gitmek; 'go to hospital' = hasta olarak yatmak); bina amaçlı gidildiğinde 'the' kullanılır ('go to the school to meet the teacher').",
      "the + sıfat yapısı tüm bir insan grubunu çoğul olarak niteler: the rich (zenginler), the poor (yoksullar), the elderly (yaşlılar), the unemployed (işsizler) çoğul fiil alır.",
      "Quantifiers Ayrımı: many, few, a few, several, a number of sadece sayılabilen çoğul isimlerle; much, little, a little sadece sayılamayan isimlerle; all, some, any, a lot of, most ise hem sayılabilen çoğul hem de sayılamayan isimlerle kullanılır ('All evidence was examined' & 'All students were present').",
      "'a number of' (birçok) çoğul fiil alırken; 'the number of' (sayısı) tekil fiil alır ('A number of students are waiting' vs 'The number of students is fifty').",
      "Neither of yapısında sınav ve resmî İngilizcede tekil fiil tercih edilir ('Neither of the proposed solutions is viable')."
    ],
    "coding": [
      "A NUMBER OF = Çoğul Fiil | THE NUMBER OF = Tekil Fiil",
      "ALL = Hem çoğul sayılabilir hem sayılamayan isimlerle çalışır (All money / All people)",
      "FEW / LITTLE = Neredeyse hiç (olumsuz) | A FEW / A LITTLE = Az da olsa yeterli (olumlu)",
      "A UNIVERSITY (ünsüz ses) | AN HOUR (ünlü ses)"
    ],
    "traps": [
      {
        "trap": "'All' sözcüğünü sadece çoğul isimlerle sınırlı sanmak.",
        "fix": "'All' sayılamayan isimlerle de tam uyumludur: 'All information is confidential'."
      },
      {
        "trap": "'university' veya 'European' sözcüklerinin başına 'an' getirmek.",
        "fix": "Yazılışa değil okunuşa bakılır: /juː/ ünsüz sesle başladıkları için 'a university' ve 'a European' doğrudur."
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
    "summary": "Olumsuz veya sınırlayıcı bir ifade cümle başına geldiğinde, cümle devrik hâle gelir: Yardımcı fiil öznenin önüne geçer (Zarf + Yardımcı Fiil + Özne + Esas Fiil).",
    "formula": [
      {
        "label": "Olumsuz Zarf Devriği",
        "text": "Never / Rarely / Seldom + Yardımcı Fiil + Özne + Fiil",
        "color": "bg-rose-500/20 text-rose-300"
      },
      {
        "label": "Bağlaç Devriği",
        "text": "Not only + Y.Fiil + Özne... but also... | No sooner had S V3 than...",
        "color": "bg-amber-500/20 text-amber-300"
      },
      {
        "label": "Sınırlayıcı Zarf",
        "text": "Only after / Only then / Only by + Y.Fiil + Özne + Fiil [Ana cümlede]",
        "color": "bg-cyan-500/20 text-cyan-300"
      },
      {
        "label": "Koşul Devriği",
        "text": "Had I known (Type 3) | Were I (Type 2) | Should you need (Type 1)",
        "color": "bg-purple-500/20 text-purple-300"
      },
      {
        "label": "So / Such Devriği",
        "text": "So + adj + be + Özne + that | Such + be + Özne + that",
        "color": "bg-emerald-500/20 text-emerald-300"
      }
    ],
    "rules": [
      "Temel Kural: Cümle başına olumsuz veya sınırlayıcı bir zarf/ifade (Never, Rarely, Seldom, Scarcely, Barely, Little, Under no circumstances) geldiğinde yardımcı fiil öznenin önüne geçer.",
      "Not only ... but also: 'Not only did he win the championship, but he also broke the world record'.",
      "No sooner ... than: Geçmişte birbiri ardına gerçekleşen eylemlerde 'No sooner had S V3 than S V2' kalıbı kullanılır ('No sooner had we arrived than the rain started').",
      "Hardly / Scarcely ... when: 'Hardly had the meeting started when the fire alarm sounded'.",
      "Only after / Only when / Not until: Bu bağlaçlarla başlayan cümlelerde devriklik YAN CÜMLEDE DEĞİL, ANA CÜMLEDE yapılır: 'Only after the investigation was completed did the police release the report'.",
      "Under no circumstances / On no account / In no way: Kesin yasaklama ifadeleri cümle başında devrik gerektirir: 'Under no circumstances should you touch this wire'.",
      "So / Such Devriği: 'So powerful was the explosion that windows shattered miles away' / 'Such was his determination that he overcame all obstacles'.",
      "Koşul Devrikleri (If atılarak yapılan): Type 1 -> 'Should you require further info...'; Type 2 -> 'Were I you...' / 'Were he to accept...'; Type 3 -> 'Had we known about the blizzard, we would not have traveled'."
    ],
    "coding": [
      "Olumsuz zarf başa -> Yardımcı fiil öne: ZARF + YARDIMCI FİİL + ÖZNE + FİİL",
      "No sooner... THAN | Hardly / Scarcely... WHEN",
      "ONLY AFTER / NOT UNTIL = Yan cümle normal, ANA CÜMLE DEVRİK",
      "IF UÇTU: Had + S + V3 | Were + S | Should + S + V1"
    ],
    "traps": [
      {
        "trap": "Only after veya Not until görünce hemen yan cümleyi devrik yapmak.",
        "fix": "Devriklik yan cümlenin bitiminde, ana cümlenin başında gerçekleşir ('Not until he apologized did I talk to him')."
      },
      {
        "trap": "No sooner bağlacını 'when' ile, Hardly bağlacını 'than' ile eşleştirmek.",
        "fix": "Eşleşme sabittir: No sooner... THAN | Hardly / Scarcely... WHEN."
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

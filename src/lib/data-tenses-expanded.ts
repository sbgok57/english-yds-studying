// 17 Tense x 7 Seviye (A1, A2, B1, B2, C1, C2, YDS) = 119 Kapsamlı Anlatım Bloğu
// Her blok 24 zorunlu alan içerir: formüller, semantik ayrımlar, zaman çizgileri, hafıza kodları ve mini testler.

export type TenseLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "YDS";

export const TENSE_LEVELS_LIST: TenseLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2", "YDS"];

export interface MiniTest {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface ContrastExample {
  wrong: string;
  correct: string;
  explanation: string;
  note?: string;
}

export interface TenseLevelBlock {
  title: string;
  basicMeaning: string;
  usages: string[];
  nonUsages: string[];
  positiveFormula: string;
  negativeFormula: string;
  questionFormula: string;
  shortAnswers: string;
  subjectVerbAgreement: string;
  verbForm: string;
  auxiliaryVerb: string;
  timeMarkers: string[];
  signalWords: string[];
  signals?: string[];
  timeline: string;
  examples: string[];
  exampleTr: string[];
  code: string;
  visualMemory: string;
  commonMistake: string;
  correctWrongContrast: ContrastExample;
  differenceFromSimilarTense: string;
  levelTactic: string;
  miniTest: MiniTest;
  explainedAnswer: string;
}

export interface TenseTopic {
  slug: string;
  name: string;
  turkish: string;
  emoji?: string;
  summary?: string;
  levels: Record<TenseLevel, TenseLevelBlock>;
}

export const TENSE_TOPICS: TenseTopic[] = [
  {
    "slug": "simple-present",
    "name": "Simple Present Tense",
    "turkish": "Geniş Zaman",
    "emoji": "☀️",
    "summary": "Rutinler, alışkanlıklar, bilimsel ve genel gerçekler, resmi tarifeler ve stative fiiller için kullanılan temel zaman.",
    "levels": {
      "A1": {
        "title": "Günlük Rutinler ve Alışkanlıklar",
        "basicMeaning": "Her gün veya düzenli yapılan temel eylemler ve basit genel gerçekler.",
        "usages": [
          "Sabah rutinleri ve günlük aktiviteler",
          "Kişisel temel alışkanlıklar",
          "Herkesçe bilinen basit gerçekler"
        ],
        "nonUsages": [
          "Şu anda konuşma anında devam etmekte olan eylemler (Present Continuous)",
          "Dün veya geçmişte tamamlanmış olaylar"
        ],
        "positiveFormula": "Subject + V1 (he/she/it için V-s/es)",
        "negativeFormula": "Subject + do not / does not + V1",
        "questionFormula": "Do / Does + Subject + V1?",
        "shortAnswers": "Yes, I do. / No, I don't. — Yes, he does. / No, he doesn't.",
        "subjectVerbAgreement": "I, you, we, they ile fiil yalındır (work); he, she, it ile fiile -s veya -es eklenir (works, watches).",
        "verbForm": "Yalın fiil (V1) veya -s takılı (works, goes, studies).",
        "auxiliaryVerb": "do / does (olumsuz ve soru cümlelerinde)",
        "timeMarkers": [
          "every day",
          "always",
          "usually",
          "often",
          "sometimes",
          "never",
          "on Mondays"
        ],
        "signalWords": [
          "every",
          "usually",
          "always",
          "daily"
        ],
        "timeline": "Geçmişten geleceğe sürekli tekrarlanan döngüsel noktalar [••• Dün ••• Şimdi ••• Yarın •••]",
        "examples": [
          "I wake up early every day.",
          "He works in a modern hospital."
        ],
        "exampleTr": [
          "Her gün erken uyanırım."
        ],
        "code": "Rutin / Alışkanlık = V1 (He/She/It için +s)",
        "visualMemory": "Her sabah aynı saatte çalan çalar saat ve açılan güneş ikonu ⏰☀️",
        "commonMistake": "Üçüncü tekil şahısta (he/she/it) fiile -s eklemeyi unutmak.",
        "correctWrongContrast": {
          "wrong": "She live in Ankara.",
          "correct": "She lives in Ankara.",
          "note": "He/she/it öznelerinde fiil mutlaka -s takısı alır.",
          "explanation": "He/she/it öznelerinde fiil mutlaka -s takısı alır."
        },
        "differenceFromSimilarTense": "Present Continuous ile farkı: Simple Present kalıcı ve tekrarlanan durumları, Continuous ise sadece şu an geçici süren eylemleri anlatır.",
        "levelTactic": "Özneye dikkat et: 'he, she, it' tekil öznelerinde fiildeki -s ekini seçeneklerde ilk olarak ara.",
        "miniTest": {
          "question": "Emily always ---- breakfast before leaving for school.",
          "options": [
            "eats",
            "is eating",
            "ate",
            "has eaten",
            "eat"
          ],
          "answer": 0,
          "explanation": "Emily (she) öznesi ve 'always' sıklık zarfı geniş zaman gerektirir; doğru yanıt 'eats'tir."
        },
        "explainedAnswer": "Doğru yanıt A (eats). Tekil özne (she) için geniş zaman -s takısı alır.",
        "signals": [
          "every",
          "usually",
          "always",
          "daily"
        ]
      },
      "A2": {
        "title": "Sıklık Zarfları ve Kalıcı Meslekler",
        "basicMeaning": "Eylemlerin yapılma sıklığı ve genel yaşam düzeni bildirimleri.",
        "usages": [
          "Sıklık zarfları (hardly ever, seldom, frequently)",
          "Kalıcı meslekler ve çalışma alanları",
          "Haftalık ve aylık düzenler"
        ],
        "nonUsages": [
          "Göz önünde gerçekleşen anlık değişimler"
        ],
        "positiveFormula": "Subject + Frequency Adverb + V1 (be fiili varsa: Subject + be + Adverb)",
        "negativeFormula": "Subject + do/does not + Adverb + V1",
        "questionFormula": "How often do you + V1?",
        "shortAnswers": "Twice a week. / Rarely.",
        "subjectVerbAgreement": "Sıklık zarfı ana fiilden ÖNCE, be fiilinden (am/is/are) SONRA gelir.",
        "verbForm": "V1 / V-s",
        "auxiliaryVerb": "do / does / be",
        "timeMarkers": [
          "rarely",
          "seldom",
          "hardly ever",
          "twice a year",
          "at weekends",
          "normally"
        ],
        "signalWords": [
          "how often",
          "seldom",
          "regularly"
        ],
        "timeline": "Yüzdelik sıklık cetveli (%100 always -> %0 never).",
        "examples": [
          "They rarely travel by plane.",
          "He is always punctual for his classes."
        ],
        "exampleTr": [
          "Uçakla nadiren seyahat ederler."
        ],
        "code": "Sıklık Zarfı Konumu: be'den SONRA, ana fiilden ÖNCE!",
        "visualMemory": "Yüzdelik sıklık ölçeği ve takvim işaretlemeleri 📊🗓️",
        "commonMistake": "Sıklık zarfını yanlış sıraya koymak (He arrives always late -> He always arrives late).",
        "correctWrongContrast": {
          "wrong": "He is late never for work.",
          "correct": "He is never late for work.",
          "note": "be (am/is/are) fiilinden sonra sıklık zarfı gelir.",
          "explanation": "be (am/is/are) fiilinden sonra sıklık zarfı gelir."
        },
        "differenceFromSimilarTense": "Simple Past geçmişte kalmış eylemdir; Simple Present eylemin hala geçerli olduğunu belirtir.",
        "levelTactic": "Sıklık zarfının fiille olan sıralamasını kontrol et: 'Subject + be + adverb' veya 'Subject + adverb + main verb'.",
        "miniTest": {
          "question": "Our manager ---- late for meetings because she values punctuality.",
          "options": [
            "is rarely",
            "rarely is",
            "is being rarely",
            "was rarely",
            "rarely has been"
          ],
          "answer": 0,
          "explanation": "'be' fiilinden sonra sıklık zarfı gelir: 'is rarely late'."
        },
        "explainedAnswer": "Doğru yanıt A (is rarely). Zarflar 'be' yardımcı fiilinden sonra yerleşir.",
        "signals": [
          "how often",
          "seldom",
          "regularly"
        ]
      },
      "B1": {
        "title": "Bilimsel Doğa Kanunları ve Durum (Stative) Fiilleri",
        "basicMeaning": "Evrensel fizik kuralları, coğrafi olgular ve continuous almayan durum fiilleri.",
        "usages": [
          "Bilimsel gerçekler (kaynama, donma, yerçekimi)",
          "Stative fiiller (know, understand, believe, contain, belong)",
          "Resmi ulaşım tarifeleri (The train leaves at 9)"
        ],
        "nonUsages": [
          "Aşamalı gelişim veya geçici durumlar"
        ],
        "positiveFormula": "Subject + Stative Verb (V1/V-s)",
        "negativeFormula": "Subject + does not / do not + V1",
        "questionFormula": "Does this chemical react with oxygen?",
        "shortAnswers": "Yes, it does.",
        "subjectVerbAgreement": "Tekil bilimsel terimler tekil fiil alır (Gravity pulls objects).",
        "verbForm": "V1 / V-s (Stative fiiller -ing almaz)",
        "auxiliaryVerb": "does / do",
        "timeMarkers": [
          "scientifically",
          "naturally",
          "as a rule",
          "under normal pressure"
        ],
        "signalWords": [
          "consists of",
          "belongs to",
          "freezes",
          "boils",
          "contains"
        ],
        "timeline": "Zamansız evrensel gerçeklik düzlemi: Dün, bugün ve yarın hep aynıdır.",
        "examples": [
          "Water boils at 100 degrees Celsius under standard atmospheric pressure.",
          "This substance contains essential amino acids."
        ],
        "exampleTr": [
          "Su, standart atmosfer basıncı altında 100 santigrat derecede kaynar."
        ],
        "code": "Doğa Kanunu & Durum Fiili = ASLA continuous takısı almaz, V1 kalır!",
        "visualMemory": "Laboratuvar beherinde kaynayan su ve termometre 100°C 🔬🌡️",
        "commonMistake": "Durum fiillerini continuous yapmak (*I am knowing the answer*).",
        "correctWrongContrast": {
          "wrong": "Water is boiling at 100 degrees.",
          "correct": "Water boils at 100 degrees.",
          "note": "Genel bilimsel doğrularda continuous kullanılmaz.",
          "explanation": "Genel bilimsel doğrularda continuous kullanılmaz."
        },
        "differenceFromSimilarTense": "Tarife kullanımı: 'The plane takes off at 6' (Simple Present) vs 'The plane will crash' (tahmin - will).",
        "levelTactic": "Soru kökünde 'scientific law, biology, physics' gibi bir konu ve stative fiil varsa doğrudan Simple Present seç.",
        "miniTest": {
          "question": "The human brain ---- approximately 20 percent of the body's total energy.",
          "options": [
            "consumes",
            "is consuming",
            "consumed",
            "will have consumed",
            "was consuming"
          ],
          "answer": 0,
          "explanation": "Biyolojik bir gerçeklik anlatıldığı için Simple Present (consumes) doğru yanıttır."
        },
        "explainedAnswer": "Doğru yanıt A (consumes). İnsan beyninin enerji tüketimi bilimsel bir gerçek olduğu için geniş zaman kullanılır.",
        "signals": [
          "consists of",
          "belongs to",
          "freezes",
          "boils",
          "contains"
        ]
      },
      "B2": {
        "title": "Gelecek Bildiren Zaman ve Şart Cümlecikleri (Time Clauses)",
        "basicMeaning": "Geleceğe gönderme yapan yan cümlelerde (when, as soon as, until, if) will yerine Simple Present kullanımı.",
        "usages": [
          "When / before / after / as soon as / until yan cümlelerinde gelecek anlamı",
          "Conditional Type 0 ve Type 1 şart yan cümleleri",
          "Edebi eser ve senaryo özetleri"
        ],
        "nonUsages": [
          "Standart zaman bağlacı yan cümlelerinde 'will' veya 'would' kullanımı"
        ],
        "positiveFormula": "Time Clause [when/as soon as + S + V1] + Main Clause [S + will + V1]",
        "negativeFormula": "Unless + Subject + V1, Main Clause will not + V1",
        "questionFormula": "What will happen when the delegation arrives?",
        "shortAnswers": "They will begin talks.",
        "subjectVerbAgreement": "Yan cümlenin öznesine göre fiil çekimi (he/she/it -> V-s).",
        "verbForm": "V1 / V-s",
        "auxiliaryVerb": "do / does",
        "timeMarkers": [
          "as soon as",
          "until",
          "the moment that",
          "unless",
          "provided that",
          "when"
        ],
        "signalWords": [
          "time conjunction",
          "conditional rule",
          "present-future harmony"
        ],
        "timeline": "Şart gerçekleşir [V1] ---> Ardından gelecek sonuç doğar [will V1].",
        "examples": [
          "As soon as the results arrive, we will inform the board.",
          "Unless emissions decrease, global warming will worsen."
        ],
        "exampleTr": [
          "Sonuçlar gelir gelmez yönetim kurulunu bilgilendireceğiz."
        ],
        "code": "Bağlaç İçi Will YASAKTIR: When + V1, will V1!",
        "visualMemory": "Trafik bariyeri: Zaman bağlacı will'e dur der, yerine V1 geçirir 🛑🚦",
        "commonMistake": "When, as soon as gibi zaman bağlaçlarının arkasına 'will' koymak.",
        "correctWrongContrast": {
          "wrong": "When the doctor will arrive, the surgery will start.",
          "correct": "When the doctor arrives, the surgery will start.",
          "note": "Zaman bağlacı bulunan cümlede 'will' kullanılmaz, Simple Present kullanılır.",
          "explanation": "Zaman bağlacı bulunan cümlede 'will' kullanılmaz, Simple Present kullanılır."
        },
        "differenceFromSimilarTense": "Type 1 Conditional ana cümlede will kullanılır, yan cümlede Simple Present kullanılır.",
        "levelTactic": "Seçenek eleme taktiği: Boşluk bir 'when, after, until, as soon as' yan cümlesindeyse 'will' ve 'would' içeren şıkları doğrudan ele.",
        "miniTest": {
          "question": "The central bank will not lower interest rates until inflation ---- to the targeted threshold.",
          "options": [
            "drops",
            "will drop",
            "would drop",
            "had dropped",
            "is dropping"
          ],
          "answer": 0,
          "explanation": "'Until' zaman bağlacı yan cümlesinde gelecek anlamı için Simple Present (drops) seçilir; will drop yanlıştır."
        },
        "explainedAnswer": "Doğru yanıt A (drops). Until yan cümlesinde will kullanılmaz, geniş zaman Simple Present (drops) kullanılır.",
        "signals": [
          "time conjunction",
          "conditional rule",
          "present-future harmony"
        ]
      },
      "C1": {
        "title": "Canlı Anlatım, Sahne Yönergeleri ve Performative Beyanlar",
        "basicMeaning": "Spor spikeri anlatımları, tiyatro sahne metinleri ve performative resmi beyan fiilleri.",
        "usages": [
          "Spor karşılaşması canlı spiker anlatımları",
          "Tiyatro sahne yönergeleri ve dramatik anlatım",
          "Performative fiiller (I declare, I apologize, I insist, I suggest)"
        ],
        "nonUsages": [
          "Yavaş gelişen süreçlerin detaylı analizi"
        ],
        "positiveFormula": "Subject + Performative Verb (I pronounce / I hereby resign / I swear)",
        "negativeFormula": "I do not accept this condition.",
        "questionFormula": "Do you formally contest the decision?",
        "shortAnswers": "I do.",
        "subjectVerbAgreement": "Özne-fiil uyumu resmi dilde kusursuz uygulanır.",
        "verbForm": "V1",
        "auxiliaryVerb": "do / does",
        "timeMarkers": [
          "hereby",
          "formally",
          "officially",
          "instantly"
        ],
        "signalWords": [
          "declare",
          "resign",
          "apologize",
          "conclude",
          "hereby"
        ],
        "timeline": "Sözün söylendiği an eylemin gerçekleştiği tek ve kesin an.",
        "examples": [
          "The referee blows the final whistle and the match ends.",
          "I hereby declare this summit officially open."
        ],
        "exampleTr": [
          "Hakem son düdüğü çalıyor ve maç sona eriyor."
        ],
        "code": "Performative Fiil = Söylendiği anda eylemi gerçekleştiren fiil (I declare).",
        "visualMemory": "Spiker mikrofonu ve resmi mühür basılan protokol belgesi 🎙️📜",
        "commonMistake": "Performative fiilleri 'I am apologizing' şeklinde continuous söylemek.",
        "correctWrongContrast": {
          "wrong": "I am apologizing for the confusion.",
          "correct": "I apologize for the confusion.",
          "note": "Resmi özür beyanında Simple Present kullanılır.",
          "explanation": "Resmi özür beyanında Simple Present kullanılır."
        },
        "differenceFromSimilarTense": "Present Continuous eylemin konuşma anında uzadığını ima ederken, Simple Present eylemin anında tamamlandığını bildirir.",
        "levelTactic": "Resmi beyan bildiren 'hereby, formally' gibi zarflar gördüğünde performative Simple Present (V1) ara.",
        "miniTest": {
          "question": "In the final act of the tragedy, the protagonist ---- his fate and steps into the shadows.",
          "options": [
            "accepts",
            "is accepting",
            "has accepted",
            "will accept",
            "accepted"
          ],
          "answer": 0,
          "explanation": "Dramatik sahne yönergelerinde (stage directions) Simple Present (accepts) kullanılır."
        },
        "explainedAnswer": "Doğru yanıt A (accepts). Tiyatro ve edebi eser yönergelerinde 'accepts' geniş zaman formu esastır.",
        "signals": [
          "declare",
          "resign",
          "apologize",
          "conclude",
          "hereby"
        ]
      },
      "C2": {
        "title": "Tarihsel Şimdiki Zaman (Historic Present) ve Akademik Sav Çerçevesi",
        "basicMeaning": "Geçmiş tarihi olayları canlandırmak ve akademik yazarların savlarını aktarmak.",
        "usages": [
          "Tarihsel olayları dramatik olarak canlandırma (Historic Present)",
          "Akademik savlar (Aristotle asserts that... Smith argues that...)",
          "Manşet ve haber dili"
        ],
        "nonUsages": [
          "Teknik kronoloji çizelgeleri"
        ],
        "positiveFormula": "Author/Historical Actor + posits / argues / maintains + that-clause",
        "negativeFormula": "Contemporary scholarship does not endorse this premise.",
        "questionFormula": "Why does the author juxtapose these two historical paradigms?",
        "shortAnswers": "Because it illustrates a fundamental paradox.",
        "subjectVerbAgreement": "Tekil düşünürler tekil fiil alır (Kant maintains).",
        "verbForm": "V1 / V-s",
        "auxiliaryVerb": "does / do",
        "timeMarkers": [
          "in his seminal treatise",
          "throughout history",
          "consistently",
          "paradoxically"
        ],
        "signalWords": [
          "posits",
          "asserts",
          "delineates",
          "contends",
          "maintains"
        ],
        "timeline": "Zaman ötesi akademik söylem çizgisi.",
        "examples": [
          "In 1914, tensions erupt into full-scale conflict across Europe.",
          "Chomsky posits that humans possess an innate faculty for language acquisition."
        ],
        "exampleTr": [
          "1914 yılında gerginlikler Avrupa çapında topyekün bir savaşa dönüşür."
        ],
        "code": "Akademik Tez = Yazar hala konuşuyormuş gibi Simple Present (argues, posits)!",
        "visualMemory": "Antik felsefe büstü ve üzerine yazılmış klasik akademik tez metni 🏛️📖",
        "commonMistake": "Eski düşünürlerin teorilerini aktarırken gereksizce Past Continuous veya Past Perfect kullanmak.",
        "correctWrongContrast": {
          "wrong": "In his seminal paper, Einstein was arguing that space and time were relative.",
          "correct": "In his seminal paper, Einstein argues that space and time are relative.",
          "note": "Akademik eserlerdeki savlar günümüzde de geçerli birer önerme olarak Simple Present ile aktarılır.",
          "explanation": "Akademik eserlerdeki savlar günümüzde de geçerli birer önerme olarak Simple Present ile aktarılır."
        },
        "differenceFromSimilarTense": "Simple Past kuru kronolojidir; Historic Present ise olayı okuyucunun gözünde o an gerçekleşiyormuş gibi canlandırır.",
        "levelTactic": "Akademik makale veya tez özetlerinde yazarların görüşlerini aktaran 'argues, contends, demonstrates' fiillerinde Simple Present'a öncelik ver.",
        "miniTest": {
          "question": "In 'The Wealth of Nations', Adam Smith ---- that individuals pursuing self-interest inadvertently foster societal welfare.",
          "options": [
            "maintains",
            "was maintaining",
            "had maintained",
            "would maintain",
            "is maintaining"
          ],
          "answer": 0,
          "explanation": "Klasik akademik eser savları Simple Present (maintains) ile sunulur."
        },
        "explainedAnswer": "Doğru yanıt A (maintains). Felsefi ve iktisadi savlar akademik gelenekte geniş zamanla verilir.",
        "signals": [
          "posits",
          "asserts",
          "delineates",
          "contends",
          "maintains"
        ]
      },
      "YDS": {
        "title": "ÖSYM Tense Uyumu Matrisi ve Zaman Bağlacı Tuzakları",
        "basicMeaning": "YDS/YDT soru tiplerinde Present-Present / Present-Future zaman uyumu.",
        "usages": [
          "Present-Present ve Present-Future uyum zinciri",
          "Genel bilimsel ve epidemiyolojik tespitler",
          "Zaman bağlacı içi will/would tuzaklarını doğrudan eleme"
        ],
        "nonUsages": [
          "Geçmiş zaman işaretçisi içeren cümlelerde Simple Present"
        ],
        "positiveFormula": "Present Independent Clause + Present / Future Subordinate Clause",
        "negativeFormula": "Present Clause + [Past Perfect uyumsuzluğu YASAKTIR: V1 + had V3]",
        "questionFormula": "What environmental consequences emerge when polar ice caps melt?",
        "shortAnswers": "Sea levels rise globally.",
        "subjectVerbAgreement": "ÖSYM uzun edat öbekleriyle özneyi fiilden ayırır; asıl isim esastır (The proliferation of renewable sources IS, not ARE).",
        "verbForm": "V1 / V-s",
        "auxiliaryVerb": "do / does",
        "timeMarkers": [
          "today",
          "nowadays",
          "globally",
          "characteristically",
          "in the contemporary world"
        ],
        "signalWords": [
          "research indicates",
          "evidence suggests",
          "studies reveal"
        ],
        "timeline": "Sınav Soru Kökü: [Present Bölge] <== Uyum ==> [Present / Future Bölge]",
        "examples": [
          "Current neurological data indicate that adequate sleep enhances memory retention.",
          "When an earthquake strikes an unprepared metropolitan area, devastation multiplies rapidly."
        ],
        "exampleTr": [
          "Mevcut nörolojik veriler, yeterli uykunun bellek tutulumunu artırdığını göstermektedir."
        ],
        "code": "YDS Altın Kuralı: Present cümle geçmişe (Past Perfect) zıplayamaz! Zaman uyumu esastır.",
        "visualMemory": "ÖSYM İki Bölmeli Terazi: Sol taraf Present ise sağ taraf da Present/Future olmak zorundadır ⚖️",
        "commonMistake": "Cümlede geçmiş zaman işareti yokken 'daha ağır duruyor' düşüncesiyle Past Perfect veya would seçmek.",
        "correctWrongContrast": {
          "wrong": "Recent environmental assessments showed that coral reefs suffered immensely.",
          "correct": "Recent environmental assessments show that coral reefs suffer immensely.",
          "note": "Genel güncel veriler Present uyum gerektirir.",
          "explanation": "Genel güncel veriler Present uyum gerektirir."
        },
        "differenceFromSimilarTense": "Geçmiş zaman sorularından farkı: Soru kökünde 'in 1850, during antiquity' gibi spesifik bir tarih yoksa genel anlatım Simple Present kalır.",
        "levelTactic": "Zaman uyumu testi: Seçeneklerde bir tarafı Present, diğer tarafı Past olan (örn: V1 / had V3 veya V1 / would V1) seçenekleri doğrudan ele.",
        "miniTest": {
          "question": "Cognitive psychologists argue that when individuals ---- chronic stress, their decision-making capacity ---- compromised.",
          "options": [
            "experience / becomes",
            "experienced / will become",
            "have experienced / became",
            "will experience / becomes",
            "experience / had become"
          ],
          "answer": 0,
          "explanation": "Genel psikolojik bir kural anlatılmaktadır. When yan cümlesinde 'experience', ana cümlede 'becomes' (Present / Present) tam zaman uyumu sağlar."
        },
        "explainedAnswer": "Doğru yanıt A (experience / becomes). Genel bilimsel açıklamalarda Present-Present zaman uyumu zorunludur.",
        "signals": [
          "research indicates",
          "evidence suggests",
          "studies reveal"
        ]
      }
    }
  },
  {
    "slug": "present-continuous",
    "name": "Present Continuous Tense",
    "turkish": "Şimdiki Zaman",
    "emoji": "🏃",
    "summary": "Konuşma anında devam eden olaylar, geçici durumlar, kademeli değişimler, always ile şikayet bildirimleri ve anlam değiştiren stative fiiller.",
    "levels": {
      "A1": {
        "title": "Konuşma Anında Devam Eden Eylemler",
        "basicMeaning": "Tam şu an gözümüzün önünde gerçekleşen anlık eylemler.",
        "usages": [
          "Konuşma anında devam eden hareketler",
          "Görsel komutlar (Look! Listen!)"
        ],
        "nonUsages": [
          "Kalıcı genel doğrular ve doğa kanunları"
        ],
        "positiveFormula": "Subject + am/is/are + V-ing",
        "negativeFormula": "Subject + am/is/are not + V-ing",
        "questionFormula": "Am/Is/Are + Subject + V-ing?",
        "shortAnswers": "Yes, I am. / No, she isn't.",
        "subjectVerbAgreement": "I -> am, He/She/It -> is, You/We/They -> are",
        "verbForm": "Fiilin -ing almış hali (working, playing, writing).",
        "auxiliaryVerb": "am / is / are",
        "timeMarkers": [
          "now",
          "right now",
          "at the moment",
          "at present",
          "Listen!",
          "Look!"
        ],
        "signalWords": [
          "now",
          "currently",
          "Listen",
          "Look"
        ],
        "timeline": "Tam konuşma anındaki tek bir hareketli nokta: [••• (ŞU AN DEVAM EDİYOR) •••]",
        "examples": [
          "Look! The children are playing in the garden.",
          "I am writing an email right now."
        ],
        "exampleTr": [
          "Bak! Çocuklar bahçede oynuyor."
        ],
        "code": "Şu An = am/is/are + V-ing",
        "visualMemory": "Koşan insan figürü ve 'CANLI YAYIN' kırmızı ışığı 🔴🏃",
        "commonMistake": "'am/is/are' yardımcı fiilini unutup sadece 'I writing' demek.",
        "correctWrongContrast": {
          "wrong": "She working in the library right now.",
          "correct": "She is working in the library right now.",
          "note": "Present Continuous yapısında 'be' yardımcı fiili zorunludur.",
          "explanation": "Present Continuous yapısında 'be' yardımcı fiili zorunludur."
        },
        "differenceFromSimilarTense": "Simple Present alışkanlıktır; Present Continuous sadece şu anki geçici eylemdir.",
        "levelTactic": "'Look!, Listen!, at the moment' gördüğünde doğrudan am/is/are + V-ing ara.",
        "miniTest": {
          "question": "Hurry up! The train ---- and we cannot afford to miss it.",
          "options": [
            "is leaving",
            "leaves",
            "left",
            "has left",
            "was leaving"
          ],
          "answer": 0,
          "explanation": "'Hurry up!' uyarısı konuşma anında trenin hareket ettiğini gösterir: 'is leaving'."
        },
        "explainedAnswer": "Doğru yanıt A (is leaving). Konuşma anında gerçekleşen acil durum Present Continuous ile verilir.",
        "signals": [
          "now",
          "currently",
          "Listen",
          "Look"
        ]
      },
      "A2": {
        "title": "Geçici Durumlar ve Dönemsel Aktiviteler",
        "basicMeaning": "Kalıcı olmayan, sadece bu günler/haftalar için geçerli geçici durumlar.",
        "usages": [
          "Geçici ikamet (I am staying with my uncle this week)",
          "Dönemsel projeler (These days we are working on a new design)"
        ],
        "nonUsages": [
          "Ömür boyu süren kalıcı meslekler"
        ],
        "positiveFormula": "Subject + am/is/are + V-ing",
        "negativeFormula": "Subject + am/is/are not + V-ing",
        "questionFormula": "Are you living in a dormitory this semester?",
        "shortAnswers": "Yes, I am.",
        "subjectVerbAgreement": "Özneye göre am, is, are seçilir.",
        "verbForm": "V-ing",
        "auxiliaryVerb": "am / is / are",
        "timeMarkers": [
          "this week",
          "this month",
          "these days",
          "for the time being",
          "nowadays (geçici)"
        ],
        "signalWords": [
          "these days",
          "temporarily",
          "this semester"
        ],
        "timeline": "Sınırlı bir süreyi kapsayan geçici dalgalanma çizgisi.",
        "examples": [
          "He is staying at a hotel this week while his apartment is painted.",
          "They are studying hard these days for their midterm exams."
        ],
        "exampleTr": [
          "Dairesi boyanırken bu hafta bir otelde kalıyor."
        ],
        "code": "Geçici Durum (This week / These days) = am/is/are + V-ing!",
        "visualMemory": "Geçici otel bavulu ve 'Under Renovation' tabelası 🧳🚧",
        "commonMistake": "Geçici bir durumu kalıcı gibi algılayıp Simple Present kullanmak.",
        "correctWrongContrast": {
          "wrong": "I live with my friend this week.",
          "correct": "I am living with my friend this week.",
          "note": "Bu haftaya özgü geçici durumlarda continuous tercih edilir.",
          "explanation": "Bu haftaya özgü geçici durumlarda continuous tercih edilir."
        },
        "differenceFromSimilarTense": "I live in Istanbul (kalıcı evim) vs I am living in Istanbul this month (geçici görev).",
        "levelTactic": "'This week, these days, for the time being' gibi geçici zaman bloklarında Present Continuous'a odaklan.",
        "miniTest": {
          "question": "Because his laptop is broken, David ---- his sister's computer this week.",
          "options": [
            "is using",
            "uses",
            "used",
            "has used",
            "was using"
          ],
          "answer": 0,
          "explanation": "'This week' ifadesi geçici bir durumu belirttiği için Present Continuous (is using) seçilir."
        },
        "explainedAnswer": "Doğru yanıt A (is using). Geçici bir haftalık durum için continuous zaman esastır.",
        "signals": [
          "these days",
          "temporarily",
          "this semester"
        ]
      },
      "B1": {
        "title": "Kademeli Değişimler ve Gelişen Süreçler",
        "basicMeaning": "Bir durumun adım adım artması, azalması veya dönüşmesi.",
        "usages": [
          "Giderek değişen durumlar (get, become, grow, increase)",
          "Gezegen ve ekonomi trendleri (Global temperatures are rising)"
        ],
        "nonUsages": [
          "Tek seferde olup biten statik eylemler"
        ],
        "positiveFormula": "Subject + is/are + getting / becoming / rising + comparative",
        "negativeFormula": "The situation is not improving.",
        "questionFormula": "Are renewable energy costs decreasing?",
        "shortAnswers": "Yes, they are.",
        "subjectVerbAgreement": "Trendi oluşturan isim çoğulsa 'are', sayılamaz ise 'is' (Prices are rising / Water is decreasing).",
        "verbForm": "V-ing",
        "auxiliaryVerb": "is / are",
        "timeMarkers": [
          "gradually",
          "day by day",
          "more and more",
          "increasingly",
          "step by step"
        ],
        "signalWords": [
          "getting better",
          "rising",
          "growing",
          "becoming"
        ],
        "timeline": "Sürekli yukarı veya aşağı yönlü eğim gösteren trend çizgisi ↗️ ↘️",
        "examples": [
          "The Earth's climate is becoming warmer due to greenhouse gases.",
          "Electronic components are getting smaller and more efficient."
        ],
        "exampleTr": [
          "Dünyanın iklimi sera gazları sebebiyle giderek ısınıyor."
        ],
        "code": "Gelişen Trend (getting warmer / rising) = am/is/are + V-ing!",
        "visualMemory": "Sürekli yükselen borsa grafiği ve artan termometre cıvası 📈🌡️",
        "commonMistake": "Kademeli süreç bildiren fiilleri Simple Present yapmak (*Climate gets warmer day by day*).",
        "correctWrongContrast": {
          "wrong": "The world population grows rapidly day by day.",
          "correct": "The world population is growing rapidly day by day.",
          "note": "'Day by day' kademeli değişim sürecidir, continuous gerektirir.",
          "explanation": "'Day by day' kademeli değişim sürecidir, continuous gerektirir."
        },
        "differenceFromSimilarTense": "Present Perfect değişimin tamamlanmış sonucunu, Continuous ise değişimin şu an sürdüğünü vurgular.",
        "levelTactic": "'Day by day, gradually, more and more' sinyallerini görünce kademeli değişim Present Continuous seç.",
        "miniTest": {
          "question": "Owing to advances in nanotechnology, microchips ---- significantly faster and more compact each year.",
          "options": [
            "are becoming",
            "become",
            "became",
            "had become",
            "have become"
          ],
          "answer": 0,
          "explanation": "Kademeli ve devam eden teknolojik bir evrim süreci anlatıldığı için 'are becoming' en doğru tercihtir."
        },
        "explainedAnswer": "Doğru yanıt A (are becoming). Süregelen trend ve kademeli gelişim Present Continuous ile aktarılır.",
        "signals": [
          "getting better",
          "rising",
          "growing",
          "becoming"
        ]
      },
      "B2": {
        "title": "'Always' ile Rahatsızlık/Şikayet ve Anlam Değiştiren Stative Fiiller",
        "basicMeaning": "Sürekli tekrarlanan sinir bozucu alışkanlıklar ve anlamı değişen durum fiilleri (think, have, see, taste).",
        "usages": [
          "Always / constantly ile eleştiri ve bıkkınlık bildirme",
          "Think: fikir (stative) vs düşünme süreci (dynamic: I am thinking)",
          "Have: sahip olma (stative) vs aktivite (dynamic: having lunch)",
          "See: görme (stative) vs görüşme/randevu (dynamic: seeing a doctor)"
        ],
        "nonUsages": [
          "Saf durum bildiren stative fiiller (know, belong, understand asla -ing almaz)"
        ],
        "positiveFormula": "Subject + is/are + always/constantly + V-ing (Eleştiri) / S + am/is/are thinking/having",
        "negativeFormula": "Why are you constantly interrupting me?",
        "questionFormula": "Are you seeing someone right now?",
        "shortAnswers": "Yes, I am.",
        "subjectVerbAgreement": "Özneye göre be çekimi kusursuz uygulanır.",
        "verbForm": "V-ing",
        "auxiliaryVerb": "am / is / are",
        "timeMarkers": [
          "always (şikayet)",
          "constantly",
          "continually",
          "forever",
          "right now (düşünme)"
        ],
        "signalWords": [
          "always complaining",
          "having dinner",
          "thinking about"
        ],
        "timeline": "Normalden fazla tekrarlanan ve rahatsız eden eylem sıklığı.",
        "examples": [
          "He is always leaving his dirty dishes in the sink!",
          "I think she is brilliant, but right now I am thinking about our financial budget."
        ],
        "exampleTr": [
          "Sürekli kirli bulaşıklarını lavaboda bırakıyor! (Şikayet)"
        ],
        "code": "Always + V-ing = Şikayet/Eleştiri! Stative Anlam Değişimi: think(fikir)=V1, think(planlama)=V-ing!",
        "visualMemory": "Kaşlarını çatmış öfkeli emoji ve kafasında düşünce balonu olan adam 😠💭",
        "commonMistake": "'always' zarfını sadece geniş zaman sanmak; şikayet anlamında continuous ile kullanıldığını unutmak.",
        "correctWrongContrast": {
          "wrong": "I am having two brothers.",
          "correct": "I have two brothers.",
          "note": "'have' sahip olmak anlamında stative'dir, continuous almaz. Ancak 'having lunch' eylemdir, alır.",
          "explanation": "'have' sahip olmak anlamında stative'dir, continuous almaz. Ancak 'having lunch' eylemdir, alır."
        },
        "differenceFromSimilarTense": "He always leaves early (tarafsız tespit) vs He is always leaving early (şikayet/eleştiri).",
        "levelTactic": "Fiile dikkat et: 'think' fikir belirtiyorsa 'I think', kafa yorma eylemiyse 'I am thinking'. 'have' sahiplikse 'has', yemek/parti ise 'is having'.",
        "miniTest": {
          "question": "I ---- that the new proposal is viable, but the committee ---- whether the cost is justifiable.",
          "options": [
            "believe / is currently considering",
            "am believing / considers",
            "believed / will consider",
            "have believed / considered",
            "believe / had considered"
          ],
          "answer": 0,
          "explanation": "'Believe' saf stative fiildir, asla -ing almaz (believe). 'Consider' ise şu an masada tartışılan dinamik süreçtir (is currently considering)."
        },
        "explainedAnswer": "Doğru yanıt A (believe / is currently considering). Stative kısıtlaması ve anlık süreç dinamiği bu seçeneği zorunlu kılar.",
        "signals": [
          "always complaining",
          "having dinner",
          "thinking about"
        ]
      },
      "C1": {
        "title": "Sosyoekonomik Dönüşümler ve Geçici Paradigma Değişimleri",
        "basicMeaning": "Toplumsal, kurumsal veya bilimsel alanlarda sürmekte olan köklü dönüşümler.",
        "usages": [
          "Toplumsal paradigmaların evrimi",
          "Akademik alanlarda geçici metodolojik eğilimler"
        ],
        "nonUsages": [
          "Tamamlanıp kapanmış tarihi dönemler"
        ],
        "positiveFormula": "Institutional / Societal Subject + is/are currently undergoing / transitioning",
        "negativeFormula": "Traditional sectors are not adapting quickly enough.",
        "questionFormula": "To what extent is modern society redefining ethical boundaries?",
        "shortAnswers": "To a significant degree.",
        "subjectVerbAgreement": "Topluluk isimlerinde bağlama göre tekil/çoğul uyumu.",
        "verbForm": "V-ing",
        "auxiliaryVerb": "is / are",
        "timeMarkers": [
          "currently",
          "presently",
          "at this historical juncture",
          "in this transitional era"
        ],
        "signalWords": [
          "undergoing",
          "redefining",
          "transitioning",
          "shifting"
        ],
        "timeline": "Tarihsel bir geçiş koridoru [Dönüşüm Süreci].",
        "examples": [
          "Higher education institutions are currently restructuring their curricula to integrate artificial intelligence.",
          "The pharmaceutical sector is transitioning toward individualized genetic therapies."
        ],
        "exampleTr": [
          "Yükseköğretim kurumları şu anda müfredatlarını yapay zekayı entegre edecek şekilde yeniden yapılandırıyor."
        ],
        "code": "Kurumsal Dönüşüm = is/are currently restructuring / shifting!",
        "visualMemory": "Yenilenen fabrika otomasyonu ve dijitalleşen küresel harita 🌐🏭",
        "commonMistake": "Süregelen kurumsal dönüşümleri Simple Past veya Present Perfect Simple ile kapatmak.",
        "correctWrongContrast": {
          "wrong": "Modern corporations completely adapted to remote work at present.",
          "correct": "Modern corporations are currently adapting to remote work.",
          "note": "'at present / currently' süregelen uyum sürecini continuous ile gerektirir.",
          "explanation": "'at present / currently' süregelen uyum sürecini continuous ile gerektirir."
        },
        "differenceFromSimilarTense": "Present Perfect tamamlanmış adaptasyonu, Present Continuous ise adaptasyonun sancılı sürecini anlatır.",
        "levelTactic": "'currently, at present, at this juncture' ve dönüşüm fiilleri (restructure, adapt, transition) görünce Present Continuous ara.",
        "miniTest": {
          "question": "At this historical juncture, biomedical researchers ---- the boundaries of synthetic biology.",
          "options": [
            "are redefining",
            "redefined",
            "have redefined",
            "had redefined",
            "redefine"
          ],
          "answer": 0,
          "explanation": "'At this historical juncture' sürmekte olan çağdaş süreci ifade eder: 'are redefining'."
        },
        "explainedAnswer": "Doğru yanıt A (are redefining). Sürmekte olan çağdaş dönüşümler continuous gerektirir.",
        "signals": [
          "undergoing",
          "redefining",
          "transitioning",
          "shifting"
        ]
      },
      "C2": {
        "title": "Söylem Analizinde Dinamik Vurgu ve Geçici Hipotezleme",
        "basicMeaning": "Akademik söylemde yazarın hipotezi mutlaklaştırmadan geçici bir tartışma olarak sunması.",
        "usages": [
          "Geçici tez sunumu (I am proposing a tentative framework)",
          "Dinamik tartışma yürütme (The authors are arguing from a revisionist standpoint)"
        ],
        "nonUsages": [
          "Klasik dogmatik sav bildirimleri"
        ],
        "positiveFormula": "Scholar + is currently positing / conceptualizing",
        "negativeFormula": "We are not asserting that the previous paradigm was entirely flawed.",
        "questionFormula": "Why is the theorist reframing the core premise?",
        "shortAnswers": "To accommodate emerging empirical anomalies.",
        "subjectVerbAgreement": "Tekil araştırmacı özneleri tekil yardımcı fiil 'is' alır.",
        "verbForm": "V-ing",
        "auxiliaryVerb": "is / are",
        "timeMarkers": [
          "for the purposes of this paper",
          "tentatively",
          "presently"
        ],
        "signalWords": [
          "tentatively proposing",
          "currently conceptualizing"
        ],
        "timeline": "Söylem anında inşa edilen düşünsel süreç.",
        "examples": [
          "In this monograph, the historian is deliberately challenging conventional interpretations of the treaty.",
          "We are tentatively suggesting that neural plasticity extends further into adulthood than previously acknowledged."
        ],
        "exampleTr": [
          "Bu monografta tarihçi, antlaşmanın geleneksel yorumlarına bilinçli olarak meydan okumaktadır."
        ],
        "code": "Akademik Geçici Hipotez = is tentatively suggesting / proposing!",
        "visualMemory": "Yazarın taslak makale üzerinde notlar alarak tezini geliştirmesi ✍️📑",
        "commonMistake": "Her akademik fiilin sadece Simple Present olduğunu düşünüp dinamik söylem tonunu kaçırmak.",
        "correctWrongContrast": {
          "wrong": "In this chapter, I will be write about...",
          "correct": "In this chapter, I am exploring...",
          "note": "Yazar metin içinde okuyucuyla birlikte konuyu keşfederken continuous tonunu kullanır.",
          "explanation": "Yazar metin içinde okuyucuyla birlikte konuyu keşfederken continuous tonunu kullanır."
        },
        "differenceFromSimilarTense": "Simple Present kesin bir kural sunarken, Continuous akademik tevazu ve geçici keşif tonu katar.",
        "levelTactic": "'tentatively, exploratory, for current purposes' gibi ihtiyatlı akademik zarflara eşlik eden continuous yapıları tanı.",
        "miniTest": {
          "question": "Rather than establishing a dogma, the essayist ---- a series of speculative questions regarding digital identity.",
          "options": [
            "is merely raising",
            "raised merely",
            "had merely raised",
            "was merely raised",
            "has merely been raised"
          ],
          "answer": 0,
          "explanation": "Yazarın metin içindeki dinamik ve spekülatif tutumu 'is merely raising' ile yansıtılır."
        },
        "explainedAnswer": "Doğru yanıt A (is merely raising). Dinamik deneme üslubunda yazar anlık sorgulama yürütür.",
        "signals": [
          "tentatively proposing",
          "currently conceptualizing"
        ]
      },
      "YDS": {
        "title": "ÖSYM'nin 'Şu An' Sinyalleri, Stative Tuzakları ve Kademeli Artış Soruları",
        "basicMeaning": "YDS'de 'currently, at present, increasingly' sinyalleriyle Present Continuous tespiti.",
        "usages": [
          "Currently / at present / now ipuçları",
          "Increase / decrease / decline gibi trend fiilleri",
          "Stative fiil eleme kuralı (want, know, understand continuous alamaz)"
        ],
        "nonUsages": [
          "Stative fiillerin (belong, seem, resemble) seçeneklerde continuous verilmesi"
        ],
        "positiveFormula": "Subject + is/are currently + V-ing",
        "negativeFormula": "The sector is not recovering at the expected pace.",
        "questionFormula": "Are atmospheric greenhouse levels continually accelerating?",
        "shortAnswers": "Yes, they are.",
        "subjectVerbAgreement": "ÖSYM sorusunda özne çoğulsa 'are', tekilse 'is' ayrımına dikkat edilir.",
        "verbForm": "V-ing",
        "auxiliaryVerb": "is / are",
        "timeMarkers": [
          "currently",
          "at present",
          "right now",
          "nowadays",
          "increasingly",
          "gradually"
        ],
        "signalWords": [
          "currently being developed",
          "is rising",
          "are shifting"
        ],
        "timeline": "Sınav Sorusu: [Şu Anda Devam Eden Trend / Süreç]",
        "examples": [
          "Marine biologists warn that ocean temperatures are rising at an unprecedented rate.",
          "A multinational consortium is currently designing an advanced satellite constellation."
        ],
        "exampleTr": [
          "Deniz biyologları, okyanus sıcaklıklarının eşi benzeri görülmemiş bir hızla yükselmekte olduğu konusunda uyarıyor."
        ],
        "code": "YDS İpucu: 'currently / at present / increasingly' = am/is/are + V-ing!",
        "visualMemory": "ÖSYM Soru Kitapçığında 'currently' kelimesinin sarı fosforlu kalemle çizilmesi ✏️📄",
        "commonMistake": "'currently' gördüğü halde geçmiş zamana veya Past Perfect'e gitmek.",
        "correctWrongContrast": {
          "wrong": "Solar efficiency was currently improving.",
          "correct": "Solar efficiency is currently improving.",
          "note": "'Currently' present zaman dilimidir, geçmiş yardımcı fiille kullanılmaz.",
          "explanation": "'Currently' present zaman dilimidir, geçmiş yardımcı fiille kullanılmaz."
        },
        "differenceFromSimilarTense": "ÖSYM Simple Present ile genel gerçeği, Present Continuous ile anlık trendi (increasingly) sorar.",
        "levelTactic": "Soru kökünde 'currently, at present, increasingly, rapidly' gördüğün an seçeneklerde am/is/are + V-ing ve passive türevi am/is/are being V3 ara.",
        "miniTest": {
          "question": "Geophysicists observe that tectonic stress along the fault line ---- at an accelerating pace, which ---- the likelihood of an impending seismic event.",
          "options": [
            "is accumulating / increases",
            "accumulated / will increase",
            "has accumulated / increased",
            "will accumulate / was increasing",
            "is accumulating / had increased"
          ],
          "answer": 0,
          "explanation": "İlk boşluk 'at an accelerating pace' ile süregelen birikimi (is accumulating), ikinci boşluk ise bu durumun genel sonucunu (increases) verir."
        },
        "explainedAnswer": "Doğru yanıt A (is accumulating / increases). Süregelen birikim süreci continuous, doğurduğu genel sonuç ise Simple Present ile aktarılır.",
        "signals": [
          "currently being developed",
          "is rising",
          "are shifting"
        ]
      }
    }
  },
  {
    "slug": "simple-past",
    "name": "Simple Past Tense",
    "turkish": "Geçmiş Zaman (Dili Geçmiş)",
    "emoji": "🏛️",
    "summary": "Geçmişte belirli bir zamanda tamamlanmış eylemler, art arda gerçekleşen tarihi olaylar ve geçmiş alışkanlıklar.",
    "levels": {
      "A1": {
        "title": "Geçmişte Tamamlanan Olaylar ve Düzenli/Düzensiz Fiiller",
        "basicMeaning": "Geçmişte belirli bir zamanda olup bitmiş eylemler.",
        "usages": [
          "Dün veya geçen hafta yapılan eylemler",
          "Geçmiş kişisel hatıralar"
        ],
        "nonUsages": [
          "Halen devam etmekte olan eylemler",
          "Gelecek planları"
        ],
        "positiveFormula": "Subject + V2 (regular: -ed, irregular: went, saw, bought)",
        "negativeFormula": "Subject + did not (didn't) + V1",
        "questionFormula": "Did + Subject + V1?",
        "shortAnswers": "Yes, I did. / No, I didn't.",
        "subjectVerbAgreement": "Tüm şahıslarda fiilin 2. hali (V2) aynıdır (I went, she went). Olumsuz ve soruda did gelince fiil V1'e döner.",
        "verbForm": "Olumluda V2, olumsuz ve soruda yalın V1.",
        "auxiliaryVerb": "did / was / were",
        "timeMarkers": [
          "yesterday",
          "last night",
          "two days ago",
          "in 2015",
          "when I was a child"
        ],
        "signals": [
          "yesterday",
          "last",
          "ago",
          "in + geçmiş yıl"
        ],
        "timeline": "Geçmişte başlayıp tamamen bitmiş kapalı nokta: [••• X (BİTTİ) ••• Şimdi]",
        "examples": [
          "I visited my grandparents yesterday.",
          "She bought a new car last month."
        ],
        "exampleTr": [
          "Dün büyükanne ve büyükbabamı ziyaret ettim."
        ],
        "code": "Geçmiş = V2 | Soru/Olumsuz = did + V1!",
        "visualMemory": "Yırtılıp çöpe atılmış dünkü takvim yaprağı ve antik sütun 📅🏛️",
        "commonMistake": "'did' varken fiili tekrar V2 yapmak (*I didn't went*).",
        "correctWrongContrast": {
          "wrong": "He didn't went to school yesterday.",
          "correct": "He didn't go to school yesterday.",
          "note": "'didn't' yardımcı fiilinden sonra ana fiil daima yalın (V1) gelir.",
          "explanation": "'didn't' yardımcı fiilinden sonra ana fiil daima yalın (V1) gelir."
        },
        "differenceFromSimilarTense": "Present Perfect ile farkı: Simple Past'ta 'yesterday, ago' gibi net geçmiş zaman verilir; Present Perfect'te net geçmiş zaman verilmez.",
        "levelTactic": "'yesterday, ago, last' gördüğün an olumlu cümlede V2, olumsuz/soruda 'did + V1' seç.",
        "miniTest": {
          "question": "Thomas Edison ---- the incandescent light bulb in 1879.",
          "options": [
            "patented",
            "has patented",
            "is patenting",
            "patents",
            "had been patented"
          ],
          "answer": 0,
          "explanation": "'In 1879' kesin geçmiş zaman işaretçisidir; Simple Past (patented) kullanılır."
        },
        "explainedAnswer": "Doğru yanıt A (patented). 'In 1879' belirli bir geçmiş yıl olduğu için V2 gereklidir.",
        "signalWords": [
          "yesterday",
          "last",
          "ago",
          "in + geçmiş yıl"
        ]
      },
      "A2": {
        "title": "Ardışık Geçmiş Olaylar ve 'was/were'",
        "basicMeaning": "Geçmişte birbiri ardına sıralanan eylemler ve geçmiş durumlar (was/were).",
        "usages": [
          "Hikaye anlatımında peş peşe yapılan işler (came home, took a shower, slept)",
          "Geçmiş durum bildiren be fiili (was/were)"
        ],
        "nonUsages": [
          "Şu ana uzanan süreçler"
        ],
        "positiveFormula": "Subject + was/were (durum) / Subject + V2 (eylem)",
        "negativeFormula": "Subject + wasn't/weren't / Subject + didn't + V1",
        "questionFormula": "Were you tired yesterday? / Did you finish the project?",
        "shortAnswers": "Yes, I was. / No, we didn't.",
        "subjectVerbAgreement": "I, he, she, it -> was; you, we, they -> were.",
        "verbForm": "was / were / V2",
        "auxiliaryVerb": "did / was / were",
        "timeMarkers": [
          "then",
          "after that",
          "suddenly",
          "in those days",
          "at that time"
        ],
        "signals": [
          "first... then...",
          "ago",
          "last week"
        ],
        "timeline": "Geçmişte sıralı adımlar: [1. Olay] -> [2. Olay] -> [3. Olay] ---> [Şimdi]",
        "examples": [
          "He arrived at the office, opened his laptop, and checked his urgent emails.",
          "They were very tired after the long journey."
        ],
        "exampleTr": [
          "Ofise vardı, dizüstü bilgisayarını açtı ve acil e-postalarını kontrol etti."
        ],
        "code": "Ardışık Olaylar = V2, V2 and V2!",
        "visualMemory": "Film şeridinde arka arkaya dizilmiş geçmiş kareler 🎞️🎬",
        "commonMistake": "'was' ile normal eylem fiilini yanlış birleştirmek (*He was arrive*).",
        "correctWrongContrast": {
          "wrong": "He was arrive late yesterday.",
          "correct": "He arrived late yesterday.",
          "note": "Eylem fiilinde 'was' kullanılmaz, doğrudan V2 (arrived) kullanılır.",
          "explanation": "Eylem fiilinde 'was' kullanılmaz, doğrudan V2 (arrived) kullanılır."
        },
        "differenceFromSimilarTense": "Past Continuous o anda süren arka planı, Simple Past ise o anda gerçekleşen eylemi anlatır.",
        "levelTactic": "'and' veya virgüllerle birbirine bağlanan ardışık eylemlerde tüm fiiller aynı zamanda (V2) kalmalıdır.",
        "miniTest": {
          "question": "The detective entered the crime scene, ---- around carefully, and noted down the anomalies.",
          "options": [
            "looked",
            "was looking",
            "has looked",
            "had been looking",
            "looks"
          ],
          "answer": 0,
          "explanation": "Ardışık eylem zinciri: entered, looked, noted (tümü Simple Past)."
        },
        "explainedAnswer": "Doğru yanıt A (looked). Arka arkaya sıralanan geçmiş olaylarda zaman uyumu gereği V2 seçilir.",
        "signalWords": [
          "first... then...",
          "ago",
          "last week"
        ]
      },
      "B1": {
        "title": "Geçmiş Alışkanlıklar ve Belirli Tarihsel Noktalar",
        "basicMeaning": "Artık devam etmeyen eski alışkanlıklar ve net tarihli olaylar.",
        "usages": [
          "Eski alışkanlıklar (When I was young, I played tennis)",
          "Tarihte kesin gerçekleşmiş devrimler ve keşifler"
        ],
        "nonUsages": [
          "Bugüne sarkan veya etkisi süren durumlar"
        ],
        "positiveFormula": "Subject + V2 / Subject + used to + V1",
        "negativeFormula": "Subject + did not use to + V1",
        "questionFormula": "Did civilizations in antiquity use solar calendars?",
        "shortAnswers": "Yes, they did.",
        "subjectVerbAgreement": "Tüm şahıslar için V2 kuralı değişmez.",
        "verbForm": "V2",
        "auxiliaryVerb": "did",
        "timeMarkers": [
          "in ancient times",
          "during the Ottoman era",
          "in the 19th century",
          "throughout his lifetime"
        ],
        "signals": [
          "ancient",
          "century",
          "era",
          "in 1945"
        ],
        "timeline": "Tarihte kapanmış bir çağ veya dönem kutusu: [--- Antik Çağ ---] ---> [Bugün]",
        "examples": [
          "The Roman Empire collapsed after prolonged internal turmoil and barbarian incursions.",
          "During the industrial revolution, millions of workers moved to urban centers."
        ],
        "exampleTr": [
          "Roma İmparatorluğu, uzun süren iç karışıklıklar ve barbar akınlarının ardından çöktü."
        ],
        "code": "Tarihsel Net Olay (in the 19th century) = DAİMA Simple Past (V2)!",
        "visualMemory": "Antik Roma harabeleri ve eski bir tarih kitabı 🏛️📜",
        "commonMistake": "'in the 19th century' gibi net tarih varken Present Perfect (has collapsed) seçmek.",
        "correctWrongContrast": {
          "wrong": "The treaty has been signed in 1919.",
          "correct": "The treaty was signed in 1919.",
          "note": "Net geçmiş tarih içeren cümlelerde Present Perfect asla kullanılmaz, Simple Past kullanılır.",
          "explanation": "Net geçmiş tarih içeren cümlelerde Present Perfect asla kullanılmaz, Simple Past kullanılır."
        },
        "differenceFromSimilarTense": "Present Perfect 'etkisi süren' geçmişken, Simple Past 'tarihi belirlenmiş ve kapanmış' olaydır.",
        "levelTactic": "'in the 20th century, during the war, in 1923' gibi ifadeler görünce diğer tüm zamanları eleyip V2 veya was/were V3 ara.",
        "miniTest": {
          "question": "The printing press, which ---- by Gutenberg around 1440, revolutionized the dissemination of knowledge across Europe.",
          "options": [
            "was developed",
            "has been developed",
            "is developed",
            "had been developing",
            "was developing"
          ],
          "answer": 0,
          "explanation": "'Around 1440' belirli geçmiş tarih olduğu için pasif Simple Past (was developed) kullanılır."
        },
        "explainedAnswer": "Doğru yanıt A (was developed). 1440 yılı net geçmiş zaman bildirdiğinden Simple Past passive formu doğrudur.",
        "signalWords": [
          "ancient",
          "century",
          "era",
          "in 1945"
        ]
      },
      "B2": {
        "title": "Past Tense Uyumu ve 'Since' Kuralındaki Konumu",
        "basicMeaning": "Since bağlacının yan cümlesinde başlangıç noktası olarak V2 kullanımı.",
        "usages": [
          "Since + Simple Past (V2), Main Clause + Present Perfect (have/has V3)",
          "When ve As soon as ile geçmişte birbirini tetikleyen eylemler"
        ],
        "nonUsages": [
          "Since'li yan cümlenin içinde Present Perfect kullanımı"
        ],
        "positiveFormula": "Main Clause [have/has + V3] + since + Subject + V2",
        "negativeFormula": "No new legislation has passed since the council adjourned.",
        "questionFormula": "How many patents have been filed since the laboratory was founded?",
        "shortAnswers": "Over fifty patents.",
        "subjectVerbAgreement": "Since'den sonraki özneye göre V2 fiil kullanılır.",
        "verbForm": "V2 (Since cümlesinde)",
        "auxiliaryVerb": "did / was / were",
        "timeMarkers": [
          "since + point in past",
          "ever since",
          "since he graduated"
        ],
        "signals": [
          "SINCE + V2 kuralı",
          "past trigger"
        ],
        "timeline": "[Geçmiş Başlangıç Noktası (V2)] ===== Süreç (have/has V3) =====> [Şu An]",
        "examples": [
          "Global carbon concentrations have risen exponentially since the Industrial Revolution began.",
          "She has held the executive chair since the company was privatized in 2010."
        ],
        "exampleTr": [
          "Sanayi Devrimi başladığından beri küresel karbon yoğunluğu katlanarak arttı."
        ],
        "code": "YDS Altın Formülü: SINCE + V2, HAVE/HAS V3!",
        "visualMemory": "Köprü metaforu: Köprünün başlangıç ayağı geçmişte çakılı (Since + V2), köprünün kendisi bugüne uzanır 🌉",
        "commonMistake": "Since'in bağlı olduğu yan cümleye have/has V3 koymak (*since he has graduated*).",
        "correctWrongContrast": {
          "wrong": "Since the institute has opened in 2005, it produced many scholars.",
          "correct": "Since the institute opened in 2005, it has produced many scholars.",
          "note": "Since'li taraf V2, ana cümle Present Perfect (has produced) olur.",
          "explanation": "Since'li taraf V2, ana cümle Present Perfect (has produced) olur."
        },
        "differenceFromSimilarTense": "For + süre bildirirken, Since + V2 başlangıç eylemini bildirir.",
        "levelTactic": "Soru kökünde 'since' gördüğünde since'in hemen yanındaki boşluğa V2, ana cümledeki boşluğa have/has V3 koy.",
        "miniTest": {
          "question": "Ever since the new digital security framework ---- last November, unauthorized data breaches ---- by eighty percent.",
          "options": [
            "was implemented / have declined",
            "is implemented / declined",
            "has been implemented / decline",
            "was implemented / had declined",
            "had been implemented / declined"
          ],
          "answer": 0,
          "explanation": "'Ever since' yan cümlesi V2 (was implemented), ana cümle Present Perfect (have declined) gerektirir."
        },
        "explainedAnswer": "Doğru yanıt A (was implemented / have declined). Since kuralına göre yan cümle Simple Past, ana cümle Present Perfect olur.",
        "signalWords": [
          "SINCE + V2 kuralı",
          "past trigger"
        ]
      },
      "C1": {
        "title": "Tarihsel Nedensellik ve Hipotetik Zaman Kaymaları",
        "basicMeaning": "Tarihsel olayların sebep-sonuç zinciri ve ikinci koşul (Type 2) gerçek dışı durumlar.",
        "usages": [
          "Tarih yazımında kurumsal çökmelerin doğrudan nedenleri",
          "Unreal present / Type 2 conditionals (If I knew, I would tell)"
        ],
        "nonUsages": [
          "Gerçekleşmiş geçmiş koşullar (Type 3)"
        ],
        "positiveFormula": "If + Subject + V2, Subject + would + V1",
        "negativeFormula": "If the government did not intervene, monopolies would dominate.",
        "questionFormula": "What would happen if the magnetic poles reversed?",
        "shortAnswers": "Communications would falter.",
        "subjectVerbAgreement": "Type 2 conditional yapısında 'be' fiili tüm şahıslarda geleneksel olarak 'were' tercih edilir.",
        "verbForm": "V2 (were)",
        "auxiliaryVerb": "were / did",
        "timeMarkers": [
          "at that critical juncture",
          "inevitably",
          "consequently"
        ],
        "signals": [
          "if + V2, would V1",
          "historical catalyst"
        ],
        "timeline": "Şu anki gerçekliğin zıttı hipotetik paralel evren.",
        "examples": [
          "If society lacked institutional trust, complex financial systems would instantly disintegrate.",
          "The sudden devaluation of the currency triggered widespread social protests throughout the capital."
        ],
        "exampleTr": [
          "Toplum kurumsal güvenden yoksun olsaydı, karmaşık finansal sistemler anında çökerdi."
        ],
        "code": "Type 2 Şart: If + V2, would + V1 (Şu anki gerçeğin zıttı)!",
        "visualMemory": "Ayna yansıması: Bir tarafta bugünün hayali (V2), diğer tarafta varsayımsal sonuç (would V1) 🪞",
        "commonMistake": "Type 2 koşulda yan cümleye would koymak (*If I would have money*).",
        "correctWrongContrast": {
          "wrong": "If the regulatory agency would enforce the rules, fraud would decrease.",
          "correct": "If the regulatory agency enforced the rules, fraud would decrease.",
          "note": "If cümlesine would gelmez, Simple Past (enforced) gelir.",
          "explanation": "If cümlesine would gelmez, Simple Past (enforced) gelir."
        },
        "differenceFromSimilarTense": "Type 1 gerçek gelecektir (If it rains, we will stay); Type 2 şu anki hayaldir (If it rained, we would stay).",
        "levelTactic": "Ana cümlede 'would + V1' gördüğünde if yan cümlesinde Simple Past (V2 / were) ara.",
        "miniTest": {
          "question": "If urban planners ---- sustainable transit systems, carbon emissions in major cities ---- substantially lower today.",
          "options": [
            "prioritized / would be",
            "prioritize / will be",
            "had prioritized / are",
            "would prioritize / were",
            "prioritize / would have been"
          ],
          "answer": 0,
          "explanation": "Bugünkü varsayımsal durum (Type 2): 'prioritized' (V2) ve 'would be' doğru eşleşmedir."
        },
        "explainedAnswer": "Doğru yanıt A (prioritized / would be). Günümüze gönderme yapan hayali koşullarda Simple Past + would V1 kullanılır.",
        "signalWords": [
          "if + V2, would V1",
          "historical catalyst"
        ]
      },
      "C2": {
        "title": "Arşivsel Dokümantasyon ve Tarihsel Dizin Dili",
        "basicMeaning": "Arşiv kayıtlarında, diplomatik antlaşmalarda ve tarihsel kroniklerde kesin aktarım.",
        "usages": [
          "Diplomatik metinlerin imzalanma ve yürürlük kayıtları",
          "Arşivsel bulguların orijinal bağlamı"
        ],
        "nonUsages": [
          "Yorumlayıcı geniş zaman çıkarımları"
        ],
        "positiveFormula": "The signatories ratified the treaty on [Date]",
        "negativeFormula": "The delegate refused to sign the accord.",
        "questionFormula": "On what constitutional grounds did the tribunal nullify the decree?",
        "shortAnswers": "On the basis of procedural violations.",
        "subjectVerbAgreement": "Resmi belgelerde özne-fiil uyumu titizlikle izlenir.",
        "verbForm": "V2",
        "auxiliaryVerb": "did / was / were",
        "timeMarkers": [
          "upon ratification",
          "in the inaugural session",
          "subsequent to the armistice"
        ],
        "signals": [
          "ratified",
          "enacted",
          "decreed",
          "annexed"
        ],
        "timeline": "Arşivde mühürlenmiş kesin tarih noktası.",
        "examples": [
          "On October 24, 1945, fifty nations officially ratified the United Nations Charter.",
          "The assembly dissolved the parliament following weeks of constitutional deadlock."
        ],
        "exampleTr": [
          "24 Ekim 1945'te elli ülke Birleşmiş Milletler Şartı'nı resmi olarak onayladı."
        ],
        "code": "Arşiv Kaydı = Kesin Tarih + V2!",
        "visualMemory": "Balmumu mühürlü tarihi antlaşma metni ve tüy kalem 📜🖋️",
        "commonMistake": "Tarihi antlaşma ve kanun metinlerinde 'has ratified' gibi tamamlanmamış hissi veren zamanlar kullanmak.",
        "correctWrongContrast": {
          "wrong": "The parliament has enacted the law in the extraordinary session of 1921.",
          "correct": "The parliament enacted the law in the extraordinary session of 1921.",
          "note": "Kesin oturum ve yıl bilgisi Simple Past (enacted) gerektirir.",
          "explanation": "Kesin oturum ve yıl bilgisi Simple Past (enacted) gerektirir."
        },
        "differenceFromSimilarTense": "Historic Present dramatik anlatımken, arşivsel Simple Past kesin hukuki olgudur.",
        "levelTactic": "Soru metninde spesifik ay, gün ve yıl verilen antlaşma veya yasa cümlelerinde V2 seçeneğini kaçırma.",
        "miniTest": {
          "question": "The constitutional assembly formally ---- the decree on May 18, 1848, thereby inaugurating the federation.",
          "options": [
            "promulgated",
            "has promulgated",
            "was promulgating",
            "had promulgated",
            "promulgates"
          ],
          "answer": 0,
          "explanation": "'On May 18, 1848' kesin tarihiyle doğrudan Simple Past (promulgated) gerektirir."
        },
        "explainedAnswer": "Doğru yanıt A (promulgated). Kesin tarih verilen resmi kayıtlarda Simple Past kullanılır.",
        "signalWords": [
          "ratified",
          "enacted",
          "decreed",
          "annexed"
        ]
      },
      "YDS": {
        "title": "ÖSYM'nin 'Geçmiş Zaman' Tuzakları, Tarih Sinyalleri ve Eleme Stratejisi",
        "basicMeaning": "YDS'de kesin tarih ifadeleri (in the 19th century, during WWII) ve eleme taktiği.",
        "usages": [
          "Net tarih içeren cümlelerde tek doğru seçenek (Simple Past)",
          "Past-Past zaman uyumu",
          "When / after gibi bağlaçlarla sıralı geçmiş eylemler"
        ],
        "nonUsages": [
          "Net tarih olan cümlede Present Perfect veya Present Continuous kullanımı"
        ],
        "positiveFormula": "Subject + V2 (Past Time Marker)",
        "negativeFormula": "Subject + did not + V1",
        "questionFormula": "Why did early agrarian societies settle along fertile river valleys?",
        "shortAnswers": "Because water resources ensured agricultural sustainability.",
        "subjectVerbAgreement": "ÖSYM soru kökündeki uzun özne öbekleri V2 seçimini etkilemez (tüm öznelerde V2 aynıdır).",
        "verbForm": "V2 / was / were",
        "auxiliaryVerb": "did",
        "timeMarkers": [
          "in the 19th century",
          "during the Middle Ages",
          "in 1914",
          "anciently",
          "initially"
        ],
        "signals": [
          "in + past year",
          "during antiquity",
          "ago",
          "first developed"
        ],
        "timeline": "Sınav Soru Kökü: [Geçmişte Net Tarih / Tarihi Dönem] ===> Kesin V2 Bölgesi",
        "examples": [
          "Archaeologists discovered an extensive Bronze Age settlement during excavations in central Anatolia.",
          "In the late nineteenth century, the advent of rail transport revolutionized international commerce."
        ],
        "exampleTr": [
          "Arkeologlar, Orta Anadolu'daki kazılar sırasında geniş bir Tunç Çağı yerleşimi keşfettiler."
        ],
        "code": "YDS Kuralı: 'in the 19th century, during antiquity' = %100 Simple Past (V2)!",
        "visualMemory": "ÖSYM Soru Kitapçığında 'in 1920' ifadesinin yuvarlak içine alınıp V2 seçeneğine ok çekilmesi 🎯📄",
        "commonMistake": "Cümlede 'in the 19th century' gördüğü halde Past Perfect (had V3) veya Present Perfect işaretlemek.",
        "correctWrongContrast": {
          "wrong": "In 1905, Albert Einstein has published his paper on special relativity.",
          "correct": "In 1905, Albert Einstein published his paper on special relativity.",
          "note": "1905 yılı bellidir; Present Perfect kesinlikle gelemez.",
          "explanation": "1905 yılı bellidir; Present Perfect kesinlikle gelemez."
        },
        "differenceFromSimilarTense": "Had V3 için 'başka bir geçmiş olaydan daha önce olma' şartı gerekir; tek başına duran 1905 yılı sadece V2 ister!",
        "levelTactic": "Soru kökünde 'in 1930, in the 18th century, ago' görürsen seçeneklerdeki tüm Present (have/has, is/are, V1) ve Future (will) şıklarını hemen ele!",
        "miniTest": {
          "question": "During the Renaissance, European cartographers ---- increasingly accurate navigation charts that ---- maritime exploration.",
          "options": [
            "produced / facilitated",
            "have produced / facilitate",
            "produced / had facilitated",
            "were producing / will facilitate",
            "had produced / facilitate"
          ],
          "answer": 0,
          "explanation": "'During the Renaissance' dönemi geçmiştedir. İki taraf da sıralı ve uyumlu olarak Simple Past (produced / facilitated) olmalıdır."
        },
        "explainedAnswer": "Doğru yanıt A (produced / facilitated). Rönesans dönemi anlatımı geçmiş zaman uyumu gerektirir.",
        "signalWords": [
          "in + past year",
          "during antiquity",
          "ago",
          "first developed"
        ]
      }
    }
  },
  {
    "slug": "past-continuous",
    "name": "Past Continuous Tense",
    "turkish": "Geçmişte Süregelen Zaman",
    "emoji": "🎬",
    "summary": "Geçmişte belirli bir anda devam etmekte olan olaylar, arka plan anlatımları, başka bir eylemle bölünen süreçler ve while/as/when kullanımları.",
    "levels": {
      "A1": {
        "title": "Geçmişte Belirli Saatte Devam Eden Eylemler",
        "basicMeaning": "Dün belirli bir saatte (örn. saat 8'de) tam o anda yapılmakta olan eylemler.",
        "usages": [
          "Dün belirli bir saatte devam eden eylemler (At 8 pm yesterday, I was studying)",
          "Geçmiş anlık durumlar"
        ],
        "nonUsages": [
          "Tüm güne yayılan kalıcı geçmiş alışkanlıklar"
        ],
        "positiveFormula": "Subject + was/were + V-ing",
        "negativeFormula": "Subject + was/were not + V-ing",
        "questionFormula": "Were you sleeping at 11 pm yesterday?",
        "shortAnswers": "Yes, I was. / No, we weren't.",
        "subjectVerbAgreement": "I, he, she, it -> was; you, we, they -> were.",
        "verbForm": "was/were + V-ing",
        "auxiliaryVerb": "was / were",
        "timeMarkers": [
          "at 8 o'clock yesterday",
          "at that time yesterday",
          "all evening yesterday"
        ],
        "signals": [
          "at + specific past time",
          "this time yesterday"
        ],
        "timeline": "Geçmişte belirli bir saatin etrafında devam eden dalga: [••• (Saat 8) •••]",
        "examples": [
          "At 9 pm yesterday, I was watching a documentary.",
          "They were having dinner when the phone rang."
        ],
        "exampleTr": [
          "Dün akşam saat 9'da belgesel izliyordum."
        ],
        "code": "Dün Belirli Saatte = was/were + V-ing!",
        "visualMemory": "Duvardaki saat 20:00'yi gösterirken masada kitap okuyan öğrenci 🕗📖",
        "commonMistake": "'was/were' yardımcı fiilini unutup doğrudan 'I playing' demek.",
        "correctWrongContrast": {
          "wrong": "At 10 pm last night, he slept.",
          "correct": "At 10 pm last night, he was sleeping.",
          "note": "Geçmişteki belirli bir anda eylemin sürdüğü vurgulanıyorsa Past Continuous kullanılır.",
          "explanation": "Geçmişteki belirli bir anda eylemin sürdüğü vurgulanıyorsa Past Continuous kullanılır."
        },
        "differenceFromSimilarTense": "Simple Past eylemin o saatte başladığını veya bittiğini bildirirken, Past Continuous o saatte devam etmekte olduğunu bildirir.",
        "levelTactic": "'At 5 pm yesterday' veya 'this time yesterday' gördüğünde was/were + V-ing ara.",
        "miniTest": {
          "question": "This time yesterday, we ---- across the Aegean Sea on a ferry.",
          "options": [
            "were sailing",
            "sailed",
            "are sailing",
            "have sailed",
            "had sailed"
          ],
          "answer": 0,
          "explanation": "'This time yesterday' geçmişte o anda sürmekte olan eylemi bildirir: 'were sailing'."
        },
        "explainedAnswer": "Doğru yanıt A (were sailing). Geçmişte belirli bir anın süreci Past Continuous ile ifade edilir.",
        "signalWords": [
          "at + specific past time",
          "this time yesterday"
        ]
      },
      "A2": {
        "title": "Bölünen Geçmiş Eylemler: When ve While Kalıpları",
        "basicMeaning": "Geçmişte uzun bir eylem sürerken araya kısa bir eylemin girmesi (When + V2, was/were V-ing).",
        "usages": [
          "While + Past Continuous (uzun eylem), Simple Past (kesen eylem)",
          "When + Simple Past (kesen eylem), Past Continuous (uzun eylem)"
        ],
        "nonUsages": [
          "İki eylemin de birbirini beklemeden anında bittiği durumlar"
        ],
        "positiveFormula": "While Subject + was/were + V-ing, Subject + V2 / When Subject + V2, Subject + was/were + V-ing",
        "negativeFormula": "He wasn't paying attention when the accident happened.",
        "questionFormula": "What were you doing when the fire alarm sounded?",
        "shortAnswers": "I was writing a report.",
        "subjectVerbAgreement": "Özneye göre was veya were seçilir.",
        "verbForm": "was/were + V-ing ve V2",
        "auxiliaryVerb": "was / were / did",
        "timeMarkers": [
          "while",
          "as",
          "when",
          "just as"
        ],
        "signals": [
          "While + was/were V-ing",
          "When + V2"
        ],
        "timeline": "Uzun Süreç [==== was walking ====] ---> Kısa Olay [X (fell down)]",
        "examples": [
          "While she was walking in the park, it started to rain heavily.",
          "When the professor entered the hall, the students were discussing the exam."
        ],
        "exampleTr": [
          "Parkta yürürken şiddetli bir yağmur başladı."
        ],
        "code": "WHILE arkasına uzun eylem (was/were V-ing) sever; WHEN arkasına kısa darbe (V2) sever!",
        "visualMemory": "Yürüyen adamın ayağının taşa takılıp düşmesi 🚶‍♂️💥",
        "commonMistake": "While'ın hemen arkasına kısa fiili, when'in arkasına uzun fiili yanlış bağlamak.",
        "correctWrongContrast": {
          "wrong": "While the bell rang, we were taking notes.",
          "correct": "When the bell rang, we were taking notes.",
          "note": "Zilin çalması anlık kısa olaydır, 'when' alır; not alma süreci 'were taking'tir.",
          "explanation": "Zilin çalması anlık kısa olaydır, 'when' alır; not alma süreci 'were taking'tir."
        },
        "differenceFromSimilarTense": "When I arrived, they left (Geldim, çıktılar - ardışık); When I arrived, they were eating (Geldim, yiyorlardı - devam eden).",
        "levelTactic": "Boşluğun önündeki bağlaca bak: 'While / As' varsa was/were V-ing'e, 'When' varsa V2'ye öncelik ver.",
        "miniTest": {
          "question": "The power went out while the technicians ---- the delicate server components.",
          "options": [
            "were calibrating",
            "calibrated",
            "are calibrating",
            "have calibrated",
            "had calibrated"
          ],
          "answer": 0,
          "explanation": "'While' arkasından geçmişte devam eden uzun süreç ister: 'were calibrating'."
        },
        "explainedAnswer": "Doğru yanıt A (were calibrating). While bağlacı geçmişte süregelen arka plan sürecini gerektirir.",
        "signalWords": [
          "While + was/were V-ing",
          "When + V2"
        ]
      },
      "B1": {
        "title": "Paralel Geçmiş Eylemler ve Arka Plan Tasviri",
        "basicMeaning": "Geçmişte aynı anda yan yana devam eden iki eylem (While X was doing, Y was doing) ve hikaye arka planı.",
        "usages": [
          "İki kişinin aynı anda yaptığı eşzamanlı eylemler",
          "Roman veya hikaye başlangıçlarındaki arka plan atmosfer tasviri"
        ],
        "nonUsages": [
          "Biri bitip diğeri başlayan sıralı olaylar"
        ],
        "positiveFormula": "While Subject + was/were + V-ing, Subject + was/were + V-ing",
        "negativeFormula": "Neither of them was listening while the other was talking.",
        "questionFormula": "Were they both working while the manager was away?",
        "shortAnswers": "Yes, they were.",
        "subjectVerbAgreement": "Her iki cümlecikte de öznelerin tekil/çoğulluğuna göre was/were uyumu sağlanır.",
        "verbForm": "was/were + V-ing",
        "auxiliaryVerb": "was / were",
        "timeMarkers": [
          "while",
          "meanwhile",
          "at the same time",
          "as"
        ],
        "signals": [
          "While ... was V-ing, ... was V-ing",
          "parallel actions"
        ],
        "timeline": "İki paralel hat: [===== Eylem A =====] ve [===== Eylem B =====]",
        "examples": [
          "While the chef was preparing the main course, his assistants were chopping vegetables.",
          "The wind was howling and snow was falling relentlessly over the deserted village."
        ],
        "exampleTr": [
          "Şef ana yemeği hazırlarken, asistanları sebzeleri doğruyordu."
        ],
        "code": "Eşzamanlı Paralel Geçmiş = While was/were V-ing, was/were V-ing!",
        "visualMemory": "Bölünmüş ekranda yan yana iki aşçının aynı anda yemek pişirmesi 🍳👨‍🍳👩‍🍳",
        "commonMistake": "Eşzamanlı süren iki eylemden birini gereksiz yere Simple Past yapmak.",
        "correctWrongContrast": {
          "wrong": "While I cooked, my brother watched TV all evening.",
          "correct": "While I was cooking, my brother was watching TV all evening.",
          "note": "Bütün akşam boyunca paralel süren eylemlerde iki taraf da Past Continuous olur.",
          "explanation": "Bütün akşam boyunca paralel süren eylemlerde iki taraf da Past Continuous olur."
        },
        "differenceFromSimilarTense": "Ardışık eylemler (V2 then V2) peş peşedir; paralel eylemler (was V-ing and was V-ing) aynı andadır.",
        "levelTactic": "'While' ile bağlanmış ve 'all evening, throughout the night' gibi süreç bildiren iki taraflı cümlelerde çift Past Continuous ara.",
        "miniTest": {
          "question": "Throughout the summit, diplomatic aides ---- background dossiers while the delegates ---- the draft accord.",
          "options": [
            "were compiling / were debating",
            "compiled / debated",
            "were compiling / debated",
            "compiled / were debating",
            "have compiled / debated"
          ],
          "answer": 0,
          "explanation": "'Throughout the summit' süresince eşzamanlı devam eden paralel eylemler: 'were compiling / were debating'."
        },
        "explainedAnswer": "Doğru yanıt A (were compiling / were debating). Paralel geçmiş eylemlerde her iki taraf da Past Continuous çekimlenir.",
        "signalWords": [
          "While ... was V-ing, ... was V-ing",
          "parallel actions"
        ]
      },
      "B2": {
        "title": "Kibar İstekler ve 'Always' ile Geçmiş Eleştirisi",
        "basicMeaning": "Geçmişte aşırı tekrarlanan sinir bozucu alışkanlıklar ve aşırı kibar rica tonu (I was wondering).",
        "usages": [
          "Always / constantly ile geçmişteki rahatsız edici huylar (He was always forgetting his keys)",
          "Kibar giriş cümleleri (I was wondering if you could help me)"
        ],
        "nonUsages": [
          "Sıradan nötr geçmiş alışkanlıklar (used to tercih edilir)"
        ],
        "positiveFormula": "Subject + was/were + always/constantly + V-ing / I was wondering if + Subject + could + V1",
        "negativeFormula": "Why were you constantly interrupting the lecturer?",
        "questionFormula": "Was he always complaining like that in his previous job?",
        "shortAnswers": "Yes, constantly.",
        "subjectVerbAgreement": "Özneye göre was veya were kullanılır.",
        "verbForm": "was/were + V-ing",
        "auxiliaryVerb": "was / were",
        "timeMarkers": [
          "always (geçmiş şikayet)",
          "constantly",
          "continually",
          "in those days"
        ],
        "signals": [
          "was always complaining",
          "I was wondering if"
        ],
        "timeline": "Geçmişte normal sınırları aşan tekrarlama yoğunluğu.",
        "examples": [
          "My former roommate was always borrowing my clothes without asking!",
          "I was hoping we could discuss the budget allocation before the meeting starts."
        ],
        "exampleTr": [
          "Eski oda arkadaşım sürekli sormadan kıyafetlerimi ödünç alıyordu! (Şikayet)"
        ],
        "code": "Geçmişte Şikayet = was/were always + V-ing! Nezaket = I was wondering / hoping!",
        "visualMemory": "Sinirli yüz ifadesiyle geçmiş anıları hatırlayan insan ve kibar rica mektubu ✉️🤦‍♂️",
        "commonMistake": "Geçmişteki rahatsız edici alışkanlığı tarafsız 'used to' ile karıştırmak.",
        "correctWrongContrast": {
          "wrong": "He used to always shout at staff in anger.",
          "correct": "He was always shouting at staff in anger.",
          "note": "Bıkkınlık ve öfke belirten geçmiş alışkanlıklarda 'was always V-ing' duygusal tonu yansıtır.",
          "explanation": "Bıkkınlık ve öfke belirten geçmiş alışkanlıklarda 'was always V-ing' duygusal tonu yansıtır."
        },
        "differenceFromSimilarTense": "He always came late (nötr gerçek) vs He was always coming late (şikayet/öfke).",
        "levelTactic": "Cümlede geçmiş zaman bağlamında 'always, constantly' ile birlikte öfke, şikayet tonu varsa Past Continuous ara.",
        "miniTest": {
          "question": "The senior partner was notorious in the firm because he ---- critical files right before court deadlines.",
          "options": [
            "was constantly misplacing",
            "constantly misplaced",
            "has constantly misplaced",
            "is constantly misplacing",
            "had misplaced constantly"
          ],
          "answer": 0,
          "explanation": "'Was notorious' (kötü şöhretliydi) ifadesi geçmiş bir şikayeti vurguladığı için 'was constantly misplacing' doğru seçimdir."
        },
        "explainedAnswer": "Doğru yanıt A (was constantly misplacing). Geçmişte rahatsızlık uyandıran tekrarlı eylemler 'was always/constantly V-ing' ile aktarılır.",
        "signalWords": [
          "was always complaining",
          "I was wondering if"
        ]
      },
      "C1": {
        "title": "Tarihsel Dönüm Noktalarında Arka Plan Krizleri",
        "basicMeaning": "Büyük tarihsel devrimler patlak verirken sahne arkasında işlemekte olan çalkantılar.",
        "usages": [
          "Büyük siyasi krizlerin patlak anındaki sosyoekonomik arka plan",
          "Tarihsel süreçlerin dramatik gerilimi"
        ],
        "nonUsages": [
          "Kuru kronolojik tarih listeleri"
        ],
        "positiveFormula": "While societal tensions were mounting, the leadership enacted...",
        "negativeFormula": "Institutions were not functioning effectively when the rebellion erupted.",
        "questionFormula": "What strategic moves were the opposing factions making prior to the assault?",
        "shortAnswers": "They were fortifying key river crossings.",
        "subjectVerbAgreement": "Özneye göre was/were seçimi.",
        "verbForm": "was/were + V-ing",
        "auxiliaryVerb": "was / were",
        "timeMarkers": [
          "as tensions were rising",
          "in the months leading up to the war",
          "meanwhile"
        ],
        "signals": [
          "tensions were mounting",
          "conditions were deteriorating"
        ],
        "timeline": "Fırtına öncesi gerilim süreci ve patlayan şimşek anı ⚡",
        "examples": [
          "While the monarchy was lavishing funds on palace construction, famine was devastating rural provinces.",
          "In the weeks preceding the armistice, diplomatic envoys were frantically exchanging secret missives."
        ],
        "exampleTr": [
          "Monarşi saray inşaatlarına para saçarken, kıtlık kırsal vilayetleri kasıp kavuruyordu."
        ],
        "code": "Tarihsel Arka Plan Gerilimi = was/were mounting / deteriorating!",
        "visualMemory": "Yanan meşalelerle saraya yürüyen halk ve sarayda dans eden soylular 🏰🔥",
        "commonMistake": "Arka planda geniş zamana yayılan krizi anlık eylem gibi Simple Past'a sıkıştırmak.",
        "correctWrongContrast": {
          "wrong": "While inflation skyrocketed, the cabinet debated minor issues.",
          "correct": "While inflation was skyrocketing, the cabinet was debating minor issues.",
          "note": "Kriz ortamının eşzamanlı süreci continuous tasvir gerektirir.",
          "explanation": "Kriz ortamının eşzamanlı süreci continuous tasvir gerektirir."
        },
        "differenceFromSimilarTense": "Simple Past sonuçları listeler; Past Continuous o anın dramatik gerilimini hissettirir.",
        "levelTactic": "Tarihsel metinlerde 'while / as' ile kurulan sosyoekonomik zıtlıklarda Past Continuous kalıplarına güven.",
        "miniTest": {
          "question": "While public discontent ---- throughout the capital, imperial ministers ---- lavish banquets in isolation.",
          "options": [
            "was simmering / were hosting",
            "simmered / hosted",
            "had simmered / hosted",
            "was simmering / hosted",
            "has simmered / were hosting"
          ],
          "answer": 0,
          "explanation": "İki zıt sürecin eşzamanlı arka plan tasviri: 'was simmering / were hosting'."
        },
        "explainedAnswer": "Doğru yanıt A (was simmering / were hosting). Eşzamanlı tarihsel gerilim anlatımlarında çift continuous kullanılır.",
        "signalWords": [
          "tensions were mounting",
          "conditions were deteriorating"
        ]
      },
      "C2": {
        "title": "Edebi Polifoni ve Çok Sesli Anlatı Dinamikleri",
        "basicMeaning": "Klasik edebiyatta birden fazla karakterin iç dünyasının ve dış dünyanın eşzamanlı akışı.",
        "usages": [
          "Bilinç akışı ve edebi sahnelerde çok sesli zaman kurgusu",
          "Anlatıcının sahneyi dondurarak karakterlerin hareketlerini betimlemesi"
        ],
        "nonUsages": [
          "Doğrusal tek sesli haber metinleri"
        ],
        "positiveFormula": "Shadows were lengthening as the protagonist was contemplating...",
        "negativeFormula": "None of the spectators were suspecting the impending tragedy.",
        "questionFormula": "How does the narrator manipulate temporal layers during the duel?",
        "shortAnswers": "By juxtaposing internal reflection with external momentum.",
        "subjectVerbAgreement": "Edebi çoğul/tekil özne uyumları.",
        "verbForm": "was/were + V-ing",
        "auxiliaryVerb": "was / were",
        "timeMarkers": [
          "as dusk was falling",
          "simultaneously",
          "within the protagonist's mind"
        ],
        "signals": [
          "shadows were lengthening",
          "thoughts were swirling"
        ],
        "timeline": "Zamanın yavaşlatıldığı derin edebi an.",
        "examples": [
          "While dusk was falling over the ancient battlements, the weary commander was weighing the catastrophic cost of victory.",
          "The clock was relentlessly ticking as each minister was privately calculating his personal survival."
        ],
        "exampleTr": [
          "Antik siperlerin üzerine alacakaranlık çökerken, yorgun komutan zaferin yıkıcı bedelini tartıyordu."
        ],
        "code": "Edebi Zaman Dondurma = was/were falling / weighing!",
        "visualMemory": "Ağır çekimde düşen yağmur damlaları ve düşünen filozof silüeti 🌧️🗿",
        "commonMistake": "Edebi derinliği olan sahne betimlemelerini sıradan basit geçmiş zamana indirgemek.",
        "correctWrongContrast": {
          "wrong": "Night fell and he thought about death.",
          "correct": "Night was falling as he was pondering mortality.",
          "note": "Edebi metinlerde süreç ve atmosfer continuous ile derinleştirilir.",
          "explanation": "Edebi metinlerde süreç ve atmosfer continuous ile derinleştirilir."
        },
        "differenceFromSimilarTense": "Simple Past eylemleri sayar; Past Continuous sahnenin tablosunu çizer.",
        "levelTactic": "Roman veya edebi pasaj sorularında atmosferi betimleyen 'was/were V-ing' yapılarını tespit et.",
        "miniTest": {
          "question": "In the opening chapter, while winter winds ---- against the manor walls, the solitary scholar ---- ancient manuscripts.",
          "options": [
            "were howling / was deciphering",
            "howled / deciphered",
            "had howled / deciphered",
            "were howling / deciphered",
            "howled / was deciphering"
          ],
          "answer": 0,
          "explanation": "Edebi sahne tasarımı ve paralel atmosfer: 'were howling / was deciphering'."
        },
        "explainedAnswer": "Doğru yanıt A (were howling / was deciphering). Roman açılış sahnelerinde eşzamanlı atmosfer betimlemesi esastır.",
        "signalWords": [
          "shadows were lengthening",
          "thoughts were swirling"
        ]
      },
      "YDS": {
        "title": "ÖSYM'nin While/As/When Soru Tipleri ve Kesinti/Uyum Taktikleri",
        "basicMeaning": "YDS'de en çok çıkan kalıp: While + was/were V-ing, V2 veya When + V2, was/were V-ing.",
        "usages": [
          "While / As yan cümlesinde devam eden süreç, ana cümlede V2 ile bölünme",
          "İki eşzamanlı süreç (While ... was V-ing, ... was V-ing)",
          "Stative fiillerin (understand, notice) Past Continuous alamayacağı kuralı"
        ],
        "nonUsages": [
          "While'ın arkasına 'will' veya 'Present Perfect' koymak"
        ],
        "positiveFormula": "While Subject + was/were + V-ing, Subject + V2",
        "negativeFormula": "Past Continuous + [Gelecek zaman veya Present UYUMSUZDUR]",
        "questionFormula": "What were the archaeologists documenting when the tomb collapsed?",
        "shortAnswers": "They were documenting wall inscriptions.",
        "subjectVerbAgreement": "ÖSYM soru kökündeki özne tekil mi çoğul mu (The team was vs Members were) kontrol edilir.",
        "verbForm": "was/were + V-ing ve V2",
        "auxiliaryVerb": "was / were / did",
        "timeMarkers": [
          "while",
          "as",
          "just as",
          "when",
          "at that exact moment"
        ],
        "signals": [
          "While + was/were V-ing",
          "Just as ... V2"
        ],
        "timeline": "Sınav Sorusu: [Devam Eden Arka Plan] <--- Kesilme Anı (V2)",
        "examples": [
          "While the geologists were examining rock strata in the canyon, an unexpected tremor caused a rockslide.",
          "Just as the space probe was transmitting its final telemetry, ground control lost the signal."
        ],
        "exampleTr": [
          "Jeologlar kanyondaki kaya katmanlarını incelerken, beklenmedik bir sarsıntı kaya düşmesine neden oldu."
        ],
        "code": "YDS Formülü: While + was/were V-ing ===> Diğer taraf V2!",
        "visualMemory": "ÖSYM Soru Kitapçığında 'While' kelimesinden 'was/were V-ing'e çizilen doğrudan bağlantı oku 🎯",
        "commonMistake": "While'dan sonra stative fiil (know, realize) geldiğinde -ing koymaya çalışmak (While he was knowing YANLIŞTIR -> While he knew DOĞRUDUR).",
        "correctWrongContrast": {
          "wrong": "While they were knowing the truth, they kept silent.",
          "correct": "While they knew the truth, they kept silent.",
          "note": "'know' durum fiilidir, while ile kullanılsa bile continuous alamaz, V2 kalır.",
          "explanation": "'know' durum fiilidir, while ile kullanılsa bile continuous alamaz, V2 kalır."
        },
        "differenceFromSimilarTense": "Past Perfect eylemin çoktan bittiğini bildirirken, Past Continuous eylemin tam o anda sürmekte olduğunu bildirir.",
        "levelTactic": "Soru kökünde 'While / As' gördüğünde: Fiil durum fiili DEĞİLSE hemen was/were V-ing ara. Diğer tarafta kesinti varsa V2 ara.",
        "miniTest": {
          "question": "While international monitors ---- the ballot counting procedures, an armed faction ---- the regional election headquarters.",
          "options": [
            "were observing / stormed",
            "observed / were storming",
            "have observed / stormed",
            "were observing / will storm",
            "had observed / storms"
          ],
          "answer": 0,
          "explanation": "'While' ile süregelen süreç (were observing), araya giren ani baskın eylemiyle (stormed - V2) kesilmiştir."
        },
        "explainedAnswer": "Doğru yanıt A (were observing / stormed). While kuralına göre devam eden eylem Past Continuous, bölen eylem Simple Past olur.",
        "signalWords": [
          "While + was/were V-ing",
          "Just as ... V2"
        ]
      }
    }
  },
  {
    "slug": "present-perfect",
    "name": "Present Perfect Tense",
    "turkish": "Yakın Geçmiş / Etkisi Süren Zaman",
    "emoji": "🌉",
    "summary": "Geçmişte başlayıp bugüne bağlanan eylemler, hayat deneyimleri, şu anki sonuçlar, bitmemiş zaman dilimleri ve since/for köprüsü.",
    "levels": {
      "A1": {
        "title": "Hayat Deneyimleri ve 'ever/never'",
        "basicMeaning": "Hayatında bir şeyi daha önce yapıp yapmadığını sorma ve belirtme.",
        "usages": [
          "Hayat deneyimleri (I have visited Paris)",
          "'ever' ile soru sorma (Have you ever...?)",
          "'never' ile olumsuzluk (I have never seen snow)"
        ],
        "nonUsages": [
          "Dün, geçen yıl gibi net geçmiş zaman belirtilen durumlar"
        ],
        "positiveFormula": "Subject + have/has + V3 (past participle)",
        "negativeFormula": "Subject + have/has not (haven't/hasn't) + V3 / Subject + have/has never + V3",
        "questionFormula": "Have/Has + Subject + ever + V3?",
        "shortAnswers": "Yes, I have. / No, I haven't.",
        "subjectVerbAgreement": "I, you, we, they -> have; he, she, it -> has.",
        "verbForm": "have / has + V3 (düzensiz: seen, done, eaten; düzenli: visited).",
        "auxiliaryVerb": "have / has",
        "timeMarkers": [
          "ever",
          "never",
          "before",
          "once",
          "twice",
          "so far"
        ],
        "signals": [
          "Have you ever",
          "never",
          "in my life"
        ],
        "timeline": "Doğumdan bugüne kadar olan tüm hayat çizgisi: [Doğum -------- X (Deneyim) -------> Bugün]",
        "examples": [
          "Have you ever tried Japanese sushi?",
          "She has never flown in a helicopter."
        ],
        "exampleTr": [
          "Hiç Japon suşisi denedin mi?"
        ],
        "code": "Hayat Deneyimi = have/has + ever/never + V3!",
        "visualMemory": "Pasaport damgaları ve seyahat anı defteri 🛂📖",
        "commonMistake": "'never' olan cümleye bir de 'haven't' koyup çift olumsuzluk yapmak (*I haven't never seen*).",
        "correctWrongContrast": {
          "wrong": "I haven't never visited London.",
          "correct": "I have never visited London.",
          "note": "'never' zaten olumsuzluk bildirir, have olumlu kalmalıdır.",
          "explanation": "'never' zaten olumsuzluk bildirir, have olumlu kalmalıdır."
        },
        "differenceFromSimilarTense": "Simple Past ile farkı: 'I visited Paris in 2018' (zaman net) vs 'I have visited Paris' (deneyim var, zaman önemsiz).",
        "levelTactic": "Soru kökünde 'ever' veya olumsuzlukta 'never' gördüğünde have/has + V3 seç.",
        "miniTest": {
          "question": "---- you ever ---- an eclipse of the sun with your own eyes?",
          "options": [
            "Have / witnessed",
            "Did / witness",
            "Are / witnessing",
            "Were / witnessing",
            "Had / witnessed"
          ],
          "answer": 0,
          "explanation": "'Ever' hayat deneyimi sorusudur; 'Have you ever witnessed' kalıbı kullanılır."
        },
        "explainedAnswer": "Doğru yanıt A (Have / witnessed). Hayat boyu deneyim soruları Present Perfect gerektirir.",
        "signalWords": [
          "Have you ever",
          "never",
          "in my life"
        ]
      },
      "A2": {
        "title": "Şu Anki Sonuçlar ve 'just, already, yet'",
        "basicMeaning": "Eylemin geçmişte yapılmış olması ama sonucunun veya etkisinin şu an apaçık ortada olması.",
        "usages": [
          "Yeni bitmiş olaylar (just)",
          "Beklenenden önce tamamlanan işler (already)",
          "Henüz gerçekleşmemiş beklentiler (yet)"
        ],
        "nonUsages": [
          "Geçmişte olup bitmiş ve şu anla hiçbir bağı kalmamış olaylar"
        ],
        "positiveFormula": "Subject + have/has + just / already + V3",
        "negativeFormula": "Subject + haven't/hasn't + V3 + yet",
        "questionFormula": "Have you finished your homework yet?",
        "shortAnswers": "Yes, I have already finished it. / No, not yet.",
        "subjectVerbAgreement": "He, she, it özneleri 'has', diğerleri 'have' alır.",
        "verbForm": "have/has + V3",
        "auxiliaryVerb": "have / has",
        "timeMarkers": [
          "just (az önce)",
          "already (zaten, çoktan)",
          "yet (henüz - olumsuz/soru)",
          "recently",
          "lately"
        ],
        "signals": [
          "just",
          "already",
          "yet",
          "recently"
        ],
        "timeline": "Eylem az önce bitti [X] ===> Sonucu hemen şu an masada duruyor [Bugün]",
        "examples": [
          "I have just lost my keys, so I cannot enter the apartment.",
          "The train has already departed, so we must wait for the next one."
        ],
        "exampleTr": [
          "Anahtarlarımı az önce kaybettim, bu yüzden daireye giremiyorum."
        ],
        "code": "Yet = Cümle SONUNDA (olumsuz ve soru)! Just/Already = have ile V3 ARASINDA!",
        "visualMemory": "Yeni fırından çıkmış dumanı tüten sıcak ekmek ve kayıp anahtar 🥖🔑",
        "commonMistake": "'yet' zarfını olumlu cümlenin sonunda kullanmak (*I have done it yet*).",
        "correctWrongContrast": {
          "wrong": "I have finished my assignment yet.",
          "correct": "I have already finished my assignment.",
          "note": "'yet' olumlu cümlede kullanılmaz, 'already' kullanılır.",
          "explanation": "'yet' olumlu cümlede kullanılmaz, 'already' kullanılır."
        },
        "differenceFromSimilarTense": "I lost my keys yesterday (dündü, belki buldum) vs I have lost my keys (şu an elimde yok, kapıda kaldım).",
        "levelTactic": "Cümlenin sonundaki 'yet' kelimesini gördüğünde seçeneklerde doğrudan 'haven't / hasn't + V3' ara.",
        "miniTest": {
          "question": "The scientific committee ---- the peer-review process yet, so the report remains confidential.",
          "options": [
            "has not completed",
            "did not complete",
            "had not completed",
            "does not complete",
            "will not have completed"
          ],
          "answer": 0,
          "explanation": "Cümle sonundaki 'yet' ve 'remains confidential' present sonucu gereği 'has not completed' doğru tercihtir."
        },
        "explainedAnswer": "Doğru yanıt A (has not completed). 'Yet' zarfı Present Perfect olumsuz çekim gerektirir.",
        "signalWords": [
          "just",
          "already",
          "yet",
          "recently"
        ]
      },
      "B1": {
        "title": "Süreç Köprüsü: 'Since' ve 'For' Kullanımları & 'gone to' vs 'been to'",
        "basicMeaning": "Geçmişte başlayıp bugüne kadar kesintisiz devam eden süreçler.",
        "usages": [
          "Since + başlangıç noktası (since 2010, since Monday)",
          "For + geçen zaman miktarı (for ten years, for two hours)",
          "'have been to' (gidip dönmüş olma) vs 'have gone to' (gitmiş, hala orada olma)"
        ],
        "nonUsages": [
          "Geçmişte başlayıp geçmişte tamamen bitmiş süreçler (onlar 'for + Simple Past' alır)"
        ],
        "positiveFormula": "Subject + have/has + V3 + since [Point in Time] / for [Duration]",
        "negativeFormula": "We haven't seen each other since last summer.",
        "questionFormula": "How long have you lived in this city?",
        "shortAnswers": "For about five years.",
        "subjectVerbAgreement": "Özneye göre have/has çekimi.",
        "verbForm": "have/has + V3",
        "auxiliaryVerb": "have / has",
        "timeMarkers": [
          "since 2015",
          "for three decades",
          "how long",
          "all morning",
          "since childhood"
        ],
        "signals": [
          "since",
          "for",
          "how long",
          "been to",
          "gone to"
        ],
        "timeline": "[2010 Başlangıç Noktası] ================= Süreç ================> [Bugün]",
        "examples": [
          "Dr. Aris has worked at the research center for twelve years.",
          "She has gone to Rome (she is still there) vs She has been to Rome (she visited and returned)."
        ],
        "exampleTr": [
          "Dr. Aris on iki yıldır araştırma merkezinde çalışıyor."
        ],
        "code": "SINCE = Başlangıç Tarihi! FOR = Süre Miktarı! GONE = Hala orada! BEEN = Gitti geldi!",
        "visualMemory": "2010 yılından bugüne uzanan asma köprü ve Roma'ya giden uçak bileti 🌉✈️",
        "commonMistake": "'since' ile 'for'u birbirinin yerine kullanmak (since three years YANLIŞTIR -> for three years DOĞRUDUR).",
        "correctWrongContrast": {
          "wrong": "He has lived here since five years.",
          "correct": "He has lived here for five years.",
          "note": "Süre miktarlarında (five years) 'for' kullanılır; başlangıç noktalarında 'since' kullanılır.",
          "explanation": "Süre miktarlarında (five years) 'for' kullanılır; başlangıç noktalarında 'since' kullanılır."
        },
        "differenceFromSimilarTense": "He lived in London for 2 years (artık orada yaşamıyor); He has lived in London for 2 years (hala orada yaşıyor).",
        "levelTactic": "Soru kökünde 'for the past/last ... years' veya 'since' görürsen Present Perfect have/has V3 ilk hedefin olsun.",
        "miniTest": {
          "question": "The university ---- extensive archaeological surveys in the Euphrates valley since the project was approved.",
          "options": [
            "has conducted",
            "conducted",
            "had conducted",
            "is conducting",
            "was conducted"
          ],
          "answer": 0,
          "explanation": "'Since' yan cümlesi geçmiş başlangıcı (was approved), ana cümle ise bugüne uzanan süreci (has conducted) bildirir."
        },
        "explainedAnswer": "Doğru yanıt A (has conducted). 'Since' kuralı ana cümlede Present Perfect gerektirir.",
        "signalWords": [
          "since",
          "for",
          "how long",
          "been to",
          "gone to"
        ]
      },
      "B2": {
        "title": "Bitmemiş Zaman Dilimleri ve 'so far / up to now / recently'",
        "basicMeaning": "Bugün henüz tamamlanmamış bir zaman periyodu (this century, this year, today) ve güncel eğilimler.",
        "usages": [
          "Bitmemiş zaman dilimleri (this morning - hala sabahtır)",
          "So far / up to now / to date (şu ana kadar)",
          "Recently / lately ile güncel bilimsel gelişmeler"
        ],
        "nonUsages": [
          "Tamamlanmış zaman dilimleri (this morning - eğer artık akşamsa Simple Past olur)"
        ],
        "positiveFormula": "Subject + have/has + V3 + so far / recently / this year",
        "negativeFormula": "Scientists have not yet observed any decline in solar activity.",
        "questionFormula": "How many clinical trials have succeeded to date?",
        "shortAnswers": "Only three trials so far.",
        "subjectVerbAgreement": "Özneye göre have/has uyumu.",
        "verbForm": "have/has + V3",
        "auxiliaryVerb": "have / has",
        "timeMarkers": [
          "so far",
          "up to now",
          "to date",
          "as of yet",
          "over the past decade",
          "in recent years"
        ],
        "signals": [
          "so far",
          "to date",
          "in recent years",
          "over the last century"
        ],
        "timeline": "Geçmişten başlayıp tam 'Şu An'ın kapısına kadar yığılan kümülatif toplam 📦",
        "examples": [
          "Over the past two decades, renewable energy investments have expanded exponentially.",
          "The team has published four peer-reviewed articles so far this year."
        ],
        "exampleTr": [
          "Son yirmi yılda yenilenebilir enerji yatırımları katlanarak genişledi."
        ],
        "code": "Over the last/past ... = have/has + V3! So far / To date = have/has + V3!",
        "visualMemory": "Yıl sonuna kadar dolmaya devam eden kümülatif kum saati ⏳📊",
        "commonMistake": "'In recent years' veya 'over the past decade' görünce Simple Past işaretlemek.",
        "correctWrongContrast": {
          "wrong": "In recent years, artificial intelligence advanced at an alarming speed.",
          "correct": "In recent years, artificial intelligence has advanced at an alarming speed.",
          "note": "'In recent years' Present Perfect gerektirir, çünkü süreç bugünü de içine alır.",
          "explanation": "'In recent years' Present Perfect gerektirir, çünkü süreç bugünü de içine alır."
        },
        "differenceFromSimilarTense": "In 2020 (kapalı geçmiş -> Simple Past) vs Since 2020 / In recent years (açık süreç -> Present Perfect).",
        "levelTactic": "'In recent years, over the past decade, so far, to date' ifadelerini gördüğün an tereddütsüz have/has V3'e git.",
        "miniTest": {
          "question": "Over the past century, medical innovations ---- the average human life expectancy worldwide.",
          "options": [
            "have dramatically extended",
            "dramatically extended",
            "had dramatically extended",
            "were dramatically extending",
            "dramatically extend"
          ],
          "answer": 0,
          "explanation": "'Over the past century' son yüz yıldan bugüne uzanan süreci anlattığı için Present Perfect (have extended) doğrudur."
        },
        "explainedAnswer": "Doğru yanıt A (have dramatically extended). 'Over the past...' zaman kalıbı Present Perfect gerektirir.",
        "signalWords": [
          "so far",
          "to date",
          "in recent years",
          "over the last century"
        ]
      },
      "C1": {
        "title": "Akademik Literatür Özeti ve Kümülatif Araştırma Bulguları",
        "basicMeaning": "Akademik dünyada bugüne kadar birikmiş bilimsel külliyatın kümülatif durumunu aktarma.",
        "usages": [
          "Bilimsel literatürün bugünkü durumu (Studies have shown that...)",
          "Henüz çözülememiş akademik paradokslar (Scholars have long debated...)"
        ],
        "nonUsages": [
          "Tek bir araştırmacının geçmişteki spesifik deney anı"
        ],
        "positiveFormula": "Numerous empirical studies have consistently corroborated the hypothesis.",
        "negativeFormula": "Decades of research have failed to establish a direct causal link.",
        "questionFormula": "What fundamental consensus have neuroscientists reached regarding synaptic transmission?",
        "shortAnswers": "They have confirmed its chemical nature.",
        "subjectVerbAgreement": "Studies (çoğul) -> have; Research (sayılamaz tekil) -> has.",
        "verbForm": "have/has + V3",
        "auxiliaryVerb": "have / has",
        "timeMarkers": [
          "consistently",
          "historically",
          "to date",
          "in modern scholarship"
        ],
        "signals": [
          "studies have demonstrated",
          "scholars have argued",
          "research has shown"
        ],
        "timeline": "Bilim tarihinin tüm birikiminin bugünkü doruk noktası 📚🏔️",
        "examples": [
          "Anthropologists have long debated the precise migration routes of early hominids into the Americas.",
          "Recent satellite observations have provided unequivocal proof of melting ice sheets."
        ],
        "exampleTr": [
          "Antropologlar, ilk insansıların Amerika kıtasına kesin göç rotalarını uzun süredir tartışmaktadır."
        ],
        "code": "Bilimsel Literatür Birikimi = Studies have shown / Scholars have debated!",
        "visualMemory": "Kütüphanede üst üste yığılmış ve bugüne ulaşan akademik araştırma ciltleri 📚🔬",
        "commonMistake": "'Research' kelimesini çoğul sanıp 'Research have shown' demek (Research sayılamaz -> has shown).",
        "correctWrongContrast": {
          "wrong": "Considerable research have indicated that sleep improves memory.",
          "correct": "Considerable research has indicated that sleep improves memory.",
          "note": "'Research' sayılamaz isimdir, tekil fiil 'has indicated' alır.",
          "explanation": "'Research' sayılamaz isimdir, tekil fiil 'has indicated' alır."
        },
        "differenceFromSimilarTense": "Newton discovered gravity (tarihi olay -> Past); Modern physicists have verified relativity (bugünkü bilgi birikimi -> Present Perfect).",
        "levelTactic": "Akademik metinlerde 'Studies, experiments, evidence' özneleriyle birlikte 'have demonstrated, has shown' kalıplarına dikkat et.",
        "miniTest": {
          "question": "Extensive climatic modeling ---- that atmospheric carbon levels will trigger irreversible ecosystem feedback loops.",
          "options": [
            "has demonstrated",
            "demonstrated",
            "was demonstrating",
            "had demonstrated",
            "demonstrates"
          ],
          "answer": 0,
          "explanation": "Bugüne kadarki kapsamlı iklim modellemelerinin birikimini sunduğu için 'has demonstrated' en yetkin akademik seçimdir."
        },
        "explainedAnswer": "Doğru yanıt A (has demonstrated). Kümülatif bilimsel modelleme sonuçları Present Perfect ile verilir.",
        "signalWords": [
          "studies have demonstrated",
          "scholars have argued",
          "research has shown"
        ]
      },
      "C2": {
        "title": "Felsefi Süreklilik ve Çağdaş İnsanlık Durumu Analizleri",
        "basicMeaning": "İnsanlık tarihinin köklü olgularının bugünkü varoluşsal boyutunu felsefi bir derinlikle aktarma.",
        "usages": [
          "Tarihten bugüne insan doğasının sürekliliği",
          "Sanatsal ve edebi mirasın bugünkü yankısı"
        ],
        "nonUsages": [
          "Kısa vadeli magazin olayları"
        ],
        "positiveFormula": "Throughout human civilization, philosophical inquiries have persistently interrogated...",
        "negativeFormula": "No philosophical system has yet resolved the mind-body dichotomy.",
        "questionFormula": "How have artistic sensibilities evolved in response to industrial modernity?",
        "shortAnswers": "They have mirrored psychological fragmentation.",
        "subjectVerbAgreement": "Soyut felsefi öznelerin tekillik/çoğulluk uyumu.",
        "verbForm": "have/has + V3",
        "auxiliaryVerb": "have / has",
        "timeMarkers": [
          "throughout recorded history",
          "from time immemorial",
          "in the annals of civilization"
        ],
        "signals": [
          "throughout recorded history",
          "has persistently shaped"
        ],
        "timeline": "Tüm insanlık tarihi boyunca kesintisiz akan felsefi nehir 🌊",
        "examples": [
          "Throughout recorded history, the quest for individual autonomy has fundamentally reshaped constitutional governance.",
          "Evolving linguistic structures have continually mirrored societal transformations across generations."
        ],
        "exampleTr": [
          "Kayıtlı tarih boyunca bireysel özerklik arayışı, anayasal yönetimi kökten yeniden şekillendirmiştir."
        ],
        "code": "İnsanlık Tarihi Boyunca = Throughout recorded history + have/has V3!",
        "visualMemory": "Antik çağlardan bugüne uzanan düşünce heykeli ve evrensel adalet terazisi 🗿⚖️",
        "commonMistake": "'Throughout history' ifadesini sadece geçmiş zaman sanıp Simple Past kullanmak.",
        "correctWrongContrast": {
          "wrong": "Throughout history, humans constantly sought meaning.",
          "correct": "Throughout history, humans have constantly sought meaning.",
          "note": "'Throughout history' bugünü de kapsayan evrensel bir süreçtir, Present Perfect gerektirir.",
          "explanation": "'Throughout history' bugünü de kapsayan evrensel bir süreçtir, Present Perfect gerektirir."
        },
        "differenceFromSimilarTense": "In the Middle Ages (kapalı çağ -> V2); Throughout history (tüm çağlar + bugün -> have/has V3).",
        "levelTactic": "'Throughout history, across generations, from the dawn of civilization' ifadeleri bugüne bağlandığı için have/has V3 ister.",
        "miniTest": {
          "question": "From the dawn of organized societies, legal codes ---- as both instruments of social order and mechanisms of state control.",
          "options": [
            "have functioned",
            "functioned",
            "had functioned",
            "were functioning",
            "function"
          ],
          "answer": 0,
          "explanation": "'From the dawn of organized societies' başlangıçtan bugüne kadar uzanan süreci belirttiği için Present Perfect (have functioned) gerektirir."
        },
        "explainedAnswer": "Doğru yanıt A (have functioned). 'From the dawn of...' bugüne uzanan tarihsel süreklilik için Present Perfect ister.",
        "signalWords": [
          "throughout recorded history",
          "has persistently shaped"
        ]
      },
      "YDS": {
        "title": "ÖSYM'nin En Sevdiği Tense: 'In recent years, over the past decade, since'",
        "basicMeaning": "YDS/YDT sınavlarında her yıl mutlaka sorulan 'süreç' ve 'güncel trend' soruları.",
        "usages": [
          "In/over the last/past + decade/century/years kalıpları",
          "Since + V2 kuralı",
          "So far / To date / Up to now sinyalleri",
          "Recently / Lately zarfları"
        ],
        "nonUsages": [
          "Geçmişte kapalı bir yıl (in 1999) ile Present Perfect kullanımı KESİNLİKLE YASAKTIR"
        ],
        "positiveFormula": "Over the past two decades, Subject + have/has + V3",
        "negativeFormula": "Governments have failed to achieve the agreed benchmarks.",
        "questionFormula": "How has the proliferation of digital algorithms impacted public discourse?",
        "shortAnswers": "It has polarized opinions.",
        "subjectVerbAgreement": "ÖSYM soru köklerindeki karmaşık özne çekimlerini dikkatle incele.",
        "verbForm": "have/has + V3",
        "auxiliaryVerb": "have / has",
        "timeMarkers": [
          "in recent years",
          "over the past decade",
          "since 2000",
          "so far",
          "to date",
          "lately"
        ],
        "signals": [
          "in the last 50 years",
          "over the past few decades",
          "has led to"
        ],
        "timeline": "Sınav Sorusu: [Geçmişten Bugüne Doğru Açılan Huni / Süreç] ===> have/has + V3",
        "examples": [
          "In recent years, artificial intelligence technologies have revolutionized diagnostic oncology.",
          "Since the international treaty was signed in Paris, signatory states have implemented rigorous emission caps."
        ],
        "exampleTr": [
          "Son yıllarda yapay zeka teknolojileri tanısal onkolojiyi devrim niteliğinde değiştirdi."
        ],
        "code": "YDS Parolası: 'IN RECENT YEARS / OVER THE PAST DECADE' = %100 HAVE/HAS V3!",
        "visualMemory": "ÖSYM kitapçığında 'over the past decade' ifadesinin altın çerçeveye alınması 🏆📄",
        "commonMistake": "'In recent years' gördüğü halde geçmiş zamana (V2) gitmek.",
        "correctWrongContrast": {
          "wrong": "In the last few decades, urbanization dramatically altered rural landscapes.",
          "correct": "In the last few decades, urbanization has dramatically altered rural landscapes.",
          "note": "'In the last few decades' süreci bugüne bağlar; have/has altered şarttır.",
          "explanation": "'In the last few decades' süreci bugüne bağlar; have/has altered şarttır."
        },
        "differenceFromSimilarTense": "Two decades ago (V2 ister); Over the last two decades (have/has V3 ister). Tek bir edat (over/in) tense'i tamamen değiştirir!",
        "levelTactic": "Soru kökünde 'over the last/past X years' veya 'in recent years' gördüğün anda seçeneklerde have/has V3 veya have/has been V-ing ara, diğerlerini hemen ele!",
        "miniTest": {
          "question": "Over the past half-century, molecular biology ---- unprecedented insights into cellular replication that ---- medical treatments.",
          "options": [
            "has yielded / have transformed",
            "yielded / transformed",
            "had yielded / transformed",
            "was yielding / will transform",
            "yields / had transformed"
          ],
          "answer": 0,
          "explanation": "'Over the past half-century' süreci Present Perfect (has yielded) ve ona bağlı kümülatif sonuç da Present Perfect (have transformed) gerektirir."
        },
        "explainedAnswer": "Doğru yanıt A (has yielded / have transformed). 'Over the past...' yapısı nedeniyle cümle Present Perfect bölgesinde kalmalıdır.",
        "signalWords": [
          "in the last 50 years",
          "over the past few decades",
          "has led to"
        ]
      }
    }
  },
  {
    "slug": "present-perfect-continuous",
    "name": "Present Perfect Continuous Tense",
    "turkish": "Süreç Vurgulayan Yakın Geçmiş",
    "emoji": "⏱️",
    "summary": "Eylemin sonucuna değil ne kadar süredir devam ettiğine (süreç vurgusu) odaklanan, yakın geçmişte bitip gözle görülür iz bırakan zaman.",
    "levels": {
      "A1": {
        "title": "Ne Kadar Süredir Devam Ediyor? (Temel Süre Vurgusu)",
        "basicMeaning": "Bir işin geçmişten başlayıp şu an hala devam etmekte olduğunu ve ne kadar sürdüğünü belirtme.",
        "usages": [
          "Sabahtan beri süren eylemler (I have been waiting for two hours)",
          "Hala devam eden yağmur veya kar"
        ],
        "nonUsages": [
          "Stative fiiller (know, like, have asla continuous almaz)",
          "Bir kerede tamamlanan eylemler"
        ],
        "positiveFormula": "Subject + have/has been + V-ing",
        "negativeFormula": "Subject + haven't/hasn't been + V-ing",
        "questionFormula": "How long have you been waiting?",
        "shortAnswers": "For about twenty minutes.",
        "subjectVerbAgreement": "I, you, we, they -> have been; he, she, it -> has been.",
        "verbForm": "have/has been + V-ing (waiting, reading, running).",
        "auxiliaryVerb": "have been / has been",
        "timeMarkers": [
          "for two hours",
          "since morning",
          "all day",
          "how long"
        ],
        "signals": [
          "how long",
          "for hours",
          "all morning"
        ],
        "timeline": "[2 Saat Önce Başladı] ======= Süreç Halen Devam Ediyor ======> [Şu An]",
        "examples": [
          "It has been raining all morning, so the roads are wet.",
          "She has been studying English for three years."
        ],
        "exampleTr": [
          "Bütün sabahtır yağmur yağıyor, bu yüzden yollar ıslak."
        ],
        "code": "Süre Vurgusu (How long / all day) = have/has been + V-ing!",
        "visualMemory": "Dışarıda aralıksız yağan yağmur ve sırılsıklam olmuş sokaklar 🌧️☔",
        "commonMistake": "Stative fiili bu kalıba sokmak (*I have been knowing him for years*).",
        "correctWrongContrast": {
          "wrong": "I have been knowing Sarah for five years.",
          "correct": "I have known Sarah for five years.",
          "note": "'know' durum fiilidir, -ing alamaz. Süreç olsa bile Present Perfect Simple (have known) kullanılır.",
          "explanation": "'know' durum fiilidir, -ing alamaz. Süreç olsa bile Present Perfect Simple (have known) kullanılır."
        },
        "differenceFromSimilarTense": "Present Continuous sadece şu anı söyler (It is raining); Present Perfect Continuous ise ne kadar süredir yağdığını vurgular (It has been raining for 3 hours).",
        "levelTactic": "Cümlede 'all day, for hours' gibi kesintisiz süreç ve devam eden eylem varsa 'have/has been V-ing' ara.",
        "miniTest": {
          "question": "Look at the snow! It ---- non-stop since yesterday evening.",
          "options": [
            "has been falling",
            "is falling",
            "fell",
            "was falling",
            "falls"
          ],
          "answer": 0,
          "explanation": "'Since yesterday evening' ve aralıksız süreç vurgusu: 'has been falling'."
        },
        "explainedAnswer": "Doğru yanıt A (has been falling). Dünden beri devam eden aralıksız süreç Present Perfect Continuous ile aktarılır.",
        "signalWords": [
          "how long",
          "for hours",
          "all morning"
        ]
      },
      "A2": {
        "title": "Gözle Görülür Sonuç / Kanıt Bildiren Yakın Geçmiş",
        "basicMeaning": "Eylem az önce bitmiş veya durmuş olsa bile, gözle görülür somut izi ve yorgunluğu şu an üzerimizde durur.",
        "usages": [
          "Nefes nefese olma hali (I am out of breath because I have been running)",
          "Üstü başı boya içinde olma (He has been painting the wall)"
        ],
        "nonUsages": [
          "Eylemin kaç kere yapıldığı (sayı/miktar bildirildiğinde Simple kullanılır)"
        ],
        "positiveFormula": "Subject + have/has been + V-ing (Gözle görülür sonuç cümlesi eşliğinde)",
        "negativeFormula": "Why are your hands dirty? What have you been doing?",
        "questionFormula": "Have you been working in the garden? Your clothes are muddy.",
        "shortAnswers": "Yes, I have.",
        "subjectVerbAgreement": "Özneye göre have/has been seçilir.",
        "verbForm": "have/has been + V-ing",
        "auxiliaryVerb": "have been / has been",
        "timeMarkers": [
          "lately",
          "recently",
          "for the last hour",
          "all afternoon"
        ],
        "signals": [
          "tired because",
          "hands are dirty",
          "out of breath"
        ],
        "timeline": "Eylem az önce durdu [====== Süreç ======]| ---> Sonuç: Terli/Yorgun/Çamurlu",
        "examples": [
          "His clothes are covered in grease because he has been repairing his car.",
          "She is exhausted because she has been working on her dissertation all night."
        ],
        "exampleTr": [
          "Kıyafetleri yağ içinde çünkü arabasını tamir ediyordu."
        ],
        "code": "Yorgunluk / Çamur / Islaklık Kanıtı = have/has been + V-ing!",
        "visualMemory": "Nefes nefese kalmış koşan atlet ve terli alnı 🏃‍♂️💦",
        "commonMistake": "Kaç adet yapıldığını (miktar) söylerken continuous kullanmak (*I have been writing 5 letters*).",
        "correctWrongContrast": {
          "wrong": "I have been writing five reports today.",
          "correct": "I have written five reports today.",
          "note": "Eğer sonuçta kaç adet üretildiği (five reports) söyleniyorsa Simple Present Perfect (have written) kullanılır.",
          "explanation": "Eğer sonuçta kaç adet üretildiği (five reports) söyleniyorsa Simple Present Perfect (have written) kullanılır."
        },
        "differenceFromSimilarTense": "I have painted the wall (Duvar bitti, renkli); I have been painting the wall (Üstüm boya içinde, ne kadar sürdüğü vurgulu).",
        "levelTactic": "Cümlede 'tired, exhausted, muddy, dirty' gibi fiziksel bir kanıt varsa, arkasındaki eylem için have/has been V-ing ara.",
        "miniTest": {
          "question": "The athlete is panting heavily because he ---- sprint intervals on the track.",
          "options": [
            "has been running",
            "ran",
            "is running",
            "had run",
            "runs"
          ],
          "answer": 0,
          "explanation": "'Is panting heavily' (ağır nefes alıyor) anlık fiziksel kanıttır; sebebi 'has been running' sürecidir."
        },
        "explainedAnswer": "Doğru yanıt A (has been running). Somut fiziksel etki doğuran yakın süreç Present Perfect Continuous gerektirir.",
        "signalWords": [
          "tired because",
          "hands are dirty",
          "out of breath"
        ]
      },
      "B1": {
        "title": "Süreç (Process) vs Sonuç (Product) Ayrımı",
        "basicMeaning": "Present Perfect Simple (tamamlanmış ürün/sonuç) ile Continuous (devam eden süreç/uğraş) arasındaki kesin fark.",
        "usages": [
          "Süreç odaklı sorular (How long have you been learning Turkish?)",
          "Sonuç odaklı sorular (How many books have you read?)"
        ],
        "nonUsages": [
          "Sonuçlanan miktarlarda continuous kullanımı"
        ],
        "positiveFormula": "Process: S + have/has been + V-ing vs Product: S + have/has + V3",
        "negativeFormula": "He hasn't been practicing regularly lately.",
        "questionFormula": "How long have you been coding this algorithm?",
        "shortAnswers": "For six hours straight.",
        "subjectVerbAgreement": "Özneye göre have/has been.",
        "verbForm": "have/has been + V-ing",
        "auxiliaryVerb": "have been / has been",
        "timeMarkers": [
          "for hours",
          "since early morning",
          "how long",
          "all week long"
        ],
        "signals": [
          "how long",
          "for weeks",
          "unbroken process"
        ],
        "timeline": "Süreç Cetveli: [==== Kesintisiz Çaba / Uğraş ====>]",
        "examples": [
          "I have been reading that novel all afternoon (süreç devam ediyor).",
          "I have read 150 pages of that novel (tamamlanan ürün miktarı)."
        ],
        "exampleTr": [
          "Bütün öğleden sonradır o romanı okuyorum."
        ],
        "code": "KAÇ TANE? = Have/Has V3! NE KADARDIR? = Have/Has been V-ing!",
        "visualMemory": "Yarım kalmış tuval karşısında fırça sallayan ressam 🎨🖌️",
        "commonMistake": "'How many' sorusuna continuous ile cevap vermek.",
        "correctWrongContrast": {
          "wrong": "How many emails have you been sending this morning?",
          "correct": "How many emails have you sent this morning?",
          "note": "'How many' miktar sorar, Simple Perfect (have sent) ister.",
          "explanation": "'How many' miktar sorar, Simple Perfect (have sent) ister."
        },
        "differenceFromSimilarTense": "I have been washing the dishes (uğraşıyorum, ellerim köpüklü); I have washed the dishes (bulaşıklar bitti, dolapta).",
        "levelTactic": "'How long' varsa continuous; 'How many / How much' varsa Simple Perfect seç.",
        "miniTest": {
          "question": "The software architecture team ---- on the encryption module for three weeks, but they ---- the final version yet.",
          "options": [
            "has been working / have not finalized",
            "worked / did not finalize",
            "is working / had not finalized",
            "has worked / were not finalizing",
            "had been working / do not finalize"
          ],
          "answer": 0,
          "explanation": "İlk taraf 3 haftalık süreci (has been working), ikinci taraf ise yet ile bitmemiş sonucu (have not finalized) anlatır."
        },
        "explainedAnswer": "Doğru yanıt A (has been working / have not finalized). Süreç vurgusu continuous, 'yet' sonucu ise Simple Perfect ister.",
        "signalWords": [
          "how long",
          "for weeks",
          "unbroken process"
        ]
      },
      "B2": {
        "title": "Kümülatif Ekolojik ve Klimatolojik Süreçler",
        "basicMeaning": "Çevre, iklim ve jeolojik sistemlerde onlarca yıldır kesintisiz süregelen yıpranma veya birikme süreçleri.",
        "usages": [
          "Buzulların on yıllardır erime süreci",
          "Ormansızlaşmanın ve çölleşmenin süregelen baskısı"
        ],
        "nonUsages": [
          "Tek bir yılda gerçekleşip kapanmış afetler"
        ],
        "positiveFormula": "Ecosystem Subject + has/have been experiencing / degrading / shrinking + for decades",
        "negativeFormula": "Authorities have not been monitoring industrial runoff adequately.",
        "questionFormula": "How long have global ocean temperatures been steadily climbing?",
        "shortAnswers": "For over half a century.",
        "subjectVerbAgreement": "Kolektif ve ekolojik isimlerde tekil/çoğul kuralı (Glaciers have been vs Permafrost has been).",
        "verbForm": "have/has been + V-ing",
        "auxiliaryVerb": "have been / has been",
        "timeMarkers": [
          "for decades",
          "since the mid-20th century",
          "uninterruptedly",
          "consistently"
        ],
        "signals": [
          "has been steadily rising",
          "have been shrinking for decades"
        ],
        "timeline": "On yıllardır aralıksız eriyen buzul bandı 🏔️🧊",
        "examples": [
          "Alpine glaciers have been retreating at an alarming speed since the onset of rapid industrialization.",
          "Climatologists have been gathering oceanic salinity data for more than thirty years."
        ],
        "exampleTr": [
          "Alp buzulları, hızlı sanayileşmenin başlangıcından bu yana endişe verici bir hızla geri çekilmektedir."
        ],
        "code": "Ekolojik Süreç (retreating / warming for decades) = have/has been V-ing!",
        "visualMemory": "Yıl yıl küçülen Arktik deniz buzu uydu haritası 🛰️🧊",
        "commonMistake": "On yıllardır kesintisiz süren ekolojik erimeyi tekil bir geçmiş eylem gibi sunmak.",
        "correctWrongContrast": {
          "wrong": "Polar ice caps melted for the last thirty years.",
          "correct": "Polar ice caps have been melting for the last thirty years.",
          "note": "'For the last thirty years' aralıksız devam eden süreçtir, Present Perfect Continuous gerektirir.",
          "explanation": "'For the last thirty years' aralıksız devam eden süreçtir, Present Perfect Continuous gerektirir."
        },
        "differenceFromSimilarTense": "Melted (eridi bitti); Has been melting (otuz yıldır eriyor ve şu an hala erimeye devam ediyor).",
        "levelTactic": "Çevre ve iklim metinlerinde 'for decades, since the 1970s' ve dinamik erime/ısınma fiilleri gördüğünde 'have been V-ing' ara.",
        "miniTest": {
          "question": "Hydrologists warn that subterranean aquifers in the region ---- at an unsustainable rate for several decades.",
          "options": [
            "have been depleting",
            "depleted",
            "had been depleting",
            "were depleting",
            "deplete"
          ],
          "answer": 0,
          "explanation": "'For several decades' süregelen yeraltı su kaybı sürecini Present Perfect Continuous ile bildirir."
        },
        "explainedAnswer": "Doğru yanıt A (have been depleting). On yıllardır süregelen ekolojik tükenme süreci Present Perfect Continuous ile aktarılır.",
        "signalWords": [
          "has been steadily rising",
          "have been shrinking for decades"
        ]
      },
      "C1": {
        "title": "Sosyo-Politik Süreçlerde Kümülatif Gerginlikler",
        "basicMeaning": "Uluslararası ilişkilerde veya toplumsal yapılarda uzun süredir mayalanmakta olan diplomatik krizler.",
        "usages": [
          "Toplumsal hoşnutsuzluğun aylardır süren birikimi",
          "Diplomatik müzakerelerin tıkanma süreci"
        ],
        "nonUsages": [
          "Tek bir imza ile sonlanan antlaşmalar"
        ],
        "positiveFormula": "Diplomatic factions have been wrestling with the territorial dispute for years.",
        "negativeFormula": "The conflicting parties have not been negotiating in good faith.",
        "questionFormula": "For how many sessions have negotiators been deliberating the trade tariffs?",
        "shortAnswers": "For several rounds of dialogue.",
        "subjectVerbAgreement": "Özneler arası dilbilgisel uyum.",
        "verbForm": "have/has been + V-ing",
        "auxiliaryVerb": "have been / has been",
        "timeMarkers": [
          "for months on end",
          "without interruption",
          "since the diplomatic breakdown"
        ],
        "signals": [
          "have been grappling with",
          "has been simmering for months"
        ],
        "timeline": "Sürekli basınç toplayan diplomatik kazan [Kümülatif Gerginlik].",
        "examples": [
          "Border communities have been enduring intermittent artillery exchanges for months on end.",
          "Legal scholars have been scrutinizing the ambiguities of the maritime treaty since its initial drafting."
        ],
        "exampleTr": [
          "Sınır toplulukları aylardır aralıksız süren topçu tacizlerine maruz kalmaktadır."
        ],
        "code": "Siyasi Kriz Birikimi = have been grappling / enduring for months!",
        "visualMemory": "Diplomasi masasında saatlerdir süren yorucu müzakere ve biriken evraklar 🏛️📑",
        "commonMistake": "Süregelen diplomatik krizi Past Perfect Continuous (had been) ile kapatıp bugünden koparmak.",
        "correctWrongContrast": {
          "wrong": "Diplomats had been debating the clause for weeks now.",
          "correct": "Diplomats have been debating the clause for weeks now.",
          "note": "'now' bugündür; had been geçmişte kalmış süreçtir. 'have been debating' kullanılmalıdır.",
          "explanation": "'now' bugündür; had been geçmişte kalmış süreçtir. 'have been debating' kullanılmalıdır."
        },
        "differenceFromSimilarTense": "Had been debating (görüşmeler geçmişte kesildi); Have been debating (şu an hala tartışıyorlar).",
        "levelTactic": "'for weeks now, since the dispute began' ifadeleri bugüne bağlandığı için have/has been V-ing gerektirir.",
        "miniTest": {
          "question": "Trade representatives ---- over the contentious intellectual property clauses for three consecutive days now.",
          "options": [
            "have been wrangling",
            "wrangled",
            "had been wrangling",
            "were wrangling",
            "wrangle"
          ],
          "answer": 0,
          "explanation": "'For three consecutive days now' (üç gündür şu ana kadar) süreci Present Perfect Continuous (have been wrangling) gerektirir."
        },
        "explainedAnswer": "Doğru yanıt A (have been wrangling). 'For ... now' kalıbı bugüne uzanan canlı süreci bildirir.",
        "signalWords": [
          "have been grappling with",
          "has been simmering for months"
        ]
      },
      "C2": {
        "title": "Epistemolojik Arayışlar ve Kesintisiz Entelektüel Sorgulama",
        "basicMeaning": "Felsefe ve bilim dünyasında asırlardır durmaksızın devam eden entelektüel arayış süreci.",
        "usages": [
          "Bilinç ve varoluş üzerine yüzyıllardır süren felsefi sorgulama",
          "Bilim insanlarının evrenin kökenini araştırma çabası"
        ],
        "nonUsages": [
          "Sonuca ulaşılmış ve kapatılmış kanıtlar"
        ],
        "positiveFormula": "Philosophers and cognitive theorists have been unravelling the enigma of consciousness...",
        "negativeFormula": "Neuroscience has not been progressing in a linear trajectory.",
        "questionFormula": "How long have cosmologists been tracking background microwave radiation?",
        "shortAnswers": "Since its incidental discovery.",
        "subjectVerbAgreement": "Kolektif felsefi ve bilimsel özneler.",
        "verbForm": "have/has been + V-ing",
        "auxiliaryVerb": "have been / has been",
        "timeMarkers": [
          "for generations",
          "unceasingly",
          "throughout modern epistemology"
        ],
        "signals": [
          "have been striving to",
          "have been seeking to unravel"
        ],
        "timeline": "Nesiller boyu kesintisiz devam eden düşünsel meşale yürüyüşü 🏃‍♂️🔥",
        "examples": [
          "Theoretical physicists have been laboring for decades to construct a unified theory that reconciles quantum mechanics with general relativity.",
          "Ethicists have been grappling with the moral dimensions of artificial sentience since the inception of autonomous systems."
        ],
        "exampleTr": [
          "Teorik fizikçiler, kuantum mekaniğini genel görelilikle bağdaştıran birleşik bir teori inşa etmek için onlarca yıldır çabalamaktadır."
        ],
        "code": "Asırlık Bilimsel Arayış = have been laboring / grappling for decades!",
        "visualMemory": "Kuantum denklemleri yazılı devasa karatahta ve çalışan bilim ekibi ⚛️🔬",
        "commonMistake": "Devam eden teorik çabayı tamamlanmış gibi 'have constructed' demek (henüz birleşik teori bulunamadı, süreç sürüyor).",
        "correctWrongContrast": {
          "wrong": "Physicists have constructed a unified theory for decades.",
          "correct": "Physicists have been striving to construct a unified theory for decades.",
          "note": "Çaba sürmektedir, continuous ile çaba vurgulanmalıdır.",
          "explanation": "Çaba sürmektedir, continuous ile çaba vurgulanmalıdır."
        },
        "differenceFromSimilarTense": "Have constructed (başardılar, teori bitti); Have been striving to construct (onlarca yıldır uğraşıyorlar, süreç devam ediyor).",
        "levelTactic": "Akademik çaba bildiren 'labor, strive, grapple, investigate' fiillerinde 'for decades' ile continuous arayışa dikkat et.",
        "miniTest": {
          "question": "For over half a century, linguists ---- to determine whether universal grammar constitutes a genetically hardwired neural architecture.",
          "options": [
            "have been striving",
            "strove",
            "had been striving",
            "were striving",
            "strive"
          ],
          "answer": 0,
          "explanation": "'For over half a century' kesintisiz entelektüel araştırma sürecini Present Perfect Continuous (have been striving) ile bildirir."
        },
        "explainedAnswer": "Doğru yanıt A (have been striving). Yarım asırdır süregelen arayış süreci continuous kalıbı gerektirir.",
        "signalWords": [
          "have been striving to",
          "have been seeking to unravel"
        ]
      },
      "YDS": {
        "title": "ÖSYM'nin 'How Long' ve Süreç Soruları: have/has been V-ing Tespiti",
        "basicMeaning": "YDS/YDT'de 'for + süre' veya 'since' ile birlikte kesintisiz eylem bildiren soru tipleri.",
        "usages": [
          "For + time / Since + time ile süregelen dinamik eylemler",
          "Stative fiil tuzağı: Stative fiiller 'for' alsa bile continuous OLAMAZ, Simple kalır (have known)",
          "Eylemin fiziksel yorgunluk veya gözle görülür kanıt doğurması"
        ],
        "nonUsages": [
          "Stative fiillerin (understand, believe, resemble) 'have been understanding' yapılması YASAKTIR"
        ],
        "positiveFormula": "Subject + have/has been + V-ing + for [time duration]",
        "negativeFormula": "Regulators have not been implementing the safety guidelines strictly.",
        "questionFormula": "How long have researchers been investigating the subterranean biosphere?",
        "shortAnswers": "For roughly two decades.",
        "subjectVerbAgreement": "ÖSYM uzun özneli sorularda 'have' mi 'has' mi ayrımını test eder.",
        "verbForm": "have/has been + V-ing",
        "auxiliaryVerb": "have been / has been",
        "timeMarkers": [
          "for the past several years",
          "since the late 1990s",
          "all day long",
          "uninterruptedly"
        ],
        "signals": [
          "have been researching",
          "has been expanding for years"
        ],
        "timeline": "Sınav Sorusu: [Yıllardır Kesintisiz Süren Faaliyet] ===> have/has been V-ing",
        "examples": [
          "Anthropologists have been excavating the prehistoric site for over twenty years, continually uncovering sophisticated stone implements.",
          "The atmospheric research team has been recording stratospheric temperatures since the early 1980s."
        ],
        "exampleTr": [
          "Antropologlar yirmi yılı aşkın süredir tarih öncesi yerleşim yerinde kazı yapmakta ve sürekli olarak gelişmiş taş aletler gün yüzüne çıkarmaktadır."
        ],
        "code": "YDS Formülü: 'for over 20 years' + Dinamik Fiil (excavate, research) = HAVE/HAS BEEN V-ING!",
        "visualMemory": "Arkeolojik kazı çadırında 20 yıldır fırçayla fosil temizleyen bilim insanı ⛏️🦴",
        "commonMistake": "Cümledeki 'continually uncovering' dinamik sürecini görmezden gelip Simple Past seçmek.",
        "correctWrongContrast": {
          "wrong": "Researchers investigated this phenomenon for ten years now.",
          "correct": "Researchers have been investigating this phenomenon for ten years now.",
          "note": "'for ten years now' süreci bugüne uzatır; 'have been investigating' şarttır.",
          "explanation": "'for ten years now' süreci bugüne uzatır; 'have been investigating' şarttır."
        },
        "differenceFromSimilarTense": "Stative fiil varsa 'have known for 10 years'; Dinamik eylem varsa 'have been working for 10 years'.",
        "levelTactic": "Soru kökünde 'for ... years' gördüğünde fiile bak: Eğer durum fiili değilse (work, study, rain, investigate gibi eylemse) 'have/has been V-ing' en güçlü adaydır.",
        "miniTest": {
          "question": "Seismologists ---- seismic anomalies along the subduction zone for more than a decade, hoping to develop an early warning system.",
          "options": [
            "have been tracking",
            "tracked",
            "had tracked",
            "were tracking",
            "track"
          ],
          "answer": 0,
          "explanation": "'For more than a decade' ve 'hoping to develop' süregelen canlı araştırmayı (have been tracking) gerektirir."
        },
        "explainedAnswer": "Doğru yanıt A (have been tracking). On yılı aşkın süredir devam eden izleme süreci Present Perfect Continuous ister.",
        "signalWords": [
          "have been researching",
          "has been expanding for years"
        ]
      }
    }
  },
  {
    "slug": "past-perfect",
    "name": "Past Perfect Tense",
    "turkish": "Öncesi Geçmiş Zaman (Past of the Past)",
    "emoji": "🕰️",
    "summary": "Geçmişteki iki olaydan daha önce gerçekleşeni (geçmişin geçmişi), by the time kalıbı ve dolaylı anlatım (reported speech) aktarımları.",
    "levels": {
      "A1": {
        "title": "Geçmişin Geçmişi: İki Olayın Sıralaması",
        "basicMeaning": "Geçmişte iki şey oldu; bunlardan ilk önce biteni belirtmek için 'had + V3' kullanılır.",
        "usages": [
          "Geçmişteki iki olaydan önce biteni anlatma (When I arrived, the train had left)",
          "İlk gerçekleşen olay vurgusu"
        ],
        "nonUsages": [
          "Geçmişte tek başına duran ve kıyaslanacak ikinci bir geçmiş olay bulunmayan durumlar"
        ],
        "positiveFormula": "Subject + had + V3",
        "negativeFormula": "Subject + had not (hadn't) + V3",
        "questionFormula": "Had + Subject + V3 before + [past action]?",
        "shortAnswers": "Yes, I had. / No, they hadn't.",
        "subjectVerbAgreement": "Tüm şahıslarda (I, you, he, she, it, we, they) 'had' kullanılır.",
        "verbForm": "had + V3 (düzensiz: had gone, had seen; düzenli: had finished).",
        "auxiliaryVerb": "had",
        "timeMarkers": [
          "before",
          "after",
          "already",
          "when",
          "by the time"
        ],
        "signals": [
          "had already left",
          "before he arrived"
        ],
        "timeline": "[1. Olay (had V3)] <--- [2. Olay (V2)] <--- [Bugün]",
        "examples": [
          "When we reached the cinema, the movie had already started.",
          "She had finished her dinner before her father came home."
        ],
        "exampleTr": [
          "Sinemaya vardığımızda film çoktan başlamıştı."
        ],
        "code": "Geçmişin Geçmişi: Önce olan = HAD + V3! Sonra olan = V2!",
        "visualMemory": "Gara geç kalan yolcunun kaçırdığı trenin arkasından bakması 🚂🏃‍♂️",
        "commonMistake": "Sonra olan olaya had V3, önce olan olaya V2 vermek.",
        "correctWrongContrast": {
          "wrong": "When the movie started, we had reached the cinema.",
          "correct": "When we reached the cinema, the movie had already started.",
          "note": "Önce film başladı (had started), sonra biz vardık (reached).",
          "explanation": "Önce film başladı (had started), sonra biz vardık (reached)."
        },
        "differenceFromSimilarTense": "Simple Past eylemleri oluş sırasıyla söyler (I ate and slept); Past Perfect ise sırayı tersinden vurgulayabilir.",
        "levelTactic": "İki geçmiş eylemden hangisinin zamanda daha önce bittiğini bul; o eyleme 'had + V3' ver.",
        "miniTest": {
          "question": "By the time the rescue team reached the isolated cabin, the lost hikers ----.",
          "options": [
            "had already left",
            "already left",
            "have already left",
            "are already leaving",
            "leave"
          ],
          "answer": 0,
          "explanation": "'By the time + V2' (kurtarma ekibi vardığında), dağcılar daha önce ayrılmıştı: 'had already left'."
        },
        "explainedAnswer": "Doğru yanıt A (had already left). By the time + V2 kuralı gereğince ana cümlede Past Perfect kullanılır.",
        "signalWords": [
          "had already left",
          "before he arrived"
        ]
      },
      "A2": {
        "title": "'By the time' Kuralı ve Zaman Önceliği",
        "basicMeaning": "'By the time' geçmiş zaman bağlacı ile kurulan standart zaman mekaniği.",
        "usages": [
          "By the time + Simple Past (V2), Past Perfect (had V3)",
          "Already, just, never ile geçmiş öncelik bildirme"
        ],
        "nonUsages": [
          "Present veya Future bağlamlarda 'had V3' kullanımı"
        ],
        "positiveFormula": "By the time + Subject + V2, Subject + had + V3",
        "negativeFormula": "By the time he woke up, the bus hadn't arrived yet.",
        "questionFormula": "Had the fire brigade arrived by the time the building collapsed?",
        "shortAnswers": "Yes, they had.",
        "subjectVerbAgreement": "Tüm şahıslarda had sabittir.",
        "verbForm": "had + V3",
        "auxiliaryVerb": "had",
        "timeMarkers": [
          "by the time + past",
          "by 10 pm yesterday",
          "by then",
          "prior to"
        ],
        "signals": [
          "By the time ... V2, had V3",
          "by 1990 (geçmiş referans)"
        ],
        "timeline": "Sınır Noktası [V2] <=== Ondan Önce Tamamlanan [had V3]",
        "examples": [
          "By the time the ambulance arrived, the doctor had stabilized the patient.",
          "By 1900, many European capitals had installed electric lighting."
        ],
        "exampleTr": [
          "Ambulans vardığında, doktor hastayı çoktan stabilize etmişti."
        ],
        "code": "By the time + V2 ===> Diğer taraf HAD V3!",
        "visualMemory": "Varış çizgisine gelindiğinde ödülün çoktan alınmış olması 🏁🏆",
        "commonMistake": "By the time'ın hemen arkasındaki yan cümleye had V3 koymak.",
        "correctWrongContrast": {
          "wrong": "By the time the doctor had arrived, the patient died.",
          "correct": "By the time the doctor arrived, the patient had died.",
          "note": "'By the time' yan cümlesi V2, ana cümle had V3 olur.",
          "explanation": "'By the time' yan cümlesi V2, ana cümle had V3 olur."
        },
        "differenceFromSimilarTense": "When he arrived, they had left (vardığında gitmişlerdi); When he arrived, they left (vardı, sonra gittiler).",
        "levelTactic": "'By the time' yan cümlesinde V2 görüyorsan diğer boşluğa hemen 'had V3' koy.",
        "miniTest": {
          "question": "By the time the fire department arrived at the warehouse, the blaze ---- the entire structure.",
          "options": [
            "had consumed",
            "consumed",
            "has consumed",
            "was consuming",
            "consumes"
          ],
          "answer": 0,
          "explanation": "'By the time + arrived (V2)' kuralı ana cümlede Past Perfect (had consumed) gerektirir."
        },
        "explainedAnswer": "Doğru yanıt A (had consumed). By the time geçmiş kalıbında ana cümle had V3 olur.",
        "signalWords": [
          "By the time ... V2, had V3",
          "by 1990 (geçmiş referans)"
        ]
      },
      "B1": {
        "title": "Gereksiz Past Perfect Tuzağı ve 'Before/After' Mantığı",
        "basicMeaning": "Before ve After bağlaçları zaten zaman sırasını açıkça bildirdiği için Past Perfect kullanımının tercihe bağlı olması.",
        "usages": [
          "Before / After ile zaman sırası (After he had eaten = After he ate)",
          "Tek başına duran cümlelerde Past Perfect'in YANLIŞ olması (ikinci geçmiş olay şartı)"
        ],
        "nonUsages": [
          "Cümlede hiçbir geçmiş referans noktası yokken süs olsun diye had V3 kullanmak"
        ],
        "positiveFormula": "After + Subject + had V3 / V2, Subject + V2",
        "negativeFormula": "He did not submit the report before the supervisor had reviewed it.",
        "questionFormula": "Did the team celebrate after they had won the tournament?",
        "shortAnswers": "Yes, they did.",
        "subjectVerbAgreement": "Klasik had çekimi.",
        "verbForm": "had + V3 veya V2",
        "auxiliaryVerb": "had / did",
        "timeMarkers": [
          "before",
          "after",
          "as soon as (geçmişte)",
          "until (geçmişte)"
        ],
        "signals": [
          "After ... had V3, V2",
          "redundancy rule"
        ],
        "timeline": "Kronolojik sıralama bağlaçla zaten netse her iki taraf da V2 olabilir.",
        "examples": [
          "After the archaeologists had catalogued the artifacts, they transported them to the museum.",
          "She turned off the lights before she left the office."
        ],
        "exampleTr": [
          "Arkeologlar eserleri katalogladıktan sonra müzeye naklettiler."
        ],
        "code": "Altın Kural: Kıyaslanacak 2. bir geçmiş olay YOKSA had V3 KULLANILMAZ!",
        "visualMemory": "Yalnız başına duran 'had V3'ün arkadaşı olan 'V2'yi araması 🔍",
        "commonMistake": "Cümlede sadece tek bir geçmiş eylem varken had V3 kullanmak (*In 1920, he had died*).",
        "correctWrongContrast": {
          "wrong": "Albert Einstein had died in 1955.",
          "correct": "Albert Einstein died in 1955.",
          "note": "Kıyaslanan başka bir olay yoksa sadece Simple Past (died) kullanılır.",
          "explanation": "Kıyaslanan başka bir olay yoksa sadece Simple Past (died) kullanılır."
        },
        "differenceFromSimilarTense": "In 1955 he died (V2); By 1955 he had published many papers (1955'e kadar yayınlamıştı - had V3).",
        "levelTactic": "Seçenek eleme taktiği: Soruda ikinci bir geçmiş olay veya 'by + geçmiş tarih' yoksa had V3 seçeneklerini doğrudan ele!",
        "miniTest": {
          "question": "The treaty ---- diplomatic tensions in the region long before the formal summit ----.",
          "options": [
            "had resolved / convened",
            "resolved / has convened",
            "has resolved / convened",
            "had resolved / had convened",
            "was resolving / convenes"
          ],
          "answer": 0,
          "explanation": "'Long before' ile zirve toplanmadan (convened - V2) çok önce gerginliğin çözüldüğü (had resolved) bildirilir."
        },
        "explainedAnswer": "Doğru yanıt A (had resolved / convened). Zirve toplanmasından önceki olay had V3 ile verilir.",
        "signalWords": [
          "After ... had V3, V2",
          "redundancy rule"
        ]
      },
      "B2": {
        "title": "Üçüncü Tip Koşul Cümleleri (Type 3) ve Pişmanlıklar (Wish Clauses)",
        "basicMeaning": "Geçmişte gerçekleşmemiş şartlar ve pişmanlıklar (If I had known, I would have told).",
        "usages": [
          "Conditional Type 3 (If + had V3, would have V3)",
          "I wish / If only + had V3 (Geçmişe dair pişmanlık ve keşkeler)"
        ],
        "nonUsages": [
          "Şu anki hayaller (Type 2 - onlar V2 alır)"
        ],
        "positiveFormula": "If + Subject + had + V3, Subject + would/could/might have + V3",
        "negativeFormula": "If the safety valve hadn't failed, the explosion wouldn't have occurred.",
        "questionFormula": "Would the crisis have been averted if authorities had acted sooner?",
        "shortAnswers": "Yes, it would have.",
        "subjectVerbAgreement": "Had tüm şahıslarla sabittir.",
        "verbForm": "had + V3",
        "auxiliaryVerb": "had / would have",
        "timeMarkers": [
          "if only",
          "I wish",
          "had they known (inversion)",
          "in retrospective"
        ],
        "signals": [
          "If + had V3, would have V3",
          "I wish + had V3"
        ],
        "timeline": "Geçmişte yaşanmış gerçeklik vs Geçmişte gerçekleşmeyen hayali alternatif 🔀",
        "examples": [
          "If engineers had reinforced the retaining wall, the landslide would not have destroyed the roadway.",
          "I wish I had accepted the scholarship offer when it was presented."
        ],
        "exampleTr": [
          "Mühendisler istinat duvarını güçlendirmiş olsaydı, heyelan karayolunu yıkmamış olurdu."
        ],
        "code": "Geçmiş Şart (Type 3): If + HAD V3, WOULD HAVE V3!",
        "visualMemory": "Yol ayrımında kaçırılan tabela ve pişmanlıkla arkaya bakan sürücü 🛣️🤦‍♂️",
        "commonMistake": "If'in yanına would have koymak (*If I would have known*).",
        "correctWrongContrast": {
          "wrong": "If the radar would have detected the anomaly, the collision could be avoided.",
          "correct": "If the radar had detected the anomaly, the collision could have been avoided.",
          "note": "If yan cümlesinde had V3, ana cümlede could have V3 kullanılır.",
          "explanation": "If yan cümlesinde had V3, ana cümlede could have V3 kullanılır."
        },
        "differenceFromSimilarTense": "Type 2 bugünün hayalidir (If I had wings); Type 3 geçmişin pişmanlığıdır (If I had known).",
        "levelTactic": "Ana cümlede 'would/could/might have V3' gördüğün an If yan cümlesine 'had V3' koy (veya devrik Had + S + V3 ara).",
        "miniTest": {
          "question": "Had the intelligence agency ---- the intercepted transmission, the coordinated assault ---- preempted.",
          "options": [
            "deciphered / could have been",
            "decipher / could be",
            "has deciphered / will be",
            "deciphered / was",
            "had deciphered / had been"
          ],
          "answer": 0,
          "explanation": "Devrik Type 3 koşul cümlesi (Had + Subject + V3): 'deciphered' ve ana cümlede 'could have been preempted'."
        },
        "explainedAnswer": "Doğru yanıt A (deciphered / could have been). Devrik Type 3 kalıbında 'Had S V3' ve 'could have V3' uyumu esastır.",
        "signalWords": [
          "If + had V3, would have V3",
          "I wish + had V3"
        ]
      },
      "C1": {
        "title": "Tarihsel 'Counterfactual' Analiz ve İnversiyon (Devriklik)",
        "basicMeaning": "Tarih yazımında 'şöyle olmasaydı böyle olurdu' analizi ve 'Had it not been for' devrik kalıpları.",
        "usages": [
          "Had it not been for + noun (Şu olmasaydı...)",
          "İnversion: Had the emperor realized... (İmparator fark etmiş olsaydı...)"
        ],
        "nonUsages": [
          "Geleceğe dönük devriklikler (Should S V1)"
        ],
        "positiveFormula": "Had + Subject + V3, Subject + would have + V3",
        "negativeFormula": "Had it not been for the decisive naval intervention, the fortress would have fallen.",
        "questionFormula": "How would the balance of power have shifted had the coalition dissolved?",
        "shortAnswers": "It would have emboldened rival empires.",
        "subjectVerbAgreement": "Devrik yapıda had başa gelir, özne ikinci sırada yer alır.",
        "verbForm": "Had + Subject + V3",
        "auxiliaryVerb": "had",
        "timeMarkers": [
          "had it not been for",
          "counterfactually",
          "retrospectively"
        ],
        "signals": [
          "Had + S + V3 (without if)",
          "Had it not been for"
        ],
        "timeline": "Tarihsel alternatif senaryo simülasyonu.",
        "examples": [
          "Had the diplomatic mission succeeded in 1914, millions of lives might have been spared.",
          "Had it not been for penicillin, infectious diseases would have decimated civilian populations."
        ],
        "exampleTr": [
          "Diplomatik misyon 1914'te başarılı olmuş olsaydı, milyonlarca hayat kurtarılmış olabilirdi."
        ],
        "code": "Devrik Geçmiş Şart: Had + Özne + V3 = If + Özne + had V3!",
        "visualMemory": "Tarihçinin elindeki satranç tahtasında alternatif hamleleri incelemesi ♟️📜",
        "commonMistake": "Devrik cümlede if aramak (If atılır, had başa gelir!).",
        "correctWrongContrast": {
          "wrong": "If had the general retreated, his army survived.",
          "correct": "Had the general retreated, his army would have survived.",
          "note": "Devrik yapıda 'if' tamamen kalkar, 'had' başa geçer.",
          "explanation": "Devrik yapıda 'if' tamamen kalkar, 'had' başa geçer."
        },
        "differenceFromSimilarTense": "Standart if clause ile anlam birdir; ancak 'Had S V3' çok daha resmi ve akademik bir tondur.",
        "levelTactic": "Cümle başında 'Had + Subject + V3' görürsen bunun 'If + S + had V3' olduğunu anla ve ana cümlede 'would have V3' ara.",
        "miniTest": {
          "question": "---- the antibiotic regimen in its entirety, the bacterial colony ---- drug-resistant mutations.",
          "options": [
            "Had the patient not completed / would have developed",
            "If the patient didn't complete / developed",
            "Did the patient complete / will develop",
            "Had the patient completed / had developed",
            "Should the patient complete / would develop"
          ],
          "answer": 0,
          "explanation": "Devrik Type 3: 'Had the patient not completed' ve ana cümlede 'would have developed'."
        },
        "explainedAnswer": "Doğru yanıt A (Had the patient not completed / would have developed). Devrik geçmiş şart yapısı bu seçenekte kusursuz kurulmuştur.",
        "signalWords": [
          "Had + S + V3 (without if)",
          "Had it not been for"
        ]
      },
      "C2": {
        "title": "Tarihsel Öncelik Matrisi ve Epistemolojik Gecikmeler",
        "basicMeaning": "Tarihte bir teorinin keşfedilmesinden çok önce pratik olarak uygulanmış olması gibi felsefi öncelik katmanları.",
        "usages": [
          "Buluşların resmi patentinden çok önce halk arasında kullanılmış olması",
          "Epistemolojik kavramların gecikmeli tescili"
        ],
        "nonUsages": [
          "Eşzamanlı keşifler"
        ],
        "positiveFormula": "Centuries before modern chemistry codified the process, indigenous artisans had mastered...",
        "negativeFormula": "Scholars had not conceptualized the phenomenon until empirical evidence accumulated.",
        "questionFormula": "To what extent had traditional navigators charted ocean currents before Western cartographers arrived?",
        "shortAnswers": "They had mapped the Pacific with stellar constellations.",
        "subjectVerbAgreement": "Karmaşık akademik öznelerde had uyumu.",
        "verbForm": "had + V3",
        "auxiliaryVerb": "had",
        "timeMarkers": [
          "centuries before",
          "long prior to formal codification",
          "until that epoch"
        ],
        "signals": [
          "had mastered long before",
          "prior to the advent of"
        ],
        "timeline": "Zamanın derinliklerindeki kadim öncelik katmanı 🏛️⛏️",
        "examples": [
          "Long before Western astronomers mapped the celestial sphere, Babylonian scribes had recorded planetary trajectories with remarkable precision.",
          "Indigenous communities had refined herbal pharmacology millennia before synthetic pharmaceuticals entered the market."
        ],
        "exampleTr": [
          "Batılı gökbilimciler gökkubbeyi haritalandırmadan çok önce, Babilli katipler gezegen yörüngelerini dikkate değer bir hassasiyetle kaydetmişti."
        ],
        "code": "Tarihsel Derin Öncelik: Long before + V2 ===> HAD V3!",
        "visualMemory": "Antik Babil kil tabletindeki yıldız haritası ve modern teleskop 🌌📜",
        "commonMistake": "'Long before' ile iki olayın arasındaki asırları tek bir zamana (V2 / V2) sıkıştırmak.",
        "correctWrongContrast": {
          "wrong": "Babylonians recorded the planets long before modern astronomy began.",
          "correct": "Babylonians had recorded the planets long before modern astronomy began.",
          "note": "Asırlar öncesine dayanan öncelik Past Perfect ile taçlandırılır.",
          "explanation": "Asırlar öncesine dayanan öncelik Past Perfect ile taçlandırılır."
        },
        "differenceFromSimilarTense": "Simple Past olayı kuru anlatır; Past Perfect kadim önceliği ve tarihsel hakkı teslim eder.",
        "levelTactic": "'Long before, centuries prior to' gibi asırlar öncesini vurgulayan bağlaçlarda 'had V3' vazgeçilmezdir.",
        "miniTest": {
          "question": "Centuries before metallurgy was formally codified as an empirical science, Andean artisans ---- sophisticated gold-copper alloys.",
          "options": [
            "had perfected",
            "perfected",
            "have perfected",
            "were perfecting",
            "perfect"
          ],
          "answer": 0,
          "explanation": "'Centuries before metallurgy was formally codified (V2)' ifadesi asırlar öncesini (had perfected) gerektirir."
        },
        "explainedAnswer": "Doğru yanıt A (had perfected). Yüzyıllar öncesine dayanan tarihsel öncelik Past Perfect ile aktarılır.",
        "signalWords": [
          "had mastered long before",
          "prior to the advent of"
        ]
      },
      "YDS": {
        "title": "ÖSYM'nin 'By the time + V2' ve 'Had V3' Eleme Matrisi",
        "basicMeaning": "YDS/YDT'de Past Perfect tek başına gelmez; mutlaka ikinci bir geçmiş olay veya 'by the time / until' sinyaliyle gelir.",
        "usages": [
          "By the time + V2, HAD V3 altın kuralı",
          "Until + V2, had not V3 kalıbı",
          "Seçenek eleme: Soru kökünde kıyaslanacak ikinci geçmiş olay yoksa HAD V3 YANLIŞTIR"
        ],
        "nonUsages": [
          "Tek bir geçmiş yılın (in 1970) yanına HAD V3 konulması ÖSYM'de KESİNLİKLE ELENİR"
        ],
        "positiveFormula": "By the time Subject + V2, Subject + had + V3",
        "negativeFormula": "Past Perfect + [Present veya Future ile ASLA birleşemez]",
        "questionFormula": "Had the disease decimated the harvest before effective quarantine measures were instituted?",
        "shortAnswers": "Yes, it had.",
        "subjectVerbAgreement": "ÖSYM sorularındaki uzun öznelerde had formunun değişmezliği.",
        "verbForm": "had + V3",
        "auxiliaryVerb": "had",
        "timeMarkers": [
          "by the time + V2",
          "until + past point",
          "prior to 1950",
          "by the end of the century (geçmiş)"
        ],
        "signals": [
          "By the time ... V2",
          "had already V3 before"
        ],
        "timeline": "Sınav Sorusu: [Önce Biten Olay: HAD V3] <=== [Sınır Çizgisi: BY THE TIME + V2]",
        "examples": [
          "By the time forensic specialists arrived at the scene, rainfall had obliterated the footprints.",
          "Until the late nineteenth century, medical science had not grasped the microbial mechanism of infection."
        ],
        "exampleTr": [
          "Adli tıp uzmanları olay yerine vardığında, yağmur ayak izlerini çoktan silmişti."
        ],
        "code": "YDS Parolası: 'BY THE TIME + V2' = DİĞER TARAF HAD V3!",
        "visualMemory": "ÖSYM soru kitapçığında 'By the time ... V2' görülünce hemen 'had V3' seçeneğine atılan tik işareti ✔️📄",
        "commonMistake": "Cümlede sadece 'in 1960' varken had V3 işaretlemek (In 1960 sadece V2 ister!).",
        "correctWrongContrast": {
          "wrong": "In 1980, the eruption of Mount St. Helens had devastated the surrounding forests.",
          "correct": "In 1980, the eruption of Mount St. Helens devastated the surrounding forests.",
          "note": "Kıyaslama yoksa 1980 yılı sadece Simple Past (devastated) ister.",
          "explanation": "Kıyaslama yoksa 1980 yılı sadece Simple Past (devastated) ister."
        },
        "differenceFromSimilarTense": "In 1980 = V2; By 1980 = had V3. Tek bir 'by' kelimesi V2'yi had V3 yapar!",
        "levelTactic": "Soru kökünde 'By the time + V2' görürsen seçeneklerde 'had V3' veya 'had been V-ing' ara. Kıyaslama yoksa had V3 şıklarını hemen ele!",
        "miniTest": {
          "question": "By the time the international treaty on chlorofluorocarbons ---- into effect, industrial emissions ---- significant depletion of the ozone layer.",
          "options": [
            "came / had already caused",
            "comes / caused",
            "had come / already caused",
            "came / have already caused",
            "has come / will cause"
          ],
          "answer": 0,
          "explanation": "'By the time ... came (V2)' yan cümlesi ana cümlede Past Perfect (had already caused) gerektirir."
        },
        "explainedAnswer": "Doğru yanıt A (came / had already caused). 'By the time + V2' kuralının doğal tamamlayıcısı 'had V3'tür.",
        "signalWords": [
          "By the time ... V2",
          "had already V3 before"
        ]
      }
    }
  },
  {
    "slug": "past-perfect-continuous",
    "name": "Past Perfect Continuous Tense",
    "turkish": "Geçmişte Süregelen Süreç",
    "emoji": "⏳",
    "summary": "Geçmişte belirli bir noktaya kadar kesintisiz devam etmiş olan süreç, geçmişteki yorgunluğun/etkinin nedeni ve 'had been V-ing' yapısı.",
    "levels": {
      "A1": {
        "title": "Geçmişteki Süreç ve Neden-Sonuç İlişkisi",
        "basicMeaning": "Geçmişte bir şey olmadan önce, başka bir eylemin ne kadar süredir devam etmekte olduğunu belirtme.",
        "usages": [
          "Geçmişteki bir andan önce ne kadar süredir beklendiği (I had been waiting for an hour when he came)",
          "Geçmişteki yorgunluğun sebebi"
        ],
        "nonUsages": [
          "Stative durum fiilleri (know, like asla had been knowing olmaz)"
        ],
        "positiveFormula": "Subject + had been + V-ing",
        "negativeFormula": "Subject + hadn't been + V-ing",
        "questionFormula": "Had you been waiting long before the train arrived?",
        "shortAnswers": "Yes, I had. / For about an hour.",
        "subjectVerbAgreement": "Tüm şahıslarda 'had been' kullanılır.",
        "verbForm": "had been + V-ing",
        "auxiliaryVerb": "had been",
        "timeMarkers": [
          "for hours before",
          "since morning when",
          "how long had you been"
        ],
        "signals": [
          "had been waiting for",
          "tired because he had been"
        ],
        "timeline": "[Süreç Başladı] === had been V-ing ===> [Geçmişteki Kesilme Anı (V2)] ---> [Bugün]",
        "examples": [
          "He was exhausted because he had been driving all night.",
          "The ground was wet because it had been raining for hours."
        ],
        "exampleTr": [
          "Bütün gece araba kullanmakta olduğu için bitkindi."
        ],
        "code": "Geçmişteki Yorgunluğun Sebebi = had been + V-ing!",
        "visualMemory": "Gözleri uykusuzluktan kızarmış direksiyon başındaki şoför 🚗🥱",
        "commonMistake": "Stative fiilleri bu kalıba sokmaya çalışmak (*He had been wanting*).",
        "correctWrongContrast": {
          "wrong": "He was tired because he was driving all night.",
          "correct": "He was tired because he had been driving all night.",
          "note": "Yorgunluk anından önceki uzun süreci vurgulamak için Past Perfect Continuous kullanılır.",
          "explanation": "Yorgunluk anından önceki uzun süreci vurgulamak için Past Perfect Continuous kullanılır."
        },
        "differenceFromSimilarTense": "Present Perfect Continuous bugünkü yorgunluğu (He is tired because he has been driving), Past Perfect Continuous geçmişteki yorgunluğu (He was tired because he had been driving) açıklar.",
        "levelTactic": "Geçmişteki bir durumun (was tired, was dirty) arkasındaki süreci açıklarken 'had been V-ing' ara.",
        "miniTest": {
          "question": "When the doctor finally examined him, the patient ---- in the emergency ward for three hours.",
          "options": [
            "had been waiting",
            "has been waiting",
            "is waiting",
            "waits",
            "was waited"
          ],
          "answer": 0,
          "explanation": "Geçmişteki muayene anına (examined - V2) kadar geçen 3 saatlik süreç: 'had been waiting'."
        },
        "explainedAnswer": "Doğru yanıt A (had been waiting). Geçmişteki bir eyleme kadar süren bekleme süreci Past Perfect Continuous ile aktarılır.",
        "signalWords": [
          "had been waiting for",
          "tired because he had been"
        ]
      },
      "A2": {
        "title": "'Before' ve 'When' ile Geçmiş Süre Vurgusu",
        "basicMeaning": "Geçmişteki ikinci olay gerçekleşmeden hemen önce belirli bir süredir yapılmakta olan işler.",
        "usages": [
          "Before + V2 öncesinde for/since ile süreç",
          "When + V2 öncesinde ne kadar süredir çalışıldığı"
        ],
        "nonUsages": [
          "Sonuç odaklı bitmiş adet bildirimleri"
        ],
        "positiveFormula": "Subject + had been + V-ing + for [time] + before + Subject + V2",
        "negativeFormula": "They hadn't been playing long before the rain interrupted the match.",
        "questionFormula": "How long had she been living there before she moved to London?",
        "shortAnswers": "For six years.",
        "subjectVerbAgreement": "Tüm şahıslarda had been sabittir.",
        "verbForm": "had been + V-ing",
        "auxiliaryVerb": "had been",
        "timeMarkers": [
          "for two months before",
          "since dawn when",
          "prior to that moment"
        ],
        "signals": [
          "had been V-ing for ... before V2"
        ],
        "timeline": "[====== Süreç ======] ===> [Kesen Olay (V2)]",
        "examples": [
          "She had been teaching at the academy for a decade before she was appointed dean.",
          "They had been arguing for nearly an hour when the arbitrator stepped in."
        ],
        "exampleTr": [
          "Dekan olarak atanmadan önce akademide on yıldır ders vermekteydi."
        ],
        "code": "For + Süre + BEFORE + V2 ===> HAD BEEN V-ING!",
        "visualMemory": "10 yıllık takvim yapraklarının ardından dekanlık cübbesini giyen hoca 🎓📅",
        "commonMistake": "'for ten years before' varken sadece Past Continuous (was teaching) kullanmak.",
        "correctWrongContrast": {
          "wrong": "She was teaching for ten years before she became dean.",
          "correct": "She had been teaching for ten years before she became dean.",
          "note": "'Before + V2'den önceki 10 yıllık süreç Past Perfect Continuous gerektirir.",
          "explanation": "'Before + V2'den önceki 10 yıllık süreç Past Perfect Continuous gerektirir."
        },
        "differenceFromSimilarTense": "Was teaching (o anda ders veriyordu); Had been teaching for 10 years (10 yıldır bu süreci yürütüyordu).",
        "levelTactic": "'before + V2' cümlesinde 'for X years' gibi bir süreç ifadesi varsa 'had been V-ing' seçeneğine öncelik ver.",
        "miniTest": {
          "question": "The engineer ---- on the turbine design for six months before the prototype was officially greenlit.",
          "options": [
            "had been working",
            "has been working",
            "was working",
            "works",
            "is working"
          ],
          "answer": 0,
          "explanation": "'For six months before + was greenlit (V2)' kalıbı Past Perfect Continuous (had been working) ister."
        },
        "explainedAnswer": "Doğru yanıt A (had been working). Geçmişteki dönüm noktasından önceki 6 aylık süreç için had been V-ing zorunludur.",
        "signalWords": [
          "had been V-ing for ... before V2"
        ]
      },
      "B1": {
        "title": "Past Perfect Simple vs Continuous (Süreç vs Sonuç)",
        "basicMeaning": "Geçmişteki eylemin sonucuna/ürününe mi (Simple: had V3) yoksa harcanan süreye mi (Continuous: had been V-ing) odaklanıldığı.",
        "usages": [
          "Had written three novels before 1990 (ürün miktarı -> Simple)",
          "Had been writing novels for twenty years before retiring (süreç -> Continuous)"
        ],
        "nonUsages": [
          "Sayı/adet bildirirken continuous kullanımı"
        ],
        "positiveFormula": "Process: had been V-ing vs Product: had + V3",
        "negativeFormula": "He had not been sleeping well for weeks prior to his collapse.",
        "questionFormula": "How many chapters had he completed before the deadline?",
        "shortAnswers": "Five chapters.",
        "subjectVerbAgreement": "Özne fark etmeksizin had çekimi.",
        "verbForm": "had been + V-ing / had + V3",
        "auxiliaryVerb": "had been / had",
        "timeMarkers": [
          "for weeks before",
          "until that morning",
          "by that time (süreçle)"
        ],
        "signals": [
          "how many -> had V3",
          "how long -> had been V-ing"
        ],
        "timeline": "Süreç Çizgisi [==== Uğraş ====] vs Sonuç Noktası [X (3 kitap)]",
        "examples": [
          "By 2010, the author had published four comprehensive treatises.",
          "By 2010, the author had been researching historical linguistics for two decades."
        ],
        "exampleTr": [
          "Yazar 2010 yılına kadar yirmi yıldır tarihsel dilbilim araştırmaktaydı."
        ],
        "code": "KAÇ TANE? = Had V3! NE KADARDIR UĞRAŞIYORDU? = Had been V-ing!",
        "visualMemory": "Masada duran 4 cilt kitap (Sonuç) vs 20 yıldır yanan çalışma masası lambası (Süreç) 📚💡",
        "commonMistake": "Eser miktarını söylerken continuous kullanmak (*had been publishing four books*).",
        "correctWrongContrast": {
          "wrong": "He had been writing three novels before he turned thirty.",
          "correct": "He had written three novels before he turned thirty.",
          "note": "Üç roman tamamlanmış ürün sayısıdır, Simple Past Perfect (had written) gerektirir.",
          "explanation": "Üç roman tamamlanmış ürün sayısıdır, Simple Past Perfect (had written) gerektirir."
        },
        "differenceFromSimilarTense": "Had written (kitaplar bitti); Had been writing (yazma faaliyetiyle meşguldü).",
        "levelTactic": "Sayı/miktar varsa had V3; 'for hours, for years' ile çaba/uğraş süresi vurgulanıyorsa had been V-ing seç.",
        "miniTest": {
          "question": "Before the regulatory agency revoked its license, the factory ---- hazardous chemical waste into the river for years.",
          "options": [
            "had been dumping",
            "had dumped",
            "has been dumping",
            "was dumped",
            "dumps"
          ],
          "answer": 0,
          "explanation": "'For years before the agency revoked (V2)' ifadesi yıllarca süren zararlı süreci vurgular: 'had been dumping'."
        },
        "explainedAnswer": "Doğru yanıt A (had been dumping). Yıllarca devam eden eylem süreci Past Perfect Continuous gerektirir.",
        "signalWords": [
          "how many -> had V3",
          "how long -> had been V-ing"
        ]
      },
      "B2": {
        "title": "Jeolojik ve Klimatolojik Birikimlerin Tetiklediği Olaylar",
        "basicMeaning": "Yüzyıllar veya aylar süren jeolojik/fiziksel birikimlerin aniden bir deprem, heyelan veya patlamayı tetiklemesi.",
        "usages": [
          "Fay hattında asırlardır süren stres birikimi",
          "Volkanik bacada aylardır biriken magma basıncı"
        ],
        "nonUsages": [
          "Aniden sıfırdan başlayan olaylar"
        ],
        "positiveFormula": "Tectonic stress had been accumulating along the plate boundary before the fault ruptured.",
        "negativeFormula": "Instruments had not been detecting subterranean tremors until days before.",
        "questionFormula": "For how long had magma been rising prior to the caldera eruption?",
        "shortAnswers": "For several continuous months.",
        "subjectVerbAgreement": "Bilimsel öznelerle had been uyumu.",
        "verbForm": "had been + V-ing",
        "auxiliaryVerb": "had been",
        "timeMarkers": [
          "for decades prior to the collapse",
          "subsequent to years of continuous buildup"
        ],
        "signals": [
          "had been accumulating before the rupture",
          "had been mounting"
        ],
        "timeline": "Yıllarca biriken gerilim [====================] ---> Kırılma Anı 💥",
        "examples": [
          "Tectonic stress had been mounting along the Anatolian fault for nearly two centuries before the cataclysmic quake struck.",
          "Subsurface methane gas had been leaking into the mine shaft for days before the spark ignited the explosion."
        ],
        "exampleTr": [
          "Tektonik stres, yıkıcı deprem meydana gelmeden önce yaklaşık iki asırdır Anadolu fayı boyunca birikmekteydi."
        ],
        "code": "Jeolojik Birikim Süreci = had been mounting / accumulating before V2!",
        "visualMemory": "Yeraltında gerilen tektonik yay ve sonunda kırılan fay hattı 🪨💥",
        "commonMistake": "İki asırlık birikim sürecini anlık bir eylem gibi Simple Past yapmak.",
        "correctWrongContrast": {
          "wrong": "Stress accumulated for centuries before the quake struck.",
          "correct": "Stress had been accumulating for centuries before the quake struck.",
          "note": "Deprem öncesindeki asırlık kesintisiz süreç Past Perfect Continuous gerektirir.",
          "explanation": "Deprem öncesindeki asırlık kesintisiz süreç Past Perfect Continuous gerektirir."
        },
        "differenceFromSimilarTense": "Accumulated (birikti bitti); Had been accumulating (deprem anına kadar sürekli birikiyordu).",
        "levelTactic": "Doğa olaylarında patlamadan veya kırılmadan önceki 'for centuries, for weeks' birikim süreçlerinde had been V-ing ara.",
        "miniTest": {
          "question": "Geologists revealed that groundwater ---- through the limestone cavern for millennia before the ceiling collapsed.",
          "options": [
            "had been seeping",
            "has been seeping",
            "was seeping",
            "seeped",
            "is seeping"
          ],
          "answer": 0,
          "explanation": "'For millennia before the ceiling collapsed (V2)' bin yıllık sızıntı sürecini bildirir: 'had been seeping'."
        },
        "explainedAnswer": "Doğru yanıt A (had been seeping). Çöküş öncesindeki bin yıllık aralıksız süreç Past Perfect Continuous ile verilir.",
        "signalWords": [
          "had been accumulating before the rupture",
          "had been mounting"
        ]
      },
      "C1": {
        "title": "Sosyo-Tarihsel Çalkantıların Mayalanma Süreci",
        "basicMeaning": "Büyük ihtilaller ve halk ayaklanmaları patlak vermeden önce yıllarca dipte mayalanan hoşnutsuzluk süreci.",
        "usages": [
          "1789 Fransız İhtilali öncesi halkın yıllardır çektiği sefalet",
          "Savaş öncesinde gizli gizli yürütülen silahlanma süreci"
        ],
        "nonUsages": [
          "Resmi bildirilerin okunduğu tek anlık toplantılar"
        ],
        "positiveFormula": "Socioeconomic unrest had been simmering beneath the surface before the revolution erupted.",
        "negativeFormula": "The aristocracy had not been addressing systemic grievances.",
        "questionFormula": "How long had rebel factions been stockpiling weaponry prior to the mutiny?",
        "shortAnswers": "For over two years.",
        "subjectVerbAgreement": "Tarihsel kolektif özneler.",
        "verbForm": "had been + V-ing",
        "auxiliaryVerb": "had been",
        "timeMarkers": [
          "for decades prior to the uprising",
          "in the years preceding the coup"
        ],
        "signals": [
          "had been simmering",
          "had been brewing for years"
        ],
        "timeline": "Sessizce kaynayan kazan [====== Mayalanma ======] ---> İhtilal Patlaması 🌋",
        "examples": [
          "Peasant dissatisfaction with feudal taxation had been simmering for generations before the storming of the Bastille.",
          "Dissident intellectuals had been covertly distributing samizdat literature for months before state censors intervened."
        ],
        "exampleTr": [
          "Feodal vergilendirmeye yönelik köylü hoşnutsuzluğu, Bastille Baskını'ndan önce nesillerdir için için kaynamaktaydı."
        ],
        "code": "İhtilal Öncesi Mayalanma = had been simmering / brewing for decades!",
        "visualMemory": "Kapağı titreyen düdüklü tencere ve patlama anı 🌋🍲",
        "commonMistake": "İhtilal öncesi nesiller boyu süren hoşnutsuzluğu basit tekil geçmiş zamana indirgemek.",
        "correctWrongContrast": {
          "wrong": "Discontent simmered for decades before the revolt broke out.",
          "correct": "Discontent had been simmering for decades before the revolt broke out.",
          "note": "Ayaklanmadan önceki nesiller boyu süren mayalanma 'had been simmering' ile ifade edilir.",
          "explanation": "Ayaklanmadan önceki nesiller boyu süren mayalanma 'had been simmering' ile ifade edilir."
        },
        "differenceFromSimilarTense": "Simmered (kaynadı); Had been simmering before the revolt (isyan anına kadar fokurduyordu).",
        "levelTactic": "Tarih metinlerinde isyan, devrim veya savaş öncesindeki uzun süreli mayalanma fiillerinde (simmer, brew, ferment) had been V-ing ara.",
        "miniTest": {
          "question": "Rival intelligence agencies ---- each other's diplomatic cables for months before the espionage scandal became public.",
          "options": [
            "had been intercepting",
            "intercepted",
            "have been intercepting",
            "were intercepted",
            "intercept"
          ],
          "answer": 0,
          "explanation": "'For months before the scandal became public (V2)' aylar süren gizli dinleme sürecini bildirir: 'had been intercepting'."
        },
        "explainedAnswer": "Doğru yanıt A (had been intercepting). Skandalın patlamasından önceki gizli dinleme süreci had been V-ing gerektirir.",
        "signalWords": [
          "had been simmering",
          "had been brewing for years"
        ]
      },
      "C2": {
        "title": "Entelektüel Krizler ve Paradigma Çöküşü Öncesi Süreç",
        "basicMeaning": "Bilim felsefesinde (Kuhncu modelde) bir paradigma çökmeden önce yıllarca biriken anomaliler süreci.",
        "usages": [
          "Klasik fiziğin çözemediği anomalilerin yarım asır boyunca birikmesi",
          "Eski teorinin yetersizliğinin giderek belirginleşmesi"
        ],
        "nonUsages": [
          "Yeni teorinin ilk yayımlandığı tekil makale tarihi"
        ],
        "positiveFormula": "Anomalies had been plaguing the classical framework for decades before the quantum paradigm emerged.",
        "negativeFormula": "Conventional models had not been accounting for spectroscopic observations.",
        "questionFormula": "What inconsistencies had theorists been wrestling with prior to the Einsteinian breakthrough?",
        "shortAnswers": "The invariance of the speed of light.",
        "subjectVerbAgreement": "Epistemolojik öznelerle had been çekimi.",
        "verbForm": "had been + V-ing",
        "auxiliaryVerb": "had been",
        "timeMarkers": [
          "for half a century prior to the paradigm shift",
          "unabatedly"
        ],
        "signals": [
          "had been troubling scientists for decades",
          "had been accumulating"
        ],
        "timeline": "Eski Teori Tıkanma Süreci [====================] ---> Yeni Paradigma Doğuşu 💡",
        "examples": [
          "Empirical discrepancies in blackbody radiation had been troubling theoretical physicists for decades before Max Planck introduced the quantum hypothesis.",
          "Linguistic structuralists had been grappling with semantic irregularities for years prior to the advent of generative grammar."
        ],
        "exampleTr": [
          "Siyah cisim ışımasındaki deneysel tutarsızlıklar, Max Planck kuantum hipotezini ortaya atmadan önce onlarca yıldır teorik fizikçileri meşgul etmekteydi."
        ],
        "code": "Paradigma Çöküşü Öncesi Anomaliler = had been troubling / plaguing scientists for decades!",
        "visualMemory": "Eski modelin çatlaklarından su sızması ve yeni teorinin parlaması 🏛️⚡💡",
        "commonMistake": "Yeni teorinin devrim anından önceki onlarca yıllık kriz sürecini gözden kaçırmak.",
        "correctWrongContrast": {
          "wrong": "Discrepancies troubled scientists for decades before Planck resolved them.",
          "correct": "Discrepancies had been troubling scientists for decades before Planck resolved them.",
          "note": "Planck'ın çözümünden önceki onlarca yıllık aralıksız kriz süreci Past Perfect Continuous gerektirir.",
          "explanation": "Planck'ın çözümünden önceki onlarca yıllık aralıksız kriz süreci Past Perfect Continuous gerektirir."
        },
        "differenceFromSimilarTense": "Troubled (üzdü); Had been troubling for decades (onlarca yıl boyunca zihinleri meşgul etmeyi sürdürdü).",
        "levelTactic": "Bilim tarihi metinlerinde büyük bir devrimden (Planck, Einstein, Newton) önceki anomaliler anlatılırken 'had been V-ing for decades' ara.",
        "miniTest": {
          "question": "Astronomers ---- unexplained orbital variations in Mercury for generations before general relativity provided the mathematical solution.",
          "options": [
            "had been tracking",
            "tracked",
            "have been tracking",
            "were tracked",
            "track"
          ],
          "answer": 0,
          "explanation": "Genel görelilik çözümü getirmeden önce nesiller boyu süren gözlem süreci: 'had been tracking'."
        },
        "explainedAnswer": "Doğru yanıt A (had been tracking). Çözüm öncesinde nesiller boyu devam eden takip süreci Past Perfect Continuous gerektirir.",
        "signalWords": [
          "had been troubling scientists for decades",
          "had been accumulating"
        ]
      },
      "YDS": {
        "title": "ÖSYM'nin 'For ... before ... V2' Şablonu ve Süreç İpuçları",
        "basicMeaning": "YDS/YDT'de Past Perfect Continuous'un tipik sınav formülü: For + süre + before + V2.",
        "usages": [
          "For X years/months + before/until + V2 kalıbı",
          "Geçmişteki bir eylemin arkasındaki yorgunluk/harabiyet nedeni",
          "Stative fiil eleme taktiği (durum fiili varsa had been V-ing değil had V3 seçilir)"
        ],
        "nonUsages": [
          "Cümlede Present veya Future zaman varken had been V-ing seçmek KESİNLİKLE YANLIŞTIR"
        ],
        "positiveFormula": "Subject + had been + V-ing + for [time] + before + Subject + V2",
        "negativeFormula": "Past Perfect Continuous + [Present zamanla ASLA birleşmez]",
        "questionFormula": "How long had the team been analyzing the core samples before the funding was terminated?",
        "shortAnswers": "For nearly two years.",
        "subjectVerbAgreement": "ÖSYM soru köklerindeki karmaşık özne blokları.",
        "verbForm": "had been + V-ing",
        "auxiliaryVerb": "had been",
        "timeMarkers": [
          "for years before",
          "for months prior to",
          "until the government intervened"
        ],
        "signals": [
          "had been working for ... before",
          "exhausted because he had been"
        ],
        "timeline": "Sınav Sorusu: [Geçmişteki Uzun Süreç (had been V-ing)] ===> [Bitiş/Dönüm Noktası (before V2)]",
        "examples": [
          "The paleontologists had been excavating the fossil bed for five consecutive seasons before they unearthed the complete hominid skull.",
          "Prior to the sudden economic crash, speculative investors had been pouring capital into the real estate market for years."
        ],
        "exampleTr": [
          "Paleontologlar, eksiksiz insansı kafatasını gün yüzüne çıkarmadan önce art arda beş sezon boyunca fosil yatağında kazı yapmaktaydılar."
        ],
        "code": "YDS Parolası: 'FOR ... BEFORE + V2' = %100 HAD BEEN V-ING!",
        "visualMemory": "ÖSYM kitapçığında 'for five seasons before they unearthed' kalıbının altının çizilmesi ✏️📄",
        "commonMistake": "'Before they unearthed (V2)' varken 'have been excavating' (Present) işaretlemek.",
        "correctWrongContrast": {
          "wrong": "They have been excavating for years before they found the fossil.",
          "correct": "They had been excavating for years before they found the fossil.",
          "note": "Bulma anı geçmişte (found - V2) olduğu için süreç Present değil Past Perfect (had been) olmalıdır.",
          "explanation": "Bulma anı geçmişte (found - V2) olduğu için süreç Present değil Past Perfect (had been) olmalıdır."
        },
        "differenceFromSimilarTense": "Before they found it = had been excavating; So far = have been excavating. Zamanın nereye bağlandığına dikkat et!",
        "levelTactic": "'Before + V2' ve 'for + zaman dilimi' kombinasyonunu gördüğün an seçeneklerde 'had been V-ing' ara ve işaretle.",
        "miniTest": {
          "question": "The aerospace consortium ---- the propulsion mechanism for nearly eight years before the first orbital test flight was executed.",
          "options": [
            "had been refining",
            "has been refining",
            "was refining",
            "refined",
            "refines"
          ],
          "answer": 0,
          "explanation": "'For nearly eight years before ... was executed (V2)' geçmişteki uçuş öncesindeki 8 yıllık süreci bildirir: 'had been refining'."
        },
        "explainedAnswer": "Doğru yanıt A (had been refining). 'For 8 years before + V2' formülü doğrudan Past Perfect Continuous gerektirir.",
        "signalWords": [
          "had been working for ... before",
          "exhausted because he had been"
        ]
      }
    }
  },
  {
    "slug": "simple-future",
    "name": "Simple Future Tense (will)",
    "turkish": "Gelecek Zaman (will)",
    "emoji": "🔮",
    "summary": "Anlık kararlar, sözler, teklifler, kanıtsız kişisel tahminler, resmi gelecek duyuruları ve zaman/koşul cümleciklerindeki istisnai istek/rica kullanımları.",
    "levels": {
      "A1": {
        "title": "Anlık Kararlar, Sözler ve Teklifler",
        "basicMeaning": "Konuşma anında aniden verilen kararlar, verilen sözler ve yapılan yardım teklifleri.",
        "usages": [
          "Anlık karar (The phone is ringing; I will answer it)",
          "Söz verme (I promise I will help you)",
          "Yardım teklifi (I will carry your bags)"
        ],
        "nonUsages": [
          "Önceden planlanmış, biletleri alınmış randevular (be going to / Present Continuous)"
        ],
        "positiveFormula": "Subject + will ('ll) + V1",
        "negativeFormula": "Subject + will not (won't) + V1",
        "questionFormula": "Will + Subject + V1?",
        "shortAnswers": "Yes, I will. / No, I won't.",
        "subjectVerbAgreement": "Tüm şahıslarda (I, you, he, she, it, we, they) 'will' ve fiilin yalın hali (V1) kullanılır.",
        "verbForm": "will + V1",
        "auxiliaryVerb": "will",
        "timeMarkers": [
          "tomorrow",
          "next week",
          "in a minute",
          "soon",
          "I think",
          "I promise"
        ],
        "signals": [
          "I promise",
          "I think",
          "Don't worry, I will",
          "spontaneous decision"
        ],
        "timeline": "Konuşma Anı (Şimdi) ---> [Anlık Karar Verildi] ---> [Gelecek Eylem]",
        "examples": [
          "Don't carry those heavy boxes alone; I will help you.",
          "I promise I won't tell your secret to anyone."
        ],
        "exampleTr": [
          "O ağır kutuları tek başına taşıma; sana yardım edeceğim."
        ],
        "code": "Anlık Karar & Söz = will + V1!",
        "visualMemory": "Çalan telefon ve anında ahizeye uzanan el ☎️🤝",
        "commonMistake": "Önceden bilet alınmış bir tatili anlatırken 'I will fly tomorrow' demek (*am going to fly* veya *am flying* olmalı).",
        "correctWrongContrast": {
          "wrong": "I have tickets; I will travel to Rome tomorrow.",
          "correct": "I have tickets; I am traveling to Rome tomorrow.",
          "note": "Bileti alınmış kesinleşmiş planlarda will değil, Present Continuous / be going to kullanılır.",
          "explanation": "Bileti alınmış kesinleşmiş planlarda will değil, Present Continuous / be going to kullanılır."
        },
        "differenceFromSimilarTense": "Will anlık karardır; Be going to önceden verilmiş karardır.",
        "levelTactic": "Konuşma anında ortaya çıkan ani bir durum ('The doorbell is ringing', 'I'm thirsty') varsa 'I will' seç.",
        "miniTest": {
          "question": "It's freezing in here! ---- the window, please?",
          "options": [
            "Will you close",
            "Do you close",
            "Are you closing",
            "Have you closed",
            "Did you close"
          ],
          "answer": 0,
          "explanation": "Anlık rica ve teklif bildiren kalıp: 'Will you close'."
        },
        "explainedAnswer": "Doğru yanıt A (Will you close). Anlık rica ve istem bildirimlerinde 'Will you...?' kalıbı kullanılır.",
        "signalWords": [
          "I promise",
          "I think",
          "Don't worry, I will",
          "spontaneous decision"
        ]
      },
      "A2": {
        "title": "Kanıtsız Tahminler ve 'think / hope / believe'",
        "basicMeaning": "Gözle görülür somut bir kanıt olmadan, sadece içgüdü veya kişisel kanaatle yapılan gelecek tahminleri.",
        "usages": [
          "I think, I hope, I believe, probably ile yapılan tahminler (I think it will rain)",
          "Gelecekteki belirsiz olasılıklar"
        ],
        "nonUsages": [
          "Kara bulutlar gibi gözle görülür kesin kanıtlar (onlar be going to ister)"
        ],
        "positiveFormula": "I think / I believe + Subject + will + V1",
        "negativeFormula": "I don't think + Subject + will + V1",
        "questionFormula": "Do you think scientists will discover life on Mars?",
        "shortAnswers": "I believe they will.",
        "subjectVerbAgreement": "Tüm şahıslarda will sabittir.",
        "verbForm": "will + V1",
        "auxiliaryVerb": "will",
        "timeMarkers": [
          "probably",
          "perhaps",
          "definitely",
          "in the future",
          "one day"
        ],
        "signals": [
          "I think",
          "I hope",
          "probably",
          "I doubt"
        ],
        "timeline": "Bugünkü düşünce ---> Geleceğe dair soyut tahmin 🔮",
        "examples": [
          "I think artificial intelligence will transform education in the coming decades.",
          "I hope the economic climate will improve next year."
        ],
        "exampleTr": [
          "Yapay zekanın önümüzdeki on yıllarda eğitimi dönüştüreceğini düşünüyorum."
        ],
        "code": "Kişisel Tahmin (I think / hope / probably) = will + V1!",
        "visualMemory": "Kristal küreye bakıp geleceği tahmin eden falcı ikonu 🔮✨",
        "commonMistake": "'I think' sonrasını olumsuz yapmak yerine 'I think he won't come' demek (İngilizcede 'I don't think he will come' tercih edilir).",
        "correctWrongContrast": {
          "wrong": "Look at those dark clouds; it will rain.",
          "correct": "Look at those dark clouds; it is going to rain.",
          "note": "Gözle görülür fiziksel kanıt (kara bulutlar) varsa will değil, be going to kullanılır.",
          "explanation": "Gözle görülür fiziksel kanıt (kara bulutlar) varsa will değil, be going to kullanılır."
        },
        "differenceFromSimilarTense": "I think it will rain (içime öyle doğuyor); It is going to rain (gök gürlüyor, şimşek çakıyor, kanıt var).",
        "levelTactic": "'I think, I hope, probably, perhaps' gördüğünde ve somut fiziksel kanıt yoksa 'will + V1' seç.",
        "miniTest": {
          "question": "I don't think the new energy regulations ---- the local manufacturing industry as severely as feared.",
          "options": [
            "will impact",
            "impacted",
            "are impacting",
            "have impacted",
            "had impacted"
          ],
          "answer": 0,
          "explanation": "'I don't think' ile kişisel tahmin belirtildiği için 'will impact' doğrudur."
        },
        "explainedAnswer": "Doğru yanıt A (will impact). Kişisel tahmin ve kanaat bildirimlerinde 'will' kullanılır.",
        "signalWords": [
          "I think",
          "I hope",
          "probably",
          "I doubt"
        ]
      },
      "B1": {
        "title": "Birinci Tip Koşul Cümleleri (Type 1) ve Gelecek Sonuçlar",
        "basicMeaning": "Gerçekleşmesi muhtemel bir koşula bağlı olarak gelecekte doğacak sonuçlar (If + V1, will V1).",
        "usages": [
          "Conditional Type 1 ana cümle sonuçları (If you study, you will succeed)",
          "Resmi gelecek taahhütleri ve garantiler"
        ],
        "nonUsages": [
          "If yan cümlesinin içinde standart gelecek zaman bildirimi"
        ],
        "positiveFormula": "If + Subject + V1, Subject + will + V1",
        "negativeFormula": "If tariffs rise, exports will not remain competitive.",
        "questionFormula": "What will happen if the treaty is not ratified?",
        "shortAnswers": "Trade will decline.",
        "subjectVerbAgreement": "Ana cümlede will, yan cümlede özneye göre V1/V-s.",
        "verbForm": "will + V1",
        "auxiliaryVerb": "will",
        "timeMarkers": [
          "if",
          "provided that",
          "as long as",
          "in case (tedbir)"
        ],
        "signals": [
          "If + V1, will + V1",
          "Type 1 conditional"
        ],
        "timeline": "Gerçekleşebilir Koşul [V1] ===> Gelecekteki Kesin Sonuç [will V1]",
        "examples": [
          "If sea levels continue to rise, coastal cities will face severe flooding.",
          "Provided that funding is secured, the research team will commence clinical trials."
        ],
        "exampleTr": [
          "Deniz seviyeleri yükselmeye devam ederse, kıyı kentleri şiddetli su baskınlarıyla karşılaşacaktır."
        ],
        "code": "Type 1 Kuralı: If tarafı V1 ===> Ana cümle WILL V1!",
        "visualMemory": "İlk domino taşı devrilirse (If V1), son domino taşı düşecek (will V1) 🀄",
        "commonMistake": "If'in hemen yanına 'will' koymak (*If it will rain*).",
        "correctWrongContrast": {
          "wrong": "If the government will subsidize solar panels, adoption will increase.",
          "correct": "If the government subsidizes solar panels, adoption will increase.",
          "note": "If koşul cümlesinde will kullanılmaz, Simple Present (subsidizes) kullanılır.",
          "explanation": "If koşul cümlesinde will kullanılmaz, Simple Present (subsidizes) kullanılır."
        },
        "differenceFromSimilarTense": "Type 1 gerçek ve olası gelecek (If it rains, we will stay); Type 2 hayali durumdur (If it rained, we would stay).",
        "levelTactic": "Soru kökünde 'If + V1' gördüğünde ana cümlenin boşluğuna 'will / can / may + V1' koy.",
        "miniTest": {
          "question": "If global average temperatures ---- by two degrees, extreme weather events ---- exponentially more frequent.",
          "options": [
            "rise / will become",
            "will rise / become",
            "rose / will become",
            "have risen / became",
            "rise / had become"
          ],
          "answer": 0,
          "explanation": "Type 1 koşul cümlesi: If yan cümlesinde 'rise' (V1), ana cümlede 'will become' tam uyum sağlar."
        },
        "explainedAnswer": "Doğru yanıt A (rise / will become). Type 1 şart yapısında yan cümle V1, ana cümle will V1 olur.",
        "signalWords": [
          "If + V1, will + V1",
          "Type 1 conditional"
        ]
      },
      "B2": {
        "title": "Resmi Bildiriler, Kurumsal Beyanatlar ve 'Shall'",
        "basicMeaning": "Hükümet, mahkeme ve uluslararası kuruluşların resmi gelecek taahhütleri ve yasal 'shall' dili.",
        "usages": [
          "Resmi devlet bildirileri (The Prime Minister will address the nation at 8 pm)",
          "Hukuki metinlerde yükümlülük bildiren 'shall' (The contractor shall deliver...)"
        ],
        "nonUsages": [
          "Gayriresmi kişisel gündelik dedikodular"
        ],
        "positiveFormula": "Institutional Subject + will + V1 / The Contractor shall + V1",
        "negativeFormula": "The committee will not entertain informal petitions.",
        "questionFormula": "Shall we adjourn the session?",
        "shortAnswers": "Yes, let us adjourn.",
        "subjectVerbAgreement": "Resmi kurum özneleriyle will uyumu.",
        "verbForm": "will / shall + V1",
        "auxiliaryVerb": "will / shall",
        "timeMarkers": [
          "forthwith",
          "effective next month",
          "on the designated date"
        ],
        "signals": [
          "official statement",
          "the ministry will announce",
          "shall be liable"
        ],
        "timeline": "Resmi protokol takvimine işlenmiş bağlayıcı gelecek taahhüdü 🏛️📅",
        "examples": [
          "The Ministry of Finance will release the macroeconomic projections tomorrow afternoon.",
          "All signatory states shall implement the inspection protocols within sixty days."
        ],
        "exampleTr": [
          "Maliye Bakanlığı, makroekonomik projeksiyonları yarın öğleden sonra açıklayacaktır."
        ],
        "code": "Resmi Devlet Bildirisi = The Ministry will announce! Hukuki Yükümlülük = shall deliver!",
        "visualMemory": "Kürsüde basın toplantısı düzenleyen resmi sözcü ve mühürlü kanun metni 🎙️📜",
        "commonMistake": "Resmi devlet duyurularında 'is going to' gibi laubali gündelik kalıplar kullanmak.",
        "correctWrongContrast": {
          "wrong": "The court is going to deliver its verdict on Friday.",
          "correct": "The court will deliver its verdict on Friday.",
          "note": "Mahkeme ve devlet duyurularında resmi gelecek zaman 'will' kullanılır.",
          "explanation": "Mahkeme ve devlet duyurularında resmi gelecek zaman 'will' kullanılır."
        },
        "differenceFromSimilarTense": "Gündelik sohbette 'going to' doğalken, resmi ve akademik dilde 'will' ciddiyet standardıdır.",
        "levelTactic": "Akademik veya resmi kurum duyurularında (The ministry, the tribunal, the committee) gelecek zaman için will tercih edilir.",
        "miniTest": {
          "question": "The central bank governor ---- a comprehensive monetary policy statement at the press conference tomorrow.",
          "options": [
            "will deliver",
            "is delivering to",
            "delivered",
            "had delivered",
            "has delivered"
          ],
          "answer": 0,
          "explanation": "Resmi makamların gelecekteki kurumsal açıklamaları 'will deliver' ile sunulur."
        },
        "explainedAnswer": "Doğru yanıt A (will deliver). Kurumsal ve resmi açıklamalarda Simple Future (will) esastır.",
        "signalWords": [
          "official statement",
          "the ministry will announce",
          "shall be liable"
        ]
      },
      "C1": {
        "title": "İstisnai Time Clause Kullanımları: İstek, Israr ve Kibar Rica Olarak 'Will'",
        "basicMeaning": "Standart kural 'yan cümlede will olmaz' der; ancak İLERİ SEVİYEDE 'will' istek, ısrar veya kibar rica bildiriyorsa IF ve WHEN yan cümlesinde bulunabilir!",
        "usages": [
          "Kibar rica olarak If + will (If you will wait here = Lütfen burada beklerseniz)",
          "İnat ve ısrar olarak If + will (If you will keep smoking = İlle de sigara içmeye devam edeceksen)"
        ],
        "nonUsages": [
          "Sıradan nötr zaman bildirimi (orada standart V1 kullanılır)"
        ],
        "positiveFormula": "If + Subject + will + V1 (Kibar rica / Gönüllülük), Main Clause",
        "negativeFormula": "If he will not cooperate (İnatla reddediyorsa), we must proceed alone.",
        "questionFormula": "If you will excuse me, I must attend an urgent briefing.",
        "shortAnswers": "Certainly.",
        "subjectVerbAgreement": "Özne ile modal will uyumu.",
        "verbForm": "will + V1 (yan cümlede)",
        "auxiliaryVerb": "will",
        "timeMarkers": [
          "if you will kindly",
          "if you will permit",
          "persistently"
        ],
        "signals": [
          "If you will wait here",
          "willingness exception",
          "insistence"
        ],
        "timeline": "Şu anki istek/rıza beyanı ---> Gelecek eylemin önkoşulu.",
        "examples": [
          "If you will kindly take a seat in the waiting lounge, the minister will receive you shortly.",
          "If the patient will not adhere to the dietary restrictions, medical treatment will inevitably fail."
        ],
        "exampleTr": [
          "Lütfen bekleme salonunda oturursanız (nezaket/rıza), bakan sizi kısa süre içinde kabul edecektir."
        ],
        "code": "YDS İleri Kural: 'If' içinde WILL olabilir! Anlamı: Lütfen (rica) veya İnat/Israr!",
        "visualMemory": "Kapıyı açıp 'Buyrun lütfen' diye nezaketle yol veren danışman görevlisi 🚪🤝",
        "commonMistake": "'Yan cümlede asla will olmaz' kuralını mutlak kabul edip kibar rica içeren doğru cümleyi yanlış sanmak.",
        "correctWrongContrast": {
          "wrong": "If you wait here please, he will see you. (Eksik nezaket)",
          "correct": "If you will wait here, he will see you shortly. (Kibar diplomatik rica)",
          "note": "If cümlesindeki 'will', gelecek zaman değil, 'gönüllü olmak / lütfen' ricasıdır.",
          "explanation": "If cümlesindeki 'will', gelecek zaman değil, 'gönüllü olmak / lütfen' ricasıdır."
        },
        "differenceFromSimilarTense": "If it arrives (zaman koşulu -> V1); If you will help us (lütfen yardım ederseniz -> will = rica/istek).",
        "levelTactic": "Cümlede 'kindly, please, insist' anlamı taşıyan diplomatik bir rica varsa 'If + will' yapısının tamamen doğru olduğunu bil.",
        "miniTest": {
          "question": "If the ambassador ---- kindly review the memorandum, we ---- to finalize the bilateral accord.",
          "options": [
            "will / will be able",
            "would / are able",
            "has / were able",
            "had / will be able",
            "is / had been able"
          ],
          "answer": 0,
          "explanation": "'Kindly' ile diplomatik kibar rica bildirildiği için yan cümlede 'will review', ana cümlede gelecek 'will be able' kusursuzdur."
        },
        "explainedAnswer": "Doğru yanıt A (will / will be able). Diplomatik nezaket ve gönüllülük bildiren şart cümlelerinde 'If + will' geçerli bir ileri düzey yapıdır.",
        "signalWords": [
          "If you will wait here",
          "willingness exception",
          "insistence"
        ]
      },
      "C2": {
        "title": "Deterministik Doğa Kanunları ve Kaçınılmaz Karakteristik 'Will'",
        "basicMeaning": "Gelecek bildirmeyen; maddelerin veya insanların karakteristik, kaçınılmaz ve inatçı davranışlarını anlatan 'will'.",
        "usages": [
          "Maddelerin fiziksel direnç özellikleri (Oil will float on water)",
          "İnsanların kaçınılmaz karakteristik huyları (Accidents will happen)"
        ],
        "nonUsages": [
          "Tekil geçmiş kazalar"
        ],
        "positiveFormula": "Subject + will + V1 (Karakteristik değişmez davranış)",
        "negativeFormula": "The rusted bolt will not budge no matter how much force is applied.",
        "questionFormula": "Why will certain metals resist corrosion under extreme pressure?",
        "shortAnswers": "Due to their oxide layer.",
        "subjectVerbAgreement": "Tüm şahıs ve maddelerde will kullanılır.",
        "verbForm": "will + V1",
        "auxiliaryVerb": "will",
        "timeMarkers": [
          "invariably",
          "under any circumstance",
          "characteristically"
        ],
        "signals": [
          "Accidents will happen",
          "oil will float",
          "the door will not open"
        ],
        "timeline": "Doğanın ve maddelerin zamandan bağımsız karakteristik tepkisi ⚛️",
        "examples": [
          "Oil will invariably float on water because its density is lower.",
          "A child will naturally seek parental reassurance when confronted with an unfamiliar stimulus."
        ],
        "exampleTr": [
          "Yağ, yoğunluğu daha düşük olduğu için her zaman suyun üzerinde yüzer (karakteristik kural)."
        ],
        "code": "Karakteristik Huylar / İnatçılık = will + V1 (Zaman değil, mizaç bildirir)!",
        "visualMemory": "Suyun üstünde yüzen yağ damlası ve inatla açılmayan kilitli kapı 🛢️💧🔒",
        "commonMistake": "'Oil will float on water' cümlesini gelecek zaman sanmak (Bu cümlenin anlamı 'yağ daima yüzer'dir).",
        "correctWrongContrast": {
          "wrong": "The engine will start yesterday.",
          "correct": "The engine wouldn't start yesterday / The engine will not start now.",
          "note": "İnatçılık bildiren will geçmişte 'would', şu anda 'will not' olur.",
          "explanation": "İnatçılık bildiren will geçmişte 'would', şu anda 'will not' olur."
        },
        "differenceFromSimilarTense": "Simple Present genel gerçeği nötr söyler; 'will' ise maddenin karakteristik meylini ve inatçı direncini vurgular.",
        "levelTactic": "Akademik metinlerde maddelerin veya insan doğasının kaçınılmaz eğilimlerini anlatan 'will invariably / will naturally' kalıplarını tanı.",
        "miniTest": {
          "question": "Under severe cryogenic temperatures, certain synthetic polymers ---- brittle and shatter upon impact.",
          "options": [
            "will become",
            "became",
            "have become",
            "had become",
            "were becoming"
          ],
          "answer": 0,
          "explanation": "Maddenin aşırı soğuktaki karakteristik fiziksel davranış meylini ifade eden 'will become'."
        },
        "explainedAnswer": "Doğru yanıt A (will become). Maddelerin karakteristik ve kaçınılmaz fiziksel tepkileri 'will' ile aktarılır.",
        "signalWords": [
          "Accidents will happen",
          "oil will float",
          "the door will not open"
        ]
      },
      "YDS": {
        "title": "ÖSYM'nin Will/Future Kalıpları, 'Present-Future' Uyumu ve Eleme Taktikleri",
        "basicMeaning": "YDS'de will'in ana cümlede yer alması ve zaman bağlacı içi tuzakların tespiti.",
        "usages": [
          "Present bağlamdan geleceğe uzanan tahmin ve projeksiyonlar",
          "If Type 1 ana cümle boşlukları",
          "Zaman bağlacı (when, after, until) yan cümlesinde 'will' olan şıkları standart sorularda eleme"
        ],
        "nonUsages": [
          "Past bir zaman diliminde (in 1950) 'will' kullanılması KESİNLİKLE ELENİR"
        ],
        "positiveFormula": "Research predicts that global demand for lithium will surge by 2030.",
        "negativeFormula": "Past Clause + [will UYUMSUZDUR; geçmişte would'a dönüşür]",
        "questionFormula": "What proportion of electricity will renewable infrastructure generate by 2040?",
        "shortAnswers": "Over sixty percent.",
        "subjectVerbAgreement": "ÖSYM'nin karmaşık özne dizilimlerinde will uyumu.",
        "verbForm": "will + V1",
        "auxiliaryVerb": "will",
        "timeMarkers": [
          "by 2030 (gelecek)",
          "in the coming decades",
          "in the near future",
          "predicts that"
        ],
        "signals": [
          "predicts that ... will",
          "projected that ... will",
          "in the coming years"
        ],
        "timeline": "Sınav Sorusu: [Bugünkü Projeksiyon] ===> [Gelecekteki Beklenti: will + V1]",
        "examples": [
          "Demographic analyses project that urban centers in developing nations will expand dramatically over the next two decades.",
          "Unless international carbon taxation is enforced, industrial emissions will continue their upward trajectory."
        ],
        "exampleTr": [
          "Demografik analizler, gelişmekte olan ülkelerdeki kent merkezlerinin önümüzdeki yirmi yıl içinde çarpıcı biçimde genişleyeceğini öngörmektedir."
        ],
        "code": "YDS Parolası: 'PREDICTS / PROJECTS THAT' = WILL + V1!",
        "visualMemory": "ÖSYM soru kökündeki 'project that / in the coming decades' ifadesinin yanına 'will' yazılması 📈📄",
        "commonMistake": "Cümle başında 'predicted' (geçmiş) varken 'will' seçmek ('predicted that ... would' olmalıydı).",
        "correctWrongContrast": {
          "wrong": "Scientists predicted that temperatures will rise.",
          "correct": "Scientists predict that temperatures will rise / Scientists predicted that temperatures would rise.",
          "note": "Giriş fiili Present (predict) ise will; Past (predicted) ise would olur.",
          "explanation": "Giriş fiili Present (predict) ise will; Past (predicted) ise would olur."
        },
        "differenceFromSimilarTense": "By 2030 tek başına eylem bildiriyorsa 'will surge'; tamamlanmışlık vurguluyorsa 'will have surged'.",
        "levelTactic": "Soru kökündeki ana fiile bak: 'predicts, estimates, anticipates' gibi Present bir fiil varsa that arkasında 'will + V1' ara.",
        "miniTest": {
          "question": "Demographers anticipate that the elderly population in developed nations ---- significantly over the next three decades, which ---- public healthcare expenditures.",
          "options": [
            "will grow / will strain",
            "grew / strained",
            "has grown / strains",
            "had grown / will strain",
            "grows / had strained"
          ],
          "answer": 0,
          "explanation": "'Anticipate that' ve 'over the next three decades' geleceğe dönük projeksiyondur; her iki taraf da 'will grow / will strain' ile uyum sağlar."
        },
        "explainedAnswer": "Doğru yanıt A (will grow / will strain). Geleceğe dönük demografik projeksiyonlar Simple Future gerektirir.",
        "signalWords": [
          "predicts that ... will",
          "projected that ... will",
          "in the coming years"
        ]
      }
    }
  },
  {
    "slug": "be-going-to",
    "name": "Be Going To Future",
    "turkish": "Planlı & Kanıtlı Gelecek Zaman",
    "emoji": "🎯",
    "summary": "Önceden verilmiş kesin niyetler, kararlaştırılmış planlar ve şu anki somut kanıtlara dayanan kesin gelecek tahminleri.",
    "levels": {
      "A1": {
        "title": "Önceden Kararlaştırılmış Niyetler ve Planlar",
        "basicMeaning": "Daha konuşma anından önce karar verilmiş kişisel niyetler (am/is/are going to + V1).",
        "usages": [
          "Hafta sonu planları (I am going to visit my aunt this weekend)",
          "Kişisel hedefler ve niyetler"
        ],
        "nonUsages": [
          "Konuşma anında birdenbire verilen fevri kararlar (onlar will alır)"
        ],
        "positiveFormula": "Subject + am/is/are + going to + V1",
        "negativeFormula": "Subject + am/is/are not + going to + V1",
        "questionFormula": "Are you going to study medicine at university?",
        "shortAnswers": "Yes, I am. / No, I'm not.",
        "subjectVerbAgreement": "I -> am going to, He/She/It -> is going to, You/We/They -> are going to.",
        "verbForm": "am/is/are + going to + V1",
        "auxiliaryVerb": "be (am, is, are)",
        "timeMarkers": [
          "this weekend",
          "next summer",
          "tonight",
          "after graduation"
        ],
        "signals": [
          "my plan is",
          "I have decided",
          "going to"
        ],
        "timeline": "[Dün Karar Verildi] ---> [Konuşma Anı: Kararlıyım] ---> [Gelecek Eylem]",
        "examples": [
          "I have saved enough money; I am going to buy a new computer next month.",
          "She is going to study law when she graduates from high school."
        ],
        "exampleTr": [
          "Yeterince para biriktirdim; gelecek ay yeni bir bilgisayar alacağım (niyet/plan)."
        ],
        "code": "Önceden Karar Verilmiş Plan = am/is/are + going to + V1!",
        "visualMemory": "Ajandaya yazılmış 'Gelecek Ay Bilgisayar Alınacak' hedef notu 🎯📅",
        "commonMistake": "'going to' kalıbından sonra fiile -ing eklemek (*is going to buying*).",
        "correctWrongContrast": {
          "wrong": "He is going to buying a car.",
          "correct": "He is going to buy a car.",
          "note": "'going to' kalıbından sonra daima yalın fiil (V1) gelir.",
          "explanation": "'going to' kalıbından sonra daima yalın fiil (V1) gelir."
        },
        "differenceFromSimilarTense": "I will buy a car (anlık fikir/heves); I am going to buy a car (parayı biriktirdim, bayiye gideceğim, niyetim kesin).",
        "levelTactic": "'have decided, have planned, intend to' gibi önceden niyet belirten ifadeler gördüğünde 'be going to' ara.",
        "miniTest": {
          "question": "We have already booked our hotel rooms; we ---- in Antalya for our vacation.",
          "options": [
            "are going to stay",
            "will stay",
            "stayed",
            "had stayed",
            "stay"
          ],
          "answer": 0,
          "explanation": "'Already booked' önceden plan yapıldığını kanıtlar; 'are going to stay' doğrudur."
        },
        "explainedAnswer": "Doğru yanıt A (are going to stay). Önceden rezervasyonu yapılmış planlar 'be going to' ile aktarılır.",
        "signalWords": [
          "my plan is",
          "I have decided",
          "going to"
        ]
      },
      "A2": {
        "title": "Mevcut Kanıta Dayanan Kaçınılmaz Tahminler",
        "basicMeaning": "Şu an gözümüzün önünde olan somut bir ipucuna/kanıta dayanarak 'bir şeyin olmak üzere olduğunu' tahmin etme.",
        "usages": [
          "Gözle görülür fiziksel belirti (Look at the clouds! It is going to rain)",
          "Düşmek üzere olan vazo (The vase is going to fall)"
        ],
        "nonUsages": [
          "İçgüdüsel veya kanıtsız boş tahminler"
        ],
        "positiveFormula": "Look at + [Evidence]! Subject + is/are + going to + V1",
        "negativeFormula": "Be careful! The ladder is not going to hold your weight.",
        "questionFormula": "Is that old tree going to collapse during the storm?",
        "shortAnswers": "Yes, it looks very unstable.",
        "subjectVerbAgreement": "Özneye göre is veya are going to seçilir.",
        "verbForm": "am/is/are going to + V1",
        "auxiliaryVerb": "am / is / are",
        "timeMarkers": [
          "Look!",
          "Watch out!",
          "Be careful!",
          "any second now"
        ],
        "signals": [
          "Look at that",
          "Watch out",
          "visible evidence"
        ],
        "timeline": "Gözümüzün önündeki kanıt [Şu An] ===> An meselesi olan kaçınılmaz sonuç 💥",
        "examples": [
          "Look at those black storm clouds gathering; it is going to pour down any minute.",
          "Watch out! That stack of books is going to fall over!"
        ],
        "exampleTr": [
          "Şu toplanan kara fırtına bulutlarına bak; her an sağanak yağacak (somut kanıt)."
        ],
        "code": "Gözle Görülür Kanıt (Look! Watch out!) = is/are going to + V1!",
        "visualMemory": "Masanın kenarından kayan ve düşmek üzere olan cam bardak 🥛⚠️",
        "commonMistake": "Fiziksel kanıt göz önündeyken 'will' kullanmak (*Look, it will rain*).",
        "correctWrongContrast": {
          "wrong": "Look at the cracks in the wall; the ceiling will collapse.",
          "correct": "Look at the cracks in the wall; the ceiling is going to collapse.",
          "note": "Duvardaki çatlaklar somut kanıttır; 'is going to collapse' olmalıdır.",
          "explanation": "Duvardaki çatlaklar somut kanıttır; 'is going to collapse' olmalıdır."
        },
        "differenceFromSimilarTense": "I think it will snow (tahmin, kanıt yok); The sky is dark gray, it's going to snow (kanıt var, an meselesi).",
        "levelTactic": "Soru kökünde 'Look!, Watch out!, signs indicate' gibi görsel/somut kanıt varsa 'be going to' ilk tercihtir.",
        "miniTest": {
          "question": "Be careful with that overloaded shelf! The wooden brackets ---- under the strain.",
          "options": [
            "are going to snap",
            "will have snapped",
            "snapped",
            "had snapped",
            "snap"
          ],
          "answer": 0,
          "explanation": "'Be careful with that overloaded shelf' göz önündeki somut tehlikeyi bildirir: 'are going to snap'."
        },
        "explainedAnswer": "Doğru yanıt A (are going to snap). Somut tehlike ve mevcut fiziksel kanıt 'be going to' gerektirir.",
        "signalWords": [
          "Look at that",
          "Watch out",
          "visible evidence"
        ]
      },
      "B1": {
        "title": "Niyet (Intention) ile Düzenleme (Arrangement) Farkı",
        "basicMeaning": "Kafada verilmiş niyet (be going to) ile saati ve yeri başkalarıyla netleştirilmiş randevu (Present Continuous) arasındaki fark.",
        "usages": [
          "Kişisel niyet beyanı (I am going to discuss this with the principal)",
          "Planın henüz dış dünyada kesinleşmediği aşama"
        ],
        "nonUsages": [
          "Doktor randevusu veya biletli uçuş gibi iki taraflı kesin randevular (onlar am/is/are V-ing alır)"
        ],
        "positiveFormula": "Subject + is/are going to + V1 (Kişisel niyet)",
        "negativeFormula": "She is not going to tolerate this behavior any longer.",
        "questionFormula": "How are you going to address this budgetary shortfall?",
        "shortAnswers": "By reducing overhead expenses.",
        "subjectVerbAgreement": "Özneye göre am, is, are seçimi.",
        "verbForm": "am/is/are going to + V1",
        "auxiliaryVerb": "be",
        "timeMarkers": [
          "eventually",
          "in due course",
          "after careful consideration"
        ],
        "signals": [
          "intend to",
          "decided to",
          "going to resolve"
        ],
        "timeline": "Zihinsel Kararlılık [Niyet] ---> Eyleme Dönüşme Hazırlığı.",
        "examples": [
          "The administration is going to revise the grading policy next semester.",
          "I am going to speak to my supervisor about a promotion as soon as the project wraps up."
        ],
        "exampleTr": [
          "Yönetim, gelecek dönem notlandırma politikasını gözden geçirecek (kurumsal niyet)."
        ],
        "code": "Zihinsel Karar & Niyet = be going to! Dış Dünyada Bağlanmış Randevu = Present Continuous!",
        "visualMemory": "Kişinin kendi kendine aldığı yeni yıl kararları listesi 📝🎯",
        "commonMistake": "İki kişi arasında kesinleştirilmiş randevuyu sadece niyet gibi algılamak.",
        "correctWrongContrast": {
          "wrong": "I will change my career path; I already decided.",
          "correct": "I am going to change my career path; I have already decided.",
          "note": "Karar önceden verilmişse 'will' değil 'be going to' kullanılır.",
          "explanation": "Karar önceden verilmişse 'will' değil 'be going to' kullanılır."
        },
        "differenceFromSimilarTense": "I'm going to see a doctor (doktora gitmeye niyetim var); I'm seeing the doctor at 3 pm (randevum saat 3'te).",
        "levelTactic": "'decided, intention, resolution' kelimeleri metinde geçiyorsa 'be going to' yapısını seç.",
        "miniTest": {
          "question": "Having reviewed the quarterly losses, the board of directors ---- the unprofitable branch in the capital.",
          "options": [
            "is going to close",
            "closed",
            "had closed",
            "is closing to",
            "closes"
          ],
          "answer": 0,
          "explanation": "Zararlar incelenip karara bağlanmış kurumsal niyet: 'is going to close'."
        },
        "explainedAnswer": "Doğru yanıt A (is going to close). Önceden incelenip kararlaştırılan kurumsal niyet be going to ile verilir.",
        "signalWords": [
          "intend to",
          "decided to",
          "going to resolve"
        ]
      },
      "B2": {
        "title": "Veri Temelli Kaçınılmaz Ekonomik/Ekolojik Eğilimler",
        "basicMeaning": "Finansal veya iklimsel göstergelerin işaret ettiği ve 'kaçınılmaz olarak gerçekleşeceği öngörülen' durumlar.",
        "usages": [
          "Grafik ve istatistiki kanıtlara dayanan projeksiyonlar",
          "Piyasa göstergelerinin kaçınılmaz iflas veya daralma sinyali"
        ],
        "nonUsages": [
          "Fal veya spekülatif temelsiz tahminler"
        ],
        "positiveFormula": "All economic indicators demonstrate that the sector is going to contract.",
        "negativeFormula": "Given current reserves, the reservoir is not going to sustain the population through summer.",
        "questionFormula": "Are these inflationary pressures going to erode consumer purchasing power?",
        "shortAnswers": "Inevitably, yes.",
        "subjectVerbAgreement": "Çoğul göstergelerle 'are going to', tekil göstergelerle 'is going to'.",
        "verbForm": "is/are going to + V1",
        "auxiliaryVerb": "be",
        "timeMarkers": [
          "based on current trajectories",
          "judging from the data",
          "imminently"
        ],
        "signals": [
          "indicators suggest",
          "data clearly shows that it is going to"
        ],
        "timeline": "Mevcut veri grafiği [Eldeki Kanıt] ===> Kaçınılmaz Projeksiyon 📉",
        "examples": [
          "Judging from the latest epidemiological metrics, the infection curve is going to peak within two weeks.",
          "With debt ratios reaching unsustainable levels, the sovereign fund is going to default unless restructured."
        ],
        "exampleTr": [
          "Son epidemiyolojik ölçümlere bakılırsa, enfeksiyon eğrisi iki hafta içinde zirveye ulaşacak (veri kanıtı)."
        ],
        "code": "Somut Veri / Grafik Kanıtı = is/are going to peak / contract!",
        "visualMemory": "Ekranda hızla aşağı yönelen finansal çöküş grafiği ve alarm veren kırmızı ışıklar 📉🚨",
        "commonMistake": "'Judging from the data' varken soyut 'will' kullanmak (veri somut kanıttır, going to daha güçlüdür).",
        "correctWrongContrast": {
          "wrong": "Judging by the radar, a severe hailstorm will strike our region.",
          "correct": "Judging by the radar, a severe hailstorm is going to strike our region.",
          "note": "Radar görüntüsü somut kanıttır, 'is going to strike' tercih edilir.",
          "explanation": "Radar görüntüsü somut kanıttır, 'is going to strike' tercih edilir."
        },
        "differenceFromSimilarTense": "Will genel gelecek tahmini yaparken, be going to 'veriler açıkça bunu gösteriyor' der.",
        "levelTactic": "'Judging from the metrics, based on visible evidence' gibi veri kanıtı sunulan cümlelerde be going to ara.",
        "miniTest": {
          "question": "Judging by the catastrophic loss of reservoir volume, the municipality ---- severe water rationing next month.",
          "options": [
            "is going to impose",
            "imposed",
            "had imposed",
            "was imposing",
            "imposes"
          ],
          "answer": 0,
          "explanation": "'Judging by the catastrophic loss' somut kanıt sunar; 'is going to impose' kaçınılmaz kararı bildirir."
        },
        "explainedAnswer": "Doğru yanıt A (is going to impose). Somut fiziksel verilere dayanan kaçınılmaz gelecek be going to ile verilir.",
        "signalWords": [
          "indicators suggest",
          "data clearly shows that it is going to"
        ]
      },
      "C1": {
        "title": "Sosyo-Tarihsel Kaçınılmazlık ve Kurumsal Çöküş Bildirimleri",
        "basicMeaning": "Tarihsel veya sosyolojik analizlerde şartların olgunlaşmasıyla bir patlamanın 'kaçınılmaz hale gelmesi'.",
        "usages": [
          "Sistemik çöküşün kaçınılmazlığını vurgulama",
          "Tarihçinin dönüm noktasındaki yaklaşan fırtınayı tasviri"
        ],
        "nonUsages": [
          "Durgun ve risksiz dönemler"
        ],
        "positiveFormula": "The structural contradictions within the regime are going to trigger systemic rupture.",
        "negativeFormula": "Palliative reforms are not going to salvage the bankrupt institution.",
        "questionFormula": "How is the executive going to navigate the impending constitutional impasse?",
        "shortAnswers": "By seeking emergency legislative powers.",
        "subjectVerbAgreement": "Kurumsal ve soyut özneler.",
        "verbForm": "is/are going to + V1",
        "auxiliaryVerb": "be",
        "timeMarkers": [
          "inevitably",
          "imminently",
          "under current structural pressures"
        ],
        "signals": [
          "systemic collapse is going to occur",
          "impending"
        ],
        "timeline": "Yapısal çatlakların son haddine varması ve yaklaşan çöküş 💥",
        "examples": [
          "Sociologists warn that unmitigated wealth disparity is going to fracture democratic cohesion across the nation.",
          "Unless immediate liquidity is injected, the banking sector is going to experience widespread insolvency."
        ],
        "exampleTr": [
          "Sosyologlar, kontrolsüz servet eşitsizliğinin ulus genelinde demokratik uyumu parçalayacağı (parçalamak üzere olduğu) konusunda uyarıyor."
        ],
        "code": "Sistemik Kaçınılmazlık = is/are going to fracture / collapse!",
        "visualMemory": "Baraj duvarındaki devasa çatlak ve suyun fışkırmak üzere olduğu an 🌊🧱",
        "commonMistake": "Yaklaşan somut kurumsal tehlikeyi nötr bir ihtimal gibi sunmak.",
        "correctWrongContrast": {
          "wrong": "The structural defects will collapse the bridge soon.",
          "correct": "The structural defects are going to collapse the bridge soon.",
          "note": "Yapısal kusurlar göz önündeki kanıttır, çöküşün an meselesi olduğunu 'are going to' vurgular.",
          "explanation": "Yapısal kusurlar göz önündeki kanıttır, çöküşün an meselesi olduğunu 'are going to' vurgular."
        },
        "differenceFromSimilarTense": "Will soyut olasılıkken, be going to kaçınılmaz bir akıbeti vurgular.",
        "levelTactic": "Akademik metinlerde sistemik kusurlara (structural flaws) dayanan kaçınılmaz gelecek durumlarında be going to gücünü hatırla.",
        "miniTest": {
          "question": "Ecologists caution that the unchecked introduction of invasive predatory species ---- the indigenous riparian food web.",
          "options": [
            "is going to destabilize",
            "destabilized",
            "had destabilized",
            "was destabilizing",
            "destabilizes"
          ],
          "answer": 0,
          "explanation": "Somut tehdide dayanan kaçınılmaz ekolojik yıkım: 'is going to destabilize'."
        },
        "explainedAnswer": "Doğru yanıt A (is going to destabilize). Gözle görülür tehdidin doğuracağı kaçınılmaz sonuç be going to ile sunulur.",
        "signalWords": [
          "systemic collapse is going to occur",
          "impending"
        ]
      },
      "C2": {
        "title": "Edebi/Felsefi Kaçınılmaz Yazgı (Fate & Imminent Doom)",
        "basicMeaning": "Trajedilerde ve edebi başyapıtlarda karakterin kendi kibrinin kurbanı olarak felakete sürüklenişinin kaçınılmazlığı.",
        "usages": [
          "Trajik kahramanın kaçınılmaz çöküşü",
          "Edebi kehanetlerin somut işaretlerle belirmesi"
        ],
        "nonUsages": [
          "Pozitif bilimsel kuru raporlar"
        ],
        "positiveFormula": "Every step the tragic king takes demonstrates that hubris is going to destroy him.",
        "negativeFormula": "No mortal intervention is going to avert the ordained catastrophe.",
        "questionFormula": "How does the author signal that the dynasty is going to perish?",
        "shortAnswers": "Through ominous omens and moral corruption.",
        "subjectVerbAgreement": "Edebi tekillik/çoğulluk uyumu.",
        "verbForm": "is/are going to + V1",
        "auxiliaryVerb": "be",
        "timeMarkers": [
          "inexorably",
          "as fate decrees",
          "in the tragic climax"
        ],
        "signals": [
          "hubris is going to destroy",
          "imminent doom"
        ],
        "timeline": "Trajik yazgının kaçınılmaz iniş çizgisi 📉⚡",
        "examples": [
          "From the ominous opening soliloquy, the audience perceives that Macbeth's unchecked ambition is going to ruin him.",
          "The moral decay of the aristocracy indicates that the old order is going to collapse under its own corruption."
        ],
        "exampleTr": [
          "Meşum açılış tiradından itibaren seyirci, Macbeth'in dizginsiz hırsının onu mahvedeceğini (mahvetmek üzere olduğunu) sezer."
        ],
        "code": "Trajik Yazgı = is going to ruin / destroy!",
        "visualMemory": "Uçuruma doğru yürüyen taçlı kral silüeti 👑🕳️",
        "commonMistake": "Edebi trajedi ve kaçınılmaz son anlatımlarında kuru bir gelecek zaman kullanmak.",
        "correctWrongContrast": {
          "wrong": "The play shows that he will die randomly.",
          "correct": "The dramatic progression shows that his pride is going to destroy him.",
          "note": "Edebi kurguda adım adım gelen kaçınılmaz son be going to ile dramatikleştirilir.",
          "explanation": "Edebi kurguda adım adım gelen kaçınılmaz son be going to ile dramatikleştirilir."
        },
        "differenceFromSimilarTense": "Will tesadüf olabilir; be going to kaderin ağlarını çoktan ördüğünü ve sonun kaçınılmaz olduğunu hissettirir.",
        "levelTactic": "Tiyatro ve roman eleştirisi metinlerinde trajik kaçınılmazlığı (hubris, doom) aktaran be going to yapılarına dikkat et.",
        "miniTest": {
          "question": "The dramatic trajectory of the narrative leaves no doubt that the protagonist's obsessive quest ---- in self-destruction.",
          "options": [
            "is going to culminate",
            "culminated",
            "had culminated",
            "was culminated",
            "culminates"
          ],
          "answer": 0,
          "explanation": "'Leaves no doubt' ve 'dramatic trajectory' kaçınılmaz edebi akıbeti (is going to culminate) gösterir."
        },
        "explainedAnswer": "Doğru yanıt A (is going to culminate). Anlatının trajik kaçınılmazlığı be going to kalıbıyla aktarılır.",
        "signalWords": [
          "hubris is going to destroy",
          "imminent doom"
        ]
      },
      "YDS": {
        "title": "ÖSYM'nin 'Plan vs Kanıt' Soruları: Will ile Be Going To Ayrımı",
        "basicMeaning": "YDS/YDT'de be going to'nun temel soru formatı: Önceden niyet (plan) veya somut fiziksel kanıt (evidence).",
        "usages": [
          "Soru kökünde 'have decided, have planned' varsa be going to",
          "Gözle görülür fiziksel/görsel kanıt sunulduğunda be going to",
          "Was/were going to (yapacaktım ama yapamadım) tuzağının başlangıcı"
        ],
        "nonUsages": [
          "Hiçbir plan veya kanıt yokken rastgele will yerine be going to seçmek"
        ],
        "positiveFormula": "The government has prepared a master plan; it is going to construct three bridges.",
        "negativeFormula": "Past Clause + [am/is/are going to UYUMSUZDUR; geçmişte was/were going to olur]",
        "questionFormula": "How is the regional authority going to mitigate flood risks?",
        "shortAnswers": "By erecting seawalls.",
        "subjectVerbAgreement": "ÖSYM soru köklerindeki karmaşık özne uyumları.",
        "verbForm": "am/is/are going to + V1",
        "auxiliaryVerb": "am / is / are",
        "timeMarkers": [
          "according to the master plan",
          "judging from the symptoms",
          "next fiscal year"
        ],
        "signals": [
          "has decided to",
          "has planned to",
          "the plan is to"
        ],
        "timeline": "Sınav Sorusu: [Plan Hazırlandı / Kanıt Masada] ===> is/are going to + V1",
        "examples": [
          "The transport ministry has finalized the blueprints; contractors are going to commence tunneling next month.",
          "Given the acute drop in barometric pressure, a severe cyclonic storm is going to hit the coast."
        ],
        "exampleTr": [
          "Ulaştırma bakanlığı planları tamamladı; müteahhitler gelecek ay tünel kazısına başlayacak (planlı gelecek)."
        ],
        "code": "YDS Parolası: 'FINALIZED BLUEPRINTS / HAS DECIDED' = BE GOING TO + V1!",
        "visualMemory": "ÖSYM soru kökündeki 'has finalized plans' ifadesinden 'is going to' şıkkına çizilen bağlantı 📐📄",
        "commonMistake": "Planın önceden hazırlandığı belirtildiği halde (has finalized) 'will' seçmek.",
        "correctWrongContrast": {
          "wrong": "The city council approved the budget; they will build a park.",
          "correct": "The city council approved the budget; they are going to build a park.",
          "note": "Bütçe onaylanmış ve karar verilmişse 'are going to build' doğru kullanımdır.",
          "explanation": "Bütçe onaylanmış ve karar verilmişse 'are going to build' doğru kullanımdır."
        },
        "differenceFromSimilarTense": "Will anlık fikirdir; Be going to kararı çoktan alınmış resmi/bireysel plandır.",
        "levelTactic": "Soru kökünde 'has arranged, has decided, blueprints, plans' gibi ön hazırlık belirten kelimeler varsa 'be going to' ara.",
        "miniTest": {
          "question": "The municipal council has officially allocated the required funds and ---- a state-of-the-art recycling facility next spring.",
          "options": [
            "is going to construct",
            "constructed",
            "had constructed",
            "was constructing",
            "constructs"
          ],
          "answer": 0,
          "explanation": "'Has officially allocated the required funds' (fonları resmi olarak tahsis etti) planlı geleceği (is going to construct) gerektirir."
        },
        "explainedAnswer": "Doğru yanıt A (is going to construct). Bütçesi tahsis edilmiş resmi planlar 'be going to' ile ifade edilir.",
        "signalWords": [
          "has decided to",
          "has planned to",
          "the plan is to"
        ]
      }
    }
  },
  {
    "slug": "present-continuous-future",
    "name": "Present Continuous for Future",
    "turkish": "Kesinleşmiş Gelecek Düzenlemeleri",
    "emoji": "📅",
    "summary": "Tarihi, saati ve yeri başkalarıyla önceden kesinleştirilmiş kişisel randevular, biletli seyahatler ve iki taraflı düzenlemeler.",
    "levels": {
      "A1": {
        "title": "Kesinleşmiş Randevular ve Buluşmalar",
        "basicMeaning": "Başka bir kişiyle günü, saati ve yeri önceden kararlaştırılmış gelecek buluşmaları.",
        "usages": [
          "Doktor randevusu (I am seeing the dentist tomorrow at 3)",
          "Arkadaşla buluşma (We are having lunch on Friday)"
        ],
        "nonUsages": [
          "Hava durumu tahminleri (hava durumuyla randevulaşılamaz!)"
        ],
        "positiveFormula": "Subject + am/is/are + V-ing + Future Time + Location/Person",
        "negativeFormula": "I am not meeting him tonight because he is out of town.",
        "questionFormula": "What time are you meeting the client tomorrow?",
        "shortAnswers": "At half past two.",
        "subjectVerbAgreement": "Özneye göre am, is, are + V-ing.",
        "verbForm": "am/is/are + V-ing",
        "auxiliaryVerb": "am / is / are",
        "timeMarkers": [
          "tomorrow at 10 am",
          "this Friday",
          "next Tuesday afternoon",
          "tonight"
        ],
        "signals": [
          "meeting someone",
          "having an appointment",
          "flying to"
        ],
        "timeline": "[Randevu Ayarlandı] ---> [Şu An] ---> [Yarın Saat 10: Randevu Gerçekleşiyor 🤝]",
        "examples": [
          "I am seeing my physician tomorrow at 10:30 am.",
          "They are flying to Berlin on Friday night; they have already checked in online."
        ],
        "exampleTr": [
          "Yarın sabah saat 10:30'da doktorumla randevum var."
        ],
        "code": "Kesin Randevu (Tarih + Saat + Yer) = am/is/are + V-ing!",
        "visualMemory": "Akıllı telefon takviminde 'Yarın 10:30 Diş Hekimi' randevu bildirimi 📱🦷",
        "commonMistake": "İki taraflı randevularda sadece will kullanmak (*I will see the doctor tomorrow at 10*).",
        "correctWrongContrast": {
          "wrong": "I will meet the manager tomorrow at 2 pm; it is on my calendar.",
          "correct": "I am meeting the manager tomorrow at 2 pm; it is on my calendar.",
          "note": "Takvime işlenmiş randevularda Present Continuous (am meeting) kullanılır.",
          "explanation": "Takvime işlenmiş randevularda Present Continuous (am meeting) kullanılır."
        },
        "differenceFromSimilarTense": "I am going to see a doctor (kendi niyetim, henüz randevu almadım); I am seeing the doctor at 10 (randevu alındı, saat kesin).",
        "levelTactic": "Cümlede gelecek zaman ifadesinin yanında net bir saat veya randevu kişisi ('at 10 am, with Mr. Brown') varsa Present Continuous ara.",
        "miniTest": {
          "question": "Don't call her tomorrow afternoon because she ---- her PhD advisor at the faculty lounge.",
          "options": [
            "is meeting",
            "met",
            "had met",
            "has met",
            "meets"
          ],
          "answer": 0,
          "explanation": "'Tomorrow afternoon' ve danışmanla kararlaştırılmış randevu: 'is meeting'."
        },
        "explainedAnswer": "Doğru yanıt A (is meeting). Kesinleşmiş kişisel randevular gelecek için Present Continuous ile verilir.",
        "signalWords": [
          "meeting someone",
          "having an appointment",
          "flying to"
        ]
      },
      "A2": {
        "title": "Biletli Seyahatler ve Sosyal Organizasyonlar",
        "basicMeaning": "Biletleri alınmış uçak/tren seyahatleri, düğün ve parti gibi organize edilmiş etkinlikler.",
        "usages": [
          "Biletli uçuşlar (I am flying to Paris next Monday)",
          "Sosyal davetler (We are hosting a dinner party on Saturday)"
        ],
        "nonUsages": [
          "Doğa olayları ve bilimsel kanunlar"
        ],
        "positiveFormula": "Subject + am/is/are + flying / hosting / traveling + next [Day]",
        "negativeFormula": "We are not throwing a party this weekend.",
        "questionFormula": "Are they traveling to Vienna by train next week?",
        "shortAnswers": "Yes, they have their tickets.",
        "subjectVerbAgreement": "Özneye göre am, is, are çekimi.",
        "verbForm": "V-ing",
        "auxiliaryVerb": "be",
        "timeMarkers": [
          "next Monday",
          "this coming weekend",
          "on Saturday evening"
        ],
        "signals": [
          "have tickets",
          "already arranged",
          "flying to"
        ],
        "timeline": "Bilet cebinde ---> Gelecek haftaki yolculuk kesin ✈️",
        "examples": [
          "We are hosting a formal banquet this Saturday; eighty guests have RSVP'd.",
          "She is leaving for London on the early morning flight tomorrow."
        ],
        "exampleTr": [
          "Bu cumartesi resmi bir ziyafet veriyoruz; seksen davetli katılımını onayladı."
        ],
        "code": "Biletli Seyahat & Davet = am/is/are + V-ing!",
        "visualMemory": "Cebinde uçak biniş kartı (boarding pass) ve bavuluyla havaalanına giden yolcu 🛫🎫",
        "commonMistake": "Katılımcıların onayladığı bir daveti sanki anlık bir kararmış gibi 'will' ile anlatmak.",
        "correctWrongContrast": {
          "wrong": "I will get married next month; invitations are sent.",
          "correct": "I am getting married next month; invitations are sent.",
          "note": "Davetiyeleri basılmış düğün kesin bir organizasyondur; 'am getting married' olmalıdır.",
          "explanation": "Davetiyeleri basılmış düğün kesin bir organizasyondur; 'am getting married' olmalıdır."
        },
        "differenceFromSimilarTense": "I will get married (inşallah bir gün evlenirim); I am getting married next month (salon tutuldu, davetiyeler dağıtıldı).",
        "levelTactic": "'Invitations sent, tickets bought, guests confirmed' gibi dış dünya hazırlığı belirten ipuçlarında Present Continuous seç.",
        "miniTest": {
          "question": "Dr. Watson ---- to Geneva on Thursday to attend the annual toxicology symposium.",
          "options": [
            "is traveling",
            "traveled",
            "had traveled",
            "has traveled",
            "was traveling"
          ],
          "answer": 0,
          "explanation": "Sempozyum katılımı için kesinleşmiş seyahat düzenlemesi: 'is traveling'."
        },
        "explainedAnswer": "Doğru yanıt A (is traveling). Sempozyum ve seyahat düzenlemeleri Present Continuous ile aktarılır.",
        "signalWords": [
          "have tickets",
          "already arranged",
          "flying to"
        ]
      },
      "B1": {
        "title": "İş Dünyasında Resmi Randevular ve Protokol Takvimleri",
        "basicMeaning": "İş görüşmeleri, yönetim kurulu toplantıları ve denetim heyeti ziyaretleri.",
        "usages": [
          "Mülakat ve iş randevuları (The committee is interviewing candidates tomorrow)",
          "Resmi heyet ziyaretleri"
        ],
        "nonUsages": [
          "Tren ve uçakların kendi genel tarifeleri (onlar Simple Present alır)"
        ],
        "positiveFormula": "The board is convening tomorrow morning to evaluate the acquisition.",
        "negativeFormula": "The CEO is not attending the European summit this year.",
        "questionFormula": "When are the external auditors arriving at the headquarters?",
        "shortAnswers": "On Monday morning.",
        "subjectVerbAgreement": "Kurumsal ve çoğul öznelerde be uyumu.",
        "verbForm": "is/are + V-ing",
        "auxiliaryVerb": "is / are",
        "timeMarkers": [
          "tomorrow morning",
          "on Wednesday at 10",
          "next quarter (takvimde)"
        ],
        "signals": [
          "is interviewing candidates",
          "are convening tomorrow"
        ],
        "timeline": "Kurumsal ajandada kilitlenmiş toplantı saati 🔒📅",
        "examples": [
          "The executive committee is interviewing shortlisted applicants all day tomorrow.",
          "Our chief legal counsel is meeting with regulatory authorities on Wednesday."
        ],
        "exampleTr": [
          "İcra komitesi yarın bütün gün son elemeye kalan adaylarla mülakat yapıyor (takvim kesin)."
        ],
        "code": "Kurumsal Randevu = is/are convening / interviewing tomorrow!",
        "visualMemory": "Yönetim kurulu toplantı salonunun kapısındaki dijital ekran: 'Reserved 10:00-12:00' 🖥️🏢",
        "commonMistake": "Trenin kalkış saati (tarife) ile insanın o trene binmesini karıştırmak.",
        "correctWrongContrast": {
          "wrong": "The train is leaving at 9:00 am. (Tarife kuralı)",
          "correct": "The train leaves at 9:00 am (Tarife: Simple Present); I am taking the 9:00 am train (Kişisel plan: Present Continuous).",
          "note": "Taşıtın tarifesi Simple Present; insanın kişisel düzenlemesi Present Continuous olur.",
          "explanation": "Taşıtın tarifesi Simple Present; insanın kişisel düzenlemesi Present Continuous olur."
        },
        "differenceFromSimilarTense": "The flight departs at 7 (tarife); I am flying at 7 (benim seyahat düzenlemem).",
        "levelTactic": "İnsan öznesi ve kesinleşmiş takvim randevusu varsa Present Continuous; taşıt öznesi ve saat varsa Simple Present seç.",
        "miniTest": {
          "question": "Our senior negotiators ---- their counterparts in Brussels on Friday to finalize the export agreement.",
          "options": [
            "are meeting",
            "met",
            "had met",
            "has met",
            "meet"
          ],
          "answer": 0,
          "explanation": "Müzakerecilerin cuma günkü kesinleşmiş diplomasi randevusu: 'are meeting'."
        },
        "explainedAnswer": "Doğru yanıt A (are meeting). İş ve diplomasi randevuları gelecek için Present Continuous ile verilir.",
        "signalWords": [
          "is interviewing candidates",
          "are convening tomorrow"
        ]
      },
      "B2": {
        "title": "Diplomatik Ziyaretler ve Üst Düzey Devlet Protokolleri",
        "basicMeaning": "Devlet başkanlarının, elçilerin ve uluslararası heyetlerin önceden duyurulmuş resmi ziyaret takvimleri.",
        "usages": [
          "Devlet başkanlarının ikili zirve ziyaretleri",
          "Bakanlıklar arası resmi heyet temasları"
        ],
        "nonUsages": [
          "Gündelik tesadüfi temaslar"
        ],
        "positiveFormula": "The Foreign Minister is visiting Washington next week for bilateral talks.",
        "negativeFormula": "The delegation is not participating in the preliminary working sessions.",
        "questionFormula": "Which head of state is hosting the bilateral banquet tomorrow night?",
        "shortAnswers": "The French President.",
        "subjectVerbAgreement": "Resmi unvanlarla tekil/çoğul yardımcı fiil uyumu.",
        "verbForm": "is/are + V-ing",
        "auxiliaryVerb": "is / are",
        "timeMarkers": [
          "next week",
          "commencing on Tuesday",
          "for a three-day official visit"
        ],
        "signals": [
          "is visiting for talks",
          "is hosting the banquet"
        ],
        "timeline": "Protokol tarafından aylar öncesinden hazırlanmış resmi devlet ziyareti takvimi 🏛️🤝",
        "examples": [
          "The Secretary-General is visiting earthquake-affected provinces on Thursday to oversee relief distribution.",
          "Prime ministers of both allied nations are signing the joint defense accord tomorrow evening."
        ],
        "exampleTr": [
          "Genel Sekreter, yardım dağıtımını denetlemek üzere perşembe günü depremden etkilenen illeri ziyaret ediyor."
        ],
        "code": "Resmi Devlet Ziyareti = is visiting next week for bilateral talks!",
        "visualMemory": "Havaalanında açılan kırmızı halı ve dalgalanan iki ülke bayrağı 🚩🛬",
        "commonMistake": "Kesinleşmiş diplomatik ziyaretleri sadece 'will visit' ile sıradan bir ihtimal gibi sunmak.",
        "correctWrongContrast": {
          "wrong": "The president will visit Ankara tomorrow; the protocol is ready.",
          "correct": "The president is visiting Ankara tomorrow; the protocol is ready.",
          "note": "Protokolü hazır ve saati belli devlet ziyaretlerinde Present Continuous kesinliği vurgular.",
          "explanation": "Protokolü hazır ve saati belli devlet ziyaretlerinde Present Continuous kesinliği vurgular."
        },
        "differenceFromSimilarTense": "Will visit (ziyaret etmeyi planlıyor/edecek); Is visiting tomorrow (uçağı yarın iniyor, karşılama hazır).",
        "levelTactic": "Metinde 'official visit, bilateral talks, scheduled protocol' gibi ifadelerle birlikte gelecek gün verilmişse Present Continuous ara.",
        "miniTest": {
          "question": "The Chancellor ---- the regional summit in Geneva next Tuesday, accompanied by an extensive trade delegation.",
          "options": [
            "is attending",
            "attended",
            "had attended",
            "has attended",
            "attends"
          ],
          "answer": 0,
          "explanation": "Gelecek salı günkü kesinleşmiş üst düzey zirve katılımı: 'is attending'."
        },
        "explainedAnswer": "Doğru yanıt A (is attending). Kesinleşmiş protokol ve resmi zirve ziyaretleri Present Continuous alır.",
        "signalWords": [
          "is visiting for talks",
          "is hosting the banquet"
        ]
      },
      "C1": {
        "title": "Akademik Konferans Programları ve Kürsü Sunumları",
        "basicMeaning": "Uluslararası kongre ve sempozyum kitapçığında saati, salonu ve oturum başkanı basılmış akademik sunumlar.",
        "usages": [
          "Bilim insanının kongredeki sunum saati",
          "Açılış konuşmacısının programdaki kesin yeri"
        ],
        "nonUsages": [
          "Henüz bildirisi kabul edilmemiş araştırmacının niyeti"
        ],
        "positiveFormula": "Professor Klein is delivering the keynote address at 09:00 on Wednesday.",
        "negativeFormula": "The principal investigator is not presenting the interim data until Friday.",
        "questionFormula": "Who is chairing the plenary session tomorrow morning?",
        "shortAnswers": "Dr. Vance from Cambridge.",
        "subjectVerbAgreement": "Akademik unvanlı öznelerle be uyumu.",
        "verbForm": "is/are + V-ing",
        "auxiliaryVerb": "be",
        "timeMarkers": [
          "at the plenary session on Thursday",
          "tomorrow at 11:00",
          "during the morning symposium"
        ],
        "signals": [
          "is delivering the keynote",
          "is presenting the findings"
        ],
        "timeline": "Konferans program kitapçığında basılı kesin saat ve salon 📖🎤",
        "examples": [
          "Leading astrophysicists are convening in Tokyo next week to evaluate deep-space interferometer data.",
          "Dr. Thorne is presenting the initial findings of the clinical trial during tomorrow's plenary session."
        ],
        "exampleTr": [
          "Önde gelen astrofizikçiler, derin uzay interferometre verilerini değerlendirmek üzere gelecek hafta Tokyo'da toplanıyor."
        ],
        "code": "Akademik Sunum Randevusu = is delivering / presenting tomorrow!",
        "visualMemory": "Konferans salonundaki dev projeksiyon ekranı ve kürsüdeki konuşmacı 🎤📊",
        "commonMistake": "Konferans kitapçığında basılmış kesin sunumu 'will present' şeklinde belirsiz bırakmak.",
        "correctWrongContrast": {
          "wrong": "He will present his paper tomorrow at 10 am in Hall B.",
          "correct": "He is presenting his paper tomorrow at 10 am in Hall B.",
          "note": "Salonu ve saati basılmış sunumlarda Present Continuous kullanılır.",
          "explanation": "Salonu ve saati basılmış sunumlarda Present Continuous kullanılır."
        },
        "differenceFromSimilarTense": "The session begins at 10 (program maddesi: Simple Present); Professor X is presenting at 10 (akademisyenin randevusu: Present Continuous).",
        "levelTactic": "Konferans, sempozyum veya panel bağlamında insan öznesi + saat/yer eşleşmesinde Present Continuous ara.",
        "miniTest": {
          "question": "The Nobel laureate ---- the opening lecture at the international chemistry symposium tomorrow morning.",
          "options": [
            "is delivering",
            "delivered",
            "had delivered",
            "has delivered",
            "delivers"
          ],
          "answer": 0,
          "explanation": "Yarın sabahki kesinleşmiş açılış dersi sunumu: 'is delivering'."
        },
        "explainedAnswer": "Doğru yanıt A (is delivering). Akademik sempozyum programında kesinleşen sunumlar Present Continuous ile verilir.",
        "signalWords": [
          "is delivering the keynote",
          "is presenting the findings"
        ]
      },
      "C2": {
        "title": "Kurgusal/Dramatik Zamanlama ve Sahneye Koyma Düzenlemeleri",
        "basicMeaning": "Tiyatro prömiyerleri, orkestra turneleri ve büyük sanat prodüksiyonlarının kesin takvim planı.",
        "usages": [
          "Operanın dünya prömiyeri tarihi",
          "Orkestranın uluslararası turne takvimi"
        ],
        "nonUsages": [
          "Eserdeki hayali kurgusal olaylar"
        ],
        "positiveFormula": "The Philharmonic Orchestra is performing Mahler's Fifth Symphony on Saturday evening.",
        "negativeFormula": "The prima ballerina is not dancing in the matinee performance.",
        "questionFormula": "Which prestigious venue is the ensemble inaugurating next month?",
        "shortAnswers": "The newly renovated opera house.",
        "subjectVerbAgreement": "Topluluk ve sanat kurumu isimleri.",
        "verbForm": "is/are + V-ing",
        "auxiliaryVerb": "be",
        "timeMarkers": [
          "on opening night",
          "this coming Saturday",
          "throughout the festival week"
        ],
        "signals": [
          "is performing on Saturday",
          "is staging the premiere"
        ],
        "timeline": "Biletleri aylar önce tükenmiş görkemli prömiyer gecesi 🎭🎟️",
        "examples": [
          "The Royal Shakespeare Company is staging an avant-garde adaptation of 'King Lear' next month.",
          "The virtuoso violinist is performing with the Berlin Philharmonic this Saturday evening."
        ],
        "exampleTr": [
          "Kraliyet Shakespeare Topluluğu, gelecek ay 'Kral Lear'ın avangart bir uyarlamasını sahneliyor."
        ],
        "code": "Gala & Prömiyer Düzenlemesi = is performing / staging this Saturday!",
        "visualMemory": "Tiyatronun ışıklı tabelasındaki 'SOLD OUT' yazısı ve açılan kırmızı kadife perde 🎭🔴",
        "commonMistake": "Sanat topluluğunun biletli gala programını belirsiz bir gelecek gibi aktarmak.",
        "correctWrongContrast": {
          "wrong": "The opera will premiere on Friday night; all tickets are sold.",
          "correct": "The opera is premiering on Friday night; all tickets are sold.",
          "note": "Biletleri satılmış gala kesin bir düzenlemedir; 'is premiering' olmalıdır.",
          "explanation": "Biletleri satılmış gala kesin bir düzenlemedir; 'is premiering' olmalıdır."
        },
        "differenceFromSimilarTense": "The theatre opens at 7 (bina kapı saati: Simple Present); The company is performing at 8 (topluluğun sahne düzenlemesi: Present Continuous).",
        "levelTactic": "Kültür-sanat metinlerinde biletli, tarihli ve mekanlı konser/tiyatro organizasyonlarında Present Continuous ara.",
        "miniTest": {
          "question": "The renowned ensemble ---- an exclusive chamber concert at the historic cathedral on Friday night.",
          "options": [
            "is giving",
            "gave",
            "had given",
            "has given",
            "gives"
          ],
          "answer": 0,
          "explanation": "Cuma gecesi tarihi katedralde verilecek biletli özel konser düzenlemesi: 'is giving'."
        },
        "explainedAnswer": "Doğru yanıt A (is giving). Kesinleşmiş konser ve gösteri düzenlemeleri Present Continuous ile aktarılır.",
        "signalWords": [
          "is performing on Saturday",
          "is staging the premiere"
        ]
      },
      "YDS": {
        "title": "ÖSYM'nin 'Arrangement' Soruları: Zaman Zarfı ve Randevu Eşleşmesi",
        "basicMeaning": "YDS/YDT'de soru kökünde gelecek zaman zarfı (tomorrow, next week) ile Present Continuous eşleşmesi.",
        "usages": [
          "Gelecek zaman zarfı + şahıs randevusu (is meeting tomorrow)",
          "Seçenek eleme: Gelecek zarfı olduğu halde şıklarda will yoksa Present Continuous tek doğru seçenektir",
          "Sınavda 'am/is/are V-ing'in gelecek zaman işlevi"
        ],
        "nonUsages": [
          "Geçmiş zaman işaretçisiyle Present Continuous kullanımı"
        ],
        "positiveFormula": "Subject + is/are + V-ing + tomorrow / next week (Gelecek Zaman Anlamı)",
        "negativeFormula": "Present Continuous + [Past zaman zarfı UYUMSUZDUR]",
        "questionFormula": "What time are the delegates assembling for the closed-door negotiations tomorrow?",
        "shortAnswers": "At nine o'clock sharp.",
        "subjectVerbAgreement": "ÖSYM soru kökündeki heyet ve komite öznelerinde tekil/çoğul kontrolü.",
        "verbForm": "am/is/are + V-ing",
        "auxiliaryVerb": "am / is / are",
        "timeMarkers": [
          "tomorrow morning",
          "on Wednesday",
          "next week",
          "this coming Friday"
        ],
        "signals": [
          "meeting tomorrow",
          "flying next week",
          "convening on Friday"
        ],
        "timeline": "Sınav Sorusu: [Gelecek Zaman Zarfı] + [İki Taraflı Randevu] ===> am/is/are + V-ing",
        "examples": [
          "The international mediation team is convening in Geneva tomorrow to resume peace negotiations.",
          "According to the official communique, the prime minister is meeting the foreign secretary on Thursday."
        ],
        "exampleTr": [
          "Uluslararası arabuluculuk heyeti, barış müzakerelerini sürdürmek üzere yarın Cenevre'de toplanıyor."
        ],
        "code": "YDS İpucu: Şıklarda 'will' yoksa ama soru geleceği anlatıyorsa 'am/is/are V-ing' TEK CEVAPTIR!",
        "visualMemory": "ÖSYM kitapçığında 'tomorrow' kelimesiyle 'is convening' seçeneği arasındaki eşleşme 🎯📄",
        "commonMistake": "Cümlede 'tomorrow' görünce şıklarda sadece 'will' arayıp Present Continuous'u şimdiki zaman sanarak elemek.",
        "correctWrongContrast": {
          "wrong": "The delegation met tomorrow to discuss trade barriers.",
          "correct": "The delegation is meeting tomorrow to discuss trade barriers.",
          "note": "'Tomorrow' geçmiş zamanla kullanılamaz; düzenlenmiş randevu için 'is meeting' kullanılır.",
          "explanation": "'Tomorrow' geçmiş zamanla kullanılamaz; düzenlenmiş randevu için 'is meeting' kullanılır."
        },
        "differenceFromSimilarTense": "ÖSYM bazen 'will' vermez; yerine 'is meeting' koyarak öğrencinin Present Continuous'un gelecek zaman anlamını bilip bilmediğini ölçer!",
        "levelTactic": "Soru kökünde 'tomorrow, next week, on Friday' var ama seçeneklerde will/going to yoksa, hiç tereddüt etmeden 'am/is/are + V-ing' işaretle.",
        "miniTest": {
          "question": "The scientific advisory panel ---- tomorrow at headquarters to review the pending clinical trial protocols.",
          "options": [
            "is meeting",
            "met",
            "had met",
            "has met",
            "meets to"
          ],
          "answer": 0,
          "explanation": "'Tomorrow' gelecek zaman zarfıdır; seçenekler arasında geleceğe yönelik düzenlenmiş randevuyu veren tek geçerli form 'is meeting'dir."
        },
        "explainedAnswer": "Doğru yanıt A (is meeting). Kesinleşmiş toplantı randevularında gelecek zaman anlamı Present Continuous ile sağlanır.",
        "signalWords": [
          "meeting tomorrow",
          "flying next week",
          "convening on Friday"
        ]
      }
    }
  },
  {
    "slug": "simple-present-future",
    "name": "Simple Present for Scheduled Future",
    "turkish": "Resmi Tarife & Çizelgeler",
    "emoji": "🚆",
    "summary": "Tren, uçak, otobüs hareket saatleri, sinema/tiyatro seansları, resmi ders programları ve takvim tarihlerinin Simple Present ile aktarımı.",
    "levels": {
      "A1": {
        "title": "Ulaşım Araçlarının Hareket Saatleri",
        "basicMeaning": "Otobüs, tren ve uçakların önceden basılmış resmi hareket ve varış saatleri.",
        "usages": [
          "Tren hareket saatleri (The train leaves at 8 am tomorrow)",
          "Uçak kalkış saatleri (The flight arrives at 6 pm)"
        ],
        "nonUsages": [
          "Kişisel keyfi kararlar (yarın saat 8'de uyanacağım demek için kullanılmaz)"
        ],
        "positiveFormula": "Vehicle/Timetable Subject + V1/V-s + at [Time] + tomorrow/next [Day]",
        "negativeFormula": "The last bus does not depart until midnight.",
        "questionFormula": "What time does the morning flight to London take off?",
        "shortAnswers": "At seven sharp.",
        "subjectVerbAgreement": "Tekil ulaşım araçları tekil fiil (-s) alır (The bus leaves, trains leave).",
        "verbForm": "V1 / V-s",
        "auxiliaryVerb": "does / do",
        "timeMarkers": [
          "at 08:30 tomorrow",
          "on Monday morning",
          "according to the timetable"
        ],
        "signals": [
          "departs at",
          "arrives at",
          "leaves at",
          "takes off at"
        ],
        "timeline": "Resmi Çizelge Tablosu: Her gün aynı saatte kalkan tren yarın da kalkacak 🚆⏰",
        "examples": [
          "The morning express to Ankara departs at 07:15 tomorrow.",
          "The movie starts at 8:00 pm tonight, so don't be late."
        ],
        "exampleTr": [
          "Ankara sabah ekspresi yarın sabah 07:15'te hareket ediyor (tarife)."
        ],
        "code": "Tren / Uçak / Otobüs + Saat = Simple Present (V1/V-s)!",
        "visualMemory": "Garda asılı olan elektronik tren kalkış panosu (DEPARTURES 07:15) 🚉📋",
        "commonMistake": "Trenin resmi saatini anlatırken 'The train will leave at 7' demek (Kural: Resmi tarife Simple Present gerektirir).",
        "correctWrongContrast": {
          "wrong": "The flight will take off tomorrow at 06:00.",
          "correct": "The flight takes off tomorrow at 06:00.",
          "note": "Resmi uçuş tarifeleri Simple Present ile ifade edilir.",
          "explanation": "Resmi uçuş tarifeleri Simple Present ile ifade edilir."
        },
        "differenceFromSimilarTense": "The train leaves at 8 (trenin tarifesi: Simple Present); I am taking the train at 8 (benim bindiğim kişisel plan: Present Continuous).",
        "levelTactic": "Cümle öznesi 'The train, the flight, the bus, the ferry' ve yanında kalkış saati varsa Simple Present (leaves, departs) seç.",
        "miniTest": {
          "question": "According to the official schedule, the intercity coach ---- from platform four at 09:30 tomorrow.",
          "options": [
            "departs",
            "will have departed",
            "departed",
            "was departing",
            "is departed"
          ],
          "answer": 0,
          "explanation": "'Official schedule' ve hareket saati doğrudan Simple Present (departs) gerektirir."
        },
        "explainedAnswer": "Doğru yanıt A (departs). Resmi ulaşım tarifelerinde gelecek anlamı Simple Present ile verilir.",
        "signalWords": [
          "departs at",
          "arrives at",
          "leaves at",
          "takes off at"
        ]
      },
      "A2": {
        "title": "Akademik Takvim, Ders Programı ve Mesai Saatleri",
        "basicMeaning": "Okul dönemlerinin açılışı, sınav takvimleri ve mağazaların resmi açılış/kapanış saatleri.",
        "usages": [
          "Okul ve sömestr açılışları (The autumn semester begins in September)",
          "Mağaza ve müze mesaileri (The museum opens at 9 tomorrow)"
        ],
        "nonUsages": [
          "Öğrencinin kişisel ders çalışma niyeti"
        ],
        "positiveFormula": "Institution / Event Subject + starts / opens / finishes + at [Time] / on [Date]",
        "negativeFormula": "The registration window does not close until Friday afternoon.",
        "questionFormula": "When does the spring term commence?",
        "shortAnswers": "On the first Monday of February.",
        "subjectVerbAgreement": "Tekil kurum öznelerinde fiil -s takısı alır.",
        "verbForm": "V1 / V-s",
        "auxiliaryVerb": "does / do",
        "timeMarkers": [
          "on September 15",
          "at 09:00 tomorrow",
          "during the next semester"
        ],
        "signals": [
          "the semester begins",
          "the exhibition opens",
          "closes at"
        ],
        "timeline": "Yıllık resmi takvim takvimi: [Sömestr Başlangıç Günü] 📅🎓",
        "examples": [
          "The university semester commences on Monday, September 22.",
          "The national library opens at 08:30 tomorrow morning."
        ],
        "exampleTr": [
          "Üniversite sömestri 22 Eylül Pazartesi günü başlıyor."
        ],
        "code": "Okul / Müze / Sınav Takvimi = Simple Present (starts, opens, begins)!",
        "visualMemory": "Üniversite akademik takvim kitapçığı ve açılış tarihi 📅🏛️",
        "commonMistake": "Akademik takvimdeki resmi açılış tarihini 'will begin' ile belirsiz gibi yazmak.",
        "correctWrongContrast": {
          "wrong": "The university will begin on September 15th according to the calendar.",
          "correct": "The university begins on September 15th according to the calendar.",
          "note": "Takvime bağlı resmi başlangıçlar Simple Present ile aktarılır.",
          "explanation": "Takvime bağlı resmi başlangıçlar Simple Present ile aktarılır."
        },
        "differenceFromSimilarTense": "The semester begins on Monday (resmi takvim); I am beginning my studies on Monday (kişisel plan).",
        "levelTactic": "'Academic calendar, semester, conference schedule, opens at' gördüğünde Simple Present (V-s) ara.",
        "miniTest": {
          "question": "The university registration portal ---- for course enrolments at midnight next Monday.",
          "options": [
            "opens",
            "opened",
            "had opened",
            "has opened",
            "was opened"
          ],
          "answer": 0,
          "explanation": "Resmi sistem takvimi ve açılış saati: 'opens'."
        },
        "explainedAnswer": "Doğru yanıt A (opens). Resmi sistem ve portal açılış saatleri Simple Present ile verilir.",
        "signalWords": [
          "the semester begins",
          "the exhibition opens",
          "closes at"
        ]
      },
      "B1": {
        "title": "Gelecek Zaman Bağlaçlarında Zorunlu Simple Present",
        "basicMeaning": "Geleceğe gönderme yapan zaman bağlaçlarında (when, as soon as, before, until) Simple Present'ın zorunlu olması.",
        "usages": [
          "When the president arrives tomorrow, we will start the ceremony",
          "As soon as the plane lands, authorities will inspect the cargo"
        ],
        "nonUsages": [
          "Zaman bağlacı yan cümlesinde 'will' veya 'going to' kullanılması KESİNLİKLE YASAKTIR"
        ],
        "positiveFormula": "When / As soon as + Subject + V1/V-s, Main Clause [will + V1]",
        "negativeFormula": "Until the inspector arrives, nobody will be permitted to enter.",
        "questionFormula": "What will the staff do as soon as the doors open tomorrow?",
        "shortAnswers": "They will distribute badges.",
        "subjectVerbAgreement": "Yan cümledeki özneye göre fiil çekimi.",
        "verbForm": "V1 / V-s",
        "auxiliaryVerb": "does / do",
        "timeMarkers": [
          "as soon as",
          "the moment",
          "until",
          "when",
          "after",
          "before"
        ],
        "signals": [
          "time clause rule",
          "when + V1, will V1"
        ],
        "timeline": "Zaman Yan Cümlesi [V1] ===> Ardından Gelecek Ana Cümle [will V1]",
        "examples": [
          "The ceremony will commence the moment the guest of honor arrives tomorrow.",
          "Before the express train departs at noon, passengers must present their digital passes."
        ],
        "exampleTr": [
          "Onur konuğu yarın gelir gelmez tören başlayacaktır."
        ],
        "code": "Zaman Bağlacı Kuralı: The moment / As soon as + V1/V-s (Gelecek anlamı taşır)!",
        "visualMemory": "Havaalanı pasaport kontrol gişesi: Yolcu varır varmaz (V1) mühür vurulacak (will V1) 🛂",
        "commonMistake": "Gelecek gün (tomorrow) var diye bağlacın hemen arkasına will koymak (*When he will arrive tomorrow*).",
        "correctWrongContrast": {
          "wrong": "When the train will arrive tomorrow, we will greet them.",
          "correct": "When the train arrives tomorrow, we will greet them.",
          "note": "Zaman bağlacı 'when' yan cümlesinde 'tomorrow' olsa dahi Simple Present (arrives) kullanılır.",
          "explanation": "Zaman bağlacı 'when' yan cümlesinde 'tomorrow' olsa dahi Simple Present (arrives) kullanılır."
        },
        "differenceFromSimilarTense": "Ana cümlede will serbesttir; ancak zaman bağlacının bağlı olduğu yan cümlede will yasaktır, Simple Present şarttır.",
        "levelTactic": "Boşluk 'when, as soon as, the moment, until' yan cümlesindeyse ve gelecek anlatılıyorsa seçeneklerde V1/V-s ara, will'leri ele.",
        "miniTest": {
          "question": "The security detail will seal all perimeter gates the moment the foreign dignitary ---- at the compound tomorrow.",
          "options": [
            "arrives",
            "will arrive",
            "would arrive",
            "had arrived",
            "arrived"
          ],
          "answer": 0,
          "explanation": "'The moment' zaman bağlacı kuralı gereğince yan cümlede gelecek anlamı Simple Present (arrives) ile verilir; will arrive yanlıştır."
        },
        "explainedAnswer": "Doğru yanıt A (arrives). Zaman bağlaçlarının yan cümlesinde gelecek zaman Simple Present ile aktarılır.",
        "signalWords": [
          "time clause rule",
          "when + V1, will V1"
        ]
      },
      "B2": {
        "title": "Resmi Yasa Yürürlük Tarihleri ve Uluslararası Zirve Programları",
        "basicMeaning": "Parlamento yasalarının resmi yürürlüğe giriş günleri ve uluslararası zirvelerin resmi oturum takvimleri.",
        "usages": [
          "Yeni kanunların yürürlük tarihi (The new tax law takes effect on January 1st)",
          "Resmi kongre açılış günleri"
        ],
        "nonUsages": [
          "Hükümetin gelecekte yasa çıkarmayı düşündüğü belirsiz niyetler"
        ],
        "positiveFormula": "Legislation / Treaty Subject + takes effect / enters into force + on [Future Date]",
        "negativeFormula": "The moratorium does not expire until the end of the fiscal year.",
        "questionFormula": "On what date does the European environmental directive come into force?",
        "shortAnswers": "On the first of next month.",
        "subjectVerbAgreement": "Resmi yasa ve antlaşma öznelerinde tekillik kuralı.",
        "verbForm": "V1 / V-s",
        "auxiliaryVerb": "does",
        "timeMarkers": [
          "takes effect on [Date]",
          "comes into force next January",
          "expires at midnight"
        ],
        "signals": [
          "takes effect",
          "comes into force",
          "expires"
        ],
        "timeline": "Resmi Gazete'de yayımlanmış kesin yürürlük tarihi 📜📅",
        "examples": [
          "The comprehensive trade agreement enters into force on the first day of the next fiscal quarter.",
          "The statutory patent protection expires on December 31st of this year."
        ],
        "exampleTr": [
          "Kapsamlı ticaret antlaşması, bir sonraki mali çeyreğin ilk gününde yürürlüğe giriyor."
        ],
        "code": "Yasa Yürürlük Tarihi = enters into force / takes effect on [Date]!",
        "visualMemory": "Resmi Gazete'nin ilk sayfası ve yürürlük tarihi mühürü 🏛️📰",
        "commonMistake": "Yürürlük tarihi Resmî Gazete'de ilan edilmiş kanun için 'will take effect' gibi belirsiz gelecek kullanmak.",
        "correctWrongContrast": {
          "wrong": "The regulation will take effect on July 1st according to the decree.",
          "correct": "The regulation takes effect on July 1st according to the decree.",
          "note": "Kararnamede ilan edilmiş kesin tarihlerde Simple Present kullanılır.",
          "explanation": "Kararnamede ilan edilmiş kesin tarihlerde Simple Present kullanılır."
        },
        "differenceFromSimilarTense": "The parliament will debate the bill (tartışacak - belirsiz); The bill takes effect on Monday (yürürlük tarihi kesinleşmiş kanun).",
        "levelTactic": "Hukuk ve diplomasi metinlerinde 'takes effect, enters into force, expires on' kalıplarında Simple Present seç.",
        "miniTest": {
          "question": "According to the gazetted decree, the new consumer protection statute ---- on the first day of next month.",
          "options": [
            "comes into force",
            "came into force",
            "had come into force",
            "was coming into force",
            "is come into force"
          ],
          "answer": 0,
          "explanation": "'According to the decree' ve resmi yürürlük tarihi: 'comes into force'."
        },
        "explainedAnswer": "Doğru yanıt A (comes into force). Yürürlük ve kanun takvimleri Simple Present ile aktarılır.",
        "signalWords": [
          "takes effect",
          "comes into force",
          "expires"
        ]
      },
      "C1": {
        "title": "Büyük Bilimsel Görev Takvimleri (NASA/ESA Fırlatma Çizelgeleri)",
        "basicMeaning": "Uzay ajanslarının, kutup keşif gemilerinin ve CERN parçacık çarpıştırıcılarının resmi fırlatma ve işletim takvimleri.",
        "usages": [
          "Uzay mekiği ve roket fırlatma pencereleri (The launch window opens at 04:22 UTC)",
          "Bilimsel tesislerin bakım ve deney döngüleri"
        ],
        "nonUsages": [
          "Henüz finansmanı onaylanmamış teorik uzay projeleri"
        ],
        "positiveFormula": "Mission / Launch Subject + launches / lifts off / enters orbit + at [Time] on [Date]",
        "negativeFormula": "The orbital insertion phase does not commence until orbital telemetry is locked.",
        "questionFormula": "What time does the lunar module initiate its descent sequence?",
        "shortAnswers": "At 14:10 ground control time.",
        "subjectVerbAgreement": "Tekil görev isimleriyle V-s uyumu.",
        "verbForm": "V1 / V-s",
        "auxiliaryVerb": "does",
        "timeMarkers": [
          "at 06:00 UTC tomorrow",
          "during the planetary alignment window",
          "on scheduled countdown"
        ],
        "signals": [
          "launch window opens",
          "lifts off at",
          "initiates descent"
        ],
        "timeline": "Geri sayım kronometresi: T-minus 10 hours... Fırlatma saati kesin 🚀⏳",
        "examples": [
          "The European space probe lifts off from the Kourou spaceport at 05:45 UTC tomorrow morning.",
          "The particle accelerator resumes high-energy collision runs next Tuesday after scheduled maintenance."
        ],
        "exampleTr": [
          "Avrupa uzay sondası, yarın sabah Kourou uzay üssünden saat 05:45 UTC'de fırlatılıyor (resmi görev takvimi)."
        ],
        "code": "Uzay Görevi Takvimi = lifts off / launches at [Time] tomorrow!",
        "visualMemory": "Fırlatma rampasında buhar tüten roket ve geri sayım yapan dijital saat 🚀⏱️",
        "commonMistake": "Geri sayımı başlamış ve saati kesinleşmiş uzay fırlatmasını basit kişisel tahmin gibi sunmak.",
        "correctWrongContrast": {
          "wrong": "The rocket will lift off at 05:45 according to the countdown timer.",
          "correct": "The rocket lifts off at 05:45 according to the countdown timer.",
          "note": "Geri sayım sayacı ve resmi görev çizelgesi Simple Present gerektirir.",
          "explanation": "Geri sayım sayacı ve resmi görev çizelgesi Simple Present gerektirir."
        },
        "differenceFromSimilarTense": "Simple Future belirsiz bir gelecektir; Simple Present for Future ise saniyesine kadar hesaplanmış bilimsel takvimdir.",
        "levelTactic": "Uzay, astronomi veya mühendislik metinlerinde 'countdown, launch window, lifts off at' gibi ifadelerle Simple Present ara.",
        "miniTest": {
          "question": "The interplanetary orbiter ---- its orbital insertion burn at precisely 03:14 UTC tomorrow morning.",
          "options": [
            "initiates",
            "initiated",
            "had initiated",
            "has initiated",
            "is initiated"
          ],
          "answer": 0,
          "explanation": "Hassas uzay manevrası ve kesin zamanlı fırlatma çizelgesi: 'initiates'."
        },
        "explainedAnswer": "Doğru yanıt A (initiates). Bilimsel fırlatma ve manevra takvimleri Simple Present ile verilir.",
        "signalWords": [
          "launch window opens",
          "lifts off at",
          "initiates descent"
        ]
      },
      "C2": {
        "title": "Astrofiziksel Döngüler ve Kozmik Takvim Determinizmi",
        "basicMeaning": "Gezegenlerin, kuyruklu yıldızların ve güneş tutulmalarının yüzyıllar önceden hesaplanmış kozmik randevuları.",
        "usages": [
          "Güneş tutulması kesin saatleri (The total solar eclipse begins at 13:41)",
          "Kuyruklu yıldızların yörünge geçiş takvimi"
        ],
        "nonUsages": [
          "Öngörülemeyen kaotik meteor çarpmaları"
        ],
        "positiveFormula": "Celestial Body + reaches perihelion / aligns / enters occultation + on [Calculated Date]",
        "negativeFormula": "The planet does not attain its maximum elongation until late autumn.",
        "questionFormula": "When does Halley's comet next reach its perihelion?",
        "shortAnswers": "In mid-2061.",
        "subjectVerbAgreement": "Gök cismi tekilse fiil -s alır.",
        "verbForm": "V1 / V-s",
        "auxiliaryVerb": "does",
        "timeMarkers": [
          "at perihelion on [Date]",
          "precisely at 11:23 GMT",
          "in the astronomical almanac"
        ],
        "signals": [
          "reaches perihelion",
          "aligns with",
          "the eclipse begins at"
        ],
        "timeline": "Evrenin saat mekanizması: Milyarlarca yıl önceden belirlenmiş göksel randevu 🌌🪐",
        "examples": [
          "The comet reaches its perihelion on July 28, 2061, according to orbital mechanics calculations.",
          "The lunar occultation of Jupiter begins precisely at 22:04 GMT next Thursday."
        ],
        "exampleTr": [
          "Yörünge mekaniği hesaplamalarına göre kuyruklu yıldız, 28 Temmuz 2061'de günberi noktasına ulaşıyor."
        ],
        "code": "Kozmik Determinizm (Tutulma, Günberi) = Simple Present (begins, reaches)!",
        "visualMemory": "Güneş sisteminin kusursuz dönen gezegen çarkları ve saat gibi işleyen yörüngeler 🪐⚙️",
        "commonMistake": "Matematiksel olarak kesin astronomik olguyu 'will reach' ile belirsiz bir hava tahmini gibi sunmak.",
        "correctWrongContrast": {
          "wrong": "The solar eclipse will start at 14:02 tomorrow.",
          "correct": "The solar eclipse starts at 14:02 tomorrow.",
          "note": "Kozmik takvimdeki matematiksel kesinlik Simple Present ile ifade edilir.",
          "explanation": "Kozmik takvimdeki matematiksel kesinlik Simple Present ile ifade edilir."
        },
        "differenceFromSimilarTense": "İnsan yapımı tarifeler gibi doğanın matematiksel kozmik takvimi de en yüksek determinizm olarak Simple Present alır.",
        "levelTactic": "Astronomi metinlerinde tutulma, günberi, yörünge kesişimi gibi matematiksel kesinliği olan olaylarda Simple Present ara.",
        "miniTest": {
          "question": "Astronomical calculations confirm that the asteroid ---- its closest orbital approach to Earth at 18:20 GMT tomorrow.",
          "options": [
            "makes",
            "made",
            "had made",
            "has made",
            "was making"
          ],
          "answer": 0,
          "explanation": "Kozmik yörünge hesaplaması ve kesin varış saati: 'makes'."
        },
        "explainedAnswer": "Doğru yanıt A (makes). Astronomik takvime dayalı kesin hesaplamalar Simple Present ile sunulur.",
        "signalWords": [
          "reaches perihelion",
          "aligns with",
          "the eclipse begins at"
        ]
      },
      "YDS": {
        "title": "ÖSYM'nin 'Zaman Bağlacı İçi Gelecek' Tuzağı ve Çizelge Soruları",
        "basicMeaning": "YDS/YDT'de en sık elenen tuzak: Cümlede gelecek anlamı olsa bile zaman bağlacı (when, after, until) yan cümlesinde 'will' değil Simple Present aranır.",
        "usages": [
          "When / after / until yan cümlesinde V1/V-s, ana cümlede will V1",
          "Resmi ulaşım tarifesi içeren soru köklerinde Simple Present",
          "Seçenek eleme: Soru kökünde 'as soon as' yan cümlesine 'will' koyan şıkları doğrudan ele"
        ],
        "nonUsages": [
          "Zaman bağlacı olan yan cümlede 'will / would' seçmek KESİNLİKLE YANLIŞTIR"
        ],
        "positiveFormula": "As soon as the cargo vessel docks at the terminal tomorrow, customs officials will initiate inspection.",
        "negativeFormula": "Time Clause [when/until + will YASAKTIR] + Main Clause [will]",
        "questionFormula": "What protocol will airport security execute when the international flight arrives tomorrow?",
        "shortAnswers": "They will implement heightened screening.",
        "subjectVerbAgreement": "ÖSYM soru köklerindeki özneye göre V1/V-s seçimi.",
        "verbForm": "V1 / V-s",
        "auxiliaryVerb": "does / do",
        "timeMarkers": [
          "as soon as",
          "when",
          "until",
          "the moment",
          "before",
          "after"
        ],
        "signals": [
          "as soon as ... arrives tomorrow, will",
          "timetable question"
        ],
        "timeline": "Sınav Sorusu: [Zaman Bağlacı + V1 (Geniş Zaman)] ===> [Ana Cümle: will + V1]",
        "examples": [
          "As soon as the container vessel arrives at the port tomorrow morning, port authorities will begin offloading operations.",
          "According to the flight schedule, the daily transatlantic flight departs at 08:45 every weekday."
        ],
        "exampleTr": [
          "Konteyner gemisi yarın sabah limana varır varmaz (as soon as ... arrives), liman yetkilileri tahliye operasyonuna başlayacaktır."
        ],
        "code": "YDS Kuralı: 'AS SOON AS / WHEN' + TOMORROW olsa bile YAN CÜMLEDE WILL OLMAZ, V1 OLUR!",
        "visualMemory": "ÖSYM kitapçığında 'As soon as ... arrives tomorrow' cümlesindeki 'arrives' kelimesinin altının yeşille çizilmesi ✏️📄",
        "commonMistake": "'tomorrow' kelimesini görünce 'as soon as it will arrive' şıkkına atlamak (ÖSYM'nin en büyük tuzağıdır!).",
        "correctWrongContrast": {
          "wrong": "Until the chief inspector will arrive tomorrow, the investigation is paused.",
          "correct": "Until the chief inspector arrives tomorrow, the investigation is paused.",
          "note": "'Until' yan cümlesinde 'tomorrow' olsa dahi 'arrives' (Simple Present) kullanılır.",
          "explanation": "'Until' yan cümlesinde 'tomorrow' olsa dahi 'arrives' (Simple Present) kullanılır."
        },
        "differenceFromSimilarTense": "Ana cümlede 'will begin' serbesttir; ancak 'as soon as'in arkasındaki yan cümlede 'will' yasaktır, Simple Present şarttır.",
        "levelTactic": "Soru kökünde zaman bağlacı (when, after, until, as soon as, before) ve yanında 'tomorrow / next week' varsa o boşluğa V1/V-s koy, tüm will/would şıklarını ele!",
        "miniTest": {
          "question": "The emergency response protocol dictates that as soon as the seismic alert system ---- an anomaly, the automated subway network ---- to an immediate halt.",
          "options": [
            "detects / will grind",
            "will detect / grinds",
            "detected / will grind",
            "has detected / ground",
            "detects / had ground"
          ],
          "answer": 0,
          "explanation": "'As soon as' yan cümlesinde gelecek kuralı Simple Present (detects), ana cümlede ise sonuç gelecek zaman (will grind) olmalıdır."
        },
        "explainedAnswer": "Doğru yanıt A (detects / will grind). 'As soon as' kuralına göre yan cümle Simple Present, ana cümle Simple Future olur.",
        "signalWords": [
          "as soon as ... arrives tomorrow, will",
          "timetable question"
        ]
      }
    }
  },
  {
    "slug": "future-continuous",
    "name": "Future Continuous Tense",
    "turkish": "Gelecekte Süregelen Zaman",
    "emoji": "🛰️",
    "summary": "Gelecekte belirli bir anda devam etmekte olacak eylemler, olayların doğal akışı, kibarca plan sorma ve 'at + saat' kalıpları.",
    "levels": {
      "A1": {
        "title": "Gelecekte Belirli Bir Saatte Devam Edecek Eylemler",
        "basicMeaning": "Yarın belirli bir saatte (örn. saat 3'te) tam o anda yapılmakta olacak eylemler.",
        "usages": [
          "Yarın belirli bir saatte devam edecek eylemler (At 3 pm tomorrow, I will be playing tennis)",
          "Gelecekteki o anlık durum"
        ],
        "nonUsages": [
          "Genel değişmez kurallar"
        ],
        "positiveFormula": "Subject + will be + V-ing",
        "negativeFormula": "Subject + will not be (won't be) + V-ing",
        "questionFormula": "Will + Subject + be + V-ing at [Time]?",
        "shortAnswers": "Yes, I will be. / No, I won't be.",
        "subjectVerbAgreement": "Tüm şahıslarda 'will be' sabittir.",
        "verbForm": "will be + V-ing",
        "auxiliaryVerb": "will be",
        "timeMarkers": [
          "at 3 pm tomorrow",
          "this time next week",
          "at this time tomorrow"
        ],
        "signals": [
          "this time tomorrow",
          "at 10 o'clock next Sunday"
        ],
        "timeline": "Gelecekteki belirli bir saatin etrafında sürecek dalga: [••• (Yarın Saat 3) •••]",
        "examples": [
          "This time tomorrow, I will be flying over the Atlantic Ocean.",
          "At 8 pm tonight, we will be having dinner with our relatives."
        ],
        "exampleTr": [
          "Yarın bu saatlerde Atlas Okyanusu üzerinde uçuyor olacağım."
        ],
        "code": "Yarın Bu Saatte = will be + V-ing!",
        "visualMemory": "Yarın saat 15:00'te bulutların üzerinde süzülen yolcu uçağı ✈️☁️",
        "commonMistake": "'at 3 pm tomorrow' tek başına her zaman future continuous zorunlu kılmaz; ancak eylemin o anda sürmekte olduğu vurgulanıyorsa 'will be V-ing' şarttır.",
        "correctWrongContrast": {
          "wrong": "This time tomorrow I will fly.",
          "correct": "This time tomorrow I will be flying.",
          "note": "'This time tomorrow' o andaki süreci vurgular, Future Continuous gerektirir.",
          "explanation": "'This time tomorrow' o andaki süreci vurgular, Future Continuous gerektirir."
        },
        "differenceFromSimilarTense": "I will leave at 8 (saat 8'de çıkacağım - başlangıç anı); At 8 I will be driving (saat 8'de yolda sürüyor olacağım - süreç).",
        "levelTactic": "'This time tomorrow, this time next week' gördüğünde doğrudan 'will be + V-ing' seç.",
        "miniTest": {
          "question": "Don't phone me between 2 and 4 pm tomorrow because I ---- a vital client presentation.",
          "options": [
            "will be conducting",
            "conducted",
            "had conducted",
            "have conducted",
            "conducts"
          ],
          "answer": 0,
          "explanation": "Yarın 14:00-16:00 arasındaki zaman diliminde sürmekte olacak eylem: 'will be conducting'."
        },
        "explainedAnswer": "Doğru yanıt A (will be conducting). Gelecekteki bir zaman aralığında devam edecek eylemler Future Continuous ile aktarılır.",
        "signalWords": [
          "this time tomorrow",
          "at 10 o'clock next Sunday"
        ]
      },
      "A2": {
        "title": "Olayların Doğal Akışı (As a Matter of Course)",
        "basicMeaning": "Özel bir çaba sarf etmeden, rutin veya programın doğal akışı içinde kendiliğinden gerçekleşecek gelecek eylemler.",
        "usages": [
          "Olayların doğal akışında kendiliğinden olacak işler (I will be seeing John at work anyway)",
          "Zaten planlanmış rutin akış"
        ],
        "nonUsages": [
          "Zoraki veya fevri kararlar"
        ],
        "positiveFormula": "Subject + will be + V-ing (Doğal akış vurgusu)",
        "negativeFormula": "I won't be passing by the pharmacy today.",
        "questionFormula": "Will you be seeing the department head later today?",
        "shortAnswers": "Yes, we have our routine morning brief.",
        "subjectVerbAgreement": "Özne fark etmeksizin will be.",
        "verbForm": "will be + V-ing",
        "auxiliaryVerb": "will be",
        "timeMarkers": [
          "anyway",
          "as usual",
          "in the normal course of events",
          "later today"
        ],
        "signals": [
          "will be seeing him anyway",
          "as a matter of course"
        ],
        "timeline": "Hayatın ve mesainin doğal akışı içinde kendiliğinden denk gelinecek an.",
        "examples": [
          "I will be seeing the director at the staff meeting anyway, so I can pass your message to him.",
          "Will you be going to the supermarket as usual this afternoon?"
        ],
        "exampleTr": [
          "Nasılsa personel toplantısında direktörü göreceğim, bu yüzden mesajını ona iletebilirim (doğal akış)."
        ],
        "code": "Zaten Görüşeceğim / Doğal Akış = will be seeing anyway!",
        "visualMemory": "Ofis koridorunda her sabah karşılaşılan iş arkadaşıyla rutin selamlaşma 🏢👋",
        "commonMistake": "Doğal akışı özel bir niyet veya randevu gibi sanıp yanlış zaman kullanmak.",
        "correctWrongContrast": {
          "wrong": "I will specially visit him to say hello.",
          "correct": "I will be seeing him anyway at lunch.",
          "note": "Özel çaba değil, olağan akış içinde gerçekleşecek buluşmada Future Continuous doğaldır.",
          "explanation": "Özel çaba değil, olağan akış içinde gerçekleşecek buluşmada Future Continuous doğaldır."
        },
        "differenceFromSimilarTense": "I am seeing him (özel randevu aldım); I will be seeing him anyway (nasılsa aynı ofisteyiz, göreceğim).",
        "levelTactic": "Cümlede 'anyway, as usual, in the routine meeting' gibi olağan akış belirten ifadeler varsa Future Continuous seç.",
        "miniTest": {
          "question": "If you need a ride to the campus, let me know; I ---- right past the faculty building anyway.",
          "options": [
            "will be driving",
            "drove",
            "had driven",
            "have driven",
            "was driving"
          ],
          "answer": 0,
          "explanation": "'Anyway' (nasılsa yolumun üzeri) olağan akış içinde Future Continuous (will be driving) gerektirir."
        },
        "explainedAnswer": "Doğru yanıt A (will be driving). Olayların olağan akışında kendiliğinden gerçekleşecek gelecek eylemler Future Continuous ile verilir.",
        "signalWords": [
          "will be seeing him anyway",
          "as a matter of course"
        ]
      },
      "B1": {
        "title": "Kibarca Plan Sorma (Polite Enquiry About Plans)",
        "basicMeaning": "Birisinin niyetini sorgulamadan veya emrivaki yapmadan, gelecekteki planını son derece zarif ve kibar bir şekilde öğrenme.",
        "usages": [
          "Kibarca plan sorma (Will you be using your car tonight? - çünkü ödünç isteyebilirim)",
          "Emrivakiden kaçınan diplomatik nezaket"
        ],
        "nonUsages": [
          "Doğrudan emir veya hesap sorma cümleleri"
        ],
        "positiveFormula": "Will you be + V-ing tonight / tomorrow?",
        "negativeFormula": "I won't be using the computer if you need it.",
        "questionFormula": "Will you be working late this evening?",
        "shortAnswers": "No, I'm leaving at five. Why do you ask?",
        "subjectVerbAgreement": "Soru kalıbında 'Will you be' değişmez.",
        "verbForm": "will you be + V-ing",
        "auxiliaryVerb": "will be",
        "timeMarkers": [
          "tonight",
          "this weekend",
          "later on"
        ],
        "signals": [
          "Will you be using",
          "polite enquiry",
          "without putting pressure"
        ],
        "timeline": "Karşı tarafın bağımsız planını nezaketle öğrenme anı.",
        "examples": [
          "Will you be staying at the office late tonight, or can I lock up the main building?",
          "Will you be needing the conference room tomorrow morning?"
        ],
        "exampleTr": [
          "Bu akşam ofiste geç saatlere kadar kalacak mısınız, yoksa ana binayı kilitleyebilir miyim? (Kibar plan sorma)"
        ],
        "code": "Nezaketle Plan Sorma = Will you be using / working tonight?",
        "visualMemory": "Çalışma arkadaşının kapısını tıklatıp kibarca 'Meşgul müsünüz?' diye soran görevli 🚪🤝",
        "commonMistake": "'Are you going to use your car?' (baskıcı/direkt) ile 'Will you be using your car?' (kibar/tarafsız) ayrımını kaçırmak.",
        "correctWrongContrast": {
          "wrong": "Are you going to drive? (Baskıcı)",
          "correct": "Will you be driving to the conference? (Kibar ve tarafsız)",
          "note": "Future Continuous karşı tarafa baskı yapmadan planını kibarca sorar.",
          "explanation": "Future Continuous karşı tarafa baskı yapmadan planını kibarca sorar."
        },
        "differenceFromSimilarTense": "Will you use? (Emir/rica gibi algılanabilir); Will you be using? (Sadece planını tarafsızca öğrenmek istiyorum).",
        "levelTactic": "Nezaket ve plan sorma içeren diyalog sorularında 'Will you be V-ing?' kalıbını ara.",
        "miniTest": {
          "question": "---- you ---- your vehicle this evening, or could I borrow it to pick up my family from the terminal?",
          "options": [
            "Will / be using",
            "Did / use",
            "Were / using",
            "Had / used",
            "Are / used"
          ],
          "answer": 0,
          "explanation": "Ödünç istemeden önce karşı tarafın planını kibarca soran kalıp: 'Will you be using'."
        },
        "explainedAnswer": "Doğru yanıt A (Will / be using). Karşı tarafın planlarını baskı kurmadan kibarca öğrenmede Future Continuous soru kalıbı kullanılır.",
        "signalWords": [
          "Will you be using",
          "polite enquiry",
          "without putting pressure"
        ]
      },
      "B2": {
        "title": "Gelecekte Bir Süre Boyunca Devam Edecek Faaliyetler",
        "basicMeaning": "Gelecekte belirli bir dönem boyunca kesintisiz sürecek faaliyetler ve kongre/çalıştay dönemleri.",
        "usages": [
          "Tüm yaz boyunca sürecek saha çalışmaları (Throughout the summer, we will be monitoring wildlife)",
          "Gelecekteki eşzamanlı süreçler"
        ],
        "nonUsages": [
          "Tek bir saniyede olup bitecek anlık eylemler"
        ],
        "positiveFormula": "Throughout the expedition, researchers will be cataloguing specimens.",
        "negativeFormula": "The monitoring station will not be transmitting data during the maintenance blackout.",
        "questionFormula": "What parameters will the sensors be recording during the orbital pass?",
        "shortAnswers": "Thermal radiation and atmospheric pressure.",
        "subjectVerbAgreement": "Gelecek yardımcı fiili will be tüm öznelerle aynıdır.",
        "verbForm": "will be + V-ing",
        "auxiliaryVerb": "will be",
        "timeMarkers": [
          "throughout the coming decade",
          "during the symposium",
          "all summer long"
        ],
        "signals": [
          "will be monitoring",
          "throughout the next month"
        ],
        "timeline": "Gelecekteki geniş bir zaman dilimini kaplayan süreç bandı [====== will be V-ing ======]",
        "examples": [
          "Throughout the upcoming fiscal year, the audit team will be scrutinizing procurement procedures.",
          "During the international summit, delegates will be negotiating multilateral emission targets."
        ],
        "exampleTr": [
          "Önümüzdeki mali yıl boyunca denetim ekibi satın alma prosedürlerini incelemekte olacaktır."
        ],
        "code": "Gelecekteki Süreç (Throughout the year) = will be scrutinizing / monitoring!",
        "visualMemory": "Yıl boyu sürecek bilimsel saha araştırma çadırı ve ölçüm yapan cihazlar 🏕️🔬",
        "commonMistake": "'Throughout the year' gibi süreç ifadesi varken tekil gelecek eylem gibi 'will scrutinize' demek (süreç vurgusu continuous ister).",
        "correctWrongContrast": {
          "wrong": "During the conference, she will speak all day.",
          "correct": "During the conference, she will be speaking all day.",
          "note": "Gelecekteki tüm güne yayılan süreç 'will be speaking' ile vurgulanır.",
          "explanation": "Gelecekteki tüm güne yayılan süreç 'will be speaking' ile vurgulanır."
        },
        "differenceFromSimilarTense": "Will scrutinize (inceleyecek); Will be scrutinizing throughout the year (bütün yıl boyunca inceleme sürecinde olacak).",
        "levelTactic": "'Throughout next year, during the coming months' gibi geleceğe yayılan süreç zarflarında 'will be V-ing' ara.",
        "miniTest": {
          "question": "Throughout the multi-week trial, forensic statisticians ---- the veracity of the financial ledgers.",
          "options": [
            "will be verifying",
            "verified",
            "had verified",
            "have verified",
            "were verified"
          ],
          "answer": 0,
          "explanation": "'Throughout the multi-week trial' gelecekteki süreç bandını Future Continuous (will be verifying) ile gerektirir."
        },
        "explainedAnswer": "Doğru yanıt A (will be verifying). Gelecekte haftalarca sürecek faaliyetler Future Continuous ile aktarılır.",
        "signalWords": [
          "will be monitoring",
          "throughout the next month"
        ]
      },
      "C1": {
        "title": "Sosyo-Teknolojik Dönüşüm Projeksiyonları",
        "basicMeaning": "Gelecek on yıllarda insanlığın veya teknolojinin 'yaşamakta olacağı' yeni yaşam biçimleri.",
        "usages": [
          "Gelecek nesillerin hayat tarzı projeksiyonları (In 2050, humanity will be utilizing quantum grids)",
          "Gelecekteki otomatik sistemlerin çalışma hali"
        ],
        "nonUsages": [
          "Geçmiş teknoloji tarihçesi"
        ],
        "positiveFormula": "By mid-century, autonomous urban fleets will be transporting passengers seamlessly.",
        "negativeFormula": "Conventional combustion engines will not be operating in metropolitan zones.",
        "questionFormula": "How will future societies be balancing digital privacy with state surveillance?",
        "shortAnswers": "Through decentralized cryptographic architectures.",
        "subjectVerbAgreement": "Teknolojik ve fütüristik özneler.",
        "verbForm": "will be + V-ing",
        "auxiliaryVerb": "will be",
        "timeMarkers": [
          "by the middle of this century",
          "in fifty years' time",
          "in the forthcoming robotic era"
        ],
        "signals": [
          "will be living in a world where",
          "will be utilizing"
        ],
        "timeline": "Geleceğin dünyasındaki günlük hayatın olağan işleyişi 🏙️🤖",
        "examples": [
          "In thirty years' time, millions of citizens will be living in smart cities powered entirely by thermonuclear fusion.",
          "Autonomous agricultural drones will be harvesting crops continuously without human intervention."
        ],
        "exampleTr": [
          "Otuz yıl sonra milyonlarca vatandaş, tamamen termonükleer füzyonla çalışan akıllı şehirlerde yaşıyor olacaktır."
        ],
        "code": "Geleceğin Yaşam Tarzı = In thirty years' time, we will be living / utilizing!",
        "visualMemory": "Geleceğin gökdelenleri arasında uçan otonom araçlar ve yeşil enerji kuleleri 🏙️🛸",
        "commonMistake": "Fütüristik vizyonları donuk bir geniş zamanla aktarmak.",
        "correctWrongContrast": {
          "wrong": "In 2050, humans will live in flying cars. (Kuru anlatım)",
          "correct": "In 2050, humans will be navigating urban airspace in autonomous pods.",
          "note": "Gelecekteki yaşamın devamlılık halini Future Continuous canlı biçimde tasvir eder.",
          "explanation": "Gelecekteki yaşamın devamlılık halini Future Continuous canlı biçimde tasvir eder."
        },
        "differenceFromSimilarTense": "Future Simple kuru tahmindir; Future Continuous gelecekteki hayatın canlı akışını canlandırır.",
        "levelTactic": "'In twenty years' time, by mid-century' gibi gelecek vizyon tasvirlerinde 'will be V-ing' yapısına odaklan.",
        "miniTest": {
          "question": "By the end of the next decade, commercial aerospace corporations ---- supersonic orbital transport services.",
          "options": [
            "will be offering",
            "offered",
            "had offered",
            "have offered",
            "were offering"
          ],
          "answer": 0,
          "explanation": "Gelecek on yılın sonundaki olağan ticari hizmet süreci: 'will be offering'."
        },
        "explainedAnswer": "Doğru yanıt A (will be offering). Geleceğin teknolojik akışını tasvir eden Future Continuous yapısı doğrudur.",
        "signalWords": [
          "will be living in a world where",
          "will be utilizing"
        ]
      },
      "C2": {
        "title": "Edebi/Felsefi Gelecek Zaman ve Sonsuz Döngüsellik",
        "basicMeaning": "Kozmik veya edebi metinlerde insanlık yok olduktan sonra bile doğanın akmaya devam edeceği varoluşsal anlatımlar.",
        "usages": [
          "İnsan sonrası dünyada doğanın sürekliliği (Rivers will still be flowing)",
          "Edebi metinlerde geleceğin sonsuz döngüsü"
        ],
        "nonUsages": [
          "Gündelik alelade planlar"
        ],
        "positiveFormula": "Long after current civilizations fade, the cosmos will still be expanding unhindered.",
        "negativeFormula": "Mortal legacies will not be enduring against the entropic decay of the universe.",
        "questionFormula": "What cosmic relics will be wandering through interstellar void millennia hence?",
        "shortAnswers": "Dormant probes and dead stellar remnants.",
        "subjectVerbAgreement": "Kozmolojik öznelerle will be uyumu.",
        "verbForm": "will be + V-ing",
        "auxiliaryVerb": "will be",
        "timeMarkers": [
          "millennia hence",
          "long after our era",
          "in the distant epoch"
        ],
        "signals": [
          "will still be flowing",
          "will be echoing through eternity"
        ],
        "timeline": "Sonsuzluğa doğru uzanan kozmik zaman çizgisi 🌌♾️",
        "examples": [
          "Long after human empires crumble into dust, ancient rivers will still be carving canyons across the plateau.",
          "Generations hence, historians will be pondering the profound paradoxes of our technological civilization."
        ],
        "exampleTr": [
          "İnsan imparatorlukları toza dönüştükten çok sonra bile, kadim nehirler platonun üzerinde kanyonlar oymaya devam ediyor olacaktır."
        ],
        "code": "Kozmik Sonsuz Akış = will still be carving / flowing long after our era!",
        "visualMemory": "Yıldızlar arasında sessizce dönen gezegen ve sonsuz uzay boşluğu 🪐✨",
        "commonMistake": "Edebi sonsuzluk vizyonunu basit bitmiş eylem gibi sunmak.",
        "correctWrongContrast": {
          "wrong": "Rivers will carve canyons after humans die.",
          "correct": "Rivers will still be carving canyons long after humanity has vanished.",
          "note": "Doğanın sürekliliği 'will still be carving' ile dramatik bir sonsuzluk kazanır.",
          "explanation": "Doğanın sürekliliği 'will still be carving' ile dramatik bir sonsuzluk kazanır."
        },
        "differenceFromSimilarTense": "Will carve (oyacak); Will still be carving (oymaya devam ediyor olacaktır - sonsuz akış).",
        "levelTactic": "Felsefi ve kozmolojik metinlerde insanlık sonrası doğanın sürekliliğini anlatan 'will still be V-ing' kalıplarını tanı.",
        "miniTest": {
          "question": "Centuries hence, when terrestrial fossil reserves are exhausted, solar radiation ---- uninterruptedly across the globe.",
          "options": [
            "will still be bathing",
            "bathed",
            "had bathed",
            "has bathed",
            "was bathing"
          ],
          "answer": 0,
          "explanation": "Asırlar sonraki kozmik ve fiziksel süreklilik: 'will still be bathing'."
        },
        "explainedAnswer": "Doğru yanıt A (will still be bathing). Gelecekteki sonsuz fiziksel süreklilik Future Continuous ile aktarılır.",
        "signalWords": [
          "will still be flowing",
          "will be echoing through eternity"
        ]
      },
      "YDS": {
        "title": "ÖSYM'nin 'This time next week' ve 'At this time tomorrow' Kalıpları",
        "basicMeaning": "YDS/YDT'de Future Continuous'un imza soru kalıbı: 'This time tomorrow / next week / next year'.",
        "usages": [
          "This time next week / month / year kalıpları",
          "Gelecekteki belirli saat aralığı (between 2 and 5 pm tomorrow)",
          "Seçenek eleme: Soru kökünde 'at this time tomorrow' varsa şıklarda 'will be V-ing' doğrudan doğru yanıttır"
        ],
        "nonUsages": [
          "Geçmiş zaman işaretçisiyle Future Continuous kullanılması"
        ],
        "positiveFormula": "At this time next week, Subject + will be + V-ing",
        "negativeFormula": "Future Continuous + [Past zaman zarfı KESİNLİKLE YANLIŞTIR]",
        "questionFormula": "What strategic topics will the ministerial panel be addressing at this time tomorrow?",
        "shortAnswers": "Fiscal integration policies.",
        "subjectVerbAgreement": "ÖSYM soru köklerindeki heyet ve kurum özneleriyle will be uyumu.",
        "verbForm": "will be + V-ing",
        "auxiliaryVerb": "will be",
        "timeMarkers": [
          "at this time tomorrow",
          "this time next week",
          "this time next year",
          "between 9 and 12 tomorrow"
        ],
        "signals": [
          "This time tomorrow",
          "this time next year",
          "will be hosting"
        ],
        "timeline": "Sınav Sorusu: [Gelecekteki Belirli Nokta / Bu Vakitler] ===> will be + V-ing",
        "examples": [
          "At this time next week, climate researchers will be analyzing the ice core samples in the polar station.",
          "Between ten and twelve tomorrow morning, the technical committee will be testing the emergency backup grid."
        ],
        "exampleTr": [
          "Gelecek hafta bu vakitlerde, iklim araştırmacıları kutup istasyonunda buz çekirdeği örneklerini analiz ediyor olacaklar."
        ],
        "code": "YDS Parolası: 'THIS TIME NEXT WEEK / AT THIS TIME TOMORROW' = %100 WILL BE V-ING!",
        "visualMemory": "ÖSYM soru kitapçığında 'this time next year' ifadesinin altını çizip 'will be V-ing' şıkkını işaretleme anı 🎯📄",
        "commonMistake": "'This time next year' görünce düz 'will analyze' seçmek (ÖSYM o andaki süreci sorduğu için 'will be analyzing' doğru cevaptır).",
        "correctWrongContrast": {
          "wrong": "This time next year, I will work in London.",
          "correct": "This time next year, I will be working in London.",
          "note": "'This time next year' o andaki süreci sorar, Future Continuous gerektirir.",
          "explanation": "'This time next year' o andaki süreci sorar, Future Continuous gerektirir."
        },
        "differenceFromSimilarTense": "By next year = will have worked (bitmiş olacak); This time next year = will be working (o anda çalışıyor olacak). By ile This time arasındaki farka dikkat!",
        "levelTactic": "Soru kökünde 'This time next year / at this time tomorrow' gördüğün anda seçeneklerde doğrudan 'will be + V-ing' ara!",
        "miniTest": {
          "question": "At this exact time tomorrow, international delegates ---- the plenary debate on transboundary water rights.",
          "options": [
            "will be conducting",
            "conducted",
            "had conducted",
            "have conducted",
            "were conducting"
          ],
          "answer": 0,
          "explanation": "'At this exact time tomorrow' doğrudan Future Continuous (will be conducting) gerektirir."
        },
        "explainedAnswer": "Doğru yanıt A (will be conducting). Gelecekte tam bu vakitleri bildiren zaman zarfı Future Continuous ister.",
        "signalWords": [
          "This time tomorrow",
          "this time next year",
          "will be hosting"
        ]
      }
    }
  },
  {
    "slug": "future-perfect",
    "name": "Future Perfect Tense",
    "turkish": "Gelecekte Tamamlanmış Zaman",
    "emoji": "🏁",
    "summary": "Gelecekte belirli bir tarihe kadar tamamlanmış olacak eylemler, 'by / by the time / before' kalıpları ve 'will have + V3' yapısı.",
    "levels": {
      "A1": {
        "title": "Gelecekte Tamamlanmış Olacak İşler (by tomorrow)",
        "basicMeaning": "Gelecekte belirli bir vakte kadar bir işin 'yapılmış/bitmiş olacağını' belirtme.",
        "usages": [
          "Yarın akşama kadar bitmiş olacak ödevler (I will have finished my project by tomorrow)",
          "Gelecekteki son teslim tarihleri"
        ],
        "nonUsages": [
          "Gelecekte daha yeni başlayacak eylemler"
        ],
        "positiveFormula": "Subject + will have + V3 + by [Future Time]",
        "negativeFormula": "Subject + will not have (won't have) + V3 + by then",
        "questionFormula": "Will you have finished the report by 5 pm?",
        "shortAnswers": "Yes, I will have. / No, I won't have.",
        "subjectVerbAgreement": "Tüm şahıslarda 'will have' sabittir.",
        "verbForm": "will have + V3",
        "auxiliaryVerb": "will have",
        "timeMarkers": [
          "by tomorrow",
          "by 5 pm",
          "by next Friday",
          "before next week"
        ],
        "signals": [
          "by + future time",
          "will have finished by"
        ],
        "timeline": "Gelecekteki bir sınır çizgisi: [Bugün] ===> [X (BİTTİ)] ---> [Yarın Saat 5 Sınırı 🏁]",
        "examples": [
          "By 6 pm this evening, the mechanics will have repaired your vehicle.",
          "She will have graduated from university by next July."
        ],
        "exampleTr": [
          "Bu akşam saat 6'ya kadar tamirciler aracınızı onarmış olacaklar."
        ],
        "code": "By + Gelecek Zaman = will have + V3!",
        "visualMemory": "Yarın saat 18:00 damgalı teslim kutusuna atılmış tamamlanmış dosya 📁🏁",
        "commonMistake": "'by tomorrow' varken düz 'will repair' demek (eylemin bitmişliği vurgulanıyorsa 'will have repaired' şarttır).",
        "correctWrongContrast": {
          "wrong": "By next week, I will complete the course.",
          "correct": "By next week, I will have completed the course.",
          "note": "'By next week' eylemin o tarihe kadar tamamlanacağını bildirir, Future Perfect ister.",
          "explanation": "'By next week' eylemin o tarihe kadar tamamlanacağını bildirir, Future Perfect ister."
        },
        "differenceFromSimilarTense": "At 6 pm I will repair it (saat 6'da tamire başlayacağım); By 6 pm I will have repaired it (saat 6 olduğunda tamir çoktan bitmiş olacak).",
        "levelTactic": "Soru kökünde 'by tomorrow, by next year' gördüğünde doğrudan 'will have + V3' ara.",
        "miniTest": {
          "question": "By the end of this month, the construction crew ---- the entire bridge framework.",
          "options": [
            "will have completed",
            "completed",
            "had completed",
            "was completing",
            "completes"
          ],
          "answer": 0,
          "explanation": "'By the end of this month' gelecekte tamamlanmışlık bildirir: 'will have completed'."
        },
        "explainedAnswer": "Doğru yanıt A (will have completed). 'By the end of...' gelecekteki son teslim anına kadar tamamlanmış eylemleri ifade eder.",
        "signalWords": [
          "by + future time",
          "will have finished by"
        ]
      },
      "A2": {
        "title": "'By the time' Gelecek Kuralı (By the time + V1, will have V3)",
        "basicMeaning": "Gelecekte başka bir olay gerçekleştiğinde (V1), ana eylemin çoktan tamamlanmış olacağı kuralı.",
        "usages": [
          "By the time + Simple Present (V1), Future Perfect (will have V3)",
          "Misafirler geldiğinde yemeğin pişmiş olması"
        ],
        "nonUsages": [
          "Geçmişe ait by the time kalıpları (onlar had V3 alır)"
        ],
        "positiveFormula": "By the time Subject + V1/V-s, Subject + will have + V3",
        "negativeFormula": "By the time the manager returns, we won't have finalized the contract.",
        "questionFormula": "Will the audience have left by the time the speech concludes?",
        "shortAnswers": "No, they will remain.",
        "subjectVerbAgreement": "Yan cümlede V1/V-s, ana cümlede will have.",
        "verbForm": "will have + V3 ve V1/V-s",
        "auxiliaryVerb": "will have / does / do",
        "timeMarkers": [
          "by the time + present",
          "before + present",
          "when + present (tamamlanmışlık)"
        ],
        "signals": [
          "By the time you arrive, I will have done"
        ],
        "timeline": "[Şimdi] ===> [X (BİTTİ: will have V3)] <--- [Sen Geldiğinde: V1]",
        "examples": [
          "By the time you wake up tomorrow morning, I will have already boarded my flight.",
          "By the time the rescue team arrives, the floodwaters will have receded."
        ],
        "exampleTr": [
          "Yarın sabah sen uyandığında, ben uçağıma çoktan binmiş olacağım."
        ],
        "code": "By the time + V1/V-s ===> DİĞER TARAF WILL HAVE V3!",
        "visualMemory": "Sabah uyanan çocuğun mutfağa gittiğinde annesinin çoktan kahvaltıyı hazırlamış olduğunu görmesi 🍳☕",
        "commonMistake": "By the time'ın hemen yanındaki yan cümleye 'will have' koymak.",
        "correctWrongContrast": {
          "wrong": "By the time you will arrive, we will have left.",
          "correct": "By the time you arrive, we will have left.",
          "note": "'By the time' yan cümlesinde will kullanılmaz, Simple Present (arrive) kullanılır.",
          "explanation": "'By the time' yan cümlesinde will kullanılmaz, Simple Present (arrive) kullanılır."
        },
        "differenceFromSimilarTense": "By the time + V2 = had V3 (Geçmiş); By the time + V1 = will have V3 (Gelecek). Zaman paralelliğine dikkat!",
        "levelTactic": "'By the time + V1' gördüğün an diğer boşluğa 'will have + V3' koy.",
        "miniTest": {
          "question": "By the time the international summit ---- in October, climate diplomats ---- all preliminary resolutions.",
          "options": [
            "convenes / will have drafted",
            "will convene / draft",
            "convened / will have drafted",
            "has convened / drafted",
            "convenes / had drafted"
          ],
          "answer": 0,
          "explanation": "'By the time' yan cümlesi Simple Present (convenes), ana cümle ise Future Perfect (will have drafted) olur."
        },
        "explainedAnswer": "Doğru yanıt A (convenes / will have drafted). 'By the time + V1, will have V3' altın sınav kuralıdır.",
        "signalWords": [
          "By the time you arrive, I will have done"
        ]
      },
      "B1": {
        "title": "Gelecekte Süre Tamamlama (Anniversary & Milestone)",
        "basicMeaning": "Gelecekteki belirli bir tarihte bir meslekte, evlilikte veya projede belirli bir sürenin dolmuş olacağı (milestone).",
        "usages": [
          "Gelecekte yıl dönümü kutlamaları (Next year we will have been married for 20 years)",
          "Gelecekteki emeklilik süreleri"
        ],
        "nonUsages": [
          "Geçmişte kalmış emeklilikler"
        ],
        "positiveFormula": "By next [Year], Subject + will have + lived/worked + for [Duration]",
        "negativeFormula": "He will not have attained full tenure by the end of this academic session.",
        "questionFormula": "How many years will you have served in the armed forces by next July?",
        "shortAnswers": "Exactly twenty years.",
        "subjectVerbAgreement": "Tüm şahıslarda will have aynıdır.",
        "verbForm": "will have + V3",
        "auxiliaryVerb": "will have",
        "timeMarkers": [
          "by next anniversary",
          "by 2030 for ten years",
          "by the end of this term"
        ],
        "signals": [
          "by ... for ... years",
          "will have served for twenty years"
        ],
        "timeline": "[Geçmişte Başladı] =======================> [Gelecekte 20 Yıl Doluyor 🎯]",
        "examples": [
          "By next June, Professor Adams will have taught at the institute for three decades.",
          "By the time the mission concludes, the spacecraft will have orbited Mars over two thousand times."
        ],
        "exampleTr": [
          "Gelecek haziranda Profesör Adams enstitüde otuz yıldır ders veriyor olmuş olacak (30 yılı dolacak)."
        ],
        "code": "Gelecekte Süre Dolumu (By next year for 10 years) = will have + V3!",
        "visualMemory": "Takvimde '30. Yıl Hizmet Plaketi' günü ve tamamlanan çalışma süresi 🏆📅",
        "commonMistake": "'for three decades' gördüğü için sadece Present Perfect (has taught) sanmak (by next June gelecektir!).",
        "correctWrongContrast": {
          "wrong": "By next year, I have worked here for five years.",
          "correct": "By next year, I will have worked here for five years.",
          "note": "'By next year' gelecektir; bu yüzden 'will have worked' olmalıdır.",
          "explanation": "'By next year' gelecektir; bu yüzden 'will have worked' olmalıdır."
        },
        "differenceFromSimilarTense": "I have worked for 5 years (bugün 5 yılım doldu); By next year I will have worked for 5 years (gelecek yıl 5 yılım dolacak).",
        "levelTactic": "Cümlede 'by + gelecek tarih' ve 'for + süre' bir aradaysa doğrudan Future Perfect (will have V3) ara.",
        "miniTest": {
          "question": "By the time she celebrates her retirement next spring, Dr. Bennett ---- the neurology clinic for forty years.",
          "options": [
            "will have directed",
            "has directed",
            "had directed",
            "was directed",
            "directs"
          ],
          "answer": 0,
          "explanation": "'By the time she celebrates her retirement next spring' gelecekte 40 yılın dolacağını bildirir: 'will have directed'."
        },
        "explainedAnswer": "Doğru yanıt A (will have directed). Gelecekteki bir tarihe kadar dolacak hizmet süresi Future Perfect gerektirir.",
        "signalWords": [
          "by ... for ... years",
          "will have served for twenty years"
        ]
      },
      "B2": {
        "title": "Küresel Hedefler, İklim Eşikleri ve Sınır Tarihler (By 2050)",
        "basicMeaning": "BM, hükümetler veya bilim insanlarının belirlediği ve 'X yılına kadar başarılmış olması gereken' hedefler.",
        "usages": [
          "Net-sıfır karbon hedefleri (By 2050, the EU will have eliminated fossil reliance)",
          "Aşı ve salgın kontrol eşikleri"
        ],
        "nonUsages": [
          "Geçmişte başarılmış hedefler"
        ],
        "positiveFormula": "By 2050, signatory states will have decoupled industrial production from fossil fuels.",
        "negativeFormula": "Developing economies will not have transitioned completely without international subsidies.",
        "questionFormula": "What percentage of terrestrial wilderness will conservationists have restored by 2040?",
        "shortAnswers": "Approximately thirty percent.",
        "subjectVerbAgreement": "Hükümet ve ülke isimleriyle will have uyumu.",
        "verbForm": "will have + V3",
        "auxiliaryVerb": "will have",
        "timeMarkers": [
          "by 2050",
          "by mid-century",
          "by the targeted deadline",
          "prior to 2035"
        ],
        "signals": [
          "By 2050, ... will have achieved",
          "global target"
        ],
        "timeline": "Uluslararası hedef çizgisi: [Bugün] ===> [Hedef Tamamlanacak: will have V3] ---> [2050 Sınırı 🏁]",
        "examples": [
          "According to the treaty roadmap, the member nations will have phased out coal power plants by 2035.",
          "By the turn of the decade, automated electric grids will have replaced aging infrastructure across the continent."
        ],
        "exampleTr": [
          "Antlaşma yol haritasına göre, üye ülkeler 2035 yılına kadar kömür santrallerini tamamen devreden çıkarmış olacaklar."
        ],
        "code": "YDS İklim & Hedef Kuralı: 'BY 2030 / BY 2050' = WILL HAVE + V3!",
        "visualMemory": "2050 Net-Zero hedef tabelası ve yeşile dönmüş küresel elektrik şebekesi 🌍🌱",
        "commonMistake": "'By 2050' görünce sadece 'will phase out' seçmek ('by' edatı tamamlanmışlık gerektirir, will have phased out doğrudur).",
        "correctWrongContrast": {
          "wrong": "In 2050 we will achieve it vs By 2050 we will have achieved it.",
          "correct": "By 2050, the coalition will have achieved net-zero emissions.",
          "note": "'By 2050' o tarihe kadar tamamlanmış olacağını belirtir; Future Perfect ister.",
          "explanation": "'By 2050' o tarihe kadar tamamlanmış olacağını belirtir; Future Perfect ister."
        },
        "differenceFromSimilarTense": "In 2050 = will V1 (o yılda yapılacak); By 2050 = will have V3 (o yıla kadar çoktan bitmiş olacak).",
        "levelTactic": "Soru kökünde 'by + gelecekteki bir yıl' (by 2030, by 2040, by 2050) gördüğün an seçeneklerde ilk olarak 'will have + V3' ara!",
        "miniTest": {
          "question": "Environmental economists calculate that by 2045, renewable energy investments ---- conventional hydrocarbon utilities entirely.",
          "options": [
            "will have superseded",
            "superseded",
            "had superseded",
            "have superseded",
            "supersede"
          ],
          "answer": 0,
          "explanation": "'By 2045' gelecekteki sınır tarihe kadar tamamlanmış olmayı ifade eder: 'will have superseded'."
        },
        "explainedAnswer": "Doğru yanıt A (will have superseded). 'By + gelecek yıl' formülü Future Perfect gerektirir.",
        "signalWords": [
          "By 2050, ... will have achieved",
          "global target"
        ]
      },
      "C1": {
        "title": "Teknolojik Eşikler ve Kaçınılmaz Demografik Doygunluk",
        "basicMeaning": "Gelecekte nüfus, veri depolama veya yapay zeka kapasitelerinin belirli bir tavan noktasına 'ulaşmış olacağı' tespiti.",
        "usages": [
          "Dünya nüfusunun 10 milyara ulaşmış olması",
          "Kuantum bilgisayarların klasik şifrelemeyi kırmış olması"
        ],
        "nonUsages": [
          "Durağan geçmiş analizleri"
        ],
        "positiveFormula": "By the time quantum computing matures, legacy cryptographic algorithms will have become obsolete.",
        "negativeFormula": "Conventional agriculture will not have satisfied global nutritional demands by mid-century.",
        "questionFormula": "How many genome sequences will bioinformaticians have mapped by the close of the decade?",
        "shortAnswers": "Billions of comparative genetic markers.",
        "subjectVerbAgreement": "Teknolojik ve demografik özneler.",
        "verbForm": "will have + V3",
        "auxiliaryVerb": "will have",
        "timeMarkers": [
          "by the close of the decade",
          "before demographic peaking occurs",
          "by the time computational limits are reached"
        ],
        "signals": [
          "will have become obsolete",
          "will have reached saturation"
        ],
        "timeline": "Gelecekteki teknolojik eşik noktası 📈⚡",
        "examples": [
          "By the time the next planetary exploration window opens, robotic autonomous systems will have mapped ninety percent of the Martian surface.",
          "Before the global demographic curve stabilizes, urban metropolises will have absorbed an unprecedented influx of migrants."
        ],
        "exampleTr": [
          "Bir sonraki gezegen keşif penceresi açıldığında, otonom robotik sistemler Mars yüzeyinin yüzde doksanını çoktan haritalandırmış olacaktır."
        ],
        "code": "Teknolojik Eşik = will have become obsolete / will have mapped!",
        "visualMemory": "Eski disketlerin tozlu raflara kalkması ve kuantum işlemcinin parlaması 💾⚛️",
        "commonMistake": "Teknolojik eskime sürecini 'will become' ile sıradan bir zamana bırakmak.",
        "correctWrongContrast": {
          "wrong": "By the time the new grid is built, the old one will fail.",
          "correct": "By the time the new grid is built, the old one will have failed.",
          "note": "Yeni şebeke kurulana kadar eski şebeke çoktan iflas etmiş olacaktır; 'will have failed' doğrudur.",
          "explanation": "Yeni şebeke kurulana kadar eski şebeke çoktan iflas etmiş olacaktır; 'will have failed' doğrudur."
        },
        "differenceFromSimilarTense": "Will have become obsolete (çoktan hükümsüz kalmış olacak - tamamlanmış); Will be becoming (o sıralarda eskimekte olacak - süreç).",
        "levelTactic": "'By the time + V1' ve teknolojik eşik cümlelerinde 'will have V3' kesin tercihtir.",
        "miniTest": {
          "question": "By the time commercial fusion reactors are operational, advanced battery technologies ---- grid-scale energy storage.",
          "options": [
            "will have revolutionized",
            "revolutionized",
            "had revolutionized",
            "have revolutionized",
            "revolutionize"
          ],
          "answer": 0,
          "explanation": "'By the time ... are operational (V1)' yan cümlesi ana cümlede Future Perfect (will have revolutionized) gerektirir."
        },
        "explainedAnswer": "Doğru yanıt A (will have revolutionized). Gelecekteki bir dönüm noktasına kadar gerçekleşmiş olacak devrim Future Perfect ile verilir.",
        "signalWords": [
          "will have become obsolete",
          "will have reached saturation"
        ]
      },
      "C2": {
        "title": "Eschatological ve Kozmolojik Entropi Projeksiyonları",
        "basicMeaning": "Güneşin kırmızı deve dönüşmesi, galaksilerin çarpışması gibi kozmolojik ölçekteki nihai tamamlanma öngörüleri.",
        "usages": [
          "Güneşin hidrojeni tüketmiş olması (In 5 billion years, the Sun will have exhausted its hydrogen fuel)",
          "Galaktik birleşmeler"
        ],
        "nonUsages": [
          "Kısa vadeli insan ölçekli haberler"
        ],
        "positiveFormula": "In five billion years, stellar nucleosynthesis will have exhausted the core hydrogen reserves.",
        "negativeFormula": "No biological organism will have survived the expansion of the red giant.",
        "questionFormula": "What cosmic remnants will the galaxy have merged into by that distant epoch?",
        "shortAnswers": "A singular super-elliptical stellar collective.",
        "subjectVerbAgreement": "Astrofiziksel öznelerle will have çekimi.",
        "verbForm": "will have + V3",
        "auxiliaryVerb": "will have",
        "timeMarkers": [
          "in several billion years",
          "by the time the star enters the main sequence collapse"
        ],
        "signals": [
          "will have exhausted",
          "will have expanded into"
        ],
        "timeline": "Kozmik takvimin nihai tamamlanma noktası 🌌⏳",
        "examples": [
          "Long before the Sun enters its terminal evolutionary phase, increasing luminosity will have vaporized Earth's oceans completely.",
          "By the time Andromeda collides with the Milky Way, billions of stellar generations will have lived and perished."
        ],
        "exampleTr": [
          "Güneş nihai evrimsel aşamasına girmeden çok önce, artan parlaklık Dünya'nın okyanuslarını tamamen buharlaştırmış olacaktır."
        ],
        "code": "Kozmolojik Tamamlanma = will have vaporized / exhausted!",
        "visualMemory": "Genişleyen kızıl dev yıldız ve buharlaşan gezegen yüzeyi ☀️🪐🔥",
        "commonMistake": "Milyarlarca yıl sonrasını basit 'will vaporize' ile sıradan bir hava olayı gibi sunmak.",
        "correctWrongContrast": {
          "wrong": "In 5 billion years, the sun will exhaust its fuel.",
          "correct": "In 5 billion years, the sun will have exhausted its fuel.",
          "note": "O süre dolduğunda yakıt çoktan tükenmiş olacaktır; 'will have exhausted' esastır.",
          "explanation": "O süre dolduğunda yakıt çoktan tükenmiş olacaktır; 'will have exhausted' esastır."
        },
        "differenceFromSimilarTense": "Will exhaust (tüketecek); Will have exhausted (o tarihe gelindiğinde tüketmiş olacak).",
        "levelTactic": "Kozmoloji ve astrofizik metinlerinde 'By the time ... occurs, will have V3' kalıbına güven.",
        "miniTest": {
          "question": "Astrophysicists estimate that long before the galaxy merges with Andromeda, our solar system ---- hundreds of orbital cycles around the galactic nucleus.",
          "options": [
            "will have completed",
            "completed",
            "had completed",
            "has completed",
            "was completing"
          ],
          "answer": 0,
          "explanation": "Kozmik birleşmeden önce yüzlerce yörünge döngüsünün tamamlanmış olacağı: 'will have completed'."
        },
        "explainedAnswer": "Doğru yanıt A (will have completed). Gelecekteki kozmik dönüm noktasından önce tamamlanmış olacak döngüler Future Perfect ile aktarılır.",
        "signalWords": [
          "will have exhausted",
          "will have expanded into"
        ]
      },
      "YDS": {
        "title": "ÖSYM'nin 'By + Gelecek Yıl / By the time + V1' Şablonu",
        "basicMeaning": "YDS/YDT'de Future Perfect sorusunu çözdüren 2 altın sinyal: 1) 'By + 2030/2050', 2) 'By the time + V1/V-s'.",
        "usages": [
          "By 2030, by the end of this century, by next decade",
          "By the time + Present Tense (V1), will have V3",
          "Seçenek eleme: Soru kökünde 'by 2030' varsa şıklardaki 'will have + V3' birinci öncelikli cevaptır"
        ],
        "nonUsages": [
          "Geçmiş zaman işaretçisiyle Future Perfect seçmek"
        ],
        "positiveFormula": "By the year 2035, global telecommunications networks will have adopted photonic routing.",
        "negativeFormula": "Past Clause + [will have V3 KESİNLİKLE UYUMSUZDUR]",
        "questionFormula": "How many autonomous satellites will space agencies have deployed by 2030?",
        "shortAnswers": "More than ten thousand.",
        "subjectVerbAgreement": "ÖSYM soru köklerindeki karmaşık özne öbekleri.",
        "verbForm": "will have + V3",
        "auxiliaryVerb": "will have",
        "timeMarkers": [
          "by 2030",
          "by the year 2050",
          "by the end of this decade",
          "by the time + V1"
        ],
        "signals": [
          "By 2030, ... will have",
          "By the time the project ends, will have"
        ],
        "timeline": "Sınav Sorusu: [Gelecek Sınır Tarihi: BY 2030] ===> WILL HAVE + V3",
        "examples": [
          "By the end of this decade, international automotive consortia will have phased out the manufacture of internal combustion engines.",
          "By the time the new clinical protocol receives full regulatory authorization, pharmaceutical laboratories will have manufactured millions of doses."
        ],
        "exampleTr": [
          "Bu on yılın sonuna kadar, uluslararası otomotiv konsorsiyumları içten yanmalı motorların üretimini tamamen sonlandırmış olacaklar."
        ],
        "code": "YDS Formülü: 'BY 2030 / BY NEXT DECADE' = %100 WILL HAVE V3!",
        "visualMemory": "ÖSYM soru kitapçığında 'by 2030' kelimesini görünce hemen 'will have V3' şıkkını işaretleme refleksi 🎯📄",
        "commonMistake": "'by 2030' görünce düz 'will phase out' seçmek ('by' edatı tamamlanmışlık ister, will have phased out tek doğrudur!).",
        "correctWrongContrast": {
          "wrong": "By 2030, scientists will eradicate the disease.",
          "correct": "By 2030, scientists will have eradicated the disease.",
          "note": "'By 2030' tamamlanmışlık bildirir, Future Perfect (will have eradicated) şarttır.",
          "explanation": "'By 2030' tamamlanmışlık bildirir, Future Perfect (will have eradicated) şarttır."
        },
        "differenceFromSimilarTense": "In 2030 = will eradicate; By 2030 = will have eradicated. 'By' edatı Future Perfect'in anahtarıdır!",
        "levelTactic": "Soru kökünde 'By 2030, by next year, by the end of the century' gördüğün anda seçeneklerde doğrudan 'will have + V3' ara ve işaretle!",
        "miniTest": {
          "question": "Energy analysts forecast that by 2040, offshore wind installations ---- more than forty percent of the continent's baseload electricity.",
          "options": [
            "will have generated",
            "generated",
            "had generated",
            "have generated",
            "generate"
          ],
          "answer": 0,
          "explanation": "'By 2040' gelecekteki sınır tarihe kadar tamamlanmış elektrik üretim payını bildirir: 'will have generated'."
        },
        "explainedAnswer": "Doğru yanıt A (will have generated). 'By + gelecek yıl' yapısı YDS'de doğrudan Future Perfect (will have V3) gerektirir.",
        "signalWords": [
          "By 2030, ... will have",
          "By the time the project ends, will have"
        ]
      }
    }
  },
  {
    "slug": "future-perfect-continuous",
    "name": "Future Perfect Continuous Tense",
    "turkish": "Gelecekte Süreç Tamamlama",
    "emoji": "📈",
    "summary": "Gelecekte belirli bir tarihe gelindiğinde, bir eylemin ne kadar süredir kesintisiz devam ediyor olacağını (süreç vurgusu) bildiren 'will have been V-ing' yapısı.",
    "levels": {
      "A1": {
        "title": "Gelecekteki Süreç Vurgusu (Temel Giriş)",
        "basicMeaning": "Gelecekteki belirli bir tarihte bir işi ne kadar süredir yapıyor olacağımızı belirtme.",
        "usages": [
          "Gelecek yılda bir işte kaç yıldır çalışıyor olunacağı (Next year I will have been working here for 5 years)",
          "Gelecekte dolacak süreler"
        ],
        "nonUsages": [
          "Durum bildiren stative fiiller (know, like asla continuous almaz)"
        ],
        "positiveFormula": "Subject + will have been + V-ing + for [Duration] + by [Future Date]",
        "negativeFormula": "Subject + won't have been + V-ing",
        "questionFormula": "How long will you have been studying by next June?",
        "shortAnswers": "For four years.",
        "subjectVerbAgreement": "Tüm şahıslarda 'will have been' kullanılır.",
        "verbForm": "will have been + V-ing",
        "auxiliaryVerb": "will have been",
        "timeMarkers": [
          "by next year for five years",
          "by tomorrow for ten hours"
        ],
        "signals": [
          "will have been working for",
          "by next ... for ... years"
        ],
        "timeline": "[Geçmişte Başladı] =======================> [Gelecekte Süreç Dolan Nokta (will have been V-ing)]",
        "examples": [
          "By 5 pm today, I will have been sitting at this desk for eight straight hours.",
          "By next summer, they will have been living in this neighborhood for a decade."
        ],
        "exampleTr": [
          "Bugün saat 17:00 olduğunda, aralıksız sekiz saattir bu masada oturuyor olmuş olacağım."
        ],
        "code": "Gelecekte Süreç Vurgusu = will have been + V-ing!",
        "visualMemory": "Masa başında saatlerdir çalışan ve saat 17:00'ye doğru bakan öğrenci 🖥️⏰",
        "commonMistake": "Stative fiilleri continuous yapmak (*will have been knowing* YANLIŞ -> will have known DOĞRU).",
        "correctWrongContrast": {
          "wrong": "By next year, I will have been knowing him for ten years.",
          "correct": "By next year, I will have known him for ten years.",
          "note": "'know' durum fiilidir, continuous alamaz; Future Perfect Simple kullanılır.",
          "explanation": "'know' durum fiilidir, continuous alamaz; Future Perfect Simple kullanılır."
        },
        "differenceFromSimilarTense": "Future Perfect eylemin bittiğini, Future Perfect Continuous ise eylemin hala sürmekte olan sürecini vurgular.",
        "levelTactic": "'by next year' ile birlikte 'for X years' ve dinamik eylem fiili varsa 'will have been V-ing' seç.",
        "miniTest": {
          "question": "By midnight, the emergency surgical team ---- in the operating theater for twelve consecutive hours.",
          "options": [
            "will have been operating",
            "operated",
            "had operated",
            "was operating",
            "operates"
          ],
          "answer": 0,
          "explanation": "'By midnight' ve 'for twelve consecutive hours' kesintisiz süreci bildirir: 'will have been operating'."
        },
        "explainedAnswer": "Doğru yanıt A (will have been operating). Gelecekteki bir saate kadar sürecek kesintisiz eylem Future Perfect Continuous ile aktarılır.",
        "signalWords": [
          "will have been working for",
          "by next ... for ... years"
        ]
      },
      "A2": {
        "title": "'By the time + V1' ile Gelecek Süreç",
        "basicMeaning": "Gelecekte başka bir olay gerçekleştiğinde, bir eylemin ne kadar süredir devam etmekte olacağı.",
        "usages": [
          "By the time you graduate, you will have been studying for 4 years",
          "Gelecekteki dönüm noktasına kadar geçen süre"
        ],
        "nonUsages": [
          "Adet veya miktar bildiren sonuçlar"
        ],
        "positiveFormula": "By the time Subject + V1, Subject + will have been + V-ing + for [time]",
        "negativeFormula": "By the time the train arrives, we won't have been waiting very long.",
        "questionFormula": "How long will the engine have been running by the time we reach the border?",
        "shortAnswers": "For nearly six hours.",
        "subjectVerbAgreement": "Özneler fark etmeksizin will have been.",
        "verbForm": "will have been + V-ing",
        "auxiliaryVerb": "will have been",
        "timeMarkers": [
          "by the time + V1 + for [time]",
          "by then for hours"
        ],
        "signals": [
          "By the time ... arrives, will have been waiting for"
        ],
        "timeline": "[Süreç Başladı] ===> [Süreç Devam Ediyor] ===> [Gelecekteki Varış Anı (V1)]",
        "examples": [
          "By the time the relief convoy reaches the outpost, the besieged soldiers will have been rationing water for weeks.",
          "By the time the race concludes, the marathoners will have been running under the scorching sun for hours."
        ],
        "exampleTr": [
          "Yardım konvoyu karakola ulaştığında, kuşatılmış askerler haftalardır suyu karneyle tüketiyor olmuş olacaklar."
        ],
        "code": "By the time + V1 + FOR + Süre = will have been + V-ing!",
        "visualMemory": "Yolda koşan ve bitiş çizgisine yaklaşan terli maraton koşucusu 🏃‍♂️🏁",
        "commonMistake": "Süreç yerine bitmiş adet bildirirken continuous kullanmak (*will have been writing 3 letters*).",
        "correctWrongContrast": {
          "wrong": "By tomorrow, I will have been reading five books.",
          "correct": "By tomorrow, I will have read five books.",
          "note": "Beş kitap tamamlanmış miktardır; Simple Future Perfect (will have read) gerekir.",
          "explanation": "Beş kitap tamamlanmış miktardır; Simple Future Perfect (will have read) gerekir."
        },
        "differenceFromSimilarTense": "Will have read 5 books (5 kitap bitmiş olacak); Will have been reading for 5 hours (5 saattir okuyor olacak).",
        "levelTactic": "'By the time + V1' cümlesinde 'for X hours/days' süre vurgusu varsa 'will have been V-ing' seç.",
        "miniTest": {
          "question": "By the time the rescue helicopter arrives at the peak, the stranded climbers ---- freezing temperatures for over eighteen hours.",
          "options": [
            "will have been braving",
            "braved",
            "had braved",
            "have braved",
            "brave"
          ],
          "answer": 0,
          "explanation": "'By the time ... arrives (V1)' ve 'for over eighteen hours' süreci: 'will have been braving'."
        },
        "explainedAnswer": "Doğru yanıt A (will have been braving). Gelecekteki varış anına kadar sürecek 18 saatlik süreç Future Perfect Continuous gerektirir.",
        "signalWords": [
          "By the time ... arrives, will have been waiting for"
        ]
      },
      "B1": {
        "title": "Gelecek Yorgunluk ve Fiziksel Etki Tahminleri",
        "basicMeaning": "Gelecekte bir olay bittiğinde kişinin 'ne kadar süredir çalışmış olduğu için yorgun olacağı' çıkarımı.",
        "usages": [
          "Gelecekteki yorgunluğun sebebi (He will be exhausted because he will have been driving for 10 hours)",
          "Gelecekteki yıpranma"
        ],
        "nonUsages": [
          "Geçmişteki yorgunluklar (onlar had been V-ing alır)"
        ],
        "positiveFormula": "Subject + will be exhausted because Subject + will have been + V-ing + for [time]",
        "negativeFormula": "She won't be tired because she won't have been working all day.",
        "questionFormula": "Will the athletes be suffering from dehydration after they will have been competing?",
        "shortAnswers": "Likely, yes.",
        "subjectVerbAgreement": "Tüm şahıslarla will have been uyumu.",
        "verbForm": "will have been + V-ing",
        "auxiliaryVerb": "will have been",
        "timeMarkers": [
          "by then",
          "when the shift ends",
          "after hours of continuous exertion"
        ],
        "signals": [
          "will be exhausted because",
          "will have been working for hours"
        ],
        "timeline": "Gelecekteki çalışma süreci ===> Gelecekteki yorgunluk hissi 🥱",
        "examples": [
          "When the pilot lands in Sydney tomorrow, he will be utterly exhausted because he will have been flying across continents for nearly twenty hours.",
          "The machinery will require immediate lubrication as it will have been operating non-stop for two weeks."
        ],
        "exampleTr": [
          "Pilot yarın Sidney'e indiğinde, yaklaşık yirmi saattir kıtalararası uçuyor olmuş olacağı için son derece bitkin olacaktır."
        ],
        "code": "Gelecekteki Yorgunluk Sebebi = will have been + V-ing!",
        "visualMemory": "Kokpitte 20 saatlik uçuştan sonra inen ve gözleri yorgun düşen pilot 👨‍✈️✈️",
        "commonMistake": "Gelecekteki yorgunluk sebebini 'had been flying' (Past) ile karıştırmak (cümlenin başı 'when he lands tomorrow' gelecektir!).",
        "correctWrongContrast": {
          "wrong": "Tomorrow he will be tired because he had been driving.",
          "correct": "Tomorrow he will be tired because he will have been driving.",
          "note": "Gelecekteki yorgunluk geçmişe bağlanamaz; Future Perfect Continuous gerekir.",
          "explanation": "Gelecekteki yorgunluk geçmişe bağlanamaz; Future Perfect Continuous gerekir."
        },
        "differenceFromSimilarTense": "He was tired because he had been driving (Dün); He will be tired because he will have been driving (Yarın).",
        "levelTactic": "'will be tired/exhausted' gibi gelecek bir sonuç gördüğünde arkasındaki süreç için 'will have been V-ing' ara.",
        "miniTest": {
          "question": "When the night shift concludes at dawn, the miners ---- deep underground for ten uninterrupted hours.",
          "options": [
            "will have been toiling",
            "toiled",
            "had toiled",
            "have toiled",
            "toil"
          ],
          "answer": 0,
          "explanation": "'When the night shift concludes (V1)' yarın şafakta bitecek 10 saatlik maden mesaisini bildirir: 'will have been toiling'."
        },
        "explainedAnswer": "Doğru yanıt A (will have been toiling). Gelecekteki vardiya bitişine kadar sürecek 10 saatlik çalışma Future Perfect Continuous ile verilir.",
        "signalWords": [
          "will be exhausted because",
          "will have been working for hours"
        ]
      },
      "B2": {
        "title": "Bilimsel Deneylerde Uzun Süreli Maruz Kalma (Long-term Exposure)",
        "basicMeaning": "Laboratuvar deneylerinde bir malzemenin veya organizmanın 'belirli bir tarihe gelindiğinde X aydır radyasyona/ilaca maruz kalıyor olacağı' hesabı.",
        "usages": [
          "Klinik deney maruziyet süresi",
          "Malzeme dayanıklılık testlerinin gelecek aşamaları"
        ],
        "nonUsages": [
          "Anlık laboratuvar patlamaları"
        ],
        "positiveFormula": "By next month, the test specimens will have been enduring cryogenic conditions for a full year.",
        "negativeFormula": "The subjects will not have been taking the drug long enough to demonstrate side effects.",
        "questionFormula": "How long will the alloy have been withstanding thermal stress by the end of the simulation?",
        "shortAnswers": "For approximately five hundred hours.",
        "subjectVerbAgreement": "Laboratuvar ve bilimsel özneler.",
        "verbForm": "will have been + V-ing",
        "auxiliaryVerb": "will have been",
        "timeMarkers": [
          "by the completion of the protocol",
          "for a full year by next autumn",
          "upon reaching the threshold"
        ],
        "signals": [
          "will have been enduring",
          "will have been withstanding"
        ],
        "timeline": "Gelecekteki test bitiş tarihine kadar süren kesintisiz maruziyet 🔬⏳",
        "examples": [
          "By the time the secondary evaluation takes place next winter, the transgenic crops will have been growing under drought conditions for three cycles.",
          "The composite hull will have been undergoing cyclic pressurization tests for six months before flight certification is granted."
        ],
        "exampleTr": [
          "Gelecek kış ikinci değerlendirme yapıldığında, transgenik mahsuller üç döngü boyunca kuraklık koşullarında yetişiyor olmuş olacaklar."
        ],
        "code": "Bilimsel Maruziyet = will have been growing / undergoing for months!",
        "visualMemory": "Basınç odasında aylardır test edilen uçak gövdesi prototipi ✈️🧪",
        "commonMistake": "Laboratuvar süresini tamamlanmış ürün gibi düşünüp sadece 'will have grown' demek (maruziyet süreci vurgulanıyorsa continuous şarttır).",
        "correctWrongContrast": {
          "wrong": "By next year, the culture will grow for six months.",
          "correct": "By next year, the culture will have been growing for six months.",
          "note": "Gelecek yıla kadar 6 aydır sürmekte olan biyolojik kültür süreci Future Perfect Continuous ister.",
          "explanation": "Gelecek yıla kadar 6 aydır sürmekte olan biyolojik kültür süreci Future Perfect Continuous ister."
        },
        "differenceFromSimilarTense": "Will have grown (büyümesi bitmiş olacak); Will have been growing for 6 months (6 aydır büyüme sürecinde olacak).",
        "levelTactic": "Bilimsel test metinlerinde 'by + future point' ve 'for + duration' ile dayanıklılık/büyüme fiillerinde 'will have been V-ing' seç.",
        "miniTest": {
          "question": "By the conclusion of the orbital trial next spring, the experimental photovoltaic panels ---- direct cosmic radiation for eighteen months.",
          "options": [
            "will have been absorbing",
            "absorbed",
            "had absorbed",
            "have absorbed",
            "absorb"
          ],
          "answer": 0,
          "explanation": "'By the conclusion next spring' ve 'for eighteen months' süreci: 'will have been absorbing'."
        },
        "explainedAnswer": "Doğru yanıt A (will have been absorbing). Gelecekteki deney sonuna kadar sürecek 18 aylık radyasyon emilim süreci Future Perfect Continuous ile sunulur.",
        "signalWords": [
          "will have been enduring",
          "will have been withstanding"
        ]
      },
      "C1": {
        "title": "Sosyo-Ekonomik Süreçlerin Gelecekteki Kümülatif Ağırlığı",
        "basicMeaning": "Gelecek bir tarihte, toplumların veya ekonomilerin 'şu kadar yıldır bir krizle mücadele ediyor olacağı' analizi.",
        "usages": [
          "Demografik yaşlanmanın 30 yıldır sürüyor olacağı tespiti",
          "Borç krizinin gelecek yılda kaçıncı yılına gireceği"
        ],
        "nonUsages": [
          "Tek günde çözülen krizler"
        ],
        "positiveFormula": "By 2030, emerging economies will have been grappling with high interest rates for nearly a decade.",
        "negativeFormula": "Welfare systems will not have been coping adequately under sustained fiscal tightening.",
        "questionFormula": "For how many years will the global south have been adapting to desertification by mid-century?",
        "shortAnswers": "For several continuous generations.",
        "subjectVerbAgreement": "Ekonomik ve sosyolojik kolektif özneler.",
        "verbForm": "will have been + V-ing",
        "auxiliaryVerb": "will have been",
        "timeMarkers": [
          "by the turn of the next decade",
          "for nearly half a century by 2050"
        ],
        "signals": [
          "will have been grappling with for a decade",
          "will have been struggling"
        ],
        "timeline": "Gelecekteki bir tarihe kadar birikerek sürecek mücadele süreci 📈🏛️",
        "examples": [
          "By 2035, municipal administrations in the delta will have been combating rising sea waters for more than a quarter of a century.",
          "Developing nations will have been servicing astronomical external debt burdens for forty years by the time debt forgiveness protocols take effect."
        ],
        "exampleTr": [
          "2035 yılına gelindiğinde, delta bölgesindeki belediye yönetimleri çeyrek asırdan uzun süredir yükselen deniz sularıyla mücadele ediyor olmuş olacaklar."
        ],
        "code": "Gelecekteki Kriz Süreci = By 2035 ... will have been combating for 25 years!",
        "visualMemory": "Kıyı kentini korumak için 25 yıldır dalgakıran inşa eden mühendisler ve yükselen okyanus 🌊🧱",
        "commonMistake": "2035 yılındaki 25 yıllık mücadeleyi geçmiş zaman gibi düşünüp 'had been combating' yazmak (2035 gelecektir!).",
        "correctWrongContrast": {
          "wrong": "By 2035, they had been combating sea rise for 25 years.",
          "correct": "By 2035, they will have been combating sea rise for 25 years.",
          "note": "2035 gelecekteki bir tarihtir; 'will have been' zorunludur.",
          "explanation": "2035 gelecekteki bir tarihtir; 'will have been' zorunludur."
        },
        "differenceFromSimilarTense": "By 2000 they had been combating (geçmişte dolan süre); By 2035 they will have been combating (gelecekte dolacak süre).",
        "levelTactic": "Soru kökündeki yıla bak: Eğer yıl gelecekteyse (örn: by 2035) ve 'for X years' varsa had değil 'will have been V-ing' seç!",
        "miniTest": {
          "question": "By the year 2040, island communities in the Pacific ---- with coastal erosion and salinization for more than three decades.",
          "options": [
            "will have been struggling",
            "struggled",
            "had been struggling",
            "were struggling",
            "struggle"
          ],
          "answer": 0,
          "explanation": "'By the year 2040' ve 'for more than three decades' gelecekte dolacak süreci bildirir: 'will have been struggling'."
        },
        "explainedAnswer": "Doğru yanıt A (will have been struggling). 2040 yılına kadar sürecek 30 yıllık mücadele süreci Future Perfect Continuous ister.",
        "signalWords": [
          "will have been grappling with for a decade",
          "will have been struggling"
        ]
      },
      "C2": {
        "title": "Kozmik/Yıldızsal Süreçlerin Trilyon Yıllık Perspektifi",
        "basicMeaning": "Evrenin termodinamik evriminde yıldızların trilyonlarca yıl boyunca enerji yayıyor olacağı gibi devasa zaman ufukları.",
        "usages": [
          "Kırmızı cüce yıldızların trilyon yıl boyunca hidrojen yakıyor olacağı hesabı",
          "Genişleyen evrenin çağlar boyu sürecek hali"
        ],
        "nonUsages": [
          "İnsan ömrüyle sınırlı basit olaylar"
        ],
        "positiveFormula": "By the time the last massive stars collapse, red dwarf stars will have been radiating light for trillions of years.",
        "negativeFormula": "Galaxies will not have been forming new stellar clusters in that decadent epoch.",
        "questionFormula": "How long will the black holes have been evaporating by the onset of the degenerate era?",
        "shortAnswers": "For unimaginable eons via Hawking radiation.",
        "subjectVerbAgreement": "Kozmolojik öznelerle will have been.",
        "verbForm": "will have been + V-ing",
        "auxiliaryVerb": "will have been",
        "timeMarkers": [
          "for trillions of years by that epoch",
          "when the cosmos enters heat death"
        ],
        "signals": [
          "will have been radiating for eons",
          "will have been orbiting"
        ],
        "timeline": "Trilyonlarca yıllık kozmik süreç ufku 🌌⏳",
        "examples": [
          "By the time the degenerate era of the universe dawns, low-mass red dwarf stars will have been steadily burning nuclear fuel for hundreds of billions of years.",
          "The Pioneer and Voyager probes will have been drifting through interstellar emptiness for millions of millennia before encountering another stellar system."
        ],
        "exampleTr": [
          "Evrenin dejenere çağı başladığında, düşük kütleli kırmızı cüce yıldızlar yüz milyarlarca yıldır nükleer yakıt yakıyor olmuş olacaklar."
        ],
        "code": "Kozmik Süreç Ufku = will have been burning for billions of years!",
        "visualMemory": "Karanlık uzayda yüz milyarlarca yıldır sönmeyen küçük kırmızı cüce yıldız 🔴✨",
        "commonMistake": "Kozmik zamanı donuk bir geniş zamana hapsetmek.",
        "correctWrongContrast": {
          "wrong": "By then, the star will burn for billions of years.",
          "correct": "By then, the star will have been burning for billions of years.",
          "note": "Gelecekteki o çağa kadar geçen milyarlarca yıllık süreç Future Perfect Continuous ile taçlandırılır.",
          "explanation": "Gelecekteki o çağa kadar geçen milyarlarca yıllık süreç Future Perfect Continuous ile taçlandırılır."
        },
        "differenceFromSimilarTense": "Will burn (yakacak); Will have been burning for eons (milyarlarca yıldır kesintisiz yakıyor olmuş olacak).",
        "levelTactic": "Astrofizik metinlerinde 'By the time ... dawns' ve 'for billions of years' birleşiminde 'will have been V-ing' ara.",
        "miniTest": {
          "question": "By the time the solar core ceases all nuclear fusion, the sun ---- thermonuclear energy into space for approximately ten billion years.",
          "options": [
            "will have been radiating",
            "radiated",
            "had been radiating",
            "was radiating",
            "radiates"
          ],
          "answer": 0,
          "explanation": "'By the time the core ceases (V1)' ve 'for ten billion years' süreci: 'will have been radiating'."
        },
        "explainedAnswer": "Doğru yanıt A (will have been radiating). Güneşin nükleer füzyonunun duracağı ana kadar sürecek 10 milyar yıllık süreç Future Perfect Continuous ile verilir.",
        "signalWords": [
          "will have been radiating for eons",
          "will have been orbiting"
        ]
      },
      "YDS": {
        "title": "ÖSYM'nin 'By + Gelecek Tarih + FOR + Süre' Formülü",
        "basicMeaning": "YDS/YDT'de Future Perfect Continuous'u tek hamlede çözdüren formül: 'By + Gelecek Zaman' + 'for + Süre'.",
        "usages": [
          "By 2030 + for ten years kalıbı",
          "By the time + V1 + for hours/months kalıbı",
          "Seçenek eleme: Soru kökünde 'by next year' ve 'for 20 years' varsa ve fiil dinamikse (work, teach, research) 'will have been V-ing' kesin yanıttır"
        ],
        "nonUsages": [
          "Stative fiiller (understand, know, seem) kesinlikle 'will have been V-ing' ALAMAZ"
        ],
        "positiveFormula": "By next June, the research team will have been conducting clinical trials for five consecutive years.",
        "negativeFormula": "Past Clause + [will have been V-ing KESİNLİKLE YANLIŞTIR]",
        "questionFormula": "How long will the satellite have been transmitting meteorological telemetry by the end of its mission?",
        "shortAnswers": "For over fifteen years.",
        "subjectVerbAgreement": "ÖSYM soru köklerindeki karmaşık heyet ve kurum özneleri.",
        "verbForm": "will have been + V-ing",
        "auxiliaryVerb": "will have been",
        "timeMarkers": [
          "by next December for three years",
          "by 2030 for two decades",
          "by the time he retires for 30 years"
        ],
        "signals": [
          "by ... for ... years",
          "will have been working for"
        ],
        "timeline": "Sınav Sorusu: [Gelecek Hedef: BY 2030] + [Süre: FOR 10 YEARS] ===> will have been V-ing",
        "examples": [
          "By the time she completes her postdoctoral fellowship next autumn, Dr. Miller will have been researching gene therapy for eight years.",
          "By 2030, our environmental institute will have been monitoring deforestation in the Amazon for four consecutive decades."
        ],
        "exampleTr": [
          "Gelecek sonbaharda doktora sonrası bursunu tamamladığında, Dr. Miller sekiz yıldır gen terapisi araştırıyor olmuş olacak."
        ],
        "code": "YDS Formülü: 'BY NEXT ...' + 'FOR ... YEARS' = %100 WILL HAVE BEEN V-ING!",
        "visualMemory": "ÖSYM soru kitapçığında 'By 2030' ve 'for four decades' ifadelerine ok çekilip 'will have been monitoring' şıkkına bağlanması 🎯📄",
        "commonMistake": "'for four decades' gördüğü için hemen 'have been monitoring' (Present) veya 'had been monitoring' (Past) işaretlemek ('By 2030' GELECEKTİR!).",
        "correctWrongContrast": {
          "wrong": "By 2030, they have been working for ten years.",
          "correct": "By 2030, they will have been working for ten years.",
          "note": "2030 gelecekte olduğu için 'will have been working' şarttır.",
          "explanation": "2030 gelecekte olduğu için 'will have been working' şarttır."
        },
        "differenceFromSimilarTense": "By 2010 for 10 years = had been working; By 2030 for 10 years = will have been working. Tarihin geçmiş mi gelecek mi olduğuna dikkat et!",
        "levelTactic": "Soru kökünde 'By + gelecek yıl' (by 2030) VE 'for X years' ikilisi varsa seçeneklerde 'will have been V-ing' ara ve işaretle!",
        "miniTest": {
          "question": "By the time the orbital observatory is decommissioned in 2032, astrophysicists ---- deep space phenomena with its sensors for a quarter of a century.",
          "options": [
            "will have been observing",
            "observed",
            "had been observing",
            "were observing",
            "observe"
          ],
          "answer": 0,
          "explanation": "'By the time ... in 2032' ve 'for a quarter of a century' gelecekteki 25 yıllık süreci bildirir: 'will have been observing'."
        },
        "explainedAnswer": "Doğru yanıt A (will have been observing). 'By 2032 + for a quarter of a century' yapısı doğrudan Future Perfect Continuous gerektirir.",
        "signalWords": [
          "by ... for ... years",
          "will have been working for"
        ]
      }
    }
  },
  {
    "slug": "future-in-the-past",
    "name": "Future in the Past",
    "turkish": "Geçmişteki Gelecek (would / was-were going to)",
    "emoji": "⏪",
    "summary": "Geçmişteki bir noktadan geleceğe bakış, gerçekleşen ve gerçekleşmeyen planlar, 'would / was-were going to / was-were about to' ayrımları.",
    "levels": {
      "A1": {
        "title": "Geçmişteki Niyetler: 'Yapacak Oldum / Yapacaktım'",
        "basicMeaning": "Geçmişte bir şey yapmayı niyet etmiştik ama bir engel çıktı veya olay gerçekleşti/gerçekleşmedi.",
        "usages": [
          "Yapacaktım ama yapamadım (I was going to call you, but my battery died)",
          "Geçmişteki planın iptal olması"
        ],
        "nonUsages": [
          "Bugünkü gelecek planları"
        ],
        "positiveFormula": "Subject + was/were going to + V1",
        "negativeFormula": "Subject + wasn't/weren't going to + V1",
        "questionFormula": "Were you going to tell me about the incident?",
        "shortAnswers": "Yes, I was. / No, I wasn't.",
        "subjectVerbAgreement": "I, he, she, it -> was going to; you, we, they -> were going to.",
        "verbForm": "was/were going to + V1",
        "auxiliaryVerb": "was / were",
        "timeMarkers": [
          "yesterday (ama olmadı)",
          "but then",
          "originally",
          "at that time"
        ],
        "signals": [
          "was going to ... but",
          "intended to but"
        ],
        "timeline": "[Niyet Edildi] ---> [Araya Engel Girdi ❌] ---> [Gerçekleşmedi]",
        "examples": [
          "I was going to visit my friend yesterday, but I had to work late.",
          "They were going to buy the house, but the bank rejected their loan."
        ],
        "exampleTr": [
          "Dün arkadaşımı ziyaret edecektim (was going to visit), ama geç saate kadar çalışmak zorunda kaldım."
        ],
        "code": "Yapacaktım ama olmadı = was/were going to + V1... but!",
        "visualMemory": "Yola çıkmak üzereyken patlayan araba lastiği ve iptal olan seyahat 🚗💥",
        "commonMistake": "'was going to' yerine düz 'went' demek (eylem gerçekleşmedi, sadece niyet vardı!).",
        "correctWrongContrast": {
          "wrong": "I went to call you yesterday, but my phone broke.",
          "correct": "I was going to call you yesterday, but my phone broke.",
          "note": "Arayamadım, niyetim vardı; 'was going to call' kullanılmalıdır.",
          "explanation": "Arayamadım, niyetim vardı; 'was going to call' kullanılmalıdır."
        },
        "differenceFromSimilarTense": "I am going to call (şu anki niyetim, arayacağım); I was going to call (dün arayacaktım ama arayamadım).",
        "levelTactic": "Cümlede 'was/were going to' arkasından genellikle 'but...' ile bir engel/iptal gerekçesi gelir.",
        "miniTest": {
          "question": "We ---- tickets for the concert, but by the time we logged in, they were entirely sold out.",
          "options": [
            "were going to purchase",
            "purchased",
            "have purchased",
            "are purchasing",
            "purchase"
          ],
          "answer": 0,
          "explanation": "'But they were entirely sold out' (ama tükenmişti) ifadesi gerçekleşmeyen niyeti bildirir: 'were going to purchase'."
        },
        "explainedAnswer": "Doğru yanıt A (were going to purchase). Geçmişte niyet edilip engelle karşılaşan eylemler 'was/were going to' ile aktarılır.",
        "signalWords": [
          "was going to ... but",
          "intended to but"
        ]
      },
      "A2": {
        "title": "Dolaylı Anlatımda (Reported Speech) Will -> Would Dönüşümü",
        "basicMeaning": "Birisi geçmişte 'I will help you' dediğinde, bunu aktarırken will'in geçmiş formu olan 'would'a dönüşmesi.",
        "usages": [
          "Said that he would (Yardım edeceğini söyledi)",
          "Promised that she would (Geleceğine söz verdi)"
        ],
        "nonUsages": [
          "Giriş fiili Present olan cümleler (He says he will)"
        ],
        "positiveFormula": "Subject + said / promised + that + Subject + would + V1",
        "negativeFormula": "He promised he wouldn't reveal the source.",
        "questionFormula": "Did she say when she would arrive?",
        "shortAnswers": "She said she would arrive around noon.",
        "subjectVerbAgreement": "Tüm şahıslarda would sabittir.",
        "verbForm": "would + V1",
        "auxiliaryVerb": "would",
        "timeMarkers": [
          "the following day",
          "the next week",
          "subsequently"
        ],
        "signals": [
          "He promised that he would",
          "She said she would"
        ],
        "timeline": "[Geçmişte Söz Verdi] ---> [O güne göre Gelecek Eylem (would V1)]",
        "examples": [
          "The technician promised that he would repair the router by afternoon.",
          "She said that she would email the documents as soon as she reached her hotel."
        ],
        "exampleTr": [
          "Teknisyen, yönlendiriciyi öğleden sonraya kadar onaracağını söyledi (promised ... would repair)."
        ],
        "code": "Geçmişte 'Will' = WOULD + V1 (Said that ... would)!",
        "visualMemory": "Telefonla konuşup 'Yarın geleceğim' diyen ve bunu başkasına aktaran kişi 📞🗣️",
        "commonMistake": "Giriş fiili geçmiş zamanken (said, promised) yan cümleye 'will' koymak (*He said he will come*).",
        "correctWrongContrast": {
          "wrong": "The minister said that the economy will grow.",
          "correct": "The minister said that the economy would grow.",
          "note": "Giriş fiili geçmişte (said) olduğu için 'will' geçmiş formu olan 'would'a dönüşür.",
          "explanation": "Giriş fiili geçmişte (said) olduğu için 'will' geçmiş formu olan 'would'a dönüşür."
        },
        "differenceFromSimilarTense": "He says he will come (bugün söyledi); He said he would come (dün söylemişti).",
        "levelTactic": "Cümle başında 'said that, promised that, knew that, believed that' gibi geçmiş fiil varsa boşlukta 'would + V1' ara.",
        "miniTest": {
          "question": "The contractor promised the homeowners that the renovation work ---- before winter set in.",
          "options": [
            "would conclude",
            "will conclude",
            "concludes",
            "has concluded",
            "is concluding"
          ],
          "answer": 0,
          "explanation": "'Promised' geçmiş zaman olduğu için aktarılan gelecek zaman 'would conclude' olur."
        },
        "explainedAnswer": "Doğru yanıt A (would conclude). Dolaylı anlatımda (reported speech) geçmiş zamanın ardından 'will' yerine 'would' kullanılır.",
        "signalWords": [
          "He promised that he would",
          "She said she would"
        ]
      },
      "B1": {
        "title": "'Was/were about to' (Tam Yapmak Üzereydi ki...)",
        "basicMeaning": "Geçmişte tam bir eyleme başlamak üzereyken, aniden başka bir şeyin araya girip eylemi kesmesi.",
        "usages": [
          "Tam evden çıkmak üzereydim ki telefon çaldı (I was about to leave when the phone rang)",
          "An meselesi olan geçmiş eylemler"
        ],
        "nonUsages": [
          "Uzak geleceğe dönük planlar"
        ],
        "positiveFormula": "Subject + was/were about to + V1 + when + Subject + V2",
        "negativeFormula": "I was not about to surrender without a fight.",
        "questionFormula": "Were you about to sign the document when the irregularity was discovered?",
        "shortAnswers": "Yes, precisely at that moment.",
        "subjectVerbAgreement": "Özneye göre was veya were about to.",
        "verbForm": "was/were about to + V1",
        "auxiliaryVerb": "was / were",
        "timeMarkers": [
          "just as",
          "at that critical second",
          "when suddenly"
        ],
        "signals": [
          "was about to ... when V2",
          "on the verge of"
        ],
        "timeline": "[Tam Başlamak Üzereydi ⏱️] ---> [Kesilme Anı (when V2)]",
        "examples": [
          "The surgeon was about to make the initial incision when the monitor sounded an alarm.",
          "We were about to board the aircraft when ground control issued a storm grounding."
        ],
        "exampleTr": [
          "Cerrah tam ilk kesiyi yapmak üzereydi ki monitör alarm verdi (was about to make)."
        ],
        "code": "Tam Yapmak Üzereydi ki... = was/were about to + V1 when V2!",
        "visualMemory": "Kalemi kağıda değdirmek üzereyken kapının çalınması ✍️🚪",
        "commonMistake": "'was about to' kalıbından sonra fiile -ing eklemek (*was about to leaving*).",
        "correctWrongContrast": {
          "wrong": "He was about to leaving the hall.",
          "correct": "He was about to leave the hall.",
          "note": "'about to' kalıbından sonra fiil daima yalın (V1) gelir.",
          "explanation": "'about to' kalıbından sonra fiil daima yalın (V1) gelir."
        },
        "differenceFromSimilarTense": "Was going to (niyeti vardı); Was about to (eli havadaydı, saniyesi kalmıştı).",
        "levelTactic": "'when + V2'den hemen önce 'tam o saniyede başlamak üzere olma' vurgusu varsa 'was/were about to + V1' seç.",
        "miniTest": {
          "question": "The security operative ---- the emergency lockdown when the false alarm code was transmitted.",
          "options": [
            "was about to initiate",
            "initiated",
            "has initiated",
            "is initiating",
            "initiates"
          ],
          "answer": 0,
          "explanation": "Tam başlatmak üzereyken araya giren olay: 'was about to initiate'."
        },
        "explainedAnswer": "Doğru yanıt A (was about to initiate). Geçmişte tam gerçekleşmek üzereyken kesilen eylemler 'was about to + V1' ile aktarılır.",
        "signalWords": [
          "was about to ... when V2",
          "on the verge of"
        ]
      },
      "B2": {
        "title": "Resmi Kader/Görev Kalıbı: 'Was/were to + V1' ve Gerçekleşmeyen Planlar",
        "basicMeaning": "Resmi protokol veya kader gereği gerçekleşmesi kararlaştırılmış olaylar ('was to become') ve 'was to have V3' (yapacaktı ama yapamadı).",
        "usages": [
          "Kader/Tarihsel rol (He was to become the first president = İleride ilk başkan olacaktı)",
          "Resmi görev (The inspectors were to audit the branch)",
          "Gerçekleşmeyen resmi plan (He was to have met the ambassador, but fell ill)"
        ],
        "nonUsages": [
          "Sıradan günlük gayriresmi niyetler"
        ],
        "positiveFormula": "Subject + was/were to + V1 (Kader/Plan) / was/were to have + V3 (Gerçekleşmedi)",
        "negativeFormula": "The sensitive treaty details were not to be disclosed to the press.",
        "questionFormula": "Who was to lead the expedition following the commander's demise?",
        "shortAnswers": "The senior navigator was designated.",
        "subjectVerbAgreement": "Özneye göre was veya were to.",
        "verbForm": "was/were to + V1 / was/were to have + V3",
        "auxiliaryVerb": "was / were",
        "timeMarkers": [
          "in later years",
          "ultimately",
          "as destiny willed",
          "officially designated"
        ],
        "signals": [
          "was to become",
          "were to have met but"
        ],
        "timeline": "Tarihsel Çizgi: [O An] ---> [İleride Olacağı Mukadder Eylem (was to become)]",
        "examples": [
          "Little did the young officer know that he was to become the supreme commander of allied forces.",
          "The envoys were to have signed the peace accord on Monday, but hostilities resumed."
        ],
        "exampleTr": [
          "Genç subay, ileride müttefik kuvvetlerin başkomutanı olacağını (was to become) henüz bilmiyordu."
        ],
        "code": "Tarihsel Mukadderat = was to become! Gerçekleşmeyen Resmi Plan = was to have V3!",
        "visualMemory": "Geleceğin büyük liderinin gençlik fotoğrafı ve apoletleri 🎖️📜",
        "commonMistake": "'was to become' yapısını basit geçmiş sanmak (Bu yapı 'gelecekte öyle olacaktı' anlamı taşır).",
        "correctWrongContrast": {
          "wrong": "He was to signed the document.",
          "correct": "He was to sign the document / He was to have signed the document.",
          "note": "'was to' arkasından yalın fiil veya 'have V3' alır.",
          "explanation": "'was to' arkasından yalın fiil veya 'have V3' alır."
        },
        "differenceFromSimilarTense": "Became (oldu); Was to become (o sırada henüz olmamıştı, ileride olacaktı).",
        "levelTactic": "Biyografi ve tarih metinlerinde 'little did he know that he was to...' kalıbına dikkat et.",
        "miniTest": {
          "question": "The young scientist made an incidental observation that ---- the foundational paradigm of quantum chemistry in later decades.",
          "options": [
            "was to revolutionize",
            "revolutionizes",
            "has revolutionized",
            "is revolutionizing",
            "was revolutionized"
          ],
          "answer": 0,
          "explanation": "İlerideki on yıllarda devrim yaratacağı mukadder olan keşif: 'was to revolutionize'."
        },
        "explainedAnswer": "Doğru yanıt A (was to revolutionize). Geçmişten bakıldığında ileride gerçekleşeceği kesinleşmiş tarihsel yazgı 'was/were to + V1' ile verilir.",
        "signalWords": [
          "was to become",
          "were to have met but"
        ]
      },
      "C1": {
        "title": "Tarihsel Kırılma Öncesi İronik Bilgisizlik (Dramatic Irony)",
        "basicMeaning": "Tarih yazımında aktörlerin henüz yaklaşan felaketten habersiz bir şekilde plan yapmaları (Little did they suspect what would unfold).",
        "usages": [
          "Dramatik ironi (They did not know that the war would break out within hours)",
          "Tarihçinin geriye dönük üstten bakışı"
        ],
        "nonUsages": [
          "Gündelik sıradan dedikodular"
        ],
        "positiveFormula": "Little did the cabinet suspect that the crisis would escalate into total war.",
        "negativeFormula": "Economists did not anticipate that the stock market would collapse so precipitously.",
        "questionFormula": "How could the generals foresee that the offensive would falter in the winter snows?",
        "shortAnswers": "They had misjudged logistical constraints.",
        "subjectVerbAgreement": "Özne ile would uyumu.",
        "verbForm": "would + V1",
        "auxiliaryVerb": "would / did",
        "timeMarkers": [
          "little did they realize",
          "unbeknownst to the delegates",
          "within mere days"
        ],
        "signals": [
          "little did they suspect that ... would",
          "unforeseen outcome"
        ],
        "timeline": "Aktörlerin habersizliği [O Gün] ===> Yaklaşan Kaçınılmaz Felaket (would unfold) 🌪️",
        "examples": [
          "Little did the vacationers suspect that the peaceful tropical morning would culminate in a devastating tsunami.",
          "The treaty architects believed that the covenant would guarantee enduring peace across the continent."
        ],
        "exampleTr": [
          "Tatilciler, o huzurlu tropik sabahın yıkıcı bir tsunamiyle sonuçlanacağını (would culminate) akıllarından bile geçirmiyorlardı."
        ],
        "code": "Dramatik Tarihsel İroni = Little did they suspect that ... WOULD + V1!",
        "visualMemory": "Güneşli sahilde dinlenen tatilciler ve ufukta yaklaşan dev tsunami dalgası 🏖️🌊",
        "commonMistake": "Geçmişteki bu habersizlik cümlesine günümüzün 'will'ini koymak (*Little did they know that it will happen*).",
        "correctWrongContrast": {
          "wrong": "They did not know that the empire will collapse.",
          "correct": "They did not know that the empire would collapse.",
          "note": "'did not know' geçmiştedir; empire'dan sonra 'would collapse' gelmelidir.",
          "explanation": "'did not know' geçmiştedir; empire'dan sonra 'would collapse' gelmelidir."
        },
        "differenceFromSimilarTense": "Will collapse (bugünkü tahmin); Would collapse (geçmişte onların bilmediği ama sonradan gerçekleşen akıbet).",
        "levelTactic": "'Little did they know / suspect / realize that' kalıbının that cümlesinde mutlaka 'would + V1' ara.",
        "miniTest": {
          "question": "Unbeknownst to the imperial court, the minor border skirmish ---- an all-consuming continental war.",
          "options": [
            "would ignite",
            "will ignite",
            "ignites",
            "has ignited",
            "is igniting"
          ],
          "answer": 0,
          "explanation": "Sarayın habersiz olduğu geçmişteki gelecek olay: 'would ignite'."
        },
        "explainedAnswer": "Doğru yanıt A (would ignite). Geçmişteki aktörlerin göremediği gelecek gelişmeler 'would + V1' ile aktarılır.",
        "signalWords": [
          "little did they suspect that ... would",
          "unforeseen outcome"
        ]
      },
      "C2": {
        "title": "Metinlerarası Anlatıbilim ve İleriye Bakış (Prolepsis / Flashforward)",
        "basicMeaning": "Edebi anlatıbilimde yazarın geçmiş hikayeyi anlatırken aniden bir cümleyle geleceğe sıçrayıp karakterin ilerideki akıbetini haber vermesi (prolepsis).",
        "usages": [
          "Edebi prolepsis / flashforward (Years later, he would remember that cold afternoon)",
          "Anlatıcının zamansal manipülasyonu"
        ],
        "nonUsages": [
          "Kuru teknik kullanım kılavuzları"
        ],
        "positiveFormula": "Many years later, facing the firing squad, Colonel Aureliano Buendía was to remember...",
        "negativeFormula": "He was never to see his homeland again.",
        "questionFormula": "How does the narrator utilize proleptic displacement in the prologue?",
        "shortAnswers": "By anticipating the protagonist's eventual tragic downfall.",
        "subjectVerbAgreement": "Edebi anlatıcı özneleri.",
        "verbForm": "would + V1 / was to + V1 / was never to + V1",
        "auxiliaryVerb": "would / was to",
        "timeMarkers": [
          "many years later",
          "decades hence",
          "in the fullness of time",
          "never again"
        ],
        "signals": [
          "years later he would recall",
          "he was never to see again"
        ],
        "timeline": "Anlatı Zamanı ---> [İlerideki Hafıza Noktasına Sıçrama (Flashforward)] ⏪⏩",
        "examples": [
          "Decades later, looking back upon his youth, the philosopher would acknowledge that this single failure was his greatest teacher.",
          "The exiled prince was never to set foot in his ancestral palace again."
        ],
        "exampleTr": [
          "On yıllar sonra, gençliğine dönüp baktığında filozof, bu tek başarısızlığın kendisinin en büyük öğretmeni olduğunu kabul edecekti (would acknowledge)."
        ],
        "code": "Edebi İleriye Sıçrama = Years later, he would recall / was never to see!",
        "visualMemory": "Yıllar sonra yaşlanmış bir adamın eski bir siyah-beyaz fotoğrafa bakıp anıları hatırlaması 👴🖼️",
        "commonMistake": "Edebi geleceğe sıçramayı basit 'remembered' ile düzleştirmek.",
        "correctWrongContrast": {
          "wrong": "He never saw his family again. (Düz)",
          "correct": "He was never to see his family again. (Edebi ve dokunaklı kader)",
          "note": "'was never to see' edebi anlatıda kaçınılmaz ayrılık kaderini mükemmel yansıtır.",
          "explanation": "'was never to see' edebi anlatıda kaçınılmaz ayrılık kaderini mükemmel yansıtır."
        },
        "differenceFromSimilarTense": "He didn't see (görmedi); He was never to see again (bir daha asla göremeyecekti - kader hükmü).",
        "levelTactic": "'Years later, he would remember...' veya 'He was never to return...' gibi edebi kader yapılarında would / was to ara.",
        "miniTest": {
          "question": "Though the young artist sold no paintings in Paris, decades later the global art market ---- his canvases at astronomical prices.",
          "options": [
            "would appraise",
            "will appraise",
            "appraises",
            "has appraised",
            "is appraising"
          ],
          "answer": 0,
          "explanation": "Gençliğindeki sefaletine karşılık on yıllar sonra gerçekleşecek edebi sıçrama: 'would appraise'."
        },
        "explainedAnswer": "Doğru yanıt A (would appraise). Anlatıbilimde geçmişten geleceğe bakış 'would + V1' ile kurulur.",
        "signalWords": [
          "years later he would recall",
          "he was never to see again"
        ]
      },
      "YDS": {
        "title": "ÖSYM'nin 'Said that ... would' ve 'Was going to ... but' Şablonları",
        "basicMeaning": "YDS/YDT'de Future in the Past sorularının iki temel çıkış şekli: 1) Geçmiş girişli aktarma (said/believed that ... WOULD), 2) Yarım kalan niyet (WAS GOING TO ... BUT).",
        "usages": [
          "Past giriş fiili (claimed, predicted, assumed) + that + WOULD V1",
          "Was/were going to + but (yapacaktı ama yapamadı)",
          "Seçenek eleme: Cümle başı Past ise şıklardaki will'leri ele, yerine would ara"
        ],
        "nonUsages": [
          "Geçmiş giriş fiilinin arkasına doğrudan 'will' veya 'is going to' koymak KESİNLİKLE ELENİR"
        ],
        "positiveFormula": "Economists predicted that inflation would subside, but geopolitical tensions intervened.",
        "negativeFormula": "Past Clause + [will / is going to UYUMSUZDUR]",
        "questionFormula": "Did the military high command assume that the offensive would collapse?",
        "shortAnswers": "No, they expected rapid success.",
        "subjectVerbAgreement": "ÖSYM soru köklerindeki karmaşık özne dizilimlerinde would uyumu.",
        "verbForm": "would + V1 / was-were going to + V1",
        "auxiliaryVerb": "would / was / were",
        "timeMarkers": [
          "at the time of the announcement",
          "originally",
          "subsequently",
          "prior to the setback"
        ],
        "signals": [
          "believed that it would",
          "was going to ... but",
          "predicted that ... would"
        ],
        "timeline": "Sınav Sorusu: [Geçmiş Giriş Fiili (V2)] ===> THAT ===> WOULD + V1",
        "examples": [
          "The central bank governor stated that interest rates would remain stable throughout the fiscal quarter.",
          "The engineering consortium was going to commence drilling in spring, but environmental litigation delayed the project."
        ],
        "exampleTr": [
          "Merkez bankası başkanı, faiz oranlarının mali çeyrek boyunca sabit kalacağını (would remain) belirtti."
        ],
        "code": "YDS Parolası: 'PAST GİRİŞ (stated, predicted, believed) THAT' = WOULD + V1!",
        "visualMemory": "ÖSYM kitapçığında 'predicted that' altını çizip seçeneklerdeki 'will'i eleyip 'would'a yönelme anı 🎯📄",
        "commonMistake": "Giriş fiili 'predicted' (geçmiş) olduğu halde şıklardaki 'will'e atlamak (Geçmişin geleceği WOULD'dur!).",
        "correctWrongContrast": {
          "wrong": "The meteorologists warned that a typhoon will strike the archipelago.",
          "correct": "The meteorologists warned that a typhoon would strike the archipelago.",
          "note": "'warned' geçmiştedir; bu yüzden 'will' değil 'would' kullanılır.",
          "explanation": "'warned' geçmiştedir; bu yüzden 'will' değil 'would' kullanılır."
        },
        "differenceFromSimilarTense": "Predicts that ... will; Predicted that ... would. Ana fiilin zamanı tüm cümleyi belirler!",
        "levelTactic": "Soru kökünde 'stated that, assumed that, hoped that, predicted that' gibi geçmiş fiil görürsen, that'in arkasındaki boşlukta 'would + V1' ara, tüm will'leri ele!",
        "miniTest": {
          "question": "When the energy crisis emerged in the 1970s, many policymakers believed that nuclear fission ---- the primary global power source by the turn of the century.",
          "options": [
            "would become",
            "will become",
            "becomes",
            "has become",
            "is becoming"
          ],
          "answer": 0,
          "explanation": "'In the 1970s, policymakers believed that' geçmiş giriş fiilidir; aktarılan gelecek 'would become' olmalıdır."
        },
        "explainedAnswer": "Doğru yanıt A (would become). Geçmişteki inanç ve tahminler dolaylı aktarımda 'would + V1' gerektirir.",
        "signalWords": [
          "believed that it would",
          "was going to ... but",
          "predicted that ... would"
        ]
      }
    }
  },
  {
    "slug": "used-to-would",
    "name": "Used to & Would",
    "turkish": "Geçmiş Alışkanlıklar ve Durumlar",
    "emoji": "📜",
    "summary": "Eski alışkanlıklar ve durumlar: used to (hem durum hem eylem), would (yalnızca tekrarlanan eylem, asla durum fiili almaz) ve be/get used to tuzakları.",
    "levels": {
      "A1": {
        "title": "Artık Yapılmayan Eski Alışkanlıklar (used to)",
        "basicMeaning": "Eskiden yapardım ama artık yapmıyorum (I used to play tennis, but now I don't).",
        "usages": [
          "Çocukluk alışkanlıkları (When I was young, I used to ride my bike every day)",
          "Artık geçerli olmayan eski huylar"
        ],
        "nonUsages": [
          "Bugün hala devam etmekte olan alışkanlıklar"
        ],
        "positiveFormula": "Subject + used to + V1",
        "negativeFormula": "Subject + didn't use to + V1",
        "questionFormula": "Did + Subject + use to + V1?",
        "shortAnswers": "Yes, I did. / No, I didn't.",
        "subjectVerbAgreement": "Tüm şahıslarda 'used to' aynıdır.",
        "verbForm": "used to + V1 (olumsuz/soruda: didn't use to + V1).",
        "auxiliaryVerb": "did / used to",
        "timeMarkers": [
          "when I was a child",
          "in my youth",
          "years ago",
          "no longer",
          "anymore"
        ],
        "signals": [
          "used to ... but now",
          "no longer does it"
        ],
        "timeline": "[Eskiden Sürekli Yapılırdı] ---> [Bitti ❌] ---> [Bugün Yapılmıyor]",
        "examples": [
          "I used to drink whole milk, but now I prefer almond milk.",
          "He didn't use to exercise, but now he goes to the gym daily."
        ],
        "exampleTr": [
          "Eskiden yağlı süt içerdim (used to drink), ama artık badem sütü tercih ediyorum."
        ],
        "code": "Eskiden Yapardım (Artık Yok) = used to + V1!",
        "visualMemory": "Eski çocukluk bisikleti tavan arasında dururken kapıda duran yeni araba 🚲🚗",
        "commonMistake": "'didn't' varken -d harfini silmeyi unutmak (*didn't used to* -> didn't use to olmalıdır).",
        "correctWrongContrast": {
          "wrong": "I didn't used to like vegetables.",
          "correct": "I didn't use to like vegetables.",
          "note": "'didn't' yardımcı fiilinden sonra 'use to' yalın yazılır.",
          "explanation": "'didn't' yardımcı fiilinden sonra 'use to' yalın yazılır."
        },
        "differenceFromSimilarTense": "I played tennis yesterday (tek bir dünkü maç); I used to play tennis (eskiden düzenli oynardım, bıraktım).",
        "levelTactic": "Cümlede '... but now I don't' veya '... but now he prefers' gibi zıtlık varsa 'used to + V1' seç.",
        "miniTest": {
          "question": "My grandfather ---- long walks along the coastline every morning, but now his mobility is restricted.",
          "options": [
            "used to take",
            "is used to taking",
            "uses to take",
            "was taken",
            "has taken"
          ],
          "answer": 0,
          "explanation": "'... but now his mobility is restricted' geçmişteki terk edilmiş alışkanlığı bildirir: 'used to take'."
        },
        "explainedAnswer": "Doğru yanıt A (used to take). Artık devam etmeyen eski alışkanlıklar 'used to + V1' ile verilir.",
        "signalWords": [
          "used to ... but now",
          "no longer does it"
        ]
      },
      "A2": {
        "title": "Geçmiş Durumlar (States): 'Used to' vs 'Would' Ayrımı",
        "basicMeaning": "En kritik kural: 'Used to' hem durum fiilleriyle (live, be, have, believe) hem de eylemlerle kullanılır; 'Would' ise ASLA durum fiili ALMAZ!",
        "usages": [
          "Used to be / have / live / believe (Geçmiş durumlar: I used to live in Paris - burada would kullanılmaz!)",
          "Would + action verb (Geçmiş eylemler: Every summer we would swim in the lake)"
        ],
        "nonUsages": [
          "*I would live in Paris* (KESİNLİKLE YANLIŞTIR; live durumdur, would alamaz!)"
        ],
        "positiveFormula": "Durum: S + used to + be/have/live | Eylem: S + would / used to + swim/run",
        "negativeFormula": "Subject + didn't use to be so crowded.",
        "questionFormula": "Did there use to be a cinema on this street?",
        "shortAnswers": "Yes, there used to be.",
        "subjectVerbAgreement": "Tüm şahıslarda used to / would değişmez.",
        "verbForm": "used to + V1 / would + V1 (yalnızca eylem)",
        "auxiliaryVerb": "did / used to / would",
        "timeMarkers": [
          "in the past",
          "decades ago",
          "when we lived in the countryside"
        ],
        "signals": [
          "used to live (never would live)",
          "would go every summer"
        ],
        "timeline": "Kalıcı Durum Kutusu [Eskiden orada yaşardım] vs Tekrarlanan Eylem [Yazları yüzerdik].",
        "examples": [
          "There used to be a historic library on this corner (DURUM: would be ASLA OLMAZ!).",
          "Every Sunday, my grandmother would bake fresh apple pies for the whole family (EYLEM: would bake uygundur)."
        ],
        "exampleTr": [
          "Bu köşede tarihi bir kütüphane bulunurdu (used to be)."
        ],
        "code": "YDS Altın Kuralı: WOULD durum fiili (be, have, live, know) ALMAZ! Sadece USED TO alır!",
        "visualMemory": "Taş bina (DURUM = used to be) vs Gölde yüzen çocuklar (EYLEM = would swim) 🏛️🏊‍♂️",
        "commonMistake": "Durum fiilinin önüne 'would' koymak (*I would have long hair when I was 15* YANLIŞTIR -> I used to have DOĞRUDUR).",
        "correctWrongContrast": {
          "wrong": "He would live in London when he was young.",
          "correct": "He used to live in London when he was young.",
          "note": "'live' durum fiilidir; geçmiş durumlar için 'would' asla kullanılmaz, 'used to' kullanılır.",
          "explanation": "'live' durum fiilidir; geçmiş durumlar için 'would' asla kullanılmaz, 'used to' kullanılır."
        },
        "differenceFromSimilarTense": "Used to = Eylem + Durum; Would = YALNIZCA Eylem.",
        "levelTactic": "Boşluktan sonraki fiile bak: 'be, have, live, belong, know, like' gibi bir durum fiili varsa seçeneklerdeki tüm 'would'ları hemen ele, 'used to' seç!",
        "miniTest": {
          "question": "This quiet coastal hamlet ---- a bustling fishing port before the modern shipping terminal was erected.",
          "options": [
            "used to be",
            "would be",
            "is used to being",
            "was used to be",
            "uses to be"
          ],
          "answer": 0,
          "explanation": "'be' durum fiilidir; durum bildiren geçmiş hallerde 'would be' YANLIŞTIR, 'used to be' TEK DOĞRUDUR."
        },
        "explainedAnswer": "Doğru yanıt A (used to be). Durum fiilleri (be, have, live) geçmiş alışkanlık anlamında 'would' alamaz; 'used to' zorunludur.",
        "signalWords": [
          "used to live (never would live)",
          "would go every summer"
        ]
      },
      "B1": {
        "title": "En Büyük Sınav Tuzağı: 'Used to' vs 'Be/Get used to'",
        "basicMeaning": "Üç yapının birbiriyle karıştırılmaması: 1) used to + V1 (eskiden yapardım), 2) be used to + V-ing/noun (alışkın olmak), 3) get used to + V-ing/noun (alışmak).",
        "usages": [
          "used to + V1 (Eski alışkanlık: I used to wake up early)",
          "be used to + V-ing (Alışkınım: I am used to waking up early)",
          "get used to + V-ing (Alışıyorum: I am getting used to waking up early)"
        ],
        "nonUsages": [
          "*be used to + V1* (bu yapı 'kullanılmak' pasifidir; alışkın olmak anlamına gelmez!)"
        ],
        "positiveFormula": "Eski Alışkanlık: used to + V1 | Alışkın Olmak: am/is/are used to + V-ing",
        "negativeFormula": "I cannot get used to living in such a noisy city.",
        "questionFormula": "Are you used to driving on the left side of the road in the UK?",
        "shortAnswers": "Yes, I am completely used to it now.",
        "subjectVerbAgreement": "Be used to yapısında özneye göre am/is/are çekimlenir.",
        "verbForm": "used to + V1 vs be used to + V-ing / noun",
        "auxiliaryVerb": "be / get",
        "timeMarkers": [
          "gradually",
          "nowadays",
          "after a few months",
          "initially difficult but"
        ],
        "signals": [
          "am used to + V-ing",
          "get used to + V-ing",
          "accustomed to"
        ],
        "timeline": "Eski Alışkanlık (Bitti) vs Bugün Uyum Sağlanmış Alışkanlık (Devam Ediyor).",
        "examples": [
          "I used to drive an old manual car (artık kullanmıyorum).",
          "I am used to driving in heavy Istanbul traffic (trafikte sürmeye alışkınım).",
          "Solar panels are used to generate electricity (buradaki anlam: elektrik üretmek İÇİN KULLANILIR - Pasif)."
        ],
        "exampleTr": [
          "İngiltere'ye taşındığında soldan araba sürmeye alışmakta zorlandı."
        ],
        "code": "Önünde 'am/is/are' VARSA arkasına V-ING gelir (Alışkınım)! Önünde hiçbir şey YOKSA arkasına V1 gelir (Eskiden yapardım)!",
        "visualMemory": "Alışılmış baharatlı yemek yerken gülümseyen adam 🌶️😋 vs Eski bisiklet 🚲",
        "commonMistake": "'am used to' kalıbından sonra yalın fiil koymak (*I am used to wake up early*).",
        "correctWrongContrast": {
          "wrong": "She is used to live alone.",
          "correct": "She is used to living alone / She used to live alone.",
          "note": "'is used to' alışkın olmak anlamındaysa V-ing (living) alır; eskiden yaşardı anlamındaysa 'used to live' olur.",
          "explanation": "'is used to' alışkın olmak anlamındaysa V-ing (living) alır; eskiden yaşardı anlamındaysa 'used to live' olur."
        },
        "differenceFromSimilarTense": "Used to live (eskiden yaşardı); Is used to living (yalnız yaşamaya şu an alışkındır).",
        "levelTactic": "Boşluğun önünde 'am, is, are, was, were, get, got' var mı bak: Varsa arkasında V-ing veya isim ara. Yoksa yalın V1 ara.",
        "miniTest": {
          "question": "Although the subarctic climate was harsh at first, the research expedition personnel soon got used to ---- in subzero temperatures.",
          "options": [
            "working",
            "work",
            "worked",
            "have worked",
            "be worked"
          ],
          "answer": 0,
          "explanation": "'got used to' kalıbı alışma sürecini ifade eder ve arkasından 'V-ing' (working) alır."
        },
        "explainedAnswer": "Doğru yanıt A (working). 'Get used to' kalıbı gerund (V-ing) veya isim ile tamamlanır.",
        "signalWords": [
          "am used to + V-ing",
          "get used to + V-ing",
          "accustomed to"
        ]
      },
      "B2": {
        "title": "Nostaljik Anlatıda 'Would' Akışı ve Sahne Kurulumu",
        "basicMeaning": "Edebiyatta veya hatıratlarda sahne önce 'used to' veya Simple Past ile kurulur; ardından tekrarlanan tatlı nostaljik anılar 'would' ile akar.",
        "usages": [
          "Çocukluk hatıralarının peş peşe sıralanması (We lived in a cottage. Every morning my father would take us to the river...)",
          "Nostaljik edebi üslup"
        ],
        "nonUsages": [
          "Sahneyi sıfırdan kurarken tek başına pat diye durum fiiliyle would başlatmak"
        ],
        "positiveFormula": "Past Setting [Simple Past / Used to] ---> Nostalgic actions [would + V1, would + V1]",
        "negativeFormula": "He wouldn't say a word until his coffee was served.",
        "questionFormula": "Would your grandfather sit on the porch and tell war stories?",
        "shortAnswers": "Yes, he would do that for hours.",
        "subjectVerbAgreement": "Tüm şahıslarda would değişmez.",
        "verbForm": "would + V1 (yalnızca tekrarlı eylemler)",
        "auxiliaryVerb": "would",
        "timeMarkers": [
          "in those idyllic summers",
          "every evening without fail",
          "whenever we visited"
        ],
        "signals": [
          "Whenever we visited, he would",
          "nostalgic narrative"
        ],
        "timeline": "Geçmişin altın çağında tekrar tekrar yinelenen tatlı ritüeller 🌅",
        "examples": [
          "When we were children, our family spent summers in the mountains. Every dawn, my grandfather would wake us up, and we would hike up to the pine ridge.",
          "Whenever rain began to fall, the old poet would sit by the window and draft verses."
        ],
        "exampleTr": [
          "Çocukken ailemiz yazları dağlarda geçirirdi. Her şafakta büyükbabam bizi uyandırır ve çam sırtına doğru yürüyüş yapardık."
        ],
        "code": "Nostaljik Hatırat = Sahne kurulur (Past), ardından tatlı anılar 'would V1' ile akar!",
        "visualMemory": "Şömine başında torunlarına eski anılarını anlatan tonton dede 🪵🔥👴",
        "commonMistake": "'would'u sadece 'yapacaktı' veya 'şart (if)' sanıp nostaljik geçmiş alışkanlık anlamını unutmak.",
        "correctWrongContrast": {
          "wrong": "Every summer we would be happy. (Durum fiiliyle would olmaz)",
          "correct": "Every summer we used to be happy / Every summer we would smile happily.",
          "note": "'be' durumdur would alamaz; 'smile' eylemdir would alabilir.",
          "explanation": "'be' durumdur would alamaz; 'smile' eylemdir would alabilir."
        },
        "differenceFromSimilarTense": "Used to soğuk ve tarafsız bir gerçektir; Would nostaljik, sıcak ve tekrarlanan bir ritüel hissiyatı verir.",
        "levelTactic": "Paragraf veya okuma parçalarında geçmiş anıları duygusal tonda anlatan 'would + eylem fiili' yapılarını tanı.",
        "miniTest": {
          "question": "Whenever our research team encountered an algorithmic impasse, our mentor ---- us out for coffee and patiently walk us through the logic.",
          "options": [
            "would take",
            "takes",
            "has taken",
            "is taking",
            "will take"
          ],
          "answer": 0,
          "explanation": "'Whenever our team encountered (V2)' geçmiş bir ritüeli anlatır; nostaljik/alışkanlık eylemi 'would take' ile verilir."
        },
        "explainedAnswer": "Doğru yanıt A (would take). Geçmişte tekrarlanan ritüel ve alışkanlıklar 'would + V1' ile aktarılır.",
        "signalWords": [
          "Whenever we visited, he would",
          "nostalgic narrative"
        ]
      },
      "C1": {
        "title": "Tarihsel Zanaat ve Geleneksel Lonca Pratikleri",
        "basicMeaning": "Sanayileşme öncesi zanaatkarların, loncaların ve kabilelerin nesiller boyu sürdürdüğü pratikler.",
        "usages": [
          "Geleneksel üretim yöntemleri (Guild masters would inspect every apprentice's work)",
          "Kabile ritüelleri"
        ],
        "nonUsages": [
          "Modern fabrikaların otomatik seri üretimi"
        ],
        "positiveFormula": "Traditional artisans would temper the steel using organic oils...",
        "negativeFormula": "Guild regulations would not permit substandard materials.",
        "questionFormula": "How would medieval masons verify the structural integrity of cathedral arches?",
        "shortAnswers": "Through weighted plumb-lines and geometric ratios.",
        "subjectVerbAgreement": "Tarihsel kolektif zanaat özneleri.",
        "verbForm": "would + V1 (tekrarlı mesleki eylem)",
        "auxiliaryVerb": "would / used to",
        "timeMarkers": [
          "in traditional guilds",
          "generation after generation",
          "prior to mechanical automation"
        ],
        "signals": [
          "artisans would craft",
          "elders would convene"
        ],
        "timeline": "Asırlar boyu aynı titizlikle tekrarlanan geleneksel zanaat döngüsü ⚒️📜",
        "examples": [
          "Before the advent of synthetic dyes, textile masters would extract indigo pigment through a meticulous fermentation process.",
          "Village elders would assemble under the sacred banyan tree whenever communal disputes arose."
        ],
        "exampleTr": [
          "Sentetik boyaların ortaya çıkışından önce, tekstil ustaları çivit pigmentini titiz bir fermantasyon süreciyle çıkarırlardı (would extract)."
        ],
        "code": "Tarihsel Geleneksel Ritüel = Guild masters would inspect / extract!",
        "visualMemory": "Demirci ocağında örse çekiç vuran ortaçağ demircisi ⚒️🔥",
        "commonMistake": "Tarihsel tekrarlanan zanaat pratiklerini tekil bir anlık eylem gibi görmek.",
        "correctWrongContrast": {
          "wrong": "In the Middle Ages, scribes would be patient. (Durum fiili!)",
          "correct": "In the Middle Ages, scribes used to be patient / scribes would illuminate manuscripts for months.",
          "note": "Durum fiilinde used to; eylem fiilinde (illuminate) would kullanılır.",
          "explanation": "Durum fiilinde used to; eylem fiilinde (illuminate) would kullanılır."
        },
        "differenceFromSimilarTense": "Extracted (bir kere çıkardı); Would extract (geleneksel olarak her defasında öyle çıkarırlardı).",
        "levelTactic": "Tarih ve antropoloji metinlerinde eski toplumların adetlerini ve geleneksel meslek yöntemlerini anlatan 'would + V1' yapılarını ara.",
        "miniTest": {
          "question": "Prior to the mechanization of the printing trade, master typesetters ---- each lead character by hand with extraordinary dexterity.",
          "options": [
            "would arrange",
            "arranged to",
            "have arranged",
            "are arranging",
            "will arrange"
          ],
          "answer": 0,
          "explanation": "Matbaanın makineleşmesinden önceki tekrarlı geleneksel zanaat pratiği: 'would arrange'."
        },
        "explainedAnswer": "Doğru yanıt A (would arrange). Sanayi öncesi geleneksel zanaat alışkanlıkları 'would + V1' ile ifade edilir.",
        "signalWords": [
          "artisans would craft",
          "elders would convene"
        ]
      },
      "C2": {
        "title": "Edebi Pastoralizm ve Kayıp Masumiyet Çağı Tasviri",
        "basicMeaning": "Edebiyatta pastoral manzaraların, yitirilmiş kır hayatının ve bozulmamış altın çağın hüzünlü ve lirik bir dille yeniden üretilmesi.",
        "usages": [
          "Kayıp altın çağ tasviri",
          "Karakterlerin geçmiş masumiyet anılarının lirik akışı"
        ],
        "nonUsages": [
          "Distopik gelecek kurguları"
        ],
        "positiveFormula": "At twilight, shepherds would gather on the slopes and play rustic flutes...",
        "negativeFormula": "No discordant mechanical rumble would disturb the tranquility of the valley.",
        "questionFormula": "How does the poet evoke the lost pastoral paradise?",
        "shortAnswers": "Through iterative vignettes of communal agrarian rituals.",
        "subjectVerbAgreement": "Lirik ve pastoral özneler.",
        "verbForm": "would + V1 (lirik tekrarlı eylemler)",
        "auxiliaryVerb": "would",
        "timeMarkers": [
          "in that unblemished epoch",
          "at the close of each harvest day",
          "in pastoral tranquility"
        ],
        "signals": [
          "shepherds would gather",
          "bells would chime softly"
        ],
        "timeline": "Zamanın yavaş aktığı pastoral cennet tablosu 🌾🐑",
        "examples": [
          "At the close of each harvest day, village maidens would weave floral garlands and sing ancient folk laments by the stream.",
          "The reclusive hermit would watch the seasonal migration of storks across the amber sky, finding solace in their eternal return."
        ],
        "exampleTr": [
          "Her hasat gününün sonunda, köyün genç kızları derenin kenarında çiçekten çelenkler örer ve kadim halk ağıtları söylerlerdi (would weave and sing)."
        ],
        "code": "Pastoral Lirik Alışkanlık = would weave / would sing / would watch!",
        "visualMemory": "Günbatımında buğday tarlasında flüt çalan çoban ve gökyüzünde süzülen leylekler 🌾🎶",
        "commonMistake": "Lirik ve edebi tekrarları basit geçmiş zamanın kuraklığına hapsetmek.",
        "correctWrongContrast": {
          "wrong": "They sang songs every day.",
          "correct": "They would sing ancient ballads as the sun dipped behind the hills.",
          "note": "Edebi ve şiirsel metinlerde 'would + V1' geçmişin duygusal melodisini kurar.",
          "explanation": "Edebi ve şiirsel metinlerde 'would + V1' geçmişin duygusal melodisini kurar."
        },
        "differenceFromSimilarTense": "Used to kuru bir gerçektir (eskiden söylerlerdi); Would lirik bir hatıradır (her günbatımında söylerlerdi).",
        "levelTactic": "Roman veya edebi deneme parçalarında geçmişin pastoral ve huzurlu ritüellerini aktaran 'would + V1' kalıbına dikkat et.",
        "miniTest": {
          "question": "In the secluded valley, far from urban turmoil, monastic scribes ---- sacred scriptures from dawn until candlelight flickered out.",
          "options": [
            "would transcribe",
            "transcribes",
            "have transcribed",
            "are transcribing",
            "will transcribe"
          ],
          "answer": 0,
          "explanation": "Manastırdaki keşişlerin geçmişteki huzurlu ve lirik günlük yazı ritüeli: 'would transcribe'."
        },
        "explainedAnswer": "Doğru yanıt A (would transcribe). Edebi ve pastoral geçmiş ritüeller 'would + V1' ile aktarılır.",
        "signalWords": [
          "shepherds would gather",
          "bells would chime softly"
        ]
      },
      "YDS": {
        "title": "ÖSYM'nin 'Used to vs Would' Tuzak Sorusu ve Stative Fiil Elemesi",
        "basicMeaning": "YDS/YDT'de soru kökünde geçmiş durum fiili (be, have, believe, exist) varsa 'would' ELENİR, 'used to' SEÇİLİR.",
        "usages": [
          "There used to be / live / have (burada WOULD KESİNLİKLE YANLIŞTIR)",
          "Geçmiş alışkanlık eylemlerinde hem used to hem would doğru olabilir; ancak durum fiilinde tek doğru used to'dur",
          "be/get used to + V-ing çeldiricilerini eleme"
        ],
        "nonUsages": [
          "*would be a hospital* (YANLIŞ) -> used to be a hospital (DOĞRU)"
        ],
        "positiveFormula": "There used to be a vast wetland here before urban sprawl expanded.",
        "negativeFormula": "Subject + did not use to exist in antiquity.",
        "questionFormula": "Why did ancient geographers use to believe that the Earth was flat?",
        "shortAnswers": "Due to limited astronomical instruments.",
        "subjectVerbAgreement": "Tüm şahıslarda used to değişmez.",
        "verbForm": "used to + V1 (durum ve eylem) vs would + V1 (yalnızca eylem)",
        "auxiliaryVerb": "did / used to",
        "timeMarkers": [
          "before the urban development",
          "in ancient times",
          "prior to modern technology"
        ],
        "signals": [
          "used to be",
          "used to have",
          "used to believe",
          "stative rule"
        ],
        "timeline": "Sınav Sorusu: [Geçmiş Durum Fiili: BE, LIVE, HAVE] ===> SADECE USED TO!",
        "examples": [
          "There used to be a thriving freshwater marsh where the industrial park now stands.",
          "Centuries ago, natural philosophers used to believe that diseases were spread by noxious atmospheric miasmas."
        ],
        "exampleTr": [
          "Şimdi sanayi bölgesinin durduğu yerde eskiden gelişmiş bir tatlı su bataklığı bulunurdu (used to be)."
        ],
        "code": "YDS Altın Tuzağı: 'BE / HAVE / LIVE / EXIST' görünce ŞIKLARDAKİ 'WOULD'U ELE, 'USED TO'YU İŞARETLE!",
        "visualMemory": "ÖSYM soru kitapçığında 'There ---- be a church' sorusunda 'would be' şıkkının üzerine çarpı atılıp 'used to be'nin işaretlenmesi ❌✔️📄",
        "commonMistake": "'There would be a church here' demek (İngilizcede durum fiiliyle geçmiş alışkanlıkta 'would' kullanılmaz!).",
        "correctWrongContrast": {
          "wrong": "There would be an ancient temple on this hill.",
          "correct": "There used to be an ancient temple on this hill.",
          "note": "'be' durum fiilidir; geçmişte var olmak için 'used to be' tek geçerli formdur.",
          "explanation": "'be' durum fiilidir; geçmişte var olmak için 'used to be' tek geçerli formdur."
        },
        "differenceFromSimilarTense": "Used to hem durum (be, live) hem eylem (run, swim) alır; Would ASLA durum (be, have, live) alamaz!",
        "levelTactic": "Boşluğun arkasında 'be, have, live, believe, exist, know' fiillerinden biri varsa şıklardaki 'would'ları hemen ele ve 'used to + V1' seç!",
        "miniTest": {
          "question": "Archaeological surveys indicate that there ---- a fortified citadel on this ridge before it was razed during the siege.",
          "options": [
            "used to be",
            "would be",
            "is used to being",
            "was used to be",
            "uses to be"
          ],
          "answer": 0,
          "explanation": "'be' durum fiilidir; geçmişteki varlığı anlatırken 'would be' kural dışıdır, tek doğru 'used to be'dir."
        },
        "explainedAnswer": "Doğru yanıt A (used to be). Durum fiillerinde (be, live, exist) geçmiş alışkanlık/durum için 'would' kullanılamaz; sadece 'used to' geçerlidir.",
        "signalWords": [
          "used to be",
          "used to have",
          "used to believe",
          "stative rule"
        ]
      }
    }
  }
];

export const TENSE_LEVELS: Record<string, Record<TenseLevel, TenseLevelBlock>> = {};
for (const t of TENSE_TOPICS) {
  TENSE_LEVELS[t.slug] = t.levels;
}

export function getTenseBySlug(slug: string): TenseTopic | undefined {
  return TENSE_TOPICS.find((t) => t.slug === slug);
}

export function getTenseLevelBlock(slug: string, level: TenseLevel): TenseLevelBlock | undefined {
  return TENSE_LEVELS[slug]?.[level];
}

export function validateAllTensesData(): { valid: boolean; totalBlocks: number; errors: string[] } {
  const errors: string[] = [];
  let totalBlocks = 0;
  const requiredFields: (keyof TenseLevelBlock)[] = [
    "title", "basicMeaning", "usages", "nonUsages", "positiveFormula", "negativeFormula",
    "questionFormula", "shortAnswers", "subjectVerbAgreement", "verbForm", "auxiliaryVerb",
    "timeMarkers", "signalWords", "timeline", "examples", "exampleTr", "code",
    "visualMemory", "commonMistake", "correctWrongContrast", "differenceFromSimilarTense",
    "levelTactic", "miniTest", "explainedAnswer"
  ];

  if (TENSE_TOPICS.length !== 17) {
    errors.push(`Expected 17 tenses, found ${TENSE_TOPICS.length}`);
  }

  for (const t of TENSE_TOPICS) {
    const levels = Object.keys(t.levels) as TenseLevel[];
    if (levels.length !== 7) {
      errors.push(`Tense ${t.slug} has ${levels.length} levels instead of 7`);
    }
    for (const lvl of TENSE_LEVELS_LIST) {
      const block = t.levels[lvl];
      if (!block) {
        errors.push(`Tense ${t.slug} is missing level ${lvl}`);
        continue;
      }
      totalBlocks++;
      for (const field of requiredFields) {
        if (block[field] === undefined || block[field] === null || block[field] === "") {
          errors.push(`Tense ${t.slug} [${lvl}] is missing field: ${field}`);
        }
      }
      if (!block.miniTest || !Array.isArray(block.miniTest.options) || block.miniTest.options.length < 4) {
        errors.push(`Tense ${t.slug} [${lvl}] miniTest must have at least 4 options`);
      }
      if (block.miniTest.answer < 0 || block.miniTest.answer >= block.miniTest.options.length) {
        errors.push(`Tense ${t.slug} [${lvl}] miniTest answer index out of bounds`);
      }
    }
  }

  return {
    valid: errors.length === 0,
    totalBlocks,
    errors,
  };
}

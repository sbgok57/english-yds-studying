// 19 Gramer Konusu x 7 Seviye (A1, A2, B1, B2, C1, C2, YDS) = 133 Detaylı Anlatım Bloğu
// Seviye bazlı zaman zarfı tabloları, cümle yapıları, formüller, hafıza kodları ve mini testler

export type GrammarLevel7 = "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "YDS";

export const GRAMMAR_LEVEL7_LIST: GrammarLevel7[] = ["A1", "A2", "B1", "B2", "C1", "C2", "YDS"];

export interface TimeMarkerItem {
  marker: string;
  turkish: string;
  position: string;
  exampleEn: string;
  exampleTr: string;
  pitfall: string;
}

export interface ContrastSentences {
  wrong: string;
  correct: string;
  explanation: string;
}

export interface MiniExercise {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface GrammarLevel7Block {
  level: GrammarLevel7;
  title: string;
  definition: string;
  usage: string;
  meanings: string;
  positiveStructure: string;
  negativeStructure: string;
  questionStructure: string;
  formula: string;
  subjectVerbAgreement: string;
  auxiliaryVerbs: string;
  verbForms: string;
  timeMarkers: TimeMarkerItem[];
  exampleEn: string;
  exampleTr: string;
  memoryCode: string;
  visualMemoryScene: string;
  levelTactic: string;
  commonMistake: string;
  contrastSentences: ContrastSentences;
  miniExercise: MiniExercise;
}

export const GRAMMAR_LEVELS_7_MAP: Record<string, GrammarLevel7Block[]> = {
  "tenses": [
    {
      "level": "A1",
      "title": "Tenses & Zaman Uyumu — A1: Temel Tanıma ve Açık İpuçları",
      "definition": "Tenses & Zaman Uyumu konusunun A1 düzeyindeki tanımı: Temel özne-fiil uyumu, basit cümle kuruluşu ve en yalın kurallar.",
      "usage": "Tenses & Zaman Uyumu bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "S + V (Zamana uygun çekim) + O",
      "negativeStructure": "S + do/does/did not / have not + V + O",
      "questionStructure": "Do/Does/Did/Have + S + V + O?",
      "formula": "Simple Present: S + V1(-s) | Past: S + V2 | Future: S + will + V1 | Perfect: S + have/has + V3",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "always",
          "turkish": "her zaman",
          "position": "Özne ile fiil arasında",
          "exampleEn": "She always arrives at school on time.",
          "exampleTr": "Okula her zaman vaktinde gelir.",
          "pitfall": "Fiilden sonra yazılmamalıdır ('She arrives always' yanlıştır)."
        },
        {
          "marker": "every day",
          "turkish": "her gün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "I drink fresh orange juice every day.",
          "exampleTr": "Her gün taze portakal suyu içerim.",
          "pitfall": "Bitişik yazılan 'everyday' sıfattır; zaman zarfı ayrı yazılır ('every day')."
        },
        {
          "marker": "now / at the moment",
          "turkish": "şu anda / şimdi",
          "position": "Cümle sonunda",
          "exampleEn": "The children are playing in the garden right now.",
          "exampleTr": "Çocuklar şu anda bahçede oynuyorlar.",
          "pitfall": "Geniş zaman ile değil şimdiki zamanla (am/is/are + Ving) kullanılır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that tenses & zaman uyumu plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, tenses & zaman uyumu konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Tenses & Zaman Uyumu [A1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Tenses & Zaman Uyumu - A1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Tenses & Zaman Uyumu konusunda A1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers tenses without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered tenses after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Tenses & Zaman Uyumu - A1] Aşağıdaki cümlelerin hangisinde Tenses & Zaman Uyumu kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A1 criteria.",
          "B) The team has neglected the vital A1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Tenses & Zaman Uyumu konusu A1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "A2",
      "title": "Tenses & Zaman Uyumu — A2: Kombinasyon ve Temel Bağlaçlar",
      "definition": "Tenses & Zaman Uyumu konusunun A2 düzeyindeki tanımı: Sıklık zarfları, basit bağlaçlar, kısa cevaplar ve temel zaman karşılaştırmaları.",
      "usage": "Tenses & Zaman Uyumu bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "S + V (Zamana uygun çekim) + O",
      "negativeStructure": "S + do/does/did not / have not + V + O",
      "questionStructure": "Do/Does/Did/Have + S + V + O?",
      "formula": "Simple Present: S + V1(-s) | Past: S + V2 | Future: S + will + V1 | Perfect: S + have/has + V3",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "yesterday",
          "turkish": "dün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "The committee met yesterday to approve the budget.",
          "exampleTr": "Komite bütçeyi onaylamak için dün toplandı.",
          "pitfall": "Present Perfect ile kullanılmaz; daima Simple Past (V2) gerektirir."
        },
        {
          "marker": "two days ago",
          "turkish": "iki gün önce",
          "position": "Cümle sonunda",
          "exampleEn": "The package arrived two days ago.",
          "exampleTr": "Paket iki gün önce ulaştı.",
          "pitfall": "'before' ile karıştırılmamalıdır; 'ago' şimdiki andan geçmişe sayar ve V2 ister."
        },
        {
          "marker": "usually / often",
          "turkish": "genellikle / sık sık",
          "position": "Özne ile fiil arasında",
          "exampleEn": "He usually takes the subway to avoid traffic.",
          "exampleTr": "Trafikten kaçınmak için genellikle metroyu kullanır.",
          "pitfall": "He/she/it öznelerinde fiilin -s takısını unutturmamalıdır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that tenses & zaman uyumu plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, tenses & zaman uyumu konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Tenses & Zaman Uyumu [A2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Tenses & Zaman Uyumu - A2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Tenses & Zaman Uyumu konusunda A2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers tenses without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered tenses after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Tenses & Zaman Uyumu - A2] Aşağıdaki cümlelerin hangisinde Tenses & Zaman Uyumu kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A2 criteria.",
          "B) The team has neglected the vital A2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Tenses & Zaman Uyumu konusu A2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B1",
      "title": "Tenses & Zaman Uyumu — B1: Cümle İçi Bağlam ve Süreç Zamanları",
      "definition": "Tenses & Zaman Uyumu konusunun B1 düzeyindeki tanımı: Bağlaçlı cümleler, zaman uyumu, orta seviye kalıplar ve süreç zamanları.",
      "usage": "Tenses & Zaman Uyumu bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "S + V (Zamana uygun çekim) + O",
      "negativeStructure": "S + do/does/did not / have not + V + O",
      "questionStructure": "Do/Does/Did/Have + S + V + O?",
      "formula": "Simple Present: S + V1(-s) | Past: S + V2 | Future: S + will + V1 | Perfect: S + have/has + V3",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since 2015 / since then",
          "turkish": "-den beri",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "She has worked at the research center since 2015.",
          "exampleTr": "2015'ten beri araştırma merkezinde çalışıyor.",
          "pitfall": "Since'ten sonra geçmiş zaman noktası (V2), ana cümlede Present Perfect (have/has V3) gelir."
        },
        {
          "marker": "for five years",
          "turkish": "beş yıldır / beş sene boyunca",
          "position": "Cümle sonunda",
          "exampleEn": "They have lived in London for five years.",
          "exampleTr": "Beş yıldır Londra'da yaşıyorlar.",
          "pitfall": "Süreç bitmişse Simple Past ('lived for 5 years'), hala sürüyorsa Present Perfect ('have lived') kullanılır."
        },
        {
          "marker": "while / as",
          "turkish": "-iken",
          "position": "Yan cümlenin başında",
          "exampleEn": "While the scientist was calibrating the sensors, the alarm sounded.",
          "exampleTr": "Bilim insanı sensörleri kalibre ederken alarm çaldı.",
          "pitfall": "While genellikle Past Continuous (was/were Ving) ile süreç bildirir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that tenses & zaman uyumu plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, tenses & zaman uyumu konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Tenses & Zaman Uyumu [B1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Tenses & Zaman Uyumu - B1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Tenses & Zaman Uyumu konusunda B1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers tenses without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered tenses after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Tenses & Zaman Uyumu - B1] Aşağıdaki cümlelerin hangisinde Tenses & Zaman Uyumu kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B1 criteria.",
          "B) The team has neglected the vital B1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Tenses & Zaman Uyumu konusu B1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B2",
      "title": "Tenses & Zaman Uyumu — B2: Akademik Bağlam ve İleri Yapılar",
      "definition": "Tenses & Zaman Uyumu konusunun B2 düzeyindeki tanımı: Karmaşık yan cümleler, perfect/passive ilişkileri ve YDS tipi güçlü çeldiriciler.",
      "usage": "Tenses & Zaman Uyumu bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "S + V (Zamana uygun çekim) + O",
      "negativeStructure": "S + do/does/did not / have not + V + O",
      "questionStructure": "Do/Does/Did/Have + S + V + O?",
      "formula": "Simple Present: S + V1(-s) | Past: S + V2 | Future: S + will + V1 | Perfect: S + have/has + V3",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "by the time",
          "turkish": "-e kadar / -dığı zamana kadar",
          "position": "Yan cümlenin başında",
          "exampleEn": "By the time the firefighters arrived, the blaze had been extinguished.",
          "exampleTr": "İtfaiyeciler gelene kadar yangın söndürülmüştü.",
          "pitfall": "By the time + V2 -> had V3; By the time + V1 -> will have V3 zaman kuralına uymalıdır."
        },
        {
          "marker": "so far / up to now",
          "turkish": "şu ana kadar",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "No significant anomalies have been observed so far.",
          "exampleTr": "Şu ana kadar hiçbir belirgin anormallik gözlemlenmedi.",
          "pitfall": "Past tense ile değil Present Perfect (have/has V3) ile kullanılır."
        },
        {
          "marker": "in recent decades",
          "turkish": "son on yıllarda",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Global temperatures have risen markedly in recent decades.",
          "exampleTr": "Küresel sıcaklıklar son on yıllarda belirgin şekilde arttı.",
          "pitfall": "'In recent...' kalıbı günümüze uzanan süreci anlattığından Present Perfect ister."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that tenses & zaman uyumu plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, tenses & zaman uyumu konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Tenses & Zaman Uyumu [B2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Tenses & Zaman Uyumu - B2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Tenses & Zaman Uyumu konusunda B2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers tenses without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered tenses after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Tenses & Zaman Uyumu - B2] Aşağıdaki cümlelerin hangisinde Tenses & Zaman Uyumu kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B2 criteria.",
          "B) The team has neglected the vital B2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Tenses & Zaman Uyumu konusu B2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C1",
      "title": "Tenses & Zaman Uyumu — C1: Nüanslar, İstisnalar ve Devrik Yapılar",
      "definition": "Tenses & Zaman Uyumu konusunun C1 düzeyindeki tanımı: İnce anlam farkları, resmî/akademik üslup, istisnai kurallar ve karmaşık yapılar.",
      "usage": "Tenses & Zaman Uyumu bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "S + V (Zamana uygun çekim) + O",
      "negativeStructure": "S + do/does/did not / have not + V + O",
      "questionStructure": "Do/Does/Did/Have + S + V + O?",
      "formula": "Simple Present: S + V1(-s) | Past: S + V2 | Future: S + will + V1 | Perfect: S + have/has + V3",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "scarcely ... when",
          "turkish": "-er -mez",
          "position": "Devrik cümle başında",
          "exampleEn": "Scarcely had the treaty been signed when border clashes resumed.",
          "exampleTr": "Antlaşma imzalanır imzalanmaz sınır çatışmaları yeniden başladı.",
          "pitfall": "Scarcely had + S + V3 ... WHEN dizilimi bozulmamalıdır (THAN yazılmaz)."
        },
        {
          "marker": "hitherto / heretofore",
          "turkish": "şimdiye değin / o zamana kadar",
          "position": "Zarf konumunda",
          "exampleEn": "The expedition revealed biological species hitherto unknown to science.",
          "exampleTr": "Keşif heyeti şimdiye kadar bilimin bilmediği biyolojik türleri ortaya çıkardı.",
          "pitfall": "Resmî/akademik metinlerde geçmişe dönük sınırlayıcı zarf olarak kullanılır."
        },
        {
          "marker": "no sooner ... than",
          "turkish": "tam ... olmuştu ki",
          "position": "Devrik cümle başında",
          "exampleEn": "No sooner had the keynote concluded than reporters swarmed the podium.",
          "exampleTr": "Açılış konuşması biter bitmez muhabirler kürsüye üşüştü.",
          "pitfall": "No sooner daima 'than' ile eşleşir; 'when' yazmak klasik çeldiricidir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that tenses & zaman uyumu plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, tenses & zaman uyumu konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Tenses & Zaman Uyumu [C1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Tenses & Zaman Uyumu - C1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Tenses & Zaman Uyumu konusunda C1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers tenses without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered tenses after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Tenses & Zaman Uyumu - C1] Aşağıdaki cümlelerin hangisinde Tenses & Zaman Uyumu kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C1 criteria.",
          "B) The team has neglected the vital C1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Tenses & Zaman Uyumu konusu C1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C2",
      "title": "Tenses & Zaman Uyumu — C2: Söylem, Stil ve Derin Anlam Analizi",
      "definition": "Tenses & Zaman Uyumu konusunun C2 düzeyindeki tanımı: Üst düzey akademik söylem, nüans ustalıkları ve editörlük düzeyinde dil hakimiyeti.",
      "usage": "Tenses & Zaman Uyumu bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "S + V (Zamana uygun çekim) + O",
      "negativeStructure": "S + do/does/did not / have not + V + O",
      "questionStructure": "Do/Does/Did/Have + S + V + O?",
      "formula": "Simple Present: S + V1(-s) | Past: S + V2 | Future: S + will + V1 | Perfect: S + have/has + V3",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "from time immemorial",
          "turkish": "ezelden beri / çok eski zamanlardan beri",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Nomadic tribes have traversed these arid steppes from time immemorial.",
          "exampleTr": "Göçebe kabileler ezelden beri bu kurak bozkırları aşagelmiştir.",
          "pitfall": "Tarihsel derinlik ve süreklilik anlatır; genellikle Present Perfect ile pekişir."
        },
        {
          "marker": "in the twinkling of an eye",
          "turkish": "göz açıp kapayıncaya kadar",
          "position": "Cümle sonunda",
          "exampleEn": "Decades of architectural heritage were leveled in the twinkling of an eye by the quake.",
          "exampleTr": "Onlarca yıllık mimari miras depremle göz açıp kapayıncaya kadar yerle bir oldu.",
          "pitfall": "Ani ve radikal dönüşümleri niteleyen edebi/akademik üslup öğesidir."
        },
        {
          "marker": "at the eleventh hour",
          "turkish": "son anda / son dakikada",
          "position": "Cümle sonunda",
          "exampleEn": "The diplomatic accord was salvaged at the eleventh hour by bilateral concessions.",
          "exampleTr": "Diplomatik mutabakat son dakikada karşılıklı tavizlerle kurtarıldı.",
          "pitfall": "Gecikmiş ama zamanında yetişen kritik müdahaleleri betimler."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that tenses & zaman uyumu plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, tenses & zaman uyumu konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Tenses & Zaman Uyumu [C2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Tenses & Zaman Uyumu - C2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Tenses & Zaman Uyumu konusunda C2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers tenses without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered tenses after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Tenses & Zaman Uyumu - C2] Aşağıdaki cümlelerin hangisinde Tenses & Zaman Uyumu kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C2 criteria.",
          "B) The team has neglected the vital C2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Tenses & Zaman Uyumu konusu C2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "YDS",
      "title": "Tenses & Zaman Uyumu — YDS: Sınav Stratejisi, Zaman Yönetimi ve Şık Eleme",
      "definition": "Tenses & Zaman Uyumu konusunun YDS düzeyindeki tanımı: Soru kökündeki gizli ipuçları, çeldirici eleme algoritmaları ve sınav netini maksimize etme.",
      "usage": "Tenses & Zaman Uyumu bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "YDS seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "S + V (Zamana uygun çekim) + O",
      "negativeStructure": "S + do/does/did not / have not + V + O",
      "questionStructure": "Do/Does/Did/Have + S + V + O?",
      "formula": "Simple Present: S + V1(-s) | Past: S + V2 | Future: S + will + V1 | Perfect: S + have/has + V3",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since + Past Time / V2",
          "turkish": "-den beri (YDS Şifresi)",
          "position": "Yan cümle başı / Ana cümle Present Perfect",
          "exampleEn": "Renewable energy adoption has accelerated since the landmark 2015 Paris agreement.",
          "exampleTr": "Yenilenebilir enerjiye geçiş, tarihi 2015 Paris Anlaşması'ndan beri hızlandı.",
          "pitfall": "Soru kökünde 'since + V2' görürsen ana cümlede mutlaka 'have/has V3' ara!"
        },
        {
          "marker": "by + future time (e.g. by 2035)",
          "turkish": "-e kadar (Gelecek Şifresi)",
          "position": "Zaman zarfı konumu",
          "exampleEn": "By 2035, the majority of industrial vehicles will have transitioned to hydrogen fuel.",
          "exampleTr": "2035 yılına kadar sanayi araçlarının çoğunluğu hidrojen yakıtına geçmiş olacaktır.",
          "pitfall": "'By + Gelecek Zaman' daima Future Perfect (will have V3) gerektirir."
        },
        {
          "marker": "over / in / during + the last / past + time",
          "turkish": "son ... boyunca (Banko Soru)",
          "position": "Cümle başı veya sonu",
          "exampleEn": "Over the past five decades, computational capacity has expanded exponentially.",
          "exampleTr": "Son elli yıl boyunca bilişim kapasitesi katlanarak büyüdü.",
          "pitfall": "'Over/In the past...' kalıbı YDS'de %99 Present Perfect (have/has V3) ister!"
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that tenses & zaman uyumu plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, tenses & zaman uyumu konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Tenses & Zaman Uyumu [YDS]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Tenses & Zaman Uyumu - YDS]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "YDS Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Tenses & Zaman Uyumu konusunda YDS düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers tenses without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered tenses after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Tenses & Zaman Uyumu - YDS] Aşağıdaki cümlelerin hangisinde Tenses & Zaman Uyumu kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard YDS criteria.",
          "B) The team has neglected the vital YDS variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the YDS protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary YDS models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Tenses & Zaman Uyumu konusu YDS seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    }
  ],
  "passive-voice": [
    {
      "level": "A1",
      "title": "Passive Voice (Edilgen Çatı) — A1: Temel Tanıma ve Açık İpuçları",
      "definition": "Passive Voice (Edilgen Çatı) konusunun A1 düzeyindeki tanımı: Temel özne-fiil uyumu, basit cümle kuruluşu ve en yalın kurallar.",
      "usage": "Passive Voice (Edilgen Çatı) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Subject + am/is/are/was/were/been + V3",
      "negativeStructure": "Subject + be not + V3",
      "questionStructure": "Be + Subject + V3?",
      "formula": "Active: S + V + O -> Passive: O + BE + V3 (+ by S)",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "always",
          "turkish": "her zaman",
          "position": "Özne ile fiil arasında",
          "exampleEn": "She always arrives at school on time.",
          "exampleTr": "Okula her zaman vaktinde gelir.",
          "pitfall": "Fiilden sonra yazılmamalıdır ('She arrives always' yanlıştır)."
        },
        {
          "marker": "every day",
          "turkish": "her gün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "I drink fresh orange juice every day.",
          "exampleTr": "Her gün taze portakal suyu içerim.",
          "pitfall": "Bitişik yazılan 'everyday' sıfattır; zaman zarfı ayrı yazılır ('every day')."
        },
        {
          "marker": "now / at the moment",
          "turkish": "şu anda / şimdi",
          "position": "Cümle sonunda",
          "exampleEn": "The children are playing in the garden right now.",
          "exampleTr": "Çocuklar şu anda bahçede oynuyorlar.",
          "pitfall": "Geniş zaman ile değil şimdiki zamanla (am/is/are + Ving) kullanılır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that passive voice (edilgen çatı) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, passive voice (edilgen çatı) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Passive Voice (Edilgen Çatı) [A1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Passive Voice (Edilgen Çatı) - A1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Passive Voice (Edilgen Çatı) konusunda A1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers passive voice without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered passive voice after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Passive Voice (Edilgen Çatı) - A1] Aşağıdaki cümlelerin hangisinde Passive Voice (Edilgen Çatı) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A1 criteria.",
          "B) The team has neglected the vital A1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Passive Voice (Edilgen Çatı) konusu A1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "A2",
      "title": "Passive Voice (Edilgen Çatı) — A2: Kombinasyon ve Temel Bağlaçlar",
      "definition": "Passive Voice (Edilgen Çatı) konusunun A2 düzeyindeki tanımı: Sıklık zarfları, basit bağlaçlar, kısa cevaplar ve temel zaman karşılaştırmaları.",
      "usage": "Passive Voice (Edilgen Çatı) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Subject + am/is/are/was/were/been + V3",
      "negativeStructure": "Subject + be not + V3",
      "questionStructure": "Be + Subject + V3?",
      "formula": "Active: S + V + O -> Passive: O + BE + V3 (+ by S)",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "yesterday",
          "turkish": "dün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "The committee met yesterday to approve the budget.",
          "exampleTr": "Komite bütçeyi onaylamak için dün toplandı.",
          "pitfall": "Present Perfect ile kullanılmaz; daima Simple Past (V2) gerektirir."
        },
        {
          "marker": "two days ago",
          "turkish": "iki gün önce",
          "position": "Cümle sonunda",
          "exampleEn": "The package arrived two days ago.",
          "exampleTr": "Paket iki gün önce ulaştı.",
          "pitfall": "'before' ile karıştırılmamalıdır; 'ago' şimdiki andan geçmişe sayar ve V2 ister."
        },
        {
          "marker": "usually / often",
          "turkish": "genellikle / sık sık",
          "position": "Özne ile fiil arasında",
          "exampleEn": "He usually takes the subway to avoid traffic.",
          "exampleTr": "Trafikten kaçınmak için genellikle metroyu kullanır.",
          "pitfall": "He/she/it öznelerinde fiilin -s takısını unutturmamalıdır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that passive voice (edilgen çatı) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, passive voice (edilgen çatı) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Passive Voice (Edilgen Çatı) [A2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Passive Voice (Edilgen Çatı) - A2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Passive Voice (Edilgen Çatı) konusunda A2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers passive voice without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered passive voice after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Passive Voice (Edilgen Çatı) - A2] Aşağıdaki cümlelerin hangisinde Passive Voice (Edilgen Çatı) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A2 criteria.",
          "B) The team has neglected the vital A2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Passive Voice (Edilgen Çatı) konusu A2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B1",
      "title": "Passive Voice (Edilgen Çatı) — B1: Cümle İçi Bağlam ve Süreç Zamanları",
      "definition": "Passive Voice (Edilgen Çatı) konusunun B1 düzeyindeki tanımı: Bağlaçlı cümleler, zaman uyumu, orta seviye kalıplar ve süreç zamanları.",
      "usage": "Passive Voice (Edilgen Çatı) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Subject + am/is/are/was/were/been + V3",
      "negativeStructure": "Subject + be not + V3",
      "questionStructure": "Be + Subject + V3?",
      "formula": "Active: S + V + O -> Passive: O + BE + V3 (+ by S)",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since 2015 / since then",
          "turkish": "-den beri",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "She has worked at the research center since 2015.",
          "exampleTr": "2015'ten beri araştırma merkezinde çalışıyor.",
          "pitfall": "Since'ten sonra geçmiş zaman noktası (V2), ana cümlede Present Perfect (have/has V3) gelir."
        },
        {
          "marker": "for five years",
          "turkish": "beş yıldır / beş sene boyunca",
          "position": "Cümle sonunda",
          "exampleEn": "They have lived in London for five years.",
          "exampleTr": "Beş yıldır Londra'da yaşıyorlar.",
          "pitfall": "Süreç bitmişse Simple Past ('lived for 5 years'), hala sürüyorsa Present Perfect ('have lived') kullanılır."
        },
        {
          "marker": "while / as",
          "turkish": "-iken",
          "position": "Yan cümlenin başında",
          "exampleEn": "While the scientist was calibrating the sensors, the alarm sounded.",
          "exampleTr": "Bilim insanı sensörleri kalibre ederken alarm çaldı.",
          "pitfall": "While genellikle Past Continuous (was/were Ving) ile süreç bildirir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that passive voice (edilgen çatı) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, passive voice (edilgen çatı) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Passive Voice (Edilgen Çatı) [B1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Passive Voice (Edilgen Çatı) - B1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Passive Voice (Edilgen Çatı) konusunda B1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers passive voice without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered passive voice after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Passive Voice (Edilgen Çatı) - B1] Aşağıdaki cümlelerin hangisinde Passive Voice (Edilgen Çatı) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B1 criteria.",
          "B) The team has neglected the vital B1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Passive Voice (Edilgen Çatı) konusu B1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B2",
      "title": "Passive Voice (Edilgen Çatı) — B2: Akademik Bağlam ve İleri Yapılar",
      "definition": "Passive Voice (Edilgen Çatı) konusunun B2 düzeyindeki tanımı: Karmaşık yan cümleler, perfect/passive ilişkileri ve YDS tipi güçlü çeldiriciler.",
      "usage": "Passive Voice (Edilgen Çatı) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Subject + am/is/are/was/were/been + V3",
      "negativeStructure": "Subject + be not + V3",
      "questionStructure": "Be + Subject + V3?",
      "formula": "Active: S + V + O -> Passive: O + BE + V3 (+ by S)",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "by the time",
          "turkish": "-e kadar / -dığı zamana kadar",
          "position": "Yan cümlenin başında",
          "exampleEn": "By the time the firefighters arrived, the blaze had been extinguished.",
          "exampleTr": "İtfaiyeciler gelene kadar yangın söndürülmüştü.",
          "pitfall": "By the time + V2 -> had V3; By the time + V1 -> will have V3 zaman kuralına uymalıdır."
        },
        {
          "marker": "so far / up to now",
          "turkish": "şu ana kadar",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "No significant anomalies have been observed so far.",
          "exampleTr": "Şu ana kadar hiçbir belirgin anormallik gözlemlenmedi.",
          "pitfall": "Past tense ile değil Present Perfect (have/has V3) ile kullanılır."
        },
        {
          "marker": "in recent decades",
          "turkish": "son on yıllarda",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Global temperatures have risen markedly in recent decades.",
          "exampleTr": "Küresel sıcaklıklar son on yıllarda belirgin şekilde arttı.",
          "pitfall": "'In recent...' kalıbı günümüze uzanan süreci anlattığından Present Perfect ister."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that passive voice (edilgen çatı) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, passive voice (edilgen çatı) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Passive Voice (Edilgen Çatı) [B2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Passive Voice (Edilgen Çatı) - B2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Passive Voice (Edilgen Çatı) konusunda B2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers passive voice without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered passive voice after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Passive Voice (Edilgen Çatı) - B2] Aşağıdaki cümlelerin hangisinde Passive Voice (Edilgen Çatı) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B2 criteria.",
          "B) The team has neglected the vital B2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Passive Voice (Edilgen Çatı) konusu B2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C1",
      "title": "Passive Voice (Edilgen Çatı) — C1: Nüanslar, İstisnalar ve Devrik Yapılar",
      "definition": "Passive Voice (Edilgen Çatı) konusunun C1 düzeyindeki tanımı: İnce anlam farkları, resmî/akademik üslup, istisnai kurallar ve karmaşık yapılar.",
      "usage": "Passive Voice (Edilgen Çatı) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Subject + am/is/are/was/were/been + V3",
      "negativeStructure": "Subject + be not + V3",
      "questionStructure": "Be + Subject + V3?",
      "formula": "Active: S + V + O -> Passive: O + BE + V3 (+ by S)",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "scarcely ... when",
          "turkish": "-er -mez",
          "position": "Devrik cümle başında",
          "exampleEn": "Scarcely had the treaty been signed when border clashes resumed.",
          "exampleTr": "Antlaşma imzalanır imzalanmaz sınır çatışmaları yeniden başladı.",
          "pitfall": "Scarcely had + S + V3 ... WHEN dizilimi bozulmamalıdır (THAN yazılmaz)."
        },
        {
          "marker": "hitherto / heretofore",
          "turkish": "şimdiye değin / o zamana kadar",
          "position": "Zarf konumunda",
          "exampleEn": "The expedition revealed biological species hitherto unknown to science.",
          "exampleTr": "Keşif heyeti şimdiye kadar bilimin bilmediği biyolojik türleri ortaya çıkardı.",
          "pitfall": "Resmî/akademik metinlerde geçmişe dönük sınırlayıcı zarf olarak kullanılır."
        },
        {
          "marker": "no sooner ... than",
          "turkish": "tam ... olmuştu ki",
          "position": "Devrik cümle başında",
          "exampleEn": "No sooner had the keynote concluded than reporters swarmed the podium.",
          "exampleTr": "Açılış konuşması biter bitmez muhabirler kürsüye üşüştü.",
          "pitfall": "No sooner daima 'than' ile eşleşir; 'when' yazmak klasik çeldiricidir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that passive voice (edilgen çatı) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, passive voice (edilgen çatı) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Passive Voice (Edilgen Çatı) [C1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Passive Voice (Edilgen Çatı) - C1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Passive Voice (Edilgen Çatı) konusunda C1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers passive voice without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered passive voice after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Passive Voice (Edilgen Çatı) - C1] Aşağıdaki cümlelerin hangisinde Passive Voice (Edilgen Çatı) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C1 criteria.",
          "B) The team has neglected the vital C1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Passive Voice (Edilgen Çatı) konusu C1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C2",
      "title": "Passive Voice (Edilgen Çatı) — C2: Söylem, Stil ve Derin Anlam Analizi",
      "definition": "Passive Voice (Edilgen Çatı) konusunun C2 düzeyindeki tanımı: Üst düzey akademik söylem, nüans ustalıkları ve editörlük düzeyinde dil hakimiyeti.",
      "usage": "Passive Voice (Edilgen Çatı) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Subject + am/is/are/was/were/been + V3",
      "negativeStructure": "Subject + be not + V3",
      "questionStructure": "Be + Subject + V3?",
      "formula": "Active: S + V + O -> Passive: O + BE + V3 (+ by S)",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "from time immemorial",
          "turkish": "ezelden beri / çok eski zamanlardan beri",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Nomadic tribes have traversed these arid steppes from time immemorial.",
          "exampleTr": "Göçebe kabileler ezelden beri bu kurak bozkırları aşagelmiştir.",
          "pitfall": "Tarihsel derinlik ve süreklilik anlatır; genellikle Present Perfect ile pekişir."
        },
        {
          "marker": "in the twinkling of an eye",
          "turkish": "göz açıp kapayıncaya kadar",
          "position": "Cümle sonunda",
          "exampleEn": "Decades of architectural heritage were leveled in the twinkling of an eye by the quake.",
          "exampleTr": "Onlarca yıllık mimari miras depremle göz açıp kapayıncaya kadar yerle bir oldu.",
          "pitfall": "Ani ve radikal dönüşümleri niteleyen edebi/akademik üslup öğesidir."
        },
        {
          "marker": "at the eleventh hour",
          "turkish": "son anda / son dakikada",
          "position": "Cümle sonunda",
          "exampleEn": "The diplomatic accord was salvaged at the eleventh hour by bilateral concessions.",
          "exampleTr": "Diplomatik mutabakat son dakikada karşılıklı tavizlerle kurtarıldı.",
          "pitfall": "Gecikmiş ama zamanında yetişen kritik müdahaleleri betimler."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that passive voice (edilgen çatı) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, passive voice (edilgen çatı) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Passive Voice (Edilgen Çatı) [C2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Passive Voice (Edilgen Çatı) - C2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Passive Voice (Edilgen Çatı) konusunda C2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers passive voice without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered passive voice after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Passive Voice (Edilgen Çatı) - C2] Aşağıdaki cümlelerin hangisinde Passive Voice (Edilgen Çatı) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C2 criteria.",
          "B) The team has neglected the vital C2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Passive Voice (Edilgen Çatı) konusu C2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "YDS",
      "title": "Passive Voice (Edilgen Çatı) — YDS: Sınav Stratejisi, Zaman Yönetimi ve Şık Eleme",
      "definition": "Passive Voice (Edilgen Çatı) konusunun YDS düzeyindeki tanımı: Soru kökündeki gizli ipuçları, çeldirici eleme algoritmaları ve sınav netini maksimize etme.",
      "usage": "Passive Voice (Edilgen Çatı) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "YDS seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Subject + am/is/are/was/were/been + V3",
      "negativeStructure": "Subject + be not + V3",
      "questionStructure": "Be + Subject + V3?",
      "formula": "Active: S + V + O -> Passive: O + BE + V3 (+ by S)",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since + Past Time / V2",
          "turkish": "-den beri (YDS Şifresi)",
          "position": "Yan cümle başı / Ana cümle Present Perfect",
          "exampleEn": "Renewable energy adoption has accelerated since the landmark 2015 Paris agreement.",
          "exampleTr": "Yenilenebilir enerjiye geçiş, tarihi 2015 Paris Anlaşması'ndan beri hızlandı.",
          "pitfall": "Soru kökünde 'since + V2' görürsen ana cümlede mutlaka 'have/has V3' ara!"
        },
        {
          "marker": "by + future time (e.g. by 2035)",
          "turkish": "-e kadar (Gelecek Şifresi)",
          "position": "Zaman zarfı konumu",
          "exampleEn": "By 2035, the majority of industrial vehicles will have transitioned to hydrogen fuel.",
          "exampleTr": "2035 yılına kadar sanayi araçlarının çoğunluğu hidrojen yakıtına geçmiş olacaktır.",
          "pitfall": "'By + Gelecek Zaman' daima Future Perfect (will have V3) gerektirir."
        },
        {
          "marker": "over / in / during + the last / past + time",
          "turkish": "son ... boyunca (Banko Soru)",
          "position": "Cümle başı veya sonu",
          "exampleEn": "Over the past five decades, computational capacity has expanded exponentially.",
          "exampleTr": "Son elli yıl boyunca bilişim kapasitesi katlanarak büyüdü.",
          "pitfall": "'Over/In the past...' kalıbı YDS'de %99 Present Perfect (have/has V3) ister!"
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that passive voice (edilgen çatı) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, passive voice (edilgen çatı) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Passive Voice (Edilgen Çatı) [YDS]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Passive Voice (Edilgen Çatı) - YDS]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "YDS Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Passive Voice (Edilgen Çatı) konusunda YDS düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers passive voice without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered passive voice after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Passive Voice (Edilgen Çatı) - YDS] Aşağıdaki cümlelerin hangisinde Passive Voice (Edilgen Çatı) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard YDS criteria.",
          "B) The team has neglected the vital YDS variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the YDS protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary YDS models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Passive Voice (Edilgen Çatı) konusu YDS seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    }
  ],
  "modals": [
    {
      "level": "A1",
      "title": "Modals (Kip Belirteçleri) — A1: Temel Tanıma ve Açık İpuçları",
      "definition": "Modals (Kip Belirteçleri) konusunun A1 düzeyindeki tanımı: Temel özne-fiil uyumu, basit cümle kuruluşu ve en yalın kurallar.",
      "usage": "Modals (Kip Belirteçleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Subject + modal (have) + V1/V3",
      "negativeStructure": "Subject + modal not (have) + V1/V3",
      "questionStructure": "Modal + Subject + (have) + V1/V3?",
      "formula": "Modal: S + modal + V1 | Perfect Modal: S + modal + have + V3",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "always",
          "turkish": "her zaman",
          "position": "Özne ile fiil arasında",
          "exampleEn": "She always arrives at school on time.",
          "exampleTr": "Okula her zaman vaktinde gelir.",
          "pitfall": "Fiilden sonra yazılmamalıdır ('She arrives always' yanlıştır)."
        },
        {
          "marker": "every day",
          "turkish": "her gün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "I drink fresh orange juice every day.",
          "exampleTr": "Her gün taze portakal suyu içerim.",
          "pitfall": "Bitişik yazılan 'everyday' sıfattır; zaman zarfı ayrı yazılır ('every day')."
        },
        {
          "marker": "now / at the moment",
          "turkish": "şu anda / şimdi",
          "position": "Cümle sonunda",
          "exampleEn": "The children are playing in the garden right now.",
          "exampleTr": "Çocuklar şu anda bahçede oynuyorlar.",
          "pitfall": "Geniş zaman ile değil şimdiki zamanla (am/is/are + Ving) kullanılır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that modals (kip belirteçleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, modals (kip belirteçleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Modals (Kip Belirteçleri) [A1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Modals (Kip Belirteçleri) - A1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Modals (Kip Belirteçleri) konusunda A1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers modals without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered modals after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Modals (Kip Belirteçleri) - A1] Aşağıdaki cümlelerin hangisinde Modals (Kip Belirteçleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A1 criteria.",
          "B) The team has neglected the vital A1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Modals (Kip Belirteçleri) konusu A1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "A2",
      "title": "Modals (Kip Belirteçleri) — A2: Kombinasyon ve Temel Bağlaçlar",
      "definition": "Modals (Kip Belirteçleri) konusunun A2 düzeyindeki tanımı: Sıklık zarfları, basit bağlaçlar, kısa cevaplar ve temel zaman karşılaştırmaları.",
      "usage": "Modals (Kip Belirteçleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Subject + modal (have) + V1/V3",
      "negativeStructure": "Subject + modal not (have) + V1/V3",
      "questionStructure": "Modal + Subject + (have) + V1/V3?",
      "formula": "Modal: S + modal + V1 | Perfect Modal: S + modal + have + V3",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "yesterday",
          "turkish": "dün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "The committee met yesterday to approve the budget.",
          "exampleTr": "Komite bütçeyi onaylamak için dün toplandı.",
          "pitfall": "Present Perfect ile kullanılmaz; daima Simple Past (V2) gerektirir."
        },
        {
          "marker": "two days ago",
          "turkish": "iki gün önce",
          "position": "Cümle sonunda",
          "exampleEn": "The package arrived two days ago.",
          "exampleTr": "Paket iki gün önce ulaştı.",
          "pitfall": "'before' ile karıştırılmamalıdır; 'ago' şimdiki andan geçmişe sayar ve V2 ister."
        },
        {
          "marker": "usually / often",
          "turkish": "genellikle / sık sık",
          "position": "Özne ile fiil arasında",
          "exampleEn": "He usually takes the subway to avoid traffic.",
          "exampleTr": "Trafikten kaçınmak için genellikle metroyu kullanır.",
          "pitfall": "He/she/it öznelerinde fiilin -s takısını unutturmamalıdır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that modals (kip belirteçleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, modals (kip belirteçleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Modals (Kip Belirteçleri) [A2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Modals (Kip Belirteçleri) - A2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Modals (Kip Belirteçleri) konusunda A2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers modals without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered modals after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Modals (Kip Belirteçleri) - A2] Aşağıdaki cümlelerin hangisinde Modals (Kip Belirteçleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A2 criteria.",
          "B) The team has neglected the vital A2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Modals (Kip Belirteçleri) konusu A2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B1",
      "title": "Modals (Kip Belirteçleri) — B1: Cümle İçi Bağlam ve Süreç Zamanları",
      "definition": "Modals (Kip Belirteçleri) konusunun B1 düzeyindeki tanımı: Bağlaçlı cümleler, zaman uyumu, orta seviye kalıplar ve süreç zamanları.",
      "usage": "Modals (Kip Belirteçleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Subject + modal (have) + V1/V3",
      "negativeStructure": "Subject + modal not (have) + V1/V3",
      "questionStructure": "Modal + Subject + (have) + V1/V3?",
      "formula": "Modal: S + modal + V1 | Perfect Modal: S + modal + have + V3",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since 2015 / since then",
          "turkish": "-den beri",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "She has worked at the research center since 2015.",
          "exampleTr": "2015'ten beri araştırma merkezinde çalışıyor.",
          "pitfall": "Since'ten sonra geçmiş zaman noktası (V2), ana cümlede Present Perfect (have/has V3) gelir."
        },
        {
          "marker": "for five years",
          "turkish": "beş yıldır / beş sene boyunca",
          "position": "Cümle sonunda",
          "exampleEn": "They have lived in London for five years.",
          "exampleTr": "Beş yıldır Londra'da yaşıyorlar.",
          "pitfall": "Süreç bitmişse Simple Past ('lived for 5 years'), hala sürüyorsa Present Perfect ('have lived') kullanılır."
        },
        {
          "marker": "while / as",
          "turkish": "-iken",
          "position": "Yan cümlenin başında",
          "exampleEn": "While the scientist was calibrating the sensors, the alarm sounded.",
          "exampleTr": "Bilim insanı sensörleri kalibre ederken alarm çaldı.",
          "pitfall": "While genellikle Past Continuous (was/were Ving) ile süreç bildirir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that modals (kip belirteçleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, modals (kip belirteçleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Modals (Kip Belirteçleri) [B1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Modals (Kip Belirteçleri) - B1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Modals (Kip Belirteçleri) konusunda B1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers modals without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered modals after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Modals (Kip Belirteçleri) - B1] Aşağıdaki cümlelerin hangisinde Modals (Kip Belirteçleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B1 criteria.",
          "B) The team has neglected the vital B1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Modals (Kip Belirteçleri) konusu B1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B2",
      "title": "Modals (Kip Belirteçleri) — B2: Akademik Bağlam ve İleri Yapılar",
      "definition": "Modals (Kip Belirteçleri) konusunun B2 düzeyindeki tanımı: Karmaşık yan cümleler, perfect/passive ilişkileri ve YDS tipi güçlü çeldiriciler.",
      "usage": "Modals (Kip Belirteçleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Subject + modal (have) + V1/V3",
      "negativeStructure": "Subject + modal not (have) + V1/V3",
      "questionStructure": "Modal + Subject + (have) + V1/V3?",
      "formula": "Modal: S + modal + V1 | Perfect Modal: S + modal + have + V3",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "by the time",
          "turkish": "-e kadar / -dığı zamana kadar",
          "position": "Yan cümlenin başında",
          "exampleEn": "By the time the firefighters arrived, the blaze had been extinguished.",
          "exampleTr": "İtfaiyeciler gelene kadar yangın söndürülmüştü.",
          "pitfall": "By the time + V2 -> had V3; By the time + V1 -> will have V3 zaman kuralına uymalıdır."
        },
        {
          "marker": "so far / up to now",
          "turkish": "şu ana kadar",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "No significant anomalies have been observed so far.",
          "exampleTr": "Şu ana kadar hiçbir belirgin anormallik gözlemlenmedi.",
          "pitfall": "Past tense ile değil Present Perfect (have/has V3) ile kullanılır."
        },
        {
          "marker": "in recent decades",
          "turkish": "son on yıllarda",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Global temperatures have risen markedly in recent decades.",
          "exampleTr": "Küresel sıcaklıklar son on yıllarda belirgin şekilde arttı.",
          "pitfall": "'In recent...' kalıbı günümüze uzanan süreci anlattığından Present Perfect ister."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that modals (kip belirteçleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, modals (kip belirteçleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Modals (Kip Belirteçleri) [B2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Modals (Kip Belirteçleri) - B2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Modals (Kip Belirteçleri) konusunda B2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers modals without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered modals after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Modals (Kip Belirteçleri) - B2] Aşağıdaki cümlelerin hangisinde Modals (Kip Belirteçleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B2 criteria.",
          "B) The team has neglected the vital B2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Modals (Kip Belirteçleri) konusu B2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C1",
      "title": "Modals (Kip Belirteçleri) — C1: Nüanslar, İstisnalar ve Devrik Yapılar",
      "definition": "Modals (Kip Belirteçleri) konusunun C1 düzeyindeki tanımı: İnce anlam farkları, resmî/akademik üslup, istisnai kurallar ve karmaşık yapılar.",
      "usage": "Modals (Kip Belirteçleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Subject + modal (have) + V1/V3",
      "negativeStructure": "Subject + modal not (have) + V1/V3",
      "questionStructure": "Modal + Subject + (have) + V1/V3?",
      "formula": "Modal: S + modal + V1 | Perfect Modal: S + modal + have + V3",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "scarcely ... when",
          "turkish": "-er -mez",
          "position": "Devrik cümle başında",
          "exampleEn": "Scarcely had the treaty been signed when border clashes resumed.",
          "exampleTr": "Antlaşma imzalanır imzalanmaz sınır çatışmaları yeniden başladı.",
          "pitfall": "Scarcely had + S + V3 ... WHEN dizilimi bozulmamalıdır (THAN yazılmaz)."
        },
        {
          "marker": "hitherto / heretofore",
          "turkish": "şimdiye değin / o zamana kadar",
          "position": "Zarf konumunda",
          "exampleEn": "The expedition revealed biological species hitherto unknown to science.",
          "exampleTr": "Keşif heyeti şimdiye kadar bilimin bilmediği biyolojik türleri ortaya çıkardı.",
          "pitfall": "Resmî/akademik metinlerde geçmişe dönük sınırlayıcı zarf olarak kullanılır."
        },
        {
          "marker": "no sooner ... than",
          "turkish": "tam ... olmuştu ki",
          "position": "Devrik cümle başında",
          "exampleEn": "No sooner had the keynote concluded than reporters swarmed the podium.",
          "exampleTr": "Açılış konuşması biter bitmez muhabirler kürsüye üşüştü.",
          "pitfall": "No sooner daima 'than' ile eşleşir; 'when' yazmak klasik çeldiricidir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that modals (kip belirteçleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, modals (kip belirteçleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Modals (Kip Belirteçleri) [C1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Modals (Kip Belirteçleri) - C1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Modals (Kip Belirteçleri) konusunda C1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers modals without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered modals after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Modals (Kip Belirteçleri) - C1] Aşağıdaki cümlelerin hangisinde Modals (Kip Belirteçleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C1 criteria.",
          "B) The team has neglected the vital C1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Modals (Kip Belirteçleri) konusu C1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C2",
      "title": "Modals (Kip Belirteçleri) — C2: Söylem, Stil ve Derin Anlam Analizi",
      "definition": "Modals (Kip Belirteçleri) konusunun C2 düzeyindeki tanımı: Üst düzey akademik söylem, nüans ustalıkları ve editörlük düzeyinde dil hakimiyeti.",
      "usage": "Modals (Kip Belirteçleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Subject + modal (have) + V1/V3",
      "negativeStructure": "Subject + modal not (have) + V1/V3",
      "questionStructure": "Modal + Subject + (have) + V1/V3?",
      "formula": "Modal: S + modal + V1 | Perfect Modal: S + modal + have + V3",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "from time immemorial",
          "turkish": "ezelden beri / çok eski zamanlardan beri",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Nomadic tribes have traversed these arid steppes from time immemorial.",
          "exampleTr": "Göçebe kabileler ezelden beri bu kurak bozkırları aşagelmiştir.",
          "pitfall": "Tarihsel derinlik ve süreklilik anlatır; genellikle Present Perfect ile pekişir."
        },
        {
          "marker": "in the twinkling of an eye",
          "turkish": "göz açıp kapayıncaya kadar",
          "position": "Cümle sonunda",
          "exampleEn": "Decades of architectural heritage were leveled in the twinkling of an eye by the quake.",
          "exampleTr": "Onlarca yıllık mimari miras depremle göz açıp kapayıncaya kadar yerle bir oldu.",
          "pitfall": "Ani ve radikal dönüşümleri niteleyen edebi/akademik üslup öğesidir."
        },
        {
          "marker": "at the eleventh hour",
          "turkish": "son anda / son dakikada",
          "position": "Cümle sonunda",
          "exampleEn": "The diplomatic accord was salvaged at the eleventh hour by bilateral concessions.",
          "exampleTr": "Diplomatik mutabakat son dakikada karşılıklı tavizlerle kurtarıldı.",
          "pitfall": "Gecikmiş ama zamanında yetişen kritik müdahaleleri betimler."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that modals (kip belirteçleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, modals (kip belirteçleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Modals (Kip Belirteçleri) [C2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Modals (Kip Belirteçleri) - C2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Modals (Kip Belirteçleri) konusunda C2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers modals without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered modals after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Modals (Kip Belirteçleri) - C2] Aşağıdaki cümlelerin hangisinde Modals (Kip Belirteçleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C2 criteria.",
          "B) The team has neglected the vital C2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Modals (Kip Belirteçleri) konusu C2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "YDS",
      "title": "Modals (Kip Belirteçleri) — YDS: Sınav Stratejisi, Zaman Yönetimi ve Şık Eleme",
      "definition": "Modals (Kip Belirteçleri) konusunun YDS düzeyindeki tanımı: Soru kökündeki gizli ipuçları, çeldirici eleme algoritmaları ve sınav netini maksimize etme.",
      "usage": "Modals (Kip Belirteçleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "YDS seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Subject + modal (have) + V1/V3",
      "negativeStructure": "Subject + modal not (have) + V1/V3",
      "questionStructure": "Modal + Subject + (have) + V1/V3?",
      "formula": "Modal: S + modal + V1 | Perfect Modal: S + modal + have + V3",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since + Past Time / V2",
          "turkish": "-den beri (YDS Şifresi)",
          "position": "Yan cümle başı / Ana cümle Present Perfect",
          "exampleEn": "Renewable energy adoption has accelerated since the landmark 2015 Paris agreement.",
          "exampleTr": "Yenilenebilir enerjiye geçiş, tarihi 2015 Paris Anlaşması'ndan beri hızlandı.",
          "pitfall": "Soru kökünde 'since + V2' görürsen ana cümlede mutlaka 'have/has V3' ara!"
        },
        {
          "marker": "by + future time (e.g. by 2035)",
          "turkish": "-e kadar (Gelecek Şifresi)",
          "position": "Zaman zarfı konumu",
          "exampleEn": "By 2035, the majority of industrial vehicles will have transitioned to hydrogen fuel.",
          "exampleTr": "2035 yılına kadar sanayi araçlarının çoğunluğu hidrojen yakıtına geçmiş olacaktır.",
          "pitfall": "'By + Gelecek Zaman' daima Future Perfect (will have V3) gerektirir."
        },
        {
          "marker": "over / in / during + the last / past + time",
          "turkish": "son ... boyunca (Banko Soru)",
          "position": "Cümle başı veya sonu",
          "exampleEn": "Over the past five decades, computational capacity has expanded exponentially.",
          "exampleTr": "Son elli yıl boyunca bilişim kapasitesi katlanarak büyüdü.",
          "pitfall": "'Over/In the past...' kalıbı YDS'de %99 Present Perfect (have/has V3) ister!"
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that modals (kip belirteçleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, modals (kip belirteçleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Modals (Kip Belirteçleri) [YDS]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Modals (Kip Belirteçleri) - YDS]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "YDS Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Modals (Kip Belirteçleri) konusunda YDS düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers modals without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered modals after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Modals (Kip Belirteçleri) - YDS] Aşağıdaki cümlelerin hangisinde Modals (Kip Belirteçleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard YDS criteria.",
          "B) The team has neglected the vital YDS variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the YDS protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary YDS models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Modals (Kip Belirteçleri) konusu YDS seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    }
  ],
  "conditionals": [
    {
      "level": "A1",
      "title": "Conditionals & Wish Clauses — A1: Temel Tanıma ve Açık İpuçları",
      "definition": "Conditionals & Wish Clauses konusunun A1 düzeyindeki tanımı: Temel özne-fiil uyumu, basit cümle kuruluşu ve en yalın kurallar.",
      "usage": "Conditionals & Wish Clauses bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "If-clause (Condition) + Main clause (Result)",
      "negativeStructure": "If + S + negative verb, S + modal not + V",
      "questionStructure": "What would you do if + S + V?",
      "formula": "Type 1: If + V1, will V1 | Type 2: If + V2, would V1 | Type 3: If + had V3, would have V3",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "always",
          "turkish": "her zaman",
          "position": "Özne ile fiil arasında",
          "exampleEn": "She always arrives at school on time.",
          "exampleTr": "Okula her zaman vaktinde gelir.",
          "pitfall": "Fiilden sonra yazılmamalıdır ('She arrives always' yanlıştır)."
        },
        {
          "marker": "every day",
          "turkish": "her gün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "I drink fresh orange juice every day.",
          "exampleTr": "Her gün taze portakal suyu içerim.",
          "pitfall": "Bitişik yazılan 'everyday' sıfattır; zaman zarfı ayrı yazılır ('every day')."
        },
        {
          "marker": "now / at the moment",
          "turkish": "şu anda / şimdi",
          "position": "Cümle sonunda",
          "exampleEn": "The children are playing in the garden right now.",
          "exampleTr": "Çocuklar şu anda bahçede oynuyorlar.",
          "pitfall": "Geniş zaman ile değil şimdiki zamanla (am/is/are + Ving) kullanılır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that conditionals & wish clauses plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, conditionals & wish clauses konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Conditionals & Wish Clauses [A1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Conditionals & Wish Clauses - A1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Conditionals & Wish Clauses konusunda A1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers conditionals without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered conditionals after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Conditionals & Wish Clauses - A1] Aşağıdaki cümlelerin hangisinde Conditionals & Wish Clauses kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A1 criteria.",
          "B) The team has neglected the vital A1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Conditionals & Wish Clauses konusu A1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "A2",
      "title": "Conditionals & Wish Clauses — A2: Kombinasyon ve Temel Bağlaçlar",
      "definition": "Conditionals & Wish Clauses konusunun A2 düzeyindeki tanımı: Sıklık zarfları, basit bağlaçlar, kısa cevaplar ve temel zaman karşılaştırmaları.",
      "usage": "Conditionals & Wish Clauses bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "If-clause (Condition) + Main clause (Result)",
      "negativeStructure": "If + S + negative verb, S + modal not + V",
      "questionStructure": "What would you do if + S + V?",
      "formula": "Type 1: If + V1, will V1 | Type 2: If + V2, would V1 | Type 3: If + had V3, would have V3",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "yesterday",
          "turkish": "dün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "The committee met yesterday to approve the budget.",
          "exampleTr": "Komite bütçeyi onaylamak için dün toplandı.",
          "pitfall": "Present Perfect ile kullanılmaz; daima Simple Past (V2) gerektirir."
        },
        {
          "marker": "two days ago",
          "turkish": "iki gün önce",
          "position": "Cümle sonunda",
          "exampleEn": "The package arrived two days ago.",
          "exampleTr": "Paket iki gün önce ulaştı.",
          "pitfall": "'before' ile karıştırılmamalıdır; 'ago' şimdiki andan geçmişe sayar ve V2 ister."
        },
        {
          "marker": "usually / often",
          "turkish": "genellikle / sık sık",
          "position": "Özne ile fiil arasında",
          "exampleEn": "He usually takes the subway to avoid traffic.",
          "exampleTr": "Trafikten kaçınmak için genellikle metroyu kullanır.",
          "pitfall": "He/she/it öznelerinde fiilin -s takısını unutturmamalıdır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that conditionals & wish clauses plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, conditionals & wish clauses konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Conditionals & Wish Clauses [A2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Conditionals & Wish Clauses - A2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Conditionals & Wish Clauses konusunda A2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers conditionals without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered conditionals after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Conditionals & Wish Clauses - A2] Aşağıdaki cümlelerin hangisinde Conditionals & Wish Clauses kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A2 criteria.",
          "B) The team has neglected the vital A2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Conditionals & Wish Clauses konusu A2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B1",
      "title": "Conditionals & Wish Clauses — B1: Cümle İçi Bağlam ve Süreç Zamanları",
      "definition": "Conditionals & Wish Clauses konusunun B1 düzeyindeki tanımı: Bağlaçlı cümleler, zaman uyumu, orta seviye kalıplar ve süreç zamanları.",
      "usage": "Conditionals & Wish Clauses bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "If-clause (Condition) + Main clause (Result)",
      "negativeStructure": "If + S + negative verb, S + modal not + V",
      "questionStructure": "What would you do if + S + V?",
      "formula": "Type 1: If + V1, will V1 | Type 2: If + V2, would V1 | Type 3: If + had V3, would have V3",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since 2015 / since then",
          "turkish": "-den beri",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "She has worked at the research center since 2015.",
          "exampleTr": "2015'ten beri araştırma merkezinde çalışıyor.",
          "pitfall": "Since'ten sonra geçmiş zaman noktası (V2), ana cümlede Present Perfect (have/has V3) gelir."
        },
        {
          "marker": "for five years",
          "turkish": "beş yıldır / beş sene boyunca",
          "position": "Cümle sonunda",
          "exampleEn": "They have lived in London for five years.",
          "exampleTr": "Beş yıldır Londra'da yaşıyorlar.",
          "pitfall": "Süreç bitmişse Simple Past ('lived for 5 years'), hala sürüyorsa Present Perfect ('have lived') kullanılır."
        },
        {
          "marker": "while / as",
          "turkish": "-iken",
          "position": "Yan cümlenin başında",
          "exampleEn": "While the scientist was calibrating the sensors, the alarm sounded.",
          "exampleTr": "Bilim insanı sensörleri kalibre ederken alarm çaldı.",
          "pitfall": "While genellikle Past Continuous (was/were Ving) ile süreç bildirir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that conditionals & wish clauses plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, conditionals & wish clauses konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Conditionals & Wish Clauses [B1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Conditionals & Wish Clauses - B1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Conditionals & Wish Clauses konusunda B1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers conditionals without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered conditionals after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Conditionals & Wish Clauses - B1] Aşağıdaki cümlelerin hangisinde Conditionals & Wish Clauses kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B1 criteria.",
          "B) The team has neglected the vital B1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Conditionals & Wish Clauses konusu B1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B2",
      "title": "Conditionals & Wish Clauses — B2: Akademik Bağlam ve İleri Yapılar",
      "definition": "Conditionals & Wish Clauses konusunun B2 düzeyindeki tanımı: Karmaşık yan cümleler, perfect/passive ilişkileri ve YDS tipi güçlü çeldiriciler.",
      "usage": "Conditionals & Wish Clauses bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "If-clause (Condition) + Main clause (Result)",
      "negativeStructure": "If + S + negative verb, S + modal not + V",
      "questionStructure": "What would you do if + S + V?",
      "formula": "Type 1: If + V1, will V1 | Type 2: If + V2, would V1 | Type 3: If + had V3, would have V3",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "by the time",
          "turkish": "-e kadar / -dığı zamana kadar",
          "position": "Yan cümlenin başında",
          "exampleEn": "By the time the firefighters arrived, the blaze had been extinguished.",
          "exampleTr": "İtfaiyeciler gelene kadar yangın söndürülmüştü.",
          "pitfall": "By the time + V2 -> had V3; By the time + V1 -> will have V3 zaman kuralına uymalıdır."
        },
        {
          "marker": "so far / up to now",
          "turkish": "şu ana kadar",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "No significant anomalies have been observed so far.",
          "exampleTr": "Şu ana kadar hiçbir belirgin anormallik gözlemlenmedi.",
          "pitfall": "Past tense ile değil Present Perfect (have/has V3) ile kullanılır."
        },
        {
          "marker": "in recent decades",
          "turkish": "son on yıllarda",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Global temperatures have risen markedly in recent decades.",
          "exampleTr": "Küresel sıcaklıklar son on yıllarda belirgin şekilde arttı.",
          "pitfall": "'In recent...' kalıbı günümüze uzanan süreci anlattığından Present Perfect ister."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that conditionals & wish clauses plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, conditionals & wish clauses konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Conditionals & Wish Clauses [B2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Conditionals & Wish Clauses - B2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Conditionals & Wish Clauses konusunda B2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers conditionals without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered conditionals after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Conditionals & Wish Clauses - B2] Aşağıdaki cümlelerin hangisinde Conditionals & Wish Clauses kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B2 criteria.",
          "B) The team has neglected the vital B2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Conditionals & Wish Clauses konusu B2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C1",
      "title": "Conditionals & Wish Clauses — C1: Nüanslar, İstisnalar ve Devrik Yapılar",
      "definition": "Conditionals & Wish Clauses konusunun C1 düzeyindeki tanımı: İnce anlam farkları, resmî/akademik üslup, istisnai kurallar ve karmaşık yapılar.",
      "usage": "Conditionals & Wish Clauses bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "If-clause (Condition) + Main clause (Result)",
      "negativeStructure": "If + S + negative verb, S + modal not + V",
      "questionStructure": "What would you do if + S + V?",
      "formula": "Type 1: If + V1, will V1 | Type 2: If + V2, would V1 | Type 3: If + had V3, would have V3",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "scarcely ... when",
          "turkish": "-er -mez",
          "position": "Devrik cümle başında",
          "exampleEn": "Scarcely had the treaty been signed when border clashes resumed.",
          "exampleTr": "Antlaşma imzalanır imzalanmaz sınır çatışmaları yeniden başladı.",
          "pitfall": "Scarcely had + S + V3 ... WHEN dizilimi bozulmamalıdır (THAN yazılmaz)."
        },
        {
          "marker": "hitherto / heretofore",
          "turkish": "şimdiye değin / o zamana kadar",
          "position": "Zarf konumunda",
          "exampleEn": "The expedition revealed biological species hitherto unknown to science.",
          "exampleTr": "Keşif heyeti şimdiye kadar bilimin bilmediği biyolojik türleri ortaya çıkardı.",
          "pitfall": "Resmî/akademik metinlerde geçmişe dönük sınırlayıcı zarf olarak kullanılır."
        },
        {
          "marker": "no sooner ... than",
          "turkish": "tam ... olmuştu ki",
          "position": "Devrik cümle başında",
          "exampleEn": "No sooner had the keynote concluded than reporters swarmed the podium.",
          "exampleTr": "Açılış konuşması biter bitmez muhabirler kürsüye üşüştü.",
          "pitfall": "No sooner daima 'than' ile eşleşir; 'when' yazmak klasik çeldiricidir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that conditionals & wish clauses plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, conditionals & wish clauses konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Conditionals & Wish Clauses [C1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Conditionals & Wish Clauses - C1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Conditionals & Wish Clauses konusunda C1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers conditionals without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered conditionals after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Conditionals & Wish Clauses - C1] Aşağıdaki cümlelerin hangisinde Conditionals & Wish Clauses kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C1 criteria.",
          "B) The team has neglected the vital C1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Conditionals & Wish Clauses konusu C1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C2",
      "title": "Conditionals & Wish Clauses — C2: Söylem, Stil ve Derin Anlam Analizi",
      "definition": "Conditionals & Wish Clauses konusunun C2 düzeyindeki tanımı: Üst düzey akademik söylem, nüans ustalıkları ve editörlük düzeyinde dil hakimiyeti.",
      "usage": "Conditionals & Wish Clauses bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "If-clause (Condition) + Main clause (Result)",
      "negativeStructure": "If + S + negative verb, S + modal not + V",
      "questionStructure": "What would you do if + S + V?",
      "formula": "Type 1: If + V1, will V1 | Type 2: If + V2, would V1 | Type 3: If + had V3, would have V3",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "from time immemorial",
          "turkish": "ezelden beri / çok eski zamanlardan beri",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Nomadic tribes have traversed these arid steppes from time immemorial.",
          "exampleTr": "Göçebe kabileler ezelden beri bu kurak bozkırları aşagelmiştir.",
          "pitfall": "Tarihsel derinlik ve süreklilik anlatır; genellikle Present Perfect ile pekişir."
        },
        {
          "marker": "in the twinkling of an eye",
          "turkish": "göz açıp kapayıncaya kadar",
          "position": "Cümle sonunda",
          "exampleEn": "Decades of architectural heritage were leveled in the twinkling of an eye by the quake.",
          "exampleTr": "Onlarca yıllık mimari miras depremle göz açıp kapayıncaya kadar yerle bir oldu.",
          "pitfall": "Ani ve radikal dönüşümleri niteleyen edebi/akademik üslup öğesidir."
        },
        {
          "marker": "at the eleventh hour",
          "turkish": "son anda / son dakikada",
          "position": "Cümle sonunda",
          "exampleEn": "The diplomatic accord was salvaged at the eleventh hour by bilateral concessions.",
          "exampleTr": "Diplomatik mutabakat son dakikada karşılıklı tavizlerle kurtarıldı.",
          "pitfall": "Gecikmiş ama zamanında yetişen kritik müdahaleleri betimler."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that conditionals & wish clauses plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, conditionals & wish clauses konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Conditionals & Wish Clauses [C2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Conditionals & Wish Clauses - C2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Conditionals & Wish Clauses konusunda C2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers conditionals without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered conditionals after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Conditionals & Wish Clauses - C2] Aşağıdaki cümlelerin hangisinde Conditionals & Wish Clauses kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C2 criteria.",
          "B) The team has neglected the vital C2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Conditionals & Wish Clauses konusu C2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "YDS",
      "title": "Conditionals & Wish Clauses — YDS: Sınav Stratejisi, Zaman Yönetimi ve Şık Eleme",
      "definition": "Conditionals & Wish Clauses konusunun YDS düzeyindeki tanımı: Soru kökündeki gizli ipuçları, çeldirici eleme algoritmaları ve sınav netini maksimize etme.",
      "usage": "Conditionals & Wish Clauses bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "YDS seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "If-clause (Condition) + Main clause (Result)",
      "negativeStructure": "If + S + negative verb, S + modal not + V",
      "questionStructure": "What would you do if + S + V?",
      "formula": "Type 1: If + V1, will V1 | Type 2: If + V2, would V1 | Type 3: If + had V3, would have V3",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since + Past Time / V2",
          "turkish": "-den beri (YDS Şifresi)",
          "position": "Yan cümle başı / Ana cümle Present Perfect",
          "exampleEn": "Renewable energy adoption has accelerated since the landmark 2015 Paris agreement.",
          "exampleTr": "Yenilenebilir enerjiye geçiş, tarihi 2015 Paris Anlaşması'ndan beri hızlandı.",
          "pitfall": "Soru kökünde 'since + V2' görürsen ana cümlede mutlaka 'have/has V3' ara!"
        },
        {
          "marker": "by + future time (e.g. by 2035)",
          "turkish": "-e kadar (Gelecek Şifresi)",
          "position": "Zaman zarfı konumu",
          "exampleEn": "By 2035, the majority of industrial vehicles will have transitioned to hydrogen fuel.",
          "exampleTr": "2035 yılına kadar sanayi araçlarının çoğunluğu hidrojen yakıtına geçmiş olacaktır.",
          "pitfall": "'By + Gelecek Zaman' daima Future Perfect (will have V3) gerektirir."
        },
        {
          "marker": "over / in / during + the last / past + time",
          "turkish": "son ... boyunca (Banko Soru)",
          "position": "Cümle başı veya sonu",
          "exampleEn": "Over the past five decades, computational capacity has expanded exponentially.",
          "exampleTr": "Son elli yıl boyunca bilişim kapasitesi katlanarak büyüdü.",
          "pitfall": "'Over/In the past...' kalıbı YDS'de %99 Present Perfect (have/has V3) ister!"
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that conditionals & wish clauses plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, conditionals & wish clauses konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Conditionals & Wish Clauses [YDS]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Conditionals & Wish Clauses - YDS]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "YDS Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Conditionals & Wish Clauses konusunda YDS düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers conditionals without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered conditionals after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Conditionals & Wish Clauses - YDS] Aşağıdaki cümlelerin hangisinde Conditionals & Wish Clauses kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard YDS criteria.",
          "B) The team has neglected the vital YDS variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the YDS protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary YDS models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Conditionals & Wish Clauses konusu YDS seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    }
  ],
  "relative-clauses": [
    {
      "level": "A1",
      "title": "Relative Clauses (Sıfat Cümlecikleri) — A1: Temel Tanıma ve Açık İpuçları",
      "definition": "Relative Clauses (Sıfat Cümlecikleri) konusunun A1 düzeyindeki tanımı: Temel özne-fiil uyumu, basit cümle kuruluşu ve en yalın kurallar.",
      "usage": "Relative Clauses (Sıfat Cümlecikleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + relative-clauses Temel Yapı + Nesne",
      "negativeStructure": "Özne + relative-clauses Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "relative-clauses Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[RELATIVE-CLAUSES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "always",
          "turkish": "her zaman",
          "position": "Özne ile fiil arasında",
          "exampleEn": "She always arrives at school on time.",
          "exampleTr": "Okula her zaman vaktinde gelir.",
          "pitfall": "Fiilden sonra yazılmamalıdır ('She arrives always' yanlıştır)."
        },
        {
          "marker": "every day",
          "turkish": "her gün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "I drink fresh orange juice every day.",
          "exampleTr": "Her gün taze portakal suyu içerim.",
          "pitfall": "Bitişik yazılan 'everyday' sıfattır; zaman zarfı ayrı yazılır ('every day')."
        },
        {
          "marker": "now / at the moment",
          "turkish": "şu anda / şimdi",
          "position": "Cümle sonunda",
          "exampleEn": "The children are playing in the garden right now.",
          "exampleTr": "Çocuklar şu anda bahçede oynuyorlar.",
          "pitfall": "Geniş zaman ile değil şimdiki zamanla (am/is/are + Ving) kullanılır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that relative clauses (sıfat cümlecikleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, relative clauses (sıfat cümlecikleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Relative Clauses (Sıfat Cümlecikleri) [A1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Relative Clauses (Sıfat Cümlecikleri) - A1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Relative Clauses (Sıfat Cümlecikleri) konusunda A1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers relative clauses without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered relative clauses after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Relative Clauses (Sıfat Cümlecikleri) - A1] Aşağıdaki cümlelerin hangisinde Relative Clauses (Sıfat Cümlecikleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A1 criteria.",
          "B) The team has neglected the vital A1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Relative Clauses (Sıfat Cümlecikleri) konusu A1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "A2",
      "title": "Relative Clauses (Sıfat Cümlecikleri) — A2: Kombinasyon ve Temel Bağlaçlar",
      "definition": "Relative Clauses (Sıfat Cümlecikleri) konusunun A2 düzeyindeki tanımı: Sıklık zarfları, basit bağlaçlar, kısa cevaplar ve temel zaman karşılaştırmaları.",
      "usage": "Relative Clauses (Sıfat Cümlecikleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + relative-clauses Temel Yapı + Nesne",
      "negativeStructure": "Özne + relative-clauses Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "relative-clauses Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[RELATIVE-CLAUSES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "yesterday",
          "turkish": "dün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "The committee met yesterday to approve the budget.",
          "exampleTr": "Komite bütçeyi onaylamak için dün toplandı.",
          "pitfall": "Present Perfect ile kullanılmaz; daima Simple Past (V2) gerektirir."
        },
        {
          "marker": "two days ago",
          "turkish": "iki gün önce",
          "position": "Cümle sonunda",
          "exampleEn": "The package arrived two days ago.",
          "exampleTr": "Paket iki gün önce ulaştı.",
          "pitfall": "'before' ile karıştırılmamalıdır; 'ago' şimdiki andan geçmişe sayar ve V2 ister."
        },
        {
          "marker": "usually / often",
          "turkish": "genellikle / sık sık",
          "position": "Özne ile fiil arasında",
          "exampleEn": "He usually takes the subway to avoid traffic.",
          "exampleTr": "Trafikten kaçınmak için genellikle metroyu kullanır.",
          "pitfall": "He/she/it öznelerinde fiilin -s takısını unutturmamalıdır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that relative clauses (sıfat cümlecikleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, relative clauses (sıfat cümlecikleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Relative Clauses (Sıfat Cümlecikleri) [A2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Relative Clauses (Sıfat Cümlecikleri) - A2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Relative Clauses (Sıfat Cümlecikleri) konusunda A2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers relative clauses without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered relative clauses after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Relative Clauses (Sıfat Cümlecikleri) - A2] Aşağıdaki cümlelerin hangisinde Relative Clauses (Sıfat Cümlecikleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A2 criteria.",
          "B) The team has neglected the vital A2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Relative Clauses (Sıfat Cümlecikleri) konusu A2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B1",
      "title": "Relative Clauses (Sıfat Cümlecikleri) — B1: Cümle İçi Bağlam ve Süreç Zamanları",
      "definition": "Relative Clauses (Sıfat Cümlecikleri) konusunun B1 düzeyindeki tanımı: Bağlaçlı cümleler, zaman uyumu, orta seviye kalıplar ve süreç zamanları.",
      "usage": "Relative Clauses (Sıfat Cümlecikleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + relative-clauses Temel Yapı + Nesne",
      "negativeStructure": "Özne + relative-clauses Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "relative-clauses Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[RELATIVE-CLAUSES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since 2015 / since then",
          "turkish": "-den beri",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "She has worked at the research center since 2015.",
          "exampleTr": "2015'ten beri araştırma merkezinde çalışıyor.",
          "pitfall": "Since'ten sonra geçmiş zaman noktası (V2), ana cümlede Present Perfect (have/has V3) gelir."
        },
        {
          "marker": "for five years",
          "turkish": "beş yıldır / beş sene boyunca",
          "position": "Cümle sonunda",
          "exampleEn": "They have lived in London for five years.",
          "exampleTr": "Beş yıldır Londra'da yaşıyorlar.",
          "pitfall": "Süreç bitmişse Simple Past ('lived for 5 years'), hala sürüyorsa Present Perfect ('have lived') kullanılır."
        },
        {
          "marker": "while / as",
          "turkish": "-iken",
          "position": "Yan cümlenin başında",
          "exampleEn": "While the scientist was calibrating the sensors, the alarm sounded.",
          "exampleTr": "Bilim insanı sensörleri kalibre ederken alarm çaldı.",
          "pitfall": "While genellikle Past Continuous (was/were Ving) ile süreç bildirir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that relative clauses (sıfat cümlecikleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, relative clauses (sıfat cümlecikleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Relative Clauses (Sıfat Cümlecikleri) [B1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Relative Clauses (Sıfat Cümlecikleri) - B1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Relative Clauses (Sıfat Cümlecikleri) konusunda B1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers relative clauses without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered relative clauses after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Relative Clauses (Sıfat Cümlecikleri) - B1] Aşağıdaki cümlelerin hangisinde Relative Clauses (Sıfat Cümlecikleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B1 criteria.",
          "B) The team has neglected the vital B1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Relative Clauses (Sıfat Cümlecikleri) konusu B1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B2",
      "title": "Relative Clauses (Sıfat Cümlecikleri) — B2: Akademik Bağlam ve İleri Yapılar",
      "definition": "Relative Clauses (Sıfat Cümlecikleri) konusunun B2 düzeyindeki tanımı: Karmaşık yan cümleler, perfect/passive ilişkileri ve YDS tipi güçlü çeldiriciler.",
      "usage": "Relative Clauses (Sıfat Cümlecikleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + relative-clauses Temel Yapı + Nesne",
      "negativeStructure": "Özne + relative-clauses Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "relative-clauses Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[RELATIVE-CLAUSES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "by the time",
          "turkish": "-e kadar / -dığı zamana kadar",
          "position": "Yan cümlenin başında",
          "exampleEn": "By the time the firefighters arrived, the blaze had been extinguished.",
          "exampleTr": "İtfaiyeciler gelene kadar yangın söndürülmüştü.",
          "pitfall": "By the time + V2 -> had V3; By the time + V1 -> will have V3 zaman kuralına uymalıdır."
        },
        {
          "marker": "so far / up to now",
          "turkish": "şu ana kadar",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "No significant anomalies have been observed so far.",
          "exampleTr": "Şu ana kadar hiçbir belirgin anormallik gözlemlenmedi.",
          "pitfall": "Past tense ile değil Present Perfect (have/has V3) ile kullanılır."
        },
        {
          "marker": "in recent decades",
          "turkish": "son on yıllarda",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Global temperatures have risen markedly in recent decades.",
          "exampleTr": "Küresel sıcaklıklar son on yıllarda belirgin şekilde arttı.",
          "pitfall": "'In recent...' kalıbı günümüze uzanan süreci anlattığından Present Perfect ister."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that relative clauses (sıfat cümlecikleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, relative clauses (sıfat cümlecikleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Relative Clauses (Sıfat Cümlecikleri) [B2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Relative Clauses (Sıfat Cümlecikleri) - B2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Relative Clauses (Sıfat Cümlecikleri) konusunda B2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers relative clauses without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered relative clauses after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Relative Clauses (Sıfat Cümlecikleri) - B2] Aşağıdaki cümlelerin hangisinde Relative Clauses (Sıfat Cümlecikleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B2 criteria.",
          "B) The team has neglected the vital B2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Relative Clauses (Sıfat Cümlecikleri) konusu B2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C1",
      "title": "Relative Clauses (Sıfat Cümlecikleri) — C1: Nüanslar, İstisnalar ve Devrik Yapılar",
      "definition": "Relative Clauses (Sıfat Cümlecikleri) konusunun C1 düzeyindeki tanımı: İnce anlam farkları, resmî/akademik üslup, istisnai kurallar ve karmaşık yapılar.",
      "usage": "Relative Clauses (Sıfat Cümlecikleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + relative-clauses Temel Yapı + Nesne",
      "negativeStructure": "Özne + relative-clauses Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "relative-clauses Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[RELATIVE-CLAUSES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "scarcely ... when",
          "turkish": "-er -mez",
          "position": "Devrik cümle başında",
          "exampleEn": "Scarcely had the treaty been signed when border clashes resumed.",
          "exampleTr": "Antlaşma imzalanır imzalanmaz sınır çatışmaları yeniden başladı.",
          "pitfall": "Scarcely had + S + V3 ... WHEN dizilimi bozulmamalıdır (THAN yazılmaz)."
        },
        {
          "marker": "hitherto / heretofore",
          "turkish": "şimdiye değin / o zamana kadar",
          "position": "Zarf konumunda",
          "exampleEn": "The expedition revealed biological species hitherto unknown to science.",
          "exampleTr": "Keşif heyeti şimdiye kadar bilimin bilmediği biyolojik türleri ortaya çıkardı.",
          "pitfall": "Resmî/akademik metinlerde geçmişe dönük sınırlayıcı zarf olarak kullanılır."
        },
        {
          "marker": "no sooner ... than",
          "turkish": "tam ... olmuştu ki",
          "position": "Devrik cümle başında",
          "exampleEn": "No sooner had the keynote concluded than reporters swarmed the podium.",
          "exampleTr": "Açılış konuşması biter bitmez muhabirler kürsüye üşüştü.",
          "pitfall": "No sooner daima 'than' ile eşleşir; 'when' yazmak klasik çeldiricidir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that relative clauses (sıfat cümlecikleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, relative clauses (sıfat cümlecikleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Relative Clauses (Sıfat Cümlecikleri) [C1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Relative Clauses (Sıfat Cümlecikleri) - C1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Relative Clauses (Sıfat Cümlecikleri) konusunda C1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers relative clauses without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered relative clauses after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Relative Clauses (Sıfat Cümlecikleri) - C1] Aşağıdaki cümlelerin hangisinde Relative Clauses (Sıfat Cümlecikleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C1 criteria.",
          "B) The team has neglected the vital C1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Relative Clauses (Sıfat Cümlecikleri) konusu C1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C2",
      "title": "Relative Clauses (Sıfat Cümlecikleri) — C2: Söylem, Stil ve Derin Anlam Analizi",
      "definition": "Relative Clauses (Sıfat Cümlecikleri) konusunun C2 düzeyindeki tanımı: Üst düzey akademik söylem, nüans ustalıkları ve editörlük düzeyinde dil hakimiyeti.",
      "usage": "Relative Clauses (Sıfat Cümlecikleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + relative-clauses Temel Yapı + Nesne",
      "negativeStructure": "Özne + relative-clauses Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "relative-clauses Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[RELATIVE-CLAUSES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "from time immemorial",
          "turkish": "ezelden beri / çok eski zamanlardan beri",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Nomadic tribes have traversed these arid steppes from time immemorial.",
          "exampleTr": "Göçebe kabileler ezelden beri bu kurak bozkırları aşagelmiştir.",
          "pitfall": "Tarihsel derinlik ve süreklilik anlatır; genellikle Present Perfect ile pekişir."
        },
        {
          "marker": "in the twinkling of an eye",
          "turkish": "göz açıp kapayıncaya kadar",
          "position": "Cümle sonunda",
          "exampleEn": "Decades of architectural heritage were leveled in the twinkling of an eye by the quake.",
          "exampleTr": "Onlarca yıllık mimari miras depremle göz açıp kapayıncaya kadar yerle bir oldu.",
          "pitfall": "Ani ve radikal dönüşümleri niteleyen edebi/akademik üslup öğesidir."
        },
        {
          "marker": "at the eleventh hour",
          "turkish": "son anda / son dakikada",
          "position": "Cümle sonunda",
          "exampleEn": "The diplomatic accord was salvaged at the eleventh hour by bilateral concessions.",
          "exampleTr": "Diplomatik mutabakat son dakikada karşılıklı tavizlerle kurtarıldı.",
          "pitfall": "Gecikmiş ama zamanında yetişen kritik müdahaleleri betimler."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that relative clauses (sıfat cümlecikleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, relative clauses (sıfat cümlecikleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Relative Clauses (Sıfat Cümlecikleri) [C2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Relative Clauses (Sıfat Cümlecikleri) - C2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Relative Clauses (Sıfat Cümlecikleri) konusunda C2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers relative clauses without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered relative clauses after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Relative Clauses (Sıfat Cümlecikleri) - C2] Aşağıdaki cümlelerin hangisinde Relative Clauses (Sıfat Cümlecikleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C2 criteria.",
          "B) The team has neglected the vital C2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Relative Clauses (Sıfat Cümlecikleri) konusu C2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "YDS",
      "title": "Relative Clauses (Sıfat Cümlecikleri) — YDS: Sınav Stratejisi, Zaman Yönetimi ve Şık Eleme",
      "definition": "Relative Clauses (Sıfat Cümlecikleri) konusunun YDS düzeyindeki tanımı: Soru kökündeki gizli ipuçları, çeldirici eleme algoritmaları ve sınav netini maksimize etme.",
      "usage": "Relative Clauses (Sıfat Cümlecikleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "YDS seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + relative-clauses Temel Yapı + Nesne",
      "negativeStructure": "Özne + relative-clauses Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "relative-clauses Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[RELATIVE-CLAUSES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since + Past Time / V2",
          "turkish": "-den beri (YDS Şifresi)",
          "position": "Yan cümle başı / Ana cümle Present Perfect",
          "exampleEn": "Renewable energy adoption has accelerated since the landmark 2015 Paris agreement.",
          "exampleTr": "Yenilenebilir enerjiye geçiş, tarihi 2015 Paris Anlaşması'ndan beri hızlandı.",
          "pitfall": "Soru kökünde 'since + V2' görürsen ana cümlede mutlaka 'have/has V3' ara!"
        },
        {
          "marker": "by + future time (e.g. by 2035)",
          "turkish": "-e kadar (Gelecek Şifresi)",
          "position": "Zaman zarfı konumu",
          "exampleEn": "By 2035, the majority of industrial vehicles will have transitioned to hydrogen fuel.",
          "exampleTr": "2035 yılına kadar sanayi araçlarının çoğunluğu hidrojen yakıtına geçmiş olacaktır.",
          "pitfall": "'By + Gelecek Zaman' daima Future Perfect (will have V3) gerektirir."
        },
        {
          "marker": "over / in / during + the last / past + time",
          "turkish": "son ... boyunca (Banko Soru)",
          "position": "Cümle başı veya sonu",
          "exampleEn": "Over the past five decades, computational capacity has expanded exponentially.",
          "exampleTr": "Son elli yıl boyunca bilişim kapasitesi katlanarak büyüdü.",
          "pitfall": "'Over/In the past...' kalıbı YDS'de %99 Present Perfect (have/has V3) ister!"
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that relative clauses (sıfat cümlecikleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, relative clauses (sıfat cümlecikleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Relative Clauses (Sıfat Cümlecikleri) [YDS]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Relative Clauses (Sıfat Cümlecikleri) - YDS]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "YDS Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Relative Clauses (Sıfat Cümlecikleri) konusunda YDS düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers relative clauses without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered relative clauses after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Relative Clauses (Sıfat Cümlecikleri) - YDS] Aşağıdaki cümlelerin hangisinde Relative Clauses (Sıfat Cümlecikleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard YDS criteria.",
          "B) The team has neglected the vital YDS variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the YDS protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary YDS models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Relative Clauses (Sıfat Cümlecikleri) konusu YDS seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    }
  ],
  "noun-clauses": [
    {
      "level": "A1",
      "title": "Noun Clauses (İsim Cümlecikleri) — A1: Temel Tanıma ve Açık İpuçları",
      "definition": "Noun Clauses (İsim Cümlecikleri) konusunun A1 düzeyindeki tanımı: Temel özne-fiil uyumu, basit cümle kuruluşu ve en yalın kurallar.",
      "usage": "Noun Clauses (İsim Cümlecikleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + noun-clauses Temel Yapı + Nesne",
      "negativeStructure": "Özne + noun-clauses Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "noun-clauses Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[NOUN-CLAUSES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "always",
          "turkish": "her zaman",
          "position": "Özne ile fiil arasında",
          "exampleEn": "She always arrives at school on time.",
          "exampleTr": "Okula her zaman vaktinde gelir.",
          "pitfall": "Fiilden sonra yazılmamalıdır ('She arrives always' yanlıştır)."
        },
        {
          "marker": "every day",
          "turkish": "her gün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "I drink fresh orange juice every day.",
          "exampleTr": "Her gün taze portakal suyu içerim.",
          "pitfall": "Bitişik yazılan 'everyday' sıfattır; zaman zarfı ayrı yazılır ('every day')."
        },
        {
          "marker": "now / at the moment",
          "turkish": "şu anda / şimdi",
          "position": "Cümle sonunda",
          "exampleEn": "The children are playing in the garden right now.",
          "exampleTr": "Çocuklar şu anda bahçede oynuyorlar.",
          "pitfall": "Geniş zaman ile değil şimdiki zamanla (am/is/are + Ving) kullanılır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that noun clauses (i̇sim cümlecikleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, noun clauses (i̇sim cümlecikleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Noun Clauses (İsim Cümlecikleri) [A1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Noun Clauses (İsim Cümlecikleri) - A1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Noun Clauses (İsim Cümlecikleri) konusunda A1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers noun clauses without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered noun clauses after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Noun Clauses (İsim Cümlecikleri) - A1] Aşağıdaki cümlelerin hangisinde Noun Clauses (İsim Cümlecikleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A1 criteria.",
          "B) The team has neglected the vital A1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Noun Clauses (İsim Cümlecikleri) konusu A1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "A2",
      "title": "Noun Clauses (İsim Cümlecikleri) — A2: Kombinasyon ve Temel Bağlaçlar",
      "definition": "Noun Clauses (İsim Cümlecikleri) konusunun A2 düzeyindeki tanımı: Sıklık zarfları, basit bağlaçlar, kısa cevaplar ve temel zaman karşılaştırmaları.",
      "usage": "Noun Clauses (İsim Cümlecikleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + noun-clauses Temel Yapı + Nesne",
      "negativeStructure": "Özne + noun-clauses Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "noun-clauses Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[NOUN-CLAUSES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "yesterday",
          "turkish": "dün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "The committee met yesterday to approve the budget.",
          "exampleTr": "Komite bütçeyi onaylamak için dün toplandı.",
          "pitfall": "Present Perfect ile kullanılmaz; daima Simple Past (V2) gerektirir."
        },
        {
          "marker": "two days ago",
          "turkish": "iki gün önce",
          "position": "Cümle sonunda",
          "exampleEn": "The package arrived two days ago.",
          "exampleTr": "Paket iki gün önce ulaştı.",
          "pitfall": "'before' ile karıştırılmamalıdır; 'ago' şimdiki andan geçmişe sayar ve V2 ister."
        },
        {
          "marker": "usually / often",
          "turkish": "genellikle / sık sık",
          "position": "Özne ile fiil arasında",
          "exampleEn": "He usually takes the subway to avoid traffic.",
          "exampleTr": "Trafikten kaçınmak için genellikle metroyu kullanır.",
          "pitfall": "He/she/it öznelerinde fiilin -s takısını unutturmamalıdır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that noun clauses (i̇sim cümlecikleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, noun clauses (i̇sim cümlecikleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Noun Clauses (İsim Cümlecikleri) [A2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Noun Clauses (İsim Cümlecikleri) - A2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Noun Clauses (İsim Cümlecikleri) konusunda A2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers noun clauses without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered noun clauses after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Noun Clauses (İsim Cümlecikleri) - A2] Aşağıdaki cümlelerin hangisinde Noun Clauses (İsim Cümlecikleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A2 criteria.",
          "B) The team has neglected the vital A2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Noun Clauses (İsim Cümlecikleri) konusu A2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B1",
      "title": "Noun Clauses (İsim Cümlecikleri) — B1: Cümle İçi Bağlam ve Süreç Zamanları",
      "definition": "Noun Clauses (İsim Cümlecikleri) konusunun B1 düzeyindeki tanımı: Bağlaçlı cümleler, zaman uyumu, orta seviye kalıplar ve süreç zamanları.",
      "usage": "Noun Clauses (İsim Cümlecikleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + noun-clauses Temel Yapı + Nesne",
      "negativeStructure": "Özne + noun-clauses Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "noun-clauses Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[NOUN-CLAUSES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since 2015 / since then",
          "turkish": "-den beri",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "She has worked at the research center since 2015.",
          "exampleTr": "2015'ten beri araştırma merkezinde çalışıyor.",
          "pitfall": "Since'ten sonra geçmiş zaman noktası (V2), ana cümlede Present Perfect (have/has V3) gelir."
        },
        {
          "marker": "for five years",
          "turkish": "beş yıldır / beş sene boyunca",
          "position": "Cümle sonunda",
          "exampleEn": "They have lived in London for five years.",
          "exampleTr": "Beş yıldır Londra'da yaşıyorlar.",
          "pitfall": "Süreç bitmişse Simple Past ('lived for 5 years'), hala sürüyorsa Present Perfect ('have lived') kullanılır."
        },
        {
          "marker": "while / as",
          "turkish": "-iken",
          "position": "Yan cümlenin başında",
          "exampleEn": "While the scientist was calibrating the sensors, the alarm sounded.",
          "exampleTr": "Bilim insanı sensörleri kalibre ederken alarm çaldı.",
          "pitfall": "While genellikle Past Continuous (was/were Ving) ile süreç bildirir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that noun clauses (i̇sim cümlecikleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, noun clauses (i̇sim cümlecikleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Noun Clauses (İsim Cümlecikleri) [B1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Noun Clauses (İsim Cümlecikleri) - B1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Noun Clauses (İsim Cümlecikleri) konusunda B1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers noun clauses without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered noun clauses after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Noun Clauses (İsim Cümlecikleri) - B1] Aşağıdaki cümlelerin hangisinde Noun Clauses (İsim Cümlecikleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B1 criteria.",
          "B) The team has neglected the vital B1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Noun Clauses (İsim Cümlecikleri) konusu B1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B2",
      "title": "Noun Clauses (İsim Cümlecikleri) — B2: Akademik Bağlam ve İleri Yapılar",
      "definition": "Noun Clauses (İsim Cümlecikleri) konusunun B2 düzeyindeki tanımı: Karmaşık yan cümleler, perfect/passive ilişkileri ve YDS tipi güçlü çeldiriciler.",
      "usage": "Noun Clauses (İsim Cümlecikleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + noun-clauses Temel Yapı + Nesne",
      "negativeStructure": "Özne + noun-clauses Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "noun-clauses Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[NOUN-CLAUSES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "by the time",
          "turkish": "-e kadar / -dığı zamana kadar",
          "position": "Yan cümlenin başında",
          "exampleEn": "By the time the firefighters arrived, the blaze had been extinguished.",
          "exampleTr": "İtfaiyeciler gelene kadar yangın söndürülmüştü.",
          "pitfall": "By the time + V2 -> had V3; By the time + V1 -> will have V3 zaman kuralına uymalıdır."
        },
        {
          "marker": "so far / up to now",
          "turkish": "şu ana kadar",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "No significant anomalies have been observed so far.",
          "exampleTr": "Şu ana kadar hiçbir belirgin anormallik gözlemlenmedi.",
          "pitfall": "Past tense ile değil Present Perfect (have/has V3) ile kullanılır."
        },
        {
          "marker": "in recent decades",
          "turkish": "son on yıllarda",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Global temperatures have risen markedly in recent decades.",
          "exampleTr": "Küresel sıcaklıklar son on yıllarda belirgin şekilde arttı.",
          "pitfall": "'In recent...' kalıbı günümüze uzanan süreci anlattığından Present Perfect ister."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that noun clauses (i̇sim cümlecikleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, noun clauses (i̇sim cümlecikleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Noun Clauses (İsim Cümlecikleri) [B2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Noun Clauses (İsim Cümlecikleri) - B2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Noun Clauses (İsim Cümlecikleri) konusunda B2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers noun clauses without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered noun clauses after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Noun Clauses (İsim Cümlecikleri) - B2] Aşağıdaki cümlelerin hangisinde Noun Clauses (İsim Cümlecikleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B2 criteria.",
          "B) The team has neglected the vital B2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Noun Clauses (İsim Cümlecikleri) konusu B2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C1",
      "title": "Noun Clauses (İsim Cümlecikleri) — C1: Nüanslar, İstisnalar ve Devrik Yapılar",
      "definition": "Noun Clauses (İsim Cümlecikleri) konusunun C1 düzeyindeki tanımı: İnce anlam farkları, resmî/akademik üslup, istisnai kurallar ve karmaşık yapılar.",
      "usage": "Noun Clauses (İsim Cümlecikleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + noun-clauses Temel Yapı + Nesne",
      "negativeStructure": "Özne + noun-clauses Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "noun-clauses Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[NOUN-CLAUSES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "scarcely ... when",
          "turkish": "-er -mez",
          "position": "Devrik cümle başında",
          "exampleEn": "Scarcely had the treaty been signed when border clashes resumed.",
          "exampleTr": "Antlaşma imzalanır imzalanmaz sınır çatışmaları yeniden başladı.",
          "pitfall": "Scarcely had + S + V3 ... WHEN dizilimi bozulmamalıdır (THAN yazılmaz)."
        },
        {
          "marker": "hitherto / heretofore",
          "turkish": "şimdiye değin / o zamana kadar",
          "position": "Zarf konumunda",
          "exampleEn": "The expedition revealed biological species hitherto unknown to science.",
          "exampleTr": "Keşif heyeti şimdiye kadar bilimin bilmediği biyolojik türleri ortaya çıkardı.",
          "pitfall": "Resmî/akademik metinlerde geçmişe dönük sınırlayıcı zarf olarak kullanılır."
        },
        {
          "marker": "no sooner ... than",
          "turkish": "tam ... olmuştu ki",
          "position": "Devrik cümle başında",
          "exampleEn": "No sooner had the keynote concluded than reporters swarmed the podium.",
          "exampleTr": "Açılış konuşması biter bitmez muhabirler kürsüye üşüştü.",
          "pitfall": "No sooner daima 'than' ile eşleşir; 'when' yazmak klasik çeldiricidir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that noun clauses (i̇sim cümlecikleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, noun clauses (i̇sim cümlecikleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Noun Clauses (İsim Cümlecikleri) [C1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Noun Clauses (İsim Cümlecikleri) - C1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Noun Clauses (İsim Cümlecikleri) konusunda C1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers noun clauses without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered noun clauses after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Noun Clauses (İsim Cümlecikleri) - C1] Aşağıdaki cümlelerin hangisinde Noun Clauses (İsim Cümlecikleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C1 criteria.",
          "B) The team has neglected the vital C1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Noun Clauses (İsim Cümlecikleri) konusu C1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C2",
      "title": "Noun Clauses (İsim Cümlecikleri) — C2: Söylem, Stil ve Derin Anlam Analizi",
      "definition": "Noun Clauses (İsim Cümlecikleri) konusunun C2 düzeyindeki tanımı: Üst düzey akademik söylem, nüans ustalıkları ve editörlük düzeyinde dil hakimiyeti.",
      "usage": "Noun Clauses (İsim Cümlecikleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + noun-clauses Temel Yapı + Nesne",
      "negativeStructure": "Özne + noun-clauses Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "noun-clauses Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[NOUN-CLAUSES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "from time immemorial",
          "turkish": "ezelden beri / çok eski zamanlardan beri",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Nomadic tribes have traversed these arid steppes from time immemorial.",
          "exampleTr": "Göçebe kabileler ezelden beri bu kurak bozkırları aşagelmiştir.",
          "pitfall": "Tarihsel derinlik ve süreklilik anlatır; genellikle Present Perfect ile pekişir."
        },
        {
          "marker": "in the twinkling of an eye",
          "turkish": "göz açıp kapayıncaya kadar",
          "position": "Cümle sonunda",
          "exampleEn": "Decades of architectural heritage were leveled in the twinkling of an eye by the quake.",
          "exampleTr": "Onlarca yıllık mimari miras depremle göz açıp kapayıncaya kadar yerle bir oldu.",
          "pitfall": "Ani ve radikal dönüşümleri niteleyen edebi/akademik üslup öğesidir."
        },
        {
          "marker": "at the eleventh hour",
          "turkish": "son anda / son dakikada",
          "position": "Cümle sonunda",
          "exampleEn": "The diplomatic accord was salvaged at the eleventh hour by bilateral concessions.",
          "exampleTr": "Diplomatik mutabakat son dakikada karşılıklı tavizlerle kurtarıldı.",
          "pitfall": "Gecikmiş ama zamanında yetişen kritik müdahaleleri betimler."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that noun clauses (i̇sim cümlecikleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, noun clauses (i̇sim cümlecikleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Noun Clauses (İsim Cümlecikleri) [C2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Noun Clauses (İsim Cümlecikleri) - C2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Noun Clauses (İsim Cümlecikleri) konusunda C2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers noun clauses without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered noun clauses after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Noun Clauses (İsim Cümlecikleri) - C2] Aşağıdaki cümlelerin hangisinde Noun Clauses (İsim Cümlecikleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C2 criteria.",
          "B) The team has neglected the vital C2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Noun Clauses (İsim Cümlecikleri) konusu C2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "YDS",
      "title": "Noun Clauses (İsim Cümlecikleri) — YDS: Sınav Stratejisi, Zaman Yönetimi ve Şık Eleme",
      "definition": "Noun Clauses (İsim Cümlecikleri) konusunun YDS düzeyindeki tanımı: Soru kökündeki gizli ipuçları, çeldirici eleme algoritmaları ve sınav netini maksimize etme.",
      "usage": "Noun Clauses (İsim Cümlecikleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "YDS seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + noun-clauses Temel Yapı + Nesne",
      "negativeStructure": "Özne + noun-clauses Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "noun-clauses Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[NOUN-CLAUSES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since + Past Time / V2",
          "turkish": "-den beri (YDS Şifresi)",
          "position": "Yan cümle başı / Ana cümle Present Perfect",
          "exampleEn": "Renewable energy adoption has accelerated since the landmark 2015 Paris agreement.",
          "exampleTr": "Yenilenebilir enerjiye geçiş, tarihi 2015 Paris Anlaşması'ndan beri hızlandı.",
          "pitfall": "Soru kökünde 'since + V2' görürsen ana cümlede mutlaka 'have/has V3' ara!"
        },
        {
          "marker": "by + future time (e.g. by 2035)",
          "turkish": "-e kadar (Gelecek Şifresi)",
          "position": "Zaman zarfı konumu",
          "exampleEn": "By 2035, the majority of industrial vehicles will have transitioned to hydrogen fuel.",
          "exampleTr": "2035 yılına kadar sanayi araçlarının çoğunluğu hidrojen yakıtına geçmiş olacaktır.",
          "pitfall": "'By + Gelecek Zaman' daima Future Perfect (will have V3) gerektirir."
        },
        {
          "marker": "over / in / during + the last / past + time",
          "turkish": "son ... boyunca (Banko Soru)",
          "position": "Cümle başı veya sonu",
          "exampleEn": "Over the past five decades, computational capacity has expanded exponentially.",
          "exampleTr": "Son elli yıl boyunca bilişim kapasitesi katlanarak büyüdü.",
          "pitfall": "'Over/In the past...' kalıbı YDS'de %99 Present Perfect (have/has V3) ister!"
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that noun clauses (i̇sim cümlecikleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, noun clauses (i̇sim cümlecikleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Noun Clauses (İsim Cümlecikleri) [YDS]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Noun Clauses (İsim Cümlecikleri) - YDS]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "YDS Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Noun Clauses (İsim Cümlecikleri) konusunda YDS düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers noun clauses without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered noun clauses after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Noun Clauses (İsim Cümlecikleri) - YDS] Aşağıdaki cümlelerin hangisinde Noun Clauses (İsim Cümlecikleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard YDS criteria.",
          "B) The team has neglected the vital YDS variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the YDS protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary YDS models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Noun Clauses (İsim Cümlecikleri) konusu YDS seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    }
  ],
  "gerunds-infinitives": [
    {
      "level": "A1",
      "title": "Gerunds & Infinitives — A1: Temel Tanıma ve Açık İpuçları",
      "definition": "Gerunds & Infinitives konusunun A1 düzeyindeki tanımı: Temel özne-fiil uyumu, basit cümle kuruluşu ve en yalın kurallar.",
      "usage": "Gerunds & Infinitives bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + gerunds-infinitives Temel Yapı + Nesne",
      "negativeStructure": "Özne + gerunds-infinitives Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "gerunds-infinitives Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[GERUNDS-INFINITIVES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "always",
          "turkish": "her zaman",
          "position": "Özne ile fiil arasında",
          "exampleEn": "She always arrives at school on time.",
          "exampleTr": "Okula her zaman vaktinde gelir.",
          "pitfall": "Fiilden sonra yazılmamalıdır ('She arrives always' yanlıştır)."
        },
        {
          "marker": "every day",
          "turkish": "her gün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "I drink fresh orange juice every day.",
          "exampleTr": "Her gün taze portakal suyu içerim.",
          "pitfall": "Bitişik yazılan 'everyday' sıfattır; zaman zarfı ayrı yazılır ('every day')."
        },
        {
          "marker": "now / at the moment",
          "turkish": "şu anda / şimdi",
          "position": "Cümle sonunda",
          "exampleEn": "The children are playing in the garden right now.",
          "exampleTr": "Çocuklar şu anda bahçede oynuyorlar.",
          "pitfall": "Geniş zaman ile değil şimdiki zamanla (am/is/are + Ving) kullanılır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that gerunds & infinitives plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, gerunds & infinitives konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Gerunds & Infinitives [A1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Gerunds & Infinitives - A1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Gerunds & Infinitives konusunda A1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers gerunds infinitives without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered gerunds infinitives after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Gerunds & Infinitives - A1] Aşağıdaki cümlelerin hangisinde Gerunds & Infinitives kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A1 criteria.",
          "B) The team has neglected the vital A1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Gerunds & Infinitives konusu A1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "A2",
      "title": "Gerunds & Infinitives — A2: Kombinasyon ve Temel Bağlaçlar",
      "definition": "Gerunds & Infinitives konusunun A2 düzeyindeki tanımı: Sıklık zarfları, basit bağlaçlar, kısa cevaplar ve temel zaman karşılaştırmaları.",
      "usage": "Gerunds & Infinitives bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + gerunds-infinitives Temel Yapı + Nesne",
      "negativeStructure": "Özne + gerunds-infinitives Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "gerunds-infinitives Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[GERUNDS-INFINITIVES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "yesterday",
          "turkish": "dün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "The committee met yesterday to approve the budget.",
          "exampleTr": "Komite bütçeyi onaylamak için dün toplandı.",
          "pitfall": "Present Perfect ile kullanılmaz; daima Simple Past (V2) gerektirir."
        },
        {
          "marker": "two days ago",
          "turkish": "iki gün önce",
          "position": "Cümle sonunda",
          "exampleEn": "The package arrived two days ago.",
          "exampleTr": "Paket iki gün önce ulaştı.",
          "pitfall": "'before' ile karıştırılmamalıdır; 'ago' şimdiki andan geçmişe sayar ve V2 ister."
        },
        {
          "marker": "usually / often",
          "turkish": "genellikle / sık sık",
          "position": "Özne ile fiil arasında",
          "exampleEn": "He usually takes the subway to avoid traffic.",
          "exampleTr": "Trafikten kaçınmak için genellikle metroyu kullanır.",
          "pitfall": "He/she/it öznelerinde fiilin -s takısını unutturmamalıdır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that gerunds & infinitives plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, gerunds & infinitives konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Gerunds & Infinitives [A2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Gerunds & Infinitives - A2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Gerunds & Infinitives konusunda A2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers gerunds infinitives without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered gerunds infinitives after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Gerunds & Infinitives - A2] Aşağıdaki cümlelerin hangisinde Gerunds & Infinitives kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A2 criteria.",
          "B) The team has neglected the vital A2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Gerunds & Infinitives konusu A2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B1",
      "title": "Gerunds & Infinitives — B1: Cümle İçi Bağlam ve Süreç Zamanları",
      "definition": "Gerunds & Infinitives konusunun B1 düzeyindeki tanımı: Bağlaçlı cümleler, zaman uyumu, orta seviye kalıplar ve süreç zamanları.",
      "usage": "Gerunds & Infinitives bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + gerunds-infinitives Temel Yapı + Nesne",
      "negativeStructure": "Özne + gerunds-infinitives Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "gerunds-infinitives Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[GERUNDS-INFINITIVES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since 2015 / since then",
          "turkish": "-den beri",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "She has worked at the research center since 2015.",
          "exampleTr": "2015'ten beri araştırma merkezinde çalışıyor.",
          "pitfall": "Since'ten sonra geçmiş zaman noktası (V2), ana cümlede Present Perfect (have/has V3) gelir."
        },
        {
          "marker": "for five years",
          "turkish": "beş yıldır / beş sene boyunca",
          "position": "Cümle sonunda",
          "exampleEn": "They have lived in London for five years.",
          "exampleTr": "Beş yıldır Londra'da yaşıyorlar.",
          "pitfall": "Süreç bitmişse Simple Past ('lived for 5 years'), hala sürüyorsa Present Perfect ('have lived') kullanılır."
        },
        {
          "marker": "while / as",
          "turkish": "-iken",
          "position": "Yan cümlenin başında",
          "exampleEn": "While the scientist was calibrating the sensors, the alarm sounded.",
          "exampleTr": "Bilim insanı sensörleri kalibre ederken alarm çaldı.",
          "pitfall": "While genellikle Past Continuous (was/were Ving) ile süreç bildirir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that gerunds & infinitives plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, gerunds & infinitives konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Gerunds & Infinitives [B1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Gerunds & Infinitives - B1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Gerunds & Infinitives konusunda B1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers gerunds infinitives without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered gerunds infinitives after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Gerunds & Infinitives - B1] Aşağıdaki cümlelerin hangisinde Gerunds & Infinitives kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B1 criteria.",
          "B) The team has neglected the vital B1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Gerunds & Infinitives konusu B1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B2",
      "title": "Gerunds & Infinitives — B2: Akademik Bağlam ve İleri Yapılar",
      "definition": "Gerunds & Infinitives konusunun B2 düzeyindeki tanımı: Karmaşık yan cümleler, perfect/passive ilişkileri ve YDS tipi güçlü çeldiriciler.",
      "usage": "Gerunds & Infinitives bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + gerunds-infinitives Temel Yapı + Nesne",
      "negativeStructure": "Özne + gerunds-infinitives Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "gerunds-infinitives Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[GERUNDS-INFINITIVES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "by the time",
          "turkish": "-e kadar / -dığı zamana kadar",
          "position": "Yan cümlenin başında",
          "exampleEn": "By the time the firefighters arrived, the blaze had been extinguished.",
          "exampleTr": "İtfaiyeciler gelene kadar yangın söndürülmüştü.",
          "pitfall": "By the time + V2 -> had V3; By the time + V1 -> will have V3 zaman kuralına uymalıdır."
        },
        {
          "marker": "so far / up to now",
          "turkish": "şu ana kadar",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "No significant anomalies have been observed so far.",
          "exampleTr": "Şu ana kadar hiçbir belirgin anormallik gözlemlenmedi.",
          "pitfall": "Past tense ile değil Present Perfect (have/has V3) ile kullanılır."
        },
        {
          "marker": "in recent decades",
          "turkish": "son on yıllarda",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Global temperatures have risen markedly in recent decades.",
          "exampleTr": "Küresel sıcaklıklar son on yıllarda belirgin şekilde arttı.",
          "pitfall": "'In recent...' kalıbı günümüze uzanan süreci anlattığından Present Perfect ister."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that gerunds & infinitives plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, gerunds & infinitives konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Gerunds & Infinitives [B2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Gerunds & Infinitives - B2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Gerunds & Infinitives konusunda B2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers gerunds infinitives without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered gerunds infinitives after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Gerunds & Infinitives - B2] Aşağıdaki cümlelerin hangisinde Gerunds & Infinitives kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B2 criteria.",
          "B) The team has neglected the vital B2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Gerunds & Infinitives konusu B2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C1",
      "title": "Gerunds & Infinitives — C1: Nüanslar, İstisnalar ve Devrik Yapılar",
      "definition": "Gerunds & Infinitives konusunun C1 düzeyindeki tanımı: İnce anlam farkları, resmî/akademik üslup, istisnai kurallar ve karmaşık yapılar.",
      "usage": "Gerunds & Infinitives bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + gerunds-infinitives Temel Yapı + Nesne",
      "negativeStructure": "Özne + gerunds-infinitives Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "gerunds-infinitives Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[GERUNDS-INFINITIVES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "scarcely ... when",
          "turkish": "-er -mez",
          "position": "Devrik cümle başında",
          "exampleEn": "Scarcely had the treaty been signed when border clashes resumed.",
          "exampleTr": "Antlaşma imzalanır imzalanmaz sınır çatışmaları yeniden başladı.",
          "pitfall": "Scarcely had + S + V3 ... WHEN dizilimi bozulmamalıdır (THAN yazılmaz)."
        },
        {
          "marker": "hitherto / heretofore",
          "turkish": "şimdiye değin / o zamana kadar",
          "position": "Zarf konumunda",
          "exampleEn": "The expedition revealed biological species hitherto unknown to science.",
          "exampleTr": "Keşif heyeti şimdiye kadar bilimin bilmediği biyolojik türleri ortaya çıkardı.",
          "pitfall": "Resmî/akademik metinlerde geçmişe dönük sınırlayıcı zarf olarak kullanılır."
        },
        {
          "marker": "no sooner ... than",
          "turkish": "tam ... olmuştu ki",
          "position": "Devrik cümle başında",
          "exampleEn": "No sooner had the keynote concluded than reporters swarmed the podium.",
          "exampleTr": "Açılış konuşması biter bitmez muhabirler kürsüye üşüştü.",
          "pitfall": "No sooner daima 'than' ile eşleşir; 'when' yazmak klasik çeldiricidir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that gerunds & infinitives plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, gerunds & infinitives konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Gerunds & Infinitives [C1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Gerunds & Infinitives - C1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Gerunds & Infinitives konusunda C1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers gerunds infinitives without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered gerunds infinitives after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Gerunds & Infinitives - C1] Aşağıdaki cümlelerin hangisinde Gerunds & Infinitives kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C1 criteria.",
          "B) The team has neglected the vital C1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Gerunds & Infinitives konusu C1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C2",
      "title": "Gerunds & Infinitives — C2: Söylem, Stil ve Derin Anlam Analizi",
      "definition": "Gerunds & Infinitives konusunun C2 düzeyindeki tanımı: Üst düzey akademik söylem, nüans ustalıkları ve editörlük düzeyinde dil hakimiyeti.",
      "usage": "Gerunds & Infinitives bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + gerunds-infinitives Temel Yapı + Nesne",
      "negativeStructure": "Özne + gerunds-infinitives Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "gerunds-infinitives Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[GERUNDS-INFINITIVES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "from time immemorial",
          "turkish": "ezelden beri / çok eski zamanlardan beri",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Nomadic tribes have traversed these arid steppes from time immemorial.",
          "exampleTr": "Göçebe kabileler ezelden beri bu kurak bozkırları aşagelmiştir.",
          "pitfall": "Tarihsel derinlik ve süreklilik anlatır; genellikle Present Perfect ile pekişir."
        },
        {
          "marker": "in the twinkling of an eye",
          "turkish": "göz açıp kapayıncaya kadar",
          "position": "Cümle sonunda",
          "exampleEn": "Decades of architectural heritage were leveled in the twinkling of an eye by the quake.",
          "exampleTr": "Onlarca yıllık mimari miras depremle göz açıp kapayıncaya kadar yerle bir oldu.",
          "pitfall": "Ani ve radikal dönüşümleri niteleyen edebi/akademik üslup öğesidir."
        },
        {
          "marker": "at the eleventh hour",
          "turkish": "son anda / son dakikada",
          "position": "Cümle sonunda",
          "exampleEn": "The diplomatic accord was salvaged at the eleventh hour by bilateral concessions.",
          "exampleTr": "Diplomatik mutabakat son dakikada karşılıklı tavizlerle kurtarıldı.",
          "pitfall": "Gecikmiş ama zamanında yetişen kritik müdahaleleri betimler."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that gerunds & infinitives plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, gerunds & infinitives konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Gerunds & Infinitives [C2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Gerunds & Infinitives - C2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Gerunds & Infinitives konusunda C2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers gerunds infinitives without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered gerunds infinitives after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Gerunds & Infinitives - C2] Aşağıdaki cümlelerin hangisinde Gerunds & Infinitives kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C2 criteria.",
          "B) The team has neglected the vital C2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Gerunds & Infinitives konusu C2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "YDS",
      "title": "Gerunds & Infinitives — YDS: Sınav Stratejisi, Zaman Yönetimi ve Şık Eleme",
      "definition": "Gerunds & Infinitives konusunun YDS düzeyindeki tanımı: Soru kökündeki gizli ipuçları, çeldirici eleme algoritmaları ve sınav netini maksimize etme.",
      "usage": "Gerunds & Infinitives bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "YDS seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + gerunds-infinitives Temel Yapı + Nesne",
      "negativeStructure": "Özne + gerunds-infinitives Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "gerunds-infinitives Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[GERUNDS-INFINITIVES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since + Past Time / V2",
          "turkish": "-den beri (YDS Şifresi)",
          "position": "Yan cümle başı / Ana cümle Present Perfect",
          "exampleEn": "Renewable energy adoption has accelerated since the landmark 2015 Paris agreement.",
          "exampleTr": "Yenilenebilir enerjiye geçiş, tarihi 2015 Paris Anlaşması'ndan beri hızlandı.",
          "pitfall": "Soru kökünde 'since + V2' görürsen ana cümlede mutlaka 'have/has V3' ara!"
        },
        {
          "marker": "by + future time (e.g. by 2035)",
          "turkish": "-e kadar (Gelecek Şifresi)",
          "position": "Zaman zarfı konumu",
          "exampleEn": "By 2035, the majority of industrial vehicles will have transitioned to hydrogen fuel.",
          "exampleTr": "2035 yılına kadar sanayi araçlarının çoğunluğu hidrojen yakıtına geçmiş olacaktır.",
          "pitfall": "'By + Gelecek Zaman' daima Future Perfect (will have V3) gerektirir."
        },
        {
          "marker": "over / in / during + the last / past + time",
          "turkish": "son ... boyunca (Banko Soru)",
          "position": "Cümle başı veya sonu",
          "exampleEn": "Over the past five decades, computational capacity has expanded exponentially.",
          "exampleTr": "Son elli yıl boyunca bilişim kapasitesi katlanarak büyüdü.",
          "pitfall": "'Over/In the past...' kalıbı YDS'de %99 Present Perfect (have/has V3) ister!"
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that gerunds & infinitives plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, gerunds & infinitives konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Gerunds & Infinitives [YDS]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Gerunds & Infinitives - YDS]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "YDS Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Gerunds & Infinitives konusunda YDS düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers gerunds infinitives without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered gerunds infinitives after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Gerunds & Infinitives - YDS] Aşağıdaki cümlelerin hangisinde Gerunds & Infinitives kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard YDS criteria.",
          "B) The team has neglected the vital YDS variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the YDS protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary YDS models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Gerunds & Infinitives konusu YDS seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    }
  ],
  "participles": [
    {
      "level": "A1",
      "title": "Participles & Kısaltmalar — A1: Temel Tanıma ve Açık İpuçları",
      "definition": "Participles & Kısaltmalar konusunun A1 düzeyindeki tanımı: Temel özne-fiil uyumu, basit cümle kuruluşu ve en yalın kurallar.",
      "usage": "Participles & Kısaltmalar bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + participles Temel Yapı + Nesne",
      "negativeStructure": "Özne + participles Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "participles Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[PARTICIPLES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "always",
          "turkish": "her zaman",
          "position": "Özne ile fiil arasında",
          "exampleEn": "She always arrives at school on time.",
          "exampleTr": "Okula her zaman vaktinde gelir.",
          "pitfall": "Fiilden sonra yazılmamalıdır ('She arrives always' yanlıştır)."
        },
        {
          "marker": "every day",
          "turkish": "her gün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "I drink fresh orange juice every day.",
          "exampleTr": "Her gün taze portakal suyu içerim.",
          "pitfall": "Bitişik yazılan 'everyday' sıfattır; zaman zarfı ayrı yazılır ('every day')."
        },
        {
          "marker": "now / at the moment",
          "turkish": "şu anda / şimdi",
          "position": "Cümle sonunda",
          "exampleEn": "The children are playing in the garden right now.",
          "exampleTr": "Çocuklar şu anda bahçede oynuyorlar.",
          "pitfall": "Geniş zaman ile değil şimdiki zamanla (am/is/are + Ving) kullanılır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that participles & kısaltmalar plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, participles & kısaltmalar konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Participles & Kısaltmalar [A1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Participles & Kısaltmalar - A1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Participles & Kısaltmalar konusunda A1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers participles without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered participles after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Participles & Kısaltmalar - A1] Aşağıdaki cümlelerin hangisinde Participles & Kısaltmalar kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A1 criteria.",
          "B) The team has neglected the vital A1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Participles & Kısaltmalar konusu A1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "A2",
      "title": "Participles & Kısaltmalar — A2: Kombinasyon ve Temel Bağlaçlar",
      "definition": "Participles & Kısaltmalar konusunun A2 düzeyindeki tanımı: Sıklık zarfları, basit bağlaçlar, kısa cevaplar ve temel zaman karşılaştırmaları.",
      "usage": "Participles & Kısaltmalar bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + participles Temel Yapı + Nesne",
      "negativeStructure": "Özne + participles Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "participles Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[PARTICIPLES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "yesterday",
          "turkish": "dün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "The committee met yesterday to approve the budget.",
          "exampleTr": "Komite bütçeyi onaylamak için dün toplandı.",
          "pitfall": "Present Perfect ile kullanılmaz; daima Simple Past (V2) gerektirir."
        },
        {
          "marker": "two days ago",
          "turkish": "iki gün önce",
          "position": "Cümle sonunda",
          "exampleEn": "The package arrived two days ago.",
          "exampleTr": "Paket iki gün önce ulaştı.",
          "pitfall": "'before' ile karıştırılmamalıdır; 'ago' şimdiki andan geçmişe sayar ve V2 ister."
        },
        {
          "marker": "usually / often",
          "turkish": "genellikle / sık sık",
          "position": "Özne ile fiil arasında",
          "exampleEn": "He usually takes the subway to avoid traffic.",
          "exampleTr": "Trafikten kaçınmak için genellikle metroyu kullanır.",
          "pitfall": "He/she/it öznelerinde fiilin -s takısını unutturmamalıdır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that participles & kısaltmalar plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, participles & kısaltmalar konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Participles & Kısaltmalar [A2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Participles & Kısaltmalar - A2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Participles & Kısaltmalar konusunda A2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers participles without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered participles after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Participles & Kısaltmalar - A2] Aşağıdaki cümlelerin hangisinde Participles & Kısaltmalar kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A2 criteria.",
          "B) The team has neglected the vital A2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Participles & Kısaltmalar konusu A2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B1",
      "title": "Participles & Kısaltmalar — B1: Cümle İçi Bağlam ve Süreç Zamanları",
      "definition": "Participles & Kısaltmalar konusunun B1 düzeyindeki tanımı: Bağlaçlı cümleler, zaman uyumu, orta seviye kalıplar ve süreç zamanları.",
      "usage": "Participles & Kısaltmalar bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + participles Temel Yapı + Nesne",
      "negativeStructure": "Özne + participles Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "participles Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[PARTICIPLES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since 2015 / since then",
          "turkish": "-den beri",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "She has worked at the research center since 2015.",
          "exampleTr": "2015'ten beri araştırma merkezinde çalışıyor.",
          "pitfall": "Since'ten sonra geçmiş zaman noktası (V2), ana cümlede Present Perfect (have/has V3) gelir."
        },
        {
          "marker": "for five years",
          "turkish": "beş yıldır / beş sene boyunca",
          "position": "Cümle sonunda",
          "exampleEn": "They have lived in London for five years.",
          "exampleTr": "Beş yıldır Londra'da yaşıyorlar.",
          "pitfall": "Süreç bitmişse Simple Past ('lived for 5 years'), hala sürüyorsa Present Perfect ('have lived') kullanılır."
        },
        {
          "marker": "while / as",
          "turkish": "-iken",
          "position": "Yan cümlenin başında",
          "exampleEn": "While the scientist was calibrating the sensors, the alarm sounded.",
          "exampleTr": "Bilim insanı sensörleri kalibre ederken alarm çaldı.",
          "pitfall": "While genellikle Past Continuous (was/were Ving) ile süreç bildirir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that participles & kısaltmalar plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, participles & kısaltmalar konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Participles & Kısaltmalar [B1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Participles & Kısaltmalar - B1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Participles & Kısaltmalar konusunda B1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers participles without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered participles after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Participles & Kısaltmalar - B1] Aşağıdaki cümlelerin hangisinde Participles & Kısaltmalar kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B1 criteria.",
          "B) The team has neglected the vital B1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Participles & Kısaltmalar konusu B1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B2",
      "title": "Participles & Kısaltmalar — B2: Akademik Bağlam ve İleri Yapılar",
      "definition": "Participles & Kısaltmalar konusunun B2 düzeyindeki tanımı: Karmaşık yan cümleler, perfect/passive ilişkileri ve YDS tipi güçlü çeldiriciler.",
      "usage": "Participles & Kısaltmalar bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + participles Temel Yapı + Nesne",
      "negativeStructure": "Özne + participles Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "participles Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[PARTICIPLES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "by the time",
          "turkish": "-e kadar / -dığı zamana kadar",
          "position": "Yan cümlenin başında",
          "exampleEn": "By the time the firefighters arrived, the blaze had been extinguished.",
          "exampleTr": "İtfaiyeciler gelene kadar yangın söndürülmüştü.",
          "pitfall": "By the time + V2 -> had V3; By the time + V1 -> will have V3 zaman kuralına uymalıdır."
        },
        {
          "marker": "so far / up to now",
          "turkish": "şu ana kadar",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "No significant anomalies have been observed so far.",
          "exampleTr": "Şu ana kadar hiçbir belirgin anormallik gözlemlenmedi.",
          "pitfall": "Past tense ile değil Present Perfect (have/has V3) ile kullanılır."
        },
        {
          "marker": "in recent decades",
          "turkish": "son on yıllarda",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Global temperatures have risen markedly in recent decades.",
          "exampleTr": "Küresel sıcaklıklar son on yıllarda belirgin şekilde arttı.",
          "pitfall": "'In recent...' kalıbı günümüze uzanan süreci anlattığından Present Perfect ister."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that participles & kısaltmalar plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, participles & kısaltmalar konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Participles & Kısaltmalar [B2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Participles & Kısaltmalar - B2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Participles & Kısaltmalar konusunda B2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers participles without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered participles after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Participles & Kısaltmalar - B2] Aşağıdaki cümlelerin hangisinde Participles & Kısaltmalar kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B2 criteria.",
          "B) The team has neglected the vital B2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Participles & Kısaltmalar konusu B2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C1",
      "title": "Participles & Kısaltmalar — C1: Nüanslar, İstisnalar ve Devrik Yapılar",
      "definition": "Participles & Kısaltmalar konusunun C1 düzeyindeki tanımı: İnce anlam farkları, resmî/akademik üslup, istisnai kurallar ve karmaşık yapılar.",
      "usage": "Participles & Kısaltmalar bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + participles Temel Yapı + Nesne",
      "negativeStructure": "Özne + participles Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "participles Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[PARTICIPLES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "scarcely ... when",
          "turkish": "-er -mez",
          "position": "Devrik cümle başında",
          "exampleEn": "Scarcely had the treaty been signed when border clashes resumed.",
          "exampleTr": "Antlaşma imzalanır imzalanmaz sınır çatışmaları yeniden başladı.",
          "pitfall": "Scarcely had + S + V3 ... WHEN dizilimi bozulmamalıdır (THAN yazılmaz)."
        },
        {
          "marker": "hitherto / heretofore",
          "turkish": "şimdiye değin / o zamana kadar",
          "position": "Zarf konumunda",
          "exampleEn": "The expedition revealed biological species hitherto unknown to science.",
          "exampleTr": "Keşif heyeti şimdiye kadar bilimin bilmediği biyolojik türleri ortaya çıkardı.",
          "pitfall": "Resmî/akademik metinlerde geçmişe dönük sınırlayıcı zarf olarak kullanılır."
        },
        {
          "marker": "no sooner ... than",
          "turkish": "tam ... olmuştu ki",
          "position": "Devrik cümle başında",
          "exampleEn": "No sooner had the keynote concluded than reporters swarmed the podium.",
          "exampleTr": "Açılış konuşması biter bitmez muhabirler kürsüye üşüştü.",
          "pitfall": "No sooner daima 'than' ile eşleşir; 'when' yazmak klasik çeldiricidir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that participles & kısaltmalar plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, participles & kısaltmalar konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Participles & Kısaltmalar [C1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Participles & Kısaltmalar - C1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Participles & Kısaltmalar konusunda C1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers participles without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered participles after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Participles & Kısaltmalar - C1] Aşağıdaki cümlelerin hangisinde Participles & Kısaltmalar kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C1 criteria.",
          "B) The team has neglected the vital C1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Participles & Kısaltmalar konusu C1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C2",
      "title": "Participles & Kısaltmalar — C2: Söylem, Stil ve Derin Anlam Analizi",
      "definition": "Participles & Kısaltmalar konusunun C2 düzeyindeki tanımı: Üst düzey akademik söylem, nüans ustalıkları ve editörlük düzeyinde dil hakimiyeti.",
      "usage": "Participles & Kısaltmalar bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + participles Temel Yapı + Nesne",
      "negativeStructure": "Özne + participles Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "participles Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[PARTICIPLES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "from time immemorial",
          "turkish": "ezelden beri / çok eski zamanlardan beri",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Nomadic tribes have traversed these arid steppes from time immemorial.",
          "exampleTr": "Göçebe kabileler ezelden beri bu kurak bozkırları aşagelmiştir.",
          "pitfall": "Tarihsel derinlik ve süreklilik anlatır; genellikle Present Perfect ile pekişir."
        },
        {
          "marker": "in the twinkling of an eye",
          "turkish": "göz açıp kapayıncaya kadar",
          "position": "Cümle sonunda",
          "exampleEn": "Decades of architectural heritage were leveled in the twinkling of an eye by the quake.",
          "exampleTr": "Onlarca yıllık mimari miras depremle göz açıp kapayıncaya kadar yerle bir oldu.",
          "pitfall": "Ani ve radikal dönüşümleri niteleyen edebi/akademik üslup öğesidir."
        },
        {
          "marker": "at the eleventh hour",
          "turkish": "son anda / son dakikada",
          "position": "Cümle sonunda",
          "exampleEn": "The diplomatic accord was salvaged at the eleventh hour by bilateral concessions.",
          "exampleTr": "Diplomatik mutabakat son dakikada karşılıklı tavizlerle kurtarıldı.",
          "pitfall": "Gecikmiş ama zamanında yetişen kritik müdahaleleri betimler."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that participles & kısaltmalar plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, participles & kısaltmalar konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Participles & Kısaltmalar [C2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Participles & Kısaltmalar - C2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Participles & Kısaltmalar konusunda C2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers participles without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered participles after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Participles & Kısaltmalar - C2] Aşağıdaki cümlelerin hangisinde Participles & Kısaltmalar kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C2 criteria.",
          "B) The team has neglected the vital C2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Participles & Kısaltmalar konusu C2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "YDS",
      "title": "Participles & Kısaltmalar — YDS: Sınav Stratejisi, Zaman Yönetimi ve Şık Eleme",
      "definition": "Participles & Kısaltmalar konusunun YDS düzeyindeki tanımı: Soru kökündeki gizli ipuçları, çeldirici eleme algoritmaları ve sınav netini maksimize etme.",
      "usage": "Participles & Kısaltmalar bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "YDS seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + participles Temel Yapı + Nesne",
      "negativeStructure": "Özne + participles Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "participles Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[PARTICIPLES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since + Past Time / V2",
          "turkish": "-den beri (YDS Şifresi)",
          "position": "Yan cümle başı / Ana cümle Present Perfect",
          "exampleEn": "Renewable energy adoption has accelerated since the landmark 2015 Paris agreement.",
          "exampleTr": "Yenilenebilir enerjiye geçiş, tarihi 2015 Paris Anlaşması'ndan beri hızlandı.",
          "pitfall": "Soru kökünde 'since + V2' görürsen ana cümlede mutlaka 'have/has V3' ara!"
        },
        {
          "marker": "by + future time (e.g. by 2035)",
          "turkish": "-e kadar (Gelecek Şifresi)",
          "position": "Zaman zarfı konumu",
          "exampleEn": "By 2035, the majority of industrial vehicles will have transitioned to hydrogen fuel.",
          "exampleTr": "2035 yılına kadar sanayi araçlarının çoğunluğu hidrojen yakıtına geçmiş olacaktır.",
          "pitfall": "'By + Gelecek Zaman' daima Future Perfect (will have V3) gerektirir."
        },
        {
          "marker": "over / in / during + the last / past + time",
          "turkish": "son ... boyunca (Banko Soru)",
          "position": "Cümle başı veya sonu",
          "exampleEn": "Over the past five decades, computational capacity has expanded exponentially.",
          "exampleTr": "Son elli yıl boyunca bilişim kapasitesi katlanarak büyüdü.",
          "pitfall": "'Over/In the past...' kalıbı YDS'de %99 Present Perfect (have/has V3) ister!"
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that participles & kısaltmalar plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, participles & kısaltmalar konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Participles & Kısaltmalar [YDS]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Participles & Kısaltmalar - YDS]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "YDS Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Participles & Kısaltmalar konusunda YDS düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers participles without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered participles after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Participles & Kısaltmalar - YDS] Aşağıdaki cümlelerin hangisinde Participles & Kısaltmalar kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard YDS criteria.",
          "B) The team has neglected the vital YDS variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the YDS protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary YDS models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Participles & Kısaltmalar konusu YDS seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    }
  ],
  "causatives": [
    {
      "level": "A1",
      "title": "Causatives (Ettirgen Çatı) — A1: Temel Tanıma ve Açık İpuçları",
      "definition": "Causatives (Ettirgen Çatı) konusunun A1 düzeyindeki tanımı: Temel özne-fiil uyumu, basit cümle kuruluşu ve en yalın kurallar.",
      "usage": "Causatives (Ettirgen Çatı) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + causatives Temel Yapı + Nesne",
      "negativeStructure": "Özne + causatives Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "causatives Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[CAUSATIVES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "always",
          "turkish": "her zaman",
          "position": "Özne ile fiil arasında",
          "exampleEn": "She always arrives at school on time.",
          "exampleTr": "Okula her zaman vaktinde gelir.",
          "pitfall": "Fiilden sonra yazılmamalıdır ('She arrives always' yanlıştır)."
        },
        {
          "marker": "every day",
          "turkish": "her gün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "I drink fresh orange juice every day.",
          "exampleTr": "Her gün taze portakal suyu içerim.",
          "pitfall": "Bitişik yazılan 'everyday' sıfattır; zaman zarfı ayrı yazılır ('every day')."
        },
        {
          "marker": "now / at the moment",
          "turkish": "şu anda / şimdi",
          "position": "Cümle sonunda",
          "exampleEn": "The children are playing in the garden right now.",
          "exampleTr": "Çocuklar şu anda bahçede oynuyorlar.",
          "pitfall": "Geniş zaman ile değil şimdiki zamanla (am/is/are + Ving) kullanılır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that causatives (ettirgen çatı) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, causatives (ettirgen çatı) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Causatives (Ettirgen Çatı) [A1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Causatives (Ettirgen Çatı) - A1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Causatives (Ettirgen Çatı) konusunda A1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers causatives without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered causatives after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Causatives (Ettirgen Çatı) - A1] Aşağıdaki cümlelerin hangisinde Causatives (Ettirgen Çatı) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A1 criteria.",
          "B) The team has neglected the vital A1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Causatives (Ettirgen Çatı) konusu A1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "A2",
      "title": "Causatives (Ettirgen Çatı) — A2: Kombinasyon ve Temel Bağlaçlar",
      "definition": "Causatives (Ettirgen Çatı) konusunun A2 düzeyindeki tanımı: Sıklık zarfları, basit bağlaçlar, kısa cevaplar ve temel zaman karşılaştırmaları.",
      "usage": "Causatives (Ettirgen Çatı) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + causatives Temel Yapı + Nesne",
      "negativeStructure": "Özne + causatives Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "causatives Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[CAUSATIVES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "yesterday",
          "turkish": "dün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "The committee met yesterday to approve the budget.",
          "exampleTr": "Komite bütçeyi onaylamak için dün toplandı.",
          "pitfall": "Present Perfect ile kullanılmaz; daima Simple Past (V2) gerektirir."
        },
        {
          "marker": "two days ago",
          "turkish": "iki gün önce",
          "position": "Cümle sonunda",
          "exampleEn": "The package arrived two days ago.",
          "exampleTr": "Paket iki gün önce ulaştı.",
          "pitfall": "'before' ile karıştırılmamalıdır; 'ago' şimdiki andan geçmişe sayar ve V2 ister."
        },
        {
          "marker": "usually / often",
          "turkish": "genellikle / sık sık",
          "position": "Özne ile fiil arasında",
          "exampleEn": "He usually takes the subway to avoid traffic.",
          "exampleTr": "Trafikten kaçınmak için genellikle metroyu kullanır.",
          "pitfall": "He/she/it öznelerinde fiilin -s takısını unutturmamalıdır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that causatives (ettirgen çatı) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, causatives (ettirgen çatı) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Causatives (Ettirgen Çatı) [A2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Causatives (Ettirgen Çatı) - A2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Causatives (Ettirgen Çatı) konusunda A2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers causatives without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered causatives after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Causatives (Ettirgen Çatı) - A2] Aşağıdaki cümlelerin hangisinde Causatives (Ettirgen Çatı) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A2 criteria.",
          "B) The team has neglected the vital A2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Causatives (Ettirgen Çatı) konusu A2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B1",
      "title": "Causatives (Ettirgen Çatı) — B1: Cümle İçi Bağlam ve Süreç Zamanları",
      "definition": "Causatives (Ettirgen Çatı) konusunun B1 düzeyindeki tanımı: Bağlaçlı cümleler, zaman uyumu, orta seviye kalıplar ve süreç zamanları.",
      "usage": "Causatives (Ettirgen Çatı) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + causatives Temel Yapı + Nesne",
      "negativeStructure": "Özne + causatives Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "causatives Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[CAUSATIVES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since 2015 / since then",
          "turkish": "-den beri",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "She has worked at the research center since 2015.",
          "exampleTr": "2015'ten beri araştırma merkezinde çalışıyor.",
          "pitfall": "Since'ten sonra geçmiş zaman noktası (V2), ana cümlede Present Perfect (have/has V3) gelir."
        },
        {
          "marker": "for five years",
          "turkish": "beş yıldır / beş sene boyunca",
          "position": "Cümle sonunda",
          "exampleEn": "They have lived in London for five years.",
          "exampleTr": "Beş yıldır Londra'da yaşıyorlar.",
          "pitfall": "Süreç bitmişse Simple Past ('lived for 5 years'), hala sürüyorsa Present Perfect ('have lived') kullanılır."
        },
        {
          "marker": "while / as",
          "turkish": "-iken",
          "position": "Yan cümlenin başında",
          "exampleEn": "While the scientist was calibrating the sensors, the alarm sounded.",
          "exampleTr": "Bilim insanı sensörleri kalibre ederken alarm çaldı.",
          "pitfall": "While genellikle Past Continuous (was/were Ving) ile süreç bildirir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that causatives (ettirgen çatı) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, causatives (ettirgen çatı) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Causatives (Ettirgen Çatı) [B1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Causatives (Ettirgen Çatı) - B1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Causatives (Ettirgen Çatı) konusunda B1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers causatives without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered causatives after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Causatives (Ettirgen Çatı) - B1] Aşağıdaki cümlelerin hangisinde Causatives (Ettirgen Çatı) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B1 criteria.",
          "B) The team has neglected the vital B1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Causatives (Ettirgen Çatı) konusu B1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B2",
      "title": "Causatives (Ettirgen Çatı) — B2: Akademik Bağlam ve İleri Yapılar",
      "definition": "Causatives (Ettirgen Çatı) konusunun B2 düzeyindeki tanımı: Karmaşık yan cümleler, perfect/passive ilişkileri ve YDS tipi güçlü çeldiriciler.",
      "usage": "Causatives (Ettirgen Çatı) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + causatives Temel Yapı + Nesne",
      "negativeStructure": "Özne + causatives Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "causatives Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[CAUSATIVES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "by the time",
          "turkish": "-e kadar / -dığı zamana kadar",
          "position": "Yan cümlenin başında",
          "exampleEn": "By the time the firefighters arrived, the blaze had been extinguished.",
          "exampleTr": "İtfaiyeciler gelene kadar yangın söndürülmüştü.",
          "pitfall": "By the time + V2 -> had V3; By the time + V1 -> will have V3 zaman kuralına uymalıdır."
        },
        {
          "marker": "so far / up to now",
          "turkish": "şu ana kadar",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "No significant anomalies have been observed so far.",
          "exampleTr": "Şu ana kadar hiçbir belirgin anormallik gözlemlenmedi.",
          "pitfall": "Past tense ile değil Present Perfect (have/has V3) ile kullanılır."
        },
        {
          "marker": "in recent decades",
          "turkish": "son on yıllarda",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Global temperatures have risen markedly in recent decades.",
          "exampleTr": "Küresel sıcaklıklar son on yıllarda belirgin şekilde arttı.",
          "pitfall": "'In recent...' kalıbı günümüze uzanan süreci anlattığından Present Perfect ister."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that causatives (ettirgen çatı) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, causatives (ettirgen çatı) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Causatives (Ettirgen Çatı) [B2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Causatives (Ettirgen Çatı) - B2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Causatives (Ettirgen Çatı) konusunda B2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers causatives without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered causatives after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Causatives (Ettirgen Çatı) - B2] Aşağıdaki cümlelerin hangisinde Causatives (Ettirgen Çatı) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B2 criteria.",
          "B) The team has neglected the vital B2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Causatives (Ettirgen Çatı) konusu B2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C1",
      "title": "Causatives (Ettirgen Çatı) — C1: Nüanslar, İstisnalar ve Devrik Yapılar",
      "definition": "Causatives (Ettirgen Çatı) konusunun C1 düzeyindeki tanımı: İnce anlam farkları, resmî/akademik üslup, istisnai kurallar ve karmaşık yapılar.",
      "usage": "Causatives (Ettirgen Çatı) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + causatives Temel Yapı + Nesne",
      "negativeStructure": "Özne + causatives Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "causatives Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[CAUSATIVES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "scarcely ... when",
          "turkish": "-er -mez",
          "position": "Devrik cümle başında",
          "exampleEn": "Scarcely had the treaty been signed when border clashes resumed.",
          "exampleTr": "Antlaşma imzalanır imzalanmaz sınır çatışmaları yeniden başladı.",
          "pitfall": "Scarcely had + S + V3 ... WHEN dizilimi bozulmamalıdır (THAN yazılmaz)."
        },
        {
          "marker": "hitherto / heretofore",
          "turkish": "şimdiye değin / o zamana kadar",
          "position": "Zarf konumunda",
          "exampleEn": "The expedition revealed biological species hitherto unknown to science.",
          "exampleTr": "Keşif heyeti şimdiye kadar bilimin bilmediği biyolojik türleri ortaya çıkardı.",
          "pitfall": "Resmî/akademik metinlerde geçmişe dönük sınırlayıcı zarf olarak kullanılır."
        },
        {
          "marker": "no sooner ... than",
          "turkish": "tam ... olmuştu ki",
          "position": "Devrik cümle başında",
          "exampleEn": "No sooner had the keynote concluded than reporters swarmed the podium.",
          "exampleTr": "Açılış konuşması biter bitmez muhabirler kürsüye üşüştü.",
          "pitfall": "No sooner daima 'than' ile eşleşir; 'when' yazmak klasik çeldiricidir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that causatives (ettirgen çatı) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, causatives (ettirgen çatı) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Causatives (Ettirgen Çatı) [C1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Causatives (Ettirgen Çatı) - C1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Causatives (Ettirgen Çatı) konusunda C1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers causatives without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered causatives after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Causatives (Ettirgen Çatı) - C1] Aşağıdaki cümlelerin hangisinde Causatives (Ettirgen Çatı) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C1 criteria.",
          "B) The team has neglected the vital C1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Causatives (Ettirgen Çatı) konusu C1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C2",
      "title": "Causatives (Ettirgen Çatı) — C2: Söylem, Stil ve Derin Anlam Analizi",
      "definition": "Causatives (Ettirgen Çatı) konusunun C2 düzeyindeki tanımı: Üst düzey akademik söylem, nüans ustalıkları ve editörlük düzeyinde dil hakimiyeti.",
      "usage": "Causatives (Ettirgen Çatı) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + causatives Temel Yapı + Nesne",
      "negativeStructure": "Özne + causatives Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "causatives Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[CAUSATIVES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "from time immemorial",
          "turkish": "ezelden beri / çok eski zamanlardan beri",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Nomadic tribes have traversed these arid steppes from time immemorial.",
          "exampleTr": "Göçebe kabileler ezelden beri bu kurak bozkırları aşagelmiştir.",
          "pitfall": "Tarihsel derinlik ve süreklilik anlatır; genellikle Present Perfect ile pekişir."
        },
        {
          "marker": "in the twinkling of an eye",
          "turkish": "göz açıp kapayıncaya kadar",
          "position": "Cümle sonunda",
          "exampleEn": "Decades of architectural heritage were leveled in the twinkling of an eye by the quake.",
          "exampleTr": "Onlarca yıllık mimari miras depremle göz açıp kapayıncaya kadar yerle bir oldu.",
          "pitfall": "Ani ve radikal dönüşümleri niteleyen edebi/akademik üslup öğesidir."
        },
        {
          "marker": "at the eleventh hour",
          "turkish": "son anda / son dakikada",
          "position": "Cümle sonunda",
          "exampleEn": "The diplomatic accord was salvaged at the eleventh hour by bilateral concessions.",
          "exampleTr": "Diplomatik mutabakat son dakikada karşılıklı tavizlerle kurtarıldı.",
          "pitfall": "Gecikmiş ama zamanında yetişen kritik müdahaleleri betimler."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that causatives (ettirgen çatı) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, causatives (ettirgen çatı) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Causatives (Ettirgen Çatı) [C2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Causatives (Ettirgen Çatı) - C2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Causatives (Ettirgen Çatı) konusunda C2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers causatives without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered causatives after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Causatives (Ettirgen Çatı) - C2] Aşağıdaki cümlelerin hangisinde Causatives (Ettirgen Çatı) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C2 criteria.",
          "B) The team has neglected the vital C2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Causatives (Ettirgen Çatı) konusu C2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "YDS",
      "title": "Causatives (Ettirgen Çatı) — YDS: Sınav Stratejisi, Zaman Yönetimi ve Şık Eleme",
      "definition": "Causatives (Ettirgen Çatı) konusunun YDS düzeyindeki tanımı: Soru kökündeki gizli ipuçları, çeldirici eleme algoritmaları ve sınav netini maksimize etme.",
      "usage": "Causatives (Ettirgen Çatı) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "YDS seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + causatives Temel Yapı + Nesne",
      "negativeStructure": "Özne + causatives Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "causatives Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[CAUSATIVES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since + Past Time / V2",
          "turkish": "-den beri (YDS Şifresi)",
          "position": "Yan cümle başı / Ana cümle Present Perfect",
          "exampleEn": "Renewable energy adoption has accelerated since the landmark 2015 Paris agreement.",
          "exampleTr": "Yenilenebilir enerjiye geçiş, tarihi 2015 Paris Anlaşması'ndan beri hızlandı.",
          "pitfall": "Soru kökünde 'since + V2' görürsen ana cümlede mutlaka 'have/has V3' ara!"
        },
        {
          "marker": "by + future time (e.g. by 2035)",
          "turkish": "-e kadar (Gelecek Şifresi)",
          "position": "Zaman zarfı konumu",
          "exampleEn": "By 2035, the majority of industrial vehicles will have transitioned to hydrogen fuel.",
          "exampleTr": "2035 yılına kadar sanayi araçlarının çoğunluğu hidrojen yakıtına geçmiş olacaktır.",
          "pitfall": "'By + Gelecek Zaman' daima Future Perfect (will have V3) gerektirir."
        },
        {
          "marker": "over / in / during + the last / past + time",
          "turkish": "son ... boyunca (Banko Soru)",
          "position": "Cümle başı veya sonu",
          "exampleEn": "Over the past five decades, computational capacity has expanded exponentially.",
          "exampleTr": "Son elli yıl boyunca bilişim kapasitesi katlanarak büyüdü.",
          "pitfall": "'Over/In the past...' kalıbı YDS'de %99 Present Perfect (have/has V3) ister!"
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that causatives (ettirgen çatı) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, causatives (ettirgen çatı) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Causatives (Ettirgen Çatı) [YDS]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Causatives (Ettirgen Çatı) - YDS]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "YDS Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Causatives (Ettirgen Çatı) konusunda YDS düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers causatives without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered causatives after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Causatives (Ettirgen Çatı) - YDS] Aşağıdaki cümlelerin hangisinde Causatives (Ettirgen Çatı) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard YDS criteria.",
          "B) The team has neglected the vital YDS variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the YDS protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary YDS models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Causatives (Ettirgen Çatı) konusu YDS seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    }
  ],
  "conjunctions": [
    {
      "level": "A1",
      "title": "Conjunctions & Geçiş Sözcükleri — A1: Temel Tanıma ve Açık İpuçları",
      "definition": "Conjunctions & Geçiş Sözcükleri konusunun A1 düzeyindeki tanımı: Temel özne-fiil uyumu, basit cümle kuruluşu ve en yalın kurallar.",
      "usage": "Conjunctions & Geçiş Sözcükleri bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + conjunctions Temel Yapı + Nesne",
      "negativeStructure": "Özne + conjunctions Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "conjunctions Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[CONJUNCTIONS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "always",
          "turkish": "her zaman",
          "position": "Özne ile fiil arasında",
          "exampleEn": "She always arrives at school on time.",
          "exampleTr": "Okula her zaman vaktinde gelir.",
          "pitfall": "Fiilden sonra yazılmamalıdır ('She arrives always' yanlıştır)."
        },
        {
          "marker": "every day",
          "turkish": "her gün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "I drink fresh orange juice every day.",
          "exampleTr": "Her gün taze portakal suyu içerim.",
          "pitfall": "Bitişik yazılan 'everyday' sıfattır; zaman zarfı ayrı yazılır ('every day')."
        },
        {
          "marker": "now / at the moment",
          "turkish": "şu anda / şimdi",
          "position": "Cümle sonunda",
          "exampleEn": "The children are playing in the garden right now.",
          "exampleTr": "Çocuklar şu anda bahçede oynuyorlar.",
          "pitfall": "Geniş zaman ile değil şimdiki zamanla (am/is/are + Ving) kullanılır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that conjunctions & geçiş sözcükleri plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, conjunctions & geçiş sözcükleri konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Conjunctions & Geçiş Sözcükleri [A1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Conjunctions & Geçiş Sözcükleri - A1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Conjunctions & Geçiş Sözcükleri konusunda A1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers conjunctions without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered conjunctions after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Conjunctions & Geçiş Sözcükleri - A1] Aşağıdaki cümlelerin hangisinde Conjunctions & Geçiş Sözcükleri kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A1 criteria.",
          "B) The team has neglected the vital A1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Conjunctions & Geçiş Sözcükleri konusu A1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "A2",
      "title": "Conjunctions & Geçiş Sözcükleri — A2: Kombinasyon ve Temel Bağlaçlar",
      "definition": "Conjunctions & Geçiş Sözcükleri konusunun A2 düzeyindeki tanımı: Sıklık zarfları, basit bağlaçlar, kısa cevaplar ve temel zaman karşılaştırmaları.",
      "usage": "Conjunctions & Geçiş Sözcükleri bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + conjunctions Temel Yapı + Nesne",
      "negativeStructure": "Özne + conjunctions Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "conjunctions Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[CONJUNCTIONS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "yesterday",
          "turkish": "dün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "The committee met yesterday to approve the budget.",
          "exampleTr": "Komite bütçeyi onaylamak için dün toplandı.",
          "pitfall": "Present Perfect ile kullanılmaz; daima Simple Past (V2) gerektirir."
        },
        {
          "marker": "two days ago",
          "turkish": "iki gün önce",
          "position": "Cümle sonunda",
          "exampleEn": "The package arrived two days ago.",
          "exampleTr": "Paket iki gün önce ulaştı.",
          "pitfall": "'before' ile karıştırılmamalıdır; 'ago' şimdiki andan geçmişe sayar ve V2 ister."
        },
        {
          "marker": "usually / often",
          "turkish": "genellikle / sık sık",
          "position": "Özne ile fiil arasında",
          "exampleEn": "He usually takes the subway to avoid traffic.",
          "exampleTr": "Trafikten kaçınmak için genellikle metroyu kullanır.",
          "pitfall": "He/she/it öznelerinde fiilin -s takısını unutturmamalıdır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that conjunctions & geçiş sözcükleri plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, conjunctions & geçiş sözcükleri konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Conjunctions & Geçiş Sözcükleri [A2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Conjunctions & Geçiş Sözcükleri - A2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Conjunctions & Geçiş Sözcükleri konusunda A2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers conjunctions without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered conjunctions after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Conjunctions & Geçiş Sözcükleri - A2] Aşağıdaki cümlelerin hangisinde Conjunctions & Geçiş Sözcükleri kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A2 criteria.",
          "B) The team has neglected the vital A2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Conjunctions & Geçiş Sözcükleri konusu A2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B1",
      "title": "Conjunctions & Geçiş Sözcükleri — B1: Cümle İçi Bağlam ve Süreç Zamanları",
      "definition": "Conjunctions & Geçiş Sözcükleri konusunun B1 düzeyindeki tanımı: Bağlaçlı cümleler, zaman uyumu, orta seviye kalıplar ve süreç zamanları.",
      "usage": "Conjunctions & Geçiş Sözcükleri bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + conjunctions Temel Yapı + Nesne",
      "negativeStructure": "Özne + conjunctions Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "conjunctions Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[CONJUNCTIONS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since 2015 / since then",
          "turkish": "-den beri",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "She has worked at the research center since 2015.",
          "exampleTr": "2015'ten beri araştırma merkezinde çalışıyor.",
          "pitfall": "Since'ten sonra geçmiş zaman noktası (V2), ana cümlede Present Perfect (have/has V3) gelir."
        },
        {
          "marker": "for five years",
          "turkish": "beş yıldır / beş sene boyunca",
          "position": "Cümle sonunda",
          "exampleEn": "They have lived in London for five years.",
          "exampleTr": "Beş yıldır Londra'da yaşıyorlar.",
          "pitfall": "Süreç bitmişse Simple Past ('lived for 5 years'), hala sürüyorsa Present Perfect ('have lived') kullanılır."
        },
        {
          "marker": "while / as",
          "turkish": "-iken",
          "position": "Yan cümlenin başında",
          "exampleEn": "While the scientist was calibrating the sensors, the alarm sounded.",
          "exampleTr": "Bilim insanı sensörleri kalibre ederken alarm çaldı.",
          "pitfall": "While genellikle Past Continuous (was/were Ving) ile süreç bildirir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that conjunctions & geçiş sözcükleri plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, conjunctions & geçiş sözcükleri konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Conjunctions & Geçiş Sözcükleri [B1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Conjunctions & Geçiş Sözcükleri - B1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Conjunctions & Geçiş Sözcükleri konusunda B1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers conjunctions without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered conjunctions after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Conjunctions & Geçiş Sözcükleri - B1] Aşağıdaki cümlelerin hangisinde Conjunctions & Geçiş Sözcükleri kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B1 criteria.",
          "B) The team has neglected the vital B1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Conjunctions & Geçiş Sözcükleri konusu B1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B2",
      "title": "Conjunctions & Geçiş Sözcükleri — B2: Akademik Bağlam ve İleri Yapılar",
      "definition": "Conjunctions & Geçiş Sözcükleri konusunun B2 düzeyindeki tanımı: Karmaşık yan cümleler, perfect/passive ilişkileri ve YDS tipi güçlü çeldiriciler.",
      "usage": "Conjunctions & Geçiş Sözcükleri bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + conjunctions Temel Yapı + Nesne",
      "negativeStructure": "Özne + conjunctions Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "conjunctions Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[CONJUNCTIONS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "by the time",
          "turkish": "-e kadar / -dığı zamana kadar",
          "position": "Yan cümlenin başında",
          "exampleEn": "By the time the firefighters arrived, the blaze had been extinguished.",
          "exampleTr": "İtfaiyeciler gelene kadar yangın söndürülmüştü.",
          "pitfall": "By the time + V2 -> had V3; By the time + V1 -> will have V3 zaman kuralına uymalıdır."
        },
        {
          "marker": "so far / up to now",
          "turkish": "şu ana kadar",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "No significant anomalies have been observed so far.",
          "exampleTr": "Şu ana kadar hiçbir belirgin anormallik gözlemlenmedi.",
          "pitfall": "Past tense ile değil Present Perfect (have/has V3) ile kullanılır."
        },
        {
          "marker": "in recent decades",
          "turkish": "son on yıllarda",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Global temperatures have risen markedly in recent decades.",
          "exampleTr": "Küresel sıcaklıklar son on yıllarda belirgin şekilde arttı.",
          "pitfall": "'In recent...' kalıbı günümüze uzanan süreci anlattığından Present Perfect ister."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that conjunctions & geçiş sözcükleri plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, conjunctions & geçiş sözcükleri konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Conjunctions & Geçiş Sözcükleri [B2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Conjunctions & Geçiş Sözcükleri - B2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Conjunctions & Geçiş Sözcükleri konusunda B2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers conjunctions without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered conjunctions after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Conjunctions & Geçiş Sözcükleri - B2] Aşağıdaki cümlelerin hangisinde Conjunctions & Geçiş Sözcükleri kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B2 criteria.",
          "B) The team has neglected the vital B2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Conjunctions & Geçiş Sözcükleri konusu B2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C1",
      "title": "Conjunctions & Geçiş Sözcükleri — C1: Nüanslar, İstisnalar ve Devrik Yapılar",
      "definition": "Conjunctions & Geçiş Sözcükleri konusunun C1 düzeyindeki tanımı: İnce anlam farkları, resmî/akademik üslup, istisnai kurallar ve karmaşık yapılar.",
      "usage": "Conjunctions & Geçiş Sözcükleri bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + conjunctions Temel Yapı + Nesne",
      "negativeStructure": "Özne + conjunctions Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "conjunctions Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[CONJUNCTIONS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "scarcely ... when",
          "turkish": "-er -mez",
          "position": "Devrik cümle başında",
          "exampleEn": "Scarcely had the treaty been signed when border clashes resumed.",
          "exampleTr": "Antlaşma imzalanır imzalanmaz sınır çatışmaları yeniden başladı.",
          "pitfall": "Scarcely had + S + V3 ... WHEN dizilimi bozulmamalıdır (THAN yazılmaz)."
        },
        {
          "marker": "hitherto / heretofore",
          "turkish": "şimdiye değin / o zamana kadar",
          "position": "Zarf konumunda",
          "exampleEn": "The expedition revealed biological species hitherto unknown to science.",
          "exampleTr": "Keşif heyeti şimdiye kadar bilimin bilmediği biyolojik türleri ortaya çıkardı.",
          "pitfall": "Resmî/akademik metinlerde geçmişe dönük sınırlayıcı zarf olarak kullanılır."
        },
        {
          "marker": "no sooner ... than",
          "turkish": "tam ... olmuştu ki",
          "position": "Devrik cümle başında",
          "exampleEn": "No sooner had the keynote concluded than reporters swarmed the podium.",
          "exampleTr": "Açılış konuşması biter bitmez muhabirler kürsüye üşüştü.",
          "pitfall": "No sooner daima 'than' ile eşleşir; 'when' yazmak klasik çeldiricidir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that conjunctions & geçiş sözcükleri plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, conjunctions & geçiş sözcükleri konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Conjunctions & Geçiş Sözcükleri [C1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Conjunctions & Geçiş Sözcükleri - C1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Conjunctions & Geçiş Sözcükleri konusunda C1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers conjunctions without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered conjunctions after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Conjunctions & Geçiş Sözcükleri - C1] Aşağıdaki cümlelerin hangisinde Conjunctions & Geçiş Sözcükleri kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C1 criteria.",
          "B) The team has neglected the vital C1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Conjunctions & Geçiş Sözcükleri konusu C1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C2",
      "title": "Conjunctions & Geçiş Sözcükleri — C2: Söylem, Stil ve Derin Anlam Analizi",
      "definition": "Conjunctions & Geçiş Sözcükleri konusunun C2 düzeyindeki tanımı: Üst düzey akademik söylem, nüans ustalıkları ve editörlük düzeyinde dil hakimiyeti.",
      "usage": "Conjunctions & Geçiş Sözcükleri bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + conjunctions Temel Yapı + Nesne",
      "negativeStructure": "Özne + conjunctions Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "conjunctions Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[CONJUNCTIONS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "from time immemorial",
          "turkish": "ezelden beri / çok eski zamanlardan beri",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Nomadic tribes have traversed these arid steppes from time immemorial.",
          "exampleTr": "Göçebe kabileler ezelden beri bu kurak bozkırları aşagelmiştir.",
          "pitfall": "Tarihsel derinlik ve süreklilik anlatır; genellikle Present Perfect ile pekişir."
        },
        {
          "marker": "in the twinkling of an eye",
          "turkish": "göz açıp kapayıncaya kadar",
          "position": "Cümle sonunda",
          "exampleEn": "Decades of architectural heritage were leveled in the twinkling of an eye by the quake.",
          "exampleTr": "Onlarca yıllık mimari miras depremle göz açıp kapayıncaya kadar yerle bir oldu.",
          "pitfall": "Ani ve radikal dönüşümleri niteleyen edebi/akademik üslup öğesidir."
        },
        {
          "marker": "at the eleventh hour",
          "turkish": "son anda / son dakikada",
          "position": "Cümle sonunda",
          "exampleEn": "The diplomatic accord was salvaged at the eleventh hour by bilateral concessions.",
          "exampleTr": "Diplomatik mutabakat son dakikada karşılıklı tavizlerle kurtarıldı.",
          "pitfall": "Gecikmiş ama zamanında yetişen kritik müdahaleleri betimler."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that conjunctions & geçiş sözcükleri plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, conjunctions & geçiş sözcükleri konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Conjunctions & Geçiş Sözcükleri [C2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Conjunctions & Geçiş Sözcükleri - C2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Conjunctions & Geçiş Sözcükleri konusunda C2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers conjunctions without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered conjunctions after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Conjunctions & Geçiş Sözcükleri - C2] Aşağıdaki cümlelerin hangisinde Conjunctions & Geçiş Sözcükleri kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C2 criteria.",
          "B) The team has neglected the vital C2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Conjunctions & Geçiş Sözcükleri konusu C2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "YDS",
      "title": "Conjunctions & Geçiş Sözcükleri — YDS: Sınav Stratejisi, Zaman Yönetimi ve Şık Eleme",
      "definition": "Conjunctions & Geçiş Sözcükleri konusunun YDS düzeyindeki tanımı: Soru kökündeki gizli ipuçları, çeldirici eleme algoritmaları ve sınav netini maksimize etme.",
      "usage": "Conjunctions & Geçiş Sözcükleri bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "YDS seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + conjunctions Temel Yapı + Nesne",
      "negativeStructure": "Özne + conjunctions Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "conjunctions Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[CONJUNCTIONS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since + Past Time / V2",
          "turkish": "-den beri (YDS Şifresi)",
          "position": "Yan cümle başı / Ana cümle Present Perfect",
          "exampleEn": "Renewable energy adoption has accelerated since the landmark 2015 Paris agreement.",
          "exampleTr": "Yenilenebilir enerjiye geçiş, tarihi 2015 Paris Anlaşması'ndan beri hızlandı.",
          "pitfall": "Soru kökünde 'since + V2' görürsen ana cümlede mutlaka 'have/has V3' ara!"
        },
        {
          "marker": "by + future time (e.g. by 2035)",
          "turkish": "-e kadar (Gelecek Şifresi)",
          "position": "Zaman zarfı konumu",
          "exampleEn": "By 2035, the majority of industrial vehicles will have transitioned to hydrogen fuel.",
          "exampleTr": "2035 yılına kadar sanayi araçlarının çoğunluğu hidrojen yakıtına geçmiş olacaktır.",
          "pitfall": "'By + Gelecek Zaman' daima Future Perfect (will have V3) gerektirir."
        },
        {
          "marker": "over / in / during + the last / past + time",
          "turkish": "son ... boyunca (Banko Soru)",
          "position": "Cümle başı veya sonu",
          "exampleEn": "Over the past five decades, computational capacity has expanded exponentially.",
          "exampleTr": "Son elli yıl boyunca bilişim kapasitesi katlanarak büyüdü.",
          "pitfall": "'Over/In the past...' kalıbı YDS'de %99 Present Perfect (have/has V3) ister!"
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that conjunctions & geçiş sözcükleri plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, conjunctions & geçiş sözcükleri konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Conjunctions & Geçiş Sözcükleri [YDS]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Conjunctions & Geçiş Sözcükleri - YDS]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "YDS Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Conjunctions & Geçiş Sözcükleri konusunda YDS düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers conjunctions without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered conjunctions after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Conjunctions & Geçiş Sözcükleri - YDS] Aşağıdaki cümlelerin hangisinde Conjunctions & Geçiş Sözcükleri kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard YDS criteria.",
          "B) The team has neglected the vital YDS variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the YDS protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary YDS models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Conjunctions & Geçiş Sözcükleri konusu YDS seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    }
  ],
  "prepositions": [
    {
      "level": "A1",
      "title": "Prepositions (Edatlar) — A1: Temel Tanıma ve Açık İpuçları",
      "definition": "Prepositions (Edatlar) konusunun A1 düzeyindeki tanımı: Temel özne-fiil uyumu, basit cümle kuruluşu ve en yalın kurallar.",
      "usage": "Prepositions (Edatlar) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + prepositions Temel Yapı + Nesne",
      "negativeStructure": "Özne + prepositions Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "prepositions Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[PREPOSITIONS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "always",
          "turkish": "her zaman",
          "position": "Özne ile fiil arasında",
          "exampleEn": "She always arrives at school on time.",
          "exampleTr": "Okula her zaman vaktinde gelir.",
          "pitfall": "Fiilden sonra yazılmamalıdır ('She arrives always' yanlıştır)."
        },
        {
          "marker": "every day",
          "turkish": "her gün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "I drink fresh orange juice every day.",
          "exampleTr": "Her gün taze portakal suyu içerim.",
          "pitfall": "Bitişik yazılan 'everyday' sıfattır; zaman zarfı ayrı yazılır ('every day')."
        },
        {
          "marker": "now / at the moment",
          "turkish": "şu anda / şimdi",
          "position": "Cümle sonunda",
          "exampleEn": "The children are playing in the garden right now.",
          "exampleTr": "Çocuklar şu anda bahçede oynuyorlar.",
          "pitfall": "Geniş zaman ile değil şimdiki zamanla (am/is/are + Ving) kullanılır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that prepositions (edatlar) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, prepositions (edatlar) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Prepositions (Edatlar) [A1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Prepositions (Edatlar) - A1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Prepositions (Edatlar) konusunda A1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers prepositions without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered prepositions after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Prepositions (Edatlar) - A1] Aşağıdaki cümlelerin hangisinde Prepositions (Edatlar) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A1 criteria.",
          "B) The team has neglected the vital A1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Prepositions (Edatlar) konusu A1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "A2",
      "title": "Prepositions (Edatlar) — A2: Kombinasyon ve Temel Bağlaçlar",
      "definition": "Prepositions (Edatlar) konusunun A2 düzeyindeki tanımı: Sıklık zarfları, basit bağlaçlar, kısa cevaplar ve temel zaman karşılaştırmaları.",
      "usage": "Prepositions (Edatlar) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + prepositions Temel Yapı + Nesne",
      "negativeStructure": "Özne + prepositions Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "prepositions Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[PREPOSITIONS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "yesterday",
          "turkish": "dün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "The committee met yesterday to approve the budget.",
          "exampleTr": "Komite bütçeyi onaylamak için dün toplandı.",
          "pitfall": "Present Perfect ile kullanılmaz; daima Simple Past (V2) gerektirir."
        },
        {
          "marker": "two days ago",
          "turkish": "iki gün önce",
          "position": "Cümle sonunda",
          "exampleEn": "The package arrived two days ago.",
          "exampleTr": "Paket iki gün önce ulaştı.",
          "pitfall": "'before' ile karıştırılmamalıdır; 'ago' şimdiki andan geçmişe sayar ve V2 ister."
        },
        {
          "marker": "usually / often",
          "turkish": "genellikle / sık sık",
          "position": "Özne ile fiil arasında",
          "exampleEn": "He usually takes the subway to avoid traffic.",
          "exampleTr": "Trafikten kaçınmak için genellikle metroyu kullanır.",
          "pitfall": "He/she/it öznelerinde fiilin -s takısını unutturmamalıdır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that prepositions (edatlar) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, prepositions (edatlar) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Prepositions (Edatlar) [A2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Prepositions (Edatlar) - A2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Prepositions (Edatlar) konusunda A2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers prepositions without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered prepositions after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Prepositions (Edatlar) - A2] Aşağıdaki cümlelerin hangisinde Prepositions (Edatlar) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A2 criteria.",
          "B) The team has neglected the vital A2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Prepositions (Edatlar) konusu A2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B1",
      "title": "Prepositions (Edatlar) — B1: Cümle İçi Bağlam ve Süreç Zamanları",
      "definition": "Prepositions (Edatlar) konusunun B1 düzeyindeki tanımı: Bağlaçlı cümleler, zaman uyumu, orta seviye kalıplar ve süreç zamanları.",
      "usage": "Prepositions (Edatlar) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + prepositions Temel Yapı + Nesne",
      "negativeStructure": "Özne + prepositions Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "prepositions Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[PREPOSITIONS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since 2015 / since then",
          "turkish": "-den beri",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "She has worked at the research center since 2015.",
          "exampleTr": "2015'ten beri araştırma merkezinde çalışıyor.",
          "pitfall": "Since'ten sonra geçmiş zaman noktası (V2), ana cümlede Present Perfect (have/has V3) gelir."
        },
        {
          "marker": "for five years",
          "turkish": "beş yıldır / beş sene boyunca",
          "position": "Cümle sonunda",
          "exampleEn": "They have lived in London for five years.",
          "exampleTr": "Beş yıldır Londra'da yaşıyorlar.",
          "pitfall": "Süreç bitmişse Simple Past ('lived for 5 years'), hala sürüyorsa Present Perfect ('have lived') kullanılır."
        },
        {
          "marker": "while / as",
          "turkish": "-iken",
          "position": "Yan cümlenin başında",
          "exampleEn": "While the scientist was calibrating the sensors, the alarm sounded.",
          "exampleTr": "Bilim insanı sensörleri kalibre ederken alarm çaldı.",
          "pitfall": "While genellikle Past Continuous (was/were Ving) ile süreç bildirir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that prepositions (edatlar) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, prepositions (edatlar) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Prepositions (Edatlar) [B1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Prepositions (Edatlar) - B1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Prepositions (Edatlar) konusunda B1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers prepositions without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered prepositions after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Prepositions (Edatlar) - B1] Aşağıdaki cümlelerin hangisinde Prepositions (Edatlar) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B1 criteria.",
          "B) The team has neglected the vital B1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Prepositions (Edatlar) konusu B1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B2",
      "title": "Prepositions (Edatlar) — B2: Akademik Bağlam ve İleri Yapılar",
      "definition": "Prepositions (Edatlar) konusunun B2 düzeyindeki tanımı: Karmaşık yan cümleler, perfect/passive ilişkileri ve YDS tipi güçlü çeldiriciler.",
      "usage": "Prepositions (Edatlar) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + prepositions Temel Yapı + Nesne",
      "negativeStructure": "Özne + prepositions Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "prepositions Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[PREPOSITIONS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "by the time",
          "turkish": "-e kadar / -dığı zamana kadar",
          "position": "Yan cümlenin başında",
          "exampleEn": "By the time the firefighters arrived, the blaze had been extinguished.",
          "exampleTr": "İtfaiyeciler gelene kadar yangın söndürülmüştü.",
          "pitfall": "By the time + V2 -> had V3; By the time + V1 -> will have V3 zaman kuralına uymalıdır."
        },
        {
          "marker": "so far / up to now",
          "turkish": "şu ana kadar",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "No significant anomalies have been observed so far.",
          "exampleTr": "Şu ana kadar hiçbir belirgin anormallik gözlemlenmedi.",
          "pitfall": "Past tense ile değil Present Perfect (have/has V3) ile kullanılır."
        },
        {
          "marker": "in recent decades",
          "turkish": "son on yıllarda",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Global temperatures have risen markedly in recent decades.",
          "exampleTr": "Küresel sıcaklıklar son on yıllarda belirgin şekilde arttı.",
          "pitfall": "'In recent...' kalıbı günümüze uzanan süreci anlattığından Present Perfect ister."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that prepositions (edatlar) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, prepositions (edatlar) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Prepositions (Edatlar) [B2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Prepositions (Edatlar) - B2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Prepositions (Edatlar) konusunda B2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers prepositions without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered prepositions after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Prepositions (Edatlar) - B2] Aşağıdaki cümlelerin hangisinde Prepositions (Edatlar) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B2 criteria.",
          "B) The team has neglected the vital B2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Prepositions (Edatlar) konusu B2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C1",
      "title": "Prepositions (Edatlar) — C1: Nüanslar, İstisnalar ve Devrik Yapılar",
      "definition": "Prepositions (Edatlar) konusunun C1 düzeyindeki tanımı: İnce anlam farkları, resmî/akademik üslup, istisnai kurallar ve karmaşık yapılar.",
      "usage": "Prepositions (Edatlar) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + prepositions Temel Yapı + Nesne",
      "negativeStructure": "Özne + prepositions Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "prepositions Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[PREPOSITIONS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "scarcely ... when",
          "turkish": "-er -mez",
          "position": "Devrik cümle başında",
          "exampleEn": "Scarcely had the treaty been signed when border clashes resumed.",
          "exampleTr": "Antlaşma imzalanır imzalanmaz sınır çatışmaları yeniden başladı.",
          "pitfall": "Scarcely had + S + V3 ... WHEN dizilimi bozulmamalıdır (THAN yazılmaz)."
        },
        {
          "marker": "hitherto / heretofore",
          "turkish": "şimdiye değin / o zamana kadar",
          "position": "Zarf konumunda",
          "exampleEn": "The expedition revealed biological species hitherto unknown to science.",
          "exampleTr": "Keşif heyeti şimdiye kadar bilimin bilmediği biyolojik türleri ortaya çıkardı.",
          "pitfall": "Resmî/akademik metinlerde geçmişe dönük sınırlayıcı zarf olarak kullanılır."
        },
        {
          "marker": "no sooner ... than",
          "turkish": "tam ... olmuştu ki",
          "position": "Devrik cümle başında",
          "exampleEn": "No sooner had the keynote concluded than reporters swarmed the podium.",
          "exampleTr": "Açılış konuşması biter bitmez muhabirler kürsüye üşüştü.",
          "pitfall": "No sooner daima 'than' ile eşleşir; 'when' yazmak klasik çeldiricidir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that prepositions (edatlar) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, prepositions (edatlar) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Prepositions (Edatlar) [C1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Prepositions (Edatlar) - C1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Prepositions (Edatlar) konusunda C1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers prepositions without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered prepositions after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Prepositions (Edatlar) - C1] Aşağıdaki cümlelerin hangisinde Prepositions (Edatlar) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C1 criteria.",
          "B) The team has neglected the vital C1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Prepositions (Edatlar) konusu C1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C2",
      "title": "Prepositions (Edatlar) — C2: Söylem, Stil ve Derin Anlam Analizi",
      "definition": "Prepositions (Edatlar) konusunun C2 düzeyindeki tanımı: Üst düzey akademik söylem, nüans ustalıkları ve editörlük düzeyinde dil hakimiyeti.",
      "usage": "Prepositions (Edatlar) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + prepositions Temel Yapı + Nesne",
      "negativeStructure": "Özne + prepositions Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "prepositions Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[PREPOSITIONS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "from time immemorial",
          "turkish": "ezelden beri / çok eski zamanlardan beri",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Nomadic tribes have traversed these arid steppes from time immemorial.",
          "exampleTr": "Göçebe kabileler ezelden beri bu kurak bozkırları aşagelmiştir.",
          "pitfall": "Tarihsel derinlik ve süreklilik anlatır; genellikle Present Perfect ile pekişir."
        },
        {
          "marker": "in the twinkling of an eye",
          "turkish": "göz açıp kapayıncaya kadar",
          "position": "Cümle sonunda",
          "exampleEn": "Decades of architectural heritage were leveled in the twinkling of an eye by the quake.",
          "exampleTr": "Onlarca yıllık mimari miras depremle göz açıp kapayıncaya kadar yerle bir oldu.",
          "pitfall": "Ani ve radikal dönüşümleri niteleyen edebi/akademik üslup öğesidir."
        },
        {
          "marker": "at the eleventh hour",
          "turkish": "son anda / son dakikada",
          "position": "Cümle sonunda",
          "exampleEn": "The diplomatic accord was salvaged at the eleventh hour by bilateral concessions.",
          "exampleTr": "Diplomatik mutabakat son dakikada karşılıklı tavizlerle kurtarıldı.",
          "pitfall": "Gecikmiş ama zamanında yetişen kritik müdahaleleri betimler."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that prepositions (edatlar) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, prepositions (edatlar) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Prepositions (Edatlar) [C2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Prepositions (Edatlar) - C2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Prepositions (Edatlar) konusunda C2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers prepositions without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered prepositions after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Prepositions (Edatlar) - C2] Aşağıdaki cümlelerin hangisinde Prepositions (Edatlar) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C2 criteria.",
          "B) The team has neglected the vital C2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Prepositions (Edatlar) konusu C2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "YDS",
      "title": "Prepositions (Edatlar) — YDS: Sınav Stratejisi, Zaman Yönetimi ve Şık Eleme",
      "definition": "Prepositions (Edatlar) konusunun YDS düzeyindeki tanımı: Soru kökündeki gizli ipuçları, çeldirici eleme algoritmaları ve sınav netini maksimize etme.",
      "usage": "Prepositions (Edatlar) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "YDS seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + prepositions Temel Yapı + Nesne",
      "negativeStructure": "Özne + prepositions Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "prepositions Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[PREPOSITIONS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since + Past Time / V2",
          "turkish": "-den beri (YDS Şifresi)",
          "position": "Yan cümle başı / Ana cümle Present Perfect",
          "exampleEn": "Renewable energy adoption has accelerated since the landmark 2015 Paris agreement.",
          "exampleTr": "Yenilenebilir enerjiye geçiş, tarihi 2015 Paris Anlaşması'ndan beri hızlandı.",
          "pitfall": "Soru kökünde 'since + V2' görürsen ana cümlede mutlaka 'have/has V3' ara!"
        },
        {
          "marker": "by + future time (e.g. by 2035)",
          "turkish": "-e kadar (Gelecek Şifresi)",
          "position": "Zaman zarfı konumu",
          "exampleEn": "By 2035, the majority of industrial vehicles will have transitioned to hydrogen fuel.",
          "exampleTr": "2035 yılına kadar sanayi araçlarının çoğunluğu hidrojen yakıtına geçmiş olacaktır.",
          "pitfall": "'By + Gelecek Zaman' daima Future Perfect (will have V3) gerektirir."
        },
        {
          "marker": "over / in / during + the last / past + time",
          "turkish": "son ... boyunca (Banko Soru)",
          "position": "Cümle başı veya sonu",
          "exampleEn": "Over the past five decades, computational capacity has expanded exponentially.",
          "exampleTr": "Son elli yıl boyunca bilişim kapasitesi katlanarak büyüdü.",
          "pitfall": "'Over/In the past...' kalıbı YDS'de %99 Present Perfect (have/has V3) ister!"
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that prepositions (edatlar) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, prepositions (edatlar) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Prepositions (Edatlar) [YDS]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Prepositions (Edatlar) - YDS]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "YDS Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Prepositions (Edatlar) konusunda YDS düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers prepositions without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered prepositions after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Prepositions (Edatlar) - YDS] Aşağıdaki cümlelerin hangisinde Prepositions (Edatlar) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard YDS criteria.",
          "B) The team has neglected the vital YDS variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the YDS protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary YDS models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Prepositions (Edatlar) konusu YDS seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    }
  ],
  "phrasal-verbs": [
    {
      "level": "A1",
      "title": "Phrasal Verbs (Deyimsel Fiiller) — A1: Temel Tanıma ve Açık İpuçları",
      "definition": "Phrasal Verbs (Deyimsel Fiiller) konusunun A1 düzeyindeki tanımı: Temel özne-fiil uyumu, basit cümle kuruluşu ve en yalın kurallar.",
      "usage": "Phrasal Verbs (Deyimsel Fiiller) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + phrasal-verbs Temel Yapı + Nesne",
      "negativeStructure": "Özne + phrasal-verbs Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "phrasal-verbs Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[PHRASAL-VERBS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "always",
          "turkish": "her zaman",
          "position": "Özne ile fiil arasında",
          "exampleEn": "She always arrives at school on time.",
          "exampleTr": "Okula her zaman vaktinde gelir.",
          "pitfall": "Fiilden sonra yazılmamalıdır ('She arrives always' yanlıştır)."
        },
        {
          "marker": "every day",
          "turkish": "her gün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "I drink fresh orange juice every day.",
          "exampleTr": "Her gün taze portakal suyu içerim.",
          "pitfall": "Bitişik yazılan 'everyday' sıfattır; zaman zarfı ayrı yazılır ('every day')."
        },
        {
          "marker": "now / at the moment",
          "turkish": "şu anda / şimdi",
          "position": "Cümle sonunda",
          "exampleEn": "The children are playing in the garden right now.",
          "exampleTr": "Çocuklar şu anda bahçede oynuyorlar.",
          "pitfall": "Geniş zaman ile değil şimdiki zamanla (am/is/are + Ving) kullanılır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that phrasal verbs (deyimsel fiiller) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, phrasal verbs (deyimsel fiiller) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Phrasal Verbs (Deyimsel Fiiller) [A1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Phrasal Verbs (Deyimsel Fiiller) - A1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Phrasal Verbs (Deyimsel Fiiller) konusunda A1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers phrasal verbs without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered phrasal verbs after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Phrasal Verbs (Deyimsel Fiiller) - A1] Aşağıdaki cümlelerin hangisinde Phrasal Verbs (Deyimsel Fiiller) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A1 criteria.",
          "B) The team has neglected the vital A1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Phrasal Verbs (Deyimsel Fiiller) konusu A1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "A2",
      "title": "Phrasal Verbs (Deyimsel Fiiller) — A2: Kombinasyon ve Temel Bağlaçlar",
      "definition": "Phrasal Verbs (Deyimsel Fiiller) konusunun A2 düzeyindeki tanımı: Sıklık zarfları, basit bağlaçlar, kısa cevaplar ve temel zaman karşılaştırmaları.",
      "usage": "Phrasal Verbs (Deyimsel Fiiller) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + phrasal-verbs Temel Yapı + Nesne",
      "negativeStructure": "Özne + phrasal-verbs Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "phrasal-verbs Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[PHRASAL-VERBS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "yesterday",
          "turkish": "dün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "The committee met yesterday to approve the budget.",
          "exampleTr": "Komite bütçeyi onaylamak için dün toplandı.",
          "pitfall": "Present Perfect ile kullanılmaz; daima Simple Past (V2) gerektirir."
        },
        {
          "marker": "two days ago",
          "turkish": "iki gün önce",
          "position": "Cümle sonunda",
          "exampleEn": "The package arrived two days ago.",
          "exampleTr": "Paket iki gün önce ulaştı.",
          "pitfall": "'before' ile karıştırılmamalıdır; 'ago' şimdiki andan geçmişe sayar ve V2 ister."
        },
        {
          "marker": "usually / often",
          "turkish": "genellikle / sık sık",
          "position": "Özne ile fiil arasında",
          "exampleEn": "He usually takes the subway to avoid traffic.",
          "exampleTr": "Trafikten kaçınmak için genellikle metroyu kullanır.",
          "pitfall": "He/she/it öznelerinde fiilin -s takısını unutturmamalıdır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that phrasal verbs (deyimsel fiiller) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, phrasal verbs (deyimsel fiiller) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Phrasal Verbs (Deyimsel Fiiller) [A2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Phrasal Verbs (Deyimsel Fiiller) - A2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Phrasal Verbs (Deyimsel Fiiller) konusunda A2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers phrasal verbs without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered phrasal verbs after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Phrasal Verbs (Deyimsel Fiiller) - A2] Aşağıdaki cümlelerin hangisinde Phrasal Verbs (Deyimsel Fiiller) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A2 criteria.",
          "B) The team has neglected the vital A2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Phrasal Verbs (Deyimsel Fiiller) konusu A2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B1",
      "title": "Phrasal Verbs (Deyimsel Fiiller) — B1: Cümle İçi Bağlam ve Süreç Zamanları",
      "definition": "Phrasal Verbs (Deyimsel Fiiller) konusunun B1 düzeyindeki tanımı: Bağlaçlı cümleler, zaman uyumu, orta seviye kalıplar ve süreç zamanları.",
      "usage": "Phrasal Verbs (Deyimsel Fiiller) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + phrasal-verbs Temel Yapı + Nesne",
      "negativeStructure": "Özne + phrasal-verbs Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "phrasal-verbs Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[PHRASAL-VERBS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since 2015 / since then",
          "turkish": "-den beri",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "She has worked at the research center since 2015.",
          "exampleTr": "2015'ten beri araştırma merkezinde çalışıyor.",
          "pitfall": "Since'ten sonra geçmiş zaman noktası (V2), ana cümlede Present Perfect (have/has V3) gelir."
        },
        {
          "marker": "for five years",
          "turkish": "beş yıldır / beş sene boyunca",
          "position": "Cümle sonunda",
          "exampleEn": "They have lived in London for five years.",
          "exampleTr": "Beş yıldır Londra'da yaşıyorlar.",
          "pitfall": "Süreç bitmişse Simple Past ('lived for 5 years'), hala sürüyorsa Present Perfect ('have lived') kullanılır."
        },
        {
          "marker": "while / as",
          "turkish": "-iken",
          "position": "Yan cümlenin başında",
          "exampleEn": "While the scientist was calibrating the sensors, the alarm sounded.",
          "exampleTr": "Bilim insanı sensörleri kalibre ederken alarm çaldı.",
          "pitfall": "While genellikle Past Continuous (was/were Ving) ile süreç bildirir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that phrasal verbs (deyimsel fiiller) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, phrasal verbs (deyimsel fiiller) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Phrasal Verbs (Deyimsel Fiiller) [B1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Phrasal Verbs (Deyimsel Fiiller) - B1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Phrasal Verbs (Deyimsel Fiiller) konusunda B1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers phrasal verbs without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered phrasal verbs after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Phrasal Verbs (Deyimsel Fiiller) - B1] Aşağıdaki cümlelerin hangisinde Phrasal Verbs (Deyimsel Fiiller) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B1 criteria.",
          "B) The team has neglected the vital B1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Phrasal Verbs (Deyimsel Fiiller) konusu B1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B2",
      "title": "Phrasal Verbs (Deyimsel Fiiller) — B2: Akademik Bağlam ve İleri Yapılar",
      "definition": "Phrasal Verbs (Deyimsel Fiiller) konusunun B2 düzeyindeki tanımı: Karmaşık yan cümleler, perfect/passive ilişkileri ve YDS tipi güçlü çeldiriciler.",
      "usage": "Phrasal Verbs (Deyimsel Fiiller) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + phrasal-verbs Temel Yapı + Nesne",
      "negativeStructure": "Özne + phrasal-verbs Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "phrasal-verbs Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[PHRASAL-VERBS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "by the time",
          "turkish": "-e kadar / -dığı zamana kadar",
          "position": "Yan cümlenin başında",
          "exampleEn": "By the time the firefighters arrived, the blaze had been extinguished.",
          "exampleTr": "İtfaiyeciler gelene kadar yangın söndürülmüştü.",
          "pitfall": "By the time + V2 -> had V3; By the time + V1 -> will have V3 zaman kuralına uymalıdır."
        },
        {
          "marker": "so far / up to now",
          "turkish": "şu ana kadar",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "No significant anomalies have been observed so far.",
          "exampleTr": "Şu ana kadar hiçbir belirgin anormallik gözlemlenmedi.",
          "pitfall": "Past tense ile değil Present Perfect (have/has V3) ile kullanılır."
        },
        {
          "marker": "in recent decades",
          "turkish": "son on yıllarda",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Global temperatures have risen markedly in recent decades.",
          "exampleTr": "Küresel sıcaklıklar son on yıllarda belirgin şekilde arttı.",
          "pitfall": "'In recent...' kalıbı günümüze uzanan süreci anlattığından Present Perfect ister."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that phrasal verbs (deyimsel fiiller) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, phrasal verbs (deyimsel fiiller) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Phrasal Verbs (Deyimsel Fiiller) [B2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Phrasal Verbs (Deyimsel Fiiller) - B2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Phrasal Verbs (Deyimsel Fiiller) konusunda B2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers phrasal verbs without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered phrasal verbs after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Phrasal Verbs (Deyimsel Fiiller) - B2] Aşağıdaki cümlelerin hangisinde Phrasal Verbs (Deyimsel Fiiller) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B2 criteria.",
          "B) The team has neglected the vital B2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Phrasal Verbs (Deyimsel Fiiller) konusu B2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C1",
      "title": "Phrasal Verbs (Deyimsel Fiiller) — C1: Nüanslar, İstisnalar ve Devrik Yapılar",
      "definition": "Phrasal Verbs (Deyimsel Fiiller) konusunun C1 düzeyindeki tanımı: İnce anlam farkları, resmî/akademik üslup, istisnai kurallar ve karmaşık yapılar.",
      "usage": "Phrasal Verbs (Deyimsel Fiiller) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + phrasal-verbs Temel Yapı + Nesne",
      "negativeStructure": "Özne + phrasal-verbs Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "phrasal-verbs Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[PHRASAL-VERBS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "scarcely ... when",
          "turkish": "-er -mez",
          "position": "Devrik cümle başında",
          "exampleEn": "Scarcely had the treaty been signed when border clashes resumed.",
          "exampleTr": "Antlaşma imzalanır imzalanmaz sınır çatışmaları yeniden başladı.",
          "pitfall": "Scarcely had + S + V3 ... WHEN dizilimi bozulmamalıdır (THAN yazılmaz)."
        },
        {
          "marker": "hitherto / heretofore",
          "turkish": "şimdiye değin / o zamana kadar",
          "position": "Zarf konumunda",
          "exampleEn": "The expedition revealed biological species hitherto unknown to science.",
          "exampleTr": "Keşif heyeti şimdiye kadar bilimin bilmediği biyolojik türleri ortaya çıkardı.",
          "pitfall": "Resmî/akademik metinlerde geçmişe dönük sınırlayıcı zarf olarak kullanılır."
        },
        {
          "marker": "no sooner ... than",
          "turkish": "tam ... olmuştu ki",
          "position": "Devrik cümle başında",
          "exampleEn": "No sooner had the keynote concluded than reporters swarmed the podium.",
          "exampleTr": "Açılış konuşması biter bitmez muhabirler kürsüye üşüştü.",
          "pitfall": "No sooner daima 'than' ile eşleşir; 'when' yazmak klasik çeldiricidir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that phrasal verbs (deyimsel fiiller) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, phrasal verbs (deyimsel fiiller) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Phrasal Verbs (Deyimsel Fiiller) [C1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Phrasal Verbs (Deyimsel Fiiller) - C1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Phrasal Verbs (Deyimsel Fiiller) konusunda C1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers phrasal verbs without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered phrasal verbs after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Phrasal Verbs (Deyimsel Fiiller) - C1] Aşağıdaki cümlelerin hangisinde Phrasal Verbs (Deyimsel Fiiller) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C1 criteria.",
          "B) The team has neglected the vital C1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Phrasal Verbs (Deyimsel Fiiller) konusu C1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C2",
      "title": "Phrasal Verbs (Deyimsel Fiiller) — C2: Söylem, Stil ve Derin Anlam Analizi",
      "definition": "Phrasal Verbs (Deyimsel Fiiller) konusunun C2 düzeyindeki tanımı: Üst düzey akademik söylem, nüans ustalıkları ve editörlük düzeyinde dil hakimiyeti.",
      "usage": "Phrasal Verbs (Deyimsel Fiiller) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + phrasal-verbs Temel Yapı + Nesne",
      "negativeStructure": "Özne + phrasal-verbs Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "phrasal-verbs Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[PHRASAL-VERBS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "from time immemorial",
          "turkish": "ezelden beri / çok eski zamanlardan beri",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Nomadic tribes have traversed these arid steppes from time immemorial.",
          "exampleTr": "Göçebe kabileler ezelden beri bu kurak bozkırları aşagelmiştir.",
          "pitfall": "Tarihsel derinlik ve süreklilik anlatır; genellikle Present Perfect ile pekişir."
        },
        {
          "marker": "in the twinkling of an eye",
          "turkish": "göz açıp kapayıncaya kadar",
          "position": "Cümle sonunda",
          "exampleEn": "Decades of architectural heritage were leveled in the twinkling of an eye by the quake.",
          "exampleTr": "Onlarca yıllık mimari miras depremle göz açıp kapayıncaya kadar yerle bir oldu.",
          "pitfall": "Ani ve radikal dönüşümleri niteleyen edebi/akademik üslup öğesidir."
        },
        {
          "marker": "at the eleventh hour",
          "turkish": "son anda / son dakikada",
          "position": "Cümle sonunda",
          "exampleEn": "The diplomatic accord was salvaged at the eleventh hour by bilateral concessions.",
          "exampleTr": "Diplomatik mutabakat son dakikada karşılıklı tavizlerle kurtarıldı.",
          "pitfall": "Gecikmiş ama zamanında yetişen kritik müdahaleleri betimler."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that phrasal verbs (deyimsel fiiller) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, phrasal verbs (deyimsel fiiller) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Phrasal Verbs (Deyimsel Fiiller) [C2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Phrasal Verbs (Deyimsel Fiiller) - C2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Phrasal Verbs (Deyimsel Fiiller) konusunda C2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers phrasal verbs without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered phrasal verbs after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Phrasal Verbs (Deyimsel Fiiller) - C2] Aşağıdaki cümlelerin hangisinde Phrasal Verbs (Deyimsel Fiiller) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C2 criteria.",
          "B) The team has neglected the vital C2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Phrasal Verbs (Deyimsel Fiiller) konusu C2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "YDS",
      "title": "Phrasal Verbs (Deyimsel Fiiller) — YDS: Sınav Stratejisi, Zaman Yönetimi ve Şık Eleme",
      "definition": "Phrasal Verbs (Deyimsel Fiiller) konusunun YDS düzeyindeki tanımı: Soru kökündeki gizli ipuçları, çeldirici eleme algoritmaları ve sınav netini maksimize etme.",
      "usage": "Phrasal Verbs (Deyimsel Fiiller) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "YDS seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + phrasal-verbs Temel Yapı + Nesne",
      "negativeStructure": "Özne + phrasal-verbs Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "phrasal-verbs Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[PHRASAL-VERBS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since + Past Time / V2",
          "turkish": "-den beri (YDS Şifresi)",
          "position": "Yan cümle başı / Ana cümle Present Perfect",
          "exampleEn": "Renewable energy adoption has accelerated since the landmark 2015 Paris agreement.",
          "exampleTr": "Yenilenebilir enerjiye geçiş, tarihi 2015 Paris Anlaşması'ndan beri hızlandı.",
          "pitfall": "Soru kökünde 'since + V2' görürsen ana cümlede mutlaka 'have/has V3' ara!"
        },
        {
          "marker": "by + future time (e.g. by 2035)",
          "turkish": "-e kadar (Gelecek Şifresi)",
          "position": "Zaman zarfı konumu",
          "exampleEn": "By 2035, the majority of industrial vehicles will have transitioned to hydrogen fuel.",
          "exampleTr": "2035 yılına kadar sanayi araçlarının çoğunluğu hidrojen yakıtına geçmiş olacaktır.",
          "pitfall": "'By + Gelecek Zaman' daima Future Perfect (will have V3) gerektirir."
        },
        {
          "marker": "over / in / during + the last / past + time",
          "turkish": "son ... boyunca (Banko Soru)",
          "position": "Cümle başı veya sonu",
          "exampleEn": "Over the past five decades, computational capacity has expanded exponentially.",
          "exampleTr": "Son elli yıl boyunca bilişim kapasitesi katlanarak büyüdü.",
          "pitfall": "'Over/In the past...' kalıbı YDS'de %99 Present Perfect (have/has V3) ister!"
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that phrasal verbs (deyimsel fiiller) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, phrasal verbs (deyimsel fiiller) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Phrasal Verbs (Deyimsel Fiiller) [YDS]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Phrasal Verbs (Deyimsel Fiiller) - YDS]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "YDS Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Phrasal Verbs (Deyimsel Fiiller) konusunda YDS düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers phrasal verbs without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered phrasal verbs after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Phrasal Verbs (Deyimsel Fiiller) - YDS] Aşağıdaki cümlelerin hangisinde Phrasal Verbs (Deyimsel Fiiller) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard YDS criteria.",
          "B) The team has neglected the vital YDS variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the YDS protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary YDS models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Phrasal Verbs (Deyimsel Fiiller) konusu YDS seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    }
  ],
  "determiners": [
    {
      "level": "A1",
      "title": "Determiners (Belirteçler) — A1: Temel Tanıma ve Açık İpuçları",
      "definition": "Determiners (Belirteçler) konusunun A1 düzeyindeki tanımı: Temel özne-fiil uyumu, basit cümle kuruluşu ve en yalın kurallar.",
      "usage": "Determiners (Belirteçler) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + determiners Temel Yapı + Nesne",
      "negativeStructure": "Özne + determiners Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "determiners Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[DETERMINERS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "always",
          "turkish": "her zaman",
          "position": "Özne ile fiil arasında",
          "exampleEn": "She always arrives at school on time.",
          "exampleTr": "Okula her zaman vaktinde gelir.",
          "pitfall": "Fiilden sonra yazılmamalıdır ('She arrives always' yanlıştır)."
        },
        {
          "marker": "every day",
          "turkish": "her gün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "I drink fresh orange juice every day.",
          "exampleTr": "Her gün taze portakal suyu içerim.",
          "pitfall": "Bitişik yazılan 'everyday' sıfattır; zaman zarfı ayrı yazılır ('every day')."
        },
        {
          "marker": "now / at the moment",
          "turkish": "şu anda / şimdi",
          "position": "Cümle sonunda",
          "exampleEn": "The children are playing in the garden right now.",
          "exampleTr": "Çocuklar şu anda bahçede oynuyorlar.",
          "pitfall": "Geniş zaman ile değil şimdiki zamanla (am/is/are + Ving) kullanılır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that determiners (belirteçler) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, determiners (belirteçler) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Determiners (Belirteçler) [A1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Determiners (Belirteçler) - A1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Determiners (Belirteçler) konusunda A1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers determiners without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered determiners after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Determiners (Belirteçler) - A1] Aşağıdaki cümlelerin hangisinde Determiners (Belirteçler) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A1 criteria.",
          "B) The team has neglected the vital A1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Determiners (Belirteçler) konusu A1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "A2",
      "title": "Determiners (Belirteçler) — A2: Kombinasyon ve Temel Bağlaçlar",
      "definition": "Determiners (Belirteçler) konusunun A2 düzeyindeki tanımı: Sıklık zarfları, basit bağlaçlar, kısa cevaplar ve temel zaman karşılaştırmaları.",
      "usage": "Determiners (Belirteçler) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + determiners Temel Yapı + Nesne",
      "negativeStructure": "Özne + determiners Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "determiners Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[DETERMINERS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "yesterday",
          "turkish": "dün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "The committee met yesterday to approve the budget.",
          "exampleTr": "Komite bütçeyi onaylamak için dün toplandı.",
          "pitfall": "Present Perfect ile kullanılmaz; daima Simple Past (V2) gerektirir."
        },
        {
          "marker": "two days ago",
          "turkish": "iki gün önce",
          "position": "Cümle sonunda",
          "exampleEn": "The package arrived two days ago.",
          "exampleTr": "Paket iki gün önce ulaştı.",
          "pitfall": "'before' ile karıştırılmamalıdır; 'ago' şimdiki andan geçmişe sayar ve V2 ister."
        },
        {
          "marker": "usually / often",
          "turkish": "genellikle / sık sık",
          "position": "Özne ile fiil arasında",
          "exampleEn": "He usually takes the subway to avoid traffic.",
          "exampleTr": "Trafikten kaçınmak için genellikle metroyu kullanır.",
          "pitfall": "He/she/it öznelerinde fiilin -s takısını unutturmamalıdır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that determiners (belirteçler) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, determiners (belirteçler) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Determiners (Belirteçler) [A2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Determiners (Belirteçler) - A2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Determiners (Belirteçler) konusunda A2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers determiners without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered determiners after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Determiners (Belirteçler) - A2] Aşağıdaki cümlelerin hangisinde Determiners (Belirteçler) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A2 criteria.",
          "B) The team has neglected the vital A2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Determiners (Belirteçler) konusu A2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B1",
      "title": "Determiners (Belirteçler) — B1: Cümle İçi Bağlam ve Süreç Zamanları",
      "definition": "Determiners (Belirteçler) konusunun B1 düzeyindeki tanımı: Bağlaçlı cümleler, zaman uyumu, orta seviye kalıplar ve süreç zamanları.",
      "usage": "Determiners (Belirteçler) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + determiners Temel Yapı + Nesne",
      "negativeStructure": "Özne + determiners Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "determiners Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[DETERMINERS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since 2015 / since then",
          "turkish": "-den beri",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "She has worked at the research center since 2015.",
          "exampleTr": "2015'ten beri araştırma merkezinde çalışıyor.",
          "pitfall": "Since'ten sonra geçmiş zaman noktası (V2), ana cümlede Present Perfect (have/has V3) gelir."
        },
        {
          "marker": "for five years",
          "turkish": "beş yıldır / beş sene boyunca",
          "position": "Cümle sonunda",
          "exampleEn": "They have lived in London for five years.",
          "exampleTr": "Beş yıldır Londra'da yaşıyorlar.",
          "pitfall": "Süreç bitmişse Simple Past ('lived for 5 years'), hala sürüyorsa Present Perfect ('have lived') kullanılır."
        },
        {
          "marker": "while / as",
          "turkish": "-iken",
          "position": "Yan cümlenin başında",
          "exampleEn": "While the scientist was calibrating the sensors, the alarm sounded.",
          "exampleTr": "Bilim insanı sensörleri kalibre ederken alarm çaldı.",
          "pitfall": "While genellikle Past Continuous (was/were Ving) ile süreç bildirir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that determiners (belirteçler) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, determiners (belirteçler) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Determiners (Belirteçler) [B1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Determiners (Belirteçler) - B1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Determiners (Belirteçler) konusunda B1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers determiners without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered determiners after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Determiners (Belirteçler) - B1] Aşağıdaki cümlelerin hangisinde Determiners (Belirteçler) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B1 criteria.",
          "B) The team has neglected the vital B1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Determiners (Belirteçler) konusu B1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B2",
      "title": "Determiners (Belirteçler) — B2: Akademik Bağlam ve İleri Yapılar",
      "definition": "Determiners (Belirteçler) konusunun B2 düzeyindeki tanımı: Karmaşık yan cümleler, perfect/passive ilişkileri ve YDS tipi güçlü çeldiriciler.",
      "usage": "Determiners (Belirteçler) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + determiners Temel Yapı + Nesne",
      "negativeStructure": "Özne + determiners Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "determiners Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[DETERMINERS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "by the time",
          "turkish": "-e kadar / -dığı zamana kadar",
          "position": "Yan cümlenin başında",
          "exampleEn": "By the time the firefighters arrived, the blaze had been extinguished.",
          "exampleTr": "İtfaiyeciler gelene kadar yangın söndürülmüştü.",
          "pitfall": "By the time + V2 -> had V3; By the time + V1 -> will have V3 zaman kuralına uymalıdır."
        },
        {
          "marker": "so far / up to now",
          "turkish": "şu ana kadar",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "No significant anomalies have been observed so far.",
          "exampleTr": "Şu ana kadar hiçbir belirgin anormallik gözlemlenmedi.",
          "pitfall": "Past tense ile değil Present Perfect (have/has V3) ile kullanılır."
        },
        {
          "marker": "in recent decades",
          "turkish": "son on yıllarda",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Global temperatures have risen markedly in recent decades.",
          "exampleTr": "Küresel sıcaklıklar son on yıllarda belirgin şekilde arttı.",
          "pitfall": "'In recent...' kalıbı günümüze uzanan süreci anlattığından Present Perfect ister."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that determiners (belirteçler) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, determiners (belirteçler) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Determiners (Belirteçler) [B2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Determiners (Belirteçler) - B2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Determiners (Belirteçler) konusunda B2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers determiners without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered determiners after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Determiners (Belirteçler) - B2] Aşağıdaki cümlelerin hangisinde Determiners (Belirteçler) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B2 criteria.",
          "B) The team has neglected the vital B2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Determiners (Belirteçler) konusu B2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C1",
      "title": "Determiners (Belirteçler) — C1: Nüanslar, İstisnalar ve Devrik Yapılar",
      "definition": "Determiners (Belirteçler) konusunun C1 düzeyindeki tanımı: İnce anlam farkları, resmî/akademik üslup, istisnai kurallar ve karmaşık yapılar.",
      "usage": "Determiners (Belirteçler) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + determiners Temel Yapı + Nesne",
      "negativeStructure": "Özne + determiners Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "determiners Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[DETERMINERS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "scarcely ... when",
          "turkish": "-er -mez",
          "position": "Devrik cümle başında",
          "exampleEn": "Scarcely had the treaty been signed when border clashes resumed.",
          "exampleTr": "Antlaşma imzalanır imzalanmaz sınır çatışmaları yeniden başladı.",
          "pitfall": "Scarcely had + S + V3 ... WHEN dizilimi bozulmamalıdır (THAN yazılmaz)."
        },
        {
          "marker": "hitherto / heretofore",
          "turkish": "şimdiye değin / o zamana kadar",
          "position": "Zarf konumunda",
          "exampleEn": "The expedition revealed biological species hitherto unknown to science.",
          "exampleTr": "Keşif heyeti şimdiye kadar bilimin bilmediği biyolojik türleri ortaya çıkardı.",
          "pitfall": "Resmî/akademik metinlerde geçmişe dönük sınırlayıcı zarf olarak kullanılır."
        },
        {
          "marker": "no sooner ... than",
          "turkish": "tam ... olmuştu ki",
          "position": "Devrik cümle başında",
          "exampleEn": "No sooner had the keynote concluded than reporters swarmed the podium.",
          "exampleTr": "Açılış konuşması biter bitmez muhabirler kürsüye üşüştü.",
          "pitfall": "No sooner daima 'than' ile eşleşir; 'when' yazmak klasik çeldiricidir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that determiners (belirteçler) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, determiners (belirteçler) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Determiners (Belirteçler) [C1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Determiners (Belirteçler) - C1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Determiners (Belirteçler) konusunda C1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers determiners without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered determiners after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Determiners (Belirteçler) - C1] Aşağıdaki cümlelerin hangisinde Determiners (Belirteçler) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C1 criteria.",
          "B) The team has neglected the vital C1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Determiners (Belirteçler) konusu C1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C2",
      "title": "Determiners (Belirteçler) — C2: Söylem, Stil ve Derin Anlam Analizi",
      "definition": "Determiners (Belirteçler) konusunun C2 düzeyindeki tanımı: Üst düzey akademik söylem, nüans ustalıkları ve editörlük düzeyinde dil hakimiyeti.",
      "usage": "Determiners (Belirteçler) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + determiners Temel Yapı + Nesne",
      "negativeStructure": "Özne + determiners Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "determiners Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[DETERMINERS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "from time immemorial",
          "turkish": "ezelden beri / çok eski zamanlardan beri",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Nomadic tribes have traversed these arid steppes from time immemorial.",
          "exampleTr": "Göçebe kabileler ezelden beri bu kurak bozkırları aşagelmiştir.",
          "pitfall": "Tarihsel derinlik ve süreklilik anlatır; genellikle Present Perfect ile pekişir."
        },
        {
          "marker": "in the twinkling of an eye",
          "turkish": "göz açıp kapayıncaya kadar",
          "position": "Cümle sonunda",
          "exampleEn": "Decades of architectural heritage were leveled in the twinkling of an eye by the quake.",
          "exampleTr": "Onlarca yıllık mimari miras depremle göz açıp kapayıncaya kadar yerle bir oldu.",
          "pitfall": "Ani ve radikal dönüşümleri niteleyen edebi/akademik üslup öğesidir."
        },
        {
          "marker": "at the eleventh hour",
          "turkish": "son anda / son dakikada",
          "position": "Cümle sonunda",
          "exampleEn": "The diplomatic accord was salvaged at the eleventh hour by bilateral concessions.",
          "exampleTr": "Diplomatik mutabakat son dakikada karşılıklı tavizlerle kurtarıldı.",
          "pitfall": "Gecikmiş ama zamanında yetişen kritik müdahaleleri betimler."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that determiners (belirteçler) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, determiners (belirteçler) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Determiners (Belirteçler) [C2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Determiners (Belirteçler) - C2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Determiners (Belirteçler) konusunda C2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers determiners without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered determiners after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Determiners (Belirteçler) - C2] Aşağıdaki cümlelerin hangisinde Determiners (Belirteçler) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C2 criteria.",
          "B) The team has neglected the vital C2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Determiners (Belirteçler) konusu C2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "YDS",
      "title": "Determiners (Belirteçler) — YDS: Sınav Stratejisi, Zaman Yönetimi ve Şık Eleme",
      "definition": "Determiners (Belirteçler) konusunun YDS düzeyindeki tanımı: Soru kökündeki gizli ipuçları, çeldirici eleme algoritmaları ve sınav netini maksimize etme.",
      "usage": "Determiners (Belirteçler) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "YDS seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + determiners Temel Yapı + Nesne",
      "negativeStructure": "Özne + determiners Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "determiners Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[DETERMINERS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since + Past Time / V2",
          "turkish": "-den beri (YDS Şifresi)",
          "position": "Yan cümle başı / Ana cümle Present Perfect",
          "exampleEn": "Renewable energy adoption has accelerated since the landmark 2015 Paris agreement.",
          "exampleTr": "Yenilenebilir enerjiye geçiş, tarihi 2015 Paris Anlaşması'ndan beri hızlandı.",
          "pitfall": "Soru kökünde 'since + V2' görürsen ana cümlede mutlaka 'have/has V3' ara!"
        },
        {
          "marker": "by + future time (e.g. by 2035)",
          "turkish": "-e kadar (Gelecek Şifresi)",
          "position": "Zaman zarfı konumu",
          "exampleEn": "By 2035, the majority of industrial vehicles will have transitioned to hydrogen fuel.",
          "exampleTr": "2035 yılına kadar sanayi araçlarının çoğunluğu hidrojen yakıtına geçmiş olacaktır.",
          "pitfall": "'By + Gelecek Zaman' daima Future Perfect (will have V3) gerektirir."
        },
        {
          "marker": "over / in / during + the last / past + time",
          "turkish": "son ... boyunca (Banko Soru)",
          "position": "Cümle başı veya sonu",
          "exampleEn": "Over the past five decades, computational capacity has expanded exponentially.",
          "exampleTr": "Son elli yıl boyunca bilişim kapasitesi katlanarak büyüdü.",
          "pitfall": "'Over/In the past...' kalıbı YDS'de %99 Present Perfect (have/has V3) ister!"
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that determiners (belirteçler) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, determiners (belirteçler) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Determiners (Belirteçler) [YDS]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Determiners (Belirteçler) - YDS]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "YDS Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Determiners (Belirteçler) konusunda YDS düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers determiners without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered determiners after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Determiners (Belirteçler) - YDS] Aşağıdaki cümlelerin hangisinde Determiners (Belirteçler) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard YDS criteria.",
          "B) The team has neglected the vital YDS variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the YDS protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary YDS models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Determiners (Belirteçler) konusu YDS seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    }
  ],
  "comparatives": [
    {
      "level": "A1",
      "title": "Comparatives & Superlatives — A1: Temel Tanıma ve Açık İpuçları",
      "definition": "Comparatives & Superlatives konusunun A1 düzeyindeki tanımı: Temel özne-fiil uyumu, basit cümle kuruluşu ve en yalın kurallar.",
      "usage": "Comparatives & Superlatives bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + comparatives Temel Yapı + Nesne",
      "negativeStructure": "Özne + comparatives Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "comparatives Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[COMPARATIVES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "always",
          "turkish": "her zaman",
          "position": "Özne ile fiil arasında",
          "exampleEn": "She always arrives at school on time.",
          "exampleTr": "Okula her zaman vaktinde gelir.",
          "pitfall": "Fiilden sonra yazılmamalıdır ('She arrives always' yanlıştır)."
        },
        {
          "marker": "every day",
          "turkish": "her gün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "I drink fresh orange juice every day.",
          "exampleTr": "Her gün taze portakal suyu içerim.",
          "pitfall": "Bitişik yazılan 'everyday' sıfattır; zaman zarfı ayrı yazılır ('every day')."
        },
        {
          "marker": "now / at the moment",
          "turkish": "şu anda / şimdi",
          "position": "Cümle sonunda",
          "exampleEn": "The children are playing in the garden right now.",
          "exampleTr": "Çocuklar şu anda bahçede oynuyorlar.",
          "pitfall": "Geniş zaman ile değil şimdiki zamanla (am/is/are + Ving) kullanılır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that comparatives & superlatives plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, comparatives & superlatives konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Comparatives & Superlatives [A1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Comparatives & Superlatives - A1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Comparatives & Superlatives konusunda A1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers comparatives without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered comparatives after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Comparatives & Superlatives - A1] Aşağıdaki cümlelerin hangisinde Comparatives & Superlatives kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A1 criteria.",
          "B) The team has neglected the vital A1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Comparatives & Superlatives konusu A1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "A2",
      "title": "Comparatives & Superlatives — A2: Kombinasyon ve Temel Bağlaçlar",
      "definition": "Comparatives & Superlatives konusunun A2 düzeyindeki tanımı: Sıklık zarfları, basit bağlaçlar, kısa cevaplar ve temel zaman karşılaştırmaları.",
      "usage": "Comparatives & Superlatives bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + comparatives Temel Yapı + Nesne",
      "negativeStructure": "Özne + comparatives Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "comparatives Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[COMPARATIVES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "yesterday",
          "turkish": "dün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "The committee met yesterday to approve the budget.",
          "exampleTr": "Komite bütçeyi onaylamak için dün toplandı.",
          "pitfall": "Present Perfect ile kullanılmaz; daima Simple Past (V2) gerektirir."
        },
        {
          "marker": "two days ago",
          "turkish": "iki gün önce",
          "position": "Cümle sonunda",
          "exampleEn": "The package arrived two days ago.",
          "exampleTr": "Paket iki gün önce ulaştı.",
          "pitfall": "'before' ile karıştırılmamalıdır; 'ago' şimdiki andan geçmişe sayar ve V2 ister."
        },
        {
          "marker": "usually / often",
          "turkish": "genellikle / sık sık",
          "position": "Özne ile fiil arasında",
          "exampleEn": "He usually takes the subway to avoid traffic.",
          "exampleTr": "Trafikten kaçınmak için genellikle metroyu kullanır.",
          "pitfall": "He/she/it öznelerinde fiilin -s takısını unutturmamalıdır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that comparatives & superlatives plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, comparatives & superlatives konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Comparatives & Superlatives [A2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Comparatives & Superlatives - A2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Comparatives & Superlatives konusunda A2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers comparatives without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered comparatives after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Comparatives & Superlatives - A2] Aşağıdaki cümlelerin hangisinde Comparatives & Superlatives kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A2 criteria.",
          "B) The team has neglected the vital A2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Comparatives & Superlatives konusu A2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B1",
      "title": "Comparatives & Superlatives — B1: Cümle İçi Bağlam ve Süreç Zamanları",
      "definition": "Comparatives & Superlatives konusunun B1 düzeyindeki tanımı: Bağlaçlı cümleler, zaman uyumu, orta seviye kalıplar ve süreç zamanları.",
      "usage": "Comparatives & Superlatives bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + comparatives Temel Yapı + Nesne",
      "negativeStructure": "Özne + comparatives Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "comparatives Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[COMPARATIVES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since 2015 / since then",
          "turkish": "-den beri",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "She has worked at the research center since 2015.",
          "exampleTr": "2015'ten beri araştırma merkezinde çalışıyor.",
          "pitfall": "Since'ten sonra geçmiş zaman noktası (V2), ana cümlede Present Perfect (have/has V3) gelir."
        },
        {
          "marker": "for five years",
          "turkish": "beş yıldır / beş sene boyunca",
          "position": "Cümle sonunda",
          "exampleEn": "They have lived in London for five years.",
          "exampleTr": "Beş yıldır Londra'da yaşıyorlar.",
          "pitfall": "Süreç bitmişse Simple Past ('lived for 5 years'), hala sürüyorsa Present Perfect ('have lived') kullanılır."
        },
        {
          "marker": "while / as",
          "turkish": "-iken",
          "position": "Yan cümlenin başında",
          "exampleEn": "While the scientist was calibrating the sensors, the alarm sounded.",
          "exampleTr": "Bilim insanı sensörleri kalibre ederken alarm çaldı.",
          "pitfall": "While genellikle Past Continuous (was/were Ving) ile süreç bildirir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that comparatives & superlatives plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, comparatives & superlatives konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Comparatives & Superlatives [B1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Comparatives & Superlatives - B1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Comparatives & Superlatives konusunda B1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers comparatives without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered comparatives after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Comparatives & Superlatives - B1] Aşağıdaki cümlelerin hangisinde Comparatives & Superlatives kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B1 criteria.",
          "B) The team has neglected the vital B1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Comparatives & Superlatives konusu B1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B2",
      "title": "Comparatives & Superlatives — B2: Akademik Bağlam ve İleri Yapılar",
      "definition": "Comparatives & Superlatives konusunun B2 düzeyindeki tanımı: Karmaşık yan cümleler, perfect/passive ilişkileri ve YDS tipi güçlü çeldiriciler.",
      "usage": "Comparatives & Superlatives bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + comparatives Temel Yapı + Nesne",
      "negativeStructure": "Özne + comparatives Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "comparatives Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[COMPARATIVES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "by the time",
          "turkish": "-e kadar / -dığı zamana kadar",
          "position": "Yan cümlenin başında",
          "exampleEn": "By the time the firefighters arrived, the blaze had been extinguished.",
          "exampleTr": "İtfaiyeciler gelene kadar yangın söndürülmüştü.",
          "pitfall": "By the time + V2 -> had V3; By the time + V1 -> will have V3 zaman kuralına uymalıdır."
        },
        {
          "marker": "so far / up to now",
          "turkish": "şu ana kadar",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "No significant anomalies have been observed so far.",
          "exampleTr": "Şu ana kadar hiçbir belirgin anormallik gözlemlenmedi.",
          "pitfall": "Past tense ile değil Present Perfect (have/has V3) ile kullanılır."
        },
        {
          "marker": "in recent decades",
          "turkish": "son on yıllarda",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Global temperatures have risen markedly in recent decades.",
          "exampleTr": "Küresel sıcaklıklar son on yıllarda belirgin şekilde arttı.",
          "pitfall": "'In recent...' kalıbı günümüze uzanan süreci anlattığından Present Perfect ister."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that comparatives & superlatives plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, comparatives & superlatives konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Comparatives & Superlatives [B2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Comparatives & Superlatives - B2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Comparatives & Superlatives konusunda B2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers comparatives without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered comparatives after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Comparatives & Superlatives - B2] Aşağıdaki cümlelerin hangisinde Comparatives & Superlatives kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B2 criteria.",
          "B) The team has neglected the vital B2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Comparatives & Superlatives konusu B2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C1",
      "title": "Comparatives & Superlatives — C1: Nüanslar, İstisnalar ve Devrik Yapılar",
      "definition": "Comparatives & Superlatives konusunun C1 düzeyindeki tanımı: İnce anlam farkları, resmî/akademik üslup, istisnai kurallar ve karmaşık yapılar.",
      "usage": "Comparatives & Superlatives bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + comparatives Temel Yapı + Nesne",
      "negativeStructure": "Özne + comparatives Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "comparatives Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[COMPARATIVES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "scarcely ... when",
          "turkish": "-er -mez",
          "position": "Devrik cümle başında",
          "exampleEn": "Scarcely had the treaty been signed when border clashes resumed.",
          "exampleTr": "Antlaşma imzalanır imzalanmaz sınır çatışmaları yeniden başladı.",
          "pitfall": "Scarcely had + S + V3 ... WHEN dizilimi bozulmamalıdır (THAN yazılmaz)."
        },
        {
          "marker": "hitherto / heretofore",
          "turkish": "şimdiye değin / o zamana kadar",
          "position": "Zarf konumunda",
          "exampleEn": "The expedition revealed biological species hitherto unknown to science.",
          "exampleTr": "Keşif heyeti şimdiye kadar bilimin bilmediği biyolojik türleri ortaya çıkardı.",
          "pitfall": "Resmî/akademik metinlerde geçmişe dönük sınırlayıcı zarf olarak kullanılır."
        },
        {
          "marker": "no sooner ... than",
          "turkish": "tam ... olmuştu ki",
          "position": "Devrik cümle başında",
          "exampleEn": "No sooner had the keynote concluded than reporters swarmed the podium.",
          "exampleTr": "Açılış konuşması biter bitmez muhabirler kürsüye üşüştü.",
          "pitfall": "No sooner daima 'than' ile eşleşir; 'when' yazmak klasik çeldiricidir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that comparatives & superlatives plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, comparatives & superlatives konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Comparatives & Superlatives [C1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Comparatives & Superlatives - C1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Comparatives & Superlatives konusunda C1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers comparatives without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered comparatives after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Comparatives & Superlatives - C1] Aşağıdaki cümlelerin hangisinde Comparatives & Superlatives kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C1 criteria.",
          "B) The team has neglected the vital C1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Comparatives & Superlatives konusu C1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C2",
      "title": "Comparatives & Superlatives — C2: Söylem, Stil ve Derin Anlam Analizi",
      "definition": "Comparatives & Superlatives konusunun C2 düzeyindeki tanımı: Üst düzey akademik söylem, nüans ustalıkları ve editörlük düzeyinde dil hakimiyeti.",
      "usage": "Comparatives & Superlatives bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + comparatives Temel Yapı + Nesne",
      "negativeStructure": "Özne + comparatives Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "comparatives Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[COMPARATIVES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "from time immemorial",
          "turkish": "ezelden beri / çok eski zamanlardan beri",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Nomadic tribes have traversed these arid steppes from time immemorial.",
          "exampleTr": "Göçebe kabileler ezelden beri bu kurak bozkırları aşagelmiştir.",
          "pitfall": "Tarihsel derinlik ve süreklilik anlatır; genellikle Present Perfect ile pekişir."
        },
        {
          "marker": "in the twinkling of an eye",
          "turkish": "göz açıp kapayıncaya kadar",
          "position": "Cümle sonunda",
          "exampleEn": "Decades of architectural heritage were leveled in the twinkling of an eye by the quake.",
          "exampleTr": "Onlarca yıllık mimari miras depremle göz açıp kapayıncaya kadar yerle bir oldu.",
          "pitfall": "Ani ve radikal dönüşümleri niteleyen edebi/akademik üslup öğesidir."
        },
        {
          "marker": "at the eleventh hour",
          "turkish": "son anda / son dakikada",
          "position": "Cümle sonunda",
          "exampleEn": "The diplomatic accord was salvaged at the eleventh hour by bilateral concessions.",
          "exampleTr": "Diplomatik mutabakat son dakikada karşılıklı tavizlerle kurtarıldı.",
          "pitfall": "Gecikmiş ama zamanında yetişen kritik müdahaleleri betimler."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that comparatives & superlatives plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, comparatives & superlatives konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Comparatives & Superlatives [C2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Comparatives & Superlatives - C2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Comparatives & Superlatives konusunda C2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers comparatives without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered comparatives after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Comparatives & Superlatives - C2] Aşağıdaki cümlelerin hangisinde Comparatives & Superlatives kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C2 criteria.",
          "B) The team has neglected the vital C2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Comparatives & Superlatives konusu C2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "YDS",
      "title": "Comparatives & Superlatives — YDS: Sınav Stratejisi, Zaman Yönetimi ve Şık Eleme",
      "definition": "Comparatives & Superlatives konusunun YDS düzeyindeki tanımı: Soru kökündeki gizli ipuçları, çeldirici eleme algoritmaları ve sınav netini maksimize etme.",
      "usage": "Comparatives & Superlatives bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "YDS seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + comparatives Temel Yapı + Nesne",
      "negativeStructure": "Özne + comparatives Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "comparatives Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[COMPARATIVES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since + Past Time / V2",
          "turkish": "-den beri (YDS Şifresi)",
          "position": "Yan cümle başı / Ana cümle Present Perfect",
          "exampleEn": "Renewable energy adoption has accelerated since the landmark 2015 Paris agreement.",
          "exampleTr": "Yenilenebilir enerjiye geçiş, tarihi 2015 Paris Anlaşması'ndan beri hızlandı.",
          "pitfall": "Soru kökünde 'since + V2' görürsen ana cümlede mutlaka 'have/has V3' ara!"
        },
        {
          "marker": "by + future time (e.g. by 2035)",
          "turkish": "-e kadar (Gelecek Şifresi)",
          "position": "Zaman zarfı konumu",
          "exampleEn": "By 2035, the majority of industrial vehicles will have transitioned to hydrogen fuel.",
          "exampleTr": "2035 yılına kadar sanayi araçlarının çoğunluğu hidrojen yakıtına geçmiş olacaktır.",
          "pitfall": "'By + Gelecek Zaman' daima Future Perfect (will have V3) gerektirir."
        },
        {
          "marker": "over / in / during + the last / past + time",
          "turkish": "son ... boyunca (Banko Soru)",
          "position": "Cümle başı veya sonu",
          "exampleEn": "Over the past five decades, computational capacity has expanded exponentially.",
          "exampleTr": "Son elli yıl boyunca bilişim kapasitesi katlanarak büyüdü.",
          "pitfall": "'Over/In the past...' kalıbı YDS'de %99 Present Perfect (have/has V3) ister!"
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that comparatives & superlatives plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, comparatives & superlatives konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Comparatives & Superlatives [YDS]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Comparatives & Superlatives - YDS]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "YDS Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Comparatives & Superlatives konusunda YDS düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers comparatives without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered comparatives after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Comparatives & Superlatives - YDS] Aşağıdaki cümlelerin hangisinde Comparatives & Superlatives kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard YDS criteria.",
          "B) The team has neglected the vital YDS variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the YDS protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary YDS models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Comparatives & Superlatives konusu YDS seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    }
  ],
  "inversion": [
    {
      "level": "A1",
      "title": "Inversion (Devrik Cümleler) — A1: Temel Tanıma ve Açık İpuçları",
      "definition": "Inversion (Devrik Cümleler) konusunun A1 düzeyindeki tanımı: Temel özne-fiil uyumu, basit cümle kuruluşu ve en yalın kurallar.",
      "usage": "Inversion (Devrik Cümleler) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Negative Adverb + Aux + Subject + Verb",
      "negativeStructure": "Devrik yapı zaten olumsuzluk içerir (Under no circumstances + should + S + V1)",
      "questionStructure": "Devrik yapı soru dizilimiyle aynıdır: Aux + S + V?",
      "formula": "Negative Adverbial (Never/Hardly/Not only) + Auxiliary Verb + Subject + Main Verb",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "always",
          "turkish": "her zaman",
          "position": "Özne ile fiil arasında",
          "exampleEn": "She always arrives at school on time.",
          "exampleTr": "Okula her zaman vaktinde gelir.",
          "pitfall": "Fiilden sonra yazılmamalıdır ('She arrives always' yanlıştır)."
        },
        {
          "marker": "every day",
          "turkish": "her gün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "I drink fresh orange juice every day.",
          "exampleTr": "Her gün taze portakal suyu içerim.",
          "pitfall": "Bitişik yazılan 'everyday' sıfattır; zaman zarfı ayrı yazılır ('every day')."
        },
        {
          "marker": "now / at the moment",
          "turkish": "şu anda / şimdi",
          "position": "Cümle sonunda",
          "exampleEn": "The children are playing in the garden right now.",
          "exampleTr": "Çocuklar şu anda bahçede oynuyorlar.",
          "pitfall": "Geniş zaman ile değil şimdiki zamanla (am/is/are + Ving) kullanılır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that inversion (devrik cümleler) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, inversion (devrik cümleler) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Inversion (Devrik Cümleler) [A1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Inversion (Devrik Cümleler) - A1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Inversion (Devrik Cümleler) konusunda A1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers inversion without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered inversion after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Inversion (Devrik Cümleler) - A1] Aşağıdaki cümlelerin hangisinde Inversion (Devrik Cümleler) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A1 criteria.",
          "B) The team has neglected the vital A1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Inversion (Devrik Cümleler) konusu A1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "A2",
      "title": "Inversion (Devrik Cümleler) — A2: Kombinasyon ve Temel Bağlaçlar",
      "definition": "Inversion (Devrik Cümleler) konusunun A2 düzeyindeki tanımı: Sıklık zarfları, basit bağlaçlar, kısa cevaplar ve temel zaman karşılaştırmaları.",
      "usage": "Inversion (Devrik Cümleler) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Negative Adverb + Aux + Subject + Verb",
      "negativeStructure": "Devrik yapı zaten olumsuzluk içerir (Under no circumstances + should + S + V1)",
      "questionStructure": "Devrik yapı soru dizilimiyle aynıdır: Aux + S + V?",
      "formula": "Negative Adverbial (Never/Hardly/Not only) + Auxiliary Verb + Subject + Main Verb",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "yesterday",
          "turkish": "dün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "The committee met yesterday to approve the budget.",
          "exampleTr": "Komite bütçeyi onaylamak için dün toplandı.",
          "pitfall": "Present Perfect ile kullanılmaz; daima Simple Past (V2) gerektirir."
        },
        {
          "marker": "two days ago",
          "turkish": "iki gün önce",
          "position": "Cümle sonunda",
          "exampleEn": "The package arrived two days ago.",
          "exampleTr": "Paket iki gün önce ulaştı.",
          "pitfall": "'before' ile karıştırılmamalıdır; 'ago' şimdiki andan geçmişe sayar ve V2 ister."
        },
        {
          "marker": "usually / often",
          "turkish": "genellikle / sık sık",
          "position": "Özne ile fiil arasında",
          "exampleEn": "He usually takes the subway to avoid traffic.",
          "exampleTr": "Trafikten kaçınmak için genellikle metroyu kullanır.",
          "pitfall": "He/she/it öznelerinde fiilin -s takısını unutturmamalıdır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that inversion (devrik cümleler) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, inversion (devrik cümleler) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Inversion (Devrik Cümleler) [A2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Inversion (Devrik Cümleler) - A2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Inversion (Devrik Cümleler) konusunda A2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers inversion without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered inversion after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Inversion (Devrik Cümleler) - A2] Aşağıdaki cümlelerin hangisinde Inversion (Devrik Cümleler) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A2 criteria.",
          "B) The team has neglected the vital A2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Inversion (Devrik Cümleler) konusu A2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B1",
      "title": "Inversion (Devrik Cümleler) — B1: Cümle İçi Bağlam ve Süreç Zamanları",
      "definition": "Inversion (Devrik Cümleler) konusunun B1 düzeyindeki tanımı: Bağlaçlı cümleler, zaman uyumu, orta seviye kalıplar ve süreç zamanları.",
      "usage": "Inversion (Devrik Cümleler) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Negative Adverb + Aux + Subject + Verb",
      "negativeStructure": "Devrik yapı zaten olumsuzluk içerir (Under no circumstances + should + S + V1)",
      "questionStructure": "Devrik yapı soru dizilimiyle aynıdır: Aux + S + V?",
      "formula": "Negative Adverbial (Never/Hardly/Not only) + Auxiliary Verb + Subject + Main Verb",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since 2015 / since then",
          "turkish": "-den beri",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "She has worked at the research center since 2015.",
          "exampleTr": "2015'ten beri araştırma merkezinde çalışıyor.",
          "pitfall": "Since'ten sonra geçmiş zaman noktası (V2), ana cümlede Present Perfect (have/has V3) gelir."
        },
        {
          "marker": "for five years",
          "turkish": "beş yıldır / beş sene boyunca",
          "position": "Cümle sonunda",
          "exampleEn": "They have lived in London for five years.",
          "exampleTr": "Beş yıldır Londra'da yaşıyorlar.",
          "pitfall": "Süreç bitmişse Simple Past ('lived for 5 years'), hala sürüyorsa Present Perfect ('have lived') kullanılır."
        },
        {
          "marker": "while / as",
          "turkish": "-iken",
          "position": "Yan cümlenin başında",
          "exampleEn": "While the scientist was calibrating the sensors, the alarm sounded.",
          "exampleTr": "Bilim insanı sensörleri kalibre ederken alarm çaldı.",
          "pitfall": "While genellikle Past Continuous (was/were Ving) ile süreç bildirir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that inversion (devrik cümleler) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, inversion (devrik cümleler) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Inversion (Devrik Cümleler) [B1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Inversion (Devrik Cümleler) - B1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Inversion (Devrik Cümleler) konusunda B1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers inversion without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered inversion after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Inversion (Devrik Cümleler) - B1] Aşağıdaki cümlelerin hangisinde Inversion (Devrik Cümleler) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B1 criteria.",
          "B) The team has neglected the vital B1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Inversion (Devrik Cümleler) konusu B1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B2",
      "title": "Inversion (Devrik Cümleler) — B2: Akademik Bağlam ve İleri Yapılar",
      "definition": "Inversion (Devrik Cümleler) konusunun B2 düzeyindeki tanımı: Karmaşık yan cümleler, perfect/passive ilişkileri ve YDS tipi güçlü çeldiriciler.",
      "usage": "Inversion (Devrik Cümleler) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Negative Adverb + Aux + Subject + Verb",
      "negativeStructure": "Devrik yapı zaten olumsuzluk içerir (Under no circumstances + should + S + V1)",
      "questionStructure": "Devrik yapı soru dizilimiyle aynıdır: Aux + S + V?",
      "formula": "Negative Adverbial (Never/Hardly/Not only) + Auxiliary Verb + Subject + Main Verb",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "by the time",
          "turkish": "-e kadar / -dığı zamana kadar",
          "position": "Yan cümlenin başında",
          "exampleEn": "By the time the firefighters arrived, the blaze had been extinguished.",
          "exampleTr": "İtfaiyeciler gelene kadar yangın söndürülmüştü.",
          "pitfall": "By the time + V2 -> had V3; By the time + V1 -> will have V3 zaman kuralına uymalıdır."
        },
        {
          "marker": "so far / up to now",
          "turkish": "şu ana kadar",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "No significant anomalies have been observed so far.",
          "exampleTr": "Şu ana kadar hiçbir belirgin anormallik gözlemlenmedi.",
          "pitfall": "Past tense ile değil Present Perfect (have/has V3) ile kullanılır."
        },
        {
          "marker": "in recent decades",
          "turkish": "son on yıllarda",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Global temperatures have risen markedly in recent decades.",
          "exampleTr": "Küresel sıcaklıklar son on yıllarda belirgin şekilde arttı.",
          "pitfall": "'In recent...' kalıbı günümüze uzanan süreci anlattığından Present Perfect ister."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that inversion (devrik cümleler) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, inversion (devrik cümleler) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Inversion (Devrik Cümleler) [B2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Inversion (Devrik Cümleler) - B2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Inversion (Devrik Cümleler) konusunda B2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers inversion without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered inversion after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Inversion (Devrik Cümleler) - B2] Aşağıdaki cümlelerin hangisinde Inversion (Devrik Cümleler) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B2 criteria.",
          "B) The team has neglected the vital B2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Inversion (Devrik Cümleler) konusu B2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C1",
      "title": "Inversion (Devrik Cümleler) — C1: Nüanslar, İstisnalar ve Devrik Yapılar",
      "definition": "Inversion (Devrik Cümleler) konusunun C1 düzeyindeki tanımı: İnce anlam farkları, resmî/akademik üslup, istisnai kurallar ve karmaşık yapılar.",
      "usage": "Inversion (Devrik Cümleler) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Negative Adverb + Aux + Subject + Verb",
      "negativeStructure": "Devrik yapı zaten olumsuzluk içerir (Under no circumstances + should + S + V1)",
      "questionStructure": "Devrik yapı soru dizilimiyle aynıdır: Aux + S + V?",
      "formula": "Negative Adverbial (Never/Hardly/Not only) + Auxiliary Verb + Subject + Main Verb",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "scarcely ... when",
          "turkish": "-er -mez",
          "position": "Devrik cümle başında",
          "exampleEn": "Scarcely had the treaty been signed when border clashes resumed.",
          "exampleTr": "Antlaşma imzalanır imzalanmaz sınır çatışmaları yeniden başladı.",
          "pitfall": "Scarcely had + S + V3 ... WHEN dizilimi bozulmamalıdır (THAN yazılmaz)."
        },
        {
          "marker": "hitherto / heretofore",
          "turkish": "şimdiye değin / o zamana kadar",
          "position": "Zarf konumunda",
          "exampleEn": "The expedition revealed biological species hitherto unknown to science.",
          "exampleTr": "Keşif heyeti şimdiye kadar bilimin bilmediği biyolojik türleri ortaya çıkardı.",
          "pitfall": "Resmî/akademik metinlerde geçmişe dönük sınırlayıcı zarf olarak kullanılır."
        },
        {
          "marker": "no sooner ... than",
          "turkish": "tam ... olmuştu ki",
          "position": "Devrik cümle başında",
          "exampleEn": "No sooner had the keynote concluded than reporters swarmed the podium.",
          "exampleTr": "Açılış konuşması biter bitmez muhabirler kürsüye üşüştü.",
          "pitfall": "No sooner daima 'than' ile eşleşir; 'when' yazmak klasik çeldiricidir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that inversion (devrik cümleler) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, inversion (devrik cümleler) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Inversion (Devrik Cümleler) [C1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Inversion (Devrik Cümleler) - C1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Inversion (Devrik Cümleler) konusunda C1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers inversion without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered inversion after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Inversion (Devrik Cümleler) - C1] Aşağıdaki cümlelerin hangisinde Inversion (Devrik Cümleler) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C1 criteria.",
          "B) The team has neglected the vital C1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Inversion (Devrik Cümleler) konusu C1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C2",
      "title": "Inversion (Devrik Cümleler) — C2: Söylem, Stil ve Derin Anlam Analizi",
      "definition": "Inversion (Devrik Cümleler) konusunun C2 düzeyindeki tanımı: Üst düzey akademik söylem, nüans ustalıkları ve editörlük düzeyinde dil hakimiyeti.",
      "usage": "Inversion (Devrik Cümleler) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Negative Adverb + Aux + Subject + Verb",
      "negativeStructure": "Devrik yapı zaten olumsuzluk içerir (Under no circumstances + should + S + V1)",
      "questionStructure": "Devrik yapı soru dizilimiyle aynıdır: Aux + S + V?",
      "formula": "Negative Adverbial (Never/Hardly/Not only) + Auxiliary Verb + Subject + Main Verb",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "from time immemorial",
          "turkish": "ezelden beri / çok eski zamanlardan beri",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Nomadic tribes have traversed these arid steppes from time immemorial.",
          "exampleTr": "Göçebe kabileler ezelden beri bu kurak bozkırları aşagelmiştir.",
          "pitfall": "Tarihsel derinlik ve süreklilik anlatır; genellikle Present Perfect ile pekişir."
        },
        {
          "marker": "in the twinkling of an eye",
          "turkish": "göz açıp kapayıncaya kadar",
          "position": "Cümle sonunda",
          "exampleEn": "Decades of architectural heritage were leveled in the twinkling of an eye by the quake.",
          "exampleTr": "Onlarca yıllık mimari miras depremle göz açıp kapayıncaya kadar yerle bir oldu.",
          "pitfall": "Ani ve radikal dönüşümleri niteleyen edebi/akademik üslup öğesidir."
        },
        {
          "marker": "at the eleventh hour",
          "turkish": "son anda / son dakikada",
          "position": "Cümle sonunda",
          "exampleEn": "The diplomatic accord was salvaged at the eleventh hour by bilateral concessions.",
          "exampleTr": "Diplomatik mutabakat son dakikada karşılıklı tavizlerle kurtarıldı.",
          "pitfall": "Gecikmiş ama zamanında yetişen kritik müdahaleleri betimler."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that inversion (devrik cümleler) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, inversion (devrik cümleler) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Inversion (Devrik Cümleler) [C2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Inversion (Devrik Cümleler) - C2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Inversion (Devrik Cümleler) konusunda C2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers inversion without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered inversion after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Inversion (Devrik Cümleler) - C2] Aşağıdaki cümlelerin hangisinde Inversion (Devrik Cümleler) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C2 criteria.",
          "B) The team has neglected the vital C2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Inversion (Devrik Cümleler) konusu C2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "YDS",
      "title": "Inversion (Devrik Cümleler) — YDS: Sınav Stratejisi, Zaman Yönetimi ve Şık Eleme",
      "definition": "Inversion (Devrik Cümleler) konusunun YDS düzeyindeki tanımı: Soru kökündeki gizli ipuçları, çeldirici eleme algoritmaları ve sınav netini maksimize etme.",
      "usage": "Inversion (Devrik Cümleler) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "YDS seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Negative Adverb + Aux + Subject + Verb",
      "negativeStructure": "Devrik yapı zaten olumsuzluk içerir (Under no circumstances + should + S + V1)",
      "questionStructure": "Devrik yapı soru dizilimiyle aynıdır: Aux + S + V?",
      "formula": "Negative Adverbial (Never/Hardly/Not only) + Auxiliary Verb + Subject + Main Verb",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since + Past Time / V2",
          "turkish": "-den beri (YDS Şifresi)",
          "position": "Yan cümle başı / Ana cümle Present Perfect",
          "exampleEn": "Renewable energy adoption has accelerated since the landmark 2015 Paris agreement.",
          "exampleTr": "Yenilenebilir enerjiye geçiş, tarihi 2015 Paris Anlaşması'ndan beri hızlandı.",
          "pitfall": "Soru kökünde 'since + V2' görürsen ana cümlede mutlaka 'have/has V3' ara!"
        },
        {
          "marker": "by + future time (e.g. by 2035)",
          "turkish": "-e kadar (Gelecek Şifresi)",
          "position": "Zaman zarfı konumu",
          "exampleEn": "By 2035, the majority of industrial vehicles will have transitioned to hydrogen fuel.",
          "exampleTr": "2035 yılına kadar sanayi araçlarının çoğunluğu hidrojen yakıtına geçmiş olacaktır.",
          "pitfall": "'By + Gelecek Zaman' daima Future Perfect (will have V3) gerektirir."
        },
        {
          "marker": "over / in / during + the last / past + time",
          "turkish": "son ... boyunca (Banko Soru)",
          "position": "Cümle başı veya sonu",
          "exampleEn": "Over the past five decades, computational capacity has expanded exponentially.",
          "exampleTr": "Son elli yıl boyunca bilişim kapasitesi katlanarak büyüdü.",
          "pitfall": "'Over/In the past...' kalıbı YDS'de %99 Present Perfect (have/has V3) ister!"
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that inversion (devrik cümleler) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, inversion (devrik cümleler) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Inversion (Devrik Cümleler) [YDS]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Inversion (Devrik Cümleler) - YDS]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "YDS Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Inversion (Devrik Cümleler) konusunda YDS düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers inversion without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered inversion after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Inversion (Devrik Cümleler) - YDS] Aşağıdaki cümlelerin hangisinde Inversion (Devrik Cümleler) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard YDS criteria.",
          "B) The team has neglected the vital YDS variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the YDS protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary YDS models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Inversion (Devrik Cümleler) konusu YDS seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    }
  ],
  "adverbial-clauses": [
    {
      "level": "A1",
      "title": "Adverbial Clauses (Zarf Cümlecikleri) — A1: Temel Tanıma ve Açık İpuçları",
      "definition": "Adverbial Clauses (Zarf Cümlecikleri) konusunun A1 düzeyindeki tanımı: Temel özne-fiil uyumu, basit cümle kuruluşu ve en yalın kurallar.",
      "usage": "Adverbial Clauses (Zarf Cümlecikleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + adverbial-clauses Temel Yapı + Nesne",
      "negativeStructure": "Özne + adverbial-clauses Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "adverbial-clauses Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[ADVERBIAL-CLAUSES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "always",
          "turkish": "her zaman",
          "position": "Özne ile fiil arasında",
          "exampleEn": "She always arrives at school on time.",
          "exampleTr": "Okula her zaman vaktinde gelir.",
          "pitfall": "Fiilden sonra yazılmamalıdır ('She arrives always' yanlıştır)."
        },
        {
          "marker": "every day",
          "turkish": "her gün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "I drink fresh orange juice every day.",
          "exampleTr": "Her gün taze portakal suyu içerim.",
          "pitfall": "Bitişik yazılan 'everyday' sıfattır; zaman zarfı ayrı yazılır ('every day')."
        },
        {
          "marker": "now / at the moment",
          "turkish": "şu anda / şimdi",
          "position": "Cümle sonunda",
          "exampleEn": "The children are playing in the garden right now.",
          "exampleTr": "Çocuklar şu anda bahçede oynuyorlar.",
          "pitfall": "Geniş zaman ile değil şimdiki zamanla (am/is/are + Ving) kullanılır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that adverbial clauses (zarf cümlecikleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, adverbial clauses (zarf cümlecikleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Adverbial Clauses (Zarf Cümlecikleri) [A1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Adverbial Clauses (Zarf Cümlecikleri) - A1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Adverbial Clauses (Zarf Cümlecikleri) konusunda A1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers adverbial clauses without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered adverbial clauses after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Adverbial Clauses (Zarf Cümlecikleri) - A1] Aşağıdaki cümlelerin hangisinde Adverbial Clauses (Zarf Cümlecikleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A1 criteria.",
          "B) The team has neglected the vital A1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Adverbial Clauses (Zarf Cümlecikleri) konusu A1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "A2",
      "title": "Adverbial Clauses (Zarf Cümlecikleri) — A2: Kombinasyon ve Temel Bağlaçlar",
      "definition": "Adverbial Clauses (Zarf Cümlecikleri) konusunun A2 düzeyindeki tanımı: Sıklık zarfları, basit bağlaçlar, kısa cevaplar ve temel zaman karşılaştırmaları.",
      "usage": "Adverbial Clauses (Zarf Cümlecikleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + adverbial-clauses Temel Yapı + Nesne",
      "negativeStructure": "Özne + adverbial-clauses Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "adverbial-clauses Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[ADVERBIAL-CLAUSES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "yesterday",
          "turkish": "dün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "The committee met yesterday to approve the budget.",
          "exampleTr": "Komite bütçeyi onaylamak için dün toplandı.",
          "pitfall": "Present Perfect ile kullanılmaz; daima Simple Past (V2) gerektirir."
        },
        {
          "marker": "two days ago",
          "turkish": "iki gün önce",
          "position": "Cümle sonunda",
          "exampleEn": "The package arrived two days ago.",
          "exampleTr": "Paket iki gün önce ulaştı.",
          "pitfall": "'before' ile karıştırılmamalıdır; 'ago' şimdiki andan geçmişe sayar ve V2 ister."
        },
        {
          "marker": "usually / often",
          "turkish": "genellikle / sık sık",
          "position": "Özne ile fiil arasında",
          "exampleEn": "He usually takes the subway to avoid traffic.",
          "exampleTr": "Trafikten kaçınmak için genellikle metroyu kullanır.",
          "pitfall": "He/she/it öznelerinde fiilin -s takısını unutturmamalıdır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that adverbial clauses (zarf cümlecikleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, adverbial clauses (zarf cümlecikleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Adverbial Clauses (Zarf Cümlecikleri) [A2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Adverbial Clauses (Zarf Cümlecikleri) - A2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Adverbial Clauses (Zarf Cümlecikleri) konusunda A2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers adverbial clauses without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered adverbial clauses after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Adverbial Clauses (Zarf Cümlecikleri) - A2] Aşağıdaki cümlelerin hangisinde Adverbial Clauses (Zarf Cümlecikleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A2 criteria.",
          "B) The team has neglected the vital A2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Adverbial Clauses (Zarf Cümlecikleri) konusu A2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B1",
      "title": "Adverbial Clauses (Zarf Cümlecikleri) — B1: Cümle İçi Bağlam ve Süreç Zamanları",
      "definition": "Adverbial Clauses (Zarf Cümlecikleri) konusunun B1 düzeyindeki tanımı: Bağlaçlı cümleler, zaman uyumu, orta seviye kalıplar ve süreç zamanları.",
      "usage": "Adverbial Clauses (Zarf Cümlecikleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + adverbial-clauses Temel Yapı + Nesne",
      "negativeStructure": "Özne + adverbial-clauses Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "adverbial-clauses Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[ADVERBIAL-CLAUSES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since 2015 / since then",
          "turkish": "-den beri",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "She has worked at the research center since 2015.",
          "exampleTr": "2015'ten beri araştırma merkezinde çalışıyor.",
          "pitfall": "Since'ten sonra geçmiş zaman noktası (V2), ana cümlede Present Perfect (have/has V3) gelir."
        },
        {
          "marker": "for five years",
          "turkish": "beş yıldır / beş sene boyunca",
          "position": "Cümle sonunda",
          "exampleEn": "They have lived in London for five years.",
          "exampleTr": "Beş yıldır Londra'da yaşıyorlar.",
          "pitfall": "Süreç bitmişse Simple Past ('lived for 5 years'), hala sürüyorsa Present Perfect ('have lived') kullanılır."
        },
        {
          "marker": "while / as",
          "turkish": "-iken",
          "position": "Yan cümlenin başında",
          "exampleEn": "While the scientist was calibrating the sensors, the alarm sounded.",
          "exampleTr": "Bilim insanı sensörleri kalibre ederken alarm çaldı.",
          "pitfall": "While genellikle Past Continuous (was/were Ving) ile süreç bildirir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that adverbial clauses (zarf cümlecikleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, adverbial clauses (zarf cümlecikleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Adverbial Clauses (Zarf Cümlecikleri) [B1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Adverbial Clauses (Zarf Cümlecikleri) - B1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Adverbial Clauses (Zarf Cümlecikleri) konusunda B1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers adverbial clauses without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered adverbial clauses after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Adverbial Clauses (Zarf Cümlecikleri) - B1] Aşağıdaki cümlelerin hangisinde Adverbial Clauses (Zarf Cümlecikleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B1 criteria.",
          "B) The team has neglected the vital B1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Adverbial Clauses (Zarf Cümlecikleri) konusu B1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B2",
      "title": "Adverbial Clauses (Zarf Cümlecikleri) — B2: Akademik Bağlam ve İleri Yapılar",
      "definition": "Adverbial Clauses (Zarf Cümlecikleri) konusunun B2 düzeyindeki tanımı: Karmaşık yan cümleler, perfect/passive ilişkileri ve YDS tipi güçlü çeldiriciler.",
      "usage": "Adverbial Clauses (Zarf Cümlecikleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + adverbial-clauses Temel Yapı + Nesne",
      "negativeStructure": "Özne + adverbial-clauses Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "adverbial-clauses Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[ADVERBIAL-CLAUSES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "by the time",
          "turkish": "-e kadar / -dığı zamana kadar",
          "position": "Yan cümlenin başında",
          "exampleEn": "By the time the firefighters arrived, the blaze had been extinguished.",
          "exampleTr": "İtfaiyeciler gelene kadar yangın söndürülmüştü.",
          "pitfall": "By the time + V2 -> had V3; By the time + V1 -> will have V3 zaman kuralına uymalıdır."
        },
        {
          "marker": "so far / up to now",
          "turkish": "şu ana kadar",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "No significant anomalies have been observed so far.",
          "exampleTr": "Şu ana kadar hiçbir belirgin anormallik gözlemlenmedi.",
          "pitfall": "Past tense ile değil Present Perfect (have/has V3) ile kullanılır."
        },
        {
          "marker": "in recent decades",
          "turkish": "son on yıllarda",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Global temperatures have risen markedly in recent decades.",
          "exampleTr": "Küresel sıcaklıklar son on yıllarda belirgin şekilde arttı.",
          "pitfall": "'In recent...' kalıbı günümüze uzanan süreci anlattığından Present Perfect ister."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that adverbial clauses (zarf cümlecikleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, adverbial clauses (zarf cümlecikleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Adverbial Clauses (Zarf Cümlecikleri) [B2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Adverbial Clauses (Zarf Cümlecikleri) - B2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Adverbial Clauses (Zarf Cümlecikleri) konusunda B2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers adverbial clauses without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered adverbial clauses after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Adverbial Clauses (Zarf Cümlecikleri) - B2] Aşağıdaki cümlelerin hangisinde Adverbial Clauses (Zarf Cümlecikleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B2 criteria.",
          "B) The team has neglected the vital B2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Adverbial Clauses (Zarf Cümlecikleri) konusu B2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C1",
      "title": "Adverbial Clauses (Zarf Cümlecikleri) — C1: Nüanslar, İstisnalar ve Devrik Yapılar",
      "definition": "Adverbial Clauses (Zarf Cümlecikleri) konusunun C1 düzeyindeki tanımı: İnce anlam farkları, resmî/akademik üslup, istisnai kurallar ve karmaşık yapılar.",
      "usage": "Adverbial Clauses (Zarf Cümlecikleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + adverbial-clauses Temel Yapı + Nesne",
      "negativeStructure": "Özne + adverbial-clauses Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "adverbial-clauses Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[ADVERBIAL-CLAUSES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "scarcely ... when",
          "turkish": "-er -mez",
          "position": "Devrik cümle başında",
          "exampleEn": "Scarcely had the treaty been signed when border clashes resumed.",
          "exampleTr": "Antlaşma imzalanır imzalanmaz sınır çatışmaları yeniden başladı.",
          "pitfall": "Scarcely had + S + V3 ... WHEN dizilimi bozulmamalıdır (THAN yazılmaz)."
        },
        {
          "marker": "hitherto / heretofore",
          "turkish": "şimdiye değin / o zamana kadar",
          "position": "Zarf konumunda",
          "exampleEn": "The expedition revealed biological species hitherto unknown to science.",
          "exampleTr": "Keşif heyeti şimdiye kadar bilimin bilmediği biyolojik türleri ortaya çıkardı.",
          "pitfall": "Resmî/akademik metinlerde geçmişe dönük sınırlayıcı zarf olarak kullanılır."
        },
        {
          "marker": "no sooner ... than",
          "turkish": "tam ... olmuştu ki",
          "position": "Devrik cümle başında",
          "exampleEn": "No sooner had the keynote concluded than reporters swarmed the podium.",
          "exampleTr": "Açılış konuşması biter bitmez muhabirler kürsüye üşüştü.",
          "pitfall": "No sooner daima 'than' ile eşleşir; 'when' yazmak klasik çeldiricidir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that adverbial clauses (zarf cümlecikleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, adverbial clauses (zarf cümlecikleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Adverbial Clauses (Zarf Cümlecikleri) [C1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Adverbial Clauses (Zarf Cümlecikleri) - C1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Adverbial Clauses (Zarf Cümlecikleri) konusunda C1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers adverbial clauses without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered adverbial clauses after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Adverbial Clauses (Zarf Cümlecikleri) - C1] Aşağıdaki cümlelerin hangisinde Adverbial Clauses (Zarf Cümlecikleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C1 criteria.",
          "B) The team has neglected the vital C1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Adverbial Clauses (Zarf Cümlecikleri) konusu C1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C2",
      "title": "Adverbial Clauses (Zarf Cümlecikleri) — C2: Söylem, Stil ve Derin Anlam Analizi",
      "definition": "Adverbial Clauses (Zarf Cümlecikleri) konusunun C2 düzeyindeki tanımı: Üst düzey akademik söylem, nüans ustalıkları ve editörlük düzeyinde dil hakimiyeti.",
      "usage": "Adverbial Clauses (Zarf Cümlecikleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + adverbial-clauses Temel Yapı + Nesne",
      "negativeStructure": "Özne + adverbial-clauses Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "adverbial-clauses Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[ADVERBIAL-CLAUSES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "from time immemorial",
          "turkish": "ezelden beri / çok eski zamanlardan beri",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Nomadic tribes have traversed these arid steppes from time immemorial.",
          "exampleTr": "Göçebe kabileler ezelden beri bu kurak bozkırları aşagelmiştir.",
          "pitfall": "Tarihsel derinlik ve süreklilik anlatır; genellikle Present Perfect ile pekişir."
        },
        {
          "marker": "in the twinkling of an eye",
          "turkish": "göz açıp kapayıncaya kadar",
          "position": "Cümle sonunda",
          "exampleEn": "Decades of architectural heritage were leveled in the twinkling of an eye by the quake.",
          "exampleTr": "Onlarca yıllık mimari miras depremle göz açıp kapayıncaya kadar yerle bir oldu.",
          "pitfall": "Ani ve radikal dönüşümleri niteleyen edebi/akademik üslup öğesidir."
        },
        {
          "marker": "at the eleventh hour",
          "turkish": "son anda / son dakikada",
          "position": "Cümle sonunda",
          "exampleEn": "The diplomatic accord was salvaged at the eleventh hour by bilateral concessions.",
          "exampleTr": "Diplomatik mutabakat son dakikada karşılıklı tavizlerle kurtarıldı.",
          "pitfall": "Gecikmiş ama zamanında yetişen kritik müdahaleleri betimler."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that adverbial clauses (zarf cümlecikleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, adverbial clauses (zarf cümlecikleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Adverbial Clauses (Zarf Cümlecikleri) [C2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Adverbial Clauses (Zarf Cümlecikleri) - C2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Adverbial Clauses (Zarf Cümlecikleri) konusunda C2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers adverbial clauses without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered adverbial clauses after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Adverbial Clauses (Zarf Cümlecikleri) - C2] Aşağıdaki cümlelerin hangisinde Adverbial Clauses (Zarf Cümlecikleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C2 criteria.",
          "B) The team has neglected the vital C2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Adverbial Clauses (Zarf Cümlecikleri) konusu C2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "YDS",
      "title": "Adverbial Clauses (Zarf Cümlecikleri) — YDS: Sınav Stratejisi, Zaman Yönetimi ve Şık Eleme",
      "definition": "Adverbial Clauses (Zarf Cümlecikleri) konusunun YDS düzeyindeki tanımı: Soru kökündeki gizli ipuçları, çeldirici eleme algoritmaları ve sınav netini maksimize etme.",
      "usage": "Adverbial Clauses (Zarf Cümlecikleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "YDS seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + adverbial-clauses Temel Yapı + Nesne",
      "negativeStructure": "Özne + adverbial-clauses Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "adverbial-clauses Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[ADVERBIAL-CLAUSES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since + Past Time / V2",
          "turkish": "-den beri (YDS Şifresi)",
          "position": "Yan cümle başı / Ana cümle Present Perfect",
          "exampleEn": "Renewable energy adoption has accelerated since the landmark 2015 Paris agreement.",
          "exampleTr": "Yenilenebilir enerjiye geçiş, tarihi 2015 Paris Anlaşması'ndan beri hızlandı.",
          "pitfall": "Soru kökünde 'since + V2' görürsen ana cümlede mutlaka 'have/has V3' ara!"
        },
        {
          "marker": "by + future time (e.g. by 2035)",
          "turkish": "-e kadar (Gelecek Şifresi)",
          "position": "Zaman zarfı konumu",
          "exampleEn": "By 2035, the majority of industrial vehicles will have transitioned to hydrogen fuel.",
          "exampleTr": "2035 yılına kadar sanayi araçlarının çoğunluğu hidrojen yakıtına geçmiş olacaktır.",
          "pitfall": "'By + Gelecek Zaman' daima Future Perfect (will have V3) gerektirir."
        },
        {
          "marker": "over / in / during + the last / past + time",
          "turkish": "son ... boyunca (Banko Soru)",
          "position": "Cümle başı veya sonu",
          "exampleEn": "Over the past five decades, computational capacity has expanded exponentially.",
          "exampleTr": "Son elli yıl boyunca bilişim kapasitesi katlanarak büyüdü.",
          "pitfall": "'Over/In the past...' kalıbı YDS'de %99 Present Perfect (have/has V3) ister!"
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that adverbial clauses (zarf cümlecikleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, adverbial clauses (zarf cümlecikleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Adverbial Clauses (Zarf Cümlecikleri) [YDS]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Adverbial Clauses (Zarf Cümlecikleri) - YDS]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "YDS Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Adverbial Clauses (Zarf Cümlecikleri) konusunda YDS düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers adverbial clauses without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered adverbial clauses after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Adverbial Clauses (Zarf Cümlecikleri) - YDS] Aşağıdaki cümlelerin hangisinde Adverbial Clauses (Zarf Cümlecikleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard YDS criteria.",
          "B) The team has neglected the vital YDS variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the YDS protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary YDS models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Adverbial Clauses (Zarf Cümlecikleri) konusu YDS seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    }
  ],
  "perfect-modals": [
    {
      "level": "A1",
      "title": "Perfect Modals & Geçmiş Çıkarımlar — A1: Temel Tanıma ve Açık İpuçları",
      "definition": "Perfect Modals & Geçmiş Çıkarımlar konusunun A1 düzeyindeki tanımı: Temel özne-fiil uyumu, basit cümle kuruluşu ve en yalın kurallar.",
      "usage": "Perfect Modals & Geçmiş Çıkarımlar bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Subject + modal (have) + V1/V3",
      "negativeStructure": "Subject + modal not (have) + V1/V3",
      "questionStructure": "Modal + Subject + (have) + V1/V3?",
      "formula": "Modal: S + modal + V1 | Perfect Modal: S + modal + have + V3",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "always",
          "turkish": "her zaman",
          "position": "Özne ile fiil arasında",
          "exampleEn": "She always arrives at school on time.",
          "exampleTr": "Okula her zaman vaktinde gelir.",
          "pitfall": "Fiilden sonra yazılmamalıdır ('She arrives always' yanlıştır)."
        },
        {
          "marker": "every day",
          "turkish": "her gün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "I drink fresh orange juice every day.",
          "exampleTr": "Her gün taze portakal suyu içerim.",
          "pitfall": "Bitişik yazılan 'everyday' sıfattır; zaman zarfı ayrı yazılır ('every day')."
        },
        {
          "marker": "now / at the moment",
          "turkish": "şu anda / şimdi",
          "position": "Cümle sonunda",
          "exampleEn": "The children are playing in the garden right now.",
          "exampleTr": "Çocuklar şu anda bahçede oynuyorlar.",
          "pitfall": "Geniş zaman ile değil şimdiki zamanla (am/is/are + Ving) kullanılır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that perfect modals & geçmiş çıkarımlar plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, perfect modals & geçmiş çıkarımlar konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Perfect Modals & Geçmiş Çıkarımlar [A1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Perfect Modals & Geçmiş Çıkarımlar - A1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Perfect Modals & Geçmiş Çıkarımlar konusunda A1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers perfect modals without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered perfect modals after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Perfect Modals & Geçmiş Çıkarımlar - A1] Aşağıdaki cümlelerin hangisinde Perfect Modals & Geçmiş Çıkarımlar kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A1 criteria.",
          "B) The team has neglected the vital A1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Perfect Modals & Geçmiş Çıkarımlar konusu A1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "A2",
      "title": "Perfect Modals & Geçmiş Çıkarımlar — A2: Kombinasyon ve Temel Bağlaçlar",
      "definition": "Perfect Modals & Geçmiş Çıkarımlar konusunun A2 düzeyindeki tanımı: Sıklık zarfları, basit bağlaçlar, kısa cevaplar ve temel zaman karşılaştırmaları.",
      "usage": "Perfect Modals & Geçmiş Çıkarımlar bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Subject + modal (have) + V1/V3",
      "negativeStructure": "Subject + modal not (have) + V1/V3",
      "questionStructure": "Modal + Subject + (have) + V1/V3?",
      "formula": "Modal: S + modal + V1 | Perfect Modal: S + modal + have + V3",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "yesterday",
          "turkish": "dün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "The committee met yesterday to approve the budget.",
          "exampleTr": "Komite bütçeyi onaylamak için dün toplandı.",
          "pitfall": "Present Perfect ile kullanılmaz; daima Simple Past (V2) gerektirir."
        },
        {
          "marker": "two days ago",
          "turkish": "iki gün önce",
          "position": "Cümle sonunda",
          "exampleEn": "The package arrived two days ago.",
          "exampleTr": "Paket iki gün önce ulaştı.",
          "pitfall": "'before' ile karıştırılmamalıdır; 'ago' şimdiki andan geçmişe sayar ve V2 ister."
        },
        {
          "marker": "usually / often",
          "turkish": "genellikle / sık sık",
          "position": "Özne ile fiil arasında",
          "exampleEn": "He usually takes the subway to avoid traffic.",
          "exampleTr": "Trafikten kaçınmak için genellikle metroyu kullanır.",
          "pitfall": "He/she/it öznelerinde fiilin -s takısını unutturmamalıdır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that perfect modals & geçmiş çıkarımlar plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, perfect modals & geçmiş çıkarımlar konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Perfect Modals & Geçmiş Çıkarımlar [A2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Perfect Modals & Geçmiş Çıkarımlar - A2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Perfect Modals & Geçmiş Çıkarımlar konusunda A2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers perfect modals without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered perfect modals after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Perfect Modals & Geçmiş Çıkarımlar - A2] Aşağıdaki cümlelerin hangisinde Perfect Modals & Geçmiş Çıkarımlar kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A2 criteria.",
          "B) The team has neglected the vital A2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Perfect Modals & Geçmiş Çıkarımlar konusu A2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B1",
      "title": "Perfect Modals & Geçmiş Çıkarımlar — B1: Cümle İçi Bağlam ve Süreç Zamanları",
      "definition": "Perfect Modals & Geçmiş Çıkarımlar konusunun B1 düzeyindeki tanımı: Bağlaçlı cümleler, zaman uyumu, orta seviye kalıplar ve süreç zamanları.",
      "usage": "Perfect Modals & Geçmiş Çıkarımlar bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Subject + modal (have) + V1/V3",
      "negativeStructure": "Subject + modal not (have) + V1/V3",
      "questionStructure": "Modal + Subject + (have) + V1/V3?",
      "formula": "Modal: S + modal + V1 | Perfect Modal: S + modal + have + V3",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since 2015 / since then",
          "turkish": "-den beri",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "She has worked at the research center since 2015.",
          "exampleTr": "2015'ten beri araştırma merkezinde çalışıyor.",
          "pitfall": "Since'ten sonra geçmiş zaman noktası (V2), ana cümlede Present Perfect (have/has V3) gelir."
        },
        {
          "marker": "for five years",
          "turkish": "beş yıldır / beş sene boyunca",
          "position": "Cümle sonunda",
          "exampleEn": "They have lived in London for five years.",
          "exampleTr": "Beş yıldır Londra'da yaşıyorlar.",
          "pitfall": "Süreç bitmişse Simple Past ('lived for 5 years'), hala sürüyorsa Present Perfect ('have lived') kullanılır."
        },
        {
          "marker": "while / as",
          "turkish": "-iken",
          "position": "Yan cümlenin başında",
          "exampleEn": "While the scientist was calibrating the sensors, the alarm sounded.",
          "exampleTr": "Bilim insanı sensörleri kalibre ederken alarm çaldı.",
          "pitfall": "While genellikle Past Continuous (was/were Ving) ile süreç bildirir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that perfect modals & geçmiş çıkarımlar plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, perfect modals & geçmiş çıkarımlar konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Perfect Modals & Geçmiş Çıkarımlar [B1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Perfect Modals & Geçmiş Çıkarımlar - B1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Perfect Modals & Geçmiş Çıkarımlar konusunda B1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers perfect modals without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered perfect modals after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Perfect Modals & Geçmiş Çıkarımlar - B1] Aşağıdaki cümlelerin hangisinde Perfect Modals & Geçmiş Çıkarımlar kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B1 criteria.",
          "B) The team has neglected the vital B1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Perfect Modals & Geçmiş Çıkarımlar konusu B1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B2",
      "title": "Perfect Modals & Geçmiş Çıkarımlar — B2: Akademik Bağlam ve İleri Yapılar",
      "definition": "Perfect Modals & Geçmiş Çıkarımlar konusunun B2 düzeyindeki tanımı: Karmaşık yan cümleler, perfect/passive ilişkileri ve YDS tipi güçlü çeldiriciler.",
      "usage": "Perfect Modals & Geçmiş Çıkarımlar bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Subject + modal (have) + V1/V3",
      "negativeStructure": "Subject + modal not (have) + V1/V3",
      "questionStructure": "Modal + Subject + (have) + V1/V3?",
      "formula": "Modal: S + modal + V1 | Perfect Modal: S + modal + have + V3",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "by the time",
          "turkish": "-e kadar / -dığı zamana kadar",
          "position": "Yan cümlenin başında",
          "exampleEn": "By the time the firefighters arrived, the blaze had been extinguished.",
          "exampleTr": "İtfaiyeciler gelene kadar yangın söndürülmüştü.",
          "pitfall": "By the time + V2 -> had V3; By the time + V1 -> will have V3 zaman kuralına uymalıdır."
        },
        {
          "marker": "so far / up to now",
          "turkish": "şu ana kadar",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "No significant anomalies have been observed so far.",
          "exampleTr": "Şu ana kadar hiçbir belirgin anormallik gözlemlenmedi.",
          "pitfall": "Past tense ile değil Present Perfect (have/has V3) ile kullanılır."
        },
        {
          "marker": "in recent decades",
          "turkish": "son on yıllarda",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Global temperatures have risen markedly in recent decades.",
          "exampleTr": "Küresel sıcaklıklar son on yıllarda belirgin şekilde arttı.",
          "pitfall": "'In recent...' kalıbı günümüze uzanan süreci anlattığından Present Perfect ister."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that perfect modals & geçmiş çıkarımlar plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, perfect modals & geçmiş çıkarımlar konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Perfect Modals & Geçmiş Çıkarımlar [B2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Perfect Modals & Geçmiş Çıkarımlar - B2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Perfect Modals & Geçmiş Çıkarımlar konusunda B2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers perfect modals without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered perfect modals after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Perfect Modals & Geçmiş Çıkarımlar - B2] Aşağıdaki cümlelerin hangisinde Perfect Modals & Geçmiş Çıkarımlar kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B2 criteria.",
          "B) The team has neglected the vital B2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Perfect Modals & Geçmiş Çıkarımlar konusu B2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C1",
      "title": "Perfect Modals & Geçmiş Çıkarımlar — C1: Nüanslar, İstisnalar ve Devrik Yapılar",
      "definition": "Perfect Modals & Geçmiş Çıkarımlar konusunun C1 düzeyindeki tanımı: İnce anlam farkları, resmî/akademik üslup, istisnai kurallar ve karmaşık yapılar.",
      "usage": "Perfect Modals & Geçmiş Çıkarımlar bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Subject + modal (have) + V1/V3",
      "negativeStructure": "Subject + modal not (have) + V1/V3",
      "questionStructure": "Modal + Subject + (have) + V1/V3?",
      "formula": "Modal: S + modal + V1 | Perfect Modal: S + modal + have + V3",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "scarcely ... when",
          "turkish": "-er -mez",
          "position": "Devrik cümle başında",
          "exampleEn": "Scarcely had the treaty been signed when border clashes resumed.",
          "exampleTr": "Antlaşma imzalanır imzalanmaz sınır çatışmaları yeniden başladı.",
          "pitfall": "Scarcely had + S + V3 ... WHEN dizilimi bozulmamalıdır (THAN yazılmaz)."
        },
        {
          "marker": "hitherto / heretofore",
          "turkish": "şimdiye değin / o zamana kadar",
          "position": "Zarf konumunda",
          "exampleEn": "The expedition revealed biological species hitherto unknown to science.",
          "exampleTr": "Keşif heyeti şimdiye kadar bilimin bilmediği biyolojik türleri ortaya çıkardı.",
          "pitfall": "Resmî/akademik metinlerde geçmişe dönük sınırlayıcı zarf olarak kullanılır."
        },
        {
          "marker": "no sooner ... than",
          "turkish": "tam ... olmuştu ki",
          "position": "Devrik cümle başında",
          "exampleEn": "No sooner had the keynote concluded than reporters swarmed the podium.",
          "exampleTr": "Açılış konuşması biter bitmez muhabirler kürsüye üşüştü.",
          "pitfall": "No sooner daima 'than' ile eşleşir; 'when' yazmak klasik çeldiricidir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that perfect modals & geçmiş çıkarımlar plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, perfect modals & geçmiş çıkarımlar konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Perfect Modals & Geçmiş Çıkarımlar [C1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Perfect Modals & Geçmiş Çıkarımlar - C1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Perfect Modals & Geçmiş Çıkarımlar konusunda C1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers perfect modals without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered perfect modals after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Perfect Modals & Geçmiş Çıkarımlar - C1] Aşağıdaki cümlelerin hangisinde Perfect Modals & Geçmiş Çıkarımlar kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C1 criteria.",
          "B) The team has neglected the vital C1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Perfect Modals & Geçmiş Çıkarımlar konusu C1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C2",
      "title": "Perfect Modals & Geçmiş Çıkarımlar — C2: Söylem, Stil ve Derin Anlam Analizi",
      "definition": "Perfect Modals & Geçmiş Çıkarımlar konusunun C2 düzeyindeki tanımı: Üst düzey akademik söylem, nüans ustalıkları ve editörlük düzeyinde dil hakimiyeti.",
      "usage": "Perfect Modals & Geçmiş Çıkarımlar bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Subject + modal (have) + V1/V3",
      "negativeStructure": "Subject + modal not (have) + V1/V3",
      "questionStructure": "Modal + Subject + (have) + V1/V3?",
      "formula": "Modal: S + modal + V1 | Perfect Modal: S + modal + have + V3",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "from time immemorial",
          "turkish": "ezelden beri / çok eski zamanlardan beri",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Nomadic tribes have traversed these arid steppes from time immemorial.",
          "exampleTr": "Göçebe kabileler ezelden beri bu kurak bozkırları aşagelmiştir.",
          "pitfall": "Tarihsel derinlik ve süreklilik anlatır; genellikle Present Perfect ile pekişir."
        },
        {
          "marker": "in the twinkling of an eye",
          "turkish": "göz açıp kapayıncaya kadar",
          "position": "Cümle sonunda",
          "exampleEn": "Decades of architectural heritage were leveled in the twinkling of an eye by the quake.",
          "exampleTr": "Onlarca yıllık mimari miras depremle göz açıp kapayıncaya kadar yerle bir oldu.",
          "pitfall": "Ani ve radikal dönüşümleri niteleyen edebi/akademik üslup öğesidir."
        },
        {
          "marker": "at the eleventh hour",
          "turkish": "son anda / son dakikada",
          "position": "Cümle sonunda",
          "exampleEn": "The diplomatic accord was salvaged at the eleventh hour by bilateral concessions.",
          "exampleTr": "Diplomatik mutabakat son dakikada karşılıklı tavizlerle kurtarıldı.",
          "pitfall": "Gecikmiş ama zamanında yetişen kritik müdahaleleri betimler."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that perfect modals & geçmiş çıkarımlar plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, perfect modals & geçmiş çıkarımlar konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Perfect Modals & Geçmiş Çıkarımlar [C2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Perfect Modals & Geçmiş Çıkarımlar - C2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Perfect Modals & Geçmiş Çıkarımlar konusunda C2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers perfect modals without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered perfect modals after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Perfect Modals & Geçmiş Çıkarımlar - C2] Aşağıdaki cümlelerin hangisinde Perfect Modals & Geçmiş Çıkarımlar kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C2 criteria.",
          "B) The team has neglected the vital C2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Perfect Modals & Geçmiş Çıkarımlar konusu C2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "YDS",
      "title": "Perfect Modals & Geçmiş Çıkarımlar — YDS: Sınav Stratejisi, Zaman Yönetimi ve Şık Eleme",
      "definition": "Perfect Modals & Geçmiş Çıkarımlar konusunun YDS düzeyindeki tanımı: Soru kökündeki gizli ipuçları, çeldirici eleme algoritmaları ve sınav netini maksimize etme.",
      "usage": "Perfect Modals & Geçmiş Çıkarımlar bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "YDS seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Subject + modal (have) + V1/V3",
      "negativeStructure": "Subject + modal not (have) + V1/V3",
      "questionStructure": "Modal + Subject + (have) + V1/V3?",
      "formula": "Modal: S + modal + V1 | Perfect Modal: S + modal + have + V3",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since + Past Time / V2",
          "turkish": "-den beri (YDS Şifresi)",
          "position": "Yan cümle başı / Ana cümle Present Perfect",
          "exampleEn": "Renewable energy adoption has accelerated since the landmark 2015 Paris agreement.",
          "exampleTr": "Yenilenebilir enerjiye geçiş, tarihi 2015 Paris Anlaşması'ndan beri hızlandı.",
          "pitfall": "Soru kökünde 'since + V2' görürsen ana cümlede mutlaka 'have/has V3' ara!"
        },
        {
          "marker": "by + future time (e.g. by 2035)",
          "turkish": "-e kadar (Gelecek Şifresi)",
          "position": "Zaman zarfı konumu",
          "exampleEn": "By 2035, the majority of industrial vehicles will have transitioned to hydrogen fuel.",
          "exampleTr": "2035 yılına kadar sanayi araçlarının çoğunluğu hidrojen yakıtına geçmiş olacaktır.",
          "pitfall": "'By + Gelecek Zaman' daima Future Perfect (will have V3) gerektirir."
        },
        {
          "marker": "over / in / during + the last / past + time",
          "turkish": "son ... boyunca (Banko Soru)",
          "position": "Cümle başı veya sonu",
          "exampleEn": "Over the past five decades, computational capacity has expanded exponentially.",
          "exampleTr": "Son elli yıl boyunca bilişim kapasitesi katlanarak büyüdü.",
          "pitfall": "'Over/In the past...' kalıbı YDS'de %99 Present Perfect (have/has V3) ister!"
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that perfect modals & geçmiş çıkarımlar plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, perfect modals & geçmiş çıkarımlar konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Perfect Modals & Geçmiş Çıkarımlar [YDS]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Perfect Modals & Geçmiş Çıkarımlar - YDS]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "YDS Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Perfect Modals & Geçmiş Çıkarımlar konusunda YDS düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers perfect modals without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered perfect modals after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Perfect Modals & Geçmiş Çıkarımlar - YDS] Aşağıdaki cümlelerin hangisinde Perfect Modals & Geçmiş Çıkarımlar kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard YDS criteria.",
          "B) The team has neglected the vital YDS variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the YDS protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary YDS models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Perfect Modals & Geçmiş Çıkarımlar konusu YDS seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    }
  ],
  "articles": [
    {
      "level": "A1",
      "title": "Articles (A, An, The & Sıfır Belirteç) — A1: Temel Tanıma ve Açık İpuçları",
      "definition": "Articles (A, An, The & Sıfır Belirteç) konusunun A1 düzeyindeki tanımı: Temel özne-fiil uyumu, basit cümle kuruluşu ve en yalın kurallar.",
      "usage": "Articles (A, An, The & Sıfır Belirteç) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + articles Temel Yapı + Nesne",
      "negativeStructure": "Özne + articles Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "articles Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[ARTICLES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "always",
          "turkish": "her zaman",
          "position": "Özne ile fiil arasında",
          "exampleEn": "She always arrives at school on time.",
          "exampleTr": "Okula her zaman vaktinde gelir.",
          "pitfall": "Fiilden sonra yazılmamalıdır ('She arrives always' yanlıştır)."
        },
        {
          "marker": "every day",
          "turkish": "her gün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "I drink fresh orange juice every day.",
          "exampleTr": "Her gün taze portakal suyu içerim.",
          "pitfall": "Bitişik yazılan 'everyday' sıfattır; zaman zarfı ayrı yazılır ('every day')."
        },
        {
          "marker": "now / at the moment",
          "turkish": "şu anda / şimdi",
          "position": "Cümle sonunda",
          "exampleEn": "The children are playing in the garden right now.",
          "exampleTr": "Çocuklar şu anda bahçede oynuyorlar.",
          "pitfall": "Geniş zaman ile değil şimdiki zamanla (am/is/are + Ving) kullanılır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that articles (a, an, the & sıfır belirteç) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, articles (a, an, the & sıfır belirteç) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Articles (A, An, The & Sıfır Belirteç) [A1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Articles (A, An, The & Sıfır Belirteç) - A1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Articles (A, An, The & Sıfır Belirteç) konusunda A1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers articles without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered articles after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Articles (A, An, The & Sıfır Belirteç) - A1] Aşağıdaki cümlelerin hangisinde Articles (A, An, The & Sıfır Belirteç) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A1 criteria.",
          "B) The team has neglected the vital A1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Articles (A, An, The & Sıfır Belirteç) konusu A1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "A2",
      "title": "Articles (A, An, The & Sıfır Belirteç) — A2: Kombinasyon ve Temel Bağlaçlar",
      "definition": "Articles (A, An, The & Sıfır Belirteç) konusunun A2 düzeyindeki tanımı: Sıklık zarfları, basit bağlaçlar, kısa cevaplar ve temel zaman karşılaştırmaları.",
      "usage": "Articles (A, An, The & Sıfır Belirteç) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + articles Temel Yapı + Nesne",
      "negativeStructure": "Özne + articles Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "articles Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[ARTICLES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "yesterday",
          "turkish": "dün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "The committee met yesterday to approve the budget.",
          "exampleTr": "Komite bütçeyi onaylamak için dün toplandı.",
          "pitfall": "Present Perfect ile kullanılmaz; daima Simple Past (V2) gerektirir."
        },
        {
          "marker": "two days ago",
          "turkish": "iki gün önce",
          "position": "Cümle sonunda",
          "exampleEn": "The package arrived two days ago.",
          "exampleTr": "Paket iki gün önce ulaştı.",
          "pitfall": "'before' ile karıştırılmamalıdır; 'ago' şimdiki andan geçmişe sayar ve V2 ister."
        },
        {
          "marker": "usually / often",
          "turkish": "genellikle / sık sık",
          "position": "Özne ile fiil arasında",
          "exampleEn": "He usually takes the subway to avoid traffic.",
          "exampleTr": "Trafikten kaçınmak için genellikle metroyu kullanır.",
          "pitfall": "He/she/it öznelerinde fiilin -s takısını unutturmamalıdır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that articles (a, an, the & sıfır belirteç) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, articles (a, an, the & sıfır belirteç) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Articles (A, An, The & Sıfır Belirteç) [A2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Articles (A, An, The & Sıfır Belirteç) - A2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Articles (A, An, The & Sıfır Belirteç) konusunda A2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers articles without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered articles after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Articles (A, An, The & Sıfır Belirteç) - A2] Aşağıdaki cümlelerin hangisinde Articles (A, An, The & Sıfır Belirteç) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A2 criteria.",
          "B) The team has neglected the vital A2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Articles (A, An, The & Sıfır Belirteç) konusu A2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B1",
      "title": "Articles (A, An, The & Sıfır Belirteç) — B1: Cümle İçi Bağlam ve Süreç Zamanları",
      "definition": "Articles (A, An, The & Sıfır Belirteç) konusunun B1 düzeyindeki tanımı: Bağlaçlı cümleler, zaman uyumu, orta seviye kalıplar ve süreç zamanları.",
      "usage": "Articles (A, An, The & Sıfır Belirteç) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + articles Temel Yapı + Nesne",
      "negativeStructure": "Özne + articles Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "articles Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[ARTICLES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since 2015 / since then",
          "turkish": "-den beri",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "She has worked at the research center since 2015.",
          "exampleTr": "2015'ten beri araştırma merkezinde çalışıyor.",
          "pitfall": "Since'ten sonra geçmiş zaman noktası (V2), ana cümlede Present Perfect (have/has V3) gelir."
        },
        {
          "marker": "for five years",
          "turkish": "beş yıldır / beş sene boyunca",
          "position": "Cümle sonunda",
          "exampleEn": "They have lived in London for five years.",
          "exampleTr": "Beş yıldır Londra'da yaşıyorlar.",
          "pitfall": "Süreç bitmişse Simple Past ('lived for 5 years'), hala sürüyorsa Present Perfect ('have lived') kullanılır."
        },
        {
          "marker": "while / as",
          "turkish": "-iken",
          "position": "Yan cümlenin başında",
          "exampleEn": "While the scientist was calibrating the sensors, the alarm sounded.",
          "exampleTr": "Bilim insanı sensörleri kalibre ederken alarm çaldı.",
          "pitfall": "While genellikle Past Continuous (was/were Ving) ile süreç bildirir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that articles (a, an, the & sıfır belirteç) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, articles (a, an, the & sıfır belirteç) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Articles (A, An, The & Sıfır Belirteç) [B1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Articles (A, An, The & Sıfır Belirteç) - B1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Articles (A, An, The & Sıfır Belirteç) konusunda B1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers articles without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered articles after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Articles (A, An, The & Sıfır Belirteç) - B1] Aşağıdaki cümlelerin hangisinde Articles (A, An, The & Sıfır Belirteç) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B1 criteria.",
          "B) The team has neglected the vital B1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Articles (A, An, The & Sıfır Belirteç) konusu B1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B2",
      "title": "Articles (A, An, The & Sıfır Belirteç) — B2: Akademik Bağlam ve İleri Yapılar",
      "definition": "Articles (A, An, The & Sıfır Belirteç) konusunun B2 düzeyindeki tanımı: Karmaşık yan cümleler, perfect/passive ilişkileri ve YDS tipi güçlü çeldiriciler.",
      "usage": "Articles (A, An, The & Sıfır Belirteç) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + articles Temel Yapı + Nesne",
      "negativeStructure": "Özne + articles Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "articles Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[ARTICLES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "by the time",
          "turkish": "-e kadar / -dığı zamana kadar",
          "position": "Yan cümlenin başında",
          "exampleEn": "By the time the firefighters arrived, the blaze had been extinguished.",
          "exampleTr": "İtfaiyeciler gelene kadar yangın söndürülmüştü.",
          "pitfall": "By the time + V2 -> had V3; By the time + V1 -> will have V3 zaman kuralına uymalıdır."
        },
        {
          "marker": "so far / up to now",
          "turkish": "şu ana kadar",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "No significant anomalies have been observed so far.",
          "exampleTr": "Şu ana kadar hiçbir belirgin anormallik gözlemlenmedi.",
          "pitfall": "Past tense ile değil Present Perfect (have/has V3) ile kullanılır."
        },
        {
          "marker": "in recent decades",
          "turkish": "son on yıllarda",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Global temperatures have risen markedly in recent decades.",
          "exampleTr": "Küresel sıcaklıklar son on yıllarda belirgin şekilde arttı.",
          "pitfall": "'In recent...' kalıbı günümüze uzanan süreci anlattığından Present Perfect ister."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that articles (a, an, the & sıfır belirteç) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, articles (a, an, the & sıfır belirteç) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Articles (A, An, The & Sıfır Belirteç) [B2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Articles (A, An, The & Sıfır Belirteç) - B2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Articles (A, An, The & Sıfır Belirteç) konusunda B2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers articles without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered articles after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Articles (A, An, The & Sıfır Belirteç) - B2] Aşağıdaki cümlelerin hangisinde Articles (A, An, The & Sıfır Belirteç) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B2 criteria.",
          "B) The team has neglected the vital B2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Articles (A, An, The & Sıfır Belirteç) konusu B2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C1",
      "title": "Articles (A, An, The & Sıfır Belirteç) — C1: Nüanslar, İstisnalar ve Devrik Yapılar",
      "definition": "Articles (A, An, The & Sıfır Belirteç) konusunun C1 düzeyindeki tanımı: İnce anlam farkları, resmî/akademik üslup, istisnai kurallar ve karmaşık yapılar.",
      "usage": "Articles (A, An, The & Sıfır Belirteç) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + articles Temel Yapı + Nesne",
      "negativeStructure": "Özne + articles Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "articles Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[ARTICLES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "scarcely ... when",
          "turkish": "-er -mez",
          "position": "Devrik cümle başında",
          "exampleEn": "Scarcely had the treaty been signed when border clashes resumed.",
          "exampleTr": "Antlaşma imzalanır imzalanmaz sınır çatışmaları yeniden başladı.",
          "pitfall": "Scarcely had + S + V3 ... WHEN dizilimi bozulmamalıdır (THAN yazılmaz)."
        },
        {
          "marker": "hitherto / heretofore",
          "turkish": "şimdiye değin / o zamana kadar",
          "position": "Zarf konumunda",
          "exampleEn": "The expedition revealed biological species hitherto unknown to science.",
          "exampleTr": "Keşif heyeti şimdiye kadar bilimin bilmediği biyolojik türleri ortaya çıkardı.",
          "pitfall": "Resmî/akademik metinlerde geçmişe dönük sınırlayıcı zarf olarak kullanılır."
        },
        {
          "marker": "no sooner ... than",
          "turkish": "tam ... olmuştu ki",
          "position": "Devrik cümle başında",
          "exampleEn": "No sooner had the keynote concluded than reporters swarmed the podium.",
          "exampleTr": "Açılış konuşması biter bitmez muhabirler kürsüye üşüştü.",
          "pitfall": "No sooner daima 'than' ile eşleşir; 'when' yazmak klasik çeldiricidir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that articles (a, an, the & sıfır belirteç) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, articles (a, an, the & sıfır belirteç) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Articles (A, An, The & Sıfır Belirteç) [C1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Articles (A, An, The & Sıfır Belirteç) - C1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Articles (A, An, The & Sıfır Belirteç) konusunda C1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers articles without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered articles after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Articles (A, An, The & Sıfır Belirteç) - C1] Aşağıdaki cümlelerin hangisinde Articles (A, An, The & Sıfır Belirteç) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C1 criteria.",
          "B) The team has neglected the vital C1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Articles (A, An, The & Sıfır Belirteç) konusu C1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C2",
      "title": "Articles (A, An, The & Sıfır Belirteç) — C2: Söylem, Stil ve Derin Anlam Analizi",
      "definition": "Articles (A, An, The & Sıfır Belirteç) konusunun C2 düzeyindeki tanımı: Üst düzey akademik söylem, nüans ustalıkları ve editörlük düzeyinde dil hakimiyeti.",
      "usage": "Articles (A, An, The & Sıfır Belirteç) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + articles Temel Yapı + Nesne",
      "negativeStructure": "Özne + articles Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "articles Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[ARTICLES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "from time immemorial",
          "turkish": "ezelden beri / çok eski zamanlardan beri",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Nomadic tribes have traversed these arid steppes from time immemorial.",
          "exampleTr": "Göçebe kabileler ezelden beri bu kurak bozkırları aşagelmiştir.",
          "pitfall": "Tarihsel derinlik ve süreklilik anlatır; genellikle Present Perfect ile pekişir."
        },
        {
          "marker": "in the twinkling of an eye",
          "turkish": "göz açıp kapayıncaya kadar",
          "position": "Cümle sonunda",
          "exampleEn": "Decades of architectural heritage were leveled in the twinkling of an eye by the quake.",
          "exampleTr": "Onlarca yıllık mimari miras depremle göz açıp kapayıncaya kadar yerle bir oldu.",
          "pitfall": "Ani ve radikal dönüşümleri niteleyen edebi/akademik üslup öğesidir."
        },
        {
          "marker": "at the eleventh hour",
          "turkish": "son anda / son dakikada",
          "position": "Cümle sonunda",
          "exampleEn": "The diplomatic accord was salvaged at the eleventh hour by bilateral concessions.",
          "exampleTr": "Diplomatik mutabakat son dakikada karşılıklı tavizlerle kurtarıldı.",
          "pitfall": "Gecikmiş ama zamanında yetişen kritik müdahaleleri betimler."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that articles (a, an, the & sıfır belirteç) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, articles (a, an, the & sıfır belirteç) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Articles (A, An, The & Sıfır Belirteç) [C2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Articles (A, An, The & Sıfır Belirteç) - C2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Articles (A, An, The & Sıfır Belirteç) konusunda C2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers articles without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered articles after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Articles (A, An, The & Sıfır Belirteç) - C2] Aşağıdaki cümlelerin hangisinde Articles (A, An, The & Sıfır Belirteç) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C2 criteria.",
          "B) The team has neglected the vital C2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Articles (A, An, The & Sıfır Belirteç) konusu C2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "YDS",
      "title": "Articles (A, An, The & Sıfır Belirteç) — YDS: Sınav Stratejisi, Zaman Yönetimi ve Şık Eleme",
      "definition": "Articles (A, An, The & Sıfır Belirteç) konusunun YDS düzeyindeki tanımı: Soru kökündeki gizli ipuçları, çeldirici eleme algoritmaları ve sınav netini maksimize etme.",
      "usage": "Articles (A, An, The & Sıfır Belirteç) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "YDS seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + articles Temel Yapı + Nesne",
      "negativeStructure": "Özne + articles Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "articles Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[ARTICLES] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since + Past Time / V2",
          "turkish": "-den beri (YDS Şifresi)",
          "position": "Yan cümle başı / Ana cümle Present Perfect",
          "exampleEn": "Renewable energy adoption has accelerated since the landmark 2015 Paris agreement.",
          "exampleTr": "Yenilenebilir enerjiye geçiş, tarihi 2015 Paris Anlaşması'ndan beri hızlandı.",
          "pitfall": "Soru kökünde 'since + V2' görürsen ana cümlede mutlaka 'have/has V3' ara!"
        },
        {
          "marker": "by + future time (e.g. by 2035)",
          "turkish": "-e kadar (Gelecek Şifresi)",
          "position": "Zaman zarfı konumu",
          "exampleEn": "By 2035, the majority of industrial vehicles will have transitioned to hydrogen fuel.",
          "exampleTr": "2035 yılına kadar sanayi araçlarının çoğunluğu hidrojen yakıtına geçmiş olacaktır.",
          "pitfall": "'By + Gelecek Zaman' daima Future Perfect (will have V3) gerektirir."
        },
        {
          "marker": "over / in / during + the last / past + time",
          "turkish": "son ... boyunca (Banko Soru)",
          "position": "Cümle başı veya sonu",
          "exampleEn": "Over the past five decades, computational capacity has expanded exponentially.",
          "exampleTr": "Son elli yıl boyunca bilişim kapasitesi katlanarak büyüdü.",
          "pitfall": "'Over/In the past...' kalıbı YDS'de %99 Present Perfect (have/has V3) ister!"
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that articles (a, an, the & sıfır belirteç) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, articles (a, an, the & sıfır belirteç) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Articles (A, An, The & Sıfır Belirteç) [YDS]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Articles (A, An, The & Sıfır Belirteç) - YDS]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "YDS Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Articles (A, An, The & Sıfır Belirteç) konusunda YDS düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers articles without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered articles after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Articles (A, An, The & Sıfır Belirteç) - YDS] Aşağıdaki cümlelerin hangisinde Articles (A, An, The & Sıfır Belirteç) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard YDS criteria.",
          "B) The team has neglected the vital YDS variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the YDS protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary YDS models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Articles (A, An, The & Sıfır Belirteç) konusu YDS seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    }
  ],
  "quantifiers": [
    {
      "level": "A1",
      "title": "Quantifiers (Miktar Belirteçleri) — A1: Temel Tanıma ve Açık İpuçları",
      "definition": "Quantifiers (Miktar Belirteçleri) konusunun A1 düzeyindeki tanımı: Temel özne-fiil uyumu, basit cümle kuruluşu ve en yalın kurallar.",
      "usage": "Quantifiers (Miktar Belirteçleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + quantifiers Temel Yapı + Nesne",
      "negativeStructure": "Özne + quantifiers Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "quantifiers Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[QUANTIFIERS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "always",
          "turkish": "her zaman",
          "position": "Özne ile fiil arasında",
          "exampleEn": "She always arrives at school on time.",
          "exampleTr": "Okula her zaman vaktinde gelir.",
          "pitfall": "Fiilden sonra yazılmamalıdır ('She arrives always' yanlıştır)."
        },
        {
          "marker": "every day",
          "turkish": "her gün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "I drink fresh orange juice every day.",
          "exampleTr": "Her gün taze portakal suyu içerim.",
          "pitfall": "Bitişik yazılan 'everyday' sıfattır; zaman zarfı ayrı yazılır ('every day')."
        },
        {
          "marker": "now / at the moment",
          "turkish": "şu anda / şimdi",
          "position": "Cümle sonunda",
          "exampleEn": "The children are playing in the garden right now.",
          "exampleTr": "Çocuklar şu anda bahçede oynuyorlar.",
          "pitfall": "Geniş zaman ile değil şimdiki zamanla (am/is/are + Ving) kullanılır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that quantifiers (miktar belirteçleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, quantifiers (miktar belirteçleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Quantifiers (Miktar Belirteçleri) [A1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Quantifiers (Miktar Belirteçleri) - A1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Quantifiers (Miktar Belirteçleri) konusunda A1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers quantifiers without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered quantifiers after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Quantifiers (Miktar Belirteçleri) - A1] Aşağıdaki cümlelerin hangisinde Quantifiers (Miktar Belirteçleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A1 criteria.",
          "B) The team has neglected the vital A1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Quantifiers (Miktar Belirteçleri) konusu A1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "A2",
      "title": "Quantifiers (Miktar Belirteçleri) — A2: Kombinasyon ve Temel Bağlaçlar",
      "definition": "Quantifiers (Miktar Belirteçleri) konusunun A2 düzeyindeki tanımı: Sıklık zarfları, basit bağlaçlar, kısa cevaplar ve temel zaman karşılaştırmaları.",
      "usage": "Quantifiers (Miktar Belirteçleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "A2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + quantifiers Temel Yapı + Nesne",
      "negativeStructure": "Özne + quantifiers Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "quantifiers Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[QUANTIFIERS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "yesterday",
          "turkish": "dün",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "The committee met yesterday to approve the budget.",
          "exampleTr": "Komite bütçeyi onaylamak için dün toplandı.",
          "pitfall": "Present Perfect ile kullanılmaz; daima Simple Past (V2) gerektirir."
        },
        {
          "marker": "two days ago",
          "turkish": "iki gün önce",
          "position": "Cümle sonunda",
          "exampleEn": "The package arrived two days ago.",
          "exampleTr": "Paket iki gün önce ulaştı.",
          "pitfall": "'before' ile karıştırılmamalıdır; 'ago' şimdiki andan geçmişe sayar ve V2 ister."
        },
        {
          "marker": "usually / often",
          "turkish": "genellikle / sık sık",
          "position": "Özne ile fiil arasında",
          "exampleEn": "He usually takes the subway to avoid traffic.",
          "exampleTr": "Trafikten kaçınmak için genellikle metroyu kullanır.",
          "pitfall": "He/she/it öznelerinde fiilin -s takısını unutturmamalıdır."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that quantifiers (miktar belirteçleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, quantifiers (miktar belirteçleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Quantifiers (Miktar Belirteçleri) [A2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Quantifiers (Miktar Belirteçleri) - A2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "A2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Quantifiers (Miktar Belirteçleri) konusunda A2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers quantifiers without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered quantifiers after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Quantifiers (Miktar Belirteçleri) - A2] Aşağıdaki cümlelerin hangisinde Quantifiers (Miktar Belirteçleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard A2 criteria.",
          "B) The team has neglected the vital A2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the A2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary A2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Quantifiers (Miktar Belirteçleri) konusu A2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B1",
      "title": "Quantifiers (Miktar Belirteçleri) — B1: Cümle İçi Bağlam ve Süreç Zamanları",
      "definition": "Quantifiers (Miktar Belirteçleri) konusunun B1 düzeyindeki tanımı: Bağlaçlı cümleler, zaman uyumu, orta seviye kalıplar ve süreç zamanları.",
      "usage": "Quantifiers (Miktar Belirteçleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + quantifiers Temel Yapı + Nesne",
      "negativeStructure": "Özne + quantifiers Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "quantifiers Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[QUANTIFIERS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since 2015 / since then",
          "turkish": "-den beri",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "She has worked at the research center since 2015.",
          "exampleTr": "2015'ten beri araştırma merkezinde çalışıyor.",
          "pitfall": "Since'ten sonra geçmiş zaman noktası (V2), ana cümlede Present Perfect (have/has V3) gelir."
        },
        {
          "marker": "for five years",
          "turkish": "beş yıldır / beş sene boyunca",
          "position": "Cümle sonunda",
          "exampleEn": "They have lived in London for five years.",
          "exampleTr": "Beş yıldır Londra'da yaşıyorlar.",
          "pitfall": "Süreç bitmişse Simple Past ('lived for 5 years'), hala sürüyorsa Present Perfect ('have lived') kullanılır."
        },
        {
          "marker": "while / as",
          "turkish": "-iken",
          "position": "Yan cümlenin başında",
          "exampleEn": "While the scientist was calibrating the sensors, the alarm sounded.",
          "exampleTr": "Bilim insanı sensörleri kalibre ederken alarm çaldı.",
          "pitfall": "While genellikle Past Continuous (was/were Ving) ile süreç bildirir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that quantifiers (miktar belirteçleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, quantifiers (miktar belirteçleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Quantifiers (Miktar Belirteçleri) [B1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Quantifiers (Miktar Belirteçleri) - B1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Quantifiers (Miktar Belirteçleri) konusunda B1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers quantifiers without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered quantifiers after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Quantifiers (Miktar Belirteçleri) - B1] Aşağıdaki cümlelerin hangisinde Quantifiers (Miktar Belirteçleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B1 criteria.",
          "B) The team has neglected the vital B1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Quantifiers (Miktar Belirteçleri) konusu B1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "B2",
      "title": "Quantifiers (Miktar Belirteçleri) — B2: Akademik Bağlam ve İleri Yapılar",
      "definition": "Quantifiers (Miktar Belirteçleri) konusunun B2 düzeyindeki tanımı: Karmaşık yan cümleler, perfect/passive ilişkileri ve YDS tipi güçlü çeldiriciler.",
      "usage": "Quantifiers (Miktar Belirteçleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "B2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + quantifiers Temel Yapı + Nesne",
      "negativeStructure": "Özne + quantifiers Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "quantifiers Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[QUANTIFIERS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "by the time",
          "turkish": "-e kadar / -dığı zamana kadar",
          "position": "Yan cümlenin başında",
          "exampleEn": "By the time the firefighters arrived, the blaze had been extinguished.",
          "exampleTr": "İtfaiyeciler gelene kadar yangın söndürülmüştü.",
          "pitfall": "By the time + V2 -> had V3; By the time + V1 -> will have V3 zaman kuralına uymalıdır."
        },
        {
          "marker": "so far / up to now",
          "turkish": "şu ana kadar",
          "position": "Cümle sonunda veya başında",
          "exampleEn": "No significant anomalies have been observed so far.",
          "exampleTr": "Şu ana kadar hiçbir belirgin anormallik gözlemlenmedi.",
          "pitfall": "Past tense ile değil Present Perfect (have/has V3) ile kullanılır."
        },
        {
          "marker": "in recent decades",
          "turkish": "son on yıllarda",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Global temperatures have risen markedly in recent decades.",
          "exampleTr": "Küresel sıcaklıklar son on yıllarda belirgin şekilde arttı.",
          "pitfall": "'In recent...' kalıbı günümüze uzanan süreci anlattığından Present Perfect ister."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that quantifiers (miktar belirteçleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, quantifiers (miktar belirteçleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Quantifiers (Miktar Belirteçleri) [B2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Quantifiers (Miktar Belirteçleri) - B2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "B2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Quantifiers (Miktar Belirteçleri) konusunda B2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers quantifiers without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered quantifiers after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Quantifiers (Miktar Belirteçleri) - B2] Aşağıdaki cümlelerin hangisinde Quantifiers (Miktar Belirteçleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard B2 criteria.",
          "B) The team has neglected the vital B2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the B2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary B2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Quantifiers (Miktar Belirteçleri) konusu B2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C1",
      "title": "Quantifiers (Miktar Belirteçleri) — C1: Nüanslar, İstisnalar ve Devrik Yapılar",
      "definition": "Quantifiers (Miktar Belirteçleri) konusunun C1 düzeyindeki tanımı: İnce anlam farkları, resmî/akademik üslup, istisnai kurallar ve karmaşık yapılar.",
      "usage": "Quantifiers (Miktar Belirteçleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C1 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + quantifiers Temel Yapı + Nesne",
      "negativeStructure": "Özne + quantifiers Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "quantifiers Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[QUANTIFIERS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "scarcely ... when",
          "turkish": "-er -mez",
          "position": "Devrik cümle başında",
          "exampleEn": "Scarcely had the treaty been signed when border clashes resumed.",
          "exampleTr": "Antlaşma imzalanır imzalanmaz sınır çatışmaları yeniden başladı.",
          "pitfall": "Scarcely had + S + V3 ... WHEN dizilimi bozulmamalıdır (THAN yazılmaz)."
        },
        {
          "marker": "hitherto / heretofore",
          "turkish": "şimdiye değin / o zamana kadar",
          "position": "Zarf konumunda",
          "exampleEn": "The expedition revealed biological species hitherto unknown to science.",
          "exampleTr": "Keşif heyeti şimdiye kadar bilimin bilmediği biyolojik türleri ortaya çıkardı.",
          "pitfall": "Resmî/akademik metinlerde geçmişe dönük sınırlayıcı zarf olarak kullanılır."
        },
        {
          "marker": "no sooner ... than",
          "turkish": "tam ... olmuştu ki",
          "position": "Devrik cümle başında",
          "exampleEn": "No sooner had the keynote concluded than reporters swarmed the podium.",
          "exampleTr": "Açılış konuşması biter bitmez muhabirler kürsüye üşüştü.",
          "pitfall": "No sooner daima 'than' ile eşleşir; 'when' yazmak klasik çeldiricidir."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that quantifiers (miktar belirteçleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, quantifiers (miktar belirteçleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Quantifiers (Miktar Belirteçleri) [C1]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Quantifiers (Miktar Belirteçleri) - C1]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C1 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Quantifiers (Miktar Belirteçleri) konusunda C1 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers quantifiers without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered quantifiers after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Quantifiers (Miktar Belirteçleri) - C1] Aşağıdaki cümlelerin hangisinde Quantifiers (Miktar Belirteçleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C1 criteria.",
          "B) The team has neglected the vital C1 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C1 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C1 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Quantifiers (Miktar Belirteçleri) konusu C1 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "C2",
      "title": "Quantifiers (Miktar Belirteçleri) — C2: Söylem, Stil ve Derin Anlam Analizi",
      "definition": "Quantifiers (Miktar Belirteçleri) konusunun C2 düzeyindeki tanımı: Üst düzey akademik söylem, nüans ustalıkları ve editörlük düzeyinde dil hakimiyeti.",
      "usage": "Quantifiers (Miktar Belirteçleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "C2 seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + quantifiers Temel Yapı + Nesne",
      "negativeStructure": "Özne + quantifiers Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "quantifiers Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[QUANTIFIERS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "from time immemorial",
          "turkish": "ezelden beri / çok eski zamanlardan beri",
          "position": "Cümle başında veya sonunda",
          "exampleEn": "Nomadic tribes have traversed these arid steppes from time immemorial.",
          "exampleTr": "Göçebe kabileler ezelden beri bu kurak bozkırları aşagelmiştir.",
          "pitfall": "Tarihsel derinlik ve süreklilik anlatır; genellikle Present Perfect ile pekişir."
        },
        {
          "marker": "in the twinkling of an eye",
          "turkish": "göz açıp kapayıncaya kadar",
          "position": "Cümle sonunda",
          "exampleEn": "Decades of architectural heritage were leveled in the twinkling of an eye by the quake.",
          "exampleTr": "Onlarca yıllık mimari miras depremle göz açıp kapayıncaya kadar yerle bir oldu.",
          "pitfall": "Ani ve radikal dönüşümleri niteleyen edebi/akademik üslup öğesidir."
        },
        {
          "marker": "at the eleventh hour",
          "turkish": "son anda / son dakikada",
          "position": "Cümle sonunda",
          "exampleEn": "The diplomatic accord was salvaged at the eleventh hour by bilateral concessions.",
          "exampleTr": "Diplomatik mutabakat son dakikada karşılıklı tavizlerle kurtarıldı.",
          "pitfall": "Gecikmiş ama zamanında yetişen kritik müdahaleleri betimler."
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that quantifiers (miktar belirteçleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, quantifiers (miktar belirteçleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Quantifiers (Miktar Belirteçleri) [C2]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Quantifiers (Miktar Belirteçleri) - C2]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "C2 Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Quantifiers (Miktar Belirteçleri) konusunda C2 düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers quantifiers without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered quantifiers after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Quantifiers (Miktar Belirteçleri) - C2] Aşağıdaki cümlelerin hangisinde Quantifiers (Miktar Belirteçleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard C2 criteria.",
          "B) The team has neglected the vital C2 variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the C2 protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary C2 models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Quantifiers (Miktar Belirteçleri) konusu C2 seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    },
    {
      "level": "YDS",
      "title": "Quantifiers (Miktar Belirteçleri) — YDS: Sınav Stratejisi, Zaman Yönetimi ve Şık Eleme",
      "definition": "Quantifiers (Miktar Belirteçleri) konusunun YDS düzeyindeki tanımı: Soru kökündeki gizli ipuçları, çeldirici eleme algoritmaları ve sınav netini maksimize etme.",
      "usage": "Quantifiers (Miktar Belirteçleri) bu seviyede akademik okuma, cümle tamamlama ve gramer sorularında temel ayırt edici unsur olarak kullanılır.",
      "meanings": "YDS seviyesinde bu yapı; zaman uyumu, mantıksal nedensellik, kesinlik ve üslup inceliği anlamları katar.",
      "positiveStructure": "Özne + quantifiers Temel Yapı + Nesne",
      "negativeStructure": "Özne + quantifiers Olumsuz Yardımcı Fiil + Fiil + Nesne",
      "questionStructure": "quantifiers Yardımcı Fiil + Özne + Fiil + Nesne?",
      "formula": "[QUANTIFIERS] Formül: ",
      "subjectVerbAgreement": "Özne tekil ise fiil tekil uyumu (he/she/it -> -s/has/was/is); özne çoğul ise çoğul uyumu (they/we -> have/were/are) aranır.",
      "auxiliaryVerbs": "am, is, are, was, were, do, does, did, have, has, had, will, would, can, could, should, must",
      "verbForms": "V1 (bare infinitive), V2 (past simple), V3 (past participle), V-ing (present participle / gerund)",
      "timeMarkers": [
        {
          "marker": "since + Past Time / V2",
          "turkish": "-den beri (YDS Şifresi)",
          "position": "Yan cümle başı / Ana cümle Present Perfect",
          "exampleEn": "Renewable energy adoption has accelerated since the landmark 2015 Paris agreement.",
          "exampleTr": "Yenilenebilir enerjiye geçiş, tarihi 2015 Paris Anlaşması'ndan beri hızlandı.",
          "pitfall": "Soru kökünde 'since + V2' görürsen ana cümlede mutlaka 'have/has V3' ara!"
        },
        {
          "marker": "by + future time (e.g. by 2035)",
          "turkish": "-e kadar (Gelecek Şifresi)",
          "position": "Zaman zarfı konumu",
          "exampleEn": "By 2035, the majority of industrial vehicles will have transitioned to hydrogen fuel.",
          "exampleTr": "2035 yılına kadar sanayi araçlarının çoğunluğu hidrojen yakıtına geçmiş olacaktır.",
          "pitfall": "'By + Gelecek Zaman' daima Future Perfect (will have V3) gerektirir."
        },
        {
          "marker": "over / in / during + the last / past + time",
          "turkish": "son ... boyunca (Banko Soru)",
          "position": "Cümle başı veya sonu",
          "exampleEn": "Over the past five decades, computational capacity has expanded exponentially.",
          "exampleTr": "Son elli yıl boyunca bilişim kapasitesi katlanarak büyüdü.",
          "pitfall": "'Over/In the past...' kalıbı YDS'de %99 Present Perfect (have/has V3) ister!"
        }
      ],
      "exampleEn": "Modern scientific investigations demonstrate that quantifiers (miktar belirteçleri) plays a decisive role in complex linguistic structures.",
      "exampleTr": "Modern bilimsel araştırmalar, quantifiers (miktar belirteçleri) konusunun karmaşık dil yapılarında belirleyici bir rol oynadığını göstermektedir.",
      "memoryCode": "🎵 Quantifiers (Miktar Belirteçleri) [YDS]: Kuralı yakala, zaman/anlam işaretçisini gör, doğru şıkkı işaretle!",
      "visualMemoryScene": "Görsel Hafıza [Quantifiers (Miktar Belirteçleri) - YDS]: Zihninizde konunun anahtar kuralını canlı bir infografik veya sınav sahnesi olarak canlandırın.",
      "levelTactic": "YDS Düzeyinde Altın Taktik: Seçenekler arasında çeldirici elerken bağlamın yönüne ve gramer uyumuna odaklanın.",
      "commonMistake": "Quantifiers (Miktar Belirteçleri) konusunda YDS düzeyinde en sık yapılan hata: Bağlamı tam okumadan ezbere şık seçmektir.",
      "contrastSentences": {
        "wrong": "Yanlış: *The researchers quantifiers without verifying the initial dataset.*",
        "correct": "Doğru: The researchers accurately mastered quantifiers after rigorous verification.",
        "explanation": "Gramer kuralı gereğince zaman, çatı ve bağlaç uyumu eksiksiz sağlanmalıdır."
      },
      "miniExercise": {
        "question": "[Quantifiers (Miktar Belirteçleri) - YDS] Aşağıdaki cümlelerin hangisinde Quantifiers (Miktar Belirteçleri) kuralı doğru ve eksiksiz uygulanmıştır?",
        "options": [
          "A) The scientific findings were thoroughly validated according to standard YDS criteria.",
          "B) The team has neglected the vital YDS variables during the final analysis.",
          "C) Although the results appeared promising, researchers abandoned the YDS protocol prematurely.",
          "D) Neither the primary hypothesis nor the secondary YDS models were supported by empirical data.",
          "E) By the time the audit commenced, the entire dataset had been scrutinized."
        ],
        "answer": 0,
        "explanation": "A seçeneğinde Quantifiers (Miktar Belirteçleri) konusu YDS seviyesi kurallarına ve akademik dil standartlarına tam olarak uymaktadır."
      }
    }
  ]
};

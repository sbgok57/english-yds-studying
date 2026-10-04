// System-wide Read-Only Vocabulary Inventory
import { YDS_PUBLICATIONS_MASTER_CORPUS } from "./vocabulary/publications-master-corpus";
import { MASTER_VOCABULARY } from "./vocabulary/master-vocab-database";

export type CefrInventoryLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "UNCLASSIFIED";

export type VocabularySource =
  | "flashcards"
  | "archive"
  | "reading"
  | "exams"
  | "grammar"
  | "user"
  | "other";

export interface VocabularyInventoryItem {
  id: string;
  word: string;
  normalized: string;
  lemma?: string;
  partOfSpeech?: string;
  level: CefrInventoryLevel;
  turkishMeanings: string[];
  englishDefinition?: string;
  example?: string;
  exampleTr?: string;
  pronunciation?: string;
  sourceTags: VocabularySource[];
  frequency?: number;
  ydsPriority?: "low" | "medium" | "high" | "critical" | "must_know" | "important" | "normal";
  academic?: boolean;
  phrasalVerb?: boolean;
  collocations?: string[];
  targetExams?: ("YDS" | "YDT" | "YÖKDİL")[];
  examField?: "Sağlık" | "Fen" | "Sosyal" | "Genel";
  notes?: string;
  memoryCode?: string;
  synonyms?: string[];
  antonyms?: string[];
}

export type TargetExam = "ALL" | "YDS" | "YDT" | "YÖKDİL";

export function getWordExams(item: VocabularyInventoryItem): ("YDS" | "YDT" | "YÖKDİL")[] {
  if (item.targetExams && item.targetExams.length > 0) {
    return item.targetExams;
  }
  const exams: ("YDS" | "YDT" | "YÖKDİL")[] = [];

  // YDT: A1, A2, B1, B2 and all Phrasal Verbs (ÖSYM Lise / YKS-Dil müfredatı)
  if (
    item.level === "A1" ||
    item.level === "A2" ||
    item.level === "B1" ||
    item.phrasalVerb ||
    (item.level === "B2" && item.frequency && item.frequency > 50)
  ) {
    exams.push("YDT");
  }

  // YDS: B2, C1, C2, akademik ve yüksek öncelikli makale kelimeleri
  if (
    item.level === "B2" ||
    item.level === "C1" ||
    item.level === "C2" ||
    item.academic ||
    item.ydsPriority === "high" ||
    item.ydsPriority === "critical" ||
    item.ydsPriority === "must_know"
  ) {
    exams.push("YDS");
  }

  // YÖKDİL: Sağlık, Fen, Sosyal ve akademik terminoloji (B1-C1)
  if (
    item.academic ||
    item.level === "B1" ||
    item.level === "B2" ||
    item.level === "C1" ||
    item.sourceTags?.includes("reading") ||
    item.sourceTags?.includes("exams")
  ) {
    exams.push("YÖKDİL");
  }

  if (exams.length === 0) {
    exams.push("YDS", "YDT", "YÖKDİL");
  }

  return exams;
}

export interface UserInventoryCustomization {
  notes?: Record<string, string>;
  levelOverrides?: Record<string, CefrInventoryLevel>;
  priorityOverrides?: Record<string, "low" | "medium" | "high" | "critical">;
  toAddList?: string[];
  toRemoveList?: string[];
  toCheckList?: string[];
  favorites?: string[];
  customWords?: VocabularyInventoryItem[];
}

export const INVENTORY_STORAGE_KEY = "yds-master-vocabulary-inventory-v1";

export function defaultUserCustomization(): UserInventoryCustomization {
  return {
    notes: {},
    levelOverrides: {},
    priorityOverrides: {},
    toAddList: [],
    toRemoveList: [],
    toCheckList: [],
    favorites: [],
    customWords: [],
  };
}

export const BASE_INVENTORY_ITEMS: VocabularyInventoryItem[] = [
  {
    "id": "inv-mitigate",
    "word": "mitigate",
    "normalized": "mitigate",
    "lemma": "mitigate",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "hafifletmek",
      "azaltmak",
      "yatıştırmak"
    ],
    "englishDefinition": "Mitigate: Miti-Gate kapısındaki nöbetçiler kalabalığın baskısını hafifletiyor.",
    "example": "Governments must take immediate action to mitigate the severe consequences of global climate change.",
    "exampleTr": "Hükümetler küresel iklim değişikliğinin ağır sonuçlarını hafifletmek için derhal harekete geçmelidir.",
    "pronunciation": "/ˈmɪt.ɪ.ɡeɪt/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "mitigate risks",
      "mitigate effects",
      "mitigate damage",
      "mitigate impact"
    ],
    "memoryCode": "Mitigate: Miti-Gate kapısındaki nöbetçiler kalabalığın baskısını hafifletiyor."
  },
  {
    "id": "inv-deteriorate",
    "word": "deteriorate",
    "normalized": "deteriorate",
    "lemma": "deteriorate",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "kötüleşmek",
      "bozulmak",
      "fenalaşmak"
    ],
    "englishDefinition": "Deteriorate: De-terror-ate korku yedikçe durum daha da kötüleşiyor.",
    "example": "Relations between the two countries began to deteriorate rapidly after the trade dispute.",
    "exampleTr": "Ticaret anlaşmazlığından sonra iki ülke arasındaki ilişkiler hızla kötüleşmeye başladı.",
    "pronunciation": "/dɪˈtɪə.ri.ə.reɪt/",
    "sourceTags": [
      "flashcards",
      "other"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "deteriorate rapidly",
      "condition deteriorates",
      "health deteriorates"
    ],
    "memoryCode": "Deteriorate: De-terror-ate korku yedikçe durum daha da kötüleşiyor."
  },
  {
    "id": "inv-detrimental",
    "word": "detrimental",
    "normalized": "detrimental",
    "lemma": "detrimental",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "zararlı",
      "hasar veren",
      "hasar verici"
    ],
    "englishDefinition": "Detrimental: De-trim-mental zihni budayıp yok eden zararlı alışkanlıklar.",
    "example": "Excessive consumption of sugar has a detrimental effect on cognitive performance.",
    "exampleTr": "Aşırı şeker tüketiminin bilişsel performans üzerinde zararlı bir etkisi vardır.",
    "pronunciation": "/ˌdet.rɪˈmen.təl/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "detrimental effect",
      "detrimental impact",
      "highly detrimental"
    ],
    "memoryCode": "Detrimental: De-trim-mental zihni budayıp yok eden zararlı alışkanlıklar."
  },
  {
    "id": "inv-comprehensive",
    "word": "comprehensive",
    "normalized": "comprehensive",
    "lemma": "comprehensive",
    "partOfSpeech": "adjective",
    "level": "B1",
    "turkishMeanings": [
      "kapsamlı",
      "ayrıntılı",
      "geniş çaplı"
    ],
    "englishDefinition": "Comprehensive: Comprehend anlamak, her şeyi içine alıp kapsayan büyük plan.",
    "example": "The research team conducted a comprehensive study of renewable energy alternatives in Europe.",
    "exampleTr": "Araştırma ekibi Avrupa'daki yenilenebilir enerji alternatiflerine ilişkin kapsamlı bir çalışma yürüttü.",
    "pronunciation": "/ˌkɒm.prɪˈhen.sɪv/",
    "sourceTags": [
      "flashcards",
      "other"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "comprehensive study",
      "comprehensive review",
      "comprehensive guide"
    ],
    "memoryCode": "Comprehensive: Comprehend anlamak, her şeyi içine alıp kapsayan büyük plan."
  },
  {
    "id": "inv-ubiquitous",
    "word": "ubiquitous",
    "normalized": "ubiquitous",
    "lemma": "ubiquitous",
    "partOfSpeech": "adjective",
    "level": "C1",
    "turkishMeanings": [
      "her yerde bulunan",
      "yaygın"
    ],
    "englishDefinition": "Ubiquitous: U-bike-with-us nereye baksan her yerde bisikletli insanlar.",
    "example": "Smartphones have become ubiquitous in modern urban life across all generations.",
    "exampleTr": "Akıllı telefonlar modern şehir yaşamında her nesil arasında her yerde bulunur hale geldi.",
    "pronunciation": "/juːˈbɪk.wɪ.təs/",
    "sourceTags": [
      "flashcards",
      "other"
    ],
    "frequency": 60,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "ubiquitous presence",
      "become ubiquitous",
      "almost ubiquitous"
    ],
    "memoryCode": "Ubiquitous: U-bike-with-us nereye baksan her yerde bisikletli insanlar."
  },
  {
    "id": "inv-alleviate",
    "word": "alleviate",
    "normalized": "alleviate",
    "lemma": "alleviate",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "hafifletmek",
      "dindirmek",
      "teskin etmek"
    ],
    "englishDefinition": "Alleviate: Ali-ve-ateş Ali hastanın ateşini düşürüp acısını dindiriyor.",
    "example": "The local charity distributed clean water to alleviate the suffering of drought victims.",
    "exampleTr": "Yerel yardım kuruluşu kuraklık mağdurlarının acısını hafifletmek için temiz su dağıttı.",
    "pronunciation": "/əˈliː.vi.eɪt/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "alleviate poverty",
      "alleviate symptoms",
      "alleviate pain",
      "alleviate burden"
    ],
    "memoryCode": "Alleviate: Ali-ve-ateş Ali hastanın ateşini düşürüp acısını dindiriyor."
  },
  {
    "id": "inv-drastically",
    "word": "drastically",
    "normalized": "drastically",
    "lemma": "drastically",
    "partOfSpeech": "adverb",
    "level": "B1",
    "turkishMeanings": [
      "ciddi biçimde",
      "büyük ölçüde",
      "radikal bir şekilde"
    ],
    "englishDefinition": "Drastically: Drakula gibi sert ve radikal bir iniş veya değişim.",
    "example": "Fuel consumption dropped drastically after the introduction of electric transport networks.",
    "exampleTr": "Elektrikli ulaşım ağlarının devreye girmesinin ardından yakıt tüketimi ciddi biçimde düştü.",
    "pronunciation": "/ˈdræs.tɪ.kli/",
    "sourceTags": [
      "flashcards",
      "other"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "drop drastically",
      "change drastically",
      "reduce drastically"
    ],
    "memoryCode": "Drastically: Drakula gibi sert ve radikal bir iniş veya değişim."
  },
  {
    "id": "inv-reluctantly",
    "word": "reluctantly",
    "normalized": "reluctantly",
    "lemma": "reluctantly",
    "partOfSpeech": "adverb",
    "level": "B1",
    "turkishMeanings": [
      "isteksizce",
      "gönülsüzce",
      "isteksiz olarak"
    ],
    "englishDefinition": "Reluctantly: Re-luck şansına güvenmeyip ayaklarını sürüyerek isteksizce gitmek.",
    "example": "The board members reluctantly accepted the new budget cuts due to market pressure.",
    "exampleTr": "Yönetim kurulu üyeleri piyasa baskısı nedeniyle yeni bütçe kısıntılarını isteksizce kabul etti.",
    "pronunciation": "/rɪˈlʌk.tənt.li/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "reluctantly agree",
      "reluctantly accept",
      "reluctantly admit"
    ],
    "memoryCode": "Reluctantly: Re-luck şansına güvenmeyip ayaklarını sürüyerek isteksizce gitmek."
  },
  {
    "id": "inv-scarcely",
    "word": "scarcely",
    "normalized": "scarcely",
    "lemma": "scarcely",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "neredeyse hiç",
      "hemen hemen hiç",
      "güçbela",
      "ucu ucuna hemen hemen hiç"
    ],
    "englishDefinition": "Scarcely: Scarce kıtlık, yok denecek kadar az.",
    "example": "There was scarcely enough food left in the storage to sustain the expedition through the winter.",
    "exampleTr": "Depoda keşif heyetini kış boyunca hayatta tutmaya neredeyse yetecek kadar yiyecek kalmamıştı.",
    "pronunciation": "/ˈskeəs.li/",
    "sourceTags": [
      "flashcards",
      "other"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "scarcely any",
      "scarcely able to",
      "scarcely believable"
    ],
    "memoryCode": "Scarcely: Scarce kıtlık, yok denecek kadar az."
  },
  {
    "id": "inv-account for",
    "word": "account for",
    "normalized": "account for",
    "lemma": "account for",
    "partOfSpeech": "phrasal_verb",
    "level": "B1",
    "turkishMeanings": [
      "oluşturmak",
      "açıklamak",
      "sorumlu olmak"
    ],
    "englishDefinition": "Account for: Muhasebeci (account) yüzdeleri açıklayıp pastadaki payı oluşturur.",
    "example": "Renewable resources now account for nearly forty percent of national electricity output.",
    "exampleTr": "Yenilenebilir kaynaklar artık ulusal elektrik üretiminin yaklaşık yüzde kırkını oluşturuyor.",
    "pronunciation": "/əˈkaʊnt fɔːr/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "account for the difference",
      "account for the majority",
      "account for sales"
    ],
    "memoryCode": "Account for: Muhasebeci (account) yüzdeleri açıklayıp pastadaki payı oluşturur."
  },
  {
    "id": "inv-bring about",
    "word": "bring about",
    "normalized": "bring about",
    "lemma": "bring about",
    "partOfSpeech": "phrasal_verb",
    "level": "B1",
    "turkishMeanings": [
      "sebep olmak",
      "yol açmak",
      "meydana getirmek"
    ],
    "englishDefinition": "Bring about: Masaya yeni bir durumu getirip ortaya çıkmasına sebep olmak.",
    "example": "The technological revolution has brought about fundamental shifts in communication.",
    "exampleTr": "Teknolojik devrim iletişimde köklü değişikliklere yol açtı.",
    "pronunciation": "/brɪŋ əˈbaʊt/",
    "sourceTags": [
      "flashcards",
      "other"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "bring about change",
      "bring about reform",
      "bring about collapse"
    ],
    "memoryCode": "Bring about: Masaya yeni bir durumu getirip ortaya çıkmasına sebep olmak."
  },
  {
    "id": "inv-cope with",
    "word": "cope with",
    "normalized": "cope with",
    "lemma": "cope with",
    "partOfSpeech": "phrasal_verb",
    "level": "B1",
    "turkishMeanings": [
      "başa çıkmak",
      "üstesinden gelmek"
    ],
    "englishDefinition": "Cope with: Köpüklerle boğuşurken suyun üstünde kalıp zorlukla başa çıkmak.",
    "example": "Modern healthcare systems struggle to cope with the demands of an aging population.",
    "exampleTr": "Modern sağlık sistemleri yaşlanan nüfusun talepleriyle başa çıkmakta zorlanıyor.",
    "pronunciation": "/kəʊp wɪð/",
    "sourceTags": [
      "flashcards",
      "other"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "cope with stress",
      "cope with problems",
      "cope with difficulty"
    ],
    "memoryCode": "Cope with: Köpüklerle boğuşurken suyun üstünde kalıp zorlukla başa çıkmak."
  },
  {
    "id": "inv-carry out",
    "word": "carry out",
    "normalized": "carry out",
    "lemma": "carry out",
    "partOfSpeech": "phrasal_verb",
    "level": "B1",
    "turkishMeanings": [
      "yürütmek",
      "gerçekleştirmek",
      "uygulamak"
    ],
    "englishDefinition": "Carry out: Deney tüplerini dışarıya taşıyıp araştırmayı gerçekleştirmek.",
    "example": "Scientists decided to carry out further laboratory experiments to verify the hypothesis.",
    "exampleTr": "Bilim insanları hipotezi doğrulamak için daha fazla laboratuvar deneyi yürütmeye karar verdiler.",
    "pronunciation": "/ˈkær.i aʊt/",
    "sourceTags": [
      "flashcards",
      "other"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": true,
    "collocations": [
      "carry out research",
      "carry out an experiment",
      "carry out an investigation"
    ],
    "memoryCode": "Carry out: Deney tüplerini dışarıya taşıyıp araştırmayı gerçekleştirmek."
  },
  {
    "id": "inv-make up for",
    "word": "make up for",
    "normalized": "make up for",
    "lemma": "make up for",
    "partOfSpeech": "phrasal_verb",
    "level": "B2",
    "turkishMeanings": [
      "telafi etmek",
      "açığı kapatmak"
    ],
    "englishDefinition": "Make up for: Eksik parçayı yapıp açığı kapatmak.",
    "example": "He studied extra hours during the weekend to make up for the lectures he had missed.",
    "exampleTr": "Kaçırdığı dersleri telafi etmek için hafta sonu fazladan saatler boyunca çalıştı.",
    "pronunciation": "/meɪk ʌp fɔːr/",
    "sourceTags": [
      "flashcards",
      "other"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": true,
    "collocations": [
      "make up for lost time",
      "make up for the loss",
      "make up for shortcomings"
    ],
    "memoryCode": "Make up for: Eksik parçayı yapıp açığı kapatmak."
  },
  {
    "id": "inv-discrepancy",
    "word": "discrepancy",
    "normalized": "discrepancy",
    "lemma": "discrepancy",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "tutarsızlık",
      "çelişki",
      "farklılık"
    ],
    "englishDefinition": "Discrepancy: Disk-rep raporda diskin kapasitesiyle uyuşmayan çelişki.",
    "example": "Auditors discovered a noticeable discrepancy between the recorded inventory and physical stock.",
    "exampleTr": "Denetçiler kayıtlı envanter ile fiziki stok arasında dikkat çekici bir tutarsızlık tespit etti.",
    "pronunciation": "/dɪˈskrep.ən.si/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "glaring discrepancy",
      "discrepancy between",
      "reconcile discrepancy"
    ],
    "memoryCode": "Discrepancy: Disk-rep raporda diskin kapasitesiyle uyuşmayan çelişki."
  },
  {
    "id": "inv-consensus",
    "word": "consensus",
    "normalized": "consensus",
    "lemma": "consensus",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "fikir birliği",
      "uzlaşma",
      "ortak görüş"
    ],
    "englishDefinition": "Consensus: Con-sense herkesin sağduyuda ortak bir paydada buluşması.",
    "example": "There is a broad scientific consensus that human activities contribute to rising global temperatures.",
    "exampleTr": "İnsan faaliyetlerinin yükselen küresel sıcaklıklara katkıda bulunduğuna dair geniş bir bilimsel fikir birliği vardır.",
    "pronunciation": "/kənˈsen.səs/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "reach a consensus",
      "general consensus",
      "broad consensus"
    ],
    "memoryCode": "Consensus: Con-sense herkesin sağduyuda ortak bir paydada buluşması."
  },
  {
    "id": "inv-feasibility",
    "word": "feasibility",
    "normalized": "feasibility",
    "lemma": "feasibility",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "uygulanabilirlik",
      "yapılabilirlik",
      "fizibilite"
    ],
    "englishDefinition": "Feasibility: Fees-ability ödenebilir ve yapılabilir olma durumu.",
    "example": "Engineers are evaluating the technical and financial feasibility of the proposed underwater tunnel.",
    "exampleTr": "Mühendisler önerilen sualtı tünelinin teknik ve mali uygulanabilirliğini değerlendiriyor.",
    "pronunciation": "/ˌfiː.zəˈbɪl.ə.ti/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "feasibility study",
      "assess feasibility",
      "economic feasibility"
    ],
    "memoryCode": "Feasibility: Fees-ability ödenebilir ve yapılabilir olma durumu."
  },
  {
    "id": "inv-inevitably",
    "word": "inevitably",
    "normalized": "inevitably",
    "lemma": "inevitably",
    "partOfSpeech": "adverb",
    "level": "B1",
    "turkishMeanings": [
      "kaçınılmaz olarak",
      "ister istemez",
      "kaçınılmaz bir şekilde"
    ],
    "englishDefinition": "Inevitably: Kaçacak hiçbir kapı (evit) yok, mutlaka olacak.",
    "example": "Rapid urbanization inevitably strains existing public transport infrastructure.",
    "exampleTr": "Hızlı şehirleşme kaçınılmaz olarak mevcut toplu taşıma altyapısını zorlamaktadır.",
    "pronunciation": "/ɪnˈev.ɪ.tə.bli/",
    "sourceTags": [
      "flashcards",
      "other"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "lead inevitably to",
      "will inevitably",
      "inevitably result in"
    ],
    "memoryCode": "Inevitably: Kaçacak hiçbir kapı (evit) yok, mutlaka olacak."
  },
  {
    "id": "inv-nonetheless",
    "word": "nonetheless",
    "normalized": "nonetheless",
    "lemma": "nonetheless",
    "partOfSpeech": "conjunction",
    "level": "B2",
    "turkishMeanings": [
      "yine de",
      "buna rağmen",
      "bununla birlikte"
    ],
    "englishDefinition": "Nonetheless: None the less zorluklar azalsa da artmasa da yine de başarmak.",
    "example": "The climb was perilous and icy; nonetheless, the mountaineers reached the peak before twilight.",
    "exampleTr": "Tırmanış tehlikeli ve buzlu idi; yine de dağcılar alacakaranlıktan önce zirveye ulaştı.",
    "pronunciation": "/ˌnʌn.ðəˈles/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "but nonetheless",
      "was difficult, nonetheless"
    ],
    "memoryCode": "Nonetheless: None the less zorluklar azalsa da artmasa da yine de başarmak."
  },
  {
    "id": "inv-undermine",
    "word": "undermine",
    "normalized": "undermine",
    "lemma": "undermine",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "zayıflatmak",
      "baltalamak",
      "temelini sarsmak"
    ],
    "englishDefinition": "Undermine: Binanın altını (under) kazıp maden (mine) açarak temeli çökertmek.",
    "example": "Spreading unsubstantiated rumors can severely undermine public confidence in democratic institutions.",
    "exampleTr": "Dayanaksız söylentiler yaymak, demokratik kurumlara yönelik kamuoyu güvenini ciddi biçimde baltalayabilir.",
    "pronunciation": "/ˌʌn.dəˈmaɪn/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "undermine confidence",
      "undermine authority",
      "undermine credibility"
    ],
    "memoryCode": "Undermine: Binanın altını (under) kazıp maden (mine) açarak temeli çökertmek."
  },
  {
    "id": "inv-prevalent",
    "word": "prevalent",
    "normalized": "prevalent",
    "lemma": "prevalent",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "yaygın",
      "hakim",
      "sık rastlanan",
      "mevcut",
      "olagelen"
    ],
    "englishDefinition": "Prevalent: Önceden de valiz valiz her yerde olan yaygın eşyalar.",
    "example": "Waterborne diseases remain prevalent in rural regions lacking sanitation infrastructure.",
    "exampleTr": "Su kaynaklı hastalıklar, sanitasyon altyapısından yoksun kırsal bölgelerde yaygın olmaya devam ediyor.",
    "pronunciation": "/ˈprev.əl.ənt/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "widely prevalent",
      "prevalent among",
      "prevalent belief"
    ],
    "memoryCode": "Prevalent: Önceden de valiz valiz her yerde olan yaygın eşyalar."
  },
  {
    "id": "inv-scrutiny",
    "word": "scrutiny",
    "normalized": "scrutiny",
    "lemma": "scrutiny",
    "partOfSpeech": "noun",
    "level": "C1",
    "turkishMeanings": [
      "dikkatli inceleme",
      "yakın denetim",
      "mercek altına alma"
    ],
    "englishDefinition": "Scrutiny: Vida gibi (screw) sıkarak her santimini büyüteçle incelemek.",
    "example": "Financial transactions of multinational corporations are subjected to intense regulatory scrutiny.",
    "exampleTr": "Çokuluslu şirketlerin mali işlemleri yoğun yasal denetime tabi tutulur.",
    "pronunciation": "/ˈskruː.tɪ.ni/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 60,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "close scrutiny",
      "under scrutiny",
      "come under scrutiny"
    ],
    "memoryCode": "Scrutiny: Vida gibi (screw) sıkarak her santimini büyüteçle incelemek."
  },
  {
    "id": "inv-vulnerable",
    "word": "vulnerable",
    "normalized": "vulnerable",
    "lemma": "vulnerable",
    "partOfSpeech": "adjective",
    "level": "B1",
    "turkishMeanings": [
      "savunmasız",
      "hassas",
      "kırılgan",
      "korunmasız"
    ],
    "englishDefinition": "Vulnerable: Zırhı olmayan yaralanmaya (wound) açık bir savaşçı.",
    "example": "Elderly citizens and newborns are especially vulnerable to respiratory infections in winter.",
    "exampleTr": "Yaşlı vatandaşlar ve yeni doğanlar kışın solunum yolu enfeksiyonlarına karşı özellikle savunmasızdır.",
    "pronunciation": "/ˈvʌl.nər.ə.bəl/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "vulnerable to disease",
      "vulnerable group",
      "highly vulnerable"
    ],
    "memoryCode": "Vulnerable: Zırhı olmayan yaralanmaya (wound) açık bir savaşçı."
  },
  {
    "id": "inv-plausible",
    "word": "plausible",
    "normalized": "plausible",
    "lemma": "plausible",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "makul",
      "akla yatkın",
      "inandırıcı"
    ],
    "englishDefinition": "Plausible: Alkışlanabilir (applause-able) derecede mantıklı ve inandırıcı bir tez.",
    "example": "The detective presented a plausible explanation that accounted for all witness statements.",
    "exampleTr": "Dedektif tüm tanık ifadelerini açıklayan akla yatkın bir açıklama sundu.",
    "pronunciation": "/ˈplɔː.zə.bəl/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "plausible explanation",
      "plausible scenario",
      "perfectly plausible"
    ],
    "memoryCode": "Plausible: Alkışlanabilir (applause-able) derecede mantıklı ve inandırıcı bir tez."
  },
  {
    "id": "inv-facilitate",
    "word": "facilitate",
    "normalized": "facilitate",
    "lemma": "facilitate",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "kolaylaştırmak",
      "olanak sağlamak",
      "hafifletmek"
    ],
    "englishDefinition": "Facilitate: Facility tesis kurup işleri kolaylaştırmak.",
    "example": "Digital learning platforms facilitate independent study by giving learners instant feedback.",
    "exampleTr": "Dijital öğrenme platformları, öğrencilere anında geri bildirim sağlayarak bağımsız çalışmayı kolaylaştırır.",
    "pronunciation": "/fəˈsɪl.ɪ.teɪt/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "facilitate communication",
      "facilitate learning",
      "facilitate growth"
    ],
    "memoryCode": "Facilitate: Facility tesis kurup işleri kolaylaştırmak."
  },
  {
    "id": "inv-efficiently",
    "word": "efficiently",
    "normalized": "efficiently",
    "lemma": "efficiently",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "etkili bir şekilde",
      "yeterli bir şekilde"
    ],
    "englishDefinition": "Gears rotating smoothly together with zero friction - Verimli ve düzenli sistem",
    "example": "It is essential to make sure businesses operate efficiently to maximize profits.",
    "exampleTr": "Örnek: etkili bir şekilde yeterli bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/efficiently/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Gears rotating smoothly together with zero friction - Verimli ve düzenli sistem"
  },
  {
    "id": "inv-significantly",
    "word": "significantly",
    "normalized": "significantly",
    "lemma": "significantly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "önemli derecede"
    ],
    "englishDefinition": "A rising bar chart jumping above all previous months - Dikkat çeken büyük artış",
    "example": "People who smoke have a significantly greater risk of developing lung cancer than people who don't.",
    "exampleTr": "Örnek: önemli derecede bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/significantly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "A rising bar chart jumping above all previous months - Dikkat çeken büyük artış"
  },
  {
    "id": "inv-widely",
    "word": "widely",
    "normalized": "widely",
    "lemma": "widely",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "yaygın bir şekilde",
      "geniş ölçüde"
    ],
    "englishDefinition": "Global network radiating across multiple continents - Geniş coğrafyaya yayılan etki",
    "example": "The books are widely read by adults as well as children.",
    "exampleTr": "Örnek: yaygın bir şekilde geniş ölçüde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/widely/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Global network radiating across multiple continents - Geniş coğrafyaya yayılan etki"
  },
  {
    "id": "inv-extremely",
    "word": "extremely",
    "normalized": "extremely",
    "lemma": "extremely",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "oldukça",
      "son derece"
    ],
    "englishDefinition": "Thermometer gauge hitting the maximum red zone - Sınırları zorlayan aşırı seviye",
    "example": "Mark knew he had behaved extremely badly.",
    "exampleTr": "Örnek: oldukça son derece bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/extremely/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Thermometer gauge hitting the maximum red zone - Sınırları zorlayan aşırı seviye"
  },
  {
    "id": "inv-initially",
    "word": "initially",
    "normalized": "initially",
    "lemma": "initially",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "başlangıçta"
    ],
    "englishDefinition": "Starting pistol firing at the beginning of a marathon - İlk başlangıç noktası",
    "example": "The damage was far more serious than initially believed.",
    "exampleTr": "Örnek: başlangıçta bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/initially/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Starting pistol firing at the beginning of a marathon - İlk başlangıç noktası"
  },
  {
    "id": "inv-absolutely",
    "word": "absolutely",
    "normalized": "absolutely",
    "lemma": "absolutely",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "kesinlikle",
      "tamamen"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Absolutely\" - kesinlikle\ntamamen kavramı",
    "example": "It’s absolutely impossible to work with you.",
    "exampleTr": "Örnek: kesinlikle\ntamamen bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/absolutely/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Absolutely\" - kesinlikle\ntamamen kavramı"
  },
  {
    "id": "inv-apparently",
    "word": "apparently",
    "normalized": "apparently",
    "lemma": "apparently",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "görünüşe bakılırsa",
      "görünüşte"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Apparently\" - görünüşe bakılırsa görünüşte kavramı",
    "example": "I heard a rumour that he’s leaving, but apparently it’s not true.",
    "exampleTr": "Örnek: görünüşe bakılırsa görünüşte bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/apparently/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Apparently\" - görünüşe bakılırsa görünüşte kavramı"
  },
  {
    "id": "inv-briefly",
    "word": "briefly",
    "normalized": "briefly",
    "lemma": "briefly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "kısaca"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Briefly\" - kısaca kavramı",
    "example": "Let me tell you briefly what happened.",
    "exampleTr": "Örnek: kısaca bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/briefly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Briefly\" - kısaca kavramı"
  },
  {
    "id": "inv-carefully",
    "word": "carefully",
    "normalized": "carefully",
    "lemma": "carefully",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "dikkatlice"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Carefully\" - dikkatlice kavramı",
    "example": "Drive carefully, it’s raining.",
    "exampleTr": "Örnek: dikkatlice bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/carefully/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Carefully\" - dikkatlice kavramı"
  },
  {
    "id": "inv-certainly",
    "word": "certainly",
    "normalized": "certainly",
    "lemma": "certainly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "elbette",
      "kesinlikle"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Certainly\" - elbette kesinlikle kavramı",
    "example": "She had a friend called Tom, but I don’t know whether he was her boyfriend.",
    "exampleTr": "Örnek: elbette kesinlikle bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/certainly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Certainly\" - elbette kesinlikle kavramı"
  },
  {
    "id": "inv-equally",
    "word": "equally",
    "normalized": "equally",
    "lemma": "equally",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "eşit derecede"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Equally\" - eşit derecede kavramı",
    "example": "In an ideal world, everyone would get treated equally.",
    "exampleTr": "Örnek: eşit derecede bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/equally/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Equally\" - eşit derecede kavramı"
  },
  {
    "id": "inv-directly",
    "word": "directly",
    "normalized": "directly",
    "lemma": "directly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "doğrudan",
      "direkt olarak"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Directly\" - doğrudan direkt olarak kavramı",
    "example": "The disease is directly linked to poor drainage systems.",
    "exampleTr": "Örnek: doğrudan direkt olarak bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/directly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Directly\" - doğrudan direkt olarak kavramı"
  },
  {
    "id": "inv-clearly",
    "word": "clearly",
    "normalized": "clearly",
    "lemma": "clearly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "açıkça",
      "anlaşılır biçimde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Clearly\" - açıkça anlaşılır biçimde kavramı",
    "example": "The accident was clearly your fault, you should have driven more carefully.",
    "exampleTr": "Örnek: açıkça anlaşılır biçimde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/clearly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Clearly\" - açıkça anlaşılır biçimde kavramı"
  },
  {
    "id": "inv-essentially",
    "word": "essentially",
    "normalized": "essentially",
    "lemma": "essentially",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "aslında",
      "aslen",
      "esasen"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Essentially\" - aslında/aslen\nesasen kavramı",
    "example": "Her new album is essentially a collection of her greatest hits.",
    "exampleTr": "Örnek: aslında/aslen\nesasen bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/essentially/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Essentially\" - aslında/aslen\nesasen kavramı"
  },
  {
    "id": "inv-fairly",
    "word": "fairly",
    "normalized": "fairly",
    "lemma": "fairly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "oldukça",
      "adil bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Fairly\" - oldukça adil bir şekilde kavramı",
    "example": "He claimed that he hadn’t been treated fairly by his employers.",
    "exampleTr": "Örnek: oldukça adil bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/fairly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Fairly\" - oldukça adil bir şekilde kavramı"
  },
  {
    "id": "inv-closely",
    "word": "closely",
    "normalized": "closely",
    "lemma": "closely",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "yakından"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Closely\" - yakından\n(hem ilişki hem de mesafe için kullanılır) kavramı",
    "example": "We are working closely with the detective.\nHe walked into the room, closely folllowed by his sister.",
    "exampleTr": "Örnek: yakından\n(hem ilişki hem de mesafe için kullanılır) bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/closely/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Closely\" - yakından\n(hem ilişki hem de mesafe için kullanılır) kavramı"
  },
  {
    "id": "inv-generally",
    "word": "generally",
    "normalized": "generally",
    "lemma": "generally",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "genellikle"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Generally\" - genellikle kavramı",
    "example": "The baby generally wakes up four times during the night.",
    "exampleTr": "Örnek: genellikle bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/generally/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Generally\" - genellikle kavramı"
  },
  {
    "id": "inv-incredibly",
    "word": "incredibly",
    "normalized": "incredibly",
    "lemma": "incredibly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "son derece",
      "inanılması güç"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Incredibly\" - son derece inanılması güç kavramı",
    "example": "This coffee is incredibly smooth and rich.\nWe missed our flight but, incredibly, got there on time.",
    "exampleTr": "Örnek: son derece inanılması güç bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/incredibly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Incredibly\" - son derece inanılması güç kavramı"
  },
  {
    "id": "inv-mainly",
    "word": "mainly",
    "normalized": "mainly",
    "lemma": "mainly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "başlıca"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Mainly\" - başlıca kavramı",
    "example": "Cheetahs are mainly found in Africa.",
    "exampleTr": "Örnek: başlıca bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/mainly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Mainly\" - başlıca kavramı"
  },
  {
    "id": "inv-gradually",
    "word": "gradually",
    "normalized": "gradually",
    "lemma": "gradually",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "aşama aşama",
      "giderek"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Gradually\" - aşama aşama giderek kavramı",
    "example": "Gradually, she realized that he was cheating on her.",
    "exampleTr": "Örnek: aşama aşama giderek bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/gradually/",
    "sourceTags": [
      "flashcards",
      "other"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Gradually\" - aşama aşama giderek kavramı"
  },
  {
    "id": "inv-largely",
    "word": "largely",
    "normalized": "largely",
    "lemma": "largely",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "büyük ölçüde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Largely\" - büyük ölçüde kavramı",
    "example": "The decision was based largely on consumer feedback.",
    "exampleTr": "Örnek: büyük ölçüde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/largely/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Largely\" - büyük ölçüde kavramı"
  },
  {
    "id": "inv-merely",
    "word": "merely",
    "normalized": "merely",
    "lemma": "merely",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "sadece",
      "ancak",
      "sırf"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Merely\" - sadece ancak sırf kavramı",
    "example": "I wasn’t complaining, I merely said that I was tired.",
    "exampleTr": "Örnek: sadece ancak sırf bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/merely/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Merely\" - sadece ancak sırf kavramı"
  },
  {
    "id": "inv-nearly",
    "word": "nearly",
    "normalized": "nearly",
    "lemma": "nearly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "yaklaşık",
      "neredeyse"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Nearly\" - yaklaşık kavramı",
    "example": "I’ve nearly finished that book you lent me.",
    "exampleTr": "Örnek: yaklaşık bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/nearly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Nearly\" - yaklaşık kavramı"
  },
  {
    "id": "inv-greatly",
    "word": "greatly",
    "normalized": "greatly",
    "lemma": "greatly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "büyük oranda",
      "geniş ölçüde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Greatly\" - büyük oranda geniş ölçüde kavramı",
    "example": "I feel that I have benefited greatly from her wisdom.",
    "exampleTr": "Örnek: büyük oranda geniş ölçüde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/greatly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Greatly\" - büyük oranda geniş ölçüde kavramı"
  },
  {
    "id": "inv-currently",
    "word": "currently",
    "normalized": "currently",
    "lemma": "currently",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "şu anda",
      "mevcut durumda"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Currently\" - şu anda mevcut durumda kavramı",
    "example": "The device is currently available only in Japan.",
    "exampleTr": "Örnek: şu anda mevcut durumda bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/currently/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Currently\" - şu anda mevcut durumda kavramı"
  },
  {
    "id": "inv-necessarily",
    "word": "necessarily",
    "normalized": "necessarily",
    "lemma": "necessarily",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "illa",
      "ister istemez"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Necessarily\" - illa ister istemez kavramı",
    "example": "Servants necessarily had close contact with their employers.",
    "exampleTr": "Örnek: illa ister istemez bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/necessarily/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Necessarily\" - illa ister istemez kavramı"
  },
  {
    "id": "inv-obviously",
    "word": "obviously",
    "normalized": "obviously",
    "lemma": "obviously",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "açıkçası",
      "besbelli"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Obviously\" - açıkçası\nbesbelli kavramı",
    "example": "They were obviously exhausted after the game.",
    "exampleTr": "Örnek: açıkçası\nbesbelli bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/obviously/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Obviously\" - açıkçası\nbesbelli kavramı"
  },
  {
    "id": "inv-notably",
    "word": "notably",
    "normalized": "notably",
    "lemma": "notably",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "özellikle",
      "bilhassa önemli derecede"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Notably\" - özellikle kavramı",
    "example": "The house had many drawbacks, most notably its price.",
    "exampleTr": "Örnek: özellikle bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/notably/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Notably\" - özellikle kavramı"
  },
  {
    "id": "inv-particularly",
    "word": "particularly",
    "normalized": "particularly",
    "lemma": "particularly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "özellikle",
      "bilhassa ayrıntılı olarak"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Particularly\" - özellikle kavramı",
    "example": "They don’t seem particularly worried about the situation.\nThe story focuses particularly on the main character.",
    "exampleTr": "Örnek: özellikle bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/particularly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Particularly\" - özellikle kavramı"
  },
  {
    "id": "inv-highly",
    "word": "highly",
    "normalized": "highly",
    "lemma": "highly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "yüksek derecede",
      "çok"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Highly\" - yüksek derecede kavramı",
    "example": "She had a highly successful career as a translator.",
    "exampleTr": "Örnek: yüksek derecede bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/highly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Highly\" - yüksek derecede kavramı"
  },
  {
    "id": "inv-hopefully",
    "word": "hopefully",
    "normalized": "hopefully",
    "lemma": "hopefully",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "ümit ederim ki",
      "umutla"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Hopefully\" - ümit ederim ki umutla kavramı",
    "example": "Hopefully, we’ll arrive before dark.",
    "exampleTr": "Örnek: ümit ederim ki umutla bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/hopefully/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Hopefully\" - ümit ederim ki umutla kavramı"
  },
  {
    "id": "inv-partly",
    "word": "partly",
    "normalized": "partly",
    "lemma": "partly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "kısmen",
      "bir dereceye kadar"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Partly\" - kısmen\nbir dereceye kadar kavramı",
    "example": "The house is partly owned by her sister.",
    "exampleTr": "Örnek: kısmen\nbir dereceye kadar bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/partly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Partly\" - kısmen\nbir dereceye kadar kavramı"
  },
  {
    "id": "inv-heavily",
    "word": "heavily",
    "normalized": "heavily",
    "lemma": "heavily",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "aşırı derecede",
      "ağır bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Heavily\" - aşırı derecede ağır bir şekilde kavramı",
    "example": "The country depends heavily on foreign aid.",
    "exampleTr": "Örnek: aşırı derecede ağır bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/heavily/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Heavily\" - aşırı derecede ağır bir şekilde kavramı"
  },
  {
    "id": "inv-occasionally",
    "word": "occasionally",
    "normalized": "occasionally",
    "lemma": "occasionally",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "ara sıra",
      "arada sırada"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Occasionally\" - ara sıra\narada sırada kavramı",
    "example": "This type of allergy can very occasionally be fatal.",
    "exampleTr": "Örnek: ara sıra\narada sırada bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/occasionally/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Occasionally\" - ara sıra\narada sırada kavramı"
  },
  {
    "id": "inv-precisely",
    "word": "precisely",
    "normalized": "precisely",
    "lemma": "precisely",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "tam olarak",
      "açık olarak",
      "kesinlikle"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Precisely\" - tam olarak açık olarak kesinlikle kavramı",
    "example": "The fireworks begin at eight o’clock precisely.",
    "exampleTr": "Örnek: tam olarak açık olarak kesinlikle bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/precisely/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Precisely\" - tam olarak açık olarak kesinlikle kavramı"
  },
  {
    "id": "inv-similarly",
    "word": "similarly",
    "normalized": "similarly",
    "lemma": "similarly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "aynı şekilde",
      "benzer olarak"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Similarly\" - aynı şekilde\nbenzer olarak kavramı",
    "example": "The United States won most of the track and field events. Similarly, in swimming, the top three places went to Americans.",
    "exampleTr": "Örnek: aynı şekilde\nbenzer olarak bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/similarly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Similarly\" - aynı şekilde\nbenzer olarak kavramı"
  },
  {
    "id": "inv-rapidly",
    "word": "rapidly",
    "normalized": "rapidly",
    "lemma": "rapidly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "hızlıca"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Rapidly\" - hızlıca kavramı",
    "example": "The country’s oil reserves are rapidly declining.",
    "exampleTr": "Örnek: hızlıca bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/rapidly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Rapidly\" - hızlıca kavramı"
  },
  {
    "id": "inv-truly",
    "word": "truly",
    "normalized": "truly",
    "lemma": "truly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "tam anlamıyla",
      "gerçekten"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Truly\" - tam anlamıyla gerçekten kavramı",
    "example": "This is a desperate situation which requires a truly radical solution.",
    "exampleTr": "Örnek: tam anlamıyla gerçekten bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/truly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Truly\" - tam anlamıyla gerçekten kavramı"
  },
  {
    "id": "inv-suddenly",
    "word": "suddenly",
    "normalized": "suddenly",
    "lemma": "suddenly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "aniden",
      "birdenbire"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Suddenly\" - aniden birdenbire kavramı",
    "example": "I was reading a book when suddenly I heard a scream from outside.",
    "exampleTr": "Örnek: aniden birdenbire bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/suddenly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Suddenly\" - aniden birdenbire kavramı"
  },
  {
    "id": "inv-relatively",
    "word": "relatively",
    "normalized": "relatively",
    "lemma": "relatively",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "nispeten",
      "diğerine nazaran"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Relatively\" - nispeten diğerine nazaran kavramı",
    "example": "Online sales are relatively easy to track.",
    "exampleTr": "Örnek: nispeten diğerine nazaran bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/relatively/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Relatively\" - nispeten diğerine nazaran kavramı"
  },
  {
    "id": "inv-virtually",
    "word": "virtually",
    "normalized": "virtually",
    "lemma": "virtually",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "hemen hemen",
      "yaklaşık"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Virtually\" - hemen hemen\nyaklaşık kavramı",
    "example": "He virtually admitted he was guilty.",
    "exampleTr": "Örnek: hemen hemen\nyaklaşık bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/virtually/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Virtually\" - hemen hemen\nyaklaşık kavramı"
  },
  {
    "id": "inv-ultimately",
    "word": "ultimately",
    "normalized": "ultimately",
    "lemma": "ultimately",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "nihayetinde",
      "eninde sonunda"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Ultimately\" - nihayetinde eninde sonunda kavramı",
    "example": "A poor diet ultimately lead to illness.",
    "exampleTr": "Örnek: nihayetinde eninde sonunda bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/ultimately/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Ultimately\" - nihayetinde eninde sonunda kavramı"
  },
  {
    "id": "inv-roughly",
    "word": "roughly",
    "normalized": "roughly",
    "lemma": "roughly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "yaklaşık olarak",
      "aşağı yukarı"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Roughly\" - yaklaşık olarak aşağı yukarı kavramı",
    "example": "The town’s population has roughly doubled.",
    "exampleTr": "Örnek: yaklaşık olarak aşağı yukarı bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/roughly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Roughly\" - yaklaşık olarak aşağı yukarı kavramı"
  },
  {
    "id": "inv-commonly",
    "word": "commonly",
    "normalized": "commonly",
    "lemma": "commonly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "sık sık",
      "çoğunlukla"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Commonly\" - sık sık kavramı",
    "example": "Knee injuries are commonly found in football players.",
    "exampleTr": "Örnek: sık sık bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/commonly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Commonly\" - sık sık kavramı"
  },
  {
    "id": "inv-randomly",
    "word": "randomly",
    "normalized": "randomly",
    "lemma": "randomly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "rastgele",
      "gelişigüzel"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Randomly\" - rastgele gelişigüzel kavramı",
    "example": "The winner is randomly selected by computer.",
    "exampleTr": "Örnek: rastgele gelişigüzel bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/randomly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Randomly\" - rastgele gelişigüzel kavramı"
  },
  {
    "id": "inv-formerly",
    "word": "formerly",
    "normalized": "formerly",
    "lemma": "formerly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "eskiden",
      "önceden"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Formerly\" - eskiden önceden kavramı",
    "example": "The European Union was formerly called the European Community.",
    "exampleTr": "Örnek: eskiden önceden bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/formerly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Formerly\" - eskiden önceden kavramı"
  },
  {
    "id": "inv-adversely",
    "word": "adversely",
    "normalized": "adversely",
    "lemma": "adversely",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "olumsuz şekilde",
      "tersine"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Adversely\" - olumsuz şekilde\ntersine kavramı",
    "example": "A lot of companies have been adversely affected by the recession.",
    "exampleTr": "Örnek: olumsuz şekilde\ntersine bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/adversely/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Adversely\" - olumsuz şekilde\ntersine kavramı"
  },
  {
    "id": "inv-solely",
    "word": "solely",
    "normalized": "solely",
    "lemma": "solely",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "sadece",
      "yalnızca"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Solely\" - sadece\nyalnızca kavramı",
    "example": "He is solely in charge of the operation.",
    "exampleTr": "Örnek: sadece\nyalnızca bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/solely/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Solely\" - sadece\nyalnızca kavramı"
  },
  {
    "id": "inv-permanently",
    "word": "permanently",
    "normalized": "permanently",
    "lemma": "permanently",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "kalıcı bir şekilde",
      "daimi olarak"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Permanently\" - kalıcı bir şekilde daimi olarak kavramı",
    "example": "The stroke left his right side permanently damaged.",
    "exampleTr": "Örnek: kalıcı bir şekilde daimi olarak bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/permanently/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Permanently\" - kalıcı bir şekilde daimi olarak kavramı"
  },
  {
    "id": "inv-conversely",
    "word": "conversely",
    "normalized": "conversely",
    "lemma": "conversely",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "aksine",
      "diğer taraftan",
      "buna karşılık"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Conversely\" - aksine\ndiğer taraftan/buna karşılık kavramı",
    "example": "I thought that it would rain; conversely, it was sunny.",
    "exampleTr": "Örnek: aksine\ndiğer taraftan/buna karşılık bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/conversely/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Conversely\" - aksine\ndiğer taraftan/buna karşılık kavramı"
  },
  {
    "id": "inv-dramatically",
    "word": "dramatically",
    "normalized": "dramatically",
    "lemma": "dramatically",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "çarpıcı bir şekilde",
      "önemli ölçüde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Dramatically\" - çarpıcı bir şekilde önemli ölçüde kavramı",
    "example": "Her health has improved dramatically since she started on this new diet.",
    "exampleTr": "Örnek: çarpıcı bir şekilde önemli ölçüde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/dramatically/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Dramatically\" - çarpıcı bir şekilde önemli ölçüde kavramı"
  },
  {
    "id": "inv-remarkably",
    "word": "remarkably",
    "normalized": "remarkably",
    "lemma": "remarkably",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "dikkate değer şekilde",
      "önemli derecede"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Remarkably\" - dikkate değer şekilde önemli derecede kavramı",
    "example": "Remarkably, he wasn’t hurt in the crash.",
    "exampleTr": "Örnek: dikkate değer şekilde önemli derecede bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/remarkably/",
    "sourceTags": [
      "flashcards",
      "other"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Remarkably\" - dikkate değer şekilde önemli derecede kavramı"
  },
  {
    "id": "inv-profoundly",
    "word": "profoundly",
    "normalized": "profoundly",
    "lemma": "profoundly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "derinlemesine",
      "kökten son derece"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Profoundly\" - derinlemesine kavramı",
    "example": "Society has changed profoundly over the last 40 years.",
    "exampleTr": "Örnek: derinlemesine bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/profoundly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Profoundly\" - derinlemesine kavramı"
  },
  {
    "id": "inv-vaguely",
    "word": "vaguely",
    "normalized": "vaguely",
    "lemma": "vaguely",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "belirsiz bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Vaguely\" - belirsiz bir şekilde kavramı",
    "example": "I vaguely remembered having met him before.",
    "exampleTr": "Örnek: belirsiz bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/vaguely/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Vaguely\" - belirsiz bir şekilde kavramı"
  },
  {
    "id": "inv-consequently",
    "word": "consequently",
    "normalized": "consequently",
    "lemma": "consequently",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "sonuç olarak"
    ],
    "englishDefinition": "Dominoes falling in sequence showing cause and effect - Sonuç olarak doğan durum",
    "example": "He is always bad-tempered, and consequently doesn’t have many friends.",
    "exampleTr": "Örnek: sonuç olarak bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/consequently/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Dominoes falling in sequence showing cause and effect - Sonuç olarak doğan durum"
  },
  {
    "id": "inv-densely",
    "word": "densely",
    "normalized": "densely",
    "lemma": "densely",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "yoğun olarak",
      "yoğun bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Densely\" - yoğun olarak yoğun bir şekilde kavramı",
    "example": "England was once a densely wooded country.",
    "exampleTr": "Örnek: yoğun olarak yoğun bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/densely/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Densely\" - yoğun olarak yoğun bir şekilde kavramı"
  },
  {
    "id": "inv-distinctly",
    "word": "distinctly",
    "normalized": "distinctly",
    "lemma": "distinctly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "belirgin biçimde",
      "açıkça farklı olarak"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Distinctly\" - belirgin biçimde kavramı",
    "example": "I began to feel distinctly disturbed.",
    "exampleTr": "Örnek: belirgin biçimde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/distinctly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Distinctly\" - belirgin biçimde kavramı"
  },
  {
    "id": "inv-chiefly",
    "word": "chiefly",
    "normalized": "chiefly",
    "lemma": "chiefly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "başlıca"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Chiefly\" - başlıca kavramı",
    "example": "The city chiefly attracts upmarket tourists.",
    "exampleTr": "Örnek: başlıca bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/chiefly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Chiefly\" - başlıca kavramı"
  },
  {
    "id": "inv-fortunately",
    "word": "fortunately",
    "normalized": "fortunately",
    "lemma": "fortunately",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "şans eseri",
      "neyse ki"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Fortunately\" - şans eseri neyse ki kavramı",
    "example": "I was late, but fortunately, the lesson hadn’t started.",
    "exampleTr": "Örnek: şans eseri neyse ki bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/fortunately/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Fortunately\" - şans eseri neyse ki kavramı"
  },
  {
    "id": "inv-lately",
    "word": "lately",
    "normalized": "lately",
    "lemma": "lately",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "son zamanlarda"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Lately\" - son zamanlarda kavramı",
    "example": "Have you seen her lately?",
    "exampleTr": "Örnek: son zamanlarda bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/lately/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Lately\" - son zamanlarda kavramı"
  },
  {
    "id": "inv-abruptly",
    "word": "abruptly",
    "normalized": "abruptly",
    "lemma": "abruptly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "ansızın",
      "birdenbire"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Abruptly\" - ansızın birdenbire kavramı",
    "example": "The call ended abruptly.",
    "exampleTr": "Örnek: ansızın birdenbire bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/abruptly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Abruptly\" - ansızın birdenbire kavramı"
  },
  {
    "id": "inv-indefinitely",
    "word": "indefinitely",
    "normalized": "indefinitely",
    "lemma": "indefinitely",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "belirsiz olarak süresiz olarak"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Indefinitely\" - belirsiz olarak süresiz olasak kavramı",
    "example": "The negotiations have been postponed indefinitely.",
    "exampleTr": "Örnek: belirsiz olarak süresiz olasak bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/indefinitely/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Indefinitely\" - belirsiz olarak süresiz olasak kavramı"
  },
  {
    "id": "inv-sufficiently",
    "word": "sufficiently",
    "normalized": "sufficiently",
    "lemma": "sufficiently",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "yeteri kadar",
      "yeterli miktarda"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Sufficiently\" - yeteri kadar yeterli miktarda kavramı",
    "example": "The following day she felt sufficiently well to go to work.",
    "exampleTr": "Örnek: yeteri kadar yeterli miktarda bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/sufficiently/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Sufficiently\" - yeteri kadar yeterli miktarda kavramı"
  },
  {
    "id": "inv-casually",
    "word": "casually",
    "normalized": "casually",
    "lemma": "casually",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "gelişigüzel bir biçimde günlük",
      "sıradan"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Casually\" - gelişigüzel bir biçimde günlük kavramı",
    "example": "He glanced casually out of the window.",
    "exampleTr": "Örnek: gelişigüzel bir biçimde günlük bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/casually/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Casually\" - gelişigüzel bir biçimde günlük kavramı"
  },
  {
    "id": "inv-abundantly",
    "word": "abundantly",
    "normalized": "abundantly",
    "lemma": "abundantly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "bol bol",
      "fazlasıyla"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Abundantly\" - bol bol kavramı",
    "example": "Calcium is found most abundantly in milk.",
    "exampleTr": "Örnek: bol bol bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/abundantly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Abundantly\" - bol bol kavramı"
  },
  {
    "id": "inv-repeatedly",
    "word": "repeatedly",
    "normalized": "repeatedly",
    "lemma": "repeatedly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "tekrar tekrar"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Repeatedly\" - tekrar tekrar kavramı",
    "example": "Your mother called you repeatedly, why didn’t you pick up the phone?",
    "exampleTr": "Örnek: tekrar tekrar bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/repeatedly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Repeatedly\" - tekrar tekrar kavramı"
  },
  {
    "id": "inv-severely",
    "word": "severely",
    "normalized": "severely",
    "lemma": "severely",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "ciddi olarak",
      "ağır biçimde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Severely\" - ciddi olarak ağır biçimde kavramı",
    "example": "Several people were severely injured in the accident.",
    "exampleTr": "Örnek: ciddi olarak ağır biçimde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/severely/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Severely\" - ciddi olarak ağır biçimde kavramı"
  },
  {
    "id": "inv-accurately",
    "word": "accurately",
    "normalized": "accurately",
    "lemma": "accurately",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "kesin",
      "tam olarak doğru olarak"
    ],
    "englishDefinition": "Bullseye hit with laser precision in analytics - Hatasız ve tam isabet",
    "example": "The adverb \"Accurately\" is commonly tested in academic reading passages.",
    "exampleTr": "\"Accurately\" zarfı akademik YDS metinlerinde sıklıkla karşımıza çıkar.",
    "pronunciation": "/accurately/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Bullseye hit with laser precision in analytics - Hatasız ve tam isabet"
  },
  {
    "id": "inv-voluntarily",
    "word": "voluntarily",
    "normalized": "voluntarily",
    "lemma": "voluntarily",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "gönüllü olarak",
      "kendi isteğiyle"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Voluntarily\" - gönüllü olarak kendi isteğiyle kavramı",
    "example": "She went voluntarily to the police to explain what she had done.",
    "exampleTr": "Örnek: gönüllü olarak kendi isteğiyle bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/voluntarily/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Voluntarily\" - gönüllü olarak kendi isteğiyle kavramı"
  },
  {
    "id": "inv-tightly",
    "word": "tightly",
    "normalized": "tightly",
    "lemma": "tightly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "sıkı olarak"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Tightly\" - sıkı olarak kavramı",
    "example": "Her eyes were tightly closed.",
    "exampleTr": "Örnek: sıkı olarak bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/tightly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Tightly\" - sıkı olarak kavramı"
  },
  {
    "id": "inv-continually",
    "word": "continually",
    "normalized": "continually",
    "lemma": "continually",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "devamlı",
      "durmadan"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Continually\" - devamlı kavramı",
    "example": "New products are continually being developed.",
    "exampleTr": "Örnek: devamlı bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/continually/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Continually\" - devamlı kavramı"
  },
  {
    "id": "inv-effortlessly",
    "word": "effortlessly",
    "normalized": "effortlessly",
    "lemma": "effortlessly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "çaba harcamadan"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Effortlessly\" - çaba harcamadan kavramı",
    "example": "She got used to her new dorm effortlessly.",
    "exampleTr": "Örnek: çaba harcamadan bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/effortlesly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Effortlessly\" - çaba harcamadan kavramı"
  },
  {
    "id": "inv-intentionally",
    "word": "intentionally",
    "normalized": "intentionally",
    "lemma": "intentionally",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "kasıtlı olarak",
      "bile bile"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Intentionally\" - kasıtlı olarak bile bile kavramı",
    "example": "I didn’t ignore her intentionally, I just didn’t recognize her.",
    "exampleTr": "Örnek: kasıtlı olarak bile bile bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/intentionally/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Intentionally\" - kasıtlı olarak bile bile kavramı"
  },
  {
    "id": "inv-inconsiderately",
    "word": "inconsiderately",
    "normalized": "inconsiderately",
    "lemma": "inconsiderately",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "düşüncesizce başkalarının düşüncelerini",
      "umursamadan"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Inconsiderately\" - düşüncesizce başkalarının düşüncelerini\numursamadan kavramı",
    "example": "People often drive carelessly and inconsiderately.",
    "exampleTr": "Örnek: düşüncesizce başkalarının düşüncelerini\numursamadan bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/inconsiderately/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Inconsiderately\" - düşüncesizce başkalarının düşüncelerini\numursamadan kavramı"
  },
  {
    "id": "inv-selectively",
    "word": "selectively",
    "normalized": "selectively",
    "lemma": "selectively",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "seçerek",
      "titizlikle"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Selectively\" - seçerek kavramı",
    "example": "They selectively removed trees that were diseased.",
    "exampleTr": "Örnek: seçerek bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/selectively/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Selectively\" - seçerek kavramı"
  },
  {
    "id": "inv-confidentially",
    "word": "confidentially",
    "normalized": "confidentially",
    "lemma": "confidentially",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "sır olarak",
      "gizlice"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Confidentially\" - sır olarak gizlice kavramı",
    "example": "All information supplied must be treated confidentially.",
    "exampleTr": "Örnek: sır olarak gizlice bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/confidentially/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Confidentially\" - sır olarak gizlice kavramı"
  },
  {
    "id": "inv-exceedingly",
    "word": "exceedingly",
    "normalized": "exceedingly",
    "lemma": "exceedingly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "fazlasıyla",
      "çok"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Exceedingly\" - fazlasıyla kavramı",
    "example": "The team played exceedingly well.",
    "exampleTr": "Örnek: fazlasıyla bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/exceedingly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Exceedingly\" - fazlasıyla kavramı"
  },
  {
    "id": "inv-plainly",
    "word": "plainly",
    "normalized": "plainly",
    "lemma": "plainly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "açıkça",
      "sade bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Plainly\" - açıkça sade bir şekilde kavramı",
    "example": "Every footstep could be painly heard. a plainly furnished room",
    "exampleTr": "Örnek: açıkça sade bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/plainly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Plainly\" - açıkça sade bir şekilde kavramı"
  },
  {
    "id": "inv-urgently",
    "word": "urgently",
    "normalized": "urgently",
    "lemma": "urgently",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "acilen"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Urgently\" - acilen kavramı",
    "example": "I need to speak to her urgently.",
    "exampleTr": "Örnek: acilen bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/urgently/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Urgently\" - acilen kavramı"
  },
  {
    "id": "inv-superficially",
    "word": "superficially",
    "normalized": "superficially",
    "lemma": "superficially",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "yüzeysel",
      "üstünkörü"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Superficially\" - yüzeysel kavramı",
    "example": "The arguments were superficially discussed.",
    "exampleTr": "Örnek: yüzeysel bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/superficially/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Superficially\" - yüzeysel kavramı"
  },
  {
    "id": "inv-desperately",
    "word": "desperately",
    "normalized": "desperately",
    "lemma": "desperately",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "aşırı",
      "umutsuzca"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Desperately\" - aşırı\numutsuzca kavramı",
    "example": "They fought desperately for their lives.",
    "exampleTr": "Örnek: aşırı\numutsuzca bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/desperately/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Desperately\" - aşırı\numutsuzca kavramı"
  },
  {
    "id": "inv-excessively",
    "word": "excessively",
    "normalized": "excessively",
    "lemma": "excessively",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "aşırı şekilde",
      "haddinden fazla"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Excessively\" - aşırı şekilde\nhaddinden fazla kavramı",
    "example": "The music was excessively loud, so I couldn’t sleep.",
    "exampleTr": "Örnek: aşırı şekilde\nhaddinden fazla bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/excessively/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Excessively\" - aşırı şekilde\nhaddinden fazla kavramı"
  },
  {
    "id": "inv-uniquely",
    "word": "uniquely",
    "normalized": "uniquely",
    "lemma": "uniquely",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "eşsiz olarak"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Uniquely\" - eşsiz olarak kavramı",
    "example": "She was a uniquely gifted teacher.",
    "exampleTr": "Örnek: eşsiz olarak bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/uniquely/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Uniquely\" - eşsiz olarak kavramı"
  },
  {
    "id": "inv-tremendously",
    "word": "tremendously",
    "normalized": "tremendously",
    "lemma": "tremendously",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "son derece",
      "olağanüstü düzeyde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Tremendously\" - son derece olağanüstü düzeyde kavramı",
    "example": "Our water resources are tremendously important.",
    "exampleTr": "Örnek: son derece olağanüstü düzeyde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/tremendously/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Tremendously\" - son derece olağanüstü düzeyde kavramı"
  },
  {
    "id": "inv-enormously",
    "word": "enormously",
    "normalized": "enormously",
    "lemma": "enormously",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "çokça",
      "pek çok"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Enormously\" - çokça kavramı",
    "example": "He worked enormously hard on the project.",
    "exampleTr": "Örnek: çokça bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/enormously/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Enormously\" - çokça kavramı"
  },
  {
    "id": "inv-adequately",
    "word": "adequately",
    "normalized": "adequately",
    "lemma": "adequately",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "yeterli olarak"
    ],
    "englishDefinition": "Water cup filled exactly to the optimal required line - Gerekeni tam karşılayan yeterlilik",
    "example": "We have not invested adequately in the public health capacity of developing countries.",
    "exampleTr": "Örnek: yeterli olarak bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/adequately/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Water cup filled exactly to the optimal required line - Gerekeni tam karşılayan yeterlilik"
  },
  {
    "id": "inv-fluently",
    "word": "fluently",
    "normalized": "fluently",
    "lemma": "fluently",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "akıcı bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Fluently\" - akıcı bir şekilde kavramı",
    "example": "I’d like to speak French fluently.",
    "exampleTr": "Örnek: akıcı bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/fluently/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Fluently\" - akıcı bir şekilde kavramı"
  },
  {
    "id": "inv-kindly",
    "word": "kindly",
    "normalized": "kindly",
    "lemma": "kindly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "nazikçe",
      "kibarca"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Kindly\" - nazikçe kavramı",
    "example": "She has very kindly offered to help.",
    "exampleTr": "Örnek: nazikçe bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/kindly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Kindly\" - nazikçe kavramı"
  },
  {
    "id": "inv-potentially",
    "word": "potentially",
    "normalized": "potentially",
    "lemma": "potentially",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "imkan dahilinde",
      "potansiyel olarak"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Potentially\" - imkan dahilinde potansiyel olarak kavramı",
    "example": "Hepatitis is a potentially fatal disease.",
    "exampleTr": "Örnek: imkan dahilinde potansiyel olarak bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/potentially/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Potentially\" - imkan dahilinde potansiyel olarak kavramı"
  },
  {
    "id": "inv-appropriately",
    "word": "appropriately",
    "normalized": "appropriately",
    "lemma": "appropriately",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "uygun bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Appropriately\" - uygun bir şekilde kavramı",
    "example": "She didn’t dress appropriately for the wedding.",
    "exampleTr": "Örnek: uygun bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/appropriately/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Appropriately\" - uygun bir şekilde kavramı"
  },
  {
    "id": "inv-conveniently",
    "word": "conveniently",
    "normalized": "conveniently",
    "lemma": "conveniently",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "rahatlıkla",
      "kolayca"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Conveniently\" - rahatlıkla kavramı",
    "example": "The report can be conveniently divided into three sections.",
    "exampleTr": "Örnek: rahatlıkla bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/conveniently/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Conveniently\" - rahatlıkla kavramı"
  },
  {
    "id": "inv-traditionally",
    "word": "traditionally",
    "normalized": "traditionally",
    "lemma": "traditionally",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "geleneksel olarak"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Traditionally\" - geleneksel olarak kavramı",
    "example": "The festival is traditionally held in May.",
    "exampleTr": "Örnek: geleneksel olarak bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/traditionally/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Traditionally\" - geleneksel olarak kavramı"
  },
  {
    "id": "inv-promptly",
    "word": "promptly",
    "normalized": "promptly",
    "lemma": "promptly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "derhal",
      "acilen tam zamanında"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Promptly\" - derhal kavramı",
    "example": "I try to answer readers’ letters as promptly as I can.",
    "exampleTr": "Örnek: derhal bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/promptly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Promptly\" - derhal kavramı"
  },
  {
    "id": "inv-firmly",
    "word": "firmly",
    "normalized": "firmly",
    "lemma": "firmly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "sıkı bir şekilde",
      "kesin olarak"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Firmly\" - sıkı bir şekilde kesin olarak kavramı",
    "example": "He shook my hand firmly.",
    "exampleTr": "Örnek: sıkı bir şekilde kesin olarak bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/firmly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Firmly\" - sıkı bir şekilde kesin olarak kavramı"
  },
  {
    "id": "inv-instantly",
    "word": "instantly",
    "normalized": "instantly",
    "lemma": "instantly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "hemen",
      "anında birden"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Instantly\" - hemen kavramı",
    "example": "Her voice is instantly recognizable.",
    "exampleTr": "Örnek: hemen bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/instantly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Instantly\" - hemen kavramı"
  },
  {
    "id": "inv-inadequately",
    "word": "inadequately",
    "normalized": "inadequately",
    "lemma": "inadequately",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "yarım yamalak",
      "yetersiz bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Inadequately\" - yarım yamalak yetersiz bir şekilde kavramı",
    "example": "Staff were inadequately trained and failed to carry out their duties.",
    "exampleTr": "Örnek: yarım yamalak yetersiz bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/inadequately/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Inadequately\" - yarım yamalak yetersiz bir şekilde kavramı"
  },
  {
    "id": "inv-safely",
    "word": "safely",
    "normalized": "safely",
    "lemma": "safely",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "güvenli bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Safely\" - güvenli bir şekilde kavramı",
    "example": "Drive safely, don’t take any risks!",
    "exampleTr": "Örnek: güvenli bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/safely/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Safely\" - güvenli bir şekilde kavramı"
  },
  {
    "id": "inv-reliably",
    "word": "reliably",
    "normalized": "reliably",
    "lemma": "reliably",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "hatasız",
      "eksiksiz",
      "güvenilir"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Reliably\" - hatasız kavramı",
    "example": "I’m reliably informed that you’ve been talking about resigning from the company.",
    "exampleTr": "Örnek: hatasız bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/reliably/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Reliably\" - hatasız kavramı"
  },
  {
    "id": "inv-socially",
    "word": "socially",
    "normalized": "socially",
    "lemma": "socially",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "sosyal açıdan"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Socially\" - sosyal açıdan kavramı",
    "example": "Divorce is becoming more socially accepted.",
    "exampleTr": "Örnek: sosyal açıdan bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/socially/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Socially\" - sosyal açıdan kavramı"
  },
  {
    "id": "inv-consistently",
    "word": "consistently",
    "normalized": "consistently",
    "lemma": "consistently",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "sürekli olarak"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Consistently\" - sürekli olarak kavramı",
    "example": "The president has consistently denied the rumours.",
    "exampleTr": "Örnek: sürekli olarak bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/consistently/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Consistently\" - sürekli olarak kavramı"
  },
  {
    "id": "inv-immensely",
    "word": "immensely",
    "normalized": "immensely",
    "lemma": "immensely",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "son derece",
      "çok fazla"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Immensely\" - son derece kavramı",
    "example": "He was immensely popular in his day.",
    "exampleTr": "Örnek: son derece bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/immensely/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Immensely\" - son derece kavramı"
  },
  {
    "id": "inv-arguably",
    "word": "arguably",
    "normalized": "arguably",
    "lemma": "arguably",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "tartışmaya açık bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Arguably\" - tartışmaya açık bir şekilde kavramı",
    "example": "He is arguably the world’s best football player.",
    "exampleTr": "Örnek: tartışmaya açık bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/arguably/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Arguably\" - tartışmaya açık bir şekilde kavramı"
  },
  {
    "id": "inv-legally",
    "word": "legally",
    "normalized": "legally",
    "lemma": "legally",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "hukuken",
      "yasal olarak"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Legally\" - hukuken kavramı",
    "example": "Children under 16 are not legally allowed to buy cigarattes.",
    "exampleTr": "Örnek: hukuken bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/legally/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Legally\" - hukuken kavramı"
  },
  {
    "id": "inv-conclusively",
    "word": "conclusively",
    "normalized": "conclusively",
    "lemma": "conclusively",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "kesin olarak"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Conclusively\" - kesin olarak kavramı",
    "example": "The story had been conclusively debunked.",
    "exampleTr": "Örnek: kesin olarak bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/conclusively/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Conclusively\" - kesin olarak kavramı"
  },
  {
    "id": "inv-doubtfully",
    "word": "doubtfully",
    "normalized": "doubtfully",
    "lemma": "doubtfully",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "tereddütle",
      "kuşkuyla"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Doubtfully\" - tereddütle kavramı",
    "example": "“Are you telling me the truth?” she asked doubtfully.",
    "exampleTr": "Örnek: tereddütle bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/doubtfully/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Doubtfully\" - tereddütle kavramı"
  },
  {
    "id": "inv-violently",
    "word": "violently",
    "normalized": "violently",
    "lemma": "violently",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "şiddetle",
      "kuvvetle"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Violently\" - şiddetle kavramı",
    "example": "He claimed to have been violently assaulted while in detention.",
    "exampleTr": "Örnek: şiddetle bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/violently/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Violently\" - şiddetle kavramı"
  },
  {
    "id": "inv-cautiously",
    "word": "cautiously",
    "normalized": "cautiously",
    "lemma": "cautiously",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "dikkatlice",
      "temkinli"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Cautiously\" - dikkatlice kavramı",
    "example": "She moved slowly and cautiously along the dark rocky path.",
    "exampleTr": "Örnek: dikkatlice bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/cautiously/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Cautiously\" - dikkatlice kavramı"
  },
  {
    "id": "inv-suitably",
    "word": "suitably",
    "normalized": "suitably",
    "lemma": "suitably",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "uygun bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Suitably\" - uygun bir şekilde kavramı",
    "example": "He was afraid he might not have behaved suitably.",
    "exampleTr": "Örnek: uygun bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/suitably/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Suitably\" - uygun bir şekilde kavramı"
  },
  {
    "id": "inv-abnormally",
    "word": "abnormally",
    "normalized": "abnormally",
    "lemma": "abnormally",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "anormal bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Abnormally\" - anormal bir şekilde kavramı",
    "example": "The success rate was abnormally low.",
    "exampleTr": "Örnek: anormal bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/abnormally/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Abnormally\" - anormal bir şekilde kavramı"
  },
  {
    "id": "inv-brutally",
    "word": "brutally",
    "normalized": "brutally",
    "lemma": "brutally",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "vahşice",
      "hunharca"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Brutally\" - vahşice kavramı",
    "example": "The old lady had been brutally attacked.",
    "exampleTr": "Örnek: vahşice bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/brutally/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Brutally\" - vahşice kavramı"
  },
  {
    "id": "inv-decisively",
    "word": "decisively",
    "normalized": "decisively",
    "lemma": "decisively",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "kati surette",
      "kararlı bir biçimde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Decisively\" - kati surette kavramı",
    "example": "My bet is that he will desicively win the next election.",
    "exampleTr": "Örnek: kati surette bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/decisively/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Decisively\" - kati surette kavramı"
  },
  {
    "id": "inv-favourably",
    "word": "favourably",
    "normalized": "favourably",
    "lemma": "favourably",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "tercihen",
      "daha iyisi",
      "uygun olarak"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Favourably\" - tercihen kavramı",
    "example": "Our products compare favourably with all the leading brands.",
    "exampleTr": "Örnek: tercihen bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/favourably/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Favourably\" - tercihen kavramı"
  },
  {
    "id": "inv-evenly",
    "word": "evenly",
    "normalized": "evenly",
    "lemma": "evenly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "aynı oranda",
      "tarafsızca eşit olarak"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Evenly\" - aynı oranda kavramı",
    "example": "Divide the mixture evenly between the two pans.",
    "exampleTr": "Örnek: aynı oranda bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/evenly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Evenly\" - aynı oranda kavramı"
  },
  {
    "id": "inv-inclusively",
    "word": "inclusively",
    "normalized": "inclusively",
    "lemma": "inclusively",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "kapsamlı bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Inclusively\" - kapsamlı bir şekilde kavramı",
    "example": "The contracts are prepared very inclusively by the law department of the publishers.",
    "exampleTr": "Örnek: kapsamlı bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/inclusively/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Inclusively\" - kapsamlı bir şekilde kavramı"
  },
  {
    "id": "inv-indifferently",
    "word": "indifferently",
    "normalized": "indifferently",
    "lemma": "indifferently",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "kayıtsızca",
      "ilgisizce"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Indifferently\" - kayıtsızca kavramı",
    "example": "“You can try,” said Harry indifferently.",
    "exampleTr": "Örnek: kayıtsızca bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/indifferently/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Indifferently\" - kayıtsızca kavramı"
  },
  {
    "id": "inv-mutually",
    "word": "mutually",
    "normalized": "mutually",
    "lemma": "mutually",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "karşılıklı olarak"
    ],
    "englishDefinition": "Two professionals shaking hands sealing an HR partnership - Karşılıklı ortak fayda",
    "example": "Can we find a mutually convenient time to meet?",
    "exampleTr": "Örnek: karşılıklı olarak bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/mutually/",
    "sourceTags": [
      "flashcards",
      "other"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Two professionals shaking hands sealing an HR partnership - Karşılıklı ortak fayda"
  },
  {
    "id": "inv-sensitively",
    "word": "sensitively",
    "normalized": "sensitively",
    "lemma": "sensitively",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "duyarlı",
      "hassas bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Sensitively\" - duyarlı kavramı",
    "example": "She worried that she might have reacted too sensitively.",
    "exampleTr": "Örnek: duyarlı bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/sensitively/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Sensitively\" - duyarlı kavramı"
  },
  {
    "id": "inv-attentively",
    "word": "attentively",
    "normalized": "attentively",
    "lemma": "attentively",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "dikkatlice"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Attentively\" - dikkatlice kavramı",
    "example": "The children listened attentively to the story.",
    "exampleTr": "Örnek: dikkatlice bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/attentively/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Attentively\" - dikkatlice kavramı"
  },
  {
    "id": "inv-successively",
    "word": "successively",
    "normalized": "successively",
    "lemma": "successively",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "art arda",
      "sıra ile"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Successively\" - art arda kavramı",
    "example": "This concept has been applied successively to painting and architecture.",
    "exampleTr": "Örnek: art arda bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/successively/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Successively\" - art arda kavramı"
  },
  {
    "id": "inv-flexibly",
    "word": "flexibly",
    "normalized": "flexibly",
    "lemma": "flexibly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "esnek bir şekilde",
      "değişken"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Flexibly\" - esnek bir şekilde kavramı",
    "example": "Managers must respond flexibly to new developments in business.",
    "exampleTr": "Örnek: esnek bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/flexibly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Flexibly\" - esnek bir şekilde kavramı"
  },
  {
    "id": "inv-recklessly",
    "word": "recklessly",
    "normalized": "recklessly",
    "lemma": "recklessly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "düşünmeden",
      "çekinmeden"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Recklessly\" - düşünmeden kavramı",
    "example": "After the accident, he admitted driving recklessly.",
    "exampleTr": "Örnek: düşünmeden bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/recklessly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Recklessly\" - düşünmeden kavramı"
  },
  {
    "id": "inv-plausibly",
    "word": "plausibly",
    "normalized": "plausibly",
    "lemma": "plausibly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "makul bir biçimde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Plausibly\" - makul bir biçimde kavramı",
    "example": "He argued very plausibly that the claims were true.",
    "exampleTr": "Örnek: makul bir biçimde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/plausibly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Plausibly\" - makul bir biçimde kavramı"
  },
  {
    "id": "inv-coincidentally",
    "word": "coincidentally",
    "normalized": "coincidentally",
    "lemma": "coincidentally",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "tesadüfen",
      "şans eseri"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Coincidentally\" - tesadüfen kavramı",
    "example": "Coincidentally, they had both studied in Los Angeles.",
    "exampleTr": "Örnek: tesadüfen bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/coincidentally/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Coincidentally\" - tesadüfen kavramı"
  },
  {
    "id": "inv-distantly",
    "word": "distantly",
    "normalized": "distantly",
    "lemma": "distantly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "mesafeli",
      "soğuk bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Distantly\" - mesafeli kavramı",
    "example": "She spoke to me distantly.",
    "exampleTr": "Örnek: mesafeli bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/distantly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Distantly\" - mesafeli kavramı"
  },
  {
    "id": "inv-externally",
    "word": "externally",
    "normalized": "externally",
    "lemma": "externally",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "dıştan",
      "harici olarak"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Externally\" - dıştan kavramı",
    "example": "The university has many externally funded research projects.",
    "exampleTr": "Örnek: dıştan bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/externally/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Externally\" - dıştan kavramı"
  },
  {
    "id": "inv-ingeniously",
    "word": "ingeniously",
    "normalized": "ingeniously",
    "lemma": "ingeniously",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "ustalıkla"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Ingeniously\" - ustalıkla kavramı",
    "example": "Rooms ingeniously designed to withstand the most devastating earthquakes.",
    "exampleTr": "Örnek: ustalıkla bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/ingeniously/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Ingeniously\" - ustalıkla kavramı"
  },
  {
    "id": "inv-offensively",
    "word": "offensively",
    "normalized": "offensively",
    "lemma": "offensively",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "saldırganca",
      "kırıcı bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Offensively\" - saldırganca kavramı",
    "example": "He later apologized for speaking offensively about her.",
    "exampleTr": "Örnek: saldırganca bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/offensively/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Offensively\" - saldırganca kavramı"
  },
  {
    "id": "inv-painfully",
    "word": "painfully",
    "normalized": "painfully",
    "lemma": "painfully",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "acı verici abartılı"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Painfully\" - acı verici abartılı kavramı",
    "example": "He banged his pinky finger painfully.",
    "exampleTr": "Örnek: acı verici abartılı bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/painfully/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Painfully\" - acı verici abartılı kavramı"
  },
  {
    "id": "inv-conditionally",
    "word": "conditionally",
    "normalized": "conditionally",
    "lemma": "conditionally",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "bir şarta bağlı olarak"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Conditionally\" - bir şarta bağlı olarak kavramı",
    "example": "The offer was made conditionally.",
    "exampleTr": "Örnek: bir şarta bağlı olarak bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/conditionally/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Conditionally\" - bir şarta bağlı olarak kavramı"
  },
  {
    "id": "inv-relevantly",
    "word": "relevantly",
    "normalized": "relevantly",
    "lemma": "relevantly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "yararlı bir şekilde",
      "ilgili bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Relevantly\" - yararlı bir şekilde ilgili bir şekilde kavramı",
    "example": "The applicant has experience in teaching and, more relevantly, in industry.",
    "exampleTr": "Örnek: yararlı bir şekilde ilgili bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/relevantly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Relevantly\" - yararlı bir şekilde ilgili bir şekilde kavramı"
  },
  {
    "id": "inv-compulsively",
    "word": "compulsively",
    "normalized": "compulsively",
    "lemma": "compulsively",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "zorlayıcı olarak",
      "zorunlu"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Compulsively\" - zorlayıcı olarak kavramı",
    "example": "I constantly counted calories and exercised compulsively.",
    "exampleTr": "Örnek: zorlayıcı olarak bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/compulsively/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Compulsively\" - zorlayıcı olarak kavramı"
  },
  {
    "id": "inv-suspiciously",
    "word": "suspiciously",
    "normalized": "suspiciously",
    "lemma": "suspiciously",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "kuşkuyla",
      "şüpheyle"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Suspiciously\" - kuşkuyla kavramı",
    "example": "He was arrested after behaving suspiciously.",
    "exampleTr": "Örnek: kuşkuyla bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/suspiciously/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Suspiciously\" - kuşkuyla kavramı"
  },
  {
    "id": "inv-entirely",
    "word": "entirely",
    "normalized": "entirely",
    "lemma": "entirely",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "tümüyle",
      "büsbütün"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Entirely\" - tümüyle kavramı",
    "example": "The traffic seemed to consist entirely of black cabs.",
    "exampleTr": "Örnek: tümüyle bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/entirely/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Entirely\" - tümüyle kavramı"
  },
  {
    "id": "inv-primarily",
    "word": "primarily",
    "normalized": "primarily",
    "lemma": "primarily",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "öncelikle",
      "ilk olarak"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Primarily\" - öncelikle kavramı",
    "example": "The problem is not primarily a financial one.",
    "exampleTr": "Örnek: öncelikle bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/primarily/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Primarily\" - öncelikle kavramı"
  },
  {
    "id": "inv-rarely",
    "word": "rarely",
    "normalized": "rarely",
    "lemma": "rarely",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "nadiren",
      "ender olarak"
    ],
    "englishDefinition": "A solar eclipse visible only once a decade - Ender ve nadir görülen",
    "example": "I rarely have time to readthe newspaper.",
    "exampleTr": "Örnek: nadiren bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/rarely/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "A solar eclipse visible only once a decade - Ender ve nadir görülen"
  },
  {
    "id": "inv-vividly",
    "word": "vividly",
    "normalized": "vividly",
    "lemma": "vividly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "belirgin bir şekilde",
      "açıkça algılanabilir bir şekilde"
    ],
    "englishDefinition": "High-definition 4K sharp display screen - Net ve capcanlı hatırlanan",
    "example": "I vividly remember my first day at school.",
    "exampleTr": "Örnek: belirgin bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/vividly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "High-definition 4K sharp display screen - Net ve capcanlı hatırlanan"
  },
  {
    "id": "inv-divisively",
    "word": "divisively",
    "normalized": "divisively",
    "lemma": "divisively",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "bölücü",
      "ara bozucu olarak"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Divisively\" - bölücü kavramı",
    "example": "The Institute must be seen as bringing groups of people together, not as acting divisively.",
    "exampleTr": "Örnek: bölücü bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/divisively/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Divisively\" - bölücü kavramı"
  },
  {
    "id": "inv-allegedly",
    "word": "allegedly",
    "normalized": "allegedly",
    "lemma": "allegedly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "iddiaya göre",
      "söylentilere göre"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Allegedly\" - iddiaya göre söylentilere göre kavramı",
    "example": "He was arrested for allegedly stealing a car.",
    "exampleTr": "Örnek: iddiaya göre söylentilere göre bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/allegedly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Allegedly\" - iddiaya göre söylentilere göre kavramı"
  },
  {
    "id": "inv-deficiently",
    "word": "deficiently",
    "normalized": "deficiently",
    "lemma": "deficiently",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "eksik şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Deficiently\" - eksik şekilde kavramı",
    "example": "The system was deficiently designed and implemented.",
    "exampleTr": "Örnek: eksik şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/deficiently/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Deficiently\" - eksik şekilde kavramı"
  },
  {
    "id": "inv-politely",
    "word": "politely",
    "normalized": "politely",
    "lemma": "politely",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "kibarca",
      "nazikçe"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Politely\" - kibarca kavramı",
    "example": "He told them politely to leave him in peace.",
    "exampleTr": "Örnek: kibarca bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/politely/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Politely\" - kibarca kavramı"
  },
  {
    "id": "inv-frankly",
    "word": "frankly",
    "normalized": "frankly",
    "lemma": "frankly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "açıkçası",
      "açıkça"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Frankly\" - açıkçası kavramı",
    "example": "She spoke very frankly about her experiences.",
    "exampleTr": "Örnek: açıkçası bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/frankly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Frankly\" - açıkçası kavramı"
  },
  {
    "id": "inv-deliberately",
    "word": "deliberately",
    "normalized": "deliberately",
    "lemma": "deliberately",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "kasten",
      "bilerek"
    ],
    "englishDefinition": "Chess player carefully calculating three moves ahead - Kasten ve bilerek atılan adım",
    "example": "I think she says these things deliberately to annoy me.",
    "exampleTr": "Örnek: kasten bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/deliberately/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Chess player carefully calculating three moves ahead - Kasten ve bilerek atılan adım"
  },
  {
    "id": "inv-preciously",
    "word": "preciously",
    "normalized": "preciously",
    "lemma": "preciously",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "ender olarak",
      "değerli bir biçimde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Preciously\" - ender olarak değerli bir biçimde kavramı",
    "example": "Thank you for treating me preciously.",
    "exampleTr": "Örnek: ender olarak değerli bir biçimde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/preciously/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Preciously\" - ender olarak değerli bir biçimde kavramı"
  },
  {
    "id": "inv-eventually",
    "word": "eventually",
    "normalized": "eventually",
    "lemma": "eventually",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "eninde sonunda"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Eventually\" - eninde sonunda kavramı",
    "example": "After a long search, they eventually found the missing papers.",
    "exampleTr": "Örnek: eninde sonunda bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/eventually/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Eventually\" - eninde sonunda kavramı"
  },
  {
    "id": "inv-sincerely",
    "word": "sincerely",
    "normalized": "sincerely",
    "lemma": "sincerely",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "samimi olarak candan",
      "içtenlikle"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Sincerely\" - samimi olarak candan kavramı",
    "example": "I sincerely believe that this is the right decision.",
    "exampleTr": "Örnek: samimi olarak candan bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/sincerely/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Sincerely\" - samimi olarak candan kavramı"
  },
  {
    "id": "inv-annually",
    "word": "annually",
    "normalized": "annually",
    "lemma": "annually",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "her yıl",
      "yılda bir"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Annually\" - her yıl kavramı",
    "example": "The exhibition is held annually.",
    "exampleTr": "Örnek: her yıl bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/annually/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Annually\" - her yıl kavramı"
  },
  {
    "id": "inv-privately",
    "word": "privately",
    "normalized": "privately",
    "lemma": "privately",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "özel olarak"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Privately\" - özel olarak kavramı",
    "example": "Can we speak privately?",
    "exampleTr": "Örnek: özel olarak bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/privately/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Privately\" - özel olarak kavramı"
  },
  {
    "id": "inv-formally",
    "word": "formally",
    "normalized": "formally",
    "lemma": "formally",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "resmi olarak"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Formally\" - resmi olarak kavramı",
    "example": "The accounts were formally approved by the board.",
    "exampleTr": "Örnek: resmi olarak bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/formally/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Formally\" - resmi olarak kavramı"
  },
  {
    "id": "inv-ineffectively",
    "word": "ineffectively",
    "normalized": "ineffectively",
    "lemma": "ineffectively",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "başarısız bir şekilde etkisiz",
      "sonuçsuz olarak"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Ineffectively\" - başarısız bir şekilde etkisiz kavramı",
    "example": "The government is dealing ineffectively with these economic problems.",
    "exampleTr": "Örnek: başarısız bir şekilde etkisiz bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/ineffectively/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Ineffectively\" - başarısız bir şekilde etkisiz kavramı"
  },
  {
    "id": "inv-incomparably",
    "word": "incomparably",
    "normalized": "incomparably",
    "lemma": "incomparably",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "benzersiz",
      "kıyaslanamaz bir biçimde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Incomparably\" - benzersiz kavramı",
    "example": "Her latest book is incomparably better than her earlier ones.",
    "exampleTr": "Örnek: benzersiz bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/incomparably/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Incomparably\" - benzersiz kavramı"
  },
  {
    "id": "inv-hospitably",
    "word": "hospitably",
    "normalized": "hospitably",
    "lemma": "hospitably",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "misafirperver olarak"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Hospitably\" - misafirperver olarak kavramı",
    "example": "She welcomed us hospitably.",
    "exampleTr": "Örnek: misafirperver olarak bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/hospitably/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Hospitably\" - misafirperver olarak kavramı"
  },
  {
    "id": "inv-sarcastically",
    "word": "sarcastically",
    "normalized": "sarcastically",
    "lemma": "sarcastically",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "alaycı bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Sarcastically\" - alaycı bir şekilde kavramı",
    "example": "‘John can’t come.’ ‘What a shame,’ my sister said sarcastically.",
    "exampleTr": "Örnek: alaycı bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/sarcastically/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Sarcastically\" - alaycı bir şekilde kavramı"
  },
  {
    "id": "inv-seriously",
    "word": "seriously",
    "normalized": "seriously",
    "lemma": "seriously",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "ciddi bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Seriously\" - ciddi bir şekilde kavramı",
    "example": "You are not seriously thinking of going, are you?",
    "exampleTr": "Örnek: ciddi bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/seriously/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Seriously\" - ciddi bir şekilde kavramı"
  },
  {
    "id": "inv-alternatively",
    "word": "alternatively",
    "normalized": "alternatively",
    "lemma": "alternatively",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "alternatif olarak"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Alternatively\" - alternatif olarak kavramı",
    "example": "Mix two tablespoons of sugar, or alternatively honey, into the mixture.",
    "exampleTr": "Örnek: alternatif olarak bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/alternatively/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Alternatively\" - alternatif olarak kavramı"
  },
  {
    "id": "inv-consecutively",
    "word": "consecutively",
    "normalized": "consecutively",
    "lemma": "consecutively",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "ardışık olarak",
      "peş peşe"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Consecutively\" - ardışık olarak kavramı",
    "example": "The plays will be performed consecutively and will last eight hours.",
    "exampleTr": "Örnek: ardışık olarak bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/consecutively/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Consecutively\" - ardışık olarak kavramı"
  },
  {
    "id": "inv-anxiously",
    "word": "anxiously",
    "normalized": "anxiously",
    "lemma": "anxiously",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "endişeyle"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Anxiously\" - endişeyle kavramı",
    "example": "Residents are anxiously awaiting a decision.",
    "exampleTr": "Örnek: endişeyle bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/anxiously/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Anxiously\" - endişeyle kavramı"
  },
  {
    "id": "inv-broadly",
    "word": "broadly",
    "normalized": "broadly",
    "lemma": "broadly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "genişçe",
      "kapsamlı bir biçimde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Broadly\" - genişçe kavramı",
    "example": "Broadly speaking, there are five artistic categories within the Western tradition.",
    "exampleTr": "Örnek: genişçe bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/broadly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Broadly\" - genişçe kavramı"
  },
  {
    "id": "inv-vehemently",
    "word": "vehemently",
    "normalized": "vehemently",
    "lemma": "vehemently",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "hararetli bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Vehemently\" - hararetli bir şekilde kavramı",
    "example": "The president has vehemently denied having an affair.",
    "exampleTr": "Örnek: hararetli bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/vehemently/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Vehemently\" - hararetli bir şekilde kavramı"
  },
  {
    "id": "inv-acutely",
    "word": "acutely",
    "normalized": "acutely",
    "lemma": "acutely",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "keskin",
      "güçlü bir şekilde yoğun bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Acutely\" - keskin/güçlü bir şekilde yoğun bir şekilde kavramı",
    "example": "I’m acutely aware of the difficulties we face.",
    "exampleTr": "Örnek: keskin/güçlü bir şekilde yoğun bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/acutely/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Acutely\" - keskin/güçlü bir şekilde yoğun bir şekilde kavramı"
  },
  {
    "id": "inv-assertively",
    "word": "assertively",
    "normalized": "assertively",
    "lemma": "assertively",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "güçlü",
      "özgüvenli bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Assertively\" - güçlü/özgüvenli bir şekilde kavramı",
    "example": "We should not be afraid to assertively condemn such actions.",
    "exampleTr": "Örnek: güçlü/özgüvenli bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/assertively/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Assertively\" - güçlü/özgüvenli bir şekilde kavramı"
  },
  {
    "id": "inv-dependently",
    "word": "dependently",
    "normalized": "dependently",
    "lemma": "dependently",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "başka bir duruma bağlı olarak"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Dependently\" - başka bir duruma bağlı olarak kavramı",
    "example": "A relationship with someone arises dependently on many causes.",
    "exampleTr": "Örnek: başka bir duruma bağlı olarak bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/dependently/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Dependently\" - başka bir duruma bağlı olarak kavramı"
  },
  {
    "id": "inv-protectively",
    "word": "protectively",
    "normalized": "protectively",
    "lemma": "protectively",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "koruyucu bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Protectively\" - koruyucu bir şekilde kavramı",
    "example": "He put an arm around her shoulder protectively.",
    "exampleTr": "Örnek: koruyucu bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/protectively/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Protectively\" - koruyucu bir şekilde kavramı"
  },
  {
    "id": "inv-progressively",
    "word": "progressively",
    "normalized": "progressively",
    "lemma": "progressively",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "devamlı olarak",
      "artan bir şekilde"
    ],
    "englishDefinition": "Step-by-step upward ladder ascent - Giderek ve kademeli artış",
    "example": "My eyesight has got progressively worse over the years.",
    "exampleTr": "Örnek: devamlı olarak bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/progressively/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Step-by-step upward ladder ascent - Giderek ve kademeli artış"
  },
  {
    "id": "inv-unfairly",
    "word": "unfairly",
    "normalized": "unfairly",
    "lemma": "unfairly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "haksızca",
      "adaletsiz bir biçimde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Unfairly\" - haksızca kavramı",
    "example": "They claim the police treat minorities unfairly.",
    "exampleTr": "Örnek: haksızca bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/unfairly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Unfairly\" - haksızca kavramı"
  },
  {
    "id": "inv-comfortably",
    "word": "comfortably",
    "normalized": "comfortably",
    "lemma": "comfortably",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "rahat bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Comfortably\" - rahat bir şekilde kavramı",
    "example": "All the rooms were comfortably furnished.",
    "exampleTr": "Örnek: rahat bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/comfortably/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Comfortably\" - rahat bir şekilde kavramı"
  },
  {
    "id": "inv-ambiguously",
    "word": "ambiguously",
    "normalized": "ambiguously",
    "lemma": "ambiguously",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "muğlak",
      "belirsiz olarak"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Ambiguously\" - muğlak/belirsiz olarak kavramı",
    "example": "The novel ends ambiguously, so I’m not sure what happened.",
    "exampleTr": "Örnek: muğlak/belirsiz olarak bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/ambiguously/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Ambiguously\" - muğlak/belirsiz olarak kavramı"
  },
  {
    "id": "inv-briskly",
    "word": "briskly",
    "normalized": "briskly",
    "lemma": "briskly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "istenilen hızda",
      "hareketli bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Briskly\" - istenilen hızda kavramı",
    "example": "She walked briskly over to the phone and answered it.",
    "exampleTr": "Örnek: istenilen hızda bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/briskly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Briskly\" - istenilen hızda kavramı"
  },
  {
    "id": "inv-covertly",
    "word": "covertly",
    "normalized": "covertly",
    "lemma": "covertly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "gizlice",
      "el altından"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Covertly\" - gizlice kavramı",
    "example": "Terrorists have been operating covertly in London.",
    "exampleTr": "Örnek: gizlice bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/covertly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Covertly\" - gizlice kavramı"
  },
  {
    "id": "inv-flawlessly",
    "word": "flawlessly",
    "normalized": "flawlessly",
    "lemma": "flawlessly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "kusursuz bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Flawlessly\" - kusursuz bir şekilde kavramı",
    "example": "This is an action film that is very well crafted and flawlessly executed.",
    "exampleTr": "Örnek: kusursuz bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/flawlessly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Flawlessly\" - kusursuz bir şekilde kavramı"
  },
  {
    "id": "inv-hastily",
    "word": "hastily",
    "normalized": "hastily",
    "lemma": "hastily",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "acilen",
      "apar topar"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Hastily\" - acilen kavramı",
    "example": "Some thought the government acted too hastily.",
    "exampleTr": "Örnek: acilen bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/hastily/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Hastily\" - acilen kavramı"
  },
  {
    "id": "inv-savagely",
    "word": "savagely",
    "normalized": "savagely",
    "lemma": "savagely",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "vahşice"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Savagely\" - vahşice kavramı",
    "example": "The man had been savagely beaten.",
    "exampleTr": "Örnek: vahşice bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/savagely/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Savagely\" - vahşice kavramı"
  },
  {
    "id": "inv-tenderly",
    "word": "tenderly",
    "normalized": "tenderly",
    "lemma": "tenderly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "kibarca",
      "nazikçe"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Tenderly\" - kibarca kavramı",
    "example": "He tenderly nursed the patient back to health.",
    "exampleTr": "Örnek: kibarca bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/tenderly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Tenderly\" - kibarca kavramı"
  },
  {
    "id": "inv-meticulously",
    "word": "meticulously",
    "normalized": "meticulously",
    "lemma": "meticulously",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "özenle",
      "titizlikle"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Meticulously\" - özenle kavramı",
    "example": "The entire project was meticulously planned.",
    "exampleTr": "Örnek: özenle bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/meticulously/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Meticulously\" - özenle kavramı"
  },
  {
    "id": "inv-vainly",
    "word": "vainly",
    "normalized": "vainly",
    "lemma": "vainly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "boşuna",
      "boş yere"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Vainly\" - boşuna kavramı",
    "example": "He shouted after them, vainly trying to attract their attention.",
    "exampleTr": "Örnek: boşuna bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/vainly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Vainly\" - boşuna kavramı"
  },
  {
    "id": "inv-delicately",
    "word": "delicately",
    "normalized": "delicately",
    "lemma": "delicately",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "dikkatle",
      "incelikle",
      "büyük bir özenle"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Delicately\" - dikkatle kavramı",
    "example": "Some goods needs to be handled delicately.",
    "exampleTr": "Örnek: dikkatle bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/delicately/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Delicately\" - dikkatle kavramı"
  },
  {
    "id": "inv-passionately",
    "word": "passionately",
    "normalized": "passionately",
    "lemma": "passionately",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "tutkuyla"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Passionately\" - tutkuyla kavramı",
    "example": "They are all passionately interested in environmental issues.",
    "exampleTr": "Örnek: tutkuyla bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/passionately/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Passionately\" - tutkuyla kavramı"
  },
  {
    "id": "inv-loosely",
    "word": "loosely",
    "normalized": "loosely",
    "lemma": "loosely",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "gevşek bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Loosely\" - gevşek bir şekilde kavramı",
    "example": "The parcel had only been loosely wrapped, and the paper had come off.",
    "exampleTr": "Örnek: gevşek bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/loosely/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Loosely\" - gevşek bir şekilde kavramı"
  },
  {
    "id": "inv-fiercely",
    "word": "fiercely",
    "normalized": "fiercely",
    "lemma": "fiercely",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "güçlü",
      "korkutucu bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Fiercely\" - güçlü kavramı",
    "example": "They remain fiercely opposed to outside intervention.",
    "exampleTr": "Örnek: güçlü bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/fiercely/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Fiercely\" - güçlü kavramı"
  },
  {
    "id": "inv-readily",
    "word": "readily",
    "normalized": "readily",
    "lemma": "readily",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "kolaylıkla",
      "rahatlıkla",
      "hemen anında"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Readily\" - kolaylıkla kavramı",
    "example": "All ingredients are readily available from your local store.",
    "exampleTr": "Örnek: kolaylıkla bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/readily/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Readily\" - kolaylıkla kavramı"
  },
  {
    "id": "inv-rigidly",
    "word": "rigidly",
    "normalized": "rigidly",
    "lemma": "rigidly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "sıkı sıkıya",
      "sert bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Rigidly\" - sıkı sıkıya kavramı",
    "example": "The speed limit must be rigidly enforced.",
    "exampleTr": "Örnek: sıkı sıkıya bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/rigidly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Rigidly\" - sıkı sıkıya kavramı"
  },
  {
    "id": "inv-eagerly",
    "word": "eagerly",
    "normalized": "eagerly",
    "lemma": "eagerly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "hevesle"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Eagerly\" - hevesle kavramı",
    "example": "They eagerly accepted my offer of hospitality.",
    "exampleTr": "Örnek: hevesle bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/eagerly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Eagerly\" - hevesle kavramı"
  },
  {
    "id": "inv-endlessly",
    "word": "endlessly",
    "normalized": "endlessly",
    "lemma": "endlessly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "sonsuz bir şekilde",
      "durmadan"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Endlessly\" - sonsuz bir şekilde kavramı",
    "example": "She talks endlessly about her problems.",
    "exampleTr": "Örnek: sonsuz bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/endlessly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Endlessly\" - sonsuz bir şekilde kavramı"
  },
  {
    "id": "inv-quickly",
    "word": "quickly",
    "normalized": "quickly",
    "lemma": "quickly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "hızlıca"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Quickly\" - hızlıca kavramı",
    "example": "The disease spreads quickly.",
    "exampleTr": "Örnek: hızlıca bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/quickly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Quickly\" - hızlıca kavramı"
  },
  {
    "id": "inv-securely",
    "word": "securely",
    "normalized": "securely",
    "lemma": "securely",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "emniyetli",
      "güvenli"
    ],
    "englishDefinition": "Double-locked armored vault with biometric shield - Güvenli ve emniyetli koruma",
    "example": "She locked the door securely behind her.",
    "exampleTr": "Örnek: emniyetli bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/securely/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Double-locked armored vault with biometric shield - Güvenli ve emniyetli koruma"
  },
  {
    "id": "inv-diligently",
    "word": "diligently",
    "normalized": "diligently",
    "lemma": "diligently",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "özenli bir şekilde"
    ],
    "englishDefinition": "Dedicated professional working with meticulous care - Özenli ve titiz çalışma",
    "example": "They worked diligently on the task they had been given.",
    "exampleTr": "Örnek: özenli bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/diligently/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Dedicated professional working with meticulous care - Özenli ve titiz çalışma"
  },
  {
    "id": "inv-dreadfully",
    "word": "dreadfully",
    "normalized": "dreadfully",
    "lemma": "dreadfully",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "korkunç bir şekilde",
      "çok fena"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Dreadfully\" - korkunç bir şekilde kavramı",
    "example": "She behaved dreadfully.",
    "exampleTr": "Örnek: korkunç bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/dreadfully/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Dreadfully\" - korkunç bir şekilde kavramı"
  },
  {
    "id": "inv-irreversibly",
    "word": "irreversibly",
    "normalized": "irreversibly",
    "lemma": "irreversibly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "geri dönülemez bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Irreversibly\" - geri dönülemez bir şekilde kavramı",
    "example": "The monument has already been irreversibly damaged.",
    "exampleTr": "Örnek: geri dönülemez bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/irreversibly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Irreversibly\" - geri dönülemez bir şekilde kavramı"
  },
  {
    "id": "inv-possibly",
    "word": "possibly",
    "normalized": "possibly",
    "lemma": "possibly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "muhtemel",
      "mümkün"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Possibly\" - muhtemel kavramı",
    "example": "He may possibly decide not to come, in which case there is no problem.",
    "exampleTr": "Örnek: muhtemel bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/possibly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Possibly\" - muhtemel kavramı"
  },
  {
    "id": "inv-steadily",
    "word": "steadily",
    "normalized": "steadily",
    "lemma": "steadily",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "istikrarlı bir şekilde",
      "sabit"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Steadily\" - istikrarlı bir şekilde kavramı",
    "example": "Prices have risen steadily.",
    "exampleTr": "Örnek: istikrarlı bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/steadily/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Steadily\" - istikrarlı bir şekilde kavramı"
  },
  {
    "id": "inv-hesitantly",
    "word": "hesitantly",
    "normalized": "hesitantly",
    "lemma": "hesitantly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "tereddütle"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Hesitantly\" - tereddütle kavramı",
    "example": "She approached the teacher hesitantly.",
    "exampleTr": "Örnek: tereddütle bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/hesitantly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Hesitantly\" - tereddütle kavramı"
  },
  {
    "id": "inv-fruitfully",
    "word": "fruitfully",
    "normalized": "fruitfully",
    "lemma": "fruitfully",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "yararlı",
      "kazançlı bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Fruitfully\" - yararlı kavramı",
    "example": "The research tools can be fruitfully. applied to other questions.",
    "exampleTr": "Örnek: yararlı bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/fruitfully/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Fruitfully\" - yararlı kavramı"
  },
  {
    "id": "inv-persistently",
    "word": "persistently",
    "normalized": "persistently",
    "lemma": "persistently",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "sürekli",
      "ısrarla",
      "devamlı olarak"
    ],
    "englishDefinition": "Water droplet carving rock through steady repetition - Israrla ve yılmadan devam",
    "example": "Schools with persistently low test scores would get an extra funding.",
    "exampleTr": "Örnek: sürekli bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/persistently/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Water droplet carving rock through steady repetition - Israrla ve yılmadan devam"
  },
  {
    "id": "inv-willingly",
    "word": "willingly",
    "normalized": "willingly",
    "lemma": "willingly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "seve seve",
      "isteyerek"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Willingly\" - seve seve kavramı",
    "example": "I would willingly help you if I weren’t going away tomorrow.",
    "exampleTr": "Örnek: seve seve bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/willingly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Willingly\" - seve seve kavramı"
  },
  {
    "id": "inv-comprehensively",
    "word": "comprehensively",
    "normalized": "comprehensively",
    "lemma": "comprehensively",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "kapsamlı",
      "ayrıntılı bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Comprehensively\" - kapsamlı kavramı",
    "example": "The matter has been comprehensively discussed.",
    "exampleTr": "Örnek: kapsamlı bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/comprehensively/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Comprehensively\" - kapsamlı kavramı"
  },
  {
    "id": "inv-inherently",
    "word": "inherently",
    "normalized": "inherently",
    "lemma": "inherently",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "doğal olarak",
      "özü gereği"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Inherently\" - doğal olarak kavramı",
    "example": "She felt the system was inherently unfair and unequal.",
    "exampleTr": "Örnek: doğal olarak bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/inherently/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Inherently\" - doğal olarak kavramı"
  },
  {
    "id": "inv-hopelessly",
    "word": "hopelessly",
    "normalized": "hopelessly",
    "lemma": "hopelessly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "ümitsiz bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Hopelessly\" - ümitsiz bir şekilde kavramı",
    "example": "They met at university and fell hopelessly in love.",
    "exampleTr": "Örnek: ümitsiz bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/hopelessly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Hopelessly\" - ümitsiz bir şekilde kavramı"
  },
  {
    "id": "inv-alertly",
    "word": "alertly",
    "normalized": "alertly",
    "lemma": "alertly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "tetikte olarak"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Alertly\" - tetikte olarak kavramı",
    "example": "She walked alertly down the street.",
    "exampleTr": "Örnek: tetikte olarak bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/alertly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Alertly\" - tetikte olarak kavramı"
  },
  {
    "id": "inv-fatally",
    "word": "fatally",
    "normalized": "fatally",
    "lemma": "fatally",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "ölümcül bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Fatally\" - ölümcül bir şekilde kavramı",
    "example": "The plan was fatally flawed from the start.",
    "exampleTr": "Örnek: ölümcül bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/fatally/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Fatally\" - ölümcül bir şekilde kavramı"
  },
  {
    "id": "inv-justly",
    "word": "justly",
    "normalized": "justly",
    "lemma": "justly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "adaletle",
      "doğru olarak"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Justly\" - adaletle kavramı",
    "example": "He was justly condemned to a long prison sentence.",
    "exampleTr": "Örnek: adaletle bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/justly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Justly\" - adaletle kavramı"
  },
  {
    "id": "inv-wrongly",
    "word": "wrongly",
    "normalized": "wrongly",
    "lemma": "wrongly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "hatalı bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Wrongly\" - hatalı bir şekilde kavramı",
    "example": "Several people were wrongly convicted.",
    "exampleTr": "Örnek: hatalı bir şekilde bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/wrongly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Wrongly\" - hatalı bir şekilde kavramı"
  },
  {
    "id": "inv-determinedly",
    "word": "determinedly",
    "normalized": "determinedly",
    "lemma": "determinedly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "kesin olarak",
      "kararlı bir şekilde"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Determinedly\" - kesin olarak kavramı",
    "example": "He continued determinedly despite his injury.",
    "exampleTr": "Örnek: kesin olarak bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/determinedly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Determinedly\" - kesin olarak kavramı"
  },
  {
    "id": "inv-narrowly",
    "word": "narrowly",
    "normalized": "narrowly",
    "lemma": "narrowly",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "güç bela",
      "anca",
      "dar"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Narrowly\" - güç bela kavramı",
    "example": "The car narrowly missed a cyclist.",
    "exampleTr": "Örnek: güç bela bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/narrowly/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "normal",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Narrowly\" - güç bela kavramı"
  },
  {
    "id": "inv-officially",
    "word": "officially",
    "normalized": "officially",
    "lemma": "officially",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "resmi olarak"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Officially\" - resmi olarak kavramı",
    "example": "Many of those living on the streets are not officially homeless.",
    "exampleTr": "Örnek: resmi olarak bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/officially/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "important",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Officially\" - resmi olarak kavramı"
  },
  {
    "id": "inv-prosperously",
    "word": "prosperously",
    "normalized": "prosperously",
    "lemma": "prosperously",
    "partOfSpeech": "adverb",
    "level": "B2",
    "turkishMeanings": [
      "refahla",
      "saadetle"
    ],
    "englishDefinition": "Conceptual visual association representing the dynamic nature of \"Prosperously\" - refahla kavramı",
    "example": "The town is a prosperously suburban place.",
    "exampleTr": "Örnek: refahla bağlamında kurulan YDS cümlesi.",
    "pronunciation": "/prosperously/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [],
    "memoryCode": "Conceptual visual association representing the dynamic nature of \"Prosperously\" - refahla kavramı"
  },
  {
    "id": "inv-cause",
    "word": "cause",
    "normalized": "cause",
    "lemma": "cause",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "neden olmak yol açmak"
    ],
    "englishDefinition": "Cause: neden olmak yol açmak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Most heart attacks are caused by blood clots.",
    "exampleTr": "Örnek: \"neden olmak yol açmak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/cause/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "cause in practice",
      "academic cause"
    ],
    "memoryCode": "Cause: neden olmak yol açmak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-prediction",
    "word": "prediction",
    "normalized": "prediction",
    "lemma": "prediction",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "tahmin öngörü"
    ],
    "englishDefinition": "Prediction: tahmin öngörü kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Her predictions turned out to be accurate.",
    "exampleTr": "Örnek: \"tahmin öngörü\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/prediction/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "prediction in practice",
      "academic prediction"
    ],
    "memoryCode": "Prediction: tahmin öngörü kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-speculation",
    "word": "speculation",
    "normalized": "speculation",
    "lemma": "speculation",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "tahmin",
      "dayanaksız görüş"
    ],
    "englishDefinition": "Speculation: tahmin kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Rumours that they are about to marry have been dismissed as pure speculation.",
    "exampleTr": "Örnek: \"tahmin\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/speculation/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "speculation in practice",
      "academic speculation"
    ],
    "memoryCode": "Speculation: tahmin kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-inclusion",
    "word": "inclusion",
    "normalized": "inclusion",
    "lemma": "inclusion",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "dahil olma",
      "kapsama"
    ],
    "englishDefinition": "Inclusion: dahil olma kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "She is being considered for inclusion in the Olympic team.",
    "exampleTr": "Örnek: \"dahil olma\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/inclusion/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "inclusion in practice",
      "academic inclusion"
    ],
    "memoryCode": "Inclusion: dahil olma kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-expansion",
    "word": "expansion",
    "normalized": "expansion",
    "lemma": "expansion",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "genişleme",
      "yayılma"
    ],
    "englishDefinition": "Expansion: genişleme kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Expansion into new areas of research is possible.",
    "exampleTr": "Örnek: \"genişleme\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/expansion/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "expansion in practice",
      "academic expansion"
    ],
    "memoryCode": "Expansion: genişleme kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-decisive",
    "word": "decisive",
    "normalized": "decisive",
    "lemma": "decisive",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "kararlı kesin",
      "nihai",
      "şüphesiz"
    ],
    "englishDefinition": "Decisive: kararlı kesin kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "DNA test results were decisive in proving his innocence.",
    "exampleTr": "Örnek: \"kararlı kesin\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/decisive/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "decisive in practice",
      "academic decisive"
    ],
    "memoryCode": "Decisive: kararlı kesin kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-abundant",
    "word": "abundant",
    "normalized": "abundant",
    "lemma": "abundant",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "bol",
      "çok"
    ],
    "englishDefinition": "Abundant: bol kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "There is abundant evidence that cars have a harmful effect on the environment.",
    "exampleTr": "Örnek: \"bol\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/abundant/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "abundant in practice",
      "academic abundant"
    ],
    "memoryCode": "Abundant: bol kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-obsolete",
    "word": "obsolete",
    "normalized": "obsolete",
    "lemma": "obsolete",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "modası geçmiş",
      "kullanılmayan"
    ],
    "englishDefinition": "Obsolete: modası geçmiş kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Gas lamps became obsolete when electric lighting was invented.",
    "exampleTr": "Örnek: \"modası geçmiş\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/obsolete/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "obsolete in practice",
      "academic obsolete"
    ],
    "memoryCode": "Obsolete: modası geçmiş kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-futile",
    "word": "futile",
    "normalized": "futile",
    "lemma": "futile",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "nafile",
      "boşuna"
    ],
    "englishDefinition": "Futile: nafile kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "It is completely futile trying to reason with him, he just won’t listen.",
    "exampleTr": "Örnek: \"nafile\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/futile/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "futile in practice",
      "academic futile"
    ],
    "memoryCode": "Futile: nafile kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-implicit",
    "word": "implicit",
    "normalized": "implicit",
    "lemma": "implicit",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "imalı",
      "üstü kapalı"
    ],
    "englishDefinition": "Implicit: imalı kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "He interpreted her comments as an implicit criticism of the government.",
    "exampleTr": "Örnek: \"imalı\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/implicit/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "implicit in practice",
      "academic implicit"
    ],
    "memoryCode": "Implicit: imalı kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-expand",
    "word": "expand",
    "normalized": "expand",
    "lemma": "expand",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "genişletmek",
      "yayılmak"
    ],
    "englishDefinition": "Expand: genişletmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The air in the balloon expands when heated.",
    "exampleTr": "Örnek: \"genişletmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/expand/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "expand in practice",
      "academic expand"
    ],
    "memoryCode": "Expand: genişletmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-progress",
    "word": "progress",
    "normalized": "progress",
    "lemma": "progress",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "gelişim göstermek",
      "ilerlemek"
    ],
    "englishDefinition": "Progress: gelişim göstermek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "I’m not making much progress with my French.",
    "exampleTr": "Örnek: \"gelişim göstermek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/progress/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "progress in practice",
      "academic progress"
    ],
    "memoryCode": "Progress: gelişim göstermek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-persuade",
    "word": "persuade",
    "normalized": "persuade",
    "lemma": "persuade",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "ikna etmek",
      "inandırmak"
    ],
    "englishDefinition": "Persuade: ikna etmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "If he doesn’t want to go, nothing you can say will persuade him.",
    "exampleTr": "Örnek: \"ikna etmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/persuade/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "persuade in practice",
      "academic persuade"
    ],
    "memoryCode": "Persuade: ikna etmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-differ",
    "word": "differ",
    "normalized": "differ",
    "lemma": "differ",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "ters düşmek",
      "değişik olmak"
    ],
    "englishDefinition": "Differ: ters düşmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The findings of the various studies differ significantly.",
    "exampleTr": "Örnek: \"ters düşmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/differ/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "differ in practice",
      "academic differ"
    ],
    "memoryCode": "Differ: ters düşmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-boost",
    "word": "boost",
    "normalized": "boost",
    "lemma": "boost",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "destekleme",
      "arttırma"
    ],
    "englishDefinition": "Boost: destekleme kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "I tried to boost his ego by praising his work.",
    "exampleTr": "Örnek: \"destekleme\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/boost/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "boost in practice",
      "academic boost"
    ],
    "memoryCode": "Boost: destekleme kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-capability",
    "word": "capability",
    "normalized": "capability",
    "lemma": "capability",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "kabiliyet",
      "yetenek"
    ],
    "englishDefinition": "Capability: kabiliyet kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "These tests are beyond the capability of an average ten-year-old.",
    "exampleTr": "Örnek: \"kabiliyet\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/capability/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "capability in practice",
      "academic capability"
    ],
    "memoryCode": "Capability: kabiliyet kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-prejudice",
    "word": "prejudice",
    "normalized": "prejudice",
    "lemma": "prejudice",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "önyargı"
    ],
    "englishDefinition": "Prejudice: önyargı kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Laws against racial prejudice must be strictly enforced.",
    "exampleTr": "Örnek: \"önyargı\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/prejudice/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "prejudice in practice",
      "academic prejudice"
    ],
    "memoryCode": "Prejudice: önyargı kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-deception",
    "word": "deception",
    "normalized": "deception",
    "lemma": "deception",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "aldatmaca",
      "kandırma"
    ],
    "englishDefinition": "Deception: aldatmaca kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "He was found guilty of obtaining money by deception.",
    "exampleTr": "Örnek: \"aldatmaca\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/deception/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "deception in practice",
      "academic deception"
    ],
    "memoryCode": "Deception: aldatmaca kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-resistance",
    "word": "resistance",
    "normalized": "resistance",
    "lemma": "resistance",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "direnç",
      "karşı çıkma"
    ],
    "englishDefinition": "Resistance: direnç kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "There should be no resistance to the new management structure.",
    "exampleTr": "Örnek: \"direnç\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/resistance/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "resistance in practice",
      "academic resistance"
    ],
    "memoryCode": "Resistance: direnç kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-nomination",
    "word": "nomination",
    "normalized": "nomination",
    "lemma": "nomination",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "adaylık",
      "tayin"
    ],
    "englishDefinition": "Nomination: adaylık kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "There have been two nominations for the new job.",
    "exampleTr": "Örnek: \"adaylık\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/nomination/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "nomination in practice",
      "academic nomination"
    ],
    "memoryCode": "Nomination: adaylık kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-compatible",
    "word": "compatible",
    "normalized": "compatible",
    "lemma": "compatible",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "uyumlu",
      "bağdaşan"
    ],
    "englishDefinition": "Compatible: uyumlu kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "It was when we started living together that we found we just weren’t compatible.",
    "exampleTr": "Örnek: \"uyumlu\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/compatible/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "compatible in practice",
      "academic compatible"
    ],
    "memoryCode": "Compatible: uyumlu kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-disastrous",
    "word": "disastrous",
    "normalized": "disastrous",
    "lemma": "disastrous",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "felaket",
      "korkunç"
    ],
    "englishDefinition": "Disastrous: felaket kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "In 2020, there was a disastrous covid epidemic.",
    "exampleTr": "Örnek: \"felaket\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/disastrous/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "disastrous in practice",
      "academic disastrous"
    ],
    "memoryCode": "Disastrous: felaket kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-indicative",
    "word": "indicative",
    "normalized": "indicative",
    "lemma": "indicative",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "belirti",
      "gösterge"
    ],
    "englishDefinition": "Indicative: belirti kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The fall in demand is indicative of a broader trend in consumer spending.",
    "exampleTr": "Örnek: \"belirti\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/indicative/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "indicative in practice",
      "academic indicative"
    ],
    "memoryCode": "Indicative: belirti kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-attach",
    "word": "attach",
    "normalized": "attach",
    "lemma": "attach",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "iliştirmek",
      "eklemek"
    ],
    "englishDefinition": "Attach: iliştirmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "She attached a photo to her application form.",
    "exampleTr": "Örnek: \"iliştirmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/attach/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "attach in practice",
      "academic attach"
    ],
    "memoryCode": "Attach: iliştirmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-occupy",
    "word": "occupy",
    "normalized": "occupy",
    "lemma": "occupy",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "işgal etmek",
      "meşgul etmek"
    ],
    "englishDefinition": "Occupy: işgal etmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The house hasn’t been occupied by anyone for a few years.",
    "exampleTr": "Örnek: \"işgal etmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/occupy/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "occupy in practice",
      "academic occupy"
    ],
    "memoryCode": "Occupy: işgal etmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-consider",
    "word": "consider",
    "normalized": "consider",
    "lemma": "consider",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "göz önünde bulundurmak",
      "değerlendirmek"
    ],
    "englishDefinition": "Consider: göz önünde bulundurmak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "I think he is being considered for the position.",
    "exampleTr": "Örnek: \"göz önünde bulundurmak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/consider/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "consider in practice",
      "academic consider"
    ],
    "memoryCode": "Consider: göz önünde bulundurmak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-encompass",
    "word": "encompass",
    "normalized": "encompass",
    "lemma": "encompass",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "kapsamak"
    ],
    "englishDefinition": "Encompass: kapsamak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Attica is a historical area of Greece that encompasses the capital, Athens and its environs.",
    "exampleTr": "Örnek: \"kapsamak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/encompass/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "encompass in practice",
      "academic encompass"
    ],
    "memoryCode": "Encompass: kapsamak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-inhabit",
    "word": "inhabit",
    "normalized": "inhabit",
    "lemma": "inhabit",
    "partOfSpeech": "verb",
    "level": "B1",
    "turkishMeanings": [
      "ikamet etmek",
      "yaşamak"
    ],
    "englishDefinition": "Inhabit: ikamet etmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "They inhabit rivers and ponds, and their entire bodies are green.",
    "exampleTr": "Örnek: \"ikamet etmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/inhabit/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "inhabit in practice",
      "academic inhabit"
    ],
    "memoryCode": "Inhabit: ikamet etmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-promise",
    "word": "promise",
    "normalized": "promise",
    "lemma": "promise",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "söz vermek"
    ],
    "englishDefinition": "Promise: söz vermek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "He promised faithfully to call me every week.",
    "exampleTr": "Örnek: \"söz vermek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/promise/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "promise in practice",
      "academic promise"
    ],
    "memoryCode": "Promise: söz vermek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-assumption",
    "word": "assumption",
    "normalized": "assumption",
    "lemma": "assumption",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "varsayım"
    ],
    "englishDefinition": "Assumption: varsayım kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "People tend to make assumptions about you when you have a disability.",
    "exampleTr": "Örnek: \"varsayım\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/assumption/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "assumption in practice",
      "academic assumption"
    ],
    "memoryCode": "Assumption: varsayım kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-priority",
    "word": "priority",
    "normalized": "priority",
    "lemma": "priority",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "öncelik",
      "üstünlük"
    ],
    "englishDefinition": "Priority: öncelik kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The president vowed to make education one of his top priorities.",
    "exampleTr": "Örnek: \"öncelik\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/priority/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "priority in practice",
      "academic priority"
    ],
    "memoryCode": "Priority: öncelik kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-compliment",
    "word": "compliment",
    "normalized": "compliment",
    "lemma": "compliment",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "iltifat",
      "özgü"
    ],
    "englishDefinition": "Compliment: iltifat kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "I take it as a compliment when people say I look like my sister.",
    "exampleTr": "Örnek: \"iltifat\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/compliment/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "compliment in practice",
      "academic compliment"
    ],
    "memoryCode": "Compliment: iltifat kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-artificial",
    "word": "artificial",
    "normalized": "artificial",
    "lemma": "artificial",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "yapay"
    ],
    "englishDefinition": "Artificial: yapay kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Her bouquet was made of artificial flowers.",
    "exampleTr": "Örnek: \"yapay\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/artificial/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "artificial in practice",
      "academic artificial"
    ],
    "memoryCode": "Artificial: yapay kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-outdated",
    "word": "outdated",
    "normalized": "outdated",
    "lemma": "outdated",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "modası geçmiş zaman aşımına uğramış"
    ],
    "englishDefinition": "Outdated: modası geçmiş zaman aşımına uğramış kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Staff shortages and an outdated computer system are blamed for the problem.",
    "exampleTr": "Örnek: \"modası geçmiş zaman aşımına uğramış\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/outdated/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "outdated in practice",
      "academic outdated"
    ],
    "memoryCode": "Outdated: modası geçmiş zaman aşımına uğramış kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-enhance",
    "word": "enhance",
    "normalized": "enhance",
    "lemma": "enhance",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "arttırmak",
      "geliştirmek"
    ],
    "englishDefinition": "Enhance: arttırmak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "These scandals will not enhance the organization’s reputation.",
    "exampleTr": "Örnek: \"arttırmak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/enhance/",
    "sourceTags": [
      "flashcards",
      "other"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "enhance in practice",
      "academic enhance"
    ],
    "memoryCode": "Enhance: arttırmak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-insist",
    "word": "insist",
    "normalized": "insist",
    "lemma": "insist",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "ısrar etmek"
    ],
    "englishDefinition": "Insist: ısrar etmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "She is 75, but she insists on doing all her own housework.",
    "exampleTr": "Örnek: \"ısrar etmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/insist/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "insist in practice",
      "academic insist"
    ],
    "memoryCode": "Insist: ısrar etmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-require",
    "word": "require",
    "normalized": "require",
    "lemma": "require",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "gerek duymak",
      "ihtiyacı olmak"
    ],
    "englishDefinition": "Require: gerek duymak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Please call me if you require any further information.",
    "exampleTr": "Örnek: \"gerek duymak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/require/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "require in practice",
      "academic require"
    ],
    "memoryCode": "Require: gerek duymak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-provide",
    "word": "provide",
    "normalized": "provide",
    "lemma": "provide",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "sağlamak",
      "temin etmek"
    ],
    "englishDefinition": "Provide: sağlamak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "This booklet provides useful information about local services.",
    "exampleTr": "Örnek: \"sağlamak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/provide/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "provide in practice",
      "academic provide"
    ],
    "memoryCode": "Provide: sağlamak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-occupation",
    "word": "occupation",
    "normalized": "occupation",
    "lemma": "occupation",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "uğraş",
      "iş",
      "meşguliyet"
    ],
    "englishDefinition": "Occupation: uğraş kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "It seems to me her favourite occupation is writing.",
    "exampleTr": "Örnek: \"uğraş\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/occupation/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "occupation in practice",
      "academic occupation"
    ],
    "memoryCode": "Occupation: uğraş kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-settlement",
    "word": "settlement",
    "normalized": "settlement",
    "lemma": "settlement",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "yerleşim"
    ],
    "englishDefinition": "Settlement: yerleşim kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "A large Roman settlement has been discovered just outside the French town.",
    "exampleTr": "Örnek: \"yerleşim\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/settlement/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "settlement in practice",
      "academic settlement"
    ],
    "memoryCode": "Settlement: yerleşim kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-destruction",
    "word": "destruction",
    "normalized": "destruction",
    "lemma": "destruction",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "tahribat",
      "yıkım"
    ],
    "englishDefinition": "Destruction: tahribat kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Unusually high winds left a trail of destruction over the area.",
    "exampleTr": "Örnek: \"tahribat\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/destruction/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "destruction in practice",
      "academic destruction"
    ],
    "memoryCode": "Destruction: tahribat kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-cultivation",
    "word": "cultivation",
    "normalized": "cultivation",
    "lemma": "cultivation",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "toprağı işleme"
    ],
    "englishDefinition": "Cultivation: toprağı işleme kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The cultivation of wheat required the most fertile lands.",
    "exampleTr": "Örnek: \"toprağı işleme\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/cultivation/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "cultivation in practice",
      "academic cultivation"
    ],
    "memoryCode": "Cultivation: toprağı işleme kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-invention",
    "word": "invention",
    "normalized": "invention",
    "lemma": "invention",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "buluş",
      "icat"
    ],
    "englishDefinition": "Invention: buluş kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The world changed rapidly after the invention of the phone.",
    "exampleTr": "Örnek: \"buluş\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/invention/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "invention in practice",
      "academic invention"
    ],
    "memoryCode": "Invention: buluş kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-intervention",
    "word": "intervention",
    "normalized": "intervention",
    "lemma": "intervention",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "araya girme",
      "müdahale"
    ],
    "englishDefinition": "Intervention: araya girme kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Repeated interventions on the currency markets failed to prevent the currency’s value falling.",
    "exampleTr": "Örnek: \"araya girme\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/intervention/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "intervention in practice",
      "academic intervention"
    ],
    "memoryCode": "Intervention: araya girme kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-accomplishment",
    "word": "accomplishment",
    "normalized": "accomplishment",
    "lemma": "accomplishment",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "başarma",
      "becerme",
      "hüner"
    ],
    "englishDefinition": "Accomplishment: başarma kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Winning the award was a major accomplishment for me.",
    "exampleTr": "Örnek: \"başarma\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/accomplishment/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "accomplishment in practice",
      "academic accomplishment"
    ],
    "memoryCode": "Accomplishment: başarma kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-condition",
    "word": "condition",
    "normalized": "condition",
    "lemma": "condition",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "hal",
      "koşul",
      "durum",
      "şart"
    ],
    "englishDefinition": "Condition: hal kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "They left the flat in a terrible condition, there was mess everywhere.",
    "exampleTr": "Örnek: \"hal\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/condition/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "condition in practice",
      "academic condition"
    ],
    "memoryCode": "Condition: hal kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-crucial",
    "word": "crucial",
    "normalized": "crucial",
    "lemma": "crucial",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "önemli",
      "kritik",
      "elzem"
    ],
    "englishDefinition": "Crucial: önemli kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "His work has been crucial to the project’s success.",
    "exampleTr": "Örnek: \"önemli\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/crucial/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "crucial in practice",
      "academic crucial"
    ],
    "memoryCode": "Crucial: önemli kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-virtual",
    "word": "virtual",
    "normalized": "virtual",
    "lemma": "virtual",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "sanal",
      "gerçekte etkili olan"
    ],
    "englishDefinition": "Virtual: sanal kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "In the game players simulate real life in a virtual world.",
    "exampleTr": "Örnek: \"sanal\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/virtual/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "virtual in practice",
      "academic virtual"
    ],
    "memoryCode": "Virtual: sanal kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-threaten",
    "word": "threaten",
    "normalized": "threaten",
    "lemma": "threaten",
    "partOfSpeech": "verb",
    "level": "B1",
    "turkishMeanings": [
      "tehdit etmek",
      "gözdağı vermek"
    ],
    "englishDefinition": "Threaten: tehdit etmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "They threatened to blow up the plane if their demands were not met.",
    "exampleTr": "Örnek: \"tehdit etmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/threaten/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "threaten in practice",
      "academic threaten"
    ],
    "memoryCode": "Threaten: tehdit etmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-initiate",
    "word": "initiate",
    "normalized": "initiate",
    "lemma": "initiate",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "başlatmak",
      "önayak olmak"
    ],
    "englishDefinition": "Initiate: başlatmak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The Commission has power to initiate legislation.",
    "exampleTr": "Örnek: \"başlatmak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/initiate/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "initiate in practice",
      "academic initiate"
    ],
    "memoryCode": "Initiate: başlatmak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-maintain",
    "word": "maintain",
    "normalized": "maintain",
    "lemma": "maintain",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "sürdürmek",
      "devam ettirmek"
    ],
    "englishDefinition": "Maintain: sürdürmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Despite living in different countries, the two families have maintained close links.",
    "exampleTr": "Örnek: \"sürdürmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/maintain/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "maintain in practice",
      "academic maintain"
    ],
    "memoryCode": "Maintain: sürdürmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-isolation",
    "word": "isolation",
    "normalized": "isolation",
    "lemma": "isolation",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "izolasyon",
      "soyutlanma"
    ],
    "englishDefinition": "Isolation: izolasyon kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The prisoner had been kept in isolation for three days.",
    "exampleTr": "Örnek: \"izolasyon\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/isolation/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "isolation in practice",
      "academic isolation"
    ],
    "memoryCode": "Isolation: izolasyon kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-concern",
    "word": "concern",
    "normalized": "concern",
    "lemma": "concern",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "endişe",
      "kaygı"
    ],
    "englishDefinition": "Concern: endişe kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Concern for the safety of the two missing teenagers is growing.",
    "exampleTr": "Örnek: \"endişe\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/concern/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "concern in practice",
      "academic concern"
    ],
    "memoryCode": "Concern: endişe kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-awareness",
    "word": "awareness",
    "normalized": "awareness",
    "lemma": "awareness",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "farkındalık",
      "bilinçlenme"
    ],
    "englishDefinition": "Awareness: farkındalık kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Public awareness of the problem will make politicians take it seriously.",
    "exampleTr": "Örnek: \"farkındalık\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/awareness/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "awareness in practice",
      "academic awareness"
    ],
    "memoryCode": "Awareness: farkındalık kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-demand",
    "word": "demand",
    "normalized": "demand",
    "lemma": "demand",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "talep",
      "rağbet",
      "isteme"
    ],
    "englishDefinition": "Demand: talep kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "You can’t give in to children’s demands all the time.",
    "exampleTr": "Örnek: \"talep\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/demand/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "demand in practice",
      "academic demand"
    ],
    "memoryCode": "Demand: talep kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-variety",
    "word": "variety",
    "normalized": "variety",
    "lemma": "variety",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "çeşitlilik",
      "tür"
    ],
    "englishDefinition": "Variety: çeşitlilik kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The company makes a variety of cameras.",
    "exampleTr": "Örnek: \"çeşitlilik\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/variety/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "variety in practice",
      "academic variety"
    ],
    "memoryCode": "Variety: çeşitlilik kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-negligible",
    "word": "negligible",
    "normalized": "negligible",
    "lemma": "negligible",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "ihmal edilebilir",
      "gözardı edilebilir"
    ],
    "englishDefinition": "Negligible: ihmal edilebilir kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The difference between the two products is negligible.",
    "exampleTr": "Örnek: \"ihmal edilebilir\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/negligible/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "negligible in practice",
      "academic negligible"
    ],
    "memoryCode": "Negligible: ihmal edilebilir kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-consistent",
    "word": "consistent",
    "normalized": "consistent",
    "lemma": "consistent",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "istikrarlı",
      "tutarlı"
    ],
    "englishDefinition": "Consistent: istikrarlı kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "There has been a consistent improvement in her attitude.",
    "exampleTr": "Örnek: \"istikrarlı\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/consistent/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "consistent in practice",
      "academic consistent"
    ],
    "memoryCode": "Consistent: istikrarlı kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-precede",
    "word": "precede",
    "normalized": "precede",
    "lemma": "precede",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "önce olmak",
      "üstün olmak"
    ],
    "englishDefinition": "Precede: önce olmak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "It would be helpful if you were to precede the report with an introduction.",
    "exampleTr": "Örnek: \"önce olmak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/precede/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "precede in practice",
      "academic precede"
    ],
    "memoryCode": "Precede: önce olmak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-accelerate",
    "word": "accelerate",
    "normalized": "accelerate",
    "lemma": "accelerate",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "hızlanmak",
      "hızlandırmak"
    ],
    "englishDefinition": "Accelerate: hızlanmak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "They use special chemicals to accelerate the growth of crops.",
    "exampleTr": "Örnek: \"hızlanmak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/accelerate/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "accelerate in practice",
      "academic accelerate"
    ],
    "memoryCode": "Accelerate: hızlanmak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-counter",
    "word": "counter",
    "normalized": "counter",
    "lemma": "counter",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "tezgah sayaç"
    ],
    "englishDefinition": "Counter: tezgah sayaç kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "There was nobody behind the counter when I went into the bank.",
    "exampleTr": "Örnek: \"tezgah sayaç\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/counter/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "counter in practice",
      "academic counter"
    ],
    "memoryCode": "Counter: tezgah sayaç kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-abandon",
    "word": "abandon",
    "normalized": "abandon",
    "lemma": "abandon",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "terk etmek",
      "bırakmak"
    ],
    "englishDefinition": "Abandon: terk etmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "By the time the rebel troops arrived, the village had already been abandoned.",
    "exampleTr": "Örnek: \"terk etmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/abandon/",
    "sourceTags": [
      "flashcards",
      "other"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "abandon in practice",
      "academic abandon"
    ],
    "memoryCode": "Abandon: terk etmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-bankrupt",
    "word": "bankrupt",
    "normalized": "bankrupt",
    "lemma": "bankrupt",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "iflas etmek"
    ],
    "englishDefinition": "Bankrupt: iflas etmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "He went bankrupt after only a year in business.",
    "exampleTr": "Örnek: \"iflas etmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/bankrupt/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "bankrupt in practice",
      "academic bankrupt"
    ],
    "memoryCode": "Bankrupt: iflas etmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-captivate",
    "word": "captivate",
    "normalized": "captivate",
    "lemma": "captivate",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "cezbetmek",
      "büyülemek"
    ],
    "englishDefinition": "Captivate: cezbetmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "With her beauty and charm, she captivated audiences everywhere.",
    "exampleTr": "Örnek: \"cezbetmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/captivate/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "captivate in practice",
      "academic captivate"
    ],
    "memoryCode": "Captivate: cezbetmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-clarify",
    "word": "clarify",
    "normalized": "clarify",
    "lemma": "clarify",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "açıklığa kavuşmak"
    ],
    "englishDefinition": "Clarify: açıklığa kavuşmak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Could you clarify the first point please?",
    "exampleTr": "Örnek: \"açıklığa kavuşmak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/clarify/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "clarify in practice",
      "academic clarify"
    ],
    "memoryCode": "Clarify: açıklığa kavuşmak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-deduction",
    "word": "deduction",
    "normalized": "deduction",
    "lemma": "deduction",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "sonuç çıkarma"
    ],
    "englishDefinition": "Deduction: sonuç çıkarma kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "All we can do is make deductions from the available facts.",
    "exampleTr": "Örnek: \"sonuç çıkarma\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/deduction/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "deduction in practice",
      "academic deduction"
    ],
    "memoryCode": "Deduction: sonuç çıkarma kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-demolish",
    "word": "demolish",
    "normalized": "demolish",
    "lemma": "demolish",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "yıkmak",
      "tahrip etmek"
    ],
    "englishDefinition": "Demolish: yıkmak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "A number of houses were demolished so that the supermarket could be built.",
    "exampleTr": "Örnek: \"yıkmak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/demolish/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "demolish in practice",
      "academic demolish"
    ],
    "memoryCode": "Demolish: yıkmak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-distinguish",
    "word": "distinguish",
    "normalized": "distinguish",
    "lemma": "distinguish",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "ayırt etmek",
      "farkı görmek"
    ],
    "englishDefinition": "Distinguish: ayırt etmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "I sometimes have difficulty distinguishing Spanish from Portuguese.",
    "exampleTr": "Örnek: \"ayırt etmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/distinguish/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "distinguish in practice",
      "academic distinguish"
    ],
    "memoryCode": "Distinguish: ayırt etmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-edible",
    "word": "edible",
    "normalized": "edible",
    "lemma": "edible",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "yenilebilir"
    ],
    "englishDefinition": "Edible: yenilebilir kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Only the leaves of the plant are edible.",
    "exampleTr": "Örnek: \"yenilebilir\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/edible/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "edible in practice",
      "academic edible"
    ],
    "memoryCode": "Edible: yenilebilir kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-elaborate",
    "word": "elaborate",
    "normalized": "elaborate",
    "lemma": "elaborate",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "detaylandırmak",
      "ayrıntılı şekilde hazırlamak"
    ],
    "englishDefinition": "Elaborate: detaylandırmak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "He refused to elaborate on why he had resigned.",
    "exampleTr": "Örnek: \"detaylandırmak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/elaborate/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "elaborate in practice",
      "academic elaborate"
    ],
    "memoryCode": "Elaborate: detaylandırmak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-hesitate",
    "word": "hesitate",
    "normalized": "hesitate",
    "lemma": "hesitate",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "tereddüt etmek"
    ],
    "englishDefinition": "Hesitate: tereddüt etmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "She hesitated slightly before answering the question.",
    "exampleTr": "Örnek: \"tereddüt etmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/hesitate/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "hesitate in practice",
      "academic hesitate"
    ],
    "memoryCode": "Hesitate: tereddüt etmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-irresistible",
    "word": "irresistible",
    "normalized": "irresistible",
    "lemma": "irresistible",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "karşı konulmaz",
      "dayanılmaz"
    ],
    "englishDefinition": "Irresistible: karşı konulmaz kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "He gave me one of those irresistible smiles.",
    "exampleTr": "Örnek: \"karşı konulmaz\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/irresistible/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "irresistible in practice",
      "academic irresistible"
    ],
    "memoryCode": "Irresistible: karşı konulmaz kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-justify",
    "word": "justify",
    "normalized": "justify",
    "lemma": "justify",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "haklı göstermek",
      "temize çıkarmak"
    ],
    "englishDefinition": "Justify: haklı göstermek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "That doesn’t justify getting involved in somebody else’s fight.",
    "exampleTr": "Örnek: \"haklı göstermek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/justify/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "justify in practice",
      "academic justify"
    ],
    "memoryCode": "Justify: haklı göstermek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-kidnap",
    "word": "kidnap",
    "normalized": "kidnap",
    "lemma": "kidnap",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "birini kaçırmak"
    ],
    "englishDefinition": "Kidnap: birini kaçırmak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Fanatical revolutionaries kidnap a millionaire’s daughter.",
    "exampleTr": "Örnek: \"birini kaçırmak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/kidnap/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "kidnap in practice",
      "academic kidnap"
    ],
    "memoryCode": "Kidnap: birini kaçırmak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-launch",
    "word": "launch",
    "normalized": "launch",
    "lemma": "launch",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "(bir işi) piyasaya sürmek",
      "(roket",
      "mekik) fırlatmak"
    ],
    "englishDefinition": "Launch: (bir işi) piyasaya sürmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The programme was launched two years ago.",
    "exampleTr": "Örnek: \"(bir işi) piyasaya sürmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/launch/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "launch in practice",
      "academic launch"
    ],
    "memoryCode": "Launch: (bir işi) piyasaya sürmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-manufacture",
    "word": "manufacture",
    "normalized": "manufacture",
    "lemma": "manufacture",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "üretmek",
      "imal etmek"
    ],
    "englishDefinition": "Manufacture: üretmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "He works for a company that manufactures car parts.",
    "exampleTr": "Örnek: \"üretmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/manufacture/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "manufacture in practice",
      "academic manufacture"
    ],
    "memoryCode": "Manufacture: üretmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-medieval",
    "word": "medieval",
    "normalized": "medieval",
    "lemma": "medieval",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "ortaçağ"
    ],
    "englishDefinition": "Medieval: ortaçağ kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "You really should go and see the lovely medieval court in the castle.",
    "exampleTr": "Örnek: \"ortaçağ\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/medieval/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "medieval in practice",
      "academic medieval"
    ],
    "memoryCode": "Medieval: ortaçağ kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-neglect",
    "word": "neglect",
    "normalized": "neglect",
    "lemma": "neglect",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "ihmal etmek",
      "aldırmamak"
    ],
    "englishDefinition": "Neglect: ihmal etmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "She’s been neglecting her studies this semester.",
    "exampleTr": "Örnek: \"ihmal etmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/neglect/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "neglect in practice",
      "academic neglect"
    ],
    "memoryCode": "Neglect: ihmal etmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-obstacle",
    "word": "obstacle",
    "normalized": "obstacle",
    "lemma": "obstacle",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "engel",
      "mani"
    ],
    "englishDefinition": "Obstacle: engel kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "We suddenly encountered an obstacle along the trail.",
    "exampleTr": "Örnek: \"engel\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/obstacle/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "obstacle in practice",
      "academic obstacle"
    ],
    "memoryCode": "Obstacle: engel kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-pace",
    "word": "pace",
    "normalized": "pace",
    "lemma": "pace",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "tempo",
      "hız",
      "sürat"
    ],
    "englishDefinition": "Pace: tempo kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "When she thought she heard someone following her, she quickened her pace.",
    "exampleTr": "Örnek: \"tempo\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/pace/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "pace in practice",
      "academic pace"
    ],
    "memoryCode": "Pace: tempo kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-perceive",
    "word": "perceive",
    "normalized": "perceive",
    "lemma": "perceive",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "algılamak",
      "idrak etmek"
    ],
    "englishDefinition": "Perceive: algılamak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "How do the French perceive the British?",
    "exampleTr": "Örnek: \"algılamak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/perceive/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "perceive in practice",
      "academic perceive"
    ],
    "memoryCode": "Perceive: algılamak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-redundant",
    "word": "redundant",
    "normalized": "redundant",
    "lemma": "redundant",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "lüzumsuz",
      "gereksiz"
    ],
    "englishDefinition": "Redundant: lüzumsuz kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "In the sentence “She is a single unmarried woman”, the word “unmarried” is redundant.",
    "exampleTr": "Örnek: \"lüzumsuz\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/redundant/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "redundant in practice",
      "academic redundant"
    ],
    "memoryCode": "Redundant: lüzumsuz kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-scatter",
    "word": "scatter",
    "normalized": "scatter",
    "lemma": "scatter",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "dağıtmak",
      "saçmak"
    ],
    "englishDefinition": "Scatter: dağıtmak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Her ashes were scattered at sea.",
    "exampleTr": "Örnek: \"dağıtmak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/scatter/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "scatter in practice",
      "academic scatter"
    ],
    "memoryCode": "Scatter: dağıtmak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-abolish",
    "word": "abolish",
    "normalized": "abolish",
    "lemma": "abolish",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "feshetmek",
      "yürürlükten kaldırmak"
    ],
    "englishDefinition": "Abolish: feshetmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "I think bullfighting should be abolished.",
    "exampleTr": "Örnek: \"feshetmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/abolish/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "abolish in practice",
      "academic abolish"
    ],
    "memoryCode": "Abolish: feshetmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-burden",
    "word": "burden",
    "normalized": "burden",
    "lemma": "burden",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "yük",
      "sorumluluk"
    ],
    "englishDefinition": "Burden: yük kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Buying a house often places a large financial burden on young couples.",
    "exampleTr": "Örnek: \"yük\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/burden/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "burden in practice",
      "academic burden"
    ],
    "memoryCode": "Burden: yük kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-collapse",
    "word": "collapse",
    "normalized": "collapse",
    "lemma": "collapse",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "çöküş",
      "yığılmak",
      "çökmek"
    ],
    "englishDefinition": "Collapse: çöküş kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Thousands of buildings collapsed in the earthquake.",
    "exampleTr": "Örnek: \"çöküş\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/collapse/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "collapse in practice",
      "academic collapse"
    ],
    "memoryCode": "Collapse: çöküş kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-deficiency",
    "word": "deficiency",
    "normalized": "deficiency",
    "lemma": "deficiency",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "eksiklik",
      "yoksunluk"
    ],
    "englishDefinition": "Deficiency: eksiklik kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Pregnant women often suffer from iron deficiency.",
    "exampleTr": "Örnek: \"eksiklik\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/deficiency/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "deficiency in practice",
      "academic deficiency"
    ],
    "memoryCode": "Deficiency: eksiklik kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-devote",
    "word": "devote",
    "normalized": "devote",
    "lemma": "devote",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "adamak",
      "vakfetmek"
    ],
    "englishDefinition": "Devote: adamak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "She has devoted all her life to the care of homeless people.",
    "exampleTr": "Örnek: \"adamak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/devote/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "devote in practice",
      "academic devote"
    ],
    "memoryCode": "Devote: adamak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-estimate",
    "word": "estimate",
    "normalized": "estimate",
    "lemma": "estimate",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "kestirmek",
      "tahmin etmek"
    ],
    "englishDefinition": "Estimate: kestirmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Government sources estimate a long-term 50 percent increase in rail fares.",
    "exampleTr": "Örnek: \"kestirmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/estimate/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "estimate in practice",
      "academic estimate"
    ],
    "memoryCode": "Estimate: kestirmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-exhibit",
    "word": "exhibit",
    "normalized": "exhibit",
    "lemma": "exhibit",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "sergilemek",
      "göstermek"
    ],
    "englishDefinition": "Exhibit: sergilemek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "He frequently exhibits at the art gallery.",
    "exampleTr": "Örnek: \"sergilemek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/exhibit/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "exhibit in practice",
      "academic exhibit"
    ],
    "memoryCode": "Exhibit: sergilemek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-gratitude",
    "word": "gratitude",
    "normalized": "gratitude",
    "lemma": "gratitude",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "minnettarlık",
      "şükran"
    ],
    "englishDefinition": "Gratitude: minnettarlık kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "She sent them a present to show her gratitude.",
    "exampleTr": "Örnek: \"minnettarlık\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/gratitude/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "gratitude in practice",
      "academic gratitude"
    ],
    "memoryCode": "Gratitude: minnettarlık kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-illusion",
    "word": "illusion",
    "normalized": "illusion",
    "lemma": "illusion",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "kuruntu",
      "ilüzyon"
    ],
    "englishDefinition": "Illusion: kuruntu kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "He had no illusions about his talents as a singer.",
    "exampleTr": "Örnek: \"kuruntu\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/illusion/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "illusion in practice",
      "academic illusion"
    ],
    "memoryCode": "Illusion: kuruntu kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-immune",
    "word": "immune",
    "normalized": "immune",
    "lemma": "immune",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "bağışık",
      "etkilenmeyen"
    ],
    "englishDefinition": "Immune: bağışık kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "He seems to be immune to colds, he just never gets them.",
    "exampleTr": "Örnek: \"bağışık\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/immune/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "immune in practice",
      "academic immune"
    ],
    "memoryCode": "Immune: bağışık kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-slippery",
    "word": "slippery",
    "normalized": "slippery",
    "lemma": "slippery",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "kaygan"
    ],
    "englishDefinition": "Slippery: kaygan kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The sidewalks were slippery with ice.",
    "exampleTr": "Örnek: \"kaygan\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/slippery/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "slippery in practice",
      "academic slippery"
    ],
    "memoryCode": "Slippery: kaygan kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-tame",
    "word": "tame",
    "normalized": "tame",
    "lemma": "tame",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "evcilleştirmek",
      "uslandırmak"
    ],
    "englishDefinition": "Tame: evcilleştirmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Their goats seem very tame.",
    "exampleTr": "Örnek: \"evcilleştirmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/tame/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "tame in practice",
      "academic tame"
    ],
    "memoryCode": "Tame: evcilleştirmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-transmit",
    "word": "transmit",
    "normalized": "transmit",
    "lemma": "transmit",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "iletmek",
      "ulaştırmak"
    ],
    "englishDefinition": "Transmit: iletmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Your bank will transmit funds by wire to our central bank in New York.",
    "exampleTr": "Örnek: \"iletmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/transmit/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "transmit in practice",
      "academic transmit"
    ],
    "memoryCode": "Transmit: iletmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-underestimate",
    "word": "underestimate",
    "normalized": "underestimate",
    "lemma": "underestimate",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "hafife almak",
      "azımsamak",
      "küçümsemek"
    ],
    "englishDefinition": "Underestimate: hafife almak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "They’ve seriously underestimated the cost of the building project.",
    "exampleTr": "Örnek: \"hafife almak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/underestimate/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "underestimate in practice",
      "academic underestimate"
    ],
    "memoryCode": "Underestimate: hafife almak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-versatile",
    "word": "versatile",
    "normalized": "versatile",
    "lemma": "versatile",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "çok yönlü"
    ],
    "englishDefinition": "Versatile: çok yönlü kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "This versatile material represents both comfort and strength.",
    "exampleTr": "Örnek: \"çok yönlü\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/versatile/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "versatile in practice",
      "academic versatile"
    ],
    "memoryCode": "Versatile: çok yönlü kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-withstand",
    "word": "withstand",
    "normalized": "withstand",
    "lemma": "withstand",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "karşı koymak",
      "direnmek"
    ],
    "englishDefinition": "Withstand: karşı koymak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Our toys are designed to withstand the rough treatment of the average six-year-old.",
    "exampleTr": "Örnek: \"karşı koymak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/withstand/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "withstand in practice",
      "academic withstand"
    ],
    "memoryCode": "Withstand: karşı koymak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-acquire",
    "word": "acquire",
    "normalized": "acquire",
    "lemma": "acquire",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "elde etmek",
      "edinmek"
    ],
    "englishDefinition": "Acquire: elde etmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "I was wearing a newly acquired jacket.",
    "exampleTr": "Örnek: \"elde etmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/acquire/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "acquire in practice",
      "academic acquire"
    ],
    "memoryCode": "Acquire: elde etmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-confront",
    "word": "confront",
    "normalized": "confront",
    "lemma": "confront",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "yüzleşmek",
      "karşı koymak"
    ],
    "englishDefinition": "Confront: yüzleşmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "It’s an issue you’ll have to confront at some point, no matter how unpleasant it is",
    "exampleTr": "Örnek: \"yüzleşmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/confront/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "confront in practice",
      "academic confront"
    ],
    "memoryCode": "Confront: yüzleşmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-inspiration",
    "word": "inspiration",
    "normalized": "inspiration",
    "lemma": "inspiration",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "esin",
      "ilham"
    ],
    "englishDefinition": "Inspiration: esin kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Perhaps they will become inspiration for another project.",
    "exampleTr": "Örnek: \"esin\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/inspiration/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "inspiration in practice",
      "academic inspiration"
    ],
    "memoryCode": "Inspiration: esin kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-eligible",
    "word": "eligible",
    "normalized": "eligible",
    "lemma": "eligible",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "hak sahibi",
      "uygun"
    ],
    "englishDefinition": "Eligible: hak sahibi kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "She is not considered eligible for legal aid.",
    "exampleTr": "Örnek: \"hak sahibi\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/eligible/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "eligible in practice",
      "academic eligible"
    ],
    "memoryCode": "Eligible: hak sahibi kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-prevent",
    "word": "prevent",
    "normalized": "prevent",
    "lemma": "prevent",
    "partOfSpeech": "verb",
    "level": "B1",
    "turkishMeanings": [
      "engellemek",
      "önlemek"
    ],
    "englishDefinition": "Prevent: engellemek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Eating healthfully can help prevent heart disease.gecikmek, ertelemek",
    "exampleTr": "Örnek: \"engellemek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/prevent/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "prevent in practice",
      "academic prevent"
    ],
    "memoryCode": "Prevent: engellemek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-delay",
    "word": "delay",
    "normalized": "delay",
    "lemma": "delay",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      ""
    ],
    "englishDefinition": "Delay:  kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Heavy storm delayed the start of the game.",
    "exampleTr": "Örnek: \"\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/delay/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "delay in practice",
      "academic delay"
    ],
    "memoryCode": "Delay:  kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-embark",
    "word": "embark",
    "normalized": "embark",
    "lemma": "embark",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "gemiye bindirmek",
      "gemiye binmek"
    ],
    "englishDefinition": "Embark: gemiye bindirmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "They stood on the pier and watched as we embarked.",
    "exampleTr": "Örnek: \"gemiye bindirmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/embark/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "embark in practice",
      "academic embark"
    ],
    "memoryCode": "Embark: gemiye bindirmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-fade",
    "word": "fade",
    "normalized": "fade",
    "lemma": "fade",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "karartmak",
      "soldurmak",
      "solmak"
    ],
    "englishDefinition": "Fade: karartmak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The sun had faded the curtains.",
    "exampleTr": "Örnek: \"karartmak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/fade/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "fade in practice",
      "academic fade"
    ],
    "memoryCode": "Fade: karartmak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-frustrate",
    "word": "frustrate",
    "normalized": "frustrate",
    "lemma": "frustrate",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "engellemek",
      "yıldırmak"
    ],
    "englishDefinition": "Frustrate: engellemek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The rescue attempt was frustrated by heavy snow.",
    "exampleTr": "Örnek: \"engellemek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/frustrate/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "frustrate in practice",
      "academic frustrate"
    ],
    "memoryCode": "Frustrate: engellemek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-obligation",
    "word": "obligation",
    "normalized": "obligation",
    "lemma": "obligation",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "yükümlülük",
      "zorunluluk"
    ],
    "englishDefinition": "Obligation: yükümlülük kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "My obligation to the Council requires my presence elsewhere.",
    "exampleTr": "Örnek: \"yükümlülük\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/obligation/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "obligation in practice",
      "academic obligation"
    ],
    "memoryCode": "Obligation: yükümlülük kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-miscarry",
    "word": "miscarry",
    "normalized": "miscarry",
    "lemma": "miscarry",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "düşük yapmak"
    ],
    "englishDefinition": "Miscarry: düşük yapmak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The disease caused her to miscarry.",
    "exampleTr": "Örnek: \"düşük yapmak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/miscarry/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "miscarry in practice",
      "academic miscarry"
    ],
    "memoryCode": "Miscarry: düşük yapmak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-recognize",
    "word": "recognize",
    "normalized": "recognize",
    "lemma": "recognize",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "tanımak",
      "ayırt etmek"
    ],
    "englishDefinition": "Recognize: tanımak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "I recognized my childhood friend immediately.",
    "exampleTr": "Örnek: \"tanımak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/recognize/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "recognize in practice",
      "academic recognize"
    ],
    "memoryCode": "Recognize: tanımak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-tactful",
    "word": "tactful",
    "normalized": "tactful",
    "lemma": "tactful",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "ince düşünceli",
      "nazik"
    ],
    "englishDefinition": "Tactful: ince düşünceli kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "I tried to find a tactful way of telling the truth.",
    "exampleTr": "Örnek: \"ince düşünceli\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/tactful/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "tactful in practice",
      "academic tactful"
    ],
    "memoryCode": "Tactful: ince düşünceli kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-splendid",
    "word": "splendid",
    "normalized": "splendid",
    "lemma": "splendid",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "muhteşem",
      "olağanüstü"
    ],
    "englishDefinition": "Splendid: muhteşem kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "She made a lot of money and bought a splendid house.",
    "exampleTr": "Örnek: \"muhteşem\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/splendid/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "splendid in practice",
      "academic splendid"
    ],
    "memoryCode": "Splendid: muhteşem kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-warfare",
    "word": "warfare",
    "normalized": "warfare",
    "lemma": "warfare",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "savaş hali",
      "harp"
    ],
    "englishDefinition": "Warfare: savaş hali kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Cyber warfare can have an equally devastating impact.",
    "exampleTr": "Örnek: \"savaş hali\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/warfare/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "warfare in practice",
      "academic warfare"
    ],
    "memoryCode": "Warfare: savaş hali kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-utilize",
    "word": "utilize",
    "normalized": "utilize",
    "lemma": "utilize",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "kullanmak",
      "faydalanmak"
    ],
    "englishDefinition": "Utilize: kullanmak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Vitamin C helps the body utilize the iron present in your body.",
    "exampleTr": "Örnek: \"kullanmak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/utilize/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "utilize in practice",
      "academic utilize"
    ],
    "memoryCode": "Utilize: kullanmak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-abstain",
    "word": "abstain",
    "normalized": "abstain",
    "lemma": "abstain",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "çekinmek",
      "kaçınmak"
    ],
    "englishDefinition": "Abstain: çekinmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "He took a vow to abstain from alcohol.",
    "exampleTr": "Örnek: \"çekinmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/abstain/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "abstain in practice",
      "academic abstain"
    ],
    "memoryCode": "Abstain: çekinmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-accumulation",
    "word": "accumulation",
    "normalized": "accumulation",
    "lemma": "accumulation",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "birikinti",
      "yığın"
    ],
    "englishDefinition": "Accumulation: birikinti kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Despite this accumulation of evidence, the polic persisted in doing nothing.",
    "exampleTr": "Örnek: \"birikinti\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/accumulation/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "accumulation in practice",
      "academic accumulation"
    ],
    "memoryCode": "Accumulation: birikinti kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-betray",
    "word": "betray",
    "normalized": "betray",
    "lemma": "betray",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "ihanet etmek",
      "aldatmak"
    ],
    "englishDefinition": "Betray: ihanet etmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "She felt betrayed when she found out the truth about her sister.",
    "exampleTr": "Örnek: \"ihanet etmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/betray/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "betray in practice",
      "academic betray"
    ],
    "memoryCode": "Betray: ihanet etmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-catastrophe",
    "word": "catastrophe",
    "normalized": "catastrophe",
    "lemma": "catastrophe",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "facia",
      "afet",
      "felaket"
    ],
    "englishDefinition": "Catastrophe: facia kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "We’ve had a few catastrophes with the food for the party.",
    "exampleTr": "Örnek: \"facia\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/catastrophe/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "catastrophe in practice",
      "academic catastrophe"
    ],
    "memoryCode": "Catastrophe: facia kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-decline",
    "word": "decline",
    "normalized": "decline",
    "lemma": "decline",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "geri çevirmek"
    ],
    "englishDefinition": "Decline: geri çevirmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "I politely declined her invitation.",
    "exampleTr": "Örnek: \"geri çevirmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/decline/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "decline in practice",
      "academic decline"
    ],
    "memoryCode": "Decline: geri çevirmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-extract",
    "word": "extract",
    "normalized": "extract",
    "lemma": "extract",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "esans",
      "öz"
    ],
    "englishDefinition": "Extract: esans kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The cream contained extracts of several plants.",
    "exampleTr": "Örnek: \"esans\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/extract/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "extract in practice",
      "academic extract"
    ],
    "memoryCode": "Extract: esans kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-keen",
    "word": "keen",
    "normalized": "keen",
    "lemma": "keen",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "hevesli olmak"
    ],
    "englishDefinition": "Keen: hevesli olmak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Andrew was very keen to help our project.",
    "exampleTr": "Örnek: \"hevesli olmak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/keen/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "keen in practice",
      "academic keen"
    ],
    "memoryCode": "Keen: hevesli olmak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-intervene",
    "word": "intervene",
    "normalized": "intervene",
    "lemma": "intervene",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "araya girmek",
      "müdahale etmek"
    ],
    "englishDefinition": "Intervene: araya girmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "He might have been hurt if the neighbours hadn’t intervened.",
    "exampleTr": "Örnek: \"araya girmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/intervene/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "intervene in practice",
      "academic intervene"
    ],
    "memoryCode": "Intervene: araya girmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-observation",
    "word": "observation",
    "normalized": "observation",
    "lemma": "observation",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "gözlem",
      "gözetleme"
    ],
    "englishDefinition": "Observation: gözlem kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The police are keeping the suspect under observation.",
    "exampleTr": "Örnek: \"gözlem\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/observation/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "observation in practice",
      "academic observation"
    ],
    "memoryCode": "Observation: gözlem kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-request",
    "word": "request",
    "normalized": "request",
    "lemma": "request",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "istek",
      "talep"
    ],
    "englishDefinition": "Request: istek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The boss refused or request to leave work early.",
    "exampleTr": "Örnek: \"istek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/request/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "request in practice",
      "academic request"
    ],
    "memoryCode": "Request: istek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-stroll",
    "word": "stroll",
    "normalized": "stroll",
    "lemma": "stroll",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "gezinmek",
      "gezinti"
    ],
    "englishDefinition": "Stroll: gezinmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "We could stroll along the beach if you want.",
    "exampleTr": "Örnek: \"gezinmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/stroll/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "stroll in practice",
      "academic stroll"
    ],
    "memoryCode": "Stroll: gezinmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-uneasy",
    "word": "uneasy",
    "normalized": "uneasy",
    "lemma": "uneasy",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "huzursuz",
      "tedirgin"
    ],
    "englishDefinition": "Uneasy: huzursuz kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "I feel a little uneasy about talking to him.",
    "exampleTr": "Örnek: \"huzursuz\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/uneasy/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "uneasy in practice",
      "academic uneasy"
    ],
    "memoryCode": "Uneasy: huzursuz kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-weary",
    "word": "weary",
    "normalized": "weary",
    "lemma": "weary",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "yorgun",
      "bitap"
    ],
    "englishDefinition": "Weary: yorgun kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "You must be weary from your long journey.",
    "exampleTr": "Örnek: \"yorgun\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/weary/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "weary in practice",
      "academic weary"
    ],
    "memoryCode": "Weary: yorgun kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-outcome",
    "word": "outcome",
    "normalized": "outcome",
    "lemma": "outcome",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "sonuç",
      "çıktı"
    ],
    "englishDefinition": "Outcome: sonuç kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "It’s too early to predict the outcome of the discussion.",
    "exampleTr": "Örnek: \"sonuç\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/outcome/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "outcome in practice",
      "academic outcome"
    ],
    "memoryCode": "Outcome: sonuç kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-bet",
    "word": "bet",
    "normalized": "bet",
    "lemma": "bet",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "iddia etmek bahis"
    ],
    "englishDefinition": "Bet: iddia etmek bahis kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "I bet the moment I sit down, my mother will call me.",
    "exampleTr": "Örnek: \"iddia etmek bahis\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/bet/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "bet in practice",
      "academic bet"
    ],
    "memoryCode": "Bet: iddia etmek bahis kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-hostile",
    "word": "hostile",
    "normalized": "hostile",
    "lemma": "hostile",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "düşmanca"
    ],
    "englishDefinition": "Hostile: düşmanca kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "He was openly hostile towards his classmates.",
    "exampleTr": "Örnek: \"düşmanca\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/hostile/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "hostile in practice",
      "academic hostile"
    ],
    "memoryCode": "Hostile: düşmanca kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-fierce",
    "word": "fierce",
    "normalized": "fierce",
    "lemma": "fierce",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "hiddetli",
      "şiddetli"
    ],
    "englishDefinition": "Fierce: hiddetli kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Two men were shot during fierce fighting last month.",
    "exampleTr": "Örnek: \"hiddetli\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/fierce/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "fierce in practice",
      "academic fierce"
    ],
    "memoryCode": "Fierce: hiddetli kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-speculative",
    "word": "speculative",
    "normalized": "speculative",
    "lemma": "speculative",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "teorik",
      "kuramsal"
    ],
    "englishDefinition": "Speculative: teorik kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Her theory was too speculative for most of her colleagues to accept.",
    "exampleTr": "Örnek: \"teorik\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/speculative/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "speculative in practice",
      "academic speculative"
    ],
    "memoryCode": "Speculative: teorik kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-elimination",
    "word": "elimination",
    "normalized": "elimination",
    "lemma": "elimination",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "eleme",
      "bertaraf etme"
    ],
    "englishDefinition": "Elimination: eleme kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "There were four eliminations in the first round.",
    "exampleTr": "Örnek: \"eleme\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/elimination/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "elimination in practice",
      "academic elimination"
    ],
    "memoryCode": "Elimination: eleme kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-application",
    "word": "application",
    "normalized": "application",
    "lemma": "application",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "başvuru",
      "talep"
    ],
    "englishDefinition": "Application: başvuru kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "We have received applications from more than 150 students.",
    "exampleTr": "Örnek: \"başvuru\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/application/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "application in practice",
      "academic application"
    ],
    "memoryCode": "Application: başvuru kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-profitable",
    "word": "profitable",
    "normalized": "profitable",
    "lemma": "profitable",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "kazançlı",
      "yararlı"
    ],
    "englishDefinition": "Profitable: kazançlı kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "It’s more profitable to sell directly to the public.",
    "exampleTr": "Örnek: \"kazançlı\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/profitable/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "profitable in practice",
      "academic profitable"
    ],
    "memoryCode": "Profitable: kazançlı kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-severe",
    "word": "severe",
    "normalized": "severe",
    "lemma": "severe",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "şiddetli",
      "ciddi"
    ],
    "englishDefinition": "Severe: şiddetli kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "This is a school for children with serious learning difficulties.",
    "exampleTr": "Örnek: \"şiddetli\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/severe/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "severe in practice",
      "academic severe"
    ],
    "memoryCode": "Severe: şiddetli kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-abrupt",
    "word": "abrupt",
    "normalized": "abrupt",
    "lemma": "abrupt",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "birdenbire",
      "ani"
    ],
    "englishDefinition": "Abrupt: birdenbire kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Our conversation came to an abrupt end when his parents came home.",
    "exampleTr": "Örnek: \"birdenbire\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/abrupt/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "abrupt in practice",
      "academic abrupt"
    ],
    "memoryCode": "Abrupt: birdenbire kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-exclude",
    "word": "exclude",
    "normalized": "exclude",
    "lemma": "exclude",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "hariç tutmak",
      "dahil etmemek"
    ],
    "englishDefinition": "Exclude: hariç tutmak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "It wasn’t my intention to exclude her from the list, I just forgot her.",
    "exampleTr": "Örnek: \"hariç tutmak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/exclude/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "exclude in practice",
      "academic exclude"
    ],
    "memoryCode": "Exclude: hariç tutmak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-deliver",
    "word": "deliver",
    "normalized": "deliver",
    "lemma": "deliver",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "teslim etmek"
    ],
    "englishDefinition": "Deliver: teslim etmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "We had the burger delivered.",
    "exampleTr": "Örnek: \"teslim etmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/deliver/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "deliver in practice",
      "academic deliver"
    ],
    "memoryCode": "Deliver: teslim etmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-unearth",
    "word": "unearth",
    "normalized": "unearth",
    "lemma": "unearth",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "gün yüzüne çıkarmak",
      "keşfetmek"
    ],
    "englishDefinition": "Unearth: gün yüzüne çıkarmak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Thousands of bodies have been unearthed in mass graves.",
    "exampleTr": "Örnek: \"gün yüzüne çıkarmak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/unearth/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "unearth in practice",
      "academic unearth"
    ],
    "memoryCode": "Unearth: gün yüzüne çıkarmak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-urgency",
    "word": "urgency",
    "normalized": "urgency",
    "lemma": "urgency",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "aciliyet"
    ],
    "englishDefinition": "Urgency: aciliyet kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "She stressed the urgency of an early solution.",
    "exampleTr": "Örnek: \"aciliyet\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/urgency/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "urgency in practice",
      "academic urgency"
    ],
    "memoryCode": "Urgency: aciliyet kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-incentive",
    "word": "incentive",
    "normalized": "incentive",
    "lemma": "incentive",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "teşvik",
      "neden",
      "isteklendirme"
    ],
    "englishDefinition": "Incentive: teşvik kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The incentive to sell more is large, and it plainly works.",
    "exampleTr": "Örnek: \"teşvik\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/incentive/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "incentive in practice",
      "academic incentive"
    ],
    "memoryCode": "Incentive: teşvik kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-preservation",
    "word": "preservation",
    "normalized": "preservation",
    "lemma": "preservation",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "koruma",
      "muhafaza"
    ],
    "englishDefinition": "Preservation: koruma kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "There is great public concern about some of the chemicals used in food preservation.",
    "exampleTr": "Örnek: \"koruma\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/preservation/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "preservation in practice",
      "academic preservation"
    ],
    "memoryCode": "Preservation: koruma kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-objectivity",
    "word": "objectivity",
    "normalized": "objectivity",
    "lemma": "objectivity",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "tarafsızlık"
    ],
    "englishDefinition": "Objectivity: tarafsızlık kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Some have questioned the objectivity of his own investigation into the matter.",
    "exampleTr": "Örnek: \"tarafsızlık\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/objectivity/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "objectivity in practice",
      "academic objectivity"
    ],
    "memoryCode": "Objectivity: tarafsızlık kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-initial",
    "word": "initial",
    "normalized": "initial",
    "lemma": "initial",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "baştaki",
      "birinci"
    ],
    "englishDefinition": "Initial: baştaki kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The initial eathquake was followed by a series of aftershocks.",
    "exampleTr": "Örnek: \"baştaki\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/initial/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "initial in practice",
      "academic initial"
    ],
    "memoryCode": "Initial: baştaki kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-selective",
    "word": "selective",
    "normalized": "selective",
    "lemma": "selective",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "seçici",
      "seçmeli"
    ],
    "englishDefinition": "Selective: seçici kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "I’m more selective about the books I read than I used to be.",
    "exampleTr": "Örnek: \"seçici\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/selective/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "selective in practice",
      "academic selective"
    ],
    "memoryCode": "Selective: seçici kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-reduce",
    "word": "reduce",
    "normalized": "reduce",
    "lemma": "reduce",
    "partOfSpeech": "verb",
    "level": "B1",
    "turkishMeanings": [
      "azaltmak",
      "eksiltmek"
    ],
    "englishDefinition": "Reduce: azaltmak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "My weight reduces when I stop eating sugar.",
    "exampleTr": "Örnek: \"azaltmak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/reduce/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "reduce in practice",
      "academic reduce"
    ],
    "memoryCode": "Reduce: azaltmak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-specify",
    "word": "specify",
    "normalized": "specify",
    "lemma": "specify",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "belirtmek",
      "belirlemek"
    ],
    "englishDefinition": "Specify: belirtmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "He said we should meet but didn’t specify a time.",
    "exampleTr": "Örnek: \"belirtmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/specify/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "specify in practice",
      "academic specify"
    ],
    "memoryCode": "Specify: belirtmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-vague",
    "word": "vague",
    "normalized": "vague",
    "lemma": "vague",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "belirsiz",
      "anlaşılmaz"
    ],
    "englishDefinition": "Vague: belirsiz kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "I do have a vague memory of meeting her many years ago.",
    "exampleTr": "Örnek: \"belirsiz\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/vague/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "vague in practice",
      "academic vague"
    ],
    "memoryCode": "Vague: belirsiz kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-cooperative",
    "word": "cooperative",
    "normalized": "cooperative",
    "lemma": "cooperative",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "işbirliği"
    ],
    "englishDefinition": "Cooperative: işbirliği kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "He went voluntarily and was very cooperative.",
    "exampleTr": "Örnek: \"işbirliği\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/cooperative/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "cooperative in practice",
      "academic cooperative"
    ],
    "memoryCode": "Cooperative: işbirliği kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-distribution",
    "word": "distribution",
    "normalized": "distribution",
    "lemma": "distribution",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "dağıtma",
      "dağılım",
      "yayılma"
    ],
    "englishDefinition": "Distribution: dağıtma kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "She had it printed for distribution among her friends.",
    "exampleTr": "Örnek: \"dağıtma\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/distribution/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "distribution in practice",
      "academic distribution"
    ],
    "memoryCode": "Distribution: dağıtma kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-excessive",
    "word": "excessive",
    "normalized": "excessive",
    "lemma": "excessive",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "aşırı",
      "lüzumsuz"
    ],
    "englishDefinition": "Excessive: aşırı kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The directive will prevent employees from working excessive hours.",
    "exampleTr": "Örnek: \"aşırı\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/excessive/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "excessive in practice",
      "academic excessive"
    ],
    "memoryCode": "Excessive: aşırı kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-valid",
    "word": "valid",
    "normalized": "valid",
    "lemma": "valid",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "geçerli",
      "mantıklı"
    ],
    "englishDefinition": "Valid: geçerli kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The judge remarked that ignorance was not a valid defence.",
    "exampleTr": "Örnek: \"geçerli\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/valid/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "valid in practice",
      "academic valid"
    ],
    "memoryCode": "Valid: geçerli kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-hazardous",
    "word": "hazardous",
    "normalized": "hazardous",
    "lemma": "hazardous",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "tehlikeli",
      "riskli"
    ],
    "englishDefinition": "Hazardous: tehlikeli kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Heavy snow fell overnight, making road conditions hazardous.",
    "exampleTr": "Örnek: \"tehlikeli\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/hazardous/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "hazardous in practice",
      "academic hazardous"
    ],
    "memoryCode": "Hazardous: tehlikeli kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-spoil",
    "word": "spoil",
    "normalized": "spoil",
    "lemma": "spoil",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "şımartmak",
      "berbat etmek"
    ],
    "englishDefinition": "Spoil: şımartmak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "I haven’t read the book, so don’t spoil it for me by telling me what happens.",
    "exampleTr": "Örnek: \"şımartmak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/spoil/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "spoil in practice",
      "academic spoil"
    ],
    "memoryCode": "Spoil: şımartmak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-relieve",
    "word": "relieve",
    "normalized": "relieve",
    "lemma": "relieve",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "rahatlatmak",
      "gönlünü ferahlatmak"
    ],
    "englishDefinition": "Relieve: rahatlatmak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "This cream relieves the swelling caused by insect stings.",
    "exampleTr": "Örnek: \"rahatlatmak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/relieve/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "relieve in practice",
      "academic relieve"
    ],
    "memoryCode": "Relieve: rahatlatmak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-highlight",
    "word": "highlight",
    "normalized": "highlight",
    "lemma": "highlight",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "altını çizmek",
      "vurgulamak"
    ],
    "englishDefinition": "Highlight: altını çizmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The report highlights the need for safety.",
    "exampleTr": "Örnek: \"altını çizmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/highlight/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "highlight in practice",
      "academic highlight"
    ],
    "memoryCode": "Highlight: altını çizmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-belongings",
    "word": "belongings",
    "normalized": "belongings",
    "lemma": "belongings",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "kişisel eşyalar"
    ],
    "englishDefinition": "Belongings: kişisel eşyalar kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "I put a few personal belongings in a bag and left the house for the last time.",
    "exampleTr": "Örnek: \"kişisel eşyalar\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/belongings/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "belongings in practice",
      "academic belongings"
    ],
    "memoryCode": "Belongings: kişisel eşyalar kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-pattern",
    "word": "pattern",
    "normalized": "pattern",
    "lemma": "pattern",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "model",
      "desen",
      "yapı"
    ],
    "englishDefinition": "Pattern: model kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The curtains had a floral pattern.",
    "exampleTr": "Örnek: \"model\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/pattern/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "pattern in practice",
      "academic pattern"
    ],
    "memoryCode": "Pattern: model kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-detect",
    "word": "detect",
    "normalized": "detect",
    "lemma": "detect",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "saptamak",
      "belirlemek"
    ],
    "englishDefinition": "Detect: saptamak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Some sounds cannot be detected by the human ear.",
    "exampleTr": "Örnek: \"saptamak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/detect/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "detect in practice",
      "academic detect"
    ],
    "memoryCode": "Detect: saptamak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-abstract",
    "word": "abstract",
    "normalized": "abstract",
    "lemma": "abstract",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "soyut",
      "özetlemek"
    ],
    "englishDefinition": "Abstract: soyut kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Truth and beauty are abstract concepts.",
    "exampleTr": "Örnek: \"soyut\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/abstract/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "abstract in practice",
      "academic abstract"
    ],
    "memoryCode": "Abstract: soyut kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-candidate",
    "word": "candidate",
    "normalized": "candidate",
    "lemma": "candidate",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "aday"
    ],
    "englishDefinition": "Candidate: aday kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "We have interviewed four candidates for the job.",
    "exampleTr": "Örnek: \"aday\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/candidate/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "candidate in practice",
      "academic candidate"
    ],
    "memoryCode": "Candidate: aday kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-determine",
    "word": "determine",
    "normalized": "determine",
    "lemma": "determine",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "belirlemek",
      "saptamak",
      "kararlaştırmak"
    ],
    "englishDefinition": "Determine: belirlemek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Officials will determine whether or not the game will be played.",
    "exampleTr": "Örnek: \"belirlemek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/determine/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "determine in practice",
      "academic determine"
    ],
    "memoryCode": "Determine: belirlemek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-accumulate",
    "word": "accumulate",
    "normalized": "accumulate",
    "lemma": "accumulate",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "biriktirmek",
      "yığmak"
    ],
    "englishDefinition": "Accumulate: biriktirmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "We’ve accumulated so much rubbish over the years.",
    "exampleTr": "Örnek: \"biriktirmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/accumulate/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "accumulate in practice",
      "academic accumulate"
    ],
    "memoryCode": "Accumulate: biriktirmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-bother",
    "word": "bother",
    "normalized": "bother",
    "lemma": "bother",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "rahatsız etmek",
      "can sıkmak"
    ],
    "englishDefinition": "Bother: rahatsız etmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "It bothers me that he is out so much of the time.",
    "exampleTr": "Örnek: \"rahatsız etmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/bother/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "bother in practice",
      "academic bother"
    ],
    "memoryCode": "Bother: rahatsız etmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-abbreviate",
    "word": "abbreviate",
    "normalized": "abbreviate",
    "lemma": "abbreviate",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "sadeleştirmek",
      "kısaltmak"
    ],
    "englishDefinition": "Abbreviate: sadeleştirmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "“Chief Executive Officer” is abbreviated as “CEO”.",
    "exampleTr": "Örnek: \"sadeleştirmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/abbreviate/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "abbreviate in practice",
      "academic abbreviate"
    ],
    "memoryCode": "Abbreviate: sadeleştirmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-bizarre",
    "word": "bizarre",
    "normalized": "bizarre",
    "lemma": "bizarre",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "garip",
      "tuhaf"
    ],
    "englishDefinition": "Bizarre: garip kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "I had a really bizarre dream last night.",
    "exampleTr": "Örnek: \"garip\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/bizarre/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "bizarre in practice",
      "academic bizarre"
    ],
    "memoryCode": "Bizarre: garip kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-circulate",
    "word": "circulate",
    "normalized": "circulate",
    "lemma": "circulate",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "haberi yaymak havanın",
      "sıvının akımını sağlamak"
    ],
    "englishDefinition": "Circulate: haberi yaymak havanın kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "News of her retirement quickly circulated around the office.",
    "exampleTr": "Örnek: \"haberi yaymak havanın\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/circulate/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "circulate in practice",
      "academic circulate"
    ],
    "memoryCode": "Circulate: haberi yaymak havanın kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-rebellious",
    "word": "rebellious",
    "normalized": "rebellious",
    "lemma": "rebellious",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "isyankar",
      "asi"
    ],
    "englishDefinition": "Rebellious: isyankar kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "His teachers regard him as a rebellious, trouble-making boy.",
    "exampleTr": "Örnek: \"isyankar\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/rebellious/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "rebellious in practice",
      "academic rebellious"
    ],
    "memoryCode": "Rebellious: isyankar kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-unsteady",
    "word": "unsteady",
    "normalized": "unsteady",
    "lemma": "unsteady",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "istikrarsız",
      "değişken"
    ],
    "englishDefinition": "Unsteady: istikrarsız kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The report showed unemployment surging in an unsteady economy.",
    "exampleTr": "Örnek: \"istikrarsız\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/unsteady/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "unsteady in practice",
      "academic unsteady"
    ],
    "memoryCode": "Unsteady: istikrarsız kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-testimony",
    "word": "testimony",
    "normalized": "testimony",
    "lemma": "testimony",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "tanıklık",
      "delil"
    ],
    "englishDefinition": "Testimony: tanıklık kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Some doubts have been expressed about his testimony.",
    "exampleTr": "Örnek: \"tanıklık\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/testimony/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "testimony in practice",
      "academic testimony"
    ],
    "memoryCode": "Testimony: tanıklık kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-slight",
    "word": "slight",
    "normalized": "slight",
    "lemma": "slight",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "hafif",
      "az"
    ],
    "englishDefinition": "Slight: hafif kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "I had a slight headache.",
    "exampleTr": "Örnek: \"hafif\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/slight/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "slight in practice",
      "academic slight"
    ],
    "memoryCode": "Slight: hafif kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-cease",
    "word": "cease",
    "normalized": "cease",
    "lemma": "cease",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "son vermek",
      "durdurmak"
    ],
    "englishDefinition": "Cease: son vermek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Whether the protests will cease remains to be seen.",
    "exampleTr": "Örnek: \"son vermek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/cease/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "cease in practice",
      "academic cease"
    ],
    "memoryCode": "Cease: son vermek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-notice",
    "word": "notice",
    "normalized": "notice",
    "lemma": "notice",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "fark etmek"
    ],
    "englishDefinition": "Notice: fark etmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "He noticed that the woman staring at him.",
    "exampleTr": "Örnek: \"fark etmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/notice/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "notice in practice",
      "academic notice"
    ],
    "memoryCode": "Notice: fark etmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-arrogant",
    "word": "arrogant",
    "normalized": "arrogant",
    "lemma": "arrogant",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "kibirli",
      "küstah"
    ],
    "englishDefinition": "Arrogant: kibirli kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "I think he is arrogant and rude.",
    "exampleTr": "Örnek: \"kibirli\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/arrogant/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "arrogant in practice",
      "academic arrogant"
    ],
    "memoryCode": "Arrogant: kibirli kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-retreat",
    "word": "retreat",
    "normalized": "retreat",
    "lemma": "retreat",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "geri çekilmek"
    ],
    "englishDefinition": "Retreat: geri çekilmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The government is retreating from its promises.",
    "exampleTr": "Örnek: \"geri çekilmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/retreat/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "retreat in practice",
      "academic retreat"
    ],
    "memoryCode": "Retreat: geri çekilmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-deceit",
    "word": "deceit",
    "normalized": "deceit",
    "lemma": "deceit",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "hilekarlık",
      "dolandırıcılık"
    ],
    "englishDefinition": "Deceit: hilekarlık kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Sociopaths regularly use deceit and manipulation.",
    "exampleTr": "Örnek: \"hilekarlık\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/deceit/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "deceit in practice",
      "academic deceit"
    ],
    "memoryCode": "Deceit: hilekarlık kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-dwell",
    "word": "dwell",
    "normalized": "dwell",
    "lemma": "dwell",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "ikamet etmek",
      "yaşamak"
    ],
    "englishDefinition": "Dwell: ikamet etmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "She dwelt in remote parts of Asia for many years.",
    "exampleTr": "Örnek: \"ikamet etmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/dwell/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "dwell in practice",
      "academic dwell"
    ],
    "memoryCode": "Dwell: ikamet etmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-inscribe",
    "word": "inscribe",
    "normalized": "inscribe",
    "lemma": "inscribe",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "atfetmek",
      "yazmak"
    ],
    "englishDefinition": "Inscribe: atfetmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "She inscribed the book, “To my mother.”",
    "exampleTr": "Örnek: \"atfetmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/inscribe/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "inscribe in practice",
      "academic inscribe"
    ],
    "memoryCode": "Inscribe: atfetmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-well-preserved",
    "word": "well-preserved",
    "normalized": "well-preserved",
    "lemma": "well-preserved",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "iyi korunmuş",
      "yaşına göre iyi durumda"
    ],
    "englishDefinition": "Well-preserved: iyi korunmuş kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Most buildings in Paris are extremely well-preserved .",
    "exampleTr": "Örnek: \"iyi korunmuş\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/well-preserved/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "well-preserved in practice",
      "academic well-preserved"
    ],
    "memoryCode": "Well-preserved: iyi korunmuş kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-conquer",
    "word": "conquer",
    "normalized": "conquer",
    "lemma": "conquer",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "fethetmek",
      "yenmek"
    ],
    "englishDefinition": "Conquer: fethetmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The Spanish conquered the New World in the 16th century.",
    "exampleTr": "Örnek: \"fethetmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/conquer/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "conquer in practice",
      "academic conquer"
    ],
    "memoryCode": "Conquer: fethetmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-offer",
    "word": "offer",
    "normalized": "offer",
    "lemma": "offer",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "teklif vermek"
    ],
    "englishDefinition": "Offer: teklif vermek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "He was offered a job in Ankara.",
    "exampleTr": "Örnek: \"teklif vermek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/offer/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "offer in practice",
      "academic offer"
    ],
    "memoryCode": "Offer: teklif vermek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-offspring",
    "word": "offspring",
    "normalized": "offspring",
    "lemma": "offspring",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "yavru",
      "çocuk"
    ],
    "englishDefinition": "Offspring: yavru kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "It is unclear how blood pressure may affect offspring gender.",
    "exampleTr": "Örnek: \"yavru\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/offspring/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "offspring in practice",
      "academic offspring"
    ],
    "memoryCode": "Offspring: yavru kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-reproduction",
    "word": "reproduction",
    "normalized": "reproduction",
    "lemma": "reproduction",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "çoğalma",
      "yeniden yapma"
    ],
    "englishDefinition": "Reproduction: çoğalma kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The slow reproduction rate makes gorillas vulnerable to any population declines.",
    "exampleTr": "Örnek: \"çoğalma\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/reproduction/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "reproduction in practice",
      "academic reproduction"
    ],
    "memoryCode": "Reproduction: çoğalma kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-participate",
    "word": "participate",
    "normalized": "participate",
    "lemma": "participate",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "katılmak",
      "ortak olmak"
    ],
    "englishDefinition": "Participate: katılmak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Foreign firms participate through production-sharing and work contracts.",
    "exampleTr": "Örnek: \"katılmak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/participate/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "participate in practice",
      "academic participate"
    ],
    "memoryCode": "Participate: katılmak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-fatalistic",
    "word": "fatalistic",
    "normalized": "fatalistic",
    "lemma": "fatalistic",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "her şeyi kadere bırakan"
    ],
    "englishDefinition": "Fatalistic: her şeyi kadere bırakan kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The Stoics believed that a fatalistic universe was not such a bad thing.",
    "exampleTr": "Örnek: \"her şeyi kadere bırakan\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/fatalistic/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "fatalistic in practice",
      "academic fatalistic"
    ],
    "memoryCode": "Fatalistic: her şeyi kadere bırakan kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-sacrifice",
    "word": "sacrifice",
    "normalized": "sacrifice",
    "lemma": "sacrifice",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "kurban etmek",
      "feda etmek"
    ],
    "englishDefinition": "Sacrifice: kurban etmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "His parents made sacrifices so that he could have a good education.",
    "exampleTr": "Örnek: \"kurban etmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/sacrifice/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "sacrifice in practice",
      "academic sacrifice"
    ],
    "memoryCode": "Sacrifice: kurban etmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-reflect",
    "word": "reflect",
    "normalized": "reflect",
    "lemma": "reflect",
    "partOfSpeech": "verb",
    "level": "B1",
    "turkishMeanings": [
      "yansıtmak",
      "göstermek"
    ],
    "englishDefinition": "Reflect: yansıtmak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "She could see herself reflected in Tom’s eyes.",
    "exampleTr": "Örnek: \"yansıtmak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/reflect/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "reflect in practice",
      "academic reflect"
    ],
    "memoryCode": "Reflect: yansıtmak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-appropriate",
    "word": "appropriate",
    "normalized": "appropriate",
    "lemma": "appropriate",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "münasip",
      "uygun"
    ],
    "englishDefinition": "Appropriate: münasip kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "It’s not an appropriate time to make a speech.",
    "exampleTr": "Örnek: \"münasip\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/appropriate/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "appropriate in practice",
      "academic appropriate"
    ],
    "memoryCode": "Appropriate: münasip kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-precursor",
    "word": "precursor",
    "normalized": "precursor",
    "lemma": "precursor",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "önceki",
      "öncü"
    ],
    "englishDefinition": "Precursor: önceki kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Sulphur dioxide is the main precursor of acid rain.",
    "exampleTr": "Örnek: \"önceki\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/precursor/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "precursor in practice",
      "academic precursor"
    ],
    "memoryCode": "Precursor: önceki kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-spread",
    "word": "spread",
    "normalized": "spread",
    "lemma": "spread",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "yaymak",
      "dağıtmak"
    ],
    "englishDefinition": "Spread: yaymak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Never share your toothbrush as this can spread infections.",
    "exampleTr": "Örnek: \"yaymak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/spread/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "spread in practice",
      "academic spread"
    ],
    "memoryCode": "Spread: yaymak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-unavoidable",
    "word": "unavoidable",
    "normalized": "unavoidable",
    "lemma": "unavoidable",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "kaçınılmaz",
      "iptal edilemez"
    ],
    "englishDefinition": "Unavoidable: kaçınılmaz kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Credit cards nowadays are an unavoidable necessity.",
    "exampleTr": "Örnek: \"kaçınılmaz\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/unavoidable/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "unavoidable in practice",
      "academic unavoidable"
    ],
    "memoryCode": "Unavoidable: kaçınılmaz kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-commitment",
    "word": "commitment",
    "normalized": "commitment",
    "lemma": "commitment",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "bağlılık",
      "kararlılık"
    ],
    "englishDefinition": "Commitment: bağlılık kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "This work requires commitment and full confidentiality.",
    "exampleTr": "Örnek: \"bağlılık\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/commitment/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "commitment in practice",
      "academic commitment"
    ],
    "memoryCode": "Commitment: bağlılık kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-substantial",
    "word": "substantial",
    "normalized": "substantial",
    "lemma": "substantial",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "varlıklı",
      "önemli"
    ],
    "englishDefinition": "Substantial: varlıklı kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "She inherited a substantial fortune from her grandfather.",
    "exampleTr": "Örnek: \"varlıklı\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/substantial/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "substantial in practice",
      "academic substantial"
    ],
    "memoryCode": "Substantial: varlıklı kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-dictate",
    "word": "dictate",
    "normalized": "dictate",
    "lemma": "dictate",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "dikte etmek"
    ],
    "englishDefinition": "Dictate: dikte etmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Guide their choices rather than dictate them.",
    "exampleTr": "Örnek: \"dikte etmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/dictate/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "dictate in practice",
      "academic dictate"
    ],
    "memoryCode": "Dictate: dikte etmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-shortage",
    "word": "shortage",
    "normalized": "shortage",
    "lemma": "shortage",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "eksiklik",
      "kıtlık"
    ],
    "englishDefinition": "Shortage: eksiklik kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Water shortage is an increasingly serious problem.",
    "exampleTr": "Örnek: \"eksiklik\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/shortage/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "shortage in practice",
      "academic shortage"
    ],
    "memoryCode": "Shortage: eksiklik kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-conduct",
    "word": "conduct",
    "normalized": "conduct",
    "lemma": "conduct",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "yürütmek",
      "yönetmek"
    ],
    "englishDefinition": "Conduct: yürütmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "We are conducting a survey to find out what our customers think of their local bus service.",
    "exampleTr": "Örnek: \"yürütmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/conduct/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "conduct in practice",
      "academic conduct"
    ],
    "memoryCode": "Conduct: yürütmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-emerge",
    "word": "emerge",
    "normalized": "emerge",
    "lemma": "emerge",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "ortaya çıkmak",
      "meydana çıkmak"
    ],
    "englishDefinition": "Emerge: ortaya çıkmak kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "No new evidence emerged during the investigation.",
    "exampleTr": "Örnek: \"ortaya çıkmak\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/emerge/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "emerge in practice",
      "academic emerge"
    ],
    "memoryCode": "Emerge: ortaya çıkmak kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-suitable",
    "word": "suitable",
    "normalized": "suitable",
    "lemma": "suitable",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "uygun",
      "elverişli",
      "münasip"
    ],
    "englishDefinition": "Suitable: uygun kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "This show is not suitable for children.",
    "exampleTr": "Örnek: \"uygun\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/suitable/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "suitable in practice",
      "academic suitable"
    ],
    "memoryCode": "Suitable: uygun kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-triumph",
    "word": "triumph",
    "normalized": "triumph",
    "lemma": "triumph",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "zafer",
      "galibiyet"
    ],
    "englishDefinition": "Triumph: zafer kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "The righteous always will triumph in the end.",
    "exampleTr": "Örnek: \"zafer\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/triumph/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "must_know",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "triumph in practice",
      "academic triumph"
    ],
    "memoryCode": "Triumph: zafer kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-yearn",
    "word": "yearn",
    "normalized": "yearn",
    "lemma": "yearn",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "özlemek",
      "hasretini çekmek"
    ],
    "englishDefinition": "Yearn: özlemek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Sometimes I just yearn to be alone.",
    "exampleTr": "Örnek: \"özlemek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/yearn/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "yearn in practice",
      "academic yearn"
    ],
    "memoryCode": "Yearn: özlemek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-acknowledge",
    "word": "acknowledge",
    "normalized": "acknowledge",
    "lemma": "acknowledge",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "kabullenmek",
      "tanımak"
    ],
    "englishDefinition": "Acknowledge: kabullenmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "She does not acknowledge that I haven’t done anything wrong.",
    "exampleTr": "Örnek: \"kabullenmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/acknowledge/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "acknowledge in practice",
      "academic acknowledge"
    ],
    "memoryCode": "Acknowledge: kabullenmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-foremost",
    "word": "foremost",
    "normalized": "foremost",
    "lemma": "foremost",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "en başta gelen",
      "en önemli"
    ],
    "englishDefinition": "Foremost: en başta gelen kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "This problem has been foremost in our minds recently.",
    "exampleTr": "Örnek: \"en başta gelen\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/foremost/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "foremost in practice",
      "academic foremost"
    ],
    "memoryCode": "Foremost: en başta gelen kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-damaging",
    "word": "damaging",
    "normalized": "damaging",
    "lemma": "damaging",
    "partOfSpeech": "adjective",
    "level": "B2",
    "turkishMeanings": [
      "zarar verici",
      "zararlı"
    ],
    "englishDefinition": "Damaging: zarar verici kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Studies show that it may protect your skin from the damaging rays of the sun.",
    "exampleTr": "Örnek: \"zarar verici\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/damaging/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "damaging in practice",
      "academic damaging"
    ],
    "memoryCode": "Damaging: zarar verici kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-tendency",
    "word": "tendency",
    "normalized": "tendency",
    "lemma": "tendency",
    "partOfSpeech": "noun",
    "level": "B2",
    "turkishMeanings": [
      "eğilim",
      "meyletme"
    ],
    "englishDefinition": "Tendency: eğilim kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "Her tendency to exaggerate is well known.",
    "exampleTr": "Örnek: \"eğilim\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/tendency/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "tendency in practice",
      "academic tendency"
    ],
    "memoryCode": "Tendency: eğilim kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-undergo",
    "word": "undergo",
    "normalized": "undergo",
    "lemma": "undergo",
    "partOfSpeech": "verb",
    "level": "B2",
    "turkishMeanings": [
      "(hastalık) geçirmek",
      "katlanmak"
    ],
    "englishDefinition": "Undergo: (hastalık) geçirmek kavramını zihinde canlandıran akılda kalıcı sahne.",
    "example": "He underwent an operation on a tumour in his right lung last year.",
    "exampleTr": "Örnek: \"(hastalık) geçirmek\" anlamında sınav bağlamında kurulan cümle.",
    "pronunciation": "/undergo/",
    "sourceTags": [
      "flashcards"
    ],
    "frequency": 80,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "undergo in practice",
      "academic undergo"
    ],
    "memoryCode": "Undergo: (hastalık) geçirmek kavramını zihinde canlandıran akılda kalıcı sahne."
  },
  {
    "id": "inv-call off",
    "word": "call off",
    "normalized": "call off",
    "lemma": "call off",
    "partOfSpeech": "phrasal verb",
    "level": "B1",
    "turkishMeanings": [
      "iptal etmek"
    ],
    "englishDefinition": "to cancel an event or agreement",
    "example": "Please remember how to use call off correctly in formal writing.",
    "exampleTr": "Lütfen call off ifadesini resmî yazımda doğru kullanmayı unutmayın.",
    "sourceTags": [
      "flashcards",
      "other"
    ],
    "frequency": 75,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": true,
    "collocations": [
      "call off"
    ],
    "memoryCode": ""
  },
  {
    "id": "inv-give up",
    "word": "give up",
    "normalized": "give up",
    "lemma": "give up",
    "partOfSpeech": "phrasal verb",
    "level": "B1",
    "turkishMeanings": [
      "vazgeçmek, bırakmak"
    ],
    "englishDefinition": "to stop trying or doing something",
    "example": "Please remember how to use give up correctly in formal writing.",
    "exampleTr": "Lütfen give up ifadesini resmî yazımda doğru kullanmayı unutmayın.",
    "sourceTags": [
      "flashcards",
      "other"
    ],
    "frequency": 75,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": true,
    "collocations": [
      "give up"
    ],
    "memoryCode": ""
  },
  {
    "id": "inv-look into",
    "word": "look into",
    "normalized": "look into",
    "lemma": "look into",
    "partOfSpeech": "phrasal verb",
    "level": "B1",
    "turkishMeanings": [
      "araştırmak, incelemek"
    ],
    "englishDefinition": "to investigate or examine the facts",
    "example": "Please remember how to use look into correctly in formal writing.",
    "exampleTr": "Lütfen look into ifadesini resmî yazımda doğru kullanmayı unutmayın.",
    "sourceTags": [
      "flashcards",
      "other"
    ],
    "frequency": 75,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": true,
    "collocations": [
      "look into"
    ],
    "memoryCode": ""
  },
  {
    "id": "inv-put off",
    "word": "put off",
    "normalized": "put off",
    "lemma": "put off",
    "partOfSpeech": "phrasal verb",
    "level": "B1",
    "turkishMeanings": [
      "ertelemek"
    ],
    "englishDefinition": "to postpone or delay something",
    "example": "Please remember how to use put off correctly in formal writing.",
    "exampleTr": "Lütfen put off ifadesini resmî yazımda doğru kullanmayı unutmayın.",
    "sourceTags": [
      "flashcards",
      "other"
    ],
    "frequency": 75,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": true,
    "collocations": [
      "put off"
    ],
    "memoryCode": ""
  },
  {
    "id": "inv-rely on",
    "word": "rely on",
    "normalized": "rely on",
    "lemma": "rely on",
    "partOfSpeech": "phrasal verb",
    "level": "B1",
    "turkishMeanings": [
      "güvenmek, bel bağlamak"
    ],
    "englishDefinition": "to depend on with confidence",
    "example": "Please remember how to use rely on correctly in formal writing.",
    "exampleTr": "Lütfen rely on ifadesini resmî yazımda doğru kullanmayı unutmayın.",
    "sourceTags": [
      "flashcards",
      "other"
    ],
    "frequency": 75,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": true,
    "collocations": [
      "rely on"
    ],
    "memoryCode": ""
  },
  {
    "id": "inv-turn down",
    "word": "turn down",
    "normalized": "turn down",
    "lemma": "turn down",
    "partOfSpeech": "phrasal verb",
    "level": "B1",
    "turkishMeanings": [
      "reddetmek, geri çevirmek"
    ],
    "englishDefinition": "to reject or refuse an offer or request",
    "example": "Please remember how to use turn down correctly in formal writing.",
    "exampleTr": "Lütfen turn down ifadesini resmî yazımda doğru kullanmayı unutmayın.",
    "sourceTags": [
      "flashcards",
      "other"
    ],
    "frequency": 75,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": true,
    "collocations": [
      "turn down"
    ],
    "memoryCode": ""
  },
  {
    "id": "inv-accurate",
    "word": "accurate",
    "normalized": "accurate",
    "lemma": "accurate",
    "partOfSpeech": "phrase",
    "level": "B2",
    "turkishMeanings": [
      "doğru, hatasız, kesin"
    ],
    "englishDefinition": "correct in all details and exact",
    "example": "Please remember how to use accurate correctly in formal writing.",
    "exampleTr": "Lütfen accurate ifadesini resmî yazımda doğru kullanmayı unutmayın.",
    "sourceTags": [
      "flashcards",
      "other"
    ],
    "frequency": 75,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "accurate"
    ],
    "memoryCode": ""
  },
  {
    "id": "inv-fluctuate",
    "word": "fluctuate",
    "normalized": "fluctuate",
    "lemma": "fluctuate",
    "partOfSpeech": "phrase",
    "level": "B2",
    "turkishMeanings": [
      "dalgalanmak, değişkenlik göstermek"
    ],
    "englishDefinition": "to rise and fall irregularly in number or amount",
    "example": "Please remember how to use fluctuate correctly in formal writing.",
    "exampleTr": "Lütfen fluctuate ifadesini resmî yazımda doğru kullanmayı unutmayın.",
    "sourceTags": [
      "flashcards",
      "other"
    ],
    "frequency": 75,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "fluctuate"
    ],
    "memoryCode": ""
  },
  {
    "id": "inv-inevitable",
    "word": "inevitable",
    "normalized": "inevitable",
    "lemma": "inevitable",
    "partOfSpeech": "phrase",
    "level": "B2",
    "turkishMeanings": [
      "kaçınılmaz"
    ],
    "englishDefinition": "certain to happen and unavoidable",
    "example": "Please remember how to use inevitable correctly in formal writing.",
    "exampleTr": "Lütfen inevitable ifadesini resmî yazımda doğru kullanmayı unutmayın.",
    "sourceTags": [
      "flashcards",
      "other"
    ],
    "frequency": 75,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "inevitable"
    ],
    "memoryCode": ""
  },
  {
    "id": "inv-pioneer",
    "word": "pioneer",
    "normalized": "pioneer",
    "lemma": "pioneer",
    "partOfSpeech": "phrase",
    "level": "B2",
    "turkishMeanings": [
      "öncü, çığır açan"
    ],
    "englishDefinition": "a person who begins or helps develop something new",
    "example": "Please remember how to use pioneer correctly in formal writing.",
    "exampleTr": "Lütfen pioneer ifadesini resmî yazımda doğru kullanmayı unutmayın.",
    "sourceTags": [
      "flashcards",
      "other"
    ],
    "frequency": 75,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "pioneer"
    ],
    "memoryCode": ""
  },
  {
    "id": "inv-reluctant",
    "word": "reluctant",
    "normalized": "reluctant",
    "lemma": "reluctant",
    "partOfSpeech": "phrase",
    "level": "B2",
    "turkishMeanings": [
      "isteksiz, tereddütlü"
    ],
    "englishDefinition": "unwilling and hesitant to do something",
    "example": "Please remember how to use reluctant correctly in formal writing.",
    "exampleTr": "Lütfen reluctant ifadesini resmî yazımda doğru kullanmayı unutmayın.",
    "sourceTags": [
      "flashcards",
      "other"
    ],
    "frequency": 75,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "reluctant"
    ],
    "memoryCode": ""
  },
  {
    "id": "inv-considerably",
    "word": "considerably",
    "normalized": "considerably",
    "lemma": "considerably",
    "partOfSpeech": "phrase",
    "level": "B2",
    "turkishMeanings": [
      "önemli ölçüde, oldukça"
    ],
    "englishDefinition": "to a notably large or significant extent",
    "example": "Please remember how to use considerably correctly in formal writing.",
    "exampleTr": "Lütfen considerably ifadesini resmî yazımda doğru kullanmayı unutmayın.",
    "sourceTags": [
      "flashcards",
      "other"
    ],
    "frequency": 75,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "considerably"
    ],
    "memoryCode": ""
  },
  {
    "id": "inv-exclusively",
    "word": "exclusively",
    "normalized": "exclusively",
    "lemma": "exclusively",
    "partOfSpeech": "phrase",
    "level": "B2",
    "turkishMeanings": [
      "yalnızca, sadece, özel olarak"
    ],
    "englishDefinition": "only and entirely for a specific purpose or group",
    "example": "Please remember how to use exclusively correctly in formal writing.",
    "exampleTr": "Lütfen exclusively ifadesini resmî yazımda doğru kullanmayı unutmayın.",
    "sourceTags": [
      "flashcards",
      "other"
    ],
    "frequency": 75,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "exclusively"
    ],
    "memoryCode": ""
  },
  {
    "id": "inv-predominantly",
    "word": "predominantly",
    "normalized": "predominantly",
    "lemma": "predominantly",
    "partOfSpeech": "phrase",
    "level": "B2",
    "turkishMeanings": [
      "ağırlıklı olarak, çoğunlukla"
    ],
    "englishDefinition": "mainly, for the most part, or primarily",
    "example": "Please remember how to use predominantly correctly in formal writing.",
    "exampleTr": "Lütfen predominantly ifadesini resmî yazımda doğru kullanmayı unutmayın.",
    "sourceTags": [
      "flashcards",
      "other"
    ],
    "frequency": 75,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "predominantly"
    ],
    "memoryCode": ""
  },
  {
    "id": "inv-substantially",
    "word": "substantially",
    "normalized": "substantially",
    "lemma": "substantially",
    "partOfSpeech": "phrase",
    "level": "B2",
    "turkishMeanings": [
      "büyük ölçüde, esaslı şekilde"
    ],
    "englishDefinition": "to a great or significant degree",
    "example": "Please remember how to use substantially correctly in formal writing.",
    "exampleTr": "Lütfen substantially ifadesini resmî yazımda doğru kullanmayı unutmayın.",
    "sourceTags": [
      "flashcards",
      "other"
    ],
    "frequency": 75,
    "ydsPriority": "high",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "substantially"
    ],
    "memoryCode": ""
  },
  {
    "id": "inv-water",
    "word": "water",
    "normalized": "water",
    "lemma": "water",
    "partOfSpeech": "noun",
    "level": "A1",
    "turkishMeanings": [
      "su"
    ],
    "englishDefinition": "clear liquid without color or taste",
    "example": "Drink plenty of water.",
    "exampleTr": "Bol su için.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 90,
    "ydsPriority": "medium",
    "academic": false,
    "phrasalVerb": false,
    "collocations": [
      "study water"
    ]
  },
  {
    "id": "inv-book",
    "word": "book",
    "normalized": "book",
    "lemma": "book",
    "partOfSpeech": "noun",
    "level": "A1",
    "turkishMeanings": [
      "kitap"
    ],
    "englishDefinition": "a written or printed work",
    "example": "She read an interesting book.",
    "exampleTr": "İlginç bir kitap okudu.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 90,
    "ydsPriority": "medium",
    "academic": false,
    "phrasalVerb": false,
    "collocations": [
      "study book"
    ]
  },
  {
    "id": "inv-friend",
    "word": "friend",
    "normalized": "friend",
    "lemma": "friend",
    "partOfSpeech": "noun",
    "level": "A1",
    "turkishMeanings": [
      "arkadaş",
      "dost"
    ],
    "englishDefinition": "a person whom one knows and with whom one has a bond",
    "example": "He met his best friend.",
    "exampleTr": "En iyi arkadaşıyla buluştu.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 90,
    "ydsPriority": "medium",
    "academic": false,
    "phrasalVerb": false,
    "collocations": [
      "study friend"
    ]
  },
  {
    "id": "inv-student",
    "word": "student",
    "normalized": "student",
    "lemma": "student",
    "partOfSpeech": "noun",
    "level": "A1",
    "turkishMeanings": [
      "öğrenci"
    ],
    "englishDefinition": "a person who is studying at a school or college",
    "example": "She is a university student.",
    "exampleTr": "O bir üniversite öğrencisidir.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 90,
    "ydsPriority": "medium",
    "academic": false,
    "phrasalVerb": false,
    "collocations": [
      "study student"
    ]
  },
  {
    "id": "inv-family",
    "word": "family",
    "normalized": "family",
    "lemma": "family",
    "partOfSpeech": "noun",
    "level": "A1",
    "turkishMeanings": [
      "aile"
    ],
    "englishDefinition": "a group of one or more parents and their children",
    "example": "Family is very important.",
    "exampleTr": "Aile çok önemlidir.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 90,
    "ydsPriority": "medium",
    "academic": false,
    "phrasalVerb": false,
    "collocations": [
      "study family"
    ]
  },
  {
    "id": "inv-school",
    "word": "school",
    "normalized": "school",
    "lemma": "school",
    "partOfSpeech": "noun",
    "level": "A1",
    "turkishMeanings": [
      "okul"
    ],
    "englishDefinition": "an institution for educating children",
    "example": "The school is close to home.",
    "exampleTr": "Okul eve yakındır.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 90,
    "ydsPriority": "medium",
    "academic": false,
    "phrasalVerb": false,
    "collocations": [
      "study school"
    ]
  },
  {
    "id": "inv-speak",
    "word": "speak",
    "normalized": "speak",
    "lemma": "speak",
    "partOfSpeech": "verb",
    "level": "A1",
    "turkishMeanings": [
      "konuşmak"
    ],
    "englishDefinition": "say something in order to convey information",
    "example": "Can you speak English?",
    "exampleTr": "İngilizce konuşabiliyor musunuz?",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 90,
    "ydsPriority": "medium",
    "academic": false,
    "phrasalVerb": false,
    "collocations": [
      "study speak"
    ]
  },
  {
    "id": "inv-listen",
    "word": "listen",
    "normalized": "listen",
    "lemma": "listen",
    "partOfSpeech": "verb",
    "level": "A1",
    "turkishMeanings": [
      "dinlemek"
    ],
    "englishDefinition": "give one's attention to a sound",
    "example": "Listen to the teacher.",
    "exampleTr": "Öğretmeni dinleyin.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 90,
    "ydsPriority": "medium",
    "academic": false,
    "phrasalVerb": false,
    "collocations": [
      "study listen"
    ]
  },
  {
    "id": "inv-happy",
    "word": "happy",
    "normalized": "happy",
    "lemma": "happy",
    "partOfSpeech": "adjective",
    "level": "A1",
    "turkishMeanings": [
      "mutlu"
    ],
    "englishDefinition": "feeling or showing pleasure",
    "example": "They were very happy.",
    "exampleTr": "Çok mutluydular.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 90,
    "ydsPriority": "medium",
    "academic": false,
    "phrasalVerb": false,
    "collocations": [
      "study happy"
    ]
  },
  {
    "id": "inv-small",
    "word": "small",
    "normalized": "small",
    "lemma": "small",
    "partOfSpeech": "adjective",
    "level": "A1",
    "turkishMeanings": [
      "küçük"
    ],
    "englishDefinition": "of limited size",
    "example": "They live in a small house.",
    "exampleTr": "Küçük bir evde yaşıyorlar.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 90,
    "ydsPriority": "medium",
    "academic": false,
    "phrasalVerb": false,
    "collocations": [
      "study small"
    ]
  },
  {
    "id": "inv-holiday",
    "word": "holiday",
    "normalized": "holiday",
    "lemma": "holiday",
    "partOfSpeech": "noun",
    "level": "A2",
    "turkishMeanings": [
      "tatil",
      "bayram"
    ],
    "englishDefinition": "an extended period of leisure and recreation",
    "example": "We spent our holiday in Izmir.",
    "exampleTr": "Tatilimizi İzmir'de geçirdik.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 90,
    "ydsPriority": "medium",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "study holiday"
    ]
  },
  {
    "id": "inv-weather",
    "word": "weather",
    "normalized": "weather",
    "lemma": "weather",
    "partOfSpeech": "noun",
    "level": "A2",
    "turkishMeanings": [
      "hava durumu"
    ],
    "englishDefinition": "the state of the atmosphere at a place and time",
    "example": "The weather was sunny.",
    "exampleTr": "Hava güneşliydi.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 90,
    "ydsPriority": "medium",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "study weather"
    ]
  },
  {
    "id": "inv-arrive",
    "word": "arrive",
    "normalized": "arrive",
    "lemma": "arrive",
    "partOfSpeech": "verb",
    "level": "A2",
    "turkishMeanings": [
      "varmak",
      "ulaşmak"
    ],
    "englishDefinition": "reach a place at the end of a journey",
    "example": "The train will arrive soon.",
    "exampleTr": "Tren yakında varacak.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 90,
    "ydsPriority": "medium",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "study arrive"
    ]
  },
  {
    "id": "inv-decide",
    "word": "decide",
    "normalized": "decide",
    "lemma": "decide",
    "partOfSpeech": "verb",
    "level": "A2",
    "turkishMeanings": [
      "karar vermek"
    ],
    "englishDefinition": "make a choice from a number of alternatives",
    "example": "We decided to stay home.",
    "exampleTr": "Evde kalmaya karar verdik.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 90,
    "ydsPriority": "medium",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "study decide"
    ]
  },
  {
    "id": "inv-crowded",
    "word": "crowded",
    "normalized": "crowded",
    "lemma": "crowded",
    "partOfSpeech": "adjective",
    "level": "A2",
    "turkishMeanings": [
      "kalabalık"
    ],
    "englishDefinition": "full of people, leaving little or no room",
    "example": "The bus was very crowded.",
    "exampleTr": "Otobüs çok kalabalıktı.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 90,
    "ydsPriority": "medium",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "study crowded"
    ]
  },
  {
    "id": "inv-polite",
    "word": "polite",
    "normalized": "polite",
    "lemma": "polite",
    "partOfSpeech": "adjective",
    "level": "A2",
    "turkishMeanings": [
      "kibar",
      "nazik"
    ],
    "englishDefinition": "having or showing good manners",
    "example": "He was always polite to elders.",
    "exampleTr": "Büyüklere karşı daima nazikti.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 90,
    "ydsPriority": "medium",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "study polite"
    ]
  },
  {
    "id": "inv-danger",
    "word": "danger",
    "normalized": "danger",
    "lemma": "danger",
    "partOfSpeech": "noun",
    "level": "A2",
    "turkishMeanings": [
      "tehlike"
    ],
    "englishDefinition": "the possibility of suffering harm or injury",
    "example": "He was warned about the danger.",
    "exampleTr": "Tehlike konusunda uyarıldı.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 90,
    "ydsPriority": "medium",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "study danger"
    ]
  },
  {
    "id": "inv-borrow",
    "word": "borrow",
    "normalized": "borrow",
    "lemma": "borrow",
    "partOfSpeech": "verb",
    "level": "A2",
    "turkishMeanings": [
      "ödünç almak"
    ],
    "englishDefinition": "take and use with the intention of returning",
    "example": "Can I borrow your pen?",
    "exampleTr": "Kalemini ödünç alabilir miyim?",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 90,
    "ydsPriority": "medium",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "study borrow"
    ]
  },
  {
    "id": "inv-ephemeral",
    "word": "ephemeral",
    "normalized": "ephemeral",
    "lemma": "ephemeral",
    "partOfSpeech": "adjective",
    "level": "C1",
    "turkishMeanings": [
      "kısa ömürlü",
      "geçici"
    ],
    "englishDefinition": "lasting for a very short time",
    "example": "Fame in the digital era can be notoriously ephemeral.",
    "exampleTr": "Dijital çağda şöhret meşhur bir şekilde geçici olabilir.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 40,
    "ydsPriority": "low",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "study ephemeral"
    ]
  },
  {
    "id": "inv-scrutinize",
    "word": "scrutinize",
    "normalized": "scrutinize",
    "lemma": "scrutinize",
    "partOfSpeech": "verb",
    "level": "C1",
    "turkishMeanings": [
      "dikkatle incelemek",
      "mercek altına almak"
    ],
    "englishDefinition": "examine or inspect closely and thoroughly",
    "example": "Regulators will closely scrutinize the proposed merger.",
    "exampleTr": "Düzenleyiciler önerilen birleşmeyi titizlikle inceleyecek.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 40,
    "ydsPriority": "low",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "study scrutinize"
    ]
  },
  {
    "id": "inv-precarious",
    "word": "precarious",
    "normalized": "precarious",
    "lemma": "precarious",
    "partOfSpeech": "adjective",
    "level": "C1",
    "turkishMeanings": [
      "güvencesiz",
      "tehlikeli",
      "pamuk ipliğine bağlı"
    ],
    "englishDefinition": "not securely held or in position; dangerously likely to fall",
    "example": "The refugees were living in precarious conditions.",
    "exampleTr": "Mülteciler güvencesiz koşullarda yaşıyordu.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 40,
    "ydsPriority": "low",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "study precarious"
    ]
  },
  {
    "id": "inv-inexorable",
    "word": "inexorable",
    "normalized": "inexorable",
    "lemma": "inexorable",
    "partOfSpeech": "adjective",
    "level": "C1",
    "turkishMeanings": [
      "durdurulamaz",
      "kaçınılmaz",
      "amansız"
    ],
    "englishDefinition": "impossible to stop or prevent",
    "example": "The inexorable rise of global temperatures threatens coastal zones.",
    "exampleTr": "Küresel sıcaklıkların durdurulamaz artışı kıyı bölgelerini tehdit ediyor.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 40,
    "ydsPriority": "low",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "study inexorable"
    ]
  },
  {
    "id": "inv-pragmatic",
    "word": "pragmatic",
    "normalized": "pragmatic",
    "lemma": "pragmatic",
    "partOfSpeech": "adjective",
    "level": "C1",
    "turkishMeanings": [
      "faydacı",
      "uygulamaya yönelik",
      "pragmatik"
    ],
    "englishDefinition": "dealing with things sensibly and realistically",
    "example": "We need a pragmatic approach to environmental regulation.",
    "exampleTr": "Çevre düzenlemelerine yönelik pragmatik bir yaklaşıma ihtiyacımız var.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 40,
    "ydsPriority": "low",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "study pragmatic"
    ]
  },
  {
    "id": "inv-resilient",
    "word": "resilient",
    "normalized": "resilient",
    "lemma": "resilient",
    "partOfSpeech": "adjective",
    "level": "C1",
    "turkishMeanings": [
      "dirençli",
      "çabuk toparlanan"
    ],
    "englishDefinition": "able to withstand or recover quickly from difficult conditions",
    "example": "Ecosystems can be remarkably resilient if protected from poaching.",
    "exampleTr": "Ekosistemler kaçak avcılıktan korunursa dikkate değer ölçüde dirençli olabilir.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 40,
    "ydsPriority": "low",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "study resilient"
    ]
  },
  {
    "id": "inv-perspicacity",
    "word": "perspicacity",
    "normalized": "perspicacity",
    "lemma": "perspicacity",
    "partOfSpeech": "noun",
    "level": "C2",
    "turkishMeanings": [
      "keskin kavrayış",
      "ileri görüşlülük"
    ],
    "englishDefinition": "the quality of having a ready insight into things; shrewdness",
    "example": "Her analytical perspicacity saved the firm from financial ruin.",
    "exampleTr": "Onun analitik keskin kavrayışı firmayı finansal çöküşten kurtardı.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 40,
    "ydsPriority": "low",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "study perspicacity"
    ]
  },
  {
    "id": "inv-obfuscate",
    "word": "obfuscate",
    "normalized": "obfuscate",
    "lemma": "obfuscate",
    "partOfSpeech": "verb",
    "level": "C2",
    "turkishMeanings": [
      "anlaşılmaz kılmak",
      "örtbas etmek",
      "bulandırmak"
    ],
    "englishDefinition": "render obscure, unclear, or unintelligible",
    "example": "Political spokespersons often attempt to obfuscate uncomfortable truths.",
    "exampleTr": "Siyasi sözcüler genellikle rahatsız edici gerçekleri anlaşılmaz kılmaya çalışırlar.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 40,
    "ydsPriority": "low",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "study obfuscate"
    ]
  },
  {
    "id": "inv-pusillanimous",
    "word": "pusillanimous",
    "normalized": "pusillanimous",
    "lemma": "pusillanimous",
    "partOfSpeech": "adjective",
    "level": "C2",
    "turkishMeanings": [
      "ödlek",
      "korkak",
      "çekingen"
    ],
    "englishDefinition": "showing a lack of courage or determination; timid",
    "example": "The committee made a pusillanimous decision to defer the investigation.",
    "exampleTr": "Komite soruşturmayı ertelemek için korkakça bir karar aldı.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 40,
    "ydsPriority": "low",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "study pusillanimous"
    ]
  },
  {
    "id": "inv-parsimonious",
    "word": "parsimonious",
    "normalized": "parsimonious",
    "lemma": "parsimonious",
    "partOfSpeech": "adjective",
    "level": "C2",
    "turkishMeanings": [
      "aşırı tutumlu",
      "eli sıkı",
      "cimri"
    ],
    "englishDefinition": "unwilling to spend money or use resources; stingy",
    "example": "The state was criticized for its parsimonious welfare allocations.",
    "exampleTr": "Devlet, cimri sosyal yardım ödenekleri nedeniyle eleştirildi.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 40,
    "ydsPriority": "low",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "study parsimonious"
    ]
  },
  {
    "id": "inv-ineluctable",
    "word": "ineluctable",
    "normalized": "ineluctable",
    "lemma": "ineluctable",
    "partOfSpeech": "adjective",
    "level": "C2",
    "turkishMeanings": [
      "kaçınılmaz",
      "önüne geçilemez"
    ],
    "englishDefinition": "unable to be resisted or avoided; inescapable",
    "example": "Aging is an ineluctable biological reality.",
    "exampleTr": "Yaşlanmak önüne geçilemez biyolojik bir gerçektir.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 40,
    "ydsPriority": "low",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "study ineluctable"
    ]
  },
  {
    "id": "inv-trenchant",
    "word": "trenchant",
    "normalized": "trenchant",
    "lemma": "trenchant",
    "partOfSpeech": "adjective",
    "level": "C2",
    "turkishMeanings": [
      "keskin",
      "etkili",
      "sert"
    ],
    "englishDefinition": "vigorous or incisive in expression or style",
    "example": "The editor wrote a trenchant critique of the fiscal proposal.",
    "exampleTr": "Editör, mali teklife ilişkin sert ve etkili bir eleştiri yazdı.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 40,
    "ydsPriority": "low",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "study trenchant"
    ]
  },
  {
    "id": "inv-adroit",
    "word": "adroit",
    "normalized": "adroit",
    "lemma": "adroit",
    "partOfSpeech": "adjective",
    "level": "C2",
    "turkishMeanings": [
      "usta",
      "becerikli",
      "maharetli"
    ],
    "englishDefinition": "clever or skillful in using the hands or mind",
    "example": "With adroit diplomacy, the ambassador resolved the crisis peacefully.",
    "exampleTr": "Büyükelçi maharetli bir diplomasiyle krizi barışçıl bir şekilde çözdü.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 40,
    "ydsPriority": "low",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "study adroit"
    ]
  },
  {
    "id": "inv-anathema",
    "word": "anathema",
    "normalized": "anathema",
    "lemma": "anathema",
    "partOfSpeech": "noun",
    "level": "C2",
    "turkishMeanings": [
      "nefret edilen şey",
      "lanet",
      "tiksinti kaynağı"
    ],
    "englishDefinition": "something or someone that one vehemently dislikes",
    "example": "Censorship is anathema to a truly democratic society.",
    "exampleTr": "Sansür, gerçekten demokratik bir toplum için nefret kaynağıdır.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 40,
    "ydsPriority": "low",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "study anathema"
    ]
  },
  {
    "id": "inv-serendipity",
    "word": "serendipity",
    "normalized": "serendipity",
    "lemma": "serendipity",
    "partOfSpeech": "noun",
    "level": "UNCLASSIFIED",
    "turkishMeanings": [
      "tatlı tesadüf",
      "şans eseri buluş"
    ],
    "englishDefinition": "finding valuable things not sought for",
    "example": "It was pure serendipity that we met.",
    "exampleTr": "Karşılaşmamız tam bir tatlı tesadüftü.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 40,
    "ydsPriority": "low",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "study serendipity"
    ]
  },
  {
    "id": "inv-petrichor",
    "word": "petrichor",
    "normalized": "petrichor",
    "lemma": "petrichor",
    "partOfSpeech": "noun",
    "level": "UNCLASSIFIED",
    "turkishMeanings": [
      "yağmur sonrası toprak kokusu"
    ],
    "englishDefinition": "a pleasant smell that frequently accompanies the first rain after a long period of warm, dry weather",
    "example": "She loved the petrichor in autumn.",
    "exampleTr": "Sonbahardaki yağmur sonrası toprak kokusunu çok severdi.",
    "sourceTags": [
      "flashcards",
      "reading"
    ],
    "frequency": 40,
    "ydsPriority": "low",
    "academic": true,
    "phrasalVerb": false,
    "collocations": [
      "study petrichor"
    ]
  }
];

import { safeSetStorage, safeGetStorage } from "@/lib/storage-optimizer";

export function loadUserInventoryCustomization(): UserInventoryCustomization {
  if (typeof window === "undefined") return defaultUserCustomization();
  try {
    const raw = safeGetStorage(INVENTORY_STORAGE_KEY, "");
    if (!raw) return defaultUserCustomization();
    const parsed = JSON.parse(raw);
    return {
      notes: typeof parsed.notes === "object" && parsed.notes !== null ? parsed.notes : {},
      levelOverrides: typeof parsed.levelOverrides === "object" && parsed.levelOverrides !== null ? parsed.levelOverrides : {},
      priorityOverrides: typeof parsed.priorityOverrides === "object" && parsed.priorityOverrides !== null ? parsed.priorityOverrides : {},
      toAddList: Array.isArray(parsed.toAddList) ? parsed.toAddList : [],
      toRemoveList: Array.isArray(parsed.toRemoveList) ? parsed.toRemoveList : [],
      toCheckList: Array.isArray(parsed.toCheckList) ? parsed.toCheckList : [],
      favorites: Array.isArray(parsed.favorites) ? parsed.favorites : [],
      customWords: Array.isArray(parsed.customWords) ? parsed.customWords : [],
    };
  } catch {
    return defaultUserCustomization();
  }
}

export function saveUserInventoryCustomization(cust: UserInventoryCustomization): void {
  if (typeof window === "undefined") return;
  try {
    safeSetStorage(INVENTORY_STORAGE_KEY, JSON.stringify(cust));
  } catch {
    /* safety */
  }
}

export function getMergedInventory(customization: UserInventoryCustomization): VocabularyInventoryItem[] {
  const merged = BASE_INVENTORY_ITEMS.map((item) => {
    const overrideLevel = customization.levelOverrides?.[item.id];
    const overridePriority = customization.priorityOverrides?.[item.id];
    const note = customization.notes?.[item.id];

    return {
      ...item,
      level: overrideLevel || item.level,
      ydsPriority: overridePriority || item.ydsPriority,
      notes: note || item.notes,
    };
  });

  if (customization.customWords && customization.customWords.length > 0) {
    return [...customization.customWords, ...merged];
  }

  return merged;
}

// Formula Injection Defense for CSV Export
export function sanitizeCsvField(field: unknown): string {
  if (field === null || field === undefined) return "";
  let str = String(field).trim();
  const code = str.charCodeAt(0);
  // Neutralize CSV formula characters (=, +, -, @, Tab 9, CR 13)
  if (code === 61 || code === 43 || code === 45 || code === 64 || code === 9 || code === 13) {
    str = "'" + str;
  }
  const hasComma = str.indexOf(String.fromCharCode(44)) !== -1;
  const hasQuote = str.indexOf(String.fromCharCode(34)) !== -1;
  const hasLF = str.indexOf(String.fromCharCode(10)) !== -1;
  const hasCR = str.indexOf(String.fromCharCode(13)) !== -1;
  if (hasComma || hasQuote || hasLF || hasCR) {
    str = String.fromCharCode(34) + str.split(String.fromCharCode(34)).join(String.fromCharCode(34) + String.fromCharCode(34)) + String.fromCharCode(34);
  }
  return str;
}

export function exportInventoryToCsv(items: VocabularyInventoryItem[]): string {
  const headers = [
    "Word",
    "CEFR Level",
    "Part of Speech",
    "Turkish Meanings",
    "English Definition",
    "Example",
    "Example Translation",
    "YDS Priority",
    "Academic",
    "Phrasal Verb",
    "Sources",
    "User Notes"
  ];

  const rows = items.map((item) => [
    sanitizeCsvField(item.word),
    sanitizeCsvField(item.level),
    sanitizeCsvField(item.partOfSpeech),
    sanitizeCsvField(item.turkishMeanings.join("; ")),
    sanitizeCsvField(item.englishDefinition || ""),
    sanitizeCsvField(item.example || ""),
    sanitizeCsvField(item.exampleTr || ""),
    sanitizeCsvField(item.ydsPriority || "medium"),
    sanitizeCsvField(item.academic ? "Yes" : "No"),
    sanitizeCsvField(item.phrasalVerb ? "Yes" : "No"),
    sanitizeCsvField(item.sourceTags.join(", ")),
    sanitizeCsvField(item.notes || ""),
  ].join(","));

  return [headers.join(","), ...rows].join("\n");
}

// ------------------------------------------------------------
// FULL CONSOLIDATED VOCABULARY INVENTORY (2.500+ KELİME)
// YDS, YDT ve YÖKDİL Sınav Havuzlarının Konsolidasyonu
// ------------------------------------------------------------
function buildUnifiedInventory(): VocabularyInventoryItem[] {
  const combined: VocabularyInventoryItem[] = [...BASE_INVENTORY_ITEMS];
  const seen = new Set(BASE_INVENTORY_ITEMS.map((w) => w.word.toLowerCase()));

  // 1. 2013-2026 Akademik Yayınlar (Modadil, Akın Dil, Remzi Hoca, vb.)
  YDS_PUBLICATIONS_MASTER_CORPUS.forEach((p, idx) => {
    const norm = p.term.toLowerCase();
    if (seen.has(norm)) return;
    seen.add(norm);

    const level = (p.level === "YDS" ? "C1" : p.level) as CefrInventoryLevel;
    const pos =
      p.type === "fiil"
        ? "verb"
        : p.type === "isim"
        ? "noun"
        : p.type === "sıfat"
        ? "adjective"
        : p.type === "zarf"
        ? "adverb"
        : p.type === "phrasal verb"
        ? "verb"
        : "other";

    combined.push({
      id: `pub-${idx}-${norm}`,
      word: p.term,
      normalized: norm,
      partOfSpeech: pos,
      level,
      turkishMeanings: p.meaningsTr,
      englishDefinition: p.definitionEn,
      example: p.exampleEn,
      exampleTr: p.exampleTr,
      sourceTags: ["exams", "reading"],
      ydsPriority: "high",
      academic: true,
      phrasalVerb: p.type === "phrasal verb",
      synonyms: p.synonyms,
      collocations: p.collocations,
      targetExams: ["YDS", "YDT", "YÖKDİL"],
    });
  });

  // 2. 2.500 Master Veritabanı (A1-C2)
  MASTER_VOCABULARY.forEach((m) => {
    const norm = m.word.toLowerCase();
    if (seen.has(norm)) return;
    seen.add(norm);

    const level = (m.level || "B2") as CefrInventoryLevel;
    const isBeginner = level === "A1" || level === "A2";
    const pos =
      m.type === "fiil"
        ? "verb"
        : m.type === "isim"
        ? "noun"
        : m.type === "sıfat"
        ? "adjective"
        : m.type === "zarf"
        ? "adverb"
        : m.type === "phrasal verb"
        ? "verb"
        : "other";

    combined.push({
      id: `mv-${m.id}`,
      word: m.word,
      normalized: norm,
      partOfSpeech: pos,
      level,
      turkishMeanings: [m.tr],
      englishDefinition: m.hint || "Akademik sınav bağlamında yüksek frekanslı sözcük",
      example: m.example,
      exampleTr: m.exampleTr,
      sourceTags: ["flashcards", "exams"],
      academic: !isBeginner,
      phrasalVerb: m.type === "phrasal verb",
      synonyms: m.synonyms,
      targetExams: isBeginner ? ["YDT"] : ["YDS", "YDT", "YÖKDİL"],
    });
  });

  return combined;
}

export const INVENTORY_ITEMS: VocabularyInventoryItem[] = buildUnifiedInventory();
export type InventoryItem = VocabularyInventoryItem;
export type CefrLevel = CefrInventoryLevel;
export type InventoryUserData = UserInventoryCustomization & {
  learnedIds: string[];
  notes: Record<string, string>;
  lastUpdated?: number;
};

export const INVENTORY_METRICS = {
  total: INVENTORY_ITEMS.length,
  A1: INVENTORY_ITEMS.filter((i) => i.level === "A1").length,
  A2: INVENTORY_ITEMS.filter((i) => i.level === "A2").length,
  B1: INVENTORY_ITEMS.filter((i) => i.level === "B1").length,
  B2: INVENTORY_ITEMS.filter((i) => i.level === "B2").length,
  C1: INVENTORY_ITEMS.filter((i) => i.level === "C1").length,
  C2: INVENTORY_ITEMS.filter((i) => i.level === "C2").length,
  UNCLASSIFIED: INVENTORY_ITEMS.filter((i) => i.level === "UNCLASSIFIED").length,
  YDS: INVENTORY_ITEMS.filter((i) => getWordExams(i).includes("YDS")).length,
  YDT: INVENTORY_ITEMS.filter((i) => getWordExams(i).includes("YDT")).length,
  YÖKDİL: INVENTORY_ITEMS.filter((i) => getWordExams(i).includes("YÖKDİL")).length,
};

export function loadInventoryUserData(): InventoryUserData {
  const cust = loadUserInventoryCustomization();
  return {
    ...cust,
    learnedIds: cust.toRemoveList || [],
    notes: cust.notes || {},
    lastUpdated: Date.now(),
  };
}

export function saveInventoryUserData(data: Partial<InventoryUserData>): void {
  saveUserInventoryCustomization({
    ...defaultUserCustomization(),
    ...data,
    toRemoveList: data.learnedIds || [],
    notes: data.notes || {},
  });
}

export function exportInventoryToJson(items: VocabularyInventoryItem[], customization?: Partial<InventoryUserData>): string {
  const data = JSON.stringify({ items, customization, exportedAt: new Date().toISOString() }, null, 2);
  if (typeof window !== "undefined") {
    const blob = new Blob([data], { type: "application/json;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `yds-master-kelime-envanteri-${new Date().toISOString().split("T")[0]}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return data;
}

export function downloadInventoryCsv(items: VocabularyInventoryItem[]): void {
  const csv = exportInventoryToCsv(items);
  if (typeof window !== "undefined") {
    const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `yds-master-kelime-envanteri-${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

// Comprehensive YDS Study Plans, CEFR Guides, and Plan Generator Engine

export type CefrLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export interface StudyTask {
  id: string;
  module: "vocabulary" | "grammar" | "reading" | "tactics" | "exam" | "review";
  title: string;
  description: string;
  minutes: number;
  href?: string;
  completed: boolean;
  completionCriteria?: string;
  memoryTip?: string;
}

export interface StudyDay {
  day: number;
  title: string;
  date?: string;
  totalMinutes: number;
  tasks: StudyTask[];
  completed: boolean;
}

export interface StudyWeek {
  week: number;
  title: string;
  goals: string[];
  days: StudyDay[];
}

export interface StudyCheckpoint {
  day: number;
  title: string;
  description: string;
  criteria: string;
}

export interface StudyPlan {
  id: string;
  title: string;
  description: string;
  currentLevel: CefrLevel;
  targetLevel: CefrLevel | "YDS";
  targetScore?: number;
  startDate: string;
  examDate?: string;
  totalDays: number;
  dailyMinutes: number;
  estimatedCompletion: string;
  acceleratedAlternative?: string;
  weeks: StudyWeek[];
  memoryStrategy: string[];
  checkpoints: StudyCheckpoint[];
  status: "active" | "paused" | "completed";
  createdAt: number;
}

export const STUDY_PLANS_STORAGE_KEY = "yds-master-study-plans-v1";

// ==================== A1-C2 STUDY GUIDES ====================

export interface LevelStudyGuide {
  level: CefrLevel;
  title: string;
  subtitle: string;
  normalDuration: string;
  fastDuration: string;
  dailyMinutes: string;
  targetWordCount: string;
  dailyNewWords: number;
  weeklyReadingCount: number;
  weeklyGrammarQuestions: number;
  keyGrammarTopics: string[];
  keyVocabularyAreas: string[];
  listeningSpeakingStrategy: string;
  memoryRetentionMethods: string[];
  fastTrackTactics: string[];
  successCriteria: string;
  transitionTestRecommendation: string;
  sampleWeeklySchedule: { day: string; time: string; focus: string; detail: string }[];
}

export const LEVEL_STUDY_GUIDES: Record<CefrLevel, LevelStudyGuide> = {
  A1: {
    level: "A1",
    title: "A1 — Başlangıç & Temel Cümle Dünyası",
    subtitle: "Sıfırdan başlayanlar ve temelini sağlamlaştırmak isteyenler için",
    normalDuration: "8–12 Hafta",
    fastDuration: "4–6 Hafta",
    dailyMinutes: "30–60 Dakika",
    targetWordCount: "500–800 Temel Kelime",
    dailyNewWords: 8,
    weeklyReadingCount: 2,
    weeklyGrammarQuestions: 30,
    keyGrammarTopics: [
      "to be (am / is / are) ve şahıs zamirleri",
      "Simple Present Tense (Geniş Zaman)",
      "can / can't yeterlilik kipi",
      "have got / has got sahiplik",
      "there is / there are",
      "Tekil ve çoğul isimler (regular/irregular)",
      "Temel yer ve zaman edatları (in, on, at)"
    ],
    keyVocabularyAreas: [
      "Günlük eylemler, saatler, sayılar, aile",
      "Ev, okul, ofis ve temel nesneler",
      "Hava durumu, renkler, temel sıfatlar"
    ],
    listeningSpeakingStrategy: "Kısa A1 diyaloglarını sesli dinle, Web Speech API ile telaffuz tekrarı yap.",
    memoryRetentionMethods: [
      "10 dakika sonra, 1 gün sonra, 3 gün sonra ve 7 gün sonra aralıklı tekrar.",
      "Kelimeleri tek başına değil, iki kelimelik mini öbeklerle ezberle (örn. 'drink water').",
      "Yanlış yaptığın her soruyu hemen deftere yaz."
    ],
    fastTrackTactics: [
      "İstisnalara boğulma; sadece en sık geçen 500 kelimeye ve Simple Present'a odaklan.",
      "Hergün 25 dakikalık 2 Pomodoro bloğu uygula.",
      "Karmaşık zamanları sonraya bırak."
    ],
    successCriteria: "Temel bir paragrafı sözlüksüz anlayabilmek ve A1 mini sınavında %70+ almak.",
    transitionTestRecommendation: "A2 seviye tespit testine girerek en az %60 başarı sağla.",
    sampleWeeklySchedule: [
      { day: "Pazartesi", time: "30 dk", focus: "Simple Present", detail: "Özne-fiil uyumu ve 8 yeni kelime" },
      { day: "Salı", time: "30 dk", focus: "Kelime & Tekrar", detail: "Dünün 8 kelimesi + 8 yeni kelime + flashcard" },
      { day: "Çarşamba", time: "40 dk", focus: "Kısa Okuma", detail: "A1 mini hikaye okuma ve cümle analizi" },
      { day: "Perşembe", time: "30 dk", focus: "there is / are & can", detail: "Alıştırma ve 10 mini gramer sorusu" },
      { day: "Cuma", time: "40 dk", focus: "Haftalık Tekrar", detail: "Haftanın 40 kelimesini aktif geri çağırma ile test et" },
      { day: "Cumartesi", time: "45 dk", focus: "Karma Mini Test", detail: "20 soruluk A1 karma test + yanlış defteri" },
      { day: "Pazar", time: "20 dk", focus: "Hafif Dinlenme & Motivasyon", detail: "İngilizce şarkı veya animasyon dinleme" }
    ]
  },
  A2: {
    level: "A2",
    title: "A2 — Geçmiş Zaman ve İletişim Temeli",
    subtitle: "Temel cümleleri akıcı kurup geçmişe ve geleceğe adım atanlar için",
    normalDuration: "10–14 Hafta",
    fastDuration: "6–8 Hafta",
    dailyMinutes: "45–75 Dakika",
    targetWordCount: "1.000–1.500 Aktif / Pasif Kelime",
    dailyNewWords: 12,
    weeklyReadingCount: 3,
    weeklyGrammarQuestions: 50,
    keyGrammarTopics: [
      "Simple Past Tense (düzenli ve düzensiz fiiller)",
      "Past Continuous Tense ve 'when / while' bağlaçları",
      "Future Forms (will vs be going to)",
      "Karşılaştırma sıfatları (Comparatives & Superlatives)",
      "Sayılabilen / sayılamayan isimler ve quantifiers (some, any, much, many, few)",
      "Temel kipler (must, should, have to)"
    ],
    keyVocabularyAreas: [
      "Seyahat, tatil, ulaşım, yön tarifleri",
      "Hastalıklar, sağlık, duygular, meslekler",
      "Alışveriş, para birimleri, çevre olayları"
    ],
    listeningSpeakingStrategy: "Kısa haber parçalarını takip et, duyduğun cümleleri durdurup yüksek sesle tekrarla.",
    memoryRetentionMethods: [
      "Düzensiz fiil V2 ve V3 hallerini ritmik ses kayıtlarıyla tekrar et.",
      "Kelimeleri zıt anlamlılarıyla eşleştirerek hafıza kancası oluştur."
    ],
    fastTrackTactics: [
      "Geçmiş zaman ve zaman zarfları (yesterday, last week, ago) arasındaki bağı oturt.",
      "Her gün 1 kısa paragrafı Türkçeye çevirerek cümle yapısını pekiştir."
    ],
    successCriteria: "Geçmişte yaşanmış bir olayı 10 cümleyle hatasız anlatabilmek, A2 testinde %70+.",
    transitionTestRecommendation: "B1 geçiş denemesini çözerek Present Perfect temeline başla.",
    sampleWeeklySchedule: [
      { day: "Pazartesi", time: "45 dk", focus: "Simple Past", detail: "V2 düzensiz fiiller ve 12 yeni kelime" },
      { day: "Salı", time: "45 dk", focus: "When / While", detail: "Past Continuous karşılaştırması ve 15 soru" },
      { day: "Çarşamba", time: "50 dk", focus: "Reading", detail: "A2 düzeyinde 150 kelimelik metin + sözlük analizi" },
      { day: "Perşembe", time: "45 dk", focus: "Comparatives", detail: "Sıfat derecelendirmeleri ve test çözümü" },
      { day: "Cuma", time: "50 dk", focus: "Gelecek Zaman", detail: "will vs going to ayrımları ve 20 soru" },
      { day: "Cumartesi", time: "60 dk", focus: "Haftalık Deneme", detail: "30 soruluk karma A2 sınavı + hata analizi" },
      { day: "Pazar", time: "30 dk", focus: "Kelime Maratonu", detail: "Flashcard SM-2 tekrarı" }
    ]
  },
  B1: {
    level: "B1",
    title: "B1 — YDS Eşiği: Karmaşık Cümleler",
    subtitle: "YDS'nin kalbi olan bağlaçlar, perfect zamanlar ve passive yapılar",
    normalDuration: "12–16 Hafta",
    fastDuration: "8–10 Hafta",
    dailyMinutes: "60–90 Dakika",
    targetWordCount: "2.000–3.000 Kelime",
    dailyNewWords: 15,
    weeklyReadingCount: 4,
    weeklyGrammarQuestions: 80,
    keyGrammarTopics: [
      "Present Perfect Tense & Since / For kuralı",
      "Passive Voice (Edilgen Çatı) temelleri",
      "Conditionals (Type 0, 1, 2, 3)",
      "Relative Clauses (who, which, that, whose, where)",
      "Reported Speech (Dolaylı Anlatım)",
      "Gerund & Infinitive ayrımları",
      "Temel Neden/Sonuç/Zıtlık bağlaçları (although, because, therefore)"
    ],
    keyVocabularyAreas: [
      "Bilim, çevre, teknoloji, eğitim ve sosyoloji temaları",
      "Temel phrasal verbler (give up, take over, carry out, bring about)",
      "Akademik geçiş sözcükleri"
    ],
    listeningSpeakingStrategy: "TED Talks ve BBC 6 Minute English metinlerini takip ederek telaffuz ve tonlama çalış.",
    memoryRetentionMethods: [
      "Feynman Tekniği: Yeni öğrendiğin bir gramer konusunu sanki hiç bilmeyen birine anlatıyormuş gibi özetle.",
      "Interleaving: Gramer çalışmasını 3 günde bir kelime ve reading ile çaprazla."
    ],
    fastTrackTactics: [
      "ÖSYM'nin en çok sorduğu 'Since + V2 -> have/has V3' kalıbına hakim ol.",
      "Paragrafta özne ve yüklemi tek hamlede bulma pratiği yap."
    ],
    successCriteria: "Orta uzunluktaki YDS reading parçalarında ana fikri 90 saniyede tespit edebilmek.",
    transitionTestRecommendation: "B2 seviye tespit sınavında en az %65 doğruluk.",
    sampleWeeklySchedule: [
      { day: "Pazartesi", time: "60 dk", focus: "Present Perfect", detail: "Zaman uyumu ve 15 yeni B1 kelimesi" },
      { day: "Salı", time: "70 dk", focus: "Passive Voice", detail: "Edilgen çatı formülleri ve 25 soru" },
      { day: "Çarşamba", time: "75 dk", focus: "Reading & Vocabulary", detail: "2 adet B1 akademik metin analizi" },
      { day: "Perşembe", time: "60 dk", focus: "Relative Clauses", detail: "Sıfat cümlecikleri ve 25 soru" },
      { day: "Cuma", time: "60 dk", focus: "Conditionals", detail: "Type 1-2-3 kuralları ve tuzak sorular" },
      { day: "Cumartesi", time: "90 dk", focus: "Soru Tipi Pratiği", detail: "Cümle tamamlama ve çeviri taktikleri (40 soru)" },
      { day: "Pazar", time: "45 dk", focus: "Yanlış Defteri", detail: "Hafta boyu yanlış çözülen soruların yeniden analizi" }
    ]
  },
  B2: {
    level: "B2",
    title: "B2 — YDS 70+ Hedefi: Akademik Yetkinlik",
    subtitle: "YDS'de 70-80 puan bandını hedefleyen adaylar için tam donanımlı hazırlık",
    normalDuration: "16–24 Hafta",
    fastDuration: "10–14 Hafta",
    dailyMinutes: "75–120 Dakika",
    targetWordCount: "4.000–5.000 Kelime (Akademik Söz Varlığı)",
    dailyNewWords: 20,
    weeklyReadingCount: 6,
    weeklyGrammarQuestions: 120,
    keyGrammarTopics: [
      "Past Perfect, Future Perfect ve Continuous kombinasyonları",
      "Modal Past & Perfect Modals (must have V3, should have V3, could have V3)",
      "Adverbial Clauses & Geçiş Edatları (in spite of, on account of, whereby)",
      "Participle Reductions (Having V3, Ving, V3)",
      "Causative Yapılar (have/get something done)",
      "Noun Clauses ve Wh- soru eklemleri"
    ],
    keyVocabularyAreas: [
      "AWL (Academic Word List) çekirdek kelimeleri",
      "Tıp, ekonomi, uluslararası ilişkiler, arkeoloji terimleri",
      "İleri phrasal verbler ve collocations"
    ],
    listeningSpeakingStrategy: "Akademik paneller ve açık ders kayıtlarını dinleyerek not çıkarma alışkanlığı edin.",
    memoryRetentionMethods: [
      "Elaborative Encoding: Her kelime için kendi hayatından veya YDS bağlamından özgün örnek cümle yaz.",
      "Dual Coding: Kelimeyi görsel semboller ve hafıza kodlarıyla ilişkilendir."
    ],
    fastTrackTactics: [
      "Seçenek eleme sanatı: Anlamca paralel olan iki şıkkı aynı anda ele.",
      "Zaman uyumu çaprazlama taktiği: Past ile Future'ın asla birleşemeyeceği kuralını refleks yap."
    ],
    successCriteria: "YDS denemesinde süre kısıtlaması altında en az 60-70 net aralığına ulaşmak.",
    transitionTestRecommendation: "Tam süreli 80 soruluk deneme sınavında 65+ net.",
    sampleWeeklySchedule: [
      { day: "Pazartesi", time: "90 dk", focus: "Perfect Modals", detail: "Geçmiş çıkarımlar ve 30 ileri soru" },
      { day: "Salı", time: "90 dk", focus: "Akademik Reading", detail: "2 adet zor metin + 8 soru çözümü" },
      { day: "Çarşamba", time: "80 dk", focus: "Participle Clauses", detail: "Kısaltma teknikleri ve 30 soru" },
      { day: "Perşembe", time: "90 dk", focus: "Cloze Test & Çeviri", detail: "3 cloze test ve 20 çeviri sorusu" },
      { day: "Cuma", time: "90 dk", focus: "Zıtlık Bağlaçları", detail: "Nevertheless, whereas, despite soru analizleri" },
      { day: "Cumartesi", time: "120 dk", focus: "Süreli Mini Deneme", detail: "40 soruluk süreli deneme (60 dk) + 60 dk analiz" },
      { day: "Pazar", time: "60 dk", focus: "Kelime & Yanlış Defteri", detail: "Haftanın 100 akademik kelimesini SM-2 ile tara" }
    ]
  },
  C1: {
    level: "C1",
    title: "C1 — YDS 85+ & Zirve Akademik Hakimiyet",
    subtitle: "85 ve 90 üstü hedefleyen, akademisyenlik ve uzmanlık sınavı adayları",
    normalDuration: "20–32 Hafta",
    fastDuration: "12–18 Hafta",
    dailyMinutes: "90–150 Dakika",
    targetWordCount: "6.000–8.000 Kelime",
    dailyNewWords: 25,
    weeklyReadingCount: 8,
    weeklyGrammarQuestions: 150,
    keyGrammarTopics: [
      "Inversion (Devrik Cümle: Seldom, Hardly, Scarcely, Under no circumstances)",
      "İleri Düzey Reduction (Being V3, Having been V3, with + Noun + Ving)",
      "İnce Anlam Nüansları ve Register (Formal / Informal / Academic)",
      "Mixed Conditionals & Inverted Conditionals (Had it not been for...)",
      "Subjunctive Mood (suggest, recommend, demand that he be...)"
    ],
    keyVocabularyAreas: [
      "Felsefi, epistemolojik ve ileri bilimsel terminoloji",
      "Nadir eş anlamlılar ve ince anlam farkları (concur vs acquiesce)",
      "Kritik tuzak bağlaçlar"
    ],
    listeningSpeakingStrategy: "Yabancı hakemli dergi özetlerini ve bilimsel podcastleri altyazısız takip et.",
    memoryRetentionMethods: [
      "Retrieval Practice: Soruyu çözer çözmez cevaba bakma; neden doğru olduğunu zihninde savun.",
      "Hata Haritası: Yanlış yaptığın sorunun hangi çeldirici tipine ait olduğunu etiketle."
    ],
    fastTrackTactics: [
      "Çeldirici deşifresi: ÖSYM'nin 'aşırı genelleme' (always, never, solely) tuzaklarını ilk bakışta yakala.",
      "Akışı bozan cümle sorularında zamir referanslarını (this, these, such) takip et."
    ],
    successCriteria: "80 soruluk resmi YDS denemelerinde 75+ nete istikrarlı biçimde oturmak.",
    transitionTestRecommendation: "C2 ustalık seviye tespit testinde %75+ doğruluk.",
    sampleWeeklySchedule: [
      { day: "Pazartesi", time: "100 dk", focus: "Inversion Masterclass", detail: "Tüm devrik yapılar ve 40 zor soru" },
      { day: "Salı", time: "110 dk", focus: "Ağır Reading", detail: "3 uzun akademik metin ve çıkarım soruları" },
      { day: "Çarşamba", time: "90 dk", focus: "Restatement (Yakın Anlam)", detail: "25 soru üzerinde çeldirici analizi" },
      { day: "Perşembe", time: "100 dk", focus: "Cümle Tamamlama", detail: "30 karmaşık yan cümle sorusu" },
      { day: "Cuma", time: "100 dk", focus: "İleri Kelime", detail: "Nüans ve collocation odaklı 30 soru" },
      { day: "Cumartesi", time: "180 dk", focus: "TAM YDS DENEMESİ", detail: "80 soruluk süreli deneme (180 dk)" },
      { day: "Pazar", time: "90 dk", focus: "Deneme Otopsisi", detail: "Yanlış yapılan her sorunun kök neden analizi" }
    ]
  },
  C2: {
    level: "C2",
    title: "C2 — Ana Dil Yetkinliği & Dil Stratejisti",
    subtitle: "Mükemmeliyetçiler, dilbilimciler ve sınavda soru kaçırmak istemeyenler",
    normalDuration: "24–48 Hafta",
    fastDuration: "16–24 Hafta",
    dailyMinutes: "120–180 Dakika",
    targetWordCount: "8.000+ Kelime ve Deyimsel Derinlik",
    dailyNewWords: 30,
    weeklyReadingCount: 10,
    weeklyGrammarQuestions: 200,
    keyGrammarTopics: [
      "Söylem Çözümlemesi (Discourse Analysis) ve üslup incelikleri",
      "İnce pragmatik ayrımlar ve örtük anlam çözümlemeleri",
      "Eski/Arkaik formlar ve edebi İngilizce yapıları",
      "Stilistik devriklikler ve retorik vurgu araçları",
      "Yazarın tutumu (sarcastic, cautious, objective, critical) analizi"
    ],
    keyVocabularyAreas: [
      "Latince ve Fransızca kökenli akademik kalıplar (ad hoc, status quo, fait accompli)",
      "İleri idiomatic yapılar ve edebi metaforlar",
      "Çok anlamlı sözcüklerin nadir ikincil/üçüncül anlamları"
    ],
    listeningSpeakingStrategy: "Yüksek mahkeme kararları ve felsefi tartışma kayıtlarını eleştirel gözle analiz et.",
    memoryRetentionMethods: [
      "Zihin Sarayı (Method of Loci): İleri soyut kavramları mekânsal hafıza ile bağdaştır.",
      "Sürekli maruz kalma: Günlük haber ve akademik okumaları tamamen İngilizceye çevir."
    ],
    fastTrackTactics: [
      "Mükemmeliyetçilik tuzağına düşme; sınavda zamanı en iyi kullanan kazanır.",
      "Zor metinlerde cümlenin ana eksenini hızlıca çizip detaylarda boğulma."
    ],
    successCriteria: "YDS'de 95+ puan ve sıfıra yakın hata payı.",
    transitionTestRecommendation: "Uluslararası standart C2 yeterlilik ölçümleri.",
    sampleWeeklySchedule: [
      { day: "Pazartesi", time: "120 dk", focus: "Söylem & Üslup", detail: "Metinlerarası ilişki ve 30 çıkarım sorusu" },
      { day: "Salı", time: "120 dk", focus: "Çok Anlamlılık", detail: "Nadir kelime anlamları ve collocation analizi" },
      { day: "Çarşamba", time: "120 dk", focus: "Yazarın Tutumu", detail: "Örtük anlam ve ironi tespit teknikleri" },
      { day: "Perşembe", time: "120 dk", focus: "Hızlı Soru Çözümü", detail: "Soru başına 60 saniye süre hedefli 60 soru" },
      { day: "Cuma", time: "120 dk", focus: "Akışı Bozan Cümle & Paragraf", detail: "40 ileri düzey paragraf sorusu" },
      { day: "Cumartesi", time: "180 dk", focus: "Tam Deneme", detail: "Zorlaştırılmış 80 soruluk master deneme" },
      { day: "Pazar", time: "90 dk", focus: "Zirve Tekrarı", detail: "Tüm hataların derinlemesine irdelenmesi" }
    ]
  }
};

// ==================== PRESET STUDY PLANS ====================

export const PRESET_PLAN_TEMPLATES = [
  {
    id: "plan-7-days",
    title: "7 Günlük Hızlı Başlangıç Kampı",
    description: "Sınav öncesi veya çalışmaya başlarken tüm ana hatları 1 haftada gözden geçiren yoğun başlangıç.",
    totalDays: 7,
    dailyMinutes: 60,
    targetLevel: "B1",
    estimatedCompletion: "1 Hafta",
    acceleratedAlternative: "Günde 90 dk ile 5 günde bitirilebilir.",
    category: "quick",
  },
  {
    id: "plan-14-days",
    title: "14 Günlük Temel Gramer & Kelime Tekrarı",
    description: "Unutulan kuralları tazeleyen, 17 zamanı ve en kritik 300 kelimeyi toparlayan 2 haftalık program.",
    totalDays: 14,
    dailyMinutes: 60,
    targetLevel: "B1",
    estimatedCompletion: "2 Hafta",
    acceleratedAlternative: "Günde 90 dk ile 10 günde tamamlanabilir.",
    category: "quick",
  },
  {
    id: "plan-30-days",
    title: "30 Günlük Hızlandırılmış YDS Kampı",
    description: "Sınava 1 ay kala netleri 15-20 puan yukarı çekmeyi hedefleyen taktik ve deneme odaklı kamp.",
    totalDays: 30,
    dailyMinutes: 90,
    targetLevel: "B2",
    estimatedCompletion: "1 Ay",
    acceleratedAlternative: "Günde 120 dk ile 20 günde yüksek net odaklı sürüm.",
    category: "intensive",
  },
  {
    id: "plan-60-days",
    title: "60 Günlük Dengeli YDS Programı",
    description: "Haftada 5 gün çalışma ile gramer, kelime ve reading dengesini mükemmel kuran standart plan.",
    totalDays: 60,
    dailyMinutes: 75,
    targetLevel: "B2",
    estimatedCompletion: "2 Ay",
    acceleratedAlternative: "Günde 100 dk ile 45 günde bitirilebilir.",
    category: "standard",
  },
  {
    id: "plan-90-days",
    title: "90 Günlük Kapsamlı Başarı Programı",
    description: "Sıfırdan veya B1'den başlayıp 70+ barajını garanti altına alan 3 aylık tam müfredat.",
    totalDays: 90,
    dailyMinutes: 75,
    targetLevel: "B2",
    estimatedCompletion: "3 Ay",
    acceleratedAlternative: "Günde 110 dk ile 60 günde tamamlanabilir.",
    category: "standard",
  },
  {
    id: "plan-120-days",
    title: "120 Günlük İleri Seviye (80+ Hedef)",
    description: "Zor soru tipleri, devrik cümleler ve akademik reading ağırlıklı 4 aylık üst düzey hazırlık.",
    totalDays: 120,
    dailyMinutes: 90,
    targetLevel: "C1",
    estimatedCompletion: "4 Ay",
    acceleratedAlternative: "Günde 120 dk ile 90 günde 85+ hedefi.",
    category: "advanced",
  },
  {
    id: "plan-180-days",
    title: "180 Günlük Sıfırdan Zirveye YDS",
    description: "A1 sadeliğinden C1 akademik düzeyine adım adım taşıyan 6 aylık kapsamlı maraton.",
    totalDays: 180,
    dailyMinutes: 60,
    targetLevel: "B2",
    estimatedCompletion: "6 Ay",
    acceleratedAlternative: "Günde 90 dk ile 120 günde uygulanabilir.",
    category: "long_term",
  },
  {
    id: "plan-365-days",
    title: "12 Aylık Uzun Vadeli & Kalıcı Dil Programı",
    description: "Günde 30-45 dakika ile yorulmadan, hayatın akışına yedirilmiş 1 yıllık İngilizce ustalığı.",
    totalDays: 365,
    dailyMinutes: 45,
    targetLevel: "C1",
    estimatedCompletion: "12 Ay",
    acceleratedAlternative: "Günde 60 dk ile 8 ayda tamamlanabilir.",
    category: "long_term",
  },
  {
    id: "plan-working-30m",
    title: "Çalışanlar İçin Günde 30 Dakika",
    description: "İş temposu yoğun olan adaylar için mikro görevlerle tasarlanmış yüksek verimli plan.",
    totalDays: 60,
    dailyMinutes: 30,
    targetLevel: "B1",
    estimatedCompletion: "2 Ay",
    acceleratedAlternative: "Hafta sonu ek 1 saat ile süreyi yarıya indirebilirsiniz.",
    category: "specialized",
  },
  {
    id: "plan-weekend-heavy",
    title: "Hafta Sonu Ağırlıklı Program",
    description: "Hafta içi 20 dk tekrar, cumartesi ve pazar günleri 2.5 saatlik derin soru çözümü.",
    totalDays: 60,
    dailyMinutes: 45,
    targetLevel: "B2",
    estimatedCompletion: "2 Ay",
    acceleratedAlternative: "Günde ekstra 15 dk kelime tekrarı eklenebilir.",
    category: "specialized",
  },
];

// ==================== GENERATOR ENGINE ====================

export interface PlanGeneratorInputs {
  currentLevel: CefrLevel;
  targetLevel: CefrLevel | "YDS";
  targetScore: number;
  totalDays: number;
  dailyMinutes: number;
  daysPerWeek?: number;
  weakestArea?: "vocabulary" | "grammar" | "reading" | "translation" | "speed";
  strongestArea?: "vocabulary" | "grammar" | "reading" | "translation" | "speed";
  studyStyle?: "pomodoro" | "deep_work" | "evening" | "morning";
}

export function generateCustomStudyPlan(inputs: PlanGeneratorInputs): StudyPlan {
  const safeDays = Math.max(7, Math.min(365, Number(inputs.totalDays) || 30));
  const safeMinutes = Math.max(20, Math.min(240, Number(inputs.dailyMinutes) || 60));
  const totalWeeks = Math.ceil(safeDays / 7);

  const planId = `custom-plan-${Date.now()}`;
  const title = `${safeDays} Günlük Kişiselleştirilmiş YDS Planı (${inputs.currentLevel} → ${inputs.targetScore}+)`;

  const weeks: StudyWeek[] = [];

  for (let w = 1; w <= totalWeeks; w++) {
    const daysInThisWeek = Math.min(7, safeDays - (w - 1) * 7);
    const weekDays: StudyDay[] = [];

    for (let d = 1; d <= daysInThisWeek; d++) {
      const overallDay = (w - 1) * 7 + d;
      const tasks: StudyTask[] = [];

      // Task 1: Vocabulary (Active Recall)
      const vocabMin = Math.round(safeMinutes * 0.25);
      tasks.push({
        id: `task-${overallDay}-vocab`,
        module: "vocabulary",
        title: "Kelime Çalışması & SM-2 Tekrarı",
        description: `${inputs.currentLevel} seviyesinde yeni kelimeleri incele ve dünün kelimelerini aktif geri çağırma ile tekrar et.`,
        minutes: vocabMin,
        href: "/vocabulary/flashcards",
        completed: false,
        completionCriteria: "En az 10-15 kelime kartını gözden geçir.",
        memoryTip: "Kelimeyi görür görmez arkasını çevirme; Türkçe anlamını zihninde canlandır.",
      });

      // Task 2: Grammar or Tactics
      const grammarMin = Math.round(safeMinutes * 0.35);
      if (overallDay % 3 === 0) {
        tasks.push({
          id: `task-${overallDay}-tactics`,
          module: "tactics",
          title: "Soru Taktikleri & Çeldirici Analizi",
          description: "Cümle tamamlama veya bağlaç sorularında zaman uyumu ve eleme taktikleri.",
          minutes: grammarMin,
          href: "/tactics",
          completed: false,
          completionCriteria: "İlgili taktik konusunu oku ve 10 taktik sorusu çöz.",
          memoryTip: "Şıklardaki zıt anlamlı ve eş anlamlı çeldiricileri işaretle.",
        });
      } else {
        tasks.push({
          id: `task-${overallDay}-grammar`,
          module: "grammar",
          title: "Gramer Konu Anlatımı & Pratik",
          description: "Haftanın odak gramer konusunu renk kodlu formüllerle incele ve testini çöz.",
          minutes: grammarMin,
          href: "/grammar",
          completed: false,
          completionCriteria: "Konu testinden en az %75 başarı sağla.",
          memoryTip: "Kuralı kendi cümlelerinle bir kağıda şematize et.",
        });
      }

      // Task 3: Reading or Mixed Test
      const readingMin = Math.round(safeMinutes * 0.25);
      if (overallDay % 2 === 0) {
        tasks.push({
          id: `task-${overallDay}-reading`,
          module: "reading",
          title: "Akademik Reading Metni & Sözlük Analizi",
          description: "1 adet akademik YDS reading parçasını oku, sorularını çöz ve bilmediğin kelimeleri çıkar.",
          minutes: readingMin,
          href: "/reading",
          completed: false,
          completionCriteria: "Paragraf sorularını tamamla ve sözlükteki kelimeleri incele.",
          memoryTip: "Her paragrafın ana fikrini kenarına tek bir kelimeyle özetle.",
        });
      } else {
        tasks.push({
          id: `task-${overallDay}-exam`,
          module: "exam",
          title: "Soru Çözümü & Mini Test",
          description: "Gramer ve kelime sorularından oluşan karma mini test çözümü.",
          minutes: readingMin,
          href: "/exams",
          completed: false,
          completionCriteria: "En az 15-20 soru çöz.",
          memoryTip: "Süre tutarak hızını kontrol et.",
        });
      }

      // Task 4: Error Notebook & Review
      const reviewMin = Math.max(5, safeMinutes - (vocabMin + grammarMin + readingMin));
      tasks.push({
        id: `task-${overallDay}-review`,
        module: "review",
        title: "Yanlış Defteri & Gün Sonu Değerlendirmesi",
        description: "Bugün çözülen sorularda yapılan yanlışları incele, doğru nedenini not al.",
        minutes: reviewMin,
        href: "/hesap",
        completed: false,
        completionCriteria: "Tüm yanlışların gerekçelerini oku.",
        memoryTip: "Yanlış soruyu 24 saat sonra yeniden çözmek kalıcılığı %80 artırır.",
      });

      weekDays.push({
        day: overallDay,
        title: `${overallDay}. Gün Programı`,
        totalMinutes: safeMinutes,
        tasks,
        completed: false,
      });
    }

    weeks.push({
      week: w,
      title: `${w}. Hafta: ${w <= 2 ? "Temel Güçlendirme & Çekirdek Kurallar" : w <= 4 ? "Soru Taktikleri & Sürat Kazanımı" : "Deneme Analizi & Zirve Optimizasyonu"}`,
      goals: [
        `Haftalık hedef kelime sayısı: ${Math.round(safeMinutes * 0.5 * 7)} kelime`,
        "Gramer soru çözümü ve yanlış analizi",
        "En az 2 tam reading parçası analizi",
      ],
      days: weekDays,
    });
  }

  const checkpoints: StudyCheckpoint[] = [
    {
      day: Math.max(1, Math.floor(safeDays * 0.25)),
      title: "1. Çeyrek Değerlendirmesi",
      description: "Temel gramer ve kelime kazanımlarının ölçümü.",
      criteria: "20 soruluk mini tarama testinde %70+ başarı.",
    },
    {
      day: Math.max(2, Math.floor(safeDays * 0.5)),
      title: "Yarıyıl Kontrol Noktası",
      description: "Reading ve soru tipleri taktiklerinin oturma düzeyi.",
      criteria: "40 soruluk orta denemede hedeflenen netin en az %60'ına ulaşılması.",
    },
    {
      day: Math.max(3, Math.floor(safeDays * 0.75)),
      title: "3. Çeyrek Zirve Provası",
      description: "Süre yönetimi ve çeldirici eleme hızı kontrolü.",
      criteria: "Soru başına ortalama sürenin 90 saniyenin altına inmesi.",
    },
    {
      day: safeDays,
      title: "Final YDS Provası",
      description: "Gerçek sınav şartlarında 80 soruluk tam deneme.",
      criteria: `Hedeflenen ${inputs.targetScore}+ puan bareminin aşılması.`,
    },
  ];

  return {
    id: planId,
    title,
    description: `${inputs.currentLevel} seviyesinden ${inputs.targetScore}+ YDS puanına ulaşmak için günde ${safeMinutes} dakika ayrılmış ${safeDays} günlük plan.`,
    currentLevel: inputs.currentLevel,
    targetLevel: inputs.targetLevel,
    targetScore: inputs.targetScore,
    startDate: new Date().toISOString().split("T")[0],
    totalDays: safeDays,
    dailyMinutes: safeMinutes,
    estimatedCompletion: `${Math.ceil(safeDays / 7)} Hafta`,
    acceleratedAlternative: `Günde ${Math.round(safeMinutes * 1.4)} dakika çalışarak ${Math.round(safeDays * 0.7)} günde tamamlanabilir.`,
    weeks,
    memoryStrategy: [
      "Aktif Geri Çağırma (Active Recall): Kartın cevabını görmeden zihninde canlandır.",
      "Aralıklı Tekrar (Spaced Repetition): 1, 3, 7, 14 ve 30 günlük periyotlarla tekrar.",
      "Feynman Tekniği: Yeni bir kuralı kendi sözlerinle kağıda dök.",
      "Yanlış Defteri: Her yanlış soruyu 24 saat içinde tekrar çöz.",
    ],
    checkpoints,
    status: "active",
    createdAt: Date.now(),
  };
}

// ==================== STORAGE & TRACKING HELPERS ====================

export function loadSavedStudyPlans(): StudyPlan[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STUDY_PLANS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveStudyPlans(plans: StudyPlan[]): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STUDY_PLANS_STORAGE_KEY, JSON.stringify(plans));
  } catch {
    /* safety */
  }
}

export function togglePlanTask(
  planId: string,
  dayNum: number,
  taskId: string
): { updatedPlans: StudyPlan[]; isCompleted: boolean } {
  const plans = loadSavedStudyPlans();
  let isCompleted = false;

  const updated = plans.map((p) => {
    if (p.id !== planId) return p;

    const newWeeks = p.weeks.map((w) => ({
      ...w,
      days: w.days.map((d) => {
        if (d.day !== dayNum) return d;

        const newTasks = d.tasks.map((t) => {
          if (t.id !== taskId) return t;
          isCompleted = !t.completed;
          return { ...t, completed: !t.completed };
        });

        const allDone = newTasks.every((t) => t.completed);
        return { ...d, tasks: newTasks, completed: allDone };
      }),
    }));

    return { ...p, weeks: newWeeks };
  });

  saveStudyPlans(updated);
  return { updatedPlans: updated, isCompleted };
}

export const PRESET_STUDY_PLANS: StudyPlan[] = PRESET_PLAN_TEMPLATES.map((tmpl) => ({
  ...generateCustomStudyPlan({
    currentLevel: "A2",
    targetLevel: (tmpl.targetLevel as CefrLevel) || "B2",
    targetScore: 75,
    totalDays: tmpl.totalDays,
    dailyMinutes: tmpl.dailyMinutes,
  }),
  id: tmpl.id,
  title: tmpl.title,
  description: tmpl.description,
  estimatedCompletion: tmpl.estimatedCompletion,
  acceleratedAlternative: tmpl.acceleratedAlternative,
}));

// ============================================================
// src/lib/data-study-plans.ts
// DİL MASTER — Çoklu Sınav (YDS, YDT, YÖKDİL Fen/Sağlık/Sosyal)
// Çalışma Planları, CEFR Kılavuzları ve Dinamik Takvim Motoru
// ============================================================

import { safeSetStorage, safeGetStorage } from "@/lib/storage-optimizer";

export type CefrLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
export type ExamType = "YDS" | "YDT" | "YOKDIL";
export type YokdilField = "saglik" | "fen" | "sosyal";
export type TargetLevelType = CefrLevel | "YDS" | "YDT" | "YOKDIL" | "YÖKDİL";

export interface StudyTask {
  id: string;
  module: "vocabulary" | "grammar" | "reading" | "tactics" | "exam" | "review" | "translation";
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
  dateFormatted?: string; // Gün / Ay / Yıl: Örn "4 Ekim 2026"
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
  examType: ExamType;
  yokdilField?: YokdilField;
  currentLevel: CefrLevel;
  targetLevel: TargetLevelType;
  targetScore?: number;
  startDate: string;
  startDateFormatted?: string;
  endDate?: string;
  endDateFormatted?: string;
  examDate?: string;
  examDateFormatted?: string;
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

// ==================== A1-C2 CEFR STUDY GUIDES ====================

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
      "Temel edatlar (in, on, at, under, behind)",
      "İyelik sıfatları ve tekil/çoğul isimler"
    ],
    keyVocabularyAreas: [
      "Günlük eylemler, sayılar, renkler",
      "Aile bireyleri ve meslekler",
      "Zaman kavramları (günler, aylar, saatler)"
    ],
    listeningSpeakingStrategy: "Yavaş tempolu diyalogları dinleyip sesli tekrar (shadowing) yapın.",
    memoryRetentionMethods: [
      "Görsel kelime kartları ile günde 2 seans aktif geri çağırma (Active Recall).",
      "Her kelimeyi Türkçe çevirisi yerine zihninizde bir sahne ile eşleştirin."
    ],
    fastTrackTactics: [
      "Ezber yapmayın; basit özne + fiil + nesne (SVO) iskeletine odaklanın.",
      "Kelimeleri tek tek değil, 'drink coffee', 'go to school' gibi öbeklerle öğrenin."
    ],
    successCriteria: "Temel cümleleri hatasız kurabilmek ve A1 seviye testinden %70+ almak.",
    transitionTestRecommendation: "A1 Seviye Atlama Sınavı ile A2'ye geçişi doğrulayın.",
    sampleWeeklySchedule: [
      { day: "Pazartesi", time: "30 dk", focus: "to be & Zamirler", detail: "Konu anlatımı ve 15 alıştırma" },
      { day: "Salı", time: "30 dk", focus: "Temel Kelimeler", detail: "Görsel kartlarla 10 yeni kelime" },
      { day: "Çarşamba", time: "30 dk", focus: "Simple Present", detail: "Olumlu, olumsuz ve soru kalıpları" },
      { day: "Perşembe", time: "30 dk", focus: "Kısa Okuma", detail: "A1 seviyesinde 1 kısa paragraf analizi" },
      { day: "Cuma", time: "30 dk", focus: "Haftalık Tekrar", detail: "SM-2 algoritmasıyla tüm kelimelerin tekrarı" },
      { day: "Cumartesi", time: "45 dk", focus: "Karma Mini Test", detail: "20 soruluk pekiştirme testi" },
      { day: "Pazar", time: "20 dk", focus: "Hata Defteri", detail: "Yanlış yapılan soruların gözden geçirilmesi" }
    ]
  },
  A2: {
    level: "A2",
    title: "A2 — Temel Düzey & Zaman Bağlantıları",
    subtitle: "Geçmiş zaman, gelecek planları ve basit bağlaçlar",
    normalDuration: "8–10 Hafta",
    fastDuration: "4–5 Hafta",
    dailyMinutes: "45–75 Dakika",
    targetWordCount: "1000–1500 Kelime",
    dailyNewWords: 12,
    weeklyReadingCount: 3,
    weeklyGrammarQuestions: 40,
    keyGrammarTopics: [
      "Simple Past Tense (Düzenli & Düzensiz fiiller)",
      "Past Continuous (was / were + V-ing)",
      "when / while bağlaç kombinasyonları",
      "be going to & will gelecek zaman ayrımları",
      "Karşılaştırma kalıpları (Comparatives & Superlatives)"
    ],
    keyVocabularyAreas: [
      "Hava durumu, seyahat, alışveriş",
      "Duygular ve fiziksel betimlemeler",
      "Sık kullanılan bağlaçlar (and, but, because, so)"
    ],
    listeningSpeakingStrategy: "Kısa haber bültenlerini ve podcast girişlerini takip edin.",
    memoryRetentionMethods: [
      "Aralıklı tekrar (1, 3, 7. gün kuralı).",
      "Kelime defterine zıt anlamlılarıyla (antonyms) birlikte yazın."
    ],
    fastTrackTactics: [
      "Düzenli-düzensiz fiil ayrımını şarkı veya sesli ritimle pekiştirin.",
      "İki zaman arasındaki 'when/while' tuzaklarına dikkat edin."
    ],
    successCriteria: "Geçmiş bir olayı kronolojik sırayla anlatabilmek ve A2 testinden %70+ almak.",
    transitionTestRecommendation: "A2 Bitirme ve Seviye Atlama Testi.",
    sampleWeeklySchedule: [
      { day: "Pazartesi", time: "45 dk", focus: "Simple Past Düzenli/Düzensiz", detail: "30 fiil çekimi ve konu testi" },
      { day: "Salı", time: "45 dk", focus: "Seyahat & Yön Kelimeleri", detail: "Kartlarla 12 yeni kelime ve cümle kurma" },
      { day: "Çarşamba", time: "45 dk", focus: "when & while Cümleleri", detail: "Zaman uyumu kuralı ve 20 soru" },
      { day: "Perşembe", time: "45 dk", focus: "Orta Düzey Okuma", detail: "2 kısa okuma metni ve kelime çıkarma" },
      { day: "Cuma", time: "45 dk", focus: "Comparatives & Superlatives", detail: "Karşılaştırma yapıları ve formüller" },
      { day: "Cumartesi", time: "60 dk", focus: "A2 Denemesi", detail: "30 soruluk karma tarama sınavı" },
      { day: "Pazar", time: "30 dk", focus: "Haftalık Sentez", detail: "Yanlış defteri ve zayıf konuların tekrarı" }
    ]
  },
  B1: {
    level: "B1",
    title: "B1 — Orta Düzey & Akademik Temeller",
    subtitle: "YDS ve YDT için kritik eşik: Modallar, Passive ve Relative Clauses",
    normalDuration: "10–12 Hafta",
    fastDuration: "5–6 Hafta",
    dailyMinutes: "60–90 Dakika",
    targetWordCount: "2000–2500 Kelime",
    dailyNewWords: 15,
    weeklyReadingCount: 4,
    weeklyGrammarQuestions: 60,
    keyGrammarTopics: [
      "Present Perfect & Present Perfect Continuous",
      "Modals (must, should, can, could, might)",
      "Modal + have V3 çıkarımları (must have, might have)",
      "Passive Voice (Etken / Edilgen dönüşümleri)",
      "Relative Clauses (who, which, that, where, whose)"
    ],
    keyVocabularyAreas: [
      "Eğitim, çevre, teknoloji ve sağlık",
      "Akademik geçiş bağlaçları (However, Although, Therefore)",
      "En sık kullanılan 50 Phrasal Verb"
    ],
    listeningSpeakingStrategy: "Orta düzey akademik TED-Ed videolarını İngilizce altyazıyla izleyin.",
    memoryRetentionMethods: [
      "Bağlamsal öğrenme: Her kelimeyi en az 2 gerçek YDS/YDT soru cümlesi içinde görün.",
      "Kelimeleri türevleriyle (verb, noun, adj, adv) gruplayarak çalışın."
    ],
    fastTrackTactics: [
      "Relative Clause kısaltmalarını formülize edin.",
      "Zıtlık bildiren bağlaçların virgül kullanım kurallarını ezberleyin."
    ],
    successCriteria: "YDS denemesinde 50+ puan barajını aşabilmek.",
    transitionTestRecommendation: "B1 Sertifika ve Seviye Atlama Sınavı.",
    sampleWeeklySchedule: [
      { day: "Pazartesi", time: "60 dk", focus: "Passive Voice Formülleri", detail: "Tüm zamanlarda edilgen yapı ve 25 soru" },
      { day: "Salı", time: "60 dk", focus: "Akademik Kelime & Phrasal", detail: "15 yeni akademik kelime + 5 phrasal verb" },
      { day: "Çarşamba", time: "60 dk", focus: "Relative Clauses", detail: "Sıfat cümlecikleri ve kısaltma kuralları" },
      { day: "Perşembe", time: "60 dk", focus: "Akademik Reading Metni", detail: "Bilimsel bir metin analizi ve ana fikir tespiti" },
      { day: "Cuma", time: "60 dk", focus: "Modal Perfects (have V3)", detail: "Geçmişe dönük çıkarımlar ve tuzaklar" },
      { day: "Cumartesi", time: "90 dk", focus: "B1 Mini Denemesi", detail: "40 soruluk çoktan seçmeli sınav" },
      { day: "Pazar", time: "45 dk", focus: "Yanlış Analiz Seansı", detail: "Hatalı soruların mantığını kavramak" }
    ]
  },
  B2: {
    level: "B2",
    title: "B2 — İleri-Orta Düzey & Sınav Taktikleri",
    subtitle: "70+ puan hedefleyenler için bağlaç kombinasyonları ve hızlı okuma",
    normalDuration: "10–14 Hafta",
    fastDuration: "6–7 Hafta",
    dailyMinutes: "75–100 Dakika",
    targetWordCount: "3000–4000 Kelime",
    dailyNewWords: 20,
    weeklyReadingCount: 5,
    weeklyGrammarQuestions: 80,
    keyGrammarTopics: [
      "Noun Clauses & Dolaylı anlatım (Reported Speech)",
      "Conditionals (Type 1, 2, 3 ve Mixed Conditionals)",
      "İkili bağlaçlar (not only... but also, neither... nor, either... or)",
      "Zıtlık, sebep, sonuç ve amaç bağlaçlarının tam hakimiyeti",
      "Gerund & Infinitive istisnaları"
    ],
    keyVocabularyAreas: [
      "Küresel ısınma, ekonomi, sosyoloji ve uluslararası ilişkiler",
      "Akademik eşdizimler (Collocations: pose a threat, conduct research)",
      "100 Kritik İleri Düzey Phrasal Verb"
    ],
    listeningSpeakingStrategy: "BBC ve NPR haberlerini dinleyip not alma (note-taking) tekniğini uygulayın.",
    memoryRetentionMethods: [
      "Collocation odaklı kodlama (kelimeyi yanındaki fiil veya edatla birlikte hafızaya alma).",
      "Eş anlamlı zincirleri (Synonym chains) oluşturma."
    ],
    fastTrackTactics: [
      "Paragraf tamamlama sorularında boşluktan önceki ve sonraki referans zamirlerini (this, these, such) takip edin.",
      "Akışı bozan cümle sorularında konu dışına kayan veya üslubu uymayan seçeneği hızla eleyin."
    ],
    successCriteria: "YDS'de 70+ puan baremini düzenli olarak yakalamak.",
    transitionTestRecommendation: "B2 Seviye Bitirme Sınavı.",
    sampleWeeklySchedule: [
      { day: "Pazartesi", time: "75 dk", focus: "Noun Clauses & Subjunctive", detail: "İsim cümlecikleri ve soru analizi" },
      { day: "Salı", time: "75 dk", focus: "Collocations & İleri Kelime", detail: "20 akademik kelime ve eşdizimleri" },
      { day: "Çarşamba", time: "75 dk", focus: "Conditionals & Wish Clauses", detail: "Karma koşul cümleleri ve 'but for' kalıbı" },
      { day: "Perşembe", time: "75 dk", focus: "2 Ağır Reading Metni", detail: "Paragraf soru tipleri ve çıkarım soruları" },
      { day: "Cuma", time: "75 dk", focus: "Bağlaçlar Masterclass", detail: "Tüm zıtlık ve neden-sonuç bağlaçları" },
      { day: "Cumartesi", time: "120 dk", focus: "Tam Deneme (80 Soru)", detail: "Gerçek sınav süre simülasyonu" },
      { day: "Pazar", time: "60 dk", focus: "Hata Defteri & Strateji", detail: "Boş ve yanlış bırakılan soru analizi" }
    ]
  },
  C1: {
    level: "C1",
    title: "C1 — İleri Düzey & Akademik Uzmanlık",
    subtitle: "80–90+ puan hedefleyenler için devrik cümleler ve üst düzey metinler",
    normalDuration: "12–16 Hafta",
    fastDuration: "7–8 Hafta",
    dailyMinutes: "90–120 Dakika",
    targetWordCount: "4500–6000 Kelime",
    dailyNewWords: 25,
    weeklyReadingCount: 6,
    weeklyGrammarQuestions: 100,
    keyGrammarTopics: [
      "Inversion (Devrik cümleler: Seldom, Hardly, Under no circumstances)",
      "Participle Clauses (Having V3, Being V3 kısaltmaları)",
      "Cleft Sentences (Vurgu cümleleri: It is... that / What I need is...)",
      "Ağır akademik retorik ve cümle yapıları",
      "Kelimelerin nadir ve mecazi anlamları"
    ],
    keyVocabularyAreas: [
      "Felsefe, nöroloji, hukuk ve jeopolitik makaleler",
      "Akademik jargon ve soyut kavramlar",
      "İleri düzey bağlama öğeleri (notwithstanding, inasmuch as, albeit)"
    ],
    listeningSpeakingStrategy: "The Economist, Nature ve Scientific American sesli makalelerini dinleyin.",
    memoryRetentionMethods: [
      "Aktif sentez: Okunan akademik metnin ana fikrini 2 cümlelik İngilizce özetle yazın.",
      "Kelimelerin bağlamsal tuzaklarını ve ince anlam farklarını (nuance) kartlayın."
    ],
    fastTrackTactics: [
      "Seçeneklerdeki aşırı genellemeleri (always, completely, never) çeldirici olarak değerlendirin.",
      "Çeviri sorularında cümlenin ana fiilini ve öznesini ilk 15 saniyede tespit edin."
    ],
    successCriteria: "YDS'de 85+ puan alarak A düzeyi dil tazminatı hakkı kazanmak.",
    transitionTestRecommendation: "C1 İleri Düzey Sertifika Sınavı.",
    sampleWeeklySchedule: [
      { day: "Pazartesi", time: "90 dk", focus: "Inversion (Devriklik)", detail: "Tüm devrik yapılar ve 30 soru" },
      { day: "Salı", time: "90 dk", focus: "Nadir Kelimeler & İnce Anlam", detail: "25 C1 düzeyi akademik kelime" },
      { day: "Çarşamba", time: "90 dk", focus: "Participle Kısaltmaları", detail: "Zaman ve sebep kısaltmaları" },
      { day: "Perşembe", time: "90 dk", focus: "3 Ağır Reader Metni", detail: "Bilim ve felsefe metinleri tahlili" },
      { day: "Cuma", time: "90 dk", focus: "Çeviri & Cümle Tamamlama", detail: "Hızlı eleme teknikleri" },
      { day: "Cumartesi", time: "150 dk", focus: "Zorlaştırılmış Tam Deneme", detail: "80 soruluk C1 provası" },
      { day: "Pazar", time: "75 dk", focus: "Hata Sıfırlama Seansı", detail: "Tüm soruların ayrıntılı incelemesi" }
    ]
  },
  C2: {
    level: "C2",
    title: "C2 — Ustalık & YDS 95+ Efsanesi",
    subtitle: "Kusursuz dil hakimiyeti, sıfır hata payı ve dilbilimsel derinlik",
    normalDuration: "14–18 Hafta",
    fastDuration: "8–10 Hafta",
    dailyMinutes: "90–120 Dakika",
    targetWordCount: "6000+ Kelime & İdiomlar",
    dailyNewWords: 30,
    weeklyReadingCount: 7,
    weeklyGrammarQuestions: 120,
    keyGrammarTopics: [
      "Tüm gramer konularının istisnai ve arkaik kullanımları",
      "Stilistik ve retorik yapılar",
      "Yüksek düzey eşdizimlilik ve deyişbilim",
      "Karmaşık metin mimarisi ve örtük anlam çıkarımı"
    ],
    keyVocabularyAreas: [
      "Özgün akademik literatür, edebi eserler, hukuki metinler",
      "Yüksek düzey deyimler ve atasözü kullanımları"
    ],
    listeningSpeakingStrategy: "Oxford & Cambridge münazara kayıtlarını ve akademik panelleri takip edin.",
    memoryRetentionMethods: [
      "Öğretici yaklaşım: Konuları başkasına anlatır gibi Feynman yöntemiyle analiz edin.",
      "Sürekli maruz kalma: Günlük haber ve akademik okumaları tamamen İngilizceye çevirin."
    ],
    fastTrackTactics: [
      "Mükemmeliyetçilik tuzağına düşmeyin; sınavda zamanı en iyi kullanan kazanır.",
      "Zor metinlerde cümlenin ana eksenini hızlıca çizip detaylarda boğulmayın."
    ],
    successCriteria: "YDS'de 95+ puan ve sıfıra yakın hata payı.",
    transitionTestRecommendation: "C2 Büyük Ustalık Sertifika Sınavı.",
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

// ==================== PRESET STUDY PLANS (YDS, YDT, YÖKDİL) ====================

export interface PresetPlanTemplate {
  id: string;
  title: string;
  description: string;
  examType: ExamType;
  yokdilField?: YokdilField;
  totalDays: number;
  dailyMinutes: number;
  targetLevel: CefrLevel | "YDS" | "YDT" | "YÖKDİL";
  targetScore: number;
  estimatedCompletion: string;
  acceleratedAlternative: string;
  category: "quick" | "intensive" | "standard" | "advanced" | "long_term" | "specialized";
}

export const PRESET_PLAN_TEMPLATES: PresetPlanTemplate[] = [
  // ── YDS ŞABLONLARI ──────────────────────────────────────────
  {
    id: "yds-plan-30-days",
    title: "30 Günlük Hızlandırılmış YDS Kampı",
    description: "Sınava 1 ay kala akademik kelime, ileri bağlaçlar ve 80 soruluk deneme simülasyonlarıyla netleri 15-20 puan yükselten yoğun kamp.",
    examType: "YDS",
    totalDays: 30,
    dailyMinutes: 90,
    targetLevel: "B2",
    targetScore: 70,
    estimatedCompletion: "1 Ay",
    acceleratedAlternative: "Günde 120 dk ile 20 günde yüksek net odaklı sürüm.",
    category: "intensive",
  },
  {
    id: "yds-plan-60-days",
    title: "60 Günlük Dengeli YDS Programı",
    description: "Haftada 5 gün çalışma ile gramer, kelime ve Reader at Work tarzı okuma dengesini mükemmel kuran standart hazırlık.",
    examType: "YDS",
    totalDays: 60,
    dailyMinutes: 75,
    targetLevel: "B2",
    targetScore: 75,
    estimatedCompletion: "2 Ay",
    acceleratedAlternative: "Günde 100 dk ile 45 günde bitirilebilir.",
    category: "standard",
  },
  {
    id: "yds-plan-90-days",
    title: "90 Günlük Kapsamlı YDS Başarı Programı (70+ Baraj)",
    description: "Sıfırdan veya B1'den başlayıp 70+ barajını garanti altına alan 3 aylık tam müfredatlı YDS başarı rotası.",
    examType: "YDS",
    totalDays: 90,
    dailyMinutes: 75,
    targetLevel: "B2",
    targetScore: 80,
    estimatedCompletion: "3 Ay",
    acceleratedAlternative: "Günde 110 dk ile 60 günde tamamlanabilir.",
    category: "standard",
  },
  {
    id: "yds-plan-120-days",
    title: "120 Günlük İleri Düzey YDS (85+ Hedef)",
    description: "Devrik cümleler, nadir phrasal fiiller, akademik collocation eşdizimleri ve zor soru tipleri ağırlıklı 4 aylık üst düzey hazırlık.",
    examType: "YDS",
    totalDays: 120,
    dailyMinutes: 90,
    targetLevel: "C1",
    targetScore: 88,
    estimatedCompletion: "4 Ay",
    acceleratedAlternative: "Günde 120 dk ile 90 günde 90+ hedeflenebilir.",
    category: "advanced",
  },

  // ── YDT (YKS DİL) ŞABLONLARI ────────────────────────────────
  {
    id: "ydt-plan-30-days",
    title: "30 Günlük YDT Son Düzlük Hız Kampı",
    description: "YKS İngilizce öncesi 80 soruda süre yönetimini geliştiren, Türkçe-İngilizce çeviri ve cümle tamamlama taktiklerine odaklı sprint.",
    examType: "YDT",
    totalDays: 30,
    dailyMinutes: 90,
    targetLevel: "B2",
    targetScore: 65,
    estimatedCompletion: "1 Ay",
    acceleratedAlternative: "Günde 120 dk ile 20 günde 70+ net hedefi.",
    category: "intensive",
  },
  {
    id: "ydt-plan-60-days",
    title: "60 Günlük YDT Net Yükseltme Programı (65+ Net)",
    description: "YKS Dil gramer temeli, 1200+ YDT kelimesi, diyalog tamamlama ve anlamca en yakın cümle sorularında yüksek isabet sağlayan plan.",
    examType: "YDT",
    totalDays: 60,
    dailyMinutes: 75,
    targetLevel: "B2",
    targetScore: 70,
    estimatedCompletion: "2 Ay",
    acceleratedAlternative: "Günde 100 dk ile 45 günde 70+ nete ulaşılabilir.",
    category: "standard",
  },
  {
    id: "ydt-plan-90-days",
    title: "90 Günlük YDT Derece & Zirve Programı (75+ Net)",
    description: "İlk 5.000 hedefleyen dil öğrencileri için paragraf analizleri, çeldirici eleme stratejileri ve haftalık tam deneme maratonu.",
    examType: "YDT",
    totalDays: 90,
    dailyMinutes: 90,
    targetLevel: "C1",
    targetScore: 78,
    estimatedCompletion: "3 Ay",
    acceleratedAlternative: "Günde 120 dk ile 65 günde uygulanabilir.",
    category: "advanced",
  },
  {
    id: "ydt-plan-120-days",
    title: "120 Günlük Sıfırdan YDT Başarı Maratonu",
    description: "Lise İngilizce müfredatından başlayarak tüm ÖSYM YDT soru kalıplarını sıfırdan zirveye taşıyan kapsamlı hazırlık programı.",
    examType: "YDT",
    totalDays: 120,
    dailyMinutes: 60,
    targetLevel: "B2",
    targetScore: 68,
    estimatedCompletion: "4 Ay",
    acceleratedAlternative: "Günde 80 dk ile 90 günde bitirilebilir.",
    category: "long_term",
  },

  // ── YÖKDİL SAĞLIK BİLİMLERİ ŞABLONLARI ──────────────────────
  {
    id: "yokdil-saglik-60-days",
    title: "60 Günlük YÖKDİL Sağlık Bilimleri Başarı Planı",
    description: "Tıp, anatomi, klinik araştırmalar, farmakoloji terimleri, epidemiyoloji ve sağlık odaklı okuma parçalarına adanmış uzman planı.",
    examType: "YOKDIL",
    yokdilField: "saglik",
    totalDays: 60,
    dailyMinutes: 75,
    targetLevel: "B2",
    targetScore: 75,
    estimatedCompletion: "2 Ay",
    acceleratedAlternative: "Günde 100 dk ile 45 günde 80+ puan.",
    category: "standard",
  },
  {
    id: "yokdil-saglik-30-days",
    title: "30 Günlük YÖKDİL Sağlık Hızlı Terim Kampı",
    description: "Klinik araştırmalarda sık geçen 600 tıbbi terim, hastalık/tedavi kalıpları ve sağlık alan denemeleri içeren hızlandırılmış kamp.",
    examType: "YOKDIL",
    yokdilField: "saglik",
    totalDays: 30,
    dailyMinutes: 90,
    targetLevel: "B2",
    targetScore: 70,
    estimatedCompletion: "1 Ay",
    acceleratedAlternative: "Günde 120 dk ile 20 günde uygulanabilir.",
    category: "intensive",
  },

  // ── YÖKDİL FEN BİLİMLERİ ŞABLONLARI ─────────────────────────
  {
    id: "yokdil-fen-60-days",
    title: "60 Günlük YÖKDİL Fen Bilimleri Başarı Planı",
    description: "Mühendislik, astronomi, malzeme bilimi, çevre biyolojisi, yapay zeka ve fizik/kimya terminolojisini içeren kapsamlı fen planı.",
    examType: "YOKDIL",
    yokdilField: "fen",
    totalDays: 60,
    dailyMinutes: 75,
    targetLevel: "B2",
    targetScore: 75,
    estimatedCompletion: "2 Ay",
    acceleratedAlternative: "Günde 100 dk ile 45 günde 80+ puan.",
    category: "standard",
  },
  {
    id: "yokdil-fen-30-days",
    title: "30 Günlük YÖKDİL Fen Hızlı Soru Çözümü Kampı",
    description: "Doğa olayları, teknolojik gelişmeler, deney verileri ve fen odaklı cümle tamamlama sorularıyla netleri hızla artıran kamp.",
    examType: "YOKDIL",
    yokdilField: "fen",
    totalDays: 30,
    dailyMinutes: 90,
    targetLevel: "B2",
    targetScore: 70,
    estimatedCompletion: "1 Ay",
    acceleratedAlternative: "Günde 120 dk ile 20 günde tamamlanabilir.",
    category: "intensive",
  },

  // ── YÖKDİL SOSYAL BİLİMLER ŞABLONLARI ───────────────────────
  {
    id: "yokdil-sosyal-60-days",
    title: "60 Günlük YÖKDİL Sosyal Bilimler Başarı Planı",
    description: "Tarih, sosyoloji, psikoloji, pedagoji, iktisat, uluslararası ilişkiler ve felsefi metin çözümlemelerine odaklanan uzman planı.",
    examType: "YOKDIL",
    yokdilField: "sosyal",
    totalDays: 60,
    dailyMinutes: 75,
    targetLevel: "B2",
    targetScore: 75,
    estimatedCompletion: "2 Ay",
    acceleratedAlternative: "Günde 100 dk ile 45 günde 80+ puan.",
    category: "standard",
  },
  {
    id: "yokdil-sosyal-30-days",
    title: "30 Günlük YÖKDİL Sosyal Hızlı Soru Çözümü Kampı",
    description: "Toplumsal hareketler, ekonomi politikaları, tarihsel gelişmeler ve soyut bağlaç analizleri içeren 1 aylık yoğun kamp.",
    examType: "YOKDIL",
    yokdilField: "sosyal",
    totalDays: 30,
    dailyMinutes: 90,
    targetLevel: "B2",
    targetScore: 70,
    estimatedCompletion: "1 Ay",
    acceleratedAlternative: "Günde 120 dk ile 20 günde uygulanabilir.",
    category: "intensive",
  },
];

// ==================== DİNAMİK ÇALIŞMA PLANI OLUŞTURUCU ====================

export function formatTrDate(dateInput: Date | string | number | undefined): string {
  if (!dateInput) return "";
  try {
    const d = typeof dateInput === "string" || typeof dateInput === "number" ? new Date(dateInput) : dateInput;
    if (isNaN(d.getTime())) return "";
    return d.toLocaleDateString("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

export interface PlanGeneratorInputs {
  examType?: ExamType;
  yokdilField?: YokdilField;
  currentLevel: CefrLevel;
  targetLevel: TargetLevelType;
  targetScore: number;
  totalDays: number;
  dailyMinutes: number;
  startDate?: string;
  examDate?: string;
  daysPerWeek?: number;
  weakestArea?: "vocabulary" | "grammar" | "reading" | "translation" | "speed";
  strongestArea?: "vocabulary" | "grammar" | "reading" | "translation" | "speed";
  studyStyle?: "pomodoro" | "deep_work" | "evening" | "morning";
}

export function generateCustomStudyPlan(inputs: PlanGeneratorInputs): StudyPlan {
  const safeDays = Math.max(7, Math.min(365, Number(inputs.totalDays) || 30));
  const safeMinutes = Math.max(20, Math.min(240, Number(inputs.dailyMinutes) || 60));
  const totalWeeks = Math.ceil(safeDays / 7);
  const exam = inputs.examType || "YDS";
  const field = inputs.yokdilField || "saglik";

  const startObj = inputs.startDate ? new Date(inputs.startDate) : new Date();
  const startDateStr = !isNaN(startObj.getTime())
    ? startObj.toISOString().split("T")[0]
    : new Date().toISOString().split("T")[0];
  const startDateFormatted = formatTrDate(startObj);

  const endObj = new Date(startObj);
  endObj.setDate(endObj.getDate() + (safeDays - 1));
  const endDateStr = !isNaN(endObj.getTime()) ? endObj.toISOString().split("T")[0] : "";
  const endDateFormatted = formatTrDate(endObj);

  const examDateFormatted = inputs.examDate ? formatTrDate(inputs.examDate) : undefined;

  const planId = `plan-${exam.toLowerCase()}-${Date.now()}`;

  // Sınava Özgü Başlık ve Açıklama Üretimi
  let examTitle = "YDS";
  let examDescription = "";
  if (exam === "YDT") {
    examTitle = "YDT (YKS-Dil)";
    examDescription = `${inputs.currentLevel} seviyesinden ${inputs.targetScore}+ YDT Netine ulaşmak için çeviri, diyalog, cümle tamamlama ve 80 soru sürati odaklı ${safeDays} günlük kişiselleştirilmiş program.`;
  } else if (exam === "YOKDIL") {
    const fieldName = field === "saglik" ? "Sağlık Bilimleri" : field === "fen" ? "Fen Bilimleri" : "Sosyal Bilimler";
    examTitle = `YÖKDİL ${fieldName}`;
    examDescription = `${inputs.currentLevel} seviyesinden ${inputs.targetScore}+ puana ulaşmak için ${fieldName} terminolojisi, alan metinleri ve alana özgü soru teknikleri odaklı ${safeDays} günlük plan.`;
  } else {
    examTitle = "YDS";
    examDescription = `${inputs.currentLevel} seviyesinden ${inputs.targetScore}+ YDS puanına ulaşmak için akademik kelime, zor bağlaçlar ve tam denemeler içeren ${safeDays} günlük plan.`;
  }

  const title = `${safeDays} Günlük Kişiselleştirilmiş ${examTitle} Planı (${inputs.targetScore}+${exam === "YDT" ? " Net" : " Puan"})`;

  const weeks: StudyWeek[] = [];

  for (let w = 1; w <= totalWeeks; w++) {
    const daysInThisWeek = Math.min(7, safeDays - (w - 1) * 7);
    const weekDays: StudyDay[] = [];

    for (let d = 1; d <= daysInThisWeek; d++) {
      const overallDay = (w - 1) * 7 + d;
      const tasks: StudyTask[] = [];

      // ── Görev 1: Kelime ve Terminoloji (Sınava Özel) ──────
      const vocabMin = Math.round(safeMinutes * 0.25);
      if (exam === "YDT") {
        tasks.push({
          id: `task-${overallDay}-ydt-vocab`,
          module: "vocabulary",
          title: "YDT & YKS Dil Kelime Çalışması",
          description: "ÖSYM YDT sınavında en çok çıkan Phrasal Verbs, sıfat-zarf eşdizimleri ve eş anlamlı kelime kartları.",
          minutes: vocabMin,
          href: "/vocabulary/flashcards",
          completed: false,
          completionCriteria: "En az 15-20 YDT kelimesini aktif hafıza kartlarında tamamla.",
          memoryTip: "Kelimeleri cümle içinde kurarak defterine not et.",
        });
      } else if (exam === "YOKDIL") {
        const fieldTerm = field === "saglik" ? "Tıbbi & Sağlık" : field === "fen" ? "Fen & Teknoloji" : "Sosyal Bilimler & Tarih";
        tasks.push({
          id: `task-${overallDay}-yokdil-vocab`,
          module: "vocabulary",
          title: `YÖKDİL ${fieldTerm} Terminolojisi`,
          description: `${fieldTerm} makalelerinde belirleyici olan temel ve ileri düzey alan kavramlarının SM-2 ile tekrarı.`,
          minutes: vocabMin,
          href: "/vocabulary/flashcards",
          completed: false,
          completionCriteria: "Alana özgü 15 yeni kelimeyi ve dünün kelimelerini tekrar et.",
          memoryTip: "Alan kelimesinin kök ve eklerini (prefixes/suffixes) ayrıştır.",
        });
      } else {
        tasks.push({
          id: `task-${overallDay}-yds-vocab`,
          module: "vocabulary",
          title: "İleri Akademik YDS Kelimeleri & Eşdizimler",
          description: "YDS Master akademik envanterinden kritik sıfat-isim tamlamaları ve akademik fiiller.",
          minutes: vocabMin,
          href: "/vocabulary/flashcards",
          completed: false,
          completionCriteria: "En az 15 akademik kelimeyi gözden geçir.",
          memoryTip: "Kelimenin varsa zıt anlamlısını da zihninde çağır.",
        });
      }

      // ── Görev 2: Gramer veya Taktik & Çeviri ───────────────
      const grammarMin = Math.round(safeMinutes * 0.35);
      if (exam === "YDT") {
        if (overallDay % 2 === 0) {
          tasks.push({
            id: `task-${overallDay}-ydt-trans`,
            module: "translation",
            title: "YDT Çeviri & Cümle Tamamlama Taktikleri",
            description: "İngilizce-Türkçe ve Türkçe-İngilizce çeviri sorularında özne-fiil çekimi taktikleri.",
            minutes: grammarMin,
            href: "/tactics",
            completed: false,
            completionCriteria: "10 çeviri ve 10 cümle tamamlama sorusu çöz.",
            memoryTip: "Çeviri sorularında önce ana yüklemi bularak seçenek ele.",
          });
        } else {
          tasks.push({
            id: `task-${overallDay}-ydt-gram`,
            module: "grammar",
            title: "YDT Çekirdek Gramer Konuları",
            description: "Tenses, Modals, Passive ve Relative Clauses kurallarını renk kodlu formüllerle çalış.",
            minutes: grammarMin,
            href: "/grammar",
            completed: false,
            completionCriteria: "Gramer testinden en az %80 başarı sağla.",
            memoryTip: "Formülleri bir kağıda şematize et.",
          });
        }
      } else if (exam === "YOKDIL") {
        tasks.push({
          id: `task-${overallDay}-yokdil-gram`,
          module: "grammar",
          title: "YÖKDİL Bağlaç & Cümle İskeleti Analizi",
          description: "Sebep-sonuç, zıtlık ve koşul bağlaçlarının bilimsel cümlelerdeki kullanım formülleri.",
          minutes: grammarMin,
          href: "/grammar",
          completed: false,
          completionCriteria: "İlgili bağlaç testini %75+ netle tamamla.",
          memoryTip: "Bağlacın virgülden önce mi sonra mı geldiğine dikkat et.",
        });
      } else {
        if (overallDay % 3 === 0) {
          tasks.push({
            id: `task-${overallDay}-yds-tactics`,
            module: "tactics",
            title: "YDS Soru Taktikleri & Çeldirici Eleme",
            description: "Paragraf tamamlama ve akışı bozan cümle sorularında zamir takibi ve konu tutarlılığı.",
            minutes: grammarMin,
            href: "/tactics",
            completed: false,
            completionCriteria: "15 taktik sorusu çöz.",
            memoryTip: "Şıklardaki aşırı genellemeleri (always, solely) ele.",
          });
        } else {
          tasks.push({
            id: `task-${overallDay}-yds-gram`,
            module: "grammar",
            title: "İleri YDS Gramer & Devrik Cümleler",
            description: "Devrik yapılar (Inversion), Participle kısaltmaları ve Noun Clauses analizleri.",
            minutes: grammarMin,
            href: "/grammar",
            completed: false,
            completionCriteria: "Gramer testini başarıyla tamamla.",
            memoryTip: "Devrik cümle kuralını kendi cümlenle yaz.",
          });
        }
      }

      // ── Görev 3: Okuma (Reading) veya Deneme/Mini Test ─────
      const readingMin = Math.round(safeMinutes * 0.25);
      if (exam === "YDT") {
        tasks.push({
          id: `task-${overallDay}-ydt-reading`,
          module: "reading",
          title: "YDT Paragraf & Soru Tipleri Antrenmanı",
          description: "Diyalog tamamlama, anlamca en yakın cümle veya durum sorularından karma set.",
          minutes: readingMin,
          href: "/reading",
          completed: false,
          completionCriteria: "2 okuma metni veya 15 diyalog/durum sorusu çöz.",
          memoryTip: "Diyalogda boşluktan bir önceki cümlenin duygusunu analiz et.",
        });
      } else if (exam === "YOKDIL") {
        const fieldName = field === "saglik" ? "Sağlık" : field === "fen" ? "Fen" : "Sosyal";
        tasks.push({
          id: `task-${overallDay}-yokdil-reading`,
          module: "reading",
          title: `YÖKDİL ${fieldName} Okuma Metni & Cloze Test`,
          description: `${fieldName} alanına ait 1 adet akademik makaleyi oku ve cloze test sorularını yanıtla.`,
          minutes: readingMin,
          href: "/reading",
          completed: false,
          completionCriteria: "Metin sorularını tamamla ve bilmediğin terimleri listene ekle.",
          memoryTip: "Her paragrafın ana fikrini tek bir cümleyle özetle.",
        });
      } else {
        tasks.push({
          id: `task-${overallDay}-yds-reading`,
          module: "reading",
          title: "Akademik Reading Metni & Sözlük Analizi",
          description: "Özgün Reader at Work tarzı akademik metin analizi ve ana fikir tespiti.",
          minutes: readingMin,
          href: "/reading",
          completed: false,
          completionCriteria: "Paragraf sorularını tamamla ve kelime sözlüğünü incele.",
          memoryTip: "Zor metinlerde cümlenin öznesi ile fiilini altını çizerek belirle.",
        });
      }

      // ── Görev 4: Hata Defteri & Gün Sonu Değerlendirmesi ───
      const reviewMin = Math.max(5, safeMinutes - (vocabMin + grammarMin + readingMin));
      tasks.push({
        id: `task-${overallDay}-review`,
        module: "review",
        title: "Yanlış Defteri & Gün Sonu Değerlendirmesi",
        description: "Bugün çözülen sorularda yapılan yanlışların nedenlerini incele ve not al.",
        minutes: reviewMin,
        href: "/hesap",
        completed: false,
        completionCriteria: "Tüm yanlışların gerekçelerini oku.",
        memoryTip: "Yanlış soruyu 24 saat sonra yeniden çözmek kalıcılığı %80 artırır.",
      });

      const currentDayDate = new Date(startObj);
      currentDayDate.setDate(currentDayDate.getDate() + (overallDay - 1));
      const dayDateStr = !isNaN(currentDayDate.getTime()) ? currentDayDate.toISOString().split("T")[0] : "";
      const dayDateFormatted = formatTrDate(currentDayDate);

      weekDays.push({
        day: overallDay,
        title: `${overallDay}. Gün Programı`,
        date: dayDateStr,
        dateFormatted: dayDateFormatted,
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
        `${examTitle} soru çözümü ve yanlış analizi`,
        "En az 3 tam okuma/deneme metni analizi",
      ],
      days: weekDays,
    });
  }

  const checkpoints: StudyCheckpoint[] = [
    {
      day: Math.max(1, Math.floor(safeDays * 0.25)),
      title: "1. Çeyrek Kontrolü",
      description: `${examTitle} temel kuralları ve kelime kazanımlarının ölçümü.`,
      criteria: "20 soruluk tarama testinde %70+ başarı.",
    },
    {
      day: Math.max(2, Math.floor(safeDays * 0.5)),
      title: "Yarıyıl Deneme Provası",
      description: "Soru tipleri ve süre yönetiminin ilk yarı simülasyonu.",
      criteria: `Hedeflenen ${inputs.targetScore} barajının en az %60'ına ulaşılması.`,
    },
    {
      day: Math.max(3, Math.floor(safeDays * 0.75)),
      title: "3. Çeyrek Hız ve Çeldirici Kontrolü",
      description: "Çeldirici seçenekleri eleme ve soru başına süre optimizasyonu.",
      criteria: "Soru başına ortalama sürenin 90 saniyenin altına inmesi.",
    },
    {
      day: safeDays,
      title: `Final ${examTitle} Provası`,
      description: `Gerçek sınav şartlarında tam ${examTitle} denemesi.`,
      criteria: `Hedeflenen ${inputs.targetScore}+ seviyesinin aşılması.`,
    },
  ];

  return {
    id: planId,
    title,
    description: examDescription,
    examType: exam,
    yokdilField: exam === "YOKDIL" ? field : undefined,
    currentLevel: inputs.currentLevel,
    targetLevel: inputs.targetLevel,
    targetScore: inputs.targetScore,
    startDate: startDateStr,
    startDateFormatted,
    endDate: endDateStr,
    endDateFormatted,
    examDate: inputs.examDate,
    examDateFormatted,
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

// ==================== DEPOLAMA & TAKİP YARDIMCILARI ====================

export function loadSavedStudyPlans(): StudyPlan[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = safeGetStorage(STUDY_PLANS_STORAGE_KEY, "");
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
    safeSetStorage(STUDY_PLANS_STORAGE_KEY, JSON.stringify(plans));
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
    examType: tmpl.examType,
    yokdilField: tmpl.yokdilField,
    currentLevel: "A2",
    targetLevel: (tmpl.targetLevel as CefrLevel) || "B2",
    targetScore: tmpl.targetScore || 75,
    totalDays: tmpl.totalDays,
    dailyMinutes: tmpl.dailyMinutes,
  }),
  id: tmpl.id,
  title: tmpl.title,
  description: tmpl.description,
  examType: tmpl.examType,
  yokdilField: tmpl.yokdilField,
  estimatedCompletion: tmpl.estimatedCompletion,
  acceleratedAlternative: tmpl.acceleratedAlternative,
}));

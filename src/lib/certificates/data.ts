// ============================================================
// src/lib/certificates/data.ts
// YDS Master — Seviye Sertifika Tanımları & Çok Becerili Seviye Atlama Soruları
// (Gramer, Okuma/Reading, Dinleme/Listening, Konuşma/Speaking)
// ============================================================

import { CertificateDefinition, CertificateLevel, LevelUpQuizQuestion } from "./types";

export const CERTIFICATE_DEFINITIONS: Record<CertificateLevel, CertificateDefinition> = {
  A1: {
    level: "A1",
    title: "A1 Başlangıç Seviyesi Bitirme Sertifikası",
    subtitle: "Elementary English Foundations Certificate",
    cefrRank: "Başlangıç (Beginner / Çaylak)",
    badgeEmoji: "🌱",
    theme: {
      border: "border-emerald-500/50",
      accent: "#10b981",
      badgeBg: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
      textGradient: "from-emerald-400 via-teal-300 to-cyan-400",
      sealColor: "#059669",
    },
    skillsLearned: [
      "Temel İngilizce cümle sırası (SVO)",
      "Simple Present & Past Tense kullanımı",
      "Günlük 100+ temel kelime ve zamirler",
      "Temel zaman zarfları ve sıfatlar",
    ],
    requirements: {
      minXp: 120,
      minWords: 30,
      minGrammar: 2,
      examPassingScore: 70,
    },
    descriptionTr: "Öğrenci temel İngilizce cümle kurma kurallarını, basit zaman kiplerini ve başlangıç seviyesi kelime dağarcığını başarıyla tamamlamıştır.",
  },
  A2: {
    level: "A2",
    title: "A2 Temel Düzey Bitirme Sertifikası",
    subtitle: "Pre-Intermediate English Proficiency Certificate",
    cefrRank: "Temel Seviye (Elementary / Kaşif)",
    badgeEmoji: "🌿",
    theme: {
      border: "border-lime-500/50",
      accent: "#84cc16",
      badgeBg: "bg-lime-500/15 text-lime-400 border-lime-500/30",
      textGradient: "from-lime-400 via-emerald-300 to-teal-400",
      sealColor: "#65a30d",
    },
    skillsLearned: [
      "Zaman uyumu & geçmiş süreç bağlaçları (when/while)",
      "Karşılaştırma kalıpları (Comparatives & Superlatives)",
      "Gerund & Infinitive temelleri",
      "200+ akademik ve günlük kelime ayrımı",
    ],
    requirements: {
      minXp: 350,
      minWords: 75,
      minGrammar: 5,
      examPassingScore: 70,
    },
    descriptionTr: "Öğrenci zamanlar arası geçişleri, karşılaştırma yapılarını ve temel bağlaç mantığını başarıyla kavrayarak A2 düzeyini tamamlamıştır.",
  },
  B1: {
    level: "B1",
    title: "B1 Orta Düzey YDS Hazırlık Sertifikası",
    subtitle: "Intermediate Academic Foundations Certificate",
    cefrRank: "Orta Düzey (Intermediate / Gelişim)",
    badgeEmoji: "⚡",
    theme: {
      border: "border-sky-500/50",
      accent: "#0ea5e9",
      badgeBg: "bg-sky-500/15 text-sky-400 border-sky-500/30",
      textGradient: "from-sky-400 via-cyan-300 to-blue-400",
      sealColor: "#0284c7",
    },
    skillsLearned: [
      "Modal fiiller ve olasılık çıkarımları (must/might have V3)",
      "Relative Clauses (Sıfat cümlecikleri ve kısaltmalar)",
      "Akademik bağlaçlar (Although, Because, Therefore)",
      "Orta düzey metin kavrama ve çıkarım yapma",
    ],
    requirements: {
      minXp: 750,
      minWords: 150,
      minGrammar: 9,
      examPassingScore: 70,
    },
    descriptionTr: "Öğrenci YDS'nin temelini oluşturan modal çıkarımlarını, sıfat cümleciklerini ve akademik bağlaç stratejilerini başarıyla tamamlamıştır.",
  },
  B2: {
    level: "B2",
    title: "B2 İleri-Orta YDS Baraj Başarı Sertifikası",
    subtitle: "Upper-Intermediate Academic Mastery Certificate",
    cefrRank: "İleri-Orta (Upper-Intermediate / YDS Barajı)",
    badgeEmoji: "🔥",
    theme: {
      border: "border-purple-500/50",
      accent: "#a855f7",
      badgeBg: "bg-purple-500/15 text-purple-400 border-purple-500/30",
      textGradient: "from-purple-400 via-pink-300 to-indigo-400",
      sealColor: "#7e22ce",
    },
    skillsLearned: [
      "Zıtlık, sebep-sonuç ve ikili bağlaç kombinasyonları",
      "Noun Clauses & Dolaylı anlatım teknikleri",
      "Phrasal Verbs ve Collocation eşdizimleri",
      "Akademik okuma parçası analizi ve ana fikir tespiti",
    ],
    requirements: {
      minXp: 1400,
      minWords: 250,
      minGrammar: 13,
      examPassingScore: 70,
    },
    descriptionTr: "Öğrenci YDS'de 70+ hedefleyen kritik akademik kelimeleri, karmaşık bağlaç yapılarını ve okuma kavrama tekniklerini başarıyla tamamlamıştır.",
  },
  C1: {
    level: "C1",
    title: "C1 İleri Düzey Akademik Uzmanlık Sertifikası",
    subtitle: "Advanced English Proficiency & YDS Expert Certificate",
    cefrRank: "İleri Seviye (Advanced / YDS Ustası)",
    badgeEmoji: "💎",
    theme: {
      border: "border-fuchsia-500/50",
      accent: "#d946ef",
      badgeBg: "bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/30",
      textGradient: "from-fuchsia-400 via-pink-400 to-rose-400",
      sealColor: "#c026d3",
    },
    skillsLearned: [
      "Devrik cümle yapıları (Inversion & Negative Adverbials)",
      "Participle Clause kısaltmaları (Having been V3)",
      "Reader at Work tarzı ağır akademik metin çözümlemeleri",
      "Çeviri, Paragraf Tamamlama ve Akışı Bozan Cümle taktikleri",
    ],
    requirements: {
      minXp: 2200,
      minWords: 360,
      minGrammar: 17,
      examPassingScore: 70,
    },
    descriptionTr: "Öğrenci ileri düzey dilbilgisi tuzaklarını, karmaşık akademik metin yapılarını ve 80+ puan gerektiren YDS soru tiplerini ustalıkla çözmüştür.",
  },
  C2: {
    level: "C2",
    title: "C2 Üst Düzey YDS Efsanesi ve Ustalık Sertifikası",
    subtitle: "Mastery Level YDS Grandmaster Certificate",
    cefrRank: "Ustalık (Mastery / YDS 90+ Efsanesi)",
    badgeEmoji: "👑",
    theme: {
      border: "border-amber-400/60",
      accent: "#f59e0b",
      badgeBg: "bg-amber-500/20 text-amber-300 border-amber-400/40",
      textGradient: "from-amber-300 via-yellow-200 to-orange-400",
      sealColor: "#b45309",
    },
    skillsLearned: [
      "485 Akademik kelime envanterinin eksiksiz hakimiyeti",
      "Tam YDS deneme sınavlarında yüksek net ve hız optimizasyonu",
      "İleri düzey akademik retorik ve örtük anlam çıkarımı",
      "Hata analiz defterini sıfırlayan kusursuz soru çözme yetisi",
    ],
    requirements: {
      minXp: 3000,
      minWords: 430,
      minGrammar: 20,
      examPassingScore: 75,
    },
    descriptionTr: "Öğrenci YDS Master müfredatının tamamını üstün başarıyla bitirmiş, akademik İngilizce alanında en üst seviye olan C2 Ustalık unvanına hak kazanmıştır.",
  },
};
export const LEVEL_UP_QUESTIONS: Record<CertificateLevel, LevelUpQuizQuestion[]> = {
  "A1": [
    {
      "id": "a1-q1",
      "skill": "grammar",
      "stem": "My sister and I ------- students at the new municipal high school.",
      "options": [
        "am",
        "is",
        "are",
        "be"
      ],
      "answer": 2,
      "explanation": "'My sister and I' çoğul bir öznedir (we), bu yüzden 'to be' fiilinin şimdiki zaman çoğul hali 'are' kullanılır."
    },
    {
      "id": "a1-q2",
      "skill": "grammar",
      "stem": "Ahmet usually ------- black coffee before going to his office every morning.",
      "options": [
        "drink",
        "drinks",
        "drinking",
        "drank"
      ],
      "answer": 1,
      "explanation": "Geniş zaman (Simple Present) kuralı: 3. tekil şahıslar (He/She/It - Ahmet) fiile '-s' takısı alır: 'drinks'."
    },
    {
      "id": "a1-q3",
      "skill": "grammar",
      "stem": "We ------- to Ankara last weekend to visit our grandparents.",
      "options": [
        "go",
        "goes",
        "went",
        "gone"
      ],
      "answer": 2,
      "explanation": "'Last weekend' geçmiş zaman (Simple Past) zaman zarfıdır. 'Go' fiilinin 2. hali düzensiz olarak 'went' şeklindedir."
    },
    {
      "id": "a1-q4",
      "skill": "grammar",
      "stem": "There isn't ------- fresh milk left in the refrigerator.",
      "options": [
        "many",
        "some",
        "any",
        "a few"
      ],
      "answer": 2,
      "explanation": "Olumsuz cümlelerde sayılamayan isimlerle 'hiç' anlamında 'any' kullanılır."
    },
    {
      "id": "a1-q5",
      "skill": "grammar",
      "stem": "Look at the dark clouds in the sky! It ------- rain very soon.",
      "options": [
        "is going to",
        "was",
        "did",
        "shall"
      ],
      "answer": 0,
      "explanation": "Gözlemlenebilir fiziksel bir kanıta (kara bulutlar) dayalı kesin gelecek tahminlerinde 'be going to' kalıbı kullanılır."
    },
    {
      "id": "a1-q6",
      "skill": "grammar",
      "stem": "She speaks English very ------- because she lived in London for three years.",
      "options": [
        "good",
        "well",
        "better",
        "best"
      ],
      "answer": 1,
      "explanation": "'Speaks' eylem fiilini nitelemek için sıfat (good) değil, durum belirten zarf (well) kullanılır."
    },
    {
      "id": "a1-q7",
      "skill": "reading",
      "readingPassage": "Hello! My name is Selim. I am a university student in Izmir. Every weekday, I wake up at 7:00 AM, eat a healthy breakfast with my family, and take the metro to the university campus. I study English literature, and I love reading classic novels in the quiet campus library after my afternoon lectures.",
      "stem": "According to the passage, what does Selim do after his afternoon lectures?",
      "options": [
        "He goes straight back to sleep.",
        "He reads classic novels in the campus library.",
        "He works as a metro driver in Izmir.",
        "He cooks dinner for his classmates."
      ],
      "answer": 1,
      "explanation": "Metnin son cümlesinde 'I love reading classic novels in the quiet campus library after my afternoon lectures' ifadesi açıkça yer almaktadır."
    },
    {
      "id": "a1-q8",
      "skill": "reading",
      "readingPassage": "Hello! My name is Selim. I am a university student in Izmir. Every weekday, I wake up at 7:00 AM, eat a healthy breakfast with my family, and take the metro to the university campus. I study English literature, and I love reading classic novels in the quiet campus library after my afternoon lectures.",
      "stem": "How does Selim travel to his university campus on weekdays?",
      "options": [
        "By bicycle",
        "By taking the metro",
        "By walking two hours",
        "By personal car"
      ],
      "answer": 1,
      "explanation": "Metinde Selim'in 'take the metro to the university campus' dediği belirtilmiştir."
    },
    {
      "id": "a1-q9",
      "skill": "reading",
      "readingPassage": "Hello! My name is Selim. I am a university student in Izmir. Every weekday, I wake up at 7:00 AM, eat a healthy breakfast with my family, and take the metro to the university campus. I study English literature, and I love reading classic novels in the quiet campus library after my afternoon lectures.",
      "stem": "What is Selim's academic field of study at the university?",
      "options": [
        "Computer Engineering",
        "English Literature",
        "Modern Architecture",
        "Business Administration"
      ],
      "answer": 1,
      "explanation": "Metinde 'I study English literature' cümlesi doğrudan geçmektedir."
    },
    {
      "id": "a1-q10",
      "skill": "reading",
      "readingPassage": "Hello! My name is Selim. I am a university student in Izmir. Every weekday, I wake up at 7:00 AM, eat a healthy breakfast with my family, and take the metro to the university campus. I study English literature, and I love reading classic novels in the quiet campus library after my afternoon lectures.",
      "stem": "Which of the following statements is TRUE according to the text?",
      "options": [
        "Selim lives alone in Istanbul.",
        "Selim wakes up at noon on weekdays.",
        "Selim eats breakfast together with his family.",
        "Selim dislikes books and libraries."
      ],
      "answer": 2,
      "explanation": "Metinde 'eat a healthy breakfast with my family' denmektedir."
    },
    {
      "id": "a1-q11",
      "skill": "listening",
      "audioText": "Good morning, passengers. The express train to Istanbul will depart from platform 3 at 9:45 AM. Please have your tickets ready for inspection.",
      "stem": "From which platform will the express train to Istanbul depart?",
      "options": [
        "Platform 1",
        "Platform 2",
        "Platform 3",
        "Platform 9"
      ],
      "answer": 2,
      "explanation": "Ses kaydında trenin 3 numaralı perondan kalkacağı ('depart from platform 3') söylenmektedir."
    },
    {
      "id": "a1-q12",
      "skill": "listening",
      "audioText": "Hi David, can you please bring the blue folder and two black pens from my desk before our staff meeting starts at 2:00 PM?",
      "stem": "What items does the speaker request David to bring before 2:00 PM?",
      "options": [
        "A red notebook and a laptop",
        "A blue folder and two black pens",
        "A cup of tea and a textbook",
        "Three white envelopes"
      ],
      "answer": 1,
      "explanation": "Konuşmacı 'the blue folder and two black pens from my desk' getirilmesini istemektedir."
    },
    {
      "id": "a1-q13",
      "skill": "listening",
      "audioText": "Welcome to the central library. We are open from 8:00 AM to 8:00 PM on weekdays, but we close early at 5:00 PM on Saturdays.",
      "stem": "What time does the library close on Saturdays?",
      "options": [
        "At 8:00 AM",
        "At 12:00 PM",
        "At 5:00 PM",
        "At 8:00 PM"
      ],
      "answer": 2,
      "explanation": "Ses kaydında cumartesi günleri saat 17:00'de (5:00 PM) kapandığı ('we close early at 5:00 PM on Saturdays') belirtilmiştir."
    },
    {
      "id": "a1-q14",
      "skill": "speaking",
      "speakingPrompt": "Durum: Yeni başladığınız yabancı dil kursunda sınıf arkadaşınızla ilk kez karşılaşıyorsunuz. Kendinizi en doğal ve kibar şekilde nasıl tanıtırsınız?",
      "stem": "Which of the following is the most appropriate and polite introduction?",
      "options": [
        "Give me your book right now.",
        "Hello, nice to meet you. My name is Ali, and I am a new student here.",
        "Why are you looking at me?",
        "I want to leave this class immediately."
      ],
      "answer": 1,
      "explanation": "İlk tanışmada en samimi, nazik ve standart kalıp 'Hello, nice to meet you. My name is...' kalıbıdır."
    },
    {
      "id": "a1-q15",
      "skill": "speaking",
      "speakingPrompt": "Durum: Bir kafede oturuyorsunuz ve garsona bir fincan yeşil çay siparişi vermek istiyorsunuz.",
      "stem": "How would you order your drink politely in English?",
      "options": [
        "Tea! Give it to me fast!",
        "Could I please have a cup of green tea?",
        "I do not like coffee at all.",
        "Where is the bus station?"
      ],
      "answer": 1,
      "explanation": "Kibar sipariş verirken 'Could I please have...' veya 'I would like...' kalıpları tercih edilir."
    },
    {
      "id": "a1-q16",
      "skill": "speaking",
      "speakingPrompt": "Durum: Yabancı bir turist şehrinizdeki müzeyi size soruyor ancak müzenin nerede olduğunu bilmiyorsunuz.",
      "stem": "What is the most courteous and helpful way to reply?",
      "options": [
        "Go away, I am very busy.",
        "I'm sorry, I'm not from around here, so I don't know the exact way.",
        "Museums are very boring places.",
        "You must pay me money first."
      ],
      "answer": 1,
      "explanation": "Yolu bilmediğinizi nazikçe ifade etmenin en doğal yolu 'I'm sorry, I'm not from around here...' ifadesidir."
    }
  ],
  "A2": [
    {
      "id": "a2-q1",
      "skill": "grammar",
      "stem": "While I ------- down the boulevard, I suddenly ran into an old classmate from elementary school.",
      "options": [
        "walked",
        "was walking",
        "have walked",
        "had walked"
      ],
      "answer": 1,
      "explanation": "'While' bağlacı geçmişte belirli bir süre devam eden süreci anlatırken Past Continuous (was/were V-ing) gerektirir."
    },
    {
      "id": "a2-q2",
      "skill": "grammar",
      "stem": "This new laptop model is much ------- than the bulky one I bought two years ago.",
      "options": [
        "expensive",
        "more expensive",
        "most expensive",
        "as expensive"
      ],
      "answer": 1,
      "explanation": "'Than' karşılaştırma edatı bulunduğu ve 'expensive' çok heceli bir sıfat olduğu için 'more expensive' kullanılır."
    },
    {
      "id": "a2-q3",
      "skill": "grammar",
      "stem": "Dr. Kaya advised his patient to stop ------- sugary sodas to improve his blood pressure.",
      "options": [
        "drink",
        "drinking",
        "to drink",
        "drank"
      ],
      "answer": 1,
      "explanation": "'Stop' fiili bir alışkanlığı tamamen bırakmak anlamında kullanıldığında arkasından Gerund (-ing) alır: 'stop drinking'."
    },
    {
      "id": "a2-q4",
      "skill": "grammar",
      "stem": "If the weather ------- sunny this Sunday, we will hike up to the pine forest.",
      "options": [
        "is",
        "will be",
        "was",
        "has been"
      ],
      "answer": 0,
      "explanation": "Type 1 koşul cümlesi kuralı: 'If' yan cümlesinde geniş zaman (Simple Present - is), ana cümlede 'will + V1' kullanılır."
    },
    {
      "id": "a2-q5",
      "skill": "grammar",
      "stem": "Our company has been operating in this technology sector ------- more than a decade.",
      "options": [
        "since",
        "for",
        "during",
        "while"
      ],
      "answer": 1,
      "explanation": "Zaman sürecinin toplam süresi ('more than a decade') belirtildiğinde 'for' edatı kullanılır."
    },
    {
      "id": "a2-q6",
      "skill": "grammar",
      "stem": "You ------- wear a safety helmet when entering the construction zone; it is strictly mandatory.",
      "options": [
        "must",
        "might",
        "may",
        "could"
      ],
      "answer": 0,
      "explanation": "Yasal ve zorunlu kurallarda kesin gereklilik belirten 'must' modalı kullanılır."
    },
    {
      "id": "a2-q7",
      "skill": "reading",
      "readingPassage": "Renewable energy has become essential in combating global warming. Solar panels convert natural sunlight directly into clean electricity, while wind turbines harness air currents across open hills. In several European countries, more than 40 percent of total domestic electricity is now generated from these eco-friendly sources, dramatically reducing national dependence on harmful fossil fuels like coal and petroleum.",
      "stem": "According to the text, what is the primary role of renewable energy?",
      "options": [
        "To increase dependence on petroleum",
        "To combat global warming and reduce fossil fuel usage",
        "To replace all trees with wind turbines",
        "To heat coal mines during winter"
      ],
      "answer": 1,
      "explanation": "Metnin ilk ve son cümlelerinde yenilenebilir enerjinin küresel ısınmayla mücadele ettiği ve fosil yakıt bağımlılığını azalttığı vurgulanmaktadır."
    },
    {
      "id": "a2-q8",
      "skill": "reading",
      "readingPassage": "Renewable energy has become essential in combating global warming. Solar panels convert natural sunlight directly into clean electricity, while wind turbines harness air currents across open hills. In several European countries, more than 40 percent of total domestic electricity is now generated from these eco-friendly sources, dramatically reducing national dependence on harmful fossil fuels like coal and petroleum.",
      "stem": "How do solar panels produce electricity according to the author?",
      "options": [
        "By burning dry wood",
        "By converting natural sunlight directly into clean energy",
        "By filtering ocean water",
        "By using coal generators"
      ],
      "answer": 1,
      "explanation": "Metinde 'Solar panels convert natural sunlight directly into clean electricity' denmektedir."
    },
    {
      "id": "a2-q9",
      "skill": "reading",
      "readingPassage": "Renewable energy has become essential in combating global warming. Solar panels convert natural sunlight directly into clean electricity, while wind turbines harness air currents across open hills. In several European countries, more than 40 percent of total domestic electricity is now generated from these eco-friendly sources, dramatically reducing national dependence on harmful fossil fuels like coal and petroleum.",
      "stem": "What significant milestone is mentioned regarding several European nations?",
      "options": [
        "They have banned electricity entirely.",
        "Over 40 percent of their electricity comes from renewable sources.",
        "They produce all their energy from coal.",
        "They do not have any wind turbines."
      ],
      "answer": 1,
      "explanation": "Metinde 'more than 40 percent of total domestic electricity is now generated from these eco-friendly sources' bilgisi verilir."
    },
    {
      "id": "a2-q10",
      "skill": "reading",
      "readingPassage": "Renewable energy has become essential in combating global warming. Solar panels convert natural sunlight directly into clean electricity, while wind turbines harness air currents across open hills. In several European countries, more than 40 percent of total domestic electricity is now generated from these eco-friendly sources, dramatically reducing national dependence on harmful fossil fuels like coal and petroleum.",
      "stem": "Which of the following is mentioned as an example of fossil fuels?",
      "options": [
        "Sunlight and wind",
        "Coal and petroleum",
        "Hydroelectric power",
        "Fresh rainwater"
      ],
      "answer": 1,
      "explanation": "Metnin sonunda 'harmful fossil fuels like coal and petroleum' ifadesi geçmektedir."
    },
    {
      "id": "a2-q11",
      "skill": "listening",
      "audioText": "Attention shoppers, the supermarket will be closing in fifteen minutes. Please proceed to the checkout counters with your shopping carts.",
      "stem": "How much time do shoppers have before the supermarket closes its doors?",
      "options": [
        "Fifty minutes",
        "Fifteen minutes",
        "Five minutes",
        "Two hours"
      ],
      "answer": 1,
      "explanation": "Ses kaydında 'the supermarket will be closing in fifteen minutes' (on beş dakika içinde kapanacağı) duyurulmaktadır."
    },
    {
      "id": "a2-q12",
      "skill": "listening",
      "audioText": "Good afternoon. Doctor Miller's consultation office is located on the second floor. Please take a seat in the waiting lounge and fill out this brief medical history form.",
      "stem": "What is the patient requested to do while waiting on the second floor?",
      "options": [
        "Pay for the surgery immediately",
        "Fill out a brief medical history form",
        "Take medicine without water",
        "Call another hospital"
      ],
      "answer": 1,
      "explanation": "Görevli 'fill out this brief medical history form' (sağlık geçmişi formunu doldurmasını) rica etmektedir."
    },
    {
      "id": "a2-q13",
      "skill": "listening",
      "audioText": "The meteorological bureau reports that coastal areas will experience heavy showers in the morning, followed by strong wind gusts in the late afternoon.",
      "stem": "What weather condition is predicted for the late afternoon in coastal areas?",
      "options": [
        "Snowstorms and hail",
        "Dense morning fog",
        "Strong wind gusts",
        "Completely dry sunshine"
      ],
      "answer": 2,
      "explanation": "Ses kaydında öğleden sonra geç saatlerde 'strong wind gusts' (şiddetli rüzgar hamleleri) olacağı belirtilmiştir."
    },
    {
      "id": "a2-q14",
      "skill": "speaking",
      "speakingPrompt": "Durum: Bir çalışma arkadaşınız sizi bu akşamki yemek davetine çağırıyor ancak daha önceden verilmiş önemli bir randevunuz var.",
      "stem": "What is the most polite and natural way to decline the invitation?",
      "options": [
        "No, your dinners are always terrible.",
        "Thank you so much for the kind invite, but I already have another commitment tonight. Could we do it next week?",
        "Don't ever speak to me again.",
        "I hate eating food with colleagues."
      ],
      "answer": 1,
      "explanation": "Daveti kibarca reddedip alternatif önermek için 'Thank you so much... but I already have another commitment...' en uygun iletişim kalıbıdır."
    },
    {
      "id": "a2-q15",
      "skill": "speaking",
      "speakingPrompt": "Durum: Bir mağazada beğendiğiniz ceketi denediniz fakat bedeni size dar geldi. Satış danışmanından bir beden büyüğünü istemek istiyorsunuz.",
      "stem": "How do you ask the sales assistant politely for a larger size?",
      "options": [
        "This jacket is awful, throw it away.",
        "Excuse me, do you happen to have this jacket in a larger size?",
        "Why is everything in this shop so small?",
        "Give me money to buy another jacket."
      ],
      "answer": 1,
      "explanation": "'Excuse me, do you happen to have this... in a larger size?' ifadesi mağazada en nazik ve yaygın kullanılan kalıptır."
    },
    {
      "id": "a2-q16",
      "skill": "speaking",
      "speakingPrompt": "Durum: Yakın bir arkadaşınız aylardır çalıştığı zorlu İngilizce seviye sınavını başarıyla geçtiğini müjdeliyor.",
      "stem": "How do you express genuine congratulations and encouragement?",
      "options": [
        "That exam was so easy, anyone could pass it.",
        "Congratulations! I know how hard you worked for this, you truly deserve it!",
        "Why are you telling me this?",
        "You probably cheated on the exam."
      ],
      "answer": 1,
      "explanation": "'Congratulations! I know how hard you worked for this...' tebrik ve motivasyon bildiren en samimi İngilizce tepkidir."
    }
  ],
  "B1": [
    {
      "id": "b1-q1",
      "skill": "grammar",
      "stem": "The historical stone bridge, ------- was commissioned by the Ottoman architect in 1580, remains functional today.",
      "options": [
        "who",
        "which",
        "whose",
        "where"
      ],
      "answer": 1,
      "explanation": "Cansız bir varlığı (the stone bridge) niteleyen ve virgülle ayrılan Non-defining Relative Clause yapısında 'which' kullanılır."
    },
    {
      "id": "b1-q2",
      "skill": "grammar",
      "stem": "By the time the rescue helicopters finally reached the mountain peak, the stranded climbers ------- in freezing blizzards for eight hours.",
      "options": [
        "are waiting",
        "have waited",
        "had been waiting",
        "will wait"
      ],
      "answer": 2,
      "explanation": "'By the time + Past Simple' yapısıyla birlikte geçmişteki eylemin öncesindeki süreci vurgulamak için Past Perfect Continuous (had been waiting) gerekir."
    },
    {
      "id": "b1-q3",
      "skill": "grammar",
      "stem": "Unless national governments ------- binding emissions agreements, global sea levels will continue to rise rapidly.",
      "options": [
        "enact",
        "enacted",
        "will enact",
        "had enacted"
      ],
      "answer": 0,
      "explanation": "'Unless' koşul bağlacının bulunduğu yan cümlede gelecek zaman yerine geniş zaman (enact) kullanılır."
    },
    {
      "id": "b1-q4",
      "skill": "grammar",
      "stem": "Because of torrential rain and severe logistical delays, the organizing committee decided to ------- the marathon.",
      "options": [
        "call off",
        "give in",
        "look into",
        "break into"
      ],
      "answer": 0,
      "explanation": "'Call off' ertelemek/iptal etmek (cancel) anlamına gelen çok yaygın bir phrasal verb'dür."
    },
    {
      "id": "b1-q5",
      "skill": "grammar",
      "stem": "Merve ------- have forgotten her passport at home, because it is nowhere to be found in her traveling bag.",
      "options": [
        "must",
        "can't",
        "shouldn't",
        "needn't"
      ],
      "answer": 0,
      "explanation": "Geçmişe dair güçlü ve mantıklı çıkarımlarda 'must have V3' (unutmuş olmalı) yapısı kullanılır."
    },
    {
      "id": "b1-q6",
      "skill": "grammar",
      "stem": "The municipality planted thousands of drought-resistant shrubs ------- prevent severe topsoil erosion during winter.",
      "options": [
        "in order to",
        "in spite of",
        "whereas",
        "as well as"
      ],
      "answer": 0,
      "explanation": "Fiil tabanı (prevent) ile amaç bildirmek için 'in order to + V1' (amacıyla, -mek için) yapısı kullanılır."
    },
    {
      "id": "b1-q7",
      "skill": "reading",
      "readingPassage": "Urban vertical farming has emerged as a revolutionary agricultural method engineered to feed expanding metropolitan populations. By cultivating crops in vertically stacked indoor shelves under automated LED lighting, vertical farms consume 95 percent less water than conventional outdoor farming and completely eliminate synthetic pesticides. Although setup capital remains elevated due to sensor technology and climate control devices, proponents emphasize that hyper-local production drastically reduces long-haul transportation emissions and insulates food security against unpredictable meteorological extremes.",
      "stem": "According to the passage, what is one major environmental benefit of vertical farming?",
      "options": [
        "It eliminates the need for any water whatsoever.",
        "It uses 95% less water and avoids synthetic pesticides.",
        "It cuts down trees to construct open field farms.",
        "It relies primarily on diesel generators."
      ],
      "answer": 1,
      "explanation": "Metinde 'consume 95 percent less water than conventional outdoor farming and completely eliminate synthetic pesticides' ifadesi mevcuttur."
    },
    {
      "id": "b1-q8",
      "skill": "reading",
      "readingPassage": "Urban vertical farming has emerged as a revolutionary agricultural method engineered to feed expanding metropolitan populations. By cultivating crops in vertically stacked indoor shelves under automated LED lighting, vertical farms consume 95 percent less water than conventional outdoor farming and completely eliminate synthetic pesticides. Although setup capital remains elevated due to sensor technology and climate control devices, proponents emphasize that hyper-local production drastically reduces long-haul transportation emissions and insulates food security against unpredictable meteorological extremes.",
      "stem": "Why are the initial setup expenditures for vertical farms considered high?",
      "options": [
        "Due to exorbitant farmland rent in rural villages",
        "Due to specialized sensor technologies and climate control devices",
        "Because of the extensive use of chemical fertilizers",
        "Because tractor maintenance costs are unbearable"
      ],
      "answer": 1,
      "explanation": "Metinde 'setup capital remains elevated due to sensor technology and climate control devices' gerekçesi sunulmuştur."
    },
    {
      "id": "b1-q9",
      "skill": "reading",
      "readingPassage": "Urban vertical farming has emerged as a revolutionary agricultural method engineered to feed expanding metropolitan populations. By cultivating crops in vertically stacked indoor shelves under automated LED lighting, vertical farms consume 95 percent less water than conventional outdoor farming and completely eliminate synthetic pesticides. Although setup capital remains elevated due to sensor technology and climate control devices, proponents emphasize that hyper-local production drastically reduces long-haul transportation emissions and insulates food security against unpredictable meteorological extremes.",
      "stem": "The author implies that vertical farming helps decrease carbon footprints primarily because -------.",
      "options": [
        "crops are grown locally in cities, minimizing long-haul freight transport",
        "food is exclusively delivered by air cargo",
        "it produces synthetic diesel fuel as a byproduct",
        "consumers are required to harvest their own vegetables"
      ],
      "answer": 0,
      "explanation": "Metinde 'hyper-local production drastically reduces long-haul transportation emissions' ifadesi vurgulanmaktadır."
    },
    {
      "id": "b1-q10",
      "skill": "reading",
      "readingPassage": "Urban vertical farming has emerged as a revolutionary agricultural method engineered to feed expanding metropolitan populations. By cultivating crops in vertically stacked indoor shelves under automated LED lighting, vertical farms consume 95 percent less water than conventional outdoor farming and completely eliminate synthetic pesticides. Although setup capital remains elevated due to sensor technology and climate control devices, proponents emphasize that hyper-local production drastically reduces long-haul transportation emissions and insulates food security against unpredictable meteorological extremes.",
      "stem": "The word 'elevated' in the text is closest in meaning to -------.",
      "options": [
        "diminished",
        "high / costly",
        "unnecessary",
        "subsidized"
      ],
      "answer": 1,
      "explanation": "'Setup capital remains elevated' ifadesinde 'elevated', yüksek/pahalı (high/costly) anlamında kullanılmıştır."
    },
    {
      "id": "b1-q11",
      "skill": "listening",
      "audioText": "Good afternoon seminar participants. Professor Higgins has encountered severe flight cancellations in Frankfurt. Consequently, today's keynote address on Artificial Intelligence Ethics will commence at 3:30 PM instead of 1:00 PM in Lecture Hall B.",
      "stem": "Why has Professor Higgins' keynote address been delayed to 3:30 PM?",
      "options": [
        "Because Lecture Hall B was undergoing emergency repairs",
        "Because he encountered flight cancellations in Frankfurt",
        "Because the seminar attendees voted to postpone it",
        "Because he decided to deliver the talk via podcast"
      ],
      "answer": 1,
      "explanation": "Ses kaydında 'encountered severe flight cancellations in Frankfurt' nedeniyle ertelendiği belirtilmiştir."
    },
    {
      "id": "b1-q12",
      "skill": "listening",
      "audioText": "Customer Security Notice: To update your primary billing address securely, please log into your digital banking account, select the Settings tab, and enter the one-time verification password sent via SMS to your registered telephone.",
      "stem": "How does the digital banking portal verify customer identity for billing updates?",
      "options": [
        "By requesting a photocopy of their passport via mail",
        "By asking for a one-time verification SMS password",
        "By scheduling an in-person branch interview",
        "By scanning biometric fingerprints on paper"
      ],
      "answer": 1,
      "explanation": "Sesli metinde 'enter the one-time verification password sent via SMS' adımı açıklanmıştır."
    },
    {
      "id": "b1-q13",
      "skill": "listening",
      "audioText": "The campus environmental committee announced that starting next Monday, all single-use plastic cups and food containers in the dining hall will be replaced with compostable materials made from wheat straw and bamboo fiber.",
      "stem": "What eco-friendly policy will be introduced in the campus dining hall next Monday?",
      "options": [
        "Students will no longer be allowed to consume hot meals.",
        "Single-use plastics will be replaced with compostable wheat and bamboo items.",
        "The dining hall will close permanently for environmental preservation.",
        "All food will be imported from tropical organic plantations."
      ],
      "answer": 1,
      "explanation": "Duyuruda tek kullanımlık plastiklerin kompostlanabilir buğday samanı ve bambu lifli kaplarla değiştirileceği söylenmektedir."
    },
    {
      "id": "b1-q14",
      "skill": "speaking",
      "speakingPrompt": "Durum: Proje toplantısında bir ekip üyesi harika ancak bütçeyi iki katına çıkaracak bir reklam fikri sunuyor. Endişenizi yapıcı ve profesyonelce nasıl ifade edersiniz?",
      "stem": "Which statement expresses constructive financial concern most professionally?",
      "options": [
        "That idea is absurd, you are wasting our time.",
        "I really admire the creative vision behind this proposal, but I worry the projected costs might strain our quarterly budget. Could we explore a phased rollout?",
        "Spend the money anyway, who cares about the budget?",
        "I refuse to listen to any more marketing proposals."
      ],
      "answer": 1,
      "explanation": "İş dünyasında yapıcı geribildirim verirken 'I really admire... but I worry... Could we explore...?' diplomatik kalıbı en uygundur."
    },
    {
      "id": "b1-q15",
      "skill": "speaking",
      "speakingPrompt": "Durum: Beklenmedik bir elektrik kesintisi nedeniyle katılamadığınız çevrimiçi üniversite dersinin kaydını öğretim üyesinden rica etmek istiyorsunuz.",
      "stem": "How do you request the lecture recording respectfully from your professor?",
      "options": [
        "Send me the video right now because my power went out.",
        "Dear Professor, I apologize for missing today's lecture due to a sudden regional blackout. Would it be possible to access the recording?",
        "Why didn't you cancel class when my electricity was gone?",
        "I don't need your slides, just give me an A grade."
      ],
      "answer": 1,
      "explanation": "Akademik nezakette 'Dear Professor, I apologize for missing... Would it be possible to access...?' kalıbı standarttır."
    },
    {
      "id": "b1-q16",
      "skill": "speaking",
      "speakingPrompt": "Durum: Yönettiğiniz çalışma grubunda bir katılımcı sürekli konuşarak diğer üyelerin söz almasını engelliyor. Nazikçe araya nasıl girersiniz?",
      "stem": "How do you intervene diplomatically to invite other voices into the discussion?",
      "options": [
        "Shut your mouth and let someone else speak!",
        "Thank you for those valuable insights, Can. Let's make sure we also hear thoughts from our other colleagues before our time elapses.",
        "Nobody wants to hear your opinion anymore.",
        "I am ending this meeting because of you."
      ],
      "answer": 1,
      "explanation": "Moderatörlükte 'Thank you for those valuable insights... Let's make sure we also hear thoughts from our other colleagues...' dengeli ve saygılıdır."
    }
  ],
  "B2": [
    {
      "id": "b2-q1",
      "skill": "grammar",
      "stem": "Hardly ------- into the main laboratory when the acoustic hazard alarms started blaring frantically.",
      "options": [
        "the senior chemist stepped",
        "had the senior chemist stepped",
        "has the senior chemist stepped",
        "did the senior chemist step"
      ],
      "answer": 1,
      "explanation": "'Hardly ... when' kalıbı cümlenin başına geldiğinde devrik (inversion) yapı gerektirir: 'Hardly + had + özne + V3'."
    },
    {
      "id": "b2-q2",
      "skill": "grammar",
      "stem": "------- persistent breakthroughs in computational biotechnology, several aggressive forms of cancer remain notoriously elusive.",
      "options": [
        "Despite",
        "Although",
        "In contrast",
        "Whereas"
      ],
      "answer": 0,
      "explanation": "'Persistent breakthroughs...' bir isim tamlamasıdır (noun phrase). İsim tamlamalarıyla zıtlık bildirmek için edat olan 'Despite' kullanılır."
    },
    {
      "id": "b2-q3",
      "skill": "grammar",
      "stem": "The judicial board adamantly insisted that the ambiguous patent statute ------- immediately pending constitutional review.",
      "options": [
        "is repealed",
        "be repealed",
        "repealed",
        "was repealed"
      ],
      "answer": 1,
      "explanation": "'Insist that + Subjunctive' yapısında tüm şahıslar için fiilin yalın hali (be V3 passive) kullanılır: 'be repealed'."
    },
    {
      "id": "b2-q4",
      "skill": "grammar",
      "stem": "The biographical novel depicts the explorer as an enigmatic figure whose ethical compass was ------- unambiguous.",
      "options": [
        "by no means",
        "in no time",
        "at any rate",
        "for good"
      ],
      "answer": 0,
      "explanation": "'By no means' (asla, hiçbir surette) zarfı akademik ve edebi metinlerde 'not at all' anlamında güçlü bir vurgudur."
    },
    {
      "id": "b2-q5",
      "skill": "grammar",
      "stem": "Had the structural engineers detected the metallic fatigue earlier, they ------- the grand inauguration of the suspension bridge.",
      "options": [
        "would delay",
        "would have delayed",
        "will have delayed",
        "delayed"
      ],
      "answer": 1,
      "explanation": "Devrik Type 3 koşul cümlesi: 'Had + subject + V3' yapısının temel cümlesinde 'would have V3' kullanılır."
    },
    {
      "id": "b2-q6",
      "skill": "grammar",
      "stem": "The historical documents were preserved so fragily that even subtle changes in ambient humidity could ------- irreversible molecular degradation.",
      "options": [
        "bring about",
        "take after",
        "fall out",
        "stand by"
      ],
      "answer": 0,
      "explanation": "'Bring about' sebep olmak, meydana getirmek (cause / lead to) anlamına gelen kilit YDS/YDT fiilidir."
    },
    {
      "id": "b2-q7",
      "skill": "reading",
      "readingPassage": "Cognitive dissonance is a psychological phenomenon characterized by psychological discomfort when an individual simultaneously harbors mutually conflicting beliefs, values, or behaviors. To diminish this uncomfortable psychological tension, human beings frequently resort to rationalization—modifying their subjective perceptions or devising ad-hoc justifications rather than abandoning entrenched habits. In consumer behavior studies, purchasers frequently scour positive product reviews post-transaction solely to validate lavish expenditures and neutralize buyer's remorse, underscoring how cognitive dissonance actively distorts objective rational decision-making.",
      "stem": "According to the passage, why do individuals frequently resort to rationalization?",
      "options": [
        "To impress colleagues during academic conferences",
        "To alleviate the internal tension provoked by conflicting beliefs or actions",
        "To maximize financial profits on e-commerce platforms",
        "To memorize scientific definitions more accurately"
      ],
      "answer": 1,
      "explanation": "Metinde 'To diminish this uncomfortable psychological tension, human beings frequently resort to rationalization...' gerekçesi açıkça sunulmuştur."
    },
    {
      "id": "b2-q8",
      "skill": "reading",
      "readingPassage": "Cognitive dissonance is a psychological phenomenon characterized by psychological discomfort when an individual simultaneously harbors mutually conflicting beliefs, values, or behaviors. To diminish this uncomfortable psychological tension, human beings frequently resort to rationalization—modifying their subjective perceptions or devising ad-hoc justifications rather than abandoning entrenched habits. In consumer behavior studies, purchasers frequently scour positive product reviews post-transaction solely to validate lavish expenditures and neutralize buyer's remorse, underscoring how cognitive dissonance actively distorts objective rational decision-making.",
      "stem": "How does cognitive dissonance typically manifest in consumer purchasing habits?",
      "options": [
        "Consumers return all purchased merchandise within twenty-four hours.",
        "Buyers actively search for favorable reviews after purchasing to validate their spending.",
        "Buyers stop using credit cards permanently.",
        "Consumers consult certified accountants before buying household groceries."
      ],
      "answer": 1,
      "explanation": "Metinde 'purchasers frequently scour positive product reviews post-transaction solely to validate lavish expenditures' denmektedir."
    },
    {
      "id": "b2-q9",
      "skill": "reading",
      "readingPassage": "Cognitive dissonance is a psychological phenomenon characterized by psychological discomfort when an individual simultaneously harbors mutually conflicting beliefs, values, or behaviors. To diminish this uncomfortable psychological tension, human beings frequently resort to rationalization—modifying their subjective perceptions or devising ad-hoc justifications rather than abandoning entrenched habits. In consumer behavior studies, purchasers frequently scour positive product reviews post-transaction solely to validate lavish expenditures and neutralize buyer's remorse, underscoring how cognitive dissonance actively distorts objective rational decision-making.",
      "stem": "It can be inferred from the passage that buyer's remorse is an emotional state that -------.",
      "options": [
        "occurs only when products are acquired completely free of charge",
        "triggers psychological discomfort that consumers attempt to neutralize",
        "strengthens objective scientific reasoning in everyday life",
        "is entirely unrelated to cognitive dissonance"
      ],
      "answer": 1,
      "explanation": "Metinde 'neutralize buyer's remorse, underscoring how cognitive dissonance actively distorts...' ifadesi bu durumu açıklamaktadır."
    },
    {
      "id": "b2-q10",
      "skill": "reading",
      "readingPassage": "Cognitive dissonance is a psychological phenomenon characterized by psychological discomfort when an individual simultaneously harbors mutually conflicting beliefs, values, or behaviors. To diminish this uncomfortable psychological tension, human beings frequently resort to rationalization—modifying their subjective perceptions or devising ad-hoc justifications rather than abandoning entrenched habits. In consumer behavior studies, purchasers frequently scour positive product reviews post-transaction solely to validate lavish expenditures and neutralize buyer's remorse, underscoring how cognitive dissonance actively distorts objective rational decision-making.",
      "stem": "The primary purpose of the author in this passage is to -------.",
      "options": [
        "condemn modern consumer culture and advertisement agencies",
        "elucidate the psychological mechanism of cognitive dissonance and exemplify its manifestation",
        "advocate for the immediate closure of all online review websites",
        "prove that human beings never change their daily routines"
      ],
      "answer": 1,
      "explanation": "Yazar bilişsel çelişki mekanizmasını açıklamakta ve tüketici davranışı örneğiyle somutlaştırmaktadır."
    },
    {
      "id": "b2-q11",
      "skill": "listening",
      "audioText": "In this morning's symposium on marine biodiversity, Dr. Richardson underscored that ocean acidification, driven by the sustained absorption of anthropogenic carbon dioxide, has catastrophically degraded the calcification process in coral reef ecosystems and shellfish colonies.",
      "stem": "What primary threat to coral reefs and shellfish does Dr. Richardson identify in the symposium?",
      "options": [
        "Uncontrolled commercial tourism along coastlines",
        "Ocean acidification undermining the calcification process",
        "A sudden decline in underwater acoustic waves",
        "Overpopulation of apex marine predators"
      ],
      "answer": 1,
      "explanation": "Ses kaydında 'ocean acidification... has catastrophically degraded the calcification process' ifadesi açıkça vurgulanmaktadır."
    },
    {
      "id": "b2-q12",
      "skill": "listening",
      "audioText": "Mission telemetry report from Submersible Alpha: We have descended to 3,400 meters below sea level. While the hydrothermal vent organisms display unprecedented density, lithium battery reserves are depleting 18 percent faster than projected due to ambient hydrostatic pressure. We will initiate surfacing maneuvers in twenty minutes.",
      "stem": "Why must the research submersible terminate its deep dive and initiate ascent?",
      "options": [
        "Due to severe seismic eruptions on the oceanic ridge",
        "Because lithium battery reserves are depleting faster than projected",
        "Because the crew discovered no biological organisms",
        "Due to a failure in the vessel's communications antenna"
      ],
      "answer": 1,
      "explanation": "Kayıtta bataryaların öngörülenden %18 daha hızlı tükendiği ('battery reserves are depleting 18 percent faster') ve yükselişe geçileceği bildirilmiştir."
    },
    {
      "id": "b2-q13",
      "skill": "listening",
      "audioText": "The literary theorist argued that late-Victorian sensation novels consistently camouflaged profound anxieties concerning swift urban industrialization beneath the veneer of domestic melodrama, thereby articulating the ambivalence of a society caught between pastoral nostalgia and mechanization.",
      "stem": "According to the literary theorist, what did late-Victorian sensation novels conceal beneath domestic melodrama?",
      "options": [
        "A complete lack of public interest in literacy",
        "Profound societal anxieties regarding rapid industrialization and modernization",
        "Detailed manuals on steam engine construction",
        "Diplomatic correspondences between European monarchies"
      ],
      "answer": 1,
      "explanation": "Kayıtta 'camouflaged profound anxieties concerning swift urban industrialization' denmiştir."
    },
    {
      "id": "b2-q14",
      "skill": "speaking",
      "speakingPrompt": "Durum: Akademik bir tartışmada karşı taraf, iki değişken arasındaki istatistiksel korelasyonu mutlak bir neden-sonuç (causation) ilişkisi gibi sunuyor. Bu mantık hatasını nazik fakat kesin bir dille nasıl çürütürsünüz?",
      "stem": "Which spoken rebuttal demonstrates the highest level of scholarly rigor and collegiality?",
      "options": [
        "You clearly do not understand basic mathematics, your claim is ridiculous.",
        "While the statistical correlation highlighted by my colleague is undoubtedly intriguing, we must be careful not to conflate correlation with causation in the absence of controlled empirical trials.",
        "I agree with everything you say because you are older than me.",
        "Statistics are entirely fabricated, so neither of us is correct."
      ],
      "answer": 1,
      "explanation": "Bilimsel tartışmada 'While the correlation... is intriguing, we must be careful not to conflate correlation with causation...' en yetkin ifadedir."
    },
    {
      "id": "b2-q15",
      "skill": "speaking",
      "speakingPrompt": "Durum: Uluslararası bir konferansta sunumunuzun ardından dinleyicilerden biri araştırma veri setinizin tamamen dışındaki bir konuya dair soru yöneltiyor. Bilmediğinizi tahmin yürütmeden, profesyonelce nasıl yönetirsiniz?",
      "stem": "How do you address the question professionally without making unfounded speculations?",
      "options": [
        "That is a stupid question, read my slides again.",
        "That is an intriguing dimension that falls outside the empirical scope of our current dataset, but it definitely warrants dedicated interdisciplinary investigation in future studies.",
        "I will invent an answer right now so that I don't look uninformed.",
        "Please leave the room immediately."
      ],
      "answer": 1,
      "explanation": "Kapsam dışı sorularda 'That falls outside the empirical scope of our current dataset, but it definitely warrants...' ifadesi akademide altın standarttır."
    },
    {
      "id": "b2-q16",
      "skill": "speaking",
      "speakingPrompt": "Durum: Bir meslektaşınız prestijli bir dergiye gönderdiği makaleye sert hakem eleştirileri (peer review) aldığı için derin bir hayal kırıklığı yaşıyor. Ona yapıcı bir moral desteği vermek istiyorsunuz.",
      "stem": "What is the most supportive and constructive response to offer your colleague?",
      "options": [
        "Your paper was flawed anyway, you should abandon academic research.",
        "Harsh peer reviews are undeniably disheartening, but the referees' critiques actually provide a constructive blueprint to tighten our methodology and resubmit even stronger.",
        "Just publish it on your personal blog instead.",
        "Never speak to reviewers again."
      ],
      "answer": 1,
      "explanation": "'Harsh peer reviews are undeniably disheartening, but... provide a constructive blueprint...' yapıcı mesleki empatiyi yansıtır."
    }
  ],
  "C1": [
    {
      "id": "c1-q1",
      "skill": "grammar",
      "stem": "Seldom ------- an archaeological revelation elicited such contentious debates among contemporary evolutionary anthropologists.",
      "options": [
        "has",
        "have",
        "had",
        "did"
      ],
      "answer": 0,
      "explanation": "Cümle 'Seldom' olumsuz zarfıyla başladığı ve tekil bir özne ('an archaeological revelation') söz konusu olduğu için devrik Present Perfect 'has' kullanılır."
    },
    {
      "id": "c1-q2",
      "skill": "grammar",
      "stem": "The central bank governor maintained that core fiscal indicators remained robust, ------- the persistent currency depreciation across emerging markets.",
      "options": [
        "notwithstanding",
        "furthermore",
        "inasmuch as",
        "likewise"
      ],
      "answer": 0,
      "explanation": "'Notwithstanding' (-e rağmen / despite), arkasından gelen isim tamlamasıyla zıtlık oluşturan üst düzey akademik bir edattır."
    },
    {
      "id": "c1-q3",
      "skill": "grammar",
      "stem": "It is paramount that the experimental clinical trials ------- strictly to the bioethical parameters laid down by the World Medical Association.",
      "options": [
        "adhere",
        "adhered",
        "will adhere",
        "adheres"
      ],
      "answer": 0,
      "explanation": "'It is paramount that + Subjunctive' yapısında özne çoğul veya tekil olsa dahi fiil eksiz yalın haliyle ('adhere') kullanılır."
    },
    {
      "id": "c1-q4",
      "skill": "grammar",
      "stem": "The essayist's satirical prose was so disarmingly subtle that novice readers frequently overlooked the ------- critique underpinning her narrative.",
      "options": [
        "mordant",
        "negligible",
        "benevolent",
        "superficial"
      ],
      "answer": 0,
      "explanation": "'Mordant' (iğneleyici, keskin, alaycı / biting, caustic) eleştirel akademik ve edebi tahlillerde kullanılan sofistike bir kelimedir."
    },
    {
      "id": "c1-q5",
      "skill": "grammar",
      "stem": "------- had the bilateral ceasefire agreement been ratified than insurgent factions launched synchronized mortar attacks across the frontier.",
      "options": [
        "No sooner",
        "Hardly",
        "Scarcely",
        "Not until"
      ],
      "answer": 0,
      "explanation": "'... than' bağlacıyla eşleşen kalıp yalnızca 'No sooner ... than' yapısıdır. ('Hardly' ve 'Scarcely' yapılarında 'when' kullanılır)."
    },
    {
      "id": "c1-q6",
      "skill": "grammar",
      "stem": "The cabinet minister's evasive replies during the televised parliamentary inquiry served only to ------- public skepticism regarding the infrastructure procurement.",
      "options": [
        "exacerbate",
        "mitigate",
        "attenuate",
        "rectify"
      ],
      "answer": 0,
      "explanation": "'Exacerbate' (kötüleştirmek, tırmandırmak, körüklemek / worsen, aggravate) YDS C1-C2 seviyesinin en karakteristik kelimelerindendir."
    },
    {
      "id": "c1-q7",
      "skill": "reading",
      "readingPassage": "Epistemic vigilance denotes the suite of cognitive mechanisms that humans deploy to scrutinize the reliability of communicated claims before integrating them into their epistemic architecture. In an era dominated by algorithmic echo chambers and synthetically fabricated disinformation, epistemic vigilance cannot rely merely on surface heuristic cues—such as perceived charisma, tribal affiliation, or emotional resonance. Contemporary epistemologists maintain that cultivating structural skepticism and methodological cross-triangulation is no longer merely an elite intellectual discipline, but an indispensable civic prerequisite to safeguard public discourse against pervasive cognitive distortion.",
      "stem": "What is the core function of 'epistemic vigilance' as articulated in the passage?",
      "options": [
        "To mechanically accept all information broadcast by mainstream media channels",
        "To critically evaluate the reliability of communicated claims before assimilating them",
        "To suppress free speech through artificial intelligence algorithms",
        "To enforce legal penalties on non-academic publications"
      ],
      "answer": 1,
      "explanation": "Metnin ilk cümlesinde 'scrutinize the reliability of communicated claims before integrating them into their epistemic architecture' denmektedir."
    },
    {
      "id": "c1-q8",
      "skill": "reading",
      "readingPassage": "Epistemic vigilance denotes the suite of cognitive mechanisms that humans deploy to scrutinize the reliability of communicated claims before integrating them into their epistemic architecture. In an era dominated by algorithmic echo chambers and synthetically fabricated disinformation, epistemic vigilance cannot rely merely on surface heuristic cues—such as perceived charisma, tribal affiliation, or emotional resonance. Contemporary epistemologists maintain that cultivating structural skepticism and methodological cross-triangulation is no longer merely an elite intellectual discipline, but an indispensable civic prerequisite to safeguard public discourse against pervasive cognitive distortion.",
      "stem": "Why have superficial heuristic cues become obsolete in contemporary information environments?",
      "options": [
        "Because humans have ceased to experience emotional reactions to rhetoric",
        "Because algorithmic echo chambers and synthetic disinformation weaponize superficial cues",
        "Because democratic governance has made skepticism illegal",
        "Because all news articles are now published under peer review"
      ],
      "answer": 1,
      "explanation": "Yazar algoritmik yankı odaları ve sentetik dezenformasyon ortamında yüzeyel sezgisel ipuçlarının (karizma, aidiyet vb.) yanıltıcı olduğunu belirtir."
    },
    {
      "id": "c1-q9",
      "skill": "reading",
      "readingPassage": "Epistemic vigilance denotes the suite of cognitive mechanisms that humans deploy to scrutinize the reliability of communicated claims before integrating them into their epistemic architecture. In an era dominated by algorithmic echo chambers and synthetically fabricated disinformation, epistemic vigilance cannot rely merely on surface heuristic cues—such as perceived charisma, tribal affiliation, or emotional resonance. Contemporary epistemologists maintain that cultivating structural skepticism and methodological cross-triangulation is no longer merely an elite intellectual discipline, but an indispensable civic prerequisite to safeguard public discourse against pervasive cognitive distortion.",
      "stem": "According to epistemologists cited in the text, cultivating structural skepticism is now -------.",
      "options": [
        "a luxury reserved exclusively for university chancellors",
        "an essential civic prerequisite to insulate democratic discourse from distortions",
        "a dangerous habit that breeds social cynicism and decay",
        "an obsolete technique replaced by computer algorithms"
      ],
      "answer": 1,
      "explanation": "Metinde 'an indispensable civic prerequisite to safeguard public discourse against pervasive cognitive distortion' tespiti yer alır."
    },
    {
      "id": "c1-q10",
      "skill": "reading",
      "readingPassage": "Epistemic vigilance denotes the suite of cognitive mechanisms that humans deploy to scrutinize the reliability of communicated claims before integrating them into their epistemic architecture. In an era dominated by algorithmic echo chambers and synthetically fabricated disinformation, epistemic vigilance cannot rely merely on surface heuristic cues—such as perceived charisma, tribal affiliation, or emotional resonance. Contemporary epistemologists maintain that cultivating structural skepticism and methodological cross-triangulation is no longer merely an elite intellectual discipline, but an indispensable civic prerequisite to safeguard public discourse against pervasive cognitive distortion.",
      "stem": "The overarching tone of the author throughout the excerpt can best be categorized as -------.",
      "options": [
        "flippant and indifferent",
        "analytical, urgent, and pedagogical",
        "nostalgic and romanticized",
        "defeatist and pessimistic"
      ],
      "answer": 1,
      "explanation": "Metin epistemolojik ilkeleri analitik, aciliyet bildiren ve öğretici (analytical, urgent, pedagogical) bir üslupla ele almaktadır."
    },
    {
      "id": "c1-q11",
      "skill": "listening",
      "audioText": "Esteemed colleagues, our longitudinal neuroimaging study tracing two thousand cohorts over three decades demonstrates that neural plasticity does not precipitously deteriorate in senescence as classic neurology dogma held. Rather, cognitive reserve is fortified by continuous multilingual engagement and sustained intellectual curiosity, postponing clinical manifestations of neurodegenerative pathology by an average of 4.5 years.",
      "stem": "What fundamental insight regarding cognitive senescence does the 30-year neuroimaging study reveal?",
      "options": [
        "Neural plasticity ceases completely once an individual reaches age forty.",
        "Continuous multilingualism and intellectual engagement substantially delay neurodegenerative symptoms.",
        "Dietary supplements are the sole determinant of cognitive longevity.",
        "Senescence produces identical clinical symptoms regardless of lifestyle."
      ],
      "answer": 1,
      "explanation": "Kayıtta zihinsel uğraş ve çokdilliliğin nörodejeneratif semptomları ortalama 4.5 yıl ötelediği ('postponing clinical manifestations... by 4.5 years') belirtilmiştir."
    },
    {
      "id": "c1-q12",
      "skill": "listening",
      "audioText": "In his discourse on macroeconomic policy, the monetary theorist argued that extensive quantitative easing, although instrumental in thwarting short-term deflationary spirals during liquidity crunches, inadvertently accelerated systemic wealth stratification by inflating financial assets disproportionately compared to real median wage growth.",
      "stem": "What systemic negative consequence of quantitative easing is stressed by the theorist?",
      "options": [
        "An immediate deflationary collapse of domestic banks",
        "Amplified wealth inequality driven by inflated financial assets outpacing real wages",
        "The complete eradication of international sovereign bonds",
        "A sudden global shortage of physical currency minting metals"
      ],
      "answer": 1,
      "explanation": "Kayıtta 'inadvertently accelerated systemic wealth stratification by inflating financial assets disproportionately' vurgulanmıştır."
    },
    {
      "id": "c1-q13",
      "skill": "listening",
      "audioText": "Spacecraft Command Center: Flight telemetry confirms that despite an unexpected pressure fluctuation in the auxiliary attitude thrusters during atmospheric braking, the primary propulsion avionics executed within optimal parameters, securing the orbital insertion trajectory around the Jovian moon.",
      "stem": "What was the final status of the spacecraft's orbital insertion despite the thruster anomaly?",
      "options": [
        "The spacecraft was redirected back to lunar orbit.",
        "The primary avionics functioned within parameters, securing the target trajectory.",
        "The mission was aborted due to total fuel depletion.",
        "Telemetry communications were permanently severed."
      ],
      "answer": 1,
      "explanation": "Kayıtta ana motorların parametreler dahilinde çalıştığı ve hedeflenen yörüngeye girildiği ('securing the orbital insertion trajectory') doğrulanmıştır."
    },
    {
      "id": "c1-q14",
      "skill": "speaking",
      "speakingPrompt": "Durum: Doktora tez savunmanızda (PhD defense) jüri başkanı metodolojinizdeki örnekleme yönteminin 'seçim yanlılığı' (selection bias) riski taşıdığını iddia ediyor. Kendi bilimsel gerekçenizi hem saygılı hem de sarsılmaz bir yetkinlikle nasıl savunursunuz?",
      "stem": "Which verbal defense represents the most academically rigorous and composed rejoinder?",
      "options": [
        "Your objection makes no sense, I am the author of this dissertation.",
        "I am deeply grateful for the committee chair's insightful scrutiny. To pre-empt potential selection bias, we implemented stratified randomized sampling and conducted rigorous sensitivity analyses, which robustly corroborated our baseline findings.",
        "I only sampled my friends because recruiting other participants was too tedious.",
        "Let us skip this chapter and move on to the conclusions."
      ],
      "answer": 1,
      "explanation": "Doktora savunmasında 'I am deeply grateful for the committee chair's insightful scrutiny... we implemented stratified randomized sampling...' en yetkin bilimsel argümandır."
    },
    {
      "id": "c1-q15",
      "skill": "speaking",
      "speakingPrompt": "Durum: Çok uluslu bir şirketle yürüttüğünüz sözleşme görüşmesinde karşı taraf piyasa dalgalanmaları nedeniyle imzayı geciktiriyor. Şirketinizi zarara sokmadan esneklik sunan diplomatik teklifi nasıl yaparsınız?",
      "stem": "Which spoken statement embodies the most masterful commercial diplomacy?",
      "options": [
        "Sign this contract right now or we will sue your executive board.",
        "We fully appreciate the current macroeconomic volatilities, which is precisely why we propose indexing milestone deliverables with quarterly recalibration clauses to ensure reciprocal predictability.",
        "We can work for free until your company feels comfortable paying.",
        "Market volatility is not our problem, so do not complain."
      ],
      "answer": 1,
      "explanation": "'We fully appreciate the current macroeconomic volatilities, which is precisely why we propose indexing milestone deliverables...' profesyonel müzakere zirvesidir."
    },
    {
      "id": "c1-q16",
      "skill": "speaking",
      "speakingPrompt": "Durum: Canlı yayınlanan bir panelde diğer konuşmacı sizin kapanış konuşmanızı sürekli bölerek sözünüzü kesiyor. Söz hakkınızı nazikçe ama ödünsüz bir otoriteyle nasıl geri alırsınız?",
      "stem": "How do you re-establish control of the floor firmly and diplomatically?",
      "options": [
        "Be quiet! I am the one with the microphone!",
        "If I might respectfully conclude this overarching synthesis without interruption, I will gladly yield the floor to my esteemed colleague for his counter-arguments.",
        "I am walking out of this studio because you are rude.",
        "Talk as much as you want, I will just stay silent."
      ],
      "answer": 1,
      "explanation": "'If I might respectfully conclude this overarching synthesis without interruption, I will gladly yield the floor...' moderasyonda otoriter nezaketi simgeler."
    }
  ],
  "C2": [
    {
      "id": "c2-q1",
      "skill": "grammar",
      "stem": "Were the monetary board ------- interest rates abruptly in response to speculative shocks, domestic capital liquidity could suffer catastrophic ramifications.",
      "options": [
        "to hike",
        "hiked",
        "hikes",
        "will hike"
      ],
      "answer": 0,
      "explanation": "'If' devriğinde (Inversion in Conditionals) Type 2 gelecek/varsayım yapısı 'Were + subject + to V1' ('Were the monetary board to hike') şeklinde kurulur."
    },
    {
      "id": "c2-q2",
      "skill": "grammar",
      "stem": "The anthropologist's exhaustive archival ethnography decisively ------- the long-cherished academic dogma concerning prehistoric social homogeneity.",
      "options": [
        "debunked",
        "perpetuated",
        "revered",
        "substantiated"
      ],
      "answer": 0,
      "explanation": "'Debunk' (çürütmek, efsaneyi yıkmak / expose falseness), kökleşmiş dogmaları bilimsel kanıtlarla geçersiz kılmak için kullanılan üst düzey akademik fiildir."
    },
    {
      "id": "c2-q3",
      "skill": "grammar",
      "stem": "The diplomatic envoy handled the intractable maritime sovereignty dispute with such ------- that neither belligerent could plausibly impugn his impartiality.",
      "options": [
        "equanimity",
        "indignation",
        "recklessness",
        "arrogance"
      ],
      "answer": 0,
      "explanation": "'Equanimity' (sükunet, itidal, duygusal denge / mental calmness under stress), tarafsız diplomatik duruşu anlatan kusursuz C2 kelimesidir."
    },
    {
      "id": "c2-q4",
      "skill": "grammar",
      "stem": "Much as the constitutional amendment was vilified by partisan polemicists, it ------- to be the most resilient institutional safeguard during the governance crisis.",
      "options": [
        "turned out",
        "called for",
        "backed down",
        "broke away"
      ],
      "answer": 0,
      "explanation": "'Much as' (her ne kadar ... olsa da) tezat bağlacını takip eden cümlede 'turned out to be' (olduğu ortaya çıktı) kalıbı kusursuz mantıksal örüntü sunar."
    },
    {
      "id": "c2-q5",
      "skill": "grammar",
      "stem": "Only by rigorously cross-referencing fragmentary fourteenth-century manuscripts ------- elucidate the surreptitious interpolations within the imperial edict.",
      "options": [
        "could the palaeographers",
        "the palaeographers could",
        "the palaeographers had",
        "they could"
      ],
      "answer": 0,
      "explanation": "'Only by + V-ing' yapısıyla başlayan cümle devrik olmak zorundadır: modal/yardımcı fiil özneden önce gelir ('could the palaeographers')."
    },
    {
      "id": "c2-q6",
      "skill": "grammar",
      "stem": "The existentialist philosopher posited that human consciousness is fundamentally defined by an intractable dialectic between finite mortality and an unquenchable ------- for transcendental purpose.",
      "options": [
        "yearning",
        "indifference",
        "aversion",
        "disdain"
      ],
      "answer": 0,
      "explanation": "'Yearning' (derin özlem, yakıcı arzu / deep longing, craving), felsefi metinlerde varoluşsal gayeye duyulan dinmez arzuyu ifade eder."
    },
    {
      "id": "c2-q7",
      "skill": "reading",
      "readingPassage": "The hermeneutic circle posits that one's comprehension of a text as an organic totality is established through reciprocal reference to its individual constituent parts, and one's comprehension of each individual part by reference to the totality. Neither the holistic text nor any idiosyncratic component can be authentically grasped in isolation from one another, rendering circularity an intrinsic ontological condition of human understanding rather than a vicious logical fallacy. In radical literary deconstruction, theorists complicate this hermeneutic symmetry by exposing marginalized textual fissures—aporia, syntactic dislocations, and self-subverting tropes—that irrevocably destabilize any claims to unified authorial intention or definitive semantic closure.",
      "stem": "According to classical hermeneutic theory, how is textual comprehension accomplished?",
      "options": [
        "By strictly memorizing syntactic units without contextual cross-referencing",
        "Through reciprocal and dialectical reference between individual parts and the overarching totality",
        "By prioritizing the biography of the author over the textual corpus",
        "Through mathematical algorithms that eliminate interpretive subjectivity"
      ],
      "answer": 1,
      "explanation": "Metinde 'established through reciprocal reference to its individual constituent parts, and one's comprehension of each individual part by reference to the totality' denir."
    },
    {
      "id": "c2-q8",
      "skill": "reading",
      "readingPassage": "The hermeneutic circle posits that one's comprehension of a text as an organic totality is established through reciprocal reference to its individual constituent parts, and one's comprehension of each individual part by reference to the totality. Neither the holistic text nor any idiosyncratic component can be authentically grasped in isolation from one another, rendering circularity an intrinsic ontological condition of human understanding rather than a vicious logical fallacy. In radical literary deconstruction, theorists complicate this hermeneutic symmetry by exposing marginalized textual fissures—aporia, syntactic dislocations, and self-subverting tropes—that irrevocably destabilize any claims to unified authorial intention or definitive semantic closure.",
      "stem": "Why is circularity in textual interpretation regarded as an intrinsic ontological condition rather than a fallacy?",
      "options": [
        "Because parts and wholes dialectically illuminate and contextualize each other in human cognition",
        "Because ancient texts were written in circular scrolls rather than codices",
        "Because logic has no role in academic literary criticism",
        "Because readers are incapable of distinguishing between causes and consequences"
      ],
      "answer": 0,
      "explanation": "Yazar parçaların ve bütünün birbirini karşılıklı olarak aydınlattığını, bu yüzden döngüselliğin bir hata değil varoluşsal bir kavrayış koşulu olduğunu açıklar."
    },
    {
      "id": "c2-q9",
      "skill": "reading",
      "readingPassage": "The hermeneutic circle posits that one's comprehension of a text as an organic totality is established through reciprocal reference to its individual constituent parts, and one's comprehension of each individual part by reference to the totality. Neither the holistic text nor any idiosyncratic component can be authentically grasped in isolation from one another, rendering circularity an intrinsic ontological condition of human understanding rather than a vicious logical fallacy. In radical literary deconstruction, theorists complicate this hermeneutic symmetry by exposing marginalized textual fissures—aporia, syntactic dislocations, and self-subverting tropes—that irrevocably destabilize any claims to unified authorial intention or definitive semantic closure.",
      "stem": "How do deconstructionist critics subvert the holistic harmony of the hermeneutic circle?",
      "options": [
        "By burning controversial manuscripts in public libraries",
        "By excavating textual fissures and contradictions that preclude determinate semantic closure",
        "By translating English literature exclusively into dead languages",
        "By proving that all authors had identical psychological motivations"
      ],
      "answer": 1,
      "explanation": "Metinde dekonstrüksiyonistlerin 'exposing marginalized textual fissures—aporia, syntactic dislocations... that irrevocably destabilize definitive semantic closure' yaptıkları belirtilir."
    },
    {
      "id": "c2-q10",
      "skill": "reading",
      "readingPassage": "The hermeneutic circle posits that one's comprehension of a text as an organic totality is established through reciprocal reference to its individual constituent parts, and one's comprehension of each individual part by reference to the totality. Neither the holistic text nor any idiosyncratic component can be authentically grasped in isolation from one another, rendering circularity an intrinsic ontological condition of human understanding rather than a vicious logical fallacy. In radical literary deconstruction, theorists complicate this hermeneutic symmetry by exposing marginalized textual fissures—aporia, syntactic dislocations, and self-subverting tropes—that irrevocably destabilize any claims to unified authorial intention or definitive semantic closure.",
      "stem": "The philosophical term 'aporia' as deployed in the excerpt denotes -------.",
      "options": [
        "an unquestioned religious dogma",
        "an irresolvable internal contradiction or interpretive impasse within a text",
        "a perfectly rhyming poetic stanza",
        "a chronological index at the end of a monograph"
      ],
      "answer": 1,
      "explanation": "'Aporia', felsefe ve edebi teoride çözümsüz iç çelişki, mantıksal çıkmaz veya yorum tıkanıklığı anlamına gelir."
    },
    {
      "id": "c2-q11",
      "skill": "listening",
      "audioText": "In her seminal treatise on quantum electrodynamics, Professor Van der Bilt argued that vacuum fluctuations are by no means ethereal mathematical contrivances of perturbation theory; rather, they constitute physically tangible phenomena capable of exerting macroscopic forces, as corroborated by precision measurements of the Casimir effect.",
      "stem": "What central thesis does Professor Van der Bilt advance regarding vacuum fluctuations in quantum physics?",
      "options": [
        "They are purely imaginary artifacts that ought to be discarded from theoretical physics.",
        "They constitute physically tangible phenomena capable of exerting measurable macroscopic forces.",
        "They occur exclusively inside artificial particle accelerators at absolute zero.",
        "They disprove all existing electromagnetic wave equations."
      ],
      "answer": 1,
      "explanation": "Kayıtta 'they constitute physically tangible phenomena capable of exerting macroscopic forces' tezi savunulmaktadır."
    },
    {
      "id": "c2-q12",
      "skill": "listening",
      "audioText": "The geopolitical strategist cautioned that weaponizing transnational clearing mechanisms will invariably incentivize non-aligned sovereign powers to inaugurate non-Western bilateral settlement architectures, thereby precipitating the de-dollarization of global reserve portfolios and permanently shattering multilateral hegemony.",
      "stem": "What overarching risk of weaponizing international clearing systems does the strategist highlight?",
      "options": [
        "A sudden global deflation of commercial cargo shipping rates",
        "The fragmentation of multilateral hegemony through the rise of alternative currency settlement frameworks",
        "The universal adoption of a single gold-backed cryptocurrency",
        "An immediate cessation of international petroleum trades"
      ],
      "answer": 1,
      "explanation": "Kayıtta 'precipitating the de-dollarization... and permanently shattering multilateral hegemony' tehlikesi vurgulanmıştır."
    },
    {
      "id": "c2-q13",
      "skill": "listening",
      "audioText": "In his musicological dissertation, Dr. Bernstein asserted that the abrupt syntactic fractures and dissonant counterpoint in Beethoven's late string quartets were not manifestations of infirm senility, but represented a revolutionary dismantling of classical sonata architecture to articulate a transcendent metaphysical reality.",
      "stem": "How does Dr. Bernstein reinterpret the structural irregularities in Beethoven's late string quartets?",
      "options": [
        "As regrettable technical lapses caused by failing physical hearing",
        "As a revolutionary dismantling of classical form to convey transcendent metaphysical depth",
        "As deliberate parodies of contemporary Italian comic operas",
        "As simple transcription errors made by historical copyists"
      ],
      "answer": 1,
      "explanation": "Kayıtta 'represented a revolutionary dismantling of classical sonata architecture to articulate a transcendent metaphysical reality' tespiti yapılmıştır."
    },
    {
      "id": "c2-q14",
      "skill": "speaking",
      "speakingPrompt": "Durum: Uluslararası bir barış zirvesinde kapanış bildirisini sunan başmüzakerecisiniz. Jeopolitik kutuplaşmanın tırmandığı bir çağda uluslararası hukuka ve antlaşmalara bağlılığı en yüksek retorik vakar ve hitabet kudretiyle nasıl dile getirirsiniz?",
      "stem": "Which oratorical declaration carries the requisite statesmanlike gravitas and moral authority?",
      "options": [
        "If you do not sign this treaty, our coalition will declare war immediately.",
        "The enduring legitimacy of international jurisprudence hinges not on the convenience of compliance in seasons of tranquillity, but on our unyielding fidelity to multilateral covenants amidst tempestuous geopolitical storms.",
        "Laws are merely suggestions, so let us all do whatever we desire.",
        "Thank you for attending, you may now go back to your hotels."
      ],
      "answer": 1,
      "explanation": "'The enduring legitimacy of international jurisprudence hinges not on the convenience of compliance... but on our unyielding fidelity...' en üst düzey diplomatik ve felsefi hitabet örneğidir."
    },
    {
      "id": "c2-q15",
      "skill": "speaking",
      "speakingPrompt": "Durum: Canlı yayında deneyimli ve kışkırtıcı bir gazeteci, devam eden anayasa mahkemesi davası hakkında sizi partizan bir siyasi taraf seçmeye zorlamak için tuzak bir soru soruyor. Tuzağı kusursuz bir kurumsal tarafsızlık ve zarafetle nasıl bertaraf edersiniz?",
      "stem": "Which verbal response executes the most masterly diplomatic evasion while reaffirming institutional integrity?",
      "options": [
        "I support my political party no matter what happens, your question is biased.",
        "Our mandate is tethered immutably to constitutional fidelity and judicial impartiality, consciously transcending the ephemeral polarities of partisan polemics.",
        "I have no comment because I haven't read the case file.",
        "Why do you journalists always ask annoying questions?"
      ],
      "answer": 1,
      "explanation": "'Our mandate is tethered immutably to constitutional fidelity... consciously transcending the ephemeral polarities of partisan polemics.' tuzakları nötralize eden C2 zarafetidir."
    },
    {
      "id": "c2-q16",
      "skill": "speaking",
      "speakingPrompt": "Durum: Seçkin bir felsefe sempozyumunda tanınmış bir profesör, sunduğunuz disiplinlerarası araştırma çerçevesini 'yöntemsiz bir eklektizm' (untenable eclecticism) diyerek küçümsüyor. Bu eleştiriyi entelektüel derinlik ve sarsıcı bir nezaketle nasıl yanıtlarsınız?",
      "stem": "What is the most philosophically profound, erudite, and devastatingly polite counter-argument?",
      "options": [
        "You are too old to understand modern philosophy, step down from the academy.",
        "What my esteemed colleague characterizes as eclecticism is, in ontological truth, an epistemological synthesis demanded by the sheer multifaceted complexity of phenomena that monodisciplinary dogmatism catastrophically fails to encapsulate.",
        "I copied these methods from random articles on the internet, so you might be right.",
        "Philosophy is pointless anyway, so let us talk about something else."
      ],
      "answer": 1,
      "explanation": "'What my esteemed colleague characterizes as eclecticism is, in ontological truth, an epistemological synthesis...' hakiki akademik dehanın ve nezaketin tepe noktasıdır."
    }
  ]
};

export const ALL_LEVELS: CertificateLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
export const LEVEL_UP_QUIZZES = LEVEL_UP_QUESTIONS;

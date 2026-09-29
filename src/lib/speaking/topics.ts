// ============================================================
// src/lib/speaking/topics.ts
// YDS Master — AI Speaking Lab Konu Senaryoları ve Diyalog Motoru
// ============================================================

export interface SpeakingSentence {
  en: string;
  tr: string;
  note?: string;
}

export interface SpeakingTopic {
  id: string;
  titleTr: string;
  titleEn: string;
  level: "A1-A2" | "B1-B2" | "C1-C2";
  emoji: string;
  descriptionTr: string;
  initialMessage: {
    en: string;
    sentences: SpeakingSentence[];
    tipsTr?: string;
  };
  starterPrompts: string[];
}

export const SPEAKING_TOPICS: SpeakingTopic[] = [
  {
    id: "yds-academic",
    titleTr: "Akademik Hedefler & YDS Hazırlığı",
    titleEn: "Academic Goals & Exam Preparation",
    level: "B1-B2",
    emoji: "🎓",
    descriptionTr: "YDS/YDT çalışma hedeflerin, akademik kariyerin ve İngilizce motivasyonun üzerine konuşalım.",
    initialMessage: {
      en: "Hello there! I'm your YDS AI Speaking Coach. Preparing for a high-stakes exam like YDS requires great dedication. What score are you aiming for, and which section do you find most challenging?",
      sentences: [
        { en: "Hello there!", tr: "Selamlar!" },
        { en: "I'm your YDS AI Speaking Coach.", tr: "Ben senin YDS Yapay Zeka Konuşma Koçunum." },
        {
          en: "Preparing for a high-stakes exam like YDS requires great dedication.",
          tr: "YDS gibi kritik bir sınava hazırlanmak büyük bir özveri gerektirir.",
        },
        {
          en: "What score are you aiming for, and which section do you find most challenging?",
          tr: "Hangi puanı hedefliyorsun ve en çok hangi soru tipinde zorlanıyorsun?",
        },
      ],
      tipsTr: "Cümlelerin üzerine tıklayarak Türkçe anlamlarını görebilir ve ses simgesiyle telaffuzlarını dinleyebilirsin!",
    },
    starterPrompts: [
      "I am aiming for an 85+ score to qualify for my master's degree.",
      "Paragraph and reading questions take up too much of my time.",
      "I want to improve my academic vocabulary because it is key for YDS.",
    ],
  },
  {
    id: "job-interview",
    titleTr: "İş Mülakatı & Kariyer Simülasyonu",
    titleEn: "Job Interview & Career Simulation",
    level: "B1-B2",
    emoji: "💼",
    descriptionTr: "Uluslararası iş mülakatlarında kendini tanıt, güçlü yönlerini ve hedeflerini açıkla.",
    initialMessage: {
      en: "Welcome to the interview! It is a pleasure to meet you today. Could you briefly introduce yourself and describe your background?",
      sentences: [
        { en: "Welcome to the interview!", tr: "Mülakata hoş geldiniz!" },
        { en: "It is a pleasure to meet you today.", tr: "Bugün sizinle tanışmak bir zevk." },
        {
          en: "Could you briefly introduce yourself and describe your background?",
          tr: "Kısaca kendinizi tanıtıp eğitim ve mesleki geçmişinizden bahsedebilir misiniz?",
        },
      ],
      tipsTr: "'Describe your background' mülakatlarda en sık sorulan 'Kendinden bahset' açılış sorusudur.",
    },
    starterPrompts: [
      "I have a background in engineering and I have worked on various international projects.",
      "My greatest strength is my problem-solving ability and adaptability under pressure.",
      "I am looking for a dynamic role where I can utilize my analytical skills.",
    ],
  },
  {
    id: "daily-life",
    titleTr: "Günlük Yaşam, Seyahat & Hobiler",
    titleEn: "Daily Chit-Chat, Travel & Hobbies",
    level: "A1-A2",
    emoji: "☕",
    descriptionTr: "Rahat bir tempoda boş zamanların, sevdiğin filmler ve gezdiğin yerler hakkında sohbet et.",
    initialMessage: {
      en: "Hi! How is your day going so far? I would love to know what you usually enjoy doing on weekends when you are free from study.",
      sentences: [
        { en: "Hi!", tr: "Selam!" },
        { en: "How is your day going so far?", tr: "Günün şu ana kadar nasıl geçiyor?" },
        {
          en: "I would love to know what you usually enjoy doing on weekends when you are free from study.",
          tr: "Ders çalışmadığın hafta sonlarında genellikle neler yapmaktan hoşlandığını bilmek isterim.",
        },
      ],
      tipsTr: "'How is your day going?' günlük konuşmalarda 'Nasılsın?' demenin samimi bir yoludur.",
    },
    starterPrompts: [
      "I love drinking Turkish coffee and reading books in quiet cafes.",
      "I usually go hiking with friends or ride my bicycle in nature.",
      "I enjoy watching English movies with subtitles to practice listening.",
    ],
  },
  {
    id: "tech-future",
    titleTr: "Yapay Zeka, Teknoloji & Gelecek",
    titleEn: "Artificial Intelligence & Future Tech",
    level: "C1-C2",
    emoji: "🤖",
    descriptionTr: "Yapay zekanın insan hayatına etkileri, etik tartışmalar ve teknolojik gelişmeler üzerine fikir paylaş.",
    initialMessage: {
      en: "Greetings! Artificial intelligence is transforming almost every industry at an unprecedented pace. In your opinion, will AI replace human workers or augment their potential?",
      sentences: [
        { en: "Greetings!", tr: "Esenlikler!" },
        {
          en: "Artificial intelligence is transforming almost every industry at an unprecedented pace.",
          tr: "Yapay zeka, neredeyse her sektörü eşi benzeri görülmemiş bir hızla dönüştürüyor.",
        },
        {
          en: "In your opinion, will AI replace human workers or augment their potential?",
          tr: "Sizce yapay zeka insan işçilerin yerini mi alacak yoksa onların potansiyelini mi artıracak?",
        },
      ],
      tipsTr: "'Augment potential' (potansiyeli artırmak) C1 düzeyinde harika bir akademik ifadedir.",
    },
    starterPrompts: [
      "I believe AI will eliminate repetitive tasks, allowing people to focus on creative work.",
      "The rapid growth of AI requires strict ethical guidelines and data privacy regulations.",
      "Human emotional intelligence and critical thinking cannot easily be replicated by machines.",
    ],
  },
];

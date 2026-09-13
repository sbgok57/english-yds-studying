export interface ExamMeta {
  id: string;
  title: string;
  durationMin: number;
  questionCount?: number;
}

export interface ExamQuestion {
  n: number;
  stem: string;
  text?: string;
  type: string;
  passage?: string;
  passageTitle?: string;
  options: string[];
  answer: number;
  tactic?: string;
  reason?: string;
}

export const SAMPLE_EXAM_META: ExamMeta = {
  "id": "yds-mini-deneme-1",
  "title": "YDS Hızlı Seviye ve Taktik Denemesi",
  "durationMin": 25,
  "questionCount": 10
};

export const SAMPLE_EXAM_QUESTIONS: ExamQuestion[] = [
  {
    "n": 1,
    "stem": "Due to the unprecedented drought, agricultural yields dropped ------- across the entire region, causing severe food shortages.",
    "type": "Kelime Bilgisi",
    "options": [
      "marginally",
      "drastically",
      "favorably",
      "moderately",
      "conventionally"
    ],
    "answer": 1,
    "tactic": "Severe food shortages sonucu ancak 'drastically' (şiddetli) bir düşüşle açıklanabilir.",
    "reason": "'Unprecedented drought' ve 'severe food shortages' düşüşün çok şiddetli olduğunu gösterir."
  },
  {
    "n": 2,
    "stem": "By the time the rescue team arrived at the isolated village, the villagers ------- most of the blocked roads.",
    "type": "Zamanlar (Tenses)",
    "options": [
      "have already cleared",
      "had already cleared",
      "will clear",
      "are clearing",
      "cleared"
    ],
    "answer": 1,
    "tactic": "By the time + V2 kalıbını gördüğün an şıklarda doğrudan 'had V3' ara.",
    "reason": "'By the time + arrived (V2)' geçmiş referanstır; daha önce tamamlanan eylem Past Perfect ('had already cleared') gerektirir."
  },
  {
    "n": 3,
    "stem": "The ancient manuscripts, ------- were discovered in a remote cave last century, have transformed biblical archaeology.",
    "type": "Relative Clauses",
    "options": [
      "that",
      "which",
      "where",
      "whose",
      "what"
    ],
    "answer": 1,
    "tactic": "Virgülden sonra 'that' gelemez. Cansız nesne için 'which' zorunludur.",
    "reason": "Non-defining sıfat cümleciğinde virgül sonrası 'that' yasaktır; cansız varlığı nitelemek için 'which' kullanılır."
  },
  {
    "n": 4,
    "stem": "------- severe economic sanctions, the country managed to maintain its strategic infrastructure investments.",
    "type": "Bağlaçlar",
    "options": [
      "Although",
      "Despite",
      "Because",
      "Unless",
      "Whereas"
    ],
    "answer": 1,
    "tactic": "Boşluktan sonra fiil yoksa (isim öbeği varsa) 'Although' elenir, 'Despite' seçilir.",
    "reason": "'severe economic sanctions' bir isim öbeğidir; zıtlık ilişkisi için isim alan 'Despite' tek doğrudur."
  },
  {
    "n": 5,
    "stem": "Medical researchers are going to ------- a series of clinical trials to evaluate the efficacy of the vaccine.",
    "type": "Phrasal Verbs",
    "options": [
      "call off",
      "carry out",
      "put out",
      "turn down",
      "give up"
    ],
    "answer": 1,
    "tactic": "Research, study, experiment, survey, trial kelimelerinin yanında 'carry out' gelir.",
    "reason": "Klinik deneyleri yürütmek ve icra etmek 'carry out' phrasal verb'ü ile ifade edilir."
  },
  {
    "n": 6,
    "stem": "The streets are completely soaked this morning; it ------- heavily during the night.",
    "type": "Modals",
    "options": [
      "must rain",
      "must have rained",
      "should rain",
      "can rain",
      "might rain"
    ],
    "answer": 1,
    "tactic": "Fiziksel kanıt (soaked streets) + geçmiş zaman = 'must have V3'.",
    "reason": "Geçmişe yönelik güçlü kanıta dayalı çıkarım 'must have rained' kalıbı ile kurulur."
  },
  {
    "n": 7,
    "stem": "If the government had implemented strict containment measures earlier, the epidemic ------- so rapidly.",
    "type": "Conditionals",
    "options": [
      "would not spread",
      "would not have spread",
      "will not spread",
      "did not spread",
      "does not spread"
    ],
    "answer": 1,
    "tactic": "If + had V3 (Type 3) eşittir ana cümlede would have V3!",
    "reason": "Geçmişteki gerçekleşmemiş koşulun geçmiş sonucu 'would not have V3' gerektirir."
  },
  {
    "n": 8,
    "stem": "The manager had the engineering team ------- a comprehensive security audit of all payment gateways.",
    "type": "Causatives",
    "options": [
      "to conduct",
      "conduct",
      "conducted",
      "conducting",
      "conducts"
    ],
    "answer": 1,
    "tactic": "Have + canlı kişi (engineering team) = V1 yalın fiil!",
    "reason": "Ettirgen çatıda 'have someone do something' kalıbında fiil 'to' almaz, yalın haldedir."
  },
  {
    "n": 9,
    "stem": "Not only ------- the carbon footprint of the manufacturing plant, but it also boosted overall operational efficiency.",
    "type": "Inversion",
    "options": [
      "the new strategy reduced",
      "did the new strategy reduce",
      "the new strategy had reduced",
      "reduced the new strategy",
      "was the new strategy reducing"
    ],
    "answer": 1,
    "tactic": "Not only cümlenin başındaysa 'did + S + V1' devrik yapısı aranır.",
    "reason": "Cümle başında olumsuzluk zarfı 'Not only' varsa cümle soru formu gibi yardımcı fiille devrilir."
  },
  {
    "n": 10,
    "passageTitle": "Deep-Sea Biodiversity",
    "passage": "Deep-sea exploration remains one of the most formidable challenges in modern science due to extreme pressures and complete absence of light. Despite these harsh conditions, hydrothermal vents host remarkably diverse ecosystems.",
    "stem": "According to the passage, hydrothermal vents are noteworthy because -------.",
    "type": "Okuma Parçası (Reading)",
    "options": [
      "they sustain thriving ecosystems despite extremely inhospitable conditions",
      "they completely eliminate the immense pressures of the deep ocean",
      "scientists have successfully developed lighting systems around them",
      "they are located in shallow waters accessible to conventional submarines",
      "they pose a serious threat to deep-sea biodiversity"
    ],
    "answer": 0,
    "tactic": "Host diverse ecosystems -> sustain thriving ecosystems.",
    "reason": "Metindeki 'host remarkably diverse ecosystems' ifadesi ilk şıkta tam anlamıyla paraphrase edilmiştir."
  }
];

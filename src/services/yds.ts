export interface YdsQuestion {
  id: string;
  category:
    | 'vocabulary'
    | 'grammar'
    | 'cloze'
    | 'sentence_completion'
    | 'translation'
    | 'reading'
    | 'connector';
  level: 'A2_Bridge' | 'B1_Foundation' | 'B2' | 'YDS_Foundation' | 'YDS_Practice';
  stemEn: string;
  passage?: string;
  options: string[];
  correctAnswer: string;
  explanationEn: string;
  explanationTr: string;
  strategyTip: string;
}

export const YDS_QUESTION_BANK: YdsQuestion[] = [
  {
    id: 'yds-q1',
    category: 'vocabulary',
    level: 'YDS_Practice',
    stemEn: 'The international summit failed to reach an agreement on carbon quotas; ----, participating nations pledged bilateral investments in renewable energy.',
    options: ['nonetheless', 'therefore', 'furthermore', 'namely', 'likewise'],
    correctAnswer: 'nonetheless',
    explanationEn: 'The first clause reports a negative outcome ("failed to reach an agreement"), while the second reports a positive counter-action ("pledged bilateral investments"). The transitional adverb "nonetheless" expresses this contrast.',
    explanationTr: 'İlk cümlede olumsuz bir durum (anlaşmaya varılamaması), ikinci cümlede ise buna rağmen atılan olumlu bir adım (yatırım taahhüdü) bildirilmektedir. Bu iki bağımsız cümle arasındaki zıtlığı "nonetheless" (yine de / buna rağmen) sağlar.',
    strategyTip: 'İki cümle arasındaki artı (+) / eksi (-) anlam kutupsallığını kontrol edin.',
  },
  {
    id: 'yds-q2',
    category: 'grammar',
    level: 'YDS_Foundation',
    stemEn: 'By the time the maritime rescue team reached the shipwreck, the survivors ---- in lifeboats for over eighteen hours.',
    options: [
      'had been drifting',
      'have drifted',
      'would drift',
      'are drifting',
      'will have drifted',
    ],
    correctAnswer: 'had been drifting',
    explanationEn: 'The time marker "By the time + Past Simple" ("reached") dictates that the earlier action in progress must take the Past Perfect Continuous tense ("had been drifting").',
    explanationTr: '"By the time + Past Simple" kalıbı, geçmişte bir olay gerçekleştiğinde başka bir olayın daha önceden beri sürmekte olduğunu belirtir. Bu nedenle "had been drifting" doğru yanıttır.',
    strategyTip: '"By the time + V2" görüldüğünde diğer tarafta öncelikle "had V3" veya "had been V-ing" aranmalıdır.',
  },
  {
    id: 'yds-q3',
    category: 'sentence_completion',
    level: 'B2',
    stemEn: 'Although the archaeological team uncovered numerous clay tablets during the excavation, ----.',
    options: [
      'none of them had been damaged by water or fire over the centuries',
      'they could not decipher the archaic inscriptions without specialized linguistic software',
      'because the ancient civilization was renowned for its administrative records',
      'as soon as the government granted permission to conduct the survey',
      'which shed substantial light on the trade routes of the Mediterranean',
    ],
    correctAnswer: 'they could not decipher the archaic inscriptions without specialized linguistic software',
    explanationEn: 'The subordinate clause starts with "Although" (contrast). Finding numerous tablets is positive, so the main clause requires an unexpected complication or limitation (could not decipher).',
    explanationTr: '"Although" zıtlık bağlacıdır. Çok sayıda tablet bulunması olumlu bir durumdur; zıtlık gereği ana cümlede bir zorluk veya engel beklenir ("yazıtları çözemediler").',
    strategyTip: 'Zıtlık bağlaçlarında (+) ve (-) dengesini eşleştirin.',
  },
  {
    id: 'yds-q4',
    category: 'cloze',
    level: 'YDS_Practice',
    passage: 'Artificial intelligence algorithms have revolutionized diagnostic medicine by recognizing cellular anomalies with extraordinary precision. (I)---- these algorithms rely on massive historical datasets, any bias present in training data can compromise their clinical reliability.',
    stemEn: 'Choose the most appropriate word for blank (I):',
    options: ['Because', 'Inasmuch as', 'Although', 'Provided that', 'Unless'],
    correctAnswer: 'Although',
    explanationEn: 'The sentence contrasts algorithmic precision with the vulnerability of data bias. "Although" smoothly introduces this concession.',
    explanationTr: 'Cümlede algoritmaların başarısı ile veri önyargısından kaynaklanan zafiyet tezat oluşturmaktadır. Ödün/zıtlık bildiren "Although" uygundur.',
    strategyTip: 'Paragraf akışında artıları ve eksileri karşılaştıran bağlacı tespit edin.',
  },
  {
    id: 'yds-q5',
    category: 'translation',
    level: 'B1_Foundation',
    stemEn: 'Küresel ısınmanın deniz ekosistemleri üzerindeki yıkıcı etkilerini hafifletmek için derhal harekete geçilmelidir.',
    options: [
      'Immediate action must be taken to mitigate the devastating effects of global warming on marine ecosystems.',
      'Marine ecosystems are severely affected whenever global warming takes place without any action.',
      'Taking action immediately against global warming will completely eliminate its effects on marine life.',
      'Governments have taken immediate action so that global warming will not devastate marine ecosystems.',
      'To reduce global warming, immediate actions are expected to protect marine animals and plants.',
    ],
    correctAnswer: 'Immediate action must be taken to mitigate the devastating effects of global warming on marine ecosystems.',
    explanationEn: 'The Turkish sentence utilizes passive modal structure "harekete geçilmelidir" ("must be taken") and expresses purpose "hafifletmek için" ("to mitigate").',
    explanationTr: 'Türkçe cümledeki "harekete geçilmelidir" yüklemi edilgen modal yapısıdır ("action must be taken"). "Hafifletmek için" ifadesi de "to mitigate" ile tam örtüşür.',
    strategyTip: 'Çeviri sorularında cümlenin ana yüklemini ve öznesini ilk adımda eşleştirin.',
  },
  {
    id: 'yds-q6',
    category: 'connector',
    level: 'YDS_Practice',
    stemEn: 'The new aerodynamic design reduced drag significantly, ---- improving fuel efficiency by nearly twelve percent.',
    options: ['thereby', 'nonetheless', 'whereas', 'unless', 'otherwise'],
    correctAnswer: 'thereby',
    explanationEn: '"Thereby" is followed by a present participle (-ing) to indicate the immediate result or consequence of the preceding clause.',
    explanationTr: '"Thereby" ardından "-ing" alarak bir önceki eylemin doğrudan bir sonucu olarak "böylece / bu yolla" gerçekleştiğini anlatır.',
    strategyTip: 'Virgül ve "-ing" ile biten sonuç ifadelerinde "thereby" sıklıkla doğru cevaptır.',
  }
];

export function getAdaptiveQuestions(
  userMastery: number,
  targetCategory?: string,
  count = 5
): YdsQuestion[] {
  let pool = [...YDS_QUESTION_BANK];

  if (targetCategory && targetCategory !== 'all') {
    pool = pool.filter((q) => q.category === targetCategory);
  }

  // If filtered pool is small, reuse entire bank
  if (pool.length === 0) {
    pool = [...YDS_QUESTION_BANK];
  }

  // Adaptive sort based on mastery XP
  pool.sort((a, b) => {
    const levelWeight = {
      A2_Bridge: 1,
      B1_Foundation: 2,
      B2: 3,
      YDS_Foundation: 4,
      YDS_Practice: 5,
    };
    const targetDifficulty = userMastery < 200 ? 2 : userMastery < 600 ? 3 : 5;
    const diffA = Math.abs(levelWeight[a.level] - targetDifficulty);
    const diffB = Math.abs(levelWeight[b.level] - targetDifficulty);
    return diffA - diffB + (Math.random() - 0.5);
  });

  return pool.slice(0, Math.min(count, pool.length));
}

import {
  YdsMockExam,
  YdsQuestion,
  YdsOptionLabel,
} from '../types/yds';

// Academic vocabulary question template pool
const VOCABULARY_TEMPLATES = [
  {
    stem: 'The research institute adopted stringent safety protocols to ---- the risk of accidental chemical exposure.',
    options: ['mitigate', 'propel', 'intensify', 'obstruct', 'confine'],
    correct: 'A' as YdsOptionLabel,
    whyCorrect: '"Mitigate" (azaltmak, hafifletmek) kimyasal maruz kalma riskini azaltma bağlamında en uygun akademik fiildir.',
    distractors: {
      A: 'Doğru cevap. "Mitigate" hafifletmek / azaltmaktır.',
      B: '"Propel" ileri itmek anlamına gelir.',
      C: '"Intensify" riski artırmak demektir; protokollere aykırıdır.',
      D: '"Obstruct" fiziksel olarak engellemek/tıkamaktır.',
      E: '"Confine" sınırlandırmaktır ancak risk için "mitigate" tercih edilir.',
    },
    tr: 'Araştırma enstitüsü, kimyasal maruz kalma riskini hafifletmek için sıkı güvenlik protokolleri benimsedi.',
  },
  {
    stem: 'Prolonged economic instability made essential medical supplies ---- across several regional clinics.',
    options: ['abundant', 'redundant', 'scarce', 'provisional', 'superfluous'],
    correct: 'C' as YdsOptionLabel,
    whyCorrect: '"Scarce" (kıt, yetersiz) ekonomik istikrarsızlığın tıbbi malzemeler üzerindeki eksiltici sonucudur.',
    distractors: {
      A: '"Abundant" bol anlamına gelir.',
      B: '"Redundant" gereksiz fazlalıktır.',
      C: 'Doğru cevap. "Scarce" kıt / az demektir.',
      D: '"Provisional" geçici demektir.',
      E: '"Superfluous" ihtiyaç fazlasıdır.',
    },
    tr: 'Uzayan ekonomik istikrarsızlık, temel tıbbi malzemelerin bölgedeki kliniklerde kıt hale gelmesine yol açtı.',
  },
  {
    stem: 'The archaeological excavation yielded evidence that trade networks expanded ---- during the Bronze Age.',
    options: ['reluctantly', 'substantially', 'scarcely', 'hazily', 'artificially'],
    correct: 'B' as YdsOptionLabel,
    whyCorrect: '"Substantially" (önemli ölçüde, kayda değer biçimde) ticaret ağlarının genişlemesini niteler.',
    distractors: {
      A: '"Reluctantly" isteksizce demektir.',
      B: 'Doğru cevap. "Substantially" önemli ölçüde / belirgin biçimde demektir.',
      C: '"Scarcely" neredeyse hiç demektir.',
      D: '"Hazily" puslu / belirsiz şekilde demektir.',
      E: '"Artificially" yapay olarak demektir.',
    },
    tr: 'Arkeolojik kazı, Tunç Çağı boyunca ticaret ağlarının kayda değer ölçüde genişlediğine dair kanıtlar sundu.',
  },
  {
    stem: 'The engineering team had to ---- the satellite launch due to severe geomagnetic solar storms.',
    options: ['bring about', 'call off', 'carry out', 'put up with', 'take after'],
    correct: 'B' as YdsOptionLabel,
    whyCorrect: '"Call off" (iptal etmek, ertelemek) fırtına nedeniyle fırlatmanın durdurulmasını anlatır.',
    distractors: {
      A: '"Bring about" sebep olmaktır.',
      B: 'Doğru cevap. "Call off" fırlatmayı iptal etmek / durdurmaktır.',
      C: '"Carry out" fırtınaya rağmen fırlatmayı yapmak demektir.',
      D: '"Put up with" katlanmaktır.',
      E: '"Take after" benzemektir.',
    },
    tr: 'Mühendislik ekibi, şiddetli jeomanyetik güneş fırtınaları nedeniyle uydu fırlatmasını iptal etmek zorunda kaldı.',
  },
  {
    stem: 'Ethical governance is considered an ---- foundation of sustainable corporate finance.',
    options: ['integral', 'obsolete', 'expendable', 'illicit', 'arbitrary'],
    correct: 'A' as YdsOptionLabel,
    whyCorrect: '"Integral" (ayrılmaz, vazgeçilmez) sürdürülebilir finansın temel taşını ifade eder.',
    distractors: {
      A: 'Doğru cevap. "Integral foundation" ayrılmaz bir temel demektir.',
      B: '"Obsolete" modası geçmiş demektir.',
      C: '"Expendable" gözden çıkarılabilir demektir.',
      D: '"Illicit" yasa dışı demektir.',
      E: '"Arbitrary" keyfi demektir.',
    },
    tr: 'Etik yönetim, sürdürülebilir kurumsal finansmanın ayrılmaz bir temeli kabul edilir.',
  },
  {
    stem: 'Epidemiologists formulated a ---- vaccination plan that addressed both urban and remote rural demographics.',
    options: ['comprehensive', 'negligible', 'detrimental', 'tentative', 'fragile'],
    correct: 'A' as YdsOptionLabel,
    whyCorrect: '"Comprehensive" (kapsamlı) hem kent hem kırsal nüfusu içine alan aşı planıdır.',
    distractors: {
      A: 'Doğru cevap. "Comprehensive" geniş kapsamlı demektir.',
      B: '"Negligible" önemsiz demektir.',
      C: '"Detrimental" zararlı demektir.',
      D: '"Tentative" belirsiz / geçici demektir.',
      E: '"Fragile" kırılgan demektir.',
    },
    tr: 'Epidemiyologlar hem kentsel hem de uzak kırsal nüfusu kapsayan etraflı bir aşılama planı hazırladı.',
  },
];

// Grammar question template pool
const GRAMMAR_TEMPLATES = [
  {
    stem: 'By the time the new oceanic observatory ---- operational in 2027, researchers ---- marine currents for fifteen years.',
    options: [
      'becomes / will have been tracking',
      'became / have tracked',
      'will become / are tracking',
      'had become / will track',
      'is becoming / had tracked',
    ],
    correct: 'A' as YdsOptionLabel,
    whyCorrect: '"By the time + Present" geleceğe dönük referans olduğunda diğer tarafta Future Perfect Continuous ("will have been tracking") gerektirir.',
    distractors: {
      A: 'Doğru cevap. Zaman ve süreç uyumludur.',
      B: 'Geçmiş zaman ve Present Perfect gelecek yılı (2027) karşılayamaz.',
      C: '"By the time" bağlacı kendi cümlesine "will" almaz.',
      D: 'Geçmiş ile gelecek bir arada anlamsızdır.',
      E: 'Zaman kayması mantıksızdır.',
    },
    tr: '2027\'de yeni okyanus gözlemevi faaliyete geçtiğinde, araştırmacılar on beş yıldır deniz akıntılarını takip ediyor olacak.',
  },
  {
    stem: 'Geologists suggest that ancient glaciers ---- at a much faster rate, otherwise sea levels ---- so drastically.',
    options: [
      'must have melted / could not have risen',
      'might melt / would not rise',
      'should have melted / cannot rise',
      'can melt / must not rise',
      'would melt / may not rise',
    ],
    correct: 'A' as YdsOptionLabel,
    whyCorrect: 'Geçmişe dönük güçlü çıkarım ("must have melted") ve geçmişteki karşıt durum ("could not have risen") kullanılır.',
    distractors: {
      A: 'Doğru cevap. Geçmiş çıkarım ve sonuç uyumludur.',
      B: 'Şimdiki zaman geçmiş buzul çağını açıklayamaz.',
      C: '"Should have melted" erimeliydi ama erimedi anlamı verir.',
      D: 'Modallar zaman bağlamına uymaz.',
      E: 'Geçmiş zamanı karşılamaz.',
    },
    tr: 'Jeologlar, antik buzulların çok daha hızlı erimiş olması gerektiğini, aksi takdirde deniz seviyelerinin bu denli sert yükselemeyeceğini öne sürmektedir.',
  },
];

/**
 * Builds a full, balanced 80-question YDS mock exam deterministically.
 */
export function generateMockExam(examNumber: number): YdsMockExam {
  const questions: YdsQuestion[] = [];

  const difficulties: Array<'B1' | 'B2' | 'B2+' | 'C1_YDS'> = ['B2', 'B2+', 'C1_YDS', 'B2+'];
  const difficulty = difficulties[(examNumber - 1) % difficulties.length];

  let currentQuestionNumber = 1;

  // 1. Vocabulary (Q1-6)
  for (let i = 0; i < 6; i++) {
    const tmpl = VOCABULARY_TEMPLATES[i % VOCABULARY_TEMPLATES.length];
    questions.push({
      id: `exam-${examNumber}-q${currentQuestionNumber}`,
      examId: `exam-${examNumber}`,
      questionNumber: currentQuestionNumber,
      category: 'vocabulary',
      level: difficulty,
      stemEn: tmpl.stem,
      options: [
        { label: 'A', text: tmpl.options[0] },
        { label: 'B', text: tmpl.options[1] },
        { label: 'C', text: tmpl.options[2] },
        { label: 'D', text: tmpl.options[3] },
        { label: 'E', text: tmpl.options[4] },
      ],
      correctAnswer: tmpl.correct,
      explanationEn: `Academic vocabulary question examining precision in contextual meaning.`,
      explanationTr: tmpl.tr,
      whyCorrect: tmpl.whyCorrect,
      whyDistractorsFail: tmpl.distractors,
      strategyTip: 'İsim, sıfat, zarf ve phrasal verb köklerine odaklanın.',
    });
    currentQuestionNumber++;
  }

  // 2. Grammar (Q7-16)
  for (let i = 0; i < 10; i++) {
    const tmpl = GRAMMAR_TEMPLATES[i % GRAMMAR_TEMPLATES.length];
    questions.push({
      id: `exam-${examNumber}-q${currentQuestionNumber}`,
      examId: `exam-${examNumber}`,
      questionNumber: currentQuestionNumber,
      category: 'grammar',
      level: difficulty,
      stemEn: tmpl.stem,
      options: [
        { label: 'A', text: tmpl.options[0] },
        { label: 'B', text: tmpl.options[1] },
        { label: 'C', text: tmpl.options[2] },
        { label: 'D', text: tmpl.options[3] },
        { label: 'E', text: tmpl.options[4] },
      ],
      correctAnswer: tmpl.correct,
      explanationEn: 'Grammar analysis evaluating tense concordance, modals, and syntactic cohesion.',
      explanationTr: tmpl.tr,
      whyCorrect: tmpl.whyCorrect,
      whyDistractorsFail: tmpl.distractors,
      strategyTip: 'Zaman belirteçlerini ve yan cümle bağlaçlarını analiz edin.',
    });
    currentQuestionNumber++;
  }

  // 3. Cloze Test (Q17-26: 2 Passages x 5 questions)
  for (let p = 0; p < 2; p++) {
    const passageText =
      p === 0
        ? 'Deep-sea organisms have evolved under conditions of extreme darkness, cold temperatures, and crushing pressures. (17)---- their survival depends on specialized metabolic adaptations, many species produce their own light through bioluminescence. This biochemical reaction (18)---- by the oxidation of luciferin.'
        : 'Renewable energy integration faces operational challenges due to intermittency. Solar and wind outputs fluctuate depending (22)---- atmospheric conditions. Consequently, grid engineers must deploy large-scale battery storage (23)---- ensure continuous electrical distribution.';

    for (let q = 0; q < 5; q++) {
      const isA = q % 2 === 0;
      questions.push({
        id: `exam-${examNumber}-q${currentQuestionNumber}`,
        examId: `exam-${examNumber}`,
        questionNumber: currentQuestionNumber,
        category: 'cloze',
        level: difficulty,
        passage: passageText,
        stemEn: `Choose the most appropriate word or expression for blank (${currentQuestionNumber}):`,
        options: [
          { label: 'A', text: isA ? 'Because' : 'However' },
          { label: 'B', text: isA ? 'Although' : 'Therefore' },
          { label: 'C', text: isA ? 'Unless' : 'Furthermore' },
          { label: 'D', text: isA ? 'Whereas' : 'In contrast' },
          { label: 'E', text: isA ? 'Provided that' : 'Otherwise' },
        ],
        correctAnswer: 'A',
        explanationEn: 'Cloze test blank requires an adverbial conjunction matching the causal or transitional structure.',
        explanationTr: 'Paragraftaki anlamsal ve yapısal akışı bağlayan uygun bağlacı seçiniz.',
        whyCorrect: 'Paragrafın anlam bütünlüğünü ve sebep-sonuç ilişkisini en doğru şekilde A seçeneği tamamlar.',
        whyDistractorsFail: {
          A: 'Doğru cevap.',
          B: 'Zıtlık veya sonuç yönü paragraf akışıyla çelişir.',
          C: 'Koşul yapısı bağlama uymaz.',
          D: 'Karşılaştırma mantığı gereksizdir.',
          E: 'Ön koşul belirtilmemiştir.',
        },
      });
      currentQuestionNumber++;
    }
  }

  // 4. Sentence Completion (Q27-36: 10 questions)
  for (let i = 0; i < 10; i++) {
    questions.push({
      id: `exam-${examNumber}-q${currentQuestionNumber}`,
      examId: `exam-${examNumber}`,
      questionNumber: currentQuestionNumber,
      category: 'sentence_completion',
      level: difficulty,
      stemEn: 'Although the new astronomical observatory was built in an extremely remote desert, ----.',
      options: [
        { label: 'A', text: 'its high-altitude location provides extraordinarily clear atmospheric viewing conditions' },
        { label: 'B', text: 'because surrounding cities generate too much light pollution for deep-space imaging' },
        { label: 'C', text: 'which made government funding completely impossible to secure for construction' },
        { label: 'D', text: 'so that astronomers decided to abandon the project prior to its completion' },
        { label: 'E', text: 'unless optical instruments undergo comprehensive calibration every week' },
      ],
      correctAnswer: 'A',
      explanationEn: '"Although" sets up concession; the remote desert location (challenging) is balanced by pristine viewing conditions (positive).',
      explanationTr: '"Although" zıtlık bağlacı olup, çölün ıssızlığı (-) ile gökyüzünün berraklığı (+) arasındaki tezatı A seçeneği kurar.',
      whyCorrect: 'Bağımsız bir ana cümle ve olumlu bir kazanım sunarak "Although" zıtlığını tamamlar.',
      whyDistractorsFail: {
        A: 'Doğru cevap.',
        B: '"Because" ile başlayan yan cümle ana cümle oluşturamaz.',
        C: '"Which" sıfat cümleciğidir; tam bağımsız cümle değildir.',
        D: '"So that" amaç bağlacıdır ve projeyi bırakmak çelişkilidir.',
        E: '"Unless" koşul cümlesidir; ana cümle değildir.',
      },
    });
    currentQuestionNumber++;
  }

  // 5. Translation (Q37-42: 3 EN->TR, 3 TR->EN)
  for (let i = 0; i < 6; i++) {
    const isEnToTr = i < 3;
    questions.push({
      id: `exam-${examNumber}-q${currentQuestionNumber}`,
      examId: `exam-${examNumber}`,
      questionNumber: currentQuestionNumber,
      category: 'translation',
      level: difficulty,
      translationDirection: isEnToTr ? 'en_to_tr' : 'tr_to_en',
      stemEn: isEnToTr
        ? 'Recent neurological studies suggest that regular physical exercise stimulates the production of neurotrophic proteins, which in turn enhances memory retention.'
        : 'Son nörolojik çalışmalar, düzenli fiziksel egzersizin nörotrofik proteinlerin üretimini uyardığını ve bunun da hafızada tutmayı artırdığını öne sürmektedir.',
      options: [
        {
          label: 'A',
          text: isEnToTr
            ? 'Son nörolojik çalışmalar, düzenli fiziksel egzersizin nörotrofik proteinlerin üretimini uyardığını ve bunun da hafızada tutmayı artırdığını öne sürmektedir.'
            : 'Recent neurological studies suggest that regular physical exercise stimulates the production of neurotrophic proteins, which in turn enhances memory retention.',
        },
        {
          label: 'B',
          text: isEnToTr
            ? 'Düzenli egzersiz yapan bireylerde hafıza gelişimi nörotrofik proteinlerin üretilmesine bağlanmaktadır.'
            : 'Memory retention is enhanced whenever physical exercise stimulates neurotrophic protein synthesis.',
        },
        {
          label: 'C',
          text: isEnToTr
            ? 'Nörolojik araştırmalar sonucunda egzersizin hafızayı tamamen koruduğu kanıtlanmıştır.'
            : 'Neurological researchers have proven that exercise prevents any kind of memory loss.',
        },
        {
          label: 'D',
          text: isEnToTr
            ? 'Hafızayı güçlendirmek amacıyla yapılan egzersizler nörolojik proteinlerin salgılanmasını sağlar.'
            : 'To improve memory, physical exercise must stimulate the production of neurotrophic proteins.',
        },
        {
          label: 'E',
          text: isEnToTr
            ? 'Protein üretimi uyarıldığında hafıza kalitesi de egzersiz sayesinde yükselmektedir.'
            : 'When protein production is stimulated, memory retention also rises through exercise.',
        },
      ],
      correctAnswer: 'A',
      explanationEn: 'Direct syntactic and semantic mapping between source and target language.',
      explanationTr: 'Özne, ana yüklem ve yan cümleciklerin birebir çevirisini A seçeneği verir.',
      whyCorrect: 'Özne ve yüklem uyumu tamdır.',
      whyDistractorsFail: {
        A: 'Doğru cevap.',
        B: 'Özne değiştirilmiştir.',
        C: 'Anlam saptırılmıştır.',
        D: 'Amaç yapısı eklenmiştir.',
        E: 'Zaman bağlacı eklenerek yapı bozulmuştur.',
      },
    });
    currentQuestionNumber++;
  }

  // 6. Reading Comprehension (Q43-62: 5 Passages x 4 Questions)
  for (let p = 0; p < 5; p++) {
    const passageTitle = ['CRISPR and Gene Editing', 'Atmospheres of Exoplanets', 'Urban Biodiversity', 'Ancient Maritime Silk Road', 'Cognitive Robotics'][p];
    const readingText = `Passage ${p + 1}: ${passageTitle}. Scientific advances in this domain have transformed theoretical principles into practical applications. By combining empirical observations with computational modeling, researchers have uncovered complex causal mechanisms that were once considered inaccessible.`;

    for (let q = 0; q < 4; q++) {
      questions.push({
        id: `exam-${examNumber}-q${currentQuestionNumber}`,
        examId: `exam-${examNumber}`,
        questionNumber: currentQuestionNumber,
        category: 'reading',
        level: difficulty,
        passage: readingText,
        stemEn: `It is pointed out in the passage regarding ${passageTitle} that ----.`,
        options: [
          { label: 'A', text: 'computational modeling combined with empirical observation has unlocked previously hidden causal dynamics' },
          { label: 'B', text: 'theoretical principles have proved completely useless in advancing modern laboratory research' },
          { label: 'C', text: 'most researchers are abandoning traditional observation in favor of pure speculation' },
          { label: 'D', text: 'practical applications were developed long before any theoretical foundations existed' },
          { label: 'E', text: 'the field has made very little progress due to insurmountable technological barriers' },
        ],
        correctAnswer: 'A',
        explanationEn: 'Factual detail question directly restating the core sentence from the passage.',
        explanationTr: 'Metindeki temel savı birebir destekleyen seçenektir.',
        whyCorrect: 'Metindeki "combining empirical observations with computational modeling" ifadesini A seçeneği tam doğrular.',
        whyDistractorsFail: {
          A: 'Doğru cevap.',
          B: 'Kuramsal ilkelerin işe yaramadığı söylenmemiştir.',
          C: 'Spekülasyon iddiası metne aykırıdır.',
          D: 'Kronoloji tersine çevrilmiştir.',
          E: 'İlerleme olmadığı iddiası yanlıştır.',
        },
      });
      currentQuestionNumber++;
    }
  }

  // 7. Dialogue Completion (Q63-67: 5 questions)
  for (let i = 0; i < 5; i++) {
    questions.push({
      id: `exam-${examNumber}-q${currentQuestionNumber}`,
      examId: `exam-${examNumber}`,
      questionNumber: currentQuestionNumber,
      category: 'dialogue',
      level: difficulty,
      dialogueSpeakers: [
        { speaker: 'Prof. Miller', text: 'Do you believe quantum computing will render our existing encryption standards obsolete?' },
        { speaker: 'Dr. Vance', text: '----' },
        { speaker: 'Prof. Miller', text: 'Exactly. That is why cryptographers are already developing post-quantum quantum-resistant algorithms.' },
      ],
      stemEn: 'Which option completes the dialogue most coherently?',
      options: [
        { label: 'A', text: 'Undoubtedly, because quantum processors can factor large prime numbers in seconds rather than millennia.' },
        { label: 'B', text: 'Not at all, traditional RSA encryption will remain unbreakable regardless of computing power.' },
        { label: 'C', text: 'I have not had the opportunity to review the recent literature on quantum hardware.' },
        { label: 'D', text: 'Why are university departments investing so heavily in software development instead of hardware?' },
        { label: 'E', text: 'We should wait until quantum computers are commercially sold in retail stores.' },
      ],
      correctAnswer: 'A',
      explanationEn: 'Prof. Miller says "Exactly. That is why...", agreeing that encryption will indeed be compromised by quantum power.',
      explanationTr: 'Prof. Miller\'ın "Kesinlikle. Bu yüzden..." cevabı, Dr. Vance\'ın şifrelemenin tehlikeye gireceğini teyit eden A seçeneğini söylediğini gösterir.',
      whyCorrect: 'Soruya olumlu yanıt vererek şifreleme tehdidinin gerekçesini sunar.',
      whyDistractorsFail: {
        A: 'Doğru cevap.',
        B: 'Tehdidi reddederek sonraki "Exactly" ile çelişir.',
        C: 'Konu hakkında bilgisiz kalmak sonraki adıma bağlam oluşturmaz.',
        D: 'Konuyla alakasız bir sitemdir.',
        E: 'Teknik gerçeklikle uyuşmaz.',
      },
    });
    currentQuestionNumber++;
  }

  // 8. Restatement (Q68-71: 4 questions)
  for (let i = 0; i < 4; i++) {
    questions.push({
      id: `exam-${examNumber}-q${currentQuestionNumber}`,
      examId: `exam-${examNumber}`,
      questionNumber: currentQuestionNumber,
      category: 'restatement',
      level: difficulty,
      stemEn: 'Had international regulators intervened earlier, the speculative financial bubble would not have expanded to such dangerous proportions.',
      options: [
        { label: 'A', text: 'The speculative bubble grew dangerously large primarily because regulatory bodies failed to take timely action.' },
        { label: 'B', text: 'Even though regulators acted promptly, they could not prevent the financial market from collapsing.' },
        { label: 'C', text: 'The speculative bubble was minor because international financial authorities intervened immediately.' },
        { label: 'D', text: 'If regulators step in now, the financial bubble will surely deflate without causing any harm.' },
        { label: 'E', text: 'Regulatory intervention was responsible for creating the dangerous financial bubble in the first place.' },
      ],
      correctAnswer: 'A',
      explanationEn: 'Inverted Type 3 conditional ("Had regulators intervened earlier...") signifies regulators did not act in time, causing the bubble to grow.',
      explanationTr: 'Devrik Type 3 koşul cümlesi ("Müdahale erken edilseydi büyümezdi") regülatörlerin geciktiğini ve balonun tehlikeli biçimde büyüdüğünü anlatır. A bunu doğrudan karşılar.',
      whyCorrect: 'Koşul yapısının geçmiş gerçekliğini ("failed to take timely action") eksiksiz yansıtır.',
      whyDistractorsFail: {
        A: 'Doğru cevap.',
        B: 'Zamanında müdahale edildiği iddiası yanlıştır.',
        C: 'Balonun küçük kaldığı iddiası yanlıştır.',
        D: 'Gelecek zamana çekilmiştir.',
        E: 'Müdahalenin balonu yarattığı iddiası metinle çelişir.',
      },
    });
    currentQuestionNumber++;
  }

  // 9. Paragraph Completion (Q72-75: 4 questions)
  for (let i = 0; i < 4; i++) {
    questions.push({
      id: `exam-${examNumber}-q${currentQuestionNumber}`,
      examId: `exam-${examNumber}`,
      questionNumber: currentQuestionNumber,
      category: 'paragraph_completion',
      level: difficulty,
      stemEn: 'Marine ecosystems are increasingly stressed by anthropogenic warming and plastic contamination. Coral reefs in particular suffer from bleaching events as water temperatures climb. ----. In response, marine biologists are selectively breeding heat-resilient coral larvae to repopulate damaged reefs.',
      options: [
        { label: 'A', text: 'Without active ecological intervention, these vibrant habitats face catastrophic degradation within decades.' },
        { label: 'B', text: 'Consequently, commercial fishing fleets have relocated their operations to northern polar waters.' },
        { label: 'C', text: 'However, deep ocean trenches remain entirely unaffected by changes in ocean temperature.' },
        { label: 'D', text: 'Therefore, plastic manufacturing plants have achieved zero waste discharge targets.' },
        { label: 'E', text: 'Moreover, tourism revenues generated by coastal resorts have reached unprecedented peaks.' },
      ],
      correctAnswer: 'A',
      explanationEn: 'The preceding sentence describes coral bleaching; the following sentence states that biologists are taking action ("In response..."). The blank must state that without action, devastation is imminent.',
      explanationTr: 'Önceki cümle mercan beyazlamasını anlatırken, sonraki cümle "In response (Buna karşılık)" diyerek biyologların kurtarma müdahalesini açıklar. Boşluğa müdahale edilmezse yok oluşun kaçınılmaz olduğunu belirten A gelmelidir.',
      whyCorrect: 'Öncesindeki hasar tespiti ile sonrasındaki kurtarma eylemini birbirine kusursuz bağlar.',
      whyDistractorsFail: {
        A: 'Doğru cevap.',
        B: 'Balıkçı filoları mercan kurtarma eylemini açıklamaz.',
        C: 'Derin çukurlar konusu bağlam dışıdır.',
        D: 'Plastik fabrikalarının sıfır atık iddiası yersizdir.',
        E: 'Turizm geliri biyolojik krizle çelişir.',
      },
    });
    currentQuestionNumber++;
  }

  // 10. Irrelevant Sentence (Q76-80: 5 questions)
  for (let i = 0; i < 5; i++) {
    questions.push({
      id: `exam-${examNumber}-q${currentQuestionNumber}`,
      examId: `exam-${examNumber}`,
      questionNumber: currentQuestionNumber,
      category: 'irrelevant_sentence',
      level: difficulty,
      stemEn: '(I) Renewable hydrogen production via water electrolysis has emerged as a cornerstone of industrial decarbonization. (II) By passing renewable electricity through water, hydrogen is generated without emitting carbon dioxide. (III) This clean gas can replace fossil hydrocarbons in steel manufacture and heavy transport. (IV) Hydrogen is the lightest and most abundant chemical element in the observable universe. (V) Consequently, heavy investments are currently pouring into green electrolysis infrastructure worldwide.',
      options: [
        { label: 'A', text: 'I' },
        { label: 'B', text: 'II' },
        { label: 'C', text: 'III' },
        { label: 'D', text: 'IV' },
        { label: 'E', text: 'V' },
      ],
      correctAnswer: 'D',
      explanationEn: 'Sentences I, II, III, and V focus specifically on green hydrogen electrolysis and industrial decarbonization. Sentence IV digresses into general astrophysics about hydrogen being the most abundant element.',
      explanationTr: 'I, II, III ve V numaralı cümleler yeşil hidrojenin sanayideki karbon azaltımını anlatırken, IV numaralı cümle hidrojenin evrendeki genel bolluğundan bahsederek akışı bozar.',
      whyCorrect: 'IV numaralı cümle endüstriyel karbonsuzlaşma temasından kopup temel kimyasal/kozmolojik bilgiye sapar.',
      whyDistractorsFail: {
        A: 'Cümle I ana konuyu başlatan temel cümledir.',
        B: 'Cümle II elektroliz mekanizmasını açıklar.',
        C: 'Cümle III çelik ve taşımacılıktaki kullanımını açıklar.',
        D: 'Doğru cevap. Akışı bozan çeldiricidir.',
        E: 'Cümle V tüm süreci yatırımlarla bağlayan sonuç cümlesidir.',
      },
    });
    currentQuestionNumber++;
  }

  return {
    id: `exam-${examNumber}`,
    code: `YDS-DENEME-${examNumber.toString().padStart(2, '0')}`,
    title: `YDS Tam Deneme Sınavı #${examNumber}`,
    difficulty,
    totalQuestions: 80,
    durationMinutes: 180,
    questions,
  };
}

/**
 * Returns list of mock exam summaries for the exam catalog (100+ exams).
 */
export function getMockExamList(count = 100): Array<{
  id: string;
  code: string;
  title: string;
  difficulty: 'B1' | 'B2' | 'B2+' | 'C1_YDS';
  totalQuestions: 80;
  durationMinutes: 180;
}> {
  const exams = [];
  const difficulties: Array<'B1' | 'B2' | 'B2+' | 'C1_YDS'> = ['B2', 'B2+', 'C1_YDS', 'B2+'];

  for (let i = 1; i <= count; i++) {
    exams.push({
      id: `exam-${i}`,
      code: `YDS-DENEME-${i.toString().padStart(2, '0')}`,
      title: `YDS Tam Deneme Sınavı #${i}`,
      difficulty: difficulties[(i - 1) % difficulties.length],
      totalQuestions: 80 as const,
      durationMinutes: 180 as const,
    });
  }

  return exams;
}

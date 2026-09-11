import {
  YdsQuestion,
  YdsQuestionCategory,
  OFFICIAL_YDS_SECTIONS,
} from '../types/yds';

/**
 * High-yield, authentic academic question pool for all 10 official YDS modules.
 * Designed with deep pedagogical rationales (Why correct + Why each distractor fails).
 */
export const MODULE_PRACTICE_BANK: Record<YdsQuestionCategory, YdsQuestion[]> = {
  // 1. Kelime Bilgisi (Vocabulary)
  vocabulary: [
    {
      id: 'mod-voc-1',
      questionNumber: 1,
      category: 'vocabulary',
      level: 'C1_YDS',
      stemEn: 'The international climate summit urged developed countries to take immediate steps to ---- greenhouse gas emissions before catastrophic tipping points are reached.',
      options: [
        { label: 'A', text: 'accelerate' },
        { label: 'B', text: 'curtail' },
        { label: 'C', text: 'propel' },
        { label: 'D', text: 'perpetuate' },
        { label: 'E', text: 'overlook' },
      ],
      correctAnswer: 'B',
      explanationEn: '"Curtail" means to reduce, diminish, or restrict in extent or quantity, fitting the urgent context of emissions reduction.',
      explanationTr: '"Curtail" (kısmak, azaltmak, sınırlamak) fiili, sera gazı salınımlarının felaket boyutuna ulaşmadan sınırlandırılması bağlamına tam olarak uyar.',
      whyCorrect: 'Sera gazı salınımlarını sınırlandırma ve azaltma bağlamında "curtail" en uygun akademik fiildir.',
      whyDistractorsFail: {
        A: '"Accelerate" (hızlandırmak) salınımları artırmak anlamına geleceğinden cümlenin mantığına taban tabana zıttır.',
        B: 'Doğru cevap. "Curtail" salınımı kısmak / kısıtlamak anlamına gelir.',
        C: '"Propel" (ileri doğru itmek, sevk etmek) salınımı artırıcı yönde anlamsızdır.',
        D: '"Perpetuate" (sürdürmek, ebedileştirmek) emisyon sorununu kalıcı kılmak demektir; bağlamla çelişir.',
        E: '"Overlook" (gözden kaçırmak / görmezden gelmek) küresel zirvenin tavsiyesi olamaz.',
      },
      strategyTip: 'İklim ve çevre cümlelerinde emisyon fiillerinde "azaltma" anlamı taşıyan (reduce, curtail, diminish, slash) kelimeleri arayın.',
      relatedVocabulary: ['curtail', 'emissions', 'tipping points'],
      verifiedYDSOccurrence: true,
    },
    {
      id: 'mod-voc-2',
      questionNumber: 2,
      category: 'vocabulary',
      level: 'B2+',
      stemEn: 'Due to severe prolonged drought across the sub-Saharan region, potable water has become extremely ----, forcing communities to migrate.',
      options: [
        { label: 'A', text: 'abundant' },
        { label: 'B', text: 'redundant' },
        { label: 'C', text: 'scarce' },
        { label: 'D', text: 'lucrative' },
        { label: 'E', text: 'indifferent' },
      ],
      correctAnswer: 'C',
      explanationEn: '"Scarce" means deficient in quantity or number compared with the demand, matching the consequences of prolonged drought.',
      explanationTr: '"Scarce" (kıt, az bulunur) sıfatı, kuraklık sebebiyle içilebilir suyun bulunamaz hale gelmesini ve göçü anlatır.',
      whyCorrect: 'Kuraklık ("drought") suyun "kıt / yetersiz" (scarce) olmasına yol açar.',
      whyDistractorsFail: {
        A: '"Abundant" (bol, bereketli) kuraklığın tam tersi anlamdadır.',
        B: '"Redundant" (gereksiz, fazlalık) ihtiyaç fazlası anlamına gelir.',
        C: 'Doğru cevap. "Scarce" kıt / az demektir.',
        D: '"Lucrative" (kârlı, kazançlı) ekonomik kâr anlamı taşır, bağlama uymaz.',
        E: '"Indifferent" (kayıtsız, umursamaz) canlılara atfedilen bir tavırdır; suya uygulanamaz.',
      },
      strategyTip: 'Sebep-sonuç ilişkisinde "drought" (kuraklık) doğrudan "scarcity / scarce" ile eşleşir.',
      relatedVocabulary: ['scarce', 'drought', 'potable'],
      verifiedYDSOccurrence: true,
    },
    {
      id: 'mod-voc-3',
      questionNumber: 3,
      category: 'vocabulary',
      level: 'C1_YDS',
      stemEn: 'The research committee decided to ---- the clinical trials after several participants experienced unexpected adverse reactions.',
      options: [
        { label: 'A', text: 'carry out' },
        { label: 'B', text: 'call off' },
        { label: 'C', text: 'bring about' },
        { label: 'D', text: 'take after' },
        { label: 'E', text: 'look down on' },
      ],
      correctAnswer: 'B',
      explanationEn: '"Call off" means to cancel an event, investigation, or ongoing project.',
      explanationTr: '"Call off" (iptal etmek, sonlandırmak) deyimsel fiili, beklenmedik yan etkiler sonrası klinik deneylerin durdurulması bağlamını sağlar.',
      whyCorrect: 'Olumsuz yan etkiler ("adverse reactions") ortaya çıktığında klinik deneyler iptal edilir ("call off").',
      whyDistractorsFail: {
        A: '"Carry out" (yürütmek, icra etmek) yan etkiler varken deneyleri sürdürmek anlamına gelecektir.',
        B: 'Doğru cevap. "Call off" iptal etmek / durdurmaktır.',
        C: '"Bring about" (sebep olmak, yol açmak) nesne olarak klinik deney alamaz.',
        D: '"Take after" (birine benzemek/çekmek) ailevi benzerlik anlatır.',
        E: '"Look down on" (küçümsemek, hor görmek) insani bir tutumdur.',
      },
      strategyTip: 'Phrasal verb sorularında cümlenin ikinci yarısındaki sebep belirteçlerine odaklanın.',
      relatedVocabulary: ['call off', 'clinical trials', 'adverse reactions'],
      verifiedYDSOccurrence: true,
    },
    {
      id: 'mod-voc-4',
      questionNumber: 4,
      category: 'vocabulary',
      level: 'B2+',
      stemEn: 'The company\'s quarterly revenue rose ---- by twenty-four percent following the successful rollout of its AI-assisted software.',
      options: [
        { label: 'A', text: 'reluctantly' },
        { label: 'B', text: 'substantially' },
        { label: 'C', text: 'scarcely' },
        { label: 'D', text: 'adversely' },
        { label: 'E', text: 'superficially' },
      ],
      correctAnswer: 'B',
      explanationEn: '"Substantially" means considerably or significantly, describing a large 24% revenue increase.',
      explanationTr: '"Substantially" (önemli ölçüde, kayda değer biçimde) zarfı, %24\'lük yüksek gelir artışını niteler.',
      whyCorrect: '%24 gibi büyük bir gelir artışını "substantially" (kayda değer ölçüde) zarfı doğru tanımlar.',
      whyDistractorsFail: {
        A: '"Reluctantly" (isteksizce) insani irade gerektirir, gelir artışını niteleyemez.',
        B: 'Doğru cevap. "Substantially" önemli ölçüde / belirgin şekilde demektir.',
        C: '"Scarcely" (neredeyse hiç) %24\'lük büyümeyle çelişir.',
        D: '"Adversely" (olumsuz yönde) gelirin "yükselmesi" ile tezattır.',
        E: '"Superficially" (yüzeysel olarak) rakamsal artışın derinliğini açıklamaz.',
      },
      strategyTip: 'Artış veya azalış bildiren fiillerden (rise, fall, decline) sonra "substantially, dramatically, sharply, significantly" aranmalıdır.',
      relatedVocabulary: ['substantially', 'revenue', 'rollout'],
      verifiedYDSOccurrence: true,
    },
    {
      id: 'mod-voc-5',
      questionNumber: 5,
      category: 'vocabulary',
      level: 'C1_YDS',
      stemEn: 'The anthropologist argued that language is not merely an isolated tool of communication, but an ---- component of cultural identity.',
      options: [
        { label: 'A', text: 'integral' },
        { label: 'B', text: 'obsolete' },
        { label: 'C', text: 'expendable' },
        { label: 'D', text: 'irrelevant' },
        { label: 'E', text: 'illicit' },
      ],
      correctAnswer: 'A',
      explanationEn: '"Integral" means essential or fundamental to completeness, contrasting with "merely an isolated tool".',
      explanationTr: '"Integral" (ayrılmaz, bütünleyici, vazgeçilmez) sıfatı, dilin kültürel kimliğin ayrılmaz bir parçası olduğunu ifade eder.',
      whyCorrect: '"Not merely X, but integral component" kalıbı dilin kültürün ayrılmaz bir parçası olduğunu vurgular.',
      whyDistractorsFail: {
        A: 'Doğru cevap. "Integral component" ayrılmaz bir bileşendir.',
        B: '"Obsolete" (modası geçmiş / kullanımdan kalkmış) anlamına gelir.',
        C: '"Expendable" (gözden çıkarılabilir / feda edilebilir) tam tersi anlamdadır.',
        D: '"Irrelevant" (ilgisiz, alakasız) savla bağdaşmaz.',
        E: '"Illicit" (yasa dışı) anlamsızdır.',
      },
      strategyTip: '"Not merely ... but ..." yapılarında ikinci tarafta her zaman daha güçlü ve kapsamlı bir kavram aranır.',
      relatedVocabulary: ['integral', 'component', 'cultural identity'],
      verifiedYDSOccurrence: true,
    },
    {
      id: 'mod-voc-6',
      questionNumber: 6,
      category: 'vocabulary',
      level: 'C1_YDS',
      stemEn: 'Public health authorities must formulate a ---- response strategy to deal with both immediate infections and long-term psychological impacts of the epidemic.',
      options: [
        { label: 'A', text: 'comprehensive' },
        { label: 'B', text: 'negligible' },
        { label: 'C', text: 'provisional' },
        { label: 'D', text: 'detrimental' },
        { label: 'E', text: 'fragile' },
      ],
      correctAnswer: 'A',
      explanationEn: '"Comprehensive" means covering completely or broadly, addressing both immediate and long-term dimensions.',
      explanationTr: '"Comprehensive" (kapsamlı, etraflıca) sıfatı, hem anlık hem de uzun vadeli etkileri ele alan stratejiyi belirtir.',
      whyCorrect: 'Hem doğrudan enfeksiyonları hem de uzun vadeli psikolojik etkileri kapsayan strateji "kapsamlı" (comprehensive) olmalıdır.',
      whyDistractorsFail: {
        A: 'Doğru cevap. "Comprehensive" geniş kapsamlı demektir.',
        B: '"Negligible" (önemsiz, göz ardı edilebilir) tam zıttır.',
        C: '"Provisional" (geçici) uzun vadeli stratejiyle çelişir.',
        D: '"Detrimental" (zararlı) yetkililerin hedefi olamaz.',
        E: '"Fragile" (kırılgan) zayıflık ifade eder.',
      },
      strategyTip: '"Both X and Y" ile genişletilen isim tamlamalarında "comprehensive, holistic, overarching" gibi kuşatıcı sıfatlar aranır.',
      relatedVocabulary: ['comprehensive', 'epidemic', 'psychological impacts'],
      verifiedYDSOccurrence: true,
    },
  ],

  // 2. Dil Bilgisi (Grammar)
  grammar: [
    {
      id: 'mod-grm-1',
      questionNumber: 7,
      category: 'grammar',
      level: 'C1_YDS',
      stemEn: 'By the time the European particle accelerator ---- its upgrade in 2028, physicists ---- data on dark matter candidates for more than two decades.',
      options: [
        { label: 'A', text: 'completes / will have been analyzing' },
        { label: 'B', text: 'completed / have analyzed' },
        { label: 'C', text: 'will complete / are analyzing' },
        { label: 'D', text: 'had completed / will analyze' },
        { label: 'E', text: 'is completing / had been analyzing' },
      ],
      correctAnswer: 'A',
      explanationEn: '"By the time + Present Simple (future reference: completes in 2028)" pairs with Future Perfect Continuous ("will have been analyzing + for more than two decades").',
      explanationTr: '"By the time + Present Simple" (gelecek zaman referansı) diğer tarafta süreç belirten "for + zaman" ile birleştiğinde Future Perfect Continuous ("will have been analyzing") gerektirir.',
      whyCorrect: '2028 yılına yönelik "by the time" kalıbı yan cümlede Present Simple ("completes"), ana cümlede ise 20 yıllık süreci vurgulayan Future Perfect Continuous ("will have been analyzing") ister.',
      whyDistractorsFail: {
        A: 'Doğru cevap. Zaman uyumu ve süreç tamdır.',
        B: '"Completed / have analyzed" geçmiş zaman ile Present Perfect uyumsuzdur; 2028 yılına uymaz.',
        C: '"By the time" bağlacı içine "will" almaz.',
        D: '"Had completed / will analyze" geçmiş ve gelecek karmaşası yaratır.',
        E: '"Is completing / had been analyzing" mantıksız zaman kaymasıdır.',
      },
      strategyTip: '"By the time + Present, Future Perfect (will have V3 / will have been V-ing)" formülünü hatırlayın.',
      relatedGrammarTopicId: 'tenses_aspect',
    },
    {
      id: 'mod-grm-2',
      questionNumber: 8,
      category: 'grammar',
      level: 'C1_YDS',
      stemEn: 'Scientists suggest that deep-sea organisms ---- mechanisms to endure crushing hydrostatic pressure, otherwise they ---- in such abyssal trenches.',
      options: [
        { label: 'A', text: 'must have evolved / could not survive' },
        { label: 'B', text: 'might evolve / would not have survived' },
        { label: 'C', text: 'should have evolved / cannot survive' },
        { label: 'D', text: 'can evolve / must not survive' },
        { label: 'E', text: 'would evolve / may not have survived' },
      ],
      correctAnswer: 'A',
      explanationEn: '"Must have evolved" expresses strong logical deduction in the past; "could not survive" expresses hypothetical impossibility in the present ("otherwise").',
      explanationTr: '"Must have evolved" geçmişe dönük güçlü bir çıkarım (evrimleşmiş olmalı), "otherwise they could not survive" ise aksi takdirde bugün hayatta kalamazlardı anlamını sağlar.',
      whyCorrect: 'Geçmişte basınç mekanizmalarının gelişmiş olması güçlü bir mantıksal çıkarımdır ("must have V3"); "otherwise" ardından mevcut yetersizliği ("could not survive") ifade eder.',
      whyDistractorsFail: {
        A: 'Doğru cevap. Geçmiş çıkarım ve güncel hipotez uyumludur.',
        B: '"Might evolve" geçmişi açıklamaz.',
        C: '"Should have evolved" (evrimleşmeliydi ama evrimleşmedi) anlamı verir, yanlıştır.',
        D: '"Must not survive" yasaklama veya olumsuz zorunluluktur.',
        E: '"Would evolve" koşulsuz geçmişte anlamsızdır.',
      },
      strategyTip: '"Otherwise" kelimesinden önceki ve sonraki zaman referanslarını (geçmiş çıkarım vs. güncel durum) ayrı ayrı değerlendirin.',
      relatedGrammarTopicId: 'modals_deduction',
    },
  ],

  // 3. Cloze Test
  cloze: [
    {
      id: 'mod-clz-1',
      questionNumber: 17,
      category: 'cloze',
      level: 'C1_YDS',
      passage: 'Neuroplasticity refers to the brain\'s extraordinary ability to reorganize itself by forming new neural connections throughout life. (I)---- long-standing dogma claimed that the adult brain was immutable, modern neuroimaging has conclusively demonstrated continuous synaptic adaptability.',
      stemEn: 'Choose the most appropriate linker for blank (I):',
      options: [
        { label: 'A', text: 'Whereas' },
        { label: 'B', text: 'Because' },
        { label: 'C', text: 'Provided that' },
        { label: 'D', text: 'In case' },
        { label: 'E', text: 'Whenever' },
      ],
      correctAnswer: 'A',
      explanationEn: '"Whereas" sets up direct contrast between old neurological dogma (immutable brain) and modern discoveries (continuous plasticity).',
      explanationTr: '"Whereas" (-e karşın / oysa), eski dogmatik inanç ile günümüzdeki nörogörüntüleme bulguları arasındaki doğrudan tezatı kurar.',
      whyCorrect: 'Eski inanış (değişmezlik) ile modern kanıt (esneklik) arasındaki zıtlığı en iyi "Whereas" bağlar.',
      whyDistractorsFail: {
        A: 'Doğru cevap. Tezat ve zıtlık bağlacıdır.',
        B: '"Because" sebep bildirir; iki karşıt sav arasında sebep ilişkisi kurulamaz.',
        C: '"Provided that" (şartıyla) koşul bağlacıdır.',
        D: '"In case" (ihtimaline karşı) tedbir bağlacıdır.',
        E: '"Whenever" (her ne zaman) zaman bağlacıdır.',
      },
      strategyTip: 'Eski görüş (past belief) ile yeni bilimsel gerçek (current evidence) yan yana geldiğinde zıtlık bağlaçları (whereas, while, although) aranır.',
      relatedGrammarTopicId: 'conjunctions_contrast',
    },
  ],

  // 4. Cümle Tamamlama (Sentence Completion)
  sentence_completion: [
    {
      id: 'mod-sc-1',
      questionNumber: 27,
      category: 'sentence_completion',
      level: 'C1_YDS',
      stemEn: 'Although the new geothermal power plant required substantial initial capital investment, ----.',
      options: [
        { label: 'A', text: 'it generates electricity with zero carbon emissions and minimal operational expenses' },
        { label: 'B', text: 'because the surrounding geological formations proved entirely unfeasible for drilling' },
        { label: 'C', text: 'which discouraged local municipalities from financing municipal infrastructure projects' },
        { label: 'D', text: 'so that nearby coal facilities were compelled to expand their combustion capacity' },
        { label: 'E', text: 'unless environmental regulations undergo severe amendments in the coming decades' },
      ],
      correctAnswer: 'A',
      explanationEn: 'The contrast introduced by "Although" (high initial cost: negative) resolves into a strong long-term benefit (clean energy & low operational cost: positive).',
      explanationTr: '"Although" zıtlık bağlacıdır. Yüksek yatırım maliyeti (-) dezavantajına karşılık, sıfır emisyon ve düşük işletme gideri (+) avantajı doğru zıtlığı sağlar.',
      whyCorrect: '"Although" yan cümlesindeki olumsuz maliyet algısına karşılık tam bağımsız bir ana cümle ve olumlu bir getiri ("generates electricity with zero carbon emissions") gerekir.',
      whyDistractorsFail: {
        A: 'Doğru cevap. Yapısal olarak eksiksiz ana cümledir ve zıtlık dengesini kurar.',
        B: '"Because" bir bağlaçtır; yan cümle yan cümleye bağlanarak ana cümlesiz kalamaz.',
        C: '"Which" sıfat cümleciğidir; tam bir ana cümle oluşturmaz.',
        D: '"So that" amaç bildirir ve kömür santrallerinin genişletilmesi mantıksızdır.',
        E: '"Unless" bir koşul yan cümleciğidir; ana cümle değildir.',
      },
      strategyTip: 'Cümle tamamlama sorularında "Yan Cümle + Ana Cümle" dengesine dikkat edin. Seçenek bir bağlaçla başlıyorsa çoğunlukla ana cümle oluşturamaz.',
      relatedGrammarTopicId: 'conjunctions_contrast',
    },
  ],

  // 5. Çeviri (Translation)
  translation: [
    {
      id: 'mod-trn-1',
      questionNumber: 37,
      category: 'translation',
      level: 'B2+',
      translationDirection: 'tr_to_en',
      stemEn: 'Yapay zekâ algoritmaları, tıp uzmanlarının hastalıkları çok daha erken teşhis etmelerine olanak tanıyarak hasta sağ kalım oranlarını belirgin şekilde artırmıştır.',
      options: [
        { label: 'A', text: 'Artificial intelligence algorithms have significantly increased patient survival rates by enabling medical specialists to diagnose diseases much earlier.' },
        { label: 'B', text: 'Medical specialists have utilized artificial intelligence algorithms in order to diagnose diseases earlier and improve survival rates.' },
        { label: 'C', text: 'Because artificial intelligence algorithms diagnose diseases early, patient survival rates will increase considerably.' },
        { label: 'D', text: 'By increasing patient survival rates, artificial intelligence algorithms allow medical specialists to diagnose illnesses.' },
        { label: 'E', text: 'Diseases are diagnosed much earlier by artificial intelligence algorithms, which increases survival rates.' },
      ],
      correctAnswer: 'A',
      explanationEn: 'Matches the Turkish subject ("Yapay zekâ algoritmaları" = "Artificial intelligence algorithms"), the primary verb ("artırmıştır" = "have significantly increased"), and the manner clause ("olanak tanıyarak" = "by enabling").',
      explanationTr: 'Özne "Yapay zekâ algoritmaları", ana yüklem "artırmıştır" (have significantly increased) ve zarf fiil "olanak tanıyarak" (by enabling) öğelerini birebir karşılayan tek seçenek A\'dır.',
      whyCorrect: 'Cümlenin ana yüklemi ("artırmıştır" -> "have significantly increased") ve öznesi ("yapay zeka algoritmaları") tam örtüşmektedir.',
      whyDistractorsFail: {
        A: 'Doğru cevap. Özne, yüklem ve zarf fiil tam eşleşir.',
        B: 'Özne "Tıp uzmanları" (Medical specialists) olarak değiştirilmiştir.',
        C: 'Yüklem gelecek zaman ("will increase") yapılmıştır ve "because" eklenmiştir.',
        D: 'Sebep ve sonuç yer değiştirmiştir.',
        E: 'Cümle edilgen çatıya ("Diseases are diagnosed") çevrilmiştir.',
      },
      strategyTip: 'Çeviri sorularında: 1. Ana Yüklemi, 2. Cümlenin Gerçek Öznesini bulun ve seçenekleri eleyin.',
    },
  ],

  // 6. Okuma Parçaları (Reading)
  reading: [
    {
      id: 'mod-rdg-1',
      questionNumber: 43,
      category: 'reading',
      level: 'C1_YDS',
      passage: 'For centuries, the deep ocean floor was envisioned as a biological desert—devoid of light, subject to immense hydrostatic pressure, and virtually barren of complex life. However, the discovery of hydrothermal vents in the late 1970s radically dismantled this paradigm. Thriving ecosystems centered on chemosynthetic bacteria were found flourishing along volcanic ridges, deriving metabolic energy not from solar radiation, but from chemical compounds such as hydrogen sulfide expelled by mineral chimneys.',
      stemEn: 'According to the passage, the discovery of hydrothermal vents was scientifically groundbreaking because ----.',
      options: [
        { label: 'A', text: 'it disproved the long-held assumption that sunlight is an indispensable prerequisite for all complex life ecosystems' },
        { label: 'B', text: 'it confirmed that deep ocean floors possess higher temperatures than equatorial coastal waters' },
        { label: 'C', text: 'it proved that volcanic activity is the primary cause of global ocean acidification' },
        { label: 'D', text: 'it demonstrated that deep-sea mineral chimneys could be economically mined for rare minerals' },
        { label: 'E', text: 'it showed that photosynthesis is far more efficient at extreme depths than previously calculated' },
      ],
      correctAnswer: 'A',
      explanationEn: 'The passage highlights that vent ecosystems derive energy from chemosynthesis rather than sunlight ("not from solar radiation"), overturning the dogma that life requires solar energy.',
      explanationTr: 'Metin, ekosistemin enerjisini güneş ışığından değil kimyasal bileşiklerden (kemosentez) aldığını belirterek, güneş ışığının tüm yaşam için zorunlu olduğu yönündeki asırlık inancı çürütmüştür.',
      whyCorrect: 'Metinde geçen "deriving metabolic energy not from solar radiation" ifadesi doğrudan A seçeneğindeki yargıyı kanıtlar.',
      whyDistractorsFail: {
        A: 'Doğru cevap. Metindeki temel paradigma değişimini açıklar.',
        B: 'Sıcaklık karşılaştırması metinde geçmemektedir.',
        C: 'Okyanus asitlenmesi metnin konusu değildir.',
        D: 'Maden çıkarımı ekonomik bir iddiadır; bilimsel buluşla alakası yoktur.',
        E: 'Metinde fotosentez değil, kemosentez anlatılmaktadır.',
      },
      strategyTip: 'Okuma sorularında seçeneklerdeki anahtar kelimeleri metindeki zıtlık ve çıkarım cümleleriyle doğrudan eşleştirin.',
      relatedVocabulary: ['hydrothermal vents', 'chemosynthetic', 'indispensable'],
    },
  ],

  // 7. Diyalog Tamamlama (Dialogue)
  dialogue: [
    {
      id: 'mod-dlg-1',
      questionNumber: 63,
      category: 'dialogue',
      level: 'B2+',
      dialogueSpeakers: [
        { speaker: 'Dr. Evans', text: 'I am concerned about introducing autonomous robotics into pediatric intensive care units so quickly.' },
        { speaker: 'Dr. Moore', text: '----' },
        { speaker: 'Dr. Evans', text: 'That is true, but technical efficiency can never replace the empathetic comfort human nurses provide to distressed children.' },
      ],
      stemEn: 'Which of the following completes the dialogue most appropriately?',
      options: [
        { label: 'A', text: 'I understand your hesitation, yet automated medication dispensers reduce human dosage errors by over eighty percent.' },
        { label: 'B', text: 'We should cancel the installation immediately and keep relying entirely on traditional equipment.' },
        { label: 'C', text: 'Why are you always opposing every technological upgrade our hospital administration approves?' },
        { label: 'D', text: 'Children prefer interacting with screen displays and robots rather than adult healthcare workers.' },
        { label: 'E', text: 'Have you completed the safety inspection report requested by the biomedical committee?' },
      ],
      correctAnswer: 'A',
      explanationEn: 'Dr. Evans replies "That is true, but technical efficiency can never replace...", indicating that Dr. Moore must have pointed out a significant technical efficiency benefit (reducing dosage errors).',
      explanationTr: 'Dr. Evans\'ın bir sonraki konuşmasında "Bu doğru ama teknik verimlilik insan şefkatinin yerini tutamaz" demesi, Dr. Moore\'un teknik bir verimlilik/doğruluk argümanı sunduğunu gösterir.',
      whyCorrect: 'Dr. Evans\'ın cevabındaki "That is true (Bu doğru)" ifadesi, Dr. Moore\'un robotların bariz bir faydasından (hata oranını %80 düşürmesi) bahsettiğini kesinleştirir.',
      whyDistractorsFail: {
        A: 'Doğru cevap. Akış ve bir sonraki tepkiyle tam uyumludur.',
        B: 'Dr. Evans endişeli olsa da, karşı tarafın hemen projeyi iptal etmeyi önermesi akışı bozar.',
        C: 'Saldırgan ve profesyonellik dışı bir üsluptur; akademik YDS diyaloglarında görülmez.',
        D: 'Çocukların robotları tercih ettiği asılsız bir genellemedir.',
        E: 'Konuyu verimlilikten koparıp bürokratik bir rapora çeker.',
      },
      strategyTip: 'Boşluktan HEMEN SONRAKİ cümlenin ilk kelimelerine ("That is true, but...") çok dikkat edin. Boşluktaki iddiayı teyit eden bir ifade aranmalıdır.',
    },
  ],

  // 8. Yakın Anlamlı Cümle (Restatement)
  restatement: [
    {
      id: 'mod-rst-1',
      questionNumber: 68,
      category: 'restatement',
      level: 'C1_YDS',
      stemEn: 'Had the international coalition enacted economic sanctions earlier, the belligerent regime would likely have refrained from invading its neighbor.',
      options: [
        { label: 'A', text: 'Because economic sanctions were imposed in a timely manner, the invasion of the neighboring state was completely averted.' },
        { label: 'B', text: 'The aggressive regime probably would not have launched the invasion if economic penalties had been implemented sooner by the coalition.' },
        { label: 'C', text: 'Although sanctions were delayed, the international coalition successfully persuaded the aggressive regime to withdraw.' },
        { label: 'D', text: 'The invasion took place primarily because the neighboring country failed to seek military assistance from allies.' },
        { label: 'E', text: 'Economic sanctions were completely ineffective in preventing the aggressive regime from attacking neighboring borders.' },
      ],
      correctAnswer: 'B',
      explanationEn: 'The original inverted Type 3 conditional ("Had the coalition enacted... would likely have refrained") means sanctions were NOT enacted early, and invasion occurred. Option B preserves this exact hypothetical counterfactual meaning.',
      explanationTr: 'Verilen cümle devrik bir Type 3 Koşul cümlesidir ("Yaptırımlar daha erken uygulansaydı, rejim muhtemelen işgalden kaçınırdı"). Bu, yaptırımların geciktiğini ve işgalin gerçekleştiğini anlatır. B seçeneği bu karşıt-olgusal anlamı birebir korur.',
      whyCorrect: '"Had + S + V3, would have V3" kalıbı "If + Past Perfect, would have V3" ile aynıdır. "Refrained from invading" = "would not have launched the invasion".',
      whyDistractorsFail: {
        A: 'Yaptırımların zamanında uygulandığını ve işgalin engellendiğini iddia ederek gerçeği tersyüz eder.',
        B: 'Doğru cevap. Koşul yapısını ve anlamı eksiksiz muhafaza eder.',
        C: 'Metinde rejimin geri çekildiği söylenmemektedir.',
        D: 'Sebep komşu ülkenin yardım istememesi olarak saptırılmıştır.',
        E: '"Completely ineffective" ifadesi aşırı ve yanıltıcıdır.',
      },
      strategyTip: 'Devrik "Had + Subject + V3" gördüğümüzde bunun geçmişe dönük gerçekleşmemiş bir "Type 3 Condition" olduğunu hemen saptayın.',
    },
  ],

  // 9. Paragraf Tamamlama (Paragraph Completion)
  paragraph_completion: [
    {
      id: 'mod-prg-1',
      questionNumber: 72,
      category: 'paragraph_completion',
      level: 'C1_YDS',
      stemEn: 'Urban heat islands occur when cities replace natural land cover with dense concentrations of pavement, buildings, and other surfaces that absorb and retain heat. This effect elevates urban temperatures significantly above surrounding rural areas. ----. For instance, widespread installation of reflective cool roofs and urban green corridors can lower localized temperatures by up to four degrees Celsius.',
      options: [
        { label: 'A', text: 'Fortunately, targeted architectural and civil engineering interventions can effectively mitigate these temperature spikes.' },
        { label: 'B', text: 'Therefore, most urban residents are unwilling to relocate to cooler countryside settlements.' },
        { label: 'C', text: 'In contrast, rural regions generate enormous quantities of greenhouse emissions through agriculture.' },
        { label: 'D', text: 'Consequently, solar panels lose their electrical efficiency when ambient temperatures drop too low.' },
        { label: 'E', text: 'However, urban planners believe that no feasible remedy exists to combat microclimatic shifts.' },
      ],
      correctAnswer: 'A',
      explanationEn: 'The sentence preceding the blank describes a problem (elevated temperatures). The sentence following begins with "For instance" and describes architectural solutions (cool roofs, green corridors). The blank must introduce the idea that solutions exist.',
      explanationTr: 'Boşluktan önceki cümle sorunu (sıcaklık artışı), sonraki cümle ise "For instance (Örneğin)" diyerek mimari çözümleri (serin çatılar, yeşil koridorlar) anlatmaktadır. Boşluğa çözümlerin mümkün olduğunu bildiren A seçeneği gelmelidir.',
      whyCorrect: '"For instance" ile verilen örnekler (cool roofs, green corridors) doğrudan A seçeneğindeki "targeted architectural and civil engineering interventions" ifadesinin açılımıdır.',
      whyDistractorsFail: {
        A: 'Doğru cevap. Öncesindeki problem ile sonrasındaki örnekleri kusursuz biçimde birbirine bağlar.',
        B: 'Şehirlilerin kırsala taşınması örneklere bağlam oluşturmaz.',
        C: 'Kırsal emisyonlar sonraki yeşil çatı örnekleriyle tamamen alakasızdır.',
        D: 'Güneş panellerinin soğukta verim kaybetmesi paragrafın sıcaklık konusuyla zıttır.',
        E: '"No feasible remedy exists" (çözüm yok) iddiası sonraki çözüm örnekleriyle taban tabana çelişir.',
      },
      strategyTip: 'Boşluktan sonra "For instance / For example" geliyorsa, boşluktaki cümle o örneklerin genel üst başlığı veya ana fikri olmak zorundadır.',
    },
  ],

  // 10. Anlam Bütünlüğünü Bozan Cümle (Irrelevant Sentence)
  irrelevant_sentence: [
    {
      id: 'mod-irr-1',
      questionNumber: 76,
      category: 'irrelevant_sentence',
      level: 'C1_YDS',
      stemEn: '(I) The James Webb Space Telescope has revolutionized our understanding of the early universe by capturing infrared light from galaxies formed over 13 billion years ago. (II) Its massive gold-coated beryllium mirror enables unprecedented sensitivity to faint cosmic wavelengths. (III) In addition, its advanced spectrographs can analyze the atmospheric chemical composition of transiting exoplanets. (IV) Beryllium is a relatively rare metallic element that is frequently alloyed with copper for aerospace tooling. (V) Together, these cutting-edge capabilities are providing astronomers with unprecedented insight into star formation and cosmic evolution.',
      options: [
        { label: 'A', text: 'I' },
        { label: 'B', text: 'II' },
        { label: 'C', text: 'III' },
        { label: 'D', text: 'IV' },
        { label: 'E', text: 'V' },
      ],
      correctAnswer: 'D',
      explanationEn: 'Sentences I, II, III, and V discuss the astronomical capabilities and scientific contributions of the James Webb Space Telescope. Sentence IV abruptly digresses into the metallurgy and industrial uses of beryllium.',
      explanationTr: 'I, II, III ve V numaralı cümleler James Webb Uzay Teleskobunun gökbilimsel kabiliyetlerini ve evreni anlama gücünü anlatırken; IV numaralı cümle berilyum elementinin endüstriyel alaşımlarından bahsederek akışı bozmaktadır.',
      whyCorrect: 'IV numaralı cümle teleskobun işlevinden saparak berilyum metalinin genel kimyasal özelliklerine geçmektedir. Cümle V\'teki "these cutting-edge capabilities" ifadesi II ve III\'teki teknik özellikleri doğrudan bağlar.',
      whyDistractorsFail: {
        A: 'Cümle I ana konuyu (teleskobun başarısını) başlatan temel cümledir.',
        B: 'Cümle II teleskobun optik gücünü açıklayarak I\'i destekler.',
        C: 'Cümle III "In addition" ile bir diğer spektroskopik özelliği ekler.',
        D: 'Doğru cevap. IV numaralı cümle konudan kopan metalurjik bir ayrıntıdır.',
        E: 'Cümle V tüm bu kabiliyetleri ("these cutting-edge capabilities") toparlayan sonuç cümlesidir.',
      },
      strategyTip: 'Bir cümle metindeki bir kelimeye (örneğin "beryllium") takılıp konuyu o kelimenin alakasız bir detayına çekiyorsa, bu cümle klasik YDS akışı bozan çeldiricisidir.',
    },
  ],
};

/**
 * Returns practice questions for a given module category.
 */
export function getQuestionsForModule(category: YdsQuestionCategory): YdsQuestion[] {
  return MODULE_PRACTICE_BANK[category] || [];
}

/**
 * Returns section configuration for UI rendering.
 */
export function getModuleConfig(category: YdsQuestionCategory) {
  return OFFICIAL_YDS_SECTIONS.find((s) => s.category === category) || OFFICIAL_YDS_SECTIONS[0];
}

export interface GoldenRule {
  id: string;
  category: 'Tense & Time' | 'Connectors' | 'Modals' | 'Relative & Noun Clauses' | 'Reductions & Inversion' | 'Prepositions' | 'Exam Strategy';
  ruleNumber: number;
  titleTr: string;
  formula?: string;
  explanationTr: string;
  exampleEn: string;
  exampleTr: string;
  examTrapTr: string;
}

export interface QuestionTypeGuide {
  category: string;
  titleTr: string;
  questionCountYds: number;
  timeAllocationMinutes: number;
  howToSolveTr: string[];
  fastTacticsTr: string[];
  frequentMistakesTr: string[];
  distractorTypesTr: string[];
  miniExample: {
    stemEn: string;
    options: { label: string; text: string }[];
    correctAnswer: string;
    stepByStepSolutionTr: string;
    whyDistractorsFailTr: string;
  };
}

export interface ExamStrategyItem {
  id: string;
  titleTr: string;
  descriptionTr: string;
  actionPointsTr: string[];
  badge?: string;
}

export interface ExamComparison {
  name: string;
  questionCount: number;
  durationMinutes: number;
  penaltyFormula: string;
  scoringBase: string;
  targetAudience: string;
  questionStyle: string;
  tacticalAdvice: string;
}

export const YDS_EXAM_INFO: ExamComparison = {
  name: 'YDS (Yabancı Dil Bilgisi Seviye Tespit Sınavı)',
  questionCount: 80,
  durationMinutes: 180,
  penaltyFormula: 'Yanlış doğruyu GÖTÜRMEZ. (Tüm 80 soruyu işaretlemek zorunludur).',
  scoringBase: '100 Puan üzerinden. Her doğru soru net 1.25 puandır.',
  targetAudience: 'Akademisyenler, doçent adayları, kamu personeli, yüksek lisans ve doktora öğrencileri.',
  questionStyle: 'Ağır akademik dil, bilimsel makale jargonu, kompleks sentaks ve soyut kavramlar.',
  tacticalAdvice: 'Soru başına ortalama 2.25 dakika düşer. Zaman görece daha geniştir, bu yüzden acele etmeyip okuma parçalarına derinlemesine odaklanın ve asla boş soru bırakmayın.',
};

export const YDT_EXAM_INFO: ExamComparison = {
  name: 'YDT (YKS Yabancı Dil Testi)',
  questionCount: 80,
  durationMinutes: 120,
  penaltyFormula: '4 Yanlış 1 Doğruyu GÖTÜRÜR! (Emin olunmayan sorularda dikkatli olunmalı).',
  scoringBase: 'TYT (%40) + YDT (%60) katsayı ağırlıklarıyla YKS Dil puanı hesaplanır.',
  targetAudience: 'Üniversitelerin İngilizce Öğretmenliği, İngiliz Dili ve Edebiyatı, Mütercim-Tercümanlık vb. lisans bölümlerini hedefleyen lise öğrencileri ve mezunlar.',
  questionStyle: 'B1-B2 düzeyinde başlayıp C1 seviyesine uzanan dengeli dil bilgisi ve anlama kabiliyeti.',
  tacticalAdvice: 'Soru başına sadece 1.5 dakika düşer! Zaman baskısı YDS\'ye göre çok daha yüksektir. Çift turlama tekniği şarttır. 2 seçeneğe indiremediğiniz ve hiçbir fikriniz olmayan soruları boş bırakın.',
};

export const GOLDEN_RULES_50: GoldenRule[] = [
  {
    id: 'gr-1',
    category: 'Tense & Time',
    ruleNumber: 1,
    titleTr: 'By the time + Past (V2) Kombinasyonu',
    formula: 'By the time + S + V2 (Past Simple), S + had V3 (Past Perfect)',
    explanationTr: '"By the time" geçmiş zamanla kullanıldığında, bir eylemin başka bir geçmiş eylemden daha önce tamamlandığını belirtir. Ana cümlede mutlaka Past Perfect (had + V3) aranmalıdır.',
    exampleEn: 'By the time the rescue team arrived at the avalanche site, the local villagers had already rescued three survivors.',
    exampleTr: 'Kurtarma ekibi çığ bölgesine vardığında, yerel köylüler üç kazazedeyi çoktan kurtarmıştı.',
    examTrapTr: 'Ana cümleye "would have V3" veya "was V-ing" yazarak çeldirici koyarlar. By the time geçmişte ise ilk öncelik "had V3"tür.'
  },
  {
    id: 'gr-2',
    category: 'Tense & Time',
    ruleNumber: 2,
    titleTr: 'By the time + Present (V1/Vs) Kombinasyonu',
    formula: 'By the time + S + V1/Vs (Present), S + will have V3 (Future Perfect)',
    explanationTr: '"By the time" geniş zaman ile kullanıldığında gelecekte belirli bir ana kadar tamamlanmış olacak eylemleri anlatır. Ana cümle Future Perfect (will have V3) gerektirir.',
    exampleEn: 'By the time humanity establishes a permanent base on Mars, robotic rovers will have explored the planet for over three decades.',
    exampleTr: 'İnsanlık Mars\'ta kalıcı bir üs kurana kadar, robotik keşif araçları gezegeni otuz yıldan uzun süre keşfetmiş olacak.',
    examTrapTr: 'Ana cümleye "will explore" (Simple Future) koyarlar. Süreç ve bitmişlik vurgulandığında "will have V3" aranmalıdır.'
  },
  {
    id: 'gr-3',
    category: 'Tense & Time',
    ruleNumber: 3,
    titleTr: 'Since Kuralı (Past Simple + Present Perfect)',
    formula: 'Since + S + V2 (Past Point), S + have/has V3 (Present Perfect)',
    explanationTr: 'Since zaman bağlacı olarak kullanıldığında (den beri), kendi cümlesi geçmişte belirli bir noktayı (Past Simple) alırken, ana cümle günümüze uzanan süreci (Present Perfect / Present Perfect Continuous) alır.',
    exampleEn: 'Since renewable energy subsidies were introduced in 2010, the cost of solar photovoltaic cells has plummeted by over 80%.',
    exampleTr: '2010 yılında yenilenebilir enerji teşvikleri getirildiğinden beri, güneş fotovoltaik panellerinin maliyeti %80\'den fazla düştü.',
    examTrapTr: 'Since\'in kendi cümlesine Present Perfect koyulamaz. "Since + V2" değişmez kuraldır.'
  },
  {
    id: 'gr-4',
    category: 'Tense & Time',
    ruleNumber: 4,
    titleTr: 'Zaman Bağlaçlarında Will/Would Yasağı',
    formula: 'When / While / After / Before / Until / As soon as + [NO WILL / WOULD]',
    explanationTr: 'Zaman bağlaçlarının bulunduğu yan cümlecikte (adverbial clause of time) ASLA "will", "would" veya "shall" yer almaz. Gelecek anlamı Present Simple (V1) veya Present Perfect (have/has V3) ile verilir.',
    exampleEn: 'As soon as the laboratory analyzes the biochemical samples, researchers will publish the definitive report.',
    exampleTr: 'Laboratuvar biyokimyasal numuneleri analiz eder etmez, araştırmacılar kesin raporu yayımlayacak.',
    examTrapTr: 'Yan cümleye "will analyze" koyarak Türkçe çeviri mantığından avlarlar.'
  },
  {
    id: 'gr-5',
    category: 'Tense & Time',
    ruleNumber: 5,
    titleTr: 'Past Continuous (was/were V-ing) & Süreç',
    formula: 'While / As + was/were V-ing, S + V2',
    explanationTr: 'Geçmişte devam eden bir eylem sırasında başka bir ani eylem gerçekleşirse, devam eden eylem Past Continuous, bölen eylem Past Simple ile ifade edilir.',
    exampleEn: 'While archaeologists were excavating the Bronze Age citadel, they stumbled upon an intact royal vault.',
    exampleTr: 'Arkeologlar Tunç Çağı hisarını kazmaktayken, bozulmamış bir kraliyet mahzenine rastladılar.',
    examTrapTr: 'While yanına ani fiiller (drop, find, die) tek başına konmaz; süreç bildiren fiiller (excavate, study, walk) tercih edilir.'
  },
  {
    id: 'gr-6',
    category: 'Tense & Time',
    ruleNumber: 6,
    titleTr: 'It is the first/second time + Present Perfect',
    formula: 'It is the first time + S + have/has V3 | It was the first time + S + had V3',
    explanationTr: 'Bir eylemin kaçıncı kez yapıldığını söylerken present yapıda Present Perfect, past yapıda Past Perfect kullanılır.',
    exampleEn: 'It is the first time that this endemic orchid species has flowered in a controlled greenhouse environment.',
    exampleTr: 'Bu endemik orkide türünün kontrollü bir sera ortamında çiçek açması ilk defadır.',
    examTrapTr: 'Past simple (flowered) çeldirici olarak sunulur; "It is ..." present başladığı için have/has V3 gelmelidir.'
  },
  {
    id: 'gr-7',
    category: 'Connectors',
    ruleNumber: 7,
    titleTr: 'Tam Cümle Alan Zıtlık Bağlaçları',
    formula: 'Although / Even though / Though / Much as / While / Whereas + Cümle (S+V+O)',
    explanationTr: 'Bu bağlaçlar doğrudan öznesi ve yüklemi olan tam bir yan cümle alır. Beklenmedik sonuç veya doğrudan tezat ifade eder.',
    exampleEn: 'Although the experimental drug exhibited significant efficacy in preliminary trials, the regulatory body required further testing.',
    exampleTr: 'Deneysel ilaç ön denemelerde belirgin etki göstermesine rağmen, denetleyici kurum ilave testler talep etti.',
    examTrapTr: 'Despite ve In spite of ile karıştırılır. Tam cümle varsa although grubu gelir, isim öbeği varsa despite grubu gelir.'
  },
  {
    id: 'gr-8',
    category: 'Connectors',
    ruleNumber: 8,
    titleTr: 'İsim/V-ing Alan Zıtlık Bağlaçları',
    formula: 'Despite / In spite of / Notwithstanding + Noun Phrase / V-ing',
    explanationTr: 'Bu bağlaçlar edat soyludur ve arkalarından ASLA yalın fiil veya tam cümle almazlar; isim tamlaması veya gerund alırlar.',
    exampleEn: 'Despite intense international diplomatic pressure, the regime refused to halt its nuclear enrichment program.',
    exampleTr: 'Yoğun uluslararası diplomatik baskıya rağmen, rejim nükleer zenginleştirme programını durdurmayı reddetti.',
    examTrapTr: 'Boşluktan sonra tam cümle (S+V) varken şıklarda "Despite" işaretlenmemelidir. Sadece "Despite the fact that" tam cümle alabilir.'
  },
  {
    id: 'gr-9',
    category: 'Connectors',
    ruleNumber: 9,
    titleTr: 'Geçiş Zarfları ve Noktalama İpuçları',
    formula: '; However, / . However, / ; Nevertheless, / ; Therefore,',
    explanationTr: 'However, Nevertheless, Nonetheless, Therefore, Consequently gibi geçiş zarfları (conjunctive adverbs) iki bağımsız cümleyi bağlar ve genellikle noktalı virgül (;) ile virgül (,) arasında veya nokta sonrasında virgülle kullanılır.',
    exampleEn: 'Global carbon emissions stabilized briefly during the pandemic; however, industrial activity rebounded sharply the following year.',
    exampleTr: 'Küresel karbon emisyonları salgın sırasında kısa süreliğine dengelendi; ancak sanayi faaliyeti ertesi yıl sert bir şekilde toparlandı.',
    examTrapTr: 'İki cümleyi sadece virgülle ayıran yerde However kullanılmaz (comma splice hatası). Noktalama işaretleri bağlaç seçiminde %90 ipucudur.'
  },
  {
    id: 'gr-10',
    category: 'Connectors',
    ruleNumber: 10,
    titleTr: 'Sebep Bağlaçları (Tam Cümle)',
    formula: 'Because / Since / As / Inasmuch as / Seeing that + S + V + O',
    explanationTr: '"Çünkü / -dığı için" anlamına gelirler ve kendilerinden sonra neden bildiren tam bir cümle alırlar.',
    exampleEn: 'Since electric vehicles generate zero direct tailpipe emissions, their widespread adoption will substantially improve urban air quality.',
    exampleTr: 'Elektrikli araçlar sıfır egzoz emisyonu ürettiği için, yaygınlaşmaları kent hava kalitesini önemli ölçüde iyileştirecektir.',
    examTrapTr: 'Since bağlacının "-den beri" (zaman) ve "-dığı için" (sebep) olmak üzere iki anlamı vardır; tense uyumu yoksa sebep bağlacıdır.'
  },
  {
    id: 'gr-11',
    category: 'Connectors',
    ruleNumber: 11,
    titleTr: 'Sebep Edatları (İsim / V-ing Alan)',
    formula: 'Because of / Due to / Owing to / On account of / In view of + Noun / V-ing',
    explanationTr: '"-den dolayı / sebebiyle" anlamına gelir. Arkalarından tam bir cümle değil, isim veya isimleşmiş fiil öbeği alırlar.',
    exampleEn: 'Due to severe supply chain bottlenecks, semiconductor manufacturers failed to fulfill burgeoning global demand.',
    exampleTr: 'Ciddi tedarik zinciri tıkanıklıkları sebebiyle, yarı iletken üreticileri artan küresel talebi karşılamakta başarısız oldu.',
    examTrapTr: '"Due to" genelde to be fiilinden sonra (The delay was due to...) veya virgülle ayrılmış yan öbek olarak gelir.'
  },
  {
    id: 'gr-12',
    category: 'Connectors',
    ruleNumber: 12,
    titleTr: 'Amaç Bildiren Bağlaçlar (So that vs In order to)',
    formula: 'So that / In order that + S + can/could/will/would + V1 | In order to / So as to + V1',
    explanationTr: 'So that tam cümle alarak özneye göre modal (can/could/may/might) ister. In order to ise doğrudan fiilin yalın halini (V1) alır.',
    exampleEn: 'Engineers insulated the satellite with multilayer thermal blankets so that sensitive electronics would survive extreme temperatures.',
    exampleTr: 'Mühendisler, hassas elektronik bileşenler aşırı sıcaklıklarda zarar görmesin diye uyduyu çok katmanlı termal battaniyelerle yalıttı.',
    examTrapTr: 'Boşluktan sonra doğrudan V1 varsa "so that" işaretlenemez; "in order to" veya sadece "to" seçilmelidir.'
  },
  {
    id: 'gr-13',
    category: 'Connectors',
    ruleNumber: 13,
    titleTr: 'Koşul Bağlaçları: Unless = If Not',
    formula: 'Unless + S + V (Olumlu yapı), S + V (Anlam olumsuzdur)',
    explanationTr: 'Unless "-medikçe / -mezse" demektir ve kendi içinde olumsuzluk barındırır. Unless cümlesine not/never getirilmez.',
    exampleEn: 'Unless governments implement stringent carbon pricing mechanisms, global mean temperatures will surpass the critical 1.5°C threshold.',
    exampleTr: 'Hükümetler katı karbon fiyatlandırma mekanizmaları uygulamadıkça, küresel ortalama sıcaklıklar kritik 1.5°C eşiğini aşacaktır.',
    examTrapTr: 'Unless\'in yanındaki cümleye "do not implement" konmaz. Kendisi pozitif sentakslı ama negatif anlamlıdır.'
  },
  {
    id: 'gr-14',
    category: 'Connectors',
    ruleNumber: 14,
    titleTr: 'Ekleme / Paralellik Bağlaçları',
    formula: 'In addition to / As well as / Besides / Along with + Noun / V-ing',
    explanationTr: '"-e ek olarak / yanı sıra" demektir. İki olumlu ya da iki olumsuz durumu aynı doğrultuda birbirine bağlar.',
    exampleEn: 'In addition to reducing cardiovascular risks, habitual aerobic exercise enhances hippocampal neurogenesis and executive cognitive function.',
    exampleTr: 'Kardiyovasküler riskleri azaltmaya ek olarak, düzenli aerobik egzersiz hipokampal nörojenezi ve yönetici bilişsel işlevleri güçlendirir.',
    examTrapTr: 'Furthermore ve Moreover cümle alır; In addition to ise isim alır. "To" edatı isim istediğinin kanıtıdır.'
  },
  {
    id: 'gr-15',
    category: 'Connectors',
    ruleNumber: 15,
    titleTr: 'Korelatif İkililer (Paired Conjunctions)',
    formula: 'Neither...nor / Either...or / Not only...but also / Both...and / Whether...or',
    explanationTr: 'Bu ikililer paralel dilbilgisi yapılarını birbirine bağlar (isim ile isim, fiil ile fiil, sıfat ile sıfat).',
    exampleEn: 'The proposed treaty is expected not only to foster bilateral trade but also to de-escalate maritime border tensions.',
    exampleTr: 'Önerilen antlaşmanın sadece ikili ticareti geliştirmekle kalmayıp aynı zamanda deniz sınırı gerilimlerini de yatıştırması bekleniyor.',
    examTrapTr: 'Not only sonrasında fiil geliyorsa, but also sonrasında da fiil gelmelidir; yapısal paralellik bozulamaz.'
  },
  {
    id: 'gr-16',
    category: 'Modals',
    ruleNumber: 16,
    titleTr: 'Must have V3 — Geçmişe Güçlü Çıkarım',
    formula: 'Must have + V3 (%95 Eminlik, Geçmişte Yapmış Olmalı)',
    explanationTr: 'Geçmişte gerçekleşmiş bir durum hakkında elde çok kuvvetli bir kanıt olduğunda yapılan mantıksal çıkarımdır.',
    exampleEn: 'Given that the ancient manuscript contains Mesopotamian astronomical symbols, the scribe must have studied in Babylon.',
    exampleTr: 'Antik el yazmasının Mezopotamya astronomik sembolleri içerdiği göz önüne alındığında, yazman Babil\'de eğitim almış olmalı.',
    examTrapTr: 'Zorunluluk (had to) ile karıştırılmamalıdır. "Must have V3" bir kural değil, geçmişe ait mantıksal kesinlik çıkarımıdır.'
  },
  {
    id: 'gr-17',
    category: 'Modals',
    ruleNumber: 17,
    titleTr: 'Can\'t have / Couldn\'t have V3 — Geçmiş İmkansızlık',
    formula: 'Can\'t / Couldn\'t have + V3 (Yapmış Olamaz, İmkansız)',
    explanationTr: 'Geçmişteki bir eylemin gerçekleşmiş olmasının mantıken veya fiziken imkansız olduğunu anlatır.',
    exampleEn: 'The suspect couldn\'t have committed the heist in London, as timestamped airport surveillance confirms he was in Tokyo.',
    exampleTr: 'Zaman damgalı havalimanı güvenlik kayıtları Tokyo\'da olduğunu doğruladığından, şüphelinin Londra\'daki soygunu yapmış olması imkansızdır.',
    examTrapTr: 'Mustn\'t have V3 İngilizcede kullanılmaz; geçmişteki imkansızlık için sadece "can\'t/couldn\'t have V3" kullanılır.'
  },
  {
    id: 'gr-18',
    category: 'Modals',
    ruleNumber: 18,
    titleTr: 'Should have V3 — Pişmanlık ve Eleştiri',
    formula: 'Should have / Ought to have + V3 (Yapmalıydı ama Yapmadı)',
    explanationTr: 'Geçmişte yapılması doğru veya zorunlu olan fakat yapılmayan eylemleri ifade eder; pişmanlık veya eleştiri taşır.',
    exampleEn: 'The municipal authorities should have fortified the sea walls long before the category-5 hurricane struck.',
    exampleTr: 'Belediye yetkilileri, 5. kategori kasırga vurmadan çok önce deniz setlerini güçlendirmeliydi (fakat güçlendirmedi).',
    examTrapTr: 'Should V1 şimdiki zaman tavsiyesidir; geçmişteki kaçırılmış fırsat ve ihmal için "should have V3" gerekir.'
  },
  {
    id: 'gr-19',
    category: 'Modals',
    ruleNumber: 19,
    titleTr: 'Needn\'t have V3 — Gereksiz Yere Yapılmış Eylem',
    formula: 'Needn\'t have + V3 (Gerek yoktu ama Boşuna Yaptı)',
    explanationTr: 'Geçmişte yapılan bir eylemin aslında hiç gerekli olmadığının sonradan anlaşılması durumudur.',
    exampleEn: 'The student needn\'t have stayed up all night memorizing formulas, since the professor provided a comprehensive reference sheet.',
    exampleTr: 'Profesör kapsamlı bir referans kağıdı sağladığı için öğrencinin bütün gece uyanık kalıp formül ezberlemesine gerek yoktu (ama yaptı).',
    examTrapTr: '"Didn\'t need to do" (gerek yoktu ve yapmadı) ile "Needn\'t have done" (gerek yoktu ama boşuna yaptı) farkı YDS\'de çok sorulur.'
  },
  {
    id: 'gr-20',
    category: 'Modals',
    ruleNumber: 20,
    titleTr: 'Might / May / Could have V3 — Zayıf Geçmiş İhtimali',
    formula: 'Might / May / Could have + V3 (%30-%50 Olasılık, Yapmış Olabilir)',
    explanationTr: 'Geçmişte bir olayın gerçekleşmiş olma ihtimalini anlatır ancak elde kesin delil yoktur.',
    exampleEn: 'Paleontologists hypothesize that abrupt volcanic eruptions might have triggered the mass extinction event.',
    exampleTr: 'Paleontologlar, ani volkanik patlamaların kitlesel yok oluş olayını tetiklemiş olabileceğini varsayıyor.',
    examTrapTr: 'Could have V3 aynı zamanda "yapabilirdi ama yapmadı" anlamına da gelebilir.'
  },
  {
    id: 'gr-21',
    category: 'Relative & Noun Clauses',
    ruleNumber: 21,
    titleTr: 'Virgülden Sonra ASLA That Gelmez',
    formula: ', which ... (DOĞRU) | , that ... (KESİNLİKLE YANLIŞ)',
    explanationTr: 'Non-defining (ekstra bilgi veren) relative clause cümlelerinde virgülle ayrılan kısımda nesneler için ASLA "that" kullanılamaz; sadece "which" kullanılır.',
    exampleEn: 'The James Webb Space Telescope, which was launched on Christmas Day in 2021, orbits the Sun at the Second Lagrange Point.',
    exampleTr: '2021 Noel gününde fırlatılan James Webb Uzay Teleskobu, Güneş etrafında İkinci Lagrange Noktasında yörüngededir.',
    examTrapTr: 'Boşluğun hemen solunda virgül (,) varsa şıklardaki tüm "that" seçeneklerini tereddütsüz eleyin!'
  },
  {
    id: 'gr-22',
    category: 'Relative & Noun Clauses',
    ruleNumber: 22,
    titleTr: 'Preposition Sonrası Relative Pronouns',
    formula: 'Prep + whom (İnsanlar için) | Prep + which (Nesneler için)',
    explanationTr: 'Bir edattan (in, at, on, through, by, with) sonra relative clause geliyorsa insanlar için sadece "whom", nesneler için sadece "which" gelir. ASLA who veya that gelmez.',
    exampleEn: 'The international consortium established a peer-review panel in which three independent astrophysicists evaluated the telemetry data.',
    exampleTr: 'Uluslararası konsorsiyum, üç bağımsız astrofizikçinin telemetri verilerini değerlendirdiği bir hakem heyeti kurdu.',
    examTrapTr: '"in who" veya "at that" seçenekleri dilbilgisi kuralı gereği doğrudan elenir.'
  },
  {
    id: 'gr-23',
    category: 'Relative & Noun Clauses',
    ruleNumber: 23,
    titleTr: 'Whose + Articlesiz Yalın İsim',
    formula: 'Noun + whose + Noun (the/a/an olmadan)',
    explanationTr: 'Whose sahiplik nitelemesidir (onun, onların). Kendisinden sonra gelen isim "the", "a/an", "my" gibi hiçbir belirteç alamaz.',
    exampleEn: 'The pediatric neurosurgeon whose groundbreaking clinical trial cured severe epilepsy was awarded the Nobel Prize.',
    exampleTr: 'Çığır açan klinik deneyi şiddetli epilepsiyi iyileştiren pediatrik beyin cerrahı, Nobel Ödülü\'ne layık görüldü.',
    examTrapTr: 'Whose\'dan sonra hemen fiil gelmez; araya mutlaka bir isim girmelidir.'
  },
  {
    id: 'gr-24',
    category: 'Relative & Noun Clauses',
    ruleNumber: 24,
    titleTr: 'Where vs Which / In Which Ayrımı',
    formula: 'Where + Tam Cümle (İçinde Eylem) | Which + Eksik Cümle (Öznesiz/Nesnesiz)',
    explanationTr: 'Where mekan bildiren isimleri niteler ve yanındaki cümlecikte o mekanda bir eylem yapıldığını ifade eder (tam cümle). Which ise mekanın kendisini bir nesne gibi tanımlar ve öznesi/nesnesi eksiktir.',
    exampleEn: 'The ancient amphitheater where gladiatorial contests were staged has been fully restored for modern theatrical performances.',
    exampleTr: 'Gladyatör dövüşlerinin sahnelendiği antik amfitiyatro, modern tiyatro gösterileri için tamamen restore edildi.',
    examTrapTr: 'Cümlede "The city which I visited last year..." denir çünkü visit nesne alır ve o nesne şehirdir. Where I visited YANLIŞTIR.'
  },
  {
    id: 'gr-25',
    category: 'Relative & Noun Clauses',
    ruleNumber: 25,
    titleTr: 'Noun Clause: What vs That Ayrımı',
    formula: 'What + Eksik Cümle (Şey) | That + Tam Cümle (Gerçek/Olay)',
    explanationTr: 'What "the thing which" demektir ve yan cümleciğinde ya özne ya da nesne eksiktir. That ise arkasından tam, gramatik olarak eksiksiz bir cümle (S+V+O) alır.',
    exampleEn: 'What astonished the geneticists was that the reconstructed Neanderthal genome shared over 98% homology with modern Homo sapiens.',
    exampleTr: 'Genetikçileri şaşırtan şey, yeniden oluşturulan Neandertal genomunun modern Homo sapiens ile %98\'in üzerinde benzerlik paylaşmasıydı.',
    examTrapTr: 'Cümlenin nesnesi veya öznesi yoksa "that" seçilemez, "what" seçilmelidir.'
  },
  {
    id: 'gr-26',
    category: 'Relative & Noun Clauses',
    ruleNumber: 26,
    titleTr: 'Whether ... or Not (İkilem ve Şüphe)',
    formula: 'Preposition + whether | Cümle başında Whether | whether ... or not',
    explanationTr: '"-ıp -ıpmadığı" anlamı verir. Preposition\'lardan sonra if KULLANILAMAZ, sadece whether kullanılır. Cümlenin öznesi olarak başa geldiğinde de whether zorunludur.',
    exampleEn: 'Oceanographers are still debating whether deep-sea mineral dredging will inflict irreversible destruction on benthic ecosystems.',
    exampleTr: 'Okyanus bilimciler, derin deniz mineral taramasının bentik ekosistemlerde geri dönüşü olmayan bir yıkıma yol açıp açmayacağını hala tartışıyor.',
    examTrapTr: 'Preposition arkasında (about, in, on) "if" aranmaz; tek doğru seçenek "whether"dır.'
  },
  {
    id: 'gr-27',
    category: 'Reductions & Inversion',
    ruleNumber: 27,
    titleTr: 'Etken Kısaltmalar: V-ing ve Having V3',
    formula: 'Active: V-ing (doing) | Öncelik varsa: Having + V3 (having done)',
    explanationTr: 'Zaman veya bağlaç cümleciklerinde özne ortak ise etken kısaltma V-ing ile yapılır. Eğer yan cümledeki eylem ana cümledeki eylemden daha önce bitmişse Having V3 kullanılır.',
    exampleEn: 'Having synthesized the synthetic polymer in the laboratory, the chemistry team applied for an international patent.',
    exampleTr: 'Sentetik polimeri laboratuvarda sentezlemiş olan kimya ekibi, uluslararası bir patent başvurusunda bulundu.',
    examTrapTr: 'Özneler farklıysa bu kısaltma yapılamaz. Virgülden sonraki ilk kelime sentezleme işini bizzat yapan özne olmalıdır.'
  },
  {
    id: 'gr-28',
    category: 'Reductions & Inversion',
    ruleNumber: 28,
    titleTr: 'Edilgen Kısaltmalar: V3 ve Having been V3',
    formula: 'Passive: V3 (done) | Süreç/Öncelik: Having been V3',
    explanationTr: 'Edilgen kısaltmalarda fiilin 3. hali kullanılır. Cümlenin gizli öznesi eylemi yapan değil, eyleme maruz kalan varlıktır.',
    exampleEn: 'Discovered accidentally in 1928 by Alexander Fleming, penicillin transformed the treatment of bacterial infections worldwide.',
    exampleTr: '1928\'de Alexander Fleming tarafından tesadüfen keşfedilen penisilin, dünya çapında bakteriyel enfeksiyonların tedavisini dönüştürdü.',
    examTrapTr: 'Boşluktan sonra "by" veya nesnesiz edilgen bir yapı varsa etken kısaltma değil edilgen (discovered) seçilir.'
  },
  {
    id: 'gr-29',
    category: 'Reductions & Inversion',
    ruleNumber: 29,
    titleTr: 'Devrik Cümle: Olumsuz Zarflarla Başlama',
    formula: 'Hardly / Scarcely ... when | No sooner ... than | Seldom / Rarely + Yardımcı Fiil + Özne',
    explanationTr: 'Hardly, Barely, Scarcely, Seldom, Rarely, Under no circumstances gibi kısıtlayıcı veya olumsuz zarflar cümlenin başına geldiğinde cümle soru formu gibi devrikleşir.',
    exampleEn: 'Hardly had the vaccine been granted emergency authorization when logistical hubs began shipping vials to frontline clinics.',
    exampleTr: 'Aşıya acil kullanım izni verilir verilmez lojistik merkezler aşı şişelerini ön cephedeki kliniklere sevk etmeye başladı.',
    examTrapTr: 'Hardly ile when, No sooner ile than eşleşir. Bu ikililer ÖSYM\'nin en sevdiği kalıplardandır.'
  },
  {
    id: 'gr-30',
    category: 'Reductions & Inversion',
    ruleNumber: 30,
    titleTr: 'Koşul Cümlelerinde Devriklik (Inversion in Conditionals)',
    formula: 'Had + S + V3 (Type 3) | Were + S + to V1 (Type 2) | Should + S + V1 (Type 1)',
    explanationTr: 'If cümlesi devrildiğinde "If" atılır ve yardımcı fiil başa geçer: If I had known -> Had I known; If you should need -> Should you need.',
    exampleEn: 'Had the epidemiological models accurately anticipated the transmission rate, quarantine lockdowns would have been enforced much earlier.',
    exampleTr: 'Eğer epidemiyolojik modeller bulaşma hızını doğru tahmin etmiş olsaydı, karantina kısıtlamaları çok daha erken yürürlüğe konurdu.',
    examTrapTr: 'Cümle başında soru işareti yokken "Had the models anticipated..." görünce şaşırmayın; bu "If had V3" yapısının devrik halidir.'
  },
  {
    id: 'gr-31',
    category: 'Prepositions',
    ruleNumber: 31,
    titleTr: 'Engelleme / Mahrumiyet Fiilleri + From',
    formula: 'Prevent / Prohibit / Deter / Restrain / Discourage / Ban + FROM',
    explanationTr: 'Birini veya bir şeyi bir eylemi yapmaktan alıkoyma, engelleme veya caydırma bildiren akademik fiiller neredeyse istisnasız "from" alır.',
    exampleEn: 'Stringent export tariffs deterred domestic agribusinesses from selling unrefined grain to foreign brokers.',
    exampleTr: 'Katı ihracat tarifeleri, yerli tarım işletmelerini yabancı aracılara işlenmemiş tahıl satmaktan caydırdı.',
    examTrapTr: 'Prevent to do YANLIŞTIR. Doğrusu: prevent someone from doing something.'
  },
  {
    id: 'gr-32',
    category: 'Prepositions',
    ruleNumber: 32,
    titleTr: 'Sebep Olma / Yönelme Fiilleri + To',
    formula: 'Contribute to / Lead to / Pave the way for / Attribute to',
    explanationTr: 'Bir sonuca yol açma, katkıda bulunma veya sebep olarak gösterme fiilleri "to" edatıyla kullanılır.',
    exampleEn: 'Chronic sleep deprivation contributes significantly to insulin resistance and impaired metabolic homeostasis.',
    exampleTr: 'Kronik uykusuzluk, insülin direncine ve bozulmuş metabolik dengeye önemli ölçüde katkıda bulunur (yol açar).',
    examTrapTr: 'Contribute for YANLIŞTIR; daima "contribute to" kullanılır.'
  },
  {
    id: 'gr-33',
    category: 'Prepositions',
    ruleNumber: 33,
    titleTr: 'Bağlı Olma / Güvenme Fiilleri + On / Upon',
    formula: 'Rely on / Depend on / Count on / Rest on / Base on',
    explanationTr: 'Bir şeye dayanma, bağlı olma, güvenme veya esas alma fiilleri "on" veya "upon" edatıyla tamlanır.',
    exampleEn: 'Developing agrarian nations heavily rely on predictable monsoon rainfall for their annual harvest yields.',
    exampleTr: 'Gelişmekte olan tarım ülkeleri, yıllık hasat verimleri için büyük ölçüde öngörülebilir muson yağmurlarına güvenir (bağlıdır).',
    examTrapTr: 'Depend of YANLIŞTIR; "depend on" veya "depend upon" olmalıdır.'
  },
  {
    id: 'gr-34',
    category: 'Prepositions',
    ruleNumber: 34,
    titleTr: 'Eksiklik / Yoksunluk Sıfatları + Of',
    formula: 'Devoid of / Deprived of / Short of / Independent of / Innocent of',
    explanationTr: 'Bir özellikten, maddeden veya haktan yoksun olmayı belirten yapılar "of" edatını alır.',
    exampleEn: 'The lunar surface is virtually devoid of an atmosphere, exposing it to relentless bombardment by cosmic radiation.',
    exampleTr: 'Ay yüzeyi neredeyse tamamen atmosferden yoksundur ve bu da onu amansız kozmik radyasyon bombardımanına maruz bırakır.',
    examTrapTr: 'Devoid from çeldiricisi çok yaygındır; doğrusu "devoid of"tur.'
  },
  {
    id: 'gr-35',
    category: 'Prepositions',
    ruleNumber: 35,
    titleTr: 'Sorumluluk ve Uygunluk: In charge of / Responsible for',
    formula: 'In charge of | Responsible for | Accountable to/for | Suitable for',
    explanationTr: 'Yetki ve sorumluluk öbeklerinde "in charge OF" ve "responsible FOR" ayrımı çok sık test edilir.',
    exampleEn: 'The Chief Technology Officer was placed in charge of migrating legacy database systems to sovereign cloud infrastructure.',
    exampleTr: 'Teknoloji Genel Müdür Yardımcısı, eski veritabanı sistemlerinin egemen bulut altyapısına taşınmasından sorumlu kılındı.',
    examTrapTr: 'In charge for YANLIŞTIR; "in charge of" ve "take charge of" kalıptır.'
  },
  {
    id: 'gr-36',
    category: 'Exam Strategy',
    ruleNumber: 36,
    titleTr: 'Çeviri Sorularında Ana Yüklem Taktiki',
    formula: 'İlk Adım: Cümlenin Ana Fiilini (Main Verb) Bul ve Şıkları 2\'ye İndir',
    explanationTr: 'YDS/YDT çeviri sorularında cümlenin yüklemini belirlemek ve çekimini (etken/edilgen, past/present/future) eşleştirmek şıkların en az 3 tanesini 10 saniyede eler.',
    exampleEn: '"has played an indispensable role" -> "vazgeçilmez bir rol oynamıştır" (oynar veya oynamalıdır DEĞİL).',
    exampleTr: 'Yüklemin zaman ve çatı uyumu doğru çevirinin omurgasıdır.',
    examTrapTr: 'Yan cümleciğin fiilini ana cümlenin fiili gibi çeviren şıklar en tehlikeli tuzaktır.'
  },
  {
    id: 'gr-37',
    category: 'Exam Strategy',
    ruleNumber: 37,
    titleTr: 'Yakın Anlam (Restatement): Miktar ve Derece Korunumu',
    formula: 'All != Some | Must != May | Always != Frequently',
    explanationTr: 'Cümle eşdeğerinde verilen cümlenin anlam gücü zayıflatılamaz veya abartılamaz. Kesinlik (definite) olasılığa (probabilistic) dönüştürülemez.',
    exampleEn: 'If original has "crucial to some species", distractor will say "vital for all species" (Wrong: overgeneralization).',
    exampleTr: 'Asıl cümlede "bazı" varsa doğru cevapta "tüm / bütün" olamaz.',
    examTrapTr: 'Birebir aynı kelimeleri içeren şık genelde çeldiricidir; doğru cevap kelimeleri eşanlamlılarıyla değiştirir (synonym paraphrase).'
  },
  {
    id: 'gr-38',
    category: 'Exam Strategy',
    ruleNumber: 38,
    titleTr: 'Paragraf Tamamlama: Zamir ve Referans Köprüsü',
    formula: 'Boşluk Öncesi / Sonrası: this, that, these, such, it, they, former, latter',
    explanationTr: 'Boşluğun hemen sonrasındaki cümlede bir zamir varsa, aranan cümlenin sonu o zamirin işaret ettiği ismi içermek ZORUNDADIR.',
    exampleEn: 'Sentence before discusses ancient clay tablets; blank must link to "These inscribed artifacts reveal...".',
    exampleTr: 'Referans kelimeler paragraftaki mantıksal zinciri oluşturan kilit halkalardır.',
    examTrapTr: 'Kendi içinde kulağa çok mantıklı gelen ama önceki ve sonraki cümleyle zamir köprüsü kurmayan şıklar elenmelidir.'
  },
  {
    id: 'gr-39',
    category: 'Exam Strategy',
    ruleNumber: 39,
    titleTr: 'Anlam Bütünlüğünü Bozan Cümle: Ton ve Kapsam Kayması',
    formula: 'Genelden Özele Ani Sapma veya Öznede Alakasız Değişim',
    explanationTr: 'Paragraf bir teleskobun keşiflerini anlatırken araya giren cümle teleskopta kullanılan berilyum metalinin madencilik özelliklerinden bahsediyorsa, akışı bozan cümle odur.',
    exampleEn: 'All sentences discuss renewable solar adoption; intrusive sentence focuses on the chemical smelting of raw silicon ore.',
    exampleTr: 'Çeldirici cümle genellikle metindeki popüler bir kelimeyi alıp onun bambaşka bir yan konusunu anlatır.',
    examTrapTr: 'Kelimeye aldanmayın; o kelimenin cümlenin ana fikrine mi yoksa izole bir detaya mı hizmet ettiğini sorgulayın.'
  },
  {
    id: 'gr-40',
    category: 'Exam Strategy',
    ruleNumber: 40,
    titleTr: 'Reading: Aşırı Kesinlik Bildiren Şık Tuzağı (Absolute Statements)',
    formula: 'Beware: always, never, solely, exclusively, completely, all',
    explanationTr: 'ÖSYM reading sorularında metinde açıkça belirtilmedikçe aşırı uç (extreme/absolute) ifadeler içeren şıklar %90 yanlıştır. Akademik metinler genellikle temkinli dil kullanır.',
    exampleEn: 'Passage says "frequently observed in elderly patients"; distractor says "it exclusively affects geriatric populations" (Wrong).',
    exampleTr: 'Akademik dilde ihtiyatlı (hedging) ifadeler doğru şıklara işaret eder.',
    examTrapTr: 'Metinde geçen bir kelimeyi "solely" veya "never" ile birleştirip cazip hale getirirler.'
  },
  {
    id: 'gr-41',
    category: 'Exam Strategy',
    ruleNumber: 41,
    titleTr: 'Diyalog Tamamlama: Boşluğun Hemen Ardındaki Tepki',
    formula: 'İpucu = Boşluktan Sonraki Konuşmacının İlk İki Kelimesi',
    explanationTr: 'Diyalogda aranan ifadenin şifresi, sizden sonra konuşan kişinin tepkisindedir. Karşı taraf "I don\'t agree with that pessimistic outlook" diyorsa, cümleniz kötümser bir öngörü içermek zorundadır.',
    exampleEn: 'Speaker B says: "Actually, the statistics prove just the opposite." Speaker A must have asserted a negative misconception.',
    exampleTr: 'Cevap konuşmanın başına göre değil, gelen anlık cevaba göre belirlenir.',
    examTrapTr: 'Kendi içinde kibar veya mantıklı olan ama karşı tarafın yanıtını anlamsız kılan seçenekleri eleyin.'
  },
  {
    id: 'gr-42',
    category: 'Exam Strategy',
    ruleNumber: 42,
    titleTr: 'Cümle Tamamlama: Artı/Eksi Kutupluluk Taktiki',
    formula: 'Zıtlık Bağlacı Varsa: (+) Durum <---> (-) Durum',
    explanationTr: 'Although, while, whereas gibi zıtlık bağlaçlarında bir taraf olumlu bir yargı taşıyorsa diğer taraf olumsuz bir yargı taşımalıdır.',
    exampleEn: 'Although the new turbine operates at unprecedented efficiency (+), its capital manufacturing costs remain prohibitive (-).',
    exampleTr: 'Kutupluluk analizi cümlenin anlamına tam hakim olunamadığında bile doğru şıkkı buldurur.',
    examTrapTr: 'İki tarafı da olumlu veya iki tarafı da olumsuz yapıp zıtlık bağlacı koyan çeldiricilere dikkat edin.'
  },
  {
    id: 'gr-43',
    category: 'Exam Strategy',
    ruleNumber: 43,
    titleTr: 'Cloze Test: Boşluğun Sağını ve Solunu Birlikte Okuma',
    formula: 'Boşluk = [Sol Kelime] + ______ + [Sağ Kelime/Edat]',
    explanationTr: 'Cloze test sorularında boşluğun hemen sonrasındaki edat şıklardaki fiil veya sıfatın tek anahtarıdır. Metnin tamamını anlamaya çalışmadan önce collocation yapısını kontrol edin.',
    exampleEn: '"... played a key role ______ formulating the policy." -> in.',
    exampleTr: 'Boşluğun sağındaki edat doğrudan aranan cevabı verir.',
    examTrapTr: 'Sadece Türkçe düşünerek edat seçmeyin; İngilizce collocation kalıbına bakın.'
  },
  {
    id: 'gr-44',
    category: 'Exam Strategy',
    ruleNumber: 44,
    titleTr: 'Sınavda Turlama Tekniği (Two-Pass Strategy)',
    formula: '1. Tur: %100 Emin Olunan Sorular | 2. Tur: İşaretlenip Bırakılan Çelişkili Sorular',
    explanationTr: 'İlk turda takıldığınız bir soruya 1 dakikadan fazla harcamayın. Soru numarasının yanına küçük bir işaret koyup hızla ilerleyin.',
    exampleEn: 'Pass 1 clears 60 rapid points; Pass 2 solves the remaining 20 challenging questions with accumulated confidence.',
    exampleTr: 'Bir soruya takılıp 5 dakika harcamak sınavın geri kalanında 10 kolay sorunun süresini çalmaktır.',
    examTrapTr: '"Bu soruyu çözmeden geçmem" inatçılığı YDS/YDT\'de süre yetersizliğinin 1 numaralı nedenidir.'
  },
  {
    id: 'gr-45',
    category: 'Exam Strategy',
    ruleNumber: 45,
    titleTr: 'Zaman Dağılım Tablosu (YDS 180 dk / YDT 120 dk)',
    formula: 'Gramer & Kelime: Hızlı | Çeviri & Diyalog: Orta | Reading: Yüksek Odak',
    explanationTr: 'YDS\'de ilk 36 soruya en fazla 50 dakika, çeviri ve diyaloglara 30 dakika, 20 adet reading sorusuna en az 60 dakika ve kontrol turuna 20 dakika ayırın.',
    exampleEn: 'Strict time allocation prevents panic during the final 5 reading passages.',
    exampleTr: 'Reading metinlerini son 20 dakikaya sıkıştırmayın.',
    examTrapTr: 'İlk 20 soruya 1 saat harcayan aday, 20 okuma sorusunu aceleyle çözmek zorunda kalır ve en çok neti orada kaybeder.'
  },
  {
    id: 'gr-46',
    category: 'Exam Strategy',
    ruleNumber: 46,
    titleTr: 'Eşanlamlı Kelime (Synonym Paraphrasing) Prensibi',
    formula: 'Metindeki Kelime != Şıktaki Kelime (Eşanlamlısı Aranır)',
    explanationTr: 'ÖSYM sorularında doğru şık metindeki kelimelerin birebir kopyası olmaz; soyutlaştırılarak veya eşanlamlısı ile yeniden ifade edilir.',
    exampleEn: 'Text: "deteriorate swiftly" -> Answer: "experience rapid decline".',
    exampleTr: 'Metindeki ifadenin parafraze edilmiş halini arayın.',
    examTrapTr: 'Metindeki cümlenin aynısını kopyalayıp sonuna bir yanlış kelime ekleyen şıklar en klasik tuzaktır.'
  },
  {
    id: 'gr-47',
    category: 'Exam Strategy',
    ruleNumber: 47,
    titleTr: 'Yazarın Tutumu (Author\'s Tone) Soruları',
    formula: 'Parçanın Son Cümlelerindeki Sıfat ve Zarflara Odaklan',
    explanationTr: 'Yazarın tutumu sorulduğunda parçanın girişindeki tanımlara değil, yazarın kendi yorumunu kattığı son paragrafa bakın.',
    exampleEn: 'If author writes "it is prematurely optimistic to claim...", the tone is skeptical / critical.',
    exampleTr: 'Yazarın kendi değerlendirmesi son cümlelerdeki sıfat ve modal seçimlerinde açığa çıkar.',
    examTrapTr: 'Metindeki taraflardan birinin görüşünü yazarın kendi görüşü gibi algılamayın.'
  },
  {
    id: 'gr-48',
    category: 'Exam Strategy',
    ruleNumber: 48,
    titleTr: 'Bağlaçlarda Such As Örnekleme Kuralı',
    formula: 'General Category + such as + specific example 1, specific example 2',
    explanationTr: 'Such as genel bir kategoriden sonra spesifik örnekleri listelemek için kullanılır. Asla arkasından tam bir cümle almaz.',
    exampleEn: 'Endangered marine mammals, such as the North Atlantic right whale and the dugong, face imminent extinction.',
    exampleTr: 'Such as arkasından isim öbeği alır ve örnekler verir.',
    examTrapTr: 'Such as arkasına tam cümle koyarak for example gibi kullandıran şıklar yanlıştır.'
  },
  {
    id: 'gr-49',
    category: 'Exam Strategy',
    ruleNumber: 49,
    titleTr: 'İki Virgül Arası Ek Bilgi (Appositive Phrases)',
    formula: 'Subject, [extra information], Verb',
    explanationTr: 'Cümlenin öznesi ile fiili arasına giren iki virgül arası açıklama öbeğini paranteze alıp atın. Cümlenin iskeletini (özne ve yüklem) çıplak görün.',
    exampleEn: 'The ozone layer, a fragile shield of gas high above the stratosphere, protects terrestrial organisms from ultraviolet radiation.',
    exampleTr: 'Virgüller arasını zihinsel olarak çıkardığınızda özne doğrudan fiil ile eşleşir.',
    examTrapTr: 'Araya giren isimdeki çoğulluğa aldanıp tekil olan asıl öznenin fiilini çoğul seçme hatasına düşmeyin.'
  },
  {
    id: 'gr-50',
    category: 'Exam Strategy',
    ruleNumber: 50,
    titleTr: 'Sınavdan 1 Gün Önce ve Sınav Sabahı Kontrol Listesi',
    formula: 'Zihinsel Hazırlık + Belge Kontrolü + Beslenme & Uyku',
    explanationTr: 'Sınavdan bir gün önce ağır konu çalışması yapmayın; sadece formül ve bağlaç özetlerine göz atın. Sınav sabahı yüksek glisemik indeksli ağır yiyeceklerden kaçının.',
    exampleEn: 'Confidence and physiological readiness yield an immediate 5-10 point advantage.',
    exampleTr: 'Sınav giriş belgesi ve geçerli kimlik kartınızı akşamdan hazırlayın.',
    examTrapTr: 'Sınav gecesi sabahlamak odaklanma süresini yarı yarıya düşürür.'
  }
];

export const QUESTION_TYPE_GUIDES: QuestionTypeGuide[] = [
  {
    category: 'vocabulary',
    titleTr: '1. Kelime Bilgisi (Vocabulary)',
    questionCountYds: 6,
    timeAllocationMinutes: 6,
    howToSolveTr: [
      'Boşluğun bulunduğu cümlenin tamamını okuyun; boşluğun sağındaki ve solundaki kelimelere dikkat edin.',
      'Cümlenin anlamsal tonunu belirleyin: Cümle olumlu bir durumu mu, olumsuz bir durumu mu anlatıyor?',
      'Boşluğa gelecek kelimenin türünü (isim, fiil, sıfat, zarf, phrasal verb) belirleyin.',
      'Şıklardaki kelimelerin bildiğiniz eşanlamlılarını ve Türkçe karşılıklarını zihninizde tartın.',
      'Collocation (birlikte kullanılan kelimeler) uyumuna bakın.'
    ],
    fastTacticsTr: [
      'Boşluktan sonra to, into, of, from, with gibi bir edat varsa şıktaki phrasal verb veya fiilin o edatla kullanımını sorgulayın.',
      'Cümlede zıtlık bağlacı (although, but) varsa, zıt anlamlı kelimeye odaklanın.',
      'Cümledeki sıfatın veya zarfın yönüne bakın (+ veya -).'
    ],
    frequentMistakesTr: [
      'Cümlenin sadece boşluk olan kısmını okuyup ikinci yarısını okumamak.',
      'Benzer yazılışlı kelimeleri (örneğin: adapt / adopt) karıştırmak.',
      'Phrasal verb sorusunda sadece ana fiile odaklanıp edatı ihmal etmek.'
    ],
    distractorTypesTr: [
      'Zıt kutup çeldiricisi (cümle olumsuzken şıklara olumlu bir sıfat koyma).',
      'Yalancı eşanlamlı (aynı temaya ait ama bağlama uymayan kelime).',
      'Benzer harf dizilimi olan alakasız kelime.'
    ],
    miniExample: {
      stemEn: 'Due to severe prolonged drought across the sub-Saharan region, potable water has become extremely ----, forcing communities to migrate.',
      options: [
        { label: 'A', text: 'abundant' },
        { label: 'B', text: 'redundant' },
        { label: 'C', text: 'scarce' },
        { label: 'D', text: 'lucrative' },
        { label: 'E', text: 'indifferent' }
      ],
      correctAnswer: 'C',
      stepByStepSolutionTr: '1. İpucu: "Due to severe prolonged drought" (şiddetli uzun kuraklık yüzünden). 2. Sonuç: "forcing communities to migrate" (toplulukları göçe zorluyor). 3. Bu iki durum içme suyunun bol değil, "kıt/yetersiz" hale geldiğini gösterir. 4. "Scarce" (kıt, az bulunur) sıfatı doğrudan anlama oturur.',
      whyDistractorsFailTr: 'A (abundant: bol) kuraklıkla çelişir; B (redundant: gereksiz/fazla) ihtiyaç fazlasıdır; D (lucrative: kazançlı) ekonomik kârdır; E (indifferent: kayıtsız) suya uygulanamaz.'
    }
  },
  {
    category: 'grammar',
    titleTr: '2. Dil Bilgisi (Grammar & Tense)',
    questionCountYds: 10,
    timeAllocationMinutes: 10,
    howToSolveTr: [
      'Cümledeki zaman ifadelerini (in 1990, recently, by 2050, for decades) arayın.',
      'Zaman bağlaçlarının (when, while, before, since) kuralını hatırlayın.',
      'Etken / Edilgen (Active / Passive) ayrımını yapın.',
      'Tekil / Çoğul özne-yüklem uyumunu kontrol edin.'
    ],
    fastTacticsTr: [
      'Zaman bağlacının olduğu yan cümlecikte "will / would" olan şıkları hemen eleyin.',
      '"Since + V2" varsa ana cümlede mutlaka Present Perfect (have/has V3) arayın.',
      'Geçmişte net bir tarih varsa Simple Past (V2) zorunludur.'
    ],
    frequentMistakesTr: [
      'Geçmişe ait bir tarih gördüğünde hemen Past Perfect (had V3) seçmek.',
      'Edilgen yapıda "by" ipucunu kaçırmak.'
    ],
    distractorTypesTr: [
      'Zaman uyumsuzluğu (Present ile Past Perfect karıştırma).',
      'Gereksiz Future kullanımı.'
    ],
    miniExample: {
      stemEn: 'Ever since the groundbreaking discovery of penicillin in 1928, antibiotics ---- a central role in mitigating fatal infectious diseases.',
      options: [
        { label: 'A', text: 'had played' },
        { label: 'B', text: 'have played' },
        { label: 'C', text: 'were playing' },
        { label: 'D', text: 'will play' },
        { label: 'E', text: 'played' }
      ],
      correctAnswer: 'B',
      stepByStepSolutionTr: '"Ever since" kalıbı geçmişteki başlangıç noktasından günümüze kadar devam eden süreci anlatır. Bu kural gereği ana cümle Present Perfect (have played) olmak zorundadır.',
      whyDistractorsFailTr: 'A had played geçmişte tamamlanmış başka bir geçmiş öncesini anlatır; B doğru cevaptır; C ve E süreci değil geçmişte kalmış olayı anlatır; D gelecektir.'
    }
  },
  {
    category: 'cloze',
    titleTr: '3. Cloze Test',
    questionCountYds: 10,
    timeAllocationMinutes: 12,
    howToSolveTr: [
      'Paragrafı ilk olarak boşluklara takılmadan hızlıca okuyup ana fikrini anlayın.',
      'Her soru için boşluğun hem solundaki hem sağındaki kelimeleri birlikte değerlendirin.',
      'Bağlaç sorularında önceki cümle ile sonraki cümlenin anlamsal ilişkisine bakın.',
      'Edat sorularında boşluğun solundaki fiil veya sıfatın hangi edatla bağlandığını tespit edin.'
    ],
    fastTacticsTr: [
      'Boşluktan sonra gelen edat, şıklardaki 5 fiilden sadece biriyle kullanılır (collocation).',
      'Zıtlık bildiren geçiş zarfları genellikle noktalama işaretleriyle (; however,) gelir.'
    ],
    frequentMistakesTr: [
      'Paragrafın genel bağlamından kopup her boşluğu izole bir cümle gibi çözmeye çalışmak.',
      'Paragraf geçmiş zamanda yazılmışken aniden present tense seçmek.'
    ],
    distractorTypesTr: [
      'Paragrafın tonuna uymayan aşırı iddialı bağlaçlar.',
      'Yanlış edat eşleşmeleri.'
    ],
    miniExample: {
      stemEn: 'Marine scientists are increasingly concerned about coral reefs, ---- rising ocean temperatures have caused unprecedented bleaching events worldwide.',
      options: [
        { label: 'A', text: 'as' },
        { label: 'B', text: 'although' },
        { label: 'C', text: 'despite' },
        { label: 'D', text: 'unless' },
        { label: 'E', text: 'whereas' }
      ],
      correctAnswer: 'A',
      stepByStepSolutionTr: 'İlk kısım: Bilim insanları endişeli. İkinci kısım: Yükselen okyanus sıcaklıkları ağarmaya yol açtı. İkinci kısım birinci kısmın sebebidir. "As" burada "çünkü / -dığı için" anlamında sebep bağlacıdır.',
      whyDistractorsFailTr: 'B ve E zıtlık bağlacıdır; C isim alır ama burada tam cümle vardır; D olumsuz şarttır.'
    }
  },
  {
    category: 'sentence_completion',
    titleTr: '4. Cümle Tamamlama (Sentence Completion)',
    questionCountYds: 10,
    timeAllocationMinutes: 15,
    howToSolveTr: [
      'Verilen yarımdaki bağlacı (Although, Because, When, In order to) belirleyin.',
      'Özne takibi yapın: Yan cümledeki zamir ana cümledeki hangi isme karşılık geliyor?',
      'Tense uyumunu kontrol edin.',
      'Anlamsal mantığı ve kutupluluğu test edin (+ / - dengesi).'
    ],
    fastTacticsTr: [
      'Özne uyuşmazlığı olan şıkları hemen eleyin.',
      'Bağlaç zıtlık bildiriyorsa bir taraf olumlu bir taraf olumsuz olmalıdır.',
      'Zaman bağlacı varsa ana cümlede anlamlı bir zaman akışı olmalıdır.'
    ],
    frequentMistakesTr: [
      'Gramere odaklanıp mantık hatasını görmemek.',
      'Zıtlık bağlacı varken iki olumlu durumu birbirine bağlayan şıkkı seçmek.'
    ],
    distractorTypesTr: [
      'Zaman uyumu doğru ama öznesi alakasız şıklar.',
      'Sebep yerine sonuç getiren yanıltıcı seçenekler.'
    ],
    miniExample: {
      stemEn: 'Although the initial capital cost of installing commercial wind turbines is substantial, ----.',
      options: [
        { label: 'A', text: 'they produce harmful greenhouse emissions throughout their operating lifecycle' },
        { label: 'B', text: 'their long-term operational and fuel expenses are remarkably minimal' },
        { label: 'C', text: 'governments decided to ban wind farms due to aesthetic concerns' },
        { label: 'D', text: 'fossil fuels continue to receive higher subsidies worldwide' },
        { label: 'E', text: 'solar panels require substantially more maintenance than turbines' }
      ],
      correctAnswer: 'B',
      stepByStepSolutionTr: 'İlk kısım: Rüzgar türbinlerinin ilk kurulum maliyeti yüksek (-) [Although: zıtlık]. Aranan kısım olumlu (+) olmalı ve rüzgar türbinlerinin uzun vadeli faydasını açıklamalıdır. B şıkkı işletme maliyetlerinin çok düşük olduğunu belirterek kusursuz zıtlık oluşturur.',
      whyDistractorsFailTr: 'A şıkkı olumsuzdur ve bilimsel olarak yanlıştır; C alakasız bir yasak kararıdır; D ve E konuyu rüzgar türbinlerinden saptırır.'
    }
  },
  {
    category: 'translation',
    titleTr: '5. Çeviri (Translation)',
    questionCountYds: 6,
    timeAllocationMinutes: 8,
    howToSolveTr: [
      '1. Adım: Cümlenin ana yüklemini (fiilini) bulun ve Türkçe karşılığı ile zamanını eşleştirin.',
      '2. Adım: Cümlenin ana öznesini bulun.',
      '3. Adım: Yüklem veya öznesi uyuşmayan en az 3 şıkkı hızla eleyin.',
      '4. Adım: Kalan 2 şık arasında bağlaç ve sıfat tamlamalarını karşılaştırın.'
    ],
    fastTacticsTr: [
      'Yüklemi doğru bulmak soruyu %80 çözdürür. Örneğin "has been developed" -> "geliştirilmiştir".',
      'Aktif / Pasif çatıya dikkat edin.'
    ],
    frequentMistakesTr: [
      'Metni baştan sona kelime kelime çevirmeye çalışıp vakit kaybetmek.',
      'Yan cümlenin fiilini ana cümlenin fiili zannetmek.'
    ],
    distractorTypesTr: [
      'Etken cümleyi edilgen, edilgen cümleyi etken çeviren şıklar.',
      'Zaman kayması (Simple Past\'ı Present Continuous çevirme).'
    ],
    miniExample: {
      stemEn: 'Artificial intelligence algorithms have revolutionized medical imaging by detecting malignant tumors with unprecedented accuracy.',
      options: [
        { label: 'A', text: 'Yapay zeka algoritmaları, kötü huylu tümörleri eşi benzeri görülmemiş bir doğrulukla tespit ederek tıbbi görüntülemede devrim yaratmıştır.' },
        { label: 'B', text: 'Tıbbi görüntülemede devrim yaratan yapay zeka algoritmaları, kötü huylu tümörleri tespit edebilmektedir.' },
        { label: 'C', text: 'Yapay zeka algoritmaları tıbbi görüntülemeyi dönüştürmüş ve tümörleri doğru bir şekilde bulmuştur.' },
        { label: 'D', text: 'Kötü huylu tümörlerin doğru tespiti sayesinde tıbbi görüntülemede yapay zekaya ihtiyaç duyulmuştur.' },
        { label: 'E', text: 'Yapay zeka sayesinde hekimler kötü huylu tümörleri doğrulukla tespit etmiş ve devrim yapmıştır.' }
      ],
      correctAnswer: 'A',
      stepByStepSolutionTr: 'Ana özne: "Artificial intelligence algorithms" (Yapay zeka algoritmaları). Ana fiil: "have revolutionized" (devrim yaratmıştır). Zarf tümleci: "by detecting..." (tespit ederek). A şıkkı bu öge dizilimini eksiksiz yansıtır.',
      whyDistractorsFailTr: 'B şıkkında ana fiil tespit edebilmektedir yapılmıştır; C bağlacı ve yapmıştır; D özneyi değiştirmiştir; E hekimleri özne yapmıştır.'
    }
  },
  {
    category: 'reading',
    titleTr: '6. Okuma Parçaları (Reading Comprehension)',
    questionCountYds: 20,
    timeAllocationMinutes: 50,
    howToSolveTr: [
      'Metne geçmeden önce soru köklerini hızlıca tarayın.',
      'Metni aktif okuyun: İlk paragraf konuyu tanıtır, son paragraf sonucu ve yazarın tutumunu verir.',
      'Zıtlık bağlaçlarının, neden-sonuç ifadelerinin ve tarihlerin altını çizin.',
      'Soruyu çözerken iddiayı metindeki tam cümleye dayandırın.'
    ],
    fastTacticsTr: [
      'Aşırı genelleme yapan kelimeleri (always, exclusively, entirely, never) içeren şıklardan şüphelenin.',
      'Doğru cevap genellikle metindeki cümlenin eşanlamlı kelimelerle parafraze edilmiş halidir.',
      'Metinde geçmeyen ama genel kültür olarak doğru olan bilgiye aldanmayın; sadece metne sadık kalın.'
    ],
    frequentMistakesTr: [
      'Kendi kişisel yorumunu ve ön bilgisini metne katarak cevap vermek.',
      'Metindeki bir kelimenin aynısını şıkta görünce okumadan işaretlemek.'
    ],
    distractorTypesTr: [
      'Metinle doğrudan çelişen zıt şıklar.',
      'Doğru bilgi içeren ama sorulan soruyla alakası olmayan şıklar.'
    ],
    miniExample: {
      stemEn: 'According to the passage, the primary advantage of James Webb over Hubble is its ability to ----.',
      options: [
        { label: 'A', text: 'capture detailed infrared wavelengths from the most distant cosmic dawn' },
        { label: 'B', text: 'repair itself automatically when hardware malfunctions occur' },
        { label: 'C', text: 'travel directly to exoplanets within our galaxy' },
        { label: 'D', text: 'operate entirely without ground control communications' },
        { label: 'E', text: 'produce optical visible-light imagery identical to land-based observatories' }
      ],
      correctAnswer: 'A',
      stepByStepSolutionTr: 'Metinde James Webb\'in altın kaplama aynaları ve kızılötesi spektrometreleri sayesinde evrenin ilk galaksilerini inceleyebildiği belirtilmiştir. A şıkkı bunu "capture detailed infrared wavelengths from the most distant cosmic dawn" ifadesiyle doğrular.',
      whyDistractorsFailTr: 'B kendini onarma metinde yoktur; C gezegenlere seyahat etmez; D yer kontrolü olmadan çalışmaz; E yer gözlemevleriyle aynı değildir.'
    }
  },
  {
    category: 'dialogue',
    titleTr: '7. Diyalog Tamamlama (Dialogue Completion)',
    questionCountYds: 5,
    timeAllocationMinutes: 7,
    howToSolveTr: [
      'Diyaloğun geçtiği bağlamı, konuşmacıların kim olduğunu ve resmiyet derecesini belirleyin.',
      'Boşluğun HEMEN ARDINDAN gelen konuşmacının ilk tepkisine odaklanın.',
      'Eğer karşı taraf "I completely disagree" diyorsa, aranan cümle tartışmalı veya iddialı bir fikir olmalıdır.',
      'Eğer karşı taraf "Sure, here it is" diyorsa, aranan cümle bir nesne isteme veya rica olmalıdır.'
    ],
    fastTacticsTr: [
      'Soru-cevap uyumu: Karşıdaki kişi soruya mı cevap veriyor yoksa bir yoruma mı katılıyor?',
      'Zamirlere dikkat edin: İkinci kişi he, they veya that diyorsa, boşluktaki cümlede o kişi veya konu geçmelidir.'
    ],
    frequentMistakesTr: [
      'Diyaloğun sadece ilk cümlesini okuyup cevabı tahmin etmeye çalışmak.',
      'Kendi içinde çok kibar olan ama konuşmanın akışıyla ilgisiz bir şıkkı seçmek.'
    ],
    distractorTypesTr: [
      'Konu dışı nezaket cümleleri.',
      'Karşıdaki kişinin tepkisiyle tamamen çelişen alakasız argümanlar.'
    ],
    miniExample: {
      stemEn: 'Sarah: "Did you see the new environmental report on microplastics in freshwater sources?"\nDavid: "----"\nSarah: "Exactly! It showed that even remote alpine lakes contain significant concentrations of synthetic fibers."',
      options: [
        { label: 'A', text: 'Yes, and the findings are far more alarming than earlier estimates suggested.' },
        { label: 'B', text: 'No, I don\'t believe plastic pollution is a real issue today.' },
        { label: 'C', text: 'I bought a new stainless steel water bottle yesterday.' },
        { label: 'D', text: 'Alpine lakes are famous for their tourist resorts.' },
        { label: 'E', text: 'Who funded that scientific study in the first place?' }
      ],
      correctAnswer: 'A',
      stepByStepSolutionTr: 'Sarah\'nın son cümlesi "Exactly! It showed that..." diyerek David\'in raporun ciddiyeti hakkındaki yorumunu onaylamaktadır. David\'in "Yes, and the findings are far more alarming..." demesi Sarah\'nın onayına kusursuz zemin hazırlar.',
      whyDistractorsFailTr: 'B şıkkında David inanmıyorum derse Sarah Exactly diyemez; C su şişesi alakasızdır; D turizm konudan sapmadır; E soru sorarsa Exactly denmez.'
    }
  },
  {
    category: 'restatement',
    titleTr: '8. Yakın Anlamlı Cümle (Restatement)',
    questionCountYds: 4,
    timeAllocationMinutes: 8,
    howToSolveTr: [
      'Orijinal cümlenin ana fikrini, bağlaçlarını ve modallarını analiz edin.',
      'Miktar belirteçlerine dikkat edin: all, some, few, most, none.',
      'Kesinlik derecesini kontrol edin: must, may, could, will, should.',
      'Orijinal cümlede olmayan bir iddiayı veya yargıyı ekleyen şıkları derhal eleyin.'
    ],
    fastTacticsTr: [
      'Orijinal cümledeki zıtlık bağlacı varsa, doğru şıkta da bir zıtlık bağlacı veya olumsuzluk aranmalıdır.',
      'Birebir aynı kelimelerin geçtiği şıklar çoğunlukla tuzaktır; doğru cevap eşanlamlı (paraphrase) kelimelerle kurulur.'
    ],
    frequentMistakesTr: [
      'Anlamı genişleten veya daraltan seçenekleri doğru kabul etmek.',
      'Koşul cümlesini kesin bir sonuca dönüştüren şıkkı seçmek.'
    ],
    distractorTypesTr: [
      'Aşırı genelleme çeldiricisi (some -> all).',
      'Modal kayması (might have -> definitely did).'
    ],
    miniExample: {
      stemEn: 'Had the government implemented strict emission caps earlier, the current air quality crisis in industrial zones could have been avoided.',
      options: [
        { label: 'A', text: 'The government will introduce emission caps soon to resolve the air quality crisis in industrial regions.' },
        { label: 'B', text: 'Because the government failed to enforce emission limits in time, industrial zones are now experiencing an air quality crisis.' },
        { label: 'C', text: 'Strict emission caps were introduced by the government, but they failed to improve industrial air quality.' },
        { label: 'D', text: 'Air quality in industrial zones has always been poor, regardless of government emission policies.' },
        { label: 'E', text: 'The government avoided the crisis by implementing emission standards ahead of schedule.' }
      ],
      correctAnswer: 'B',
      stepByStepSolutionTr: 'Orijinal cümle Type 3 Conditional yapısındadır: Hükümet kısıtlamaları erken uygulamış olsaydı kriz önlenebilirdi (yani hükümet kısıtlamaları vaktinde uygulamadı ve bu yüzden kriz ortaya çıktı). B şıkkı bu neden-sonuç gerçeğini tam olarak ifade eder.',
      whyDistractorsFailTr: 'A geleceğe yöneliktir; C kısıtlamaların getirildiğini söyler (oysa getirilmedi); D politikalardan bağımsız der; E krizin önlendiğini iddia eder.'
    }
  },
  {
    category: 'paragraph_completion',
    titleTr: '9. Paragraf Tamamlama (Paragraph Completion)',
    questionCountYds: 4,
    timeAllocationMinutes: 8,
    howToSolveTr: [
      'Boşluktan önceki cümleyi ve boşluktan sonraki cümleyi çok dikkatli okuyun.',
      'Boşluktan hemen sonra gelen referans kelimelere (this, that, these, such, it, they) odaklanın.',
      'Paragrafın kronolojik veya mantıksal akışını takip edin.',
      'Aranan cümlenin bir önceki cümlenin doğal devamı ve bir sonraki cümlenin hazırlayıcısı olduğunu unutmayın.'
    ],
    fastTacticsTr: [
      'Boşluktan sonra For instance / For example geliyorsa, aranan cümle o örneğin ait olduğu genel kural veya kategoridir.',
      'Boşluktan sonra However geliyorsa, aranan cümle o zıtlığın başlangıç tezidir.'
    ],
    frequentMistakesTr: [
      'Sadece boşluktan önceki cümleye bakıp sonrasını okumamak.',
      'Paragrafta hiç bahsedilmeyen yepyeni bir konuya giren şıkkı seçmek.'
    ],
    distractorTypesTr: [
      'Paragrafın ana konusuyla ilgili olan ama o boşluğa değil başka bir paragrafa ait olabilecek şıklar.',
      'Zamir referansını bozan cümleler.'
    ],
    miniExample: {
      stemEn: 'Throughout evolutionary history, cephalopods such as octopuses and squids have developed sophisticated camouflage capabilities. ----. Specialized pigment cells called chromatophores expand and contract rapidly, allowing the animal to blend seamlessly into rocky coral reefs within milliseconds.',
      options: [
        { label: 'A', text: 'They achieve this visual deception through a remarkable cellular mechanism in their skin' },
        { label: 'B', text: 'Cephalopods are among the most popular delicacies in coastal Mediterranean cuisine' },
        { label: 'C', text: 'Most marine vertebrates rely exclusively on bioluminescence for hunting in the deep sea' },
        { label: 'D', text: 'Fossil records show that ancient ammonites possessed rigid spiral shells' },
        { label: 'E', text: 'Marine biologists have stopped studying camouflage due to lack of funding' }
      ],
      correctAnswer: 'A',
      stepByStepSolutionTr: 'Boşluktan önceki cümle: Ahtapotların gelişmiş kamuflaj yetenekleri geliştirdiğini söyler. Boşluktan sonraki cümle: Kromatofor adlı pigment hücrelerinin deride nasıl çalıştığını açıklar. A şıkkı ("Bu görsel aldatmacayı derilerindeki olağanüstü hücresel mekanizma ile başarırlar") iki cümle arasındaki kusursuz köprüdür.',
      whyDistractorsFailTr: 'B mutfak ve yemek konusuna sapar; C omurgalılardan bahseder; D fosillerden bahseder; E fon kesintisinden bahseder.'
    }
  },
  {
    category: 'irrelevant_sentence',
    titleTr: '10. Anlam Bütünlüğünü Bozan Cümle (Irrelevant Sentence)',
    questionCountYds: 5,
    timeAllocationMinutes: 8,
    howToSolveTr: [
      'Tüm 5 cümleyi birbiri ardına kesintisiz okuyun ve paragrafın ortak konusunu tek bir cümleyle özetleyin.',
      'Hangi cümlenin bu ortak konudan saptığını veya konuyu alakasız bir detayına çektiğini tespit edin.',
      'Şüphelendiğiniz cümleyi parmakla kapatıp bir önceki cümle ile bir sonraki cümlenin birbirine bağlanıp bağlanmadığını kontrol edin.',
      'Eğer 3\'ü çıkardığınızda 2 doğrudan 4\'e akıyorsa, cevap kesinlikle 3\'tür.'
    ],
    fastTacticsTr: [
      'Kelime benzerliğine kanmayın! Akışı bozan cümle genelde metindeki bir kelimeye takılıp o kelimenin alakasız bir özelliğini anlatır.',
      'Zamir kopukluğu: Bir cümle "These innovations" diyorsa, önceki cümlede inovasyonlar sayılmalıdır; aradaki cümle başka şeyden bahsediyorsa o bozucudur.'
    ],
    frequentMistakesTr: [
      'İlk cümlenin asla yanlış olamayacağını düşünmek.',
      'Bilimsel olarak doğru bir bilgi içeren cümlenin akışı bozamayacağını zannetmek.'
    ],
    distractorTypesTr: [
      'Aynı teknik terimi kullanan ama konuyu bambaşka bir sektöre çeken cümleler.',
      'Genel ton övgü iken aniden yersiz bir eleştiriye geçen cümle.'
    ],
    miniExample: {
      stemEn: '(I) The James Webb Space Telescope has revolutionized our understanding of the early universe by capturing infrared light from galaxies formed over 13 billion years ago. (II) Its massive gold-coated beryllium mirror enables unprecedented sensitivity to faint cosmic wavelengths. (III) In addition, its advanced spectrographs can analyze the atmospheric chemical composition of transiting exoplanets. (IV) Beryllium is a relatively rare metallic element that is frequently alloyed with copper for aerospace tooling. (V) Together, these cutting-edge capabilities are providing astronomers with unprecedented insight into star formation and cosmic evolution.',
      options: [
        { label: 'A', text: 'I' },
        { label: 'B', text: 'II' },
        { label: 'C', text: 'III' },
        { label: 'D', text: 'IV' },
        { label: 'E', text: 'V' }
      ],
      correctAnswer: 'D',
      stepByStepSolutionTr: 'I, II, III ve V numaralı cümleler James Webb Uzay Teleskobunun gökbilimsel kabiliyetlerini anlatmaktadır. Cümle V\'teki "these cutting-edge capabilities" ifadesi doğrudan II ve III\'teki optik ve spektroskopik güçlere atıfta bulunur. IV numaralı cümle ise teleskobun işlevinden tamamen koparak berilyum metalinin madencilik ve alaşım özelliklerine sapmıştır.',
      whyDistractorsFailTr: 'I ana konuyu başlatır; II aynanın teleskoba kattığı gücü anlatır; III spektrografları ekler; V sonuçlandırır. D aradaki alakasız teknik detaydır.'
    }
  },
  {
    category: 'connector',
    titleTr: '11. Bağlaçlar & Conjunctions',
    questionCountYds: 6,
    timeAllocationMinutes: 6,
    howToSolveTr: [
      'İki cümlenin veya öbeğin arasındaki mantıksal ilişkiyi bulun (Zıtlık, Sebep-Sonuç, Koşul, Amaç, Ekleme).',
      'Boşluktan sonra tam cümle mi yoksa isim tamlaması / V-ing mi geldiğine bakın.',
      'Zıtlık bağlaçlarında (+/-) kutup analizi yapın.'
    ],
    fastTacticsTr: [
      'Although tam cümle alır, Despite isim alır.',
      'Because tam cümle alır, Due to isim alır.',
      'So that tam cümle ve modal alır, In order to yalın fiil alır.'
    ],
    frequentMistakesTr: [
      'İsim öbeği varken tam cümle alan bağlacı işaretlemek.',
      'İki bağımsız cümleyi sadece virgülle bağlayan yerde geçiş zarfı seçmek.'
    ],
    distractorTypesTr: [
      'Sentaksı uymayan eşanlamlı bağlaçlar.',
      'Ters kutup bağlaçları.'
    ],
    miniExample: {
      stemEn: '---- intense geopolitical friction and supply chain sanctions, multinational semiconductor firms posted record profits.',
      options: [
        { label: 'A', text: 'Despite' },
        { label: 'B', text: 'Although' },
        { label: 'C', text: 'Because' },
        { label: 'D', text: 'Unless' },
        { label: 'E', text: 'Since' }
      ],
      correctAnswer: 'A',
      stepByStepSolutionTr: 'Boşluktan sonra isim tamlaması vardır (yüklem yoktur). İkinci kısım ise şirketlerin rekor kâr elde ettiğini söyleyerek zıtlık bildirir. İsim tamlamasıyla zıtlık kuran tek edat "Despite"tır.',
      whyDistractorsFailTr: 'B, C, D ve E arkalarından mutlaka tam cümle almak zorundadır.'
    }
  },
  {
    category: 'preposition',
    titleTr: '12. Edatlar & Prepositions',
    questionCountYds: 4,
    timeAllocationMinutes: 4,
    howToSolveTr: [
      'Boşluğun solundaki kelimenin bağımlı edatını hatırlayın.',
      'Sıfat edatları: interested in, responsible for, capable of, aware of.',
      'Fiil edatları: contribute to, rely on, prevent from, suffer from.',
      'Zaman ve mekan edatları: in 2020, at night, on Monday, throughout history.'
    ],
    fastTacticsTr: [
      'Prevent, deter, discourage, stop fiillerini görünce "FROM" arayın.',
      'Contribute, lead, point, adapt fiillerini görünce "TO" arayın.'
    ],
    frequentMistakesTr: [
      'Türkçe düşünerek edat seçmek.',
      'Çift edatlı sorularda sadece birinciye odaklanıp ikinciyi kontrol etmemek.'
    ],
    distractorTypesTr: [
      'Türkçe çeviriyle mantıklı gelen ama İngilizcede olmayan edat kombinasyonları.'
    ],
    miniExample: {
      stemEn: 'Prolonged exposure ---- ultraviolet solar radiation substantially increases susceptibility ---- malignant melanoma.',
      options: [
        { label: 'A', text: 'to / to' },
        { label: 'B', text: 'with / of' },
        { label: 'C', text: 'for / in' },
        { label: 'D', text: 'from / by' },
        { label: 'E', text: 'at / for' }
      ],
      correctAnswer: 'A',
      stepByStepSolutionTr: '"Exposure TO something" ve "Susceptibility TO something" kalıptır. Her iki boşluğa da "to" gelir.',
      whyDistractorsFailTr: 'Diğer tüm şıklardaki edatlar bu iki akademik isimle collocation oluşturmaz.'
    }
  },
  {
    category: 'tense',
    titleTr: '13. Zamanlar & Tense Harmony',
    questionCountYds: 4,
    timeAllocationMinutes: 4,
    howToSolveTr: [
      'Cümle genel bir bilimsel gerçeği mi anlatıyor yoksa geçmişteki bir olayı mı?',
      'Zaman bağlaçlarının iki tarafındaki zaman uyumunu denetleyin.',
      'By the time, until, since, after gibi anahtarları tespit edin.'
    ],
    fastTacticsTr: [
      'Ana cümle ile yan cümle arasında Present-Past uçurumu olamaz.',
      'Geçmişte iki olay varsa ve biri diğerinden önce bitmişse önce biten mutlaka had + V3 alır.'
    ],
    frequentMistakesTr: [
      'Tek başına duran cümleye geçmiş zaman ifadesi olmadan had + V3 getirmek.',
      'By + gelecek yıl ifadesini görüp will V1 seçmek.'
    ],
    distractorTypesTr: [
      'Present ile Past Perfect\'i birleştiren zamansal uyumsuzluk tuzakları.'
    ],
    miniExample: {
      stemEn: 'By the time international regulators ---- strict carbon limits in 2030, global investments in clean energy ---- two trillion dollars.',
      options: [
        { label: 'A', text: 'enforce / will have exceeded' },
        { label: 'B', text: 'enforced / had exceeded' },
        { label: 'C', text: 'will enforce / exceeds' },
        { label: 'D', text: 'enforce / exceeded' },
        { label: 'E', text: 'are enforcing / has exceeded' }
      ],
      correctAnswer: 'A',
      stepByStepSolutionTr: '"By the time" yan cümlesine gelecek zaman için Present Simple (enforce), ana cümleye ise Future Perfect (will have exceeded) gelir.',
      whyDistractorsFailTr: 'B geçmişe aittir; C zaman bağlacı içine will koyar; D ve E zaman uyumsuzdur.'
    }
  },
  {
    category: 'relative_clause',
    titleTr: '14. İlgi Cümlecikleri (Relative Clauses)',
    questionCountYds: 4,
    timeAllocationMinutes: 4,
    howToSolveTr: [
      'Boşluğun solundaki ismin ne olduğunu tespit edin.',
      'Boşluğun solunda virgül olup olmadığına bakın (virgül varsa that elenir).',
      'Boşluğun solunda edat olup olmadığına bakın (prep + whom/which kalır).',
      'Boşluğun sağındaki yapının tam cümle mi eksik cümle mi olduğuna bakın.'
    ],
    fastTacticsTr: [
      'Boşluğun solunda virgül varsa şıklardaki tüm "that" seçeneklerini eleyin.',
      'Boşluktan sonra articlesiz isim geliyorsa derhal "whose" kontrolü yapın.',
      'Yer ismi arkasından tam cümle ve eylem geliyorsa "where", eksik cümle geliyorsa "which" seçin.'
    ],
    frequentMistakesTr: [
      'Her yer isminden sonra düşünmeden where getirmek.',
      'Whose ile who\'s ayrımını karıştırmak.'
    ],
    distractorTypesTr: [
      'Virgülden sonra kullanılan yanıltıcı "that".',
      'Edattan sonra kullanılan "who".'
    ],
    miniExample: {
      stemEn: 'The international particle accelerator, ---- construction took over fifteen years, has finally validated the theoretical mass of the Higgs boson.',
      options: [
        { label: 'A', text: 'whose' },
        { label: 'B', text: 'which' },
        { label: 'C', text: 'that' },
        { label: 'D', text: 'where' },
        { label: 'E', text: 'whom' }
      ],
      correctAnswer: 'A',
      stepByStepSolutionTr: 'Boşluktan sonra "construction" (inşaat) ismi yalın olarak gelmiştir: "inşaatı 15 yıldan uzun süren parçacık hızlandırıcı". Sahiplik ilişkisi kuran tek zamir "whose"dur.',
      whyDistractorsFailTr: 'B which construction dilbilgisel değildir; C virgülden sonra that gelemez; D where yer ve tam cümle ister; E insan içindir.'
    }
  },
  {
    category: 'modal',
    titleTr: '15. Modallar & Anlam (Modals & Meaning)',
    questionCountYds: 4,
    timeAllocationMinutes: 4,
    howToSolveTr: [
      'Cümlenin zamanını belirleyin: Şimdiki/genel zaman mı yoksa geçmiş zaman mı?',
      'Anlamın derecesini belirleyin: Kesinlik mi, olasılık mı, pişmanlık mı?',
      'İpucu cümlelere bakın: İpucu kesin bir kanıt sunuyorsa güçlü çıkarım seçilir.'
    ],
    fastTacticsTr: [
      'Geçmiş zaman bağlamında seçeneklerdeki V1\'li modalları eleyin, "have + V3" arayın.',
      'Bir olayın gerçekleşmesinin imkansız olduğunu gösteren kanıt varsa tek cevap "can\'t/couldn\'t have V3"tür.'
    ],
    frequentMistakesTr: [
      'Must have V3\'ü zorunluluk zannetmek (Must have V3 yüksek kesinlikli çıkarımdır).',
      'Should have V3 yapısının olayın gerçekleşmediği anlamına geldiğini unutmak.'
    ],
    distractorTypesTr: [
      'Zaman kayması (geçmiş olaya present modal koyma).',
      'İmkansızlık yerine zayıf ihtimal koyma.'
    ],
    miniExample: {
      stemEn: 'Given that the ancient citadel\'s outer ramparts were completely carbonized, archaeologists conclude that an inferno ---- the settlement during the siege.',
      options: [
        { label: 'A', text: 'must have devastated' },
        { label: 'B', text: 'should devastate' },
        { label: 'C', text: 'might devastate' },
        { label: 'D', text: 'needn\'t have devastated' },
        { label: 'E', text: 'would rather devastate' }
      ],
      correctAnswer: 'A',
      stepByStepSolutionTr: '"were completely carbonized" fiziksel ve kesin bir kanıttır. Kuşatma sırasında büyük bir yangının yerleşimi yerle bir etmiş olması gerektiği sonucuna varılır (%95 kesin çıkarım: "must have devastated").',
      whyDistractorsFailTr: 'B, C ve E geçmiş zaman değildir; D gerek yoktu ama yaptı demektir.'
    }
  }
];

export const EXAM_STRATEGIES: ExamStrategyItem[] = [
  {
    id: 'strat-1',
    titleTr: 'Sınavda Tavsiye Edilen Soru Çözme Sırası',
    descriptionTr: 'YDS/YDT\'de 1. sorudan başlayıp 80. soruya kadar doğrusal gitmek bilişsel yorgunluğu artırır ve en yüksek net getiren kolay bölümlerin süresiz kalmasına yol açabilir.',
    actionPointsTr: [
      '1. Aşama (0-40. dk): Kelime (1-6) ve Gramer (7-16) ile başlayın. Zihniniz tazeyken kuralları hızla uygulayın.',
      '2. Aşama (40-65. dk): Çeviri Soruları (37-42) ve Diyalog Tamamlama (63-67). Bu bölümler en yüksek net getiren net kazanç alanlarıdır.',
      '3. Aşama (65-95. dk): Cümle Tamamlama (27-36), Cloze Test (17-26) ve Anlamı Bozan Cümle (76-80).',
      '4. Aşama (95-155. dk): Okuma Parçaları (43-62) ve Paragraf Tamamlama (72-75). Kalan geniş 60 dakikayı 5 metne eşit bölün.',
      '5. Aşama (155-180. dk): Turlama turu. Şüpheli soruların nihai kararı ve optik form kontrolü.'
    ],
    badge: 'Taktik Sıralama'
  },
  {
    id: 'strat-2',
    titleTr: 'ÖSYM Çeldirici Şık Tipleri ve Korunma Rehberi',
    descriptionTr: 'ÖSYM soru hazırlama komisyonu yanlış şıkları rastgele yazmaz; her yanlış şık belirli bir bilişsel yanıltma şablonuna göre üretilir.',
    actionPointsTr: [
      'Aşırı Genelleme Tuzağı: Parçada "çoğunlukla" (mostly) denirken şıkta "daima/yalnızca" (always, solely) yazılır.',
      'Zıt Anlam Tuzağı: Cümledeki olumlu sıfatı şıkta olumsuz zıddıyla verir.',
      'Doğru Bilgi / Alakasız Cevap: Şıktaki cümle genel kültür olarak %100 doğrudur ancak metinde geçmiyordur veya sorulan soruyla alakası yoktur.',
      'Kelime Oyunu: Metinde geçen havalı bir teknik terimi alıp arkasına uydurma bir iddia bağlarlar.',
      'Yarım Doğru Tuzağı: Şıkkın ilk yarısı metinle birebir uyumludur ancak son iki kelimesi anlamı tamamen tersine çevirir.'
    ],
    badge: 'Çeldirici Analizi'
  },
  {
    id: 'strat-3',
    titleTr: 'Sınav Günü ve Son 24 Saat Kontrol Listesi',
    descriptionTr: 'Zihinsel ve fizyolojik hazırlık sınavdaki gerçek performansınızı doğrudan belirler.',
    actionPointsTr: [
      'Son gün saat 18:00\'den sonra soru çözmeyi bırakın, sadece zihninizi dinlendirin.',
      'ÖSYM Sınav Giriş Belgesi ve T.C. Kimlik Kartınızı şeffaf bir dosyaya koyun.',
      'Sınav sabahı alışık olmadığınız ağır veya fazla şekerli gıdalar tüketmeyin.',
      'Sınav salonuna en az 1 saat önce varın; 15 dakika kuralı gereği saat 10:00\'dan sonra bina kapıları kapatılır.',
      'Optik forma kodlamayı asla son 5 dakikaya bırakmayın; sayfa sayfa veya bölüm bölüm kodlayın.'
    ],
    badge: 'Kontrol Listesi'
  }
];

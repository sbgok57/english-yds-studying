export interface GrammarSection {
  heading: string;
  explanation: string;
  formula: string;
  memoryCode: string;
  examples: { en: string; tr: string }[];
  visualHint: string;
}

export interface GrammarQuestion {
  id: number;
  text: string;
  options: string[];
  correct: "A" | "B" | "C" | "D" | "E";
  explanation: string;
  memoryCode?: string;
}

export interface GrammarTopic {
  slug: string;
  title: string;
  emoji: string;
  colorTheme: string;
  simpleSummary: string;
  sections: GrammarSection[];
  trapAlerts: string[];
  signalWords: string[];
  questionCount: number;
  practiceQuestions: GrammarQuestion[];
}

export const GRAMMAR_TOPICS: GrammarTopic[] = [
  {
    slug: "tenses",
    title: "Tenses & Time Harmony (Zamanlar ve Zaman Uyumu)",
    emoji: "⏳",
    colorTheme: "from-purple-600 via-indigo-600 to-blue-600",
    simpleSummary: "Zaman uyumu altın kuraldır: Cümlenin bir tarafı Present ise diğer tarafı da Present/Future ailesinden olmalıdır!",
    sections: [
      {
        heading: "Köprü Zamanı: Present Perfect Tense",
        explanation: "Present Perfect (have/has V3), geçmişte başlayan ve etkisi, sonucu ya da devamlılığı ŞU AN devam eden olayların zaman köprüsüdür.",
        formula: "[Özne] + have / has + [V3 / Past Participle]",
        memoryCode: "🧠 KOD: 'have/has bir elini düne, diğer elini bugüne uzatır!' — 'since' gördüğünde ana cümlede have/has ara.",
        examples: [
          { en: "Scientists have discovered a new mechanism to repair DNA.", tr: "Bilim insanları DNA'yı onaran yeni bir mekanizma keşfettiler (ve bu keşif şu an geçerli)." },
          { en: "The company has expanded rapidly since 2018.", tr: "Şirket 2018'den beri hızla büyüdü (ve hâlâ büyüyor)." },
        ],
        visualHint: "Animasyon: Geçmiş dağından şimdiki zaman dağına uzanan ışıklı altın bir köprü.",
      },
      {
        heading: "Zaman Uyumu (Time Harmony) Matrisi",
        explanation: "YDS'de yan cümle ile ana cümle arasında kural olarak Present-Present veya Past-Past uyumu aranır. Tek istisna 'SINCE' kuralıdır: Since + V2, have/has V3.",
        formula: "Since + [Simple Past / V2] , [Özne] + have/has V3",
        memoryCode: "🧠 KOD: 'S-P-P kuralı: Since Past, gerisi Perfect!' Asla şaşmaz!",
        examples: [
          { en: "Ever since she moved abroad, we have stayed in touch.", tr: "Yurt dışına taşındığından beri iletişimde kaldık." },
        ],
        visualHint: "Kırmızı bir uyarı ışığı: 'Past ile Present evlenemez, nikahı sadece Since kıyar!'",
      },
    ],
    trapAlerts: [
      "⚠️ 'ago' veya net geçmiş tarih (in 1990) gördüğünde ASLA have/has V3 seçme! Cevap kesinlikle Simple Past (V2)'dir.",
      "⚠️ 'by the time + V2' gelirse ana cümlede mutlaka 'had V3' ara; 'by the time + V1' gelirse 'will have V3' ara.",
    ],
    signalWords: ["since", "for", "recently", "lately", "so far", "by the time", "already", "yet", "ever since"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "Ever since the global treaty _____ into effect in 2015, renewable energy investments _____ exponentially worldwide.",
        options: ["came / have grown", "comes / grew", "had come / grow", "has come / had grown", "came / will grow"],
        correct: "A",
        explanation: "Since kuralı: 'Since + V2 (came), have/has V3 (have grown)'. 2015 geçmiş bir nokta zaman olduğu için came, ana cümle ise have grown olmalıdır.",
        memoryCode: "Since Past, gerisi Perfect!",
      },
      {
        id: 2,
        text: "By the time the rescue team _____ the remote valley, the storm _____ completely.",
        options: ["reached / had stopped", "reaches / stopped", "had reached / was stopping", "reached / stops", "will reach / had stopped"],
        correct: "A",
        explanation: "'By the time + Past (reached)' yan cümlesi geçmişte bir eşik belirtir. O eşikten önce tamamlanan eylem 'Past Perfect (had stopped)' gerektirir.",
        memoryCode: "By the time V2 → had V3!",
      },
    ],
  },
  {
    slug: "modals",
    title: "Modals & Past Modals (Kiplikler ve Geçmiş Çıkarımlar)",
    emoji: "🎯",
    colorTheme: "from-blue-600 via-cyan-600 to-teal-600",
    simpleSummary: "Past modallar (must have V3, should have V3, couldn't have V3) geçmişe yönelik tahmin ve pişmanlıkları kodlar!",
    sections: [
      {
        heading: "Geçmiş Çıkarım: Must have V3 vs Can't have V3",
        explanation: "'Must have V3' geçmişe dönük %99 güçlü olumlu tahmin ('yapmış olmalı'); 'Can't have V3' ise %99 güçlü olumsuz tahmin ('yapmış olamaz') ifade eder.",
        formula: "[Must have + V3] = Kesin yapmıştır | [Can't / Couldn't have + V3] = Kesinlikle yapmamıştır",
        memoryCode: "🧠 KOD: 'Dedektif Büyüteci': Kanıt varsa must have V3, imkansızlık varsa can't have V3!",
        examples: [
          { en: "The ground is completely wet; it must have rained heavily last night.", tr: "Yer tamamen ıslak; dün gece şiddetle yağmış olmalı." },
          { en: "He can't have committed the robbery; he was abroad at the time.", tr: "Soygunu o yapmış olamaz; o sırada yurt dışındaydı." },
        ],
        visualHint: "Dedektif büyüteciyle ıslak zemindeki ayak izlerini inceleyen bilge bir karakter.",
      },
      {
        heading: "Pişmanlık ve Eleştiri: Should have V3",
        explanation: "'Should have V3' yapılması gerekirdi ama yapılmadı anlamına gelir. YDS'de pişmanlık ve eleştiri cümlelerinde sıkça sorulur.",
        formula: "[Özne] + should have + [V3] (Yapmalıydın ama yapmadın!)",
        memoryCode: "🧠 KOD: 'Tüh be kuralı': Ah keşke yapsaydın ama tren kaçtı!",
        examples: [
          { en: "You should have checked the oil level before embarking on such a long journey.", tr: "Böyle uzun bir yola çıkmadan önce yağ seviyesini kontrol etmeliydin." },
        ],
        visualHint: "Kafasını tutarak 'Ah keşke!' diyen sevimli bir astronot görseli.",
      },
    ],
    trapAlerts: [
      "⚠️ 'must have V3' asla zorunluluk ('yapmak zorundaydı') değildir! Zorunluluk için 'had to V1' kullanılır.",
      "⚠️ 'needn't have V3' = 'yaptı ama boşuna yaptı gerek yoktu'; 'didn't need to V1' = 'gerek yoktu ve yapmadı'.",
    ],
    signalWords: ["must have V3", "can't have V3", "should have V3", "could have V3", "might have V3", "needn't have V3"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "The ancient library was guarded night and day; therefore, the thieves _____ inside without insider assistance.",
        options: ["couldn't have broken", "must have broken", "should have broken", "might break", "needn't have broken"],
        correct: "A",
        explanation: "Kütüphane gece gündüz korunuyordu, dolayısıyla içeriden yardım almadan içeri 'girmiş olamazlar' (olumsuz güçlü çıkarım).",
        memoryCode: "İmkansızlık dedektifi = couldn't have V3!",
      },
    ],
  },
  {
    slug: "conditionals",
    title: "Conditionals & Inversion (Koşul Cümleleri ve Devriklik)",
    emoji: "⚡",
    colorTheme: "from-amber-500 via-orange-500 to-rose-600",
    simpleSummary: "If Type 1, 2, 3 ve devrik (Inversion) yapıları YDS'nin vazgeçilmez soru kalıbıdır!",
    sections: [
      {
        heading: "Üç Temel Type ve Mixed Conditional",
        explanation: "Type 1 gerçek gelecek (If V1, will V1); Type 2 şimdiki zamanın hayali (If V2, would V1); Type 3 geçmişin hayali (If had V3, would have V3).",
        formula: "Type 3: If + [had V3] , [would / could / might have V3]",
        memoryCode: "🧠 KOD: 'had V3 varsa karşıda three-word modal (would have V3) hazır bekler!'",
        examples: [
          { en: "If the vaccine had been developed sooner, thousands of lives would have been saved.", tr: "Aşı daha önce geliştirilmiş olsaydı, binlerce hayat kurtulmuş olurdu." },
        ],
        visualHint: "Geleceğe Dönüş arabası: Geçmişi değiştirirsen bugünkü sonuç da değişir!",
      },
      {
        heading: "If Gizleme ve Devrik (Inversion) Sanatı",
        explanation: "If atıldığında yardımcı fiil başa geçer: 'Had he known...' = 'If he had known...'; 'Were it not for...' = 'If it were not for...'",
        formula: "Had + [Özne] + [V3] = If + [Özne] + had V3",
        memoryCode: "🧠 KOD: 'Had cümlenin en başında tek başına duruyorsa, o aslında gizli bir IF'tir!'",
        examples: [
          { en: "Had the engineers inspected the bridge, the catastrophe would have been prevented.", tr: "Mühendisler köprüyü denetlemiş olsalardı, felaket önlenmiş olurdu." },
        ],
        visualHint: "Sihirbaz şapkasından tavşan yerine 'IF' çıkaran illüzyonist görseli.",
      },
    ],
    trapAlerts: [
      "⚠️ If cümlesinin kendi içine ASLA 'will' veya 'would' gelmez! (If you will go ❌)",
      "⚠️ 'Unless' = 'If not' (medikçe/madıkça) demektir; Unless'in bağlı olduğu taraf olumlu yazılır ama anlamı olumsuzdur.",
    ],
    signalWords: ["unless", "provided that", "as long as", "in case", "supposing that", "had I known", "were it not for"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "_____ the emergency team acted so decisively, the toxic spill would have contaminated the entire river system.",
        options: ["Had not", "Unless", "If only", "Were not", "Supposing"],
        correct: "A",
        explanation: "Cümle başında 'Had not + Özne + V3' devrik Type 3 yapısıdır. 'Acil ekip bu kadar kararlı davranmamış olsaydı...' anlamına gelir.",
        memoryCode: "Had + Özne + V3 devrik If Type 3!",
      },
    ],
  },
  {
    slug: "conjunctions",
    title: "Conjunctions & Transitions (Bağlaçlar ve Geçiş Kelimeleri)",
    emoji: "🌉",
    colorTheme: "from-pink-600 via-rose-600 to-purple-700",
    simpleSummary: "Zıtlık, sebep, sonuç ve paralel bağlaçlar YDS'de en az 15 neti doğrudan belirler!",
    sections: [
      {
        heading: "Zıtlık Krallığı: Cümle Alanlar vs İsim Alanlar",
        explanation: "'Although / Even though / While / Whereas' tam cümle (+ SVO) alır; 'Despite / In spite of' ise isim veya Ving (+ Noun) alır.",
        formula: "Although + [Cümle / SVO] | Despite + [İsim / Noun Phrase]",
        memoryCode: "🧠 KOD: 'of' ile bitenler (in spite of) ve Despite arkasından asla fiil/cümle almaz, sadece isim sever!",
        examples: [
          { en: "Although the economic climate was challenging, the startup flourished.", tr: "Ekonomik ortam zorlu olmasına rağmen girişim serpildi." },
          { en: "Despite the challenging economic climate, the startup flourished.", tr: "Zorlu ekonomik ortama rağmen girişim serpildi." },
        ],
        visualHint: "Kar fırtınasında şemsiyeyle dimdik yürüyen kararlı kahraman figürü.",
      },
    ],
    trapAlerts: [
      "⚠️ 'Despite'ın arkasına asla 'of' gelmez! 'Despite of' ❌, 'In spite of' ✔️.",
      "⚠️ 'Whereas' ve 'While' özne zıtlığı sever (X böyleyken, Y şöyledir).",
    ],
    signalWords: ["although", "even though", "despite", "in spite of", "whereas", "while", "furthermore", "nevertheless"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "_____ immense technological advances in medicine, cardiovascular diseases remain the leading cause of death globally.",
        options: ["Despite", "Although", "Because", "Provided that", "Moreover"],
        correct: "A",
        explanation: "Boşluktan sonra tam cümle değil 'immense technological advances' (isim öbeği) gelmiştir ve zıtlık anlamı vardır. Cevap Despite.",
        memoryCode: "İsim varsa Despite, cümle varsa Although!",
      },
    ],
  },
  {
    slug: "relative-clauses",
    title: "Relative Clauses & Reduction (Sıfat Cümlecikleri ve Kısaltmalar)",
    emoji: "🔗",
    colorTheme: "from-emerald-500 via-teal-600 to-cyan-700",
    simpleSummary: "Who, which, that, whose ve aktif kısaltma (Ving) ile pasif kısaltma (V3) kuralları!",
    sections: [
      {
        heading: "Kısaltma (Reduction) Taktikleri",
        explanation: "Etken (aktif) nitelemelerde 'which makes' yerine 'making' (Ving); edilgen (pasif) nitelemelerde 'which was built' yerine 'built' (V3) kullanılır.",
        formula: "Aktif kısaltma = [Ving] | Pasif kısaltma = [V3]",
        memoryCode: "🧠 KOD: İşi yapan özneyi niteliyorsan -ING, işe maruz kalan nesneyi niteliyorsan -ED / V3!",
        examples: [
          { en: "The report published last week reveals alarming trends.", tr: "Geçen hafta yayımlanan rapor endişe verici eğilimleri ortaya koyuyor (which was published → published)." },
          { en: "Scientists developing new algorithms received an award.", tr: "Yeni algoritmalar geliştiren bilim insanları ödül aldı (who develop → developing)." },
        ],
        visualHint: "Kelimeleri makasla kısaltıp yerine -ING ve -ED rozeti takan bilge terzi görseli.",
      },
    ],
    trapAlerts: [
      "⚠️ Virgülden sonra asla 'that' gelmez! Non-defining clause'larda virgül varsa 'which' kullanılır.",
      "⚠️ 'Whose' arkasından daima artikelsiz bir isim (whose car, whose theory) gelmek zorundadır.",
    ],
    signalWords: ["which", "who", "whom", "whose", "where", "whereby", "in which", "Ving reduction", "V3 reduction"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "The manuscript, _____ authenticity had been questioned for centuries, was finally verified by carbon dating.",
        options: ["whose", "which", "that", "whom", "where"],
        correct: "A",
        explanation: "El yazması ile 'authenticity' (özgünlük) arasında sahiplik ilişkisi vardır: 'onun özgünlüğü'. Boşluktan hemen sonra çıplak isim geldiği için cevap whose.",
        memoryCode: "İsim + whose + İsim (Aitlik köprüsü)",
      },
    ],
  },
  {
    slug: "passive-voice",
    title: "Passive Voice & Causatives (Edilgen Çatı ve Ettirgen Yapılar)",
    emoji: "🛡️",
    colorTheme: "from-rose-500 via-red-600 to-stone-800",
    simpleSummary: "Eylemi yapan değil eyleme maruz kalan ön plandadır: be + V3 formülü tüm passive çatının omurgasıdır.",
    sections: [
      {
        heading: "Passive Omurgası: be + V3",
        explanation: "Zaman ne olursa olsun, passive olabilmesi için 'BE' fiilinin o zamandaki hali ve ardından esas fiilin V3 hali gelmelidir.",
        formula: "[be] + [V3] (is done, was written, has been found, will be created)",
        memoryCode: "🧠 KOD: 'be + V3 yoksa passive YOKTUR!' Şıklarda bu ikiliyi görmüyorsan ele gitsin!",
        examples: [
          { en: "The theorem was first proposed in the seventeenth century.", tr: "Teorem ilk olarak onyedinci yüzyılda öne sürüldü." },
        ],
        visualHint: "Kalkan taşıyan şövalye: Eylemi kendisi yapmıyor, darbeleri karşılıyor.",
      },
    ],
    trapAlerts: [
      "⚠️ Geçişsiz fiiller (happen, occur, die, arrive) ASLA passive yapılamaz! 'was happened' ❌ 'happened' ✔️.",
    ],
    signalWords: ["is V3", "was V3", "has been V3", "by the author", "was proposed", "occurred"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "An unprecedented number of clinical trials _____ simultaneously to combat the epidemic.",
        options: ["are being conducted", "are conducting", "have conducted", "conducted", "will conduct"],
        correct: "A",
        explanation: "Klinik deneyler kendi kendini yürütmez, yürütülür (passive gereklidir). Seçeneklerdeki tek passive yapı 'are being conducted'dır.",
        memoryCode: "Deneyler yürütülür: be + V3 zorunlu!",
      },
    ],
  },
  {
    slug: "noun-clauses",
    title: "Noun Clauses & Subjunctive (İsim Cümlecikleri)",
    emoji: "📦",
    colorTheme: "from-indigo-600 via-blue-700 to-slate-800",
    simpleSummary: "Cümlenin öznesi veya nesnesi konumunda görev yapan 'that / whether / what / how' cümleleri.",
    sections: [
      {
        heading: "Whether vs If ve That Kuralı",
        explanation: "Edattan (preposition) sonra veya cümlenin öznesi başında 'if' değil 'whether' kullanılır. 'That' ise kesin bir gerçeği bildirir.",
        formula: "Prep + whether | Whether ... or not | That + [SVO]",
        memoryCode: "🧠 KOD: Edatın arkasına IF gelemez, sadece WHETHER gelir! (interested in whether...)",
        examples: [
          { en: "That smoking causes serious illnesses is universally acknowledged.", tr: "Sigaranın ciddi hastalıklara yol açtığı evrensel olarak kabul edilir." },
        ],
        visualHint: "İçinde koskoca bir cümle saklayan sihirli bir hediye kutusu.",
      },
    ],
    trapAlerts: [
      "⚠️ 'The reason why ... is that ...' kalıbında 'that' yerine 'because' kullanılmaz.",
    ],
    signalWords: ["that", "whether", "if", "what", "how", "demand that V1", "crucial that"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "Scientists are still investigating _____ ancient civilizations were able to construct such colossal monoliths.",
        options: ["how", "that", "which", "whom", "whose"],
        correct: "A",
        explanation: "Cümle antik medeniyetlerin bu devasa taşları 'nasıl' inşa edebildiğini araştırdıklarını ifade eder. Yöntem sorduğu için cevap how.",
        memoryCode: "Yöntem/biçim = how!",
      },
    ],
  },
  {
    slug: "adverbial-clauses",
    title: "Adverbial Clauses (Zarf Cümlecikleri: Zaman, Amaç, Neden)",
    emoji: "⏱️",
    colorTheme: "from-teal-600 via-emerald-600 to-green-700",
    simpleSummary: "Ana cümlenin zamanını, nedenini, amacını ve sonucunu zenginleştiren yan cümleler.",
    sections: [
      {
        heading: "Amaç Bağlaçları: So that vs In order to",
        explanation: "'So that' arkasından tam cümle (+ can/could/may/might) alır; 'In order to' ise doğrudan yalın fiil (+ V1) alır.",
        formula: "So that + [Cümle + modal] | In order to + [V1]",
        memoryCode: "🧠 KOD: 'to' fiile gider (in order to do), 'that' cümleye gider (so that he can do)!",
        examples: [
          { en: "He recorded the lecture so that he could review it before the exam.", tr: "Sınavdan önce tekrar edebilmek amacıyla dersi kaydetti." },
        ],
        visualHint: "Hedef tahtasını tam 12'den vuran ok görseli.",
      },
    ],
    trapAlerts: [
      "⚠️ 'In order to' arkasından asla tam cümle gelmez, sadece V1 gelir.",
    ],
    signalWords: ["so that", "in order that", "in order to", "so as to", "because", "since", "as", "now that"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "The laboratory installed ultra-pure air filtration systems _____ contamination could be prevented during the synthesis.",
        options: ["so that", "in order to", "in spite of", "whereas", "as long as"],
        correct: "A",
        explanation: "Boşluktan sonra tam bir cümle ve 'could' modalı yer almaktadır. Amaç bildirdiği için 'so that' uygundur.",
        memoryCode: "Cümle + modal = so that!",
      },
    ],
  },
  {
    slug: "gerund-infinitive",
    title: "Gerunds & Infinitives (İsim Fiiller ve Mastarlar)",
    emoji: "🎾",
    colorTheme: "from-amber-600 via-yellow-600 to-orange-700",
    simpleSummary: "Hangi fiil arkasından -ING (Gerund) alır, hangisi 'to V1' (Infinitive) ister?",
    sections: [
      {
        heading: "Edatlardan Sonra Daima Gerund (-ING)",
        explanation: "Tüm edatlardan (in, on, at, about, without, before, after, by) sonra fiil gelirse daima -ING takısı alır.",
        formula: "[Preposition] + [V-ing]",
        memoryCode: "🧠 KOD: Edat gördün mü fiilin arkasına -ING mıknatısı yapışır!",
        examples: [
          { en: "She succeeded by working consistently every single morning.", tr: "Her sabah istikrarlı bir şekilde çalışarak başardı." },
        ],
        visualHint: "Mıknatısın -ING ekini edata doğru hızla çekişi.",
      },
    ],
    trapAlerts: [
      "⚠️ 'look forward to', 'object to', 'be accustomed to' yapılarındaki 'to' bir edattır, arkasından V1 değil Ving gelir!",
    ],
    signalWords: ["look forward to Ving", "avoid Ving", "admit Ving", "refuse to V1", "decide to V1", "without Ving"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "The delegates are looking forward to _____ new bilateral trade agreements during the summit.",
        options: ["signing", "sign", "have signed", "be signed", "signed"],
        correct: "A",
        explanation: "'Look forward to' kalıbındaki 'to' infinitive eki değil edattır; bu nedenle arkasından Gerund (signing) gelmelidir.",
        memoryCode: "Look forward to V-ING!",
      },
    ],
  },
  {
    slug: "prepositions",
    title: "Prepositions & Phrasal Prepositions (Edatlar)",
    emoji: "📍",
    colorTheme: "from-sky-600 via-blue-700 to-indigo-800",
    simpleSummary: "YDS kelime ve cloze bölümlerinin gizli belirleyicisi: fiil-edat ve sıfat-edat eşleşmeleri.",
    sections: [
      {
        heading: "Kalıplaşmış Eşleşmeler",
        explanation: "Depend on, rely on, cope with, prevent from, contribute to, result in/from eşleşmeleri doğrudan soru çözdürür.",
        formula: "[Fiil] + [Spesifik Edat]",
        memoryCode: "🧠 KOD: 'contribute TO topluma katkı; result IN içine doğan sonuç!'",
        examples: [
          { en: "Chronic stress significantly contributes to immune deficiency.", tr: "Kronik stres bağışıklık yetmezliğine önemli ölçüde katkıda bulunur." },
        ],
        visualHint: "Birbirine kilitlenen lego parçaları: fiil ve edat ayrılmaz bir bütündür.",
      },
    ],
    trapAlerts: [
      "⚠️ 'result in' = yol açmak/neden olmak; 'result from' = -den kaynaklanmak. YDS bu ikisini birbirine zıt şıklarda verir!",
    ],
    signalWords: ["contribute to", "result in", "result from", "depend on", "cope with", "prevent from"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "A balanced nutritional intake is essential for protecting the human body _____ chronic degenerative diseases.",
        options: ["from", "to", "at", "by", "with"],
        correct: "A",
        explanation: "'Protect someone/something FROM something' bir tehlikeden korumak anlamına gelir.",
        memoryCode: "Protect FROM!",
      },
    ],
  },
  {
    slug: "comparatives",
    title: "Comparatives & Superlatives (Karşılaştırma Yapıları)",
    emoji: "⚖️",
    colorTheme: "from-lime-600 via-green-600 to-emerald-800",
    simpleSummary: "As ... as, more ... than, the more ... the more paralel karşılaştırma yapıları.",
    sections: [
      {
        heading: "Paralel Artış: The more ..., the more ...",
        explanation: "'Ne kadar çok X, o kadar çok Y' anlamına gelen bu yapı YDS'de çeviri ve cümle tamamlamada çok sevilir.",
        formula: "The + [Comparative] ... , the + [Comparative] ...",
        memoryCode: "🧠 KOD: 'İki yakada da THE + comparative olacak! Biri eksikse o şık elenir.'",
        examples: [
          { en: "The more we learn about the brain, the more complex it appears.", tr: "Beyin hakkında ne kadar çok şey öğrenirsek, o kadar karmaşık görünür." },
        ],
        visualHint: "Tahterevallide dengeli yükselen iki parlak yıldız.",
      },
    ],
    trapAlerts: [
      "⚠️ 'as ... as' arasına sıfatın veya zarfın sadece yalın hali girer (as fast as, as quickly as); comparative girmez!",
    ],
    signalWords: ["as ... as", "the more ... the more", "more ... than", "by far the most", "twice as much as"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "The deeper divers descend into the oceanic trenches, _____ the ambient water pressure becomes.",
        options: ["the greater", "greater", "greatest", "the greatest", "as great"],
        correct: "A",
        explanation: "'The deeper ..., the greater ...' paralel karşılaştırma kuralıdır. 'Ne kadar derine inerlerse, basınç o kadar büyük olur'.",
        memoryCode: "The comparative ... The comparative!",
      },
    ],
  },
  {
    slug: "determiners",
    title: "Determiners & Quantifiers (Miktar Belirteçleri)",
    emoji: "🔢",
    colorTheme: "from-cyan-600 via-blue-600 to-slate-700",
    simpleSummary: "Few vs Little, Many vs Much, Each vs Every ve 'None of' tekil/çoğul kuralları.",
    sections: [
      {
        heading: "Few / Little: Başında 'A' Yoksa Olumsuz!",
        explanation: "'Few' ve 'Little' neredeyse hiç (olumsuz) anlamına gelir. 'A few' ve 'a little' ise az da olsa var (olumlu) anlamı taşır.",
        formula: "Few + Sayılabilen Çoğul (hemen hemen hiç yok) | Little + Sayılamayan Tekil",
        memoryCode: "🧠 KOD: Başındaki 'a' harfi umuttur! 'a' varsa yeterli, 'a' yoksa kıtlık var!",
        examples: [
          { en: "He has few friends in the new city, so he feels lonely.", tr: "Yeni şehirde neredeyse hiç arkadaşı yok, bu yüzden yalnız hissediyor." },
        ],
        visualHint: "İçinde bir damla su kalmış su matarası: 'little' susuzluktur!",
      },
    ],
    trapAlerts: [
      "⚠️ 'Much' ve 'Little' sayılamayan isimlerle (information, advice, water); 'Many' ve 'Few' sayılabilen çoğullarla kullanılır.",
    ],
    signalWords: ["few", "a few", "little", "a little", "many", "much", "each", "every", "none of"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "Despite the urgency of the crisis, _____ progress was made during the preliminary negotiations.",
        options: ["little", "few", "many", "a few", "several"],
        correct: "A",
        explanation: "'Progress' sayılamayan tekil bir isimdir ve 'Despite' zıtlık bildirdiği için olumsuz anlamda 'neredeyse hiç ilerleme sağlanamadı' denmelidir.",
        memoryCode: "Sayılamayan olumsuz = little!",
      },
    ],
  },
  {
    slug: "inversion",
    title: "Inversion (Devrik Cümle Yapıları)",
    emoji: "🔃",
    colorTheme: "from-fuchsia-600 via-purple-700 to-indigo-900",
    simpleSummary: "Olumsuz ya da kısıtlayıcı bir kelime cümle başına gelirse soru formunda devrik yapılır!",
    sections: [
      {
        heading: "Cümle Başı Kısıtlayıcı Zarflar",
        explanation: "Seldom, rarely, hardly, scarcely, no sooner, not only cümle başına geldiğinde ardından yardımcı fiil + özne gelir.",
        formula: "Seldom / Hardly + [Auxiliary / Yardımcı Fiil] + [Özne] + [Fiil]",
        memoryCode: "🧠 KOD: 'Cümle olumsuz zarfla başladıysa arkasından soru formatı gelir!' (Hardly did I see...)",
        examples: [
          { en: "Rarely have astronomers observed such a cataclysmic cosmic event.", tr: "Gökbilimciler nadiren bu denli yıkıcı bir kozmik olaya tanık olmuşlardır." },
          { en: "Hardly had we arrived when the keynote speech began.", tr: "Biz tam varmıştık ki ana konuşma başladı." },
        ],
        visualHint: "Baş aşağı dönmüş ama hızla yoluna devam eden akrobatik bir uçak.",
      },
    ],
    trapAlerts: [
      "⚠️ 'Hardly ... when' ve 'No sooner ... than' ikililerini asla karıştırma! No sooner 'than' ister, Hardly 'when' ister.",
    ],
    signalWords: ["rarely", "seldom", "hardly ... when", "no sooner ... than", "not only ... but also", "under no circumstances"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "No sooner _____ the research paper been published _____ it triggered intense debate among economists.",
        options: ["had / than", "did / when", "has / than", "was / that", "had / when"],
        correct: "A",
        explanation: "'No sooner + had + Özne + V3 + THAN' kalıbı devrik zaman bağlacıdır. Cevap had / than.",
        memoryCode: "No sooner THAN; Hardly WHEN!",
      },
    ],
  },
  {
    slug: "participles",
    title: "Participles & Clauses (Ortaçlar ve Cümle Kısaltmaları)",
    emoji: "✂️",
    colorTheme: "from-violet-600 via-purple-800 to-stone-900",
    simpleSummary: "Having V3 (öncelik belirten kısaltma) ve Being V3 (pasif devamlılık) yapıları.",
    sections: [
      {
        heading: "Öncelik Bildiren Kısaltma: Having V3",
        explanation: "Ana eylemden daha önce tamamlanmış bir eylemi kısaltmak için 'Having V3' kullanılır.",
        formula: "Having + [V3] , [Özne + V2] (Birinci işi yaptıktan sonra, ikinci işi yaptı)",
        memoryCode: "🧠 KOD: 'Having V3 zaman treninin ön vagonudur; önce o biter, sonra ana eylem gelir!'",
        examples: [
          { en: "Having completed the comprehensive clinical trials, the company applied for regulatory approval.", tr: "Kapsamlı klinik deneyleri tamamladıktan sonra, şirket yasal onay için başvurdu." },
        ],
        visualHint: "Madalya kürsüsünde 1. sıraya çıkan Having V3 bayrağı.",
      },
    ],
    trapAlerts: [
      "⚠️ Kısaltmanın öznesi ile ana cümlenin öznesi aynı olmak zorundadır (dangling modifier hatasına düşme).",
    ],
    signalWords: ["having V3", "having been V3", "being V3", "faced with", "knowing that"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "_____ all safety protocols meticulously, the crew was cleared to launch the deep-space probe.",
        options: ["Having verified", "Verified", "Being verified", "To verify", "Verify"],
        correct: "A",
        explanation: "Güvenlik protokollerini mürettebatın kendisi doğrulamıştır (aktif) ve bu işlem fırlatma onayından önce tamamlanmıştır (öncelik: Having verified).",
        memoryCode: "Önce doğruladı, sonra fırlattı = Having V3!",
      },
    ],
  },
  {
    slug: "reported-speech",
    title: "Reported Speech (Dolaylı Anlatım ve Zaman Kayması)",
    emoji: "🗣️",
    colorTheme: "from-rose-600 via-pink-700 to-indigo-900",
    simpleSummary: "Aktarılan cümlenin geçmişe kayması (tense backshift) ve zaman zarflarının dönüşümü.",
    sections: [
      {
        heading: "Backshift: Bir Adım Geçmişe!",
        explanation: "Giriş fiili past ise (said, claimed, reported), aktarılan cümledeki zaman bir basamak geçmişe kayar (am/is/are → was/were, will → would, have V3 → had V3).",
        formula: "[Özne] + claimed that + [Past Tense]",
        memoryCode: "🧠 KOD: 'Giriş fiili PAST ise, arkadaki pencereden içeri sadece PAST girer!'",
        examples: [
          { en: "The spokesperson announced that the negotiations had concluded successfully.", tr: "Sözcü müzakerelerin başarıyla sonuçlandığını duyurdu." },
        ],
        visualHint: "Geriye doğru dönen saat kadranı ve söz balonu.",
      },
    ],
    trapAlerts: [
      "⚠️ Bilimsel genel geçer gerçekler aktarılırken zaman geçmişe kaydırılmaz (The teacher said that water boils at 100°C).",
    ],
    signalWords: ["claimed that", "stated that", "would", "had V3", "the previous day", "the following week"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "During yesterday's press briefing, the lead investigator stated that the team _____ pivotal evidence.",
        options: ["had uncovered", "will uncover", "uncovers", "is uncovering", "has uncovered"],
        correct: "A",
        explanation: "Giriş fiili 'stated' (past) olduğundan ve kanıt bulma eylemi ifadeden de önce gerçekleştiğinden Past Perfect (had uncovered) doğru yanıttır.",
        memoryCode: "Stated that + had V3!",
      },
    ],
  },

  {
    slug: "simple-present",
    title: "Simple Present Tense (Geniş Zaman)",
    emoji: "☀️",
    colorTheme: "from-amber-500 via-orange-500 to-yellow-600",
    simpleSummary: "Bilimsel gerçekler, değişmeyen doğa kanunları, genel doğrular ve akademik araştırma raporlamaları (studies show that...).",
    sections: [
      {
        heading: "Temel Kullanım & Bilimsel Gerçekler",
        explanation: "Simple Present Tense, zaman sınırı olmayan evrensel gerçeklerde ve akademik çalışmalarda araştırmacının vardığı değişmez sonuçları aktarmada kullanılır.",
        formula: "[Özne] + [V1 / V-s/es] ... Örnek: Water boils at 100°C.",
        memoryCode: "🧠 KOD: 'Güneş her gün doğar' kuralı — Evrensel gerçek varsa şıklarda Present arayacaksın!",
        examples: [
          { en: "Photosynthesis converts solar energy into chemical energy.", tr: "Fotosentez güneş enerjisini kimyasal enerjiye dönüştürür." },
          { en: "Recent studies indicate that adequate sleep enhances cognitive functions.", tr: "Son çalışmalar yeterli uykunun bilişsel işlevleri artırdığını göstermektedir." }
        ],
        visualHint: "Güneşin doğuşu ve dünyanın dönmesi: Değişmez döngü."
      },
      {
        heading: "Zaman Çizelgeleri & Gelecek Anlamı",
        explanation: "Resmi programlar, sınav saatleri, uçak/tren seferleri gibi takvime bağlı eylemlerde Simple Present gelecek anlamı taşır.",
        formula: "[Programlı Eylem] + V1 (tomorrow / at 09:00)",
        memoryCode: "🧠 KOD: 'Tarife kuralı' — Tren tarifesi will almaz, Simple Present ile kalkar!",
        examples: [
          { en: "The international symposium begins tomorrow at 09:00 AM.", tr: "Uluslararası sempozyum yarın sabah 09:00'da başlıyor." }
        ],
        visualHint: "Havalimanı kalkış panosu."
      }
    ],
    trapAlerts: [
      "Tuzak 1: 'studies show that' gördüğünde cümlenin past olduğunu sanıp Past Tense seçme; araştırmanın genel sonucu Present ile aktarılır.",
      "Tuzak 2: 'Every day', 'usually', 'rarely' gibi sıklık zarfları Simple Present'ın en belirgin sinyalleridir."
    ],
    signalWords: ["always", "usually", "often", "generally", "regularly", "studies indicate that", "as a rule"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "Extensive climatological data _____ that greenhouse gas emissions directly _____ the atmospheric heat retention capacity.",
        options: ["show / increase", "showed / will increase", "has shown / increased", "shows / is increasing", "had shown / would increase"],
        correct: "A",
        explanation: "Genel bilimsel bir gerçeği ifade eden özne 'data' ve nesnel bir sonuç söz konusu olduğu için her iki tarafta Simple Present (show / increase) kullanılır.",
        memoryCode: "Bilimsel gerçeklik = Çift taraflı Present uyumu!"
      }
    ]
  },
  {
    slug: "present-continuous",
    title: "Present Continuous Tense (Şimdiki Zaman)",
    emoji: "🏃",
    colorTheme: "from-blue-500 via-cyan-500 to-teal-600",
    simpleSummary: "Şu an devam eden süreçler, geçici durumlar ve günümüzde hızla değişmekte olan küresel trendler.",
    sections: [
      {
        heading: "Değişen Trendler & Küresel Süreçler",
        explanation: "YDS'de Present Continuous genellikle 'increasingly', 'gradually', 'currently', 'nowadays' gibi zarflarla birlikte küresel dönüşümleri ifade etmek için sorulur.",
        formula: "[Özne] + am/is/are + [V-ing]",
        memoryCode: "🧠 KOD: 'Merdiven basamakları' — Gittikçe artan veya azalan her şey Continuous'tır!",
        examples: [
          { en: "The world population is aging at an unprecedented rate.", tr: "Dünya nüfusu benzeri görülmemiş bir hızla yaşlanmaktadır." },
          { en: "Renewable energy sources are becoming increasingly cost-effective.", tr: "Yenilenebilir enerji kaynakları giderek daha uygun maliyetli hale geliyor." }
        ],
        visualHint: "Yukarı doğru hızla tırmanan renkli grafik eğrisi."
      }
    ],
    trapAlerts: [
      "Stative Verbs (Durum fiilleri: know, believe, understand, belong) -ing almaz; bu fiillerle Continuous şıklarını anında ele!"
    ],
    signalWords: ["currently", "nowadays", "at present", "increasingly", "gradually", "day by day"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "Due to rapid urbanization, natural wildlife habitats _____ at an alarming rate across developing nations.",
        options: ["are shrinking", "shrank", "had shrunk", "will have shrunk", "have been shrinking"],
        correct: "A",
        explanation: "'At an alarming rate' ve devam eden küresel bir eğilim Present Continuous ile karşılanır.",
        memoryCode: "Dinamik küresel trend = is/are V-ing!"
      }
    ]
  },
  {
    slug: "present-perfect",
    title: "Present Perfect Tense (Yakın Geçmiş / Etkisi Süren Zaman)",
    emoji: "🌉",
    colorTheme: "from-purple-600 via-indigo-600 to-blue-600",
    simpleSummary: "Geçmiş ile şimdiki zaman arasındaki köprü: since, for, in recent years, so far.",
    sections: [
      {
        heading: "Köprü Zamanı: have/has V3",
        explanation: "Present Perfect geçmişte başlamış ve etkisi veya sonucu ŞU AN devam eden olayların zamanıdır.",
        formula: "[Özne] + have/has + [V3]",
        memoryCode: "🧠 KOD: 'have/has bir elini düne, diğer elini bugüne uzatır!'",
        examples: [
          { en: "Over the past two decades, technology has revolutionized global commerce.", tr: "Son yirmi yılda teknoloji küresel ticarette devrim yarattı." }
        ],
        visualHint: "Geçmişten bugüne uzanan ışıklı altın köprü."
      }
    ],
    trapAlerts: [
      "Net geçmiş zaman zarfları (yesterday, in 2010, two days ago) ASLA Present Perfect ile kullanılmaz, Simple Past (V2) gerektirir!"
    ],
    signalWords: ["since", "for", "recently", "lately", "so far", "over the past decade", "in recent years"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "Over the last century, medical advancements _____ average life expectancy considerably in developed countries.",
        options: ["have increased", "increased", "had increased", "will increase", "were increasing"],
        correct: "A",
        explanation: "'Over the last century' geçmişten bugüne uzanan süreci belirtir; have/has V3 gerektirir.",
        memoryCode: "Over the last... = Kesin Present Perfect!"
      }
    ]
  },
  {
    slug: "present-perfect-continuous",
    title: "Present Perfect Continuous (Süregelen Zaman)",
    emoji: "🌊",
    colorTheme: "from-cyan-600 via-blue-600 to-indigo-700",
    simpleSummary: "Geçmişte başlayıp ŞU ANA KADAR kesintisiz devam eden ve eylemin süresinin vurgulandığı yapılar.",
    sections: [
      {
        heading: "Kesintisiz Efor & Vurgulanan Süreç",
        explanation: "have/has been V-ing formülü, eylemin ne kadar uzun süredir aralıksız yapıldığını ve halen sürdüğünü vurgular.",
        formula: "[Özne] + have/has been + [V-ing]",
        memoryCode: "🧠 KOD: 'Akan nehir' — Geçmişten çıkmış, şu an hâlâ gürül gürül akıyor!",
        examples: [
          { en: "Astrophysicists have been analyzing the deep space signals for over three years.", tr: "Astrofizikçiler üç yılı aşkın süredir derin uzay sinyallerini analiz etmektedirler." }
        ],
        visualHint: "Geçmişten şimdiki zamana uzanan kesintisiz mavi nehir."
      }
    ],
    trapAlerts: [
      "Kaç kez yapıldığı (sayı veya adet) belirtiliyorsa Continuous kullanılmaz, düz Present Perfect kullanılır (I have read 3 books, NOT have been reading 3 books)."
    ],
    signalWords: ["for hours", "since morning", "all day", "how long", "lately"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "Marine biologists _____ the migration corridors of humpback whales since the tracking expedition began.",
        options: ["have been monitoring", "monitored", "had monitored", "were monitoring", "will monitor"],
        correct: "A",
        explanation: "'Since' ile başlayan süreçte ana cümlede eylemin devamlılığı vurgulandığından have been monitoring doğru yanıttır.",
        memoryCode: "Since + V2 -> have been V-ing / have V3!"
      }
    ]
  },
  {
    slug: "simple-past",
    title: "Simple Past Tense (Geçmiş Zaman)",
    emoji: "📜",
    colorTheme: "from-amber-700 via-stone-700 to-slate-800",
    simpleSummary: "Geçmişte belirli bir tarihte yaşanıp tamamlanmış ve bitmiş olaylar (V2 / did).",
    sections: [
      {
        heading: "Geçmişte Kapanan Kutu",
        explanation: "Simple Past, eylemin geçmişte belirli bir zamanda gerçekleştiğini ve günümüzle bir bağının kalmadığını gösterir.",
        formula: "[Özne] + [V2 / did not V1]",
        memoryCode: "🧠 KOD: 'Kapağı kilitli sandık' — Zamanı bellidir (in 1995, ago, last year) ve bugüne uzanmaz!",
        examples: [
          { en: "Alexander Fleming discovered penicillin in 1928 by pure coincidence.", tr: "Alexander Fleming 1928'de tamamen tesadüf eseri penisilini keşfetti." }
        ],
        visualHint: "Tarih mühürlü antika bir parşömen."
      }
    ],
    trapAlerts: [
      "Cümlede 'in the past', 'originally', 'initially', 'during antiquity' varsa şıklar doğrudan Simple Past (V2)'ye yönelmelidir."
    ],
    signalWords: ["yesterday", "ago", "last week", "in 1945", "originally", "initially", "during the Ottoman era"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "The ancient library of Alexandria _____ substantial structural devastation during several conflicts in antiquity.",
        options: ["suffered", "has suffered", "is suffering", "had been suffering", "will suffer"],
        correct: "A",
        explanation: "'In antiquity' (antik çağda) ifadesi net bir geçmiş zaman dilimidir, Simple Past (suffered) gerektirir.",
        memoryCode: "Antik çağ / net tarih = Kesin V2!"
      }
    ]
  },
  {
    slug: "past-continuous",
    title: "Past Continuous Tense (Geçmişte Süregelen Zaman)",
    emoji: "🎞️",
    colorTheme: "from-blue-700 via-indigo-800 to-slate-900",
    simpleSummary: "Geçmişte devam eden eylemler ve bu eylemler sürerken başka bir olayın araya girmesi (while / when).",
    sections: [
      {
        heading: "Kesilme & Eşzamanlı Geçmiş",
        explanation: "Geçmişte uzun süren bir fon eylemi (was/were V-ing) devam ederken anlık bir olay (V2) gerçekleştiğinde kullanılır.",
        formula: "While + [was/were V-ing] , [Özne + V2]",
        memoryCode: "🧠 KOD: 'Film şeridi akarken fotoğraf flaşı patladı!' Film: was V-ing, flaş: V2!",
        examples: [
          { en: "While the archaeologists were excavating the tomb, they stumbled upon an intact sarcophagus.", tr: "Arkeologlar mezarı kazarken bozulmamış bir lahite rastladılar." }
        ],
        visualHint: "Akan bir sinema filmi karesinde çakan şimşek."
      }
    ],
    trapAlerts: [
      "'While' arkasından çoğunlukla Continuous (was/were V-ing) gelir, 'When' arkasından ise anlık eylem (V2) gelir."
    ],
    signalWords: ["while", "as", "just as", "when", "at this time yesterday"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "While astronomers _____ the electromagnetic spectrum, an anomalous cosmic ray pulse _____ their detectors.",
        options: ["were calibrating / struck", "calibrated / was striking", "had calibrated / strikes", "would calibrate / has struck", "are calibrating / struck"],
        correct: "A",
        explanation: "'While' devam eden kalibrasyon sürecini (were calibrating) alır, anlık çarpma olayı V2 (struck) olur.",
        memoryCode: "While + was/were V-ing, V2!"
      }
    ]
  },
  {
    slug: "past-perfect",
    title: "Past Perfect Tense (Öncelik-Sonralık / Had V3)",
    emoji: "⏮️",
    colorTheme: "from-purple-800 via-indigo-900 to-slate-950",
    simpleSummary: "Geçmişin geçmişi: Geçmişte gerçekleşmiş iki olaydan daha önce tamamlanmış olanı.",
    sections: [
      {
        heading: "1. Olay (Had V3) & 2. Olay (V2)",
        explanation: "Past Perfect tek başına kullanılmaz; geçmişteki başka bir referans noktasına göre 'daha önce' olduğunu göstermek için vardır.",
        formula: "By the time + [V2] , [Özne + had V3]",
        memoryCode: "🧠 KOD: 'By the time Past, diğeri Had V3!' — Zaman makinesinde bir vites daha geriye gitmek!",
        examples: [
          { en: "By the time firefighters arrived at the chemical plant, the blaze had engulfed the central warehouse.", tr: "İtfaiyeciler tesise vardığında alevler merkezi depoyu çoktan yutmuştu." }
        ],
        visualHint: "Geri sarma butonu (rewind) ve iki basamaklı geçmiş merdiveni."
      }
    ],
    trapAlerts: [
      "Sırf geçmişten bahsediliyor diye her cümleye had V3 yapıştırma! Had V3 için mutlaka daha yakın bir geçmiş (V2) referansı şarttır."
    ],
    signalWords: ["by the time + V2", "before + V2", "after + had V3", "hardly... when", "no sooner... than"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "By the time regulatory agencies _____ formal sanctions, the fraudulent corporation _____ its overseas assets.",
        options: ["imposed / had liquidated", "had imposed / liquidated", "impose / would liquidate", "were imposing / liquidates", "have imposed / has liquidated"],
        correct: "A",
        explanation: "'By the time + V2 (imposed)' kalıbında ana cümle daha önce tamamlandığı için 'had V3 (had liquidated)' olmalıdır.",
        memoryCode: "By the time + Past, Had V3!"
      }
    ]
  },
  {
    slug: "past-perfect-continuous",
    title: "Past Perfect Continuous (Geçmişte Sürmüş Süreç)",
    emoji: "⏳",
    colorTheme: "from-indigo-900 via-purple-950 to-black",
    simpleSummary: "Geçmişteki bir referans noktasına kadar belli bir süre boyunca kesintisiz sürmüş süreçler.",
    sections: [
      {
        heading: "Geçmişteki Süreç & Kesinti Noktası",
        explanation: "Had been V-ing yapısı, geçmişteki bir olay gerçekleşmeden önce başka bir eylemin ne kadar süredir devam ettiğini açıklar.",
        formula: "[Özne] + had been [V-ing] ... before [Özne + V2]",
        memoryCode: "🧠 KOD: 'Yorulmuş geçmiş' — Geçmişteki bir ana kadar nefes nefese koşmuş olmak!",
        examples: [
          { en: "The engine had been overheating for hours before it completely stalled.", tr: "Motor tamamen durmadan önce saatlerdir aşırı ısınıyordu." }
        ],
        visualHint: "Zamanı tükenen antik kum saati."
      }
    ],
    trapAlerts: [
      "Durum fiilleri (stative verbs) continuous almaz, had been being değil had been kullanılır."
    ],
    signalWords: ["for hours before", "until that moment", "had been doing when"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "Geologists _____ anomalous seismic micro-tremors for weeks before the volcanic caldera finally erupted.",
        options: ["had been recording", "recorded", "have recorded", "were recording", "would record"],
        correct: "A",
        explanation: "'For weeks before + V2' kalıbı kesintisiz geçmiş süreci vurguladığı için had been recording doğru yanıttır.",
        memoryCode: "For weeks before V2 -> had been V-ing!"
      }
    ]
  },
  {
    slug: "simple-future",
    title: "Simple Future (Will / Shall)",
    emoji: "🔮",
    colorTheme: "from-pink-600 via-purple-600 to-indigo-700",
    simpleSummary: "Anlık kararlar, geleceğe yönelik tahminler, vaatler ve şart cümlelerinin temel sonuç yapıları.",
    sections: [
      {
        heading: "Tahminler, Şart Sonuçları & İrade",
        explanation: "Will yapısı kesin kanıt bulunmayan kişisel inanç/tahminlerde (think, believe, hope) ve Type 1 şart cümlelerinin temelinde yer alır.",
        formula: "[Özne] + will + [V1]",
        memoryCode: "🧠 KOD: 'Kristal küre' — Veriye değil, genel inanç ve öngörüye dayanan gelecek!",
        examples: [
          { en: "Many economists believe automated logistics will reduce shipping overheads.", tr: "Birçok ekonomist otomatik lojistiğin nakliye giderlerini düşüreceğine inanıyor." }
        ],
        visualHint: "Geleceği gösteren parlayan kristal küre."
      }
    ],
    trapAlerts: [
      "Zaman bağlaçlarının (when, after, as soon as, until) bulunduğu YAN CÜMLE içine ASLA 'will' gelemez! Gelecek anlamı Present Tense ile verilir."
    ],
    signalWords: ["tomorrow", "next year", "probably", "I think", "I believe", "in the future"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "As soon as the peer-review process _____, the editorial board _____ the breakthrough manuscript.",
        options: ["concludes / will publish", "will conclude / publishes", "concluded / will publish", "has concluded / published", "will conclude / will publish"],
        correct: "A",
        explanation: "Zaman bağlacı 'as soon as' yan cümleye 'will' almaz (concludes), ana cümle 'will publish' olur.",
        memoryCode: "Zaman bağlacı içine will yasak!"
      }
    ]
  },
  {
    slug: "be-going-to",
    title: "Be Going To & Gelecek Planları",
    emoji: "🗓️",
    colorTheme: "from-emerald-600 via-teal-600 to-cyan-700",
    simpleSummary: "Önceden planlanmış niyetler ve şu anki somut kanıtlara dayanan kesin tahminler.",
    sections: [
      {
        heading: "Kanıtlı Gelecek & Hazırlanmış Plan",
        explanation: "Gözle görülür bir kanıt (evidence) olduğunda veya önceden ajandaya yazılmış bir karar varsa be going to tercih edilir.",
        formula: "[Özne] + am/is/are going to + [V1]",
        memoryCode: "🧠 KOD: 'Bilet cebinde!' — Karar verilmiş, hazırlık yapılmış kesin gelecek!",
        examples: [
          { en: "According to current fiscal deficits, the council is going to introduce austerity measures.", tr: "Mevcut mali açıklara göre konsey kemer sıkma politikalarını devreye sokacak." }
        ],
        visualHint: "İşaretlenmiş takvim ve eldeki uçak bileti."
      }
    ],
    trapAlerts: [
      "Was/were going to yapısı 'yapacaktım ama yapamadım' (gerçekleşmemiş niyet) anlamı verir."
    ],
    signalWords: ["look at that", "evidence shows", "already decided", "plan to"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "Given the severe structural cracks discovered in the foundation, authorities _____ the suspension bridge tomorrow.",
        options: ["are going to close", "will have closed", "close", "had closed", "were closing"],
        correct: "A",
        explanation: "Eldeki somut kanıt (severe cracks) ve planlı eylem gereği 'are going to close' en uygundur.",
        memoryCode: "Somut kanıt = Be going to!"
      }
    ]
  },
  {
    slug: "future-continuous",
    title: "Future Continuous (Gelecekte Devam Edecek Zaman)",
    emoji: "🛫",
    colorTheme: "from-sky-500 via-blue-600 to-indigo-700",
    simpleSummary: "Gelecekte belirli bir zaman noktasında gerçekleşmekte ve devam ediyor olacak eylemler.",
    sections: [
      {
        heading: "Gelecekteki Dinamik Süreç",
        explanation: "Will be V-ing yapısı, gelecekteki belirli bir zaman diliminde eylemin tam ortasında olunacağını anlatır.",
        formula: "[Özne] + will be + [V-ing]",
        memoryCode: "🧠 KOD: 'Yarın bu saatte havadayım!' — Gelecekteki o anda devam eden süreç!",
        examples: [
          { en: "At this time next decade, thousands of autonomous shuttles will be operating in urban centers.", tr: "Önümüzdeki on yılın bu vaktinde, şehir merkezlerinde binlerce otonom araç çalışıyor olacak." }
        ],
        visualHint: "Bulutların üzerinde süzülen süpersonik jet uçağı."
      }
    ],
    trapAlerts: [
      "'At this time tomorrow' veya 'in ten years\' time' kalıpları Future Continuous'ın en büyük ipuçlarıdır."
    ],
    signalWords: ["at this time tomorrow", "this time next week", "in the next decade"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "By this time next semester, doctoral candidates _____ their field research across multiple biomes.",
        options: ["will be conducting", "conduct", "have conducted", "had conducted", "conducted"],
        correct: "A",
        explanation: "'By this time next semester' gelecekte o anda devam eden süreci gösterir: will be conducting.",
        memoryCode: "This time next... = will be V-ing!"
      }
    ]
  },
  {
    slug: "future-perfect",
    title: "Future Perfect (By + Gelecek / Will have V3)",
    emoji: "🏁",
    colorTheme: "from-emerald-500 via-teal-600 to-blue-700",
    simpleSummary: "Gelecekteki belirli bir tarihe kadar tamamlanmış ve sonuçlanmış olacak eylemler.",
    sections: [
      {
        heading: "By + Gelecek Zaman = Will Have V3",
        explanation: "YDS'de 'By 2050', 'By the end of this century' gibi ifadeler görüldüğünde ana cümlede %99 'will have V3' aranır.",
        formula: "By + [Gelecek Tarih] , [Özne + will have V3]",
        memoryCode: "🧠 KOD: 'By Gelecek = Will Have V3!' YDS'nin en garantili matematiksel formülüdür!",
        examples: [
          { en: "By 2050, researchers will have mapped the complete neural connectivity of the human cortex.", tr: "2050 yılına kadar araştırmacılar insan korteksinin tam sinirsel bağlantısını haritalamış olacaklar." }
        ],
        visualHint: "2050 yazan damalı bitiş bayrağı."
      }
    ],
    trapAlerts: [
      "By the time arkasından Present gelirse ana cümle 'will have V3', Past gelirse ana cümle 'had V3' olur. Bu ikisini asla karıştırma!"
    ],
    signalWords: ["by 2030", "by the end of", "by next year", "by the time + Present"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "By the middle of the twenty-first century, renewable infrastructure _____ conventional fossil fuels in primary energy grids.",
        options: ["will have superseded", "superseded", "has superseded", "had superseded", "supersedes"],
        correct: "A",
        explanation: "'By the middle of the twenty-first century' (gelecek tarih) doğrudan 'will have V3' gerektirir.",
        memoryCode: "By + Gelecek = will have V3!"
      }
    ]
  },
  {
    slug: "modals-perfect",
    title: "Perfect Modals (Geçmiş Çıkarımlar & Pişmanlıklar)",
    emoji: "🕰️",
    colorTheme: "from-amber-600 via-red-600 to-purple-800",
    simpleSummary: "Geçmişe dair güçlü çıkarımlar (must have V3), imkânsızlıklar (can't have V3) ve pişmanlıklar (should have V3).",
    sections: [
      {
        heading: "Geçmiş Çıkarım Matrisi",
        explanation: "Modal + have V3 yapıları her zaman GEÇMİŞİ anlatır. Must have V3 = yapmış olmalı (%95 emin), Can't have V3 = yapmış olamaz (%95 imkânsız), Should have V3 = yapmalıydı ama yapmadı.",
        formula: "Modal + have + [V3]",
        memoryCode: "🧠 KOD: 'Dedektif büyüteci' — Geçmişteki delillere bakıp kesin çıkarım yapmak!",
        examples: [
          { en: "The ancient civilization must have experienced severe drought, as all reservoirs were dry.", tr: "Bütün su depoları kuruduğuna göre antik uygarlık şiddetli bir kuraklık yaşamış olmalı." },
          { en: "You should have consulted the legal department before signing the contract.", tr: "Sözleşmeyi imzalamadan önce hukuk departmanına danışmalıydın (ama danışmadın)." }
        ],
        visualHint: "Geçmiş suç mahallini inceleyen dedektif büyüteci."
      }
    ],
    trapAlerts: [
      "Must V1 = şu anki zorunluluktur; geçmiş çıkarım için MUTLAKA 'must have V3' gerekir."
    ],
    signalWords: ["must have V3", "cannot have V3", "could have V3", "should have V3", "might have V3"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "Given the catastrophic structural failure, the architects _____ critical seismic tolerances during initial construction.",
        options: ["must have underestimated", "should underestimate", "could underestimate", "will have underestimated", "must underestimate"],
        correct: "A",
        explanation: "Yıkımın büyüklüğü geçmişteki hataya dair kesin ve güçlü bir çıkarım (must have V3) gerektirir.",
        memoryCode: "Geçmiş kesin çıkarım = must have V3!"
      }
    ]
  },
  {
    slug: "wish-clauses",
    title: "Wish Clauses & If Only (Dilek Cümleleri)",
    emoji: "🌠",
    colorTheme: "from-indigo-600 via-violet-600 to-purple-900",
    simpleSummary: "Şu an veya geçmiş için gerçek dışı dilekler: Zamanı daima BİR DERECE GERİ alma kuralı.",
    sections: [
      {
        heading: "Zaman Bir Vites Geri Kuralı",
        explanation: "Wish / If Only yapılarından sonra ASLA Present Tense gelemez! Şu an için dilek: V2/would, Geçmiş pişmanlık: had V3.",
        formula: "I wish + [Özne + V2 / had V3 / could V1]",
        memoryCode: "🧠 KOD: 'Zaman makinesinde geri vites' — Wish kapısından geçen her zaman bir derece eskir!",
        examples: [
          { en: "Environmentalists wish global carbon output were declining faster.", tr: "Çevreciler küresel karbon salınımının daha hızlı düşüyor olmasını dilerdi (şu an düşmüyor)." },
          { en: "The delegates wish they had ratified the treaty last year.", tr: "Delegeler anlaşmayı geçen yıl onaylamış olmayı dilerdi (onaylamadılar, pişmanlar)." }
        ],
        visualHint: "Kayan bir yıldız ve dilek tutan silüet."
      }
    ],
    trapAlerts: [
      "Wish cümlesinde Present Tense (am, is, are, have, will) olan tüm şıkları saniyede ele!"
    ],
    signalWords: ["I wish", "if only", "wish + were", "wish + had V3"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "Many climatologists wish international governments _____ more rigorous restrictions at the Kyoto summit years ago.",
        options: ["had enacted", "enacted", "have enacted", "would enact", "enact"],
        correct: "A",
        explanation: "'Years ago' (geçmiş) dileği olduğu için wish kuralı gereği had V3 (had enacted) zorunludur.",
        memoryCode: "Wish + Geçmiş = had V3!"
      }
    ]
  },
  {
    slug: "articles-quantifiers",
    title: "Articles & Quantifiers (Belirteçler & Miktar İfadeleri)",
    emoji: "🔢",
    colorTheme: "from-amber-500 via-emerald-600 to-teal-700",
    simpleSummary: "A/an/the kullanımı, sayılabilen ve sayılamayan isimler, a few vs few, much vs many.",
    sections: [
      {
        heading: "Few / Little vs A Few / A Little",
        explanation: "Başında 'a' olmayan few ve little olumsuzdur ('neredeyse hiç yok'). 'A few' ve 'a little' ise az ama yeterli miktarı ifade eder.",
        formula: "Few/Many + [Çoğul İsim] | Little/Much + [Sayılamayan İsim]",
        memoryCode: "🧠 KOD: 'A harfi bardağı doldurur!' — A varsa az da olsa var (+), A yoksa neredeyse hiç yok (-)!",
        examples: [
          { en: "Few politicians were willing to acknowledge the impending financial crisis.", tr: "Pek az (neredeyse hiç) politikacı yaklaşan finansal krizi kabul etmeye yanaştı." }
        ],
        visualHint: "Yarı dolu bardak (a little) ve dibinde damla kalan bardak (little)."
      }
    ],
    trapAlerts: [
      "Information, research, evidence, equipment kelimeleri sayılamaz; ASLA çoğul eki (-s) veya 'many' almaz!"
    ],
    signalWords: ["few", "a few", "little", "a little", "much", "many", "a great deal of", "a number of"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "Because _____ empirical evidence was submitted to substantiate the hypothesis, the committee rejected the grant proposal.",
        options: ["little", "a few", "many", "a great deal of", "several"],
        correct: "A",
        explanation: "'Evidence' sayılamaz (uncountable) bir isimdir ve komitenin projeyi reddetmesi kanıtın neredeyse hiç olmadığını (olumsuz: little) gösterir.",
        memoryCode: "Evidence sayılamaz + red kararı = little!"
      }
    ]
  },
  {
    slug: "participles-inversion",
    title: "Participles & Inversion (Kısaltmalar & Devrik Cümleler)",
    emoji: "🎓",
    colorTheme: "from-violet-700 via-purple-900 to-slate-950",
    simpleSummary: "Akademik YDS'nin en prestijli konuları: Having V3 kısaltmaları ve olumsuz zarflarla devrik cümleler.",
    sections: [
      {
        heading: "Having V3: Öncelikli Kısaltma",
        explanation: "Yan cümledeki eylem ana cümledeki eylemden daha önce yapılmışsa 'Having V3' (aktif) veya 'Having been V3' (pasif) kullanılır.",
        formula: "Having + V3 ... , [Özne + V2]",
        memoryCode: "🧠 KOD: 'Önce ödevini bitirdi (Having finished), sonra dışarı çıktı!'",
        examples: [
          { en: "Having exhausted all diplomatic channels, the delegates referred the dispute to the international tribunal.", tr: "Tüm diplomatik kanalları tükettikten sonra, delegeler anlaşmazlığı uluslararası mahkemeye taşıdı." }
        ],
        visualHint: "Kürsüde konuşan diplomat ve arkasında yanan onay mührü."
      },
      {
        heading: "Inversion: Devrik Cümle Kalıpları",
        explanation: "Cümle olumsuz bir zarfla (Not only, Hardly, Seldom, Rarely, Under no circumstances) başlarsa cümle soru formatında devrilir: Zarf + Yardımcı Fiil + Özne + Fiil.",
        formula: "Not only + [did/does/is + Özne] ... but also ...",
        memoryCode: "🧠 KOD: 'Olumsuzluk başa gelirse yardımcı fiil öne fırlar!'",
        examples: [
          { en: "Hardly had the vaccine been approved when global distribution commenced.", tr: "Aşı onaylanır onaylanmaz küresel dağıtım başladı." }
        ],
        visualHint: "Ters dönen piramit: Soru kalıbı gibi dizilen devrik cümle."
      }
    ],
    trapAlerts: [
      "Hardly ... when | No sooner ... than | Scarcely ... when kalıpları YDS'de soru kalıbı olarak direkt boşluk doldurma olarak sorulur!"
    ],
    signalWords: ["hardly... when", "no sooner... than", "seldom", "rarely", "under no circumstances", "having V3"],
    questionCount: 100,
    practiceQuestions: [
      {
        id: 1,
        text: "_____ had the preliminary clinical trials concluded _____ the pharmaceutical consortium announced mass manufacturing.",
        options: ["No sooner / than", "Hardly / than", "Scarcely / that", "Not only / when", "Neither / nor"],
        correct: "A",
        explanation: "'No sooner' daima 'than' ile eşleşir ve devrik yapı oluşturur (had the trials concluded).",
        memoryCode: "No sooner ... THAN!"
      }
    ]
  },
];

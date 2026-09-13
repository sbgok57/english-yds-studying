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
];

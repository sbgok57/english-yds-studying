export type GrammarLevel = "A1" | "A2";

export type GrammarExample = {
  en: string;
  tr: string;
};

export type GrammarLesson = {
  id: string;
  order: number;
  level: GrammarLevel;
  title: string;
  objective: string;
  explanation: string;
  pattern: string;
  examples: readonly GrammarExample[];
  commonMistake: string;
  quiz: {
    prompt: string;
    choices: readonly string[];
    answerIndex: number;
    explanation: string;
  };
};

/** Beginner-first YDS grammar path. Content is static and safe to bundle in the frontend. */
export const GRAMMAR_LESSONS: readonly GrammarLesson[] = [
  {
    id: "sentence-order",
    order: 1,
    level: "A1",
    title: "İngilizce cümle sırası: özne + fiil + nesne",
    objective: "Basit bir İngilizce cümlede özne, fiil ve nesneyi doğru sıraya koymak.",
    explanation: "İngilizcede düz cümle çoğunlukla önce özneyle, sonra fiille başlar. Türkçedeki gibi fiili cümlenin sonuna taşımayın.",
    pattern: "Subject + Verb + Object / Place / Time",
    examples: [
      { en: "Students read books.", tr: "Öğrenciler kitap okur." },
      { en: "My sister studies at home every evening.", tr: "Kız kardeşim her akşam evde ders çalışır." },
    ],
    commonMistake: "Yanlış: Reads Ayşe a book. · Doğru: Ayşe reads a book.",
    quiz: { prompt: "Doğru cümle sırasını seçin.", choices: ["English studies Mina.", "Mina studies English."], answerIndex: 1, explanation: "Özne Mina, fiil studies, nesne English sırasındadır." },
  },
  {
    id: "subject-pronouns",
    order: 2,
    level: "A1",
    title: "Özne zamirleri: I, you, he, she, it, we, they",
    objective: "İsimlerin yerine özne zamiri kullanmak ve kişi farkını tanımak.",
    explanation: "I konuşan kişidir; you dinleyendir. He erkek, she kadın, it cansız/çoğu hayvan, we biz, they onlar için kullanılır.",
    pattern: "I / you / he / she / it / we / they + verb",
    examples: [
      { en: "Elif is a student. She studies English.", tr: "Elif öğrencidir. O İngilizce çalışır." },
      { en: "The books are new. They are on the desk.", tr: "Kitaplar yenidir. Onlar masanın üzerindedir." },
    ],
    commonMistake: "I daima büyük harfle yazılır. İnsanlar için he/she, cansız nesneler için çoğunlukla it kullanılır.",
    quiz: { prompt: "“My parents” yerine hangi özne zamiri gelir?", choices: ["They", "It"], answerIndex: 0, explanation: "My parents çoğul bir gruptur; zamiri they olur." },
  },
  {
    id: "be-positive",
    order: 3,
    level: "A1",
    title: "To be: am, is, are — olumlu cümle",
    objective: "Kişiye göre am, is ve are seçmek.",
    explanation: "To be; kimlik, durum, yaş ve konum bildirirken kullanılır. I ile am; he/she/it ile is; you/we/they ile are gelir.",
    pattern: "I am · He/She/It is · You/We/They are",
    examples: [
      { en: "I am ready. She is at school.", tr: "Hazırım. O okulda." },
      { en: "They are interested in science.", tr: "Bilimle ilgileniyorlar." },
    ],
    commonMistake: "Özne ile be fiilini uyumlu kullanın: They is değil, They are.",
    quiz: { prompt: "My brother ___ a doctor.", choices: ["am", "is", "are"], answerIndex: 1, explanation: "My brother, he zamiri gibi tekil üçüncü kişidir; is kullanılır." },
  },
  {
    id: "be-negative",
    order: 4,
    level: "A1",
    title: "To be: olumsuz cümle",
    objective: "Am/is/are fiiline not ekleyerek olumsuz cümle kurmak.",
    explanation: "To be'den sonra not gelir. Kısaltmalar: isn't = is not, aren't = are not. I am not genellikle I'm not biçiminde kısalır.",
    pattern: "Subject + am/is/are + not + complement",
    examples: [
      { en: "He is not tired. / He isn't tired.", tr: "Yorgun değil." },
      { en: "We aren't late for class.", tr: "Derse geç kalmadık." },
    ],
    commonMistake: "To be ile don't kullanmayın: She isn't happy doğru; She doesn't be happy yanlış.",
    quiz: { prompt: "They ___ at home today. (evde değiller)", choices: ["isn't", "aren't", "don't"], answerIndex: 1, explanation: "They çoğul özne olduğu için are not / aren't kullanılır." },
  },
  {
    id: "be-questions",
    order: 5,
    level: "A1",
    title: "To be: soru ve kısa cevap",
    objective: "Am/is/are fiilini öznenin önüne alarak soru sormak.",
    explanation: "To be sorularında yardımcı fiil başa geçer. Kısa cevapta özne zamiri ve be fiilini kullanın.",
    pattern: "Am/Is/Are + subject + complement? · Yes, subject + am/is/are.",
    examples: [
      { en: "Are you ready? Yes, I am.", tr: "Hazır mısın? Evet, hazırım." },
      { en: "Is the library open? No, it isn't.", tr: "Kütüphane açık mı? Hayır, açık değil." },
    ],
    commonMistake: "Kısa cevapta Yes, I'm demeyin; tek başına Yes, I am kullanın.",
    quiz: { prompt: "___ your friends here?", choices: ["Is", "Are", "Do"], answerIndex: 1, explanation: "Your friends çoğuldur; be sorusunda are başa gelir." },
  },
  {
    id: "articles",
    order: 6,
    level: "A1",
    title: "A / an: tekil ve sayılabilir isimler",
    objective: "Belirsiz tekil isimlerden önce a veya an kullanmak.",
    explanation: "Tekil sayılabilir bir isimden ilk kez söz ederken a/an kullanılır. Seçim harfe değil, sonraki kelimenin ilk sesine bağlıdır.",
    pattern: "a + consonant sound · an + vowel sound",
    examples: [
      { en: "a university · an apple", tr: "bir üniversite · bir elma" },
      { en: "She has an interesting idea.", tr: "İlginç bir fikri var." },
    ],
    commonMistake: "University /juː/ sesiyle başladığından a university; hour sessiz h ile başladığından an hour denir.",
    quiz: { prompt: "___ honest answer", choices: ["a", "an"], answerIndex: 1, explanation: "Honest sözcüğünde h okunmaz; ilk duyulan ses ünlüdür, bu yüzden an kullanılır." },
  },
  {
    id: "plurals",
    order: 7,
    level: "A1",
    title: "İsimlerin çoğulu",
    objective: "Düzenli çoğul eklerini ve sık görülen düzensiz çoğulları tanımak.",
    explanation: "Çoğu isme -s gelir; s, sh, ch, x seslerinden sonra genellikle -es; consonant + y sonunda -ies kullanılır. Bazı isimler düzensizdir.",
    pattern: "book → books · box → boxes · city → cities · child → children",
    examples: [
      { en: "Three boxes are on the floor.", tr: "Yerde üç kutu var." },
      { en: "The children have two feet each.", tr: "Çocukların her birinin iki ayağı var." },
    ],
    commonMistake: "Childs değil children; cities yazılır, citys değil.",
    quiz: { prompt: "“One woman, two ___.” boşluğunu tamamlayın.", choices: ["womans", "women", "womanes"], answerIndex: 1, explanation: "Woman düzensiz çoğuldur: woman → women." },
  },
  {
    id: "demonstratives",
    order: 8,
    level: "A1",
    title: "This, that, these, those",
    objective: "Yakınlık ve tekillik/çoğulluk bildiren işaret sözcüklerini seçmek.",
    explanation: "This yakındaki tekil, these yakındaki çoğul; that uzaktaki tekil, those uzaktaki çoğul isimler için kullanılır.",
    pattern: "this/that + singular noun · these/those + plural noun",
    examples: [
      { en: "This book is useful; those books are old.", tr: "Bu kitap yararlı; şu kitaplar eski." },
      { en: "Are these your notes?", tr: "Bunlar senin notların mı?" },
    ],
    commonMistake: "These ile çoğul isim ve çoğul fiil kullanın: These books are…",
    quiz: { prompt: "Yakındaki birden fazla kalem için hangisi uygundur?", choices: ["This pens", "These pens", "Those pen"], answerIndex: 1, explanation: "Yakın + çoğul anlamı these ile verilir." },
  },
  {
    id: "possessives",
    order: 9,
    level: "A1",
    title: "İyelik sıfatları ve 's",
    objective: "Sahiplik bildiren my, your, his, her, its, our, their sözcüklerini kullanmak.",
    explanation: "İyelik sıfatı isimden önce gelir. Kişi adıyla sahiplikte çoğunlukla apostrof + s kullanılır: Ece's book.",
    pattern: "possessive adjective + noun · name + 's + noun",
    examples: [
      { en: "Their teacher checks our homework.", tr: "Onların öğretmeni ödevimizi kontrol eder." },
      { en: "Mert's dictionary is on his desk.", tr: "Mert'in sözlüğü onun masasının üzerinde." },
    ],
    commonMistake: "Its (onun) ile it's (it is / it has) farklıdır; iyelikte apostrof kullanılmaz.",
    quiz: { prompt: "Ayşe has a bag. It is ___ bag.", choices: ["her", "she", "herself"], answerIndex: 0, explanation: "İsim bag'den önce iyelik sıfatı her gerekir." },
  },
  {
    id: "have-has",
    order: 10,
    level: "A1",
    title: "Have / has: sahip olmak",
    objective: "Özneye göre have veya has kullanmak.",
    explanation: "I/you/we/they ile have; he/she/it ile has kullanılır. Sahiplik, ilişki ve bazı fiziksel özellikler için yaygındır.",
    pattern: "I/You/We/They have · He/She/It has",
    examples: [
      { en: "We have two exams this week.", tr: "Bu hafta iki sınavımız var." },
      { en: "The course has ten units.", tr: "Kursun on ünitesi var." },
    ],
    commonMistake: "He have değil, he has. Olumsuzda doesn't kullanınca fiil have biçimine döner: He doesn't have.",
    quiz: { prompt: "Our school ___ a large library.", choices: ["have", "has"], answerIndex: 1, explanation: "Our school tekil it gibi davranır; has kullanılır." },
  },
  {
    id: "there-is-are",
    order: 11,
    level: "A1",
    title: "There is / there are",
    objective: "Bir yerde bir şeyin var olduğunu bildirmek.",
    explanation: "There is tekil isim ve sayılamayan isimle; there are çoğul isimle kullanılır. Türkçeye çoğunlukla 'var' diye çevrilir.",
    pattern: "There is + singular/uncountable · There are + plural",
    examples: [
      { en: "There is a map on the wall.", tr: "Duvarda bir harita var." },
      { en: "There are several reasons for this change.", tr: "Bu değişikliğin birkaç nedeni var." },
    ],
    commonMistake: "A/an ile tekil isim için there is; çoğul isim için there are seçin.",
    quiz: { prompt: "___ many students in the classroom.", choices: ["There is", "There are"], answerIndex: 1, explanation: "Students çoğul olduğu için there are kullanılır." },
  },
  {
    id: "some-any",
    order: 12,
    level: "A1",
    title: "Some / any ve sayılabilir-sayılamayan isimler",
    objective: "Miktar belirsizken some ve any kullanımını tanımak.",
    explanation: "Some çoğunlukla olumlu cümlelerde; any çoğunlukla soru ve olumsuz cümlelerde kullanılır. İkisi de çoğul sayılabilir veya sayılamayan isimlerle gelebilir.",
    pattern: "some + plural/uncountable (usually affirmative) · any (usually question/negative)",
    examples: [
      { en: "We need some information.", tr: "Biraz bilgiye ihtiyacımız var." },
      { en: "Do you have any questions?", tr: "Hiç sorunuz var mı?" },
    ],
    commonMistake: "Information sayılamaz: an information değil, some information denir.",
    quiz: { prompt: "We don't have ___ time left.", choices: ["some", "any"], answerIndex: 1, explanation: "Olumsuz cümlede genellikle any kullanılır." },
  },
  {
    id: "present-simple-positive",
    order: 13,
    level: "A1",
    title: "Present Simple: alışkanlıklar ve genel gerçekler",
    objective: "Rutinleri, tekrar eden eylemleri ve genel doğruları anlatmak.",
    explanation: "Present Simple alışkanlık ve genel gerçeklerde kullanılır. He/she/it ile olumlu cümlede fiile çoğunlukla -s veya -es eklenir.",
    pattern: "I/You/We/They + base verb · He/She/It + verb-s/es",
    examples: [
      { en: "Water boils at 100°C.", tr: "Su 100°C'de kaynar." },
      { en: "Aylin reviews new words every morning.", tr: "Aylin her sabah yeni kelimeleri tekrar eder." },
    ],
    commonMistake: "He studies; he study değil. I/you/we/they ile fiile -s eklemeyin.",
    quiz: { prompt: "The train ___ at six every morning.", choices: ["leave", "leaves"], answerIndex: 1, explanation: "The train tekil üçüncü kişidir; Present Simple olumlu cümlede leaves olur." },
  },
  {
    id: "present-simple-questions",
    order: 14,
    level: "A1",
    title: "Present Simple: don't / doesn't ile soru ve olumsuz",
    objective: "Do/does yardımcı fiilleriyle rutinler hakkında soru sormak ve olumsuz kurmak.",
    explanation: "I/you/we/they ile do/don't; he/she/it ile does/doesn't kullanılır. Does geldiğinde ana fiil yalın hâle döner.",
    pattern: "Do/Does + subject + base verb? · subject + don't/doesn't + base verb",
    examples: [
      { en: "Does he work on Saturdays? No, he doesn't.", tr: "Cumartesileri çalışır mı? Hayır, çalışmaz." },
      { en: "They don't use a dictionary in every lesson.", tr: "Her derste sözlük kullanmazlar." },
    ],
    commonMistake: "Does she likes değil, Does she like. Does -s görevini üstlenir.",
    quiz: { prompt: "___ your sister speak French?", choices: ["Do", "Does", "Is"], answerIndex: 1, explanation: "Your sister = she; Present Simple sorusunda does kullanılır." },
  },
  {
    id: "frequency-adverbs",
    order: 15,
    level: "A1",
    title: "Sıklık zarfları: always, usually, often, sometimes, never",
    objective: "Bir eylemin ne sıklıkta gerçekleştiğini anlatmak.",
    explanation: "Sıklık zarfı çoğunlukla ana fiilden önce, to be fiilinden sonra gelir. Never zaten olumsuz anlam taşır.",
    pattern: "subject + adverb + main verb · subject + be + adverb",
    examples: [
      { en: "I usually study after dinner.", tr: "Genellikle akşam yemeğinden sonra ders çalışırım." },
      { en: "She is often busy on Mondays.", tr: "Pazartesileri sık sık meşguldür." },
    ],
    commonMistake: "She always is tired yerine She is always tired deyin.",
    quiz: { prompt: "Doğru sırayı seçin.", choices: ["He often is late.", "He is often late."], answerIndex: 1, explanation: "To be fiilinden sonra sıklık zarfı gelir." },
  },
  {
    id: "present-continuous",
    order: 16,
    level: "A1",
    title: "Present Continuous: şu anda olanlar",
    objective: "Konuşma anında devam eden eylemleri anlatmak.",
    explanation: "Am/is/are yardımcı fiilinden sonra fiilin -ing biçimi gelir. Geçici olarak bu dönemde süren durumlar için de kullanılabilir.",
    pattern: "subject + am/is/are + verb-ing",
    examples: [
      { en: "The students are taking a test now.", tr: "Öğrenciler şu anda sınav oluyor." },
      { en: "I am reading a book this week.", tr: "Bu hafta bir kitap okuyorum." },
    ],
    commonMistake: "Yardımcı fiili atlamayın: She studying değil, She is studying.",
    quiz: { prompt: "Look! The children ___ in the garden.", choices: ["play", "are playing", "plays"], answerIndex: 1, explanation: "Look! şu anı gösterir; çoğul özneyle are playing kullanılır." },
  },
  {
    id: "prepositions-basic",
    order: 17,
    level: "A1",
    title: "Temel yer ve zaman edatları: in, on, at",
    objective: "Yaygın yer ve zaman ifadelerinde in, on ve at kullanımını öğrenmek.",
    explanation: "Zamanda genel dönemlerle in (in July), gün/tarihle on (on Monday), belirli saatle at (at 8:00) kullanılır. Yerde de in/on/at anlam ve bağlama göre değişir.",
    pattern: "in + month/year/large area · on + day/surface · at + clock time/specific point",
    examples: [
      { en: "The exam is on Friday at 9:00.", tr: "Sınav cuma günü saat 9.00'da." },
      { en: "They live in Ankara and study at a university.", tr: "Ankara'da yaşarlar ve bir üniversitede okurlar." },
    ],
    commonMistake: "Saat için at, gün için on, ay/yıl gibi daha geniş dönem için in kullanın.",
    quiz: { prompt: "My birthday is ___ May.", choices: ["in", "on", "at"], answerIndex: 0, explanation: "Ay adlarıyla in kullanılır." },
  },
  {
    id: "past-be",
    order: 18,
    level: "A1",
    title: "Was / were: to be fiilinin geçmişi",
    objective: "Geçmişteki durum ve konumlar için was/were kullanmak.",
    explanation: "I/he/she/it ile was; you/we/they ile were kullanılır. Olumsuzda wasn't/weren't; soruda was/were başa geçer.",
    pattern: "I/He/She/It was · You/We/They were",
    examples: [
      { en: "The lecture was interesting yesterday.", tr: "Dünkü ders ilginçti." },
      { en: "Were the results accurate?", tr: "Sonuçlar doğru muydu?" },
    ],
    commonMistake: "They was değil, they were. To be geçmişinde did kullanılmaz.",
    quiz: { prompt: "We ___ at the library last night.", choices: ["was", "were", "did"], answerIndex: 1, explanation: "We ile geçmiş to be biçimi were olur." },
  },
  {
    id: "past-simple",
    order: 19,
    level: "A2",
    title: "Past Simple: düzenli ve düzensiz fiiller",
    objective: "Geçmişte tamamlanmış eylemleri anlatmak.",
    explanation: "Düzenli fiiller çoğunlukla -ed alır. Düzensiz fiillerin ikinci biçimi öğrenilir. Soru ve olumsuzda did kullanılır, ana fiil yalın kalır.",
    pattern: "affirmative: verb-ed/irregular · negative/question: did + base verb",
    examples: [
      { en: "They visited the museum last week.", tr: "Geçen hafta müzeyi ziyaret ettiler." },
      { en: "She wrote a detailed report.", tr: "Ayrıntılı bir rapor yazdı." },
    ],
    commonMistake: "Did you went değil, Did you go. Did kullanıldığında ana fiil yalın olur.",
    quiz: { prompt: "He ___ the article yesterday.", choices: ["read", "reads", "is reading"], answerIndex: 0, explanation: "Cümlede yesterday var; Past Simple gerekir. Read'in yazılışı aynı, geçmişte telaffuzu /red/ olur." },
  },
  {
    id: "wh-questions",
    order: 20,
    level: "A1",
    title: "Soru sözcükleri: what, where, when, why, who, how",
    objective: "Bilgi sorularında soru sözcüğünü doğru yardımcı fiille kullanmak.",
    explanation: "Soru sözcüğü genellikle cümlenin başına gelir. Ardından yardımcı fiil, özne ve ana fiil gelir; to be sorularında be öznenin önüne geçer.",
    pattern: "Wh-word + do/does/did + subject + base verb?",
    examples: [
      { en: "Where does the bus stop?", tr: "Otobüs nerede durur?" },
      { en: "Why were the results different?", tr: "Sonuçlar neden farklıydı?" },
    ],
    commonMistake: "Where the bus stops? yerine Where does the bus stop? kullanın.",
    quiz: { prompt: "___ do you go to the library? — To study.", choices: ["Why", "Where", "Who"], answerIndex: 0, explanation: "To study bir amaç bildirir; soru sözcüğü why olur." },
  },
  {
    id: "modals-basic",
    order: 21,
    level: "A2",
    title: "Can, should, must: beceri, öneri ve zorunluluk",
    objective: "Temel kiplik anlamlarını ve fiil biçimini doğru kullanmak.",
    explanation: "Can beceri/olasılık, should öneri, must güçlü zorunluluk bildirir. Bu modal fiillerden sonra ana fiil yalın biçimde gelir; üçüncü tekil kişide -s almaz.",
    pattern: "subject + can/should/must + base verb",
    examples: [
      { en: "You should check the source carefully.", tr: "Kaynağı dikkatlice kontrol etmelisin." },
      { en: "This device can measure temperature.", tr: "Bu cihaz sıcaklığı ölçebilir." },
    ],
    commonMistake: "She can speaks değil, she can speak. Modalden sonra fiile -s eklenmez.",
    quiz: { prompt: "You ___ wear a seat belt; it is required by law.", choices: ["must", "can", "might"], answerIndex: 0, explanation: "Yasal zorunluluk için must uygundur." },
  },
  {
    id: "comparatives",
    order: 22,
    level: "A2",
    title: "Comparative ve superlative sıfatlar",
    objective: "İki şeyi karşılaştırmak ve bir grubun en üstün niteliğini belirtmek.",
    explanation: "Kısa sıfatlarda comparative için -er, superlative için the -est sık görülür. Uzun sıfatlarda more/most kullanılır; düzensiz biçimleri de vardır.",
    pattern: "small → smaller → the smallest · useful → more useful → the most useful",
    examples: [
      { en: "This explanation is clearer than the first one.", tr: "Bu açıklama ilkinden daha açık." },
      { en: "It is the most important finding in the report.", tr: "Rapordaki en önemli bulgu budur." },
    ],
    commonMistake: "More easier demeyin: easier. Comparative karşılaştırmasında çoğunlukla than kullanılır.",
    quiz: { prompt: "This method is ___ than the old one. (effective)", choices: ["effectiver", "more effective", "most effective"], answerIndex: 1, explanation: "Effective uzun bir sıfattır; comparative biçimde more effective kullanılır." },
  },
  {
    id: "future-plans",
    order: 23,
    level: "A2",
    title: "Gelecek: be going to ve will",
    objective: "Planlanmış niyet ile anlık karar/tahmini ayırt etmeye başlamak.",
    explanation: "Be going to önceden düşünülmüş plan ve kanıta dayalı tahminlerde sık kullanılır. Will anlık karar, teklif ve genel tahminlerde kullanılır. Kullanım bağlama göre örtüşebilir.",
    pattern: "subject + am/is/are going to + verb · subject + will + verb",
    examples: [
      { en: "We are going to review the unit tonight.", tr: "Bu akşam üniteyi tekrar etmeyi planlıyoruz." },
      { en: "I think the results will improve.", tr: "Sonuçların iyileşeceğini düşünüyorum." },
    ],
    commonMistake: "Going to'dan sonra be fiilini atlamayın: She is going to study.",
    quiz: { prompt: "Look at those dark clouds! It ___ rain.", choices: ["is going to", "did", "has"], answerIndex: 0, explanation: "Görülen kanıta dayalı yakın tahminde be going to uygundur." },
  },
  {
    id: "present-simple-vs-continuous",
    order: 24,
    level: "A2",
    title: "Present Simple mı, Present Continuous mı?",
    objective: "Rutin ile şu anda/geçici olarak süren eylemi ayırt etmek.",
    explanation: "Present Simple rutin ve genel gerçekleri; Present Continuous şu anda veya geçici olarak devam eden eylemleri anlatır. Zaman ifadeleri ipucu verir ama bağlamı da okuyun.",
    pattern: "routine/fact: Present Simple · happening now/temporary: am/is/are + verb-ing",
    examples: [
      { en: "She works in a hospital, but this week she is working from home.", tr: "Bir hastanede çalışır; ancak bu hafta evden çalışıyor." },
      { en: "The Earth moves around the Sun.", tr: "Dünya Güneş'in etrafında döner." },
    ],
    commonMistake: "Her zaman fiile -ing eklemeyin; genel gerçeklerde Present Simple kullanılır.",
    quiz: { prompt: "At the moment, the researchers ___ the samples.", choices: ["analyze", "are analyzing"], answerIndex: 1, explanation: "At the moment şu anda devam eden eylemi gösterir; Present Continuous gerekir." },
  },
] as const;

export function getGrammarLesson(id: string): GrammarLesson | undefined {
  return GRAMMAR_LESSONS.find((lesson) => lesson.id === id);
}

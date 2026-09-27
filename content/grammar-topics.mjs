// ============================================================
// content/grammar-topics.mjs
// YDS Sesli Gramer & Hafıza Kodları Havuzu
// ALi CÜMLEci, DEDE İSİMci ve kritik YDS gramer taktikleri
// ============================================================

export const AUDIO_GRAMMAR_TOPICS = [
  {
    id: "ali-cumleci-dede-isimci",
    slug: "conjunctions",
    title: "Zıtlık Bağlaçları: ALi CÜMLEci vs DEDE İSİMci",
    subtitle: "YDS'nin En Çok Soru Çıkaran Bağlaç Formülü",
    category: "clauses",
    duration: 380, // saniye
    audioUrl: "/audio/grammar/ali-cumleci-dede-isimci.mp3",
    memoryCode: "ALi CÜMLEci (Although) vs DEDE İSİMci (Despite)",
    summary:
      "Zıtlık bağlaçlarında boşluktan hemen sonra tam cümle mi (S+V+O) yoksa isim/isim öbeği mi geldiğine bakarak 5 saniyede şıkları eleme taktiği.",
    keyPoints: [
      "ALi CÜMLEci Grubu: Although, Even though, Though, In spite of the fact that, While, Whereas ➔ Ardından mutlaka TAM CÜMLE (Özne + Yüklem) gelir.",
      "DEDE İSİMci Grubu: Despite, In spite of, Notwithstanding, Regardless of ➔ Asla cümle almaz; İSİM, İsim Öbeği veya V-ing alır.",
      "Tuzak: 'The fact that' eklenirse DEDE grubu da CÜMLE alır! (Despite the fact that + SVO)",
      "While ve Whereas zıtlığında genellikle özne karşılaştırması aranır (While dogs are social, cats are independent).",
    ],
    script: `
Merhaba YDS yolcusu! Bugün sınavın en garanti 3 ila 4 sorusunu cebimize koyuyoruz: Zıtlık bağlaçları ve meşhur hafıza kodumuz: ALi CÜMLEci ve DEDE İSİMci!

Sınavda bir bağlaç sorusu gördüğünde ve şıklarda Although, Despite, While gibi kelimeler olduğunda yapacağın İLK ŞEY Türkçeye çevirmek DEĞİLDİR!
İlk bakacağın yer: Boşluktan hemen sonraki yapıdır.

Kodumuzu hatırlayalım:
Birinci karakterimiz: ALi CÜMLEci!
Adı üstünde, Ali her zaman tam bir cümle ister!
Kimdir bu Ali? Although, Even though, Though, While, Whereas ve In spite of the fact that.
Bunları gördüğün an arkasından mutlaka bir ÖZNE ve FİİL (yani tam bir cümle) gelmelidir.
Örnek: "Although it rained heavily, we enjoyed the trip." Bak, it rained tam bir cümledir!

İkinci karakterimiz: DEDE İSİMci!
Dede yorulmak istemez, uzun uzun cümlelerle uğraşmaz, arkasına sadece tek bir İSİM veya İsim Öbeği (Noun Phrase / V-ing) alır!
Kimdir bu Dedeler? Despite, In spite of, Notwithstanding, Regardless of.
Örnek: "Despite the heavy rain, we enjoyed the trip." Bak, the heavy rain bir isimdir, fiili yoktur!

Buradaki kritik ÖSYM tuzağı nedir biliyor musun?
Eğer bir dedenin peşine "the fact that" gelirse, büyü bozulur ve o da cümle alır! Yani "Despite the fact that it rained..." cümle alır.
Bu taktiği aklında tut: Boşluktan sonra fiil varsa ALi, fiil yok sadece isim varsa DEDE!
    `,
  },
  {
    id: "sebahattin-cumleci-sevim-isimci",
    slug: "adverbial-clauses",
    title: "Sebep Bağlaçları: SEBAHATTİN CÜMLEci vs SEVİM İSİMci",
    subtitle: "Because vs Due to Ayrımı ve Sebep Yapıları",
    category: "clauses",
    duration: 350,
    audioUrl: "/audio/grammar/sebahattin-cumleci-sevim-isimci.mp3",
    memoryCode: "SEBAHATTİN CÜMLEci (Because) vs SEVİM İSİMci (Due to)",
    summary:
      "Sebep bildiren yapılarda tam cümle alanlar ile sadece isim/V-ing alanları ayırt ederek paragraf ve cümle tamamlama sorularını hızla çözme formülü.",
    keyPoints: [
      "SEBAHATTİN CÜMLEci: Because, Since, As, Inasmuch as, Seeing that, Given that ➔ Tam Cümle (S+V+O) alır.",
      "SEVİM İSİMci: Because of, Due to, Owing to, On account of, Thanks to, In view of ➔ İsim veya V-ing alır.",
      "Önemli Kural: 'Due to' yapısı geleneksel olarak 'be + due to' şeklinde isimden sonra tercih edilir; 'Because of' ise zarf olarak cümleyi niteler.",
      "Thanks to genellikle olumlu sonuçlarda ('sayesinde') kullanılır.",
    ],
    script: `
Dostum selam! Gramerin ikinci büyük ikilisindeyiz: Sebep bildiren bağlaçlar!
Kodumuz: SEBAHATTİN CÜMLEci ve SEVİM İSİMci.

Tıpkı zıtlık bağlaçlarında olduğu gibi, sebep bağlaçlarında da soru kökündeki boşluğun ardı anahtardır.
Sebahattin Cümleci grubundaki bağlaçlar: Because, Since, As, Inasmuch as ve Seeing that.
Bunlar her zaman "çünkü / dığı için" anlamı katar ve arkasından öznesi, fiili olan tam bir cümle ister.
Örnek: "Since global temperatures are rising, glaciers melt rapidly."

Peki Sevim İsimci kimdir?
Because OF, Due TO, Owing TO, On account OF, Thanks TO.
Dikkat ettiysen hepsinin sonunda bir edat (preposition) var! İngilizcede edatlardan sonra cümle gelmez, isim veya fiilin -ing hali gelir.
Örnek: "Due to rising global temperatures, glaciers melt rapidly."

ÖSYM sınavlarında özellikle "Given that" ile "Given" ayrımına dikkat et:
Given that ➔ Sebahattin'dir, Cümle alır!
Given ➔ Sevim'dir, İsim alır!
Bu ayrımı bildiğin an, şıklardaki iki çeldiriciyi ilk 3 saniyede elersin.
    `,
  },
  {
    id: "by-the-time-tense-uyumu",
    slug: "tenses",
    title: "Tense Uyumu & Altın 'By the time' Formülü",
    subtitle: "Zaman Bağlaçlarında Zaman Tüneli Kuralları",
    category: "tenses",
    duration: 390,
    audioUrl: "/audio/grammar/by-the-time-tense-uyumu.mp3",
    memoryCode: "By the Time (Past ➔ Had V3 / Present ➔ Will Have V3)",
    summary:
      "Zaman bağlaçlarının içinde Asla Will/Would gelmeme kuralı ve By the time gördüğünde doğrudan Perfect Tense'e gitme refleksleri.",
    keyPoints: [
      "Temel Kural: Zaman bağlacı olan yan cümlede (When, While, As soon as, By the time, Until) ASLA will, would veya be going to kullanılmaz!",
      "By the time + V2 (Simple Past) ➔ Ana Cümle: had V3 (Past Perfect)",
      "By the time + V1 (Simple Present) ➔ Ana Cümle: will have V3 (Future Perfect)",
      "Since İstisnası: Since + Past Simple (V2) ➔ Ana Cümle: Present Perfect (have/has V3)",
    ],
    script: `
Kulaklığını tak ve arkana yaslan kanka! Şimdi YDS soru kitapçığının ilk 15 sorusunda en az 2 tane çıkan Tense Uyum kuralını inceliyoruz.

Kural 1: Zaman bağlacının içine (yani bağlaçtan hemen sonraki cümleye) ASLA 'will' veya 'would' YAZILAMAZ!
Şıklarda When he will come, As soon as they would arrive görürsen o şıkları elinin tersiyle it!

Kural 2: 'By the time' gördün mü hemen nefesini tut ve şu iki şablonu ara:
Birinci Şablon: By the time + Geçmiş (V2) varsa, diğer taraf kesinlikle 'had V3' (Past Perfect) olur.
"By the time the ambulance arrived, the patient had already recovered."
İkinci Şablon: By the time + Geniş Zaman (V1) varsa, diğer taraf kesinlikle 'will have V3' (Future Perfect) olur!
"By the time you graduate in 2028, technology will have transformed the industry."

Kural 3: 'Since' bağlacı kuralı.
Since geçmişte bir başlangıç noktası verir: "Since the industrial revolution began (V2), pollution HAS INCREASED (have/has V3)."
Zaman uyumunda Past ile Present karışmaz, tek istisnası işte bu 'Since' yapısıdır.
    `,
  },
  {
    id: "if-clauses-devrik",
    slug: "conditionals",
    title: "If Clauses & Sınavın Gizli Silahı Devrik (Inversion) Şartlar",
    subtitle: "Should, Were ve Had ile Başlayan Gizli Koşul Cümleleri",
    category: "structures",
    duration: 410,
    audioUrl: "/audio/grammar/if-clauses-devrik.mp3",
    memoryCode: "İF'siz Koşul: Should (Type 1), Were (Type 2), Had (Type 3)",
    summary:
      "If cümleden atıldığında cümlenin başına geçen yardımcı fiiller ve YDS'nin bayıldığı tersyüz edilmiş (devrik) şart yapıları.",
    keyPoints: [
      "Type 1 Devriği: If you need help ➔ Should you need help...",
      "Type 2 Devriği: If I were you ➔ Were I you... / If he knew ➔ Were he to know...",
      "Type 3 Devriği: If they had warned us ➔ Had they warned us...",
      "Gizli Şart İfadeleri: Provided that, As long as, Unless (= If not), But for / Without (+ Noun).",
    ],
    script: `
Hoş geldin! YDS soru yazarlarının en çok sevdikleri tuzaklardan biri: Cümlede 'If' kelimesi YOKTUR ama soru aslında bal gibi bir IF koşul sorusudur!
Peki If nereye kayboldu? Devrik yapıldı (Inversion)!

Üç altın devrik kalıbımız var:
1. Type 1 Devriği: Cümlenin başında 'Should' görürsen ve sonunda soru işareti YOKSA, o bir If demektir!
Normali: "If anyone calls, tell them I'm busy."
Devriği: "Should anyone call, tell them I'm busy."

2. Type 2 Devriği: Cümle 'Were' ile başlar:
Normali: "If the government took strict measures..."
Devriği: "Were the government TO take strict measures..."

3. Type 3 Devriği (En çok çıkan!): Cümle 'Had' ile başlar, ardından özne ve V3 gelir!
Normali: "If scientists had discovered the vaccine earlier, many lives would have been saved."
Devriği: "Had scientists discovered the vaccine earlier, many lives would have been saved."

Bunu gördüğün an diğer tarafta 'would have V3' veya 'could have V3' ara! 10 saniyede netini al ve sıradaki soruya geç!
    `,
  },
  {
    id: "relative-clause-kisaltmalari",
    slug: "relative-clauses",
    title: "Relative Clause Kısaltmaları: V-ing vs V3 Formülü",
    subtitle: "Akademik Cümlelerin Belkemiği Sıfat Kısaltmaları",
    category: "clauses",
    duration: 370,
    audioUrl: "/audio/grammar/relative-clause-kisaltmalari.mp3",
    memoryCode: "Aktifse V-ing, Pasifse V3, Zaman Farkı Varsa Having V3",
    summary:
      "Which/Who/That atıldığında fiilin aldığı biçimler ve boşluk sonrasında nesne olup olmamasına göre anında doğru kısaltmayı seçme yöntemi.",
    keyPoints: [
      "Aktif Eylemlerde: Fiil köküne -ing eklenir (The students who study hard ➔ The students studying hard).",
      "Pasif Eylemlerde: Fiilin 3. hali kalır (The papers that were published ➔ The papers published).",
      "Boşluktan sonra NESNE varsa ➔ Aktif (V-ing) tercih edilir.",
      "Boşluktan sonra EDAT (by, in, on, with) varsa ➔ Pasif (V3) tercih edilir.",
    ],
    script: `
Sevgili arkadaşım, YDS okuma parçalarında ve gramer sorularında her cümlenin içinde bir kısaltma gizlidir.
Uzun uzun 'The device which was invented in 1920' demek yerine akademisyenler 'The device invented in 1920' der!

Buradaki kural şudur:
İsmin hemen arkasından bir kısaltma geliyorsa:
1. Eğer o isim eylemi KENDİSİ YAPIYORSA (aktifse) ➔ Fiil -ing alır!
Örnek: "Scientists researching renewable energy..." (Araştırmayı bilim insanları yapıyor, aktif, researching).

2. Eğer o isim eyleme MARUZ KALIYORSA (pasifse) ➔ Fiilin 3. hali (V3) kullanılır!
Örnek: "The methods used in this experiment..." (Metotlar kullanıldı, pasif, used).

İpucu: Boşluktan sonra doğrudan bir nesne geliyorsa genellikle aktif kısaltma (-ing), boşluktan sonra 'by, in, to, for' gibi bir edat geliyorsa genellikle pasif kısaltma (V3) doğrudur.
Kulak hafızana bunu kazı: Aktifse -ing, Pasifse V3!
    `,
  },
  {
    id: "perfect-modals-cikarmalar",
    slug: "modals-perfect",
    title: "Perfect Modals: Geçmişe Yönelik Çıkarımlar & Pişmanlıklar",
    subtitle: "Must have V3, Should have V3, Couldn't have V3",
    category: "structures",
    duration: 360,
    audioUrl: "/audio/grammar/perfect-modals-cikarmalar.mp3",
    memoryCode: "Must have (Kesin yapmış), Should have (Yapmalıydı yapmadı)",
    summary:
      "Modalların 'have + V3' ile geçmişe taşınması, mantıksal kesinlik ve YDS soru köklerindeki zaman ipuçlarıyla doğru modalı bulma sanatı.",
    keyPoints: [
      "Must have V3: Geçmişe yönelik %99 kuvvetli çıkarım ('Yapmış olmalı').",
      "Can't / Couldn't have V3: Geçmişe yönelik imkânsızlık ('Yapmış olamaz').",
      "Should have V3: Yapmalıydı ama yapmadı (Eleştiri / Pişmanlık).",
      "Needn't have V3: Yapmasına gerek yoktu ama boşuna yaptı.",
      "May / Might / Could have V3: Yapmış olabilir (Geçmişte zayıf ihtimal).",
    ],
    script: `
Modal konusu YDS'de ikiye ayrılır: Şimdiki zaman modalları ve geçmişe giden 'Perfect Modals'!
Eğer bir sorunun kökünde geçmiş zaman ipucu varsa (in the 19th century, yesterday, ancient civilizations) şıklardaki düz modalları (must, should, can) derhal eleyip 'Modal + have + V3' yapılarına odaklanmalısın.

Anlamlarını hızlıca kodlayalım:
1. "Must have V3": Sherlock Holmes yapısıdır! Ortada güçlü bir kanıt vardır ve geçmişe dair kesin tahminde bulunursun.
"The ground is wet; it must have rained last night." (Yer ıslak, dün gece yağmış olmalı!)

2. "Should have V3": Ah vah yapısıdır! Keşke yapsaydı ama yapmadı!
"You scored 65 on YDS; you should have studied more vocabulary!" (Daha çok kelime çalışmalıydın ama çalışmadın!)

3. "Couldn't have V3": Mümkün değil yapısıdır!
"He was in Paris yesterday; he couldn't have committed the crime in Ankara!" (Ankara'da suçu işlemiş olamaz!)

Soruda kanıt ve mantık varsa Must have; hata ve pişmanlık varsa Should have! Bu kadar net.
    `,
  },
];

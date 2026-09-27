// ============================================================
// src/lib/audio/tracks.ts
// YDS Sesli Gramer & Hafıza Kodları Parça Listesi ve Yardımcılar
// ============================================================

export interface AudioTrack {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "clauses" | "tenses" | "structures" | "advanced";
  duration: number; // saniye
  audioUrl: string;
  memoryCode: string;
  summary: string;
  keyPoints: string[];
  script: string;
}

export const AUDIO_TRACKS: AudioTrack[] = [
  {
    id: "ali-cumleci-dede-isimci",
    slug: "conjunctions",
    title: "Zıtlık Bağlaçları: ALi CÜMLEci vs DEDE İSİMci",
    subtitle: "YDS'nin En Çok Soru Çıkaran Bağlaç Formülü",
    category: "clauses",
    duration: 380,
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
    script:
      "Merhaba YDS yolcusu! Bugün sınavın en garanti 3 ila 4 sorusunu cebimize koyuyoruz: Zıtlık bağlaçları ve meşhur hafıza kodumuz: ALi CÜMLEci ve DEDE İSİMci! Sınavda bir bağlaç sorusu gördüğünde ve şıklarda Although, Despite, While gibi kelimeler olduğunda yapacağın İLK ŞEY Türkçeye çevirmek DEĞİLDİR! İlk bakacağın yer: Boşluktan hemen sonraki yapıdır. Kodumuzu hatırlayalım: Birinci karakterimiz: ALi CÜMLEci! Kimdir bu Ali? Although, Even though, Though, While, Whereas. Bunları gördüğün an arkasından mutlaka tam bir cümle (SVO) gelmelidir. İkinci karakterimiz: DEDE İSİMci! Despite, In spite of, Regardless of. Bunlar sadece isim veya V-ing alır!",
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
    script:
      "Dostum selam! Gramerin ikinci büyük ikilisindeyiz: Sebep bildiren bağlaçlar! Kodumuz: SEBAHATTİN CÜMLEci ve SEVİM İSİMci. Sebahattin Cümleci grubundaki bağlaçlar: Because, Since, As, Inasmuch as ve Seeing that. Bunlar her zaman 'çünkü / dığı için' anlamı katar ve arkasından öznesi, fiili olan tam bir cümle ister. Sevim İsimci kimdir? Because OF, Due TO, Owing TO, On account OF, Thanks TO. Hepsinin sonunda bir edat vardır; edatlardan sonra cümle gelmez, isim veya V-ing gelir!",
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
    script:
      "Kulaklığını tak ve arkana yaslan kanka! Şimdi YDS soru kitapçığının ilk 15 sorusunda en az 2 tane çıkan Tense Uyum kuralını inceliyoruz. Kural 1: Zaman bağlacının içine ASLA will veya would yazılamaz! Kural 2: 'By the time' gördün mü hemen şu iki şablonu ara: By the time + V2 varsa diğer taraf kesinlikle 'had V3' olur. By the time + V1 varsa diğer taraf 'will have V3' olur!",
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
    script:
      "Hoş geldin! YDS soru yazarlarının en çok sevdikleri tuzaklardan biri: Cümlede 'If' kelimesi YOKTUR ama soru aslında bal gibi bir IF koşul sorusudur! Peki If nereye kayboldu? Devrik yapıldı! 1. Type 1 Devriği: Cümlenin başında 'Should' görürsen ve soru işareti yoksa o bir If demektir. 2. Type 2 Devriği: Cümle 'Were' ile başlar. 3. Type 3 Devriği: Cümle 'Had' ile başlar, arkasından özne ve V3 gelir!",
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
    script:
      "Sevgili arkadaşım, YDS okuma parçalarında ve gramer sorularında her cümlenin içinde bir kısaltma gizlidir. Kural şudur: İsmin hemen arkasından gelen kısaltmada, eğer o isim eylemi kendisi yapıyorsa fiil -ing alır! Eğer eyleme maruz kalıyorsa fiilin 3. hali (V3) kullanılır! İpucu: Boşluktan sonra nesne varsa aktif (-ing), edat varsa pasif (V3) seçilir!",
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
    script:
      "Modal konusu YDS'de ikiye ayrılır: Şimdiki zaman modalları ve geçmişe giden Perfect Modals! Anlamlarını hızlıca kodlayalım: 1. Must have V3: Sherlock Holmes yapısıdır, güçlü kanıt vardır ('Yer ıslak, yağmış olmalı'). 2. Should have V3: Ah vah yapısıdır ('Daha çok çalışmalıydın ama çalışmadın'). 3. Couldn't have V3: Mümkün değil yapısıdır ('O yapmış olamaz'). Soruda kanıt varsa Must have, hata varsa Should have!",
  },
];

export function getTrackById(id: string): AudioTrack | undefined {
  return AUDIO_TRACKS.find((t) => t.id === id);
}

export function getTracksByCategory(category: string): AudioTrack[] {
  if (category === "all") return AUDIO_TRACKS;
  return AUDIO_TRACKS.filter((t) => t.category === category);
}

const STORAGE_KEY_PREFIX = "yds_audio_progress_";

export function saveTrackProgress(trackId: string, currentSeconds: number, completed: boolean) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(
      `${STORAGE_KEY_PREFIX}${trackId}`,
      JSON.stringify({
        currentSeconds: Math.floor(currentSeconds),
        completed,
        updatedAt: new Date().toISOString(),
      })
    );
  } catch {
    // // SAFETY: Storage failover
  }
}

export function getTrackProgress(trackId: string): { currentSeconds: number; completed: boolean } | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}${trackId}`);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
